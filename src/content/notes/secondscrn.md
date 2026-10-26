---
title: "SecondScrn: getting a Windows desktop onto my tablet"
summary: "A Rust core, two native apps, and the video bugs I had to chase before my tablet could become a second monitor."
order: -1
draft: false
---

My Xiaomi Pad 7 Pro now has a place in Windows Display settings. I can drag a
window onto it, put it beside my other monitors, and use the tablet's pen in
a Windows application. The tablet is still running Android; SecondScrn handles
the connection to the PC over Wi-Fi.

I released **version 0.0.1 on 25 October 2026**. It has a Rust core, a WinUI 3
app on Windows and a Jetpack Compose app on Android. Getting all three to agree
on what a video frame is turned out to matter quite a lot.

[Download the first release ↗](https://github.com/niposch/SecondScrn/releases/tag/v0.0.1)

## Starting with the monitor

SecondScrn uses the existing open-source
[Virtual Display Driver](https://github.com/VirtualDrivers/Virtual-Display-Driver)
to give Windows an extra monitor. I didn't write that driver. My part is the
software around it: capturing the display, getting the picture to Android,
returning input, pairing the devices and recovering when the connection drops.

The picture takes this route: Windows Graphics Capture → D3D11 colour
conversion → Media Foundation hardware encoder → WebRTC → Android MediaCodec.
Uncompressed pixels stay on the GPU until the encoder produces a bitstream.
The two devices negotiate HEVC, H.264 or AV1 depending on their hardware.

That route is fairly tidy on paper. The first build on my physical tablet
managed about 4–6 frames per second.

## The desktop was too quiet

A desktop can do almost nothing for several seconds, then change most of its
pixels when I move a window. The original bandwidth estimator followed the low
idle send rate. When a large frame finally arrived, the pacer let it trickle out
at that rate. The picture could spend seconds waiting to leave the PC.

I replaced that path with bitrate control based on receiver feedback. Loss and
delay adjust the encoder's budget. The host sends frames on a fixed clock,
keeping the newest capture while the encoder is busy. An idle desktop no longer
sets the pace for the next big change.

There was also a less exotic problem: Windows' default 64 KB UDP send buffer
couldn't hold a large frame burst. Packets were being lost locally, before the
Wi-Fi connection got a chance to lose them. Larger socket buffers fixed that
part. On Android, decoding received frames but only presenting the newest ready
picture helped prevent a backlog without breaking the codec's reference chain.

## One picture, several slices, several ghost cursors

Another bug had a much better visual signature: smeared blocks and ghost
cursors. The hardware encoder produced HEVC pictures containing multiple slices,
but the transport library handed those slices to the decoder as separate frames.

The fix in the vendored library was one line, plus a regression test. Finding
the right line required following the picture across the encoder, packetizer
and decoder. The frame counters were a useful clue: the tablet reported more
frames arriving than the PC had sent.

## Input travels back

Seeing a Windows window on the tablet is only half the connection. A pen stroke
needs to arrive back at the PC as a pen stroke, with pressure. SecondScrn sends
touch and pen events over an authenticated TLS control channel, separate from
the WebRTC video stream, and injects them as Windows touch and pen input.
There is also a touch-as-mouse mode for apps that need it.

The devices connect directly over the local network. Pairing asks me to enter
the tablet's six-digit code on the PC; afterwards they remember each other's
identities. The code exchange is bound to the connection, and later connections
use pinned certificates. No account or signalling server is involved.

Pairing and session handling live in Rust, shared by both apps through UniFFI.
Windows and Android implement the platform-specific parts behind interfaces.
That means I can test reconnection, negotiation and input handling with fake
platforms instead of needing a tablet connected for every test.

## On my desk, so far

My hardware is Windows 11, an NVIDIA RTX 4080 SUPER and that Xiaomi Pad 7 Pro.
Touch and pen pressure have been tested on the actual tablet. The repository
includes a
[physical performance matrix](https://github.com/niposch/SecondScrn/blob/v0.0.1/docs/performance-0.0.1.md),
with results from this setup. I still need broader GPU and tablet coverage, and
a proper end-to-end latency measurement.

It is version 0.0.1. There is one tablet per session, no HDR or keyboard
forwarding yet, and 4:2:0 video can soften very fine coloured text. The external
display driver has also crashed during repeated mode changes. The
[status page](https://github.com/niposch/SecondScrn/blob/v0.0.1/docs/status.md)
records the remaining problems, including a scrolling-distance mismatch reported
in one application.

The [first release](https://github.com/niposch/SecondScrn/releases/tag/v0.0.1)
has the Windows installer and Android APK. You'll need Windows 11 x64, Android
10 or newer and compatible hardware video encoding/decoding. The driver needs
administrator approval once; the unsigned Windows app may trigger SmartScreen.
Setup instructions and the rest of the architecture are in the repository.

[Source, setup and architecture ↗](https://github.com/niposch/SecondScrn)

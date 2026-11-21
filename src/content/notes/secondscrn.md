---
title: "SecondScrn: getting a Windows desktop onto my tablet"
summary: "A Rust core, two native apps, and the weird video bugs between 5 FPS and a usable wireless monitor."
order: -1
draft: false
---

My Xiaomi Pad 7 Pro now shows up right inside Windows Display settings. I can
drag windows onto it, line it up beside my real monitors, and use the tablet's
pen in Windows apps, all over local Wi-Fi while the tablet stays on Android.

I shipped the first public build, **v0.0.1**, on 25 October 2026 (with
[newer releases](https://github.com/niposch/SecondScrn/releases/latest)
following since). Under the hood it's a shared Rust core with a WinUI 3 app on
Windows and a Jetpack Compose app on Android. Getting all three to agree on
what a single video frame looks like turned out to be half the project.

[Download the latest release ↗](https://github.com/niposch/SecondScrn/releases/latest)

## Starting with the monitor

The virtual monitor itself comes from the open-source
[Virtual Display Driver](https://github.com/VirtualDrivers/Virtual-Display-Driver).
I didn't write that driver. My part is everything wrapped around it: capturing
the desktop, streaming it to Android, sending touch and pen input back, pairing
the two devices, and recovering cleanly when Wi-Fi hiccups.

On paper, the video pipeline is neat: Windows Graphics Capture → D3D11 colour
conversion → Media Foundation hardware encoder → WebRTC → Android MediaCodec.
Raw pixels never leave the GPU until they're compressed, and the two sides
negotiate HEVC, H.264, or AV1 depending on hardware support.

In practice, my very first run on the physical tablet limped along at about
4–6 FPS.

## The desktop was too quiet

Unlike a game, a desktop can sit completely still for seconds and then redraw
half the screen the instant you drag a window. The default bandwidth estimator
saw that quiet idle bitrate, clamped down to match it, and when a big frame
finally hit, the pacer trickled it out at a crawl. Frames were sitting on the
PC for seconds before even leaving the socket.

Switching to receiver-feedback bitrate control fixed that: loss and delay set
the encoder's budget, while the host ticks on a steady clock and always grabs
the newest capture whenever the encoder is busy. Now a quiet desktop doesn't
kneecap the next burst of motion.

Right next to that was a much less glamorous bug: Windows' default 64 KB UDP
send buffer couldn't absorb a big keyframe burst, so packets were getting
dropped locally before they even hit Wi-Fi. Bumping the socket buffers cleared
that up immediately. On Android, decoding every incoming frame while only
presenting the newest ready surface stopped queues from building up without
breaking codec reference frames.

## One picture, several slices, several ghost cursors

My favourite bug looked wild: smeared macroblocks and trailing ghost cursors.
The hardware encoder was outputting multi-slice HEVC frames, and the transport
library happily handed each slice to Android's decoder as if it were a brand-new
frame.

The actual fix in the vendored library was a single line (plus a regression
test), but tracking it down meant tracing a frame all the way from encoder to
packetizer to decoder. Frame counters gave it away: the tablet claimed it was
receiving more frames than the PC ever sent.

## Sending touch and pen input back

A picture on the tablet is only half the deal. When I put the pen down, Windows
needs to see real pen input with pressure, not a simulated mouse click.
SecondScrn sends touch and pen events back over a separate authenticated TLS
channel and injects them natively on Windows (with a touch-as-mouse toggle for
apps that prefer it).

Everything stays on the local network, with no accounts or signalling server.
You type a six-digit code shown on the tablet into the PC once, the pairing is
bound to the connection, and future sessions reconnect using pinned
certificates.

Because pairing and session logic live in the shared Rust core (bridged via
UniFFI), both Windows and Android plug in behind clean traits. That lets me
test reconnection, negotiation, and input handling with fake platforms instead
of keeping a tablet plugged in for every test run.

## Where it stands

I built and tested v0.0.1 on Windows 11 with an RTX 4080 SUPER and a Xiaomi Pad
7 Pro; numbers from that desk setup are in the
[performance notes](https://github.com/niposch/SecondScrn/blob/v0.0.1/docs/performance-0.0.1.md).
Broader GPU/tablet testing and proper glass-to-glass latency measurements are
still on my list.

It's a genuine 0.0.1: one tablet at a time, SDR only, no keyboard forwarding
yet, and 4:2:0 chroma can soften tiny coloured text. Rapid mode switches can
also make the external display driver crash. I keep a running list of known
quirks (like a scroll-distance mismatch in one app) on the
[status page](https://github.com/niposch/SecondScrn/blob/v0.0.1/docs/status.md).

The [latest release](https://github.com/niposch/SecondScrn/releases/latest)
has the Windows installer, portable ZIP, and Android APK (Windows 11 x64,
Android 10+, hardware encode/decode). Installing the virtual display driver
asks for admin once, and SmartScreen may warn since the installer isn't signed.

[Source, setup and architecture ↗](https://github.com/niposch/SecondScrn)

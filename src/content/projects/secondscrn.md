---
title: "SecondScrn"
summary: "My Android tablet, now in Windows Display settings. A shared Rust core connects a virtual monitor to the tablet’s hardware decoder, with touch and pen input going the other way."
repository: https://github.com/niposch/SecondScrn
stack: ["Rust", "C# / WinUI 3", "Kotlin / Compose"]
status: "First public release"
role: "Original project"
featured: true
order: 1
note: secondscrn
draft: false
---

My Xiaomi Pad 7 Pro now shows up as another monitor in Windows. I can put a
different window on it, move it around in Display settings, and use its touch
screen and pressure-sensitive pen with Windows apps. SecondScrn is the software
I built to make that connection over Wi-Fi.

[Download SecondScrn 0.0.1 for Windows and Android ↗](https://github.com/niposch/SecondScrn/releases/tag/v0.0.1)

## What I built

The monitor itself comes from the existing open-source
[Virtual Display Driver](https://github.com/VirtualDrivers/Virtual-Display-Driver)
project. Around it, I built the Windows host, Android client, video pipeline,
pairing and session handling.

Windows captures the extra display and converts its pixels on the GPU before
hardware encoding. WebRTC carries the compressed video to Android's hardware
decoder. Touch and pen events come back over a separate authenticated TLS
connection. The devices pair with a six-digit code and connect directly;
there is no account or server to run.

Rust handles the shared session and networking code. The interfaces are native:
C# with WinUI 3 on Windows, Kotlin with Jetpack Compose on Android, connected
to the core through UniFFI.

Most of the interesting work happened between those pieces: keeping a mostly
idle desktop responsive, handling bursts of video without building up a queue,
and finding out why a perfectly valid HEVC stream produced ghost cursors.
I wrote about those in the [build post](/notes/secondscrn/).

## Released, with more hardware to try

I released **0.0.1 on 25 October 2026**. My test setup is Windows 11 with an
NVIDIA RTX 4080 SUPER and a Xiaomi Pad 7 Pro. Touch, pen pressure, rotation and
reconnection work on that setup; other GPUs and tablets still need more testing.

The release supports one tablet at a time and SDR video. Fine coloured text
can look soft because of 4:2:0 chroma, keyboard forwarding is still missing,
and repeated mode changes can upset the external display driver. The
[status page](https://github.com/niposch/SecondScrn/blob/v0.0.1/docs/status.md)
keeps track of these limits and the remaining hardware checks.

To try it, you need Windows 11 x64, Android 10 or newer, compatible hardware
video encoding/decoding and a network connection between the devices. The
[release](https://github.com/niposch/SecondScrn/releases/tag/v0.0.1) includes a
Windows installer and Android APK. The driver needs administrator approval once;
the Windows app is unsigned, so SmartScreen may warn. Source is MIT licensed.

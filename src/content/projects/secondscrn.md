---
title: "SecondScrn"
summary: "Turns my Android tablet into a wireless Windows monitor over local Wi-Fi, with hardware-decoded video one way and touch and pen pressure back the other."
repository: https://github.com/niposch/SecondScrn
stack: ["Rust", "C# / WinUI 3", "Kotlin / Compose"]
status: "v0.0.2 released"
role: "Original project"
featured: true
order: 1
note: secondscrn
draft: false
---

My Xiaomi Pad 7 Pro now shows up in Windows Display settings like any other
monitor. I can drag windows over to it, rearrange it next to my desktop screens,
and draw or tap in Windows apps with its pressure-sensitive pen, all over
Wi-Fi. SecondScrn is the app behind that setup.

[Download the latest release for Windows and Android ↗](https://github.com/niposch/SecondScrn/releases/latest)

## How it fits together

The virtual monitor itself comes from the open-source
[Virtual Display Driver](https://github.com/VirtualDrivers/Virtual-Display-Driver).
SecondScrn wraps the rest around it: the Windows host, Android client, GPU
video pipeline, device pairing, and reconnection logic.

Frames stay on the GPU from capture through colour conversion and hardware
encoding, stream over WebRTC to Android's hardware decoder, and touch/pen input
comes back over a separate authenticated TLS connection. Pairing is just a
six-digit code on the local network, with no accounts or cloud server.

The shared session and networking core is in Rust, wired up via UniFFI to
native UIs on both sides: C# with WinUI 3 on Windows and Kotlin with Jetpack
Compose on Android.

Most of the tricky work happened in the glue between those pieces: keeping an
idle desktop snappy when a window suddenly moves, stopping video bursts from
queuing up, and tracking down why a valid HEVC stream was spawning ghost
cursors. I wrote up those bugs in the [build post](/notes/secondscrn/).

## Current state & rough edges

The first public build (**v0.0.1**) went out on 25 October 2026, followed by
**v0.0.2** on 28 October with much lower latency on busy Wi-Fi, reference-frame
recovery on NVIDIA H.264/AV1 to cut down freezes after packet loss, and a
reorganised Windows UI. On my desk (Windows 11, an RTX 4080 SUPER, and a Xiaomi
Pad 7 Pro), touch, pen pressure, screen rotation, and reconnecting all work
well. Other GPUs (AMD/Intel, hybrid laptops) and tablets still need broader
testing, so expect early-release quirks on different hardware.

Right now it handles one tablet at a time in SDR. Fine coloured text can look a
little soft thanks to 4:2:0 chroma, keyboard forwarding isn't in yet, and rapid
mode changes can sometimes trip up the external virtual display driver. Known
rough edges are tracked on the
[status page](https://github.com/niposch/SecondScrn/blob/HEAD/docs/status.md).

You'll need Windows 11 x64, Android 10+, and hardware encode/decode support.
The [latest release](https://github.com/niposch/SecondScrn/releases/latest)
includes a Windows installer, a portable ZIP, and an Android APK (keep PC and
tablet on the same version until 1.0). Installing the virtual display driver
prompts for admin rights once, and SmartScreen may complain since the Windows
build isn't code-signed. MIT licensed.

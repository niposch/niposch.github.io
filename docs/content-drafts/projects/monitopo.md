---
title: MoniTopo
summary: Save and switch complete Windows display configurations.
status: In development
role: Original project
platform: Windows
stack:
  - C#
  - .NET
repository: https://github.com/niposch/MoniTopo
featured: false
order: 10
draft: true
---

<!-- Proposed website content, not yet wired into a collection or published.
The owner should add the personal motivation, screenshots and decisions below. -->

## A display setup is more than a resolution

MoniTopo saves a Windows display configuration as a profile, then lets you
activate it from the system tray or a hotkey. A profile records which displays
are active, where they sit, the primary display, resolution, refresh rate,
orientation, UI scale, and HDR state.

## The interesting constraint

Windows does not expose a stable public contract for setting per-monitor
scaling. MoniTopo probes that capability at runtime. Identical monitors can also
be ambiguous, so manual binding remains part of the workflow.

## Current state

The project is in active development. The first release targets Windows 11 x64;
Windows 10 support is best effort. Synthetic fixtures support automated tests,
but they do not replace validation on real display hardware.

[Source and current status](https://github.com/niposch/MoniTopo)

<!-- Owner inputs to complete this case study:
- The actual setups that motivated it and why Windows' own workflow fell short.
- A real screenshot or brief recording with personal information removed.
- One implementation decision worth explaining, backed by the relevant code.
- A concrete hardware observation; keep prerelease limitations explicit.
-->

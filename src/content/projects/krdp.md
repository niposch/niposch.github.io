---
title: "KRdp"
summary: "My maintained fork of KDE's remote desktop server, pulling in multi-monitor support plus fixes for Windows RDP clients, clipboard freezes, video colours, and bandwidth."
repository: https://github.com/niposch/krdp
stack: ["C++", "KDE"]
status: "Maintained branch: main"
role: "Maintained fork"
featured: true
order: 7
draft: false
---

I keep a patched fork of KDE's KRdp that pulls in `westers/krdp`'s earlier
multi-monitor work and layers on fixes I needed to make Windows RDP sessions
actually usable: no more clipboard lockups, proper video colours, progressive
fallback, and saner bandwidth reporting.

## What's patched

- **Clipboard freezes:** restricting clipboard snapshots to text avoids
  blocking on image offers. Two-way text copy/paste works reliably; image
  clipboard transfer isn't implemented yet.
- **Video & colour:** adds progressive fallback alongside H.264 AVC420. The
  colour fix also needs a matching patch in KPipeWire; building KRdp on its own
  won't pull that in.
- **Bandwidth:** fixes reporting and adds an optional, bounded connection-time
  probe.

Everything lives on `main`, with build notes and physical vs. virtual monitor
layout details in the repo README.

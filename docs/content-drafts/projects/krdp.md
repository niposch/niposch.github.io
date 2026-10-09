---
title: KRdp
summary: A maintained KDE remote desktop fork with multi-monitor Windows RDP and fixes for clipboard, video, and bandwidth reporting.
role: Maintained fork
stack:
  - C++
  - KDE
repository: https://github.com/niposch/krdp
featured: true
order: 4
draft: true
---

## Remote desktop with multiple monitors

This fork combines KDE's KRdp remote desktop server with earlier multi-monitor
work from westers/krdp. It preserves that history and carries fixes for Windows
RDP connections, clipboard freezes, video colours, and bandwidth reporting.

The maintained branch is `main`. Its current README explains the distinction
between streaming physical displays and creating virtual outputs that follow
the connecting client's monitor layout.

## A few of the changes

Text-only clipboard snapshots avoid blocking on image offers. Text works in
both directions; image clipboard transfer is still unimplemented.

The video path supports progressive fallback alongside H.264 AVC420. The colour
fix is a separate KPipeWire dependency patch, rather than something obtained by
building KRdp alone. Bandwidth work corrects reporting and adds an optional,
bounded probe when a connection starts.

[Source, build instructions, and current validation notes](https://github.com/niposch/krdp)

<!-- Source: current main README and recent commit metadata, inspected 2026-10-09.
Do not attribute original KDE/westers features solely to Nick. Do not imply
image clipboard, true AVC444, or universal hardware validation. Add owner-supplied
motivation and a concrete debugging story before turning this into a full post.
No claim of regular use was supplied for KRdp in this conversation.
-->

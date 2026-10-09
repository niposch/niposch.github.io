---
title: "KRdp"
summary: "My fork of KDE's remote desktop server. It keeps earlier multi-monitor work and adds fixes for Windows RDP connections, clipboard freezes, video colours, and bandwidth reporting."
repository: https://github.com/niposch/krdp
stack: ["C++","KDE"]
status: "Maintained branch: main"
role: "Maintained fork"
featured: true
order: 4
draft: false
---

This fork combines KDE's KRdp with earlier multi-monitor work from westers/krdp, preserving that history. It carries fixes for Windows RDP connections, clipboard freezes, video colours, and bandwidth reporting.

## Some of the changes

Text-only clipboard snapshots avoid blocking on image offers. Text works in both directions; image clipboard transfer is still unimplemented.

The video path supports progressive fallback alongside H.264 AVC420. The colour correction needs a separate KPipeWire dependency patch; building KRdp alone does not apply it. Bandwidth work corrects reporting and adds an optional, bounded connection-time probe.

The maintained branch is main. The repository explains physical versus client-shaped virtual monitor layouts, build requirements, and current validation limits.

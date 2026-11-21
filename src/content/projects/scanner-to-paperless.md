---
title: "Scanning to Paperless"
summary: "Press the physical button on my Brother ADS-2100e and duplex PDFs land straight in Paperless, powered by an extended open-source Linux scanner backend."
repository: https://github.com/niposch/brscan-ads-2100e
stack: ["C", "Linux"]
status: "Used regularly"
role: "Backend extension"
featured: true
order: 4
draft: false
note: scanner-to-paperless
---

Load paper, hit the button on the scanner, and a few seconds later a clean
duplex PDF (with blank pages dropped) shows up in Paperless.

Getting Linux to talk properly to the Brother ADS-2100e meant extending an
existing open-source `brscan` SANE backend to handle interleaved duplex
streams, page endings, and device-side JPEG compression. It's solid for my
everyday paperwork, though I still call it experimental since I haven't
exhaustively tested every mode or huge stacks of paper.

The published repo covers the driver extension and its upstream base; a few
extra Paperless-specific tweaks live locally on my server.

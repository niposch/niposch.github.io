---
title: "Scanning to Paperless"
summary: "My Brother ADS-2100e scans straight into Paperless when I press its button. Getting there meant extending an open-source scanner backend and putting the document workflow together."
repository: https://github.com/niposch/brscan-ads-2100e
stack: ["C","Linux"]
status: "Experimental backend"
role: "Backend extension"
featured: true
order: 2
draft: false
note: scanner-to-paperless
---

The workflow scans both sides, skips blank pages, and hands a completed PDF to Paperless. I use it regularly.

The Linux backend extends existing open-source brscan work. It handles interleaved duplex records, page endings, and device-side JPEG compression. Support remains experimental: regular use with my scanner is not exhaustive testing of every mode or batch size.

The repository describes the published backend and its upstream base; some later local workflow changes are separate from that published driver source.

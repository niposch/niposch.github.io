---
title: Getting my Brother scanner into Paperless
summary: Extending an open-source Linux scanner backend so pressing one hardware button drops a clean duplex PDF into Paperless.
order: 2
draft: false
---

I wanted scanning mail into Paperless to be effortless: drop a stack of paper
into my Brother ADS-2100e, hit the physical button, walk away, and find a clean
PDF waiting in Paperless. Getting that one-button flow working on Linux took a
lot more digging than I expected.

## Teaching Linux to speak ADS-2100e

Instead of relying on proprietary blobs, I extended an open-source `brscan`
SANE backend to support the ADS-2100e directly over USB.

Duplex scanning turned out to be the trickiest piece. The scanner interleaves
chunks from the front and back sides of a sheet in the same USB stream, so the
backend has to untangle them and hand complete pages back in order. Aligned USB
reads, read-ahead buffering, and spotting real page-end markers all mattered.
Early on, a scan could report "success" even when the image had quietly cut off
halfway down.

The scanner can also compress colour scans to JPEG on-device before sending
them over USB. Decoding that back into normal RGB inside the backend cuts USB
traffic dramatically (and stops the feeder from pausing mid-sheet), at the cost
of lossy medium-quality compression.

## From button press to Paperless

Once scanning was solid, I wired a small daemon to poll the scanner's
Scan-to-File button. Pressing it scans both sides, drops blank backs, exposes
the detected paper bounds so odd-sized receipts don't get mangled, builds a
single PDF, and hands it to Paperless only after the whole batch finishes (so
Paperless never grabs a half-written file). Paperless takes care of deskewing
after import.

It also looks up the scanner's current SANE USB address before each run, so
unplugging and reconnecting the cable doesn't break anything.

## Where it stands

I run this workflow regularly for my own mail and documents. I still label the
backend experimental: working nicely for my everyday letters doesn't mean I've
tested every resolution, mode, or giant 50-page stack. It builds on upstream
open-source `brscan` work rather than starting from scratch; all the upstream
credits, changes, and tests live in the repo.

[Backend source and tests ↗](https://github.com/niposch/brscan-ads-2100e)

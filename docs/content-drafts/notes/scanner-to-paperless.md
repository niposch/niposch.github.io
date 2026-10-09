---
title: Getting my Brother scanner into Paperless
summary: From the scanner's button to a document in Paperless, with an open-source backend in between.
draft: true
---

<!-- First-person editorial draft. The workflow is grounded in the homelab's
dated observations. The owner confirmed regular use on 2026-10-09.
The published backend remains experimental. -->

I use a Brother ADS-2100e to scan documents into Paperless. The workflow is
simple now: load the documents, press the scanner's button, and let the scan
arrive in Paperless. Getting the scanner to do that took more work than the
final workflow suggests.

## Getting the scanner working

I extended an existing open-source SANE backend to support the ADS-2100e on
Linux. That meant dealing with the scanner's USB protocol as well as the
interface a scanning application expects.

Duplex scanning is a good example. The scanner can send records belonging to
different page sides through the same stream. The backend needs to keep those
records separate and return complete pages in the right order. Page endings,
read-ahead, and USB read alignment all matter; a successful command by itself
doesn't prove that the resulting image is complete.

The scanner can also compress colour data as JPEG before sending it over USB.
The backend decodes that data and gives the scanning application ordinary RGB
pixels. That reduces what has to cross the USB connection, although it doesn't
make the image lossless.

## Turning the scan into a document

Once scanning worked, I connected the scanner's button to the document
workflow. It scans both sides, skips blank pages, and builds a PDF for
Paperless to import. A completed document is handed over after the scan is
finished, rather than sending partially written output to the importer.

The backend also exposes paper boundaries. That lets the workflow keep the
detected page shape and deal with parts that extend outside the captured
image. Paperless handles deskew later in the process.

The automation checks which device address the scanner has before each scan,
so reconnecting USB doesn't require editing a stored address.

## Where it stands

I use the workflow regularly. The backend is still experimental, and that
label should stay: working well with my scanner and my normal documents isn't
the same as testing every mode, page size, or larger batch.

This is also an extension of existing open-source work, rather than a scanner
driver written entirely from scratch. The repository documents the upstream
base, the changes, and the tests.

[Backend source and tested behaviour](https://github.com/niposch/brscan-ads-2100e)

<!-- Useful additions before publishing:
- A photo of the physical scanner, chosen by the owner.
- One sanitized sample scan; avoid publishing a personal document.
- Owner's recollection of the most interesting failure and its diagnosis.
Published driver source does not contain every later local workflow change;
keep that distinction when explaining reproducibility.
-->

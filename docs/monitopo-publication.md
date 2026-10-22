# MoniTopo feature — 2026-10-22

The owner reported the application complete and requested an updated article
and a prominent numbered entry. MoniTopo is now featured as 03, following
TikTok filters and the scanner. LTv Extended and KRdp remain featured at 04/05;
encoding-aware patches remain additional work at order 6.

`src/content/projects/monitopo.md` replaces the earlier in-progress stub with
the released tray workflow, display editing, activation/recovery, downloads
and compatibility limits. Its feature claims come from the application's local
README and changelog. GitHub's release API confirmed stable `v2026.1022.1`,
display name `2026.10.22.1`, published 2026-10-22 with installer/portable assets.
The download link uses `releases/latest` to avoid pinning future visitors to
this version. Existing project URLs are preserved.

Two screenshots were copied from MoniTopo's `docs/images/` to
`public/images/monitopo/`. They show synthetic example profiles, not captured
monitor identities. Both were visually inspected. The article uses local
assets with descriptive alt text, intrinsic dimensions, lazy loading and the
existing responsive prose image style; no shared layout/style changes.

Validation: Node 24.13.0, `npm run build` passed with zero errors, warnings or
hints and generated all 16 pages. Generated HTML checks confirmed contiguous
01–05 numbering on both the homepage and Projects index, MoniTopo at 03 and
absent from Other projects, released status and the download link. Both PNGs
were emitted and their real dimensions matched the article attributes.
`git diff --check` passed. No new browser rendering or physical display tests
were performed; this change only edits the portfolio.

Publication uses the existing push-to-master Pages workflow. No DNS, custom
domain, homelab routing or MoniTopo application settings changed.

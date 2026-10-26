# SecondScrn launch update — 2026-10-26

Owner reviewed the local preview and approved publication on **2026-10-26**.
Publish this reviewed revision through the existing GitHub Pages workflow
by pushing to `master` in `niposch/niposch.github.io`.

- New release post: `src/content/notes/secondscrn.md` → `/notes/secondscrn/`.
- New featured project: `src/content/projects/secondscrn.md` →
  `/projects/secondscrn/`. SecondScrn is first; existing projects keep their
  relative order and remain accessible.
- `src/components/SecondScrnStudy.astro` replaces the scanner hero panel with
  an inline SVG showing the PC/tablet, video path and input return path.
  Three native buttons highlight each stage and update a live caption.
  The scanner's project page and post are retained.
- Release metadata verified through GitHub CLI: `v0.0.1`, published
  2026-10-25 at 15:34:05 UTC, with Windows installer/portable ZIP and Android
  APK. Technical copy follows the project's README, architecture, security
  and status documentation. It credits the external Virtual Display Driver
  and retains early-release/hardware limitations; no latency guarantee.

`npm run build` passed with zero errors, warnings or hints and generated
18 pages. Preview runs at `http://127.0.0.1:4322/` using `npm run dev -- --force`
outside the Windows sandbox; the original sandbox listener on 4321 was
unreachable from the browser. The preview binds to loopback only.

Browser verification: 1120px desktop and 320px mobile without horizontal
overflow; mouse and Enter activation update the SVG stage, pressed state
and caption; both new article routes render. No console errors observed.

No DNS, homelab configuration or deployment-workflow change is needed.

## Owner review revision

Rewrote the hero, project summary/page and post in a more personal developer
voice, grounding the post in the documented 4–6 fps first-tablet result,
Windows UDP buffer loss and HEVC slice/frame bug. Replaced abstract screen
contents with a code editor on the PC and drawing window on the tablet.
Both displays now have Windows-style centered Start buttons, pinned apps,
window controls and system trays. Desktop contents remain visible when
switching the video/input highlights.

Rebuilt successfully with zero diagnostics (18 pages). Checked the revised
diagram on desktop and at 320px in light/dark themes; no horizontal overflow.
Enter activation still updates the input caption. This was the version the
owner approved for publication.

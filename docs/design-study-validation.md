# Design study validation

## Selected Workshop revision — 2026-10-09

Current source: `docs/workshop-revised.fragment.html`, mirrored to the thread's
`homepage-workshop.html`. The original three-direction source below is retained
as historical exploration. The selected revision removes the slogan/eyebrow,
features TikTok feed filters and scanning to Paperless, moves MoniTopo to a
small in-progress entry, and uses owner-provided professional/education facts.
Regular use of the patches and scanner is owner-reported, not a new live test.

Subsequent feedback adds LTv Extended as the third prominent entry (owner
confirms use) and KRdp as the fourth. KRdp wording follows its current maintained
branch summary and retains attribution to KDE and earlier multi-monitor work.

- Checked 320, 390, 736, and 1120 pixel viewports in light and dark appearance.
  No horizontal overflow or clipped heading, paragraph, or button text detected.
- Inspected the dark desktop and light mobile screenshots.
- Pointer activation advances the scanner diagram to PDF creation; keyboard
  Enter advances to Paperless and wraps back to Scan. Reduced motion disables
  the transition. No JavaScript errors were observed.
- The diagram is illustrative and does not operate the scanner. The revised
  preview is still local planning work, not a production build/deployment.
- New first-person drafts cover TikTok, scanning, assistant-led network
  administration, and About. Owner-specific recollections are left as editorial
  additions, rather than fabricated accounts of debugging sessions.

## Original three-direction study

Verified **2026-10-09**. The study is a proposal for choosing a visual direction;
it is not the production homepage or a screenshot of the actual applications.

Source: `docs/design-directions.fragment.html`. It contains three distinct
homepage compositions and a small illustrated monitor-layout interaction.
The fragment uses the Codex visualization carousel runtime; opening it directly
as a full HTML document does not supply that runtime.

The inline copy lives at:

```text
C:\Users\Nickp\.codex\visualizations\2026\10\09\01a11fe3-1ab0-70a0-b95f-73da6e90e621\homepage-directions.html
```

For a local preview with the installed toolkit:

```powershell
python 'C:\Users\Nickp\.codex\plugins\cache\openai-bundled\visualize\1.0.47\skills\visualize\scripts\render.py' '.\docs\design-directions.fragment.html' --serve
```

The command prints a loopback-only URL. This depends on the locally installed
toolkit, not a dependency intended for the production site. Implement the
chosen production design as Astro components and CSS rather than retaining the
three-variant study carousel or its fixed comparison-stage heights.

## Checks

- Rendered with the bundled visualization wrapper and installed headless
  Chromium. The browser UI tool failed to start in this session, so the local
  browser check used bundled Playwright instead.
- Inspected screenshots of all three desktop designs and the mobile Workshop
  design. The monitor diagrams are clearly schematic; the encoding illustration
  maps `ö` to byte `F6`, rather than implying an entire word is one byte.
- All three variants checked at 320, 390, 736, and 1120 pixel viewport widths,
  with both light and dark appearance. Wrapper content widths were 288, 358,
  704, and 1088 pixels. No horizontal overflow was detected.
- The comparison-stage heights match between variants at every tested width.
- Actual carousel picker navigation worked. Pointer activation changes the
  monitor profile; keyboard Enter restores it. The profile label uses a polite
  live region. Motion respects `prefers-reduced-motion`.
- No browser JavaScript errors were observed. This is layout/interaction QA,
  not a full accessibility audit or a production site build.
- New repository files are planning/draft assets. Runtime app source, package
  manifests, lockfile, and deployment workflow were not edited, so no production
  build was run for this study.
- Git whitespace checks passed for the relevant existing tracked documents;
  the original `personal-blog` checkout remains clean.

First-person wording remains suggested copy pending the owner's editorial review.
Professional and education facts were supplied for the Workshop revision.
Contact preferences and case-study screenshots still need to be supplied or
selected when implementing the chosen design.

# Homepage direction

Research and proposal: **2026-10-09**. This is a planning document, not a record
of deployed changes. Owner preferences: **English**, with equal emphasis on
people interested in projects and potential employers/clients.

Revised with owner feedback on **2026-10-09**: Workshop is selected. TikTok
patches and the scanner lead; MoniTopo is too unfinished for the spotlight.
The owner regularly uses both the patches and scanner workflow. Copy should
be plain and specific, with unnecessary taglines removed. The network post
should describe administration with a coding assistant, rather than primarily
explaining network topology.

Further owner feedback: LTv Extended is also used by the owner and should be
featured third. [KRdp](https://github.com/niposch/krdp) should be featured fourth.
The four featured entries now share the prominent project layout. Encoding-aware
patches move to a smaller additional-project link alongside in-progress MoniTopo.

## Recommendation

Make niposch.de a personal workshop: a curated set of useful software, with
short explanations of the problems behind it. The projects should carry the
site's personality. Use a concise introduction and an accessible About page
to give professional readers context without making the homepage a CV.

Working opening: **Hi, I'm Nick.**

Working introduction: “I've been developing software professionally for five
years alongside my studies, mostly with .NET and Angular. I'm now working
towards my master's. Here are some projects I work on and use myself.”
This uses owner-provided facts, with suggested wording for editorial review.
Remove “software & small obsessions,” “useful rabbit holes,” and the earlier
manifesto-style headline. Let typography and project details carry the design.

Owner-provided professional background: five years developing software as a
Werkstudent while studying; bachelor's completed; master's in progress;
primarily .NET, Angular, VB6, Azure DevOps/pipelines, and Playwright/Vitest
testing. No degree subject, university, employer, or job availability inferred.

## What exists

- Repository: https://github.com/niposch/niposch.github.io
- Fresh clone: `C:\Users\Nickp\Development\homelab\homepage-workshop`.
- Local study branch: `codex/homepage-direction`, based on `master` at
  `c8879f3` (`fixed text on mobile`). No push or deployment was performed.
- An existing clean checkout at `C:\Users\Nickp\Development\niposch.github.io`
  is on `personal-blog`; it was inspected and left untouched.
- `master`: Astro 4 manifest with Vue and Tailwind. Its homepage renders an
  Under Construction component, including a blue/purple gradient.
- `personal-blog`: Astro 5 manifest, NeonMint template, Preact, Tailwind,
  Alpine, and Vercel Speed Insights. Sample author/content and the template
  `site` URL are still present. It is an unfinished alternative, not the
  source of a completed personal blog.
- GitHub Pages API: custom domain `niposch.de`, build type `workflow`, source
  metadata `master` at `/`, HTTPS enforcement reported `false`. The workflow
  deploys on pushes to `master`. The returned site URL is HTTP. The live HTTPS
  page could not be fetched with the web tool; actual rendered live content
  was not verified. Source inspection establishes the branch contents only.
- Homelab DNS observations from 2026-09-07 already identify apex/www as the
  four GitHub Pages addresses. DNS was not re-queried during this study.

## Stack

**Astro static output + Markdown content collections + custom CSS + GitHub
Pages.** TypeScript for schema/configuration; small native JavaScript modules
only where an interaction needs them. Start with `.md`; use `.mdx` only if an
individual article needs an embedded component.

| Option | Fit | Decision |
| --- | --- | --- |
| Astro | Already in both branches; static pages, Markdown, reusable layouts, optional interactive components | Recommended |
| Eleventy | Very small static-site approach; good if plain templates are the highest priority | Credible alternative, but changing generators gains little here |
| Hugo | Fast static builds, Markdown, separate binary and Go templates | Useful if avoiding the Node ecosystem outweighs reusing Astro |
| Next.js / full application stack | More runtime/application machinery than this content site needs | No present requirement |

Keep the design in a few CSS files with custom properties, Grid, and Flexbox.
Tailwind is optional, not required for the visual direction. Avoid retaining
multiple UI runtimes and animation packages from the templates just because
they are already dependencies. Astro layouts and a few plain DOM interactions
can handle this site. This is a simplification proposal, not an audit of which
existing dependencies can be removed without first checking their imports.

Suggested structure:

```text
src/content/projects/*.md
src/content/notes/*.md
src/content.config.ts
src/pages/index.astro
src/pages/projects/index.astro
src/pages/projects/[slug].astro
src/pages/notes/index.astro
src/pages/notes/[slug].astro
src/pages/about.astro
src/layouts/{Base,Project,Note}.astro
src/components/{ProjectRow,DisplayStudy}.astro
src/styles/{tokens,global,article}.css
public/images/projects/
```

Use the supported Astro version and its current collection API when implementing;
the old branch manifests are observations, not version recommendations. Keep
one lockfile. Build with Node in CI, upload `dist/`, and serve static files via
the existing GitHub Pages setup. The custom-domain `site` should be
`https://niposch.de`; no repository-name `base` prefix is needed for the root
custom-domain site. Verify Pages domain/certificate behavior and HTTPS
enforcement during an authorized deployment. A hosting move or DNS change
is not needed to explore this direction.

Official references:

- https://docs.astro.build/en/guides/content-collections/
- https://docs.astro.build/en/guides/deploy/github/
- https://www.11ty.dev/docs/

## Content plan

The opening should communicate who Nick is, what sort of problems he works
on, and offer a clear path into a few projects. Curate the work rather than
automatically listing every GitHub repository. Keep content independent of
GitHub API availability and credentials; manually maintained Markdown is
enough initially.

| Project | Why it belongs | Best evidence/visual | Important qualification |
| --- | --- | --- | --- |
| [MoniTopo](https://github.com/niposch/MoniTopo) | Smaller “Still working on” entry; keep it out of the lead | Actual tray/window capture when ready | Owner considers it too unfinished for the spotlight |
| [LTv Extended](https://github.com/niposch/LTvLauncher-Extended) | Attractive interface and substantial daily-use engineering work | Repository screenshots; a short remote navigation recording | Maintained fork; explicitly credit upstream and integrated contributor work |
| [Encoding-aware patches](https://github.com/niposch/apply_patch-multiple-encodings) | Distinct developer-tool story; shows careful handling of legacy constraints | Tiny Windows-1252 example and before/after byte diff | Explicit encoding, no whole-file conversion; do not imply transactional multi-file edits |
| [brscan / ADS-2100e](https://github.com/niposch/brscan-ads-2100e) | Memorable hardware/protocol investigation | Sanitized pipeline diagram, page ordering, protocol excerpts | Experimental fork; larger batch reliability not established |
| [VB6 Designer Fix](https://github.com/niposch/vb6-designer-fix) | An unusual, sharply scoped compatibility fix | Existing demonstration GIF and a clear before/after | Credit Elroy's example; broader mixed-DPI behavior remains unverified |
| [VR Image Explorer](https://github.com/niposch/vrc-gallery) | Shows personal interests and offline desktop UX | Real gallery screenshot chosen by owner | Older project; avoid claiming planned features already exist |
| [TikTok feed filters](https://github.com/niposch/revanced-tiktok-patches) | Lead feature and article: recent patches the owner uses regularly | Explanation of feed metadata and a concrete debugging example supplied by owner | Independent community project, no official ReVanced affiliation; version-specific |
| [KRdp](https://github.com/niposch/krdp) | Fourth featured project, as requested by owner | Windows RDP multi-monitor layout and a concrete fix from the maintained branch | KDE fork preserving earlier westers multi-monitor work; separate KPipeWire patch required for colour fix |

The original seven repositories were verified **public** through GitHub metadata
on 2026-10-09. Project summaries are based on READMEs and the homelab's dated
LTv/scanner observations; this was not an independent code or reliability audit.
`pushed_at` was used to find candidates, not to establish Nick's authorship of
every change. Fork status is kept explicit. KRdp was subsequently verified public
and a fork of `KDE/krdp`, with maintained/default branch `main`. Its current
README summary and recent commits were inspected on 2026-10-09. The fork combines
KDE's base with earlier westers multi-monitor work and the maintained fixes.
Repository-reported test results are not independent testing in this homepage task.
Do not claim image clipboard support, true AVC444, or a dependency-free colour fix:
the README explicitly excludes the first two and requires a separate KPipeWire
patch for the colour correction.

Revised homepage selection: TikTok feed filters and scanning to Paperless as
the first two features, followed by LTv Extended third and KRdp fourth.
Encoding-aware patches and in-progress MoniTopo get smaller additional-project
links. VB6 Designer Fix and VR Image Explorer
can sit in the full project index. The scanner diagram replaces the monitor
profile illustration in the selected Workshop direction.

Each project page should answer:

1. What annoyed me or what was missing?
2. What does the tool do? Show it early.
3. What did I personally contribute? Separate upstream work from my changes.
4. What was the interesting constraint or engineering decision?
5. What works today, what remains limited, and where is the code/release?

Write short, specific case studies rather than reproducing installation guides.
Link the README for setup details. Explain technical choices in context instead
of showing a wall of technology logos or generic proficiency percentages.

Useful **future article ideas**, not existing published articles:

- Filtering TikTok's feed with ReVanced: metadata, filters, and separate installation.
- Getting the Brother scanner into Paperless: backend work and the button workflow.
- Managing the home network with a coding assistant: context, inspection, changes,
  and checking the result. Topology is background, not the main story. Avoid
  reproducing internal addresses, file layouts, or operational secrets.
- Why “just convert it to UTF-8” is a bad patch strategy for legacy source.
- What happens between a TV remote keypress and the focused widget.
- How interleaved duplex scanner records become ordered pages.
- Getting resize outlines back in a decades-old IDE.

An About draft now uses the owner's professional and educational facts above.
Employer details, contact preferences, availability, university/degree subject,
and a CV link remain unspecified. Do not publish template biographies, invent
achievements, or infer contact permission from private files.

Drafts are under `docs/content-drafts/`: `about.md` and the three notes
`tiktok-feed-filters.md`, `scanner-to-paperless.md`, and `managing-home-network.md`.
They are first-person editorial drafts, not verbatim owner quotations. Distinguish
the owner's report of regular use from independent hardware/reliability testing.

## Three visual directions

### Workshop — selected and revised

An editorial technical notebook: large, compact sans-serif typography; warm
paper/ink; one cobalt accent; numbered work entries; thin rules; clear spacing.
Use actual product artifacts alongside annotated schematic diagrams. The
opening illustration follows a document from duplex scanning through PDF creation
to Paperless. It is a schematic explanation of a regularly used workflow,
implemented with native HTML/CSS and a few lines of JavaScript. It does not
control the physical scanner or claim to show live processing.

The design gets its distinctiveness from composition, typography, and evidence.
Reserve expressive visuals for the homepage/project openings; article bodies
should be quiet and easy to read. A more photographic LTv feature later on
would complement the opening technical diagram.

### Fieldnotes

A personal journal with expressive serif headings, a warm rust accent,
margin notes, and uneven editorial columns. Best if writing and the personal
story should feel as central as software. The encoding tool makes a good
opening story here. Keep the copy human and compact; avoid artificial paper
textures or decoration that competes with reading.

### Instrument

A precise project index: strong sans-serif headings, mono metadata,
restrained green accents, thin divisions, and diagrams of real workflows.
More systems-oriented and compact than Fieldnotes. Avoid fake terminals,
decorative uptime metrics, and pretend live telemetry. This could also be a
useful visual language for technical project pages within Workshop.

The original three-direction study is retained as historical design exploration.
The current selected study is `docs/workshop-revised.fragment.html`, with the
new featured projects, plain introduction, and owner-provided biography.
Copy and diagrams are proposals; none should be mistaken for product captures
or already-published writing. Browser verification notes are recorded separately
in `design-study-validation.md`.

## Making it feel authored

- Write from concrete experiences and named constraints. Remove phrases like
  “passionate developer crafting innovative solutions.”
- Feature real screenshots, short recordings, source details, and hardware
  photos chosen by the owner. The diagrams are illustrations, not fake product
  screenshots. Use assets from the actual project and preserve attribution.
- Build rhythm through scale, spacing, and changes in composition. Avoid giving
  every section the same rounded card treatment.
- Keep motion purposeful: a topology change, focus demonstration, or quick
  navigation transition. Honor reduced-motion preferences and keyboard input.
- Use one visual idea consistently instead of accumulating effects. The stack
  does not need WebGL or a large animation library to make this feel distinctive.
- Show limitations and unfinished work honestly. This is more credible than
  manufactured statistics, invented testimonials, or inflated feature claims.

## Implemented locally — 2026-10-09

The owner approved implementing Workshop. The local site now uses Astro 7,
Markdown collections, custom CSS, and self-hosted fonts. It includes the
homepage, six project pages, project/notes indexes, three posts, About, and a
404 page. Project entries link to the relevant notes where available. A sitemap
is generated; RSS, search, a CMS, and a live GitHub feed remain optional later work.

The homepage features TikTok filters, the scanner, LTv Extended, and KRdp in
that order. MoniTopo stays in the smaller project list as in progress. The
scanner illustration became a project showcase: the owner's extension of the
SANE backend for the Brother ADS-2100e, with interactive explanations of USB
records, duplex handling, and JPEG decoding. The earlier workflow diagram and
its Next step button are historical studies, not the current component.

Owner feedback also added outer vertical padding, a stable scrollbar gutter so
the navbar keeps its horizontal position, expanding step outlines without text
scaling, stronger dark-theme scanner contrast, and matching font preloads with
blocking local font faces to prevent the brief fallback-font flash. Run/edit
instructions are in the root README; checks are recorded in `implementation-validation.md`.

Before publishing: review first-person copy, role attribution, contact details,
and chosen media; check mobile layout, keyboard interaction, reduced motion,
article readability, image dimensions, canonical URLs, sitemap and a clean
static build. Keep the existing deployed branch untouched during design work.

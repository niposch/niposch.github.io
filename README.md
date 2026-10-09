# niposch.de

A personal homepage built with Astro, Markdown, and custom CSS. It builds to
static HTML; the scanner illustration and theme switch use small browser scripts.
Fonts are served locally. No database or CMS is required.

## Run locally

Use Node.js 24 (see `.nvmrc`; minimum supported version is 22.12).

```powershell
cd C:\Users\Nickp\Development\homelab\homepage-workshop
npm ci
npm run dev
```

Open http://127.0.0.1:4321/. Edits update automatically. If a dev server is
already running, open that address rather than starting a second one. Stop it
with `npm run astro -- dev stop` when needed.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run check` | Validate Astro and TypeScript |
| `npm run build` | Validate and generate the static site in `dist/` |
| `npm run preview` | Serve the production build locally |

## Edit content

- `src/content/projects/*.md`: project summaries and project pages. `order` controls
  the sequence; `featured: true` puts a project in the homepage's main list.
- `src/content/notes/*.md`: posts. The title and summary appear in the notes index
  and on the homepage; the Markdown body becomes the article.
- `src/content/profile/about.md`: the full About page.
- `src/pages/index.astro`: the short introduction and homepage About summary.
- `src/styles/globals.css`: page spacing, colours, typography, and responsive layout.
- `src/styles/fonts.css`: local font faces. Keep these files and the font preloads
  in `src/layouts/Layout.astro` in sync when changing typefaces or weights.
- `src/components/ScannerStudy.astro`: the interactive scanner backend showcase.

Set `draft: true` on a project or note to preview it locally while excluding it
from production pages and indexes. The schema in `src/content.config.ts` checks
frontmatter during development and builds. Slugs come from filenames; internal
links should use those slugs.

The selected order is TikTok feed filters, Scanner → Paperless, LTv Extended,
and KRdp. MoniTopo appears as a smaller project marked in progress. The current
notes cover TikTok filters, the scanner workflow, and administering a home
network with a coding assistant. First-person copy is editable in Markdown.

`docs/` retains the earlier design explorations and editorial drafts. The live
site content is in `src/content/`; the drafts in `docs/` are historical proposals.

## Hosting

`astro.config.mjs` sets the canonical site to https://niposch.de and generates a
sitemap. GitHub Pages builds and deploys pushes to `master` through
`.github/workflows/deploy.yml`, using Node 24. Local work on another branch does
not publish the site. Review the content and the GitHub Pages custom-domain
settings before a future deployment.

# Local implementation verification

Verified 2026-10-09 on Windows with Node 24.13.0 and Chromium. These checks
cover the local source and build, not a deployment to niposch.de.

- `npm run build`: zero Astro/TypeScript errors, warnings, or hints; 14 static
  pages generated, including six projects, three posts, About, and the 404 page.
- `npm audit`: zero reported vulnerabilities after updating an indirect
  picomatch dependency within its compatible version range.
- Production preview: all 14 pages and all discovered internal links returned
  200. Each page has one h1, English language metadata, and the site's canonical
  domain. Article bodies and the homepage were visually inspected.
- Forty page/theme/viewport combinations covered widths 320, 390, 736, 1120,
  and 1440 in light and dark themes. No horizontal document overflow; top and
  bottom spacing remained at least 40px and 48px respectively, allowing for
  subpixel rounding.
- Header, brand, and navbar horizontal positions and widths match across all
  14 pages at widths 390, 1120, and 1440. A stable scrollbar gutter reserves
  space even on pages that do not need vertical scrolling.
- Scanner features select correctly with pointer clicks, Enter, and Space;
  only one is pressed at a time. The explanation updates through a polite live
  region. Reduced motion disables the border expansion transition. Hover
  expands the outline/background while the text's bounding box stays fixed.
- Scanner text contrast on hover measured approximately 4.72:1 in light mode
  and 6.27:1 in dark mode. Inactive text is fully opaque.
- Cold and cached navigation on both dev and production previews fetched each
  of the four local font assets once per document. Preload and CSS asset URLs
  match; all font faces use `font-display: block`. No material font layout
  shifts were recorded in those navigation checks.
- Theme selection persists across navigation and reload. No page JavaScript
  errors or external asset requests were observed in the production checks.
- The development site at `http://127.0.0.1:4321/` returned the implemented
  homepage; `npm run dev` is the supported entry point.

GitHub Actions versions and Node 24 configuration were updated for an eventual
master-branch deployment. The workflow has not been run remotely in this task.
No push, deployment, DNS, or live service configuration change was made.

## Dependency refresh — 2026-10-09

After committing the approved site as `c98f1cd`, checked stable releases through
the npm registry and refreshed the dependency lockfile with `npm update`.
Astro 7.3.8, @astrojs/check 0.9.10, @astrojs/sitemap 3.7.4, and all three
Fontsource packages at 5.3.0 were already current.

Updated TypeScript from 5.9.3 to 6.0.3, the newest release supported by the
current checker's `^5.0.0 || ^6.0.0` peer range. TypeScript 7.0.2 is newer but
outside that range. Node type declarations remain on the Node 24 line used by
the runtime. Other compatible updates include @types/estree 1.0.9,
ansi-styles 6.2.3, and tslib 2.8.1, with indirect dependency deduplication.

Verified `npm ci` from the updated lockfile, a 14-page production build with no
diagnostics, zero npm audit vulnerabilities, and the page/layout/interaction
and font-loading browser checks again. Restarted the development server at
`http://127.0.0.1:4321/` after the clean install.

## GitHub Pages publication — 2026-10-09

The owner authorized publishing to the existing `niposch/niposch.github.io`
repository. Pushed the approved site and dependency commits to
`codex/homepage-direction` and fast-forwarded `master` to `0372ff3`.
[Deployment run 37917495559](https://github.com/niposch/niposch.github.io/actions/runs/37917495559)
completed successfully, including the clean install, production build, artifact
upload, and Pages deployment.

Verified the new homepage at https://niposch.de with normal certificate checks.
The existing custom-domain certificate was approved; enabled Pages HTTPS
enforcement and verified HTTP returns 301 to HTTPS. No DNS changes were needed.

Live Chromium checks verified all 14 pages, locally served fonts/assets,
keyboard scanner interaction, theme persistence across navigation, and mobile
layouts without horizontal overflow. An unknown path returned the custom 404
page with HTTP 404. No page JavaScript errors or failed assets were observed.

## Mobile theme toggle alignment — 2026-10-09

Reproduced a slight visible offset in the text-glyph icon at mobile widths in
local Chromium. Default button padding also left less horizontal room than the
glyph's line box required. Replaced the font glyph with a 20px inline SVG,
removed button padding/native appearance, and prevented flex shrinking.

At widths 320, 360, 390, 412, and 1120, the SVG's centre matches the button's
centre in both axes. Light/dark screenshots were checked, Enter activation and
pointer toggling passed, the saved theme survived navigation, and there was no
horizontal overflow or page JavaScript error. The production build completed
with zero diagnostics and generated all 14 pages.

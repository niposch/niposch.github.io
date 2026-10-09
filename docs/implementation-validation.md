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

# Live-project directory — 18 October 2026

`/live/` is the central browser-project directory. It is linked in the main navigation on every page, in the homepage introduction and on the Projects index. Each card opens the application directly; source code is secondary. No project article or post is required to reach an app.

Maintain entries in `src/data/live-projects.ts`: title, type, description, direct URL, source repository, practical limitations and action label. The directory includes Parking Practice, the RustCar/RustEdit converter, Unturned kit selector, the Ludum Dare 54 game, and the Wake-on-LAN demo. The latter is labeled as a demo requiring a backend for real device management. The old first-firebase-blog Pages URL returned 404 and is excluded. Upstream homepages of unrelated forks are not demos of this owner's work.

The existing converter post from revision `1f8047e` was preserved by fast-forwarding the clean checkout before editing. No existing project pages or notes were removed.

Validation: `npm run build` passed with zero errors, warnings or hints and generated 16 pages. Reviewed desktop dark mode, a 390 px single-column viewport, the mobile navigation grid, direct application links and source destinations. The four existing app destinations returned HTTP 200; the parking game is deployed separately from its new repository. The page uses existing site fonts, colors and themes without adding dependencies. Physical mobile testing is not claimed.

Publish by pushing to `master`; the existing GitHub Pages workflow builds the site. The game and other project-site paths are separate Pages deployments, so no game files belong in this repository and no DNS or Caddy changes are required.

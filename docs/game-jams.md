# Collaborative game-jam entries — 18 October 2026

Inspected all public `panorb/ludum-dare-*` repositories, including raw author names in default-branch commit histories so commits not linked to an account would not be missed. Searched for the GitHub account `niposch` and name forms matching Nick Pörschmann/Poerschmann. Confirmed LD54, LD55 and LD56; no additional match was found in the inspected LD45/47/48/49/50/51/52/53/57/58/60 histories. `NickFleming501` in LD60 is a different account and was not treated as evidence of this owner's participation. These results cover inspected public histories, not private or deleted branches or non-code participation.

| Entry | Contribution evidence | Browser destination |
| --- | --- | --- |
| A Living Place in Limited Space / LD54 | [niposch commit](https://github.com/panorb/ludum-dare-54/commit/4516c0fd0f8d0cae5fa81990003320866a3cc198) | [Existing browser build](https://niposch.de/ludum-dare-54/) |
| Footlong Flight / LD55 | [niposch commit](https://github.com/panorb/ludum-dare-55/commit/4c8b155a20c72d552a2e132c38f18c68a09d5b76) and `godot/project.godot` title | [Browser build from Nick’s fork](https://niposch.de/ludum-dare-55/) |
| LD56 potion-brewing prototype | [niposch commit](https://github.com/panorb/ludum-dare-56/commit/32929d7029cca1a83613d995b805b9c28a9d8db7) and `Nick @niposch` in the game's credits | [Browser build from Nick’s fork](https://niposch.de/ludum-dare-56/) |

## Organization and own-fork publication

All three repositories already existed as genuine `niposch` forks of Panorb's corresponding repositories. LD54 was ten commits behind its upstream and LD55 was 56 commits behind; both were fast-forwarded before publication, preserving the team’s history and credits. LD56 already matched upstream. Every source link now points to Nick’s corresponding fork. Repository descriptions, homepage links and topics use a consistent game-jam format.

Cards consistently use `Game · Ludum Dare N`, the theme, team attribution, a direct local game path and a source link. Published game titles are retained for LD54/55. **Potion-brewing prototype** is a descriptive label for the generically titled LD56 project, not a newly claimed official game name. The owner confirmed that the team ran out of time and did not finish LD56 for the jam; this is stated on its card, fork README and repository description.

Each fork deploys its own GitHub Pages project site at `/ludum-dare-54/`, `/ludum-dare-55/` or `/ludum-dare-56/`, inheriting `niposch.de` from the user site. No project CNAME, DNS or homelab routing changes are needed. Source pushes to `master` or a manual workflow dispatch build the game with official Godot 4.3 and matching web templates, verified against official SHA-512 release sums. Explicit single-threaded exports avoid static Pages’ missing isolation headers; PWA caching is disabled. Build workflows validate scripts after resource imports and fail on script errors. Deployment details live in each fork’s `docs/web-deployment.md`.

LD54's previous page returned HTTP 200 but failed before startup with missing cross-origin isolation and SharedArrayBuffer. This was reproduced in Chromium; HTTP success alone had not established game startup. The new workflow replaces the old `gh-pages` publication and keeps that historical branch. LD55 now runs from Nick’s fork instead of sending visitors to itch.io. LD56 also has its own-fork destination, preserving the working prototype.

The earlier [publisher directory](https://panor.itch.io/) discovery remains contribution context; the itch.io detail page encountered automated Cloudflare verification. Publication here does not claim a full completion playthrough, physical controller testing or mobile compatibility for these jam games.

## Publication verification

Successful runtime deployments on 18 October 2026: LD54 `47ffade` (run `39165016353`), LD55 `dec696e` (run `39165017839`) and LD56 `9aec4f1` (run `39165129400`). Chromium checks reached LD54's menu, opening letter, tutorial and card preview; Footlong Flight's menu and gameplay; and LD56's level selector and Level 1. LD54/55 had no errors during the final exercised paths. LD56 retains the prototype's empty-Tween diagnostics; it is deliberately presented as unfinished. Exported assets use revision-specific names after a real browser check exposed cached legacy JavaScript on LD54.

The homepage build passed with zero errors, warnings or hints and generated 16 pages. Revision `1946305` deployed in successful run `39165065433`; the public directory was checked for consistent labels, exact game/fork destinations and the unfinished-jam note. Follow-up documentation changes do not change runtime behavior.

---
title: "Cyberpunk 2077 save editor"
summary: "I wanted my one-time attribute reset button back, so I built a local Rust + WebAssembly browser editor for Cyberpunk 2077 save files."
repository: https://github.com/niposch/cp2077-save-editor
stack: ["Rust", "WebAssembly", "React"]
status: "Live in the browser"
role: "Original project"
featured: true
order: 2
draft: false
image:
  src: /images/cp2077-save-editor/character.png
  alt: "Cyberpunk 2077 save editor Character tab showing attributes, level, eddies, and the restore-attribute-reset button."
  width: 1440
  height: 900
---

Cyberpunk 2077 only lets you reset your attributes once per playthrough. I
wanted that button back, so I put together a browser editor that opens a save
locally, applies edits cleanly, and downloads a new save folder.

[Open the save editor ↗](/cp2077-save-editor/) · [Try it with an example save ↗](/cp2077-save-editor/?example=ManualSave-818)

<img src="/images/cp2077-save-editor/character.png" width="1440" height="900" alt="The editor's Character tab with an example save open: progression and point totals on the left, the five attributes arranged around the character level, attribute reset and life path below, and pending changes on the right." loading="lazy" decoding="async" />

## What you can edit

On the Character tab you can change attributes, unspent attribute/perk/relic
points, level, street cred, eddies, and your life path. Bumping your level
automatically grants one attribute point and one perk point per level, just
like levelling up in-game, and restoring the attribute reset simply clears the
quest flag hiding the button. There's also a Facts view for searching quest
flags by name, plus an Advanced tab that exposes every decoded game system as
an editable tree.

Every edit sits in a pending-changes list showing old vs. new values so you can
undo individual tweaks before exporting. Everything on the Character tab has
been tested directly in-game.

## How the save parser works

A Cyberpunk save is a compressed container packed with roughly two thousand
named sections. The interesting ones store serialized game objects alongside
their own name tables, which allows a generic parser to decode them without
hardcoding every game class. As a sanity check, every decoded section has to
round-trip back byte for byte so nothing gets silently mangled.

Several stats are stored in more than one place: an attribute lives in
character data and again as a stat modifier, and your level has a third copy
that drives world scaling. The editor keeps all copies in sync, mapped out by
diffing before/after saves alongside the game's save layout.

## Safety & limits

Everything runs in your browser via Rust + WebAssembly (with a React UI), so
your save never leaves your machine, and it always writes a new copy instead of
touching your original files. Still, back up your saves folder before loading
an edited save. This is an unofficial tool built on an undocumented format, not
affiliated with CD PROJEKT RED. Saves from versions newer than 2.5 show a
warning in case a patch shifted the format, and items, perk trees, and skill
levels aren't editable yet. MIT licensed.

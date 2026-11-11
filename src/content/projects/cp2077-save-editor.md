---
title: "Cyberpunk 2077 save editor"
summary: "A save editor for Cyberpunk 2077 that runs in the browser. I reverse-engineered the save format to change attributes, points, level, street cred, money and life path, and to bring back the once-per-playthrough attribute reset."
repository: https://github.com/niposch/cp2077-save-editor
stack: ["Rust", "WebAssembly", "React"]
status: "Live in the browser"
role: "Original project"
featured: true
order: 2
draft: false
---

Cyberpunk 2077 lets you reset your attributes once per playthrough. I wanted that button back, so I started reading the save files. The result is an editor that opens a save in the browser, changes it and downloads the result as a new save folder.

[Open the save editor ↗](/cp2077-save-editor/) · [Try it with an example save ↗](/cp2077-save-editor/?example=ManualSave-818)

<img src="/images/cp2077-save-editor/character.png" width="1440" height="900" alt="The editor's Character tab with an example save open: progression and point totals on the left, the five attributes arranged around the character level, attribute reset and life path below, and pending changes on the right." loading="lazy" decoding="async" />

## What it edits

The Character tab covers attributes, unspent attribute, perk and relic points, level, street cred, money and the life path. Raising the level grants one attribute point and one perk point per level, like a level-up in the game. Restoring the attribute reset removes the quest flag that hides the button. A facts view looks up the game's quest flags by name, and an advanced view shows every decoded game system as an editable tree.

Pending changes stay in a list until you save. Each one shows its old and new value and can be reverted on its own. Everything on the Character tab was tested by loading the edited saves in the game.

## Reading the save format

A save is a compressed container with about two thousand named sections. The interesting ones hold serialized game objects with their own name tables, which a generic parser can read without knowing the game's classes. Every decoded section is written back byte for byte, which is how I check that the format is understood rather than guessed.

Several values are stored more than once. An attribute lives in the character data and again as a stat modifier; the level has a third copy that the world uses for scaling. The editor changes all copies together. I found most of them by comparing saves from before and after an action in the game, and by reading the save code in the game's executable.

## Using it safely

The editor never changes the save you open; it writes a new one. It runs entirely in your browser, so the save is never uploaded. Back up the whole saves folder before loading an edited save anyway: this is an unofficial tool working on a reverse-engineered format. Saves from a game version newer than 2.5 show a warning, because a patch can change the format. Items, perk trees and skill levels can't be edited yet.

The core is written in Rust and compiled to WebAssembly; the interface uses React. The project is open source under the MIT license and isn't affiliated with CD PROJEKT RED.

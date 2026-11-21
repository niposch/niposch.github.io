---
title: "MoniTopo"
summary: "A lightweight Windows tray app that saves whole multi-monitor setups (layout, scaling, refresh rate, and HDR) and swaps between them with a click or hotkey."
repository: https://github.com/niposch/MoniTopo
stack: ["C#", ".NET / WPF"]
status: "Released for Windows"
role: "Original project"
featured: true
order: 5
draft: false
image:
  src: /images/monitopo/main-window.png
  alt: "MoniTopo main window displaying a two-monitor Desktop profile with resolution, refresh rate, scaling, and HDR settings."
  width: 964
  height: 761
---

Switching between desk mode and single-screen mode on Windows is rarely just
turning a monitor off. Primary display, positions, DPI scaling, refresh rate,
and HDR all tend to drift out of sync. I built MoniTopo so I can snapshot a
working setup once and jump back to it with a single hotkey.

[Download MoniTopo for Windows ↗](https://github.com/niposch/MoniTopo/releases/latest)

## One hotkey away

Set up your screens the way you like in Windows, then capture them as a profile
in MoniTopo. Each profile stores which displays are active, where they sit,
orientation, primary monitor, resolution, refresh rate, Windows scaling, and
HDR.

It lives quietly in the system tray. Clicking the icon (or pressing `Ctrl+Alt+M`)
pops up a tiny layout preview for each profile so you can swap in one click, or
bind a global hotkey directly to any profile.

<img src="/images/monitopo/tray-window.png" width="360" height="233" alt="MoniTopo tray popup with layout previews for Desktop and Main only, plus their assigned hotkeys." loading="lazy" decoding="async" />

The main window shows a bigger preview and lets you tweak resolution, refresh
rate, scaling, or HDR right inside a profile without immediately applying it.

<img src="/images/monitopo/main-window.png" width="964" height="761" alt="MoniTopo main window showing a Desktop profile with two monitor previews, saved display settings, and profile actions." loading="lazy" decoding="async" />

It follows system light/dark themes (these shots use example profiles).

## Wrangling Windows display quirks

The UI is tiny; fighting Windows display APIs is where the real work went.
Toggling HDR can quietly change a display mode, and saving a layout can wipe
your DPI scaling. Instead of firing calls blindly, MoniTopo only changes what
actually differs, checks what Windows ended up doing, applies bounded follow-up
fixes if something drifted, and rolls back to your previous setup if an
activation fails.

It's written in C# with .NET 10 and WPF, with Windows display calls abstracted
so activation and rollback can be unit-tested without scrambling my real
monitors. Outside of automated tests, I've only manually exercised it on my own
two-monitor setup so far, so unusual GPU/dock combos may still turn up edge
cases.

## Download & setup

Grab the per-user installer or portable ZIP from the
[latest release](https://github.com/niposch/MoniTopo/releases/latest). Built
for Windows 11 x64 (Windows 10 is best-effort), needs no admin rights, and
isn't code-signed so SmartScreen may pop up.

First launch only captures and previews. Actual switching stays opt-in (see
the [setup notes](https://github.com/niposch/MoniTopo#installation-and-use)),
so opening the app never rearranges your screens by surprise. Identical
monitors can occasionally need manual binding, and Windows scaling relies on a
runtime-probed API. MIT licensed.

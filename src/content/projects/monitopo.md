---
title: "MoniTopo"
summary: "A Windows tray app I built to save whole monitor setups and switch between them with a click or hotkey, including layout, refresh rate, scaling, and HDR."
repository: https://github.com/niposch/MoniTopo
stack: ["C#",".NET / WPF"]
status: "Released for Windows"
role: "Original project"
featured: true
order: 4
draft: false
---

Changing a monitor setup can mean more than turning a second screen on or off. The primary display, resolution, refresh rate, scaling, and HDR all belong to that setup too. I built MoniTopo to save those choices together and recall them as a named profile.

[Download MoniTopo for Windows ↗](https://github.com/niposch/MoniTopo/releases/latest)

## A setup, one shortcut away

Configure the displays in Windows, then capture the current setup in MoniTopo. A profile remembers which displays are active, their positions and orientation, the primary display, and each screen's resolution, refresh rate, Windows UI scale, and HDR state.

The app starts in the tray. Its popup shows a small schematic of each saved layout alongside its name and assigned hotkey, so switching between a desktop setup and a single-screen setup takes one click. Global hotkeys can activate profiles directly; Ctrl+Alt+M opens the popup by default.

<img src="/images/monitopo/tray-window.png" width="360" height="233" alt="MoniTopo tray popup with layout previews for Desktop and Main only, plus their assigned hotkeys." loading="lazy" decoding="async" />

The main window gives each profile a larger display preview and a list of its saved settings. Resolution, refresh rate, HDR, and scaling can also be edited in the profile. Refresh-rate choices follow the selected resolution, and saving an edit is separate from activating it.

<img src="/images/monitopo/main-window.png" width="964" height="761" alt="MoniTopo main window showing a Desktop profile with two monitor previews, saved display settings, and profile actions." loading="lazy" decoding="async" />

These screenshots use example profiles rather than captured monitor identifiers. The app offers system, light, and dark themes.

## Making a switch reliable

The interface is small; the Windows display behaviour behind it is less straightforward. An HDR transition can change a display mode, and persisting a layout can reset scaling. Applying settings is only part of the work: MoniTopo checks the resulting configuration and makes bounded corrections when Windows changes something along the way.

Activation changes only the settings that differ. A profile that already matches does not write display settings, and a scale- or HDR-only change avoids rewriting the layout unless Windows changes the modes during the transition. Failed activations have a separate recovery process to restore the previous configuration.

The application is written in C# with .NET 10 and WPF. Windows display calls sit behind interfaces so activation and recovery can be tested with synthetic configurations without rearranging the developer's real screens. The release was also manually checked on one two-monitor setup, including combined setting changes and rollback after an injected failure. That is a starting point for hardware coverage, not a claim about every GPU, dock, or monitor combination.

## Try it

The [latest release](https://github.com/niposch/MoniTopo/releases/latest) includes a per-user installer and a portable ZIP. Windows 11 x64 is the supported target; Windows 10 support is best effort. The installer needs no administrator rights, but packages are unsigned, so Windows may show an unknown-publisher warning.

Capture and preview work on first launch. Switching displays requires the explicit opt-in described in the [setup instructions](https://github.com/niposch/MoniTopo#installation-and-use); launching the app never activates a profile automatically. Installed builds can check for updates and show release notes before you choose to download.

Windows scaling uses a runtime-probed API, and identical monitors can require manual binding. Cloned displays retain some capture-based settings. The repository keeps the [hardware checklist](https://github.com/niposch/MoniTopo/blob/HEAD/docs/manual-display-test.md) and current limitations alongside the source. MoniTopo is open source under the MIT license.

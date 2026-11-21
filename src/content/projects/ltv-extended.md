---
title: "LTv Extended"
summary: "My personal fork of LTvLauncher that runs on my Google TV, with cleaner remote navigation, Home-button fixes, weather, media rows, and in-app updates."
repository: https://github.com/niposch/LTvLauncher-Extended
stack: ["Flutter", "Android"]
status: "Used on my TV"
role: "Maintained fork"
featured: true
order: 6
draft: false
image:
  src: /images/ltv-extended/home.png
  alt: "LTv Extended Android TV home screen showing Continue Watching cards, TV Apps row, weather pill, and clock."
  width: 1920
  height: 1080
---

Stock Android TV home screens are packed with recommendations I never asked
for, so I run my own fork of LTvLauncher on my living-room TV. My changes focus
on making it feel snappy day to day: fixing remote focus and Home-button
behaviour, smoothing out rendering, and adding an in-app GitHub release updater.

<img src="/images/ltv-extended/home.png" width="1920" height="1080" alt="LTv Extended home screen showing Continue Watching media cards, TV app tiles, weather summary, and clock." loading="lazy" decoding="async" />

<img src="/images/ltv-extended/weather.png" width="1920" height="1080" alt="LTv Extended weather settings drawer showing Open-Meteo location and display toggles." loading="lazy" decoding="async" />

## Standing on upstream shoulders

This is a fork of LTvLauncher (itself built on FLauncher) with hamish henare's
posters branch merged in for the media and weather UI, keeping the original
commit history and attribution intact.

It ships under its own Android package ID so it installs cleanly alongside
upstream releases. Prebuilt APKs and install notes are in the repo.

[Credits and attribution](https://github.com/niposch/LTvLauncher-Extended/blob/HEAD/ATTRIBUTION.md)

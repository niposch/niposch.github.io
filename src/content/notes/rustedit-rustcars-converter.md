---
title: Editing RustCar vehicles in RustEdit
summary: A browser tool for editing vehicle geometry in RustEdit and bringing it back into the original RustCar configuration.
order: 0
draft: false
---

I built a small converter to take vehicles from the [RustCar mod](https://karuza.dev/store/product/566c04c2-c4a7-4ba3-983c-3fdb362424f9) into [RustEdit](https://www.rustedit.io/) and bring the edited geometry back.

Load the original car JSON and export a RustEdit `.prefab`. After editing the parts, import the saved prefab into the converter. It merges the geometry into the original configuration and keeps the vehicle settings, including handling, fuel and wheel physics.

The conversion runs in your browser. You can open files or paste JSON, and rotate, pan and zoom a preview of the prop positions. CopyPaste JSON is also supported.

New parts are decorative and must use compatible entity prefabs. Static scenery from RustEdit is not automatically spawnable as a vehicle part. An optional server catalog helps check new assets before export.

[Open the converter](/rustedit-rustcars-converter/) · [Source code and MIT license](https://github.com/niposch/rustedit-rustcars-converter)

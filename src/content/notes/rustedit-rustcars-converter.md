---
title: Editing RustCar vehicles in RustEdit
summary: A small browser converter I made for a friend to move custom RustCar vehicle layouts into RustEdit and merge the edited parts back.
order: 10
draft: false
---

I put together a small browser converter for a friend who wanted to tweak custom
vehicles from the
[RustCar mod](https://karuza.dev/store/product/566c04c2-c4a7-4ba3-983c-3fdb362424f9)
inside [RustEdit](https://www.rustedit.io/) without rebuilding the whole config
by hand.

Drop in a RustCar JSON file (or paste it), export a `.prefab` for RustEdit,
move the parts around, and feed the saved prefab back in. The converter merges
the updated prop positions into the original config while leaving handling,
fuel, and wheel physics alone. CopyPaste JSON works too, and there's a basic 3D
preview right in the browser.

Any new parts you add still need to be compatible decorative entity prefabs.
Plain static scenery from RustEdit won't automatically spawn on a vehicle. An
optional server catalog file lets you check assets before exporting.

[Open the converter](/rustedit-rustcars-converter/) · [Source code (MIT)](https://github.com/niposch/rustedit-rustcars-converter)

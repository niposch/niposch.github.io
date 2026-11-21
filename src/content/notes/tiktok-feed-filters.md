---
title: Filtering TikTok's feed with ReVanced
summary: How I strip ads and TikTok Shop videos out of my feed using ReVanced patches I run every day.
order: 1
draft: false
---

Between normal ads and endless TikTok Shop clips, my feed was turning into an
infomercial. I put together a set of ReVanced patches to strip both out, and I
use them every day.

The two filters are independent: one drops regular platform ads, and the other
drops videos carrying TikTok Shop product tags or promo metadata.

## Filtering by metadata instead of guessing

The Shop filter doesn't try to guess whether someone is selling something from
the video or captions. It looks straight at the feed item's attached product
and shopping metadata and drops the entire entry before it hits the feed.

That's a useful distinction: plenty of Shop videos aren't flagged as normal ads,
and occasionally a regular creator tags a product anyway. Going off the app's
own metadata keeps the patch fast and clean, even if unlabelled sponsorships
still slip by. The dedicated Shop tab still works if you ever actually want it.

Honestly, stripping items cleanly out of the feed pipeline, rather than just
hiding a label or button on top of them, was the most fun part of putting this
together.

## Side-by-side install & downloads

There's also an optional patch to change the Android package name so you can
keep the patched app next to the official one with separate data. Changing a
package name alone tends to break login or registration when the app's network
requests still expect the original ID, so the bundle includes a fix for that
too.

An optional download patch unlocks the app's local download toggles. It only
flips the client-side permission flags, not anything enforced by TikTok's
servers.

## Keeping it working

The bundle publishes a permanent release feed that ReVanced Manager can pull
updates from (you still have to re-patch the APK after grabbing a new bundle).
Because these patches hook into app internals, they're always tied to a specific
TikTok version. Check the repo for the supported version and install steps.

(Independent community project built on ReVanced Patcher, not affiliated with
ReVanced.)

[Source, supported version, and install steps ↗](https://github.com/niposch/revanced-tiktok-patches)

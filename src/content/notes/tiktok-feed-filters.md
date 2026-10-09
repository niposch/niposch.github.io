---
title: Filtering TikTok's feed with ReVanced
summary: Removing ads and Shop videos from the feed with patches I use regularly.
order: 1
draft: false
---



I made a set of ReVanced patches for TikTok to remove ads and Shop videos from
the feed. I use them regularly, so this is one of the projects I want to write
about here.

There are two separate filters. One removes videos explicitly marked as ads.
The other removes videos carrying Shop information, such as product links or
shopping promotions. They can be enabled independently.

## What the filter actually looks at

The Shop filter works with the information attached to a feed item. It doesn't
try to work out what a video is about by analysing its picture, audio, or
caption. If the item contains the relevant product or shopping metadata, the
whole item is removed.

That distinction matters. A video can be promoting something without being
marked as a platform ad. It can also have Shop metadata without looking like a
conventional advert. The filter follows those fields; it doesn't promise to
identify every promotion. The Shop tab itself remains accessible.

For me, this is also the more interesting part of the project: changing what
the app puts into the feed, rather than just hiding a visible button or label.

## Installing it separately

The bundle also has an optional package-name change, so the patched app can be
installed separately with its own data. There is a registration fix associated
with that change. Renaming an Android package is not always enough when the
app's own requests still carry assumptions about its original identity.

There are optional download controls as well. Those change the app's download
permission records; they don't make unavailable media available or bypass
server-side access restrictions.

## Keeping it useful

The patches have a permanent release feed that ReVanced Manager can check for
new bundles. Updating the bundle and updating an installed app are separate
steps: after getting the new patches, the app still needs to be patched again.

This is version-specific work. The supported TikTok version and setup details
belong in the repository, where they can stay alongside the releases. An app
update can change the code or metadata the patches depend on.

The project is independent and uses ReVanced Patcher; it is not an official
ReVanced project.

[Source, supported version, and installation instructions](https://github.com/niposch/revanced-tiktok-patches)

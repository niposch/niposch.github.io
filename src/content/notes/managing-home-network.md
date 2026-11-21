---
title: Managing my home network with a coding assistant
summary: How I keep a living map of my homelab so a coding assistant can actually debug and change things without guessing.
order: 3
draft: false
---

I've been using a coding assistant to help run my homelab, mostly over SSH.
The genuinely useful part isn't asking it generic Linux questions; it's letting
it inspect the actual machines, trace a problem end to end, make a targeted
fix, and verify it worked.

## Keeping a map of the setup

An assistant hits a wall fast if it has to rediscover your whole network every
time you open a new chat. Which box runs Paperless? Is a service meant to be
LAN-only or public? What broke last month?

So I keep a small Git repo of plain Markdown docs describing the hosts,
services, routes, and a dated changelog of what we've touched. That gives every
new session a head start without treating the docs as gospel. Before changing
anything, the assistant still checks live state on the actual host.

## Debugging across boundaries

Where this really pays off is when a problem spans three different layers. The
Brother scanner setup is a good example: a C SANE driver on the Proxmox host, a
button-polling Python daemon, and an LXC container running Paperless. Being
able to follow a single scan across all three, instead of copy-pasting isolated
error messages into a chat box, saves hours.

Of course, plenty of checks still need a human in the room: actually feeding
paper into the scanner, seeing if a TV app responds to the remote, or deciding
whether something should be exposed to the internet. A command exiting `0`
isn't the same thing as seeing it work.

## The hardware underneath

Nothing exotic: most services live on an old Proxmox laptop (Docker apps in one
container, Home Assistant and other workloads in separate VMs), everything is
managed over Tailscale, and a tiny VPS relays only the few things I want
reachable from outside.

The hardware isn't really the point though. Keeping clean notes, checking live
state before touching anything, and writing down what changed afterwards is
what makes the whole workflow stick.

---
title: Managing my home network with a coding assistant
summary: How I use a coding assistant to inspect the setup, make changes, and check the result.
draft: true
---

<!-- Editorial draft based on the existing collaboration and dated homelab
inventory. The owner selected assistant-led administration as the main subject
on 2026-10-09. No fresh live inventory was performed for this post. -->

I've been using a coding assistant to help manage my home network. It can
inspect the machines, work through a problem, and make a requested change.
The useful part is being able to carry an investigation through to a checked
result, with the context from earlier work available.

## Giving it enough context

The assistant needs to know what the setup is supposed to look like. Which
machine runs a service? How is it reached? Should it be public, or only
available privately?

I keep a description of the setup and the changes we've made. That gives the
next investigation a starting point. It also means the assistant can check
the part relevant to the current problem instead of rediscovering everything.

That description isn't a replacement for looking at the machine. It records
what was observed and when. When a change depends on the current state, that
state still needs to be checked.

## Working through a change

The process starts with what I want to achieve. The assistant inspects the
relevant service or host, works out a concrete change, and checks the result
afterwards. Keeping those observations separate from assumptions makes it
easier to see what has actually been established.

The scanner is one example. It involved a driver, a button-triggered workflow,
and the hand-off to Paperless. Being able to follow the document across those
parts was more useful than treating each failure as an isolated error message.

Some checks can be done automatically. Others need me: putting documents in
the scanner, confirming that a device behaves correctly, or deciding that an
application should be exposed publicly. The assistant can help prepare those
checks, but a command completing successfully doesn't replace the observation.

## The setup behind it

Most home services run on a Proxmox laptop, with Docker applications and Home
Assistant kept separate. Administration goes through Tailscale. A small VPS
provides a public entry point for the services I've chosen to expose.

Those details provide the context, but they aren't the main point of the
workflow. What matters is keeping track of the intended setup, investigating
the actual state, and leaving enough information that the next change can
start from what we already know.

<!-- Owner review before publishing:
- Adjust the opening to describe your own experience with this workflow.
- Choose whether to name Codex explicitly.
- Add one concrete example of a useful interaction or a wrong assumption.
Keep topology schematic: no internal addresses, credentials, private logs,
operational config paths, or claims of a fully tested backup/recovery strategy.
-->

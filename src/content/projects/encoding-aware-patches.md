---
title: "Encoding-aware patches"
summary: "A small Rust CLI and MCP server for patching legacy-encoded files (like Windows-1252) without silently converting the whole file to UTF-8."
repository: https://github.com/niposch/apply_patch-multiple-encodings
stack: ["Rust"]
status: "CLI + MCP server"
role: "Original project"
featured: false
order: 8
draft: false
---

Old codebases (hello, VB6) still have plenty of files sitting in Windows-1252
or other legacy encodings. Most editors and coding tools happily rewrite the
whole file to UTF-8 the moment you make a tiny edit, breaking the legacy tools
that expect the original bytes.

This tool encodes only the patch itself in the encoding you specify and matches
exact line bytes. Untouched lines, BOMs, and existing line endings all stay
completely untouched, and it refuses to write characters that can't be
represented in that encoding.

Runs either as a standalone CLI or a local MCP server. You pass the encoding
explicitly (it doesn't try to guess) and edits happen file by file rather than
as a multi-file transaction.

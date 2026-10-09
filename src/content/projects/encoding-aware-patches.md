---
title: "Encoding-aware patches"
summary: "A Rust CLI and MCP server for patching legacy-encoded source files without converting them."
repository: https://github.com/niposch/apply_patch-multiple-encodings
stack: ["Rust"]
status: "CLI + MCP server"
role: "Original project"
featured: false
order: 5
draft: false
---

Some source files still use Windows-1252 or other legacy encodings. Converting the entire file to UTF-8 just to make an edit can break the tools that consume it.

This tool encodes only the patch text using an explicitly chosen encoding and matches exact line bytes. Untouched bytes, existing BOMs, and untouched line endings are preserved. It rejects added text that cannot be represented in the selected encoding.

It is available as a standalone CLI and local MCP server. It does not guess encodings or provide an atomic transaction across several files. The repository documents the patch format and preservation limits.

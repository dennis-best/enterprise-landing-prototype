---
name: gembox-setup
description: >-
  Gembox first-time or full project setup. Confirm Notion, then run Bootstrap (Cursor) setup script from Notion.
---

# Gembox setup

**When:** Human says **gembox setup** (any casing) or pastes the **core prompt** from [Gembox Cursor Integration](https://www.notion.so/34150ba3919d804bac88fed97249ed3a).

**If `.cursor/skills/` is missing:** the human must have **Notion MCP** connected and must paste the **core prompt** from Integration (it includes Notion URLs). This skill is materialized during setup for later runs.

## Steps

1. **Confirm Notion MCP** — fetch full body of **Gembox Cursor Integration** (login wall or empty → **STOP** and report): https://www.notion.so/34150ba3919d804bac88fed97249ed3a
2. **Run the setup script** — fetch full body of **Bootstrap (Cursor)** and execute **every step top → bottom** (Figma check, skill pack, rules, scaffold, git — all live there): https://www.notion.so/36050ba3919d801fbee4d39f2a79650a
3. **Do not** invent repo paths or read other product repositories.

**STOP** = MCP/permissions/git failure. **PROMPT** = normal when workspace is not a git root (path, project name, GitHub owner) — then continue in the same thread.

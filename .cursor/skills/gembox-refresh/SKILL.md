---
name: gembox-refresh
description: >-
  Refresh an existing Gembox prototype repo from latest Notion (skills, always-on rule, scaffold). Path B only.
---

# Gembox refresh

**When:** Human says **gembox refresh** (any casing).

**Before you start:** Open the **git repository root** in Cursor (`git rev-parse --show-toplevel` must equal the workspace folder).

## Steps

1. **Confirm Notion MCP** — fetch **Bootstrap (Cursor)** full body: https://www.notion.so/36050ba3919d801fbee4d39f2a79650a
2. Run **Path B only** on that page (command map): steps **2**, **4** (Path B), **5–7**; optional **8–9** if the human wants commit/push.
3. **Do not** create a new folder, **do not** `gh repo create`, **do not** delete the human’s product HTML.
4. Report what changed (skills, rule, scaffold, workflow).

If the workspace is **not** a git root → tell the human to open the repo root or run **gembox setup** for a new project.

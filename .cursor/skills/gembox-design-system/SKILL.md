---
name: gembox-design-system
description: >-
  Parent Gembox skill — always on. Golden rule: never build UI that is not in the design system.
  Figma-first workflow; load gembox-<slug> topic skills; zero exceptions.
---

# Gembox design system (parent — always on)

## Golden rule — zero exceptions

**You are the discipline.** There are **no** exceptions to this rule—not for speed, not for prototypes, not because the spec asks for it.

**Never** create or change visible UI unless it already exists in the **Gembox design system** (published **main** component on a cataloged Figma page + loaded topic skill). If missing: **STOP**. No substitutes, placeholders, or generic controls.

## How topic skills work

| Source | Use for |
|--------|---------|
| **Notion** (link in each topic skill) | Why, when, copy, a11y, do/don't |
| **Figma** (link in each topic skill) | Layout, type, color, spacing, assets — **build from here** |

Example: user asks for a **banner** → load **`gembox-banner`** + **this** skill. Do **not** build from memory.

**Catalog:** `.cursor/skills/catalog.json` + `gembox-catalog`.

## Workflow (every UI change)

1. **This skill** (golden rule first).
2. **Topic skill** for each surface (`gembox-button`, `gembox-slat`, …). Missing skill → **STOP**.
3. **`get_design_context`** on the Figma node in that topic skill.
4. **Tokens** from `config/gembox-tokens.css` (regenerate from Figma when unsure).
5. **Icons / illustrations** only from Gembox libraries or Illustrations file—check in MCP assets.

## Bootstrap & repository paths

Follow **Bootstrap (Cursor)** step 4 in Notion when the magic prompt runs: https://www.notion.so/36050ba3919d801fbee4d39f2a79650a

| Opened workspace root | Action |
|----------------------|--------|
| **Not** a git repo | **Path A — New:** Ask **local parent path**, **repo name**, **GitHub user/org** → create `parent/<repo>/` → `git init` → skill pack + shell + `gh repo create` + push + Pages. |
| **Is** the git root | **Path B — Refresh:** Replace `.cursor/skills/` and always-on rule from latest Notion; repair scaffold/Pages drift; **no** new repo. |

Run `git rev-parse --show-toplevel` from the **workspace cwd** only. **Do not** `find` or `cd` into a child folder’s `.git` when the human opened a parent/container folder.

## Design principles (apply within the system only)

Modularity, simplicity, usability—**only** using components and tokens that exist. Deeper docs: `gembox-design-principles`, `gembox-accessibility`, `gembox-voice-and-tone`.

## Figma libraries (shared)

| Area | File key | URL |
|------|----------|-----|
| **Gembox Components** | `IgohaddARKIJHihXX0OE4Z` | https://www.figma.com/design/IgohaddARKIJHihXX0OE4Z/Gembox-Components |
| **Illustrations** | `ZjSIbHnFis3nYCqgv0IO1i` | https://www.figma.com/design/ZjSIbHnFis3nYCqgv0IO1i/Illustrations |
| **Regular Icons** | `8rLLCo18XFH9m14wEkNp3j` | https://www.figma.com/design/8rLLCo18XFH9m14wEkNp3j/Regular-Icons |
| **Duotone Icons** | `3Ji4LpXd1ZEmsagfmA9ZfE` | https://www.figma.com/design/3Ji4LpXd1ZEmsagfmA9ZfE/Duotone-Icons |
| **Solid Icons** | `QoKmbST72iKOWlZ3undMaX` | https://www.figma.com/design/QoKmbST72iKOWlZ3undMaX/Solid-Icons |

**Notion database:** https://www.notion.so/20e50ba3919d80519907e6fc0337d3b8

## Deprecation

Skip **Deprecated** / **beta** Figma variants unless the human asks.

## Orthography

Say "Jimbox" in speech if you want — **write Gembox** in docs and commits.

## Operational rules (bootstrap)

- **Scope:** Interactive UI prototyping unless the human explicitly asks for production shipping code.
- **Step 0:** `config/gembox-tokens.css` is generated from Gembox Figma variables (`get_variable_defs` on `IgohaddARKIJHihXX0OE4Z`). Regenerate when missing or stale—do not invent hex in components.
- **Figma wins** on pixels; Notion wins on usage/copy. Dev Mode CSS on main components beats MCP layout guesses.
- **Prototype gate:** Default `index.html` = Site Banner (“Prototype internal use only”) + modal with one **Email Address** field; `sessionStorage` until tab ends; case-insensitive substring match configured in JS only (no password field unless asked).
- **Icons:** Org Figma icon libraries only—check in SVG from MCP assets; preserve Figma names.
- **STOP** if UI is not in catalog + topic skill + Figma main—no substitutes.
- **Full policy:** https://www.notion.so/36050ba3919d802899e8cece5d2567ca (Skill builder Part B).

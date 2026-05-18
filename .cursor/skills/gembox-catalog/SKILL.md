---
name: gembox-catalog
description: >-
  Lists Gembox Figma pages and topic skills. Use for "list" commands. Always load gembox-design-system first.
---

# Gembox catalog

**Canonical component list:** `figma-pages.json` (from Gembox Components Figma file scan).

## Always on

`gembox-design-system` — golden rule: zero exceptions; never build UI outside the design system.

## On demand

Each **Figma page** → `gembox-<slug>/` with **Notion** (if exists) + **Figma page URL**.

- `richness: notion` — richer rules from Notion
- `richness: figma-only` — build from Figma until Notion is written

## List command

Read `catalog.json` `entries`. Group by `category` (Core, Component, Forage Pattern, Documentation). Show slug, name, Notion URL, Figma page URL.
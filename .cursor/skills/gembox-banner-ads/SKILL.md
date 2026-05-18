---
name: gembox-banner-ads
description: >-
  Gembox Banner ads (Figma page). Load with parent gembox-design-system; Notion doc pending.
---

# Banner ads

## Sources

| | |
|---|---|
| **Notion** | — *No Notion page yet; Figma page is authoritative.* |
| **Figma page** | [Banner ads](https://www.figma.com/design/IgohaddARKIJHihXX0OE4Z/Gembox-Components?node-id=2431-114804) (`2431:114804`) |

### Build steps
1. Always load parent `gembox-design-system` first.
2. `get_metadata` with `fileKey` `IgohaddARKIJHihXX0OE4Z` and `nodeId` `2431:114804` — scan this page for the **main** component set (skip Deprecated).
3. `get_design_context` on that set for measurements and assets.

## Rules

Figma page is the source of truth until a Notion doc exists. Do not invent variants or spacing — resolve the main component set on this page via `get_metadata` then `get_design_context`.

---
name: gembox-stepper
description: >-
  Gembox Stepper (Figma page). Load with parent gembox-design-system; Notion doc pending.
---

# Stepper

## Sources

| | |
|---|---|
| **Notion** | — *No Notion page yet; Figma page is authoritative.* |
| **Figma page** | [Stepper](https://www.figma.com/design/IgohaddARKIJHihXX0OE4Z/Gembox-Components?node-id=7905-10217) (`7905:10217`) |

### Build steps
1. Always load parent `gembox-design-system` first.
2. `get_metadata` with `fileKey` `IgohaddARKIJHihXX0OE4Z` and `nodeId` `7905:10217` — scan this page for the **main** component set (skip Deprecated).
3. `get_design_context` on that set for measurements and assets.

## Rules

Figma page is the source of truth until a Notion doc exists. Do not invent variants or spacing — resolve the main component set on this page via `get_metadata` then `get_design_context`.

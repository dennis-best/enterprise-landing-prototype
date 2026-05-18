---
name: gembox-input
description: >-
  Gembox Input. Notion + Figma. Load with parent gembox-design-system when using this UI.
---

# Input

## Sources

| | |
|---|---|
| **Notion** | [Text Inputs](https://www.notion.so/27750ba3919d80cfa545cd5e7891a5e5) |
| **Figma page** | [Input](https://www.figma.com/design/IgohaddARKIJHihXX0OE4Z/Gembox-Components?node-id=74-3778) (`74:3778`) |

### Build steps
1. Always load parent `gembox-design-system` first.
2. `get_metadata` with `fileKey` `IgohaddARKIJHihXX0OE4Z` and `nodeId` `74:3778` — scan this page for the **main** component set (skip Deprecated).
3. `get_design_context` on that set for measurements and assets.

## Rules (from Notion)

States: default, active, disabled, error, optional (only when form declares all others required). Label above; max width **540px**; help below field not placeholder; errors UI/Danger; no native `<select>` where Gembox menu exists.

# Demo! — Enterprise landing prototype

Static **vanilla HTML/CSS/JS** prototype aligned to the Gembox design system and the [Demo Enterprise Landing Figma frame](https://www.figma.com/design/8q2oWbbhF5UiIgRXwuJL6M/Demo-Enterprise-Landing-%E2%80%94-Prototype-Frames?node-id=5-2).

## Live site

**https://dennis-best.github.io/enterprise-landing-prototype/**

## Run locally (no install, no server)

1. Open this folder on your Mac: `Projects/demo` (or wherever you cloned it).
2. Double-click **`index.html`**, or right-click → Open With → your browser.

All asset paths are **relative** (`assets/…`, `css/…`, `js/…`) so the page works from the filesystem.

**Note:** DM Sans loads from Google Fonts; you need internet the first time fonts load.

## What’s in the folder

| Path | Purpose |
|------|---------|
| `index.html` | Full landing page |
| `css/styles.css` | Layout + Gembox component styles |
| `css/tokens.css` | Design tokens (from Figma variables) |
| `js/main.js` | Banner dismiss, scroll-to-form, form thank-you |
| `assets/` | SVG illustration layers, logos, banner icons |

There is **no prototype gate** — the page loads immediately.

## GitHub Pages

On every push to **`main`**, [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) copies `index.html`, `css/`, `js/`, and `assets/` to GitHub Pages (no npm build).

- **Repo:** https://github.com/dennis-best/enterprise-landing-prototype
- **Actions:** https://github.com/dennis-best/enterprise-landing-prototype/actions
- **Pages settings:** https://github.com/dennis-best/enterprise-landing-prototype/settings/pages

If the site 404s: **Settings → Pages → Source:** GitHub Actions; repo must be public.

## Gembox integration

See [Gembox Cursor Integration](https://www.notion.so/34150ba3919d804bac88fed97249ed3a) for workflow, tokens, and bootstrap detail.

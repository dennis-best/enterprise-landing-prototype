# Demo — Gembox prototype

Static hello-world prototype using Gembox components (Site Banner, Modal, Input) and tokens from Figma.

## Run locally

Open `index.html` in a browser, or serve the repo root:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080/`.

## Gate

First visit shows a prototype access modal with an **Email Address** field. Access is stored in `sessionStorage` for the tab session. This is not production authentication.

## Gembox integration

See [Gembox Cursor Integration](https://www.notion.so/34150ba3919d804bac88fed97249ed3a) for workflow, tokens, and GitHub Pages setup.

## GitHub Pages

After enabling **Pages → GitHub Actions** for this repository, pushes to `main` deploy via `.github/workflows/deploy-pages.yml`.

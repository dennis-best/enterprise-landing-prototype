# Demo! — Enterprise landing prototype

Static **vanilla HTML/CSS/JS** prototype aligned to the Gembox design system and the [Demo Enterprise Landing Figma frame](https://www.figma.com/design/8q2oWbbhF5UiIgRXwuJL6M/Demo-Enterprise-Landing-%E2%80%94-Prototype-Frames?node-id=5-2).

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

### Live URL (after you push to `main`)

If this repo is published as **`dennis-best/enterprise-landing-prototype`**:

**https://dennis-best.github.io/enterprise-landing-prototype/**

General pattern for your account:

**`https://dennis-best.github.io/<repository-name>/`**

| Repository | Pages URL |
|------------|-----------|
| `enterprise-landing-prototype` | https://dennis-best.github.io/enterprise-landing-prototype/ |
| `demo-prototype` (older gate-only scaffold) | https://dennis-best.github.io/demo-prototype/ |

### How deploy works

On every push to **`main`**, [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) runs:

1. Copies `index.html`, `css/`, `js/`, and `assets/` into `_site/`
2. Adds `_site/.nojekyll` (so GitHub does not run Jekyll)
3. Deploys via GitHub Actions — **no** npm install or build step

You can also run the workflow manually: **Actions → Deploy GitHub Pages → Run workflow**.

### One-time GitHub settings (if the site 404s)

In the repo on GitHub: **Settings → Pages**

1. **Build and deployment → Source:** **GitHub Actions** (not “Deploy from a branch”).
2. **Visibility:** repo must be **public** (or your org must allow Pages for private repos).
3. First deploy may require approving the **`github-pages`** environment: **Settings → Environments → github-pages → Required reviewers** (if enabled).

After the first successful run, **Settings → Pages** shows the live URL.

### Publish from this machine

```bash
cd /path/to/demo   # this repo root

# If you have not linked GitHub yet:
git remote add origin https://github.com/dennis-best/enterprise-landing-prototype.git

git add index.html css/ js/ assets/ .github/workflows/deploy-pages.yml README.md
git commit -m "Publish vanilla enterprise landing for GitHub Pages"
git push -u origin main
```

Then open **Actions** on GitHub and wait for **Deploy GitHub Pages** to finish (about 30 seconds).

### Repo links

- **GitHub:** https://github.com/dennis-best/enterprise-landing-prototype
- **Actions:** https://github.com/dennis-best/enterprise-landing-prototype/actions
- **Pages settings:** https://github.com/dennis-best/enterprise-landing-prototype/settings/pages

## Gembox integration

See [Gembox Cursor Integration](https://www.notion.so/34150ba3919d804bac88fed97249ed3a) for workflow, tokens, and bootstrap detail.

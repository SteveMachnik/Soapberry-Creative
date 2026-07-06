# Soapberry Creative Website

Professional design system and live website for Soapberry Creative.

## Quick Start

1. Clone this repo to your computer
2. Open GitHub Desktop → File → Open Repository → select this folder
3. Make changes (optional — the site works as-is)
4. Commit & push to GitHub
5. Cloudflare Pages auto-deploys

## Deploy to Cloudflare Pages

### One-time setup (5 minutes):

1. Go to **cloudflare.com** → Log in
2. Left sidebar → **Pages** → **Create a project** → **Connect to Git**
3. Click **GitHub** → authorize Cloudflare
4. Select repo: `soapberry-creative`
5. **Build settings:**
   - Build command: `npm run build`
   - Build output directory: `public`
6. Click **Save and deploy**

Your site will deploy to `soapberry-creative.pages.dev`, then you can add your custom domain.

### Connect your domain

Once deployed:
1. Cloudflare Pages → your project → **Custom domain**
2. Add `soapberrycreative.com`
3. Click **Activate domain**

Done — your site is live.

### Making changes

Every time you update:
1. Edit files in `src/` (edit `src/index.html` for content changes)
2. Commit & push with GitHub Desktop
3. Cloudflare auto-rebuilds and deploys (~1–2 min)

See DEPLOYMENT.md for step-by-step walkthrough.

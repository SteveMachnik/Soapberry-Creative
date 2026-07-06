# Deployment Guide: GitHub + Cloudflare Pages

## Step 1: Create GitHub Repository

1. Open **GitHub Desktop**
2. **File** → **New Repository**
3. Name: `soapberry-creative`
4. Local Path: choose a folder
5. Click **Create Repository**
6. At the bottom: commit message `Initial commit` → **Commit to main**
7. Click **Publish repository** (top right)
   - Name: `soapberry-creative`
   - Keep "Private" unchecked
   - Click **Publish Repository**

✓ Your code is on GitHub.

## Step 2: Connect Cloudflare Pages

1. Go to **cloudflare.com** → Log in
2. Left sidebar → **Pages**
3. **Create a project** → **Connect to Git**
4. Click **GitHub** → authorize
5. Select `soapberry-creative` repo
6. **Build settings:**
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `public`
7. Click **Save and deploy**

Cloudflare builds and deploys. Takes ~1 minute.

## Step 3: Add Custom Domain

1. Cloudflare Pages → your project
2. **Custom domain** → add `soapberrycreative.com`
3. Click **Activate domain**

✓ Your site is live at soapberrycreative.com.

## Making Changes

Every update:
1. Edit files in `src/index.html`
2. GitHub Desktop → commit → push
3. Cloudflare auto-redeploys (~1–2 min)

Done.

# A.J. Muvwende Advocates

Vite + React + TypeScript site. This repo is configured to deploy to Render (Static Site).

## Deploy to Render (free tier)

1. Sign in to https://render.com and create a new **Static Site**.
2. Connect your GitHub account and choose the repository `Hasa1O1/ajmadvocates`.
3. Use these settings when prompted:
   - Branch: `main`
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
   - Plan: `Free`
4. Start the deploy. Render will run the build and serve the `dist` folder.

## Local build & preview

```bash
npm install
npm run build
npm run preview
```

## Notes
- The build output directory is `dist` (Vite default).
- If you want Render to use a specific Node version, set it in the Render service settings or add an `engines` field to `package.json`.
- A `render.yaml` was added to this repo to help Render create the static service automatically.

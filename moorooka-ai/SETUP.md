# Moorooka AI: setup

The app lives at https://ashley-pettit.github.io/3dModels/moorooka-ai/ and is built from this folder by the site's
`build.py` (which runs `moorooka-ai/build.py`). The Local directory is rebuilt every time from the Moorooka 3D model's
shop signs and the weekly OpenStreetMap food list, so it grows as Explore does.

## Try the AI on your own phone today (no server)

1. Open https://ashley-pettit.github.io/3dModels/moorooka-ai/?admin
2. Paste your Haiku API key into "Test API key" and tap Save settings. It stays on that phone only.

## Turn the AI on for everyone (about 15 minutes)

The API key must never go in the public page, or anyone could copy it. A small free Cloudflare Worker holds it.

1. https://dash.cloudflare.com > Workers & Pages > Create > Worker. Name it `moorooka-ai`, paste in `worker.js`
   (it's built next to the page: https://ashley-pettit.github.io/3dModels/moorooka-ai/worker.js), then Deploy.
2. Worker > Settings > Variables and Secrets:
   - Secret `ANTHROPIC_API_KEY` = your Haiku key
   - Variable `ALLOWED_ORIGIN` = `https://ashley-pettit.github.io`
3. Give Claude the Worker's address (like `https://moorooka-ai.<you>.workers.dev`). It goes in the repo's publish
   workflow as `MOOROOKA_AI_ENDPOINT`, and every visitor's app uses it.
4. In the Claude Console (https://platform.claude.com) set a monthly spend limit on the key. Each question allows up to
   3 web searches; the Worker allows 20 questions per visitor per 10 minutes.

## Owner settings
Tap the version number at the bottom of the menu 5 times, or add `?admin` to the address.

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
3. Open the Worker's address (like `https://moorooka-ai.<you>.workers.dev`) in a browser. It should show
   `{"ok":true,"app":"Moorooka AI",...}`.
4. Tell the site where the Worker is. On GitHub: this repo > Settings > Secrets and variables > Actions > Variables >
   New repository variable, named `MOOROOKA_AI_ENDPOINT`, with the Worker's address as its value. It isn't a secret.
   Then Actions > Publish > Run workflow (or wait for the next merge). Every visitor's app uses it from then on.
5. In the Claude Console (https://platform.claude.com) set a monthly spend limit on the key. This is the hard stop on
   cost, whatever else happens.

## The throttle: one visitor can't flood it

The Worker counts questions per visitor (by IP address) and turns away anyone over the limit with a polite message:

- 20 questions in any 10 minutes ("Wait a few minutes, then try again")
- 100 questions in any 24 hours ("Ask again tomorrow")

To change either, add a Worker variable `LIMIT_PER_10_MIN` or `LIMIT_PER_DAY` with the new number (Worker > Settings >
Variables and Secrets). No code change or new publish is needed. Each question also allows at most 3 web searches.

The counts are kept in the Worker's memory, so they are best effort: Cloudflare can restart a Worker, which starts the
counts again. That is why step 5's spend limit matters.

## Premium (coming soon)

The app shows a small "Get Premium" button. For now it only says "Premium is coming soon". The plan: Haiku stays free
for everyone; a signed-in, paying person gets Opus. When it's built, the Worker must choose the model itself after
checking the sign-in and the payment (never trust a model name sent by the page), and it will need a key that is
allowed to use Opus: today's key is Haiku only.

## Owner settings
Tap the version number at the bottom of the menu 5 times, or add `?admin` to the address.

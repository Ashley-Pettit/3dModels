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

## Turn Meet locals on (about 5 minutes, after the steps above)

Meet locals is the noticeboard of neighbours keen to meet other locals. Until you do this the page says it isn't
switched on yet, and the rest of the app carries on as normal.

1. https://dash.cloudflare.com > Storage & Databases > KV > Create a namespace. Call it `moorooka-locals`.
2. Your Worker > Settings > Bindings > Add > KV namespace. Variable name `LOCALS`, namespace `moorooka-locals`. Deploy.
3. Optional, so you can take any profile down from your own phone: add a secret `ADMIN_KEY` to the Worker with a long
   random password, then put the same thing into Owner settings > "Meet locals admin key" in the app. Every profile
   then gets a Remove button.

Nothing else to publish: the page already knows how to use it once the Worker has the binding.

### What a profile can and can't carry

No phone number, email address, street address, web address or social handle is accepted, by the page or the Worker:
the whole idea is that people meet at a public place. A profile is a first name, a suburb, one line about what
they're up for, interests and meeting places picked from fixed lists, and that's all. It is for people 18 and over.

Nobody checks a profile before it appears, so the rest of the safety is:

- **Report.** Two reports from two different visitors take a profile off the board straight away. The same person
  reporting twice counts once, so nobody can silence a neighbour on their own. A hidden profile is kept, not deleted,
  so you can look at it: open `https://your-worker/locals?hidden=1&admin=YOUR_ADMIN_KEY`.
- **It expires.** Every profile disappears by itself after 60 days.
- **Flooding.** One visitor can put up 3 profiles and send 10 reports a day, and gets 20 tries at the form (so a few
  typos never lock anyone out).

Nobody signs in. A profile belongs to the phone that put it up, by a secret kept in that browser, and only its hash is
stored. If someone clears their browser they can't take their own profile down: they report it, or you remove it.

## Premium (coming soon)

The app shows a small "Get Premium" button. For now it only says "Premium is coming soon". The plan: Haiku stays free
for everyone; a signed-in, paying person gets Opus. When it's built, the Worker must choose the model itself after
checking the sign-in and the payment (never trust a model name sent by the page), and it will need a key that is
allowed to use Opus: today's key is Haiku only.

## Owner settings
Tap the version number at the bottom of the menu 5 times, or add `?admin` to the address.

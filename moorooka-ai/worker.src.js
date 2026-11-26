// Moorooka AI server (Cloudflare Worker). Keeps the Anthropic API key secret.
// Setup: add a secret named ANTHROPIC_API_KEY. Optional variable ALLOWED_ORIGIN (e.g. https://ashley-pettit.github.io).
// Optional variables LIMIT_PER_10_MIN and LIMIT_PER_DAY change the throttle below without touching this code.
// Build BUILD_ID

const KNOWLEDGE = /*KNOWLEDGE*/;
const MODEL = "claude-haiku-5-5";     // free for everyone. Premium (a stronger model for signed-in, paying people) isn't built:
                                      // when it is, choose the model here on the server after checking the payment, never from the page.
const MAX_MSGS = 10, MAX_CHARS = 1500;
// The throttle: how many questions one visitor (by IP address) may ask.
const LIMIT_PER_10_MIN = 20;          // in any 10 minutes
const LIMIT_PER_DAY = 100;            // in any 24 hours
const hits = new Map();               // kept in this server instance's memory (best effort: it starts again when Cloudflare restarts
                                      // the instance, so the monthly spend limit on the key is the hard stop)
const MIN10 = 10 * 60 * 1000, DAY = 24 * 60 * 60 * 1000;
const num = (v, d) => { const n = parseInt(v, 10); return n > 0 ? n : d; };

/* ================= Meet locals: a noticeboard of people keen to meet other locals =================
Profiles live in the KV namespace bound as LOCALS (see moorooka-ai/SETUP.md). No person checks a profile before
it appears, so the rules here are the safety net:
  - no way to reach someone privately is accepted or stored (checkText below), because the whole idea is that
    people meet at a public place;
  - a first name only, and interests and meeting places can only be ones the app itself offers;
  - two reports, from two different visitors, hide a profile straight away;
  - every profile disappears by itself after LOCALS_DAYS.
Nobody signs in, so a profile is owned by a secret kept on the phone that made it: we store only its hash. */
const MEET = /*MEET*/;
const LOCALS_DAYS = 60;
const NEW_PER_DAY = 3, TRIES_PER_DAY = 20, REPORTS_PER_DAY = 10, HIDE_AT = 2;
const NAME_MAX = 24, ABOUT_MIN = 15, ABOUT_MAX = 240;
const acts = new Map();                 // posting and reporting counts per visitor (best effort, like the AI throttle)

// Anything that routes a stranger to you privately, or to your door, is refused and the reason is shown.
const BANNED = [
  [/[^\s@]+@[^\s@]+\.[a-z]{2,}/i, "an email address"],
  [/\b(?:https?:\/\/|www\.)\S+/i, "a web address"],
  [/\b[a-z0-9][a-z0-9-]*\.(?:com|net|org|au|co|io|me|app|gg|xyz)\b/i, "a web address"],
  [/(?:^|[\s(])@[a-z0-9._]{2,}/i, "a social media handle"],
  [/\b\d{1,5}[a-z]?[\s,]+[a-z][a-z'-]+(?:\s+[a-z][a-z'-]+)?\s+(?:rd|road|st|street|ave|avenue|dr|drive|ln|lane|cres|crescent|pde|parade|tce|terrace|ct|court|cl|close|way|hwy|highway)\b/i, "a street address"],
  [/\b(?:insta|instagram|facebook|fb|snapchat|snap|whats\s?app|telegram|messenger|tiktok|discord|signal|viber|wechat|linkedin)\b/i, "a way to message you privately"],
  [/\b(?:dm|pm|text|txt|call|ring|phone|email|message|msg|add|follow)\s+me\b/i, "a way to message you privately"],
  [/\bmy\s+(?:number|mobile|phone|email|address|place|house|unit|street)\b/i, "private contact or address details"],
];
// A floor only. Report is what catches the rest, and two reports hide a profile.
const SLURS = /\b(?:n[i1]gg(?:er|a)s?|f[a@]gg?(?:ot|ots)?|tr[a@]nn(?:y|ies)|ret[a@]rds?|k[i1]kes?|sp[i1]cs?|ch[i1]nks?|w[e3]tb[a@]cks?|r[a@]gh[e3][a@]ds?|towel\s?heads?|p[a@]k[i1]s?)\b/i;

const spaced = s => s.replace(/(\d)[\s()+\-.]+(?=\d)/g, "$1");       // "0412 345 678" counts as one number
function checkText(s, what){
  if (/\d{6,}/.test(spaced(s))) return `Please take the phone number out of your ${what}. The noticeboard never shows contact details: you arrange to meet at one of the public places instead.`;
  for (const [rx, why] of BANNED) if (rx.test(s)) return `Please take ${why} out of your ${what}. The noticeboard never shows contact details: you arrange to meet at one of the public places instead.`;
  if (SLURS.test(s)) return "That wording isn't something we'll put in front of the neighbourhood. Please rewrite it.";
  return "";
}

const hex = b => [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join("");
const rand = n => hex(crypto.getRandomValues(new Uint8Array(n)).buffer);
const sha = async s => hex(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)));
function overUsed(key, limit){
  const now = Date.now(), l = (acts.get(key) || []).filter(t => now - t < DAY);
  if (l.length >= limit) return true;
  l.push(now); acts.set(key, l);
  if (acts.size > 5000) acts.clear();
  return false;
}

// What everyone sees. Kept in the key's metadata so the whole board is one KV read.
const shown = p => ({id: p.id, n: p.name, a: p.about, s: p.suburb, t: p.tags, p: p.spots, at: p.at});

async function meetLocals(req, env, h, what, ip) {
  const bad = (message, status = 400, type = "meet") => json({error: {type, message}}, status, h);
  const kv = env.LOCALS;
  if (!kv) return bad("Meet locals isn't switched on yet.", 503, "meet_off");
  const body = req.method === "POST" ? await req.json().catch(() => null) : {};
  if (!body) return bad("Bad request");
  const isAdmin = !!(env.ADMIN_KEY && body.admin && body.admin === env.ADMIN_KEY);

  if (what === "" && req.method === "GET") {
    const url = new URL(req.url);
    const all = url.searchParams.get("hidden") === "1" && env.ADMIN_KEY && url.searchParams.get("admin") === env.ADMIN_KEY;
    const keys = (await kv.list({prefix: "p:", limit: 1000})).keys;
    const people = keys.map(k => k.metadata).filter(m => m && m.id && (all || !m.hidden)).sort((a, b) => b.at - a.at);
    return json({people, days: LOCALS_DAYS}, 200, h);
  }

  if (what === "" && req.method === "POST") {
    // A refused try costs you one of many, so a few typos never lock you out; only a profile that actually goes up
    // counts against the small daily limit.
    if (overUsed("try:" + ip, TRIES_PER_DAY)) return bad("That's a lot of tries in one day. Have a break and come back tomorrow.", 429, "visitor_limit");
    const name = String(body.name || "").replace(/\s+/g, " ").trim();
    const about = String(body.about || "").replace(/[^\S\n]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
    if (body.over18 !== true) return bad("Meet locals is for people aged 18 and over.");
    if (name.length < 2 || name.length > NAME_MAX) return bad(`Please give a first name between 2 and ${NAME_MAX} letters.`);
    if (!/^[\p{L}][\p{L}\p{M}'’. -]*$/u.test(name) || name.split(" ").length > 2) return bad("Please use a first name only, with no numbers.");
    if (about.length < ABOUT_MIN) return bad("Please say a little more about what you're up for, so people know what they'd be saying yes to.");
    if (about.length > ABOUT_MAX) return bad(`Please keep it under ${ABOUT_MAX} characters.`);
    if (!MEET.suburbs.includes(body.suburb)) return bad("Please choose your suburb from the list.");
    const tags = [...new Set((Array.isArray(body.tags) ? body.tags : []).filter(t => MEET.tags.includes(t)))].slice(0, 6);
    const spots = [...new Set((Array.isArray(body.spots) ? body.spots : []).filter(s => MEET.spots.some(x => x.id === s)))].slice(0, 3);
    if (!tags.length) return bad("Please pick at least one thing you're into.");
    if (!spots.length) return bad("Please pick at least one public place you'd be happy to meet at.");
    for (const [text, where] of [[name, "name"], [about, "description"]]) {
      const why = checkText(text, where);
      if (why) return bad(why, 400, "meet_rules");
    }
    if (overUsed("new:" + ip, NEW_PER_DAY)) return bad("You've put up a few profiles today already. Try again tomorrow.", 429, "visitor_limit");
    const id = rand(8), token = rand(16);
    const p = {id, name, about, suburb: body.suburb, tags, spots, at: Date.now(), reports: 0, hidden: false, hash: await sha(token)};
    await kv.put("p:" + id, JSON.stringify(p), {expirationTtl: LOCALS_DAYS * 86400, metadata: shown(p)});
    return json({person: shown(p), id, token}, 200, h);
  }

  if (what === "report" && req.method === "POST") {
    if (overUsed("rep:" + ip, REPORTS_PER_DAY)) return bad("You've reported a few profiles today already. Try again tomorrow.", 429, "visitor_limit");
    const raw = await kv.get("p:" + String(body.id || ""));
    if (!raw) return bad("That profile has already gone.", 404);
    const p = JSON.parse(raw);
    // One visitor counts once per profile, so nobody can silence a neighbour on their own. We keep a hash of who,
    // never the address itself.
    const who = await sha(ip + "|" + p.id);
    p.by = Array.isArray(p.by) ? p.by : [];
    if (!p.by.includes(who)) p.by.push(who);
    p.reports = p.by.length;
    p.hidden = p.hidden || p.reports >= HIDE_AT;
    const left = Math.max(0, Math.round((p.at + LOCALS_DAYS * 86400000 - Date.now()) / 1000));
    await kv.put("p:" + p.id, JSON.stringify(p), {expirationTtl: Math.max(60, left), metadata: {...shown(p), hidden: p.hidden}});
    return json({ok: true, hidden: p.hidden}, 200, h);
  }

  if (what === "delete" && req.method === "POST") {
    const id = String(body.id || "");
    const raw = await kv.get("p:" + id);
    if (!raw) return json({ok: true}, 200, h);                      // already gone: nothing to do
    const p = JSON.parse(raw);
    if (!isAdmin && (!body.token || await sha(String(body.token)) !== p.hash)) return bad("Only the phone that put this profile up can take it down.", 403);
    await kv.delete("p:" + id);
    return json({ok: true}, 200, h);
  }

  return bad("Method not allowed", 405);
}

function cors(origin, env){
  const allowed = (env.ALLOWED_ORIGIN || "*").split(",").map(s => s.trim());
  const ok = allowed.includes("*") || allowed.includes(origin);
  return {
    "Access-Control-Allow-Origin": ok ? (origin || "*") : allowed[0],
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type",
    "Vary": "Origin"
  };
}
const json = (obj, status, headers) => new Response(JSON.stringify(obj), {status, headers: {...headers, "content-type": "application/json"}});

export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") || "";
    const h = cors(origin, env);
    if (req.method === "OPTIONS") return new Response(null, {headers: h});

    // Meet locals lives under /locals; the AI answers on the address itself.
    const meet = new URL(req.url).pathname.match(/\/locals(?:\/([a-z]+))?\/?$/);
    // The health check answers anyone, so opening the Worker's address in a browser shows that it is up (SETUP.md).
    if (!meet && req.method === "GET") return json({ok: true, app: "Moorooka AI", build: "BUILD_ID", meet: !!env.LOCALS}, 200, h);

    const allowed = (env.ALLOWED_ORIGIN || "*").split(",").map(s => s.trim());
    if (!allowed.includes("*") && !allowed.includes(origin)) return json({error: {message: "Not allowed"}}, 403, h);
    const ip = req.headers.get("CF-Connecting-IP") || "anon";

    if (meet) return meetLocals(req, env, h, meet[1] || "", ip);
    if (req.method !== "POST") return json({error: {message: "Method not allowed"}}, 405, h);
    if (!env.ANTHROPIC_API_KEY) return json({error: {message: "Server is missing its API key (setup needed)."}}, 500, h);

    // Throttle: one visitor can't flood the AI. The page shows these messages as they are (type "visitor_limit").
    const now = Date.now();
    const list = (hits.get(ip) || []).filter(t => now - t < DAY);
    const recent = list.filter(t => now - t < MIN10);
    const limited = (message, until) => json({error: {type: "visitor_limit", message}}, 429, {...h, "retry-after": String(Math.max(1, Math.ceil((until - now) / 1000)))});
    if (recent.length >= num(env.LIMIT_PER_10_MIN, LIMIT_PER_10_MIN))
      return limited("Moorooka AI limits how many questions can be asked in a short time. Wait a few minutes, then try again.", recent[0] + MIN10);
    if (list.length >= num(env.LIMIT_PER_DAY, LIMIT_PER_DAY))
      return limited("Today's free question limit has been reached. Ask again tomorrow.", list[0] + DAY);
    list.push(now); hits.set(ip, list);
    if (hits.size > 5000) hits.clear();

    // Validate input: only plain text turns, trimmed
    let body; try { body = await req.json(); } catch { return json({error: {message: "Bad request"}}, 400, h); }
    let msgs = Array.isArray(body.messages) ? body.messages : [];
    msgs = msgs.slice(-MAX_MSGS)
      .filter(m => (m.role === "user" || m.role === "assistant") && typeof m.content === "string" && m.content.trim())
      .map(m => ({role: m.role, content: m.content.slice(0, m.role === "user" ? MAX_CHARS : 4000)}));
    while (msgs.length && msgs[0].role !== "user") msgs.shift();
    if (!msgs.length || msgs[msgs.length - 1].role !== "user") return json({error: {message: "Ask a question first."}}, 400, h);

    const stamp = new Date().toLocaleString("en-AU", {timeZone: "Australia/Brisbane", weekday: "long", day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "2-digit"});
    const payload = (withSearch) => ({
      model: env.MODEL || MODEL, max_tokens: 1200, stream: true,
      system: [{type: "text", text: KNOWLEDGE, cache_control: {type: "ephemeral"}}, {type: "text", text: `Right now it is ${stamp} in Brisbane.`}],
      messages: msgs,
      ...(withSearch ? {tools: [{type: "web_search_20250305", name: "web_search", max_uses: 3,
        user_location: {type: "approximate", city: "Brisbane", region: "Queensland", country: "AU", timezone: "Australia/Brisbane"}}]} : {})
    });
    const call = (withSearch) => fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {"content-type": "application/json", "x-api-key": env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01"},
      body: JSON.stringify(payload(withSearch))
    });

    let res = await call(true);
    if (res.status === 400) {                      // e.g. web search not enabled for this model/org
      const t = await res.text();
      if (/web_search|tool/i.test(t)) res = await call(false);
      else return new Response(t, {status: 400, headers: {...h, "content-type": "application/json"}});
    }
    if (!res.ok) return new Response(await res.text(), {status: res.status, headers: {...h, "content-type": "application/json"}});
    return new Response(res.body, {headers: {...h, "content-type": "text/event-stream", "cache-control": "no-cache"}});
  }
};

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

function cors(origin, env){
  const allowed = (env.ALLOWED_ORIGIN || "*").split(",").map(s => s.trim());
  const ok = allowed.includes("*") || allowed.includes(origin);
  return {
    "Access-Control-Allow-Origin": ok ? (origin || "*") : allowed[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
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
    if (req.method === "GET") return json({ok: true, app: "Moorooka AI", build: "BUILD_ID"}, 200, h);
    if (req.method !== "POST") return json({error: {message: "Method not allowed"}}, 405, h);

    const allowed = (env.ALLOWED_ORIGIN || "*").split(",").map(s => s.trim());
    if (!allowed.includes("*") && !allowed.includes(origin)) return json({error: {message: "Not allowed"}}, 403, h);
    if (!env.ANTHROPIC_API_KEY) return json({error: {message: "Server is missing its API key (setup needed)."}}, 500, h);

    // Throttle: one visitor can't flood the AI. The page shows these messages as they are (type "visitor_limit").
    const ip = req.headers.get("CF-Connecting-IP") || "anon";
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

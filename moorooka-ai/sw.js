// Moorooka AI service worker: lets the home-screen app open when the phone is offline.
// Online, the page always comes fresh from the network (so a new version shows straight away); a copy is kept for offline.
const CACHE = "moorooka-ai-v2";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k.startsWith("moorooka-ai-") && k !== CACHE) await caches.delete(k);
  await self.clients.claim();
})()));

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  const isPage = req.mode === "navigate";
  const isAsset = /\.(png|jpg|woff2|webmanifest)$/.test(new URL(req.url).pathname);
  if (!isPage && !isAsset) return;
  e.respondWith((async () => {
    try {
      const res = await fetch(req);
      if (res.ok) { const c = await caches.open(CACHE); c.put(isPage ? new URL("./", self.registration.scope).href : req, res.clone()); }
      return res;
    } catch (err) {
      const hit = await caches.match(isPage ? new URL("./", self.registration.scope).href : req);
      if (hit) return hit;
      throw err;
    }
  })());
});

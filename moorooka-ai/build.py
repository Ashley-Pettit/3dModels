"""Builds Moorooka AI (the chat guide to Moorooka) into a folder of the site.

  python3 moorooka-ai/build.py --out _site/moorooka-ai [--endpoint https://worker-url] [--artifact]

Sources, all in this folder: app.html (the page), data.js (community contacts, things to do and a few hand-written
business notes), knowledge.md (what the AI is told), worker.src.js (the Cloudflare Worker that holds the API key).

The Local directory is built fresh each time from what the rest of this repo already knows, so it grows on its own:
  - every business sign in the Moorooka 3D model (the `shops: [...]` lists in ../app.html, each with its address);
  - MOO_FOOD in ../app.html, OpenStreetMap's places to eat and drink within 2 km (tools/food.py refreshes it weekly);
  - the hand-written notes in data.js, which win where a place appears twice.
"""
import argparse, hashlib, json, os, re, shutil, subprocess, unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
REPO_APP = os.path.join(HERE, "..", "app.html")
EXPLORE_3D = "https://ashley-pettit.github.io/3dModels/moorooka/explore/"

# Meet locals: the only suburbs, interests and meeting places a profile may use. One list, shared by the page and the
# Cloudflare Worker, so a profile can never carry a place or an interest somebody typed in themselves. Every meeting
# place is public and already in the app, because the noticeboard never carries contact details: people meet there.
MEET = {
    "suburbs": ["Moorooka", "Salisbury", "Rocklea", "Annerley", "Tarragindi", "Yeronga", "Yeerongpilly",
                "Coopers Plains", "Fairfield", "Nathan", "Tennyson", "Acacia Ridge", "Archerfield", "Holland Park West"],
    "tags": ["Walks", "Coffee", "Eating out", "Cooking", "Parents and bubs", "Gardening", "Dogs", "Running",
             "Cycling", "Board games", "Books", "Music", "Soccer", "Craft", "Volunteering", "Practising English",
             "Fishing", "Over 50s", "New to Moorooka", "Photography"],
    "spots": [
        {"id": "clubhouse", "n": "The Clubhouse", "w": "76 Koala Rd, Moorooka"},
        {"id": "beangreen", "n": "Bean on the Green", "w": "76 Koala Rd, Moorooka"},
        {"id": "moorvale", "n": "The Moorvale shops", "w": "Beaudesert Rd, Moorooka"},
        {"id": "peggs", "n": "Pegg's Park", "w": "Vendale Ave, Moorooka"},
        {"id": "ccentre", "n": "Moorooka Community Centre", "w": "Beaudesert Rd, Moorooka"},
        {"id": "mayfield", "n": "Mayfield Gardens", "w": "311 Tarragindi Rd, Moorooka"},
        {"id": "evans", "n": "Evans Road dog park", "w": "Evans Rd, Salisbury"},
        {"id": "library", "n": "Coopers Plains Library", "w": "107 Orange Grove Rd"},
        {"id": "toohey", "n": "Toohey Forest trails", "w": "Tarragindi / Nathan"},
    ],
}
APP_URL = "https://ashley-pettit.github.io/3dModels/moorooka-ai/"

SUBURBS = ["Moorooka", "Salisbury", "Rocklea", "Annerley", "Tarragindi", "Yeronga", "Yeerongpilly", "Coopers Plains",
           "Nathan", "Tennyson", "Fairfield", "Holland Park West", "Archerfield", "Acacia Ridge"]
CENTRES = {"Moorooka": (-27.5345, 153.0240), "Annerley": (-27.5120, 153.0330), "Tarragindi": (-27.5260, 153.0460),
           "Yeronga": (-27.5160, 153.0160), "Yeerongpilly": (-27.5300, 153.0110), "Rocklea": (-27.5420, 153.0040),
           "Salisbury": (-27.5520, 153.0320), "Coopers Plains": (-27.5650, 153.0400), "Fairfield": (-27.5090, 153.0230)}

# category: (keywords in the description, icon)
CATS = [
    ("Pets", r"\bvet\b|doggy|pet care|pet service|grooming|possum", "paw"),
    ("Kids and learning", r"childcare|kindergarten|early learning|school|tutoring|kids' gym|gymnastics|swim school|swimming lessons|music lessons|training centre|trade training", "book"),
    ("Health", r"doctor|medical|dentist|dental|physio|chiropract|optometr|pharmac|chemist|rehab|massage|biodent|nutrition", "health"),
    ("Hair and beauty", r"barber|hair|salon|nails|beauty|waxing|tanning|tattoo", "scissors"),
    ("Cars and bikes", r"mechanic|tyre|smash|car |cars\b|car$|auto|motor|petrol|servo|suspension|brakes|detailing|window tint|car wash|strut|4wd|truck|vehicle|honda", "car"),
    ("Fitness and activities", r"\bgym\b|fitness|karate|aikido|muay thai|dance|yoga|water ski|wakeboard", "dumbbell"),
    ("Community", r"church|mosque|community|showground|venue|bowls club|clubhouse", "people"),
    ("Food and drink", r"cafe|café|coffee|espresso|restaurant|takeaway|pizza|burger|kebab|sushi|thai|bakery|cakes|pub\b|bar\b|brewery|taproom|chicken|fish and chips|sandwich|acai|injera|grill|bbq|barbecue|dim sim|banh mi|noodle|vietnamese|chinese|indian|ethiopian|eritrean|afghan rest|persian|kitchen|ice cream|snack|biltong|food court|bubble tea|seafood|dumpling", "bowl"),
    ("Shopping", r"supermarket|grocer|op shop|bottle shop|gift|florist|flower|furniture|clothes|hardware|book|store|arcade|butcher|vintage|homewares|sofas|lounges|appliance|blinds|carpet|tiles|sewing|office supplies|corner store|newsagent|hampers|chocolate|halal", "bag"),
    ("Services", r"accountant|tax|lawyer|real estate|bank|post|migration|print|label|storage|laundromat|funeral|removal|hire|data recovery|motel|parcel|labour", "briefcase"),
    ("Trades and industrial", r"electric|plumb|builder|paint|timber|glass|steel|wholesal|fabrication|engineering|refrigeration|solar|kitchen renovation|fittings|bolts|fasteners|supplier|woodwork", "wrench"),
]
FOOD_ART = [(r"pizza|woodfire", "pizza"), (r"\bpub\b|brewery|taproom|tavern|^bar\b", "beer"),
            (r"cafe|café|coffee|espresso|bakery|cakes|acai|bakehouse|ice cream|bubble tea", "coffee")]
SHOP_ART = [(r"supermarket|grocer|foodstore|corner store", "cart")]
KEEP_SHORT = {"BP", "BWS", "RE/MAX", "C&K", "POST"}


def norm(s):
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]", "", s.lower().replace("&", "and"))


ACRONYMS = {"BP", "BWS", "AMW", "BCM", "RJ", "MCA", "FF", "GJ", "AFG", "SJK", "HRG", "JAX", "JB", "KD", "JSK", "H&R", "C&K",
            "RE/MAX", "4WD", "BBQ", "YG", "RSPCA", "KTM", "B", "C", "M", "N"}
SMALL = {"OF", "AND", "THE", "A"}


def tidy_name(n, sub):
    n = n.encode().decode("unicode_escape") if "\\u" in n else n
    sub = (sub.encode().decode("unicode_escape") if sub and "\\u" in sub else sub) or ""
    if n == "POST" and sub:
        return f"{sub.title()} Post Office"
    one_word_caps = n.isupper() and len(n.split()) == 1 and n not in {"BP", "BWS"}
    if (one_word_caps or n in {"Moorooka", "Salina", "Reload", "snap", "Ariana", "Dom's", "AMehdi"}) and sub and "·" not in sub and "\u00b7" not in sub:
        n = f"{n} {sub}"
    def word(w, first):
        if w.upper() == "CO.": return "Co."
        if w.upper() in ACRONYMS or "/" in w: return w.upper() if w.upper() in ACRONYMS else w
        if w.upper() in SMALL and not first: return w.lower()
        return w.capitalize() if (w.isupper() and len(w) > 1) or w.islower() else w
    n = " ".join(word(w, i == 0) for i, w in enumerate(n.split())).rstrip(".")
    return n[:1].upper() + n[1:]


def tidy_what(w):
    w = w.encode().decode("unicode_escape") if "\\u" in w else w
    w = w.split(":")[0]                                    # "Mechanic: one upgrade for your car" (game notes) -> "Mechanic"
    w = re.sub(r"\s*\((?:[^)]*\d[^)]*|Google[^)]*)\)", "", w).strip()
    return w[:1].upper() + w[1:]


def suburb_of(addr, la=None, lo=None):
    a = addr or ""
    tail = a.rsplit(",", 1)[1] if "," in a else ""
    for s in sorted(SUBURBS, key=len, reverse=True):
        if re.search(rf"\b{s}\b", tail):
            return s
    m = re.search(r"(\d+)[A-Za-z]?\s+Ipswich Road", a)
    if m:
        k = int(m.group(1)); return "Annerley" if k < 1000 else "Rocklea" if k >= 1300 else "Moorooka"
    if "Sherwood Road" in a or "Brooke Street" in a:
        return "Rocklea"
    if la is not None and not a:
        return min(CENTRES, key=lambda c: (CENTRES[c][0] - la) ** 2 + ((CENTRES[c][1] - lo) * 0.89) ** 2)
    return "Moorooka"


def categorise(what, name=""):
    w = what.lower()
    if re.search(r"supermarket|grocer|corner store|butcher|foodstore", w): return "Shopping", "cart"
    if re.search(r"\barcade\b|precinct|main street", w): return "Shopping", "bag"
    t = f"{w} {name.lower()}"
    if re.search(r"ward office|councillor", t): return "Community", "civic"
    for cat, rx, art in CATS:
        if re.search(rx, t):
            if cat == "Food and drink":
                art = next((a for r, a in FOOD_ART if re.search(r, w)), None) or next((a for r, a in FOOD_ART if re.search(r, t)), art)
            if cat == "Shopping":
                art = next((a for r, a in SHOP_ART if re.search(r, t)), art)
            return cat, art
    return "Services", "briefcase"


def from_3d(app):
    out = []
    for m in re.finditer(r"shops:\s*\[", app):
        seg = app[max(0, m.start() - 2500):m.start()]
        ai = seg.rfind("addr:")
        addr = None
        if ai >= 0 and "shops:" not in seg[ai:]:
            addr = re.match(r'addr:\s*"([^"]+)"', seg[ai:]).group(1)
        depth, j = 0, m.end() - 1
        while True:
            ch = app[j]
            if ch == "[": depth += 1
            elif ch == "]":
                depth -= 1
                if depth == 0: break
            j += 1
        for n, rest in re.findall(r'\{\s*n:\s*"([^"]+)"([^{}]*?)\}', app[m.end() - 1:j + 1]):
            w = re.search(r'what:\s*"([^"]+)"', rest)
            if not w or not addr: continue
            sub = re.search(r'sub:\s*"([^"]+)"', rest)
            what = tidy_what(w.group(1))
            clean = re.sub(r"\s*\([^)]*\)", "", addr).strip()
            name = tidy_name(n, sub.group(1) if sub else "")
            if norm(name) == norm(what):           # a sign that just says "BARBER": name it by its street
                street = re.sub(r"^[^,]*?\d[\w/-]*\s+", "", clean.split(",")[0]).strip()
                name = f"{name} on {street}" if street else name
            out.append({"n": name, "what": what, "a": clean, "s": suburb_of(clean)})
    return out


def from_osm(app):
    i = app.find("const MOO_FOOD = ")
    if i < 0: return []
    d, _ = json.JSONDecoder().raw_decode(app[i + len("const MOO_FOOD = "):])
    kinds = {"cafe": "Cafe", "takeaway": "Takeaway", "restaurant": "Restaurant", "pub": "Pub", "bakery": "Bakery",
             "ice cream": "Ice cream", "bar": "Bar", "food court": "Food court", "bubble tea": "Bubble tea"}
    out = []
    for p in d.get("p", []):
        what = kinds.get(p.get("k"), "Food") + (f", {p['c']}" if p.get("c") else "")
        a = (p.get("a") or "").replace(" QLD 4105", "").replace(" QLD 4106", "").replace(" QLD 4107", "").replace(" QLD 4104", "").replace(" QLD 4103", "")
        a = re.sub(r",?\s*(Moorooka|Rocklea|Salisbury|Yeronga|Yeerongpilly|Annerley|Fairfield|Tarragindi)$", r", \1", a)
        e = {"n": p["n"].rstrip(". "), "what": what, "a": a, "s": suburb_of(a, p.get("la"), p.get("lo")), "osm": 1}
        if p.get("p"): e["p"] = p["p"]
        if p.get("w") or p.get("ol"): e["w"] = p.get("w") or p.get("ol")
        if p.get("h"): e["h"] = p["h"]
        out.append(e)
    return out


def from_curated(data_js):
    # data.js is JavaScript; pull out the businesses list with a small regex reader
    out = []
    for blk in re.findall(r"\{ id:\"[^\"]+\".*?\},?\n", data_js.split("community:")[0], re.S):
        g = lambda k: (re.search(rf'{k}:"((?:[^"\\]|\\.)*)"', blk) or [None, None])[1]
        e = {"cid": g("id"), "n": g("name"), "what": g("tag"), "a": g("address"), "blurb": g("blurb"), "cat0": g("cat"), "art0": g("art")}
        if g("phone"): e["p"] = g("phone")
        if g("web"): e["w"] = g("web")
        out.append(e)
    return out


ALIAS = {"rannchhodarcade": "ranchhodarcade", "salinarestaurant": "salinaeritreancafe", "theclubhousemoorooka": "theclubhousemoorooka",
         "arhibu": "arhibuethiopianrestaurant", "zeitoonrestaurant": "zeitoon", "sheeshmahalindianrestaurant": "sheeshmahal",
         "jaojormthairestaurant": "jaojormthai", "dominospizzamoorooka": "dominos", "brumbysbakeries": "brumbysbakeries",
         "billykartkitchen": "billykartkitchen", "reloadcafe": "reloadespressobar", "salisburyhotelmotel": "salisburyhotel"}


def build_biz(app, data_js):
    merged, order = {}, []
    def key(n):
        k = norm(n); return ALIAS.get(k, k)
    def add(e, prefer=False):
        k = key(e["n"])
        hit = next((x for x in order if x == k or (len(k) >= 6 and len(x) >= 6 and (x.startswith(k) or k.startswith(x)))), None)
        if hit and not (e.get("a") and merged[hit].get("a") and suburb_of(e["a"]) != merged[hit]["s"] and "osm" not in e):
            cur = merged[hit]
            for f, v in e.items():
                if v and (prefer or not cur.get(f)): cur[f] = v
            return
        if hit:  # same name, different suburb (chains): keep both
            k = k + norm(e.get("a") or "")[:12]
        merged[k] = dict(e); order.append(k)
    for e in from_3d(app): add(e)
    for e in from_osm(app): add(e)
    for e in from_curated(data_js): add(e, prefer=True)
    out, seen = [], set()
    for k in order:
        e = merged[k]
        sig = (norm(e["n"]), norm(e.get("a") or ""))
        if sig in seen: continue
        seen.add(sig)
        e["s"] = suburb_of(e.get("a") or "") if e.get("a") else e.get("s", "Moorooka")
        cat, art = categorise(e.get("what") or "", e["n"])
        cat = {"Hair & beauty": "Hair and beauty", "Eat & drink": "Food and drink", "Shopping": "Shopping", "Venues": "Community"}.get(e.get("cat0"), cat)
        art = e.get("art0") if e.get("art0") in ("scissors", "comb", "coffee", "bowl", "pizza", "bag", "bowls") else art
        if e.get("cid") == "clubhouse": cat = "Community"
        item = {"id": e.get("cid") or "b" + hashlib.sha1(k.encode()).hexdigest()[:6], "n": e["n"], "c": cat, "i": art,
                "d": e.get("what") or "", "a": e.get("a") or "", "s": e["s"]}
        for f in ("p", "w", "h", "blurb", "osm"):
            if e.get(f): item[f] = e[f]
        out.append(item)
    out.sort(key=lambda x: (x["n"].lower()))
    return out


def png_icons(out):
    """Home-screen icons, drawn from the same leaf mark the app shows (rendered once with Playwright if it's there)."""
    src = os.path.join(HERE, "icons")
    if os.path.isdir(src):
        for f in os.listdir(src): shutil.copy(os.path.join(src, f), out)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default=os.path.join(HERE, "dist"))
    ap.add_argument("--endpoint", default=os.environ.get("MOOROOKA_AI_ENDPOINT", ""))
    ap.add_argument("--app", default=REPO_APP, help="the repo's app.html, for the 3D model's businesses and MOO_FOOD")
    ap.add_argument("--artifact", action="store_true", help="single page for a Claude artifact (no service worker)")
    a = ap.parse_args()
    read = lambda n: open(os.path.join(HERE, n), encoding="utf-8").read()
    knowledge, data, html, worker = read("knowledge.md"), read("data.js"), read("app.html"), read("worker.src.js")
    repo_app = open(a.app, encoding="utf-8").read() if os.path.exists(a.app) else ""
    biz = build_biz(repo_app, data) if repo_app else []
    sha = os.environ.get("GITHUB_SHA", "")[:7]
    if not sha:
        try: sha = subprocess.check_output(["git", "-C", HERE, "rev-parse", "--short=7", "HEAD"], text=True, stderr=subprocess.DEVNULL).strip()
        except Exception: sha = ""
    build = sha or hashlib.sha1((knowledge + data + html).encode()).hexdigest()[:7]
    def line(b):
        t = f"- {b['n']}: {b['d']}" if b["d"] else f"- {b['n']}"
        if b["a"]: t += f", {b['a']}"
        if b["s"] not in (b["a"] or ""): t += f" ({b['s']})"
        return t
    directory = "\n".join(line(b) for b in sorted(biz, key=lambda x: (x["c"], x["n"].lower())))
    knowledge = knowledge.replace("EXPLORE_3D_URL", EXPLORE_3D).replace("{{DIRECTORY}}", directory or "(not available)")
    kjson = json.dumps(knowledge)
    mjson = json.dumps(MEET, ensure_ascii=False, separators=(",", ":"))
    html = (html.replace("/*DATA*/", data).replace("/*BIZ*/", "const BIZ = " + json.dumps(biz, ensure_ascii=False, separators=(",", ":")) + ";")
                .replace("/*KNOWLEDGE*/", kjson).replace("/*MEET*/", mjson).replace("/*ENDPOINT*/", a.endpoint).replace("BUILD_ID", build)
                .replace("EXPLORE_3D_URL", EXPLORE_3D).replace("APP_URL", APP_URL))
    import base64
    uri = lambda p, mime: f"data:{mime};base64," + base64.b64encode(open(os.path.join(HERE, p), "rb").read()).decode()
    if a.artifact:   # one self-contained page: fonts and pictures inline
        html = re.sub(r"<!--PWA-->.*?<!--/PWA-->", "", html, flags=re.S)
        html = (html.replace("FONT_GEIST", uri("assets/geist.woff2", "font/woff2")).replace("FONT_DISPLAY", uri("assets/bricolage.woff2", "font/woff2")).replace("IMG_3D", uri("assets/moorooka-3d.jpg", "image/jpeg")).replace("IMG_HERO", uri("assets/moorooka-hero.jpg", "image/jpeg"))
                    .replace("IMG_ICON", uri("icons/icon-180.png", "image/png")))
    else:            # the site: separate files the browser can cache
        html = html.replace("FONT_GEIST", "geist.woff2").replace("FONT_DISPLAY", "bricolage.woff2").replace("IMG_3D", "moorooka-3d.jpg").replace("IMG_HERO", "moorooka-hero.jpg").replace("IMG_ICON", "icon-180.png")
    worker = worker.replace("/*KNOWLEDGE*/", kjson).replace("/*MEET*/", mjson).replace("BUILD_ID", build)
    os.makedirs(a.out, exist_ok=True)
    open(os.path.join(a.out, "index.html"), "w", encoding="utf-8").write(html)
    open(os.path.join(a.out, "worker.js"), "w", encoding="utf-8").write(worker)
    if not a.artifact:
        shutil.copy(os.path.join(HERE, "sw.js"), a.out)
        for f in ("geist.woff2", "bricolage.woff2", "moorooka-3d.jpg"): shutil.copy(os.path.join(HERE, "assets", f), a.out)
        png_icons(a.out)
        json.dump({"id": "./", "name": "Moorooka AI", "short_name": "Moorooka AI",
                   "description": "Ask anything about Moorooka: events, local businesses, your councillor and things to do.",
                   "start_url": "./", "scope": "./", "display": "standalone", "orientation": "portrait",
                   "background_color": "#FFFFFF", "theme_color": "#FFFFFF", "categories": ["lifestyle", "travel"],
                   "icons": [{"src": "icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any"},
                             {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any"},
                             {"src": "maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}]},
                  open(os.path.join(a.out, "manifest.webmanifest"), "w"), indent=1)
    print(f"Moorooka AI {build}: {len(biz)} businesses -> {a.out}")


if __name__ == "__main__":
    main()

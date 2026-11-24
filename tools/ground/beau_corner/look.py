"""Pictures of the Moorooka model from set views, from a local build, and the kerb points it draws (KERBS.json for corner.py and check.py).
Opens SITE_DIR/moorooka in Chrome with the software renderer, goes to Free view, puts the view where asked, waits for the sharper ground
and saves OUT_PREFIX + name + .png. The built page is changed to hand its state to the test (window.__BS): use a build made for testing.
  python3 build.py /tmp/site
  python3 tools/ground/beau_corner/look.py /tmp/site /tmp/out_ [--phone] [--kerbs KERBS.json] name:x,y,z,yaw,pitch ...
A view is model metres and degrees: yaw 0 looks north (-z), 90 west, 180 south; pitch -90 is straight down (the app stops at about -83).
LIGHT=1 keeps the light setting (no kerbs or fences, as on a phone that stays on it); SUB=beta/ looks at the beta page; SETTLE and WAIT
are the seconds to wait after loading and at each view."""
import sys, json, math, time, re, os, threading, http.server, socketserver, functools
from playwright.sync_api import sync_playwright
site = sys.argv[1]; out = sys.argv[2]; args = sys.argv[3:]
phone = '--phone' in args; kerbs = None
if '--kerbs' in args: kerbs = args[args.index('--kerbs') + 1]; args.remove('--kerbs'); args.remove(kerbs)
views = [a for a in args if ':' in a]
SUB = os.environ.get('SUB', ''); p = os.path.join(site, SUB, 'moorooka', 'index.html'); s = open(p, encoding='utf-8').read()
if 'window.__BS' not in s:
    s = s.replace('const BS = { B: null', 'const BS = window.__BS = { B: null', 1); open(p, 'w', encoding='utf-8').write(s)
class Q(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k): super().__init__(*a, directory=site, **k)
    def log_message(self, *a): pass
socketserver.TCPServer.allow_reuse_address = True
srv = socketserver.ThreadingTCPServer(('127.0.0.1', 0), Q); port = srv.server_address[1]; threading.Thread(target=srv.serve_forever, daemon=True).start()
with sync_playwright() as pw:
    b = pw.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox'])
    ctx = b.new_context(viewport={'width': 430, 'height': 860} if phone else {'width': 1280, 'height': 900}, device_scale_factor=2 if phone else 1, has_touch=phone, is_mobile=phone)
    pg = ctx.new_page(); logs = []
    pg.on('console', lambda m: logs.append(m.text)); pg.on('pageerror', lambda e: logs.append('ERR ' + str(e)))
    pg.add_init_script(('window.__anForceUp = %s;' % ('false' if os.environ.get('LIGHT') else 'true')) + ' window.anKerbDump = []; try { localStorage.setItem("an-tut","1"); localStorage.setItem("an-player-asked","1"); localStorage.setItem("an-player","Tester"); Object.defineProperty(Document.prototype, "fullscreenEnabled", { get: () => false }); } catch(e) {}')
    pg.goto(f'http://127.0.0.1:{port}/{SUB}moorooka/#explore', wait_until='load')
    t0 = time.time()
    while time.time() - t0 < 240:
        ok = pg.evaluate('!!(window.__BS && window.__BS.town && window.__BS.town.model && window.__BS.fly)')
        if ok: break
        time.sleep(1)
    print('model', ok, round(time.time() - t0), 's')
    time.sleep(3)
    try:
        pg.wait_for_selector('.bs-askwrap', timeout=20000)
        pg.evaluate("document.querySelectorAll('.bs-askwrap input[type=checkbox]').forEach(c => c.checked = false); document.querySelector('.bs-wel-go').click()")
    except Exception as e: print('no welcome', str(e)[:80])
    time.sleep(1.5)
    if pg.evaluate('!!window.__BS.town.walk'): pg.keyboard.press('f'); time.sleep(1.5)
    print('walk', pg.evaluate('!!window.__BS.town.walk'), 'dialog', pg.evaluate("!!document.querySelector('.bs-askwrap')"))
    pg.add_style_tag(content='.bs-keys, .bs-tut { display: none !important; }')
    time.sleep(float(os.environ.get('SETTLE', '25')))
    for v in views:
        name, c = v.split(':'); x, y, z, yaw, pit = map(float, c.split(','))
        pg.evaluate('''([x,y,z,yaw,pit]) => { const B = window.__BS, F = B.fly, T = B.town; T.tween = null; if (y < 0) y = T.model.groundAt(x, z) - y; F.pos.set(x, y, z); F.yaw = yaw; F.pitch = pit; }''', [x, y, z, math.radians(yaw), math.radians(pit)])
        time.sleep(float(os.environ.get('WAIT', '14')))
        pg.evaluate('''([x,y,z,yaw,pit]) => { const B = window.__BS, F = B.fly; if (y < 0) y = B.town.model.groundAt(x, z) - y; F.pos.set(x, y, z); F.yaw = yaw; F.pitch = pit; }''', [x, y, z, math.radians(yaw), math.radians(pit)])
        time.sleep(1.5); print(pg.evaluate('(() => { const F = window.__BS.fly; return [F.pos.x, F.pos.y, F.pos.z, F.yaw, F.pitch, !!window.__BS.town.walk, JSON.stringify(F.lim || null)] })()'))
        pg.screenshot(path=f'{out}{name}.png'); print('shot', name)
    if kerbs: json.dump(pg.evaluate('window.anKerbDump'), open(kerbs, 'w')); print('kerbs saved')
    for l in logs[-8:]: print('  log:', l[:200])
    b.close()

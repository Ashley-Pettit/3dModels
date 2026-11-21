// Lists the touch and pointer listeners under the sticks on a phone, and whether each is passive (a listener that is not makes an
// iPhone wait for the page before it moves the finger)
// Usage: python3 build.py /tmp/site/3dModels, then expose BS for the test:
//   sed -i 's/  const BS = { B: null/  const BS = window.BS = { B: null/' /tmp/site/3dModels/*/explore/index.html
//   (cd /tmp/site && python3 -m http.server 8765 --bind 127.0.0.1) and node tools/sticks/listeners.js <moorooka|logan|inverloch> http://localhost:8765/3dModels
const { chromium, devices } = require('playwright'); const town = process.argv[2] || 'moorooka', base = process.argv[3] || 'http://localhost:8765/3dModels';
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
  const c = await b.newContext({ ...devices['iPhone 13'] });
  await c.route(/shiftr|emqx|ntfy|trystero/, r => r.abort());
  await c.addInitScript(() => { window.WebSocket = class { constructor() { throw new Error('no sockets'); } }; try { localStorage.setItem('an-player', 'Mate'); localStorage.setItem('an-player-asked', '1'); localStorage.setItem('an-tut', 'offered'); } catch {} });
  const p = await c.newPage(); p.setDefaultTimeout(120000);
  await p.goto(`${base}/${town}/explore/`, { waitUntil: 'domcontentloaded' });
  for (let i = 0, ok = 0; i < 400 && ok < 4; i++) { await p.waitForTimeout(500); ok = (!(await p.locator('.ex-load').count()) && await p.evaluate(() => !!(window.BS && BS.town?.model))) ? ok + 1 : 0; }
  for (let i = 0; i < 6; i++) { await p.evaluate(() => document.querySelector('.bs-askwrap .skip')?.click()); await p.waitForTimeout(300); }
  await p.evaluate(() => { if (!BS.town.walk) BS.fly.hot?.f?.(); }); await p.waitForTimeout(2000);
  const cdp = await c.newCDPSession(p); let bad = 0;
  for (const [name, expr] of [['document', 'document'], ['window', 'window'], ['view #bsGl', '#bsGl'], ['map #bsTown', '#bsTown'], ['move stick', '.bs-joy[data-joy="move"]'], ['look stick', '.bs-joy[data-joy="look"]'], ['#bsFly', '#bsFly'], ['body', 'body']]) {
    const { result } = await cdp.send('Runtime.evaluate', { expression: /^(document|window)$/.test(expr) ? expr : `document.querySelector('${expr}')` });
    if (!result.objectId) { console.log(name, 'missing'); continue; }
    const { listeners } = await cdp.send('DOMDebugger.getEventListeners', { objectId: result.objectId });
    const L = listeners.filter(l => /^(touch|pointer)/.test(l.type)).map(l => `${l.type}${l.useCapture ? '(cap)' : ''}:${l.passive ? 'passive' : 'BLOCKING'}`);
    bad += L.filter(s => /BLOCKING/.test(s)).length; console.log(name.padEnd(12), L.join(' ') || '(none)');
  }
  console.log(town, bad ? `${bad} listeners can cancel` : 'all passive');
  await b.close();
})();

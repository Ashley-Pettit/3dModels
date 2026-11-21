// The two-finger test (CLAUDE.md "Explore's touch sticks"): a finger held on the move stick; a second finger down, moved and
// lifted on the view and then on the look stick; the move stick must hold throughout. Optionally after a long run (argv[4] minutes).
// Usage: python3 build.py /tmp/site/3dModels, then expose BS for the test:
//   sed -i 's/  const BS = { B: null/  const BS = window.BS = { B: null/' /tmp/site/3dModels/*/explore/index.html
//   (cd /tmp/site && python3 -m http.server 8765 --bind 127.0.0.1) and node tools/sticks/two-finger.js <moorooka|logan|inverloch> http://localhost:8765/3dModels [minutes to run first]
const { chromium, devices } = require('playwright'); const town = process.argv[2] || 'moorooka', base = process.argv[3] || 'http://localhost:8765/3dModels', mins = +(process.argv[4] || 0);
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
  const c = await b.newContext({ ...devices['iPhone 13'] });
  await c.route(/shiftr|emqx|ntfy|trystero/, r => r.abort());
  await c.addInitScript(() => { window.WebSocket = class { constructor() { throw new Error('no sockets'); } }; try { localStorage.setItem('an-player', 'Mate'); localStorage.setItem('an-player-asked', '1'); localStorage.setItem('an-tut', 'offered'); } catch {} });
  const p = await c.newPage(); p.setDefaultTimeout(120000); const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto(`${base}/${town}/explore/`, { waitUntil: 'domcontentloaded' });
  for (let i = 0, ok = 0; i < 400 && ok < 4; i++) { await p.waitForTimeout(500); ok = (!(await p.locator('.ex-load').count()) && await p.evaluate(() => !!(window.BS && BS.town?.model))) ? ok + 1 : 0; }
  for (let i = 0; i < 6; i++) { await p.evaluate(() => document.querySelector('.bs-askwrap .skip')?.click()); await p.waitForTimeout(300); }
  await p.evaluate(() => { if (!BS.town.walk) BS.fly.hot?.f?.(); }); await p.waitForTimeout(3000);
  if (mins) { console.log(town, 'running for', mins, 'min'); const t0 = Date.now(); while (Date.now() - t0 < mins * 60000) { await p.waitForTimeout(30000); } }
  const box = sel => p.evaluate(sel => { const e = document.querySelector(sel); if (!e) return null; const r = e.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2, getComputedStyle(e).display]; }, sel);
  const mv = await box('.bs-joy[data-joy="move"]'), lk = await box('.bs-joy[data-joy="look"]'), vw = await p.evaluate(() => [innerWidth * 0.7, innerHeight * 0.35]);
  const cdp = await c.newCDPSession(p);
  const send = (type, pts) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: pts });
  const stick = () => p.evaluate(() => [+BS.fly.stick.x.toFixed(2), +BS.fly.stick.y.toFixed(2)]);
  const A = (x, y) => ({ x, y, id: 1 }), B2 = (x, y) => ({ x, y, id: 2 });
  const log = [], held = s => s[1] > 0.3;
  await send('touchStart', [A(mv[0], mv[1])]); await send('touchMove', [A(mv[0], mv[1] - 50)]); await p.waitForTimeout(700); log.push(['held', await stick()]);
  // second finger on the view
  await send('touchMove', [A(mv[0], mv[1] - 50), B2(vw[0], vw[1])]); await p.waitForTimeout(400); log.push(['view down', await stick()]);
  for (let k = 1; k <= 4; k++) { await send('touchMove', [A(mv[0], mv[1] - 50), B2(vw[0] - k * 20, vw[1] + k * 6)]); await p.waitForTimeout(250); }
  log.push(['view moved', await stick()]);
  await send('touchMove', [A(mv[0], mv[1] - 50)]); await p.waitForTimeout(500); log.push(['view up', await stick()]);
  // a second finger on the view's left half
  const vl = await p.evaluate(() => [innerWidth * 0.3, innerHeight * 0.3]);
  await send('touchMove', [A(mv[0], mv[1] - 50), B2(vl[0], vl[1])]); await p.waitForTimeout(400); log.push(['left view down', await stick()]);
  for (let k = 1; k <= 4; k++) { await send('touchMove', [A(mv[0], mv[1] - 50), B2(vl[0] + k * 15, vl[1] + k * 8)]); await p.waitForTimeout(250); }
  log.push(['left view moved', await stick()]); await send('touchMove', [A(mv[0], mv[1] - 50)]); await p.waitForTimeout(500); log.push(['left view up', await stick()]);
  // second finger on the look stick
  if (lk && lk[2] !== 'none') { await send('touchMove', [A(mv[0], mv[1] - 50), B2(lk[0], lk[1])]); await p.waitForTimeout(400); log.push(['look down', await stick()]);
    for (let k = 1; k <= 4; k++) { await send('touchMove', [A(mv[0], mv[1] - 50), B2(lk[0] + k * 10, lk[1] - k * 5)]); await p.waitForTimeout(250); }
    log.push(['look moved', await stick()]); await send('touchMove', [A(mv[0], mv[1] - 50)]); await p.waitForTimeout(500); log.push(['look up', await stick()]); }
  // both fingers landing at once
  await send('touchEnd', []); await p.waitForTimeout(500);
  await send('touchStart', [A(mv[0], mv[1]), B2(vw[0], vw[1])]); await send('touchMove', [A(mv[0], mv[1] - 50), B2(vw[0] - 20, vw[1])]); await p.waitForTimeout(600); log.push(['together', await stick()]);
  await send('touchEnd', []); await p.waitForTimeout(600); log.push(['all up', await stick()]);
  const ok = log.filter(([k]) => k !== 'all up').every(([, s]) => held(s)) && Math.abs(log[log.length - 1][1][1]) < 0.05;
  console.log(town, ok ? 'PASS' : 'FAIL', JSON.stringify(log), errs.length ? 'errors: ' + errs.slice(0, 3).join(' | ') : 'no page errors', 'look stick', lk && lk[2]);
  await b.close();
})();

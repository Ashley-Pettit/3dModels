"""Ground-floor windows above the ground on sloping blocks (Ash, 22 November 2026: "With the houses that are sunk into the ground.
Rather than raising them up as this caused issues; put their windows a bit higher so not in the dirt").

A building's floor is the ground at its middle (kept between its lowest and highest corner), so on a slope its uphill walls stand in
the ground and the ground-floor windows (sill 0.9 m above the floor) can be half buried. Now each ground-floor window looks at the
ground just outside its wall (0.5 m out, at its middle and 0.8 m either side): where that is less than 0.35 m below the sill, the
window goes up to 0.35 m above the ground, its height trimmed to stay under the eaves, and a window with less than half a metre
left is not drawn (the house's random numbers are still drawn for it, so no other building changes). Everything else stays.
  python3 windows_above_ground.py <moorooka-model.js>
"""
import sys
fn = sys.argv[1]; s = open(fn).read()
old = ('const Yt=Math.floor(ct/W);for(let bt=0;bt<z;bt++){const ut=F+bt*3+.9;if(ut+1.3>S-.2)break;for(let vt=0;vt<Yt;vt++){const wt=(vt+.5)/Yt*ct;'
       'if(V===FE&&bt===0&&vt===(Yt>>1))continue;a===H_&&i.quad(wt-.92,ut-.12,Yr*.5,wt+.92,ut-.12,Yr*.5,wt+.92,ut+1.42,Yr*.5,wt-.92,ut+1.42,Yr*.5,iu);'
       'a===H_&&!anNH&&i.quad(wt+1.02,ut+1.62,0,wt-1.02,ut+1.62,0,wt-1.02,ut+1.36,.5,wt+1.02,ut+1.36,.5,C);'
       'i.quad(wt-.8,ut,Yr,wt+.8,ut,Yr,wt+.8,ut+1.3,Yr,wt-.8,ut+1.3,Yr,B_,l()<.45?1:0)}}')
new = ('const Yt=Math.floor(ct/W),anGx=Pt>0?H:ht,anGz=Pt>0?X:Y,anG=q=>t.yAt(anGx+q*Math.cos(dt)+.5*Math.sin(dt),anGz-q*Math.sin(dt)+.5*Math.cos(dt))-g;'
       'for(let bt=0;bt<z;bt++){const ut=F+bt*3+.9;if(ut+1.3>S-.2)break;for(let vt=0;vt<Yt;vt++){const wt=(vt+.5)/Yt*ct;'
       'if(V===FE&&bt===0&&vt===(Yt>>1))continue;let wu=ut,wh=1.3;if(bt===0){const gy=Math.max(anG(wt-.8),anG(wt),anG(wt+.8));if(gy>wu-.35){wu=gy+.35,wh=Math.min(1.3,S-.45-wu);if(wh<.5){l();continue}}}'
       'a===H_&&i.quad(wt-.92,wu-.12,Yr*.5,wt+.92,wu-.12,Yr*.5,wt+.92,wu+wh+.12,Yr*.5,wt-.92,wu+wh+.12,Yr*.5,iu);'
       'a===H_&&!anNH&&i.quad(wt+1.02,wu+wh+.32,0,wt-1.02,wu+wh+.32,0,wt-1.02,wu+wh+.06,.5,wt+1.02,wu+wh+.06,.5,C);'
       'i.quad(wt-.8,wu,Yr,wt+.8,wu,Yr,wt+.8,wu+wh,Yr,wt-.8,wu+wh,Yr,B_,l()<.45?1:0)}}')
assert s.count(old) == 1, s.count(old)
s = s.replace(old, new); open(fn, 'w').write(s); print('ok')

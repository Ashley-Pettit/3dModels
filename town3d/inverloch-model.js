var InverlochModel=function(gn){"use strict";var Qv=Object.defineProperty;var jv=(gn,Hn,si)=>Hn in gn?Qv(gn,Hn,{enumerable:!0,configurable:!0,writable:!0,value:si}):gn[Hn]=si;var Z=(gn,Hn,si)=>jv(gn,typeof Hn!="symbol"?Hn+"":Hn,si);const Hn='.inv-label{position:absolute;left:0;top:0;pointer-events:auto;font:600 12px/1 Space Grotesk,system-ui,sans-serif;padding:6px 10px;border-radius:999px;background:#0c1c24e6;color:#fff;border:1px solid rgba(255,255,255,.2);white-space:nowrap;cursor:pointer;will-change:transform}.inv-label:after{content:"";position:absolute;left:50%;bottom:-8px;width:1px;height:8px;background:#ffffffbf}.inv-label:hover{background:#0b7d9c}.inv-label--nature{background:#183826eb}.inv-label--nature:hover{background:#2c7a4b}.inv-label--water{background:none;border-color:transparent;color:#f1fbff;font-style:italic;font-weight:500;font-size:13px;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,35,60,.95),0 0 8px rgba(0,35,60,.7)}.inv-label--water:after{display:none}.inv-label--water:hover{background:#0c1c2499}.inv-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.inv-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}';/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const si="187",Vn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zu=0,Ol=1,Ku=2,vs=1,$u=2,Ms=3,ai=0,$e=1,Re=2,Oi=0,Ss=1,va=2,zl=3,Bl=4,Ju=5,zi=100,Qu=101,ju=102,td=103,ed=104,nd=200,id=201,sd=202,rd=203,Gl=204,kl=205,ad=206,od=207,ld=208,cd=209,hd=210,ud=211,dd=212,fd=213,pd=214,Ma=0,Sa=1,ya=2,ys=3,ba=4,Ea=5,wa=6,Ta=7,ir=0,md=1,gd=2,Wn=0,Hl=1,Vl=2,Wl=3,Xl=4,Yl=5,ql=6,Aa=7,Zl=300,Bi=301,bs=302,Ra=303,Ca=304,Es=1e3,Ln=1001,Pa=1002,Ce=1003,xd=1004,sr=1005,Xe=1006,La=1007,xn=1008,sn=1009,Kl=1010,$l=1011,ws=1012,Da=1013,Dn=1014,_n=1015,vn=1016,Ia=1017,Na=1018,Gi=1020,Jl=35902,Ql=35899,jl=1021,tc=1022,In=1023,oi=1026,li=1027,rr=1028,Ua=1029,ci=1030,Fa=1031,Oa=1033,ar=33776,or=33777,lr=33778,cr=33779,za=35840,Ba=35841,Ga=35842,ka=35843,Ha=36196,Va=37492,Wa=37496,Xa=37488,Ya=37489,hr=37490,qa=37491,Za=37808,Ka=37809,$a=37810,Ja=37811,Qa=37812,ja=37813,to=37814,eo=37815,no=37816,io=37817,so=37818,ro=37819,ao=37820,oo=37821,lo=36492,co=36494,ho=36495,uo=36283,fo=36284,ur=36285,po=36286,_d=3200,ki=0,vd=1,hi="",Pe="srgb",dr="srgb-linear",fr="linear",le="srgb",mo=7680,Md=519,Sd=512,yd=513,bd=514,ec=515,Ed=516,wd=517,nc=518,ic=519,Td=35044,Ts=35048,sc="300 es",Mn=2e3,As=2001;function Ad(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rd(){const i=Rs("canvas");return i.style.display="block",i}const rc={};function ac(...i){const t="THREE."+i.shift();console.log(t,...i)}function oc(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=oc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function se(...i){i=oc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function pr(...i){const t=i.join(" ");t in rc||(rc[t]=!0,zt(...i))}function Cd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Pd={[Ma]:Ma,[ya]:wa,[ba]:ba,[ys]:Ea,[Sa]:Sa,[wa]:ya,[Ta]:Ta,[Ea]:ys};class ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lc=1234567;const Cs=Math.PI/180,Ps=180/Math.PI;function Hi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Xt(i,t,e){return Math.max(t,Math.min(e,i))}function go(i,t){return(i%t+t)%t}function Ld(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Dd(i,t,e){return i!==t?(e-i)/(t-i):0}function Ls(i,t,e){return(1-e)*i+e*t}function Id(i,t,e,n){return Ls(i,t,1-Math.exp(-e*n))}function Nd(i,t=1){return t-Math.abs(go(i,t*2)-t)}function Ud(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Fd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Od(i,t){return i+Math.floor(Math.random()*(t-i+1))}function zd(i,t){return i+Math.random()*(t-i)}function Bd(i){return i*(.5-Math.random())}function Gd(i){i!==void 0&&(lc=i);let t=lc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kd(i){return i*Cs}function Hd(i){return i*Ps}function Vd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Wd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xd(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*d,o*h,o*c);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function hc(i,t){if(t.constructor===Float32Array)return i;const e=xo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function uc(i,t){if(t.constructor===Float32Array)return i;const e=xo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const Zt={DEG2RAD:Cs,RAD2DEG:Ps,generateUUID:Hi,clamp:Xt,euclideanModulo:go,mapLinear:Ld,inverseLerp:Dd,lerp:Ls,damp:Id,pingpong:Nd,smoothstep:Ud,smootherstep:Fd,randInt:Od,randFloat:zd,randFloatSpread:Bd,seededRandom:Gd,degToRad:kd,radToDeg:Hd,isPowerOfTwo:Vd,ceilPowerOfTwo:Wd,floorPowerOfTwo:cc,setQuaternionFromProperEuler:Xd,normalize:uc,denormalize:hc},Pl=class Pl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pl.prototype.isVector2=!0;let Pt=Pl;class Sn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],p=r[a+2],_=r[a+3];if(u!==_||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*_;m<0&&(f=-f,d=-d,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){const S=Math.acos(m),x=Math.sin(S);g=Math.sin(g*S)/x,o=Math.sin(o*S)/x,l=l*g+f*o,c=c*g+d*o,h=h*g+p*o,u=u*g+_*o}else{l=l*g+f*o,c=c*g+d*o,h=h*g+p*o,u=u*g+_*o;const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return t[e]=o*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-o*d,t[e+2]=c*p+h*d+o*f-l*u,t[e+3]=h*p-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ll=class Ll{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _o.copy(this).projectOnVector(t),this.sub(_o)}reflect(t){return this.sub(_o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ll.prototype.isVector3=!0;let W=Ll;const _o=new W,dc=new Sn,Dl=class Dl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],_=s[0],m=s[3],g=s[6],S=s[1],x=s[4],M=s[7],E=s[2],b=s[5],v=s[8];return r[0]=a*_+o*S+l*E,r[3]=a*m+o*x+l*b,r[6]=a*g+o*M+l*v,r[1]=c*_+h*S+u*E,r[4]=c*m+h*x+u*b,r[7]=c*g+h*M+u*v,r[2]=f*_+d*S+p*E,r[5]=f*m+d*x+p*b,r[8]=f*g+d*M+p*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,p=e*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vo.makeScale(t,e)),this}rotate(t){return pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vo.makeRotation(-t)),this}translate(t,e){return pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Dl.prototype.isMatrix3=!0;let Bt=Dl;const vo=new Bt,fc=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pc=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yd(){const i={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[dr]:{primaries:t,whitePoint:n,transfer:fr,toXYZ:fc,fromXYZ:pc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:n,transfer:le,toXYZ:fc,fromXYZ:pc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}const Qt=Yd();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wi;class qd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Wi===void 0&&(Wi=Rs("canvas")),Wi.width=t.width,Wi.height=t.height;const s=Wi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Wi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zd=0;class mr{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mo(s[a].image)):r.push(Mo(s[a]))}else r=Mo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}let Kd=0;const So=new W;class be extends ui{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=Ln,s=Ln,r=Xe,a=xn,o=In,l=sn,c=be.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Hi(),this.name="",this.source=new mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(So).x}get height(){return this.source.getSize(So).y}get depth(){return this.source.getSize(So).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Es:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case Pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Es:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case Pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}be.DEFAULT_IMAGE=null,be.DEFAULT_MAPPING=Zl,be.DEFAULT_ANISOTROPY=1;const Il=class Il{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(d+1)/2,E=(g+1)/2,b=(h+f)/4,v=(u+_)/4,y=(p+m)/4;return x>M&&x>E?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=b/n,r=v/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=y/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=v/r,s=y/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Il.prototype.isVector4=!0;let de=Il;class $d extends ui{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new be({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new mr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends $d{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class mc extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jd extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ga=class ga{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,p,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,p,_,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ga().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Xi.setFromMatrixColumn(t,0).length(),r=1/Xi.setFromMatrixColumn(t,1).length(),a=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,p=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=p+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,p=c*h,_=c*u;e[0]=f+_*o,e[4]=p*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-p,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,p=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,p=o*h,_=o*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,p=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=p*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*l,d=a*c,p=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qd,t,jd)}lookAt(t,e,n){const s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),di.crossVectors(n,rn),di.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),di.crossVectors(n,rn)),di.normalize(),gr.crossVectors(rn,di),s[0]=di.x,s[4]=gr.x,s[8]=rn.x,s[1]=di.y,s[5]=gr.y,s[9]=rn.y,s[2]=di.z,s[6]=gr.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],S=n[3],x=n[7],M=n[11],E=n[15],b=s[0],v=s[4],y=s[8],T=s[12],w=s[1],C=s[5],L=s[9],U=s[13],P=s[2],B=s[6],F=s[10],k=s[14],H=s[3],z=s[7],N=s[11],D=s[15];return r[0]=a*b+o*w+l*P+c*H,r[4]=a*v+o*C+l*B+c*z,r[8]=a*y+o*L+l*F+c*N,r[12]=a*T+o*U+l*k+c*D,r[1]=h*b+u*w+f*P+d*H,r[5]=h*v+u*C+f*B+d*z,r[9]=h*y+u*L+f*F+d*N,r[13]=h*T+u*U+f*k+d*D,r[2]=p*b+_*w+m*P+g*H,r[6]=p*v+_*C+m*B+g*z,r[10]=p*y+_*L+m*F+g*N,r[14]=p*T+_*U+m*k+g*D,r[3]=S*b+x*w+M*P+E*H,r[7]=S*v+x*C+M*B+E*z,r[11]=S*y+x*L+M*F+E*N,r[15]=S*T+x*U+M*k+E*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],_=t[7],m=t[11],g=t[15],S=l*d-c*f,x=o*d-c*u,M=o*f-l*u,E=a*d-c*h,b=a*f-l*h,v=a*u-o*h;return e*(_*S-m*x+g*M)-n*(p*S-m*E+g*b)+s*(p*x-_*E+g*v)-r*(p*M-_*b+m*v)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],_=t[13],m=t[14],g=t[15],S=e*o-n*a,x=e*l-s*a,M=e*c-r*a,E=n*l-s*o,b=n*c-r*o,v=s*c-r*l,y=h*_-u*p,T=h*m-f*p,w=h*g-d*p,C=u*m-f*_,L=u*g-d*_,U=f*g-d*m,P=S*U-x*L+M*C+E*w-b*T+v*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/P;return t[0]=(o*U-l*L+c*C)*B,t[1]=(s*L-n*U-r*C)*B,t[2]=(_*v-m*b+g*E)*B,t[3]=(f*b-u*v-d*E)*B,t[4]=(l*w-a*U-c*T)*B,t[5]=(e*U-s*w+r*T)*B,t[6]=(m*M-p*v-g*x)*B,t[7]=(h*v-f*M+d*x)*B,t[8]=(a*L-o*w+c*y)*B,t[9]=(n*w-e*L-r*y)*B,t[10]=(p*b-_*M+g*S)*B,t[11]=(u*M-h*b-d*S)*B,t[12]=(o*T-a*C-l*y)*B,t[13]=(e*C-n*T+s*y)*B,t[14]=(_*x-p*E-m*S)*B,t[15]=(h*E-u*x+f*S)*B,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,p=r*u,_=a*h,m=a*u,g=o*u,S=l*c,x=l*h,M=l*u,E=n.x,b=n.y,v=n.z;return s[0]=(1-(_+g))*E,s[1]=(d+M)*E,s[2]=(p-x)*E,s[3]=0,s[4]=(d-M)*b,s[5]=(1-(f+g))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(p+x)*v,s[9]=(m-S)*v,s[10]=(1-(f+_))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Xi.set(s[0],s[1],s[2]).length();const o=Xi.set(s[4],s[5],s[6]).length(),l=Xi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),yn.copy(this);const c=1/a,h=1/o,u=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Mn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===Mn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===As)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Mn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s);let p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===Mn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===As)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ga.prototype.isMatrix4=!0;let ne=ga;const Xi=new W,yn=new ne,Qd=new W(0,0,0),jd=new W(1,1,1),di=new W,gr=new W,rn=new W,gc=new ne,xc=new Sn;class cn{constructor(t=0,e=0,n=0,s=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xc.setFromEuler(this),this.setFromQuaternion(xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class yo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tf=0;const _c=new W,Yi=new Sn,Yn=new ne,xr=new W,Ds=new W,ef=new W,nf=new Sn,vc=new W(1,0,0),Mc=new W(0,1,0),Sc=new W(0,0,1),yc={type:"added"},sf={type:"removed"},qi={type:"childadded",child:null},bo={type:"childremoved",child:null};class Ue extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new W,e=new cn,n=new Sn,s=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Bt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(vc,t)}rotateY(t){return this.rotateOnAxis(Mc,t)}rotateZ(t){return this.rotateOnAxis(Sc,t)}translateOnAxis(t,e){return _c.copy(t).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vc,t)}translateY(t){return this.translateOnAxis(Mc,t)}translateZ(t){return this.translateOnAxis(Sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xr.copy(t):xr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Ds,xr,this.up):Yn.lookAt(xr,Ds,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(Yn),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yc),qi.child=t,this.dispatchEvent(qi),qi.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sf),bo.child=t,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yc),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,ef),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,nf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ue.DEFAULT_UP=new W(0,1,0),Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class tn extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rf={type:"move"};class Eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},_r={h:0,s:0,l:0};function wo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class Tt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=go(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=wo(a,r,t+.3333333333333333),this.g=wo(a,r,t),this.b=wo(a,r,t-.3333333333333333)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=bc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return Qt.workingToColorSpace(qe.copy(this),t),Math.round(Xt(qe.r*255,0,255))*65536+Math.round(Xt(qe.g*255,0,255))*256+Math.round(Xt(qe.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Pe){Qt.workingToColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(_r);const n=Ls(fi.h,_r.h,e),s=Ls(fi.s,_r.s,e),r=Ls(fi.l,_r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Tt;Tt.NAMES=bc;class Ec extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const bn=new W,qn=new W,To=new W,Zn=new W,Zi=new W,Ki=new W,wc=new W,Ao=new W,Ro=new W,Co=new W,Po=new de,Lo=new de,Do=new de;class En{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bn.subVectors(t,e),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){bn.subVectors(s,e),qn.subVectors(n,e),To.subVectors(t,e);const a=bn.dot(bn),o=bn.dot(qn),l=bn.dot(To),c=qn.dot(qn),h=qn.dot(To),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,p=(a*h-o*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Po.setScalar(0),Lo.setScalar(0),Do.setScalar(0),Po.fromBufferAttribute(t,e),Lo.fromBufferAttribute(t,n),Do.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Po,r.x),a.addScaledVector(Lo,r.y),a.addScaledVector(Do,r.z),a}static isFrontFacing(t,e,n,s){return bn.subVectors(n,e),qn.subVectors(t,e),bn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),bn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return En.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Zi.subVectors(s,n),Ki.subVectors(r,n),Ao.subVectors(t,n);const l=Zi.dot(Ao),c=Ki.dot(Ao);if(l<=0&&c<=0)return e.copy(n);Ro.subVectors(t,s);const h=Zi.dot(Ro),u=Ki.dot(Ro);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Zi,a);Co.subVectors(t,r);const d=Zi.dot(Co),p=Ki.dot(Co);if(p>=0&&d<=p)return e.copy(r);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(Ki,o);const m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return wc.subVectors(r,s),o=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(wc,o);const g=1/(m+_+f);return a=_*g,o=f*g,e.copy(n).addScaledVector(Zi,a).addScaledVector(Ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class pi{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)),vr.applyMatrix4(t.matrixWorld),this.union(vr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),Mr.subVectors(this.max,Is),$i.subVectors(t.a,Is),Ji.subVectors(t.b,Is),Qi.subVectors(t.c,Is),mi.subVectors(Ji,$i),gi.subVectors(Qi,Ji),Ei.subVectors($i,Qi);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Ei.z,Ei.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Ei.z,0,-Ei.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Ei.y,Ei.x,0];return!Io(e,$i,Ji,Qi,Mr)||(e=[1,0,0,0,1,0,0,0,1],!Io(e,$i,Ji,Qi,Mr))?!1:(Sr.crossVectors(mi,gi),e=[Sr.x,Sr.y,Sr.z],Io(e,$i,Ji,Qi,Mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Kn=[new W,new W,new W,new W,new W,new W,new W,new W],wn=new W,vr=new pi,$i=new W,Ji=new W,Qi=new W,mi=new W,gi=new W,Ei=new W,Is=new W,Mr=new W,Sr=new W,wi=new W;function Io(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){wi.fromArray(i,r);const o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const $n=af();function af(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function of(i){Math.abs(i)>65504&&zt("DataUtils.toHalfFloat(): Value out of range."),i=Xt(i,-65504,65504),$n.floatView[0]=i;const t=$n.uint32View[0],e=t>>23&511;return $n.baseTable[e]+((t&8388607)>>$n.shiftTable[e])}function lf(i){const t=i>>10;return $n.uint32View[0]=$n.mantissaTable[$n.offsetTable[t]+(i&1023)]+$n.exponentTable[t],$n.floatView[0]}class Tc{static toHalfFloat(t){return of(t)}static fromHalfFloat(t){return lf(t)}}const we=new W,yr=new Pt;let cf=0;class Se extends ui{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Td,this.updateRanges=[],this.gpuType=_n,this.version=0,this._normalizationScale=t!==void 0?xo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):hc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):uc(t,this.array)}}class Ac extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Rc extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}}const hf=new pi,Ns=new W,No=new W;class Ti{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):hf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);const e=Ns.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ns,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(No.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(No)),this.expandByPoint(Ns.copy(t.center).sub(No))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let uf=0;const hn=new ne,Uo=new Ue,ji=new W,an=new pi,Us=new pi,Fe=new W;class Ee extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ad(t)?Rc:Ac)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Uo.lookAt(t),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(an.min,Us.min),an.expandByPoint(Fe),Fe.addVectors(an.max,Us.max),an.expandByPoint(Fe)):(an.expandByPoint(Us.min),an.expandByPoint(Us.max))}an.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Fe.fromBufferAttribute(o,c),l&&(ji.fromBufferAttribute(t,c),Fe.add(ji)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Se(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let T=0;T<n.count;T++)o[T]=new W,l[T]=new W;const h=new W,u=new W,f=new W,d=new Pt,p=new Pt,_=new Pt,m=new W,g=new W;function S(T,w,C){c[T]=c[w]=c[C]=1,h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,C),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,w),_.fromBufferAttribute(r,C),u.sub(h),f.sub(h),p.sub(d),_.sub(d);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(L),o[T].add(m),o[w].add(m),o[C].add(m),l[T].add(g),l[w].add(g),l[C].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let T=0,w=x.length;T<w;++T){const C=x[T],L=C.start,U=C.count;for(let P=L,B=L+U;P<B;P+=3)S(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const M=new W,E=new W,b=new W,v=new W;function y(T){b.fromBufferAttribute(s,T),v.copy(b);const w=o[T];M.copy(w),M.sub(b.multiplyScalar(b.dot(w))).normalize(),E.crossVectors(v,w);const L=E.dot(l[T])<0?-1:1;a.setXYZW(T,M.x,M.y,M.z,L)}for(let T=0,w=n.count;T<w;++T)c[T]&&y(T);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,h=new W,u=new W;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new Se(f,h,u)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fo=new W,df=new W,ff=new Bt;class Un{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Fo.subVectors(n,e).cross(df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Fo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ff.getNormalMatrix(t),s=this.coplanarPoint(Fo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let pf=0;class Jn extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=Ss,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=kl,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Tt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Un().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Qn=new W,Oo=new W,br=new W,Er=new W;class wr{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Oo.copy(t).add(e).multiplyScalar(.5),br.copy(e).sub(t).normalize(),Er.copy(this.origin).sub(Oo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(br),o=Er.dot(this.direction),l=-Er.dot(br),c=Er.lengthSq(),h=Math.abs(1-a*a);let u,f,d,p;if(h>0)if(u=a*l-o,f=a*o-l,p=r*h,u>=0)if(f>=-p)if(f<=p){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Oo).addScaledVector(br,f),d}intersectSphere(t,e){if(t.radius<0)return null;Qn.subVectors(t.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,f=t.y-a.y,d=t.z-a.z,p=e.x-a.x,_=e.y-a.y,m=e.z-a.z,g=n.x-a.x,S=n.y-a.y,x=n.z-a.z,M=Math.abs(l),E=Math.abs(c),b=Math.abs(h);let v,y,T,w,C,L,U,P,B,F,k,H;if(M>=E&&M>=b?(T=l,L=u,B=p,H=g,l>=0?(v=c,y=h,w=f,C=d,U=_,P=m,F=S,k=x):(v=h,y=c,w=d,C=f,U=m,P=_,F=x,k=S)):E>=b?(T=c,L=f,B=_,H=S,c>=0?(v=h,y=l,w=d,C=u,U=m,P=p,F=x,k=g):(v=l,y=h,w=u,C=d,U=p,P=m,F=g,k=x)):(T=h,L=d,B=m,H=x,h>=0?(v=l,y=c,w=u,C=f,U=p,P=_,F=g,k=S):(v=c,y=l,w=f,C=u,U=_,P=p,F=S,k=g)),T===0)return null;const z=v/T,N=y/T,D=1/T,Y=w-z*L,it=C-N*L,q=U-z*B,et=P-N*B,$=F-z*H,tt=k-N*H,K=$*et-tt*q,ut=Y*tt-it*$,yt=q*it-et*Y;if(s){if(K<0||ut<0||yt<0)return null}else if((K<0||ut<0||yt<0)&&(K>0||ut>0||yt>0))return null;const ft=K+ut+yt;if(ft===0)return null;const Dt=D*(K*L+ut*B+yt*H);return(ft>0?Dt<0:Dt>0)?null:this.at(Dt/ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tn extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=ir,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Cc=new ne,Ai=new wr,Tr=new Ti,Pc=new W,Ar=new W,Rr=new W,Cr=new W,zo=new W,Pr=new W,Lc=new W,Lr=new W;class qt extends Ue{constructor(t=new Ee,e=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(zo.fromBufferAttribute(u,t),a?Pr.addScaledVector(zo,h):Pr.addScaledVector(zo.sub(e),h))}e.add(Pr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(Tr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Tr,Pc)===null||Ai.origin.distanceToSquared(Pc)>(t.far-t.near)**2))&&(Cc.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(Cc),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,E=x;M<E;M+=3){const b=o.getX(M),v=o.getX(M+1),y=o.getX(M+2);s=Dr(this,g,t,n,c,h,u,b,v,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const S=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);s=Dr(this,a,t,n,c,h,u,S,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,E=x;M<E;M+=3){const b=M,v=M+1,y=M+2;s=Dr(this,g,t,n,c,h,u,b,v,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const S=m,x=m+1,M=m+2;s=Dr(this,a,t,n,c,h,u,S,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function mf(i,t,e,n,s,r,a,o){let l;if(t.side===$e?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ai,o),l===null)return null;Lr.copy(o),Lr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Lr);return c<e.near||c>e.far?null:{distance:c,point:Lr.clone(),object:i}}function Dr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ar),i.getVertexPosition(l,Rr),i.getVertexPosition(c,Cr);const h=mf(i,t,e,n,Ar,Rr,Cr,Lc);if(h){const u=new W;En.getBarycoord(Lc,Ar,Rr,Cr,u),s&&(h.uv=En.getInterpolatedAttribute(s,o,l,c,u,new Pt)),r&&(h.uv1=En.getInterpolatedAttribute(r,o,l,c,u,new Pt)),a&&(h.normal=En.getInterpolatedAttribute(a,o,l,c,u,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new W,materialIndex:0};En.getNormal(Ar,Rr,Cr,f.normal),h.face=f,h.barycoord=u}return h}class Fs extends be{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ce,h=Ce,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dc extends Se{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ts=new ne,Ic=new ne,Ir=[],Nc=new pi,gf=new ne,Os=new qt,zs=new Ti;class Je extends qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Dc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Nc.copy(t.boundingBox).applyMatrix4(ts),this.boundingBox.union(Nc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),zs.copy(t.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),t.ray.intersectsSphere(zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ts),Ic.multiplyMatrices(n,ts),Os.matrixWorld=Ic,Os.raycast(t,Ir);for(let a=0,o=Ir.length;a<o;a++){const l=Ir[a];l.instanceId=r,l.object=this,e.push(l)}Ir.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Dc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fs(new Float32Array(s*this.count),s,this.count,rr,_n));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ri=new Ti,xf=new Pt(.5,.5),Nr=new W;class Bs{constructor(t=new Un,e=new Un,n=new Un,s=new Un,r=new Un,a=new Un){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],m=r[10],g=r[11],S=r[12],x=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-a,d-h,g-p,E-S).normalize(),s[1].setComponents(c+a,d+h,g+p,E+S).normalize(),s[2].setComponents(c+o,d+u,g+_,E+x).normalize(),s[3].setComponents(c-o,d-u,g-_,E-x).normalize(),n)s[4].setComponents(l,f,m,M).normalize(),s[5].setComponents(c-l,d-f,g-m,E-M).normalize();else if(s[4].setComponents(c-l,d-f,g-m,E-M).normalize(),e===Mn)s[5].setComponents(c+l,d+f,g+m,E+M).normalize();else if(e===As)s[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){Ri.center.set(0,0,0);const e=xf.distanceTo(t.center);return Ri.radius=.7071067811865476+e,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Nr.x=s.normal.x>0?t.max.x:t.min.x,Nr.y=s.normal.y>0?t.max.y:t.min.y,Nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Uc=new ne;class Bo{constructor(){this.coordinateSystem=Mn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];Uc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Bs),n[s].setFromProjectionMatrix(Uc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Bs),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Bo().copy(this)}}class Fc extends Jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ur=new W,Fr=new W,Oc=new ne,Gs=new wr,Or=new Ti,Go=new W,zc=new W;class _f extends Ue{constructor(t=new Ee,e=new Fc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ur.fromBufferAttribute(e,s-1),Fr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ur.distanceTo(Fr);t.setAttribute("lineDistance",new fe(n,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Or.radius+=r,t.ray.intersectsSphere(Or)===!1)return;Oc.copy(s).invert(),Gs.copy(t.ray).applyMatrix4(Oc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,m=p-1;_<m;_+=c){const g=h.getX(_),S=h.getX(_+1),x=zr(this,t,Gs,l,g,S,_);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(p-1),m=h.getX(d),g=zr(this,t,Gs,l,_,m,p-1);g&&e.push(g)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,m=p-1;_<m;_+=c){const g=zr(this,t,Gs,l,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){const _=zr(this,t,Gs,l,p-1,d,p-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function zr(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(Ur.fromBufferAttribute(o,s),Fr.fromBufferAttribute(o,r),e.distanceSqToSegment(Ur,Fr,Go,zc)>n)return;Go.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Go);if(!(c<t.near||c>t.far))return{distance:c,point:zc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Bc=new W,Gc=new W;class kc extends _f{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Bc.fromBufferAttribute(e,s),Gc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bc.distanceTo(Gc);t.setAttribute("lineDistance",new fe(n,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hc extends be{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Ce,this.minFilter=Ce,this.generateMipmaps=!1,this.needsUpdate=!0}copy(t){return super.copy(t),this.source=new mr(Object.assign({},t.image)),this}}class Vc extends be{constructor(t=[],e=Bi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ko extends be{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class es extends be{constructor(t,e,n=Dn,s,r,a,o=Ce,l=Ce,c,h=oi,u=1){if(h!==oi&&h!==li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Wc extends es{constructor(t,e=Dn,n=Bi,s,r,a=Ce,o=Ce,l,c=oi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Xc extends be{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ci extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function p(_,m,g,S,x,M,E,b,v,y,T){const w=M/v,C=E/y,L=M/2,U=E/2,P=b/2,B=v+1,F=y+1;let k=0,H=0;const z=new W;for(let N=0;N<F;N++){const D=N*C-U;for(let Y=0;Y<B;Y++){const it=Y*w-L;z[_]=it*S,z[m]=D*x,z[g]=P,c.push(z.x,z.y,z.z),z[_]=0,z[m]=0,z[g]=b>0?1:-1,h.push(z.x,z.y,z.z),u.push(Y/v),u.push(1-N/y),k+=1}}for(let N=0;N<y;N++)for(let D=0;D<v;D++){const Y=f+D+B*N,it=f+D+B*(N+1),q=f+(D+1)+B*(N+1),et=f+(D+1)+B*N;l.push(Y,it,et),l.push(it,q,et),H+=6}o.addGroup(d,H,T),d+=H,f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ho extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let p=0;const _=[],m=n/2;let g=0;S(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(d,2));function S(){const M=new W,E=new W;let b=0;const v=(e-t)/n;for(let y=0;y<=r;y++){const T=[],w=y/r,C=w*(e-t)+t;for(let L=0;L<=s;L++){const U=L/s,P=U*l+o,B=Math.sin(P),F=Math.cos(P);E.x=C*B,E.y=-w*n+m,E.z=C*F,u.push(E.x,E.y,E.z),M.set(B,v,F).normalize(),f.push(M.x,M.y,M.z),d.push(U,1-w),T.push(p++)}_.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){const w=_[T][y],C=_[T+1][y],L=_[T+1][y+1],U=_[T][y+1];(t>0||T!==0)&&(h.push(w,C,U),b+=3),(e>0||T!==r-1)&&(h.push(C,L,U),b+=3)}c.addGroup(g,b,0),g+=b}function x(M){const E=p,b=new Pt,v=new W;let y=0;const T=M===!0?t:e,w=M===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*w,0),f.push(0,w,0),d.push(.5,.5),p++;const C=p;for(let L=0;L<=s;L++){const P=L/s*l+o,B=Math.cos(P),F=Math.sin(P);v.x=T*F,v.y=m*w,v.z=T*B,u.push(v.x,v.y,v.z),f.push(0,w,0),b.x=B*.5+.5,b.y=F*.5*w+.5,d.push(b.x,b.y),p++}for(let L=0;L<s;L++){const U=E+L,P=C+L;M===!0?h.push(P,P+1,U):h.push(P+1,P,U),y+=3}c.addGroup(g,y,M===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vo extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const x=new W,M=new W,E=new W;for(let b=0;b<e.length;b+=3)d(e[b+0],x),d(e[b+1],M),d(e[b+2],E),l(x,M,E,S)}function l(S,x,M,E){const b=E+1,v=[];for(let y=0;y<=b;y++){v[y]=[];const T=S.clone().lerp(M,y/b),w=x.clone().lerp(M,y/b),C=b-y;for(let L=0;L<=C;L++)L===0&&y===b?v[y][L]=T:v[y][L]=T.clone().lerp(w,L/C)}for(let y=0;y<b;y++)for(let T=0;T<2*(b-y)-1;T++){const w=Math.floor(T/2);T%2===0?(f(v[y][w+1]),f(v[y+1][w]),f(v[y][w])):(f(v[y][w+1]),f(v[y+1][w+1]),f(v[y+1][w]))}}function c(S){const x=new W;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(S),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){const S=new W;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];const M=m(S)/2/Math.PI+.5,E=g(S)/Math.PI+.5;a.push(M,1-E)}p(),u()}function u(){for(let S=0;S<a.length;S+=6){const x=a[S+0],M=a[S+2],E=a[S+4],b=Math.max(x,M,E),v=Math.min(x,M,E);b>.9&&v<.1&&(x<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),E<.2&&(a[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,x){const M=S*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function p(){const S=new W,x=new W,M=new W,E=new W,b=new Pt,v=new Pt,y=new Pt;for(let T=0,w=0;T<r.length;T+=9,w+=6){S.set(r[T+0],r[T+1],r[T+2]),x.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),b.set(a[w+0],a[w+1]),v.set(a[w+2],a[w+3]),y.set(a[w+4],a[w+5]),E.copy(S).add(x).add(M).divideScalar(3);const C=m(E);_(b,w+0,S,C),_(v,w+2,x,C),_(y,w+4,M,C)}}function _(S,x,M,E){E<0&&S.x===1&&(a[x]=S.x-1),M.x===0&&M.z===0&&(a[x]=E/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.vertices,t.indices,t.radius,t.detail)}}function vf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Yc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Ef(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let f=e;f<s;f+=e){const d=i[f],p=i[f+1];d<o&&(o=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return ks(r,a,e,o,l,c,0),a}function Yc(i,t,e,n,s){let r;if(s===Uf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=$c(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=$c(a/n|0,i[a],i[a+1],r);return r&&ns(r,r.next)&&(Ws(r),r=r.next),r}function Pi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ns(e,e.next)||ge(e.prev,e,e.next)===0)){if(Ws(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ks(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Cf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Sf(i,n,s,r):Mf(i)){t.push(l.i,i.i,c.i),Ws(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=yf(Pi(i),t),ks(i,t,e,n,s,r,2)):a===2&&bf(i,t,e,n,s,r):ks(Pi(i),t,e,n,s,r,1);break}}}function Mf(i){const t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Hs(s,o,r,l,a,c,p.x,p.y)&&ge(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Sf(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ge(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,l,c),p=Math.min(h,u,f),_=Math.max(o,l,c),m=Math.max(h,u,f),g=Wo(d,p,t,e,n),S=Wo(_,m,t,e,n);let x=i.prevZ,M=i.nextZ;for(;x&&x.z>=g&&M&&M.z<=S;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=m&&x!==s&&x!==a&&Hs(o,h,l,u,c,f,x.x,x.y)&&ge(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=d&&M.x<=_&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&Hs(o,h,l,u,c,f,M.x,M.y)&&ge(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=g;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=m&&x!==s&&x!==a&&Hs(o,h,l,u,c,f,x.x,x.y)&&ge(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=S;){if(M.x>=d&&M.x<=_&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&Hs(o,h,l,u,c,f,M.x,M.y)&&ge(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function yf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ns(n,s)&&Zc(n,e,e.next,s)&&Vs(n,s)&&Vs(s,n)&&(t.push(n.i,e.i,s.i),Ws(e),Ws(e.next),e=i=s),e=e.next}while(e!==i);return Pi(e)}function bf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Df(a,o)){let l=Kc(a,o);a=Pi(a,a.next),l=Pi(l,l.next),ks(a,t,e,n,s,r,0),ks(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ef(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Yc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Lf(c))}s.sort(wf);for(let r=0;r<s.length;r++)e=Tf(s[r],e);return e}function wf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Tf(i,t){const e=Af(i,t);if(!e)return t;const n=Kc(e,i);return Pi(n,n.next),Pi(e,e.next)}function Af(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(ns(i,e))return e;do{if(ns(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&qc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Vs(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Rf(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Rf(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function Cf(i,t,e,n){let s=i;do s.z===0&&(s.z=Wo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Pf(s)}function Pf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Wo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Lf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function qc(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Hs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&qc(i,t,e,n,s,r,a,o)}function Df(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!If(i,t)&&(Vs(i,t)&&Vs(t,i)&&Nf(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||ns(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ns(i,t){return i.x===t.x&&i.y===t.y}function Zc(i,t,e,n){const s=Gr(ge(i,t,e)),r=Gr(ge(i,t,n)),a=Gr(ge(e,n,i)),o=Gr(ge(e,n,t));return!!(s!==r&&a!==o||s===0&&Br(i,e,t)||r===0&&Br(i,n,t)||a===0&&Br(e,i,n)||o===0&&Br(e,t,n))}function Br(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Gr(i){return i>0?1:i<0?-1:0}function If(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Zc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Vs(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function Nf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Kc(i,t){const e=Xo(i.i,i.x,i.y),n=Xo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $c(i,t,e,n){const s=Xo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ws(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Uf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Ff{static triangulate(t,e,n=2){return vf(t,e,n)}}class Yo{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Yo.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Jc(t),Qc(n,t);let a=t.length;e.forEach(Jc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Qc(n,e[l]);const o=Ff.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Jc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Qc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class qo extends Vo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new qo(t.radius,t.detail)}}class Fn extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const S=g*f-a;for(let x=0;x<c;x++){const M=x*u-r;p.push(M,-S,0),_.push(0,0,1),m.push(x/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){const x=S+c*g,M=S+c*(g+1),E=S+1+c*(g+1),b=S+1+c*g;d.push(x,M,b),d.push(M,E,b)}this.setIndex(d),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Zo extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new W,f=new W,d=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const S=[],x=g/n,M=a+x*o,E=t*Math.cos(M),b=Math.sqrt(t*t-E*E);let v=0;g===0&&a===0?v=.5/e:g===n&&l===Math.PI&&(v=-.5/e);for(let y=0;y<=e;y++){const T=y/e,w=s+T*r;u.x=-b*Math.cos(w),u.y=E,u.z=b*Math.sin(w),p.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(T+v,1-x),S.push(c++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<e;S++){const x=h[g][S+1],M=h[g][S],E=h[g+1][S],b=h[g+1][S+1];(g!==0||a>0)&&d.push(x,M,b),(g!==n-1||l<Math.PI)&&d.push(M,E,b)}this.setIndex(d),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function is(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(jc(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(jc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=is(i[e]);for(const s in n)t[s]=n[s]}return t}function jc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Of(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function th(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const zf={clone:is,merge:Qe};var Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=Gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=Of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Tt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new W().fromArray(s.value);break;case"v4":this.uniforms[n].value=new de().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ne().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class kf extends en{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class An extends Jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ki,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hf extends Jn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Tt(16777215),this.specular=new Tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ki,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=ir,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vf extends Jn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Tt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ki,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class kr extends Jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ki,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=ir,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wf extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xf extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ko={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(eh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!eh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function eh(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Yf{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const qf=new Yf;class $o{constructor(t){this.manager=t!==void 0?t:qf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}$o.DEFAULT_MATERIAL_NAME="__DEFAULT";const ss=new WeakMap;class Zf extends $o{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Ko.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=ss.get(a);u===void 0&&(u=[],ss.set(a,u)),u.push({onLoad:e,onError:s})}return a}const o=Rs("img");function l(){h(),e&&e(this);const u=ss.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}ss.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),Ko.remove(`image:${t}`);const f=ss.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onError&&p.onError(u)}ss.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ko.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class Kf extends $o{constructor(t){super(t)}load(t,e,n,s){const r=new be,a=new Zf(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class nh extends Ue{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class $f extends nh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Jo=new ne,ih=new W,sh=new W;class Jf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;ih.setFromMatrixPosition(t.matrixWorld),e.position.copy(ih),sh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Jo,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===As||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Hr=new W,Vr=new Sn,On=new W;class Qo extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hr,Vr,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Vr,On.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Hr,Vr,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Vr,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xi=new W,rh=new Pt,ah=new Pt;class Rn extends Qo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,rh,ah),e.subVectors(ah,rh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class oh extends Qo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Qf extends Jf{constructor(){super(new oh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jf extends nh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new Qf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const rs=-90,as=1;class jo extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Rn(rs,as,t,e);s.layers=this.layers,this.add(s);const r=new Rn(rs,as,t,e);r.layers=this.layers,this.add(r);const a=new Rn(rs,as,t,e);a.layers=this.layers,this.add(a);const o=new Rn(rs,as,t,e);o.layers=this.layers,this.add(o);const l=new Rn(rs,as,t,e);l.layers=this.layers,this.add(l);const c=new Rn(rs,as,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class tp extends Rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const lh=new ne;class ep{constructor(t,e,n=0,s=1/0){this.ray=new wr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return lh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lh),this}intersectObject(t,e=!0,n=[]){return tl(t,this,n,e),n.sort(ch),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)tl(t[s],this,n,e);return n.sort(ch),n}}function ch(i,t){return i.distance-t.distance}function tl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)tl(r[a],t,e,!0)}}class Wr{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Xt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Nl=class Nl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Nl.prototype.isMatrix2=!0;let hh=Nl;class np extends ui{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function uh(i,t,e,n){const s=ip(n);switch(e){case jl:return i*t;case rr:return i*t/s.components*s.byteLength;case Ua:return i*t/s.components*s.byteLength;case ci:return i*t*2/s.components*s.byteLength;case Fa:return i*t*2/s.components*s.byteLength;case tc:return i*t*3/s.components*s.byteLength;case In:return i*t*4/s.components*s.byteLength;case Oa:return i*t*4/s.components*s.byteLength;case ar:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:case ka:return Math.max(i,16)*Math.max(t,8)/4;case za:case Ga:return Math.max(i,8)*Math.max(t,8)/2;case Ha:case Va:case Xa:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:case hr:case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case eo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ao:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case lo:case co:case ho:return Math.ceil(i/4)*Math.ceil(t/4)*16;case uo:case fo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ur:case po:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ip(i){switch(i){case sn:case Kl:return{byteLength:1,components:1};case ws:case $l:case vn:return{byteLength:2,components:1};case Ia:case Na:return{byteLength:2,components:4};case Dn:case Da:case _n:return{byteLength:4,components:1};case Jl:case Ql:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:si}})),typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=si);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sp(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ap=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,up=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_p=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Rp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Np="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$p=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,em=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,im=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,am=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,om=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_m=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Am=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Im=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,i0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ht={alphahash_fragment:rp,alphahash_pars_fragment:ap,alphamap_fragment:op,alphamap_pars_fragment:lp,alphatest_fragment:cp,alphatest_pars_fragment:hp,aomap_fragment:up,aomap_pars_fragment:dp,batching_pars_vertex:fp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:xp,iridescence_fragment:_p,bumpmap_pars_fragment:vp,clipping_planes_fragment:Mp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:yp,clipping_planes_vertex:bp,color_fragment:Ep,color_pars_fragment:wp,color_pars_vertex:Tp,color_vertex:Ap,common:Rp,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Lp,emissivemap_fragment:Dp,emissivemap_pars_fragment:Ip,colorspace_fragment:Np,colorspace_pars_fragment:Up,envmap_fragment:Fp,envmap_common_pars_fragment:Op,envmap_pars_fragment:zp,envmap_pars_vertex:Bp,envmap_physical_pars_fragment:$p,envmap_vertex:Gp,fog_vertex:kp,fog_pars_vertex:Hp,fog_fragment:Vp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:Yp,lights_lambert_fragment:qp,lights_lambert_pars_fragment:Zp,lights_pars_begin:Kp,lights_toon_fragment:Jp,lights_toon_pars_fragment:Qp,lights_phong_fragment:jp,lights_phong_pars_fragment:tm,lights_physical_fragment:em,lights_physical_pars_fragment:nm,lights_fragment_begin:im,lights_fragment_maps:sm,lights_fragment_end:rm,lightprobes_pars_fragment:am,logdepthbuf_fragment:om,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:hm,map_fragment:um,map_pars_fragment:dm,map_particle_fragment:fm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphinstance_vertex:xm,morphcolor_vertex:_m,morphnormal_vertex:vm,morphtarget_pars_vertex:Mm,morphtarget_vertex:Sm,normal_fragment_begin:ym,normal_fragment_maps:bm,normal_pars_fragment:Em,normal_pars_vertex:wm,normal_vertex:Tm,normalmap_pars_fragment:Am,clearcoat_normal_fragment_begin:Rm,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Pm,iridescence_pars_fragment:Lm,opaque_fragment:Dm,packing:Im,premultiplied_alpha_fragment:Nm,project_vertex:Um,dithering_fragment:Fm,dithering_pars_fragment:Om,roughnessmap_fragment:zm,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:km,shadowmap_vertex:Hm,shadowmask_pars_fragment:Vm,skinbase_vertex:Wm,skinning_pars_vertex:Xm,skinning_vertex:Ym,skinnormal_vertex:qm,specularmap_fragment:Zm,specularmap_pars_fragment:Km,tonemapping_fragment:$m,tonemapping_pars_fragment:Jm,transmission_fragment:Qm,transmission_pars_fragment:jm,uv_pars_fragment:t0,uv_pars_vertex:e0,uv_vertex:n0,worldpos_vertex:i0,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},bt={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},zn={basic:{uniforms:Qe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Qe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Qe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Qe([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Qe([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Qe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Qe([bt.points,bt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Qe([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Qe([bt.common,bt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Qe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Qe([bt.sprite,bt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:Qe([bt.common,bt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:Qe([bt.lights,bt.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};zn.physical={uniforms:Qe([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Xr={r:0,b:0,g:0},s0=new ne,fh=new Bt;fh.set(-1,0,0,0,1,0,0,0,1);function r0(i,t,e,n,s,r){const a=new Tt(0);let o=s===!0?0:1,l,c,h=null,u=0,f=null;function d(S){let x=S.isScene===!0?S.background:null;if(x&&x.isTexture){const M=S.backgroundBlurriness>0;x=t.get(x,M)}return x}function p(S){let x=!1;const M=d(S);M===null?m(a,o):M&&M.isColor&&(m(M,1),x=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,x){const M=d(x);M&&M.isCubeTexture?(c===void 0&&(c=new qt(new Ci(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:is(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(s0.makeRotationFromEuler(x.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fh),c.material.toneMapped=Qt.getTransfer(M.colorSpace)!==le,(h!==M||u!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new qt(new Fn(2,2),new en({name:"BackgroundMaterial",uniforms:is(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(M.colorSpace)!==le,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,x){S.getRGB(Xr,th(i)),e.buffers.color.setClear(Xr.r,Xr.g,Xr.b,x,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),o=x,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:p,addToRenderList:_,dispose:g}}function a0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(C,L,U,P,B){let F=!1;const k=u(C,P,U,L);r!==k&&(r=k,c(r.object)),F=d(C,P,U,B),F&&p(C,P,U,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,M(C,L,U,P),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,L,U,P){const B=P.wireframe===!0;let F=n[L.id];F===void 0&&(F={},n[L.id]=F);const k=C.isInstancedMesh===!0?C.id:0;let H=F[k];H===void 0&&(H={},F[k]=H);let z=H[U.id];z===void 0&&(z={},H[U.id]=z);let N=z[B];return N===void 0&&(N=f(l()),z[B]=N),N}function f(C){const L=[],U=[],P=[];for(let B=0;B<e;B++)L[B]=0,U[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:P,object:C,attributes:{},index:null}}function d(C,L,U,P){const B=r.attributes,F=L.attributes;let k=0;const H=U.getAttributes();for(const z in H)if(H[z].location>=0){const D=B[z];let Y=F[z];if(Y===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(Y=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(Y=C.instanceColor)),D===void 0||D.attribute!==Y||Y&&D.data!==Y.data)return!0;k++}return r.attributesNum!==k||r.index!==P}function p(C,L,U,P){const B={},F=L.attributes;let k=0;const H=U.getAttributes();for(const z in H)if(H[z].location>=0){let D=F[z];D===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(D=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(D=C.instanceColor));const Y={};Y.attribute=D,D&&D.data&&(Y.data=D.data),B[z]=Y,k++}r.attributes=B,r.attributesNum=k,r.index=P}function _(){const C=r.newAttributes;for(let L=0,U=C.length;L<U;L++)C[L]=0}function m(C){g(C,0)}function g(C,L){const U=r.newAttributes,P=r.enabledAttributes,B=r.attributeDivisors;U[C]=1,P[C]===0&&(i.enableVertexAttribArray(C),P[C]=1),B[C]!==L&&(i.vertexAttribDivisor(C,L),B[C]=L)}function S(){const C=r.newAttributes,L=r.enabledAttributes;for(let U=0,P=L.length;U<P;U++)L[U]!==C[U]&&(i.disableVertexAttribArray(U),L[U]=0)}function x(C,L,U,P,B,F,k){k===!0?i.vertexAttribIPointer(C,L,U,B,F):i.vertexAttribPointer(C,L,U,P,B,F)}function M(C,L,U,P){_();const B=P.attributes,F=U.getAttributes(),k=L.defaultAttributeValues;for(const H in F){const z=F[H];if(z.location>=0){let N=B[H];if(N===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),N!==void 0){const D=N.normalized,Y=N.itemSize,it=t.get(N);if(it===void 0)continue;const q=it.buffer,et=it.type,$=it.bytesPerElement,tt=et===i.INT||et===i.UNSIGNED_INT||N.gpuType===Da;if(N.isInterleavedBufferAttribute){const K=N.data,ut=K.isInterleavedBuffer===!0?K.stride:K.itemSize,yt=N.offset;if(K.isInstancedInterleavedBuffer||K.isInstancedBufferAttribute){for(let ft=0;ft<z.locationSize;ft++)g(z.location+ft,K.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ft=0;ft<z.locationSize;ft++)m(z.location+ft);i.bindBuffer(i.ARRAY_BUFFER,q);for(let ft=0;ft<z.locationSize;ft++)x(z.location+ft,Y/z.locationSize,et,D,ut*$,(yt+Y/z.locationSize*ft)*$,tt)}else{if(N.isInstancedBufferAttribute){for(let K=0;K<z.locationSize;K++)g(z.location+K,N.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let K=0;K<z.locationSize;K++)m(z.location+K);i.bindBuffer(i.ARRAY_BUFFER,q);for(let K=0;K<z.locationSize;K++)x(z.location+K,Y/z.locationSize,et,D,Y*$,Y/z.locationSize*K*$,tt)}}else if(k!==void 0){const D=k[H];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(z.location,D);break;case 3:i.vertexAttrib3fv(z.location,D);break;case 4:i.vertexAttrib4fv(z.location,D);break;default:i.vertexAttrib1fv(z.location,D)}}}}S()}function E(){T();for(const C in n){const L=n[C];for(const U in L){const P=L[U];for(const B in P){const F=P[B];for(const k in F)h(F[k].object),delete F[k];delete P[B]}}delete n[C]}}function b(C){if(n[C.id]===void 0)return;const L=n[C.id];for(const U in L){const P=L[U];for(const B in P){const F=P[B];for(const k in F)h(F[k].object),delete F[k];delete P[B]}}delete n[C.id]}function v(C){for(const L in n){const U=n[L];for(const P in U){const B=U[P];if(B[C.id]===void 0)continue;const F=B[C.id];for(const k in F)h(F[k].object),delete F[k];delete B[C.id]}}}function y(C){for(const L in n){const U=n[L],P=C.isInstancedMesh===!0?C.id:0,B=U[P];if(B!==void 0){for(const F in B){const k=B[F];for(const H in k)h(k[H].object),delete k[H];delete B[F]}delete U[P],Object.keys(U).length===0&&delete n[L]}}}function T(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function o0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function l0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==In&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){const y=v===vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==sn&&v!==_n&&!y&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:M,maxSamples:E,samples:b}}function c0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Un,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,x=S*4;let M=g.clippingState||null;l.value=M,M=h(p,f,x,d);for(let E=0;E!==x;++E)M[E]=e[E];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=d+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,M=d;x!==_;++x,M+=4)a.copy(u[x]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}class el extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Vc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ci(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:Oi});r.uniforms.tEquirect.value=e;const a=new qt(s,r),o=e.minFilter;return e.minFilter===xn&&(e.minFilter=Xe),new jo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ph=256,h0=3,u0=20,mh=256,gh=16,d0=3,f0=new W,p0=new Tt;class Yr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new jo(1,10,null),this._boxMesh=new qt(new Ci(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=f0}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(p0));const m=new jo(n,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ph,cc(t))}_fromTexture(t,e){t.mapping===Bi||t.mapping===bs?this._setSize(t.image.length===0?ph:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=xh(t,!1,!1),n=Math.log2(t)-h0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=xh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Bi||t.mapping===bs?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=_h()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=m0(),this._integrationMaterial=g0());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/gh);for(let a=0;a<=n;a++){const o=Yr.lodToRoughness(a,n);if(a>n-d0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(mh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=x0());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function xh(i,t,e){return new el(i,{minFilter:xn,generateMipmaps:t,type:vn,colorSpace:dr,depthBuffer:e})}function Xs(i,t,e){return new en({name:i,uniforms:t,vertexShader:Ht.cube_vert,fragmentShader:e,side:$e,blending:Oi,depthTest:!1,depthWrite:!1})}function m0(){return Xs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${mh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function g0(){return Xs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:gh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function x0(){return Xs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${u0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function _h(){return Xs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function vh(){return Xs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function _0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Ra||d===Ca)if(t.has(f)){const p=t.get(f).texture;return o(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const _=new el(p.height);return _.fromEquirectangularTexture(i,f),t.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const d=f.mapping,p=d===Ra||d===Ca,_=d===Bi||d===bs;if(p||_){let m=e.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Yr(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const S=f.image;return p&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new Yr(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,d){return d===Ra?f.mapping=Bi:d===Ca&&(f.mapping=bs),f}function l(f){let d=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function c(f){const d=f.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function v0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&pr("WebGLRenderer: "+n+" extension not supported."),s}}}function M0(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);const _=r.get(p);_&&(t.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),e.memory.geometries++),_}function h(p){const _=p.attributes;for(const m in _)t.update(_[m],i.ARRAY_BUFFER)}function u(p){const _=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const S=_!==null?_.array.length:m.array.length/3-1,x=m.count>=65535?Rc:Ac,M=new x(Math.ceil(S/3)*6,1),E=M.array;if(_!==null){const v=_.array;g=_.version;for(let y=0,T=0;y<S;y+=3){const w=v[y+0],C=v[y+1],L=v[y+2];E[T++]=w,E[T++]=C,E[T++]=C,E[T++]=L,E[T++]=L,E[T++]=w}}else{g=m.version;for(let v=0,y=0;v<S;v+=3){const T=v+0,w=v+1,C=v+2;E[y++]=T,E[y++]=w,E[y++]=w,E[y++]=C,E[y++]=C,E[y++]=T}}M.version=g;const b=r.get(p);b&&t.remove(b),r.set(p,M)}function f(p){const _=r.get(p);if(_){const m=p.index;m!==null&&_.version<m.version&&u(p)}else u(p);return r.get(p)}function d(){for(const p in s){const _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function S0(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*a,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let _=0;for(let m=0;m<d;m++)_+=f[m];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function y0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:se("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function b0(i,t,e){const n=new WeakMap,s=new de;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let T=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;d===!0&&(x=1),p===!0&&(x=2),_===!0&&(x=3);let M=o.attributes.position.count*x,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const b=new Float32Array(M*E*4*u),v=new mc(b,M,E,u);v.type=_n,v.needsUpdate=!0;const y=x*4;for(let w=0;w<u;w++){const C=m[w],L=g[w],U=S[w],P=M*E*4*w;for(let B=0;B<C.count;B++){const F=B*y;d===!0&&(s.fromBufferAttribute(C,B),b[P+F+0]=s.x,b[P+F+1]=s.y,b[P+F+2]=s.z,b[P+F+3]=0),p===!0&&(s.fromBufferAttribute(L,B),b[P+F+4]=s.x,b[P+F+5]=s.y,b[P+F+6]=s.z,b[P+F+7]=0),_===!0&&(s.fromBufferAttribute(U,B),b[P+F+8]=s.x,b[P+F+9]=s.y,b[P+F+10]=s.z,b[P+F+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:v,size:new Pt(M,E)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function E0(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const w0={[Hl]:"LINEAR_TONE_MAPPING",[Vl]:"REINHARD_TONE_MAPPING",[Wl]:"CINEON_TONE_MAPPING",[Xl]:"ACES_FILMIC_TONE_MAPPING",[ql]:"AGX_TONE_MAPPING",[Aa]:"NEUTRAL_TONE_MAPPING",[Yl]:"CUSTOM_TONE_MAPPING"};function T0(i,t,e,n,s,r){const a=new Nn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Ee;h.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new fe([0,2,0,0,2,0],2));const u=new kf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new qt(h,u),d=new oh(-1,1,1,-1,0,1);let p=null,_=null,m=!1,g,S=null,x=[],M=!1;this.setSize=function(E,b){a.setSize(E,b),o!==null&&o.setSize(E,b),l!==null&&l.setSize(E,b);for(let v=0;v<x.length;v++){const y=x[v];y.setSize&&y.setSize(E,b)}},this.setEffects=function(E){x=E,M=x.length>0&&x[0].isRenderPass===!0;const b=a.width,v=a.height;x.length>0&&o===null&&(o=new Nn(b,v,{type:vn,depthBuffer:!1,stencilBuffer:!1}),l=new Nn(b,v,{type:vn,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&x.some(T=>T.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new es(b,v),r===!0&&(c.format=li,c.type=Gi)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let T=0;T<x.length;T++){const w=x[T];w.setSize&&w.setSize(b,v),y&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(c)}},this.begin=function(E,b){if(m||E.toneMapping===Wn&&x.length===0)return!1;if(S=b,b!==null){const v=b.width,y=b.height;(a.width!==v||a.height!==y)&&this.setSize(v,y)}return M===!1&&E.setRenderTarget(a),g=E.toneMapping,E.toneMapping=Wn,!0},this.hasRenderPass=function(){return M},this.end=function(E,b){E.toneMapping=g,m=!0;let v=a,y=o;for(let T=0;T<x.length;T++){const w=x[T];w.enabled!==!1&&(w.render(E,y,v,b),w.needsSwap!==!1&&(v=y,y=y===o?l:o))}if(p!==E.outputColorSpace||_!==E.toneMapping){p=E.outputColorSpace,_=E.toneMapping,u.defines={},Qt.getTransfer(p)===le&&(u.defines.SRGB_TRANSFER="");const T=w0[_];T&&(u.defines[T]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,E.setRenderTarget(S),E.render(f,d),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const Mh=new be,Sh=new es(1,1),yh=new Wc(1),bh=new mc,Eh=new Jd,wh=new Vc,Th=[],Ah=[],Rh=new Float32Array(16),Ch=new Float32Array(9),Ph=new Float32Array(4);function os(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Th[s];if(r===void 0&&(r=new Float32Array(s),Th[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qr(i,t){let e=Ah[t];e===void 0&&(e=new Int32Array(t),Ah[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function A0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function C0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function L0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Ph.set(n),i.uniformMatrix2fv(this.addr,!1,Ph),De(e,n)}}function D0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Ch.set(n),i.uniformMatrix3fv(this.addr,!1,Ch),De(e,n)}}function I0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Rh.set(n),i.uniformMatrix4fv(this.addr,!1,Rh),De(e,n)}}function N0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function U0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function z0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function B0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function k0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function Zr(i){return i.version===0&&(i.compareFunction=ic,i.needsUpdate=!0),i}function H0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Zr(Sh):r=Mh,e.setTexture2D(t||r,s)}function V0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Eh,s)}function W0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Zr(yh):r=wh,e.setTextureCube(t||r,s)}function X0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bh,s)}function Y0(i){switch(i){case 5126:return A0;case 35664:return R0;case 35665:return C0;case 35666:return P0;case 35674:return L0;case 35675:return D0;case 35676:return I0;case 5124:case 35670:return N0;case 35667:case 35671:return U0;case 35668:case 35672:return F0;case 35669:case 35673:return O0;case 5125:return z0;case 36294:return B0;case 36295:return G0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}function q0(i,t){i.uniform1fv(this.addr,t)}function Z0(i,t){const e=os(t,this.size,2);i.uniform2fv(this.addr,e)}function K0(i,t){const e=os(t,this.size,3);i.uniform3fv(this.addr,e)}function $0(i,t){const e=os(t,this.size,4);i.uniform4fv(this.addr,e)}function J0(i,t){const e=os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Q0(i,t){const e=os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function j0(i,t){const e=os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function tg(i,t){i.uniform1iv(this.addr,t)}function eg(i,t){i.uniform2iv(this.addr,t)}function ng(i,t){i.uniform3iv(this.addr,t)}function ig(i,t){i.uniform4iv(this.addr,t)}function sg(i,t){i.uniform1uiv(this.addr,t)}function rg(i,t){i.uniform2uiv(this.addr,t)}function ag(i,t){i.uniform3uiv(this.addr,t)}function og(i,t){i.uniform4uiv(this.addr,t)}function lg(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Zr(Sh):a=Mh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function cg(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Eh,r[a])}function hg(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Zr(yh):a=wh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function ug(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||bh,r[a])}function dg(i){switch(i){case 5126:return q0;case 35664:return Z0;case 35665:return K0;case 35666:return $0;case 35674:return J0;case 35675:return Q0;case 35676:return j0;case 5124:case 35670:return tg;case 35667:case 35671:return eg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}class fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Y0(e.type)}}class pg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dg(e.type)}}class mg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const nl=/(\w+)(\])?(\[|\.)?/g;function Lh(i,t){i.seq.push(t),i.map[t.id]=t}function gg(i,t,e){const n=i.name,s=n.length;for(nl.lastIndex=0;;){const r=nl.exec(n),a=nl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lh(e,c===void 0?new fg(o,i,t):new pg(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new mg(o),Lh(e,u)),e=u}}}class Kr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);gg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Dh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const xg=37297;let _g=0;function vg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ih=new Bt;function Mg(i){Qt._getMatrix(Ih,Qt.workingColorSpace,i);const t=`mat3( ${Ih.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case fr:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+vg(i.getShaderSource(t),o)}else return r}function Sg(i,t){const e=Mg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const yg={[Hl]:"Linear",[Vl]:"Reinhard",[Wl]:"Cineon",[Xl]:"ACESFilmic",[ql]:"AgX",[Aa]:"Neutral",[Yl]:"Custom"};function bg(i,t){const e=yg[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $r=new W;function Eg(){Qt.getLuminanceCoefficients($r);const i=$r.x.toFixed(4),t=$r.y.toFixed(4),e=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function Tg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ag(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ys(i){return i!==""}function Uh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Fh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(i){return i.replace(Rg,Cg)}function Cg(i,t){const e=Ht[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return il(e)}const Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(i){return i.replace(Pg,Lg)}function Lg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Dg={[vs]:"SHADOWMAP_TYPE_PCF",[Ms]:"SHADOWMAP_TYPE_VSM"};function Ig(i){return Dg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ng={[bs]:"ENVMAP_MODE_REFRACTION"};function Ug(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ng[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Fg={[ir]:"ENVMAP_BLENDING_MULTIPLY",[md]:"ENVMAP_BLENDING_MIX",[gd]:"ENVMAP_BLENDING_ADD"};function Og(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Fg[i.combine]||"ENVMAP_BLENDING_NONE"}function zg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Ig(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Ug(e),u=Og(e),f=wg(e),d=Tg(r),p=s.createProgram();let _,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ys).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ys).join(`
`),m.length>0&&(m+=`
`)):(_=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),m=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Wn?bg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Sg("linearToOutputTexel",e.outputColorSpace),Eg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ys).join(`
`)),a=il(a),a=Uh(a,e),a=Fh(a,e),o=il(o),o=Uh(o,e),o=Fh(o,e),a=Oh(a),o=Oh(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=g+_+a,x=g+m+o,M=Dh(s,s.VERTEX_SHADER,S),E=Dh(s,s.FRAGMENT_SHADER,x);s.attachShader(p,M),s.attachShader(p,E),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function b(w){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(p)||"",L=s.getShaderInfoLog(M)||"",U=s.getShaderInfoLog(E)||"",P=C.trim(),B=L.trim(),F=U.trim();let k=!0,H=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,M,E);else{const z=Nh(s,M,"vertex"),N=Nh(s,E,"fragment");se("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+P+`
`+z+`
`+N)}else P!==""?zt("WebGLProgram: Program Info Log:",P):(B===""||F==="")&&(H=!1);H&&(w.diagnostics={runnable:k,programLog:P,vertexShader:{log:B,prefix:_},fragmentShader:{log:F,prefix:m}})}s.deleteShader(M),s.deleteShader(E),v=new Kr(s,p),y=Ag(s,p)}let v;this.getUniforms=function(){return v===void 0&&b(this),v};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(p,xg)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_g++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=E,this}let Bg=0;class Gg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new kg(t),e.set(t,n)),n}}class kg{constructor(t){this.id=Bg++,this.code=t,this.usedTimes=0}}function Hg(i){return i===ci||i===hr||i===ur}function Vg(i,t,e,n,s,r){const a=new yo,o=new Gg,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,y,T,w,C,L){const U=w.fog,P=C.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,k=t.get(v.envMap||B,F),H=f[v.type];let z=n.precision;v.precision!==null&&(z=n.getMaxPrecision(v.precision),z!==v.precision&&zt("WebGLProgram.getParameters:",v.precision,"not supported, using",z,"instead."));const N=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,D=N!==void 0?N.length:0;let Y=0;P.morphAttributes.position!==void 0&&(Y=1),P.morphAttributes.normal!==void 0&&(Y=2),P.morphAttributes.color!==void 0&&(Y=3);let it,q,et,$;if(H){const Et=zn[H];it=Et.vertexShader,q=Et.fragmentShader}else{it=v.vertexShader,q=v.fragmentShader;const Et=o.getVertexShaderStage(v),ce=o.getFragmentShaderStage(v);o.update(v,Et,ce),et=Et.id,$=ce.id}const tt=i.getRenderTarget(),K=i.state.buffers.depth.getReversed(),ut=C.isInstancedMesh===!0,yt=C.isBatchedMesh===!0,ft=!!v.map,Dt=!!v.matcap,Nt=!!k,Ut=Nt&&k.isPMREMTexture===!0,Kt=!!v.aoMap,Yt=!!v.lightMap,ae=!!v.bumpMap&&v.wireframe===!1,jt=!!v.normalMap,ye=!!v.displacementMap,_e=!!v.emissiveMap,ze=!!v.metalnessMap,Be=!!v.roughnessMap,ve=v.anisotropy>0,X=v.clearcoat>0,mn=v.diffuseRoughness>0,pe=v.dispersion>0,me=v.retroreflectivity>0,St=v.iridescence>0,Ne=v.sheen>0,Ot=v.transmission>0,Gt=ve&&!!v.anisotropyMap,I=X&&!!v.clearcoatMap,A=X&&!!v.clearcoatNormalMap,Q=X&&!!v.clearcoatRoughnessMap,ct=mn&&!!v.diffuseRoughnessMap,lt=St&&!!v.iridescenceMap,pt=St&&!!v.iridescenceThicknessMap,vt=Ne&&!!v.sheenColorMap,rt=Ne&&!!v.sheenRoughnessMap,at=!!v.specularMap,gt=!!v.specularColorMap,O=!!v.specularIntensityMap,ot=Ot&&!!v.transmissionMap,st=Ot&&!!v.thicknessMap,xt=!!v.gradientMap,dt=!!v.alphaMap,mt=v.alphaTest>0,It=!!v.alphaHash,Wt=!!v.extensions;let ht=Wn;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(ht=i.toneMapping);const Ft=Ut?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Vt={shaderID:H,shaderType:v.type,shaderName:v.name,vertexShader:it,fragmentShader:q,defines:v.defines,customVertexShaderID:et,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:z,batching:yt,batchingColor:yt&&C._colorsTexture!==null,instancing:ut,instancingColor:ut&&C.instanceColor!==null,instancingMorph:ut&&C.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ft,matcap:Dt,envMap:Nt,envMapMode:Nt&&k.mapping,envMapPMREM:Ut,envMapMaxLod:Ut?Ft.length-1:null,envMapSize:Ut?Ft[0].width:null,aoMap:Kt,lightMap:Yt,bumpMap:ae,normalMap:jt,displacementMap:ye,emissiveMap:_e,normalMapObjectSpace:jt&&v.normalMapType===vd,normalMapTangentSpace:jt&&v.normalMapType===ki,packedNormalMap:jt&&v.normalMapType===ki&&Hg(v.normalMap.format),metalnessMap:ze,roughnessMap:Be,anisotropy:ve,anisotropyMap:Gt,clearcoat:X,clearcoatMap:I,clearcoatNormalMap:A,clearcoatRoughnessMap:Q,diffuseRoughness:mn,diffuseRoughnessMap:ct,dispersion:pe,retroreflection:me,iridescence:St,iridescenceMap:lt,iridescenceThicknessMap:pt,sheen:Ne,sheenColorMap:vt,sheenRoughnessMap:rt,specularMap:at,specularColorMap:gt,specularIntensityMap:O,transmission:Ot,transmissionMap:ot,thicknessMap:st,gradientMap:xt,opaque:v.transparent===!1&&v.blending===Ss&&v.alphaToCoverage===!1,alphaMap:dt,alphaTest:mt,alphaHash:It,combine:v.combine,mapUv:ft&&d(v.map.channel),aoMapUv:Kt&&d(v.aoMap.channel),lightMapUv:Yt&&d(v.lightMap.channel),bumpMapUv:ae&&d(v.bumpMap.channel),normalMapUv:jt&&d(v.normalMap.channel),displacementMapUv:ye&&d(v.displacementMap.channel),emissiveMapUv:_e&&d(v.emissiveMap.channel),metalnessMapUv:ze&&d(v.metalnessMap.channel),roughnessMapUv:Be&&d(v.roughnessMap.channel),anisotropyMapUv:Gt&&d(v.anisotropyMap.channel),clearcoatMapUv:I&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:A&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&d(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ct&&d(v.diffuseRoughnessMap.channel),iridescenceMapUv:lt&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:rt&&d(v.sheenRoughnessMap.channel),specularMapUv:at&&d(v.specularMap.channel),specularColorMapUv:gt&&d(v.specularColorMap.channel),specularIntensityMapUv:O&&d(v.specularIntensityMap.channel),transmissionMapUv:ot&&d(v.transmissionMap.channel),thicknessMapUv:st&&d(v.thicknessMap.channel),alphaMapUv:dt&&d(v.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(jt||ve),vertexNormals:!!P.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!P.attributes.uv&&(ft||dt),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||P.attributes.normal===void 0&&jt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:K,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:Y,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:L.filter(Et=>Et.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:ft&&v.map.isVideoTexture===!0&&Qt.getTransfer(v.map.colorSpace)===le,decodeVideoTextureEmissive:_e&&v.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(v.emissiveMap.colorSpace)===le,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Re,flipSided:v.side===$e,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Wt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&v.extensions.multiDraw===!0||yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function _(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const T in v.defines)y.push(T),y.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(m(y,v),g(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function m(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapPMREM),v.push(y.envMapMaxLod),v.push(y.envMapSize),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.diffuseRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.numSunLights),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numSunLightShadows),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.numLightProbeGrids),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function g(v,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function S(v){const y=f[v.type];let T;if(y){const w=zn[y];T=zf.clone(w.uniforms)}else T=v.uniforms;return T}function x(v,y){let T=h.get(y);return T!==void 0?++T.usedTimes:(T=new zg(i,y,v,s),c.push(T),h.set(y,T)),T}function M(v){if(--v.usedTimes===0){const y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function b(){o.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:S,acquireProgram:x,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:b}}function Wg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Xg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Bh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,p,_,m,g){let S=i[t];return S===void 0?(S={id:f.id,object:f,geometry:d,material:p,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},i[t]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=p,S.materialVariant=a(f),S.groupOrder=_,S.renderOrder=f.renderOrder,S.z=m,S.group=g),t++,S}function l(f,d,p,_,m,g,S){S.reversedDepth===!0&&(m=-m);const x=o(f,d,p,_,m,g);p.transmission>0?n.push(x):p.transparent===!0?s.push(x):e.push(x)}function c(f,d,p,_,m,g){const S=o(f,d,p,_,m,g);p.transmission>0?n.unshift(S):p.transparent===!0?s.unshift(S):e.unshift(S)}function h(f,d){e.length>1&&e.sort(f||Xg),n.length>1&&n.sort(d||Bh),s.length>1&&s.sort(d||Bh)}function u(){for(let f=t,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Yg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Gh,i.set(n,[a])):s>=r.length?(a=new Gh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function qg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new Tt};break;case"SpotLight":e={position:new W,direction:new W,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function Zg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Kg=0;function $g(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Jg(i){const t=new qg,e=Zg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const s=new W,r=new ne,a=new ne;function o(c){let h=0,u=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,S=0,x=0,M=0,E=0,b=0,v=0,y=0,T=0,w=0;c.sort($g);for(let L=0,U=c.length;L<U;L++){const P=c[L],B=P.color,F=P.intensity,k=P.distance;let H=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ci?H=P.shadow.map.texture:H=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=B.r*F,u+=B.g*F,f+=B.b*F;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],F);w++}else if(P.isSunLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const N=P.shadow,D=e.get(P);D.shadowIntensity=N.intensity,D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize.copy(N.mapSize).multiply(N.getFrameExtents()),n.sunShadow[p]=D,n.sunShadowMap[p]=H;const Y=N.getViewportCount();for(let it=0;it<Y;it++)n.sunShadowMatrix[_+it]=N.getMatrix(it),n.sunShadowCascade[_+it]=N._cascadeData[it];_+=Y,p++}n.sun[d]=z,d++}else if(P.isDirectionalLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const N=P.shadow,D=e.get(P);D.shadowIntensity=N.intensity,D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,n.directionalShadow[m]=D,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=P.shadow.matrix,E++}n.directional[m]=z,m++}else if(P.isSpotLight){const z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(B).multiplyScalar(F),z.distance=k,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[S]=z;const N=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,N.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[S]=N.matrix,P.castShadow){const D=e.get(P);D.shadowIntensity=N.intensity,D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,n.spotShadow[S]=D,n.spotShadowMap[S]=H,v++}S++}else if(P.isRectAreaLight){const z=t.get(P);z.color.copy(B).multiplyScalar(F),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[x]=z,x++}else if(P.isPointLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const N=P.shadow,D=e.get(P);D.shadowIntensity=N.intensity,D.shadowBias=N.bias,D.shadowNormalBias=N.normalBias,D.shadowRadius=N.radius,D.shadowMapSize=N.mapSize,D.shadowCameraNear=N.camera.near,D.shadowCameraFar=N.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=z,g++}else if(P.isHemisphereLight){const z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(F),z.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[M]=z,M++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.sunLength!==d||C.directionalLength!==m||C.pointLength!==g||C.spotLength!==S||C.rectAreaLength!==x||C.hemiLength!==M||C.numSunShadows!==p||C.numDirectionalShadows!==E||C.numPointShadows!==b||C.numSpotShadows!==v||C.numSpotMaps!==y||C.numLightProbes!==w)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=x,n.point.length=g,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,C.sunLength=d,C.directionalLength=m,C.pointLength=g,C.spotLength=S,C.rectAreaLength=x,C.hemiLength=M,C.numSunShadows=p,C.numDirectionalShadows=E,C.numPointShadows=b,C.numSpotShadows=v,C.numSpotMaps=y,C.numLightProbes=w,n.version=Kg++)}function l(c,h){let u=0,f=0,d=0,p=0,_=0,m=0;const g=h.matrixWorldInverse;for(let S=0,x=c.length;S<x;S++){const M=c[S];if(M.isSunLight){const E=n.sun[u];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(g),u++}else if(M.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),f++}else if(M.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),p++}else if(M.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function kh(i){const t=new Jg(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){n.push(u)}function l(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Qg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new kh(i),t.set(s,[o])):r>=a.length?(o=new kh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ex=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],nx=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Hh=new ne,qs=new W,sl=new W;function ix(i,t,e){let n=new Bs;const s=new Pt,r=new Pt,a=new de,o=new Wf,l=new Xf,c={},h=e.maxTextureSize,u={[ai]:$e,[$e]:ai,[Re]:Re},f=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:jg,fragmentShader:tx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Ee;p.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vs;let g=this.type;this.render=function(b,v,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===$u&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vs);const T=i.getRenderTarget(),w=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Oi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=g!==this.type;U&&v.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(B=>B.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,B=b.length;P<B;P++){const F=b[P],k=F.shadow;if(k===void 0){zt("WebGLShadowMap:",F,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const H=k.getFrameExtents();s.multiply(H),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,k.mapSize.y=r.y));const z=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=z,k.map===null||U===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ms){if(F.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Nn(s.x,s.y,{format:ci,type:vn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),k.map.texture.name=F.name+".shadowMap",k.map.depthTexture=new es(s.x,s.y,_n),k.map.depthTexture.name=F.name+".shadowMapDepth",k.map.depthTexture.format=oi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ce,k.map.depthTexture.magFilter=Ce}else F.isPointLight?(k.map=new el(s.x),k.map.depthTexture=new Wc(s.x,Dn)):(k.map=new Nn(s.x,s.y),k.map.depthTexture=new es(s.x,s.y,Dn)),k.map.depthTexture.name=F.name+".shadowMap",k.map.depthTexture.format=oi,this.type===vs?(k.map.depthTexture.compareFunction=z?nc:ec,k.map.depthTexture.minFilter=Xe,k.map.depthTexture.magFilter=Xe):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ce,k.map.depthTexture.magFilter=Ce);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);const N=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();F.isPointLight!==!0&&k.updateMatrices(F,y);const D=k.camera.layers.mask&4294967294?k.camera.layers:y.layers;for(let Y=0;Y<N;Y++){const it=k.getCamera(Y);if(F.isPointLight){const q=k.camera,et=k.matrix,$=F.distance||q.far;$!==q.far&&(q.far=$,q.updateProjectionMatrix()),qs.setFromMatrixPosition(F.matrixWorld),q.position.copy(qs),sl.copy(q.position),sl.add(ex[Y]),q.up.copy(nx[Y]),q.lookAt(sl),q.updateMatrixWorld(),et.makeTranslation(-qs.x,-qs.y,-qs.z),Hh.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Hh,q.coordinateSystem,q.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,Y),i.clear();else{Y===0&&(i.setRenderTarget(k.map),i.clear());const q=k.getViewport(Y);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),L.viewport(a)}n=k.getFrustum(Y),M(v,y,it,F,D,this.type)}k.isPointLightShadow!==!0&&this.type===Ms&&S(k,y),k.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(T,w,C)};function S(b,v){const y=t.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Nn(s.x,s.y,{format:ci,type:vn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(v,null,y,f,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(v,null,y,d,_,null)}function x(b,v,y,T){let w=null;const C=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)w=C;else if(w=y.isPointLight===!0?l:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const L=w.uuid,U=v.uuid;let P=c[L];P===void 0&&(P={},c[L]=P);let B=P[U];B===void 0&&(B=w.clone(),P[U]=B,v.addEventListener("dispose",E)),w=B}if(w.visible=v.visible,w.wireframe=v.wireframe,T===Ms?w.side=v.shadowSide!==null?v.shadowSide:v.side:w.side=v.shadowSide!==null?v.shadowSide:u[v.side],w.alphaMap=v.alphaMap,w.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,w.map=v.map,w.clipShadows=v.clipShadows,w.clippingPlanes=v.clippingPlanes,w.clipIntersection=v.clipIntersection,w.displacementMap=v.displacementMap,w.displacementScale=v.displacementScale,w.displacementBias=v.displacementBias,w.wireframeLinewidth=v.wireframeLinewidth,w.linewidth=v.linewidth,y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const L=i.properties.get(w);L.light=y}return w}function M(b,v,y,T,w,C){if(b.visible===!1)return;if(b.layers.test(w)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===Ms)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const P=t.update(b),B=b.material;if(Array.isArray(B)){const F=P.groups;for(let k=0,H=F.length;k<H;k++){const z=F[k],N=B[z.materialIndex];if(N&&N.visible){const D=x(b,N,T,C);b.onBeforeShadow(i,b,v,y,P,D,z),i.renderBufferDirect(y,null,P,D,b,z),b.onAfterShadow(i,b,v,y,P,D,z)}}}else if(B.visible){const F=x(b,B,T,C);b.onBeforeShadow(i,b,v,y,P,F,null),i.renderBufferDirect(y,null,P,F,b,null),b.onAfterShadow(i,b,v,y,P,F,null)}}const U=b.children;for(let P=0,B=U.length;P<B;P++)M(U[P],v,y,T,w,C)}function E(b){b.target.removeEventListener("dispose",E);for(const y in c){const T=c[y],w=b.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}function sx(i,t){function e(){let O=!1;const ot=new de;let st=null;const xt=new de(0,0,0,0);return{setMask:function(dt){st!==dt&&!O&&(i.colorMask(dt,dt,dt,dt),st=dt)},setLocked:function(dt){O=dt},setClear:function(dt,mt,It,Wt,ht){ht===!0&&(dt*=Wt,mt*=Wt,It*=Wt),ot.set(dt,mt,It,Wt),xt.equals(ot)===!1&&(i.clearColor(dt,mt,It,Wt),xt.copy(ot))},reset:function(){O=!1,st=null,xt.set(-1,0,0,0)}}}function n(){let O=!1,ot=!1,st=null,xt=null,dt=null;return{setReversed:function(mt){if(ot!==mt){const It=t.get("EXT_clip_control");mt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ot=mt;const Wt=dt;dt=null,this.setClear(Wt)}},getReversed:function(){return ot},setTest:function(mt){mt?K(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(mt){st!==mt&&!O&&(i.depthMask(mt),st=mt)},setFunc:function(mt){if(ot&&(mt=Pd[mt]),xt!==mt){switch(mt){case Ma:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case ya:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case ba:i.depthFunc(i.EQUAL);break;case Ea:i.depthFunc(i.GEQUAL);break;case wa:i.depthFunc(i.GREATER);break;case Ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=mt}},setLocked:function(mt){O=mt},setClear:function(mt){dt!==mt&&(dt=mt,ot&&(mt=1-mt),i.clearDepth(mt))},reset:function(){O=!1,st=null,xt=null,dt=null,ot=!1}}}function s(){let O=!1,ot=null,st=null,xt=null,dt=null,mt=null,It=null,Wt=null,ht=null;return{setTest:function(Ft){O||(Ft?K(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(Ft){ot!==Ft&&!O&&(i.stencilMask(Ft),ot=Ft)},setFunc:function(Ft,Vt,Et){(st!==Ft||xt!==Vt||dt!==Et)&&(i.stencilFunc(Ft,Vt,Et),st=Ft,xt=Vt,dt=Et)},setOp:function(Ft,Vt,Et){(mt!==Ft||It!==Vt||Wt!==Et)&&(i.stencilOp(Ft,Vt,Et),mt=Ft,It=Vt,Wt=Et)},setLocked:function(Ft){O=Ft},setClear:function(Ft){ht!==Ft&&(i.clearStencil(Ft),ht=Ft)},reset:function(){O=!1,ot=null,st=null,xt=null,dt=null,mt=null,It=null,Wt=null,ht=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let h={},u={},f={},d=new WeakMap,p=[],_=null,m=!1,g=null,S=null,x=null,M=null,E=null,b=null,v=null,y=new Tt(0,0,0),T=0,w=!1,C=null,L=null,U=null,P=null,B=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,H=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(z)[1]),k=H>=1):z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),k=H>=2);let N=null,D={};const Y=i.getParameter(i.SCISSOR_BOX),it=i.getParameter(i.VIEWPORT),q=new de().fromArray(Y),et=new de().fromArray(it);function $(O,ot,st,xt){const dt=new Uint8Array(4),mt=i.createTexture();i.bindTexture(O,mt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<st;It++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(ot+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return mt}const tt={};tt[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(ys),ae(!1),jt(Ol),K(i.CULL_FACE),Kt(Oi);function K(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ut(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function yt(O,ot){return f[O]!==ot?(i.bindFramebuffer(O,ot),f[O]=ot,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ot),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function ft(O,ot){let st=p,xt=!1;if(O){st=d.get(ot),st===void 0&&(st=[],d.set(ot,st));const dt=O.textures;if(st.length!==dt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,It=dt.length;mt<It;mt++)st[mt]=i.COLOR_ATTACHMENT0+mt;st.length=dt.length,xt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,xt=!0);xt&&i.drawBuffers(st)}function Dt(O){return _!==O?(i.useProgram(O),_=O,!0):!1}const Nt={[zi]:i.FUNC_ADD,[Qu]:i.FUNC_SUBTRACT,[ju]:i.FUNC_REVERSE_SUBTRACT};Nt[td]=i.MIN,Nt[ed]=i.MAX;const Ut={[nd]:i.ZERO,[id]:i.ONE,[sd]:i.SRC_COLOR,[Gl]:i.SRC_ALPHA,[hd]:i.SRC_ALPHA_SATURATE,[ld]:i.DST_COLOR,[ad]:i.DST_ALPHA,[rd]:i.ONE_MINUS_SRC_COLOR,[kl]:i.ONE_MINUS_SRC_ALPHA,[cd]:i.ONE_MINUS_DST_COLOR,[od]:i.ONE_MINUS_DST_ALPHA,[ud]:i.CONSTANT_COLOR,[dd]:i.ONE_MINUS_CONSTANT_COLOR,[fd]:i.CONSTANT_ALPHA,[pd]:i.ONE_MINUS_CONSTANT_ALPHA};function Kt(O,ot,st,xt,dt,mt,It,Wt,ht,Ft){if(O===Oi){m===!0&&(ut(i.BLEND),m=!1);return}if(m===!1&&(K(i.BLEND),m=!0),O!==Ju){if(O!==g||Ft!==w){if((S!==zi||E!==zi)&&(i.blendEquation(i.FUNC_ADD),S=zi,E=zi),Ft)switch(O){case Ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case va:i.blendFunc(i.ONE,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:se("WebGLState: Invalid blending: ",O);break}else switch(O){case Ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case va:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zl:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bl:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",O);break}x=null,M=null,b=null,v=null,y.set(0,0,0),T=0,g=O,w=Ft}return}dt=dt||ot,mt=mt||st,It=It||xt,(ot!==S||dt!==E)&&(i.blendEquationSeparate(Nt[ot],Nt[dt]),S=ot,E=dt),(st!==x||xt!==M||mt!==b||It!==v)&&(i.blendFuncSeparate(Ut[st],Ut[xt],Ut[mt],Ut[It]),x=st,M=xt,b=mt,v=It),(Wt.equals(y)===!1||ht!==T)&&(i.blendColor(Wt.r,Wt.g,Wt.b,ht),y.copy(Wt),T=ht),g=O,w=!1}function Yt(O,ot){O.side===Re?ut(i.CULL_FACE):K(i.CULL_FACE);let st=O.side===$e;ot&&(st=!st),ae(st),O.blending===Ss&&O.transparent===!1?Kt(Oi):Kt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const xt=O.stencilWrite;o.setTest(xt),xt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),_e(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(O){C!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),C=O)}function jt(O){O!==Zu?(K(i.CULL_FACE),O!==L&&(O===Ol?i.cullFace(i.BACK):O===Ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),L=O}function ye(O){O!==U&&(k&&i.lineWidth(O),U=O)}function _e(O,ot,st){O?(K(i.POLYGON_OFFSET_FILL),(P!==ot||B!==st)&&(P=ot,B=st,a.getReversed()&&(ot=-ot,st=-st),i.polygonOffset(ot,st))):ut(i.POLYGON_OFFSET_FILL)}function ze(O){O?K(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function Be(O){O===void 0&&(O=i.TEXTURE0+F-1),N!==O&&(i.activeTexture(O),N=O)}function ve(O,ot,st){st===void 0&&(N===null?st=i.TEXTURE0+F-1:st=N);let xt=D[st];xt===void 0&&(xt={type:void 0,texture:void 0},D[st]=xt),(xt.type!==O||xt.texture!==ot)&&(N!==st&&(i.activeTexture(st),N=st),i.bindTexture(O,ot||tt[O]),xt.type=O,xt.texture=ot)}function X(){const O=D[N];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function mn(){try{i.compressedTexImage2D(...arguments)}catch(O){se("WebGLState:",O)}}function pe(){try{i.compressedTexImage3D(...arguments)}catch(O){se("WebGLState:",O)}}function me(){try{i.texSubImage2D(...arguments)}catch(O){se("WebGLState:",O)}}function St(){try{i.texSubImage3D(...arguments)}catch(O){se("WebGLState:",O)}}function Ne(){try{i.compressedTexSubImage2D(...arguments)}catch(O){se("WebGLState:",O)}}function Ot(){try{i.compressedTexSubImage3D(...arguments)}catch(O){se("WebGLState:",O)}}function Gt(){try{i.texStorage2D(...arguments)}catch(O){se("WebGLState:",O)}}function I(){try{i.texStorage3D(...arguments)}catch(O){se("WebGLState:",O)}}function A(){try{i.texImage2D(...arguments)}catch(O){se("WebGLState:",O)}}function Q(){try{i.texImage3D(...arguments)}catch(O){se("WebGLState:",O)}}function ct(O){return u[O]!==void 0?u[O]:i.getParameter(O)}function lt(O,ot){u[O]!==ot&&(i.pixelStorei(O,ot),u[O]=ot)}function pt(O){q.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),q.copy(O))}function vt(O){et.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),et.copy(O))}function rt(O,ot){let st=c.get(ot);st===void 0&&(st=new WeakMap,c.set(ot,st));let xt=st.get(O);xt===void 0&&(xt=i.getUniformBlockIndex(ot,O.name),i.uniformBlockBinding(ot,xt,xt),st.set(O,xt))}function at(O,ot,st){const dt=c.get(ot).get(O);l[dt]!==st&&(i.bindBufferBase(i.UNIFORM_BUFFER,dt,st),l[dt]=st)}function gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},N=null,D={},f={},l={},d=new WeakMap,p=[],_=null,m=!1,g=null,S=null,x=null,M=null,E=null,b=null,v=null,y=new Tt(0,0,0),T=0,w=!1,C=null,L=null,U=null,P=null,B=null,q.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:ut,bindFramebuffer:yt,drawBuffers:ft,useProgram:Dt,setBlending:Kt,setMaterial:Yt,setFlipSided:ae,setCullFace:jt,setLineWidth:ye,setPolygonOffset:_e,setScissorTest:ze,activeTexture:Be,bindTexture:ve,unbindTexture:X,compressedTexImage2D:mn,compressedTexImage3D:pe,texImage2D:A,texImage3D:Q,pixelStorei:lt,getParameter:ct,updateUBOMapping:rt,uniformBlockBinding:at,texStorage2D:Gt,texStorage3D:I,texSubImage2D:me,texSubImage3D:St,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Ot,scissor:pt,viewport:vt,reset:gt}}function rx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap,u=new Set;let f;const d=new WeakMap,p=new Set,_=new FinalizationRegistry(I=>p.delete(I));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,A){return m?new OffscreenCanvas(I,A):Rs("canvas")}function S(I,A,Q){let ct=1;const lt=Gt(I);if((lt.width>Q||lt.height>Q)&&(ct=Q/Math.max(lt.width,lt.height)),ct<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const pt=Math.floor(ct*lt.width),vt=Math.floor(ct*lt.height);f===void 0&&(f=g(pt,vt));const rt=A?g(pt,vt):f;return rt.width=pt,rt.height=vt,rt.getContext("2d").drawImage(I,0,0,pt,vt),zt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+pt+"x"+vt+")."),rt}else return"data"in I&&zt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),I;return I}function x(I){return I.generateMipmaps}function M(I){i.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(I,A,Q,ct,lt,pt=!1){if(I!==null){if(i[I]!==void 0)return i[I];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let vt;ct&&(vt=t.get("EXT_texture_norm16"),vt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=A;if(A===i.RED&&(Q===i.FLOAT&&(rt=i.R32F),Q===i.HALF_FLOAT&&(rt=i.R16F),Q===i.UNSIGNED_BYTE&&(rt=i.R8),Q===i.UNSIGNED_SHORT&&vt&&(rt=vt.R16_EXT),Q===i.SHORT&&vt&&(rt=vt.R16_SNORM_EXT)),A===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(rt=i.R8UI),Q===i.UNSIGNED_SHORT&&(rt=i.R16UI),Q===i.UNSIGNED_INT&&(rt=i.R32UI),Q===i.BYTE&&(rt=i.R8I),Q===i.SHORT&&(rt=i.R16I),Q===i.INT&&(rt=i.R32I)),A===i.RG&&(Q===i.FLOAT&&(rt=i.RG32F),Q===i.HALF_FLOAT&&(rt=i.RG16F),Q===i.UNSIGNED_BYTE&&(rt=i.RG8),Q===i.UNSIGNED_SHORT&&vt&&(rt=vt.RG16_EXT),Q===i.SHORT&&vt&&(rt=vt.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(rt=i.RG8UI),Q===i.UNSIGNED_SHORT&&(rt=i.RG16UI),Q===i.UNSIGNED_INT&&(rt=i.RG32UI),Q===i.BYTE&&(rt=i.RG8I),Q===i.SHORT&&(rt=i.RG16I),Q===i.INT&&(rt=i.RG32I)),A===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),Q===i.UNSIGNED_INT&&(rt=i.RGB32UI),Q===i.BYTE&&(rt=i.RGB8I),Q===i.SHORT&&(rt=i.RGB16I),Q===i.INT&&(rt=i.RGB32I)),A===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),Q===i.UNSIGNED_INT&&(rt=i.RGBA32UI),Q===i.BYTE&&(rt=i.RGBA8I),Q===i.SHORT&&(rt=i.RGBA16I),Q===i.INT&&(rt=i.RGBA32I)),A===i.RGB&&(Q===i.UNSIGNED_SHORT&&vt&&(rt=vt.RGB16_EXT),Q===i.SHORT&&vt&&(rt=vt.RGB16_SNORM_EXT),Q===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),A===i.RGBA){const at=pt?fr:Qt.getTransfer(lt);Q===i.FLOAT&&(rt=i.RGBA32F),Q===i.HALF_FLOAT&&(rt=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(rt=at===le?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT&&vt&&(rt=vt.RGBA16_EXT),Q===i.SHORT&&vt&&(rt=vt.RGBA16_SNORM_EXT),Q===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function v(I,A){let Q;return I?A===null||A===Dn||A===Gi?Q=i.DEPTH24_STENCIL8:A===_n?Q=i.DEPTH32F_STENCIL8:A===ws&&(Q=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Dn||A===Gi?Q=i.DEPTH_COMPONENT24:A===_n?Q=i.DEPTH_COMPONENT32F:A===ws&&(Q=i.DEPTH_COMPONENT16),Q}function y(I,A){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ce&&I.minFilter!==Xe?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function T(I){const A=new WeakRef(I);n.get(I).__ref=A,p.add(A),_.register(I,A,A)}function w(I){const A=n.get(I).__ref;A!==void 0&&(p.delete(A),_.unregister(A))}function C(I){U(I.target)}function L(I){P(I.target)}function U(I){I.removeEventListener("dispose",C),w(I),F(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function P(I){I.removeEventListener("dispose",L),w(I),H(I)}function B(){for(const I of p){const A=I.deref();A!==void 0&&(A.isRenderTarget===!0?P(A):U(A))}p.clear(),u.clear()}function F(I){const A=n.get(I);if(A.__webglInit===void 0)return;const Q=I.source,ct=d.get(Q);if(ct){const lt=ct[A.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&k(I),Object.keys(ct).length===0&&d.delete(Q)}n.remove(I)}function k(I){const A=n.get(I);i.deleteTexture(A.__webglTexture);const Q=I.source,ct=d.get(Q);delete ct[A.__cacheKey],a.memory.textures--}function H(I){const A=n.get(I);A.__depthDisposeCallback&&A.__depthDisposeCallback();const Q=I.depthTexture;if(Q&&Q.renderTarget===I&&U(Q),I.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(A.__webglFramebuffer[lt]))for(let pt=0;pt<A.__webglFramebuffer[lt].length;pt++)i.deleteFramebuffer(A.__webglFramebuffer[lt][pt]);else i.deleteFramebuffer(A.__webglFramebuffer[lt]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[lt])}else{if(Array.isArray(A.__webglFramebuffer))for(let lt=0;lt<A.__webglFramebuffer.length;lt++)i.deleteFramebuffer(A.__webglFramebuffer[lt]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let lt=0;lt<A.__webglColorRenderbuffer.length;lt++)A.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[lt]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ct=I.textures;for(let lt=0,pt=ct.length;lt<pt;lt++){const vt=n.get(ct[lt]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(ct[lt])}n.remove(I)}let z=0;function N(){z=0}function D(){return z}function Y(I){z=I}function it(){const I=z;return I>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,I}function q(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.mipmapsAutoUpdate),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function et(I,A){const Q=n.get(I);if(I.isVideoTexture&&Ne(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Q.__version!==I.version){const ct=I.image;if(ct===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(Q,I,A);return}}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+A)}function $(I,A){const Q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){Yt(Q,I,A);return}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+A)}function tt(I,A){const Q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){Yt(Q,I,A);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+A)}function K(I,A){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){ae(Q,I,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+A)}const ut={[Es]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[Pa]:i.MIRRORED_REPEAT},yt={[Ce]:i.NEAREST,[xd]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[La]:i.LINEAR_MIPMAP_NEAREST,[xn]:i.LINEAR_MIPMAP_LINEAR},ft={[Sd]:i.NEVER,[ic]:i.ALWAYS,[yd]:i.LESS,[ec]:i.LEQUAL,[bd]:i.EQUAL,[nc]:i.GEQUAL,[Ed]:i.GREATER,[wd]:i.NOTEQUAL};function Dt(I,A){if(A.type===_n&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Xe||A.magFilter===La||A.magFilter===sr||A.magFilter===xn||A.minFilter===Xe||A.minFilter===La||A.minFilter===sr||A.minFilter===xn)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ut[A.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ut[A.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ut[A.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,yt[A.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,yt[A.minFilter]),A.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ft[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ce||A.minFilter!==sr&&A.minFilter!==xn||A.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Nt(I,A){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",C),T(A));const ct=A.source;let lt=d.get(ct);lt===void 0&&(lt={},d.set(ct,lt));const pt=q(A);if(pt!==I.__cacheKey){lt[pt]===void 0&&(lt[pt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),lt[pt].usedTimes++;const vt=lt[I.__cacheKey];vt!==void 0&&(lt[I.__cacheKey].usedTimes--,vt.usedTimes===0&&k(A)),I.__cacheKey=pt,I.__webglTexture=lt[pt].texture}return Q}function Ut(I,A,Q){return Math.floor(Math.floor(I/Q)/A)}function Kt(I,A,Q,ct){const pt=I.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,Q,ct,A.data);else{pt.sort((O,ot)=>O.start-ot.start);let vt=0;for(let O=1;O<pt.length;O++){const ot=pt[vt],st=pt[O],xt=ot.start+ot.count,dt=Ut(st.start,A.width,4),mt=Ut(ot.start,A.width,4);st.start<=xt+1&&dt===mt&&Ut(st.start+st.count-1,A.width,4)===dt?ot.count=Math.max(ot.count,st.start+st.count-ot.start):(++vt,pt[vt]=st)}pt.length=vt+1;const rt=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let O=0,ot=pt.length;O<ot;O++){const st=pt[O],xt=Math.floor(st.start/4),dt=Math.ceil(st.count/4),mt=xt%A.width,It=Math.floor(xt/A.width),Wt=dt,ht=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(i.UNPACK_SKIP_ROWS,It),e.texSubImage2D(i.TEXTURE_2D,0,mt,It,Wt,ht,Q,ct,A.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,rt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function Yt(I,A,Q){let ct=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ct=i.TEXTURE_3D);const lt=Nt(I,A),pt=A.source;e.bindTexture(ct,I.__webglTexture,i.TEXTURE0+Q);const vt=n.get(pt);if(pt.version!==vt.__version||lt===!0){if(e.activeTexture(i.TEXTURE0+Q),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const ht=Qt.getPrimaries(Qt.workingColorSpace),Ft=A.colorSpace===hi?null:Qt.getPrimaries(A.colorSpace),Vt=A.colorSpace===hi||ht===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let at=S(A.image,!1,s.maxTextureSize);at=Ot(A,at);const gt=r.convert(A.format,A.colorSpace),O=r.convert(A.type);let ot=b(A.internalFormat,gt,O,A.normalized,A.colorSpace,A.isVideoTexture);Dt(ct,A);let st;const xt=A.mipmaps,dt=A.isVideoTexture!==!0,mt=vt.__version===void 0||lt===!0,It=pt.dataReady,Wt=y(A,at);if(A.isDepthTexture)ot=v(A.format===li,A.type),mt&&(dt?e.texStorage2D(i.TEXTURE_2D,1,ot,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,ot,at.width,at.height,0,gt,O,null));else if(A.isDataTexture)if(xt.length>0){dt&&mt&&e.texStorage2D(i.TEXTURE_2D,Wt,ot,xt[0].width,xt[0].height);for(let ht=0,Ft=xt.length;ht<Ft;ht++)st=xt[ht],dt?It&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,st.width,st.height,gt,O,st.data):e.texImage2D(i.TEXTURE_2D,ht,ot,st.width,st.height,0,gt,O,st.data);A.generateMipmaps=!1}else dt?(mt&&e.texStorage2D(i.TEXTURE_2D,Wt,ot,at.width,at.height),It&&Kt(A,at,gt,O)):e.texImage2D(i.TEXTURE_2D,0,ot,at.width,at.height,0,gt,O,at.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){dt&&mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,ot,xt[0].width,xt[0].height,at.depth);for(let ht=0,Ft=xt.length;ht<Ft;ht++)if(st=xt[ht],A.format!==In)if(gt!==null)if(dt){if(It)if(A.layerUpdates.size>0){const Vt=uh(st.width,st.height,A.format,A.type);for(const Et of A.layerUpdates){const ce=st.data.subarray(Et*Vt/st.data.BYTES_PER_ELEMENT,(Et+1)*Vt/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,Et,st.width,st.height,1,gt,ce)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,st.width,st.height,at.depth,gt,st.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,ot,st.width,st.height,at.depth,0,st.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?It&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,st.width,st.height,at.depth,gt,O,st.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,ot,st.width,st.height,at.depth,0,gt,O,st.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{dt&&mt&&e.texStorage2D(i.TEXTURE_2D,Wt,ot,xt[0].width,xt[0].height);for(let ht=0,Ft=xt.length;ht<Ft;ht++)st=xt[ht],A.format!==In?gt!==null?dt?It&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,st.width,st.height,gt,st.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,ot,st.width,st.height,0,st.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?It&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,st.width,st.height,gt,O,st.data):e.texImage2D(i.TEXTURE_2D,ht,ot,st.width,st.height,0,gt,O,st.data)}else if(A.isDataArrayTexture)if(dt){if(mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,ot,at.width,at.height,at.depth),It)if(A.layerUpdates.size>0){const ht=uh(at.width,at.height,A.format,A.type);for(const Ft of A.layerUpdates){const Vt=at.data.subarray(Ft*ht/at.data.BYTES_PER_ELEMENT,(Ft+1)*ht/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ft,at.width,at.height,1,gt,O,Vt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,gt,O,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ot,at.width,at.height,at.depth,0,gt,O,at.data);else if(A.isData3DTexture)dt?(mt&&e.texStorage3D(i.TEXTURE_3D,Wt,ot,at.width,at.height,at.depth),It&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,gt,O,at.data)):e.texImage3D(i.TEXTURE_3D,0,ot,at.width,at.height,at.depth,0,gt,O,at.data);else if(A.isFramebufferTexture){if(mt)if(dt)e.texStorage2D(i.TEXTURE_2D,Wt,ot,at.width,at.height);else{let ht=at.width,Ft=at.height;for(let Vt=0;Vt<Wt;Vt++)e.texImage2D(i.TEXTURE_2D,Vt,ot,ht,Ft,0,gt,O,null),ht>>=1,Ft>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const ht=i.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),at.parentNode!==ht){ht.appendChild(at),u.add(A),ht.onpaint=Ft=>{const Vt=Ft.changedElements;for(const Et of u)Vt.includes(Et.image)&&(Et.needsUpdate=!0)},ht.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{const Vt=i.RGBA,Et=i.RGBA,ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Vt,Et,ce,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(xt.length>0){if(dt&&mt){const ht=Gt(xt[0]);e.texStorage2D(i.TEXTURE_2D,Wt,ot,ht.width,ht.height)}for(let ht=0,Ft=xt.length;ht<Ft;ht++)st=xt[ht],dt?It&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,gt,O,st):e.texImage2D(i.TEXTURE_2D,ht,ot,gt,O,st);A.generateMipmaps=!1}else if(dt){if(mt){const ht=Gt(at);e.texStorage2D(i.TEXTURE_2D,Wt,ot,ht.width,ht.height)}It&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,O,at)}else e.texImage2D(i.TEXTURE_2D,0,ot,gt,O,at);x(A)&&A.mipmapsAutoUpdate===!0&&M(ct),vt.__version=pt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function ae(I,A,Q){if(A.image.length!==6)return;const ct=Nt(I,A),lt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Q);const pt=n.get(lt);if(lt.version!==pt.__version||ct===!0){e.activeTexture(i.TEXTURE0+Q);const vt=Qt.getPrimaries(Qt.workingColorSpace),rt=A.colorSpace===hi?null:Qt.getPrimaries(A.colorSpace),at=A.colorSpace===hi||vt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const gt=A.isCompressedTexture||A.image[0].isCompressedTexture,O=A.image[0]&&A.image[0].isDataTexture,ot=[];for(let Et=0;Et<6;Et++)!gt&&!O?ot[Et]=S(A.image[Et],!0,s.maxCubemapSize):ot[Et]=O?A.image[Et].image:A.image[Et],ot[Et]=Ot(A,ot[Et]);const st=ot[0],xt=r.convert(A.format,A.colorSpace),dt=r.convert(A.type);let mt=b(A.internalFormat,xt,dt,A.normalized,A.colorSpace);const It=A.isVideoTexture!==!0,Wt=pt.__version===void 0||ct===!0,ht=lt.dataReady;let Ft=y(A,st);Dt(i.TEXTURE_CUBE_MAP,A);let Vt;if(A.isDepthTexture){if(mt=v(A.format===li,A.type),Wt)if(It)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,mt,st.width,st.height);else for(let Et=0;Et<6;Et++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,mt,st.width,st.height,0,xt,dt,null)}else if(gt){It&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,mt,st.width,st.height);for(let Et=0;Et<6;Et++){Vt=ot[Et].mipmaps;for(let ce=0;ce<Vt.length;ce++){const Ge=Vt[ce];A.format!==In?xt!==null?It?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce,0,0,Ge.width,Ge.height,xt,Ge.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce,mt,Ge.width,Ge.height,0,Ge.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce,0,0,Ge.width,Ge.height,xt,dt,Ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce,mt,Ge.width,Ge.height,0,xt,dt,Ge.data)}}}else{if(Vt=A.mipmaps,It&&Wt){Vt.length>0&&Ft++;const Et=Gt(ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,mt,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(O){It?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,ot[Et].width,ot[Et].height,xt,dt,ot[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,mt,ot[Et].width,ot[Et].height,0,xt,dt,ot[Et].data);for(let ce=0;ce<Vt.length;ce++){const yi=Vt[ce].image[Et].image;It?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce+1,0,0,yi.width,yi.height,xt,dt,yi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce+1,mt,yi.width,yi.height,0,xt,dt,yi.data)}}else{It?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,xt,dt,ot[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,mt,xt,dt,ot[Et]);for(let ce=0;ce<Vt.length;ce++){const Ge=Vt[ce];It?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce+1,0,0,xt,dt,Ge.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce+1,mt,xt,dt,Ge.image[Et])}}}x(A)&&A.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),pt.__version=lt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function jt(I,A,Q,ct,lt,pt){const vt=r.convert(Q.format,Q.colorSpace),rt=r.convert(Q.type),at=b(Q.internalFormat,vt,rt,Q.normalized,Q.colorSpace),gt=n.get(A),O=n.get(Q);if(O.__renderTarget=A,!gt.__hasExternalTextures){const ot=Math.max(1,A.width>>pt),st=Math.max(1,A.height>>pt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,pt,at,ot,st,A.depth,0,vt,rt,null):e.texImage2D(lt,pt,at,ot,st,0,vt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),St(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,lt,O.__webglTexture,0,me(A)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,lt,O.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(I,A,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,I),A.depthBuffer){const ct=A.depthTexture,lt=ct&&ct.isDepthTexture?ct.type:null,pt=v(A.stencilBuffer,lt),vt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;St(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(A),pt,A.width,A.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(A),pt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,pt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,I)}else{const ct=A.textures;for(let lt=0;lt<ct.length;lt++){const pt=ct[lt],vt=r.convert(pt.format,pt.colorSpace),rt=r.convert(pt.type),at=b(pt.internalFormat,vt,rt,pt.normalized,pt.colorSpace);St(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(A),at,A.width,A.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(A),at,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,at,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(I,A,Q){const ct=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const lt=n.get(A.depthTexture);lt.__renderTarget=A;const pt=ct?A.depthTexture.image[0]:A.depthTexture.image;(!lt.__webglTexture||pt.width!==A.width||pt.height!==A.height)&&(pt.width=A.width,pt.height=A.height,A.depthTexture.needsUpdate=!0),ct?K(A.depthTexture,0):et(A.depthTexture,0);const vt=lt.__webglTexture,rt=me(A),at=ct?i.TEXTURE_CUBE_MAP_POSITIVE_X+Q:i.TEXTURE_2D,gt=A.depthTexture.format===li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===oi)St(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,at,vt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,gt,at,vt,0);else if(A.depthTexture.format===li)St(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,at,vt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,gt,at,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(I){const A=n.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const ct=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ct){const lt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ct.removeEventListener("dispose",lt)};ct.addEventListener("dispose",lt),A.__depthDisposeCallback=lt}A.__boundDepthTexture=ct}if(I.depthTexture&&!A.__autoAllocateDepthBuffer)if(Q)for(let ct=0;ct<6;ct++)_e(A.__webglFramebuffer[ct],I,ct);else I.texture.mipmaps.length>0?_e(A.__webglFramebuffer[0],I,0):_e(A.__webglFramebuffer,I,0);else if(Q){A.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ct]),A.__webglDepthbuffer[ct]===void 0)A.__webglDepthbuffer[ct]=i.createRenderbuffer(),ye(A.__webglDepthbuffer[ct],I,!1);else{const lt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=A.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,pt)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ye(A.__webglDepthbuffer,I,!1);else{const lt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,pt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(I,A,Q){const ct=n.get(I);A!==void 0&&jt(ct.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&ze(I)}function ve(I){const A=I.texture,Q=n.get(I),ct=n.get(A);I.addEventListener("dispose",L),T(I);const lt=I.textures,pt=I.isWebGLCubeRenderTarget===!0,vt=lt.length>1;if(vt||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=A.version,a.memory.textures++),pt){Q.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(A.mipmaps.length>0){Q.__webglFramebuffer[rt]=[];for(let at=0;at<A.mipmaps.length;at++)Q.__webglFramebuffer[rt][at]=i.createFramebuffer()}else Q.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let rt=0;rt<A.mipmaps.length;rt++)Q.__webglFramebuffer[rt]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(vt)for(let rt=0,at=lt.length;rt<at;rt++){const gt=n.get(lt[rt]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&St(I)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let rt=0;rt<lt.length;rt++){const at=lt[rt];Q.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[rt]);const gt=r.convert(at.format,at.colorSpace),O=r.convert(at.type),ot=b(at.internalFormat,gt,O,at.normalized,at.colorSpace,I.isXRRenderTarget===!0),st=me(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,st,ot,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,Q.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(Q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,A);for(let rt=0;rt<6;rt++)if(A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)jt(Q.__webglFramebuffer[rt][at],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,at);else jt(Q.__webglFramebuffer[rt],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);x(A)?M(i.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}else if(vt){for(let rt=0,at=lt.length;rt<at;rt++){const gt=lt[rt],O=n.get(gt);let ot=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ot=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,O.__webglTexture),Dt(ot,gt),jt(Q.__webglFramebuffer,I,gt,i.COLOR_ATTACHMENT0+rt,ot,0),x(gt)&&M(ot)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(rt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,ct.__webglTexture),Dt(rt,A),A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)jt(Q.__webglFramebuffer[at],I,A,i.COLOR_ATTACHMENT0,rt,at);else jt(Q.__webglFramebuffer,I,A,i.COLOR_ATTACHMENT0,rt,0);x(A)?M(rt):A.mipmaps.length>0&&i.texParameteri(rt,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&ze(I)}function X(I){const A=I.textures;for(let Q=0,ct=A.length;Q<ct;Q++){const lt=A[Q];if(x(lt)&&lt.mipmapsAutoUpdate===!0){const pt=E(I),vt=n.get(lt).__webglTexture;e.bindTexture(pt,vt),M(pt),e.unbindTexture()}}}const mn=[];function pe(I){if(I.samples>0){if(St(I)===!1){const A=I.textures,Q=I.width,ct=I.height;let lt=i.COLOR_BUFFER_BIT;const pt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(I),rt=A.length>1;if(rt)for(let gt=0;gt<A.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let gt=0;gt<A.length;gt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[gt]);const O=n.get(A[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,Q,ct,0,0,Q,ct,lt,i.NEAREST),l===!0&&(mn.length=0,mn.push(i.COLOR_ATTACHMENT0+gt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&mn.push(pt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let gt=0;gt<A.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[gt]);const O=n.get(A[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,O,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){const A=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function me(I){return Math.min(s.maxSamples,I.samples)}function St(I){const A=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ne(I){const A=a.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function Ot(I,A){const Q=I.colorSpace,ct=I.format,lt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==dr&&Q!==hi&&(Qt.getTransfer(Q)===le?(ct!==In||lt!==sn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",Q)),A}function Gt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=it,this.resetTextureUnits=N,this.getTextureUnits=D,this.setTextureUnits=Y,this.setTexture2D=et,this.setTexture2DArray=$,this.setTexture3D=tt,this.setTextureCube=K,this.rebindTextures=Be,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=jt,this.useMultisampledRTT=St,this.dispose=B}function ax(i,t){function e(n,s=hi){let r;const a=Qt.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===Ia)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ql)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kl)return i.BYTE;if(n===$l)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===Da)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===jl)return i.ALPHA;if(n===tc)return i.RGB;if(n===In)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===li)return i.DEPTH_STENCIL;if(n===rr)return i.RED;if(n===Ua)return i.RED_INTEGER;if(n===ci)return i.RG;if(n===Fa)return i.RG_INTEGER;if(n===Oa)return i.RGBA_INTEGER;if(n===ar||n===or||n===lr||n===cr)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===Ba||n===Ga||n===ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Va||n===Wa||n===Xa||n===Ya||n===hr||n===qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ha||n===Va)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xa)return r.COMPRESSED_R11_EAC;if(n===Ya)return r.COMPRESSED_SIGNED_R11_EAC;if(n===hr)return r.COMPRESSED_RG11_EAC;if(n===qa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Za||n===Ka||n===$a||n===Ja||n===Qa||n===ja||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Za)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$a)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ja)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===to)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===no)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===io)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===so)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ro)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ao)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lo||n===co||n===ho)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===lo)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uo||n===fo||n===ur||n===po)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ur)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Xc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new en({vertexShader:ox,fragmentShader:lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new Fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hx extends ui{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",m=new cx,g={},S=e.getContextAttributes();let x=null,M=null;const E=[],b=[],v=new Pt;let y=null,T=null;const w=new Rn;w.viewport=new de;const C=new Rn;C.viewport=new de;const L=[w,C],U=new tp;let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=E[q];return et===void 0&&(et=new Eo,E[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=E[q];return et===void 0&&(et=new Eo,E[q]=et),et.getGripSpace()},this.getHand=function(q){let et=E[q];return et===void 0&&(et=new Eo,E[q]=et),et.getHandSpace()};function F(q){const et=b.indexOf(q.inputSource);if(et===-1)return;const $=E[et];$!==void 0&&($.update(q.inputSource,q.frame,c||a),$.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",H);for(let q=0;q<E.length;q++){const et=b[q];et!==null&&(b[q]=null,E[q].disconnect(et))}P=null,B=null,m.reset();for(const q in g)delete g[q];if(t.setRenderTarget(x),d=null,f=null,u=null,s=null,M=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(v.width,v.height,!1),T!==null){const q=T.camera;q.fov=T.fov,q.zoom=T.zoom,q.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",k),s.addEventListener("inputsourceschange",H),S.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(v),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,tt=null,K=null;S.depth&&(K=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=S.stencil?li:oi,tt=S.stencil?Gi:Dn);const ut={colorFormat:e.RGBA8,depthFormat:K,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ut),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Nn(f.textureWidth,f.textureHeight,{format:In,type:sn,depthTexture:new es(f.textureWidth,f.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const $={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Nn(d.framebufferWidth,d.framebufferHeight,{format:In,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(q){for(let et=0;et<q.removed.length;et++){const $=q.removed[et],tt=b.indexOf($);tt>=0&&(b[tt]=null,E[tt].disconnect($))}for(let et=0;et<q.added.length;et++){const $=q.added[et];let tt=b.indexOf($);if(tt===-1){for(let ut=0;ut<E.length;ut++)if(ut>=b.length){b.push($),tt=ut;break}else if(b[ut]===null){b[ut]=$,tt=ut;break}if(tt===-1)break}const K=E[tt];K&&K.connect($)}}function z(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let et=q.near,$=q.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&($=m.depthFar)),U.near=C.near=w.near=et,U.far=C.far=w.far=$,(P!==U.near||B!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),P=U.near,B=U.far),U.layers.mask=q.layers.mask|6,w.layers.mask=U.layers.mask&-5,C.layers.mask=U.layers.mask&-3;const tt=q.parent,K=U.cameras;z(U,tt);for(let ut=0;ut<K.length;ut++)z(K[ut],tt);U.projectionMatrix.copy(w.projectionMatrix),U.projectionMatrixInverse.copy(w.projectionMatrixInverse),T===null&&q.isPerspectiveCamera&&(T={camera:q,fov:q.fov,zoom:q.zoom}),N(q,U,tt)};function N(q,et,$){$===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy($.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ps*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(q){return g[q]};let D=null;function Y(q,et){if(h=et.getViewerPose(c||a),p=et,h!==null){const $=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let tt=!1;$.length!==U.cameras.length&&(U.cameras.length=0,tt=!0);for(let ft=0;ft<$.length;ft++){const Dt=$[ft];let Nt=null;if(d!==null)Nt=d.getViewport(Dt);else{const Kt=u.getViewSubImage(f,Dt);Nt=Kt.viewport,ft===0&&(t.setRenderTargetTextures(M,Kt.colorTexture,Kt.depthStencilTexture),t.setRenderTarget(M))}let Ut=L[ft];Ut===void 0&&(Ut=new Rn,Ut.layers.enable(ft),Ut.viewport=new de,L[ft]=Ut),Ut.matrix.fromArray(Dt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Dt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),ft===0&&(U.matrix.copy(Ut.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),tt===!0&&U.cameras.push(Ut)}const K=s.enabledFeatures;if(K&&K.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const ft=u.getDepthInformation($[0]);ft&&ft.isValid&&ft.texture&&m.init(ft,s.renderState)}if(K&&K.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let ft=0;ft<$.length;ft++){const Dt=$[ft].camera;if(Dt){let Nt=g[Dt];Nt||(Nt=new Xc,g[Dt]=Nt);const Ut=u.getCameraImage(Dt);Nt.sourceTexture=Ut}}}}for(let $=0;$<E.length;$++){const tt=b[$],K=E[$];tt!==null&&K!==void 0&&K.update(tt,et,c||a)}D&&D(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),p=null}const it=new dh;it.setAnimationLoop(Y),this.setAnimationLoop=function(q){D=q},this.dispose=function(){}}}const ux=new ne,Vh=new Bt;Vh.set(-1,0,0,0,1,0,0,0,1);function dx(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,th(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,S,x,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,S,x):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===$e&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===$e&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const S=t.get(g),x=S.envMap,M=S.envMapRotation;x&&(m.envMap.value=x,m.envMapRotation.value.setFromMatrix4(ux.makeRotationFromEuler(M)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Vh),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,x){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=x*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,S){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$e&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const S=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fx(i,t,e,n){let s={},r={};function a(S,x){const M=x.program;n.uniformBlockBinding(S,M,s[S.id])}function o(S,x){let M=s[S.id];M===void 0&&(p(S),M=l(S),s[S.id]=M,S.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(S,E);const b=t.render.frame;r[S.id]!==b&&(c(S),r[S.id]=b)}function l(S){const x=i.createBuffer(),M=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,M,E),i.bindBuffer(i.UNIFORM_BUFFER,null),x}function c(S){const x=s[S.id],M=S.uniforms,E=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let b=0,v=M.length;b<v;b++){const y=M[b];if(Array.isArray(y))for(let T=0,w=y.length;T<w;T++)h(y[T],b,T,E);else h(y,b,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,x,M,E){if(f(S,x,M,E)===!0){const b=S.__offset,v=S.value;if(Array.isArray(v)){let y=0;for(let T=0;T<v.length;T++){const w=v[T],C=_(w,!0);u(w,S.__data,y),y+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else u(v,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,S.__data)}}function u(S,x,M){typeof S=="number"||typeof S=="boolean"?x[M]=S:S.isMatrix3?(x[M]=S.elements[0],x[M+1]=S.elements[1],x[M+2]=S.elements[2],x[M+3]=0,x[M+4]=S.elements[3],x[M+5]=S.elements[4],x[M+6]=S.elements[5],x[M+7]=0,x[M+8]=S.elements[6],x[M+9]=S.elements[7],x[M+10]=S.elements[8],x[M+11]=0):ArrayBuffer.isView(S)?x.set(S.subarray(0,x.length-M),M):S.toArray(x,M)}function f(S,x,M,E){const b=S.value,v=x+"_"+M;if(Array.isArray(b)){E[v]===void 0&&(E[v]=[]);const y=E[v];let T=!1;for(let w=0;w<b.length;w++)d(b[w],y,w)===!0&&(T=!0);return T}return d(b,E,v)}function d(S,x,M){if(x[M]===void 0)return typeof S=="number"||typeof S=="boolean"?x[M]=S:ArrayBuffer.isView(S)?x[M]=S.slice():x[M]=S.clone(),!0;{const E=x[M];if(typeof S=="number"||typeof S=="boolean"){if(E!==S)return x[M]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(E.equals(S)===!1)return E.copy(S),!0}}return!1}function p(S){const x=S.uniforms;let M=0;const E=16;for(let v=0,y=x.length;v<y;v++){const T=Array.isArray(x[v])?x[v]:[x[v]];for(let w=0,C=T.length;w<C;w++){const L=T[w],U=Array.isArray(L.value)?L.value:[L.value],P=Array.isArray(x[v])||Array.isArray(L.value);let B=M;for(let k=0,H=U.length;k<H;k++){const z=U[k],N=_(z,P),D=M%E,Y=D%N.boundary,it=D+Y;M+=Y,it!==0&&E-it<N.storage&&(M+=E-it),k===0&&(B=M),M+=N.storage}const F=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new F((M-B)/Float32Array.BYTES_PER_ELEMENT),L.__offset=B}}const b=M%E;return b>0&&(M+=E-b),S.__size=M,S.__cache={},this}function _(S,x){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=16,M.storage=48):S.isMatrix4?(M.boundary=16,M.storage=64):S.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",S),x===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(S){const x=S.target;x.removeEventListener("dispose",m),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function g(){for(const S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:g}}const px=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bn=null;function mx(){return Bn===null&&(Bn=new Fs(px,16,16,ci,vn),Bn.name="DFG_LUT",Bn.minFilter=Xe,Bn.magFilter=Xe,Bn.wrapS=Ln,Bn.wrapT=Ln,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}class gx{constructor(t={}){const{canvas:e=Rd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=sn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=d,m=new Set([Oa,Fa,Ua]),g=new Set([sn,Dn,ws,Gi,Ia,Na]),S=new Uint32Array(4),x=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let E=null,b=null;const v=[],y=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let C=!1,L=null,U=null,P=null,B=null;this._outputColorSpace=Pe;let F=0,k=0,H=null,z=-1,N=null;const D=new de,Y=new de;let it=null;const q=new Tt(0);let et=0,$=e.width,tt=e.height,K=1,ut=null,yt=null;const ft=new de(0,0,$,tt),Dt=new de(0,0,$,tt);let Nt=!1;const Ut=new Bs,Kt=new Bo;let Yt=!1,ae=!1;const jt=new ne,ye=new W,_e=new de,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ve(){return H===null?K:1}let X=n;function mn(R,V){return e.getContext(R,V)}let pe,me,St,Ne,Ot,Gt,I,A,Q,ct,lt,pt,vt,rt,at,gt,O,ot,st,xt,dt,mt,It;try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${si}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),X===null){const V="webgl2";if(X=mn(V,R),X===null)throw mn(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(R){throw e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),se("WebGLRenderer: "+R.message),R}function Wt(){pe=new v0(X),pe.init(),dt=new ax(X,pe),me=new l0(X,pe,t,dt),St=new sx(X,pe),me.reversedDepthBuffer&&f&&St.buffers.depth.setReversed(!0),U=X.createFramebuffer(),P=X.createFramebuffer(),B=X.createFramebuffer(),Ne=new y0(X),Ot=new Wg,Gt=new rx(X,pe,St,Ot,me,dt,Ne),I=new _0(w),A=new sp(X),mt=new a0(X,A),Q=new M0(X,A,Ne,mt),ct=new E0(X,Q,A,mt,Ne),ot=new b0(X,me,Gt),at=new c0(Ot),lt=new Vg(w,I,pe,me,mt,at),pt=new dx(w,Ot),vt=new Yg,rt=new Qg(pe),O=new r0(w,I,St,ct,p,l),gt=new ix(w,ct,me),It=new fx(X,Ne,me,St),st=new o0(X,pe,Ne),xt=new S0(X,pe,Ne),Ne.programs=lt.programs,w.capabilities=me,w.extensions=pe,w.properties=Ot,w.renderLists=vt,w.shadowMap=gt,w.state=St,w.info=Ne}_!==sn&&(T=new T0(_,e.width,e.height,o,s,r));const ht=new hx(w,X);this.xr=ht,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=pe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=pe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize($,tt,!1))},this.getSize=function(R){return R.set($,tt)},this.setSize=function(R,V,nt=!0){if(ht.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}$=R,tt=V,e.width=Math.floor(R*K),e.height=Math.floor(V*K),nt===!0&&(e.style.width=R+"px",e.style.height=V+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set($*K,tt*K).floor()},this.setDrawingBufferSize=function(R,V,nt){$=R,tt=V,K=nt,e.width=Math.floor(R*nt),e.height=Math.floor(V*nt),this.setViewport(0,0,R,V)},this.setEffects=function(R){if(_===sn){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let V=0;V<R.length;V++)if(R[V].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(ft)},this.setViewport=function(R,V,nt,J){R.isVector4?ft.set(R.x,R.y,R.z,R.w):ft.set(R,V,nt,J),St.viewport(D.copy(ft).multiplyScalar(ve()).round())},this.getScissor=function(R){return R.copy(Dt)},this.setScissor=function(R,V,nt,J){R.isVector4?Dt.set(R.x,R.y,R.z,R.w):Dt.set(R,V,nt,J),St.scissor(Y.copy(Dt).multiplyScalar(ve()).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(R){St.setScissorTest(Nt=R)},this.setOpaqueSort=function(R){ut=R},this.setTransparentSort=function(R){yt=R},this.getClearColor=function(R){return R.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,nt=!0){let J=0;if(R){let j=!1;if(H!==null){const Mt=H.texture.format;j=m.has(Mt)}if(j){const Mt=H.texture.type,At=g.has(Mt),_t=O.getClearColor(),wt=O.getClearAlpha(),Lt=_t.r,kt=_t.g,$t=_t.b;At?(S[0]=Lt,S[1]=kt,S[2]=$t,S[3]=wt,X.clearBufferuiv(X.COLOR,0,S)):(x[0]=Lt,x[1]=kt,x[2]=$t,x[3]=wt,X.clearBufferiv(X.COLOR,0,x))}else J|=X.COLOR_BUFFER_BIT}V&&(J|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&(J|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&X.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),L=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),O.dispose(),vt.dispose(),rt.dispose(),Gt.dispose(),Ot.dispose(),I.dispose(),ct.dispose(),Q.dispose(),mt.dispose(),It.dispose(),lt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",zu),ht.removeEventListener("sessionend",Bu),Ni.stop()};function Ft(R){R.preventDefault(),ac("WebGLRenderer: Context Lost."),C=!0}function Vt(){ac("WebGLRenderer: Context Restored."),C=!1;const R=Ne.autoReset,V=gt.enabled,nt=gt.autoUpdate,J=gt.needsUpdate,j=gt.type;Wt(),Ne.autoReset=R,gt.enabled=V,gt.autoUpdate=nt,gt.needsUpdate=J,gt.type=j}function Et(R){se("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ce(R){const V=R.target;V.removeEventListener("dispose",ce),Ge(V)}function Ge(R){yi(R),Ot.remove(R)}function yi(R){const V=Ot.get(R).programs;V!==void 0&&(V.forEach(function(nt){lt.releaseProgram(nt)}),R.isShaderMaterial&&lt.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,nt,J,j,Mt){V===null&&(V=ze);const At=j.isMesh&&j.matrixWorld.determinantAffine()<0,_t=Kv(R,V,nt,J,j);St.setMaterial(J,At);let wt=nt.index,Lt=1;if(J.wireframe===!0){if(wt=Q.getWireframeAttribute(nt),wt===void 0)return;Lt=2}const kt=nt.drawRange,$t=nt.attributes.position;let Rt=kt.start*Lt,Jt=(kt.start+kt.count)*Lt;Mt!==null&&(Rt=Math.max(Rt,Mt.start*Lt),Jt=Math.min(Jt,(Mt.start+Mt.count)*Lt)),wt!==null?(Rt=Math.max(Rt,0),Jt=Math.min(Jt,wt.count)):$t!=null&&(Rt=Math.max(Rt,0),Jt=Math.min(Jt,$t.count));const Ae=Jt-Rt;if(Ae<0||Ae===1/0)return;mt.setup(j,J,_t,nt,wt);let ue,he=st;if(wt!==null&&(ue=A.get(wt),he=xt,he.setIndex(ue)),j.isMesh)J.wireframe===!0?(St.setLineWidth(J.wireframeLinewidth*ve()),he.setMode(X.LINES)):he.setMode(X.TRIANGLES);else if(j.isLine){let Ze=J.linewidth;Ze===void 0&&(Ze=1),St.setLineWidth(Ze*ve()),j.isLineSegments?he.setMode(X.LINES):j.isLineLoop?he.setMode(X.LINE_LOOP):he.setMode(X.LINE_STRIP)}else j.isPoints?he.setMode(X.POINTS):j.isSprite&&he.setMode(X.TRIANGLES);if(j.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))he.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ze=j._multiDrawStarts,Ct=j._multiDrawCounts,je=j._multiDrawCount,oe=wt?A.get(wt).bytesPerElement:1,Ui=Ot.get(J).currentProgram.getUniforms();for(let Ke=0;Ke<je;Ke++)Ui.setValue(X,"_gl_DrawID",Ke),he.render(Ze[Ke]/oe,Ct[Ke])}else if(j.isInstancedMesh)he.renderInstances(Rt,Ae,j.count);else if(nt.isInstancedBufferGeometry){const Ze=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Ct=Math.min(nt.instanceCount,Ze);he.renderInstances(Rt,Ae,Ct)}else he.render(Rt,Ae)};function Ou(R,V,nt,J){L!==null&&R.isNodeMaterial&&L.setObject(J,R),Yt===!0&&at.setState(R,nt,!1),R.transparent===!0&&R.side===Re&&R.forceSinglePass===!1?(R.side=$e,R.needsUpdate=!0,nr(R,V,J),R.side=ai,R.needsUpdate=!0,nr(R,V,J),R.side=Re):nr(R,V,J)}this.compile=function(R,V,nt=null){nt===null&&(nt=R),L!==null&&L.renderStart(R,V,nt),b=rt.get(nt),b.init(V),y.push(b),nt.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),R!==nt&&R.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),ae=this.localClippingEnabled,Yt=at.init(this.clippingPlanes,ae),Yt===!0&&at.setGlobalState(this.clippingPlanes,V),L!==null&&gt.render(b.state.shadowsArray,nt,V);const J=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Mt=j.material;if(Mt)if(Array.isArray(Mt))for(let At=0;At<Mt.length;At++){const _t=Mt[At];Ou(_t,nt,V,j),J.add(_t)}else Ou(Mt,nt,V,j),J.add(Mt)}),b=y.pop(),L!==null&&L.renderEnd(),J},this.compileAsync=function(R,V,nt=null){const J=this.compile(R,V,nt);return new Promise(j=>{function Mt(){if(J.forEach(function(At){const wt=Ot.get(At).currentProgram;(wt===void 0||wt.isReady())&&J.delete(At)}),J.size===0){j(R);return}setTimeout(Mt,10)}pe.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Ul=null;function qv(R){Ul&&Ul(R)}function zu(){Ni.stop()}function Bu(){Ni.start()}const Ni=new dh;Ni.setAnimationLoop(qv),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(R){Ul=R,ht.setAnimationLoop(R),R===null?Ni.stop():Ni.start()},ht.addEventListener("sessionstart",zu),ht.addEventListener("sessionend",Bu),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L!==null&&L.renderStart(R,V);const nt=ht.enabled===!0&&ht.isPresenting===!0,J=T!==null&&(H===null||nt)&&T.begin(w,H);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(V),V=ht.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,V,H),b=rt.get(R,y.length),b.init(V),b.state.textureUnits=Gt.getTextureUnits(),y.push(b),jt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?Kt.setFromArrayCamera(V):Ut.setFromProjectionMatrix(jt,Mn,V.reversedDepth),ae=this.localClippingEnabled,Yt=at.init(this.clippingPlanes,ae),E=vt.get(R,v.length),E.init(),v.push(E),this.info.render.frame++,ht.enabled===!0&&ht.isPresenting===!0){const At=w.xr.getDepthSensingMesh();At!==null&&Fl(At,V,-1/0,w.sortObjects)}Fl(R,V,0,w.sortObjects),E.finish(),L!==null&&L.updateLights(b.state.lightsArray),w.sortObjects===!0&&E.sort(ut,yt),Be=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Be&&O.addToRenderList(E,R),this.info.autoReset===!0&&this.info.reset(),Yt===!0&&at.beginShadows();const j=b.state.shadowsArray;if(gt.render(j,R,V),Yt===!0&&at.endShadows(),(J&&T.hasRenderPass())===!1){const At=E.opaque,_t=E.transmissive;if(b.setupLights(),V.isArrayCamera){const wt=V.cameras;if(_t.length>0)for(let Lt=0,kt=wt.length;Lt<kt;Lt++){const $t=wt[Lt];ku(At,_t,R,$t)}Be&&O.render(R);for(let Lt=0,kt=wt.length;Lt<kt;Lt++){const $t=wt[Lt];Gu(E,R,$t,$t.viewport)}}else _t.length>0&&ku(At,_t,R,V),Be&&O.render(R),Gu(E,R,V)}H!==null&&k===0&&(Gt.updateMultisampleRenderTarget(H),Gt.updateRenderTargetMipmap(H)),J&&T.end(w),R.isScene===!0&&R.onAfterRender(w,R,V),mt.resetDefaultState(),z=-1,N=null,y.pop(),y.length>0?(b=y[y.length-1],Gt.setTextureUnits(b.state.textureUnits),Yt===!0&&at.setGlobalState(w.clippingPlanes,b.state.camera)):b=null,v.pop(),v.length>0?E=v[v.length-1]:E=null,L!==null&&L.renderEnd()};function Fl(R,V,nt,J){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)nt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)b.pushLight(R),R.castShadow&&b.pushShadow(R);else if(R.isSprite){const At=V.isArrayCamera?Kt:Ut;if(!R.frustumCulled||R.intersectsFrustum(At)){J&&_e.setFromMatrixPosition(R.matrixWorld).applyMatrix4(jt);const _t=ct.update(R),wt=R.material;wt.visible&&E.push(R,_t,wt,nt,_e.z,null,V)}}else if(R.isMesh||R.isLine||R.isPoints){const At=V.isArrayCamera?Kt:Ut;if(!R.frustumCulled||R.intersectsFrustum(At)){const _t=ct.update(R),wt=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),_e.copy(R.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),_e.copy(_t.boundingSphere.center)),_e.applyMatrix4(R.matrixWorld).applyMatrix4(jt)),Array.isArray(wt)){const Lt=_t.groups;for(let kt=0,$t=Lt.length;kt<$t;kt++){const Rt=Lt[kt],Jt=wt[Rt.materialIndex];Jt&&Jt.visible&&E.push(R,_t,Jt,nt,_e.z,Rt,V)}}else wt.visible&&E.push(R,_t,wt,nt,_e.z,null,V)}}}const Mt=R.children;for(let At=0,_t=Mt.length;At<_t;At++)Fl(Mt[At],V,nt,J)}function Gu(R,V,nt,J){const{opaque:j,transmissive:Mt,transparent:At}=R;b.setupLightsView(nt),Yt===!0&&at.setGlobalState(w.clippingPlanes,nt),J&&St.viewport(D.copy(J)),j.length>0&&xa(j,V,nt),Mt.length>0&&xa(Mt,V,nt),At.length>0&&xa(At,V,nt),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function ku(R,V,nt,J){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[J.id]===void 0){const Rt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[J.id]=new Nn(1,1,{generateMipmaps:!0,type:Rt?vn:sn,minFilter:xn,samples:Math.max(4,me.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const Mt=b.state.transmissionRenderTarget[J.id],At=J.viewport||D;Mt.setSize(At.z*w.transmissionResolutionScale,At.w*w.transmissionResolutionScale);const _t=w.getRenderTarget(),wt=w.getActiveCubeFace(),Lt=w.getActiveMipmapLevel();w.setRenderTarget(Mt),w.getClearColor(q),et=w.getClearAlpha(),et<1&&w.setClearColor(16777215,.5),w.clear(),Be&&O.render(nt);const kt=w.toneMapping;w.toneMapping=Wn;const $t=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),b.setupLightsView(J),Yt===!0&&at.setGlobalState(w.clippingPlanes,J),xa(R,nt,J),Gt.updateMultisampleRenderTarget(Mt),Gt.updateRenderTargetMipmap(Mt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Jt=0,Ae=V.length;Jt<Ae;Jt++){const ue=V[Jt],{object:he,geometry:Ze,material:Ct,group:je}=ue;if(Ct.side===Re&&he.layers.test(J.layers)){const oe=Ct.side;Ct.side=$e,Ct.needsUpdate=!0,Hu(he,nt,J,Ze,Ct,je),Ct.side=oe,Ct.needsUpdate=!0,Rt=!0}}Rt===!0&&(Gt.updateMultisampleRenderTarget(Mt),Gt.updateRenderTargetMipmap(Mt))}w.setRenderTarget(_t,wt,Lt),w.setClearColor(q,et),$t!==void 0&&(J.viewport=$t),w.toneMapping=kt}function xa(R,V,nt){const J=V.isScene===!0?V.overrideMaterial:null;for(let j=0,Mt=R.length;j<Mt;j++){const At=R[j],{object:_t,geometry:wt,group:Lt}=At;let kt=At.material;kt.allowOverride===!0&&J!==null&&(kt=J),_t.layers.test(nt.layers)&&Hu(_t,V,nt,wt,kt,Lt)}}function Hu(R,V,nt,J,j,Mt){L!==null&&j.isNodeMaterial&&L.setObject(R,j),R.onBeforeRender(w,V,nt,J,j,Mt),R.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(w,V,nt,J,R,Mt),j.transparent===!0&&j.side===Re&&j.forceSinglePass===!1?(j.side=$e,j.needsUpdate=!0,w.renderBufferDirect(nt,V,J,j,R,Mt),j.side=ai,j.needsUpdate=!0,w.renderBufferDirect(nt,V,J,j,R,Mt),j.side=Re):w.renderBufferDirect(nt,V,J,j,R,Mt),R.onAfterRender(w,V,nt,J,j,Mt)}function Vu(R){let V=0;for(const nt of R)nt.texture!==null&&V++;return V}function nr(R,V,nt){V.isScene!==!0&&(V=ze);const J=Ot.get(R),j=b.state.lights,Mt=b.state.shadowsArray,At=j.state.version,_t=lt.getParameters(R,j.state,Mt,V,nt,b.state.lightProbeGridArray),wt=lt.getProgramCacheKey(_t);let Lt=J.programs;J.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?V.environment:null,J.fog=V.fog;const kt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;J.envMap=I.get(R.envMap||J.environment,kt),J.envMapRotation=J.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Lt===void 0&&(R.addEventListener("dispose",ce),Lt=new Map,J.programs=Lt,J.programVariants=new Map);let $t=Lt.get(wt);if($t!==void 0){if(J.currentProgram===$t&&J.lightsStateVersion===At)return Xu(R,_t),$t}else _t.uniforms=lt.getUniforms(R),L!==null&&R.isNodeMaterial&&L.build(R,nt,_t),R.onBeforeCompile(_t,w),$t=lt.acquireProgram(_t,wt),Lt.set(wt,$t),J.uniforms=_t.uniforms;const Rt=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Rt.clippingPlanes=at.uniform),Xu(R,_t),J.needsLights=Jv(R),J.lightsStateVersion=At,J.needsLights&&(Rt.ambientLightColor.value=j.state.ambient,Rt.lightProbe.value=j.state.probe,Rt.sunLights.value=j.state.sun,Rt.sunLightShadows.value=j.state.sunShadow,Rt.directionalLights.value=j.state.directional,Rt.directionalLightShadows.value=j.state.directionalShadow,Rt.spotLights.value=j.state.spot,Rt.spotLightShadows.value=j.state.spotShadow,Rt.rectAreaLights.value=j.state.rectArea,Rt.ltc_1.value=j.state.rectAreaLTC1,Rt.ltc_2.value=j.state.rectAreaLTC2,Rt.pointLights.value=j.state.point,Rt.pointLightShadows.value=j.state.pointShadow,Rt.hemisphereLights.value=j.state.hemi,Rt.sunShadowMatrix.value=j.state.sunShadowMatrix,Rt.sunShadowCascade.value=j.state.sunShadowCascade,Rt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Rt.spotLightMatrix.value=j.state.spotLightMatrix,Rt.spotLightMap.value=j.state.spotLightMap,Rt.pointShadowMatrix.value=j.state.pointShadowMatrix),J.numLightProbeGrids=Vu(b.state.lightProbeGridArray),J.currentProgram=$t,J.uniformsList=null,$t}function Zv(R,V,nt,J,j){const Mt=Ot.get(R),At=Mt.currentProgram.id+","+J+","+j;let _t=Mt.programVariants.get(At);return _t===void 0?(_t=nr(R,V,nt),Mt.programVariants.set(At,_t)):(Mt.currentProgram=_t,Mt.uniformsList=null,Mt.outputColorSpace=J,Mt.toneMapping=j),_t}function Wu(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Kr.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Xu(R,V){const nt=Ot.get(R);nt.outputColorSpace=V.outputColorSpace,nt.batching=V.batching,nt.batchingColor=V.batchingColor,nt.instancing=V.instancing,nt.instancingColor=V.instancingColor,nt.instancingMorph=V.instancingMorph,nt.skinning=V.skinning,nt.morphTargets=V.morphTargets,nt.morphNormals=V.morphNormals,nt.morphColors=V.morphColors,nt.morphTargetsCount=V.morphTargetsCount,nt.numClippingPlanes=V.numClippingPlanes,nt.numIntersection=V.numClipIntersection,nt.vertexAlphas=V.vertexAlphas,nt.vertexTangents=V.vertexTangents,nt.toneMapping=V.toneMapping}function Kv(R,V,nt,J,j){V.isScene!==!0&&(V=ze),Gt.resetTextureUnits();const Mt=V.fog,At=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?V.environment:null,_t=H===null?w.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Qt.workingColorSpace,wt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Lt=I.get(J.envMap||At,wt),kt=J.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,$t=!!nt.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Rt=!!nt.morphAttributes.position,Jt=!!nt.morphAttributes.normal,Ae=!!nt.morphAttributes.color;let ue=Wn;J.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(ue=w.toneMapping);const he=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Ze=he!==void 0?he.length:0,Ct=Ot.get(J),je=b.state.lights;if(Yt===!0&&(ae===!0||R!==N)){const Me=R===N&&J.id===z;at.setState(J,R,Me)}let oe=!1,Ui=!1;J.version===Ct.__version?Ct.needsLights&&Ct.lightsStateVersion!==je.state.version||j.isBatchedMesh&&Ct.batching===!1||!j.isBatchedMesh&&Ct.batching===!0||j.isBatchedMesh&&Ct.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ct.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ct.instancing===!1||!j.isInstancedMesh&&Ct.instancing===!0||j.isSkinnedMesh&&Ct.skinning===!1||!j.isSkinnedMesh&&Ct.skinning===!0||j.isInstancedMesh&&Ct.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ct.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ct.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ct.instancingMorph===!1&&j.morphTexture!==null||Ct.envMap!==Lt||J.fog===!0&&Ct.fog!==Mt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==at.numPlanes||Ct.numIntersection!==at.numIntersection)||Ct.vertexAlphas!==kt||Ct.vertexTangents!==$t||Ct.morphTargets!==Rt||Ct.morphNormals!==Jt||Ct.morphColors!==Ae||Ct.morphTargetsCount!==Ze||Ct.numLightProbeGrids!==Vu(b.state.lightProbeGridArray)?oe=!0:(Ct.outputColorSpace!==_t||Ct.toneMapping!==ue)&&(Ui=!0):(oe=!0,Ct.__version=J.version);let Ke=Ct.currentProgram;(oe===!0||Ui===!0)&&(Ke=Ui===!0?Zv(J,V,j,_t,ue):nr(J,V,j),L&&J.isNodeMaterial&&L.onUpdateProgram(J,Ke,Ct));let _a=!1,bi=!1,Fi=!1;const ie=Ke.getUniforms(),We=Ct.uniforms;if(St.useProgram(Ke.program)&&(_a=!0,bi=!0,Fi=!0),J.id!==z&&(z=J.id,bi=!0),_a||N!==R){St.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ie.setValue(X,"projectionMatrix",R.projectionMatrix),ie.setValue(X,"viewMatrix",R.matrixWorldInverse);const ke=ie.map.cameraPosition;ke!==void 0&&ke.setValue(X,ye.setFromMatrixPosition(R.matrixWorld)),me.logarithmicDepthBuffer&&ie.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ie.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),N!==R&&(N=R,bi=!0,Fi=!0)}if(Ct.needsLights&&(je.state.sunShadowMap.length>0&&ie.setValue(X,"sunShadowMap",je.state.sunShadowMap,Gt),je.state.directionalShadowMap.length>0&&ie.setValue(X,"directionalShadowMap",je.state.directionalShadowMap,Gt),je.state.spotShadowMap.length>0&&ie.setValue(X,"spotShadowMap",je.state.spotShadowMap,Gt),je.state.pointShadowMap.length>0&&ie.setValue(X,"pointShadowMap",je.state.pointShadowMap,Gt)),j.isSkinnedMesh){ie.setOptional(X,j,"bindMatrix"),ie.setOptional(X,j,"bindMatrixInverse");const Me=j.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ie.setValue(X,"boneTexture",Me.boneTexture,Gt))}j.isBatchedMesh&&(ie.setOptional(X,j,"batchingTexture"),ie.setValue(X,"batchingTexture",j._matricesTexture,Gt),ie.setOptional(X,j,"batchingIdTexture"),ie.setValue(X,"batchingIdTexture",j._indirectTexture,Gt),ie.setOptional(X,j,"batchingColorTexture"),j._colorsTexture!==null&&ie.setValue(X,"batchingColorTexture",j._colorsTexture,Gt));const Pn=nt.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&ot.update(j,nt,Ke),(bi||Ct.receiveShadow!==j.receiveShadow)&&(Ct.receiveShadow=j.receiveShadow,ie.setValue(X,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&V.environment!==null&&(We.envMapIntensity.value=V.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=mx()),bi){if(ie.setValue(X,"toneMappingExposure",w.toneMappingExposure),Ct.needsLights&&$v(We,Fi),Mt&&J.fog===!0&&pt.refreshFogUniforms(We,Mt),pt.refreshMaterialUniforms(We,J,K,tt,b.state.transmissionRenderTarget[R.id]),Ct.needsLights&&Ct.numLightProbeGrids>0){const Me=M;let ke=0;for(const ii of b.state.lightProbeGridArray)ii.texture!==null&&(Me.textures[ke]=ii.texture,Me.min[ke]=ii.boundingBox.min,Me.max[ke]=ii.boundingBox.max,Me.resolution[ke]=ii.resolution,ke++);for(const ii in Me)Me[ii].length=ke;We.probesSH.value=Me.textures,We.probesMin.value=Me.min,We.probesMax.value=Me.max,We.probesResolution.value=Me.resolution}Kr.upload(X,Wu(Ct),We,Gt)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Kr.upload(X,Wu(Ct),We,Gt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ie.setValue(X,"center",j.center),ie.setValue(X,"modelViewMatrix",j.modelViewMatrix),ie.setValue(X,"normalMatrix",j.normalMatrix),ie.setValue(X,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){const Me=J.uniformsGroups;for(let ke=0,ii=Me.length;ke<ii;ke++){const qu=Me[ke];It.update(qu,Ke),It.bind(qu,Ke)}}return Ke}function $v(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.sunLights.needsUpdate=V,R.sunLightShadows.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Jv(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(R,V,nt){const J=Ot.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Ot.get(R.texture).__webglTexture=V,Ot.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:nt,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){const nt=Ot.get(R);nt.__webglFramebuffer=V,nt.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,nt=0){H=R,F=V,k=nt;let J=null,j=!1,Mt=!1;if(R){const _t=Ot.get(R);if(_t.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(X.FRAMEBUFFER,_t.__webglFramebuffer),D.copy(R.viewport),Y.copy(R.scissor),it=R.scissorTest,St.viewport(D),St.scissor(Y),St.setScissorTest(it),z=-1;return}else if(_t.__webglFramebuffer===void 0)Gt.setupRenderTarget(R);else if(_t.__hasExternalTextures)Gt.rebindTextures(R,Ot.get(R.texture).__webglTexture,Ot.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const kt=R.depthTexture;if(_t.__boundDepthTexture!==kt){if(kt!==null&&Ot.has(kt)&&(R.width!==kt.image.width||R.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(R)}}const wt=R.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(Mt=!0);const Lt=Ot.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Lt[V])?J=Lt[V][nt]:J=Lt[V],j=!0):R.samples>0&&Gt.useMultisampledRTT(R)===!1?J=Ot.get(R).__webglMultisampledFramebuffer:Array.isArray(Lt)?J=Lt[nt]:J=Lt,D.copy(R.viewport),Y.copy(R.scissor),it=R.scissorTest}else D.copy(ft).multiplyScalar(K).floor(),Y.copy(Dt).multiplyScalar(K).floor(),it=Nt;if(nt!==0&&(J=U),St.bindFramebuffer(X.FRAMEBUFFER,J)&&St.drawBuffers(R,J),St.viewport(D),St.scissor(Y),St.setScissorTest(it),j){const _t=Ot.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+V,_t.__webglTexture,nt)}else if(Mt){const _t=V;for(let wt=0;wt<R.textures.length;wt++){const Lt=Ot.get(R.textures[wt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+wt,Lt.__webglTexture,nt,_t)}}else if(R!==null&&nt!==0){const _t=Ot.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,_t.__webglTexture,nt)}z=-1};function Yu(R){const V=Ot.get(R);return(V.__readFormat!==R.format||V.__readType!==R.type)&&(V.__readFormat=R.format,V.__readType=R.type,V.__formatReadable=me.textureFormatReadable(R.format),V.__typeReadable=me.textureTypeReadable(R.type)),V}this.readRenderTargetPixels=function(R,V,nt,J,j,Mt,At,_t=0){if(!(R&&R.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ot.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(wt=wt[At],Array.isArray(wt)&&(wt=wt[0])),wt){St.bindFramebuffer(X.FRAMEBUFFER,wt);try{const Lt=R.textures[_t],kt=Lt.format,$t=Lt.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+_t);const Rt=Yu(Lt);if(Rt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-J&&nt>=0&&nt<=R.height-j&&X.readPixels(V,nt,J,j,dt.convert(kt),dt.convert($t),Mt)}finally{const Lt=H!==null?Ot.get(H).__webglFramebuffer:null;St.bindFramebuffer(X.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(R,V,nt,J,j,Mt,At,_t=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ot.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(wt=wt[At],Array.isArray(wt)&&(wt=wt[0])),wt)if(V>=0&&V<=R.width-J&&nt>=0&&nt<=R.height-j){St.bindFramebuffer(X.FRAMEBUFFER,wt);const Lt=R.textures[_t],kt=Lt.format,$t=Lt.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+_t);const Rt=Yu(Lt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Jt),X.bufferData(X.PIXEL_PACK_BUFFER,Mt.byteLength,X.STREAM_READ),X.readPixels(V,nt,J,j,dt.convert(kt),dt.convert($t),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const Ae=H!==null?Ot.get(H).__webglFramebuffer:null;St.bindFramebuffer(X.FRAMEBUFFER,Ae);const ue=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Cd(X,ue,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Jt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Mt),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(Jt),X.deleteSync(ue),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,nt=0){const J=Math.pow(2,-nt),j=Math.floor(R.image.width*J),Mt=Math.floor(R.image.height*J),At=V!==null?V.x:0,_t=V!==null?V.y:0;Gt.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,nt,0,0,At,_t,j,Mt),St.unbindTexture()},this.copyTextureToTexture=function(R,V,nt=null,J=null,j=0,Mt=0){let At,_t,wt,Lt,kt,$t,Rt,Jt,Ae;const ue=R.isCompressedTexture?R.mipmaps[Mt]:R.image;if(nt!==null)At=nt.max.x-nt.min.x,_t=nt.max.y-nt.min.y,wt=nt.isBox3?nt.max.z-nt.min.z:1,Lt=nt.min.x,kt=nt.min.y,$t=nt.isBox3?nt.min.z:0;else{const ie=Math.pow(2,-j);At=Math.floor(ue.width*ie),_t=Math.floor(ue.height*ie),R.isDataArrayTexture?wt=ue.depth:R.isData3DTexture?wt=Math.floor(ue.depth*ie):wt=1,Lt=0,kt=0,$t=0}J!==null?(Rt=J.x,Jt=J.y,Ae=J.z):(Rt=0,Jt=0,Ae=0);const he=dt.convert(V.format),Ze=dt.convert(V.type);let Ct;V.isData3DTexture?(Gt.setTexture3D(V,0),Ct=X.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Gt.setTexture2DArray(V,0),Ct=X.TEXTURE_2D_ARRAY):(Gt.setTexture2D(V,0),Ct=X.TEXTURE_2D),St.activeTexture(X.TEXTURE0),St.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,V.flipY),St.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),St.pixelStorei(X.UNPACK_ALIGNMENT,V.unpackAlignment);const je=St.getParameter(X.UNPACK_ROW_LENGTH),oe=St.getParameter(X.UNPACK_IMAGE_HEIGHT),Ui=St.getParameter(X.UNPACK_SKIP_PIXELS),Ke=St.getParameter(X.UNPACK_SKIP_ROWS),_a=St.getParameter(X.UNPACK_SKIP_IMAGES);St.pixelStorei(X.UNPACK_ROW_LENGTH,ue.width),St.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ue.height),St.pixelStorei(X.UNPACK_SKIP_PIXELS,Lt),St.pixelStorei(X.UNPACK_SKIP_ROWS,kt),St.pixelStorei(X.UNPACK_SKIP_IMAGES,$t);const bi=R.isDataArrayTexture||R.isData3DTexture,Fi=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){const ie=Ot.get(R),We=Ot.get(V),Pn=Ot.get(ie.__renderTarget),Me=Ot.get(We.__renderTarget);St.bindFramebuffer(X.READ_FRAMEBUFFER,Pn.__webglFramebuffer),St.bindFramebuffer(X.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ke=0;ke<wt;ke++)bi&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ot.get(R).__webglTexture,j,$t+ke),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ot.get(V).__webglTexture,Mt,Ae+ke)),X.blitFramebuffer(Lt,kt,Lt+At,kt+_t,Rt,Jt,Rt+At,Jt+_t,X.DEPTH_BUFFER_BIT,X.NEAREST);St.bindFramebuffer(X.READ_FRAMEBUFFER,null),St.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Ot.has(R)){const ie=Ot.get(R),We=Ot.get(V);St.bindFramebuffer(X.READ_FRAMEBUFFER,P),St.bindFramebuffer(X.DRAW_FRAMEBUFFER,B);for(let Pn=0;Pn<wt;Pn++)bi?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ie.__webglTexture,j,$t+Pn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ie.__webglTexture,j),Fi?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,We.__webglTexture,Mt,Ae+Pn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,We.__webglTexture,Mt),j!==0?X.blitFramebuffer(Lt,kt,Lt+At,kt+_t,Rt,Jt,Rt+At,Jt+_t,X.COLOR_BUFFER_BIT,X.NEAREST):Fi?X.copyTexSubImage3D(Ct,Mt,Rt,Jt,Ae+Pn,Lt,kt,At,_t):X.copyTexSubImage2D(Ct,Mt,Rt,Jt,Lt,kt,At,_t);St.bindFramebuffer(X.READ_FRAMEBUFFER,null),St.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Fi?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(Ct,Mt,Rt,Jt,Ae,At,_t,wt,he,Ze,ue.data):V.isCompressedArrayTexture?X.compressedTexSubImage3D(Ct,Mt,Rt,Jt,Ae,At,_t,wt,he,ue.data):X.texSubImage3D(Ct,Mt,Rt,Jt,Ae,At,_t,wt,he,Ze,ue):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Mt,Rt,Jt,At,_t,he,Ze,ue.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Mt,Rt,Jt,ue.width,ue.height,he,ue.data):X.texSubImage2D(X.TEXTURE_2D,Mt,Rt,Jt,At,_t,he,Ze,ue);St.pixelStorei(X.UNPACK_ROW_LENGTH,je),St.pixelStorei(X.UNPACK_IMAGE_HEIGHT,oe),St.pixelStorei(X.UNPACK_SKIP_PIXELS,Ui),St.pixelStorei(X.UNPACK_SKIP_ROWS,Ke),St.pixelStorei(X.UNPACK_SKIP_IMAGES,_a),Mt===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&X.generateMipmap(Ct),St.unbindTexture()},this.initRenderTarget=function(R){Ot.get(R).__webglFramebuffer===void 0&&Gt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Gt.setTextureCube(R,0):R.isData3DTexture?Gt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Gt.setTexture2DArray(R,0):Gt.setTexture2D(R,0),St.unbindTexture()},this.resetState=function(){F=0,k=0,H=null,St.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const Wh={type:"change"},rl={type:"start"},Xh={type:"end"},Jr=new wr,Yh=new Un,xx=Math.cos(70*Zt.DEG2RAD),Ie=new W,nn=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},al=1e-6;class _x extends np{constructor(t,e=null){super(t,e),this.state=re.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vn.ROTATE,MIDDLE:Vn.DOLLY,RIGHT:Vn.PAN},this.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Sn,this._lastTargetPosition=new W,this._quat=new Sn().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wr,this._sphericalDelta=new Wr,this._scale=1,this._panOffset=new W,this._rotateStart=new Pt,this._rotateEnd=new Pt,this._rotateDelta=new Pt,this._panStart=new Pt,this._panEnd=new Pt,this._panDelta=new Pt,this._dollyStart=new Pt,this._dollyEnd=new Pt,this._dollyDelta=new Pt,this._dollyDirection=new W,this._mouse=new Pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Mx.bind(this),this._onPointerDown=vx.bind(this),this._onPointerUp=Sx.bind(this),this._onContextMenu=Rx.bind(this),this._onMouseWheel=Ex.bind(this),this._onKeyDown=wx.bind(this),this._onTouchStart=Tx.bind(this),this._onTouchMove=Ax.bind(this),this._onMouseDown=yx.bind(this),this._onMouseMove=bx.bind(this),this._interceptControlDown=Cx.bind(this),this._interceptControlUp=Px.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=re.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wh),this.update(),this.state=re.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ie.copy(e).sub(this.target),Ie.applyQuaternion(this._quat),this._spherical.setFromVector3(Ie),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=nn:n>Math.PI&&(n-=nn),s<-Math.PI?s+=nn:s>Math.PI&&(s-=nn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ie.setFromSpherical(this._spherical),Ie.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ie),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ie.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new W(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ie.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Jr.origin.copy(this.object.position),Jr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Jr.direction))<xx?this.object.lookAt(this.target):(Yh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Jr.intersectPlane(Yh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>al||8*(1-this._lastQuaternion.dot(this.object.quaternion))>al||this._lastTargetPosition.distanceToSquared(this.target)>al?(this.dispatchEvent(Wh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?nn/60*this.autoRotateSpeed*t:nn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ie.setFromMatrixColumn(e,0),Ie.multiplyScalar(-t),this._panOffset.add(Ie)}_panUp(t,e){this.screenSpacePanning===!0?Ie.setFromMatrixColumn(e,1):(Ie.setFromMatrixColumn(e,0),Ie.crossVectors(this.object.up,Ie)),Ie.multiplyScalar(t),this._panOffset.add(Ie)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ie.copy(s).sub(this.target);let r=Ie.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function vx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Mx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Sx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xh),this.state=re.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function yx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Vn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=re.DOLLY;break;case Vn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}break;case Vn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(rl)}function bx(i){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ex(i){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(i.preventDefault(),this.dispatchEvent(rl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Xh))}function wx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Tx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ri.ROTATE:if(this.enableRotate===!1){this.state=re.NONE;break}this._handleTouchStartRotate(i),this.state=re.TOUCH_ROTATE;break;case ri.PAN:if(this.enablePan===!1){this.state=re.NONE;break}this._handleTouchStartPan(i),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case ri.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=re.TOUCH_DOLLY_PAN;break;case ri.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(rl)}function Ax(i){switch(this._trackPointer(i),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=re.NONE}}function Rx(i){this.enabled!==!1&&i.preventDefault()}function Cx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Px(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ol=new Un,Qr=new ep,ls=new Pt,ll=new W;class Lx extends _x{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Vn.PAN,MIDDLE:Vn.DOLLY,RIGHT:Vn.ROTATE},this.touches={ONE:ri.PAN,TWO:ri.DOLLY_ROTATE},this._panWorldStart=new W}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;ol.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();ls.x=(t.clientX-n.left)/n.width*2-1,ls.y=-((t.clientY-n.top)/n.height)*2+1,Qr.setFromCamera(ls,this.object),Qr.ray.intersectPlane(ol,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();ls.x=(t.clientX-n.left)/n.width*2-1,ls.y=-((t.clientY-n.top)/n.height)*2+1,Qr.setFromCamera(ls,this.object),Qr.ray.intersectPlane(ol,ll)&&(ll.sub(this._panWorldStart),this._panOffset.copy(ll).negate(),this.update())}}const jr=new Tt;function G(i){return jr.set(i),[jr.r,jr.g,jr.b]}function te(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function Zs(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function Oe(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class ee{constructor(){Z(this,"pos",[]);Z(this,"nor",[]);Z(this,"col",[]);Z(this,"glo",[]);Z(this,"ox",0);Z(this,"oy",0);Z(this,"oz",0);Z(this,"c",1);Z(this,"s",0)}get vertexCount(){return this.pos.length/3}gradientY(t,e,n,s,r){for(let a=t*3;a<this.pos.length;a+=3){const o=Zt.clamp((this.pos[a+1]-e)/(n-e),0,1);for(let l=0;l<3;l++)this.col[a+l]=s[l]+(r[l]-s[l])*o}}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,a,o,l,c,h,u=0){const f=this.wx(t,n),d=this.wz(t,n),p=this.oy+e,_=this.wx(s,a),m=this.wz(s,a),g=this.oy+r,S=this.wx(o,c),x=this.wz(o,c),M=this.oy+l,E=_-f,b=g-p,v=m-d,y=S-f,T=M-p,w=x-d;let C=b*w-v*T,L=v*y-E*w,U=E*T-b*y;const P=Math.hypot(C,L,U)||1;C/=P,L/=P,U/=P,this.pos.push(f,p,d,_,g,m,S,M,x),this.nor.push(C,L,U,C,L,U,C,L,U),this.col.push(h[0],h[1],h[2],h[0],h[1],h[2],h[0],h[1],h[2]),this.glo.push(u,u,u)}quad(t,e,n,s,r,a,o,l,c,h,u,f,d,p=0){this.tri(t,e,n,s,r,a,o,l,c,d,p),this.tri(t,e,n,o,l,c,h,u,f,d,p)}box(t,e,n,s,r,a,o,l=void 0,c=null,h=0){this.quad(t,e,a,s,e,a,s,r,a,t,r,a,o,h),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,o,h),this.quad(s,e,a,s,e,n,s,r,n,s,r,a,o,h),this.quad(t,e,n,t,e,a,t,r,a,t,r,n,o,h),l!==null&&this.quad(t,r,a,s,r,a,s,r,n,t,r,n,l??o,h),c&&this.quad(t,e,n,s,e,n,s,e,a,t,e,a,c,h)}cyl(t,e,n,s,r,a,o,l,c=null,h=0){const u=e+a;for(let f=0;f<o;f++){const d=f/o*Math.PI*2,p=(f+1)/o*Math.PI*2,_=Math.cos(d),m=Math.sin(d),g=Math.cos(p),S=Math.sin(p);r>1e-4?(this.quad(t+_*s,e,n+m*s,t+_*r,u,n+m*r,t+g*r,u,n+S*r,t+g*s,e,n+S*s,l,h),c&&this.tri(t,u,n,t+g*r,u,n+S*r,t+_*r,u,n+m*r,c,h)):this.tri(t+_*s,e,n+m*s,t,u,n,t+g*s,e,n+S*s,l,h)}}blob(t,e,n,s,r,a,o,l,c,h,u=0){const f=h??c;for(let d=0;d<l;d++){const p=d/l*Math.PI,_=(d+1)/l*Math.PI,m=Math.cos(p),g=Math.cos(_),S=Math.sin(p),x=Math.sin(_),M=Zs(c,f,1-(d+.5)/l);for(let E=0;E<o;E++){const b=E/o*Math.PI*2,v=(E+1)/o*Math.PI*2,y=Math.cos(b),T=Math.sin(b),w=Math.cos(v),C=Math.sin(v),L=t+y*S*s,U=e+m*r,P=n+T*S*a,B=t+w*S*s,F=n+C*S*a,k=t+y*x*s,H=e+g*r,z=n+T*x*a,N=t+w*x*s,D=n+C*x*a;d>0&&this.tri(L,U,P,B,U,F,N,H,D,M,u),d<l-1&&this.tri(L,U,P,N,H,D,k,H,z,M,u)}}}walls(t,e,n,s,r=0){const a=t.length/2,o=cl(t)>0;for(let l=0;l<a;l++){const c=(l+1)%a,h=t[l*2],u=t[l*2+1],f=t[c*2],d=t[c*2+1];o?this.quad(f,e,d,h,e,u,h,n,u,f,n,d,s,r):this.quad(h,e,u,f,e,d,f,n,d,h,n,u,s,r)}}cap(t,e,n,s=0){const r=t.length/2,a=[];for(let l=0;l<r;l++)a.push(new Pt(t[l*2],t[l*2+1]));const o=Yo.triangulateShape(a,[]);for(const l of o){const c=a[l[0]],h=a[l[1]],u=a[l[2]];(h.x-c.x)*(u.y-c.y)-(h.y-c.y)*(u.x-c.x)>0?this.tri(c.x,e,c.y,u.x,e,u.y,h.x,e,h.y,n,s):this.tri(c.x,e,c.y,h.x,e,h.y,u.x,e,u.y,n,s)}}build(){const t=new Ee;return t.setAttribute("position",new Se(new Float32Array(this.pos),3)),t.setAttribute("normal",new Se(new Float32Array(this.nor),3)),t.setAttribute("color",new Se(new Float32Array(this.col),3)),t.setAttribute("glow",new Se(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function cl(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const ta={value:0};function cs(i={}){const t=new An({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??Re}),e=new Tt(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=ta,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>"inverloch-model",t}function ea(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=ta,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.82 * uNight;`)},i.customProgramCacheKey=()=>"inverloch-unlit",i}const Dx=8192,jn=256,Ix=420,qh=2048,Zh=[-1,1],Kh=`
uniform sampler2D uCloudMap;
uniform vec2 uCloudOffset;
uniform float uCloudCover;
uniform float uCloudFlash;
const float cloudHeight = ${Ix.toFixed(1)};

float cloudDensity(vec2 position) {
  float density = texture2D(uCloudMap, position / ${Dx.toFixed(1)} - uCloudOffset).r;
  float edge = mix(0.78, 0.29, uCloudCover);
  return smoothstep(edge, edge + 0.13, density) * smoothstep(0.0, 0.08, uCloudCover);
}
`,Nx=`
uniform vec3 uCloudSunDir;
uniform float uCloudShadowStrength;

float cloudSunlight(vec3 position) {
  float layerDistance = cloudHeight - position.y;
  if (layerDistance <= 0.0 || uCloudShadowStrength <= 0.0 || uCloudCover <= 0.0) return 1.0;
  vec2 projection = position.xz + layerDistance * uCloudSunDir.xz / max(uCloudSunDir.y, 0.06);
  return 1.0 - uCloudShadowStrength * cloudDensity(projection) * smoothstep(0.0, 70.0, layerDistance);
}
`;function na(i,t,e){const n=Math.imul(i%e,374761393)^Math.imul(t%e,668265263)^Math.imul(e,1442695041),s=Math.imul(n^n>>>13,1274126177);return((s^s>>>16)>>>0)/4294967295}function hl(i,t,e){const n=Math.floor(i*e),s=Math.floor(t*e),r=i*e-n,a=t*e-s,o=r*r*(3-2*r),l=a*a*(3-2*a),c=Zt.lerp(na(n,s,e),na(n+1,s,e),o),h=Zt.lerp(na(n,s+1,e),na(n+1,s+1,e),o);return Zt.lerp(c,h,l)}function Ux(){const i=new Uint8Array(jn*jn);for(let e=0;e<jn;e++)for(let n=0;n<jn;n++){const s=(n+.5)/jn,r=(e+.5)/jn,a=.67*hl(s,r,24)+.23*hl(s,r,48)+.1*hl(s,r,96);i[e*jn+n]=Math.round(255*a)}const t=new Fs(i,jn,jn,rr);return t.wrapS=t.wrapT=Es,t.magFilter=Xe,t.minFilter=xn,t.generateMipmaps=!0,t.needsUpdate=!0,t}class Fx{constructor(){Z(this,"uniforms",{uCloudMap:{value:Ux()},uCloudOffset:{value:new Pt},uCloudCover:{value:.38},uCloudFlash:{value:0},uFlashCenter:{value:new Pt}})}update(t){const e=Zt.euclideanModulo(t,qh)/qh;this.uniforms.uCloudOffset.value.set(Zh[0]*e,Zh[1]*e)}setCover(t){this.uniforms.uCloudCover.value=Zt.clamp(t,0,1)}setFlash(t){this.uniforms.uCloudFlash.value=Zt.clamp(t,0,1)}dispose(){this.uniforms.uCloudMap.value.dispose()}}const ti={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},Ox=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
  gl_Position = p.xyww;
}`,zx=`
${Kh}
uniform vec2 uFlashCenter;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uBelow;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uSunGlow;
uniform float uNight;
varying vec3 vDir;
float sHash(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
void main() {
  vec3 dir = normalize(vDir);
  float h = dir.y;
  vec3 col = mix(uHorizon, uZenith, pow(clamp(h, 0.0, 1.0), 0.5));
  col = mix(col, uBelow, smoothstep(0.015, -0.3, h));
  float sd = max(dot(dir, uSunDir), 0.0);
  float above = smoothstep(-0.04, 0.03, h);
  col += uSunColor * (pow(sd, 900.0) * 3.0 + pow(sd, 40.0) * 0.35 + pow(sd, 6.0) * 0.12) * uSunGlow * above;
  vec3 cell = floor(dir * 190.0);
  float star = step(0.9972, sHash(cell)) * uNight * smoothstep(0.04, 0.35, h);
  col += vec3(0.85, 0.9, 1.0) * star * (0.5 + 0.5 * sHash(cell + 3.0));
  float layerDistance = cloudHeight - cameraPosition.y;
  if (h > 0.025 && layerDistance > 0.0 && uCloudCover > 0.0) {
    vec2 projection = cameraPosition.xz + dir.xz * layerDistance / h;
    float cloud = cloudDensity(projection);
    float fade = smoothstep(0.025, 0.17, h) * smoothstep(0.0, 70.0, layerDistance);
    vec3 litCloud = mix(vec3(0.87, 0.92, 0.99), uSunColor, 0.25 + 0.25 * sd);
    vec3 nightCloud = mix(vec3(0.019, 0.027, 0.047), vec3(0.046, 0.061, 0.089), sd);
    vec3 cloudColor = mix(litCloud, nightCloud, smoothstep(0.15, 1.0, uNight));
    cloudColor *= mix(0.93, 0.72, cloud);
    cloudColor *= mix(1.0, 0.36, smoothstep(0.54, 0.98, uCloudCover));
    if (uCloudFlash > 0.0) {
      float glow = 1.0 - smoothstep(150.0, 960.0, distance(projection, uFlashCenter));
      cloudColor += vec3(0.63, 0.73, 1.0) * (uCloudFlash * glow);
    }
    col = mix(col, cloudColor, cloud * fade);
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;class Bx{constructor(t,e,n,s){Z(this,"sun",new jf(16777215,3));Z(this,"hemi",new $f(16777215,8947848,1));Z(this,"sky");Z(this,"horizon",{value:new Tt});Z(this,"sunDir",new W);Z(this,"cloudShadowStrength",{value:0});Z(this,"skyUniforms");Z(this,"from");Z(this,"to");Z(this,"t",1);Z(this,"mode","day");this.renderer=t,this.water=e,this.from=this.to=ti.day,this.skyUniforms={...s.uniforms,uZenith:{value:new Tt},uHorizon:this.horizon,uBelow:{value:new Tt},uSunDir:{value:new W},uSunColor:{value:new Tt},uSunGlow:{value:1},uNight:{value:0}},this.sky=new qt(new Zo(1,32,16),new en({uniforms:this.skyUniforms,vertexShader:Ox,fragmentShader:zx,side:$e,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,n>0&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n),this.sun.shadow.radius=1.5),this.apply(1)}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=ti[t],this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=Zt.clamp(e*.7,90,2400),s=this.sun.shadow,r=s.camera,a=n*2/s.mapSize.x,o=Math.round(t.x/a)*a,l=Math.round(t.z/a)*a,c=n*2.4+300;this.sun.target.position.set(o,0,l),this.sun.position.set(o,0,l).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=Zt.clamp(a*1.6,.06,1.2))}setSolar(t){const e=(t%1440+1440)%1440,n=6*60,s=20.5*60;let r,a;if(e>=n&&e<=s)a=(e-n)/(s-n),r=Math.sin(Math.PI*a)*70;else{const p=((e<n?e+1440:e)-s)/(1440-(s-n));a=p<.5?1:0,r=-Math.sin(Math.PI*p)*40}const o=Zt.degToRad(110*(1-2*a)),l=Zt.degToRad(Math.max(r,5)),c=[Math.sin(o)*Math.cos(l),Math.sin(l),-Math.cos(o)*Math.cos(l)];let h;r>=25?h=ti.day:r>=6?h=ul(ti.golden,ti.day,(r-6)/19):r>=-6?h=ul(ti.night,ti.golden,(r+6)/12):h=ti.night;const u=Zt.clamp((2-r)/6,0,1),f=ti.night.sunDir,d=[c[0]+(f[0]-c[0])*u,c[1]+(f[1]-c[1])*u,c[2]+(f[2]-c[2])*u];this.from=this.to={...h,sunDir:d},this.mode=r>=25?"day":r>=-6?"golden":"night",this.apply(1)}snapshot(){return ul(this.from,this.to,Gx(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.castShadow||this.sun.position.copy(this.sunDir),this.cloudShadowStrength.value=.64*(1-Zt.smoothstep(e.night,.25,.95)),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night;const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new Tt(e.shallow),.35),ta.value=e.night,this.renderer.toneMappingExposure=e.exposure}}function Gx(i){return i*i*(3-2*i)}function ul(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,a)=>new Tt(r).lerp(new Tt(a),e).getHex(),s=(r,a)=>r+(a-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}const Gn=1.5;class $h{constructor(t,e,n,s,r,a,o,l){Z(this,"nx");Z(this,"nz");Z(this,"y");Z(this,"xMin");Z(this,"zMin");Z(this,"xMax");Z(this,"zMax");Z(this,"dx");Z(this,"dz");Z(this,"cellX");Z(this,"cellZ");if(this.raw=t,this.exposure=e,this.w=n,this.h=s,this.sizeX=r,this.sizeZ=a,this.cellX=r/n,this.cellZ=a/s,this.nx=Math.floor((n-1)/o)+1,this.nz=Math.floor((s-1)/o)+1,this.dx=this.cellX*o,this.dz=this.cellZ*o,this.xMin=-r/2+this.cellX/2,this.zMin=-a/2+this.cellZ/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=l??new Float32Array(this.nx*this.nz),!l)for(let c=0;c<this.nz;c++)for(let h=0;h<this.nx;h++)this.y[c*this.nx+h]=t[c*o*n+h*o]*Gn}yAt(t,e){let n=(t-this.xMin)/this.dx,s=(e-this.zMin)/this.dz;n<0?n=0:n>this.nx-1.0001&&(n=this.nx-1.0001),s<0?s=0:s>this.nz-1.0001&&(s=this.nz-1.0001);const r=n|0,a=s|0,o=n-r,l=s-a,c=a*this.nx+r,h=this.y[c],u=this.y[c+1],f=this.y[c+this.nx],d=this.y[c+this.nx+1];return o+l<=1?h+(u-h)*o+(f-h)*l:d+(f-d)*(1-o)+(u-d)*(1-l)}bilinear(t,e,n){let s=(e+this.sizeX/2)/this.cellX-.5,r=(n+this.sizeZ/2)/this.cellZ-.5;s<0?s=0:s>this.w-1.0001&&(s=this.w-1.0001),r<0?r=0:r>this.h-1.0001&&(r=this.h-1.0001);const a=s|0,o=r|0,l=s-a,c=r-o,h=o*this.w+a;return(t[h]*(1-l)+t[h+1]*l)*(1-c)+(t[h+this.w]*(1-l)+t[h+this.w+1]*l)*c}metresAt(t,e){return this.bilinear(this.raw,t,e)}exposureAt(t,e){return this.bilinear(this.exposure,t,e)}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}}const ia=128;function kx(i,t,e){const{nx:n,nz:s}=i,r=Math.min(ia+1,n-t),a=Math.min(ia+1,s-e),o=new Float32Array(r*a*3),l=new Float32Array(r*a*3),c=new Float32Array(r*a*2);for(let f=e;f<e+a;f++)for(let d=t;d<t+r;d++){const p=(f-e)*r+d-t,_=i.xMin+d*i.dx,m=i.zMin+f*i.dz;o[p*3]=_,o[p*3+1]=i.y[f*n+d],o[p*3+2]=m,c[p*2]=(_+i.sizeX/2)/i.sizeX,c[p*2+1]=1-(m+i.sizeZ/2)/i.sizeZ;const g=i.y[f*n+Math.max(d-1,0)],S=i.y[f*n+Math.min(d+1,n-1)],x=i.y[Math.max(f-1,0)*n+d],M=i.y[Math.min(f+1,s-1)*n+d],E=(S-g)/(2*i.dx),b=(M-x)/(2*i.dz),v=Math.hypot(E,1,b);l[p*3]=-E/v,l[p*3+1]=1/v,l[p*3+2]=-b/v}const h=new Uint16Array((r-1)*(a-1)*6);let u=0;for(let f=0;f<a-1;f++)for(let d=0;d<r-1;d++){const p=f*r+d,_=p+1,m=p+r,g=m+1;h[u++]=p,h[u++]=m,h[u++]=_,h[u++]=_,h[u++]=m,h[u++]=g}return{pos:o,nor:l,uv:c,idx:h}}function Hx(i){const t=[];for(let e=0;e<i.nz-1;e+=ia)for(let n=0;n<i.nx-1;n+=ia)t.push(kx(i,n,e));return t}const dl=10,Vx=5,hs=4,Wx=3;function sa(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Int16Array(e.buffer,0,e.length>>1)}async function Xx(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,a=0,o=0,l=0;const c=[];for(;n<t.length;){const _=e.getUint32(n),m=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(m==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),a=t[n+16],o=t[n+17],l=t[n+20];else if(m==="IDAT")c.push(t.subarray(n+8,n+8+_));else if(m==="IEND")break;n+=12+_}if(a!==8||o!==2&&o!==6||l)throw new Error("Unsupported terrain image format");const h=o===2?3:4,u=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),f=new Uint8Array(await new Response(u).arrayBuffer()),d=s*h,p=new Uint8Array(d*r);for(let _=0;_<r;_++){const m=f[_*(d+1)],g=_*(d+1)+1,S=_*d;for(let x=0;x<d;x++){const M=x>=h?p[S+x-h]:0,E=_>0?p[S-d+x]:0,b=x>=h&&_>0?p[S-d+x-h]:0;let v=f[g+x];if(m===1)v+=M;else if(m===2)v+=E;else if(m===3)v+=M+E>>1;else if(m===4){const y=Math.abs(E-b),T=Math.abs(M-b),w=Math.abs(M+E-2*b);v+=y<=T&&y<=w?M:T<=w?E:b}p[S+x]=v&255}}return{width:s,height:r,channels:h,data:p}}async function Yx(i,t,e){const[n,s]=await Promise.all([fetch(i.town,{signal:e}).then(u=>{if(!u.ok)throw new Error("Could not load the town data");return u.json()}).then(u=>(t("Streets and buildings"),u)),fetch(i.height,{signal:e}).then(u=>{if(!u.ok)throw new Error("Could not load the terrain");return u.arrayBuffer()}).then(Xx).then(u=>(t("Terrain"),u))]);if(e.aborted)throw e.reason;const{meta:r}=n,a=s.width*s.height,o=new Float32Array(a),l=new Float32Array(a),c=s.channels;for(let u=0;u<a;u++)o[u]=(s.data[u*c]<<8|s.data[u*c+1])/r.heightScale-r.heightOffset,l[u]=s.data[u*c+2]/255;const h=new $h(o,l,r.grid[0],r.grid[1],r.size[0],r.size[1],i.terrainStep);return{town:{...n,houses:sa(n.houses),cabins:sa(n.cabins),cars:sa(n.cars),trees:sa(n.trees)},heights:o,exposure:l,surface:h.y,terrainTiles:Hx(h)}}async function qx(i,t,e,n,s){const r=new Set,a=h=>{s.aborted||r.has(h)||(r.add(h),e(r.size/4,h))};e(0,"Fetching map data");const o={town:new URL(i.town,document.baseURI).href,height:new URL(i.height,document.baseURI).href,terrainStep:t},l=n.run({kind:"world",source:o},()=>Yx(o,a,s),s,a),c=new Kf().loadAsync(i.ground).then(h=>(a("Ground texture"),h));try{const[h,u]=await Promise.all([l,c]);if(s.aborted)throw s.reason;return u.colorSpace=Pe,u.anisotropy=8,u.generateMipmaps=!0,u.minFilter=xn,a("Building the model"),{...h,ground:u}}catch(h){throw c.then(u=>u.dispose(),()=>{}),h}}const fl=[["24",[-1702,305.08,12.22,9.68,-.7524],1,2,7232070,12103050,"v","o"],["22",[-1686.64,316,11.46,8.62,-.3855],2,1,9344923,13224902,"b","o"],["22 (garage)",[-1679.45,321.49,4.21,3.67,-.4978],1,3,9344923,13224902,"","t"],["20",[-1668.03,323.49,7.44,11.59,-.0907],1,0,13018492,10722704,"g","o"],["18",[-1645.61,335.05,11.19,8.31,-.346],1,0,14206627,9145997,"","o"],["16",[-1616.02,330.47,14.65,10.49,-.4859],1,2,13485749,11971464,"","o"],["14",[-1610.3,354.63,11.28,9.08,-.3794,-1609.54,344.81,5.42,9.72,-.3794],1,1,15328729,8079926,"","o"],["14A",[-1594.08,360.97,8.66,9.66,-.4636],1,2,14275006,12365706,"","o"],["10",[-1572.46,363.32,13.65,23.59,-.3996],1,0,14865590,9409683,"g","o"],["outbuilding at 8",[-1563.96,372.87,7.3,6.68,-.4275],1,0,14078146,13947340,"","s"],["8",[-1556.98,362.95,8.83,17.59,-.4512,-1554.25,370.09,2.32,7.12,-.4512],1,3,15526108,15000798,"","o"],["6",[-1542.81,380.79,14.34,8.58,-.3577,-1539.06,376.26,10.48,2.55,-.3577],1,2,15328470,14869212,"","o"],["4",[-1530.34,391.35,11.21,5.66,.0312,-1528.02,387.1,6.31,2.71,.0312],1,1,10134438,14014161,"","o"],["2",[-1509.87,393.04,12.04,8.58,-.3975,-1510.39,386.54,6.05,3,-.3975],1,1,15262678,14474454,"","o"],["29",[-1729.27,353.38,8.8,16.67,2.8003],1,1,14209989,14803419,"","o"],["27",[-1712.88,352.46,13.74,8.15,2.847,-1712.42,359,9.08,4.1,2.847],1,0,13222836,9277840,"v","o"],["25",[-1703.96,376.48,9.87,17.42,2.8565],1,0,15129535,10135434,"v","o"],["23",[-1683.5,379.63,11,25,2.6798],1,2,15789800,15000798,"","t"],["21",[-1665.11,377.41,10.66,13.24,2.7699],1,0,12240814,9409425,"v","o"],["17",[-1639.74,395.06,10.25,9.08,2.7085],2,3,15921644,15263970,"","o"],["outbuilding at 13",[-1629.65,418.37,4.54,7.23,2.9043],1,0,14078146,9342090,"","s"],["15",[-1627.03,407.09,11.04,13.86,2.8101,-1621.08,400.52,4.06,2.45,2.8101],1,3,15724006,14869212,"","o"],["13",[-1617.09,414.46,6.19,22.3,2.6721,-1614.57,423.97,6.93,7.63,2.6721],1,0,14209730,8358524,"","o"],["9",[-1574.55,442.34,11.72,14.88,2.8379],1,0,14932676,12628620,"","o"],["7",[-1559.58,439.94,8.54,11.74,2.8311],1,3,14275520,9412735,"","o"],["outbuilding",[-1540.1,440.05,7.53,5.25,2.5613],1,0,14078146,11313563,"","s"],["5",[-1526.07,445.23,16.31,7.93,2.7377],1,0,13617336,9211790,"","o"]],Jh=[-1592.2,410.8],Ks=[-1744,317.6],$s=[-1495,439.1],Zx=45;function Qh(i,t,[e,n,s,r]){const a=s-e,o=r-n,l=a*a+o*o||1,c=Math.max(0,Math.min(1,((i-e)*a+(t-n)*o)/l));return Math.hypot(i-e-a*c,t-n-o*c)}const jh=new WeakMap;function tu(i){let t=jh.get(i);if(t)return t;const e=[],n=[],s=[Math.min(Ks[0],$s[0])-120,Math.min(Ks[1],$s[1])-120],r=[Math.max(Ks[0],$s[0])+120,Math.max(Ks[1],$s[1])+120];for(const a of i.roads){if(a[0]>4)continue;const o=i.names[a[4]]??"",l=a[5];for(let c=0;c+3<l.length;c+=2){const h=[l[c]/10,l[c+1]/10,l[c+2]/10,l[c+3]/10];if(Math.max(h[0],h[2])<s[0]||Math.min(h[0],h[2])>r[0]||Math.max(h[1],h[3])<s[1]||Math.min(h[1],h[3])>r[1])continue;const u=(h[0]+h[2])/2;(o==="Norman Road"&&u>=Ks[0]-1&&u<=$s[0]+1?e:n).push(h)}}return t=(a,o)=>{if(a<s[0]||a>r[0]||o<s[1]||o>r[1]||!e.length||Math.hypot(a-Jh[0],o-Jh[1])<24)return!1;let l=1/0,c=1/0;for(const h of e)l=Math.min(l,Qh(a,o,h));if(l>Zx)return!1;for(const h of n)c=Math.min(c,Qh(a,o,h));return l<c},jh.set(i,t),t}function Kx(i,t,e=1.5){for(const[,n]of fl)for(let s=0;s<n.length;s+=5){const[r,a,o,l,c]=n.slice(s,s+5),h=i-r,u=t-a;if(h*h+u*u>400)continue;const f=Math.cos(c),d=Math.sin(c),p=h*f-u*d,_=h*d+u*f;if(Math.abs(p)<o/2+e&&Math.abs(_)<l/2+e)return!0}return!1}const ra=[15921126,15261640,13619920,11120043,12110550,11845800,14272936,5988452,11036494,14205088,15327150,16448250].map(G),_i=[15000277,12435386,8948618,4934726,3487290,6957594,8160360,3555666,11888447,11644323].map(G),He=G(3163994),Js=[7031348,3098712,9056042,15658730,4151878].map(G),us=G(9138002),on=G(16053230),aa=G(12171184),oa=G(1846090),eu=[15327951,3099196,2504783,8007210,3816770,13214282,5209226].map(G);function pl(i,t,e,n,s,r){const a=te(r,.9);if(t>=e){const o=t-e;i.quad(-t,n,e,t,n,e,o,n+s,0,-o,n+s,0,r),i.quad(t,n,-e,-t,n,-e,-o,n+s,0,o,n+s,0,r),i.tri(t,n,e,t,n,-e,o,n+s,0,a),i.tri(-t,n,-e,-t,n,e,-o,n+s,0,a)}else{const o=e-t;i.quad(t,n,e,t,n,-e,0,n+s,-o,0,n+s,o,r),i.quad(-t,n,-e,-t,n,e,0,n+s,o,0,n+s,-o,r),i.tri(-t,n,e,t,n,e,0,n+s,o,a),i.tri(t,n,-e,-t,n,-e,0,n+s,-o,a)}}function Li(i,t,e,n,s,r,a,o){const l=t/2,c=e/2;if(t>=e){const u=c*s;return i.quad(-l-r,n-r*s,c+r,l+r,n-r*s,c+r,l+r,n+u,0,-l-r,n+u,0,a),i.quad(l+r,n-r*s,-c-r,-l-r,n-r*s,-c-r,-l-r,n+u,0,l+r,n+u,0,a),i.tri(l,n,c,l,n,-c,l,n+u,0,o),i.tri(-l,n,-c,-l,n,c,-l,n+u,0,o),u}const h=l*s;return i.quad(l+r,n-r*s,c+r,l+r,n-r*s,-c-r,0,n+h,-c-r,0,n+h,c+r,a),i.quad(-l-r,n-r*s,-c-r,-l-r,n-r*s,c+r,0,n+h,c+r,0,n+h,-c-r,a),i.tri(-l,n,c,l,n,c,0,n+h,c,o),i.tri(l,n,-c,-l,n,-c,0,n+h,-c,o),h}function Qs(i,t,e,n,s,r,a,o,l){const c=t/2,h=e/2,u=n+s,f=n+r,d=(u-f)/e;i.quad(-c-a,u+a*d,h+a,c+a,u+a*d,h+a,c+a,f-a*d,-h-a,-c-a,f-a*d,-h-a,o),i.quad(-c,n,h,c,n,h,c,u,h,-c,u,h,l),i.quad(c,n,h,c,n,-h,c,f,-h,c,u,h,l),i.quad(-c,n,-h,-c,n,h,-c,u,h,-c,f,-h,l),i.quad(c,n,-h,-c,n,-h,-c,f,-h,c,f,-h,l)}const un=.05;function dn(i,t,e,n,s,r,a,o=0){const l=t/2+un;i.quad(e,s,l,n,s,l,n,r,l,e,r,l,a,o)}function nu(i,t,e,n,s,r,a,o=0){const l=-t/2-un;i.quad(n,s,l,e,s,l,e,r,l,n,r,l,a,o)}function ml(i,t,e,n,s,r,a,o=0){const l=t/2+un;i.quad(l,s,n,l,s,e,l,r,e,l,r,n,a,o)}function gl(i,t,e,n,s,r,a,o=0){const l=-t/2-un;i.quad(l,s,e,l,s,n,l,r,n,l,r,e,a,o)}function la(i,t,e,n){let s=1/0,r=-1/0;for(const[a,o]of[[-e,-n],[e,-n],[e,n],[-e,n],[0,0]]){const l=i.yAt(t.wx(a,o),t.wz(a,o));l<s&&(s=l),l>r&&(r=l)}return{lo:s,hi:r}}function $x(i,t,e,n,s,r,a,o,l,c,h,u){i.frame(e,0,n,a);const f=la(t,i,s/2,r/2),d=f.hi+.18;i.frame(e,d,n,a);const p=ra[c%ra.length],_=_i[h%_i.length],m=o===2?5.5:2.85,g=s/2,S=r/2,x=te(p,.7);i.box(-g,f.lo-d-.3,-S,g,0,S,x,null),i.box(-g,0,-S,g,m,S,p,l===3?te(_,1):null);let M=m;if(l===0){const y=Math.min(g,S)+.5;pl(i,g+.5,S+.5,m,y*.44,_),M=m+y*.44}else l===1?M=m+Li(i,s,r,m,.5,.4,_,p):l===2?(Qs(i,s,r,m,1.35,.25,.5,_,p),dn(i,r,-g+.5,g-.5,m+.25,m+1.05,He,u()<.5?1:0),M=m+1.4):(i.box(-g-.15,m,-S-.15,g+.15,m+.3,S+.15,te(p,.92),_),M=m+.3);const E=Js[Math.floor(u()*Js.length)];for(let v=0;v<o;v++){const y=v*2.75+.85,T=y+1.3,w=Math.max(2,Math.floor(s/3.2)),C=v===0?Math.floor(u()*w):-1;for(let P=0;P<w;P++){const B=-g+(P+.5)/w*s;P===C?dn(i,r,B-.5,B+.5,0,2.1,E):dn(i,r,B-.85,B+.85,y,T,He,u()<.55?1:0)}const L=Math.max(1,Math.floor(s/3.8));for(let P=0;P<L;P++){const B=-g+(P+.5)/L*s;nu(i,r,B-.75,B+.75,y,T,He,u()<.5?1:0)}const U=Math.max(1,Math.floor(r/4.2));for(let P=0;P<U;P++){const B=-S+(P+.5)/U*r;ml(i,s,B-.7,B+.7,y,T,He,u()<.45?1:0),gl(i,s,B-.7,B+.7,y,T,He,u()<.45?1:0)}}const b=u();if(o===1&&b<.36){const v=g*(.6+u()*.4),y=1.9;i.box(-v,-.12,S,v,.02,S+y,us),i.quad(-v-.2,2.3,S+y+.2,v+.2,2.3,S+y+.2,v+.2,2.7,S,-v-.2,2.7,S,te(_,.93));const T=Math.max(2,Math.round(v*2/3));for(let w=0;w<=T;w++){const C=-v+w/T*v*2;i.box(C-.06,0,S+y-.12,C+.06,2.32,S+y,on,null)}}else if(o===2&&b<.5){const v=g*(.55+u()*.45),y=2;i.box(-v,2.62,S,v,2.78,S+y,aa,us,te(aa,.8));const T=u()<.5?G(10469580):on;i.box(-v,2.78,S+y-.05,v,3.75,S+y,T,null),i.box(-v,2.78,S,-v+.05,3.75,S+y,T,null),i.box(v-.05,2.78,S,v,3.75,S+y,T,null);for(const w of[-v+.1,v-.1])i.box(w-.08,0,S+y-.2,w+.08,2.62,S+y-.04,on,null);u()<.5&&i.quad(-v-.2,5.05,S+y+.2,v+.2,5.05,S+y+.2,v+.2,5.4,S,-v-.2,5.4,S,te(_,.93))}if(u()<.1&&l<=1){const v=(u()-.5)*g,y=(u()-.5)*S*.6;i.box(v-.32,m,y-.32,v+.32,M+.55,y+.32,G(10116936))}if(u()<.24&&l<=1&&Jx(i,s,r,m,a,l,u),u()<.15){const v=(u()<.5?-1:1)*(g+1.25),y=-S+1.3;i.cyl(v,f.hi-d,y,1.05,1.05,2.1,8,u()<.5?G(9347975):G(12370625),G(11120814))}}function Jx(i,t,e,n,s,r,a){const o=t/2,l=e/2,c=r===0?.5:.4,h=.22,u=.74,f=.09;if(t>=e){const d=l+c,p=r===0?d*.44:l*.5*(1+c/l),_=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?o-l:o)*.7)*(.6+a()*.4),g=Math.cos(s)<0,S=g?1:-1,x=S*d*(1-h),M=S*d*(1-u),E=_+p*h+f,b=_+p*u+f;g?i.quad(-m,E,x,m,E,x,m,b,M,-m,b,M,oa):i.quad(m,E,x,-m,E,x,-m,b,M,m,b,M,oa)}else{const d=o+c,p=r===0?d*.44:o*.5*(1+c/o),_=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?l-o:l)*.7)*(.6+a()*.4),g=Math.sin(s)>0,S=g?1:-1,x=S*d*(1-h),M=S*d*(1-u),E=_+p*h+f,b=_+p*u+f;g?i.quad(x,E,m,x,E,-m,M,b,-m,M,b,m,oa):i.quad(x,E,-m,x,E,m,M,b,m,M,b,-m,oa)}}const Qx=G(9075302);function jx(i,t,e,n){const[,s,r,a,o,l,c]=e;let h=-1/0,u=1/0;for(let d=0;d<s.length;d+=5){const[p,_,m,g,S]=s.slice(d,d+5);i.frame(p,0,_,S);const x=[];for(const[E,b]of[[-m/2,-g/2],[m/2,-g/2],[m/2,g/2],[-m/2,g/2]])x.push(i.wx(E,b),i.wz(E,b));n.push(x);const M=la(t,i,m/2,g/2);h=Math.max(h,M.hi),u=Math.min(u,M.lo)}const f=h+.18;for(let d=0;d<s.length;d+=5)t_(i,f,u,s.slice(d,d+5),r,a,o,l,d===0?c:"",d===0)}function t_(i,t,e,[n,s,r,a,o],l,c,h,u,f,d){const p=Oe(Math.round(n*31+s*17)>>>0);i.frame(n,t,s,o);const _=G(h),m=G(u),g=l===2?5.5:2.85,S=r/2,x=a/2;if(i.box(-S,e-t-.3,-x,S,0,x,te(_,.7),null),i.box(-S,0,-x,S,g,x,_,c===3?m:null),c===0){const y=Math.min(S,x)+.5;pl(i,S+.5,x+.5,g,y*.44,m)}else c===1?Li(i,r,a,g,.5,.4,m,_):c===2?Qs(i,r,a,g,1.1,.2,.5,m,_):i.box(-S-.15,g,-x-.15,S+.15,g+.3,x+.15,te(_,.92),m);if(r<5||a<3)return;const M=f.includes("g")?Math.min(4.8,r*.42):0;M&&dn(i,a,S-.4-M,S-.4,0,2.2,Qx);const E=-S,b=S-(M?M+.8:0);for(let v=0;v<l;v++){const y=v*2.75+.85,T=y+1.3,w=Math.max(2,Math.floor((b-E)/3.2));for(let U=0;U<w;U++){const P=E+(U+.5)/w*(b-E);d&&v===0&&U===w-1?dn(i,a,P-.5,P+.5,0,2.1,Js[0]):dn(i,a,P-.85,P+.85,y,T,He,p()<.5?1:0)}const C=Math.max(1,Math.floor(r/3.8));for(let U=0;U<C;U++){const P=-S+(U+.5)/C*r;nu(i,a,P-.75,P+.75,y,T,He,p()<.5?1:0)}const L=Math.max(1,Math.floor(a/4.2));for(let U=0;U<L;U++){const P=-x+(U+.5)/L*a;ml(i,r,P-.7,P+.7,y,T,He,p()<.45?1:0),gl(i,r,P-.7,P+.7,y,T,He,p()<.45?1:0)}}if(f.includes("v")){const v=Math.min(S-.3,(b-E)/2),y=(E+b)/2,T=2.2;i.box(y-v,-.12,x,y+v,.02,x+T,us),i.quad(y-v-.2,2.3,x+T+.2,y+v+.2,2.3,x+T+.2,y+v+.2,2.7,x,y-v-.2,2.7,x,te(m,.93));const w=Math.max(2,Math.round(v*2/3));for(let C=0;C<=w;C++){const L=y-v+C/w*v*2;i.box(L-.06,0,x+T-.12,L+.06,2.32,x+T,on,null)}}if(f.includes("b")&&l===2){const v=S*.8,y=1.8;i.box(-v,2.62,x,v,2.78,x+y,aa,us,te(aa,.8)),i.box(-v,2.78,x+y-.05,v,3.75,x+y,on,null),i.box(-v,2.78,x,-v+.05,3.75,x+y,on,null),i.box(v-.05,2.78,x,v,3.75,x+y,on,null);for(const T of[-v+.1,v-.1])i.box(T-.08,0,x+y-.2,T+.08,2.62,x+y-.04,on,null)}}function e_(i,t,e,n,s,r,a,o,l,c){i.frame(e,0,n,a);const h=la(t,i,s/2,r/2);i.frame(e,h.hi+.05,n,a);const u=[G(14275778),G(9083526),G(12041145),G(7305842)][l%4],f=_i[c%_i.length],d=2.4,p=s/2,_=r/2;i.box(-p,h.lo-h.hi-.3,-_,p,d,_,u,null),o===1?Li(i,s,r,d,.32,.2,f,u):Qs(i,s,r,d,.6,.1,.2,f,u),dn(i,r,-p*.72,p*.72,0,2.05,te(u,1.12))}const ca=[14243375,3112880,6266970,14725690,9134e3,4170656,14252591,4878261].map(G);function n_(i,t,e,n,s,r,a,o){const l={0:[8,4.2],1:[6.4,4.8],2:[3.6,3.6],3:[10.5,7.5]},[c,h]=l[r];i.frame(e,0,n,s);const u=la(t,i,c/2,h/2);i.frame(e,u.hi+.05,n,s);const f=u.lo-u.hi-.3;if(r===0){const d=[G(15129798),G(12175305),G(13219994),G(10465434)][a%4],p=_i[(a*3+1)%_i.length];i.box(-4,f,-2.1,4,.35,2.1,te(d,.6),null),i.box(-4,.35,-2.1,4,2.75,2.1,d,null),Li(i,8,4.2,2.75,.42,.35,p,d),i.box(-3.2,.2,2.1,1.2,.35,3.7,us),i.box(-3.2,.35,3.62,1.2,1.25,3.7,on,null),dn(i,4.2,-2.8,-1.2,1.2,2.3,He,o()<.5?1:0),dn(i,4.2,-.4,.5,.35,2.4,Js[a%Js.length]),dn(i,4.2,1.4,3.2,1.2,2.3,He,o()<.5?1:0)}else if(r===1){const d=ca[a%ca.length];i.box(-2.9,.45,-2.3,2.9,2.55,-.1,on,G(15263972),G(9079432)),i.box(-2.92,1.05,-2.32,2.92,1.3,-.08,d,null),i.box(-1.4,0,-2.2,-.8,.5,-.2,G(2763308)),i.box(.8,0,-2.2,1.4,.5,-.2,G(2763308)),dn(i,-.2,-2.2,-1,1.45,2.15,He,o()<.4?1:0),i.box(-2.6,0,-.1,2.6,2,2.3,Zs(d,on,.72),null),i.quad(-2.7,2,2.4,2.7,2,2.4,2.7,2.5,-.1,-2.7,2.5,-.1,Zs(d,on,.55))}else if(r===2){const d=ca[a%ca.length];i.blob(0,0,0,1.75,1.55,1.75,6,4,te(d,.85),d)}else{const d=G(14209732),p=G(5922659);i.box(-5.25,f,-3.75,5.25,3,3.75,d,null),Qs(i,10.5,7.5,3,1.5,.2,.7,p,G(9072466)),dn(i,7.5,-4.4,4.4,.3,2.6,He,o()<.6?1:0),i.box(-5.25,.05,3.75,5.25,.25,6.2,us),ml(i,10.5,-2,2,.9,2.3,He,o()<.5?1:0),gl(i,10.5,-2,2,.9,2.3,He,o()<.5?1:0)}}function i_(i){const t=i.length/2;let e={cx:0,cz:0,w:0,d:0,heading:0,area:1/0};for(let n=0;n<t;n++){const s=(n+1)%t;let r=i[s*2]-i[n*2],a=i[s*2+1]-i[n*2+1];const o=Math.hypot(r,a);if(o<.5)continue;r/=o,a/=o;let l=1/0,c=-1/0,h=1/0,u=-1/0;for(let d=0;d<t;d++){const p=i[d*2],_=i[d*2+1],m=p*r+_*a,g=-p*a+_*r;m<l&&(l=m),m>c&&(c=m),g<h&&(h=g),g>u&&(u=g)}const f=(c-l)*(u-h);if(f<e.area){const d=(l+c)/2,p=(h+u)/2;e={cx:d*r-p*a,cz:d*a+p*r,w:c-l,d:u-h,heading:Math.atan2(-a,r),area:f}}}return e}function s_(i,t){const e=i.length/2,n=cl(i)>0?1:-1,s=[];for(let r=0;r<e;r++){const a=(r+e-1)%e,o=(r+1)%e;let l=i[r*2]-i[a*2],c=i[r*2+1]-i[a*2+1],h=i[o*2]-i[r*2],u=i[o*2+1]-i[r*2+1];const f=Math.hypot(l,c)||1,d=Math.hypot(h,u)||1;l/=f,c/=f,h/=d,u/=d;const p=-c*n,_=l*n,m=-u*n,g=h*n;let S=p+m,x=_+g;const M=Math.hypot(S,x)||1;S/=M,x/=M;const E=t/Math.max(.4,S*p+x*_);s.push(i[r*2]+S*E,i[r*2+1]+x*E)}return s}const r_=new Set(["house","detached","residential","terrace","yes;house","semidetached_house","bungalow"]),a_=new Set(["shed","garage","garages","toilets","hut"]);function iu(i,t,e,n,s,r){const a=e.p.map(T=>T/10),o=a.length/2;let l=0,c=0,h=1/0,u=-1/0;for(let T=0;T<o;T++){l+=a[T*2],c+=a[T*2+1];const w=t.yAt(a[T*2],a[T*2+1]);w<h&&(h=w),w>u&&(u=w)}l/=o,c/=o;const f=Math.abs(cl(a)),d=i_(a),p=f/(d.w*d.d||1),_=u+.15,m=Math.hypot(l-r[0],c-r[1])<420,g=e.k==="retail"||e.k==="commercial"||!!e.u||!!e.n||e.k==="yes"&&(f>300||m&&f>110),S=!g&&(r_.has(e.k)||e.k==="yes"&&f<=300),x=a_.has(e.k)||f<28;let M;e.l?M=e.l*3.1:e.k==="roof"?M=3:e.k==="hangar"?M=6.5:e.k==="church"?M=5:x?M=2.5:S?M=s()<.2?5.5:2.9:M=f>1200?7:f>500?5.6:4.3+s()*.8;const E={name:e.n,use:e.u,kind:e.k,poly:a,cx:l,cz:c,area:f,obb:d,floorY:_,wallH:M,topY:_+M};let b=26;for(let T=0;T<o;T++){const w=(T+1)%o,C=a[T*2],L=a[T*2+1],U=a[w*2],P=a[w*2+1],B=Math.hypot(U-C,P-L);if(B<4.5)continue;const F=(C+U)/2,k=(L+P)/2,H=n.nearest(F,k,b);if(!H)continue;let z=-(P-L)/B,N=(U-C)/B;if(z*(F-l)+N*(k-c)<0&&(z=-z,N=-N),(H.px-F)*z+(H.pz-k)*N<H.dist*.5)continue;b=H.dist;const D=Math.atan2(z,N),Y=(U-C)*Math.cos(D)-(P-L)*Math.sin(D);E.street={x:Y>0?C:U,z:Y>0?L:P,heading:D,length:B}}if(i.frame(0,_,0,0),e.k==="roof"){const T=G(12172728);i.walls(a,M-.25,M,T),i.cap(a,M,T);for(let w=0;w<o;w++)i.box(a[w*2]-.12,h-_,a[w*2+1]-.12,a[w*2]+.12,M-.25,a[w*2+1]+.12,G(6974832),null);return E}const v=g?[G(15328470),G(14275266),G(13620178),G(15128768),G(12568777),G(15789540),G(13220258)][Math.floor(s()*7)]:ra[Math.floor(s()*ra.length)],y=g&&f>300?[G(13225160),G(11777972),G(14211280),G(10133405)][Math.floor(s()*4)]:_i[Math.floor(s()*_i.length)];if(i.walls(a,h-_-.3,M,v),e.k==="church"){i.frame(d.cx,_,d.cz,d.heading);const T=Li(i,d.w,d.d,M,1.15,.3,G(5922659),v);E.topY=_+M+T}else if((S||x||e.k==="hangar")&&p>.8&&o<=8)if(i.frame(d.cx,_,d.cz,d.heading),e.k==="hangar")E.topY=_+M+Li(i,d.w,d.d,M,.3,.3,G(12172728),v);else if(x)Qs(i,d.w,d.d,M,.5,.1,.2,y,v);else if(s()<.55){const T=Math.min(d.w,d.d)/2+.45;pl(i,d.w/2+.45,d.d/2+.45,M,T*.44,y),E.topY=_+M+T*.44}else E.topY=_+M+Li(i,d.w,d.d,M,.5,.4,y,v);else if(f<420&&!g){const T=s_(a,Math.min(2.2,Math.sqrt(f)*.18)),w=1.15;for(let C=0;C<o;C++){const L=(C+1)%o;i.quad(a[C*2],M,a[C*2+1],a[L*2],M,a[L*2+1],T[L*2],M+w,T[L*2+1],T[C*2],M+w,T[C*2+1],y)}i.cap(T,M+w,te(y,1.05)),E.topY=_+M+w}else{i.cap(a,M-.05,y),i.walls(a,M,M+.45,te(v,.96)),E.topY=_+M+.45;const T=Math.min(6,Math.floor(f/220));for(let w=0;w<T;w++){const C=(s()-.5)*d.w*.5,L=(s()-.5)*d.d*.5,U=Math.cos(d.heading),P=Math.sin(d.heading),B=d.cx+C*U+L*P,F=d.cz-C*P+L*U;i.box(B-1.1,M,F-.8,B+1.1,M+.9,F+.8,G(11120304))}}if(!x&&e.k!=="hangar"){const T=Math.max(1,Math.round(M/3));for(let w=0;w<o;w++){const C=(w+1)%o,L=a[w*2],U=a[w*2+1],P=a[C*2],B=a[C*2+1],F=Math.hypot(P-L,B-U);if(F<3.2)continue;let k=-(B-U)/F,H=(P-L)/F;k*((L+P)/2-l)+H*((U+B)/2-c)<0&&(k=-k,H=-H);const z=Math.atan2(k,H),N=(P-L)*Math.cos(z)-(B-U)*Math.sin(z);i.frame(N>0?L:P,_,N>0?U:B,z);const D=Math.floor(F/(g?4.2:3.4));for(let Y=0;Y<T;Y++){const it=Y*3+.9;if(!(g&&Y===0&&E.street&&Math.abs(z-E.street.heading)<.01))for(let q=0;q<D;q++){const et=(q+.5)/D*F;i.quad(et-.8,it,un,et+.8,it,un,et+.8,it+1.3,un,et-.8,it+1.3,un,He,s()<.5?1:0)}}}}if(g&&E.street&&!e.k.includes("church")&&f>60){const T=E.street;i.frame(T.x,_,T.z,T.heading);const w=eu[Math.floor(s()*eu.length)];if(i.quad(.5,.35,un,T.length-.5,.35,un,T.length-.5,2.7,un,.5,2.7,un,He,.9),m&&T.length>6&&M<9){i.box(.2,3,0,T.length-.2,3.16,2.7,w,te(w,.9),te(w,.75)),i.box(.2,2.75,2.62,T.length-.2,3.3,2.7,Zs(w,on,.25),null);const C=Math.max(1,Math.round(T.length/4.5));for(let L=0;L<=C;L++){const U=.35+L/C*(T.length-.7);i.box(U-.06,0,2.5,U+.06,3,2.62,G(4869456),null)}}}return i.frame(),E}function o_(i,t,e,n,s=()=>!1){const r=new tn;r.name="buildings";const a=cs(),o=900,l=new Map,c=(x,M)=>{const E=`${Math.floor(x/o)}:${Math.floor(M/o)}`;let b=l.get(E);return b||l.set(E,b=new ee),b},h=i.meta,u=[(145.7285-h.origin[0])*h.metresPerDegree[0],-(-38.63385-h.origin[1])*h.metresPerDegree[1]],f=Oe(3996),d=[];for(const x of i.buildings){let M=0,E=0;for(let b=0;b<x.p.length;b+=2)M+=x.p[b],E+=x.p[b+1];if(M/=x.p.length*5,E/=x.p.length*5,!s(M,E)){if(n.has(x.n)){const b=new ee,v=iu(b,t,x,e,Oe(1),u);v.custom=!0,d.push(v);continue}d.push(iu(c(M,E),t,x,e,f,u))}}const p=i.houses,_=tu(i);for(let x=0;x<p.length;x+=dl){const M=p[x]/4,E=p[x+1]/4,b=p[x+2]/10,v=p[x+3]/10,y=p[x+4]/10*(Math.PI/180),T=Oe(x*7919+17);s(M,E)||_(M,E)||(p[x+5]===1?e_(c(M,E),t,M,E,b,v,y,p[x+7],p[x+8],p[x+9]):$x(c(M,E),t,M,E,b,v,y,p[x+6],p[x+7],p[x+8],p[x+9],T))}const m=i.cabins;for(let x=0;x<m.length;x+=Vx){const M=m[x]/4,E=m[x+1]/4;s(M,E)||n_(c(M,E),t,M,E,m[x+2]/10*(Math.PI/180),m[x+3],m[x+4],Oe(x*31+5))}const g=[];for(const x of fl)s(x[1][0],x[1][1])||jx(c(x[1][0],x[1][1]),t,x,g);let S=0;for(const x of l.values()){x.frame(),S+=x.vertexCount/3;const M=new qt(x.build(),a);M.castShadow=!0,M.receiveShadow=!0,r.add(M)}return{group:r,footprints:d,designedWalls:g,triangles:S}}class l_{constructor(t){Z(this,"targetFps");Z(this,"deadline",-1/0);Z(this,"lastDraw");this.targetFps=t===30?30:60}get target(){return this.targetFps}setTarget(t){const e=t===30?30:60;return e===this.targetFps?!1:(this.targetFps=e,this.reset(),!0)}reset(){this.deadline=-1/0,this.lastDraw=void 0}takeFrame(t){if(t+1<this.deadline)return;const e=1e3/this.targetFps,n=this.deadline+e;this.deadline=n<=t?t+e:n;const s=this.lastDraw===void 0?0:(t-this.lastDraw)/1e3;return this.lastDraw=t,s}}const c_=.1,h_=180,u_=425,d_=650,f_=360,p_=480,m_=1.8,g_=450;function su(i,t,e){const n=Math.max(i.x-t,0,t-i.x-i.size),s=Math.max(i.z-e,0,e-i.z-i.size);return Math.hypot(n,s)}function ru(i){"close"in i&&i.close()}function xl(i){i.texture.dispose(),ru(i.image)}function x_(i,t){return new Promise((e,n)=>{if(t.aborted){n(t.reason);return}const s=new Image;s.crossOrigin="anonymous";const r=()=>{s.onload=s.onerror=null,t.removeEventListener("abort",a)},a=()=>{r(),s.removeAttribute("src"),n(t.reason)};s.onload=()=>{r(),e(s)},s.onerror=()=>{r(),n(new Error("Could not load ground detail"))},t.addEventListener("abort",a,{once:!0}),s.src=i})}class __{constructor(t,e,n,s,r,a){Z(this,"patches");Z(this,"manifest");Z(this,"manifestRetryAt",0);Z(this,"load");Z(this,"ready");Z(this,"residents");Z(this,"previous");Z(this,"vx",0);Z(this,"vz",0);Z(this,"closed",!1);this.urls=t,this.small=e,this.detail=n,this.anisotropy=s,this.worker=r,this.markDirty=a,this.residents=n.maps.map(()=>{})}update(t,e,n,s,r){if(!this.urls.detail||this.closed)return;const a=this.previous,o=a?t-a.time:0,l=a&&Math.hypot(e-a.x,n-a.y,s-a.z)>h_;if(a&&!l&&o<c_)return;if(this.previous={time:t,x:e,y:n,z:s},!a||l||o>1)this.vx=this.vz=0;else{const u=Math.min(1,o*4);this.vx+=((e-a.x)/o-this.vx)*u,this.vz+=((s-a.z)/o-this.vz)*u}if(!this.patches){!this.manifest&&t>=this.manifestRetryAt&&this.loadManifest(this.urls.detail);return}const c=Math.min(m_,g_/Math.max(1,Math.hypot(this.vx,this.vz))),h=this.patches.map(u=>{const f=u.slot!==-1,d=Math.min(su(u,e,s),su(u,e+this.vx*c,s+this.vz*c)+70);return{patch:u,score:d,present:f}}).filter(({score:u,present:f})=>r<=(f?p_:f_)&&u<=(f?d_:u_)).sort((u,f)=>u.score-f.score).slice(0,this.residents.length).map(({patch:u})=>u);for(const u of this.residents)u&&!h.includes(u.patch)&&this.evict(u);if(this.load&&!h.includes(this.load.patch)&&this.cancelLoad(),this.ready&&!h.includes(this.ready.patch)&&(xl(this.ready),this.ready=void 0),!this.load&&!this.ready){const u=h.find(f=>f.slot===-1&&t>=f.retryAt);u&&this.start(u)}}applyReady(){if(!this.ready)return;const t=this.residents.indexOf(void 0);if(t<0)return;const e=this.ready;this.ready=void 0,this.residents[t]=e;const{patch:n,texture:s}=e;n.slot=t,this.detail.maps[t].value=s,this.detail.rects[t].value.set(n.x,n.z,1/n.size,1)}dispose(){var t;if(!this.closed){this.closed=!0,(t=this.manifest)==null||t.abort(),this.cancelLoad(),this.ready&&xl(this.ready),this.ready=void 0;for(const e of this.residents)e&&this.evict(e);this.detail.fallback.dispose()}}async loadManifest(t){var n;const e=this.manifest=new AbortController;try{const s=new URL(t,document.baseURI),r=await fetch(s,{signal:e.signal});if(r.status===404){this.patches=[];return}if(!r.ok)throw new Error("Could not load the ground detail list");const{patches:a}=await r.json();if(e.signal.aborted)return;this.patches=(Array.isArray(a)?a:[]).flatMap(o=>{var h;if(!o||!Number.isFinite(o.x)||!Number.isFinite(o.z)||!(o.size>0)||!Number.isFinite(o.size))return[];const l=this.small&&o.lo?o.lo:o.file;if(typeof l!="string"||!l)return[];const c=(h=this.urls.detailFiles)==null?void 0:h[l];try{return[{x:o.x,z:o.z,size:o.size,url:c?new URL(c,document.baseURI).href:new URL(l,s).href,slot:-1,failures:0,retryAt:0}]}catch{return[]}})}catch{e.signal.aborted||(this.manifestRetryAt=(((n=this.previous)==null?void 0:n.time)??0)+20)}finally{this.manifest=void 0}}start(t){const e=new AbortController,n=this.load={patch:t,controller:e},{signal:s}=e;this.worker.run({kind:"detail",url:t.url},()=>x_(t.url,s),s).then(r=>{if(this.load!==n){ru(r);return}this.load=void 0,t.failures=0,t.retryAt=0;const a=new be(r);a.flipY=!("close"in r),a.colorSpace=Pe,a.anisotropy=this.anisotropy,a.generateMipmaps=!0,a.minFilter=xn,a.needsUpdate=!0,this.ready={patch:t,texture:a,image:r},this.markDirty()},()=>{var r;this.load===n&&(this.load=void 0,t.failures++,t.retryAt=(((r=this.previous)==null?void 0:r.time)??0)+Math.min(30,2**t.failures))})}cancelLoad(){const t=this.load;this.load=void 0,t==null||t.controller.abort()}evict(t){const e=t.patch.slot;this.detail.maps[e].value=this.detail.fallback,this.detail.rects[e].value.w=0,this.residents[e]=void 0,t.patch.slot=-1,xl(t),this.markDirty()}}class v_{constructor(t,e,n){Z(this,"items",[]);Z(this,"v",new W);Z(this,"visible",!0);Z(this,"obstacles",[]);this.layer=t;for(const s of[...e].sort((r,a)=>r.priority-a.priority)){const r=document.createElement("button");r.type="button",r.tabIndex=-1,r.className=`inv-label inv-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",r.addEventListener("click",()=>n(s.id)),t.appendChild(r),this.items.push({place:s,el:r,w:0,h:0,shown:!1})}}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const a of this.items){a.w||(a.w=a.el.offsetWidth,a.h=a.el.offsetHeight);const o=a.place;this.v.set(o.x,o.y,o.z);const l=this.v.distanceTo(t.position);this.v.project(t);let c=this.v.z<1&&this.v.z>-1&&l<(o.maxDist??1/0)&&l<s;const h=(this.v.x*.5+.5)*e,u=(-this.v.y*.5+.5)*n,f=h-a.w/2,d=u-a.h,p=h+a.w/2,_=u;if(c&&(p<0||f>e||_<0||d>n)&&(c=!1),c){for(const m of r)if(f<m[2]+6&&p>m[0]-6&&d<m[3]+4&&_>m[1]-4){c=!1;break}}c&&(r.push([f,d,p,_]),a.el.style.transform=`translate3d(${Math.round(f)}px, ${Math.round(d)}px, 0)`),c!==a.shown&&(a.el.style.visibility=c?"visible":"hidden",a.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}const M_=[{id:"town",name:"A'Beckett Street",kind:"landmark",lat:-38.63372,lon:145.7283,blurb:"Inverloch's main street: bakeries, fish and chips, cafes and shops, a short walk from the inlet.",view:[380,58,-28],priority:1,lift:26},{id:"jetty",name:"Inverloch Jetty",kind:"landmark",lat:-38.63591,lon:145.73413,blurb:"Timber jetty reaching into Anderson Inlet, with the boat ramp alongside. A favourite for fishing and an evening walk.",view:[190,63,32],priority:1,lift:16},{id:"surf",name:"Surf Beach & Life Saving Club",kind:"landmark",lat:-38.64634,lon:145.70199,blurb:"Ocean beach facing Bass Strait, watched over by the Inverloch Surf Life Saving Club on the dune.",view:[330,62,-32],priority:1,lift:20},{id:"inlet",name:"Anderson Inlet",kind:"water",lat:-38.6412,lon:145.7445,blurb:"A shallow tidal estuary where the Tarwin River meets the sea. The sandbars here come from LiDAR survey data: slide the tide to cover and uncover them.",view:[3e3,50,8],priority:2},{id:"hub",name:"The Hub",kind:"landmark",lat:-38.63332,lon:145.72762,blurb:"Inverloch Community Hub on A'Beckett Street, home to the library and visitor information.",view:[300,60,20],priority:3,maxDist:2600,lift:18},{id:"espy",name:"Esplanade Hotel",kind:"landmark",lat:-38.63419,lon:145.72889,blurb:"The pub at the foreshore end of the main street.",view:[280,62,-40],priority:3,maxDist:2200,lift:18},{id:"rainbow",name:"Rainbow Park",kind:"landmark",lat:-38.63529,lon:145.72876,blurb:"Foreshore playground with picnic lawns and barbecues beside the inlet beach.",view:[150,60,14],priority:3,maxDist:2200,lift:14},{id:"bunurong",name:"Bunurong Environment Centre",kind:"landmark",lat:-38.63465,lon:145.72917,blurb:"Environment centre and shell museum on The Esplanade.",view:[260,60,-15],priority:5,maxDist:1100,lift:15},{id:"glade",name:"The Glade",kind:"landmark",lat:-38.63539,lon:145.7302,blurb:"Foreshore reserve and picnic shelter between the town centre and the jetty.",view:[300,62,5],priority:5,maxDist:1300,lift:13},{id:"oval",name:"Recreation Reserve",kind:"landmark",lat:-38.63194,lon:145.72681,blurb:"The town's football oval, a block back from the main street.",view:[460,58,15],priority:4,maxDist:2600,lift:16},{id:"school",name:"Primary School",kind:"landmark",lat:-38.63062,lon:145.72813,blurb:"Inverloch Primary School.",view:[380,58,0],priority:6,maxDist:1500,lift:14},{id:"bowls",name:"Bowls Club",kind:"landmark",lat:-38.63556,lon:145.73245,blurb:"Inverloch Bowls Club, two greens beside the foreshore.",view:[260,60,0],priority:6,maxDist:1300,lift:12},{id:"tennis",name:"Tennis Club & Oval",kind:"landmark",lat:-38.62722,lon:145.7372,blurb:"Tennis courts and a second football oval on the north-east side of town.",view:[520,58,10],priority:6,maxDist:2e3,lift:14},{id:"camping",name:"Foreshore Holiday Parks",kind:"landmark",lat:-38.63425,lon:145.7442,blurb:"Cabins, caravans and tents under the trees along The Esplanade, steps from the inlet.",view:[560,60,15],priority:4,maxDist:2800,lift:16},{id:"screw",name:"Screw Creek & Townsend Bluff",kind:"nature",lat:-38.6338,lon:145.7546,blurb:"A tidal creek in a nature conservation reserve, with a walking circuit up to the lookout on Townsend Bluff.",view:[900,60,-20],priority:3,lift:24},{id:"norman",name:"Point Norman",kind:"nature",lat:-38.648,lon:145.7118,blurb:"The corner where the surf beach turns into the inlet.",view:[900,60,-35],priority:4,maxDist:4200,lift:14},{id:"smythe",name:"Point Smythe",kind:"nature",lat:-38.6466,lon:145.7366,blurb:"The tip of the Venus Bay peninsula, across the entrance from town: coastal scrub, dunes and walking tracks.",view:[1300,58,150],priority:3,lift:22},{id:"racv",name:"RACV Inverloch Resort",kind:"landmark",lat:-38.6487,lon:145.6876,blurb:"Resort and villas on the Cape Paterson road, on the hill above the coast.",view:[520,60,40],priority:5,maxDist:3200,lift:18},{id:"strait",name:"Bass Strait",kind:"water",lat:-38.6565,lon:145.7075,blurb:"Open ocean. Swell rolls in to the surf beach from here.",view:[2300,50,-12],priority:4}];function S_(i,t){return M_.map(e=>{const n=(e.lon-i.origin[0])*i.metresPerDegree[0],s=-(e.lat-i.origin[1])*i.metresPerDegree[1],r=Math.max(t.yAt(n,s),0);return{...e,x:n,z:s,y:r+(e.lift??6)}})}function fn(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}const y_=new Set(["Inverloch Surf Life Saving Club","The Hub"]),Ve=G(10126440),Te=G(6113848),pn=G(16053230),ds=G(11842219),xe=G(7304312),js=G(3163994),fs=G(13644844),ps=G(15909424),b_=G(16119022),_l=2.05*Gn;function au(i,t,e,n=35){let s=1/0,r=0,a=1;for(let o=0;o<24;o++){const l=o/24*Math.PI*2,c=i.metresAt(t+Math.cos(l)*n,e+Math.sin(l)*n)+i.metresAt(t+Math.cos(l)*n*2,e+Math.sin(l)*n*2);c<s&&(s=c,r=Math.cos(l),a=Math.sin(l))}return[r,a]}function ha(i){let t=0,e=0;for(let n=0;n<i.length;n+=2)t+=i[n],e+=i[n+1];return[t/(i.length/2)/10,e/(i.length/2)/10]}function E_(i,t,e){const n=[];for(let x=0;x<e.length;x+=2)n.push([e[x]/10,e[x+1]/10]);t.metresAt(n[0][0],n[0][1])<t.metresAt(n[n.length-1][0],n[n.length-1][1])&&n.reverse();const s=1.7,r=_l,[a,o]=n[0];let l=a-n[1][0],c=o-n[1][1];const h=Math.hypot(l,c)||1;l/=h,c/=h;let u=0;for(;u<30&&t.yAt(a+l*u,o+c*u)<r-.25;)u+=1.5;const f=Math.max(t.yAt(a+l*u,o+c*u),r-1.2),d=Math.atan2(-l,-c);i.frame(a+l*u,0,o+c*u,d),i.quad(-s,f+.05,0,s,f+.05,0,s,r,u,-s,r,u,Ve),i.quad(-s,f-1.2,0,-s,r-.4,u,-s,r,u,-s,f+.05,0,Te),i.quad(s,f-1.2,0,s,f+.05,0,s,r,u,s,r-.4,u,Te);for(let x=0;x<n.length-1;x++){const[M,E]=n[x],[b,v]=n[x+1],y=Math.hypot(b-M,v-E),T=Math.atan2(b-M,v-E);i.frame(M,r,E,T);const w=Math.ceil(y/1.2);for(let L=0;L<w;L++){const U=L/w*y,P=(L+1)/w*y;i.box(-s,-.14,U,s,0,P,te(Ve,.9+L*7%5*.04),void 0,Te)}i.box(-s+.25,-.5,0,-s+.5,-.14,y,Te,null),i.box(s-.5,-.5,0,s-.25,-.14,y,Te,null);const C=Math.max(1,Math.round(y/3.6));for(let L=0;L<=C;L++){const U=L/C*y;for(const P of[-1,1]){const B=P*(s-.12),F=t.yAt(i.wx(B,U),i.wz(B,U));i.cyl(B,F-r-.6,U,.17,.15,r-F+.6+1.1,6,Te,te(Ve,.8))}i.box(-s,-.78,U-.12,s,-.5,U+.12,Te),i.quad(-s+.1,-2.6,U,s-.1,-.8,U,s-.1,-.6,U,-s+.1,-2.4,U,te(Te,.9))}for(const L of[-1,1]){const U=L*(s-.12);i.box(U-.05,1.02,0,U+.05,1.1,y,Ve,void 0,Te),i.box(U-.03,.52,0,U+.03,.58,y,Ve,void 0,Te)}i.box(-s,-.14,-s,s,0,.01,Ve,void 0,Te)}const[p,_]=n[n.length-1],[m,g]=n[n.length-2],S=Math.atan2(p-m,_-g);i.frame(p,r,_,S),i.box(-3.2,-.14,0,3.2,0,5.2,te(Ve,.96),void 0,Te);for(const[x,M]of[[-3.05,.2],[3.05,.2],[-3.05,5],[3.05,5],[0,5]]){const E=t.yAt(i.wx(x,M),i.wz(x,M));i.cyl(x,E-r-.6,M,.19,.17,r-E+.6+(x===0?0:1.1),6,Te,te(Ve,.8))}i.box(-3.1,1.02,4.9,3.1,1.1,5,Ve,void 0,Te),i.box(-3.1,1.02,0,-3,1.1,5,Ve,void 0,Te),i.box(3,1.02,0,3.1,1.1,5,Ve,void 0,Te),i.cyl(2.6,0,4.5,.07,.05,4.6,5,xe),i.blob(2.6,4.75,4.5,.28,.2,.28,6,3,G(16773320),void 0,1.6),i.box(-.35,-3.6,5.22,-.3,.9,5.28,xe,null),i.box(.3,-3.6,5.22,.35,.9,5.28,xe,null);for(let x=-3.3;x<.6;x+=.42)i.box(-.3,x,5.22,.3,x+.05,5.28,xe);return i.frame(),{head:new W(p,r,_),points:n}}function w_(i,t,e,n){const[s,r]=au(t,e,n,25),a=Math.atan2(s,r);i.frame(e,0,n,a);const o=4.2,l=-8,c=[];for(let p=l;p<=46;p+=3){const _=t.yAt(i.wx(0,p),i.wz(0,p));if(c.push([p,_]),_<-1.6*Gn)break}const h=c[0][1]+.12,u=Math.min(c[c.length-1][1]+.25,-.9*Gn),f=c[c.length-1][0],d=c.length-1;for(let p=0;p<d;p++){const _=l+(f-l)*p/d,m=l+(f-l)*(p+1)/d,g=h+(u-h)*p/d,S=h+(u-h)*(p+1)/d;i.quad(-o,g,_,-o,S,m,o,S,m,o,g,_,p%2?ds:te(ds,.94));for(const x of[-1,1])i.quad(x*o,g-1.5,_,x*o,S-1.5,m,x*o,S+.15,m,x*o,g+.15,_,te(ds,.8))}i.frame()}function T_(i,t,e){const[n,s]=au(t,e.cx,e.cz,60),r=e.obb;let a=r.heading,o=r.w,l=r.d,c=-1/0;for(let b=0;b<4;b++){const v=r.heading+b*Math.PI/2,y=Math.sin(v)*n+Math.cos(v)*s;y>c&&(c=y,a=v,o=b%2?r.d:r.w,l=b%2?r.w:r.d)}const h=o/2,u=l/2;i.frame(r.cx,e.floorY,r.cz,a);const f=G(13223611),d=G(15394522),p=G(6975604);i.box(-h,-4,-u,h,3.1,u,f,null),i.box(-h,3.1,-u,h,6.1,u,d,null);const _=Math.max(2,Math.floor(o/5));for(let b=0;b<_;b++){const v=-h+(b+.5)/_*o;i.quad(v-1.7,.05,u+.05,v+1.7,.05,u+.05,v+1.7,2.7,u+.05,v-1.7,2.7,u+.05,b%2?fs:ps)}i.quad(-h+.6,3.6,u+.05,h-.6,3.6,u+.05,h-.6,5.7,u+.05,-h+.6,5.7,u+.05,js,.9),i.box(-h-.6,2.95,u,h+.6,3.12,u+3.4,ds,Ve,te(ds,.8)),i.box(-h-.6,3.12,u+3.32,h+.6,4.15,u+3.4,G(10469580),null);for(const b of[-h-.4,-h/3,h/3,h+.4])i.box(b-.12,-4,u+3,b+.12,2.95,u+3.24,xe,null);i.quad(-h-.8,7.5,u+3.8,h+.8,7.5,u+3.8,h+.8,6.2,-u-.6,-h-.8,6.2,-u-.6,p),i.quad(-h,6.1,u,h,6.1,u,h,7.1,u,-h,7.1,u,d),i.quad(h,6.1,u,h,6.1,-u,h,6.3,-u,h,7.1,u,d),i.quad(-h,6.1,-u,-h,6.1,u,-h,7.1,u,-h,6.3,-u,d);const m=h-2.2,g=u-1.8;i.box(m-1.8,6.1,g-1.8,m+1.8,9.2,g+1.8,d,null),i.box(m-1.85,9.2,g-1.85,m+1.85,10.5,g+1.85,js,null,null,.7),i.box(m-2.3,10.5,g-2.3,m+2.3,10.72,g+2.3,p),i.cyl(m,10.72,g,.06,.04,5.2,5,pn),i.quad(m,15.6,g,m+1.9,15.6,g,m+1.9,14.5,g,m,14.5,g,fs),i.quad(m,14.5,g,m+1.9,14.5,g,m+1.9,13.4,g,m,13.4,g,ps);for(let b=0;b<4;b++){const v=-h+(b+.5)/4*o;i.quad(v+.9,3.9,-u-.05,v-.9,3.9,-u-.05,v-.9,5.3,-u-.05,v+.9,5.3,-u-.05,js,b%2)}let S=u+14;for(;S<160&&t.metresAt(r.cx+n*S,r.cz+s*S)>1.75;)S+=3;const x=r.cx+n*S,M=r.cz+s*S,E=Math.atan2(n,s);i.frame(x,t.yAt(x,M),M,E);for(const b of[-1,1]){const v=b*32,y=t.yAt(i.wx(v,0),i.wz(v,0))-t.yAt(x,M);i.cyl(v,y,0,.05,.04,4.4,5,pn),i.quad(v,y+4.4,0,v+.95,y+4.4,0,v+.95,y+3.1,0,v,y+3.1,0,fs),i.quad(v,y+3.1,0,v+.95,y+3.1,0,v+.95,y+1.8,0,v,y+1.8,0,ps)}for(const[b,v]of[[-1.5,-5.5],[1.5,-5.5],[-1.5,-8.5],[1.5,-8.5]])i.cyl(b,0,v,.04,.04,2.2,4,xe);i.tri(-1.7,2.2,-5.3,1.7,2.2,-5.3,0,3,-7,fs),i.tri(1.7,2.2,-8.7,-1.7,2.2,-8.7,0,3,-7,fs),i.tri(1.7,2.2,-5.3,1.7,2.2,-8.7,0,3,-7,ps),i.tri(-1.7,2.2,-8.7,-1.7,2.2,-5.3,0,3,-7,ps),i.blob(6,.35,-6,.95,.4,2.1,8,3,G(14238751),G(15755818)),i.box(5.6,.3,-7.9,6.4,.95,-7.5,G(2763308));for(let b=0;b<4;b++)i.box(-7+b*.5,.2,-7.2,-6.85+b*.5,.75,-4.6,b%2?ps:G(3116992));return i.frame(),{beach:new W(x,t.yAt(x,M),M),seaward:[n,s]}}function ou(i,t){const e=i.length/2;let n=0;for(let a=0;a<e;a++){const o=(a+1)%e;n+=i[a*2]*i[o*2+1]-i[o*2]*i[a*2+1]}const s=n>0?1:-1,r=[];for(let a=0;a<e;a++){const o=(a+e-1)%e,l=(a+1)%e;let c=i[a*2]-i[o*2],h=i[a*2+1]-i[o*2+1],u=i[l*2]-i[a*2],f=i[l*2+1]-i[a*2+1];const d=Math.hypot(c,h)||1,p=Math.hypot(u,f)||1;c/=d,h/=d,u/=p,f/=p;const _=-h*s,m=c*s;let g=_-f*s,S=m+u*s;const x=Math.hypot(g,S)||1;g/=x,S/=x;const M=t/Math.max(.45,g*_+S*m);r.push(i[a*2]+g*M,i[a*2+1]+S*M)}return r}function A_(i,t,e){i.frame(0,e.floorY,0,0);const n=G(11111014),s=G(15328470),r=G(9410458);let a=1/0;for(let h=0;h<e.poly.length;h+=2)a=Math.min(a,t.yAt(e.poly[h],e.poly[h+1]));const o=e.poly.length/2;i.walls(e.poly,a-e.floorY-.3,3.2,n),i.walls(e.poly,3.2,6.2,s);const l=ou(e.poly,3.2),c=ou(e.poly,4.4);for(let h=0;h<o;h++){const u=(h+1)%o;i.quad(e.poly[h*2],6.6,e.poly[h*2+1],e.poly[u*2],6.6,e.poly[u*2+1],l[u*2],6.05,l[u*2+1],l[h*2],6.05,l[h*2+1],r)}if(i.walls(e.poly,6.2,6.6,te(s,.92)),i.walls(l,6.05,7.9,js,.8),i.cap(l,7.9,te(r,1.08)),i.walls(c,7.9,8.3,te(r,.9)),i.cap(c,8.3,r),e.street){const h=e.street;i.frame(h.x,e.floorY,h.z,h.heading),i.quad(.6,.3,.06,h.length-.6,.3,.06,h.length-.6,5.6,.06,.6,5.6,.06,js,.9),i.box(h.length*.3,3.3,0,h.length*.7,3.5,3.4,G(14263361),void 0,te(G(14263361),.8)),i.box(h.length*.3+.2,0,3.1,h.length*.3+.4,3.3,3.3,xe,null),i.box(h.length*.7-.4,0,3.1,h.length*.7-.2,3.3,3.3,xe,null)}i.frame()}function ln(i,t,e,n,s,r=b_){const a=e.length,o=.22,l=s?a:a-1;for(let c=0;c<l;c++){const[h,u]=e[c],[f,d]=e[(c+1)%a];let p=-(d-u),_=f-h;const m=Math.hypot(p,_)||1;p=p/m*n*.5,_=_/m*n*.5;const g=t.yAt(h,u)+o,S=t.yAt(f,d)+o;i.quad(h+p,g,u+_,f+p,S,d+_,f-p,S,d-_,h-p,g,u-_,r)}}function R_(i,t,e,n,s){const r=[];for(let x=0;x<n.length;x+=2)r.push([n[x]/10,n[x+1]/10]);const[a,o]=ha(n);let l=0,c=0,h=0;for(const[x,M]of r)l+=(x-a)**2,c+=(M-o)**2,h+=(x-a)*(M-o);const u=.5*Math.atan2(2*h,l-c),f=Math.cos(u),d=Math.sin(u);let p=0,_=0;for(const[x,M]of r)p=Math.max(p,Math.abs((x-a)*f+(M-o)*d)),_=Math.max(_,Math.abs(-(x-a)*d+(M-o)*f));p-=5,_-=5;const m=(x,M)=>[a+x*f-M*d,o+x*d+M*f],g=[];for(let x=0;x<72;x++){const M=x/72*Math.PI*2;g.push(m(Math.cos(M)*p,Math.sin(M)*_))}ln(t,e,g,.35,!0),ln(t,e,[m(-25,-25),m(25,-25),m(25,25),m(-25,25)],.3,!0);const S=x=>Array.from({length:24},(M,E)=>m(Math.cos(E/24*Math.PI*2)*x,Math.sin(E/24*Math.PI*2)*x));ln(t,e,S(5),.3,!0),ln(t,e,S(1.5),.3,!0);for(const x of[-1,1]){ln(t,e,[m(x*p,-3.2),m(x*(p-9),-3.2),m(x*(p-9),3.2),m(x*p,3.2)],.3,!1);const M=[];for(let E=-8;E<=8;E++){const b=E/8*1.05,v=x*(p-50*Math.cos(b)),y=50*Math.sin(b);(v/p)**2+(y/_)**2<1&&M.push(m(v,y))}M.length>2&&ln(t,e,M,.3,!1);for(const[E,b]of[[-3.2,9.5],[3.2,9.5],[-9.6,6.2],[9.6,6.2]]){const[v,y]=m(x*p,E);i.frame(v,e.yAt(v,y),y,0),i.cyl(0,0,0,.11,.09,b,6,pn),i.cyl(0,0,0,.2,.2,1.6,6,E*E<12?G(2973608):G(12597806))}}if(s)for(const[x,M]of[[-.62,-1],[.62,-1],[-.62,1],[.62,1]]){const[E,b]=m(x*(p+6),M*(_+9));i.frame(E,e.yAt(E,b),b,Math.atan2(a-E,o-b)),i.cyl(0,0,0,.28,.16,24,6,xe),i.box(-1.7,24,-.2,1.7,25.3,.2,G(4869972)),i.quad(-1.6,24.1,.22,1.6,24.1,.22,1.6,25.2,.22,-1.6,25.2,.22,G(16774876),2.2)}i.frame()}function C_(i,t,e,n,s){const r=[];for(let M=0;M<n.length;M+=2)r.push([n[M]/10,n[M+1]/10]);if(r.length<4)return;if(s==="bowls"){ln(t,e,r,.5,!0,G(15328986));return}const[a,o,l,c]=r,h=Math.hypot(o[0]-a[0],o[1]-a[1])>Math.hypot(l[0]-o[0],l[1]-o[1]),u=h?a:o,f=h?o:l,d=h?l:c,p=h?c:a,_=(M,E)=>{const b=u[0]+(f[0]-u[0])*M,v=u[1]+(f[1]-u[1])*M,y=p[0]+(d[0]-p[0])*M,T=p[1]+(d[1]-p[1])*M;return[b+(y-b)*E,v+(T-v)*E]},m=.14;ln(t,e,[_(0,0),_(1,0),_(1,1),_(0,1)],m,!0),ln(t,e,[_(0,.125),_(1,.125)],m,!1),ln(t,e,[_(0,.875),_(1,.875)],m,!1),ln(t,e,[_(.23,.125),_(.23,.875)],m,!1),ln(t,e,[_(.77,.125),_(.77,.875)],m,!1),ln(t,e,[_(.23,.5),_(.77,.5)],m,!1);const g=_(.5,-.04),S=_(.5,1.04),x=e.yAt(g[0],g[1])+.2;i.frame(0,x,0,0),i.quad(g[0],0,g[1],S[0],0,S[1],S[0],.95,S[1],g[0],.95,g[1],G(2830131)),i.quad(g[0],.95,g[1],S[0],.95,S[1],S[0],1.05,S[1],g[0],1.05,g[1],pn);for(const M of[g,S])i.cyl(M[0],0,M[1],.06,.06,1.1,5,xe);i.frame()}const ei=[14826299,15764004,15909424,5025616,3117008,8280002].map(G);function P_(i,t,e,n,s){const[r,a]=ha(e),o=t.yAt(r,a)+.05,l=s()*Math.PI;i.frame(r,o,a,l);const c=(f,d,p,_)=>{for(const[m,g]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.cyl(f+m,0,d+g,.07,.07,p+2,5,G(8018492));i.box(f-1,p-.1,d-1,f+1,p,d+1,Ve,void 0,Te),i.cyl(f,p+2,d,1.5,0,1,4,_)};c(-2.2,0,1.5,ei[0]),c(2.2,0,2.1,ei[4]),i.box(-1.2,1.4,-.35,1.2,1.5,.35,Ve),i.quad(3.2,2.1,-.4,6.4,.15,-.4,6.4,.15,.4,3.2,2.1,.4,ei[2]),i.quad(-3.2,1.5,.4,-5.6,.15,.4,-5.6,.15,-.4,-3.2,1.5,-.4,ei[1]);const h=0,u=5.2;for(const f of[-2.2,2.2])i.quad(h+f,0,u-1.1,h+f+.08,0,u-1.1,h+f+.08,2.6,u,h+f,2.6,u,xe),i.quad(h+f,0,u+1.1,h+f+.08,0,u+1.1,h+f+.08,2.6,u,h+f,2.6,u,xe);i.box(h-2.25,2.55,u-.05,h+2.25,2.65,u+.05,ei[3]);for(const f of[-1.1,0,1.1])i.box(h+f-.25,.5,u-.1,h+f+.25,.56,u+.1,G(2763308)),i.box(h+f-.24,.56,u-.01,h+f-.22,2.55,u+.01,xe,null),i.box(h+f+.22,.56,u-.01,h+f+.24,2.55,u+.01,xe,null);if(n){i.cyl(-6.5,0,-5.5,.09,.07,5.2,5,xe);for(let f=0;f<6;f++){const d=f/6*Math.PI*2,p=-6.5+Math.cos(d)*3.2,_=-5.5+Math.sin(d)*3.2;i.quad(p-.04,0,_,p+.04,0,_,-6.46,5.1,-5.5,-6.54,5.1,-5.5,G(3104672))}for(let f=0;f<6;f++){const d=-9+f*3.4,p=ei[f],_=4.6,m=3.3;i.cyl(d,0,-11,.08,.07,_,5,xe),i.cyl(d+1.7,0,-7.2,.08,.07,m,5,xe),i.tri(d,_,-11,d+3.4,_,-11,d+1.7,m,-7.2,p)}i.cyl(11.399999999999999,0,-11,.08,.07,4.6,5,xe),i.cyl(6.5,.3,5.5,1.3,1.3,.12,10,ei[5],ei[2]),i.cyl(6.5,0,5.5,.1,.1,1.1,5,xe);for(let f=0;f<3;f++)i.blob(9.5+f*1.6,.55,-1.5,.3,.3,.55,5,3,ei[(f*2+1)%6])}i.frame()}function L_(i,t,e){const n=[];for(let u=0;u<e.length;u+=2)n.push([e[u]/10,e[u+1]/10]);const[s,r]=ha(e),a=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1])>Math.hypot(n[2][0]-n[1][0],n[2][1]-n[1][1])?[n[0],n[1]]:[n[1],n[2]],o=Math.atan2(a[1][0]-a[0][0],a[1][1]-a[0][1]),l=Math.hypot(a[1][0]-a[0][0],a[1][1]-a[0][1])/2-1;i.frame(s,t.yAt(s,r)+.1,r,o);const c=G(13092286),h=te(c,.88);for(const u of[-1,1]){const f=u*l,d=[[0,0],[1.4,.35],[2.4,1.1],[3,2]];for(let p=0;p<3;p++){const[_,m]=d[p],[g,S]=d[p+1],x=f-u*(3-_),M=f-u*(3-g);u>0?i.quad(-4,m,x,4,m,x,4,S,M,-4,S,M,p%2?c:h):i.quad(4,m,x,-4,m,x,-4,S,M,4,S,M,p%2?c:h)}i.box(-4,0,Math.min(f,f+u*1.2),4,2,Math.max(f,f+u*1.2),h,c)}i.box(-1.5,0,-1.2,1.5,.45,1.2,h,c),i.quad(-1.5,.45,1.2,1.5,.45,1.2,1.5,0,3,-1.5,0,3,c),i.quad(1.5,.45,-1.2,-1.5,.45,-1.2,-1.5,0,-3,1.5,0,-3,c),i.box(3.2,.45,-2.5,3.28,.5,2.5,xe),i.frame()}function D_(i,t){const e=t.obb,n=e.w>=e.d,s=(n?e.w:e.d)/2;i.frame(e.cx,t.floorY,e.cz,e.heading);const r=n?s+1.2:0,a=n?0:s+1.2,o=G(15262418);i.box(r-1.4,-1,a-1.4,r+1.4,t.wallH+4.6,a+1.4,o,null),i.cyl(r,t.wallH+4.6,a,2.1,0,4.2,4,G(5922659)),i.box(r-.07,t.wallH+8.8,a-.07,r+.07,t.wallH+10.6,a+.07,pn),i.box(r-.5,t.wallH+9.8,a-.07,r+.5,t.wallH+9.95,a+.07,pn),i.frame()}function I_(i,t,e,n){i.frame(e,t.yAt(e,n),n,.4);const s=46;for(let r=0;r<6;r++){const a=r/6*s,o=1.5-r/6*1.1,l=1.5-(r+1)/6*1.1;i.cyl(0,a,0,o,l,s/6,3,r%2?pn:fs)}i.cyl(0,s,0,.08,.05,5,4,xe),i.blob(0,s+5.1,0,.3,.3,.3,5,3,G(16726832),void 0,2.5);for(const[r,a]of[[.3,38],[2.4,35],[4.4,40]])i.cyl(Math.cos(r)*.9,a,Math.sin(r)*.9,.55,.55,.35,8,pn,pn);i.box(2.5,0,-1.5,5.5,2.6,1.5,G(13619919),G(9080716)),i.frame()}function N_(i,t,e,n,s){const r=s.nearest(e,n,60),a=r?Math.atan2(r.px-e,r.pz-n):0;i.frame(e,t.yAt(e,n)+.1,n,a);const o=G(3116874);for(const[l,c]of[[-6,3.5],[6,3.5],[-6,9.5],[6,9.5]])i.box(l-.2,0,c-.2,l+.2,5,c+.2,pn,null);i.box(-8,5,2,8,5.25,11,pn,G(14277590),G(15921902),.5),i.box(-8.05,5.25,1.95,8.05,5.9,11.05,o,G(14277590));for(const l of[-4,0,4])i.box(l-1.3,0,6.2,l+1.3,.2,6.8,ds),i.box(l-.4,.2,6.25,l+.4,1.7,6.75,pn,o);i.frame()}function U_(i,t,e,n,s){for(let r=0;r<3;r++){const a=e+(s()-.5)*16,o=n+(s()-.5)*16;i.frame(a,t.yAt(a,o)+.05,o,s()*Math.PI),i.box(-1,.7,-.4,1,.78,.4,Ve,void 0,Te),i.box(-1,.4,-.85,1,.46,-.6,Ve,void 0,Te),i.box(-1,.4,.6,1,.46,.85,Ve,void 0,Te),i.box(-.75,0,-.7,-.65,.7,.7,xe,null),i.box(.65,0,-.7,.75,.7,.7,xe,null)}i.frame()}function F_(i){if(!i.hasDetail)return null;const{town:t,hf:e,roads:n,paths:s}=i,r=new ee,a=Oe(4411),o=[12597547,3108687,15921902,3426654,9268810,14266938,10134443].map(G),l=G(7301730),c=G(3103290),h=[G(13115434),G(15254046)],u=t.houses,f=tu(t),d=[];for(let b=0;b<u.length;b+=dl)u[b+5]!==1&&d.push(u[b]/4,u[b+1]/4);const p=d.length;for(const[,b,,,,,,v]of fl)v!=="s"&&b[2]>=5&&d.push(b[0],b[1]);for(let b=0;b<d.length;b+=2){const v=d[b],y=d[b+1];if(!i.isDetail(v,y)||i.isClear(v,y))continue;const T=n.nearest(v,y,45),w=a()<.5?-1:1,C=w*(2.5+a()*2.5),L=Math.floor(a()*o.length),U=a()<.7;if(!T||b<p&&f(v,y))continue;const P=T.cls<=3?6.4:3.6;if(T.dist<P+3)continue;const B=(v-T.px)/T.dist,F=(y-T.pz)/T.dist,k=-F,H=B,z=Math.atan2(B,F),N=T.px+B*P+k*C,D=T.pz+F*P+H*C;if(!i.isClear(N,D)&&(r.frame(N,e.yAt(N,D),D,z),r.box(-.05,0,-.05,.05,.95,.05,l),r.box(-.17,.95,-.22,.17,1.22,.22,o[L],te(o[L],.8)),U)){const Y=T.px+B*(P-1.1)+k*(C+w*1.5),it=T.pz+F*(P-1.1)+H*(C+w*1.5);r.frame(Y,e.yAt(Y,it),it,z),h.forEach((q,et)=>{r.box(et*.72-.28,0,-.33,et*.72+.28,.96,.33,c),r.box(et*.72-.3,.96,-.36,et*.72+.3,1.04,.36,q)})}}const _=G(7034692),m=G(5917242),g=G(2829102),S=G(14276303),x=42,M=new ee;for(const b of s){if(b.cls>3||b.flags)continue;const v=b.pts.length/3;let y=x*.4,T=null;for(let w=1;w<v;w++){const C=b.pts[w*3-3],L=b.pts[w*3-1],U=b.pts[w*3],P=b.pts[w*3+2],B=Math.hypot(U-C,P-L);if(y+=B,y<x)continue;y=0;const F=(U-C)/(B||1),k=(P-L)/(B||1),H=b.width/2+2.5,z=U+k*H,N=P-F*H;if(!i.isDetail(z,N)||i.isClear(z,N)||!e.inside(z,N,20)){T=null;continue}const D=e.yAt(z,N);M.frame(z,D,N,Math.atan2(F,k)),M.cyl(0,0,0,.15,.1,9.2,6,_),M.box(-1.15,8.45,-.06,1.15,8.58,.06,m);for(const it of[-.95,0,.95])M.box(it-.04,8.58,-.04,it+.04,8.72,.04,S);const Y={x:z,y:D+8.72,z:N,nx:k,nz:-F};if(T&&Math.hypot(Y.x-T.x,Y.z-T.z)<x*1.8){M.frame();for(const it of[-.95,0,.95]){const q=T.x+T.nx*it,et=T.z+T.nz*it,$=Y.x+Y.nx*it,tt=Y.z+Y.nz*it,K=(q+$)/2,ut=(et+tt)/2,yt=(T.y+Y.y)/2-.5;for(const[ft,Dt,Nt,Ut,Kt,Yt]of[[q,T.y,et,K,yt,ut],[K,yt,ut,$,Y.y,tt]])M.quad(ft,Dt,Nt,Ut,Kt,Yt,Ut,Kt+.035,Yt,ft,Dt+.035,Nt,g),M.quad(ft,Dt,Nt,Ut,Kt,Yt,Ut+Y.nx*.035,Kt,Yt+Y.nz*.035,ft+Y.nx*.035,Dt,Nt+Y.nz*.035,g)}}T=Y}}if(!r.vertexCount&&!M.vertexCount)return null;const E=new qt(r.build(),cs());if(E.castShadow=!0,E.receiveShadow=!0,E.name="street-detail",M.vertexCount){const b=new qt(M.build(),cs());b.castShadow=!1,b.receiveShadow=!0,b.name="power-poles",E.add(b)}return E}function O_(i){const{town:t,hf:e,paths:n}=i,s=120,r=new Map,a=t.houses;for(let C=0;C<a.length;C+=dl){const L=Math.floor(a[C]/4/s)*4096+Math.floor(a[C+1]/4/s)+8390656;r.set(L,(r.get(L)??0)+1)}const[o,l]=fn(t.meta,-38.63385,145.7285),c=(C,L)=>(r.get(Math.floor(C/s)*4096+Math.floor(L/s)+2048*4097)??0)>=4||Math.hypot(C-o,L-l)<380,h=[];for(const C of n){if(C.cls>2||C.flags)continue;const L=C.cls===0?48:58,U=C.pts.length/3;let P=L*.5,B=1;for(let F=1;F<U;F++){const k=C.pts[F*3-3],H=C.pts[F*3-1],z=C.pts[F*3],N=C.pts[F*3+2],D=Math.hypot(z-k,N-H);if(P+=D,P<L)continue;P=0,B=-B;const Y=(z-k)/(D||1),it=(N-H)/(D||1),q=C.width/2+1.6,et=z-it*q*B,$=N+Y*q*B;!c(et,$)||!e.inside(et,$,20)||i.isClear(et,$)||h.push(et,e.yAt(et,$),$,Math.atan2(it*B,-Y*B))}}const u=new ee,f=G(9278358);u.cyl(0,0,0,.11,.07,8.2,5,f),u.box(-.05,8.1,0,.05,8.22,2.2,f),u.box(-.22,8,1.7,.22,8.14,2.5,G(5922659)),u.quad(-.2,7.99,2.48,.2,7.99,2.48,.2,7.99,1.72,-.2,7.99,1.72,G(16773320),3);const d=h.length/4,p=new Je(u.build(),cs(),d),_=document.createElement("canvas");_.width=_.height=64;const m=_.getContext("2d"),g=m.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,"rgba(255,214,150,0.85)"),g.addColorStop(.45,"rgba(255,196,120,0.32)"),g.addColorStop(1,"rgba(255,180,100,0)"),m.fillStyle=g,m.fillRect(0,0,64,64);const S=new ko(_);S.colorSpace=Pe;const x=new Fn(34,34);x.rotateX(-Math.PI/2);const M=new Tn({map:S,transparent:!0,opacity:0,blending:va,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),E=new Je(x,M,d);E.renderOrder=3;const b=new ne,v=new Sn,y=new W(0,1,0),T=new W(1,1,1),w=new W;for(let C=0;C<d;C++){const L=h[C*4],U=h[C*4+1],P=h[C*4+2],B=h[C*4+3];v.setFromAxisAngle(y,B),p.setMatrixAt(C,b.compose(w.set(L,U,P),v,T));const F=L+Math.sin(B)*2.1,k=P+Math.cos(B)*2.1;E.setMatrixAt(C,b.compose(w.set(F,e.yAt(F,k)+.5,k),v.identity(),T))}return p.castShadow=!1,p.computeBoundingSphere(),E.computeBoundingSphere(),E.onBeforeRender=()=>{M.opacity=ta.value*.9},E.visible=!0,{lights:p,pools:E,poolMat:M}}function z_(i){const{town:t,hf:e,footprints:n,roads:s}=i,r=new tn;r.name="landmarks";const a=new ee,o=new ee,l=Oe(20261111),c={group:r,nightMaterials:[]};t.piers[0]&&(c.jetty=E_(a,e,t.piers[0]));for(const[y,T]of[[-38.63578,145.73393],[-38.63595,145.73085]]){const[w,C]=fn(t.meta,y,T);w_(a,e,w,C)}const h=n.find(y=>y.name==="Inverloch Surf Life Saving Club");h&&(c.surf=T_(a,e,h));const u=n.find(y=>y.name==="The Hub");u&&A_(a,e,u);for(const y of n)y.kind==="church"&&D_(a,y);let f=0;for(const y of t.pitches)y.s==="australian_football"?R_(a,o,e,y.p,f++===0):y.s==="tennis"||y.s==="bowls"?C_(a,o,e,y.p,y.s):y.s==="skateboard"&&L_(a,e,y.p);const[d,p]=fn(t.meta,-38.63529,145.72876);for(const y of t.playgrounds){const[T,w]=ha(y);P_(a,e,y,Math.hypot(T-d,w-p)<60,l)}const[_,m]=fn(t.meta,-38.62462,145.71011);I_(a,e,_,m);const[g,S]=fn(t.meta,-38.63161,145.72943);N_(a,e,g,S,s);for(const[y,T]of[[-38.6358,145.72885],[-38.63447,145.72923],[-38.63545,145.72875]]){const[w,C]=fn(t.meta,y,T);U_(a,e,w,C,l)}const x=new qt(a.build(),cs());x.castShadow=!0,x.receiveShadow=!0,r.add(x);const M=o.build();M.deleteAttribute("glow");const E=new qt(M,ea(new Tn({vertexColors:!0,side:Re,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})));r.add(E);const b=F_(i);b&&r.add(b);const v=O_(i);return r.add(v.lights,v.pools),c.nightMaterials.push(v.poolMat),c}const B_=Ht.lights_fragment_begin.replace("getDirectionalLightInfo( directionalLight, directLight );",`getDirectionalLightInfo( directionalLight, directLight );
    // The atmosphere owns the scene's only directional light.
    directLight.color *= cloudSunlight(vCoastalWorld);`),G_=`
  vec4 coastalPosition = vec4(transformed, 1.0);
  #ifdef USE_BATCHING
    coastalPosition = batchingMatrix * coastalPosition;
  #endif
  #ifdef USE_INSTANCING
    coastalPosition = instanceMatrix * coastalPosition;
  #endif
  vCoastalWorld = (modelMatrix * coastalPosition).xyz;
`,k_=`
uniform vec3 uCoastalColor;
uniform vec3 uInletCenter;
uniform float uCoastalMist;
varying vec3 vCoastalWorld;

// Integrate a compact quadratic density over the ray's chord through the inlet volume.
// The visible surface ends the integration, including when it is the water surface itself.
float inletOpticalDepth(vec3 ray, float distanceToSurface) {
  vec3 inverseRadii = vec3(1.0 / 1350.0, 1.0 / 32.0, 1.0 / 625.0);
  vec3 start = (cameraPosition - uInletCenter) * inverseRadii;
  vec3 delta = ray * inverseRadii;
  float a = dot(delta, delta);
  float center = -dot(start, delta) / a;
  vec3 closest = start + center * delta;
  float radius = 1.0 - dot(closest, closest);
  if (radius <= 0.0) return 0.0;
  float halfChord = sqrt(radius / a);
  float enter = max(90.0 / distanceToSurface, center - halfChord);
  float exit = min(1.0, center + halfChord);
  float width = exit - enter;
  if (width <= 0.0) return 0.0;
  vec3 midpoint = start + (0.5 * (enter + exit)) * delta;
  float meanDensity = max(0.0, 1.0 - dot(midpoint, midpoint) - a * width * width / 12.0);
  return width * distanceToSurface * meanDensity;
}

vec3 coastalLight(vec3 lit) {
  vec3 ray = vCoastalWorld - cameraPosition;
  float d = length(ray);
  float height = max(0.0, 0.5 * (vCoastalWorld.y + cameraPosition.y) - uInletCenter.y);
  float base = 0.20 * smoothstep(130.0, 3800.0, d) * mix(1.0, 0.32, smoothstep(35.0, 750.0, height));
  float mist = 0.0;
  if (uCoastalMist > 0.0 && d > 90.0) {
    mist = 0.38 * (1.0 - exp(-0.0021 * inletOpticalDepth(ray, d)));
  }
  return mix(lit, uCoastalColor, 1.0 - (1.0 - base) * (1.0 - mist));
}
`;class H_{constructor(t,e,n,s,r,a,o){Z(this,"prepared",new WeakSet);Z(this,"inlet",{value:new W});Z(this,"mist");this.color=n,this.clouds=r,this.sunDir=a,this.cloudShadowStrength=o,this.inlet.value.set(t,0,e),this.mist={value:Number(s)}}setMist(t){this.mist.value=Number(t)}setWaterLevel(t){this.inlet.value.y=t}add(t){t.traverse(e=>{const{material:n}=e;if(n)for(const s of Array.isArray(n)?n:[n])this.prepare(s)})}addWater(t){this.prepare(t.material,!0)}prepare(t,e=!1){if(!t.toneMapped||this.prepared.has(t)||t instanceof en&&!e)return;this.prepared.add(t);const n=t.onBeforeCompile,s=t.customProgramCacheKey();t.customProgramCacheKey=()=>s+(e?":coastal-water-cloud":":coastal-haze-cloud"),t.onBeforeCompile=(r,a)=>{n.call(t,r,a),r.uniforms.uCoastalColor=this.color,r.uniforms.uInletCenter=this.inlet,r.uniforms.uCoastalMist=this.mist;const o=e||t instanceof An||t instanceof kr||t instanceof Hf||t instanceof Vf;o&&Object.assign(r.uniforms,this.clouds.uniforms,{uCloudSunDir:this.sunDir,uCloudShadowStrength:this.cloudShadowStrength});const l=(o?Kh+Nx:"")+k_;e||(r.vertexShader=`varying vec3 vCoastalWorld;
`+r.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
`+G_));const c=e?r.fragmentShader.replace("varying vec3 vW;","").replace("col += uSunColor *",`float sunlight = cloudSunlight(vW);
          col *= mix(1.0, sunlight, 0.22);
          col += uSunColor * sunlight *`):o?r.fragmentShader.replace("#include <lights_fragment_begin>",B_):r.fragmentShader;r.fragmentShader=(e?l.replace(/vCoastalWorld/g,"vW"):l)+c.replace("#include <tonemapping_fragment>",`gl_FragColor.rgb = coastalLight(gl_FragColor.rgb);
#include <tonemapping_fragment>`)},t.needsUpdate=!0}}const lu=330;function Di(i,t){let e=Math.imul(i^t,73244475);return e=Math.imul(e^e>>>16,73244475),((e^e>>>16)>>>0)/4294967296}function ms(i,t){const e=Math.min(1,Math.max(0,i/t));return e*e*(3-2*e)}class V_{constructor(){Z(this,"window",0);Z(this,"age",0);Z(this,"duration",0);Z(this,"rain",0);Z(this,"wetness",0);Z(this,"cover",.38);Z(this,"storm",!1)}update(t){this.window=Math.floor(t/lu);const e=90+48*Di(this.window,17);this.duration=60+22*Di(this.window,29),this.age=t-this.window*lu-e;const n=this.age-this.duration,s=ms(this.age+42,42)*(1-ms(n,36));this.storm=this.window%4===0,this.cover=.38+(this.storm?.6:.4)*s;const r=this.storm?.97:.55+.15*Di(this.window,41);this.rain=r*ms(this.age,9)*(1-ms(n+14,14)),this.wetness=ms(this.age,23)*(1-ms(n,68))}}const vl=[18,45],ua=8;class W_{constructor(t,e,n){Z(this,"line");Z(this,"vertices",new Float32Array((ua+1)*2*3));Z(this,"center",new Pt);Z(this,"key");Z(this,"previousTime");Z(this,"arrival");this.inletX=e,this.inletZ=n;const s=new Ee;s.setAttribute("position",new Se(this.vertices,3).setUsage(Ts));const r=[];for(let a=0;a<ua;a++){const o=2*a;r.push(o,o+1,o+2,o+1,o+3,o+2)}s.setIndex(r),this.line=new qt(s,new Tn({color:15002367,transparent:!0,depthWrite:!1,side:Re})),this.line.material.forceSinglePass=!0,this.line.name="inlet lightning",this.line.visible=!1,t.add(this.line)}shape(t,e){const n=this.inletX+640*(Di(t,3)-.5),s=this.inletZ+490*(Di(t,13)-.5);this.center.set(n,s);const r=Math.atan2(e.x-n,e.z-s),a=Math.cos(r),o=-Math.sin(r);for(let l=0;l<=ua;l++){const c=l/ua,h=n+34*c+33*(Di(t,60+l)-.5),u=s+18*(Di(t,30+l)-.5),f=422-400*c;for(let d=0;d<2;d++){const p=(d?1:-1)*(1.9-c*1.1),_=3*(2*l+d);this.vertices[_]=h+p*a,this.vertices[_+1]=f,this.vertices[_+2]=u+p*o}}this.line.geometry.attributes.position.needsUpdate=!0,this.line.geometry.computeBoundingSphere()}update(t,e,n,s){const r=this.previousTime;this.previousTime=t,this.line.visible=!1;const a=r!==void 0&&t>=r&&t-r<1.5&&!document.hidden;if(a||(this.arrival=void 0),!e.storm||e.age<vl[0])return 0;const o=e.age>=vl[1]?1:0,l=e.age-vl[o],c=e.window*2+o;if(c!==this.key&&(this.key=c,this.shape(c,n),a&&l<.45)){const u=Math.hypot(this.center.x-n.x,110-n.y,this.center.y-n.z);u<6500&&(this.arrival=t-l+Math.max(.35,u/343))}if(this.arrival!==void 0&&t>=this.arrival){this.arrival=void 0;const u=Math.hypot(this.center.x-n.x,this.center.y-n.z);s==null||s(Zt.clamp(1-u/7e3,.1,1))}const h=Math.max(0,1-l/.32);return this.line.visible=h>0,this.line.material.opacity=h,h}dispose(){this.line.removeFromParent(),this.line.geometry.dispose(),this.line.material.dispose()}}const cu="dmFyIFY9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBIPShULHAseik9PnAgaW4gVD9WKFQscCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6en0pOlRbcF09ejt2YXIgTT0oVCxwLHopPT5IKFQsdHlwZW9mIHAhPSJzeW1ib2wiP3ArIiI6cCx6KTsoZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgcHtjb25zdHJ1Y3RvcihlLG4sdCxyLHMsaCxvLGEpe00odGhpcywibngiKTtNKHRoaXMsIm56Iik7TSh0aGlzLCJ5Iik7TSh0aGlzLCJ4TWluIik7TSh0aGlzLCJ6TWluIik7TSh0aGlzLCJ4TWF4Iik7TSh0aGlzLCJ6TWF4Iik7TSh0aGlzLCJkeCIpO00odGhpcywiZHoiKTtNKHRoaXMsImNlbGxYIik7TSh0aGlzLCJjZWxsWiIpO2lmKHRoaXMucmF3PWUsdGhpcy5leHBvc3VyZT1uLHRoaXMudz10LHRoaXMuaD1yLHRoaXMuc2l6ZVg9cyx0aGlzLnNpemVaPWgsdGhpcy5jZWxsWD1zL3QsdGhpcy5jZWxsWj1oL3IsdGhpcy5ueD1NYXRoLmZsb29yKCh0LTEpL28pKzEsdGhpcy5uej1NYXRoLmZsb29yKChyLTEpL28pKzEsdGhpcy5keD10aGlzLmNlbGxYKm8sdGhpcy5kej10aGlzLmNlbGxaKm8sdGhpcy54TWluPS1zLzIrdGhpcy5jZWxsWC8yLHRoaXMuek1pbj0taC8yK3RoaXMuY2VsbFovMix0aGlzLnhNYXg9dGhpcy54TWluKyh0aGlzLm54LTEpKnRoaXMuZHgsdGhpcy56TWF4PXRoaXMuek1pbisodGhpcy5uei0xKSp0aGlzLmR6LHRoaXMueT1hPz9uZXcgRmxvYXQzMkFycmF5KHRoaXMubngqdGhpcy5ueiksIWEpZm9yKGxldCBkPTA7ZDx0aGlzLm56O2QrKylmb3IobGV0IGM9MDtjPHRoaXMubng7YysrKXRoaXMueVtkKnRoaXMubngrY109ZVtkKm8qdCtjKm9dKjEuNX15QXQoZSxuKXtsZXQgdD0oZS10aGlzLnhNaW4pL3RoaXMuZHgscj0obi10aGlzLnpNaW4pL3RoaXMuZHo7dDwwP3Q9MDp0PnRoaXMubngtMS4wMDAxJiYodD10aGlzLm54LTEuMDAwMSkscjwwP3I9MDpyPnRoaXMubnotMS4wMDAxJiYocj10aGlzLm56LTEuMDAwMSk7Y29uc3Qgcz10fDAsaD1yfDAsbz10LXMsYT1yLWgsZD1oKnRoaXMubngrcyxjPXRoaXMueVtkXSxsPXRoaXMueVtkKzFdLGY9dGhpcy55W2QrdGhpcy5ueF0sdT10aGlzLnlbZCt0aGlzLm54KzFdO3JldHVybiBvK2E8PTE/YysobC1jKSpvKyhmLWMpKmE6dSsoZi11KSooMS1vKSsobC11KSooMS1hKX1iaWxpbmVhcihlLG4sdCl7bGV0IHI9KG4rdGhpcy5zaXplWC8yKS90aGlzLmNlbGxYLS41LHM9KHQrdGhpcy5zaXplWi8yKS90aGlzLmNlbGxaLS41O3I8MD9yPTA6cj50aGlzLnctMS4wMDAxJiYocj10aGlzLnctMS4wMDAxKSxzPDA/cz0wOnM+dGhpcy5oLTEuMDAwMSYmKHM9dGhpcy5oLTEuMDAwMSk7Y29uc3QgaD1yfDAsbz1zfDAsYT1yLWgsZD1zLW8sYz1vKnRoaXMudytoO3JldHVybihlW2NdKigxLWEpK2VbYysxXSphKSooMS1kKSsoZVtjK3RoaXMud10qKDEtYSkrZVtjK3RoaXMudysxXSphKSpkfW1ldHJlc0F0KGUsbil7cmV0dXJuIHRoaXMuYmlsaW5lYXIodGhpcy5yYXcsZSxuKX1leHBvc3VyZUF0KGUsbil7cmV0dXJuIHRoaXMuYmlsaW5lYXIodGhpcy5leHBvc3VyZSxlLG4pfWluc2lkZShlLG4sdD0wKXtyZXR1cm4gZT50aGlzLnhNaW4rdCYmZTx0aGlzLnhNYXgtdCYmbj50aGlzLnpNaW4rdCYmbjx0aGlzLnpNYXgtdH19Y29uc3Qgej0xMjg7ZnVuY3Rpb24gRChpLGUsbil7Y29uc3R7bng6dCxuejpyfT1pLHM9TWF0aC5taW4oeisxLHQtZSksaD1NYXRoLm1pbih6KzEsci1uKSxvPW5ldyBGbG9hdDMyQXJyYXkocypoKjMpLGE9bmV3IEZsb2F0MzJBcnJheShzKmgqMyksZD1uZXcgRmxvYXQzMkFycmF5KHMqaCoyKTtmb3IobGV0IGY9bjtmPG4raDtmKyspZm9yKGxldCB1PWU7dTxlK3M7dSsrKXtjb25zdCB3PShmLW4pKnMrdS1lLHg9aS54TWluK3UqaS5keCx5PWkuek1pbitmKmkuZHo7b1t3KjNdPXgsb1t3KjMrMV09aS55W2YqdCt1XSxvW3cqMysyXT15LGRbdyoyXT0oeCtpLnNpemVYLzIpL2kuc2l6ZVgsZFt3KjIrMV09MS0oeStpLnNpemVaLzIpL2kuc2l6ZVo7Y29uc3Qgdj1pLnlbZip0K01hdGgubWF4KHUtMSwwKV0sRT1pLnlbZip0K01hdGgubWluKHUrMSx0LTEpXSxiPWkueVtNYXRoLm1heChmLTEsMCkqdCt1XSxBPWkueVtNYXRoLm1pbihmKzEsci0xKSp0K3VdLG09KEUtdikvKDIqaS5keCksaz0oQS1iKS8oMippLmR6KSxnPU1hdGguaHlwb3QobSwxLGspO2FbdyozXT0tbS9nLGFbdyozKzFdPTEvZyxhW3cqMysyXT0tay9nfWNvbnN0IGM9bmV3IFVpbnQxNkFycmF5KChzLTEpKihoLTEpKjYpO2xldCBsPTA7Zm9yKGxldCBmPTA7ZjxoLTE7ZisrKWZvcihsZXQgdT0wO3U8cy0xO3UrKyl7Y29uc3Qgdz1mKnMrdSx4PXcrMSx5PXcrcyx2PXkrMTtjW2wrK109dyxjW2wrK109eSxjW2wrK109eCxjW2wrK109eCxjW2wrK109eSxjW2wrK109dn1yZXR1cm57cG9zOm8sbm9yOmEsdXY6ZCxpZHg6Y319ZnVuY3Rpb24gUyhpKXtjb25zdCBlPVtdO2ZvcihsZXQgbj0wO248aS5uei0xO24rPXopZm9yKGxldCB0PTA7dDxpLm54LTE7dCs9eillLnB1c2goRChpLHQsbikpO3JldHVybiBlfWZ1bmN0aW9uIFUoaSl7Y29uc3QgZT1hdG9iKGkpLG49bmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpO2ZvcihsZXQgdD0wO3Q8ZS5sZW5ndGg7dCsrKW5bdF09ZS5jaGFyQ29kZUF0KHQpO3JldHVybiBuZXcgSW50MTZBcnJheShuLmJ1ZmZlciwwLG4ubGVuZ3RoPj4xKX1hc3luYyBmdW5jdGlvbiBCKGkpe2NvbnN0IGU9bmV3IFVpbnQ4QXJyYXkoaSksbj1uZXcgRGF0YVZpZXcoaSk7bGV0IHQ9OCxyPTAscz0wLGg9MCxvPTAsYT0wO2NvbnN0IGQ9W107Zm9yKDt0PGUubGVuZ3RoOyl7Y29uc3QgeD1uLmdldFVpbnQzMih0KSx5PVN0cmluZy5mcm9tQ2hhckNvZGUoZVt0KzRdLGVbdCs1XSxlW3QrNl0sZVt0KzddKTtpZih5PT09IklIRFIiKXI9bi5nZXRVaW50MzIodCs4KSxzPW4uZ2V0VWludDMyKHQrMTIpLGg9ZVt0KzE2XSxvPWVbdCsxN10sYT1lW3QrMjBdO2Vsc2UgaWYoeT09PSJJREFUIilkLnB1c2goZS5zdWJhcnJheSh0KzgsdCs4K3gpKTtlbHNlIGlmKHk9PT0iSUVORCIpYnJlYWs7dCs9MTIreH1pZihoIT09OHx8byE9PTImJm8hPT02fHxhKXRocm93IG5ldyBFcnJvcigiVW5zdXBwb3J0ZWQgdGVycmFpbiBpbWFnZSBmb3JtYXQiKTtjb25zdCBjPW89PT0yPzM6NCxsPW5ldyBCbG9iKGQpLnN0cmVhbSgpLnBpcGVUaHJvdWdoKG5ldyBEZWNvbXByZXNzaW9uU3RyZWFtKCJkZWZsYXRlIikpLGY9bmV3IFVpbnQ4QXJyYXkoYXdhaXQgbmV3IFJlc3BvbnNlKGwpLmFycmF5QnVmZmVyKCkpLHU9cipjLHc9bmV3IFVpbnQ4QXJyYXkodSpzKTtmb3IobGV0IHg9MDt4PHM7eCsrKXtjb25zdCB5PWZbeCoodSsxKV0sdj14Kih1KzEpKzEsRT14KnU7Zm9yKGxldCBiPTA7Yjx1O2IrKyl7Y29uc3QgQT1iPj1jP3dbRStiLWNdOjAsbT14PjA/d1tFLXUrYl06MCxrPWI+PWMmJng+MD93W0UtdStiLWNdOjA7bGV0IGc9Zlt2K2JdO2lmKHk9PT0xKWcrPUE7ZWxzZSBpZih5PT09MilnKz1tO2Vsc2UgaWYoeT09PTMpZys9QSttPj4xO2Vsc2UgaWYoeT09PTQpe2NvbnN0IEY9TWF0aC5hYnMobS1rKSxJPU1hdGguYWJzKEEtayksWj1NYXRoLmFicyhBK20tMiprKTtnKz1GPD1JJiZGPD1aP0E6STw9Wj9tOmt9d1tFK2JdPWcmMjU1fX1yZXR1cm57d2lkdGg6cixoZWlnaHQ6cyxjaGFubmVsczpjLGRhdGE6d319YXN5bmMgZnVuY3Rpb24gcShpLGUsbil7Y29uc3RbdCxyXT1hd2FpdCBQcm9taXNlLmFsbChbZmV0Y2goaS50b3duLHtzaWduYWw6bn0pLnRoZW4obD0+e2lmKCFsLm9rKXRocm93IG5ldyBFcnJvcigiQ291bGQgbm90IGxvYWQgdGhlIHRvd24gZGF0YSIpO3JldHVybiBsLmpzb24oKX0pLnRoZW4obD0+KGUoIlN0cmVldHMgYW5kIGJ1aWxkaW5ncyIpLGwpKSxmZXRjaChpLmhlaWdodCx7c2lnbmFsOm59KS50aGVuKGw9PntpZighbC5vayl0aHJvdyBuZXcgRXJyb3IoIkNvdWxkIG5vdCBsb2FkIHRoZSB0ZXJyYWluIik7cmV0dXJuIGwuYXJyYXlCdWZmZXIoKX0pLnRoZW4oQikudGhlbihsPT4oZSgiVGVycmFpbiIpLGwpKV0pO2lmKG4uYWJvcnRlZCl0aHJvdyBuLnJlYXNvbjtjb25zdHttZXRhOnN9PXQsaD1yLndpZHRoKnIuaGVpZ2h0LG89bmV3IEZsb2F0MzJBcnJheShoKSxhPW5ldyBGbG9hdDMyQXJyYXkoaCksZD1yLmNoYW5uZWxzO2ZvcihsZXQgbD0wO2w8aDtsKyspb1tsXT0oci5kYXRhW2wqZF08PDh8ci5kYXRhW2wqZCsxXSkvcy5oZWlnaHRTY2FsZS1zLmhlaWdodE9mZnNldCxhW2xdPXIuZGF0YVtsKmQrMl0vMjU1O2NvbnN0IGM9bmV3IHAobyxhLHMuZ3JpZFswXSxzLmdyaWRbMV0scy5zaXplWzBdLHMuc2l6ZVsxXSxpLnRlcnJhaW5TdGVwKTtyZXR1cm57dG93bjp7Li4udCxob3VzZXM6VSh0LmhvdXNlcyksY2FiaW5zOlUodC5jYWJpbnMpLGNhcnM6VSh0LmNhcnMpLHRyZWVzOlUodC50cmVlcyl9LGhlaWdodHM6byxleHBvc3VyZTphLHN1cmZhY2U6Yy55LHRlcnJhaW5UaWxlczpTKGMpfX1jb25zdCBqPXNlbGYsQz1uZXcgTWFwO2Z1bmN0aW9uIFgoaSxlPVtdKXtqLnBvc3RNZXNzYWdlKGksZSl9ZnVuY3Rpb24gTChpKXtyZXR1cm4gaS5tYXAoZT0+ZS5idWZmZXIpfWoub25tZXNzYWdlPWFzeW5jIGk9Pnt2YXIgcztjb25zdCBlPWkuZGF0YSx7aWQ6bn09ZTtpZigiY2FuY2VsImluIGUpeyhzPUMuZ2V0KG4pKT09bnVsbHx8cy5hYm9ydCgpO3JldHVybn1jb25zdCB0PW5ldyBBYm9ydENvbnRyb2xsZXIse3NpZ25hbDpyfT10O0Muc2V0KG4sdCk7dHJ5e2NvbnN0e2pvYjpofT1lO2lmKGgua2luZD09PSJ3b3JsZCIpe2NvbnN0IG89YXdhaXQgcShoLnNvdXJjZSx1PT5YKHtpZDpuLHByb2dyZXNzOnV9KSxyKSx7dG93bjphLGhlaWdodHM6ZCxleHBvc3VyZTpjLHN1cmZhY2U6bCx0ZXJyYWluVGlsZXM6Zn09bztYKHtpZDpuLHZhbHVlOm99LEwoW2QsYyxsLGEuaG91c2VzLGEuY2FiaW5zLGEuY2FycyxhLnRyZWVzLC4uLmYuZmxhdE1hcCgoe3Bvczp1LG5vcjp3LHV2OngsaWR4Onl9KT0+W3Usdyx4LHldKV0pKX1lbHNle2NvbnN0IG89YXdhaXQgZmV0Y2goaC51cmwse3NpZ25hbDpyfSk7aWYoIW8ub2spdGhyb3cgbmV3IEVycm9yKCJDb3VsZCBub3QgbG9hZCBncm91bmQgZGV0YWlsIik7Y29uc3QgYT1hd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChhd2FpdCBvLmJsb2IoKSx7aW1hZ2VPcmllbnRhdGlvbjoiZmxpcFkiLHByZW11bHRpcGx5QWxwaGE6Im5vbmUifSk7aWYoci5hYm9ydGVkKWEuY2xvc2UoKTtlbHNlIHRyeXtYKHtpZDpuLHZhbHVlOmF9LFthXSl9Y2F0Y2goZCl7dGhyb3cgYS5jbG9zZSgpLGR9fX1jYXRjaChoKXtyLmFib3J0ZWR8fFgoe2lkOm4sZXJyb3I6aCBpbnN0YW5jZW9mIEVycm9yP2gubWVzc2FnZTpTdHJpbmcoaCl9KX1maW5hbGx5e0MuZGVsZXRlKG4pfX19KSgpOwo=",X_=i=>Uint8Array.from(atob(i),t=>t.charCodeAt(0)),hu=typeof self<"u"&&self.Blob&&new Blob([X_(cu)],{type:"text/javascript;charset=utf-8"});function Y_(i){let t;try{if(t=hu&&(self.URL||self.webkitURL).createObjectURL(hu),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;base64,"+cu,{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}class q_{constructor(){Z(this,"worker");Z(this,"pending",new Map);Z(this,"nextId",0);try{const t=new Y_;this.worker=t,t.onmessage=e=>{const n=e.data,s=this.pending.get(n.id);s?s.receive(n):"value"in n&&"close"in n.value&&n.value.close()},t.onerror=e=>{e.preventDefault(),this.close(new Error("Could not start the model worker"))},t.onmessageerror=()=>this.close(new Error("Could not receive data from the model worker"))}catch{}}async run(t,e,n,s){if(n.aborted)throw n.reason;if(this.worker)try{return await this.request(this.worker,t,n,s)}catch{if(n.aborted)throw n.reason}return e()}close(t=new DOMException("Model closed","AbortError")){var e;(e=this.worker)==null||e.terminate(),this.worker=void 0;for(const n of this.pending.values())n.reject(t)}request(t,e,n,s){return new Promise((r,a)=>{const o=++this.nextId,l=()=>{this.pending.delete(o),n.removeEventListener("abort",c)},c=()=>{l(),t.postMessage({id:o,cancel:!0}),a(n.reason)},h=u=>{l(),a(u)};this.pending.set(o,{receive:u=>{if("progress"in u){s==null||s(u.progress);return}l(),"error"in u?a(new Error(u.error)):r(u.value)},reject:h}),n.addEventListener("abort",c,{once:!0});try{t.postMessage({id:o,job:e})}catch(u){h(u)}})}}class uu{constructor(t,e){Z(this,"bounds",new pi);Z(this,"level",-1);this.levels=t;for(const s of t)for(const r of s)r.computeBoundingBox(),this.bounds.union(r.boundingBox),r.castShadow=!0,e.add(r);const n=this.bounds.getBoundingSphere(new Ti);for(const s of t.flat())s.boundingSphere=n,s.visible=!1}update(t,e,n){const s=this.bounds.distanceToPoint(t),[r,a,o]=n,l=o+e*8,c=u=>this.level<0?1:this.level<=u?1.1:.9,h=s<=r*c(0)?0:s<=a*c(1)?1:s<=l*c(2)?2:3;if(h!==this.level){for(const u of this.levels[this.level]??[])u.visible=!1;for(const u of this.levels[h]??[])u.visible=!0;this.level=h}}}const du=.25,gs=[16053490,16053490,16053490,13225168,10725291,5593438,2040100,2838410,11020586,2054728,14266938,8368595],fu=[15223869,3113154,15909424,3843690,16777215,9329589,15764004,2042422,15231654,4899008],ni=[14826299,15764004,15909424,3715691,3117008,13651872,3720896,16053490].map(G);function pu(){const i=new ee,t=G(16777215),e=G(1713198),n=G(1381655);i.box(-.88,.3,-2.1,.88,.95,2.1,t,void 0,n),i.box(-.8,.95,-1.35,.8,1.48,.7,e,t);for(const s of[-.9,.68])for(const r of[-1.55,1])i.box(s,0,r,s+.22,.62,r+.62,n);for(const s of[-.75,.45])i.quad(s,.6,2.11,s+.3,.6,2.11,s+.3,.8,2.11,s,.8,2.11,G(16776166),2.2);return i.build()}function Ml(i){const t=new ee,e=new ee;return Mu(i,t,e,G(16777215)),{body:t.build(),trim:e.build()}}function Sl(i){const t=i===1,e=i===2,n=e?-2.3:-2.18,s=e?2.22:2.18,r=e?1.035:t?.99:.93;return{wagon:t,ute:e,tail:n,nose:s,sill:r,belt:o=>{const l=Math.max(0,(n+.58-o)/.58,(o-s+.55)/.55),c=o<0?t||e?.045:.095:.14,h=r-l*c;return{width:.88-.13*l,shoulder:h-.105,top:h}}}}function mu(i,t){const e=new ee,{wagon:n,ute:s,tail:r,nose:a,sill:o}=Sl(i),l=G(16777215),c=G(6584713),h=G(2236966),u=s?1.63:n?1.6:1.49,f=s?-.37:n?-1.72:-.74,d=s?.64:.42,p=(_,m,g,S,x,M,E,b)=>{e.quad(-_,m,S,_,m,S,.65,x,E,-.65,x,E,b),e.quad(_,m,g,-_,m,g,-.65,x,M,.65,x,M,b),e.quad(_,m,S,_,m,g,.65,x,M,.65,x,E,b),e.quad(-_,m,g,-_,m,S,-.65,x,E,-.65,x,M,b),e.quad(-.65,x,E,.65,x,E,.65,x,M,-.65,x,M,l)};if(t)p(.88,.3,r,a,u,f,d,l);else{e.box(-.88,.3,r,.88,o,a,l),p(.77,o,s?-.52:n?-1.95:-1.47,1.02,u,f,d,c);for(const _ of[-1.35,1.38])e.quad(.9,.02,_+.32,.9,.02,_-.32,.9,.57,_-.32,.9,.57,_+.32,h),e.quad(-.9,.02,_-.32,-.9,.02,_+.32,-.9,.57,_+.32,-.9,.57,_-.32,h)}return e.build()}function gu(i,t,e,n,s,r,a){const o=t>0?r-.025:r-.1,l=t<0&&(i===1||i===2);return[[e*.42,o,n],[e*(s-.022),o-(l?.13:0),n],[e*(s-.064),a-.025,n],[e*(t>0?.31:.43),a-.052,n]]}const xu=12;function _u(i){const t=new ee,e=Sl(i);for(const s of[1,-1])for(const r of[1,-1]){const a=i<0?r*2.1:r>0?e.nose:e.tail,o=a+r*.02;let l;if(i<0){const c=r>0?.755:.59,h=.865;l=[[s*c,.62,o],[s*h,.62,o],[s*h,.77,o],[s*c,.77,o]]}else{const{width:c,shoulder:h,top:u}=e.belt(a),[f,d,p,_]=gu(i,r,s,o,c,h,u),m=(g,S,x)=>[g[0]+(S[0]-g[0])*x,g[1]+(S[1]-g[1])*x,o];l=[m(f,d,.59),m(f,d,.99),m(_,p,.99),m(_,p,.59)]}s!==r&&l.reverse(),t.quad(...l[0],...l[1],...l[2],...l[3],G(16777215))}const n=new qt(t.build(),new Tn({color:16752666,toneMapped:!1}));return n.visible=!1,n}function vu(i,t){i.visible=t===-1||t===1,i.visible&&(i.name=t<0?"left-turn-indicator":"right-turn-indicator",i.geometry.setDrawRange(t<0?0:xu,xu))}function Mu(i,t,e,n){const s=G(4413799),r=G(3425876),a=G(2635588),o=G(8624550),l=G(6651533),c=G(2105636),h=G(2566960),u=G(11252924),f=G(5793135),d=(N,D,Y,it,q,et,$=!1,tt=0)=>{$?N.quad(...q,...it,...Y,...D,et,tt):N.quad(...D,...Y,...it,...q,et,tt)},{wagon:p,ute:_,tail:m,nose:g,sill:S,belt:x}=Sl(i),M=_||p?1.55:1.42,E=_?1.63:p?1.6:1.49,b=_?-.52:p?-1.95:-1.47,v=_?-.37:p?-1.72:-.74,y=1.02,T=_?.64:.42,w=-1.35,C=1.38,L=.34,U=.387,P=[m,m+.58,g-.55,g];for(const N of[w,C])for(let D=0;D<=5;D++)P.push(N-U*Math.cos(Math.PI*D/5));P.sort((N,D)=>N-D);const B=N=>{const D=Math.min(Math.abs(N-w),Math.abs(N-C));return D<U+1e-5?L+Math.sqrt(Math.max(0,U*U-D*D)):.3};for(const N of[-1,1])for(let D=1;D<P.length;D++){const Y=P[D-1],it=P[D],q=x(Y),et=x(it);d(t,[N*q.width,B(Y),Y],[N*q.width,q.shoulder,Y],[N*et.width,et.shoulder,it],[N*et.width,B(it),it],n,N<0)}const F=[m,m+.15,m+.58,b,y,g-.55,g].sort((N,D)=>N-D);for(let N=1;N<F.length;N++){const D=F[N-1],Y=F[N],it=x(D),q=x(Y);for(const K of[-1,1])d(t,[K*it.width,it.shoulder,D],[K*(it.width-.08),it.top,D],[K*(q.width-.08),q.top,Y],[K*q.width,q.shoulder,Y],n,K<0);if(D>=b&&Y<=y)continue;const et=_&&D>=m+.15&&Y<=b,$=it.width-.08,tt=q.width-.08;if(et)for(const K of[-1,1])d(t,[K*$,it.top,D],[K*.665,it.top,D],[K*.665,q.top,Y],[K*tt,q.top,Y],n,K<0),d(e,[K*.665,it.top,D],[K*.665,.7,D],[K*.665,.7,Y],[K*.665,q.top,Y],h,K<0);else d(t,[-$,it.top,D],[-tt,q.top,Y],[tt,q.top,Y],[$,it.top,D],n)}if(_){const N=m+.15,D=b;d(e,[-.665,.7,N],[-.665,.7,D],[.665,.7,D],[.665,.7,N],G(4343627));for(const[Y,it]of[[N,1],[D,0]])d(e,[-.665,.7,Y],[.665,.7,Y],[.665,x(Y).top,Y],[-.665,x(Y).top,Y],h,!it)}const k=(N,D,Y)=>{const it=b+(v-b)*Y,q=y+(T-y)*Y;return[N*(.8-.145*Y),S+(M-S)*Y,it+(q-it)*D]},H=p?[0,.07,.275,.32,.56,.6,.935,1]:_?[0,.12,.33,.395,.925,1]:[0,.09,.47,.525,.925,1];for(const N of[-1,1]){const D=(Y,it,q,et,$,tt)=>d($,k(N,Y,q),k(N,Y,et),k(N,it,et),k(N,it,q),tt,N<0);D(0,1,0,.07,t,n),D(0,1,.93,1,t,n);for(let Y=1;Y<H.length;Y++){const it=Y%2===0,q=Y!==1&&Y!==H.length-1,et=e.vertexCount;D(H[Y-1],H[Y],.07,.93,it||q?e:t,it?Y===2?a:r:q?h:n),it&&e.gradientY(et,S,M,Y===2?a:r,Y===2?l:o)}}for(const N of[-1,1])d(t,k(N,0,1),[N*.58,E,v+.045],[N*.58,E,T-.045],k(N,1,1),n,N<0);d(t,[-.58,E,v+.045],[-.58,E,T-.045],[.58,E,T-.045],[.58,E,v+.045],n);for(const N of[0,1]){const D=N?T-.045:v+.045;d(t,k(-1,N,1),k(1,N,1),[.58,E,D],[-.58,E,D],n,!N);const Y=e.vertexCount;d(e,k(-1,N,0),k(1,N,0),k(1,N,1),k(-1,N,1),N?s:a,!N),e.gradientY(Y,S,M,N?s:a,N?o:l)}if(p)for(const N of[-1,1]){const D=N*.56;e.box(D-.032,E,v+.17,D+.032,1.67,T-.21,h)}for(const N of[-1,1]){const D=N>0?g:m,{width:Y,shoulder:it,top:q}=x(D);if(_&&N<0){const tt=[[-Y,.3,D],[Y,.3,D],[Y,it,D],[-Y,it,D]],K=[[-.41,.59,D],[.41,.59,D],[.46,.74,D],[-.46,.74,D]],ut=[[-.39,.612,D+.024],[.39,.612,D+.024],[.43,.716,D+.024],[-.43,.716,D+.024]];for(let yt=0;yt<4;yt++){const ft=(yt+1)%4;d(t,tt[yt],tt[ft],K[ft],K[yt],n,!0),d(t,K[yt],K[ft],ut[ft],ut[yt],n,!0)}d(t,ut[0],ut[1],ut[2],ut[3],te(n,.88),!0)}else d(t,[-Y,.3,D],[Y,.3,D],[Y,it,D],[-Y,it,D],n,N<0);d(t,[-Y,it,D],[Y,it,D],[Y-.08,q,D],[-Y+.08,q,D],n,N<0);const et=D+N*.008;for(const tt of[-1,1])d(e,...gu(i,N,tt,et,Y,it,q),N>0?G(14477800):G(12003881),tt!==N,N>0?1.1:.6);N>0?d(e,[-.48,.39,et],[.48,.39,et],[.53,.54,et],[-.53,.54,et],h):_&&d(e,[-.12,.76,et],[.12,.76,et],[.12,.8,et],[-.12,.8,et],h,!0);const $=D+N*.012;d(e,[-.2,.44,$],[.2,.44,$],[.2,.55,$],[-.2,.55,$],G(14014927),N<0)}e.box(-.7,.23,m+.22,.7,.69,g-.22,h,null);const z=(N,D,Y,it)=>[N,L+it*Math.sin(Y)*Math.sin(.4*Math.PI),D+it*Math.cos(Y)];for(const N of[-1,1])for(const D of[w,C]){const Y=N*.69,it=N*.9,q=N*.912;for(let et=0;et<8;et++){const $=et*Math.PI/4,tt=(et+1)*Math.PI/4,K=z(it,D,$,.34),ut=z(it,D,tt,.34);d(e,z(Y,D,$,.34),K,ut,z(Y,D,tt,.34),c,N<0),N>0?e.tri(it,L,D,...ut,...K,c):e.tri(it,L,D,...K,...ut,c)}for(let et=0;et<6;et++){const $=z(q,D,et*Math.PI/3,.188),tt=z(q,D,(et+1)*Math.PI/3,.188),K=et%2?u:f;N>0?e.tri(N*.905,L,D,...tt,...$,K):e.tri(N*.905,L,D,...$,...tt,K)}}}function da(i,t,e,n,s,r){const a=-t/2,o=t*.12,l=t/2,c=e/2,h=c*.5,u=te(s,.72);for(const d of[-1,1])d>0?(i.quad(h,0,a,c*.88,n,a,c,n,o,h,0,o,s),i.quad(h,0,o,c,n,o,0,n*1.12,l,0,.1,l*.86,s)):(i.quad(-h,0,o,-c,n,o,-c*.88,n,a,-h,0,a,s),i.quad(0,.1,l*.86,0,n*1.12,l,-c,n,o,-h,0,o,s));i.quad(-h,0,a,-c*.88,n,a,c*.88,n,a,h,0,a,u),i.quad(-h,0,a,h,0,a,h,0,o,-h,0,o,u),i.tri(-h,0,o,h,0,o,0,.1,l*.86,u);const f=n*.8;i.quad(-c*.84,f,a+.05,c*.84,f,a+.05,c*.95,f,o,-c*.95,f,o,r),i.tri(-c*.95,f,o,c*.95,f,o,0,f,l*.95,r)}function Z_(i,t){const e=new ee,n=G(16119280);if(i===0)da(e,4.6,1.9,.75,t()<.5?G(12962767):ni[Math.floor(t()*6)],G(10133668)),e.box(-.2,.55,-2.65,.2,1.25,-2.25,G(1974822)),e.box(-.75,.6,-.9,.75,.72,-.5,G(9138002)),e.box(-.75,.6,.4,.75,.72,.8,G(9138002));else if(i===1){const s=ni[Math.floor(t()*ni.length)];da(e,7.4,2.7,1.25,n,G(15131350)),e.box(-1.37,.72,-3.7,1.37,.9,3,s,null),e.box(-1.05,1,-1.2,1.05,2.25,1.9,n,G(15329248)),e.quad(-1,1.45,1.92,1,1.45,1.92,.9,2.2,1.92,-.9,2.2,1.92,G(2240572),.4),e.box(-1.06,1.5,-.9,-1.05,2.1,1.6,G(2240572),null),e.box(1.05,1.5,-.9,1.06,2.1,1.6,G(2240572),null),e.box(-.9,2.25,-1,.9,2.33,1.2,n),e.cyl(0,2.33,-.6,.03,.02,1.6,4,G(9278358))}else da(e,9,2.8,1.3,t()<.6?n:G(2377070),G(14208952)),e.box(-.85,1.05,-1.6,.85,1.55,1.6,n,G(15329248)),e.cyl(0,1.05,.9,.08,.05,11.5,5,G(14014682)),e.box(-.06,2.45,-3,.06,2.57,.9,G(14014682)),e.blob(0,2.72,-1.05,.17,.17,1.9,5,3,G(3104666)),e.quad(-.01,12.4,.9,.01,12.4,.9,.01,1.4,4.4,-.01,1.4,4.4,G(10133154));return e.build()}function K_(i){const t=new ee;return da(t,4.2,1.5,.55,G(16119280),G(14736588)),t.cyl(0,.45,.5,.04,.03,6,4,G(14014682)),t.tri(.02,6.3,.5,.02,1.1,.45,.6,1.2,-2,i),t.tri(.02,4.6,.6,.3,1,1.9,.02,1,.6,G(16250866)),t.blob(.35,.95,-.9,.22,.4,.22,5,3,G(14238767)),t.build()}function $_(i,t){const e=new ee,n=8,s=9,r=2.6;for(let a=0;a<n;a++){const o=-1.15+a/n*2.3,l=-1.15+(a+1)/n*2.3,c=Math.sin(o)*s*.5,h=Math.cos(o)*s*.42,u=Math.sin(l)*s*.5,f=Math.cos(l)*s*.42,d=a===0||a===n-1||a===3||a===4?t:i;e.quad(c,h,-r/2,u,f,-r/2,u,f,r/2,c,h,r/2,d)}return e.build()}function J_(i,t){const e=new ee;return e.box(-.22,0,-.75,.22,.06,.75,i),e.blob(-.25,.75,0,.2,.62,.22,5,3,t),e.blob(-.42,1.48,0,.13,.14,.13,5,3,G(14264711)),e.build()}function Q_(i){const t=new ee;return t.blob(0,.02,0,.27,.05,1.05,6,2,i),t.blob(0,.42,-.1,.2,.4,.18,5,3,G(1976112)),t.blob(0,.9,-.1,.12,.13,.12,5,3,G(14264711)),t.build()}function j_(i){const t=new Map;for(const r of i){if(r.cls>1||!r.name||r.flags)continue;const a=t.get(r.name)??[];a.push(r),t.set(r.name,a)}const e=[],n=(r,a)=>a?[r[r.length-3],r[r.length-1]]:[r[0],r[2]],s=r=>{const a=new Float32Array(r.length);for(let o=0;o<r.length/3;o++)a.set(r.subarray(o*3,o*3+3),r.length-3-o*3);return a};for(const r of t.values()){const a=r.map(l=>l.pts),o=r[0].width;for(;a.length;){let l=Array.from(a.pop()),c=!0;for(;c;){c=!1;for(let d=0;d<a.length;d++){const p=a[d],_=[l[l.length-3],l[l.length-1]],m=[l[0],l[2]],g=(M,E)=>Math.hypot(M[0]-E[0],M[1]-E[1])<2.5;let S=null,x=!0;if(g(_,n(p,!1))?S=p:g(_,n(p,!0))?S=s(p):g(m,n(p,!0))?(S=p,x=!1):g(m,n(p,!1))&&(S=s(p),x=!1),!!S){l=x?l.concat(Array.from(S.subarray(3))):Array.from(S.subarray(0,S.length-3)).concat(l),a.splice(d,1),c=!0;break}}}const h=new Float32Array(l),u=h.length/3,f=new Float32Array(u);for(let d=1;d<u;d++)f[d]=f[d-1]+Math.hypot(h[d*3]-h[d*3-3],h[d*3+2]-h[d*3-1]);f[u-1]>380&&e.push({pts:h,cum:f,length:f[u-1],width:o})}}return e}function yl(i,t=2,e=320){if(i.length<=(e<320?24:96)||t===0)return[i];let n=1/0,s=-1/0,r=1/0,a=-1/0;for(const u of i)n=Math.min(n,u.x),s=Math.max(s,u.x),r=Math.min(r,u.z),a=Math.max(a,u.z);const o=s-n,l=a-r;if(Math.max(o,l)<e)return[i];const c=o>l?"x":"z";i.sort((u,f)=>u[c]-f[c]);const h=Math.floor(i.length/2);return[...yl(i.slice(0,h),t-1,e),...yl(i.slice(h),t-1,e)]}class tv{constructor(t,e,n=!1){Z(this,"group",new tn);Z(this,"afloat",new tn);Z(this,"boats",[]);Z(this,"dinghies",[]);Z(this,"kites",[]);Z(this,"kiteLines");Z(this,"surfers",[]);Z(this,"traffic");Z(this,"trafficTrim");Z(this,"cars",[]);Z(this,"parkedAt",new Map);Z(this,"parkedSets",[]);Z(this,"drivenAt",new Map);Z(this,"drivenSets",[]);Z(this,"carMat",cs());Z(this,"tmpE",new cn);Z(this,"nothing",new ne().makeScale(0,0,0));Z(this,"gulls");Z(this,"gullState",[]);Z(this,"tmpM",new ne);Z(this,"tmpQ",new Sn);Z(this,"tmpP",new W);Z(this,"up",new W(0,1,0));Z(this,"one",new W(1,1,1));Z(this,"contact");this.ctx=t,this.closeCarShadows=n,this.group.name="life",this.group.add(this.afloat);const s=this.carMat;this.addParkedCars(),this.addTraffic(s),this.addBoats(s,e),this.addKites(s),this.addSurfers(s,e),this.addPeople(e),this.addGulls(e),this.update(0,0)}setTide(t){this.afloat.position.y=t}sit(t,e,n,s){const r=this.ctx.hf,a=Math.sin(n),o=Math.cos(n),l=r.yAt(t+a*1.3,e+o*1.3),c=r.yAt(t-a*1.3,e-o*1.3),h=r.yAt(t-o*.8,e+a*.8),u=r.yAt(t+o*.8,e-a*.8);return this.tmpQ.setFromEuler(this.tmpE.set(-Math.atan2(l-c,2.6),n,Math.atan2(u-h,1.6),"YXZ")),this.tmpM.compose(this.tmpP.set(t,(l+c+h+u)/4+s,e),this.tmpQ,this.one)}carShapes(t){return t?Ml(t-1):{body:pu(),trim:void 0}}makeTrafficCar(t,e,n,s,r){const a=new ee;Mu(t,a,a,G(e));const o=a.build(),l=o.boundingBox,c=(f,d)=>Math.min(1,f/d),h=new W(c(n,Math.max(-l.min.x,l.max.x)),c(r,l.max.y),c(s,Math.max(-l.min.z,l.max.z)));o.scale(h.x,h.y,h.z);const u=new qt(o,this.carMat);return u.name=["traffic-sedan","traffic-wagon","traffic-ute"][t],u.castShadow=u.receiveShadow=!0,u.matrixAutoUpdate=!1,u.visible=!1,this.group.add(u),{mesh:u,scale:h}}addParkedCars(){const{town:t,hf:e,paths:n}=this.ctx,s=t.cars,r=s.length/hs,a=[[],[],[],[]],o=new Set,l=(u,f)=>`${Math.round(u/7)}_${Math.round(f/7)}`;for(let u=0;u<r;u++){const f=s[u*hs]/4,d=s[u*hs+1]/4;if(this.ctx.isClear(f,d)||!this.ctx.isDetail(f,d)&&this.ctx.roads.nearest(f,d,5.5))continue;const p=1+(s[u*hs+3]+u)%3;a[p].push({x:f,z:d,heading:s[u*hs+2]/10*(Math.PI/180),colour:gs[(s[u*hs+3]*7+u)%gs.length]}),o.add(l(f,d))}const c=Oe(911);let h=0;for(const u of n){if(h>=1100||u.width<3.4||u.width>12)continue;const f=u.pts.length/3;let d=20+c()*60;for(let p=1;p<f;p++){const _=u.pts[(p-1)*3],m=u.pts[(p-1)*3+2],g=u.pts[p*3],S=u.pts[p*3+2],x=Math.hypot(g-_,S-m);if(d-=x,d>0||x<.01)continue;d=28+c()*70;const M=c()<.5?1:-1,E=(g-_)/x,b=(S-m)/x,v=Math.max(u.width/2-.55,1.5),y=g+b*v*M,T=S-E*v*M,w=Math.floor(c()*gs.length),C=Math.floor(c()*3);if(e.metresAt(y,T)<.6||!e.inside(y,T,30)||this.ctx.isClear(y,T))continue;let L=!0;for(let U=-1;U<=1&&L;U++)for(let P=-1;P<=1;P++)if(o.has(`${Math.round(y/7)+U}_${Math.round(T/7)+P}`)){L=!1;break}L&&(o.add(l(y,T)),a[1+C].push({x:y,z:T,heading:Math.atan2(E*M,b*M),colour:gs[w]}),h++)}}a.forEach((u,f)=>this.addParkedShape(u,f))}addParkedShape(t,e){if(!t.length)return;const n=Ml(e-1),s=mu(e-1,!1),r=mu(e-1,!0);for(const a of yl(t,5,140)){const o=this.parkedSets.length,l=new Je(n.body,this.carMat,a.length),c=new Je(n.trim,this.carMat,a.length),h=new Je(s,this.carMat,a.length),u=new Je(r,this.carMat,a.length);l.name="parked-car-near-body",c.name="parked-car-near-trim",h.name="parked-car-mid",u.name="parked-car-far";const f=[l,c,h,u],d=[l,h,u],p=new Tt;a.forEach((m,g)=>{const{x:S,z:x,heading:M,colour:E}=m,b=this.sit(S,x,M,.3);for(const v of f)v.setMatrixAt(g,b);p.set(E);for(const v of d)v.setColorAt(g,p);this.parkedAt.set(`${Math.round(S*4)}_${Math.round(x*4)}`,{set:o,k:g,x:S,z:x,heading:M})});const _=new uu([[l,c],[h],[u]],this.group);this.closeCarShadows&&this.addContactShadow(l),this.parkedSets.push({body:l,meshes:f,lod:_,shape:e})}}addContactShadow(t){this.contact??(this.contact={geometry:new Fn(2.5,5.1).rotateX(-Math.PI/2).translate(0,.027,0),material:new en({transparent:!0,depthWrite:!1,vertexShader:`varying vec2 patchUV;
          void main(){patchUV=2.*uv-1.;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 patchUV;
          void main(){float edge=length(max(abs(patchUV)-vec2(.49,.57),0.)/vec2(.50,.42));
            gl_FragColor=vec4(.012,.015,.016,.32*(1.-smoothstep(.05,1.,edge)));
            #include <colorspace_fragment>
          }`})});const e=new Je(this.contact.geometry,this.contact.material,t.count);e.name="parked-car-contact",e.instanceMatrix=t.instanceMatrix,e.boundingSphere=t.boundingSphere,t.add(e)}addCars(t){const e=[[],[],[],[]];for(const n of t)e[1+(n.kind??0)%3].push(n);e.forEach((n,s)=>this.addParkedShape(n,s))}nearestCar(t,e,n){let s=null;for(const[r,a]of this.parkedAt){const o=this.drivenAt.get(r)??a,l=Math.hypot(o.x-t,o.z-e);l<(s?s.distance:n)&&(s={id:[a.x,a.z],x:o.x,z:o.z,heading:o.heading,distance:l})}return this.cars.forEach((r,a)=>{const o=this.drivenAt.get(`t${a}`)??r,l=Math.hypot(o.x-t,o.z-e);l<(s?s.distance:n)&&(s={id:[9e5+a,0],x:o.x,z:o.z,heading:o.heading,distance:l})}),s}driveCar(t,e,n,s,r,a,o=0,l=0,c=0){const h=t>=9e5?this.cars[t-9e5]:void 0,u=h?`t${t-9e5}`:`${Math.round(t*4)}_${Math.round(e*4)}`,f=h?void 0:this.parkedAt.get(u);if(!f&&!h)return!1;let d=this.drivenAt.get(u);if(!d){if(this.drivenAt.size>=12)return!1;const _=f?this.parkedSets[f.set].shape:this.trafficTrim?1:0;let m=this.drivenSets[_];if(!m){const S=this.carShapes(_);m=this.drivenSets[_]={body:new Je(S.body,this.carMat,12),trim:S.trim?new Je(S.trim,this.carMat,12):void 0,n:0};for(const x of[m.body,m.trim])x&&(x.count=0,x.frustumCulled=!1,x.castShadow=!0,this.group.add(x))}d={set:_,k:m.n++,x:n,y:s,z:r,heading:a},this.drivenAt.set(u,d),m.body.count=m.n,m.trim&&(m.trim.count=m.n);const g=new Tt;if(f){const S=this.parkedSets[f.set];S.body.getColorAt(f.k,g);for(const x of S.meshes)x.setMatrixAt(f.k,this.nothing),x.instanceMatrix.needsUpdate=!0}else this.traffic.getColorAt(t-9e5,g),h.gone=!0;m.body.setColorAt(d.k,g),m.body.instanceColor.needsUpdate=!0}d.x=n,d.y=s,d.z=r,d.heading=a;const p=this.drivenSets[d.set];return this.tmpQ.setFromEuler(this.tmpE.set(-o,a,l,"YXZ")),this.tmpM.compose(this.tmpP.set(n,s+du,r),this.tmpQ,this.one),p.body.setMatrixAt(d.k,this.tmpM),p.body.instanceMatrix.needsUpdate=!0,p.trim&&(p.trim.setMatrixAt(d.k,this.tmpM),p.trim.instanceMatrix.needsUpdate=!0),c&&!d.indicator&&(d.indicator=_u(d.set-1),d.indicator.matrixAutoUpdate=!1,this.group.add(d.indicator)),d.indicator&&(vu(d.indicator,c),d.indicator.visible&&(d.indicator.matrix.copy(this.tmpM),d.indicator.matrixWorldNeedsUpdate=!0)),!0}addTraffic(t){const e=j_(this.ctx.paths);if(!e.length)return;const n=e.reduce((c,h)=>c+h.length,0),s=0,r=Oe(77),a=this.ctx.hasDetail?Ml(0):null,o=this.traffic=new Je(a?a.body:pu(),t,s);if(o.instanceMatrix.setUsage(Ts),o.frustumCulled=!1,a){const c=this.trafficTrim=new Je(a.trim,t,s);c.instanceMatrix.setUsage(Ts),c.frustumCulled=!1,c.castShadow=!0,this.group.add(c)}const l=new Tt;for(let c=0;c<s;c++){let h=r()*n,u=e[0];for(const f of e)if((h-=f.length)<=0){u=f;break}this.cars.push({route:u,s:r()*u.length,dir:r()<.5?1:-1,speed:9+r()*6,x:0,z:0,heading:0}),o.setColorAt(c,l.set(gs[Math.floor(r()*gs.length)]))}o.castShadow=!0,this.group.add(o)}addBoats(t,e){var c;const{hf:n}=this.ctx,s=Oe(451),r=((c=e.jetty)==null?void 0:c.head)??new W(380,0,-117),a=[];for(let h=0;h<4e3&&a.length<16;h++){const u=s()*Math.PI*2,f=55+s()*420,d=r.x+Math.cos(u)*f,p=r.z+Math.sin(u)*f;n.metresAt(d,p)>-1.9||!n.inside(d,p,40)||a.some(([_,m])=>Math.hypot(_-d,m-p)<26)||a.push([d,p])}const o=2.2+s()*.4;a.forEach(([h,u],f)=>{const d=f%5===0?2:f%2?0:1,p=new qt(Z_(d,s),t);p.position.set(h,0,u),p.rotation.y=o+(s()-.5)*.5,p.castShadow=!0,this.afloat.add(p),this.boats.push({obj:p,phase:s()*6.28,y:d===0?-.22:-.42})});const l=[G(16250866),G(15222589),G(3117008),G(15909424)];for(let h=0;h<600&&this.dinghies.length<4;h++){const u=s()*Math.PI*2,f=150+s()*900,d=r.x+Math.cos(u)*f,p=r.z+160+Math.sin(u)*f*.5,_=45+s()*70,m=30+s()*40;let g=n.inside(d,p,160);for(let x=0;x<12&&g;x++){const M=x/12*Math.PI*2;n.metresAt(d+Math.cos(M)*_,p+Math.sin(M)*m)>-1.5&&(g=!1)}if(!g||this.dinghies.some(x=>Math.hypot(x.cx-d,x.cz-p)<170))continue;const S=new qt(K_(l[this.dinghies.length%l.length]),t);S.castShadow=!0,this.afloat.add(S),this.dinghies.push({obj:S,cx:d,cz:p,rx:_,rz:m,phase:s()*6.28,speed:(2.2+s())/Math.max(_,m)})}}addKites(t){const{hf:e,town:n}=this.ctx,s=Oe(990),[r,a]=fn(n.meta,-38.6385,145.714),[o,l]=fn(n.meta,-38.645,145.731),c=[];for(let f=0;f<3e3&&c.length<6;f++){const d=r+s()*(o-r),p=a+s()*(l-a);e.metresAt(d,p)>-1.6||c.some(_=>Math.hypot(_.x-d,_.z-p)<110)||c.push(new W(d,0,p))}const h=new Float32Array(c.length*12);c.forEach((f,d)=>{let p=85;for(;p>15&&(e.metresAt(f.x+.65*p,f.z+.76*p)>-1.2||e.metresAt(f.x-.65*p,f.z-.76*p)>-1.2);)p-=10;const _=ni[Math.floor(s()*7)],m=ni[Math.floor(s()*7)],g=new qt($_(_,m===_?ni[7]:m),t),S=new qt(J_(ni[Math.floor(s()*7)],G(1976112)),t);g.castShadow=!0,this.afloat.add(g,S),this.kites.push({base:f,reach:p,phase:s()*6.28,speed:.12+s()*.06,kite:g,rider:S})});const u=new Ee;u.setAttribute("position",new Se(h,3).setUsage(Ts)),this.kiteLines=new kc(u,ea(new Fc({color:15921906,transparent:!0,opacity:.7}))),this.kiteLines.frustumCulled=!1,this.afloat.add(this.kiteLines)}addSurfers(t,e){if(!e.surf)return;const{hf:n}=this.ctx,s=Oe(31),[r,a]=e.surf.seaward,o=e.surf.beach;let l=20;for(;l<420&&n.metresAt(o.x+r*l,o.z+a*l)>-2;)l+=5;for(let c=0;c<9;c++){const h=(c-4)*13+(s()-.5)*8,u=l+(s()-.5)*30,f=o.x+r*u-a*h,d=o.z+a*u+r*h,p=new qt(Q_(ni[Math.floor(s()*ni.length)]),t);p.position.set(f,0,d),p.rotation.y=Math.atan2(r,a)+(s()-.5)*.8,this.afloat.add(p),this.surfers.push({obj:p,phase:s()*6.28})}}addPeople(t){const{hf:e,town:n,paths:s,roads:r,footprints:a}=this.ctx,o=Oe(2026),l=[],c=[],h=(F,k)=>a.some(H=>{if(Math.hypot(F-H.cx,k-H.cz)>Math.max(H.obb.w,H.obb.d))return!1;let z=!1;for(let N=0,D=H.poly.length-2;N<H.poly.length;D=N,N+=2){const Y=H.poly[N],it=H.poly[N+1],q=H.poly[D],et=H.poly[D+1];it>k!=et>k&&F<(q-Y)*(k-it)/(et-it)+Y&&(z=!z)}return z}),u=(F,k)=>!r.nearest(F,k,6.4)&&!h(F,k),f=(F,k,H,z,N,D,Y=0)=>{for(let it=0,q=0;it<z*40&&q<z;it++){const et=o()*Math.PI*2,$=Math.sqrt(o())*H,tt=F+Math.cos(et)*$,K=k+Math.sin(et)*$,ut=e.metresAt(tt,K);ut<N||ut>D||!u(tt,K)||(l.push(tt,e.yAt(tt,K),K),o()<Y&&c.push(tt+1.2,e.yAt(tt+1.2,K),K+.6),q++)}};t.surf&&f(t.surf.beach.x,t.surf.beach.z,130,60,1.5,3,.32);const[d,p]=fn(n.meta,-38.63575,145.729);f(d,p,120,34,1.5,2.4,.3);const[_,m]=fn(n.meta,-38.6356,145.7337);f(_,m,110,26,1.5,2.6,.2);const[g,S]=fn(n.meta,-38.63194,145.72681);f(g,S,55,14,0,99);const[x,M]=fn(n.meta,-38.63385,145.7285);for(const F of s){if(F.cls>3||F.flags)continue;const k=F.pts.length/3;for(let H=1;H<k;H++){const z=F.pts[H*3],N=F.pts[H*3+2];if(Math.hypot(z-x,N-M)>300||o()>.42||this.ctx.isClear(z,N))continue;const D=z-F.pts[H*3-3],Y=N-F.pts[H*3-1],it=Math.hypot(D,Y)||1,q=o()<.5?1:-1,et=F.width/2+2.3+o()*1,$=z-Y/it*et*q,tt=N+D/it*et*q;u($,tt)&&l.push($,e.yAt($,tt),tt)}}if(t.jetty){const F=t.jetty.points;for(let k=0;k<F.length-1;k++)for(let H=0;H<3;H++){const z=o();l.push(F[k][0]+(F[k+1][0]-F[k][0])*z+(o()-.5)*2,_l,F[k][1]+(F[k+1][1]-F[k][1])*z+(o()-.5)*2)}}const E=l.length/3,b=new ee;b.cyl(0,0,0,.17,.22,.85,5,G(2765632)),b.cyl(0,.85,0,.24,.2,.6,5,G(16777215),G(16777215));const v=new ee;v.blob(0,1.6,0,.14,.15,.14,5,3,G(14264711));const y=new kr({vertexColors:!0}),T=F=>(F.deleteAttribute("glow"),F),w=new Je(T(b.build()),y,E),C=new Je(T(v.build()),y,E),L=new Tt,U=[16777215,15255976,12159590,9068354];for(let F=0;F<E;F++){const k=.92+o()*.2;this.tmpQ.setFromAxisAngle(this.up,o()*6.28),this.tmpM.compose(this.tmpP.set(l[F*3],l[F*3+1],l[F*3+2]),this.tmpQ,new W(k,k,k)),w.setMatrixAt(F,this.tmpM),C.setMatrixAt(F,this.tmpM),w.setColorAt(F,L.set(fu[Math.floor(o()*fu.length)])),C.setColorAt(F,L.set(U[Math.floor(o()*U.length)]))}w.computeBoundingSphere(),C.computeBoundingSphere(),this.group.add(w,C);const P=new ee;P.cyl(0,0,0,.03,.03,2,4,G(14277081)),P.cyl(0,1.75,0,1.25,0,.5,8,G(16777215));const B=new Je(T(P.build()),y,c.length/3);for(let F=0;F<c.length/3;F++)this.tmpQ.setFromAxisAngle(new W(1,0,0),(o()-.5)*.3),B.setMatrixAt(F,this.tmpM.compose(this.tmpP.set(c[F*3],c[F*3+1],c[F*3+2]),this.tmpQ,this.one)),B.setColorAt(F,L.set([14826299,3117008,15909424,3715691,15764004,16053490][Math.floor(o()*6)]));B.castShadow=!0,B.computeBoundingSphere(),this.group.add(B)}addGulls(t){if(!t.jetty)return;const e=Oe(8),n=16;for(let r=0;r<n;r++)this.gullState.push({cx:t.jetty.head.x+(e()-.5)*90,cz:t.jetty.head.z+(e()-.5)*90,r:18+e()*55,h:_l+6+e()*16,w:(.25+e()*.3)*(e()<.5?1:-1),phase:e()*6.28});const s=new Ee;s.setAttribute("position",new Se(new Float32Array(n*18),3).setUsage(Ts)),this.gulls=new qt(s,ea(new Tn({color:16185074,side:Re}))),this.gulls.frustumCulled=!1,this.group.add(this.gulls)}updateParkedLod(t,e,n){for(const s of this.parkedSets)s.lod.update(t,e,n)}update(t,e){for(const n of this.boats)n.obj.rotation.z=Math.sin(e*.9+n.phase)*.04,n.obj.rotation.x=Math.sin(e*.7+n.phase*1.7)*.025,n.obj.position.y=n.y+Math.sin(e*1.1+n.phase)*.06;for(const n of this.dinghies){const s=n.phase+e*n.speed;n.obj.position.set(n.cx+Math.cos(s)*n.rx,-.15,n.cz+Math.sin(s)*n.rz),n.obj.rotation.y=Math.atan2(-Math.sin(s)*n.rx,Math.cos(s)*n.rz),n.obj.rotation.z=.12+Math.sin(e*.8+n.phase)*.04}for(const n of this.surfers)n.obj.position.y=-.05+Math.sin(e*.9+n.phase)*.22;if(this.kiteLines){const n=this.kiteLines.geometry.getAttribute("position");this.kites.forEach((s,r)=>{const a=Math.sin(e*s.speed*6.28+s.phase),o=Math.cos(e*s.speed*6.28+s.phase)>=0?1:-1,l=s.base.x+.65*s.reach*a,c=s.base.z+.76*s.reach*a;s.rider.position.set(l,.05,c),s.rider.rotation.y=Math.atan2(.65*o,.76*o),s.rider.rotation.z=.28;const h=e*1.3+s.phase,u=l+12+o*5+Math.sin(h)*4.5,f=c-10+Math.cos(h)*1.5,d=17+Math.sin(h*2)*2.4;s.kite.position.set(u,d,f),s.kite.lookAt(l,1.2,c),s.kite.rotateX(-Math.PI/2),n.setXYZ(r*4,l-.3,1.25,c),n.setXYZ(r*4+1,u-2.6,d-1,f),n.setXYZ(r*4+2,l-.3,1.25,c),n.setXYZ(r*4+3,u+2.6,d-1,f)}),n.needsUpdate=!0}if(this.traffic&&(this.cars.forEach((n,s)=>{var x,M;if(n.gone){this.traffic.setMatrixAt(s,this.nothing),(x=this.trafficTrim)==null||x.setMatrixAt(s,this.nothing);return}const r=n.route;n.s+=n.dir*n.speed*t,n.s>r.length&&(n.s=r.length,n.dir=-1),n.s<0&&(n.s=0,n.dir=1);let a=0,o=r.cum.length-1;for(;o-a>1;){const E=a+o>>1;r.cum[E]<=n.s?a=E:o=E}const l=(n.s-r.cum[a])/(r.cum[o]-r.cum[a]||1),c=r.pts[a*3],h=r.pts[a*3+2],u=r.pts[o*3],f=r.pts[o*3+2];let d=u-c,p=f-h;const _=Math.hypot(d,p)||1;d=d/_*n.dir,p=p/_*n.dir;const m=Math.min(r.width*.24,2),g=c+(u-c)*l+p*m,S=h+(f-h)*l-d*m;n.x=g,n.z=S,n.heading=Math.atan2(d,p),this.traffic.setMatrixAt(s,this.sit(g,S,n.heading,.36)),(M=this.trafficTrim)==null||M.setMatrixAt(s,this.tmpM)}),this.traffic.instanceMatrix.needsUpdate=!0,this.trafficTrim&&(this.trafficTrim.instanceMatrix.needsUpdate=!0)),this.gulls){const n=this.gulls.geometry.getAttribute("position");this.gullState.forEach((s,r)=>{const a=s.phase+e*s.w,o=s.cx+Math.cos(a)*s.r,l=s.cz+Math.sin(a)*s.r,c=s.h+Math.sin(a*2.3)*1.5,h=s.w>0?1:-1,u=-Math.sin(a)*h,f=Math.cos(a)*h,d=f,p=-u,_=Math.sin(e*7+s.phase*3)*.45,m=r*6;n.setXYZ(m,o+u*.35,c,l+f*.35),n.setXYZ(m+1,o-u*.3,c,l-f*.3),n.setXYZ(m+2,o+d*.85,c+_,l+p*.85),n.setXYZ(m+3,o+u*.35,c,l+f*.35),n.setXYZ(m+4,o-d*.85,c+_,l-p*.85),n.setXYZ(m+5,o-u*.3,c,l-f*.3)}),n.needsUpdate=!0}}}const ev={low:320,medium:640,high:1040,ultra:1520},Ii=new W(31,18,31),nv=`
uniform vec3 uEye;
uniform vec3 uVolume;
uniform vec2 uDrift;
uniform vec2 uSlant;
uniform float uFall;
uniform float uRain;
uniform float uShelter;
attribute vec4 aDrop;
varying float vOpacity;

void main() {
  vec3 flow = vec3(uDrift.x, -uFall, uDrift.y);
  vec3 offset = mod(position + flow - uEye + uVolume * 0.5, uVolume) - uVolume * 0.5;
  offset.y += 2.0;
  vec3 edge = abs((offset - vec3(0.0, 2.0, 0.0)) / (uVolume * 0.5));
  float outer = 1.0 - smoothstep(0.79, 0.99, max(edge.x, max(edge.y, edge.z)));
  vec3 tail = vec3(-uSlant.x, 1.0, -uSlant.y) * aDrop.x * aDrop.y;
  float distanceToEye = length(offset);
  float nearFade = smoothstep(1.3, 3.4, distanceToEye);
  float shelter = mix(1.0, smoothstep(5.0, 10.0, distanceToEye), uShelter);
  float density = 1.0 - smoothstep(uRain - 0.08, uRain + 0.08, aDrop.w);
  vOpacity = outer * nearFade * shelter * density * mix(1.0, 0.24, aDrop.y)
    * mix(0.10, 0.48, uRain) * aDrop.z;
  gl_Position = projectionMatrix * viewMatrix * vec4(uEye + offset + tail, 1.0);
}`,iv=`
varying float vOpacity;
void main() {
  gl_FragColor = vec4(0.54, 0.65, 0.76, vOpacity);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;class sv{constructor(t,e,n){Z(this,"eye",new W);Z(this,"material");Z(this,"streaks");Z(this,"wetness",{value:0});Z(this,"ultra");Z(this,"disposed",!1);Z(this,"inletRain",{value:0});this.camera=e,this.ultra=n==="ultra";const s=ev[n],r=Oe(1229870668),a=new Float32Array(s*6),o=new Float32Array(s*8);for(let c=0;c<s;c++){const h=r()*Ii.x,u=r()*Ii.y,f=r()*Ii.z,d=.25+r()*.54,p=.55+r()*.45,_=r();a.set([h,u,f,h,u,f],c*6),o.set([d,0,p,_,d,1,p,_],c*8)}const l=new Ee;l.setAttribute("position",new Se(a,3)),l.setAttribute("aDrop",new Se(o,4)),this.material=new en({uniforms:{uEye:{value:this.eye},uVolume:{value:Ii},uDrift:{value:new Pt},uSlant:{value:new Pt},uFall:{value:0},uRain:{value:0},uShelter:{value:0}},vertexShader:nv,fragmentShader:iv,transparent:!0,depthWrite:!1}),this.streaks=new kc(l,this.material),this.streaks.name="local rain streaks",this.streaks.frustumCulled=!1,this.streaks.renderOrder=4,this.streaks.visible=!1,t.add(this.streaks)}shadeAsphalt(t,e=!1){const n=t.onBeforeCompile,s=t.customProgramCacheKey();t.customProgramCacheKey=()=>s+(e?":rain-asphalt-mask":":rain-asphalt"),t.onBeforeCompile=(r,a)=>{n.call(t,r,a),r.uniforms.uRoadWetness=this.wetness,e&&(r.vertexShader=`attribute float aAsphalt;
varying float vAsphalt;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vAsphalt = aAsphalt;`));const o=e?"(uRoadWetness * vAsphalt)":"uRoadWetness";r.fragmentShader=`uniform float uRoadWetness;
`+(e?`varying float vAsphalt;
`:"")+r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= mix(1.0, 0.66, `+o+");").replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.56, `+o+");")},t.needsUpdate=!0}update(t,e,n,s=2.9,r=-1,a=!1){if(this.disposed)return;const o=Zt.clamp(t,0,1);if(this.wetness.value=Zt.clamp(e,0,1),this.inletRain.value=this.ultra?o:0,this.streaks.visible=o>.015,!this.streaks.visible)return;this.camera.getWorldPosition(this.eye);const l=this.material.uniforms,c=12.5;l.uRain.value=o,l.uShelter.value=a?1:0,l.uFall.value=n*c%Ii.y,l.uDrift.value.set(n*s%Ii.x,n*r%Ii.z),l.uSlant.value.set(s/c,r/c)}dispose(){this.disposed||(this.disposed=!0,this.wetness.value=this.inletRain.value=0,this.streaks.removeFromParent(),this.streaks.geometry.dispose(),this.material.dispose())}}const vi=(i,t,e)=>{const n=[],s=[];for(let r=0;r<i.length;r++){const a=i[r],o=i[(r+1)%i.length],l=t(a)-e,c=t(o)-e;if(l<=1e-9&&n.push(a),l>=-1e-9&&s.push(a),l<-1e-9&&c>1e-9||l>1e-9&&c<-1e-9){const h=l/(l-c),u=new Float64Array(a.length);for(let f=0;f<u.length;f++)u[f]=a[f]+(o[f]-a[f])*h;n.push(u),s.push(u)}}return[n,s]},bl=(i,t)=>{const e=[];for(let n of i){let s=1/0,r=-1/0;for(const a of n){const o=t(a);o<s&&(s=o),o>r&&(r=o)}for(let a=Math.floor(s+1e-9)+1;a<r-1e-9&&n.length>=3;a++){const[o,l]=vi(n,t,a);o.length>=3&&e.push(o),n=l}n.length>=3&&e.push(n)}return e};function El(i,t,e,n,s){const r=p=>(p[0]-i.xMin)/i.dx,a=p=>(p[2]-i.zMin)/i.dz,o=p=>r(p)+a(p),l=Math.min(r(t),r(e),r(n)),c=Math.max(r(t),r(e),r(n)),h=Math.min(a(t),a(e),a(n)),u=Math.max(a(t),a(e),a(n)),f=Math.min(o(t),o(e),o(n)),d=Math.max(o(t),o(e),o(n));if(Math.floor(l)===Math.floor(c-1e-9)&&Math.floor(h)===Math.floor(u-1e-9)&&Math.floor(f)===Math.floor(d-1e-9)){s(t,e,n);return}for(const p of bl(bl(bl([[t,e,n]],r),a),o))for(let _=1;_+1<p.length;_++)s(p[0],p[_],p[_+1])}const kn=24,Su=.08,fa=.07,rv=.35,tr=1e-8,wl=(i,t)=>i*65536+t;class av{constructor(){Z(this,"surfaces",new Map);Z(this,"index")}add(t,e=t.length){this.surfaces.set(t,e),this.index=void 0}remove(t){this.surfaces.delete(t)&&(this.index=void 0)}buildIndex(){const t=[...this.surfaces.keys()],e=[],n=new Map;for(let s=0;s<t.length;s++){const r=t[s],a=this.surfaces.get(r);for(let o=0;o+8<a;o+=9){const l=r[o],c=r[o+2],h=r[o+3],u=r[o+5],f=r[o+6],d=r[o+8];if((u-c)*(f-l)-(h-l)*(d-c)<=tr)continue;const p=e.length;e.push(s,o);for(let _=Math.floor(Math.min(l,h,f)/kn);_<=Math.floor(Math.max(l,h,f)/kn);_++)for(let m=Math.floor(Math.min(c,u,d)/kn);m<=Math.floor(Math.max(c,u,d)/kn);m++){const g=wl(_,m);let S=n.get(g);S||n.set(g,S=[]),S.push(p)}}}return{buffers:t,faces:e,cells:n}}project(t,e,n){const{buffers:s,faces:r,cells:a}=this.index??(this.index=this.buildIndex()),o=[],l=new Set,c=(n==null?void 0:n.length)??e.length/3,h=d=>{const p=(n?n[d]:d)*3;return new Float64Array([e[p],0,e[p+2]])},u=(d,p,_,m,g,S)=>{const x=(p[2]-d[2])*(_[0]-d[0])-(p[0]-d[0])*(_[2]-d[2]);Math.abs(x)<=tr||o.push(d[0],m,d[2],p[0],g,p[2],_[0],S,_[2])},f=(d,p)=>{const[_,,m]=d;let g=fa;for(const S of a.get(wl(Math.floor(_/kn),Math.floor(m/kn)))||[]){const x=yu(s[r[S]],r[S+1],_,m,!0);g=Math.max(g,x-p+Su-.01)}return g};for(let d=0;d+2<c;d+=3){const p=h(d),_=h(d+1),m=h(d+2);El(t,p,_,m,(E,b,v)=>{const y=t.yAt(E[0],E[2]),T=t.yAt(b[0],b[2]),w=t.yAt(v[0],v[2]),C=f(E,y),L=f(b,T),U=f(v,w);Math.max(C,L,U)-Math.min(C,L,U)>rv?u(E,b,v,y+fa,T+fa,w+fa):u(E,b,v,y+C,T+L,w+U)});const g=Math.min(p[0],_[0],m[0]),S=Math.max(p[0],_[0],m[0]),x=Math.min(p[2],_[2],m[2]),M=Math.max(p[2],_[2],m[2]);l.clear();for(let E=Math.floor(g/kn);E<=Math.floor(S/kn);E++)for(let b=Math.floor(x/kn);b<=Math.floor(M/kn);b++){const v=a.get(wl(E,b));if(v)for(const y of v){if(l.has(y))continue;l.add(y);const T=s[r[y]],w=r[y+1],C=T[w],L=T[w+2],U=T[w+3],P=T[w+5],B=T[w+6],F=T[w+8];if(Math.max(C,U,B)<g||Math.min(C,U,B)>S||Math.max(L,P,F)<x||Math.min(L,P,F)>M)continue;const k=ov([p,_,m],C,L,U,P,B,F);if(k.length<3)continue;const H=D=>yu(T,w,D[0],D[2],!1)+Su,z=k[0],N=H(z);for(let D=1;D+1<k.length;D++){const Y=k[D],it=k[D+1];u(z,Y,it,N,H(Y),H(it))}}}}return Float32Array.from(o)}}function yu(i,t,e,n,s){const r=i[t],a=i[t+1],o=i[t+2],l=i[t+3]-r,c=i[t+5]-o,h=i[t+6]-r,u=i[t+8]-o,f=e-r,d=n-o,p=c*h-l*u,_=(d*h-f*u)/p,m=(c*f-l*d)/p;return s&&(_<-tr||m<-tr||_+m>1+tr)?-1/0:a+_*(i[t+4]-a)+m*(i[t+7]-a)}function ov(i,t,e,n,s,r,a){const o=(c,h,u,f,d)=>(c[0]-h)*(d-u)-(c[2]-u)*(f-h);let l=vi(i,c=>o(c,t,e,n,s),0)[1];return l.length>=3&&(l=vi(l,c=>o(c,n,s,r,a),0)[1]),l.length>=3&&(l=vi(l,c=>o(c,r,a,t,e),0)[1]),l}class lv{constructor(t,e,n){this.hf=t,this.mesh=e,this.clearance=n}quad(t,e,n,s,r,a,o,l,c,h,u,f,d,p=0){this.tri(t,e,n,s,r,a,o,l,c,d,p),this.tri(t,e,n,o,l,c,h,u,f,d,p)}edgeCrosses(t,e,n,s,r,a){const o=this.hf;for(let l=0;l<3;l++){const c=l===0?t:l===1?e:t+e,h=l===0?s:l===1?r:s+r,u=Math.max(c,h);for(let f=Math.floor(Math.min(c,h))+1;f<u;f++){const d=(f-c)/(h-c),p=o.xMin+(t+(s-t)*d)*o.dx,_=o.zMin+(e+(r-e)*d)*o.dz;if(n+(a-n)*d<o.yAt(p,_)+this.clearance)return!0}}return!1}needsFitting(t,e,n,s,r,a,o,l,c){const h=this.hf;if(e<h.yAt(t,n)+this.clearance||r<h.yAt(s,a)+this.clearance||l<h.yAt(o,c)+this.clearance)return!0;const u=(t-h.xMin)/h.dx,f=(n-h.zMin)/h.dz,d=(s-h.xMin)/h.dx,p=(a-h.zMin)/h.dz,_=(o-h.xMin)/h.dx,m=(c-h.zMin)/h.dz;if(this.edgeCrosses(u,f,e,d,p,r)||this.edgeCrosses(d,p,r,_,m,l)||this.edgeCrosses(_,m,l,u,f,e))return!0;const g=(d-u)*(m-f)-(p-f)*(_-u);if(Math.abs(g)<1e-12)return!1;const S=Math.min(h.nx-1,Math.floor(Math.max(u,d,_))),x=Math.min(h.nz-1,Math.floor(Math.max(f,p,m)));for(let M=Math.max(0,Math.ceil(Math.min(f,p,m)));M<=x;M++)for(let E=Math.max(0,Math.ceil(Math.min(u,d,_)));E<=S;E++){const b=((E-u)*(m-f)-(M-f)*(_-u))/g,v=((d-u)*(M-f)-(p-f)*(E-u))/g;if(b>=0&&v>=0&&b+v<=1&&e+b*(r-e)+v*(l-e)<h.y[M*h.nx+E]+this.clearance)return!0}return!1}tri(t,e,n,s,r,a,o,l,c,h,u=0){if(!this.needsFitting(t,e,n,s,r,a,o,l,c)){this.mesh.tri(t,e,n,s,r,a,o,l,c,h,u);return}const f=d=>Math.max(d[1],this.hf.yAt(d[0],d[2])+this.clearance);El(this.hf,new Float64Array([t,e,n]),new Float64Array([s,r,a]),new Float64Array([o,l,c]),(d,p,_)=>{this.mesh.tri(d[0],f(d),d[2],p[0],f(p),p[2],_[0],f(_),_[2],h,u)})}}const bu=i=>i[0],Eu=i=>i[2],Cn=1.5,Mi=.16,pa=Math.hypot(Cn,Mi),xs=12,wu=(i,t)=>(i+2048)*8192+t+2048;class cv{constructor(t,e,n){Z(this,"bins",new Map);this.asphalt=t,this.marks=e,this.color=n}addDash(t,e,n,s,r,a){const o={x:t+Cn*s,z:n+Cn*r,dx:s,dz:r,y:e+Cn*a,grade:a,flat:!0,area:0,pieces:[]},l=wu(Math.floor(o.x/xs),Math.floor(o.z/xs));let c=this.bins.get(l);c||this.bins.set(l,c=[]),c.push(o)}tri(t,e,n,s,r,a,o,l,c,h){this.asphalt.tri(t,e,n,s,r,a,o,l,c,h);const u=Math.min(t,s,o)-pa,f=Math.max(t,s,o)+pa,d=Math.min(n,a,c)-pa,p=Math.max(n,a,c)+pa;for(let _=Math.floor(d/xs);_<=Math.floor(p/xs);_++)for(let m=Math.floor(u/xs);m<=Math.floor(f/xs);m++){const g=this.bins.get(wu(m,_));if(g)for(const S of g){if(S.x<u||S.x>f||S.z<d||S.z>p)continue;const x=(E,b,v)=>new Float64Array([(E-S.x)*S.dx+(v-S.z)*S.dz,b,-(E-S.x)*S.dz+(v-S.z)*S.dx]);let M=[x(t,e,n),x(s,r,a),x(o,l,c)];if(M=vi(M,bu,-Cn)[1],M=vi(M,bu,Cn)[0],M=vi(M,Eu,-Mi)[1],M=vi(M,Eu,Mi)[0],!(M.length<3)){S.pieces.push(M);for(let E=0;E<M.length;E++){const b=M[E],v=M[(E+1)%M.length];S.area+=(v[0]*b[2]-v[2]*b[0])/2,Math.abs(S.y+b[0]*S.grade-b[1])>.03&&(S.flat=!1)}}}}}finish(){for(const t of this.bins.values())for(const e of t){const n=s=>[e.x+s[0]*e.dx-s[2]*e.dz,s[1]+.05,e.z+s[0]*e.dz+s[2]*e.dx];if(e.flat&&Math.abs(e.area-4*Cn*Mi)<1e-4){const s=(r,a)=>n(new Float64Array([r,e.y+r*e.grade,a]));this.marks.quad(...s(-Cn,Mi),...s(Cn,Mi),...s(Cn,-Mi),...s(-Cn,-Mi),this.color)}else for(const s of e.pieces)for(let r=1;r+1<s.length;r++)this.marks.tri(...n(s[0]),...n(s[r]),...n(s[r+1]),this.color)}}}const hv=1,Tu=2,uv=[G(5198680),G(11575168),G(9072466),G(12434356)],dv=G(4474957),Au=G(15921382),Ru={polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8},fv=[.34,.3,.26,.22,.16,.15,.13,.11],Cu=new Float32Array(9);function pv(i,t){const e=[i[0]/10,i[1]/10];for(let n=2;n<i.length;n+=2){const s=i[n-2]/10,r=i[n-1]/10,a=i[n]/10,o=i[n+1]/10,l=Math.max(1,Math.ceil(Math.hypot(a-s,o-r)/t));for(let c=1;c<=l;c++)e.push(s+(a-s)*c/l,r+(o-r)*c/l)}return e}class mv{constructor(){Z(this,"cells",new Map);Z(this,"segs",[]);Z(this,"size",40)}add(t,e,n,s,r,a){const o=this.segs.length/6;this.segs.push(t,e,n,s,r,a);const l=Math.floor(Math.min(t,n)/this.size),c=Math.floor(Math.max(t,n)/this.size),h=Math.floor(Math.min(e,s)/this.size),u=Math.floor(Math.max(e,s)/this.size);for(let f=l;f<=c;f++)for(let d=h;d<=u;d++){const p=(f+512)*4096+(d+512);let _=this.cells.get(p);_||this.cells.set(p,_=[]),_.push(o)}}nearest(t,e,n){let s=null;const r=Math.ceil(n/this.size),a=Math.floor(t/this.size),o=Math.floor(e/this.size);for(let l=a-r;l<=a+r;l++)for(let c=o-r;c<=o+r;c++){const h=this.cells.get((l+512)*4096+(c+512));if(h)for(const u of h){const f=this.segs[u*6],d=this.segs[u*6+1],p=this.segs[u*6+2],_=this.segs[u*6+3],m=p-f,g=_-d,S=Math.max(0,Math.min(1,((t-f)*m+(e-d)*g)/(m*m+g*g||1))),x=f+m*S,M=d+g*S,E=Math.hypot(t-x,e-M);E<=n&&(!s||E<s.dist)&&(s={dist:E,px:x,pz:M,cls:this.segs[u*6+4],name:this.segs[u*6+5]})}}return s}}function gv(i,t,e,n){const s=new ee,r=new ee,a=new mv,o=[],l=[];for(const[x,M,E,b,v,y]of i.roads){const T=b/10,w=pv(y,x<=3?6:5),C=w.length/2;if(C<2)continue;const L=M===0&&x<=1?dv:uv[M],U=M===0?1:0,P=fv[x],B=(E&hv)!==0,F=t.yAt(w[0],w[1]),k=t.yAt(w[C*2-2],w[C*2-1]),H=new Float32Array(C);for(let $=1;$<C;$++)H[$]=H[$-1]+Math.hypot(w[$*2]-w[$*2-2],w[$*2+1]-w[$*2-1]);const z=H[C-1]||1,N=new Float32Array(C*3),D=new Float32Array(C*3),Y=new Float32Array(C*3);for(let $=0;$<C;$++){const tt=w[$*2],K=w[$*2+1],ut=Math.max($-1,0),yt=Math.min($+1,C-1);let ft=w[yt*2]-w[ut*2],Dt=w[yt*2+1]-w[ut*2+1];const Nt=Math.hypot(ft,Dt)||1;ft/=Nt,Dt/=Nt;let Ut=1;if($>0&&$<C-1){const ze=w[$*2]-w[$*2-2],Be=w[$*2+1]-w[$*2-1],ve=Math.hypot(ze,Be)||1;Ut=1/Math.max(.6,(ze*ft+Be*Dt)/ve)}const Kt=-Dt*(T/2)*Ut,Yt=ft*(T/2)*Ut,ae=B?F+(k-F)*(H[$]/z)+.6+1*Math.sin(Math.PI*H[$]/z):NaN,jt=B?ae:t.yAt(tt,K)+P,ye=B?ae:t.yAt(tt+Kt,K+Yt)+P,_e=B?ae:t.yAt(tt-Kt,K-Yt)+P;N.set([tt+Kt,ye,K+Yt],$*3),D.set([tt,jt,K],$*3),Y.set([tt-Kt,_e,K-Yt],$*3),$>0&&x<=3&&a.add(w[$*2-2],w[$*2-1],tt,K,x,v)}const it=x<=1&&!(E&Tu)&&z>20,q=it&&!B?new cv(s,r,Au):void 0;if(it){let $=0;for(let tt=4;tt<z-4;tt+=12){for(;$<C-2&&H[$+1]<tt;)$++;const K=(tt-H[$])/(H[$+1]-H[$]||1),ut=D[$*3]+(D[$*3+3]-D[$*3])*K,yt=D[$*3+1]+(D[$*3+4]-D[$*3+1])*K,ft=D[$*3+2]+(D[$*3+5]-D[$*3+2])*K;if(e!=null&&e(ut,ft))continue;let Dt=D[$*3+3]-D[$*3],Nt=D[$*3+5]-D[$*3+2];const Ut=Math.hypot(Dt,Nt)||1;Dt/=Ut,Nt/=Ut;const Kt=(D[$*3+4]-D[$*3+1])/Ut;if(q){q.addDash(ut,yt,ft,Dt,Nt,Kt);continue}const Yt=Kt*3,ae=-Nt*.16,jt=Dt*.16,ye=.05;r.quad(ut+ae,yt+ye,ft+jt,ut+Dt*3+ae,yt+Yt+ye,ft+Nt*3+jt,ut+Dt*3-ae,yt+Yt+ye,ft+Nt*3-jt,ut-ae,yt+ye,ft-jt,Au)}}const et=B?s:new lv(t,q??s,.04);for(let $=0;$<C-1;$++){const tt=$*3,K=tt+3;if(e){const ut=e(D[tt],D[tt+2]),yt=e(D[K],D[K+2]);if(ut&&yt)continue;if(ut!==yt){let ft=0,Dt=1;for(let ve=0;ve<12;ve++){const X=(ft+Dt)/2;e(D[tt]+(D[K]-D[tt])*X,D[tt+2]+(D[K+2]-D[tt+2])*X)===ut?ft=X:Dt=X}const Nt=(ft+Dt)/2;for(const ve of[N,D,Y])for(let X=0;X<3;X++)Cu[(ve===N?0:ve===D?3:6)+X]=ve[tt+X]+(ve[K+X]-ve[tt+X])*Nt;const[Ut,Kt,Yt,ae,jt,ye,_e,ze,Be]=Cu;ut?(et.quad(Ut,Kt,Yt,N[K],N[K+1],N[K+2],D[K],D[K+1],D[K+2],ae,jt,ye,L,U),et.quad(ae,jt,ye,D[K],D[K+1],D[K+2],Y[K],Y[K+1],Y[K+2],_e,ze,Be,L,U)):(et.quad(N[tt],N[tt+1],N[tt+2],Ut,Kt,Yt,ae,jt,ye,D[tt],D[tt+1],D[tt+2],L,U),et.quad(D[tt],D[tt+1],D[tt+2],ae,jt,ye,_e,ze,Be,Y[tt],Y[tt+1],Y[tt+2],L,U));continue}}if(et.quad(N[tt],N[tt+1],N[tt+2],N[K],N[K+1],N[K+2],D[K],D[K+1],D[K+2],D[tt],D[tt+1],D[tt+2],L,U),et.quad(D[tt],D[tt+1],D[tt+2],D[K],D[K+1],D[K+2],Y[K],Y[K+1],Y[K+2],Y[tt],Y[tt+1],Y[tt+2],L,U),B){const ut=G(M===2?7297604:13225162);for(const yt of[N,Y])s.quad(yt[tt],yt[tt+1],yt[tt+2],yt[K],yt[K+1],yt[K+2],yt[K],yt[K+1]+1.05,yt[K+2],yt[tt],yt[tt+1]+1.05,yt[tt+2],ut),s.quad(yt[tt],yt[tt+1]-.7,yt[tt+2],yt[K],yt[K+1]-.7,yt[K+2],yt[K],yt[K+1],yt[K+2],yt[tt],yt[tt+1],yt[tt+2],G(9276036))}}if(x<=5&&!B)for(const $ of[0,C-1]){const tt=D[$*3],K=D[$*3+1],ut=D[$*3+2];if(e!=null&&e(tt,ut))continue;const yt=16;for(let ft=0;ft<yt;ft++){const Dt=ft/yt*Math.PI*2,Nt=(ft+1)/yt*Math.PI*2,Ut=tt+Math.cos(Nt)*T/2,Kt=ut+Math.sin(Nt)*T/2,Yt=tt+Math.cos(Dt)*T/2,ae=ut+Math.sin(Dt)*T/2;et.tri(tt,K,ut,Ut,t.yAt(Ut,Kt)+P,Kt,Yt,t.yAt(Yt,ae)+P,ae,L,U)}}if(q==null||q.finish(),E&Tu){let $=0,tt=0;for(let Nt=0;Nt<C;Nt++)$+=w[Nt*2],tt+=w[Nt*2+1];$/=C,tt/=C;const K=C>>1,ut=xv(w[0],w[1],w[K*2],w[K*2+1],w[C*2-2],w[C*2-1]),yt=ut?ut.x:$,ft=ut?ut.z:tt,Dt=ut?ut.r:Math.hypot(w[0]-$,w[1]-tt);Dt>3&&Dt<40&&!(e!=null&&e(yt,ft))&&!l.some(Nt=>Math.hypot(Nt.x-yt,Nt.z-ft)<12)&&l.push({x:yt,z:ft,r:Dt,w:T})}x<=3&&o.push({cls:x,name:v>=0?i.names[v]:"",width:T,flags:E,pts:D,length:z})}const c=s.vertexCount*3,h=G(13158078),u=G(7314002),f=G(4943936);for(const x of l){const M=x.r-x.w/2-.3;if(M<1.2)continue;const E=t.yAt(x.x,x.z)+.2;s.frame(x.x,E,x.z,0),s.cyl(0,0,0,M,M,.4,14,h,u),s.blob(0,.9,0,M*.45,.8,M*.45,6,3,f,G(7181400)),s.frame()}const d=new An({vertexColors:!0,roughness:.92,metalness:0,side:Re,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),p=s.build();n&&(p.setAttribute("aAsphalt",p.getAttribute("glow")),n(d,!0));const _=new qt(Pu(p),d);_.receiveShadow=!0,_.name="roads";const m=ea(new Tn({vertexColors:!0,...Ru})),g=new qt(Pu(r.build()),m);g.name="road-markings";const S=new tn;return S.add(_,g),{group:S,index:a,paths:o,pavement:p.getAttribute("position").array,pavementEnd:c}}function Pu(i){return i.deleteAttribute("glow"),i}function xv(i,t,e,n,s,r){const a=2*(i*(n-r)+e*(r-t)+s*(t-n));if(Math.abs(a)<.001)return null;const o=i*i+t*t,l=e*e+n*n,c=s*s+r*r,h=(o*(n-r)+l*(r-t)+c*(t-n))/a,u=(o*(s-e)+l*(i-s)+c*(e-i))/a;return{x:h,z:u,r:Math.hypot(i-h,t-u)}}class _v{constructor(t,e=1){Z(this,"ratio");Z(this,"floor");Z(this,"sampleSeconds",0);Z(this,"sampleFrames",0);Z(this,"slowSeconds",0);Z(this,"smoothSeconds",0);Z(this,"retryAfter",0);Z(this,"lastRaise",-1/0);this.ceiling=t,this.ratio=t,this.floor=Math.min(t,e)}resetSampling(){this.sampleSeconds=this.sampleFrames=this.slowSeconds=this.smoothSeconds=0}update(t,e,n){if(e<=0||e>=.25)return this.resetSampling(),!1;if(this.sampleSeconds+=e,this.sampleFrames+=1,this.sampleSeconds<1)return!1;const s=this.sampleSeconds,r=this.sampleFrames/s;return this.sampleSeconds=this.sampleFrames=0,this.slowSeconds=r<n*.9?this.slowSeconds+s:0,this.slowSeconds>=2&&this.ratio>this.floor?(this.ratio=Math.max(this.floor,this.ratio*.75),this.retryAfter=t+(t-this.lastRaise<15?90:20),this.resetSampling(),!0):this.ratio>=this.ceiling||t<this.retryAfter||(this.smoothSeconds=r>=n*.97?this.smoothSeconds+s:0,this.smoothSeconds<8)?!1:(this.ratio=Math.min(this.ceiling,this.ratio/.75),this.lastRaise=t,this.resetSampling(),!0)}}const er=-36,Tl=170,vv=`
float invHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float invNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(invHash(i), invHash(i + vec2(1.0, 0.0)), f.x), mix(invHash(i + vec2(0.0, 1.0)), invHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
`,Al=2;function Mv(){const i=new Fs(new Uint8Array([128,128,128,255]),1,1);return i.needsUpdate=!0,{fallback:i,maps:Array.from({length:Al},()=>({value:i})),rects:Array.from({length:Al},()=>({value:new de(0,0,1,0)}))}}function Sv({pos:i,nor:t,uv:e,idx:n}){const s=new Ee;return s.setAttribute("position",new Se(i,3)),s.setAttribute("normal",new Se(t,3)),s.setAttribute("uv",new Se(e,2)),s.setIndex(new Se(n,1)),s.computeBoundingSphere(),s}function yv(i,t,e,n,s){const r=new An({map:e,roughness:.96,metalness:0});r.onBeforeCompile=o=>{o.uniforms.uTide=n;for(let l=0;l<Al;l++)o.uniforms["uDetail"+l]=s.maps[l],o.uniforms["uDetailRect"+l]=s.rects[l];o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform float uTide;
uniform sampler2D uDetail0;
uniform vec4 uDetailRect0;
uniform sampler2D uDetail1;
uniform vec4 uDetailRect1;
${vv}`).replace("#include <map_fragment>",`#include <map_fragment>
        {
          float camDist = length(cameraPosition - vWPos);
          float nearFade = 1.0 - smoothstep(300.0, 1600.0, camDist);
          #ifdef USE_MAP
          {
            // The ground's picture is about two metres to the pixel, so up close it is a blur. Near the camera its
            // edges are sharpened (against the average of the pixels around) and frayed with fine noise, so where
            // grass meets a path or a car park there is a crisp, uneven line instead of a soft smear.
            float close = 1.0 - smoothstep(70.0, 420.0, camDist);
            if (close > 0.0) {
              vec2 px = 1.0 / vec2(textureSize(map, 0));
              vec2 fray = (vec2(invNoise(vWPos.xz * 0.9), invNoise(vWPos.xz * 0.9 + 37.0)) - 0.5) * px * 1.2;
              vec2 uv = vMapUv + fray * close;
              vec3 here = texture2D(map, uv).rgb;
              vec3 e = texture2D(map, uv + px * vec2(1.6, 0.0)).rgb, w = texture2D(map, uv - px * vec2(1.6, 0.0)).rgb;
              vec3 n = texture2D(map, uv + px * vec2(0.0, 1.6)).rgb, t = texture2D(map, uv - px * vec2(0.0, 1.6)).rgb;
              vec3 around = (e + w + n + t) * 0.25;
              // (never past the lightest or darkest of the colours around: no dark or bright fringes)
              vec3 crisp = clamp(here + (here - around) * 1.6, min(here, min(min(e, w), min(n, t))), max(here, max(max(e, w), max(n, t))));
              diffuseColor.rgb = mix(diffuseColor.rgb, crisp, close);
            }
          }
          #endif
          {
            // a close-up picture of this square of the map, where there is one, faded in over 25 m at its edge
            vec2 d = (vWPos.xz - uDetailRect0.xy) * uDetailRect0.z;
            float edge = min(min(d.x, 1.0 - d.x), min(d.y, 1.0 - d.y)) / (25.0 * uDetailRect0.z);
            vec3 sharp = texture2D(uDetail0, vec2(d.x, 1.0 - d.y)).rgb;
            diffuseColor.rgb = mix(diffuseColor.rgb, sharp, uDetailRect0.w * clamp(edge, 0.0, 1.0));
          }
          {
            // a close-up picture of this square of the map, where there is one, faded in over 25 m at its edge
            vec2 d = (vWPos.xz - uDetailRect1.xy) * uDetailRect1.z;
            float edge = min(min(d.x, 1.0 - d.x), min(d.y, 1.0 - d.y)) / (25.0 * uDetailRect1.z);
            vec3 sharp = texture2D(uDetail1, vec2(d.x, 1.0 - d.y)).rgb;
            diffuseColor.rgb = mix(diffuseColor.rgb, sharp, uDetailRect1.w * clamp(edge, 0.0, 1.0));
          }
          float grain = invNoise(vWPos.xz * 0.85) * 0.55 + invNoise(vWPos.xz * 0.21) * 0.45;
          diffuseColor.rgb *= mix(1.0, 0.84 + 0.32 * grain, nearFade);
          // and a finer grain underfoot, so grass and gravel have some texture when you stand on them
          float fine = invNoise(vWPos.xz * 5.5) * 0.6 + invNoise(vWPos.xz * 17.0) * 0.4;
          diffuseColor.rgb *= mix(1.0, 0.88 + 0.24 * fine, 1.0 - smoothstep(25.0, 140.0, camDist));
          float above = vWPos.y / ${Gn.toFixed(2)} - uTide;
          float wet = smoothstep(0.45, 0.03, above);
          diffuseColor.rgb *= mix(1.0, 0.76, wet);
        }`)},r.customProgramCacheKey=()=>"inverloch-terrain-3";const a=new tn;for(const o of t){const l=new qt(Sv(o),r);l.receiveShadow=!0,l.name="terrain",a.add(l)}return a.add(Ev(i),wv(i)),a}function bv(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function Ev(i){const t=bv(i),e=t.length,n=[],s=[],r=[],a=new Tt(9074780),o=new Tt(6180669),l=new Tt(3813673),c=[[0,a,o],[1,o,l]];for(let f=0;f<e;f++){const[d,p]=t[f],[_,m]=t[(f+1)%e],g=i.yAt(d,p),S=i.yAt(_,m),x=_-d,M=m-p,E=Math.hypot(x,M)||1,b=-M/E*-1,v=x/E*-1;for(const[y,T,w]of c){const L=y===0?g:g-6,U=y===0?g-6:er,P=y===0?S:S-6,B=y===0?S-6:er;n.push(d,L,p,_,P,m,_,B,m,d,L,p,_,B,m,d,U,p);for(const F of[T,T,w,T,w,w])s.push(F.r,F.g,F.b);for(let F=0;F<6;F++)r.push(b,0,v)}}const h=new Ee;h.setAttribute("position",new fe(n,3)),h.setAttribute("normal",new fe(r,3)),h.setAttribute("color",new fe(s,3));const u=new qt(h,new An({vertexColors:!0,roughness:1,side:Re}));return u.name="skirt",u}function wv(i){const t=new tn,e=i.xMax-i.xMin+Tl*2,n=i.zMax-i.zMin+Tl*2,s=190,r=(i.xMin+i.xMax)/2,a=(i.zMin+i.zMax)/2,o=new qt(new Ci(e,s,n),new An({color:1779245,roughness:.75,metalness:.1}));o.position.set(r,er-s/2,a),o.receiveShadow=!0,t.add(o);const l=document.createElement("canvas");l.width=2048,l.height=160;const c=l.getContext("2d");c.fillStyle="#1b262d",c.fillRect(0,0,l.width,l.height),c.fillStyle="#e9d9a6",c.textBaseline="middle",c.font="600 78px 'Space Grotesk', system-ui, sans-serif",c.fillText("INVERLOCH",40,84);const h=c.measureText("INVERLOCH").width;c.fillStyle="#9fb4bd",c.font="400 42px 'Space Grotesk', system-ui, sans-serif",c.fillText("Bass Coast, Victoria   ·   38.63° S  145.73° E   ·   Anderson Inlet & Bass Strait",40+h+46,88);const u=new ko(l);u.colorSpace=Pe,u.anisotropy=8;const f=1700,d=new qt(new Fn(f,f*(l.height/l.width)),new Tn({map:u,toneMapped:!1}));d.position.set(r-e/2+f/2+110,er-s/2,a+n/2+.6),t.add(d);const p=document.createElement("canvas");p.width=p.height=256;const _=p.getContext("2d");_.fillStyle="#e9d9a6",_.beginPath(),_.moveTo(128,18),_.lineTo(176,150),_.lineTo(128,122),_.lineTo(80,150),_.closePath(),_.fill(),_.font="700 86px 'Space Grotesk', system-ui, sans-serif",_.textAlign="center",_.fillText("N",128,240);const m=new ko(p);m.colorSpace=Pe;const g=new qt(new Fn(130,130),new Tn({map:m,transparent:!0,toneMapped:!1}));return g.rotation.x=-Math.PI/2,g.position.set(i.xMax+Tl/2,er+.6,i.zMin+120),t.add(g),t}const Lu=[[-.375,-.125],[.125,-.375],[.375,.125],[-.125,.375]],Tv=4e3,Av=12e3;class Rv{constructor(t,e){Z(this,"size",new Pt);Z(this,"screen",new Ec);Z(this,"screenCamera",new Qo);Z(this,"blend",new en({depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{previous:{value:null},currentFrame:{value:null},weight:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
    `,fragmentShader:`
      varying vec2 vUv;
      uniform sampler2D previous, currentFrame;
      uniform float weight;
      void main() {
        vec4 history = sRGBTransferEOTF(texture2D(previous, vUv));
        vec4 current = sRGBTransferEOTF(texture2D(currentFrame, vUv));
        gl_FragColor = sRGBTransferOETF(mix(history, current, weight));
      }
    `}));Z(this,"quad",new qt(new Fn(2,2),this.blend));Z(this,"history");Z(this,"sample");Z(this,"capture");this.renderer=t,this.onFinish=e,this.quad.frustumCulled=!1,this.screen.add(this.quad)}get pending(){return!!this.capture&&!this.capture.encoding}start(){return this.capture?Promise.reject(new Error("An antialiased photo is already being captured.")):new Promise((t,e)=>{const n=this.capture={resolve:t,reject:e,deadline:performance.now()+Av,samples:0,bestSamples:0,encoding:!1};this.armTimeout(n)})}draw(t,e,n){var o,l;const s=this.capture;if(!s||s.encoding)return!1;this.renderer.getDrawingBufferSize(this.size);const{x:r,y:a}=this.size;(((o=this.history)==null?void 0:o.image.width)!==r||((l=this.history)==null?void 0:l.image.height)!==a)&&(this.releaseTextures(),this.history=new Hc(r,a),this.sample=new Hc(r,a),this.blend.uniforms.previous.value=this.history,this.blend.uniforms.currentFrame.value=this.sample,n=!0),n&&(s.samples=0);try{return this.drawSample(t,e,s.samples),s.samples++,s.samples===Lu.length?this.encode(s):(this.renderer.copyFramebufferToTexture(this.history),s.samples>s.bestSamples&&(s.bestSamples=s.samples,this.armTimeout(s))),!0}catch{return this.cancel("The browser could not capture an antialiased photo."),!1}}drawSample(t,e,n){const[s,r]=Lu[n],a=e.projectionMatrix.elements,o=a[8],l=a[9];a[8]+=2*s/this.size.x,a[9]+=2*r/this.size.y,e.projectionMatrixInverse.copy(e.projectionMatrix).invert();const c=this.renderer.shadowMap.autoUpdate;n>0&&(this.renderer.shadowMap.autoUpdate=!1);try{this.renderer.render(t,e)}finally{a[8]=o,a[9]=l,e.projectionMatrixInverse.copy(e.projectionMatrix).invert(),this.renderer.shadowMap.autoUpdate=c}n>0&&(this.renderer.copyFramebufferToTexture(this.sample),this.blend.uniforms.weight.value=1/(n+1),this.renderer.render(this.screen,this.screenCamera))}encode(t){t.encoding=!0,this.armTimeout(t),this.releaseTextures(),this.onFinish(),this.renderer.domElement.toBlob(e=>{this.finish(t)&&(e?t.resolve(e):t.reject(new Error("The browser did not write the antialiased PNG.")))},"image/png")}armTimeout(t){window.clearTimeout(t.timeout);const e=Math.min(Tv,Math.max(0,t.deadline-performance.now())),n=t.encoding?"The browser did not finish writing the antialiased PNG.":"The view did not stay still long enough to save an antialiased photo.";t.timeout=window.setTimeout(()=>this.cancel(n),e)}cancel(t){const e=this.capture;!e||!this.finish(e)||e.reject(new Error(t))}finish(t){return this.capture!==t?!1:(window.clearTimeout(t.timeout),this.capture=void 0,t.encoding||(this.releaseTextures(),this.onFinish()),!0)}releaseTextures(){var t,e;(t=this.history)==null||t.dispose(),(e=this.sample)==null||e.dispose(),this.history=this.sample=void 0,this.blend.uniforms.previous.value=null,this.blend.uniforms.currentFrame.value=null}dispose(){this.cancel("The Inverloch view was closed before saving the photo."),this.quad.geometry.dispose(),this.blend.dispose()}}function ma(i,t,e,n,s,r,a,o,l,c){const h=new qo(1,0),u=h.getAttribute("position"),f=[];for(let d=0;d<u.count;d++){const p=u.getX(d),_=u.getY(d),m=u.getZ(d),g=Math.sin(p*12.9898+_*78.233+m*37.719+o*4.1)*43758.5453,S=.8+(g-Math.floor(g))*.42;f.push([t+p*s*S,e+_*r*(_<0?.75:S),n+m*a*S])}for(let d=0;d<f.length;d+=3){const[p,_,m]=[f[d],f[d+1],f[d+2]],g=Zt.clamp(((p[1]+_[1]+m[1])/3-(e-r))/(2*r),0,1);i.tri(p[0],p[1],p[2],_[0],_[1],_[2],m[0],m[1],m[2],Zs(l,c,g))}h.dispose()}function Si(i){const t=i.build();return t.deleteAttribute("glow"),t}function Cv(){const i=[];let t=new ee;return ma(t,0,.44,0,.82,.56,.82,1,G(3098152),G(7507285)),i.push(Si(t)),t=new ee,t.cyl(0,0,0,.04,.026,.56,4,G(11905429)),ma(t,0,.72,0,.36,.3,.36,2,G(4151352),G(9349240)),ma(t,.17,.52,.1,.24,.19,.24,3,G(3887925),G(8362603)),i.push(Si(t)),t=new ee,t.cyl(0,0,0,.055,.04,.4,4,G(7297608)),ma(t,0,.64,0,.46,.38,.46,4,G(3695150),G(9091170)),i.push(Si(t)),t=new ee,t.cyl(0,0,0,.035,.03,.16,4,G(5916728)),t.cyl(0,.12,0,.23,.11,.42,6,G(2506539)),t.cyl(0,.5,0,.15,0,.5,6,G(4020796)),i.push(Si(t)),i}function Du(i){const t=[],e=i?5:7;let n=new ee;return n.blob(0,.48,0,.81,.52,.81,e,2,G(4018735),G(7507285)),t.push(Si(n)),n=new ee,i||(n.cyl(0,0,0,.04,.026,.56,3,G(11905429)),n.blob(.17,.52,.1,.24,.19,.24,4,2,G(3887925),G(8362603))),n.blob(i?.05:0,.72,0,i?.39:.36,.3,.36,e,2,G(4546110),G(9349240)),t.push(Si(n)),n=new ee,i||n.cyl(0,0,0,.055,.04,.4,3,G(7297608)),n.blob(0,.64,0,.46,.38,.46,e,2,G(3695150),G(9091170)),t.push(Si(n)),n=new ee,i?n.cyl(0,.15,0,.23,0,.85,e,G(4020796)):(n.cyl(0,.12,0,.23,.11,.42,4,G(2506539)),n.cyl(0,.5,0,.15,0,.5,5,G(4020796))),t.push(Si(n)),t}function Pv(i,t,e,n=()=>!1){const s=new tn;s.name="trees";const r=[Cv(),Du(!1),Du(!0)],a=[],o=new kr({vertexColors:!0}),l=650,c=new Map,h=i.trees,u=Oe(88);for(let x=0;x<h.length;x+=Wx){if(e<1&&u()>e||n(h[x]/4,h[x+1]/4))continue;const E=`${h[x+2]>>8}:${Math.floor(h[x]/4/l)}:${Math.floor(h[x+1]/4/l)}`;let b=c.get(E);b||c.set(E,b=[]),b.push(x)}const f=new ne,d=new Sn,p=new W,_=new W,m=new W(0,1,0),g=new Tt;let S=0;for(const[x,M]of c){const E=Number(x.split(":")[0]),b=r.map((v,y)=>{const T=new Je(v[E],o,M.length);return T.name=["tree-near","tree-mid","tree-far"][y],T});M.forEach((v,y)=>{const T=h[v]/4,w=h[v+1]/4,C=(h[v+2]&255)/10,L=Oe(v*2654435761+11);_.set(T,t.yAt(T,w)-.15,w),d.setFromAxisAngle(m,L()*Math.PI*2);const U=.85+L()*.35;p.set(C*U,C,C*(.85+L()*.35)),f.compose(_,d,p);const P=.8+L()*.34;g.setRGB(P*(.94+L()*.14),P,P*(.9+L()*.12));for(const B of b)B.setMatrixAt(y,f),B.setColorAt(y,g)}),a.push(new uu(b.map(v=>[v]),s)),S+=M.length}return{group:s,count:S,updateLod(x,M,E){for(const b of a)b.update(x,M,E)}}}const Lv=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Dv=`
uniform sampler2D tField;   // r = sea bed / ground height (m), g = open-ocean exposure
uniform vec2 uSize;
uniform float uTide;
uniform float uTime;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uShallow;
uniform vec3 uDeep;
uniform vec3 uSky;
uniform float uFoam;
#ifdef RAIN_RIPPLES
uniform float uInletRain;
#endif
varying vec3 vW;

float wHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float wNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(wHash(i), wHash(i + vec2(1.0, 0.0)), f.x), mix(wHash(i + vec2(0.0, 1.0)), wHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
// wind chop: several octaves of drifting noise, each faded out before it can alias
float chopHeight(vec2 p, float pix) {
  float h = 0.0;
  h += wNoise(p / 2.4 + vec2(uTime * 0.42, uTime * 0.27)) * 0.085 * (1.0 - smoothstep(0.22, 0.6, pix / 2.4));
  h += wNoise(p / 6.1 + vec2(-uTime * 0.25, uTime * 0.33)) * 0.20 * (1.0 - smoothstep(0.22, 0.6, pix / 6.1));
  h += wNoise(p / 16.0 + vec2(uTime * 0.14, -uTime * 0.19)) * 0.46 * (1.0 - smoothstep(0.22, 0.6, pix / 16.0));
  h += wNoise(p / 47.0 + vec2(uTime * 0.07, uTime * 0.05)) * 1.05 * (1.0 - smoothstep(0.22, 0.6, pix / 47.0));
  return h;
}
vec2 swell(vec2 p, vec2 dir, float wavelength, float speed, float slope, float pix) {
  float k = 6.2831853 / wavelength;
  float fade = 1.0 - smoothstep(0.18, 0.5, pix / wavelength);
  return dir * (cos(dot(dir, p) * k + uTime * speed * k) * slope * fade);
}

#ifdef RAIN_RIPPLES
// One seeded impact per metre tile. The ring dies before reaching a tile edge.
vec2 inletImpact(vec2 p, float pix) {
  vec2 tile = floor(p);
  float phase = uTime * 1.65 + wHash(tile) * 11.0;
  float life = fract(phase);
  vec2 key = tile + floor(phase) * vec2(19.5, 7.5);
  float chance = wHash(key + 31.7);
  vec2 centre = 0.5 + (vec2(wHash(key), wHash(key + 51.4)) - 0.5) * 0.29;
  vec2 delta = fract(p) - centre;
  float radius = length(delta);
  float ring = radius - 0.29 * life;
  float envelope = smoothstep(0.02, 0.14, life) * (1.0 - smoothstep(0.5, 1.0, life));
  float width = max(0.025, pix * 0.95);
  float slope = sin(ring * 57.0) * (1.0 - smoothstep(width, width * 2.0, abs(ring)));
  float density = 1.0 - smoothstep(uInletRain - 0.08, uInletRain + 0.08, chance);
  return delta / max(radius, 0.002) * (slope * envelope * density);
}
#endif

void main() {
  vec2 uv = (vW.xz + uSize * 0.5) / uSize;
  vec2 field = texture2D(tField, uv).rg;
  float depth = uTide - field.r;
  if (depth < -0.03) discard;
  float expo = field.g;
  vec2 p = vW.xz;
  float pix = max(fwidth(p.x), fwidth(p.y));

  float chop = mix(0.6, 1.2, expo);
  float e = max(0.45, pix);
  float h0 = chopHeight(p, pix);
  vec2 g = vec2(chopHeight(p + vec2(e, 0.0), pix) - h0, chopHeight(p + vec2(0.0, e), pix) - h0) / e * chop;
  // long ocean swell, only on the open coast
  g += swell(p, normalize(vec2(0.25, -0.97)), 38.0, 2.4, 0.03 * expo, pix);
  g += swell(p, normalize(vec2(-0.2, -0.98)), 21.0, 1.8, 0.022 * expo, pix);
  #ifdef RAIN_RIPPLES
  if (uInletRain > 0.015 && expo < 0.65 && pix < 0.11) {
    float shelteredWater = (1.0 - smoothstep(0.20, 0.65, expo)) * smoothstep(0.03, 0.20, depth);
    float visibleRing = 1.0 - smoothstep(0.035, 0.11, pix);
    g += inletImpact(p, pix) * (0.23 * uInletRain * shelteredWater * visibleRing);
  }
  #endif
  vec3 n = normalize(vec3(-g.x, 1.0, -g.y));
  vec3 V = normalize(cameraPosition - vW);

  // body colour: sand shows through the shallows, channels go deep green-blue
  float k = 1.0 - exp(-depth * 0.5);
  vec3 col = mix(uShallow, uDeep, k);
  float patches = wNoise(p * 0.004 + uTime * 0.01) * 0.5 + wNoise(p * 0.0011) * 0.5;
  col *= 0.93 + 0.14 * patches;
  float alpha = (0.26 + 0.70 * (1.0 - exp(-depth * 1.15))) * smoothstep(-0.03, 0.06, depth);

  float fres = 0.03 + 0.97 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
  col = mix(col, uSky, fres * 0.7);
  alpha = max(alpha, fres * 0.75 * smoothstep(0.0, 0.2, depth));

  vec3 H = normalize(V + uSunDir);
  float ndh = max(dot(n, H), 0.0);
  col += uSunColor * (pow(ndh, 140.0) * 0.75 + pow(ndh, 18.0) * 0.035);

  // surf: a few lines of white water rolling in over the open-coast shallows
  float breakup = wNoise(p * 0.05 + vec2(uTime * 0.05, 0.0));
  float phase = depth * 9.0 + uTime * 0.7 + breakup * 3.2;
  float crisp = 1.0 - smoothstep(0.7, 2.0, fwidth(phase));
  float zone = smoothstep(1.7, 0.5, depth) * smoothstep(0.03, 0.25, depth);
  float band = pow(max(sin(phase), 0.0), 9.0);
  float surf = mix(0.14, band, crisp) * zone * expo * expo * (0.3 + 0.7 * breakup);
  float lace = smoothstep(0.16, 0.0, depth) * (0.35 + 0.65 * wNoise(p * 0.6 + uTime * 0.3)) * mix(0.45, 1.0, expo);
  float foam = clamp(max(surf, lace) * uFoam, 0.0, 1.0);
  col = mix(col, vec3(0.97, 0.98, 0.98) * (0.35 + 0.65 * uFoam), foam);
  alpha = max(alpha, foam * 0.92);

  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function Iv(i,t,e){const n=i.w*i.h,s=new Uint16Array(n*2);for(let p=0;p<n;p++)s[p*2]=Tc.toHalfFloat(i.raw[p]),s[p*2+1]=Tc.toHalfFloat(i.exposure[p]);const r=new Fs(s,i.w,i.h,ci,vn);r.minFilter=r.magFilter=Xe,r.wrapS=r.wrapT=Ln,r.needsUpdate=!0;const a={tField:{value:r},uSize:{value:new Pt(i.sizeX,i.sizeZ)},uTide:t,uTime:{value:0},uSunDir:{value:new W(.4,.8,.3).normalize()},uSunColor:{value:new Tt(16773848)},uShallow:{value:new Tt(7129789)},uDeep:{value:new Tt(937848)},uSky:{value:new Tt(12573938)},uFoam:{value:1}};e&&(a.uInletRain=e);const o=new en({uniforms:a,vertexShader:Lv,fragmentShader:Dv,transparent:!0,depthWrite:!1,defines:e?{RAIN_RIPPLES:1}:{}}),l=new Fn(i.xMax-i.xMin,i.zMax-i.zMin);l.rotateX(-Math.PI/2);const c=new qt(l,o);c.position.set((i.xMin+i.xMax)/2,t.value*Gn,(i.zMin+i.zMax)/2),c.renderOrder=2,c.name="water";const h=new qt(new Ee,new Tn({color:1929103,transparent:!0,opacity:.8,side:Re,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));h.renderOrder=1,h.name="water-edge";const u=[];for(let p=0;p<i.nx;p++)u.push([i.xMin+p*i.dx,i.zMin]);for(let p=1;p<i.nz;p++)u.push([i.xMax,i.zMin+p*i.dz]);for(let p=i.nx-2;p>=0;p--)u.push([i.xMin+p*i.dx,i.zMax]);for(let p=i.nz-2;p>=1;p--)u.push([i.xMin,i.zMin+p*i.dz]);const f=u.map(([p,_])=>i.yAt(p,_)),d=p=>{t.value=p;const _=p*Gn;c.position.y=_;const m=[],g=u.length;for(let x=0;x<g;x++){const M=(x+1)%g,E=f[x],b=f[M];if(E>=_&&b>=_)continue;const[v,y]=u[x],[T,w]=u[M],C=Math.min(E,_),L=Math.min(b,_);m.push(v,_,y,T,_,w,T,L,w,v,_,y,T,L,w,v,C,y)}h.geometry.dispose();const S=new Ee;S.setAttribute("position",new fe(m,3)),h.geometry=S};return d(t.value),{mesh:c,skirt:h,uniforms:a,setTide:d}}const Nv="detail-abeckett-ultra-v1.json",Rl=-38.63351,Iu=145.72774,Uv=111320*Math.cos(Rl*Math.PI/180);class Fv{constructor(t,e,n,s,r){Z(this,"group");Z(this,"daylight",{value:1});Z(this,"request");Z(this,"retryAt",0);Z(this,"origin");Z(this,"sx");Z(this,"sz");this.scene=t,this.manifest=e,this.ground=s,this.redraw=r,this.origin=n(Rl,Iu);const a=n(Rl-100/110540,Iu+100/Uv);this.sx=(a[0]-this.origin[0])/100,this.sz=(a[1]-this.origin[1])/100}update(t,e){this.daylight.value=Math.min(1,.08+e*.3);const n=this.origin[0]+22*this.sx,s=this.origin[1]+37*this.sz,r=Math.hypot(t.x-n,t.y-this.ground(n,s),t.z-s);if(this.group)this.group.visible=r<(this.group.visible?155:130);else if(r>220&&this.request)this.request.abort(),this.request=void 0;else if(r<155&&!this.request&&performance.now()>=this.retryAt){const a=this.request=new AbortController;this.load(a)}}async load(t){try{const e=new URL(Nv,new URL(this.manifest,document.baseURI)),n=await fetch(e,{signal:t.signal});if(!n.ok)throw new Error(String(n.status));const s=await n.json();if(t.signal.aborted)return;const r=this.build(s);this.group=r,this.scene.add(r),this.redraw()}catch{t.signal.aborted||(this.retryAt=performance.now()+3e4)}finally{this.request===t&&(this.request=void 0)}}build(t){const e=new ee,n=new ee,s=new ee,r=G(6842465),a=G(10196618),o=G(3883588),l=G(12039851),c=G(16777215);for(const[f,d,p,_,m,g,S]of t.fronts){const x=Math.hypot(p-f,_-d),M=Math.atan2(m,g);e.frame(f,0,d,M),n.frame(f,0,d,M);const E=w=>3.15+(S?.24*(1-w/3.2):0);for(const w of[.32,1.58,2.97]){const C=E(w);e.box(.05,C-.09,w-.045,x-.05,C,w+.045,r)}const b=Math.max(2,Math.round(x/1.25));for(let w=0;w<=b;w++){const C=.095+w*(x-.19)/b;e.quad(C,E(.22)-.06,.22,C,E(3.05)-.06,3.05,C+.07,E(3.05)-.06,3.05,C+.07,E(.22)-.06,.22,a)}e.box(.055,3.045,3.14,x-.055,3.105,3.3,r);const v=x-1.7,y=Math.max(2,Math.round((x-1.4)/2.1)),T=S?.22:.34;for(let w=0;w<y;w++){const C=.18+v*w/y+.055,L=.18+v*(w+1)/y-.055;n.quad(C,.57,T,L,.57,T,L,2.72,T,C,2.72,T,c),e.box(C-.035,.51,T-.045,L+.035,.56,T+.04,o),e.box(C-.035,2.25,T-.025,L+.035,2.28,T+.02,l)}e.box(x-1.17,.93,T+.05,x-1.135,1.35,T+.085,l),e.box(x-1.28,.13,.15,x-.2,.17,.42,a)}for(const[f,d,p,_]of t.trees){const m=Oe(_+431),g=[5466952,7701590,8819806,6781777].map(G);s.frame(f,0,d);for(let S=0;S<90;S++){const x=m()*Math.PI*2,M=(1.05+m()*2.25)*p,E=M*Math.sin(x),b=M*Math.cos(x),v=(6.55+1.6*m()-.35*M)*p,y=(.11+.22*m())*p,T=(.16+.28*m())*p,w=g[S%4];s.tri(E-y,v+T,b,E+y,v+.42*T,b+.1,E,v-T,b+.18,w)}}const h=new tn;h.name="A'Beckett Street close detail";const u=(f,d,p)=>{const _=f.build(),m=_.getAttribute("position");for(let S=0;S<m.count;S++){const x=this.origin[0]+m.getX(S)*this.sx,M=this.origin[1]+m.getZ(S)*this.sz;m.setXYZ(S,x,this.ground(x,M)+.08+m.getY(S),M)}_.deleteAttribute("glow"),_.computeBoundingSphere();const g=new qt(_,d);g.castShadow=p,g.receiveShadow=p,h.add(g)};return u(e,new An({vertexColors:!0,roughness:.73,metalness:.1,side:Re}),!0),u(s,new kr({vertexColors:!0,side:Re}),!0),u(n,new en({uniforms:{daylight:this.daylight},transparent:!0,depthWrite:!1,vertexShader:`varying vec3 world, facing;
        void main(){vec4 p=modelMatrix*vec4(position,1.);world=p.xyz;facing=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*p;}`,fragmentShader:`varying vec3 world, facing; uniform float daylight;
        void main(){vec3 eye=normalize(cameraPosition-world),n=normalize(facing),r=reflect(-eye,n);
          float sky=smoothstep(-.09,.27,r.y),f=pow(1.-clamp(dot(eye,n),0.,1.),3.);
          gl_FragColor=vec4(daylight*mix(vec3(.13,.18,.15),vec3(.54,.68,.78),sky),.045+.19*f+.085*sky);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),!1),h}dispose(){var t;(t=this.request)==null||t.abort()}}const Nu=-.9,Uu=1.3,Fu=.2,_s={x:260,z:150,dist:3900,polar:55,azimuth:16},Ov={ultra:{step:1,trees:1,shadow:4096,pixelRatio:2},high:{step:1,trees:1,shadow:4096,pixelRatio:2},medium:{step:2,trees:.6,shadow:2048,pixelRatio:1.3},low:{step:2,trees:.35,shadow:0,pixelRatio:1}},zv={ultra:{cars:[200,400,1100],trees:[260,770,4e3]},high:{cars:[170,340,1050],trees:[235,710,3800]},medium:{cars:[120,270,820],trees:[160,530,2850]},low:{cars:[85,190,600],trees:[100,380,2200]}},Bv=()=>new Promise(i=>requestAnimationFrame(()=>i()));function Gv(i,t){const n=t.positions,s=t.normals,r=t.colors,a=t.uvs,o=t.indices,l=o?o.length:n.length/3,c=new ne().fromArray(Array.from(t.matrix)),h=new Bt().getNormalMatrix(c),u=new W,f=x=>{const M=o?o[x]:x,E=new Float64Array(11);return u.set(n[M*3],n[M*3+1],n[M*3+2]).applyMatrix4(c),E[0]=u.x,E[1]=u.y,E[2]=u.z,s&&(u.set(s[M*3],s[M*3+1],s[M*3+2]).applyMatrix3(h).normalize(),E[3]=u.x,E[4]=u.y,E[5]=u.z),r&&(E[6]=r[M*3],E[7]=r[M*3+1],E[8]=r[M*3+2]),a&&(E[9]=a[M*2],E[10]=a[M*2+1]),E},d=[],p=[],_=[],m=[],g=x=>{d.push(x[0],x[1]+i.yAt(x[0],x[2]),x[2]),s&&p.push(x[3],x[4],x[5]),r&&_.push(x[6],x[7],x[8]),a&&m.push(x[9],x[10])},S=(x,M,E)=>{g(x),g(M),g(E)};for(let x=0;x+2<l;x+=3){const M=f(x),E=f(x+1),b=f(x+2);El(i,M,E,b,S)}return{positions:new Float32Array(d),normals:s?new Float32Array(p):void 0,colors:r?new Float32Array(_):void 0,uvs:a?new Float32Array(m):void 0}}function kv(i,t,e){let n=0;for(let s=0;s<i.length;s++){const r=i[s],a=i[(s+1)%i.length],o=(a[0]-r[0])*(e-r[1])-(a[1]-r[1])*(t-r[0]);if(o!==0){if(n===0)n=Math.sign(o);else if(Math.sign(o)!==n)return!1}}return!0}const Hv=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class Vv{constructor(t,e,n,s){Z(this,"renderer");Z(this,"scene",new Ec);Z(this,"camera",new Rn(38,1,5,9e4));Z(this,"controls");Z(this,"atmosphere");Z(this,"clouds");Z(this,"hasWeatherTime",!1);Z(this,"weather",new V_);Z(this,"showers");Z(this,"storm");Z(this,"water");Z(this,"coastalHaze");Z(this,"stillPhoto");Z(this,"onPhotoVisibilityChange",()=>{var t;document.hidden&&((t=this.stillPhoto)==null||t.cancel("Keep the Inverloch view visible while saving the photo."))});Z(this,"hf");Z(this,"life");Z(this,"trees");Z(this,"solid");Z(this,"designedWalls",[]);Z(this,"labels");Z(this,"places",[]);Z(this,"tide",{value:Fu});Z(this,"raf",0);Z(this,"last",0);Z(this,"time",0);Z(this,"dirty",!0);Z(this,"ultraStreet");Z(this,"animating",!0);Z(this,"disposed",!1);Z(this,"abort",new AbortController);Z(this,"worker");Z(this,"detailStreaming");Z(this,"resizeObserver");Z(this,"flight");Z(this,"lastCompass",NaN);Z(this,"width",1);Z(this,"height",1);Z(this,"quality","high");Z(this,"resolution");Z(this,"pacing");Z(this,"solarMinutes",NaN);Z(this,"roadPaths",[]);Z(this,"roadOverlay",new av);Z(this,"external");Z(this,"meta");Z(this,"shadowAim",new W);Z(this,"lookDir",new W);Z(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=Zt.degToRad(e.azimuth),r=-Math.sin(s),a=-Math.cos(s),o=Math.cos(s),l=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+a*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-a*n};break;case"ArrowLeft":c={...e,x:e.x-o*n,z:e.z-l*n};break;case"ArrowRight":c={...e,x:e.x+o*n,z:e.z+l*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=_s;break;default:return}t.preventDefault(),this.fly(c,.3)});Z(this,"frame",t=>{var p,_,m,g,S,x,M,E,b,v;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,document.hidden){this.pacing.reset(),this.resolution.resetSampling();return}if(this.flight){const y=this.flight;y.t=Math.min(1,y.t+e/y.duration);const T=Hv(y.t),w=(C,L)=>C+(L-C)*T;this.applyView({x:w(y.from.x,y.to.x),z:w(y.from.z,y.to.z),dist:Math.exp(w(Math.log(y.from.dist),Math.log(y.to.dist))),polar:w(y.from.polar,y.to.polar),azimuth:w(y.from.azimuth,y.to.azimuth)}),y.t>=1&&(this.flight=void 0)}this.controls&&!this.external&&this.controls.update()&&(this.dirty=!0);const n=(p=this.stillPhoto)!=null&&p.pending?this.stillPhoto:void 0;if(!n&&this.atmosphere.update(e)&&(this.dirty=!0),!n&&this.animating&&(this.time+=e,this.water.uniforms.uTime.value=this.time,(_=this.life)==null||_.update(e,this.time),this.dirty=!0),!n&&this.opts.assets.detail){const{x:y,y:T,z:w}=this.camera.position;(m=this.detailStreaming)==null||m.update(t/1e3,y,T,w,T-this.hf.yAt(y,w))}if(!this.dirty&&!n)return;const s=this.pacing.takeFrame(t);if(s===void 0)return;const r=this.dirty;this.dirty=!1,!n&&this.animating&&this.resolution.update(t/1e3,s,this.pacing.target)&&this.renderer.setPixelRatio(this.resolution.ratio);const a=this.camera;(g=this.ultraStreet)==null||g.update(a.position,this.atmosphere.sun.intensity);let o,l=1/0;const c=!!this.controls&&!this.external,h=this.hf.yAt(a.position.x,a.position.z);if(c&&(a.position.y=Math.max(a.position.y,h+12)),!n||!this.hasWeatherTime){const y=this.weatherTime(),T=this.weather;T.update(y),this.clouds.update(y),this.clouds.setCover(T.cover),this.clouds.setFlash(((S=this.storm)==null?void 0:S.update(y,T,a.position,this.opts.onThunder))??0);const w=T.rain>.015&&a.position.y-h<4&&this.solidAt(a.position.x,a.position.z);(x=this.showers)==null||x.update(T.rain,T.wetness,this.time,void 0,void 0,w),this.hasWeatherTime=!0}const u=Math.max(1,a.position.y-Math.max(h,this.waterLevel));if(this.controls&&c)o=a.position.distanceTo(this.controls.target),this.shadowAim.copy(this.controls.target);else{a.getWorldDirection(this.lookDir);const y=Math.min(this.lookDir.y<-.05?u/-this.lookDir.y:1e9,40+u*3,3e3);this.shadowAim.copy(a.position).addScaledVector(this.lookDir,y),o=Math.max(y,u)*1.3,l=Math.max(350,u*10)}const f=c?Zt.clamp(o*.02,2,80):Zt.clamp(o*.012,.4,60);Math.abs(f-a.near)>a.near*.05&&(a.near=f,a.updateProjectionMatrix());const d=zv[this.quality];if((M=this.life)==null||M.updateParkedLod(a.position,u,d.cars),(E=this.trees)==null||E.updateLod(a.position,u,d.trees),this.atmosphere.aimShadow(this.shadowAim,o),n||(b=this.detailStreaming)==null||b.applyReady(),n!=null&&n.draw(this.scene,a,r)||this.renderer.render(this.scene,a),(v=this.labels)==null||v.update(a,this.width,this.height,l),c){const y=Math.round(this.currentView().azimuth);y!==this.lastCompass&&(this.lastCompass=y,this.cb.onCompass(y))}});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.external=!!s.external,this.pacing=new l_(s.frameTarget)}async init(){var k;try{this.renderer=new gx({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D model needs.");return}const t=this.renderer;this.quality=this.pickQuality();let e=Ov[this.quality];const n=(navigator.deviceMemory??8)>4;this.quality==="medium"&&n&&!this.opts.quality&&(e={...e,pixelRatio:2,trees:.8}),this.resolution=new _v(Math.min(window.devicePixelRatio||1,e.pixelRatio),this.quality==="low"?.6:1),t.setPixelRatio(this.resolution.ratio),t.outputColorSpace=Pe,t.toneMapping=Aa,t.shadowMap.enabled=e.shadow>0,t.shadowMap.type=vs;const s=t.domElement;this.opts.external?(s.setAttribute("role","img"),s.setAttribute("aria-label","3D model of Inverloch")):(s.tabIndex=0,s.setAttribute("role","application"),s.setAttribute("aria-label","3D model of Inverloch. Drag to pan, right-drag to rotate, scroll to zoom. Arrow keys pan, plus and minus zoom, Q and E rotate.")),s.style.display="block",s.style.outlineOffset="-3px",this.container.appendChild(s),s.addEventListener("webglcontextlost",H=>{var z;H.preventDefault(),(z=this.stillPhoto)==null||z.cancel("The browser lost the graphics context during the photo."),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this model was using.")});const r=this.worker=new q_;let a;try{a=await qx(this.opts.assets,e.step,(H,z)=>this.cb.onProgress(H*.6,z),r,this.abort.signal)}catch(H){r.close(),this.disposed||this.cb.onError(H instanceof Error?H.message:"The model data could not be loaded.");return}if(this.disposed){a.ground.dispose();return}const{town:o,heights:l,exposure:c,surface:h,terrainTiles:u,ground:f}=a;this.meta=o.meta,this.quality==="ultra"&&this.opts.external&&((k=this.opts.clearPolygons)!=null&&k.length)&&this.opts.assets.detail&&(this.ultraStreet=new Fv(this.scene,this.opts.assets.detail,this.fromLatLon.bind(this),(H,z)=>this.hf.yAt(H,z),()=>{this.dirty=!0}));const d=[...this.opts.clear??[],...(this.opts.clearLatLon??[]).map(H=>{const[z,N]=this.fromLatLon(H.lat,H.lon);return{x:z,z:N,r:H.r}})],p=(this.opts.clearPolygons??[]).map(H=>({pts:H.latLon.map(([z,N])=>this.fromLatLon(z,N)),roads:!!H.roads})),_=(H,z,N)=>p.some(D=>(!N||D.roads)&&kv(D.pts,H,z)),m=(H,z)=>d.some(N=>(H-N.x)**2+(z-N.z)**2<N.r*N.r)||_(H,z,!1),g=(this.opts.detailLatLon??[]).map(H=>{const[z,N]=this.fromLatLon(H.lat,H.lon);return{x:z,z:N,r:H.r}}),S=(H,z)=>g.some(N=>(H-N.x)**2+(z-N.z)**2<N.r*N.r);f.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());const x=async(H,z)=>{this.cb.onProgress(H,z),await Bv()};if(await x(.62,"Shaping the terrain"),this.disposed){f.dispose();return}const M=this.hf=new $h(l,c,o.meta.grid[0],o.meta.grid[1],o.meta.size[0],o.meta.size[1],e.step,h),E=Mv();this.scene.add(yv(M,u,f,this.tide,E));const b=navigator.deviceMemory??8;this.detailStreaming=new __(this.opts.assets,this.quality==="low"||b<=4,E,f.anisotropy,r,()=>{this.dirty=!0});const v=this.showers=new sv(this.scene,this.camera,this.quality);this.water=Iv(M,this.tide,this.quality==="ultra"?v.inletRain:void 0),this.scene.add(this.water.skirt,this.water.mesh),await x(.7,"Laying out the streets");const y=p.some(H=>H.roads)?(H,z)=>_(H,z,!0):void 0,T=gv(o,M,y,(H,z)=>v.shadeAsphalt(H,z));this.scene.add(T.group),this.roadPaths=T.paths,this.roadOverlay.add(T.pavement,T.pavementEnd),await x(.78,"Raising the buildings");const w=o_(o,M,T.index,y_,m);this.scene.add(w.group),await x(.86,"Planting trees");const C=this.trees=Pv(o,M,e.trees,(H,z)=>m(H,z)||Kx(H,z));this.scene.add(C.group),await x(.92,"Adding landmarks");const L={town:o,hf:M,footprints:w.footprints,roads:T.index,paths:T.paths,isClear:m,isDetail:S,hasDetail:g.length>0},U=z_(L);this.scene.add(U.group),this.solid=new Map,this.designedWalls=w.designedWalls;for(const H of[...w.footprints.map(z=>z.poly),...this.designedWalls]){if(H.length<6)continue;let z=1/0,N=-1/0,D=1/0,Y=-1/0;for(let it=0;it<H.length;it+=2)z=Math.min(z,H[it]),N=Math.max(N,H[it]),D=Math.min(D,H[it+1]),Y=Math.max(Y,H[it+1]);for(let it=Math.floor(z/16);it<=Math.floor(N/16);it++)for(let q=Math.floor(D/16);q<=Math.floor(Y/16);q++){const et=`${it}_${q}`,$=this.solid.get(et);$?$.push(H):this.solid.set(et,[H])}}if(this.life=new tv(L,U,this.quality==="ultra"),this.life.setTide(this.tide.value*Gn),this.scene.add(this.life.group),this.disposed)return;this.clouds=new Fx,this.atmosphere=new Bx(t,this.water,e.shadow,this.clouds),this.places=S_(o.meta,M);const P=this.places.find(H=>H.id==="inlet");this.storm=new W_(this.scene,P.x,P.z),this.clouds.uniforms.uFlashCenter.value=this.storm.center;const B=this.coastalHaze=new H_(P.x,P.z,this.atmosphere.horizon,this.quality==="ultra"&&this.opts.coastalMist!==!1,this.clouds,{value:this.atmosphere.sunDir},this.atmosphere.cloudShadowStrength);B.setWaterLevel(this.waterLevel),B.addWater(this.water.mesh),B.add(this.scene),this.scene.addEventListener("childadded",H=>B.add(H.child)),this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.labels=new v_(this.labelLayer,this.places,H=>this.flyToPlace(H)),this.external||this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const F=window.matchMedia("(prefers-reduced-motion: reduce)").matches;F&&(this.animating=!1),this.external?this.setExternalCamera(300,900,2600,0,-.42):F?this.applyView(_s):(this.applyView({..._s,dist:9500,polar:24,azimuth:-20}),this.fly(_s,3.4)),this.cb.onProgress(1,"Ready"),this.cb.onReady({quality:this.quality,houses:o.counts.houses,mappedBuildings:o.counts.buildings,trees:C.count,roadPieces:o.counts.roads,sources:o.meta.sources,places:this.places}),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)}get isAnimating(){return this.animating}setAnimating(t){var e;t!==this.animating&&((e=this.resolution)==null||e.resetSampling()),this.animating=t,this.dirty=!0}setFrameTarget(t){var e;this.pacing.setTarget(t)&&((e=this.resolution)==null||e.resetSampling())}weatherTime(){return Date.now()/1e3}setExternalCamera(t,e,n,s,r){if(!this.external)return;const a=this.camera.position,o=this.camera.rotation,l=a.x===t&&a.y===e&&a.z===n,c=o.order==="YXZ"&&o.x===r&&o.y===s&&o.z===0;l&&c||(this.camera.position.set(t,e,n),this.camera.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}setExternal(t){if(!(t===this.external||!this.hf)){if(this.external=t,t)this.flight=void 0,this.controls&&(this.controls.enabled=!1);else{this.controls||this.setupControls(),this.controls.enabled=!0;const e=this.camera;e.getWorldDirection(this.lookDir);const n=Math.max(1,e.position.y),s=this.lookDir.y<-.05?Math.min(n/-this.lookDir.y,6e3):900,r=this.controls.target.copy(e.position).addScaledVector(this.lookDir,s);r.x=Zt.clamp(r.x,this.hf.xMin,this.hf.xMax),r.z=Zt.clamp(r.z,this.hf.zMin,this.hf.zMax),r.y=0,this.controls.update(),this.fly(_s,1.6)}this.resize()}}getCamera(){const t=new cn().setFromQuaternion(this.camera.quaternion,"YXZ"),e=this.camera.position;return{x:e.x,y:e.y,z:e.z,yaw:t.y,pitch:t.x}}fromLatLon(t,e){const n=this.meta;return n?[(e-n.origin[0])*n.metresPerDegree[0],-(t-n.origin[1])*n.metresPerDegree[1]]:[0,0]}addParts(t){const e=new tn;e.name="guest";const n=t.map(s=>{var d;const r=s.roadOverlay?{...s,positions:this.roadOverlay.project(this.hf,s.positions,s.indices),indices:void 0,normals:void 0,colors:void 0,uvs:void 0,onGround:!0}:s.onGround?{...s,...Gv(this.hf,s),indices:void 0}:s,a=new Ee,o=(p,_)=>new Se(p instanceof Float32Array?p:Float32Array.from(p),_);a.setAttribute("position",o(r.positions,3)),r.colors&&a.setAttribute("color",o(r.colors,3)),r.uvs&&a.setAttribute("uv",o(r.uvs,2)),r.indices&&a.setIndex(Array.from(r.indices)),r.normals?a.setAttribute("normal",o(r.normals,3)):r.roadOverlay||a.computeVertexNormals();let l=null;r.map&&(l=new be(r.map),l.colorSpace=Pe,l.wrapS=l.wrapT=Es,r.mapRepeat&&l.repeat.set(r.mapRepeat[0],r.mapRepeat[1]),l.anisotropy=4,l.needsUpdate=!0);const c=r.opacity??1,h={color:new Tt().setRGB(...r.color??[1,1,1]),map:l,vertexColors:!!r.colors,transparent:c<1,opacity:c,side:r.doubleSide?Re:ai,...r.roadOverlay?Ru:{}},u=r.unlit?new Tn(h):new An({...h,roughness:r.roughness??.9,metalness:r.metalness??0,emissive:new Tt().setRGB(...r.emissive??[0,0,0]),emissiveIntensity:r.emissiveIntensity??1,emissiveMap:r.glowMap?l:null,flatShading:!!r.flatShading}),f=new qt(a,u);return f.matrixAutoUpdate=!1,r.onGround||f.matrix.fromArray(Array.from(r.matrix)),r.wetAsphalt&&u instanceof An&&((d=this.showers)==null||d.shadeAsphalt(u)),r.wetAsphalt&&r.onGround&&!r.roadOverlay&&this.roadOverlay.add(a.getAttribute("position").array),f.userData.fixed=!!r.onGround,f.castShadow=!r.roadOverlay&&c>=1,f.receiveShadow=!r.roadOverlay,e.add(f),f});return this.scene.add(e),this.dirty=!0,{setMatrix:(s,r)=>{const a=n[s];!a||a.userData.fixed||(a.matrix.fromArray(Array.from(r)),a.matrixWorldNeedsUpdate=!0,this.dirty=!0)},setEmissive:(s,r,a,o,l)=>{var h;const c=(h=n[s])==null?void 0:h.material;c instanceof An&&(c.emissive.setRGB(r,a,o),c.emissiveIntensity=l,this.dirty=!0)},remove:()=>{var s;this.scene.remove(e);for(const r of n){this.roadOverlay.remove(r.geometry.getAttribute("position").array),r.geometry.dispose();const a=r.material;(s=a.map)==null||s.dispose(),a.dispose()}this.dirty=!0}}}addTrafficCar(t,e,n,s,r){if(!this.life)throw new Error("Wait for the Inverloch model before adding traffic");const{mesh:a,scale:o}=this.life.makeTrafficCar(t,e,n,s,r);let l;return{setMatrix:(c,h)=>{c===0&&(a.matrix.fromArray(h),a.matrix.elements[13]+=du,a.matrixWorldNeedsUpdate=!0,a.visible=!!(h[0]||h[1]||h[2]),this.dirty=!0)},setSignal:c=>{!l&&c&&(l=_u(t),l.scale.copy(o),a.add(l)),l&&(vu(l,c),this.dirty=!0)},remove:()=>{a.removeFromParent(),a.geometry.dispose(),l==null||l.geometry.dispose(),l==null||l.material.dispose(),this.dirty=!0}}}addPad(t){const e=t.radius??t.halfWidth??5,n=t.radius??t.halfDepth??5,s=t.heading??0,r=Math.cos(s),a=Math.sin(s);let o=1/0,l=-1/0;for(const[d,p]of[[0,0],[-e,-n],[e,-n],[e,n],[-e,n],[0,-n],[0,n],[-e,0],[e,0]]){const _=this.hf.yAt(t.x+d*r+p*a,t.z-d*a+p*r);o=Math.min(o,_),l=Math.max(l,_)}const c=l+(t.lift??.25),h=c-o+1,u=t.radius?new Ho(t.radius,t.radius,h,24):new Ci(e*2,h,n*2),f=new qt(u,new An({color:new Tt().setRGB(...t.color),roughness:1}));return f.position.set(t.x,c-h/2,t.z),f.rotation.y=s,f.receiveShadow=!0,f.name="guest-pad",this.scene.add(f),this.dirty=!0,c}setSolarMinutes(t){!this.atmosphere||t===this.solarMinutes||(this.solarMinutes=t,this.atmosphere.setSolar(t),this.dirty=!0)}roadSpot(t){const e=t.trim().toLowerCase();let n=null;for(const p of this.roadPaths)p.name.toLowerCase()===e&&(!n||p.length>n.length)&&(n=p);if(!n)return null;const s=n.pts.length/3,r=0,a=s-1,o=s>>1;let l=n.pts[a*3]-n.pts[r*3],c=n.pts[a*3+2]-n.pts[r*3+2];const h=Math.hypot(l,c)||1;l/=h,c/=h;const u=Math.min(70,h*.5),f=n.pts[o*3]-l*u,d=n.pts[o*3+2]-c*u;return{x:f,y:this.hf.yAt(f,d)+38,z:d,yaw:Math.atan2(-l,-c),pitch:-.42}}groundAt(t,e){return this.hf?this.hf.yAt(t,e):0}nearestCar(t,e,n){var s;return((s=this.life)==null?void 0:s.nearestCar(t,e,n))??null}addCars(t){var e;(e=this.life)==null||e.addCars(t),this.dirty=!0}driveCar(t,e,n,s,r,a,o=0,l=0,c=0){var u;const h=((u=this.life)==null?void 0:u.driveCar(t,e,n,s,r,a,o,l,c))??!1;return this.dirty=!0,h}designedWallFootprints(){return this.designedWalls.map(t=>t.slice())}solidAt(t,e){var s;const n=(s=this.solid)==null?void 0:s.get(`${Math.floor(t/16)}_${Math.floor(e/16)}`);if(!n)return!1;for(const r of n){let a=!1;for(let o=0,l=r.length/2-1;o<r.length/2;l=o++){const c=r[o*2],h=r[o*2+1],u=r[l*2],f=r[l*2+1];h>e!=f>e&&t<(u-c)*(e-h)/(f-h)+c&&(a=!a)}if(a)return!0}return!1}get waterLevel(){return this.tide.value*Gn}get bounds(){return this.hf?[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]:[-4e3,4e3,-3440,3440]}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}setTide(t){var e,n;this.water&&(this.water.setTide(Zt.clamp(t,Nu,Uu)),(e=this.life)==null||e.setTide(this.tide.value*Gn),(n=this.coastalHaze)==null||n.setWaterLevel(this.waterLevel),this.dirty=!0)}captureStill(){return this.disposed||!this.atmosphere||this.quality!=="ultra"?Promise.reject(new Error("Antialiased photos are available after the Ultra view loads.")):document.hidden?Promise.reject(new Error("Open the Inverloch view to save a photo.")):(this.stillPhoto||(this.stillPhoto=new Rv(this.renderer,()=>{this.dirty=!0,this.resolution.resetSampling()}),document.addEventListener("visibilitychange",this.onPhotoVisibilityChange)),this.resolution.resetSampling(),this.stillPhoto.start())}setCoastalMist(t){var e;this.opts.coastalMist=t,(e=this.coastalHaze)==null||e.setMist(this.quality==="ultra"&&t),this.dirty=!0}setLabelsVisible(t){var e;(e=this.labels)==null||e.setVisible(t),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.2)}resetView(){this.fly(_s,1.8)}setView(t,e,n,s,r,a=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},a)}faceNorth(){const t=this.currentView();this.fly({...t,azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:Zt.clamp(e.dist*t,this.controls.minDistance,this.controls.maxDistance)},.35)}dispose(){var t,e,n,s,r,a,o,l,c,h;this.disposed=!0,this.abort.abort(),(t=this.ultraStreet)==null||t.dispose(),(e=this.detailStreaming)==null||e.dispose(),(n=this.worker)==null||n.close(),cancelAnimationFrame(this.raf),(s=this.resizeObserver)==null||s.disconnect(),(r=this.labels)==null||r.dispose(),(a=this.stillPhoto)==null||a.dispose(),(o=this.clouds)==null||o.dispose(),(l=this.showers)==null||l.dispose(),(c=this.storm)==null||c.dispose(),document.removeEventListener("visibilitychange",this.onPhotoVisibilityChange),(h=this.controls)==null||h.dispose(),this.renderer&&(this.renderer.domElement.removeEventListener("keydown",this.onKey),this.scene.traverse(u=>{var p,_;const f=u;(_=(p=f.geometry)==null?void 0:p.dispose)==null||_.call(p);const d=Array.isArray(f.material)?f.material:f.material?[f.material]:[];for(const m of d){for(const g of Object.values(m))g instanceof be&&g.dispose();m.dispose()}}),this.renderer.dispose(),this.renderer.domElement.remove())}pickQuality(){if(this.opts.quality)return this.opts.quality;const t=new URLSearchParams(window.location.search).get("quality");if(t==="ultra"||t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new Lx(this.camera,this.renderer.domElement);t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=70,t.maxDistance=12e3,t.maxPolarAngle=Zt.degToRad(84),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const e=t.target,n=this.hf;e.x=Zt.clamp(e.x,n.xMin,n.xMax),e.z=Zt.clamp(e.z,n.zMin,n.zMax),e.y=0,this.dirty=!0}),this.renderer.domElement.addEventListener("keydown",this.onKey)}clampView(t){var e,n;return{x:Zt.clamp(t.x,this.hf.xMin,this.hf.xMax),z:Zt.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:Zt.clamp(t.dist,((e=this.controls)==null?void 0:e.minDistance)??70,((n=this.controls)==null?void 0:n.maxDistance)??12e3),polar:Zt.clamp(t.polar,2,84),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=this.camera.position.clone().sub(t),n=new Wr().setFromVector3(e);return{x:t.x,z:t.z,dist:n.radius,polar:Zt.radToDeg(n.phi),azimuth:Zt.radToDeg(n.theta)}}applyView(t){const e=new Wr(t.dist,Zt.degToRad(t.polar),Zt.degToRad(t.azimuth)),n=this.controls.target.set(t.x,0,t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(!this.controls||this.external)return;if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.fov=this.external?60:t/e<.8?52:38,this.camera.updateProjectionMatrix(),this.dirty=!0}}const Cl="Map data © OpenStreetMap contributors · Elevation © Geoscience Australia (CC BY 4.0)",Wv=`
.inv-embed, .inv-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the model but never take a touch: drags and pinches must reach the canvas underneath */
.inv-embed-labels, .inv-embed .inv-label { pointer-events: none; }
.inv-embed-credit { position: absolute; left: 50%; bottom: var(--inv-credit-bottom, 6px); transform: translateX(-50%); margin: 0; max-width: calc(100% - 24px);
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; pointer-events: none; }
`,Xv=["low","medium","high","ultra"];function Yv(i,t){if(!document.querySelector("style[data-inverloch-model]")){const f=document.createElement("style");f.setAttribute("data-inverloch-model",""),f.textContent=Hn+Wv,document.head.appendChild(f)}const e=document.createElement("div");e.className="inv-embed";const n=document.createElement("div");n.className="inv-embed-layer";const s=document.createElement("div");s.className="inv-embed-layer inv-embed-labels";const r=document.createElement("p");r.className="inv-embed-credit",r.textContent=Cl,e.append(n,s,r),i.appendChild(e);const a=typeof t.assets=="string"?{height:t.assets+"height.png",ground:t.assets+(typeof window<"u"&&window.anSmallGround?"ground-2k.webp":"ground.webp"),town:t.assets+"town.json",detail:t.assets+"detail.json"}:t.assets;let o=[],l=!1,c;const h=new Promise((f,d)=>c={ok:f,fail:d}),u=new Vv(n,s,{onProgress:(f,d)=>{var p;return(p=t.onProgress)==null?void 0:p.call(t,f,d)},onReady:f=>{o=f.places.map(d=>{const p=Math.min(Math.max(d.view[0]*.55,90),1500),_=d.view[1]*Math.PI/180,m=d.view[2]*Math.PI/180,g=d.x+p*Math.sin(_)*Math.sin(m),S=d.z+p*Math.sin(_)*Math.cos(m),x=Math.max(u.groundAt(g,S),u.waterLevel)+Math.max(p*Math.cos(_),20),M=d.x-g,E=d.y-10-x,b=d.z-S;return{id:d.id,name:d.name,kind:d.kind,x:g,y:x,z:S,yaw:Math.atan2(-M,-b),pitch:Math.atan2(E,Math.hypot(M,b)),tx:d.x,tz:d.z}}),t.labels===!1&&u.setLabelsVisible(!1),l=!0,c.ok()},onError:f=>{var d;return l?(d=t.onError)==null?void 0:d.call(t,f):c.fail(new Error(f))},onCompass:()=>{}},{assets:a,external:!0,quality:t.quality,frameTarget:t.frameTarget,coastalMist:t.coastalMist,onThunder:t.onThunder,clear:t.clear,clearLatLon:t.clearLatLon,clearPolygons:t.clearPolygons,detailLatLon:t.detailLatLon});return u.init(),{ready:h,setCamera:(f,d,p,_,m)=>u.setExternalCamera(f,d,p,_,m),setMinutes:f=>u.setSolarMinutes(f),setTide:f=>u.setTide(f),setAnimating:f=>u.setAnimating(f),setFrameTarget:f=>u.setFrameTarget(f),captureStill:()=>u.captureStill(),setCoastalMist:f=>u.setCoastalMist(f),setLabelsVisible:f=>u.setLabelsVisible(f),groundAt:(f,d)=>u.groundAt(f,d),waterLevel:()=>u.waterLevel,bounds:()=>u.bounds,fromLatLon:(f,d)=>u.fromLatLon(f,d),setMode:f=>u.setExternal(f!=="bird"),getCamera:()=>u.getCamera(),flyToPlace:f=>u.flyToPlace(f),lookAt:(f,d,p,_,m)=>u.setView(f,d,p,_,m),addParts:f=>u.addParts(f),addTrafficCar:(f,d,p,_,m)=>u.addTrafficCar(f,d,p,_,m),addPad:f=>u.addPad(f),spots:()=>o,nearestCar:(f,d,p)=>u.nearestCar(f,d,p),driveCar:(f,d,p,_,m,g,S,x,M)=>u.driveCar(f,d,p,_,m,g,S,x,M),solidAt:(f,d)=>u.solidAt(f,d),designedWallFootprints:()=>u.designedWallFootprints(),addCars:f=>u.addCars(f),roadSpot:f=>{const d=u.roadSpot(f);return d?{id:"road:"+f,name:f,kind:"landmark",...d,tx:d.x-Math.sin(d.yaw)*70,tz:d.z-Math.cos(d.yaw)*70}:null},tide:{min:Nu,max:Uu,initial:Fu},credit:Cl,dispose:()=>{u.dispose(),e.remove()}}}return gn.CREDIT=Cl,gn.create=Yv,gn.qualityPresets=Xv,Object.defineProperty(gn,Symbol.toStringTag,{value:"Module"}),gn}({});

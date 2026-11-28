var InverlochModel=function(cn){"use strict";var aS=Object.defineProperty;var lS=(cn,jn,_i)=>jn in cn?aS(cn,jn,{enumerable:!0,configurable:!0,writable:!0,value:_i}):cn[jn]=_i;var H=(cn,jn,_i)=>lS(cn,typeof jn!="symbol"?jn+"":jn,_i);const jn='.inv-label{position:absolute;left:0;top:0;pointer-events:auto;font:600 12px/1 Space Grotesk,system-ui,sans-serif;padding:6px 10px;border-radius:999px;background:#0c1c24e6;color:#fff;border:1px solid rgba(255,255,255,.2);white-space:nowrap;cursor:pointer;will-change:transform}.inv-label:after{content:"";position:absolute;left:50%;bottom:-8px;width:1px;height:8px;background:#ffffffbf}.inv-label:hover{background:#0b7d9c}.inv-label--nature{background:#183826eb}.inv-label--nature:hover{background:#2c7a4b}.inv-label--water{background:none;border-color:transparent;color:#f1fbff;font-style:italic;font-weight:500;font-size:13px;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,35,60,.95),0 0 8px rgba(0,35,60,.7)}.inv-label--water:after{display:none}.inv-label--water:hover{background:#0c1c2499}.inv-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.inv-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}';/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _i="187",Qn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xf=0,Ac=1,_f=2,Xs=1,vf=2,Ys=3,Mi=0,en=1,Ae=2,os=0,Zs=1,na=2,Rc=3,Cc=4,Mf=5,as=100,Sf=101,yf=102,bf=103,wf=104,Ef=200,Tf=201,Af=202,Rf=203,Lc=204,Pc=205,Cf=206,Lf=207,Pf=208,Df=209,If=210,Nf=211,Uf=212,Ff=213,Of=214,ia=0,sa=1,ra=2,Ks=3,oa=4,aa=5,la=6,ca=7,Nr=0,zf=1,Bf=2,ti=0,Dc=1,Ic=2,Nc=3,Uc=4,Fc=5,Oc=6,ha=7,zc=300,ls=301,qs=302,ua=303,da=304,Js=1e3,Gn=1001,fa=1002,Fe=1003,Gf=1004,Ur=1005,ke=1006,pa=1007,En=1008,hn=1009,Bc=1010,Gc=1011,$s=1012,ma=1013,kn=1014,Tn=1015,An=1016,ga=1017,xa=1018,ki=1020,kc=35902,Hc=35899,Wc=1021,Vc=1022,Hn=1023,Si=1026,ei=1027,Fr=1028,_a=1029,yi=1030,va=1031,Ma=1033,Or=33776,zr=33777,Br=33778,Gr=33779,Sa=35840,ya=35841,ba=35842,wa=35843,Ea=36196,Ta=37492,Aa=37496,Ra=37488,Ca=37489,kr=37490,La=37491,Pa=37808,Da=37809,Ia=37810,Na=37811,Ua=37812,Fa=37813,Oa=37814,za=37815,Ba=37816,Ga=37817,ka=37818,Ha=37819,Wa=37820,Va=37821,Xa=36492,Ya=36494,Za=36495,Ka=36283,qa=36284,Hr=36285,Ja=36286,kf=3200,cs=0,Hf=1,bi="",Oe="srgb",Wr="srgb-linear",Vr="linear",ge="srgb",$a=7680,Wf=519,Vf=512,Xf=513,Yf=514,Xc=515,Zf=516,Kf=517,Yc=518,Zc=519,qf=35044,Hi=35048,Kc="300 es",Rn=2e3,js=2001;function Jf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $f(){const i=Qs("canvas");return i.style.display="block",i}const qc={};function Jc(...i){const t="THREE."+i.shift();console.log(t,...i)}function $c(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=$c(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function de(...i){i=$c(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Xr(...i){const t=i.join(" ");t in qc||(qc[t]=!0,Vt(...i))}function jf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Qf={[ia]:ia,[ra]:la,[oa]:oa,[Ks]:aa,[sa]:sa,[la]:ra,[ca]:ca,[aa]:Ks};class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jc=1234567;const tr=Math.PI/180,er=180/Math.PI;function hs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function ja(i,t){return(i%t+t)%t}function tp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ep(i,t,e){return i!==t?(e-i)/(t-i):0}function nr(i,t,e){return(1-e)*i+e*t}function np(i,t,e,n){return nr(i,t,1-Math.exp(-e*n))}function ip(i,t=1){return t-Math.abs(ja(i,t*2)-t)}function sp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function rp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function op(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ap(i,t){return i+Math.random()*(t-i)}function lp(i){return i*(.5-Math.random())}function cp(i){i!==void 0&&(jc=i);let t=jc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hp(i){return i*tr}function up(i){return i*er}function dp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function fp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pp(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qa(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function th(i,t){if(t.constructor===Float32Array)return i;const e=Qa(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function eh(i,t){if(t.constructor===Float32Array)return i;const e=Qa(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const ae={DEG2RAD:tr,RAD2DEG:er,generateUUID:hs,clamp:ne,euclideanModulo:ja,mapLinear:tp,inverseLerp:ep,lerp:nr,damp:np,pingpong:ip,smoothstep:sp,smootherstep:rp,randInt:op,randFloat:ap,randFloatSpread:lp,seededRandom:cp,degToRad:hp,radToDeg:up,isPowerOfTwo:dp,ceilPowerOfTwo:fp,floorPowerOfTwo:Qc,setQuaternionFromProperEuler:pp,normalize:eh,denormalize:th},Mc=class Mc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mc.prototype.isVector2=!0;let Pt=Mc;class _n{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],g=r[o+3];if(u!==g||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*g;m<0&&(d=-d,f=-f,p=-p,g=-g,m=-m);let x=1-a;if(m<.9995){const _=Math.acos(m),v=Math.sin(_);x=Math.sin(x*_)/v,a=Math.sin(a*_)/v,l=l*x+d*a,c=c*x+f*a,h=h*x+p*a,u=u*x+g*a}else{l=l*x+d*a,c=c*x+f*a,h=h*x+p*a,u=u*x+g*a;const _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sc=class Sc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tl.copy(this).projectOnVector(t),this.sub(tl)}reflect(t){return this.sub(tl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sc.prototype.isVector3=!0;let Y=Sc;const tl=new Y,nh=new _n,yc=class yc{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],g=s[0],m=s[3],x=s[6],_=s[1],v=s[4],S=s[7],b=s[2],w=s[5],M=s[8];return r[0]=o*g+a*_+l*b,r[3]=o*m+a*v+l*w,r[6]=o*x+a*S+l*M,r[1]=c*g+h*_+u*b,r[4]=c*m+h*v+u*w,r[7]=c*x+h*S+u*M,r[2]=d*g+f*_+p*b,r[5]=d*m+f*v+p*w,r[8]=d*x+f*S+p*M,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return t[0]=u*g,t[1]=(s*c-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=d*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Xr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(el.makeScale(t,e)),this}rotate(t){return Xr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(el.makeRotation(-t)),this}translate(t,e){return Xr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(el.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};yc.prototype.isMatrix3=!0;let Zt=yc;const el=new Zt,ih=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mp(){const i={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ge&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?Vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wr]:{primaries:t,whitePoint:n,transfer:Vr,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),i}const he=mp();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ds;class gp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ds===void 0&&(ds=Qs("canvas")),ds.width=t.width,ds.height=t.height;const s=ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ni(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xp=0;class Yr{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=hs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nl(s[o].image)):r.push(nl(s[o]))}else r=nl(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}let _p=0;const il=new Y;class Re extends wi{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Gn,s=Gn,r=ke,o=En,a=Hn,l=hn,c=Re.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=hs(),this.name="",this.source=new Yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(il).x}get height(){return this.source.getSize(il).y}get depth(){return this.source.getSize(il).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Js:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Js:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null,Re.DEFAULT_MAPPING=zc,Re.DEFAULT_ANISOTROPY=1;const bc=class bc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],g=l[2],m=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(f+1)/2,b=(x+1)/2,w=(h+d)/4,M=(u+g)/4,y=(p+m)/4;return v>S&&v>b?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=M/n):S>b?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=M/r,s=y/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-p)*(m-p)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(u-g)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+x-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bc.prototype.isVector4=!0;let Se=bc;class vp extends wi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Re({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Yr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends vp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rh extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mp extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Qo=class Qo{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,g,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,g,m){const x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=s,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=f,x[7]=p,x[11]=g,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qo().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/fs.setFromMatrixColumn(t,0).length(),r=1/fs.setFromMatrixColumn(t,1).length(),o=1/fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,p=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,p=c*h,g=c*u;e[0]=d+g*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,p=c*h,g=c*u;e[0]=d-g*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,p=a*h,g=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,p=a*l,g=a*c;e[0]=l*h,e[4]=g-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-g*u}else if(t.order==="XZY"){const d=o*l,f=o*c,p=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sp,t,yp)}lookAt(t,e,n){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),Ei.crossVectors(n,un),Ei.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ei.crossVectors(n,un)),Ei.normalize(),Zr.crossVectors(un,Ei),s[0]=Ei.x,s[4]=Zr.x,s[8]=un.x,s[1]=Ei.y,s[5]=Zr.y,s[9]=un.y,s[2]=Ei.z,s[6]=Zr.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],g=n[6],m=n[10],x=n[14],_=n[3],v=n[7],S=n[11],b=n[15],w=s[0],M=s[4],y=s[8],T=s[12],E=s[1],R=s[5],P=s[9],F=s[13],L=s[2],N=s[6],I=s[10],W=s[14],q=s[3],G=s[7],Z=s[11],j=s[15];return r[0]=o*w+a*E+l*L+c*q,r[4]=o*M+a*R+l*N+c*G,r[8]=o*y+a*P+l*I+c*Z,r[12]=o*T+a*F+l*W+c*j,r[1]=h*w+u*E+d*L+f*q,r[5]=h*M+u*R+d*N+f*G,r[9]=h*y+u*P+d*I+f*Z,r[13]=h*T+u*F+d*W+f*j,r[2]=p*w+g*E+m*L+x*q,r[6]=p*M+g*R+m*N+x*G,r[10]=p*y+g*P+m*I+x*Z,r[14]=p*T+g*F+m*W+x*j,r[3]=_*w+v*E+S*L+b*q,r[7]=_*M+v*R+S*N+b*G,r[11]=_*y+v*P+S*I+b*Z,r[15]=_*T+v*F+S*W+b*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],g=t[7],m=t[11],x=t[15],_=l*f-c*d,v=a*f-c*u,S=a*d-l*u,b=o*f-c*h,w=o*d-l*h,M=o*u-a*h;return e*(g*_-m*v+x*S)-n*(p*_-m*b+x*w)+s*(p*v-g*b+x*M)-r*(p*S-g*w+m*M)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],g=t[13],m=t[14],x=t[15],_=e*a-n*o,v=e*l-s*o,S=e*c-r*o,b=n*l-s*a,w=n*c-r*a,M=s*c-r*l,y=h*g-u*p,T=h*m-d*p,E=h*x-f*p,R=u*m-d*g,P=u*x-f*g,F=d*x-f*m,L=_*F-v*P+S*R+b*E-w*T+M*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/L;return t[0]=(a*F-l*P+c*R)*N,t[1]=(s*P-n*F-r*R)*N,t[2]=(g*M-m*w+x*b)*N,t[3]=(d*w-u*M-f*b)*N,t[4]=(l*E-o*F-c*T)*N,t[5]=(e*F-s*E+r*T)*N,t[6]=(m*S-p*M-x*v)*N,t[7]=(h*M-d*S+f*v)*N,t[8]=(o*P-a*E+c*y)*N,t[9]=(n*E-e*P-r*y)*N,t[10]=(p*w-g*S+x*_)*N,t[11]=(u*S-h*w-f*_)*N,t[12]=(a*T-o*R-l*y)*N,t[13]=(e*R-n*T+s*y)*N,t[14]=(g*v-p*b-m*_)*N,t[15]=(h*b-u*v+d*_)*N,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,g=o*h,m=o*u,x=a*u,_=l*c,v=l*h,S=l*u,b=n.x,w=n.y,M=n.z;return s[0]=(1-(g+x))*b,s[1]=(f+S)*b,s[2]=(p-v)*b,s[3]=0,s[4]=(f-S)*w,s[5]=(1-(d+x))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(p+v)*M,s[9]=(m-_)*M,s[10]=(1-(d+g))*M,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=fs.set(s[0],s[1],s[2]).length();const a=fs.set(s[4],s[5],s[6]).length(),l=fs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ln.copy(this);const c=1/o,h=1/a,u=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,e.setFromRotationMatrix(Ln),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Rn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===Rn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===js)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Rn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===Rn)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===js)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Qo.prototype.isMatrix4=!0;let ie=Qo;const fs=new Y,Ln=new ie,Sp=new Y(0,0,0),yp=new Y(1,1,1),Ei=new Y,Zr=new Y,un=new Y,oh=new ie,ah=new _n;class vn{constructor(t=0,e=0,n=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ah.setFromEuler(this),this.setFromQuaternion(ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class sl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bp=0;const lh=new Y,ps=new _n,ii=new ie,Kr=new Y,ir=new Y,wp=new Y,Ep=new _n,ch=new Y(1,0,0),hh=new Y(0,1,0),uh=new Y(0,0,1),dh={type:"added"},Tp={type:"removed"},ms={type:"childadded",child:null},rl={type:"childremoved",child:null};class He extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new Y,e=new vn,n=new _n,s=new Y(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Zt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(ch,t)}rotateY(t){return this.rotateOnAxis(hh,t)}rotateZ(t){return this.rotateOnAxis(uh,t)}translateOnAxis(t,e){return lh.copy(t).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ch,t)}translateY(t){return this.translateOnAxis(hh,t)}translateZ(t){return this.translateOnAxis(uh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Kr.copy(t):Kr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(ir,Kr,this.up):ii.lookAt(Kr,ir,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(ii),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(de("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dh),ms.child=t,this.dispatchEvent(ms),ms.child=null):de("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tp),rl.child=t,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dh),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Ep,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}He.DEFAULT_UP=new Y(0,1,0),He.DEFAULT_MATRIX_AUTO_UPDATE=!0,He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $e extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ap={type:"move"};class ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),x=this._getHandJoint(c,g);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ap)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},qr={h:0,s:0,l:0};function al(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=ja(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=al(o,r,t+.3333333333333333),this.g=al(o,r,t),this.b=al(o,r,t-.3333333333333333)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=fh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return he.workingToColorSpace(je.copy(this),t),Math.round(ne(je.r*255,0,255))*65536+Math.round(ne(je.g*255,0,255))*256+Math.round(ne(je.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(je.copy(this),e);const n=je.r,s=je.g,r=je.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Oe){he.workingToColorSpace(je.copy(this),t);const e=je.r,n=je.g,s=je.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(qr);const n=nr(Ti.h,qr.h,e),s=nr(Ti.s,qr.s,e),r=nr(Ti.l,qr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Lt;Lt.NAMES=fh;class Jr extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Pn=new Y,si=new Y,ll=new Y,ri=new Y,gs=new Y,xs=new Y,ph=new Y,cl=new Y,hl=new Y,ul=new Y,dl=new Se,fl=new Se,pl=new Se;class Dn{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),si.subVectors(n,e),ll.subVectors(t,e);const o=Pn.dot(Pn),a=Pn.dot(si),l=Pn.dot(ll),c=si.dot(si),h=si.dot(ll),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return dl.setScalar(0),fl.setScalar(0),pl.setScalar(0),dl.fromBufferAttribute(t,e),fl.fromBufferAttribute(t,n),pl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(dl,r.x),o.addScaledVector(fl,r.y),o.addScaledVector(pl,r.z),o}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),si.subVectors(t,e),Pn.cross(si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Pn.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return Dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Dn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;gs.subVectors(s,n),xs.subVectors(r,n),cl.subVectors(t,n);const l=gs.dot(cl),c=xs.dot(cl);if(l<=0&&c<=0)return e.copy(n);hl.subVectors(t,s);const h=gs.dot(hl),u=xs.dot(hl);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(gs,o);ul.subVectors(t,r);const f=gs.dot(ul),p=xs.dot(ul);if(p>=0&&f<=p)return e.copy(r);const g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(xs,a);const m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return ph.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(ph,a);const x=1/(m+g+d);return o=g*x,a=d*x,e.copy(n).addScaledVector(gs,o).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ai{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(t.matrixWorld),this.union($r)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sr),jr.subVectors(this.max,sr),_s.subVectors(t.a,sr),vs.subVectors(t.b,sr),Ms.subVectors(t.c,sr),Ri.subVectors(vs,_s),Ci.subVectors(Ms,vs),Wi.subVectors(_s,Ms);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Wi.z,Wi.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Wi.z,0,-Wi.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Wi.y,Wi.x,0];return!ml(e,_s,vs,Ms,jr)||(e=[1,0,0,0,1,0,0,0,1],!ml(e,_s,vs,Ms,jr))?!1:(Qr.crossVectors(Ri,Ci),e=[Qr.x,Qr.y,Qr.z],ml(e,_s,vs,Ms,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const oi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],In=new Y,$r=new Ai,_s=new Y,vs=new Y,Ms=new Y,Ri=new Y,Ci=new Y,Wi=new Y,sr=new Y,jr=new Y,Qr=new Y,Vi=new Y;function ml(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Vi.fromArray(i,r);const a=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=t.dot(Vi),c=e.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ai=Rp();function Rp(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Cp(i){Math.abs(i)>65504&&Vt("DataUtils.toHalfFloat(): Value out of range."),i=ne(i,-65504,65504),ai.floatView[0]=i;const t=ai.uint32View[0],e=t>>23&511;return ai.baseTable[e]+((t&8388607)>>ai.shiftTable[e])}function Lp(i){const t=i>>10;return ai.uint32View[0]=ai.mantissaTable[ai.offsetTable[t]+(i&1023)]+ai.exponentTable[t],ai.floatView[0]}class mh{static toHalfFloat(t){return Cp(t)}static fromHalfFloat(t){return Lp(t)}}const Pe=new Y,to=new Pt;let Pp=0;class Te extends wi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qf,this.updateRanges=[],this.gpuType=Tn,this.version=0,this._normalizationScale=t!==void 0?Qa(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)to.fromBufferAttribute(this,e),to.applyMatrix3(t),this.setXY(e,to.x,to.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):th(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):eh(t,this.array)}}class gh extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class xh extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Dp=new Ai,rr=new Y,gl=new Y;class Xi{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Dp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rr.subVectors(t,this.center);const e=rr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rr.copy(t.center).add(gl)),this.expandByPoint(rr.copy(t.center).sub(gl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ip=0;const Mn=new ie,xl=new He,Ss=new Y,dn=new Ai,or=new Ai,We=new Y;class Ce extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jf(t)?xh:gh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return xl.lookAt(t),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ye(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&de('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(dn.min,or.min),dn.expandByPoint(We),We.addVectors(dn.max,or.max),dn.expandByPoint(We)):(dn.expandByPoint(or.min),dn.expandByPoint(or.max))}dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)We.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(t,c),We.add(Ss)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&de('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){de("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Te(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let T=0;T<n.count;T++)a[T]=new Y,l[T]=new Y;const h=new Y,u=new Y,d=new Y,f=new Pt,p=new Pt,g=new Pt,m=new Y,x=new Y;function _(T,E,R){c[T]=c[E]=c[R]=1,h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,R),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,R),u.sub(h),d.sub(h),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(m.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),x.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),a[T].add(m),a[E].add(m),a[R].add(m),l[T].add(x),l[E].add(x),l[R].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let T=0,E=v.length;T<E;++T){const R=v[T],P=R.start,F=R.count;for(let L=P,N=P+F;L<N;L+=3)_(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const S=new Y,b=new Y,w=new Y,M=new Y;function y(T){w.fromBufferAttribute(s,T),M.copy(w);const E=a[T];S.copy(E),S.sub(w.multiplyScalar(w.dot(E))).normalize(),b.crossVectors(M,E);const P=b.dot(l[T])<0?-1:1;o.setXYZW(T,S.x,S.y,S.z,P)}for(let T=0,E=n.count;T<E;++T)c[T]&&y(T);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new Y,r=new Y,o=new Y,a=new Y,l=new Y,c=new Y,h=new Y,u=new Y;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let x=0;x<h;x++)d[p++]=c[f++]}return new Te(d,h,u)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _l=new Y,Np=new Y,Up=new Zt;class Wn{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=_l.subVectors(n,e).cross(Np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(_l),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Up.getNormalMatrix(t),s=this.coplanarPoint(_l).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Fp=0;class li extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=Zs,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=Pc,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$a,this.stencilZFail=$a,this.stencilZPass=$a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Wn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ci=new Y,vl=new Y,eo=new Y,no=new Y;class io{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vl.copy(t).add(e).multiplyScalar(.5),eo.copy(e).sub(t).normalize(),no.copy(this.origin).sub(vl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(eo),a=no.dot(this.direction),l=-no.dot(eo),c=no.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vl).addScaledVector(eo,d),f}intersectSphere(t,e){if(t.radius<0)return null;ci.subVectors(t.center,this.origin);const n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,g=e.y-o.y,m=e.z-o.z,x=n.x-o.x,_=n.y-o.y,v=n.z-o.z,S=Math.abs(l),b=Math.abs(c),w=Math.abs(h);let M,y,T,E,R,P,F,L,N,I,W,q;if(S>=b&&S>=w?(T=l,P=u,N=p,q=x,l>=0?(M=c,y=h,E=d,R=f,F=g,L=m,I=_,W=v):(M=h,y=c,E=f,R=d,F=m,L=g,I=v,W=_)):b>=w?(T=c,P=d,N=g,q=_,c>=0?(M=h,y=l,E=f,R=u,F=m,L=p,I=v,W=x):(M=l,y=h,E=u,R=f,F=p,L=m,I=x,W=v)):(T=h,P=f,N=m,q=v,h>=0?(M=l,y=c,E=u,R=d,F=p,L=g,I=x,W=_):(M=c,y=l,E=d,R=u,F=g,L=p,I=_,W=x)),T===0)return null;const G=M/T,Z=y/T,j=1/T,U=E-G*P,V=R-Z*P,O=F-G*N,J=L-Z*N,et=I-G*q,st=W-Z*q,ct=et*J-st*O,St=U*st-V*et,Nt=O*V-J*U;if(s){if(ct<0||St<0||Nt<0)return null}else if((ct<0||St<0||Nt<0)&&(ct>0||St>0||Nt>0))return null;const rt=ct+St+Nt;if(rt===0)return null;const ot=j*(ct*P+St*N+Nt*q);return(rt>0?ot<0:ot>0)?null:this.at(ot/rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn extends li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Nr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _h=new ie,Yi=new io,so=new Xi,vh=new Y,ro=new Y,oo=new Y,ao=new Y,Ml=new Y,lo=new Y,Mh=new Y,co=new Y;class te extends He{constructor(t=new Ce,e=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ml.fromBufferAttribute(u,t),o?lo.addScaledVector(Ml,h):lo.addScaledVector(Ml.sub(e),h))}e.add(lo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),Yi.copy(t.ray).recast(t.near),!(so.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(so,vh)===null||Yi.origin.distanceToSquared(vh)>(t.far-t.near)**2))&&(_h.copy(r).invert(),Yi.copy(t.ray).applyMatrix4(_h),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){const m=d[p],x=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=_,b=v;S<b;S+=3){const w=a.getX(S),M=a.getX(S+1),y=a.getX(S+2);s=ho(this,x,t,n,c,h,u,w,M,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=p,x=g;m<x;m+=3){const _=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);s=ho(this,o,t,n,c,h,u,_,v,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){const m=d[p],x=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=_,b=v;S<b;S+=3){const w=S,M=S+1,y=S+2;s=ho(this,x,t,n,c,h,u,w,M,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=p,x=g;m<x;m+=3){const _=m,v=m+1,S=m+2;s=ho(this,o,t,n,c,h,u,_,v,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Op(i,t,e,n,s,r,o,a){let l;if(t.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Mi,a),l===null)return null;co.copy(a),co.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(co);return c<e.near||c>e.far?null:{distance:c,point:co.clone(),object:i}}function ho(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ro),i.getVertexPosition(l,oo),i.getVertexPosition(c,ao);const h=Op(i,t,e,n,ro,oo,ao,Mh);if(h){const u=new Y;Dn.getBarycoord(Mh,ro,oo,ao,u),s&&(h.uv=Dn.getInterpolatedAttribute(s,a,l,c,u,new Pt)),r&&(h.uv1=Dn.getInterpolatedAttribute(r,a,l,c,u,new Pt)),o&&(h.normal=Dn.getInterpolatedAttribute(o,a,l,c,u,new Y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new Y,materialIndex:0};Dn.getNormal(ro,oo,ao,d.normal),h.face=d,h.barycoord=u}return h}class ar extends Re{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Fe,h=Fe,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sh extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ys=new ie,yh=new ie,uo=[],bh=new Ai,zp=new ie,lr=new te,cr=new Xi;class De extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),bh.copy(t.boundingBox).applyMatrix4(ys),this.boundingBox.union(bh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),cr.copy(t.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),t.ray.intersectsSphere(cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),yh.multiplyMatrices(n,ys),lr.matrixWorld=yh,lr.raycast(t,uo);for(let o=0,a=uo.length;o<a;o++){const l=uo[o];l.instanceId=r,l.object=this,e.push(l)}uo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Sh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ar(new Float32Array(s*this.count),s,this.count,Fr,Tn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zi=new Xi,Bp=new Pt(.5,.5),fo=new Y;class hr{constructor(t=new Wn,e=new Wn,n=new Wn,s=new Wn,r=new Wn,o=new Wn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],m=r[10],x=r[11],_=r[12],v=r[13],S=r[14],b=r[15];if(s[0].setComponents(c-o,f-h,x-p,b-_).normalize(),s[1].setComponents(c+o,f+h,x+p,b+_).normalize(),s[2].setComponents(c+a,f+u,x+g,b+v).normalize(),s[3].setComponents(c-a,f-u,x-g,b-v).normalize(),n)s[4].setComponents(l,d,m,S).normalize(),s[5].setComponents(c-l,f-d,x-m,b-S).normalize();else if(s[4].setComponents(c-l,f-d,x-m,b-S).normalize(),e===Rn)s[5].setComponents(c+l,f+d,x+m,b+S).normalize();else if(e===js)s[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){Zi.center.set(0,0,0);const e=Bp.distanceTo(t.center);return Zi.radius=.7071067811865476+e,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(fo.x=s.normal.x>0?t.max.x:t.min.x,fo.y=s.normal.y>0?t.max.y:t.min.y,fo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const wh=new ie;class Sl{constructor(){this.coordinateSystem=Rn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];wh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new hr),n[s].setFromProjectionMatrix(wh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new hr),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Sl().copy(this)}}class Eh extends li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const po=new Y,mo=new Y,Th=new ie,ur=new io,go=new Xi,yl=new Y,Ah=new Y;class Gp extends He{constructor(t=new Ce,e=new Eh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)po.fromBufferAttribute(e,s-1),mo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=po.distanceTo(mo);t.setAttribute("lineDistance",new ye(n,1))}else Vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),go.radius+=r,t.ray.intersectsSphere(go)===!1)return;Th.copy(s).invert(),ur.copy(t.ray).applyMatrix4(Th);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){const x=h.getX(g),_=h.getX(g+1),v=xo(this,t,ur,l,x,_,g);v&&e.push(v)}if(this.isLineLoop){const g=h.getX(p-1),m=h.getX(f),x=xo(this,t,ur,l,g,m,p-1);x&&e.push(x)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){const x=xo(this,t,ur,l,g,g+1,g);x&&e.push(x)}if(this.isLineLoop){const g=xo(this,t,ur,l,p-1,f,p-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xo(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(po.fromBufferAttribute(a,s),mo.fromBufferAttribute(a,r),e.distanceSqToSegment(po,mo,yl,Ah)>n)return;yl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(yl);if(!(c<t.near||c>t.far))return{distance:c,point:Ah.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Rh=new Y,Ch=new Y;class Lh extends Gp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Rh.fromBufferAttribute(e,s),Ch.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Rh.distanceTo(Ch);t.setAttribute("lineDistance",new ye(n,1))}else Vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ph extends Re{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Fe,this.minFilter=Fe,this.generateMipmaps=!1,this.needsUpdate=!0}copy(t){return super.copy(t),this.source=new Yr(Object.assign({},t.image)),this}}class Dh extends Re{constructor(t=[],e=ls,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bl extends Re{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ki extends Re{constructor(t,e,n=kn,s,r,o,a=Fe,l=Fe,c,h=Si,u=1){if(h!==Si&&h!==ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Ih extends Ki{constructor(t,e=kn,n=ls,s,r,o=Fe,a=Fe,l,c=Si){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Nh extends Re{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class qi extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function p(g,m,x,_,v,S,b,w,M,y,T){const E=S/M,R=b/y,P=S/2,F=b/2,L=w/2,N=M+1,I=y+1;let W=0,q=0;const G=new Y;for(let Z=0;Z<I;Z++){const j=Z*R-F;for(let U=0;U<N;U++){const V=U*E-P;G[g]=V*_,G[m]=j*v,G[x]=L,c.push(G.x,G.y,G.z),G[g]=0,G[m]=0,G[x]=w>0?1:-1,h.push(G.x,G.y,G.z),u.push(U/M),u.push(1-Z/y),W+=1}}for(let Z=0;Z<y;Z++)for(let j=0;j<M;j++){const U=d+j+N*Z,V=d+j+N*(Z+1),O=d+(j+1)+N*(Z+1),J=d+(j+1)+N*Z;l.push(U,V,J),l.push(V,O,J),q+=6}a.addGroup(f,q,T),f+=q,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class wl extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const g=[],m=n/2;let x=0;_(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(f,2));function _(){const S=new Y,b=new Y;let w=0;const M=(e-t)/n;for(let y=0;y<=r;y++){const T=[],E=y/r,R=E*(e-t)+t;for(let P=0;P<=s;P++){const F=P/s,L=F*l+a,N=Math.sin(L),I=Math.cos(L);b.x=R*N,b.y=-E*n+m,b.z=R*I,u.push(b.x,b.y,b.z),S.set(N,M,I).normalize(),d.push(S.x,S.y,S.z),f.push(F,1-E),T.push(p++)}g.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){const E=g[T][y],R=g[T+1][y],P=g[T+1][y+1],F=g[T][y+1];(t>0||T!==0)&&(h.push(E,R,F),w+=3),(e>0||T!==r-1)&&(h.push(R,P,F),w+=3)}c.addGroup(x,w,0),x+=w}function v(S){const b=p,w=new Pt,M=new Y;let y=0;const T=S===!0?t:e,E=S===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),p++;const R=p;for(let P=0;P<=s;P++){const L=P/s*l+a,N=Math.cos(L),I=Math.sin(L);M.x=T*I,M.y=m*E,M.z=T*N,u.push(M.x,M.y,M.z),d.push(0,E,0),w.x=N*.5+.5,w.y=I*.5*E+.5,f.push(w.x,w.y),p++}for(let P=0;P<s;P++){const F=b+P,L=R+P;S===!0?h.push(L,L+1,F):h.push(L+1,L,F),y+=3}c.addGroup(x,y,S===!0?1:2),x+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class El extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ye(r,3)),this.setAttribute("normal",new ye(r.slice(),3)),this.setAttribute("uv",new ye(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const v=new Y,S=new Y,b=new Y;for(let w=0;w<e.length;w+=3)f(e[w+0],v),f(e[w+1],S),f(e[w+2],b),l(v,S,b,_)}function l(_,v,S,b){const w=b+1,M=[];for(let y=0;y<=w;y++){M[y]=[];const T=_.clone().lerp(S,y/w),E=v.clone().lerp(S,y/w),R=w-y;for(let P=0;P<=R;P++)P===0&&y===w?M[y][P]=T:M[y][P]=T.clone().lerp(E,P/R)}for(let y=0;y<w;y++)for(let T=0;T<2*(w-y)-1;T++){const E=Math.floor(T/2);T%2===0?(d(M[y][E+1]),d(M[y+1][E]),d(M[y][E])):(d(M[y][E+1]),d(M[y+1][E+1]),d(M[y+1][E]))}}function c(_){const v=new Y;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(_),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function h(){const _=new Y;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];const S=m(_)/2/Math.PI+.5,b=x(_)/Math.PI+.5;o.push(S,1-b)}p(),u()}function u(){for(let _=0;_<o.length;_+=6){const v=o[_+0],S=o[_+2],b=o[_+4],w=Math.max(v,S,b),M=Math.min(v,S,b);w>.9&&M<.1&&(v<.2&&(o[_+0]+=1),S<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,v){const S=_*3;v.x=t[S+0],v.y=t[S+1],v.z=t[S+2]}function p(){const _=new Y,v=new Y,S=new Y,b=new Y,w=new Pt,M=new Pt,y=new Pt;for(let T=0,E=0;T<r.length;T+=9,E+=6){_.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),S.set(r[T+6],r[T+7],r[T+8]),w.set(o[E+0],o[E+1]),M.set(o[E+2],o[E+3]),y.set(o[E+4],o[E+5]),b.copy(_).add(v).add(S).divideScalar(3);const R=m(b);g(w,E+0,_,R),g(M,E+2,v,R),g(y,E+4,S,R)}}function g(_,v,S,b){b<0&&_.x===1&&(o[v]=_.x-1),S.x===0&&S.z===0&&(o[v]=b/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function x(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new El(t.vertices,t.indices,t.radius,t.detail)}}function kp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Uh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Yp(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let d=e;d<s;d+=e){const f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return dr(r,o,e,a,l,c,0),o}function Uh(i,t,e,n,s){let r;if(s===i0(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Bh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Bh(o/n|0,i[o],i[o+1],r);return r&&bs(r,r.next)&&(mr(r),r=r.next),r}function Ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(bs(e,e.next)||be(e.prev,e,e.next)===0)){if(mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function dr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&$p(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Wp(i,n,s,r):Hp(i)){t.push(l.i,i.i,c.i),mr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Vp(Ji(i),t),dr(i,t,e,n,s,r,2)):o===2&&Xp(i,t,e,n,s,r):dr(Ji(i),t,e,n,s,r,1);break}}}function Hp(i){const t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&fr(s,a,r,l,o,c,p.x,p.y)&&be(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Wp(i,t,e,n){const s=i.prev,r=i,o=i.next;if(be(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),g=Math.max(a,l,c),m=Math.max(h,u,d),x=Tl(f,p,t,e,n),_=Tl(g,m,t,e,n);let v=i.prevZ,S=i.nextZ;for(;v&&v.z>=x&&S&&S.z<=_;){if(v.x>=f&&v.x<=g&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&fr(a,h,l,u,c,d,v.x,v.y)&&be(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=f&&S.x<=g&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&fr(a,h,l,u,c,d,S.x,S.y)&&be(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=x;){if(v.x>=f&&v.x<=g&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&fr(a,h,l,u,c,d,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=_;){if(S.x>=f&&S.x<=g&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&fr(a,h,l,u,c,d,S.x,S.y)&&be(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Vp(i,t){let e=i;do{const n=e.prev,s=e.next.next;!bs(n,s)&&Oh(n,e,e.next,s)&&pr(n,s)&&pr(s,n)&&(t.push(n.i,e.i,s.i),mr(e),mr(e.next),e=i=s),e=e.next}while(e!==i);return Ji(e)}function Xp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&t0(o,a)){let l=zh(o,a);o=Ji(o,o.next),l=Ji(l,l.next),dr(o,t,e,n,s,r,0),dr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Yp(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Uh(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Qp(c))}s.sort(Zp);for(let r=0;r<s.length;r++)e=Kp(s[r],e);return e}function Zp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Kp(i,t){const e=qp(i,t);if(!e)return t;const n=zh(e,i);return Ji(n,n.next),Ji(e,e.next)}function qp(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(bs(i,e))return e;do{if(bs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Fh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);pr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Jp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Jp(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function $p(i,t,e,n){let s=i;do s.z===0&&(s.z=Tl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,jp(s)}function jp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Tl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Qp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Fh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function fr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Fh(i,t,e,n,s,r,o,a)}function t0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!e0(i,t)&&(pr(i,t)&&pr(t,i)&&n0(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||bs(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function bs(i,t){return i.x===t.x&&i.y===t.y}function Oh(i,t,e,n){const s=vo(be(i,t,e)),r=vo(be(i,t,n)),o=vo(be(e,n,i)),a=vo(be(e,n,t));return!!(s!==r&&o!==a||s===0&&_o(i,e,t)||r===0&&_o(i,n,t)||o===0&&_o(e,i,n)||a===0&&_o(e,t,n))}function _o(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function vo(i){return i>0?1:i<0?-1:0}function e0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Oh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function pr(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function n0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function zh(i,t){const e=Al(i.i,i.x,i.y),n=Al(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Bh(i,t,e,n){const s=Al(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Al(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function i0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class s0{static triangulate(t,e,n=2){return kp(t,e,n)}}class Mo{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Mo.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Gh(t),kh(n,t);let o=t.length;e.forEach(Gh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,kh(n,e[l]);const a=s0.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Gh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function kh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Rl extends El{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Rl(t.radius,t.detail)}}class Nn extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],g=[],m=[];for(let x=0;x<h;x++){const _=x*d-o;for(let v=0;v<c;v++){const S=v*u-r;p.push(S,-_,0),g.push(0,0,1),m.push(v/a),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let _=0;_<a;_++){const v=_+c*x,S=_+c*(x+1),b=_+1+c*(x+1),w=_+1+c*x;f.push(v,S,w),f.push(S,b,w)}this.setIndex(f),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(g,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Cl extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new Y,d=new Y,f=[],p=[],g=[],m=[];for(let x=0;x<=n;x++){const _=[],v=x/n,S=o+v*a,b=t*Math.cos(S),w=Math.sqrt(t*t-b*b);let M=0;x===0&&o===0?M=.5/e:x===n&&l===Math.PI&&(M=-.5/e);for(let y=0;y<=e;y++){const T=y/e,E=s+T*r;u.x=-w*Math.cos(E),u.y=b,u.z=w*Math.sin(E),p.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(T+M,1-v),_.push(c++)}h.push(_)}for(let x=0;x<n;x++)for(let _=0;_<e;_++){const v=h[x][_+1],S=h[x][_],b=h[x+1][_],w=h[x+1][_+1];(x!==0||o>0)&&f.push(v,S,w),(x!==n-1||l<Math.PI)&&f.push(S,b,w)}this.setIndex(f),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(g,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function ws(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Hh(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Hh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function nn(i){const t={};for(let e=0;e<i.length;e++){const n=ws(i[e]);for(const s in n)t[s]=n[s]}return t}function Hh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function r0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const o0={clone:ws,merge:nn};var a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ve extends li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=l0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=r0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Lt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ie().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class c0 extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Un extends li{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cs,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class h0 extends li{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Lt(16777215),this.specular=new Lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cs,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Nr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class u0 extends li{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Lt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cs,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class So extends li{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cs,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Nr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class d0 extends li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class f0 extends li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ll={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Vh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Vh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Vh(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class p0{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const m0=new p0;class Pl{constructor(t){this.manager=t!==void 0?t:m0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Pl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Es=new WeakMap;class g0 extends Pl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ll.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=Es.get(o);u===void 0&&(u=[],Es.set(o,u)),u.push({onLoad:e,onError:s})}return o}const a=Qs("img");function l(){h(),e&&e(this);const u=Es.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Es.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),Ll.remove(`image:${t}`);const d=Es.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(u)}Es.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ll.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class x0 extends Pl{constructor(t){super(t)}load(t,e,n,s){const r=new Re,o=new g0(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Xh extends He{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Yh extends Xh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Dl=new ie,Zh=new Y,Kh=new Y;class _0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Zh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zh),Kh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Dl,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===js||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yo=new Y,bo=new _n,Vn=new Y;class wo extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(yo,bo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,bo,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(yo,bo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,bo,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Li=new Y,qh=new Pt,Jh=new Pt;class Fn extends wo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return er*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,qh,Jh),e.subVectors(Jh,qh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(tr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class $h extends wo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class v0 extends _0{constructor(){super(new $h(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jh extends Xh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new v0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ts=-90,As=1;class Il extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fn(Ts,As,t,e);s.layers=this.layers,this.add(s);const r=new Fn(Ts,As,t,e);r.layers=this.layers,this.add(r);const o=new Fn(Ts,As,t,e);o.layers=this.layers,this.add(o);const a=new Fn(Ts,As,t,e);a.layers=this.layers,this.add(a);const l=new Fn(Ts,As,t,e);l.layers=this.layers,this.add(l);const c=new Fn(Ts,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=g,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class M0 extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const Qh=new ie;class S0{constructor(t,e,n=0,s=1/0){this.ray=new io(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new sl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):de("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Qh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qh),this}intersectObject(t,e=!0,n=[]){return Nl(t,this,n,e),n.sort(tu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Nl(t[s],this,n,e);return n.sort(tu),n}}function tu(i,t){return i.distance-t.distance}function Nl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Nl(r[o],t,e,!0)}}class Eo{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ne(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const wc=class wc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};wc.prototype.isMatrix2=!0;let eu=wc;class y0 extends wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function nu(i,t,e,n){const s=b0(n);switch(e){case Wc:return i*t;case Fr:return i*t/s.components*s.byteLength;case _a:return i*t/s.components*s.byteLength;case yi:return i*t*2/s.components*s.byteLength;case va:return i*t*2/s.components*s.byteLength;case Vc:return i*t*3/s.components*s.byteLength;case Hn:return i*t*4/s.components*s.byteLength;case Ma:return i*t*4/s.components*s.byteLength;case Or:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Br:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:case wa:return Math.max(i,16)*Math.max(t,8)/4;case Sa:case ba:return Math.max(i,8)*Math.max(t,8)/2;case Ea:case Ta:case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Aa:case kr:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xa:case Ya:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ka:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hr:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function b0(i){switch(i){case hn:case Bc:return{byteLength:1,components:1};case $s:case Gc:case An:return{byteLength:2,components:1};case ga:case xa:return{byteLength:2,components:4};case kn:case ma:case Tn:return{byteLength:4,components:1};case kc:case Hc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_i}})),typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_i);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function iu(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function w0(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],g=u[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const g=u[f];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var E0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T0=`#ifdef USE_ALPHAHASH
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
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P0=`#ifdef USE_AOMAP
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
#endif`,D0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I0=`#ifdef USE_BATCHING
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
#endif`,N0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,z0=`#ifdef USE_IRIDESCENCE
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
#endif`,B0=`#ifdef USE_BUMPMAP
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,K0=`#define PI 3.141592653589793
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
} // validated`,q0=`vec3 transformedNormal = objectNormal;
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
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,um=`#ifdef USE_GRADIENTMAP
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
}`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,gm=`#ifdef USE_ENVMAP
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
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sm=`PhysicalMaterial material;
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
#endif`,ym=`uniform sampler2D dfgLUT;
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
}`,bm=`
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nm=`#if defined( USE_POINTS_UV )
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
#endif`,Um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
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
#endif`,Bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`#ifdef USE_MORPHTARGETS
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
#endif`,km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
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
#endif`,Km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cg=`float getShadowMask() {
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
}`,hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ug=`#ifdef USE_SKINNING
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
#endif`,dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,vg=`#ifdef USE_TRANSMISSION
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jt={alphahash_fragment:E0,alphahash_pars_fragment:T0,alphamap_fragment:A0,alphamap_pars_fragment:R0,alphatest_fragment:C0,alphatest_pars_fragment:L0,aomap_fragment:P0,aomap_pars_fragment:D0,batching_pars_vertex:I0,batching_vertex:N0,begin_vertex:U0,beginnormal_vertex:F0,bsdfs:O0,iridescence_fragment:z0,bumpmap_pars_fragment:B0,clipping_planes_fragment:G0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:H0,clipping_planes_vertex:W0,color_fragment:V0,color_pars_fragment:X0,color_pars_vertex:Y0,color_vertex:Z0,common:K0,defaultnormal_vertex:q0,displacementmap_pars_vertex:J0,displacementmap_vertex:$0,emissivemap_fragment:j0,emissivemap_pars_fragment:Q0,colorspace_fragment:tm,colorspace_pars_fragment:em,envmap_fragment:nm,envmap_common_pars_fragment:im,envmap_pars_fragment:sm,envmap_pars_vertex:rm,envmap_physical_pars_fragment:gm,envmap_vertex:om,fog_vertex:am,fog_pars_vertex:lm,fog_fragment:cm,fog_pars_fragment:hm,gradientmap_pars_fragment:um,lightmap_pars_fragment:dm,lights_lambert_fragment:fm,lights_lambert_pars_fragment:pm,lights_pars_begin:mm,lights_toon_fragment:xm,lights_toon_pars_fragment:_m,lights_phong_fragment:vm,lights_phong_pars_fragment:Mm,lights_physical_fragment:Sm,lights_physical_pars_fragment:ym,lights_fragment_begin:bm,lights_fragment_maps:wm,lights_fragment_end:Em,lightprobes_pars_fragment:Tm,logdepthbuf_fragment:Am,logdepthbuf_pars_fragment:Rm,logdepthbuf_pars_vertex:Cm,logdepthbuf_vertex:Lm,map_fragment:Pm,map_pars_fragment:Dm,map_particle_fragment:Im,map_particle_pars_fragment:Nm,metalnessmap_fragment:Um,metalnessmap_pars_fragment:Fm,morphinstance_vertex:Om,morphcolor_vertex:zm,morphnormal_vertex:Bm,morphtarget_pars_vertex:Gm,morphtarget_vertex:km,normal_fragment_begin:Hm,normal_fragment_maps:Wm,normal_pars_fragment:Vm,normal_pars_vertex:Xm,normal_vertex:Ym,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Km,clearcoat_normal_fragment_maps:qm,clearcoat_pars_fragment:Jm,iridescence_pars_fragment:$m,opaque_fragment:jm,packing:Qm,premultiplied_alpha_fragment:tg,project_vertex:eg,dithering_fragment:ng,dithering_pars_fragment:ig,roughnessmap_fragment:sg,roughnessmap_pars_fragment:rg,shadowmap_pars_fragment:og,shadowmap_pars_vertex:ag,shadowmap_vertex:lg,shadowmask_pars_fragment:cg,skinbase_vertex:hg,skinning_pars_vertex:ug,skinning_vertex:dg,skinnormal_vertex:fg,specularmap_fragment:pg,specularmap_pars_fragment:mg,tonemapping_fragment:gg,tonemapping_pars_fragment:xg,transmission_fragment:_g,transmission_pars_fragment:vg,uv_pars_fragment:Mg,uv_pars_vertex:Sg,uv_vertex:yg,worldpos_vertex:bg,background_vert:`varying vec2 vUv;
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
}`},Tt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Xn={basic:{uniforms:nn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:nn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:nn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:nn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:nn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:nn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:nn([Tt.points,Tt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:nn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:nn([Tt.common,Tt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:nn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:nn([Tt.sprite,Tt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:nn([Tt.common,Tt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:nn([Tt.lights,Tt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Xn.physical={uniforms:nn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const To={r:0,b:0,g:0},wg=new ie,su=new Zt;su.set(-1,0,0,0,1,0,0,0,1);function Eg(i,t,e,n,s,r){const o=new Lt(0);let a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let v=_.isScene===!0?_.background:null;if(v&&v.isTexture){const S=_.backgroundBlurriness>0;v=t.get(v,S)}return v}function p(_){let v=!1;const S=f(_);S===null?m(o,a):S&&S.isColor&&(m(S,1),v=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,v){const S=f(v);S&&S.isCubeTexture?(c===void 0&&(c=new te(new qi(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:ws(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(v.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(su),c.material.toneMapped=he.getTransfer(S.colorSpace)!==ge,(h!==S||u!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new te(new Nn(2,2),new Ve({name:"BackgroundMaterial",uniforms:ws(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=he.getTransfer(S.colorSpace)!==ge,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,v){_.getRGB(To,Wh(i)),e.buffers.color.setClear(To.r,To.g,To.b,v,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),a=v,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:g,dispose:x}}function Tg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(R,P,F,L,N){let I=!1;const W=u(R,L,F,P);r!==W&&(r=W,c(r.object)),I=f(R,L,F,N),I&&p(R,L,F,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,S(R,P,F,L),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function u(R,P,F,L){const N=L.wireframe===!0;let I=n[P.id];I===void 0&&(I={},n[P.id]=I);const W=R.isInstancedMesh===!0?R.id:0;let q=I[W];q===void 0&&(q={},I[W]=q);let G=q[F.id];G===void 0&&(G={},q[F.id]=G);let Z=G[N];return Z===void 0&&(Z=d(l()),G[N]=Z),Z}function d(R){const P=[],F=[],L=[];for(let N=0;N<e;N++)P[N]=0,F[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:L,object:R,attributes:{},index:null}}function f(R,P,F,L){const N=r.attributes,I=P.attributes;let W=0;const q=F.getAttributes();for(const G in q)if(q[G].location>=0){const j=N[G];let U=I[G];if(U===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),j===void 0||j.attribute!==U||U&&j.data!==U.data)return!0;W++}return r.attributesNum!==W||r.index!==L}function p(R,P,F,L){const N={},I=P.attributes;let W=0;const q=F.getAttributes();for(const G in q)if(q[G].location>=0){let j=I[G];j===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(j=R.instanceColor));const U={};U.attribute=j,j&&j.data&&(U.data=j.data),N[G]=U,W++}r.attributes=N,r.attributesNum=W,r.index=L}function g(){const R=r.newAttributes;for(let P=0,F=R.length;P<F;P++)R[P]=0}function m(R){x(R,0)}function x(R,P){const F=r.newAttributes,L=r.enabledAttributes,N=r.attributeDivisors;F[R]=1,L[R]===0&&(i.enableVertexAttribArray(R),L[R]=1),N[R]!==P&&(i.vertexAttribDivisor(R,P),N[R]=P)}function _(){const R=r.newAttributes,P=r.enabledAttributes;for(let F=0,L=P.length;F<L;F++)P[F]!==R[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function v(R,P,F,L,N,I,W){W===!0?i.vertexAttribIPointer(R,P,F,N,I):i.vertexAttribPointer(R,P,F,L,N,I)}function S(R,P,F,L){g();const N=L.attributes,I=F.getAttributes(),W=P.defaultAttributeValues;for(const q in I){const G=I[q];if(G.location>=0){let Z=N[q];if(Z===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor)),Z!==void 0){const j=Z.normalized,U=Z.itemSize,V=t.get(Z);if(V===void 0)continue;const O=V.buffer,J=V.type,et=V.bytesPerElement,st=J===i.INT||J===i.UNSIGNED_INT||Z.gpuType===ma;if(Z.isInterleavedBufferAttribute){const ct=Z.data,St=ct.isInterleavedBuffer===!0?ct.stride:ct.itemSize,Nt=Z.offset;if(ct.isInstancedInterleavedBuffer||ct.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)x(G.location+rt,ct.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let rt=0;rt<G.locationSize;rt++)m(G.location+rt);i.bindBuffer(i.ARRAY_BUFFER,O);for(let rt=0;rt<G.locationSize;rt++)v(G.location+rt,U/G.locationSize,J,j,St*et,(Nt+U/G.locationSize*rt)*et,st)}else{if(Z.isInstancedBufferAttribute){for(let ct=0;ct<G.locationSize;ct++)x(G.location+ct,Z.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ct=0;ct<G.locationSize;ct++)m(G.location+ct);i.bindBuffer(i.ARRAY_BUFFER,O);for(let ct=0;ct<G.locationSize;ct++)v(G.location+ct,U/G.locationSize,J,j,U*et,U/G.locationSize*ct*et,st)}}else if(W!==void 0){const j=W[q];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(G.location,j);break;case 3:i.vertexAttrib3fv(G.location,j);break;case 4:i.vertexAttrib4fv(G.location,j);break;default:i.vertexAttrib1fv(G.location,j)}}}}_()}function b(){T();for(const R in n){const P=n[R];for(const F in P){const L=P[F];for(const N in L){const I=L[N];for(const W in I)h(I[W].object),delete I[W];delete L[N]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;const P=n[R.id];for(const F in P){const L=P[F];for(const N in L){const I=L[N];for(const W in I)h(I[W].object),delete I[W];delete L[N]}}delete n[R.id]}function M(R){for(const P in n){const F=n[P];for(const L in F){const N=F[L];if(N[R.id]===void 0)continue;const I=N[R.id];for(const W in I)h(I[W].object),delete I[W];delete N[R.id]}}}function y(R){for(const P in n){const F=n[P],L=R.isInstancedMesh===!0?R.id:0,N=F[L];if(N!==void 0){for(const I in N){const W=N[I];for(const q in W)h(W[q].object),delete W[q];delete N[I]}delete F[L],Object.keys(F).length===0&&delete n[P]}}}function T(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:M,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function Ag(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Rg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(M){return!(M!==Hn&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const y=M===An&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==hn&&M!==Tn&&!y&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:S,maxSamples:b,samples:w}}function Cg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Wn,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,x=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{const _=r?0:n,v=_*4;let S=x.clippingState||null;l.value=S,S=h(p,d,v,f);for(let b=0;b!==v;++b)S[b]=e[b];x.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,p!==!0||m===null){const x=f+g*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<x)&&(m=new Float32Array(x));for(let v=0,S=f;v!==g;++v,S+=4)o.copy(u[v]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}class Ul extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Dh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qi(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:os});r.uniforms.tEquirect.value=e;const o=new te(s,r),a=e.minFilter;return e.minFilter===En&&(e.minFilter=ke),new Il(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ru=256,Lg=3,Pg=20,ou=256,au=16,Dg=3,Ig=new Y,Ng=new Lt;class Ao{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Il(1,10,null),this._boxMesh=new te(new qi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Ig}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,g=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(t.background=l.getClearColor(Ng));const m=new Il(n,s,h);return m.position.copy(a),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=g,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ru,Qc(t))}_fromTexture(t,e){t.mapping===ls||t.mapping===qs?this._setSize(t.image.length===0?ru:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=lu(t,!1,!1),n=Math.log2(t)-Lg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=lu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ls||t.mapping===qs?(this._cubemapMaterial===null&&(this._cubemapMaterial=hu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=cu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Ug(),this._integrationMaterial=Fg());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/au);for(let o=0;o<=n;o++){const a=Ao.lodToRoughness(o,n);if(o>n-Dg)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(ou*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Og());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function lu(i,t,e){return new Ul(i,{minFilter:En,generateMipmaps:t,type:An,colorSpace:Wr,depthBuffer:e})}function gr(i,t,e){return new Ve({name:i,uniforms:t,vertexShader:jt.cube_vert,fragmentShader:e,side:en,blending:os,depthTest:!1,depthWrite:!1})}function Ug(){return gr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ou}u

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
	`)}function Fg(){return gr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:au}},`

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
	`)}function Og(){return gr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Pg}
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
	`)}function cu(){return gr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function hu(){return gr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function zg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===ua||f===da)if(t.has(d)){const p=t.get(d).texture;return a(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const g=new Ul(p.height);return g.fromEquirectangularTexture(i,d),t.set(d,g),d.addEventListener("dispose",c),a(g.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,p=f===ua||f===da,g=f===ls||f===qs;if(p||g){let m=e.get(d);const x=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Ao(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const _=d.image;return p&&_&&_.height>0||g&&_&&l(_)?(n===null&&(n=new Ao(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===ua?d.mapping=ls:f===da&&(d.mapping=qs),d}function l(d){let f=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&f++;return f===p}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Bg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Xr("WebGLRenderer: "+n+" extension not supported."),s}}}function Gg(i,t,e,n){const s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);const g=r.get(p);g&&(t.remove(g),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,g){return s[g.id]!==void 0||(g.addEventListener("dispose",a),s[g.id]=new WeakRef(g),o.register(g,g.id,g),e.memory.geometries++),g}function h(p){const g=p.attributes;for(const m in g)t.update(g[m],i.ARRAY_BUFFER)}function u(p){const g=p.index,m=p.attributes.position;let x=0;if(m===void 0)return;const _=g!==null?g.array.length:m.array.length/3-1,v=m.count>=65535?xh:gh,S=new v(Math.ceil(_/3)*6,1),b=S.array;if(g!==null){const M=g.array;x=g.version;for(let y=0,T=0;y<_;y+=3){const E=M[y+0],R=M[y+1],P=M[y+2];b[T++]=E,b[T++]=R,b[T++]=R,b[T++]=P,b[T++]=P,b[T++]=E}}else{x=m.version;for(let M=0,y=0;M<_;M+=3){const T=M+0,E=M+1,R=M+2;b[y++]=T,b[y++]=E,b[y++]=E,b[y++]=R,b[y++]=R,b[y++]=T}}S.version=x;const w=r.get(p);w&&t.remove(w),r.set(p,S)}function d(p){const g=r.get(p);if(g){const m=p.index;m!==null&&g.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(const p in s){const g=s[p].deref();g!==void 0&&l(g)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function kg(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let g=0;for(let m=0;m<f;m++)g+=d[m];e.update(g,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Hg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:de("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Wg(i,t,e){const n=new WeakMap,s=new Se;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let T=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),p===!0&&(v=2),g===!0&&(v=3);let S=a.attributes.position.count*v,b=1;S>t.maxTextureSize&&(b=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const w=new Float32Array(S*b*4*u),M=new rh(w,S,b,u);M.type=Tn,M.needsUpdate=!0;const y=v*4;for(let E=0;E<u;E++){const R=m[E],P=x[E],F=_[E],L=S*b*4*E;for(let N=0;N<R.count;N++){const I=N*y;f===!0&&(s.fromBufferAttribute(R,N),w[L+I+0]=s.x,w[L+I+1]=s.y,w[L+I+2]=s.z,w[L+I+3]=0),p===!0&&(s.fromBufferAttribute(P,N),w[L+I+4]=s.x,w[L+I+5]=s.y,w[L+I+6]=s.z,w[L+I+7]=0),g===!0&&(s.fromBufferAttribute(F,N),w[L+I+8]=s.x,w[L+I+9]=s.y,w[L+I+10]=s.z,w[L+I+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:M,size:new Pt(S,b)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Vg(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const Xg={[Dc]:"LINEAR_TONE_MAPPING",[Ic]:"REINHARD_TONE_MAPPING",[Nc]:"CINEON_TONE_MAPPING",[Uc]:"ACES_FILMIC_TONE_MAPPING",[Oc]:"AGX_TONE_MAPPING",[ha]:"NEUTRAL_TONE_MAPPING",[Fc]:"CUSTOM_TONE_MAPPING"};function Yg(i,t,e,n,s,r){const o=new Cn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new Ce;h.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ye([0,2,0,0,2,0],2));const u=new c0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new te(h,u),f=new $h(-1,1,1,-1,0,1);let p=null,g=null,m=!1,x,_=null,v=[],S=!1;this.setSize=function(b,w){o.setSize(b,w),a!==null&&a.setSize(b,w),l!==null&&l.setSize(b,w);for(let M=0;M<v.length;M++){const y=v[M];y.setSize&&y.setSize(b,w)}},this.setEffects=function(b){v=b,S=v.length>0&&v[0].isRenderPass===!0;const w=o.width,M=o.height;v.length>0&&a===null&&(a=new Cn(w,M,{type:An,depthBuffer:!1,stencilBuffer:!1}),l=new Cn(w,M,{type:An,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&v.some(T=>T.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&c===null&&(c=new Ki(w,M),r===!0&&(c.format=ei,c.type=ki)),o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let T=0;T<v.length;T++){const E=v[T];E.setSize&&E.setSize(w,M),y&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(b,w){if(m||b.toneMapping===ti&&v.length===0)return!1;if(_=w,w!==null){const M=w.width,y=w.height;(o.width!==M||o.height!==y)&&this.setSize(M,y)}return S===!1&&b.setRenderTarget(o),x=b.toneMapping,b.toneMapping=ti,!0},this.hasRenderPass=function(){return S},this.end=function(b,w){b.toneMapping=x,m=!0;let M=o,y=a;for(let T=0;T<v.length;T++){const E=v[T];E.enabled!==!1&&(E.render(b,y,M,w),E.needsSwap!==!1&&(M=y,y=y===a?l:a))}if(p!==b.outputColorSpace||g!==b.toneMapping){p=b.outputColorSpace,g=b.toneMapping,u.defines={},he.getTransfer(p)===ge&&(u.defines.SRGB_TRANSFER="");const T=Xg[g];T&&(u.defines[T]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(_),b.render(d,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const uu=new Re,du=new Ki(1,1),fu=new Ih(1),pu=new rh,mu=new Mp,gu=new Dh,xu=[],_u=[],vu=new Float32Array(16),Mu=new Float32Array(9),Su=new Float32Array(4);function Rs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=xu[s];if(r===void 0&&(r=new Float32Array(s),xu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ro(i,t){let e=_u[t];e===void 0&&(e=new Int32Array(t),_u[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function Jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function $g(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ze(e,n))return;Su.set(n),i.uniformMatrix2fv(this.addr,!1,Su),Be(e,n)}}function jg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ze(e,n))return;Mu.set(n),i.uniformMatrix3fv(this.addr,!1,Mu),Be(e,n)}}function Qg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ze(e,n))return;vu.set(n),i.uniformMatrix4fv(this.addr,!1,vu),Be(e,n)}}function tx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ex(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function nx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function ix(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function sx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function ox(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function ax(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function Co(i){return i.version===0&&(i.compareFunction=Zc,i.needsUpdate=!0),i}function lx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Co(du):r=uu,e.setTexture2D(t||r,s)}function cx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||mu,s)}function hx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Co(fu):r=gu,e.setTextureCube(t||r,s)}function ux(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||pu,s)}function dx(i){switch(i){case 5126:return Zg;case 35664:return Kg;case 35665:return qg;case 35666:return Jg;case 35674:return $g;case 35675:return jg;case 35676:return Qg;case 5124:case 35670:return tx;case 35667:case 35671:return ex;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return sx;case 36294:return rx;case 36295:return ox;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return ux}}function fx(i,t){i.uniform1fv(this.addr,t)}function px(i,t){const e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function mx(i,t){const e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function gx(i,t){const e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function xx(i,t){const e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _x(i,t){const e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vx(i,t){const e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Mx(i,t){i.uniform1iv(this.addr,t)}function Sx(i,t){i.uniform2iv(this.addr,t)}function yx(i,t){i.uniform3iv(this.addr,t)}function bx(i,t){i.uniform4iv(this.addr,t)}function wx(i,t){i.uniform1uiv(this.addr,t)}function Ex(i,t){i.uniform2uiv(this.addr,t)}function Tx(i,t){i.uniform3uiv(this.addr,t)}function Ax(i,t){i.uniform4uiv(this.addr,t)}function Rx(i,t,e){const n=this.cache,s=t.length,r=Ro(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Co(du):o=uu;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Cx(i,t,e){const n=this.cache,s=t.length,r=Ro(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||mu,r[o])}function Lx(i,t,e){const n=this.cache,s=t.length,r=Ro(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Co(fu):o=gu;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Px(i,t,e){const n=this.cache,s=t.length,r=Ro(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||pu,r[o])}function Dx(i){switch(i){case 5126:return fx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return xx;case 35675:return _x;case 35676:return vx;case 5124:case 35670:return Mx;case 35667:case 35671:return Sx;case 35668:case 35672:return yx;case 35669:case 35673:return bx;case 5125:return wx;case 36294:return Ex;case 36295:return Tx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Lx;case 36289:case 36303:case 36311:case 36292:return Px}}class Ix{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dx(e.type)}}class Nx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dx(e.type)}}class Ux{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Fl=/(\w+)(\])?(\[|\.)?/g;function yu(i,t){i.seq.push(t),i.map[t.id]=t}function Fx(i,t,e){const n=i.name,s=n.length;for(Fl.lastIndex=0;;){const r=Fl.exec(n),o=Fl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){yu(e,c===void 0?new Ix(a,i,t):new Nx(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Ux(a),yu(e,u)),e=u}}}class Lo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Fx(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function bu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ox=37297;let zx=0;function Bx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const wu=new Zt;function Gx(i){he._getMatrix(wu,he.workingColorSpace,i);const t=`mat3( ${wu.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Vr:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Eu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Bx(i.getShaderSource(t),a)}else return r}function kx(i,t){const e=Gx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Hx={[Dc]:"Linear",[Ic]:"Reinhard",[Nc]:"Cineon",[Uc]:"ACESFilmic",[Oc]:"AgX",[ha]:"Neutral",[Fc]:"Custom"};function Wx(i,t){const e=Hx[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Po=new Y;function Vx(){he.getLuminanceCoefficients(Po);const i=Po.x.toFixed(4),t=Po.y.toFixed(4),e=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function Yx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function xr(i){return i!==""}function Tu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Au(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(i){return i.replace(Kx,qx)}function qx(i,t){const e=jt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ol(e)}const Jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ru(i){return i.replace(Jx,$x)}function $x(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const jx={[Xs]:"SHADOWMAP_TYPE_PCF",[Ys]:"SHADOWMAP_TYPE_VSM"};function Qx(i){return jx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const t1={[qs]:"ENVMAP_MODE_REFRACTION"};function e1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":t1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const n1={[Nr]:"ENVMAP_BLENDING_MULTIPLY",[zf]:"ENVMAP_BLENDING_MIX",[Bf]:"ENVMAP_BLENDING_ADD"};function i1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":n1[i.combine]||"ENVMAP_BLENDING_NONE"}function s1(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Qx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=e1(e),u=i1(e),d=Xx(e),f=Yx(r),p=s.createProgram();let g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(xr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(xr).join(`
`),m.length>0&&(m+=`
`)):(g=[Cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),m=[Cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?jt.tonemapping_pars_fragment:"",e.toneMapping!==ti?Wx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,kx("linearToOutputTexel",e.outputColorSpace),Vx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),o=Ol(o),o=Tu(o,e),o=Au(o,e),a=Ol(a),a=Tu(a,e),a=Au(a,e),o=Ru(o),a=Ru(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=x+g+o,v=x+m+a,S=bu(s,s.VERTEX_SHADER,_),b=bu(s,s.FRAGMENT_SHADER,v);s.attachShader(p,S),s.attachShader(p,b),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function w(E){if(i.debug.checkShaderErrors){const R=s.getProgramInfoLog(p)||"",P=s.getShaderInfoLog(S)||"",F=s.getShaderInfoLog(b)||"",L=R.trim(),N=P.trim(),I=F.trim();let W=!0,q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,S,b);else{const G=Eu(s,S,"vertex"),Z=Eu(s,b,"fragment");de("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+L+`
`+G+`
`+Z)}else L!==""?Vt("WebGLProgram: Program Info Log:",L):(N===""||I==="")&&(q=!1);q&&(E.diagnostics={runnable:W,programLog:L,vertexShader:{log:N,prefix:g},fragmentShader:{log:I,prefix:m}})}s.deleteShader(S),s.deleteShader(b),M=new Lo(s,p),y=Zx(s,p)}let M;this.getUniforms=function(){return M===void 0&&w(this),M};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(p,Ox)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zx++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=b,this}let r1=0;class o1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new a1(t),e.set(t,n)),n}}class a1{constructor(t){this.id=r1++,this.code=t,this.usedTimes=0}}function l1(i){return i===yi||i===kr||i===Hr}function c1(i,t,e,n,s,r){const o=new sl,a=new o1,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,y,T,E,R,P){const F=E.fog,L=R.geometry,N=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?E.environment:null,I=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,W=t.get(M.envMap||N,I),q=d[M.type];let G=n.precision;M.precision!==null&&(G=n.getMaxPrecision(M.precision),G!==M.precision&&Vt("WebGLProgram.getParameters:",M.precision,"not supported, using",G,"instead."));const Z=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,j=Z!==void 0?Z.length:0;let U=0;L.morphAttributes.position!==void 0&&(U=1),L.morphAttributes.normal!==void 0&&(U=2),L.morphAttributes.color!==void 0&&(U=3);let V,O,J,et;if(q){const At=Xn[q];V=At.vertexShader,O=At.fragmentShader}else{V=M.vertexShader,O=M.fragmentShader;const At=a.getVertexShaderStage(M),xe=a.getFragmentShaderStage(M);a.update(M,At,xe),J=At.id,et=xe.id}const st=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),St=R.isInstancedMesh===!0,Nt=R.isBatchedMesh===!0,rt=!!M.map,ot=!!M.matcap,Ct=!!W,Bt=Ct&&W.isPMREMTexture===!0,se=!!M.aoMap,qt=!!M.lightMap,_e=!!M.bumpMap&&M.wireframe===!1,dt=!!M.normalMap,vt=!!M.displacementMap,yt=!!M.emissiveMap,Kt=!!M.metalnessMap,Dt=!!M.roughnessMap,oe=M.anisotropy>0,B=M.clearcoat>0,Yt=M.diffuseRoughness>0,Wt=M.dispersion>0,Jt=M.retroreflectivity>0,mt=M.iridescence>0,pe=M.sheen>0,It=M.transmission>0,kt=oe&&!!M.anisotropyMap,D=B&&!!M.clearcoatMap,A=B&&!!M.clearcoatNormalMap,K=B&&!!M.clearcoatRoughnessMap,ut=Yt&&!!M.diffuseRoughnessMap,it=mt&&!!M.iridescenceMap,pt=mt&&!!M.iridescenceThicknessMap,xt=pe&&!!M.sheenColorMap,nt=pe&&!!M.sheenRoughnessMap,at=!!M.specularMap,_t=!!M.specularColorMap,k=!!M.specularIntensityMap,ht=It&&!!M.transmissionMap,lt=It&&!!M.thicknessMap,bt=!!M.gradientMap,gt=!!M.alphaMap,Mt=M.alphaTest>0,Gt=!!M.alphaHash,ee=!!M.extensions;let ft=ti;M.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ft=i.toneMapping);const Ht=Bt?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,Qt={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:V,fragmentShader:O,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:et,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:G,batching:Nt,batchingColor:Nt&&R._colorsTexture!==null,instancing:St,instancingColor:St&&R.instanceColor!==null,instancingMorph:St&&R.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:rt,matcap:ot,envMap:Ct,envMapMode:Ct&&W.mapping,envMapPMREM:Bt,envMapMaxLod:Bt?Ht.length-1:null,envMapSize:Bt?Ht[0].width:null,aoMap:se,lightMap:qt,bumpMap:_e,normalMap:dt,displacementMap:vt,emissiveMap:yt,normalMapObjectSpace:dt&&M.normalMapType===Hf,normalMapTangentSpace:dt&&M.normalMapType===cs,packedNormalMap:dt&&M.normalMapType===cs&&l1(M.normalMap.format),metalnessMap:Kt,roughnessMap:Dt,anisotropy:oe,anisotropyMap:kt,clearcoat:B,clearcoatMap:D,clearcoatNormalMap:A,clearcoatRoughnessMap:K,diffuseRoughness:Yt,diffuseRoughnessMap:ut,dispersion:Wt,retroreflection:Jt,iridescence:mt,iridescenceMap:it,iridescenceThicknessMap:pt,sheen:pe,sheenColorMap:xt,sheenRoughnessMap:nt,specularMap:at,specularColorMap:_t,specularIntensityMap:k,transmission:It,transmissionMap:ht,thicknessMap:lt,gradientMap:bt,opaque:M.transparent===!1&&M.blending===Zs&&M.alphaToCoverage===!1,alphaMap:gt,alphaTest:Mt,alphaHash:Gt,combine:M.combine,mapUv:rt&&f(M.map.channel),aoMapUv:se&&f(M.aoMap.channel),lightMapUv:qt&&f(M.lightMap.channel),bumpMapUv:_e&&f(M.bumpMap.channel),normalMapUv:dt&&f(M.normalMap.channel),displacementMapUv:vt&&f(M.displacementMap.channel),emissiveMapUv:yt&&f(M.emissiveMap.channel),metalnessMapUv:Kt&&f(M.metalnessMap.channel),roughnessMapUv:Dt&&f(M.roughnessMap.channel),anisotropyMapUv:kt&&f(M.anisotropyMap.channel),clearcoatMapUv:D&&f(M.clearcoatMap.channel),clearcoatNormalMapUv:A&&f(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&f(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ut&&f(M.diffuseRoughnessMap.channel),iridescenceMapUv:it&&f(M.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&f(M.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&f(M.sheenColorMap.channel),sheenRoughnessMapUv:nt&&f(M.sheenRoughnessMap.channel),specularMapUv:at&&f(M.specularMap.channel),specularColorMapUv:_t&&f(M.specularColorMap.channel),specularIntensityMapUv:k&&f(M.specularIntensityMap.channel),transmissionMapUv:ht&&f(M.transmissionMap.channel),thicknessMapUv:lt&&f(M.thicknessMap.channel),alphaMapUv:gt&&f(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(dt||oe),vertexNormals:!!L.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!L.attributes.uv&&(rt||gt),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||L.attributes.normal===void 0&&dt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ct,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:U,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:P.filter(At=>At.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:rt&&M.map.isVideoTexture===!0&&he.getTransfer(M.map.colorSpace)===ge,decodeVideoTextureEmissive:yt&&M.emissiveMap.isVideoTexture===!0&&he.getTransfer(M.emissiveMap.colorSpace)===ge,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ae,flipSided:M.side===en,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ee&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&M.extensions.multiDraw===!0||Nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Qt.vertexUv1s=l.has(1),Qt.vertexUv2s=l.has(2),Qt.vertexUv3s=l.has(3),l.clear(),Qt}function g(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const T in M.defines)y.push(T),y.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(m(y,M),x(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function m(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapPMREM),M.push(y.envMapMaxLod),M.push(y.envMapSize),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.diffuseRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.numSunLights),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numSunLightShadows),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.numLightProbeGrids),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function _(M){const y=d[M.type];let T;if(y){const E=Xn[y];T=o0.clone(E.uniforms)}else T=M.uniforms;return T}function v(M,y){let T=h.get(y);return T!==void 0?++T.usedTimes:(T=new s1(i,y,M,s),c.push(T),h.set(y,T)),T}function S(M){if(--M.usedTimes===0){const y=c.indexOf(M);c[y]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function b(M){a.remove(M)}function w(){a.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:_,acquireProgram:v,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:w}}function h1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function u1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Lu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,g,m,x){let _=i[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:g,renderOrder:d.renderOrder,z:m,group:x},i[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=p,_.materialVariant=o(d),_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=m,_.group=x),t++,_}function l(d,f,p,g,m,x,_){_.reversedDepth===!0&&(m=-m);const v=a(d,f,p,g,m,x);p.transmission>0?n.push(v):p.transparent===!0?s.push(v):e.push(v)}function c(d,f,p,g,m,x){const _=a(d,f,p,g,m,x);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):e.unshift(_)}function h(d,f){e.length>1&&e.sort(d||u1),n.length>1&&n.sort(f||Lu),s.length>1&&s.sort(f||Lu)}function u(){for(let d=t,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function d1(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Pu,i.set(n,[o])):s>=r.length?(o=new Pu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function f1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Y,color:new Lt};break;case"SpotLight":e={position:new Y,direction:new Y,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[t.id]=e,e}}}function p1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let m1=0;function g1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function x1(i){const t=new f1,e=p1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const s=new Y,r=new ie,o=new ie;function a(c){let h=0,u=0,d=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,p=0,g=0,m=0,x=0,_=0,v=0,S=0,b=0,w=0,M=0,y=0,T=0,E=0;c.sort(g1);for(let P=0,F=c.length;P<F;P++){const L=c[P],N=L.color,I=L.intensity,W=L.distance;let q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===yi?q=L.shadow.map.texture:q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=N.r*I,u+=N.g*I,d+=N.b*I;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],I);E++}else if(L.isSunLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,j=e.get(L);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[p]=j,n.sunShadowMap[p]=q;const U=Z.getViewportCount();for(let V=0;V<U;V++)n.sunShadowMatrix[g+V]=Z.getMatrix(V),n.sunShadowCascade[g+V]=Z._cascadeData[V];g+=U,p++}n.sun[f]=G,f++}else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,j=e.get(L);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=G,m++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(N).multiplyScalar(I),G.distance=W,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[_]=G;const Z=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,Z.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[_]=Z.matrix,L.castShadow){const j=e.get(L);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=q,M++}_++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(N).multiplyScalar(I),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[v]=G,v++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const Z=L.shadow,j=e.get(L);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,n.pointShadow[x]=j,n.pointShadowMap[x]=q,n.pointShadowMatrix[x]=L.shadow.matrix,w++}n.point[x]=G,x++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(I),G.groundColor.copy(L.groundColor).multiplyScalar(I),n.hemi[S]=G,S++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.sunLength!==f||R.directionalLength!==m||R.pointLength!==x||R.spotLength!==_||R.rectAreaLength!==v||R.hemiLength!==S||R.numSunShadows!==p||R.numDirectionalShadows!==b||R.numPointShadows!==w||R.numSpotShadows!==M||R.numSpotMaps!==y||R.numLightProbes!==E)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=v,n.point.length=x,n.hemi.length=S,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,R.sunLength=f,R.directionalLength=m,R.pointLength=x,R.spotLength=_,R.rectAreaLength=v,R.hemiLength=S,R.numSunShadows=p,R.numDirectionalShadows=b,R.numPointShadows=w,R.numSpotShadows=M,R.numSpotMaps=y,R.numLightProbes=E,n.version=m1++)}function l(c,h){let u=0,d=0,f=0,p=0,g=0,m=0;const x=h.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const S=c[_];if(S.isSunLight){const b=n.sun[u];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(x),u++}else if(S.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),d++}else if(S.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),p++}else if(S.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(x),o.identity(),r.copy(S.matrixWorld),r.premultiply(x),o.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(x),f++}else if(S.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:n}}function Du(i){const t=new x1(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function _1(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Du(i),t.set(s,[a])):r>=o.length?(a=new Du(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const v1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M1=`uniform sampler2D shadow_pass;
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
}`,S1=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],y1=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Iu=new ie,_r=new Y,zl=new Y;function b1(i,t,e){let n=new hr;const s=new Pt,r=new Pt,o=new Se,a=new d0,l=new f0,c={},h=e.maxTextureSize,u={[Mi]:en,[en]:Mi,[Ae]:Ae},d=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:v1,fragmentShader:M1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Ce;p.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new te(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xs;let x=this.type;this.render=function(w,M,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===vf&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xs);const T=i.getRenderTarget(),E=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(os),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const F=x!==this.type;F&&M.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(N=>N.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,N=w.length;L<N;L++){const I=w[L],W=I.shadow;if(W===void 0){Vt("WebGLShadowMap:",I,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const q=W.getFrameExtents();s.multiply(q),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,W.mapSize.y=r.y));const G=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=G,W.map===null||F===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ys){if(I.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Cn(s.x,s.y,{format:yi,type:An,minFilter:ke,magFilter:ke,generateMipmaps:!1}),W.map.texture.name=I.name+".shadowMap",W.map.depthTexture=new Ki(s.x,s.y,Tn),W.map.depthTexture.name=I.name+".shadowMapDepth",W.map.depthTexture.format=Si,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Fe,W.map.depthTexture.magFilter=Fe}else I.isPointLight?(W.map=new Ul(s.x),W.map.depthTexture=new Ih(s.x,kn)):(W.map=new Cn(s.x,s.y),W.map.depthTexture=new Ki(s.x,s.y,kn)),W.map.depthTexture.name=I.name+".shadowMap",W.map.depthTexture.format=Si,this.type===Xs?(W.map.depthTexture.compareFunction=G?Yc:Xc,W.map.depthTexture.minFilter=ke,W.map.depthTexture.magFilter=ke):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Fe,W.map.depthTexture.magFilter=Fe);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);const Z=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();I.isPointLight!==!0&&W.updateMatrices(I,y);const j=W.camera.layers.mask&4294967294?W.camera.layers:y.layers;for(let U=0;U<Z;U++){const V=W.getCamera(U);if(I.isPointLight){const O=W.camera,J=W.matrix,et=I.distance||O.far;et!==O.far&&(O.far=et,O.updateProjectionMatrix()),_r.setFromMatrixPosition(I.matrixWorld),O.position.copy(_r),zl.copy(O.position),zl.add(S1[U]),O.up.copy(y1[U]),O.lookAt(zl),O.updateMatrixWorld(),J.makeTranslation(-_r.x,-_r.y,-_r.z),Iu.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Iu,O.coordinateSystem,O.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,U),i.clear();else{U===0&&(i.setRenderTarget(W.map),i.clear());const O=W.getViewport(U);o.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),P.viewport(o)}n=W.getFrustum(U),S(M,y,V,I,j,this.type)}W.isPointLightShadow!==!0&&this.type===Ys&&_(W,y),W.needsUpdate=!1}x=this.type,m.needsUpdate=!1,i.setRenderTarget(T,E,R)};function _(w,M){const y=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Cn(s.x,s.y,{format:yi,type:An}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(M,null,y,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(M,null,y,f,g,null)}function v(w,M,y,T){let E=null;const R=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)E=R;else if(E=y.isPointLight===!0?l:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const P=E.uuid,F=M.uuid;let L=c[P];L===void 0&&(L={},c[P]=L);let N=L[F];N===void 0&&(N=E.clone(),L[F]=N,M.addEventListener("dispose",b)),E=N}if(E.visible=M.visible,E.wireframe=M.wireframe,T===Ys?E.side=M.shadowSide!==null?M.shadowSide:M.side:E.side=M.shadowSide!==null?M.shadowSide:u[M.side],E.alphaMap=M.alphaMap,E.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,E.map=M.map,E.clipShadows=M.clipShadows,E.clippingPlanes=M.clippingPlanes,E.clipIntersection=M.clipIntersection,E.displacementMap=M.displacementMap,E.displacementScale=M.displacementScale,E.displacementBias=M.displacementBias,E.wireframeLinewidth=M.wireframeLinewidth,E.linewidth=M.linewidth,y.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const P=i.properties.get(E);P.light=y}return E}function S(w,M,y,T,E,R){if(w.visible===!1)return;if(w.layers.test(E)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Ys)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const L=t.update(w),N=w.material;if(Array.isArray(N)){const I=L.groups;for(let W=0,q=I.length;W<q;W++){const G=I[W],Z=N[G.materialIndex];if(Z&&Z.visible){const j=v(w,Z,T,R);w.onBeforeShadow(i,w,M,y,L,j,G),i.renderBufferDirect(y,null,L,j,w,G),w.onAfterShadow(i,w,M,y,L,j,G)}}}else if(N.visible){const I=v(w,N,T,R);w.onBeforeShadow(i,w,M,y,L,I,null),i.renderBufferDirect(y,null,L,I,w,null),w.onAfterShadow(i,w,M,y,L,I,null)}}const F=w.children;for(let L=0,N=F.length;L<N;L++)S(F[L],M,y,T,E,R)}function b(w){w.target.removeEventListener("dispose",b);for(const y in c){const T=c[y],E=w.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}function w1(i,t){function e(){let k=!1;const ht=new Se;let lt=null;const bt=new Se(0,0,0,0);return{setMask:function(gt){lt!==gt&&!k&&(i.colorMask(gt,gt,gt,gt),lt=gt)},setLocked:function(gt){k=gt},setClear:function(gt,Mt,Gt,ee,ft){ft===!0&&(gt*=ee,Mt*=ee,Gt*=ee),ht.set(gt,Mt,Gt,ee),bt.equals(ht)===!1&&(i.clearColor(gt,Mt,Gt,ee),bt.copy(ht))},reset:function(){k=!1,lt=null,bt.set(-1,0,0,0)}}}function n(){let k=!1,ht=!1,lt=null,bt=null,gt=null;return{setReversed:function(Mt){if(ht!==Mt){const Gt=t.get("EXT_clip_control");Mt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),ht=Mt;const ee=gt;gt=null,this.setClear(ee)}},getReversed:function(){return ht},setTest:function(Mt){Mt?ct(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(Mt){lt!==Mt&&!k&&(i.depthMask(Mt),lt=Mt)},setFunc:function(Mt){if(ht&&(Mt=Qf[Mt]),bt!==Mt){switch(Mt){case ia:i.depthFunc(i.NEVER);break;case sa:i.depthFunc(i.ALWAYS);break;case ra:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case oa:i.depthFunc(i.EQUAL);break;case aa:i.depthFunc(i.GEQUAL);break;case la:i.depthFunc(i.GREATER);break;case ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=Mt}},setLocked:function(Mt){k=Mt},setClear:function(Mt){gt!==Mt&&(gt=Mt,ht&&(Mt=1-Mt),i.clearDepth(Mt))},reset:function(){k=!1,lt=null,bt=null,gt=null,ht=!1}}}function s(){let k=!1,ht=null,lt=null,bt=null,gt=null,Mt=null,Gt=null,ee=null,ft=null;return{setTest:function(Ht){k||(Ht?ct(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(Ht){ht!==Ht&&!k&&(i.stencilMask(Ht),ht=Ht)},setFunc:function(Ht,Qt,At){(lt!==Ht||bt!==Qt||gt!==At)&&(i.stencilFunc(Ht,Qt,At),lt=Ht,bt=Qt,gt=At)},setOp:function(Ht,Qt,At){(Mt!==Ht||Gt!==Qt||ee!==At)&&(i.stencilOp(Ht,Qt,At),Mt=Ht,Gt=Qt,ee=At)},setLocked:function(Ht){k=Ht},setClear:function(Ht){ft!==Ht&&(i.clearStencil(Ht),ft=Ht)},reset:function(){k=!1,ht=null,lt=null,bt=null,gt=null,Mt=null,Gt=null,ee=null,ft=null}}}const r=new e,o=new n,a=new s;let l={};const c=new WeakMap;let h={},u={},d={},f=new WeakMap,p=[],g=null,m=!1,x=null,_=null,v=null,S=null,b=null,w=null,M=null,y=new Lt(0,0,0),T=0,E=!1,R=null,P=null,F=null,L=null,N=null;const I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,q=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=q>=2);let Z=null,j={};const U=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),O=new Se().fromArray(U),J=new Se().fromArray(V);function et(k,ht,lt,bt){const gt=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(k,Mt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<lt;Gt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(ht+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return Mt}const st={};st[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc(Ks),_e(!1),dt(Ac),ct(i.CULL_FACE),se(os);function ct(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function St(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Nt(k,ht){return d[k]!==ht?(i.bindFramebuffer(k,ht),d[k]=ht,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ht),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function rt(k,ht){let lt=p,bt=!1;if(k){lt=f.get(ht),lt===void 0&&(lt=[],f.set(ht,lt));const gt=k.textures;if(lt.length!==gt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,Gt=gt.length;Mt<Gt;Mt++)lt[Mt]=i.COLOR_ATTACHMENT0+Mt;lt.length=gt.length,bt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,bt=!0);bt&&i.drawBuffers(lt)}function ot(k){return g!==k?(i.useProgram(k),g=k,!0):!1}const Ct={[as]:i.FUNC_ADD,[Sf]:i.FUNC_SUBTRACT,[yf]:i.FUNC_REVERSE_SUBTRACT};Ct[bf]=i.MIN,Ct[wf]=i.MAX;const Bt={[Ef]:i.ZERO,[Tf]:i.ONE,[Af]:i.SRC_COLOR,[Lc]:i.SRC_ALPHA,[If]:i.SRC_ALPHA_SATURATE,[Pf]:i.DST_COLOR,[Cf]:i.DST_ALPHA,[Rf]:i.ONE_MINUS_SRC_COLOR,[Pc]:i.ONE_MINUS_SRC_ALPHA,[Df]:i.ONE_MINUS_DST_COLOR,[Lf]:i.ONE_MINUS_DST_ALPHA,[Nf]:i.CONSTANT_COLOR,[Uf]:i.ONE_MINUS_CONSTANT_COLOR,[Ff]:i.CONSTANT_ALPHA,[Of]:i.ONE_MINUS_CONSTANT_ALPHA};function se(k,ht,lt,bt,gt,Mt,Gt,ee,ft,Ht){if(k===os){m===!0&&(St(i.BLEND),m=!1);return}if(m===!1&&(ct(i.BLEND),m=!0),k!==Mf){if(k!==x||Ht!==E){if((_!==as||b!==as)&&(i.blendEquation(i.FUNC_ADD),_=as,b=as),Ht)switch(k){case Zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case na:i.blendFunc(i.ONE,i.ONE);break;case Rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:de("WebGLState: Invalid blending: ",k);break}else switch(k){case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case na:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Rc:de("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cc:de("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:de("WebGLState: Invalid blending: ",k);break}v=null,S=null,w=null,M=null,y.set(0,0,0),T=0,x=k,E=Ht}return}gt=gt||ht,Mt=Mt||lt,Gt=Gt||bt,(ht!==_||gt!==b)&&(i.blendEquationSeparate(Ct[ht],Ct[gt]),_=ht,b=gt),(lt!==v||bt!==S||Mt!==w||Gt!==M)&&(i.blendFuncSeparate(Bt[lt],Bt[bt],Bt[Mt],Bt[Gt]),v=lt,S=bt,w=Mt,M=Gt),(ee.equals(y)===!1||ft!==T)&&(i.blendColor(ee.r,ee.g,ee.b,ft),y.copy(ee),T=ft),x=k,E=!1}function qt(k,ht){k.side===Ae?St(i.CULL_FACE):ct(i.CULL_FACE);let lt=k.side===en;ht&&(lt=!lt),_e(lt),k.blending===Zs&&k.transparent===!1?se(os):se(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const bt=k.stencilWrite;a.setTest(bt),bt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),yt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e(k){R!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),R=k)}function dt(k){k!==xf?(ct(i.CULL_FACE),k!==P&&(k===Ac?i.cullFace(i.BACK):k===_f?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),P=k}function vt(k){k!==F&&(W&&i.lineWidth(k),F=k)}function yt(k,ht,lt){k?(ct(i.POLYGON_OFFSET_FILL),(L!==ht||N!==lt)&&(L=ht,N=lt,o.getReversed()&&(ht=-ht,lt=-lt),i.polygonOffset(ht,lt))):St(i.POLYGON_OFFSET_FILL)}function Kt(k){k?ct(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function Dt(k){k===void 0&&(k=i.TEXTURE0+I-1),Z!==k&&(i.activeTexture(k),Z=k)}function oe(k,ht,lt){lt===void 0&&(Z===null?lt=i.TEXTURE0+I-1:lt=Z);let bt=j[lt];bt===void 0&&(bt={type:void 0,texture:void 0},j[lt]=bt),(bt.type!==k||bt.texture!==ht)&&(Z!==lt&&(i.activeTexture(lt),Z=lt),i.bindTexture(k,ht||st[k]),bt.type=k,bt.texture=ht)}function B(){const k=j[Z];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Yt(){try{i.compressedTexImage2D(...arguments)}catch(k){de("WebGLState:",k)}}function Wt(){try{i.compressedTexImage3D(...arguments)}catch(k){de("WebGLState:",k)}}function Jt(){try{i.texSubImage2D(...arguments)}catch(k){de("WebGLState:",k)}}function mt(){try{i.texSubImage3D(...arguments)}catch(k){de("WebGLState:",k)}}function pe(){try{i.compressedTexSubImage2D(...arguments)}catch(k){de("WebGLState:",k)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(k){de("WebGLState:",k)}}function kt(){try{i.texStorage2D(...arguments)}catch(k){de("WebGLState:",k)}}function D(){try{i.texStorage3D(...arguments)}catch(k){de("WebGLState:",k)}}function A(){try{i.texImage2D(...arguments)}catch(k){de("WebGLState:",k)}}function K(){try{i.texImage3D(...arguments)}catch(k){de("WebGLState:",k)}}function ut(k){return u[k]!==void 0?u[k]:i.getParameter(k)}function it(k,ht){u[k]!==ht&&(i.pixelStorei(k,ht),u[k]=ht)}function pt(k){O.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),O.copy(k))}function xt(k){J.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function nt(k,ht){let lt=c.get(ht);lt===void 0&&(lt=new WeakMap,c.set(ht,lt));let bt=lt.get(k);bt===void 0&&(bt=i.getUniformBlockIndex(ht,k.name),i.uniformBlockBinding(ht,bt,bt),lt.set(k,bt))}function at(k,ht,lt){const gt=c.get(ht).get(k);l[gt]!==lt&&(i.bindBufferBase(i.UNIFORM_BUFFER,gt,lt),l[gt]=lt)}function _t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,j={},d={},l={},f=new WeakMap,p=[],g=null,m=!1,x=null,_=null,v=null,S=null,b=null,w=null,M=null,y=new Lt(0,0,0),T=0,E=!1,R=null,P=null,F=null,L=null,N=null,O.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:St,bindFramebuffer:Nt,drawBuffers:rt,useProgram:ot,setBlending:se,setMaterial:qt,setFlipSided:_e,setCullFace:dt,setLineWidth:vt,setPolygonOffset:yt,setScissorTest:Kt,activeTexture:Dt,bindTexture:oe,unbindTexture:B,compressedTexImage2D:Yt,compressedTexImage3D:Wt,texImage2D:A,texImage3D:K,pixelStorei:it,getParameter:ut,updateUBOMapping:nt,uniformBlockBinding:at,texStorage2D:kt,texStorage3D:D,texSubImage2D:Jt,texSubImage3D:mt,compressedTexSubImage2D:pe,compressedTexSubImage3D:It,scissor:pt,viewport:xt,reset:_t}}function E1(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap,u=new Set;let d;const f=new WeakMap,p=new Set,g=new FinalizationRegistry(D=>p.delete(D));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,A){return m?new OffscreenCanvas(D,A):Qs("canvas")}function _(D,A,K){let ut=1;const it=kt(D);if((it.width>K||it.height>K)&&(ut=K/Math.max(it.width,it.height)),ut<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const pt=Math.floor(ut*it.width),xt=Math.floor(ut*it.height);d===void 0&&(d=x(pt,xt));const nt=A?x(pt,xt):d;return nt.width=pt,nt.height=xt,nt.getContext("2d").drawImage(D,0,0,pt,xt),Vt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+pt+"x"+xt+")."),nt}else return"data"in D&&Vt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),D;return D}function v(D){return D.generateMipmaps}function S(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(D,A,K,ut,it,pt=!1){if(D!==null){if(i[D]!==void 0)return i[D];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let xt;ut&&(xt=t.get("EXT_texture_norm16"),xt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=A;if(A===i.RED&&(K===i.FLOAT&&(nt=i.R32F),K===i.HALF_FLOAT&&(nt=i.R16F),K===i.UNSIGNED_BYTE&&(nt=i.R8),K===i.UNSIGNED_SHORT&&xt&&(nt=xt.R16_EXT),K===i.SHORT&&xt&&(nt=xt.R16_SNORM_EXT)),A===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(nt=i.R8UI),K===i.UNSIGNED_SHORT&&(nt=i.R16UI),K===i.UNSIGNED_INT&&(nt=i.R32UI),K===i.BYTE&&(nt=i.R8I),K===i.SHORT&&(nt=i.R16I),K===i.INT&&(nt=i.R32I)),A===i.RG&&(K===i.FLOAT&&(nt=i.RG32F),K===i.HALF_FLOAT&&(nt=i.RG16F),K===i.UNSIGNED_BYTE&&(nt=i.RG8),K===i.UNSIGNED_SHORT&&xt&&(nt=xt.RG16_EXT),K===i.SHORT&&xt&&(nt=xt.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(nt=i.RG8UI),K===i.UNSIGNED_SHORT&&(nt=i.RG16UI),K===i.UNSIGNED_INT&&(nt=i.RG32UI),K===i.BYTE&&(nt=i.RG8I),K===i.SHORT&&(nt=i.RG16I),K===i.INT&&(nt=i.RG32I)),A===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),K===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),K===i.UNSIGNED_INT&&(nt=i.RGB32UI),K===i.BYTE&&(nt=i.RGB8I),K===i.SHORT&&(nt=i.RGB16I),K===i.INT&&(nt=i.RGB32I)),A===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),K===i.UNSIGNED_INT&&(nt=i.RGBA32UI),K===i.BYTE&&(nt=i.RGBA8I),K===i.SHORT&&(nt=i.RGBA16I),K===i.INT&&(nt=i.RGBA32I)),A===i.RGB&&(K===i.UNSIGNED_SHORT&&xt&&(nt=xt.RGB16_EXT),K===i.SHORT&&xt&&(nt=xt.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),A===i.RGBA){const at=pt?Vr:he.getTransfer(it);K===i.FLOAT&&(nt=i.RGBA32F),K===i.HALF_FLOAT&&(nt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(nt=at===ge?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&xt&&(nt=xt.RGBA16_EXT),K===i.SHORT&&xt&&(nt=xt.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function M(D,A){let K;return D?A===null||A===kn||A===ki?K=i.DEPTH24_STENCIL8:A===Tn?K=i.DEPTH32F_STENCIL8:A===$s&&(K=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===kn||A===ki?K=i.DEPTH_COMPONENT24:A===Tn?K=i.DEPTH_COMPONENT32F:A===$s&&(K=i.DEPTH_COMPONENT16),K}function y(D,A){return v(D)===!0||D.isFramebufferTexture&&D.minFilter!==Fe&&D.minFilter!==ke?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function T(D){const A=new WeakRef(D);n.get(D).__ref=A,p.add(A),g.register(D,A,A)}function E(D){const A=n.get(D).__ref;A!==void 0&&(p.delete(A),g.unregister(A))}function R(D){F(D.target)}function P(D){L(D.target)}function F(D){D.removeEventListener("dispose",R),E(D),I(D),D.isVideoTexture&&h.delete(D),D.isHTMLTexture&&u.delete(D)}function L(D){D.removeEventListener("dispose",P),E(D),q(D)}function N(){for(const D of p){const A=D.deref();A!==void 0&&(A.isRenderTarget===!0?L(A):F(A))}p.clear(),u.clear()}function I(D){const A=n.get(D);if(A.__webglInit===void 0)return;const K=D.source,ut=f.get(K);if(ut){const it=ut[A.__cacheKey];it.usedTimes--,it.usedTimes===0&&W(D),Object.keys(ut).length===0&&f.delete(K)}n.remove(D)}function W(D){const A=n.get(D);i.deleteTexture(A.__webglTexture);const K=D.source,ut=f.get(K);delete ut[A.__cacheKey],o.memory.textures--}function q(D){const A=n.get(D);A.__depthDisposeCallback&&A.__depthDisposeCallback();const K=D.depthTexture;if(K&&K.renderTarget===D&&F(K),D.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(A.__webglFramebuffer[it]))for(let pt=0;pt<A.__webglFramebuffer[it].length;pt++)i.deleteFramebuffer(A.__webglFramebuffer[it][pt]);else i.deleteFramebuffer(A.__webglFramebuffer[it]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[it])}else{if(Array.isArray(A.__webglFramebuffer))for(let it=0;it<A.__webglFramebuffer.length;it++)i.deleteFramebuffer(A.__webglFramebuffer[it]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let it=0;it<A.__webglColorRenderbuffer.length;it++)A.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[it]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ut=D.textures;for(let it=0,pt=ut.length;it<pt;it++){const xt=n.get(ut[it]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(ut[it])}n.remove(D)}let G=0;function Z(){G=0}function j(){return G}function U(D){G=D}function V(){const D=G;return D>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,D}function O(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.mipmapsAutoUpdate),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function J(D,A){const K=n.get(D);if(D.isVideoTexture&&pe(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&K.__version!==D.version){const ut=D.image;if(ut===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{qt(K,D,A);return}}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+A)}function et(D,A){const K=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){qt(K,D,A);return}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+A)}function st(D,A){const K=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){qt(K,D,A);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+A)}function ct(D,A){const K=n.get(D);if(D.version>0&&K.__version!==D.version){_e(K,D,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+A)}const St={[Js]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[fa]:i.MIRRORED_REPEAT},Nt={[Fe]:i.NEAREST,[Gf]:i.NEAREST_MIPMAP_NEAREST,[Ur]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[pa]:i.LINEAR_MIPMAP_NEAREST,[En]:i.LINEAR_MIPMAP_LINEAR},rt={[Vf]:i.NEVER,[Zc]:i.ALWAYS,[Xf]:i.LESS,[Xc]:i.LEQUAL,[Yf]:i.EQUAL,[Yc]:i.GEQUAL,[Zf]:i.GREATER,[Kf]:i.NOTEQUAL};function ot(D,A){if(A.type===Tn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===ke||A.magFilter===pa||A.magFilter===Ur||A.magFilter===En||A.minFilter===ke||A.minFilter===pa||A.minFilter===Ur||A.minFilter===En)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,St[A.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,St[A.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,St[A.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Nt[A.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Nt[A.minFilter]),A.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,rt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Fe||A.minFilter!==Ur&&A.minFilter!==En||A.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ct(D,A){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",R),T(A));const ut=A.source;let it=f.get(ut);it===void 0&&(it={},f.set(ut,it));const pt=O(A);if(pt!==D.__cacheKey){it[pt]===void 0&&(it[pt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),it[pt].usedTimes++;const xt=it[D.__cacheKey];xt!==void 0&&(it[D.__cacheKey].usedTimes--,xt.usedTimes===0&&W(A)),D.__cacheKey=pt,D.__webglTexture=it[pt].texture}return K}function Bt(D,A,K){return Math.floor(Math.floor(D/K)/A)}function se(D,A,K,ut){const pt=D.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,K,ut,A.data);else{pt.sort((k,ht)=>k.start-ht.start);let xt=0;for(let k=1;k<pt.length;k++){const ht=pt[xt],lt=pt[k],bt=ht.start+ht.count,gt=Bt(lt.start,A.width,4),Mt=Bt(ht.start,A.width,4);lt.start<=bt+1&&gt===Mt&&Bt(lt.start+lt.count-1,A.width,4)===gt?ht.count=Math.max(ht.count,lt.start+lt.count-ht.start):(++xt,pt[xt]=lt)}pt.length=xt+1;const nt=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),_t=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let k=0,ht=pt.length;k<ht;k++){const lt=pt[k],bt=Math.floor(lt.start/4),gt=Math.ceil(lt.count/4),Mt=bt%A.width,Gt=Math.floor(bt/A.width),ee=gt,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Mt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Gt),e.texSubImage2D(i.TEXTURE_2D,0,Mt,Gt,ee,ft,K,ut,A.data)}D.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,nt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,_t)}}function qt(D,A,K){let ut=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ut=i.TEXTURE_3D);const it=Ct(D,A),pt=A.source;e.bindTexture(ut,D.__webglTexture,i.TEXTURE0+K);const xt=n.get(pt);if(pt.version!==xt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const ft=he.getPrimaries(he.workingColorSpace),Ht=A.colorSpace===bi?null:he.getPrimaries(A.colorSpace),Qt=A.colorSpace===bi||ft===Ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let at=_(A.image,!1,s.maxTextureSize);at=It(A,at);const _t=r.convert(A.format,A.colorSpace),k=r.convert(A.type);let ht=w(A.internalFormat,_t,k,A.normalized,A.colorSpace,A.isVideoTexture);ot(ut,A);let lt;const bt=A.mipmaps,gt=A.isVideoTexture!==!0,Mt=xt.__version===void 0||it===!0,Gt=pt.dataReady,ee=y(A,at);if(A.isDepthTexture)ht=M(A.format===ei,A.type),Mt&&(gt?e.texStorage2D(i.TEXTURE_2D,1,ht,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,ht,at.width,at.height,0,_t,k,null));else if(A.isDataTexture)if(bt.length>0){gt&&Mt&&e.texStorage2D(i.TEXTURE_2D,ee,ht,bt[0].width,bt[0].height);for(let ft=0,Ht=bt.length;ft<Ht;ft++)lt=bt[ft],gt?Gt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,lt.width,lt.height,_t,k,lt.data):e.texImage2D(i.TEXTURE_2D,ft,ht,lt.width,lt.height,0,_t,k,lt.data);A.generateMipmaps=!1}else gt?(Mt&&e.texStorage2D(i.TEXTURE_2D,ee,ht,at.width,at.height),Gt&&se(A,at,_t,k)):e.texImage2D(i.TEXTURE_2D,0,ht,at.width,at.height,0,_t,k,at.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){gt&&Mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ee,ht,bt[0].width,bt[0].height,at.depth);for(let ft=0,Ht=bt.length;ft<Ht;ft++)if(lt=bt[ft],A.format!==Hn)if(_t!==null)if(gt){if(Gt)if(A.layerUpdates.size>0){const Qt=nu(lt.width,lt.height,A.format,A.type);for(const At of A.layerUpdates){const xe=lt.data.subarray(At*Qt/lt.data.BYTES_PER_ELEMENT,(At+1)*Qt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,At,lt.width,lt.height,1,_t,xe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,lt.width,lt.height,at.depth,_t,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,ht,lt.width,lt.height,at.depth,0,lt.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?Gt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,lt.width,lt.height,at.depth,_t,k,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,ht,lt.width,lt.height,at.depth,0,_t,k,lt.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{gt&&Mt&&e.texStorage2D(i.TEXTURE_2D,ee,ht,bt[0].width,bt[0].height);for(let ft=0,Ht=bt.length;ft<Ht;ft++)lt=bt[ft],A.format!==Hn?_t!==null?gt?Gt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,lt.width,lt.height,_t,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,ht,lt.width,lt.height,0,lt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?Gt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,lt.width,lt.height,_t,k,lt.data):e.texImage2D(i.TEXTURE_2D,ft,ht,lt.width,lt.height,0,_t,k,lt.data)}else if(A.isDataArrayTexture)if(gt){if(Mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ee,ht,at.width,at.height,at.depth),Gt)if(A.layerUpdates.size>0){const ft=nu(at.width,at.height,A.format,A.type);for(const Ht of A.layerUpdates){const Qt=at.data.subarray(Ht*ft/at.data.BYTES_PER_ELEMENT,(Ht+1)*ft/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ht,at.width,at.height,1,_t,k,Qt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,_t,k,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ht,at.width,at.height,at.depth,0,_t,k,at.data);else if(A.isData3DTexture)gt?(Mt&&e.texStorage3D(i.TEXTURE_3D,ee,ht,at.width,at.height,at.depth),Gt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,_t,k,at.data)):e.texImage3D(i.TEXTURE_3D,0,ht,at.width,at.height,at.depth,0,_t,k,at.data);else if(A.isFramebufferTexture){if(Mt)if(gt)e.texStorage2D(i.TEXTURE_2D,ee,ht,at.width,at.height);else{let ft=at.width,Ht=at.height;for(let Qt=0;Qt<ee;Qt++)e.texImage2D(i.TEXTURE_2D,Qt,ht,ft,Ht,0,_t,k,null),ft>>=1,Ht>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),at.parentNode!==ft){ft.appendChild(at),u.add(A),ft.onpaint=Ht=>{const Qt=Ht.changedElements;for(const At of u)Qt.includes(At.image)&&(At.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{const Qt=i.RGBA,At=i.RGBA,xe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Qt,At,xe,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(bt.length>0){if(gt&&Mt){const ft=kt(bt[0]);e.texStorage2D(i.TEXTURE_2D,ee,ht,ft.width,ft.height)}for(let ft=0,Ht=bt.length;ft<Ht;ft++)lt=bt[ft],gt?Gt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,_t,k,lt):e.texImage2D(i.TEXTURE_2D,ft,ht,_t,k,lt);A.generateMipmaps=!1}else if(gt){if(Mt){const ft=kt(at);e.texStorage2D(i.TEXTURE_2D,ee,ht,ft.width,ft.height)}Gt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,k,at)}else e.texImage2D(i.TEXTURE_2D,0,ht,_t,k,at);v(A)&&A.mipmapsAutoUpdate===!0&&S(ut),xt.__version=pt.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function _e(D,A,K){if(A.image.length!==6)return;const ut=Ct(D,A),it=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+K);const pt=n.get(it);if(it.version!==pt.__version||ut===!0){e.activeTexture(i.TEXTURE0+K);const xt=he.getPrimaries(he.workingColorSpace),nt=A.colorSpace===bi?null:he.getPrimaries(A.colorSpace),at=A.colorSpace===bi||xt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const _t=A.isCompressedTexture||A.image[0].isCompressedTexture,k=A.image[0]&&A.image[0].isDataTexture,ht=[];for(let At=0;At<6;At++)!_t&&!k?ht[At]=_(A.image[At],!0,s.maxCubemapSize):ht[At]=k?A.image[At].image:A.image[At],ht[At]=It(A,ht[At]);const lt=ht[0],bt=r.convert(A.format,A.colorSpace),gt=r.convert(A.type);let Mt=w(A.internalFormat,bt,gt,A.normalized,A.colorSpace);const Gt=A.isVideoTexture!==!0,ee=pt.__version===void 0||ut===!0,ft=it.dataReady;let Ht=y(A,lt);ot(i.TEXTURE_CUBE_MAP,A);let Qt;if(A.isDepthTexture){if(Mt=M(A.format===ei,A.type),ee)if(Gt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Mt,lt.width,lt.height);else for(let At=0;At<6;At++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Mt,lt.width,lt.height,0,bt,gt,null)}else if(_t){Gt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,Mt,lt.width,lt.height);for(let At=0;At<6;At++){Qt=ht[At].mipmaps;for(let xe=0;xe<Qt.length;xe++){const Xe=Qt[xe];A.format!==Hn?bt!==null?Gt?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe,0,0,Xe.width,Xe.height,bt,Xe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe,Mt,Xe.width,Xe.height,0,Xe.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe,0,0,Xe.width,Xe.height,bt,gt,Xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe,Mt,Xe.width,Xe.height,0,bt,gt,Xe.data)}}}else{if(Qt=A.mipmaps,Gt&&ee){Qt.length>0&&Ht++;const At=kt(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,Mt,At.width,At.height)}for(let At=0;At<6;At++)if(k){Gt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,ht[At].width,ht[At].height,bt,gt,ht[At].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Mt,ht[At].width,ht[At].height,0,bt,gt,ht[At].data);for(let xe=0;xe<Qt.length;xe++){const Bi=Qt[xe].image[At].image;Gt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe+1,0,0,Bi.width,Bi.height,bt,gt,Bi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe+1,Mt,Bi.width,Bi.height,0,bt,gt,Bi.data)}}else{Gt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,bt,gt,ht[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Mt,bt,gt,ht[At]);for(let xe=0;xe<Qt.length;xe++){const Xe=Qt[xe];Gt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe+1,0,0,bt,gt,Xe.image[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe+1,Mt,bt,gt,Xe.image[At])}}}v(A)&&A.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),pt.__version=it.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function dt(D,A,K,ut,it,pt){const xt=r.convert(K.format,K.colorSpace),nt=r.convert(K.type),at=w(K.internalFormat,xt,nt,K.normalized,K.colorSpace),_t=n.get(A),k=n.get(K);if(k.__renderTarget=A,!_t.__hasExternalTextures){const ht=Math.max(1,A.width>>pt),lt=Math.max(1,A.height>>pt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,pt,at,ht,lt,A.depth,0,xt,nt,null):e.texImage2D(it,pt,at,ht,lt,0,xt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),mt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,it,k.__webglTexture,0,Jt(A)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,it,k.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(D,A,K){if(i.bindRenderbuffer(i.RENDERBUFFER,D),A.depthBuffer){const ut=A.depthTexture,it=ut&&ut.isDepthTexture?ut.type:null,pt=M(A.stencilBuffer,it),xt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(A),pt,A.width,A.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(A),pt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,pt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,D)}else{const ut=A.textures;for(let it=0;it<ut.length;it++){const pt=ut[it],xt=r.convert(pt.format,pt.colorSpace),nt=r.convert(pt.type),at=w(pt.internalFormat,xt,nt,pt.normalized,pt.colorSpace);mt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(A),at,A.width,A.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(A),at,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,at,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(D,A,K){const ut=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const it=n.get(A.depthTexture);it.__renderTarget=A;const pt=ut?A.depthTexture.image[0]:A.depthTexture.image;(!it.__webglTexture||pt.width!==A.width||pt.height!==A.height)&&(pt.width=A.width,pt.height=A.height,A.depthTexture.needsUpdate=!0),ut?ct(A.depthTexture,0):J(A.depthTexture,0);const xt=it.__webglTexture,nt=Jt(A),at=ut?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,_t=A.depthTexture.format===ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===Si)mt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,at,xt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,_t,at,xt,0);else if(A.depthTexture.format===ei)mt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,at,xt,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,_t,at,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(D){const A=n.get(D),K=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const ut=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ut){const it=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ut.removeEventListener("dispose",it)};ut.addEventListener("dispose",it),A.__depthDisposeCallback=it}A.__boundDepthTexture=ut}if(D.depthTexture&&!A.__autoAllocateDepthBuffer)if(K)for(let ut=0;ut<6;ut++)yt(A.__webglFramebuffer[ut],D,ut);else D.texture.mipmaps.length>0?yt(A.__webglFramebuffer[0],D,0):yt(A.__webglFramebuffer,D,0);else if(K){A.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ut]),A.__webglDepthbuffer[ut]===void 0)A.__webglDepthbuffer[ut]=i.createRenderbuffer(),vt(A.__webglDepthbuffer[ut],D,!1);else{const it=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=A.__webglDepthbuffer[ut];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,pt)}}else if(D.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),vt(A.__webglDepthbuffer,D,!1);else{const it=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,pt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(D,A,K){const ut=n.get(D);A!==void 0&&dt(ut.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Kt(D)}function oe(D){const A=D.texture,K=n.get(D),ut=n.get(A);D.addEventListener("dispose",P),T(D);const it=D.textures,pt=D.isWebGLCubeRenderTarget===!0,xt=it.length>1;if(xt||(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=A.version,o.memory.textures++),pt){K.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(A.mipmaps.length>0){K.__webglFramebuffer[nt]=[];for(let at=0;at<A.mipmaps.length;at++)K.__webglFramebuffer[nt][at]=i.createFramebuffer()}else K.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(A.mipmaps.length>0){K.__webglFramebuffer=[];for(let nt=0;nt<A.mipmaps.length;nt++)K.__webglFramebuffer[nt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(xt)for(let nt=0,at=it.length;nt<at;nt++){const _t=n.get(it[nt]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&mt(D)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let nt=0;nt<it.length;nt++){const at=it[nt];K.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[nt]);const _t=r.convert(at.format,at.colorSpace),k=r.convert(at.type),ht=w(at.internalFormat,_t,k,at.normalized,at.colorSpace,D.isXRRenderTarget===!0),lt=Jt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,ht,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,K.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(K.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),ot(i.TEXTURE_CUBE_MAP,A);for(let nt=0;nt<6;nt++)if(A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)dt(K.__webglFramebuffer[nt][at],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,at);else dt(K.__webglFramebuffer[nt],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);v(A)?S(i.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}else if(xt){for(let nt=0,at=it.length;nt<at;nt++){const _t=it[nt],k=n.get(_t);let ht=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ht=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,k.__webglTexture),ot(ht,_t),dt(K.__webglFramebuffer,D,_t,i.COLOR_ATTACHMENT0+nt,ht,0),v(_t)&&S(ht)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(nt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,ut.__webglTexture),ot(nt,A),A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)dt(K.__webglFramebuffer[at],D,A,i.COLOR_ATTACHMENT0,nt,at);else dt(K.__webglFramebuffer,D,A,i.COLOR_ATTACHMENT0,nt,0);v(A)?S(nt):A.mipmaps.length>0&&i.texParameteri(nt,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}D.depthBuffer&&Kt(D)}function B(D){const A=D.textures;for(let K=0,ut=A.length;K<ut;K++){const it=A[K];if(v(it)&&it.mipmapsAutoUpdate===!0){const pt=b(D),xt=n.get(it).__webglTexture;e.bindTexture(pt,xt),S(pt),e.unbindTexture()}}}const Yt=[];function Wt(D){if(D.samples>0){if(mt(D)===!1){const A=D.textures,K=D.width,ut=D.height;let it=i.COLOR_BUFFER_BIT;const pt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(D),nt=A.length>1;if(nt)for(let _t=0;_t<A.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let _t=0;_t<A.length;_t++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[_t]);const k=n.get(A[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,k,0)}i.blitFramebuffer(0,0,K,ut,0,0,K,ut,it,i.NEAREST),l===!0&&(Yt.length=0,Yt.push(i.COLOR_ATTACHMENT0+_t),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&Yt.push(pt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let _t=0;_t<A.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,xt.__webglColorRenderbuffer[_t]);const k=n.get(A[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,k,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){const A=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Jt(D){return Math.min(s.maxSamples,D.samples)}function mt(D){const A=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function pe(D){const A=o.render.frame;h.get(D)!==A&&(h.set(D,A),D.update())}function It(D,A){const K=D.colorSpace,ut=D.format,it=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==Wr&&K!==bi&&(he.getTransfer(K)===ge?(ut!==Hn||it!==hn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):de("WebGLTextures: Unsupported texture color space:",K)),A}function kt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=Z,this.getTextureUnits=j,this.setTextureUnits=U,this.setTexture2D=J,this.setTexture2DArray=et,this.setTexture3D=st,this.setTextureCube=ct,this.rebindTextures=Dt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=mt,this.dispose=N}function T1(i,t){function e(n,s=bi){let r;const o=he.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bc)return i.BYTE;if(n===Gc)return i.SHORT;if(n===$s)return i.UNSIGNED_SHORT;if(n===ma)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===An)return i.HALF_FLOAT;if(n===Wc)return i.ALPHA;if(n===Vc)return i.RGB;if(n===Hn)return i.RGBA;if(n===Si)return i.DEPTH_COMPONENT;if(n===ei)return i.DEPTH_STENCIL;if(n===Fr)return i.RED;if(n===_a)return i.RED_INTEGER;if(n===yi)return i.RG;if(n===va)return i.RG_INTEGER;if(n===Ma)return i.RGBA_INTEGER;if(n===Or||n===zr||n===Br||n===Gr)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===ya||n===ba||n===wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ea||n===Ta||n===Aa||n===Ra||n===Ca||n===kr||n===La)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ea||n===Ta)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Aa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ra)return r.COMPRESSED_R11_EAC;if(n===Ca)return r.COMPRESSED_SIGNED_R11_EAC;if(n===kr)return r.COMPRESSED_RG11_EAC;if(n===La)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pa||n===Da||n===Ia||n===Na||n===Ua||n===Fa||n===Oa||n===za||n===Ba||n===Ga||n===ka||n===Ha||n===Wa||n===Va)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Da)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ia)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===za)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ba)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ka)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Va)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===Ya||n===Za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xa)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ka||n===qa||n===Hr||n===Ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const A1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R1=`
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

}`;class C1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Nh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ve({vertexShader:A1,fragmentShader:R1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new Nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L1 extends wi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const g=typeof XRWebGLBinding<"u",m=new C1,x={},_=e.getContextAttributes();let v=null,S=null;const b=[],w=[],M=new Pt;let y=null,T=null;const E=new Fn;E.viewport=new Se;const R=new Fn;R.viewport=new Se;const P=[E,R],F=new M0;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let J=b[O];return J===void 0&&(J=new ol,b[O]=J),J.getTargetRaySpace()},this.getControllerGrip=function(O){let J=b[O];return J===void 0&&(J=new ol,b[O]=J),J.getGripSpace()},this.getHand=function(O){let J=b[O];return J===void 0&&(J=new ol,b[O]=J),J.getHandSpace()};function I(O){const J=w.indexOf(O.inputSource);if(J===-1)return;const et=b[J];et!==void 0&&(et.update(O.inputSource,O.frame,c||o),et.dispatchEvent({type:O.type,data:O.inputSource}))}function W(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",q);for(let O=0;O<b.length;O++){const J=w[O];J!==null&&(w[O]=null,b[O].disconnect(J))}L=null,N=null,m.reset();for(const O in x)delete x[O];if(t.setRenderTarget(v),f=null,d=null,u=null,s=null,S=null,V.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(M.width,M.height,!1),T!==null){const O=T.camera;O.fov=T.fov,O.zoom=T.zoom,O.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",W),s.addEventListener("inputsourceschange",q),_.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(M),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,st=null,ct=null;_.depth&&(ct=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=_.stencil?ei:Si,st=_.stencil?ki:kn);const St={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(St),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Cn(d.textureWidth,d.textureHeight,{format:Hn,type:hn,depthTexture:new Ki(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const et={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Cn(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),V.setContext(s),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(O){for(let J=0;J<O.removed.length;J++){const et=O.removed[J],st=w.indexOf(et);st>=0&&(w[st]=null,b[st].disconnect(et))}for(let J=0;J<O.added.length;J++){const et=O.added[J];let st=w.indexOf(et);if(st===-1){for(let St=0;St<b.length;St++)if(St>=w.length){w.push(et),st=St;break}else if(w[St]===null){w[St]=et,st=St;break}if(st===-1)break}const ct=b[st];ct&&ct.connect(et)}}function G(O,J){J===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(J.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let J=O.near,et=O.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(et=m.depthFar)),F.near=R.near=E.near=J,F.far=R.far=E.far=et,(L!==F.near||N!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,N=F.far),F.layers.mask=O.layers.mask|6,E.layers.mask=F.layers.mask&-5,R.layers.mask=F.layers.mask&-3;const st=O.parent,ct=F.cameras;G(F,st);for(let St=0;St<ct.length;St++)G(ct[St],st);F.projectionMatrix.copy(E.projectionMatrix),F.projectionMatrixInverse.copy(E.projectionMatrixInverse),T===null&&O.isPerspectiveCamera&&(T={camera:O,fov:O.fov,zoom:O.zoom}),Z(O,F,st)};function Z(O,J,et){et===null?O.matrix.copy(J.matrixWorld):(O.matrix.copy(et.matrixWorld),O.matrix.invert(),O.matrix.multiply(J.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(J.projectionMatrix),O.projectionMatrixInverse.copy(J.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=er*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(O){return x[O]};let j=null;function U(O,J){if(h=J.getViewerPose(c||o),p=J,h!==null){const et=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let st=!1;et.length!==F.cameras.length&&(F.cameras.length=0,st=!0);for(let rt=0;rt<et.length;rt++){const ot=et[rt];let Ct=null;if(f!==null)Ct=f.getViewport(ot);else{const se=u.getViewSubImage(d,ot);Ct=se.viewport,rt===0&&(t.setRenderTargetTextures(S,se.colorTexture,se.depthStencilTexture),t.setRenderTarget(S))}let Bt=P[rt];Bt===void 0&&(Bt=new Fn,Bt.layers.enable(rt),Bt.viewport=new Se,P[rt]=Bt),Bt.matrix.fromArray(ot.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(ot.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),rt===0&&(F.matrix.copy(Bt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),st===!0&&F.cameras.push(Bt)}const ct=s.enabledFeatures;if(ct&&ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const rt=u.getDepthInformation(et[0]);rt&&rt.isValid&&rt.texture&&m.init(rt,s.renderState)}if(ct&&ct.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let rt=0;rt<et.length;rt++){const ot=et[rt].camera;if(ot){let Ct=x[ot];Ct||(Ct=new Nh,x[ot]=Ct);const Bt=u.getCameraImage(ot);Ct.sourceTexture=Bt}}}}for(let et=0;et<b.length;et++){const st=w[et],ct=b[et];st!==null&&ct!==void 0&&ct.update(st,J,c||o)}j&&j(O,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),p=null}const V=new iu;V.setAnimationLoop(U),this.setAnimationLoop=function(O){j=O},this.dispose=function(){}}}const P1=new ie,Nu=new Zt;Nu.set(-1,0,0,0,1,0,0,0,1);function D1(i,t){function e(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function n(m,x){x.color.getRGB(m.fogColor.value,Wh(i)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function s(m,x,_,v,S){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(m,x):x.isMeshLambertMaterial?(r(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(m,x),u(m,x)):x.isMeshPhongMaterial?(r(m,x),h(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(m,x),d(m,x),x.isMeshPhysicalMaterial&&f(m,x,S)):x.isMeshMatcapMaterial?(r(m,x),p(m,x)):x.isMeshDepthMaterial?r(m,x):x.isMeshDistanceMaterial?(r(m,x),g(m,x)):x.isMeshNormalMaterial?r(m,x):x.isLineBasicMaterial?(o(m,x),x.isLineDashedMaterial&&a(m,x)):x.isPointsMaterial?l(m,x,_,v):x.isSpriteMaterial?c(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,e(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,e(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===en&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,e(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===en&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,e(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,e(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);const _=t.get(x),v=_.envMap,S=_.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(P1.makeRotationFromEuler(S)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Nu),m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,m.aoMapTransform))}function o(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,e(x.map,m.mapTransform))}function a(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,_,v){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*_,m.scale.value=v*.5,x.map&&(m.map.value=x.map,e(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,e(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function h(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function u(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function d(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function f(m,x,_){m.ior.value=x.ior,x.diffuseRoughness>0&&(m.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=x.diffuseRoughnessMap,e(x.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===en&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.retroreflectivity>0&&(m.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,x){x.matcap&&(m.matcap.value=x.matcap)}function g(m,x){const _=t.get(x).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function I1(i,t,e,n){let s={},r={};function o(_,v){const S=v.program;n.uniformBlockBinding(_,S,s[_.id])}function a(_,v){let S=s[_.id];S===void 0&&(p(_),S=l(_),s[_.id]=S,_.addEventListener("dispose",m));const b=v.program;n.updateUBOMapping(_,b);const w=t.render.frame;r[_.id]!==w&&(c(_),r[_.id]=w)}function l(_){const v=i.createBuffer(),S=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,S,b),i.bindBuffer(i.UNIFORM_BUFFER,null),v}function c(_){const v=s[_.id],S=_.uniforms,b=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,M=S.length;w<M;w++){const y=S[w];if(Array.isArray(y))for(let T=0,E=y.length;T<E;T++)h(y[T],w,T,b);else h(y,w,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,v,S,b){if(d(_,v,S,b)===!0){const w=_.__offset,M=_.value;if(Array.isArray(M)){let y=0;for(let T=0;T<M.length;T++){const E=M[T],R=g(E,!0);u(E,_.__data,y),y+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else u(M,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,_.__data)}}function u(_,v,S){typeof _=="number"||typeof _=="boolean"?v[S]=_:_.isMatrix3?(v[S]=_.elements[0],v[S+1]=_.elements[1],v[S+2]=_.elements[2],v[S+3]=0,v[S+4]=_.elements[3],v[S+5]=_.elements[4],v[S+6]=_.elements[5],v[S+7]=0,v[S+8]=_.elements[6],v[S+9]=_.elements[7],v[S+10]=_.elements[8],v[S+11]=0):ArrayBuffer.isView(_)?v.set(_.subarray(0,v.length-S),S):_.toArray(v,S)}function d(_,v,S,b){const w=_.value,M=v+"_"+S;if(Array.isArray(w)){b[M]===void 0&&(b[M]=[]);const y=b[M];let T=!1;for(let E=0;E<w.length;E++)f(w[E],y,E)===!0&&(T=!0);return T}return f(w,b,M)}function f(_,v,S){if(v[S]===void 0)return typeof _=="number"||typeof _=="boolean"?v[S]=_:ArrayBuffer.isView(_)?v[S]=_.slice():v[S]=_.clone(),!0;{const b=v[S];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return v[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function p(_){const v=_.uniforms;let S=0;const b=16;for(let M=0,y=v.length;M<y;M++){const T=Array.isArray(v[M])?v[M]:[v[M]];for(let E=0,R=T.length;E<R;E++){const P=T[E],F=Array.isArray(P.value)?P.value:[P.value],L=Array.isArray(v[M])||Array.isArray(P.value);let N=S;for(let W=0,q=F.length;W<q;W++){const G=F[W],Z=g(G,L),j=S%b,U=j%Z.boundary,V=j+U;S+=U,V!==0&&b-V<Z.storage&&(S+=b-V),W===0&&(N=S),S+=Z.storage}const I=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new I((S-N)/Float32Array.BYTES_PER_ELEMENT),P.__offset=N}}const w=S%b;return w>0&&(S+=b-w),_.__size=S,_.__cache={},this}function g(_,v){const S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=16,S.storage=48):_.isMatrix4?(S.boundary=16,S.storage=64):_.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",_),v===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(_){const v=_.target;v.removeEventListener("dispose",m),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function x(){for(const _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:x}}const N1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yn=null;function U1(){return Yn===null&&(Yn=new ar(N1,16,16,yi,An),Yn.name="DFG_LUT",Yn.minFilter=ke,Yn.magFilter=ke,Yn.wrapS=Gn,Yn.wrapT=Gn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}class F1{constructor(t={}){const{canvas:e=$f(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=hn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=f,m=new Set([Ma,va,_a]),x=new Set([hn,kn,$s,ki,ga,xa]),_=new Uint32Array(4),v=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let b=null,w=null;const M=[],y=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let R=!1,P=null,F=null,L=null,N=null;this._outputColorSpace=Oe;let I=0,W=0,q=null,G=-1,Z=null;const j=new Se,U=new Se;let V=null;const O=new Lt(0);let J=0,et=e.width,st=e.height,ct=1,St=null,Nt=null;const rt=new Se(0,0,et,st),ot=new Se(0,0,et,st);let Ct=!1;const Bt=new hr,se=new Sl;let qt=!1,_e=!1;const dt=new ie,vt=new Y,yt=new Se,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function oe(){return q===null?ct:1}let B=n;function Yt(C,X){return e.getContext(C,X)}let Wt,Jt,mt,pe,It,kt,D,A,K,ut,it,pt,xt,nt,at,_t,k,ht,lt,bt,gt,Mt,Gt;try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_i}`),e.addEventListener("webglcontextlost",Ht,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",At,!1),B===null){const X="webgl2";if(B=Yt(X,C),B===null)throw Yt(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ee()}catch(C){throw e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),de("WebGLRenderer: "+C.message),C}function ee(){Wt=new Bg(B),Wt.init(),gt=new T1(B,Wt),Jt=new Rg(B,Wt,t,gt),mt=new w1(B,Wt),Jt.reversedDepthBuffer&&d&&mt.buffers.depth.setReversed(!0),F=B.createFramebuffer(),L=B.createFramebuffer(),N=B.createFramebuffer(),pe=new Hg(B),It=new h1,kt=new E1(B,Wt,mt,It,Jt,gt,pe),D=new zg(E),A=new w0(B),Mt=new Tg(B,A),K=new Gg(B,A,pe,Mt),ut=new Vg(B,K,A,Mt,pe),ht=new Wg(B,Jt,kt),at=new Cg(It),it=new c1(E,D,Wt,Jt,Mt,at),pt=new D1(E,It),xt=new d1,nt=new _1(Wt),k=new Eg(E,D,mt,ut,p,l),_t=new b1(E,ut,Jt),Gt=new I1(B,pe,Jt,mt),lt=new Ag(B,Wt,pe),bt=new kg(B,Wt,pe),pe.programs=it.programs,E.capabilities=Jt,E.extensions=Wt,E.properties=It,E.renderLists=xt,E.shadowMap=_t,E.state=mt,E.info=pe}g!==hn&&(T=new Yg(g,e.width,e.height,a,s,r));const ft=new L1(E,B);this.xr=ft,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=Wt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Wt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ct},this.setPixelRatio=function(C){C!==void 0&&(ct=C,this.setSize(et,st,!1))},this.getSize=function(C){return C.set(et,st)},this.setSize=function(C,X,tt=!0){if(ft.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}et=C,st=X,e.width=Math.floor(C*ct),e.height=Math.floor(X*ct),tt===!0&&(e.style.width=C+"px",e.style.height=X+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(et*ct,st*ct).floor()},this.setDrawingBufferSize=function(C,X,tt){et=C,st=X,ct=tt,e.width=Math.floor(C*tt),e.height=Math.floor(X*tt),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(g===hn){de("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(j)},this.getViewport=function(C){return C.copy(rt)},this.setViewport=function(C,X,tt,$){C.isVector4?rt.set(C.x,C.y,C.z,C.w):rt.set(C,X,tt,$),mt.viewport(j.copy(rt).multiplyScalar(oe()).round())},this.getScissor=function(C){return C.copy(ot)},this.setScissor=function(C,X,tt,$){C.isVector4?ot.set(C.x,C.y,C.z,C.w):ot.set(C,X,tt,$),mt.scissor(U.copy(ot).multiplyScalar(oe()).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(C){mt.setScissorTest(Ct=C)},this.setOpaqueSort=function(C){St=C},this.setTransparentSort=function(C){Nt=C},this.getClearColor=function(C){return C.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,tt=!0){let $=0;if(C){let Q=!1;if(q!==null){const Et=q.texture.format;Q=m.has(Et)}if(Q){const Et=q.texture.type,Ut=x.has(Et),wt=k.getClearColor(),Rt=k.getClearAlpha(),zt=wt.r,$t=wt.g,le=wt.b;Ut?(_[0]=zt,_[1]=$t,_[2]=le,_[3]=Rt,B.clearBufferuiv(B.COLOR,0,_)):(v[0]=zt,v[1]=$t,v[2]=le,v[3]=Rt,B.clearBufferiv(B.COLOR,0,v))}else $|=B.COLOR_BUFFER_BIT}X&&($|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),P=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),k.dispose(),xt.dispose(),nt.dispose(),kt.dispose(),It.dispose(),D.dispose(),ut.dispose(),K.dispose(),Mt.dispose(),Gt.dispose(),it.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",af),ft.removeEventListener("sessionend",lf),is.stop()};function Ht(C){C.preventDefault(),Jc("WebGLRenderer: Context Lost."),R=!0}function Qt(){Jc("WebGLRenderer: Context Restored."),R=!1;const C=pe.autoReset,X=_t.enabled,tt=_t.autoUpdate,$=_t.needsUpdate,Q=_t.type;ee(),pe.autoReset=C,_t.enabled=X,_t.autoUpdate=tt,_t.needsUpdate=$,_t.type=Q}function At(C){de("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xe(C){const X=C.target;X.removeEventListener("dispose",xe),Xe(X)}function Xe(C){Bi(C),It.remove(C)}function Bi(C){const X=It.get(C).programs;X!==void 0&&(X.forEach(function(tt){it.releaseProgram(tt)}),C.isShaderMaterial&&it.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,tt,$,Q,Et){X===null&&(X=Kt);const Ut=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,wt=sS(C,X,tt,$,Q);mt.setMaterial($,Ut);let Rt=tt.index,zt=1;if($.wireframe===!0){if(Rt=K.getWireframeAttribute(tt),Rt===void 0)return;zt=2}const $t=tt.drawRange,le=tt.attributes.position;let Ft=$t.start*zt,ce=($t.start+$t.count)*zt;Et!==null&&(Ft=Math.max(Ft,Et.start*zt),ce=Math.min(ce,(Et.start+Et.count)*zt)),Rt!==null?(Ft=Math.max(Ft,0),ce=Math.min(ce,Rt.count)):le!=null&&(Ft=Math.max(Ft,0),ce=Math.min(ce,le.count));const Ue=ce-Ft;if(Ue<0||Ue===1/0)return;Mt.setup(Q,$,wt,tt,Rt);let Me,ve=lt;if(Rt!==null&&(Me=A.get(Rt),ve=bt,ve.setIndex(Me)),Q.isMesh)$.wireframe===!0?(mt.setLineWidth($.wireframeLinewidth*oe()),ve.setMode(B.LINES)):ve.setMode(B.TRIANGLES);else if(Q.isLine){let Qe=$.linewidth;Qe===void 0&&(Qe=1),mt.setLineWidth(Qe*oe()),Q.isLineSegments?ve.setMode(B.LINES):Q.isLineLoop?ve.setMode(B.LINE_LOOP):ve.setMode(B.LINE_STRIP)}else Q.isPoints?ve.setMode(B.POINTS):Q.isSprite&&ve.setMode(B.TRIANGLES);if(Q.isBatchedMesh)if(Wt.get("WEBGL_multi_draw"))ve.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qe=Q._multiDrawStarts,Ot=Q._multiDrawCounts,on=Q._multiDrawCount,me=Rt?A.get(Rt).bytesPerElement:1,ss=It.get($).currentProgram.getUniforms();for(let tn=0;tn<on;tn++)ss.setValue(B,"_gl_DrawID",tn),ve.render(Qe[tn]/me,Ot[tn])}else if(Q.isInstancedMesh)ve.renderInstances(Ft,Ue,Q.count);else if(tt.isInstancedBufferGeometry){const Qe=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Ot=Math.min(tt.instanceCount,Qe);ve.renderInstances(Ft,Ue,Ot)}else ve.render(Ft,Ue)};function of(C,X,tt,$){P!==null&&C.isNodeMaterial&&P.setObject($,C),qt===!0&&at.setState(C,tt,!1),C.transparent===!0&&C.side===Ae&&C.forceSinglePass===!1?(C.side=en,C.needsUpdate=!0,Ir(C,X,$),C.side=Mi,C.needsUpdate=!0,Ir(C,X,$),C.side=Ae):Ir(C,X,$)}this.compile=function(C,X,tt=null){tt===null&&(tt=C),P!==null&&P.renderStart(C,X,tt),w=nt.get(tt),w.init(X),y.push(w),tt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),C!==tt&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),w.setupLights(),P!==null&&P.updateLights(w.state.lightsArray),_e=this.localClippingEnabled,qt=at.init(this.clippingPlanes,_e),qt===!0&&at.setGlobalState(this.clippingPlanes,X),P!==null&&_t.render(w.state.shadowsArray,tt,X);const $=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Et=Q.material;if(Et)if(Array.isArray(Et))for(let Ut=0;Ut<Et.length;Ut++){const wt=Et[Ut];of(wt,tt,X,Q),$.add(wt)}else of(Et,tt,X,Q),$.add(Et)}),w=y.pop(),P!==null&&P.renderEnd(),$},this.compileAsync=function(C,X,tt=null){const $=this.compile(C,X,tt);return new Promise(Q=>{function Et(){if($.forEach(function(Ut){const Rt=It.get(Ut).currentProgram;(Rt===void 0||Rt.isReady())&&$.delete(Ut)}),$.size===0){Q(C);return}setTimeout(Et,10)}Wt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Ec=null;function nS(C){Ec&&Ec(C)}function af(){is.stop()}function lf(){is.start()}const is=new iu;is.setAnimationLoop(nS),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(C){Ec=C,ft.setAnimationLoop(C),C===null?is.stop():is.start()},ft.addEventListener("sessionstart",af),ft.addEventListener("sessionend",lf),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){de("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P!==null&&P.renderStart(C,X);const tt=ft.enabled===!0&&ft.isPresenting===!0,$=T!==null&&(q===null||tt)&&T.begin(E,q);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(X),X=ft.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,X,q),w=nt.get(C,y.length),w.init(X),w.state.textureUnits=kt.getTextureUnits(),y.push(w),dt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),X.isArrayCamera?se.setFromArrayCamera(X):Bt.setFromProjectionMatrix(dt,Rn,X.reversedDepth),_e=this.localClippingEnabled,qt=at.init(this.clippingPlanes,_e),b=xt.get(C,M.length),b.init(),M.push(b),this.info.render.frame++,ft.enabled===!0&&ft.isPresenting===!0){const Ut=E.xr.getDepthSensingMesh();Ut!==null&&Tc(Ut,X,-1/0,E.sortObjects)}Tc(C,X,0,E.sortObjects),b.finish(),P!==null&&P.updateLights(w.state.lightsArray),E.sortObjects===!0&&b.sort(St,Nt),Dt=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Dt&&k.addToRenderList(b,C),this.info.autoReset===!0&&this.info.reset(),qt===!0&&at.beginShadows();const Q=w.state.shadowsArray;if(_t.render(Q,C,X),qt===!0&&at.endShadows(),($&&T.hasRenderPass())===!1){const Ut=b.opaque,wt=b.transmissive;if(w.setupLights(),X.isArrayCamera){const Rt=X.cameras;if(wt.length>0)for(let zt=0,$t=Rt.length;zt<$t;zt++){const le=Rt[zt];hf(Ut,wt,C,le)}Dt&&k.render(C);for(let zt=0,$t=Rt.length;zt<$t;zt++){const le=Rt[zt];cf(b,C,le,le.viewport)}}else wt.length>0&&hf(Ut,wt,C,X),Dt&&k.render(C),cf(b,C,X)}q!==null&&W===0&&(kt.updateMultisampleRenderTarget(q),kt.updateRenderTargetMipmap(q)),$&&T.end(E),C.isScene===!0&&C.onAfterRender(E,C,X),Mt.resetDefaultState(),G=-1,Z=null,y.pop(),y.length>0?(w=y[y.length-1],kt.setTextureUnits(w.state.textureUnits),qt===!0&&at.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,M.pop(),M.length>0?b=M[M.length-1]:b=null,P!==null&&P.renderEnd()};function Tc(C,X,tt,$){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)tt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)w.pushLight(C),C.castShadow&&w.pushShadow(C);else if(C.isSprite){const Ut=X.isArrayCamera?se:Bt;if(!C.frustumCulled||C.intersectsFrustum(Ut)){$&&yt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(dt);const wt=ut.update(C),Rt=C.material;Rt.visible&&b.push(C,wt,Rt,tt,yt.z,null,X)}}else if(C.isMesh||C.isLine||C.isPoints){const Ut=X.isArrayCamera?se:Bt;if(!C.frustumCulled||C.intersectsFrustum(Ut)){const wt=ut.update(C),Rt=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),yt.copy(C.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),yt.copy(wt.boundingSphere.center)),yt.applyMatrix4(C.matrixWorld).applyMatrix4(dt)),Array.isArray(Rt)){const zt=wt.groups;for(let $t=0,le=zt.length;$t<le;$t++){const Ft=zt[$t],ce=Rt[Ft.materialIndex];ce&&ce.visible&&b.push(C,wt,ce,tt,yt.z,Ft,X)}}else Rt.visible&&b.push(C,wt,Rt,tt,yt.z,null,X)}}}const Et=C.children;for(let Ut=0,wt=Et.length;Ut<wt;Ut++)Tc(Et[Ut],X,tt,$)}function cf(C,X,tt,$){const{opaque:Q,transmissive:Et,transparent:Ut}=C;w.setupLightsView(tt),qt===!0&&at.setGlobalState(E.clippingPlanes,tt),$&&mt.viewport(j.copy($)),Q.length>0&&ta(Q,X,tt),Et.length>0&&ta(Et,X,tt),Ut.length>0&&ta(Ut,X,tt),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function hf(C,X,tt,$){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[$.id]===void 0){const Ft=Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[$.id]=new Cn(1,1,{generateMipmaps:!0,type:Ft?An:hn,minFilter:En,samples:Math.max(4,Jt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}const Et=w.state.transmissionRenderTarget[$.id],Ut=$.viewport||j;Et.setSize(Ut.z*E.transmissionResolutionScale,Ut.w*E.transmissionResolutionScale);const wt=E.getRenderTarget(),Rt=E.getActiveCubeFace(),zt=E.getActiveMipmapLevel();E.setRenderTarget(Et),E.getClearColor(O),J=E.getClearAlpha(),J<1&&E.setClearColor(16777215,.5),E.clear(),Dt&&k.render(tt);const $t=E.toneMapping;E.toneMapping=ti;const le=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),w.setupLightsView($),qt===!0&&at.setGlobalState(E.clippingPlanes,$),ta(C,tt,$),kt.updateMultisampleRenderTarget(Et),kt.updateRenderTargetMipmap(Et),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let ce=0,Ue=X.length;ce<Ue;ce++){const Me=X[ce],{object:ve,geometry:Qe,material:Ot,group:on}=Me;if(Ot.side===Ae&&ve.layers.test($.layers)){const me=Ot.side;Ot.side=en,Ot.needsUpdate=!0,uf(ve,tt,$,Qe,Ot,on),Ot.side=me,Ot.needsUpdate=!0,Ft=!0}}Ft===!0&&(kt.updateMultisampleRenderTarget(Et),kt.updateRenderTargetMipmap(Et))}E.setRenderTarget(wt,Rt,zt),E.setClearColor(O,J),le!==void 0&&($.viewport=le),E.toneMapping=$t}function ta(C,X,tt){const $=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,Et=C.length;Q<Et;Q++){const Ut=C[Q],{object:wt,geometry:Rt,group:zt}=Ut;let $t=Ut.material;$t.allowOverride===!0&&$!==null&&($t=$),wt.layers.test(tt.layers)&&uf(wt,X,tt,Rt,$t,zt)}}function uf(C,X,tt,$,Q,Et){P!==null&&Q.isNodeMaterial&&P.setObject(C,Q),C.onBeforeRender(E,X,tt,$,Q,Et),C.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(E,X,tt,$,C,Et),Q.transparent===!0&&Q.side===Ae&&Q.forceSinglePass===!1?(Q.side=en,Q.needsUpdate=!0,E.renderBufferDirect(tt,X,$,Q,C,Et),Q.side=Mi,Q.needsUpdate=!0,E.renderBufferDirect(tt,X,$,Q,C,Et),Q.side=Ae):E.renderBufferDirect(tt,X,$,Q,C,Et),C.onAfterRender(E,X,tt,$,Q,Et)}function df(C){let X=0;for(const tt of C)tt.texture!==null&&X++;return X}function Ir(C,X,tt){X.isScene!==!0&&(X=Kt);const $=It.get(C),Q=w.state.lights,Et=w.state.shadowsArray,Ut=Q.state.version,wt=it.getParameters(C,Q.state,Et,X,tt,w.state.lightProbeGridArray),Rt=it.getProgramCacheKey(wt);let zt=$.programs;$.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?X.environment:null,$.fog=X.fog;const $t=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;$.envMap=D.get(C.envMap||$.environment,$t),$.envMapRotation=$.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,zt===void 0&&(C.addEventListener("dispose",xe),zt=new Map,$.programs=zt,$.programVariants=new Map);let le=zt.get(Rt);if(le!==void 0){if($.currentProgram===le&&$.lightsStateVersion===Ut)return pf(C,wt),le}else wt.uniforms=it.getUniforms(C),P!==null&&C.isNodeMaterial&&P.build(C,tt,wt),C.onBeforeCompile(wt,E),le=it.acquireProgram(wt,Rt),zt.set(Rt,le),$.uniforms=wt.uniforms;const Ft=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ft.clippingPlanes=at.uniform),pf(C,wt),$.needsLights=oS(C),$.lightsStateVersion=Ut,$.needsLights&&(Ft.ambientLightColor.value=Q.state.ambient,Ft.lightProbe.value=Q.state.probe,Ft.sunLights.value=Q.state.sun,Ft.sunLightShadows.value=Q.state.sunShadow,Ft.directionalLights.value=Q.state.directional,Ft.directionalLightShadows.value=Q.state.directionalShadow,Ft.spotLights.value=Q.state.spot,Ft.spotLightShadows.value=Q.state.spotShadow,Ft.rectAreaLights.value=Q.state.rectArea,Ft.ltc_1.value=Q.state.rectAreaLTC1,Ft.ltc_2.value=Q.state.rectAreaLTC2,Ft.pointLights.value=Q.state.point,Ft.pointLightShadows.value=Q.state.pointShadow,Ft.hemisphereLights.value=Q.state.hemi,Ft.sunShadowMatrix.value=Q.state.sunShadowMatrix,Ft.sunShadowCascade.value=Q.state.sunShadowCascade,Ft.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ft.spotLightMatrix.value=Q.state.spotLightMatrix,Ft.spotLightMap.value=Q.state.spotLightMap,Ft.pointShadowMatrix.value=Q.state.pointShadowMatrix),$.numLightProbeGrids=df(w.state.lightProbeGridArray),$.currentProgram=le,$.uniformsList=null,le}function iS(C,X,tt,$,Q){const Et=It.get(C),Ut=Et.currentProgram.id+","+$+","+Q;let wt=Et.programVariants.get(Ut);return wt===void 0?(wt=Ir(C,X,tt),Et.programVariants.set(Ut,wt)):(Et.currentProgram=wt,Et.uniformsList=null,Et.outputColorSpace=$,Et.toneMapping=Q),wt}function ff(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Lo.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function pf(C,X){const tt=It.get(C);tt.outputColorSpace=X.outputColorSpace,tt.batching=X.batching,tt.batchingColor=X.batchingColor,tt.instancing=X.instancing,tt.instancingColor=X.instancingColor,tt.instancingMorph=X.instancingMorph,tt.skinning=X.skinning,tt.morphTargets=X.morphTargets,tt.morphNormals=X.morphNormals,tt.morphColors=X.morphColors,tt.morphTargetsCount=X.morphTargetsCount,tt.numClippingPlanes=X.numClippingPlanes,tt.numIntersection=X.numClipIntersection,tt.vertexAlphas=X.vertexAlphas,tt.vertexTangents=X.vertexTangents,tt.toneMapping=X.toneMapping}function sS(C,X,tt,$,Q){X.isScene!==!0&&(X=Kt),kt.resetTextureUnits();const Et=X.fog,Ut=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?X.environment:null,wt=q===null?E.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:he.workingColorSpace,Rt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,zt=D.get($.envMap||Ut,Rt),$t=$.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,le=!!tt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ft=!!tt.morphAttributes.position,ce=!!tt.morphAttributes.normal,Ue=!!tt.morphAttributes.color;let Me=ti;$.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Me=E.toneMapping);const ve=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Qe=ve!==void 0?ve.length:0,Ot=It.get($),on=w.state.lights;if(qt===!0&&(_e===!0||C!==Z)){const Ee=C===Z&&$.id===G;at.setState($,C,Ee)}let me=!1,ss=!1;$.version===Ot.__version?Ot.needsLights&&Ot.lightsStateVersion!==on.state.version||Q.isBatchedMesh&&Ot.batching===!1||!Q.isBatchedMesh&&Ot.batching===!0||Q.isBatchedMesh&&Ot.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Ot.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Ot.instancing===!1||!Q.isInstancedMesh&&Ot.instancing===!0||Q.isSkinnedMesh&&Ot.skinning===!1||!Q.isSkinnedMesh&&Ot.skinning===!0||Q.isInstancedMesh&&Ot.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ot.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ot.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ot.instancingMorph===!1&&Q.morphTexture!==null||Ot.envMap!==zt||$.fog===!0&&Ot.fog!==Et||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==at.numPlanes||Ot.numIntersection!==at.numIntersection)||Ot.vertexAlphas!==$t||Ot.vertexTangents!==le||Ot.morphTargets!==Ft||Ot.morphNormals!==ce||Ot.morphColors!==Ue||Ot.morphTargetsCount!==Qe||Ot.numLightProbeGrids!==df(w.state.lightProbeGridArray)?me=!0:(Ot.outputColorSpace!==wt||Ot.toneMapping!==Me)&&(ss=!0):(me=!0,Ot.__version=$.version);let tn=Ot.currentProgram;(me===!0||ss===!0)&&(tn=ss===!0?iS($,X,Q,wt,Me):Ir($,X,Q),P&&$.isNodeMaterial&&P.onUpdateProgram($,tn,Ot));let ea=!1,Gi=!1,rs=!1;const ue=tn.getUniforms(),qe=Ot.uniforms;if(mt.useProgram(tn.program)&&(ea=!0,Gi=!0,rs=!0),$.id!==G&&(G=$.id,Gi=!0),ea||Z!==C){mt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ue.setValue(B,"projectionMatrix",C.projectionMatrix),ue.setValue(B,"viewMatrix",C.matrixWorldInverse);const Ye=ue.map.cameraPosition;Ye!==void 0&&Ye.setValue(B,vt.setFromMatrixPosition(C.matrixWorld)),Jt.logarithmicDepthBuffer&&ue.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ue.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),Z!==C&&(Z=C,Gi=!0,rs=!0)}if(Ot.needsLights&&(on.state.sunShadowMap.length>0&&ue.setValue(B,"sunShadowMap",on.state.sunShadowMap,kt),on.state.directionalShadowMap.length>0&&ue.setValue(B,"directionalShadowMap",on.state.directionalShadowMap,kt),on.state.spotShadowMap.length>0&&ue.setValue(B,"spotShadowMap",on.state.spotShadowMap,kt),on.state.pointShadowMap.length>0&&ue.setValue(B,"pointShadowMap",on.state.pointShadowMap,kt)),Q.isSkinnedMesh){ue.setOptional(B,Q,"bindMatrix"),ue.setOptional(B,Q,"bindMatrixInverse");const Ee=Q.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),ue.setValue(B,"boneTexture",Ee.boneTexture,kt))}Q.isBatchedMesh&&(ue.setOptional(B,Q,"batchingTexture"),ue.setValue(B,"batchingTexture",Q._matricesTexture,kt),ue.setOptional(B,Q,"batchingIdTexture"),ue.setValue(B,"batchingIdTexture",Q._indirectTexture,kt),ue.setOptional(B,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ue.setValue(B,"batchingColorTexture",Q._colorsTexture,kt));const Bn=tt.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&ht.update(Q,tt,tn),(Gi||Ot.receiveShadow!==Q.receiveShadow)&&(Ot.receiveShadow=Q.receiveShadow,ue.setValue(B,"receiveShadow",Q.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&X.environment!==null&&(qe.envMapIntensity.value=X.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=U1()),Gi){if(ue.setValue(B,"toneMappingExposure",E.toneMappingExposure),Ot.needsLights&&rS(qe,rs),Et&&$.fog===!0&&pt.refreshFogUniforms(qe,Et),pt.refreshMaterialUniforms(qe,$,ct,st,w.state.transmissionRenderTarget[C.id]),Ot.needsLights&&Ot.numLightProbeGrids>0){const Ee=S;let Ye=0;for(const xi of w.state.lightProbeGridArray)xi.texture!==null&&(Ee.textures[Ye]=xi.texture,Ee.min[Ye]=xi.boundingBox.min,Ee.max[Ye]=xi.boundingBox.max,Ee.resolution[Ye]=xi.resolution,Ye++);for(const xi in Ee)Ee[xi].length=Ye;qe.probesSH.value=Ee.textures,qe.probesMin.value=Ee.min,qe.probesMax.value=Ee.max,qe.probesResolution.value=Ee.resolution}Lo.upload(B,ff(Ot),qe,kt)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Lo.upload(B,ff(Ot),qe,kt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ue.setValue(B,"center",Q.center),ue.setValue(B,"modelViewMatrix",Q.modelViewMatrix),ue.setValue(B,"normalMatrix",Q.normalMatrix),ue.setValue(B,"modelMatrix",Q.matrixWorld),$.uniformsGroups!==void 0){const Ee=$.uniformsGroups;for(let Ye=0,xi=Ee.length;Ye<xi;Ye++){const gf=Ee[Ye];Gt.update(gf,tn),Gt.bind(gf,tn)}}return tn}function rS(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.sunLights.needsUpdate=X,C.sunLightShadows.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function oS(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(C,X,tt){const $=It.get(C);$.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),It.get(C.texture).__webglTexture=X,It.get(C.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:tt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const tt=It.get(C);tt.__webglFramebuffer=X,tt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,tt=0){q=C,I=X,W=tt;let $=null,Q=!1,Et=!1;if(C){const wt=It.get(C);if(wt.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(B.FRAMEBUFFER,wt.__webglFramebuffer),j.copy(C.viewport),U.copy(C.scissor),V=C.scissorTest,mt.viewport(j),mt.scissor(U),mt.setScissorTest(V),G=-1;return}else if(wt.__webglFramebuffer===void 0)kt.setupRenderTarget(C);else if(wt.__hasExternalTextures)kt.rebindTextures(C,It.get(C.texture).__webglTexture,It.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const $t=C.depthTexture;if(wt.__boundDepthTexture!==$t){if($t!==null&&It.has($t)&&(C.width!==$t.image.width||C.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(C)}}const Rt=C.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(Et=!0);const zt=It.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(zt[X])?$=zt[X][tt]:$=zt[X],Q=!0):C.samples>0&&kt.useMultisampledRTT(C)===!1?$=It.get(C).__webglMultisampledFramebuffer:Array.isArray(zt)?$=zt[tt]:$=zt,j.copy(C.viewport),U.copy(C.scissor),V=C.scissorTest}else j.copy(rt).multiplyScalar(ct).floor(),U.copy(ot).multiplyScalar(ct).floor(),V=Ct;if(tt!==0&&($=F),mt.bindFramebuffer(B.FRAMEBUFFER,$)&&mt.drawBuffers(C,$),mt.viewport(j),mt.scissor(U),mt.setScissorTest(V),Q){const wt=It.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,wt.__webglTexture,tt)}else if(Et){const wt=X;for(let Rt=0;Rt<C.textures.length;Rt++){const zt=It.get(C.textures[Rt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Rt,zt.__webglTexture,tt,wt)}}else if(C!==null&&tt!==0){const wt=It.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,wt.__webglTexture,tt)}G=-1};function mf(C){const X=It.get(C);return(X.__readFormat!==C.format||X.__readType!==C.type)&&(X.__readFormat=C.format,X.__readType=C.type,X.__formatReadable=Jt.textureFormatReadable(C.format),X.__typeReadable=Jt.textureTypeReadable(C.type)),X}this.readRenderTargetPixels=function(C,X,tt,$,Q,Et,Ut,wt=0){if(!(C&&C.isWebGLRenderTarget)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=It.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Rt=Rt[Ut],Array.isArray(Rt)&&(Rt=Rt[0])),Rt){mt.bindFramebuffer(B.FRAMEBUFFER,Rt);try{const zt=C.textures[wt],$t=zt.format,le=zt.type;C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+wt);const Ft=mf(zt);if(Ft.__formatReadable===!1){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-$&&tt>=0&&tt<=C.height-Q&&B.readPixels(X,tt,$,Q,gt.convert($t),gt.convert(le),Et)}finally{const zt=q!==null?It.get(q).__webglFramebuffer:null;mt.bindFramebuffer(B.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(C,X,tt,$,Q,Et,Ut,wt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=It.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Rt=Rt[Ut],Array.isArray(Rt)&&(Rt=Rt[0])),Rt)if(X>=0&&X<=C.width-$&&tt>=0&&tt<=C.height-Q){mt.bindFramebuffer(B.FRAMEBUFFER,Rt);const zt=C.textures[wt],$t=zt.format,le=zt.type;C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+wt);const Ft=mf(zt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ce),B.bufferData(B.PIXEL_PACK_BUFFER,Et.byteLength,B.STREAM_READ),B.readPixels(X,tt,$,Q,gt.convert($t),gt.convert(le),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Ue=q!==null?It.get(q).__webglFramebuffer:null;mt.bindFramebuffer(B.FRAMEBUFFER,Ue);const Me=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await jf(B,Me,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ce),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Et),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ce),B.deleteSync(Me),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,tt=0){const $=Math.pow(2,-tt),Q=Math.floor(C.image.width*$),Et=Math.floor(C.image.height*$),Ut=X!==null?X.x:0,wt=X!==null?X.y:0;kt.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,tt,0,0,Ut,wt,Q,Et),mt.unbindTexture()},this.copyTextureToTexture=function(C,X,tt=null,$=null,Q=0,Et=0){let Ut,wt,Rt,zt,$t,le,Ft,ce,Ue;const Me=C.isCompressedTexture?C.mipmaps[Et]:C.image;if(tt!==null)Ut=tt.max.x-tt.min.x,wt=tt.max.y-tt.min.y,Rt=tt.isBox3?tt.max.z-tt.min.z:1,zt=tt.min.x,$t=tt.min.y,le=tt.isBox3?tt.min.z:0;else{const ue=Math.pow(2,-Q);Ut=Math.floor(Me.width*ue),wt=Math.floor(Me.height*ue),C.isDataArrayTexture?Rt=Me.depth:C.isData3DTexture?Rt=Math.floor(Me.depth*ue):Rt=1,zt=0,$t=0,le=0}$!==null?(Ft=$.x,ce=$.y,Ue=$.z):(Ft=0,ce=0,Ue=0);const ve=gt.convert(X.format),Qe=gt.convert(X.type);let Ot;X.isData3DTexture?(kt.setTexture3D(X,0),Ot=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(kt.setTexture2DArray(X,0),Ot=B.TEXTURE_2D_ARRAY):(kt.setTexture2D(X,0),Ot=B.TEXTURE_2D),mt.activeTexture(B.TEXTURE0),mt.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),mt.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),mt.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const on=mt.getParameter(B.UNPACK_ROW_LENGTH),me=mt.getParameter(B.UNPACK_IMAGE_HEIGHT),ss=mt.getParameter(B.UNPACK_SKIP_PIXELS),tn=mt.getParameter(B.UNPACK_SKIP_ROWS),ea=mt.getParameter(B.UNPACK_SKIP_IMAGES);mt.pixelStorei(B.UNPACK_ROW_LENGTH,Me.width),mt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Me.height),mt.pixelStorei(B.UNPACK_SKIP_PIXELS,zt),mt.pixelStorei(B.UNPACK_SKIP_ROWS,$t),mt.pixelStorei(B.UNPACK_SKIP_IMAGES,le);const Gi=C.isDataArrayTexture||C.isData3DTexture,rs=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const ue=It.get(C),qe=It.get(X),Bn=It.get(ue.__renderTarget),Ee=It.get(qe.__renderTarget);mt.bindFramebuffer(B.READ_FRAMEBUFFER,Bn.__webglFramebuffer),mt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ye=0;Ye<Rt;Ye++)Gi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.get(C).__webglTexture,Q,le+Ye),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.get(X).__webglTexture,Et,Ue+Ye)),B.blitFramebuffer(zt,$t,zt+Ut,$t+wt,Ft,ce,Ft+Ut,ce+wt,B.DEPTH_BUFFER_BIT,B.NEAREST);mt.bindFramebuffer(B.READ_FRAMEBUFFER,null),mt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||It.has(C)){const ue=It.get(C),qe=It.get(X);mt.bindFramebuffer(B.READ_FRAMEBUFFER,L),mt.bindFramebuffer(B.DRAW_FRAMEBUFFER,N);for(let Bn=0;Bn<Rt;Bn++)Gi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ue.__webglTexture,Q,le+Bn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ue.__webglTexture,Q),rs?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,qe.__webglTexture,Et,Ue+Bn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,qe.__webglTexture,Et),Q!==0?B.blitFramebuffer(zt,$t,zt+Ut,$t+wt,Ft,ce,Ft+Ut,ce+wt,B.COLOR_BUFFER_BIT,B.NEAREST):rs?B.copyTexSubImage3D(Ot,Et,Ft,ce,Ue+Bn,zt,$t,Ut,wt):B.copyTexSubImage2D(Ot,Et,Ft,ce,zt,$t,Ut,wt);mt.bindFramebuffer(B.READ_FRAMEBUFFER,null),mt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else rs?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Ot,Et,Ft,ce,Ue,Ut,wt,Rt,ve,Qe,Me.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Ot,Et,Ft,ce,Ue,Ut,wt,Rt,ve,Me.data):B.texSubImage3D(Ot,Et,Ft,ce,Ue,Ut,wt,Rt,ve,Qe,Me):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Et,Ft,ce,Ut,wt,ve,Qe,Me.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Et,Ft,ce,Me.width,Me.height,ve,Me.data):B.texSubImage2D(B.TEXTURE_2D,Et,Ft,ce,Ut,wt,ve,Qe,Me);mt.pixelStorei(B.UNPACK_ROW_LENGTH,on),mt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,me),mt.pixelStorei(B.UNPACK_SKIP_PIXELS,ss),mt.pixelStorei(B.UNPACK_SKIP_ROWS,tn),mt.pixelStorei(B.UNPACK_SKIP_IMAGES,ea),Et===0&&X.generateMipmaps===!0&&X.mipmapsAutoUpdate===!0&&B.generateMipmap(Ot),mt.unbindTexture()},this.initRenderTarget=function(C){It.get(C).__webglFramebuffer===void 0&&kt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?kt.setTextureCube(C,0):C.isData3DTexture?kt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?kt.setTexture2DArray(C,0):kt.setTexture2D(C,0),mt.unbindTexture()},this.resetState=function(){I=0,W=0,q=null,mt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}const Uu={type:"change"},Bl={type:"start"},Fu={type:"end"},Do=new io,Ou=new Wn,O1=Math.cos(70*ae.DEG2RAD),Ge=new Y,an=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gl=1e-6;class z1 extends y0{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qn.ROTATE,MIDDLE:Qn.DOLLY,RIGHT:Qn.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new _n,this._lastTargetPosition=new Y,this._quat=new _n().setFromUnitVectors(t.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Eo,this._sphericalDelta=new Eo,this._scale=1,this._panOffset=new Y,this._rotateStart=new Pt,this._rotateEnd=new Pt,this._rotateDelta=new Pt,this._panStart=new Pt,this._panEnd=new Pt,this._panDelta=new Pt,this._dollyStart=new Pt,this._dollyEnd=new Pt,this._dollyDelta=new Pt,this._dollyDirection=new Y,this._mouse=new Pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=G1.bind(this),this._onPointerDown=B1.bind(this),this._onPointerUp=k1.bind(this),this._onContextMenu=K1.bind(this),this._onMouseWheel=V1.bind(this),this._onKeyDown=X1.bind(this),this._onTouchStart=Y1.bind(this),this._onTouchMove=Z1.bind(this),this._onMouseDown=H1.bind(this),this._onMouseMove=W1.bind(this),this._interceptControlDown=q1.bind(this),this._interceptControlUp=J1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=fe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uu),this.update(),this.state=fe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ge.copy(e).sub(this.target),Ge.applyQuaternion(this._quat),this._spherical.setFromVector3(Ge),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ge.setFromSpherical(this._spherical),Ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ge.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new Y(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Do.origin.copy(this.object.position),Do.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Do.direction))<O1?this.object.lookAt(this.target):(Ou.setFromNormalAndCoplanarPoint(this.object.up,this.target),Do.intersectPlane(Ou,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Gl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gl||this._lastTargetPosition.distanceToSquared(this.target)>Gl?(this.dispatchEvent(Uu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?an/60*this.autoRotateSpeed*t:an/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ge.setFromMatrixColumn(e,0),Ge.multiplyScalar(-t),this._panOffset.add(Ge)}_panUp(t,e){this.screenSpacePanning===!0?Ge.setFromMatrixColumn(e,1):(Ge.setFromMatrixColumn(e,0),Ge.crossVectors(this.object.up,Ge)),Ge.multiplyScalar(t),this._panOffset.add(Ge)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ge.copy(s).sub(this.target);let r=Ge.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function B1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function G1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function k1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fu),this.state=fe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function H1(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Qn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=fe.DOLLY;break;case Qn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}break;case Qn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Bl)}function W1(i){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function V1(i){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(i.preventDefault(),this.dispatchEvent(Bl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Fu))}function X1(i){this.enabled!==!1&&this._handleKeyDown(i)}function Y1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case vi.ROTATE:if(this.enableRotate===!1){this.state=fe.NONE;break}this._handleTouchStartRotate(i),this.state=fe.TOUCH_ROTATE;break;case vi.PAN:if(this.enablePan===!1){this.state=fe.NONE;break}this._handleTouchStartPan(i),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=fe.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Bl)}function Z1(i){switch(this._trackPointer(i),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=fe.NONE}}function K1(i){this.enabled!==!1&&i.preventDefault()}function q1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function J1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const kl=new Wn,Io=new S0,Cs=new Pt,Hl=new Y;class $1 extends z1{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Qn.PAN,MIDDLE:Qn.DOLLY,RIGHT:Qn.ROTATE},this.touches={ONE:vi.PAN,TWO:vi.DOLLY_ROTATE},this._panWorldStart=new Y}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;kl.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();Cs.x=(t.clientX-n.left)/n.width*2-1,Cs.y=-((t.clientY-n.top)/n.height)*2+1,Io.setFromCamera(Cs,this.object),Io.ray.intersectPlane(kl,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();Cs.x=(t.clientX-n.left)/n.width*2-1,Cs.y=-((t.clientY-n.top)/n.height)*2+1,Io.setFromCamera(Cs,this.object),Io.ray.intersectPlane(kl,Hl)&&(Hl.sub(this._panWorldStart),this._panOffset.copy(Hl).negate(),this.update())}}const No=new Lt;function z(i){return No.set(i),[No.r,No.g,No.b]}function Xt(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function vr(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function Ie(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class re{constructor(){H(this,"pos",[]);H(this,"nor",[]);H(this,"col",[]);H(this,"glo",[]);H(this,"ox",0);H(this,"oy",0);H(this,"oz",0);H(this,"c",1);H(this,"s",0)}get vertexCount(){return this.pos.length/3}gradientY(t,e,n,s,r){for(let o=t*3;o<this.pos.length;o+=3){const a=ae.clamp((this.pos[o+1]-e)/(n-e),0,1);for(let l=0;l<3;l++)this.col[o+l]=s[l]+(r[l]-s[l])*a}}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,o,a,l,c,h,u=0){const d=this.wx(t,n),f=this.wz(t,n),p=this.oy+e,g=this.wx(s,o),m=this.wz(s,o),x=this.oy+r,_=this.wx(a,c),v=this.wz(a,c),S=this.oy+l,b=g-d,w=x-p,M=m-f,y=_-d,T=S-p,E=v-f;let R=w*E-M*T,P=M*y-b*E,F=b*T-w*y;const L=Math.hypot(R,P,F)||1;R/=L,P/=L,F/=L,this.pos.push(d,p,f,g,x,m,_,S,v),this.nor.push(R,P,F,R,P,F,R,P,F),this.col.push(h[0],h[1],h[2],h[0],h[1],h[2],h[0],h[1],h[2]),this.glo.push(u,u,u)}quad(t,e,n,s,r,o,a,l,c,h,u,d,f,p=0){this.tri(t,e,n,s,r,o,a,l,c,f,p),this.tri(t,e,n,a,l,c,h,u,d,f,p)}box(t,e,n,s,r,o,a,l=void 0,c=null,h=0){this.quad(t,e,o,s,e,o,s,r,o,t,r,o,a,h),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,a,h),this.quad(s,e,o,s,e,n,s,r,n,s,r,o,a,h),this.quad(t,e,n,t,e,o,t,r,o,t,r,n,a,h),l!==null&&this.quad(t,r,o,s,r,o,s,r,n,t,r,n,l??a,h),c&&this.quad(t,e,n,s,e,n,s,e,o,t,e,o,c,h)}cyl(t,e,n,s,r,o,a,l,c=null,h=0){const u=e+o;for(let d=0;d<a;d++){const f=d/a*Math.PI*2,p=(d+1)/a*Math.PI*2,g=Math.cos(f),m=Math.sin(f),x=Math.cos(p),_=Math.sin(p);r>1e-4?(this.quad(t+g*s,e,n+m*s,t+g*r,u,n+m*r,t+x*r,u,n+_*r,t+x*s,e,n+_*s,l,h),c&&this.tri(t,u,n,t+x*r,u,n+_*r,t+g*r,u,n+m*r,c,h)):this.tri(t+g*s,e,n+m*s,t,u,n,t+x*s,e,n+_*s,l,h)}}blob(t,e,n,s,r,o,a,l,c,h,u=0){const d=h??c;for(let f=0;f<l;f++){const p=f/l*Math.PI,g=(f+1)/l*Math.PI,m=Math.cos(p),x=Math.cos(g),_=Math.sin(p),v=Math.sin(g),S=vr(c,d,1-(f+.5)/l);for(let b=0;b<a;b++){const w=b/a*Math.PI*2,M=(b+1)/a*Math.PI*2,y=Math.cos(w),T=Math.sin(w),E=Math.cos(M),R=Math.sin(M),P=t+y*_*s,F=e+m*r,L=n+T*_*o,N=t+E*_*s,I=n+R*_*o,W=t+y*v*s,q=e+x*r,G=n+T*v*o,Z=t+E*v*s,j=n+R*v*o;f>0&&this.tri(P,F,L,N,F,I,Z,q,j,S,u),f<l-1&&this.tri(P,F,L,Z,q,j,W,q,G,S,u)}}}walls(t,e,n,s,r=0){const o=t.length/2,a=Mr(t)>0;for(let l=0;l<o;l++){const c=(l+1)%o,h=t[l*2],u=t[l*2+1],d=t[c*2],f=t[c*2+1];a?this.quad(d,e,f,h,e,u,h,n,u,d,n,f,s,r):this.quad(h,e,u,d,e,f,d,n,f,h,n,u,s,r)}}cap(t,e,n,s=0){const r=t.length/2,o=[];for(let l=0;l<r;l++)o.push(new Pt(t[l*2],t[l*2+1]));const a=Mo.triangulateShape(o,[]);for(const l of a){const c=o[l[0]],h=o[l[1]],u=o[l[2]];(h.x-c.x)*(u.y-c.y)-(h.y-c.y)*(u.x-c.x)>0?this.tri(c.x,e,c.y,u.x,e,u.y,h.x,e,h.y,n,s):this.tri(c.x,e,c.y,h.x,e,h.y,u.x,e,u.y,n,s)}}build(){const t=new Ce;return t.setAttribute("position",new Te(new Float32Array(this.pos),3)),t.setAttribute("normal",new Te(new Float32Array(this.nor),3)),t.setAttribute("color",new Te(new Float32Array(this.col),3)),t.setAttribute("glow",new Te(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function Mr(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const Uo={value:0};function Ls(i={}){const t=new Un({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??Ae}),e=new Lt(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=Uo,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>"inverloch-model",t}function Ps(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=Uo,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.82 * uNight;`)},i.customProgramCacheKey=()=>"inverloch-unlit",i}const j1=8192,hi=256,Q1=420,zu=2048,Bu=[-1,1],Gu=`
uniform sampler2D uCloudMap;
uniform vec2 uCloudOffset;
uniform float uCloudCover;
uniform float uCloudFlash;
const float cloudHeight = ${Q1.toFixed(1)};

float cloudDensity(vec2 position) {
  float density = texture2D(uCloudMap, position / ${j1.toFixed(1)} - uCloudOffset).r;
  float edge = mix(0.78, 0.29, uCloudCover);
  return smoothstep(edge, edge + 0.13, density) * smoothstep(0.0, 0.08, uCloudCover);
}
`,t_=`
uniform vec3 uCloudSunDir;
uniform float uCloudShadowStrength;

float cloudSunlight(vec3 position) {
  float layerDistance = cloudHeight - position.y;
  if (layerDistance <= 0.0 || uCloudShadowStrength <= 0.0 || uCloudCover <= 0.0) return 1.0;
  vec2 projection = position.xz + layerDistance * uCloudSunDir.xz / max(uCloudSunDir.y, 0.06);
  return 1.0 - uCloudShadowStrength * cloudDensity(projection) * smoothstep(0.0, 70.0, layerDistance);
}
`;function Fo(i,t,e){const n=Math.imul(i%e,374761393)^Math.imul(t%e,668265263)^Math.imul(e,1442695041),s=Math.imul(n^n>>>13,1274126177);return((s^s>>>16)>>>0)/4294967295}function Wl(i,t,e){const n=Math.floor(i*e),s=Math.floor(t*e),r=i*e-n,o=t*e-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=ae.lerp(Fo(n,s,e),Fo(n+1,s,e),a),h=ae.lerp(Fo(n,s+1,e),Fo(n+1,s+1,e),a);return ae.lerp(c,h,l)}function e_(){const i=new Uint8Array(hi*hi);for(let e=0;e<hi;e++)for(let n=0;n<hi;n++){const s=(n+.5)/hi,r=(e+.5)/hi,o=.67*Wl(s,r,24)+.23*Wl(s,r,48)+.1*Wl(s,r,96);i[e*hi+n]=Math.round(255*o)}const t=new ar(i,hi,hi,Fr);return t.wrapS=t.wrapT=Js,t.magFilter=ke,t.minFilter=En,t.generateMipmaps=!0,t.needsUpdate=!0,t}class n_{constructor(){H(this,"uniforms",{uCloudMap:{value:e_()},uCloudOffset:{value:new Pt},uCloudCover:{value:.38},uCloudFlash:{value:0},uFlashCenter:{value:new Pt}})}update(t){const e=ae.euclideanModulo(t,zu)/zu;this.uniforms.uCloudOffset.value.set(Bu[0]*e,Bu[1]*e)}setCover(t){this.uniforms.uCloudCover.value=ae.clamp(t,0,1)}setFlash(t){this.uniforms.uCloudFlash.value=ae.clamp(t,0,1)}dispose(){this.uniforms.uCloudMap.value.dispose()}}const ui={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},i_=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
  gl_Position = p.xyww;
}`,s_=`
${Gu}
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
}`;class r_{constructor(t,e,n,s,r=()=>!0){H(this,"sun",new jh(16777215,3));H(this,"hemi",new Yh(16777215,8947848,1));H(this,"sky");H(this,"horizon",{value:new Lt});H(this,"sunDir",new Y);H(this,"cloudShadowStrength",{value:0});H(this,"skyUniforms");H(this,"from");H(this,"to");H(this,"t",1);H(this,"mode","day");H(this,"exposure",1);H(this,"night",0);this.renderer=t,this.water=e,this.isDisplayed=r,this.from=this.to=ui.day,this.skyUniforms={...s.uniforms,uZenith:{value:new Lt},uHorizon:this.horizon,uBelow:{value:new Lt},uSunDir:{value:new Y},uSunColor:{value:new Lt},uSunGlow:{value:1},uNight:{value:0}},this.sky=new te(new Cl(1,32,16),new Ve({uniforms:this.skyUniforms,vertexShader:i_,fragmentShader:s_,side:en,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.setShadowSize(n),this.apply(1)}setShadowSize(t){var e;this.sun.castShadow=t>0,this.isDisplayed()&&(this.renderer.shadowMap.enabled=this.sun.castShadow),t>0?(this.sun.shadow.mapSize.set(t,t),this.sun.shadow.radius=1.5):((e=this.sun.shadow.map)==null||e.dispose(),this.sun.shadow.map=null,this.sun.position.copy(this.sunDir),this.sun.target.position.set(0,0,0))}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=ui[t],this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=ae.clamp(e*.7,90,2400),s=this.sun.shadow,r=s.camera,o=n*2/s.mapSize.x,a=Math.round(t.x/o)*o,l=Math.round(t.z/o)*o,c=n*2.4+300;this.sun.target.position.set(a,0,l),this.sun.position.set(a,0,l).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=ae.clamp(o*1.6,.06,1.2))}setSolar(t){const e=(t%1440+1440)%1440,n=6*60,s=20.5*60;let r,o;if(e>=n&&e<=s)o=(e-n)/(s-n),r=Math.sin(Math.PI*o)*70;else{const p=((e<n?e+1440:e)-s)/(1440-(s-n));o=p<.5?1:0,r=-Math.sin(Math.PI*p)*40}const a=ae.degToRad(110*(1-2*o)),l=ae.degToRad(Math.max(r,5)),c=[Math.sin(a)*Math.cos(l),Math.sin(l),-Math.cos(a)*Math.cos(l)];let h;r>=25?h=ui.day:r>=6?h=Vl(ui.golden,ui.day,(r-6)/19):r>=-6?h=Vl(ui.night,ui.golden,(r+6)/12):h=ui.night;const u=ae.clamp((2-r)/6,0,1),d=ui.night.sunDir,f=[c[0]+(d[0]-c[0])*u,c[1]+(d[1]-c[1])*u,c[2]+(d[2]-c[2])*u];this.from=this.to={...h,sunDir:f},this.mode=r>=25?"day":r>=-6?"golden":"night",this.apply(1)}snapshot(){return Vl(this.from,this.to,o_(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.castShadow||this.sun.position.copy(this.sunDir),this.cloudShadowStrength.value=.64*(1-ae.smoothstep(e.night,.25,.95)),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night;const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new Lt(e.shallow),.35),this.night=e.night,this.exposure=e.exposure,this.isDisplayed()&&this.applyRendererSettings()}applyRendererSettings(){this.renderer.shadowMap.enabled=this.sun.castShadow,this.renderer.toneMappingExposure=this.exposure,Uo.value=this.night}}function o_(i){return i*i*(3-2*i)}function Vl(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,o)=>new Lt(r).lerp(new Lt(o),e).getHex(),s=(r,o)=>r+(o-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}const Zn=1.5;class ku{constructor(t,e,n,s,r,o,a,l,c=[]){H(this,"nx");H(this,"nz");H(this,"y");H(this,"xMin");H(this,"zMin");H(this,"xMax");H(this,"zMax");H(this,"dx");H(this,"dz");H(this,"cellX");H(this,"cellZ");if(this.raw=t,this.exposure=e,this.w=n,this.h=s,this.sizeX=r,this.sizeZ=o,this.patches=c,this.cellX=r/n,this.cellZ=o/s,this.nx=Math.floor((n-1)/a)+1,this.nz=Math.floor((s-1)/a)+1,this.dx=this.cellX*a,this.dz=this.cellZ*a,this.xMin=-r/2+this.cellX/2,this.zMin=-o/2+this.cellZ/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=l??new Float32Array(this.nx*this.nz),!l)for(let h=0;h<this.nz;h++)for(let u=0;u<this.nx;u++)this.y[h*this.nx+u]=t[h*a*n+u*a]*Zn}yAt(t,e){for(const n of this.patches)if(t>=n.xMin&&t<=n.xMax&&e>=n.zMin&&e<=n.zMax)return Hu(n,t,e);return this.baseYAt(t,e)}baseYAt(t,e){return Hu(this,t,e)}patchOverlaps(t,e,n,s){return this.patches.some(r=>t<r.xMax&&n>r.xMin&&e<r.zMax&&s>r.zMin)}bilinear(t,e,n){let s=(e+this.sizeX/2)/this.cellX-.5,r=(n+this.sizeZ/2)/this.cellZ-.5;s<0?s=0:s>this.w-1.0001&&(s=this.w-1.0001),r<0?r=0:r>this.h-1.0001&&(r=this.h-1.0001);const o=s|0,a=r|0,l=s-o,c=r-a,h=a*this.w+o;return(t[h]*(1-l)+t[h+1]*l)*(1-c)+(t[h+this.w]*(1-l)+t[h+this.w+1]*l)*c}metresAt(t,e){return this.bilinear(this.raw,t,e)}exposureAt(t,e){return this.bilinear(this.exposure,t,e)}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}}function Hu(i,t,e){let n=(t-i.xMin)/i.dx,s=(e-i.zMin)/i.dz;n<0?n=0:n>i.nx-1&&(n=i.nx-1),s<0?s=0:s>i.nz-1&&(s=i.nz-1);const r=Math.min(n|0,i.nx-2),o=Math.min(s|0,i.nz-2),a=n-r,l=s-o,c=o*i.nx+r,h=i.y[c],u=i.y[c+1],d=i.y[c+i.nx],f=i.y[c+i.nx+1];return a+l<=1?h+(u-h)*a+(d-h)*l:f+(d-f)*(1-a)+(u-f)*(1-l)}const a_=[{ends:[40013,27439,27602,20489],tie:24,anchors:[[1280,11.8],[1300,10.8],[1320,9.98],[1330,9.81],[1340,9.67],[1350,9.93],[1365,10.17],[1380,10.55],[1400,10.77]]},{ends:[-4743,-403,-2772,-122],tie:12,anchors:[[59,24.62],[74,22.63],[89,19.69],[100,17.7],[110,15.95],[120,14.19],[132,12.07],[144,10.23]]},{ends:[-30214,11968,-40013,21095],tie:25,anchors:[[1080,5.14],[1100,5.2],[1120,5.57],[1135,6.65],[1150,8.61],[1155,9.24],[1165,10.35],[1175,11.65],[1192,15],[1210,18.4],[1235,20.68],[1255,21.63]]},{ends:[-17855,6215,-16707,-2373],tie:8,anchors:[[180,13.65],[192,16],[204,18.6],[220,21.02],[244,23.53]]},{ends:[-28032,6727,-24278,8117],tie:7,anchors:[[8,11.72],[14,11.51],[23,10.28],[33,8.42],[43,6.69],[52,5.53]]},{ends:[-30103,11645,-35027,11244],tie:13,anchors:[[428,5.87],[442,7.08],[457,10.26],[475,14.18],[495,17.64],[510,19.05],[529,20.38]]}],l_=.015,Wu=1.5;function Xl(i){const t=Math.max(0,Math.min(1,i));return t*t*(3-2*t)}function c_(i){const t=i[5];return a_.find(({ends:e})=>e[0]===t[0]&&e[1]===t[1]&&e[2]===t[t.length-2]&&e[3]===t[t.length-1])}class h_{constructor(t,e){H(this,"start");H(this,"end");H(this,"outer");H(this,"points",[]);H(this,"slopes");H(this,"halfWidth");this.profile=e,this.halfWidth=t[3]/20,this.outer=this.halfWidth+Wu+(t[0]<3?20:12);const{anchors:n,tie:s}=e;this.start=n[0][0]-s,this.end=n[n.length-1][0]+s;const r=n.slice(1).map(([l,c],h)=>(c-n[h][1])/(l-n[h][0]));this.slopes=[r[0]];for(let l=1;l<r.length;l++){const c=r[l-1],h=r[l];this.slopes.push(c*h>0?2*c*h/(c+h):0)}this.slopes.push(r[r.length-1]);const o=t[5];let a=0;for(let l=2;l<o.length;l+=2){const c=o[l-2]/10,h=o[l-1]/10,u=o[l]/10-c,d=o[l+1]/10-h,f=Math.hypot(u,d);if(f&&a+f>=this.start&&a<=this.end){const p=Math.max(this.start,a),g=Math.min(this.end,a+f);for(const m of this.points.length?[g]:[p,g])this.points.push({x:c+u*(m-a)/f,z:h+d*(m-a)/f,s:m})}a+=f}}weight(t){return Xl(Math.min(t-this.start,this.end-t)/this.profile.tie)}deckLift(t,e){return e+(.11-e)*this.weight(t)}elevation(t,e){const{anchors:n}=this.profile;let s=0;for(;s+2<n.length&&t>n[s+1][0];)s++;const[r,o]=n[s],[a,l]=n[s+1],c=a-r,h=(t-r)/c;return(h<0?o+(t-r)*this.slopes[s]:h>1?l+(t-a)*this.slopes[s+1]:o+(l-o)*Xl(h)+c*h*(1-h)*((1-h)*this.slopes[s]-h*this.slopes[s+1]))-Math.abs(e)*l_}ground(t,e,n,s,r=0){const o=t.baseYAt(e,n),a=this.weight(s);return o+(this.elevation(s,r)-o)*a}shoulder(t,e,n){let s=this.outer**2,r=0;for(let c=1;c<this.points.length;c++){const h=this.points[c-1],u=this.points[c],d=u.x-h.x,f=u.z-h.z,p=Math.max(0,Math.min(1,((t-h.x)*d+(e-h.z)*f)/(d*d+f*f||1))),g=(t-h.x-p*d)**2+(e-h.z-p*f)**2;g<s&&(s=g,r=h.s+(u.s-h.s)*p)}const o=this.weight(r);if(!o)return n;const a=Math.sqrt(s),l=Xl((this.outer-a)/(this.outer-this.halfWidth-Wu));return n+(this.elevation(r,a)-n)*o*l}}function Vu(i){const t=c_(i);return t&&new h_(i,t)}function u_(i,t){const e=[];for(const s of t){const r=Vu(s);if(!r||r.points.length<2)continue;const o=r.points.map(h=>h.x),a=r.points.map(h=>h.z),l=r.outer,c={i0:Math.max(0,Math.floor((Math.min(...o)-l-i.xMin)/i.dx)),i1:Math.min(i.nx-1,Math.ceil((Math.max(...o)+l-i.xMin)/i.dx)),j0:Math.max(0,Math.floor((Math.min(...a)-l-i.zMin)/i.dz)),j1:Math.min(i.nz-1,Math.ceil((Math.max(...a)+l-i.zMin)/i.dz)),grades:[r]};for(let h=0;h<e.length;){const u=e[h];if(c.i0>=u.i1||u.i0>=c.i1||c.j0>=u.j1||u.j0>=c.j1){h++;continue}c.i0=Math.min(c.i0,u.i0),c.i1=Math.max(c.i1,u.i1),c.j0=Math.min(c.j0,u.j0),c.j1=Math.max(c.j1,u.j1),c.grades.push(...u.grades),e.splice(h,1),h=0}e.push(c)}const n=Math.ceil(Math.max(i.dx,i.dz)/3);return e.map(({i0:s,i1:r,j0:o,j1:a,grades:l})=>{const c=i.xMin+s*i.dx,h=i.zMin+o*i.dz,u=i.xMin+r*i.dx,d=i.zMin+a*i.dz,f=(r-s)*n+1,p=(a-o)*n+1,g=i.dx/n,m=i.dz/n,x=new Float32Array(f*p);for(let _=0;_<p;_++)for(let v=0;v<f;v++){const S=c+v*g,b=h+_*m,w=i.baseYAt(S,b);let M=w;if(v>0&&v<f-1&&_>0&&_<p-1)for(const y of l)M+=y.shoulder(S,b,w)-w;x[_*f+v]=M}return{i0:s,i1:r,j0:o,j1:a,xMin:c,zMin:h,xMax:u,zMax:d,nx:f,nz:p,dx:g,dz:m,y:x}})}const Ds=128;function d_(i,t,e,n,s){const{nx:r,nz:o}=i,a=Math.min(Ds+1,r-t),l=Math.min(Ds+1,o-e),c=new Float32Array(a*l*3),h=new Float32Array(a*l*3),u=new Float32Array(a*l*2);for(let p=e;p<e+l;p++)for(let g=t;g<t+a;g++){const m=(p-e)*a+g-t,x=i.xMin+g*i.dx,_=i.zMin+p*i.dz;c[m*3]=x,c[m*3+1]=i.y[p*r+g],c[m*3+2]=_,u[m*2]=(x+n.sizeX/2)/n.sizeX,u[m*2+1]=1-(_+n.sizeZ/2)/n.sizeZ;const v=i!==n&&(g===0||p===0||g===r-1||p===o-1),S=v?(n.baseYAt(x+n.dx,_)-n.baseYAt(x-n.dx,_))/(2*n.dx):(i.y[p*r+Math.min(g+1,r-1)]-i.y[p*r+Math.max(g-1,0)])/(2*i.dx),b=v?(n.baseYAt(x,_+n.dz)-n.baseYAt(x,_-n.dz))/(2*n.dz):(i.y[Math.min(p+1,o-1)*r+g]-i.y[Math.max(p-1,0)*r+g])/(2*i.dz),w=Math.hypot(S,1,b);h[m*3]=-S/w,h[m*3+1]=1/w,h[m*3+2]=-b/w}const d=new Uint16Array((a-1)*(l-1)*6);let f=0;for(let p=0;p<l-1;p++)for(let g=0;g<a-1;g++){if(s.some(S=>t+g>=S.i0&&t+g<S.i1&&e+p>=S.j0&&e+p<S.j1))continue;const m=p*a+g,x=m+1,_=m+a,v=_+1;d[f++]=m,d[f++]=_,d[f++]=x,d[f++]=x,d[f++]=_,d[f++]=v}return{pos:c,nor:h,uv:u,idx:f===d.length?d:d.slice(0,f)}}function f_(i){const t=[];for(const e of[i,...i.patches])for(let n=0;n<e.nz-1;n+=Ds)for(let s=0;s<e.nx-1;s+=Ds){const r=e===i?i.patches.filter(o=>s<o.i1&&s+Ds>o.i0&&n<o.j1&&n+Ds>o.j0):[];t.push(d_(e,s,n,i,r))}return t}const Yl=10,p_=5,Is=4,Xu=3;function Oo(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Int16Array(e.buffer,0,e.length>>1)}async function m_(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,o=0,a=0,l=0;const c=[];for(;n<t.length;){const g=e.getUint32(n),m=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(m==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),o=t[n+16],a=t[n+17],l=t[n+20];else if(m==="IDAT")c.push(t.subarray(n+8,n+8+g));else if(m==="IEND")break;n+=12+g}if(o!==8||a!==2&&a!==6||l)throw new Error("Unsupported terrain image format");const h=a===2?3:4,u=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),d=new Uint8Array(await new Response(u).arrayBuffer()),f=s*h,p=new Uint8Array(f*r);for(let g=0;g<r;g++){const m=d[g*(f+1)],x=g*(f+1)+1,_=g*f;for(let v=0;v<f;v++){const S=v>=h?p[_+v-h]:0,b=g>0?p[_-f+v]:0,w=v>=h&&g>0?p[_-f+v-h]:0;let M=d[x+v];if(m===1)M+=S;else if(m===2)M+=b;else if(m===3)M+=S+b>>1;else if(m===4){const y=Math.abs(b-w),T=Math.abs(S-w),E=Math.abs(S+b-2*w);M+=y<=T&&y<=E?S:T<=E?b:w}p[_+v]=M&255}}return{width:s,height:r,channels:h,data:p}}async function g_(i,t,e){const[n,s]=await Promise.all([fetch(i.town,{signal:e}).then(h=>{if(!h.ok)throw new Error("Could not load the town data");return h.json()}).then(h=>(t("Streets and buildings"),h)),fetch(i.height,{signal:e}).then(h=>{if(!h.ok)throw new Error("Could not load the terrain");return h.arrayBuffer()}).then(m_).then(h=>(t("Terrain"),h))]);if(e.aborted)throw e.reason;const{meta:r}=n,o=s.width*s.height,a=new Float32Array(o),l=new Float32Array(o),c=s.channels;for(let h=0;h<o;h++)a[h]=(s.data[h*c]<<8|s.data[h*c+1])/r.heightScale-r.heightOffset,l[h]=s.data[h*c+2]/255;return{town:{...n,houses:Oo(n.houses),cabins:Oo(n.cabins),cars:Oo(n.cars),trees:Oo(n.trees)},heights:a,exposure:l,...Yu({heights:a,exposure:l,meta:r,roads:n.roads,terrainStep:i.terrainStep})}}function Yu({heights:i,exposure:t,meta:e,roads:n,terrainStep:s}){const r=new ku(i,t,e.grid[0],e.grid[1],e.size[0],e.size[1],s),o=u_(r,n);return r.patches.push(...o),{surface:r.y,terrainPatches:o,terrainTiles:f_(r)}}const Sr=new Map;async function x_(i,t,e,n){var u;const s=JSON.stringify([i.town,i.height]),r=(u=Sr.get(s))==null?void 0:u.values().next().value;let o;if(r){n("Streets and buildings"),n("Terrain");const{town:d,heights:f,exposure:p}=r,g={meta:d.meta,roads:d.roads,heights:f,exposure:p,terrainStep:i.terrainStep},m=await t.run({kind:"terrain",source:g},async()=>Yu(g),e);o={town:d,heights:f,exposure:p,...m}}else o=await t.run({kind:"world",source:i},()=>g_(i,n,e),e,n);if(e.aborted)throw e.reason;const a=Sr.get(s)??new Map,{town:l,heights:c,exposure:h}=o;return a.set(e,{town:l,heights:c,exposure:h}),Sr.set(s,a),e.addEventListener("abort",()=>{a.delete(e),!a.size&&Sr.get(s)===a&&Sr.delete(s)},{once:!0}),o}async function __(i,t,e,n,s){const r=new Set,o=h=>{s.aborted||r.has(h)||(r.add(h),e(r.size/4,h))};e(0,"Fetching map data");const a={town:new URL(i.town,document.baseURI).href,height:new URL(i.height,document.baseURI).href,terrainStep:t},l=x_(a,n,s,o),c=new x0().loadAsync(i.ground).then(h=>(o("Ground texture"),h));try{const[h,u]=await Promise.all([l,c]);if(s.aborted)throw s.reason;return u.colorSpace=Oe,u.anisotropy=8,u.generateMipmaps=!0,u.minFilter=En,o("Building the model"),{...h,ground:u}}catch(h){throw c.then(u=>u.dispose(),()=>{}),h}}const yr=-1617.09,br=414.46,Pi=2.6721,Le=-4.38,ln=1.66,sn=-11.13,rn=-10.87,On=-1.98,pn=10.93,zo=2.72,Zl=4.16,Di=.24,v_=4.615,wr=[Le,pn,ln,pn,ln,rn,sn,rn,sn,On,Le,On],Zu=Math.cos(Pi),Ku=Math.sin(Pi),$i=(i,t)=>yr+i*Zu+t*Ku,ji=(i,t)=>br-i*Ku+t*Zu;function qu(i,t,e,n){const s=(i+e)/2,r=(t+n)/2;return[$i(s,r),ji(s,r),e-i,n-t,Pi]}const Bo=[...qu(Le,rn,ln,pn),...qu(sn,rn,Le,On)],Ns=z(13222830),M_=z(10262404),Ii=z(14144967),Ni=z(6712936),Ju=z(3884352),$u=z(3887959),S_=z(8217937);function Go(i,t,e,n,s,r){for(let o=e+.32;o<n-.18;o+=.64){const a=o+.036,l=zo+.024,c=Zl+.024,h=Xt(Ni,.74);if(t){const[u,d]=s>r?[o,a]:[a,o];i.quad(s,l,d,s,l,u,r,c,u,r,c,d,h)}else{const[u,d]=s>r?[o,a]:[a,o];i.quad(u,l,s,d,l,s,d,c,r,u,c,r,h)}}}function y_(i){const t=Le-Di,e=ln+Di,n=sn-Di,s=pn+Di,r=rn-Di,o=On+Di,a=(t+e)/2,l=(r+o)/2,c=zo,h=Zl;i.quad(e,c,s,e,c,r,a,h,r,a,h,s,Ni),i.quad(t,c,o,t,c,s,a,h,s,a,h,l,Xt(Ni,1.07)),i.tri(t,c,r,a,h,l,a,h,r,Xt(Ni,1.07)),i.quad(n,c,o,t,c,o,a,h,l,n,h,l,Xt(Ni,1.02)),i.quad(t,c,r,n,c,r,n,h,l,a,h,l,Xt(Ni,.92)),Go(i,!0,r,s,e,a),Go(i,!0,o,s,t,a),Go(i,!1,n,t,o,l),Go(i,!1,n,t,r,l);for(const[m,x,_,v,S,b]of[[t,c,s,a,h,s],[a,h,s,e,c,s],[e,c,r,a,h,r],[a,h,r,t,c,r],[n,c,r,n,h,l],[n,h,l,n,c,o]])i.quad(m,x-.16,_,v,S-.16,b,v,S,b,m,x,_,Ii);i.box(e-.09,c-.12,r,e+.035,c-.025,s,Ii),i.box(t-.035,c-.12,o,t+.09,c-.025,s,Ii),i.box(n,c-.12,o-.09,t,c-.025,o+.035,Ii),i.box(n,c-.12,r-.035,t,c-.025,r+.09,Ii),i.box(a-.075,h-.037,r,a+.075,h+.028,s,Xt(Ni,.78)),i.box(n,h-.037,l-.075,a,h+.028,l+.075,Xt(Ni,.78));const u=h-c,d=h-u*Di/((e-t)/2),f=h-u*Di/((o-r)/2),p=[Le,c,ln,c,ln,c+h-d,a,h,Le,c+h-d],g=(m,x)=>{const _=x?p:[Le,c+h-d,a,h,ln,c+h-d,ln,c,Le,c];for(let v=2;v<_.length/2;v++)i.tri(_[0],_[1],m,_[(v-1)*2],_[(v-1)*2+1],m,_[v*2],_[v*2+1],m,Ns)};g(pn,!0),g(rn,!1),i.quad(sn,c,rn,sn,c,On,sn,c+h-f,On,sn,c+h-f,rn,Ns),i.tri(sn,c+h-f,rn,sn,c+h-f,On,sn,h,l,Ns);for(let m=Le+.1;m<ln-.09;m+=.19){const x=h-Math.abs(m-a)*u/((e-t)/2)-.04;i.quad(m,c,pn+.02,m+.034,c,pn+.02,m+.034,x,pn+.02,m,x,pn+.02,Xt(Ns,.75))}}function Kl(i,t,e,n,s,r,o=!1){for(let u=.24;u<r;u+=.17)i.quad(t,u,s+.014,e,u,s+.014,e,u+.019,s+.014,t,u+.019,s+.014,Xt(Ns,.67));const a=t+n/2,l=Math.min(n*.29,1.17),c=a-l,h=a+l;i.box(c,.87,s,h,2.17,s+.085,Ju);for(let u=0;u<3;u++){const d=(h-c-.14)/3,f=c+.07+u*d,p=f+d-.034,g=s+.087;i.quad(f,.94,g,p,.94,g,p,2.1,g,f,2.1,g,Xt($u,.78+u*.11),.3),i.tri(f,2.03,g+.002,p,1.59,g+.002,p,2.04,g+.002,Xt($u,1.14))}if(i.box(c-.045,.84,s,h+.045,.92,s+.15,Ii),i.box(c-.045,2.17,s,h+.045,2.245,s+.12,Ii),o){const u=e-1.42;i.box(u,.04,s,u+1.04,2.22,s+.09,Ju),i.box(u+.065,.1,s+.087,u+.975,2.14,s+.115,S_),i.box(u+.77,.98,s+.11,u+.88,1.035,s+.16,Ii)}}function b_(i,t){const e=(f,p)=>t.yAt($i(f,p),ji(f,p)),n=[];for(let f=0;f<wr.length;f+=2)n.push(e(wr[f],wr[f+1]));const s=Math.max(...n)+.12,r=(ln-Le)*(pn-rn),o=(Le-sn)*(On-rn),a=e((Le+ln)/2,(rn+pn)/2),l=e((sn+Le)/2,(rn+On)/2),c=(r*a+o*l)/(r+o),h=Math.max(-.18,Math.min(.45,v_-(zo+Zl)/2-(s-c))),u=zo+h;i.frame(yr,s,br,Pi),i.walls(wr,Math.min(...n)-s-.2,.13,M_),i.walls(wr,.13,u,Ns),i.frame(yr,s+h,br,Pi),y_(i),i.frame(yr,s,br,Pi),Kl(i,Le,ln,ln-Le,pn,u),Kl(i,sn,Le,4.2,On,u,!0);for(const f of[1.3,5.1,8.4])i.frame($i(Le,f),s,ji(Le,f),Pi-Math.PI/2),Kl(i,-1.32,1.32,2.64,0,u);const d=Ie(13);for(const[f,p]of[[-2.94,13.1],[.39,15.7],[-.65,21.4]])for(let g=0;g<5;g++){const m=f+(d()-.5)*.96,x=p+(d()-.5)*1.68,_=.15+d()*.23;i.frame(yr,e(m,x),br,Pi),i.blob(m,_*.64,x,_*1.18,_,_*.84,7,4,z(5134386),z(g%3===0?9671258:7241808));for(let v=0;v<4;v++){const S=(d()-.5)*_,b=(d()-.5)*_;i.tri(m+S-.028,.02,x+b,m+S+.028,.02,x+b,m+S*3.2,_*2.4,x+b*2.7,z(8686162))}}return i.frame(),[[Le,rn,ln,pn],[sn,rn,Le,On]].map(([f,p,g,m])=>[$i(f,p),ji(f,p),$i(g,p),ji(g,p),$i(g,m),ji(g,m),$i(f,m),ji(f,m)])}const Qi=[-1744.02,317.57,-1733.46,317.97,-1503.52,434.33,-1494.98,439.14,-1405.07,484.77],ql=[{address:"24",centre:[-1701.99,305.1],roof:[-1694.2,305.76,-1703.13,297.4,-1709.77,304.44,-1700.85,312.79],height:5.56,kind:"house"},{address:"22",centre:[-1686.63,316.01],roof:[-1682.95,322.15,-1679.69,314.17,-1690.31,309.86,-1693.57,317.84],height:4.38,kind:"house"},{address:"22",centre:[-1663.52,295.86],roof:[-1662.91,301.89,-1659.09,291.69,-1664.12,289.82,-1667.95,300.03],height:5.18,kind:"secondary"},{address:"20",centre:[-1668.03,323.5],roof:[-1672.26,328.93,-1664.85,329.6,-1663.8,318.06,-1671.21,317.39],height:4,kind:"house"},{address:"18",centre:[-1645.6,335.06],roof:[-1641.76,340.86,-1638.92,333.05,-1649.45,329.25,-1652.29,337.07],height:4.81,kind:"house"},{address:"16",centre:[-1616,330.48],roof:[-1607.06,329.27,-1620.01,322.43,-1624.94,331.69,-1611.99,338.53],height:5.25,kind:"house"},{address:"14",centre:[-1610.04,351.3],roof:[-1606.74,360.93,-1603.37,352.49,-1608.82,350.34,-1605.21,341.3,-1610.26,339.3,-1617.23,356.78],height:4.26,kind:"house"},{address:"12",centre:[-1594.09,360.99],roof:[-1588.05,358.59,-1595.81,354.74,-1600.13,363.38,-1592.37,367.23],height:4.54,kind:"house"},{address:"10",centre:[-1572.46,363.34],roof:[-1570.76,376.84,-1561.58,355.11,-1574.17,349.83,-1583.35,371.57],height:4.45,kind:"house"},{address:"8",centre:[-1556.72,363.65],roof:[-1551.65,367.39,-1553.74,366.39,-1549.17,356.96,-1557.12,353.13,-1564.8,368.98,-1554.76,373.8],height:4.1,kind:"house"},{address:"8",centre:[-1563.95,372.88],roof:[-1559.23,371.36,-1565.87,368.32,-1568.67,374.4,-1562.03,377.44],height:4.12,kind:"secondary"},{address:"6",centre:[-1542.14,379.99],roof:[-1551.03,382.31,-1537.6,387.31,-1533.69,376.91,-1543.52,373.25,-1544.41,375.62,-1548.01,374.28],height:3.72,kind:"house"},{address:"4",centre:[-1529.85,390.46],roof:[-1531.13,388.55,-1536.03,388.7,-1535.85,394.36,-1524.65,394.02,-1524.91,385.65,-1531.21,385.85],height:6.74,kind:"house"},{address:"2",centre:[-1509.94,392.08],roof:[-1508.19,389.1,-1507.02,386.34,-1512.57,384,-1517.08,394.67,-1505.98,399.33,-1502.64,391.43],height:4.92,kind:"house",levels:2},{address:"2B",centre:[-1425.23,448.85],roof:[-1421.59,460.6,-1412.87,448.89,-1428.87,437.1,-1437.58,448.82],height:4.57,kind:"house"},{address:"29",centre:[-1729.27,353.36],roof:[-1736.21,359.75,-1727.91,362.68,-1722.32,346.97,-1730.63,344.05],height:4.65,kind:"house"},{address:"27",centre:[-1712.78,354.08],roof:[-1705.12,350.56,-1718.27,346.57,-1720.66,354.36,-1716.17,355.72,-1717.37,359.63,-1708.71,362.27],height:4.32,kind:"house"},{address:"25",centre:[-1703.96,376.46],roof:[-1701.67,386.2,-1696.78,369.48,-1706.25,366.73,-1711.14,383.45],height:4.21,kind:"house"},{address:"21",centre:[-1665.11,377.39],roof:[-1672.48,381.63,-1662.53,385.48,-1657.73,373.15,-1667.68,369.3],height:3.36,kind:"house"},{address:"17",centre:[-1639.76,395.04],roof:[-1633.19,393.09,-1642.49,388.78,-1646.33,397,-1637.04,401.31],height:4.86,kind:"house"},{address:"15",centre:[-1626.67,406.68],roof:[-1624.06,415.42,-1618.76,400.01,-1622.61,398.7,-1623.4,400.99,-1630,398.74,-1634.51,411.85],height:4.88,kind:"house",rearGlazing:!0},{address:"15",centre:[-1629.65,418.37],roof:[-1626.59,415.38,-1631.01,414.32,-1632.71,421.36,-1628.29,422.41],height:4.69,kind:"secondary"},{address:"7-9",centre:[-1574.55,442.33],roof:[-1566.73,436.97,-1577.92,433.49,-1582.37,447.69,-1571.18,451.17],height:5.03,kind:"house",rearGlazing:!0},{address:"5",centre:[-1559.58,439.93],roof:[-1565.44,444.23,-1557.3,446.82,-1553.71,435.63,-1561.86,433.04],height:5.7,kind:"house",levels:2,rearEntry:!0},{address:"1B",centre:[-1439.22,491.94],roof:[-1448.73,495.12,-1433.72,500.3,-1429.71,488.76,-1444.72,483.58],height:4.63,kind:"house"},{address:"1A",centre:[-1447.24,505.79],roof:[-1441.04,510.74,-1439.57,503.75,-1453.43,500.84,-1454.91,507.83],height:4.5,kind:"house"}],w_=[[-1671.48,279.2,-1694.63,323.85,-1732.03,304.61,-1732.02,304.47,-1677.56,276.05],[-1676.05,333.48,-1694.63,323.85,-1671.48,279.2,-1652.91,288.83],[-1634.33,298.46,-1657.48,343.11,-1676.05,333.48,-1652.91,288.83],[-1638.9,352.74,-1657.48,343.11,-1634.33,298.46,-1615.75,308.1],[-1620.32,362.39,-1638.9,352.74,-1615.75,308.1,-1597.17,317.73,-1608.51,339.6],[-1608.94,368.28,-1620.32,362.39,-1608.51,339.6,-1597.17,317.73,-1581.39,325.91,-1604.53,370.57],[-1598.06,347.27,-1598.91,344.58,-1608.51,339.6,-1597.17,317.73,-1581.39,325.91,-1604.53,370.57,-1608.94,368.28],[-1565.96,333.91,-1589.12,378.55,-1604.53,370.57,-1581.39,325.91],[-1573.84,386.48,-1589.12,378.55,-1565.96,333.91,-1550.68,341.84],[-1535.11,349.91,-1558.27,394.55,-1573.21,386.8,-1573.84,386.48,-1550.68,341.84,-1550.2,342.09],[-1519.68,357.91,-1542.85,402.55,-1558.27,394.55,-1535.11,349.91],[-1527.42,410.56,-1542.85,402.55,-1519.68,357.91,-1504.26,365.92],[-1478.83,379.11,-1510.34,419.41,-1527.42,410.56,-1504.26,365.92],[-1401.78,446.35,-1415.18,468.77,-1442.29,454.72,-1422.86,429.87],[-1714.99,335.99,-1725.28,382.16,-1741.12,373.95,-1735.19,328.74,-1732.09,327.12],[-1713.88,388.08,-1725.28,382.16,-1714.99,335.99,-1697.74,344.94],[-1675.21,356.62,-1696.27,397.21,-1713.88,388.08,-1697.74,344.94],[-1661.66,363.65,-1648.12,370.68,-1669.17,411.27,-1682.72,404.25],[-1648.12,370.68,-1634.59,377.7,-1655.65,418.29,-1669.17,411.27],[-1621.06,384.71,-1642.12,425.3,-1655.65,418.29,-1634.59,377.7],[-1628.59,432.32,-1642.12,425.3,-1621.06,384.71,-1607.54,391.73],[-1594.01,398.75,-1615.07,439.34,-1628.59,432.32,-1607.54,391.73],[-1588.01,453.37,-1601.54,446.36,-1580.48,405.76,-1566.96,412.78,-1553.43,419.79,-1574.48,460.39],[-1574.48,460.39,-1553.43,419.79,-1539.9,426.81,-1546.92,440.34,-1553.93,453.87,-1560.95,467.4],[-1424.09,490.19,-1427.85,502.63,-1464.32,491.61,-1457.62,469.43,-1425.92,485.87],[-1427.85,502.63,-1432.34,517.51,-1468.82,506.5,-1464.32,491.61]],Us=[["23",[-1683.5,379.63,11,25,2.6798],1,2,15789800,15000798,"","t"],["2 Ebor (outbuilding)",[-1540.1,440.05,7.53,5.25,2.5613],1,0,14078146,11313563,"","s"],["2 Ebor",[-1526.07,445.23,16.31,7.93,2.7377],1,0,13617336,9211790,"","o"]],E_=[...ql.filter(i=>i.kind==="house").map(i=>i.centre),[Bo[0],Bo[1]],[Us[0][1][0],Us[0][1][1]],[Us[2][1][0],Us[2][1][1]]],ju=[-1592.2,410.8],T_=-1744,A_=-1495;function Qu(i,t,[e,n,s,r]){const o=s-e,a=r-n,l=Math.max(0,Math.min(1,((i-e)*o+(t-n)*a)/(o*o+a*a||1)));return[e+o*l,n+a*l]}function Jl(i,t,e){const[n,s]=Qu(i,t,e);return Math.hypot(i-n,t-s)}function R_(i,t){let e=[Qi[0],Qi[1]];for(let n=0;n+3<Qi.length;n+=2){const s=Qu(i,t,[Qi[n],Qi[n+1],Qi[n+2],Qi[n+3]]);Math.hypot(i-s[0],t-s[1])<Math.hypot(i-e[0],t-e[1])&&(e=s)}return e}function td(i){const t=i.filter((n,s)=>s%2===0),e=i.filter((n,s)=>s%2===1);return{poly:i,minX:Math.min(...t),maxX:Math.max(...t),minZ:Math.min(...e),maxZ:Math.max(...e)}}function ed({poly:i,minX:t,maxX:e,minZ:n,maxZ:s},r,o,a){if(r<t-a||r>e+a||o<n-a||o>s+a)return!1;let l=!1;for(let c=0,h=i.length-2;c<i.length;h=c,c+=2){const u=i[c],d=i[c+1],f=i[h],p=i[h+1];if(a>0&&Jl(r,o,[u,d,f,p])<a)return!0;d>o!=p>o&&r<u+(f-u)*(o-d)/(p-d)&&(l=!l)}return l}const C_=w_.map(td),L_=ql.map(i=>td(i.roof));function nd(i,t,e=0){return L_.some(n=>ed(n,i,t,e))}const id=new WeakMap;function sd(i){const t=id.get(i);if(t)return t;const e=[],n=[];for(const[r,,,,o,a]of i.roads)if(!(r>4))for(let l=0;l+3<a.length;l+=2){const c=[a[l]/10,a[l+1]/10,a[l+2]/10,a[l+3]/10];if(Math.max(c[0],c[2])<-1864||Math.min(c[0],c[2])>-1375||Math.max(c[1],c[3])<197.6||Math.min(c[1],c[3])>559.1)continue;const h=(c[0]+c[2])/2;(i.names[o]==="Norman Road"&&h>=T_-1&&h<=A_+1?e:n).push(c)}const s=(r,o)=>{if(r<-1790||r>-1355||o<270||o>535)return!1;if(C_.some(l=>ed(l,r,o,0)))return!0;if(Math.hypot(r-ju[0],o-ju[1])<24)return!1;const a=Math.min(...e.map(l=>Jl(r,o,l)));return a<=45&&n.every(l=>a<Jl(r,o,l))};return id.set(i,s),s}const P_=[Bo,...Us.map(i=>i[1])];function D_(i,t,e=1.5){if(nd(i,t,e))return!0;for(const n of P_)for(let s=0;s<n.length;s+=5){const[r,o,a,l,c]=n.slice(s,s+5),h=i-r,u=t-o;if(h*h+u*u>400)continue;const d=Math.cos(c),f=Math.sin(c),p=h*d-u*f,g=h*f+u*d;if(Math.abs(p)<a/2+e&&Math.abs(g)<l/2+e)return!0}return!1}const rd=[{wall:13223346,roof:5660254,trim:15724260,boards:"horizontal"},{wall:10319973,roof:11908007,trim:15130317,boards:"horizontal"},{wall:12830396,roof:5330260,trim:15789797,boards:"vertical"},{wall:10849655,roof:7761508,trim:15656920,boards:"horizontal"},{wall:14866372,roof:5593957,trim:5988437,boards:"vertical"},{wall:11450284,roof:12040624,trim:15855074,boards:"horizontal"}],od=z(4278855),ad=z(3427669),I_=z(7561807),N_=z(9538691),U_=z(11183254);function di([i,t],[e,n,s]){return i*e+t*n+s}function $l(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],r=i[(n+1)%i.length],o=di(s,t),a=di(r,t);if(o<=0&&e.push(s),o<0&&a>0||o>0&&a<0){const l=o/(o-a);e.push([s[0]+(r[0]-s[0])*l,s[1]+(r[1]-s[1])*l])}}return e}function ld(i,t,e,n,s=0){for(let r=1;r+1<t.length;r++){const o=t[0],a=t[r],l=t[r+1],c=(a[0]-o[0])*(l[1]-o[1])-(a[1]-o[1])*(l[0]-o[0]);if(Math.abs(c)<5e-5)continue;const[h,u]=c>0?[l,a]:[a,l];i.tri(o[0],di(o,e)+s,o[1],h[0],di(h,e)+s,h[1],u[0],di(u,e)+s,u[1],n)}}function F_(i,t){const e=i.map(([r,o])=>new Pt(r,o)),n=Mo.triangulateShape(e,[]),s=[];for(const[r,o]of t.entries())for(const a of n){let l=a.map(c=>i[c]);for(const c of t)c!==o&&(l=$l(l,[o[0]-c[0],o[1]-c[1],o[2]-c[2]]));l.length>=3&&s.push({points:l,plane:o,slope:r})}return s}function O_(i,t,e){let n=0,s=0;for(const{points:[r,...o],plane:a}of i)for(let l=1;l<o.length;l++){const c=o[l-1],h=o[l],u=Math.abs((c[0]-r[0])*(h[1]-r[1])-(c[1]-r[1])*(h[0]-r[0])),d=(r[0]+c[0]+h[0])/3,f=(r[1]+c[1]+h[1])/3;n+=u,s+=u*(e+di([d,f],a)-t(d,f))}return n>0?s/n:0}function z_(i,t,e,n,s){for(const{points:r,plane:o,slope:a}of t){const l=Xt(n,1-a*.042);if(ld(i,r,o,l,e),!s)continue;const c=Math.abs(o[0])>Math.abs(o[1])?1:0,h=Math.min(...r.map(d=>d[c])),u=Math.max(...r.map(d=>d[c]));for(let d=Math.ceil(h/.74)*.74;d<u;d+=.74){const f=c===0?[-1,0,d]:[0,-1,d],p=c===0?[1,0,-d-.035]:[0,1,-d-.035];ld(i,$l($l(r,f),p),o,Xt(l,.76),e+.021)}}}function B_(i,t,e,n,s,r){i.box(t,n,.015,e,s,.11,r),i.box(t+.045,n+.045,.09,e-.045,s-.045,.145,od);const o=(t+e)/2;for(const[a,l,c]of[[t+.092,o-.025,1],[o+.025,e-.092,.79]]){const h=n+.09,u=s-.09;i.quad(a,h,.148,l,h,.148,l,u,.148,a,u,.148,Xt(ad,c),.28),i.tri(a,u-.035,.15,l,u-.4,.15,l,u-.035,.15,Xt(ad,c*1.2))}i.box(t-.06,n-.045,.01,e+.06,n+.02,.2,r)}function G_(i,t){const a=l=>[t(i-.65,l),t(i,l),t(i+.65,l)];for(let l=1;l<=3;l++){const c=.4+(l-1)*.28,h=Math.max(0,.05-Math.min(...a(c)))/l;if(h>.18)continue;const u=[];for(let d=0;d<l;d++){const f=d===0?.01:.4+(d-1)*.28,p=.4+d*.28,g=.05-h*d,m=[...a(f),...a((f+p)/2),...a(p)],x=Math.min(...m);if(Math.max(...m)>g+.015||g-x>.54)break;u.push({back:f,front:p,top:g,bottom:x-.06})}if(u.length===l)return u}}function k_(i,t,e,n,s,r,o,a,l,c){if(t<1.5)return;if(a){const d=Xt(s,.72);if(o==="vertical")for(let f=.19;f<t-.08;f+=.23)i.quad(f,.17,.017,f+.023,.17,.017,f+.023,e-.1,.017,f,e-.1,.017,d);else for(let f=.26;f<e-.05;f+=.18)i.quad(.035,f,.017,t-.035,f,.017,t-.035,f+.018,.017,.035,f+.018,.017,d);i.box(0,-.02,.005,.1,e-.08,.072,r),i.box(t-.1,-.02,.005,t,e-.08,.072,r)}const h=Math.max(1,Math.min(4,Math.floor(t/2.75))),u=c&&t>2.65?G_(t*(h-.5)/h,c):void 0;for(let d=0;d<n;d++)for(let f=0;f<h;f++){const p=t*(f+.5)/h,g=2.65*d;if(u&&d===0&&f===h-1){i.box(p-.55,.02,.015,p+.55,2.18,.14,r),i.box(p-.46,.05,.13,p+.46,2.1,.17,I_),i.box(p+.27,.97,.16,p+.38,1.03,.208,od);for(const m of u)i.box(p-.65,m.bottom,m.back,p+.65,m.top,m.front,U_);i.box(p-.68,2.21,0,p+.68,2.29,.48,r)}else{const m=l?Math.min(1.45,t/h*.42):Math.min(.89,t/h*.3);B_(i,p-m,p+m,g+(l?.34:.86),Math.min(e-.18,g+2.1),r)}}}function H_(i,t,e,n,s,r){const o=[];for(let rt=0;rt<e.roof.length;rt+=2)o.push([e.roof[rt],e.roof[rt+1]]);const a=e.centre[0],l=e.centre[1],c=Math.round(a*337+l*191)>>>0,h=Ie(c),u=rd[Math.floor(h()*rd.length)],d=z(u.wall),f=z(u.trim),p=z(u.roof),g=e.kind==="house",m=o.map(([rt,ot])=>t.yAt(rt,ot)),x=Math.max(t.yAt(a,l),...m)+.08,_=Mr(n)>0,v=o.map((rt,ot)=>{const Ct=(ot+1)%o.length,Bt=_?Ct:ot,se=_?ot:Ct,qt=n[Bt*2],_e=n[Bt*2+1],dt=n[se*2]-qt,vt=n[se*2+1]-_e,yt=Math.hypot(dt,vt),Kt=Math.atan2(-vt,dt),Dt=s-(qt+dt/2),oe=r-(_e+vt/2),B=(Dt*Math.sin(Kt)+oe*Math.cos(Kt))/Math.max(1,Math.hypot(Dt,oe));return{x:qt,z:_e,dx:dt,dz:vt,heading:Kt,length:yt,facing:B,i:ot}}),S=v.reduce((rt,ot)=>{const Ct=Bt=>Bt.facing*Math.min(5,Bt.length);return Ct(ot)>Ct(rt)?ot:rt}),w=v.reduce((rt,ot)=>ot.length>rt.length?ot:rt).heading,M=Math.cos(w),y=Math.sin(w),T=o.map(([rt,ot])=>[(rt-a)*M-(ot-l)*y,(rt-a)*y+(ot-l)*M]),E=Math.min(...T.map(rt=>rt[1])),R=Math.max(...T.map(rt=>rt[1])),P=Math.min(...T.map(rt=>rt[0])),F=Math.max(...T.map(rt=>rt[0])),L=Math.max(1,Math.min(F-P,R-E)),N=g?.78+h()*.75:.38,I=N*2/L,W=[[0,I,-I*E],[0,-I,I*R]],q=h(),G=!g||q<.22?[[0,N/(R-E||1),-N*E/(R-E||1)]]:q<.67?W:[...W,[I,0,-I*P],[-I,0,I*F]],Z=F_(T,G),j=O_(Z,(rt,ot)=>t.yAt(a+rt*M+ot*y,l-rt*y+ot*M),x),U=e.height===null?g?2.72:2.38:e.height-j-.16,V=e.levels??(g&&U>=4.55?2:1),et=Math.max(g?V===2?4.6:2.45:2.2,Math.min(g?V===2?5.9:4.45:4.3,U)),st=et+.16;i.frame(0,x,0),i.walls(n,Math.min(...m)-x-.28,.13,N_),i.walls(n,.13,et,d),i.frame(a,x,l,w),z_(i,Z,st,p,g);const ct=rt=>st+Math.min(...G.map(ot=>di(rt,ot))),St=(rt,ot)=>[(rt-a)*M-(ot-l)*y,(rt-a)*y+(ot-l)*M];for(const rt of v){if(rt.length<.06)continue;const{x:ot,z:Ct,dx:Bt,dz:se,length:qt,heading:_e}=rt,dt=St(ot,Ct),vt=St(ot+Bt,Ct+se),yt=G.map(B=>di(dt,B)),Kt=G.map(B=>di(vt,B)),Dt=[0,1];for(let B=0;B<G.length;B++)for(let Yt=B+1;Yt<G.length;Yt++){const Wt=yt[B]-yt[Yt],Jt=Kt[B]-Kt[Yt];Wt*Jt<0&&Dt.push(Wt/(Wt-Jt))}Dt.sort((B,Yt)=>B-Yt),i.frame(ot,x,Ct,_e);const oe=B=>st+Math.min(...G.map((Yt,Wt)=>yt[Wt]+(Kt[Wt]-yt[Wt])*B));for(let B=1;B<Dt.length;B++){const Yt=Dt[B-1],Wt=Dt[B];i.quad(Yt*qt,et-.006,0,Wt*qt,et-.006,0,Wt*qt,oe(Wt),0,Yt*qt,oe(Yt),0,d)}if(g&&(rt.facing>.25||rt.length>4.5)){const B=rt.i===S.i&&!e.rearEntry?(Wt,Jt)=>t.yAt(i.wx(Wt,Jt),i.wz(Wt,Jt))-x:void 0,Yt=!!e.rearGlazing&&rt.facing<-.65;k_(i,qt,et,V,d,f,u.boards,rt.facing>.2,Yt,B)}}i.frame(a,x,l,w);const Nt=Mr(e.roof)<0;for(let rt=0;rt<T.length;rt++){const ot=(rt+1)%T.length,Ct=T[Nt?rt:ot],Bt=T[Nt?ot:rt],se=ct(Ct),qt=ct(Bt);i.quad(Ct[0],se-.145,Ct[1],Bt[0],qt-.145,Bt[1],Bt[0],qt,Bt[1],Ct[0],se,Ct[1],f)}i.frame()}function Kn(i,t,e,n,s){return[i.wx(t,e),i.wz(t,e),i.wx(n,e),i.wz(n,e),i.wx(n,s),i.wz(n,s),i.wx(t,s),i.wz(t,s)]}function qn(i,t,e,n,s,r,o,a){i.box(e-s,r,n-s,e+s,o,n+s,a,null),t==null||t.circles.push([i.wx(e,n),i.wz(e,n),s*Math.SQRT2])}const ko=[15921126,15261640,13619920,11120043,12110550,11845800,14272936,5988452,11036494,14205088,15327150,16448250].map(z),Ui=[15000277,12435386,8948618,4934726,3487290,6957594,8160360,3555666,11888447,11644323].map(z),Ze=z(3163994),Er=[7031348,3098712,9056042,15658730,4151878].map(z),Fs=z(9138002),mn=z(16053230),Ho=z(12171184),Wo=z(1846090),cd=[15327951,3099196,2504783,8007210,3816770,13214282,5209226].map(z);function jl(i,t,e,n,s,r){const o=Xt(r,.9);if(t>=e){const a=t-e;i.quad(-t,n,e,t,n,e,a,n+s,0,-a,n+s,0,r),i.quad(t,n,-e,-t,n,-e,-a,n+s,0,a,n+s,0,r),i.tri(t,n,e,t,n,-e,a,n+s,0,o),i.tri(-t,n,-e,-t,n,e,-a,n+s,0,o)}else{const a=e-t;i.quad(t,n,e,t,n,-e,0,n+s,-a,0,n+s,a,r),i.quad(-t,n,-e,-t,n,e,0,n+s,a,0,n+s,-a,r),i.tri(-t,n,e,t,n,e,0,n+s,a,o),i.tri(t,n,-e,-t,n,-e,0,n+s,-a,o)}}function ts(i,t,e,n,s,r,o,a){const l=t/2,c=e/2;if(t>=e){const u=c*s;return i.quad(-l-r,n-r*s,c+r,l+r,n-r*s,c+r,l+r,n+u,0,-l-r,n+u,0,o),i.quad(l+r,n-r*s,-c-r,-l-r,n-r*s,-c-r,-l-r,n+u,0,l+r,n+u,0,o),i.tri(l,n,c,l,n,-c,l,n+u,0,a),i.tri(-l,n,-c,-l,n,c,-l,n+u,0,a),u}const h=l*s;return i.quad(l+r,n-r*s,c+r,l+r,n-r*s,-c-r,0,n+h,-c-r,0,n+h,c+r,o),i.quad(-l-r,n-r*s,-c-r,-l-r,n-r*s,c+r,0,n+h,c+r,0,n+h,-c-r,o),i.tri(-l,n,c,l,n,c,0,n+h,c,a),i.tri(l,n,-c,-l,n,-c,0,n+h,-c,a),h}function Tr(i,t,e,n,s,r,o,a,l){const c=t/2,h=e/2,u=n+s,d=n+r,f=(u-d)/e;i.quad(-c-o,u+o*f,h+o,c+o,u+o*f,h+o,c+o,d-o*f,-h-o,-c-o,d-o*f,-h-o,a),i.quad(-c,n,h,c,n,h,c,u,h,-c,u,h,l),i.quad(c,n,h,c,n,-h,c,d,-h,c,u,h,l),i.quad(-c,n,-h,-c,n,h,-c,u,h,-c,d,-h,l),i.quad(c,n,-h,-c,n,-h,-c,d,-h,c,d,-h,l)}const Sn=.05;function yn(i,t,e,n,s,r,o,a=0){const l=t/2+Sn;i.quad(e,s,l,n,s,l,n,r,l,e,r,l,o,a)}function hd(i,t,e,n,s,r,o,a=0){const l=-t/2-Sn;i.quad(n,s,l,e,s,l,e,r,l,n,r,l,o,a)}function Ql(i,t,e,n,s,r,o,a=0){const l=t/2+Sn;i.quad(l,s,n,l,s,e,l,r,e,l,r,n,o,a)}function tc(i,t,e,n,s,r,o,a=0){const l=-t/2-Sn;i.quad(l,s,e,l,s,n,l,r,n,l,r,e,o,a)}function Vo(i,t,e,n){let s=1/0,r=-1/0;for(const[o,a]of[[-e,-n],[e,-n],[e,n],[-e,n],[0,0]]){const l=i.yAt(t.wx(o,a),t.wz(o,a));l<s&&(s=l),l>r&&(r=l)}return{lo:s,hi:r}}function W_(i,t,e,n,s,r,o,a,l,c,h,u,d){i.frame(e,0,n,o);const f=Vo(t,i,s/2,r/2),p=f.hi+.18;i.frame(e,p,n,o);const g=ko[c%ko.length],m=Ui[h%Ui.length],x=a===2?5.5:2.85,_=s/2,v=r/2,S=Xt(g,.7);i.box(-_,f.lo-p-.3,-v,_,0,v,S,null),i.box(-_,0,-v,_,x,v,g,l===3?Xt(m,1):null),d.polygons.push(Kn(i,-_,-v,_,v));let b=x;if(l===0){const T=Math.min(_,v)+.5;jl(i,_+.5,v+.5,x,T*.44,m),b=x+T*.44}else l===1?b=x+ts(i,s,r,x,.5,.4,m,g):l===2?(Tr(i,s,r,x,1.35,.25,.5,m,g),yn(i,r,-_+.5,_-.5,x+.25,x+1.05,Ze,u()<.5?1:0),b=x+1.4):(i.box(-_-.15,x,-v-.15,_+.15,x+.3,v+.15,Xt(g,.92),m),b=x+.3);const w=Er[Math.floor(u()*Er.length)];for(let y=0;y<a;y++){const T=y*2.75+.85,E=T+1.3,R=Math.max(2,Math.floor(s/3.2)),P=y===0?Math.floor(u()*R):-1;for(let N=0;N<R;N++){const I=-_+(N+.5)/R*s;N===P?yn(i,r,I-.5,I+.5,0,2.1,w):yn(i,r,I-.85,I+.85,T,E,Ze,u()<.55?1:0)}const F=Math.max(1,Math.floor(s/3.8));for(let N=0;N<F;N++){const I=-_+(N+.5)/F*s;hd(i,r,I-.75,I+.75,T,E,Ze,u()<.5?1:0)}const L=Math.max(1,Math.floor(r/4.2));for(let N=0;N<L;N++){const I=-v+(N+.5)/L*r;Ql(i,s,I-.7,I+.7,T,E,Ze,u()<.45?1:0),tc(i,s,I-.7,I+.7,T,E,Ze,u()<.45?1:0)}}const M=u();if(a===1&&M<.36){const y=_*(.6+u()*.4),T=1.9;i.box(-y,-.12,v,y,.02,v+T,Fs),i.quad(-y-.2,2.3,v+T+.2,y+.2,2.3,v+T+.2,y+.2,2.7,v,-y-.2,2.7,v,Xt(m,.93));const E=Math.max(2,Math.round(y*2/3));for(let R=0;R<=E;R++){const P=-y+R/E*y*2;qn(i,d,P,v+T-.06,.06,0,2.32,mn)}}else if(a===2&&M<.5){const y=_*(.55+u()*.45),T=2;i.box(-y,2.62,v,y,2.78,v+T,Ho,Fs,Xt(Ho,.8));const E=u()<.5?z(10469580):mn;i.box(-y,2.78,v+T-.05,y,3.75,v+T,E,null),i.box(-y,2.78,v,-y+.05,3.75,v+T,E,null),i.box(y-.05,2.78,v,y,3.75,v+T,E,null);for(const R of[-y+.1,y-.1])qn(i,d,R,v+T-.12,.08,0,2.62,mn);u()<.5&&i.quad(-y-.2,5.05,v+T+.2,y+.2,5.05,v+T+.2,y+.2,5.4,v,-y-.2,5.4,v,Xt(m,.93))}if(u()<.1&&l<=1){const y=(u()-.5)*_,T=(u()-.5)*v*.6;i.box(y-.32,x,T-.32,y+.32,b+.55,T+.32,z(10116936))}if(u()<.24&&l<=1&&V_(i,s,r,x,o,l,u),u()<.15){const y=(u()<.5?-1:1)*(_+1.25),T=-v+1.3;i.cyl(y,f.hi-p,T,1.05,1.05,2.1,8,u()<.5?z(9347975):z(12370625),z(11120814)),d.circles.push([i.wx(y,T),i.wz(y,T),1.05])}}function V_(i,t,e,n,s,r,o){const a=t/2,l=e/2,c=r===0?.5:.4,h=.22,u=.74,d=.09;if(t>=e){const f=l+c,p=r===0?f*.44:l*.5*(1+c/l),g=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?a-l:a)*.7)*(.6+o()*.4),x=Math.cos(s)<0,_=x?1:-1,v=_*f*(1-h),S=_*f*(1-u),b=g+p*h+d,w=g+p*u+d;x?i.quad(-m,b,v,m,b,v,m,w,S,-m,w,S,Wo):i.quad(m,b,v,-m,b,v,-m,w,S,m,w,S,Wo)}else{const f=a+c,p=r===0?f*.44:a*.5*(1+c/a),g=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?l-a:l)*.7)*(.6+o()*.4),x=Math.sin(s)>0,_=x?1:-1,v=_*f*(1-h),S=_*f*(1-u),b=g+p*h+d,w=g+p*u+d;x?i.quad(v,b,m,v,b,-m,S,w,-m,S,w,m,Wo):i.quad(v,b,-m,v,b,m,S,w,m,S,w,-m,Wo)}}const X_=z(9075302);function Y_(i,t,e,n,s){const[,r,o,a,l,c,h]=e;let u=-1/0,d=1/0;for(let p=0;p<r.length;p+=5){const[g,m,x,_,v]=r.slice(p,p+5);i.frame(g,0,m,v);const S=Kn(i,-x/2,-_/2,x/2,_/2);n.push(S),s.polygons.push(S);const b=Vo(t,i,x/2,_/2);u=Math.max(u,b.hi),d=Math.min(d,b.lo)}const f=u+.18;for(let p=0;p<r.length;p+=5)Z_(i,f,d,r.slice(p,p+5),o,a,l,c,p===0?h:"",p===0,s)}function Z_(i,t,e,[n,s,r,o,a],l,c,h,u,d,f,p){const g=Ie(Math.round(n*31+s*17)>>>0);i.frame(n,t,s,a);const m=z(h),x=z(u),_=l===2?5.5:2.85,v=r/2,S=o/2;if(i.box(-v,e-t-.3,-S,v,0,S,Xt(m,.7),null),i.box(-v,0,-S,v,_,S,m,c===3?x:null),c===0){const T=Math.min(v,S)+.5;jl(i,v+.5,S+.5,_,T*.44,x)}else c===1?ts(i,r,o,_,.5,.4,x,m):c===2?Tr(i,r,o,_,1.1,.2,.5,x,m):i.box(-v-.15,_,-S-.15,v+.15,_+.3,S+.15,Xt(m,.92),x);if(r<5||o<3)return;const b=d.includes("g")?Math.min(4.8,r*.42):0;b&&yn(i,o,v-.4-b,v-.4,0,2.2,X_);const w=-v,M=v-(b?b+.8:0);for(let y=0;y<l;y++){const T=y*2.75+.85,E=T+1.3,R=Math.max(2,Math.floor((M-w)/3.2));for(let L=0;L<R;L++){const N=w+(L+.5)/R*(M-w);f&&y===0&&L===R-1?yn(i,o,N-.5,N+.5,0,2.1,Er[0]):yn(i,o,N-.85,N+.85,T,E,Ze,g()<.5?1:0)}const P=Math.max(1,Math.floor(r/3.8));for(let L=0;L<P;L++){const N=-v+(L+.5)/P*r;hd(i,o,N-.75,N+.75,T,E,Ze,g()<.5?1:0)}const F=Math.max(1,Math.floor(o/4.2));for(let L=0;L<F;L++){const N=-S+(L+.5)/F*o;Ql(i,r,N-.7,N+.7,T,E,Ze,g()<.45?1:0),tc(i,r,N-.7,N+.7,T,E,Ze,g()<.45?1:0)}}if(d.includes("v")){const y=Math.min(v-.3,(M-w)/2),T=(w+M)/2,E=2.2;i.box(T-y,-.12,S,T+y,.02,S+E,Fs),i.quad(T-y-.2,2.3,S+E+.2,T+y+.2,2.3,S+E+.2,T+y+.2,2.7,S,T-y-.2,2.7,S,Xt(x,.93));const R=Math.max(2,Math.round(y*2/3));for(let P=0;P<=R;P++){const F=T-y+P/R*y*2;qn(i,p,F,S+E-.06,.06,0,2.32,mn)}}if(d.includes("b")&&l===2){const y=v*.8,T=1.8;i.box(-y,2.62,S,y,2.78,S+T,Ho,Fs,Xt(Ho,.8)),i.box(-y,2.78,S+T-.05,y,3.75,S+T,mn,null),i.box(-y,2.78,S,-y+.05,3.75,S+T,mn,null),i.box(y-.05,2.78,S,y,3.75,S+T,mn,null);for(const E of[-y+.1,y-.1])qn(i,p,E,S+T-.12,.08,0,2.62,mn)}}function K_(i,t,e,n,s,r,o,a,l,c,h){i.frame(e,0,n,o);const u=Vo(t,i,s/2,r/2);i.frame(e,u.hi+.05,n,o);const d=[z(14275778),z(9083526),z(12041145),z(7305842)][l%4],f=Ui[c%Ui.length],p=2.4,g=s/2,m=r/2;i.box(-g,u.lo-u.hi-.3,-m,g,p,m,d,null),h.polygons.push(Kn(i,-g,-m,g,m)),a===1?ts(i,s,r,p,.32,.2,f,d):Tr(i,s,r,p,.6,.1,.2,f,d),yn(i,r,-g*.72,g*.72,0,2.05,Xt(d,1.12))}const Xo=[14243375,3112880,6266970,14725690,9134e3,4170656,14252591,4878261].map(z);function q_(i,t,e,n,s,r,o,a,l){const c={0:[8,4.2],1:[6.4,4.8],2:[3.6,3.6],3:[10.5,7.5]},[h,u]=c[r];i.frame(e,0,n,s);const d=Vo(t,i,h/2,u/2);i.frame(e,d.hi+.05,n,s);const f=d.lo-d.hi-.3;if(r===0){const p=[z(15129798),z(12175305),z(13219994),z(10465434)][o%4],g=Ui[(o*3+1)%Ui.length];i.box(-4,f,-2.1,4,.35,2.1,Xt(p,.6),null),i.box(-4,.35,-2.1,4,2.75,2.1,p,null),l.polygons.push(Kn(i,-4,-2.1,4,2.1)),ts(i,8,4.2,2.75,.42,.35,g,p),i.box(-3.2,.2,2.1,1.2,.35,3.7,Fs),i.box(-3.2,.35,3.62,1.2,1.25,3.7,mn,null),l.polygons.push(Kn(i,-3.2,3.62,1.2,3.7)),yn(i,4.2,-2.8,-1.2,1.2,2.3,Ze,a()<.5?1:0),yn(i,4.2,-.4,.5,.35,2.4,Er[o%Er.length]),yn(i,4.2,1.4,3.2,1.2,2.3,Ze,a()<.5?1:0)}else if(r===1){const p=Xo[o%Xo.length];i.box(-2.9,.45,-2.3,2.9,2.55,-.1,mn,z(15263972),z(9079432)),i.box(-2.92,1.05,-2.32,2.92,1.3,-.08,p,null),i.box(-1.4,0,-2.2,-.8,.5,-.2,z(2763308)),i.box(.8,0,-2.2,1.4,.5,-.2,z(2763308)),yn(i,-.2,-2.2,-1,1.45,2.15,Ze,a()<.4?1:0),i.box(-2.6,0,-.1,2.6,2,2.3,vr(p,mn,.72),null),l.polygons.push(Kn(i,-2.9,-2.3,2.9,-.1),Kn(i,-2.6,-.1,2.6,2.3)),i.quad(-2.7,2,2.4,2.7,2,2.4,2.7,2.5,-.1,-2.7,2.5,-.1,vr(p,mn,.55))}else if(r===2){const p=Xo[o%Xo.length],g=1.75,m=6,x=[];i.blob(0,0,0,g,1.55,g,m,4,Xt(p,.85),p);for(let _=0;_<m;_++){const v=_/m*Math.PI*2,S=g*Math.cos(v),b=g*Math.sin(v);x.push(i.wx(S,b),i.wz(S,b))}l.polygons.push(x)}else{const p=z(14209732),g=z(5922659);i.box(-5.25,f,-3.75,5.25,3,3.75,p,null),l.polygons.push(Kn(i,-5.25,-3.75,5.25,3.75)),Tr(i,10.5,7.5,3,1.5,.2,.7,g,z(9072466)),yn(i,7.5,-4.4,4.4,.3,2.6,Ze,a()<.6?1:0),i.box(-5.25,.05,3.75,5.25,.25,6.2,Fs),Ql(i,10.5,-2,2,.9,2.3,Ze,a()<.5?1:0),tc(i,10.5,-2,2,.9,2.3,Ze,a()<.5?1:0)}}function J_(i){const t=i.length/2;let e={cx:0,cz:0,w:0,d:0,heading:0,area:1/0};for(let n=0;n<t;n++){const s=(n+1)%t;let r=i[s*2]-i[n*2],o=i[s*2+1]-i[n*2+1];const a=Math.hypot(r,o);if(a<.5)continue;r/=a,o/=a;let l=1/0,c=-1/0,h=1/0,u=-1/0;for(let f=0;f<t;f++){const p=i[f*2],g=i[f*2+1],m=p*r+g*o,x=-p*o+g*r;m<l&&(l=m),m>c&&(c=m),x<h&&(h=x),x>u&&(u=x)}const d=(c-l)*(u-h);if(d<e.area){const f=(l+c)/2,p=(h+u)/2;e={cx:f*r-p*o,cz:f*o+p*r,w:c-l,d:u-h,heading:Math.atan2(-o,r),area:d}}}return e}function ud(i,t){const e=i.length/2,n=Mr(i)>0?1:-1,s=[];for(let r=0;r<e;r++){const o=(r+e-1)%e,a=(r+1)%e;let l=i[r*2]-i[o*2],c=i[r*2+1]-i[o*2+1],h=i[a*2]-i[r*2],u=i[a*2+1]-i[r*2+1];const d=Math.hypot(l,c)||1,f=Math.hypot(h,u)||1;l/=d,c/=d,h/=f,u/=f;const p=-c*n,g=l*n,m=-u*n,x=h*n;let _=p+m,v=g+x;const S=Math.hypot(_,v)||1;_/=S,v/=S;const b=t/Math.max(.4,_*p+v*g);s.push(i[r*2]+_*b,i[r*2+1]+v*b)}return s}const $_=new Set(["house","detached","residential","terrace","yes;house","semidetached_house","bungalow"]),j_=new Set(["shed","garage","garages","toilets","hut"]);function dd(i,t,e,n,s,r,o){const a=e.p.map(E=>E/10),l=a.length/2;let c=0,h=0,u=1/0,d=-1/0;for(let E=0;E<l;E++){c+=a[E*2],h+=a[E*2+1];const R=t.yAt(a[E*2],a[E*2+1]);R<u&&(u=R),R>d&&(d=R)}c/=l,h/=l;const f=Math.abs(Mr(a)),p=J_(a),g=f/(p.w*p.d||1),m=d+.15,x=Math.hypot(c-r[0],h-r[1])<420,_=e.k==="retail"||e.k==="commercial"||!!e.u||!!e.n||e.k==="yes"&&(f>300||x&&f>110),v=!_&&($_.has(e.k)||e.k==="yes"&&f<=300),S=j_.has(e.k)||f<28;let b;e.l?b=e.l*3.1:e.k==="roof"?b=3:e.k==="hangar"?b=6.5:e.k==="church"?b=5:S?b=2.5:v?b=s()<.2?5.5:2.9:b=f>1200?7:f>500?5.6:4.3+s()*.8;const w={name:e.n,use:e.u,kind:e.k,poly:a,cx:c,cz:h,area:f,obb:p,floorY:m,wallH:b,topY:m+b};let M=26;for(let E=0;E<l;E++){const R=(E+1)%l,P=a[E*2],F=a[E*2+1],L=a[R*2],N=a[R*2+1],I=Math.hypot(L-P,N-F);if(I<4.5)continue;const W=(P+L)/2,q=(F+N)/2,G=n.nearest(W,q,M);if(!G)continue;let Z=-(N-F)/I,j=(L-P)/I;if(Z*(W-c)+j*(q-h)<0&&(Z=-Z,j=-j),(G.px-W)*Z+(G.pz-q)*j<G.dist*.5)continue;M=G.dist;const U=Math.atan2(Z,j),V=(L-P)*Math.cos(U)-(N-F)*Math.sin(U);w.street={x:V>0?P:L,z:V>0?F:N,heading:U,length:I}}if(i.frame(0,m,0,0),e.k==="roof"){const E=z(12172728);i.walls(a,b-.25,b,E),i.cap(a,b,E);for(let R=0;R<l;R++)qn(i,o,a[R*2],a[R*2+1],.12,u-m,b-.25,z(6974832));return w}const y=_?[z(15328470),z(14275266),z(13620178),z(15128768),z(12568777),z(15789540),z(13220258)][Math.floor(s()*7)]:ko[Math.floor(s()*ko.length)],T=_&&f>300?[z(13225160),z(11777972),z(14211280),z(10133405)][Math.floor(s()*4)]:Ui[Math.floor(s()*Ui.length)];if(i.walls(a,u-m-.3,b,y),o==null||o.polygons.push(a),e.k==="church"){i.frame(p.cx,m,p.cz,p.heading);const E=ts(i,p.w,p.d,b,1.15,.3,z(5922659),y);w.topY=m+b+E}else if((v||S||e.k==="hangar")&&g>.8&&l<=8)if(i.frame(p.cx,m,p.cz,p.heading),e.k==="hangar")w.topY=m+b+ts(i,p.w,p.d,b,.3,.3,z(12172728),y);else if(S)Tr(i,p.w,p.d,b,.5,.1,.2,T,y);else if(s()<.55){const E=Math.min(p.w,p.d)/2+.45;jl(i,p.w/2+.45,p.d/2+.45,b,E*.44,T),w.topY=m+b+E*.44}else w.topY=m+b+ts(i,p.w,p.d,b,.5,.4,T,y);else if(f<420&&!_){const E=ud(a,Math.min(2.2,Math.sqrt(f)*.18)),R=1.15;for(let P=0;P<l;P++){const F=(P+1)%l;i.quad(a[P*2],b,a[P*2+1],a[F*2],b,a[F*2+1],E[F*2],b+R,E[F*2+1],E[P*2],b+R,E[P*2+1],T)}i.cap(E,b+R,Xt(T,1.05)),w.topY=m+b+R}else{i.cap(a,b-.05,T),i.walls(a,b,b+.45,Xt(y,.96)),w.topY=m+b+.45;const E=Math.min(6,Math.floor(f/220));for(let R=0;R<E;R++){const P=(s()-.5)*p.w*.5,F=(s()-.5)*p.d*.5,L=Math.cos(p.heading),N=Math.sin(p.heading),I=p.cx+P*L+F*N,W=p.cz-P*N+F*L;i.box(I-1.1,b,W-.8,I+1.1,b+.9,W+.8,z(11120304))}}if(!S&&e.k!=="hangar"){const E=Math.max(1,Math.round(b/3));for(let R=0;R<l;R++){const P=(R+1)%l,F=a[R*2],L=a[R*2+1],N=a[P*2],I=a[P*2+1],W=Math.hypot(N-F,I-L);if(W<3.2)continue;let q=-(I-L)/W,G=(N-F)/W;q*((F+N)/2-c)+G*((L+I)/2-h)<0&&(q=-q,G=-G);const Z=Math.atan2(q,G),j=(N-F)*Math.cos(Z)-(I-L)*Math.sin(Z);i.frame(j>0?F:N,m,j>0?L:I,Z);const U=Math.floor(W/(_?4.2:3.4));for(let V=0;V<E;V++){const O=V*3+.9;if(!(_&&V===0&&w.street&&Math.abs(Z-w.street.heading)<.01))for(let J=0;J<U;J++){const et=(J+.5)/U*W;i.quad(et-.8,O,Sn,et+.8,O,Sn,et+.8,O+1.3,Sn,et-.8,O+1.3,Sn,Ze,s()<.5?1:0)}}}}if(_&&w.street&&!e.k.includes("church")&&f>60){const E=w.street;i.frame(E.x,m,E.z,E.heading);const R=cd[Math.floor(s()*cd.length)];if(i.quad(.5,.35,Sn,E.length-.5,.35,Sn,E.length-.5,2.7,Sn,.5,2.7,Sn,Ze,.9),x&&E.length>6&&b<9){i.box(.2,3,0,E.length-.2,3.16,2.7,R,Xt(R,.9),Xt(R,.75)),i.box(.2,2.75,2.62,E.length-.2,3.3,2.7,vr(R,mn,.25),null);const P=Math.max(1,Math.round(E.length/4.5));for(let F=0;F<=P;F++){const L=.35+F/P*(E.length-.7);qn(i,o,L,2.56,.06,0,3,z(4869456))}}}return i.frame(),w}function Q_(i,t,e,n,s=()=>!1){const r=new $e;r.name="buildings";const o=Ls(),a=900,l=new Map,c=(w,M)=>{const y=`${Math.floor(w/a)}:${Math.floor(M/a)}`;let T=l.get(y);return T||l.set(y,T=new re),T},h=i.meta,u=[(145.7285-h.origin[0])*h.metresPerDegree[0],-(-38.63385-h.origin[1])*h.metresPerDegree[1]],d=Ie(3996),f=[],p={polygons:[],circles:[]};for(const w of i.buildings){let M=0,y=0;for(let T=0;T<w.p.length;T+=2)M+=w.p[T],y+=w.p[T+1];if(M/=w.p.length*5,y/=w.p.length*5,!(s(M,y)||nd(M,y))){if(n.has(w.n)){const T=new re,E=dd(T,t,w,e,Ie(1),u);E.custom=!0,f.push(E);continue}f.push(dd(c(M,y),t,w,e,d,u,p))}}const g=i.houses,m=sd(i);for(let w=0;w<g.length;w+=Yl){const M=g[w]/4,y=g[w+1]/4,T=g[w+2]/10,E=g[w+3]/10,R=g[w+4]/10*(Math.PI/180),P=Ie(w*7919+17);s(M,y)||m(M,y)||(g[w+5]===1?K_(c(M,y),t,M,y,T,E,R,g[w+7],g[w+8],g[w+9],p):W_(c(M,y),t,M,y,T,E,R,g[w+6],g[w+7],g[w+8],g[w+9],P,p))}const x=i.cabins;for(let w=0;w<x.length;w+=p_){const M=x[w]/4,y=x[w+1]/4;s(M,y)||q_(c(M,y),t,M,y,x[w+2]/10*(Math.PI/180),x[w+3],x[w+4],Ie(w*31+5),p)}const _=[];for(const w of Us){const[M,y]=w[1];s(M,y)||Y_(c(M,y),t,w,_,p)}const[v,S]=Bo;if(!s(v,S)){const w=b_(c(v,S),t);_.push(...w),p.polygons.push(...w)}for(const w of ql){const[M,y]=w.centre;if(s(M,y))continue;const[T,E]=R_(M,y),R=ud(w.roof,.18);H_(c(M,y),t,w,R,T,E),_.push(R),p.polygons.push(R)}let b=0;for(const w of l.values()){w.frame(),b+=w.vertexCount/3;const M=new te(w.build(),o);M.castShadow=!0,M.receiveShadow=!0,r.add(M)}return{group:r,footprints:f,designedWalls:_,blockers:p,triangles:b}}class tv{constructor(t){H(this,"targetFps");H(this,"deadline",-1/0);H(this,"lastDraw");this.targetFps=t===30?30:60}get target(){return this.targetFps}setTarget(t){const e=t===30?30:60;return e===this.targetFps?!1:(this.targetFps=e,this.reset(),!0)}reset(){this.deadline=-1/0,this.lastDraw=void 0}takeFrame(t){if(t+1<this.deadline)return;const e=1e3/this.targetFps,n=this.deadline+e;this.deadline=n<=t?t+e:n;const s=this.lastDraw===void 0?0:(t-this.lastDraw)/1e3;return this.lastDraw=t,s}}const ev=.1,nv=180,iv=425,sv=650,rv=360,ov=480,av=1.8,lv=450;function fd(i,t,e){const n=Math.max(i.x-t,0,t-i.x-i.size),s=Math.max(i.z-e,0,e-i.z-i.size);return Math.hypot(n,s)}function pd(i){"close"in i&&i.close()}function Ar(i){i.texture.dispose(),pd(i.image)}function cv(i,t){return new Promise((e,n)=>{if(t.aborted){n(t.reason);return}const s=new Image;s.crossOrigin="anonymous";const r=()=>{s.onload=s.onerror=null,t.removeEventListener("abort",o)},o=()=>{r(),s.removeAttribute("src"),n(t.reason)};s.onload=()=>{r(),e(s)},s.onerror=()=>{r(),n(new Error("Could not load ground detail"))},t.addEventListener("abort",o,{once:!0}),s.src=i})}class hv{constructor(t,e,n,s,r,o){H(this,"patches");H(this,"manifest");H(this,"manifestRetryAt",0);H(this,"load");H(this,"ready");H(this,"residents");H(this,"previous");H(this,"vx",0);H(this,"vz",0);H(this,"closed",!1);this.urls=t,this.small=e,this.detail=n,this.anisotropy=s,this.worker=r,this.markDirty=o,this.residents=n.maps.map(()=>{})}setSmall(t){if(t!==this.small){this.small=t,this.cancelLoad(),this.ready&&Ar(this.ready),this.ready=void 0;for(const e of this.patches??[])e.failures=e.retryAt=0}}url(t){return this.small?t.smallUrl:t.fullUrl}update(t,e,n,s,r){if(!this.urls.detail||this.closed)return;const o=this.previous,a=o?t-o.time:0,l=o&&Math.hypot(e-o.x,n-o.y,s-o.z)>nv;if(o&&!l&&a<ev)return;if(this.previous={time:t,x:e,y:n,z:s},!o||l||a>1)this.vx=this.vz=0;else{const u=Math.min(1,a*4);this.vx+=((e-o.x)/a-this.vx)*u,this.vz+=((s-o.z)/a-this.vz)*u}if(!this.patches){!this.manifest&&t>=this.manifestRetryAt&&this.loadManifest(this.urls.detail);return}const c=Math.min(av,lv/Math.max(1,Math.hypot(this.vx,this.vz))),h=this.patches.map(u=>{const d=u.slot!==-1,f=Math.min(fd(u,e,s),fd(u,e+this.vx*c,s+this.vz*c)+70);return{patch:u,score:f,present:d}}).filter(({score:u,present:d})=>r<=(d?ov:rv)&&u<=(d?sv:iv)).sort((u,d)=>u.score-d.score).slice(0,this.residents.length).map(({patch:u})=>u);for(const u of this.residents)u&&!h.includes(u.patch)&&this.evict(u);if(this.load&&!h.includes(this.load.patch)&&this.cancelLoad(),this.ready&&!h.includes(this.ready.patch)&&(Ar(this.ready),this.ready=void 0),!this.load&&!this.ready){const u=h.find(d=>{var f;return((f=this.residents[d.slot])==null?void 0:f.url)!==this.url(d)&&t>=d.retryAt});u&&this.start(u)}}applyReady(){if(!this.ready)return;const t=this.ready.patch.slot>=0?this.ready.patch.slot:this.residents.indexOf(void 0);if(t<0)return;const e=this.ready;this.ready=void 0;const n=this.residents[t];n&&Ar(n),this.residents[t]=e;const{patch:s,texture:r}=e;s.slot=t,this.detail.maps[t].value=r,this.detail.rects[t].value.set(s.x,s.z,1/s.size,1)}dispose(){var t;if(!this.closed){this.closed=!0,(t=this.manifest)==null||t.abort(),this.cancelLoad(),this.ready&&Ar(this.ready),this.ready=void 0;for(const e of this.residents)e&&this.evict(e);this.detail.fallback.dispose()}}async loadManifest(t){var n;const e=this.manifest=new AbortController;try{const s=new URL(t,document.baseURI),r=await fetch(s,{signal:e.signal});if(r.status===404){this.patches=[];return}if(!r.ok)throw new Error("Could not load the ground detail list");const{patches:o}=await r.json();if(e.signal.aborted)return;this.patches=(Array.isArray(o)?o:[]).flatMap(a=>{if(!a||!Number.isFinite(a.x)||!Number.isFinite(a.z)||!(a.size>0)||!Number.isFinite(a.size))return[];if(typeof a.file!="string"||!a.file)return[];const l=c=>{var h;return(h=this.urls.detailFiles)!=null&&h[c]?new URL(this.urls.detailFiles[c],document.baseURI).href:new URL(c,s).href};try{return[{x:a.x,z:a.z,size:a.size,fullUrl:l(a.file),smallUrl:l(a.lo||a.file),slot:-1,failures:0,retryAt:0}]}catch{return[]}})}catch{e.signal.aborted||(this.manifestRetryAt=(((n=this.previous)==null?void 0:n.time)??0)+20)}finally{this.manifest=void 0}}start(t){const e=this.url(t),n=new AbortController,s=this.load={patch:t,controller:n},{signal:r}=n;this.worker.run({kind:"detail",url:e},()=>cv(e,r),r).then(o=>{if(this.load!==s){pd(o);return}this.load=void 0,t.failures=0,t.retryAt=0;const a=new Re(o);a.flipY=!("close"in o),a.colorSpace=Oe,a.anisotropy=this.anisotropy,a.generateMipmaps=!0,a.minFilter=En,a.needsUpdate=!0,this.ready={patch:t,url:e,texture:a,image:o},this.markDirty()},()=>{var o;this.load===s&&(this.load=void 0,t.failures++,t.retryAt=(((o=this.previous)==null?void 0:o.time)??0)+Math.min(30,2**t.failures))})}cancelLoad(){const t=this.load;this.load=void 0,t==null||t.controller.abort()}evict(t){const e=t.patch.slot;this.detail.maps[e].value=this.detail.fallback,this.detail.rects[e].value.w=0,this.residents[e]=void 0,t.patch.slot=-1,Ar(t),this.markDirty()}}class uv{constructor(t,e,n){H(this,"items",[]);H(this,"v",new Y);H(this,"visible",!0);H(this,"obstacles",[]);this.layer=t;for(const s of[...e].sort((r,o)=>r.priority-o.priority)){const r=document.createElement("button");r.type="button",r.tabIndex=-1,r.className=`inv-label inv-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",r.addEventListener("click",()=>n(s.id)),t.appendChild(r),this.items.push({place:s,el:r,w:0,h:0,shown:!1})}}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const o of this.items){o.w||(o.w=o.el.offsetWidth,o.h=o.el.offsetHeight);const a=o.place;this.v.set(a.x,a.y,a.z);const l=this.v.distanceTo(t.position);this.v.project(t);let c=this.v.z<1&&this.v.z>-1&&l<(a.maxDist??1/0)&&l<s;const h=(this.v.x*.5+.5)*e,u=(-this.v.y*.5+.5)*n,d=h-o.w/2,f=u-o.h,p=h+o.w/2,g=u;if(c&&(p<0||d>e||g<0||f>n)&&(c=!1),c){for(const m of r)if(d<m[2]+6&&p>m[0]-6&&f<m[3]+4&&g>m[1]-4){c=!1;break}}c&&(r.push([d,f,p,g]),o.el.style.transform=`translate3d(${Math.round(d)}px, ${Math.round(f)}px, 0)`),c!==o.shown&&(o.el.style.visibility=c?"visible":"hidden",o.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}const dv=[{id:"town",name:"A'Beckett Street",kind:"landmark",lat:-38.63372,lon:145.7283,blurb:"Inverloch's main street: bakeries, fish and chips, cafes and shops, a short walk from the inlet.",view:[380,58,-28],priority:1,lift:26},{id:"jetty",name:"Inverloch Jetty",kind:"landmark",lat:-38.63591,lon:145.73413,blurb:"Timber jetty reaching into Anderson Inlet, with the boat ramp alongside. A favourite for fishing and an evening walk.",view:[190,63,32],priority:1,lift:16},{id:"surf",name:"Surf Beach & Life Saving Club",kind:"landmark",lat:-38.64634,lon:145.70199,blurb:"Ocean beach facing Bass Strait, watched over by the Inverloch Surf Life Saving Club on the dune.",view:[330,62,-32],priority:1,lift:20},{id:"inlet",name:"Anderson Inlet",kind:"water",lat:-38.6412,lon:145.7445,blurb:"A shallow tidal estuary where the Tarwin River meets the sea. The sandbars here come from LiDAR survey data: slide the tide to cover and uncover them.",view:[3e3,50,8],priority:2},{id:"hub",name:"The Hub",kind:"landmark",lat:-38.63332,lon:145.72762,blurb:"Inverloch Community Hub on A'Beckett Street, home to the library and visitor information.",view:[300,60,20],priority:3,maxDist:2600,lift:18},{id:"espy",name:"Esplanade Hotel",kind:"landmark",lat:-38.63419,lon:145.72889,blurb:"The pub at the foreshore end of the main street.",view:[280,62,-40],priority:3,maxDist:2200,lift:18},{id:"rainbow",name:"Rainbow Park",kind:"landmark",lat:-38.63529,lon:145.72876,blurb:"Foreshore playground with picnic lawns and barbecues beside the inlet beach.",view:[150,60,14],priority:3,maxDist:2200,lift:14},{id:"bunurong",name:"Bunurong Environment Centre",kind:"landmark",lat:-38.63465,lon:145.72917,blurb:"Environment centre and shell museum on The Esplanade.",view:[260,60,-15],priority:5,maxDist:1100,lift:15},{id:"glade",name:"The Glade",kind:"landmark",lat:-38.63539,lon:145.7302,blurb:"Foreshore reserve and picnic shelter between the town centre and the jetty.",view:[300,62,5],priority:5,maxDist:1300,lift:13},{id:"oval",name:"Recreation Reserve",kind:"landmark",lat:-38.63194,lon:145.72681,blurb:"The town's football oval, a block back from the main street.",view:[460,58,15],priority:4,maxDist:2600,lift:16},{id:"school",name:"Primary School",kind:"landmark",lat:-38.63062,lon:145.72813,blurb:"Inverloch Primary School.",view:[380,58,0],priority:6,maxDist:1500,lift:14},{id:"bowls",name:"Bowls Club",kind:"landmark",lat:-38.63556,lon:145.73245,blurb:"Inverloch Bowls Club, two greens beside the foreshore.",view:[260,60,0],priority:6,maxDist:1300,lift:12},{id:"tennis",name:"Tennis Club & Oval",kind:"landmark",lat:-38.62722,lon:145.7372,blurb:"Tennis courts and a second football oval on the north-east side of town.",view:[520,58,10],priority:6,maxDist:2e3,lift:14},{id:"camping",name:"Foreshore Holiday Parks",kind:"landmark",lat:-38.63425,lon:145.7442,blurb:"Cabins, caravans and tents under the trees along The Esplanade, steps from the inlet.",view:[560,60,15],priority:4,maxDist:2800,lift:16},{id:"screw",name:"Screw Creek & Townsend Bluff",kind:"nature",lat:-38.6338,lon:145.7546,blurb:"A tidal creek in a nature conservation reserve, with a walking circuit up to the lookout on Townsend Bluff.",view:[900,60,-20],priority:3,lift:24},{id:"norman",name:"Point Norman",kind:"nature",lat:-38.648,lon:145.7118,blurb:"The corner where the surf beach turns into the inlet.",view:[900,60,-35],priority:4,maxDist:4200,lift:14},{id:"smythe",name:"Point Smythe",kind:"nature",lat:-38.6466,lon:145.7366,blurb:"The tip of the Venus Bay peninsula, across the entrance from town: coastal scrub, dunes and walking tracks.",view:[1300,58,150],priority:3,lift:22},{id:"racv",name:"RACV Inverloch Resort",kind:"landmark",lat:-38.6487,lon:145.6876,blurb:"Resort and villas on the Cape Paterson road, on the hill above the coast.",view:[520,60,40],priority:5,maxDist:3200,lift:18},{id:"strait",name:"Bass Strait",kind:"water",lat:-38.6565,lon:145.7075,blurb:"Open ocean. Swell rolls in to the surf beach from here.",view:[2300,50,-12],priority:4}];function fv(i,t){return dv.map(e=>{const n=(e.lon-i.origin[0])*i.metresPerDegree[0],s=-(e.lat-i.origin[1])*i.metresPerDegree[1],r=Math.max(t.yAt(n,s),0);return{...e,x:n,z:s,y:r+(e.lift??6)}})}function bn(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}const pv=new Set(["Inverloch Surf Life Saving Club","The Hub"]),Ke=z(10126440),Ne=z(6113848),wn=z(16053230),Os=z(11842219),we=z(7304312),Rr=z(3163994),zs=z(13644844),Bs=z(15909424),mv=z(16119022),ec=2.05*Zn;function md(i,t,e,n=35){let s=1/0,r=0,o=1;for(let a=0;a<24;a++){const l=a/24*Math.PI*2,c=i.metresAt(t+Math.cos(l)*n,e+Math.sin(l)*n)+i.metresAt(t+Math.cos(l)*n*2,e+Math.sin(l)*n*2);c<s&&(s=c,r=Math.cos(l),o=Math.sin(l))}return[r,o]}function Yo(i){let t=0,e=0;for(let n=0;n<i.length;n+=2)t+=i[n],e+=i[n+1];return[t/(i.length/2)/10,e/(i.length/2)/10]}function gv(i,t,e){const n=[];for(let v=0;v<e.length;v+=2)n.push([e[v]/10,e[v+1]/10]);t.metresAt(n[0][0],n[0][1])<t.metresAt(n[n.length-1][0],n[n.length-1][1])&&n.reverse();const s=1.7,r=ec,[o,a]=n[0];let l=o-n[1][0],c=a-n[1][1];const h=Math.hypot(l,c)||1;l/=h,c/=h;let u=0;for(;u<30&&t.yAt(o+l*u,a+c*u)<r-.25;)u+=1.5;const d=Math.max(t.yAt(o+l*u,a+c*u),r-1.2),f=Math.atan2(-l,-c);i.frame(o+l*u,0,a+c*u,f),i.quad(-s,d+.05,0,s,d+.05,0,s,r,u,-s,r,u,Ke),i.quad(-s,d-1.2,0,-s,r-.4,u,-s,r,u,-s,d+.05,0,Ne),i.quad(s,d-1.2,0,s,d+.05,0,s,r,u,s,r-.4,u,Ne);for(let v=0;v<n.length-1;v++){const[S,b]=n[v],[w,M]=n[v+1],y=Math.hypot(w-S,M-b),T=Math.atan2(w-S,M-b);i.frame(S,r,b,T);const E=Math.ceil(y/1.2);for(let P=0;P<E;P++){const F=P/E*y,L=(P+1)/E*y;i.box(-s,-.14,F,s,0,L,Xt(Ke,.9+P*7%5*.04),void 0,Ne)}i.box(-s+.25,-.5,0,-s+.5,-.14,y,Ne,null),i.box(s-.5,-.5,0,s-.25,-.14,y,Ne,null);const R=Math.max(1,Math.round(y/3.6));for(let P=0;P<=R;P++){const F=P/R*y;for(const L of[-1,1]){const N=L*(s-.12),I=t.yAt(i.wx(N,F),i.wz(N,F));i.cyl(N,I-r-.6,F,.17,.15,r-I+.6+1.1,6,Ne,Xt(Ke,.8))}i.box(-s,-.78,F-.12,s,-.5,F+.12,Ne),i.quad(-s+.1,-2.6,F,s-.1,-.8,F,s-.1,-.6,F,-s+.1,-2.4,F,Xt(Ne,.9))}for(const P of[-1,1]){const F=P*(s-.12);i.box(F-.05,1.02,0,F+.05,1.1,y,Ke,void 0,Ne),i.box(F-.03,.52,0,F+.03,.58,y,Ke,void 0,Ne)}i.box(-s,-.14,-s,s,0,.01,Ke,void 0,Ne)}const[p,g]=n[n.length-1],[m,x]=n[n.length-2],_=Math.atan2(p-m,g-x);i.frame(p,r,g,_),i.box(-3.2,-.14,0,3.2,0,5.2,Xt(Ke,.96),void 0,Ne);for(const[v,S]of[[-3.05,.2],[3.05,.2],[-3.05,5],[3.05,5],[0,5]]){const b=t.yAt(i.wx(v,S),i.wz(v,S));i.cyl(v,b-r-.6,S,.19,.17,r-b+.6+(v===0?0:1.1),6,Ne,Xt(Ke,.8))}i.box(-3.1,1.02,4.9,3.1,1.1,5,Ke,void 0,Ne),i.box(-3.1,1.02,0,-3,1.1,5,Ke,void 0,Ne),i.box(3,1.02,0,3.1,1.1,5,Ke,void 0,Ne),i.cyl(2.6,0,4.5,.07,.05,4.6,5,we),i.blob(2.6,4.75,4.5,.28,.2,.28,6,3,z(16773320),void 0,1.6),i.box(-.35,-3.6,5.22,-.3,.9,5.28,we,null),i.box(.3,-3.6,5.22,.35,.9,5.28,we,null);for(let v=-3.3;v<.6;v+=.42)i.box(-.3,v,5.22,.3,v+.05,5.28,we);return i.frame(),{head:new Y(p,r,g),points:n}}function xv(i,t,e,n){const[s,r]=md(t,e,n,25),o=Math.atan2(s,r);i.frame(e,0,n,o);const a=4.2,l=-8,c=[];for(let p=l;p<=46;p+=3){const g=t.yAt(i.wx(0,p),i.wz(0,p));if(c.push([p,g]),g<-1.6*Zn)break}const h=c[0][1]+.12,u=Math.min(c[c.length-1][1]+.25,-.9*Zn),d=c[c.length-1][0],f=c.length-1;for(let p=0;p<f;p++){const g=l+(d-l)*p/f,m=l+(d-l)*(p+1)/f,x=h+(u-h)*p/f,_=h+(u-h)*(p+1)/f;i.quad(-a,x,g,-a,_,m,a,_,m,a,x,g,p%2?Os:Xt(Os,.94));for(const v of[-1,1])i.quad(v*a,x-1.5,g,v*a,_-1.5,m,v*a,_+.15,m,v*a,x+.15,g,Xt(Os,.8))}i.frame()}function _v(i,t,e,n){const[s,r]=md(t,e.cx,e.cz,60),o=e.obb;let a=o.heading,l=o.w,c=o.d,h=-1/0;for(let M=0;M<4;M++){const y=o.heading+M*Math.PI/2,T=Math.sin(y)*s+Math.cos(y)*r;T>h&&(h=T,a=y,l=M%2?o.d:o.w,c=M%2?o.w:o.d)}const u=l/2,d=c/2;i.frame(o.cx,e.floorY,o.cz,a);const f=z(13223611),p=z(15394522),g=z(6975604);i.box(-u,-4,-d,u,3.1,d,f,null),i.box(-u,3.1,-d,u,6.1,d,p,null),n.polygons.push(Kn(i,-u,-d,u,d));const m=Math.max(2,Math.floor(l/5));for(let M=0;M<m;M++){const y=-u+(M+.5)/m*l;i.quad(y-1.7,.05,d+.05,y+1.7,.05,d+.05,y+1.7,2.7,d+.05,y-1.7,2.7,d+.05,M%2?zs:Bs)}i.quad(-u+.6,3.6,d+.05,u-.6,3.6,d+.05,u-.6,5.7,d+.05,-u+.6,5.7,d+.05,Rr,.9),i.box(-u-.6,2.95,d,u+.6,3.12,d+3.4,Os,Ke,Xt(Os,.8)),i.box(-u-.6,3.12,d+3.32,u+.6,4.15,d+3.4,z(10469580),null);for(const M of[-u-.4,-u/3,u/3,u+.4])qn(i,n,M,d+3.12,.12,-4,2.95,we);i.quad(-u-.8,7.5,d+3.8,u+.8,7.5,d+3.8,u+.8,6.2,-d-.6,-u-.8,6.2,-d-.6,g),i.quad(-u,6.1,d,u,6.1,d,u,7.1,d,-u,7.1,d,p),i.quad(u,6.1,d,u,6.1,-d,u,6.3,-d,u,7.1,d,p),i.quad(-u,6.1,-d,-u,6.1,d,-u,7.1,d,-u,6.3,-d,p);const x=u-2.2,_=d-1.8;i.box(x-1.8,6.1,_-1.8,x+1.8,9.2,_+1.8,p,null),i.box(x-1.85,9.2,_-1.85,x+1.85,10.5,_+1.85,Rr,null,null,.7),i.box(x-2.3,10.5,_-2.3,x+2.3,10.72,_+2.3,g),i.cyl(x,10.72,_,.06,.04,5.2,5,wn),i.quad(x,15.6,_,x+1.9,15.6,_,x+1.9,14.5,_,x,14.5,_,zs),i.quad(x,14.5,_,x+1.9,14.5,_,x+1.9,13.4,_,x,13.4,_,Bs);for(let M=0;M<4;M++){const y=-u+(M+.5)/4*l;i.quad(y+.9,3.9,-d-.05,y-.9,3.9,-d-.05,y-.9,5.3,-d-.05,y+.9,5.3,-d-.05,Rr,M%2)}let v=d+14;for(;v<160&&t.metresAt(o.cx+s*v,o.cz+r*v)>1.75;)v+=3;const S=o.cx+s*v,b=o.cz+r*v,w=Math.atan2(s,r);i.frame(S,t.yAt(S,b),b,w);for(const M of[-1,1]){const y=M*32,T=t.yAt(i.wx(y,0),i.wz(y,0))-t.yAt(S,b);i.cyl(y,T,0,.05,.04,4.4,5,wn),i.quad(y,T+4.4,0,y+.95,T+4.4,0,y+.95,T+3.1,0,y,T+3.1,0,zs),i.quad(y,T+3.1,0,y+.95,T+3.1,0,y+.95,T+1.8,0,y,T+1.8,0,Bs)}for(const[M,y]of[[-1.5,-5.5],[1.5,-5.5],[-1.5,-8.5],[1.5,-8.5]])i.cyl(M,0,y,.04,.04,2.2,4,we);i.tri(-1.7,2.2,-5.3,1.7,2.2,-5.3,0,3,-7,zs),i.tri(1.7,2.2,-8.7,-1.7,2.2,-8.7,0,3,-7,zs),i.tri(1.7,2.2,-5.3,1.7,2.2,-8.7,0,3,-7,Bs),i.tri(-1.7,2.2,-8.7,-1.7,2.2,-5.3,0,3,-7,Bs),i.blob(6,.35,-6,.95,.4,2.1,8,3,z(14238751),z(15755818)),i.box(5.6,.3,-7.9,6.4,.95,-7.5,z(2763308));for(let M=0;M<4;M++)i.box(-7+M*.5,.2,-7.2,-6.85+M*.5,.75,-4.6,M%2?Bs:z(3116992));return i.frame(),{beach:new Y(S,t.yAt(S,b),b),seaward:[s,r]}}function gd(i,t){const e=i.length/2;let n=0;for(let o=0;o<e;o++){const a=(o+1)%e;n+=i[o*2]*i[a*2+1]-i[a*2]*i[o*2+1]}const s=n>0?1:-1,r=[];for(let o=0;o<e;o++){const a=(o+e-1)%e,l=(o+1)%e;let c=i[o*2]-i[a*2],h=i[o*2+1]-i[a*2+1],u=i[l*2]-i[o*2],d=i[l*2+1]-i[o*2+1];const f=Math.hypot(c,h)||1,p=Math.hypot(u,d)||1;c/=f,h/=f,u/=p,d/=p;const g=-h*s,m=c*s;let x=g-d*s,_=m+u*s;const v=Math.hypot(x,_)||1;x/=v,_/=v;const S=t/Math.max(.45,x*g+_*m);r.push(i[o*2]+x*S,i[o*2+1]+_*S)}return r}function vv(i,t,e,n){i.frame(0,e.floorY,0,0);const s=z(11111014),r=z(15328470),o=z(9410458);let a=1/0;for(let u=0;u<e.poly.length;u+=2)a=Math.min(a,t.yAt(e.poly[u],e.poly[u+1]));const l=e.poly.length/2;i.walls(e.poly,a-e.floorY-.3,3.2,s),i.walls(e.poly,3.2,6.2,r),n.polygons.push(e.poly);const c=gd(e.poly,3.2),h=gd(e.poly,4.4);for(let u=0;u<l;u++){const d=(u+1)%l;i.quad(e.poly[u*2],6.6,e.poly[u*2+1],e.poly[d*2],6.6,e.poly[d*2+1],c[d*2],6.05,c[d*2+1],c[u*2],6.05,c[u*2+1],o)}if(i.walls(e.poly,6.2,6.6,Xt(r,.92)),i.walls(c,6.05,7.9,Rr,.8),i.cap(c,7.9,Xt(o,1.08)),i.walls(h,7.9,8.3,Xt(o,.9)),i.cap(h,8.3,o),e.street){const u=e.street;i.frame(u.x,e.floorY,u.z,u.heading),i.quad(.6,.3,.06,u.length-.6,.3,.06,u.length-.6,5.6,.06,.6,5.6,.06,Rr,.9),i.box(u.length*.3,3.3,0,u.length*.7,3.5,3.4,z(14263361),void 0,Xt(z(14263361),.8)),qn(i,n,u.length*.3+.3,3.2,.1,0,3.3,we),qn(i,n,u.length*.7-.3,3.2,.1,0,3.3,we)}i.frame()}function gn(i,t,e,n,s,r=mv){const o=e.length,a=.22,l=s?o:o-1;for(let c=0;c<l;c++){const[h,u]=e[c],[d,f]=e[(c+1)%o];let p=-(f-u),g=d-h;const m=Math.hypot(p,g)||1;p=p/m*n*.5,g=g/m*n*.5;const x=t.yAt(h,u)+a,_=t.yAt(d,f)+a;i.quad(h+p,x,u+g,d+p,_,f+g,d-p,_,f-g,h-p,x,u-g,r)}}function Mv(i,t,e,n,s){const r=[];for(let v=0;v<n.length;v+=2)r.push([n[v]/10,n[v+1]/10]);const[o,a]=Yo(n);let l=0,c=0,h=0;for(const[v,S]of r)l+=(v-o)**2,c+=(S-a)**2,h+=(v-o)*(S-a);const u=.5*Math.atan2(2*h,l-c),d=Math.cos(u),f=Math.sin(u);let p=0,g=0;for(const[v,S]of r)p=Math.max(p,Math.abs((v-o)*d+(S-a)*f)),g=Math.max(g,Math.abs(-(v-o)*f+(S-a)*d));p-=5,g-=5;const m=(v,S)=>[o+v*d-S*f,a+v*f+S*d],x=[];for(let v=0;v<72;v++){const S=v/72*Math.PI*2;x.push(m(Math.cos(S)*p,Math.sin(S)*g))}gn(t,e,x,.35,!0),gn(t,e,[m(-25,-25),m(25,-25),m(25,25),m(-25,25)],.3,!0);const _=v=>Array.from({length:24},(S,b)=>m(Math.cos(b/24*Math.PI*2)*v,Math.sin(b/24*Math.PI*2)*v));gn(t,e,_(5),.3,!0),gn(t,e,_(1.5),.3,!0);for(const v of[-1,1]){gn(t,e,[m(v*p,-3.2),m(v*(p-9),-3.2),m(v*(p-9),3.2),m(v*p,3.2)],.3,!1);const S=[];for(let b=-8;b<=8;b++){const w=b/8*1.05,M=v*(p-50*Math.cos(w)),y=50*Math.sin(w);(M/p)**2+(y/g)**2<1&&S.push(m(M,y))}S.length>2&&gn(t,e,S,.3,!1);for(const[b,w]of[[-3.2,9.5],[3.2,9.5],[-9.6,6.2],[9.6,6.2]]){const[M,y]=m(v*p,b);i.frame(M,e.yAt(M,y),y,0),i.cyl(0,0,0,.11,.09,w,6,wn),i.cyl(0,0,0,.2,.2,1.6,6,b*b<12?z(2973608):z(12597806))}}if(s)for(const[v,S]of[[-.62,-1],[.62,-1],[-.62,1],[.62,1]]){const[b,w]=m(v*(p+6),S*(g+9));i.frame(b,e.yAt(b,w),w,Math.atan2(o-b,a-w)),i.cyl(0,0,0,.28,.16,24,6,we),i.box(-1.7,24,-.2,1.7,25.3,.2,z(4869972)),i.quad(-1.6,24.1,.22,1.6,24.1,.22,1.6,25.2,.22,-1.6,25.2,.22,z(16774876),2.2)}i.frame()}function Sv(i,t,e,n,s){const r=[];for(let S=0;S<n.length;S+=2)r.push([n[S]/10,n[S+1]/10]);if(r.length<4)return;if(s==="bowls"){gn(t,e,r,.5,!0,z(15328986));return}const[o,a,l,c]=r,h=Math.hypot(a[0]-o[0],a[1]-o[1])>Math.hypot(l[0]-a[0],l[1]-a[1]),u=h?o:a,d=h?a:l,f=h?l:c,p=h?c:o,g=(S,b)=>{const w=u[0]+(d[0]-u[0])*S,M=u[1]+(d[1]-u[1])*S,y=p[0]+(f[0]-p[0])*S,T=p[1]+(f[1]-p[1])*S;return[w+(y-w)*b,M+(T-M)*b]},m=.14;gn(t,e,[g(0,0),g(1,0),g(1,1),g(0,1)],m,!0),gn(t,e,[g(0,.125),g(1,.125)],m,!1),gn(t,e,[g(0,.875),g(1,.875)],m,!1),gn(t,e,[g(.23,.125),g(.23,.875)],m,!1),gn(t,e,[g(.77,.125),g(.77,.875)],m,!1),gn(t,e,[g(.23,.5),g(.77,.5)],m,!1);const x=g(.5,-.04),_=g(.5,1.04),v=e.yAt(x[0],x[1])+.2;i.frame(0,v,0,0),i.quad(x[0],0,x[1],_[0],0,_[1],_[0],.95,_[1],x[0],.95,x[1],z(2830131)),i.quad(x[0],.95,x[1],_[0],.95,_[1],_[0],1.05,_[1],x[0],1.05,x[1],wn);for(const S of[x,_])i.cyl(S[0],0,S[1],.06,.06,1.1,5,we);i.frame()}const fi=[14826299,15764004,15909424,5025616,3117008,8280002].map(z);function yv(i,t,e,n,s){const[r,o]=Yo(e),a=t.yAt(r,o)+.05,l=s()*Math.PI;i.frame(r,a,o,l);const c=(d,f,p,g)=>{for(const[m,x]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.cyl(d+m,0,f+x,.07,.07,p+2,5,z(8018492));i.box(d-1,p-.1,f-1,d+1,p,f+1,Ke,void 0,Ne),i.cyl(d,p+2,f,1.5,0,1,4,g)};c(-2.2,0,1.5,fi[0]),c(2.2,0,2.1,fi[4]),i.box(-1.2,1.4,-.35,1.2,1.5,.35,Ke),i.quad(3.2,2.1,-.4,6.4,.15,-.4,6.4,.15,.4,3.2,2.1,.4,fi[2]),i.quad(-3.2,1.5,.4,-5.6,.15,.4,-5.6,.15,-.4,-3.2,1.5,-.4,fi[1]);const h=0,u=5.2;for(const d of[-2.2,2.2])i.quad(h+d,0,u-1.1,h+d+.08,0,u-1.1,h+d+.08,2.6,u,h+d,2.6,u,we),i.quad(h+d,0,u+1.1,h+d+.08,0,u+1.1,h+d+.08,2.6,u,h+d,2.6,u,we);i.box(h-2.25,2.55,u-.05,h+2.25,2.65,u+.05,fi[3]);for(const d of[-1.1,0,1.1])i.box(h+d-.25,.5,u-.1,h+d+.25,.56,u+.1,z(2763308)),i.box(h+d-.24,.56,u-.01,h+d-.22,2.55,u+.01,we,null),i.box(h+d+.22,.56,u-.01,h+d+.24,2.55,u+.01,we,null);if(n){i.cyl(-6.5,0,-5.5,.09,.07,5.2,5,we);for(let d=0;d<6;d++){const f=d/6*Math.PI*2,p=-6.5+Math.cos(f)*3.2,g=-5.5+Math.sin(f)*3.2;i.quad(p-.04,0,g,p+.04,0,g,-6.46,5.1,-5.5,-6.54,5.1,-5.5,z(3104672))}for(let d=0;d<6;d++){const f=-9+d*3.4,p=fi[d],g=4.6,m=3.3;i.cyl(f,0,-11,.08,.07,g,5,we),i.cyl(f+1.7,0,-7.2,.08,.07,m,5,we),i.tri(f,g,-11,f+3.4,g,-11,f+1.7,m,-7.2,p)}i.cyl(11.399999999999999,0,-11,.08,.07,4.6,5,we),i.cyl(6.5,.3,5.5,1.3,1.3,.12,10,fi[5],fi[2]),i.cyl(6.5,0,5.5,.1,.1,1.1,5,we);for(let d=0;d<3;d++)i.blob(9.5+d*1.6,.55,-1.5,.3,.3,.55,5,3,fi[(d*2+1)%6])}i.frame()}function bv(i,t,e){const n=[];for(let u=0;u<e.length;u+=2)n.push([e[u]/10,e[u+1]/10]);const[s,r]=Yo(e),o=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1])>Math.hypot(n[2][0]-n[1][0],n[2][1]-n[1][1])?[n[0],n[1]]:[n[1],n[2]],a=Math.atan2(o[1][0]-o[0][0],o[1][1]-o[0][1]),l=Math.hypot(o[1][0]-o[0][0],o[1][1]-o[0][1])/2-1;i.frame(s,t.yAt(s,r)+.1,r,a);const c=z(13092286),h=Xt(c,.88);for(const u of[-1,1]){const d=u*l,f=[[0,0],[1.4,.35],[2.4,1.1],[3,2]];for(let p=0;p<3;p++){const[g,m]=f[p],[x,_]=f[p+1],v=d-u*(3-g),S=d-u*(3-x);u>0?i.quad(-4,m,v,4,m,v,4,_,S,-4,_,S,p%2?c:h):i.quad(4,m,v,-4,m,v,-4,_,S,4,_,S,p%2?c:h)}i.box(-4,0,Math.min(d,d+u*1.2),4,2,Math.max(d,d+u*1.2),h,c)}i.box(-1.5,0,-1.2,1.5,.45,1.2,h,c),i.quad(-1.5,.45,1.2,1.5,.45,1.2,1.5,0,3,-1.5,0,3,c),i.quad(1.5,.45,-1.2,-1.5,.45,-1.2,-1.5,0,-3,1.5,0,-3,c),i.box(3.2,.45,-2.5,3.28,.5,2.5,we),i.frame()}function wv(i,t){const e=t.obb,n=e.w>=e.d,s=(n?e.w:e.d)/2;i.frame(e.cx,t.floorY,e.cz,e.heading);const r=n?s+1.2:0,o=n?0:s+1.2,a=z(15262418);i.box(r-1.4,-1,o-1.4,r+1.4,t.wallH+4.6,o+1.4,a,null),i.cyl(r,t.wallH+4.6,o,2.1,0,4.2,4,z(5922659)),i.box(r-.07,t.wallH+8.8,o-.07,r+.07,t.wallH+10.6,o+.07,wn),i.box(r-.5,t.wallH+9.8,o-.07,r+.5,t.wallH+9.95,o+.07,wn),i.frame()}function Ev(i,t,e,n){i.frame(e,t.yAt(e,n),n,.4);const s=46;for(let r=0;r<6;r++){const o=r/6*s,a=1.5-r/6*1.1,l=1.5-(r+1)/6*1.1;i.cyl(0,o,0,a,l,s/6,3,r%2?wn:zs)}i.cyl(0,s,0,.08,.05,5,4,we),i.blob(0,s+5.1,0,.3,.3,.3,5,3,z(16726832),void 0,2.5);for(const[r,o]of[[.3,38],[2.4,35],[4.4,40]])i.cyl(Math.cos(r)*.9,o,Math.sin(r)*.9,.55,.55,.35,8,wn,wn);i.box(2.5,0,-1.5,5.5,2.6,1.5,z(13619919),z(9080716)),i.frame()}function Tv(i,t,e,n,s,r){const o=s.nearest(e,n,60),a=o?Math.atan2(o.px-e,o.pz-n):0;i.frame(e,t.yAt(e,n)+.1,n,a);const l=z(3116874);for(const[c,h]of[[-6,3.5],[6,3.5],[-6,9.5],[6,9.5]])qn(i,r,c,h,.2,0,5,wn);i.box(-8,5,2,8,5.25,11,wn,z(14277590),z(15921902),.5),i.box(-8.05,5.25,1.95,8.05,5.9,11.05,l,z(14277590));for(const c of[-4,0,4])i.box(c-1.3,0,6.2,c+1.3,.2,6.8,Os),i.box(c-.4,.2,6.25,c+.4,1.7,6.75,wn,l),r.polygons.push(Kn(i,c-.4,6.25,c+.4,6.75));i.frame()}function Av(i,t,e,n,s){for(let r=0;r<3;r++){const o=e+(s()-.5)*16,a=n+(s()-.5)*16;i.frame(o,t.yAt(o,a)+.05,a,s()*Math.PI),i.box(-1,.7,-.4,1,.78,.4,Ke,void 0,Ne),i.box(-1,.4,-.85,1,.46,-.6,Ke,void 0,Ne),i.box(-1,.4,.6,1,.46,.85,Ke,void 0,Ne),i.box(-.75,0,-.7,-.65,.7,.7,we,null),i.box(.65,0,-.7,.75,.7,.7,we,null)}i.frame()}function Rv(i){if(!i.hasDetail)return null;const{town:t,hf:e,roads:n,paths:s}=i,r=new re,o=Ie(4411),a=[12597547,3108687,15921902,3426654,9268810,14266938,10134443].map(z),l=z(7301730),c=z(3103290),h=[z(13115434),z(15254046)],u=t.houses,d=sd(t),f=[];for(let w=0;w<u.length;w+=Yl)u[w+5]!==1&&f.push(u[w]/4,u[w+1]/4);const p=f.length;for(const[w,M]of E_)f.push(w,M);for(let w=0;w<f.length;w+=2){const M=f[w],y=f[w+1];if(!i.isDetail(M,y)||i.isClear(M,y))continue;const T=n.nearest(M,y,45),E=o()<.5?-1:1,R=E*(2.5+o()*2.5),P=Math.floor(o()*a.length),F=o()<.7;if(!T||w<p&&d(M,y))continue;const L=T.cls<=3?6.4:3.6;if(T.dist<L+3)continue;const N=(M-T.px)/T.dist,I=(y-T.pz)/T.dist,W=-I,q=N,G=Math.atan2(N,I),Z=T.px+N*L+W*R,j=T.pz+I*L+q*R;if(!i.isClear(Z,j)&&(r.frame(Z,e.yAt(Z,j),j,G),r.box(-.05,0,-.05,.05,.95,.05,l),r.box(-.17,.95,-.22,.17,1.22,.22,a[P],Xt(a[P],.8)),F)){const U=T.px+N*(L-1.1)+W*(R+E*1.5),V=T.pz+I*(L-1.1)+q*(R+E*1.5);r.frame(U,e.yAt(U,V),V,G),h.forEach((O,J)=>{r.box(J*.72-.28,0,-.33,J*.72+.28,.96,.33,c),r.box(J*.72-.3,.96,-.36,J*.72+.3,1.04,.36,O)})}}const g=z(7034692),m=z(5917242),x=z(2829102),_=z(14276303),v=42,S=new re;for(const w of s){if(w.cls>3||w.flags)continue;const M=w.pts.length/3;let y=v*.4,T=null;for(let E=1;E<M;E++){const R=w.pts[E*3-3],P=w.pts[E*3-1],F=w.pts[E*3],L=w.pts[E*3+2],N=Math.hypot(F-R,L-P);if(y+=N,y<v)continue;y=0;const I=(F-R)/(N||1),W=(L-P)/(N||1),q=w.width/2+2.5,G=F+W*q,Z=L-I*q;if(!i.isDetail(G,Z)||i.isClear(G,Z)||!e.inside(G,Z,20)){T=null;continue}const j=e.yAt(G,Z);S.frame(G,j,Z,Math.atan2(I,W)),S.cyl(0,0,0,.15,.1,9.2,6,g),S.box(-1.15,8.45,-.06,1.15,8.58,.06,m);for(const V of[-.95,0,.95])S.box(V-.04,8.58,-.04,V+.04,8.72,.04,_);const U={x:G,y:j+8.72,z:Z,nx:W,nz:-I};if(T&&Math.hypot(U.x-T.x,U.z-T.z)<v*1.8){S.frame();for(const V of[-.95,0,.95]){const O=T.x+T.nx*V,J=T.z+T.nz*V,et=U.x+U.nx*V,st=U.z+U.nz*V,ct=(O+et)/2,St=(J+st)/2,Nt=(T.y+U.y)/2-.5;for(const[rt,ot,Ct,Bt,se,qt]of[[O,T.y,J,ct,Nt,St],[ct,Nt,St,et,U.y,st]])S.quad(rt,ot,Ct,Bt,se,qt,Bt,se+.035,qt,rt,ot+.035,Ct,x),S.quad(rt,ot,Ct,Bt,se,qt,Bt+U.nx*.035,se,qt+U.nz*.035,rt+U.nx*.035,ot,Ct+U.nz*.035,x)}}T=U}}if(!r.vertexCount&&!S.vertexCount)return null;const b=new te(r.build(),Ls());if(b.castShadow=!0,b.receiveShadow=!0,b.name="street-detail",S.vertexCount){const w=new te(S.build(),Ls());w.castShadow=!1,w.receiveShadow=!0,w.name="power-poles",b.add(w)}return b}function Cv(i){const{town:t,hf:e,paths:n}=i,s=120,r=new Map,o=t.houses;for(let R=0;R<o.length;R+=Yl){const P=Math.floor(o[R]/4/s)*4096+Math.floor(o[R+1]/4/s)+8390656;r.set(P,(r.get(P)??0)+1)}const[a,l]=bn(t.meta,-38.63385,145.7285),c=(R,P)=>(r.get(Math.floor(R/s)*4096+Math.floor(P/s)+2048*4097)??0)>=4||Math.hypot(R-a,P-l)<380,h=[];for(const R of n){if(R.cls>2||R.flags)continue;const P=R.cls===0?48:58,F=R.pts.length/3;let L=P*.5,N=1;for(let I=1;I<F;I++){const W=R.pts[I*3-3],q=R.pts[I*3-1],G=R.pts[I*3],Z=R.pts[I*3+2],j=Math.hypot(G-W,Z-q);if(L+=j,L<P)continue;L=0,N=-N;const U=(G-W)/(j||1),V=(Z-q)/(j||1),O=R.width/2+1.6,J=G-V*O*N,et=Z+U*O*N;!c(J,et)||!e.inside(J,et,20)||i.isClear(J,et)||h.push(J,e.yAt(J,et),et,Math.atan2(V*N,-U*N))}}const u=new re,d=z(9278358);u.cyl(0,0,0,.11,.07,8.2,5,d),u.box(-.05,8.1,0,.05,8.22,2.2,d),u.box(-.22,8,1.7,.22,8.14,2.5,z(5922659)),u.quad(-.2,7.99,2.48,.2,7.99,2.48,.2,7.99,1.72,-.2,7.99,1.72,z(16773320),3);const f=h.length/4,p=new De(u.build(),Ls(),f),g=document.createElement("canvas");g.width=g.height=64;const m=g.getContext("2d"),x=m.createRadialGradient(32,32,0,32,32,32);x.addColorStop(0,"rgba(255,214,150,0.85)"),x.addColorStop(.45,"rgba(255,196,120,0.32)"),x.addColorStop(1,"rgba(255,180,100,0)"),m.fillStyle=x,m.fillRect(0,0,64,64);const _=new bl(g);_.colorSpace=Oe;const v=new Nn(34,34);v.rotateX(-Math.PI/2);const S=new fn({map:_,transparent:!0,opacity:0,blending:na,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),b=new De(v,S,f);b.renderOrder=3;const w=new ie,M=new _n,y=new Y(0,1,0),T=new Y(1,1,1),E=new Y;for(let R=0;R<f;R++){const P=h[R*4],F=h[R*4+1],L=h[R*4+2],N=h[R*4+3];M.setFromAxisAngle(y,N),p.setMatrixAt(R,w.compose(E.set(P,F,L),M,T));const I=P+Math.sin(N)*2.1,W=L+Math.cos(N)*2.1;b.setMatrixAt(R,w.compose(E.set(I,e.yAt(I,W)+.5,W),M.identity(),T))}return p.castShadow=!1,p.computeBoundingSphere(),b.computeBoundingSphere(),b.onBeforeRender=()=>{S.opacity=Uo.value*.9},b.visible=!0,{lights:p,pools:b,poolMat:S}}function Lv(i){const{town:t,hf:e,footprints:n,roads:s}=i,r=new $e;r.name="landmarks";const o=new re,a=new re,l=Ie(20261111),c={polygons:[],circles:[]},h={group:r,nightMaterials:[],blockers:c};t.piers[0]&&(h.jetty=gv(o,e,t.piers[0]));for(const[T,E]of[[-38.63578,145.73393],[-38.63595,145.73085]]){const[R,P]=bn(t.meta,T,E);xv(o,e,R,P)}const u=n.find(T=>T.name==="Inverloch Surf Life Saving Club");u&&(h.surf=_v(o,e,u,c));const d=n.find(T=>T.name==="The Hub");d&&vv(o,e,d,c);for(const T of n)T.kind==="church"&&wv(o,T);let f=0;for(const T of t.pitches)T.s==="australian_football"?Mv(o,a,e,T.p,f++===0):T.s==="tennis"||T.s==="bowls"?Sv(o,a,e,T.p,T.s):T.s==="skateboard"&&bv(o,e,T.p);const[p,g]=bn(t.meta,-38.63529,145.72876);for(const T of t.playgrounds){const[E,R]=Yo(T);yv(o,e,T,Math.hypot(E-p,R-g)<60,l)}const[m,x]=bn(t.meta,-38.62462,145.71011);Ev(o,e,m,x);const[_,v]=bn(t.meta,-38.63161,145.72943);Tv(o,e,_,v,s,c);for(const[T,E]of[[-38.6358,145.72885],[-38.63447,145.72923],[-38.63545,145.72875]]){const[R,P]=bn(t.meta,T,E);Av(o,e,R,P,l)}const S=new te(o.build(),Ls());S.castShadow=!0,S.receiveShadow=!0,r.add(S);const b=a.build();b.deleteAttribute("glow");const w=new te(b,Ps(new fn({vertexColors:!0,side:Ae,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})));r.add(w);const M=Rv(i);M&&r.add(M);const y=Cv(i);return r.add(y.lights,y.pools),h.nightMaterials.push(y.poolMat),h}const Pv=jt.lights_fragment_begin.replace("getDirectionalLightInfo( directionalLight, directLight );",`getDirectionalLightInfo( directionalLight, directLight );
    // The atmosphere owns the scene's only directional light.
    directLight.color *= cloudSunlight(vCoastalWorld);`),Dv=`
  vec4 coastalPosition = vec4(transformed, 1.0);
  #ifdef USE_BATCHING
    coastalPosition = batchingMatrix * coastalPosition;
  #endif
  #ifdef USE_INSTANCING
    coastalPosition = instanceMatrix * coastalPosition;
  #endif
  vCoastalWorld = (modelMatrix * coastalPosition).xyz;
`,Iv=`
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
`;class Nv{constructor(t,e,n,s,r,o,a){H(this,"prepared",new WeakSet);H(this,"inlet",{value:new Y});H(this,"mist");this.color=n,this.clouds=r,this.sunDir=o,this.cloudShadowStrength=a,this.inlet.value.set(t,0,e),this.mist={value:Number(s)}}setMist(t){this.mist.value=Number(t)}setWaterLevel(t){this.inlet.value.y=t}add(t){t.traverse(e=>{const{material:n}=e;if(n)for(const s of Array.isArray(n)?n:[n])this.prepare(s)})}addWater(t){this.prepare(t.material,!0)}prepare(t,e=!1){if(!t.toneMapped||this.prepared.has(t)||t instanceof Ve&&!e)return;this.prepared.add(t);const n=t.onBeforeCompile,s=t.customProgramCacheKey();t.customProgramCacheKey=()=>s+(e?":coastal-water-cloud":":coastal-haze-cloud"),t.onBeforeCompile=(r,o)=>{n.call(t,r,o),r.uniforms.uCoastalColor=this.color,r.uniforms.uInletCenter=this.inlet,r.uniforms.uCoastalMist=this.mist;const a=e||t instanceof Un||t instanceof So||t instanceof h0||t instanceof u0;a&&Object.assign(r.uniforms,this.clouds.uniforms,{uCloudSunDir:this.sunDir,uCloudShadowStrength:this.cloudShadowStrength});const l=(a?Gu+t_:"")+Iv;e||(r.vertexShader=`varying vec3 vCoastalWorld;
`+r.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
`+Dv));const c=e?r.fragmentShader.replace("varying vec3 vW;","").replace("col += uSunColor *",`float sunlight = cloudSunlight(vW);
          col *= mix(1.0, sunlight, 0.22);
          col += uSunColor * sunlight *`):a?r.fragmentShader.replace("#include <lights_fragment_begin>",Pv):r.fragmentShader;r.fragmentShader=(e?l.replace(/vCoastalWorld/g,"vW"):l)+c.replace("#include <tonemapping_fragment>",`gl_FragColor.rgb = coastalLight(gl_FragColor.rgb);
#include <tonemapping_fragment>`)},t.needsUpdate=!0}}const xd=330;function es(i,t){let e=Math.imul(i^t,73244475);return e=Math.imul(e^e>>>16,73244475),((e^e>>>16)>>>0)/4294967296}function Gs(i,t){const e=Math.min(1,Math.max(0,i/t));return e*e*(3-2*e)}class Uv{constructor(){H(this,"window",0);H(this,"age",0);H(this,"duration",0);H(this,"rain",0);H(this,"wetness",0);H(this,"cover",.38);H(this,"storm",!1)}update(t){this.window=Math.floor(t/xd);const e=90+48*es(this.window,17);this.duration=60+22*es(this.window,29),this.age=t-this.window*xd-e;const n=this.age-this.duration,s=Gs(this.age+42,42)*(1-Gs(n,36));this.storm=this.window%4===0,this.cover=.38+(this.storm?.6:.4)*s;const r=this.storm?.97:.55+.15*es(this.window,41);this.rain=r*Gs(this.age,9)*(1-Gs(n+14,14)),this.wetness=Gs(this.age,23)*(1-Gs(n,68))}}const nc=[18,45],Zo=8;class Fv{constructor(t,e,n){H(this,"line");H(this,"vertices",new Float32Array((Zo+1)*2*3));H(this,"center",new Pt);H(this,"key");H(this,"previousTime");H(this,"arrival");this.inletX=e,this.inletZ=n;const s=new Ce;s.setAttribute("position",new Te(this.vertices,3).setUsage(Hi));const r=[];for(let o=0;o<Zo;o++){const a=2*o;r.push(a,a+1,a+2,a+1,a+3,a+2)}s.setIndex(r),this.line=new te(s,new fn({color:15002367,transparent:!0,depthWrite:!1,side:Ae})),this.line.material.forceSinglePass=!0,this.line.name="inlet lightning",this.line.visible=!1,t.add(this.line)}shape(t,e){const n=this.inletX+640*(es(t,3)-.5),s=this.inletZ+490*(es(t,13)-.5);this.center.set(n,s);const r=Math.atan2(e.x-n,e.z-s),o=Math.cos(r),a=-Math.sin(r);for(let l=0;l<=Zo;l++){const c=l/Zo,h=n+34*c+33*(es(t,60+l)-.5),u=s+18*(es(t,30+l)-.5),d=422-400*c;for(let f=0;f<2;f++){const p=(f?1:-1)*(1.9-c*1.1),g=3*(2*l+f);this.vertices[g]=h+p*o,this.vertices[g+1]=d,this.vertices[g+2]=u+p*a}}this.line.geometry.attributes.position.needsUpdate=!0,this.line.geometry.computeBoundingSphere()}update(t,e,n,s){const r=this.previousTime;this.previousTime=t,this.line.visible=!1;const o=r!==void 0&&t>=r&&t-r<1.5&&!document.hidden;if(o||(this.arrival=void 0),!e.storm||e.age<nc[0])return 0;const a=e.age>=nc[1]?1:0,l=e.age-nc[a],c=e.window*2+a;if(c!==this.key&&(this.key=c,this.shape(c,n),o&&l<.45)){const u=Math.hypot(this.center.x-n.x,110-n.y,this.center.y-n.z);u<6500&&(this.arrival=t-l+Math.max(.35,u/343))}if(this.arrival!==void 0&&t>=this.arrival){this.arrival=void 0;const u=Math.hypot(this.center.x-n.x,this.center.y-n.z);s==null||s(ae.clamp(1-u/7e3,.1,1))}const h=Math.max(0,1-l/.32);return this.line.visible=h>0,this.line.material.opacity=h,h}dispose(){this.line.removeFromParent(),this.line.geometry.dispose(),this.line.material.dispose()}}const _d="dmFyIEs9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBRPShrLGosRSk9PmogaW4gaz9LKGssaix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6RX0pOmtbal09RTt2YXIgdz0oayxqLEUpPT5RKGssdHlwZW9mIGohPSJzeW1ib2wiP2orIiI6aixFKTsoZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3Mgantjb25zdHJ1Y3RvcihuLHMsdCxhLG8saCxyLGMsbD1bXSl7dyh0aGlzLCJueCIpO3codGhpcywibnoiKTt3KHRoaXMsInkiKTt3KHRoaXMsInhNaW4iKTt3KHRoaXMsInpNaW4iKTt3KHRoaXMsInhNYXgiKTt3KHRoaXMsInpNYXgiKTt3KHRoaXMsImR4Iik7dyh0aGlzLCJkeiIpO3codGhpcywiY2VsbFgiKTt3KHRoaXMsImNlbGxaIik7aWYodGhpcy5yYXc9bix0aGlzLmV4cG9zdXJlPXMsdGhpcy53PXQsdGhpcy5oPWEsdGhpcy5zaXplWD1vLHRoaXMuc2l6ZVo9aCx0aGlzLnBhdGNoZXM9bCx0aGlzLmNlbGxYPW8vdCx0aGlzLmNlbGxaPWgvYSx0aGlzLm54PU1hdGguZmxvb3IoKHQtMSkvcikrMSx0aGlzLm56PU1hdGguZmxvb3IoKGEtMSkvcikrMSx0aGlzLmR4PXRoaXMuY2VsbFgqcix0aGlzLmR6PXRoaXMuY2VsbFoqcix0aGlzLnhNaW49LW8vMit0aGlzLmNlbGxYLzIsdGhpcy56TWluPS1oLzIrdGhpcy5jZWxsWi8yLHRoaXMueE1heD10aGlzLnhNaW4rKHRoaXMubngtMSkqdGhpcy5keCx0aGlzLnpNYXg9dGhpcy56TWluKyh0aGlzLm56LTEpKnRoaXMuZHosdGhpcy55PWM/P25ldyBGbG9hdDMyQXJyYXkodGhpcy5ueCp0aGlzLm56KSwhYylmb3IobGV0IGk9MDtpPHRoaXMubno7aSsrKWZvcihsZXQgeD0wO3g8dGhpcy5ueDt4KyspdGhpcy55W2kqdGhpcy5ueCt4XT1uW2kqcip0K3gqcl0qMS41fXlBdChuLHMpe2Zvcihjb25zdCB0IG9mIHRoaXMucGF0Y2hlcylpZihuPj10LnhNaW4mJm48PXQueE1heCYmcz49dC56TWluJiZzPD10LnpNYXgpcmV0dXJuIEUodCxuLHMpO3JldHVybiB0aGlzLmJhc2VZQXQobixzKX1iYXNlWUF0KG4scyl7cmV0dXJuIEUodGhpcyxuLHMpfXBhdGNoT3ZlcmxhcHMobixzLHQsYSl7cmV0dXJuIHRoaXMucGF0Y2hlcy5zb21lKG89Pm48by54TWF4JiZ0Pm8ueE1pbiYmczxvLnpNYXgmJmE+by56TWluKX1iaWxpbmVhcihuLHMsdCl7bGV0IGE9KHMrdGhpcy5zaXplWC8yKS90aGlzLmNlbGxYLS41LG89KHQrdGhpcy5zaXplWi8yKS90aGlzLmNlbGxaLS41O2E8MD9hPTA6YT50aGlzLnctMS4wMDAxJiYoYT10aGlzLnctMS4wMDAxKSxvPDA/bz0wOm8+dGhpcy5oLTEuMDAwMSYmKG89dGhpcy5oLTEuMDAwMSk7Y29uc3QgaD1hfDAscj1vfDAsYz1hLWgsbD1vLXIsaT1yKnRoaXMudytoO3JldHVybihuW2ldKigxLWMpK25baSsxXSpjKSooMS1sKSsobltpK3RoaXMud10qKDEtYykrbltpK3RoaXMudysxXSpjKSpsfW1ldHJlc0F0KG4scyl7cmV0dXJuIHRoaXMuYmlsaW5lYXIodGhpcy5yYXcsbixzKX1leHBvc3VyZUF0KG4scyl7cmV0dXJuIHRoaXMuYmlsaW5lYXIodGhpcy5leHBvc3VyZSxuLHMpfWluc2lkZShuLHMsdD0wKXtyZXR1cm4gbj50aGlzLnhNaW4rdCYmbjx0aGlzLnhNYXgtdCYmcz50aGlzLnpNaW4rdCYmczx0aGlzLnpNYXgtdH19ZnVuY3Rpb24gRShlLG4scyl7bGV0IHQ9KG4tZS54TWluKS9lLmR4LGE9KHMtZS56TWluKS9lLmR6O3Q8MD90PTA6dD5lLm54LTEmJih0PWUubngtMSksYTwwP2E9MDphPmUubnotMSYmKGE9ZS5uei0xKTtjb25zdCBvPU1hdGgubWluKHR8MCxlLm54LTIpLGg9TWF0aC5taW4oYXwwLGUubnotMikscj10LW8sYz1hLWgsbD1oKmUubngrbyxpPWUueVtsXSx4PWUueVtsKzFdLGQ9ZS55W2wrZS5ueF0sdT1lLnlbbCtlLm54KzFdO3JldHVybiByK2M8PTE/aSsoeC1pKSpyKyhkLWkpKmM6dSsoZC11KSooMS1yKSsoeC11KSooMS1jKX1jb25zdCBXPVt7ZW5kczpbNDAwMTMsMjc0MzksMjc2MDIsMjA0ODldLHRpZToyNCxhbmNob3JzOltbMTI4MCwxMS44XSxbMTMwMCwxMC44XSxbMTMyMCw5Ljk4XSxbMTMzMCw5LjgxXSxbMTM0MCw5LjY3XSxbMTM1MCw5LjkzXSxbMTM2NSwxMC4xN10sWzEzODAsMTAuNTVdLFsxNDAwLDEwLjc3XV19LHtlbmRzOlstNDc0MywtNDAzLC0yNzcyLC0xMjJdLHRpZToxMixhbmNob3JzOltbNTksMjQuNjJdLFs3NCwyMi42M10sWzg5LDE5LjY5XSxbMTAwLDE3LjddLFsxMTAsMTUuOTVdLFsxMjAsMTQuMTldLFsxMzIsMTIuMDddLFsxNDQsMTAuMjNdXX0se2VuZHM6Wy0zMDIxNCwxMTk2OCwtNDAwMTMsMjEwOTVdLHRpZToyNSxhbmNob3JzOltbMTA4MCw1LjE0XSxbMTEwMCw1LjJdLFsxMTIwLDUuNTddLFsxMTM1LDYuNjVdLFsxMTUwLDguNjFdLFsxMTU1LDkuMjRdLFsxMTY1LDEwLjM1XSxbMTE3NSwxMS42NV0sWzExOTIsMTVdLFsxMjEwLDE4LjRdLFsxMjM1LDIwLjY4XSxbMTI1NSwyMS42M11dfSx7ZW5kczpbLTE3ODU1LDYyMTUsLTE2NzA3LC0yMzczXSx0aWU6OCxhbmNob3JzOltbMTgwLDEzLjY1XSxbMTkyLDE2XSxbMjA0LDE4LjZdLFsyMjAsMjEuMDJdLFsyNDQsMjMuNTNdXX0se2VuZHM6Wy0yODAzMiw2NzI3LC0yNDI3OCw4MTE3XSx0aWU6NyxhbmNob3JzOltbOCwxMS43Ml0sWzE0LDExLjUxXSxbMjMsMTAuMjhdLFszMyw4LjQyXSxbNDMsNi42OV0sWzUyLDUuNTNdXX0se2VuZHM6Wy0zMDEwMywxMTY0NSwtMzUwMjcsMTEyNDRdLHRpZToxMyxhbmNob3JzOltbNDI4LDUuODddLFs0NDIsNy4wOF0sWzQ1NywxMC4yNl0sWzQ3NSwxNC4xOF0sWzQ5NSwxNy42NF0sWzUxMCwxOS4wNV0sWzUyOSwyMC4zOF1dfV0sQj0uMDE1LFk9MS41O2Z1bmN0aW9uIEMoZSl7Y29uc3Qgbj1NYXRoLm1heCgwLE1hdGgubWluKDEsZSkpO3JldHVybiBuKm4qKDMtMipuKX1mdW5jdGlvbiBIKGUpe2NvbnN0IG49ZVs1XTtyZXR1cm4gVy5maW5kKCh7ZW5kczpzfSk9PnNbMF09PT1uWzBdJiZzWzFdPT09blsxXSYmc1syXT09PW5bbi5sZW5ndGgtMl0mJnNbM109PT1uW24ubGVuZ3RoLTFdKX1jbGFzcyBQe2NvbnN0cnVjdG9yKG4scyl7dyh0aGlzLCJzdGFydCIpO3codGhpcywiZW5kIik7dyh0aGlzLCJvdXRlciIpO3codGhpcywicG9pbnRzIixbXSk7dyh0aGlzLCJzbG9wZXMiKTt3KHRoaXMsImhhbGZXaWR0aCIpO3RoaXMucHJvZmlsZT1zLHRoaXMuaGFsZldpZHRoPW5bM10vMjAsdGhpcy5vdXRlcj10aGlzLmhhbGZXaWR0aCtZKyhuWzBdPDM/MjA6MTIpO2NvbnN0e2FuY2hvcnM6dCx0aWU6YX09czt0aGlzLnN0YXJ0PXRbMF1bMF0tYSx0aGlzLmVuZD10W3QubGVuZ3RoLTFdWzBdK2E7Y29uc3Qgbz10LnNsaWNlKDEpLm1hcCgoW2MsbF0saSk9PihsLXRbaV1bMV0pLyhjLXRbaV1bMF0pKTt0aGlzLnNsb3Blcz1bb1swXV07Zm9yKGxldCBjPTE7YzxvLmxlbmd0aDtjKyspe2NvbnN0IGw9b1tjLTFdLGk9b1tjXTt0aGlzLnNsb3Blcy5wdXNoKGwqaT4wPzIqbCppLyhsK2kpOjApfXRoaXMuc2xvcGVzLnB1c2gob1tvLmxlbmd0aC0xXSk7Y29uc3QgaD1uWzVdO2xldCByPTA7Zm9yKGxldCBjPTI7YzxoLmxlbmd0aDtjKz0yKXtjb25zdCBsPWhbYy0yXS8xMCxpPWhbYy0xXS8xMCx4PWhbY10vMTAtbCxkPWhbYysxXS8xMC1pLHU9TWF0aC5oeXBvdCh4LGQpO2lmKHUmJnIrdT49dGhpcy5zdGFydCYmcjw9dGhpcy5lbmQpe2NvbnN0IE09TWF0aC5tYXgodGhpcy5zdGFydCxyKSxmPU1hdGgubWluKHRoaXMuZW5kLHIrdSk7Zm9yKGNvbnN0IHAgb2YgdGhpcy5wb2ludHMubGVuZ3RoP1tmXTpbTSxmXSl0aGlzLnBvaW50cy5wdXNoKHt4OmwreCoocC1yKS91LHo6aStkKihwLXIpL3UsczpwfSl9cis9dX19d2VpZ2h0KG4pe3JldHVybiBDKE1hdGgubWluKG4tdGhpcy5zdGFydCx0aGlzLmVuZC1uKS90aGlzLnByb2ZpbGUudGllKX1kZWNrTGlmdChuLHMpe3JldHVybiBzKyguMTEtcykqdGhpcy53ZWlnaHQobil9ZWxldmF0aW9uKG4scyl7Y29uc3R7YW5jaG9yczp0fT10aGlzLnByb2ZpbGU7bGV0IGE9MDtmb3IoO2ErMjx0Lmxlbmd0aCYmbj50W2ErMV1bMF07KWErKztjb25zdFtvLGhdPXRbYV0sW3IsY109dFthKzFdLGw9ci1vLGk9KG4tbykvbDtyZXR1cm4oaTwwP2grKG4tbykqdGhpcy5zbG9wZXNbYV06aT4xP2MrKG4tcikqdGhpcy5zbG9wZXNbYSsxXTpoKyhjLWgpKkMoaSkrbCppKigxLWkpKigoMS1pKSp0aGlzLnNsb3Blc1thXS1pKnRoaXMuc2xvcGVzW2ErMV0pKS1NYXRoLmFicyhzKSpCfWdyb3VuZChuLHMsdCxhLG89MCl7Y29uc3QgaD1uLmJhc2VZQXQocyx0KSxyPXRoaXMud2VpZ2h0KGEpO3JldHVybiBoKyh0aGlzLmVsZXZhdGlvbihhLG8pLWgpKnJ9c2hvdWxkZXIobixzLHQpe2xldCBhPXRoaXMub3V0ZXIqKjIsbz0wO2ZvcihsZXQgbD0xO2w8dGhpcy5wb2ludHMubGVuZ3RoO2wrKyl7Y29uc3QgaT10aGlzLnBvaW50c1tsLTFdLHg9dGhpcy5wb2ludHNbbF0sZD14LngtaS54LHU9eC56LWkueixNPU1hdGgubWF4KDAsTWF0aC5taW4oMSwoKG4taS54KSpkKyhzLWkueikqdSkvKGQqZCt1KnV8fDEpKSksZj0obi1pLngtTSpkKSoqMisocy1pLnotTSp1KSoqMjtmPGEmJihhPWYsbz1pLnMrKHgucy1pLnMpKk0pfWNvbnN0IGg9dGhpcy53ZWlnaHQobyk7aWYoIWgpcmV0dXJuIHQ7Y29uc3Qgcj1NYXRoLnNxcnQoYSksYz1DKCh0aGlzLm91dGVyLXIpLyh0aGlzLm91dGVyLXRoaXMuaGFsZldpZHRoLVkpKTtyZXR1cm4gdCsodGhpcy5lbGV2YXRpb24obyxyKS10KSpoKmN9fWZ1bmN0aW9uIHEoZSl7Y29uc3Qgbj1IKGUpO3JldHVybiBuJiZuZXcgUChlLG4pfWZ1bmN0aW9uIFYoZSxuKXtjb25zdCBzPVtdO2Zvcihjb25zdCBhIG9mIG4pe2NvbnN0IG89cShhKTtpZighb3x8by5wb2ludHMubGVuZ3RoPDIpY29udGludWU7Y29uc3QgaD1vLnBvaW50cy5tYXAoaT0+aS54KSxyPW8ucG9pbnRzLm1hcChpPT5pLnopLGM9by5vdXRlcixsPXtpMDpNYXRoLm1heCgwLE1hdGguZmxvb3IoKE1hdGgubWluKC4uLmgpLWMtZS54TWluKS9lLmR4KSksaTE6TWF0aC5taW4oZS5ueC0xLE1hdGguY2VpbCgoTWF0aC5tYXgoLi4uaCkrYy1lLnhNaW4pL2UuZHgpKSxqMDpNYXRoLm1heCgwLE1hdGguZmxvb3IoKE1hdGgubWluKC4uLnIpLWMtZS56TWluKS9lLmR6KSksajE6TWF0aC5taW4oZS5uei0xLE1hdGguY2VpbCgoTWF0aC5tYXgoLi4ucikrYy1lLnpNaW4pL2UuZHopKSxncmFkZXM6W29dfTtmb3IobGV0IGk9MDtpPHMubGVuZ3RoOyl7Y29uc3QgeD1zW2ldO2lmKGwuaTA+PXguaTF8fHguaTA+PWwuaTF8fGwuajA+PXguajF8fHguajA+PWwuajEpe2krKztjb250aW51ZX1sLmkwPU1hdGgubWluKGwuaTAseC5pMCksbC5pMT1NYXRoLm1heChsLmkxLHguaTEpLGwuajA9TWF0aC5taW4obC5qMCx4LmowKSxsLmoxPU1hdGgubWF4KGwuajEseC5qMSksbC5ncmFkZXMucHVzaCguLi54LmdyYWRlcykscy5zcGxpY2UoaSwxKSxpPTB9cy5wdXNoKGwpfWNvbnN0IHQ9TWF0aC5jZWlsKE1hdGgubWF4KGUuZHgsZS5keikvMyk7cmV0dXJuIHMubWFwKCh7aTA6YSxpMTpvLGowOmgsajE6cixncmFkZXM6Y30pPT57Y29uc3QgbD1lLnhNaW4rYSplLmR4LGk9ZS56TWluK2gqZS5keix4PWUueE1pbitvKmUuZHgsZD1lLnpNaW4rciplLmR6LHU9KG8tYSkqdCsxLE09KHItaCkqdCsxLGY9ZS5keC90LHA9ZS5kei90LHk9bmV3IEZsb2F0MzJBcnJheSh1Kk0pO2ZvcihsZXQgej0wO3o8TTt6KyspZm9yKGxldCBtPTA7bTx1O20rKyl7Y29uc3QgYj1sK20qZixBPWkreipwLGc9ZS5iYXNlWUF0KGIsQSk7bGV0IHY9ZztpZihtPjAmJm08dS0xJiZ6PjAmJno8TS0xKWZvcihjb25zdCBVIG9mIGMpdis9VS5zaG91bGRlcihiLEEsZyktZzt5W3oqdSttXT12fXJldHVybntpMDphLGkxOm8sajA6aCxqMTpyLHhNaW46bCx6TWluOmkseE1heDp4LHpNYXg6ZCxueDp1LG56Ok0sZHg6ZixkejpwLHl9fSl9Y29uc3QgVD0xMjg7ZnVuY3Rpb24gRyhlLG4scyx0LGEpe2NvbnN0e254Om8sbno6aH09ZSxyPU1hdGgubWluKFQrMSxvLW4pLGM9TWF0aC5taW4oVCsxLGgtcyksbD1uZXcgRmxvYXQzMkFycmF5KHIqYyozKSxpPW5ldyBGbG9hdDMyQXJyYXkocipjKjMpLHg9bmV3IEZsb2F0MzJBcnJheShyKmMqMik7Zm9yKGxldCBNPXM7TTxzK2M7TSsrKWZvcihsZXQgZj1uO2Y8bityO2YrKyl7Y29uc3QgcD0oTS1zKSpyK2Ytbix5PWUueE1pbitmKmUuZHgsej1lLnpNaW4rTSplLmR6O2xbcCozXT15LGxbcCozKzFdPWUueVtNKm8rZl0sbFtwKjMrMl09eix4W3AqMl09KHkrdC5zaXplWC8yKS90LnNpemVYLHhbcCoyKzFdPTEtKHordC5zaXplWi8yKS90LnNpemVaO2NvbnN0IG09ZSE9PXQmJihmPT09MHx8TT09PTB8fGY9PT1vLTF8fE09PT1oLTEpLGI9bT8odC5iYXNlWUF0KHkrdC5keCx6KS10LmJhc2VZQXQoeS10LmR4LHopKS8oMip0LmR4KTooZS55W00qbytNYXRoLm1pbihmKzEsby0xKV0tZS55W00qbytNYXRoLm1heChmLTEsMCldKS8oMiplLmR4KSxBPW0/KHQuYmFzZVlBdCh5LHordC5keiktdC5iYXNlWUF0KHksei10LmR6KSkvKDIqdC5keik6KGUueVtNYXRoLm1pbihNKzEsaC0xKSpvK2ZdLWUueVtNYXRoLm1heChNLTEsMCkqbytmXSkvKDIqZS5keiksZz1NYXRoLmh5cG90KGIsMSxBKTtpW3AqM109LWIvZyxpW3AqMysxXT0xL2csaVtwKjMrMl09LUEvZ31jb25zdCBkPW5ldyBVaW50MTZBcnJheSgoci0xKSooYy0xKSo2KTtsZXQgdT0wO2ZvcihsZXQgTT0wO008Yy0xO00rKylmb3IobGV0IGY9MDtmPHItMTtmKyspe2lmKGEuc29tZShiPT5uK2Y+PWIuaTAmJm4rZjxiLmkxJiZzK00+PWIuajAmJnMrTTxiLmoxKSljb250aW51ZTtjb25zdCBwPU0qcitmLHk9cCsxLHo9cCtyLG09eisxO2RbdSsrXT1wLGRbdSsrXT16LGRbdSsrXT15LGRbdSsrXT15LGRbdSsrXT16LGRbdSsrXT1tfXJldHVybntwb3M6bCxub3I6aSx1djp4LGlkeDp1PT09ZC5sZW5ndGg/ZDpkLnNsaWNlKDAsdSl9fWZ1bmN0aW9uIE4oZSl7Y29uc3Qgbj1bXTtmb3IoY29uc3QgcyBvZltlLC4uLmUucGF0Y2hlc10pZm9yKGxldCB0PTA7dDxzLm56LTE7dCs9VClmb3IobGV0IGE9MDthPHMubngtMTthKz1UKXtjb25zdCBvPXM9PT1lP2UucGF0Y2hlcy5maWx0ZXIoaD0+YTxoLmkxJiZhK1Q+aC5pMCYmdDxoLmoxJiZ0K1Q+aC5qMCk6W107bi5wdXNoKEcocyxhLHQsZSxvKSl9cmV0dXJuIG59ZnVuY3Rpb24gUyhlKXtjb25zdCBuPWF0b2IoZSkscz1uZXcgVWludDhBcnJheShuLmxlbmd0aCk7Zm9yKGxldCB0PTA7dDxuLmxlbmd0aDt0Kyspc1t0XT1uLmNoYXJDb2RlQXQodCk7cmV0dXJuIG5ldyBJbnQxNkFycmF5KHMuYnVmZmVyLDAscy5sZW5ndGg+PjEpfWFzeW5jIGZ1bmN0aW9uIF8oZSl7Y29uc3Qgbj1uZXcgVWludDhBcnJheShlKSxzPW5ldyBEYXRhVmlldyhlKTtsZXQgdD04LGE9MCxvPTAsaD0wLHI9MCxjPTA7Y29uc3QgbD1bXTtmb3IoO3Q8bi5sZW5ndGg7KXtjb25zdCBmPXMuZ2V0VWludDMyKHQpLHA9U3RyaW5nLmZyb21DaGFyQ29kZShuW3QrNF0sblt0KzVdLG5bdCs2XSxuW3QrN10pO2lmKHA9PT0iSUhEUiIpYT1zLmdldFVpbnQzMih0KzgpLG89cy5nZXRVaW50MzIodCsxMiksaD1uW3QrMTZdLHI9blt0KzE3XSxjPW5bdCsyMF07ZWxzZSBpZihwPT09IklEQVQiKWwucHVzaChuLnN1YmFycmF5KHQrOCx0KzgrZikpO2Vsc2UgaWYocD09PSJJRU5EIilicmVhazt0Kz0xMitmfWlmKGghPT04fHxyIT09MiYmciE9PTZ8fGMpdGhyb3cgbmV3IEVycm9yKCJVbnN1cHBvcnRlZCB0ZXJyYWluIGltYWdlIGZvcm1hdCIpO2NvbnN0IGk9cj09PTI/Mzo0LHg9bmV3IEJsb2IobCkuc3RyZWFtKCkucGlwZVRocm91Z2gobmV3IERlY29tcHJlc3Npb25TdHJlYW0oImRlZmxhdGUiKSksZD1uZXcgVWludDhBcnJheShhd2FpdCBuZXcgUmVzcG9uc2UoeCkuYXJyYXlCdWZmZXIoKSksdT1hKmksTT1uZXcgVWludDhBcnJheSh1Km8pO2ZvcihsZXQgZj0wO2Y8bztmKyspe2NvbnN0IHA9ZFtmKih1KzEpXSx5PWYqKHUrMSkrMSx6PWYqdTtmb3IobGV0IG09MDttPHU7bSsrKXtjb25zdCBiPW0+PWk/TVt6K20taV06MCxBPWY+MD9NW3otdSttXTowLGc9bT49aSYmZj4wP01bei11K20taV06MDtsZXQgdj1kW3krbV07aWYocD09PTEpdis9YjtlbHNlIGlmKHA9PT0yKXYrPUE7ZWxzZSBpZihwPT09Myl2Kz1iK0E+PjE7ZWxzZSBpZihwPT09NCl7Y29uc3QgVT1NYXRoLmFicyhBLWcpLEw9TWF0aC5hYnMoYi1nKSxPPU1hdGguYWJzKGIrQS0yKmcpO3YrPVU8PUwmJlU8PU8/YjpMPD1PP0E6Z31NW3orbV09diYyNTV9fXJldHVybnt3aWR0aDphLGhlaWdodDpvLGNoYW5uZWxzOmksZGF0YTpNfX1hc3luYyBmdW5jdGlvbiBKKGUsbixzKXtjb25zdFt0LGFdPWF3YWl0IFByb21pc2UuYWxsKFtmZXRjaChlLnRvd24se3NpZ25hbDpzfSkudGhlbihpPT57aWYoIWkub2spdGhyb3cgbmV3IEVycm9yKCJDb3VsZCBub3QgbG9hZCB0aGUgdG93biBkYXRhIik7cmV0dXJuIGkuanNvbigpfSkudGhlbihpPT4obigiU3RyZWV0cyBhbmQgYnVpbGRpbmdzIiksaSkpLGZldGNoKGUuaGVpZ2h0LHtzaWduYWw6c30pLnRoZW4oaT0+e2lmKCFpLm9rKXRocm93IG5ldyBFcnJvcigiQ291bGQgbm90IGxvYWQgdGhlIHRlcnJhaW4iKTtyZXR1cm4gaS5hcnJheUJ1ZmZlcigpfSkudGhlbihfKS50aGVuKGk9PihuKCJUZXJyYWluIiksaSkpXSk7aWYocy5hYm9ydGVkKXRocm93IHMucmVhc29uO2NvbnN0e21ldGE6b309dCxoPWEud2lkdGgqYS5oZWlnaHQscj1uZXcgRmxvYXQzMkFycmF5KGgpLGM9bmV3IEZsb2F0MzJBcnJheShoKSxsPWEuY2hhbm5lbHM7Zm9yKGxldCBpPTA7aTxoO2krKylyW2ldPShhLmRhdGFbaSpsXTw8OHxhLmRhdGFbaSpsKzFdKS9vLmhlaWdodFNjYWxlLW8uaGVpZ2h0T2Zmc2V0LGNbaV09YS5kYXRhW2kqbCsyXS8yNTU7cmV0dXJue3Rvd246ey4uLnQsaG91c2VzOlModC5ob3VzZXMpLGNhYmluczpTKHQuY2FiaW5zKSxjYXJzOlModC5jYXJzKSx0cmVlczpTKHQudHJlZXMpfSxoZWlnaHRzOnIsZXhwb3N1cmU6YywuLi5EKHtoZWlnaHRzOnIsZXhwb3N1cmU6YyxtZXRhOm8scm9hZHM6dC5yb2Fkcyx0ZXJyYWluU3RlcDplLnRlcnJhaW5TdGVwfSl9fWZ1bmN0aW9uIEQoe2hlaWdodHM6ZSxleHBvc3VyZTpuLG1ldGE6cyxyb2Fkczp0LHRlcnJhaW5TdGVwOmF9KXtjb25zdCBvPW5ldyBqKGUsbixzLmdyaWRbMF0scy5ncmlkWzFdLHMuc2l6ZVswXSxzLnNpemVbMV0sYSksaD1WKG8sdCk7cmV0dXJuIG8ucGF0Y2hlcy5wdXNoKC4uLmgpLHtzdXJmYWNlOm8ueSx0ZXJyYWluUGF0Y2hlczpoLHRlcnJhaW5UaWxlczpOKG8pfX1jb25zdCBJPXNlbGYsWD1uZXcgTWFwO2Z1bmN0aW9uIEYoZSxuPVtdKXtJLnBvc3RNZXNzYWdlKGUsbil9ZnVuY3Rpb24gUihlKXtyZXR1cm4gZS5tYXAobj0+bi5idWZmZXIpfWZ1bmN0aW9uIFooe3N1cmZhY2U6ZSx0ZXJyYWluUGF0Y2hlczpuLHRlcnJhaW5UaWxlczpzfSl7cmV0dXJuIFIoW2UsLi4ubi5tYXAoKHt5OnR9KT0+dCksLi4ucy5mbGF0TWFwKCh7cG9zOnQsbm9yOmEsdXY6byxpZHg6aH0pPT5bdCxhLG8saF0pXSl9SS5vbm1lc3NhZ2U9YXN5bmMgZT0+e3ZhciBvO2NvbnN0IG49ZS5kYXRhLHtpZDpzfT1uO2lmKCJjYW5jZWwiaW4gbil7KG89WC5nZXQocykpPT1udWxsfHxvLmFib3J0KCk7cmV0dXJufWNvbnN0IHQ9bmV3IEFib3J0Q29udHJvbGxlcix7c2lnbmFsOmF9PXQ7WC5zZXQocyx0KTt0cnl7Y29uc3R7am9iOmh9PW47aWYoaC5raW5kPT09IndvcmxkIil7Y29uc3Qgcj1hd2FpdCBKKGguc291cmNlLHg9PkYoe2lkOnMscHJvZ3Jlc3M6eH0pLGEpLHt0b3duOmMsaGVpZ2h0czpsLGV4cG9zdXJlOml9PXI7Rih7aWQ6cyx2YWx1ZTpyfSxbLi4uUihbbCxpLGMuaG91c2VzLGMuY2FiaW5zLGMuY2FycyxjLnRyZWVzXSksLi4uWihyKV0pfWVsc2UgaWYoaC5raW5kPT09InRlcnJhaW4iKXtjb25zdCByPUQoaC5zb3VyY2UpO0Yoe2lkOnMsdmFsdWU6cn0sWihyKSl9ZWxzZXtjb25zdCByPWF3YWl0IGZldGNoKGgudXJsLHtzaWduYWw6YX0pO2lmKCFyLm9rKXRocm93IG5ldyBFcnJvcigiQ291bGQgbm90IGxvYWQgZ3JvdW5kIGRldGFpbCIpO2NvbnN0IGM9YXdhaXQgY3JlYXRlSW1hZ2VCaXRtYXAoYXdhaXQgci5ibG9iKCkse2ltYWdlT3JpZW50YXRpb246ImZsaXBZIixwcmVtdWx0aXBseUFscGhhOiJub25lIn0pO2lmKGEuYWJvcnRlZCljLmNsb3NlKCk7ZWxzZSB0cnl7Rih7aWQ6cyx2YWx1ZTpjfSxbY10pfWNhdGNoKGwpe3Rocm93IGMuY2xvc2UoKSxsfX19Y2F0Y2goaCl7YS5hYm9ydGVkfHxGKHtpZDpzLGVycm9yOmggaW5zdGFuY2VvZiBFcnJvcj9oLm1lc3NhZ2U6U3RyaW5nKGgpfSl9ZmluYWxseXtYLmRlbGV0ZShzKX19fSkoKTsK",Ov=i=>Uint8Array.from(atob(i),t=>t.charCodeAt(0)),vd=typeof self<"u"&&self.Blob&&new Blob([Ov(_d)],{type:"text/javascript;charset=utf-8"});function zv(i){let t;try{if(t=vd&&(self.URL||self.webkitURL).createObjectURL(vd),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;base64,"+_d,{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}class Bv{constructor(){H(this,"worker");H(this,"pending",new Map);H(this,"nextId",0);try{const t=new zv;this.worker=t,t.onmessage=e=>{const n=e.data,s=this.pending.get(n.id);s?s.receive(n):"value"in n&&"close"in n.value&&n.value.close()},t.onerror=e=>{e.preventDefault(),this.close(new Error("Could not start the model worker"))},t.onmessageerror=()=>this.close(new Error("Could not receive data from the model worker"))}catch{}}async run(t,e,n,s){if(n.aborted)throw n.reason;if(this.worker)try{return await this.request(this.worker,t,n,s)}catch{if(n.aborted)throw n.reason}return e()}close(t=new DOMException("Model closed","AbortError")){var e;(e=this.worker)==null||e.terminate(),this.worker=void 0;for(const n of this.pending.values())n.reject(t)}request(t,e,n,s){return new Promise((r,o)=>{const a=++this.nextId,l=()=>{this.pending.delete(a),n.removeEventListener("abort",c)},c=()=>{l(),t.postMessage({id:a,cancel:!0}),o(n.reason)},h=u=>{l(),o(u)};this.pending.set(a,{receive:u=>{if("progress"in u){s==null||s(u.progress);return}l(),"error"in u?o(new Error(u.error)):r(u.value)},reject:h}),n.addEventListener("abort",c,{once:!0});try{t.postMessage({id:a,job:e})}catch(u){h(u)}})}}class Md{constructor(t,e){H(this,"bounds",new Ai);H(this,"level",-1);this.levels=t;for(const s of t)for(const r of s)r.computeBoundingBox(),this.bounds.union(r.boundingBox),r.castShadow=!0,e.add(r);const n=this.bounds.getBoundingSphere(new Xi);for(const s of t.flat())s.boundingSphere=n,s.visible=!1}update(t,e,n){const s=this.bounds.distanceToPoint(t),[r,o,a]=n,l=a+e*8,c=u=>this.level<0?1:this.level<=u?1.1:.9,h=s<=r*c(0)?0:s<=o*c(1)?1:s<=l*c(2)?2:3;if(h!==this.level){for(const u of this.levels[this.level]??[])u.visible=!1;for(const u of this.levels[h]??[])u.visible=!0;this.level=h}}}const Sd=.25,ks=[16053490,16053490,16053490,13225168,10725291,5593438,2040100,2838410,11020586,2054728,14266938,8368595],yd=[15223869,3113154,15909424,3843690,16777215,9329589,15764004,2042422,15231654,4899008],pi=[14826299,15764004,15909424,3715691,3117008,13651872,3720896,16053490].map(z);function bd(){return rc(0,!1)}function ic(i){const t=new re,e=new re,n=new re;return oc(i,t,e,z(16777215),n),{body:t.build(),trim:e.build(),panes:n.build()}}function Gv(){return Ps(new fn({vertexColors:!0,transparent:!0,opacity:.34,depthTest:!0,depthWrite:!1,side:Ae,forceSinglePass:!0}))}function sc(i){const t=i===1,e=i===2,n=e?-2.3:-2.18,s=e?2.22:2.18,r=e?1.035:t?.99:.93;return{wagon:t,ute:e,tail:n,nose:s,sill:r,belt:a=>{const l=Math.max(0,(n+.58-a)/.58,(a-s+.55)/.55),c=a<0?t||e?.045:.095:.14,h=r-l*c;return{width:.88-.13*l,shoulder:h-.105,top:h}}}}function rc(i,t){const e=new re,{wagon:n,ute:s,tail:r,nose:o,sill:a}=sc(i),l=z(16777215),c=z(6584713),h=z(2236966),u=s?1.63:n?1.6:1.49,d=s?-.37:n?-1.72:-.74,f=s?.64:.42,p=(g,m,x,_,v,S,b,w)=>{e.quad(-g,m,_,g,m,_,.65,v,b,-.65,v,b,w),e.quad(g,m,x,-g,m,x,-.65,v,S,.65,v,S,w),e.quad(g,m,_,g,m,x,.65,v,S,.65,v,b,w),e.quad(-g,m,x,-g,m,_,-.65,v,b,-.65,v,S,w),e.quad(-.65,v,b,.65,v,b,.65,v,S,-.65,v,S,l)};if(t)p(.88,.3,r,o,u,d,f,l);else{e.box(-.88,.3,r,.88,a,o,l),p(.77,a,s?-.52:n?-1.95:-1.47,1.02,u,d,f,c);for(const g of[-1.35,1.38])e.quad(.9,.02,g+.32,.9,.02,g-.32,.9,.57,g-.32,.9,.57,g+.32,h),e.quad(-.9,.02,g-.32,-.9,.02,g+.32,-.9,.57,g+.32,-.9,.57,g-.32,h)}return e.build()}function wd(i,t,e,n,s,r,o){const a=t>0?r-.025:r-.1,l=t<0&&(i===1||i===2);return[[e*.42,a,n],[e*(s-.022),a-(l?.13:0),n],[e*(s-.064),o-.025,n],[e*(t>0?.31:.43),o-.052,n]]}const Ed=12;function Td(i){const t=new re,e=sc(i);for(const s of[1,-1])for(const r of[1,-1]){const o=i<0?r*2.1:r>0?e.nose:e.tail,a=o+r*.02;let l;if(i<0){const c=r>0?.755:.59,h=.865;l=[[s*c,.62,a],[s*h,.62,a],[s*h,.77,a],[s*c,.77,a]]}else{const{width:c,shoulder:h,top:u}=e.belt(o),[d,f,p,g]=wd(i,r,s,a,c,h,u),m=(x,_,v)=>[x[0]+(_[0]-x[0])*v,x[1]+(_[1]-x[1])*v,a];l=[m(d,f,.59),m(d,f,.99),m(g,p,.99),m(g,p,.59)]}s!==r&&l.reverse(),t.quad(...l[0],...l[1],...l[2],...l[3],z(16777215))}const n=new te(t.build(),new fn({color:16752666,toneMapped:!1}));return n.visible=!1,n}function Ad(i,t){i.visible=t===-1||t===1,i.visible&&(i.name=t<0?"left-turn-indicator":"right-turn-indicator",i.geometry.setDrawRange(t<0?0:Ed,Ed))}function oc(i,t,e,n,s){const r=z(4413799),o=z(3425876),a=z(2635588),l=z(8624550),c=z(6651533),h=s??e,u=z(2105636),d=z(2566960),f=z(11252924),p=z(5793135),g=(U,V,O,J,et,st,ct=!1,St=0)=>{ct?U.quad(...et,...J,...O,...V,st,St):U.quad(...V,...O,...J,...et,st,St)},{wagon:m,ute:x,tail:_,nose:v,sill:S,belt:b}=sc(i),w=x||m?1.55:1.42,M=x?1.63:m?1.6:1.49,y=x?-.52:m?-1.95:-1.47,T=x?-.37:m?-1.72:-.74,E=1.02,R=x?.64:.42,P=-1.35,F=1.38,L=.34,N=.387,I=[_,_+.58,v-.55,v];for(const U of[P,F])for(let V=0;V<=5;V++)I.push(U-N*Math.cos(Math.PI*V/5));I.sort((U,V)=>U-V);const W=U=>{const V=Math.min(Math.abs(U-P),Math.abs(U-F));return V<N+1e-5?L+Math.sqrt(Math.max(0,N*N-V*V)):.3};for(const U of[-1,1])for(let V=1;V<I.length;V++){const O=I[V-1],J=I[V],et=b(O),st=b(J);g(t,[U*et.width,W(O),O],[U*et.width,et.shoulder,O],[U*st.width,st.shoulder,J],[U*st.width,W(J),J],n,U<0)}const q=[_,_+.15,_+.58,y,E,v-.55,v].sort((U,V)=>U-V);for(let U=1;U<q.length;U++){const V=q[U-1],O=q[U],J=b(V),et=b(O);for(const Nt of[-1,1])g(t,[Nt*J.width,J.shoulder,V],[Nt*(J.width-.08),J.top,V],[Nt*(et.width-.08),et.top,O],[Nt*et.width,et.shoulder,O],n,Nt<0);if(V>=y&&O<=E)continue;const st=x&&V>=_+.15&&O<=y,ct=J.width-.08,St=et.width-.08;if(st)for(const Nt of[-1,1])g(t,[Nt*ct,J.top,V],[Nt*.665,J.top,V],[Nt*.665,et.top,O],[Nt*St,et.top,O],n,Nt<0),g(e,[Nt*.665,J.top,V],[Nt*.665,.7,V],[Nt*.665,.7,O],[Nt*.665,et.top,O],d,Nt<0);else g(t,[-ct,J.top,V],[-St,et.top,O],[St,et.top,O],[ct,J.top,V],n)}if(x){const U=_+.15,V=y;g(e,[-.665,.7,U],[-.665,.7,V],[.665,.7,V],[.665,.7,U],z(4343627));for(const[O,J]of[[U,1],[V,0]])g(e,[-.665,.7,O],[.665,.7,O],[.665,b(O).top,O],[-.665,b(O).top,O],d,!J)}const G=(U,V,O)=>{const J=y+(T-y)*O,et=E+(R-E)*O;return[U*(.8-.145*O),S+(w-S)*O,J+(et-J)*V]},Z=m?[0,.07,.275,.32,.56,.6,.935,1]:x?[0,.12,.33,.395,.925,1]:[0,.09,.47,.525,.925,1];for(const U of[-1,1]){const V=(O,J,et,st,ct,St)=>g(ct,G(U,O,et),G(U,O,st),G(U,J,st),G(U,J,et),St,U<0);V(0,1,0,.07,t,n),V(0,1,.93,1,t,n);for(let O=1;O<Z.length;O++){const J=O%2===0,et=O!==1&&O!==Z.length-1,st=h.vertexCount;V(Z[O-1],Z[O],.07,.93,J?h:et?e:t,J?O===2?a:o:et?d:n),J&&h.gradientY(st,S,w,O===2?a:o,O===2?c:l)}}for(const U of[-1,1])g(t,G(U,0,1),[U*.58,M,T+.045],[U*.58,M,R-.045],G(U,1,1),n,U<0);g(t,[-.58,M,T+.045],[-.58,M,R-.045],[.58,M,R-.045],[.58,M,T+.045],n);for(const U of[0,1]){const V=U?R-.045:T+.045;g(t,G(-1,U,1),G(1,U,1),[.58,M,V],[-.58,M,V],n,!U);const O=(st,ct)=>[(st*2-1)*(.8-.145*ct),S+(w-S)*ct,G(1,U,ct)[2]],J=(st,ct,St,Nt,rt,ot)=>g(st,O(ct,Nt),O(St,Nt),O(St,rt),O(ct,rt),ot,!U),et=h.vertexCount;s?(J(t,0,.055,0,1,n),J(t,.945,1,0,1,n),J(e,.055,.945,0,.06,d),J(e,.055,.945,.94,1,d),J(h,.055,.945,.06,.94,U?r:a)):J(h,0,1,0,1,U?r:a),h.gradientY(et,S,w,U?r:a,U?l:c)}if(s){const V=z(3620678),O=z(4935251),J=z(3685700),et=st=>{for(const ct of[-.38,.38])e.box(ct-.23,.695,st-.22,ct+.23,S-.06,st+.27,O),e.box(ct-.23,S-.085,st-.21,ct+.23,S+.24,st-.075,O),e.box(ct-.103,S+.235,st-.185,ct+.103,S+.36,st-.08,J)};e.box(-.7,.6829999999999999,y+.05,.7,.695,E-.05,z(2698545)),e.box(-.71,S-.23,E-.4,.71,S+.022,E-.14,V),e.box(-.6,S,E-.43,-.22,S+.105,E-.26,d),et((y+E)/2+.17),x||et(y+.62)}if(m)for(const U of[-1,1]){const V=U*.56;e.box(V-.032,M,T+.17,V+.032,1.67,R-.21,d)}for(const U of[-1,1]){const V=U>0?v:_,{width:O,shoulder:J,top:et}=b(V);if(x&&U<0){const St=[[-O,.3,V],[O,.3,V],[O,J,V],[-O,J,V]],Nt=[[-.41,.59,V],[.41,.59,V],[.46,.74,V],[-.46,.74,V]],rt=[[-.39,.612,V+.024],[.39,.612,V+.024],[.43,.716,V+.024],[-.43,.716,V+.024]];for(let ot=0;ot<4;ot++){const Ct=(ot+1)%4;g(t,St[ot],St[Ct],Nt[Ct],Nt[ot],n,!0),g(t,Nt[ot],Nt[Ct],rt[Ct],rt[ot],n,!0)}g(t,rt[0],rt[1],rt[2],rt[3],Xt(n,.88),!0)}else g(t,[-O,.3,V],[O,.3,V],[O,J,V],[-O,J,V],n,U<0);g(t,[-O,J,V],[O,J,V],[O-.08,et,V],[-O+.08,et,V],n,U<0);const st=V+U*.008;for(const St of[-1,1])g(e,...wd(i,U,St,st,O,J,et),U>0?z(14477800):z(12003881),St!==U,U>0?1.1:.6);U>0?g(e,[-.48,.39,st],[.48,.39,st],[.53,.54,st],[-.53,.54,st],d):x&&g(e,[-.12,.76,st],[.12,.76,st],[.12,.8,st],[-.12,.8,st],d,!0);const ct=V+U*.012;g(e,[-.2,.44,ct],[.2,.44,ct],[.2,.55,ct],[-.2,.55,ct],z(14014927),U<0)}e.box(-.7,.23,_+.22,.7,.69,v-.22,d,null);const j=(U,V,O,J)=>[U,L+J*Math.sin(O)*Math.sin(.4*Math.PI),V+J*Math.cos(O)];for(const U of[-1,1])for(const V of[P,F]){const O=U*.69,J=U*.9,et=U*.912;for(let st=0;st<8;st++){const ct=st*Math.PI/4,St=(st+1)*Math.PI/4,Nt=j(J,V,ct,.34),rt=j(J,V,St,.34);g(e,j(O,V,ct,.34),Nt,rt,j(O,V,St,.34),u,U<0),U>0?e.tri(J,L,V,...rt,...Nt,u):e.tri(J,L,V,...Nt,...rt,u)}for(let st=0;st<6;st++){const ct=j(et,V,st*Math.PI/3,.188),St=j(et,V,(st+1)*Math.PI/3,.188),Nt=st%2?f:p;U>0?e.tri(U*.905,L,V,...St,...ct,Nt):e.tri(U*.905,L,V,...ct,...St,Nt)}}}function Ko(i,t,e,n,s,r){const o=-t/2,a=t*.12,l=t/2,c=e/2,h=c*.5,u=Xt(s,.72);for(const f of[-1,1])f>0?(i.quad(h,0,o,c*.88,n,o,c,n,a,h,0,a,s),i.quad(h,0,a,c,n,a,0,n*1.12,l,0,.1,l*.86,s)):(i.quad(-h,0,a,-c,n,a,-c*.88,n,o,-h,0,o,s),i.quad(0,.1,l*.86,0,n*1.12,l,-c,n,a,-h,0,a,s));i.quad(-h,0,o,-c*.88,n,o,c*.88,n,o,h,0,o,u),i.quad(-h,0,o,h,0,o,h,0,a,-h,0,a,u),i.tri(-h,0,a,h,0,a,0,.1,l*.86,u);const d=n*.8;i.quad(-c*.84,d,o+.05,c*.84,d,o+.05,c*.95,d,a,-c*.95,d,a,r),i.tri(-c*.95,d,a,c*.95,d,a,0,d,l*.95,r)}function kv(i,t){const e=new re,n=z(16119280);if(i===0)Ko(e,4.6,1.9,.75,t()<.5?z(12962767):pi[Math.floor(t()*6)],z(10133668)),e.box(-.2,.55,-2.65,.2,1.25,-2.25,z(1974822)),e.box(-.75,.6,-.9,.75,.72,-.5,z(9138002)),e.box(-.75,.6,.4,.75,.72,.8,z(9138002));else if(i===1){const s=pi[Math.floor(t()*pi.length)];Ko(e,7.4,2.7,1.25,n,z(15131350)),e.box(-1.37,.72,-3.7,1.37,.9,3,s,null),e.box(-1.05,1,-1.2,1.05,2.25,1.9,n,z(15329248)),e.quad(-1,1.45,1.92,1,1.45,1.92,.9,2.2,1.92,-.9,2.2,1.92,z(2240572),.4),e.box(-1.06,1.5,-.9,-1.05,2.1,1.6,z(2240572),null),e.box(1.05,1.5,-.9,1.06,2.1,1.6,z(2240572),null),e.box(-.9,2.25,-1,.9,2.33,1.2,n),e.cyl(0,2.33,-.6,.03,.02,1.6,4,z(9278358))}else Ko(e,9,2.8,1.3,t()<.6?n:z(2377070),z(14208952)),e.box(-.85,1.05,-1.6,.85,1.55,1.6,n,z(15329248)),e.cyl(0,1.05,.9,.08,.05,11.5,5,z(14014682)),e.box(-.06,2.45,-3,.06,2.57,.9,z(14014682)),e.blob(0,2.72,-1.05,.17,.17,1.9,5,3,z(3104666)),e.quad(-.01,12.4,.9,.01,12.4,.9,.01,1.4,4.4,-.01,1.4,4.4,z(10133154));return e.build()}function Hv(i){const t=new re;return Ko(t,4.2,1.5,.55,z(16119280),z(14736588)),t.cyl(0,.45,.5,.04,.03,6,4,z(14014682)),t.tri(.02,6.3,.5,.02,1.1,.45,.6,1.2,-2,i),t.tri(.02,4.6,.6,.3,1,1.9,.02,1,.6,z(16250866)),t.blob(.35,.95,-.9,.22,.4,.22,5,3,z(14238767)),t.build()}function Wv(i,t){const e=new re,n=8,s=9,r=2.6;for(let o=0;o<n;o++){const a=-1.15+o/n*2.3,l=-1.15+(o+1)/n*2.3,c=Math.sin(a)*s*.5,h=Math.cos(a)*s*.42,u=Math.sin(l)*s*.5,d=Math.cos(l)*s*.42,f=o===0||o===n-1||o===3||o===4?t:i;e.quad(c,h,-r/2,u,d,-r/2,u,d,r/2,c,h,r/2,f)}return e.build()}function Vv(i,t){const e=new re;return e.box(-.22,0,-.75,.22,.06,.75,i),e.blob(-.25,.75,0,.2,.62,.22,5,3,t),e.blob(-.42,1.48,0,.13,.14,.13,5,3,z(14264711)),e.build()}function Xv(i){const t=new re;return t.blob(0,.02,0,.27,.05,1.05,6,2,i),t.blob(0,.42,-.1,.2,.4,.18,5,3,z(1976112)),t.blob(0,.9,-.1,.12,.13,.12,5,3,z(14264711)),t.build()}function Yv(i){const t=new Map;for(const r of i){if(r.cls>1||!r.name||r.flags)continue;const o=t.get(r.name)??[];o.push(r),t.set(r.name,o)}const e=[],n=(r,o)=>o?[r[r.length-3],r[r.length-1]]:[r[0],r[2]],s=r=>{const o=new Float32Array(r.length);for(let a=0;a<r.length/3;a++)o.set(r.subarray(a*3,a*3+3),r.length-3-a*3);return o};for(const r of t.values()){const o=r.map(l=>l.pts),a=r[0].width;for(;o.length;){let l=Array.from(o.pop()),c=!0;for(;c;){c=!1;for(let f=0;f<o.length;f++){const p=o[f],g=[l[l.length-3],l[l.length-1]],m=[l[0],l[2]],x=(S,b)=>Math.hypot(S[0]-b[0],S[1]-b[1])<2.5;let _=null,v=!0;if(x(g,n(p,!1))?_=p:x(g,n(p,!0))?_=s(p):x(m,n(p,!0))?(_=p,v=!1):x(m,n(p,!1))&&(_=s(p),v=!1),!!_){l=v?l.concat(Array.from(_.subarray(3))):Array.from(_.subarray(0,_.length-3)).concat(l),o.splice(f,1),c=!0;break}}}const h=new Float32Array(l),u=h.length/3,d=new Float32Array(u);for(let f=1;f<u;f++)d[f]=d[f-1]+Math.hypot(h[f*3]-h[f*3-3],h[f*3+2]-h[f*3-1]);d[u-1]>380&&e.push({pts:h,cum:d,length:d[u-1],width:a})}}return e}const Fi=(i,t)=>`${Math.round(i*4)}_${Math.round(t*4)}`;function ac(i,t=2,e=320){if(i.length<=(e<320?24:96)||t===0)return[i];let n=1/0,s=-1/0,r=1/0,o=-1/0;for(const u of i)n=Math.min(n,u.x),s=Math.max(s,u.x),r=Math.min(r,u.z),o=Math.max(o,u.z);const a=s-n,l=o-r;if(Math.max(a,l)<e)return[i];const c=a>l?"x":"z";i.sort((u,d)=>u[c]-d[c]);const h=Math.floor(i.length/2);return[...ac(i.slice(0,h),t-1,e),...ac(i.slice(h),t-1,e)]}class Zv{constructor(t,e,n,s,r){H(this,"group",new $e);H(this,"afloat",new $e);H(this,"boats",[]);H(this,"dinghies",[]);H(this,"kites",[]);H(this,"kiteLines");H(this,"surfers",[]);H(this,"traffic");H(this,"trafficTrim");H(this,"cars",[]);H(this,"parkedAt",new Map);H(this,"parkedSets",[]);H(this,"hiddenCars",new Set);H(this,"cabinCar");H(this,"drivenAt",new Map);H(this,"drivenSets",[]);H(this,"carMat",Ls());H(this,"carGlass",Gv());H(this,"tmpE",new vn);H(this,"nothing",new ie().makeScale(0,0,0));H(this,"gulls");H(this,"gullState",[]);H(this,"tmpM",new ie);H(this,"tmpQ",new _n);H(this,"tmpP",new Y);H(this,"up",new Y(0,1,0));H(this,"one",new Y(1,1,1));H(this,"contact");this.ctx=t,this.closeCarShadows=n,this.roadSurfaceAt=s,this.hostCarLift=r,this.group.name="life",this.group.add(this.afloat);const o=this.carMat;this.addParkedCars(),this.addTraffic(o),this.addBoats(o,e),this.addKites(o),this.addSurfers(o,e),this.addPeople(e),this.addGulls(e),this.update(0,0)}setTide(t){this.afloat.position.y=t}sit(t,e,n,s){const r=this.ctx.hf,o=Math.sin(n),a=Math.cos(n),l=(f,p)=>this.roadSurfaceAt(f,p)??r.yAt(f,p),c=l(t+o*1.3,e+a*1.3),h=l(t-o*1.3,e-a*1.3),u=l(t-a*.8,e+o*.8),d=l(t+a*.8,e-o*.8);return this.tmpQ.setFromEuler(this.tmpE.set(-Math.atan2(c-h,2.6),n,Math.atan2(d-u,1.6),"YXZ")),this.tmpM.compose(this.tmpP.set(t,(c+h+u+d)/4+s,e),this.tmpQ,this.one)}carShapes(t){return t?ic(t-1):{body:bd(),trim:void 0,panes:void 0}}makeCabinCar(t,e){const n=new re,s=new re;oc(t,n,n,e,s);const r=new $e,o=new te(n.build(),this.carMat);o.name="vehicle-cabin-shell",o.castShadow=o.receiveShadow=!0;const a=new te(s.build(),Ps(new fn({vertexColors:!0,transparent:!0,opacity:.34,depthTest:!0,depthWrite:!1,side:Ae,forceSinglePass:!0})));return a.name="vehicle-window-panes",r.add(o,a),{group:r,shell:o,panes:a,remove(){r.removeFromParent(),o.geometry.dispose(),a.geometry.dispose(),a.material.dispose()}}}makeTrafficCar(t,e,n,s,r){const o=new re,a=z(e);oc(t,o,o,a);const l=o.build(),c=l.boundingBox,h=(g,m)=>Math.min(1,g/m),u=new Y(h(n,Math.max(-c.min.x,c.max.x)),h(r,c.max.y),h(s,Math.max(-c.min.z,c.max.z))),d=new te(l,this.carMat);d.name="traffic-stock-shell",d.castShadow=d.receiveShadow=!0,d.scale.copy(u);const f=new $e;f.name=["traffic-sedan","traffic-wagon","traffic-ute"][t],f.matrixAutoUpdate=!1,f.visible=!1,f.add(d),this.group.add(f);let p;return{mesh:f,scale:u,setCabin:g=>{g&&!p&&(p=this.makeCabinCar(t,a),p.group.scale.copy(u),f.add(p.group)),p&&(p.group.visible=g),d.visible=!g},remove:()=>{f.removeFromParent(),l.dispose(),p==null||p.remove()}}}addParkedCars(){const{town:t,hf:e,paths:n}=this.ctx,s=t.cars,r=s.length/Is,o=[[],[],[],[]],a=new Set,l=(u,d)=>`${Math.round(u/7)}_${Math.round(d/7)}`;for(let u=0;u<r;u++){const d=s[u*Is]/4,f=s[u*Is+1]/4;if(this.ctx.isClear(d,f)||!this.ctx.isDetail(d,f)&&this.ctx.roads.nearest(d,f,5.5))continue;const p=1+(s[u*Is+3]+u)%3;o[p].push({x:d,z:f,heading:s[u*Is+2]/10*(Math.PI/180),colour:ks[(s[u*Is+3]*7+u)%ks.length]}),a.add(l(d,f))}const c=Ie(911);let h=0;for(const u of n){if(h>=1100||u.width<3.4||u.width>12)continue;const d=u.pts.length/3;let f=20+c()*60;for(let p=1;p<d;p++){const g=u.pts[(p-1)*3],m=u.pts[(p-1)*3+2],x=u.pts[p*3],_=u.pts[p*3+2],v=Math.hypot(x-g,_-m);if(f-=v,f>0||v<.01)continue;f=28+c()*70;const S=c()<.5?1:-1,b=(x-g)/v,w=(_-m)/v,M=Math.max(u.width/2-.55,1.5),y=x+w*M*S,T=_-b*M*S,E=Math.floor(c()*ks.length),R=Math.floor(c()*3);if(e.metresAt(y,T)<.6||!e.inside(y,T,30)||this.ctx.isClear(y,T))continue;let P=!0;for(let F=-1;F<=1&&P;F++)for(let L=-1;L<=1;L++)if(a.has(`${Math.round(y/7)+F}_${Math.round(T/7)+L}`)){P=!1;break}P&&(a.add(l(y,T)),o[1+R].push({x:y,z:T,heading:Math.atan2(b*S,w*S),colour:ks[E]}),h++)}}o.forEach((u,d)=>this.addParkedShape(u,d))}addParkedShape(t,e){if(!t.length)return;const n=ic(e-1),s=n.body.boundingBox.clone().union(n.trim.boundingBox),r={halfWidth:Math.max(-s.min.x,s.max.x),halfLength:Math.max(-s.min.z,s.max.z),height:s.max.y},o=rc(e-1,!1),a=rc(e-1,!0);for(const l of ac(t,5,140)){const c=this.parkedSets.length,h=new De(n.body,this.carMat,l.length),u=new De(n.trim,this.carMat,l.length),d=new De(n.panes,this.carGlass,l.length),f=new De(o,this.carMat,l.length),p=new De(a,this.carMat,l.length);h.name="parked-car-near-body",u.name="parked-car-near-trim",d.name="parked-car-near-panes",f.name="parked-car-mid",p.name="parked-car-far";const g=[h,u,d,f,p],m=[h,f,p],x=new Lt;l.forEach((v,S)=>{const{x:b,z:w,heading:M,colour:y}=v,T=this.sit(b,w,M,.02);for(const E of g)E.setMatrixAt(S,T);x.set(y);for(const E of m)E.setColorAt(S,x);this.parkedAt.set(Fi(b,w),{set:c,k:S,x:b,y:T.elements[13],z:w,heading:M})});const _=new Md([[h,u,d],[f],[p]],this.group);d.castShadow=!1,this.closeCarShadows&&this.addContactShadow(h),this.parkedSets.push({body:h,meshes:g,homeMatrices:Float32Array.from(h.instanceMatrix.array),lod:_,shape:e,envelope:r}),l.forEach(({x:v,z:S})=>{const b=Fi(v,S);this.hiddenCars.has(b)&&this.showParkedCar(this.parkedAt.get(b),!1)})}}addContactShadow(t){this.contact??(this.contact={geometry:new Nn(2.5,5.1).rotateX(-Math.PI/2).translate(0,.027,0),material:new Ve({transparent:!0,depthWrite:!1,vertexShader:`varying vec2 patchUV;
          void main(){patchUV=2.*uv-1.;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 patchUV;
          void main(){float edge=length(max(abs(patchUV)-vec2(.49,.57),0.)/vec2(.50,.42));
            gl_FragColor=vec4(.012,.015,.016,.32*(1.-smoothstep(.05,1.,edge)));
            #include <colorspace_fragment>
          }`})});const e=new De(this.contact.geometry,this.contact.material,t.count);e.name="parked-car-contact",e.instanceMatrix=t.instanceMatrix,e.boundingSphere=t.boundingSphere,t.add(e)}addCars(t){const e=[[],[],[],[]];for(const n of t)e[1+(n.kind??0)%3].push(n);e.forEach((n,s)=>this.addParkedShape(n,s))}setControlledCar(t,e=0){var r,o,a;const n=t===null?void 0:t>=9e5?`t${t-9e5}`:Fi(t,e);if(n&&!this.parkedAt.has(n)&&!this.drivenAt.has(n))return!1;const s=(r=this.cabinCar)==null?void 0:r.key;if(s===n)return!0;(a=(o=this.cabinCar)==null?void 0:o.view)==null||a.remove(),this.cabinCar=n?{key:n}:void 0;for(const l of[s,n]){if(l===void 0)continue;const c=!this.hiddenCars.has(l),h=this.drivenAt.get(l),u=this.parkedAt.get(l);h?this.showDrivenCar(l,h,c):u&&this.showParkedCar(u,c)}return!0}showCabinCar(t,e,n,s){const r=this.cabinCar;if((r==null?void 0:r.key)!==t)return!1;if(n&&!r.view){const o=this.parkedAt.get(t),a=this.drivenAt.get(t),l=o&&this.parkedSets[o.set],c=new Lt;o&&l?l.body.getColorAt(o.k,c):a&&this.drivenSets[a.set].body.getColorAt(a.k,c);const h=(l==null?void 0:l.shape)??(a==null?void 0:a.set)??1,u=r.view=this.makeCabinCar(Math.max(0,h-1),[c.r,c.g,c.b]);u.group.name="native-close-car",u.group.matrixAutoUpdate=!1,this.contact&&(u.contact=new De(this.contact.geometry,this.contact.material,1),u.contact.name="parked-car-contact",u.group.add(u.contact)),this.group.add(u.group)}return r.view&&(r.view.group.visible=n,r.view.group.matrix.copy(e),r.view.group.matrixWorldNeedsUpdate=!0,r.view.contact&&(r.view.contact.visible=s)),!0}showParkedCar(t,e){const n=this.parkedSets[t.set],s=Fi(t.x,t.z),r=this.tmpM.fromArray(n.homeMatrices,t.k*16),o=!this.drivenAt.has(s)&&this.showCabinCar(s,r,e,!0),a=e&&!o?r:this.nothing;for(const l of n.meshes)l.setMatrixAt(t.k,a),l.instanceMatrix.needsUpdate=!0}setHiddenCars(t){const e=new Set(t.map(([n,s])=>Fi(n,s)));for(const[n,s]of this.parkedAt){const r=!e.has(n);if(r===!this.hiddenCars.has(n))continue;const o=this.drivenAt.get(n);o?this.showDrivenCar(n,o,r):this.showParkedCar(s,r)}this.hiddenCars=e}carBlocker(t,e){const n=this.drivenAt.get(t),s=n??e;return{id:[e.x,e.z],x:s.x,y:n?n.y+this.hostCarLift:e.y,z:s.z,heading:s.heading,...this.parkedSets[e.set].envelope}}parkedCarBlockers(){const t=[];for(const[e,n]of this.parkedAt)this.hiddenCars.has(e)||t.push(this.carBlocker(e,n));return t}parkedCarBlocker(t,e){const n=Fi(t,e),s=this.parkedAt.get(n);return s&&!this.hiddenCars.has(n)?this.carBlocker(n,s):null}nearestCar(t,e,n){let s=null;for(const[r,o]of this.parkedAt){if(this.hiddenCars.has(r))continue;const a=this.drivenAt.get(r)??o,l=Math.hypot(a.x-t,a.z-e);l<(s?s.distance:n)&&(s={id:[o.x,o.z],x:a.x,z:a.z,heading:a.heading,distance:l})}return this.cars.forEach((r,o)=>{const a=this.drivenAt.get(`t${o}`)??r,l=Math.hypot(a.x-t,a.z-e);l<(s?s.distance:n)&&(s={id:[9e5+o,0],x:a.x,z:a.z,heading:a.heading,distance:l})}),s}resetCar(t,e){var c,h;const n=t>=9e5?this.cars[t-9e5]:void 0,s=n?`t${t-9e5}`:Fi(t,e),r=this.drivenAt.get(s);if(!r)return!1;this.drivenAt.delete(s),((c=this.cabinCar)==null?void 0:c.key)===s&&((h=this.cabinCar.view)==null||h.remove(),this.cabinCar=void 0);const o=this.drivenSets[r.set],a=--o.n;if(r.k!==a)for(const[u,d]of this.drivenAt){if(d.set!==r.set||d.k!==a)continue;const f=new Lt;o.body.getColorAt(a,f),d.k=r.k,o.body.setColorAt(d.k,f),o.body.instanceColor.needsUpdate=!0,this.showDrivenCar(u,d,!this.hiddenCars.has(u));break}o.body.count=a,o.trim&&(o.trim.count=a),o.panes&&(o.panes.count=a),r.indicator&&(r.indicator.removeFromParent(),r.indicator.geometry.dispose(),r.indicator.material.dispose()),n&&(n.gone=!1);const l=this.parkedAt.get(s);return l&&!this.hiddenCars.has(s)&&this.showParkedCar(l,!0),!0}showDrivenCar(t,e,n){const s=this.drivenSets[e.set],r=this.showCabinCar(t,e.matrix,n,!1),o=n&&!r?e.matrix:this.nothing;s.body.setMatrixAt(e.k,o),s.body.instanceMatrix.needsUpdate=!0;for(const a of[s.trim,s.panes])a&&(a.setMatrixAt(e.k,o),a.instanceMatrix.needsUpdate=!0);e.indicator&&(Ad(e.indicator,n?e.signal:0),e.indicator.visible&&(e.indicator.matrix.copy(e.matrix),e.indicator.matrixWorldNeedsUpdate=!0))}driveCar(t,e,n,s,r,o,a=0,l=0,c=0){const h=t>=9e5?this.cars[t-9e5]:void 0,u=h?`t${t-9e5}`:Fi(t,e),d=h?void 0:this.parkedAt.get(u);if(!d&&!h)return!1;let f=this.drivenAt.get(u);if(!f){if(this.drivenAt.size>=12||this.hiddenCars.has(u))return!1;const p=d?this.parkedSets[d.set].shape:this.trafficTrim?1:0;let g=this.drivenSets[p];if(!g){const x=this.carShapes(p);g=this.drivenSets[p]={body:new De(x.body,this.carMat,12),trim:x.trim?new De(x.trim,this.carMat,12):void 0,panes:x.panes?new De(x.panes,this.carGlass,12):void 0,n:0};for(const _ of[g.body,g.trim,g.panes])_&&(_.count=0,_.frustumCulled=!1,_.castShadow=_!==g.panes,this.group.add(_))}f={set:p,k:g.n++,x:n,y:s,z:r,heading:o,matrix:new ie,signal:c},this.drivenAt.set(u,f),g.body.count=g.n,g.trim&&(g.trim.count=g.n),g.panes&&(g.panes.count=g.n);const m=new Lt;d?(this.parkedSets[d.set].body.getColorAt(d.k,m),this.showParkedCar(d,!1)):(this.traffic.getColorAt(t-9e5,m),h.gone=!0),g.body.setColorAt(f.k,m),g.body.instanceColor.needsUpdate=!0}return f.x=n,f.y=s,f.z=r,f.heading=o,f.signal=c,this.tmpQ.setFromEuler(this.tmpE.set(-a,o,l,"YXZ")),f.matrix.compose(this.tmpP.set(n,s+this.hostCarLift,r),this.tmpQ,this.one),c&&!f.indicator&&(f.indicator=Td(f.set-1),f.indicator.matrixAutoUpdate=!1,this.group.add(f.indicator)),this.showDrivenCar(u,f,!this.hiddenCars.has(u)),!0}addTraffic(t){const e=Yv(this.ctx.paths);if(!e.length)return;const n=e.reduce((c,h)=>c+h.length,0),s=0,r=Ie(77),o=this.ctx.hasDetail?ic(0):null,a=this.traffic=new De(o?o.body:bd(),t,s);if(a.instanceMatrix.setUsage(Hi),a.frustumCulled=!1,o){const c=this.trafficTrim=new De(o.trim,t,s);c.instanceMatrix.setUsage(Hi),c.frustumCulled=!1,c.castShadow=!0,this.group.add(c)}const l=new Lt;for(let c=0;c<s;c++){let h=r()*n,u=e[0];for(const d of e)if((h-=d.length)<=0){u=d;break}this.cars.push({route:u,s:r()*u.length,dir:r()<.5?1:-1,speed:9+r()*6,x:0,z:0,heading:0}),a.setColorAt(c,l.set(ks[Math.floor(r()*ks.length)]))}a.castShadow=!0,this.group.add(a)}addBoats(t,e){var c;const{hf:n}=this.ctx,s=Ie(451),r=((c=e.jetty)==null?void 0:c.head)??new Y(380,0,-117),o=[];for(let h=0;h<4e3&&o.length<16;h++){const u=s()*Math.PI*2,d=55+s()*420,f=r.x+Math.cos(u)*d,p=r.z+Math.sin(u)*d;n.metresAt(f,p)>-1.9||!n.inside(f,p,40)||o.some(([g,m])=>Math.hypot(g-f,m-p)<26)||o.push([f,p])}const a=2.2+s()*.4;o.forEach(([h,u],d)=>{const f=d%5===0?2:d%2?0:1,p=new te(kv(f,s),t);p.position.set(h,0,u),p.rotation.y=a+(s()-.5)*.5,p.castShadow=!0,this.afloat.add(p),this.boats.push({obj:p,phase:s()*6.28,y:f===0?-.22:-.42})});const l=[z(16250866),z(15222589),z(3117008),z(15909424)];for(let h=0;h<600&&this.dinghies.length<4;h++){const u=s()*Math.PI*2,d=150+s()*900,f=r.x+Math.cos(u)*d,p=r.z+160+Math.sin(u)*d*.5,g=45+s()*70,m=30+s()*40;let x=n.inside(f,p,160);for(let v=0;v<12&&x;v++){const S=v/12*Math.PI*2;n.metresAt(f+Math.cos(S)*g,p+Math.sin(S)*m)>-1.5&&(x=!1)}if(!x||this.dinghies.some(v=>Math.hypot(v.cx-f,v.cz-p)<170))continue;const _=new te(Hv(l[this.dinghies.length%l.length]),t);_.castShadow=!0,this.afloat.add(_),this.dinghies.push({obj:_,cx:f,cz:p,rx:g,rz:m,phase:s()*6.28,speed:(2.2+s())/Math.max(g,m)})}}addKites(t){const{hf:e,town:n}=this.ctx,s=Ie(990),[r,o]=bn(n.meta,-38.6385,145.714),[a,l]=bn(n.meta,-38.645,145.731),c=[];for(let d=0;d<3e3&&c.length<6;d++){const f=r+s()*(a-r),p=o+s()*(l-o);e.metresAt(f,p)>-1.6||c.some(g=>Math.hypot(g.x-f,g.z-p)<110)||c.push(new Y(f,0,p))}const h=new Float32Array(c.length*12);c.forEach((d,f)=>{let p=85;for(;p>15&&(e.metresAt(d.x+.65*p,d.z+.76*p)>-1.2||e.metresAt(d.x-.65*p,d.z-.76*p)>-1.2);)p-=10;const g=pi[Math.floor(s()*7)],m=pi[Math.floor(s()*7)],x=new te(Wv(g,m===g?pi[7]:m),t),_=new te(Vv(pi[Math.floor(s()*7)],z(1976112)),t);x.castShadow=!0,this.afloat.add(x,_),this.kites.push({base:d,reach:p,phase:s()*6.28,speed:.12+s()*.06,kite:x,rider:_})});const u=new Ce;u.setAttribute("position",new Te(h,3).setUsage(Hi)),this.kiteLines=new Lh(u,Ps(new Eh({color:15921906,transparent:!0,opacity:.7}))),this.kiteLines.frustumCulled=!1,this.afloat.add(this.kiteLines)}addSurfers(t,e){if(!e.surf)return;const{hf:n}=this.ctx,s=Ie(31),[r,o]=e.surf.seaward,a=e.surf.beach;let l=20;for(;l<420&&n.metresAt(a.x+r*l,a.z+o*l)>-2;)l+=5;for(let c=0;c<9;c++){const h=(c-4)*13+(s()-.5)*8,u=l+(s()-.5)*30,d=a.x+r*u-o*h,f=a.z+o*u+r*h,p=new te(Xv(pi[Math.floor(s()*pi.length)]),t);p.position.set(d,0,f),p.rotation.y=Math.atan2(r,o)+(s()-.5)*.8,this.afloat.add(p),this.surfers.push({obj:p,phase:s()*6.28})}}addPeople(t){const{hf:e,town:n,paths:s,roads:r,footprints:o}=this.ctx,a=Ie(2026),l=[],c=[],h=(I,W)=>o.some(q=>{if(Math.hypot(I-q.cx,W-q.cz)>Math.max(q.obb.w,q.obb.d))return!1;let G=!1;for(let Z=0,j=q.poly.length-2;Z<q.poly.length;j=Z,Z+=2){const U=q.poly[Z],V=q.poly[Z+1],O=q.poly[j],J=q.poly[j+1];V>W!=J>W&&I<(O-U)*(W-V)/(J-V)+U&&(G=!G)}return G}),u=(I,W)=>!r.nearest(I,W,6.4)&&!h(I,W),d=(I,W,q,G,Z,j,U=0)=>{for(let V=0,O=0;V<G*40&&O<G;V++){const J=a()*Math.PI*2,et=Math.sqrt(a())*q,st=I+Math.cos(J)*et,ct=W+Math.sin(J)*et,St=e.metresAt(st,ct);St<Z||St>j||!u(st,ct)||(l.push(st,e.yAt(st,ct),ct),a()<U&&c.push(st+1.2,e.yAt(st+1.2,ct),ct+.6),O++)}};t.surf&&d(t.surf.beach.x,t.surf.beach.z,130,60,1.5,3,.32);const[f,p]=bn(n.meta,-38.63575,145.729);d(f,p,120,34,1.5,2.4,.3);const[g,m]=bn(n.meta,-38.6356,145.7337);d(g,m,110,26,1.5,2.6,.2);const[x,_]=bn(n.meta,-38.63194,145.72681);d(x,_,55,14,0,99);const[v,S]=bn(n.meta,-38.63385,145.7285);for(const I of s){if(I.cls>3||I.flags)continue;const W=I.pts.length/3;for(let q=1;q<W;q++){const G=I.pts[q*3],Z=I.pts[q*3+2];if(Math.hypot(G-v,Z-S)>300||a()>.42||this.ctx.isClear(G,Z))continue;const j=G-I.pts[q*3-3],U=Z-I.pts[q*3-1],V=Math.hypot(j,U)||1,O=a()<.5?1:-1,J=I.width/2+2.3+a()*1,et=G-U/V*J*O,st=Z+j/V*J*O;u(et,st)&&l.push(et,e.yAt(et,st),st)}}if(t.jetty){const I=t.jetty.points;for(let W=0;W<I.length-1;W++)for(let q=0;q<3;q++){const G=a();l.push(I[W][0]+(I[W+1][0]-I[W][0])*G+(a()-.5)*2,ec,I[W][1]+(I[W+1][1]-I[W][1])*G+(a()-.5)*2)}}const b=l.length/3,w=new re;w.cyl(0,0,0,.17,.22,.85,5,z(2765632)),w.cyl(0,.85,0,.24,.2,.6,5,z(16777215),z(16777215));const M=new re;M.blob(0,1.6,0,.14,.15,.14,5,3,z(14264711));const y=new So({vertexColors:!0}),T=I=>(I.deleteAttribute("glow"),I),E=new De(T(w.build()),y,b),R=new De(T(M.build()),y,b),P=new Lt,F=[16777215,15255976,12159590,9068354];for(let I=0;I<b;I++){const W=.92+a()*.2;this.tmpQ.setFromAxisAngle(this.up,a()*6.28),this.tmpM.compose(this.tmpP.set(l[I*3],l[I*3+1],l[I*3+2]),this.tmpQ,new Y(W,W,W)),E.setMatrixAt(I,this.tmpM),R.setMatrixAt(I,this.tmpM),E.setColorAt(I,P.set(yd[Math.floor(a()*yd.length)])),R.setColorAt(I,P.set(F[Math.floor(a()*F.length)]))}E.computeBoundingSphere(),R.computeBoundingSphere(),this.group.add(E,R);const L=new re;L.cyl(0,0,0,.03,.03,2,4,z(14277081)),L.cyl(0,1.75,0,1.25,0,.5,8,z(16777215));const N=new De(T(L.build()),y,c.length/3);for(let I=0;I<c.length/3;I++)this.tmpQ.setFromAxisAngle(new Y(1,0,0),(a()-.5)*.3),N.setMatrixAt(I,this.tmpM.compose(this.tmpP.set(c[I*3],c[I*3+1],c[I*3+2]),this.tmpQ,this.one)),N.setColorAt(I,P.set([14826299,3117008,15909424,3715691,15764004,16053490][Math.floor(a()*6)]));N.castShadow=!0,N.computeBoundingSphere(),this.group.add(N)}addGulls(t){if(!t.jetty)return;const e=Ie(8),n=16;for(let r=0;r<n;r++)this.gullState.push({cx:t.jetty.head.x+(e()-.5)*90,cz:t.jetty.head.z+(e()-.5)*90,r:18+e()*55,h:ec+6+e()*16,w:(.25+e()*.3)*(e()<.5?1:-1),phase:e()*6.28});const s=new Ce;s.setAttribute("position",new Te(new Float32Array(n*18),3).setUsage(Hi)),this.gulls=new te(s,Ps(new fn({color:16185074,side:Ae}))),this.gulls.frustumCulled=!1,this.group.add(this.gulls)}updateParkedLod(t,e,n){for(const s of this.parkedSets)s.lod.update(t,e,n)}update(t,e){for(const n of this.boats)n.obj.rotation.z=Math.sin(e*.9+n.phase)*.04,n.obj.rotation.x=Math.sin(e*.7+n.phase*1.7)*.025,n.obj.position.y=n.y+Math.sin(e*1.1+n.phase)*.06;for(const n of this.dinghies){const s=n.phase+e*n.speed;n.obj.position.set(n.cx+Math.cos(s)*n.rx,-.15,n.cz+Math.sin(s)*n.rz),n.obj.rotation.y=Math.atan2(-Math.sin(s)*n.rx,Math.cos(s)*n.rz),n.obj.rotation.z=.12+Math.sin(e*.8+n.phase)*.04}for(const n of this.surfers)n.obj.position.y=-.05+Math.sin(e*.9+n.phase)*.22;if(this.kiteLines){const n=this.kiteLines.geometry.getAttribute("position");this.kites.forEach((s,r)=>{const o=Math.sin(e*s.speed*6.28+s.phase),a=Math.cos(e*s.speed*6.28+s.phase)>=0?1:-1,l=s.base.x+.65*s.reach*o,c=s.base.z+.76*s.reach*o;s.rider.position.set(l,.05,c),s.rider.rotation.y=Math.atan2(.65*a,.76*a),s.rider.rotation.z=.28;const h=e*1.3+s.phase,u=l+12+a*5+Math.sin(h)*4.5,d=c-10+Math.cos(h)*1.5,f=17+Math.sin(h*2)*2.4;s.kite.position.set(u,f,d),s.kite.lookAt(l,1.2,c),s.kite.rotateX(-Math.PI/2),n.setXYZ(r*4,l-.3,1.25,c),n.setXYZ(r*4+1,u-2.6,f-1,d),n.setXYZ(r*4+2,l-.3,1.25,c),n.setXYZ(r*4+3,u+2.6,f-1,d)}),n.needsUpdate=!0}if(this.traffic&&(this.cars.forEach((n,s)=>{var v,S;if(n.gone){this.traffic.setMatrixAt(s,this.nothing),(v=this.trafficTrim)==null||v.setMatrixAt(s,this.nothing);return}const r=n.route;n.s+=n.dir*n.speed*t,n.s>r.length&&(n.s=r.length,n.dir=-1),n.s<0&&(n.s=0,n.dir=1);let o=0,a=r.cum.length-1;for(;a-o>1;){const b=o+a>>1;r.cum[b]<=n.s?o=b:a=b}const l=(n.s-r.cum[o])/(r.cum[a]-r.cum[o]||1),c=r.pts[o*3],h=r.pts[o*3+2],u=r.pts[a*3],d=r.pts[a*3+2];let f=u-c,p=d-h;const g=Math.hypot(f,p)||1;f=f/g*n.dir,p=p/g*n.dir;const m=Math.min(r.width*.24,2),x=c+(u-c)*l+p*m,_=h+(d-h)*l-f*m;n.x=x,n.z=_,n.heading=Math.atan2(f,p),this.traffic.setMatrixAt(s,this.sit(x,_,n.heading,.02)),(S=this.trafficTrim)==null||S.setMatrixAt(s,this.tmpM)}),this.traffic.instanceMatrix.needsUpdate=!0,this.trafficTrim&&(this.trafficTrim.instanceMatrix.needsUpdate=!0)),this.gulls){const n=this.gulls.geometry.getAttribute("position");this.gullState.forEach((s,r)=>{const o=s.phase+e*s.w,a=s.cx+Math.cos(o)*s.r,l=s.cz+Math.sin(o)*s.r,c=s.h+Math.sin(o*2.3)*1.5,h=s.w>0?1:-1,u=-Math.sin(o)*h,d=Math.cos(o)*h,f=d,p=-u,g=Math.sin(e*7+s.phase*3)*.45,m=r*6;n.setXYZ(m,a+u*.35,c,l+d*.35),n.setXYZ(m+1,a-u*.3,c,l-d*.3),n.setXYZ(m+2,a+f*.85,c+g,l+p*.85),n.setXYZ(m+3,a+u*.35,c,l+d*.35),n.setXYZ(m+4,a-f*.85,c+g,l-p*.85),n.setXYZ(m+5,a-u*.3,c,l-d*.3)}),n.needsUpdate=!0}}}const xn=(i,t,e)=>{const n=[],s=[];for(let r=0;r<i.length;r++){const o=i[r],a=i[(r+1)%i.length],l=t(o)-e,c=t(a)-e;if(l<=1e-9&&n.push(o),l>=-1e-9&&s.push(o),l<-1e-9&&c>1e-9||l>1e-9&&c<-1e-9){const h=l/(l-c),u=new Float64Array(o.length);for(let d=0;d<u.length;d++)u[d]=o[d]+(a[d]-o[d])*h;n.push(u),s.push(u)}}return[n,s]},lc=(i,t)=>{const e=[];for(let n of i){let s=1/0,r=-1/0;for(const o of n){const a=t(o);a<s&&(s=a),a>r&&(r=a)}for(let o=Math.floor(s+1e-9)+1;o<r-1e-9&&n.length>=3;o++){const[a,l]=xn(n,t,o);a.length>=3&&e.push(a),n=l}n.length>=3&&e.push(n)}return e};function cc(i,t,e,n,s){const r=[Math.min(t[0],e[0],n[0]),Math.min(t[2],e[2],n[2]),Math.max(t[0],e[0],n[0]),Math.max(t[2],e[2],n[2])];let o=[[t,e,n]];for(const a of i.patches){if(r[0]>=a.xMax||r[2]<=a.xMin||r[1]>=a.zMax||r[3]<=a.zMin)continue;const l=[];for(const c of o){const[h,u]=xn(c,_=>_[0],a.xMin),[d,f]=xn(u,_=>_[0],a.xMax),[p,g]=xn(d,_=>_[2],a.zMin),[m,x]=xn(g,_=>_[2],a.zMax);for(const _ of[h,f,p,x])_.length>=3&&l.push(_);m.length>=3&&Rd(a,m,s)}o=l}for(const a of o)Rd(i,a,s)}function Rd(i,t,e){const n=o=>(o[0]-i.xMin)/i.dx,s=o=>(o[2]-i.zMin)/i.dz,r=o=>n(o)+s(o);if(t.length===3){const[o,a,l]=t,c=Math.min(n(o),n(a),n(l)),h=Math.max(n(o),n(a),n(l)),u=Math.min(s(o),s(a),s(l)),d=Math.max(s(o),s(a),s(l)),f=Math.min(r(o),r(a),r(l)),p=Math.max(r(o),r(a),r(l));if(Math.floor(c)===Math.floor(h-1e-9)&&Math.floor(u)===Math.floor(d-1e-9)&&Math.floor(f)===Math.floor(p-1e-9)){e(o,a,l);return}}for(const o of lc(lc(lc([t],n),s),r))for(let a=1;a+1<o.length;a++)e(o[0],o[a],o[a+1])}class Kv{constructor(t,e,n,s=!0,r){H(this,"fitted",{tri:this.emitFitted.bind(this)});this.hf=t,this.mesh=e,this.clearance=n,this.fitTerrain=s,this.coverage=r}quad(t,e,n,s,r,o,a,l,c,h,u,d,f,p=0){this.tri(t,e,n,s,r,o,a,l,c,f,p),this.tri(t,e,n,a,l,c,h,u,d,f,p)}edgeCrosses(t,e,n,s,r,o){const a=this.hf;for(let l=0;l<3;l++){const c=l===0?t:l===1?e:t+e,h=l===0?s:l===1?r:s+r,u=Math.max(c,h);for(let d=Math.floor(Math.min(c,h))+1;d<u;d++){const f=(d-c)/(h-c),p=a.xMin+(t+(s-t)*f)*a.dx,g=a.zMin+(e+(r-e)*f)*a.dz;if(n+(o-n)*f<a.yAt(p,g)+this.clearance)return!0}}return!1}needsFitting(t,e,n,s,r,o,a,l,c){const h=this.hf;if(e<h.yAt(t,n)+this.clearance||r<h.yAt(s,o)+this.clearance||l<h.yAt(a,c)+this.clearance)return!0;const u=(t-h.xMin)/h.dx,d=(n-h.zMin)/h.dz,f=(s-h.xMin)/h.dx,p=(o-h.zMin)/h.dz,g=(a-h.xMin)/h.dx,m=(c-h.zMin)/h.dz;if(this.edgeCrosses(u,d,e,f,p,r)||this.edgeCrosses(f,p,r,g,m,l)||this.edgeCrosses(g,m,l,u,d,e))return!0;const x=(f-u)*(m-d)-(p-d)*(g-u);if(Math.abs(x)<1e-12)return!1;const _=Math.min(h.nx-1,Math.floor(Math.max(u,f,g))),v=Math.min(h.nz-1,Math.floor(Math.max(d,p,m)));for(let S=Math.max(0,Math.ceil(Math.min(d,p,m)));S<=v;S++)for(let b=Math.max(0,Math.ceil(Math.min(u,f,g)));b<=_;b++){const w=((b-u)*(m-d)-(S-d)*(g-u))/x,M=((f-u)*(S-d)-(p-d)*(b-u))/x;if(w>=0&&M>=0&&w+M<=1&&e+w*(r-e)+M*(l-e)<h.y[S*h.nx+b]+this.clearance)return!0}return!1}tri(t,e,n,s,r,o,a,l,c,h,u=0){this.coverage?this.coverage.emit(this.fitted,t,e,n,s,r,o,a,l,c,h,u):this.emitFitted(t,e,n,s,r,o,a,l,c,h,u)}emitFitted(t,e,n,s,r,o,a,l,c,h,u){if(!this.fitTerrain){this.mesh.tri(t,e,n,s,r,o,a,l,c,h,u);return}if(!this.hf.patchOverlaps(Math.min(t,s,a),Math.min(n,o,c),Math.max(t,s,a),Math.max(n,o,c))&&!this.needsFitting(t,e,n,s,r,o,a,l,c)){this.mesh.tri(t,e,n,s,r,o,a,l,c,h,u);return}const f=m=>Math.max(m[1],this.hf.yAt(m[0],m[2])+this.clearance),p=[];let g=!1;if(cc(this.hf,new Float64Array([t,e,n]),new Float64Array([s,r,o]),new Float64Array([a,l,c]),(m,x,_)=>{p.push([m,x,_]),g||(g=f(m)>m[1]||f(x)>x[1]||f(_)>_[1])}),!g){this.mesh.tri(t,e,n,s,r,o,a,l,c,h,u);return}for(const[m,x,_]of p)this.mesh.tri(m[0],f(m),m[2],x[0],f(x),x[2],_[0],f(_),_[2],h,u)}}const Cd=i=>i[0],Ld=i=>i[2],zn=1.5,Oi=.16,qo=Math.hypot(zn,Oi),Hs=12,Pd=(i,t)=>(i+2048)*8192+t+2048;class qv{constructor(t,e,n){H(this,"bins",new Map);this.asphalt=t,this.marks=e,this.color=n}addDash(t,e,n,s,r,o){const a={x:t+zn*s,z:n+zn*r,dx:s,dz:r,y:e+zn*o,grade:o,flat:!0,area:0,pieces:[]},l=Pd(Math.floor(a.x/Hs),Math.floor(a.z/Hs));let c=this.bins.get(l);c||this.bins.set(l,c=[]),c.push(a)}tri(t,e,n,s,r,o,a,l,c,h){this.asphalt.tri(t,e,n,s,r,o,a,l,c,h);const u=Math.min(t,s,a)-qo,d=Math.max(t,s,a)+qo,f=Math.min(n,o,c)-qo,p=Math.max(n,o,c)+qo;for(let g=Math.floor(f/Hs);g<=Math.floor(p/Hs);g++)for(let m=Math.floor(u/Hs);m<=Math.floor(d/Hs);m++){const x=this.bins.get(Pd(m,g));if(x)for(const _ of x){if(_.x<u||_.x>d||_.z<f||_.z>p)continue;const v=(b,w,M)=>new Float64Array([(b-_.x)*_.dx+(M-_.z)*_.dz,w,-(b-_.x)*_.dz+(M-_.z)*_.dx]);let S=[v(t,e,n),v(s,r,o),v(a,l,c)];if(S=xn(S,Cd,-zn)[1],S=xn(S,Cd,zn)[0],S=xn(S,Ld,-Oi)[1],S=xn(S,Ld,Oi)[0],!(S.length<3)){_.pieces.push(S);for(let b=0;b<S.length;b++){const w=S[b],M=S[(b+1)%S.length];_.area+=(M[0]*w[2]-M[2]*w[0])/2,Math.abs(_.y+w[0]*_.grade-w[1])>.03&&(_.flat=!1)}}}}}finish(){for(const t of this.bins.values())for(const e of t){const n=s=>[e.x+s[0]*e.dx-s[2]*e.dz,s[1]+.05,e.z+s[0]*e.dz+s[2]*e.dx];if(e.flat&&Math.abs(e.area-4*zn*Oi)<1e-4){const s=(r,o)=>n(new Float64Array([r,e.y+r*e.grade,o]));this.marks.quad(...s(-zn,Oi),...s(zn,Oi),...s(zn,-Oi),...s(-zn,-Oi),this.color)}else for(const s of e.pieces)for(let r=1;r+1<s.length;r++)this.marks.tri(...n(s[0]),...n(s[r]),...n(s[r+1]),this.color)}}}const zi=16,Jo=1e-6,Dd=(i,t)=>i*65536+t;function $o(i,t,e){return(t[0]-i[0])*(e[2]-i[2])-(t[2]-i[2])*(e[0]-i[0])}function Id(i){let t=0;for(let e=1;e+1<i.length;e++)t+=$o(i[0],i[e],i[e+1]);return Math.abs(t)/2}function Jv(i,t){const e=[];let n=i;for(let s=0;s<t.length;s++){const r=t[s],o=t[(s+1)%t.length],[a,l]=xn(n,c=>$o(r,o,c),0);if(Id(a)<=Jo)return[i];Id(l)>Jo&&e.push(l),n=a}return e}class $v{constructor(){H(this,"cells",new Map);H(this,"seen",new Set)}reserve(t){if(t.length<3)return;const e=t.map(([o,a])=>new Float64Array([o,0,a]));$o(e[0],e[1],e[2])>0&&e.reverse();const n=t.map(([o])=>o),s=t.map(([,o])=>o),r={corners:e,minX:Math.min(...n),maxX:Math.max(...n),minZ:Math.min(...s),maxZ:Math.max(...s)};for(let o=Math.floor(r.minZ/zi);o<=Math.floor(r.maxZ/zi);o++)for(let a=Math.floor(r.minX/zi);a<=Math.floor(r.maxX/zi);a++){const l=Dd(a,o),c=this.cells.get(l);c?c.push(r):this.cells.set(l,[r])}}emit(t,e,n,s,r,o,a,l,c,h,u,d=0){const f=(r-e)*(h-s)-(a-s)*(l-e);if(Math.abs(f)<=2*Jo)return;const p=new Float64Array([e,n,s]),g=new Float64Array([r,o,a]),m=new Float64Array([l,c,h]),x=f<0?[p,g,m]:[p,m,g],_=(L,N,I)=>t.tri(L[0],L[1],L[2],N[0],N[1],N[2],I[0],I[1],I[2],u,d),v=Math.min(e,r,l),S=Math.max(e,r,l),b=Math.min(s,a,h),w=Math.max(s,a,h),M=Math.floor(v/zi),y=Math.floor(S/zi),T=Math.floor(b/zi),E=Math.floor(w/zi),R=[];let P=[x];this.seen.clear();for(let L=T;L<=E;L++)for(let N=M;N<=y;N++){const I=Dd(N,L);let W=this.cells.get(I);W||this.cells.set(I,W=[]),R.push(W);for(const q of W)if(!(q.maxX<=v||S<=q.minX||q.maxZ<=b||w<=q.minZ||this.seen.has(q))&&(this.seen.add(q),P=P.flatMap(G=>Jv(G,q.corners)),!P.length))return}for(const L of P)for(let N=1;N+1<L.length;N++)$o(L[0],L[N],L[N+1])<-2*Jo&&_(L[0],L[N],L[N+1]);const F={corners:x,minX:v,maxX:S,minZ:b,maxZ:w};for(const L of R)L.push(F)}}const hc=1,Nd=2,Ud=z(5198680),Fd=.92,jv=[Ud,z(11575168),z(9072466),z(12434356)],Qv=z(4474957),tM=z(15921382),Od={polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8},eM=[.34,.3,.26,.22,.16,.15,.13,.11],zd=new Float32Array(9);function nM(i,t,e){const n=[i[0]/10,i[1]/10];let s=0;for(let r=2;r<i.length;r+=2){const o=i[r-2]/10,a=i[r-1]/10,l=i[r]/10,c=i[r+1]/10,h=Math.hypot(l-o,c-a);if(!h)continue;const u=e&&s+h>=e.start&&s<=e.end?3:t,d=Math.ceil(h/u);s+=h;for(let f=1;f<=d;f++)n.push(o+(l-o)*f/d,a+(c-a)*f/d)}return n}class iM{constructor(){H(this,"cells",new Map);H(this,"segs",[]);H(this,"size",40)}add(t,e,n,s,r,o){const a=this.segs.length/6;this.segs.push(t,e,n,s,r,o);const l=Math.floor(Math.min(t,n)/this.size),c=Math.floor(Math.max(t,n)/this.size),h=Math.floor(Math.min(e,s)/this.size),u=Math.floor(Math.max(e,s)/this.size);for(let d=l;d<=c;d++)for(let f=h;f<=u;f++){const p=(d+512)*4096+(f+512);let g=this.cells.get(p);g||this.cells.set(p,g=[]),g.push(a)}}nearest(t,e,n){let s=null;const r=Math.ceil(n/this.size),o=Math.floor(t/this.size),a=Math.floor(e/this.size);for(let l=o-r;l<=o+r;l++)for(let c=a-r;c<=a+r;c++){const h=this.cells.get((l+512)*4096+(c+512));if(h)for(const u of h){const d=this.segs[u*6],f=this.segs[u*6+1],p=this.segs[u*6+2],g=this.segs[u*6+3],m=p-d,x=g-f,_=Math.max(0,Math.min(1,((t-d)*m+(e-f)*x)/(m*m+x*x||1))),v=d+m*_,S=f+x*_,b=Math.hypot(t-v,e-S);b<=n&&(!s||b<s.dist)&&(s={dist:b,px:v,pz:S,cls:this.segs[u*6+4],name:this.segs[u*6+5]})}}return s}}function sM(i,t){const e=new Map,n=(r,o)=>r+","+o;for(const r of i){if(r[0]>3)continue;const o=r[5];if(!(o.length<4))for(const a of[0,1]){const l=a?o.length-2:0,c=l+(a?-2:2),h=(o[c]-o[l])/10,u=(o[c+1]-o[l+1])/10,d=Math.hypot(h,u);if(!d)continue;const f=n(o[l],o[l+1]),p=e.get(f)??[];p.push({road:r,end:a,x:o[l]/10,z:o[l+1]/10,dx:h/d,dz:u/d,length:d}),e.set(f,p)}}const s=new Map;for(const r of e.values()){if(r.length!==2)continue;const o=r.find(E=>E.road[2]&hc),a=r.find(E=>!(E.road[2]&hc));if(!o||!a||o.road[0]!==a.road[0]||o.road[3]!==a.road[3]||o.road[4]!==a.road[4]||a.dx*o.dx+a.dz*o.dz>-.75)continue;const l=o.end?-1:1,c=o.road[3]/20,h=(o.dx-a.dx)*l,u=(o.dz-a.dz)*l,d=c/((o.dx*h+o.dz*u)*l),f=-u*d,p=h*d,{x:g,z:m}=o,x=Math.min(4,a.length),_=t.yAt(g,m),v=[t.yAt(g+f,m+p),_,t.yAt(g-f,m-p)],S=(E,R)=>{const P=g+a.dx*x-E*a.dz*l*c,F=m+a.dz*x+E*a.dx*l*c;return(R-t.yAt(P,F))*l/x},b=[S(-1,v[0]),S(0,_),S(1,v[2])],w={hx:f,hz:p,offset:[v[0]-_,0,v[2]-_],slope:b},M=s.get(o.road)??[];M[o.end]=w,s.set(o.road,M);const y=s.get(a.road)??[],T=a.end===o.end;y[a.end]={...w,hx:T?-f:f,hz:T?-p:p},s.set(a.road,y)}return s}function Bd(i,t,e,n,s,r){if(!i||t>=e)return 0;const o=t/e;return((1+2*o)*i.offset[r]+t*(i.slope[r]-n)*s)*(1-o)**2}function rM(i,t,e,n,s=[]){const r=new re,o=new re,a=new iM,l=sM(i.roads,t),c=new Map,h=new $v;for(const M of s)h.reserve(M);const u=[];for(const M of[...i.roads].sort((y,T)=>y[0]-T[0]||T[3]-y[3])){const[y,T,E,R,P,F]=M,L=R/10,N=Vu(M),I=(E&hc)!==0,[W,q]=l.get(M)??[],G=nM(F,I&&(W||q)?1.8:y<=3?6:5,N),Z=G.length/2;if(Z<2)continue;const j=T===0&&y<=1?Qv:jv[T],U=T===0?1:0,V=eM[y],O=t.yAt(G[0],G[1]),J=t.yAt(G[Z*2-2],G[Z*2-1]),et=new Float32Array(Z);for(let dt=1;dt<Z;dt++)et[dt]=et[dt-1]+Math.hypot(G[dt*2]-G[dt*2-2],G[dt*2+1]-G[dt*2-1]);const st=et[Z-1]||1,ct=(J-O)/st,St=Math.PI/st,Nt=Math.min(9,st/2),rt=new Float32Array(Z*3),ot=new Float32Array(Z*3),Ct=new Float32Array(Z*3);for(let dt=0;dt<Z;dt++){const vt=G[dt*2],yt=G[dt*2+1],Kt=Math.max(dt-1,0),Dt=Math.min(dt+1,Z-1);let oe=G[Dt*2]-G[Kt*2],B=G[Dt*2+1]-G[Kt*2+1];const Yt=Math.hypot(oe,B)||1;oe/=Yt,B/=Yt;let Wt=1;if(dt>0&&dt<Z-1){const nt=G[dt*2]-G[dt*2-2],at=G[dt*2+1]-G[dt*2-1],_t=Math.hypot(nt,at)||1;Wt=1/Math.max(.6,(nt*oe+at*B)/_t)}const Jt=dt===0?W:dt===Z-1?q:void 0,mt=(Jt==null?void 0:Jt.hx)??-B*(L/2)*Wt,pe=(Jt==null?void 0:Jt.hz)??oe*(L/2)*Wt,It=et[dt],kt=L/2,D=I?O+ct*It+V+Math.sin(St*It):0,A=nt=>D+Bd(W,It,Nt,ct+St,1,nt)+Bd(q,st-It,Nt,ct-St,-1,nt),K=(N==null?void 0:N.deckLift(It,V))??V,ut=(nt,at,_t)=>(N!=null&&N.weight(It)?N.ground(t,nt,at,It,_t):t.yAt(nt,at))+K,it=I?A(1):ut(vt,yt,0),pt=I?A(0):ut(vt+mt,yt+pe,kt),xt=I?A(2):ut(vt-mt,yt-pe,kt);rt.set([vt+mt,pt,yt+pe],dt*3),ot.set([vt,it,yt],dt*3),Ct.set([vt-mt,xt,yt-pe],dt*3)}const Bt=y<=1&&!(E&Nd)&&st>20,se=Bt?new qv(r,o,tM):void 0;if(Bt){let dt=0;for(let vt=4;vt<st-4;vt+=12){for(;dt<Z-2&&et[dt+1]<vt;)dt++;const yt=(vt-et[dt])/(et[dt+1]-et[dt]||1),Kt=ot[dt*3]+(ot[dt*3+3]-ot[dt*3])*yt,Dt=ot[dt*3+1]+(ot[dt*3+4]-ot[dt*3+1])*yt,oe=ot[dt*3+2]+(ot[dt*3+5]-ot[dt*3+2])*yt;if(e!=null&&e(Kt,oe))continue;let B=ot[dt*3+3]-ot[dt*3],Yt=ot[dt*3+5]-ot[dt*3+2];const Wt=Math.hypot(B,Yt)||1;B/=Wt,Yt/=Wt;const Jt=(ot[dt*3+4]-ot[dt*3+1])/Wt;se==null||se.addDash(Kt,Dt,oe,B,Yt,Jt)}}const qt=new Kv(t,se??r,.04,!I,I?void 0:h),_e=s.length&&!I?void 0:e;for(let dt=0;dt<Z-1;dt++){const vt=dt*3,yt=vt+3;if(_e){const Kt=_e(ot[vt],ot[vt+2]),Dt=_e(ot[yt],ot[yt+2]);if(Kt&&Dt)continue;if(Kt!==Dt){let oe=0,B=1;for(let ut=0;ut<12;ut++){const it=(oe+B)/2;_e(ot[vt]+(ot[yt]-ot[vt])*it,ot[vt+2]+(ot[yt+2]-ot[vt+2])*it)===Kt?oe=it:B=it}const Yt=(oe+B)/2;for(const ut of[rt,ot,Ct])for(let it=0;it<3;it++)zd[(ut===rt?0:ut===ot?3:6)+it]=ut[vt+it]+(ut[yt+it]-ut[vt+it])*Yt;const[Wt,Jt,mt,pe,It,kt,D,A,K]=zd;Kt?(qt.quad(Wt,Jt,mt,rt[yt],rt[yt+1],rt[yt+2],ot[yt],ot[yt+1],ot[yt+2],pe,It,kt,j,U),qt.quad(pe,It,kt,ot[yt],ot[yt+1],ot[yt+2],Ct[yt],Ct[yt+1],Ct[yt+2],D,A,K,j,U)):(qt.quad(rt[vt],rt[vt+1],rt[vt+2],Wt,Jt,mt,pe,It,kt,ot[vt],ot[vt+1],ot[vt+2],j,U),qt.quad(ot[vt],ot[vt+1],ot[vt+2],pe,It,kt,D,A,K,Ct[vt],Ct[vt+1],Ct[vt+2],j,U));continue}}if(qt.quad(rt[vt],rt[vt+1],rt[vt+2],rt[yt],rt[yt+1],rt[yt+2],ot[yt],ot[yt+1],ot[yt+2],ot[vt],ot[vt+1],ot[vt+2],j,U),qt.quad(ot[vt],ot[vt+1],ot[vt+2],ot[yt],ot[yt+1],ot[yt+2],Ct[yt],Ct[yt+1],Ct[yt+2],Ct[vt],Ct[vt+1],Ct[vt+2],j,U),I){const Kt=z(T===2?7297604:13225162);for(const Dt of[rt,Ct])r.quad(Dt[vt],Dt[vt+1],Dt[vt+2],Dt[yt],Dt[yt+1],Dt[yt+2],Dt[yt],Dt[yt+1]+1.05,Dt[yt+2],Dt[vt],Dt[vt+1]+1.05,Dt[vt+2],Kt),r.quad(Dt[vt],Dt[vt+1]-.7,Dt[vt+2],Dt[yt],Dt[yt+1]-.7,Dt[yt+2],Dt[yt],Dt[yt+1],Dt[yt+2],Dt[vt],Dt[vt+1],Dt[vt+2],z(9276036))}}if(y<=5&&!I)for(const dt of[0,Z-1]){if(dt===0?W:q)continue;const vt=ot[dt*3],yt=ot[dt*3+1],Kt=ot[dt*3+2];if(_e!=null&&_e(vt,Kt))continue;const Dt=dt*3,oe=(dt===0?1:Z-2)*3,B=dt===0?Ct:rt,Yt=dt===0?rt:Ct,Wt=vt-ot[oe],Jt=Kt-ot[oe+2],mt=Math.hypot(Wt,Jt),pe=B[Dt]-vt,It=B[Dt+2]-Kt,kt=L/2,D=(N==null?void 0:N.deckLift(et[dt],V))??V;let A=B[Dt],K=B[Dt+1],ut=B[Dt+2];for(let it=1;it<=8;it++){const pt=it*Math.PI/8,xt=it===8?Yt[Dt]:vt+pe*Math.cos(pt)+Wt/mt*kt*Math.sin(pt),nt=it===8?Yt[Dt+2]:Kt+It*Math.cos(pt)+Jt/mt*kt*Math.sin(pt),at=it===8?Yt[Dt+1]:t.yAt(xt,nt)+D;qt.tri(vt,yt,Kt,A,K,ut,xt,at,nt,j,U),A=xt,K=at,ut=nt}}if(se==null||se.finish(),E&Nd){let dt=0,vt=0;for(let Yt=0;Yt<Z;Yt++)dt+=G[Yt*2],vt+=G[Yt*2+1];dt/=Z,vt/=Z;const yt=Z>>1,Kt=oM(G[0],G[1],G[yt*2],G[yt*2+1],G[Z*2-2],G[Z*2-1]),Dt=Kt?Kt.x:dt,oe=Kt?Kt.z:vt,B=Kt?Kt.r:Math.hypot(G[0]-dt,G[1]-vt);B>3&&B<40&&!(e!=null&&e(Dt,oe))&&!u.some(Yt=>Math.hypot(Yt.x-Dt,Yt.z-oe)<12)&&u.push({x:Dt,z:oe,r:B,w:L})}y<=3&&c.set(M,{cls:y,name:P>=0?i.names[P]:"",width:L,flags:E,pts:ot,length:st})}const d=r.vertexCount*3,f=z(13158078),p=z(7314002),g=z(4943936);for(const M of u){const y=M.r-M.w/2-.3;if(y<1.2)continue;const T=t.yAt(M.x,M.z)+.2;r.frame(M.x,T,M.z,0),r.cyl(0,0,0,y,y,.4,14,f,p),r.blob(0,.9,0,y*.45,.8,y*.45,6,3,g,z(7181400)),r.frame()}const m=new Un({vertexColors:!0,roughness:Fd,metalness:0,side:Ae,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),x=r.build();n&&(x.setAttribute("aAsphalt",x.getAttribute("glow")),n(m,!0));const _=new te(Gd(x),m);_.receiveShadow=!0,_.name="roads";const v=Ps(new fn({vertexColors:!0,...Od})),S=new te(Gd(o.build()),v);S.name="road-markings";const b=new $e;b.add(_,S);const w=i.roads.flatMap(M=>{const y=c.get(M);if(!y)return[];const T=y.pts;for(let E=3;E<T.length;E+=3)a.add(T[E-3],T[E-1],T[E],T[E+2],y.cls,M[4]);return[y]});return{group:b,index:a,paths:w,pavement:x.getAttribute("position").array,pavementEnd:d}}function Gd(i){return i.deleteAttribute("glow"),i}function oM(i,t,e,n,s,r){const o=2*(i*(n-r)+e*(r-t)+s*(t-n));if(Math.abs(o)<.001)return null;const a=i*i+t*t,l=e*e+n*n,c=s*s+r*r,h=(a*(n-r)+l*(r-t)+c*(t-n))/o,u=(a*(s-e)+l*(i-s)+c*(e-i))/o;return{x:h,z:u,r:Math.hypot(i-h,t-u)}}const aM=`
varying vec2 vRoadXZ;
uniform vec2 uRoadWest;
uniform vec2 uRoadEast;
uniform vec2 uRoadFade;
uniform vec3 uRoadColor;
uniform float uRoadRoughness;

float roadEndBlend(vec2 end, float distanceIn) {
  float across = 1.0 - smoothstep(uRoadFade.y * 0.8, uRoadFade.y, abs(vRoadXZ.y - end.y));
  return across * (1.0 - smoothstep(0.0, uRoadFade.x, distanceIn));
}
`,jo={low:320,medium:640,high:1040,ultra:1520},ns=new Y(31,18,31),lM=`
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
}`,cM=`
varying float vOpacity;
void main() {
  gl_FragColor = vec4(0.54, 0.65, 0.76, vOpacity);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;class hM{constructor(t,e,n){H(this,"eye",new Y);H(this,"material");H(this,"streaks");H(this,"wetness",{value:0});H(this,"ultra");H(this,"disposed",!1);H(this,"inletRain",{value:0});this.camera=e,this.ultra=n==="ultra";const s=Math.max(jo.medium,jo[n]),r=Ie(1229870668),o=new Float32Array(s*6),a=new Float32Array(s*8);for(let c=0;c<s;c++){const h=r()*ns.x,u=r()*ns.y,d=r()*ns.z,f=.25+r()*.54,p=.55+r()*.45,g=r();o.set([h,u,d,h,u,d],c*6),a.set([f,0,p,g,f,1,p,g],c*8)}const l=new Ce;l.setAttribute("position",new Te(o,3)),l.setAttribute("aDrop",new Te(a,4)),l.setDrawRange(0,jo[n]*2),this.material=new Ve({uniforms:{uEye:{value:this.eye},uVolume:{value:ns},uDrift:{value:new Pt},uSlant:{value:new Pt},uFall:{value:0},uRain:{value:0},uShelter:{value:0}},vertexShader:lM,fragmentShader:cM,transparent:!0,depthWrite:!1}),this.streaks=new Lh(l,this.material),this.streaks.name="local rain streaks",this.streaks.frustumCulled=!1,this.streaks.renderOrder=4,this.streaks.visible=!1,t.add(this.streaks)}setDensity(t){this.streaks.geometry.setDrawRange(0,jo[t]*2)}shadeAsphalt(t,e=!1,n){const s=t.onBeforeCompile,r=t.customProgramCacheKey();t.customProgramCacheKey=()=>r+(e?":rain-asphalt-mask":":rain-asphalt")+(n?":ends":""),t.onBeforeCompile=(o,a)=>{s.call(t,o,a),o.uniforms.uRoadWetness=this.wetness,e&&(o.vertexShader=`attribute float aAsphalt;
varying float vAsphalt;
`+o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vAsphalt = aAsphalt;`)),n&&(o.uniforms.uRoadWest={value:new Pt(...n.west)},o.uniforms.uRoadEast={value:new Pt(...n.east)},o.uniforms.uRoadFade={value:new Pt(n.distance,n.halfWidth)},o.uniforms.uRoadColor={value:new Lt().setRGB(...Ud)},o.uniforms.uRoadRoughness={value:Fd},o.vertexShader=`varying vec2 vRoadXZ;
`+o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vRoadXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`));const l=e?"(uRoadWetness * vAsphalt)":"uRoadWetness";o.fragmentShader=`uniform float uRoadWetness;
`+(e?`varying float vAsphalt;
`:"")+(n?aM:"")+o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
`+(n?`
float endBlend = max(roadEndBlend(uRoadWest, vRoadXZ.x - uRoadWest.x), roadEndBlend(uRoadEast, uRoadEast.x - vRoadXZ.x));
diffuseColor.rgb = mix(diffuseColor.rgb, uRoadColor, endBlend);
`:"")+"diffuseColor.rgb *= mix(1.0, 0.66, "+l+");").replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
`+(n?`roughnessFactor = mix(roughnessFactor, uRoadRoughness, endBlend);
`:"")+"roughnessFactor = mix(roughnessFactor, 0.56, "+l+");")},t.needsUpdate=!0}update(t,e,n,s=2.9,r=-1,o=!1){if(this.disposed)return;const a=ae.clamp(t,0,1);if(this.wetness.value=ae.clamp(e,0,1),this.inletRain.value=this.ultra?a:0,this.streaks.visible=a>.015,!this.streaks.visible)return;this.camera.getWorldPosition(this.eye);const l=this.material.uniforms,c=12.5;l.uRain.value=a,l.uShelter.value=o?1:0,l.uFall.value=n*c%ns.y,l.uDrift.value.set(n*s%ns.x,n*r%ns.z),l.uSlant.value.set(s/c,r/c)}dispose(){this.disposed||(this.disposed=!0,this.wetness.value=this.inletRain.value=0,this.streaks.removeFromParent(),this.streaks.geometry.dispose(),this.material.dispose())}}const Jn=24,kd=.08,Cr=.07,uM=.35,Lr=1e-8,Pr=.001,uc=(i,t)=>i*65536+t;class dM{constructor(){H(this,"surfaces",new Map);H(this,"index")}add(t,e=t.length){const n=this.surfaces.get(t);e!==n&&(this.surfaces.set(t,e),n!==void 0?this.index=void 0:this.index&&Hd(this.index,t,e))}remove(t){this.surfaces.delete(t)&&(this.index=void 0)}buildIndex(){const t={buffers:[],faces:[],cells:new Map};for(const[e,n]of this.surfaces)Hd(t,e,n);return t}heightAt(t,e){const{buffers:n,faces:s,cells:r}=this.index??(this.index=this.buildIndex()),o=r.get(uc(Math.floor(t/Jn),Math.floor(e/Jn)));let a=-1/0;if(o)for(const l of o)a=Math.max(a,Wd(n[s[l]],s[l+1],t,e,!0));return Number.isFinite(a)?a:null}project(t,e,n){const{buffers:s,faces:r,cells:o}=this.index??(this.index=this.buildIndex()),a=[],l=new Set,c=(n==null?void 0:n.length)??e.length/3,h=f=>{const p=(n?n[f]:f)*3;return new Float64Array([e[p],0,e[p+2]])},u=(f,p,g,m,x,_)=>{const v=(p[2]-f[2])*(g[0]-f[0])-(p[0]-f[0])*(g[2]-f[2]);Math.abs(v)<=Lr||a.push(f[0],m,f[2],p[0],x,p[2],g[0],_,g[2])},d=(f,p)=>{const[g,,m]=f,x=this.heightAt(g,m);return x===null?Cr:Math.max(Cr,x-p+kd-.01)};for(let f=0;f+2<c;f+=3){const p=h(f),g=h(f+1),m=h(f+2);cc(t,p,g,m,(b,w,M)=>{const y=t.yAt(b[0],b[2]),T=t.yAt(w[0],w[2]),E=t.yAt(M[0],M[2]),R=d(b,y),P=d(w,T),F=d(M,E);Math.max(R,P,F)-Math.min(R,P,F)>uM?u(b,w,M,y+Cr,T+Cr,E+Cr):u(b,w,M,y+R,T+P,E+F)});const x=Math.min(p[0],g[0],m[0]),_=Math.max(p[0],g[0],m[0]),v=Math.min(p[2],g[2],m[2]),S=Math.max(p[2],g[2],m[2]);l.clear();for(let b=Math.floor(x/Jn);b<=Math.floor(_/Jn);b++)for(let w=Math.floor(v/Jn);w<=Math.floor(S/Jn);w++){const M=o.get(uc(b,w));if(M)for(const y of M){if(l.has(y))continue;l.add(y);const T=s[r[y]],E=r[y+1],R=T[E],P=T[E+2],F=T[E+3],L=T[E+5],N=T[E+6],I=T[E+8];if(Math.max(R,F,N)<x||Math.min(R,F,N)>_||Math.max(P,L,I)<v||Math.min(P,L,I)>S)continue;const W=fM([p,g,m],R,P,F,L,N,I);if(W.length<3)continue;const q=j=>Wd(T,E,j[0],j[2],!1)+kd,G=W[0],Z=q(G);for(let j=1;j+1<W.length;j++){const U=W[j],V=W[j+1];u(G,U,V,Z,q(U),q(V))}}}}return Float32Array.from(a)}}function Hd({buffers:i,faces:t,cells:e},n,s){const r=i.length;i.push(n);for(let o=0;o+8<s;o+=9){const a=n[o],l=n[o+2],c=n[o+3],h=n[o+5],u=n[o+6],d=n[o+8];if((h-l)*(u-a)-(c-a)*(d-l)<=Lr)continue;const f=t.length;t.push(r,o);const p=Math.floor((Math.min(a,c,u)-Pr)/Jn),g=Math.floor((Math.max(a,c,u)+Pr)/Jn),m=Math.floor((Math.min(l,h,d)-Pr)/Jn),x=Math.floor((Math.max(l,h,d)+Pr)/Jn);for(let _=p;_<=g;_++)for(let v=m;v<=x;v++){const S=uc(_,v);let b=e.get(S);b||e.set(S,b=[]),b.push(f)}}}function Wd(i,t,e,n,s){const r=i[t],o=i[t+1],a=i[t+2],l=i[t+3]-r,c=i[t+5]-a,h=i[t+6]-r,u=i[t+8]-a,d=e-r,f=n-a,p=c*h-l*u,g=(f*h-d*u)/p,m=(c*d-l*f)/p;if(s&&(g<-Lr||m<-Lr||g+m>1+Lr)){const x=i[t+4],_=i[t+7];let v=-1/0;return g<0&&(v=dc(d,f,h,u,o,_)),m<0&&(v=Math.max(v,dc(d,f,l,c,o,x))),g+m>1&&(v=Math.max(v,dc(d-l,f-c,h-l,u-c,x,_))),v}return o+g*(i[t+4]-o)+m*(i[t+7]-o)}function dc(i,t,e,n,s,r){const o=Math.max(0,Math.min(1,(i*e+t*n)/(e*e+n*n)));return(i-o*e)**2+(t-o*n)**2<=Pr**2?s+o*(r-s):-1/0}function fM(i,t,e,n,s,r,o){const a=(c,h,u,d,f)=>(c[0]-h)*(f-u)-(c[2]-u)*(d-h);let l=xn(i,c=>a(c,t,e,n,s),0)[1];return l.length>=3&&(l=xn(l,c=>a(c,n,s,r,o),0)[1]),l.length>=3&&(l=xn(l,c=>a(c,r,o,t,e),0)[1]),l}class Vd{constructor(t,e=1){H(this,"ratio");H(this,"floor");H(this,"sampleSeconds",0);H(this,"sampleFrames",0);H(this,"slowSeconds",0);H(this,"smoothSeconds",0);H(this,"retryAfter",0);H(this,"lastRaise",-1/0);this.ceiling=t,this.ratio=t,this.floor=Math.min(t,e)}resetSampling(){this.sampleSeconds=this.sampleFrames=this.slowSeconds=this.smoothSeconds=0}update(t,e,n){if(e<=0||e>=.25)return this.resetSampling(),!1;if(this.sampleSeconds+=e,this.sampleFrames+=1,this.sampleSeconds<1)return!1;const s=this.sampleSeconds,r=this.sampleFrames/s;return this.sampleSeconds=this.sampleFrames=0,this.slowSeconds=r<n*.9?this.slowSeconds+s:0,this.slowSeconds>=2&&this.ratio>this.floor?(this.ratio=Math.max(this.floor,this.ratio*.75),this.retryAfter=t+(t-this.lastRaise<15?90:20),this.resetSampling(),!0):this.ratio>=this.ceiling||t<this.retryAfter||(this.smoothSeconds=r>=n*.97?this.smoothSeconds+s:0,this.smoothSeconds<8)?!1:(this.ratio=Math.min(this.ceiling,this.ratio/.75),this.lastRaise=t,this.resetSampling(),!0)}}const Dr=-36,fc=170,pM=`
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
`,pc=2;function mM(){const i=new ar(new Uint8Array([128,128,128,255]),1,1);return i.needsUpdate=!0,{fallback:i,maps:Array.from({length:pc},()=>({value:i})),rects:Array.from({length:pc},()=>({value:new Se(0,0,1,0)}))}}function gM({pos:i,nor:t,uv:e,idx:n}){const s=new Ce;return s.setAttribute("position",new Te(i,3)),s.setAttribute("normal",new Te(t,3)),s.setAttribute("uv",new Te(e,2)),s.setIndex(new Te(n,1)),s.computeBoundingSphere(),s}function xM(i,t,e,n,s){const r=new Un({map:e,roughness:.96,metalness:0});r.onBeforeCompile=a=>{a.uniforms.uTide=n;for(let l=0;l<pc;l++)a.uniforms["uDetail"+l]=s.maps[l],a.uniforms["uDetailRect"+l]=s.rects[l];a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform float uTide;
uniform sampler2D uDetail0;
uniform vec4 uDetailRect0;
uniform sampler2D uDetail1;
uniform vec4 uDetailRect1;
${pM}`).replace("#include <map_fragment>",`#include <map_fragment>
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
          float above = vWPos.y / ${Zn.toFixed(2)} - uTide;
          float wet = smoothstep(0.45, 0.03, above);
          diffuseColor.rgb *= mix(1.0, 0.76, wet);
        }`)},r.customProgramCacheKey=()=>"inverloch-terrain-3";const o=new $e;for(const a of t){const l=new te(gM(a),r);l.receiveShadow=!0,l.name="terrain",o.add(l)}return o.add(vM(i),MM(i)),o}function _M(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function vM(i){const t=_M(i),e=t.length,n=[],s=[],r=[],o=new Lt(9074780),a=new Lt(6180669),l=new Lt(3813673),c=[[0,o,a],[1,a,l]];for(let d=0;d<e;d++){const[f,p]=t[d],[g,m]=t[(d+1)%e],x=i.yAt(f,p),_=i.yAt(g,m),v=g-f,S=m-p,b=Math.hypot(v,S)||1,w=-S/b*-1,M=v/b*-1;for(const[y,T,E]of c){const P=y===0?x:x-6,F=y===0?x-6:Dr,L=y===0?_:_-6,N=y===0?_-6:Dr;n.push(f,P,p,g,L,m,g,N,m,f,P,p,g,N,m,f,F,p);for(const I of[T,T,E,T,E,E])s.push(I.r,I.g,I.b);for(let I=0;I<6;I++)r.push(w,0,M)}}const h=new Ce;h.setAttribute("position",new ye(n,3)),h.setAttribute("normal",new ye(r,3)),h.setAttribute("color",new ye(s,3));const u=new te(h,new Un({vertexColors:!0,roughness:1,side:Ae}));return u.name="skirt",u}function MM(i){const t=new $e,e=i.xMax-i.xMin+fc*2,n=i.zMax-i.zMin+fc*2,s=190,r=(i.xMin+i.xMax)/2,o=(i.zMin+i.zMax)/2,a=new te(new qi(e,s,n),new Un({color:1779245,roughness:.75,metalness:.1}));a.position.set(r,Dr-s/2,o),a.receiveShadow=!0,t.add(a);const l=document.createElement("canvas");l.width=2048,l.height=160;const c=l.getContext("2d");c.fillStyle="#1b262d",c.fillRect(0,0,l.width,l.height),c.fillStyle="#e9d9a6",c.textBaseline="middle",c.font="600 78px 'Space Grotesk', system-ui, sans-serif",c.fillText("INVERLOCH",40,84);const h=c.measureText("INVERLOCH").width;c.fillStyle="#9fb4bd",c.font="400 42px 'Space Grotesk', system-ui, sans-serif",c.fillText("Bass Coast, Victoria   ·   38.63° S  145.73° E   ·   Anderson Inlet & Bass Strait",40+h+46,88);const u=new bl(l);u.colorSpace=Oe,u.anisotropy=8;const d=1700,f=new te(new Nn(d,d*(l.height/l.width)),new fn({map:u,toneMapped:!1}));f.position.set(r-e/2+d/2+110,Dr-s/2,o+n/2+.6),t.add(f);const p=document.createElement("canvas");p.width=p.height=256;const g=p.getContext("2d");g.fillStyle="#e9d9a6",g.beginPath(),g.moveTo(128,18),g.lineTo(176,150),g.lineTo(128,122),g.lineTo(80,150),g.closePath(),g.fill(),g.font="700 86px 'Space Grotesk', system-ui, sans-serif",g.textAlign="center",g.fillText("N",128,240);const m=new bl(p);m.colorSpace=Oe;const x=new te(new Nn(130,130),new fn({map:m,transparent:!0,toneMapped:!1}));return x.rotation.x=-Math.PI/2,x.position.set(i.xMax+fc/2,Dr+.6,i.zMin+120),t.add(x),t}const Xd=[[-.375,-.125],[.125,-.375],[.375,.125],[-.125,.375]],SM=4e3,yM=12e3;class bM{constructor(t,e){H(this,"size",new Pt);H(this,"screen",new Jr);H(this,"screenCamera",new wo);H(this,"blend",new Ve({depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{previous:{value:null},currentFrame:{value:null},weight:{value:1}},vertexShader:`
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
    `}));H(this,"quad",new te(new Nn(2,2),this.blend));H(this,"history");H(this,"sample");H(this,"capture");this.renderer=t,this.onFinish=e,this.quad.frustumCulled=!1,this.screen.add(this.quad)}get pending(){return!!this.capture&&!this.capture.encoding}start(){return this.capture?Promise.reject(new Error("An antialiased photo is already being captured.")):new Promise((t,e)=>{const n=this.capture={resolve:t,reject:e,deadline:performance.now()+yM,samples:0,bestSamples:0,encoding:!1};this.armTimeout(n)})}draw(t,e,n){var a,l;const s=this.capture;if(!s||s.encoding)return!1;this.renderer.getDrawingBufferSize(this.size);const{x:r,y:o}=this.size;(((a=this.history)==null?void 0:a.image.width)!==r||((l=this.history)==null?void 0:l.image.height)!==o)&&(this.releaseTextures(),this.history=new Ph(r,o),this.sample=new Ph(r,o),this.blend.uniforms.previous.value=this.history,this.blend.uniforms.currentFrame.value=this.sample,n=!0),n&&(s.samples=0);try{return this.drawSample(t,e,s.samples),s.samples++,s.samples===Xd.length?this.encode(s):(this.renderer.copyFramebufferToTexture(this.history),s.samples>s.bestSamples&&(s.bestSamples=s.samples,this.armTimeout(s))),!0}catch{return this.cancel("The browser could not capture an antialiased photo."),!1}}drawSample(t,e,n){const[s,r]=Xd[n],o=e.projectionMatrix.elements,a=o[8],l=o[9];o[8]+=2*s/this.size.x,o[9]+=2*r/this.size.y,e.projectionMatrixInverse.copy(e.projectionMatrix).invert();const c=this.renderer.shadowMap.autoUpdate;n>0&&(this.renderer.shadowMap.autoUpdate=!1);try{this.renderer.render(t,e)}finally{o[8]=a,o[9]=l,e.projectionMatrixInverse.copy(e.projectionMatrix).invert(),this.renderer.shadowMap.autoUpdate=c}n>0&&(this.renderer.copyFramebufferToTexture(this.sample),this.blend.uniforms.weight.value=1/(n+1),this.renderer.render(this.screen,this.screenCamera))}encode(t){t.encoding=!0,this.armTimeout(t),this.releaseTextures(),this.onFinish(),this.renderer.domElement.toBlob(e=>{this.finish(t)&&(e?t.resolve(e):t.reject(new Error("The browser did not write the antialiased PNG.")))},"image/png")}armTimeout(t){window.clearTimeout(t.timeout);const e=Math.min(SM,Math.max(0,t.deadline-performance.now())),n=t.encoding?"The browser did not finish writing the antialiased PNG.":"The view did not stay still long enough to save an antialiased photo.";t.timeout=window.setTimeout(()=>this.cancel(n),e)}cancel(t){const e=this.capture;!e||!this.finish(e)||e.reject(new Error(t))}finish(t){return this.capture!==t?!1:(window.clearTimeout(t.timeout),this.capture=void 0,t.encoding||(this.releaseTextures(),this.onFinish()),!0)}releaseTextures(){var t,e;(t=this.history)==null||t.dispose(),(e=this.sample)==null||e.dispose(),this.history=this.sample=void 0,this.blend.uniforms.previous.value=null,this.blend.uniforms.currentFrame.value=null}dispose(){this.cancel("The Inverloch view was closed before saving the photo."),this.quad.geometry.dispose(),this.blend.dispose()}}const mc="inverloch-driving-aa",Yd=[[-.25,-.25],[.25,.25],[-.25,.25],[.25,-.25]],Zd=2560*1080;function wM(i){try{localStorage.setItem(mc,i)}catch{}const t=new URL(window.location.href);if(t.searchParams.has("invAA")){t.searchParams.set("invAA",i);try{history.replaceState(history.state,"",t)}catch{}}}function EM(){const i=new URLSearchParams(window.location.search).get("invAA");try{return(i==="temporal"||i==="msaa")&&localStorage.setItem(mc,i),(i==="temporal"||i==="msaa"?i:localStorage.getItem(mc))==="temporal"}catch{return i==="temporal"}}const TM=`
  varying vec2 vUv;
  uniform sampler2D currentColor, currentDepth, previousColor, previousDepth;
  uniform vec2 pixelSize, previousRange;
  uniform mat4 clipToPrevious;
  void main() {
    vec4 current = texture2D(currentColor, vUv);
    gl_FragColor = current;
    float depth = texture2D(currentDepth, vUv).r;
    if (depth >= 1.0) return; // sky and other surfaces without a stable depth
    vec4 oldClip = clipToPrevious * vec4(vUv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
    if (oldClip.w <= 0.0) return;
    vec3 oldNdc = oldClip.xyz / oldClip.w;
    vec2 uv = oldNdc.xy * .5 + .5;
    if (any(lessThan(uv, pixelSize * .5)) || any(greaterThan(uv, 1.0 - pixelSize * .5)) || abs(oldNdc.z) >= 1.0) return;
    // Compare metres at the old camera. Far-plane depth differences are tiny in device coordinates.
    float n = previousRange.x, f = previousRange.y;
    float expected = n * f / (f - (.5 * oldNdc.z + .5) * (f - n));
    float seen = n * f / (f - texture2D(previousDepth, uv).r * (f - n));
    if (abs(seen - expected) > max(.045, expected * .004)) return;
    vec3 prev = texture2D(previousColor, uv).rgb;
    vec3 x1 = texture2D(currentColor, vUv + vec2(pixelSize.x, 0.)).rgb;
    vec3 x2 = texture2D(currentColor, vUv - vec2(pixelSize.x, 0.)).rgb;
    vec3 y1 = texture2D(currentColor, vUv + vec2(0., pixelSize.y)).rgb;
    vec3 y2 = texture2D(currentColor, vUv - vec2(0., pixelSize.y)).rgb;
    vec3 lo = min(current.rgb, min(min(x1,x2),min(y1,y2)));
    vec3 hi = max(current.rgb, max(max(x1,x2),max(y1,y2)));
    // Surface motion and transparency need a reactive response even at matching depths.
    vec3 delta = abs(prev - current.rgb);
    float difference = max(delta.r, max(delta.g, delta.b));
    float history = .65 * (1. - smoothstep(.045, .16, difference));
    vec4 clipped = vec4(clamp(prev, lo, hi), current.a);
    gl_FragColor.rgb = sRGBTransferOETF(mix(sRGBTransferEOTF(current), sRGBTransferEOTF(clipped), history)).rgb;
  }
`;class Kd{constructor(t){H(this,"gl");H(this,"scene",new Jr);H(this,"screenCamera",new wo);H(this,"size",new Pt);H(this,"previousMatrix",new ie);H(this,"inverseMatrix",new ie);H(this,"previousPosition",new Y);H(this,"previousOrientation",new _n);H(this,"material",new Ve({depthWrite:!1,depthTest:!1,toneMapped:!1,uniforms:{currentColor:{value:null},previousColor:{value:null},currentDepth:{value:null},previousDepth:{value:null},pixelSize:{value:new Pt},previousRange:{value:new Pt},clipToPrevious:{value:new ie}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:TM}));H(this,"quad",new te(new Nn(2,2),this.material));H(this,"targets");H(this,"current",0);H(this,"sequence",0);H(this,"last",-1/0);H(this,"unsupported",!1);this.renderer=t,this.gl=t.getContext(),this.quad.frustumCulled=!1,this.scene.add(this.quad)}get usingFallback(){const{width:t,height:e}=this.renderer.domElement;return this.unsupported||!t||!e||t*e>Zd}invalidate(){this.last=-1/0}target(t,e){const n=new Ki(t,e,ki);return n.format=ei,new Cn(t,e,{depthTexture:n,stencilBuffer:!0,minFilter:ke,magFilter:ke})}copyCanvas(t,e){const n=this.gl;this.renderer.setRenderTarget(t);try{n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.blitFramebuffer(0,0,t.width,t.height,0,0,t.width,t.height,e,n.NEAREST)}finally{this.renderer.setRenderTarget(null)}}releaseTargets(){if(this.targets){this.targets.forEach(r=>r.dispose()),this.targets=void 0;const{currentColor:t,previousColor:e,currentDepth:n,previousDepth:s}=this.material.uniforms;t.value=e.value=n.value=s.value=null}this.invalidate()}draw(t,e,n){var m;if(this.unsupported)return!1;const{x:s,y:r}=this.renderer.getDrawingBufferSize(this.size);if(s*r>Zd||!s||!r)return this.releaseTargets(),!1;const o=this.gl;if((((m=this.targets)==null?void 0:m[0].width)!==s||this.targets[0].height!==r)&&(this.releaseTargets(),this.targets=[this.target(s,r),this.target(s,r)],this.copyCanvas(this.targets[0],o.DEPTH_BUFFER_BIT),o.getError()!==o.NO_ERROR))return this.unsupported=!0,this.releaseTargets(),!1;const a=this.targets[this.current],l=this.targets[1-this.current],c=n-this.last<160&&this.previousPosition.distanceToSquared(e.position)<100&&Math.abs(this.previousOrientation.dot(e.quaternion))>.985,[h,u]=c?Yd[this.sequence++%Yd.length]:[0,0],d=e.projectionMatrix.elements,f=d[8],p=d[9],g=this.material.uniforms;try{d[8]+=2*h/s,d[9]+=2*u/r,e.projectionMatrixInverse.copy(e.projectionMatrix).invert(),this.renderer.render(t,e),this.copyCanvas(a,o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),this.inverseMatrix.multiplyMatrices(e.matrixWorld,e.projectionMatrixInverse),g.clipToPrevious.value.multiplyMatrices(this.previousMatrix,this.inverseMatrix),this.previousMatrix.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse)}finally{d[8]=f,d[9]=p,e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}return c&&(g.currentColor.value=a.texture,g.currentDepth.value=a.depthTexture,g.previousColor.value=l.texture,g.previousDepth.value=l.depthTexture,g.pixelSize.value.set(1/s,1/r),this.renderer.render(this.scene,this.screenCamera),this.copyCanvas(a,o.COLOR_BUFFER_BIT)),g.previousRange.value.set(e.near,e.far),this.previousPosition.copy(e.position),this.previousOrientation.copy(e.quaternion),this.last=n,this.current=1-this.current,!0}dispose(){this.releaseTargets(),this.material.dispose(),this.quad.geometry.dispose()}}function $n(i,t,e,n,s,r,o,a,l,c){const h=new Rl(1,0),u=h.getAttribute("position"),d=[];for(let f=0;f<u.count;f++){const p=u.getX(f),g=u.getY(f),m=u.getZ(f),x=Math.sin(p*12.9898+g*78.233+m*37.719+a*4.1)*43758.5453,_=.8+(x-Math.floor(x))*.42;d.push([t+p*s*_,e+g*r*(g<0?.75:_),n+m*o*_])}for(let f=0;f<d.length;f+=3){const[p,g,m]=[d[f],d[f+1],d[f+2]],x=ae.clamp(((p[1]+g[1]+m[1])/3-(e-r))/(2*r),0,1);i.tri(p[0],p[1],p[2],g[0],g[1],g[2],m[0],m[1],m[2],vr(l,c,x))}h.dispose()}function mi(i){const t=i.build();return t.deleteAttribute("glow"),t}function AM(){const i=[];let t=new re;return $n(t,0,.44,0,.82,.56,.82,1,z(3098152),z(7507285)),i.push(mi(t)),t=new re,t.cyl(0,0,0,.04,.026,.56,4,z(11905429)),$n(t,0,.72,0,.36,.3,.36,2,z(4151352),z(9349240)),$n(t,.17,.52,.1,.24,.19,.24,3,z(3887925),z(8362603)),i.push(mi(t)),t=new re,t.cyl(0,0,0,.055,.04,.4,4,z(7297608)),$n(t,0,.64,0,.46,.38,.46,4,z(3695150),z(9091170)),i.push(mi(t)),t=new re,t.cyl(0,0,0,.035,.03,.16,4,z(5916728)),t.cyl(0,.12,0,.23,.11,.42,6,z(2506539)),t.cyl(0,.5,0,.15,0,.5,6,z(4020796)),i.push(mi(t)),i}function qd(i){const t=[],e=i?5:7;let n=new re;return n.blob(0,.48,0,.81,.52,.81,e,2,z(4018735),z(7507285)),t.push(mi(n)),n=new re,i||(n.cyl(0,0,0,.04,.026,.56,3,z(11905429)),n.blob(.17,.52,.1,.24,.19,.24,4,2,z(3887925),z(8362603))),n.blob(i?.05:0,.72,0,i?.39:.36,.3,.36,e,2,z(4546110),z(9349240)),t.push(mi(n)),n=new re,i||n.cyl(0,0,0,.055,.04,.4,3,z(7297608)),n.blob(0,.64,0,.46,.38,.46,e,2,z(3695150),z(9091170)),t.push(mi(n)),n=new re,i?n.cyl(0,.15,0,.23,0,.85,e,z(4020796)):(n.cyl(0,.12,0,.23,.11,.42,4,z(2506539)),n.cyl(0,.5,0,.15,0,.5,5,z(4020796))),t.push(mi(n)),t}function gi(i,t,e,n,s,r,o){const a=new Y(...t),l=new Y(...e),c=l.clone().sub(a).normalize(),h=new Y(c.z,0,-c.x);h.lengthSq()<1e-6&&h.set(1,0,0),h.normalize();const u=c.clone().cross(h),d=(f,p,g)=>{const m=g*2*Math.PI/5,x=f.clone().addScaledVector(h,p*Math.cos(m)).addScaledVector(u,p*Math.sin(m));return[x.x,x.y,x.z]};for(let f=0;f<5;f++)i.quad(...d(a,n,f),...d(a,n,f+1),...d(l,s,f+1),...d(l,s,f),f%3===0?r:o)}function RM(i,t){const e=new re,n=t?1:-1,s=31+i*17+t*41;if(i===1){const r=z(9537397),o=z(13682093),a=z(3887925),l=z(9349240),c=[.025*n,.39,.015],h=[-.09*n,.67,-.025],u=[-.2*n,t?.91:.87,-.09],d=[.225*n,t?.61:.7,.1],f=[.06*n,.8,t?.2:.16];gi(e,[0,-.015,0],c,.054,.037,r,o),gi(e,[c[0],c[1]-.018,c[2]],h,.038,.023,r,o),gi(e,[h[0],h[1]-.018,h[2]],u,.024,.007,r,o),gi(e,[c[0],c[1]-.035,c[2]],d,.025,.007,r,o),gi(e,[h[0],h[1]-.055,h[2]],f,.02,.006,r,o),$n(e,...u,.25,.15,.24,s,a,l),$n(e,...d,.2,.15,.215,s+1,a,l),$n(e,...f,t?.17:.205,.13,.2,s+2,a,l)}else{const r=z(5326391),o=z(8681061),a=z(3098152),l=z(7507285),c=[-.04*n,.23,-.03],h=[-.25*n,t?.57:.62,-.1],u=[.405*n,t?.44:.41,.13],d=[-.08*n,.4,t?.34:.36];gi(e,[0,-.015,0],c,.073,.042,r,o),gi(e,[c[0],c[1]-.06,c[2]],h,.044,.01,r,o),gi(e,[c[0],c[1]-.09,c[2]],u,.039,.009,r,o),gi(e,[c[0],c[1]-.07,c[2]],d,.033,.009,r,o),$n(e,...h,.57,.39,t?.45:.54,s,a,l),$n(e,...u,.45,.29,.45,s+1,a,l),$n(e,...d,.38,.27,.42,s+2,a,l)}return mi(e)}const CM=32,gc=6,Jd=48,LM=64,PM=32,DM=4,IM=30,Ws=i=>Math.floor(i/CM),$d=(i,t)=>i*65536+t;class NM{constructor(t,e,n){H(this,"cells",new Map);H(this,"meshes");H(this,"active",new Map);H(this,"previous",new Y(1/0,1/0,1/0));H(this,"hidden",new ie().makeScale(0,0,0));H(this,"tint",new Lt);H(this,"range",0);this.roads=n,this.meshes=Array.from({length:4},(s,r)=>{const o=new De(RM(r>>1,r&1),e,Jd);return o.name=["roadside-scrub","roadside-gum"][r>>1],o.instanceMatrix.setUsage(Hi),o.count=0,o.visible=!1,o.castShadow=!0,t.add(o),o})}consider(t,e,n,s,r,o){if(s>1)return;let a=Math.imul(Math.round(t*4),73244475)^Math.imul(Math.round(n*4),668265261)^s;a=Math.imul(a^a>>>16,73244475)>>>0;const l=$d(Ws(t),Ws(n)),c=this.cells.get(l);if((c==null?void 0:c.length)===gc&&a>=c[gc-1].rank)return;const h=this.roads.nearest(t,n,IM);if(!h||h.cls>3)return;r.instanceMatrix.setUsage(Hi);const u={x:t,y:e,z:n,style:s*2+(a>>>8&1),rank:a,fallback:r,slot:o};c?(c.push(u),c.sort((d,f)=>d.rank-f.rank),c.length>gc&&c.pop()):this.cells.set(l,[u])}setFallback(t,e){var s;const n=t.fallback.instanceMatrix;t.fallback.setMatrixAt(t.slot,e),((s=n.updateRanges[0])==null?void 0:s.count)!==n.array.length&&(n.updateRanges.length>=48?(n.clearUpdateRanges(),n.addUpdateRange(0,n.array.length)):n.addUpdateRange(t.slot*16,16)),n.needsUpdate=!0}show(t){if(t.length===this.active.size&&t.every(n=>this.active.has(n)))return;const e=new Set(t);for(const[n,s]of this.active)e.has(n)||(this.setFallback(n,s),this.active.delete(n));for(const n of this.meshes)n.count=0;for(const n of t){let s=this.active.get(n);s||(s=new ie,n.fallback.getMatrixAt(n.slot,s),this.active.set(n,s),this.setFallback(n,this.hidden));const r=this.meshes[n.style],o=r.count++;r.setMatrixAt(o,s),n.fallback.getColorAt(n.slot,this.tint),r.setColorAt(o,this.tint)}for(const n of this.meshes)n.visible=n.count>0,n.visible&&(n.instanceMatrix.needsUpdate=!0,n.instanceColor.needsUpdate=!0,n.computeBoundingSphere())}update(t,e,n){const s=e<=PM?Math.min(LM,n*.65):0;if(s===this.range&&this.previous.distanceToSquared(t)<DM**2){let o=!0;for(const a of this.active.keys())if(!a.fallback.visible){o=!1;break}if(o)return}if(this.range=s,this.previous.copy(t),!s){this.show([]);return}const r=[];for(let o=Ws(t.x-s);o<=Ws(t.x+s);o++)for(let a=Ws(t.z-s);a<=Ws(t.z+s);a++)for(const l of this.cells.get($d(o,a))??[]){if(!l.fallback.visible)continue;const c=(t.x-l.x)**2+(t.y-l.y)**2+(t.z-l.z)**2;c<s**2&&r.push({tree:l,distance:c})}r.sort((o,a)=>o.distance-a.distance||o.tree.rank-a.tree.rank),this.show(r.slice(0,Jd).map(({tree:o})=>o))}}function*jd(i,t,e,n=()=>!1,s){const r=new $e;r.name="trees";const o=[AM(),qd(!1),qd(!0)],a=[],l=new So({vertexColors:!0}),c=s&&e>.35?new NM(r,l,s):void 0,h=650,u=new Map,d=i.trees,f=Ie(88);for(let b=0;b<d.length;b+=Xu){if(b/Xu%256===0&&(yield),e<1&&f()>e||n(d[b]/4,d[b+1]/4))continue;const M=`${d[b+2]>>8}:${Math.floor(d[b]/4/h)}:${Math.floor(d[b+1]/4/h)}`;let y=u.get(M);y||u.set(M,y=[]),y.push(b)}const p=new ie,g=new _n,m=new Y,x=new Y,_=new Y(0,1,0),v=new Lt;let S=0;for(const[b,w]of u){const M=Number(b.split(":")[0]),y=o.map((T,E)=>{const R=new De(T[M],l,w.length);return R.name=["tree-near","tree-mid","tree-far"][E],R});for(let T=0;T<w.length;T++){T%64===0&&(yield);const E=w[T],R=d[E]/4,P=d[E+1]/4,F=(d[E+2]&255)/10,L=Ie(E*2654435761+11);x.set(R,t.yAt(R,P)-.15,P),g.setFromAxisAngle(_,L()*Math.PI*2);const N=.85+L()*.35;m.set(F*N,F,F*(.85+L()*.35)),p.compose(x,g,m);const I=.8+L()*.34;v.setRGB(I*(.94+L()*.14),I,I*(.9+L()*.12));for(const W of y)W.setMatrixAt(T,p),W.setColorAt(T,v);c==null||c.consider(R,x.y,P,M,y[0],T)}a.push(new Md(y.map(T=>[T]),r)),S+=w.length}return{group:r,count:S,dispose(){r.removeFromParent();const b=new Set(o.flat());r.traverse(w=>{w instanceof De&&(b.add(w.geometry),w.dispose())});for(const w of b)w.dispose();l.dispose()},updateLod(b,w,M){for(const y of a)y.update(b,w,M);c==null||c.update(b,w,M[0])}}}function UM(...i){const t=jd(...i);let e=t.next();for(;!e.done;)e=t.next();return e.value}async function FM(i,...t){const e=jd(...t);for(;!i.aborted;){const n=performance.now()+3;let s=e.next();for(;!s.done&&performance.now()<n;)s=e.next();if(s.done)return s.value;await new Promise(r=>requestAnimationFrame(()=>r()))}return null}function OM(i){return new Promise(t=>{const e=()=>{cancelAnimationFrame(n),i.removeEventListener("abort",e),t()},n=requestAnimationFrame(e);i.addEventListener("abort",e,{once:!0})})}async function zM(i,t,e,n){var f;if(n.aborted||!i.extensions.has("KHR_parallel_shader_compile"))return;const s=p=>i.properties.get(p),r=i.renderLists.get(t,0),o=new Set,a=[];for(const p of[...r.opaque,...r.transmissive,...r.transparent]){const{object:g,material:m}=p,x=s(m).currentProgram;if(!x)continue;const _=g,v=x.id+":"+!!_.isInstancedMesh+":"+!!_.instanceColor;if(!o.has(v)&&(o.add(v),a.push({object:g,material:m}),a.length>=48))break}if(!a.length)return;const l=new Jr,c=new jh;c.castShadow=!0,l.add(c,new Yh),l.environment=t.environment,l.fog=t.fog;const h=[],u=new Set,d=()=>{n.removeEventListener("abort",d);for(const p of h.splice(0))p.dispose()};n.addEventListener("abort",d,{once:!0});try{let p=0;const g=performance.now()+2500;for(;!n.aborted&&(p<a.length||u.size)&&(await OM(n),!(n.aborted||performance.now()>g||i.getContext().isContextLost()));){if(p<a.length&&u.size<4){const{object:m,material:x}=a[p++],v=(x instanceof Ve?Object.assign(Object.create(x),{uniforms:{}}):x).clone();if(v instanceof Ve&&x instanceof Ve)for(const[w,M]of Object.entries(x.uniforms))v.uniforms[w]={...M};v.onBeforeCompile=x.onBeforeCompile,v.customProgramCacheKey=()=>x.customProgramCacheKey(),h.push(v);const S=Object.assign(Object.create(m),{children:[],material:v}),b=i.shadowMap.enabled;try{i.shadowMap.enabled=!0,i.compile(S,e,l)}finally{i.shadowMap.enabled=b}for(const w of((f=s(v).programs)==null?void 0:f.values())??[])u.add(w)}for(const m of u)if(m.isReady()){m.getUniforms(),m.getAttributes(),u.delete(m);break}}if(!n.aborted)return d}catch{}d()}const BM=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,GM=`
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
}`;function kM(i,t,e){const n=i.w*i.h,s=new Uint16Array(n*2);for(let p=0;p<n;p++)s[p*2]=mh.toHalfFloat(i.raw[p]),s[p*2+1]=mh.toHalfFloat(i.exposure[p]);const r=new ar(s,i.w,i.h,yi,An);r.minFilter=r.magFilter=ke,r.wrapS=r.wrapT=Gn,r.needsUpdate=!0;const o={tField:{value:r},uSize:{value:new Pt(i.sizeX,i.sizeZ)},uTide:t,uTime:{value:0},uSunDir:{value:new Y(.4,.8,.3).normalize()},uSunColor:{value:new Lt(16773848)},uShallow:{value:new Lt(7129789)},uDeep:{value:new Lt(937848)},uSky:{value:new Lt(12573938)},uFoam:{value:1}};e&&(o.uInletRain=e);const a=new Ve({uniforms:o,vertexShader:BM,fragmentShader:GM,transparent:!0,depthWrite:!1,defines:e?{RAIN_RIPPLES:1}:{}}),l=new Nn(i.xMax-i.xMin,i.zMax-i.zMin);l.rotateX(-Math.PI/2);const c=new te(l,a);c.position.set((i.xMin+i.xMax)/2,t.value*Zn,(i.zMin+i.zMax)/2),c.renderOrder=2,c.name="water";const h=new te(new Ce,new fn({color:1929103,transparent:!0,opacity:.8,side:Ae,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));h.renderOrder=1,h.name="water-edge";const u=[];for(let p=0;p<i.nx;p++)u.push([i.xMin+p*i.dx,i.zMin]);for(let p=1;p<i.nz;p++)u.push([i.xMax,i.zMin+p*i.dz]);for(let p=i.nx-2;p>=0;p--)u.push([i.xMin+p*i.dx,i.zMax]);for(let p=i.nz-2;p>=1;p--)u.push([i.xMin,i.zMin+p*i.dz]);const d=u.map(([p,g])=>i.yAt(p,g)),f=p=>{t.value=p;const g=p*Zn;c.position.y=g;const m=[],x=u.length;for(let v=0;v<x;v++){const S=(v+1)%x,b=d[v],w=d[S];if(b>=g&&w>=g)continue;const[M,y]=u[v],[T,E]=u[S],R=Math.min(b,g),P=Math.min(w,g);m.push(M,g,y,T,g,E,T,P,E,M,g,y,T,P,E,M,R,y)}h.geometry.dispose();const _=new Ce;_.setAttribute("position",new ye(m,3)),h.geometry=_};return f(t.value),{mesh:c,skirt:h,uniforms:o,setTide:f}}const HM="detail-abeckett-ultra-v1.json",xc=-38.63351,Qd=145.72774,WM=111320*Math.cos(xc*Math.PI/180);class VM{constructor(t,e,n,s,r){H(this,"group");H(this,"daylight",{value:1});H(this,"request");H(this,"retryAt",0);H(this,"origin");H(this,"sx");H(this,"sz");this.scene=t,this.manifest=e,this.ground=s,this.redraw=r,this.origin=n(xc,Qd);const o=n(xc-100/110540,Qd+100/WM);this.sx=(o[0]-this.origin[0])/100,this.sz=(o[1]-this.origin[1])/100}update(t,e){this.daylight.value=Math.min(1,.08+e*.3);const n=this.origin[0]+22*this.sx,s=this.origin[1]+37*this.sz,r=Math.hypot(t.x-n,t.y-this.ground(n,s),t.z-s);if(this.group)this.group.visible=r<(this.group.visible?155:130);else if(r>220&&this.request)this.request.abort(),this.request=void 0;else if(r<155&&!this.request&&performance.now()>=this.retryAt){const o=this.request=new AbortController;this.load(o)}}async load(t){try{const e=new URL(HM,new URL(this.manifest,document.baseURI)),n=await fetch(e,{signal:t.signal});if(!n.ok)throw new Error(String(n.status));const s=await n.json();if(t.signal.aborted)return;const r=this.build(s);this.group=r,this.scene.add(r),this.redraw()}catch{t.signal.aborted||(this.retryAt=performance.now()+3e4)}finally{this.request===t&&(this.request=void 0)}}build(t){const e=new re,n=new re,s=new re,r=z(6842465),o=z(10196618),a=z(3883588),l=z(12039851),c=z(16777215);for(const[d,f,p,g,m,x,_]of t.fronts){const v=Math.hypot(p-d,g-f),S=Math.atan2(m,x);e.frame(d,0,f,S),n.frame(d,0,f,S);const b=E=>3.15+(_?.24*(1-E/3.2):0);for(const E of[.32,1.58,2.97]){const R=b(E);e.box(.05,R-.09,E-.045,v-.05,R,E+.045,r)}const w=Math.max(2,Math.round(v/1.25));for(let E=0;E<=w;E++){const R=.095+E*(v-.19)/w;e.quad(R,b(.22)-.06,.22,R,b(3.05)-.06,3.05,R+.07,b(3.05)-.06,3.05,R+.07,b(.22)-.06,.22,o)}e.box(.055,3.045,3.14,v-.055,3.105,3.3,r);const M=v-1.7,y=Math.max(2,Math.round((v-1.4)/2.1)),T=_?.22:.34;for(let E=0;E<y;E++){const R=.18+M*E/y+.055,P=.18+M*(E+1)/y-.055;n.quad(R,.57,T,P,.57,T,P,2.72,T,R,2.72,T,c),e.box(R-.035,.51,T-.045,P+.035,.56,T+.04,a),e.box(R-.035,2.25,T-.025,P+.035,2.28,T+.02,l)}e.box(v-1.17,.93,T+.05,v-1.135,1.35,T+.085,l),e.box(v-1.28,.13,.15,v-.2,.17,.42,o)}for(const[d,f,p,g]of t.trees){const m=Ie(g+431),x=[5466952,7701590,8819806,6781777].map(z);s.frame(d,0,f);for(let _=0;_<90;_++){const v=m()*Math.PI*2,S=(1.05+m()*2.25)*p,b=S*Math.sin(v),w=S*Math.cos(v),M=(6.55+1.6*m()-.35*S)*p,y=(.11+.22*m())*p,T=(.16+.28*m())*p,E=x[_%4];s.tri(b-y,M+T,w,b+y,M+.42*T,w+.1,b,M-T,w+.18,E)}}const h=new $e;h.name="A'Beckett Street close detail";const u=(d,f,p)=>{const g=d.build(),m=g.getAttribute("position");for(let _=0;_<m.count;_++){const v=this.origin[0]+m.getX(_)*this.sx,S=this.origin[1]+m.getZ(_)*this.sz;m.setXYZ(_,v,this.ground(v,S)+.08+m.getY(_),S)}g.deleteAttribute("glow"),g.computeBoundingSphere();const x=new te(g,f);x.castShadow=p,x.receiveShadow=p,h.add(x)};return u(e,new Un({vertexColors:!0,roughness:.73,metalness:.1,side:Ae}),!0),u(s,new So({vertexColors:!0,side:Ae}),!0),u(n,new Ve({uniforms:{daylight:this.daylight},transparent:!0,depthWrite:!1,vertexShader:`varying vec3 world, facing;
        void main(){vec4 p=modelMatrix*vec4(position,1.);world=p.xyz;facing=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*p;}`,fragmentShader:`varying vec3 world, facing; uniform float daylight;
        void main(){vec3 eye=normalize(cameraPosition-world),n=normalize(facing),r=reflect(-eye,n);
          float sky=smoothstep(-.09,.27,r.y),f=pow(1.-clamp(dot(eye,n),0.,1.),3.);
          gl_FragColor=vec4(daylight*mix(vec3(.13,.18,.15),vec3(.54,.68,.78),sky),.045+.19*f+.085*sky);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),!1),h}dispose(){var t;(t=this.request)==null||t.abort()}}const tf=-.9,ef=1.3,nf=.2,Vs={x:260,z:150,dist:3900,polar:55,azimuth:16},sf={ultra:{step:1,trees:1,shadow:4096,pixelRatio:2},high:{step:1,trees:1,shadow:4096,pixelRatio:2},medium:{step:2,trees:.6,shadow:2048,pixelRatio:1.3},low:{step:2,trees:.35,shadow:0,pixelRatio:1}},XM={ultra:{cars:[200,400,1100],trees:[260,770,4e3]},high:{cars:[170,340,1050],trees:[235,710,3800]},medium:{cars:[120,270,820],trees:[160,530,2850]},low:{cars:[85,190,600],trees:[100,380,2200]}},YM=()=>new Promise(i=>requestAnimationFrame(()=>i()));function ZM(i,t){const n=t.positions,s=t.normals,r=t.colors,o=t.uvs,a=t.indices,l=a?a.length:n.length/3,c=new ie().fromArray(Array.from(t.matrix)),h=new Zt().getNormalMatrix(c),u=new Y,d=v=>{const S=a?a[v]:v,b=new Float64Array(11);return u.set(n[S*3],n[S*3+1],n[S*3+2]).applyMatrix4(c),b[0]=u.x,b[1]=u.y,b[2]=u.z,s&&(u.set(s[S*3],s[S*3+1],s[S*3+2]).applyMatrix3(h).normalize(),b[3]=u.x,b[4]=u.y,b[5]=u.z),r&&(b[6]=r[S*3],b[7]=r[S*3+1],b[8]=r[S*3+2]),o&&(b[9]=o[S*2],b[10]=o[S*2+1]),b},f=[],p=[],g=[],m=[],x=v=>{f.push(v[0],v[1]+i.yAt(v[0],v[2]),v[2]),s&&p.push(v[3],v[4],v[5]),r&&g.push(v[6],v[7],v[8]),o&&m.push(v[9],v[10])},_=(v,S,b)=>{x(v),x(S),x(b)};for(let v=0;v+2<l;v+=3){const S=d(v),b=d(v+1),w=d(v+2);cc(i,S,b,w,_)}return{positions:new Float32Array(f),normals:s?new Float32Array(p):void 0,colors:r?new Float32Array(g):void 0,uvs:o?new Float32Array(m):void 0}}function KM(i,t,e){let n=0;for(let s=0;s<i.length;s++){const r=i[s],o=i[(s+1)%i.length],a=(o[0]-r[0])*(e-r[1])-(o[1]-r[1])*(t-r[0]);if(a!==0){if(n===0)n=Math.sign(a);else if(Math.sign(a)!==n)return!1}}return!0}const qM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class JM{constructor(t,e,n,s,r){H(this,"renderer");H(this,"ownsRenderer");H(this,"staged");H(this,"initialized",!1);H(this,"contextLost",t=>{var e,n,s;t.preventDefault(),(e=this.drivingAA)==null||e.invalidate(),(n=this.stillPhoto)==null||n.cancel("The browser lost the graphics context during the photo."),this.staged&&(this.staged.cb.onError("The browser lost the graphics context during the quality change."),(s=this.staged)==null||s.dispose()),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this model was using.")});H(this,"scene",new Jr);H(this,"camera",new Fn(38,1,5,9e4));H(this,"controls");H(this,"atmosphere");H(this,"clouds");H(this,"hasWeatherTime",!1);H(this,"weather",new Uv);H(this,"showers");H(this,"storm");H(this,"water");H(this,"coastalHaze");H(this,"stillPhoto");H(this,"drivingAA");H(this,"onPhotoVisibilityChange",()=>{var t;document.hidden&&((t=this.stillPhoto)==null||t.cancel("Keep the Inverloch view visible while saving the photo."))});H(this,"hf");H(this,"life");H(this,"trees");H(this,"prepareTrees");H(this,"qualityChange",Promise.resolve(!1));H(this,"releaseWarmPrograms");H(this,"solid");H(this,"designedWalls",[]);H(this,"blockers",{polygons:[],circles:[]});H(this,"labels");H(this,"places",[]);H(this,"tide",{value:nf});H(this,"raf",0);H(this,"last",0);H(this,"time",0);H(this,"dirty",!0);H(this,"ultraStreet");H(this,"animating",!0);H(this,"disposed",!1);H(this,"abort",new AbortController);H(this,"worker");H(this,"detailStreaming");H(this,"resizeObserver");H(this,"flight");H(this,"lastCompass",NaN);H(this,"width",1);H(this,"height",1);H(this,"quality","high");H(this,"resolution");H(this,"pacing");H(this,"solarMinutes",NaN);H(this,"roadPaths",[]);H(this,"roadOverlay",new dM);H(this,"external");H(this,"meta");H(this,"shadowAim",new Y);H(this,"lookDir",new Y);H(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=ae.degToRad(e.azimuth),r=-Math.sin(s),o=-Math.cos(s),a=Math.cos(s),l=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+o*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-o*n};break;case"ArrowLeft":c={...e,x:e.x-a*n,z:e.z-l*n};break;case"ArrowRight":c={...e,x:e.x+a*n,z:e.z+l*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=Vs;break;default:return}t.preventDefault(),this.fly(c,.3)});H(this,"frame",t=>{var p,g,m,x,_,v,S,b,w,M,y,T;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,document.hidden){this.pacing.reset(),this.resolution.resetSampling();return}if(this.flight){const E=this.flight;E.t=Math.min(1,E.t+e/E.duration);const R=qM(E.t),P=(F,L)=>F+(L-F)*R;this.applyView({x:P(E.from.x,E.to.x),z:P(E.from.z,E.to.z),dist:Math.exp(P(Math.log(E.from.dist),Math.log(E.to.dist))),polar:P(E.from.polar,E.to.polar),azimuth:P(E.from.azimuth,E.to.azimuth)}),E.t>=1&&(this.flight=void 0)}this.controls&&!this.external&&this.controls.update()&&(this.dirty=!0);const n=(p=this.stillPhoto)!=null&&p.pending?this.stillPhoto:void 0;if(!n&&this.atmosphere.update(e)&&(this.dirty=!0),!n&&this.animating&&(this.time+=e,this.water.uniforms.uTime.value=this.time,(g=this.life)==null||g.update(e,this.time),this.dirty=!0),!n&&this.opts.assets.detail){const{x:E,y:R,z:P}=this.camera.position;(m=this.detailStreaming)==null||m.update(t/1e3,E,R,P,R-this.hf.yAt(E,P))}if(!this.dirty&&!n)return;const s=this.pacing.takeFrame(t);if(s===void 0)return;const r=this.dirty;this.dirty=!1,!n&&this.animating&&this.resolution.update(t/1e3,s,this.pacing.target)&&this.renderer.setPixelRatio(this.resolution.ratio);const o=this.camera;(x=this.ultraStreet)==null||x.update(o.position,this.atmosphere.sun.intensity);let a,l=1/0;const c=!!this.controls&&!this.external,h=this.hf.yAt(o.position.x,o.position.z);if(c&&(o.position.y=Math.max(o.position.y,h+12)),!n||!this.hasWeatherTime){const E=this.weatherTime(),R=this.weather;R.update(E),this.clouds.update(E),this.clouds.setCover(R.cover),this.clouds.setFlash(((_=this.storm)==null?void 0:_.update(E,R,o.position,this.opts.onThunder))??0);const P=R.rain>.015&&o.position.y-h<4&&this.solidAt(o.position.x,o.position.z);(v=this.showers)==null||v.update(R.rain,R.wetness,this.time,void 0,void 0,P),this.hasWeatherTime=!0}const u=Math.max(1,o.position.y-Math.max(h,this.waterLevel));if(this.controls&&c)a=o.position.distanceTo(this.controls.target),this.shadowAim.copy(this.controls.target);else{o.getWorldDirection(this.lookDir);const E=Math.min(this.lookDir.y<-.05?u/-this.lookDir.y:1e9,40+u*3,3e3);this.shadowAim.copy(o.position).addScaledVector(this.lookDir,E),a=Math.max(E,u)*1.3,l=Math.max(350,u*10)}const d=c?ae.clamp(a*.02,2,80):ae.clamp(a*.012,.4,60);Math.abs(d-o.near)>o.near*.05&&(o.near=d,o.updateProjectionMatrix());const f=XM[this.quality];if((S=this.life)==null||S.updateParkedLod(o.position,u,f.cars),(b=this.trees)==null||b.updateLod(o.position,u,f.trees),this.atmosphere.aimShadow(this.shadowAim,a),n||(w=this.detailStreaming)==null||w.applyReady(),(n||!this.external)&&((M=this.drivingAA)==null||M.invalidate()),!(n!=null&&n.draw(this.scene,o,r))&&!(this.external&&!n&&((y=this.drivingAA)!=null&&y.draw(this.scene,o,t)))&&this.renderer.render(this.scene,o),this.releaseWarmPrograms&&(this.releaseWarmPrograms(),this.releaseWarmPrograms=void 0),(T=this.labels)==null||T.update(o,this.width,this.height,l),c){const E=Math.round(this.currentView().azimuth);E!==this.lastCompass&&(this.lastCompass=E,this.cb.onCompass(E))}});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.previous=r,this.ownsRenderer=!r,r&&(r.staged=this),this.external=!!s.external,this.pacing=new tv(s.frameTarget)}async init(){var Z,j;try{this.renderer=((Z=this.previous)==null?void 0:Z.renderer)??new F1({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D model needs.");return}const t=this.renderer;this.quality=this.pickQuality(),EM()&&this.quality==="ultra"&&(this.drivingAA=new Kd(t));let e=sf[this.quality];const n=(navigator.deviceMemory??8)>4;this.quality==="medium"&&n&&!this.opts.quality&&(e={...e,pixelRatio:2,trees:.8}),this.resolution=new Vd(Math.min(window.devicePixelRatio||1,e.pixelRatio),this.quality==="low"?.6:1),this.ownsRenderer&&(t.setPixelRatio(this.resolution.ratio),t.outputColorSpace=Oe,t.toneMapping=ha,t.shadowMap.enabled=e.shadow>0,t.shadowMap.type=Xs);const s=t.domElement;this.opts.external?(s.setAttribute("role","img"),s.setAttribute("aria-label","3D model of Inverloch")):(s.tabIndex=0,s.setAttribute("role","application"),s.setAttribute("aria-label","3D model of Inverloch. Drag to pan, right-drag to rotate, scroll to zoom. Arrow keys pan, plus and minus zoom, Q and E rotate.")),s.style.display="block",s.style.outlineOffset="-3px",this.ownsRenderer&&(this.container.appendChild(s),s.addEventListener("webglcontextlost",this.contextLost));const r=this.worker=new Bv;let o;try{o=await __(this.opts.assets,e.step,(U,V)=>this.cb.onProgress(U*.6,V),r,this.abort.signal)}catch(U){r.close(),this.disposed||this.cb.onError(U instanceof Error?U.message:"The model data could not be loaded.");return}if(this.disposed){o.ground.dispose();return}const{town:a,heights:l,exposure:c,surface:h,terrainPatches:u,terrainTiles:d,ground:f}=o;this.meta=a.meta,this.quality==="ultra"&&this.opts.external&&((j=this.opts.clearPolygons)!=null&&j.length)&&this.opts.assets.detail&&(this.ultraStreet=new VM(this.scene,this.opts.assets.detail,this.fromLatLon.bind(this),(U,V)=>this.hf.yAt(U,V),()=>{this.dirty=!0}));const p=[...this.opts.clear??[],...(this.opts.clearLatLon??[]).map(U=>{const[V,O]=this.fromLatLon(U.lat,U.lon);return{x:V,z:O,r:U.r}})],g=(this.opts.clearPolygons??[]).map(U=>({pts:U.latLon.map(([V,O])=>this.fromLatLon(V,O)),roads:!!U.roads})),m=(U,V,O)=>g.some(J=>(!O||J.roads)&&KM(J.pts,U,V)),x=(U,V)=>p.some(O=>(U-O.x)**2+(V-O.z)**2<O.r*O.r)||m(U,V,!1),_=(this.opts.detailLatLon??[]).map(U=>{const[V,O]=this.fromLatLon(U.lat,U.lon);return{x:V,z:O,r:U.r}}),v=(U,V)=>_.some(O=>(U-O.x)**2+(V-O.z)**2<O.r*O.r);f.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());const S=async(U,V)=>{this.cb.onProgress(U,V),await YM()};if(await S(.62,"Shaping the terrain"),this.disposed){f.dispose();return}const b=this.hf=new ku(l,c,a.meta.grid[0],a.meta.grid[1],a.meta.size[0],a.meta.size[1],e.step,h,u),w=mM();this.scene.add(xM(b,d,f,this.tide,w));const M=navigator.deviceMemory??8;this.detailStreaming=new hv(this.opts.assets,this.quality==="low"||M<=4,w,f.anisotropy,r,()=>{this.dirty=!0});const y=this.showers=new hM(this.scene,this.camera,this.quality);if(this.water=kM(b,this.tide,this.quality==="ultra"?y.inletRain:void 0),this.scene.add(this.water.skirt,this.water.mesh),await S(.7,"Laying out the streets"),this.disposed)return;const T=g.some(U=>U.roads)?(U,V)=>m(U,V,!0):void 0,E=g.filter(U=>U.roads).map(U=>U.pts),R=rM(a,b,T,(U,V)=>y.shadeAsphalt(U,V),E);if(this.scene.add(R.group),this.roadPaths=R.paths,this.roadOverlay.add(R.pavement,R.pavementEnd),await S(.78,"Raising the buildings"),this.disposed)return;const P=Q_(a,b,R.index,pv,x);if(this.scene.add(P.group),await S(.86,"Planting trees"),this.disposed)return;const F=(U,V)=>x(U,V)||D_(U,V),L=this.trees=UM(a,b,e.trees,F,R.index);if((this.quality==="low"||this.quality==="medium")&&(this.prepareTrees=U=>FM(this.abort.signal,a,b,U,F,R.index)),this.scene.add(L.group),await S(.92,"Adding landmarks"),this.disposed)return;const N={town:a,hf:b,footprints:P.footprints,roads:R.index,paths:R.paths,isClear:x,isDetail:v,hasDetail:_.length>0},I=Lv(N);this.scene.add(I.group),this.blockers=P.blockers,this.blockers.polygons.push(...I.blockers.polygons),this.blockers.circles.push(...I.blockers.circles),this.solid=new Map,this.designedWalls=P.designedWalls;for(const U of[...P.footprints.map(V=>V.poly),...this.designedWalls]){if(U.length<6)continue;let V=1/0,O=-1/0,J=1/0,et=-1/0;for(let st=0;st<U.length;st+=2)V=Math.min(V,U[st]),O=Math.max(O,U[st]),J=Math.min(J,U[st+1]),et=Math.max(et,U[st+1]);for(let st=Math.floor(V/16);st<=Math.floor(O/16);st++)for(let ct=Math.floor(J/16);ct<=Math.floor(et/16);ct++){const St=`${st}_${ct}`,Nt=this.solid.get(St);Nt?Nt.push(U):this.solid.set(St,[U])}}if(this.life=new Zv(N,I,this.quality==="ultra",(U,V)=>this.roadSurfaceAt(U,V),this.opts.roadGrounding?0:Sd),this.life.setTide(this.tide.value*Zn),this.scene.add(this.life.group),this.disposed)return;this.clouds=new n_,this.atmosphere=new r_(t,this.water,e.shadow,this.clouds,()=>this.ownsRenderer),this.places=fv(a.meta,b);const W=this.places.find(U=>U.id==="inlet");this.storm=new Fv(this.scene,W.x,W.z),this.clouds.uniforms.uFlashCenter.value=this.storm.center;const q=this.coastalHaze=new Nv(W.x,W.z,this.atmosphere.horizon,this.quality==="ultra"&&this.opts.coastalMist!==!1,this.clouds,{value:this.atmosphere.sunDir},this.atmosphere.cloudShadowStrength);q.setWaterLevel(this.waterLevel),q.addWater(this.water.mesh),q.add(this.scene),this.scene.addEventListener("childadded",U=>q.add(U.child)),this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.labels=new uv(this.labelLayer,this.places,U=>this.flyToPlace(U)),this.external||this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const G=window.matchMedia("(prefers-reduced-motion: reduce)").matches;G&&(this.animating=!1),this.external?this.setExternalCamera(300,900,2600,0,-.42):G?this.applyView(Vs):(this.applyView({...Vs,dist:9500,polar:24,azimuth:-20}),this.fly(Vs,3.4)),!(this.previous&&this.quality==="high"&&this.opts.beforeQualityCommit&&(await this.waitForHostInput(),this.disposed||this.abort.signal.aborted))&&(this.cb.onProgress(1,"Ready"),this.initialized=!0,this.cb.onReady({quality:this.quality,houses:a.counts.houses,mappedBuildings:a.counts.buildings,trees:L.count,roadPieces:a.counts.roads,sources:a.meta.sources,places:this.places}),this.last=performance.now(),this.ownsRenderer&&(this.raf=requestAnimationFrame(this.frame)))}async waitForHostInput(){var t,e;try{await((e=(t=this.opts).beforeQualityCommit)==null?void 0:e.call(t,this.abort.signal))}catch{}}canStageWorld(){var t;return this.external&&this.initialized&&this.ownsRenderer&&!this.staged&&!this.disposed&&!((t=this.stillPhoto)!=null&&t.pending)&&!this.renderer.getContext().isContextLost()}commitStagedWorld(){var n;const t=this.previous;if(!t||t.staged!==this||!t.external||t.disposed||this.disposed||!this.initialized||this.renderer.getContext().isContextLost())return!1;const e=this.renderer.domElement;this.ownsRenderer=!0;try{this.renderer.setPixelRatio(this.resolution.ratio),this.atmosphere.applyRendererSettings(),this.resize(),this.container.appendChild(e)}catch(s){throw this.ownsRenderer=!1,e.parentElement!==t.container&&t.container.appendChild(e),this.renderer.setPixelRatio(t.resolution.ratio),t.atmosphere.applyRendererSettings(),t.resize(),s}return t.staged=void 0,this.previous=void 0,t.ownsRenderer=!1,cancelAnimationFrame(t.raf),(n=t.resizeObserver)==null||n.disconnect(),e.removeEventListener("webglcontextlost",t.contextLost),e.addEventListener("webglcontextlost",this.contextLost),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame),!0}get isAnimating(){return this.animating}setAnimating(t){var e;t!==this.animating&&((e=this.resolution)==null||e.resetSampling()),this.animating=t,this.dirty=!0}setFrameTarget(t){var e;this.pacing.setTarget(t)&&((e=this.resolution)==null||e.resetSampling())}setQualityInPlace(t){return this.previous||t!=="low"&&t!=="medium"?Promise.resolve(!1):(this.qualityChange=this.qualityChange.then(async()=>{var r,o;if(this.disposed||!this.prepareTrees||!this.atmosphere||!this.trees)return!1;if(this.quality===t)return!0;const e=sf[t],n=await this.prepareTrees(e.trees);if(!n)return!1;if(t==="medium"&&!this.disposed&&(this.releaseWarmPrograms=await zM(this.renderer,this.scene,this.camera,this.abort.signal),!this.disposed&&this.opts.beforeQualityCommit&&await this.waitForHostInput()),this.disposed)return n.dispose(),!1;this.trees.dispose(),this.trees=n,this.scene.add(n.group),this.quality=t,this.atmosphere.setShadowSize(e.shadow),(r=this.showers)==null||r.setDensity(t);const s=navigator.deviceMemory??8;return(o=this.detailStreaming)==null||o.setSmall(t==="low"||s<=4),this.resolution=new Vd(Math.min(window.devicePixelRatio||1,e.pixelRatio),t==="low"?.6:1),this.renderer.setPixelRatio(this.resolution.ratio),this.dirty=!0,!0}).catch(()=>!1),this.qualityChange)}weatherTime(){return Date.now()/1e3}setExternalCamera(t,e,n,s,r){if(!this.external)return;const o=this.camera.position,a=this.camera.rotation,l=o.x===t&&o.y===e&&o.z===n,c=a.order==="YXZ"&&a.x===r&&a.y===s&&a.z===0;l&&c||(this.camera.position.set(t,e,n),this.camera.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}setExternal(t){if(!this.previous&&!(t===this.external||!this.hf)){if(this.external=t,t)this.flight=void 0,this.controls&&(this.controls.enabled=!1);else{this.controls||this.setupControls(),this.controls.enabled=!0;const e=this.camera;e.getWorldDirection(this.lookDir);const n=Math.max(1,e.position.y),s=this.lookDir.y<-.05?Math.min(n/-this.lookDir.y,6e3):900,r=this.controls.target.copy(e.position).addScaledVector(this.lookDir,s);r.x=ae.clamp(r.x,this.hf.xMin,this.hf.xMax),r.z=ae.clamp(r.z,this.hf.zMin,this.hf.zMax),r.y=0,this.controls.update(),this.fly(Vs,1.6)}this.resize()}}getCamera(){const t=new vn().setFromQuaternion(this.camera.quaternion,"YXZ"),e=this.camera.position;return{x:e.x,y:e.y,z:e.z,yaw:t.y,pitch:t.x}}fromLatLon(t,e){const n=this.meta;return n?[(e-n.origin[0])*n.metresPerDegree[0],-(t-n.origin[1])*n.metresPerDegree[1]]:[0,0]}addParts(t){const e=new $e;e.name="guest";const n=t.map(s=>{var f;const r=s.roadOverlay?{...s,positions:this.roadOverlay.project(this.hf,s.positions,s.indices),indices:void 0,normals:void 0,colors:void 0,uvs:void 0,onGround:!0}:s.onGround?{...s,...ZM(this.hf,s),indices:void 0}:s,o=new Ce,a=(p,g)=>new Te(p instanceof Float32Array?p:Float32Array.from(p),g);o.setAttribute("position",a(r.positions,3)),r.colors&&o.setAttribute("color",a(r.colors,3)),r.uvs&&o.setAttribute("uv",a(r.uvs,2)),r.indices&&o.setIndex(Array.from(r.indices)),r.normals?o.setAttribute("normal",a(r.normals,3)):r.roadOverlay||o.computeVertexNormals();let l=null;r.map&&(l=new Re(r.map),l.colorSpace=Oe,l.wrapS=l.wrapT=Js,r.mapRepeat&&l.repeat.set(r.mapRepeat[0],r.mapRepeat[1]),l.anisotropy=4,l.needsUpdate=!0);const c=r.opacity??1,h={color:new Lt().setRGB(...r.color??[1,1,1]),map:l,vertexColors:!!r.colors,transparent:c<1,opacity:c,side:r.doubleSide?Ae:Mi,...r.roadOverlay?Od:{}},u=r.unlit?new fn(h):new Un({...h,roughness:r.roughness??.9,metalness:r.metalness??0,emissive:new Lt().setRGB(...r.emissive??[0,0,0]),emissiveIntensity:r.emissiveIntensity??1,emissiveMap:r.glowMap?l:null,flatShading:!!r.flatShading}),d=new te(o,u);return d.matrixAutoUpdate=!1,r.onGround||d.matrix.fromArray(Array.from(r.matrix)),r.wetAsphalt&&u instanceof Un&&((f=this.showers)==null||f.shadeAsphalt(u,!1,r.asphaltEnds)),r.wetAsphalt&&r.onGround&&!r.roadOverlay&&this.roadOverlay.add(o.getAttribute("position").array),d.userData.fixed=!!r.onGround,d.castShadow=!r.roadOverlay&&c>=1,d.receiveShadow=!r.roadOverlay,e.add(d),d});return this.scene.add(e),this.dirty=!0,{setMatrix:(s,r)=>{const o=n[s];!o||o.userData.fixed||(o.matrix.fromArray(Array.from(r)),o.matrixWorldNeedsUpdate=!0,this.dirty=!0)},setEmissive:(s,r,o,a,l)=>{var h;const c=(h=n[s])==null?void 0:h.material;c instanceof Un&&(c.emissive.setRGB(r,o,a),c.emissiveIntensity=l,this.dirty=!0)},remove:()=>{var s;this.scene.remove(e);for(const r of n){this.roadOverlay.remove(r.geometry.getAttribute("position").array),r.geometry.dispose();const o=r.material;(s=o.map)==null||s.dispose(),o.dispose()}this.dirty=!0}}}addTrafficCar(t,e,n,s,r){if(!this.life)throw new Error("Wait for the Inverloch model before adding traffic");const o=this.life.makeTrafficCar(t,e,n,s,r),{mesh:a,scale:l}=o;let c;return{setMatrix:(h,u)=>{h===0&&(a.matrix.fromArray(u),this.opts.roadGrounding||(a.matrix.elements[13]+=Sd),a.matrixWorldNeedsUpdate=!0,a.visible=!!(u[0]||u[1]||u[2]),this.dirty=!0)},setSignal:h=>{!c&&h&&(c=Td(t),c.scale.copy(l),a.add(c)),c&&(Ad(c,h),this.dirty=!0)},setCabin:h=>{o.setCabin(h),this.dirty=!0},remove:()=>{o.remove(),c==null||c.geometry.dispose(),c==null||c.material.dispose(),this.dirty=!0}}}addPad(t){const e=t.radius??t.halfWidth??5,n=t.radius??t.halfDepth??5,s=t.heading??0,r=Math.cos(s),o=Math.sin(s);let a=1/0,l=-1/0;for(const[f,p]of[[0,0],[-e,-n],[e,-n],[e,n],[-e,n],[0,-n],[0,n],[-e,0],[e,0]]){const g=this.hf.yAt(t.x+f*r+p*o,t.z-f*o+p*r);a=Math.min(a,g),l=Math.max(l,g)}const c=l+(t.lift??.25),h=c-a+1,u=t.radius?new wl(t.radius,t.radius,h,24):new qi(e*2,h,n*2),d=new te(u,new Un({color:new Lt().setRGB(...t.color),roughness:1}));return d.position.set(t.x,c-h/2,t.z),d.rotation.y=s,d.receiveShadow=!0,d.name="guest-pad",this.scene.add(d),this.dirty=!0,c}setSolarMinutes(t){!this.atmosphere||t===this.solarMinutes||(this.solarMinutes=t,this.atmosphere.setSolar(t),this.dirty=!0)}roadSpot(t){const e=t.trim().toLowerCase();let n=null;for(const p of this.roadPaths)p.name.toLowerCase()===e&&(!n||p.length>n.length)&&(n=p);if(!n)return null;const s=n.pts.length/3,r=0,o=s-1,a=s>>1;let l=n.pts[o*3]-n.pts[r*3],c=n.pts[o*3+2]-n.pts[r*3+2];const h=Math.hypot(l,c)||1;l/=h,c/=h;const u=Math.min(70,h*.5),d=n.pts[a*3]-l*u,f=n.pts[a*3+2]-c*u;return{x:d,y:this.hf.yAt(d,f)+38,z:f,yaw:Math.atan2(-l,-c),pitch:-.42}}groundAt(t,e){return this.hf?this.hf.yAt(t,e):0}roadSurfaceAt(t,e){if(!this.hf||!Number.isFinite(t)||!Number.isFinite(e))return null;const n=this.roadOverlay.heightAt(t,e);return n!==null&&n>=this.hf.yAt(t,e)-.01?n:null}nearestCar(t,e,n){var s;return((s=this.life)==null?void 0:s.nearestCar(t,e,n))??null}addCars(t){var e;(e=this.life)==null||e.addCars(t),this.dirty=!0}driveCar(t,e,n,s,r,o,a=0,l=0,c=0){var u;const h=((u=this.life)==null?void 0:u.driveCar(t,e,n,s,r,o,a,l,c))??!1;return this.dirty=!0,h}setControlledCar(t,e){var s;const n=((s=this.life)==null?void 0:s.setControlledCar(t,e))??!1;return n&&(this.dirty=!0),n}resetCar(t,e){var s;const n=((s=this.life)==null?void 0:s.resetCar(t,e))??!1;return n&&(this.dirty=!0),n}setRemoved({cars:t=[]}){var e;(e=this.life)==null||e.setHiddenCars(t),this.dirty=!0}designedWallFootprints(){return this.designedWalls.map(t=>t.slice())}buildingBlockers(){return this.blockers}parkedCarBlockers(){var t;return((t=this.life)==null?void 0:t.parkedCarBlockers())??[]}parkedCarBlocker(t,e){var n;return((n=this.life)==null?void 0:n.parkedCarBlocker(t,e))??null}solidAt(t,e){var s;const n=(s=this.solid)==null?void 0:s.get(`${Math.floor(t/16)}_${Math.floor(e/16)}`);if(!n)return!1;for(const r of n){let o=!1;for(let a=0,l=r.length/2-1;a<r.length/2;l=a++){const c=r[a*2],h=r[a*2+1],u=r[l*2],d=r[l*2+1];h>e!=d>e&&t<(u-c)*(e-h)/(d-h)+c&&(o=!o)}if(o)return!0}return!1}get waterLevel(){return this.tide.value*Zn}get bounds(){return this.hf?[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]:[-4e3,4e3,-3440,3440]}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}setTide(t){var e,n;this.water&&(this.water.setTide(ae.clamp(t,tf,ef)),(e=this.life)==null||e.setTide(this.tide.value*Zn),(n=this.coastalHaze)==null||n.setWaterLevel(this.waterLevel),this.dirty=!0)}captureStill(){return this.disposed||!this.atmosphere||this.quality!=="ultra"?Promise.reject(new Error("Antialiased photos are available after the Ultra view loads.")):document.hidden?Promise.reject(new Error("Open the Inverloch view to save a photo.")):(this.stillPhoto||(this.stillPhoto=new bM(this.renderer,()=>{this.dirty=!0,this.resolution.resetSampling()}),document.addEventListener("visibilitychange",this.onPhotoVisibilityChange)),this.resolution.resetSampling(),this.stillPhoto.start())}getDrivingAA(){var t;return{mode:this.drivingAA?"temporal":"msaa",fallback:((t=this.drivingAA)==null?void 0:t.usingFallback)??!1}}setDrivingAA(t){var e;this.disposed||this.quality!=="ultra"||!this.renderer||t!=="temporal"&&t!=="msaa"||(wM(t),t==="temporal"?this.drivingAA??(this.drivingAA=new Kd(this.renderer)):((e=this.drivingAA)==null||e.dispose(),this.drivingAA=void 0),this.dirty=!0)}setCoastalMist(t){var e;this.opts.coastalMist=t,(e=this.coastalHaze)==null||e.setMist(this.quality==="ultra"&&t),this.dirty=!0}setLabelsVisible(t){var e;(e=this.labels)==null||e.setVisible(t),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.2)}resetView(){this.fly(Vs,1.8)}setView(t,e,n,s,r,o=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},o)}faceNorth(){const t=this.currentView();this.fly({...t,azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:ae.clamp(e.dist*t,this.controls.minDistance,this.controls.maxDistance)},.35)}dispose(){var t,e,n,s,r,o,a,l,c,h,u,d,f,p;this.disposed||(this.disposed=!0,((t=this.previous)==null?void 0:t.staged)===this&&(this.previous.staged=void 0),this.previous=void 0,this.staged&&(this.staged.cb.onError("The active Inverloch view closed before the quality change finished."),(e=this.staged)==null||e.dispose()),this.abort.abort(),(n=this.ultraStreet)==null||n.dispose(),(s=this.detailStreaming)==null||s.dispose(),(r=this.worker)==null||r.close(),cancelAnimationFrame(this.raf),(o=this.resizeObserver)==null||o.disconnect(),(a=this.labels)==null||a.dispose(),(l=this.stillPhoto)==null||l.dispose(),(c=this.drivingAA)==null||c.dispose(),(h=this.clouds)==null||h.dispose(),(u=this.atmosphere)==null||u.sun.shadow.dispose(),(d=this.showers)==null||d.dispose(),(f=this.storm)==null||f.dispose(),document.removeEventListener("visibilitychange",this.onPhotoVisibilityChange),(p=this.controls)==null||p.dispose(),this.renderer&&(this.renderer.domElement.removeEventListener("keydown",this.onKey),this.scene.traverse(g=>{var _,v;const m=g;(v=(_=m.geometry)==null?void 0:_.dispose)==null||v.call(_);const x=Array.isArray(m.material)?m.material:m.material?[m.material]:[];for(const S of x){for(const b of Object.values(S))b instanceof Re&&b.dispose();S.dispose()}}),this.ownsRenderer&&(this.renderer.domElement.removeEventListener("webglcontextlost",this.contextLost),this.renderer.dispose(),this.renderer.domElement.remove())))}pickQuality(){if(this.opts.quality)return this.opts.quality;const t=new URLSearchParams(window.location.search).get("quality");if(t==="ultra"||t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new $1(this.camera,this.renderer.domElement);t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=70,t.maxDistance=12e3,t.maxPolarAngle=ae.degToRad(84),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const e=t.target,n=this.hf;e.x=ae.clamp(e.x,n.xMin,n.xMax),e.z=ae.clamp(e.z,n.zMin,n.zMax),e.y=0,this.dirty=!0}),this.renderer.domElement.addEventListener("keydown",this.onKey)}clampView(t){var e,n;return{x:ae.clamp(t.x,this.hf.xMin,this.hf.xMax),z:ae.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:ae.clamp(t.dist,((e=this.controls)==null?void 0:e.minDistance)??70,((n=this.controls)==null?void 0:n.maxDistance)??12e3),polar:ae.clamp(t.polar,2,84),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=this.camera.position.clone().sub(t),n=new Eo().setFromVector3(e);return{x:t.x,z:t.z,dist:n.radius,polar:ae.radToDeg(n.phi),azimuth:ae.radToDeg(n.theta)}}applyView(t){const e=new Eo(t.dist,ae.degToRad(t.polar),ae.degToRad(t.azimuth)),n=this.controls.target.set(t.x,0,t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(!this.controls||this.external)return;if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.ownsRenderer&&(this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%"),this.camera.aspect=t/e,this.camera.fov=this.external?60:t/e<.8?52:38,this.camera.updateProjectionMatrix(),this.dirty=!0}}const _c="Map data © OpenStreetMap contributors · Elevation © Geoscience Australia (CC BY 4.0)",$M=`
.inv-embed, .inv-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the model but never take a touch: drags and pinches must reach the canvas underneath */
.inv-embed-labels, .inv-embed .inv-label { pointer-events: none; }
.inv-embed-credit { position: absolute; left: 50%; bottom: var(--inv-credit-bottom, 6px); transform: translateX(-50%); margin: 0; max-width: calc(100% - 24px);
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; pointer-events: none; }
`,jM=!0,QM=["low","medium","high","ultra"],vc=new WeakMap;function tS(i,t,e){const n=vc.get(e);return!n||n.container!==i||!n.scene.canStageWorld()||t.quality!=="high"&&t.quality!=="low"?null:rf(i,t,n.scene)}function eS(i,t){return rf(i,t)}function rf(i,t,e){const n=!!e;if(!document.querySelector("style[data-inverloch-model]")){const g=document.createElement("style");g.setAttribute("data-inverloch-model",""),g.textContent=jn+$M,document.head.appendChild(g)}const s=document.createElement("div");s.className="inv-embed";const r=document.createElement("div");r.className="inv-embed-layer";const o=document.createElement("div");o.className="inv-embed-layer inv-embed-labels";const a=document.createElement("p");a.className="inv-embed-credit",a.textContent=_c,s.append(r,o,a),i.appendChild(s);const l=typeof t.assets=="string"?{height:t.assets+"height.png",ground:t.assets+(typeof window<"u"&&window.anSmallGround?"ground-2k.webp":"ground.webp"),town:t.assets+"town.json",detail:t.assets+"detail.json"}:t.assets;let c=[],h=!1,u;const d=new Promise((g,m)=>u={ok:g,fail:m}),f=new JM(r,o,{onProgress:(g,m)=>{var x;return(x=t.onProgress)==null?void 0:x.call(t,g,m)},onReady:g=>{c=g.places.map(m=>{const x=Math.min(Math.max(m.view[0]*.55,90),1500),_=m.view[1]*Math.PI/180,v=m.view[2]*Math.PI/180,S=m.x+x*Math.sin(_)*Math.sin(v),b=m.z+x*Math.sin(_)*Math.cos(v),w=Math.max(f.groundAt(S,b),f.waterLevel)+Math.max(x*Math.cos(_),20),M=m.x-S,y=m.y-10-w,T=m.z-b;return{id:m.id,name:m.name,kind:m.kind,x:S,y:w,z:b,yaw:Math.atan2(-M,-T),pitch:Math.atan2(y,Math.hypot(M,T)),tx:m.x,tz:m.z}}),t.labels===!1&&f.setLabelsVisible(!1),h=!0,u.ok()},onError:g=>{var m;return h?(m=t.onError)==null?void 0:m.call(t,g):u.fail(new Error(g))},onCompass:()=>{}},{assets:l,external:!0,quality:t.quality,beforeQualityCommit:t.beforeQualityCommit,frameTarget:t.frameTarget,coastalMist:t.coastalMist,onThunder:t.onThunder,clear:t.clear,clearLatLon:t.clearLatLon,clearPolygons:t.clearPolygons,roadGrounding:t.roadGrounding,detailLatLon:t.detailLatLon},e);f.init().catch(g=>{var m;h?(m=t.onError)==null||m.call(t,g instanceof Error?g.message:String(g)):u.fail(g instanceof Error?g:new Error(String(g)))});const p={ready:d,setCamera:(g,m,x,_,v)=>f.setExternalCamera(g,m,x,_,v),setMinutes:g=>f.setSolarMinutes(g),setTide:g=>f.setTide(g),setAnimating:g=>f.setAnimating(g),setFrameTarget:g=>f.setFrameTarget(g),setQualityInPlace:g=>f.setQualityInPlace(g),...n?{commitStagedWorld:()=>f.commitStagedWorld()}:{},captureStill:()=>f.captureStill(),getDrivingAA:()=>f.getDrivingAA(),setDrivingAA:g=>f.setDrivingAA(g),setCoastalMist:g=>f.setCoastalMist(g),setLabelsVisible:g=>f.setLabelsVisible(g),groundAt:(g,m)=>f.groundAt(g,m),roadSurfaceAt:(g,m)=>f.roadSurfaceAt(g,m),waterLevel:()=>f.waterLevel,bounds:()=>f.bounds,fromLatLon:(g,m)=>f.fromLatLon(g,m),setMode:g=>f.setExternal(g!=="bird"),getCamera:()=>f.getCamera(),flyToPlace:g=>f.flyToPlace(g),lookAt:(g,m,x,_,v)=>f.setView(g,m,x,_,v),addParts:g=>f.addParts(g),addTrafficCar:(g,m,x,_,v)=>f.addTrafficCar(g,m,x,_,v),addPad:g=>f.addPad(g),spots:()=>c,nearestCar:(g,m,x)=>f.nearestCar(g,m,x),driveCar:(g,m,x,_,v,S,b,w,M)=>f.driveCar(g,m,x,_,v,S,b,w,M),setControlledCar:(g,m)=>f.setControlledCar(g,m),resetCar:(g,m)=>f.resetCar(g,m),setRemoved:g=>f.setRemoved(g),solidAt:(g,m)=>f.solidAt(g,m),designedWallFootprints:()=>f.designedWallFootprints(),buildingBlockers:()=>f.buildingBlockers(),parkedCarBlockers:()=>f.parkedCarBlockers(),parkedCarBlocker:(g,m)=>f.parkedCarBlocker(g,m),addCars:g=>f.addCars(g),roadSpot:g=>{const m=f.roadSpot(g);return m?{id:"road:"+g,name:g,kind:"landmark",...m,tx:m.x-Math.sin(m.yaw)*70,tz:m.z-Math.cos(m.yaw)*70}:null},tide:{min:tf,max:ef,initial:nf},credit:_c,dispose:()=>{n&&!h&&u.fail(new Error("The staged quality change was cancelled.")),vc.delete(p),f.dispose(),s.remove()}};return vc.set(p,{scene:f,container:i}),p}return cn.CREDIT=_c,cn.canYieldQualityCommit=jM,cn.create=eS,cn.createStaged=tS,cn.qualityPresets=QM,Object.defineProperty(cn,Symbol.toStringTag,{value:"Module"}),cn}({});

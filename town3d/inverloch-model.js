var InverlochModel=function(bn){"use strict";var Fv=Object.defineProperty;var Ov=(bn,jn,xi)=>jn in bn?Fv(bn,jn,{enumerable:!0,configurable:!0,writable:!0,value:xi}):bn[jn]=xi;var Y=(bn,jn,xi)=>Ov(bn,typeof jn!="symbol"?jn+"":jn,xi);const jn='.inv-label{position:absolute;left:0;top:0;pointer-events:auto;font:600 12px/1 Space Grotesk,system-ui,sans-serif;padding:6px 10px;border-radius:999px;background:#0c1c24e6;color:#fff;border:1px solid rgba(255,255,255,.2);white-space:nowrap;cursor:pointer;will-change:transform}.inv-label:after{content:"";position:absolute;left:50%;bottom:-8px;width:1px;height:8px;background:#ffffffbf}.inv-label:hover{background:#0b7d9c}.inv-label--nature{background:#183826eb}.inv-label--nature:hover{background:#2c7a4b}.inv-label--water{background:none;border-color:transparent;color:#f1fbff;font-style:italic;font-weight:500;font-size:13px;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,35,60,.95),0 0 8px rgba(0,35,60,.7)}.inv-label--water:after{display:none}.inv-label--water:hover{background:#0c1c2499}.inv-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.inv-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}';/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xi="187",Qn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ef=0,Sc=1,nf=2,Vs=1,sf=2,Ws=3,Mi=0,en=1,Le=2,is=0,Xs=1,Jo=2,yc=3,bc=4,rf=5,ss=100,of=101,af=102,lf=103,cf=104,hf=200,uf=201,df=202,ff=203,wc=204,Ec=205,pf=206,mf=207,gf=208,xf=209,_f=210,Mf=211,vf=212,Sf=213,yf=214,$o=0,jo=1,Qo=2,Ys=3,ta=4,ea=5,na=6,ia=7,Dr=0,bf=1,wf=2,ti=0,Tc=1,Ac=2,Rc=3,Cc=4,Lc=5,Pc=6,sa=7,Dc=300,rs=301,Zs=302,ra=303,oa=304,Ks=1e3,zn=1001,aa=1002,Ue=1003,Ef=1004,Ir=1005,qe=1006,la=1007,wn=1008,cn=1009,Ic=1010,Nc=1011,qs=1012,ca=1013,Bn=1014,En=1015,Tn=1016,ha=1017,ua=1018,os=1020,Uc=35902,Fc=35899,Oc=1021,zc=1022,Gn=1023,vi=1026,Si=1027,Nr=1028,da=1029,yi=1030,fa=1031,pa=1033,Ur=33776,Fr=33777,Or=33778,zr=33779,ma=35840,ga=35841,xa=35842,_a=35843,Ma=36196,va=37492,Sa=37496,ya=37488,ba=37489,Br=37490,wa=37491,Ea=37808,Ta=37809,Aa=37810,Ra=37811,Ca=37812,La=37813,Pa=37814,Da=37815,Ia=37816,Na=37817,Ua=37818,Fa=37819,Oa=37820,za=37821,Ba=36492,Ga=36494,ka=36495,Ha=36283,Va=36284,Gr=36285,Wa=36286,Tf=3200,as=0,Af=1,bi="",Fe="srgb",kr="srgb-linear",Hr="linear",ge="srgb",Xa=7680,Rf=519,Cf=512,Lf=513,Pf=514,Bc=515,Df=516,If=517,Gc=518,kc=519,Nf=35044,Gi=35048,Hc="300 es",An=2e3,Js=2001;function Uf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ff(){const i=$s("canvas");return i.style.display="block",i}const Vc={};function Wc(...i){const t="THREE."+i.shift();console.log(t,...i)}function Xc(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=Xc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function fe(...i){i=Xc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Vr(...i){const t=i.join(" ");t in Vc||(Vc[t]=!0,Vt(...i))}function Of(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const zf={[$o]:$o,[Qo]:na,[ta]:ta,[Ys]:ea,[jo]:jo,[na]:Qo,[ia]:ia,[ea]:Ys};class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yc=1234567;const js=Math.PI/180,Qs=180/Math.PI;function ls(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function Ya(i,t){return(i%t+t)%t}function Bf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Gf(i,t,e){return i!==t?(e-i)/(t-i):0}function tr(i,t,e){return(1-e)*i+e*t}function kf(i,t,e,n){return tr(i,t,1-Math.exp(-e*n))}function Hf(i,t=1){return t-Math.abs(Ya(i,t*2)-t)}function Vf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Xf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Yf(i,t){return i+Math.random()*(t-i)}function Zf(i){return i*(.5-Math.random())}function Kf(i){i!==void 0&&(Yc=i);let t=Yc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qf(i){return i*js}function Jf(i){return i*Qs}function $f(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function jf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qf(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),d=o((t+n)/2),h=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*d,l*h,l*u,a*c);break;case"YZY":i.set(l*u,a*d,l*h,a*c);break;case"ZXZ":i.set(l*h,l*u,a*d,a*c);break;case"XZX":i.set(a*d,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*d,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*d,a*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Za(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Kc(i,t){if(t.constructor===Float32Array)return i;const e=Za(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function qc(i,t){if(t.constructor===Float32Array)return i;const e=Za(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const se={DEG2RAD:js,RAD2DEG:Qs,generateUUID:ls,clamp:Qt,euclideanModulo:Ya,mapLinear:Bf,inverseLerp:Gf,lerp:tr,damp:kf,pingpong:Hf,smoothstep:Vf,smootherstep:Wf,randInt:Xf,randFloat:Yf,randFloatSpread:Zf,seededRandom:Kf,degToRad:qf,radToDeg:Jf,isPowerOfTwo:$f,ceilPowerOfTwo:jf,floorPowerOfTwo:Zc,setQuaternionFromProperEuler:Qf,normalize:qc,denormalize:Kc},pc=class pc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pc.prototype.isVector2=!0;let Ut=pc;class Rn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(h!==x||l!==u||c!==f||d!==p){let m=l*u+c*f+d*p+h*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){const _=Math.acos(m),M=Math.sin(_);g=Math.sin(g*_)/M,a=Math.sin(a*_)/M,l=l*g+u*a,c=c*g+f*a,d=d*g+p*a,h=h*g+x*a}else{l=l*g+u*a,c=c*g+f*a,d=d*g+p*a,h=h*g+x*a;const _=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=_,c*=_,d*=_,h*=_}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+d*h+l*f-c*u,t[e+1]=l*p+d*u+c*h-a*f,t[e+2]=c*p+d*f+a*u-l*h,t[e+3]=d*p-a*h-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),h=a(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*d*h+c*f*p,this._y=c*f*h-u*d*p,this._z=c*d*p+u*f*h,this._w=c*d*h-u*f*p;break;case"YXZ":this._x=u*d*h+c*f*p,this._y=c*f*h-u*d*p,this._z=c*d*p-u*f*h,this._w=c*d*h+u*f*p;break;case"ZXY":this._x=u*d*h-c*f*p,this._y=c*f*h+u*d*p,this._z=c*d*p+u*f*h,this._w=c*d*h-u*f*p;break;case"ZYX":this._x=u*d*h-c*f*p,this._y=c*f*h+u*d*p,this._z=c*d*p-u*f*h,this._w=c*d*h+u*f*p;break;case"YZX":this._x=u*d*h+c*f*p,this._y=c*f*h+u*d*p,this._z=c*d*p-u*f*h,this._w=c*d*h-u*f*p;break;case"XZY":this._x=u*d*h-c*f*p,this._y=c*f*h-u*d*p,this._z=c*d*p+u*f*h,this._w=c*d*h+u*f*p;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],h=e[10],u=n+a+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(d-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const mc=class mc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),d=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*d,this.y=n+l*d+a*c-r*h,this.z=s+l*h+r*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ka.copy(this).projectOnVector(t),this.sub(Ka)}reflect(t){return this.sub(Ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mc.prototype.isVector3=!0;let W=mc;const Ka=new W,Jc=new Rn,gc=class gc{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],_=s[1],M=s[4],v=s[7],b=s[2],w=s[5],S=s[8];return r[0]=o*x+a*_+l*b,r[3]=o*m+a*M+l*w,r[6]=o*g+a*v+l*S,r[1]=c*x+d*_+h*b,r[4]=c*m+d*M+h*w,r[7]=c*g+d*v+h*S,r[2]=u*x+f*_+p*b,r[5]=u*m+f*M+p*w,r[8]=u*g+f*v+p*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=d*o-a*c,u=a*l-d*r,f=c*r-o*l,p=e*h+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=h*x,t[1]=(s*c-d*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(d*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Vr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qa.makeScale(t,e)),this}rotate(t){return Vr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qa.makeRotation(-t)),this}translate(t,e){return Vr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};gc.prototype.isMatrix3=!0;let Xt=gc;const qa=new Xt,$c=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jc=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tp(){const i={enabled:!0,workingColorSpace:kr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ge&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?Hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[kr]:{primaries:t,whitePoint:n,transfer:Hr,toXYZ:$c,fromXYZ:jc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:$c,fromXYZ:jc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),i}const ce=tp();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hs;class ep{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hs===void 0&&(hs=$s("canvas")),hs.width=t.width,hs.height=t.height;const s=hs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=hs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$s("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let np=0;class Wr{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ja(s[o].image)):r.push(Ja(s[o]))}else r=Ja(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ja(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ep.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}let ip=0;const $a=new W;class Ae extends wi{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=zn,s=zn,r=qe,o=wn,a=Gn,l=cn,c=Ae.DEFAULT_ANISOTROPY,d=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=ls(),this.name="",this.source=new Wr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize($a).x}get height(){return this.source.getSize($a).y}get depth(){return this.source.getSize($a).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ks:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ks:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null,Ae.DEFAULT_MAPPING=Dc,Ae.DEFAULT_ANISOTROPY=1;const xc=class xc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(f+1)/2,b=(g+1)/2,w=(d+u)/4,S=(h+x)/4,y=(p+m)/4;return M>v&&M>b?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=S/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=S/r,s=y/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-p)*(m-p)+(h-x)*(h-x)+(u-d)*(u-d));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(h-x)/_,this.z=(u-d)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xc.prototype.isVector4=!0;let Se=xc;class sp extends wi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ae({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Wr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends sp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qc extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rp extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Zo=class Zo{constructor(t,e,n,s,r,o,a,l,c,d,h,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,d,h,u,f,p,x,m)}set(t,e,n,s,r,o,a,l,c,d,h,u,f,p,x,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=d,g[10]=h,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zo().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),o=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const u=o*d,f=o*h,p=a*d,x=a*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*d,f=l*h,p=c*d,x=c*h;e[0]=u+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*d,e[9]=-a,e[2]=f*a-p,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*d,f=l*h,p=c*d,x=c*h;e[0]=u-x*a,e[4]=-o*h,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*d,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*d,f=o*h,p=a*d,x=a*h;e[0]=l*d,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*h,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*d,e[4]=x-u*h,e[8]=p*h+f,e[1]=h,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=f*h+p,e[10]=u-x*h}else if(t.order==="XZY"){const u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=u*h+x,e[5]=o*d,e[9]=f*h-p,e[2]=p*h-f,e[6]=a*d,e[10]=x*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(op,t,ap)}lookAt(t,e,n){const s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ei.crossVectors(n,hn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ei.crossVectors(n,hn)),Ei.normalize(),Xr.crossVectors(hn,Ei),s[0]=Ei.x,s[4]=Xr.x,s[8]=hn.x,s[1]=Ei.y,s[5]=Xr.y,s[9]=hn.y,s[2]=Ei.z,s[6]=Xr.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],_=n[3],M=n[7],v=n[11],b=n[15],w=s[0],S=s[4],y=s[8],E=s[12],T=s[1],R=s[5],P=s[9],N=s[13],L=s[2],F=s[6],I=s[10],O=s[14],j=s[3],V=s[7],G=s[11],Z=s[15];return r[0]=o*w+a*T+l*L+c*j,r[4]=o*S+a*R+l*F+c*V,r[8]=o*y+a*P+l*I+c*G,r[12]=o*E+a*N+l*O+c*Z,r[1]=d*w+h*T+u*L+f*j,r[5]=d*S+h*R+u*F+f*V,r[9]=d*y+h*P+u*I+f*G,r[13]=d*E+h*N+u*O+f*Z,r[2]=p*w+x*T+m*L+g*j,r[6]=p*S+x*R+m*F+g*V,r[10]=p*y+x*P+m*I+g*G,r[14]=p*E+x*N+m*O+g*Z,r[3]=_*w+M*T+v*L+b*j,r[7]=_*S+M*R+v*F+b*V,r[11]=_*y+M*P+v*I+b*G,r[15]=_*E+M*N+v*O+b*Z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],h=t[6],u=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],_=l*f-c*u,M=a*f-c*h,v=a*u-l*h,b=o*f-c*d,w=o*u-l*d,S=o*h-a*d;return e*(x*_-m*M+g*v)-n*(p*_-m*b+g*w)+s*(p*M-x*b+g*S)-r*(p*v-x*w+m*S)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],d=t[10];return e*(o*d-a*c)-n*(r*d-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],h=t[9],u=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],_=e*a-n*o,M=e*l-s*o,v=e*c-r*o,b=n*l-s*a,w=n*c-r*a,S=s*c-r*l,y=d*x-h*p,E=d*m-u*p,T=d*g-f*p,R=h*m-u*x,P=h*g-f*x,N=u*g-f*m,L=_*N-M*P+v*R+b*T-w*E+S*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return t[0]=(a*N-l*P+c*R)*F,t[1]=(s*P-n*N-r*R)*F,t[2]=(x*S-m*w+g*b)*F,t[3]=(u*w-h*S-f*b)*F,t[4]=(l*T-o*N-c*E)*F,t[5]=(e*N-s*T+r*E)*F,t[6]=(m*v-p*S-g*M)*F,t[7]=(d*S-u*v+f*M)*F,t[8]=(o*P-a*T+c*y)*F,t[9]=(n*T-e*P-r*y)*F,t[10]=(p*w-x*v+g*_)*F,t[11]=(h*v-d*w-f*_)*F,t[12]=(a*E-o*R-l*y)*F,t[13]=(e*R-n*E+s*y)*F,t[14]=(x*M-p*b-m*_)*F,t[15]=(d*b-h*M+u*_)*F,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,d=o+o,h=a+a,u=r*c,f=r*d,p=r*h,x=o*d,m=o*h,g=a*h,_=l*c,M=l*d,v=l*h,b=n.x,w=n.y,S=n.z;return s[0]=(1-(x+g))*b,s[1]=(f+v)*b,s[2]=(p-M)*b,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(u+g))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(p+M)*S,s[9]=(m-_)*S,s[10]=(1-(u+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=us.set(s[0],s[1],s[2]).length();const a=us.set(s[4],s[5],s[6]).length(),l=us.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Cn.copy(this);const c=1/o,d=1/a,h=1/l;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=d,Cn.elements[5]*=d,Cn.elements[6]*=d,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,e.setFromRotationMatrix(Cn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=An,l=!1){const c=this.elements,d=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===An)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Js)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=An,l=!1){const c=this.elements,d=2/(e-t),h=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s);let p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===An)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Js)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Zo.prototype.isMatrix4=!0;let re=Zo;const us=new W,Cn=new re,op=new W(0,0,0),ap=new W(1,1,1),Ei=new W,Xr=new W,hn=new W,th=new re,eh=new Rn;class mn{constructor(t=0,e=0,n=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],h=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(th,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eh.setFromEuler(this),this.setFromQuaternion(eh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class ja{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lp=0;const nh=new W,ds=new Rn,ni=new re,Yr=new W,er=new W,cp=new W,hp=new Rn,ih=new W(1,0,0),sh=new W(0,1,0),rh=new W(0,0,1),oh={type:"added"},up={type:"removed"},fs={type:"childadded",child:null},Qa={type:"childremoved",child:null};class Ge extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new W,e=new mn,n=new Rn,s=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Xt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(ih,t)}rotateY(t){return this.rotateOnAxis(sh,t)}rotateZ(t){return this.rotateOnAxis(rh,t)}translateOnAxis(t,e){return nh.copy(t).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ih,t)}translateY(t){return this.translateOnAxis(sh,t)}translateZ(t){return this.translateOnAxis(rh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yr.copy(t):Yr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(er,Yr,this.up):ni.lookAt(Yr,er,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(ni),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(fe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oh),fs.child=t,this.dispatchEvent(fs),fs.child=null):fe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(up),Qa.child=t,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oh),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,cp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,hp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),h=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ge.DEFAULT_UP=new W(0,1,0),Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $e extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dp={type:"move"};class tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function el(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class Pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=Ya(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=el(o,r,t+.3333333333333333),this.g=el(o,r,t),this.b=el(o,r,t-.3333333333333333)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=ah[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ce.workingToColorSpace(je.copy(this),t),Math.round(Qt(je.r*255,0,255))*65536+Math.round(Qt(je.g*255,0,255))*256+Math.round(Qt(je.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(je.copy(this),e);const n=je.r,s=je.g,r=je.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Fe){ce.workingToColorSpace(je.copy(this),t);const e=je.r,n=je.g,s=je.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(Zr);const n=tr(Ti.h,Zr.h,e),s=tr(Ti.s,Zr.s,e),r=tr(Ti.l,Zr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Pt;Pt.NAMES=ah;class nl extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ln=new W,ii=new W,il=new W,si=new W,ps=new W,ms=new W,lh=new W,sl=new W,rl=new W,ol=new W,al=new Se,ll=new Se,cl=new Se;class Pn{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ln.subVectors(t,e),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ln.subVectors(s,e),ii.subVectors(n,e),il.subVectors(t,e);const o=Ln.dot(Ln),a=Ln.dot(ii),l=Ln.dot(il),c=ii.dot(ii),d=ii.dot(il),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const u=1/h,f=(c*l-a*d)*u,p=(o*d-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return al.setScalar(0),ll.setScalar(0),cl.setScalar(0),al.fromBufferAttribute(t,e),ll.fromBufferAttribute(t,n),cl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(al,r.x),o.addScaledVector(ll,r.y),o.addScaledVector(cl,r.z),o}static isFrontFacing(t,e,n,s){return Ln.subVectors(n,e),ii.subVectors(t,e),Ln.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Ln.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ps.subVectors(s,n),ms.subVectors(r,n),sl.subVectors(t,n);const l=ps.dot(sl),c=ms.dot(sl);if(l<=0&&c<=0)return e.copy(n);rl.subVectors(t,s);const d=ps.dot(rl),h=ms.dot(rl);if(d>=0&&h<=d)return e.copy(s);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0&&l-d>0)return o=l/(l-d),e.copy(n).addScaledVector(ps,o);ol.subVectors(t,r);const f=ps.dot(ol),p=ms.dot(ol);if(p>=0&&f<=p)return e.copy(r);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(ms,a);const m=d*p-f*h;if(m<=0&&h-d>=0&&f-p>=0)return lh.subVectors(r,s),a=(h-d)/(h-d+(f-p)),e.copy(s).addScaledVector(lh,a);const g=1/(m+x+u);return o=x*g,a=u*g,e.copy(n).addScaledVector(ps,o).addScaledVector(ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ai{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nr),qr.subVectors(this.max,nr),gs.subVectors(t.a,nr),xs.subVectors(t.b,nr),_s.subVectors(t.c,nr),Ri.subVectors(xs,gs),Ci.subVectors(_s,xs),ki.subVectors(gs,_s);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-ki.z,ki.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,ki.z,0,-ki.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-ki.y,ki.x,0];return!hl(e,gs,xs,_s,qr)||(e=[1,0,0,0,1,0,0,0,1],!hl(e,gs,xs,_s,qr))?!1:(Jr.crossVectors(Ri,Ci),e=[Jr.x,Jr.y,Jr.z],hl(e,gs,xs,_s,qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ri=[new W,new W,new W,new W,new W,new W,new W,new W],Dn=new W,Kr=new Ai,gs=new W,xs=new W,_s=new W,Ri=new W,Ci=new W,ki=new W,nr=new W,qr=new W,Jr=new W,Hi=new W;function hl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hi.fromArray(i,r);const a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),d=n.dot(Hi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const oi=fp();function fp(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;!(c&8388608);)c<<=1,d-=8388608;c&=-8388609,d+=947912704,r[l]=c|d}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function pp(i){Math.abs(i)>65504&&Vt("DataUtils.toHalfFloat(): Value out of range."),i=Qt(i,-65504,65504),oi.floatView[0]=i;const t=oi.uint32View[0],e=t>>23&511;return oi.baseTable[e]+((t&8388607)>>oi.shiftTable[e])}function mp(i){const t=i>>10;return oi.uint32View[0]=oi.mantissaTable[oi.offsetTable[t]+(i&1023)]+oi.exponentTable[t],oi.floatView[0]}class ch{static toHalfFloat(t){return pp(t)}static fromHalfFloat(t){return mp(t)}}const Pe=new W,$r=new Ut;let gp=0;class Te extends wi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nf,this.updateRanges=[],this.gpuType=En,this.version=0,this._normalizationScale=t!==void 0?Za(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Kc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):qc(t,this.array)}}class hh extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class uh extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}}const xp=new Ai,ir=new W,ul=new W;class Vi{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);const e=ir.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ir,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(ul)),this.expandByPoint(ir.copy(t.center).sub(ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let _p=0;const gn=new re,dl=new Ge,Ms=new W,un=new Ai,sr=new Ai,ke=new W;class Re extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uf(t)?uh:hh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return dl.lookAt(t),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ye(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(un.min,sr.min),un.expandByPoint(ke),ke.addVectors(un.max,sr.max),un.expandByPoint(ke)):(un.expandByPoint(sr.min),un.expandByPoint(sr.max))}un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)ke.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(t,c),ke.add(Ms)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Te(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let E=0;E<n.count;E++)a[E]=new W,l[E]=new W;const d=new W,h=new W,u=new W,f=new Ut,p=new Ut,x=new Ut,m=new W,g=new W;function _(E,T,R){c[E]=c[T]=c[R]=1,d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,T),x.fromBufferAttribute(r,R),h.sub(d),u.sub(d),p.sub(f),x.sub(f);const P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(m.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(P),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(P),a[E].add(m),a[T].add(m),a[R].add(m),l[E].add(g),l[T].add(g),l[R].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let E=0,T=M.length;E<T;++E){const R=M[E],P=R.start,N=R.count;for(let L=P,F=P+N;L<F;L+=3)_(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const v=new W,b=new W,w=new W,S=new W;function y(E){w.fromBufferAttribute(s,E),S.copy(w);const T=a[E];v.copy(T),v.sub(w.multiplyScalar(w.dot(T))).normalize(),b.crossVectors(S,T);const P=b.dot(l[E])<0?-1:1;o.setXYZW(E,v.x,v.y,v.z,P)}for(let E=0,T=n.count;E<T;++E)c[E]&&y(E);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new W,r=new W,o=new W,a=new W,l=new W,c=new W,d=new W,h=new W;if(t)for(let u=0,f=t.count;u<f;u+=3){const p=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*d;for(let g=0;g<d;g++)u[p++]=c[f++]}return new Te(u,d,h)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const f=c[h];d.push(f.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fl=new W,Mp=new W,vp=new Xt;class Hn{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=fl.subVectors(n,e).cross(Mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(fl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vp.getNormalMatrix(t),s=this.coplanarPoint(fl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Sp=0;class ai extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Xs,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Ec,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xa,this.stencilZFail=Xa,this.stencilZPass=Xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const li=new W,pl=new W,jr=new W,Qr=new W;class to{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){pl.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),Qr.copy(this.origin).sub(pl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(jr),a=Qr.dot(this.direction),l=-Qr.dot(jr),c=Qr.lengthSq(),d=Math.abs(1-o*o);let h,u,f,p;if(d>0)if(h=o*l-a,u=o*a-l,p=r*d,h>=0)if(u>=-p)if(u<=p){const x=1/d;h*=x,u*=x,f=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;else u<=-p?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c):u<=p?(h=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(pl).addScaledVector(jr,u),f}intersectSphere(t,e){if(t.radius<0)return null;li.subVectors(t.center,this.origin);const n=li.dot(this.direction),s=li.dot(li)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),d>=0?(r=(t.min.y-u.y)*d,o=(t.max.y-u.y)*d):(r=(t.max.y-u.y)*d,o=(t.min.y-u.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,d=a.z,h=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,_=n.y-o.y,M=n.z-o.z,v=Math.abs(l),b=Math.abs(c),w=Math.abs(d);let S,y,E,T,R,P,N,L,F,I,O,j;if(v>=b&&v>=w?(E=l,P=h,F=p,j=g,l>=0?(S=c,y=d,T=u,R=f,N=x,L=m,I=_,O=M):(S=d,y=c,T=f,R=u,N=m,L=x,I=M,O=_)):b>=w?(E=c,P=u,F=x,j=_,c>=0?(S=d,y=l,T=f,R=h,N=m,L=p,I=M,O=g):(S=l,y=d,T=h,R=f,N=p,L=m,I=g,O=M)):(E=d,P=f,F=m,j=M,d>=0?(S=l,y=c,T=h,R=u,N=p,L=x,I=g,O=_):(S=c,y=l,T=u,R=h,N=x,L=p,I=_,O=g)),E===0)return null;const V=S/E,G=y/E,Z=1/E,X=T-V*P,K=R-G*P,z=N-V*F,q=L-G*F,nt=I-V*j,ht=O-G*j,et=nt*q-ht*z,it=X*ht-K*nt,Rt=z*K-q*X;if(s){if(et<0||it<0||Rt<0)return null}else if((et<0||it<0||Rt<0)&&(et>0||it>0||Rt>0))return null;const ut=et+it+Rt;if(ut===0)return null;const Mt=Z*(et*P+it*F+Rt*j);return(ut>0?Mt<0:Mt>0)?null:this.at(Mt/ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xn extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Dr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dh=new re,Wi=new to,eo=new Vi,fh=new W,no=new W,io=new W,so=new W,ml=new W,ro=new W,ph=new W,oo=new W;class te extends Ge{constructor(t=new Re,e=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],h=r[l];d!==0&&(ml.fromBufferAttribute(h,t),o?ro.addScaledVector(ml,d):ro.addScaledVector(ml.sub(e),d))}e.add(ro)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!(eo.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(eo,fh)===null||Wi.origin.distanceToSquared(fh)>(t.far-t.near)**2))&&(dh.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(dh),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){const m=u[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,b=M;v<b;v+=3){const w=a.getX(v),S=a.getX(v+1),y=a.getX(v+2);s=ao(this,g,t,n,c,d,h,w,S,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const _=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=ao(this,o,t,n,c,d,h,_,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){const m=u[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,b=M;v<b;v+=3){const w=v,S=v+1,y=v+2;s=ao(this,g,t,n,c,d,h,w,S,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const _=m,M=m+1,v=m+2;s=ao(this,o,t,n,c,d,h,_,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function yp(i,t,e,n,s,r,o,a){let l;if(t.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Mi,a),l===null)return null;oo.copy(a),oo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(oo);return c<e.near||c>e.far?null:{distance:c,point:oo.clone(),object:i}}function ao(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,no),i.getVertexPosition(l,io),i.getVertexPosition(c,so);const d=yp(i,t,e,n,no,io,so,ph);if(d){const h=new W;Pn.getBarycoord(ph,no,io,so,h),s&&(d.uv=Pn.getInterpolatedAttribute(s,a,l,c,h,new Ut)),r&&(d.uv1=Pn.getInterpolatedAttribute(r,a,l,c,h,new Ut)),o&&(d.normal=Pn.getInterpolatedAttribute(o,a,l,c,h,new W),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new W,materialIndex:0};Pn.getNormal(no,io,so,u.normal),d.face=u,d.barycoord=h}return d}class rr extends Ae{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ue,d=Ue,h,u){super(null,o,a,l,c,d,s,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mh extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const vs=new re,gh=new re,lo=[],xh=new Ai,bp=new re,or=new te,ar=new Vi;class He extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new mh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,bp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),xh.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(xh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),ar.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),t.ray.intersectsSphere(ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),gh.multiplyMatrices(n,vs),or.matrixWorld=gh,or.raycast(t,lo);for(let o=0,a=lo.length;o<a;o++){const l=lo[o];l.instanceId=r,l.object=this,e.push(l)}lo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new mh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new rr(new Float32Array(s*this.count),s,this.count,Nr,En));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Xi=new Vi,wp=new Ut(.5,.5),co=new W;class lr{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],h=r[5],u=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],_=r[12],M=r[13],v=r[14],b=r[15];if(s[0].setComponents(c-o,f-d,g-p,b-_).normalize(),s[1].setComponents(c+o,f+d,g+p,b+_).normalize(),s[2].setComponents(c+a,f+h,g+x,b+M).normalize(),s[3].setComponents(c-a,f-h,g-x,b-M).normalize(),n)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,f-u,g-m,b-v).normalize();else if(s[4].setComponents(c-l,f-u,g-m,b-v).normalize(),e===An)s[5].setComponents(c+l,f+u,g+m,b+v).normalize();else if(e===Js)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){Xi.center.set(0,0,0);const e=wp.distanceTo(t.center);return Xi.radius=.7071067811865476+e,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(co.x=s.normal.x>0?t.max.x:t.min.x,co.y=s.normal.y>0?t.max.y:t.min.y,co.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(co)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const _h=new re;class gl{constructor(){this.coordinateSystem=An,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];_h.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new lr),n[s].setFromProjectionMatrix(_h,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new lr),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new gl().copy(this)}}class Mh extends ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ho=new W,uo=new W,vh=new re,cr=new to,fo=new Vi,xl=new W,Sh=new W;class Ep extends Ge{constructor(t=new Re,e=new Mh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ho.fromBufferAttribute(e,s-1),uo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ho.distanceTo(uo);t.setAttribute("lineDistance",new ye(n,1))}else Vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(s),fo.radius+=r,t.ray.intersectsSphere(fo)===!1)return;vh.copy(s).invert(),cr.copy(t.ray).applyMatrix4(vh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){const g=d.getX(x),_=d.getX(x+1),M=po(this,t,cr,l,g,_,x);M&&e.push(M)}if(this.isLineLoop){const x=d.getX(p-1),m=d.getX(f),g=po(this,t,cr,l,x,m,p-1);g&&e.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){const g=po(this,t,cr,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){const x=po(this,t,cr,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function po(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(ho.fromBufferAttribute(a,s),uo.fromBufferAttribute(a,r),e.distanceSqToSegment(ho,uo,xl,Sh)>n)return;xl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(xl);if(!(c<t.near||c>t.far))return{distance:c,point:Sh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const yh=new W,bh=new W;class wh extends Ep{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)yh.fromBufferAttribute(e,s),bh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yh.distanceTo(bh);t.setAttribute("lineDistance",new ye(n,1))}else Vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Eh extends Ae{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Ue,this.minFilter=Ue,this.generateMipmaps=!1,this.needsUpdate=!0}copy(t){return super.copy(t),this.source=new Wr(Object.assign({},t.image)),this}}class Th extends Ae{constructor(t=[],e=rs,n,s,r,o,a,l,c,d){super(t,e,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _l extends Ae{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ss extends Ae{constructor(t,e,n=Bn,s,r,o,a=Ue,l=Ue,c,d=vi,h=1){if(d!==vi&&d!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:h};super(u,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Ah extends Ss{constructor(t,e=Bn,n=rs,s,r,o=Ue,a=Ue,l,c=vi){const d={width:t,height:t,depth:1},h=[d,d,d,d,d,d];super(t,t,e,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Rh extends Ae{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yi extends Re{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],h=[];let u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(h,2));function p(x,m,g,_,M,v,b,w,S,y,E){const T=v/S,R=b/y,P=v/2,N=b/2,L=w/2,F=S+1,I=y+1;let O=0,j=0;const V=new W;for(let G=0;G<I;G++){const Z=G*R-N;for(let X=0;X<F;X++){const K=X*T-P;V[x]=K*_,V[m]=Z*M,V[g]=L,c.push(V.x,V.y,V.z),V[x]=0,V[m]=0,V[g]=w>0?1:-1,d.push(V.x,V.y,V.z),h.push(X/S),h.push(1-G/y),O+=1}}for(let G=0;G<y;G++)for(let Z=0;Z<S;Z++){const X=u+Z+F*G,K=u+Z+F*(G+1),z=u+(Z+1)+F*(G+1),q=u+(Z+1)+F*G;l.push(X,K,q),l.push(K,z,q),j+=6}a.addGroup(f,j,E),f+=j,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ml extends Re{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],h=[],u=[],f=[];let p=0;const x=[],m=n/2;let g=0;_(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(f,2));function _(){const v=new W,b=new W;let w=0;const S=(e-t)/n;for(let y=0;y<=r;y++){const E=[],T=y/r,R=T*(e-t)+t;for(let P=0;P<=s;P++){const N=P/s,L=N*l+a,F=Math.sin(L),I=Math.cos(L);b.x=R*F,b.y=-T*n+m,b.z=R*I,h.push(b.x,b.y,b.z),v.set(F,S,I).normalize(),u.push(v.x,v.y,v.z),f.push(N,1-T),E.push(p++)}x.push(E)}for(let y=0;y<s;y++)for(let E=0;E<r;E++){const T=x[E][y],R=x[E+1][y],P=x[E+1][y+1],N=x[E][y+1];(t>0||E!==0)&&(d.push(T,R,N),w+=3),(e>0||E!==r-1)&&(d.push(R,P,N),w+=3)}c.addGroup(g,w,0),g+=w}function M(v){const b=p,w=new Ut,S=new W;let y=0;const E=v===!0?t:e,T=v===!0?1:-1;for(let P=1;P<=s;P++)h.push(0,m*T,0),u.push(0,T,0),f.push(.5,.5),p++;const R=p;for(let P=0;P<=s;P++){const L=P/s*l+a,F=Math.cos(L),I=Math.sin(L);S.x=E*I,S.y=m*T,S.z=E*F,h.push(S.x,S.y,S.z),u.push(0,T,0),w.x=F*.5+.5,w.y=I*.5*T+.5,f.push(w.x,w.y),p++}for(let P=0;P<s;P++){const N=b+P,L=R+P;v===!0?d.push(L,L+1,N):d.push(L+1,L,N),y+=3}c.addGroup(g,y,v===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ml(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vl extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),d(),this.setAttribute("position",new ye(r,3)),this.setAttribute("normal",new ye(r.slice(),3)),this.setAttribute("uv",new ye(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const M=new W,v=new W,b=new W;for(let w=0;w<e.length;w+=3)f(e[w+0],M),f(e[w+1],v),f(e[w+2],b),l(M,v,b,_)}function l(_,M,v,b){const w=b+1,S=[];for(let y=0;y<=w;y++){S[y]=[];const E=_.clone().lerp(v,y/w),T=M.clone().lerp(v,y/w),R=w-y;for(let P=0;P<=R;P++)P===0&&y===w?S[y][P]=E:S[y][P]=E.clone().lerp(T,P/R)}for(let y=0;y<w;y++)for(let E=0;E<2*(w-y)-1;E++){const T=Math.floor(E/2);E%2===0?(u(S[y][T+1]),u(S[y+1][T]),u(S[y][T])):(u(S[y][T+1]),u(S[y+1][T+1]),u(S[y+1][T]))}}function c(_){const M=new W;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(_),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function d(){const _=new W;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];const v=m(_)/2/Math.PI+.5,b=g(_)/Math.PI+.5;o.push(v,1-b)}p(),h()}function h(){for(let _=0;_<o.length;_+=6){const M=o[_+0],v=o[_+2],b=o[_+4],w=Math.max(M,v,b),S=Math.min(M,v,b);w>.9&&S<.1&&(M<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,M){const v=_*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function p(){const _=new W,M=new W,v=new W,b=new W,w=new Ut,S=new Ut,y=new Ut;for(let E=0,T=0;E<r.length;E+=9,T+=6){_.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),w.set(o[T+0],o[T+1]),S.set(o[T+2],o[T+3]),y.set(o[T+4],o[T+5]),b.copy(_).add(M).add(v).divideScalar(3);const R=m(b);x(w,T+0,_,R),x(S,T+2,M,R),x(y,T+4,v,R)}}function x(_,M,v,b){b<0&&_.x===1&&(o[M]=_.x-1),v.x===0&&v.z===0&&(o[M]=b/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vl(t.vertices,t.indices,t.radius,t.detail)}}function Tp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Ch(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Pp(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let d=a,h=l;for(let u=e;u<s;u+=e){const f=i[u],p=i[u+1];f<a&&(a=f),p<l&&(l=p),f>d&&(d=f),p>h&&(h=p)}c=Math.max(d-a,h-l),c=c!==0?32767/c:0}return hr(r,o,e,a,l,c,0),o}function Ch(i,t,e,n,s){let r;if(s===Hp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Ih(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Ih(o/n|0,i[o],i[o+1],r);return r&&ys(r,r.next)&&(fr(r),r=r.next),r}function Zi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ys(e,e.next)||be(e.prev,e,e.next)===0)){if(fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function hr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Fp(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Rp(i,n,s,r):Ap(i)){t.push(l.i,i.i,c.i),fr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Cp(Zi(i),t),hr(i,t,e,n,s,r,2)):o===2&&Lp(i,t,e,n,s,r):hr(Zi(i),t,e,n,s,r,1);break}}}function Ap(i){const t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,d=Math.min(s,r,o),h=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=d&&p.x<=u&&p.y>=h&&p.y<=f&&ur(s,a,r,l,o,c,p.x,p.y)&&be(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Rp(i,t,e,n){const s=i.prev,r=i,o=i.next;if(be(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,d=s.y,h=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(d,h,u),x=Math.max(a,l,c),m=Math.max(d,h,u),g=Sl(f,p,t,e,n),_=Sl(x,m,t,e,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=g&&v&&v.z<=_;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&ur(a,d,l,h,c,u,M.x,M.y)&&be(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&ur(a,d,l,h,c,u,v.x,v.y)&&be(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&ur(a,d,l,h,c,u,M.x,M.y)&&be(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&ur(a,d,l,h,c,u,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Cp(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ys(n,s)&&Ph(n,e,e.next,s)&&dr(n,s)&&dr(s,n)&&(t.push(n.i,e.i,s.i),fr(e),fr(e.next),e=i=s),e=e.next}while(e!==i);return Zi(e)}function Lp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Bp(o,a)){let l=Dh(o,a);o=Zi(o,o.next),l=Zi(l,l.next),hr(o,t,e,n,s,r,0),hr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Pp(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Ch(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(zp(c))}s.sort(Dp);for(let r=0;r<s.length;r++)e=Ip(s[r],e);return e}function Dp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ip(i,t){const e=Np(i,t);if(!e)return t;const n=Dh(e,i);return Zi(n,n.next),Zi(e,e.next)}function Np(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(ys(i,e))return e;do{if(ys(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let d=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Lh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const h=Math.abs(s-e.y)/(n-e.x);dr(e,i)&&(h<d||h===d&&(e.x>o.x||e.x===o.x&&Up(o,e)))&&(o=e,d=h)}e=e.next}while(e!==a);return o}function Up(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function Fp(i,t,e,n){let s=i;do s.z===0&&(s.z=Sl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Op(s)}function Op(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Sl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function zp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Lh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ur(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Lh(i,t,e,n,s,r,o,a)}function Bp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Gp(i,t)&&(dr(i,t)&&dr(t,i)&&kp(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||ys(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ys(i,t){return i.x===t.x&&i.y===t.y}function Ph(i,t,e,n){const s=go(be(i,t,e)),r=go(be(i,t,n)),o=go(be(e,n,i)),a=go(be(e,n,t));return!!(s!==r&&o!==a||s===0&&mo(i,e,t)||r===0&&mo(i,n,t)||o===0&&mo(e,i,n)||a===0&&mo(e,t,n))}function mo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function go(i){return i>0?1:i<0?-1:0}function Gp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ph(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function dr(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function kp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Dh(i,t){const e=yl(i.i,i.x,i.y),n=yl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ih(i,t,e,n){const s=yl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Vp{static triangulate(t,e,n=2){return Tp(t,e,n)}}class xo{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return xo.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Nh(t),Uh(n,t);let o=t.length;e.forEach(Nh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Uh(n,e[l]);const a=Vp.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Nh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Uh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class bl extends vl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bl(t.radius,t.detail)}}class Vn extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,h=t/a,u=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<d;g++){const _=g*u-o;for(let M=0;M<c;M++){const v=M*h-r;p.push(v,-_,0),x.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const M=_+c*g,v=_+c*(g+1),b=_+1+c*(g+1),w=_+1+c*g;f.push(M,v,w),f.push(v,b,w)}this.setIndex(f),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.width,t.height,t.widthSegments,t.heightSegments)}}class wl extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new W,u=new W,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const _=[],M=g/n,v=o+M*a,b=t*Math.cos(v),w=Math.sqrt(t*t-b*b);let S=0;g===0&&o===0?S=.5/e:g===n&&l===Math.PI&&(S=-.5/e);for(let y=0;y<=e;y++){const E=y/e,T=s+E*r;h.x=-w*Math.cos(T),h.y=b,h.z=w*Math.sin(T),p.push(h.x,h.y,h.z),u.copy(h).normalize(),x.push(u.x,u.y,u.z),m.push(E+S,1-M),_.push(c++)}d.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){const M=d[g][_+1],v=d[g][_],b=d[g+1][_],w=d[g+1][_+1];(g!==0||o>0)&&f.push(M,v,w),(g!==n-1||l<Math.PI)&&f.push(v,b,w)}this.setIndex(f),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function bs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Fh(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Fh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function nn(i){const t={};for(let e=0;e<i.length;e++){const n=bs(i[e]);for(const s in n)t[s]=n[s]}return t}function Fh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Wp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const Xp={clone:bs,merge:nn};var Yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xe extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yp,this.fragmentShader=Zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=Wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Pt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new W().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new re().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Kp extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class In extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qp extends ai{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pt(16777215),this.specular=new Pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Dr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jp extends ai{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Pt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class _o extends ai{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Dr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $p extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jp extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const El={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(zh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!zh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function zh(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Qp{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const t0=new Qp;class Tl{constructor(t){this.manager=t!==void 0?t:t0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Tl.DEFAULT_MATERIAL_NAME="__DEFAULT";const ws=new WeakMap;class e0 extends Tl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=El.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let h=ws.get(o);h===void 0&&(h=[],ws.set(o,h)),h.push({onLoad:e,onError:s})}return o}const a=$s("img");function l(){d(),e&&e(this);const h=ws.get(this)||[];for(let u=0;u<h.length;u++){const f=h[u];f.onLoad&&f.onLoad(this)}ws.delete(this),r.manager.itemEnd(t)}function c(h){d(),s&&s(h),El.remove(`image:${t}`);const u=ws.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onError&&p.onError(h)}ws.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),El.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class n0 extends Tl{constructor(t){super(t)}load(t,e,n,s){const r=new Ae,o=new e0(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Bh extends Ge{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Gh extends Bh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Al=new re,kh=new W,Hh=new W;class i0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;kh.setFromMatrixPosition(t.matrixWorld),e.position.copy(kh),Hh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Al,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Js||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Mo=new W,vo=new Rn,Wn=new W;class Rl extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Mo,vo,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,vo,Wn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Mo,vo,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,vo,Wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Li=new W,Vh=new Ut,Wh=new Ut;class Nn extends Rl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,Vh,Wh),e.subVectors(Wh,Vh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Xh extends Rl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class s0 extends i0{constructor(){super(new Xh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yh extends Bh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new s0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Es=-90,Ts=1;class Cl extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Nn(Es,Ts,t,e);s.layers=this.layers,this.add(s);const r=new Nn(Es,Ts,t,e);r.layers=this.layers,this.add(r);const o=new Nn(Es,Ts,t,e);o.layers=this.layers,this.add(o);const a=new Nn(Es,Ts,t,e);a.layers=this.layers,this.add(a);const l=new Nn(Es,Ts,t,e);l.layers=this.layers,this.add(l);const c=new Nn(Es,Ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(h,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class r0 extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const Zh=new re;class o0{constructor(t,e,n=0,s=1/0){this.ray=new to(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ja,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):fe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Zh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zh),this}intersectObject(t,e=!0,n=[]){return Ll(t,this,n,e),n.sort(Kh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ll(t[s],this,n,e);return n.sort(Kh),n}}function Kh(i,t){return i.distance-t.distance}function Ll(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ll(r[o],t,e,!0)}}class So{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const _c=class _c{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};_c.prototype.isMatrix2=!0;let qh=_c;class a0 extends wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Jh(i,t,e,n){const s=l0(n);switch(e){case Oc:return i*t;case Nr:return i*t/s.components*s.byteLength;case da:return i*t/s.components*s.byteLength;case yi:return i*t*2/s.components*s.byteLength;case fa:return i*t*2/s.components*s.byteLength;case zc:return i*t*3/s.components*s.byteLength;case Gn:return i*t*4/s.components*s.byteLength;case pa:return i*t*4/s.components*s.byteLength;case Ur:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Or:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:case _a:return Math.max(i,16)*Math.max(t,8)/4;case ma:case xa:return Math.max(i,8)*Math.max(t,8)/2;case Ma:case va:case ya:case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sa:case Br:case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ba:case Ga:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ha:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Gr:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function l0(i){switch(i){case cn:case Ic:return{byteLength:1,components:1};case qs:case Nc:case Tn:return{byteLength:2,components:1};case ha:case ua:return{byteLength:2,components:4};case Bn:case ca:case En:return{byteLength:4,components:1};case Uc:case Fc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xi}})),typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xi);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $h(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function c0(i){const t=new WeakMap;function e(a,l){const c=a.array,d=a.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,d);else{h.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<h.length;f++){const p=h[u],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,h[u]=x)}h.length=u+1;for(let f=0,p=h.length;f<p;f++){const x=h[f];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var h0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u0=`#ifdef USE_ALPHAHASH
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
#endif`,d0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g0=`#ifdef USE_AOMAP
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
#endif`,x0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_0=`#ifdef USE_BATCHING
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
#endif`,M0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,v0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b0=`#ifdef USE_IRIDESCENCE
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
#endif`,w0=`#ifdef USE_BUMPMAP
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,I0=`#define PI 3.141592653589793
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
} // validated`,N0=`vec3 transformedNormal = objectNormal;
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
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B0="gl_FragColor = linearToOutputTexel( gl_FragColor );",G0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k0=`#ifdef USE_ENVMAP
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
#endif`,H0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
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
}`,$0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,em=`#ifdef USE_ENVMAP
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
#endif`,nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,om=`PhysicalMaterial material;
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
#endif`,am=`uniform sampler2D dfgLUT;
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
}`,lm=`
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
#endif`,cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,um=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mm=`#if defined( USE_POINTS_UV )
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
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bm=`#if defined( USE_MORPHCOLORS )
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
#endif`,wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
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
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dm=`#ifdef USE_NORMALMAP
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
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Km=`float getShadowMask() {
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
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jm=`#ifdef USE_SKINNING
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
#endif`,$m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jm=`#ifdef USE_SKINNING
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
#endif`,Qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ng=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ig=`#ifdef USE_TRANSMISSION
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
#endif`,sg=`#ifdef USE_TRANSMISSION
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qt={alphahash_fragment:h0,alphahash_pars_fragment:u0,alphamap_fragment:d0,alphamap_pars_fragment:f0,alphatest_fragment:p0,alphatest_pars_fragment:m0,aomap_fragment:g0,aomap_pars_fragment:x0,batching_pars_vertex:_0,batching_vertex:M0,begin_vertex:v0,beginnormal_vertex:S0,bsdfs:y0,iridescence_fragment:b0,bumpmap_pars_fragment:w0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:A0,clipping_planes_vertex:R0,color_fragment:C0,color_pars_fragment:L0,color_pars_vertex:P0,color_vertex:D0,common:I0,defaultnormal_vertex:N0,displacementmap_pars_vertex:U0,displacementmap_vertex:F0,emissivemap_fragment:O0,emissivemap_pars_fragment:z0,colorspace_fragment:B0,colorspace_pars_fragment:G0,envmap_fragment:k0,envmap_common_pars_fragment:H0,envmap_pars_fragment:V0,envmap_pars_vertex:W0,envmap_physical_pars_fragment:em,envmap_vertex:X0,fog_vertex:Y0,fog_pars_vertex:Z0,fog_fragment:K0,fog_pars_fragment:q0,gradientmap_pars_fragment:J0,lightmap_pars_fragment:$0,lights_lambert_fragment:j0,lights_lambert_pars_fragment:Q0,lights_pars_begin:tm,lights_toon_fragment:nm,lights_toon_pars_fragment:im,lights_phong_fragment:sm,lights_phong_pars_fragment:rm,lights_physical_fragment:om,lights_physical_pars_fragment:am,lights_fragment_begin:lm,lights_fragment_maps:cm,lights_fragment_end:hm,lightprobes_pars_fragment:um,logdepthbuf_fragment:dm,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:pm,logdepthbuf_vertex:mm,map_fragment:gm,map_pars_fragment:xm,map_particle_fragment:_m,map_particle_pars_fragment:Mm,metalnessmap_fragment:vm,metalnessmap_pars_fragment:Sm,morphinstance_vertex:ym,morphcolor_vertex:bm,morphnormal_vertex:wm,morphtarget_pars_vertex:Em,morphtarget_vertex:Tm,normal_fragment_begin:Am,normal_fragment_maps:Rm,normal_pars_fragment:Cm,normal_pars_vertex:Lm,normal_vertex:Pm,normalmap_pars_fragment:Dm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Nm,clearcoat_pars_fragment:Um,iridescence_pars_fragment:Fm,opaque_fragment:Om,packing:zm,premultiplied_alpha_fragment:Bm,project_vertex:Gm,dithering_fragment:km,dithering_pars_fragment:Hm,roughnessmap_fragment:Vm,roughnessmap_pars_fragment:Wm,shadowmap_pars_fragment:Xm,shadowmap_pars_vertex:Ym,shadowmap_vertex:Zm,shadowmask_pars_fragment:Km,skinbase_vertex:qm,skinning_pars_vertex:Jm,skinning_vertex:$m,skinnormal_vertex:jm,specularmap_fragment:Qm,specularmap_pars_fragment:tg,tonemapping_fragment:eg,tonemapping_pars_fragment:ng,transmission_fragment:ig,transmission_pars_fragment:sg,uv_pars_fragment:rg,uv_pars_vertex:og,uv_vertex:ag,worldpos_vertex:lg,background_vert:`varying vec2 vUv;
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
}`},Tt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Xn={basic:{uniforms:nn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:nn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:nn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:nn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:nn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:nn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:nn([Tt.points,Tt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:nn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:nn([Tt.common,Tt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:nn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:nn([Tt.sprite,Tt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:nn([Tt.common,Tt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:nn([Tt.lights,Tt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Xn.physical={uniforms:nn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const yo={r:0,b:0,g:0},cg=new re,jh=new Xt;jh.set(-1,0,0,0,1,0,0,0,1);function hg(i,t,e,n,s,r){const o=new Pt(0);let a=s===!0?0:1,l,c,d=null,h=0,u=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){const v=_.backgroundBlurriness>0;M=t.get(M,v)}return M}function p(_){let M=!1;const v=f(_);v===null?m(o,a):v&&v.isColor&&(m(v,1),M=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,M){const v=f(M);v&&v.isCubeTexture?(c===void 0&&(c=new te(new Yi(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:bs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cg.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(jh),c.material.toneMapped=ce.getTransfer(v.colorSpace)!==ge,(d!==v||h!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new te(new Vn(2,2),new Xe({name:"BackgroundMaterial",uniforms:bs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ce.getTransfer(v.colorSpace)!==ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,h=v.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(yo,Oh(i)),e.buffers.color.setClear(yo.r,yo.g,yo.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:x,dispose:g}}function ug(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(R,P,N,L,F){let I=!1;const O=h(R,L,N,P);r!==O&&(r=O,c(r.object)),I=f(R,L,N,F),I&&p(R,L,N,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,v(R,P,N,L),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function d(R){return i.deleteVertexArray(R)}function h(R,P,N,L){const F=L.wireframe===!0;let I=n[P.id];I===void 0&&(I={},n[P.id]=I);const O=R.isInstancedMesh===!0?R.id:0;let j=I[O];j===void 0&&(j={},I[O]=j);let V=j[N.id];V===void 0&&(V={},j[N.id]=V);let G=V[F];return G===void 0&&(G=u(l()),V[F]=G),G}function u(R){const P=[],N=[],L=[];for(let F=0;F<e;F++)P[F]=0,N[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:L,object:R,attributes:{},index:null}}function f(R,P,N,L){const F=r.attributes,I=P.attributes;let O=0;const j=N.getAttributes();for(const V in j)if(j[V].location>=0){const Z=F[V];let X=I[V];if(X===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(X=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(X=R.instanceColor)),Z===void 0||Z.attribute!==X||X&&Z.data!==X.data)return!0;O++}return r.attributesNum!==O||r.index!==L}function p(R,P,N,L){const F={},I=P.attributes;let O=0;const j=N.getAttributes();for(const V in j)if(j[V].location>=0){let Z=I[V];Z===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor));const X={};X.attribute=Z,Z&&Z.data&&(X.data=Z.data),F[V]=X,O++}r.attributes=F,r.attributesNum=O,r.index=L}function x(){const R=r.newAttributes;for(let P=0,N=R.length;P<N;P++)R[P]=0}function m(R){g(R,0)}function g(R,P){const N=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;N[R]=1,L[R]===0&&(i.enableVertexAttribArray(R),L[R]=1),F[R]!==P&&(i.vertexAttribDivisor(R,P),F[R]=P)}function _(){const R=r.newAttributes,P=r.enabledAttributes;for(let N=0,L=P.length;N<L;N++)P[N]!==R[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function M(R,P,N,L,F,I,O){O===!0?i.vertexAttribIPointer(R,P,N,F,I):i.vertexAttribPointer(R,P,N,L,F,I)}function v(R,P,N,L){x();const F=L.attributes,I=N.getAttributes(),O=P.defaultAttributeValues;for(const j in I){const V=I[j];if(V.location>=0){let G=F[j];if(G===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(G=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(G=R.instanceColor)),G!==void 0){const Z=G.normalized,X=G.itemSize,K=t.get(G);if(K===void 0)continue;const z=K.buffer,q=K.type,nt=K.bytesPerElement,ht=q===i.INT||q===i.UNSIGNED_INT||G.gpuType===ca;if(G.isInterleavedBufferAttribute){const et=G.data,it=et.isInterleavedBuffer===!0?et.stride:et.itemSize,Rt=G.offset;if(et.isInstancedInterleavedBuffer||et.isInstancedBufferAttribute){for(let ut=0;ut<V.locationSize;ut++)g(V.location+ut,et.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ut=0;ut<V.locationSize;ut++)m(V.location+ut);i.bindBuffer(i.ARRAY_BUFFER,z);for(let ut=0;ut<V.locationSize;ut++)M(V.location+ut,X/V.locationSize,q,Z,it*nt,(Rt+X/V.locationSize*ut)*nt,ht)}else{if(G.isInstancedBufferAttribute){for(let et=0;et<V.locationSize;et++)g(V.location+et,G.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let et=0;et<V.locationSize;et++)m(V.location+et);i.bindBuffer(i.ARRAY_BUFFER,z);for(let et=0;et<V.locationSize;et++)M(V.location+et,X/V.locationSize,q,Z,X*nt,X/V.locationSize*et*nt,ht)}}else if(O!==void 0){const Z=O[j];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(V.location,Z);break;case 3:i.vertexAttrib3fv(V.location,Z);break;case 4:i.vertexAttrib4fv(V.location,Z);break;default:i.vertexAttrib1fv(V.location,Z)}}}}_()}function b(){E();for(const R in n){const P=n[R];for(const N in P){const L=P[N];for(const F in L){const I=L[F];for(const O in I)d(I[O].object),delete I[O];delete L[F]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;const P=n[R.id];for(const N in P){const L=P[N];for(const F in L){const I=L[F];for(const O in I)d(I[O].object),delete I[O];delete L[F]}}delete n[R.id]}function S(R){for(const P in n){const N=n[P];for(const L in N){const F=N[L];if(F[R.id]===void 0)continue;const I=F[R.id];for(const O in I)d(I[O].object),delete I[O];delete F[R.id]}}}function y(R){for(const P in n){const N=n[P],L=R.isInstancedMesh===!0?R.id:0,F=N[L];if(F!==void 0){for(const I in F){const O=F[I];for(const j in O)d(O[j].object),delete O[j];delete F[I]}delete N[L],Object.keys(N).length===0&&delete n[P]}}}function E(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function dg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),e.update(c,n,d))}function a(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let u=0;for(let f=0;f<d;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function fg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==Gn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const y=S===Tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==cn&&S!==En&&!y&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(Vt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&h===!1;e.reversedDepthBuffer===!0&&h===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&h===!0&&Vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:b,samples:w}}function pg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Hn,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||s;return s=u,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=d(h,u,0)},this.setState=function(h,u,f){const p=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!s||p===null||p.length===0||r&&!m)r?d(null):c();else{const _=r?0:n,M=_*4;let v=g.clippingState||null;l.value=v,v=d(p,u,M,f);for(let b=0;b!==M;++b)v[b]=e[b];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,u,f,p){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const g=f+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,v=f;M!==x;++M,v+=4)o.copy(h[M]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}class Pl extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Th(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yi(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:is});r.uniforms.tEquirect.value=e;const o=new te(s,r),a=e.minFilter;return e.minFilter===wn&&(e.minFilter=qe),new Cl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Qh=256,mg=3,gg=20,tu=256,eu=16,xg=3,_g=new W,Mg=new Pt;class bo{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Cl(1,10,null),this._boxMesh=new te(new Yi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=_g}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),d=this._getSourceTarget(!0);e>0&&(d.texture.mipmapsAutoUpdate=!1);const h=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Mg));const m=new Cl(n,s,d);return m.position.copy(a),m.update(l,t),l.autoClear=h,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Qh,Zc(t))}_fromTexture(t,e){t.mapping===rs||t.mapping===Zs?this._setSize(t.image.length===0?Qh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=nu(t,!1,!1),n=Math.log2(t)-mg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=nu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===rs||t.mapping===Zs?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=iu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=vg(),this._integrationMaterial=Sg());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/eu);for(let o=0;o<=n;o++){const a=bo.lodToRoughness(o,n);if(o>n-xg)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(tu*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=yg());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function nu(i,t,e){return new Pl(i,{minFilter:wn,generateMipmaps:t,type:Tn,colorSpace:kr,depthBuffer:e})}function pr(i,t,e){return new Xe({name:i,uniforms:t,vertexShader:qt.cube_vert,fragmentShader:e,side:en,blending:is,depthTest:!1,depthWrite:!1})}function vg(){return pr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${tu}u

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
	`)}function Sg(){return pr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:eu}},`

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
	`)}function yg(){return pr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gg}
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
	`)}function iu(){return pr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function su(){return pr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function bg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===ra||f===oa)if(t.has(u)){const p=t.get(u).texture;return a(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const x=new Pl(p.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const f=u.mapping,p=f===ra||f===oa,x=f===rs||f===Zs;if(p||x){let m=e.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new bo(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const _=u.image;return p&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new bo(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function a(u,f){return f===ra?u.mapping=rs:f===oa&&(u.mapping=Zs),u}function l(u){let f=0;const p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){const f=u.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(u){const f=u.target;f.removeEventListener("dispose",d);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function wg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Vr("WebGLRenderer: "+n+" extension not supported."),s}}}function Eg(i,t,e,n){const s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);const x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function d(p){const x=p.attributes;for(const m in x)t.update(x[m],i.ARRAY_BUFFER)}function h(p){const x=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const _=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?uh:hh,v=new M(Math.ceil(_/3)*6,1),b=v.array;if(x!==null){const S=x.array;g=x.version;for(let y=0,E=0;y<_;y+=3){const T=S[y+0],R=S[y+1],P=S[y+2];b[E++]=T,b[E++]=R,b[E++]=R,b[E++]=P,b[E++]=P,b[E++]=T}}else{g=m.version;for(let S=0,y=0;S<_;S+=3){const E=S+0,T=S+1,R=S+2;b[y++]=E,b[y++]=T,b[y++]=T,b[y++]=R,b[y++]=R,b[y++]=E}}v.version=g;const w=r.get(p);w&&t.remove(w),r.set(p,v)}function u(p){const x=r.get(p);if(x){const m=p.index;m!==null&&x.version<m.version&&h(p)}else h(p);return r.get(p)}function f(){for(const p in s){const x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:d,getWireframeAttribute:u,dispose:f}}function Tg(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,u){i.drawElements(n,u,r,h*o),e.update(u,n,1)}function c(h,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,h*o,f),e.update(u,n,f))}function d(h,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Ag(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:fe("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Rg(i,t,e){const n=new WeakMap,s=new Se;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(a);if(u===void 0||u.count!==h){let E=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const w=new Float32Array(v*b*4*h),S=new Qc(w,v,b,h);S.type=En,S.needsUpdate=!0;const y=M*4;for(let T=0;T<h;T++){const R=m[T],P=g[T],N=_[T],L=v*b*4*T;for(let F=0;F<R.count;F++){const I=F*y;f===!0&&(s.fromBufferAttribute(R,F),w[L+I+0]=s.x,w[L+I+1]=s.y,w[L+I+2]=s.z,w[L+I+3]=0),p===!0&&(s.fromBufferAttribute(P,F),w[L+I+4]=s.x,w[L+I+5]=s.y,w[L+I+6]=s.z,w[L+I+7]=0),x===!0&&(s.fromBufferAttribute(N,F),w[L+I+8]=s.x,w[L+I+9]=s.y,w[L+I+10]=s.z,w[L+I+11]=N.itemSize===4?s.w:1)}}u={count:h,texture:S,size:new Ut(v,b)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Cg(i,t,e,n,s){let r=new WeakMap;function o(c){const d=s.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==d&&(t.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return u}function a(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}const Lg={[Tc]:"LINEAR_TONE_MAPPING",[Ac]:"REINHARD_TONE_MAPPING",[Rc]:"CINEON_TONE_MAPPING",[Cc]:"ACES_FILMIC_TONE_MAPPING",[Pc]:"AGX_TONE_MAPPING",[sa]:"NEUTRAL_TONE_MAPPING",[Lc]:"CUSTOM_TONE_MAPPING"};function Pg(i,t,e,n,s,r){const o=new kn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const d=new Re;d.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ye([0,2,0,0,2,0],2));const h=new Kp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new te(d,h),f=new Xh(-1,1,1,-1,0,1);let p=null,x=null,m=!1,g,_=null,M=[],v=!1;this.setSize=function(b,w){o.setSize(b,w),a!==null&&a.setSize(b,w),l!==null&&l.setSize(b,w);for(let S=0;S<M.length;S++){const y=M[S];y.setSize&&y.setSize(b,w)}},this.setEffects=function(b){M=b,v=M.length>0&&M[0].isRenderPass===!0;const w=o.width,S=o.height;M.length>0&&a===null&&(a=new kn(w,S,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),l=new kn(w,S,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&M.some(E=>E.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&c===null&&(c=new Ss(w,S),r===!0&&(c.format=Si,c.type=os)),o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let E=0;E<M.length;E++){const T=M[E];T.setSize&&T.setSize(w,S),y&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(c)}},this.begin=function(b,w){if(m||b.toneMapping===ti&&M.length===0)return!1;if(_=w,w!==null){const S=w.width,y=w.height;(o.width!==S||o.height!==y)&&this.setSize(S,y)}return v===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=ti,!0},this.hasRenderPass=function(){return v},this.end=function(b,w){b.toneMapping=g,m=!0;let S=o,y=a;for(let E=0;E<M.length;E++){const T=M[E];T.enabled!==!1&&(T.render(b,y,S,w),T.needsSwap!==!1&&(S=y,y=y===a?l:a))}if(p!==b.outputColorSpace||x!==b.toneMapping){p=b.outputColorSpace,x=b.toneMapping,h.defines={},ce.getTransfer(p)===ge&&(h.defines.SRGB_TRANSFER="");const E=Lg[x];E&&(h.defines[E]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(_),b.render(u,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),d.dispose(),h.dispose()}}const ru=new Ae,ou=new Ss(1,1),au=new Ah(1),lu=new Qc,cu=new rp,hu=new Th,uu=[],du=[],fu=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function As(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=uu[s];if(r===void 0&&(r=new Float32Array(s),uu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wo(i,t){let e=du[t];e===void 0&&(e=new Int32Array(t),du[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Dg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function Ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function Ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function Fg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;mu.set(n),i.uniformMatrix2fv(this.addr,!1,mu),ze(e,n)}}function Og(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;pu.set(n),i.uniformMatrix3fv(this.addr,!1,pu),ze(e,n)}}function zg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;fu.set(n),i.uniformMatrix4fv(this.addr,!1,fu),ze(e,n)}}function Bg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function Hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function Vg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function Xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function Eo(i){return i.version===0&&(i.compareFunction=kc,i.needsUpdate=!0),i}function Zg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Eo(ou):r=ru,e.setTexture2D(t||r,s)}function Kg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cu,s)}function qg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Eo(au):r=hu,e.setTextureCube(t||r,s)}function Jg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lu,s)}function $g(i){switch(i){case 5126:return Dg;case 35664:return Ig;case 35665:return Ng;case 35666:return Ug;case 35674:return Fg;case 35675:return Og;case 35676:return zg;case 5124:case 35670:return Bg;case 35667:case 35671:return Gg;case 35668:case 35672:return kg;case 35669:case 35673:return Hg;case 5125:return Vg;case 36294:return Wg;case 36295:return Xg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Jg}}function jg(i,t){i.uniform1fv(this.addr,t)}function Qg(i,t){const e=As(t,this.size,2);i.uniform2fv(this.addr,e)}function tx(i,t){const e=As(t,this.size,3);i.uniform3fv(this.addr,e)}function ex(i,t){const e=As(t,this.size,4);i.uniform4fv(this.addr,e)}function nx(i,t){const e=As(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ix(i,t){const e=As(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sx(i,t){const e=As(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function rx(i,t){i.uniform1iv(this.addr,t)}function ox(i,t){i.uniform2iv(this.addr,t)}function ax(i,t){i.uniform3iv(this.addr,t)}function lx(i,t){i.uniform4iv(this.addr,t)}function cx(i,t){i.uniform1uiv(this.addr,t)}function hx(i,t){i.uniform2uiv(this.addr,t)}function ux(i,t){i.uniform3uiv(this.addr,t)}function dx(i,t){i.uniform4uiv(this.addr,t)}function fx(i,t,e){const n=this.cache,s=t.length,r=wo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Eo(ou):o=ru;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function px(i,t,e){const n=this.cache,s=t.length,r=wo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||cu,r[o])}function mx(i,t,e){const n=this.cache,s=t.length,r=wo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Eo(au):o=hu;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function gx(i,t,e){const n=this.cache,s=t.length,r=wo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||lu,r[o])}function xx(i){switch(i){case 5126:return jg;case 35664:return Qg;case 35665:return tx;case 35666:return ex;case 35674:return nx;case 35675:return ix;case 35676:return sx;case 5124:case 35670:return rx;case 35667:case 35671:return ox;case 35668:case 35672:return ax;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return hx;case 36295:return ux;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}class _x{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$g(e.type)}}class Mx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xx(e.type)}}class vx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Dl=/(\w+)(\])?(\[|\.)?/g;function gu(i,t){i.seq.push(t),i.map[t.id]=t}function Sx(i,t,e){const n=i.name,s=n.length;for(Dl.lastIndex=0;;){const r=Dl.exec(n),o=Dl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){gu(e,c===void 0?new _x(a,i,t):new Mx(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new vx(a),gu(e,h)),e=h}}}class To{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Sx(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function xu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const yx=37297;let bx=0;function wx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const _u=new Xt;function Ex(i){ce._getMatrix(_u,ce.workingColorSpace,i);const t=`mat3( ${_u.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case Hr:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Mu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+wx(i.getShaderSource(t),a)}else return r}function Tx(i,t){const e=Ex(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Ax={[Tc]:"Linear",[Ac]:"Reinhard",[Rc]:"Cineon",[Cc]:"ACESFilmic",[Pc]:"AgX",[sa]:"Neutral",[Lc]:"Custom"};function Rx(i,t){const e=Ax[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ao=new W;function Cx(){ce.getLuminanceCoefficients(Ao);const i=Ao.x.toFixed(4),t=Ao.y.toFixed(4),e=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function Px(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function mr(i){return i!==""}function vu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Su(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(i){return i.replace(Ix,Nx)}function Nx(i,t){const e=qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Il(e)}const Ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(i){return i.replace(Ux,Fx)}function Fx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const Ox={[Vs]:"SHADOWMAP_TYPE_PCF",[Ws]:"SHADOWMAP_TYPE_VSM"};function zx(i){return Ox[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Bx={[Zs]:"ENVMAP_MODE_REFRACTION"};function Gx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Bx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kx={[Dr]:"ENVMAP_BLENDING_MULTIPLY",[bf]:"ENVMAP_BLENDING_MIX",[wf]:"ENVMAP_BLENDING_ADD"};function Hx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":kx[i.combine]||"ENVMAP_BLENDING_NONE"}function Vx(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=zx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=Gx(e),h=Hx(e),u=Lx(e),f=Px(r),p=s.createProgram();let x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(mr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(mr).join(`
`),m.length>0&&(m+=`
`)):(x=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),m=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?qt.tonemapping_pars_fragment:"",e.toneMapping!==ti?Rx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Tx("linearToOutputTexel",e.outputColorSpace),Cx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mr).join(`
`)),o=Il(o),o=vu(o,e),o=Su(o,e),a=Il(a),a=vu(a,e),a=Su(a,e),o=yu(o),a=yu(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=g+x+o,M=g+m+a,v=xu(s,s.VERTEX_SHADER,_),b=xu(s,s.FRAGMENT_SHADER,M);s.attachShader(p,v),s.attachShader(p,b),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function w(T){if(i.debug.checkShaderErrors){const R=s.getProgramInfoLog(p)||"",P=s.getShaderInfoLog(v)||"",N=s.getShaderInfoLog(b)||"",L=R.trim(),F=P.trim(),I=N.trim();let O=!0,j=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,v,b);else{const V=Mu(s,v,"vertex"),G=Mu(s,b,"fragment");fe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+L+`
`+V+`
`+G)}else L!==""?Vt("WebGLProgram: Program Info Log:",L):(F===""||I==="")&&(j=!1);j&&(T.diagnostics={runnable:O,programLog:L,vertexShader:{log:F,prefix:x},fragmentShader:{log:I,prefix:m}})}s.deleteShader(v),s.deleteShader(b),S=new To(s,p),y=Dx(s,p)}let S;this.getUniforms=function(){return S===void 0&&w(this),S};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(p,yx)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bx++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=b,this}let Wx=0;class Xx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Yx(t),e.set(t,n)),n}}class Yx{constructor(t){this.id=Wx++,this.code=t,this.usedTimes=0}}function Zx(i){return i===yi||i===Br||i===Gr}function Kx(i,t,e,n,s,r){const o=new ja,a=new Xx,l=new Set,c=[],d=new Map,h=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,y,E,T,R,P){const N=T.fog,L=R.geometry,F=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?T.environment:null,I=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,O=t.get(S.envMap||F,I),j=u[S.type];let V=n.precision;S.precision!==null&&(V=n.getMaxPrecision(S.precision),V!==S.precision&&Vt("WebGLProgram.getParameters:",S.precision,"not supported, using",V,"instead."));const G=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Z=G!==void 0?G.length:0;let X=0;L.morphAttributes.position!==void 0&&(X=1),L.morphAttributes.normal!==void 0&&(X=2),L.morphAttributes.color!==void 0&&(X=3);let K,z,q,nt;if(j){const At=Xn[j];K=At.vertexShader,z=At.fragmentShader}else{K=S.vertexShader,z=S.fragmentShader;const At=a.getVertexShaderStage(S),xe=a.getFragmentShaderStage(S);a.update(S,At,xe),q=At.id,nt=xe.id}const ht=i.getRenderTarget(),et=i.state.buffers.depth.getReversed(),it=R.isInstancedMesh===!0,Rt=R.isBatchedMesh===!0,ut=!!S.map,Mt=!!S.matcap,Ft=!!O,lt=Ft&&O.isPMREMTexture===!0,ft=!!S.aoMap,pt=!!S.lightMap,Yt=!!S.bumpMap&&S.wireframe===!1,Lt=!!S.normalMap,ne=!!S.displacementMap,Zt=!!S.emissiveMap,$t=!!S.metalnessMap,he=!!S.roughnessMap,ue=S.anisotropy>0,k=S.clearcoat>0,ee=S.diffuseRoughness>0,Ht=S.dispersion>0,ie=S.retroreflectivity>0,vt=S.iridescence>0,Me=S.sheen>0,Gt=S.transmission>0,zt=ue&&!!S.anisotropyMap,D=k&&!!S.clearcoatMap,A=k&&!!S.clearcoatNormalMap,J=k&&!!S.clearcoatRoughnessMap,dt=ee&&!!S.diffuseRoughnessMap,at=vt&&!!S.iridescenceMap,gt=vt&&!!S.iridescenceThicknessMap,wt=Me&&!!S.sheenColorMap,rt=Me&&!!S.sheenRoughnessMap,ot=!!S.specularMap,St=!!S.specularColorMap,B=!!S.specularIntensityMap,ct=Gt&&!!S.transmissionMap,st=Gt&&!!S.thicknessMap,yt=!!S.gradientMap,xt=!!S.alphaMap,_t=S.alphaTest>0,Bt=!!S.alphaHash,jt=!!S.extensions;let mt=ti;S.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(mt=i.toneMapping);const kt=lt?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Jt={shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:K,fragmentShader:z,defines:S.defines,customVertexShaderID:q,customFragmentShaderID:nt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:V,batching:Rt,batchingColor:Rt&&R._colorsTexture!==null,instancing:it,instancingColor:it&&R.instanceColor!==null,instancingMorph:it&&R.morphTexture!==null,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:ut,matcap:Mt,envMap:Ft,envMapMode:Ft&&O.mapping,envMapPMREM:lt,envMapMaxLod:lt?kt.length-1:null,envMapSize:lt?kt[0].width:null,aoMap:ft,lightMap:pt,bumpMap:Yt,normalMap:Lt,displacementMap:ne,emissiveMap:Zt,normalMapObjectSpace:Lt&&S.normalMapType===Af,normalMapTangentSpace:Lt&&S.normalMapType===as,packedNormalMap:Lt&&S.normalMapType===as&&Zx(S.normalMap.format),metalnessMap:$t,roughnessMap:he,anisotropy:ue,anisotropyMap:zt,clearcoat:k,clearcoatMap:D,clearcoatNormalMap:A,clearcoatRoughnessMap:J,diffuseRoughness:ee,diffuseRoughnessMap:dt,dispersion:Ht,retroreflection:ie,iridescence:vt,iridescenceMap:at,iridescenceThicknessMap:gt,sheen:Me,sheenColorMap:wt,sheenRoughnessMap:rt,specularMap:ot,specularColorMap:St,specularIntensityMap:B,transmission:Gt,transmissionMap:ct,thicknessMap:st,gradientMap:yt,opaque:S.transparent===!1&&S.blending===Xs&&S.alphaToCoverage===!1,alphaMap:xt,alphaTest:_t,alphaHash:Bt,combine:S.combine,mapUv:ut&&f(S.map.channel),aoMapUv:ft&&f(S.aoMap.channel),lightMapUv:pt&&f(S.lightMap.channel),bumpMapUv:Yt&&f(S.bumpMap.channel),normalMapUv:Lt&&f(S.normalMap.channel),displacementMapUv:ne&&f(S.displacementMap.channel),emissiveMapUv:Zt&&f(S.emissiveMap.channel),metalnessMapUv:$t&&f(S.metalnessMap.channel),roughnessMapUv:he&&f(S.roughnessMap.channel),anisotropyMapUv:zt&&f(S.anisotropyMap.channel),clearcoatMapUv:D&&f(S.clearcoatMap.channel),clearcoatNormalMapUv:A&&f(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&f(S.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:dt&&f(S.diffuseRoughnessMap.channel),iridescenceMapUv:at&&f(S.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&f(S.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&f(S.sheenColorMap.channel),sheenRoughnessMapUv:rt&&f(S.sheenRoughnessMap.channel),specularMapUv:ot&&f(S.specularMap.channel),specularColorMapUv:St&&f(S.specularColorMap.channel),specularIntensityMapUv:B&&f(S.specularIntensityMap.channel),transmissionMapUv:ct&&f(S.transmissionMap.channel),thicknessMapUv:st&&f(S.thicknessMap.channel),alphaMapUv:xt&&f(S.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Lt||ue),vertexNormals:!!L.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!L.attributes.uv&&(ut||xt),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||L.attributes.normal===void 0&&Lt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:et,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:X,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:P.filter(At=>At.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,decodeVideoTexture:ut&&S.map.isVideoTexture===!0&&ce.getTransfer(S.map.colorSpace)===ge,decodeVideoTextureEmissive:Zt&&S.emissiveMap.isVideoTexture===!0&&ce.getTransfer(S.emissiveMap.colorSpace)===ge,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Le,flipSided:S.side===en,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:jt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&S.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Jt.vertexUv1s=l.has(1),Jt.vertexUv2s=l.has(2),Jt.vertexUv3s=l.has(3),l.clear(),Jt}function x(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const E in S.defines)y.push(E),y.push(S.defines[E]);return S.isRawShaderMaterial===!1&&(m(y,S),g(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function m(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapPMREM),S.push(y.envMapMaxLod),S.push(y.envMapSize),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.diffuseRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.numSunLights),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numSunLightShadows),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.numLightProbeGrids),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function g(S,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function _(S){const y=u[S.type];let E;if(y){const T=Xn[y];E=Xp.clone(T.uniforms)}else E=S.uniforms;return E}function M(S,y){let E=d.get(y);return E!==void 0?++E.usedTimes:(E=new Vx(i,y,S,s),c.push(E),d.set(y,E)),E}function v(S){if(--S.usedTimes===0){const y=c.indexOf(S);c[y]=c[c.length-1],c.pop(),d.delete(S.cacheKey),S.destroy()}}function b(S){a.remove(S)}function w(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:_,acquireProgram:M,releaseProgram:v,releaseShaderCache:b,programs:c,dispose:w}}function qx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Jx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function wu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Eu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,m,g){let _=i[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},i[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=p,_.materialVariant=o(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=m,_.group=g),t++,_}function l(u,f,p,x,m,g,_){_.reversedDepth===!0&&(m=-m);const M=a(u,f,p,x,m,g);p.transmission>0?n.push(M):p.transparent===!0?s.push(M):e.push(M)}function c(u,f,p,x,m,g){const _=a(u,f,p,x,m,g);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):e.unshift(_)}function d(u,f){e.length>1&&e.sort(u||Jx),n.length>1&&n.sort(f||wu),s.length>1&&s.sort(f||wu)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:d}}function $x(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Eu,i.set(n,[o])):s>=r.length?(o=new Eu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function jx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new Pt};break;case"SpotLight":e={position:new W,direction:new W,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function Qx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let t1=0;function e1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function n1(i){const t=new jx,e=Qx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const s=new W,r=new re,o=new re;function a(c){let d=0,h=0,u=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,_=0,M=0,v=0,b=0,w=0,S=0,y=0,E=0,T=0;c.sort(e1);for(let P=0,N=c.length;P<N;P++){const L=c[P],F=L.color,I=L.intensity,O=L.distance;let j=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===yi?j=L.shadow.map.texture:j=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=F.r*I,h+=F.g*I,u+=F.b*I;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],I);T++}else if(L.isSunLight){const V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,Z=e.get(L);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[p]=Z,n.sunShadowMap[p]=j;const X=G.getViewportCount();for(let K=0;K<X;K++)n.sunShadowMatrix[x+K]=G.getMatrix(K),n.sunShadowCascade[x+K]=G._cascadeData[K];x+=X,p++}n.sun[f]=V,f++}else if(L.isDirectionalLight){const V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,Z=e.get(L);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=V,m++}else if(L.isSpotLight){const V=t.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(F).multiplyScalar(I),V.distance=O,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[_]=V;const G=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,G.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[_]=G.matrix,L.castShadow){const Z=e.get(L);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=j,S++}_++}else if(L.isRectAreaLight){const V=t.get(L);V.color.copy(F).multiplyScalar(I),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[M]=V,M++}else if(L.isPointLight){const V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const G=L.shadow,Z=e.get(L);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=L.shadow.matrix,w++}n.point[g]=V,g++}else if(L.isHemisphereLight){const V=t.get(L);V.skyColor.copy(L.color).multiplyScalar(I),V.groundColor.copy(L.groundColor).multiplyScalar(I),n.hemi[v]=V,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const R=n.hash;(R.sunLength!==f||R.directionalLength!==m||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==M||R.hemiLength!==v||R.numSunShadows!==p||R.numDirectionalShadows!==b||R.numPointShadows!==w||R.numSpotShadows!==S||R.numSpotMaps!==y||R.numLightProbes!==T)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=M,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.spotLightMatrix.length=S+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,R.sunLength=f,R.directionalLength=m,R.pointLength=g,R.spotLength=_,R.rectAreaLength=M,R.hemiLength=v,R.numSunShadows=p,R.numDirectionalShadows=b,R.numPointShadows=w,R.numSpotShadows=S,R.numSpotMaps=y,R.numLightProbes=T,n.version=t1++)}function l(c,d){let h=0,u=0,f=0,p=0,x=0,m=0;const g=d.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){const v=c[_];if(v.isSunLight){const b=n.sun[h];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),h++}else if(v.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),u++}else if(v.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Tu(i){const t=new n1(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function o(h){h.isLightProbeGrid?s.push(h):e.push(h)}function a(h){n.push(h)}function l(){t.setup(e),s.sort((h,u)=>h.priority-u.priority||h.id-u.id)}function c(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function i1(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Tu(i),t.set(s,[a])):r>=o.length?(a=new Tu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const s1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r1=`uniform sampler2D shadow_pass;
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
}`,o1=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],a1=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Au=new re,gr=new W,Nl=new W;function l1(i,t,e){let n=new lr;const s=new Ut,r=new Ut,o=new Se,a=new $p,l=new jp,c={},d=e.maxTextureSize,h={[Mi]:en,[en]:Mi,[Le]:Le},u=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:s1,fragmentShader:r1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new Re;p.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new te(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vs;let g=this.type;this.render=function(w,S,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===sf&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vs);const E=i.getRenderTarget(),T=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(is),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const N=g!==this.type;N&&S.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=w.length;L<F;L++){const I=w[L],O=I.shadow;if(O===void 0){Vt("WebGLShadowMap:",I,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const j=O.getFrameExtents();s.multiply(j),r.copy(O.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/j.x),s.x=r.x*j.x,O.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/j.y),s.y=r.y*j.y,O.mapSize.y=r.y));const V=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=V,O.map===null||N===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ws){if(I.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new kn(s.x,s.y,{format:yi,type:Tn,minFilter:qe,magFilter:qe,generateMipmaps:!1}),O.map.texture.name=I.name+".shadowMap",O.map.depthTexture=new Ss(s.x,s.y,En),O.map.depthTexture.name=I.name+".shadowMapDepth",O.map.depthTexture.format=vi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ue,O.map.depthTexture.magFilter=Ue}else I.isPointLight?(O.map=new Pl(s.x),O.map.depthTexture=new Ah(s.x,Bn)):(O.map=new kn(s.x,s.y),O.map.depthTexture=new Ss(s.x,s.y,Bn)),O.map.depthTexture.name=I.name+".shadowMap",O.map.depthTexture.format=vi,this.type===Vs?(O.map.depthTexture.compareFunction=V?Gc:Bc,O.map.depthTexture.minFilter=qe,O.map.depthTexture.magFilter=qe):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ue,O.map.depthTexture.magFilter=Ue);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);const G=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();I.isPointLight!==!0&&O.updateMatrices(I,y);const Z=O.camera.layers.mask&4294967294?O.camera.layers:y.layers;for(let X=0;X<G;X++){const K=O.getCamera(X);if(I.isPointLight){const z=O.camera,q=O.matrix,nt=I.distance||z.far;nt!==z.far&&(z.far=nt,z.updateProjectionMatrix()),gr.setFromMatrixPosition(I.matrixWorld),z.position.copy(gr),Nl.copy(z.position),Nl.add(o1[X]),z.up.copy(a1[X]),z.lookAt(Nl),z.updateMatrixWorld(),q.makeTranslation(-gr.x,-gr.y,-gr.z),Au.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Au,z.coordinateSystem,z.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,X),i.clear();else{X===0&&(i.setRenderTarget(O.map),i.clear());const z=O.getViewport(X);o.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),P.viewport(o)}n=O.getFrustum(X),v(S,y,K,I,Z,this.type)}O.isPointLightShadow!==!0&&this.type===Ws&&_(O,y),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(E,T,R)};function _(w,S){const y=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new kn(s.x,s.y,{format:yi,type:Tn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(S,null,y,u,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(S,null,y,f,x,null)}function M(w,S,y,E){let T=null;const R=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)T=R;else if(T=y.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){const P=T.uuid,N=S.uuid;let L=c[P];L===void 0&&(L={},c[P]=L);let F=L[N];F===void 0&&(F=T.clone(),L[N]=F,S.addEventListener("dispose",b)),T=F}if(T.visible=S.visible,T.wireframe=S.wireframe,E===Ws?T.side=S.shadowSide!==null?S.shadowSide:S.side:T.side=S.shadowSide!==null?S.shadowSide:h[S.side],T.alphaMap=S.alphaMap,T.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,T.map=S.map,T.clipShadows=S.clipShadows,T.clippingPlanes=S.clippingPlanes,T.clipIntersection=S.clipIntersection,T.displacementMap=S.displacementMap,T.displacementScale=S.displacementScale,T.displacementBias=S.displacementBias,T.wireframeLinewidth=S.wireframeLinewidth,T.linewidth=S.linewidth,y.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const P=i.properties.get(T);P.light=y}return T}function v(w,S,y,E,T,R){if(w.visible===!1)return;if(w.layers.test(T)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Ws)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const L=t.update(w),F=w.material;if(Array.isArray(F)){const I=L.groups;for(let O=0,j=I.length;O<j;O++){const V=I[O],G=F[V.materialIndex];if(G&&G.visible){const Z=M(w,G,E,R);w.onBeforeShadow(i,w,S,y,L,Z,V),i.renderBufferDirect(y,null,L,Z,w,V),w.onAfterShadow(i,w,S,y,L,Z,V)}}}else if(F.visible){const I=M(w,F,E,R);w.onBeforeShadow(i,w,S,y,L,I,null),i.renderBufferDirect(y,null,L,I,w,null),w.onAfterShadow(i,w,S,y,L,I,null)}}const N=w.children;for(let L=0,F=N.length;L<F;L++)v(N[L],S,y,E,T,R)}function b(w){w.target.removeEventListener("dispose",b);for(const y in c){const E=c[y],T=w.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function c1(i,t){function e(){let B=!1;const ct=new Se;let st=null;const yt=new Se(0,0,0,0);return{setMask:function(xt){st!==xt&&!B&&(i.colorMask(xt,xt,xt,xt),st=xt)},setLocked:function(xt){B=xt},setClear:function(xt,_t,Bt,jt,mt){mt===!0&&(xt*=jt,_t*=jt,Bt*=jt),ct.set(xt,_t,Bt,jt),yt.equals(ct)===!1&&(i.clearColor(xt,_t,Bt,jt),yt.copy(ct))},reset:function(){B=!1,st=null,yt.set(-1,0,0,0)}}}function n(){let B=!1,ct=!1,st=null,yt=null,xt=null;return{setReversed:function(_t){if(ct!==_t){const Bt=t.get("EXT_clip_control");_t?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),ct=_t;const jt=xt;xt=null,this.setClear(jt)}},getReversed:function(){return ct},setTest:function(_t){_t?et(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(_t){st!==_t&&!B&&(i.depthMask(_t),st=_t)},setFunc:function(_t){if(ct&&(_t=zf[_t]),yt!==_t){switch(_t){case $o:i.depthFunc(i.NEVER);break;case jo:i.depthFunc(i.ALWAYS);break;case Qo:i.depthFunc(i.LESS);break;case Ys:i.depthFunc(i.LEQUAL);break;case ta:i.depthFunc(i.EQUAL);break;case ea:i.depthFunc(i.GEQUAL);break;case na:i.depthFunc(i.GREATER);break;case ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=_t}},setLocked:function(_t){B=_t},setClear:function(_t){xt!==_t&&(xt=_t,ct&&(_t=1-_t),i.clearDepth(_t))},reset:function(){B=!1,st=null,yt=null,xt=null,ct=!1}}}function s(){let B=!1,ct=null,st=null,yt=null,xt=null,_t=null,Bt=null,jt=null,mt=null;return{setTest:function(kt){B||(kt?et(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(kt){ct!==kt&&!B&&(i.stencilMask(kt),ct=kt)},setFunc:function(kt,Jt,At){(st!==kt||yt!==Jt||xt!==At)&&(i.stencilFunc(kt,Jt,At),st=kt,yt=Jt,xt=At)},setOp:function(kt,Jt,At){(_t!==kt||Bt!==Jt||jt!==At)&&(i.stencilOp(kt,Jt,At),_t=kt,Bt=Jt,jt=At)},setLocked:function(kt){B=kt},setClear:function(kt){mt!==kt&&(i.clearStencil(kt),mt=kt)},reset:function(){B=!1,ct=null,st=null,yt=null,xt=null,_t=null,Bt=null,jt=null,mt=null}}}const r=new e,o=new n,a=new s;let l={};const c=new WeakMap;let d={},h={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,M=null,v=null,b=null,w=null,S=null,y=new Pt(0,0,0),E=0,T=!1,R=null,P=null,N=null,L=null,F=null;const I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,j=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=j>=2);let G=null,Z={};const X=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),z=new Se().fromArray(X),q=new Se().fromArray(K);function nt(B,ct,st,yt){const xt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(B,_t),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<st;Bt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(ct+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return _t}const ht={};ht[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(Ys),Yt(!1),Lt(Sc),et(i.CULL_FACE),ft(is);function et(B){d[B]!==!0&&(i.enable(B),d[B]=!0)}function it(B){d[B]!==!1&&(i.disable(B),d[B]=!1)}function Rt(B,ct){return u[B]!==ct?(i.bindFramebuffer(B,ct),u[B]=ct,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function ut(B,ct){let st=p,yt=!1;if(B){st=f.get(ct),st===void 0&&(st=[],f.set(ct,st));const xt=B.textures;if(st.length!==xt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Bt=xt.length;_t<Bt;_t++)st[_t]=i.COLOR_ATTACHMENT0+_t;st.length=xt.length,yt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,yt=!0);yt&&i.drawBuffers(st)}function Mt(B){return x!==B?(i.useProgram(B),x=B,!0):!1}const Ft={[ss]:i.FUNC_ADD,[of]:i.FUNC_SUBTRACT,[af]:i.FUNC_REVERSE_SUBTRACT};Ft[lf]=i.MIN,Ft[cf]=i.MAX;const lt={[hf]:i.ZERO,[uf]:i.ONE,[df]:i.SRC_COLOR,[wc]:i.SRC_ALPHA,[_f]:i.SRC_ALPHA_SATURATE,[gf]:i.DST_COLOR,[pf]:i.DST_ALPHA,[ff]:i.ONE_MINUS_SRC_COLOR,[Ec]:i.ONE_MINUS_SRC_ALPHA,[xf]:i.ONE_MINUS_DST_COLOR,[mf]:i.ONE_MINUS_DST_ALPHA,[Mf]:i.CONSTANT_COLOR,[vf]:i.ONE_MINUS_CONSTANT_COLOR,[Sf]:i.CONSTANT_ALPHA,[yf]:i.ONE_MINUS_CONSTANT_ALPHA};function ft(B,ct,st,yt,xt,_t,Bt,jt,mt,kt){if(B===is){m===!0&&(it(i.BLEND),m=!1);return}if(m===!1&&(et(i.BLEND),m=!0),B!==rf){if(B!==g||kt!==T){if((_!==ss||b!==ss)&&(i.blendEquation(i.FUNC_ADD),_=ss,b=ss),kt)switch(B){case Xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jo:i.blendFunc(i.ONE,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:fe("WebGLState: Invalid blending: ",B);break}else switch(B){case Xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yc:fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bc:fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:fe("WebGLState: Invalid blending: ",B);break}M=null,v=null,w=null,S=null,y.set(0,0,0),E=0,g=B,T=kt}return}xt=xt||ct,_t=_t||st,Bt=Bt||yt,(ct!==_||xt!==b)&&(i.blendEquationSeparate(Ft[ct],Ft[xt]),_=ct,b=xt),(st!==M||yt!==v||_t!==w||Bt!==S)&&(i.blendFuncSeparate(lt[st],lt[yt],lt[_t],lt[Bt]),M=st,v=yt,w=_t,S=Bt),(jt.equals(y)===!1||mt!==E)&&(i.blendColor(jt.r,jt.g,jt.b,mt),y.copy(jt),E=mt),g=B,T=!1}function pt(B,ct){B.side===Le?it(i.CULL_FACE):et(i.CULL_FACE);let st=B.side===en;ct&&(st=!st),Yt(st),B.blending===Xs&&B.transparent===!1?ft(is):ft(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const yt=B.stencilWrite;a.setTest(yt),yt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Zt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(B){R!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),R=B)}function Lt(B){B!==ef?(et(i.CULL_FACE),B!==P&&(B===Sc?i.cullFace(i.BACK):B===nf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),P=B}function ne(B){B!==N&&(O&&i.lineWidth(B),N=B)}function Zt(B,ct,st){B?(et(i.POLYGON_OFFSET_FILL),(L!==ct||F!==st)&&(L=ct,F=st,o.getReversed()&&(ct=-ct,st=-st),i.polygonOffset(ct,st))):it(i.POLYGON_OFFSET_FILL)}function $t(B){B?et(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function he(B){B===void 0&&(B=i.TEXTURE0+I-1),G!==B&&(i.activeTexture(B),G=B)}function ue(B,ct,st){st===void 0&&(G===null?st=i.TEXTURE0+I-1:st=G);let yt=Z[st];yt===void 0&&(yt={type:void 0,texture:void 0},Z[st]=yt),(yt.type!==B||yt.texture!==ct)&&(G!==st&&(i.activeTexture(st),G=st),i.bindTexture(B,ct||ht[B]),yt.type=B,yt.texture=ct)}function k(){const B=Z[G];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(B){fe("WebGLState:",B)}}function Ht(){try{i.compressedTexImage3D(...arguments)}catch(B){fe("WebGLState:",B)}}function ie(){try{i.texSubImage2D(...arguments)}catch(B){fe("WebGLState:",B)}}function vt(){try{i.texSubImage3D(...arguments)}catch(B){fe("WebGLState:",B)}}function Me(){try{i.compressedTexSubImage2D(...arguments)}catch(B){fe("WebGLState:",B)}}function Gt(){try{i.compressedTexSubImage3D(...arguments)}catch(B){fe("WebGLState:",B)}}function zt(){try{i.texStorage2D(...arguments)}catch(B){fe("WebGLState:",B)}}function D(){try{i.texStorage3D(...arguments)}catch(B){fe("WebGLState:",B)}}function A(){try{i.texImage2D(...arguments)}catch(B){fe("WebGLState:",B)}}function J(){try{i.texImage3D(...arguments)}catch(B){fe("WebGLState:",B)}}function dt(B){return h[B]!==void 0?h[B]:i.getParameter(B)}function at(B,ct){h[B]!==ct&&(i.pixelStorei(B,ct),h[B]=ct)}function gt(B){z.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),z.copy(B))}function wt(B){q.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),q.copy(B))}function rt(B,ct){let st=c.get(ct);st===void 0&&(st=new WeakMap,c.set(ct,st));let yt=st.get(B);yt===void 0&&(yt=i.getUniformBlockIndex(ct,B.name),i.uniformBlockBinding(ct,yt,yt),st.set(B,yt))}function ot(B,ct,st){const xt=c.get(ct).get(B);l[xt]!==st&&(i.bindBufferBase(i.UNIFORM_BUFFER,xt,st),l[xt]=st)}function St(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},h={},G=null,Z={},u={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,M=null,v=null,b=null,w=null,S=null,y=new Pt(0,0,0),E=0,T=!1,R=null,P=null,N=null,L=null,F=null,z.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:it,bindFramebuffer:Rt,drawBuffers:ut,useProgram:Mt,setBlending:ft,setMaterial:pt,setFlipSided:Yt,setCullFace:Lt,setLineWidth:ne,setPolygonOffset:Zt,setScissorTest:$t,activeTexture:he,bindTexture:ue,unbindTexture:k,compressedTexImage2D:ee,compressedTexImage3D:Ht,texImage2D:A,texImage3D:J,pixelStorei:at,getParameter:dt,updateUBOMapping:rt,uniformBlockBinding:ot,texStorage2D:zt,texStorage3D:D,texSubImage2D:ie,texSubImage3D:vt,compressedTexSubImage2D:Me,compressedTexSubImage3D:Gt,scissor:gt,viewport:wt,reset:St}}function h1(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,d=new WeakMap,h=new Set;let u;const f=new WeakMap,p=new Set,x=new FinalizationRegistry(D=>p.delete(D));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,A){return m?new OffscreenCanvas(D,A):$s("canvas")}function _(D,A,J){let dt=1;const at=zt(D);if((at.width>J||at.height>J)&&(dt=J/Math.max(at.width,at.height)),dt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const gt=Math.floor(dt*at.width),wt=Math.floor(dt*at.height);u===void 0&&(u=g(gt,wt));const rt=A?g(gt,wt):u;return rt.width=gt,rt.height=wt,rt.getContext("2d").drawImage(D,0,0,gt,wt),Vt("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+gt+"x"+wt+")."),rt}else return"data"in D&&Vt("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),D;return D}function M(D){return D.generateMipmaps}function v(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(D,A,J,dt,at,gt=!1){if(D!==null){if(i[D]!==void 0)return i[D];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let wt;dt&&(wt=t.get("EXT_texture_norm16"),wt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=A;if(A===i.RED&&(J===i.FLOAT&&(rt=i.R32F),J===i.HALF_FLOAT&&(rt=i.R16F),J===i.UNSIGNED_BYTE&&(rt=i.R8),J===i.UNSIGNED_SHORT&&wt&&(rt=wt.R16_EXT),J===i.SHORT&&wt&&(rt=wt.R16_SNORM_EXT)),A===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(rt=i.R8UI),J===i.UNSIGNED_SHORT&&(rt=i.R16UI),J===i.UNSIGNED_INT&&(rt=i.R32UI),J===i.BYTE&&(rt=i.R8I),J===i.SHORT&&(rt=i.R16I),J===i.INT&&(rt=i.R32I)),A===i.RG&&(J===i.FLOAT&&(rt=i.RG32F),J===i.HALF_FLOAT&&(rt=i.RG16F),J===i.UNSIGNED_BYTE&&(rt=i.RG8),J===i.UNSIGNED_SHORT&&wt&&(rt=wt.RG16_EXT),J===i.SHORT&&wt&&(rt=wt.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(rt=i.RG8UI),J===i.UNSIGNED_SHORT&&(rt=i.RG16UI),J===i.UNSIGNED_INT&&(rt=i.RG32UI),J===i.BYTE&&(rt=i.RG8I),J===i.SHORT&&(rt=i.RG16I),J===i.INT&&(rt=i.RG32I)),A===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),J===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),J===i.UNSIGNED_INT&&(rt=i.RGB32UI),J===i.BYTE&&(rt=i.RGB8I),J===i.SHORT&&(rt=i.RGB16I),J===i.INT&&(rt=i.RGB32I)),A===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),J===i.UNSIGNED_INT&&(rt=i.RGBA32UI),J===i.BYTE&&(rt=i.RGBA8I),J===i.SHORT&&(rt=i.RGBA16I),J===i.INT&&(rt=i.RGBA32I)),A===i.RGB&&(J===i.UNSIGNED_SHORT&&wt&&(rt=wt.RGB16_EXT),J===i.SHORT&&wt&&(rt=wt.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),A===i.RGBA){const ot=gt?Hr:ce.getTransfer(at);J===i.FLOAT&&(rt=i.RGBA32F),J===i.HALF_FLOAT&&(rt=i.RGBA16F),J===i.UNSIGNED_BYTE&&(rt=ot===ge?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&wt&&(rt=wt.RGBA16_EXT),J===i.SHORT&&wt&&(rt=wt.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function S(D,A){let J;return D?A===null||A===Bn||A===os?J=i.DEPTH24_STENCIL8:A===En?J=i.DEPTH32F_STENCIL8:A===qs&&(J=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Bn||A===os?J=i.DEPTH_COMPONENT24:A===En?J=i.DEPTH_COMPONENT32F:A===qs&&(J=i.DEPTH_COMPONENT16),J}function y(D,A){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ue&&D.minFilter!==qe?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function E(D){const A=new WeakRef(D);n.get(D).__ref=A,p.add(A),x.register(D,A,A)}function T(D){const A=n.get(D).__ref;A!==void 0&&(p.delete(A),x.unregister(A))}function R(D){N(D.target)}function P(D){L(D.target)}function N(D){D.removeEventListener("dispose",R),T(D),I(D),D.isVideoTexture&&d.delete(D),D.isHTMLTexture&&h.delete(D)}function L(D){D.removeEventListener("dispose",P),T(D),j(D)}function F(){for(const D of p){const A=D.deref();A!==void 0&&(A.isRenderTarget===!0?L(A):N(A))}p.clear(),h.clear()}function I(D){const A=n.get(D);if(A.__webglInit===void 0)return;const J=D.source,dt=f.get(J);if(dt){const at=dt[A.__cacheKey];at.usedTimes--,at.usedTimes===0&&O(D),Object.keys(dt).length===0&&f.delete(J)}n.remove(D)}function O(D){const A=n.get(D);i.deleteTexture(A.__webglTexture);const J=D.source,dt=f.get(J);delete dt[A.__cacheKey],o.memory.textures--}function j(D){const A=n.get(D);A.__depthDisposeCallback&&A.__depthDisposeCallback();const J=D.depthTexture;if(J&&J.renderTarget===D&&N(J),D.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(A.__webglFramebuffer[at]))for(let gt=0;gt<A.__webglFramebuffer[at].length;gt++)i.deleteFramebuffer(A.__webglFramebuffer[at][gt]);else i.deleteFramebuffer(A.__webglFramebuffer[at]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[at])}else{if(Array.isArray(A.__webglFramebuffer))for(let at=0;at<A.__webglFramebuffer.length;at++)i.deleteFramebuffer(A.__webglFramebuffer[at]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let at=0;at<A.__webglColorRenderbuffer.length;at++)A.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[at]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const dt=D.textures;for(let at=0,gt=dt.length;at<gt;at++){const wt=n.get(dt[at]);wt.__webglTexture&&(i.deleteTexture(wt.__webglTexture),o.memory.textures--),n.remove(dt[at])}n.remove(D)}let V=0;function G(){V=0}function Z(){return V}function X(D){V=D}function K(){const D=V;return D>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,D}function z(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.mipmapsAutoUpdate),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function q(D,A){const J=n.get(D);if(D.isVideoTexture&&Me(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){const dt=D.image;if(dt===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(J,D,A);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+A)}function nt(D,A){const J=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){pt(J,D,A);return}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+A)}function ht(D,A){const J=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){pt(J,D,A);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+A)}function et(D,A){const J=n.get(D);if(D.version>0&&J.__version!==D.version){Yt(J,D,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+A)}const it={[Ks]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[aa]:i.MIRRORED_REPEAT},Rt={[Ue]:i.NEAREST,[Ef]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[la]:i.LINEAR_MIPMAP_NEAREST,[wn]:i.LINEAR_MIPMAP_LINEAR},ut={[Cf]:i.NEVER,[kc]:i.ALWAYS,[Lf]:i.LESS,[Bc]:i.LEQUAL,[Pf]:i.EQUAL,[Gc]:i.GEQUAL,[Df]:i.GREATER,[If]:i.NOTEQUAL};function Mt(D,A){if(A.type===En&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===qe||A.magFilter===la||A.magFilter===Ir||A.magFilter===wn||A.minFilter===qe||A.minFilter===la||A.minFilter===Ir||A.minFilter===wn)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,it[A.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,it[A.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,it[A.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Rt[A.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Rt[A.minFilter]),A.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ut[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ue||A.minFilter!==Ir&&A.minFilter!==wn||A.type===En&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ft(D,A){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",R),E(A));const dt=A.source;let at=f.get(dt);at===void 0&&(at={},f.set(dt,at));const gt=z(A);if(gt!==D.__cacheKey){at[gt]===void 0&&(at[gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),at[gt].usedTimes++;const wt=at[D.__cacheKey];wt!==void 0&&(at[D.__cacheKey].usedTimes--,wt.usedTimes===0&&O(A)),D.__cacheKey=gt,D.__webglTexture=at[gt].texture}return J}function lt(D,A,J){return Math.floor(Math.floor(D/J)/A)}function ft(D,A,J,dt){const gt=D.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,J,dt,A.data);else{gt.sort((B,ct)=>B.start-ct.start);let wt=0;for(let B=1;B<gt.length;B++){const ct=gt[wt],st=gt[B],yt=ct.start+ct.count,xt=lt(st.start,A.width,4),_t=lt(ct.start,A.width,4);st.start<=yt+1&&xt===_t&&lt(st.start+st.count-1,A.width,4)===xt?ct.count=Math.max(ct.count,st.start+st.count-ct.start):(++wt,gt[wt]=st)}gt.length=wt+1;const rt=e.getParameter(i.UNPACK_ROW_LENGTH),ot=e.getParameter(i.UNPACK_SKIP_PIXELS),St=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let B=0,ct=gt.length;B<ct;B++){const st=gt[B],yt=Math.floor(st.start/4),xt=Math.ceil(st.count/4),_t=yt%A.width,Bt=Math.floor(yt/A.width),jt=xt,mt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(i.UNPACK_SKIP_ROWS,Bt),e.texSubImage2D(i.TEXTURE_2D,0,_t,Bt,jt,mt,J,dt,A.data)}D.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,rt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,St)}}function pt(D,A,J){let dt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(dt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(dt=i.TEXTURE_3D);const at=Ft(D,A),gt=A.source;e.bindTexture(dt,D.__webglTexture,i.TEXTURE0+J);const wt=n.get(gt);if(gt.version!==wt.__version||at===!0){if(e.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const mt=ce.getPrimaries(ce.workingColorSpace),kt=A.colorSpace===bi?null:ce.getPrimaries(A.colorSpace),Jt=A.colorSpace===bi||mt===kt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let ot=_(A.image,!1,s.maxTextureSize);ot=Gt(A,ot);const St=r.convert(A.format,A.colorSpace),B=r.convert(A.type);let ct=w(A.internalFormat,St,B,A.normalized,A.colorSpace,A.isVideoTexture);Mt(dt,A);let st;const yt=A.mipmaps,xt=A.isVideoTexture!==!0,_t=wt.__version===void 0||at===!0,Bt=gt.dataReady,jt=y(A,ot);if(A.isDepthTexture)ct=S(A.format===Si,A.type),_t&&(xt?e.texStorage2D(i.TEXTURE_2D,1,ct,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,ct,ot.width,ot.height,0,St,B,null));else if(A.isDataTexture)if(yt.length>0){xt&&_t&&e.texStorage2D(i.TEXTURE_2D,jt,ct,yt[0].width,yt[0].height);for(let mt=0,kt=yt.length;mt<kt;mt++)st=yt[mt],xt?Bt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,st.width,st.height,St,B,st.data):e.texImage2D(i.TEXTURE_2D,mt,ct,st.width,st.height,0,St,B,st.data);A.generateMipmaps=!1}else xt?(_t&&e.texStorage2D(i.TEXTURE_2D,jt,ct,ot.width,ot.height),Bt&&ft(A,ot,St,B)):e.texImage2D(i.TEXTURE_2D,0,ct,ot.width,ot.height,0,St,B,ot.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){xt&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,jt,ct,yt[0].width,yt[0].height,ot.depth);for(let mt=0,kt=yt.length;mt<kt;mt++)if(st=yt[mt],A.format!==Gn)if(St!==null)if(xt){if(Bt)if(A.layerUpdates.size>0){const Jt=Jh(st.width,st.height,A.format,A.type);for(const At of A.layerUpdates){const xe=st.data.subarray(At*Jt/st.data.BYTES_PER_ELEMENT,(At+1)*Jt/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,At,st.width,st.height,1,St,xe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,st.width,st.height,ot.depth,St,st.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,ct,st.width,st.height,ot.depth,0,st.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xt?Bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,st.width,st.height,ot.depth,St,B,st.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,ct,st.width,st.height,ot.depth,0,St,B,st.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{xt&&_t&&e.texStorage2D(i.TEXTURE_2D,jt,ct,yt[0].width,yt[0].height);for(let mt=0,kt=yt.length;mt<kt;mt++)st=yt[mt],A.format!==Gn?St!==null?xt?Bt&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,st.width,st.height,St,st.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,ct,st.width,st.height,0,st.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?Bt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,st.width,st.height,St,B,st.data):e.texImage2D(i.TEXTURE_2D,mt,ct,st.width,st.height,0,St,B,st.data)}else if(A.isDataArrayTexture)if(xt){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,jt,ct,ot.width,ot.height,ot.depth),Bt)if(A.layerUpdates.size>0){const mt=Jh(ot.width,ot.height,A.format,A.type);for(const kt of A.layerUpdates){const Jt=ot.data.subarray(kt*mt/ot.data.BYTES_PER_ELEMENT,(kt+1)*mt/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,kt,ot.width,ot.height,1,St,B,Jt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,St,B,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,ot.width,ot.height,ot.depth,0,St,B,ot.data);else if(A.isData3DTexture)xt?(_t&&e.texStorage3D(i.TEXTURE_3D,jt,ct,ot.width,ot.height,ot.depth),Bt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,St,B,ot.data)):e.texImage3D(i.TEXTURE_3D,0,ct,ot.width,ot.height,ot.depth,0,St,B,ot.data);else if(A.isFramebufferTexture){if(_t)if(xt)e.texStorage2D(i.TEXTURE_2D,jt,ct,ot.width,ot.height);else{let mt=ot.width,kt=ot.height;for(let Jt=0;Jt<jt;Jt++)e.texImage2D(i.TEXTURE_2D,Jt,ct,mt,kt,0,St,B,null),mt>>=1,kt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const mt=i.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),ot.parentNode!==mt){mt.appendChild(ot),h.add(A),mt.onpaint=kt=>{const Jt=kt.changedElements;for(const At of h)Jt.includes(At.image)&&(At.needsUpdate=!0)},mt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ot);else{const Jt=i.RGBA,At=i.RGBA,xe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Jt,At,xe,ot)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(yt.length>0){if(xt&&_t){const mt=zt(yt[0]);e.texStorage2D(i.TEXTURE_2D,jt,ct,mt.width,mt.height)}for(let mt=0,kt=yt.length;mt<kt;mt++)st=yt[mt],xt?Bt&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,St,B,st):e.texImage2D(i.TEXTURE_2D,mt,ct,St,B,st);A.generateMipmaps=!1}else if(xt){if(_t){const mt=zt(ot);e.texStorage2D(i.TEXTURE_2D,jt,ct,mt.width,mt.height)}Bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,B,ot)}else e.texImage2D(i.TEXTURE_2D,0,ct,St,B,ot);M(A)&&A.mipmapsAutoUpdate===!0&&v(dt),wt.__version=gt.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Yt(D,A,J){if(A.image.length!==6)return;const dt=Ft(D,A),at=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+J);const gt=n.get(at);if(at.version!==gt.__version||dt===!0){e.activeTexture(i.TEXTURE0+J);const wt=ce.getPrimaries(ce.workingColorSpace),rt=A.colorSpace===bi?null:ce.getPrimaries(A.colorSpace),ot=A.colorSpace===bi||wt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);const St=A.isCompressedTexture||A.image[0].isCompressedTexture,B=A.image[0]&&A.image[0].isDataTexture,ct=[];for(let At=0;At<6;At++)!St&&!B?ct[At]=_(A.image[At],!0,s.maxCubemapSize):ct[At]=B?A.image[At].image:A.image[At],ct[At]=Gt(A,ct[At]);const st=ct[0],yt=r.convert(A.format,A.colorSpace),xt=r.convert(A.type);let _t=w(A.internalFormat,yt,xt,A.normalized,A.colorSpace);const Bt=A.isVideoTexture!==!0,jt=gt.__version===void 0||dt===!0,mt=at.dataReady;let kt=y(A,st);Mt(i.TEXTURE_CUBE_MAP,A);let Jt;if(A.isDepthTexture){if(_t=S(A.format===Si,A.type),jt)if(Bt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,_t,st.width,st.height);else for(let At=0;At<6;At++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,_t,st.width,st.height,0,yt,xt,null)}else if(St){Bt&&jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,kt,_t,st.width,st.height);for(let At=0;At<6;At++){Jt=ct[At].mipmaps;for(let xe=0;xe<Jt.length;xe++){const Ve=Jt[xe];A.format!==Gn?yt!==null?Bt?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe,0,0,Ve.width,Ve.height,yt,Ve.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe,_t,Ve.width,Ve.height,0,Ve.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe,0,0,Ve.width,Ve.height,yt,xt,Ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe,_t,Ve.width,Ve.height,0,yt,xt,Ve.data)}}}else{if(Jt=A.mipmaps,Bt&&jt){Jt.length>0&&kt++;const At=zt(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,kt,_t,At.width,At.height)}for(let At=0;At<6;At++)if(B){Bt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,ct[At].width,ct[At].height,yt,xt,ct[At].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,_t,ct[At].width,ct[At].height,0,yt,xt,ct[At].data);for(let xe=0;xe<Jt.length;xe++){const zi=Jt[xe].image[At].image;Bt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe+1,0,0,zi.width,zi.height,yt,xt,zi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe+1,_t,zi.width,zi.height,0,yt,xt,zi.data)}}else{Bt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,yt,xt,ct[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,_t,yt,xt,ct[At]);for(let xe=0;xe<Jt.length;xe++){const Ve=Jt[xe];Bt?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe+1,0,0,yt,xt,Ve.image[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,xe+1,_t,yt,xt,Ve.image[At])}}}M(A)&&A.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),gt.__version=at.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Lt(D,A,J,dt,at,gt){const wt=r.convert(J.format,J.colorSpace),rt=r.convert(J.type),ot=w(J.internalFormat,wt,rt,J.normalized,J.colorSpace),St=n.get(A),B=n.get(J);if(B.__renderTarget=A,!St.__hasExternalTextures){const ct=Math.max(1,A.width>>gt),st=Math.max(1,A.height>>gt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,gt,ot,ct,st,A.depth,0,wt,rt,null):e.texImage2D(at,gt,ot,ct,st,0,wt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),vt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,at,B.__webglTexture,0,ie(A)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,dt,at,B.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(D,A,J){if(i.bindRenderbuffer(i.RENDERBUFFER,D),A.depthBuffer){const dt=A.depthTexture,at=dt&&dt.isDepthTexture?dt.type:null,gt=S(A.stencilBuffer,at),wt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(A),gt,A.width,A.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(A),gt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,gt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,D)}else{const dt=A.textures;for(let at=0;at<dt.length;at++){const gt=dt[at],wt=r.convert(gt.format,gt.colorSpace),rt=r.convert(gt.type),ot=w(gt.internalFormat,wt,rt,gt.normalized,gt.colorSpace);vt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie(A),ot,A.width,A.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie(A),ot,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ot,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Zt(D,A,J){const dt=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const at=n.get(A.depthTexture);at.__renderTarget=A;const gt=dt?A.depthTexture.image[0]:A.depthTexture.image;(!at.__webglTexture||gt.width!==A.width||gt.height!==A.height)&&(gt.width=A.width,gt.height=A.height,A.depthTexture.needsUpdate=!0),dt?et(A.depthTexture,0):q(A.depthTexture,0);const wt=at.__webglTexture,rt=ie(A),ot=dt?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,St=A.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===vi)vt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,St,ot,wt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,St,ot,wt,0);else if(A.depthTexture.format===Si)vt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,St,ot,wt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,St,ot,wt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(D){const A=n.get(D),J=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const dt=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),dt){const at=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,dt.removeEventListener("dispose",at)};dt.addEventListener("dispose",at),A.__depthDisposeCallback=at}A.__boundDepthTexture=dt}if(D.depthTexture&&!A.__autoAllocateDepthBuffer)if(J)for(let dt=0;dt<6;dt++)Zt(A.__webglFramebuffer[dt],D,dt);else D.texture.mipmaps.length>0?Zt(A.__webglFramebuffer[0],D,0):Zt(A.__webglFramebuffer,D,0);else if(J){A.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[dt]),A.__webglDepthbuffer[dt]===void 0)A.__webglDepthbuffer[dt]=i.createRenderbuffer(),ne(A.__webglDepthbuffer[dt],D,!1);else{const at=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=A.__webglDepthbuffer[dt];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,gt)}}else if(D.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ne(A.__webglDepthbuffer,D,!1);else{const at=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,gt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function he(D,A,J){const dt=n.get(D);A!==void 0&&Lt(dt.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&$t(D)}function ue(D){const A=D.texture,J=n.get(D),dt=n.get(A);D.addEventListener("dispose",P),E(D);const at=D.textures,gt=D.isWebGLCubeRenderTarget===!0,wt=at.length>1;if(wt||(dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture()),dt.__version=A.version,o.memory.textures++),gt){J.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(A.mipmaps.length>0){J.__webglFramebuffer[rt]=[];for(let ot=0;ot<A.mipmaps.length;ot++)J.__webglFramebuffer[rt][ot]=i.createFramebuffer()}else J.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(A.mipmaps.length>0){J.__webglFramebuffer=[];for(let rt=0;rt<A.mipmaps.length;rt++)J.__webglFramebuffer[rt]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(wt)for(let rt=0,ot=at.length;rt<ot;rt++){const St=n.get(at[rt]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&vt(D)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let rt=0;rt<at.length;rt++){const ot=at[rt];J.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[rt]);const St=r.convert(ot.format,ot.colorSpace),B=r.convert(ot.type),ct=w(ot.internalFormat,St,B,ot.normalized,ot.colorSpace,D.isXRRenderTarget===!0),st=ie(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,st,ct,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,J.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(J.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,A);for(let rt=0;rt<6;rt++)if(A.mipmaps.length>0)for(let ot=0;ot<A.mipmaps.length;ot++)Lt(J.__webglFramebuffer[rt][ot],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ot);else Lt(J.__webglFramebuffer[rt],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);M(A)?v(i.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}else if(wt){for(let rt=0,ot=at.length;rt<ot;rt++){const St=at[rt],B=n.get(St);let ct=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ct=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,B.__webglTexture),Mt(ct,St),Lt(J.__webglFramebuffer,D,St,i.COLOR_ATTACHMENT0+rt,ct,0),M(St)&&v(ct)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(rt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,dt.__webglTexture),Mt(rt,A),A.mipmaps.length>0)for(let ot=0;ot<A.mipmaps.length;ot++)Lt(J.__webglFramebuffer[ot],D,A,i.COLOR_ATTACHMENT0,rt,ot);else Lt(J.__webglFramebuffer,D,A,i.COLOR_ATTACHMENT0,rt,0);M(A)?v(rt):A.mipmaps.length>0&&i.texParameteri(rt,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}D.depthBuffer&&$t(D)}function k(D){const A=D.textures;for(let J=0,dt=A.length;J<dt;J++){const at=A[J];if(M(at)&&at.mipmapsAutoUpdate===!0){const gt=b(D),wt=n.get(at).__webglTexture;e.bindTexture(gt,wt),v(gt),e.unbindTexture()}}}const ee=[];function Ht(D){if(D.samples>0){if(vt(D)===!1){const A=D.textures,J=D.width,dt=D.height;let at=i.COLOR_BUFFER_BIT;const gt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(D),rt=A.length>1;if(rt)for(let St=0;St<A.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let St=0;St<A.length;St++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[St]);const B=n.get(A[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,B,0)}i.blitFramebuffer(0,0,J,dt,0,0,J,dt,at,i.NEAREST),l===!0&&(ee.length=0,ee.push(i.COLOR_ATTACHMENT0+St),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&ee.push(gt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let St=0;St<A.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,wt.__webglColorRenderbuffer[St]);const B=n.get(A[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,B,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){const A=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function ie(D){return Math.min(s.maxSamples,D.samples)}function vt(D){const A=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Me(D){const A=o.render.frame;d.get(D)!==A&&(d.set(D,A),D.update())}function Gt(D,A){const J=D.colorSpace,dt=D.format,at=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==kr&&J!==bi&&(ce.getTransfer(J)===ge?(dt!==Gn||at!==cn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):fe("WebGLTextures: Unsupported texture color space:",J)),A}function zt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=G,this.getTextureUnits=Z,this.setTextureUnits=X,this.setTexture2D=q,this.setTexture2DArray=nt,this.setTexture3D=ht,this.setTextureCube=et,this.rebindTextures=he,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=vt,this.dispose=F}function u1(i,t){function e(n,s=bi){let r;const o=ce.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ic)return i.BYTE;if(n===Nc)return i.SHORT;if(n===qs)return i.UNSIGNED_SHORT;if(n===ca)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===Oc)return i.ALPHA;if(n===zc)return i.RGB;if(n===Gn)return i.RGBA;if(n===vi)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===Nr)return i.RED;if(n===da)return i.RED_INTEGER;if(n===yi)return i.RG;if(n===fa)return i.RG_INTEGER;if(n===pa)return i.RGBA_INTEGER;if(n===Ur||n===Fr||n===Or||n===zr)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===ga||n===xa||n===_a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ma||n===va||n===Sa||n===ya||n===ba||n===Br||n===wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ma||n===va)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ya)return r.COMPRESSED_R11_EAC;if(n===ba)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Br)return r.COMPRESSED_RG11_EAC;if(n===wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ea||n===Ta||n===Aa||n===Ra||n===Ca||n===La||n===Pa||n===Da||n===Ia||n===Na||n===Ua||n===Fa||n===Oa||n===za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ea)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ta)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Aa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ra)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ca)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Da)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Na)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ua)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===za)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ba||n===Ga||n===ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ba)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ha||n===Va||n===Gr||n===Wa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const d1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f1=`
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

}`;class p1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Rh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xe({vertexShader:d1,fragmentShader:f1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new Vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m1 extends wi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",m=new p1,g={},_=e.getContextAttributes();let M=null,v=null;const b=[],w=[],S=new Ut;let y=null,E=null;const T=new Nn;T.viewport=new Se;const R=new Nn;R.viewport=new Se;const P=[T,R],N=new r0;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let q=b[z];return q===void 0&&(q=new tl,b[z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(z){let q=b[z];return q===void 0&&(q=new tl,b[z]=q),q.getGripSpace()},this.getHand=function(z){let q=b[z];return q===void 0&&(q=new tl,b[z]=q),q.getHandSpace()};function I(z){const q=w.indexOf(z.inputSource);if(q===-1)return;const nt=b[q];nt!==void 0&&(nt.update(z.inputSource,z.frame,c||o),nt.dispatchEvent({type:z.type,data:z.inputSource}))}function O(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",j);for(let z=0;z<b.length;z++){const q=w[z];q!==null&&(w[z]=null,b[z].disconnect(q))}L=null,F=null,m.reset();for(const z in g)delete g[z];if(t.setRenderTarget(M),f=null,u=null,h=null,s=null,v=null,K.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(S.width,S.height,!1),E!==null){const z=E.camera;z.fov=E.fov,z.zoom=E.zoom,z.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",O),s.addEventListener("inputsourceschange",j),_.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(S),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,ht=null,et=null;_.depth&&(et=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=_.stencil?Si:vi,ht=_.stencil?os:Bn);const it={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(it),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new kn(u.textureWidth,u.textureHeight,{format:Gn,type:cn,depthTexture:new Ss(u.textureWidth,u.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const nt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new kn(f.framebufferWidth,f.framebufferHeight,{format:Gn,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),K.setContext(s),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(z){for(let q=0;q<z.removed.length;q++){const nt=z.removed[q],ht=w.indexOf(nt);ht>=0&&(w[ht]=null,b[ht].disconnect(nt))}for(let q=0;q<z.added.length;q++){const nt=z.added[q];let ht=w.indexOf(nt);if(ht===-1){for(let it=0;it<b.length;it++)if(it>=w.length){w.push(nt),ht=it;break}else if(w[it]===null){w[it]=nt,ht=it;break}if(ht===-1)break}const et=b[ht];et&&et.connect(nt)}}function V(z,q){q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let q=z.near,nt=z.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),N.near=R.near=T.near=q,N.far=R.far=T.far=nt,(L!==N.near||F!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),L=N.near,F=N.far),N.layers.mask=z.layers.mask|6,T.layers.mask=N.layers.mask&-5,R.layers.mask=N.layers.mask&-3;const ht=z.parent,et=N.cameras;V(N,ht);for(let it=0;it<et.length;it++)V(et[it],ht);N.projectionMatrix.copy(T.projectionMatrix),N.projectionMatrixInverse.copy(T.projectionMatrixInverse),E===null&&z.isPerspectiveCamera&&(E={camera:z,fov:z.fov,zoom:z.zoom}),G(z,N,ht)};function G(z,q,nt){nt===null?z.matrix.copy(q.matrixWorld):(z.matrix.copy(nt.matrixWorld),z.matrix.invert(),z.matrix.multiply(q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Qs*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(z){l=z,u!==null&&(u.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(z){return g[z]};let Z=null;function X(z,q){if(d=q.getViewerPose(c||o),p=q,d!==null){const nt=d.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let ht=!1;nt.length!==N.cameras.length&&(N.cameras.length=0,ht=!0);for(let ut=0;ut<nt.length;ut++){const Mt=nt[ut];let Ft=null;if(f!==null)Ft=f.getViewport(Mt);else{const ft=h.getViewSubImage(u,Mt);Ft=ft.viewport,ut===0&&(t.setRenderTargetTextures(v,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(v))}let lt=P[ut];lt===void 0&&(lt=new Nn,lt.layers.enable(ut),lt.viewport=new Se,P[ut]=lt),lt.matrix.fromArray(Mt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Mt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),ut===0&&(N.matrix.copy(lt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ht===!0&&N.cameras.push(lt)}const et=s.enabledFeatures;if(et&&et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const ut=h.getDepthInformation(nt[0]);ut&&ut.isValid&&ut.texture&&m.init(ut,s.renderState)}if(et&&et.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let ut=0;ut<nt.length;ut++){const Mt=nt[ut].camera;if(Mt){let Ft=g[Mt];Ft||(Ft=new Rh,g[Mt]=Ft);const lt=h.getCameraImage(Mt);Ft.sourceTexture=lt}}}}for(let nt=0;nt<b.length;nt++){const ht=w[nt],et=b[nt];ht!==null&&et!==void 0&&et.update(ht,q,c||o)}Z&&Z(z,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),p=null}const K=new $h;K.setAnimationLoop(X),this.setAnimationLoop=function(z){Z=z},this.dispose=function(){}}}const g1=new re,Ru=new Xt;Ru.set(-1,0,0,0,1,0,0,0,1);function x1(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Oh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),d(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===en&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===en&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const _=t.get(g),M=_.envMap,v=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(g1.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ru),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=M*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function d(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===en&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const _=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _1(i,t,e,n){let s={},r={};function o(_,M){const v=M.program;n.uniformBlockBinding(_,v,s[_.id])}function a(_,M){let v=s[_.id];v===void 0&&(p(_),v=l(_),s[_.id]=v,_.addEventListener("dispose",m));const b=M.program;n.updateUBOMapping(_,b);const w=t.render.frame;r[_.id]!==w&&(c(_),r[_.id]=w)}function l(_){const M=i.createBuffer(),v=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,v,b),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(_){const M=s[_.id],v=_.uniforms,b=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,S=v.length;w<S;w++){const y=v[w];if(Array.isArray(y))for(let E=0,T=y.length;E<T;E++)d(y[E],w,E,b);else d(y,w,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,M,v,b){if(u(_,M,v,b)===!0){const w=_.__offset,S=_.value;if(Array.isArray(S)){let y=0;for(let E=0;E<S.length;E++){const T=S[E],R=x(T,!0);h(T,_.__data,y),y+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else h(S,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,_.__data)}}function h(_,M,v){typeof _=="number"||typeof _=="boolean"?M[v]=_:_.isMatrix3?(M[v]=_.elements[0],M[v+1]=_.elements[1],M[v+2]=_.elements[2],M[v+3]=0,M[v+4]=_.elements[3],M[v+5]=_.elements[4],M[v+6]=_.elements[5],M[v+7]=0,M[v+8]=_.elements[6],M[v+9]=_.elements[7],M[v+10]=_.elements[8],M[v+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-v),v):_.toArray(M,v)}function u(_,M,v,b){const w=_.value,S=M+"_"+v;if(Array.isArray(w)){b[S]===void 0&&(b[S]=[]);const y=b[S];let E=!1;for(let T=0;T<w.length;T++)f(w[T],y,T)===!0&&(E=!0);return E}return f(w,b,S)}function f(_,M,v){if(M[v]===void 0)return typeof _=="number"||typeof _=="boolean"?M[v]=_:ArrayBuffer.isView(_)?M[v]=_.slice():M[v]=_.clone(),!0;{const b=M[v];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return M[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function p(_){const M=_.uniforms;let v=0;const b=16;for(let S=0,y=M.length;S<y;S++){const E=Array.isArray(M[S])?M[S]:[M[S]];for(let T=0,R=E.length;T<R;T++){const P=E[T],N=Array.isArray(P.value)?P.value:[P.value],L=Array.isArray(M[S])||Array.isArray(P.value);let F=v;for(let O=0,j=N.length;O<j;O++){const V=N[O],G=x(V,L),Z=v%b,X=Z%G.boundary,K=Z+X;v+=X,K!==0&&b-K<G.storage&&(v+=b-K),O===0&&(F=v),v+=G.storage}const I=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new I((v-F)/Float32Array.BYTES_PER_ELEMENT),P.__offset=F}}const w=v%b;return w>0&&(v+=b-w),_.__size=v,_.__cache={},this}function x(_,M){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(_){const M=_.target;M.removeEventListener("dispose",m),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(const _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:g}}const M1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yn=null;function v1(){return Yn===null&&(Yn=new rr(M1,16,16,yi,Tn),Yn.name="DFG_LUT",Yn.minFilter=qe,Yn.magFilter=qe,Yn.wrapS=zn,Yn.wrapT=zn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}class S1{constructor(t={}){const{canvas:e=Ff(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=cn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=f,m=new Set([pa,fa,da]),g=new Set([cn,Bn,qs,os,ha,ua]),_=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]};let b=null,w=null;const S=[],y=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let R=!1,P=null,N=null,L=null,F=null;this._outputColorSpace=Fe;let I=0,O=0,j=null,V=-1,G=null;const Z=new Se,X=new Se;let K=null;const z=new Pt(0);let q=0,nt=e.width,ht=e.height,et=1,it=null,Rt=null;const ut=new Se(0,0,nt,ht),Mt=new Se(0,0,nt,ht);let Ft=!1;const lt=new lr,ft=new gl;let pt=!1,Yt=!1;const Lt=new re,ne=new W,Zt=new Se,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function ue(){return j===null?et:1}let k=n;function ee(C,H){return e.getContext(C,H)}let Ht,ie,vt,Me,Gt,zt,D,A,J,dt,at,gt,wt,rt,ot,St,B,ct,st,yt,xt,_t,Bt;try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xi}`),e.addEventListener("webglcontextlost",kt,!1),e.addEventListener("webglcontextrestored",Jt,!1),e.addEventListener("webglcontextcreationerror",At,!1),k===null){const H="webgl2";if(k=ee(H,C),k===null)throw ee(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}jt()}catch(C){throw e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),fe("WebGLRenderer: "+C.message),C}function jt(){Ht=new wg(k),Ht.init(),xt=new u1(k,Ht),ie=new fg(k,Ht,t,xt),vt=new c1(k,Ht),ie.reversedDepthBuffer&&u&&vt.buffers.depth.setReversed(!0),N=k.createFramebuffer(),L=k.createFramebuffer(),F=k.createFramebuffer(),Me=new Ag(k),Gt=new qx,zt=new h1(k,Ht,vt,Gt,ie,xt,Me),D=new bg(T),A=new c0(k),_t=new ug(k,A),J=new Eg(k,A,Me,_t),dt=new Cg(k,J,A,_t,Me),ct=new Rg(k,ie,zt),ot=new pg(Gt),at=new Kx(T,D,Ht,ie,_t,ot),gt=new x1(T,Gt),wt=new $x,rt=new i1(Ht),B=new hg(T,D,vt,dt,p,l),St=new l1(T,dt,ie),Bt=new _1(k,Me,ie,vt),st=new dg(k,Ht,Me),yt=new Tg(k,Ht,Me),Me.programs=at.programs,T.capabilities=ie,T.extensions=Ht,T.properties=Gt,T.renderLists=wt,T.shadowMap=St,T.state=vt,T.info=Me}x!==cn&&(E=new Pg(x,e.width,e.height,a,s,r));const mt=new m1(T,k);this.xr=mt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=Ht.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ht.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(C){C!==void 0&&(et=C,this.setSize(nt,ht,!1))},this.getSize=function(C){return C.set(nt,ht)},this.setSize=function(C,H,tt=!0){if(mt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=C,ht=H,e.width=Math.floor(C*et),e.height=Math.floor(H*et),tt===!0&&(e.style.width=C+"px",e.style.height=H+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(nt*et,ht*et).floor()},this.setDrawingBufferSize=function(C,H,tt){nt=C,ht=H,et=tt,e.width=Math.floor(C*tt),e.height=Math.floor(H*tt),this.setViewport(0,0,C,H)},this.setEffects=function(C){if(x===cn){fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let H=0;H<C.length;H++)if(C[H].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Z)},this.getViewport=function(C){return C.copy(ut)},this.setViewport=function(C,H,tt,$){C.isVector4?ut.set(C.x,C.y,C.z,C.w):ut.set(C,H,tt,$),vt.viewport(Z.copy(ut).multiplyScalar(ue()).round())},this.getScissor=function(C){return C.copy(Mt)},this.setScissor=function(C,H,tt,$){C.isVector4?Mt.set(C.x,C.y,C.z,C.w):Mt.set(C,H,tt,$),vt.scissor(X.copy(Mt).multiplyScalar(ue()).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(C){vt.setScissorTest(Ft=C)},this.setOpaqueSort=function(C){it=C},this.setTransparentSort=function(C){Rt=C},this.getClearColor=function(C){return C.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(C=!0,H=!0,tt=!0){let $=0;if(C){let Q=!1;if(j!==null){const Et=j.texture.format;Q=m.has(Et)}if(Q){const Et=j.texture.type,Dt=g.has(Et),bt=B.getClearColor(),Ct=B.getClearAlpha(),Ot=bt.r,Kt=bt.g,ae=bt.b;Dt?(_[0]=Ot,_[1]=Kt,_[2]=ae,_[3]=Ct,k.clearBufferuiv(k.COLOR,0,_)):(M[0]=Ot,M[1]=Kt,M[2]=ae,M[3]=Ct,k.clearBufferiv(k.COLOR,0,M))}else $|=k.COLOR_BUFFER_BIT}H&&($|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),P=C},this.dispose=function(){e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),B.dispose(),wt.dispose(),rt.dispose(),zt.dispose(),Gt.dispose(),D.dispose(),dt.dispose(),J.dispose(),_t.dispose(),Bt.dispose(),at.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Xd),mt.removeEventListener("sessionend",Yd),ts.stop()};function kt(C){C.preventDefault(),Wc("WebGLRenderer: Context Lost."),R=!0}function Jt(){Wc("WebGLRenderer: Context Restored."),R=!1;const C=Me.autoReset,H=St.enabled,tt=St.autoUpdate,$=St.needsUpdate,Q=St.type;jt(),Me.autoReset=C,St.enabled=H,St.autoUpdate=tt,St.needsUpdate=$,St.type=Q}function At(C){fe("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xe(C){const H=C.target;H.removeEventListener("dispose",xe),Ve(H)}function Ve(C){zi(C),Gt.remove(C)}function zi(C){const H=Gt.get(C).programs;H!==void 0&&(H.forEach(function(tt){at.releaseProgram(tt)}),C.isShaderMaterial&&at.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,tt,$,Q,Et){H===null&&(H=$t);const Dt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,bt=Iv(C,H,tt,$,Q);vt.setMaterial($,Dt);let Ct=tt.index,Ot=1;if($.wireframe===!0){if(Ct=J.getWireframeAttribute(tt),Ct===void 0)return;Ot=2}const Kt=tt.drawRange,ae=tt.attributes.position;let It=Kt.start*Ot,le=(Kt.start+Kt.count)*Ot;Et!==null&&(It=Math.max(It,Et.start*Ot),le=Math.min(le,(Et.start+Et.count)*Ot)),Ct!==null?(It=Math.max(It,0),le=Math.min(le,Ct.count)):ae!=null&&(It=Math.max(It,0),le=Math.min(le,ae.count));const Ne=le-It;if(Ne<0||Ne===1/0)return;_t.setup(Q,$,bt,tt,Ct);let ve,_e=st;if(Ct!==null&&(ve=A.get(Ct),_e=yt,_e.setIndex(ve)),Q.isMesh)$.wireframe===!0?(vt.setLineWidth($.wireframeLinewidth*ue()),_e.setMode(k.LINES)):_e.setMode(k.TRIANGLES);else if(Q.isLine){let Qe=$.linewidth;Qe===void 0&&(Qe=1),vt.setLineWidth(Qe*ue()),Q.isLineSegments?_e.setMode(k.LINES):Q.isLineLoop?_e.setMode(k.LINE_LOOP):_e.setMode(k.LINE_STRIP)}else Q.isPoints?_e.setMode(k.POINTS):Q.isSprite&&_e.setMode(k.TRIANGLES);if(Q.isBatchedMesh)if(Ht.get("WEBGL_multi_draw"))_e.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qe=Q._multiDrawStarts,Nt=Q._multiDrawCounts,on=Q._multiDrawCount,me=Ct?A.get(Ct).bytesPerElement:1,es=Gt.get($).currentProgram.getUniforms();for(let tn=0;tn<on;tn++)es.setValue(k,"_gl_DrawID",tn),_e.render(Qe[tn]/me,Nt[tn])}else if(Q.isInstancedMesh)_e.renderInstances(It,Ne,Q.count);else if(tt.isInstancedBufferGeometry){const Qe=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Nt=Math.min(tt.instanceCount,Qe);_e.renderInstances(It,Ne,Nt)}else _e.render(It,Ne)};function Wd(C,H,tt,$){P!==null&&C.isNodeMaterial&&P.setObject($,C),pt===!0&&ot.setState(C,tt,!1),C.transparent===!0&&C.side===Le&&C.forceSinglePass===!1?(C.side=en,C.needsUpdate=!0,Pr(C,H,$),C.side=Mi,C.needsUpdate=!0,Pr(C,H,$),C.side=Le):Pr(C,H,$)}this.compile=function(C,H,tt=null){tt===null&&(tt=C),P!==null&&P.renderStart(C,H,tt),w=rt.get(tt),w.init(H),y.push(w),tt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(H.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),C!==tt&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(H.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),w.setupLights(),P!==null&&P.updateLights(w.state.lightsArray),Yt=this.localClippingEnabled,pt=ot.init(this.clippingPlanes,Yt),pt===!0&&ot.setGlobalState(this.clippingPlanes,H),P!==null&&St.render(w.state.shadowsArray,tt,H);const $=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Et=Q.material;if(Et)if(Array.isArray(Et))for(let Dt=0;Dt<Et.length;Dt++){const bt=Et[Dt];Wd(bt,tt,H,Q),$.add(bt)}else Wd(Et,tt,H,Q),$.add(Et)}),w=y.pop(),P!==null&&P.renderEnd(),$},this.compileAsync=function(C,H,tt=null){const $=this.compile(C,H,tt);return new Promise(Q=>{function Et(){if($.forEach(function(Dt){const Ct=Gt.get(Dt).currentProgram;(Ct===void 0||Ct.isReady())&&$.delete(Dt)}),$.size===0){Q(C);return}setTimeout(Et,10)}Ht.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Mc=null;function Pv(C){Mc&&Mc(C)}function Xd(){ts.stop()}function Yd(){ts.start()}const ts=new $h;ts.setAnimationLoop(Pv),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(C){Mc=C,mt.setAnimationLoop(C),C===null?ts.stop():ts.start()},mt.addEventListener("sessionstart",Xd),mt.addEventListener("sessionend",Yd),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P!==null&&P.renderStart(C,H);const tt=mt.enabled===!0&&mt.isPresenting===!0,$=E!==null&&(j===null||tt)&&E.begin(T,j);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(H),H=mt.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,H,j),w=rt.get(C,y.length),w.init(H),w.state.textureUnits=zt.getTextureUnits(),y.push(w),Lt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?ft.setFromArrayCamera(H):lt.setFromProjectionMatrix(Lt,An,H.reversedDepth),Yt=this.localClippingEnabled,pt=ot.init(this.clippingPlanes,Yt),b=wt.get(C,S.length),b.init(),S.push(b),this.info.render.frame++,mt.enabled===!0&&mt.isPresenting===!0){const Dt=T.xr.getDepthSensingMesh();Dt!==null&&vc(Dt,H,-1/0,T.sortObjects)}vc(C,H,0,T.sortObjects),b.finish(),P!==null&&P.updateLights(w.state.lightsArray),T.sortObjects===!0&&b.sort(it,Rt),he=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,he&&B.addToRenderList(b,C),this.info.autoReset===!0&&this.info.reset(),pt===!0&&ot.beginShadows();const Q=w.state.shadowsArray;if(St.render(Q,C,H),pt===!0&&ot.endShadows(),($&&E.hasRenderPass())===!1){const Dt=b.opaque,bt=b.transmissive;if(w.setupLights(),H.isArrayCamera){const Ct=H.cameras;if(bt.length>0)for(let Ot=0,Kt=Ct.length;Ot<Kt;Ot++){const ae=Ct[Ot];Kd(Dt,bt,C,ae)}he&&B.render(C);for(let Ot=0,Kt=Ct.length;Ot<Kt;Ot++){const ae=Ct[Ot];Zd(b,C,ae,ae.viewport)}}else bt.length>0&&Kd(Dt,bt,C,H),he&&B.render(C),Zd(b,C,H)}j!==null&&O===0&&(zt.updateMultisampleRenderTarget(j),zt.updateRenderTargetMipmap(j)),$&&E.end(T),C.isScene===!0&&C.onAfterRender(T,C,H),_t.resetDefaultState(),V=-1,G=null,y.pop(),y.length>0?(w=y[y.length-1],zt.setTextureUnits(w.state.textureUnits),pt===!0&&ot.setGlobalState(T.clippingPlanes,w.state.camera)):w=null,S.pop(),S.length>0?b=S[S.length-1]:b=null,P!==null&&P.renderEnd()};function vc(C,H,tt,$){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)tt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)w.pushLight(C),C.castShadow&&w.pushShadow(C);else if(C.isSprite){const Dt=H.isArrayCamera?ft:lt;if(!C.frustumCulled||C.intersectsFrustum(Dt)){$&&Zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Lt);const bt=dt.update(C),Ct=C.material;Ct.visible&&b.push(C,bt,Ct,tt,Zt.z,null,H)}}else if(C.isMesh||C.isLine||C.isPoints){const Dt=H.isArrayCamera?ft:lt;if(!C.frustumCulled||C.intersectsFrustum(Dt)){const bt=dt.update(C),Ct=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Zt.copy(C.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Zt.copy(bt.boundingSphere.center)),Zt.applyMatrix4(C.matrixWorld).applyMatrix4(Lt)),Array.isArray(Ct)){const Ot=bt.groups;for(let Kt=0,ae=Ot.length;Kt<ae;Kt++){const It=Ot[Kt],le=Ct[It.materialIndex];le&&le.visible&&b.push(C,bt,le,tt,Zt.z,It,H)}}else Ct.visible&&b.push(C,bt,Ct,tt,Zt.z,null,H)}}}const Et=C.children;for(let Dt=0,bt=Et.length;Dt<bt;Dt++)vc(Et[Dt],H,tt,$)}function Zd(C,H,tt,$){const{opaque:Q,transmissive:Et,transparent:Dt}=C;w.setupLightsView(tt),pt===!0&&ot.setGlobalState(T.clippingPlanes,tt),$&&vt.viewport(Z.copy($)),Q.length>0&&Ko(Q,H,tt),Et.length>0&&Ko(Et,H,tt),Dt.length>0&&Ko(Dt,H,tt),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Kd(C,H,tt,$){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[$.id]===void 0){const It=Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[$.id]=new kn(1,1,{generateMipmaps:!0,type:It?Tn:cn,minFilter:wn,samples:Math.max(4,ie.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}const Et=w.state.transmissionRenderTarget[$.id],Dt=$.viewport||Z;Et.setSize(Dt.z*T.transmissionResolutionScale,Dt.w*T.transmissionResolutionScale);const bt=T.getRenderTarget(),Ct=T.getActiveCubeFace(),Ot=T.getActiveMipmapLevel();T.setRenderTarget(Et),T.getClearColor(z),q=T.getClearAlpha(),q<1&&T.setClearColor(16777215,.5),T.clear(),he&&B.render(tt);const Kt=T.toneMapping;T.toneMapping=ti;const ae=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),w.setupLightsView($),pt===!0&&ot.setGlobalState(T.clippingPlanes,$),Ko(C,tt,$),zt.updateMultisampleRenderTarget(Et),zt.updateRenderTargetMipmap(Et),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let le=0,Ne=H.length;le<Ne;le++){const ve=H[le],{object:_e,geometry:Qe,material:Nt,group:on}=ve;if(Nt.side===Le&&_e.layers.test($.layers)){const me=Nt.side;Nt.side=en,Nt.needsUpdate=!0,qd(_e,tt,$,Qe,Nt,on),Nt.side=me,Nt.needsUpdate=!0,It=!0}}It===!0&&(zt.updateMultisampleRenderTarget(Et),zt.updateRenderTargetMipmap(Et))}T.setRenderTarget(bt,Ct,Ot),T.setClearColor(z,q),ae!==void 0&&($.viewport=ae),T.toneMapping=Kt}function Ko(C,H,tt){const $=H.isScene===!0?H.overrideMaterial:null;for(let Q=0,Et=C.length;Q<Et;Q++){const Dt=C[Q],{object:bt,geometry:Ct,group:Ot}=Dt;let Kt=Dt.material;Kt.allowOverride===!0&&$!==null&&(Kt=$),bt.layers.test(tt.layers)&&qd(bt,H,tt,Ct,Kt,Ot)}}function qd(C,H,tt,$,Q,Et){P!==null&&Q.isNodeMaterial&&P.setObject(C,Q),C.onBeforeRender(T,H,tt,$,Q,Et),C.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(T,H,tt,$,C,Et),Q.transparent===!0&&Q.side===Le&&Q.forceSinglePass===!1?(Q.side=en,Q.needsUpdate=!0,T.renderBufferDirect(tt,H,$,Q,C,Et),Q.side=Mi,Q.needsUpdate=!0,T.renderBufferDirect(tt,H,$,Q,C,Et),Q.side=Le):T.renderBufferDirect(tt,H,$,Q,C,Et),C.onAfterRender(T,H,tt,$,Q,Et)}function Jd(C){let H=0;for(const tt of C)tt.texture!==null&&H++;return H}function Pr(C,H,tt){H.isScene!==!0&&(H=$t);const $=Gt.get(C),Q=w.state.lights,Et=w.state.shadowsArray,Dt=Q.state.version,bt=at.getParameters(C,Q.state,Et,H,tt,w.state.lightProbeGridArray),Ct=at.getProgramCacheKey(bt);let Ot=$.programs;$.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?H.environment:null,$.fog=H.fog;const Kt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;$.envMap=D.get(C.envMap||$.environment,Kt),$.envMapRotation=$.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,Ot===void 0&&(C.addEventListener("dispose",xe),Ot=new Map,$.programs=Ot,$.programVariants=new Map);let ae=Ot.get(Ct);if(ae!==void 0){if($.currentProgram===ae&&$.lightsStateVersion===Dt)return jd(C,bt),ae}else bt.uniforms=at.getUniforms(C),P!==null&&C.isNodeMaterial&&P.build(C,tt,bt),C.onBeforeCompile(bt,T),ae=at.acquireProgram(bt,Ct),Ot.set(Ct,ae),$.uniforms=bt.uniforms;const It=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(It.clippingPlanes=ot.uniform),jd(C,bt),$.needsLights=Uv(C),$.lightsStateVersion=Dt,$.needsLights&&(It.ambientLightColor.value=Q.state.ambient,It.lightProbe.value=Q.state.probe,It.sunLights.value=Q.state.sun,It.sunLightShadows.value=Q.state.sunShadow,It.directionalLights.value=Q.state.directional,It.directionalLightShadows.value=Q.state.directionalShadow,It.spotLights.value=Q.state.spot,It.spotLightShadows.value=Q.state.spotShadow,It.rectAreaLights.value=Q.state.rectArea,It.ltc_1.value=Q.state.rectAreaLTC1,It.ltc_2.value=Q.state.rectAreaLTC2,It.pointLights.value=Q.state.point,It.pointLightShadows.value=Q.state.pointShadow,It.hemisphereLights.value=Q.state.hemi,It.sunShadowMatrix.value=Q.state.sunShadowMatrix,It.sunShadowCascade.value=Q.state.sunShadowCascade,It.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,It.spotLightMatrix.value=Q.state.spotLightMatrix,It.spotLightMap.value=Q.state.spotLightMap,It.pointShadowMatrix.value=Q.state.pointShadowMatrix),$.numLightProbeGrids=Jd(w.state.lightProbeGridArray),$.currentProgram=ae,$.uniformsList=null,ae}function Dv(C,H,tt,$,Q){const Et=Gt.get(C),Dt=Et.currentProgram.id+","+$+","+Q;let bt=Et.programVariants.get(Dt);return bt===void 0?(bt=Pr(C,H,tt),Et.programVariants.set(Dt,bt)):(Et.currentProgram=bt,Et.uniformsList=null,Et.outputColorSpace=$,Et.toneMapping=Q),bt}function $d(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=To.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function jd(C,H){const tt=Gt.get(C);tt.outputColorSpace=H.outputColorSpace,tt.batching=H.batching,tt.batchingColor=H.batchingColor,tt.instancing=H.instancing,tt.instancingColor=H.instancingColor,tt.instancingMorph=H.instancingMorph,tt.skinning=H.skinning,tt.morphTargets=H.morphTargets,tt.morphNormals=H.morphNormals,tt.morphColors=H.morphColors,tt.morphTargetsCount=H.morphTargetsCount,tt.numClippingPlanes=H.numClippingPlanes,tt.numIntersection=H.numClipIntersection,tt.vertexAlphas=H.vertexAlphas,tt.vertexTangents=H.vertexTangents,tt.toneMapping=H.toneMapping}function Iv(C,H,tt,$,Q){H.isScene!==!0&&(H=$t),zt.resetTextureUnits();const Et=H.fog,Dt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?H.environment:null,bt=j===null?T.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ce.workingColorSpace,Ct=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ot=D.get($.envMap||Dt,Ct),Kt=$.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ae=!!tt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),It=!!tt.morphAttributes.position,le=!!tt.morphAttributes.normal,Ne=!!tt.morphAttributes.color;let ve=ti;$.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ve=T.toneMapping);const _e=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Qe=_e!==void 0?_e.length:0,Nt=Gt.get($),on=w.state.lights;if(pt===!0&&(Yt===!0||C!==G)){const Ee=C===G&&$.id===V;ot.setState($,C,Ee)}let me=!1,es=!1;$.version===Nt.__version?Nt.needsLights&&Nt.lightsStateVersion!==on.state.version||Q.isBatchedMesh&&Nt.batching===!1||!Q.isBatchedMesh&&Nt.batching===!0||Q.isBatchedMesh&&Nt.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Nt.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Nt.instancing===!1||!Q.isInstancedMesh&&Nt.instancing===!0||Q.isSkinnedMesh&&Nt.skinning===!1||!Q.isSkinnedMesh&&Nt.skinning===!0||Q.isInstancedMesh&&Nt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Nt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Nt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Nt.instancingMorph===!1&&Q.morphTexture!==null||Nt.envMap!==Ot||$.fog===!0&&Nt.fog!==Et||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ot.numPlanes||Nt.numIntersection!==ot.numIntersection)||Nt.vertexAlphas!==Kt||Nt.vertexTangents!==ae||Nt.morphTargets!==It||Nt.morphNormals!==le||Nt.morphColors!==Ne||Nt.morphTargetsCount!==Qe||Nt.numLightProbeGrids!==Jd(w.state.lightProbeGridArray)?me=!0:(Nt.outputColorSpace!==bt||Nt.toneMapping!==ve)&&(es=!0):(me=!0,Nt.__version=$.version);let tn=Nt.currentProgram;(me===!0||es===!0)&&(tn=es===!0?Dv($,H,Q,bt,ve):Pr($,H,Q),P&&$.isNodeMaterial&&P.onUpdateProgram($,tn,Nt));let qo=!1,Bi=!1,ns=!1;const de=tn.getUniforms(),Ke=Nt.uniforms;if(vt.useProgram(tn.program)&&(qo=!0,Bi=!0,ns=!0),$.id!==V&&(V=$.id,Bi=!0),qo||G!==C){vt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),de.setValue(k,"projectionMatrix",C.projectionMatrix),de.setValue(k,"viewMatrix",C.matrixWorldInverse);const We=de.map.cameraPosition;We!==void 0&&We.setValue(k,ne.setFromMatrixPosition(C.matrixWorld)),ie.logarithmicDepthBuffer&&de.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&de.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),G!==C&&(G=C,Bi=!0,ns=!0)}if(Nt.needsLights&&(on.state.sunShadowMap.length>0&&de.setValue(k,"sunShadowMap",on.state.sunShadowMap,zt),on.state.directionalShadowMap.length>0&&de.setValue(k,"directionalShadowMap",on.state.directionalShadowMap,zt),on.state.spotShadowMap.length>0&&de.setValue(k,"spotShadowMap",on.state.spotShadowMap,zt),on.state.pointShadowMap.length>0&&de.setValue(k,"pointShadowMap",on.state.pointShadowMap,zt)),Q.isSkinnedMesh){de.setOptional(k,Q,"bindMatrix"),de.setOptional(k,Q,"bindMatrixInverse");const Ee=Q.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),de.setValue(k,"boneTexture",Ee.boneTexture,zt))}Q.isBatchedMesh&&(de.setOptional(k,Q,"batchingTexture"),de.setValue(k,"batchingTexture",Q._matricesTexture,zt),de.setOptional(k,Q,"batchingIdTexture"),de.setValue(k,"batchingIdTexture",Q._indirectTexture,zt),de.setOptional(k,Q,"batchingColorTexture"),Q._colorsTexture!==null&&de.setValue(k,"batchingColorTexture",Q._colorsTexture,zt));const On=tt.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&ct.update(Q,tt,tn),(Bi||Nt.receiveShadow!==Q.receiveShadow)&&(Nt.receiveShadow=Q.receiveShadow,de.setValue(k,"receiveShadow",Q.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&H.environment!==null&&(Ke.envMapIntensity.value=H.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=v1()),Bi){if(de.setValue(k,"toneMappingExposure",T.toneMappingExposure),Nt.needsLights&&Nv(Ke,ns),Et&&$.fog===!0&&gt.refreshFogUniforms(Ke,Et),gt.refreshMaterialUniforms(Ke,$,et,ht,w.state.transmissionRenderTarget[C.id]),Nt.needsLights&&Nt.numLightProbeGrids>0){const Ee=v;let We=0;for(const gi of w.state.lightProbeGridArray)gi.texture!==null&&(Ee.textures[We]=gi.texture,Ee.min[We]=gi.boundingBox.min,Ee.max[We]=gi.boundingBox.max,Ee.resolution[We]=gi.resolution,We++);for(const gi in Ee)Ee[gi].length=We;Ke.probesSH.value=Ee.textures,Ke.probesMin.value=Ee.min,Ke.probesMax.value=Ee.max,Ke.probesResolution.value=Ee.resolution}To.upload(k,$d(Nt),Ke,zt)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(To.upload(k,$d(Nt),Ke,zt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&de.setValue(k,"center",Q.center),de.setValue(k,"modelViewMatrix",Q.modelViewMatrix),de.setValue(k,"normalMatrix",Q.normalMatrix),de.setValue(k,"modelMatrix",Q.matrixWorld),$.uniformsGroups!==void 0){const Ee=$.uniformsGroups;for(let We=0,gi=Ee.length;We<gi;We++){const tf=Ee[We];Bt.update(tf,tn),Bt.bind(tf,tn)}}return tn}function Nv(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.sunLights.needsUpdate=H,C.sunLightShadows.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function Uv(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(C,H,tt){const $=Gt.get(C);$.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Gt.get(C.texture).__webglTexture=H,Gt.get(C.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:tt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,H){const tt=Gt.get(C);tt.__webglFramebuffer=H,tt.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,tt=0){j=C,I=H,O=tt;let $=null,Q=!1,Et=!1;if(C){const bt=Gt.get(C);if(bt.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(k.FRAMEBUFFER,bt.__webglFramebuffer),Z.copy(C.viewport),X.copy(C.scissor),K=C.scissorTest,vt.viewport(Z),vt.scissor(X),vt.setScissorTest(K),V=-1;return}else if(bt.__webglFramebuffer===void 0)zt.setupRenderTarget(C);else if(bt.__hasExternalTextures)zt.rebindTextures(C,Gt.get(C.texture).__webglTexture,Gt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Kt=C.depthTexture;if(bt.__boundDepthTexture!==Kt){if(Kt!==null&&Gt.has(Kt)&&(C.width!==Kt.image.width||C.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(C)}}const Ct=C.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(Et=!0);const Ot=Gt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ot[H])?$=Ot[H][tt]:$=Ot[H],Q=!0):C.samples>0&&zt.useMultisampledRTT(C)===!1?$=Gt.get(C).__webglMultisampledFramebuffer:Array.isArray(Ot)?$=Ot[tt]:$=Ot,Z.copy(C.viewport),X.copy(C.scissor),K=C.scissorTest}else Z.copy(ut).multiplyScalar(et).floor(),X.copy(Mt).multiplyScalar(et).floor(),K=Ft;if(tt!==0&&($=N),vt.bindFramebuffer(k.FRAMEBUFFER,$)&&vt.drawBuffers(C,$),vt.viewport(Z),vt.scissor(X),vt.setScissorTest(K),Q){const bt=Gt.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+H,bt.__webglTexture,tt)}else if(Et){const bt=H;for(let Ct=0;Ct<C.textures.length;Ct++){const Ot=Gt.get(C.textures[Ct]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ct,Ot.__webglTexture,tt,bt)}}else if(C!==null&&tt!==0){const bt=Gt.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,bt.__webglTexture,tt)}V=-1};function Qd(C){const H=Gt.get(C);return(H.__readFormat!==C.format||H.__readType!==C.type)&&(H.__readFormat=C.format,H.__readType=C.type,H.__formatReadable=ie.textureFormatReadable(C.format),H.__typeReadable=ie.textureTypeReadable(C.type)),H}this.readRenderTargetPixels=function(C,H,tt,$,Q,Et,Dt,bt=0){if(!(C&&C.isWebGLRenderTarget)){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Gt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ct=Ct[Dt],Array.isArray(Ct)&&(Ct=Ct[0])),Ct){vt.bindFramebuffer(k.FRAMEBUFFER,Ct);try{const Ot=C.textures[bt],Kt=Ot.format,ae=Ot.type;C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+bt);const It=Qd(Ot);if(It.__formatReadable===!1){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-$&&tt>=0&&tt<=C.height-Q&&k.readPixels(H,tt,$,Q,xt.convert(Kt),xt.convert(ae),Et)}finally{const Ot=j!==null?Gt.get(j).__webglFramebuffer:null;vt.bindFramebuffer(k.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(C,H,tt,$,Q,Et,Dt,bt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Gt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ct=Ct[Dt],Array.isArray(Ct)&&(Ct=Ct[0])),Ct)if(H>=0&&H<=C.width-$&&tt>=0&&tt<=C.height-Q){vt.bindFramebuffer(k.FRAMEBUFFER,Ct);const Ot=C.textures[bt],Kt=Ot.format,ae=Ot.type;C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+bt);const It=Qd(Ot);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,le),k.bufferData(k.PIXEL_PACK_BUFFER,Et.byteLength,k.STREAM_READ),k.readPixels(H,tt,$,Q,xt.convert(Kt),xt.convert(ae),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const Ne=j!==null?Gt.get(j).__webglFramebuffer:null;vt.bindFramebuffer(k.FRAMEBUFFER,Ne);const ve=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Of(k,ve,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,le),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Et),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(le),k.deleteSync(ve),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,H=null,tt=0){const $=Math.pow(2,-tt),Q=Math.floor(C.image.width*$),Et=Math.floor(C.image.height*$),Dt=H!==null?H.x:0,bt=H!==null?H.y:0;zt.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,tt,0,0,Dt,bt,Q,Et),vt.unbindTexture()},this.copyTextureToTexture=function(C,H,tt=null,$=null,Q=0,Et=0){let Dt,bt,Ct,Ot,Kt,ae,It,le,Ne;const ve=C.isCompressedTexture?C.mipmaps[Et]:C.image;if(tt!==null)Dt=tt.max.x-tt.min.x,bt=tt.max.y-tt.min.y,Ct=tt.isBox3?tt.max.z-tt.min.z:1,Ot=tt.min.x,Kt=tt.min.y,ae=tt.isBox3?tt.min.z:0;else{const de=Math.pow(2,-Q);Dt=Math.floor(ve.width*de),bt=Math.floor(ve.height*de),C.isDataArrayTexture?Ct=ve.depth:C.isData3DTexture?Ct=Math.floor(ve.depth*de):Ct=1,Ot=0,Kt=0,ae=0}$!==null?(It=$.x,le=$.y,Ne=$.z):(It=0,le=0,Ne=0);const _e=xt.convert(H.format),Qe=xt.convert(H.type);let Nt;H.isData3DTexture?(zt.setTexture3D(H,0),Nt=k.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(zt.setTexture2DArray(H,0),Nt=k.TEXTURE_2D_ARRAY):(zt.setTexture2D(H,0),Nt=k.TEXTURE_2D),vt.activeTexture(k.TEXTURE0),vt.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),vt.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),vt.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment);const on=vt.getParameter(k.UNPACK_ROW_LENGTH),me=vt.getParameter(k.UNPACK_IMAGE_HEIGHT),es=vt.getParameter(k.UNPACK_SKIP_PIXELS),tn=vt.getParameter(k.UNPACK_SKIP_ROWS),qo=vt.getParameter(k.UNPACK_SKIP_IMAGES);vt.pixelStorei(k.UNPACK_ROW_LENGTH,ve.width),vt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ve.height),vt.pixelStorei(k.UNPACK_SKIP_PIXELS,Ot),vt.pixelStorei(k.UNPACK_SKIP_ROWS,Kt),vt.pixelStorei(k.UNPACK_SKIP_IMAGES,ae);const Bi=C.isDataArrayTexture||C.isData3DTexture,ns=H.isDataArrayTexture||H.isData3DTexture;if(C.isDepthTexture){const de=Gt.get(C),Ke=Gt.get(H),On=Gt.get(de.__renderTarget),Ee=Gt.get(Ke.__renderTarget);vt.bindFramebuffer(k.READ_FRAMEBUFFER,On.__webglFramebuffer),vt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let We=0;We<Ct;We++)Bi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Gt.get(C).__webglTexture,Q,ae+We),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Gt.get(H).__webglTexture,Et,Ne+We)),k.blitFramebuffer(Ot,Kt,Ot+Dt,Kt+bt,It,le,It+Dt,le+bt,k.DEPTH_BUFFER_BIT,k.NEAREST);vt.bindFramebuffer(k.READ_FRAMEBUFFER,null),vt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||Gt.has(C)){const de=Gt.get(C),Ke=Gt.get(H);vt.bindFramebuffer(k.READ_FRAMEBUFFER,L),vt.bindFramebuffer(k.DRAW_FRAMEBUFFER,F);for(let On=0;On<Ct;On++)Bi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,de.__webglTexture,Q,ae+On):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,de.__webglTexture,Q),ns?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ke.__webglTexture,Et,Ne+On):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ke.__webglTexture,Et),Q!==0?k.blitFramebuffer(Ot,Kt,Ot+Dt,Kt+bt,It,le,It+Dt,le+bt,k.COLOR_BUFFER_BIT,k.NEAREST):ns?k.copyTexSubImage3D(Nt,Et,It,le,Ne+On,Ot,Kt,Dt,bt):k.copyTexSubImage2D(Nt,Et,It,le,Ot,Kt,Dt,bt);vt.bindFramebuffer(k.READ_FRAMEBUFFER,null),vt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ns?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Nt,Et,It,le,Ne,Dt,bt,Ct,_e,Qe,ve.data):H.isCompressedArrayTexture?k.compressedTexSubImage3D(Nt,Et,It,le,Ne,Dt,bt,Ct,_e,ve.data):k.texSubImage3D(Nt,Et,It,le,Ne,Dt,bt,Ct,_e,Qe,ve):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Et,It,le,Dt,bt,_e,Qe,ve.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Et,It,le,ve.width,ve.height,_e,ve.data):k.texSubImage2D(k.TEXTURE_2D,Et,It,le,Dt,bt,_e,Qe,ve);vt.pixelStorei(k.UNPACK_ROW_LENGTH,on),vt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,me),vt.pixelStorei(k.UNPACK_SKIP_PIXELS,es),vt.pixelStorei(k.UNPACK_SKIP_ROWS,tn),vt.pixelStorei(k.UNPACK_SKIP_IMAGES,qo),Et===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&k.generateMipmap(Nt),vt.unbindTexture()},this.initRenderTarget=function(C){Gt.get(C).__webglFramebuffer===void 0&&zt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?zt.setTextureCube(C,0):C.isData3DTexture?zt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?zt.setTexture2DArray(C,0):zt.setTexture2D(C,0),vt.unbindTexture()},this.resetState=function(){I=0,O=0,j=null,vt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}const Cu={type:"change"},Ul={type:"start"},Lu={type:"end"},Ro=new to,Pu=new Hn,y1=Math.cos(70*se.DEG2RAD),Be=new W,an=2*Math.PI,pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fl=1e-6;class b1 extends a0{constructor(t,e=null){super(t,e),this.state=pe.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qn.ROTATE,MIDDLE:Qn.DOLLY,RIGHT:Qn.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Rn,this._lastTargetPosition=new W,this._quat=new Rn().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new So,this._sphericalDelta=new So,this._scale=1,this._panOffset=new W,this._rotateStart=new Ut,this._rotateEnd=new Ut,this._rotateDelta=new Ut,this._panStart=new Ut,this._panEnd=new Ut,this._panDelta=new Ut,this._dollyStart=new Ut,this._dollyEnd=new Ut,this._dollyDelta=new Ut,this._dollyDirection=new W,this._mouse=new Ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=E1.bind(this),this._onPointerDown=w1.bind(this),this._onPointerUp=T1.bind(this),this._onContextMenu=I1.bind(this),this._onMouseWheel=C1.bind(this),this._onKeyDown=L1.bind(this),this._onTouchStart=P1.bind(this),this._onTouchMove=D1.bind(this),this._onMouseDown=A1.bind(this),this._onMouseMove=R1.bind(this),this._interceptControlDown=N1.bind(this),this._interceptControlUp=U1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=pe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cu),this.update(),this.state=pe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Be.copy(e).sub(this.target),Be.applyQuaternion(this._quat),this._spherical.setFromVector3(Be),this.autoRotate&&this.state===pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Be.setFromSpherical(this._spherical),Be.applyQuaternion(this._quatInverse),e.copy(this.target).add(Be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Be.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new W(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ro.origin.copy(this.object.position),Ro.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ro.direction))<y1?this.object.lookAt(this.target):(Pu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ro.intersectPlane(Pu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Fl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fl||this._lastTargetPosition.distanceToSquared(this.target)>Fl?(this.dispatchEvent(Cu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?an/60*this.autoRotateSpeed*t:an/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Be.setFromMatrixColumn(e,0),Be.multiplyScalar(-t),this._panOffset.add(Be)}_panUp(t,e){this.screenSpacePanning===!0?Be.setFromMatrixColumn(e,1):(Be.setFromMatrixColumn(e,0),Be.crossVectors(this.object.up,Be)),Be.multiplyScalar(t),this._panOffset.add(Be)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Be.copy(s).sub(this.target);let r=Be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function w1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function E1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function T1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lu),this.state=pe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function A1(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Qn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=pe.DOLLY;break;case Qn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pe.ROTATE}break;case Qn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pe.PAN}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(Ul)}function R1(i){switch(this.state){case pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function C1(i){this.enabled===!1||this.enableZoom===!1||this.state!==pe.NONE||(i.preventDefault(),this.dispatchEvent(Ul),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Lu))}function L1(i){this.enabled!==!1&&this._handleKeyDown(i)}function P1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1){this.state=pe.NONE;break}this._handleTouchStartRotate(i),this.state=pe.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1){this.state=pe.NONE;break}this._handleTouchStartPan(i),this.state=pe.TOUCH_PAN;break;default:this.state=pe.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=pe.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=pe.TOUCH_DOLLY_ROTATE;break;default:this.state=pe.NONE}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(Ul)}function D1(i){switch(this._trackPointer(i),this.state){case pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=pe.NONE}}function I1(i){this.enabled!==!1&&i.preventDefault()}function N1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function U1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ol=new Hn,Co=new o0,Rs=new Ut,zl=new W;class F1 extends b1{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Qn.PAN,MIDDLE:Qn.DOLLY,RIGHT:Qn.ROTATE},this.touches={ONE:_i.PAN,TWO:_i.DOLLY_ROTATE},this._panWorldStart=new W}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;Ol.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();Rs.x=(t.clientX-n.left)/n.width*2-1,Rs.y=-((t.clientY-n.top)/n.height)*2+1,Co.setFromCamera(Rs,this.object),Co.ray.intersectPlane(Ol,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();Rs.x=(t.clientX-n.left)/n.width*2-1,Rs.y=-((t.clientY-n.top)/n.height)*2+1,Co.setFromCamera(Rs,this.object),Co.ray.intersectPlane(Ol,zl)&&(zl.sub(this._panWorldStart),this._panOffset.copy(zl).negate(),this.update())}}const Lo=new Pt;function U(i){return Lo.set(i),[Lo.r,Lo.g,Lo.b]}function Wt(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function xr(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function De(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class oe{constructor(){Y(this,"pos",[]);Y(this,"nor",[]);Y(this,"col",[]);Y(this,"glo",[]);Y(this,"ox",0);Y(this,"oy",0);Y(this,"oz",0);Y(this,"c",1);Y(this,"s",0)}get vertexCount(){return this.pos.length/3}gradientY(t,e,n,s,r){for(let o=t*3;o<this.pos.length;o+=3){const a=se.clamp((this.pos[o+1]-e)/(n-e),0,1);for(let l=0;l<3;l++)this.col[o+l]=s[l]+(r[l]-s[l])*a}}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,o,a,l,c,d,h=0){const u=this.wx(t,n),f=this.wz(t,n),p=this.oy+e,x=this.wx(s,o),m=this.wz(s,o),g=this.oy+r,_=this.wx(a,c),M=this.wz(a,c),v=this.oy+l,b=x-u,w=g-p,S=m-f,y=_-u,E=v-p,T=M-f;let R=w*T-S*E,P=S*y-b*T,N=b*E-w*y;const L=Math.hypot(R,P,N)||1;R/=L,P/=L,N/=L,this.pos.push(u,p,f,x,g,m,_,v,M),this.nor.push(R,P,N,R,P,N,R,P,N),this.col.push(d[0],d[1],d[2],d[0],d[1],d[2],d[0],d[1],d[2]),this.glo.push(h,h,h)}quad(t,e,n,s,r,o,a,l,c,d,h,u,f,p=0){this.tri(t,e,n,s,r,o,a,l,c,f,p),this.tri(t,e,n,a,l,c,d,h,u,f,p)}box(t,e,n,s,r,o,a,l=void 0,c=null,d=0){this.quad(t,e,o,s,e,o,s,r,o,t,r,o,a,d),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,a,d),this.quad(s,e,o,s,e,n,s,r,n,s,r,o,a,d),this.quad(t,e,n,t,e,o,t,r,o,t,r,n,a,d),l!==null&&this.quad(t,r,o,s,r,o,s,r,n,t,r,n,l??a,d),c&&this.quad(t,e,n,s,e,n,s,e,o,t,e,o,c,d)}cyl(t,e,n,s,r,o,a,l,c=null,d=0){const h=e+o;for(let u=0;u<a;u++){const f=u/a*Math.PI*2,p=(u+1)/a*Math.PI*2,x=Math.cos(f),m=Math.sin(f),g=Math.cos(p),_=Math.sin(p);r>1e-4?(this.quad(t+x*s,e,n+m*s,t+x*r,h,n+m*r,t+g*r,h,n+_*r,t+g*s,e,n+_*s,l,d),c&&this.tri(t,h,n,t+g*r,h,n+_*r,t+x*r,h,n+m*r,c,d)):this.tri(t+x*s,e,n+m*s,t,h,n,t+g*s,e,n+_*s,l,d)}}blob(t,e,n,s,r,o,a,l,c,d,h=0){const u=d??c;for(let f=0;f<l;f++){const p=f/l*Math.PI,x=(f+1)/l*Math.PI,m=Math.cos(p),g=Math.cos(x),_=Math.sin(p),M=Math.sin(x),v=xr(c,u,1-(f+.5)/l);for(let b=0;b<a;b++){const w=b/a*Math.PI*2,S=(b+1)/a*Math.PI*2,y=Math.cos(w),E=Math.sin(w),T=Math.cos(S),R=Math.sin(S),P=t+y*_*s,N=e+m*r,L=n+E*_*o,F=t+T*_*s,I=n+R*_*o,O=t+y*M*s,j=e+g*r,V=n+E*M*o,G=t+T*M*s,Z=n+R*M*o;f>0&&this.tri(P,N,L,F,N,I,G,j,Z,v,h),f<l-1&&this.tri(P,N,L,G,j,Z,O,j,V,v,h)}}}walls(t,e,n,s,r=0){const o=t.length/2,a=_r(t)>0;for(let l=0;l<o;l++){const c=(l+1)%o,d=t[l*2],h=t[l*2+1],u=t[c*2],f=t[c*2+1];a?this.quad(u,e,f,d,e,h,d,n,h,u,n,f,s,r):this.quad(d,e,h,u,e,f,u,n,f,d,n,h,s,r)}}cap(t,e,n,s=0){const r=t.length/2,o=[];for(let l=0;l<r;l++)o.push(new Ut(t[l*2],t[l*2+1]));const a=xo.triangulateShape(o,[]);for(const l of a){const c=o[l[0]],d=o[l[1]],h=o[l[2]];(d.x-c.x)*(h.y-c.y)-(d.y-c.y)*(h.x-c.x)>0?this.tri(c.x,e,c.y,h.x,e,h.y,d.x,e,d.y,n,s):this.tri(c.x,e,c.y,d.x,e,d.y,h.x,e,h.y,n,s)}}build(){const t=new Re;return t.setAttribute("position",new Te(new Float32Array(this.pos),3)),t.setAttribute("normal",new Te(new Float32Array(this.nor),3)),t.setAttribute("color",new Te(new Float32Array(this.col),3)),t.setAttribute("glow",new Te(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function _r(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const Po={value:0};function Cs(i={}){const t=new In({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??Le}),e=new Pt(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=Po,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>"inverloch-model",t}function Mr(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=Po,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.82 * uNight;`)},i.customProgramCacheKey=()=>"inverloch-unlit",i}const O1=8192,ci=256,z1=420,Du=2048,Iu=[-1,1],Nu=`
uniform sampler2D uCloudMap;
uniform vec2 uCloudOffset;
uniform float uCloudCover;
uniform float uCloudFlash;
const float cloudHeight = ${z1.toFixed(1)};

float cloudDensity(vec2 position) {
  float density = texture2D(uCloudMap, position / ${O1.toFixed(1)} - uCloudOffset).r;
  float edge = mix(0.78, 0.29, uCloudCover);
  return smoothstep(edge, edge + 0.13, density) * smoothstep(0.0, 0.08, uCloudCover);
}
`,B1=`
uniform vec3 uCloudSunDir;
uniform float uCloudShadowStrength;

float cloudSunlight(vec3 position) {
  float layerDistance = cloudHeight - position.y;
  if (layerDistance <= 0.0 || uCloudShadowStrength <= 0.0 || uCloudCover <= 0.0) return 1.0;
  vec2 projection = position.xz + layerDistance * uCloudSunDir.xz / max(uCloudSunDir.y, 0.06);
  return 1.0 - uCloudShadowStrength * cloudDensity(projection) * smoothstep(0.0, 70.0, layerDistance);
}
`;function Do(i,t,e){const n=Math.imul(i%e,374761393)^Math.imul(t%e,668265263)^Math.imul(e,1442695041),s=Math.imul(n^n>>>13,1274126177);return((s^s>>>16)>>>0)/4294967295}function Bl(i,t,e){const n=Math.floor(i*e),s=Math.floor(t*e),r=i*e-n,o=t*e-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=se.lerp(Do(n,s,e),Do(n+1,s,e),a),d=se.lerp(Do(n,s+1,e),Do(n+1,s+1,e),a);return se.lerp(c,d,l)}function G1(){const i=new Uint8Array(ci*ci);for(let e=0;e<ci;e++)for(let n=0;n<ci;n++){const s=(n+.5)/ci,r=(e+.5)/ci,o=.67*Bl(s,r,24)+.23*Bl(s,r,48)+.1*Bl(s,r,96);i[e*ci+n]=Math.round(255*o)}const t=new rr(i,ci,ci,Nr);return t.wrapS=t.wrapT=Ks,t.magFilter=qe,t.minFilter=wn,t.generateMipmaps=!0,t.needsUpdate=!0,t}class k1{constructor(){Y(this,"uniforms",{uCloudMap:{value:G1()},uCloudOffset:{value:new Ut},uCloudCover:{value:.38},uCloudFlash:{value:0},uFlashCenter:{value:new Ut}})}update(t){const e=se.euclideanModulo(t,Du)/Du;this.uniforms.uCloudOffset.value.set(Iu[0]*e,Iu[1]*e)}setCover(t){this.uniforms.uCloudCover.value=se.clamp(t,0,1)}setFlash(t){this.uniforms.uCloudFlash.value=se.clamp(t,0,1)}dispose(){this.uniforms.uCloudMap.value.dispose()}}const hi={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},H1=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
  gl_Position = p.xyww;
}`,V1=`
${Nu}
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
}`;class W1{constructor(t,e,n,s){Y(this,"sun",new Yh(16777215,3));Y(this,"hemi",new Gh(16777215,8947848,1));Y(this,"sky");Y(this,"horizon",{value:new Pt});Y(this,"sunDir",new W);Y(this,"cloudShadowStrength",{value:0});Y(this,"skyUniforms");Y(this,"from");Y(this,"to");Y(this,"t",1);Y(this,"mode","day");this.renderer=t,this.water=e,this.from=this.to=hi.day,this.skyUniforms={...s.uniforms,uZenith:{value:new Pt},uHorizon:this.horizon,uBelow:{value:new Pt},uSunDir:{value:new W},uSunColor:{value:new Pt},uSunGlow:{value:1},uNight:{value:0}},this.sky=new te(new wl(1,32,16),new Xe({uniforms:this.skyUniforms,vertexShader:H1,fragmentShader:V1,side:en,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.setShadowSize(n),this.apply(1)}setShadowSize(t){var e;this.renderer.shadowMap.enabled=this.sun.castShadow=t>0,t>0?(this.sun.shadow.mapSize.set(t,t),this.sun.shadow.radius=1.5):((e=this.sun.shadow.map)==null||e.dispose(),this.sun.shadow.map=null,this.sun.position.copy(this.sunDir),this.sun.target.position.set(0,0,0))}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=hi[t],this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=se.clamp(e*.7,90,2400),s=this.sun.shadow,r=s.camera,o=n*2/s.mapSize.x,a=Math.round(t.x/o)*o,l=Math.round(t.z/o)*o,c=n*2.4+300;this.sun.target.position.set(a,0,l),this.sun.position.set(a,0,l).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=se.clamp(o*1.6,.06,1.2))}setSolar(t){const e=(t%1440+1440)%1440,n=6*60,s=20.5*60;let r,o;if(e>=n&&e<=s)o=(e-n)/(s-n),r=Math.sin(Math.PI*o)*70;else{const p=((e<n?e+1440:e)-s)/(1440-(s-n));o=p<.5?1:0,r=-Math.sin(Math.PI*p)*40}const a=se.degToRad(110*(1-2*o)),l=se.degToRad(Math.max(r,5)),c=[Math.sin(a)*Math.cos(l),Math.sin(l),-Math.cos(a)*Math.cos(l)];let d;r>=25?d=hi.day:r>=6?d=Gl(hi.golden,hi.day,(r-6)/19):r>=-6?d=Gl(hi.night,hi.golden,(r+6)/12):d=hi.night;const h=se.clamp((2-r)/6,0,1),u=hi.night.sunDir,f=[c[0]+(u[0]-c[0])*h,c[1]+(u[1]-c[1])*h,c[2]+(u[2]-c[2])*h];this.from=this.to={...d,sunDir:f},this.mode=r>=25?"day":r>=-6?"golden":"night",this.apply(1)}snapshot(){return Gl(this.from,this.to,X1(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.castShadow||this.sun.position.copy(this.sunDir),this.cloudShadowStrength.value=.64*(1-se.smoothstep(e.night,.25,.95)),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night;const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new Pt(e.shallow),.35),Po.value=e.night,this.renderer.toneMappingExposure=e.exposure}}function X1(i){return i*i*(3-2*i)}function Gl(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,o)=>new Pt(r).lerp(new Pt(o),e).getHex(),s=(r,o)=>r+(o-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}const Zn=1.5;class Uu{constructor(t,e,n,s,r,o,a,l,c=[]){Y(this,"nx");Y(this,"nz");Y(this,"y");Y(this,"xMin");Y(this,"zMin");Y(this,"xMax");Y(this,"zMax");Y(this,"dx");Y(this,"dz");Y(this,"cellX");Y(this,"cellZ");if(this.raw=t,this.exposure=e,this.w=n,this.h=s,this.sizeX=r,this.sizeZ=o,this.patches=c,this.cellX=r/n,this.cellZ=o/s,this.nx=Math.floor((n-1)/a)+1,this.nz=Math.floor((s-1)/a)+1,this.dx=this.cellX*a,this.dz=this.cellZ*a,this.xMin=-r/2+this.cellX/2,this.zMin=-o/2+this.cellZ/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=l??new Float32Array(this.nx*this.nz),!l)for(let d=0;d<this.nz;d++)for(let h=0;h<this.nx;h++)this.y[d*this.nx+h]=t[d*a*n+h*a]*Zn}yAt(t,e){for(const n of this.patches)if(t>=n.xMin&&t<=n.xMax&&e>=n.zMin&&e<=n.zMax)return Fu(n,t,e);return this.baseYAt(t,e)}baseYAt(t,e){return Fu(this,t,e)}patchOverlaps(t,e,n,s){return this.patches.some(r=>t<r.xMax&&n>r.xMin&&e<r.zMax&&s>r.zMin)}bilinear(t,e,n){let s=(e+this.sizeX/2)/this.cellX-.5,r=(n+this.sizeZ/2)/this.cellZ-.5;s<0?s=0:s>this.w-1.0001&&(s=this.w-1.0001),r<0?r=0:r>this.h-1.0001&&(r=this.h-1.0001);const o=s|0,a=r|0,l=s-o,c=r-a,d=a*this.w+o;return(t[d]*(1-l)+t[d+1]*l)*(1-c)+(t[d+this.w]*(1-l)+t[d+this.w+1]*l)*c}metresAt(t,e){return this.bilinear(this.raw,t,e)}exposureAt(t,e){return this.bilinear(this.exposure,t,e)}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}}function Fu(i,t,e){let n=(t-i.xMin)/i.dx,s=(e-i.zMin)/i.dz;n<0?n=0:n>i.nx-1&&(n=i.nx-1),s<0?s=0:s>i.nz-1&&(s=i.nz-1);const r=Math.min(n|0,i.nx-2),o=Math.min(s|0,i.nz-2),a=n-r,l=s-o,c=o*i.nx+r,d=i.y[c],h=i.y[c+1],u=i.y[c+i.nx],f=i.y[c+i.nx+1];return a+l<=1?d+(h-d)*a+(u-d)*l:f+(u-f)*(1-a)+(h-f)*(1-l)}const Y1=[{ends:[40013,27439,27602,20489],tie:24,anchors:[[1280,11.8],[1300,10.8],[1320,9.98],[1330,9.81],[1340,9.67],[1350,9.93],[1365,10.17],[1380,10.55],[1400,10.77]]},{ends:[-4743,-403,-2772,-122],tie:12,anchors:[[59,24.62],[74,22.63],[89,19.69],[100,17.7],[110,15.95],[120,14.19],[132,12.07],[144,10.23]]},{ends:[-30214,11968,-40013,21095],tie:25,anchors:[[1080,5.14],[1100,5.2],[1120,5.57],[1135,6.65],[1150,8.61],[1155,9.24],[1165,10.35],[1175,11.65],[1192,15],[1210,18.4],[1235,20.68],[1255,21.63]]},{ends:[-17855,6215,-16707,-2373],tie:8,anchors:[[180,13.65],[192,16],[204,18.6],[220,21.02],[244,23.53]]},{ends:[-28032,6727,-24278,8117],tie:7,anchors:[[8,11.72],[14,11.51],[23,10.28],[33,8.42],[43,6.69],[52,5.53]]},{ends:[-30103,11645,-35027,11244],tie:13,anchors:[[428,5.87],[442,7.08],[457,10.26],[475,14.18],[495,17.64],[510,19.05],[529,20.38]]}],Z1=.015,Ou=1.5;function kl(i){const t=Math.max(0,Math.min(1,i));return t*t*(3-2*t)}function K1(i){const t=i[5];return Y1.find(({ends:e})=>e[0]===t[0]&&e[1]===t[1]&&e[2]===t[t.length-2]&&e[3]===t[t.length-1])}class q1{constructor(t,e){Y(this,"start");Y(this,"end");Y(this,"outer");Y(this,"points",[]);Y(this,"slopes");Y(this,"halfWidth");this.profile=e,this.halfWidth=t[3]/20,this.outer=this.halfWidth+Ou+(t[0]<3?20:12);const{anchors:n,tie:s}=e;this.start=n[0][0]-s,this.end=n[n.length-1][0]+s;const r=n.slice(1).map(([l,c],d)=>(c-n[d][1])/(l-n[d][0]));this.slopes=[r[0]];for(let l=1;l<r.length;l++){const c=r[l-1],d=r[l];this.slopes.push(c*d>0?2*c*d/(c+d):0)}this.slopes.push(r[r.length-1]);const o=t[5];let a=0;for(let l=2;l<o.length;l+=2){const c=o[l-2]/10,d=o[l-1]/10,h=o[l]/10-c,u=o[l+1]/10-d,f=Math.hypot(h,u);if(f&&a+f>=this.start&&a<=this.end){const p=Math.max(this.start,a),x=Math.min(this.end,a+f);for(const m of this.points.length?[x]:[p,x])this.points.push({x:c+h*(m-a)/f,z:d+u*(m-a)/f,s:m})}a+=f}}weight(t){return kl(Math.min(t-this.start,this.end-t)/this.profile.tie)}deckLift(t,e){return e+(.11-e)*this.weight(t)}elevation(t,e){const{anchors:n}=this.profile;let s=0;for(;s+2<n.length&&t>n[s+1][0];)s++;const[r,o]=n[s],[a,l]=n[s+1],c=a-r,d=(t-r)/c;return(d<0?o+(t-r)*this.slopes[s]:d>1?l+(t-a)*this.slopes[s+1]:o+(l-o)*kl(d)+c*d*(1-d)*((1-d)*this.slopes[s]-d*this.slopes[s+1]))-Math.abs(e)*Z1}ground(t,e,n,s,r=0){const o=t.baseYAt(e,n),a=this.weight(s);return o+(this.elevation(s,r)-o)*a}shoulder(t,e,n){let s=this.outer**2,r=0;for(let c=1;c<this.points.length;c++){const d=this.points[c-1],h=this.points[c],u=h.x-d.x,f=h.z-d.z,p=Math.max(0,Math.min(1,((t-d.x)*u+(e-d.z)*f)/(u*u+f*f||1))),x=(t-d.x-p*u)**2+(e-d.z-p*f)**2;x<s&&(s=x,r=d.s+(h.s-d.s)*p)}const o=this.weight(r);if(!o)return n;const a=Math.sqrt(s),l=kl((this.outer-a)/(this.outer-this.halfWidth-Ou));return n+(this.elevation(r,a)-n)*o*l}}function zu(i){const t=K1(i);return t&&new q1(i,t)}function J1(i,t){const e=[];for(const s of t){const r=zu(s);if(!r||r.points.length<2)continue;const o=r.points.map(d=>d.x),a=r.points.map(d=>d.z),l=r.outer,c={i0:Math.max(0,Math.floor((Math.min(...o)-l-i.xMin)/i.dx)),i1:Math.min(i.nx-1,Math.ceil((Math.max(...o)+l-i.xMin)/i.dx)),j0:Math.max(0,Math.floor((Math.min(...a)-l-i.zMin)/i.dz)),j1:Math.min(i.nz-1,Math.ceil((Math.max(...a)+l-i.zMin)/i.dz)),grades:[r]};for(let d=0;d<e.length;){const h=e[d];if(c.i0>=h.i1||h.i0>=c.i1||c.j0>=h.j1||h.j0>=c.j1){d++;continue}c.i0=Math.min(c.i0,h.i0),c.i1=Math.max(c.i1,h.i1),c.j0=Math.min(c.j0,h.j0),c.j1=Math.max(c.j1,h.j1),c.grades.push(...h.grades),e.splice(d,1),d=0}e.push(c)}const n=Math.ceil(Math.max(i.dx,i.dz)/3);return e.map(({i0:s,i1:r,j0:o,j1:a,grades:l})=>{const c=i.xMin+s*i.dx,d=i.zMin+o*i.dz,h=i.xMin+r*i.dx,u=i.zMin+a*i.dz,f=(r-s)*n+1,p=(a-o)*n+1,x=i.dx/n,m=i.dz/n,g=new Float32Array(f*p);for(let _=0;_<p;_++)for(let M=0;M<f;M++){const v=c+M*x,b=d+_*m,w=i.baseYAt(v,b);let S=w;if(M>0&&M<f-1&&_>0&&_<p-1)for(const y of l)S+=y.shoulder(v,b,w)-w;g[_*f+M]=S}return{i0:s,i1:r,j0:o,j1:a,xMin:c,zMin:d,xMax:h,zMax:u,nx:f,nz:p,dx:x,dz:m,y:g}})}const Ls=128;function $1(i,t,e,n,s){const{nx:r,nz:o}=i,a=Math.min(Ls+1,r-t),l=Math.min(Ls+1,o-e),c=new Float32Array(a*l*3),d=new Float32Array(a*l*3),h=new Float32Array(a*l*2);for(let p=e;p<e+l;p++)for(let x=t;x<t+a;x++){const m=(p-e)*a+x-t,g=i.xMin+x*i.dx,_=i.zMin+p*i.dz;c[m*3]=g,c[m*3+1]=i.y[p*r+x],c[m*3+2]=_,h[m*2]=(g+n.sizeX/2)/n.sizeX,h[m*2+1]=1-(_+n.sizeZ/2)/n.sizeZ;const M=i!==n&&(x===0||p===0||x===r-1||p===o-1),v=M?(n.baseYAt(g+n.dx,_)-n.baseYAt(g-n.dx,_))/(2*n.dx):(i.y[p*r+Math.min(x+1,r-1)]-i.y[p*r+Math.max(x-1,0)])/(2*i.dx),b=M?(n.baseYAt(g,_+n.dz)-n.baseYAt(g,_-n.dz))/(2*n.dz):(i.y[Math.min(p+1,o-1)*r+x]-i.y[Math.max(p-1,0)*r+x])/(2*i.dz),w=Math.hypot(v,1,b);d[m*3]=-v/w,d[m*3+1]=1/w,d[m*3+2]=-b/w}const u=new Uint16Array((a-1)*(l-1)*6);let f=0;for(let p=0;p<l-1;p++)for(let x=0;x<a-1;x++){if(s.some(v=>t+x>=v.i0&&t+x<v.i1&&e+p>=v.j0&&e+p<v.j1))continue;const m=p*a+x,g=m+1,_=m+a,M=_+1;u[f++]=m,u[f++]=_,u[f++]=g,u[f++]=g,u[f++]=_,u[f++]=M}return{pos:c,nor:d,uv:h,idx:f===u.length?u:u.slice(0,f)}}function j1(i){const t=[];for(const e of[i,...i.patches])for(let n=0;n<e.nz-1;n+=Ls)for(let s=0;s<e.nx-1;s+=Ls){const r=e===i?i.patches.filter(o=>s<o.i1&&s+Ls>o.i0&&n<o.j1&&n+Ls>o.j0):[];t.push($1(e,s,n,i,r))}return t}const Hl=10,Q1=5,Ps=4,Bu=3;function Io(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Int16Array(e.buffer,0,e.length>>1)}async function t_(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,o=0,a=0,l=0;const c=[];for(;n<t.length;){const x=e.getUint32(n),m=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(m==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),o=t[n+16],a=t[n+17],l=t[n+20];else if(m==="IDAT")c.push(t.subarray(n+8,n+8+x));else if(m==="IEND")break;n+=12+x}if(o!==8||a!==2&&a!==6||l)throw new Error("Unsupported terrain image format");const d=a===2?3:4,h=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),u=new Uint8Array(await new Response(h).arrayBuffer()),f=s*d,p=new Uint8Array(f*r);for(let x=0;x<r;x++){const m=u[x*(f+1)],g=x*(f+1)+1,_=x*f;for(let M=0;M<f;M++){const v=M>=d?p[_+M-d]:0,b=x>0?p[_-f+M]:0,w=M>=d&&x>0?p[_-f+M-d]:0;let S=u[g+M];if(m===1)S+=v;else if(m===2)S+=b;else if(m===3)S+=v+b>>1;else if(m===4){const y=Math.abs(b-w),E=Math.abs(v-w),T=Math.abs(v+b-2*w);S+=y<=E&&y<=T?v:E<=T?b:w}p[_+M]=S&255}}return{width:s,height:r,channels:d,data:p}}async function e_(i,t,e){const[n,s]=await Promise.all([fetch(i.town,{signal:e}).then(u=>{if(!u.ok)throw new Error("Could not load the town data");return u.json()}).then(u=>(t("Streets and buildings"),u)),fetch(i.height,{signal:e}).then(u=>{if(!u.ok)throw new Error("Could not load the terrain");return u.arrayBuffer()}).then(t_).then(u=>(t("Terrain"),u))]);if(e.aborted)throw e.reason;const{meta:r}=n,o=s.width*s.height,a=new Float32Array(o),l=new Float32Array(o),c=s.channels;for(let u=0;u<o;u++)a[u]=(s.data[u*c]<<8|s.data[u*c+1])/r.heightScale-r.heightOffset,l[u]=s.data[u*c+2]/255;const d=new Uu(a,l,r.grid[0],r.grid[1],r.size[0],r.size[1],i.terrainStep),h=J1(d,n.roads);return d.patches.push(...h),{town:{...n,houses:Io(n.houses),cabins:Io(n.cabins),cars:Io(n.cars),trees:Io(n.trees)},heights:a,exposure:l,surface:d.y,terrainPatches:h,terrainTiles:j1(d)}}async function n_(i,t,e,n,s){const r=new Set,o=d=>{s.aborted||r.has(d)||(r.add(d),e(r.size/4,d))};e(0,"Fetching map data");const a={town:new URL(i.town,document.baseURI).href,height:new URL(i.height,document.baseURI).href,terrainStep:t},l=n.run({kind:"world",source:a},()=>e_(a,o,s),s,o),c=new n0().loadAsync(i.ground).then(d=>(o("Ground texture"),d));try{const[d,h]=await Promise.all([l,c]);if(s.aborted)throw s.reason;return h.colorSpace=Fe,h.anisotropy=8,h.generateMipmaps=!0,h.minFilter=wn,o("Building the model"),{...d,ground:h}}catch(d){throw c.then(h=>h.dispose(),()=>{}),d}}const vr=-1617.09,Sr=414.46,Pi=2.6721,Ce=-4.38,ln=1.66,sn=-11.13,rn=-10.87,Un=-1.98,dn=10.93,No=2.72,Vl=4.16,Di=.24,i_=4.615,yr=[Ce,dn,ln,dn,ln,rn,sn,rn,sn,Un,Ce,Un],Gu=Math.cos(Pi),ku=Math.sin(Pi),Ki=(i,t)=>vr+i*Gu+t*ku,qi=(i,t)=>Sr-i*ku+t*Gu;function Hu(i,t,e,n){const s=(i+e)/2,r=(t+n)/2;return[Ki(s,r),qi(s,r),e-i,n-t,Pi]}const Uo=[...Hu(Ce,rn,ln,dn),...Hu(sn,rn,Ce,Un)],Ds=U(13222830),s_=U(10262404),Ii=U(14144967),Ni=U(6712936),Vu=U(3884352),Wu=U(3887959),r_=U(8217937);function Fo(i,t,e,n,s,r){for(let o=e+.32;o<n-.18;o+=.64){const a=o+.036,l=No+.024,c=Vl+.024,d=Wt(Ni,.74);if(t){const[h,u]=s>r?[o,a]:[a,o];i.quad(s,l,u,s,l,h,r,c,h,r,c,u,d)}else{const[h,u]=s>r?[o,a]:[a,o];i.quad(h,l,s,u,l,s,u,c,r,h,c,r,d)}}}function o_(i){const t=Ce-Di,e=ln+Di,n=sn-Di,s=dn+Di,r=rn-Di,o=Un+Di,a=(t+e)/2,l=(r+o)/2,c=No,d=Vl;i.quad(e,c,s,e,c,r,a,d,r,a,d,s,Ni),i.quad(t,c,o,t,c,s,a,d,s,a,d,l,Wt(Ni,1.07)),i.tri(t,c,r,a,d,l,a,d,r,Wt(Ni,1.07)),i.quad(n,c,o,t,c,o,a,d,l,n,d,l,Wt(Ni,1.02)),i.quad(t,c,r,n,c,r,n,d,l,a,d,l,Wt(Ni,.92)),Fo(i,!0,r,s,e,a),Fo(i,!0,o,s,t,a),Fo(i,!1,n,t,o,l),Fo(i,!1,n,t,r,l);for(const[m,g,_,M,v,b]of[[t,c,s,a,d,s],[a,d,s,e,c,s],[e,c,r,a,d,r],[a,d,r,t,c,r],[n,c,r,n,d,l],[n,d,l,n,c,o]])i.quad(m,g-.16,_,M,v-.16,b,M,v,b,m,g,_,Ii);i.box(e-.09,c-.12,r,e+.035,c-.025,s,Ii),i.box(t-.035,c-.12,o,t+.09,c-.025,s,Ii),i.box(n,c-.12,o-.09,t,c-.025,o+.035,Ii),i.box(n,c-.12,r-.035,t,c-.025,r+.09,Ii),i.box(a-.075,d-.037,r,a+.075,d+.028,s,Wt(Ni,.78)),i.box(n,d-.037,l-.075,a,d+.028,l+.075,Wt(Ni,.78));const h=d-c,u=d-h*Di/((e-t)/2),f=d-h*Di/((o-r)/2),p=[Ce,c,ln,c,ln,c+d-u,a,d,Ce,c+d-u],x=(m,g)=>{const _=g?p:[Ce,c+d-u,a,d,ln,c+d-u,ln,c,Ce,c];for(let M=2;M<_.length/2;M++)i.tri(_[0],_[1],m,_[(M-1)*2],_[(M-1)*2+1],m,_[M*2],_[M*2+1],m,Ds)};x(dn,!0),x(rn,!1),i.quad(sn,c,rn,sn,c,Un,sn,c+d-f,Un,sn,c+d-f,rn,Ds),i.tri(sn,c+d-f,rn,sn,c+d-f,Un,sn,d,l,Ds);for(let m=Ce+.1;m<ln-.09;m+=.19){const g=d-Math.abs(m-a)*h/((e-t)/2)-.04;i.quad(m,c,dn+.02,m+.034,c,dn+.02,m+.034,g,dn+.02,m,g,dn+.02,Wt(Ds,.75))}}function Wl(i,t,e,n,s,r,o=!1){for(let h=.24;h<r;h+=.17)i.quad(t,h,s+.014,e,h,s+.014,e,h+.019,s+.014,t,h+.019,s+.014,Wt(Ds,.67));const a=t+n/2,l=Math.min(n*.29,1.17),c=a-l,d=a+l;i.box(c,.87,s,d,2.17,s+.085,Vu);for(let h=0;h<3;h++){const u=(d-c-.14)/3,f=c+.07+h*u,p=f+u-.034,x=s+.087;i.quad(f,.94,x,p,.94,x,p,2.1,x,f,2.1,x,Wt(Wu,.78+h*.11),.3),i.tri(f,2.03,x+.002,p,1.59,x+.002,p,2.04,x+.002,Wt(Wu,1.14))}if(i.box(c-.045,.84,s,d+.045,.92,s+.15,Ii),i.box(c-.045,2.17,s,d+.045,2.245,s+.12,Ii),o){const h=e-1.42;i.box(h,.04,s,h+1.04,2.22,s+.09,Vu),i.box(h+.065,.1,s+.087,h+.975,2.14,s+.115,r_),i.box(h+.77,.98,s+.11,h+.88,1.035,s+.16,Ii)}}function a_(i,t){const e=(f,p)=>t.yAt(Ki(f,p),qi(f,p)),n=[];for(let f=0;f<yr.length;f+=2)n.push(e(yr[f],yr[f+1]));const s=Math.max(...n)+.12,r=(ln-Ce)*(dn-rn),o=(Ce-sn)*(Un-rn),a=e((Ce+ln)/2,(rn+dn)/2),l=e((sn+Ce)/2,(rn+Un)/2),c=(r*a+o*l)/(r+o),d=Math.max(-.18,Math.min(.45,i_-(No+Vl)/2-(s-c))),h=No+d;i.frame(vr,s,Sr,Pi),i.walls(yr,Math.min(...n)-s-.2,.13,s_),i.walls(yr,.13,h,Ds),i.frame(vr,s+d,Sr,Pi),o_(i),i.frame(vr,s,Sr,Pi),Wl(i,Ce,ln,ln-Ce,dn,h),Wl(i,sn,Ce,4.2,Un,h,!0);for(const f of[1.3,5.1,8.4])i.frame(Ki(Ce,f),s,qi(Ce,f),Pi-Math.PI/2),Wl(i,-1.32,1.32,2.64,0,h);const u=De(13);for(const[f,p]of[[-2.94,13.1],[.39,15.7],[-.65,21.4]])for(let x=0;x<5;x++){const m=f+(u()-.5)*.96,g=p+(u()-.5)*1.68,_=.15+u()*.23;i.frame(vr,e(m,g),Sr,Pi),i.blob(m,_*.64,g,_*1.18,_,_*.84,7,4,U(5134386),U(x%3===0?9671258:7241808));for(let M=0;M<4;M++){const v=(u()-.5)*_,b=(u()-.5)*_;i.tri(m+v-.028,.02,g+b,m+v+.028,.02,g+b,m+v*3.2,_*2.4,g+b*2.7,U(8686162))}}return i.frame(),[[Ce,rn,ln,dn],[sn,rn,Ce,Un]].map(([f,p,x,m])=>[Ki(f,p),qi(f,p),Ki(x,p),qi(x,p),Ki(x,m),qi(x,m),Ki(f,m),qi(f,m)])}const Ji=[-1744.02,317.57,-1733.46,317.97,-1503.52,434.33,-1494.98,439.14,-1405.07,484.77],Xl=[{address:"24",centre:[-1701.99,305.1],roof:[-1694.2,305.76,-1703.13,297.4,-1709.77,304.44,-1700.85,312.79],height:5.56,kind:"house"},{address:"22",centre:[-1686.63,316.01],roof:[-1682.95,322.15,-1679.69,314.17,-1690.31,309.86,-1693.57,317.84],height:4.38,kind:"house"},{address:"22",centre:[-1663.52,295.86],roof:[-1662.91,301.89,-1659.09,291.69,-1664.12,289.82,-1667.95,300.03],height:5.18,kind:"secondary"},{address:"20",centre:[-1668.03,323.5],roof:[-1672.26,328.93,-1664.85,329.6,-1663.8,318.06,-1671.21,317.39],height:4,kind:"house"},{address:"18",centre:[-1645.6,335.06],roof:[-1641.76,340.86,-1638.92,333.05,-1649.45,329.25,-1652.29,337.07],height:4.81,kind:"house"},{address:"16",centre:[-1616,330.48],roof:[-1607.06,329.27,-1620.01,322.43,-1624.94,331.69,-1611.99,338.53],height:5.25,kind:"house"},{address:"14",centre:[-1610.04,351.3],roof:[-1606.74,360.93,-1603.37,352.49,-1608.82,350.34,-1605.21,341.3,-1610.26,339.3,-1617.23,356.78],height:4.26,kind:"house"},{address:"12",centre:[-1594.09,360.99],roof:[-1588.05,358.59,-1595.81,354.74,-1600.13,363.38,-1592.37,367.23],height:4.54,kind:"house"},{address:"10",centre:[-1572.46,363.34],roof:[-1570.76,376.84,-1561.58,355.11,-1574.17,349.83,-1583.35,371.57],height:4.45,kind:"house"},{address:"8",centre:[-1556.72,363.65],roof:[-1551.65,367.39,-1553.74,366.39,-1549.17,356.96,-1557.12,353.13,-1564.8,368.98,-1554.76,373.8],height:4.1,kind:"house"},{address:"8",centre:[-1563.95,372.88],roof:[-1559.23,371.36,-1565.87,368.32,-1568.67,374.4,-1562.03,377.44],height:4.12,kind:"secondary"},{address:"6",centre:[-1542.14,379.99],roof:[-1551.03,382.31,-1537.6,387.31,-1533.69,376.91,-1543.52,373.25,-1544.41,375.62,-1548.01,374.28],height:3.72,kind:"house"},{address:"4",centre:[-1529.85,390.46],roof:[-1531.13,388.55,-1536.03,388.7,-1535.85,394.36,-1524.65,394.02,-1524.91,385.65,-1531.21,385.85],height:6.74,kind:"house"},{address:"2",centre:[-1509.94,392.08],roof:[-1508.19,389.1,-1507.02,386.34,-1512.57,384,-1517.08,394.67,-1505.98,399.33,-1502.64,391.43],height:4.92,kind:"house",levels:2},{address:"2B",centre:[-1425.23,448.85],roof:[-1421.59,460.6,-1412.87,448.89,-1428.87,437.1,-1437.58,448.82],height:4.57,kind:"house"},{address:"29",centre:[-1729.27,353.36],roof:[-1736.21,359.75,-1727.91,362.68,-1722.32,346.97,-1730.63,344.05],height:4.65,kind:"house"},{address:"27",centre:[-1712.78,354.08],roof:[-1705.12,350.56,-1718.27,346.57,-1720.66,354.36,-1716.17,355.72,-1717.37,359.63,-1708.71,362.27],height:4.32,kind:"house"},{address:"25",centre:[-1703.96,376.46],roof:[-1701.67,386.2,-1696.78,369.48,-1706.25,366.73,-1711.14,383.45],height:4.21,kind:"house"},{address:"21",centre:[-1665.11,377.39],roof:[-1672.48,381.63,-1662.53,385.48,-1657.73,373.15,-1667.68,369.3],height:3.36,kind:"house"},{address:"17",centre:[-1639.76,395.04],roof:[-1633.19,393.09,-1642.49,388.78,-1646.33,397,-1637.04,401.31],height:4.86,kind:"house"},{address:"15",centre:[-1626.67,406.68],roof:[-1624.06,415.42,-1618.76,400.01,-1622.61,398.7,-1623.4,400.99,-1630,398.74,-1634.51,411.85],height:4.88,kind:"house",rearGlazing:!0},{address:"15",centre:[-1629.65,418.37],roof:[-1626.59,415.38,-1631.01,414.32,-1632.71,421.36,-1628.29,422.41],height:4.69,kind:"secondary"},{address:"7-9",centre:[-1574.55,442.33],roof:[-1566.73,436.97,-1577.92,433.49,-1582.37,447.69,-1571.18,451.17],height:5.03,kind:"house",rearGlazing:!0},{address:"5",centre:[-1559.58,439.93],roof:[-1565.44,444.23,-1557.3,446.82,-1553.71,435.63,-1561.86,433.04],height:5.7,kind:"house",levels:2,rearEntry:!0},{address:"1B",centre:[-1439.22,491.94],roof:[-1448.73,495.12,-1433.72,500.3,-1429.71,488.76,-1444.72,483.58],height:4.63,kind:"house"},{address:"1A",centre:[-1447.24,505.79],roof:[-1441.04,510.74,-1439.57,503.75,-1453.43,500.84,-1454.91,507.83],height:4.5,kind:"house"}],l_=[[-1671.48,279.2,-1694.63,323.85,-1732.03,304.61,-1732.02,304.47,-1677.56,276.05],[-1676.05,333.48,-1694.63,323.85,-1671.48,279.2,-1652.91,288.83],[-1634.33,298.46,-1657.48,343.11,-1676.05,333.48,-1652.91,288.83],[-1638.9,352.74,-1657.48,343.11,-1634.33,298.46,-1615.75,308.1],[-1620.32,362.39,-1638.9,352.74,-1615.75,308.1,-1597.17,317.73,-1608.51,339.6],[-1608.94,368.28,-1620.32,362.39,-1608.51,339.6,-1597.17,317.73,-1581.39,325.91,-1604.53,370.57],[-1598.06,347.27,-1598.91,344.58,-1608.51,339.6,-1597.17,317.73,-1581.39,325.91,-1604.53,370.57,-1608.94,368.28],[-1565.96,333.91,-1589.12,378.55,-1604.53,370.57,-1581.39,325.91],[-1573.84,386.48,-1589.12,378.55,-1565.96,333.91,-1550.68,341.84],[-1535.11,349.91,-1558.27,394.55,-1573.21,386.8,-1573.84,386.48,-1550.68,341.84,-1550.2,342.09],[-1519.68,357.91,-1542.85,402.55,-1558.27,394.55,-1535.11,349.91],[-1527.42,410.56,-1542.85,402.55,-1519.68,357.91,-1504.26,365.92],[-1478.83,379.11,-1510.34,419.41,-1527.42,410.56,-1504.26,365.92],[-1401.78,446.35,-1415.18,468.77,-1442.29,454.72,-1422.86,429.87],[-1714.99,335.99,-1725.28,382.16,-1741.12,373.95,-1735.19,328.74,-1732.09,327.12],[-1713.88,388.08,-1725.28,382.16,-1714.99,335.99,-1697.74,344.94],[-1675.21,356.62,-1696.27,397.21,-1713.88,388.08,-1697.74,344.94],[-1661.66,363.65,-1648.12,370.68,-1669.17,411.27,-1682.72,404.25],[-1648.12,370.68,-1634.59,377.7,-1655.65,418.29,-1669.17,411.27],[-1621.06,384.71,-1642.12,425.3,-1655.65,418.29,-1634.59,377.7],[-1628.59,432.32,-1642.12,425.3,-1621.06,384.71,-1607.54,391.73],[-1594.01,398.75,-1615.07,439.34,-1628.59,432.32,-1607.54,391.73],[-1588.01,453.37,-1601.54,446.36,-1580.48,405.76,-1566.96,412.78,-1553.43,419.79,-1574.48,460.39],[-1574.48,460.39,-1553.43,419.79,-1539.9,426.81,-1546.92,440.34,-1553.93,453.87,-1560.95,467.4],[-1424.09,490.19,-1427.85,502.63,-1464.32,491.61,-1457.62,469.43,-1425.92,485.87],[-1427.85,502.63,-1432.34,517.51,-1468.82,506.5,-1464.32,491.61]],Is=[["23",[-1683.5,379.63,11,25,2.6798],1,2,15789800,15000798,"","t"],["2 Ebor (outbuilding)",[-1540.1,440.05,7.53,5.25,2.5613],1,0,14078146,11313563,"","s"],["2 Ebor",[-1526.07,445.23,16.31,7.93,2.7377],1,0,13617336,9211790,"","o"]],c_=[...Xl.filter(i=>i.kind==="house").map(i=>i.centre),[Uo[0],Uo[1]],[Is[0][1][0],Is[0][1][1]],[Is[2][1][0],Is[2][1][1]]],Xu=[-1592.2,410.8],h_=-1744,u_=-1495;function Yu(i,t,[e,n,s,r]){const o=s-e,a=r-n,l=Math.max(0,Math.min(1,((i-e)*o+(t-n)*a)/(o*o+a*a||1)));return[e+o*l,n+a*l]}function Yl(i,t,e){const[n,s]=Yu(i,t,e);return Math.hypot(i-n,t-s)}function d_(i,t){let e=[Ji[0],Ji[1]];for(let n=0;n+3<Ji.length;n+=2){const s=Yu(i,t,[Ji[n],Ji[n+1],Ji[n+2],Ji[n+3]]);Math.hypot(i-s[0],t-s[1])<Math.hypot(i-e[0],t-e[1])&&(e=s)}return e}function Zu(i){const t=i.filter((n,s)=>s%2===0),e=i.filter((n,s)=>s%2===1);return{poly:i,minX:Math.min(...t),maxX:Math.max(...t),minZ:Math.min(...e),maxZ:Math.max(...e)}}function Ku({poly:i,minX:t,maxX:e,minZ:n,maxZ:s},r,o,a){if(r<t-a||r>e+a||o<n-a||o>s+a)return!1;let l=!1;for(let c=0,d=i.length-2;c<i.length;d=c,c+=2){const h=i[c],u=i[c+1],f=i[d],p=i[d+1];if(a>0&&Yl(r,o,[h,u,f,p])<a)return!0;u>o!=p>o&&r<h+(f-h)*(o-u)/(p-u)&&(l=!l)}return l}const f_=l_.map(Zu),p_=Xl.map(i=>Zu(i.roof));function qu(i,t,e=0){return p_.some(n=>Ku(n,i,t,e))}const Ju=new WeakMap;function $u(i){const t=Ju.get(i);if(t)return t;const e=[],n=[];for(const[r,,,,o,a]of i.roads)if(!(r>4))for(let l=0;l+3<a.length;l+=2){const c=[a[l]/10,a[l+1]/10,a[l+2]/10,a[l+3]/10];if(Math.max(c[0],c[2])<-1864||Math.min(c[0],c[2])>-1375||Math.max(c[1],c[3])<197.6||Math.min(c[1],c[3])>559.1)continue;const d=(c[0]+c[2])/2;(i.names[o]==="Norman Road"&&d>=h_-1&&d<=u_+1?e:n).push(c)}const s=(r,o)=>{if(r<-1790||r>-1355||o<270||o>535)return!1;if(f_.some(l=>Ku(l,r,o,0)))return!0;if(Math.hypot(r-Xu[0],o-Xu[1])<24)return!1;const a=Math.min(...e.map(l=>Yl(r,o,l)));return a<=45&&n.every(l=>a<Yl(r,o,l))};return Ju.set(i,s),s}const m_=[Uo,...Is.map(i=>i[1])];function g_(i,t,e=1.5){if(qu(i,t,e))return!0;for(const n of m_)for(let s=0;s<n.length;s+=5){const[r,o,a,l,c]=n.slice(s,s+5),d=i-r,h=t-o;if(d*d+h*h>400)continue;const u=Math.cos(c),f=Math.sin(c),p=d*u-h*f,x=d*f+h*u;if(Math.abs(p)<a/2+e&&Math.abs(x)<l/2+e)return!0}return!1}const ju=[{wall:13223346,roof:5660254,trim:15724260,boards:"horizontal"},{wall:10319973,roof:11908007,trim:15130317,boards:"horizontal"},{wall:12830396,roof:5330260,trim:15789797,boards:"vertical"},{wall:10849655,roof:7761508,trim:15656920,boards:"horizontal"},{wall:14866372,roof:5593957,trim:5988437,boards:"vertical"},{wall:11450284,roof:12040624,trim:15855074,boards:"horizontal"}],Qu=U(4278855),td=U(3427669),x_=U(7561807),__=U(9538691),M_=U(11183254);function ui([i,t],[e,n,s]){return i*e+t*n+s}function Zl(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],r=i[(n+1)%i.length],o=ui(s,t),a=ui(r,t);if(o<=0&&e.push(s),o<0&&a>0||o>0&&a<0){const l=o/(o-a);e.push([s[0]+(r[0]-s[0])*l,s[1]+(r[1]-s[1])*l])}}return e}function ed(i,t,e,n,s=0){for(let r=1;r+1<t.length;r++){const o=t[0],a=t[r],l=t[r+1],c=(a[0]-o[0])*(l[1]-o[1])-(a[1]-o[1])*(l[0]-o[0]);if(Math.abs(c)<5e-5)continue;const[d,h]=c>0?[l,a]:[a,l];i.tri(o[0],ui(o,e)+s,o[1],d[0],ui(d,e)+s,d[1],h[0],ui(h,e)+s,h[1],n)}}function v_(i,t){const e=i.map(([r,o])=>new Ut(r,o)),n=xo.triangulateShape(e,[]),s=[];for(const[r,o]of t.entries())for(const a of n){let l=a.map(c=>i[c]);for(const c of t)c!==o&&(l=Zl(l,[o[0]-c[0],o[1]-c[1],o[2]-c[2]]));l.length>=3&&s.push({points:l,plane:o,slope:r})}return s}function S_(i,t,e){let n=0,s=0;for(const{points:[r,...o],plane:a}of i)for(let l=1;l<o.length;l++){const c=o[l-1],d=o[l],h=Math.abs((c[0]-r[0])*(d[1]-r[1])-(c[1]-r[1])*(d[0]-r[0])),u=(r[0]+c[0]+d[0])/3,f=(r[1]+c[1]+d[1])/3;n+=h,s+=h*(e+ui([u,f],a)-t(u,f))}return n>0?s/n:0}function y_(i,t,e,n,s){for(const{points:r,plane:o,slope:a}of t){const l=Wt(n,1-a*.042);if(ed(i,r,o,l,e),!s)continue;const c=Math.abs(o[0])>Math.abs(o[1])?1:0,d=Math.min(...r.map(u=>u[c])),h=Math.max(...r.map(u=>u[c]));for(let u=Math.ceil(d/.74)*.74;u<h;u+=.74){const f=c===0?[-1,0,u]:[0,-1,u],p=c===0?[1,0,-u-.035]:[0,1,-u-.035];ed(i,Zl(Zl(r,f),p),o,Wt(l,.76),e+.021)}}}function b_(i,t,e,n,s,r){i.box(t,n,.015,e,s,.11,r),i.box(t+.045,n+.045,.09,e-.045,s-.045,.145,Qu);const o=(t+e)/2;for(const[a,l,c]of[[t+.092,o-.025,1],[o+.025,e-.092,.79]]){const d=n+.09,h=s-.09;i.quad(a,d,.148,l,d,.148,l,h,.148,a,h,.148,Wt(td,c),.28),i.tri(a,h-.035,.15,l,h-.4,.15,l,h-.035,.15,Wt(td,c*1.2))}i.box(t-.06,n-.045,.01,e+.06,n+.02,.2,r)}function w_(i,t){const a=l=>[t(i-.65,l),t(i,l),t(i+.65,l)];for(let l=1;l<=3;l++){const c=.4+(l-1)*.28,d=Math.max(0,.05-Math.min(...a(c)))/l;if(d>.18)continue;const h=[];for(let u=0;u<l;u++){const f=u===0?.01:.4+(u-1)*.28,p=.4+u*.28,x=.05-d*u,m=[...a(f),...a((f+p)/2),...a(p)],g=Math.min(...m);if(Math.max(...m)>x+.015||x-g>.54)break;h.push({back:f,front:p,top:x,bottom:g-.06})}if(h.length===l)return h}}function E_(i,t,e,n,s,r,o,a,l,c){if(t<1.5)return;if(a){const u=Wt(s,.72);if(o==="vertical")for(let f=.19;f<t-.08;f+=.23)i.quad(f,.17,.017,f+.023,.17,.017,f+.023,e-.1,.017,f,e-.1,.017,u);else for(let f=.26;f<e-.05;f+=.18)i.quad(.035,f,.017,t-.035,f,.017,t-.035,f+.018,.017,.035,f+.018,.017,u);i.box(0,-.02,.005,.1,e-.08,.072,r),i.box(t-.1,-.02,.005,t,e-.08,.072,r)}const d=Math.max(1,Math.min(4,Math.floor(t/2.75))),h=c&&t>2.65?w_(t*(d-.5)/d,c):void 0;for(let u=0;u<n;u++)for(let f=0;f<d;f++){const p=t*(f+.5)/d,x=2.65*u;if(h&&u===0&&f===d-1){i.box(p-.55,.02,.015,p+.55,2.18,.14,r),i.box(p-.46,.05,.13,p+.46,2.1,.17,x_),i.box(p+.27,.97,.16,p+.38,1.03,.208,Qu);for(const m of h)i.box(p-.65,m.bottom,m.back,p+.65,m.top,m.front,M_);i.box(p-.68,2.21,0,p+.68,2.29,.48,r)}else{const m=l?Math.min(1.45,t/d*.42):Math.min(.89,t/d*.3);b_(i,p-m,p+m,x+(l?.34:.86),Math.min(e-.18,x+2.1),r)}}}function T_(i,t,e,n,s,r){const o=[];for(let ut=0;ut<e.roof.length;ut+=2)o.push([e.roof[ut],e.roof[ut+1]]);const a=e.centre[0],l=e.centre[1],c=Math.round(a*337+l*191)>>>0,d=De(c),h=ju[Math.floor(d()*ju.length)],u=U(h.wall),f=U(h.trim),p=U(h.roof),x=e.kind==="house",m=o.map(([ut,Mt])=>t.yAt(ut,Mt)),g=Math.max(t.yAt(a,l),...m)+.08,_=_r(n)>0,M=o.map((ut,Mt)=>{const Ft=(Mt+1)%o.length,lt=_?Ft:Mt,ft=_?Mt:Ft,pt=n[lt*2],Yt=n[lt*2+1],Lt=n[ft*2]-pt,ne=n[ft*2+1]-Yt,Zt=Math.hypot(Lt,ne),$t=Math.atan2(-ne,Lt),he=s-(pt+Lt/2),ue=r-(Yt+ne/2),k=(he*Math.sin($t)+ue*Math.cos($t))/Math.max(1,Math.hypot(he,ue));return{x:pt,z:Yt,dx:Lt,dz:ne,heading:$t,length:Zt,facing:k,i:Mt}}),v=M.reduce((ut,Mt)=>{const Ft=lt=>lt.facing*Math.min(5,lt.length);return Ft(Mt)>Ft(ut)?Mt:ut}),w=M.reduce((ut,Mt)=>Mt.length>ut.length?Mt:ut).heading,S=Math.cos(w),y=Math.sin(w),E=o.map(([ut,Mt])=>[(ut-a)*S-(Mt-l)*y,(ut-a)*y+(Mt-l)*S]),T=Math.min(...E.map(ut=>ut[1])),R=Math.max(...E.map(ut=>ut[1])),P=Math.min(...E.map(ut=>ut[0])),N=Math.max(...E.map(ut=>ut[0])),L=Math.max(1,Math.min(N-P,R-T)),F=x?.78+d()*.75:.38,I=F*2/L,O=[[0,I,-I*T],[0,-I,I*R]],j=d(),V=!x||j<.22?[[0,F/(R-T||1),-F*T/(R-T||1)]]:j<.67?O:[...O,[I,0,-I*P],[-I,0,I*N]],G=v_(E,V),Z=S_(G,(ut,Mt)=>t.yAt(a+ut*S+Mt*y,l-ut*y+Mt*S),g),X=e.height===null?x?2.72:2.38:e.height-Z-.16,K=e.levels??(x&&X>=4.55?2:1),nt=Math.max(x?K===2?4.6:2.45:2.2,Math.min(x?K===2?5.9:4.45:4.3,X)),ht=nt+.16;i.frame(0,g,0),i.walls(n,Math.min(...m)-g-.28,.13,__),i.walls(n,.13,nt,u),i.frame(a,g,l,w),y_(i,G,ht,p,x);const et=ut=>ht+Math.min(...V.map(Mt=>ui(ut,Mt))),it=(ut,Mt)=>[(ut-a)*S-(Mt-l)*y,(ut-a)*y+(Mt-l)*S];for(const ut of M){if(ut.length<.06)continue;const{x:Mt,z:Ft,dx:lt,dz:ft,length:pt,heading:Yt}=ut,Lt=it(Mt,Ft),ne=it(Mt+lt,Ft+ft),Zt=V.map(k=>ui(Lt,k)),$t=V.map(k=>ui(ne,k)),he=[0,1];for(let k=0;k<V.length;k++)for(let ee=k+1;ee<V.length;ee++){const Ht=Zt[k]-Zt[ee],ie=$t[k]-$t[ee];Ht*ie<0&&he.push(Ht/(Ht-ie))}he.sort((k,ee)=>k-ee),i.frame(Mt,g,Ft,Yt);const ue=k=>ht+Math.min(...V.map((ee,Ht)=>Zt[Ht]+($t[Ht]-Zt[Ht])*k));for(let k=1;k<he.length;k++){const ee=he[k-1],Ht=he[k];i.quad(ee*pt,nt-.006,0,Ht*pt,nt-.006,0,Ht*pt,ue(Ht),0,ee*pt,ue(ee),0,u)}if(x&&(ut.facing>.25||ut.length>4.5)){const k=ut.i===v.i&&!e.rearEntry?(Ht,ie)=>t.yAt(i.wx(Ht,ie),i.wz(Ht,ie))-g:void 0,ee=!!e.rearGlazing&&ut.facing<-.65;E_(i,pt,nt,K,u,f,h.boards,ut.facing>.2,ee,k)}}i.frame(a,g,l,w);const Rt=_r(e.roof)<0;for(let ut=0;ut<E.length;ut++){const Mt=(ut+1)%E.length,Ft=E[Rt?ut:Mt],lt=E[Rt?Mt:ut],ft=et(Ft),pt=et(lt);i.quad(Ft[0],ft-.145,Ft[1],lt[0],pt-.145,lt[1],lt[0],pt,lt[1],Ft[0],ft,Ft[1],f)}i.frame()}function Kn(i,t,e,n,s){return[i.wx(t,e),i.wz(t,e),i.wx(n,e),i.wz(n,e),i.wx(n,s),i.wz(n,s),i.wx(t,s),i.wz(t,s)]}function qn(i,t,e,n,s,r,o,a){i.box(e-s,r,n-s,e+s,o,n+s,a,null),t==null||t.circles.push([i.wx(e,n),i.wz(e,n),s*Math.SQRT2])}const Oo=[15921126,15261640,13619920,11120043,12110550,11845800,14272936,5988452,11036494,14205088,15327150,16448250].map(U),Ui=[15000277,12435386,8948618,4934726,3487290,6957594,8160360,3555666,11888447,11644323].map(U),Ye=U(3163994),br=[7031348,3098712,9056042,15658730,4151878].map(U),Ns=U(9138002),fn=U(16053230),zo=U(12171184),Bo=U(1846090),nd=[15327951,3099196,2504783,8007210,3816770,13214282,5209226].map(U);function Kl(i,t,e,n,s,r){const o=Wt(r,.9);if(t>=e){const a=t-e;i.quad(-t,n,e,t,n,e,a,n+s,0,-a,n+s,0,r),i.quad(t,n,-e,-t,n,-e,-a,n+s,0,a,n+s,0,r),i.tri(t,n,e,t,n,-e,a,n+s,0,o),i.tri(-t,n,-e,-t,n,e,-a,n+s,0,o)}else{const a=e-t;i.quad(t,n,e,t,n,-e,0,n+s,-a,0,n+s,a,r),i.quad(-t,n,-e,-t,n,e,0,n+s,a,0,n+s,-a,r),i.tri(-t,n,e,t,n,e,0,n+s,a,o),i.tri(t,n,-e,-t,n,-e,0,n+s,-a,o)}}function $i(i,t,e,n,s,r,o,a){const l=t/2,c=e/2;if(t>=e){const h=c*s;return i.quad(-l-r,n-r*s,c+r,l+r,n-r*s,c+r,l+r,n+h,0,-l-r,n+h,0,o),i.quad(l+r,n-r*s,-c-r,-l-r,n-r*s,-c-r,-l-r,n+h,0,l+r,n+h,0,o),i.tri(l,n,c,l,n,-c,l,n+h,0,a),i.tri(-l,n,-c,-l,n,c,-l,n+h,0,a),h}const d=l*s;return i.quad(l+r,n-r*s,c+r,l+r,n-r*s,-c-r,0,n+d,-c-r,0,n+d,c+r,o),i.quad(-l-r,n-r*s,-c-r,-l-r,n-r*s,c+r,0,n+d,c+r,0,n+d,-c-r,o),i.tri(-l,n,c,l,n,c,0,n+d,c,a),i.tri(l,n,-c,-l,n,-c,0,n+d,-c,a),d}function wr(i,t,e,n,s,r,o,a,l){const c=t/2,d=e/2,h=n+s,u=n+r,f=(h-u)/e;i.quad(-c-o,h+o*f,d+o,c+o,h+o*f,d+o,c+o,u-o*f,-d-o,-c-o,u-o*f,-d-o,a),i.quad(-c,n,d,c,n,d,c,h,d,-c,h,d,l),i.quad(c,n,d,c,n,-d,c,u,-d,c,h,d,l),i.quad(-c,n,-d,-c,n,d,-c,h,d,-c,u,-d,l),i.quad(c,n,-d,-c,n,-d,-c,u,-d,c,u,-d,l)}const _n=.05;function Mn(i,t,e,n,s,r,o,a=0){const l=t/2+_n;i.quad(e,s,l,n,s,l,n,r,l,e,r,l,o,a)}function id(i,t,e,n,s,r,o,a=0){const l=-t/2-_n;i.quad(n,s,l,e,s,l,e,r,l,n,r,l,o,a)}function ql(i,t,e,n,s,r,o,a=0){const l=t/2+_n;i.quad(l,s,n,l,s,e,l,r,e,l,r,n,o,a)}function Jl(i,t,e,n,s,r,o,a=0){const l=-t/2-_n;i.quad(l,s,e,l,s,n,l,r,n,l,r,e,o,a)}function Go(i,t,e,n){let s=1/0,r=-1/0;for(const[o,a]of[[-e,-n],[e,-n],[e,n],[-e,n],[0,0]]){const l=i.yAt(t.wx(o,a),t.wz(o,a));l<s&&(s=l),l>r&&(r=l)}return{lo:s,hi:r}}function A_(i,t,e,n,s,r,o,a,l,c,d,h,u){i.frame(e,0,n,o);const f=Go(t,i,s/2,r/2),p=f.hi+.18;i.frame(e,p,n,o);const x=Oo[c%Oo.length],m=Ui[d%Ui.length],g=a===2?5.5:2.85,_=s/2,M=r/2,v=Wt(x,.7);i.box(-_,f.lo-p-.3,-M,_,0,M,v,null),i.box(-_,0,-M,_,g,M,x,l===3?Wt(m,1):null),u.polygons.push(Kn(i,-_,-M,_,M));let b=g;if(l===0){const E=Math.min(_,M)+.5;Kl(i,_+.5,M+.5,g,E*.44,m),b=g+E*.44}else l===1?b=g+$i(i,s,r,g,.5,.4,m,x):l===2?(wr(i,s,r,g,1.35,.25,.5,m,x),Mn(i,r,-_+.5,_-.5,g+.25,g+1.05,Ye,h()<.5?1:0),b=g+1.4):(i.box(-_-.15,g,-M-.15,_+.15,g+.3,M+.15,Wt(x,.92),m),b=g+.3);const w=br[Math.floor(h()*br.length)];for(let y=0;y<a;y++){const E=y*2.75+.85,T=E+1.3,R=Math.max(2,Math.floor(s/3.2)),P=y===0?Math.floor(h()*R):-1;for(let F=0;F<R;F++){const I=-_+(F+.5)/R*s;F===P?Mn(i,r,I-.5,I+.5,0,2.1,w):Mn(i,r,I-.85,I+.85,E,T,Ye,h()<.55?1:0)}const N=Math.max(1,Math.floor(s/3.8));for(let F=0;F<N;F++){const I=-_+(F+.5)/N*s;id(i,r,I-.75,I+.75,E,T,Ye,h()<.5?1:0)}const L=Math.max(1,Math.floor(r/4.2));for(let F=0;F<L;F++){const I=-M+(F+.5)/L*r;ql(i,s,I-.7,I+.7,E,T,Ye,h()<.45?1:0),Jl(i,s,I-.7,I+.7,E,T,Ye,h()<.45?1:0)}}const S=h();if(a===1&&S<.36){const y=_*(.6+h()*.4),E=1.9;i.box(-y,-.12,M,y,.02,M+E,Ns),i.quad(-y-.2,2.3,M+E+.2,y+.2,2.3,M+E+.2,y+.2,2.7,M,-y-.2,2.7,M,Wt(m,.93));const T=Math.max(2,Math.round(y*2/3));for(let R=0;R<=T;R++){const P=-y+R/T*y*2;qn(i,u,P,M+E-.06,.06,0,2.32,fn)}}else if(a===2&&S<.5){const y=_*(.55+h()*.45),E=2;i.box(-y,2.62,M,y,2.78,M+E,zo,Ns,Wt(zo,.8));const T=h()<.5?U(10469580):fn;i.box(-y,2.78,M+E-.05,y,3.75,M+E,T,null),i.box(-y,2.78,M,-y+.05,3.75,M+E,T,null),i.box(y-.05,2.78,M,y,3.75,M+E,T,null);for(const R of[-y+.1,y-.1])qn(i,u,R,M+E-.12,.08,0,2.62,fn);h()<.5&&i.quad(-y-.2,5.05,M+E+.2,y+.2,5.05,M+E+.2,y+.2,5.4,M,-y-.2,5.4,M,Wt(m,.93))}if(h()<.1&&l<=1){const y=(h()-.5)*_,E=(h()-.5)*M*.6;i.box(y-.32,g,E-.32,y+.32,b+.55,E+.32,U(10116936))}if(h()<.24&&l<=1&&R_(i,s,r,g,o,l,h),h()<.15){const y=(h()<.5?-1:1)*(_+1.25),E=-M+1.3;i.cyl(y,f.hi-p,E,1.05,1.05,2.1,8,h()<.5?U(9347975):U(12370625),U(11120814)),u.circles.push([i.wx(y,E),i.wz(y,E),1.05])}}function R_(i,t,e,n,s,r,o){const a=t/2,l=e/2,c=r===0?.5:.4,d=.22,h=.74,u=.09;if(t>=e){const f=l+c,p=r===0?f*.44:l*.5*(1+c/l),x=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?a-l:a)*.7)*(.6+o()*.4),g=Math.cos(s)<0,_=g?1:-1,M=_*f*(1-d),v=_*f*(1-h),b=x+p*d+u,w=x+p*h+u;g?i.quad(-m,b,M,m,b,M,m,w,v,-m,w,v,Bo):i.quad(m,b,M,-m,b,M,-m,w,v,m,w,v,Bo)}else{const f=a+c,p=r===0?f*.44:a*.5*(1+c/a),x=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?l-a:l)*.7)*(.6+o()*.4),g=Math.sin(s)>0,_=g?1:-1,M=_*f*(1-d),v=_*f*(1-h),b=x+p*d+u,w=x+p*h+u;g?i.quad(M,b,m,M,b,-m,v,w,-m,v,w,m,Bo):i.quad(M,b,-m,M,b,m,v,w,m,v,w,-m,Bo)}}const C_=U(9075302);function L_(i,t,e,n,s){const[,r,o,a,l,c,d]=e;let h=-1/0,u=1/0;for(let p=0;p<r.length;p+=5){const[x,m,g,_,M]=r.slice(p,p+5);i.frame(x,0,m,M);const v=Kn(i,-g/2,-_/2,g/2,_/2);n.push(v),s.polygons.push(v);const b=Go(t,i,g/2,_/2);h=Math.max(h,b.hi),u=Math.min(u,b.lo)}const f=h+.18;for(let p=0;p<r.length;p+=5)P_(i,f,u,r.slice(p,p+5),o,a,l,c,p===0?d:"",p===0,s)}function P_(i,t,e,[n,s,r,o,a],l,c,d,h,u,f,p){const x=De(Math.round(n*31+s*17)>>>0);i.frame(n,t,s,a);const m=U(d),g=U(h),_=l===2?5.5:2.85,M=r/2,v=o/2;if(i.box(-M,e-t-.3,-v,M,0,v,Wt(m,.7),null),i.box(-M,0,-v,M,_,v,m,c===3?g:null),c===0){const E=Math.min(M,v)+.5;Kl(i,M+.5,v+.5,_,E*.44,g)}else c===1?$i(i,r,o,_,.5,.4,g,m):c===2?wr(i,r,o,_,1.1,.2,.5,g,m):i.box(-M-.15,_,-v-.15,M+.15,_+.3,v+.15,Wt(m,.92),g);if(r<5||o<3)return;const b=u.includes("g")?Math.min(4.8,r*.42):0;b&&Mn(i,o,M-.4-b,M-.4,0,2.2,C_);const w=-M,S=M-(b?b+.8:0);for(let y=0;y<l;y++){const E=y*2.75+.85,T=E+1.3,R=Math.max(2,Math.floor((S-w)/3.2));for(let L=0;L<R;L++){const F=w+(L+.5)/R*(S-w);f&&y===0&&L===R-1?Mn(i,o,F-.5,F+.5,0,2.1,br[0]):Mn(i,o,F-.85,F+.85,E,T,Ye,x()<.5?1:0)}const P=Math.max(1,Math.floor(r/3.8));for(let L=0;L<P;L++){const F=-M+(L+.5)/P*r;id(i,o,F-.75,F+.75,E,T,Ye,x()<.5?1:0)}const N=Math.max(1,Math.floor(o/4.2));for(let L=0;L<N;L++){const F=-v+(L+.5)/N*o;ql(i,r,F-.7,F+.7,E,T,Ye,x()<.45?1:0),Jl(i,r,F-.7,F+.7,E,T,Ye,x()<.45?1:0)}}if(u.includes("v")){const y=Math.min(M-.3,(S-w)/2),E=(w+S)/2,T=2.2;i.box(E-y,-.12,v,E+y,.02,v+T,Ns),i.quad(E-y-.2,2.3,v+T+.2,E+y+.2,2.3,v+T+.2,E+y+.2,2.7,v,E-y-.2,2.7,v,Wt(g,.93));const R=Math.max(2,Math.round(y*2/3));for(let P=0;P<=R;P++){const N=E-y+P/R*y*2;qn(i,p,N,v+T-.06,.06,0,2.32,fn)}}if(u.includes("b")&&l===2){const y=M*.8,E=1.8;i.box(-y,2.62,v,y,2.78,v+E,zo,Ns,Wt(zo,.8)),i.box(-y,2.78,v+E-.05,y,3.75,v+E,fn,null),i.box(-y,2.78,v,-y+.05,3.75,v+E,fn,null),i.box(y-.05,2.78,v,y,3.75,v+E,fn,null);for(const T of[-y+.1,y-.1])qn(i,p,T,v+E-.12,.08,0,2.62,fn)}}function D_(i,t,e,n,s,r,o,a,l,c,d){i.frame(e,0,n,o);const h=Go(t,i,s/2,r/2);i.frame(e,h.hi+.05,n,o);const u=[U(14275778),U(9083526),U(12041145),U(7305842)][l%4],f=Ui[c%Ui.length],p=2.4,x=s/2,m=r/2;i.box(-x,h.lo-h.hi-.3,-m,x,p,m,u,null),d.polygons.push(Kn(i,-x,-m,x,m)),a===1?$i(i,s,r,p,.32,.2,f,u):wr(i,s,r,p,.6,.1,.2,f,u),Mn(i,r,-x*.72,x*.72,0,2.05,Wt(u,1.12))}const ko=[14243375,3112880,6266970,14725690,9134e3,4170656,14252591,4878261].map(U);function I_(i,t,e,n,s,r,o,a,l){const c={0:[8,4.2],1:[6.4,4.8],2:[3.6,3.6],3:[10.5,7.5]},[d,h]=c[r];i.frame(e,0,n,s);const u=Go(t,i,d/2,h/2);i.frame(e,u.hi+.05,n,s);const f=u.lo-u.hi-.3;if(r===0){const p=[U(15129798),U(12175305),U(13219994),U(10465434)][o%4],x=Ui[(o*3+1)%Ui.length];i.box(-4,f,-2.1,4,.35,2.1,Wt(p,.6),null),i.box(-4,.35,-2.1,4,2.75,2.1,p,null),l.polygons.push(Kn(i,-4,-2.1,4,2.1)),$i(i,8,4.2,2.75,.42,.35,x,p),i.box(-3.2,.2,2.1,1.2,.35,3.7,Ns),i.box(-3.2,.35,3.62,1.2,1.25,3.7,fn,null),l.polygons.push(Kn(i,-3.2,3.62,1.2,3.7)),Mn(i,4.2,-2.8,-1.2,1.2,2.3,Ye,a()<.5?1:0),Mn(i,4.2,-.4,.5,.35,2.4,br[o%br.length]),Mn(i,4.2,1.4,3.2,1.2,2.3,Ye,a()<.5?1:0)}else if(r===1){const p=ko[o%ko.length];i.box(-2.9,.45,-2.3,2.9,2.55,-.1,fn,U(15263972),U(9079432)),i.box(-2.92,1.05,-2.32,2.92,1.3,-.08,p,null),i.box(-1.4,0,-2.2,-.8,.5,-.2,U(2763308)),i.box(.8,0,-2.2,1.4,.5,-.2,U(2763308)),Mn(i,-.2,-2.2,-1,1.45,2.15,Ye,a()<.4?1:0),i.box(-2.6,0,-.1,2.6,2,2.3,xr(p,fn,.72),null),l.polygons.push(Kn(i,-2.9,-2.3,2.9,-.1),Kn(i,-2.6,-.1,2.6,2.3)),i.quad(-2.7,2,2.4,2.7,2,2.4,2.7,2.5,-.1,-2.7,2.5,-.1,xr(p,fn,.55))}else if(r===2){const p=ko[o%ko.length],x=1.75,m=6,g=[];i.blob(0,0,0,x,1.55,x,m,4,Wt(p,.85),p);for(let _=0;_<m;_++){const M=_/m*Math.PI*2,v=x*Math.cos(M),b=x*Math.sin(M);g.push(i.wx(v,b),i.wz(v,b))}l.polygons.push(g)}else{const p=U(14209732),x=U(5922659);i.box(-5.25,f,-3.75,5.25,3,3.75,p,null),l.polygons.push(Kn(i,-5.25,-3.75,5.25,3.75)),wr(i,10.5,7.5,3,1.5,.2,.7,x,U(9072466)),Mn(i,7.5,-4.4,4.4,.3,2.6,Ye,a()<.6?1:0),i.box(-5.25,.05,3.75,5.25,.25,6.2,Ns),ql(i,10.5,-2,2,.9,2.3,Ye,a()<.5?1:0),Jl(i,10.5,-2,2,.9,2.3,Ye,a()<.5?1:0)}}function N_(i){const t=i.length/2;let e={cx:0,cz:0,w:0,d:0,heading:0,area:1/0};for(let n=0;n<t;n++){const s=(n+1)%t;let r=i[s*2]-i[n*2],o=i[s*2+1]-i[n*2+1];const a=Math.hypot(r,o);if(a<.5)continue;r/=a,o/=a;let l=1/0,c=-1/0,d=1/0,h=-1/0;for(let f=0;f<t;f++){const p=i[f*2],x=i[f*2+1],m=p*r+x*o,g=-p*o+x*r;m<l&&(l=m),m>c&&(c=m),g<d&&(d=g),g>h&&(h=g)}const u=(c-l)*(h-d);if(u<e.area){const f=(l+c)/2,p=(d+h)/2;e={cx:f*r-p*o,cz:f*o+p*r,w:c-l,d:h-d,heading:Math.atan2(-o,r),area:u}}}return e}function sd(i,t){const e=i.length/2,n=_r(i)>0?1:-1,s=[];for(let r=0;r<e;r++){const o=(r+e-1)%e,a=(r+1)%e;let l=i[r*2]-i[o*2],c=i[r*2+1]-i[o*2+1],d=i[a*2]-i[r*2],h=i[a*2+1]-i[r*2+1];const u=Math.hypot(l,c)||1,f=Math.hypot(d,h)||1;l/=u,c/=u,d/=f,h/=f;const p=-c*n,x=l*n,m=-h*n,g=d*n;let _=p+m,M=x+g;const v=Math.hypot(_,M)||1;_/=v,M/=v;const b=t/Math.max(.4,_*p+M*x);s.push(i[r*2]+_*b,i[r*2+1]+M*b)}return s}const U_=new Set(["house","detached","residential","terrace","yes;house","semidetached_house","bungalow"]),F_=new Set(["shed","garage","garages","toilets","hut"]);function rd(i,t,e,n,s,r,o){const a=e.p.map(T=>T/10),l=a.length/2;let c=0,d=0,h=1/0,u=-1/0;for(let T=0;T<l;T++){c+=a[T*2],d+=a[T*2+1];const R=t.yAt(a[T*2],a[T*2+1]);R<h&&(h=R),R>u&&(u=R)}c/=l,d/=l;const f=Math.abs(_r(a)),p=N_(a),x=f/(p.w*p.d||1),m=u+.15,g=Math.hypot(c-r[0],d-r[1])<420,_=e.k==="retail"||e.k==="commercial"||!!e.u||!!e.n||e.k==="yes"&&(f>300||g&&f>110),M=!_&&(U_.has(e.k)||e.k==="yes"&&f<=300),v=F_.has(e.k)||f<28;let b;e.l?b=e.l*3.1:e.k==="roof"?b=3:e.k==="hangar"?b=6.5:e.k==="church"?b=5:v?b=2.5:M?b=s()<.2?5.5:2.9:b=f>1200?7:f>500?5.6:4.3+s()*.8;const w={name:e.n,use:e.u,kind:e.k,poly:a,cx:c,cz:d,area:f,obb:p,floorY:m,wallH:b,topY:m+b};let S=26;for(let T=0;T<l;T++){const R=(T+1)%l,P=a[T*2],N=a[T*2+1],L=a[R*2],F=a[R*2+1],I=Math.hypot(L-P,F-N);if(I<4.5)continue;const O=(P+L)/2,j=(N+F)/2,V=n.nearest(O,j,S);if(!V)continue;let G=-(F-N)/I,Z=(L-P)/I;if(G*(O-c)+Z*(j-d)<0&&(G=-G,Z=-Z),(V.px-O)*G+(V.pz-j)*Z<V.dist*.5)continue;S=V.dist;const X=Math.atan2(G,Z),K=(L-P)*Math.cos(X)-(F-N)*Math.sin(X);w.street={x:K>0?P:L,z:K>0?N:F,heading:X,length:I}}if(i.frame(0,m,0,0),e.k==="roof"){const T=U(12172728);i.walls(a,b-.25,b,T),i.cap(a,b,T);for(let R=0;R<l;R++)qn(i,o,a[R*2],a[R*2+1],.12,h-m,b-.25,U(6974832));return w}const y=_?[U(15328470),U(14275266),U(13620178),U(15128768),U(12568777),U(15789540),U(13220258)][Math.floor(s()*7)]:Oo[Math.floor(s()*Oo.length)],E=_&&f>300?[U(13225160),U(11777972),U(14211280),U(10133405)][Math.floor(s()*4)]:Ui[Math.floor(s()*Ui.length)];if(i.walls(a,h-m-.3,b,y),o==null||o.polygons.push(a),e.k==="church"){i.frame(p.cx,m,p.cz,p.heading);const T=$i(i,p.w,p.d,b,1.15,.3,U(5922659),y);w.topY=m+b+T}else if((M||v||e.k==="hangar")&&x>.8&&l<=8)if(i.frame(p.cx,m,p.cz,p.heading),e.k==="hangar")w.topY=m+b+$i(i,p.w,p.d,b,.3,.3,U(12172728),y);else if(v)wr(i,p.w,p.d,b,.5,.1,.2,E,y);else if(s()<.55){const T=Math.min(p.w,p.d)/2+.45;Kl(i,p.w/2+.45,p.d/2+.45,b,T*.44,E),w.topY=m+b+T*.44}else w.topY=m+b+$i(i,p.w,p.d,b,.5,.4,E,y);else if(f<420&&!_){const T=sd(a,Math.min(2.2,Math.sqrt(f)*.18)),R=1.15;for(let P=0;P<l;P++){const N=(P+1)%l;i.quad(a[P*2],b,a[P*2+1],a[N*2],b,a[N*2+1],T[N*2],b+R,T[N*2+1],T[P*2],b+R,T[P*2+1],E)}i.cap(T,b+R,Wt(E,1.05)),w.topY=m+b+R}else{i.cap(a,b-.05,E),i.walls(a,b,b+.45,Wt(y,.96)),w.topY=m+b+.45;const T=Math.min(6,Math.floor(f/220));for(let R=0;R<T;R++){const P=(s()-.5)*p.w*.5,N=(s()-.5)*p.d*.5,L=Math.cos(p.heading),F=Math.sin(p.heading),I=p.cx+P*L+N*F,O=p.cz-P*F+N*L;i.box(I-1.1,b,O-.8,I+1.1,b+.9,O+.8,U(11120304))}}if(!v&&e.k!=="hangar"){const T=Math.max(1,Math.round(b/3));for(let R=0;R<l;R++){const P=(R+1)%l,N=a[R*2],L=a[R*2+1],F=a[P*2],I=a[P*2+1],O=Math.hypot(F-N,I-L);if(O<3.2)continue;let j=-(I-L)/O,V=(F-N)/O;j*((N+F)/2-c)+V*((L+I)/2-d)<0&&(j=-j,V=-V);const G=Math.atan2(j,V),Z=(F-N)*Math.cos(G)-(I-L)*Math.sin(G);i.frame(Z>0?N:F,m,Z>0?L:I,G);const X=Math.floor(O/(_?4.2:3.4));for(let K=0;K<T;K++){const z=K*3+.9;if(!(_&&K===0&&w.street&&Math.abs(G-w.street.heading)<.01))for(let q=0;q<X;q++){const nt=(q+.5)/X*O;i.quad(nt-.8,z,_n,nt+.8,z,_n,nt+.8,z+1.3,_n,nt-.8,z+1.3,_n,Ye,s()<.5?1:0)}}}}if(_&&w.street&&!e.k.includes("church")&&f>60){const T=w.street;i.frame(T.x,m,T.z,T.heading);const R=nd[Math.floor(s()*nd.length)];if(i.quad(.5,.35,_n,T.length-.5,.35,_n,T.length-.5,2.7,_n,.5,2.7,_n,Ye,.9),g&&T.length>6&&b<9){i.box(.2,3,0,T.length-.2,3.16,2.7,R,Wt(R,.9),Wt(R,.75)),i.box(.2,2.75,2.62,T.length-.2,3.3,2.7,xr(R,fn,.25),null);const P=Math.max(1,Math.round(T.length/4.5));for(let N=0;N<=P;N++){const L=.35+N/P*(T.length-.7);qn(i,o,L,2.56,.06,0,3,U(4869456))}}}return i.frame(),w}function O_(i,t,e,n,s=()=>!1){const r=new $e;r.name="buildings";const o=Cs(),a=900,l=new Map,c=(w,S)=>{const y=`${Math.floor(w/a)}:${Math.floor(S/a)}`;let E=l.get(y);return E||l.set(y,E=new oe),E},d=i.meta,h=[(145.7285-d.origin[0])*d.metresPerDegree[0],-(-38.63385-d.origin[1])*d.metresPerDegree[1]],u=De(3996),f=[],p={polygons:[],circles:[]};for(const w of i.buildings){let S=0,y=0;for(let E=0;E<w.p.length;E+=2)S+=w.p[E],y+=w.p[E+1];if(S/=w.p.length*5,y/=w.p.length*5,!(s(S,y)||qu(S,y))){if(n.has(w.n)){const E=new oe,T=rd(E,t,w,e,De(1),h);T.custom=!0,f.push(T);continue}f.push(rd(c(S,y),t,w,e,u,h,p))}}const x=i.houses,m=$u(i);for(let w=0;w<x.length;w+=Hl){const S=x[w]/4,y=x[w+1]/4,E=x[w+2]/10,T=x[w+3]/10,R=x[w+4]/10*(Math.PI/180),P=De(w*7919+17);s(S,y)||m(S,y)||(x[w+5]===1?D_(c(S,y),t,S,y,E,T,R,x[w+7],x[w+8],x[w+9],p):A_(c(S,y),t,S,y,E,T,R,x[w+6],x[w+7],x[w+8],x[w+9],P,p))}const g=i.cabins;for(let w=0;w<g.length;w+=Q1){const S=g[w]/4,y=g[w+1]/4;s(S,y)||I_(c(S,y),t,S,y,g[w+2]/10*(Math.PI/180),g[w+3],g[w+4],De(w*31+5),p)}const _=[];for(const w of Is){const[S,y]=w[1];s(S,y)||L_(c(S,y),t,w,_,p)}const[M,v]=Uo;if(!s(M,v)){const w=a_(c(M,v),t);_.push(...w),p.polygons.push(...w)}for(const w of Xl){const[S,y]=w.centre;if(s(S,y))continue;const[E,T]=d_(S,y),R=sd(w.roof,.18);T_(c(S,y),t,w,R,E,T),_.push(R),p.polygons.push(R)}let b=0;for(const w of l.values()){w.frame(),b+=w.vertexCount/3;const S=new te(w.build(),o);S.castShadow=!0,S.receiveShadow=!0,r.add(S)}return{group:r,footprints:f,designedWalls:_,blockers:p,triangles:b}}class z_{constructor(t){Y(this,"targetFps");Y(this,"deadline",-1/0);Y(this,"lastDraw");this.targetFps=t===30?30:60}get target(){return this.targetFps}setTarget(t){const e=t===30?30:60;return e===this.targetFps?!1:(this.targetFps=e,this.reset(),!0)}reset(){this.deadline=-1/0,this.lastDraw=void 0}takeFrame(t){if(t+1<this.deadline)return;const e=1e3/this.targetFps,n=this.deadline+e;this.deadline=n<=t?t+e:n;const s=this.lastDraw===void 0?0:(t-this.lastDraw)/1e3;return this.lastDraw=t,s}}const B_=.1,G_=180,k_=425,H_=650,V_=360,W_=480,X_=1.8,Y_=450;function od(i,t,e){const n=Math.max(i.x-t,0,t-i.x-i.size),s=Math.max(i.z-e,0,e-i.z-i.size);return Math.hypot(n,s)}function ad(i){"close"in i&&i.close()}function Er(i){i.texture.dispose(),ad(i.image)}function Z_(i,t){return new Promise((e,n)=>{if(t.aborted){n(t.reason);return}const s=new Image;s.crossOrigin="anonymous";const r=()=>{s.onload=s.onerror=null,t.removeEventListener("abort",o)},o=()=>{r(),s.removeAttribute("src"),n(t.reason)};s.onload=()=>{r(),e(s)},s.onerror=()=>{r(),n(new Error("Could not load ground detail"))},t.addEventListener("abort",o,{once:!0}),s.src=i})}class K_{constructor(t,e,n,s,r,o){Y(this,"patches");Y(this,"manifest");Y(this,"manifestRetryAt",0);Y(this,"load");Y(this,"ready");Y(this,"residents");Y(this,"previous");Y(this,"vx",0);Y(this,"vz",0);Y(this,"closed",!1);this.urls=t,this.small=e,this.detail=n,this.anisotropy=s,this.worker=r,this.markDirty=o,this.residents=n.maps.map(()=>{})}setSmall(t){if(t!==this.small){this.small=t,this.cancelLoad(),this.ready&&Er(this.ready),this.ready=void 0;for(const e of this.patches??[])e.failures=e.retryAt=0}}url(t){return this.small?t.smallUrl:t.fullUrl}update(t,e,n,s,r){if(!this.urls.detail||this.closed)return;const o=this.previous,a=o?t-o.time:0,l=o&&Math.hypot(e-o.x,n-o.y,s-o.z)>G_;if(o&&!l&&a<B_)return;if(this.previous={time:t,x:e,y:n,z:s},!o||l||a>1)this.vx=this.vz=0;else{const h=Math.min(1,a*4);this.vx+=((e-o.x)/a-this.vx)*h,this.vz+=((s-o.z)/a-this.vz)*h}if(!this.patches){!this.manifest&&t>=this.manifestRetryAt&&this.loadManifest(this.urls.detail);return}const c=Math.min(X_,Y_/Math.max(1,Math.hypot(this.vx,this.vz))),d=this.patches.map(h=>{const u=h.slot!==-1,f=Math.min(od(h,e,s),od(h,e+this.vx*c,s+this.vz*c)+70);return{patch:h,score:f,present:u}}).filter(({score:h,present:u})=>r<=(u?W_:V_)&&h<=(u?H_:k_)).sort((h,u)=>h.score-u.score).slice(0,this.residents.length).map(({patch:h})=>h);for(const h of this.residents)h&&!d.includes(h.patch)&&this.evict(h);if(this.load&&!d.includes(this.load.patch)&&this.cancelLoad(),this.ready&&!d.includes(this.ready.patch)&&(Er(this.ready),this.ready=void 0),!this.load&&!this.ready){const h=d.find(u=>{var f;return((f=this.residents[u.slot])==null?void 0:f.url)!==this.url(u)&&t>=u.retryAt});h&&this.start(h)}}applyReady(){if(!this.ready)return;const t=this.ready.patch.slot>=0?this.ready.patch.slot:this.residents.indexOf(void 0);if(t<0)return;const e=this.ready;this.ready=void 0;const n=this.residents[t];n&&Er(n),this.residents[t]=e;const{patch:s,texture:r}=e;s.slot=t,this.detail.maps[t].value=r,this.detail.rects[t].value.set(s.x,s.z,1/s.size,1)}dispose(){var t;if(!this.closed){this.closed=!0,(t=this.manifest)==null||t.abort(),this.cancelLoad(),this.ready&&Er(this.ready),this.ready=void 0;for(const e of this.residents)e&&this.evict(e);this.detail.fallback.dispose()}}async loadManifest(t){var n;const e=this.manifest=new AbortController;try{const s=new URL(t,document.baseURI),r=await fetch(s,{signal:e.signal});if(r.status===404){this.patches=[];return}if(!r.ok)throw new Error("Could not load the ground detail list");const{patches:o}=await r.json();if(e.signal.aborted)return;this.patches=(Array.isArray(o)?o:[]).flatMap(a=>{if(!a||!Number.isFinite(a.x)||!Number.isFinite(a.z)||!(a.size>0)||!Number.isFinite(a.size))return[];if(typeof a.file!="string"||!a.file)return[];const l=c=>{var d;return(d=this.urls.detailFiles)!=null&&d[c]?new URL(this.urls.detailFiles[c],document.baseURI).href:new URL(c,s).href};try{return[{x:a.x,z:a.z,size:a.size,fullUrl:l(a.file),smallUrl:l(a.lo||a.file),slot:-1,failures:0,retryAt:0}]}catch{return[]}})}catch{e.signal.aborted||(this.manifestRetryAt=(((n=this.previous)==null?void 0:n.time)??0)+20)}finally{this.manifest=void 0}}start(t){const e=this.url(t),n=new AbortController,s=this.load={patch:t,controller:n},{signal:r}=n;this.worker.run({kind:"detail",url:e},()=>Z_(e,r),r).then(o=>{if(this.load!==s){ad(o);return}this.load=void 0,t.failures=0,t.retryAt=0;const a=new Ae(o);a.flipY=!("close"in o),a.colorSpace=Fe,a.anisotropy=this.anisotropy,a.generateMipmaps=!0,a.minFilter=wn,a.needsUpdate=!0,this.ready={patch:t,url:e,texture:a,image:o},this.markDirty()},()=>{var o;this.load===s&&(this.load=void 0,t.failures++,t.retryAt=(((o=this.previous)==null?void 0:o.time)??0)+Math.min(30,2**t.failures))})}cancelLoad(){const t=this.load;this.load=void 0,t==null||t.controller.abort()}evict(t){const e=t.patch.slot;this.detail.maps[e].value=this.detail.fallback,this.detail.rects[e].value.w=0,this.residents[e]=void 0,t.patch.slot=-1,Er(t),this.markDirty()}}class q_{constructor(t,e,n){Y(this,"items",[]);Y(this,"v",new W);Y(this,"visible",!0);Y(this,"obstacles",[]);this.layer=t;for(const s of[...e].sort((r,o)=>r.priority-o.priority)){const r=document.createElement("button");r.type="button",r.tabIndex=-1,r.className=`inv-label inv-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",r.addEventListener("click",()=>n(s.id)),t.appendChild(r),this.items.push({place:s,el:r,w:0,h:0,shown:!1})}}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const o of this.items){o.w||(o.w=o.el.offsetWidth,o.h=o.el.offsetHeight);const a=o.place;this.v.set(a.x,a.y,a.z);const l=this.v.distanceTo(t.position);this.v.project(t);let c=this.v.z<1&&this.v.z>-1&&l<(a.maxDist??1/0)&&l<s;const d=(this.v.x*.5+.5)*e,h=(-this.v.y*.5+.5)*n,u=d-o.w/2,f=h-o.h,p=d+o.w/2,x=h;if(c&&(p<0||u>e||x<0||f>n)&&(c=!1),c){for(const m of r)if(u<m[2]+6&&p>m[0]-6&&f<m[3]+4&&x>m[1]-4){c=!1;break}}c&&(r.push([u,f,p,x]),o.el.style.transform=`translate3d(${Math.round(u)}px, ${Math.round(f)}px, 0)`),c!==o.shown&&(o.el.style.visibility=c?"visible":"hidden",o.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}const J_=[{id:"town",name:"A'Beckett Street",kind:"landmark",lat:-38.63372,lon:145.7283,blurb:"Inverloch's main street: bakeries, fish and chips, cafes and shops, a short walk from the inlet.",view:[380,58,-28],priority:1,lift:26},{id:"jetty",name:"Inverloch Jetty",kind:"landmark",lat:-38.63591,lon:145.73413,blurb:"Timber jetty reaching into Anderson Inlet, with the boat ramp alongside. A favourite for fishing and an evening walk.",view:[190,63,32],priority:1,lift:16},{id:"surf",name:"Surf Beach & Life Saving Club",kind:"landmark",lat:-38.64634,lon:145.70199,blurb:"Ocean beach facing Bass Strait, watched over by the Inverloch Surf Life Saving Club on the dune.",view:[330,62,-32],priority:1,lift:20},{id:"inlet",name:"Anderson Inlet",kind:"water",lat:-38.6412,lon:145.7445,blurb:"A shallow tidal estuary where the Tarwin River meets the sea. The sandbars here come from LiDAR survey data: slide the tide to cover and uncover them.",view:[3e3,50,8],priority:2},{id:"hub",name:"The Hub",kind:"landmark",lat:-38.63332,lon:145.72762,blurb:"Inverloch Community Hub on A'Beckett Street, home to the library and visitor information.",view:[300,60,20],priority:3,maxDist:2600,lift:18},{id:"espy",name:"Esplanade Hotel",kind:"landmark",lat:-38.63419,lon:145.72889,blurb:"The pub at the foreshore end of the main street.",view:[280,62,-40],priority:3,maxDist:2200,lift:18},{id:"rainbow",name:"Rainbow Park",kind:"landmark",lat:-38.63529,lon:145.72876,blurb:"Foreshore playground with picnic lawns and barbecues beside the inlet beach.",view:[150,60,14],priority:3,maxDist:2200,lift:14},{id:"bunurong",name:"Bunurong Environment Centre",kind:"landmark",lat:-38.63465,lon:145.72917,blurb:"Environment centre and shell museum on The Esplanade.",view:[260,60,-15],priority:5,maxDist:1100,lift:15},{id:"glade",name:"The Glade",kind:"landmark",lat:-38.63539,lon:145.7302,blurb:"Foreshore reserve and picnic shelter between the town centre and the jetty.",view:[300,62,5],priority:5,maxDist:1300,lift:13},{id:"oval",name:"Recreation Reserve",kind:"landmark",lat:-38.63194,lon:145.72681,blurb:"The town's football oval, a block back from the main street.",view:[460,58,15],priority:4,maxDist:2600,lift:16},{id:"school",name:"Primary School",kind:"landmark",lat:-38.63062,lon:145.72813,blurb:"Inverloch Primary School.",view:[380,58,0],priority:6,maxDist:1500,lift:14},{id:"bowls",name:"Bowls Club",kind:"landmark",lat:-38.63556,lon:145.73245,blurb:"Inverloch Bowls Club, two greens beside the foreshore.",view:[260,60,0],priority:6,maxDist:1300,lift:12},{id:"tennis",name:"Tennis Club & Oval",kind:"landmark",lat:-38.62722,lon:145.7372,blurb:"Tennis courts and a second football oval on the north-east side of town.",view:[520,58,10],priority:6,maxDist:2e3,lift:14},{id:"camping",name:"Foreshore Holiday Parks",kind:"landmark",lat:-38.63425,lon:145.7442,blurb:"Cabins, caravans and tents under the trees along The Esplanade, steps from the inlet.",view:[560,60,15],priority:4,maxDist:2800,lift:16},{id:"screw",name:"Screw Creek & Townsend Bluff",kind:"nature",lat:-38.6338,lon:145.7546,blurb:"A tidal creek in a nature conservation reserve, with a walking circuit up to the lookout on Townsend Bluff.",view:[900,60,-20],priority:3,lift:24},{id:"norman",name:"Point Norman",kind:"nature",lat:-38.648,lon:145.7118,blurb:"The corner where the surf beach turns into the inlet.",view:[900,60,-35],priority:4,maxDist:4200,lift:14},{id:"smythe",name:"Point Smythe",kind:"nature",lat:-38.6466,lon:145.7366,blurb:"The tip of the Venus Bay peninsula, across the entrance from town: coastal scrub, dunes and walking tracks.",view:[1300,58,150],priority:3,lift:22},{id:"racv",name:"RACV Inverloch Resort",kind:"landmark",lat:-38.6487,lon:145.6876,blurb:"Resort and villas on the Cape Paterson road, on the hill above the coast.",view:[520,60,40],priority:5,maxDist:3200,lift:18},{id:"strait",name:"Bass Strait",kind:"water",lat:-38.6565,lon:145.7075,blurb:"Open ocean. Swell rolls in to the surf beach from here.",view:[2300,50,-12],priority:4}];function $_(i,t){return J_.map(e=>{const n=(e.lon-i.origin[0])*i.metresPerDegree[0],s=-(e.lat-i.origin[1])*i.metresPerDegree[1],r=Math.max(t.yAt(n,s),0);return{...e,x:n,z:s,y:r+(e.lift??6)}})}function vn(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}const j_=new Set(["Inverloch Surf Life Saving Club","The Hub"]),Ze=U(10126440),Ie=U(6113848),Sn=U(16053230),Us=U(11842219),we=U(7304312),Tr=U(3163994),Fs=U(13644844),Os=U(15909424),Q_=U(16119022),$l=2.05*Zn;function ld(i,t,e,n=35){let s=1/0,r=0,o=1;for(let a=0;a<24;a++){const l=a/24*Math.PI*2,c=i.metresAt(t+Math.cos(l)*n,e+Math.sin(l)*n)+i.metresAt(t+Math.cos(l)*n*2,e+Math.sin(l)*n*2);c<s&&(s=c,r=Math.cos(l),o=Math.sin(l))}return[r,o]}function Ho(i){let t=0,e=0;for(let n=0;n<i.length;n+=2)t+=i[n],e+=i[n+1];return[t/(i.length/2)/10,e/(i.length/2)/10]}function tM(i,t,e){const n=[];for(let M=0;M<e.length;M+=2)n.push([e[M]/10,e[M+1]/10]);t.metresAt(n[0][0],n[0][1])<t.metresAt(n[n.length-1][0],n[n.length-1][1])&&n.reverse();const s=1.7,r=$l,[o,a]=n[0];let l=o-n[1][0],c=a-n[1][1];const d=Math.hypot(l,c)||1;l/=d,c/=d;let h=0;for(;h<30&&t.yAt(o+l*h,a+c*h)<r-.25;)h+=1.5;const u=Math.max(t.yAt(o+l*h,a+c*h),r-1.2),f=Math.atan2(-l,-c);i.frame(o+l*h,0,a+c*h,f),i.quad(-s,u+.05,0,s,u+.05,0,s,r,h,-s,r,h,Ze),i.quad(-s,u-1.2,0,-s,r-.4,h,-s,r,h,-s,u+.05,0,Ie),i.quad(s,u-1.2,0,s,u+.05,0,s,r,h,s,r-.4,h,Ie);for(let M=0;M<n.length-1;M++){const[v,b]=n[M],[w,S]=n[M+1],y=Math.hypot(w-v,S-b),E=Math.atan2(w-v,S-b);i.frame(v,r,b,E);const T=Math.ceil(y/1.2);for(let P=0;P<T;P++){const N=P/T*y,L=(P+1)/T*y;i.box(-s,-.14,N,s,0,L,Wt(Ze,.9+P*7%5*.04),void 0,Ie)}i.box(-s+.25,-.5,0,-s+.5,-.14,y,Ie,null),i.box(s-.5,-.5,0,s-.25,-.14,y,Ie,null);const R=Math.max(1,Math.round(y/3.6));for(let P=0;P<=R;P++){const N=P/R*y;for(const L of[-1,1]){const F=L*(s-.12),I=t.yAt(i.wx(F,N),i.wz(F,N));i.cyl(F,I-r-.6,N,.17,.15,r-I+.6+1.1,6,Ie,Wt(Ze,.8))}i.box(-s,-.78,N-.12,s,-.5,N+.12,Ie),i.quad(-s+.1,-2.6,N,s-.1,-.8,N,s-.1,-.6,N,-s+.1,-2.4,N,Wt(Ie,.9))}for(const P of[-1,1]){const N=P*(s-.12);i.box(N-.05,1.02,0,N+.05,1.1,y,Ze,void 0,Ie),i.box(N-.03,.52,0,N+.03,.58,y,Ze,void 0,Ie)}i.box(-s,-.14,-s,s,0,.01,Ze,void 0,Ie)}const[p,x]=n[n.length-1],[m,g]=n[n.length-2],_=Math.atan2(p-m,x-g);i.frame(p,r,x,_),i.box(-3.2,-.14,0,3.2,0,5.2,Wt(Ze,.96),void 0,Ie);for(const[M,v]of[[-3.05,.2],[3.05,.2],[-3.05,5],[3.05,5],[0,5]]){const b=t.yAt(i.wx(M,v),i.wz(M,v));i.cyl(M,b-r-.6,v,.19,.17,r-b+.6+(M===0?0:1.1),6,Ie,Wt(Ze,.8))}i.box(-3.1,1.02,4.9,3.1,1.1,5,Ze,void 0,Ie),i.box(-3.1,1.02,0,-3,1.1,5,Ze,void 0,Ie),i.box(3,1.02,0,3.1,1.1,5,Ze,void 0,Ie),i.cyl(2.6,0,4.5,.07,.05,4.6,5,we),i.blob(2.6,4.75,4.5,.28,.2,.28,6,3,U(16773320),void 0,1.6),i.box(-.35,-3.6,5.22,-.3,.9,5.28,we,null),i.box(.3,-3.6,5.22,.35,.9,5.28,we,null);for(let M=-3.3;M<.6;M+=.42)i.box(-.3,M,5.22,.3,M+.05,5.28,we);return i.frame(),{head:new W(p,r,x),points:n}}function eM(i,t,e,n){const[s,r]=ld(t,e,n,25),o=Math.atan2(s,r);i.frame(e,0,n,o);const a=4.2,l=-8,c=[];for(let p=l;p<=46;p+=3){const x=t.yAt(i.wx(0,p),i.wz(0,p));if(c.push([p,x]),x<-1.6*Zn)break}const d=c[0][1]+.12,h=Math.min(c[c.length-1][1]+.25,-.9*Zn),u=c[c.length-1][0],f=c.length-1;for(let p=0;p<f;p++){const x=l+(u-l)*p/f,m=l+(u-l)*(p+1)/f,g=d+(h-d)*p/f,_=d+(h-d)*(p+1)/f;i.quad(-a,g,x,-a,_,m,a,_,m,a,g,x,p%2?Us:Wt(Us,.94));for(const M of[-1,1])i.quad(M*a,g-1.5,x,M*a,_-1.5,m,M*a,_+.15,m,M*a,g+.15,x,Wt(Us,.8))}i.frame()}function nM(i,t,e,n){const[s,r]=ld(t,e.cx,e.cz,60),o=e.obb;let a=o.heading,l=o.w,c=o.d,d=-1/0;for(let S=0;S<4;S++){const y=o.heading+S*Math.PI/2,E=Math.sin(y)*s+Math.cos(y)*r;E>d&&(d=E,a=y,l=S%2?o.d:o.w,c=S%2?o.w:o.d)}const h=l/2,u=c/2;i.frame(o.cx,e.floorY,o.cz,a);const f=U(13223611),p=U(15394522),x=U(6975604);i.box(-h,-4,-u,h,3.1,u,f,null),i.box(-h,3.1,-u,h,6.1,u,p,null),n.polygons.push(Kn(i,-h,-u,h,u));const m=Math.max(2,Math.floor(l/5));for(let S=0;S<m;S++){const y=-h+(S+.5)/m*l;i.quad(y-1.7,.05,u+.05,y+1.7,.05,u+.05,y+1.7,2.7,u+.05,y-1.7,2.7,u+.05,S%2?Fs:Os)}i.quad(-h+.6,3.6,u+.05,h-.6,3.6,u+.05,h-.6,5.7,u+.05,-h+.6,5.7,u+.05,Tr,.9),i.box(-h-.6,2.95,u,h+.6,3.12,u+3.4,Us,Ze,Wt(Us,.8)),i.box(-h-.6,3.12,u+3.32,h+.6,4.15,u+3.4,U(10469580),null);for(const S of[-h-.4,-h/3,h/3,h+.4])qn(i,n,S,u+3.12,.12,-4,2.95,we);i.quad(-h-.8,7.5,u+3.8,h+.8,7.5,u+3.8,h+.8,6.2,-u-.6,-h-.8,6.2,-u-.6,x),i.quad(-h,6.1,u,h,6.1,u,h,7.1,u,-h,7.1,u,p),i.quad(h,6.1,u,h,6.1,-u,h,6.3,-u,h,7.1,u,p),i.quad(-h,6.1,-u,-h,6.1,u,-h,7.1,u,-h,6.3,-u,p);const g=h-2.2,_=u-1.8;i.box(g-1.8,6.1,_-1.8,g+1.8,9.2,_+1.8,p,null),i.box(g-1.85,9.2,_-1.85,g+1.85,10.5,_+1.85,Tr,null,null,.7),i.box(g-2.3,10.5,_-2.3,g+2.3,10.72,_+2.3,x),i.cyl(g,10.72,_,.06,.04,5.2,5,Sn),i.quad(g,15.6,_,g+1.9,15.6,_,g+1.9,14.5,_,g,14.5,_,Fs),i.quad(g,14.5,_,g+1.9,14.5,_,g+1.9,13.4,_,g,13.4,_,Os);for(let S=0;S<4;S++){const y=-h+(S+.5)/4*l;i.quad(y+.9,3.9,-u-.05,y-.9,3.9,-u-.05,y-.9,5.3,-u-.05,y+.9,5.3,-u-.05,Tr,S%2)}let M=u+14;for(;M<160&&t.metresAt(o.cx+s*M,o.cz+r*M)>1.75;)M+=3;const v=o.cx+s*M,b=o.cz+r*M,w=Math.atan2(s,r);i.frame(v,t.yAt(v,b),b,w);for(const S of[-1,1]){const y=S*32,E=t.yAt(i.wx(y,0),i.wz(y,0))-t.yAt(v,b);i.cyl(y,E,0,.05,.04,4.4,5,Sn),i.quad(y,E+4.4,0,y+.95,E+4.4,0,y+.95,E+3.1,0,y,E+3.1,0,Fs),i.quad(y,E+3.1,0,y+.95,E+3.1,0,y+.95,E+1.8,0,y,E+1.8,0,Os)}for(const[S,y]of[[-1.5,-5.5],[1.5,-5.5],[-1.5,-8.5],[1.5,-8.5]])i.cyl(S,0,y,.04,.04,2.2,4,we);i.tri(-1.7,2.2,-5.3,1.7,2.2,-5.3,0,3,-7,Fs),i.tri(1.7,2.2,-8.7,-1.7,2.2,-8.7,0,3,-7,Fs),i.tri(1.7,2.2,-5.3,1.7,2.2,-8.7,0,3,-7,Os),i.tri(-1.7,2.2,-8.7,-1.7,2.2,-5.3,0,3,-7,Os),i.blob(6,.35,-6,.95,.4,2.1,8,3,U(14238751),U(15755818)),i.box(5.6,.3,-7.9,6.4,.95,-7.5,U(2763308));for(let S=0;S<4;S++)i.box(-7+S*.5,.2,-7.2,-6.85+S*.5,.75,-4.6,S%2?Os:U(3116992));return i.frame(),{beach:new W(v,t.yAt(v,b),b),seaward:[s,r]}}function cd(i,t){const e=i.length/2;let n=0;for(let o=0;o<e;o++){const a=(o+1)%e;n+=i[o*2]*i[a*2+1]-i[a*2]*i[o*2+1]}const s=n>0?1:-1,r=[];for(let o=0;o<e;o++){const a=(o+e-1)%e,l=(o+1)%e;let c=i[o*2]-i[a*2],d=i[o*2+1]-i[a*2+1],h=i[l*2]-i[o*2],u=i[l*2+1]-i[o*2+1];const f=Math.hypot(c,d)||1,p=Math.hypot(h,u)||1;c/=f,d/=f,h/=p,u/=p;const x=-d*s,m=c*s;let g=x-u*s,_=m+h*s;const M=Math.hypot(g,_)||1;g/=M,_/=M;const v=t/Math.max(.45,g*x+_*m);r.push(i[o*2]+g*v,i[o*2+1]+_*v)}return r}function iM(i,t,e,n){i.frame(0,e.floorY,0,0);const s=U(11111014),r=U(15328470),o=U(9410458);let a=1/0;for(let h=0;h<e.poly.length;h+=2)a=Math.min(a,t.yAt(e.poly[h],e.poly[h+1]));const l=e.poly.length/2;i.walls(e.poly,a-e.floorY-.3,3.2,s),i.walls(e.poly,3.2,6.2,r),n.polygons.push(e.poly);const c=cd(e.poly,3.2),d=cd(e.poly,4.4);for(let h=0;h<l;h++){const u=(h+1)%l;i.quad(e.poly[h*2],6.6,e.poly[h*2+1],e.poly[u*2],6.6,e.poly[u*2+1],c[u*2],6.05,c[u*2+1],c[h*2],6.05,c[h*2+1],o)}if(i.walls(e.poly,6.2,6.6,Wt(r,.92)),i.walls(c,6.05,7.9,Tr,.8),i.cap(c,7.9,Wt(o,1.08)),i.walls(d,7.9,8.3,Wt(o,.9)),i.cap(d,8.3,o),e.street){const h=e.street;i.frame(h.x,e.floorY,h.z,h.heading),i.quad(.6,.3,.06,h.length-.6,.3,.06,h.length-.6,5.6,.06,.6,5.6,.06,Tr,.9),i.box(h.length*.3,3.3,0,h.length*.7,3.5,3.4,U(14263361),void 0,Wt(U(14263361),.8)),qn(i,n,h.length*.3+.3,3.2,.1,0,3.3,we),qn(i,n,h.length*.7-.3,3.2,.1,0,3.3,we)}i.frame()}function pn(i,t,e,n,s,r=Q_){const o=e.length,a=.22,l=s?o:o-1;for(let c=0;c<l;c++){const[d,h]=e[c],[u,f]=e[(c+1)%o];let p=-(f-h),x=u-d;const m=Math.hypot(p,x)||1;p=p/m*n*.5,x=x/m*n*.5;const g=t.yAt(d,h)+a,_=t.yAt(u,f)+a;i.quad(d+p,g,h+x,u+p,_,f+x,u-p,_,f-x,d-p,g,h-x,r)}}function sM(i,t,e,n,s){const r=[];for(let M=0;M<n.length;M+=2)r.push([n[M]/10,n[M+1]/10]);const[o,a]=Ho(n);let l=0,c=0,d=0;for(const[M,v]of r)l+=(M-o)**2,c+=(v-a)**2,d+=(M-o)*(v-a);const h=.5*Math.atan2(2*d,l-c),u=Math.cos(h),f=Math.sin(h);let p=0,x=0;for(const[M,v]of r)p=Math.max(p,Math.abs((M-o)*u+(v-a)*f)),x=Math.max(x,Math.abs(-(M-o)*f+(v-a)*u));p-=5,x-=5;const m=(M,v)=>[o+M*u-v*f,a+M*f+v*u],g=[];for(let M=0;M<72;M++){const v=M/72*Math.PI*2;g.push(m(Math.cos(v)*p,Math.sin(v)*x))}pn(t,e,g,.35,!0),pn(t,e,[m(-25,-25),m(25,-25),m(25,25),m(-25,25)],.3,!0);const _=M=>Array.from({length:24},(v,b)=>m(Math.cos(b/24*Math.PI*2)*M,Math.sin(b/24*Math.PI*2)*M));pn(t,e,_(5),.3,!0),pn(t,e,_(1.5),.3,!0);for(const M of[-1,1]){pn(t,e,[m(M*p,-3.2),m(M*(p-9),-3.2),m(M*(p-9),3.2),m(M*p,3.2)],.3,!1);const v=[];for(let b=-8;b<=8;b++){const w=b/8*1.05,S=M*(p-50*Math.cos(w)),y=50*Math.sin(w);(S/p)**2+(y/x)**2<1&&v.push(m(S,y))}v.length>2&&pn(t,e,v,.3,!1);for(const[b,w]of[[-3.2,9.5],[3.2,9.5],[-9.6,6.2],[9.6,6.2]]){const[S,y]=m(M*p,b);i.frame(S,e.yAt(S,y),y,0),i.cyl(0,0,0,.11,.09,w,6,Sn),i.cyl(0,0,0,.2,.2,1.6,6,b*b<12?U(2973608):U(12597806))}}if(s)for(const[M,v]of[[-.62,-1],[.62,-1],[-.62,1],[.62,1]]){const[b,w]=m(M*(p+6),v*(x+9));i.frame(b,e.yAt(b,w),w,Math.atan2(o-b,a-w)),i.cyl(0,0,0,.28,.16,24,6,we),i.box(-1.7,24,-.2,1.7,25.3,.2,U(4869972)),i.quad(-1.6,24.1,.22,1.6,24.1,.22,1.6,25.2,.22,-1.6,25.2,.22,U(16774876),2.2)}i.frame()}function rM(i,t,e,n,s){const r=[];for(let v=0;v<n.length;v+=2)r.push([n[v]/10,n[v+1]/10]);if(r.length<4)return;if(s==="bowls"){pn(t,e,r,.5,!0,U(15328986));return}const[o,a,l,c]=r,d=Math.hypot(a[0]-o[0],a[1]-o[1])>Math.hypot(l[0]-a[0],l[1]-a[1]),h=d?o:a,u=d?a:l,f=d?l:c,p=d?c:o,x=(v,b)=>{const w=h[0]+(u[0]-h[0])*v,S=h[1]+(u[1]-h[1])*v,y=p[0]+(f[0]-p[0])*v,E=p[1]+(f[1]-p[1])*v;return[w+(y-w)*b,S+(E-S)*b]},m=.14;pn(t,e,[x(0,0),x(1,0),x(1,1),x(0,1)],m,!0),pn(t,e,[x(0,.125),x(1,.125)],m,!1),pn(t,e,[x(0,.875),x(1,.875)],m,!1),pn(t,e,[x(.23,.125),x(.23,.875)],m,!1),pn(t,e,[x(.77,.125),x(.77,.875)],m,!1),pn(t,e,[x(.23,.5),x(.77,.5)],m,!1);const g=x(.5,-.04),_=x(.5,1.04),M=e.yAt(g[0],g[1])+.2;i.frame(0,M,0,0),i.quad(g[0],0,g[1],_[0],0,_[1],_[0],.95,_[1],g[0],.95,g[1],U(2830131)),i.quad(g[0],.95,g[1],_[0],.95,_[1],_[0],1.05,_[1],g[0],1.05,g[1],Sn);for(const v of[g,_])i.cyl(v[0],0,v[1],.06,.06,1.1,5,we);i.frame()}const di=[14826299,15764004,15909424,5025616,3117008,8280002].map(U);function oM(i,t,e,n,s){const[r,o]=Ho(e),a=t.yAt(r,o)+.05,l=s()*Math.PI;i.frame(r,a,o,l);const c=(u,f,p,x)=>{for(const[m,g]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.cyl(u+m,0,f+g,.07,.07,p+2,5,U(8018492));i.box(u-1,p-.1,f-1,u+1,p,f+1,Ze,void 0,Ie),i.cyl(u,p+2,f,1.5,0,1,4,x)};c(-2.2,0,1.5,di[0]),c(2.2,0,2.1,di[4]),i.box(-1.2,1.4,-.35,1.2,1.5,.35,Ze),i.quad(3.2,2.1,-.4,6.4,.15,-.4,6.4,.15,.4,3.2,2.1,.4,di[2]),i.quad(-3.2,1.5,.4,-5.6,.15,.4,-5.6,.15,-.4,-3.2,1.5,-.4,di[1]);const d=0,h=5.2;for(const u of[-2.2,2.2])i.quad(d+u,0,h-1.1,d+u+.08,0,h-1.1,d+u+.08,2.6,h,d+u,2.6,h,we),i.quad(d+u,0,h+1.1,d+u+.08,0,h+1.1,d+u+.08,2.6,h,d+u,2.6,h,we);i.box(d-2.25,2.55,h-.05,d+2.25,2.65,h+.05,di[3]);for(const u of[-1.1,0,1.1])i.box(d+u-.25,.5,h-.1,d+u+.25,.56,h+.1,U(2763308)),i.box(d+u-.24,.56,h-.01,d+u-.22,2.55,h+.01,we,null),i.box(d+u+.22,.56,h-.01,d+u+.24,2.55,h+.01,we,null);if(n){i.cyl(-6.5,0,-5.5,.09,.07,5.2,5,we);for(let u=0;u<6;u++){const f=u/6*Math.PI*2,p=-6.5+Math.cos(f)*3.2,x=-5.5+Math.sin(f)*3.2;i.quad(p-.04,0,x,p+.04,0,x,-6.46,5.1,-5.5,-6.54,5.1,-5.5,U(3104672))}for(let u=0;u<6;u++){const f=-9+u*3.4,p=di[u],x=4.6,m=3.3;i.cyl(f,0,-11,.08,.07,x,5,we),i.cyl(f+1.7,0,-7.2,.08,.07,m,5,we),i.tri(f,x,-11,f+3.4,x,-11,f+1.7,m,-7.2,p)}i.cyl(11.399999999999999,0,-11,.08,.07,4.6,5,we),i.cyl(6.5,.3,5.5,1.3,1.3,.12,10,di[5],di[2]),i.cyl(6.5,0,5.5,.1,.1,1.1,5,we);for(let u=0;u<3;u++)i.blob(9.5+u*1.6,.55,-1.5,.3,.3,.55,5,3,di[(u*2+1)%6])}i.frame()}function aM(i,t,e){const n=[];for(let h=0;h<e.length;h+=2)n.push([e[h]/10,e[h+1]/10]);const[s,r]=Ho(e),o=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1])>Math.hypot(n[2][0]-n[1][0],n[2][1]-n[1][1])?[n[0],n[1]]:[n[1],n[2]],a=Math.atan2(o[1][0]-o[0][0],o[1][1]-o[0][1]),l=Math.hypot(o[1][0]-o[0][0],o[1][1]-o[0][1])/2-1;i.frame(s,t.yAt(s,r)+.1,r,a);const c=U(13092286),d=Wt(c,.88);for(const h of[-1,1]){const u=h*l,f=[[0,0],[1.4,.35],[2.4,1.1],[3,2]];for(let p=0;p<3;p++){const[x,m]=f[p],[g,_]=f[p+1],M=u-h*(3-x),v=u-h*(3-g);h>0?i.quad(-4,m,M,4,m,M,4,_,v,-4,_,v,p%2?c:d):i.quad(4,m,M,-4,m,M,-4,_,v,4,_,v,p%2?c:d)}i.box(-4,0,Math.min(u,u+h*1.2),4,2,Math.max(u,u+h*1.2),d,c)}i.box(-1.5,0,-1.2,1.5,.45,1.2,d,c),i.quad(-1.5,.45,1.2,1.5,.45,1.2,1.5,0,3,-1.5,0,3,c),i.quad(1.5,.45,-1.2,-1.5,.45,-1.2,-1.5,0,-3,1.5,0,-3,c),i.box(3.2,.45,-2.5,3.28,.5,2.5,we),i.frame()}function lM(i,t){const e=t.obb,n=e.w>=e.d,s=(n?e.w:e.d)/2;i.frame(e.cx,t.floorY,e.cz,e.heading);const r=n?s+1.2:0,o=n?0:s+1.2,a=U(15262418);i.box(r-1.4,-1,o-1.4,r+1.4,t.wallH+4.6,o+1.4,a,null),i.cyl(r,t.wallH+4.6,o,2.1,0,4.2,4,U(5922659)),i.box(r-.07,t.wallH+8.8,o-.07,r+.07,t.wallH+10.6,o+.07,Sn),i.box(r-.5,t.wallH+9.8,o-.07,r+.5,t.wallH+9.95,o+.07,Sn),i.frame()}function cM(i,t,e,n){i.frame(e,t.yAt(e,n),n,.4);const s=46;for(let r=0;r<6;r++){const o=r/6*s,a=1.5-r/6*1.1,l=1.5-(r+1)/6*1.1;i.cyl(0,o,0,a,l,s/6,3,r%2?Sn:Fs)}i.cyl(0,s,0,.08,.05,5,4,we),i.blob(0,s+5.1,0,.3,.3,.3,5,3,U(16726832),void 0,2.5);for(const[r,o]of[[.3,38],[2.4,35],[4.4,40]])i.cyl(Math.cos(r)*.9,o,Math.sin(r)*.9,.55,.55,.35,8,Sn,Sn);i.box(2.5,0,-1.5,5.5,2.6,1.5,U(13619919),U(9080716)),i.frame()}function hM(i,t,e,n,s,r){const o=s.nearest(e,n,60),a=o?Math.atan2(o.px-e,o.pz-n):0;i.frame(e,t.yAt(e,n)+.1,n,a);const l=U(3116874);for(const[c,d]of[[-6,3.5],[6,3.5],[-6,9.5],[6,9.5]])qn(i,r,c,d,.2,0,5,Sn);i.box(-8,5,2,8,5.25,11,Sn,U(14277590),U(15921902),.5),i.box(-8.05,5.25,1.95,8.05,5.9,11.05,l,U(14277590));for(const c of[-4,0,4])i.box(c-1.3,0,6.2,c+1.3,.2,6.8,Us),i.box(c-.4,.2,6.25,c+.4,1.7,6.75,Sn,l),r.polygons.push(Kn(i,c-.4,6.25,c+.4,6.75));i.frame()}function uM(i,t,e,n,s){for(let r=0;r<3;r++){const o=e+(s()-.5)*16,a=n+(s()-.5)*16;i.frame(o,t.yAt(o,a)+.05,a,s()*Math.PI),i.box(-1,.7,-.4,1,.78,.4,Ze,void 0,Ie),i.box(-1,.4,-.85,1,.46,-.6,Ze,void 0,Ie),i.box(-1,.4,.6,1,.46,.85,Ze,void 0,Ie),i.box(-.75,0,-.7,-.65,.7,.7,we,null),i.box(.65,0,-.7,.75,.7,.7,we,null)}i.frame()}function dM(i){if(!i.hasDetail)return null;const{town:t,hf:e,roads:n,paths:s}=i,r=new oe,o=De(4411),a=[12597547,3108687,15921902,3426654,9268810,14266938,10134443].map(U),l=U(7301730),c=U(3103290),d=[U(13115434),U(15254046)],h=t.houses,u=$u(t),f=[];for(let w=0;w<h.length;w+=Hl)h[w+5]!==1&&f.push(h[w]/4,h[w+1]/4);const p=f.length;for(const[w,S]of c_)f.push(w,S);for(let w=0;w<f.length;w+=2){const S=f[w],y=f[w+1];if(!i.isDetail(S,y)||i.isClear(S,y))continue;const E=n.nearest(S,y,45),T=o()<.5?-1:1,R=T*(2.5+o()*2.5),P=Math.floor(o()*a.length),N=o()<.7;if(!E||w<p&&u(S,y))continue;const L=E.cls<=3?6.4:3.6;if(E.dist<L+3)continue;const F=(S-E.px)/E.dist,I=(y-E.pz)/E.dist,O=-I,j=F,V=Math.atan2(F,I),G=E.px+F*L+O*R,Z=E.pz+I*L+j*R;if(!i.isClear(G,Z)&&(r.frame(G,e.yAt(G,Z),Z,V),r.box(-.05,0,-.05,.05,.95,.05,l),r.box(-.17,.95,-.22,.17,1.22,.22,a[P],Wt(a[P],.8)),N)){const X=E.px+F*(L-1.1)+O*(R+T*1.5),K=E.pz+I*(L-1.1)+j*(R+T*1.5);r.frame(X,e.yAt(X,K),K,V),d.forEach((z,q)=>{r.box(q*.72-.28,0,-.33,q*.72+.28,.96,.33,c),r.box(q*.72-.3,.96,-.36,q*.72+.3,1.04,.36,z)})}}const x=U(7034692),m=U(5917242),g=U(2829102),_=U(14276303),M=42,v=new oe;for(const w of s){if(w.cls>3||w.flags)continue;const S=w.pts.length/3;let y=M*.4,E=null;for(let T=1;T<S;T++){const R=w.pts[T*3-3],P=w.pts[T*3-1],N=w.pts[T*3],L=w.pts[T*3+2],F=Math.hypot(N-R,L-P);if(y+=F,y<M)continue;y=0;const I=(N-R)/(F||1),O=(L-P)/(F||1),j=w.width/2+2.5,V=N+O*j,G=L-I*j;if(!i.isDetail(V,G)||i.isClear(V,G)||!e.inside(V,G,20)){E=null;continue}const Z=e.yAt(V,G);v.frame(V,Z,G,Math.atan2(I,O)),v.cyl(0,0,0,.15,.1,9.2,6,x),v.box(-1.15,8.45,-.06,1.15,8.58,.06,m);for(const K of[-.95,0,.95])v.box(K-.04,8.58,-.04,K+.04,8.72,.04,_);const X={x:V,y:Z+8.72,z:G,nx:O,nz:-I};if(E&&Math.hypot(X.x-E.x,X.z-E.z)<M*1.8){v.frame();for(const K of[-.95,0,.95]){const z=E.x+E.nx*K,q=E.z+E.nz*K,nt=X.x+X.nx*K,ht=X.z+X.nz*K,et=(z+nt)/2,it=(q+ht)/2,Rt=(E.y+X.y)/2-.5;for(const[ut,Mt,Ft,lt,ft,pt]of[[z,E.y,q,et,Rt,it],[et,Rt,it,nt,X.y,ht]])v.quad(ut,Mt,Ft,lt,ft,pt,lt,ft+.035,pt,ut,Mt+.035,Ft,g),v.quad(ut,Mt,Ft,lt,ft,pt,lt+X.nx*.035,ft,pt+X.nz*.035,ut+X.nx*.035,Mt,Ft+X.nz*.035,g)}}E=X}}if(!r.vertexCount&&!v.vertexCount)return null;const b=new te(r.build(),Cs());if(b.castShadow=!0,b.receiveShadow=!0,b.name="street-detail",v.vertexCount){const w=new te(v.build(),Cs());w.castShadow=!1,w.receiveShadow=!0,w.name="power-poles",b.add(w)}return b}function fM(i){const{town:t,hf:e,paths:n}=i,s=120,r=new Map,o=t.houses;for(let R=0;R<o.length;R+=Hl){const P=Math.floor(o[R]/4/s)*4096+Math.floor(o[R+1]/4/s)+8390656;r.set(P,(r.get(P)??0)+1)}const[a,l]=vn(t.meta,-38.63385,145.7285),c=(R,P)=>(r.get(Math.floor(R/s)*4096+Math.floor(P/s)+2048*4097)??0)>=4||Math.hypot(R-a,P-l)<380,d=[];for(const R of n){if(R.cls>2||R.flags)continue;const P=R.cls===0?48:58,N=R.pts.length/3;let L=P*.5,F=1;for(let I=1;I<N;I++){const O=R.pts[I*3-3],j=R.pts[I*3-1],V=R.pts[I*3],G=R.pts[I*3+2],Z=Math.hypot(V-O,G-j);if(L+=Z,L<P)continue;L=0,F=-F;const X=(V-O)/(Z||1),K=(G-j)/(Z||1),z=R.width/2+1.6,q=V-K*z*F,nt=G+X*z*F;!c(q,nt)||!e.inside(q,nt,20)||i.isClear(q,nt)||d.push(q,e.yAt(q,nt),nt,Math.atan2(K*F,-X*F))}}const h=new oe,u=U(9278358);h.cyl(0,0,0,.11,.07,8.2,5,u),h.box(-.05,8.1,0,.05,8.22,2.2,u),h.box(-.22,8,1.7,.22,8.14,2.5,U(5922659)),h.quad(-.2,7.99,2.48,.2,7.99,2.48,.2,7.99,1.72,-.2,7.99,1.72,U(16773320),3);const f=d.length/4,p=new He(h.build(),Cs(),f),x=document.createElement("canvas");x.width=x.height=64;const m=x.getContext("2d"),g=m.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,"rgba(255,214,150,0.85)"),g.addColorStop(.45,"rgba(255,196,120,0.32)"),g.addColorStop(1,"rgba(255,180,100,0)"),m.fillStyle=g,m.fillRect(0,0,64,64);const _=new _l(x);_.colorSpace=Fe;const M=new Vn(34,34);M.rotateX(-Math.PI/2);const v=new xn({map:_,transparent:!0,opacity:0,blending:Jo,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),b=new He(M,v,f);b.renderOrder=3;const w=new re,S=new Rn,y=new W(0,1,0),E=new W(1,1,1),T=new W;for(let R=0;R<f;R++){const P=d[R*4],N=d[R*4+1],L=d[R*4+2],F=d[R*4+3];S.setFromAxisAngle(y,F),p.setMatrixAt(R,w.compose(T.set(P,N,L),S,E));const I=P+Math.sin(F)*2.1,O=L+Math.cos(F)*2.1;b.setMatrixAt(R,w.compose(T.set(I,e.yAt(I,O)+.5,O),S.identity(),E))}return p.castShadow=!1,p.computeBoundingSphere(),b.computeBoundingSphere(),b.onBeforeRender=()=>{v.opacity=Po.value*.9},b.visible=!0,{lights:p,pools:b,poolMat:v}}function pM(i){const{town:t,hf:e,footprints:n,roads:s}=i,r=new $e;r.name="landmarks";const o=new oe,a=new oe,l=De(20261111),c={polygons:[],circles:[]},d={group:r,nightMaterials:[],blockers:c};t.piers[0]&&(d.jetty=tM(o,e,t.piers[0]));for(const[E,T]of[[-38.63578,145.73393],[-38.63595,145.73085]]){const[R,P]=vn(t.meta,E,T);eM(o,e,R,P)}const h=n.find(E=>E.name==="Inverloch Surf Life Saving Club");h&&(d.surf=nM(o,e,h,c));const u=n.find(E=>E.name==="The Hub");u&&iM(o,e,u,c);for(const E of n)E.kind==="church"&&lM(o,E);let f=0;for(const E of t.pitches)E.s==="australian_football"?sM(o,a,e,E.p,f++===0):E.s==="tennis"||E.s==="bowls"?rM(o,a,e,E.p,E.s):E.s==="skateboard"&&aM(o,e,E.p);const[p,x]=vn(t.meta,-38.63529,145.72876);for(const E of t.playgrounds){const[T,R]=Ho(E);oM(o,e,E,Math.hypot(T-p,R-x)<60,l)}const[m,g]=vn(t.meta,-38.62462,145.71011);cM(o,e,m,g);const[_,M]=vn(t.meta,-38.63161,145.72943);hM(o,e,_,M,s,c);for(const[E,T]of[[-38.6358,145.72885],[-38.63447,145.72923],[-38.63545,145.72875]]){const[R,P]=vn(t.meta,E,T);uM(o,e,R,P,l)}const v=new te(o.build(),Cs());v.castShadow=!0,v.receiveShadow=!0,r.add(v);const b=a.build();b.deleteAttribute("glow");const w=new te(b,Mr(new xn({vertexColors:!0,side:Le,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})));r.add(w);const S=dM(i);S&&r.add(S);const y=fM(i);return r.add(y.lights,y.pools),d.nightMaterials.push(y.poolMat),d}const mM=qt.lights_fragment_begin.replace("getDirectionalLightInfo( directionalLight, directLight );",`getDirectionalLightInfo( directionalLight, directLight );
    // The atmosphere owns the scene's only directional light.
    directLight.color *= cloudSunlight(vCoastalWorld);`),gM=`
  vec4 coastalPosition = vec4(transformed, 1.0);
  #ifdef USE_BATCHING
    coastalPosition = batchingMatrix * coastalPosition;
  #endif
  #ifdef USE_INSTANCING
    coastalPosition = instanceMatrix * coastalPosition;
  #endif
  vCoastalWorld = (modelMatrix * coastalPosition).xyz;
`,xM=`
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
`;class _M{constructor(t,e,n,s,r,o,a){Y(this,"prepared",new WeakSet);Y(this,"inlet",{value:new W});Y(this,"mist");this.color=n,this.clouds=r,this.sunDir=o,this.cloudShadowStrength=a,this.inlet.value.set(t,0,e),this.mist={value:Number(s)}}setMist(t){this.mist.value=Number(t)}setWaterLevel(t){this.inlet.value.y=t}add(t){t.traverse(e=>{const{material:n}=e;if(n)for(const s of Array.isArray(n)?n:[n])this.prepare(s)})}addWater(t){this.prepare(t.material,!0)}prepare(t,e=!1){if(!t.toneMapped||this.prepared.has(t)||t instanceof Xe&&!e)return;this.prepared.add(t);const n=t.onBeforeCompile,s=t.customProgramCacheKey();t.customProgramCacheKey=()=>s+(e?":coastal-water-cloud":":coastal-haze-cloud"),t.onBeforeCompile=(r,o)=>{n.call(t,r,o),r.uniforms.uCoastalColor=this.color,r.uniforms.uInletCenter=this.inlet,r.uniforms.uCoastalMist=this.mist;const a=e||t instanceof In||t instanceof _o||t instanceof qp||t instanceof Jp;a&&Object.assign(r.uniforms,this.clouds.uniforms,{uCloudSunDir:this.sunDir,uCloudShadowStrength:this.cloudShadowStrength});const l=(a?Nu+B1:"")+xM;e||(r.vertexShader=`varying vec3 vCoastalWorld;
`+r.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
`+gM));const c=e?r.fragmentShader.replace("varying vec3 vW;","").replace("col += uSunColor *",`float sunlight = cloudSunlight(vW);
          col *= mix(1.0, sunlight, 0.22);
          col += uSunColor * sunlight *`):a?r.fragmentShader.replace("#include <lights_fragment_begin>",mM):r.fragmentShader;r.fragmentShader=(e?l.replace(/vCoastalWorld/g,"vW"):l)+c.replace("#include <tonemapping_fragment>",`gl_FragColor.rgb = coastalLight(gl_FragColor.rgb);
#include <tonemapping_fragment>`)},t.needsUpdate=!0}}const hd=330;function ji(i,t){let e=Math.imul(i^t,73244475);return e=Math.imul(e^e>>>16,73244475),((e^e>>>16)>>>0)/4294967296}function zs(i,t){const e=Math.min(1,Math.max(0,i/t));return e*e*(3-2*e)}class MM{constructor(){Y(this,"window",0);Y(this,"age",0);Y(this,"duration",0);Y(this,"rain",0);Y(this,"wetness",0);Y(this,"cover",.38);Y(this,"storm",!1)}update(t){this.window=Math.floor(t/hd);const e=90+48*ji(this.window,17);this.duration=60+22*ji(this.window,29),this.age=t-this.window*hd-e;const n=this.age-this.duration,s=zs(this.age+42,42)*(1-zs(n,36));this.storm=this.window%4===0,this.cover=.38+(this.storm?.6:.4)*s;const r=this.storm?.97:.55+.15*ji(this.window,41);this.rain=r*zs(this.age,9)*(1-zs(n+14,14)),this.wetness=zs(this.age,23)*(1-zs(n,68))}}const jl=[18,45],Vo=8;class vM{constructor(t,e,n){Y(this,"line");Y(this,"vertices",new Float32Array((Vo+1)*2*3));Y(this,"center",new Ut);Y(this,"key");Y(this,"previousTime");Y(this,"arrival");this.inletX=e,this.inletZ=n;const s=new Re;s.setAttribute("position",new Te(this.vertices,3).setUsage(Gi));const r=[];for(let o=0;o<Vo;o++){const a=2*o;r.push(a,a+1,a+2,a+1,a+3,a+2)}s.setIndex(r),this.line=new te(s,new xn({color:15002367,transparent:!0,depthWrite:!1,side:Le})),this.line.material.forceSinglePass=!0,this.line.name="inlet lightning",this.line.visible=!1,t.add(this.line)}shape(t,e){const n=this.inletX+640*(ji(t,3)-.5),s=this.inletZ+490*(ji(t,13)-.5);this.center.set(n,s);const r=Math.atan2(e.x-n,e.z-s),o=Math.cos(r),a=-Math.sin(r);for(let l=0;l<=Vo;l++){const c=l/Vo,d=n+34*c+33*(ji(t,60+l)-.5),h=s+18*(ji(t,30+l)-.5),u=422-400*c;for(let f=0;f<2;f++){const p=(f?1:-1)*(1.9-c*1.1),x=3*(2*l+f);this.vertices[x]=d+p*o,this.vertices[x+1]=u,this.vertices[x+2]=h+p*a}}this.line.geometry.attributes.position.needsUpdate=!0,this.line.geometry.computeBoundingSphere()}update(t,e,n,s){const r=this.previousTime;this.previousTime=t,this.line.visible=!1;const o=r!==void 0&&t>=r&&t-r<1.5&&!document.hidden;if(o||(this.arrival=void 0),!e.storm||e.age<jl[0])return 0;const a=e.age>=jl[1]?1:0,l=e.age-jl[a],c=e.window*2+a;if(c!==this.key&&(this.key=c,this.shape(c,n),o&&l<.45)){const h=Math.hypot(this.center.x-n.x,110-n.y,this.center.y-n.z);h<6500&&(this.arrival=t-l+Math.max(.35,h/343))}if(this.arrival!==void 0&&t>=this.arrival){this.arrival=void 0;const h=Math.hypot(this.center.x-n.x,this.center.y-n.z);s==null||s(se.clamp(1-h/7e3,.1,1))}const d=Math.max(0,1-l/.32);return this.line.visible=d>0,this.line.material.opacity=d,d}dispose(){this.line.removeFromParent(),this.line.geometry.dispose(),this.line.material.dispose()}}const ud="dmFyIF89T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBKPShrLGosRSk9PmogaW4gaz9fKGssaix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6RX0pOmtbal09RTt2YXIgdz0oayxqLEUpPT5KKGssdHlwZW9mIGohPSJzeW1ib2wiP2orIiI6aixFKTsoZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3Mgantjb25zdHJ1Y3RvcihuLHMsdCxhLGksbCxyLGgsYz1bXSl7dyh0aGlzLCJueCIpO3codGhpcywibnoiKTt3KHRoaXMsInkiKTt3KHRoaXMsInhNaW4iKTt3KHRoaXMsInpNaW4iKTt3KHRoaXMsInhNYXgiKTt3KHRoaXMsInpNYXgiKTt3KHRoaXMsImR4Iik7dyh0aGlzLCJkeiIpO3codGhpcywiY2VsbFgiKTt3KHRoaXMsImNlbGxaIik7aWYodGhpcy5yYXc9bix0aGlzLmV4cG9zdXJlPXMsdGhpcy53PXQsdGhpcy5oPWEsdGhpcy5zaXplWD1pLHRoaXMuc2l6ZVo9bCx0aGlzLnBhdGNoZXM9Yyx0aGlzLmNlbGxYPWkvdCx0aGlzLmNlbGxaPWwvYSx0aGlzLm54PU1hdGguZmxvb3IoKHQtMSkvcikrMSx0aGlzLm56PU1hdGguZmxvb3IoKGEtMSkvcikrMSx0aGlzLmR4PXRoaXMuY2VsbFgqcix0aGlzLmR6PXRoaXMuY2VsbFoqcix0aGlzLnhNaW49LWkvMit0aGlzLmNlbGxYLzIsdGhpcy56TWluPS1sLzIrdGhpcy5jZWxsWi8yLHRoaXMueE1heD10aGlzLnhNaW4rKHRoaXMubngtMSkqdGhpcy5keCx0aGlzLnpNYXg9dGhpcy56TWluKyh0aGlzLm56LTEpKnRoaXMuZHosdGhpcy55PWg/P25ldyBGbG9hdDMyQXJyYXkodGhpcy5ueCp0aGlzLm56KSwhaClmb3IobGV0IG89MDtvPHRoaXMubno7bysrKWZvcihsZXQgcD0wO3A8dGhpcy5ueDtwKyspdGhpcy55W28qdGhpcy5ueCtwXT1uW28qcip0K3Aqcl0qMS41fXlBdChuLHMpe2Zvcihjb25zdCB0IG9mIHRoaXMucGF0Y2hlcylpZihuPj10LnhNaW4mJm48PXQueE1heCYmcz49dC56TWluJiZzPD10LnpNYXgpcmV0dXJuIEUodCxuLHMpO3JldHVybiB0aGlzLmJhc2VZQXQobixzKX1iYXNlWUF0KG4scyl7cmV0dXJuIEUodGhpcyxuLHMpfXBhdGNoT3ZlcmxhcHMobixzLHQsYSl7cmV0dXJuIHRoaXMucGF0Y2hlcy5zb21lKGk9Pm48aS54TWF4JiZ0PmkueE1pbiYmczxpLnpNYXgmJmE+aS56TWluKX1iaWxpbmVhcihuLHMsdCl7bGV0IGE9KHMrdGhpcy5zaXplWC8yKS90aGlzLmNlbGxYLS41LGk9KHQrdGhpcy5zaXplWi8yKS90aGlzLmNlbGxaLS41O2E8MD9hPTA6YT50aGlzLnctMS4wMDAxJiYoYT10aGlzLnctMS4wMDAxKSxpPDA/aT0wOmk+dGhpcy5oLTEuMDAwMSYmKGk9dGhpcy5oLTEuMDAwMSk7Y29uc3QgbD1hfDAscj1pfDAsaD1hLWwsYz1pLXIsbz1yKnRoaXMudytsO3JldHVybihuW29dKigxLWgpK25bbysxXSpoKSooMS1jKSsobltvK3RoaXMud10qKDEtaCkrbltvK3RoaXMudysxXSpoKSpjfW1ldHJlc0F0KG4scyl7cmV0dXJuIHRoaXMuYmlsaW5lYXIodGhpcy5yYXcsbixzKX1leHBvc3VyZUF0KG4scyl7cmV0dXJuIHRoaXMuYmlsaW5lYXIodGhpcy5leHBvc3VyZSxuLHMpfWluc2lkZShuLHMsdD0wKXtyZXR1cm4gbj50aGlzLnhNaW4rdCYmbjx0aGlzLnhNYXgtdCYmcz50aGlzLnpNaW4rdCYmczx0aGlzLnpNYXgtdH19ZnVuY3Rpb24gRShlLG4scyl7bGV0IHQ9KG4tZS54TWluKS9lLmR4LGE9KHMtZS56TWluKS9lLmR6O3Q8MD90PTA6dD5lLm54LTEmJih0PWUubngtMSksYTwwP2E9MDphPmUubnotMSYmKGE9ZS5uei0xKTtjb25zdCBpPU1hdGgubWluKHR8MCxlLm54LTIpLGw9TWF0aC5taW4oYXwwLGUubnotMikscj10LWksaD1hLWwsYz1sKmUubngraSxvPWUueVtjXSxwPWUueVtjKzFdLHU9ZS55W2MrZS5ueF0sZj1lLnlbYytlLm54KzFdO3JldHVybiByK2g8PTE/bysocC1vKSpyKyh1LW8pKmg6ZisodS1mKSooMS1yKSsocC1mKSooMS1oKX1jb25zdCBaPVt7ZW5kczpbNDAwMTMsMjc0MzksMjc2MDIsMjA0ODldLHRpZToyNCxhbmNob3JzOltbMTI4MCwxMS44XSxbMTMwMCwxMC44XSxbMTMyMCw5Ljk4XSxbMTMzMCw5LjgxXSxbMTM0MCw5LjY3XSxbMTM1MCw5LjkzXSxbMTM2NSwxMC4xN10sWzEzODAsMTAuNTVdLFsxNDAwLDEwLjc3XV19LHtlbmRzOlstNDc0MywtNDAzLC0yNzcyLC0xMjJdLHRpZToxMixhbmNob3JzOltbNTksMjQuNjJdLFs3NCwyMi42M10sWzg5LDE5LjY5XSxbMTAwLDE3LjddLFsxMTAsMTUuOTVdLFsxMjAsMTQuMTldLFsxMzIsMTIuMDddLFsxNDQsMTAuMjNdXX0se2VuZHM6Wy0zMDIxNCwxMTk2OCwtNDAwMTMsMjEwOTVdLHRpZToyNSxhbmNob3JzOltbMTA4MCw1LjE0XSxbMTEwMCw1LjJdLFsxMTIwLDUuNTddLFsxMTM1LDYuNjVdLFsxMTUwLDguNjFdLFsxMTU1LDkuMjRdLFsxMTY1LDEwLjM1XSxbMTE3NSwxMS42NV0sWzExOTIsMTVdLFsxMjEwLDE4LjRdLFsxMjM1LDIwLjY4XSxbMTI1NSwyMS42M11dfSx7ZW5kczpbLTE3ODU1LDYyMTUsLTE2NzA3LC0yMzczXSx0aWU6OCxhbmNob3JzOltbMTgwLDEzLjY1XSxbMTkyLDE2XSxbMjA0LDE4LjZdLFsyMjAsMjEuMDJdLFsyNDQsMjMuNTNdXX0se2VuZHM6Wy0yODAzMiw2NzI3LC0yNDI3OCw4MTE3XSx0aWU6NyxhbmNob3JzOltbOCwxMS43Ml0sWzE0LDExLjUxXSxbMjMsMTAuMjhdLFszMyw4LjQyXSxbNDMsNi42OV0sWzUyLDUuNTNdXX0se2VuZHM6Wy0zMDEwMywxMTY0NSwtMzUwMjcsMTEyNDRdLHRpZToxMyxhbmNob3JzOltbNDI4LDUuODddLFs0NDIsNy4wOF0sWzQ1NywxMC4yNl0sWzQ3NSwxNC4xOF0sWzQ5NSwxNy42NF0sWzUxMCwxOS4wNV0sWzUyOSwyMC4zOF1dfV0sTD0uMDE1LFk9MS41O2Z1bmN0aW9uIFMoZSl7Y29uc3Qgbj1NYXRoLm1heCgwLE1hdGgubWluKDEsZSkpO3JldHVybiBuKm4qKDMtMipuKX1mdW5jdGlvbiBPKGUpe2NvbnN0IG49ZVs1XTtyZXR1cm4gWi5maW5kKCh7ZW5kczpzfSk9PnNbMF09PT1uWzBdJiZzWzFdPT09blsxXSYmc1syXT09PW5bbi5sZW5ndGgtMl0mJnNbM109PT1uW24ubGVuZ3RoLTFdKX1jbGFzcyBQe2NvbnN0cnVjdG9yKG4scyl7dyh0aGlzLCJzdGFydCIpO3codGhpcywiZW5kIik7dyh0aGlzLCJvdXRlciIpO3codGhpcywicG9pbnRzIixbXSk7dyh0aGlzLCJzbG9wZXMiKTt3KHRoaXMsImhhbGZXaWR0aCIpO3RoaXMucHJvZmlsZT1zLHRoaXMuaGFsZldpZHRoPW5bM10vMjAsdGhpcy5vdXRlcj10aGlzLmhhbGZXaWR0aCtZKyhuWzBdPDM/MjA6MTIpO2NvbnN0e2FuY2hvcnM6dCx0aWU6YX09czt0aGlzLnN0YXJ0PXRbMF1bMF0tYSx0aGlzLmVuZD10W3QubGVuZ3RoLTFdWzBdK2E7Y29uc3QgaT10LnNsaWNlKDEpLm1hcCgoW2gsY10sbyk9PihjLXRbb11bMV0pLyhoLXRbb11bMF0pKTt0aGlzLnNsb3Blcz1baVswXV07Zm9yKGxldCBoPTE7aDxpLmxlbmd0aDtoKyspe2NvbnN0IGM9aVtoLTFdLG89aVtoXTt0aGlzLnNsb3Blcy5wdXNoKGMqbz4wPzIqYypvLyhjK28pOjApfXRoaXMuc2xvcGVzLnB1c2goaVtpLmxlbmd0aC0xXSk7Y29uc3QgbD1uWzVdO2xldCByPTA7Zm9yKGxldCBoPTI7aDxsLmxlbmd0aDtoKz0yKXtjb25zdCBjPWxbaC0yXS8xMCxvPWxbaC0xXS8xMCxwPWxbaF0vMTAtYyx1PWxbaCsxXS8xMC1vLGY9TWF0aC5oeXBvdChwLHUpO2lmKGYmJnIrZj49dGhpcy5zdGFydCYmcjw9dGhpcy5lbmQpe2NvbnN0IHg9TWF0aC5tYXgodGhpcy5zdGFydCxyKSxNPU1hdGgubWluKHRoaXMuZW5kLHIrZik7Zm9yKGNvbnN0IGQgb2YgdGhpcy5wb2ludHMubGVuZ3RoP1tNXTpbeCxNXSl0aGlzLnBvaW50cy5wdXNoKHt4OmMrcCooZC1yKS9mLHo6byt1KihkLXIpL2YsczpkfSl9cis9Zn19d2VpZ2h0KG4pe3JldHVybiBTKE1hdGgubWluKG4tdGhpcy5zdGFydCx0aGlzLmVuZC1uKS90aGlzLnByb2ZpbGUudGllKX1kZWNrTGlmdChuLHMpe3JldHVybiBzKyguMTEtcykqdGhpcy53ZWlnaHQobil9ZWxldmF0aW9uKG4scyl7Y29uc3R7YW5jaG9yczp0fT10aGlzLnByb2ZpbGU7bGV0IGE9MDtmb3IoO2ErMjx0Lmxlbmd0aCYmbj50W2ErMV1bMF07KWErKztjb25zdFtpLGxdPXRbYV0sW3IsaF09dFthKzFdLGM9ci1pLG89KG4taSkvYztyZXR1cm4obzwwP2wrKG4taSkqdGhpcy5zbG9wZXNbYV06bz4xP2grKG4tcikqdGhpcy5zbG9wZXNbYSsxXTpsKyhoLWwpKlMobykrYypvKigxLW8pKigoMS1vKSp0aGlzLnNsb3Blc1thXS1vKnRoaXMuc2xvcGVzW2ErMV0pKS1NYXRoLmFicyhzKSpMfWdyb3VuZChuLHMsdCxhLGk9MCl7Y29uc3QgbD1uLmJhc2VZQXQocyx0KSxyPXRoaXMud2VpZ2h0KGEpO3JldHVybiBsKyh0aGlzLmVsZXZhdGlvbihhLGkpLWwpKnJ9c2hvdWxkZXIobixzLHQpe2xldCBhPXRoaXMub3V0ZXIqKjIsaT0wO2ZvcihsZXQgYz0xO2M8dGhpcy5wb2ludHMubGVuZ3RoO2MrKyl7Y29uc3Qgbz10aGlzLnBvaW50c1tjLTFdLHA9dGhpcy5wb2ludHNbY10sdT1wLngtby54LGY9cC56LW8ueix4PU1hdGgubWF4KDAsTWF0aC5taW4oMSwoKG4tby54KSp1KyhzLW8ueikqZikvKHUqdStmKmZ8fDEpKSksTT0obi1vLngteCp1KSoqMisocy1vLnoteCpmKSoqMjtNPGEmJihhPU0saT1vLnMrKHAucy1vLnMpKngpfWNvbnN0IGw9dGhpcy53ZWlnaHQoaSk7aWYoIWwpcmV0dXJuIHQ7Y29uc3Qgcj1NYXRoLnNxcnQoYSksaD1TKCh0aGlzLm91dGVyLXIpLyh0aGlzLm91dGVyLXRoaXMuaGFsZldpZHRoLVkpKTtyZXR1cm4gdCsodGhpcy5lbGV2YXRpb24oaSxyKS10KSpsKmh9fWZ1bmN0aW9uIFcoZSl7Y29uc3Qgbj1PKGUpO3JldHVybiBuJiZuZXcgUChlLG4pfWZ1bmN0aW9uIEgoZSxuKXtjb25zdCBzPVtdO2Zvcihjb25zdCBhIG9mIG4pe2NvbnN0IGk9VyhhKTtpZighaXx8aS5wb2ludHMubGVuZ3RoPDIpY29udGludWU7Y29uc3QgbD1pLnBvaW50cy5tYXAobz0+by54KSxyPWkucG9pbnRzLm1hcChvPT5vLnopLGg9aS5vdXRlcixjPXtpMDpNYXRoLm1heCgwLE1hdGguZmxvb3IoKE1hdGgubWluKC4uLmwpLWgtZS54TWluKS9lLmR4KSksaTE6TWF0aC5taW4oZS5ueC0xLE1hdGguY2VpbCgoTWF0aC5tYXgoLi4ubCkraC1lLnhNaW4pL2UuZHgpKSxqMDpNYXRoLm1heCgwLE1hdGguZmxvb3IoKE1hdGgubWluKC4uLnIpLWgtZS56TWluKS9lLmR6KSksajE6TWF0aC5taW4oZS5uei0xLE1hdGguY2VpbCgoTWF0aC5tYXgoLi4ucikraC1lLnpNaW4pL2UuZHopKSxncmFkZXM6W2ldfTtmb3IobGV0IG89MDtvPHMubGVuZ3RoOyl7Y29uc3QgcD1zW29dO2lmKGMuaTA+PXAuaTF8fHAuaTA+PWMuaTF8fGMuajA+PXAuajF8fHAuajA+PWMuajEpe28rKztjb250aW51ZX1jLmkwPU1hdGgubWluKGMuaTAscC5pMCksYy5pMT1NYXRoLm1heChjLmkxLHAuaTEpLGMuajA9TWF0aC5taW4oYy5qMCxwLmowKSxjLmoxPU1hdGgubWF4KGMuajEscC5qMSksYy5ncmFkZXMucHVzaCguLi5wLmdyYWRlcykscy5zcGxpY2UobywxKSxvPTB9cy5wdXNoKGMpfWNvbnN0IHQ9TWF0aC5jZWlsKE1hdGgubWF4KGUuZHgsZS5keikvMyk7cmV0dXJuIHMubWFwKCh7aTA6YSxpMTppLGowOmwsajE6cixncmFkZXM6aH0pPT57Y29uc3QgYz1lLnhNaW4rYSplLmR4LG89ZS56TWluK2wqZS5keixwPWUueE1pbitpKmUuZHgsdT1lLnpNaW4rciplLmR6LGY9KGktYSkqdCsxLHg9KHItbCkqdCsxLE09ZS5keC90LGQ9ZS5kei90LGI9bmV3IEZsb2F0MzJBcnJheShmKngpO2ZvcihsZXQgej0wO3o8eDt6KyspZm9yKGxldCBtPTA7bTxmO20rKyl7Y29uc3QgeT1jK20qTSxBPW8reipkLGc9ZS5iYXNlWUF0KHksQSk7bGV0IHY9ZztpZihtPjAmJm08Zi0xJiZ6PjAmJno8eC0xKWZvcihjb25zdCBDIG9mIGgpdis9Qy5zaG91bGRlcih5LEEsZyktZztiW3oqZittXT12fXJldHVybntpMDphLGkxOmksajA6bCxqMTpyLHhNaW46Yyx6TWluOm8seE1heDpwLHpNYXg6dSxueDpmLG56OngsZHg6TSxkejpkLHk6Yn19KX1jb25zdCBUPTEyODtmdW5jdGlvbiBxKGUsbixzLHQsYSl7Y29uc3R7bng6aSxuejpsfT1lLHI9TWF0aC5taW4oVCsxLGktbiksaD1NYXRoLm1pbihUKzEsbC1zKSxjPW5ldyBGbG9hdDMyQXJyYXkocipoKjMpLG89bmV3IEZsb2F0MzJBcnJheShyKmgqMykscD1uZXcgRmxvYXQzMkFycmF5KHIqaCoyKTtmb3IobGV0IHg9czt4PHMraDt4KyspZm9yKGxldCBNPW47TTxuK3I7TSsrKXtjb25zdCBkPSh4LXMpKnIrTS1uLGI9ZS54TWluK00qZS5keCx6PWUuek1pbit4KmUuZHo7Y1tkKjNdPWIsY1tkKjMrMV09ZS55W3gqaStNXSxjW2QqMysyXT16LHBbZCoyXT0oYit0LnNpemVYLzIpL3Quc2l6ZVgscFtkKjIrMV09MS0oeit0LnNpemVaLzIpL3Quc2l6ZVo7Y29uc3QgbT1lIT09dCYmKE09PT0wfHx4PT09MHx8TT09PWktMXx8eD09PWwtMSkseT1tPyh0LmJhc2VZQXQoYit0LmR4LHopLXQuYmFzZVlBdChiLXQuZHgseikpLygyKnQuZHgpOihlLnlbeCppK01hdGgubWluKE0rMSxpLTEpXS1lLnlbeCppK01hdGgubWF4KE0tMSwwKV0pLygyKmUuZHgpLEE9bT8odC5iYXNlWUF0KGIseit0LmR6KS10LmJhc2VZQXQoYix6LXQuZHopKS8oMip0LmR6KTooZS55W01hdGgubWluKHgrMSxsLTEpKmkrTV0tZS55W01hdGgubWF4KHgtMSwwKSppK01dKS8oMiplLmR6KSxnPU1hdGguaHlwb3QoeSwxLEEpO29bZCozXT0teS9nLG9bZCozKzFdPTEvZyxvW2QqMysyXT0tQS9nfWNvbnN0IHU9bmV3IFVpbnQxNkFycmF5KChyLTEpKihoLTEpKjYpO2xldCBmPTA7Zm9yKGxldCB4PTA7eDxoLTE7eCsrKWZvcihsZXQgTT0wO008ci0xO00rKyl7aWYoYS5zb21lKHk9Pm4rTT49eS5pMCYmbitNPHkuaTEmJnMreD49eS5qMCYmcyt4PHkuajEpKWNvbnRpbnVlO2NvbnN0IGQ9eCpyK00sYj1kKzEsej1kK3IsbT16KzE7dVtmKytdPWQsdVtmKytdPXosdVtmKytdPWIsdVtmKytdPWIsdVtmKytdPXosdVtmKytdPW19cmV0dXJue3BvczpjLG5vcjpvLHV2OnAsaWR4OmY9PT11Lmxlbmd0aD91OnUuc2xpY2UoMCxmKX19ZnVuY3Rpb24gQihlKXtjb25zdCBuPVtdO2Zvcihjb25zdCBzIG9mW2UsLi4uZS5wYXRjaGVzXSlmb3IobGV0IHQ9MDt0PHMubnotMTt0Kz1UKWZvcihsZXQgYT0wO2E8cy5ueC0xO2ErPVQpe2NvbnN0IGk9cz09PWU/ZS5wYXRjaGVzLmZpbHRlcihsPT5hPGwuaTEmJmErVD5sLmkwJiZ0PGwuajEmJnQrVD5sLmowKTpbXTtuLnB1c2gocShzLGEsdCxlLGkpKX1yZXR1cm4gbn1mdW5jdGlvbiBGKGUpe2NvbnN0IG49YXRvYihlKSxzPW5ldyBVaW50OEFycmF5KG4ubGVuZ3RoKTtmb3IobGV0IHQ9MDt0PG4ubGVuZ3RoO3QrKylzW3RdPW4uY2hhckNvZGVBdCh0KTtyZXR1cm4gbmV3IEludDE2QXJyYXkocy5idWZmZXIsMCxzLmxlbmd0aD4+MSl9YXN5bmMgZnVuY3Rpb24gVihlKXtjb25zdCBuPW5ldyBVaW50OEFycmF5KGUpLHM9bmV3IERhdGFWaWV3KGUpO2xldCB0PTgsYT0wLGk9MCxsPTAscj0wLGg9MDtjb25zdCBjPVtdO2Zvcig7dDxuLmxlbmd0aDspe2NvbnN0IE09cy5nZXRVaW50MzIodCksZD1TdHJpbmcuZnJvbUNoYXJDb2RlKG5bdCs0XSxuW3QrNV0sblt0KzZdLG5bdCs3XSk7aWYoZD09PSJJSERSIilhPXMuZ2V0VWludDMyKHQrOCksaT1zLmdldFVpbnQzMih0KzEyKSxsPW5bdCsxNl0scj1uW3QrMTddLGg9blt0KzIwXTtlbHNlIGlmKGQ9PT0iSURBVCIpYy5wdXNoKG4uc3ViYXJyYXkodCs4LHQrOCtNKSk7ZWxzZSBpZihkPT09IklFTkQiKWJyZWFrO3QrPTEyK019aWYobCE9PTh8fHIhPT0yJiZyIT09Nnx8aCl0aHJvdyBuZXcgRXJyb3IoIlVuc3VwcG9ydGVkIHRlcnJhaW4gaW1hZ2UgZm9ybWF0Iik7Y29uc3Qgbz1yPT09Mj8zOjQscD1uZXcgQmxvYihjKS5zdHJlYW0oKS5waXBlVGhyb3VnaChuZXcgRGVjb21wcmVzc2lvblN0cmVhbSgiZGVmbGF0ZSIpKSx1PW5ldyBVaW50OEFycmF5KGF3YWl0IG5ldyBSZXNwb25zZShwKS5hcnJheUJ1ZmZlcigpKSxmPWEqbyx4PW5ldyBVaW50OEFycmF5KGYqaSk7Zm9yKGxldCBNPTA7TTxpO00rKyl7Y29uc3QgZD11W00qKGYrMSldLGI9TSooZisxKSsxLHo9TSpmO2ZvcihsZXQgbT0wO208ZjttKyspe2NvbnN0IHk9bT49bz94W3orbS1vXTowLEE9TT4wP3hbei1mK21dOjAsZz1tPj1vJiZNPjA/eFt6LWYrbS1vXTowO2xldCB2PXVbYittXTtpZihkPT09MSl2Kz15O2Vsc2UgaWYoZD09PTIpdis9QTtlbHNlIGlmKGQ9PT0zKXYrPXkrQT4+MTtlbHNlIGlmKGQ9PT00KXtjb25zdCBDPU1hdGguYWJzKEEtZyksST1NYXRoLmFicyh5LWcpLFI9TWF0aC5hYnMoeStBLTIqZyk7dis9Qzw9SSYmQzw9Uj95Okk8PVI/QTpnfXhbeittXT12JjI1NX19cmV0dXJue3dpZHRoOmEsaGVpZ2h0OmksY2hhbm5lbHM6byxkYXRhOnh9fWFzeW5jIGZ1bmN0aW9uIEcoZSxuLHMpe2NvbnN0W3QsYV09YXdhaXQgUHJvbWlzZS5hbGwoW2ZldGNoKGUudG93bix7c2lnbmFsOnN9KS50aGVuKHU9PntpZighdS5vayl0aHJvdyBuZXcgRXJyb3IoIkNvdWxkIG5vdCBsb2FkIHRoZSB0b3duIGRhdGEiKTtyZXR1cm4gdS5qc29uKCl9KS50aGVuKHU9PihuKCJTdHJlZXRzIGFuZCBidWlsZGluZ3MiKSx1KSksZmV0Y2goZS5oZWlnaHQse3NpZ25hbDpzfSkudGhlbih1PT57aWYoIXUub2spdGhyb3cgbmV3IEVycm9yKCJDb3VsZCBub3QgbG9hZCB0aGUgdGVycmFpbiIpO3JldHVybiB1LmFycmF5QnVmZmVyKCl9KS50aGVuKFYpLnRoZW4odT0+KG4oIlRlcnJhaW4iKSx1KSldKTtpZihzLmFib3J0ZWQpdGhyb3cgcy5yZWFzb247Y29uc3R7bWV0YTppfT10LGw9YS53aWR0aCphLmhlaWdodCxyPW5ldyBGbG9hdDMyQXJyYXkobCksaD1uZXcgRmxvYXQzMkFycmF5KGwpLGM9YS5jaGFubmVscztmb3IobGV0IHU9MDt1PGw7dSsrKXJbdV09KGEuZGF0YVt1KmNdPDw4fGEuZGF0YVt1KmMrMV0pL2kuaGVpZ2h0U2NhbGUtaS5oZWlnaHRPZmZzZXQsaFt1XT1hLmRhdGFbdSpjKzJdLzI1NTtjb25zdCBvPW5ldyBqKHIsaCxpLmdyaWRbMF0saS5ncmlkWzFdLGkuc2l6ZVswXSxpLnNpemVbMV0sZS50ZXJyYWluU3RlcCkscD1IKG8sdC5yb2Fkcyk7cmV0dXJuIG8ucGF0Y2hlcy5wdXNoKC4uLnApLHt0b3duOnsuLi50LGhvdXNlczpGKHQuaG91c2VzKSxjYWJpbnM6Rih0LmNhYmlucyksY2FyczpGKHQuY2FycyksdHJlZXM6Rih0LnRyZWVzKX0saGVpZ2h0czpyLGV4cG9zdXJlOmgsc3VyZmFjZTpvLnksdGVycmFpblBhdGNoZXM6cCx0ZXJyYWluVGlsZXM6QihvKX19Y29uc3QgRD1zZWxmLFg9bmV3IE1hcDtmdW5jdGlvbiBVKGUsbj1bXSl7RC5wb3N0TWVzc2FnZShlLG4pfWZ1bmN0aW9uIE4oZSl7cmV0dXJuIGUubWFwKG49Pm4uYnVmZmVyKX1ELm9ubWVzc2FnZT1hc3luYyBlPT57dmFyIGk7Y29uc3Qgbj1lLmRhdGEse2lkOnN9PW47aWYoImNhbmNlbCJpbiBuKXsoaT1YLmdldChzKSk9PW51bGx8fGkuYWJvcnQoKTtyZXR1cm59Y29uc3QgdD1uZXcgQWJvcnRDb250cm9sbGVyLHtzaWduYWw6YX09dDtYLnNldChzLHQpO3RyeXtjb25zdHtqb2I6bH09bjtpZihsLmtpbmQ9PT0id29ybGQiKXtjb25zdCByPWF3YWl0IEcobC5zb3VyY2UseD0+VSh7aWQ6cyxwcm9ncmVzczp4fSksYSkse3Rvd246aCxoZWlnaHRzOmMsZXhwb3N1cmU6byxzdXJmYWNlOnAsdGVycmFpblBhdGNoZXM6dSx0ZXJyYWluVGlsZXM6Zn09cjtVKHtpZDpzLHZhbHVlOnJ9LE4oW2MsbyxwLGguaG91c2VzLGguY2FiaW5zLGguY2FycyxoLnRyZWVzLC4uLnUubWFwKCh7eTp4fSk9PngpLC4uLmYuZmxhdE1hcCgoe3Bvczp4LG5vcjpNLHV2OmQsaWR4OmJ9KT0+W3gsTSxkLGJdKV0pKX1lbHNle2NvbnN0IHI9YXdhaXQgZmV0Y2gobC51cmwse3NpZ25hbDphfSk7aWYoIXIub2spdGhyb3cgbmV3IEVycm9yKCJDb3VsZCBub3QgbG9hZCBncm91bmQgZGV0YWlsIik7Y29uc3QgaD1hd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChhd2FpdCByLmJsb2IoKSx7aW1hZ2VPcmllbnRhdGlvbjoiZmxpcFkiLHByZW11bHRpcGx5QWxwaGE6Im5vbmUifSk7aWYoYS5hYm9ydGVkKWguY2xvc2UoKTtlbHNlIHRyeXtVKHtpZDpzLHZhbHVlOmh9LFtoXSl9Y2F0Y2goYyl7dGhyb3cgaC5jbG9zZSgpLGN9fX1jYXRjaChsKXthLmFib3J0ZWR8fFUoe2lkOnMsZXJyb3I6bCBpbnN0YW5jZW9mIEVycm9yP2wubWVzc2FnZTpTdHJpbmcobCl9KX1maW5hbGx5e1guZGVsZXRlKHMpfX19KSgpOwo=",SM=i=>Uint8Array.from(atob(i),t=>t.charCodeAt(0)),dd=typeof self<"u"&&self.Blob&&new Blob([SM(ud)],{type:"text/javascript;charset=utf-8"});function yM(i){let t;try{if(t=dd&&(self.URL||self.webkitURL).createObjectURL(dd),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;base64,"+ud,{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}class bM{constructor(){Y(this,"worker");Y(this,"pending",new Map);Y(this,"nextId",0);try{const t=new yM;this.worker=t,t.onmessage=e=>{const n=e.data,s=this.pending.get(n.id);s?s.receive(n):"value"in n&&"close"in n.value&&n.value.close()},t.onerror=e=>{e.preventDefault(),this.close(new Error("Could not start the model worker"))},t.onmessageerror=()=>this.close(new Error("Could not receive data from the model worker"))}catch{}}async run(t,e,n,s){if(n.aborted)throw n.reason;if(this.worker)try{return await this.request(this.worker,t,n,s)}catch{if(n.aborted)throw n.reason}return e()}close(t=new DOMException("Model closed","AbortError")){var e;(e=this.worker)==null||e.terminate(),this.worker=void 0;for(const n of this.pending.values())n.reject(t)}request(t,e,n,s){return new Promise((r,o)=>{const a=++this.nextId,l=()=>{this.pending.delete(a),n.removeEventListener("abort",c)},c=()=>{l(),t.postMessage({id:a,cancel:!0}),o(n.reason)},d=h=>{l(),o(h)};this.pending.set(a,{receive:h=>{if("progress"in h){s==null||s(h.progress);return}l(),"error"in h?o(new Error(h.error)):r(h.value)},reject:d}),n.addEventListener("abort",c,{once:!0});try{t.postMessage({id:a,job:e})}catch(h){d(h)}})}}class fd{constructor(t,e){Y(this,"bounds",new Ai);Y(this,"level",-1);this.levels=t;for(const s of t)for(const r of s)r.computeBoundingBox(),this.bounds.union(r.boundingBox),r.castShadow=!0,e.add(r);const n=this.bounds.getBoundingSphere(new Vi);for(const s of t.flat())s.boundingSphere=n,s.visible=!1}update(t,e,n){const s=this.bounds.distanceToPoint(t),[r,o,a]=n,l=a+e*8,c=h=>this.level<0?1:this.level<=h?1.1:.9,d=s<=r*c(0)?0:s<=o*c(1)?1:s<=l*c(2)?2:3;if(d!==this.level){for(const h of this.levels[this.level]??[])h.visible=!1;for(const h of this.levels[d]??[])h.visible=!0;this.level=d}}}const pd=.25,Bs=[16053490,16053490,16053490,13225168,10725291,5593438,2040100,2838410,11020586,2054728,14266938,8368595],md=[15223869,3113154,15909424,3843690,16777215,9329589,15764004,2042422,15231654,4899008],fi=[14826299,15764004,15909424,3715691,3117008,13651872,3720896,16053490].map(U);function gd(){return ec(0,!1)}function Ql(i){const t=new oe,e=new oe;return nc(i,t,e,U(16777215)),{body:t.build(),trim:e.build()}}function tc(i){const t=i===1,e=i===2,n=e?-2.3:-2.18,s=e?2.22:2.18,r=e?1.035:t?.99:.93;return{wagon:t,ute:e,tail:n,nose:s,sill:r,belt:a=>{const l=Math.max(0,(n+.58-a)/.58,(a-s+.55)/.55),c=a<0?t||e?.045:.095:.14,d=r-l*c;return{width:.88-.13*l,shoulder:d-.105,top:d}}}}function ec(i,t){const e=new oe,{wagon:n,ute:s,tail:r,nose:o,sill:a}=tc(i),l=U(16777215),c=U(6584713),d=U(2236966),h=s?1.63:n?1.6:1.49,u=s?-.37:n?-1.72:-.74,f=s?.64:.42,p=(x,m,g,_,M,v,b,w)=>{e.quad(-x,m,_,x,m,_,.65,M,b,-.65,M,b,w),e.quad(x,m,g,-x,m,g,-.65,M,v,.65,M,v,w),e.quad(x,m,_,x,m,g,.65,M,v,.65,M,b,w),e.quad(-x,m,g,-x,m,_,-.65,M,b,-.65,M,v,w),e.quad(-.65,M,b,.65,M,b,.65,M,v,-.65,M,v,l)};if(t)p(.88,.3,r,o,h,u,f,l);else{e.box(-.88,.3,r,.88,a,o,l),p(.77,a,s?-.52:n?-1.95:-1.47,1.02,h,u,f,c);for(const x of[-1.35,1.38])e.quad(.9,.02,x+.32,.9,.02,x-.32,.9,.57,x-.32,.9,.57,x+.32,d),e.quad(-.9,.02,x-.32,-.9,.02,x+.32,-.9,.57,x+.32,-.9,.57,x-.32,d)}return e.build()}function xd(i,t,e,n,s,r,o){const a=t>0?r-.025:r-.1,l=t<0&&(i===1||i===2);return[[e*.42,a,n],[e*(s-.022),a-(l?.13:0),n],[e*(s-.064),o-.025,n],[e*(t>0?.31:.43),o-.052,n]]}const _d=12;function Md(i){const t=new oe,e=tc(i);for(const s of[1,-1])for(const r of[1,-1]){const o=i<0?r*2.1:r>0?e.nose:e.tail,a=o+r*.02;let l;if(i<0){const c=r>0?.755:.59,d=.865;l=[[s*c,.62,a],[s*d,.62,a],[s*d,.77,a],[s*c,.77,a]]}else{const{width:c,shoulder:d,top:h}=e.belt(o),[u,f,p,x]=xd(i,r,s,a,c,d,h),m=(g,_,M)=>[g[0]+(_[0]-g[0])*M,g[1]+(_[1]-g[1])*M,a];l=[m(u,f,.59),m(u,f,.99),m(x,p,.99),m(x,p,.59)]}s!==r&&l.reverse(),t.quad(...l[0],...l[1],...l[2],...l[3],U(16777215))}const n=new te(t.build(),new xn({color:16752666,toneMapped:!1}));return n.visible=!1,n}function vd(i,t){i.visible=t===-1||t===1,i.visible&&(i.name=t<0?"left-turn-indicator":"right-turn-indicator",i.geometry.setDrawRange(t<0?0:_d,_d))}function nc(i,t,e,n,s){const r=U(4413799),o=U(3425876),a=U(2635588),l=U(8624550),c=U(6651533),d=s??e,h=U(2105636),u=U(2566960),f=U(11252924),p=U(5793135),x=(X,K,z,q,nt,ht,et=!1,it=0)=>{et?X.quad(...nt,...q,...z,...K,ht,it):X.quad(...K,...z,...q,...nt,ht,it)},{wagon:m,ute:g,tail:_,nose:M,sill:v,belt:b}=tc(i),w=g||m?1.55:1.42,S=g?1.63:m?1.6:1.49,y=g?-.52:m?-1.95:-1.47,E=g?-.37:m?-1.72:-.74,T=1.02,R=g?.64:.42,P=-1.35,N=1.38,L=.34,F=.387,I=[_,_+.58,M-.55,M];for(const X of[P,N])for(let K=0;K<=5;K++)I.push(X-F*Math.cos(Math.PI*K/5));I.sort((X,K)=>X-K);const O=X=>{const K=Math.min(Math.abs(X-P),Math.abs(X-N));return K<F+1e-5?L+Math.sqrt(Math.max(0,F*F-K*K)):.3};for(const X of[-1,1])for(let K=1;K<I.length;K++){const z=I[K-1],q=I[K],nt=b(z),ht=b(q);x(t,[X*nt.width,O(z),z],[X*nt.width,nt.shoulder,z],[X*ht.width,ht.shoulder,q],[X*ht.width,O(q),q],n,X<0)}const j=[_,_+.15,_+.58,y,T,M-.55,M].sort((X,K)=>X-K);for(let X=1;X<j.length;X++){const K=j[X-1],z=j[X],q=b(K),nt=b(z);for(const Rt of[-1,1])x(t,[Rt*q.width,q.shoulder,K],[Rt*(q.width-.08),q.top,K],[Rt*(nt.width-.08),nt.top,z],[Rt*nt.width,nt.shoulder,z],n,Rt<0);if(K>=y&&z<=T)continue;const ht=g&&K>=_+.15&&z<=y,et=q.width-.08,it=nt.width-.08;if(ht)for(const Rt of[-1,1])x(t,[Rt*et,q.top,K],[Rt*.665,q.top,K],[Rt*.665,nt.top,z],[Rt*it,nt.top,z],n,Rt<0),x(e,[Rt*.665,q.top,K],[Rt*.665,.7,K],[Rt*.665,.7,z],[Rt*.665,nt.top,z],u,Rt<0);else x(t,[-et,q.top,K],[-it,nt.top,z],[it,nt.top,z],[et,q.top,K],n)}if(g){const X=_+.15,K=y;x(e,[-.665,.7,X],[-.665,.7,K],[.665,.7,K],[.665,.7,X],U(4343627));for(const[z,q]of[[X,1],[K,0]])x(e,[-.665,.7,z],[.665,.7,z],[.665,b(z).top,z],[-.665,b(z).top,z],u,!q)}const V=(X,K,z)=>{const q=y+(E-y)*z,nt=T+(R-T)*z;return[X*(.8-.145*z),v+(w-v)*z,q+(nt-q)*K]},G=m?[0,.07,.275,.32,.56,.6,.935,1]:g?[0,.12,.33,.395,.925,1]:[0,.09,.47,.525,.925,1];for(const X of[-1,1]){const K=(z,q,nt,ht,et,it)=>x(et,V(X,z,nt),V(X,z,ht),V(X,q,ht),V(X,q,nt),it,X<0);K(0,1,0,.07,t,n),K(0,1,.93,1,t,n);for(let z=1;z<G.length;z++){const q=z%2===0,nt=z!==1&&z!==G.length-1,ht=d.vertexCount;K(G[z-1],G[z],.07,.93,q?d:nt?e:t,q?z===2?a:o:nt?u:n),q&&d.gradientY(ht,v,w,z===2?a:o,z===2?c:l)}}for(const X of[-1,1])x(t,V(X,0,1),[X*.58,S,E+.045],[X*.58,S,R-.045],V(X,1,1),n,X<0);x(t,[-.58,S,E+.045],[-.58,S,R-.045],[.58,S,R-.045],[.58,S,E+.045],n);for(const X of[0,1]){const K=X?R-.045:E+.045;x(t,V(-1,X,1),V(1,X,1),[.58,S,K],[-.58,S,K],n,!X);const z=(ht,et)=>[(ht*2-1)*(.8-.145*et),v+(w-v)*et,V(1,X,et)[2]],q=(ht,et,it,Rt,ut,Mt)=>x(ht,z(et,Rt),z(it,Rt),z(it,ut),z(et,ut),Mt,!X),nt=d.vertexCount;s?(q(t,0,.055,0,1,n),q(t,.945,1,0,1,n),q(e,.055,.945,0,.06,u),q(e,.055,.945,.94,1,u),q(d,.055,.945,.06,.94,X?r:a)):q(d,0,1,0,1,X?r:a),d.gradientY(nt,v,w,X?r:a,X?l:c)}if(s){const K=U(3620678),z=U(4935251),q=U(3685700),nt=ht=>{for(const et of[-.38,.38])e.box(et-.23,.695,ht-.22,et+.23,v-.06,ht+.27,z),e.box(et-.23,v-.085,ht-.21,et+.23,v+.24,ht-.075,z),e.box(et-.103,v+.235,ht-.185,et+.103,v+.36,ht-.08,q)};e.box(-.7,.6829999999999999,y+.05,.7,.695,T-.05,U(2698545)),e.box(-.71,v-.23,T-.4,.71,v+.022,T-.14,K),e.box(-.6,v,T-.43,-.22,v+.105,T-.26,u),nt((y+T)/2+.17),g||nt(y+.62)}if(m)for(const X of[-1,1]){const K=X*.56;e.box(K-.032,S,E+.17,K+.032,1.67,R-.21,u)}for(const X of[-1,1]){const K=X>0?M:_,{width:z,shoulder:q,top:nt}=b(K);if(g&&X<0){const it=[[-z,.3,K],[z,.3,K],[z,q,K],[-z,q,K]],Rt=[[-.41,.59,K],[.41,.59,K],[.46,.74,K],[-.46,.74,K]],ut=[[-.39,.612,K+.024],[.39,.612,K+.024],[.43,.716,K+.024],[-.43,.716,K+.024]];for(let Mt=0;Mt<4;Mt++){const Ft=(Mt+1)%4;x(t,it[Mt],it[Ft],Rt[Ft],Rt[Mt],n,!0),x(t,Rt[Mt],Rt[Ft],ut[Ft],ut[Mt],n,!0)}x(t,ut[0],ut[1],ut[2],ut[3],Wt(n,.88),!0)}else x(t,[-z,.3,K],[z,.3,K],[z,q,K],[-z,q,K],n,X<0);x(t,[-z,q,K],[z,q,K],[z-.08,nt,K],[-z+.08,nt,K],n,X<0);const ht=K+X*.008;for(const it of[-1,1])x(e,...xd(i,X,it,ht,z,q,nt),X>0?U(14477800):U(12003881),it!==X,X>0?1.1:.6);X>0?x(e,[-.48,.39,ht],[.48,.39,ht],[.53,.54,ht],[-.53,.54,ht],u):g&&x(e,[-.12,.76,ht],[.12,.76,ht],[.12,.8,ht],[-.12,.8,ht],u,!0);const et=K+X*.012;x(e,[-.2,.44,et],[.2,.44,et],[.2,.55,et],[-.2,.55,et],U(14014927),X<0)}e.box(-.7,.23,_+.22,.7,.69,M-.22,u,null);const Z=(X,K,z,q)=>[X,L+q*Math.sin(z)*Math.sin(.4*Math.PI),K+q*Math.cos(z)];for(const X of[-1,1])for(const K of[P,N]){const z=X*.69,q=X*.9,nt=X*.912;for(let ht=0;ht<8;ht++){const et=ht*Math.PI/4,it=(ht+1)*Math.PI/4,Rt=Z(q,K,et,.34),ut=Z(q,K,it,.34);x(e,Z(z,K,et,.34),Rt,ut,Z(z,K,it,.34),h,X<0),X>0?e.tri(q,L,K,...ut,...Rt,h):e.tri(q,L,K,...Rt,...ut,h)}for(let ht=0;ht<6;ht++){const et=Z(nt,K,ht*Math.PI/3,.188),it=Z(nt,K,(ht+1)*Math.PI/3,.188),Rt=ht%2?f:p;X>0?e.tri(X*.905,L,K,...it,...et,Rt):e.tri(X*.905,L,K,...et,...it,Rt)}}}function Wo(i,t,e,n,s,r){const o=-t/2,a=t*.12,l=t/2,c=e/2,d=c*.5,h=Wt(s,.72);for(const f of[-1,1])f>0?(i.quad(d,0,o,c*.88,n,o,c,n,a,d,0,a,s),i.quad(d,0,a,c,n,a,0,n*1.12,l,0,.1,l*.86,s)):(i.quad(-d,0,a,-c,n,a,-c*.88,n,o,-d,0,o,s),i.quad(0,.1,l*.86,0,n*1.12,l,-c,n,a,-d,0,a,s));i.quad(-d,0,o,-c*.88,n,o,c*.88,n,o,d,0,o,h),i.quad(-d,0,o,d,0,o,d,0,a,-d,0,a,h),i.tri(-d,0,a,d,0,a,0,.1,l*.86,h);const u=n*.8;i.quad(-c*.84,u,o+.05,c*.84,u,o+.05,c*.95,u,a,-c*.95,u,a,r),i.tri(-c*.95,u,a,c*.95,u,a,0,u,l*.95,r)}function wM(i,t){const e=new oe,n=U(16119280);if(i===0)Wo(e,4.6,1.9,.75,t()<.5?U(12962767):fi[Math.floor(t()*6)],U(10133668)),e.box(-.2,.55,-2.65,.2,1.25,-2.25,U(1974822)),e.box(-.75,.6,-.9,.75,.72,-.5,U(9138002)),e.box(-.75,.6,.4,.75,.72,.8,U(9138002));else if(i===1){const s=fi[Math.floor(t()*fi.length)];Wo(e,7.4,2.7,1.25,n,U(15131350)),e.box(-1.37,.72,-3.7,1.37,.9,3,s,null),e.box(-1.05,1,-1.2,1.05,2.25,1.9,n,U(15329248)),e.quad(-1,1.45,1.92,1,1.45,1.92,.9,2.2,1.92,-.9,2.2,1.92,U(2240572),.4),e.box(-1.06,1.5,-.9,-1.05,2.1,1.6,U(2240572),null),e.box(1.05,1.5,-.9,1.06,2.1,1.6,U(2240572),null),e.box(-.9,2.25,-1,.9,2.33,1.2,n),e.cyl(0,2.33,-.6,.03,.02,1.6,4,U(9278358))}else Wo(e,9,2.8,1.3,t()<.6?n:U(2377070),U(14208952)),e.box(-.85,1.05,-1.6,.85,1.55,1.6,n,U(15329248)),e.cyl(0,1.05,.9,.08,.05,11.5,5,U(14014682)),e.box(-.06,2.45,-3,.06,2.57,.9,U(14014682)),e.blob(0,2.72,-1.05,.17,.17,1.9,5,3,U(3104666)),e.quad(-.01,12.4,.9,.01,12.4,.9,.01,1.4,4.4,-.01,1.4,4.4,U(10133154));return e.build()}function EM(i){const t=new oe;return Wo(t,4.2,1.5,.55,U(16119280),U(14736588)),t.cyl(0,.45,.5,.04,.03,6,4,U(14014682)),t.tri(.02,6.3,.5,.02,1.1,.45,.6,1.2,-2,i),t.tri(.02,4.6,.6,.3,1,1.9,.02,1,.6,U(16250866)),t.blob(.35,.95,-.9,.22,.4,.22,5,3,U(14238767)),t.build()}function TM(i,t){const e=new oe,n=8,s=9,r=2.6;for(let o=0;o<n;o++){const a=-1.15+o/n*2.3,l=-1.15+(o+1)/n*2.3,c=Math.sin(a)*s*.5,d=Math.cos(a)*s*.42,h=Math.sin(l)*s*.5,u=Math.cos(l)*s*.42,f=o===0||o===n-1||o===3||o===4?t:i;e.quad(c,d,-r/2,h,u,-r/2,h,u,r/2,c,d,r/2,f)}return e.build()}function AM(i,t){const e=new oe;return e.box(-.22,0,-.75,.22,.06,.75,i),e.blob(-.25,.75,0,.2,.62,.22,5,3,t),e.blob(-.42,1.48,0,.13,.14,.13,5,3,U(14264711)),e.build()}function RM(i){const t=new oe;return t.blob(0,.02,0,.27,.05,1.05,6,2,i),t.blob(0,.42,-.1,.2,.4,.18,5,3,U(1976112)),t.blob(0,.9,-.1,.12,.13,.12,5,3,U(14264711)),t.build()}function CM(i){const t=new Map;for(const r of i){if(r.cls>1||!r.name||r.flags)continue;const o=t.get(r.name)??[];o.push(r),t.set(r.name,o)}const e=[],n=(r,o)=>o?[r[r.length-3],r[r.length-1]]:[r[0],r[2]],s=r=>{const o=new Float32Array(r.length);for(let a=0;a<r.length/3;a++)o.set(r.subarray(a*3,a*3+3),r.length-3-a*3);return o};for(const r of t.values()){const o=r.map(l=>l.pts),a=r[0].width;for(;o.length;){let l=Array.from(o.pop()),c=!0;for(;c;){c=!1;for(let f=0;f<o.length;f++){const p=o[f],x=[l[l.length-3],l[l.length-1]],m=[l[0],l[2]],g=(v,b)=>Math.hypot(v[0]-b[0],v[1]-b[1])<2.5;let _=null,M=!0;if(g(x,n(p,!1))?_=p:g(x,n(p,!0))?_=s(p):g(m,n(p,!0))?(_=p,M=!1):g(m,n(p,!1))&&(_=s(p),M=!1),!!_){l=M?l.concat(Array.from(_.subarray(3))):Array.from(_.subarray(0,_.length-3)).concat(l),o.splice(f,1),c=!0;break}}}const d=new Float32Array(l),h=d.length/3,u=new Float32Array(h);for(let f=1;f<h;f++)u[f]=u[f-1]+Math.hypot(d[f*3]-d[f*3-3],d[f*3+2]-d[f*3-1]);u[h-1]>380&&e.push({pts:d,cum:u,length:u[h-1],width:a})}}return e}const Fi=(i,t)=>`${Math.round(i*4)}_${Math.round(t*4)}`;function ic(i,t=2,e=320){if(i.length<=(e<320?24:96)||t===0)return[i];let n=1/0,s=-1/0,r=1/0,o=-1/0;for(const h of i)n=Math.min(n,h.x),s=Math.max(s,h.x),r=Math.min(r,h.z),o=Math.max(o,h.z);const a=s-n,l=o-r;if(Math.max(a,l)<e)return[i];const c=a>l?"x":"z";i.sort((h,u)=>h[c]-u[c]);const d=Math.floor(i.length/2);return[...ic(i.slice(0,d),t-1,e),...ic(i.slice(d),t-1,e)]}class LM{constructor(t,e,n,s,r){Y(this,"group",new $e);Y(this,"afloat",new $e);Y(this,"boats",[]);Y(this,"dinghies",[]);Y(this,"kites",[]);Y(this,"kiteLines");Y(this,"surfers",[]);Y(this,"traffic");Y(this,"trafficTrim");Y(this,"cars",[]);Y(this,"parkedAt",new Map);Y(this,"parkedSets",[]);Y(this,"hiddenCars",new Set);Y(this,"cabinCar");Y(this,"drivenAt",new Map);Y(this,"drivenSets",[]);Y(this,"carMat",Cs());Y(this,"tmpE",new mn);Y(this,"nothing",new re().makeScale(0,0,0));Y(this,"gulls");Y(this,"gullState",[]);Y(this,"tmpM",new re);Y(this,"tmpQ",new Rn);Y(this,"tmpP",new W);Y(this,"up",new W(0,1,0));Y(this,"one",new W(1,1,1));Y(this,"contact");this.ctx=t,this.closeCarShadows=n,this.roadSurfaceAt=s,this.hostCarLift=r,this.group.name="life",this.group.add(this.afloat);const o=this.carMat;this.addParkedCars(),this.addTraffic(o),this.addBoats(o,e),this.addKites(o),this.addSurfers(o,e),this.addPeople(e),this.addGulls(e),this.update(0,0)}setTide(t){this.afloat.position.y=t}sit(t,e,n,s){const r=this.ctx.hf,o=Math.sin(n),a=Math.cos(n),l=(f,p)=>this.roadSurfaceAt(f,p)??r.yAt(f,p),c=l(t+o*1.3,e+a*1.3),d=l(t-o*1.3,e-a*1.3),h=l(t-a*.8,e+o*.8),u=l(t+a*.8,e-o*.8);return this.tmpQ.setFromEuler(this.tmpE.set(-Math.atan2(c-d,2.6),n,Math.atan2(u-h,1.6),"YXZ")),this.tmpM.compose(this.tmpP.set(t,(c+d+h+u)/4+s,e),this.tmpQ,this.one)}carShapes(t){return t?Ql(t-1):{body:gd(),trim:void 0}}makeCabinCar(t,e){const n=new oe,s=new oe;nc(t,n,n,e,s);const r=new $e,o=new te(n.build(),this.carMat);o.name="vehicle-cabin-shell",o.castShadow=o.receiveShadow=!0;const a=new te(s.build(),Mr(new xn({vertexColors:!0,transparent:!0,opacity:.34,depthTest:!0,depthWrite:!1,side:Le,forceSinglePass:!0})));return a.name="vehicle-window-panes",r.add(o,a),{group:r,shell:o,panes:a,remove(){r.removeFromParent(),o.geometry.dispose(),a.geometry.dispose(),a.material.dispose()}}}makeTrafficCar(t,e,n,s,r){const o=new oe,a=U(e);nc(t,o,o,a);const l=o.build(),c=l.boundingBox,d=(x,m)=>Math.min(1,x/m),h=new W(d(n,Math.max(-c.min.x,c.max.x)),d(r,c.max.y),d(s,Math.max(-c.min.z,c.max.z))),u=new te(l,this.carMat);u.name="traffic-stock-shell",u.castShadow=u.receiveShadow=!0,u.scale.copy(h);const f=new $e;f.name=["traffic-sedan","traffic-wagon","traffic-ute"][t],f.matrixAutoUpdate=!1,f.visible=!1,f.add(u),this.group.add(f);let p;return{mesh:f,scale:h,setCabin:x=>{x&&!p&&(p=this.makeCabinCar(t,a),p.group.scale.copy(h),f.add(p.group)),p&&(p.group.visible=x),u.visible=!x},remove:()=>{f.removeFromParent(),l.dispose(),p==null||p.remove()}}}addParkedCars(){const{town:t,hf:e,paths:n}=this.ctx,s=t.cars,r=s.length/Ps,o=[[],[],[],[]],a=new Set,l=(h,u)=>`${Math.round(h/7)}_${Math.round(u/7)}`;for(let h=0;h<r;h++){const u=s[h*Ps]/4,f=s[h*Ps+1]/4;if(this.ctx.isClear(u,f)||!this.ctx.isDetail(u,f)&&this.ctx.roads.nearest(u,f,5.5))continue;const p=1+(s[h*Ps+3]+h)%3;o[p].push({x:u,z:f,heading:s[h*Ps+2]/10*(Math.PI/180),colour:Bs[(s[h*Ps+3]*7+h)%Bs.length]}),a.add(l(u,f))}const c=De(911);let d=0;for(const h of n){if(d>=1100||h.width<3.4||h.width>12)continue;const u=h.pts.length/3;let f=20+c()*60;for(let p=1;p<u;p++){const x=h.pts[(p-1)*3],m=h.pts[(p-1)*3+2],g=h.pts[p*3],_=h.pts[p*3+2],M=Math.hypot(g-x,_-m);if(f-=M,f>0||M<.01)continue;f=28+c()*70;const v=c()<.5?1:-1,b=(g-x)/M,w=(_-m)/M,S=Math.max(h.width/2-.55,1.5),y=g+w*S*v,E=_-b*S*v,T=Math.floor(c()*Bs.length),R=Math.floor(c()*3);if(e.metresAt(y,E)<.6||!e.inside(y,E,30)||this.ctx.isClear(y,E))continue;let P=!0;for(let N=-1;N<=1&&P;N++)for(let L=-1;L<=1;L++)if(a.has(`${Math.round(y/7)+N}_${Math.round(E/7)+L}`)){P=!1;break}P&&(a.add(l(y,E)),o[1+R].push({x:y,z:E,heading:Math.atan2(b*v,w*v),colour:Bs[T]}),d++)}}o.forEach((h,u)=>this.addParkedShape(h,u))}addParkedShape(t,e){if(!t.length)return;const n=Ql(e-1),s=n.body.boundingBox.clone().union(n.trim.boundingBox),r={halfWidth:Math.max(-s.min.x,s.max.x),halfLength:Math.max(-s.min.z,s.max.z),height:s.max.y},o=ec(e-1,!1),a=ec(e-1,!0);for(const l of ic(t,5,140)){const c=this.parkedSets.length,d=new He(n.body,this.carMat,l.length),h=new He(n.trim,this.carMat,l.length),u=new He(o,this.carMat,l.length),f=new He(a,this.carMat,l.length);d.name="parked-car-near-body",h.name="parked-car-near-trim",u.name="parked-car-mid",f.name="parked-car-far";const p=[d,h,u,f],x=[d,u,f],m=new Pt;l.forEach((_,M)=>{const{x:v,z:b,heading:w,colour:S}=_,y=this.sit(v,b,w,.02);for(const E of p)E.setMatrixAt(M,y);m.set(S);for(const E of x)E.setColorAt(M,m);this.parkedAt.set(Fi(v,b),{set:c,k:M,x:v,y:y.elements[13],z:b,heading:w})});const g=new fd([[d,h],[u],[f]],this.group);this.closeCarShadows&&this.addContactShadow(d),this.parkedSets.push({body:d,meshes:p,homeMatrices:Float32Array.from(d.instanceMatrix.array),lod:g,shape:e,envelope:r}),l.forEach(({x:_,z:M})=>{const v=Fi(_,M);this.hiddenCars.has(v)&&this.showParkedCar(this.parkedAt.get(v),!1)})}}addContactShadow(t){this.contact??(this.contact={geometry:new Vn(2.5,5.1).rotateX(-Math.PI/2).translate(0,.027,0),material:new Xe({transparent:!0,depthWrite:!1,vertexShader:`varying vec2 patchUV;
          void main(){patchUV=2.*uv-1.;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 patchUV;
          void main(){float edge=length(max(abs(patchUV)-vec2(.49,.57),0.)/vec2(.50,.42));
            gl_FragColor=vec4(.012,.015,.016,.32*(1.-smoothstep(.05,1.,edge)));
            #include <colorspace_fragment>
          }`})});const e=new He(this.contact.geometry,this.contact.material,t.count);e.name="parked-car-contact",e.instanceMatrix=t.instanceMatrix,e.boundingSphere=t.boundingSphere,t.add(e)}addCars(t){const e=[[],[],[],[]];for(const n of t)e[1+(n.kind??0)%3].push(n);e.forEach((n,s)=>this.addParkedShape(n,s))}setControlledCar(t,e=0){var r,o,a;const n=t===null?void 0:t>=9e5?`t${t-9e5}`:Fi(t,e);if(n&&!this.parkedAt.has(n)&&!this.drivenAt.has(n))return!1;const s=(r=this.cabinCar)==null?void 0:r.key;if(s===n)return!0;(a=(o=this.cabinCar)==null?void 0:o.view)==null||a.remove(),this.cabinCar=n?{key:n}:void 0;for(const l of[s,n]){if(l===void 0)continue;const c=!this.hiddenCars.has(l),d=this.drivenAt.get(l),h=this.parkedAt.get(l);d?this.showDrivenCar(l,d,c):h&&this.showParkedCar(h,c)}return!0}showCabinCar(t,e,n,s){const r=this.cabinCar;if((r==null?void 0:r.key)!==t)return!1;if(n&&!r.view){const o=this.parkedAt.get(t),a=this.drivenAt.get(t),l=o&&this.parkedSets[o.set],c=new Pt;o&&l?l.body.getColorAt(o.k,c):a&&this.drivenSets[a.set].body.getColorAt(a.k,c);const d=(l==null?void 0:l.shape)??(a==null?void 0:a.set)??1,h=r.view=this.makeCabinCar(Math.max(0,d-1),[c.r,c.g,c.b]);h.group.name="native-close-car",h.group.matrixAutoUpdate=!1,this.contact&&(h.contact=new He(this.contact.geometry,this.contact.material,1),h.contact.name="parked-car-contact",h.group.add(h.contact)),this.group.add(h.group)}return r.view&&(r.view.group.visible=n,r.view.group.matrix.copy(e),r.view.group.matrixWorldNeedsUpdate=!0,r.view.contact&&(r.view.contact.visible=s)),!0}showParkedCar(t,e){const n=this.parkedSets[t.set],s=Fi(t.x,t.z),r=this.tmpM.fromArray(n.homeMatrices,t.k*16),o=!this.drivenAt.has(s)&&this.showCabinCar(s,r,e,!0),a=e&&!o?r:this.nothing;for(const l of n.meshes)l.setMatrixAt(t.k,a),l.instanceMatrix.needsUpdate=!0}setHiddenCars(t){const e=new Set(t.map(([n,s])=>Fi(n,s)));for(const[n,s]of this.parkedAt){const r=!e.has(n);if(r===!this.hiddenCars.has(n))continue;const o=this.drivenAt.get(n);o?this.showDrivenCar(n,o,r):this.showParkedCar(s,r)}this.hiddenCars=e}carBlocker(t,e){const n=this.drivenAt.get(t),s=n??e;return{id:[e.x,e.z],x:s.x,y:n?n.y+this.hostCarLift:e.y,z:s.z,heading:s.heading,...this.parkedSets[e.set].envelope}}parkedCarBlockers(){const t=[];for(const[e,n]of this.parkedAt)this.hiddenCars.has(e)||t.push(this.carBlocker(e,n));return t}parkedCarBlocker(t,e){const n=Fi(t,e),s=this.parkedAt.get(n);return s&&!this.hiddenCars.has(n)?this.carBlocker(n,s):null}nearestCar(t,e,n){let s=null;for(const[r,o]of this.parkedAt){if(this.hiddenCars.has(r))continue;const a=this.drivenAt.get(r)??o,l=Math.hypot(a.x-t,a.z-e);l<(s?s.distance:n)&&(s={id:[o.x,o.z],x:a.x,z:a.z,heading:a.heading,distance:l})}return this.cars.forEach((r,o)=>{const a=this.drivenAt.get(`t${o}`)??r,l=Math.hypot(a.x-t,a.z-e);l<(s?s.distance:n)&&(s={id:[9e5+o,0],x:a.x,z:a.z,heading:a.heading,distance:l})}),s}resetCar(t,e){var c,d;const n=t>=9e5?this.cars[t-9e5]:void 0,s=n?`t${t-9e5}`:Fi(t,e),r=this.drivenAt.get(s);if(!r)return!1;this.drivenAt.delete(s),((c=this.cabinCar)==null?void 0:c.key)===s&&((d=this.cabinCar.view)==null||d.remove(),this.cabinCar=void 0);const o=this.drivenSets[r.set],a=--o.n;if(r.k!==a)for(const[h,u]of this.drivenAt){if(u.set!==r.set||u.k!==a)continue;const f=new Pt;o.body.getColorAt(a,f),u.k=r.k,o.body.setColorAt(u.k,f),o.body.instanceColor.needsUpdate=!0,this.showDrivenCar(h,u,!this.hiddenCars.has(h));break}o.body.count=a,o.trim&&(o.trim.count=a),r.indicator&&(r.indicator.removeFromParent(),r.indicator.geometry.dispose(),r.indicator.material.dispose()),n&&(n.gone=!1);const l=this.parkedAt.get(s);return l&&!this.hiddenCars.has(s)&&this.showParkedCar(l,!0),!0}showDrivenCar(t,e,n){const s=this.drivenSets[e.set],r=this.showCabinCar(t,e.matrix,n,!1),o=n&&!r?e.matrix:this.nothing;s.body.setMatrixAt(e.k,o),s.body.instanceMatrix.needsUpdate=!0,s.trim&&(s.trim.setMatrixAt(e.k,o),s.trim.instanceMatrix.needsUpdate=!0),e.indicator&&(vd(e.indicator,n?e.signal:0),e.indicator.visible&&(e.indicator.matrix.copy(e.matrix),e.indicator.matrixWorldNeedsUpdate=!0))}driveCar(t,e,n,s,r,o,a=0,l=0,c=0){const d=t>=9e5?this.cars[t-9e5]:void 0,h=d?`t${t-9e5}`:Fi(t,e),u=d?void 0:this.parkedAt.get(h);if(!u&&!d)return!1;let f=this.drivenAt.get(h);if(!f){if(this.drivenAt.size>=12||this.hiddenCars.has(h))return!1;const p=u?this.parkedSets[u.set].shape:this.trafficTrim?1:0;let x=this.drivenSets[p];if(!x){const g=this.carShapes(p);x=this.drivenSets[p]={body:new He(g.body,this.carMat,12),trim:g.trim?new He(g.trim,this.carMat,12):void 0,n:0};for(const _ of[x.body,x.trim])_&&(_.count=0,_.frustumCulled=!1,_.castShadow=!0,this.group.add(_))}f={set:p,k:x.n++,x:n,y:s,z:r,heading:o,matrix:new re,signal:c},this.drivenAt.set(h,f),x.body.count=x.n,x.trim&&(x.trim.count=x.n);const m=new Pt;u?(this.parkedSets[u.set].body.getColorAt(u.k,m),this.showParkedCar(u,!1)):(this.traffic.getColorAt(t-9e5,m),d.gone=!0),x.body.setColorAt(f.k,m),x.body.instanceColor.needsUpdate=!0}return f.x=n,f.y=s,f.z=r,f.heading=o,f.signal=c,this.tmpQ.setFromEuler(this.tmpE.set(-a,o,l,"YXZ")),f.matrix.compose(this.tmpP.set(n,s+this.hostCarLift,r),this.tmpQ,this.one),c&&!f.indicator&&(f.indicator=Md(f.set-1),f.indicator.matrixAutoUpdate=!1,this.group.add(f.indicator)),this.showDrivenCar(h,f,!this.hiddenCars.has(h)),!0}addTraffic(t){const e=CM(this.ctx.paths);if(!e.length)return;const n=e.reduce((c,d)=>c+d.length,0),s=0,r=De(77),o=this.ctx.hasDetail?Ql(0):null,a=this.traffic=new He(o?o.body:gd(),t,s);if(a.instanceMatrix.setUsage(Gi),a.frustumCulled=!1,o){const c=this.trafficTrim=new He(o.trim,t,s);c.instanceMatrix.setUsage(Gi),c.frustumCulled=!1,c.castShadow=!0,this.group.add(c)}const l=new Pt;for(let c=0;c<s;c++){let d=r()*n,h=e[0];for(const u of e)if((d-=u.length)<=0){h=u;break}this.cars.push({route:h,s:r()*h.length,dir:r()<.5?1:-1,speed:9+r()*6,x:0,z:0,heading:0}),a.setColorAt(c,l.set(Bs[Math.floor(r()*Bs.length)]))}a.castShadow=!0,this.group.add(a)}addBoats(t,e){var c;const{hf:n}=this.ctx,s=De(451),r=((c=e.jetty)==null?void 0:c.head)??new W(380,0,-117),o=[];for(let d=0;d<4e3&&o.length<16;d++){const h=s()*Math.PI*2,u=55+s()*420,f=r.x+Math.cos(h)*u,p=r.z+Math.sin(h)*u;n.metresAt(f,p)>-1.9||!n.inside(f,p,40)||o.some(([x,m])=>Math.hypot(x-f,m-p)<26)||o.push([f,p])}const a=2.2+s()*.4;o.forEach(([d,h],u)=>{const f=u%5===0?2:u%2?0:1,p=new te(wM(f,s),t);p.position.set(d,0,h),p.rotation.y=a+(s()-.5)*.5,p.castShadow=!0,this.afloat.add(p),this.boats.push({obj:p,phase:s()*6.28,y:f===0?-.22:-.42})});const l=[U(16250866),U(15222589),U(3117008),U(15909424)];for(let d=0;d<600&&this.dinghies.length<4;d++){const h=s()*Math.PI*2,u=150+s()*900,f=r.x+Math.cos(h)*u,p=r.z+160+Math.sin(h)*u*.5,x=45+s()*70,m=30+s()*40;let g=n.inside(f,p,160);for(let M=0;M<12&&g;M++){const v=M/12*Math.PI*2;n.metresAt(f+Math.cos(v)*x,p+Math.sin(v)*m)>-1.5&&(g=!1)}if(!g||this.dinghies.some(M=>Math.hypot(M.cx-f,M.cz-p)<170))continue;const _=new te(EM(l[this.dinghies.length%l.length]),t);_.castShadow=!0,this.afloat.add(_),this.dinghies.push({obj:_,cx:f,cz:p,rx:x,rz:m,phase:s()*6.28,speed:(2.2+s())/Math.max(x,m)})}}addKites(t){const{hf:e,town:n}=this.ctx,s=De(990),[r,o]=vn(n.meta,-38.6385,145.714),[a,l]=vn(n.meta,-38.645,145.731),c=[];for(let u=0;u<3e3&&c.length<6;u++){const f=r+s()*(a-r),p=o+s()*(l-o);e.metresAt(f,p)>-1.6||c.some(x=>Math.hypot(x.x-f,x.z-p)<110)||c.push(new W(f,0,p))}const d=new Float32Array(c.length*12);c.forEach((u,f)=>{let p=85;for(;p>15&&(e.metresAt(u.x+.65*p,u.z+.76*p)>-1.2||e.metresAt(u.x-.65*p,u.z-.76*p)>-1.2);)p-=10;const x=fi[Math.floor(s()*7)],m=fi[Math.floor(s()*7)],g=new te(TM(x,m===x?fi[7]:m),t),_=new te(AM(fi[Math.floor(s()*7)],U(1976112)),t);g.castShadow=!0,this.afloat.add(g,_),this.kites.push({base:u,reach:p,phase:s()*6.28,speed:.12+s()*.06,kite:g,rider:_})});const h=new Re;h.setAttribute("position",new Te(d,3).setUsage(Gi)),this.kiteLines=new wh(h,Mr(new Mh({color:15921906,transparent:!0,opacity:.7}))),this.kiteLines.frustumCulled=!1,this.afloat.add(this.kiteLines)}addSurfers(t,e){if(!e.surf)return;const{hf:n}=this.ctx,s=De(31),[r,o]=e.surf.seaward,a=e.surf.beach;let l=20;for(;l<420&&n.metresAt(a.x+r*l,a.z+o*l)>-2;)l+=5;for(let c=0;c<9;c++){const d=(c-4)*13+(s()-.5)*8,h=l+(s()-.5)*30,u=a.x+r*h-o*d,f=a.z+o*h+r*d,p=new te(RM(fi[Math.floor(s()*fi.length)]),t);p.position.set(u,0,f),p.rotation.y=Math.atan2(r,o)+(s()-.5)*.8,this.afloat.add(p),this.surfers.push({obj:p,phase:s()*6.28})}}addPeople(t){const{hf:e,town:n,paths:s,roads:r,footprints:o}=this.ctx,a=De(2026),l=[],c=[],d=(I,O)=>o.some(j=>{if(Math.hypot(I-j.cx,O-j.cz)>Math.max(j.obb.w,j.obb.d))return!1;let V=!1;for(let G=0,Z=j.poly.length-2;G<j.poly.length;Z=G,G+=2){const X=j.poly[G],K=j.poly[G+1],z=j.poly[Z],q=j.poly[Z+1];K>O!=q>O&&I<(z-X)*(O-K)/(q-K)+X&&(V=!V)}return V}),h=(I,O)=>!r.nearest(I,O,6.4)&&!d(I,O),u=(I,O,j,V,G,Z,X=0)=>{for(let K=0,z=0;K<V*40&&z<V;K++){const q=a()*Math.PI*2,nt=Math.sqrt(a())*j,ht=I+Math.cos(q)*nt,et=O+Math.sin(q)*nt,it=e.metresAt(ht,et);it<G||it>Z||!h(ht,et)||(l.push(ht,e.yAt(ht,et),et),a()<X&&c.push(ht+1.2,e.yAt(ht+1.2,et),et+.6),z++)}};t.surf&&u(t.surf.beach.x,t.surf.beach.z,130,60,1.5,3,.32);const[f,p]=vn(n.meta,-38.63575,145.729);u(f,p,120,34,1.5,2.4,.3);const[x,m]=vn(n.meta,-38.6356,145.7337);u(x,m,110,26,1.5,2.6,.2);const[g,_]=vn(n.meta,-38.63194,145.72681);u(g,_,55,14,0,99);const[M,v]=vn(n.meta,-38.63385,145.7285);for(const I of s){if(I.cls>3||I.flags)continue;const O=I.pts.length/3;for(let j=1;j<O;j++){const V=I.pts[j*3],G=I.pts[j*3+2];if(Math.hypot(V-M,G-v)>300||a()>.42||this.ctx.isClear(V,G))continue;const Z=V-I.pts[j*3-3],X=G-I.pts[j*3-1],K=Math.hypot(Z,X)||1,z=a()<.5?1:-1,q=I.width/2+2.3+a()*1,nt=V-X/K*q*z,ht=G+Z/K*q*z;h(nt,ht)&&l.push(nt,e.yAt(nt,ht),ht)}}if(t.jetty){const I=t.jetty.points;for(let O=0;O<I.length-1;O++)for(let j=0;j<3;j++){const V=a();l.push(I[O][0]+(I[O+1][0]-I[O][0])*V+(a()-.5)*2,$l,I[O][1]+(I[O+1][1]-I[O][1])*V+(a()-.5)*2)}}const b=l.length/3,w=new oe;w.cyl(0,0,0,.17,.22,.85,5,U(2765632)),w.cyl(0,.85,0,.24,.2,.6,5,U(16777215),U(16777215));const S=new oe;S.blob(0,1.6,0,.14,.15,.14,5,3,U(14264711));const y=new _o({vertexColors:!0}),E=I=>(I.deleteAttribute("glow"),I),T=new He(E(w.build()),y,b),R=new He(E(S.build()),y,b),P=new Pt,N=[16777215,15255976,12159590,9068354];for(let I=0;I<b;I++){const O=.92+a()*.2;this.tmpQ.setFromAxisAngle(this.up,a()*6.28),this.tmpM.compose(this.tmpP.set(l[I*3],l[I*3+1],l[I*3+2]),this.tmpQ,new W(O,O,O)),T.setMatrixAt(I,this.tmpM),R.setMatrixAt(I,this.tmpM),T.setColorAt(I,P.set(md[Math.floor(a()*md.length)])),R.setColorAt(I,P.set(N[Math.floor(a()*N.length)]))}T.computeBoundingSphere(),R.computeBoundingSphere(),this.group.add(T,R);const L=new oe;L.cyl(0,0,0,.03,.03,2,4,U(14277081)),L.cyl(0,1.75,0,1.25,0,.5,8,U(16777215));const F=new He(E(L.build()),y,c.length/3);for(let I=0;I<c.length/3;I++)this.tmpQ.setFromAxisAngle(new W(1,0,0),(a()-.5)*.3),F.setMatrixAt(I,this.tmpM.compose(this.tmpP.set(c[I*3],c[I*3+1],c[I*3+2]),this.tmpQ,this.one)),F.setColorAt(I,P.set([14826299,3117008,15909424,3715691,15764004,16053490][Math.floor(a()*6)]));F.castShadow=!0,F.computeBoundingSphere(),this.group.add(F)}addGulls(t){if(!t.jetty)return;const e=De(8),n=16;for(let r=0;r<n;r++)this.gullState.push({cx:t.jetty.head.x+(e()-.5)*90,cz:t.jetty.head.z+(e()-.5)*90,r:18+e()*55,h:$l+6+e()*16,w:(.25+e()*.3)*(e()<.5?1:-1),phase:e()*6.28});const s=new Re;s.setAttribute("position",new Te(new Float32Array(n*18),3).setUsage(Gi)),this.gulls=new te(s,Mr(new xn({color:16185074,side:Le}))),this.gulls.frustumCulled=!1,this.group.add(this.gulls)}updateParkedLod(t,e,n){for(const s of this.parkedSets)s.lod.update(t,e,n)}update(t,e){for(const n of this.boats)n.obj.rotation.z=Math.sin(e*.9+n.phase)*.04,n.obj.rotation.x=Math.sin(e*.7+n.phase*1.7)*.025,n.obj.position.y=n.y+Math.sin(e*1.1+n.phase)*.06;for(const n of this.dinghies){const s=n.phase+e*n.speed;n.obj.position.set(n.cx+Math.cos(s)*n.rx,-.15,n.cz+Math.sin(s)*n.rz),n.obj.rotation.y=Math.atan2(-Math.sin(s)*n.rx,Math.cos(s)*n.rz),n.obj.rotation.z=.12+Math.sin(e*.8+n.phase)*.04}for(const n of this.surfers)n.obj.position.y=-.05+Math.sin(e*.9+n.phase)*.22;if(this.kiteLines){const n=this.kiteLines.geometry.getAttribute("position");this.kites.forEach((s,r)=>{const o=Math.sin(e*s.speed*6.28+s.phase),a=Math.cos(e*s.speed*6.28+s.phase)>=0?1:-1,l=s.base.x+.65*s.reach*o,c=s.base.z+.76*s.reach*o;s.rider.position.set(l,.05,c),s.rider.rotation.y=Math.atan2(.65*a,.76*a),s.rider.rotation.z=.28;const d=e*1.3+s.phase,h=l+12+a*5+Math.sin(d)*4.5,u=c-10+Math.cos(d)*1.5,f=17+Math.sin(d*2)*2.4;s.kite.position.set(h,f,u),s.kite.lookAt(l,1.2,c),s.kite.rotateX(-Math.PI/2),n.setXYZ(r*4,l-.3,1.25,c),n.setXYZ(r*4+1,h-2.6,f-1,u),n.setXYZ(r*4+2,l-.3,1.25,c),n.setXYZ(r*4+3,h+2.6,f-1,u)}),n.needsUpdate=!0}if(this.traffic&&(this.cars.forEach((n,s)=>{var M,v;if(n.gone){this.traffic.setMatrixAt(s,this.nothing),(M=this.trafficTrim)==null||M.setMatrixAt(s,this.nothing);return}const r=n.route;n.s+=n.dir*n.speed*t,n.s>r.length&&(n.s=r.length,n.dir=-1),n.s<0&&(n.s=0,n.dir=1);let o=0,a=r.cum.length-1;for(;a-o>1;){const b=o+a>>1;r.cum[b]<=n.s?o=b:a=b}const l=(n.s-r.cum[o])/(r.cum[a]-r.cum[o]||1),c=r.pts[o*3],d=r.pts[o*3+2],h=r.pts[a*3],u=r.pts[a*3+2];let f=h-c,p=u-d;const x=Math.hypot(f,p)||1;f=f/x*n.dir,p=p/x*n.dir;const m=Math.min(r.width*.24,2),g=c+(h-c)*l+p*m,_=d+(u-d)*l-f*m;n.x=g,n.z=_,n.heading=Math.atan2(f,p),this.traffic.setMatrixAt(s,this.sit(g,_,n.heading,.02)),(v=this.trafficTrim)==null||v.setMatrixAt(s,this.tmpM)}),this.traffic.instanceMatrix.needsUpdate=!0,this.trafficTrim&&(this.trafficTrim.instanceMatrix.needsUpdate=!0)),this.gulls){const n=this.gulls.geometry.getAttribute("position");this.gullState.forEach((s,r)=>{const o=s.phase+e*s.w,a=s.cx+Math.cos(o)*s.r,l=s.cz+Math.sin(o)*s.r,c=s.h+Math.sin(o*2.3)*1.5,d=s.w>0?1:-1,h=-Math.sin(o)*d,u=Math.cos(o)*d,f=u,p=-h,x=Math.sin(e*7+s.phase*3)*.45,m=r*6;n.setXYZ(m,a+h*.35,c,l+u*.35),n.setXYZ(m+1,a-h*.3,c,l-u*.3),n.setXYZ(m+2,a+f*.85,c+x,l+p*.85),n.setXYZ(m+3,a+h*.35,c,l+u*.35),n.setXYZ(m+4,a-f*.85,c+x,l-p*.85),n.setXYZ(m+5,a-h*.3,c,l-u*.3)}),n.needsUpdate=!0}}}const Xo={low:320,medium:640,high:1040,ultra:1520},Qi=new W(31,18,31),PM=`
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
}`,DM=`
varying float vOpacity;
void main() {
  gl_FragColor = vec4(0.54, 0.65, 0.76, vOpacity);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;class IM{constructor(t,e,n){Y(this,"eye",new W);Y(this,"material");Y(this,"streaks");Y(this,"wetness",{value:0});Y(this,"ultra");Y(this,"disposed",!1);Y(this,"inletRain",{value:0});this.camera=e,this.ultra=n==="ultra";const s=Math.max(Xo.medium,Xo[n]),r=De(1229870668),o=new Float32Array(s*6),a=new Float32Array(s*8);for(let c=0;c<s;c++){const d=r()*Qi.x,h=r()*Qi.y,u=r()*Qi.z,f=.25+r()*.54,p=.55+r()*.45,x=r();o.set([d,h,u,d,h,u],c*6),a.set([f,0,p,x,f,1,p,x],c*8)}const l=new Re;l.setAttribute("position",new Te(o,3)),l.setAttribute("aDrop",new Te(a,4)),l.setDrawRange(0,Xo[n]*2),this.material=new Xe({uniforms:{uEye:{value:this.eye},uVolume:{value:Qi},uDrift:{value:new Ut},uSlant:{value:new Ut},uFall:{value:0},uRain:{value:0},uShelter:{value:0}},vertexShader:PM,fragmentShader:DM,transparent:!0,depthWrite:!1}),this.streaks=new wh(l,this.material),this.streaks.name="local rain streaks",this.streaks.frustumCulled=!1,this.streaks.renderOrder=4,this.streaks.visible=!1,t.add(this.streaks)}setDensity(t){this.streaks.geometry.setDrawRange(0,Xo[t]*2)}shadeAsphalt(t,e=!1){const n=t.onBeforeCompile,s=t.customProgramCacheKey();t.customProgramCacheKey=()=>s+(e?":rain-asphalt-mask":":rain-asphalt"),t.onBeforeCompile=(r,o)=>{n.call(t,r,o),r.uniforms.uRoadWetness=this.wetness,e&&(r.vertexShader=`attribute float aAsphalt;
varying float vAsphalt;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vAsphalt = aAsphalt;`));const a=e?"(uRoadWetness * vAsphalt)":"uRoadWetness";r.fragmentShader=`uniform float uRoadWetness;
`+(e?`varying float vAsphalt;
`:"")+r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= mix(1.0, 0.66, `+a+");").replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.56, `+a+");")},t.needsUpdate=!0}update(t,e,n,s=2.9,r=-1,o=!1){if(this.disposed)return;const a=se.clamp(t,0,1);if(this.wetness.value=se.clamp(e,0,1),this.inletRain.value=this.ultra?a:0,this.streaks.visible=a>.015,!this.streaks.visible)return;this.camera.getWorldPosition(this.eye);const l=this.material.uniforms,c=12.5;l.uRain.value=a,l.uShelter.value=o?1:0,l.uFall.value=n*c%Qi.y,l.uDrift.value.set(n*s%Qi.x,n*r%Qi.z),l.uSlant.value.set(s/c,r/c)}dispose(){this.disposed||(this.disposed=!0,this.wetness.value=this.inletRain.value=0,this.streaks.removeFromParent(),this.streaks.geometry.dispose(),this.material.dispose())}}const yn=(i,t,e)=>{const n=[],s=[];for(let r=0;r<i.length;r++){const o=i[r],a=i[(r+1)%i.length],l=t(o)-e,c=t(a)-e;if(l<=1e-9&&n.push(o),l>=-1e-9&&s.push(o),l<-1e-9&&c>1e-9||l>1e-9&&c<-1e-9){const d=l/(l-c),h=new Float64Array(o.length);for(let u=0;u<h.length;u++)h[u]=o[u]+(a[u]-o[u])*d;n.push(h),s.push(h)}}return[n,s]},sc=(i,t)=>{const e=[];for(let n of i){let s=1/0,r=-1/0;for(const o of n){const a=t(o);a<s&&(s=a),a>r&&(r=a)}for(let o=Math.floor(s+1e-9)+1;o<r-1e-9&&n.length>=3;o++){const[a,l]=yn(n,t,o);a.length>=3&&e.push(a),n=l}n.length>=3&&e.push(n)}return e};function rc(i,t,e,n,s){const r=[Math.min(t[0],e[0],n[0]),Math.min(t[2],e[2],n[2]),Math.max(t[0],e[0],n[0]),Math.max(t[2],e[2],n[2])];let o=[[t,e,n]];for(const a of i.patches){if(r[0]>=a.xMax||r[2]<=a.xMin||r[1]>=a.zMax||r[3]<=a.zMin)continue;const l=[];for(const c of o){const[d,h]=yn(c,_=>_[0],a.xMin),[u,f]=yn(h,_=>_[0],a.xMax),[p,x]=yn(u,_=>_[2],a.zMin),[m,g]=yn(x,_=>_[2],a.zMax);for(const _ of[d,f,p,g])_.length>=3&&l.push(_);m.length>=3&&Sd(a,m,s)}o=l}for(const a of o)Sd(i,a,s)}function Sd(i,t,e){const n=o=>(o[0]-i.xMin)/i.dx,s=o=>(o[2]-i.zMin)/i.dz,r=o=>n(o)+s(o);if(t.length===3){const[o,a,l]=t,c=Math.min(n(o),n(a),n(l)),d=Math.max(n(o),n(a),n(l)),h=Math.min(s(o),s(a),s(l)),u=Math.max(s(o),s(a),s(l)),f=Math.min(r(o),r(a),r(l)),p=Math.max(r(o),r(a),r(l));if(Math.floor(c)===Math.floor(d-1e-9)&&Math.floor(h)===Math.floor(u-1e-9)&&Math.floor(f)===Math.floor(p-1e-9)){e(o,a,l);return}}for(const o of sc(sc(sc([t],n),s),r))for(let a=1;a+1<o.length;a++)e(o[0],o[a],o[a+1])}const Jn=24,yd=.08,Ar=.07,NM=.35,Rr=1e-8,Cr=.001,oc=(i,t)=>i*65536+t;class UM{constructor(){Y(this,"surfaces",new Map);Y(this,"index")}add(t,e=t.length){const n=this.surfaces.get(t);e!==n&&(this.surfaces.set(t,e),n!==void 0?this.index=void 0:this.index&&bd(this.index,t,e))}remove(t){this.surfaces.delete(t)&&(this.index=void 0)}buildIndex(){const t={buffers:[],faces:[],cells:new Map};for(const[e,n]of this.surfaces)bd(t,e,n);return t}heightAt(t,e){const{buffers:n,faces:s,cells:r}=this.index??(this.index=this.buildIndex()),o=r.get(oc(Math.floor(t/Jn),Math.floor(e/Jn)));let a=-1/0;if(o)for(const l of o)a=Math.max(a,wd(n[s[l]],s[l+1],t,e,!0));return Number.isFinite(a)?a:null}project(t,e,n){const{buffers:s,faces:r,cells:o}=this.index??(this.index=this.buildIndex()),a=[],l=new Set,c=(n==null?void 0:n.length)??e.length/3,d=f=>{const p=(n?n[f]:f)*3;return new Float64Array([e[p],0,e[p+2]])},h=(f,p,x,m,g,_)=>{const M=(p[2]-f[2])*(x[0]-f[0])-(p[0]-f[0])*(x[2]-f[2]);Math.abs(M)<=Rr||a.push(f[0],m,f[2],p[0],g,p[2],x[0],_,x[2])},u=(f,p)=>{const[x,,m]=f,g=this.heightAt(x,m);return g===null?Ar:Math.max(Ar,g-p+yd-.01)};for(let f=0;f+2<c;f+=3){const p=d(f),x=d(f+1),m=d(f+2);rc(t,p,x,m,(b,w,S)=>{const y=t.yAt(b[0],b[2]),E=t.yAt(w[0],w[2]),T=t.yAt(S[0],S[2]),R=u(b,y),P=u(w,E),N=u(S,T);Math.max(R,P,N)-Math.min(R,P,N)>NM?h(b,w,S,y+Ar,E+Ar,T+Ar):h(b,w,S,y+R,E+P,T+N)});const g=Math.min(p[0],x[0],m[0]),_=Math.max(p[0],x[0],m[0]),M=Math.min(p[2],x[2],m[2]),v=Math.max(p[2],x[2],m[2]);l.clear();for(let b=Math.floor(g/Jn);b<=Math.floor(_/Jn);b++)for(let w=Math.floor(M/Jn);w<=Math.floor(v/Jn);w++){const S=o.get(oc(b,w));if(S)for(const y of S){if(l.has(y))continue;l.add(y);const E=s[r[y]],T=r[y+1],R=E[T],P=E[T+2],N=E[T+3],L=E[T+5],F=E[T+6],I=E[T+8];if(Math.max(R,N,F)<g||Math.min(R,N,F)>_||Math.max(P,L,I)<M||Math.min(P,L,I)>v)continue;const O=FM([p,x,m],R,P,N,L,F,I);if(O.length<3)continue;const j=Z=>wd(E,T,Z[0],Z[2],!1)+yd,V=O[0],G=j(V);for(let Z=1;Z+1<O.length;Z++){const X=O[Z],K=O[Z+1];h(V,X,K,G,j(X),j(K))}}}}return Float32Array.from(a)}}function bd({buffers:i,faces:t,cells:e},n,s){const r=i.length;i.push(n);for(let o=0;o+8<s;o+=9){const a=n[o],l=n[o+2],c=n[o+3],d=n[o+5],h=n[o+6],u=n[o+8];if((d-l)*(h-a)-(c-a)*(u-l)<=Rr)continue;const f=t.length;t.push(r,o);const p=Math.floor((Math.min(a,c,h)-Cr)/Jn),x=Math.floor((Math.max(a,c,h)+Cr)/Jn),m=Math.floor((Math.min(l,d,u)-Cr)/Jn),g=Math.floor((Math.max(l,d,u)+Cr)/Jn);for(let _=p;_<=x;_++)for(let M=m;M<=g;M++){const v=oc(_,M);let b=e.get(v);b||e.set(v,b=[]),b.push(f)}}}function wd(i,t,e,n,s){const r=i[t],o=i[t+1],a=i[t+2],l=i[t+3]-r,c=i[t+5]-a,d=i[t+6]-r,h=i[t+8]-a,u=e-r,f=n-a,p=c*d-l*h,x=(f*d-u*h)/p,m=(c*u-l*f)/p;if(s&&(x<-Rr||m<-Rr||x+m>1+Rr)){const g=i[t+4],_=i[t+7];let M=-1/0;return x<0&&(M=ac(u,f,d,h,o,_)),m<0&&(M=Math.max(M,ac(u,f,l,c,o,g))),x+m>1&&(M=Math.max(M,ac(u-l,f-c,d-l,h-c,g,_))),M}return o+x*(i[t+4]-o)+m*(i[t+7]-o)}function ac(i,t,e,n,s,r){const o=Math.max(0,Math.min(1,(i*e+t*n)/(e*e+n*n)));return(i-o*e)**2+(t-o*n)**2<=Cr**2?s+o*(r-s):-1/0}function FM(i,t,e,n,s,r,o){const a=(c,d,h,u,f)=>(c[0]-d)*(f-h)-(c[2]-h)*(u-d);let l=yn(i,c=>a(c,t,e,n,s),0)[1];return l.length>=3&&(l=yn(l,c=>a(c,n,s,r,o),0)[1]),l.length>=3&&(l=yn(l,c=>a(c,r,o,t,e),0)[1]),l}class OM{constructor(t,e,n,s=!0){this.hf=t,this.mesh=e,this.clearance=n,this.fitTerrain=s}quad(t,e,n,s,r,o,a,l,c,d,h,u,f,p=0){this.tri(t,e,n,s,r,o,a,l,c,f,p),this.tri(t,e,n,a,l,c,d,h,u,f,p)}edgeCrosses(t,e,n,s,r,o){const a=this.hf;for(let l=0;l<3;l++){const c=l===0?t:l===1?e:t+e,d=l===0?s:l===1?r:s+r,h=Math.max(c,d);for(let u=Math.floor(Math.min(c,d))+1;u<h;u++){const f=(u-c)/(d-c),p=a.xMin+(t+(s-t)*f)*a.dx,x=a.zMin+(e+(r-e)*f)*a.dz;if(n+(o-n)*f<a.yAt(p,x)+this.clearance)return!0}}return!1}needsFitting(t,e,n,s,r,o,a,l,c){const d=this.hf;if(e<d.yAt(t,n)+this.clearance||r<d.yAt(s,o)+this.clearance||l<d.yAt(a,c)+this.clearance)return!0;const h=(t-d.xMin)/d.dx,u=(n-d.zMin)/d.dz,f=(s-d.xMin)/d.dx,p=(o-d.zMin)/d.dz,x=(a-d.xMin)/d.dx,m=(c-d.zMin)/d.dz;if(this.edgeCrosses(h,u,e,f,p,r)||this.edgeCrosses(f,p,r,x,m,l)||this.edgeCrosses(x,m,l,h,u,e))return!0;const g=(f-h)*(m-u)-(p-u)*(x-h);if(Math.abs(g)<1e-12)return!1;const _=Math.min(d.nx-1,Math.floor(Math.max(h,f,x))),M=Math.min(d.nz-1,Math.floor(Math.max(u,p,m)));for(let v=Math.max(0,Math.ceil(Math.min(u,p,m)));v<=M;v++)for(let b=Math.max(0,Math.ceil(Math.min(h,f,x)));b<=_;b++){const w=((b-h)*(m-u)-(v-u)*(x-h))/g,S=((f-h)*(v-u)-(p-u)*(b-h))/g;if(w>=0&&S>=0&&w+S<=1&&e+w*(r-e)+S*(l-e)<d.y[v*d.nx+b]+this.clearance)return!0}return!1}tri(t,e,n,s,r,o,a,l,c,d,h=0){if(!this.fitTerrain){this.mesh.tri(t,e,n,s,r,o,a,l,c,d,h);return}if(!this.hf.patchOverlaps(Math.min(t,s,a),Math.min(n,o,c),Math.max(t,s,a),Math.max(n,o,c))&&!this.needsFitting(t,e,n,s,r,o,a,l,c)){this.mesh.tri(t,e,n,s,r,o,a,l,c,d,h);return}const f=m=>Math.max(m[1],this.hf.yAt(m[0],m[2])+this.clearance),p=[];let x=!1;if(rc(this.hf,new Float64Array([t,e,n]),new Float64Array([s,r,o]),new Float64Array([a,l,c]),(m,g,_)=>{p.push([m,g,_]),x||(x=f(m)>m[1]||f(g)>g[1]||f(_)>_[1])}),!x){this.mesh.tri(t,e,n,s,r,o,a,l,c,d,h);return}for(const[m,g,_]of p)this.mesh.tri(m[0],f(m),m[2],g[0],f(g),g[2],_[0],f(_),_[2],d,h)}}const Ed=i=>i[0],Td=i=>i[2],Fn=1.5,Oi=.16,Yo=Math.hypot(Fn,Oi),Gs=12,Ad=(i,t)=>(i+2048)*8192+t+2048;class zM{constructor(t,e,n){Y(this,"bins",new Map);this.asphalt=t,this.marks=e,this.color=n}addDash(t,e,n,s,r,o){const a={x:t+Fn*s,z:n+Fn*r,dx:s,dz:r,y:e+Fn*o,grade:o,flat:!0,area:0,pieces:[]},l=Ad(Math.floor(a.x/Gs),Math.floor(a.z/Gs));let c=this.bins.get(l);c||this.bins.set(l,c=[]),c.push(a)}tri(t,e,n,s,r,o,a,l,c,d){this.asphalt.tri(t,e,n,s,r,o,a,l,c,d);const h=Math.min(t,s,a)-Yo,u=Math.max(t,s,a)+Yo,f=Math.min(n,o,c)-Yo,p=Math.max(n,o,c)+Yo;for(let x=Math.floor(f/Gs);x<=Math.floor(p/Gs);x++)for(let m=Math.floor(h/Gs);m<=Math.floor(u/Gs);m++){const g=this.bins.get(Ad(m,x));if(g)for(const _ of g){if(_.x<h||_.x>u||_.z<f||_.z>p)continue;const M=(b,w,S)=>new Float64Array([(b-_.x)*_.dx+(S-_.z)*_.dz,w,-(b-_.x)*_.dz+(S-_.z)*_.dx]);let v=[M(t,e,n),M(s,r,o),M(a,l,c)];if(v=yn(v,Ed,-Fn)[1],v=yn(v,Ed,Fn)[0],v=yn(v,Td,-Oi)[1],v=yn(v,Td,Oi)[0],!(v.length<3)){_.pieces.push(v);for(let b=0;b<v.length;b++){const w=v[b],S=v[(b+1)%v.length];_.area+=(S[0]*w[2]-S[2]*w[0])/2,Math.abs(_.y+w[0]*_.grade-w[1])>.03&&(_.flat=!1)}}}}}finish(){for(const t of this.bins.values())for(const e of t){const n=s=>[e.x+s[0]*e.dx-s[2]*e.dz,s[1]+.05,e.z+s[0]*e.dz+s[2]*e.dx];if(e.flat&&Math.abs(e.area-4*Fn*Oi)<1e-4){const s=(r,o)=>n(new Float64Array([r,e.y+r*e.grade,o]));this.marks.quad(...s(-Fn,Oi),...s(Fn,Oi),...s(Fn,-Oi),...s(-Fn,-Oi),this.color)}else for(const s of e.pieces)for(let r=1;r+1<s.length;r++)this.marks.tri(...n(s[0]),...n(s[r]),...n(s[r+1]),this.color)}}}const lc=1,Rd=2,BM=[U(5198680),U(11575168),U(9072466),U(12434356)],GM=U(4474957),kM=U(15921382),Cd={polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8},HM=[.34,.3,.26,.22,.16,.15,.13,.11],Ld=new Float32Array(9);function VM(i,t,e){const n=[i[0]/10,i[1]/10];let s=0;for(let r=2;r<i.length;r+=2){const o=i[r-2]/10,a=i[r-1]/10,l=i[r]/10,c=i[r+1]/10,d=Math.hypot(l-o,c-a);if(!d)continue;const h=e&&s+d>=e.start&&s<=e.end?3:t,u=Math.ceil(d/h);s+=d;for(let f=1;f<=u;f++)n.push(o+(l-o)*f/u,a+(c-a)*f/u)}return n}class WM{constructor(){Y(this,"cells",new Map);Y(this,"segs",[]);Y(this,"size",40)}add(t,e,n,s,r,o){const a=this.segs.length/6;this.segs.push(t,e,n,s,r,o);const l=Math.floor(Math.min(t,n)/this.size),c=Math.floor(Math.max(t,n)/this.size),d=Math.floor(Math.min(e,s)/this.size),h=Math.floor(Math.max(e,s)/this.size);for(let u=l;u<=c;u++)for(let f=d;f<=h;f++){const p=(u+512)*4096+(f+512);let x=this.cells.get(p);x||this.cells.set(p,x=[]),x.push(a)}}nearest(t,e,n){let s=null;const r=Math.ceil(n/this.size),o=Math.floor(t/this.size),a=Math.floor(e/this.size);for(let l=o-r;l<=o+r;l++)for(let c=a-r;c<=a+r;c++){const d=this.cells.get((l+512)*4096+(c+512));if(d)for(const h of d){const u=this.segs[h*6],f=this.segs[h*6+1],p=this.segs[h*6+2],x=this.segs[h*6+3],m=p-u,g=x-f,_=Math.max(0,Math.min(1,((t-u)*m+(e-f)*g)/(m*m+g*g||1))),M=u+m*_,v=f+g*_,b=Math.hypot(t-M,e-v);b<=n&&(!s||b<s.dist)&&(s={dist:b,px:M,pz:v,cls:this.segs[h*6+4],name:this.segs[h*6+5]})}}return s}}function XM(i,t){const e=new Map,n=(r,o)=>r+","+o;for(const r of i){if(r[0]>3)continue;const o=r[5];if(!(o.length<4))for(const a of[0,1]){const l=a?o.length-2:0,c=l+(a?-2:2),d=(o[c]-o[l])/10,h=(o[c+1]-o[l+1])/10,u=Math.hypot(d,h);if(!u)continue;const f=n(o[l],o[l+1]),p=e.get(f)??[];p.push({road:r,end:a,x:o[l]/10,z:o[l+1]/10,dx:d/u,dz:h/u,length:u}),e.set(f,p)}}const s=new Map;for(const r of e.values()){if(r.length!==2)continue;const o=r.find(T=>T.road[2]&lc),a=r.find(T=>!(T.road[2]&lc));if(!o||!a||o.road[0]!==a.road[0]||o.road[3]!==a.road[3]||o.road[4]!==a.road[4]||a.dx*o.dx+a.dz*o.dz>-.75)continue;const l=o.end?-1:1,c=o.road[3]/20,d=(o.dx-a.dx)*l,h=(o.dz-a.dz)*l,u=c/((o.dx*d+o.dz*h)*l),f=-h*u,p=d*u,{x,z:m}=o,g=Math.min(4,a.length),_=t.yAt(x,m),M=[t.yAt(x+f,m+p),_,t.yAt(x-f,m-p)],v=(T,R)=>{const P=x+a.dx*g-T*a.dz*l*c,N=m+a.dz*g+T*a.dx*l*c;return(R-t.yAt(P,N))*l/g},b=[v(-1,M[0]),v(0,_),v(1,M[2])],w={hx:f,hz:p,offset:[M[0]-_,0,M[2]-_],slope:b},S=s.get(o.road)??[];S[o.end]=w,s.set(o.road,S);const y=s.get(a.road)??[],E=a.end===o.end;y[a.end]={...w,hx:E?-f:f,hz:E?-p:p},s.set(a.road,y)}return s}function Pd(i,t,e,n,s,r){if(!i||t>=e)return 0;const o=t/e;return((1+2*o)*i.offset[r]+t*(i.slope[r]-n)*s)*(1-o)**2}function YM(i,t,e,n){const s=new oe,r=new oe,o=new WM,a=XM(i.roads,t),l=[],c=[];for(const v of i.roads){const[b,w,S,y,E,T]=v,R=y/10,P=zu(v),N=(S&lc)!==0,[L,F]=a.get(v)??[],I=VM(T,N&&(L||F)?1.8:b<=3?6:5,P),O=I.length/2;if(O<2)continue;const j=w===0&&b<=1?GM:BM[w],V=w===0?1:0,G=HM[b],Z=t.yAt(I[0],I[1]),X=t.yAt(I[O*2-2],I[O*2-1]),K=new Float32Array(O);for(let lt=1;lt<O;lt++)K[lt]=K[lt-1]+Math.hypot(I[lt*2]-I[lt*2-2],I[lt*2+1]-I[lt*2-1]);const z=K[O-1]||1,q=(X-Z)/z,nt=Math.PI/z,ht=Math.min(9,z/2),et=new Float32Array(O*3),it=new Float32Array(O*3),Rt=new Float32Array(O*3);for(let lt=0;lt<O;lt++){const ft=I[lt*2],pt=I[lt*2+1],Yt=Math.max(lt-1,0),Lt=Math.min(lt+1,O-1);let ne=I[Lt*2]-I[Yt*2],Zt=I[Lt*2+1]-I[Yt*2+1];const $t=Math.hypot(ne,Zt)||1;ne/=$t,Zt/=$t;let he=1;if(lt>0&&lt<O-1){const dt=I[lt*2]-I[lt*2-2],at=I[lt*2+1]-I[lt*2-1],gt=Math.hypot(dt,at)||1;he=1/Math.max(.6,(dt*ne+at*Zt)/gt)}const ue=lt===0?L:lt===O-1?F:void 0,k=(ue==null?void 0:ue.hx)??-Zt*(R/2)*he,ee=(ue==null?void 0:ue.hz)??ne*(R/2)*he,Ht=K[lt],ie=R/2,vt=N?Z+q*Ht+G+Math.sin(nt*Ht):0,Me=dt=>vt+Pd(L,Ht,ht,q+nt,1,dt)+Pd(F,z-Ht,ht,q-nt,-1,dt),Gt=(P==null?void 0:P.deckLift(Ht,G))??G,zt=(dt,at,gt)=>(P!=null&&P.weight(Ht)?P.ground(t,dt,at,Ht,gt):t.yAt(dt,at))+Gt,D=N?Me(1):zt(ft,pt,0),A=N?Me(0):zt(ft+k,pt+ee,ie),J=N?Me(2):zt(ft-k,pt-ee,ie);et.set([ft+k,A,pt+ee],lt*3),it.set([ft,D,pt],lt*3),Rt.set([ft-k,J,pt-ee],lt*3),lt>0&&b<=3&&o.add(I[lt*2-2],I[lt*2-1],ft,pt,b,E)}const ut=b<=1&&!(S&Rd)&&z>20,Mt=ut?new zM(s,r,kM):void 0;if(ut){let lt=0;for(let ft=4;ft<z-4;ft+=12){for(;lt<O-2&&K[lt+1]<ft;)lt++;const pt=(ft-K[lt])/(K[lt+1]-K[lt]||1),Yt=it[lt*3]+(it[lt*3+3]-it[lt*3])*pt,Lt=it[lt*3+1]+(it[lt*3+4]-it[lt*3+1])*pt,ne=it[lt*3+2]+(it[lt*3+5]-it[lt*3+2])*pt;if(e!=null&&e(Yt,ne))continue;let Zt=it[lt*3+3]-it[lt*3],$t=it[lt*3+5]-it[lt*3+2];const he=Math.hypot(Zt,$t)||1;Zt/=he,$t/=he;const ue=(it[lt*3+4]-it[lt*3+1])/he;Mt==null||Mt.addDash(Yt,Lt,ne,Zt,$t,ue)}}const Ft=new OM(t,Mt??s,.04,!N);for(let lt=0;lt<O-1;lt++){const ft=lt*3,pt=ft+3;if(e){const Yt=e(it[ft],it[ft+2]),Lt=e(it[pt],it[pt+2]);if(Yt&&Lt)continue;if(Yt!==Lt){let ne=0,Zt=1;for(let zt=0;zt<12;zt++){const D=(ne+Zt)/2;e(it[ft]+(it[pt]-it[ft])*D,it[ft+2]+(it[pt+2]-it[ft+2])*D)===Yt?ne=D:Zt=D}const $t=(ne+Zt)/2;for(const zt of[et,it,Rt])for(let D=0;D<3;D++)Ld[(zt===et?0:zt===it?3:6)+D]=zt[ft+D]+(zt[pt+D]-zt[ft+D])*$t;const[he,ue,k,ee,Ht,ie,vt,Me,Gt]=Ld;Yt?(Ft.quad(he,ue,k,et[pt],et[pt+1],et[pt+2],it[pt],it[pt+1],it[pt+2],ee,Ht,ie,j,V),Ft.quad(ee,Ht,ie,it[pt],it[pt+1],it[pt+2],Rt[pt],Rt[pt+1],Rt[pt+2],vt,Me,Gt,j,V)):(Ft.quad(et[ft],et[ft+1],et[ft+2],he,ue,k,ee,Ht,ie,it[ft],it[ft+1],it[ft+2],j,V),Ft.quad(it[ft],it[ft+1],it[ft+2],ee,Ht,ie,vt,Me,Gt,Rt[ft],Rt[ft+1],Rt[ft+2],j,V));continue}}if(Ft.quad(et[ft],et[ft+1],et[ft+2],et[pt],et[pt+1],et[pt+2],it[pt],it[pt+1],it[pt+2],it[ft],it[ft+1],it[ft+2],j,V),Ft.quad(it[ft],it[ft+1],it[ft+2],it[pt],it[pt+1],it[pt+2],Rt[pt],Rt[pt+1],Rt[pt+2],Rt[ft],Rt[ft+1],Rt[ft+2],j,V),N){const Yt=U(w===2?7297604:13225162);for(const Lt of[et,Rt])s.quad(Lt[ft],Lt[ft+1],Lt[ft+2],Lt[pt],Lt[pt+1],Lt[pt+2],Lt[pt],Lt[pt+1]+1.05,Lt[pt+2],Lt[ft],Lt[ft+1]+1.05,Lt[ft+2],Yt),s.quad(Lt[ft],Lt[ft+1]-.7,Lt[ft+2],Lt[pt],Lt[pt+1]-.7,Lt[pt+2],Lt[pt],Lt[pt+1],Lt[pt+2],Lt[ft],Lt[ft+1],Lt[ft+2],U(9276036))}}if(b<=5&&!N)for(const lt of[0,O-1]){if(lt===0?L:F)continue;const ft=it[lt*3],pt=it[lt*3+1],Yt=it[lt*3+2];if(e!=null&&e(ft,Yt))continue;const Lt=16;for(let ne=0;ne<Lt;ne++){const Zt=ne/Lt*Math.PI*2,$t=(ne+1)/Lt*Math.PI*2,he=ft+Math.cos($t)*R/2,ue=Yt+Math.sin($t)*R/2,k=ft+Math.cos(Zt)*R/2,ee=Yt+Math.sin(Zt)*R/2;Ft.tri(ft,pt,Yt,he,t.yAt(he,ue)+G,ue,k,t.yAt(k,ee)+G,ee,j,V)}}if(Mt==null||Mt.finish(),S&Rd){let lt=0,ft=0;for(let $t=0;$t<O;$t++)lt+=I[$t*2],ft+=I[$t*2+1];lt/=O,ft/=O;const pt=O>>1,Yt=ZM(I[0],I[1],I[pt*2],I[pt*2+1],I[O*2-2],I[O*2-1]),Lt=Yt?Yt.x:lt,ne=Yt?Yt.z:ft,Zt=Yt?Yt.r:Math.hypot(I[0]-lt,I[1]-ft);Zt>3&&Zt<40&&!(e!=null&&e(Lt,ne))&&!c.some($t=>Math.hypot($t.x-Lt,$t.z-ne)<12)&&c.push({x:Lt,z:ne,r:Zt,w:R})}b<=3&&l.push({cls:b,name:E>=0?i.names[E]:"",width:R,flags:S,pts:it,length:z})}const d=s.vertexCount*3,h=U(13158078),u=U(7314002),f=U(4943936);for(const v of c){const b=v.r-v.w/2-.3;if(b<1.2)continue;const w=t.yAt(v.x,v.z)+.2;s.frame(v.x,w,v.z,0),s.cyl(0,0,0,b,b,.4,14,h,u),s.blob(0,.9,0,b*.45,.8,b*.45,6,3,f,U(7181400)),s.frame()}const p=new In({vertexColors:!0,roughness:.92,metalness:0,side:Le,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),x=s.build();n&&(x.setAttribute("aAsphalt",x.getAttribute("glow")),n(p,!0));const m=new te(Dd(x),p);m.receiveShadow=!0,m.name="roads";const g=Mr(new xn({vertexColors:!0,...Cd})),_=new te(Dd(r.build()),g);_.name="road-markings";const M=new $e;return M.add(m,_),{group:M,index:o,paths:l,pavement:x.getAttribute("position").array,pavementEnd:d}}function Dd(i){return i.deleteAttribute("glow"),i}function ZM(i,t,e,n,s,r){const o=2*(i*(n-r)+e*(r-t)+s*(t-n));if(Math.abs(o)<.001)return null;const a=i*i+t*t,l=e*e+n*n,c=s*s+r*r,d=(a*(n-r)+l*(r-t)+c*(t-n))/o,h=(a*(s-e)+l*(i-s)+c*(e-i))/o;return{x:d,z:h,r:Math.hypot(i-d,t-h)}}class Id{constructor(t,e=1){Y(this,"ratio");Y(this,"floor");Y(this,"sampleSeconds",0);Y(this,"sampleFrames",0);Y(this,"slowSeconds",0);Y(this,"smoothSeconds",0);Y(this,"retryAfter",0);Y(this,"lastRaise",-1/0);this.ceiling=t,this.ratio=t,this.floor=Math.min(t,e)}resetSampling(){this.sampleSeconds=this.sampleFrames=this.slowSeconds=this.smoothSeconds=0}update(t,e,n){if(e<=0||e>=.25)return this.resetSampling(),!1;if(this.sampleSeconds+=e,this.sampleFrames+=1,this.sampleSeconds<1)return!1;const s=this.sampleSeconds,r=this.sampleFrames/s;return this.sampleSeconds=this.sampleFrames=0,this.slowSeconds=r<n*.9?this.slowSeconds+s:0,this.slowSeconds>=2&&this.ratio>this.floor?(this.ratio=Math.max(this.floor,this.ratio*.75),this.retryAfter=t+(t-this.lastRaise<15?90:20),this.resetSampling(),!0):this.ratio>=this.ceiling||t<this.retryAfter||(this.smoothSeconds=r>=n*.97?this.smoothSeconds+s:0,this.smoothSeconds<8)?!1:(this.ratio=Math.min(this.ceiling,this.ratio/.75),this.lastRaise=t,this.resetSampling(),!0)}}const Lr=-36,cc=170,KM=`
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
`,hc=2;function qM(){const i=new rr(new Uint8Array([128,128,128,255]),1,1);return i.needsUpdate=!0,{fallback:i,maps:Array.from({length:hc},()=>({value:i})),rects:Array.from({length:hc},()=>({value:new Se(0,0,1,0)}))}}function JM({pos:i,nor:t,uv:e,idx:n}){const s=new Re;return s.setAttribute("position",new Te(i,3)),s.setAttribute("normal",new Te(t,3)),s.setAttribute("uv",new Te(e,2)),s.setIndex(new Te(n,1)),s.computeBoundingSphere(),s}function $M(i,t,e,n,s){const r=new In({map:e,roughness:.96,metalness:0});r.onBeforeCompile=a=>{a.uniforms.uTide=n;for(let l=0;l<hc;l++)a.uniforms["uDetail"+l]=s.maps[l],a.uniforms["uDetailRect"+l]=s.rects[l];a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform float uTide;
uniform sampler2D uDetail0;
uniform vec4 uDetailRect0;
uniform sampler2D uDetail1;
uniform vec4 uDetailRect1;
${KM}`).replace("#include <map_fragment>",`#include <map_fragment>
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
        }`)},r.customProgramCacheKey=()=>"inverloch-terrain-3";const o=new $e;for(const a of t){const l=new te(JM(a),r);l.receiveShadow=!0,l.name="terrain",o.add(l)}return o.add(QM(i),tv(i)),o}function jM(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function QM(i){const t=jM(i),e=t.length,n=[],s=[],r=[],o=new Pt(9074780),a=new Pt(6180669),l=new Pt(3813673),c=[[0,o,a],[1,a,l]];for(let u=0;u<e;u++){const[f,p]=t[u],[x,m]=t[(u+1)%e],g=i.yAt(f,p),_=i.yAt(x,m),M=x-f,v=m-p,b=Math.hypot(M,v)||1,w=-v/b*-1,S=M/b*-1;for(const[y,E,T]of c){const P=y===0?g:g-6,N=y===0?g-6:Lr,L=y===0?_:_-6,F=y===0?_-6:Lr;n.push(f,P,p,x,L,m,x,F,m,f,P,p,x,F,m,f,N,p);for(const I of[E,E,T,E,T,T])s.push(I.r,I.g,I.b);for(let I=0;I<6;I++)r.push(w,0,S)}}const d=new Re;d.setAttribute("position",new ye(n,3)),d.setAttribute("normal",new ye(r,3)),d.setAttribute("color",new ye(s,3));const h=new te(d,new In({vertexColors:!0,roughness:1,side:Le}));return h.name="skirt",h}function tv(i){const t=new $e,e=i.xMax-i.xMin+cc*2,n=i.zMax-i.zMin+cc*2,s=190,r=(i.xMin+i.xMax)/2,o=(i.zMin+i.zMax)/2,a=new te(new Yi(e,s,n),new In({color:1779245,roughness:.75,metalness:.1}));a.position.set(r,Lr-s/2,o),a.receiveShadow=!0,t.add(a);const l=document.createElement("canvas");l.width=2048,l.height=160;const c=l.getContext("2d");c.fillStyle="#1b262d",c.fillRect(0,0,l.width,l.height),c.fillStyle="#e9d9a6",c.textBaseline="middle",c.font="600 78px 'Space Grotesk', system-ui, sans-serif",c.fillText("INVERLOCH",40,84);const d=c.measureText("INVERLOCH").width;c.fillStyle="#9fb4bd",c.font="400 42px 'Space Grotesk', system-ui, sans-serif",c.fillText("Bass Coast, Victoria   ·   38.63° S  145.73° E   ·   Anderson Inlet & Bass Strait",40+d+46,88);const h=new _l(l);h.colorSpace=Fe,h.anisotropy=8;const u=1700,f=new te(new Vn(u,u*(l.height/l.width)),new xn({map:h,toneMapped:!1}));f.position.set(r-e/2+u/2+110,Lr-s/2,o+n/2+.6),t.add(f);const p=document.createElement("canvas");p.width=p.height=256;const x=p.getContext("2d");x.fillStyle="#e9d9a6",x.beginPath(),x.moveTo(128,18),x.lineTo(176,150),x.lineTo(128,122),x.lineTo(80,150),x.closePath(),x.fill(),x.font="700 86px 'Space Grotesk', system-ui, sans-serif",x.textAlign="center",x.fillText("N",128,240);const m=new _l(p);m.colorSpace=Fe;const g=new te(new Vn(130,130),new xn({map:m,transparent:!0,toneMapped:!1}));return g.rotation.x=-Math.PI/2,g.position.set(i.xMax+cc/2,Lr+.6,i.zMin+120),t.add(g),t}const Nd=[[-.375,-.125],[.125,-.375],[.375,.125],[-.125,.375]],ev=4e3,nv=12e3;class iv{constructor(t,e){Y(this,"size",new Ut);Y(this,"screen",new nl);Y(this,"screenCamera",new Rl);Y(this,"blend",new Xe({depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{previous:{value:null},currentFrame:{value:null},weight:{value:1}},vertexShader:`
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
    `}));Y(this,"quad",new te(new Vn(2,2),this.blend));Y(this,"history");Y(this,"sample");Y(this,"capture");this.renderer=t,this.onFinish=e,this.quad.frustumCulled=!1,this.screen.add(this.quad)}get pending(){return!!this.capture&&!this.capture.encoding}start(){return this.capture?Promise.reject(new Error("An antialiased photo is already being captured.")):new Promise((t,e)=>{const n=this.capture={resolve:t,reject:e,deadline:performance.now()+nv,samples:0,bestSamples:0,encoding:!1};this.armTimeout(n)})}draw(t,e,n){var a,l;const s=this.capture;if(!s||s.encoding)return!1;this.renderer.getDrawingBufferSize(this.size);const{x:r,y:o}=this.size;(((a=this.history)==null?void 0:a.image.width)!==r||((l=this.history)==null?void 0:l.image.height)!==o)&&(this.releaseTextures(),this.history=new Eh(r,o),this.sample=new Eh(r,o),this.blend.uniforms.previous.value=this.history,this.blend.uniforms.currentFrame.value=this.sample,n=!0),n&&(s.samples=0);try{return this.drawSample(t,e,s.samples),s.samples++,s.samples===Nd.length?this.encode(s):(this.renderer.copyFramebufferToTexture(this.history),s.samples>s.bestSamples&&(s.bestSamples=s.samples,this.armTimeout(s))),!0}catch{return this.cancel("The browser could not capture an antialiased photo."),!1}}drawSample(t,e,n){const[s,r]=Nd[n],o=e.projectionMatrix.elements,a=o[8],l=o[9];o[8]+=2*s/this.size.x,o[9]+=2*r/this.size.y,e.projectionMatrixInverse.copy(e.projectionMatrix).invert();const c=this.renderer.shadowMap.autoUpdate;n>0&&(this.renderer.shadowMap.autoUpdate=!1);try{this.renderer.render(t,e)}finally{o[8]=a,o[9]=l,e.projectionMatrixInverse.copy(e.projectionMatrix).invert(),this.renderer.shadowMap.autoUpdate=c}n>0&&(this.renderer.copyFramebufferToTexture(this.sample),this.blend.uniforms.weight.value=1/(n+1),this.renderer.render(this.screen,this.screenCamera))}encode(t){t.encoding=!0,this.armTimeout(t),this.releaseTextures(),this.onFinish(),this.renderer.domElement.toBlob(e=>{this.finish(t)&&(e?t.resolve(e):t.reject(new Error("The browser did not write the antialiased PNG.")))},"image/png")}armTimeout(t){window.clearTimeout(t.timeout);const e=Math.min(ev,Math.max(0,t.deadline-performance.now())),n=t.encoding?"The browser did not finish writing the antialiased PNG.":"The view did not stay still long enough to save an antialiased photo.";t.timeout=window.setTimeout(()=>this.cancel(n),e)}cancel(t){const e=this.capture;!e||!this.finish(e)||e.reject(new Error(t))}finish(t){return this.capture!==t?!1:(window.clearTimeout(t.timeout),this.capture=void 0,t.encoding||(this.releaseTextures(),this.onFinish()),!0)}releaseTextures(){var t,e;(t=this.history)==null||t.dispose(),(e=this.sample)==null||e.dispose(),this.history=this.sample=void 0,this.blend.uniforms.previous.value=null,this.blend.uniforms.currentFrame.value=null}dispose(){this.cancel("The Inverloch view was closed before saving the photo."),this.quad.geometry.dispose(),this.blend.dispose()}}function $n(i,t,e,n,s,r,o,a,l,c){const d=new bl(1,0),h=d.getAttribute("position"),u=[];for(let f=0;f<h.count;f++){const p=h.getX(f),x=h.getY(f),m=h.getZ(f),g=Math.sin(p*12.9898+x*78.233+m*37.719+a*4.1)*43758.5453,_=.8+(g-Math.floor(g))*.42;u.push([t+p*s*_,e+x*r*(x<0?.75:_),n+m*o*_])}for(let f=0;f<u.length;f+=3){const[p,x,m]=[u[f],u[f+1],u[f+2]],g=se.clamp(((p[1]+x[1]+m[1])/3-(e-r))/(2*r),0,1);i.tri(p[0],p[1],p[2],x[0],x[1],x[2],m[0],m[1],m[2],xr(l,c,g))}d.dispose()}function pi(i){const t=i.build();return t.deleteAttribute("glow"),t}function sv(){const i=[];let t=new oe;return $n(t,0,.44,0,.82,.56,.82,1,U(3098152),U(7507285)),i.push(pi(t)),t=new oe,t.cyl(0,0,0,.04,.026,.56,4,U(11905429)),$n(t,0,.72,0,.36,.3,.36,2,U(4151352),U(9349240)),$n(t,.17,.52,.1,.24,.19,.24,3,U(3887925),U(8362603)),i.push(pi(t)),t=new oe,t.cyl(0,0,0,.055,.04,.4,4,U(7297608)),$n(t,0,.64,0,.46,.38,.46,4,U(3695150),U(9091170)),i.push(pi(t)),t=new oe,t.cyl(0,0,0,.035,.03,.16,4,U(5916728)),t.cyl(0,.12,0,.23,.11,.42,6,U(2506539)),t.cyl(0,.5,0,.15,0,.5,6,U(4020796)),i.push(pi(t)),i}function Ud(i){const t=[],e=i?5:7;let n=new oe;return n.blob(0,.48,0,.81,.52,.81,e,2,U(4018735),U(7507285)),t.push(pi(n)),n=new oe,i||(n.cyl(0,0,0,.04,.026,.56,3,U(11905429)),n.blob(.17,.52,.1,.24,.19,.24,4,2,U(3887925),U(8362603))),n.blob(i?.05:0,.72,0,i?.39:.36,.3,.36,e,2,U(4546110),U(9349240)),t.push(pi(n)),n=new oe,i||n.cyl(0,0,0,.055,.04,.4,3,U(7297608)),n.blob(0,.64,0,.46,.38,.46,e,2,U(3695150),U(9091170)),t.push(pi(n)),n=new oe,i?n.cyl(0,.15,0,.23,0,.85,e,U(4020796)):(n.cyl(0,.12,0,.23,.11,.42,4,U(2506539)),n.cyl(0,.5,0,.15,0,.5,5,U(4020796))),t.push(pi(n)),t}function mi(i,t,e,n,s,r,o){const a=new W(...t),l=new W(...e),c=l.clone().sub(a).normalize(),d=new W(c.z,0,-c.x);d.lengthSq()<1e-6&&d.set(1,0,0),d.normalize();const h=c.clone().cross(d),u=(f,p,x)=>{const m=x*2*Math.PI/5,g=f.clone().addScaledVector(d,p*Math.cos(m)).addScaledVector(h,p*Math.sin(m));return[g.x,g.y,g.z]};for(let f=0;f<5;f++)i.quad(...u(a,n,f),...u(a,n,f+1),...u(l,s,f+1),...u(l,s,f),f%3===0?r:o)}function rv(i,t){const e=new oe,n=t?1:-1,s=31+i*17+t*41;if(i===1){const r=U(9537397),o=U(13682093),a=U(3887925),l=U(9349240),c=[.025*n,.39,.015],d=[-.09*n,.67,-.025],h=[-.2*n,t?.91:.87,-.09],u=[.225*n,t?.61:.7,.1],f=[.06*n,.8,t?.2:.16];mi(e,[0,-.015,0],c,.054,.037,r,o),mi(e,[c[0],c[1]-.018,c[2]],d,.038,.023,r,o),mi(e,[d[0],d[1]-.018,d[2]],h,.024,.007,r,o),mi(e,[c[0],c[1]-.035,c[2]],u,.025,.007,r,o),mi(e,[d[0],d[1]-.055,d[2]],f,.02,.006,r,o),$n(e,...h,.25,.15,.24,s,a,l),$n(e,...u,.2,.15,.215,s+1,a,l),$n(e,...f,t?.17:.205,.13,.2,s+2,a,l)}else{const r=U(5326391),o=U(8681061),a=U(3098152),l=U(7507285),c=[-.04*n,.23,-.03],d=[-.25*n,t?.57:.62,-.1],h=[.405*n,t?.44:.41,.13],u=[-.08*n,.4,t?.34:.36];mi(e,[0,-.015,0],c,.073,.042,r,o),mi(e,[c[0],c[1]-.06,c[2]],d,.044,.01,r,o),mi(e,[c[0],c[1]-.09,c[2]],h,.039,.009,r,o),mi(e,[c[0],c[1]-.07,c[2]],u,.033,.009,r,o),$n(e,...d,.57,.39,t?.45:.54,s,a,l),$n(e,...h,.45,.29,.45,s+1,a,l),$n(e,...u,.38,.27,.42,s+2,a,l)}return pi(e)}const ov=32,uc=6,Fd=48,av=64,lv=32,cv=4,hv=30,ks=i=>Math.floor(i/ov),Od=(i,t)=>i*65536+t;class uv{constructor(t,e,n){Y(this,"cells",new Map);Y(this,"meshes");Y(this,"active",new Map);Y(this,"previous",new W(1/0,1/0,1/0));Y(this,"hidden",new re().makeScale(0,0,0));Y(this,"tint",new Pt);Y(this,"range",0);this.roads=n,this.meshes=Array.from({length:4},(s,r)=>{const o=new He(rv(r>>1,r&1),e,Fd);return o.name=["roadside-scrub","roadside-gum"][r>>1],o.instanceMatrix.setUsage(Gi),o.count=0,o.visible=!1,o.castShadow=!0,t.add(o),o})}consider(t,e,n,s,r,o){if(s>1)return;let a=Math.imul(Math.round(t*4),73244475)^Math.imul(Math.round(n*4),668265261)^s;a=Math.imul(a^a>>>16,73244475)>>>0;const l=Od(ks(t),ks(n)),c=this.cells.get(l);if((c==null?void 0:c.length)===uc&&a>=c[uc-1].rank)return;const d=this.roads.nearest(t,n,hv);if(!d||d.cls>3)return;r.instanceMatrix.setUsage(Gi);const h={x:t,y:e,z:n,style:s*2+(a>>>8&1),rank:a,fallback:r,slot:o};c?(c.push(h),c.sort((u,f)=>u.rank-f.rank),c.length>uc&&c.pop()):this.cells.set(l,[h])}setFallback(t,e){var s;const n=t.fallback.instanceMatrix;t.fallback.setMatrixAt(t.slot,e),((s=n.updateRanges[0])==null?void 0:s.count)!==n.array.length&&(n.updateRanges.length>=48?(n.clearUpdateRanges(),n.addUpdateRange(0,n.array.length)):n.addUpdateRange(t.slot*16,16)),n.needsUpdate=!0}show(t){if(t.length===this.active.size&&t.every(n=>this.active.has(n)))return;const e=new Set(t);for(const[n,s]of this.active)e.has(n)||(this.setFallback(n,s),this.active.delete(n));for(const n of this.meshes)n.count=0;for(const n of t){let s=this.active.get(n);s||(s=new re,n.fallback.getMatrixAt(n.slot,s),this.active.set(n,s),this.setFallback(n,this.hidden));const r=this.meshes[n.style],o=r.count++;r.setMatrixAt(o,s),n.fallback.getColorAt(n.slot,this.tint),r.setColorAt(o,this.tint)}for(const n of this.meshes)n.visible=n.count>0,n.visible&&(n.instanceMatrix.needsUpdate=!0,n.instanceColor.needsUpdate=!0,n.computeBoundingSphere())}update(t,e,n){const s=e<=lv?Math.min(av,n*.65):0;if(s===this.range&&this.previous.distanceToSquared(t)<cv**2){let o=!0;for(const a of this.active.keys())if(!a.fallback.visible){o=!1;break}if(o)return}if(this.range=s,this.previous.copy(t),!s){this.show([]);return}const r=[];for(let o=ks(t.x-s);o<=ks(t.x+s);o++)for(let a=ks(t.z-s);a<=ks(t.z+s);a++)for(const l of this.cells.get(Od(o,a))??[]){if(!l.fallback.visible)continue;const c=(t.x-l.x)**2+(t.y-l.y)**2+(t.z-l.z)**2;c<s**2&&r.push({tree:l,distance:c})}r.sort((o,a)=>o.distance-a.distance||o.tree.rank-a.tree.rank),this.show(r.slice(0,Fd).map(({tree:o})=>o))}}function*zd(i,t,e,n=()=>!1,s){const r=new $e;r.name="trees";const o=[sv(),Ud(!1),Ud(!0)],a=[],l=new _o({vertexColors:!0}),c=s&&e>.35?new uv(r,l,s):void 0,d=650,h=new Map,u=i.trees,f=De(88);for(let b=0;b<u.length;b+=Bu){if(b/Bu%256===0&&(yield),e<1&&f()>e||n(u[b]/4,u[b+1]/4))continue;const S=`${u[b+2]>>8}:${Math.floor(u[b]/4/d)}:${Math.floor(u[b+1]/4/d)}`;let y=h.get(S);y||h.set(S,y=[]),y.push(b)}const p=new re,x=new Rn,m=new W,g=new W,_=new W(0,1,0),M=new Pt;let v=0;for(const[b,w]of h){const S=Number(b.split(":")[0]),y=o.map((E,T)=>{const R=new He(E[S],l,w.length);return R.name=["tree-near","tree-mid","tree-far"][T],R});for(let E=0;E<w.length;E++){E%64===0&&(yield);const T=w[E],R=u[T]/4,P=u[T+1]/4,N=(u[T+2]&255)/10,L=De(T*2654435761+11);g.set(R,t.yAt(R,P)-.15,P),x.setFromAxisAngle(_,L()*Math.PI*2);const F=.85+L()*.35;m.set(N*F,N,N*(.85+L()*.35)),p.compose(g,x,m);const I=.8+L()*.34;M.setRGB(I*(.94+L()*.14),I,I*(.9+L()*.12));for(const O of y)O.setMatrixAt(E,p),O.setColorAt(E,M);c==null||c.consider(R,g.y,P,S,y[0],E)}a.push(new fd(y.map(E=>[E]),r)),v+=w.length}return{group:r,count:v,dispose(){r.removeFromParent();const b=new Set(o.flat());r.traverse(w=>{w instanceof He&&(b.add(w.geometry),w.dispose())});for(const w of b)w.dispose();l.dispose()},updateLod(b,w,S){for(const y of a)y.update(b,w,S);c==null||c.update(b,w,S[0])}}}function dv(...i){const t=zd(...i);let e=t.next();for(;!e.done;)e=t.next();return e.value}async function fv(i,...t){const e=zd(...t);for(;!i.aborted;){const n=performance.now()+3;let s=e.next();for(;!s.done&&performance.now()<n;)s=e.next();if(s.done)return s.value;await new Promise(r=>requestAnimationFrame(()=>r()))}return null}function pv(i){return new Promise(t=>{const e=()=>{cancelAnimationFrame(n),i.removeEventListener("abort",e),t()},n=requestAnimationFrame(e);i.addEventListener("abort",e,{once:!0})})}async function mv(i,t,e,n){var f;if(n.aborted||!i.extensions.has("KHR_parallel_shader_compile"))return;const s=p=>i.properties.get(p),r=i.renderLists.get(t,0),o=new Set,a=[];for(const p of[...r.opaque,...r.transmissive,...r.transparent]){const{object:x,material:m}=p,g=s(m).currentProgram;if(!g)continue;const _=g.id+":"+!!x.isInstancedMesh;if(!o.has(_)&&(o.add(_),a.push({object:x,material:m}),a.length>=48))break}if(!a.length)return;const l=new nl,c=new Yh;c.castShadow=!0,l.add(c,new Gh),l.environment=t.environment,l.fog=t.fog;const d=[],h=new Set,u=()=>{n.removeEventListener("abort",u);for(const p of d.splice(0))p.dispose()};n.addEventListener("abort",u,{once:!0});try{let p=0;const x=performance.now()+2500;for(;!n.aborted&&(p<a.length||h.size)&&(await pv(n),!(n.aborted||performance.now()>x||i.getContext().isContextLost()));){if(p<a.length&&h.size<4){const{object:m,material:g}=a[p++],M=(g instanceof Xe?Object.assign(Object.create(g),{uniforms:{}}):g).clone();if(M instanceof Xe&&g instanceof Xe)for(const[w,S]of Object.entries(g.uniforms))M.uniforms[w]={...S};M.onBeforeCompile=g.onBeforeCompile,M.customProgramCacheKey=()=>g.customProgramCacheKey(),d.push(M);const v=Object.assign(Object.create(m),{children:[],material:M}),b=i.shadowMap.enabled;try{i.shadowMap.enabled=!0,i.compile(v,e,l)}finally{i.shadowMap.enabled=b}for(const w of((f=s(M).programs)==null?void 0:f.values())??[])h.add(w)}for(const m of h)if(m.isReady()){m.getUniforms(),m.getAttributes(),h.delete(m);break}}if(!n.aborted)return u}catch{}u()}const gv=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,xv=`
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
}`;function _v(i,t,e){const n=i.w*i.h,s=new Uint16Array(n*2);for(let p=0;p<n;p++)s[p*2]=ch.toHalfFloat(i.raw[p]),s[p*2+1]=ch.toHalfFloat(i.exposure[p]);const r=new rr(s,i.w,i.h,yi,Tn);r.minFilter=r.magFilter=qe,r.wrapS=r.wrapT=zn,r.needsUpdate=!0;const o={tField:{value:r},uSize:{value:new Ut(i.sizeX,i.sizeZ)},uTide:t,uTime:{value:0},uSunDir:{value:new W(.4,.8,.3).normalize()},uSunColor:{value:new Pt(16773848)},uShallow:{value:new Pt(7129789)},uDeep:{value:new Pt(937848)},uSky:{value:new Pt(12573938)},uFoam:{value:1}};e&&(o.uInletRain=e);const a=new Xe({uniforms:o,vertexShader:gv,fragmentShader:xv,transparent:!0,depthWrite:!1,defines:e?{RAIN_RIPPLES:1}:{}}),l=new Vn(i.xMax-i.xMin,i.zMax-i.zMin);l.rotateX(-Math.PI/2);const c=new te(l,a);c.position.set((i.xMin+i.xMax)/2,t.value*Zn,(i.zMin+i.zMax)/2),c.renderOrder=2,c.name="water";const d=new te(new Re,new xn({color:1929103,transparent:!0,opacity:.8,side:Le,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));d.renderOrder=1,d.name="water-edge";const h=[];for(let p=0;p<i.nx;p++)h.push([i.xMin+p*i.dx,i.zMin]);for(let p=1;p<i.nz;p++)h.push([i.xMax,i.zMin+p*i.dz]);for(let p=i.nx-2;p>=0;p--)h.push([i.xMin+p*i.dx,i.zMax]);for(let p=i.nz-2;p>=1;p--)h.push([i.xMin,i.zMin+p*i.dz]);const u=h.map(([p,x])=>i.yAt(p,x)),f=p=>{t.value=p;const x=p*Zn;c.position.y=x;const m=[],g=h.length;for(let M=0;M<g;M++){const v=(M+1)%g,b=u[M],w=u[v];if(b>=x&&w>=x)continue;const[S,y]=h[M],[E,T]=h[v],R=Math.min(b,x),P=Math.min(w,x);m.push(S,x,y,E,x,T,E,P,T,S,x,y,E,P,T,S,R,y)}d.geometry.dispose();const _=new Re;_.setAttribute("position",new ye(m,3)),d.geometry=_};return f(t.value),{mesh:c,skirt:d,uniforms:o,setTide:f}}const Mv="detail-abeckett-ultra-v1.json",dc=-38.63351,Bd=145.72774,vv=111320*Math.cos(dc*Math.PI/180);class Sv{constructor(t,e,n,s,r){Y(this,"group");Y(this,"daylight",{value:1});Y(this,"request");Y(this,"retryAt",0);Y(this,"origin");Y(this,"sx");Y(this,"sz");this.scene=t,this.manifest=e,this.ground=s,this.redraw=r,this.origin=n(dc,Bd);const o=n(dc-100/110540,Bd+100/vv);this.sx=(o[0]-this.origin[0])/100,this.sz=(o[1]-this.origin[1])/100}update(t,e){this.daylight.value=Math.min(1,.08+e*.3);const n=this.origin[0]+22*this.sx,s=this.origin[1]+37*this.sz,r=Math.hypot(t.x-n,t.y-this.ground(n,s),t.z-s);if(this.group)this.group.visible=r<(this.group.visible?155:130);else if(r>220&&this.request)this.request.abort(),this.request=void 0;else if(r<155&&!this.request&&performance.now()>=this.retryAt){const o=this.request=new AbortController;this.load(o)}}async load(t){try{const e=new URL(Mv,new URL(this.manifest,document.baseURI)),n=await fetch(e,{signal:t.signal});if(!n.ok)throw new Error(String(n.status));const s=await n.json();if(t.signal.aborted)return;const r=this.build(s);this.group=r,this.scene.add(r),this.redraw()}catch{t.signal.aborted||(this.retryAt=performance.now()+3e4)}finally{this.request===t&&(this.request=void 0)}}build(t){const e=new oe,n=new oe,s=new oe,r=U(6842465),o=U(10196618),a=U(3883588),l=U(12039851),c=U(16777215);for(const[u,f,p,x,m,g,_]of t.fronts){const M=Math.hypot(p-u,x-f),v=Math.atan2(m,g);e.frame(u,0,f,v),n.frame(u,0,f,v);const b=T=>3.15+(_?.24*(1-T/3.2):0);for(const T of[.32,1.58,2.97]){const R=b(T);e.box(.05,R-.09,T-.045,M-.05,R,T+.045,r)}const w=Math.max(2,Math.round(M/1.25));for(let T=0;T<=w;T++){const R=.095+T*(M-.19)/w;e.quad(R,b(.22)-.06,.22,R,b(3.05)-.06,3.05,R+.07,b(3.05)-.06,3.05,R+.07,b(.22)-.06,.22,o)}e.box(.055,3.045,3.14,M-.055,3.105,3.3,r);const S=M-1.7,y=Math.max(2,Math.round((M-1.4)/2.1)),E=_?.22:.34;for(let T=0;T<y;T++){const R=.18+S*T/y+.055,P=.18+S*(T+1)/y-.055;n.quad(R,.57,E,P,.57,E,P,2.72,E,R,2.72,E,c),e.box(R-.035,.51,E-.045,P+.035,.56,E+.04,a),e.box(R-.035,2.25,E-.025,P+.035,2.28,E+.02,l)}e.box(M-1.17,.93,E+.05,M-1.135,1.35,E+.085,l),e.box(M-1.28,.13,.15,M-.2,.17,.42,o)}for(const[u,f,p,x]of t.trees){const m=De(x+431),g=[5466952,7701590,8819806,6781777].map(U);s.frame(u,0,f);for(let _=0;_<90;_++){const M=m()*Math.PI*2,v=(1.05+m()*2.25)*p,b=v*Math.sin(M),w=v*Math.cos(M),S=(6.55+1.6*m()-.35*v)*p,y=(.11+.22*m())*p,E=(.16+.28*m())*p,T=g[_%4];s.tri(b-y,S+E,w,b+y,S+.42*E,w+.1,b,S-E,w+.18,T)}}const d=new $e;d.name="A'Beckett Street close detail";const h=(u,f,p)=>{const x=u.build(),m=x.getAttribute("position");for(let _=0;_<m.count;_++){const M=this.origin[0]+m.getX(_)*this.sx,v=this.origin[1]+m.getZ(_)*this.sz;m.setXYZ(_,M,this.ground(M,v)+.08+m.getY(_),v)}x.deleteAttribute("glow"),x.computeBoundingSphere();const g=new te(x,f);g.castShadow=p,g.receiveShadow=p,d.add(g)};return h(e,new In({vertexColors:!0,roughness:.73,metalness:.1,side:Le}),!0),h(s,new _o({vertexColors:!0,side:Le}),!0),h(n,new Xe({uniforms:{daylight:this.daylight},transparent:!0,depthWrite:!1,vertexShader:`varying vec3 world, facing;
        void main(){vec4 p=modelMatrix*vec4(position,1.);world=p.xyz;facing=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*p;}`,fragmentShader:`varying vec3 world, facing; uniform float daylight;
        void main(){vec3 eye=normalize(cameraPosition-world),n=normalize(facing),r=reflect(-eye,n);
          float sky=smoothstep(-.09,.27,r.y),f=pow(1.-clamp(dot(eye,n),0.,1.),3.);
          gl_FragColor=vec4(daylight*mix(vec3(.13,.18,.15),vec3(.54,.68,.78),sky),.045+.19*f+.085*sky);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),!1),d}dispose(){var t;(t=this.request)==null||t.abort()}}const Gd=-.9,kd=1.3,Hd=.2,Hs={x:260,z:150,dist:3900,polar:55,azimuth:16},Vd={ultra:{step:1,trees:1,shadow:4096,pixelRatio:2},high:{step:1,trees:1,shadow:4096,pixelRatio:2},medium:{step:2,trees:.6,shadow:2048,pixelRatio:1.3},low:{step:2,trees:.35,shadow:0,pixelRatio:1}},yv={ultra:{cars:[200,400,1100],trees:[260,770,4e3]},high:{cars:[170,340,1050],trees:[235,710,3800]},medium:{cars:[120,270,820],trees:[160,530,2850]},low:{cars:[85,190,600],trees:[100,380,2200]}},bv=()=>new Promise(i=>requestAnimationFrame(()=>i()));function wv(i,t){const n=t.positions,s=t.normals,r=t.colors,o=t.uvs,a=t.indices,l=a?a.length:n.length/3,c=new re().fromArray(Array.from(t.matrix)),d=new Xt().getNormalMatrix(c),h=new W,u=M=>{const v=a?a[M]:M,b=new Float64Array(11);return h.set(n[v*3],n[v*3+1],n[v*3+2]).applyMatrix4(c),b[0]=h.x,b[1]=h.y,b[2]=h.z,s&&(h.set(s[v*3],s[v*3+1],s[v*3+2]).applyMatrix3(d).normalize(),b[3]=h.x,b[4]=h.y,b[5]=h.z),r&&(b[6]=r[v*3],b[7]=r[v*3+1],b[8]=r[v*3+2]),o&&(b[9]=o[v*2],b[10]=o[v*2+1]),b},f=[],p=[],x=[],m=[],g=M=>{f.push(M[0],M[1]+i.yAt(M[0],M[2]),M[2]),s&&p.push(M[3],M[4],M[5]),r&&x.push(M[6],M[7],M[8]),o&&m.push(M[9],M[10])},_=(M,v,b)=>{g(M),g(v),g(b)};for(let M=0;M+2<l;M+=3){const v=u(M),b=u(M+1),w=u(M+2);rc(i,v,b,w,_)}return{positions:new Float32Array(f),normals:s?new Float32Array(p):void 0,colors:r?new Float32Array(x):void 0,uvs:o?new Float32Array(m):void 0}}function Ev(i,t,e){let n=0;for(let s=0;s<i.length;s++){const r=i[s],o=i[(s+1)%i.length],a=(o[0]-r[0])*(e-r[1])-(o[1]-r[1])*(t-r[0]);if(a!==0){if(n===0)n=Math.sign(a);else if(Math.sign(a)!==n)return!1}}return!0}const Tv=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class Av{constructor(t,e,n,s){Y(this,"renderer");Y(this,"scene",new nl);Y(this,"camera",new Nn(38,1,5,9e4));Y(this,"controls");Y(this,"atmosphere");Y(this,"clouds");Y(this,"hasWeatherTime",!1);Y(this,"weather",new MM);Y(this,"showers");Y(this,"storm");Y(this,"water");Y(this,"coastalHaze");Y(this,"stillPhoto");Y(this,"onPhotoVisibilityChange",()=>{var t;document.hidden&&((t=this.stillPhoto)==null||t.cancel("Keep the Inverloch view visible while saving the photo."))});Y(this,"hf");Y(this,"life");Y(this,"trees");Y(this,"prepareTrees");Y(this,"qualityChange",Promise.resolve(!1));Y(this,"releaseWarmPrograms");Y(this,"solid");Y(this,"designedWalls",[]);Y(this,"blockers",{polygons:[],circles:[]});Y(this,"labels");Y(this,"places",[]);Y(this,"tide",{value:Hd});Y(this,"raf",0);Y(this,"last",0);Y(this,"time",0);Y(this,"dirty",!0);Y(this,"ultraStreet");Y(this,"animating",!0);Y(this,"disposed",!1);Y(this,"abort",new AbortController);Y(this,"worker");Y(this,"detailStreaming");Y(this,"resizeObserver");Y(this,"flight");Y(this,"lastCompass",NaN);Y(this,"width",1);Y(this,"height",1);Y(this,"quality","high");Y(this,"resolution");Y(this,"pacing");Y(this,"solarMinutes",NaN);Y(this,"roadPaths",[]);Y(this,"roadOverlay",new UM);Y(this,"external");Y(this,"meta");Y(this,"shadowAim",new W);Y(this,"lookDir",new W);Y(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=se.degToRad(e.azimuth),r=-Math.sin(s),o=-Math.cos(s),a=Math.cos(s),l=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+o*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-o*n};break;case"ArrowLeft":c={...e,x:e.x-a*n,z:e.z-l*n};break;case"ArrowRight":c={...e,x:e.x+a*n,z:e.z+l*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=Hs;break;default:return}t.preventDefault(),this.fly(c,.3)});Y(this,"frame",t=>{var p,x,m,g,_,M,v,b,w,S;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,document.hidden){this.pacing.reset(),this.resolution.resetSampling();return}if(this.flight){const y=this.flight;y.t=Math.min(1,y.t+e/y.duration);const E=Tv(y.t),T=(R,P)=>R+(P-R)*E;this.applyView({x:T(y.from.x,y.to.x),z:T(y.from.z,y.to.z),dist:Math.exp(T(Math.log(y.from.dist),Math.log(y.to.dist))),polar:T(y.from.polar,y.to.polar),azimuth:T(y.from.azimuth,y.to.azimuth)}),y.t>=1&&(this.flight=void 0)}this.controls&&!this.external&&this.controls.update()&&(this.dirty=!0);const n=(p=this.stillPhoto)!=null&&p.pending?this.stillPhoto:void 0;if(!n&&this.atmosphere.update(e)&&(this.dirty=!0),!n&&this.animating&&(this.time+=e,this.water.uniforms.uTime.value=this.time,(x=this.life)==null||x.update(e,this.time),this.dirty=!0),!n&&this.opts.assets.detail){const{x:y,y:E,z:T}=this.camera.position;(m=this.detailStreaming)==null||m.update(t/1e3,y,E,T,E-this.hf.yAt(y,T))}if(!this.dirty&&!n)return;const s=this.pacing.takeFrame(t);if(s===void 0)return;const r=this.dirty;this.dirty=!1,!n&&this.animating&&this.resolution.update(t/1e3,s,this.pacing.target)&&this.renderer.setPixelRatio(this.resolution.ratio);const o=this.camera;(g=this.ultraStreet)==null||g.update(o.position,this.atmosphere.sun.intensity);let a,l=1/0;const c=!!this.controls&&!this.external,d=this.hf.yAt(o.position.x,o.position.z);if(c&&(o.position.y=Math.max(o.position.y,d+12)),!n||!this.hasWeatherTime){const y=this.weatherTime(),E=this.weather;E.update(y),this.clouds.update(y),this.clouds.setCover(E.cover),this.clouds.setFlash(((_=this.storm)==null?void 0:_.update(y,E,o.position,this.opts.onThunder))??0);const T=E.rain>.015&&o.position.y-d<4&&this.solidAt(o.position.x,o.position.z);(M=this.showers)==null||M.update(E.rain,E.wetness,this.time,void 0,void 0,T),this.hasWeatherTime=!0}const h=Math.max(1,o.position.y-Math.max(d,this.waterLevel));if(this.controls&&c)a=o.position.distanceTo(this.controls.target),this.shadowAim.copy(this.controls.target);else{o.getWorldDirection(this.lookDir);const y=Math.min(this.lookDir.y<-.05?h/-this.lookDir.y:1e9,40+h*3,3e3);this.shadowAim.copy(o.position).addScaledVector(this.lookDir,y),a=Math.max(y,h)*1.3,l=Math.max(350,h*10)}const u=c?se.clamp(a*.02,2,80):se.clamp(a*.012,.4,60);Math.abs(u-o.near)>o.near*.05&&(o.near=u,o.updateProjectionMatrix());const f=yv[this.quality];if((v=this.life)==null||v.updateParkedLod(o.position,h,f.cars),(b=this.trees)==null||b.updateLod(o.position,h,f.trees),this.atmosphere.aimShadow(this.shadowAim,a),n||(w=this.detailStreaming)==null||w.applyReady(),n!=null&&n.draw(this.scene,o,r)||this.renderer.render(this.scene,o),this.releaseWarmPrograms&&(this.releaseWarmPrograms(),this.releaseWarmPrograms=void 0),(S=this.labels)==null||S.update(o,this.width,this.height,l),c){const y=Math.round(this.currentView().azimuth);y!==this.lastCompass&&(this.lastCompass=y,this.cb.onCompass(y))}});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.external=!!s.external,this.pacing=new z_(s.frameTarget)}async init(){var V;try{this.renderer=new S1({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D model needs.");return}const t=this.renderer;this.quality=this.pickQuality();let e=Vd[this.quality];const n=(navigator.deviceMemory??8)>4;this.quality==="medium"&&n&&!this.opts.quality&&(e={...e,pixelRatio:2,trees:.8}),this.resolution=new Id(Math.min(window.devicePixelRatio||1,e.pixelRatio),this.quality==="low"?.6:1),t.setPixelRatio(this.resolution.ratio),t.outputColorSpace=Fe,t.toneMapping=sa,t.shadowMap.enabled=e.shadow>0,t.shadowMap.type=Vs;const s=t.domElement;this.opts.external?(s.setAttribute("role","img"),s.setAttribute("aria-label","3D model of Inverloch")):(s.tabIndex=0,s.setAttribute("role","application"),s.setAttribute("aria-label","3D model of Inverloch. Drag to pan, right-drag to rotate, scroll to zoom. Arrow keys pan, plus and minus zoom, Q and E rotate.")),s.style.display="block",s.style.outlineOffset="-3px",this.container.appendChild(s),s.addEventListener("webglcontextlost",G=>{var Z;G.preventDefault(),(Z=this.stillPhoto)==null||Z.cancel("The browser lost the graphics context during the photo."),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this model was using.")});const r=this.worker=new bM;let o;try{o=await n_(this.opts.assets,e.step,(G,Z)=>this.cb.onProgress(G*.6,Z),r,this.abort.signal)}catch(G){r.close(),this.disposed||this.cb.onError(G instanceof Error?G.message:"The model data could not be loaded.");return}if(this.disposed){o.ground.dispose();return}const{town:a,heights:l,exposure:c,surface:d,terrainPatches:h,terrainTiles:u,ground:f}=o;this.meta=a.meta,this.quality==="ultra"&&this.opts.external&&((V=this.opts.clearPolygons)!=null&&V.length)&&this.opts.assets.detail&&(this.ultraStreet=new Sv(this.scene,this.opts.assets.detail,this.fromLatLon.bind(this),(G,Z)=>this.hf.yAt(G,Z),()=>{this.dirty=!0}));const p=[...this.opts.clear??[],...(this.opts.clearLatLon??[]).map(G=>{const[Z,X]=this.fromLatLon(G.lat,G.lon);return{x:Z,z:X,r:G.r}})],x=(this.opts.clearPolygons??[]).map(G=>({pts:G.latLon.map(([Z,X])=>this.fromLatLon(Z,X)),roads:!!G.roads})),m=(G,Z,X)=>x.some(K=>(!X||K.roads)&&Ev(K.pts,G,Z)),g=(G,Z)=>p.some(X=>(G-X.x)**2+(Z-X.z)**2<X.r*X.r)||m(G,Z,!1),_=(this.opts.detailLatLon??[]).map(G=>{const[Z,X]=this.fromLatLon(G.lat,G.lon);return{x:Z,z:X,r:G.r}}),M=(G,Z)=>_.some(X=>(G-X.x)**2+(Z-X.z)**2<X.r*X.r);f.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());const v=async(G,Z)=>{this.cb.onProgress(G,Z),await bv()};if(await v(.62,"Shaping the terrain"),this.disposed){f.dispose();return}const b=this.hf=new Uu(l,c,a.meta.grid[0],a.meta.grid[1],a.meta.size[0],a.meta.size[1],e.step,d,h),w=qM();this.scene.add($M(b,u,f,this.tide,w));const S=navigator.deviceMemory??8;this.detailStreaming=new K_(this.opts.assets,this.quality==="low"||S<=4,w,f.anisotropy,r,()=>{this.dirty=!0});const y=this.showers=new IM(this.scene,this.camera,this.quality);this.water=_v(b,this.tide,this.quality==="ultra"?y.inletRain:void 0),this.scene.add(this.water.skirt,this.water.mesh),await v(.7,"Laying out the streets");const E=x.some(G=>G.roads)?(G,Z)=>m(G,Z,!0):void 0,T=YM(a,b,E,(G,Z)=>y.shadeAsphalt(G,Z));this.scene.add(T.group),this.roadPaths=T.paths,this.roadOverlay.add(T.pavement,T.pavementEnd),await v(.78,"Raising the buildings");const R=O_(a,b,T.index,j_,g);this.scene.add(R.group),await v(.86,"Planting trees");const P=(G,Z)=>g(G,Z)||g_(G,Z),N=this.trees=dv(a,b,e.trees,P,T.index);(this.quality==="low"||this.quality==="medium")&&(this.prepareTrees=G=>fv(this.abort.signal,a,b,G,P,T.index)),this.scene.add(N.group),await v(.92,"Adding landmarks");const L={town:a,hf:b,footprints:R.footprints,roads:T.index,paths:T.paths,isClear:g,isDetail:M,hasDetail:_.length>0},F=pM(L);this.scene.add(F.group),this.blockers=R.blockers,this.blockers.polygons.push(...F.blockers.polygons),this.blockers.circles.push(...F.blockers.circles),this.solid=new Map,this.designedWalls=R.designedWalls;for(const G of[...R.footprints.map(Z=>Z.poly),...this.designedWalls]){if(G.length<6)continue;let Z=1/0,X=-1/0,K=1/0,z=-1/0;for(let q=0;q<G.length;q+=2)Z=Math.min(Z,G[q]),X=Math.max(X,G[q]),K=Math.min(K,G[q+1]),z=Math.max(z,G[q+1]);for(let q=Math.floor(Z/16);q<=Math.floor(X/16);q++)for(let nt=Math.floor(K/16);nt<=Math.floor(z/16);nt++){const ht=`${q}_${nt}`,et=this.solid.get(ht);et?et.push(G):this.solid.set(ht,[G])}}if(this.life=new LM(L,F,this.quality==="ultra",(G,Z)=>this.roadSurfaceAt(G,Z),this.opts.roadGrounding?0:pd),this.life.setTide(this.tide.value*Zn),this.scene.add(this.life.group),this.disposed)return;this.clouds=new k1,this.atmosphere=new W1(t,this.water,e.shadow,this.clouds),this.places=$_(a.meta,b);const I=this.places.find(G=>G.id==="inlet");this.storm=new vM(this.scene,I.x,I.z),this.clouds.uniforms.uFlashCenter.value=this.storm.center;const O=this.coastalHaze=new _M(I.x,I.z,this.atmosphere.horizon,this.quality==="ultra"&&this.opts.coastalMist!==!1,this.clouds,{value:this.atmosphere.sunDir},this.atmosphere.cloudShadowStrength);O.setWaterLevel(this.waterLevel),O.addWater(this.water.mesh),O.add(this.scene),this.scene.addEventListener("childadded",G=>O.add(G.child)),this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.labels=new q_(this.labelLayer,this.places,G=>this.flyToPlace(G)),this.external||this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const j=window.matchMedia("(prefers-reduced-motion: reduce)").matches;j&&(this.animating=!1),this.external?this.setExternalCamera(300,900,2600,0,-.42):j?this.applyView(Hs):(this.applyView({...Hs,dist:9500,polar:24,azimuth:-20}),this.fly(Hs,3.4)),this.cb.onProgress(1,"Ready"),this.cb.onReady({quality:this.quality,houses:a.counts.houses,mappedBuildings:a.counts.buildings,trees:N.count,roadPieces:a.counts.roads,sources:a.meta.sources,places:this.places}),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)}get isAnimating(){return this.animating}setAnimating(t){var e;t!==this.animating&&((e=this.resolution)==null||e.resetSampling()),this.animating=t,this.dirty=!0}setFrameTarget(t){var e;this.pacing.setTarget(t)&&((e=this.resolution)==null||e.resetSampling())}setQualityInPlace(t){return t!=="low"&&t!=="medium"?Promise.resolve(!1):(this.qualityChange=this.qualityChange.then(async()=>{var r,o;if(this.disposed||!this.prepareTrees||!this.atmosphere||!this.trees)return!1;if(this.quality===t)return!0;const e=Vd[t],n=await this.prepareTrees(e.trees);if(!n)return!1;if(t==="medium"&&!this.disposed&&(this.releaseWarmPrograms=await mv(this.renderer,this.scene,this.camera,this.abort.signal)),this.disposed)return n.dispose(),!1;this.trees.dispose(),this.trees=n,this.scene.add(n.group),this.quality=t,this.atmosphere.setShadowSize(e.shadow),(r=this.showers)==null||r.setDensity(t);const s=navigator.deviceMemory??8;return(o=this.detailStreaming)==null||o.setSmall(t==="low"||s<=4),this.resolution=new Id(Math.min(window.devicePixelRatio||1,e.pixelRatio),t==="low"?.6:1),this.renderer.setPixelRatio(this.resolution.ratio),this.dirty=!0,!0}).catch(()=>!1),this.qualityChange)}weatherTime(){return Date.now()/1e3}setExternalCamera(t,e,n,s,r){if(!this.external)return;const o=this.camera.position,a=this.camera.rotation,l=o.x===t&&o.y===e&&o.z===n,c=a.order==="YXZ"&&a.x===r&&a.y===s&&a.z===0;l&&c||(this.camera.position.set(t,e,n),this.camera.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}setExternal(t){if(!(t===this.external||!this.hf)){if(this.external=t,t)this.flight=void 0,this.controls&&(this.controls.enabled=!1);else{this.controls||this.setupControls(),this.controls.enabled=!0;const e=this.camera;e.getWorldDirection(this.lookDir);const n=Math.max(1,e.position.y),s=this.lookDir.y<-.05?Math.min(n/-this.lookDir.y,6e3):900,r=this.controls.target.copy(e.position).addScaledVector(this.lookDir,s);r.x=se.clamp(r.x,this.hf.xMin,this.hf.xMax),r.z=se.clamp(r.z,this.hf.zMin,this.hf.zMax),r.y=0,this.controls.update(),this.fly(Hs,1.6)}this.resize()}}getCamera(){const t=new mn().setFromQuaternion(this.camera.quaternion,"YXZ"),e=this.camera.position;return{x:e.x,y:e.y,z:e.z,yaw:t.y,pitch:t.x}}fromLatLon(t,e){const n=this.meta;return n?[(e-n.origin[0])*n.metresPerDegree[0],-(t-n.origin[1])*n.metresPerDegree[1]]:[0,0]}addParts(t){const e=new $e;e.name="guest";const n=t.map(s=>{var f;const r=s.roadOverlay?{...s,positions:this.roadOverlay.project(this.hf,s.positions,s.indices),indices:void 0,normals:void 0,colors:void 0,uvs:void 0,onGround:!0}:s.onGround?{...s,...wv(this.hf,s),indices:void 0}:s,o=new Re,a=(p,x)=>new Te(p instanceof Float32Array?p:Float32Array.from(p),x);o.setAttribute("position",a(r.positions,3)),r.colors&&o.setAttribute("color",a(r.colors,3)),r.uvs&&o.setAttribute("uv",a(r.uvs,2)),r.indices&&o.setIndex(Array.from(r.indices)),r.normals?o.setAttribute("normal",a(r.normals,3)):r.roadOverlay||o.computeVertexNormals();let l=null;r.map&&(l=new Ae(r.map),l.colorSpace=Fe,l.wrapS=l.wrapT=Ks,r.mapRepeat&&l.repeat.set(r.mapRepeat[0],r.mapRepeat[1]),l.anisotropy=4,l.needsUpdate=!0);const c=r.opacity??1,d={color:new Pt().setRGB(...r.color??[1,1,1]),map:l,vertexColors:!!r.colors,transparent:c<1,opacity:c,side:r.doubleSide?Le:Mi,...r.roadOverlay?Cd:{}},h=r.unlit?new xn(d):new In({...d,roughness:r.roughness??.9,metalness:r.metalness??0,emissive:new Pt().setRGB(...r.emissive??[0,0,0]),emissiveIntensity:r.emissiveIntensity??1,emissiveMap:r.glowMap?l:null,flatShading:!!r.flatShading}),u=new te(o,h);return u.matrixAutoUpdate=!1,r.onGround||u.matrix.fromArray(Array.from(r.matrix)),r.wetAsphalt&&h instanceof In&&((f=this.showers)==null||f.shadeAsphalt(h)),r.wetAsphalt&&r.onGround&&!r.roadOverlay&&this.roadOverlay.add(o.getAttribute("position").array),u.userData.fixed=!!r.onGround,u.castShadow=!r.roadOverlay&&c>=1,u.receiveShadow=!r.roadOverlay,e.add(u),u});return this.scene.add(e),this.dirty=!0,{setMatrix:(s,r)=>{const o=n[s];!o||o.userData.fixed||(o.matrix.fromArray(Array.from(r)),o.matrixWorldNeedsUpdate=!0,this.dirty=!0)},setEmissive:(s,r,o,a,l)=>{var d;const c=(d=n[s])==null?void 0:d.material;c instanceof In&&(c.emissive.setRGB(r,o,a),c.emissiveIntensity=l,this.dirty=!0)},remove:()=>{var s;this.scene.remove(e);for(const r of n){this.roadOverlay.remove(r.geometry.getAttribute("position").array),r.geometry.dispose();const o=r.material;(s=o.map)==null||s.dispose(),o.dispose()}this.dirty=!0}}}addTrafficCar(t,e,n,s,r){if(!this.life)throw new Error("Wait for the Inverloch model before adding traffic");const o=this.life.makeTrafficCar(t,e,n,s,r),{mesh:a,scale:l}=o;let c;return{setMatrix:(d,h)=>{d===0&&(a.matrix.fromArray(h),this.opts.roadGrounding||(a.matrix.elements[13]+=pd),a.matrixWorldNeedsUpdate=!0,a.visible=!!(h[0]||h[1]||h[2]),this.dirty=!0)},setSignal:d=>{!c&&d&&(c=Md(t),c.scale.copy(l),a.add(c)),c&&(vd(c,d),this.dirty=!0)},setCabin:d=>{o.setCabin(d),this.dirty=!0},remove:()=>{o.remove(),c==null||c.geometry.dispose(),c==null||c.material.dispose(),this.dirty=!0}}}addPad(t){const e=t.radius??t.halfWidth??5,n=t.radius??t.halfDepth??5,s=t.heading??0,r=Math.cos(s),o=Math.sin(s);let a=1/0,l=-1/0;for(const[f,p]of[[0,0],[-e,-n],[e,-n],[e,n],[-e,n],[0,-n],[0,n],[-e,0],[e,0]]){const x=this.hf.yAt(t.x+f*r+p*o,t.z-f*o+p*r);a=Math.min(a,x),l=Math.max(l,x)}const c=l+(t.lift??.25),d=c-a+1,h=t.radius?new Ml(t.radius,t.radius,d,24):new Yi(e*2,d,n*2),u=new te(h,new In({color:new Pt().setRGB(...t.color),roughness:1}));return u.position.set(t.x,c-d/2,t.z),u.rotation.y=s,u.receiveShadow=!0,u.name="guest-pad",this.scene.add(u),this.dirty=!0,c}setSolarMinutes(t){!this.atmosphere||t===this.solarMinutes||(this.solarMinutes=t,this.atmosphere.setSolar(t),this.dirty=!0)}roadSpot(t){const e=t.trim().toLowerCase();let n=null;for(const p of this.roadPaths)p.name.toLowerCase()===e&&(!n||p.length>n.length)&&(n=p);if(!n)return null;const s=n.pts.length/3,r=0,o=s-1,a=s>>1;let l=n.pts[o*3]-n.pts[r*3],c=n.pts[o*3+2]-n.pts[r*3+2];const d=Math.hypot(l,c)||1;l/=d,c/=d;const h=Math.min(70,d*.5),u=n.pts[a*3]-l*h,f=n.pts[a*3+2]-c*h;return{x:u,y:this.hf.yAt(u,f)+38,z:f,yaw:Math.atan2(-l,-c),pitch:-.42}}groundAt(t,e){return this.hf?this.hf.yAt(t,e):0}roadSurfaceAt(t,e){if(!this.hf||!Number.isFinite(t)||!Number.isFinite(e))return null;const n=this.roadOverlay.heightAt(t,e);return n!==null&&n>=this.hf.yAt(t,e)-.01?n:null}nearestCar(t,e,n){var s;return((s=this.life)==null?void 0:s.nearestCar(t,e,n))??null}addCars(t){var e;(e=this.life)==null||e.addCars(t),this.dirty=!0}driveCar(t,e,n,s,r,o,a=0,l=0,c=0){var h;const d=((h=this.life)==null?void 0:h.driveCar(t,e,n,s,r,o,a,l,c))??!1;return this.dirty=!0,d}setControlledCar(t,e){var s;const n=((s=this.life)==null?void 0:s.setControlledCar(t,e))??!1;return n&&(this.dirty=!0),n}resetCar(t,e){var s;const n=((s=this.life)==null?void 0:s.resetCar(t,e))??!1;return n&&(this.dirty=!0),n}setRemoved({cars:t=[]}){var e;(e=this.life)==null||e.setHiddenCars(t),this.dirty=!0}designedWallFootprints(){return this.designedWalls.map(t=>t.slice())}buildingBlockers(){return this.blockers}parkedCarBlockers(){var t;return((t=this.life)==null?void 0:t.parkedCarBlockers())??[]}parkedCarBlocker(t,e){var n;return((n=this.life)==null?void 0:n.parkedCarBlocker(t,e))??null}solidAt(t,e){var s;const n=(s=this.solid)==null?void 0:s.get(`${Math.floor(t/16)}_${Math.floor(e/16)}`);if(!n)return!1;for(const r of n){let o=!1;for(let a=0,l=r.length/2-1;a<r.length/2;l=a++){const c=r[a*2],d=r[a*2+1],h=r[l*2],u=r[l*2+1];d>e!=u>e&&t<(h-c)*(e-d)/(u-d)+c&&(o=!o)}if(o)return!0}return!1}get waterLevel(){return this.tide.value*Zn}get bounds(){return this.hf?[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]:[-4e3,4e3,-3440,3440]}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}setTide(t){var e,n;this.water&&(this.water.setTide(se.clamp(t,Gd,kd)),(e=this.life)==null||e.setTide(this.tide.value*Zn),(n=this.coastalHaze)==null||n.setWaterLevel(this.waterLevel),this.dirty=!0)}captureStill(){return this.disposed||!this.atmosphere||this.quality!=="ultra"?Promise.reject(new Error("Antialiased photos are available after the Ultra view loads.")):document.hidden?Promise.reject(new Error("Open the Inverloch view to save a photo.")):(this.stillPhoto||(this.stillPhoto=new iv(this.renderer,()=>{this.dirty=!0,this.resolution.resetSampling()}),document.addEventListener("visibilitychange",this.onPhotoVisibilityChange)),this.resolution.resetSampling(),this.stillPhoto.start())}setCoastalMist(t){var e;this.opts.coastalMist=t,(e=this.coastalHaze)==null||e.setMist(this.quality==="ultra"&&t),this.dirty=!0}setLabelsVisible(t){var e;(e=this.labels)==null||e.setVisible(t),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.2)}resetView(){this.fly(Hs,1.8)}setView(t,e,n,s,r,o=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},o)}faceNorth(){const t=this.currentView();this.fly({...t,azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:se.clamp(e.dist*t,this.controls.minDistance,this.controls.maxDistance)},.35)}dispose(){var t,e,n,s,r,o,a,l,c,d;this.disposed=!0,this.abort.abort(),(t=this.ultraStreet)==null||t.dispose(),(e=this.detailStreaming)==null||e.dispose(),(n=this.worker)==null||n.close(),cancelAnimationFrame(this.raf),(s=this.resizeObserver)==null||s.disconnect(),(r=this.labels)==null||r.dispose(),(o=this.stillPhoto)==null||o.dispose(),(a=this.clouds)==null||a.dispose(),(l=this.showers)==null||l.dispose(),(c=this.storm)==null||c.dispose(),document.removeEventListener("visibilitychange",this.onPhotoVisibilityChange),(d=this.controls)==null||d.dispose(),this.renderer&&(this.renderer.domElement.removeEventListener("keydown",this.onKey),this.scene.traverse(h=>{var p,x;const u=h;(x=(p=u.geometry)==null?void 0:p.dispose)==null||x.call(p);const f=Array.isArray(u.material)?u.material:u.material?[u.material]:[];for(const m of f){for(const g of Object.values(m))g instanceof Ae&&g.dispose();m.dispose()}}),this.renderer.dispose(),this.renderer.domElement.remove())}pickQuality(){if(this.opts.quality)return this.opts.quality;const t=new URLSearchParams(window.location.search).get("quality");if(t==="ultra"||t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new F1(this.camera,this.renderer.domElement);t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=70,t.maxDistance=12e3,t.maxPolarAngle=se.degToRad(84),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const e=t.target,n=this.hf;e.x=se.clamp(e.x,n.xMin,n.xMax),e.z=se.clamp(e.z,n.zMin,n.zMax),e.y=0,this.dirty=!0}),this.renderer.domElement.addEventListener("keydown",this.onKey)}clampView(t){var e,n;return{x:se.clamp(t.x,this.hf.xMin,this.hf.xMax),z:se.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:se.clamp(t.dist,((e=this.controls)==null?void 0:e.minDistance)??70,((n=this.controls)==null?void 0:n.maxDistance)??12e3),polar:se.clamp(t.polar,2,84),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=this.camera.position.clone().sub(t),n=new So().setFromVector3(e);return{x:t.x,z:t.z,dist:n.radius,polar:se.radToDeg(n.phi),azimuth:se.radToDeg(n.theta)}}applyView(t){const e=new So(t.dist,se.degToRad(t.polar),se.degToRad(t.azimuth)),n=this.controls.target.set(t.x,0,t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(!this.controls||this.external)return;if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.fov=this.external?60:t/e<.8?52:38,this.camera.updateProjectionMatrix(),this.dirty=!0}}const fc="Map data © OpenStreetMap contributors · Elevation © Geoscience Australia (CC BY 4.0)",Rv=`
.inv-embed, .inv-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the model but never take a touch: drags and pinches must reach the canvas underneath */
.inv-embed-labels, .inv-embed .inv-label { pointer-events: none; }
.inv-embed-credit { position: absolute; left: 50%; bottom: var(--inv-credit-bottom, 6px); transform: translateX(-50%); margin: 0; max-width: calc(100% - 24px);
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; pointer-events: none; }
`,Cv=["low","medium","high","ultra"];function Lv(i,t){if(!document.querySelector("style[data-inverloch-model]")){const u=document.createElement("style");u.setAttribute("data-inverloch-model",""),u.textContent=jn+Rv,document.head.appendChild(u)}const e=document.createElement("div");e.className="inv-embed";const n=document.createElement("div");n.className="inv-embed-layer";const s=document.createElement("div");s.className="inv-embed-layer inv-embed-labels";const r=document.createElement("p");r.className="inv-embed-credit",r.textContent=fc,e.append(n,s,r),i.appendChild(e);const o=typeof t.assets=="string"?{height:t.assets+"height.png",ground:t.assets+(typeof window<"u"&&window.anSmallGround?"ground-2k.webp":"ground.webp"),town:t.assets+"town.json",detail:t.assets+"detail.json"}:t.assets;let a=[],l=!1,c;const d=new Promise((u,f)=>c={ok:u,fail:f}),h=new Av(n,s,{onProgress:(u,f)=>{var p;return(p=t.onProgress)==null?void 0:p.call(t,u,f)},onReady:u=>{a=u.places.map(f=>{const p=Math.min(Math.max(f.view[0]*.55,90),1500),x=f.view[1]*Math.PI/180,m=f.view[2]*Math.PI/180,g=f.x+p*Math.sin(x)*Math.sin(m),_=f.z+p*Math.sin(x)*Math.cos(m),M=Math.max(h.groundAt(g,_),h.waterLevel)+Math.max(p*Math.cos(x),20),v=f.x-g,b=f.y-10-M,w=f.z-_;return{id:f.id,name:f.name,kind:f.kind,x:g,y:M,z:_,yaw:Math.atan2(-v,-w),pitch:Math.atan2(b,Math.hypot(v,w)),tx:f.x,tz:f.z}}),t.labels===!1&&h.setLabelsVisible(!1),l=!0,c.ok()},onError:u=>{var f;return l?(f=t.onError)==null?void 0:f.call(t,u):c.fail(new Error(u))},onCompass:()=>{}},{assets:o,external:!0,quality:t.quality,frameTarget:t.frameTarget,coastalMist:t.coastalMist,onThunder:t.onThunder,clear:t.clear,clearLatLon:t.clearLatLon,clearPolygons:t.clearPolygons,roadGrounding:t.roadGrounding,detailLatLon:t.detailLatLon});return h.init(),{ready:d,setCamera:(u,f,p,x,m)=>h.setExternalCamera(u,f,p,x,m),setMinutes:u=>h.setSolarMinutes(u),setTide:u=>h.setTide(u),setAnimating:u=>h.setAnimating(u),setFrameTarget:u=>h.setFrameTarget(u),setQualityInPlace:u=>h.setQualityInPlace(u),captureStill:()=>h.captureStill(),setCoastalMist:u=>h.setCoastalMist(u),setLabelsVisible:u=>h.setLabelsVisible(u),groundAt:(u,f)=>h.groundAt(u,f),roadSurfaceAt:(u,f)=>h.roadSurfaceAt(u,f),waterLevel:()=>h.waterLevel,bounds:()=>h.bounds,fromLatLon:(u,f)=>h.fromLatLon(u,f),setMode:u=>h.setExternal(u!=="bird"),getCamera:()=>h.getCamera(),flyToPlace:u=>h.flyToPlace(u),lookAt:(u,f,p,x,m)=>h.setView(u,f,p,x,m),addParts:u=>h.addParts(u),addTrafficCar:(u,f,p,x,m)=>h.addTrafficCar(u,f,p,x,m),addPad:u=>h.addPad(u),spots:()=>a,nearestCar:(u,f,p)=>h.nearestCar(u,f,p),driveCar:(u,f,p,x,m,g,_,M,v)=>h.driveCar(u,f,p,x,m,g,_,M,v),setControlledCar:(u,f)=>h.setControlledCar(u,f),resetCar:(u,f)=>h.resetCar(u,f),setRemoved:u=>h.setRemoved(u),solidAt:(u,f)=>h.solidAt(u,f),designedWallFootprints:()=>h.designedWallFootprints(),buildingBlockers:()=>h.buildingBlockers(),parkedCarBlockers:()=>h.parkedCarBlockers(),parkedCarBlocker:(u,f)=>h.parkedCarBlocker(u,f),addCars:u=>h.addCars(u),roadSpot:u=>{const f=h.roadSpot(u);return f?{id:"road:"+u,name:u,kind:"landmark",...f,tx:f.x-Math.sin(f.yaw)*70,tz:f.z-Math.cos(f.yaw)*70}:null},tide:{min:Gd,max:kd,initial:Hd},credit:fc,dispose:()=>{h.dispose(),e.remove()}}}return bn.CREDIT=fc,bn.create=Lv,bn.qualityPresets=Cv,Object.defineProperty(bn,Symbol.toStringTag,{value:"Module"}),bn}({});

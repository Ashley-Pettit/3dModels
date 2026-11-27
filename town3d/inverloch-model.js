var InverlochModel=function(vn){"use strict";var _1=Object.defineProperty;var v1=(vn,Yn,ci)=>Yn in vn?_1(vn,Yn,{enumerable:!0,configurable:!0,writable:!0,value:ci}):vn[Yn]=ci;var Z=(vn,Yn,ci)=>v1(vn,typeof Yn!="symbol"?Yn+"":Yn,ci);const Yn='.inv-label{position:absolute;left:0;top:0;pointer-events:auto;font:600 12px/1 Space Grotesk,system-ui,sans-serif;padding:6px 10px;border-radius:999px;background:#0c1c24e6;color:#fff;border:1px solid rgba(255,255,255,.2);white-space:nowrap;cursor:pointer;will-change:transform}.inv-label:after{content:"";position:absolute;left:50%;bottom:-8px;width:1px;height:8px;background:#ffffffbf}.inv-label:hover{background:#0b7d9c}.inv-label--nature{background:#183826eb}.inv-label--nature:hover{background:#2c7a4b}.inv-label--water{background:none;border-color:transparent;color:#f1fbff;font-style:italic;font-weight:500;font-size:13px;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,35,60,.95),0 0 8px rgba(0,35,60,.7)}.inv-label--water:after{display:none}.inv-label--water:hover{background:#0c1c2499}.inv-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.inv-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}';/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ci="187",qn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dd=0,Jl=1,fd=2,Ps=1,pd=2,Ls=3,ui=0,$e=1,Re=2,Yi=0,Ds=1,Da=2,Ql=3,jl=4,md=5,qi=100,gd=101,xd=102,_d=103,vd=104,Md=200,Sd=201,yd=202,bd=203,tc=204,ec=205,Ed=206,wd=207,Td=208,Ad=209,Rd=210,Cd=211,Pd=212,Ld=213,Dd=214,Ia=0,Na=1,Ua=2,Is=3,Fa=4,Oa=5,za=6,Ba=7,mr=0,Id=1,Nd=2,Zn=0,nc=1,ic=2,sc=3,rc=4,ac=5,oc=6,Ga=7,lc=300,Zi=301,Ns=302,ka=303,Ha=304,Us=1e3,Fn=1001,Va=1002,Ce=1003,Ud=1004,gr=1005,Xe=1006,Wa=1007,Mn=1008,rn=1009,cc=1010,hc=1011,Fs=1012,Xa=1013,On=1014,Sn=1015,yn=1016,Ya=1017,qa=1018,Ki=1020,uc=35902,dc=35899,fc=1021,pc=1022,zn=1023,di=1026,fi=1027,xr=1028,Za=1029,pi=1030,Ka=1031,$a=1033,_r=33776,vr=33777,Mr=33778,Sr=33779,Ja=35840,Qa=35841,ja=35842,to=35843,eo=36196,no=37492,io=37496,so=37488,ro=37489,yr=37490,ao=37491,oo=37808,lo=37809,co=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,go=37816,xo=37817,_o=37818,vo=37819,Mo=37820,So=37821,yo=36492,bo=36494,Eo=36495,wo=36283,To=36284,br=36285,Ao=36286,Fd=3200,$i=0,Od=1,mi="",Pe="srgb",Er="srgb-linear",wr="linear",oe="srgb",Ro=7680,zd=519,Bd=512,Gd=513,kd=514,mc=515,Hd=516,Vd=517,gc=518,xc=519,Wd=35044,Os=35048,_c="300 es",bn=2e3,zs=2001;function Xd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){const i=Bs("canvas");return i.style.display="block",i}const vc={};function Mc(...i){const t="THREE."+i.shift();console.log(t,...i)}function Sc(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ot(...i){i=Sc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function se(...i){i=Sc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Tr(...i){const t=i.join(" ");t in vc||(vc[t]=!0,Ot(...i))}function qd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Zd={[Ia]:Ia,[Ua]:za,[Fa]:Fa,[Is]:Oa,[Na]:Na,[za]:Ua,[Ba]:Ba,[Oa]:Is};class gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yc=1234567;const Gs=Math.PI/180,ks=180/Math.PI;function Ji(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function qt(i,t,e){return Math.max(t,Math.min(e,i))}function Co(i,t){return(i%t+t)%t}function Kd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function $d(i,t,e){return i!==t?(e-i)/(t-i):0}function Hs(i,t,e){return(1-e)*i+e*t}function Jd(i,t,e,n){return Hs(i,t,1-Math.exp(-e*n))}function Qd(i,t=1){return t-Math.abs(Co(i,t*2)-t)}function jd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function tf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ef(i,t){return i+Math.floor(Math.random()*(t-i+1))}function nf(i,t){return i+Math.random()*(t-i)}function sf(i){return i*(.5-Math.random())}function rf(i){i!==void 0&&(yc=i);let t=yc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function af(i){return i*Gs}function of(i){return i*ks}function lf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function cf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hf(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*h,o*c);break;default:Ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Po(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ec(i,t){if(t.constructor===Float32Array)return i;const e=Po(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function wc(i,t){if(t.constructor===Float32Array)return i;const e=Po(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const Kt={DEG2RAD:Gs,RAD2DEG:ks,generateUUID:Ji,clamp:qt,euclideanModulo:Co,mapLinear:Kd,inverseLerp:$d,lerp:Hs,damp:Jd,pingpong:Qd,smoothstep:jd,smootherstep:tf,randInt:ef,randFloat:nf,randFloatSpread:sf,seededRandom:rf,degToRad:af,radToDeg:of,isPowerOfTwo:lf,ceilPowerOfTwo:cf,floorPowerOfTwo:bc,setQuaternionFromProperEuler:hf,normalize:wc,denormalize:Ec},Wl=class Wl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wl.prototype.isVector2=!0;let Ct=Wl;class En{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(u!==_||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*_;m<0&&(d=-d,f=-f,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){const S=Math.acos(m),x=Math.sin(S);g=Math.sin(g*S)/x,o=Math.sin(o*S)/x,l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+_*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+_*o;const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-l*u,t[e+3]=h*p-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Xl=class Xl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lo.copy(this).projectOnVector(t),this.sub(Lo)}reflect(t){return this.sub(Lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xl.prototype.isVector3=!0;let X=Xl;const Lo=new X,Tc=new En,Yl=class Yl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=s[0],m=s[3],g=s[6],S=s[1],x=s[4],M=s[7],E=s[2],b=s[5],v=s[8];return r[0]=a*_+o*S+l*E,r[3]=a*m+o*x+l*b,r[6]=a*g+o*M+l*v,r[1]=c*_+h*S+u*E,r[4]=c*m+h*x+u*b,r[7]=c*g+h*M+u*v,r[2]=d*_+f*S+p*E,r[5]=d*m+f*x+p*b,r[8]=d*g+f*M+p*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Do.makeScale(t,e)),this}rotate(t){return Tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Do.makeRotation(-t)),this}translate(t,e){return Tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Do.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Yl.prototype.isMatrix3=!0;let zt=Yl;const Do=new zt,Ac=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rc=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uf(){const i={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===oe&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Er]:{primaries:t,whitePoint:n,transfer:wr,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}const jt=uf();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ji;class df{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ji===void 0&&(ji=Bs("canvas")),ji.width=t.width,ji.height=t.height;const s=ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Bs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ff=0;class Ar{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Ji(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Io(s[a].image)):r.push(Io(s[a]))}else r=Io(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Io(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?df.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}let pf=0;const No=new X;class be extends gi{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=Fn,s=Fn,r=Xe,a=Mn,o=zn,l=rn,c=be.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Ji(),this.name="",this.source=new Ar(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Us:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case Va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Us:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case Va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}be.DEFAULT_IMAGE=null,be.DEFAULT_MAPPING=lc,be.DEFAULT_ANISOTROPY=1;const ql=class ql{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(f+1)/2,E=(g+1)/2,b=(h+d)/4,v=(u+_)/4,y=(p+m)/4;return x>M&&x>E?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=b/n,r=v/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=y/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=v/r,s=y/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ql.prototype.isVector4=!0;let de=ql;class mf extends gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new be({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ar(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends mf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Cc extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gf extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Ca=class Ca{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,p,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,p,_,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ca().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),a=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,p=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d+_*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,p=o*h,_=o*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,p=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,p=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xf,t,_f)}lookAt(t,e,n){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),xi.crossVectors(n,an),xi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),xi.crossVectors(n,an)),xi.normalize(),Rr.crossVectors(an,xi),s[0]=xi.x,s[4]=Rr.x,s[8]=an.x,s[1]=xi.y,s[5]=Rr.y,s[9]=an.y,s[2]=xi.z,s[6]=Rr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],S=n[3],x=n[7],M=n[11],E=n[15],b=s[0],v=s[4],y=s[8],w=s[12],T=s[1],C=s[5],D=s[9],F=s[13],P=s[2],k=s[6],O=s[10],G=s[14],W=s[3],U=s[7],L=s[11],N=s[15];return r[0]=a*b+o*T+l*P+c*W,r[4]=a*v+o*C+l*k+c*U,r[8]=a*y+o*D+l*O+c*L,r[12]=a*w+o*F+l*G+c*N,r[1]=h*b+u*T+d*P+f*W,r[5]=h*v+u*C+d*k+f*U,r[9]=h*y+u*D+d*O+f*L,r[13]=h*w+u*F+d*G+f*N,r[2]=p*b+_*T+m*P+g*W,r[6]=p*v+_*C+m*k+g*U,r[10]=p*y+_*D+m*O+g*L,r[14]=p*w+_*F+m*G+g*N,r[3]=S*b+x*T+M*P+E*W,r[7]=S*v+x*C+M*k+E*U,r[11]=S*y+x*D+M*O+E*L,r[15]=S*w+x*F+M*G+E*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],_=t[7],m=t[11],g=t[15],S=l*f-c*d,x=o*f-c*u,M=o*d-l*u,E=a*f-c*h,b=a*d-l*h,v=a*u-o*h;return e*(_*S-m*x+g*M)-n*(p*S-m*E+g*b)+s*(p*x-_*E+g*v)-r*(p*M-_*b+m*v)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],_=t[13],m=t[14],g=t[15],S=e*o-n*a,x=e*l-s*a,M=e*c-r*a,E=n*l-s*o,b=n*c-r*o,v=s*c-r*l,y=h*_-u*p,w=h*m-d*p,T=h*g-f*p,C=u*m-d*_,D=u*g-f*_,F=d*g-f*m,P=S*F-x*D+M*C+E*T-b*w+v*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/P;return t[0]=(o*F-l*D+c*C)*k,t[1]=(s*D-n*F-r*C)*k,t[2]=(_*v-m*b+g*E)*k,t[3]=(d*b-u*v-f*E)*k,t[4]=(l*T-a*F-c*w)*k,t[5]=(e*F-s*T+r*w)*k,t[6]=(m*M-p*v-g*x)*k,t[7]=(h*v-d*M+f*x)*k,t[8]=(a*D-o*T+c*y)*k,t[9]=(n*T-e*D-r*y)*k,t[10]=(p*b-_*M+g*S)*k,t[11]=(u*M-h*b-f*S)*k,t[12]=(o*w-a*C-l*y)*k,t[13]=(e*C-n*w+s*y)*k,t[14]=(_*x-p*E-m*S)*k,t[15]=(h*E-u*x+d*S)*k,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,_=a*h,m=a*u,g=o*u,S=l*c,x=l*h,M=l*u,E=n.x,b=n.y,v=n.z;return s[0]=(1-(_+g))*E,s[1]=(f+M)*E,s[2]=(p-x)*E,s[3]=0,s[4]=(f-M)*b,s[5]=(1-(d+g))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(p+x)*v,s[9]=(m-S)*v,s[10]=(1-(d+_))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ts.set(s[0],s[1],s[2]).length();const o=ts.set(s[4],s[5],s[6]).length(),l=ts.set(s[8],s[9],s[10]).length();r<0&&(a=-a),wn.copy(this);const c=1/a,h=1/o,u=1/l;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,e.setFromRotationMatrix(wn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=bn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===bn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===zs)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=bn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===bn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===zs)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ca.prototype.isMatrix4=!0;let ne=Ca;const ts=new X,wn=new ne,xf=new X(0,0,0),_f=new X(1,1,1),xi=new X,Rr=new X,an=new X,Pc=new ne,Lc=new En;class un{constructor(t=0,e=0,n=0,s=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class Uo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vf=0;const Dc=new X,es=new En,$n=new ne,Cr=new X,Vs=new X,Mf=new X,Sf=new En,Ic=new X(1,0,0),Nc=new X(0,1,0),Uc=new X(0,0,1),Fc={type:"added"},yf={type:"removed"},ns={type:"childadded",child:null},Fo={type:"childremoved",child:null};class Fe extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new X,e=new un,n=new En,s=new X(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new zt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(Ic,t)}rotateY(t){return this.rotateOnAxis(Nc,t)}rotateZ(t){return this.rotateOnAxis(Uc,t)}translateOnAxis(t,e){return Dc.copy(t).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ic,t)}translateY(t){return this.translateOnAxis(Nc,t)}translateZ(t){return this.translateOnAxis(Uc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cr.copy(t):Cr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Vs,Cr,this.up):$n.lookAt(Cr,Vs,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),es.setFromRotationMatrix($n),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fc),ns.child=t,this.dispatchEvent(ns),ns.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yf),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fc),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,t,Mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Sf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Fe.DEFAULT_UP=new X(0,1,0),Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0,Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class en extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bf={type:"move"};class Oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new en;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function zo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=Co(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=zo(a,r,t+.3333333333333333),this.g=zo(a,r,t),this.b=zo(a,r,t-.3333333333333333)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=Oc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return jt.workingToColorSpace(qe.copy(this),t),Math.round(qt(qe.r*255,0,255))*65536+Math.round(qt(qe.g*255,0,255))*256+Math.round(qt(qe.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Pe){jt.workingToColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Pr);const n=Hs(_i.h,Pr.h,e),s=Hs(_i.s,Pr.s,e),r=Hs(_i.l,Pr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new wt;wt.NAMES=Oc;class zc extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Tn=new X,Jn=new X,Bo=new X,Qn=new X,is=new X,ss=new X,Bc=new X,Go=new X,ko=new X,Ho=new X,Vo=new de,Wo=new de,Xo=new de;class An{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),Jn.subVectors(n,e),Bo.subVectors(t,e);const a=Tn.dot(Tn),o=Tn.dot(Jn),l=Tn.dot(Bo),c=Jn.dot(Jn),h=Jn.dot(Bo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Vo.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Vo.fromBufferAttribute(t,e),Wo.fromBufferAttribute(t,n),Xo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Vo,r.x),a.addScaledVector(Wo,r.y),a.addScaledVector(Xo,r.z),a}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),Jn.subVectors(t,e),Tn.cross(Jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Tn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return An.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;is.subVectors(s,n),ss.subVectors(r,n),Go.subVectors(t,n);const l=is.dot(Go),c=ss.dot(Go);if(l<=0&&c<=0)return e.copy(n);ko.subVectors(t,s);const h=is.dot(ko),u=ss.dot(ko);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(is,a);Ho.subVectors(t,r);const f=is.dot(Ho),p=ss.dot(Ho);if(p>=0&&f<=p)return e.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(ss,o);const m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Bc.subVectors(r,s),o=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(Bc,o);const g=1/(m+_+d);return a=_*g,o=d*g,e.copy(n).addScaledVector(is,a).addScaledVector(ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class vi{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(t.matrixWorld),this.union(Lr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Dr.subVectors(this.max,Ws),rs.subVectors(t.a,Ws),as.subVectors(t.b,Ws),os.subVectors(t.c,Ws),Mi.subVectors(as,rs),Si.subVectors(os,as),Li.subVectors(rs,os);let e=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Li.z,Li.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Li.z,0,-Li.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Li.y,Li.x,0];return!Yo(e,rs,as,os,Dr)||(e=[1,0,0,0,1,0,0,0,1],!Yo(e,rs,as,os,Dr))?!1:(Ir.crossVectors(Mi,Si),e=[Ir.x,Ir.y,Ir.z],Yo(e,rs,as,os,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const jn=[new X,new X,new X,new X,new X,new X,new X,new X],Rn=new X,Lr=new vi,rs=new X,as=new X,os=new X,Mi=new X,Si=new X,Li=new X,Ws=new X,Dr=new X,Ir=new X,Di=new X;function Yo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Di.fromArray(i,r);const o=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=t.dot(Di),c=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ti=Ef();function Ef(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function wf(i){Math.abs(i)>65504&&Ot("DataUtils.toHalfFloat(): Value out of range."),i=qt(i,-65504,65504),ti.floatView[0]=i;const t=ti.uint32View[0],e=t>>23&511;return ti.baseTable[e]+((t&8388607)>>ti.shiftTable[e])}function Tf(i){const t=i>>10;return ti.uint32View[0]=ti.mantissaTable[ti.offsetTable[t]+(i&1023)]+ti.exponentTable[t],ti.floatView[0]}class Gc{static toHalfFloat(t){return wf(t)}static fromHalfFloat(t){return Tf(t)}}const we=new X,Nr=new Ct;let Af=0;class ye extends gi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Af++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wd,this.updateRanges=[],this.gpuType=Sn,this.version=0,this._normalizationScale=t!==void 0?Po(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ec(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):wc(t,this.array)}}class kc extends ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hc extends ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Rf=new vi,Xs=new X,qo=new X;class Ii{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);const e=Xs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(qo)),this.expandByPoint(Xs.copy(t.center).sub(qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Cf=0;const dn=new ne,Zo=new Fe,ls=new X,on=new vi,Ys=new vi,Oe=new X;class Ee extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xd(t)?Hc:kc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return Zo.lookAt(t),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(on.min,Ys.min),on.expandByPoint(Oe),Oe.addVectors(on.max,Ys.max),on.expandByPoint(Oe)):(on.expandByPoint(Ys.min),on.expandByPoint(Ys.max))}on.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Oe.fromBufferAttribute(o,c),l&&(ls.fromBufferAttribute(t,c),Oe.add(ls)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ye(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let w=0;w<n.count;w++)o[w]=new X,l[w]=new X;const h=new X,u=new X,d=new X,f=new Ct,p=new Ct,_=new Ct,m=new X,g=new X;function S(w,T,C){c[w]=c[T]=c[C]=1,h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,T),_.fromBufferAttribute(r,C),u.sub(h),d.sub(h),p.sub(f),_.sub(f);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(D),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(D),o[w].add(m),o[T].add(m),o[C].add(m),l[w].add(g),l[T].add(g),l[C].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let w=0,T=x.length;w<T;++w){const C=x[w],D=C.start,F=C.count;for(let P=D,k=D+F;P<k;P+=3)S(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const M=new X,E=new X,b=new X,v=new X;function y(w){b.fromBufferAttribute(s,w),v.copy(b);const T=o[w];M.copy(T),M.sub(b.multiplyScalar(b.dot(T))).normalize(),E.crossVectors(v,T);const D=E.dot(l[w])<0?-1:1;a.setXYZW(w,M.x,M.y,M.z,D)}for(let w=0,T=n.count;w<T;++w)c[w]&&y(w);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new X,r=new X,a=new X,o=new X,l=new X,c=new X,h=new X,u=new X;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new ye(d,h,u)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ko=new X,Pf=new X,Lf=new zt;class Gn{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ko.subVectors(n,e).cross(Pf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Ko),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Lf.getNormalMatrix(t),s=this.coplanarPoint(Ko).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Df=0;class ei extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Ds,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=ec,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ro,this.stencilZFail=Ro,this.stencilZPass=Ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ni=new X,$o=new X,Ur=new X,Fr=new X;class Or{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$o.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),Fr.copy(this.origin).sub($o);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ur),o=Fr.dot(this.direction),l=-Fr.dot(Ur),c=Fr.lengthSq(),h=Math.abs(1-a*a);let u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($o).addScaledVector(Ur,d),f}intersectSphere(t,e){if(t.radius<0)return null;ni.subVectors(t.center,this.origin);const n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,p=e.x-a.x,_=e.y-a.y,m=e.z-a.z,g=n.x-a.x,S=n.y-a.y,x=n.z-a.z,M=Math.abs(l),E=Math.abs(c),b=Math.abs(h);let v,y,w,T,C,D,F,P,k,O,G,W;if(M>=E&&M>=b?(w=l,D=u,k=p,W=g,l>=0?(v=c,y=h,T=d,C=f,F=_,P=m,O=S,G=x):(v=h,y=c,T=f,C=d,F=m,P=_,O=x,G=S)):E>=b?(w=c,D=d,k=_,W=S,c>=0?(v=h,y=l,T=f,C=u,F=m,P=p,O=x,G=g):(v=l,y=h,T=u,C=f,F=p,P=m,O=g,G=x)):(w=h,D=f,k=m,W=x,h>=0?(v=l,y=c,T=u,C=d,F=p,P=_,O=g,G=S):(v=c,y=l,T=d,C=u,F=_,P=p,O=S,G=g)),w===0)return null;const U=v/w,L=y/w,N=1/w,K=T-U*D,it=C-L*D,Y=F-U*k,V=P-L*k,$=O-U*W,tt=G-L*W,nt=$*V-tt*Y,ct=K*tt-it*$,It=Y*it-V*K;if(s){if(nt<0||ct<0||It<0)return null}else if((nt<0||ct<0||It<0)&&(nt>0||ct>0||It>0))return null;const xt=nt+ct+It;if(xt===0)return null;const Lt=N*(nt*D+ct*k+It*W);return(xt>0?Lt<0:Lt>0)?null:this.at(Lt/xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cn extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=mr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Vc=new ne,Ni=new Or,zr=new Ii,Wc=new X,Br=new X,Gr=new X,kr=new X,Jo=new X,Hr=new X,Xc=new X,Vr=new X;class Zt extends Fe{constructor(t=new Ee,e=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Jo.fromBufferAttribute(u,t),a?Hr.addScaledVector(Jo,h):Hr.addScaledVector(Jo.sub(e),h))}e.add(Hr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(zr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(zr,Wc)===null||Ni.origin.distanceToSquared(Wc)>(t.far-t.near)**2))&&(Vc.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(Vc),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=a[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,E=x;M<E;M+=3){const b=o.getX(M),v=o.getX(M+1),y=o.getX(M+2);s=Wr(this,g,t,n,c,h,u,b,v,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const S=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);s=Wr(this,a,t,n,c,h,u,S,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=a[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,E=x;M<E;M+=3){const b=M,v=M+1,y=M+2;s=Wr(this,g,t,n,c,h,u,b,v,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const S=m,x=m+1,M=m+2;s=Wr(this,a,t,n,c,h,u,S,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function If(i,t,e,n,s,r,a,o){let l;if(t.side===$e?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ui,o),l===null)return null;Vr.copy(o),Vr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Vr);return c<e.near||c>e.far?null:{distance:c,point:Vr.clone(),object:i}}function Wr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Br),i.getVertexPosition(l,Gr),i.getVertexPosition(c,kr);const h=If(i,t,e,n,Br,Gr,kr,Xc);if(h){const u=new X;An.getBarycoord(Xc,Br,Gr,kr,u),s&&(h.uv=An.getInterpolatedAttribute(s,o,l,c,u,new Ct)),r&&(h.uv1=An.getInterpolatedAttribute(r,o,l,c,u,new Ct)),a&&(h.normal=An.getInterpolatedAttribute(a,o,l,c,u,new X),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new X,materialIndex:0};An.getNormal(Br,Gr,kr,d.normal),h.face=d,h.barycoord=u}return h}class qs extends be{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ce,h=Ce,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yc extends ye{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const cs=new ne,qc=new ne,Xr=[],Zc=new vi,Nf=new ne,Zs=new Zt,Ks=new Ii;class Je extends Zt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Nf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),Zc.copy(t.boundingBox).applyMatrix4(cs),this.boundingBox.union(Zc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),Ks.copy(t.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),t.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),qc.multiplyMatrices(n,cs),Zs.matrixWorld=qc,Zs.raycast(t,Xr);for(let a=0,o=Xr.length;a<o;a++){const l=Xr[a];l.instanceId=r,l.object=this,e.push(l)}Xr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Yc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qs(new Float32Array(s*this.count),s,this.count,xr,Sn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ui=new Ii,Uf=new Ct(.5,.5),Yr=new X;class $s{constructor(t=new Gn,e=new Gn,n=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],S=r[12],x=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-a,f-h,g-p,E-S).normalize(),s[1].setComponents(c+a,f+h,g+p,E+S).normalize(),s[2].setComponents(c+o,f+u,g+_,E+x).normalize(),s[3].setComponents(c-o,f-u,g-_,E-x).normalize(),n)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,f-d,g-m,E-M).normalize();else if(s[4].setComponents(c-l,f-d,g-m,E-M).normalize(),e===bn)s[5].setComponents(c+l,f+d,g+m,E+M).normalize();else if(e===zs)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){Ui.center.set(0,0,0);const e=Uf.distanceTo(t.center);return Ui.radius=.7071067811865476+e,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Yr.x=s.normal.x>0?t.max.x:t.min.x,Yr.y=s.normal.y>0?t.max.y:t.min.y,Yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Kc=new ne;class Qo{constructor(){this.coordinateSystem=bn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];Kc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new $s),n[s].setFromProjectionMatrix(Kc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new $s),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Qo().copy(this)}}class $c extends ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qr=new X,Zr=new X,Jc=new ne,Js=new Or,Kr=new Ii,jo=new X,Qc=new X;class Ff extends Fe{constructor(t=new Ee,e=new $c){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)qr.fromBufferAttribute(e,s-1),Zr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=qr.distanceTo(Zr);t.setAttribute("lineDistance",new fe(n,1))}else Ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,t.ray.intersectsSphere(Kr)===!1)return;Jc.copy(s).invert(),Js.copy(t.ray).applyMatrix4(Jc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=c){const g=h.getX(_),S=h.getX(_+1),x=$r(this,t,Js,l,g,S,_);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(p-1),m=h.getX(f),g=$r(this,t,Js,l,_,m,p-1);g&&e.push(g)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=c){const g=$r(this,t,Js,l,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){const _=$r(this,t,Js,l,p-1,f,p-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $r(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(qr.fromBufferAttribute(o,s),Zr.fromBufferAttribute(o,r),e.distanceSqToSegment(qr,Zr,jo,Qc)>n)return;jo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(jo);if(!(c<t.near||c>t.far))return{distance:c,point:Qc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const jc=new X,th=new X;class eh extends Ff{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)jc.fromBufferAttribute(e,s),th.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+jc.distanceTo(th);t.setAttribute("lineDistance",new fe(n,1))}else Ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nh extends be{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Ce,this.minFilter=Ce,this.generateMipmaps=!1,this.needsUpdate=!0}copy(t){return super.copy(t),this.source=new Ar(Object.assign({},t.image)),this}}class ih extends be{constructor(t=[],e=Zi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tl extends be{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hs extends be{constructor(t,e,n=On,s,r,a,o=Ce,l=Ce,c,h=di,u=1){if(h!==di&&h!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ar(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class sh extends hs{constructor(t,e=On,n=Zi,s,r,a=Ce,o=Ce,l,c=di){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class rh extends be{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Fi extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function p(_,m,g,S,x,M,E,b,v,y,w){const T=M/v,C=E/y,D=M/2,F=E/2,P=b/2,k=v+1,O=y+1;let G=0,W=0;const U=new X;for(let L=0;L<O;L++){const N=L*C-F;for(let K=0;K<k;K++){const it=K*T-D;U[_]=it*S,U[m]=N*x,U[g]=P,c.push(U.x,U.y,U.z),U[_]=0,U[m]=0,U[g]=b>0?1:-1,h.push(U.x,U.y,U.z),u.push(K/v),u.push(1-L/y),G+=1}}for(let L=0;L<y;L++)for(let N=0;N<v;N++){const K=d+N+k*L,it=d+N+k*(L+1),Y=d+(N+1)+k*(L+1),V=d+(N+1)+k*L;l.push(K,it,V),l.push(it,Y,V),W+=6}o.addGroup(f,W,w),f+=W,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class el extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const _=[],m=n/2;let g=0;S(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function S(){const M=new X,E=new X;let b=0;const v=(e-t)/n;for(let y=0;y<=r;y++){const w=[],T=y/r,C=T*(e-t)+t;for(let D=0;D<=s;D++){const F=D/s,P=F*l+o,k=Math.sin(P),O=Math.cos(P);E.x=C*k,E.y=-T*n+m,E.z=C*O,u.push(E.x,E.y,E.z),M.set(k,v,O).normalize(),d.push(M.x,M.y,M.z),f.push(F,1-T),w.push(p++)}_.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){const T=_[w][y],C=_[w+1][y],D=_[w+1][y+1],F=_[w][y+1];(t>0||w!==0)&&(h.push(T,C,F),b+=3),(e>0||w!==r-1)&&(h.push(C,D,F),b+=3)}c.addGroup(g,b,0),g+=b}function x(M){const E=p,b=new Ct,v=new X;let y=0;const w=M===!0?t:e,T=M===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*T,0),d.push(0,T,0),f.push(.5,.5),p++;const C=p;for(let D=0;D<=s;D++){const P=D/s*l+o,k=Math.cos(P),O=Math.sin(P);v.x=w*O,v.y=m*T,v.z=w*k,u.push(v.x,v.y,v.z),d.push(0,T,0),b.x=k*.5+.5,b.y=O*.5*T+.5,f.push(b.x,b.y),p++}for(let D=0;D<s;D++){const F=E+D,P=C+D;M===!0?h.push(P,P+1,F):h.push(P+1,P,F),y+=3}c.addGroup(g,y,M===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class nl extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const x=new X,M=new X,E=new X;for(let b=0;b<e.length;b+=3)f(e[b+0],x),f(e[b+1],M),f(e[b+2],E),l(x,M,E,S)}function l(S,x,M,E){const b=E+1,v=[];for(let y=0;y<=b;y++){v[y]=[];const w=S.clone().lerp(M,y/b),T=x.clone().lerp(M,y/b),C=b-y;for(let D=0;D<=C;D++)D===0&&y===b?v[y][D]=w:v[y][D]=w.clone().lerp(T,D/C)}for(let y=0;y<b;y++)for(let w=0;w<2*(b-y)-1;w++){const T=Math.floor(w/2);w%2===0?(d(v[y][T+1]),d(v[y+1][T]),d(v[y][T])):(d(v[y][T+1]),d(v[y+1][T+1]),d(v[y+1][T]))}}function c(S){const x=new X;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(S),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){const S=new X;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];const M=m(S)/2/Math.PI+.5,E=g(S)/Math.PI+.5;a.push(M,1-E)}p(),u()}function u(){for(let S=0;S<a.length;S+=6){const x=a[S+0],M=a[S+2],E=a[S+4],b=Math.max(x,M,E),v=Math.min(x,M,E);b>.9&&v<.1&&(x<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),E<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,x){const M=S*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function p(){const S=new X,x=new X,M=new X,E=new X,b=new Ct,v=new Ct,y=new Ct;for(let w=0,T=0;w<r.length;w+=9,T+=6){S.set(r[w+0],r[w+1],r[w+2]),x.set(r[w+3],r[w+4],r[w+5]),M.set(r[w+6],r[w+7],r[w+8]),b.set(a[T+0],a[T+1]),v.set(a[T+2],a[T+3]),y.set(a[T+4],a[T+5]),E.copy(S).add(x).add(M).divideScalar(3);const C=m(E);_(b,T+0,S,C),_(v,T+2,x,C),_(y,T+4,M,C)}}function _(S,x,M,E){E<0&&S.x===1&&(a[x]=S.x-1),M.x===0&&M.z===0&&(a[x]=E/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.vertices,t.indices,t.radius,t.detail)}}function Of(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=ah(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Hf(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let d=e;d<s;d+=e){const f=i[d],p=i[d+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Qs(r,a,e,o,l,c,0),a}function ah(i,t,e,n,s){let r;if(s===jf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=hh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=hh(a/n|0,i[a],i[a+1],r);return r&&us(r,r.next)&&(er(r),r=r.next),r}function Oi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(us(e,e.next)||_e(e.prev,e,e.next)===0)){if(er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&qf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Bf(i,n,s,r):zf(i)){t.push(l.i,i.i,c.i),er(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Gf(Oi(i),t),Qs(i,t,e,n,s,r,2)):a===2&&kf(i,t,e,n,s,r):Qs(Oi(i),t,e,n,s,r,1);break}}}function zf(i){const t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&js(s,o,r,l,a,c,p.x,p.y)&&_e(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Bf(i,t,e,n){const s=i.prev,r=i,a=i.next;if(_e(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),p=Math.min(h,u,d),_=Math.max(o,l,c),m=Math.max(h,u,d),g=il(f,p,t,e,n),S=il(_,m,t,e,n);let x=i.prevZ,M=i.nextZ;for(;x&&x.z>=g&&M&&M.z<=S;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==s&&x!==a&&js(o,h,l,u,c,d,x.x,x.y)&&_e(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&js(o,h,l,u,c,d,M.x,M.y)&&_e(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=g;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==s&&x!==a&&js(o,h,l,u,c,d,x.x,x.y)&&_e(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=S;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&js(o,h,l,u,c,d,M.x,M.y)&&_e(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Gf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!us(n,s)&&lh(n,e,e.next,s)&&tr(n,s)&&tr(s,n)&&(t.push(n.i,e.i,s.i),er(e),er(e.next),e=i=s),e=e.next}while(e!==i);return Oi(e)}function kf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$f(a,o)){let l=ch(a,o);a=Oi(a,a.next),l=Oi(l,l.next),Qs(a,t,e,n,s,r,0),Qs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Hf(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=ah(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Kf(c))}s.sort(Vf);for(let r=0;r<s.length;r++)e=Wf(s[r],e);return e}function Vf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Wf(i,t){const e=Xf(i,t);if(!e)return t;const n=ch(e,i);return Oi(n,n.next),Oi(e,e.next)}function Xf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(us(i,e))return e;do{if(us(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&oh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);tr(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Yf(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Yf(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function qf(i,t,e,n){let s=i;do s.z===0&&(s.z=il(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zf(s)}function Zf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function il(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Kf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function oh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function js(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&oh(i,t,e,n,s,r,a,o)}function $f(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Jf(i,t)&&(tr(i,t)&&tr(t,i)&&Qf(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||us(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function us(i,t){return i.x===t.x&&i.y===t.y}function lh(i,t,e,n){const s=Qr(_e(i,t,e)),r=Qr(_e(i,t,n)),a=Qr(_e(e,n,i)),o=Qr(_e(e,n,t));return!!(s!==r&&a!==o||s===0&&Jr(i,e,t)||r===0&&Jr(i,n,t)||a===0&&Jr(e,i,n)||o===0&&Jr(e,t,n))}function Jr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Qr(i){return i>0?1:i<0?-1:0}function Jf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&lh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function tr(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function Qf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ch(i,t){const e=sl(i.i,i.x,i.y),n=sl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hh(i,t,e,n){const s=sl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class tp{static triangulate(t,e,n=2){return Of(t,e,n)}}class rl{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return rl.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];uh(t),dh(n,t);let a=t.length;e.forEach(uh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,dh(n,e[l]);const o=tp.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function uh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function dh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class al extends nl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new al(t.radius,t.detail)}}class kn extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const S=g*d-a;for(let x=0;x<c;x++){const M=x*u-r;p.push(M,-S,0),_.push(0,0,1),m.push(x/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){const x=S+c*g,M=S+c*(g+1),E=S+1+c*(g+1),b=S+1+c*g;f.push(x,M,b),f.push(M,E,b)}this.setIndex(f),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.width,t.height,t.widthSegments,t.heightSegments)}}class ol extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new X,d=new X,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const S=[],x=g/n,M=a+x*o,E=t*Math.cos(M),b=Math.sqrt(t*t-E*E);let v=0;g===0&&a===0?v=.5/e:g===n&&l===Math.PI&&(v=-.5/e);for(let y=0;y<=e;y++){const w=y/e,T=s+w*r;u.x=-b*Math.cos(T),u.y=E,u.z=b*Math.sin(T),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+v,1-x),S.push(c++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<e;S++){const x=h[g][S+1],M=h[g][S],E=h[g+1][S],b=h[g+1][S+1];(g!==0||a>0)&&f.push(x,M,b),(g!==n-1||l<Math.PI)&&f.push(M,E,b)}this.setIndex(f),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function ds(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(fh(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(fh(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=ds(i[e]);for(const s in n)t[s]=n[s]}return t}function fh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ep(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ph(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const np={clone:ds,merge:Qe};var ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=ep(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new wt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ct().fromArray(s.value);break;case"v3":this.uniforms[n].value=new X().fromArray(s.value);break;case"v4":this.uniforms[n].value=new de().fromArray(s.value);break;case"m3":this.uniforms[n].value=new zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ne().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class rp extends nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Pn extends ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$i,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ap extends ei{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new wt(16777215),this.specular=new wt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$i,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=mr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class op extends ei{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new wt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$i,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class jr extends ei{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$i,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=mr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lp extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cp extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ll={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(mh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!mh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function mh(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class hp{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const up=new hp;class cl{constructor(t){this.manager=t!==void 0?t:up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}cl.DEFAULT_MATERIAL_NAME="__DEFAULT";const fs=new WeakMap;class dp extends cl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ll.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=fs.get(a);u===void 0&&(u=[],fs.set(a,u)),u.push({onLoad:e,onError:s})}return a}const o=Bs("img");function l(){h(),e&&e(this);const u=fs.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}fs.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),ll.remove(`image:${t}`);const d=fs.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(u)}fs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ll.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class fp extends cl{constructor(t){super(t)}load(t,e,n,s){const r=new be,a=new dp(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class gh extends Fe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class pp extends gh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const hl=new ne,xh=new X,_h=new X;class mp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;xh.setFromMatrixPosition(t.matrixWorld),e.position.copy(xh),_h.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_h),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(hl,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===zs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ta=new X,ea=new En,Hn=new X;class ul extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ta,ea,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ea,Hn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ta,ea,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ta,ea,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const yi=new X,vh=new Ct,Mh=new Ct;class Ln extends ul{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,vh,Mh),e.subVectors(Mh,vh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Sh extends ul{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class gp extends mp{constructor(){super(new Sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xp extends gh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new gp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ps=-90,ms=1;class dl extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ln(ps,ms,t,e);s.layers=this.layers,this.add(s);const r=new Ln(ps,ms,t,e);r.layers=this.layers,this.add(r);const a=new Ln(ps,ms,t,e);a.layers=this.layers,this.add(a);const o=new Ln(ps,ms,t,e);o.layers=this.layers,this.add(o);const l=new Ln(ps,ms,t,e);l.layers=this.layers,this.add(l);const c=new Ln(ps,ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class _p extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const yh=new ne;class vp{constructor(t,e,n=0,s=1/0){this.ray=new Or(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yh),this}intersectObject(t,e=!0,n=[]){return fl(t,this,n,e),n.sort(bh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)fl(t[s],this,n,e);return n.sort(bh),n}}function bh(i,t){return i.distance-t.distance}function fl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)fl(r[a],t,e,!0)}}class na{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Zl=class Zl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Zl.prototype.isMatrix2=!0;let Eh=Zl;class Mp extends gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function wh(i,t,e,n){const s=Sp(n);switch(e){case fc:return i*t;case xr:return i*t/s.components*s.byteLength;case Za:return i*t/s.components*s.byteLength;case pi:return i*t*2/s.components*s.byteLength;case Ka:return i*t*2/s.components*s.byteLength;case pc:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case $a:return i*t*4/s.components*s.byteLength;case _r:case vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mr:case Sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:case to:return Math.max(i,16)*Math.max(t,8)/4;case Ja:case ja:return Math.max(i,8)*Math.max(t,8)/2;case eo:case no:case so:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case io:case yr:case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _o:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case vo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case So:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case yo:case bo:case Eo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wo:case To:return Math.ceil(i/4)*Math.ceil(t/4)*8;case br:case Ao:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sp(i){switch(i){case rn:case cc:return{byteLength:1,components:1};case Fs:case hc:case yn:return{byteLength:2,components:1};case Ya:case qa:return{byteLength:2,components:4};case On:case Xa:case Sn:return{byteLength:4,components:1};case uc:case dc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ci}})),typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ci);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Th(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yp(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ep=`#ifdef USE_ALPHAHASH
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
#endif`,wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cp=`#ifdef USE_AOMAP
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
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
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
#endif`,Dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fp=`#ifdef USE_IRIDESCENCE
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
#endif`,Op=`#ifdef USE_BUMPMAP
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
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Yp=`#define PI 3.141592653589793
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
} // validated`,qp=`vec3 transformedNormal = objectNormal;
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
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t0=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c0=`#ifdef USE_GRADIENTMAP
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
}`,h0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v0=`PhysicalMaterial material;
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
#endif`,M0=`uniform sampler2D dfgLUT;
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
}`,S0=`
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
#endif`,y0=`#if defined( RE_IndirectDiffuse )
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
#endif`,b0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,w0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D0=`#if defined( USE_POINTS_UV )
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
#endif`,I0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F0=`#if defined( USE_MORPHCOLORS )
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
#endif`,O0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z0=`#ifdef USE_MORPHTARGETS
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
#endif`,B0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,k0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,X0=`#ifdef USE_NORMALMAP
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
#endif`,Y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,om=`float getShadowMask() {
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
}`,lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,um=`#ifdef USE_SKINNING
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
#endif`,dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vt={alphahash_fragment:bp,alphahash_pars_fragment:Ep,alphamap_fragment:wp,alphamap_pars_fragment:Tp,alphatest_fragment:Ap,alphatest_pars_fragment:Rp,aomap_fragment:Cp,aomap_pars_fragment:Pp,batching_pars_vertex:Lp,batching_vertex:Dp,begin_vertex:Ip,beginnormal_vertex:Np,bsdfs:Up,iridescence_fragment:Fp,bumpmap_pars_fragment:Op,clipping_planes_fragment:zp,clipping_planes_pars_fragment:Bp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:kp,color_fragment:Hp,color_pars_fragment:Vp,color_pars_vertex:Wp,color_vertex:Xp,common:Yp,defaultnormal_vertex:qp,displacementmap_pars_vertex:Zp,displacementmap_vertex:Kp,emissivemap_fragment:$p,emissivemap_pars_fragment:Jp,colorspace_fragment:Qp,colorspace_pars_fragment:jp,envmap_fragment:t0,envmap_common_pars_fragment:e0,envmap_pars_fragment:n0,envmap_pars_vertex:i0,envmap_physical_pars_fragment:p0,envmap_vertex:s0,fog_vertex:r0,fog_pars_vertex:a0,fog_fragment:o0,fog_pars_fragment:l0,gradientmap_pars_fragment:c0,lightmap_pars_fragment:h0,lights_lambert_fragment:u0,lights_lambert_pars_fragment:d0,lights_pars_begin:f0,lights_toon_fragment:m0,lights_toon_pars_fragment:g0,lights_phong_fragment:x0,lights_phong_pars_fragment:_0,lights_physical_fragment:v0,lights_physical_pars_fragment:M0,lights_fragment_begin:S0,lights_fragment_maps:y0,lights_fragment_end:b0,lightprobes_pars_fragment:E0,logdepthbuf_fragment:w0,logdepthbuf_pars_fragment:T0,logdepthbuf_pars_vertex:A0,logdepthbuf_vertex:R0,map_fragment:C0,map_pars_fragment:P0,map_particle_fragment:L0,map_particle_pars_fragment:D0,metalnessmap_fragment:I0,metalnessmap_pars_fragment:N0,morphinstance_vertex:U0,morphcolor_vertex:F0,morphnormal_vertex:O0,morphtarget_pars_vertex:z0,morphtarget_vertex:B0,normal_fragment_begin:G0,normal_fragment_maps:k0,normal_pars_fragment:H0,normal_pars_vertex:V0,normal_vertex:W0,normalmap_pars_fragment:X0,clearcoat_normal_fragment_begin:Y0,clearcoat_normal_fragment_maps:q0,clearcoat_pars_fragment:Z0,iridescence_pars_fragment:K0,opaque_fragment:$0,packing:J0,premultiplied_alpha_fragment:Q0,project_vertex:j0,dithering_fragment:tm,dithering_pars_fragment:em,roughnessmap_fragment:nm,roughnessmap_pars_fragment:im,shadowmap_pars_fragment:sm,shadowmap_pars_vertex:rm,shadowmap_vertex:am,shadowmask_pars_fragment:om,skinbase_vertex:lm,skinning_pars_vertex:cm,skinning_vertex:hm,skinnormal_vertex:um,specularmap_fragment:dm,specularmap_pars_fragment:fm,tonemapping_fragment:pm,tonemapping_pars_fragment:mm,transmission_fragment:gm,transmission_pars_fragment:xm,uv_pars_fragment:_m,uv_pars_vertex:vm,uv_vertex:Mm,worldpos_vertex:Sm,background_vert:`varying vec2 vUv;
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
}`},yt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Vn={basic:{uniforms:Qe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Qe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Qe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Qe([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Qe([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Qe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Qe([yt.points,yt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Qe([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Qe([yt.common,yt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Qe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Qe([yt.sprite,yt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:Qe([yt.common,yt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:Qe([yt.lights,yt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Vn.physical={uniforms:Qe([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const ia={r:0,b:0,g:0},ym=new ne,Ah=new zt;Ah.set(-1,0,0,0,1,0,0,0,1);function bm(i,t,e,n,s,r){const a=new wt(0);let o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(S){let x=S.isScene===!0?S.background:null;if(x&&x.isTexture){const M=S.backgroundBlurriness>0;x=t.get(x,M)}return x}function p(S){let x=!1;const M=f(S);M===null?m(a,o):M&&M.isColor&&(m(M,1),x=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,x){const M=f(x);M&&M.isCubeTexture?(c===void 0&&(c=new Zt(new Fi(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:ds(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ym.makeRotationFromEuler(x.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ah),c.material.toneMapped=jt.getTransfer(M.colorSpace)!==oe,(h!==M||u!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Zt(new kn(2,2),new nn({name:"BackgroundMaterial",uniforms:ds(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=jt.getTransfer(M.colorSpace)!==oe,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,x){S.getRGB(ia,ph(i)),e.buffers.color.setClear(ia.r,ia.g,ia.b,x,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),o=x,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:p,addToRenderList:_,dispose:g}}function Em(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(C,D,F,P,k){let O=!1;const G=u(C,P,F,D);r!==G&&(r=G,c(r.object)),O=f(C,P,F,k),O&&p(C,P,F,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,M(C,D,F,P),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,D,F,P){const k=P.wireframe===!0;let O=n[D.id];O===void 0&&(O={},n[D.id]=O);const G=C.isInstancedMesh===!0?C.id:0;let W=O[G];W===void 0&&(W={},O[G]=W);let U=W[F.id];U===void 0&&(U={},W[F.id]=U);let L=U[k];return L===void 0&&(L=d(l()),U[k]=L),L}function d(C){const D=[],F=[],P=[];for(let k=0;k<e;k++)D[k]=0,F[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:P,object:C,attributes:{},index:null}}function f(C,D,F,P){const k=r.attributes,O=D.attributes;let G=0;const W=F.getAttributes();for(const U in W)if(W[U].location>=0){const N=k[U];let K=O[U];if(K===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(K=C.instanceColor)),N===void 0||N.attribute!==K||K&&N.data!==K.data)return!0;G++}return r.attributesNum!==G||r.index!==P}function p(C,D,F,P){const k={},O=D.attributes;let G=0;const W=F.getAttributes();for(const U in W)if(W[U].location>=0){let N=O[U];N===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(N=C.instanceColor));const K={};K.attribute=N,N&&N.data&&(K.data=N.data),k[U]=K,G++}r.attributes=k,r.attributesNum=G,r.index=P}function _(){const C=r.newAttributes;for(let D=0,F=C.length;D<F;D++)C[D]=0}function m(C){g(C,0)}function g(C,D){const F=r.newAttributes,P=r.enabledAttributes,k=r.attributeDivisors;F[C]=1,P[C]===0&&(i.enableVertexAttribArray(C),P[C]=1),k[C]!==D&&(i.vertexAttribDivisor(C,D),k[C]=D)}function S(){const C=r.newAttributes,D=r.enabledAttributes;for(let F=0,P=D.length;F<P;F++)D[F]!==C[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function x(C,D,F,P,k,O,G){G===!0?i.vertexAttribIPointer(C,D,F,k,O):i.vertexAttribPointer(C,D,F,P,k,O)}function M(C,D,F,P){_();const k=P.attributes,O=F.getAttributes(),G=D.defaultAttributeValues;for(const W in O){const U=O[W];if(U.location>=0){let L=k[W];if(L===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),L!==void 0){const N=L.normalized,K=L.itemSize,it=t.get(L);if(it===void 0)continue;const Y=it.buffer,V=it.type,$=it.bytesPerElement,tt=V===i.INT||V===i.UNSIGNED_INT||L.gpuType===Xa;if(L.isInterleavedBufferAttribute){const nt=L.data,ct=nt.isInterleavedBuffer===!0?nt.stride:nt.itemSize,It=L.offset;if(nt.isInstancedInterleavedBuffer||nt.isInstancedBufferAttribute){for(let xt=0;xt<U.locationSize;xt++)g(U.location+xt,nt.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let xt=0;xt<U.locationSize;xt++)m(U.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let xt=0;xt<U.locationSize;xt++)x(U.location+xt,K/U.locationSize,V,N,ct*$,(It+K/U.locationSize*xt)*$,tt)}else{if(L.isInstancedBufferAttribute){for(let nt=0;nt<U.locationSize;nt++)g(U.location+nt,L.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let nt=0;nt<U.locationSize;nt++)m(U.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let nt=0;nt<U.locationSize;nt++)x(U.location+nt,K/U.locationSize,V,N,K*$,K/U.locationSize*nt*$,tt)}}else if(G!==void 0){const N=G[W];if(N!==void 0)switch(N.length){case 2:i.vertexAttrib2fv(U.location,N);break;case 3:i.vertexAttrib3fv(U.location,N);break;case 4:i.vertexAttrib4fv(U.location,N);break;default:i.vertexAttrib1fv(U.location,N)}}}}S()}function E(){w();for(const C in n){const D=n[C];for(const F in D){const P=D[F];for(const k in P){const O=P[k];for(const G in O)h(O[G].object),delete O[G];delete P[k]}}delete n[C]}}function b(C){if(n[C.id]===void 0)return;const D=n[C.id];for(const F in D){const P=D[F];for(const k in P){const O=P[k];for(const G in O)h(O[G].object),delete O[G];delete P[k]}}delete n[C.id]}function v(C){for(const D in n){const F=n[D];for(const P in F){const k=F[P];if(k[C.id]===void 0)continue;const O=k[C.id];for(const G in O)h(O[G].object),delete O[G];delete k[C.id]}}}function y(C){for(const D in n){const F=n[D],P=C.isInstancedMesh===!0?C.id:0,k=F[P];if(k!==void 0){for(const O in k){const G=k[O];for(const W in G)h(G[W].object),delete G[W];delete k[O]}delete F[P],Object.keys(F).length===0&&delete n[D]}}}function w(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:T,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function wm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Tm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==zn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){const y=v===yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==rn&&v!==Sn&&!y&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ot("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Ot("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:M,maxSamples:E,samples:b}}function Am(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Gn,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,x=S*4;let M=g.clippingState||null;l.value=M,M=h(p,d,x,f);for(let E=0;E!==x;++E)M[E]=e[E];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=f+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,M=f;x!==_;++x,M+=4)a.copy(u[x]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}class pl extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ih(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fi(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:Yi});r.uniforms.tEquirect.value=e;const a=new Zt(s,r),o=e.minFilter;return e.minFilter===Mn&&(e.minFilter=Xe),new dl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Rh=256,Rm=3,Cm=20,Ch=256,Ph=16,Pm=3,Lm=new X,Dm=new wt;class sa{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new dl(1,10,null),this._boxMesh=new Zt(new Fi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Lm}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(Dm));const m=new dl(n,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Rh,bc(t))}_fromTexture(t,e){t.mapping===Zi||t.mapping===Ns?this._setSize(t.image.length===0?Rh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Lh(t,!1,!1),n=Math.log2(t)-Rm;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Lh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Zi||t.mapping===Ns?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Dh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Im(),this._integrationMaterial=Nm());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Ph);for(let a=0;a<=n;a++){const o=sa.lodToRoughness(a,n);if(a>n-Pm)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Ch*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Um());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function Lh(i,t,e){return new pl(i,{minFilter:Mn,generateMipmaps:t,type:yn,colorSpace:Er,depthBuffer:e})}function nr(i,t,e){return new nn({name:i,uniforms:t,vertexShader:Vt.cube_vert,fragmentShader:e,side:$e,blending:Yi,depthTest:!1,depthWrite:!1})}function Im(){return nr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ch}u

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
	`)}function Nm(){return nr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ph}},`

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
	`)}function Um(){return nr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Cm}
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
	`)}function Dh(){return nr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ih(){return nr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Fm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===ka||f===Ha)if(t.has(d)){const p=t.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const _=new pl(p.height);return _.fromEquirectangularTexture(i,d),t.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,p=f===ka||f===Ha,_=f===Zi||f===Ns;if(p||_){let m=e.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new sa(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const S=d.image;return p&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new sa(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===ka?d.mapping=Zi:f===Ha&&(d.mapping=Ns),d}function l(d){let f=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Om(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Tr("WebGLRenderer: "+n+" extension not supported."),s}}}function zm(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);const _=r.get(p);_&&(t.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),e.memory.geometries++),_}function h(p){const _=p.attributes;for(const m in _)t.update(_[m],i.ARRAY_BUFFER)}function u(p){const _=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const S=_!==null?_.array.length:m.array.length/3-1,x=m.count>=65535?Hc:kc,M=new x(Math.ceil(S/3)*6,1),E=M.array;if(_!==null){const v=_.array;g=_.version;for(let y=0,w=0;y<S;y+=3){const T=v[y+0],C=v[y+1],D=v[y+2];E[w++]=T,E[w++]=C,E[w++]=C,E[w++]=D,E[w++]=D,E[w++]=T}}else{g=m.version;for(let v=0,y=0;v<S;v+=3){const w=v+0,T=v+1,C=v+2;E[y++]=w,E[y++]=T,E[y++]=T,E[y++]=C,E[y++]=C,E[y++]=w}}M.version=g;const b=r.get(p);b&&t.remove(b),r.set(p,M)}function d(p){const _=r.get(p);if(_){const m=p.index;m!==null&&_.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(const p in s){const _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Bm(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Gm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:se("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function km(i,t,e){const n=new WeakMap,s=new de;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let w=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),p===!0&&(x=2),_===!0&&(x=3);let M=o.attributes.position.count*x,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const b=new Float32Array(M*E*4*u),v=new Cc(b,M,E,u);v.type=Sn,v.needsUpdate=!0;const y=x*4;for(let T=0;T<u;T++){const C=m[T],D=g[T],F=S[T],P=M*E*4*T;for(let k=0;k<C.count;k++){const O=k*y;f===!0&&(s.fromBufferAttribute(C,k),b[P+O+0]=s.x,b[P+O+1]=s.y,b[P+O+2]=s.z,b[P+O+3]=0),p===!0&&(s.fromBufferAttribute(D,k),b[P+O+4]=s.x,b[P+O+5]=s.y,b[P+O+6]=s.z,b[P+O+7]=0),_===!0&&(s.fromBufferAttribute(F,k),b[P+O+8]=s.x,b[P+O+9]=s.y,b[P+O+10]=s.z,b[P+O+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:v,size:new Ct(M,E)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Hm(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Vm={[nc]:"LINEAR_TONE_MAPPING",[ic]:"REINHARD_TONE_MAPPING",[sc]:"CINEON_TONE_MAPPING",[rc]:"ACES_FILMIC_TONE_MAPPING",[oc]:"AGX_TONE_MAPPING",[Ga]:"NEUTRAL_TONE_MAPPING",[ac]:"CUSTOM_TONE_MAPPING"};function Wm(i,t,e,n,s,r){const a=new Bn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Ee;h.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new fe([0,2,0,0,2,0],2));const u=new rp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Zt(h,u),f=new Sh(-1,1,1,-1,0,1);let p=null,_=null,m=!1,g,S=null,x=[],M=!1;this.setSize=function(E,b){a.setSize(E,b),o!==null&&o.setSize(E,b),l!==null&&l.setSize(E,b);for(let v=0;v<x.length;v++){const y=x[v];y.setSize&&y.setSize(E,b)}},this.setEffects=function(E){x=E,M=x.length>0&&x[0].isRenderPass===!0;const b=a.width,v=a.height;x.length>0&&o===null&&(o=new Bn(b,v,{type:yn,depthBuffer:!1,stencilBuffer:!1}),l=new Bn(b,v,{type:yn,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&x.some(w=>w.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new hs(b,v),r===!0&&(c.format=fi,c.type=Ki)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let w=0;w<x.length;w++){const T=x[w];T.setSize&&T.setSize(b,v),y&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(c)}},this.begin=function(E,b){if(m||E.toneMapping===Zn&&x.length===0)return!1;if(S=b,b!==null){const v=b.width,y=b.height;(a.width!==v||a.height!==y)&&this.setSize(v,y)}return M===!1&&E.setRenderTarget(a),g=E.toneMapping,E.toneMapping=Zn,!0},this.hasRenderPass=function(){return M},this.end=function(E,b){E.toneMapping=g,m=!0;let v=a,y=o;for(let w=0;w<x.length;w++){const T=x[w];T.enabled!==!1&&(T.render(E,y,v,b),T.needsSwap!==!1&&(v=y,y=y===o?l:o))}if(p!==E.outputColorSpace||_!==E.toneMapping){p=E.outputColorSpace,_=E.toneMapping,u.defines={},jt.getTransfer(p)===oe&&(u.defines.SRGB_TRANSFER="");const w=Vm[_];w&&(u.defines[w]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,E.setRenderTarget(S),E.render(d,f),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const Nh=new be,Uh=new hs(1,1),Fh=new sh(1),Oh=new Cc,zh=new gf,Bh=new ih,Gh=[],kh=[],Hh=new Float32Array(16),Vh=new Float32Array(9),Wh=new Float32Array(4);function gs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Gh[s];if(r===void 0&&(r=new Float32Array(s),Gh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ra(i,t){let e=kh[t];e===void 0&&(e=new Int32Array(t),kh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function Km(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Wh.set(n),i.uniformMatrix2fv(this.addr,!1,Wh),De(e,n)}}function $m(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Vh.set(n),i.uniformMatrix3fv(this.addr,!1,Vh),De(e,n)}}function Jm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Hh.set(n),i.uniformMatrix4fv(this.addr,!1,Hh),De(e,n)}}function Qm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function ng(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function aa(i){return i.version===0&&(i.compareFunction=xc,i.needsUpdate=!0),i}function ag(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=aa(Uh):r=Nh,e.setTexture2D(t||r,s)}function og(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zh,s)}function lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=aa(Fh):r=Bh,e.setTextureCube(t||r,s)}function cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Oh,s)}function hg(i){switch(i){case 5126:return Xm;case 35664:return Ym;case 35665:return qm;case 35666:return Zm;case 35674:return Km;case 35675:return $m;case 35676:return Jm;case 5124:case 35670:return Qm;case 35667:case 35671:return jm;case 35668:case 35672:return tg;case 35669:case 35673:return eg;case 5125:return ng;case 36294:return ig;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}function ug(i,t){i.uniform1fv(this.addr,t)}function dg(i,t){const e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function fg(i,t){const e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function pg(i,t){const e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function mg(i,t){const e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gg(i,t){const e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function xg(i,t){const e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _g(i,t){i.uniform1iv(this.addr,t)}function vg(i,t){i.uniform2iv(this.addr,t)}function Mg(i,t){i.uniform3iv(this.addr,t)}function Sg(i,t){i.uniform4iv(this.addr,t)}function yg(i,t){i.uniform1uiv(this.addr,t)}function bg(i,t){i.uniform2uiv(this.addr,t)}function Eg(i,t){i.uniform3uiv(this.addr,t)}function wg(i,t){i.uniform4uiv(this.addr,t)}function Tg(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=aa(Uh):a=Nh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Ag(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||zh,r[a])}function Rg(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=aa(Fh):a=Bh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Cg(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Oh,r[a])}function Pg(i){switch(i){case 5126:return ug;case 35664:return dg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return xg;case 5124:case 35670:return _g;case 35667:case 35671:return vg;case 35668:case 35672:return Mg;case 35669:case 35673:return Sg;case 5125:return yg;case 36294:return bg;case 36295:return Eg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Cg}}class Lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hg(e.type)}}class Dg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pg(e.type)}}class Ig{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ml=/(\w+)(\])?(\[|\.)?/g;function Xh(i,t){i.seq.push(t),i.map[t.id]=t}function Ng(i,t,e){const n=i.name,s=n.length;for(ml.lastIndex=0;;){const r=ml.exec(n),a=ml.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Xh(e,c===void 0?new Lg(o,i,t):new Dg(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Ig(o),Xh(e,u)),e=u}}}class oa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ng(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Yh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ug=37297;let Fg=0;function Og(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const qh=new zt;function zg(i){jt._getMatrix(qh,jt.workingColorSpace,i);const t=`mat3( ${qh.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case wr:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Og(i.getShaderSource(t),o)}else return r}function Bg(i,t){const e=zg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Gg={[nc]:"Linear",[ic]:"Reinhard",[sc]:"Cineon",[rc]:"ACESFilmic",[oc]:"AgX",[Ga]:"Neutral",[ac]:"Custom"};function kg(i,t){const e=Gg[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const la=new X;function Hg(){jt.getLuminanceCoefficients(la);const i=la.x.toFixed(4),t=la.y.toFixed(4),e=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function Wg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ir(i){return i!==""}function Kh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function $h(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(i){return i.replace(Yg,qg)}function qg(i,t){const e=Vt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return gl(e)}const Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(i){return i.replace(Zg,Kg)}function Kg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const $g={[Ps]:"SHADOWMAP_TYPE_PCF",[Ls]:"SHADOWMAP_TYPE_VSM"};function Jg(i){return $g[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Qg={[Ns]:"ENVMAP_MODE_REFRACTION"};function jg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Qg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tx={[mr]:"ENVMAP_BLENDING_MULTIPLY",[Id]:"ENVMAP_BLENDING_MIX",[Nd]:"ENVMAP_BLENDING_ADD"};function ex(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":tx[i.combine]||"ENVMAP_BLENDING_NONE"}function nx(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Jg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=jg(e),u=ex(e),d=Vg(e),f=Wg(r),p=s.createProgram();let _,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ir).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ir).join(`
`),m.length>0&&(m+=`
`)):(_=[Qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),m=[Qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?kg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Bg("linearToOutputTexel",e.outputColorSpace),Hg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),a=gl(a),a=Kh(a,e),a=$h(a,e),o=gl(o),o=Kh(o,e),o=$h(o,e),a=Jh(a),o=Jh(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=g+_+a,x=g+m+o,M=Yh(s,s.VERTEX_SHADER,S),E=Yh(s,s.FRAGMENT_SHADER,x);s.attachShader(p,M),s.attachShader(p,E),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function b(T){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(p)||"",D=s.getShaderInfoLog(M)||"",F=s.getShaderInfoLog(E)||"",P=C.trim(),k=D.trim(),O=F.trim();let G=!0,W=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,M,E);else{const U=Zh(s,M,"vertex"),L=Zh(s,E,"fragment");se("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+P+`
`+U+`
`+L)}else P!==""?Ot("WebGLProgram: Program Info Log:",P):(k===""||O==="")&&(W=!1);W&&(T.diagnostics={runnable:G,programLog:P,vertexShader:{log:k,prefix:_},fragmentShader:{log:O,prefix:m}})}s.deleteShader(M),s.deleteShader(E),v=new oa(s,p),y=Xg(s,p)}let v;this.getUniforms=function(){return v===void 0&&b(this),v};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(p,Ug)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fg++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=E,this}let ix=0;class sx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new rx(t),e.set(t,n)),n}}class rx{constructor(t){this.id=ix++,this.code=t,this.usedTimes=0}}function ax(i){return i===pi||i===yr||i===br}function ox(i,t,e,n,s,r){const a=new Uo,o=new sx,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,y,w,T,C,D){const F=T.fog,P=C.geometry,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?T.environment:null,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,G=t.get(v.envMap||k,O),W=d[v.type];let U=n.precision;v.precision!==null&&(U=n.getMaxPrecision(v.precision),U!==v.precision&&Ot("WebGLProgram.getParameters:",v.precision,"not supported, using",U,"instead."));const L=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,N=L!==void 0?L.length:0;let K=0;P.morphAttributes.position!==void 0&&(K=1),P.morphAttributes.normal!==void 0&&(K=2),P.morphAttributes.color!==void 0&&(K=3);let it,Y,V,$;if(W){const bt=Vn[W];it=bt.vertexShader,Y=bt.fragmentShader}else{it=v.vertexShader,Y=v.fragmentShader;const bt=o.getVertexShaderStage(v),le=o.getFragmentShaderStage(v);o.update(v,bt,le),V=bt.id,$=le.id}const tt=i.getRenderTarget(),nt=i.state.buffers.depth.getReversed(),ct=C.isInstancedMesh===!0,It=C.isBatchedMesh===!0,xt=!!v.map,Lt=!!v.matcap,Bt=!!G,Nt=Bt&&G.isPMREMTexture===!0,$t=!!v.aoMap,Wt=!!v.lightMap,he=!!v.bumpMap&&v.wireframe===!1,te=!!v.normalMap,je=!!v.displacementMap,pe=!!v.emissiveMap,ze=!!v.metalnessMap,Me=!!v.roughnessMap,me=v.anisotropy>0,q=v.clearcoat>0,_n=v.diffuseRoughness>0,ge=v.dispersion>0,xe=v.retroreflectivity>0,St=v.iridescence>0,Ue=v.sheen>0,Ft=v.transmission>0,kt=me&&!!v.anisotropyMap,I=q&&!!v.clearcoatMap,A=q&&!!v.clearcoatNormalMap,Q=q&&!!v.clearcoatRoughnessMap,ht=_n&&!!v.diffuseRoughnessMap,lt=St&&!!v.iridescenceMap,ft=St&&!!v.iridescenceThicknessMap,vt=Ue&&!!v.sheenColorMap,rt=Ue&&!!v.sheenRoughnessMap,at=!!v.specularMap,mt=!!v.specularColorMap,z=!!v.specularIntensityMap,ot=Ft&&!!v.transmissionMap,st=Ft&&!!v.thicknessMap,gt=!!v.gradientMap,dt=!!v.alphaMap,pt=v.alphaTest>0,Dt=!!v.alphaHash,Yt=!!v.extensions;let ut=Zn;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(ut=i.toneMapping);const Ut=Nt?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Xt={shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:it,fragmentShader:Y,defines:v.defines,customVertexShaderID:V,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:U,batching:It,batchingColor:It&&C._colorsTexture!==null,instancing:ct,instancingColor:ct&&C.instanceColor!==null,instancingMorph:ct&&C.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:xt,matcap:Lt,envMap:Bt,envMapMode:Bt&&G.mapping,envMapPMREM:Nt,envMapMaxLod:Nt?Ut.length-1:null,envMapSize:Nt?Ut[0].width:null,aoMap:$t,lightMap:Wt,bumpMap:he,normalMap:te,displacementMap:je,emissiveMap:pe,normalMapObjectSpace:te&&v.normalMapType===Od,normalMapTangentSpace:te&&v.normalMapType===$i,packedNormalMap:te&&v.normalMapType===$i&&ax(v.normalMap.format),metalnessMap:ze,roughnessMap:Me,anisotropy:me,anisotropyMap:kt,clearcoat:q,clearcoatMap:I,clearcoatNormalMap:A,clearcoatRoughnessMap:Q,diffuseRoughness:_n,diffuseRoughnessMap:ht,dispersion:ge,retroreflection:xe,iridescence:St,iridescenceMap:lt,iridescenceThicknessMap:ft,sheen:Ue,sheenColorMap:vt,sheenRoughnessMap:rt,specularMap:at,specularColorMap:mt,specularIntensityMap:z,transmission:Ft,transmissionMap:ot,thicknessMap:st,gradientMap:gt,opaque:v.transparent===!1&&v.blending===Ds&&v.alphaToCoverage===!1,alphaMap:dt,alphaTest:pt,alphaHash:Dt,combine:v.combine,mapUv:xt&&f(v.map.channel),aoMapUv:$t&&f(v.aoMap.channel),lightMapUv:Wt&&f(v.lightMap.channel),bumpMapUv:he&&f(v.bumpMap.channel),normalMapUv:te&&f(v.normalMap.channel),displacementMapUv:je&&f(v.displacementMap.channel),emissiveMapUv:pe&&f(v.emissiveMap.channel),metalnessMapUv:ze&&f(v.metalnessMap.channel),roughnessMapUv:Me&&f(v.roughnessMap.channel),anisotropyMapUv:kt&&f(v.anisotropyMap.channel),clearcoatMapUv:I&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:A&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ht&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:lt&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:rt&&f(v.sheenRoughnessMap.channel),specularMapUv:at&&f(v.specularMap.channel),specularColorMapUv:mt&&f(v.specularColorMap.channel),specularIntensityMapUv:z&&f(v.specularIntensityMap.channel),transmissionMapUv:ot&&f(v.transmissionMap.channel),thicknessMapUv:st&&f(v.thicknessMap.channel),alphaMapUv:dt&&f(v.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(te||me),vertexNormals:!!P.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!P.attributes.uv&&(xt||dt),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||P.attributes.normal===void 0&&te===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:nt,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:K,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:D.filter(bt=>bt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ut,decodeVideoTexture:xt&&v.map.isVideoTexture===!0&&jt.getTransfer(v.map.colorSpace)===oe,decodeVideoTextureEmissive:pe&&v.emissiveMap.isVideoTexture===!0&&jt.getTransfer(v.emissiveMap.colorSpace)===oe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Re,flipSided:v.side===$e,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Yt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&v.extensions.multiDraw===!0||It)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function _(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const w in v.defines)y.push(w),y.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(m(y,v),g(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function m(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapPMREM),v.push(y.envMapMaxLod),v.push(y.envMapSize),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.diffuseRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.numSunLights),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numSunLightShadows),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.numLightProbeGrids),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function g(v,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function S(v){const y=d[v.type];let w;if(y){const T=Vn[y];w=np.clone(T.uniforms)}else w=v.uniforms;return w}function x(v,y){let w=h.get(y);return w!==void 0?++w.usedTimes:(w=new nx(i,y,v,s),c.push(w),h.set(y,w)),w}function M(v){if(--v.usedTimes===0){const y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function b(){o.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:S,acquireProgram:x,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:b}}function lx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function cx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function jh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function tu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,_,m,g){let S=i[t];return S===void 0?(S={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},i[t]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=p,S.materialVariant=a(d),S.groupOrder=_,S.renderOrder=d.renderOrder,S.z=m,S.group=g),t++,S}function l(d,f,p,_,m,g,S){S.reversedDepth===!0&&(m=-m);const x=o(d,f,p,_,m,g);p.transmission>0?n.push(x):p.transparent===!0?s.push(x):e.push(x)}function c(d,f,p,_,m,g){const S=o(d,f,p,_,m,g);p.transmission>0?n.unshift(S):p.transparent===!0?s.unshift(S):e.unshift(S)}function h(d,f){e.length>1&&e.sort(d||cx),n.length>1&&n.sort(f||jh),s.length>1&&s.sort(f||jh)}function u(){for(let d=t,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function hx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new tu,i.set(n,[a])):s>=r.length?(a=new tu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ux(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new X,color:new wt};break;case"SpotLight":e={position:new X,direction:new X,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new X,halfWidth:new X,halfHeight:new X};break}return i[t.id]=e,e}}}function dx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let fx=0;function px(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function mx(i){const t=new ux,e=dx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const s=new X,r=new ne,a=new ne;function o(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,S=0,x=0,M=0,E=0,b=0,v=0,y=0,w=0,T=0;c.sort(px);for(let D=0,F=c.length;D<F;D++){const P=c[D],k=P.color,O=P.intensity,G=P.distance;let W=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===pi?W=P.shadow.map.texture:W=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=k.r*O,u+=k.g*O,d+=k.b*O;else if(P.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(P.sh.coefficients[U],O);T++}else if(P.isSunLight){const U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const L=P.shadow,N=e.get(P);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize.copy(L.mapSize).multiply(L.getFrameExtents()),n.sunShadow[p]=N,n.sunShadowMap[p]=W;const K=L.getViewportCount();for(let it=0;it<K;it++)n.sunShadowMatrix[_+it]=L.getMatrix(it),n.sunShadowCascade[_+it]=L._cascadeData[it];_+=K,p++}n.sun[f]=U,f++}else if(P.isDirectionalLight){const U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const L=P.shadow,N=e.get(P);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize=L.mapSize,n.directionalShadow[m]=N,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=P.shadow.matrix,E++}n.directional[m]=U,m++}else if(P.isSpotLight){const U=t.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(k).multiplyScalar(O),U.distance=G,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,n.spot[S]=U;const L=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,L.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[S]=L.matrix,P.castShadow){const N=e.get(P);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize=L.mapSize,n.spotShadow[S]=N,n.spotShadowMap[S]=W,v++}S++}else if(P.isRectAreaLight){const U=t.get(P);U.color.copy(k).multiplyScalar(O),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),n.rectArea[x]=U,x++}else if(P.isPointLight){const U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),U.distance=P.distance,U.decay=P.decay,P.castShadow){const L=P.shadow,N=e.get(P);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize=L.mapSize,N.shadowCameraNear=L.camera.near,N.shadowCameraFar=L.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=U,g++}else if(P.isHemisphereLight){const U=t.get(P);U.skyColor.copy(P.color).multiplyScalar(O),U.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[M]=U,M++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==g||C.spotLength!==S||C.rectAreaLength!==x||C.hemiLength!==M||C.numSunShadows!==p||C.numDirectionalShadows!==E||C.numPointShadows!==b||C.numSpotShadows!==v||C.numSpotMaps!==y||C.numLightProbes!==T)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=x,n.point.length=g,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,C.sunLength=f,C.directionalLength=m,C.pointLength=g,C.spotLength=S,C.rectAreaLength=x,C.hemiLength=M,C.numSunShadows=p,C.numDirectionalShadows=E,C.numPointShadows=b,C.numSpotShadows=v,C.numSpotMaps=y,C.numLightProbes=T,n.version=fx++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0,m=0;const g=h.matrixWorldInverse;for(let S=0,x=c.length;S<x;S++){const M=c[S];if(M.isSunLight){const E=n.sun[u];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(g),u++}else if(M.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),d++}else if(M.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),p++}else if(M.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function eu(i){const t=new mx(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){n.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function gx(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new eu(i),t.set(s,[o])):r>=a.length?(o=new eu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const xx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_x=`uniform sampler2D shadow_pass;
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
}`,vx=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],Mx=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],nu=new ne,sr=new X,xl=new X;function Sx(i,t,e){let n=new $s;const s=new Ct,r=new Ct,a=new de,o=new lp,l=new cp,c={},h=e.maxTextureSize,u={[ui]:$e,[$e]:ui,[Re]:Re},d=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:xx,fragmentShader:_x}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Ee;p.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Zt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ps;let g=this.type;this.render=function(b,v,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===pd&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ps);const w=i.getRenderTarget(),T=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Yi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=g!==this.type;F&&v.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(k=>k.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,k=b.length;P<k;P++){const O=b[P],G=O.shadow;if(G===void 0){Ot("WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const W=G.getFrameExtents();s.multiply(W),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,G.mapSize.y=r.y));const U=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=U,G.map===null||F===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ls){if(O.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Bn(s.x,s.y,{format:pi,type:yn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),G.map.texture.name=O.name+".shadowMap",G.map.depthTexture=new hs(s.x,s.y,Sn),G.map.depthTexture.name=O.name+".shadowMapDepth",G.map.depthTexture.format=di,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ce,G.map.depthTexture.magFilter=Ce}else O.isPointLight?(G.map=new pl(s.x),G.map.depthTexture=new sh(s.x,On)):(G.map=new Bn(s.x,s.y),G.map.depthTexture=new hs(s.x,s.y,On)),G.map.depthTexture.name=O.name+".shadowMap",G.map.depthTexture.format=di,this.type===Ps?(G.map.depthTexture.compareFunction=U?gc:mc,G.map.depthTexture.minFilter=Xe,G.map.depthTexture.magFilter=Xe):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ce,G.map.depthTexture.magFilter=Ce);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);const L=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();O.isPointLight!==!0&&G.updateMatrices(O,y);const N=G.camera.layers.mask&4294967294?G.camera.layers:y.layers;for(let K=0;K<L;K++){const it=G.getCamera(K);if(O.isPointLight){const Y=G.camera,V=G.matrix,$=O.distance||Y.far;$!==Y.far&&(Y.far=$,Y.updateProjectionMatrix()),sr.setFromMatrixPosition(O.matrixWorld),Y.position.copy(sr),xl.copy(Y.position),xl.add(vx[K]),Y.up.copy(Mx[K]),Y.lookAt(xl),Y.updateMatrixWorld(),V.makeTranslation(-sr.x,-sr.y,-sr.z),nu.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),G._frustum.setFromProjectionMatrix(nu,Y.coordinateSystem,Y.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,K),i.clear();else{K===0&&(i.setRenderTarget(G.map),i.clear());const Y=G.getViewport(K);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),D.viewport(a)}n=G.getFrustum(K),M(v,y,it,O,N,this.type)}G.isPointLightShadow!==!0&&this.type===Ls&&S(G,y),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(w,T,C)};function S(b,v){const y=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Bn(s.x,s.y,{format:pi,type:yn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(v,null,y,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(v,null,y,f,_,null)}function x(b,v,y,w){let T=null;const C=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)T=C;else if(T=y.isPointLight===!0?l:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const D=T.uuid,F=v.uuid;let P=c[D];P===void 0&&(P={},c[D]=P);let k=P[F];k===void 0&&(k=T.clone(),P[F]=k,v.addEventListener("dispose",E)),T=k}if(T.visible=v.visible,T.wireframe=v.wireframe,w===Ls?T.side=v.shadowSide!==null?v.shadowSide:v.side:T.side=v.shadowSide!==null?v.shadowSide:u[v.side],T.alphaMap=v.alphaMap,T.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,T.map=v.map,T.clipShadows=v.clipShadows,T.clippingPlanes=v.clippingPlanes,T.clipIntersection=v.clipIntersection,T.displacementMap=v.displacementMap,T.displacementScale=v.displacementScale,T.displacementBias=v.displacementBias,T.wireframeLinewidth=v.wireframeLinewidth,T.linewidth=v.linewidth,y.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const D=i.properties.get(T);D.light=y}return T}function M(b,v,y,w,T,C){if(b.visible===!1)return;if(b.layers.test(T)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===Ls)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const P=t.update(b),k=b.material;if(Array.isArray(k)){const O=P.groups;for(let G=0,W=O.length;G<W;G++){const U=O[G],L=k[U.materialIndex];if(L&&L.visible){const N=x(b,L,w,C);b.onBeforeShadow(i,b,v,y,P,N,U),i.renderBufferDirect(y,null,P,N,b,U),b.onAfterShadow(i,b,v,y,P,N,U)}}}else if(k.visible){const O=x(b,k,w,C);b.onBeforeShadow(i,b,v,y,P,O,null),i.renderBufferDirect(y,null,P,O,b,null),b.onAfterShadow(i,b,v,y,P,O,null)}}const F=b.children;for(let P=0,k=F.length;P<k;P++)M(F[P],v,y,w,T,C)}function E(b){b.target.removeEventListener("dispose",E);for(const y in c){const w=c[y],T=b.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}function yx(i,t){function e(){let z=!1;const ot=new de;let st=null;const gt=new de(0,0,0,0);return{setMask:function(dt){st!==dt&&!z&&(i.colorMask(dt,dt,dt,dt),st=dt)},setLocked:function(dt){z=dt},setClear:function(dt,pt,Dt,Yt,ut){ut===!0&&(dt*=Yt,pt*=Yt,Dt*=Yt),ot.set(dt,pt,Dt,Yt),gt.equals(ot)===!1&&(i.clearColor(dt,pt,Dt,Yt),gt.copy(ot))},reset:function(){z=!1,st=null,gt.set(-1,0,0,0)}}}function n(){let z=!1,ot=!1,st=null,gt=null,dt=null;return{setReversed:function(pt){if(ot!==pt){const Dt=t.get("EXT_clip_control");pt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),ot=pt;const Yt=dt;dt=null,this.setClear(Yt)}},getReversed:function(){return ot},setTest:function(pt){pt?nt(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(pt){st!==pt&&!z&&(i.depthMask(pt),st=pt)},setFunc:function(pt){if(ot&&(pt=Zd[pt]),gt!==pt){switch(pt){case Ia:i.depthFunc(i.NEVER);break;case Na:i.depthFunc(i.ALWAYS);break;case Ua:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case Fa:i.depthFunc(i.EQUAL);break;case Oa:i.depthFunc(i.GEQUAL);break;case za:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=pt}},setLocked:function(pt){z=pt},setClear:function(pt){dt!==pt&&(dt=pt,ot&&(pt=1-pt),i.clearDepth(pt))},reset:function(){z=!1,st=null,gt=null,dt=null,ot=!1}}}function s(){let z=!1,ot=null,st=null,gt=null,dt=null,pt=null,Dt=null,Yt=null,ut=null;return{setTest:function(Ut){z||(Ut?nt(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(Ut){ot!==Ut&&!z&&(i.stencilMask(Ut),ot=Ut)},setFunc:function(Ut,Xt,bt){(st!==Ut||gt!==Xt||dt!==bt)&&(i.stencilFunc(Ut,Xt,bt),st=Ut,gt=Xt,dt=bt)},setOp:function(Ut,Xt,bt){(pt!==Ut||Dt!==Xt||Yt!==bt)&&(i.stencilOp(Ut,Xt,bt),pt=Ut,Dt=Xt,Yt=bt)},setLocked:function(Ut){z=Ut},setClear:function(Ut){ut!==Ut&&(i.clearStencil(Ut),ut=Ut)},reset:function(){z=!1,ot=null,st=null,gt=null,dt=null,pt=null,Dt=null,Yt=null,ut=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let h={},u={},d={},f=new WeakMap,p=[],_=null,m=!1,g=null,S=null,x=null,M=null,E=null,b=null,v=null,y=new wt(0,0,0),w=0,T=!1,C=null,D=null,F=null,P=null,k=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,W=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(U)[1]),G=W>=1):U.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),G=W>=2);let L=null,N={};const K=i.getParameter(i.SCISSOR_BOX),it=i.getParameter(i.VIEWPORT),Y=new de().fromArray(K),V=new de().fromArray(it);function $(z,ot,st,gt){const dt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(z,pt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<st;Dt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(ot+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return pt}const tt={};tt[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(Is),he(!1),te(Jl),nt(i.CULL_FACE),$t(Yi);function nt(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function ct(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function It(z,ot){return d[z]!==ot?(i.bindFramebuffer(z,ot),d[z]=ot,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ot),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function xt(z,ot){let st=p,gt=!1;if(z){st=f.get(ot),st===void 0&&(st=[],f.set(ot,st));const dt=z.textures;if(st.length!==dt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Dt=dt.length;pt<Dt;pt++)st[pt]=i.COLOR_ATTACHMENT0+pt;st.length=dt.length,gt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,gt=!0);gt&&i.drawBuffers(st)}function Lt(z){return _!==z?(i.useProgram(z),_=z,!0):!1}const Bt={[qi]:i.FUNC_ADD,[gd]:i.FUNC_SUBTRACT,[xd]:i.FUNC_REVERSE_SUBTRACT};Bt[_d]=i.MIN,Bt[vd]=i.MAX;const Nt={[Md]:i.ZERO,[Sd]:i.ONE,[yd]:i.SRC_COLOR,[tc]:i.SRC_ALPHA,[Rd]:i.SRC_ALPHA_SATURATE,[Td]:i.DST_COLOR,[Ed]:i.DST_ALPHA,[bd]:i.ONE_MINUS_SRC_COLOR,[ec]:i.ONE_MINUS_SRC_ALPHA,[Ad]:i.ONE_MINUS_DST_COLOR,[wd]:i.ONE_MINUS_DST_ALPHA,[Cd]:i.CONSTANT_COLOR,[Pd]:i.ONE_MINUS_CONSTANT_COLOR,[Ld]:i.CONSTANT_ALPHA,[Dd]:i.ONE_MINUS_CONSTANT_ALPHA};function $t(z,ot,st,gt,dt,pt,Dt,Yt,ut,Ut){if(z===Yi){m===!0&&(ct(i.BLEND),m=!1);return}if(m===!1&&(nt(i.BLEND),m=!0),z!==md){if(z!==g||Ut!==T){if((S!==qi||E!==qi)&&(i.blendEquation(i.FUNC_ADD),S=qi,E=qi),Ut)switch(z){case Ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFunc(i.ONE,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:se("WebGLState: Invalid blending: ",z);break}else switch(z){case Ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ql:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jl:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",z);break}x=null,M=null,b=null,v=null,y.set(0,0,0),w=0,g=z,T=Ut}return}dt=dt||ot,pt=pt||st,Dt=Dt||gt,(ot!==S||dt!==E)&&(i.blendEquationSeparate(Bt[ot],Bt[dt]),S=ot,E=dt),(st!==x||gt!==M||pt!==b||Dt!==v)&&(i.blendFuncSeparate(Nt[st],Nt[gt],Nt[pt],Nt[Dt]),x=st,M=gt,b=pt,v=Dt),(Yt.equals(y)===!1||ut!==w)&&(i.blendColor(Yt.r,Yt.g,Yt.b,ut),y.copy(Yt),w=ut),g=z,T=!1}function Wt(z,ot){z.side===Re?ct(i.CULL_FACE):nt(i.CULL_FACE);let st=z.side===$e;ot&&(st=!st),he(st),z.blending===Ds&&z.transparent===!1?$t(Yi):$t(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const gt=z.stencilWrite;o.setTest(gt),gt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),pe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(z){C!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),C=z)}function te(z){z!==dd?(nt(i.CULL_FACE),z!==D&&(z===Jl?i.cullFace(i.BACK):z===fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),D=z}function je(z){z!==F&&(G&&i.lineWidth(z),F=z)}function pe(z,ot,st){z?(nt(i.POLYGON_OFFSET_FILL),(P!==ot||k!==st)&&(P=ot,k=st,a.getReversed()&&(ot=-ot,st=-st),i.polygonOffset(ot,st))):ct(i.POLYGON_OFFSET_FILL)}function ze(z){z?nt(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function Me(z){z===void 0&&(z=i.TEXTURE0+O-1),L!==z&&(i.activeTexture(z),L=z)}function me(z,ot,st){st===void 0&&(L===null?st=i.TEXTURE0+O-1:st=L);let gt=N[st];gt===void 0&&(gt={type:void 0,texture:void 0},N[st]=gt),(gt.type!==z||gt.texture!==ot)&&(L!==st&&(i.activeTexture(st),L=st),i.bindTexture(z,ot||tt[z]),gt.type=z,gt.texture=ot)}function q(){const z=N[L];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function _n(){try{i.compressedTexImage2D(...arguments)}catch(z){se("WebGLState:",z)}}function ge(){try{i.compressedTexImage3D(...arguments)}catch(z){se("WebGLState:",z)}}function xe(){try{i.texSubImage2D(...arguments)}catch(z){se("WebGLState:",z)}}function St(){try{i.texSubImage3D(...arguments)}catch(z){se("WebGLState:",z)}}function Ue(){try{i.compressedTexSubImage2D(...arguments)}catch(z){se("WebGLState:",z)}}function Ft(){try{i.compressedTexSubImage3D(...arguments)}catch(z){se("WebGLState:",z)}}function kt(){try{i.texStorage2D(...arguments)}catch(z){se("WebGLState:",z)}}function I(){try{i.texStorage3D(...arguments)}catch(z){se("WebGLState:",z)}}function A(){try{i.texImage2D(...arguments)}catch(z){se("WebGLState:",z)}}function Q(){try{i.texImage3D(...arguments)}catch(z){se("WebGLState:",z)}}function ht(z){return u[z]!==void 0?u[z]:i.getParameter(z)}function lt(z,ot){u[z]!==ot&&(i.pixelStorei(z,ot),u[z]=ot)}function ft(z){Y.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Y.copy(z))}function vt(z){V.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),V.copy(z))}function rt(z,ot){let st=c.get(ot);st===void 0&&(st=new WeakMap,c.set(ot,st));let gt=st.get(z);gt===void 0&&(gt=i.getUniformBlockIndex(ot,z.name),i.uniformBlockBinding(ot,gt,gt),st.set(z,gt))}function at(z,ot,st){const dt=c.get(ot).get(z);l[dt]!==st&&(i.bindBufferBase(i.UNIFORM_BUFFER,dt,st),l[dt]=st)}function mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},L=null,N={},d={},l={},f=new WeakMap,p=[],_=null,m=!1,g=null,S=null,x=null,M=null,E=null,b=null,v=null,y=new wt(0,0,0),w=0,T=!1,C=null,D=null,F=null,P=null,k=null,Y.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:ct,bindFramebuffer:It,drawBuffers:xt,useProgram:Lt,setBlending:$t,setMaterial:Wt,setFlipSided:he,setCullFace:te,setLineWidth:je,setPolygonOffset:pe,setScissorTest:ze,activeTexture:Me,bindTexture:me,unbindTexture:q,compressedTexImage2D:_n,compressedTexImage3D:ge,texImage2D:A,texImage3D:Q,pixelStorei:lt,getParameter:ht,updateUBOMapping:rt,uniformBlockBinding:at,texStorage2D:kt,texStorage3D:I,texSubImage2D:xe,texSubImage3D:St,compressedTexSubImage2D:Ue,compressedTexSubImage3D:Ft,scissor:ft,viewport:vt,reset:mt}}function bx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap,u=new Set;let d;const f=new WeakMap,p=new Set,_=new FinalizationRegistry(I=>p.delete(I));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,A){return m?new OffscreenCanvas(I,A):Bs("canvas")}function S(I,A,Q){let ht=1;const lt=kt(I);if((lt.width>Q||lt.height>Q)&&(ht=Q/Math.max(lt.width,lt.height)),ht<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ft=Math.floor(ht*lt.width),vt=Math.floor(ht*lt.height);d===void 0&&(d=g(ft,vt));const rt=A?g(ft,vt):d;return rt.width=ft,rt.height=vt,rt.getContext("2d").drawImage(I,0,0,ft,vt),Ot("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+ft+"x"+vt+")."),rt}else return"data"in I&&Ot("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),I;return I}function x(I){return I.generateMipmaps}function M(I){i.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(I,A,Q,ht,lt,ft=!1){if(I!==null){if(i[I]!==void 0)return i[I];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let vt;ht&&(vt=t.get("EXT_texture_norm16"),vt||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=A;if(A===i.RED&&(Q===i.FLOAT&&(rt=i.R32F),Q===i.HALF_FLOAT&&(rt=i.R16F),Q===i.UNSIGNED_BYTE&&(rt=i.R8),Q===i.UNSIGNED_SHORT&&vt&&(rt=vt.R16_EXT),Q===i.SHORT&&vt&&(rt=vt.R16_SNORM_EXT)),A===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(rt=i.R8UI),Q===i.UNSIGNED_SHORT&&(rt=i.R16UI),Q===i.UNSIGNED_INT&&(rt=i.R32UI),Q===i.BYTE&&(rt=i.R8I),Q===i.SHORT&&(rt=i.R16I),Q===i.INT&&(rt=i.R32I)),A===i.RG&&(Q===i.FLOAT&&(rt=i.RG32F),Q===i.HALF_FLOAT&&(rt=i.RG16F),Q===i.UNSIGNED_BYTE&&(rt=i.RG8),Q===i.UNSIGNED_SHORT&&vt&&(rt=vt.RG16_EXT),Q===i.SHORT&&vt&&(rt=vt.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(rt=i.RG8UI),Q===i.UNSIGNED_SHORT&&(rt=i.RG16UI),Q===i.UNSIGNED_INT&&(rt=i.RG32UI),Q===i.BYTE&&(rt=i.RG8I),Q===i.SHORT&&(rt=i.RG16I),Q===i.INT&&(rt=i.RG32I)),A===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),Q===i.UNSIGNED_INT&&(rt=i.RGB32UI),Q===i.BYTE&&(rt=i.RGB8I),Q===i.SHORT&&(rt=i.RGB16I),Q===i.INT&&(rt=i.RGB32I)),A===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),Q===i.UNSIGNED_INT&&(rt=i.RGBA32UI),Q===i.BYTE&&(rt=i.RGBA8I),Q===i.SHORT&&(rt=i.RGBA16I),Q===i.INT&&(rt=i.RGBA32I)),A===i.RGB&&(Q===i.UNSIGNED_SHORT&&vt&&(rt=vt.RGB16_EXT),Q===i.SHORT&&vt&&(rt=vt.RGB16_SNORM_EXT),Q===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),A===i.RGBA){const at=ft?wr:jt.getTransfer(lt);Q===i.FLOAT&&(rt=i.RGBA32F),Q===i.HALF_FLOAT&&(rt=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(rt=at===oe?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT&&vt&&(rt=vt.RGBA16_EXT),Q===i.SHORT&&vt&&(rt=vt.RGBA16_SNORM_EXT),Q===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function v(I,A){let Q;return I?A===null||A===On||A===Ki?Q=i.DEPTH24_STENCIL8:A===Sn?Q=i.DEPTH32F_STENCIL8:A===Fs&&(Q=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===On||A===Ki?Q=i.DEPTH_COMPONENT24:A===Sn?Q=i.DEPTH_COMPONENT32F:A===Fs&&(Q=i.DEPTH_COMPONENT16),Q}function y(I,A){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ce&&I.minFilter!==Xe?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function w(I){const A=new WeakRef(I);n.get(I).__ref=A,p.add(A),_.register(I,A,A)}function T(I){const A=n.get(I).__ref;A!==void 0&&(p.delete(A),_.unregister(A))}function C(I){F(I.target)}function D(I){P(I.target)}function F(I){I.removeEventListener("dispose",C),T(I),O(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function P(I){I.removeEventListener("dispose",D),T(I),W(I)}function k(){for(const I of p){const A=I.deref();A!==void 0&&(A.isRenderTarget===!0?P(A):F(A))}p.clear(),u.clear()}function O(I){const A=n.get(I);if(A.__webglInit===void 0)return;const Q=I.source,ht=f.get(Q);if(ht){const lt=ht[A.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&G(I),Object.keys(ht).length===0&&f.delete(Q)}n.remove(I)}function G(I){const A=n.get(I);i.deleteTexture(A.__webglTexture);const Q=I.source,ht=f.get(Q);delete ht[A.__cacheKey],a.memory.textures--}function W(I){const A=n.get(I);A.__depthDisposeCallback&&A.__depthDisposeCallback();const Q=I.depthTexture;if(Q&&Q.renderTarget===I&&F(Q),I.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(A.__webglFramebuffer[lt]))for(let ft=0;ft<A.__webglFramebuffer[lt].length;ft++)i.deleteFramebuffer(A.__webglFramebuffer[lt][ft]);else i.deleteFramebuffer(A.__webglFramebuffer[lt]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[lt])}else{if(Array.isArray(A.__webglFramebuffer))for(let lt=0;lt<A.__webglFramebuffer.length;lt++)i.deleteFramebuffer(A.__webglFramebuffer[lt]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let lt=0;lt<A.__webglColorRenderbuffer.length;lt++)A.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[lt]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ht=I.textures;for(let lt=0,ft=ht.length;lt<ft;lt++){const vt=n.get(ht[lt]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(ht[lt])}n.remove(I)}let U=0;function L(){U=0}function N(){return U}function K(I){U=I}function it(){const I=U;return I>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,I}function Y(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.mipmapsAutoUpdate),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function V(I,A){const Q=n.get(I);if(I.isVideoTexture&&Ue(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Q.__version!==I.version){const ht=I.image;if(ht===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(Q,I,A);return}}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+A)}function $(I,A){const Q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){Wt(Q,I,A);return}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+A)}function tt(I,A){const Q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){Wt(Q,I,A);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+A)}function nt(I,A){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){he(Q,I,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+A)}const ct={[Us]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Va]:i.MIRRORED_REPEAT},It={[Ce]:i.NEAREST,[Ud]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[Wa]:i.LINEAR_MIPMAP_NEAREST,[Mn]:i.LINEAR_MIPMAP_LINEAR},xt={[Bd]:i.NEVER,[xc]:i.ALWAYS,[Gd]:i.LESS,[mc]:i.LEQUAL,[kd]:i.EQUAL,[gc]:i.GEQUAL,[Hd]:i.GREATER,[Vd]:i.NOTEQUAL};function Lt(I,A){if(A.type===Sn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Xe||A.magFilter===Wa||A.magFilter===gr||A.magFilter===Mn||A.minFilter===Xe||A.minFilter===Wa||A.minFilter===gr||A.minFilter===Mn)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ct[A.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ct[A.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ct[A.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,It[A.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,It[A.minFilter]),A.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,xt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ce||A.minFilter!==gr&&A.minFilter!==Mn||A.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Bt(I,A){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",C),w(A));const ht=A.source;let lt=f.get(ht);lt===void 0&&(lt={},f.set(ht,lt));const ft=Y(A);if(ft!==I.__cacheKey){lt[ft]===void 0&&(lt[ft]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),lt[ft].usedTimes++;const vt=lt[I.__cacheKey];vt!==void 0&&(lt[I.__cacheKey].usedTimes--,vt.usedTimes===0&&G(A)),I.__cacheKey=ft,I.__webglTexture=lt[ft].texture}return Q}function Nt(I,A,Q){return Math.floor(Math.floor(I/Q)/A)}function $t(I,A,Q,ht){const ft=I.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,Q,ht,A.data);else{ft.sort((z,ot)=>z.start-ot.start);let vt=0;for(let z=1;z<ft.length;z++){const ot=ft[vt],st=ft[z],gt=ot.start+ot.count,dt=Nt(st.start,A.width,4),pt=Nt(ot.start,A.width,4);st.start<=gt+1&&dt===pt&&Nt(st.start+st.count-1,A.width,4)===dt?ot.count=Math.max(ot.count,st.start+st.count-ot.start):(++vt,ft[vt]=st)}ft.length=vt+1;const rt=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let z=0,ot=ft.length;z<ot;z++){const st=ft[z],gt=Math.floor(st.start/4),dt=Math.ceil(st.count/4),pt=gt%A.width,Dt=Math.floor(gt/A.width),Yt=dt,ut=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(i.TEXTURE_2D,0,pt,Dt,Yt,ut,Q,ht,A.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,rt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function Wt(I,A,Q){let ht=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ht=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ht=i.TEXTURE_3D);const lt=Bt(I,A),ft=A.source;e.bindTexture(ht,I.__webglTexture,i.TEXTURE0+Q);const vt=n.get(ft);if(ft.version!==vt.__version||lt===!0){if(e.activeTexture(i.TEXTURE0+Q),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const ut=jt.getPrimaries(jt.workingColorSpace),Ut=A.colorSpace===mi?null:jt.getPrimaries(A.colorSpace),Xt=A.colorSpace===mi||ut===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let at=S(A.image,!1,s.maxTextureSize);at=Ft(A,at);const mt=r.convert(A.format,A.colorSpace),z=r.convert(A.type);let ot=b(A.internalFormat,mt,z,A.normalized,A.colorSpace,A.isVideoTexture);Lt(ht,A);let st;const gt=A.mipmaps,dt=A.isVideoTexture!==!0,pt=vt.__version===void 0||lt===!0,Dt=ft.dataReady,Yt=y(A,at);if(A.isDepthTexture)ot=v(A.format===fi,A.type),pt&&(dt?e.texStorage2D(i.TEXTURE_2D,1,ot,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,ot,at.width,at.height,0,mt,z,null));else if(A.isDataTexture)if(gt.length>0){dt&&pt&&e.texStorage2D(i.TEXTURE_2D,Yt,ot,gt[0].width,gt[0].height);for(let ut=0,Ut=gt.length;ut<Ut;ut++)st=gt[ut],dt?Dt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,st.width,st.height,mt,z,st.data):e.texImage2D(i.TEXTURE_2D,ut,ot,st.width,st.height,0,mt,z,st.data);A.generateMipmaps=!1}else dt?(pt&&e.texStorage2D(i.TEXTURE_2D,Yt,ot,at.width,at.height),Dt&&$t(A,at,mt,z)):e.texImage2D(i.TEXTURE_2D,0,ot,at.width,at.height,0,mt,z,at.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){dt&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,ot,gt[0].width,gt[0].height,at.depth);for(let ut=0,Ut=gt.length;ut<Ut;ut++)if(st=gt[ut],A.format!==zn)if(mt!==null)if(dt){if(Dt)if(A.layerUpdates.size>0){const Xt=wh(st.width,st.height,A.format,A.type);for(const bt of A.layerUpdates){const le=st.data.subarray(bt*Xt/st.data.BYTES_PER_ELEMENT,(bt+1)*Xt/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,bt,st.width,st.height,1,mt,le)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,st.width,st.height,at.depth,mt,st.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,ot,st.width,st.height,at.depth,0,st.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?Dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,st.width,st.height,at.depth,mt,z,st.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,ot,st.width,st.height,at.depth,0,mt,z,st.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{dt&&pt&&e.texStorage2D(i.TEXTURE_2D,Yt,ot,gt[0].width,gt[0].height);for(let ut=0,Ut=gt.length;ut<Ut;ut++)st=gt[ut],A.format!==zn?mt!==null?dt?Dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,st.width,st.height,mt,st.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,ot,st.width,st.height,0,st.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?Dt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,st.width,st.height,mt,z,st.data):e.texImage2D(i.TEXTURE_2D,ut,ot,st.width,st.height,0,mt,z,st.data)}else if(A.isDataArrayTexture)if(dt){if(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,ot,at.width,at.height,at.depth),Dt)if(A.layerUpdates.size>0){const ut=wh(at.width,at.height,A.format,A.type);for(const Ut of A.layerUpdates){const Xt=at.data.subarray(Ut*ut/at.data.BYTES_PER_ELEMENT,(Ut+1)*ut/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ut,at.width,at.height,1,mt,z,Xt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,mt,z,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ot,at.width,at.height,at.depth,0,mt,z,at.data);else if(A.isData3DTexture)dt?(pt&&e.texStorage3D(i.TEXTURE_3D,Yt,ot,at.width,at.height,at.depth),Dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,mt,z,at.data)):e.texImage3D(i.TEXTURE_3D,0,ot,at.width,at.height,at.depth,0,mt,z,at.data);else if(A.isFramebufferTexture){if(pt)if(dt)e.texStorage2D(i.TEXTURE_2D,Yt,ot,at.width,at.height);else{let ut=at.width,Ut=at.height;for(let Xt=0;Xt<Yt;Xt++)e.texImage2D(i.TEXTURE_2D,Xt,ot,ut,Ut,0,mt,z,null),ut>>=1,Ut>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const ut=i.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),at.parentNode!==ut){ut.appendChild(at),u.add(A),ut.onpaint=Ut=>{const Xt=Ut.changedElements;for(const bt of u)Xt.includes(bt.image)&&(bt.needsUpdate=!0)},ut.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{const Xt=i.RGBA,bt=i.RGBA,le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Xt,bt,le,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(gt.length>0){if(dt&&pt){const ut=kt(gt[0]);e.texStorage2D(i.TEXTURE_2D,Yt,ot,ut.width,ut.height)}for(let ut=0,Ut=gt.length;ut<Ut;ut++)st=gt[ut],dt?Dt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,mt,z,st):e.texImage2D(i.TEXTURE_2D,ut,ot,mt,z,st);A.generateMipmaps=!1}else if(dt){if(pt){const ut=kt(at);e.texStorage2D(i.TEXTURE_2D,Yt,ot,ut.width,ut.height)}Dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,z,at)}else e.texImage2D(i.TEXTURE_2D,0,ot,mt,z,at);x(A)&&A.mipmapsAutoUpdate===!0&&M(ht),vt.__version=ft.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function he(I,A,Q){if(A.image.length!==6)return;const ht=Bt(I,A),lt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Q);const ft=n.get(lt);if(lt.version!==ft.__version||ht===!0){e.activeTexture(i.TEXTURE0+Q);const vt=jt.getPrimaries(jt.workingColorSpace),rt=A.colorSpace===mi?null:jt.getPrimaries(A.colorSpace),at=A.colorSpace===mi||vt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const mt=A.isCompressedTexture||A.image[0].isCompressedTexture,z=A.image[0]&&A.image[0].isDataTexture,ot=[];for(let bt=0;bt<6;bt++)!mt&&!z?ot[bt]=S(A.image[bt],!0,s.maxCubemapSize):ot[bt]=z?A.image[bt].image:A.image[bt],ot[bt]=Ft(A,ot[bt]);const st=ot[0],gt=r.convert(A.format,A.colorSpace),dt=r.convert(A.type);let pt=b(A.internalFormat,gt,dt,A.normalized,A.colorSpace);const Dt=A.isVideoTexture!==!0,Yt=ft.__version===void 0||ht===!0,ut=lt.dataReady;let Ut=y(A,st);Lt(i.TEXTURE_CUBE_MAP,A);let Xt;if(A.isDepthTexture){if(pt=v(A.format===fi,A.type),Yt)if(Dt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,pt,st.width,st.height);else for(let bt=0;bt<6;bt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,pt,st.width,st.height,0,gt,dt,null)}else if(mt){Dt&&Yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,pt,st.width,st.height);for(let bt=0;bt<6;bt++){Xt=ot[bt].mipmaps;for(let le=0;le<Xt.length;le++){const Be=Xt[le];A.format!==zn?gt!==null?Dt?ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,le,0,0,Be.width,Be.height,gt,Be.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,le,pt,Be.width,Be.height,0,Be.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,le,0,0,Be.width,Be.height,gt,dt,Be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,le,pt,Be.width,Be.height,0,gt,dt,Be.data)}}}else{if(Xt=A.mipmaps,Dt&&Yt){Xt.length>0&&Ut++;const bt=kt(ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,pt,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(z){Dt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,ot[bt].width,ot[bt].height,gt,dt,ot[bt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,pt,ot[bt].width,ot[bt].height,0,gt,dt,ot[bt].data);for(let le=0;le<Xt.length;le++){const Ci=Xt[le].image[bt].image;Dt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,le+1,0,0,Ci.width,Ci.height,gt,dt,Ci.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,le+1,pt,Ci.width,Ci.height,0,gt,dt,Ci.data)}}else{Dt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,gt,dt,ot[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,pt,gt,dt,ot[bt]);for(let le=0;le<Xt.length;le++){const Be=Xt[le];Dt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,le+1,0,0,gt,dt,Be.image[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,le+1,pt,gt,dt,Be.image[bt])}}}x(A)&&A.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ft.__version=lt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function te(I,A,Q,ht,lt,ft){const vt=r.convert(Q.format,Q.colorSpace),rt=r.convert(Q.type),at=b(Q.internalFormat,vt,rt,Q.normalized,Q.colorSpace),mt=n.get(A),z=n.get(Q);if(z.__renderTarget=A,!mt.__hasExternalTextures){const ot=Math.max(1,A.width>>ft),st=Math.max(1,A.height>>ft);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,ft,at,ot,st,A.depth,0,vt,rt,null):e.texImage2D(lt,ft,at,ot,st,0,vt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),St(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,lt,z.__webglTexture,0,xe(A)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ht,lt,z.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function je(I,A,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,I),A.depthBuffer){const ht=A.depthTexture,lt=ht&&ht.isDepthTexture?ht.type:null,ft=v(A.stencilBuffer,lt),vt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;St(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(A),ft,A.width,A.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(A),ft,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ft,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,I)}else{const ht=A.textures;for(let lt=0;lt<ht.length;lt++){const ft=ht[lt],vt=r.convert(ft.format,ft.colorSpace),rt=r.convert(ft.type),at=b(ft.internalFormat,vt,rt,ft.normalized,ft.colorSpace);St(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(A),at,A.width,A.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(A),at,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,at,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(I,A,Q){const ht=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const lt=n.get(A.depthTexture);lt.__renderTarget=A;const ft=ht?A.depthTexture.image[0]:A.depthTexture.image;(!lt.__webglTexture||ft.width!==A.width||ft.height!==A.height)&&(ft.width=A.width,ft.height=A.height,A.depthTexture.needsUpdate=!0),ht?nt(A.depthTexture,0):V(A.depthTexture,0);const vt=lt.__webglTexture,rt=xe(A),at=ht?i.TEXTURE_CUBE_MAP_POSITIVE_X+Q:i.TEXTURE_2D,mt=A.depthTexture.format===fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===di)St(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,at,vt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,mt,at,vt,0);else if(A.depthTexture.format===fi)St(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,at,vt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,mt,at,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(I){const A=n.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const ht=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ht){const lt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ht.removeEventListener("dispose",lt)};ht.addEventListener("dispose",lt),A.__depthDisposeCallback=lt}A.__boundDepthTexture=ht}if(I.depthTexture&&!A.__autoAllocateDepthBuffer)if(Q)for(let ht=0;ht<6;ht++)pe(A.__webglFramebuffer[ht],I,ht);else I.texture.mipmaps.length>0?pe(A.__webglFramebuffer[0],I,0):pe(A.__webglFramebuffer,I,0);else if(Q){A.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ht]),A.__webglDepthbuffer[ht]===void 0)A.__webglDepthbuffer[ht]=i.createRenderbuffer(),je(A.__webglDepthbuffer[ht],I,!1);else{const lt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=A.__webglDepthbuffer[ht];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,ft)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),je(A.__webglDepthbuffer,I,!1);else{const lt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,ft)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(I,A,Q){const ht=n.get(I);A!==void 0&&te(ht.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&ze(I)}function me(I){const A=I.texture,Q=n.get(I),ht=n.get(A);I.addEventListener("dispose",D),w(I);const lt=I.textures,ft=I.isWebGLCubeRenderTarget===!0,vt=lt.length>1;if(vt||(ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture()),ht.__version=A.version,a.memory.textures++),ft){Q.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(A.mipmaps.length>0){Q.__webglFramebuffer[rt]=[];for(let at=0;at<A.mipmaps.length;at++)Q.__webglFramebuffer[rt][at]=i.createFramebuffer()}else Q.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let rt=0;rt<A.mipmaps.length;rt++)Q.__webglFramebuffer[rt]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(vt)for(let rt=0,at=lt.length;rt<at;rt++){const mt=n.get(lt[rt]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&St(I)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let rt=0;rt<lt.length;rt++){const at=lt[rt];Q.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[rt]);const mt=r.convert(at.format,at.colorSpace),z=r.convert(at.type),ot=b(at.internalFormat,mt,z,at.normalized,at.colorSpace,I.isXRRenderTarget===!0),st=xe(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,st,ot,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,Q.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),je(Q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,A);for(let rt=0;rt<6;rt++)if(A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)te(Q.__webglFramebuffer[rt][at],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,at);else te(Q.__webglFramebuffer[rt],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);x(A)?M(i.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}else if(vt){for(let rt=0,at=lt.length;rt<at;rt++){const mt=lt[rt],z=n.get(mt);let ot=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ot=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,z.__webglTexture),Lt(ot,mt),te(Q.__webglFramebuffer,I,mt,i.COLOR_ATTACHMENT0+rt,ot,0),x(mt)&&M(ot)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(rt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,ht.__webglTexture),Lt(rt,A),A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)te(Q.__webglFramebuffer[at],I,A,i.COLOR_ATTACHMENT0,rt,at);else te(Q.__webglFramebuffer,I,A,i.COLOR_ATTACHMENT0,rt,0);x(A)?M(rt):A.mipmaps.length>0&&i.texParameteri(rt,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&ze(I)}function q(I){const A=I.textures;for(let Q=0,ht=A.length;Q<ht;Q++){const lt=A[Q];if(x(lt)&&lt.mipmapsAutoUpdate===!0){const ft=E(I),vt=n.get(lt).__webglTexture;e.bindTexture(ft,vt),M(ft),e.unbindTexture()}}}const _n=[];function ge(I){if(I.samples>0){if(St(I)===!1){const A=I.textures,Q=I.width,ht=I.height;let lt=i.COLOR_BUFFER_BIT;const ft=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(I),rt=A.length>1;if(rt)for(let mt=0;mt<A.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let mt=0;mt<A.length;mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[mt]);const z=n.get(A[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,z,0)}i.blitFramebuffer(0,0,Q,ht,0,0,Q,ht,lt,i.NEAREST),l===!0&&(_n.length=0,_n.push(i.COLOR_ATTACHMENT0+mt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&_n.push(ft),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_n))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let mt=0;mt<A.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[mt]);const z=n.get(A[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,z,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){const A=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function xe(I){return Math.min(s.maxSamples,I.samples)}function St(I){const A=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ue(I){const A=a.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function Ft(I,A){const Q=I.colorSpace,ht=I.format,lt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==Er&&Q!==mi&&(jt.getTransfer(Q)===oe?(ht!==zn||lt!==rn)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",Q)),A}function kt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=it,this.resetTextureUnits=L,this.getTextureUnits=N,this.setTextureUnits=K,this.setTexture2D=V,this.setTexture2DArray=$,this.setTexture3D=tt,this.setTextureCube=nt,this.rebindTextures=Me,this.setupRenderTarget=me,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=te,this.useMultisampledRTT=St,this.dispose=k}function Ex(i,t){function e(n,s=mi){let r;const a=jt.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===Ya)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cc)return i.BYTE;if(n===hc)return i.SHORT;if(n===Fs)return i.UNSIGNED_SHORT;if(n===Xa)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===yn)return i.HALF_FLOAT;if(n===fc)return i.ALPHA;if(n===pc)return i.RGB;if(n===zn)return i.RGBA;if(n===di)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===xr)return i.RED;if(n===Za)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===Ka)return i.RG_INTEGER;if(n===$a)return i.RGBA_INTEGER;if(n===_r||n===vr||n===Mr||n===Sr)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ja||n===Qa||n===ja||n===to)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eo||n===no||n===io||n===so||n===ro||n===yr||n===ao)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===eo||n===no)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===io)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===so)return r.COMPRESSED_R11_EAC;if(n===ro)return r.COMPRESSED_SIGNED_R11_EAC;if(n===yr)return r.COMPRESSED_RG11_EAC;if(n===ao)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===xo||n===_o||n===vo||n===Mo||n===So)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===co)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ho)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===go)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_o)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mo)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===So)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yo||n===bo||n===Eo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===yo)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wo||n===To||n===br||n===Ao)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===br)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tx=`
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

}`;class Ax{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new rh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new nn({vertexShader:wx,fragmentShader:Tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rx extends gi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",m=new Ax,g={},S=e.getContextAttributes();let x=null,M=null;const E=[],b=[],v=new Ct;let y=null,w=null;const T=new Ln;T.viewport=new de;const C=new Ln;C.viewport=new de;const D=[T,C],F=new _p;let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let V=E[Y];return V===void 0&&(V=new Oo,E[Y]=V),V.getTargetRaySpace()},this.getControllerGrip=function(Y){let V=E[Y];return V===void 0&&(V=new Oo,E[Y]=V),V.getGripSpace()},this.getHand=function(Y){let V=E[Y];return V===void 0&&(V=new Oo,E[Y]=V),V.getHandSpace()};function O(Y){const V=b.indexOf(Y.inputSource);if(V===-1)return;const $=E[V];$!==void 0&&($.update(Y.inputSource,Y.frame,c||a),$.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",W);for(let Y=0;Y<E.length;Y++){const V=b[Y];V!==null&&(b[Y]=null,E[Y].disconnect(V))}P=null,k=null,m.reset();for(const Y in g)delete g[Y];if(t.setRenderTarget(x),f=null,d=null,u=null,s=null,M=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(v.width,v.height,!1),w!==null){const Y=w.camera;Y.fov=w.fov,Y.zoom=w.zoom,Y.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",W),S.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(v),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,tt=null,nt=null;S.depth&&(nt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=S.stencil?fi:di,tt=S.stencil?Ki:On);const ct={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Bn(d.textureWidth,d.textureHeight,{format:zn,type:rn,depthTexture:new hs(d.textureWidth,d.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const $={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Bn(f.framebufferWidth,f.framebufferHeight,{format:zn,type:rn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(Y){for(let V=0;V<Y.removed.length;V++){const $=Y.removed[V],tt=b.indexOf($);tt>=0&&(b[tt]=null,E[tt].disconnect($))}for(let V=0;V<Y.added.length;V++){const $=Y.added[V];let tt=b.indexOf($);if(tt===-1){for(let ct=0;ct<E.length;ct++)if(ct>=b.length){b.push($),tt=ct;break}else if(b[ct]===null){b[ct]=$,tt=ct;break}if(tt===-1)break}const nt=E[tt];nt&&nt.connect($)}}function U(Y,V){V===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(V.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let V=Y.near,$=Y.far;m.texture!==null&&(m.depthNear>0&&(V=m.depthNear),m.depthFar>0&&($=m.depthFar)),F.near=C.near=T.near=V,F.far=C.far=T.far=$,(P!==F.near||k!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),P=F.near,k=F.far),F.layers.mask=Y.layers.mask|6,T.layers.mask=F.layers.mask&-5,C.layers.mask=F.layers.mask&-3;const tt=Y.parent,nt=F.cameras;U(F,tt);for(let ct=0;ct<nt.length;ct++)U(nt[ct],tt);F.projectionMatrix.copy(T.projectionMatrix),F.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&Y.isPerspectiveCamera&&(w={camera:Y,fov:Y.fov,zoom:Y.zoom}),L(Y,F,tt)};function L(Y,V,$){$===null?Y.matrix.copy(V.matrixWorld):(Y.matrix.copy($.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(V.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(V.projectionMatrix),Y.projectionMatrixInverse.copy(V.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ks*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return g[Y]};let N=null;function K(Y,V){if(h=V.getViewerPose(c||a),p=V,h!==null){const $=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let tt=!1;$.length!==F.cameras.length&&(F.cameras.length=0,tt=!0);for(let xt=0;xt<$.length;xt++){const Lt=$[xt];let Bt=null;if(f!==null)Bt=f.getViewport(Lt);else{const $t=u.getViewSubImage(d,Lt);Bt=$t.viewport,xt===0&&(t.setRenderTargetTextures(M,$t.colorTexture,$t.depthStencilTexture),t.setRenderTarget(M))}let Nt=D[xt];Nt===void 0&&(Nt=new Ln,Nt.layers.enable(xt),Nt.viewport=new de,D[xt]=Nt),Nt.matrix.fromArray(Lt.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Lt.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),xt===0&&(F.matrix.copy(Nt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),tt===!0&&F.cameras.push(Nt)}const nt=s.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const xt=u.getDepthInformation($[0]);xt&&xt.isValid&&xt.texture&&m.init(xt,s.renderState)}if(nt&&nt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let xt=0;xt<$.length;xt++){const Lt=$[xt].camera;if(Lt){let Bt=g[Lt];Bt||(Bt=new rh,g[Lt]=Bt);const Nt=u.getCameraImage(Lt);Bt.sourceTexture=Nt}}}}for(let $=0;$<E.length;$++){const tt=b[$],nt=E[$];tt!==null&&nt!==void 0&&nt.update(tt,V,c||a)}N&&N(Y,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),p=null}const it=new Th;it.setAnimationLoop(K),this.setAnimationLoop=function(Y){N=Y},this.dispose=function(){}}}const Cx=new ne,iu=new zt;iu.set(-1,0,0,0,1,0,0,0,1);function Px(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,ph(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,S,x,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,S,x):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===$e&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===$e&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const S=t.get(g),x=S.envMap,M=S.envMapRotation;x&&(m.envMap.value=x,m.envMapRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(M)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(iu),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,x){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=x*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,S){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$e&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const S=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lx(i,t,e,n){let s={},r={};function a(S,x){const M=x.program;n.uniformBlockBinding(S,M,s[S.id])}function o(S,x){let M=s[S.id];M===void 0&&(p(S),M=l(S),s[S.id]=M,S.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(S,E);const b=t.render.frame;r[S.id]!==b&&(c(S),r[S.id]=b)}function l(S){const x=i.createBuffer(),M=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,M,E),i.bindBuffer(i.UNIFORM_BUFFER,null),x}function c(S){const x=s[S.id],M=S.uniforms,E=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let b=0,v=M.length;b<v;b++){const y=M[b];if(Array.isArray(y))for(let w=0,T=y.length;w<T;w++)h(y[w],b,w,E);else h(y,b,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,x,M,E){if(d(S,x,M,E)===!0){const b=S.__offset,v=S.value;if(Array.isArray(v)){let y=0;for(let w=0;w<v.length;w++){const T=v[w],C=_(T,!0);u(T,S.__data,y),y+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else u(v,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,S.__data)}}function u(S,x,M){typeof S=="number"||typeof S=="boolean"?x[M]=S:S.isMatrix3?(x[M]=S.elements[0],x[M+1]=S.elements[1],x[M+2]=S.elements[2],x[M+3]=0,x[M+4]=S.elements[3],x[M+5]=S.elements[4],x[M+6]=S.elements[5],x[M+7]=0,x[M+8]=S.elements[6],x[M+9]=S.elements[7],x[M+10]=S.elements[8],x[M+11]=0):ArrayBuffer.isView(S)?x.set(S.subarray(0,x.length-M),M):S.toArray(x,M)}function d(S,x,M,E){const b=S.value,v=x+"_"+M;if(Array.isArray(b)){E[v]===void 0&&(E[v]=[]);const y=E[v];let w=!1;for(let T=0;T<b.length;T++)f(b[T],y,T)===!0&&(w=!0);return w}return f(b,E,v)}function f(S,x,M){if(x[M]===void 0)return typeof S=="number"||typeof S=="boolean"?x[M]=S:ArrayBuffer.isView(S)?x[M]=S.slice():x[M]=S.clone(),!0;{const E=x[M];if(typeof S=="number"||typeof S=="boolean"){if(E!==S)return x[M]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(E.equals(S)===!1)return E.copy(S),!0}}return!1}function p(S){const x=S.uniforms;let M=0;const E=16;for(let v=0,y=x.length;v<y;v++){const w=Array.isArray(x[v])?x[v]:[x[v]];for(let T=0,C=w.length;T<C;T++){const D=w[T],F=Array.isArray(D.value)?D.value:[D.value],P=Array.isArray(x[v])||Array.isArray(D.value);let k=M;for(let G=0,W=F.length;G<W;G++){const U=F[G],L=_(U,P),N=M%E,K=N%L.boundary,it=N+K;M+=K,it!==0&&E-it<L.storage&&(M+=E-it),G===0&&(k=M),M+=L.storage}const O=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new O((M-k)/Float32Array.BYTES_PER_ELEMENT),D.__offset=k}}const b=M%E;return b>0&&(M+=E-b),S.__size=M,S.__cache={},this}function _(S,x){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=16,M.storage=48):S.isMatrix4?(M.boundary=16,M.storage=64):S.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",S),x===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(S){const x=S.target;x.removeEventListener("dispose",m),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function g(){for(const S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:g}}const Dx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wn=null;function Ix(){return Wn===null&&(Wn=new qs(Dx,16,16,pi,yn),Wn.name="DFG_LUT",Wn.minFilter=Xe,Wn.magFilter=Xe,Wn.wrapS=Fn,Wn.wrapT=Fn,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}class Nx{constructor(t={}){const{canvas:e=Yd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=rn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=f,m=new Set([$a,Ka,Za]),g=new Set([rn,On,Fs,Ki,Ya,qa]),S=new Uint32Array(4),x=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let E=null,b=null;const v=[],y=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let C=!1,D=null,F=null,P=null,k=null;this._outputColorSpace=Pe;let O=0,G=0,W=null,U=-1,L=null;const N=new de,K=new de;let it=null;const Y=new wt(0);let V=0,$=e.width,tt=e.height,nt=1,ct=null,It=null;const xt=new de(0,0,$,tt),Lt=new de(0,0,$,tt);let Bt=!1;const Nt=new $s,$t=new Qo;let Wt=!1,he=!1;const te=new ne,je=new X,pe=new de,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function me(){return W===null?nt:1}let q=n;function _n(R,H){return e.getContext(R,H)}let ge,xe,St,Ue,Ft,kt,I,A,Q,ht,lt,ft,vt,rt,at,mt,z,ot,st,gt,dt,pt,Dt;try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ci}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),q===null){const H="webgl2";if(q=_n(H,R),q===null)throw _n(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(R){throw e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),se("WebGLRenderer: "+R.message),R}function Yt(){ge=new Om(q),ge.init(),dt=new Ex(q,ge),xe=new Tm(q,ge,t,dt),St=new yx(q,ge),xe.reversedDepthBuffer&&d&&St.buffers.depth.setReversed(!0),F=q.createFramebuffer(),P=q.createFramebuffer(),k=q.createFramebuffer(),Ue=new Gm(q),Ft=new lx,kt=new bx(q,ge,St,Ft,xe,dt,Ue),I=new Fm(T),A=new yp(q),pt=new Em(q,A),Q=new zm(q,A,Ue,pt),ht=new Hm(q,Q,A,pt,Ue),ot=new km(q,xe,kt),at=new Am(Ft),lt=new ox(T,I,ge,xe,pt,at),ft=new Px(T,Ft),vt=new hx,rt=new gx(ge),z=new bm(T,I,St,ht,p,l),mt=new Sx(T,ht,xe),Dt=new Lx(q,Ue,xe,St),st=new wm(q,ge,Ue),gt=new Bm(q,ge,Ue),Ue.programs=lt.programs,T.capabilities=xe,T.extensions=ge,T.properties=Ft,T.renderLists=vt,T.shadowMap=mt,T.state=St,T.info=Ue}_!==rn&&(w=new Wm(_,e.width,e.height,o,s,r));const ut=new Rx(T,q);this.xr=ut,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const R=ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(R){R!==void 0&&(nt=R,this.setSize($,tt,!1))},this.getSize=function(R){return R.set($,tt)},this.setSize=function(R,H,et=!0){if(ut.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}$=R,tt=H,e.width=Math.floor(R*nt),e.height=Math.floor(H*nt),et===!0&&(e.style.width=R+"px",e.style.height=H+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set($*nt,tt*nt).floor()},this.setDrawingBufferSize=function(R,H,et){$=R,tt=H,nt=et,e.width=Math.floor(R*et),e.height=Math.floor(H*et),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(_===rn){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(xt)},this.setViewport=function(R,H,et,J){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,H,et,J),St.viewport(N.copy(xt).multiplyScalar(me()).round())},this.getScissor=function(R){return R.copy(Lt)},this.setScissor=function(R,H,et,J){R.isVector4?Lt.set(R.x,R.y,R.z,R.w):Lt.set(R,H,et,J),St.scissor(K.copy(Lt).multiplyScalar(me()).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(R){St.setScissorTest(Bt=R)},this.setOpaqueSort=function(R){ct=R},this.setTransparentSort=function(R){It=R},this.getClearColor=function(R){return R.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,et=!0){let J=0;if(R){let j=!1;if(W!==null){const Mt=W.texture.format;j=m.has(Mt)}if(j){const Mt=W.texture.type,Tt=g.has(Mt),_t=z.getClearColor(),Et=z.getClearAlpha(),Pt=_t.r,Ht=_t.g,Jt=_t.b;Tt?(S[0]=Pt,S[1]=Ht,S[2]=Jt,S[3]=Et,q.clearBufferuiv(q.COLOR,0,S)):(x[0]=Pt,x[1]=Ht,x[2]=Jt,x[3]=Et,q.clearBufferiv(q.COLOR,0,x))}else J|=q.COLOR_BUFFER_BIT}H&&(J|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(J|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&q.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),D=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),z.dispose(),vt.dispose(),rt.dispose(),kt.dispose(),Ft.dispose(),I.dispose(),ht.dispose(),Q.dispose(),pt.dispose(),Dt.dispose(),lt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",nd),ut.removeEventListener("sessionend",id),Vi.stop()};function Ut(R){R.preventDefault(),Mc("WebGLRenderer: Context Lost."),C=!0}function Xt(){Mc("WebGLRenderer: Context Restored."),C=!1;const R=Ue.autoReset,H=mt.enabled,et=mt.autoUpdate,J=mt.needsUpdate,j=mt.type;Yt(),Ue.autoReset=R,mt.enabled=H,mt.autoUpdate=et,mt.needsUpdate=J,mt.type=j}function bt(R){se("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function le(R){const H=R.target;H.removeEventListener("dispose",le),Be(H)}function Be(R){Ci(R),Ft.remove(R)}function Ci(R){const H=Ft.get(R).programs;H!==void 0&&(H.forEach(function(et){lt.releaseProgram(et)}),R.isShaderMaterial&&lt.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,et,J,j,Mt){H===null&&(H=ze);const Tt=j.isMesh&&j.matrixWorld.determinantAffine()<0,_t=m1(R,H,et,J,j);St.setMaterial(J,Tt);let Et=et.index,Pt=1;if(J.wireframe===!0){if(Et=Q.getWireframeAttribute(et),Et===void 0)return;Pt=2}const Ht=et.drawRange,Jt=et.attributes.position;let At=Ht.start*Pt,Qt=(Ht.start+Ht.count)*Pt;Mt!==null&&(At=Math.max(At,Mt.start*Pt),Qt=Math.min(Qt,(Mt.start+Mt.count)*Pt)),Et!==null?(At=Math.max(At,0),Qt=Math.min(Qt,Et.count)):Jt!=null&&(At=Math.max(At,0),Qt=Math.min(Qt,Jt.count));const Ae=Qt-At;if(Ae<0||Ae===1/0)return;pt.setup(j,J,_t,et,Et);let ue,ce=st;if(Et!==null&&(ue=A.get(Et),ce=gt,ce.setIndex(ue)),j.isMesh)J.wireframe===!0?(St.setLineWidth(J.wireframeLinewidth*me()),ce.setMode(q.LINES)):ce.setMode(q.TRIANGLES);else if(j.isLine){let Ze=J.linewidth;Ze===void 0&&(Ze=1),St.setLineWidth(Ze*me()),j.isLineSegments?ce.setMode(q.LINES):j.isLineLoop?ce.setMode(q.LINE_LOOP):ce.setMode(q.LINE_STRIP)}else j.isPoints?ce.setMode(q.POINTS):j.isSprite&&ce.setMode(q.TRIANGLES);if(j.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))ce.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ze=j._multiDrawStarts,Rt=j._multiDrawCounts,tn=j._multiDrawCount,ae=Et?A.get(Et).bytesPerElement:1,Wi=Ft.get(J).currentProgram.getUniforms();for(let Ke=0;Ke<tn;Ke++)Wi.setValue(q,"_gl_DrawID",Ke),ce.render(Ze[Ke]/ae,Rt[Ke])}else if(j.isInstancedMesh)ce.renderInstances(At,Ae,j.count);else if(et.isInstancedBufferGeometry){const Ze=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Rt=Math.min(et.instanceCount,Ze);ce.renderInstances(At,Ae,Rt)}else ce.render(At,Ae)};function ed(R,H,et,J){D!==null&&R.isNodeMaterial&&D.setObject(J,R),Wt===!0&&at.setState(R,et,!1),R.transparent===!0&&R.side===Re&&R.forceSinglePass===!1?(R.side=$e,R.needsUpdate=!0,pr(R,H,J),R.side=ui,R.needsUpdate=!0,pr(R,H,J),R.side=Re):pr(R,H,J)}this.compile=function(R,H,et=null){et===null&&(et=R),D!==null&&D.renderStart(R,H,et),b=rt.get(et),b.init(H),y.push(b),et.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),R!==et&&R.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),he=this.localClippingEnabled,Wt=at.init(this.clippingPlanes,he),Wt===!0&&at.setGlobalState(this.clippingPlanes,H),D!==null&&mt.render(b.state.shadowsArray,et,H);const J=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Mt=j.material;if(Mt)if(Array.isArray(Mt))for(let Tt=0;Tt<Mt.length;Tt++){const _t=Mt[Tt];ed(_t,et,H,j),J.add(_t)}else ed(Mt,et,H,j),J.add(Mt)}),b=y.pop(),D!==null&&D.renderEnd(),J},this.compileAsync=function(R,H,et=null){const J=this.compile(R,H,et);return new Promise(j=>{function Mt(){if(J.forEach(function(Tt){const Et=Ft.get(Tt).currentProgram;(Et===void 0||Et.isReady())&&J.delete(Tt)}),J.size===0){j(R);return}setTimeout(Mt,10)}ge.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Kl=null;function f1(R){Kl&&Kl(R)}function nd(){Vi.stop()}function id(){Vi.start()}const Vi=new Th;Vi.setAnimationLoop(f1),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(R){Kl=R,ut.setAnimationLoop(R),R===null?Vi.stop():Vi.start()},ut.addEventListener("sessionstart",nd),ut.addEventListener("sessionend",id),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(R,H);const et=ut.enabled===!0&&ut.isPresenting===!0,J=w!==null&&(W===null||et)&&w.begin(T,W);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(H),H=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,H,W),b=rt.get(R,y.length),b.init(H),b.state.textureUnits=kt.getTextureUnits(),y.push(b),te.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?$t.setFromArrayCamera(H):Nt.setFromProjectionMatrix(te,bn,H.reversedDepth),he=this.localClippingEnabled,Wt=at.init(this.clippingPlanes,he),E=vt.get(R,v.length),E.init(),v.push(E),this.info.render.frame++,ut.enabled===!0&&ut.isPresenting===!0){const Tt=T.xr.getDepthSensingMesh();Tt!==null&&$l(Tt,H,-1/0,T.sortObjects)}$l(R,H,0,T.sortObjects),E.finish(),D!==null&&D.updateLights(b.state.lightsArray),T.sortObjects===!0&&E.sort(ct,It),Me=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Me&&z.addToRenderList(E,R),this.info.autoReset===!0&&this.info.reset(),Wt===!0&&at.beginShadows();const j=b.state.shadowsArray;if(mt.render(j,R,H),Wt===!0&&at.endShadows(),(J&&w.hasRenderPass())===!1){const Tt=E.opaque,_t=E.transmissive;if(b.setupLights(),H.isArrayCamera){const Et=H.cameras;if(_t.length>0)for(let Pt=0,Ht=Et.length;Pt<Ht;Pt++){const Jt=Et[Pt];rd(Tt,_t,R,Jt)}Me&&z.render(R);for(let Pt=0,Ht=Et.length;Pt<Ht;Pt++){const Jt=Et[Pt];sd(E,R,Jt,Jt.viewport)}}else _t.length>0&&rd(Tt,_t,R,H),Me&&z.render(R),sd(E,R,H)}W!==null&&G===0&&(kt.updateMultisampleRenderTarget(W),kt.updateRenderTargetMipmap(W)),J&&w.end(T),R.isScene===!0&&R.onAfterRender(T,R,H),pt.resetDefaultState(),U=-1,L=null,y.pop(),y.length>0?(b=y[y.length-1],kt.setTextureUnits(b.state.textureUnits),Wt===!0&&at.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,v.pop(),v.length>0?E=v[v.length-1]:E=null,D!==null&&D.renderEnd()};function $l(R,H,et,J){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)b.pushLight(R),R.castShadow&&b.pushShadow(R);else if(R.isSprite){const Tt=H.isArrayCamera?$t:Nt;if(!R.frustumCulled||R.intersectsFrustum(Tt)){J&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(te);const _t=ht.update(R),Et=R.material;Et.visible&&E.push(R,_t,Et,et,pe.z,null,H)}}else if(R.isMesh||R.isLine||R.isPoints){const Tt=H.isArrayCamera?$t:Nt;if(!R.frustumCulled||R.intersectsFrustum(Tt)){const _t=ht.update(R),Et=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pe.copy(R.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),pe.copy(_t.boundingSphere.center)),pe.applyMatrix4(R.matrixWorld).applyMatrix4(te)),Array.isArray(Et)){const Pt=_t.groups;for(let Ht=0,Jt=Pt.length;Ht<Jt;Ht++){const At=Pt[Ht],Qt=Et[At.materialIndex];Qt&&Qt.visible&&E.push(R,_t,Qt,et,pe.z,At,H)}}else Et.visible&&E.push(R,_t,Et,et,pe.z,null,H)}}}const Mt=R.children;for(let Tt=0,_t=Mt.length;Tt<_t;Tt++)$l(Mt[Tt],H,et,J)}function sd(R,H,et,J){const{opaque:j,transmissive:Mt,transparent:Tt}=R;b.setupLightsView(et),Wt===!0&&at.setGlobalState(T.clippingPlanes,et),J&&St.viewport(N.copy(J)),j.length>0&&Pa(j,H,et),Mt.length>0&&Pa(Mt,H,et),Tt.length>0&&Pa(Tt,H,et),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function rd(R,H,et,J){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[J.id]===void 0){const At=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[J.id]=new Bn(1,1,{generateMipmaps:!0,type:At?yn:rn,minFilter:Mn,samples:Math.max(4,xe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const Mt=b.state.transmissionRenderTarget[J.id],Tt=J.viewport||N;Mt.setSize(Tt.z*T.transmissionResolutionScale,Tt.w*T.transmissionResolutionScale);const _t=T.getRenderTarget(),Et=T.getActiveCubeFace(),Pt=T.getActiveMipmapLevel();T.setRenderTarget(Mt),T.getClearColor(Y),V=T.getClearAlpha(),V<1&&T.setClearColor(16777215,.5),T.clear(),Me&&z.render(et);const Ht=T.toneMapping;T.toneMapping=Zn;const Jt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),b.setupLightsView(J),Wt===!0&&at.setGlobalState(T.clippingPlanes,J),Pa(R,et,J),kt.updateMultisampleRenderTarget(Mt),kt.updateRenderTargetMipmap(Mt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let Qt=0,Ae=H.length;Qt<Ae;Qt++){const ue=H[Qt],{object:ce,geometry:Ze,material:Rt,group:tn}=ue;if(Rt.side===Re&&ce.layers.test(J.layers)){const ae=Rt.side;Rt.side=$e,Rt.needsUpdate=!0,ad(ce,et,J,Ze,Rt,tn),Rt.side=ae,Rt.needsUpdate=!0,At=!0}}At===!0&&(kt.updateMultisampleRenderTarget(Mt),kt.updateRenderTargetMipmap(Mt))}T.setRenderTarget(_t,Et,Pt),T.setClearColor(Y,V),Jt!==void 0&&(J.viewport=Jt),T.toneMapping=Ht}function Pa(R,H,et){const J=H.isScene===!0?H.overrideMaterial:null;for(let j=0,Mt=R.length;j<Mt;j++){const Tt=R[j],{object:_t,geometry:Et,group:Pt}=Tt;let Ht=Tt.material;Ht.allowOverride===!0&&J!==null&&(Ht=J),_t.layers.test(et.layers)&&ad(_t,H,et,Et,Ht,Pt)}}function ad(R,H,et,J,j,Mt){D!==null&&j.isNodeMaterial&&D.setObject(R,j),R.onBeforeRender(T,H,et,J,j,Mt),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(T,H,et,J,R,Mt),j.transparent===!0&&j.side===Re&&j.forceSinglePass===!1?(j.side=$e,j.needsUpdate=!0,T.renderBufferDirect(et,H,J,j,R,Mt),j.side=ui,j.needsUpdate=!0,T.renderBufferDirect(et,H,J,j,R,Mt),j.side=Re):T.renderBufferDirect(et,H,J,j,R,Mt),R.onAfterRender(T,H,et,J,j,Mt)}function od(R){let H=0;for(const et of R)et.texture!==null&&H++;return H}function pr(R,H,et){H.isScene!==!0&&(H=ze);const J=Ft.get(R),j=b.state.lights,Mt=b.state.shadowsArray,Tt=j.state.version,_t=lt.getParameters(R,j.state,Mt,H,et,b.state.lightProbeGridArray),Et=lt.getProgramCacheKey(_t);let Pt=J.programs;J.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,J.fog=H.fog;const Ht=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;J.envMap=I.get(R.envMap||J.environment,Ht),J.envMapRotation=J.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Pt===void 0&&(R.addEventListener("dispose",le),Pt=new Map,J.programs=Pt,J.programVariants=new Map);let Jt=Pt.get(Et);if(Jt!==void 0){if(J.currentProgram===Jt&&J.lightsStateVersion===Tt)return cd(R,_t),Jt}else _t.uniforms=lt.getUniforms(R),D!==null&&R.isNodeMaterial&&D.build(R,et,_t),R.onBeforeCompile(_t,T),Jt=lt.acquireProgram(_t,Et),Pt.set(Et,Jt),J.uniforms=_t.uniforms;const At=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(At.clippingPlanes=at.uniform),cd(R,_t),J.needsLights=x1(R),J.lightsStateVersion=Tt,J.needsLights&&(At.ambientLightColor.value=j.state.ambient,At.lightProbe.value=j.state.probe,At.sunLights.value=j.state.sun,At.sunLightShadows.value=j.state.sunShadow,At.directionalLights.value=j.state.directional,At.directionalLightShadows.value=j.state.directionalShadow,At.spotLights.value=j.state.spot,At.spotLightShadows.value=j.state.spotShadow,At.rectAreaLights.value=j.state.rectArea,At.ltc_1.value=j.state.rectAreaLTC1,At.ltc_2.value=j.state.rectAreaLTC2,At.pointLights.value=j.state.point,At.pointLightShadows.value=j.state.pointShadow,At.hemisphereLights.value=j.state.hemi,At.sunShadowMatrix.value=j.state.sunShadowMatrix,At.sunShadowCascade.value=j.state.sunShadowCascade,At.directionalShadowMatrix.value=j.state.directionalShadowMatrix,At.spotLightMatrix.value=j.state.spotLightMatrix,At.spotLightMap.value=j.state.spotLightMap,At.pointShadowMatrix.value=j.state.pointShadowMatrix),J.numLightProbeGrids=od(b.state.lightProbeGridArray),J.currentProgram=Jt,J.uniformsList=null,Jt}function p1(R,H,et,J,j){const Mt=Ft.get(R),Tt=Mt.currentProgram.id+","+J+","+j;let _t=Mt.programVariants.get(Tt);return _t===void 0?(_t=pr(R,H,et),Mt.programVariants.set(Tt,_t)):(Mt.currentProgram=_t,Mt.uniformsList=null,Mt.outputColorSpace=J,Mt.toneMapping=j),_t}function ld(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=oa.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function cd(R,H){const et=Ft.get(R);et.outputColorSpace=H.outputColorSpace,et.batching=H.batching,et.batchingColor=H.batchingColor,et.instancing=H.instancing,et.instancingColor=H.instancingColor,et.instancingMorph=H.instancingMorph,et.skinning=H.skinning,et.morphTargets=H.morphTargets,et.morphNormals=H.morphNormals,et.morphColors=H.morphColors,et.morphTargetsCount=H.morphTargetsCount,et.numClippingPlanes=H.numClippingPlanes,et.numIntersection=H.numClipIntersection,et.vertexAlphas=H.vertexAlphas,et.vertexTangents=H.vertexTangents,et.toneMapping=H.toneMapping}function m1(R,H,et,J,j){H.isScene!==!0&&(H=ze),kt.resetTextureUnits();const Mt=H.fog,Tt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?H.environment:null,_t=W===null?T.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:jt.workingColorSpace,Et=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Pt=I.get(J.envMap||Tt,Et),Ht=J.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Jt=!!et.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),At=!!et.morphAttributes.position,Qt=!!et.morphAttributes.normal,Ae=!!et.morphAttributes.color;let ue=Zn;J.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(ue=T.toneMapping);const ce=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Ze=ce!==void 0?ce.length:0,Rt=Ft.get(J),tn=b.state.lights;if(Wt===!0&&(he===!0||R!==L)){const Se=R===L&&J.id===U;at.setState(J,R,Se)}let ae=!1,Wi=!1;J.version===Rt.__version?Rt.needsLights&&Rt.lightsStateVersion!==tn.state.version||j.isBatchedMesh&&Rt.batching===!1||!j.isBatchedMesh&&Rt.batching===!0||j.isBatchedMesh&&Rt.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Rt.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Rt.instancing===!1||!j.isInstancedMesh&&Rt.instancing===!0||j.isSkinnedMesh&&Rt.skinning===!1||!j.isSkinnedMesh&&Rt.skinning===!0||j.isInstancedMesh&&Rt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Rt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Rt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Rt.instancingMorph===!1&&j.morphTexture!==null||Rt.envMap!==Pt||J.fog===!0&&Rt.fog!==Mt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==at.numPlanes||Rt.numIntersection!==at.numIntersection)||Rt.vertexAlphas!==Ht||Rt.vertexTangents!==Jt||Rt.morphTargets!==At||Rt.morphNormals!==Qt||Rt.morphColors!==Ae||Rt.morphTargetsCount!==Ze||Rt.numLightProbeGrids!==od(b.state.lightProbeGridArray)?ae=!0:(Rt.outputColorSpace!==_t||Rt.toneMapping!==ue)&&(Wi=!0):(ae=!0,Rt.__version=J.version);let Ke=Rt.currentProgram;(ae===!0||Wi===!0)&&(Ke=Wi===!0?p1(J,H,j,_t,ue):pr(J,H,j),D&&J.isNodeMaterial&&D.onUpdateProgram(J,Ke,Rt));let La=!1,Pi=!1,Xi=!1;const ie=Ke.getUniforms(),We=Rt.uniforms;if(St.useProgram(Ke.program)&&(La=!0,Pi=!0,Xi=!0),J.id!==U&&(U=J.id,Pi=!0),La||L!==R){St.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ie.setValue(q,"projectionMatrix",R.projectionMatrix),ie.setValue(q,"viewMatrix",R.matrixWorldInverse);const Ge=ie.map.cameraPosition;Ge!==void 0&&Ge.setValue(q,je.setFromMatrixPosition(R.matrixWorld)),xe.logarithmicDepthBuffer&&ie.setValue(q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ie.setValue(q,"isOrthographic",R.isOrthographicCamera===!0),L!==R&&(L=R,Pi=!0,Xi=!0)}if(Rt.needsLights&&(tn.state.sunShadowMap.length>0&&ie.setValue(q,"sunShadowMap",tn.state.sunShadowMap,kt),tn.state.directionalShadowMap.length>0&&ie.setValue(q,"directionalShadowMap",tn.state.directionalShadowMap,kt),tn.state.spotShadowMap.length>0&&ie.setValue(q,"spotShadowMap",tn.state.spotShadowMap,kt),tn.state.pointShadowMap.length>0&&ie.setValue(q,"pointShadowMap",tn.state.pointShadowMap,kt)),j.isSkinnedMesh){ie.setOptional(q,j,"bindMatrix"),ie.setOptional(q,j,"bindMatrixInverse");const Se=j.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),ie.setValue(q,"boneTexture",Se.boneTexture,kt))}j.isBatchedMesh&&(ie.setOptional(q,j,"batchingTexture"),ie.setValue(q,"batchingTexture",j._matricesTexture,kt),ie.setOptional(q,j,"batchingIdTexture"),ie.setValue(q,"batchingIdTexture",j._indirectTexture,kt),ie.setOptional(q,j,"batchingColorTexture"),j._colorsTexture!==null&&ie.setValue(q,"batchingColorTexture",j._colorsTexture,kt));const Un=et.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&ot.update(j,et,Ke),(Pi||Rt.receiveShadow!==j.receiveShadow)&&(Rt.receiveShadow=j.receiveShadow,ie.setValue(q,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&H.environment!==null&&(We.envMapIntensity.value=H.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=Ix()),Pi){if(ie.setValue(q,"toneMappingExposure",T.toneMappingExposure),Rt.needsLights&&g1(We,Xi),Mt&&J.fog===!0&&ft.refreshFogUniforms(We,Mt),ft.refreshMaterialUniforms(We,J,nt,tt,b.state.transmissionRenderTarget[R.id]),Rt.needsLights&&Rt.numLightProbeGrids>0){const Se=M;let Ge=0;for(const li of b.state.lightProbeGridArray)li.texture!==null&&(Se.textures[Ge]=li.texture,Se.min[Ge]=li.boundingBox.min,Se.max[Ge]=li.boundingBox.max,Se.resolution[Ge]=li.resolution,Ge++);for(const li in Se)Se[li].length=Ge;We.probesSH.value=Se.textures,We.probesMin.value=Se.min,We.probesMax.value=Se.max,We.probesResolution.value=Se.resolution}oa.upload(q,ld(Rt),We,kt)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(oa.upload(q,ld(Rt),We,kt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ie.setValue(q,"center",j.center),ie.setValue(q,"modelViewMatrix",j.modelViewMatrix),ie.setValue(q,"normalMatrix",j.normalMatrix),ie.setValue(q,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){const Se=J.uniformsGroups;for(let Ge=0,li=Se.length;Ge<li;Ge++){const ud=Se[Ge];Dt.update(ud,Ke),Dt.bind(ud,Ke)}}return Ke}function g1(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.sunLights.needsUpdate=H,R.sunLightShadows.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function x1(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,H,et){const J=Ft.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Ft.get(R.texture).__webglTexture=H,Ft.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:et,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){const et=Ft.get(R);et.__webglFramebuffer=H,et.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,et=0){W=R,O=H,G=et;let J=null,j=!1,Mt=!1;if(R){const _t=Ft.get(R);if(_t.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(q.FRAMEBUFFER,_t.__webglFramebuffer),N.copy(R.viewport),K.copy(R.scissor),it=R.scissorTest,St.viewport(N),St.scissor(K),St.setScissorTest(it),U=-1;return}else if(_t.__webglFramebuffer===void 0)kt.setupRenderTarget(R);else if(_t.__hasExternalTextures)kt.rebindTextures(R,Ft.get(R.texture).__webglTexture,Ft.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ht=R.depthTexture;if(_t.__boundDepthTexture!==Ht){if(Ht!==null&&Ft.has(Ht)&&(R.width!==Ht.image.width||R.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(R)}}const Et=R.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(Mt=!0);const Pt=Ft.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Pt[H])?J=Pt[H][et]:J=Pt[H],j=!0):R.samples>0&&kt.useMultisampledRTT(R)===!1?J=Ft.get(R).__webglMultisampledFramebuffer:Array.isArray(Pt)?J=Pt[et]:J=Pt,N.copy(R.viewport),K.copy(R.scissor),it=R.scissorTest}else N.copy(xt).multiplyScalar(nt).floor(),K.copy(Lt).multiplyScalar(nt).floor(),it=Bt;if(et!==0&&(J=F),St.bindFramebuffer(q.FRAMEBUFFER,J)&&St.drawBuffers(R,J),St.viewport(N),St.scissor(K),St.setScissorTest(it),j){const _t=Ft.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+H,_t.__webglTexture,et)}else if(Mt){const _t=H;for(let Et=0;Et<R.textures.length;Et++){const Pt=Ft.get(R.textures[Et]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Et,Pt.__webglTexture,et,_t)}}else if(R!==null&&et!==0){const _t=Ft.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,_t.__webglTexture,et)}U=-1};function hd(R){const H=Ft.get(R);return(H.__readFormat!==R.format||H.__readType!==R.type)&&(H.__readFormat=R.format,H.__readType=R.type,H.__formatReadable=xe.textureFormatReadable(R.format),H.__typeReadable=xe.textureTypeReadable(R.type)),H}this.readRenderTargetPixels=function(R,H,et,J,j,Mt,Tt,_t=0){if(!(R&&R.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Tt!==void 0&&(Et=Et[Tt],Array.isArray(Et)&&(Et=Et[0])),Et){St.bindFramebuffer(q.FRAMEBUFFER,Et);try{const Pt=R.textures[_t],Ht=Pt.format,Jt=Pt.type;R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+_t);const At=hd(Pt);if(At.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-J&&et>=0&&et<=R.height-j&&q.readPixels(H,et,J,j,dt.convert(Ht),dt.convert(Jt),Mt)}finally{const Pt=W!==null?Ft.get(W).__webglFramebuffer:null;St.bindFramebuffer(q.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(R,H,et,J,j,Mt,Tt,_t=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Tt!==void 0&&(Et=Et[Tt],Array.isArray(Et)&&(Et=Et[0])),Et)if(H>=0&&H<=R.width-J&&et>=0&&et<=R.height-j){St.bindFramebuffer(q.FRAMEBUFFER,Et);const Pt=R.textures[_t],Ht=Pt.format,Jt=Pt.type;R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+_t);const At=hd(Pt);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Qt),q.bufferData(q.PIXEL_PACK_BUFFER,Mt.byteLength,q.STREAM_READ),q.readPixels(H,et,J,j,dt.convert(Ht),dt.convert(Jt),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const Ae=W!==null?Ft.get(W).__webglFramebuffer:null;St.bindFramebuffer(q.FRAMEBUFFER,Ae);const ue=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await qd(q,ue,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Qt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Mt),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Qt),q.deleteSync(ue),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,et=0){const J=Math.pow(2,-et),j=Math.floor(R.image.width*J),Mt=Math.floor(R.image.height*J),Tt=H!==null?H.x:0,_t=H!==null?H.y:0;kt.setTexture2D(R,0),q.copyTexSubImage2D(q.TEXTURE_2D,et,0,0,Tt,_t,j,Mt),St.unbindTexture()},this.copyTextureToTexture=function(R,H,et=null,J=null,j=0,Mt=0){let Tt,_t,Et,Pt,Ht,Jt,At,Qt,Ae;const ue=R.isCompressedTexture?R.mipmaps[Mt]:R.image;if(et!==null)Tt=et.max.x-et.min.x,_t=et.max.y-et.min.y,Et=et.isBox3?et.max.z-et.min.z:1,Pt=et.min.x,Ht=et.min.y,Jt=et.isBox3?et.min.z:0;else{const ie=Math.pow(2,-j);Tt=Math.floor(ue.width*ie),_t=Math.floor(ue.height*ie),R.isDataArrayTexture?Et=ue.depth:R.isData3DTexture?Et=Math.floor(ue.depth*ie):Et=1,Pt=0,Ht=0,Jt=0}J!==null?(At=J.x,Qt=J.y,Ae=J.z):(At=0,Qt=0,Ae=0);const ce=dt.convert(H.format),Ze=dt.convert(H.type);let Rt;H.isData3DTexture?(kt.setTexture3D(H,0),Rt=q.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(kt.setTexture2DArray(H,0),Rt=q.TEXTURE_2D_ARRAY):(kt.setTexture2D(H,0),Rt=q.TEXTURE_2D),St.activeTexture(q.TEXTURE0),St.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,H.flipY),St.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),St.pixelStorei(q.UNPACK_ALIGNMENT,H.unpackAlignment);const tn=St.getParameter(q.UNPACK_ROW_LENGTH),ae=St.getParameter(q.UNPACK_IMAGE_HEIGHT),Wi=St.getParameter(q.UNPACK_SKIP_PIXELS),Ke=St.getParameter(q.UNPACK_SKIP_ROWS),La=St.getParameter(q.UNPACK_SKIP_IMAGES);St.pixelStorei(q.UNPACK_ROW_LENGTH,ue.width),St.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ue.height),St.pixelStorei(q.UNPACK_SKIP_PIXELS,Pt),St.pixelStorei(q.UNPACK_SKIP_ROWS,Ht),St.pixelStorei(q.UNPACK_SKIP_IMAGES,Jt);const Pi=R.isDataArrayTexture||R.isData3DTexture,Xi=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){const ie=Ft.get(R),We=Ft.get(H),Un=Ft.get(ie.__renderTarget),Se=Ft.get(We.__renderTarget);St.bindFramebuffer(q.READ_FRAMEBUFFER,Un.__webglFramebuffer),St.bindFramebuffer(q.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ge=0;Ge<Et;Ge++)Pi&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ft.get(R).__webglTexture,j,Jt+Ge),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ft.get(H).__webglTexture,Mt,Ae+Ge)),q.blitFramebuffer(Pt,Ht,Pt+Tt,Ht+_t,At,Qt,At+Tt,Qt+_t,q.DEPTH_BUFFER_BIT,q.NEAREST);St.bindFramebuffer(q.READ_FRAMEBUFFER,null),St.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Ft.has(R)){const ie=Ft.get(R),We=Ft.get(H);St.bindFramebuffer(q.READ_FRAMEBUFFER,P),St.bindFramebuffer(q.DRAW_FRAMEBUFFER,k);for(let Un=0;Un<Et;Un++)Pi?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ie.__webglTexture,j,Jt+Un):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ie.__webglTexture,j),Xi?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,We.__webglTexture,Mt,Ae+Un):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,We.__webglTexture,Mt),j!==0?q.blitFramebuffer(Pt,Ht,Pt+Tt,Ht+_t,At,Qt,At+Tt,Qt+_t,q.COLOR_BUFFER_BIT,q.NEAREST):Xi?q.copyTexSubImage3D(Rt,Mt,At,Qt,Ae+Un,Pt,Ht,Tt,_t):q.copyTexSubImage2D(Rt,Mt,At,Qt,Pt,Ht,Tt,_t);St.bindFramebuffer(q.READ_FRAMEBUFFER,null),St.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Xi?R.isDataTexture||R.isData3DTexture?q.texSubImage3D(Rt,Mt,At,Qt,Ae,Tt,_t,Et,ce,Ze,ue.data):H.isCompressedArrayTexture?q.compressedTexSubImage3D(Rt,Mt,At,Qt,Ae,Tt,_t,Et,ce,ue.data):q.texSubImage3D(Rt,Mt,At,Qt,Ae,Tt,_t,Et,ce,Ze,ue):R.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Mt,At,Qt,Tt,_t,ce,Ze,ue.data):R.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Mt,At,Qt,ue.width,ue.height,ce,ue.data):q.texSubImage2D(q.TEXTURE_2D,Mt,At,Qt,Tt,_t,ce,Ze,ue);St.pixelStorei(q.UNPACK_ROW_LENGTH,tn),St.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ae),St.pixelStorei(q.UNPACK_SKIP_PIXELS,Wi),St.pixelStorei(q.UNPACK_SKIP_ROWS,Ke),St.pixelStorei(q.UNPACK_SKIP_IMAGES,La),Mt===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&q.generateMipmap(Rt),St.unbindTexture()},this.initRenderTarget=function(R){Ft.get(R).__webglFramebuffer===void 0&&kt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?kt.setTextureCube(R,0):R.isData3DTexture?kt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?kt.setTexture2DArray(R,0):kt.setTexture2D(R,0),St.unbindTexture()},this.resetState=function(){O=0,G=0,W=null,St.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const su={type:"change"},_l={type:"start"},ru={type:"end"},ca=new Or,au=new Gn,Ux=Math.cos(70*Kt.DEG2RAD),Ie=new X,sn=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vl=1e-6;class Fx extends Mp{constructor(t,e=null){super(t,e),this.state=re.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qn.ROTATE,MIDDLE:qn.DOLLY,RIGHT:qn.PAN},this.touches={ONE:hi.ROTATE,TWO:hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new En,this._lastTargetPosition=new X,this._quat=new En().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new na,this._sphericalDelta=new na,this._scale=1,this._panOffset=new X,this._rotateStart=new Ct,this._rotateEnd=new Ct,this._rotateDelta=new Ct,this._panStart=new Ct,this._panEnd=new Ct,this._panDelta=new Ct,this._dollyStart=new Ct,this._dollyEnd=new Ct,this._dollyDelta=new Ct,this._dollyDirection=new X,this._mouse=new Ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zx.bind(this),this._onPointerDown=Ox.bind(this),this._onPointerUp=Bx.bind(this),this._onContextMenu=Yx.bind(this),this._onMouseWheel=Hx.bind(this),this._onKeyDown=Vx.bind(this),this._onTouchStart=Wx.bind(this),this._onTouchMove=Xx.bind(this),this._onMouseDown=Gx.bind(this),this._onMouseMove=kx.bind(this),this._interceptControlDown=qx.bind(this),this._interceptControlUp=Zx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=re.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(su),this.update(),this.state=re.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ie.copy(e).sub(this.target),Ie.applyQuaternion(this._quat),this._spherical.setFromVector3(Ie),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=sn:n>Math.PI&&(n-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ie.setFromSpherical(this._spherical),Ie.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ie),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ie.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new X(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new X(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ie.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ca.origin.copy(this.object.position),ca.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ca.direction))<Ux?this.object.lookAt(this.target):(au.setFromNormalAndCoplanarPoint(this.object.up,this.target),ca.intersectPlane(au,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vl||this._lastTargetPosition.distanceToSquared(this.target)>vl?(this.dispatchEvent(su),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?sn/60*this.autoRotateSpeed*t:sn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ie.setFromMatrixColumn(e,0),Ie.multiplyScalar(-t),this._panOffset.add(Ie)}_panUp(t,e){this.screenSpacePanning===!0?Ie.setFromMatrixColumn(e,1):(Ie.setFromMatrixColumn(e,0),Ie.crossVectors(this.object.up,Ie)),Ie.multiplyScalar(t),this._panOffset.add(Ie)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ie.copy(s).sub(this.target);let r=Ie.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ox(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function zx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Bx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ru),this.state=re.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Gx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case qn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=re.DOLLY;break;case qn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}break;case qn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(_l)}function kx(i){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Hx(i){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(i.preventDefault(),this.dispatchEvent(_l),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ru))}function Vx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Wx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case hi.ROTATE:if(this.enableRotate===!1){this.state=re.NONE;break}this._handleTouchStartRotate(i),this.state=re.TOUCH_ROTATE;break;case hi.PAN:if(this.enablePan===!1){this.state=re.NONE;break}this._handleTouchStartPan(i),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=re.TOUCH_DOLLY_PAN;break;case hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(_l)}function Xx(i){switch(this._trackPointer(i),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=re.NONE}}function Yx(i){this.enabled!==!1&&i.preventDefault()}function qx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ml=new Gn,ha=new vp,xs=new Ct,Sl=new X;class Kx extends Fx{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:qn.PAN,MIDDLE:qn.DOLLY,RIGHT:qn.ROTATE},this.touches={ONE:hi.PAN,TWO:hi.DOLLY_ROTATE},this._panWorldStart=new X}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;Ml.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();xs.x=(t.clientX-n.left)/n.width*2-1,xs.y=-((t.clientY-n.top)/n.height)*2+1,ha.setFromCamera(xs,this.object),ha.ray.intersectPlane(Ml,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();xs.x=(t.clientX-n.left)/n.width*2-1,xs.y=-((t.clientY-n.top)/n.height)*2+1,ha.setFromCamera(xs,this.object),ha.ray.intersectPlane(Ml,Sl)&&(Sl.sub(this._panWorldStart),this._panOffset.copy(Sl).negate(),this.update())}}const ua=new wt;function B(i){return ua.set(i),[ua.r,ua.g,ua.b]}function Gt(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function rr(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function Ne(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class ee{constructor(){Z(this,"pos",[]);Z(this,"nor",[]);Z(this,"col",[]);Z(this,"glo",[]);Z(this,"ox",0);Z(this,"oy",0);Z(this,"oz",0);Z(this,"c",1);Z(this,"s",0)}get vertexCount(){return this.pos.length/3}gradientY(t,e,n,s,r){for(let a=t*3;a<this.pos.length;a+=3){const o=Kt.clamp((this.pos[a+1]-e)/(n-e),0,1);for(let l=0;l<3;l++)this.col[a+l]=s[l]+(r[l]-s[l])*o}}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,a,o,l,c,h,u=0){const d=this.wx(t,n),f=this.wz(t,n),p=this.oy+e,_=this.wx(s,a),m=this.wz(s,a),g=this.oy+r,S=this.wx(o,c),x=this.wz(o,c),M=this.oy+l,E=_-d,b=g-p,v=m-f,y=S-d,w=M-p,T=x-f;let C=b*T-v*w,D=v*y-E*T,F=E*w-b*y;const P=Math.hypot(C,D,F)||1;C/=P,D/=P,F/=P,this.pos.push(d,p,f,_,g,m,S,M,x),this.nor.push(C,D,F,C,D,F,C,D,F),this.col.push(h[0],h[1],h[2],h[0],h[1],h[2],h[0],h[1],h[2]),this.glo.push(u,u,u)}quad(t,e,n,s,r,a,o,l,c,h,u,d,f,p=0){this.tri(t,e,n,s,r,a,o,l,c,f,p),this.tri(t,e,n,o,l,c,h,u,d,f,p)}box(t,e,n,s,r,a,o,l=void 0,c=null,h=0){this.quad(t,e,a,s,e,a,s,r,a,t,r,a,o,h),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,o,h),this.quad(s,e,a,s,e,n,s,r,n,s,r,a,o,h),this.quad(t,e,n,t,e,a,t,r,a,t,r,n,o,h),l!==null&&this.quad(t,r,a,s,r,a,s,r,n,t,r,n,l??o,h),c&&this.quad(t,e,n,s,e,n,s,e,a,t,e,a,c,h)}cyl(t,e,n,s,r,a,o,l,c=null,h=0){const u=e+a;for(let d=0;d<o;d++){const f=d/o*Math.PI*2,p=(d+1)/o*Math.PI*2,_=Math.cos(f),m=Math.sin(f),g=Math.cos(p),S=Math.sin(p);r>1e-4?(this.quad(t+_*s,e,n+m*s,t+_*r,u,n+m*r,t+g*r,u,n+S*r,t+g*s,e,n+S*s,l,h),c&&this.tri(t,u,n,t+g*r,u,n+S*r,t+_*r,u,n+m*r,c,h)):this.tri(t+_*s,e,n+m*s,t,u,n,t+g*s,e,n+S*s,l,h)}}blob(t,e,n,s,r,a,o,l,c,h,u=0){const d=h??c;for(let f=0;f<l;f++){const p=f/l*Math.PI,_=(f+1)/l*Math.PI,m=Math.cos(p),g=Math.cos(_),S=Math.sin(p),x=Math.sin(_),M=rr(c,d,1-(f+.5)/l);for(let E=0;E<o;E++){const b=E/o*Math.PI*2,v=(E+1)/o*Math.PI*2,y=Math.cos(b),w=Math.sin(b),T=Math.cos(v),C=Math.sin(v),D=t+y*S*s,F=e+m*r,P=n+w*S*a,k=t+T*S*s,O=n+C*S*a,G=t+y*x*s,W=e+g*r,U=n+w*x*a,L=t+T*x*s,N=n+C*x*a;f>0&&this.tri(D,F,P,k,F,O,L,W,N,M,u),f<l-1&&this.tri(D,F,P,L,W,N,G,W,U,M,u)}}}walls(t,e,n,s,r=0){const a=t.length/2,o=yl(t)>0;for(let l=0;l<a;l++){const c=(l+1)%a,h=t[l*2],u=t[l*2+1],d=t[c*2],f=t[c*2+1];o?this.quad(d,e,f,h,e,u,h,n,u,d,n,f,s,r):this.quad(h,e,u,d,e,f,d,n,f,h,n,u,s,r)}}cap(t,e,n,s=0){const r=t.length/2,a=[];for(let l=0;l<r;l++)a.push(new Ct(t[l*2],t[l*2+1]));const o=rl.triangulateShape(a,[]);for(const l of o){const c=a[l[0]],h=a[l[1]],u=a[l[2]];(h.x-c.x)*(u.y-c.y)-(h.y-c.y)*(u.x-c.x)>0?this.tri(c.x,e,c.y,u.x,e,u.y,h.x,e,h.y,n,s):this.tri(c.x,e,c.y,h.x,e,h.y,u.x,e,u.y,n,s)}}build(){const t=new Ee;return t.setAttribute("position",new ye(new Float32Array(this.pos),3)),t.setAttribute("normal",new ye(new Float32Array(this.nor),3)),t.setAttribute("color",new ye(new Float32Array(this.col),3)),t.setAttribute("glow",new ye(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function yl(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const da={value:0};function _s(i={}){const t=new Pn({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??Re}),e=new wt(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=da,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>"inverloch-model",t}function fa(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=da,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.82 * uNight;`)},i.customProgramCacheKey=()=>"inverloch-unlit",i}const $x=8192,ii=256,Jx=420,ou=2048,lu=[-1,1],cu=`
uniform sampler2D uCloudMap;
uniform vec2 uCloudOffset;
uniform float uCloudCover;
uniform float uCloudFlash;
const float cloudHeight = ${Jx.toFixed(1)};

float cloudDensity(vec2 position) {
  float density = texture2D(uCloudMap, position / ${$x.toFixed(1)} - uCloudOffset).r;
  float edge = mix(0.78, 0.29, uCloudCover);
  return smoothstep(edge, edge + 0.13, density) * smoothstep(0.0, 0.08, uCloudCover);
}
`,Qx=`
uniform vec3 uCloudSunDir;
uniform float uCloudShadowStrength;

float cloudSunlight(vec3 position) {
  float layerDistance = cloudHeight - position.y;
  if (layerDistance <= 0.0 || uCloudShadowStrength <= 0.0 || uCloudCover <= 0.0) return 1.0;
  vec2 projection = position.xz + layerDistance * uCloudSunDir.xz / max(uCloudSunDir.y, 0.06);
  return 1.0 - uCloudShadowStrength * cloudDensity(projection) * smoothstep(0.0, 70.0, layerDistance);
}
`;function pa(i,t,e){const n=Math.imul(i%e,374761393)^Math.imul(t%e,668265263)^Math.imul(e,1442695041),s=Math.imul(n^n>>>13,1274126177);return((s^s>>>16)>>>0)/4294967295}function bl(i,t,e){const n=Math.floor(i*e),s=Math.floor(t*e),r=i*e-n,a=t*e-s,o=r*r*(3-2*r),l=a*a*(3-2*a),c=Kt.lerp(pa(n,s,e),pa(n+1,s,e),o),h=Kt.lerp(pa(n,s+1,e),pa(n+1,s+1,e),o);return Kt.lerp(c,h,l)}function jx(){const i=new Uint8Array(ii*ii);for(let e=0;e<ii;e++)for(let n=0;n<ii;n++){const s=(n+.5)/ii,r=(e+.5)/ii,a=.67*bl(s,r,24)+.23*bl(s,r,48)+.1*bl(s,r,96);i[e*ii+n]=Math.round(255*a)}const t=new qs(i,ii,ii,xr);return t.wrapS=t.wrapT=Us,t.magFilter=Xe,t.minFilter=Mn,t.generateMipmaps=!0,t.needsUpdate=!0,t}class t_{constructor(){Z(this,"uniforms",{uCloudMap:{value:jx()},uCloudOffset:{value:new Ct},uCloudCover:{value:.38},uCloudFlash:{value:0},uFlashCenter:{value:new Ct}})}update(t){const e=Kt.euclideanModulo(t,ou)/ou;this.uniforms.uCloudOffset.value.set(lu[0]*e,lu[1]*e)}setCover(t){this.uniforms.uCloudCover.value=Kt.clamp(t,0,1)}setFlash(t){this.uniforms.uCloudFlash.value=Kt.clamp(t,0,1)}dispose(){this.uniforms.uCloudMap.value.dispose()}}const si={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},e_=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
  gl_Position = p.xyww;
}`,n_=`
${cu}
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
}`;class i_{constructor(t,e,n,s){Z(this,"sun",new xp(16777215,3));Z(this,"hemi",new pp(16777215,8947848,1));Z(this,"sky");Z(this,"horizon",{value:new wt});Z(this,"sunDir",new X);Z(this,"cloudShadowStrength",{value:0});Z(this,"skyUniforms");Z(this,"from");Z(this,"to");Z(this,"t",1);Z(this,"mode","day");this.renderer=t,this.water=e,this.from=this.to=si.day,this.skyUniforms={...s.uniforms,uZenith:{value:new wt},uHorizon:this.horizon,uBelow:{value:new wt},uSunDir:{value:new X},uSunColor:{value:new wt},uSunGlow:{value:1},uNight:{value:0}},this.sky=new Zt(new ol(1,32,16),new nn({uniforms:this.skyUniforms,vertexShader:e_,fragmentShader:n_,side:$e,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,n>0&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n),this.sun.shadow.radius=1.5),this.apply(1)}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=si[t],this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=Kt.clamp(e*.7,90,2400),s=this.sun.shadow,r=s.camera,a=n*2/s.mapSize.x,o=Math.round(t.x/a)*a,l=Math.round(t.z/a)*a,c=n*2.4+300;this.sun.target.position.set(o,0,l),this.sun.position.set(o,0,l).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=Kt.clamp(a*1.6,.06,1.2))}setSolar(t){const e=(t%1440+1440)%1440,n=6*60,s=20.5*60;let r,a;if(e>=n&&e<=s)a=(e-n)/(s-n),r=Math.sin(Math.PI*a)*70;else{const p=((e<n?e+1440:e)-s)/(1440-(s-n));a=p<.5?1:0,r=-Math.sin(Math.PI*p)*40}const o=Kt.degToRad(110*(1-2*a)),l=Kt.degToRad(Math.max(r,5)),c=[Math.sin(o)*Math.cos(l),Math.sin(l),-Math.cos(o)*Math.cos(l)];let h;r>=25?h=si.day:r>=6?h=El(si.golden,si.day,(r-6)/19):r>=-6?h=El(si.night,si.golden,(r+6)/12):h=si.night;const u=Kt.clamp((2-r)/6,0,1),d=si.night.sunDir,f=[c[0]+(d[0]-c[0])*u,c[1]+(d[1]-c[1])*u,c[2]+(d[2]-c[2])*u];this.from=this.to={...h,sunDir:f},this.mode=r>=25?"day":r>=-6?"golden":"night",this.apply(1)}snapshot(){return El(this.from,this.to,s_(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.castShadow||this.sun.position.copy(this.sunDir),this.cloudShadowStrength.value=.64*(1-Kt.smoothstep(e.night,.25,.95)),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night;const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new wt(e.shallow),.35),da.value=e.night,this.renderer.toneMappingExposure=e.exposure}}function s_(i){return i*i*(3-2*i)}function El(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,a)=>new wt(r).lerp(new wt(a),e).getHex(),s=(r,a)=>r+(a-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}const Xn=1.5;class hu{constructor(t,e,n,s,r,a,o,l){Z(this,"nx");Z(this,"nz");Z(this,"y");Z(this,"xMin");Z(this,"zMin");Z(this,"xMax");Z(this,"zMax");Z(this,"dx");Z(this,"dz");Z(this,"cellX");Z(this,"cellZ");if(this.raw=t,this.exposure=e,this.w=n,this.h=s,this.sizeX=r,this.sizeZ=a,this.cellX=r/n,this.cellZ=a/s,this.nx=Math.floor((n-1)/o)+1,this.nz=Math.floor((s-1)/o)+1,this.dx=this.cellX*o,this.dz=this.cellZ*o,this.xMin=-r/2+this.cellX/2,this.zMin=-a/2+this.cellZ/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=l??new Float32Array(this.nx*this.nz),!l)for(let c=0;c<this.nz;c++)for(let h=0;h<this.nx;h++)this.y[c*this.nx+h]=t[c*o*n+h*o]*Xn}yAt(t,e){let n=(t-this.xMin)/this.dx,s=(e-this.zMin)/this.dz;n<0?n=0:n>this.nx-1.0001&&(n=this.nx-1.0001),s<0?s=0:s>this.nz-1.0001&&(s=this.nz-1.0001);const r=n|0,a=s|0,o=n-r,l=s-a,c=a*this.nx+r,h=this.y[c],u=this.y[c+1],d=this.y[c+this.nx],f=this.y[c+this.nx+1];return o+l<=1?h+(u-h)*o+(d-h)*l:f+(d-f)*(1-o)+(u-f)*(1-l)}bilinear(t,e,n){let s=(e+this.sizeX/2)/this.cellX-.5,r=(n+this.sizeZ/2)/this.cellZ-.5;s<0?s=0:s>this.w-1.0001&&(s=this.w-1.0001),r<0?r=0:r>this.h-1.0001&&(r=this.h-1.0001);const a=s|0,o=r|0,l=s-a,c=r-o,h=o*this.w+a;return(t[h]*(1-l)+t[h+1]*l)*(1-c)+(t[h+this.w]*(1-l)+t[h+this.w+1]*l)*c}metresAt(t,e){return this.bilinear(this.raw,t,e)}exposureAt(t,e){return this.bilinear(this.exposure,t,e)}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}}const ma=128;function r_(i,t,e){const{nx:n,nz:s}=i,r=Math.min(ma+1,n-t),a=Math.min(ma+1,s-e),o=new Float32Array(r*a*3),l=new Float32Array(r*a*3),c=new Float32Array(r*a*2);for(let d=e;d<e+a;d++)for(let f=t;f<t+r;f++){const p=(d-e)*r+f-t,_=i.xMin+f*i.dx,m=i.zMin+d*i.dz;o[p*3]=_,o[p*3+1]=i.y[d*n+f],o[p*3+2]=m,c[p*2]=(_+i.sizeX/2)/i.sizeX,c[p*2+1]=1-(m+i.sizeZ/2)/i.sizeZ;const g=i.y[d*n+Math.max(f-1,0)],S=i.y[d*n+Math.min(f+1,n-1)],x=i.y[Math.max(d-1,0)*n+f],M=i.y[Math.min(d+1,s-1)*n+f],E=(S-g)/(2*i.dx),b=(M-x)/(2*i.dz),v=Math.hypot(E,1,b);l[p*3]=-E/v,l[p*3+1]=1/v,l[p*3+2]=-b/v}const h=new Uint16Array((r-1)*(a-1)*6);let u=0;for(let d=0;d<a-1;d++)for(let f=0;f<r-1;f++){const p=d*r+f,_=p+1,m=p+r,g=m+1;h[u++]=p,h[u++]=m,h[u++]=_,h[u++]=_,h[u++]=m,h[u++]=g}return{pos:o,nor:l,uv:c,idx:h}}function a_(i){const t=[];for(let e=0;e<i.nz-1;e+=ma)for(let n=0;n<i.nx-1;n+=ma)t.push(r_(i,n,e));return t}const wl=10,o_=5,vs=4,l_=3;function ga(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Int16Array(e.buffer,0,e.length>>1)}async function c_(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,a=0,o=0,l=0;const c=[];for(;n<t.length;){const _=e.getUint32(n),m=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(m==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),a=t[n+16],o=t[n+17],l=t[n+20];else if(m==="IDAT")c.push(t.subarray(n+8,n+8+_));else if(m==="IEND")break;n+=12+_}if(a!==8||o!==2&&o!==6||l)throw new Error("Unsupported terrain image format");const h=o===2?3:4,u=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),d=new Uint8Array(await new Response(u).arrayBuffer()),f=s*h,p=new Uint8Array(f*r);for(let _=0;_<r;_++){const m=d[_*(f+1)],g=_*(f+1)+1,S=_*f;for(let x=0;x<f;x++){const M=x>=h?p[S+x-h]:0,E=_>0?p[S-f+x]:0,b=x>=h&&_>0?p[S-f+x-h]:0;let v=d[g+x];if(m===1)v+=M;else if(m===2)v+=E;else if(m===3)v+=M+E>>1;else if(m===4){const y=Math.abs(E-b),w=Math.abs(M-b),T=Math.abs(M+E-2*b);v+=y<=w&&y<=T?M:w<=T?E:b}p[S+x]=v&255}}return{width:s,height:r,channels:h,data:p}}async function h_(i,t,e){const[n,s]=await Promise.all([fetch(i.town,{signal:e}).then(u=>{if(!u.ok)throw new Error("Could not load the town data");return u.json()}).then(u=>(t("Streets and buildings"),u)),fetch(i.height,{signal:e}).then(u=>{if(!u.ok)throw new Error("Could not load the terrain");return u.arrayBuffer()}).then(c_).then(u=>(t("Terrain"),u))]);if(e.aborted)throw e.reason;const{meta:r}=n,a=s.width*s.height,o=new Float32Array(a),l=new Float32Array(a),c=s.channels;for(let u=0;u<a;u++)o[u]=(s.data[u*c]<<8|s.data[u*c+1])/r.heightScale-r.heightOffset,l[u]=s.data[u*c+2]/255;const h=new hu(o,l,r.grid[0],r.grid[1],r.size[0],r.size[1],i.terrainStep);return{town:{...n,houses:ga(n.houses),cabins:ga(n.cabins),cars:ga(n.cars),trees:ga(n.trees)},heights:o,exposure:l,surface:h.y,terrainTiles:a_(h)}}async function u_(i,t,e,n,s){const r=new Set,a=h=>{s.aborted||r.has(h)||(r.add(h),e(r.size/4,h))};e(0,"Fetching map data");const o={town:new URL(i.town,document.baseURI).href,height:new URL(i.height,document.baseURI).href,terrainStep:t},l=n.run({kind:"world",source:o},()=>h_(o,a,s),s,a),c=new fp().loadAsync(i.ground).then(h=>(a("Ground texture"),h));try{const[h,u]=await Promise.all([l,c]);if(s.aborted)throw s.reason;return u.colorSpace=Pe,u.anisotropy=8,u.generateMipmaps=!0,u.minFilter=Mn,a("Building the model"),{...h,ground:u}}catch(h){throw c.then(u=>u.dispose(),()=>{}),h}}const Tl=-1617.09,Al=414.46,Ms=2.6721,ke=-4.38,fn=1.66,ln=-11.13,Dn=-10.87,ri=-1.98,In=10.93,xa=2.72,uu=4.16,bi=.24,ar=[ke,In,fn,In,fn,Dn,ln,Dn,ln,ri,ke,ri],du=Math.cos(Ms),fu=Math.sin(Ms),zi=(i,t)=>Tl+i*du+t*fu,Bi=(i,t)=>Al-i*fu+t*du;function pu(i,t,e,n){const s=(i+e)/2,r=(t+n)/2;return[zi(s,r),Bi(s,r),e-i,n-t,Ms]}const d_=[...pu(ke,Dn,fn,In),...pu(ln,Dn,ke,ri)],Ss=B(13222830),f_=B(10262404),Ei=B(14144967),wi=B(6712936),mu=B(3884352),gu=B(3887959),p_=B(8217937);function _a(i,t,e,n,s,r){for(let a=e+.32;a<n-.18;a+=.64){const o=a+.036,l=xa+.024,c=uu+.024,h=Gt(wi,.74);if(t){const[u,d]=s>r?[a,o]:[o,a];i.quad(s,l,d,s,l,u,r,c,u,r,c,d,h)}else{const[u,d]=s>r?[a,o]:[o,a];i.quad(u,l,s,d,l,s,d,c,r,u,c,r,h)}}}function m_(i){const t=ke-bi,e=fn+bi,n=ln-bi,s=In+bi,r=Dn-bi,a=ri+bi,o=(t+e)/2,l=(r+a)/2,c=xa,h=uu;i.quad(e,c,s,e,c,r,o,h,r,o,h,s,wi),i.quad(t,c,a,t,c,s,o,h,s,o,h,l,Gt(wi,1.07)),i.tri(t,c,r,o,h,l,o,h,r,Gt(wi,1.07)),i.quad(n,c,a,t,c,a,o,h,l,n,h,l,Gt(wi,1.02)),i.quad(t,c,r,n,c,r,n,h,l,o,h,l,Gt(wi,.92)),_a(i,!0,r,s,e,o),_a(i,!0,a,s,t,o),_a(i,!1,n,t,a,l),_a(i,!1,n,t,r,l);for(const[m,g,S,x,M,E]of[[t,c,s,o,h,s],[o,h,s,e,c,s],[e,c,r,o,h,r],[o,h,r,t,c,r],[n,c,r,n,h,l],[n,h,l,n,c,a]])i.quad(m,g-.16,S,x,M-.16,E,x,M,E,m,g,S,Ei);i.box(e-.09,c-.12,r,e+.035,c-.025,s,Ei),i.box(t-.035,c-.12,a,t+.09,c-.025,s,Ei),i.box(n,c-.12,a-.09,t,c-.025,a+.035,Ei),i.box(n,c-.12,r-.035,t,c-.025,r+.09,Ei),i.box(o-.075,h-.037,r,o+.075,h+.028,s,Gt(wi,.78)),i.box(n,h-.037,l-.075,o,h+.028,l+.075,Gt(wi,.78));const u=h-c,d=h-u*bi/((e-t)/2),f=h-u*bi/((a-r)/2),p=[ke,c,fn,c,fn,c+h-d,o,h,ke,c+h-d],_=(m,g)=>{const S=g?p:[ke,c+h-d,o,h,fn,c+h-d,fn,c,ke,c];for(let x=2;x<S.length/2;x++)i.tri(S[0],S[1],m,S[(x-1)*2],S[(x-1)*2+1],m,S[x*2],S[x*2+1],m,Ss)};_(In,!0),_(Dn,!1),i.quad(ln,c,Dn,ln,c,ri,ln,c+h-f,ri,ln,c+h-f,Dn,Ss),i.tri(ln,c+h-f,Dn,ln,c+h-f,ri,ln,h,l,Ss);for(let m=ke+.1;m<fn-.09;m+=.19){const g=h-Math.abs(m-o)*u/((e-t)/2)-.04;i.quad(m,c,In+.02,m+.034,c,In+.02,m+.034,g,In+.02,m,g,In+.02,Gt(Ss,.75))}}function Rl(i,t,e,n,s,r=!1){for(let h=.24;h<xa;h+=.17)i.quad(t,h,s+.014,e,h,s+.014,e,h+.019,s+.014,t,h+.019,s+.014,Gt(Ss,.67));const a=t+n/2,o=Math.min(n*.29,1.17),l=a-o,c=a+o;i.box(l,.87,s,c,2.17,s+.085,mu);for(let h=0;h<3;h++){const u=(c-l-.14)/3,d=l+.07+h*u,f=d+u-.034,p=s+.087;i.quad(d,.94,p,f,.94,p,f,2.1,p,d,2.1,p,Gt(gu,.78+h*.11),.3),i.tri(d,2.03,p+.002,f,1.59,p+.002,f,2.04,p+.002,Gt(gu,1.14))}if(i.box(l-.045,.84,s,c+.045,.92,s+.15,Ei),i.box(l-.045,2.17,s,c+.045,2.245,s+.12,Ei),r){const h=e-1.42;i.box(h,.04,s,h+1.04,2.22,s+.09,mu),i.box(h+.065,.1,s+.087,h+.975,2.14,s+.115,p_),i.box(h+.77,.98,s+.11,h+.88,1.035,s+.16,Ei)}}function g_(i,t){const e=(a,o)=>t.yAt(zi(a,o),Bi(a,o)),n=[];for(let a=0;a<ar.length;a+=2)n.push(e(ar[a],ar[a+1]));const s=Math.max(...n)+.12;i.frame(Tl,s,Al,Ms),i.walls(ar,Math.min(...n)-s-.2,.13,f_),i.walls(ar,.13,xa,Ss),m_(i),Rl(i,ke,fn,fn-ke,In),Rl(i,ln,ke,4.2,ri,!0);for(const a of[1.3,5.1,8.4])i.frame(zi(ke,a),s,Bi(ke,a),Ms-Math.PI/2),Rl(i,-1.32,1.32,2.64,0);const r=Ne(13);for(const[a,o]of[[-2.94,13.1],[.39,15.7],[-.65,21.4]])for(let l=0;l<5;l++){const c=a+(r()-.5)*.96,h=o+(r()-.5)*1.68,u=.15+r()*.23;i.frame(Tl,e(c,h),Al,Ms),i.blob(c,u*.64,h,u*1.18,u,u*.84,7,4,B(5134386),B(l%3===0?9671258:7241808));for(let d=0;d<4;d++){const f=(r()-.5)*u,p=(r()-.5)*u;i.tri(c+f-.028,.02,h+p,c+f+.028,.02,h+p,c+f*3.2,u*2.4,h+p*2.7,B(8686162))}}return i.frame(),[[ke,Dn,fn,In],[ln,Dn,ke,ri]].map(([a,o,l,c])=>[zi(a,o),Bi(a,o),zi(l,o),Bi(l,o),zi(l,c),Bi(l,c),zi(a,c),Bi(a,c)])}const Cl=[["24",[-1702,305.08,12.22,9.68,-.7524],1,2,7232070,12103050,"v","o"],["22",[-1686.64,316,11.46,8.62,-.3855],2,1,9344923,13224902,"b","o"],["22 (garage)",[-1679.45,321.49,4.21,3.67,-.4978],1,3,9344923,13224902,"","t"],["20",[-1668.03,323.49,7.44,11.59,-.0907],1,0,13018492,10722704,"g","o"],["18",[-1645.61,335.05,11.19,8.31,-.346],1,0,14206627,9145997,"","o"],["16",[-1616.02,330.47,14.65,10.49,-.4859],1,2,13485749,11971464,"","o"],["14",[-1610.3,354.63,11.28,9.08,-.3794,-1609.54,344.81,5.42,9.72,-.3794],1,1,15328729,8079926,"","o"],["14A",[-1594.08,360.97,8.66,9.66,-.4636],1,2,14275006,12365706,"","o"],["10",[-1572.46,363.32,13.65,23.59,-.3996],1,0,14865590,9409683,"g","o"],["outbuilding at 8",[-1563.96,372.87,7.3,6.68,-.4275],1,0,14078146,13947340,"","s"],["8",[-1556.98,362.95,8.83,17.59,-.4512,-1554.25,370.09,2.32,7.12,-.4512],1,3,15526108,15000798,"","o"],["6",[-1542.81,380.79,14.34,8.58,-.3577,-1539.06,376.26,10.48,2.55,-.3577],1,2,15328470,14869212,"","o"],["4",[-1530.34,391.35,11.21,5.66,.0312,-1528.02,387.1,6.31,2.71,.0312],1,1,10134438,14014161,"","o"],["2",[-1509.87,393.04,12.04,8.58,-.3975,-1510.39,386.54,6.05,3,-.3975],1,1,15262678,14474454,"","o"],["29",[-1729.27,353.38,8.8,16.67,2.8003],1,1,14209989,14803419,"","o"],["27",[-1712.88,352.46,13.74,8.15,2.847,-1712.42,359,9.08,4.1,2.847],1,0,13222836,9277840,"v","o"],["25",[-1703.96,376.48,9.87,17.42,2.8565],1,0,15129535,10135434,"v","o"],["23",[-1683.5,379.63,11,25,2.6798],1,2,15789800,15000798,"","t"],["21",[-1665.11,377.41,10.66,13.24,2.7699],1,0,12240814,9409425,"v","o"],["17",[-1639.74,395.06,10.25,9.08,2.7085],2,3,15921644,15263970,"","o"],["outbuilding west of 13",[-1629.65,418.37,4.54,7.23,2.9043],1,0,14078146,9342090,"","s"],["15",[-1627.03,407.09,11.04,13.86,2.8101,-1621.08,400.52,4.06,2.45,2.8101],1,3,15724006,14869212,"","o"],["13",d_,1,1,13222830,6712936,"","m"],["9",[-1574.55,442.34,11.72,14.88,2.8379],1,0,14932676,12628620,"","o"],["7",[-1559.58,439.94,8.54,11.74,2.8311],1,3,14275520,9412735,"","o"],["outbuilding",[-1540.1,440.05,7.53,5.25,2.5613],1,0,14078146,11313563,"","s"],["5",[-1526.07,445.23,16.31,7.93,2.7377],1,0,13617336,9211790,"","o"]],xu=[-1592.2,410.8],or=[-1744,317.6],lr=[-1495,439.1],x_=45;function _u(i,t,[e,n,s,r]){const a=s-e,o=r-n,l=a*a+o*o||1,c=Math.max(0,Math.min(1,((i-e)*a+(t-n)*o)/l));return Math.hypot(i-e-a*c,t-n-o*c)}const vu=new WeakMap;function Mu(i){let t=vu.get(i);if(t)return t;const e=[],n=[],s=[Math.min(or[0],lr[0])-120,Math.min(or[1],lr[1])-120],r=[Math.max(or[0],lr[0])+120,Math.max(or[1],lr[1])+120];for(const a of i.roads){if(a[0]>4)continue;const o=i.names[a[4]]??"",l=a[5];for(let c=0;c+3<l.length;c+=2){const h=[l[c]/10,l[c+1]/10,l[c+2]/10,l[c+3]/10];if(Math.max(h[0],h[2])<s[0]||Math.min(h[0],h[2])>r[0]||Math.max(h[1],h[3])<s[1]||Math.min(h[1],h[3])>r[1])continue;const u=(h[0]+h[2])/2;(o==="Norman Road"&&u>=or[0]-1&&u<=lr[0]+1?e:n).push(h)}}return t=(a,o)=>{if(a<s[0]||a>r[0]||o<s[1]||o>r[1]||!e.length||Math.hypot(a-xu[0],o-xu[1])<24)return!1;let l=1/0,c=1/0;for(const h of e)l=Math.min(l,_u(a,o,h));if(l>x_)return!1;for(const h of n)c=Math.min(c,_u(a,o,h));return l<c},vu.set(i,t),t}function __(i,t,e=1.5){for(const[,n]of Cl)for(let s=0;s<n.length;s+=5){const[r,a,o,l,c]=n.slice(s,s+5),h=i-r,u=t-a;if(h*h+u*u>400)continue;const d=Math.cos(c),f=Math.sin(c),p=h*d-u*f,_=h*f+u*d;if(Math.abs(p)<o/2+e&&Math.abs(_)<l/2+e)return!0}return!1}const va=[15921126,15261640,13619920,11120043,12110550,11845800,14272936,5988452,11036494,14205088,15327150,16448250].map(B),Ti=[15000277,12435386,8948618,4934726,3487290,6957594,8160360,3555666,11888447,11644323].map(B),He=B(3163994),cr=[7031348,3098712,9056042,15658730,4151878].map(B),ys=B(9138002),cn=B(16053230),Ma=B(12171184),Sa=B(1846090),Su=[15327951,3099196,2504783,8007210,3816770,13214282,5209226].map(B);function Pl(i,t,e,n,s,r){const a=Gt(r,.9);if(t>=e){const o=t-e;i.quad(-t,n,e,t,n,e,o,n+s,0,-o,n+s,0,r),i.quad(t,n,-e,-t,n,-e,-o,n+s,0,o,n+s,0,r),i.tri(t,n,e,t,n,-e,o,n+s,0,a),i.tri(-t,n,-e,-t,n,e,-o,n+s,0,a)}else{const o=e-t;i.quad(t,n,e,t,n,-e,0,n+s,-o,0,n+s,o,r),i.quad(-t,n,-e,-t,n,e,0,n+s,o,0,n+s,-o,r),i.tri(-t,n,e,t,n,e,0,n+s,o,a),i.tri(t,n,-e,-t,n,-e,0,n+s,-o,a)}}function Gi(i,t,e,n,s,r,a,o){const l=t/2,c=e/2;if(t>=e){const u=c*s;return i.quad(-l-r,n-r*s,c+r,l+r,n-r*s,c+r,l+r,n+u,0,-l-r,n+u,0,a),i.quad(l+r,n-r*s,-c-r,-l-r,n-r*s,-c-r,-l-r,n+u,0,l+r,n+u,0,a),i.tri(l,n,c,l,n,-c,l,n+u,0,o),i.tri(-l,n,-c,-l,n,c,-l,n+u,0,o),u}const h=l*s;return i.quad(l+r,n-r*s,c+r,l+r,n-r*s,-c-r,0,n+h,-c-r,0,n+h,c+r,a),i.quad(-l-r,n-r*s,-c-r,-l-r,n-r*s,c+r,0,n+h,c+r,0,n+h,-c-r,a),i.tri(-l,n,c,l,n,c,0,n+h,c,o),i.tri(l,n,-c,-l,n,-c,0,n+h,-c,o),h}function hr(i,t,e,n,s,r,a,o,l){const c=t/2,h=e/2,u=n+s,d=n+r,f=(u-d)/e;i.quad(-c-a,u+a*f,h+a,c+a,u+a*f,h+a,c+a,d-a*f,-h-a,-c-a,d-a*f,-h-a,o),i.quad(-c,n,h,c,n,h,c,u,h,-c,u,h,l),i.quad(c,n,h,c,n,-h,c,d,-h,c,u,h,l),i.quad(-c,n,-h,-c,n,h,-c,u,h,-c,d,-h,l),i.quad(c,n,-h,-c,n,-h,-c,d,-h,c,d,-h,l)}const pn=.05;function mn(i,t,e,n,s,r,a,o=0){const l=t/2+pn;i.quad(e,s,l,n,s,l,n,r,l,e,r,l,a,o)}function yu(i,t,e,n,s,r,a,o=0){const l=-t/2-pn;i.quad(n,s,l,e,s,l,e,r,l,n,r,l,a,o)}function Ll(i,t,e,n,s,r,a,o=0){const l=t/2+pn;i.quad(l,s,n,l,s,e,l,r,e,l,r,n,a,o)}function Dl(i,t,e,n,s,r,a,o=0){const l=-t/2-pn;i.quad(l,s,e,l,s,n,l,r,n,l,r,e,a,o)}function ya(i,t,e,n){let s=1/0,r=-1/0;for(const[a,o]of[[-e,-n],[e,-n],[e,n],[-e,n],[0,0]]){const l=i.yAt(t.wx(a,o),t.wz(a,o));l<s&&(s=l),l>r&&(r=l)}return{lo:s,hi:r}}function v_(i,t,e,n,s,r,a,o,l,c,h,u){i.frame(e,0,n,a);const d=ya(t,i,s/2,r/2),f=d.hi+.18;i.frame(e,f,n,a);const p=va[c%va.length],_=Ti[h%Ti.length],m=o===2?5.5:2.85,g=s/2,S=r/2,x=Gt(p,.7);i.box(-g,d.lo-f-.3,-S,g,0,S,x,null),i.box(-g,0,-S,g,m,S,p,l===3?Gt(_,1):null);let M=m;if(l===0){const y=Math.min(g,S)+.5;Pl(i,g+.5,S+.5,m,y*.44,_),M=m+y*.44}else l===1?M=m+Gi(i,s,r,m,.5,.4,_,p):l===2?(hr(i,s,r,m,1.35,.25,.5,_,p),mn(i,r,-g+.5,g-.5,m+.25,m+1.05,He,u()<.5?1:0),M=m+1.4):(i.box(-g-.15,m,-S-.15,g+.15,m+.3,S+.15,Gt(p,.92),_),M=m+.3);const E=cr[Math.floor(u()*cr.length)];for(let v=0;v<o;v++){const y=v*2.75+.85,w=y+1.3,T=Math.max(2,Math.floor(s/3.2)),C=v===0?Math.floor(u()*T):-1;for(let P=0;P<T;P++){const k=-g+(P+.5)/T*s;P===C?mn(i,r,k-.5,k+.5,0,2.1,E):mn(i,r,k-.85,k+.85,y,w,He,u()<.55?1:0)}const D=Math.max(1,Math.floor(s/3.8));for(let P=0;P<D;P++){const k=-g+(P+.5)/D*s;yu(i,r,k-.75,k+.75,y,w,He,u()<.5?1:0)}const F=Math.max(1,Math.floor(r/4.2));for(let P=0;P<F;P++){const k=-S+(P+.5)/F*r;Ll(i,s,k-.7,k+.7,y,w,He,u()<.45?1:0),Dl(i,s,k-.7,k+.7,y,w,He,u()<.45?1:0)}}const b=u();if(o===1&&b<.36){const v=g*(.6+u()*.4),y=1.9;i.box(-v,-.12,S,v,.02,S+y,ys),i.quad(-v-.2,2.3,S+y+.2,v+.2,2.3,S+y+.2,v+.2,2.7,S,-v-.2,2.7,S,Gt(_,.93));const w=Math.max(2,Math.round(v*2/3));for(let T=0;T<=w;T++){const C=-v+T/w*v*2;i.box(C-.06,0,S+y-.12,C+.06,2.32,S+y,cn,null)}}else if(o===2&&b<.5){const v=g*(.55+u()*.45),y=2;i.box(-v,2.62,S,v,2.78,S+y,Ma,ys,Gt(Ma,.8));const w=u()<.5?B(10469580):cn;i.box(-v,2.78,S+y-.05,v,3.75,S+y,w,null),i.box(-v,2.78,S,-v+.05,3.75,S+y,w,null),i.box(v-.05,2.78,S,v,3.75,S+y,w,null);for(const T of[-v+.1,v-.1])i.box(T-.08,0,S+y-.2,T+.08,2.62,S+y-.04,cn,null);u()<.5&&i.quad(-v-.2,5.05,S+y+.2,v+.2,5.05,S+y+.2,v+.2,5.4,S,-v-.2,5.4,S,Gt(_,.93))}if(u()<.1&&l<=1){const v=(u()-.5)*g,y=(u()-.5)*S*.6;i.box(v-.32,m,y-.32,v+.32,M+.55,y+.32,B(10116936))}if(u()<.24&&l<=1&&M_(i,s,r,m,a,l,u),u()<.15){const v=(u()<.5?-1:1)*(g+1.25),y=-S+1.3;i.cyl(v,d.hi-f,y,1.05,1.05,2.1,8,u()<.5?B(9347975):B(12370625),B(11120814))}}function M_(i,t,e,n,s,r,a){const o=t/2,l=e/2,c=r===0?.5:.4,h=.22,u=.74,d=.09;if(t>=e){const f=l+c,p=r===0?f*.44:l*.5*(1+c/l),_=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?o-l:o)*.7)*(.6+a()*.4),g=Math.cos(s)<0,S=g?1:-1,x=S*f*(1-h),M=S*f*(1-u),E=_+p*h+d,b=_+p*u+d;g?i.quad(-m,E,x,m,E,x,m,b,M,-m,b,M,Sa):i.quad(m,E,x,-m,E,x,-m,b,M,m,b,M,Sa)}else{const f=o+c,p=r===0?f*.44:o*.5*(1+c/o),_=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?l-o:l)*.7)*(.6+a()*.4),g=Math.sin(s)>0,S=g?1:-1,x=S*f*(1-h),M=S*f*(1-u),E=_+p*h+d,b=_+p*u+d;g?i.quad(x,E,m,x,E,-m,M,b,-m,M,b,m,Sa):i.quad(x,E,-m,x,E,m,M,b,m,M,b,-m,Sa)}}const S_=B(9075302);function y_(i,t,e,n){const[,s,r,a,o,l,c]=e;let h=-1/0,u=1/0;for(let f=0;f<s.length;f+=5){const[p,_,m,g,S]=s.slice(f,f+5);i.frame(p,0,_,S);const x=[];for(const[E,b]of[[-m/2,-g/2],[m/2,-g/2],[m/2,g/2],[-m/2,g/2]])x.push(i.wx(E,b),i.wz(E,b));n.push(x);const M=ya(t,i,m/2,g/2);h=Math.max(h,M.hi),u=Math.min(u,M.lo)}const d=h+.18;for(let f=0;f<s.length;f+=5)b_(i,d,u,s.slice(f,f+5),r,a,o,l,f===0?c:"",f===0)}function b_(i,t,e,[n,s,r,a,o],l,c,h,u,d,f){const p=Ne(Math.round(n*31+s*17)>>>0);i.frame(n,t,s,o);const _=B(h),m=B(u),g=l===2?5.5:2.85,S=r/2,x=a/2;if(i.box(-S,e-t-.3,-x,S,0,x,Gt(_,.7),null),i.box(-S,0,-x,S,g,x,_,c===3?m:null),c===0){const y=Math.min(S,x)+.5;Pl(i,S+.5,x+.5,g,y*.44,m)}else c===1?Gi(i,r,a,g,.5,.4,m,_):c===2?hr(i,r,a,g,1.1,.2,.5,m,_):i.box(-S-.15,g,-x-.15,S+.15,g+.3,x+.15,Gt(_,.92),m);if(r<5||a<3)return;const M=d.includes("g")?Math.min(4.8,r*.42):0;M&&mn(i,a,S-.4-M,S-.4,0,2.2,S_);const E=-S,b=S-(M?M+.8:0);for(let v=0;v<l;v++){const y=v*2.75+.85,w=y+1.3,T=Math.max(2,Math.floor((b-E)/3.2));for(let F=0;F<T;F++){const P=E+(F+.5)/T*(b-E);f&&v===0&&F===T-1?mn(i,a,P-.5,P+.5,0,2.1,cr[0]):mn(i,a,P-.85,P+.85,y,w,He,p()<.5?1:0)}const C=Math.max(1,Math.floor(r/3.8));for(let F=0;F<C;F++){const P=-S+(F+.5)/C*r;yu(i,a,P-.75,P+.75,y,w,He,p()<.5?1:0)}const D=Math.max(1,Math.floor(a/4.2));for(let F=0;F<D;F++){const P=-x+(F+.5)/D*a;Ll(i,r,P-.7,P+.7,y,w,He,p()<.45?1:0),Dl(i,r,P-.7,P+.7,y,w,He,p()<.45?1:0)}}if(d.includes("v")){const v=Math.min(S-.3,(b-E)/2),y=(E+b)/2,w=2.2;i.box(y-v,-.12,x,y+v,.02,x+w,ys),i.quad(y-v-.2,2.3,x+w+.2,y+v+.2,2.3,x+w+.2,y+v+.2,2.7,x,y-v-.2,2.7,x,Gt(m,.93));const T=Math.max(2,Math.round(v*2/3));for(let C=0;C<=T;C++){const D=y-v+C/T*v*2;i.box(D-.06,0,x+w-.12,D+.06,2.32,x+w,cn,null)}}if(d.includes("b")&&l===2){const v=S*.8,y=1.8;i.box(-v,2.62,x,v,2.78,x+y,Ma,ys,Gt(Ma,.8)),i.box(-v,2.78,x+y-.05,v,3.75,x+y,cn,null),i.box(-v,2.78,x,-v+.05,3.75,x+y,cn,null),i.box(v-.05,2.78,x,v,3.75,x+y,cn,null);for(const w of[-v+.1,v-.1])i.box(w-.08,0,x+y-.2,w+.08,2.62,x+y-.04,cn,null)}}function E_(i,t,e,n,s,r,a,o,l,c){i.frame(e,0,n,a);const h=ya(t,i,s/2,r/2);i.frame(e,h.hi+.05,n,a);const u=[B(14275778),B(9083526),B(12041145),B(7305842)][l%4],d=Ti[c%Ti.length],f=2.4,p=s/2,_=r/2;i.box(-p,h.lo-h.hi-.3,-_,p,f,_,u,null),o===1?Gi(i,s,r,f,.32,.2,d,u):hr(i,s,r,f,.6,.1,.2,d,u),mn(i,r,-p*.72,p*.72,0,2.05,Gt(u,1.12))}const ba=[14243375,3112880,6266970,14725690,9134e3,4170656,14252591,4878261].map(B);function w_(i,t,e,n,s,r,a,o){const l={0:[8,4.2],1:[6.4,4.8],2:[3.6,3.6],3:[10.5,7.5]},[c,h]=l[r];i.frame(e,0,n,s);const u=ya(t,i,c/2,h/2);i.frame(e,u.hi+.05,n,s);const d=u.lo-u.hi-.3;if(r===0){const f=[B(15129798),B(12175305),B(13219994),B(10465434)][a%4],p=Ti[(a*3+1)%Ti.length];i.box(-4,d,-2.1,4,.35,2.1,Gt(f,.6),null),i.box(-4,.35,-2.1,4,2.75,2.1,f,null),Gi(i,8,4.2,2.75,.42,.35,p,f),i.box(-3.2,.2,2.1,1.2,.35,3.7,ys),i.box(-3.2,.35,3.62,1.2,1.25,3.7,cn,null),mn(i,4.2,-2.8,-1.2,1.2,2.3,He,o()<.5?1:0),mn(i,4.2,-.4,.5,.35,2.4,cr[a%cr.length]),mn(i,4.2,1.4,3.2,1.2,2.3,He,o()<.5?1:0)}else if(r===1){const f=ba[a%ba.length];i.box(-2.9,.45,-2.3,2.9,2.55,-.1,cn,B(15263972),B(9079432)),i.box(-2.92,1.05,-2.32,2.92,1.3,-.08,f,null),i.box(-1.4,0,-2.2,-.8,.5,-.2,B(2763308)),i.box(.8,0,-2.2,1.4,.5,-.2,B(2763308)),mn(i,-.2,-2.2,-1,1.45,2.15,He,o()<.4?1:0),i.box(-2.6,0,-.1,2.6,2,2.3,rr(f,cn,.72),null),i.quad(-2.7,2,2.4,2.7,2,2.4,2.7,2.5,-.1,-2.7,2.5,-.1,rr(f,cn,.55))}else if(r===2){const f=ba[a%ba.length];i.blob(0,0,0,1.75,1.55,1.75,6,4,Gt(f,.85),f)}else{const f=B(14209732),p=B(5922659);i.box(-5.25,d,-3.75,5.25,3,3.75,f,null),hr(i,10.5,7.5,3,1.5,.2,.7,p,B(9072466)),mn(i,7.5,-4.4,4.4,.3,2.6,He,o()<.6?1:0),i.box(-5.25,.05,3.75,5.25,.25,6.2,ys),Ll(i,10.5,-2,2,.9,2.3,He,o()<.5?1:0),Dl(i,10.5,-2,2,.9,2.3,He,o()<.5?1:0)}}function T_(i){const t=i.length/2;let e={cx:0,cz:0,w:0,d:0,heading:0,area:1/0};for(let n=0;n<t;n++){const s=(n+1)%t;let r=i[s*2]-i[n*2],a=i[s*2+1]-i[n*2+1];const o=Math.hypot(r,a);if(o<.5)continue;r/=o,a/=o;let l=1/0,c=-1/0,h=1/0,u=-1/0;for(let f=0;f<t;f++){const p=i[f*2],_=i[f*2+1],m=p*r+_*a,g=-p*a+_*r;m<l&&(l=m),m>c&&(c=m),g<h&&(h=g),g>u&&(u=g)}const d=(c-l)*(u-h);if(d<e.area){const f=(l+c)/2,p=(h+u)/2;e={cx:f*r-p*a,cz:f*a+p*r,w:c-l,d:u-h,heading:Math.atan2(-a,r),area:d}}}return e}function A_(i,t){const e=i.length/2,n=yl(i)>0?1:-1,s=[];for(let r=0;r<e;r++){const a=(r+e-1)%e,o=(r+1)%e;let l=i[r*2]-i[a*2],c=i[r*2+1]-i[a*2+1],h=i[o*2]-i[r*2],u=i[o*2+1]-i[r*2+1];const d=Math.hypot(l,c)||1,f=Math.hypot(h,u)||1;l/=d,c/=d,h/=f,u/=f;const p=-c*n,_=l*n,m=-u*n,g=h*n;let S=p+m,x=_+g;const M=Math.hypot(S,x)||1;S/=M,x/=M;const E=t/Math.max(.4,S*p+x*_);s.push(i[r*2]+S*E,i[r*2+1]+x*E)}return s}const R_=new Set(["house","detached","residential","terrace","yes;house","semidetached_house","bungalow"]),C_=new Set(["shed","garage","garages","toilets","hut"]);function bu(i,t,e,n,s,r){const a=e.p.map(w=>w/10),o=a.length/2;let l=0,c=0,h=1/0,u=-1/0;for(let w=0;w<o;w++){l+=a[w*2],c+=a[w*2+1];const T=t.yAt(a[w*2],a[w*2+1]);T<h&&(h=T),T>u&&(u=T)}l/=o,c/=o;const d=Math.abs(yl(a)),f=T_(a),p=d/(f.w*f.d||1),_=u+.15,m=Math.hypot(l-r[0],c-r[1])<420,g=e.k==="retail"||e.k==="commercial"||!!e.u||!!e.n||e.k==="yes"&&(d>300||m&&d>110),S=!g&&(R_.has(e.k)||e.k==="yes"&&d<=300),x=C_.has(e.k)||d<28;let M;e.l?M=e.l*3.1:e.k==="roof"?M=3:e.k==="hangar"?M=6.5:e.k==="church"?M=5:x?M=2.5:S?M=s()<.2?5.5:2.9:M=d>1200?7:d>500?5.6:4.3+s()*.8;const E={name:e.n,use:e.u,kind:e.k,poly:a,cx:l,cz:c,area:d,obb:f,floorY:_,wallH:M,topY:_+M};let b=26;for(let w=0;w<o;w++){const T=(w+1)%o,C=a[w*2],D=a[w*2+1],F=a[T*2],P=a[T*2+1],k=Math.hypot(F-C,P-D);if(k<4.5)continue;const O=(C+F)/2,G=(D+P)/2,W=n.nearest(O,G,b);if(!W)continue;let U=-(P-D)/k,L=(F-C)/k;if(U*(O-l)+L*(G-c)<0&&(U=-U,L=-L),(W.px-O)*U+(W.pz-G)*L<W.dist*.5)continue;b=W.dist;const N=Math.atan2(U,L),K=(F-C)*Math.cos(N)-(P-D)*Math.sin(N);E.street={x:K>0?C:F,z:K>0?D:P,heading:N,length:k}}if(i.frame(0,_,0,0),e.k==="roof"){const w=B(12172728);i.walls(a,M-.25,M,w),i.cap(a,M,w);for(let T=0;T<o;T++)i.box(a[T*2]-.12,h-_,a[T*2+1]-.12,a[T*2]+.12,M-.25,a[T*2+1]+.12,B(6974832),null);return E}const v=g?[B(15328470),B(14275266),B(13620178),B(15128768),B(12568777),B(15789540),B(13220258)][Math.floor(s()*7)]:va[Math.floor(s()*va.length)],y=g&&d>300?[B(13225160),B(11777972),B(14211280),B(10133405)][Math.floor(s()*4)]:Ti[Math.floor(s()*Ti.length)];if(i.walls(a,h-_-.3,M,v),e.k==="church"){i.frame(f.cx,_,f.cz,f.heading);const w=Gi(i,f.w,f.d,M,1.15,.3,B(5922659),v);E.topY=_+M+w}else if((S||x||e.k==="hangar")&&p>.8&&o<=8)if(i.frame(f.cx,_,f.cz,f.heading),e.k==="hangar")E.topY=_+M+Gi(i,f.w,f.d,M,.3,.3,B(12172728),v);else if(x)hr(i,f.w,f.d,M,.5,.1,.2,y,v);else if(s()<.55){const w=Math.min(f.w,f.d)/2+.45;Pl(i,f.w/2+.45,f.d/2+.45,M,w*.44,y),E.topY=_+M+w*.44}else E.topY=_+M+Gi(i,f.w,f.d,M,.5,.4,y,v);else if(d<420&&!g){const w=A_(a,Math.min(2.2,Math.sqrt(d)*.18)),T=1.15;for(let C=0;C<o;C++){const D=(C+1)%o;i.quad(a[C*2],M,a[C*2+1],a[D*2],M,a[D*2+1],w[D*2],M+T,w[D*2+1],w[C*2],M+T,w[C*2+1],y)}i.cap(w,M+T,Gt(y,1.05)),E.topY=_+M+T}else{i.cap(a,M-.05,y),i.walls(a,M,M+.45,Gt(v,.96)),E.topY=_+M+.45;const w=Math.min(6,Math.floor(d/220));for(let T=0;T<w;T++){const C=(s()-.5)*f.w*.5,D=(s()-.5)*f.d*.5,F=Math.cos(f.heading),P=Math.sin(f.heading),k=f.cx+C*F+D*P,O=f.cz-C*P+D*F;i.box(k-1.1,M,O-.8,k+1.1,M+.9,O+.8,B(11120304))}}if(!x&&e.k!=="hangar"){const w=Math.max(1,Math.round(M/3));for(let T=0;T<o;T++){const C=(T+1)%o,D=a[T*2],F=a[T*2+1],P=a[C*2],k=a[C*2+1],O=Math.hypot(P-D,k-F);if(O<3.2)continue;let G=-(k-F)/O,W=(P-D)/O;G*((D+P)/2-l)+W*((F+k)/2-c)<0&&(G=-G,W=-W);const U=Math.atan2(G,W),L=(P-D)*Math.cos(U)-(k-F)*Math.sin(U);i.frame(L>0?D:P,_,L>0?F:k,U);const N=Math.floor(O/(g?4.2:3.4));for(let K=0;K<w;K++){const it=K*3+.9;if(!(g&&K===0&&E.street&&Math.abs(U-E.street.heading)<.01))for(let Y=0;Y<N;Y++){const V=(Y+.5)/N*O;i.quad(V-.8,it,pn,V+.8,it,pn,V+.8,it+1.3,pn,V-.8,it+1.3,pn,He,s()<.5?1:0)}}}}if(g&&E.street&&!e.k.includes("church")&&d>60){const w=E.street;i.frame(w.x,_,w.z,w.heading);const T=Su[Math.floor(s()*Su.length)];if(i.quad(.5,.35,pn,w.length-.5,.35,pn,w.length-.5,2.7,pn,.5,2.7,pn,He,.9),m&&w.length>6&&M<9){i.box(.2,3,0,w.length-.2,3.16,2.7,T,Gt(T,.9),Gt(T,.75)),i.box(.2,2.75,2.62,w.length-.2,3.3,2.7,rr(T,cn,.25),null);const C=Math.max(1,Math.round(w.length/4.5));for(let D=0;D<=C;D++){const F=.35+D/C*(w.length-.7);i.box(F-.06,0,2.5,F+.06,3,2.62,B(4869456),null)}}}return i.frame(),E}function P_(i,t,e,n,s=()=>!1){const r=new en;r.name="buildings";const a=_s(),o=900,l=new Map,c=(x,M)=>{const E=`${Math.floor(x/o)}:${Math.floor(M/o)}`;let b=l.get(E);return b||l.set(E,b=new ee),b},h=i.meta,u=[(145.7285-h.origin[0])*h.metresPerDegree[0],-(-38.63385-h.origin[1])*h.metresPerDegree[1]],d=Ne(3996),f=[];for(const x of i.buildings){let M=0,E=0;for(let b=0;b<x.p.length;b+=2)M+=x.p[b],E+=x.p[b+1];if(M/=x.p.length*5,E/=x.p.length*5,!s(M,E)){if(n.has(x.n)){const b=new ee,v=bu(b,t,x,e,Ne(1),u);v.custom=!0,f.push(v);continue}f.push(bu(c(M,E),t,x,e,d,u))}}const p=i.houses,_=Mu(i);for(let x=0;x<p.length;x+=wl){const M=p[x]/4,E=p[x+1]/4,b=p[x+2]/10,v=p[x+3]/10,y=p[x+4]/10*(Math.PI/180),w=Ne(x*7919+17);s(M,E)||_(M,E)||(p[x+5]===1?E_(c(M,E),t,M,E,b,v,y,p[x+7],p[x+8],p[x+9]):v_(c(M,E),t,M,E,b,v,y,p[x+6],p[x+7],p[x+8],p[x+9],w))}const m=i.cabins;for(let x=0;x<m.length;x+=o_){const M=m[x]/4,E=m[x+1]/4;s(M,E)||w_(c(M,E),t,M,E,m[x+2]/10*(Math.PI/180),m[x+3],m[x+4],Ne(x*31+5))}const g=[];for(const x of Cl){const[M,E]=x[1];if(s(M,E))continue;const b=c(M,E);x[0]==="13"?g.push(...g_(b,t)):y_(b,t,x,g)}let S=0;for(const x of l.values()){x.frame(),S+=x.vertexCount/3;const M=new Zt(x.build(),a);M.castShadow=!0,M.receiveShadow=!0,r.add(M)}return{group:r,footprints:f,designedWalls:g,triangles:S}}class L_{constructor(t){Z(this,"targetFps");Z(this,"deadline",-1/0);Z(this,"lastDraw");this.targetFps=t===30?30:60}get target(){return this.targetFps}setTarget(t){const e=t===30?30:60;return e===this.targetFps?!1:(this.targetFps=e,this.reset(),!0)}reset(){this.deadline=-1/0,this.lastDraw=void 0}takeFrame(t){if(t+1<this.deadline)return;const e=1e3/this.targetFps,n=this.deadline+e;this.deadline=n<=t?t+e:n;const s=this.lastDraw===void 0?0:(t-this.lastDraw)/1e3;return this.lastDraw=t,s}}const D_=.1,I_=180,N_=425,U_=650,F_=360,O_=480,z_=1.8,B_=450;function Eu(i,t,e){const n=Math.max(i.x-t,0,t-i.x-i.size),s=Math.max(i.z-e,0,e-i.z-i.size);return Math.hypot(n,s)}function wu(i){"close"in i&&i.close()}function Il(i){i.texture.dispose(),wu(i.image)}function G_(i,t){return new Promise((e,n)=>{if(t.aborted){n(t.reason);return}const s=new Image;s.crossOrigin="anonymous";const r=()=>{s.onload=s.onerror=null,t.removeEventListener("abort",a)},a=()=>{r(),s.removeAttribute("src"),n(t.reason)};s.onload=()=>{r(),e(s)},s.onerror=()=>{r(),n(new Error("Could not load ground detail"))},t.addEventListener("abort",a,{once:!0}),s.src=i})}class k_{constructor(t,e,n,s,r,a){Z(this,"patches");Z(this,"manifest");Z(this,"manifestRetryAt",0);Z(this,"load");Z(this,"ready");Z(this,"residents");Z(this,"previous");Z(this,"vx",0);Z(this,"vz",0);Z(this,"closed",!1);this.urls=t,this.small=e,this.detail=n,this.anisotropy=s,this.worker=r,this.markDirty=a,this.residents=n.maps.map(()=>{})}update(t,e,n,s,r){if(!this.urls.detail||this.closed)return;const a=this.previous,o=a?t-a.time:0,l=a&&Math.hypot(e-a.x,n-a.y,s-a.z)>I_;if(a&&!l&&o<D_)return;if(this.previous={time:t,x:e,y:n,z:s},!a||l||o>1)this.vx=this.vz=0;else{const u=Math.min(1,o*4);this.vx+=((e-a.x)/o-this.vx)*u,this.vz+=((s-a.z)/o-this.vz)*u}if(!this.patches){!this.manifest&&t>=this.manifestRetryAt&&this.loadManifest(this.urls.detail);return}const c=Math.min(z_,B_/Math.max(1,Math.hypot(this.vx,this.vz))),h=this.patches.map(u=>{const d=u.slot!==-1,f=Math.min(Eu(u,e,s),Eu(u,e+this.vx*c,s+this.vz*c)+70);return{patch:u,score:f,present:d}}).filter(({score:u,present:d})=>r<=(d?O_:F_)&&u<=(d?U_:N_)).sort((u,d)=>u.score-d.score).slice(0,this.residents.length).map(({patch:u})=>u);for(const u of this.residents)u&&!h.includes(u.patch)&&this.evict(u);if(this.load&&!h.includes(this.load.patch)&&this.cancelLoad(),this.ready&&!h.includes(this.ready.patch)&&(Il(this.ready),this.ready=void 0),!this.load&&!this.ready){const u=h.find(d=>d.slot===-1&&t>=d.retryAt);u&&this.start(u)}}applyReady(){if(!this.ready)return;const t=this.residents.indexOf(void 0);if(t<0)return;const e=this.ready;this.ready=void 0,this.residents[t]=e;const{patch:n,texture:s}=e;n.slot=t,this.detail.maps[t].value=s,this.detail.rects[t].value.set(n.x,n.z,1/n.size,1)}dispose(){var t;if(!this.closed){this.closed=!0,(t=this.manifest)==null||t.abort(),this.cancelLoad(),this.ready&&Il(this.ready),this.ready=void 0;for(const e of this.residents)e&&this.evict(e);this.detail.fallback.dispose()}}async loadManifest(t){var n;const e=this.manifest=new AbortController;try{const s=new URL(t,document.baseURI),r=await fetch(s,{signal:e.signal});if(r.status===404){this.patches=[];return}if(!r.ok)throw new Error("Could not load the ground detail list");const{patches:a}=await r.json();if(e.signal.aborted)return;this.patches=(Array.isArray(a)?a:[]).flatMap(o=>{var h;if(!o||!Number.isFinite(o.x)||!Number.isFinite(o.z)||!(o.size>0)||!Number.isFinite(o.size))return[];const l=this.small&&o.lo?o.lo:o.file;if(typeof l!="string"||!l)return[];const c=(h=this.urls.detailFiles)==null?void 0:h[l];try{return[{x:o.x,z:o.z,size:o.size,url:c?new URL(c,document.baseURI).href:new URL(l,s).href,slot:-1,failures:0,retryAt:0}]}catch{return[]}})}catch{e.signal.aborted||(this.manifestRetryAt=(((n=this.previous)==null?void 0:n.time)??0)+20)}finally{this.manifest=void 0}}start(t){const e=new AbortController,n=this.load={patch:t,controller:e},{signal:s}=e;this.worker.run({kind:"detail",url:t.url},()=>G_(t.url,s),s).then(r=>{if(this.load!==n){wu(r);return}this.load=void 0,t.failures=0,t.retryAt=0;const a=new be(r);a.flipY=!("close"in r),a.colorSpace=Pe,a.anisotropy=this.anisotropy,a.generateMipmaps=!0,a.minFilter=Mn,a.needsUpdate=!0,this.ready={patch:t,texture:a,image:r},this.markDirty()},()=>{var r;this.load===n&&(this.load=void 0,t.failures++,t.retryAt=(((r=this.previous)==null?void 0:r.time)??0)+Math.min(30,2**t.failures))})}cancelLoad(){const t=this.load;this.load=void 0,t==null||t.controller.abort()}evict(t){const e=t.patch.slot;this.detail.maps[e].value=this.detail.fallback,this.detail.rects[e].value.w=0,this.residents[e]=void 0,t.patch.slot=-1,Il(t),this.markDirty()}}class H_{constructor(t,e,n){Z(this,"items",[]);Z(this,"v",new X);Z(this,"visible",!0);Z(this,"obstacles",[]);this.layer=t;for(const s of[...e].sort((r,a)=>r.priority-a.priority)){const r=document.createElement("button");r.type="button",r.tabIndex=-1,r.className=`inv-label inv-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",r.addEventListener("click",()=>n(s.id)),t.appendChild(r),this.items.push({place:s,el:r,w:0,h:0,shown:!1})}}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const a of this.items){a.w||(a.w=a.el.offsetWidth,a.h=a.el.offsetHeight);const o=a.place;this.v.set(o.x,o.y,o.z);const l=this.v.distanceTo(t.position);this.v.project(t);let c=this.v.z<1&&this.v.z>-1&&l<(o.maxDist??1/0)&&l<s;const h=(this.v.x*.5+.5)*e,u=(-this.v.y*.5+.5)*n,d=h-a.w/2,f=u-a.h,p=h+a.w/2,_=u;if(c&&(p<0||d>e||_<0||f>n)&&(c=!1),c){for(const m of r)if(d<m[2]+6&&p>m[0]-6&&f<m[3]+4&&_>m[1]-4){c=!1;break}}c&&(r.push([d,f,p,_]),a.el.style.transform=`translate3d(${Math.round(d)}px, ${Math.round(f)}px, 0)`),c!==a.shown&&(a.el.style.visibility=c?"visible":"hidden",a.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}const V_=[{id:"town",name:"A'Beckett Street",kind:"landmark",lat:-38.63372,lon:145.7283,blurb:"Inverloch's main street: bakeries, fish and chips, cafes and shops, a short walk from the inlet.",view:[380,58,-28],priority:1,lift:26},{id:"jetty",name:"Inverloch Jetty",kind:"landmark",lat:-38.63591,lon:145.73413,blurb:"Timber jetty reaching into Anderson Inlet, with the boat ramp alongside. A favourite for fishing and an evening walk.",view:[190,63,32],priority:1,lift:16},{id:"surf",name:"Surf Beach & Life Saving Club",kind:"landmark",lat:-38.64634,lon:145.70199,blurb:"Ocean beach facing Bass Strait, watched over by the Inverloch Surf Life Saving Club on the dune.",view:[330,62,-32],priority:1,lift:20},{id:"inlet",name:"Anderson Inlet",kind:"water",lat:-38.6412,lon:145.7445,blurb:"A shallow tidal estuary where the Tarwin River meets the sea. The sandbars here come from LiDAR survey data: slide the tide to cover and uncover them.",view:[3e3,50,8],priority:2},{id:"hub",name:"The Hub",kind:"landmark",lat:-38.63332,lon:145.72762,blurb:"Inverloch Community Hub on A'Beckett Street, home to the library and visitor information.",view:[300,60,20],priority:3,maxDist:2600,lift:18},{id:"espy",name:"Esplanade Hotel",kind:"landmark",lat:-38.63419,lon:145.72889,blurb:"The pub at the foreshore end of the main street.",view:[280,62,-40],priority:3,maxDist:2200,lift:18},{id:"rainbow",name:"Rainbow Park",kind:"landmark",lat:-38.63529,lon:145.72876,blurb:"Foreshore playground with picnic lawns and barbecues beside the inlet beach.",view:[150,60,14],priority:3,maxDist:2200,lift:14},{id:"bunurong",name:"Bunurong Environment Centre",kind:"landmark",lat:-38.63465,lon:145.72917,blurb:"Environment centre and shell museum on The Esplanade.",view:[260,60,-15],priority:5,maxDist:1100,lift:15},{id:"glade",name:"The Glade",kind:"landmark",lat:-38.63539,lon:145.7302,blurb:"Foreshore reserve and picnic shelter between the town centre and the jetty.",view:[300,62,5],priority:5,maxDist:1300,lift:13},{id:"oval",name:"Recreation Reserve",kind:"landmark",lat:-38.63194,lon:145.72681,blurb:"The town's football oval, a block back from the main street.",view:[460,58,15],priority:4,maxDist:2600,lift:16},{id:"school",name:"Primary School",kind:"landmark",lat:-38.63062,lon:145.72813,blurb:"Inverloch Primary School.",view:[380,58,0],priority:6,maxDist:1500,lift:14},{id:"bowls",name:"Bowls Club",kind:"landmark",lat:-38.63556,lon:145.73245,blurb:"Inverloch Bowls Club, two greens beside the foreshore.",view:[260,60,0],priority:6,maxDist:1300,lift:12},{id:"tennis",name:"Tennis Club & Oval",kind:"landmark",lat:-38.62722,lon:145.7372,blurb:"Tennis courts and a second football oval on the north-east side of town.",view:[520,58,10],priority:6,maxDist:2e3,lift:14},{id:"camping",name:"Foreshore Holiday Parks",kind:"landmark",lat:-38.63425,lon:145.7442,blurb:"Cabins, caravans and tents under the trees along The Esplanade, steps from the inlet.",view:[560,60,15],priority:4,maxDist:2800,lift:16},{id:"screw",name:"Screw Creek & Townsend Bluff",kind:"nature",lat:-38.6338,lon:145.7546,blurb:"A tidal creek in a nature conservation reserve, with a walking circuit up to the lookout on Townsend Bluff.",view:[900,60,-20],priority:3,lift:24},{id:"norman",name:"Point Norman",kind:"nature",lat:-38.648,lon:145.7118,blurb:"The corner where the surf beach turns into the inlet.",view:[900,60,-35],priority:4,maxDist:4200,lift:14},{id:"smythe",name:"Point Smythe",kind:"nature",lat:-38.6466,lon:145.7366,blurb:"The tip of the Venus Bay peninsula, across the entrance from town: coastal scrub, dunes and walking tracks.",view:[1300,58,150],priority:3,lift:22},{id:"racv",name:"RACV Inverloch Resort",kind:"landmark",lat:-38.6487,lon:145.6876,blurb:"Resort and villas on the Cape Paterson road, on the hill above the coast.",view:[520,60,40],priority:5,maxDist:3200,lift:18},{id:"strait",name:"Bass Strait",kind:"water",lat:-38.6565,lon:145.7075,blurb:"Open ocean. Swell rolls in to the surf beach from here.",view:[2300,50,-12],priority:4}];function W_(i,t){return V_.map(e=>{const n=(e.lon-i.origin[0])*i.metresPerDegree[0],s=-(e.lat-i.origin[1])*i.metresPerDegree[1],r=Math.max(t.yAt(n,s),0);return{...e,x:n,z:s,y:r+(e.lift??6)}})}function gn(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}const X_=new Set(["Inverloch Surf Life Saving Club","The Hub"]),Ve=B(10126440),Te=B(6113848),xn=B(16053230),bs=B(11842219),ve=B(7304312),ur=B(3163994),Es=B(13644844),ws=B(15909424),Y_=B(16119022),Nl=2.05*Xn;function Tu(i,t,e,n=35){let s=1/0,r=0,a=1;for(let o=0;o<24;o++){const l=o/24*Math.PI*2,c=i.metresAt(t+Math.cos(l)*n,e+Math.sin(l)*n)+i.metresAt(t+Math.cos(l)*n*2,e+Math.sin(l)*n*2);c<s&&(s=c,r=Math.cos(l),a=Math.sin(l))}return[r,a]}function Ea(i){let t=0,e=0;for(let n=0;n<i.length;n+=2)t+=i[n],e+=i[n+1];return[t/(i.length/2)/10,e/(i.length/2)/10]}function q_(i,t,e){const n=[];for(let x=0;x<e.length;x+=2)n.push([e[x]/10,e[x+1]/10]);t.metresAt(n[0][0],n[0][1])<t.metresAt(n[n.length-1][0],n[n.length-1][1])&&n.reverse();const s=1.7,r=Nl,[a,o]=n[0];let l=a-n[1][0],c=o-n[1][1];const h=Math.hypot(l,c)||1;l/=h,c/=h;let u=0;for(;u<30&&t.yAt(a+l*u,o+c*u)<r-.25;)u+=1.5;const d=Math.max(t.yAt(a+l*u,o+c*u),r-1.2),f=Math.atan2(-l,-c);i.frame(a+l*u,0,o+c*u,f),i.quad(-s,d+.05,0,s,d+.05,0,s,r,u,-s,r,u,Ve),i.quad(-s,d-1.2,0,-s,r-.4,u,-s,r,u,-s,d+.05,0,Te),i.quad(s,d-1.2,0,s,d+.05,0,s,r,u,s,r-.4,u,Te);for(let x=0;x<n.length-1;x++){const[M,E]=n[x],[b,v]=n[x+1],y=Math.hypot(b-M,v-E),w=Math.atan2(b-M,v-E);i.frame(M,r,E,w);const T=Math.ceil(y/1.2);for(let D=0;D<T;D++){const F=D/T*y,P=(D+1)/T*y;i.box(-s,-.14,F,s,0,P,Gt(Ve,.9+D*7%5*.04),void 0,Te)}i.box(-s+.25,-.5,0,-s+.5,-.14,y,Te,null),i.box(s-.5,-.5,0,s-.25,-.14,y,Te,null);const C=Math.max(1,Math.round(y/3.6));for(let D=0;D<=C;D++){const F=D/C*y;for(const P of[-1,1]){const k=P*(s-.12),O=t.yAt(i.wx(k,F),i.wz(k,F));i.cyl(k,O-r-.6,F,.17,.15,r-O+.6+1.1,6,Te,Gt(Ve,.8))}i.box(-s,-.78,F-.12,s,-.5,F+.12,Te),i.quad(-s+.1,-2.6,F,s-.1,-.8,F,s-.1,-.6,F,-s+.1,-2.4,F,Gt(Te,.9))}for(const D of[-1,1]){const F=D*(s-.12);i.box(F-.05,1.02,0,F+.05,1.1,y,Ve,void 0,Te),i.box(F-.03,.52,0,F+.03,.58,y,Ve,void 0,Te)}i.box(-s,-.14,-s,s,0,.01,Ve,void 0,Te)}const[p,_]=n[n.length-1],[m,g]=n[n.length-2],S=Math.atan2(p-m,_-g);i.frame(p,r,_,S),i.box(-3.2,-.14,0,3.2,0,5.2,Gt(Ve,.96),void 0,Te);for(const[x,M]of[[-3.05,.2],[3.05,.2],[-3.05,5],[3.05,5],[0,5]]){const E=t.yAt(i.wx(x,M),i.wz(x,M));i.cyl(x,E-r-.6,M,.19,.17,r-E+.6+(x===0?0:1.1),6,Te,Gt(Ve,.8))}i.box(-3.1,1.02,4.9,3.1,1.1,5,Ve,void 0,Te),i.box(-3.1,1.02,0,-3,1.1,5,Ve,void 0,Te),i.box(3,1.02,0,3.1,1.1,5,Ve,void 0,Te),i.cyl(2.6,0,4.5,.07,.05,4.6,5,ve),i.blob(2.6,4.75,4.5,.28,.2,.28,6,3,B(16773320),void 0,1.6),i.box(-.35,-3.6,5.22,-.3,.9,5.28,ve,null),i.box(.3,-3.6,5.22,.35,.9,5.28,ve,null);for(let x=-3.3;x<.6;x+=.42)i.box(-.3,x,5.22,.3,x+.05,5.28,ve);return i.frame(),{head:new X(p,r,_),points:n}}function Z_(i,t,e,n){const[s,r]=Tu(t,e,n,25),a=Math.atan2(s,r);i.frame(e,0,n,a);const o=4.2,l=-8,c=[];for(let p=l;p<=46;p+=3){const _=t.yAt(i.wx(0,p),i.wz(0,p));if(c.push([p,_]),_<-1.6*Xn)break}const h=c[0][1]+.12,u=Math.min(c[c.length-1][1]+.25,-.9*Xn),d=c[c.length-1][0],f=c.length-1;for(let p=0;p<f;p++){const _=l+(d-l)*p/f,m=l+(d-l)*(p+1)/f,g=h+(u-h)*p/f,S=h+(u-h)*(p+1)/f;i.quad(-o,g,_,-o,S,m,o,S,m,o,g,_,p%2?bs:Gt(bs,.94));for(const x of[-1,1])i.quad(x*o,g-1.5,_,x*o,S-1.5,m,x*o,S+.15,m,x*o,g+.15,_,Gt(bs,.8))}i.frame()}function K_(i,t,e){const[n,s]=Tu(t,e.cx,e.cz,60),r=e.obb;let a=r.heading,o=r.w,l=r.d,c=-1/0;for(let b=0;b<4;b++){const v=r.heading+b*Math.PI/2,y=Math.sin(v)*n+Math.cos(v)*s;y>c&&(c=y,a=v,o=b%2?r.d:r.w,l=b%2?r.w:r.d)}const h=o/2,u=l/2;i.frame(r.cx,e.floorY,r.cz,a);const d=B(13223611),f=B(15394522),p=B(6975604);i.box(-h,-4,-u,h,3.1,u,d,null),i.box(-h,3.1,-u,h,6.1,u,f,null);const _=Math.max(2,Math.floor(o/5));for(let b=0;b<_;b++){const v=-h+(b+.5)/_*o;i.quad(v-1.7,.05,u+.05,v+1.7,.05,u+.05,v+1.7,2.7,u+.05,v-1.7,2.7,u+.05,b%2?Es:ws)}i.quad(-h+.6,3.6,u+.05,h-.6,3.6,u+.05,h-.6,5.7,u+.05,-h+.6,5.7,u+.05,ur,.9),i.box(-h-.6,2.95,u,h+.6,3.12,u+3.4,bs,Ve,Gt(bs,.8)),i.box(-h-.6,3.12,u+3.32,h+.6,4.15,u+3.4,B(10469580),null);for(const b of[-h-.4,-h/3,h/3,h+.4])i.box(b-.12,-4,u+3,b+.12,2.95,u+3.24,ve,null);i.quad(-h-.8,7.5,u+3.8,h+.8,7.5,u+3.8,h+.8,6.2,-u-.6,-h-.8,6.2,-u-.6,p),i.quad(-h,6.1,u,h,6.1,u,h,7.1,u,-h,7.1,u,f),i.quad(h,6.1,u,h,6.1,-u,h,6.3,-u,h,7.1,u,f),i.quad(-h,6.1,-u,-h,6.1,u,-h,7.1,u,-h,6.3,-u,f);const m=h-2.2,g=u-1.8;i.box(m-1.8,6.1,g-1.8,m+1.8,9.2,g+1.8,f,null),i.box(m-1.85,9.2,g-1.85,m+1.85,10.5,g+1.85,ur,null,null,.7),i.box(m-2.3,10.5,g-2.3,m+2.3,10.72,g+2.3,p),i.cyl(m,10.72,g,.06,.04,5.2,5,xn),i.quad(m,15.6,g,m+1.9,15.6,g,m+1.9,14.5,g,m,14.5,g,Es),i.quad(m,14.5,g,m+1.9,14.5,g,m+1.9,13.4,g,m,13.4,g,ws);for(let b=0;b<4;b++){const v=-h+(b+.5)/4*o;i.quad(v+.9,3.9,-u-.05,v-.9,3.9,-u-.05,v-.9,5.3,-u-.05,v+.9,5.3,-u-.05,ur,b%2)}let S=u+14;for(;S<160&&t.metresAt(r.cx+n*S,r.cz+s*S)>1.75;)S+=3;const x=r.cx+n*S,M=r.cz+s*S,E=Math.atan2(n,s);i.frame(x,t.yAt(x,M),M,E);for(const b of[-1,1]){const v=b*32,y=t.yAt(i.wx(v,0),i.wz(v,0))-t.yAt(x,M);i.cyl(v,y,0,.05,.04,4.4,5,xn),i.quad(v,y+4.4,0,v+.95,y+4.4,0,v+.95,y+3.1,0,v,y+3.1,0,Es),i.quad(v,y+3.1,0,v+.95,y+3.1,0,v+.95,y+1.8,0,v,y+1.8,0,ws)}for(const[b,v]of[[-1.5,-5.5],[1.5,-5.5],[-1.5,-8.5],[1.5,-8.5]])i.cyl(b,0,v,.04,.04,2.2,4,ve);i.tri(-1.7,2.2,-5.3,1.7,2.2,-5.3,0,3,-7,Es),i.tri(1.7,2.2,-8.7,-1.7,2.2,-8.7,0,3,-7,Es),i.tri(1.7,2.2,-5.3,1.7,2.2,-8.7,0,3,-7,ws),i.tri(-1.7,2.2,-8.7,-1.7,2.2,-5.3,0,3,-7,ws),i.blob(6,.35,-6,.95,.4,2.1,8,3,B(14238751),B(15755818)),i.box(5.6,.3,-7.9,6.4,.95,-7.5,B(2763308));for(let b=0;b<4;b++)i.box(-7+b*.5,.2,-7.2,-6.85+b*.5,.75,-4.6,b%2?ws:B(3116992));return i.frame(),{beach:new X(x,t.yAt(x,M),M),seaward:[n,s]}}function Au(i,t){const e=i.length/2;let n=0;for(let a=0;a<e;a++){const o=(a+1)%e;n+=i[a*2]*i[o*2+1]-i[o*2]*i[a*2+1]}const s=n>0?1:-1,r=[];for(let a=0;a<e;a++){const o=(a+e-1)%e,l=(a+1)%e;let c=i[a*2]-i[o*2],h=i[a*2+1]-i[o*2+1],u=i[l*2]-i[a*2],d=i[l*2+1]-i[a*2+1];const f=Math.hypot(c,h)||1,p=Math.hypot(u,d)||1;c/=f,h/=f,u/=p,d/=p;const _=-h*s,m=c*s;let g=_-d*s,S=m+u*s;const x=Math.hypot(g,S)||1;g/=x,S/=x;const M=t/Math.max(.45,g*_+S*m);r.push(i[a*2]+g*M,i[a*2+1]+S*M)}return r}function $_(i,t,e){i.frame(0,e.floorY,0,0);const n=B(11111014),s=B(15328470),r=B(9410458);let a=1/0;for(let h=0;h<e.poly.length;h+=2)a=Math.min(a,t.yAt(e.poly[h],e.poly[h+1]));const o=e.poly.length/2;i.walls(e.poly,a-e.floorY-.3,3.2,n),i.walls(e.poly,3.2,6.2,s);const l=Au(e.poly,3.2),c=Au(e.poly,4.4);for(let h=0;h<o;h++){const u=(h+1)%o;i.quad(e.poly[h*2],6.6,e.poly[h*2+1],e.poly[u*2],6.6,e.poly[u*2+1],l[u*2],6.05,l[u*2+1],l[h*2],6.05,l[h*2+1],r)}if(i.walls(e.poly,6.2,6.6,Gt(s,.92)),i.walls(l,6.05,7.9,ur,.8),i.cap(l,7.9,Gt(r,1.08)),i.walls(c,7.9,8.3,Gt(r,.9)),i.cap(c,8.3,r),e.street){const h=e.street;i.frame(h.x,e.floorY,h.z,h.heading),i.quad(.6,.3,.06,h.length-.6,.3,.06,h.length-.6,5.6,.06,.6,5.6,.06,ur,.9),i.box(h.length*.3,3.3,0,h.length*.7,3.5,3.4,B(14263361),void 0,Gt(B(14263361),.8)),i.box(h.length*.3+.2,0,3.1,h.length*.3+.4,3.3,3.3,ve,null),i.box(h.length*.7-.4,0,3.1,h.length*.7-.2,3.3,3.3,ve,null)}i.frame()}function hn(i,t,e,n,s,r=Y_){const a=e.length,o=.22,l=s?a:a-1;for(let c=0;c<l;c++){const[h,u]=e[c],[d,f]=e[(c+1)%a];let p=-(f-u),_=d-h;const m=Math.hypot(p,_)||1;p=p/m*n*.5,_=_/m*n*.5;const g=t.yAt(h,u)+o,S=t.yAt(d,f)+o;i.quad(h+p,g,u+_,d+p,S,f+_,d-p,S,f-_,h-p,g,u-_,r)}}function J_(i,t,e,n,s){const r=[];for(let x=0;x<n.length;x+=2)r.push([n[x]/10,n[x+1]/10]);const[a,o]=Ea(n);let l=0,c=0,h=0;for(const[x,M]of r)l+=(x-a)**2,c+=(M-o)**2,h+=(x-a)*(M-o);const u=.5*Math.atan2(2*h,l-c),d=Math.cos(u),f=Math.sin(u);let p=0,_=0;for(const[x,M]of r)p=Math.max(p,Math.abs((x-a)*d+(M-o)*f)),_=Math.max(_,Math.abs(-(x-a)*f+(M-o)*d));p-=5,_-=5;const m=(x,M)=>[a+x*d-M*f,o+x*f+M*d],g=[];for(let x=0;x<72;x++){const M=x/72*Math.PI*2;g.push(m(Math.cos(M)*p,Math.sin(M)*_))}hn(t,e,g,.35,!0),hn(t,e,[m(-25,-25),m(25,-25),m(25,25),m(-25,25)],.3,!0);const S=x=>Array.from({length:24},(M,E)=>m(Math.cos(E/24*Math.PI*2)*x,Math.sin(E/24*Math.PI*2)*x));hn(t,e,S(5),.3,!0),hn(t,e,S(1.5),.3,!0);for(const x of[-1,1]){hn(t,e,[m(x*p,-3.2),m(x*(p-9),-3.2),m(x*(p-9),3.2),m(x*p,3.2)],.3,!1);const M=[];for(let E=-8;E<=8;E++){const b=E/8*1.05,v=x*(p-50*Math.cos(b)),y=50*Math.sin(b);(v/p)**2+(y/_)**2<1&&M.push(m(v,y))}M.length>2&&hn(t,e,M,.3,!1);for(const[E,b]of[[-3.2,9.5],[3.2,9.5],[-9.6,6.2],[9.6,6.2]]){const[v,y]=m(x*p,E);i.frame(v,e.yAt(v,y),y,0),i.cyl(0,0,0,.11,.09,b,6,xn),i.cyl(0,0,0,.2,.2,1.6,6,E*E<12?B(2973608):B(12597806))}}if(s)for(const[x,M]of[[-.62,-1],[.62,-1],[-.62,1],[.62,1]]){const[E,b]=m(x*(p+6),M*(_+9));i.frame(E,e.yAt(E,b),b,Math.atan2(a-E,o-b)),i.cyl(0,0,0,.28,.16,24,6,ve),i.box(-1.7,24,-.2,1.7,25.3,.2,B(4869972)),i.quad(-1.6,24.1,.22,1.6,24.1,.22,1.6,25.2,.22,-1.6,25.2,.22,B(16774876),2.2)}i.frame()}function Q_(i,t,e,n,s){const r=[];for(let M=0;M<n.length;M+=2)r.push([n[M]/10,n[M+1]/10]);if(r.length<4)return;if(s==="bowls"){hn(t,e,r,.5,!0,B(15328986));return}const[a,o,l,c]=r,h=Math.hypot(o[0]-a[0],o[1]-a[1])>Math.hypot(l[0]-o[0],l[1]-o[1]),u=h?a:o,d=h?o:l,f=h?l:c,p=h?c:a,_=(M,E)=>{const b=u[0]+(d[0]-u[0])*M,v=u[1]+(d[1]-u[1])*M,y=p[0]+(f[0]-p[0])*M,w=p[1]+(f[1]-p[1])*M;return[b+(y-b)*E,v+(w-v)*E]},m=.14;hn(t,e,[_(0,0),_(1,0),_(1,1),_(0,1)],m,!0),hn(t,e,[_(0,.125),_(1,.125)],m,!1),hn(t,e,[_(0,.875),_(1,.875)],m,!1),hn(t,e,[_(.23,.125),_(.23,.875)],m,!1),hn(t,e,[_(.77,.125),_(.77,.875)],m,!1),hn(t,e,[_(.23,.5),_(.77,.5)],m,!1);const g=_(.5,-.04),S=_(.5,1.04),x=e.yAt(g[0],g[1])+.2;i.frame(0,x,0,0),i.quad(g[0],0,g[1],S[0],0,S[1],S[0],.95,S[1],g[0],.95,g[1],B(2830131)),i.quad(g[0],.95,g[1],S[0],.95,S[1],S[0],1.05,S[1],g[0],1.05,g[1],xn);for(const M of[g,S])i.cyl(M[0],0,M[1],.06,.06,1.1,5,ve);i.frame()}const ai=[14826299,15764004,15909424,5025616,3117008,8280002].map(B);function j_(i,t,e,n,s){const[r,a]=Ea(e),o=t.yAt(r,a)+.05,l=s()*Math.PI;i.frame(r,o,a,l);const c=(d,f,p,_)=>{for(const[m,g]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.cyl(d+m,0,f+g,.07,.07,p+2,5,B(8018492));i.box(d-1,p-.1,f-1,d+1,p,f+1,Ve,void 0,Te),i.cyl(d,p+2,f,1.5,0,1,4,_)};c(-2.2,0,1.5,ai[0]),c(2.2,0,2.1,ai[4]),i.box(-1.2,1.4,-.35,1.2,1.5,.35,Ve),i.quad(3.2,2.1,-.4,6.4,.15,-.4,6.4,.15,.4,3.2,2.1,.4,ai[2]),i.quad(-3.2,1.5,.4,-5.6,.15,.4,-5.6,.15,-.4,-3.2,1.5,-.4,ai[1]);const h=0,u=5.2;for(const d of[-2.2,2.2])i.quad(h+d,0,u-1.1,h+d+.08,0,u-1.1,h+d+.08,2.6,u,h+d,2.6,u,ve),i.quad(h+d,0,u+1.1,h+d+.08,0,u+1.1,h+d+.08,2.6,u,h+d,2.6,u,ve);i.box(h-2.25,2.55,u-.05,h+2.25,2.65,u+.05,ai[3]);for(const d of[-1.1,0,1.1])i.box(h+d-.25,.5,u-.1,h+d+.25,.56,u+.1,B(2763308)),i.box(h+d-.24,.56,u-.01,h+d-.22,2.55,u+.01,ve,null),i.box(h+d+.22,.56,u-.01,h+d+.24,2.55,u+.01,ve,null);if(n){i.cyl(-6.5,0,-5.5,.09,.07,5.2,5,ve);for(let d=0;d<6;d++){const f=d/6*Math.PI*2,p=-6.5+Math.cos(f)*3.2,_=-5.5+Math.sin(f)*3.2;i.quad(p-.04,0,_,p+.04,0,_,-6.46,5.1,-5.5,-6.54,5.1,-5.5,B(3104672))}for(let d=0;d<6;d++){const f=-9+d*3.4,p=ai[d],_=4.6,m=3.3;i.cyl(f,0,-11,.08,.07,_,5,ve),i.cyl(f+1.7,0,-7.2,.08,.07,m,5,ve),i.tri(f,_,-11,f+3.4,_,-11,f+1.7,m,-7.2,p)}i.cyl(11.399999999999999,0,-11,.08,.07,4.6,5,ve),i.cyl(6.5,.3,5.5,1.3,1.3,.12,10,ai[5],ai[2]),i.cyl(6.5,0,5.5,.1,.1,1.1,5,ve);for(let d=0;d<3;d++)i.blob(9.5+d*1.6,.55,-1.5,.3,.3,.55,5,3,ai[(d*2+1)%6])}i.frame()}function tv(i,t,e){const n=[];for(let u=0;u<e.length;u+=2)n.push([e[u]/10,e[u+1]/10]);const[s,r]=Ea(e),a=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1])>Math.hypot(n[2][0]-n[1][0],n[2][1]-n[1][1])?[n[0],n[1]]:[n[1],n[2]],o=Math.atan2(a[1][0]-a[0][0],a[1][1]-a[0][1]),l=Math.hypot(a[1][0]-a[0][0],a[1][1]-a[0][1])/2-1;i.frame(s,t.yAt(s,r)+.1,r,o);const c=B(13092286),h=Gt(c,.88);for(const u of[-1,1]){const d=u*l,f=[[0,0],[1.4,.35],[2.4,1.1],[3,2]];for(let p=0;p<3;p++){const[_,m]=f[p],[g,S]=f[p+1],x=d-u*(3-_),M=d-u*(3-g);u>0?i.quad(-4,m,x,4,m,x,4,S,M,-4,S,M,p%2?c:h):i.quad(4,m,x,-4,m,x,-4,S,M,4,S,M,p%2?c:h)}i.box(-4,0,Math.min(d,d+u*1.2),4,2,Math.max(d,d+u*1.2),h,c)}i.box(-1.5,0,-1.2,1.5,.45,1.2,h,c),i.quad(-1.5,.45,1.2,1.5,.45,1.2,1.5,0,3,-1.5,0,3,c),i.quad(1.5,.45,-1.2,-1.5,.45,-1.2,-1.5,0,-3,1.5,0,-3,c),i.box(3.2,.45,-2.5,3.28,.5,2.5,ve),i.frame()}function ev(i,t){const e=t.obb,n=e.w>=e.d,s=(n?e.w:e.d)/2;i.frame(e.cx,t.floorY,e.cz,e.heading);const r=n?s+1.2:0,a=n?0:s+1.2,o=B(15262418);i.box(r-1.4,-1,a-1.4,r+1.4,t.wallH+4.6,a+1.4,o,null),i.cyl(r,t.wallH+4.6,a,2.1,0,4.2,4,B(5922659)),i.box(r-.07,t.wallH+8.8,a-.07,r+.07,t.wallH+10.6,a+.07,xn),i.box(r-.5,t.wallH+9.8,a-.07,r+.5,t.wallH+9.95,a+.07,xn),i.frame()}function nv(i,t,e,n){i.frame(e,t.yAt(e,n),n,.4);const s=46;for(let r=0;r<6;r++){const a=r/6*s,o=1.5-r/6*1.1,l=1.5-(r+1)/6*1.1;i.cyl(0,a,0,o,l,s/6,3,r%2?xn:Es)}i.cyl(0,s,0,.08,.05,5,4,ve),i.blob(0,s+5.1,0,.3,.3,.3,5,3,B(16726832),void 0,2.5);for(const[r,a]of[[.3,38],[2.4,35],[4.4,40]])i.cyl(Math.cos(r)*.9,a,Math.sin(r)*.9,.55,.55,.35,8,xn,xn);i.box(2.5,0,-1.5,5.5,2.6,1.5,B(13619919),B(9080716)),i.frame()}function iv(i,t,e,n,s){const r=s.nearest(e,n,60),a=r?Math.atan2(r.px-e,r.pz-n):0;i.frame(e,t.yAt(e,n)+.1,n,a);const o=B(3116874);for(const[l,c]of[[-6,3.5],[6,3.5],[-6,9.5],[6,9.5]])i.box(l-.2,0,c-.2,l+.2,5,c+.2,xn,null);i.box(-8,5,2,8,5.25,11,xn,B(14277590),B(15921902),.5),i.box(-8.05,5.25,1.95,8.05,5.9,11.05,o,B(14277590));for(const l of[-4,0,4])i.box(l-1.3,0,6.2,l+1.3,.2,6.8,bs),i.box(l-.4,.2,6.25,l+.4,1.7,6.75,xn,o);i.frame()}function sv(i,t,e,n,s){for(let r=0;r<3;r++){const a=e+(s()-.5)*16,o=n+(s()-.5)*16;i.frame(a,t.yAt(a,o)+.05,o,s()*Math.PI),i.box(-1,.7,-.4,1,.78,.4,Ve,void 0,Te),i.box(-1,.4,-.85,1,.46,-.6,Ve,void 0,Te),i.box(-1,.4,.6,1,.46,.85,Ve,void 0,Te),i.box(-.75,0,-.7,-.65,.7,.7,ve,null),i.box(.65,0,-.7,.75,.7,.7,ve,null)}i.frame()}function rv(i){if(!i.hasDetail)return null;const{town:t,hf:e,roads:n,paths:s}=i,r=new ee,a=Ne(4411),o=[12597547,3108687,15921902,3426654,9268810,14266938,10134443].map(B),l=B(7301730),c=B(3103290),h=[B(13115434),B(15254046)],u=t.houses,d=Mu(t),f=[];for(let b=0;b<u.length;b+=wl)u[b+5]!==1&&f.push(u[b]/4,u[b+1]/4);const p=f.length;for(const[,b,,,,,,v]of Cl)v!=="s"&&b[2]>=5&&f.push(b[0],b[1]);for(let b=0;b<f.length;b+=2){const v=f[b],y=f[b+1];if(!i.isDetail(v,y)||i.isClear(v,y))continue;const w=n.nearest(v,y,45),T=a()<.5?-1:1,C=T*(2.5+a()*2.5),D=Math.floor(a()*o.length),F=a()<.7;if(!w||b<p&&d(v,y))continue;const P=w.cls<=3?6.4:3.6;if(w.dist<P+3)continue;const k=(v-w.px)/w.dist,O=(y-w.pz)/w.dist,G=-O,W=k,U=Math.atan2(k,O),L=w.px+k*P+G*C,N=w.pz+O*P+W*C;if(!i.isClear(L,N)&&(r.frame(L,e.yAt(L,N),N,U),r.box(-.05,0,-.05,.05,.95,.05,l),r.box(-.17,.95,-.22,.17,1.22,.22,o[D],Gt(o[D],.8)),F)){const K=w.px+k*(P-1.1)+G*(C+T*1.5),it=w.pz+O*(P-1.1)+W*(C+T*1.5);r.frame(K,e.yAt(K,it),it,U),h.forEach((Y,V)=>{r.box(V*.72-.28,0,-.33,V*.72+.28,.96,.33,c),r.box(V*.72-.3,.96,-.36,V*.72+.3,1.04,.36,Y)})}}const _=B(7034692),m=B(5917242),g=B(2829102),S=B(14276303),x=42,M=new ee;for(const b of s){if(b.cls>3||b.flags)continue;const v=b.pts.length/3;let y=x*.4,w=null;for(let T=1;T<v;T++){const C=b.pts[T*3-3],D=b.pts[T*3-1],F=b.pts[T*3],P=b.pts[T*3+2],k=Math.hypot(F-C,P-D);if(y+=k,y<x)continue;y=0;const O=(F-C)/(k||1),G=(P-D)/(k||1),W=b.width/2+2.5,U=F+G*W,L=P-O*W;if(!i.isDetail(U,L)||i.isClear(U,L)||!e.inside(U,L,20)){w=null;continue}const N=e.yAt(U,L);M.frame(U,N,L,Math.atan2(O,G)),M.cyl(0,0,0,.15,.1,9.2,6,_),M.box(-1.15,8.45,-.06,1.15,8.58,.06,m);for(const it of[-.95,0,.95])M.box(it-.04,8.58,-.04,it+.04,8.72,.04,S);const K={x:U,y:N+8.72,z:L,nx:G,nz:-O};if(w&&Math.hypot(K.x-w.x,K.z-w.z)<x*1.8){M.frame();for(const it of[-.95,0,.95]){const Y=w.x+w.nx*it,V=w.z+w.nz*it,$=K.x+K.nx*it,tt=K.z+K.nz*it,nt=(Y+$)/2,ct=(V+tt)/2,It=(w.y+K.y)/2-.5;for(const[xt,Lt,Bt,Nt,$t,Wt]of[[Y,w.y,V,nt,It,ct],[nt,It,ct,$,K.y,tt]])M.quad(xt,Lt,Bt,Nt,$t,Wt,Nt,$t+.035,Wt,xt,Lt+.035,Bt,g),M.quad(xt,Lt,Bt,Nt,$t,Wt,Nt+K.nx*.035,$t,Wt+K.nz*.035,xt+K.nx*.035,Lt,Bt+K.nz*.035,g)}}w=K}}if(!r.vertexCount&&!M.vertexCount)return null;const E=new Zt(r.build(),_s());if(E.castShadow=!0,E.receiveShadow=!0,E.name="street-detail",M.vertexCount){const b=new Zt(M.build(),_s());b.castShadow=!1,b.receiveShadow=!0,b.name="power-poles",E.add(b)}return E}function av(i){const{town:t,hf:e,paths:n}=i,s=120,r=new Map,a=t.houses;for(let C=0;C<a.length;C+=wl){const D=Math.floor(a[C]/4/s)*4096+Math.floor(a[C+1]/4/s)+8390656;r.set(D,(r.get(D)??0)+1)}const[o,l]=gn(t.meta,-38.63385,145.7285),c=(C,D)=>(r.get(Math.floor(C/s)*4096+Math.floor(D/s)+2048*4097)??0)>=4||Math.hypot(C-o,D-l)<380,h=[];for(const C of n){if(C.cls>2||C.flags)continue;const D=C.cls===0?48:58,F=C.pts.length/3;let P=D*.5,k=1;for(let O=1;O<F;O++){const G=C.pts[O*3-3],W=C.pts[O*3-1],U=C.pts[O*3],L=C.pts[O*3+2],N=Math.hypot(U-G,L-W);if(P+=N,P<D)continue;P=0,k=-k;const K=(U-G)/(N||1),it=(L-W)/(N||1),Y=C.width/2+1.6,V=U-it*Y*k,$=L+K*Y*k;!c(V,$)||!e.inside(V,$,20)||i.isClear(V,$)||h.push(V,e.yAt(V,$),$,Math.atan2(it*k,-K*k))}}const u=new ee,d=B(9278358);u.cyl(0,0,0,.11,.07,8.2,5,d),u.box(-.05,8.1,0,.05,8.22,2.2,d),u.box(-.22,8,1.7,.22,8.14,2.5,B(5922659)),u.quad(-.2,7.99,2.48,.2,7.99,2.48,.2,7.99,1.72,-.2,7.99,1.72,B(16773320),3);const f=h.length/4,p=new Je(u.build(),_s(),f),_=document.createElement("canvas");_.width=_.height=64;const m=_.getContext("2d"),g=m.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,"rgba(255,214,150,0.85)"),g.addColorStop(.45,"rgba(255,196,120,0.32)"),g.addColorStop(1,"rgba(255,180,100,0)"),m.fillStyle=g,m.fillRect(0,0,64,64);const S=new tl(_);S.colorSpace=Pe;const x=new kn(34,34);x.rotateX(-Math.PI/2);const M=new Cn({map:S,transparent:!0,opacity:0,blending:Da,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),E=new Je(x,M,f);E.renderOrder=3;const b=new ne,v=new En,y=new X(0,1,0),w=new X(1,1,1),T=new X;for(let C=0;C<f;C++){const D=h[C*4],F=h[C*4+1],P=h[C*4+2],k=h[C*4+3];v.setFromAxisAngle(y,k),p.setMatrixAt(C,b.compose(T.set(D,F,P),v,w));const O=D+Math.sin(k)*2.1,G=P+Math.cos(k)*2.1;E.setMatrixAt(C,b.compose(T.set(O,e.yAt(O,G)+.5,G),v.identity(),w))}return p.castShadow=!1,p.computeBoundingSphere(),E.computeBoundingSphere(),E.onBeforeRender=()=>{M.opacity=da.value*.9},E.visible=!0,{lights:p,pools:E,poolMat:M}}function ov(i){const{town:t,hf:e,footprints:n,roads:s}=i,r=new en;r.name="landmarks";const a=new ee,o=new ee,l=Ne(20261111),c={group:r,nightMaterials:[]};t.piers[0]&&(c.jetty=q_(a,e,t.piers[0]));for(const[y,w]of[[-38.63578,145.73393],[-38.63595,145.73085]]){const[T,C]=gn(t.meta,y,w);Z_(a,e,T,C)}const h=n.find(y=>y.name==="Inverloch Surf Life Saving Club");h&&(c.surf=K_(a,e,h));const u=n.find(y=>y.name==="The Hub");u&&$_(a,e,u);for(const y of n)y.kind==="church"&&ev(a,y);let d=0;for(const y of t.pitches)y.s==="australian_football"?J_(a,o,e,y.p,d++===0):y.s==="tennis"||y.s==="bowls"?Q_(a,o,e,y.p,y.s):y.s==="skateboard"&&tv(a,e,y.p);const[f,p]=gn(t.meta,-38.63529,145.72876);for(const y of t.playgrounds){const[w,T]=Ea(y);j_(a,e,y,Math.hypot(w-f,T-p)<60,l)}const[_,m]=gn(t.meta,-38.62462,145.71011);nv(a,e,_,m);const[g,S]=gn(t.meta,-38.63161,145.72943);iv(a,e,g,S,s);for(const[y,w]of[[-38.6358,145.72885],[-38.63447,145.72923],[-38.63545,145.72875]]){const[T,C]=gn(t.meta,y,w);sv(a,e,T,C,l)}const x=new Zt(a.build(),_s());x.castShadow=!0,x.receiveShadow=!0,r.add(x);const M=o.build();M.deleteAttribute("glow");const E=new Zt(M,fa(new Cn({vertexColors:!0,side:Re,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})));r.add(E);const b=rv(i);b&&r.add(b);const v=av(i);return r.add(v.lights,v.pools),c.nightMaterials.push(v.poolMat),c}const lv=Vt.lights_fragment_begin.replace("getDirectionalLightInfo( directionalLight, directLight );",`getDirectionalLightInfo( directionalLight, directLight );
    // The atmosphere owns the scene's only directional light.
    directLight.color *= cloudSunlight(vCoastalWorld);`),cv=`
  vec4 coastalPosition = vec4(transformed, 1.0);
  #ifdef USE_BATCHING
    coastalPosition = batchingMatrix * coastalPosition;
  #endif
  #ifdef USE_INSTANCING
    coastalPosition = instanceMatrix * coastalPosition;
  #endif
  vCoastalWorld = (modelMatrix * coastalPosition).xyz;
`,hv=`
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
`;class uv{constructor(t,e,n,s,r,a,o){Z(this,"prepared",new WeakSet);Z(this,"inlet",{value:new X});Z(this,"mist");this.color=n,this.clouds=r,this.sunDir=a,this.cloudShadowStrength=o,this.inlet.value.set(t,0,e),this.mist={value:Number(s)}}setMist(t){this.mist.value=Number(t)}setWaterLevel(t){this.inlet.value.y=t}add(t){t.traverse(e=>{const{material:n}=e;if(n)for(const s of Array.isArray(n)?n:[n])this.prepare(s)})}addWater(t){this.prepare(t.material,!0)}prepare(t,e=!1){if(!t.toneMapped||this.prepared.has(t)||t instanceof nn&&!e)return;this.prepared.add(t);const n=t.onBeforeCompile,s=t.customProgramCacheKey();t.customProgramCacheKey=()=>s+(e?":coastal-water-cloud":":coastal-haze-cloud"),t.onBeforeCompile=(r,a)=>{n.call(t,r,a),r.uniforms.uCoastalColor=this.color,r.uniforms.uInletCenter=this.inlet,r.uniforms.uCoastalMist=this.mist;const o=e||t instanceof Pn||t instanceof jr||t instanceof ap||t instanceof op;o&&Object.assign(r.uniforms,this.clouds.uniforms,{uCloudSunDir:this.sunDir,uCloudShadowStrength:this.cloudShadowStrength});const l=(o?cu+Qx:"")+hv;e||(r.vertexShader=`varying vec3 vCoastalWorld;
`+r.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
`+cv));const c=e?r.fragmentShader.replace("varying vec3 vW;","").replace("col += uSunColor *",`float sunlight = cloudSunlight(vW);
          col *= mix(1.0, sunlight, 0.22);
          col += uSunColor * sunlight *`):o?r.fragmentShader.replace("#include <lights_fragment_begin>",lv):r.fragmentShader;r.fragmentShader=(e?l.replace(/vCoastalWorld/g,"vW"):l)+c.replace("#include <tonemapping_fragment>",`gl_FragColor.rgb = coastalLight(gl_FragColor.rgb);
#include <tonemapping_fragment>`)},t.needsUpdate=!0}}const Ru=330;function ki(i,t){let e=Math.imul(i^t,73244475);return e=Math.imul(e^e>>>16,73244475),((e^e>>>16)>>>0)/4294967296}function Ts(i,t){const e=Math.min(1,Math.max(0,i/t));return e*e*(3-2*e)}class dv{constructor(){Z(this,"window",0);Z(this,"age",0);Z(this,"duration",0);Z(this,"rain",0);Z(this,"wetness",0);Z(this,"cover",.38);Z(this,"storm",!1)}update(t){this.window=Math.floor(t/Ru);const e=90+48*ki(this.window,17);this.duration=60+22*ki(this.window,29),this.age=t-this.window*Ru-e;const n=this.age-this.duration,s=Ts(this.age+42,42)*(1-Ts(n,36));this.storm=this.window%4===0,this.cover=.38+(this.storm?.6:.4)*s;const r=this.storm?.97:.55+.15*ki(this.window,41);this.rain=r*Ts(this.age,9)*(1-Ts(n+14,14)),this.wetness=Ts(this.age,23)*(1-Ts(n,68))}}const Ul=[18,45],wa=8;class fv{constructor(t,e,n){Z(this,"line");Z(this,"vertices",new Float32Array((wa+1)*2*3));Z(this,"center",new Ct);Z(this,"key");Z(this,"previousTime");Z(this,"arrival");this.inletX=e,this.inletZ=n;const s=new Ee;s.setAttribute("position",new ye(this.vertices,3).setUsage(Os));const r=[];for(let a=0;a<wa;a++){const o=2*a;r.push(o,o+1,o+2,o+1,o+3,o+2)}s.setIndex(r),this.line=new Zt(s,new Cn({color:15002367,transparent:!0,depthWrite:!1,side:Re})),this.line.material.forceSinglePass=!0,this.line.name="inlet lightning",this.line.visible=!1,t.add(this.line)}shape(t,e){const n=this.inletX+640*(ki(t,3)-.5),s=this.inletZ+490*(ki(t,13)-.5);this.center.set(n,s);const r=Math.atan2(e.x-n,e.z-s),a=Math.cos(r),o=-Math.sin(r);for(let l=0;l<=wa;l++){const c=l/wa,h=n+34*c+33*(ki(t,60+l)-.5),u=s+18*(ki(t,30+l)-.5),d=422-400*c;for(let f=0;f<2;f++){const p=(f?1:-1)*(1.9-c*1.1),_=3*(2*l+f);this.vertices[_]=h+p*a,this.vertices[_+1]=d,this.vertices[_+2]=u+p*o}}this.line.geometry.attributes.position.needsUpdate=!0,this.line.geometry.computeBoundingSphere()}update(t,e,n,s){const r=this.previousTime;this.previousTime=t,this.line.visible=!1;const a=r!==void 0&&t>=r&&t-r<1.5&&!document.hidden;if(a||(this.arrival=void 0),!e.storm||e.age<Ul[0])return 0;const o=e.age>=Ul[1]?1:0,l=e.age-Ul[o],c=e.window*2+o;if(c!==this.key&&(this.key=c,this.shape(c,n),a&&l<.45)){const u=Math.hypot(this.center.x-n.x,110-n.y,this.center.y-n.z);u<6500&&(this.arrival=t-l+Math.max(.35,u/343))}if(this.arrival!==void 0&&t>=this.arrival){this.arrival=void 0;const u=Math.hypot(this.center.x-n.x,this.center.y-n.z);s==null||s(Kt.clamp(1-u/7e3,.1,1))}const h=Math.max(0,1-l/.32);return this.line.visible=h>0,this.line.material.opacity=h,h}dispose(){this.line.removeFromParent(),this.line.geometry.dispose(),this.line.material.dispose()}}const Cu="dmFyIFY9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBIPShULHAseik9PnAgaW4gVD9WKFQscCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6en0pOlRbcF09ejt2YXIgTT0oVCxwLHopPT5IKFQsdHlwZW9mIHAhPSJzeW1ib2wiP3ArIiI6cCx6KTsoZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgcHtjb25zdHJ1Y3RvcihlLG4sdCxyLHMsaCxvLGEpe00odGhpcywibngiKTtNKHRoaXMsIm56Iik7TSh0aGlzLCJ5Iik7TSh0aGlzLCJ4TWluIik7TSh0aGlzLCJ6TWluIik7TSh0aGlzLCJ4TWF4Iik7TSh0aGlzLCJ6TWF4Iik7TSh0aGlzLCJkeCIpO00odGhpcywiZHoiKTtNKHRoaXMsImNlbGxYIik7TSh0aGlzLCJjZWxsWiIpO2lmKHRoaXMucmF3PWUsdGhpcy5leHBvc3VyZT1uLHRoaXMudz10LHRoaXMuaD1yLHRoaXMuc2l6ZVg9cyx0aGlzLnNpemVaPWgsdGhpcy5jZWxsWD1zL3QsdGhpcy5jZWxsWj1oL3IsdGhpcy5ueD1NYXRoLmZsb29yKCh0LTEpL28pKzEsdGhpcy5uej1NYXRoLmZsb29yKChyLTEpL28pKzEsdGhpcy5keD10aGlzLmNlbGxYKm8sdGhpcy5kej10aGlzLmNlbGxaKm8sdGhpcy54TWluPS1zLzIrdGhpcy5jZWxsWC8yLHRoaXMuek1pbj0taC8yK3RoaXMuY2VsbFovMix0aGlzLnhNYXg9dGhpcy54TWluKyh0aGlzLm54LTEpKnRoaXMuZHgsdGhpcy56TWF4PXRoaXMuek1pbisodGhpcy5uei0xKSp0aGlzLmR6LHRoaXMueT1hPz9uZXcgRmxvYXQzMkFycmF5KHRoaXMubngqdGhpcy5ueiksIWEpZm9yKGxldCBkPTA7ZDx0aGlzLm56O2QrKylmb3IobGV0IGM9MDtjPHRoaXMubng7YysrKXRoaXMueVtkKnRoaXMubngrY109ZVtkKm8qdCtjKm9dKjEuNX15QXQoZSxuKXtsZXQgdD0oZS10aGlzLnhNaW4pL3RoaXMuZHgscj0obi10aGlzLnpNaW4pL3RoaXMuZHo7dDwwP3Q9MDp0PnRoaXMubngtMS4wMDAxJiYodD10aGlzLm54LTEuMDAwMSkscjwwP3I9MDpyPnRoaXMubnotMS4wMDAxJiYocj10aGlzLm56LTEuMDAwMSk7Y29uc3Qgcz10fDAsaD1yfDAsbz10LXMsYT1yLWgsZD1oKnRoaXMubngrcyxjPXRoaXMueVtkXSxsPXRoaXMueVtkKzFdLGY9dGhpcy55W2QrdGhpcy5ueF0sdT10aGlzLnlbZCt0aGlzLm54KzFdO3JldHVybiBvK2E8PTE/YysobC1jKSpvKyhmLWMpKmE6dSsoZi11KSooMS1vKSsobC11KSooMS1hKX1iaWxpbmVhcihlLG4sdCl7bGV0IHI9KG4rdGhpcy5zaXplWC8yKS90aGlzLmNlbGxYLS41LHM9KHQrdGhpcy5zaXplWi8yKS90aGlzLmNlbGxaLS41O3I8MD9yPTA6cj50aGlzLnctMS4wMDAxJiYocj10aGlzLnctMS4wMDAxKSxzPDA/cz0wOnM+dGhpcy5oLTEuMDAwMSYmKHM9dGhpcy5oLTEuMDAwMSk7Y29uc3QgaD1yfDAsbz1zfDAsYT1yLWgsZD1zLW8sYz1vKnRoaXMudytoO3JldHVybihlW2NdKigxLWEpK2VbYysxXSphKSooMS1kKSsoZVtjK3RoaXMud10qKDEtYSkrZVtjK3RoaXMudysxXSphKSpkfW1ldHJlc0F0KGUsbil7cmV0dXJuIHRoaXMuYmlsaW5lYXIodGhpcy5yYXcsZSxuKX1leHBvc3VyZUF0KGUsbil7cmV0dXJuIHRoaXMuYmlsaW5lYXIodGhpcy5leHBvc3VyZSxlLG4pfWluc2lkZShlLG4sdD0wKXtyZXR1cm4gZT50aGlzLnhNaW4rdCYmZTx0aGlzLnhNYXgtdCYmbj50aGlzLnpNaW4rdCYmbjx0aGlzLnpNYXgtdH19Y29uc3Qgej0xMjg7ZnVuY3Rpb24gRChpLGUsbil7Y29uc3R7bng6dCxuejpyfT1pLHM9TWF0aC5taW4oeisxLHQtZSksaD1NYXRoLm1pbih6KzEsci1uKSxvPW5ldyBGbG9hdDMyQXJyYXkocypoKjMpLGE9bmV3IEZsb2F0MzJBcnJheShzKmgqMyksZD1uZXcgRmxvYXQzMkFycmF5KHMqaCoyKTtmb3IobGV0IGY9bjtmPG4raDtmKyspZm9yKGxldCB1PWU7dTxlK3M7dSsrKXtjb25zdCB3PShmLW4pKnMrdS1lLHg9aS54TWluK3UqaS5keCx5PWkuek1pbitmKmkuZHo7b1t3KjNdPXgsb1t3KjMrMV09aS55W2YqdCt1XSxvW3cqMysyXT15LGRbdyoyXT0oeCtpLnNpemVYLzIpL2kuc2l6ZVgsZFt3KjIrMV09MS0oeStpLnNpemVaLzIpL2kuc2l6ZVo7Y29uc3Qgdj1pLnlbZip0K01hdGgubWF4KHUtMSwwKV0sRT1pLnlbZip0K01hdGgubWluKHUrMSx0LTEpXSxiPWkueVtNYXRoLm1heChmLTEsMCkqdCt1XSxBPWkueVtNYXRoLm1pbihmKzEsci0xKSp0K3VdLG09KEUtdikvKDIqaS5keCksaz0oQS1iKS8oMippLmR6KSxnPU1hdGguaHlwb3QobSwxLGspO2FbdyozXT0tbS9nLGFbdyozKzFdPTEvZyxhW3cqMysyXT0tay9nfWNvbnN0IGM9bmV3IFVpbnQxNkFycmF5KChzLTEpKihoLTEpKjYpO2xldCBsPTA7Zm9yKGxldCBmPTA7ZjxoLTE7ZisrKWZvcihsZXQgdT0wO3U8cy0xO3UrKyl7Y29uc3Qgdz1mKnMrdSx4PXcrMSx5PXcrcyx2PXkrMTtjW2wrK109dyxjW2wrK109eSxjW2wrK109eCxjW2wrK109eCxjW2wrK109eSxjW2wrK109dn1yZXR1cm57cG9zOm8sbm9yOmEsdXY6ZCxpZHg6Y319ZnVuY3Rpb24gUyhpKXtjb25zdCBlPVtdO2ZvcihsZXQgbj0wO248aS5uei0xO24rPXopZm9yKGxldCB0PTA7dDxpLm54LTE7dCs9eillLnB1c2goRChpLHQsbikpO3JldHVybiBlfWZ1bmN0aW9uIFUoaSl7Y29uc3QgZT1hdG9iKGkpLG49bmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpO2ZvcihsZXQgdD0wO3Q8ZS5sZW5ndGg7dCsrKW5bdF09ZS5jaGFyQ29kZUF0KHQpO3JldHVybiBuZXcgSW50MTZBcnJheShuLmJ1ZmZlciwwLG4ubGVuZ3RoPj4xKX1hc3luYyBmdW5jdGlvbiBCKGkpe2NvbnN0IGU9bmV3IFVpbnQ4QXJyYXkoaSksbj1uZXcgRGF0YVZpZXcoaSk7bGV0IHQ9OCxyPTAscz0wLGg9MCxvPTAsYT0wO2NvbnN0IGQ9W107Zm9yKDt0PGUubGVuZ3RoOyl7Y29uc3QgeD1uLmdldFVpbnQzMih0KSx5PVN0cmluZy5mcm9tQ2hhckNvZGUoZVt0KzRdLGVbdCs1XSxlW3QrNl0sZVt0KzddKTtpZih5PT09IklIRFIiKXI9bi5nZXRVaW50MzIodCs4KSxzPW4uZ2V0VWludDMyKHQrMTIpLGg9ZVt0KzE2XSxvPWVbdCsxN10sYT1lW3QrMjBdO2Vsc2UgaWYoeT09PSJJREFUIilkLnB1c2goZS5zdWJhcnJheSh0KzgsdCs4K3gpKTtlbHNlIGlmKHk9PT0iSUVORCIpYnJlYWs7dCs9MTIreH1pZihoIT09OHx8byE9PTImJm8hPT02fHxhKXRocm93IG5ldyBFcnJvcigiVW5zdXBwb3J0ZWQgdGVycmFpbiBpbWFnZSBmb3JtYXQiKTtjb25zdCBjPW89PT0yPzM6NCxsPW5ldyBCbG9iKGQpLnN0cmVhbSgpLnBpcGVUaHJvdWdoKG5ldyBEZWNvbXByZXNzaW9uU3RyZWFtKCJkZWZsYXRlIikpLGY9bmV3IFVpbnQ4QXJyYXkoYXdhaXQgbmV3IFJlc3BvbnNlKGwpLmFycmF5QnVmZmVyKCkpLHU9cipjLHc9bmV3IFVpbnQ4QXJyYXkodSpzKTtmb3IobGV0IHg9MDt4PHM7eCsrKXtjb25zdCB5PWZbeCoodSsxKV0sdj14Kih1KzEpKzEsRT14KnU7Zm9yKGxldCBiPTA7Yjx1O2IrKyl7Y29uc3QgQT1iPj1jP3dbRStiLWNdOjAsbT14PjA/d1tFLXUrYl06MCxrPWI+PWMmJng+MD93W0UtdStiLWNdOjA7bGV0IGc9Zlt2K2JdO2lmKHk9PT0xKWcrPUE7ZWxzZSBpZih5PT09MilnKz1tO2Vsc2UgaWYoeT09PTMpZys9QSttPj4xO2Vsc2UgaWYoeT09PTQpe2NvbnN0IEY9TWF0aC5hYnMobS1rKSxJPU1hdGguYWJzKEEtayksWj1NYXRoLmFicyhBK20tMiprKTtnKz1GPD1JJiZGPD1aP0E6STw9Wj9tOmt9d1tFK2JdPWcmMjU1fX1yZXR1cm57d2lkdGg6cixoZWlnaHQ6cyxjaGFubmVsczpjLGRhdGE6d319YXN5bmMgZnVuY3Rpb24gcShpLGUsbil7Y29uc3RbdCxyXT1hd2FpdCBQcm9taXNlLmFsbChbZmV0Y2goaS50b3duLHtzaWduYWw6bn0pLnRoZW4obD0+e2lmKCFsLm9rKXRocm93IG5ldyBFcnJvcigiQ291bGQgbm90IGxvYWQgdGhlIHRvd24gZGF0YSIpO3JldHVybiBsLmpzb24oKX0pLnRoZW4obD0+KGUoIlN0cmVldHMgYW5kIGJ1aWxkaW5ncyIpLGwpKSxmZXRjaChpLmhlaWdodCx7c2lnbmFsOm59KS50aGVuKGw9PntpZighbC5vayl0aHJvdyBuZXcgRXJyb3IoIkNvdWxkIG5vdCBsb2FkIHRoZSB0ZXJyYWluIik7cmV0dXJuIGwuYXJyYXlCdWZmZXIoKX0pLnRoZW4oQikudGhlbihsPT4oZSgiVGVycmFpbiIpLGwpKV0pO2lmKG4uYWJvcnRlZCl0aHJvdyBuLnJlYXNvbjtjb25zdHttZXRhOnN9PXQsaD1yLndpZHRoKnIuaGVpZ2h0LG89bmV3IEZsb2F0MzJBcnJheShoKSxhPW5ldyBGbG9hdDMyQXJyYXkoaCksZD1yLmNoYW5uZWxzO2ZvcihsZXQgbD0wO2w8aDtsKyspb1tsXT0oci5kYXRhW2wqZF08PDh8ci5kYXRhW2wqZCsxXSkvcy5oZWlnaHRTY2FsZS1zLmhlaWdodE9mZnNldCxhW2xdPXIuZGF0YVtsKmQrMl0vMjU1O2NvbnN0IGM9bmV3IHAobyxhLHMuZ3JpZFswXSxzLmdyaWRbMV0scy5zaXplWzBdLHMuc2l6ZVsxXSxpLnRlcnJhaW5TdGVwKTtyZXR1cm57dG93bjp7Li4udCxob3VzZXM6VSh0LmhvdXNlcyksY2FiaW5zOlUodC5jYWJpbnMpLGNhcnM6VSh0LmNhcnMpLHRyZWVzOlUodC50cmVlcyl9LGhlaWdodHM6byxleHBvc3VyZTphLHN1cmZhY2U6Yy55LHRlcnJhaW5UaWxlczpTKGMpfX1jb25zdCBqPXNlbGYsQz1uZXcgTWFwO2Z1bmN0aW9uIFgoaSxlPVtdKXtqLnBvc3RNZXNzYWdlKGksZSl9ZnVuY3Rpb24gTChpKXtyZXR1cm4gaS5tYXAoZT0+ZS5idWZmZXIpfWoub25tZXNzYWdlPWFzeW5jIGk9Pnt2YXIgcztjb25zdCBlPWkuZGF0YSx7aWQ6bn09ZTtpZigiY2FuY2VsImluIGUpeyhzPUMuZ2V0KG4pKT09bnVsbHx8cy5hYm9ydCgpO3JldHVybn1jb25zdCB0PW5ldyBBYm9ydENvbnRyb2xsZXIse3NpZ25hbDpyfT10O0Muc2V0KG4sdCk7dHJ5e2NvbnN0e2pvYjpofT1lO2lmKGgua2luZD09PSJ3b3JsZCIpe2NvbnN0IG89YXdhaXQgcShoLnNvdXJjZSx1PT5YKHtpZDpuLHByb2dyZXNzOnV9KSxyKSx7dG93bjphLGhlaWdodHM6ZCxleHBvc3VyZTpjLHN1cmZhY2U6bCx0ZXJyYWluVGlsZXM6Zn09bztYKHtpZDpuLHZhbHVlOm99LEwoW2QsYyxsLGEuaG91c2VzLGEuY2FiaW5zLGEuY2FycyxhLnRyZWVzLC4uLmYuZmxhdE1hcCgoe3Bvczp1LG5vcjp3LHV2OngsaWR4Onl9KT0+W3Usdyx4LHldKV0pKX1lbHNle2NvbnN0IG89YXdhaXQgZmV0Y2goaC51cmwse3NpZ25hbDpyfSk7aWYoIW8ub2spdGhyb3cgbmV3IEVycm9yKCJDb3VsZCBub3QgbG9hZCBncm91bmQgZGV0YWlsIik7Y29uc3QgYT1hd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChhd2FpdCBvLmJsb2IoKSx7aW1hZ2VPcmllbnRhdGlvbjoiZmxpcFkiLHByZW11bHRpcGx5QWxwaGE6Im5vbmUifSk7aWYoci5hYm9ydGVkKWEuY2xvc2UoKTtlbHNlIHRyeXtYKHtpZDpuLHZhbHVlOmF9LFthXSl9Y2F0Y2goZCl7dGhyb3cgYS5jbG9zZSgpLGR9fX1jYXRjaChoKXtyLmFib3J0ZWR8fFgoe2lkOm4sZXJyb3I6aCBpbnN0YW5jZW9mIEVycm9yP2gubWVzc2FnZTpTdHJpbmcoaCl9KX1maW5hbGx5e0MuZGVsZXRlKG4pfX19KSgpOwo=",pv=i=>Uint8Array.from(atob(i),t=>t.charCodeAt(0)),Pu=typeof self<"u"&&self.Blob&&new Blob([pv(Cu)],{type:"text/javascript;charset=utf-8"});function mv(i){let t;try{if(t=Pu&&(self.URL||self.webkitURL).createObjectURL(Pu),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;base64,"+Cu,{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}class gv{constructor(){Z(this,"worker");Z(this,"pending",new Map);Z(this,"nextId",0);try{const t=new mv;this.worker=t,t.onmessage=e=>{const n=e.data,s=this.pending.get(n.id);s?s.receive(n):"value"in n&&"close"in n.value&&n.value.close()},t.onerror=e=>{e.preventDefault(),this.close(new Error("Could not start the model worker"))},t.onmessageerror=()=>this.close(new Error("Could not receive data from the model worker"))}catch{}}async run(t,e,n,s){if(n.aborted)throw n.reason;if(this.worker)try{return await this.request(this.worker,t,n,s)}catch{if(n.aborted)throw n.reason}return e()}close(t=new DOMException("Model closed","AbortError")){var e;(e=this.worker)==null||e.terminate(),this.worker=void 0;for(const n of this.pending.values())n.reject(t)}request(t,e,n,s){return new Promise((r,a)=>{const o=++this.nextId,l=()=>{this.pending.delete(o),n.removeEventListener("abort",c)},c=()=>{l(),t.postMessage({id:o,cancel:!0}),a(n.reason)},h=u=>{l(),a(u)};this.pending.set(o,{receive:u=>{if("progress"in u){s==null||s(u.progress);return}l(),"error"in u?a(new Error(u.error)):r(u.value)},reject:h}),n.addEventListener("abort",c,{once:!0});try{t.postMessage({id:o,job:e})}catch(u){h(u)}})}}class Lu{constructor(t,e){Z(this,"bounds",new vi);Z(this,"level",-1);this.levels=t;for(const s of t)for(const r of s)r.computeBoundingBox(),this.bounds.union(r.boundingBox),r.castShadow=!0,e.add(r);const n=this.bounds.getBoundingSphere(new Ii);for(const s of t.flat())s.boundingSphere=n,s.visible=!1}update(t,e,n){const s=this.bounds.distanceToPoint(t),[r,a,o]=n,l=o+e*8,c=u=>this.level<0?1:this.level<=u?1.1:.9,h=s<=r*c(0)?0:s<=a*c(1)?1:s<=l*c(2)?2:3;if(h!==this.level){for(const u of this.levels[this.level]??[])u.visible=!1;for(const u of this.levels[h]??[])u.visible=!0;this.level=h}}}const Du=.25,As=[16053490,16053490,16053490,13225168,10725291,5593438,2040100,2838410,11020586,2054728,14266938,8368595],Iu=[15223869,3113154,15909424,3843690,16777215,9329589,15764004,2042422,15231654,4899008],oi=[14826299,15764004,15909424,3715691,3117008,13651872,3720896,16053490].map(B);function Nu(){const i=new ee,t=B(16777215),e=B(1713198),n=B(1381655);i.box(-.88,.3,-2.1,.88,.95,2.1,t,void 0,n),i.box(-.8,.95,-1.35,.8,1.48,.7,e,t);for(const s of[-.9,.68])for(const r of[-1.55,1])i.box(s,0,r,s+.22,.62,r+.62,n);for(const s of[-.75,.45])i.quad(s,.6,2.11,s+.3,.6,2.11,s+.3,.8,2.11,s,.8,2.11,B(16776166),2.2);return i.build()}function Fl(i){const t=new ee,e=new ee;return Gu(i,t,e,B(16777215)),{body:t.build(),trim:e.build()}}function Ol(i){const t=i===1,e=i===2,n=e?-2.3:-2.18,s=e?2.22:2.18,r=e?1.035:t?.99:.93;return{wagon:t,ute:e,tail:n,nose:s,sill:r,belt:o=>{const l=Math.max(0,(n+.58-o)/.58,(o-s+.55)/.55),c=o<0?t||e?.045:.095:.14,h=r-l*c;return{width:.88-.13*l,shoulder:h-.105,top:h}}}}function Uu(i,t){const e=new ee,{wagon:n,ute:s,tail:r,nose:a,sill:o}=Ol(i),l=B(16777215),c=B(6584713),h=B(2236966),u=s?1.63:n?1.6:1.49,d=s?-.37:n?-1.72:-.74,f=s?.64:.42,p=(_,m,g,S,x,M,E,b)=>{e.quad(-_,m,S,_,m,S,.65,x,E,-.65,x,E,b),e.quad(_,m,g,-_,m,g,-.65,x,M,.65,x,M,b),e.quad(_,m,S,_,m,g,.65,x,M,.65,x,E,b),e.quad(-_,m,g,-_,m,S,-.65,x,E,-.65,x,M,b),e.quad(-.65,x,E,.65,x,E,.65,x,M,-.65,x,M,l)};if(t)p(.88,.3,r,a,u,d,f,l);else{e.box(-.88,.3,r,.88,o,a,l),p(.77,o,s?-.52:n?-1.95:-1.47,1.02,u,d,f,c);for(const _ of[-1.35,1.38])e.quad(.9,.02,_+.32,.9,.02,_-.32,.9,.57,_-.32,.9,.57,_+.32,h),e.quad(-.9,.02,_-.32,-.9,.02,_+.32,-.9,.57,_+.32,-.9,.57,_-.32,h)}return e.build()}function Fu(i,t,e,n,s,r,a){const o=t>0?r-.025:r-.1,l=t<0&&(i===1||i===2);return[[e*.42,o,n],[e*(s-.022),o-(l?.13:0),n],[e*(s-.064),a-.025,n],[e*(t>0?.31:.43),a-.052,n]]}const Ou=12;function zu(i){const t=new ee,e=Ol(i);for(const s of[1,-1])for(const r of[1,-1]){const a=i<0?r*2.1:r>0?e.nose:e.tail,o=a+r*.02;let l;if(i<0){const c=r>0?.755:.59,h=.865;l=[[s*c,.62,o],[s*h,.62,o],[s*h,.77,o],[s*c,.77,o]]}else{const{width:c,shoulder:h,top:u}=e.belt(a),[d,f,p,_]=Fu(i,r,s,o,c,h,u),m=(g,S,x)=>[g[0]+(S[0]-g[0])*x,g[1]+(S[1]-g[1])*x,o];l=[m(d,f,.59),m(d,f,.99),m(_,p,.99),m(_,p,.59)]}s!==r&&l.reverse(),t.quad(...l[0],...l[1],...l[2],...l[3],B(16777215))}const n=new Zt(t.build(),new Cn({color:16752666,toneMapped:!1}));return n.visible=!1,n}function Bu(i,t){i.visible=t===-1||t===1,i.visible&&(i.name=t<0?"left-turn-indicator":"right-turn-indicator",i.geometry.setDrawRange(t<0?0:Ou,Ou))}function Gu(i,t,e,n){const s=B(4413799),r=B(3425876),a=B(2635588),o=B(8624550),l=B(6651533),c=B(2105636),h=B(2566960),u=B(11252924),d=B(5793135),f=(L,N,K,it,Y,V,$=!1,tt=0)=>{$?L.quad(...Y,...it,...K,...N,V,tt):L.quad(...N,...K,...it,...Y,V,tt)},{wagon:p,ute:_,tail:m,nose:g,sill:S,belt:x}=Ol(i),M=_||p?1.55:1.42,E=_?1.63:p?1.6:1.49,b=_?-.52:p?-1.95:-1.47,v=_?-.37:p?-1.72:-.74,y=1.02,w=_?.64:.42,T=-1.35,C=1.38,D=.34,F=.387,P=[m,m+.58,g-.55,g];for(const L of[T,C])for(let N=0;N<=5;N++)P.push(L-F*Math.cos(Math.PI*N/5));P.sort((L,N)=>L-N);const k=L=>{const N=Math.min(Math.abs(L-T),Math.abs(L-C));return N<F+1e-5?D+Math.sqrt(Math.max(0,F*F-N*N)):.3};for(const L of[-1,1])for(let N=1;N<P.length;N++){const K=P[N-1],it=P[N],Y=x(K),V=x(it);f(t,[L*Y.width,k(K),K],[L*Y.width,Y.shoulder,K],[L*V.width,V.shoulder,it],[L*V.width,k(it),it],n,L<0)}const O=[m,m+.15,m+.58,b,y,g-.55,g].sort((L,N)=>L-N);for(let L=1;L<O.length;L++){const N=O[L-1],K=O[L],it=x(N),Y=x(K);for(const nt of[-1,1])f(t,[nt*it.width,it.shoulder,N],[nt*(it.width-.08),it.top,N],[nt*(Y.width-.08),Y.top,K],[nt*Y.width,Y.shoulder,K],n,nt<0);if(N>=b&&K<=y)continue;const V=_&&N>=m+.15&&K<=b,$=it.width-.08,tt=Y.width-.08;if(V)for(const nt of[-1,1])f(t,[nt*$,it.top,N],[nt*.665,it.top,N],[nt*.665,Y.top,K],[nt*tt,Y.top,K],n,nt<0),f(e,[nt*.665,it.top,N],[nt*.665,.7,N],[nt*.665,.7,K],[nt*.665,Y.top,K],h,nt<0);else f(t,[-$,it.top,N],[-tt,Y.top,K],[tt,Y.top,K],[$,it.top,N],n)}if(_){const L=m+.15,N=b;f(e,[-.665,.7,L],[-.665,.7,N],[.665,.7,N],[.665,.7,L],B(4343627));for(const[K,it]of[[L,1],[N,0]])f(e,[-.665,.7,K],[.665,.7,K],[.665,x(K).top,K],[-.665,x(K).top,K],h,!it)}const G=(L,N,K)=>{const it=b+(v-b)*K,Y=y+(w-y)*K;return[L*(.8-.145*K),S+(M-S)*K,it+(Y-it)*N]},W=p?[0,.07,.275,.32,.56,.6,.935,1]:_?[0,.12,.33,.395,.925,1]:[0,.09,.47,.525,.925,1];for(const L of[-1,1]){const N=(K,it,Y,V,$,tt)=>f($,G(L,K,Y),G(L,K,V),G(L,it,V),G(L,it,Y),tt,L<0);N(0,1,0,.07,t,n),N(0,1,.93,1,t,n);for(let K=1;K<W.length;K++){const it=K%2===0,Y=K!==1&&K!==W.length-1,V=e.vertexCount;N(W[K-1],W[K],.07,.93,it||Y?e:t,it?K===2?a:r:Y?h:n),it&&e.gradientY(V,S,M,K===2?a:r,K===2?l:o)}}for(const L of[-1,1])f(t,G(L,0,1),[L*.58,E,v+.045],[L*.58,E,w-.045],G(L,1,1),n,L<0);f(t,[-.58,E,v+.045],[-.58,E,w-.045],[.58,E,w-.045],[.58,E,v+.045],n);for(const L of[0,1]){const N=L?w-.045:v+.045;f(t,G(-1,L,1),G(1,L,1),[.58,E,N],[-.58,E,N],n,!L);const K=e.vertexCount;f(e,G(-1,L,0),G(1,L,0),G(1,L,1),G(-1,L,1),L?s:a,!L),e.gradientY(K,S,M,L?s:a,L?o:l)}if(p)for(const L of[-1,1]){const N=L*.56;e.box(N-.032,E,v+.17,N+.032,1.67,w-.21,h)}for(const L of[-1,1]){const N=L>0?g:m,{width:K,shoulder:it,top:Y}=x(N);if(_&&L<0){const tt=[[-K,.3,N],[K,.3,N],[K,it,N],[-K,it,N]],nt=[[-.41,.59,N],[.41,.59,N],[.46,.74,N],[-.46,.74,N]],ct=[[-.39,.612,N+.024],[.39,.612,N+.024],[.43,.716,N+.024],[-.43,.716,N+.024]];for(let It=0;It<4;It++){const xt=(It+1)%4;f(t,tt[It],tt[xt],nt[xt],nt[It],n,!0),f(t,nt[It],nt[xt],ct[xt],ct[It],n,!0)}f(t,ct[0],ct[1],ct[2],ct[3],Gt(n,.88),!0)}else f(t,[-K,.3,N],[K,.3,N],[K,it,N],[-K,it,N],n,L<0);f(t,[-K,it,N],[K,it,N],[K-.08,Y,N],[-K+.08,Y,N],n,L<0);const V=N+L*.008;for(const tt of[-1,1])f(e,...Fu(i,L,tt,V,K,it,Y),L>0?B(14477800):B(12003881),tt!==L,L>0?1.1:.6);L>0?f(e,[-.48,.39,V],[.48,.39,V],[.53,.54,V],[-.53,.54,V],h):_&&f(e,[-.12,.76,V],[.12,.76,V],[.12,.8,V],[-.12,.8,V],h,!0);const $=N+L*.012;f(e,[-.2,.44,$],[.2,.44,$],[.2,.55,$],[-.2,.55,$],B(14014927),L<0)}e.box(-.7,.23,m+.22,.7,.69,g-.22,h,null);const U=(L,N,K,it)=>[L,D+it*Math.sin(K)*Math.sin(.4*Math.PI),N+it*Math.cos(K)];for(const L of[-1,1])for(const N of[T,C]){const K=L*.69,it=L*.9,Y=L*.912;for(let V=0;V<8;V++){const $=V*Math.PI/4,tt=(V+1)*Math.PI/4,nt=U(it,N,$,.34),ct=U(it,N,tt,.34);f(e,U(K,N,$,.34),nt,ct,U(K,N,tt,.34),c,L<0),L>0?e.tri(it,D,N,...ct,...nt,c):e.tri(it,D,N,...nt,...ct,c)}for(let V=0;V<6;V++){const $=U(Y,N,V*Math.PI/3,.188),tt=U(Y,N,(V+1)*Math.PI/3,.188),nt=V%2?u:d;L>0?e.tri(L*.905,D,N,...tt,...$,nt):e.tri(L*.905,D,N,...$,...tt,nt)}}}function Ta(i,t,e,n,s,r){const a=-t/2,o=t*.12,l=t/2,c=e/2,h=c*.5,u=Gt(s,.72);for(const f of[-1,1])f>0?(i.quad(h,0,a,c*.88,n,a,c,n,o,h,0,o,s),i.quad(h,0,o,c,n,o,0,n*1.12,l,0,.1,l*.86,s)):(i.quad(-h,0,o,-c,n,o,-c*.88,n,a,-h,0,a,s),i.quad(0,.1,l*.86,0,n*1.12,l,-c,n,o,-h,0,o,s));i.quad(-h,0,a,-c*.88,n,a,c*.88,n,a,h,0,a,u),i.quad(-h,0,a,h,0,a,h,0,o,-h,0,o,u),i.tri(-h,0,o,h,0,o,0,.1,l*.86,u);const d=n*.8;i.quad(-c*.84,d,a+.05,c*.84,d,a+.05,c*.95,d,o,-c*.95,d,o,r),i.tri(-c*.95,d,o,c*.95,d,o,0,d,l*.95,r)}function xv(i,t){const e=new ee,n=B(16119280);if(i===0)Ta(e,4.6,1.9,.75,t()<.5?B(12962767):oi[Math.floor(t()*6)],B(10133668)),e.box(-.2,.55,-2.65,.2,1.25,-2.25,B(1974822)),e.box(-.75,.6,-.9,.75,.72,-.5,B(9138002)),e.box(-.75,.6,.4,.75,.72,.8,B(9138002));else if(i===1){const s=oi[Math.floor(t()*oi.length)];Ta(e,7.4,2.7,1.25,n,B(15131350)),e.box(-1.37,.72,-3.7,1.37,.9,3,s,null),e.box(-1.05,1,-1.2,1.05,2.25,1.9,n,B(15329248)),e.quad(-1,1.45,1.92,1,1.45,1.92,.9,2.2,1.92,-.9,2.2,1.92,B(2240572),.4),e.box(-1.06,1.5,-.9,-1.05,2.1,1.6,B(2240572),null),e.box(1.05,1.5,-.9,1.06,2.1,1.6,B(2240572),null),e.box(-.9,2.25,-1,.9,2.33,1.2,n),e.cyl(0,2.33,-.6,.03,.02,1.6,4,B(9278358))}else Ta(e,9,2.8,1.3,t()<.6?n:B(2377070),B(14208952)),e.box(-.85,1.05,-1.6,.85,1.55,1.6,n,B(15329248)),e.cyl(0,1.05,.9,.08,.05,11.5,5,B(14014682)),e.box(-.06,2.45,-3,.06,2.57,.9,B(14014682)),e.blob(0,2.72,-1.05,.17,.17,1.9,5,3,B(3104666)),e.quad(-.01,12.4,.9,.01,12.4,.9,.01,1.4,4.4,-.01,1.4,4.4,B(10133154));return e.build()}function _v(i){const t=new ee;return Ta(t,4.2,1.5,.55,B(16119280),B(14736588)),t.cyl(0,.45,.5,.04,.03,6,4,B(14014682)),t.tri(.02,6.3,.5,.02,1.1,.45,.6,1.2,-2,i),t.tri(.02,4.6,.6,.3,1,1.9,.02,1,.6,B(16250866)),t.blob(.35,.95,-.9,.22,.4,.22,5,3,B(14238767)),t.build()}function vv(i,t){const e=new ee,n=8,s=9,r=2.6;for(let a=0;a<n;a++){const o=-1.15+a/n*2.3,l=-1.15+(a+1)/n*2.3,c=Math.sin(o)*s*.5,h=Math.cos(o)*s*.42,u=Math.sin(l)*s*.5,d=Math.cos(l)*s*.42,f=a===0||a===n-1||a===3||a===4?t:i;e.quad(c,h,-r/2,u,d,-r/2,u,d,r/2,c,h,r/2,f)}return e.build()}function Mv(i,t){const e=new ee;return e.box(-.22,0,-.75,.22,.06,.75,i),e.blob(-.25,.75,0,.2,.62,.22,5,3,t),e.blob(-.42,1.48,0,.13,.14,.13,5,3,B(14264711)),e.build()}function Sv(i){const t=new ee;return t.blob(0,.02,0,.27,.05,1.05,6,2,i),t.blob(0,.42,-.1,.2,.4,.18,5,3,B(1976112)),t.blob(0,.9,-.1,.12,.13,.12,5,3,B(14264711)),t.build()}function yv(i){const t=new Map;for(const r of i){if(r.cls>1||!r.name||r.flags)continue;const a=t.get(r.name)??[];a.push(r),t.set(r.name,a)}const e=[],n=(r,a)=>a?[r[r.length-3],r[r.length-1]]:[r[0],r[2]],s=r=>{const a=new Float32Array(r.length);for(let o=0;o<r.length/3;o++)a.set(r.subarray(o*3,o*3+3),r.length-3-o*3);return a};for(const r of t.values()){const a=r.map(l=>l.pts),o=r[0].width;for(;a.length;){let l=Array.from(a.pop()),c=!0;for(;c;){c=!1;for(let f=0;f<a.length;f++){const p=a[f],_=[l[l.length-3],l[l.length-1]],m=[l[0],l[2]],g=(M,E)=>Math.hypot(M[0]-E[0],M[1]-E[1])<2.5;let S=null,x=!0;if(g(_,n(p,!1))?S=p:g(_,n(p,!0))?S=s(p):g(m,n(p,!0))?(S=p,x=!1):g(m,n(p,!1))&&(S=s(p),x=!1),!!S){l=x?l.concat(Array.from(S.subarray(3))):Array.from(S.subarray(0,S.length-3)).concat(l),a.splice(f,1),c=!0;break}}}const h=new Float32Array(l),u=h.length/3,d=new Float32Array(u);for(let f=1;f<u;f++)d[f]=d[f-1]+Math.hypot(h[f*3]-h[f*3-3],h[f*3+2]-h[f*3-1]);d[u-1]>380&&e.push({pts:h,cum:d,length:d[u-1],width:o})}}return e}function zl(i,t=2,e=320){if(i.length<=(e<320?24:96)||t===0)return[i];let n=1/0,s=-1/0,r=1/0,a=-1/0;for(const u of i)n=Math.min(n,u.x),s=Math.max(s,u.x),r=Math.min(r,u.z),a=Math.max(a,u.z);const o=s-n,l=a-r;if(Math.max(o,l)<e)return[i];const c=o>l?"x":"z";i.sort((u,d)=>u[c]-d[c]);const h=Math.floor(i.length/2);return[...zl(i.slice(0,h),t-1,e),...zl(i.slice(h),t-1,e)]}class bv{constructor(t,e,n=!1){Z(this,"group",new en);Z(this,"afloat",new en);Z(this,"boats",[]);Z(this,"dinghies",[]);Z(this,"kites",[]);Z(this,"kiteLines");Z(this,"surfers",[]);Z(this,"traffic");Z(this,"trafficTrim");Z(this,"cars",[]);Z(this,"parkedAt",new Map);Z(this,"parkedSets",[]);Z(this,"drivenAt",new Map);Z(this,"drivenSets",[]);Z(this,"carMat",_s());Z(this,"tmpE",new un);Z(this,"nothing",new ne().makeScale(0,0,0));Z(this,"gulls");Z(this,"gullState",[]);Z(this,"tmpM",new ne);Z(this,"tmpQ",new En);Z(this,"tmpP",new X);Z(this,"up",new X(0,1,0));Z(this,"one",new X(1,1,1));Z(this,"contact");this.ctx=t,this.closeCarShadows=n,this.group.name="life",this.group.add(this.afloat);const s=this.carMat;this.addParkedCars(),this.addTraffic(s),this.addBoats(s,e),this.addKites(s),this.addSurfers(s,e),this.addPeople(e),this.addGulls(e),this.update(0,0)}setTide(t){this.afloat.position.y=t}sit(t,e,n,s){const r=this.ctx.hf,a=Math.sin(n),o=Math.cos(n),l=r.yAt(t+a*1.3,e+o*1.3),c=r.yAt(t-a*1.3,e-o*1.3),h=r.yAt(t-o*.8,e+a*.8),u=r.yAt(t+o*.8,e-a*.8);return this.tmpQ.setFromEuler(this.tmpE.set(-Math.atan2(l-c,2.6),n,Math.atan2(u-h,1.6),"YXZ")),this.tmpM.compose(this.tmpP.set(t,(l+c+h+u)/4+s,e),this.tmpQ,this.one)}carShapes(t){return t?Fl(t-1):{body:Nu(),trim:void 0}}makeTrafficCar(t,e,n,s,r){const a=new ee;Gu(t,a,a,B(e));const o=a.build(),l=o.boundingBox,c=(d,f)=>Math.min(1,d/f),h=new X(c(n,Math.max(-l.min.x,l.max.x)),c(r,l.max.y),c(s,Math.max(-l.min.z,l.max.z)));o.scale(h.x,h.y,h.z);const u=new Zt(o,this.carMat);return u.name=["traffic-sedan","traffic-wagon","traffic-ute"][t],u.castShadow=u.receiveShadow=!0,u.matrixAutoUpdate=!1,u.visible=!1,this.group.add(u),{mesh:u,scale:h}}addParkedCars(){const{town:t,hf:e,paths:n}=this.ctx,s=t.cars,r=s.length/vs,a=[[],[],[],[]],o=new Set,l=(u,d)=>`${Math.round(u/7)}_${Math.round(d/7)}`;for(let u=0;u<r;u++){const d=s[u*vs]/4,f=s[u*vs+1]/4;if(this.ctx.isClear(d,f)||!this.ctx.isDetail(d,f)&&this.ctx.roads.nearest(d,f,5.5))continue;const p=1+(s[u*vs+3]+u)%3;a[p].push({x:d,z:f,heading:s[u*vs+2]/10*(Math.PI/180),colour:As[(s[u*vs+3]*7+u)%As.length]}),o.add(l(d,f))}const c=Ne(911);let h=0;for(const u of n){if(h>=1100||u.width<3.4||u.width>12)continue;const d=u.pts.length/3;let f=20+c()*60;for(let p=1;p<d;p++){const _=u.pts[(p-1)*3],m=u.pts[(p-1)*3+2],g=u.pts[p*3],S=u.pts[p*3+2],x=Math.hypot(g-_,S-m);if(f-=x,f>0||x<.01)continue;f=28+c()*70;const M=c()<.5?1:-1,E=(g-_)/x,b=(S-m)/x,v=Math.max(u.width/2-.55,1.5),y=g+b*v*M,w=S-E*v*M,T=Math.floor(c()*As.length),C=Math.floor(c()*3);if(e.metresAt(y,w)<.6||!e.inside(y,w,30)||this.ctx.isClear(y,w))continue;let D=!0;for(let F=-1;F<=1&&D;F++)for(let P=-1;P<=1;P++)if(o.has(`${Math.round(y/7)+F}_${Math.round(w/7)+P}`)){D=!1;break}D&&(o.add(l(y,w)),a[1+C].push({x:y,z:w,heading:Math.atan2(E*M,b*M),colour:As[T]}),h++)}}a.forEach((u,d)=>this.addParkedShape(u,d))}addParkedShape(t,e){if(!t.length)return;const n=Fl(e-1),s=Uu(e-1,!1),r=Uu(e-1,!0);for(const a of zl(t,5,140)){const o=this.parkedSets.length,l=new Je(n.body,this.carMat,a.length),c=new Je(n.trim,this.carMat,a.length),h=new Je(s,this.carMat,a.length),u=new Je(r,this.carMat,a.length);l.name="parked-car-near-body",c.name="parked-car-near-trim",h.name="parked-car-mid",u.name="parked-car-far";const d=[l,c,h,u],f=[l,h,u],p=new wt;a.forEach((m,g)=>{const{x:S,z:x,heading:M,colour:E}=m,b=this.sit(S,x,M,.3);for(const v of d)v.setMatrixAt(g,b);p.set(E);for(const v of f)v.setColorAt(g,p);this.parkedAt.set(`${Math.round(S*4)}_${Math.round(x*4)}`,{set:o,k:g,x:S,z:x,heading:M})});const _=new Lu([[l,c],[h],[u]],this.group);this.closeCarShadows&&this.addContactShadow(l),this.parkedSets.push({body:l,meshes:d,lod:_,shape:e})}}addContactShadow(t){this.contact??(this.contact={geometry:new kn(2.5,5.1).rotateX(-Math.PI/2).translate(0,.027,0),material:new nn({transparent:!0,depthWrite:!1,vertexShader:`varying vec2 patchUV;
          void main(){patchUV=2.*uv-1.;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 patchUV;
          void main(){float edge=length(max(abs(patchUV)-vec2(.49,.57),0.)/vec2(.50,.42));
            gl_FragColor=vec4(.012,.015,.016,.32*(1.-smoothstep(.05,1.,edge)));
            #include <colorspace_fragment>
          }`})});const e=new Je(this.contact.geometry,this.contact.material,t.count);e.name="parked-car-contact",e.instanceMatrix=t.instanceMatrix,e.boundingSphere=t.boundingSphere,t.add(e)}addCars(t){const e=[[],[],[],[]];for(const n of t)e[1+(n.kind??0)%3].push(n);e.forEach((n,s)=>this.addParkedShape(n,s))}nearestCar(t,e,n){let s=null;for(const[r,a]of this.parkedAt){const o=this.drivenAt.get(r)??a,l=Math.hypot(o.x-t,o.z-e);l<(s?s.distance:n)&&(s={id:[a.x,a.z],x:o.x,z:o.z,heading:o.heading,distance:l})}return this.cars.forEach((r,a)=>{const o=this.drivenAt.get(`t${a}`)??r,l=Math.hypot(o.x-t,o.z-e);l<(s?s.distance:n)&&(s={id:[9e5+a,0],x:o.x,z:o.z,heading:o.heading,distance:l})}),s}driveCar(t,e,n,s,r,a,o=0,l=0,c=0){const h=t>=9e5?this.cars[t-9e5]:void 0,u=h?`t${t-9e5}`:`${Math.round(t*4)}_${Math.round(e*4)}`,d=h?void 0:this.parkedAt.get(u);if(!d&&!h)return!1;let f=this.drivenAt.get(u);if(!f){if(this.drivenAt.size>=12)return!1;const _=d?this.parkedSets[d.set].shape:this.trafficTrim?1:0;let m=this.drivenSets[_];if(!m){const S=this.carShapes(_);m=this.drivenSets[_]={body:new Je(S.body,this.carMat,12),trim:S.trim?new Je(S.trim,this.carMat,12):void 0,n:0};for(const x of[m.body,m.trim])x&&(x.count=0,x.frustumCulled=!1,x.castShadow=!0,this.group.add(x))}f={set:_,k:m.n++,x:n,y:s,z:r,heading:a},this.drivenAt.set(u,f),m.body.count=m.n,m.trim&&(m.trim.count=m.n);const g=new wt;if(d){const S=this.parkedSets[d.set];S.body.getColorAt(d.k,g);for(const x of S.meshes)x.setMatrixAt(d.k,this.nothing),x.instanceMatrix.needsUpdate=!0}else this.traffic.getColorAt(t-9e5,g),h.gone=!0;m.body.setColorAt(f.k,g),m.body.instanceColor.needsUpdate=!0}f.x=n,f.y=s,f.z=r,f.heading=a;const p=this.drivenSets[f.set];return this.tmpQ.setFromEuler(this.tmpE.set(-o,a,l,"YXZ")),this.tmpM.compose(this.tmpP.set(n,s+Du,r),this.tmpQ,this.one),p.body.setMatrixAt(f.k,this.tmpM),p.body.instanceMatrix.needsUpdate=!0,p.trim&&(p.trim.setMatrixAt(f.k,this.tmpM),p.trim.instanceMatrix.needsUpdate=!0),c&&!f.indicator&&(f.indicator=zu(f.set-1),f.indicator.matrixAutoUpdate=!1,this.group.add(f.indicator)),f.indicator&&(Bu(f.indicator,c),f.indicator.visible&&(f.indicator.matrix.copy(this.tmpM),f.indicator.matrixWorldNeedsUpdate=!0)),!0}addTraffic(t){const e=yv(this.ctx.paths);if(!e.length)return;const n=e.reduce((c,h)=>c+h.length,0),s=0,r=Ne(77),a=this.ctx.hasDetail?Fl(0):null,o=this.traffic=new Je(a?a.body:Nu(),t,s);if(o.instanceMatrix.setUsage(Os),o.frustumCulled=!1,a){const c=this.trafficTrim=new Je(a.trim,t,s);c.instanceMatrix.setUsage(Os),c.frustumCulled=!1,c.castShadow=!0,this.group.add(c)}const l=new wt;for(let c=0;c<s;c++){let h=r()*n,u=e[0];for(const d of e)if((h-=d.length)<=0){u=d;break}this.cars.push({route:u,s:r()*u.length,dir:r()<.5?1:-1,speed:9+r()*6,x:0,z:0,heading:0}),o.setColorAt(c,l.set(As[Math.floor(r()*As.length)]))}o.castShadow=!0,this.group.add(o)}addBoats(t,e){var c;const{hf:n}=this.ctx,s=Ne(451),r=((c=e.jetty)==null?void 0:c.head)??new X(380,0,-117),a=[];for(let h=0;h<4e3&&a.length<16;h++){const u=s()*Math.PI*2,d=55+s()*420,f=r.x+Math.cos(u)*d,p=r.z+Math.sin(u)*d;n.metresAt(f,p)>-1.9||!n.inside(f,p,40)||a.some(([_,m])=>Math.hypot(_-f,m-p)<26)||a.push([f,p])}const o=2.2+s()*.4;a.forEach(([h,u],d)=>{const f=d%5===0?2:d%2?0:1,p=new Zt(xv(f,s),t);p.position.set(h,0,u),p.rotation.y=o+(s()-.5)*.5,p.castShadow=!0,this.afloat.add(p),this.boats.push({obj:p,phase:s()*6.28,y:f===0?-.22:-.42})});const l=[B(16250866),B(15222589),B(3117008),B(15909424)];for(let h=0;h<600&&this.dinghies.length<4;h++){const u=s()*Math.PI*2,d=150+s()*900,f=r.x+Math.cos(u)*d,p=r.z+160+Math.sin(u)*d*.5,_=45+s()*70,m=30+s()*40;let g=n.inside(f,p,160);for(let x=0;x<12&&g;x++){const M=x/12*Math.PI*2;n.metresAt(f+Math.cos(M)*_,p+Math.sin(M)*m)>-1.5&&(g=!1)}if(!g||this.dinghies.some(x=>Math.hypot(x.cx-f,x.cz-p)<170))continue;const S=new Zt(_v(l[this.dinghies.length%l.length]),t);S.castShadow=!0,this.afloat.add(S),this.dinghies.push({obj:S,cx:f,cz:p,rx:_,rz:m,phase:s()*6.28,speed:(2.2+s())/Math.max(_,m)})}}addKites(t){const{hf:e,town:n}=this.ctx,s=Ne(990),[r,a]=gn(n.meta,-38.6385,145.714),[o,l]=gn(n.meta,-38.645,145.731),c=[];for(let d=0;d<3e3&&c.length<6;d++){const f=r+s()*(o-r),p=a+s()*(l-a);e.metresAt(f,p)>-1.6||c.some(_=>Math.hypot(_.x-f,_.z-p)<110)||c.push(new X(f,0,p))}const h=new Float32Array(c.length*12);c.forEach((d,f)=>{let p=85;for(;p>15&&(e.metresAt(d.x+.65*p,d.z+.76*p)>-1.2||e.metresAt(d.x-.65*p,d.z-.76*p)>-1.2);)p-=10;const _=oi[Math.floor(s()*7)],m=oi[Math.floor(s()*7)],g=new Zt(vv(_,m===_?oi[7]:m),t),S=new Zt(Mv(oi[Math.floor(s()*7)],B(1976112)),t);g.castShadow=!0,this.afloat.add(g,S),this.kites.push({base:d,reach:p,phase:s()*6.28,speed:.12+s()*.06,kite:g,rider:S})});const u=new Ee;u.setAttribute("position",new ye(h,3).setUsage(Os)),this.kiteLines=new eh(u,fa(new $c({color:15921906,transparent:!0,opacity:.7}))),this.kiteLines.frustumCulled=!1,this.afloat.add(this.kiteLines)}addSurfers(t,e){if(!e.surf)return;const{hf:n}=this.ctx,s=Ne(31),[r,a]=e.surf.seaward,o=e.surf.beach;let l=20;for(;l<420&&n.metresAt(o.x+r*l,o.z+a*l)>-2;)l+=5;for(let c=0;c<9;c++){const h=(c-4)*13+(s()-.5)*8,u=l+(s()-.5)*30,d=o.x+r*u-a*h,f=o.z+a*u+r*h,p=new Zt(Sv(oi[Math.floor(s()*oi.length)]),t);p.position.set(d,0,f),p.rotation.y=Math.atan2(r,a)+(s()-.5)*.8,this.afloat.add(p),this.surfers.push({obj:p,phase:s()*6.28})}}addPeople(t){const{hf:e,town:n,paths:s,roads:r,footprints:a}=this.ctx,o=Ne(2026),l=[],c=[],h=(O,G)=>a.some(W=>{if(Math.hypot(O-W.cx,G-W.cz)>Math.max(W.obb.w,W.obb.d))return!1;let U=!1;for(let L=0,N=W.poly.length-2;L<W.poly.length;N=L,L+=2){const K=W.poly[L],it=W.poly[L+1],Y=W.poly[N],V=W.poly[N+1];it>G!=V>G&&O<(Y-K)*(G-it)/(V-it)+K&&(U=!U)}return U}),u=(O,G)=>!r.nearest(O,G,6.4)&&!h(O,G),d=(O,G,W,U,L,N,K=0)=>{for(let it=0,Y=0;it<U*40&&Y<U;it++){const V=o()*Math.PI*2,$=Math.sqrt(o())*W,tt=O+Math.cos(V)*$,nt=G+Math.sin(V)*$,ct=e.metresAt(tt,nt);ct<L||ct>N||!u(tt,nt)||(l.push(tt,e.yAt(tt,nt),nt),o()<K&&c.push(tt+1.2,e.yAt(tt+1.2,nt),nt+.6),Y++)}};t.surf&&d(t.surf.beach.x,t.surf.beach.z,130,60,1.5,3,.32);const[f,p]=gn(n.meta,-38.63575,145.729);d(f,p,120,34,1.5,2.4,.3);const[_,m]=gn(n.meta,-38.6356,145.7337);d(_,m,110,26,1.5,2.6,.2);const[g,S]=gn(n.meta,-38.63194,145.72681);d(g,S,55,14,0,99);const[x,M]=gn(n.meta,-38.63385,145.7285);for(const O of s){if(O.cls>3||O.flags)continue;const G=O.pts.length/3;for(let W=1;W<G;W++){const U=O.pts[W*3],L=O.pts[W*3+2];if(Math.hypot(U-x,L-M)>300||o()>.42||this.ctx.isClear(U,L))continue;const N=U-O.pts[W*3-3],K=L-O.pts[W*3-1],it=Math.hypot(N,K)||1,Y=o()<.5?1:-1,V=O.width/2+2.3+o()*1,$=U-K/it*V*Y,tt=L+N/it*V*Y;u($,tt)&&l.push($,e.yAt($,tt),tt)}}if(t.jetty){const O=t.jetty.points;for(let G=0;G<O.length-1;G++)for(let W=0;W<3;W++){const U=o();l.push(O[G][0]+(O[G+1][0]-O[G][0])*U+(o()-.5)*2,Nl,O[G][1]+(O[G+1][1]-O[G][1])*U+(o()-.5)*2)}}const E=l.length/3,b=new ee;b.cyl(0,0,0,.17,.22,.85,5,B(2765632)),b.cyl(0,.85,0,.24,.2,.6,5,B(16777215),B(16777215));const v=new ee;v.blob(0,1.6,0,.14,.15,.14,5,3,B(14264711));const y=new jr({vertexColors:!0}),w=O=>(O.deleteAttribute("glow"),O),T=new Je(w(b.build()),y,E),C=new Je(w(v.build()),y,E),D=new wt,F=[16777215,15255976,12159590,9068354];for(let O=0;O<E;O++){const G=.92+o()*.2;this.tmpQ.setFromAxisAngle(this.up,o()*6.28),this.tmpM.compose(this.tmpP.set(l[O*3],l[O*3+1],l[O*3+2]),this.tmpQ,new X(G,G,G)),T.setMatrixAt(O,this.tmpM),C.setMatrixAt(O,this.tmpM),T.setColorAt(O,D.set(Iu[Math.floor(o()*Iu.length)])),C.setColorAt(O,D.set(F[Math.floor(o()*F.length)]))}T.computeBoundingSphere(),C.computeBoundingSphere(),this.group.add(T,C);const P=new ee;P.cyl(0,0,0,.03,.03,2,4,B(14277081)),P.cyl(0,1.75,0,1.25,0,.5,8,B(16777215));const k=new Je(w(P.build()),y,c.length/3);for(let O=0;O<c.length/3;O++)this.tmpQ.setFromAxisAngle(new X(1,0,0),(o()-.5)*.3),k.setMatrixAt(O,this.tmpM.compose(this.tmpP.set(c[O*3],c[O*3+1],c[O*3+2]),this.tmpQ,this.one)),k.setColorAt(O,D.set([14826299,3117008,15909424,3715691,15764004,16053490][Math.floor(o()*6)]));k.castShadow=!0,k.computeBoundingSphere(),this.group.add(k)}addGulls(t){if(!t.jetty)return;const e=Ne(8),n=16;for(let r=0;r<n;r++)this.gullState.push({cx:t.jetty.head.x+(e()-.5)*90,cz:t.jetty.head.z+(e()-.5)*90,r:18+e()*55,h:Nl+6+e()*16,w:(.25+e()*.3)*(e()<.5?1:-1),phase:e()*6.28});const s=new Ee;s.setAttribute("position",new ye(new Float32Array(n*18),3).setUsage(Os)),this.gulls=new Zt(s,fa(new Cn({color:16185074,side:Re}))),this.gulls.frustumCulled=!1,this.group.add(this.gulls)}updateParkedLod(t,e,n){for(const s of this.parkedSets)s.lod.update(t,e,n)}update(t,e){for(const n of this.boats)n.obj.rotation.z=Math.sin(e*.9+n.phase)*.04,n.obj.rotation.x=Math.sin(e*.7+n.phase*1.7)*.025,n.obj.position.y=n.y+Math.sin(e*1.1+n.phase)*.06;for(const n of this.dinghies){const s=n.phase+e*n.speed;n.obj.position.set(n.cx+Math.cos(s)*n.rx,-.15,n.cz+Math.sin(s)*n.rz),n.obj.rotation.y=Math.atan2(-Math.sin(s)*n.rx,Math.cos(s)*n.rz),n.obj.rotation.z=.12+Math.sin(e*.8+n.phase)*.04}for(const n of this.surfers)n.obj.position.y=-.05+Math.sin(e*.9+n.phase)*.22;if(this.kiteLines){const n=this.kiteLines.geometry.getAttribute("position");this.kites.forEach((s,r)=>{const a=Math.sin(e*s.speed*6.28+s.phase),o=Math.cos(e*s.speed*6.28+s.phase)>=0?1:-1,l=s.base.x+.65*s.reach*a,c=s.base.z+.76*s.reach*a;s.rider.position.set(l,.05,c),s.rider.rotation.y=Math.atan2(.65*o,.76*o),s.rider.rotation.z=.28;const h=e*1.3+s.phase,u=l+12+o*5+Math.sin(h)*4.5,d=c-10+Math.cos(h)*1.5,f=17+Math.sin(h*2)*2.4;s.kite.position.set(u,f,d),s.kite.lookAt(l,1.2,c),s.kite.rotateX(-Math.PI/2),n.setXYZ(r*4,l-.3,1.25,c),n.setXYZ(r*4+1,u-2.6,f-1,d),n.setXYZ(r*4+2,l-.3,1.25,c),n.setXYZ(r*4+3,u+2.6,f-1,d)}),n.needsUpdate=!0}if(this.traffic&&(this.cars.forEach((n,s)=>{var x,M;if(n.gone){this.traffic.setMatrixAt(s,this.nothing),(x=this.trafficTrim)==null||x.setMatrixAt(s,this.nothing);return}const r=n.route;n.s+=n.dir*n.speed*t,n.s>r.length&&(n.s=r.length,n.dir=-1),n.s<0&&(n.s=0,n.dir=1);let a=0,o=r.cum.length-1;for(;o-a>1;){const E=a+o>>1;r.cum[E]<=n.s?a=E:o=E}const l=(n.s-r.cum[a])/(r.cum[o]-r.cum[a]||1),c=r.pts[a*3],h=r.pts[a*3+2],u=r.pts[o*3],d=r.pts[o*3+2];let f=u-c,p=d-h;const _=Math.hypot(f,p)||1;f=f/_*n.dir,p=p/_*n.dir;const m=Math.min(r.width*.24,2),g=c+(u-c)*l+p*m,S=h+(d-h)*l-f*m;n.x=g,n.z=S,n.heading=Math.atan2(f,p),this.traffic.setMatrixAt(s,this.sit(g,S,n.heading,.36)),(M=this.trafficTrim)==null||M.setMatrixAt(s,this.tmpM)}),this.traffic.instanceMatrix.needsUpdate=!0,this.trafficTrim&&(this.trafficTrim.instanceMatrix.needsUpdate=!0)),this.gulls){const n=this.gulls.geometry.getAttribute("position");this.gullState.forEach((s,r)=>{const a=s.phase+e*s.w,o=s.cx+Math.cos(a)*s.r,l=s.cz+Math.sin(a)*s.r,c=s.h+Math.sin(a*2.3)*1.5,h=s.w>0?1:-1,u=-Math.sin(a)*h,d=Math.cos(a)*h,f=d,p=-u,_=Math.sin(e*7+s.phase*3)*.45,m=r*6;n.setXYZ(m,o+u*.35,c,l+d*.35),n.setXYZ(m+1,o-u*.3,c,l-d*.3),n.setXYZ(m+2,o+f*.85,c+_,l+p*.85),n.setXYZ(m+3,o+u*.35,c,l+d*.35),n.setXYZ(m+4,o-f*.85,c+_,l-p*.85),n.setXYZ(m+5,o-u*.3,c,l-d*.3)}),n.needsUpdate=!0}}}const Ev={low:320,medium:640,high:1040,ultra:1520},Hi=new X(31,18,31),wv=`
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
}`,Tv=`
varying float vOpacity;
void main() {
  gl_FragColor = vec4(0.54, 0.65, 0.76, vOpacity);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;class Av{constructor(t,e,n){Z(this,"eye",new X);Z(this,"material");Z(this,"streaks");Z(this,"wetness",{value:0});Z(this,"ultra");Z(this,"disposed",!1);Z(this,"inletRain",{value:0});this.camera=e,this.ultra=n==="ultra";const s=Ev[n],r=Ne(1229870668),a=new Float32Array(s*6),o=new Float32Array(s*8);for(let c=0;c<s;c++){const h=r()*Hi.x,u=r()*Hi.y,d=r()*Hi.z,f=.25+r()*.54,p=.55+r()*.45,_=r();a.set([h,u,d,h,u,d],c*6),o.set([f,0,p,_,f,1,p,_],c*8)}const l=new Ee;l.setAttribute("position",new ye(a,3)),l.setAttribute("aDrop",new ye(o,4)),this.material=new nn({uniforms:{uEye:{value:this.eye},uVolume:{value:Hi},uDrift:{value:new Ct},uSlant:{value:new Ct},uFall:{value:0},uRain:{value:0},uShelter:{value:0}},vertexShader:wv,fragmentShader:Tv,transparent:!0,depthWrite:!1}),this.streaks=new eh(l,this.material),this.streaks.name="local rain streaks",this.streaks.frustumCulled=!1,this.streaks.renderOrder=4,this.streaks.visible=!1,t.add(this.streaks)}shadeAsphalt(t,e=!1){const n=t.onBeforeCompile,s=t.customProgramCacheKey();t.customProgramCacheKey=()=>s+(e?":rain-asphalt-mask":":rain-asphalt"),t.onBeforeCompile=(r,a)=>{n.call(t,r,a),r.uniforms.uRoadWetness=this.wetness,e&&(r.vertexShader=`attribute float aAsphalt;
varying float vAsphalt;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vAsphalt = aAsphalt;`));const o=e?"(uRoadWetness * vAsphalt)":"uRoadWetness";r.fragmentShader=`uniform float uRoadWetness;
`+(e?`varying float vAsphalt;
`:"")+r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= mix(1.0, 0.66, `+o+");").replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.56, `+o+");")},t.needsUpdate=!0}update(t,e,n,s=2.9,r=-1,a=!1){if(this.disposed)return;const o=Kt.clamp(t,0,1);if(this.wetness.value=Kt.clamp(e,0,1),this.inletRain.value=this.ultra?o:0,this.streaks.visible=o>.015,!this.streaks.visible)return;this.camera.getWorldPosition(this.eye);const l=this.material.uniforms,c=12.5;l.uRain.value=o,l.uShelter.value=a?1:0,l.uFall.value=n*c%Hi.y,l.uDrift.value.set(n*s%Hi.x,n*r%Hi.z),l.uSlant.value.set(s/c,r/c)}dispose(){this.disposed||(this.disposed=!0,this.wetness.value=this.inletRain.value=0,this.streaks.removeFromParent(),this.streaks.geometry.dispose(),this.material.dispose())}}const dr=(i,t,e)=>{const n=[],s=[];for(let r=0;r<i.length;r++){const a=i[r],o=i[(r+1)%i.length],l=t(a)-e,c=t(o)-e;if(l<=1e-9&&n.push(a),l>=-1e-9&&s.push(a),l<-1e-9&&c>1e-9||l>1e-9&&c<-1e-9){const h=l/(l-c),u=new Float64Array(a.length);for(let d=0;d<u.length;d++)u[d]=a[d]+(o[d]-a[d])*h;n.push(u),s.push(u)}}return[n,s]},Bl=(i,t)=>{const e=[];for(let n of i){let s=1/0,r=-1/0;for(const a of n){const o=t(a);o<s&&(s=o),o>r&&(r=o)}for(let a=Math.floor(s+1e-9)+1;a<r-1e-9&&n.length>=3;a++){const[o,l]=dr(n,t,a);o.length>=3&&e.push(o),n=l}n.length>=3&&e.push(n)}return e};function ku(i,t,e,n,s){const r=p=>(p[0]-i.xMin)/i.dx,a=p=>(p[2]-i.zMin)/i.dz,o=p=>r(p)+a(p),l=Math.min(r(t),r(e),r(n)),c=Math.max(r(t),r(e),r(n)),h=Math.min(a(t),a(e),a(n)),u=Math.max(a(t),a(e),a(n)),d=Math.min(o(t),o(e),o(n)),f=Math.max(o(t),o(e),o(n));if(Math.floor(l)===Math.floor(c-1e-9)&&Math.floor(h)===Math.floor(u-1e-9)&&Math.floor(d)===Math.floor(f-1e-9)){s(t,e,n);return}for(const p of Bl(Bl(Bl([[t,e,n]],r),a),o))for(let _=1;_+1<p.length;_++)s(p[0],p[_],p[_+1])}class Rv{constructor(t,e,n){this.hf=t,this.mesh=e,this.clearance=n}quad(t,e,n,s,r,a,o,l,c,h,u,d,f,p=0){this.tri(t,e,n,s,r,a,o,l,c,f,p),this.tri(t,e,n,o,l,c,h,u,d,f,p)}edgeCrosses(t,e,n,s,r,a){const o=this.hf;for(let l=0;l<3;l++){const c=l===0?t:l===1?e:t+e,h=l===0?s:l===1?r:s+r,u=Math.max(c,h);for(let d=Math.floor(Math.min(c,h))+1;d<u;d++){const f=(d-c)/(h-c),p=o.xMin+(t+(s-t)*f)*o.dx,_=o.zMin+(e+(r-e)*f)*o.dz;if(n+(a-n)*f<o.yAt(p,_)+this.clearance)return!0}}return!1}needsFitting(t,e,n,s,r,a,o,l,c){const h=this.hf;if(e<h.yAt(t,n)+this.clearance||r<h.yAt(s,a)+this.clearance||l<h.yAt(o,c)+this.clearance)return!0;const u=(t-h.xMin)/h.dx,d=(n-h.zMin)/h.dz,f=(s-h.xMin)/h.dx,p=(a-h.zMin)/h.dz,_=(o-h.xMin)/h.dx,m=(c-h.zMin)/h.dz;if(this.edgeCrosses(u,d,e,f,p,r)||this.edgeCrosses(f,p,r,_,m,l)||this.edgeCrosses(_,m,l,u,d,e))return!0;const g=(f-u)*(m-d)-(p-d)*(_-u);if(Math.abs(g)<1e-12)return!1;const S=Math.min(h.nx-1,Math.floor(Math.max(u,f,_))),x=Math.min(h.nz-1,Math.floor(Math.max(d,p,m)));for(let M=Math.max(0,Math.ceil(Math.min(d,p,m)));M<=x;M++)for(let E=Math.max(0,Math.ceil(Math.min(u,f,_)));E<=S;E++){const b=((E-u)*(m-d)-(M-d)*(_-u))/g,v=((f-u)*(M-d)-(p-d)*(E-u))/g;if(b>=0&&v>=0&&b+v<=1&&e+b*(r-e)+v*(l-e)<h.y[M*h.nx+E]+this.clearance)return!0}return!1}tri(t,e,n,s,r,a,o,l,c,h,u=0){if(!this.needsFitting(t,e,n,s,r,a,o,l,c)){this.mesh.tri(t,e,n,s,r,a,o,l,c,h,u);return}const d=f=>Math.max(f[1],this.hf.yAt(f[0],f[2])+this.clearance);ku(this.hf,new Float64Array([t,e,n]),new Float64Array([s,r,a]),new Float64Array([o,l,c]),(f,p,_)=>{this.mesh.tri(f[0],d(f),f[2],p[0],d(p),p[2],_[0],d(_),_[2],h,u)})}}const Hu=i=>i[0],Vu=i=>i[2],Nn=1.5,Ai=.16,Aa=Math.hypot(Nn,Ai),Rs=12,Wu=(i,t)=>(i+2048)*8192+t+2048;class Cv{constructor(t,e,n){Z(this,"bins",new Map);this.asphalt=t,this.marks=e,this.color=n}addDash(t,e,n,s,r,a){const o={x:t+Nn*s,z:n+Nn*r,dx:s,dz:r,y:e+Nn*a,grade:a,flat:!0,area:0,pieces:[]},l=Wu(Math.floor(o.x/Rs),Math.floor(o.z/Rs));let c=this.bins.get(l);c||this.bins.set(l,c=[]),c.push(o)}tri(t,e,n,s,r,a,o,l,c,h){this.asphalt.tri(t,e,n,s,r,a,o,l,c,h);const u=Math.min(t,s,o)-Aa,d=Math.max(t,s,o)+Aa,f=Math.min(n,a,c)-Aa,p=Math.max(n,a,c)+Aa;for(let _=Math.floor(f/Rs);_<=Math.floor(p/Rs);_++)for(let m=Math.floor(u/Rs);m<=Math.floor(d/Rs);m++){const g=this.bins.get(Wu(m,_));if(g)for(const S of g){if(S.x<u||S.x>d||S.z<f||S.z>p)continue;const x=(E,b,v)=>new Float64Array([(E-S.x)*S.dx+(v-S.z)*S.dz,b,-(E-S.x)*S.dz+(v-S.z)*S.dx]);let M=[x(t,e,n),x(s,r,a),x(o,l,c)];if(M=dr(M,Hu,-Nn)[1],M=dr(M,Hu,Nn)[0],M=dr(M,Vu,-Ai)[1],M=dr(M,Vu,Ai)[0],!(M.length<3)){S.pieces.push(M);for(let E=0;E<M.length;E++){const b=M[E],v=M[(E+1)%M.length];S.area+=(v[0]*b[2]-v[2]*b[0])/2,Math.abs(S.y+b[0]*S.grade-b[1])>.03&&(S.flat=!1)}}}}}finish(){for(const t of this.bins.values())for(const e of t){const n=s=>[e.x+s[0]*e.dx-s[2]*e.dz,s[1]+.05,e.z+s[0]*e.dz+s[2]*e.dx];if(e.flat&&Math.abs(e.area-4*Nn*Ai)<1e-4){const s=(r,a)=>n(new Float64Array([r,e.y+r*e.grade,a]));this.marks.quad(...s(-Nn,Ai),...s(Nn,Ai),...s(Nn,-Ai),...s(-Nn,-Ai),this.color)}else for(const s of e.pieces)for(let r=1;r+1<s.length;r++)this.marks.tri(...n(s[0]),...n(s[r]),...n(s[r+1]),this.color)}}}const Pv=1,Xu=2,Lv=[B(5198680),B(11575168),B(9072466),B(12434356)],Dv=B(4474957),Yu=B(15921382),Iv=[.34,.3,.26,.22,.16,.15,.13,.11],qu=new Float32Array(9);function Nv(i,t){const e=[i[0]/10,i[1]/10];for(let n=2;n<i.length;n+=2){const s=i[n-2]/10,r=i[n-1]/10,a=i[n]/10,o=i[n+1]/10,l=Math.max(1,Math.ceil(Math.hypot(a-s,o-r)/t));for(let c=1;c<=l;c++)e.push(s+(a-s)*c/l,r+(o-r)*c/l)}return e}class Uv{constructor(){Z(this,"cells",new Map);Z(this,"segs",[]);Z(this,"size",40)}add(t,e,n,s,r,a){const o=this.segs.length/6;this.segs.push(t,e,n,s,r,a);const l=Math.floor(Math.min(t,n)/this.size),c=Math.floor(Math.max(t,n)/this.size),h=Math.floor(Math.min(e,s)/this.size),u=Math.floor(Math.max(e,s)/this.size);for(let d=l;d<=c;d++)for(let f=h;f<=u;f++){const p=(d+512)*4096+(f+512);let _=this.cells.get(p);_||this.cells.set(p,_=[]),_.push(o)}}nearest(t,e,n){let s=null;const r=Math.ceil(n/this.size),a=Math.floor(t/this.size),o=Math.floor(e/this.size);for(let l=a-r;l<=a+r;l++)for(let c=o-r;c<=o+r;c++){const h=this.cells.get((l+512)*4096+(c+512));if(h)for(const u of h){const d=this.segs[u*6],f=this.segs[u*6+1],p=this.segs[u*6+2],_=this.segs[u*6+3],m=p-d,g=_-f,S=Math.max(0,Math.min(1,((t-d)*m+(e-f)*g)/(m*m+g*g||1))),x=d+m*S,M=f+g*S,E=Math.hypot(t-x,e-M);E<=n&&(!s||E<s.dist)&&(s={dist:E,px:x,pz:M,cls:this.segs[u*6+4],name:this.segs[u*6+5]})}}return s}}function Fv(i,t,e,n){const s=new ee,r=new ee,a=new Uv,o=[],l=[];for(const[S,x,M,E,b,v]of i.roads){const y=E/10,w=Nv(v,S<=3?6:5),T=w.length/2;if(T<2)continue;const C=x===0&&S<=1?Dv:Lv[x],D=x===0?1:0,F=Iv[S],P=(M&Pv)!==0,k=t.yAt(w[0],w[1]),O=t.yAt(w[T*2-2],w[T*2-1]),G=new Float32Array(T);for(let V=1;V<T;V++)G[V]=G[V-1]+Math.hypot(w[V*2]-w[V*2-2],w[V*2+1]-w[V*2-1]);const W=G[T-1]||1,U=new Float32Array(T*3),L=new Float32Array(T*3),N=new Float32Array(T*3);for(let V=0;V<T;V++){const $=w[V*2],tt=w[V*2+1],nt=Math.max(V-1,0),ct=Math.min(V+1,T-1);let It=w[ct*2]-w[nt*2],xt=w[ct*2+1]-w[nt*2+1];const Lt=Math.hypot(It,xt)||1;It/=Lt,xt/=Lt;let Bt=1;if(V>0&&V<T-1){const pe=w[V*2]-w[V*2-2],ze=w[V*2+1]-w[V*2-1],Me=Math.hypot(pe,ze)||1;Bt=1/Math.max(.6,(pe*It+ze*xt)/Me)}const Nt=-xt*(y/2)*Bt,$t=It*(y/2)*Bt,Wt=P?k+(O-k)*(G[V]/W)+.6+1*Math.sin(Math.PI*G[V]/W):NaN,he=P?Wt:t.yAt($,tt)+F,te=P?Wt:t.yAt($+Nt,tt+$t)+F,je=P?Wt:t.yAt($-Nt,tt-$t)+F;U.set([$+Nt,te,tt+$t],V*3),L.set([$,he,tt],V*3),N.set([$-Nt,je,tt-$t],V*3),V>0&&S<=3&&a.add(w[V*2-2],w[V*2-1],$,tt,S,b)}const K=S<=1&&!(M&Xu)&&W>20,it=K&&!P?new Cv(s,r,Yu):void 0;if(K){let V=0;for(let $=4;$<W-4;$+=12){for(;V<T-2&&G[V+1]<$;)V++;const tt=($-G[V])/(G[V+1]-G[V]||1),nt=L[V*3]+(L[V*3+3]-L[V*3])*tt,ct=L[V*3+1]+(L[V*3+4]-L[V*3+1])*tt,It=L[V*3+2]+(L[V*3+5]-L[V*3+2])*tt;if(e!=null&&e(nt,It))continue;let xt=L[V*3+3]-L[V*3],Lt=L[V*3+5]-L[V*3+2];const Bt=Math.hypot(xt,Lt)||1;xt/=Bt,Lt/=Bt;const Nt=(L[V*3+4]-L[V*3+1])/Bt;if(it){it.addDash(nt,ct,It,xt,Lt,Nt);continue}const $t=Nt*3,Wt=-Lt*.16,he=xt*.16,te=.05;r.quad(nt+Wt,ct+te,It+he,nt+xt*3+Wt,ct+$t+te,It+Lt*3+he,nt+xt*3-Wt,ct+$t+te,It+Lt*3-he,nt-Wt,ct+te,It-he,Yu)}}const Y=P?s:new Rv(t,it??s,.04);for(let V=0;V<T-1;V++){const $=V*3,tt=$+3;if(e){const nt=e(L[$],L[$+2]),ct=e(L[tt],L[tt+2]);if(nt&&ct)continue;if(nt!==ct){let It=0,xt=1;for(let Me=0;Me<12;Me++){const me=(It+xt)/2;e(L[$]+(L[tt]-L[$])*me,L[$+2]+(L[tt+2]-L[$+2])*me)===nt?It=me:xt=me}const Lt=(It+xt)/2;for(const Me of[U,L,N])for(let me=0;me<3;me++)qu[(Me===U?0:Me===L?3:6)+me]=Me[$+me]+(Me[tt+me]-Me[$+me])*Lt;const[Bt,Nt,$t,Wt,he,te,je,pe,ze]=qu;nt?(Y.quad(Bt,Nt,$t,U[tt],U[tt+1],U[tt+2],L[tt],L[tt+1],L[tt+2],Wt,he,te,C,D),Y.quad(Wt,he,te,L[tt],L[tt+1],L[tt+2],N[tt],N[tt+1],N[tt+2],je,pe,ze,C,D)):(Y.quad(U[$],U[$+1],U[$+2],Bt,Nt,$t,Wt,he,te,L[$],L[$+1],L[$+2],C,D),Y.quad(L[$],L[$+1],L[$+2],Wt,he,te,je,pe,ze,N[$],N[$+1],N[$+2],C,D));continue}}if(Y.quad(U[$],U[$+1],U[$+2],U[tt],U[tt+1],U[tt+2],L[tt],L[tt+1],L[tt+2],L[$],L[$+1],L[$+2],C,D),Y.quad(L[$],L[$+1],L[$+2],L[tt],L[tt+1],L[tt+2],N[tt],N[tt+1],N[tt+2],N[$],N[$+1],N[$+2],C,D),P){const nt=B(x===2?7297604:13225162);for(const ct of[U,N])s.quad(ct[$],ct[$+1],ct[$+2],ct[tt],ct[tt+1],ct[tt+2],ct[tt],ct[tt+1]+1.05,ct[tt+2],ct[$],ct[$+1]+1.05,ct[$+2],nt),s.quad(ct[$],ct[$+1]-.7,ct[$+2],ct[tt],ct[tt+1]-.7,ct[tt+2],ct[tt],ct[tt+1],ct[tt+2],ct[$],ct[$+1],ct[$+2],B(9276036))}}if(S<=5&&!P)for(const V of[0,T-1]){const $=L[V*3],tt=L[V*3+1],nt=L[V*3+2];if(e!=null&&e($,nt))continue;const ct=16;for(let It=0;It<ct;It++){const xt=It/ct*Math.PI*2,Lt=(It+1)/ct*Math.PI*2,Bt=$+Math.cos(Lt)*y/2,Nt=nt+Math.sin(Lt)*y/2,$t=$+Math.cos(xt)*y/2,Wt=nt+Math.sin(xt)*y/2;Y.tri($,tt,nt,Bt,t.yAt(Bt,Nt)+F,Nt,$t,t.yAt($t,Wt)+F,Wt,C,D)}}if(it==null||it.finish(),M&Xu){let V=0,$=0;for(let Lt=0;Lt<T;Lt++)V+=w[Lt*2],$+=w[Lt*2+1];V/=T,$/=T;const tt=T>>1,nt=Ov(w[0],w[1],w[tt*2],w[tt*2+1],w[T*2-2],w[T*2-1]),ct=nt?nt.x:V,It=nt?nt.z:$,xt=nt?nt.r:Math.hypot(w[0]-V,w[1]-$);xt>3&&xt<40&&!(e!=null&&e(ct,It))&&!l.some(Lt=>Math.hypot(Lt.x-ct,Lt.z-It)<12)&&l.push({x:ct,z:It,r:xt,w:y})}S<=3&&o.push({cls:S,name:b>=0?i.names[b]:"",width:y,flags:M,pts:L,length:W})}const c=B(13158078),h=B(7314002),u=B(4943936);for(const S of l){const x=S.r-S.w/2-.3;if(x<1.2)continue;const M=t.yAt(S.x,S.z)+.2;s.frame(S.x,M,S.z,0),s.cyl(0,0,0,x,x,.4,14,c,h),s.blob(0,.9,0,x*.45,.8,x*.45,6,3,u,B(7181400)),s.frame()}const d=new Pn({vertexColors:!0,roughness:.92,metalness:0,side:Re,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),f=s.build();n&&(f.setAttribute("aAsphalt",f.getAttribute("glow")),n(d,!0));const p=new Zt(Zu(f),d);p.receiveShadow=!0,p.name="roads";const _=fa(new Cn({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})),m=new Zt(Zu(r.build()),_);m.name="road-markings";const g=new en;return g.add(p,m),{group:g,index:a,paths:o}}function Zu(i){return i.deleteAttribute("glow"),i}function Ov(i,t,e,n,s,r){const a=2*(i*(n-r)+e*(r-t)+s*(t-n));if(Math.abs(a)<.001)return null;const o=i*i+t*t,l=e*e+n*n,c=s*s+r*r,h=(o*(n-r)+l*(r-t)+c*(t-n))/a,u=(o*(s-e)+l*(i-s)+c*(e-i))/a;return{x:h,z:u,r:Math.hypot(i-h,t-u)}}class zv{constructor(t,e=1){Z(this,"ratio");Z(this,"floor");Z(this,"sampleSeconds",0);Z(this,"sampleFrames",0);Z(this,"slowSeconds",0);Z(this,"smoothSeconds",0);Z(this,"retryAfter",0);Z(this,"lastRaise",-1/0);this.ceiling=t,this.ratio=t,this.floor=Math.min(t,e)}resetSampling(){this.sampleSeconds=this.sampleFrames=this.slowSeconds=this.smoothSeconds=0}update(t,e,n){if(e<=0||e>=.25)return this.resetSampling(),!1;if(this.sampleSeconds+=e,this.sampleFrames+=1,this.sampleSeconds<1)return!1;const s=this.sampleSeconds,r=this.sampleFrames/s;return this.sampleSeconds=this.sampleFrames=0,this.slowSeconds=r<n*.9?this.slowSeconds+s:0,this.slowSeconds>=2&&this.ratio>this.floor?(this.ratio=Math.max(this.floor,this.ratio*.75),this.retryAfter=t+(t-this.lastRaise<15?90:20),this.resetSampling(),!0):this.ratio>=this.ceiling||t<this.retryAfter||(this.smoothSeconds=r>=n*.97?this.smoothSeconds+s:0,this.smoothSeconds<8)?!1:(this.ratio=Math.min(this.ceiling,this.ratio/.75),this.lastRaise=t,this.resetSampling(),!0)}}const fr=-36,Gl=170,Bv=`
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
`,kl=2;function Gv(){const i=new qs(new Uint8Array([128,128,128,255]),1,1);return i.needsUpdate=!0,{fallback:i,maps:Array.from({length:kl},()=>({value:i})),rects:Array.from({length:kl},()=>({value:new de(0,0,1,0)}))}}function kv({pos:i,nor:t,uv:e,idx:n}){const s=new Ee;return s.setAttribute("position",new ye(i,3)),s.setAttribute("normal",new ye(t,3)),s.setAttribute("uv",new ye(e,2)),s.setIndex(new ye(n,1)),s.computeBoundingSphere(),s}function Hv(i,t,e,n,s){const r=new Pn({map:e,roughness:.96,metalness:0});r.onBeforeCompile=o=>{o.uniforms.uTide=n;for(let l=0;l<kl;l++)o.uniforms["uDetail"+l]=s.maps[l],o.uniforms["uDetailRect"+l]=s.rects[l];o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform float uTide;
uniform sampler2D uDetail0;
uniform vec4 uDetailRect0;
uniform sampler2D uDetail1;
uniform vec4 uDetailRect1;
${Bv}`).replace("#include <map_fragment>",`#include <map_fragment>
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
          float above = vWPos.y / ${Xn.toFixed(2)} - uTide;
          float wet = smoothstep(0.45, 0.03, above);
          diffuseColor.rgb *= mix(1.0, 0.76, wet);
        }`)},r.customProgramCacheKey=()=>"inverloch-terrain-3";const a=new en;for(const o of t){const l=new Zt(kv(o),r);l.receiveShadow=!0,l.name="terrain",a.add(l)}return a.add(Wv(i),Xv(i)),a}function Vv(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function Wv(i){const t=Vv(i),e=t.length,n=[],s=[],r=[],a=new wt(9074780),o=new wt(6180669),l=new wt(3813673),c=[[0,a,o],[1,o,l]];for(let d=0;d<e;d++){const[f,p]=t[d],[_,m]=t[(d+1)%e],g=i.yAt(f,p),S=i.yAt(_,m),x=_-f,M=m-p,E=Math.hypot(x,M)||1,b=-M/E*-1,v=x/E*-1;for(const[y,w,T]of c){const D=y===0?g:g-6,F=y===0?g-6:fr,P=y===0?S:S-6,k=y===0?S-6:fr;n.push(f,D,p,_,P,m,_,k,m,f,D,p,_,k,m,f,F,p);for(const O of[w,w,T,w,T,T])s.push(O.r,O.g,O.b);for(let O=0;O<6;O++)r.push(b,0,v)}}const h=new Ee;h.setAttribute("position",new fe(n,3)),h.setAttribute("normal",new fe(r,3)),h.setAttribute("color",new fe(s,3));const u=new Zt(h,new Pn({vertexColors:!0,roughness:1,side:Re}));return u.name="skirt",u}function Xv(i){const t=new en,e=i.xMax-i.xMin+Gl*2,n=i.zMax-i.zMin+Gl*2,s=190,r=(i.xMin+i.xMax)/2,a=(i.zMin+i.zMax)/2,o=new Zt(new Fi(e,s,n),new Pn({color:1779245,roughness:.75,metalness:.1}));o.position.set(r,fr-s/2,a),o.receiveShadow=!0,t.add(o);const l=document.createElement("canvas");l.width=2048,l.height=160;const c=l.getContext("2d");c.fillStyle="#1b262d",c.fillRect(0,0,l.width,l.height),c.fillStyle="#e9d9a6",c.textBaseline="middle",c.font="600 78px 'Space Grotesk', system-ui, sans-serif",c.fillText("INVERLOCH",40,84);const h=c.measureText("INVERLOCH").width;c.fillStyle="#9fb4bd",c.font="400 42px 'Space Grotesk', system-ui, sans-serif",c.fillText("Bass Coast, Victoria   ·   38.63° S  145.73° E   ·   Anderson Inlet & Bass Strait",40+h+46,88);const u=new tl(l);u.colorSpace=Pe,u.anisotropy=8;const d=1700,f=new Zt(new kn(d,d*(l.height/l.width)),new Cn({map:u,toneMapped:!1}));f.position.set(r-e/2+d/2+110,fr-s/2,a+n/2+.6),t.add(f);const p=document.createElement("canvas");p.width=p.height=256;const _=p.getContext("2d");_.fillStyle="#e9d9a6",_.beginPath(),_.moveTo(128,18),_.lineTo(176,150),_.lineTo(128,122),_.lineTo(80,150),_.closePath(),_.fill(),_.font="700 86px 'Space Grotesk', system-ui, sans-serif",_.textAlign="center",_.fillText("N",128,240);const m=new tl(p);m.colorSpace=Pe;const g=new Zt(new kn(130,130),new Cn({map:m,transparent:!0,toneMapped:!1}));return g.rotation.x=-Math.PI/2,g.position.set(i.xMax+Gl/2,fr+.6,i.zMin+120),t.add(g),t}const Ku=[[-.375,-.125],[.125,-.375],[.375,.125],[-.125,.375]],Yv=4e3,qv=12e3;class Zv{constructor(t,e){Z(this,"size",new Ct);Z(this,"screen",new zc);Z(this,"screenCamera",new ul);Z(this,"blend",new nn({depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{previous:{value:null},currentFrame:{value:null},weight:{value:1}},vertexShader:`
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
    `}));Z(this,"quad",new Zt(new kn(2,2),this.blend));Z(this,"history");Z(this,"sample");Z(this,"capture");this.renderer=t,this.onFinish=e,this.quad.frustumCulled=!1,this.screen.add(this.quad)}get pending(){return!!this.capture&&!this.capture.encoding}start(){return this.capture?Promise.reject(new Error("An antialiased photo is already being captured.")):new Promise((t,e)=>{const n=this.capture={resolve:t,reject:e,deadline:performance.now()+qv,samples:0,bestSamples:0,encoding:!1};this.armTimeout(n)})}draw(t,e,n){var o,l;const s=this.capture;if(!s||s.encoding)return!1;this.renderer.getDrawingBufferSize(this.size);const{x:r,y:a}=this.size;(((o=this.history)==null?void 0:o.image.width)!==r||((l=this.history)==null?void 0:l.image.height)!==a)&&(this.releaseTextures(),this.history=new nh(r,a),this.sample=new nh(r,a),this.blend.uniforms.previous.value=this.history,this.blend.uniforms.currentFrame.value=this.sample,n=!0),n&&(s.samples=0);try{return this.drawSample(t,e,s.samples),s.samples++,s.samples===Ku.length?this.encode(s):(this.renderer.copyFramebufferToTexture(this.history),s.samples>s.bestSamples&&(s.bestSamples=s.samples,this.armTimeout(s))),!0}catch{return this.cancel("The browser could not capture an antialiased photo."),!1}}drawSample(t,e,n){const[s,r]=Ku[n],a=e.projectionMatrix.elements,o=a[8],l=a[9];a[8]+=2*s/this.size.x,a[9]+=2*r/this.size.y,e.projectionMatrixInverse.copy(e.projectionMatrix).invert();const c=this.renderer.shadowMap.autoUpdate;n>0&&(this.renderer.shadowMap.autoUpdate=!1);try{this.renderer.render(t,e)}finally{a[8]=o,a[9]=l,e.projectionMatrixInverse.copy(e.projectionMatrix).invert(),this.renderer.shadowMap.autoUpdate=c}n>0&&(this.renderer.copyFramebufferToTexture(this.sample),this.blend.uniforms.weight.value=1/(n+1),this.renderer.render(this.screen,this.screenCamera))}encode(t){t.encoding=!0,this.armTimeout(t),this.releaseTextures(),this.onFinish(),this.renderer.domElement.toBlob(e=>{this.finish(t)&&(e?t.resolve(e):t.reject(new Error("The browser did not write the antialiased PNG.")))},"image/png")}armTimeout(t){window.clearTimeout(t.timeout);const e=Math.min(Yv,Math.max(0,t.deadline-performance.now())),n=t.encoding?"The browser did not finish writing the antialiased PNG.":"The view did not stay still long enough to save an antialiased photo.";t.timeout=window.setTimeout(()=>this.cancel(n),e)}cancel(t){const e=this.capture;!e||!this.finish(e)||e.reject(new Error(t))}finish(t){return this.capture!==t?!1:(window.clearTimeout(t.timeout),this.capture=void 0,t.encoding||(this.releaseTextures(),this.onFinish()),!0)}releaseTextures(){var t,e;(t=this.history)==null||t.dispose(),(e=this.sample)==null||e.dispose(),this.history=this.sample=void 0,this.blend.uniforms.previous.value=null,this.blend.uniforms.currentFrame.value=null}dispose(){this.cancel("The Inverloch view was closed before saving the photo."),this.quad.geometry.dispose(),this.blend.dispose()}}function Ra(i,t,e,n,s,r,a,o,l,c){const h=new al(1,0),u=h.getAttribute("position"),d=[];for(let f=0;f<u.count;f++){const p=u.getX(f),_=u.getY(f),m=u.getZ(f),g=Math.sin(p*12.9898+_*78.233+m*37.719+o*4.1)*43758.5453,S=.8+(g-Math.floor(g))*.42;d.push([t+p*s*S,e+_*r*(_<0?.75:S),n+m*a*S])}for(let f=0;f<d.length;f+=3){const[p,_,m]=[d[f],d[f+1],d[f+2]],g=Kt.clamp(((p[1]+_[1]+m[1])/3-(e-r))/(2*r),0,1);i.tri(p[0],p[1],p[2],_[0],_[1],_[2],m[0],m[1],m[2],rr(l,c,g))}h.dispose()}function Ri(i){const t=i.build();return t.deleteAttribute("glow"),t}function Kv(){const i=[];let t=new ee;return Ra(t,0,.44,0,.82,.56,.82,1,B(3098152),B(7507285)),i.push(Ri(t)),t=new ee,t.cyl(0,0,0,.04,.026,.56,4,B(11905429)),Ra(t,0,.72,0,.36,.3,.36,2,B(4151352),B(9349240)),Ra(t,.17,.52,.1,.24,.19,.24,3,B(3887925),B(8362603)),i.push(Ri(t)),t=new ee,t.cyl(0,0,0,.055,.04,.4,4,B(7297608)),Ra(t,0,.64,0,.46,.38,.46,4,B(3695150),B(9091170)),i.push(Ri(t)),t=new ee,t.cyl(0,0,0,.035,.03,.16,4,B(5916728)),t.cyl(0,.12,0,.23,.11,.42,6,B(2506539)),t.cyl(0,.5,0,.15,0,.5,6,B(4020796)),i.push(Ri(t)),i}function $u(i){const t=[],e=i?5:7;let n=new ee;return n.blob(0,.48,0,.81,.52,.81,e,2,B(4018735),B(7507285)),t.push(Ri(n)),n=new ee,i||(n.cyl(0,0,0,.04,.026,.56,3,B(11905429)),n.blob(.17,.52,.1,.24,.19,.24,4,2,B(3887925),B(8362603))),n.blob(i?.05:0,.72,0,i?.39:.36,.3,.36,e,2,B(4546110),B(9349240)),t.push(Ri(n)),n=new ee,i||n.cyl(0,0,0,.055,.04,.4,3,B(7297608)),n.blob(0,.64,0,.46,.38,.46,e,2,B(3695150),B(9091170)),t.push(Ri(n)),n=new ee,i?n.cyl(0,.15,0,.23,0,.85,e,B(4020796)):(n.cyl(0,.12,0,.23,.11,.42,4,B(2506539)),n.cyl(0,.5,0,.15,0,.5,5,B(4020796))),t.push(Ri(n)),t}function $v(i,t,e,n=()=>!1){const s=new en;s.name="trees";const r=[Kv(),$u(!1),$u(!0)],a=[],o=new jr({vertexColors:!0}),l=650,c=new Map,h=i.trees,u=Ne(88);for(let x=0;x<h.length;x+=l_){if(e<1&&u()>e||n(h[x]/4,h[x+1]/4))continue;const E=`${h[x+2]>>8}:${Math.floor(h[x]/4/l)}:${Math.floor(h[x+1]/4/l)}`;let b=c.get(E);b||c.set(E,b=[]),b.push(x)}const d=new ne,f=new En,p=new X,_=new X,m=new X(0,1,0),g=new wt;let S=0;for(const[x,M]of c){const E=Number(x.split(":")[0]),b=r.map((v,y)=>{const w=new Je(v[E],o,M.length);return w.name=["tree-near","tree-mid","tree-far"][y],w});M.forEach((v,y)=>{const w=h[v]/4,T=h[v+1]/4,C=(h[v+2]&255)/10,D=Ne(v*2654435761+11);_.set(w,t.yAt(w,T)-.15,T),f.setFromAxisAngle(m,D()*Math.PI*2);const F=.85+D()*.35;p.set(C*F,C,C*(.85+D()*.35)),d.compose(_,f,p);const P=.8+D()*.34;g.setRGB(P*(.94+D()*.14),P,P*(.9+D()*.12));for(const k of b)k.setMatrixAt(y,d),k.setColorAt(y,g)}),a.push(new Lu(b.map(v=>[v]),s)),S+=M.length}return{group:s,count:S,updateLod(x,M,E){for(const b of a)b.update(x,M,E)}}}const Jv=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Qv=`
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
}`;function jv(i,t,e){const n=i.w*i.h,s=new Uint16Array(n*2);for(let p=0;p<n;p++)s[p*2]=Gc.toHalfFloat(i.raw[p]),s[p*2+1]=Gc.toHalfFloat(i.exposure[p]);const r=new qs(s,i.w,i.h,pi,yn);r.minFilter=r.magFilter=Xe,r.wrapS=r.wrapT=Fn,r.needsUpdate=!0;const a={tField:{value:r},uSize:{value:new Ct(i.sizeX,i.sizeZ)},uTide:t,uTime:{value:0},uSunDir:{value:new X(.4,.8,.3).normalize()},uSunColor:{value:new wt(16773848)},uShallow:{value:new wt(7129789)},uDeep:{value:new wt(937848)},uSky:{value:new wt(12573938)},uFoam:{value:1}};e&&(a.uInletRain=e);const o=new nn({uniforms:a,vertexShader:Jv,fragmentShader:Qv,transparent:!0,depthWrite:!1,defines:e?{RAIN_RIPPLES:1}:{}}),l=new kn(i.xMax-i.xMin,i.zMax-i.zMin);l.rotateX(-Math.PI/2);const c=new Zt(l,o);c.position.set((i.xMin+i.xMax)/2,t.value*Xn,(i.zMin+i.zMax)/2),c.renderOrder=2,c.name="water";const h=new Zt(new Ee,new Cn({color:1929103,transparent:!0,opacity:.8,side:Re,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));h.renderOrder=1,h.name="water-edge";const u=[];for(let p=0;p<i.nx;p++)u.push([i.xMin+p*i.dx,i.zMin]);for(let p=1;p<i.nz;p++)u.push([i.xMax,i.zMin+p*i.dz]);for(let p=i.nx-2;p>=0;p--)u.push([i.xMin+p*i.dx,i.zMax]);for(let p=i.nz-2;p>=1;p--)u.push([i.xMin,i.zMin+p*i.dz]);const d=u.map(([p,_])=>i.yAt(p,_)),f=p=>{t.value=p;const _=p*Xn;c.position.y=_;const m=[],g=u.length;for(let x=0;x<g;x++){const M=(x+1)%g,E=d[x],b=d[M];if(E>=_&&b>=_)continue;const[v,y]=u[x],[w,T]=u[M],C=Math.min(E,_),D=Math.min(b,_);m.push(v,_,y,w,_,T,w,D,T,v,_,y,w,D,T,v,C,y)}h.geometry.dispose();const S=new Ee;S.setAttribute("position",new fe(m,3)),h.geometry=S};return f(t.value),{mesh:c,skirt:h,uniforms:a,setTide:f}}const t1="detail-abeckett-ultra-v1.json",Hl=-38.63351,Ju=145.72774,e1=111320*Math.cos(Hl*Math.PI/180);class n1{constructor(t,e,n,s,r){Z(this,"group");Z(this,"daylight",{value:1});Z(this,"request");Z(this,"retryAt",0);Z(this,"origin");Z(this,"sx");Z(this,"sz");this.scene=t,this.manifest=e,this.ground=s,this.redraw=r,this.origin=n(Hl,Ju);const a=n(Hl-100/110540,Ju+100/e1);this.sx=(a[0]-this.origin[0])/100,this.sz=(a[1]-this.origin[1])/100}update(t,e){this.daylight.value=Math.min(1,.08+e*.3);const n=this.origin[0]+22*this.sx,s=this.origin[1]+37*this.sz,r=Math.hypot(t.x-n,t.y-this.ground(n,s),t.z-s);if(this.group)this.group.visible=r<(this.group.visible?155:130);else if(r>220&&this.request)this.request.abort(),this.request=void 0;else if(r<155&&!this.request&&performance.now()>=this.retryAt){const a=this.request=new AbortController;this.load(a)}}async load(t){try{const e=new URL(t1,new URL(this.manifest,document.baseURI)),n=await fetch(e,{signal:t.signal});if(!n.ok)throw new Error(String(n.status));const s=await n.json();if(t.signal.aborted)return;const r=this.build(s);this.group=r,this.scene.add(r),this.redraw()}catch{t.signal.aborted||(this.retryAt=performance.now()+3e4)}finally{this.request===t&&(this.request=void 0)}}build(t){const e=new ee,n=new ee,s=new ee,r=B(6842465),a=B(10196618),o=B(3883588),l=B(12039851),c=B(16777215);for(const[d,f,p,_,m,g,S]of t.fronts){const x=Math.hypot(p-d,_-f),M=Math.atan2(m,g);e.frame(d,0,f,M),n.frame(d,0,f,M);const E=T=>3.15+(S?.24*(1-T/3.2):0);for(const T of[.32,1.58,2.97]){const C=E(T);e.box(.05,C-.09,T-.045,x-.05,C,T+.045,r)}const b=Math.max(2,Math.round(x/1.25));for(let T=0;T<=b;T++){const C=.095+T*(x-.19)/b;e.quad(C,E(.22)-.06,.22,C,E(3.05)-.06,3.05,C+.07,E(3.05)-.06,3.05,C+.07,E(.22)-.06,.22,a)}e.box(.055,3.045,3.14,x-.055,3.105,3.3,r);const v=x-1.7,y=Math.max(2,Math.round((x-1.4)/2.1)),w=S?.22:.34;for(let T=0;T<y;T++){const C=.18+v*T/y+.055,D=.18+v*(T+1)/y-.055;n.quad(C,.57,w,D,.57,w,D,2.72,w,C,2.72,w,c),e.box(C-.035,.51,w-.045,D+.035,.56,w+.04,o),e.box(C-.035,2.25,w-.025,D+.035,2.28,w+.02,l)}e.box(x-1.17,.93,w+.05,x-1.135,1.35,w+.085,l),e.box(x-1.28,.13,.15,x-.2,.17,.42,a)}for(const[d,f,p,_]of t.trees){const m=Ne(_+431),g=[5466952,7701590,8819806,6781777].map(B);s.frame(d,0,f);for(let S=0;S<90;S++){const x=m()*Math.PI*2,M=(1.05+m()*2.25)*p,E=M*Math.sin(x),b=M*Math.cos(x),v=(6.55+1.6*m()-.35*M)*p,y=(.11+.22*m())*p,w=(.16+.28*m())*p,T=g[S%4];s.tri(E-y,v+w,b,E+y,v+.42*w,b+.1,E,v-w,b+.18,T)}}const h=new en;h.name="A'Beckett Street close detail";const u=(d,f,p)=>{const _=d.build(),m=_.getAttribute("position");for(let S=0;S<m.count;S++){const x=this.origin[0]+m.getX(S)*this.sx,M=this.origin[1]+m.getZ(S)*this.sz;m.setXYZ(S,x,this.ground(x,M)+.08+m.getY(S),M)}_.deleteAttribute("glow"),_.computeBoundingSphere();const g=new Zt(_,f);g.castShadow=p,g.receiveShadow=p,h.add(g)};return u(e,new Pn({vertexColors:!0,roughness:.73,metalness:.1,side:Re}),!0),u(s,new jr({vertexColors:!0,side:Re}),!0),u(n,new nn({uniforms:{daylight:this.daylight},transparent:!0,depthWrite:!1,vertexShader:`varying vec3 world, facing;
        void main(){vec4 p=modelMatrix*vec4(position,1.);world=p.xyz;facing=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*p;}`,fragmentShader:`varying vec3 world, facing; uniform float daylight;
        void main(){vec3 eye=normalize(cameraPosition-world),n=normalize(facing),r=reflect(-eye,n);
          float sky=smoothstep(-.09,.27,r.y),f=pow(1.-clamp(dot(eye,n),0.,1.),3.);
          gl_FragColor=vec4(daylight*mix(vec3(.13,.18,.15),vec3(.54,.68,.78),sky),.045+.19*f+.085*sky);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),!1),h}dispose(){var t;(t=this.request)==null||t.abort()}}const Qu=-.9,ju=1.3,td=.2,Cs={x:260,z:150,dist:3900,polar:55,azimuth:16},i1={ultra:{step:1,trees:1,shadow:4096,pixelRatio:2},high:{step:1,trees:1,shadow:4096,pixelRatio:2},medium:{step:2,trees:.6,shadow:2048,pixelRatio:1.3},low:{step:2,trees:.35,shadow:0,pixelRatio:1}},s1={ultra:{cars:[200,400,1100],trees:[260,770,4e3]},high:{cars:[170,340,1050],trees:[235,710,3800]},medium:{cars:[120,270,820],trees:[160,530,2850]},low:{cars:[85,190,600],trees:[100,380,2200]}},r1=()=>new Promise(i=>requestAnimationFrame(()=>i()));function a1(i,t){const n=t.positions,s=t.normals,r=t.colors,a=t.uvs,o=t.indices,l=o?o.length:n.length/3,c=new ne().fromArray(Array.from(t.matrix)),h=new zt().getNormalMatrix(c),u=new X,d=x=>{const M=o?o[x]:x,E=new Float64Array(11);return u.set(n[M*3],n[M*3+1],n[M*3+2]).applyMatrix4(c),E[0]=u.x,E[1]=u.y,E[2]=u.z,s&&(u.set(s[M*3],s[M*3+1],s[M*3+2]).applyMatrix3(h).normalize(),E[3]=u.x,E[4]=u.y,E[5]=u.z),r&&(E[6]=r[M*3],E[7]=r[M*3+1],E[8]=r[M*3+2]),a&&(E[9]=a[M*2],E[10]=a[M*2+1]),E},f=[],p=[],_=[],m=[],g=x=>{f.push(x[0],x[1]+i.yAt(x[0],x[2]),x[2]),s&&p.push(x[3],x[4],x[5]),r&&_.push(x[6],x[7],x[8]),a&&m.push(x[9],x[10])},S=(x,M,E)=>{g(x),g(M),g(E)};for(let x=0;x+2<l;x+=3){const M=d(x),E=d(x+1),b=d(x+2);ku(i,M,E,b,S)}return{positions:new Float32Array(f),normals:s?new Float32Array(p):void 0,colors:r?new Float32Array(_):void 0,uvs:a?new Float32Array(m):void 0}}function o1(i,t,e){let n=0;for(let s=0;s<i.length;s++){const r=i[s],a=i[(s+1)%i.length],o=(a[0]-r[0])*(e-r[1])-(a[1]-r[1])*(t-r[0]);if(o!==0){if(n===0)n=Math.sign(o);else if(Math.sign(o)!==n)return!1}}return!0}const l1=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class c1{constructor(t,e,n,s){Z(this,"renderer");Z(this,"scene",new zc);Z(this,"camera",new Ln(38,1,5,9e4));Z(this,"controls");Z(this,"atmosphere");Z(this,"clouds");Z(this,"hasWeatherTime",!1);Z(this,"weather",new dv);Z(this,"showers");Z(this,"storm");Z(this,"water");Z(this,"coastalHaze");Z(this,"stillPhoto");Z(this,"onPhotoVisibilityChange",()=>{var t;document.hidden&&((t=this.stillPhoto)==null||t.cancel("Keep the Inverloch view visible while saving the photo."))});Z(this,"hf");Z(this,"life");Z(this,"trees");Z(this,"solid");Z(this,"designedWalls",[]);Z(this,"labels");Z(this,"places",[]);Z(this,"tide",{value:td});Z(this,"raf",0);Z(this,"last",0);Z(this,"time",0);Z(this,"dirty",!0);Z(this,"ultraStreet");Z(this,"animating",!0);Z(this,"disposed",!1);Z(this,"abort",new AbortController);Z(this,"worker");Z(this,"detailStreaming");Z(this,"resizeObserver");Z(this,"flight");Z(this,"lastCompass",NaN);Z(this,"width",1);Z(this,"height",1);Z(this,"quality","high");Z(this,"resolution");Z(this,"pacing");Z(this,"solarMinutes",NaN);Z(this,"roadPaths",[]);Z(this,"external");Z(this,"meta");Z(this,"shadowAim",new X);Z(this,"lookDir",new X);Z(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=Kt.degToRad(e.azimuth),r=-Math.sin(s),a=-Math.cos(s),o=Math.cos(s),l=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+a*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-a*n};break;case"ArrowLeft":c={...e,x:e.x-o*n,z:e.z-l*n};break;case"ArrowRight":c={...e,x:e.x+o*n,z:e.z+l*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=Cs;break;default:return}t.preventDefault(),this.fly(c,.3)});Z(this,"frame",t=>{var p,_,m,g,S,x,M,E,b,v;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,document.hidden){this.pacing.reset(),this.resolution.resetSampling();return}if(this.flight){const y=this.flight;y.t=Math.min(1,y.t+e/y.duration);const w=l1(y.t),T=(C,D)=>C+(D-C)*w;this.applyView({x:T(y.from.x,y.to.x),z:T(y.from.z,y.to.z),dist:Math.exp(T(Math.log(y.from.dist),Math.log(y.to.dist))),polar:T(y.from.polar,y.to.polar),azimuth:T(y.from.azimuth,y.to.azimuth)}),y.t>=1&&(this.flight=void 0)}this.controls&&!this.external&&this.controls.update()&&(this.dirty=!0);const n=(p=this.stillPhoto)!=null&&p.pending?this.stillPhoto:void 0;if(!n&&this.atmosphere.update(e)&&(this.dirty=!0),!n&&this.animating&&(this.time+=e,this.water.uniforms.uTime.value=this.time,(_=this.life)==null||_.update(e,this.time),this.dirty=!0),!n&&this.opts.assets.detail){const{x:y,y:w,z:T}=this.camera.position;(m=this.detailStreaming)==null||m.update(t/1e3,y,w,T,w-this.hf.yAt(y,T))}if(!this.dirty&&!n)return;const s=this.pacing.takeFrame(t);if(s===void 0)return;const r=this.dirty;this.dirty=!1,!n&&this.animating&&this.resolution.update(t/1e3,s,this.pacing.target)&&this.renderer.setPixelRatio(this.resolution.ratio);const a=this.camera;(g=this.ultraStreet)==null||g.update(a.position,this.atmosphere.sun.intensity);let o,l=1/0;const c=!!this.controls&&!this.external,h=this.hf.yAt(a.position.x,a.position.z);if(c&&(a.position.y=Math.max(a.position.y,h+12)),!n||!this.hasWeatherTime){const y=this.weatherTime(),w=this.weather;w.update(y),this.clouds.update(y),this.clouds.setCover(w.cover),this.clouds.setFlash(((S=this.storm)==null?void 0:S.update(y,w,a.position,this.opts.onThunder))??0);const T=w.rain>.015&&a.position.y-h<4&&this.solidAt(a.position.x,a.position.z);(x=this.showers)==null||x.update(w.rain,w.wetness,this.time,void 0,void 0,T),this.hasWeatherTime=!0}const u=Math.max(1,a.position.y-Math.max(h,this.waterLevel));if(this.controls&&c)o=a.position.distanceTo(this.controls.target),this.shadowAim.copy(this.controls.target);else{a.getWorldDirection(this.lookDir);const y=Math.min(this.lookDir.y<-.05?u/-this.lookDir.y:1e9,40+u*3,3e3);this.shadowAim.copy(a.position).addScaledVector(this.lookDir,y),o=Math.max(y,u)*1.3,l=Math.max(350,u*10)}const d=c?Kt.clamp(o*.02,2,80):Kt.clamp(o*.012,.4,60);Math.abs(d-a.near)>a.near*.05&&(a.near=d,a.updateProjectionMatrix());const f=s1[this.quality];if((M=this.life)==null||M.updateParkedLod(a.position,u,f.cars),(E=this.trees)==null||E.updateLod(a.position,u,f.trees),this.atmosphere.aimShadow(this.shadowAim,o),n||(b=this.detailStreaming)==null||b.applyReady(),n!=null&&n.draw(this.scene,a,r)||this.renderer.render(this.scene,a),(v=this.labels)==null||v.update(a,this.width,this.height,l),c){const y=Math.round(this.currentView().azimuth);y!==this.lastCompass&&(this.lastCompass=y,this.cb.onCompass(y))}});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.external=!!s.external,this.pacing=new L_(s.frameTarget)}async init(){var G;try{this.renderer=new Nx({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D model needs.");return}const t=this.renderer;this.quality=this.pickQuality();let e=i1[this.quality];const n=(navigator.deviceMemory??8)>4;this.quality==="medium"&&n&&!this.opts.quality&&(e={...e,pixelRatio:2,trees:.8}),this.resolution=new zv(Math.min(window.devicePixelRatio||1,e.pixelRatio),this.quality==="low"?.6:1),t.setPixelRatio(this.resolution.ratio),t.outputColorSpace=Pe,t.toneMapping=Ga,t.shadowMap.enabled=e.shadow>0,t.shadowMap.type=Ps;const s=t.domElement;this.opts.external?(s.setAttribute("role","img"),s.setAttribute("aria-label","3D model of Inverloch")):(s.tabIndex=0,s.setAttribute("role","application"),s.setAttribute("aria-label","3D model of Inverloch. Drag to pan, right-drag to rotate, scroll to zoom. Arrow keys pan, plus and minus zoom, Q and E rotate.")),s.style.display="block",s.style.outlineOffset="-3px",this.container.appendChild(s),s.addEventListener("webglcontextlost",W=>{var U;W.preventDefault(),(U=this.stillPhoto)==null||U.cancel("The browser lost the graphics context during the photo."),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this model was using.")});const r=this.worker=new gv;let a;try{a=await u_(this.opts.assets,e.step,(W,U)=>this.cb.onProgress(W*.6,U),r,this.abort.signal)}catch(W){r.close(),this.disposed||this.cb.onError(W instanceof Error?W.message:"The model data could not be loaded.");return}if(this.disposed){a.ground.dispose();return}const{town:o,heights:l,exposure:c,surface:h,terrainTiles:u,ground:d}=a;this.meta=o.meta,this.quality==="ultra"&&this.opts.external&&((G=this.opts.clearPolygons)!=null&&G.length)&&this.opts.assets.detail&&(this.ultraStreet=new n1(this.scene,this.opts.assets.detail,this.fromLatLon.bind(this),(W,U)=>this.hf.yAt(W,U),()=>{this.dirty=!0}));const f=[...this.opts.clear??[],...(this.opts.clearLatLon??[]).map(W=>{const[U,L]=this.fromLatLon(W.lat,W.lon);return{x:U,z:L,r:W.r}})],p=(this.opts.clearPolygons??[]).map(W=>({pts:W.latLon.map(([U,L])=>this.fromLatLon(U,L)),roads:!!W.roads})),_=(W,U,L)=>p.some(N=>(!L||N.roads)&&o1(N.pts,W,U)),m=(W,U)=>f.some(L=>(W-L.x)**2+(U-L.z)**2<L.r*L.r)||_(W,U,!1),g=(this.opts.detailLatLon??[]).map(W=>{const[U,L]=this.fromLatLon(W.lat,W.lon);return{x:U,z:L,r:W.r}}),S=(W,U)=>g.some(L=>(W-L.x)**2+(U-L.z)**2<L.r*L.r);d.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());const x=async(W,U)=>{this.cb.onProgress(W,U),await r1()};if(await x(.62,"Shaping the terrain"),this.disposed){d.dispose();return}const M=this.hf=new hu(l,c,o.meta.grid[0],o.meta.grid[1],o.meta.size[0],o.meta.size[1],e.step,h),E=Gv();this.scene.add(Hv(M,u,d,this.tide,E));const b=navigator.deviceMemory??8;this.detailStreaming=new k_(this.opts.assets,this.quality==="low"||b<=4,E,d.anisotropy,r,()=>{this.dirty=!0});const v=this.showers=new Av(this.scene,this.camera,this.quality);this.water=jv(M,this.tide,this.quality==="ultra"?v.inletRain:void 0),this.scene.add(this.water.skirt,this.water.mesh),await x(.7,"Laying out the streets");const y=p.some(W=>W.roads)?(W,U)=>_(W,U,!0):void 0,w=Fv(o,M,y,(W,U)=>v.shadeAsphalt(W,U));this.scene.add(w.group),this.roadPaths=w.paths,await x(.78,"Raising the buildings");const T=P_(o,M,w.index,X_,m);this.scene.add(T.group),await x(.86,"Planting trees");const C=this.trees=$v(o,M,e.trees,(W,U)=>m(W,U)||__(W,U));this.scene.add(C.group),await x(.92,"Adding landmarks");const D={town:o,hf:M,footprints:T.footprints,roads:w.index,paths:w.paths,isClear:m,isDetail:S,hasDetail:g.length>0},F=ov(D);this.scene.add(F.group),this.solid=new Map,this.designedWalls=T.designedWalls;for(const W of[...T.footprints.map(U=>U.poly),...this.designedWalls]){if(W.length<6)continue;let U=1/0,L=-1/0,N=1/0,K=-1/0;for(let it=0;it<W.length;it+=2)U=Math.min(U,W[it]),L=Math.max(L,W[it]),N=Math.min(N,W[it+1]),K=Math.max(K,W[it+1]);for(let it=Math.floor(U/16);it<=Math.floor(L/16);it++)for(let Y=Math.floor(N/16);Y<=Math.floor(K/16);Y++){const V=`${it}_${Y}`,$=this.solid.get(V);$?$.push(W):this.solid.set(V,[W])}}if(this.life=new bv(D,F,this.quality==="ultra"),this.life.setTide(this.tide.value*Xn),this.scene.add(this.life.group),this.disposed)return;this.clouds=new t_,this.atmosphere=new i_(t,this.water,e.shadow,this.clouds),this.places=W_(o.meta,M);const P=this.places.find(W=>W.id==="inlet");this.storm=new fv(this.scene,P.x,P.z),this.clouds.uniforms.uFlashCenter.value=this.storm.center;const k=this.coastalHaze=new uv(P.x,P.z,this.atmosphere.horizon,this.quality==="ultra"&&this.opts.coastalMist!==!1,this.clouds,{value:this.atmosphere.sunDir},this.atmosphere.cloudShadowStrength);k.setWaterLevel(this.waterLevel),k.addWater(this.water.mesh),k.add(this.scene),this.scene.addEventListener("childadded",W=>k.add(W.child)),this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.labels=new H_(this.labelLayer,this.places,W=>this.flyToPlace(W)),this.external||this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const O=window.matchMedia("(prefers-reduced-motion: reduce)").matches;O&&(this.animating=!1),this.external?this.setExternalCamera(300,900,2600,0,-.42):O?this.applyView(Cs):(this.applyView({...Cs,dist:9500,polar:24,azimuth:-20}),this.fly(Cs,3.4)),this.cb.onProgress(1,"Ready"),this.cb.onReady({quality:this.quality,houses:o.counts.houses,mappedBuildings:o.counts.buildings,trees:C.count,roadPieces:o.counts.roads,sources:o.meta.sources,places:this.places}),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)}get isAnimating(){return this.animating}setAnimating(t){var e;t!==this.animating&&((e=this.resolution)==null||e.resetSampling()),this.animating=t,this.dirty=!0}setFrameTarget(t){var e;this.pacing.setTarget(t)&&((e=this.resolution)==null||e.resetSampling())}weatherTime(){return Date.now()/1e3}setExternalCamera(t,e,n,s,r){if(!this.external)return;const a=this.camera.position,o=this.camera.rotation,l=a.x===t&&a.y===e&&a.z===n,c=o.order==="YXZ"&&o.x===r&&o.y===s&&o.z===0;l&&c||(this.camera.position.set(t,e,n),this.camera.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}setExternal(t){if(!(t===this.external||!this.hf)){if(this.external=t,t)this.flight=void 0,this.controls&&(this.controls.enabled=!1);else{this.controls||this.setupControls(),this.controls.enabled=!0;const e=this.camera;e.getWorldDirection(this.lookDir);const n=Math.max(1,e.position.y),s=this.lookDir.y<-.05?Math.min(n/-this.lookDir.y,6e3):900,r=this.controls.target.copy(e.position).addScaledVector(this.lookDir,s);r.x=Kt.clamp(r.x,this.hf.xMin,this.hf.xMax),r.z=Kt.clamp(r.z,this.hf.zMin,this.hf.zMax),r.y=0,this.controls.update(),this.fly(Cs,1.6)}this.resize()}}getCamera(){const t=new un().setFromQuaternion(this.camera.quaternion,"YXZ"),e=this.camera.position;return{x:e.x,y:e.y,z:e.z,yaw:t.y,pitch:t.x}}fromLatLon(t,e){const n=this.meta;return n?[(e-n.origin[0])*n.metresPerDegree[0],-(t-n.origin[1])*n.metresPerDegree[1]]:[0,0]}addParts(t){const e=new en;e.name="guest";const n=t.map(s=>{var f;const r=s.onGround?{...s,...a1(this.hf,s),indices:void 0}:s,a=new Ee,o=(p,_)=>new ye(p instanceof Float32Array?p:Float32Array.from(p),_);a.setAttribute("position",o(r.positions,3)),r.colors&&a.setAttribute("color",o(r.colors,3)),r.uvs&&a.setAttribute("uv",o(r.uvs,2)),r.indices&&a.setIndex(Array.from(r.indices)),r.normals?a.setAttribute("normal",o(r.normals,3)):a.computeVertexNormals();let l=null;r.map&&(l=new be(r.map),l.colorSpace=Pe,l.wrapS=l.wrapT=Us,r.mapRepeat&&l.repeat.set(r.mapRepeat[0],r.mapRepeat[1]),l.anisotropy=4,l.needsUpdate=!0);const c=r.opacity??1,h={color:new wt().setRGB(...r.color??[1,1,1]),map:l,vertexColors:!!r.colors,transparent:c<1,opacity:c,side:r.doubleSide?Re:ui},u=r.unlit?new Cn(h):new Pn({...h,roughness:r.roughness??.9,metalness:r.metalness??0,emissive:new wt().setRGB(...r.emissive??[0,0,0]),emissiveIntensity:r.emissiveIntensity??1,emissiveMap:r.glowMap?l:null,flatShading:!!r.flatShading}),d=new Zt(a,u);return d.matrixAutoUpdate=!1,r.onGround||d.matrix.fromArray(Array.from(r.matrix)),r.wetAsphalt&&u instanceof Pn&&((f=this.showers)==null||f.shadeAsphalt(u)),d.userData.fixed=!!r.onGround,d.castShadow=c>=1,d.receiveShadow=!0,e.add(d),d});return this.scene.add(e),this.dirty=!0,{setMatrix:(s,r)=>{const a=n[s];!a||a.userData.fixed||(a.matrix.fromArray(Array.from(r)),a.matrixWorldNeedsUpdate=!0,this.dirty=!0)},setEmissive:(s,r,a,o,l)=>{var h;const c=(h=n[s])==null?void 0:h.material;c instanceof Pn&&(c.emissive.setRGB(r,a,o),c.emissiveIntensity=l,this.dirty=!0)},remove:()=>{var s;this.scene.remove(e);for(const r of n){r.geometry.dispose();const a=r.material;(s=a.map)==null||s.dispose(),a.dispose()}this.dirty=!0}}}addTrafficCar(t,e,n,s,r){if(!this.life)throw new Error("Wait for the Inverloch model before adding traffic");const{mesh:a,scale:o}=this.life.makeTrafficCar(t,e,n,s,r);let l;return{setMatrix:(c,h)=>{c===0&&(a.matrix.fromArray(h),a.matrix.elements[13]+=Du,a.matrixWorldNeedsUpdate=!0,a.visible=!!(h[0]||h[1]||h[2]),this.dirty=!0)},setSignal:c=>{!l&&c&&(l=zu(t),l.scale.copy(o),a.add(l)),l&&(Bu(l,c),this.dirty=!0)},remove:()=>{a.removeFromParent(),a.geometry.dispose(),l==null||l.geometry.dispose(),l==null||l.material.dispose(),this.dirty=!0}}}addPad(t){const e=t.radius??t.halfWidth??5,n=t.radius??t.halfDepth??5,s=t.heading??0,r=Math.cos(s),a=Math.sin(s);let o=1/0,l=-1/0;for(const[f,p]of[[0,0],[-e,-n],[e,-n],[e,n],[-e,n],[0,-n],[0,n],[-e,0],[e,0]]){const _=this.hf.yAt(t.x+f*r+p*a,t.z-f*a+p*r);o=Math.min(o,_),l=Math.max(l,_)}const c=l+(t.lift??.25),h=c-o+1,u=t.radius?new el(t.radius,t.radius,h,24):new Fi(e*2,h,n*2),d=new Zt(u,new Pn({color:new wt().setRGB(...t.color),roughness:1}));return d.position.set(t.x,c-h/2,t.z),d.rotation.y=s,d.receiveShadow=!0,d.name="guest-pad",this.scene.add(d),this.dirty=!0,c}setSolarMinutes(t){!this.atmosphere||t===this.solarMinutes||(this.solarMinutes=t,this.atmosphere.setSolar(t),this.dirty=!0)}roadSpot(t){const e=t.trim().toLowerCase();let n=null;for(const p of this.roadPaths)p.name.toLowerCase()===e&&(!n||p.length>n.length)&&(n=p);if(!n)return null;const s=n.pts.length/3,r=0,a=s-1,o=s>>1;let l=n.pts[a*3]-n.pts[r*3],c=n.pts[a*3+2]-n.pts[r*3+2];const h=Math.hypot(l,c)||1;l/=h,c/=h;const u=Math.min(70,h*.5),d=n.pts[o*3]-l*u,f=n.pts[o*3+2]-c*u;return{x:d,y:this.hf.yAt(d,f)+38,z:f,yaw:Math.atan2(-l,-c),pitch:-.42}}groundAt(t,e){return this.hf?this.hf.yAt(t,e):0}nearestCar(t,e,n){var s;return((s=this.life)==null?void 0:s.nearestCar(t,e,n))??null}addCars(t){var e;(e=this.life)==null||e.addCars(t),this.dirty=!0}driveCar(t,e,n,s,r,a,o=0,l=0,c=0){var u;const h=((u=this.life)==null?void 0:u.driveCar(t,e,n,s,r,a,o,l,c))??!1;return this.dirty=!0,h}designedWallFootprints(){return this.designedWalls.map(t=>t.slice())}solidAt(t,e){var s;const n=(s=this.solid)==null?void 0:s.get(`${Math.floor(t/16)}_${Math.floor(e/16)}`);if(!n)return!1;for(const r of n){let a=!1;for(let o=0,l=r.length/2-1;o<r.length/2;l=o++){const c=r[o*2],h=r[o*2+1],u=r[l*2],d=r[l*2+1];h>e!=d>e&&t<(u-c)*(e-h)/(d-h)+c&&(a=!a)}if(a)return!0}return!1}get waterLevel(){return this.tide.value*Xn}get bounds(){return this.hf?[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]:[-4e3,4e3,-3440,3440]}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}setTide(t){var e,n;this.water&&(this.water.setTide(Kt.clamp(t,Qu,ju)),(e=this.life)==null||e.setTide(this.tide.value*Xn),(n=this.coastalHaze)==null||n.setWaterLevel(this.waterLevel),this.dirty=!0)}captureStill(){return this.disposed||!this.atmosphere||this.quality!=="ultra"?Promise.reject(new Error("Antialiased photos are available after the Ultra view loads.")):document.hidden?Promise.reject(new Error("Open the Inverloch view to save a photo.")):(this.stillPhoto||(this.stillPhoto=new Zv(this.renderer,()=>{this.dirty=!0,this.resolution.resetSampling()}),document.addEventListener("visibilitychange",this.onPhotoVisibilityChange)),this.resolution.resetSampling(),this.stillPhoto.start())}setCoastalMist(t){var e;this.opts.coastalMist=t,(e=this.coastalHaze)==null||e.setMist(this.quality==="ultra"&&t),this.dirty=!0}setLabelsVisible(t){var e;(e=this.labels)==null||e.setVisible(t),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.2)}resetView(){this.fly(Cs,1.8)}setView(t,e,n,s,r,a=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},a)}faceNorth(){const t=this.currentView();this.fly({...t,azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:Kt.clamp(e.dist*t,this.controls.minDistance,this.controls.maxDistance)},.35)}dispose(){var t,e,n,s,r,a,o,l,c,h;this.disposed=!0,this.abort.abort(),(t=this.ultraStreet)==null||t.dispose(),(e=this.detailStreaming)==null||e.dispose(),(n=this.worker)==null||n.close(),cancelAnimationFrame(this.raf),(s=this.resizeObserver)==null||s.disconnect(),(r=this.labels)==null||r.dispose(),(a=this.stillPhoto)==null||a.dispose(),(o=this.clouds)==null||o.dispose(),(l=this.showers)==null||l.dispose(),(c=this.storm)==null||c.dispose(),document.removeEventListener("visibilitychange",this.onPhotoVisibilityChange),(h=this.controls)==null||h.dispose(),this.renderer&&(this.renderer.domElement.removeEventListener("keydown",this.onKey),this.scene.traverse(u=>{var p,_;const d=u;(_=(p=d.geometry)==null?void 0:p.dispose)==null||_.call(p);const f=Array.isArray(d.material)?d.material:d.material?[d.material]:[];for(const m of f){for(const g of Object.values(m))g instanceof be&&g.dispose();m.dispose()}}),this.renderer.dispose(),this.renderer.domElement.remove())}pickQuality(){if(this.opts.quality)return this.opts.quality;const t=new URLSearchParams(window.location.search).get("quality");if(t==="ultra"||t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new Kx(this.camera,this.renderer.domElement);t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=70,t.maxDistance=12e3,t.maxPolarAngle=Kt.degToRad(84),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const e=t.target,n=this.hf;e.x=Kt.clamp(e.x,n.xMin,n.xMax),e.z=Kt.clamp(e.z,n.zMin,n.zMax),e.y=0,this.dirty=!0}),this.renderer.domElement.addEventListener("keydown",this.onKey)}clampView(t){var e,n;return{x:Kt.clamp(t.x,this.hf.xMin,this.hf.xMax),z:Kt.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:Kt.clamp(t.dist,((e=this.controls)==null?void 0:e.minDistance)??70,((n=this.controls)==null?void 0:n.maxDistance)??12e3),polar:Kt.clamp(t.polar,2,84),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=this.camera.position.clone().sub(t),n=new na().setFromVector3(e);return{x:t.x,z:t.z,dist:n.radius,polar:Kt.radToDeg(n.phi),azimuth:Kt.radToDeg(n.theta)}}applyView(t){const e=new na(t.dist,Kt.degToRad(t.polar),Kt.degToRad(t.azimuth)),n=this.controls.target.set(t.x,0,t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(!this.controls||this.external)return;if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.fov=this.external?60:t/e<.8?52:38,this.camera.updateProjectionMatrix(),this.dirty=!0}}const Vl="Map data © OpenStreetMap contributors · Elevation © Geoscience Australia (CC BY 4.0)",h1=`
.inv-embed, .inv-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the model but never take a touch: drags and pinches must reach the canvas underneath */
.inv-embed-labels, .inv-embed .inv-label { pointer-events: none; }
.inv-embed-credit { position: absolute; left: 50%; bottom: var(--inv-credit-bottom, 6px); transform: translateX(-50%); margin: 0; max-width: calc(100% - 24px);
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; pointer-events: none; }
`,u1=["low","medium","high","ultra"];function d1(i,t){if(!document.querySelector("style[data-inverloch-model]")){const d=document.createElement("style");d.setAttribute("data-inverloch-model",""),d.textContent=Yn+h1,document.head.appendChild(d)}const e=document.createElement("div");e.className="inv-embed";const n=document.createElement("div");n.className="inv-embed-layer";const s=document.createElement("div");s.className="inv-embed-layer inv-embed-labels";const r=document.createElement("p");r.className="inv-embed-credit",r.textContent=Vl,e.append(n,s,r),i.appendChild(e);const a=typeof t.assets=="string"?{height:t.assets+"height.png",ground:t.assets+(typeof window<"u"&&window.anSmallGround?"ground-2k.webp":"ground.webp"),town:t.assets+"town.json",detail:t.assets+"detail.json"}:t.assets;let o=[],l=!1,c;const h=new Promise((d,f)=>c={ok:d,fail:f}),u=new c1(n,s,{onProgress:(d,f)=>{var p;return(p=t.onProgress)==null?void 0:p.call(t,d,f)},onReady:d=>{o=d.places.map(f=>{const p=Math.min(Math.max(f.view[0]*.55,90),1500),_=f.view[1]*Math.PI/180,m=f.view[2]*Math.PI/180,g=f.x+p*Math.sin(_)*Math.sin(m),S=f.z+p*Math.sin(_)*Math.cos(m),x=Math.max(u.groundAt(g,S),u.waterLevel)+Math.max(p*Math.cos(_),20),M=f.x-g,E=f.y-10-x,b=f.z-S;return{id:f.id,name:f.name,kind:f.kind,x:g,y:x,z:S,yaw:Math.atan2(-M,-b),pitch:Math.atan2(E,Math.hypot(M,b)),tx:f.x,tz:f.z}}),t.labels===!1&&u.setLabelsVisible(!1),l=!0,c.ok()},onError:d=>{var f;return l?(f=t.onError)==null?void 0:f.call(t,d):c.fail(new Error(d))},onCompass:()=>{}},{assets:a,external:!0,quality:t.quality,frameTarget:t.frameTarget,coastalMist:t.coastalMist,onThunder:t.onThunder,clear:t.clear,clearLatLon:t.clearLatLon,clearPolygons:t.clearPolygons,detailLatLon:t.detailLatLon});return u.init(),{ready:h,setCamera:(d,f,p,_,m)=>u.setExternalCamera(d,f,p,_,m),setMinutes:d=>u.setSolarMinutes(d),setTide:d=>u.setTide(d),setAnimating:d=>u.setAnimating(d),setFrameTarget:d=>u.setFrameTarget(d),captureStill:()=>u.captureStill(),setCoastalMist:d=>u.setCoastalMist(d),setLabelsVisible:d=>u.setLabelsVisible(d),groundAt:(d,f)=>u.groundAt(d,f),waterLevel:()=>u.waterLevel,bounds:()=>u.bounds,fromLatLon:(d,f)=>u.fromLatLon(d,f),setMode:d=>u.setExternal(d!=="bird"),getCamera:()=>u.getCamera(),flyToPlace:d=>u.flyToPlace(d),lookAt:(d,f,p,_,m)=>u.setView(d,f,p,_,m),addParts:d=>u.addParts(d),addTrafficCar:(d,f,p,_,m)=>u.addTrafficCar(d,f,p,_,m),addPad:d=>u.addPad(d),spots:()=>o,nearestCar:(d,f,p)=>u.nearestCar(d,f,p),driveCar:(d,f,p,_,m,g,S,x,M)=>u.driveCar(d,f,p,_,m,g,S,x,M),solidAt:(d,f)=>u.solidAt(d,f),designedWallFootprints:()=>u.designedWallFootprints(),addCars:d=>u.addCars(d),roadSpot:d=>{const f=u.roadSpot(d);return f?{id:"road:"+d,name:d,kind:"landmark",...f,tx:f.x-Math.sin(f.yaw)*70,tz:f.z-Math.cos(f.yaw)*70}:null},tide:{min:Qu,max:ju,initial:td},credit:Vl,dispose:()=>{u.dispose(),e.remove()}}}return vn.CREDIT=Vl,vn.create=d1,vn.qualityPresets=u1,Object.defineProperty(vn,Symbol.toStringTag,{value:"Module"}),vn}({});

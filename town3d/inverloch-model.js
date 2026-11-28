var InverlochModel=function(Sn){"use strict";var qv=Object.defineProperty;var Yv=(Sn,Yn,hi)=>Yn in Sn?qv(Sn,Yn,{enumerable:!0,configurable:!0,writable:!0,value:hi}):Sn[Yn]=hi;var Z=(Sn,Yn,hi)=>Yv(Sn,typeof Yn!="symbol"?Yn+"":Yn,hi);const Yn='.inv-label{position:absolute;left:0;top:0;pointer-events:auto;font:600 12px/1 Space Grotesk,system-ui,sans-serif;padding:6px 10px;border-radius:999px;background:#0c1c24e6;color:#fff;border:1px solid rgba(255,255,255,.2);white-space:nowrap;cursor:pointer;will-change:transform}.inv-label:after{content:"";position:absolute;left:50%;bottom:-8px;width:1px;height:8px;background:#ffffffbf}.inv-label:hover{background:#0b7d9c}.inv-label--nature{background:#183826eb}.inv-label--nature:hover{background:#2c7a4b}.inv-label--water{background:none;border-color:transparent;color:#f1fbff;font-style:italic;font-weight:500;font-size:13px;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,35,60,.95),0 0 8px rgba(0,35,60,.7)}.inv-label--water:after{display:none}.inv-label--water:hover{background:#0c1c2499}.inv-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.inv-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}';/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hi="187",Zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ed=0,nc=1,wd=2,Is=1,Td=2,Ns=3,di=0,Qe=1,Ie=2,Ki=0,Us=1,Bo=2,ic=3,sc=4,Ad=5,$i=100,Rd=101,Cd=102,Pd=103,Ld=104,Dd=200,Id=201,Nd=202,Ud=203,rc=204,oc=205,Fd=206,Od=207,zd=208,Bd=209,Gd=210,kd=211,Hd=212,Vd=213,Wd=214,Go=0,ko=1,Ho=2,Fs=3,Vo=4,Wo=5,Xo=6,qo=7,vr=0,Xd=1,qd=2,Kn=0,ac=1,lc=2,cc=3,hc=4,uc=5,dc=6,Yo=7,fc=300,Ji=301,Os=302,Zo=303,Ko=304,zs=1e3,On=1001,$o=1002,Ne=1003,Yd=1004,Mr=1005,Ye=1006,Jo=1007,yn=1008,cn=1009,pc=1010,mc=1011,Bs=1012,Qo=1013,zn=1014,bn=1015,En=1016,jo=1017,ta=1018,Qi=1020,gc=35902,xc=35899,_c=1021,vc=1022,Bn=1023,fi=1026,pi=1027,Sr=1028,ea=1029,mi=1030,na=1031,ia=1033,yr=33776,br=33777,Er=33778,wr=33779,sa=35840,ra=35841,oa=35842,aa=35843,la=36196,ca=37492,ha=37496,ua=37488,da=37489,Tr=37490,fa=37491,pa=37808,ma=37809,ga=37810,xa=37811,_a=37812,va=37813,Ma=37814,Sa=37815,ya=37816,ba=37817,Ea=37818,wa=37819,Ta=37820,Aa=37821,Ra=36492,Ca=36494,Pa=36495,La=36283,Da=36284,Ar=36285,Ia=36286,Zd=3200,ji=0,Kd=1,gi="",Ue="srgb",Rr="srgb-linear",Cr="linear",fe="srgb",Na=7680,$d=519,Jd=512,Qd=513,jd=514,Mc=515,tf=516,ef=517,Sc=518,yc=519,nf=35044,Gs=35048,bc="300 es",wn=2e3,ks=2001;function sf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rf(){const i=Hs("canvas");return i.style.display="block",i}const Ec={};function wc(...i){const t="THREE."+i.shift();console.log(t,...i)}function Tc(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Bt(...i){i=Tc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function re(...i){i=Tc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Pr(...i){const t=i.join(" ");t in Ec||(Ec[t]=!0,Bt(...i))}function of(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const af={[Go]:Go,[Ho]:Xo,[Vo]:Vo,[Fs]:Wo,[ko]:ko,[Xo]:Ho,[qo]:qo,[Wo]:Fs};class xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ac=1234567;const Vs=Math.PI/180,Ws=180/Math.PI;function ts(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Ua(i,t){return(i%t+t)%t}function lf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function cf(i,t,e){return i!==t?(e-i)/(t-i):0}function Xs(i,t,e){return(1-e)*i+e*t}function hf(i,t,e,n){return Xs(i,t,1-Math.exp(-e*n))}function uf(i,t=1){return t-Math.abs(Ua(i,t*2)-t)}function df(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ff(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function pf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function mf(i,t){return i+Math.random()*(t-i)}function gf(i){return i*(.5-Math.random())}function xf(i){i!==void 0&&(Ac=i);let t=Ac+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _f(i){return i*Vs}function vf(i){return i*Ws}function Mf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Sf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Rc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yf(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:Bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fa(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Cc(i,t){if(t.constructor===Float32Array)return i;const e=Fa(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Pc(i,t){if(t.constructor===Float32Array)return i;const e=Fa(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const Qt={DEG2RAD:Vs,RAD2DEG:Ws,generateUUID:ts,clamp:Kt,euclideanModulo:Ua,mapLinear:lf,inverseLerp:cf,lerp:Xs,damp:hf,pingpong:uf,smoothstep:df,smootherstep:ff,randInt:pf,randFloat:mf,randFloatSpread:gf,seededRandom:xf,degToRad:_f,radToDeg:vf,isPowerOfTwo:Mf,ceilPowerOfTwo:Sf,floorPowerOfTwo:Rc,setQuaternionFromProperEuler:yf,normalize:Pc,denormalize:Cc},Kl=class Kl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kl.prototype.isVector2=!0;let Lt=Kl;class Tn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){const M=Math.acos(m),v=Math.sin(M);g=Math.sin(g*M)/v,a=Math.sin(a*M)/v,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $l=class $l{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Oa.copy(this).projectOnVector(t),this.sub(Oa)}reflect(t){return this.sub(Oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$l.prototype.isVector3=!0;let q=$l;const Oa=new q,Lc=new Tn,Jl=class Jl{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],M=s[1],v=s[4],S=s[7],b=s[2],E=s[5],_=s[8];return r[0]=o*x+a*M+l*b,r[3]=o*m+a*v+l*E,r[6]=o*g+a*S+l*_,r[1]=c*x+h*M+u*b,r[4]=c*m+h*v+u*E,r[7]=c*g+h*S+u*_,r[2]=d*x+f*M+p*b,r[5]=d*m+f*v+p*E,r[8]=d*g+f*S+p*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(za.makeScale(t,e)),this}rotate(t){return Pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(za.makeRotation(-t)),this}translate(t,e){return Pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Jl.prototype.isMatrix3=!0;let kt=Jl;const za=new kt,Dc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ic=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bf(){const i={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fe&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?Cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rr]:{primaries:t,whitePoint:n,transfer:Cr,toXYZ:Dc,fromXYZ:Ic,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:Dc,fromXYZ:Ic,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}const ee=bf();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ns;class Ef{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ns===void 0&&(ns=Hs("canvas")),ns.width=t.width,ns.height=t.height;const s=ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wf=0;class Lr{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ba(s[o].image)):r.push(Ba(s[o]))}else r=Ba(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ef.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}let Tf=0;const Ga=new q;class Te extends xi{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=On,s=On,r=Ye,o=yn,a=Bn,l=cn,c=Te.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=ts(),this.name="",this.source=new Lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ga).x}get height(){return this.source.getSize(Ga).y}get depth(){return this.source.getSize(Ga).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zs:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case $o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zs:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case $o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null,Te.DEFAULT_MAPPING=fc,Te.DEFAULT_ANISOTROPY=1;const Ql=class Ql{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(f+1)/2,b=(g+1)/2,E=(h+d)/4,_=(u+x)/4,y=(p+m)/4;return v>S&&v>b?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=_/n):S>b?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=_/r,s=y/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ql.prototype.isVector4=!0;let ve=Ql;class Af extends xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Te({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Lr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends Af{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Nc extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rf extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Fo=class Fo{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,x,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fo().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),o=1/is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cf,t,Pf)}lookAt(t,e,n){const s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),_i.crossVectors(n,hn),_i.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),_i.crossVectors(n,hn)),_i.normalize(),Dr.crossVectors(hn,_i),s[0]=_i.x,s[4]=Dr.x,s[8]=hn.x,s[1]=_i.y,s[5]=Dr.y,s[9]=hn.y,s[2]=_i.z,s[6]=Dr.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],M=n[3],v=n[7],S=n[11],b=n[15],E=s[0],_=s[4],y=s[8],w=s[12],T=s[1],C=s[5],D=s[9],O=s[13],P=s[2],G=s[6],F=s[10],k=s[14],V=s[3],N=s[7],L=s[11],U=s[15];return r[0]=o*E+a*T+l*P+c*V,r[4]=o*_+a*C+l*G+c*N,r[8]=o*y+a*D+l*F+c*L,r[12]=o*w+a*O+l*k+c*U,r[1]=h*E+u*T+d*P+f*V,r[5]=h*_+u*C+d*G+f*N,r[9]=h*y+u*D+d*F+f*L,r[13]=h*w+u*O+d*k+f*U,r[2]=p*E+x*T+m*P+g*V,r[6]=p*_+x*C+m*G+g*N,r[10]=p*y+x*D+m*F+g*L,r[14]=p*w+x*O+m*k+g*U,r[3]=M*E+v*T+S*P+b*V,r[7]=M*_+v*C+S*G+b*N,r[11]=M*y+v*D+S*F+b*L,r[15]=M*w+v*O+S*k+b*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],M=l*f-c*d,v=a*f-c*u,S=a*d-l*u,b=o*f-c*h,E=o*d-l*h,_=o*u-a*h;return e*(x*M-m*v+g*S)-n*(p*M-m*b+g*E)+s*(p*v-x*b+g*_)-r*(p*S-x*E+m*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],M=e*a-n*o,v=e*l-s*o,S=e*c-r*o,b=n*l-s*a,E=n*c-r*a,_=s*c-r*l,y=h*x-u*p,w=h*m-d*p,T=h*g-f*p,C=u*m-d*x,D=u*g-f*x,O=d*g-f*m,P=M*O-v*D+S*C+b*T-E*w+_*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/P;return t[0]=(a*O-l*D+c*C)*G,t[1]=(s*D-n*O-r*C)*G,t[2]=(x*_-m*E+g*b)*G,t[3]=(d*E-u*_-f*b)*G,t[4]=(l*T-o*O-c*w)*G,t[5]=(e*O-s*T+r*w)*G,t[6]=(m*S-p*_-g*v)*G,t[7]=(h*_-d*S+f*v)*G,t[8]=(o*D-a*T+c*y)*G,t[9]=(n*T-e*D-r*y)*G,t[10]=(p*E-x*S+g*M)*G,t[11]=(u*S-h*E-f*M)*G,t[12]=(a*w-o*C-l*y)*G,t[13]=(e*C-n*w+s*y)*G,t[14]=(x*v-p*b-m*M)*G,t[15]=(h*b-u*v+d*M)*G,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,m=o*u,g=a*u,M=l*c,v=l*h,S=l*u,b=n.x,E=n.y,_=n.z;return s[0]=(1-(x+g))*b,s[1]=(f+S)*b,s[2]=(p-v)*b,s[3]=0,s[4]=(f-S)*E,s[5]=(1-(d+g))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(p+v)*_,s[9]=(m-M)*_,s[10]=(1-(d+x))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=is.set(s[0],s[1],s[2]).length();const a=is.set(s[4],s[5],s[6]).length(),l=is.set(s[8],s[9],s[10]).length();r<0&&(o=-o),An.copy(this);const c=1/o,h=1/a,u=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,e.setFromRotationMatrix(An),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=wn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===wn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ks)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=wn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===wn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===ks)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Fo.prototype.isMatrix4=!0;let ie=Fo;const is=new q,An=new ie,Cf=new q(0,0,0),Pf=new q(1,1,1),_i=new q,Dr=new q,hn=new q,Uc=new ie,Fc=new Tn;class mn{constructor(t=0,e=0,n=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class ka{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lf=0;const Oc=new q,ss=new Tn,Jn=new ie,Ir=new q,qs=new q,Df=new q,If=new Tn,zc=new q(1,0,0),Bc=new q(0,1,0),Gc=new q(0,0,1),kc={type:"added"},Nf={type:"removed"},rs={type:"childadded",child:null},Ha={type:"childremoved",child:null};class Ge extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new q,e=new mn,n=new Tn,s=new q(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new kt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(zc,t)}rotateY(t){return this.rotateOnAxis(Bc,t)}rotateZ(t){return this.rotateOnAxis(Gc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zc,t)}translateY(t){return this.translateOnAxis(Bc,t)}translateZ(t){return this.translateOnAxis(Gc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ir.copy(t):Ir.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(qs,Ir,this.up):Jn.lookAt(Ir,qs,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Jn),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kc),rs.child=t,this.dispatchEvent(rs),rs.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nf),Ha.child=t,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kc),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,Df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,If,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ge.DEFAULT_UP=new q(0,1,0),Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rn extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uf={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Uf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function Wa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class At{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Ua(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wa(o,r,t+.3333333333333333),this.g=Wa(o,r,t),this.b=Wa(o,r,t-.3333333333333333)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=Hc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return ee.workingToColorSpace(Ke.copy(this),t),Math.round(Kt(Ke.r*255,0,255))*65536+Math.round(Kt(Ke.g*255,0,255))*256+Math.round(Kt(Ke.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ke.copy(this),e);const n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Ue){ee.workingToColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,s=Ke.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(Nr);const n=Xs(vi.h,Nr.h,e),s=Xs(vi.s,Nr.s,e),r=Xs(vi.l,Nr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new At;At.NAMES=Hc;class Vc extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Rn=new q,Qn=new q,Xa=new q,jn=new q,os=new q,as=new q,Wc=new q,qa=new q,Ya=new q,Za=new q,Ka=new ve,$a=new ve,Ja=new ve;class Cn{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),Qn.subVectors(n,e),Xa.subVectors(t,e);const o=Rn.dot(Rn),a=Rn.dot(Qn),l=Rn.dot(Xa),c=Qn.dot(Qn),h=Qn.dot(Xa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ka.setScalar(0),$a.setScalar(0),Ja.setScalar(0),Ka.fromBufferAttribute(t,e),$a.fromBufferAttribute(t,n),Ja.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ka,r.x),o.addScaledVector($a,r.y),o.addScaledVector(Ja,r.z),o}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),Qn.subVectors(t,e),Rn.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Rn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;os.subVectors(s,n),as.subVectors(r,n),qa.subVectors(t,n);const l=os.dot(qa),c=as.dot(qa);if(l<=0&&c<=0)return e.copy(n);Ya.subVectors(t,s);const h=os.dot(Ya),u=as.dot(Ya);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(os,o);Za.subVectors(t,r);const f=os.dot(Za),p=as.dot(Za);if(p>=0&&f<=p)return e.copy(r);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(as,a);const m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Wc.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(Wc,a);const g=1/(m+x+d);return o=x*g,a=d*g,e.copy(n).addScaledVector(os,o).addScaledVector(as,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Mi{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(t.matrixWorld),this.union(Ur)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),Fr.subVectors(this.max,Ys),ls.subVectors(t.a,Ys),cs.subVectors(t.b,Ys),hs.subVectors(t.c,Ys),Si.subVectors(cs,ls),yi.subVectors(hs,cs),Ii.subVectors(ls,hs);let e=[0,-Si.z,Si.y,0,-yi.z,yi.y,0,-Ii.z,Ii.y,Si.z,0,-Si.x,yi.z,0,-yi.x,Ii.z,0,-Ii.x,-Si.y,Si.x,0,-yi.y,yi.x,0,-Ii.y,Ii.x,0];return!Qa(e,ls,cs,hs,Fr)||(e=[1,0,0,0,1,0,0,0,1],!Qa(e,ls,cs,hs,Fr))?!1:(Or.crossVectors(Si,yi),e=[Or.x,Or.y,Or.z],Qa(e,ls,cs,hs,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ti=[new q,new q,new q,new q,new q,new q,new q,new q],Pn=new q,Ur=new Mi,ls=new q,cs=new q,hs=new q,Si=new q,yi=new q,Ii=new q,Ys=new q,Fr=new q,Or=new q,Ni=new q;function Qa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ni.fromArray(i,r);const a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ei=Ff();function Ff(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Of(i){Math.abs(i)>65504&&Bt("DataUtils.toHalfFloat(): Value out of range."),i=Kt(i,-65504,65504),ei.floatView[0]=i;const t=ei.uint32View[0],e=t>>23&511;return ei.baseTable[e]+((t&8388607)>>ei.shiftTable[e])}function zf(i){const t=i>>10;return ei.uint32View[0]=ei.mantissaTable[ei.offsetTable[t]+(i&1023)]+ei.exponentTable[t],ei.floatView[0]}class Xc{static toHalfFloat(t){return Of(t)}static fromHalfFloat(t){return zf(t)}}const Ce=new q,zr=new Lt;let Bf=0;class Ee extends xi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nf,this.updateRanges=[],this.gpuType=bn,this.version=0,this._normalizationScale=t!==void 0?Fa(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Cc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Pc(t,this.array)}}class qc extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yc extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Gf=new Mi,Zs=new q,ja=new q;class Ui{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);const e=Zs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(ja)),this.expandByPoint(Zs.copy(t.center).sub(ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let kf=0;const gn=new ie,tl=new Ge,us=new q,un=new Mi,Ks=new Mi,ke=new q;class Ae extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sf(t)?Yc:qc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return tl.lookAt(t),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(un.min,Ks.min),un.expandByPoint(ke),ke.addVectors(un.max,Ks.max),un.expandByPoint(ke)):(un.expandByPoint(Ks.min),un.expandByPoint(Ks.max))}un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ke.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(t,c),ke.add(us)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ee(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let w=0;w<n.count;w++)a[w]=new q,l[w]=new q;const h=new q,u=new q,d=new q,f=new Lt,p=new Lt,x=new Lt,m=new q,g=new q;function M(w,T,C){c[w]=c[T]=c[C]=1,h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,T),x.fromBufferAttribute(r,C),u.sub(h),d.sub(h),p.sub(f),x.sub(f);const D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(D),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(D),a[w].add(m),a[T].add(m),a[C].add(m),l[w].add(g),l[T].add(g),l[C].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let w=0,T=v.length;w<T;++w){const C=v[w],D=C.start,O=C.count;for(let P=D,G=D+O;P<G;P+=3)M(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const S=new q,b=new q,E=new q,_=new q;function y(w){E.fromBufferAttribute(s,w),_.copy(E);const T=a[w];S.copy(T),S.sub(E.multiplyScalar(E.dot(T))).normalize(),b.crossVectors(_,T);const D=b.dot(l[w])<0?-1:1;o.setXYZW(w,S.x,S.y,S.z,D)}for(let w=0,T=n.count;w<T;++w)c[w]&&y(w);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new q,r=new q,o=new q,a=new q,l=new q,c=new q,h=new q,u=new q;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new Ee(d,h,u)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const el=new q,Hf=new q,Vf=new kt;class kn{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=el.subVectors(n,e).cross(Hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(el),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Vf.getNormalMatrix(t),s=this.coplanarPoint(el).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Wf=0;class ni extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Us,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rc,this.blendDst=oc,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Na,this.stencilZFail=Na,this.stencilZPass=Na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new At().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ii=new q,nl=new q,Br=new q,Gr=new q;class kr{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){nl.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),Gr.copy(this.origin).sub(nl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Br),a=Gr.dot(this.direction),l=-Gr.dot(Br),c=Gr.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nl).addScaledVector(Br,d),f}intersectSphere(t,e){if(t.radius<0)return null;ii.subVectors(t.center,this.origin);const n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,M=n.y-o.y,v=n.z-o.z,S=Math.abs(l),b=Math.abs(c),E=Math.abs(h);let _,y,w,T,C,D,O,P,G,F,k,V;if(S>=b&&S>=E?(w=l,D=u,G=p,V=g,l>=0?(_=c,y=h,T=d,C=f,O=x,P=m,F=M,k=v):(_=h,y=c,T=f,C=d,O=m,P=x,F=v,k=M)):b>=E?(w=c,D=d,G=x,V=M,c>=0?(_=h,y=l,T=f,C=u,O=m,P=p,F=v,k=g):(_=l,y=h,T=u,C=f,O=p,P=m,F=g,k=v)):(w=h,D=f,G=m,V=v,h>=0?(_=l,y=c,T=u,C=d,O=p,P=x,F=g,k=M):(_=c,y=l,T=d,C=u,O=x,P=p,F=M,k=g)),w===0)return null;const N=_/w,L=y/w,U=1/w,$=T-N*D,it=C-L*D,Y=O-N*G,X=P-L*G,K=F-N*V,tt=k-L*V,nt=K*X-tt*Y,ht=$*tt-it*K,Nt=Y*it-X*$;if(s){if(nt<0||ht<0||Nt<0)return null}else if((nt<0||ht<0||Nt<0)&&(nt>0||ht>0||Nt>0))return null;const rt=nt+ht+Nt;if(rt===0)return null;const ft=U*(nt*D+ht*G+Nt*V);return(rt>0?ft<0:ft>0)?null:this.at(ft/rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ln extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=vr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Zc=new ie,Fi=new kr,Hr=new Ui,Kc=new q,Vr=new q,Wr=new q,Xr=new q,il=new q,qr=new q,$c=new q,Yr=new q;class Jt extends Ge{constructor(t=new Ae,e=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(il.fromBufferAttribute(u,t),o?qr.addScaledVector(il,h):qr.addScaledVector(il.sub(e),h))}e.add(qr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!(Hr.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Hr,Kc)===null||Fi.origin.distanceToSquared(Kc)>(t.far-t.near)**2))&&(Zc.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(Zc),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){const m=d[p],g=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,b=v;S<b;S+=3){const E=a.getX(S),_=a.getX(S+1),y=a.getX(S+2);s=Zr(this,g,t,n,c,h,u,E,_,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const M=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);s=Zr(this,o,t,n,c,h,u,M,v,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){const m=d[p],g=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,b=v;S<b;S+=3){const E=S,_=S+1,y=S+2;s=Zr(this,g,t,n,c,h,u,E,_,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const M=m,v=m+1,S=m+2;s=Zr(this,o,t,n,c,h,u,M,v,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Xf(i,t,e,n,s,r,o,a){let l;if(t.side===Qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===di,a),l===null)return null;Yr.copy(a),Yr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Yr);return c<e.near||c>e.far?null:{distance:c,point:Yr.clone(),object:i}}function Zr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Vr),i.getVertexPosition(l,Wr),i.getVertexPosition(c,Xr);const h=Xf(i,t,e,n,Vr,Wr,Xr,$c);if(h){const u=new q;Cn.getBarycoord($c,Vr,Wr,Xr,u),s&&(h.uv=Cn.getInterpolatedAttribute(s,a,l,c,u,new Lt)),r&&(h.uv1=Cn.getInterpolatedAttribute(r,a,l,c,u,new Lt)),o&&(h.normal=Cn.getInterpolatedAttribute(o,a,l,c,u,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new q,materialIndex:0};Cn.getNormal(Vr,Wr,Xr,d.normal),h.face=d,h.barycoord=u}return h}class $s extends Te{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ne,h=Ne,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jc extends Ee{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ds=new ie,Qc=new ie,Kr=[],jc=new Mi,qf=new ie,Js=new Jt,Qs=new Ui;class je extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Jc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),jc.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(jc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Qs.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),t.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),Qc.multiplyMatrices(n,ds),Js.matrixWorld=Qc,Js.raycast(t,Kr);for(let o=0,a=Kr.length;o<a;o++){const l=Kr[o];l.instanceId=r,l.object=this,e.push(l)}Kr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Jc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $s(new Float32Array(s*this.count),s,this.count,Sr,bn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Oi=new Ui,Yf=new Lt(.5,.5),$r=new q;class js{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,o=new kn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],M=r[12],v=r[13],S=r[14],b=r[15];if(s[0].setComponents(c-o,f-h,g-p,b-M).normalize(),s[1].setComponents(c+o,f+h,g+p,b+M).normalize(),s[2].setComponents(c+a,f+u,g+x,b+v).normalize(),s[3].setComponents(c-a,f-u,g-x,b-v).normalize(),n)s[4].setComponents(l,d,m,S).normalize(),s[5].setComponents(c-l,f-d,g-m,b-S).normalize();else if(s[4].setComponents(c-l,f-d,g-m,b-S).normalize(),e===wn)s[5].setComponents(c+l,f+d,g+m,b+S).normalize();else if(e===ks)s[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){Oi.center.set(0,0,0);const e=Yf.distanceTo(t.center);return Oi.radius=.7071067811865476+e,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if($r.x=s.normal.x>0?t.max.x:t.min.x,$r.y=s.normal.y>0?t.max.y:t.min.y,$r.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const th=new ie;class sl{constructor(){this.coordinateSystem=wn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];th.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new js),n[s].setFromProjectionMatrix(th,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new js),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new sl().copy(this)}}class eh extends ni{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Jr=new q,Qr=new q,nh=new ie,tr=new kr,jr=new Ui,rl=new q,ih=new q;class Zf extends Ge{constructor(t=new Ae,e=new eh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Jr.fromBufferAttribute(e,s-1),Qr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Jr.distanceTo(Qr);t.setAttribute("lineDistance",new Me(n,1))}else Bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(s),jr.radius+=r,t.ray.intersectsSphere(jr)===!1)return;nh.copy(s).invert(),tr.copy(t.ray).applyMatrix4(nh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){const g=h.getX(x),M=h.getX(x+1),v=to(this,t,tr,l,g,M,x);v&&e.push(v)}if(this.isLineLoop){const x=h.getX(p-1),m=h.getX(f),g=to(this,t,tr,l,x,m,p-1);g&&e.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){const g=to(this,t,tr,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){const x=to(this,t,tr,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function to(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Jr.fromBufferAttribute(a,s),Qr.fromBufferAttribute(a,r),e.distanceSqToSegment(Jr,Qr,rl,ih)>n)return;rl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(rl);if(!(c<t.near||c>t.far))return{distance:c,point:ih.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const sh=new q,rh=new q;class oh extends Zf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)sh.fromBufferAttribute(e,s),rh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+sh.distanceTo(rh);t.setAttribute("lineDistance",new Me(n,1))}else Bt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ah extends Te{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Ne,this.minFilter=Ne,this.generateMipmaps=!1,this.needsUpdate=!0}copy(t){return super.copy(t),this.source=new Lr(Object.assign({},t.image)),this}}class lh extends Te{constructor(t=[],e=Ji,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ol extends Te{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fs extends Te{constructor(t,e,n=zn,s,r,o,a=Ne,l=Ne,c,h=fi,u=1){if(h!==fi&&h!==pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class ch extends fs{constructor(t,e=zn,n=Ji,s,r,o=Ne,a=Ne,l,c=fi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class hh extends Te{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class zi extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(u,2));function p(x,m,g,M,v,S,b,E,_,y,w){const T=S/_,C=b/y,D=S/2,O=b/2,P=E/2,G=_+1,F=y+1;let k=0,V=0;const N=new q;for(let L=0;L<F;L++){const U=L*C-O;for(let $=0;$<G;$++){const it=$*T-D;N[x]=it*M,N[m]=U*v,N[g]=P,c.push(N.x,N.y,N.z),N[x]=0,N[m]=0,N[g]=E>0?1:-1,h.push(N.x,N.y,N.z),u.push($/_),u.push(1-L/y),k+=1}}for(let L=0;L<y;L++)for(let U=0;U<_;U++){const $=d+U+G*L,it=d+U+G*(L+1),Y=d+(U+1)+G*(L+1),X=d+(U+1)+G*L;l.push($,it,X),l.push(it,Y,X),V+=6}a.addGroup(f,V,w),f+=V,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class al extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const x=[],m=n/2;let g=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(f,2));function M(){const S=new q,b=new q;let E=0;const _=(e-t)/n;for(let y=0;y<=r;y++){const w=[],T=y/r,C=T*(e-t)+t;for(let D=0;D<=s;D++){const O=D/s,P=O*l+a,G=Math.sin(P),F=Math.cos(P);b.x=C*G,b.y=-T*n+m,b.z=C*F,u.push(b.x,b.y,b.z),S.set(G,_,F).normalize(),d.push(S.x,S.y,S.z),f.push(O,1-T),w.push(p++)}x.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){const T=x[w][y],C=x[w+1][y],D=x[w+1][y+1],O=x[w][y+1];(t>0||w!==0)&&(h.push(T,C,O),E+=3),(e>0||w!==r-1)&&(h.push(C,D,O),E+=3)}c.addGroup(g,E,0),g+=E}function v(S){const b=p,E=new Lt,_=new q;let y=0;const w=S===!0?t:e,T=S===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*T,0),d.push(0,T,0),f.push(.5,.5),p++;const C=p;for(let D=0;D<=s;D++){const P=D/s*l+a,G=Math.cos(P),F=Math.sin(P);_.x=w*F,_.y=m*T,_.z=w*G,u.push(_.x,_.y,_.z),d.push(0,T,0),E.x=G*.5+.5,E.y=F*.5*T+.5,f.push(E.x,E.y),p++}for(let D=0;D<s;D++){const O=b+D,P=C+D;S===!0?h.push(P,P+1,O):h.push(P+1,P,O),y+=3}c.addGroup(g,y,S===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new al(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ll extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new q,S=new q,b=new q;for(let E=0;E<e.length;E+=3)f(e[E+0],v),f(e[E+1],S),f(e[E+2],b),l(v,S,b,M)}function l(M,v,S,b){const E=b+1,_=[];for(let y=0;y<=E;y++){_[y]=[];const w=M.clone().lerp(S,y/E),T=v.clone().lerp(S,y/E),C=E-y;for(let D=0;D<=C;D++)D===0&&y===E?_[y][D]=w:_[y][D]=w.clone().lerp(T,D/C)}for(let y=0;y<E;y++)for(let w=0;w<2*(E-y)-1;w++){const T=Math.floor(w/2);w%2===0?(d(_[y][T+1]),d(_[y+1][T]),d(_[y][T])):(d(_[y][T+1]),d(_[y+1][T+1]),d(_[y+1][T]))}}function c(M){const v=new q;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(M),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function h(){const M=new q;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const S=m(M)/2/Math.PI+.5,b=g(M)/Math.PI+.5;o.push(S,1-b)}p(),u()}function u(){for(let M=0;M<o.length;M+=6){const v=o[M+0],S=o[M+2],b=o[M+4],E=Math.max(v,S,b),_=Math.min(v,S,b);E>.9&&_<.1&&(v<.2&&(o[M+0]+=1),S<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,v){const S=M*3;v.x=t[S+0],v.y=t[S+1],v.z=t[S+2]}function p(){const M=new q,v=new q,S=new q,b=new q,E=new Lt,_=new Lt,y=new Lt;for(let w=0,T=0;w<r.length;w+=9,T+=6){M.set(r[w+0],r[w+1],r[w+2]),v.set(r[w+3],r[w+4],r[w+5]),S.set(r[w+6],r[w+7],r[w+8]),E.set(o[T+0],o[T+1]),_.set(o[T+2],o[T+3]),y.set(o[T+4],o[T+5]),b.copy(M).add(v).add(S).divideScalar(3);const C=m(b);x(E,T+0,M,C),x(_,T+2,v,C),x(y,T+4,S,C)}}function x(M,v,S,b){b<0&&M.x===1&&(o[v]=M.x-1),S.x===0&&S.z===0&&(o[v]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.vertices,t.indices,t.radius,t.detail)}}function Kf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=uh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=tp(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let d=e;d<s;d+=e){const f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return er(r,o,e,a,l,c,0),o}function uh(i,t,e,n,s){let r;if(s===up(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=mh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=mh(o/n|0,i[o],i[o+1],r);return r&&ps(r,r.next)&&(sr(r),r=r.next),r}function Bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ps(e,e.next)||Se(e.prev,e,e.next)===0)){if(sr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function er(i,t,e,n,s,r,o){if(!i)return;!o&&r&&rp(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Jf(i,n,s,r):$f(i)){t.push(l.i,i.i,c.i),sr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Qf(Bi(i),t),er(i,t,e,n,s,r,2)):o===2&&jf(i,t,e,n,s,r):er(Bi(i),t,e,n,s,r,1);break}}}function $f(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&nr(s,a,r,l,o,c,p.x,p.y)&&Se(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Jf(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Se(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),x=Math.max(a,l,c),m=Math.max(h,u,d),g=cl(f,p,t,e,n),M=cl(x,m,t,e,n);let v=i.prevZ,S=i.nextZ;for(;v&&v.z>=g&&S&&S.z<=M;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&nr(a,h,l,u,c,d,v.x,v.y)&&Se(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=f&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&nr(a,h,l,u,c,d,S.x,S.y)&&Se(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&nr(a,h,l,u,c,d,v.x,v.y)&&Se(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=M;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&nr(a,h,l,u,c,d,S.x,S.y)&&Se(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Qf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ps(n,s)&&fh(n,e,e.next,s)&&ir(n,s)&&ir(s,n)&&(t.push(n.i,e.i,s.i),sr(e),sr(e.next),e=i=s),e=e.next}while(e!==i);return Bi(e)}function jf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lp(o,a)){let l=ph(o,a);o=Bi(o,o.next),l=Bi(l,l.next),er(o,t,e,n,s,r,0),er(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function tp(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=uh(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ap(c))}s.sort(ep);for(let r=0;r<s.length;r++)e=np(s[r],e);return e}function ep(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function np(i,t){const e=ip(i,t);if(!e)return t;const n=ph(e,i);return Bi(n,n.next),Bi(e,e.next)}function ip(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(ps(i,e))return e;do{if(ps(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&dh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);ir(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&sp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function sp(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function rp(i,t,e,n){let s=i;do s.z===0&&(s.z=cl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,op(s)}function op(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function cl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ap(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function dh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function nr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&dh(i,t,e,n,s,r,o,a)}function lp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!cp(i,t)&&(ir(i,t)&&ir(t,i)&&hp(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||ps(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ps(i,t){return i.x===t.x&&i.y===t.y}function fh(i,t,e,n){const s=no(Se(i,t,e)),r=no(Se(i,t,n)),o=no(Se(e,n,i)),a=no(Se(e,n,t));return!!(s!==r&&o!==a||s===0&&eo(i,e,t)||r===0&&eo(i,n,t)||o===0&&eo(e,i,n)||a===0&&eo(e,t,n))}function eo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function no(i){return i>0?1:i<0?-1:0}function cp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&fh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ir(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function hp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ph(i,t){const e=hl(i.i,i.x,i.y),n=hl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function mh(i,t,e,n){const s=hl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function sr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function hl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function up(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class dp{static triangulate(t,e,n=2){return Kf(t,e,n)}}class io{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return io.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];gh(t),xh(n,t);let o=t.length;e.forEach(gh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,xh(n,e[l]);const a=dp.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function gh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function xh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ul extends ll{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ul(t.radius,t.detail)}}class Hn extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){const M=g*d-o;for(let v=0;v<c;v++){const S=v*u-r;p.push(S,-M,0),x.push(0,0,1),m.push(v/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){const v=M+c*g,S=M+c*(g+1),b=M+1+c*(g+1),E=M+1+c*g;f.push(v,S,E),f.push(S,b,E)}this.setIndex(f),this.setAttribute("position",new Me(p,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.width,t.height,t.widthSegments,t.heightSegments)}}class dl extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new q,d=new q,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const M=[],v=g/n,S=o+v*a,b=t*Math.cos(S),E=Math.sqrt(t*t-b*b);let _=0;g===0&&o===0?_=.5/e:g===n&&l===Math.PI&&(_=-.5/e);for(let y=0;y<=e;y++){const w=y/e,T=s+w*r;u.x=-E*Math.cos(T),u.y=b,u.z=E*Math.sin(T),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+_,1-v),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){const v=h[g][M+1],S=h[g][M],b=h[g+1][M],E=h[g+1][M+1];(g!==0||o>0)&&f.push(v,S,E),(g!==n-1||l<Math.PI)&&f.push(S,b,E)}this.setIndex(f),this.setAttribute("position",new Me(p,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function ms(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(_h(s))s.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(_h(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function tn(i){const t={};for(let e=0;e<i.length;e++){const n=ms(i[e]);for(const s in n)t[s]=n[s]}return t}function _h(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function fp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const pp={clone:ms,merge:tn};var mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=fp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new At().setHex(s.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new q().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ve().fromArray(s.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ie().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class xp extends on{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dn extends ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _p extends ni{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new At(16777215),this.specular=new At(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=vr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vp extends ni{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new At(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class so extends ni{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=vr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mp extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sp extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Mh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Mh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Mh(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class yp{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const bp=new yp;class pl{constructor(t){this.manager=t!==void 0?t:bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}pl.DEFAULT_MATERIAL_NAME="__DEFAULT";const gs=new WeakMap;class Ep extends pl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=fl.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=gs.get(o);u===void 0&&(u=[],gs.set(o,u)),u.push({onLoad:e,onError:s})}return o}const a=Hs("img");function l(){h(),e&&e(this);const u=gs.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}gs.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),fl.remove(`image:${t}`);const d=gs.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(u)}gs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),fl.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class wp extends pl{constructor(t){super(t)}load(t,e,n,s){const r=new Te,o=new Ep(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Sh extends Ge{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Tp extends Sh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ml=new ie,yh=new q,bh=new q;class Ap{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new js,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;yh.setFromMatrixPosition(t.matrixWorld),e.position.copy(yh),bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ml,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ks||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ro=new q,oo=new Tn,Vn=new q;class gl extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ro,oo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,oo,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ro,oo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,oo,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const bi=new q,Eh=new Lt,wh=new Lt;class In extends gl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,Eh,wh),e.subVectors(wh,Eh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Th extends gl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Rp extends Ap{constructor(){super(new Th(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cp extends Sh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new Rp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const xs=-90,_s=1;class xl extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new In(xs,_s,t,e);s.layers=this.layers,this.add(s);const r=new In(xs,_s,t,e);r.layers=this.layers,this.add(r);const o=new In(xs,_s,t,e);o.layers=this.layers,this.add(o);const a=new In(xs,_s,t,e);a.layers=this.layers,this.add(a);const l=new In(xs,_s,t,e);l.layers=this.layers,this.add(l);const c=new In(xs,_s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Pp extends In{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const Ah=new ie;class Lp{constructor(t,e,n=0,s=1/0){this.ray=new kr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):re("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ah.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ah),this}intersectObject(t,e=!0,n=[]){return _l(t,this,n,e),n.sort(Rh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)_l(t[s],this,n,e);return n.sort(Rh),n}}function Rh(i,t){return i.distance-t.distance}function _l(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)_l(r[o],t,e,!0)}}class ao{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const jl=class jl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};jl.prototype.isMatrix2=!0;let Ch=jl;class Dp extends xi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ph(i,t,e,n){const s=Ip(n);switch(e){case _c:return i*t;case Sr:return i*t/s.components*s.byteLength;case ea:return i*t/s.components*s.byteLength;case mi:return i*t*2/s.components*s.byteLength;case na:return i*t*2/s.components*s.byteLength;case vc:return i*t*3/s.components*s.byteLength;case Bn:return i*t*4/s.components*s.byteLength;case ia:return i*t*4/s.components*s.byteLength;case yr:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Er:case wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ra:case aa:return Math.max(i,16)*Math.max(t,8)/4;case sa:case oa:return Math.max(i,8)*Math.max(t,8)/2;case la:case ca:case ua:case da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ha:case Tr:case fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ma:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ga:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _a:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ta:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Aa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ra:case Ca:case Pa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case La:case Da:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ar:case Ia:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ip(i){switch(i){case cn:case pc:return{byteLength:1,components:1};case Bs:case mc:case En:return{byteLength:2,components:1};case jo:case ta:return{byteLength:2,components:4};case zn:case Qo:case bn:return{byteLength:4,components:1};case gc:case xc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hi}})),typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hi);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lh(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Np(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fp=`#ifdef USE_ALPHAHASH
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
#endif`,Op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kp=`#ifdef USE_AOMAP
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
#endif`,Hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vp=`#ifdef USE_BATCHING
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
#endif`,Wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Kp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,s0=`#define PI 3.141592653589793
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
} // validated`,r0=`vec3 transformedNormal = objectNormal;
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
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",u0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S0=`#ifdef USE_GRADIENTMAP
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
}`,y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,T0=`#ifdef USE_ENVMAP
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
#endif`,A0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L0=`PhysicalMaterial material;
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
#endif`,D0=`uniform sampler2D dfgLUT;
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
}`,I0=`
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W0=`#if defined( USE_POINTS_UV )
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
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z0=`#if defined( USE_MORPHCOLORS )
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
#endif`,K0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
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
#endif`,J0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,j0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,im=`#ifdef USE_NORMALMAP
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
#endif`,sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vm=`float getShadowMask() {
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
}`,Mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sm=`#ifdef USE_SKINNING
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
#endif`,ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,Em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rm=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qt={alphahash_fragment:Up,alphahash_pars_fragment:Fp,alphamap_fragment:Op,alphamap_pars_fragment:zp,alphatest_fragment:Bp,alphatest_pars_fragment:Gp,aomap_fragment:kp,aomap_pars_fragment:Hp,batching_pars_vertex:Vp,batching_vertex:Wp,begin_vertex:Xp,beginnormal_vertex:qp,bsdfs:Yp,iridescence_fragment:Zp,bumpmap_pars_fragment:Kp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Jp,clipping_planes_pars_vertex:Qp,clipping_planes_vertex:jp,color_fragment:t0,color_pars_fragment:e0,color_pars_vertex:n0,color_vertex:i0,common:s0,defaultnormal_vertex:r0,displacementmap_pars_vertex:o0,displacementmap_vertex:a0,emissivemap_fragment:l0,emissivemap_pars_fragment:c0,colorspace_fragment:h0,colorspace_pars_fragment:u0,envmap_fragment:d0,envmap_common_pars_fragment:f0,envmap_pars_fragment:p0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:T0,envmap_vertex:g0,fog_vertex:x0,fog_pars_vertex:_0,fog_fragment:v0,fog_pars_fragment:M0,gradientmap_pars_fragment:S0,lightmap_pars_fragment:y0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:E0,lights_pars_begin:w0,lights_toon_fragment:A0,lights_toon_pars_fragment:R0,lights_phong_fragment:C0,lights_phong_pars_fragment:P0,lights_physical_fragment:L0,lights_physical_pars_fragment:D0,lights_fragment_begin:I0,lights_fragment_maps:N0,lights_fragment_end:U0,lightprobes_pars_fragment:F0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:z0,logdepthbuf_pars_vertex:B0,logdepthbuf_vertex:G0,map_fragment:k0,map_pars_fragment:H0,map_particle_fragment:V0,map_particle_pars_fragment:W0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:q0,morphinstance_vertex:Y0,morphcolor_vertex:Z0,morphnormal_vertex:K0,morphtarget_pars_vertex:$0,morphtarget_vertex:J0,normal_fragment_begin:Q0,normal_fragment_maps:j0,normal_pars_fragment:tm,normal_pars_vertex:em,normal_vertex:nm,normalmap_pars_fragment:im,clearcoat_normal_fragment_begin:sm,clearcoat_normal_fragment_maps:rm,clearcoat_pars_fragment:om,iridescence_pars_fragment:am,opaque_fragment:lm,packing:cm,premultiplied_alpha_fragment:hm,project_vertex:um,dithering_fragment:dm,dithering_pars_fragment:fm,roughnessmap_fragment:pm,roughnessmap_pars_fragment:mm,shadowmap_pars_fragment:gm,shadowmap_pars_vertex:xm,shadowmap_vertex:_m,shadowmask_pars_fragment:vm,skinbase_vertex:Mm,skinning_pars_vertex:Sm,skinning_vertex:ym,skinnormal_vertex:bm,specularmap_fragment:Em,specularmap_pars_fragment:wm,tonemapping_fragment:Tm,tonemapping_pars_fragment:Am,transmission_fragment:Rm,transmission_pars_fragment:Cm,uv_pars_fragment:Pm,uv_pars_vertex:Lm,uv_vertex:Dm,worldpos_vertex:Im,background_vert:`varying vec2 vUv;
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
}`},bt={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Wn={basic:{uniforms:tn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:tn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:tn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:tn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:tn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new At(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:tn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:tn([bt.points,bt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:tn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:tn([bt.common,bt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:tn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:tn([bt.sprite,bt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:tn([bt.common,bt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:tn([bt.lights,bt.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Wn.physical={uniforms:tn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const lo={r:0,b:0,g:0},Nm=new ie,Dh=new kt;Dh.set(-1,0,0,0,1,0,0,0,1);function Um(i,t,e,n,s,r){const o=new At(0);let a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let v=M.isScene===!0?M.background:null;if(v&&v.isTexture){const S=M.backgroundBlurriness>0;v=t.get(v,S)}return v}function p(M){let v=!1;const S=f(M);S===null?m(o,a):S&&S.isColor&&(m(S,1),v=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,v){const S=f(v);S&&S.isCubeTexture?(c===void 0&&(c=new Jt(new zi(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:ms(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(v.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Dh),c.material.toneMapped=ee.getTransfer(S.colorSpace)!==fe,(h!==S||u!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Jt(new Hn(2,2),new on({name:"BackgroundMaterial",uniforms:ms(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ee.getTransfer(S.colorSpace)!==fe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,v){M.getRGB(lo,vh(i)),e.buffers.color.setClear(lo.r,lo.g,lo.b,v,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),a=v,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Fm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(C,D,O,P,G){let F=!1;const k=u(C,P,O,D);r!==k&&(r=k,c(r.object)),F=f(C,P,O,G),F&&p(C,P,O,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,S(C,D,O,P),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,D,O,P){const G=P.wireframe===!0;let F=n[D.id];F===void 0&&(F={},n[D.id]=F);const k=C.isInstancedMesh===!0?C.id:0;let V=F[k];V===void 0&&(V={},F[k]=V);let N=V[O.id];N===void 0&&(N={},V[O.id]=N);let L=N[G];return L===void 0&&(L=d(l()),N[G]=L),L}function d(C){const D=[],O=[],P=[];for(let G=0;G<e;G++)D[G]=0,O[G]=0,P[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:P,object:C,attributes:{},index:null}}function f(C,D,O,P){const G=r.attributes,F=D.attributes;let k=0;const V=O.getAttributes();for(const N in V)if(V[N].location>=0){const U=G[N];let $=F[N];if($===void 0&&(N==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),N==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;k++}return r.attributesNum!==k||r.index!==P}function p(C,D,O,P){const G={},F=D.attributes;let k=0;const V=O.getAttributes();for(const N in V)if(V[N].location>=0){let U=F[N];U===void 0&&(N==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),N==="instanceColor"&&C.instanceColor&&(U=C.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),G[N]=$,k++}r.attributes=G,r.attributesNum=k,r.index=P}function x(){const C=r.newAttributes;for(let D=0,O=C.length;D<O;D++)C[D]=0}function m(C){g(C,0)}function g(C,D){const O=r.newAttributes,P=r.enabledAttributes,G=r.attributeDivisors;O[C]=1,P[C]===0&&(i.enableVertexAttribArray(C),P[C]=1),G[C]!==D&&(i.vertexAttribDivisor(C,D),G[C]=D)}function M(){const C=r.newAttributes,D=r.enabledAttributes;for(let O=0,P=D.length;O<P;O++)D[O]!==C[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function v(C,D,O,P,G,F,k){k===!0?i.vertexAttribIPointer(C,D,O,G,F):i.vertexAttribPointer(C,D,O,P,G,F)}function S(C,D,O,P){x();const G=P.attributes,F=O.getAttributes(),k=D.defaultAttributeValues;for(const V in F){const N=F[V];if(N.location>=0){let L=G[V];if(L===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),L!==void 0){const U=L.normalized,$=L.itemSize,it=t.get(L);if(it===void 0)continue;const Y=it.buffer,X=it.type,K=it.bytesPerElement,tt=X===i.INT||X===i.UNSIGNED_INT||L.gpuType===Qo;if(L.isInterleavedBufferAttribute){const nt=L.data,ht=nt.isInterleavedBuffer===!0?nt.stride:nt.itemSize,Nt=L.offset;if(nt.isInstancedInterleavedBuffer||nt.isInstancedBufferAttribute){for(let rt=0;rt<N.locationSize;rt++)g(N.location+rt,nt.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let rt=0;rt<N.locationSize;rt++)m(N.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let rt=0;rt<N.locationSize;rt++)v(N.location+rt,$/N.locationSize,X,U,ht*K,(Nt+$/N.locationSize*rt)*K,tt)}else{if(L.isInstancedBufferAttribute){for(let nt=0;nt<N.locationSize;nt++)g(N.location+nt,L.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let nt=0;nt<N.locationSize;nt++)m(N.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let nt=0;nt<N.locationSize;nt++)v(N.location+nt,$/N.locationSize,X,U,$*K,$/N.locationSize*nt*K,tt)}}else if(k!==void 0){const U=k[V];if(U!==void 0)switch(U.length){case 2:i.vertexAttrib2fv(N.location,U);break;case 3:i.vertexAttrib3fv(N.location,U);break;case 4:i.vertexAttrib4fv(N.location,U);break;default:i.vertexAttrib1fv(N.location,U)}}}}M()}function b(){w();for(const C in n){const D=n[C];for(const O in D){const P=D[O];for(const G in P){const F=P[G];for(const k in F)h(F[k].object),delete F[k];delete P[G]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;const D=n[C.id];for(const O in D){const P=D[O];for(const G in P){const F=P[G];for(const k in F)h(F[k].object),delete F[k];delete P[G]}}delete n[C.id]}function _(C){for(const D in n){const O=n[D];for(const P in O){const G=O[P];if(G[C.id]===void 0)continue;const F=G[C.id];for(const k in F)h(F[k].object),delete F[k];delete G[C.id]}}}function y(C){for(const D in n){const O=n[D],P=C.isInstancedMesh===!0?C.id:0,G=O[P];if(G!==void 0){for(const F in G){const k=G[F];for(const V in k)h(k[V].object),delete k[V];delete G[F]}delete O[P],Object.keys(O).length===0&&delete n[D]}}}function w(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Om(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function zm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Bn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){const y=_===En&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==cn&&_!==bn&&!y&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Bt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Bt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:S,maxSamples:b,samples:E}}function Bm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new kn,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,v=M*4;let S=g.clippingState||null;l.value=S,S=h(p,d,v,f);for(let b=0;b!==v;++b)S[b]=e[b];g.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const g=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,S=f;v!==x;++v,S+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}class vl extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new lh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zi(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:Ki});r.uniforms.tEquirect.value=e;const o=new Jt(s,r),a=e.minFilter;return e.minFilter===yn&&(e.minFilter=Ye),new xl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Ih=256,Gm=3,km=20,Nh=256,Uh=16,Hm=3,Vm=new q,Wm=new At;class co{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new xl(1,10,null),this._boxMesh=new Jt(new zi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Vm}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Wm));const m=new xl(n,s,h);return m.position.copy(a),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Ih,Rc(t))}_fromTexture(t,e){t.mapping===Ji||t.mapping===Os?this._setSize(t.image.length===0?Ih:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Fh(t,!1,!1),n=Math.log2(t)-Gm;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Fh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ji||t.mapping===Os?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Oh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Xm(),this._integrationMaterial=qm());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Uh);for(let o=0;o<=n;o++){const a=co.lodToRoughness(o,n);if(o>n-Hm)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(Nh*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Ym());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function Fh(i,t,e){return new vl(i,{minFilter:yn,generateMipmaps:t,type:En,colorSpace:Rr,depthBuffer:e})}function rr(i,t,e){return new on({name:i,uniforms:t,vertexShader:qt.cube_vert,fragmentShader:e,side:Qe,blending:Ki,depthTest:!1,depthWrite:!1})}function Xm(){return rr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Nh}u

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
	`)}function qm(){return rr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Uh}},`

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
	`)}function Ym(){return rr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${km}
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
	`)}function Oh(){return rr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function zh(){return rr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Zm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Zo||f===Ko)if(t.has(d)){const p=t.get(d).texture;return a(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const x=new vl(p.height);return x.fromEquirectangularTexture(i,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,p=f===Zo||f===Ko,x=f===Ji||f===Os;if(p||x){let m=e.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new co(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return p&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new co(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Zo?d.mapping=Ji:f===Ko&&(d.mapping=Os),d}function l(d){let f=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Km(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Pr("WebGLRenderer: "+n+" extension not supported."),s}}}function $m(i,t,e,n){const s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);const x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){const x=p.attributes;for(const m in x)t.update(x[m],i.ARRAY_BUFFER)}function u(p){const x=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const M=x!==null?x.array.length:m.array.length/3-1,v=m.count>=65535?Yc:qc,S=new v(Math.ceil(M/3)*6,1),b=S.array;if(x!==null){const _=x.array;g=x.version;for(let y=0,w=0;y<M;y+=3){const T=_[y+0],C=_[y+1],D=_[y+2];b[w++]=T,b[w++]=C,b[w++]=C,b[w++]=D,b[w++]=D,b[w++]=T}}else{g=m.version;for(let _=0,y=0;_<M;_+=3){const w=_+0,T=_+1,C=_+2;b[y++]=w,b[y++]=T,b[y++]=T,b[y++]=C,b[y++]=C,b[y++]=w}}S.version=g;const E=r.get(p);E&&t.remove(E),r.set(p,S)}function d(p){const x=r.get(p);if(x){const m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(const p in s){const x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Jm(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Qm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:re("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function jm(i,t,e){const n=new WeakMap,s=new ve;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let w=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let S=a.attributes.position.count*v,b=1;S>t.maxTextureSize&&(b=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const E=new Float32Array(S*b*4*u),_=new Nc(E,S,b,u);_.type=bn,_.needsUpdate=!0;const y=v*4;for(let T=0;T<u;T++){const C=m[T],D=g[T],O=M[T],P=S*b*4*T;for(let G=0;G<C.count;G++){const F=G*y;f===!0&&(s.fromBufferAttribute(C,G),E[P+F+0]=s.x,E[P+F+1]=s.y,E[P+F+2]=s.z,E[P+F+3]=0),p===!0&&(s.fromBufferAttribute(D,G),E[P+F+4]=s.x,E[P+F+5]=s.y,E[P+F+6]=s.z,E[P+F+7]=0),x===!0&&(s.fromBufferAttribute(O,G),E[P+F+8]=s.x,E[P+F+9]=s.y,E[P+F+10]=s.z,E[P+F+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new Lt(S,b)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function tg(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const eg={[ac]:"LINEAR_TONE_MAPPING",[lc]:"REINHARD_TONE_MAPPING",[cc]:"CINEON_TONE_MAPPING",[hc]:"ACES_FILMIC_TONE_MAPPING",[dc]:"AGX_TONE_MAPPING",[Yo]:"NEUTRAL_TONE_MAPPING",[uc]:"CUSTOM_TONE_MAPPING"};function ng(i,t,e,n,s,r){const o=new Gn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new Ae;h.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Me([0,2,0,0,2,0],2));const u=new xp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Jt(h,u),f=new Th(-1,1,1,-1,0,1);let p=null,x=null,m=!1,g,M=null,v=[],S=!1;this.setSize=function(b,E){o.setSize(b,E),a!==null&&a.setSize(b,E),l!==null&&l.setSize(b,E);for(let _=0;_<v.length;_++){const y=v[_];y.setSize&&y.setSize(b,E)}},this.setEffects=function(b){v=b,S=v.length>0&&v[0].isRenderPass===!0;const E=o.width,_=o.height;v.length>0&&a===null&&(a=new Gn(E,_,{type:En,depthBuffer:!1,stencilBuffer:!1}),l=new Gn(E,_,{type:En,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&v.some(w=>w.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&c===null&&(c=new fs(E,_),r===!0&&(c.format=pi,c.type=Qi)),o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let w=0;w<v.length;w++){const T=v[w];T.setSize&&T.setSize(E,_),y&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(c)}},this.begin=function(b,E){if(m||b.toneMapping===Kn&&v.length===0)return!1;if(M=E,E!==null){const _=E.width,y=E.height;(o.width!==_||o.height!==y)&&this.setSize(_,y)}return S===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Kn,!0},this.hasRenderPass=function(){return S},this.end=function(b,E){b.toneMapping=g,m=!0;let _=o,y=a;for(let w=0;w<v.length;w++){const T=v[w];T.enabled!==!1&&(T.render(b,y,_,E),T.needsSwap!==!1&&(_=y,y=y===a?l:a))}if(p!==b.outputColorSpace||x!==b.toneMapping){p=b.outputColorSpace,x=b.toneMapping,u.defines={},ee.getTransfer(p)===fe&&(u.defines.SRGB_TRANSFER="");const w=eg[x];w&&(u.defines[w]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(M),b.render(d,f),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const Bh=new Te,Gh=new fs(1,1),kh=new ch(1),Hh=new Nc,Vh=new Rf,Wh=new lh,Xh=[],qh=[],Yh=new Float32Array(16),Zh=new Float32Array(9),Kh=new Float32Array(4);function vs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Xh[s];if(r===void 0&&(r=new Float32Array(s),Xh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ho(i,t){let e=qh[t];e===void 0&&(e=new Int32Array(t),qh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ig(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function ag(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Kh.set(n),i.uniformMatrix2fv(this.addr,!1,Kh),Oe(e,n)}}function lg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Zh.set(n),i.uniformMatrix3fv(this.addr,!1,Zh),Oe(e,n)}}function cg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Yh.set(n),i.uniformMatrix4fv(this.addr,!1,Yh),Oe(e,n)}}function hg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function pg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function uo(i){return i.version===0&&(i.compareFunction=yc,i.needsUpdate=!0),i}function _g(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=uo(Gh):r=Bh,e.setTexture2D(t||r,s)}function vg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vh,s)}function Mg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=uo(kh):r=Wh,e.setTextureCube(t||r,s)}function Sg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hh,s)}function yg(i){switch(i){case 5126:return ig;case 35664:return sg;case 35665:return rg;case 35666:return og;case 35674:return ag;case 35675:return lg;case 35676:return cg;case 5124:case 35670:return hg;case 35667:case 35671:return ug;case 35668:case 35672:return dg;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return Sg}}function bg(i,t){i.uniform1fv(this.addr,t)}function Eg(i,t){const e=vs(t,this.size,2);i.uniform2fv(this.addr,e)}function wg(i,t){const e=vs(t,this.size,3);i.uniform3fv(this.addr,e)}function Tg(i,t){const e=vs(t,this.size,4);i.uniform4fv(this.addr,e)}function Ag(i,t){const e=vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rg(i,t){const e=vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Cg(i,t){const e=vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Pg(i,t){i.uniform1iv(this.addr,t)}function Lg(i,t){i.uniform2iv(this.addr,t)}function Dg(i,t){i.uniform3iv(this.addr,t)}function Ig(i,t){i.uniform4iv(this.addr,t)}function Ng(i,t){i.uniform1uiv(this.addr,t)}function Ug(i,t){i.uniform2uiv(this.addr,t)}function Fg(i,t){i.uniform3uiv(this.addr,t)}function Og(i,t){i.uniform4uiv(this.addr,t)}function zg(i,t,e){const n=this.cache,s=t.length,r=ho(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=uo(Gh):o=Bh;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Bg(i,t,e){const n=this.cache,s=t.length,r=ho(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vh,r[o])}function Gg(i,t,e){const n=this.cache,s=t.length,r=ho(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=uo(kh):o=Wh;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function kg(i,t,e){const n=this.cache,s=t.length,r=ho(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Hh,r[o])}function Hg(i){switch(i){case 5126:return bg;case 35664:return Eg;case 35665:return wg;case 35666:return Tg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Pg;case 35667:case 35671:return Lg;case 35668:case 35672:return Dg;case 35669:case 35673:return Ig;case 5125:return Ng;case 36294:return Ug;case 36295:return Fg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return kg}}class Vg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yg(e.type)}}class Wg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hg(e.type)}}class Xg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ml=/(\w+)(\])?(\[|\.)?/g;function $h(i,t){i.seq.push(t),i.map[t.id]=t}function qg(i,t,e){const n=i.name,s=n.length;for(Ml.lastIndex=0;;){const r=Ml.exec(n),o=Ml.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$h(e,c===void 0?new Vg(a,i,t):new Wg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Xg(a),$h(e,u)),e=u}}}class fo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);qg(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Jh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Yg=37297;let Zg=0;function Kg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Qh=new kt;function $g(i){ee._getMatrix(Qh,ee.workingColorSpace,i);const t=`mat3( ${Qh.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Cr:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Kg(i.getShaderSource(t),a)}else return r}function Jg(i,t){const e=$g(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Qg={[ac]:"Linear",[lc]:"Reinhard",[cc]:"Cineon",[hc]:"ACESFilmic",[dc]:"AgX",[Yo]:"Neutral",[uc]:"Custom"};function jg(i,t){const e=Qg[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const po=new q;function tx(){ee.getLuminanceCoefficients(po);const i=po.x.toFixed(4),t=po.y.toFixed(4),e=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ex(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function nx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ix(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function or(i){return i!==""}function tu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function eu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(i){return i.replace(sx,rx)}function rx(i,t){const e=qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Sl(e)}const ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nu(i){return i.replace(ox,ax)}function ax(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function iu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const lx={[Is]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function cx(i){return lx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hx={[Os]:"ENVMAP_MODE_REFRACTION"};function ux(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":hx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dx={[vr]:"ENVMAP_BLENDING_MULTIPLY",[Xd]:"ENVMAP_BLENDING_MIX",[qd]:"ENVMAP_BLENDING_ADD"};function fx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":dx[i.combine]||"ENVMAP_BLENDING_NONE"}function px(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=cx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ux(e),u=fx(e),d=ex(e),f=nx(r),p=s.createProgram();let x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(or).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(or).join(`
`),m.length>0&&(m+=`
`)):(x=[iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),m=[iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?jg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Jg("linearToOutputTexel",e.outputColorSpace),tx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),o=Sl(o),o=tu(o,e),o=eu(o,e),a=Sl(a),a=tu(a,e),a=eu(a,e),o=nu(o),a=nu(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=g+x+o,v=g+m+a,S=Jh(s,s.VERTEX_SHADER,M),b=Jh(s,s.FRAGMENT_SHADER,v);s.attachShader(p,S),s.attachShader(p,b),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(T){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(p)||"",D=s.getShaderInfoLog(S)||"",O=s.getShaderInfoLog(b)||"",P=C.trim(),G=D.trim(),F=O.trim();let k=!0,V=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,S,b);else{const N=jh(s,S,"vertex"),L=jh(s,b,"fragment");re("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+P+`
`+N+`
`+L)}else P!==""?Bt("WebGLProgram: Program Info Log:",P):(G===""||F==="")&&(V=!1);V&&(T.diagnostics={runnable:k,programLog:P,vertexShader:{log:G,prefix:x},fragmentShader:{log:F,prefix:m}})}s.deleteShader(S),s.deleteShader(b),_=new fo(s,p),y=ix(s,p)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(p,Yg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zg++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=b,this}let mx=0;class gx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new xx(t),e.set(t,n)),n}}class xx{constructor(t){this.id=mx++,this.code=t,this.usedTimes=0}}function _x(i){return i===mi||i===Tr||i===Ar}function vx(i,t,e,n,s,r){const o=new ka,a=new gx,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,y,w,T,C,D){const O=T.fog,P=C.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?T.environment:null,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=t.get(_.envMap||G,F),V=d[_.type];let N=n.precision;_.precision!==null&&(N=n.getMaxPrecision(_.precision),N!==_.precision&&Bt("WebGLProgram.getParameters:",_.precision,"not supported, using",N,"instead."));const L=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,U=L!==void 0?L.length:0;let $=0;P.morphAttributes.position!==void 0&&($=1),P.morphAttributes.normal!==void 0&&($=2),P.morphAttributes.color!==void 0&&($=3);let it,Y,X,K;if(V){const Et=Wn[V];it=Et.vertexShader,Y=Et.fragmentShader}else{it=_.vertexShader,Y=_.fragmentShader;const Et=a.getVertexShaderStage(_),pe=a.getFragmentShaderStage(_);a.update(_,Et,pe),X=Et.id,K=pe.id}const tt=i.getRenderTarget(),nt=i.state.buffers.depth.getReversed(),ht=C.isInstancedMesh===!0,Nt=C.isBatchedMesh===!0,rt=!!_.map,ft=!!_.matcap,Dt=!!k,Tt=Dt&&k.isPMREMTexture===!0,Vt=!!_.aoMap,Ft=!!_.lightMap,oe=!!_.bumpMap&&_.wireframe===!1,Xt=!!_.normalMap,we=!!_.displacementMap,ce=!!_.emissiveMap,ge=!!_.metalnessMap,ae=!!_.roughnessMap,ue=_.anisotropy>0,H=_.clearcoat>0,xe=_.diffuseRoughness>0,$t=_.dispersion>0,de=_.retroreflectivity>0,yt=_.iridescence>0,Be=_.sheen>0,zt=_.transmission>0,Ht=ue&&!!_.anisotropyMap,I=H&&!!_.clearcoatMap,A=H&&!!_.clearcoatNormalMap,Q=H&&!!_.clearcoatRoughnessMap,ut=xe&&!!_.diffuseRoughnessMap,ct=yt&&!!_.iridescenceMap,mt=yt&&!!_.iridescenceThicknessMap,Mt=Be&&!!_.sheenColorMap,ot=Be&&!!_.sheenRoughnessMap,at=!!_.specularMap,xt=!!_.specularColorMap,B=!!_.specularIntensityMap,lt=zt&&!!_.transmissionMap,st=zt&&!!_.thicknessMap,_t=!!_.gradientMap,pt=!!_.alphaMap,gt=_.alphaTest>0,Ut=!!_.alphaHash,Zt=!!_.extensions;let dt=Kn;_.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(dt=i.toneMapping);const Ot=Tt?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Yt={shaderID:V,shaderType:_.type,shaderName:_.name,vertexShader:it,fragmentShader:Y,defines:_.defines,customVertexShaderID:X,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:N,batching:Nt,batchingColor:Nt&&C._colorsTexture!==null,instancing:ht,instancingColor:ht&&C.instanceColor!==null,instancingMorph:ht&&C.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:rt,matcap:ft,envMap:Dt,envMapMode:Dt&&k.mapping,envMapPMREM:Tt,envMapMaxLod:Tt?Ot.length-1:null,envMapSize:Tt?Ot[0].width:null,aoMap:Vt,lightMap:Ft,bumpMap:oe,normalMap:Xt,displacementMap:we,emissiveMap:ce,normalMapObjectSpace:Xt&&_.normalMapType===Kd,normalMapTangentSpace:Xt&&_.normalMapType===ji,packedNormalMap:Xt&&_.normalMapType===ji&&_x(_.normalMap.format),metalnessMap:ge,roughnessMap:ae,anisotropy:ue,anisotropyMap:Ht,clearcoat:H,clearcoatMap:I,clearcoatNormalMap:A,clearcoatRoughnessMap:Q,diffuseRoughness:xe,diffuseRoughnessMap:ut,dispersion:$t,retroreflection:de,iridescence:yt,iridescenceMap:ct,iridescenceThicknessMap:mt,sheen:Be,sheenColorMap:Mt,sheenRoughnessMap:ot,specularMap:at,specularColorMap:xt,specularIntensityMap:B,transmission:zt,transmissionMap:lt,thicknessMap:st,gradientMap:_t,opaque:_.transparent===!1&&_.blending===Us&&_.alphaToCoverage===!1,alphaMap:pt,alphaTest:gt,alphaHash:Ut,combine:_.combine,mapUv:rt&&f(_.map.channel),aoMapUv:Vt&&f(_.aoMap.channel),lightMapUv:Ft&&f(_.lightMap.channel),bumpMapUv:oe&&f(_.bumpMap.channel),normalMapUv:Xt&&f(_.normalMap.channel),displacementMapUv:we&&f(_.displacementMap.channel),emissiveMapUv:ce&&f(_.emissiveMap.channel),metalnessMapUv:ge&&f(_.metalnessMap.channel),roughnessMapUv:ae&&f(_.roughnessMap.channel),anisotropyMapUv:Ht&&f(_.anisotropyMap.channel),clearcoatMapUv:I&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:A&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ut&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ct&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:ot&&f(_.sheenRoughnessMap.channel),specularMapUv:at&&f(_.specularMap.channel),specularColorMapUv:xt&&f(_.specularColorMap.channel),specularIntensityMapUv:B&&f(_.specularIntensityMap.channel),transmissionMapUv:lt&&f(_.transmissionMap.channel),thicknessMapUv:st&&f(_.thicknessMap.channel),alphaMapUv:pt&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Xt||ue),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!P.attributes.uv&&(rt||pt),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&Xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:nt,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:$,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:D.filter(Et=>Et.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:rt&&_.map.isVideoTexture===!0&&ee.getTransfer(_.map.colorSpace)===fe,decodeVideoTextureEmissive:ce&&_.emissiveMap.isVideoTexture===!0&&ee.getTransfer(_.emissiveMap.colorSpace)===fe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ie,flipSided:_.side===Qe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Zt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&_.extensions.multiDraw===!0||Nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function x(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const w in _.defines)y.push(w),y.push(_.defines[w]);return _.isRawShaderMaterial===!1&&(m(y,_),g(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function m(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapPMREM),_.push(y.envMapMaxLod),_.push(y.envMapSize),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.diffuseRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.numSunLights),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numSunLightShadows),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.numLightProbeGrids),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function g(_,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){const y=d[_.type];let w;if(y){const T=Wn[y];w=pp.clone(T.uniforms)}else w=_.uniforms;return w}function v(_,y){let w=h.get(y);return w!==void 0?++w.usedTimes:(w=new px(i,y,_,s),c.push(w),h.set(y,w)),w}function S(_){if(--_.usedTimes===0){const y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:M,acquireProgram:v,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:E}}function Mx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Sx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function su(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ru(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,g){let M=i[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},i[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=p,M.materialVariant=o(d),M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=m,M.group=g),t++,M}function l(d,f,p,x,m,g,M){M.reversedDepth===!0&&(m=-m);const v=a(d,f,p,x,m,g);p.transmission>0?n.push(v):p.transparent===!0?s.push(v):e.push(v)}function c(d,f,p,x,m,g){const M=a(d,f,p,x,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||Sx),n.length>1&&n.sort(f||su),s.length>1&&s.sort(f||su)}function u(){for(let d=t,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function yx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ru,i.set(n,[o])):s>=r.length?(o=new ru,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function bx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new At};break;case"SpotLight":e={position:new q,direction:new q,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function Ex(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let wx=0;function Tx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ax(i){const t=new bx,e=Ex(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const s=new q,r=new ie,o=new ie;function a(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,M=0,v=0,S=0,b=0,E=0,_=0,y=0,w=0,T=0;c.sort(Tx);for(let D=0,O=c.length;D<O;D++){const P=c[D],G=P.color,F=P.intensity,k=P.distance;let V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===mi?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=G.r*F,u+=G.g*F,d+=G.b*F;else if(P.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(P.sh.coefficients[N],F);T++}else if(P.isSunLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const L=P.shadow,U=e.get(P);U.shadowIntensity=L.intensity,U.shadowBias=L.bias,U.shadowNormalBias=L.normalBias,U.shadowRadius=L.radius,U.shadowMapSize.copy(L.mapSize).multiply(L.getFrameExtents()),n.sunShadow[p]=U,n.sunShadowMap[p]=V;const $=L.getViewportCount();for(let it=0;it<$;it++)n.sunShadowMatrix[x+it]=L.getMatrix(it),n.sunShadowCascade[x+it]=L._cascadeData[it];x+=$,p++}n.sun[f]=N,f++}else if(P.isDirectionalLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const L=P.shadow,U=e.get(P);U.shadowIntensity=L.intensity,U.shadowBias=L.bias,U.shadowNormalBias=L.normalBias,U.shadowRadius=L.radius,U.shadowMapSize=L.mapSize,n.directionalShadow[m]=U,n.directionalShadowMap[m]=V,n.directionalShadowMatrix[m]=P.shadow.matrix,b++}n.directional[m]=N,m++}else if(P.isSpotLight){const N=t.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(G).multiplyScalar(F),N.distance=k,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,n.spot[M]=N;const L=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,L.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[M]=L.matrix,P.castShadow){const U=e.get(P);U.shadowIntensity=L.intensity,U.shadowBias=L.bias,U.shadowNormalBias=L.normalBias,U.shadowRadius=L.radius,U.shadowMapSize=L.mapSize,n.spotShadow[M]=U,n.spotShadowMap[M]=V,_++}M++}else if(P.isRectAreaLight){const N=t.get(P);N.color.copy(G).multiplyScalar(F),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),n.rectArea[v]=N,v++}else if(P.isPointLight){const N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){const L=P.shadow,U=e.get(P);U.shadowIntensity=L.intensity,U.shadowBias=L.bias,U.shadowNormalBias=L.normalBias,U.shadowRadius=L.radius,U.shadowMapSize=L.mapSize,U.shadowCameraNear=L.camera.near,U.shadowCameraFar=L.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=N,g++}else if(P.isHemisphereLight){const N=t.get(P);N.skyColor.copy(P.color).multiplyScalar(F),N.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[S]=N,S++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==g||C.spotLength!==M||C.rectAreaLength!==v||C.hemiLength!==S||C.numSunShadows!==p||C.numDirectionalShadows!==b||C.numPointShadows!==E||C.numSpotShadows!==_||C.numSpotMaps!==y||C.numLightProbes!==T)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=v,n.point.length=g,n.hemi.length=S,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,C.sunLength=f,C.directionalLength=m,C.pointLength=g,C.spotLength=M,C.rectAreaLength=v,C.hemiLength=S,C.numSunShadows=p,C.numDirectionalShadows=b,C.numPointShadows=E,C.numSpotShadows=_,C.numSpotMaps=y,C.numLightProbes=T,n.version=wx++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,m=0;const g=h.matrixWorldInverse;for(let M=0,v=c.length;M<v;M++){const S=c[M];if(S.isSunLight){const b=n.sun[u];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(g),u++}else if(S.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),d++}else if(S.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(S.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function ou(i){const t=new Ax(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Rx(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ou(i),t.set(s,[a])):r>=o.length?(a=new ou(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Px=`uniform sampler2D shadow_pass;
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
}`,Lx=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],Dx=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],au=new ie,ar=new q,yl=new q;function Ix(i,t,e){let n=new js;const s=new Lt,r=new Lt,o=new ve,a=new Mp,l=new Sp,c={},h=e.maxTextureSize,u={[di]:Qe,[Qe]:di,[Ie]:Ie},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Cx,fragmentShader:Px}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Ae;p.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Jt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Is;let g=this.type;this.render=function(E,_,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Td&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Is);const w=i.getRenderTarget(),T=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Ki),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=g!==this.type;O&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(G=>G.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,G=E.length;P<G;P++){const F=E[P],k=F.shadow;if(k===void 0){Bt("WebGLShadowMap:",F,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const V=k.getFrameExtents();s.multiply(V),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,k.mapSize.y=r.y));const N=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=N,k.map===null||O===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ns){if(F.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Gn(s.x,s.y,{format:mi,type:En,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),k.map.texture.name=F.name+".shadowMap",k.map.depthTexture=new fs(s.x,s.y,bn),k.map.depthTexture.name=F.name+".shadowMapDepth",k.map.depthTexture.format=fi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ne,k.map.depthTexture.magFilter=Ne}else F.isPointLight?(k.map=new vl(s.x),k.map.depthTexture=new ch(s.x,zn)):(k.map=new Gn(s.x,s.y),k.map.depthTexture=new fs(s.x,s.y,zn)),k.map.depthTexture.name=F.name+".shadowMap",k.map.depthTexture.format=fi,this.type===Is?(k.map.depthTexture.compareFunction=N?Sc:Mc,k.map.depthTexture.minFilter=Ye,k.map.depthTexture.magFilter=Ye):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ne,k.map.depthTexture.magFilter=Ne);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);const L=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();F.isPointLight!==!0&&k.updateMatrices(F,y);const U=k.camera.layers.mask&4294967294?k.camera.layers:y.layers;for(let $=0;$<L;$++){const it=k.getCamera($);if(F.isPointLight){const Y=k.camera,X=k.matrix,K=F.distance||Y.far;K!==Y.far&&(Y.far=K,Y.updateProjectionMatrix()),ar.setFromMatrixPosition(F.matrixWorld),Y.position.copy(ar),yl.copy(Y.position),yl.add(Lx[$]),Y.up.copy(Dx[$]),Y.lookAt(yl),Y.updateMatrixWorld(),X.makeTranslation(-ar.x,-ar.y,-ar.z),au.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),k._frustum.setFromProjectionMatrix(au,Y.coordinateSystem,Y.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,$),i.clear();else{$===0&&(i.setRenderTarget(k.map),i.clear());const Y=k.getViewport($);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),D.viewport(o)}n=k.getFrustum($),S(_,y,it,F,U,this.type)}k.isPointLightShadow!==!0&&this.type===Ns&&M(k,y),k.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(w,T,C)};function M(E,_){const y=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Gn(s.x,s.y,{format:mi,type:En}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,y,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,y,f,x,null)}function v(E,_,y,w){let T=null;const C=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)T=C;else if(T=y.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const D=T.uuid,O=_.uuid;let P=c[D];P===void 0&&(P={},c[D]=P);let G=P[O];G===void 0&&(G=T.clone(),P[O]=G,_.addEventListener("dispose",b)),T=G}if(T.visible=_.visible,T.wireframe=_.wireframe,w===Ns?T.side=_.shadowSide!==null?_.shadowSide:_.side:T.side=_.shadowSide!==null?_.shadowSide:u[_.side],T.alphaMap=_.alphaMap,T.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,T.map=_.map,T.clipShadows=_.clipShadows,T.clippingPlanes=_.clippingPlanes,T.clipIntersection=_.clipIntersection,T.displacementMap=_.displacementMap,T.displacementScale=_.displacementScale,T.displacementBias=_.displacementBias,T.wireframeLinewidth=_.wireframeLinewidth,T.linewidth=_.linewidth,y.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const D=i.properties.get(T);D.light=y}return T}function S(E,_,y,w,T,C){if(E.visible===!1)return;if(E.layers.test(T)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Ns)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const P=t.update(E),G=E.material;if(Array.isArray(G)){const F=P.groups;for(let k=0,V=F.length;k<V;k++){const N=F[k],L=G[N.materialIndex];if(L&&L.visible){const U=v(E,L,w,C);E.onBeforeShadow(i,E,_,y,P,U,N),i.renderBufferDirect(y,null,P,U,E,N),E.onAfterShadow(i,E,_,y,P,U,N)}}}else if(G.visible){const F=v(E,G,w,C);E.onBeforeShadow(i,E,_,y,P,F,null),i.renderBufferDirect(y,null,P,F,E,null),E.onAfterShadow(i,E,_,y,P,F,null)}}const O=E.children;for(let P=0,G=O.length;P<G;P++)S(O[P],_,y,w,T,C)}function b(E){E.target.removeEventListener("dispose",b);for(const y in c){const w=c[y],T=E.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}function Nx(i,t){function e(){let B=!1;const lt=new ve;let st=null;const _t=new ve(0,0,0,0);return{setMask:function(pt){st!==pt&&!B&&(i.colorMask(pt,pt,pt,pt),st=pt)},setLocked:function(pt){B=pt},setClear:function(pt,gt,Ut,Zt,dt){dt===!0&&(pt*=Zt,gt*=Zt,Ut*=Zt),lt.set(pt,gt,Ut,Zt),_t.equals(lt)===!1&&(i.clearColor(pt,gt,Ut,Zt),_t.copy(lt))},reset:function(){B=!1,st=null,_t.set(-1,0,0,0)}}}function n(){let B=!1,lt=!1,st=null,_t=null,pt=null;return{setReversed:function(gt){if(lt!==gt){const Ut=t.get("EXT_clip_control");gt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),lt=gt;const Zt=pt;pt=null,this.setClear(Zt)}},getReversed:function(){return lt},setTest:function(gt){gt?nt(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(gt){st!==gt&&!B&&(i.depthMask(gt),st=gt)},setFunc:function(gt){if(lt&&(gt=af[gt]),_t!==gt){switch(gt){case Go:i.depthFunc(i.NEVER);break;case ko:i.depthFunc(i.ALWAYS);break;case Ho:i.depthFunc(i.LESS);break;case Fs:i.depthFunc(i.LEQUAL);break;case Vo:i.depthFunc(i.EQUAL);break;case Wo:i.depthFunc(i.GEQUAL);break;case Xo:i.depthFunc(i.GREATER);break;case qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=gt}},setLocked:function(gt){B=gt},setClear:function(gt){pt!==gt&&(pt=gt,lt&&(gt=1-gt),i.clearDepth(gt))},reset:function(){B=!1,st=null,_t=null,pt=null,lt=!1}}}function s(){let B=!1,lt=null,st=null,_t=null,pt=null,gt=null,Ut=null,Zt=null,dt=null;return{setTest:function(Ot){B||(Ot?nt(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(Ot){lt!==Ot&&!B&&(i.stencilMask(Ot),lt=Ot)},setFunc:function(Ot,Yt,Et){(st!==Ot||_t!==Yt||pt!==Et)&&(i.stencilFunc(Ot,Yt,Et),st=Ot,_t=Yt,pt=Et)},setOp:function(Ot,Yt,Et){(gt!==Ot||Ut!==Yt||Zt!==Et)&&(i.stencilOp(Ot,Yt,Et),gt=Ot,Ut=Yt,Zt=Et)},setLocked:function(Ot){B=Ot},setClear:function(Ot){dt!==Ot&&(i.clearStencil(Ot),dt=Ot)},reset:function(){B=!1,lt=null,st=null,_t=null,pt=null,gt=null,Ut=null,Zt=null,dt=null}}}const r=new e,o=new n,a=new s;let l={};const c=new WeakMap;let h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,M=null,v=null,S=null,b=null,E=null,_=null,y=new At(0,0,0),w=0,T=!1,C=null,D=null,O=null,P=null,G=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,V=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(N)[1]),k=V>=1):N.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),k=V>=2);let L=null,U={};const $=i.getParameter(i.SCISSOR_BOX),it=i.getParameter(i.VIEWPORT),Y=new ve().fromArray($),X=new ve().fromArray(it);function K(B,lt,st,_t){const pt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(B,gt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<st;Ut++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(lt+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return gt}const tt={};tt[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(i.DEPTH_TEST),o.setFunc(Fs),oe(!1),Xt(nc),nt(i.CULL_FACE),Vt(Ki);function nt(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function ht(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Nt(B,lt){return d[B]!==lt?(i.bindFramebuffer(B,lt),d[B]=lt,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=lt),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function rt(B,lt){let st=p,_t=!1;if(B){st=f.get(lt),st===void 0&&(st=[],f.set(lt,st));const pt=B.textures;if(st.length!==pt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Ut=pt.length;gt<Ut;gt++)st[gt]=i.COLOR_ATTACHMENT0+gt;st.length=pt.length,_t=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,_t=!0);_t&&i.drawBuffers(st)}function ft(B){return x!==B?(i.useProgram(B),x=B,!0):!1}const Dt={[$i]:i.FUNC_ADD,[Rd]:i.FUNC_SUBTRACT,[Cd]:i.FUNC_REVERSE_SUBTRACT};Dt[Pd]=i.MIN,Dt[Ld]=i.MAX;const Tt={[Dd]:i.ZERO,[Id]:i.ONE,[Nd]:i.SRC_COLOR,[rc]:i.SRC_ALPHA,[Gd]:i.SRC_ALPHA_SATURATE,[zd]:i.DST_COLOR,[Fd]:i.DST_ALPHA,[Ud]:i.ONE_MINUS_SRC_COLOR,[oc]:i.ONE_MINUS_SRC_ALPHA,[Bd]:i.ONE_MINUS_DST_COLOR,[Od]:i.ONE_MINUS_DST_ALPHA,[kd]:i.CONSTANT_COLOR,[Hd]:i.ONE_MINUS_CONSTANT_COLOR,[Vd]:i.CONSTANT_ALPHA,[Wd]:i.ONE_MINUS_CONSTANT_ALPHA};function Vt(B,lt,st,_t,pt,gt,Ut,Zt,dt,Ot){if(B===Ki){m===!0&&(ht(i.BLEND),m=!1);return}if(m===!1&&(nt(i.BLEND),m=!0),B!==Ad){if(B!==g||Ot!==T){if((M!==$i||b!==$i)&&(i.blendEquation(i.FUNC_ADD),M=$i,b=$i),Ot)switch(B){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bo:i.blendFunc(i.ONE,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:re("WebGLState: Invalid blending: ",B);break}else switch(B){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ic:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sc:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",B);break}v=null,S=null,E=null,_=null,y.set(0,0,0),w=0,g=B,T=Ot}return}pt=pt||lt,gt=gt||st,Ut=Ut||_t,(lt!==M||pt!==b)&&(i.blendEquationSeparate(Dt[lt],Dt[pt]),M=lt,b=pt),(st!==v||_t!==S||gt!==E||Ut!==_)&&(i.blendFuncSeparate(Tt[st],Tt[_t],Tt[gt],Tt[Ut]),v=st,S=_t,E=gt,_=Ut),(Zt.equals(y)===!1||dt!==w)&&(i.blendColor(Zt.r,Zt.g,Zt.b,dt),y.copy(Zt),w=dt),g=B,T=!1}function Ft(B,lt){B.side===Ie?ht(i.CULL_FACE):nt(i.CULL_FACE);let st=B.side===Qe;lt&&(st=!st),oe(st),B.blending===Us&&B.transparent===!1?Vt(Ki):Vt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const _t=B.stencilWrite;a.setTest(_t),_t&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ce(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(B){C!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),C=B)}function Xt(B){B!==Ed?(nt(i.CULL_FACE),B!==D&&(B===nc?i.cullFace(i.BACK):B===wd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),D=B}function we(B){B!==O&&(k&&i.lineWidth(B),O=B)}function ce(B,lt,st){B?(nt(i.POLYGON_OFFSET_FILL),(P!==lt||G!==st)&&(P=lt,G=st,o.getReversed()&&(lt=-lt,st=-st),i.polygonOffset(lt,st))):ht(i.POLYGON_OFFSET_FILL)}function ge(B){B?nt(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function ae(B){B===void 0&&(B=i.TEXTURE0+F-1),L!==B&&(i.activeTexture(B),L=B)}function ue(B,lt,st){st===void 0&&(L===null?st=i.TEXTURE0+F-1:st=L);let _t=U[st];_t===void 0&&(_t={type:void 0,texture:void 0},U[st]=_t),(_t.type!==B||_t.texture!==lt)&&(L!==st&&(i.activeTexture(st),L=st),i.bindTexture(B,lt||tt[B]),_t.type=B,_t.texture=lt)}function H(){const B=U[L];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function xe(){try{i.compressedTexImage2D(...arguments)}catch(B){re("WebGLState:",B)}}function $t(){try{i.compressedTexImage3D(...arguments)}catch(B){re("WebGLState:",B)}}function de(){try{i.texSubImage2D(...arguments)}catch(B){re("WebGLState:",B)}}function yt(){try{i.texSubImage3D(...arguments)}catch(B){re("WebGLState:",B)}}function Be(){try{i.compressedTexSubImage2D(...arguments)}catch(B){re("WebGLState:",B)}}function zt(){try{i.compressedTexSubImage3D(...arguments)}catch(B){re("WebGLState:",B)}}function Ht(){try{i.texStorage2D(...arguments)}catch(B){re("WebGLState:",B)}}function I(){try{i.texStorage3D(...arguments)}catch(B){re("WebGLState:",B)}}function A(){try{i.texImage2D(...arguments)}catch(B){re("WebGLState:",B)}}function Q(){try{i.texImage3D(...arguments)}catch(B){re("WebGLState:",B)}}function ut(B){return u[B]!==void 0?u[B]:i.getParameter(B)}function ct(B,lt){u[B]!==lt&&(i.pixelStorei(B,lt),u[B]=lt)}function mt(B){Y.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Y.copy(B))}function Mt(B){X.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),X.copy(B))}function ot(B,lt){let st=c.get(lt);st===void 0&&(st=new WeakMap,c.set(lt,st));let _t=st.get(B);_t===void 0&&(_t=i.getUniformBlockIndex(lt,B.name),i.uniformBlockBinding(lt,_t,_t),st.set(B,_t))}function at(B,lt,st){const pt=c.get(lt).get(B);l[pt]!==st&&(i.bindBufferBase(i.UNIFORM_BUFFER,pt,st),l[pt]=st)}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},L=null,U={},d={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,M=null,v=null,S=null,b=null,E=null,_=null,y=new At(0,0,0),w=0,T=!1,C=null,D=null,O=null,P=null,G=null,Y.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:ht,bindFramebuffer:Nt,drawBuffers:rt,useProgram:ft,setBlending:Vt,setMaterial:Ft,setFlipSided:oe,setCullFace:Xt,setLineWidth:we,setPolygonOffset:ce,setScissorTest:ge,activeTexture:ae,bindTexture:ue,unbindTexture:H,compressedTexImage2D:xe,compressedTexImage3D:$t,texImage2D:A,texImage3D:Q,pixelStorei:ct,getParameter:ut,updateUBOMapping:ot,uniformBlockBinding:at,texStorage2D:Ht,texStorage3D:I,texSubImage2D:de,texSubImage3D:yt,compressedTexSubImage2D:Be,compressedTexSubImage3D:zt,scissor:mt,viewport:Mt,reset:xt}}function Ux(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,u=new Set;let d;const f=new WeakMap,p=new Set,x=new FinalizationRegistry(I=>p.delete(I));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,A){return m?new OffscreenCanvas(I,A):Hs("canvas")}function M(I,A,Q){let ut=1;const ct=Ht(I);if((ct.width>Q||ct.height>Q)&&(ut=Q/Math.max(ct.width,ct.height)),ut<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const mt=Math.floor(ut*ct.width),Mt=Math.floor(ut*ct.height);d===void 0&&(d=g(mt,Mt));const ot=A?g(mt,Mt):d;return ot.width=mt,ot.height=Mt,ot.getContext("2d").drawImage(I,0,0,mt,Mt),Bt("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+mt+"x"+Mt+")."),ot}else return"data"in I&&Bt("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),I;return I}function v(I){return I.generateMipmaps}function S(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(I,A,Q,ut,ct,mt=!1){if(I!==null){if(i[I]!==void 0)return i[I];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Mt;ut&&(Mt=t.get("EXT_texture_norm16"),Mt||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=A;if(A===i.RED&&(Q===i.FLOAT&&(ot=i.R32F),Q===i.HALF_FLOAT&&(ot=i.R16F),Q===i.UNSIGNED_BYTE&&(ot=i.R8),Q===i.UNSIGNED_SHORT&&Mt&&(ot=Mt.R16_EXT),Q===i.SHORT&&Mt&&(ot=Mt.R16_SNORM_EXT)),A===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ot=i.R8UI),Q===i.UNSIGNED_SHORT&&(ot=i.R16UI),Q===i.UNSIGNED_INT&&(ot=i.R32UI),Q===i.BYTE&&(ot=i.R8I),Q===i.SHORT&&(ot=i.R16I),Q===i.INT&&(ot=i.R32I)),A===i.RG&&(Q===i.FLOAT&&(ot=i.RG32F),Q===i.HALF_FLOAT&&(ot=i.RG16F),Q===i.UNSIGNED_BYTE&&(ot=i.RG8),Q===i.UNSIGNED_SHORT&&Mt&&(ot=Mt.RG16_EXT),Q===i.SHORT&&Mt&&(ot=Mt.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ot=i.RG8UI),Q===i.UNSIGNED_SHORT&&(ot=i.RG16UI),Q===i.UNSIGNED_INT&&(ot=i.RG32UI),Q===i.BYTE&&(ot=i.RG8I),Q===i.SHORT&&(ot=i.RG16I),Q===i.INT&&(ot=i.RG32I)),A===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),Q===i.UNSIGNED_INT&&(ot=i.RGB32UI),Q===i.BYTE&&(ot=i.RGB8I),Q===i.SHORT&&(ot=i.RGB16I),Q===i.INT&&(ot=i.RGB32I)),A===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),Q===i.UNSIGNED_INT&&(ot=i.RGBA32UI),Q===i.BYTE&&(ot=i.RGBA8I),Q===i.SHORT&&(ot=i.RGBA16I),Q===i.INT&&(ot=i.RGBA32I)),A===i.RGB&&(Q===i.UNSIGNED_SHORT&&Mt&&(ot=Mt.RGB16_EXT),Q===i.SHORT&&Mt&&(ot=Mt.RGB16_SNORM_EXT),Q===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ot=i.R11F_G11F_B10F)),A===i.RGBA){const at=mt?Cr:ee.getTransfer(ct);Q===i.FLOAT&&(ot=i.RGBA32F),Q===i.HALF_FLOAT&&(ot=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(ot=at===fe?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT&&Mt&&(ot=Mt.RGBA16_EXT),Q===i.SHORT&&Mt&&(ot=Mt.RGBA16_SNORM_EXT),Q===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function _(I,A){let Q;return I?A===null||A===zn||A===Qi?Q=i.DEPTH24_STENCIL8:A===bn?Q=i.DEPTH32F_STENCIL8:A===Bs&&(Q=i.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===zn||A===Qi?Q=i.DEPTH_COMPONENT24:A===bn?Q=i.DEPTH_COMPONENT32F:A===Bs&&(Q=i.DEPTH_COMPONENT16),Q}function y(I,A){return v(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ne&&I.minFilter!==Ye?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function w(I){const A=new WeakRef(I);n.get(I).__ref=A,p.add(A),x.register(I,A,A)}function T(I){const A=n.get(I).__ref;A!==void 0&&(p.delete(A),x.unregister(A))}function C(I){O(I.target)}function D(I){P(I.target)}function O(I){I.removeEventListener("dispose",C),T(I),F(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function P(I){I.removeEventListener("dispose",D),T(I),V(I)}function G(){for(const I of p){const A=I.deref();A!==void 0&&(A.isRenderTarget===!0?P(A):O(A))}p.clear(),u.clear()}function F(I){const A=n.get(I);if(A.__webglInit===void 0)return;const Q=I.source,ut=f.get(Q);if(ut){const ct=ut[A.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&k(I),Object.keys(ut).length===0&&f.delete(Q)}n.remove(I)}function k(I){const A=n.get(I);i.deleteTexture(A.__webglTexture);const Q=I.source,ut=f.get(Q);delete ut[A.__cacheKey],o.memory.textures--}function V(I){const A=n.get(I);A.__depthDisposeCallback&&A.__depthDisposeCallback();const Q=I.depthTexture;if(Q&&Q.renderTarget===I&&O(Q),I.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(A.__webglFramebuffer[ct]))for(let mt=0;mt<A.__webglFramebuffer[ct].length;mt++)i.deleteFramebuffer(A.__webglFramebuffer[ct][mt]);else i.deleteFramebuffer(A.__webglFramebuffer[ct]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[ct])}else{if(Array.isArray(A.__webglFramebuffer))for(let ct=0;ct<A.__webglFramebuffer.length;ct++)i.deleteFramebuffer(A.__webglFramebuffer[ct]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ct=0;ct<A.__webglColorRenderbuffer.length;ct++)A.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[ct]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ut=I.textures;for(let ct=0,mt=ut.length;ct<mt;ct++){const Mt=n.get(ut[ct]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(ut[ct])}n.remove(I)}let N=0;function L(){N=0}function U(){return N}function $(I){N=I}function it(){const I=N;return I>=s.maxTextures&&Bt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,I}function Y(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.mipmapsAutoUpdate),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function X(I,A){const Q=n.get(I);if(I.isVideoTexture&&Be(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Q.__version!==I.version){const ut=I.image;if(ut===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(Q,I,A);return}}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+A)}function K(I,A){const Q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){Ft(Q,I,A);return}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+A)}function tt(I,A){const Q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){Ft(Q,I,A);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+A)}function nt(I,A){const Q=n.get(I);if(I.version>0&&Q.__version!==I.version){oe(Q,I,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+A)}const ht={[zs]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[$o]:i.MIRRORED_REPEAT},Nt={[Ne]:i.NEAREST,[Yd]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[Jo]:i.LINEAR_MIPMAP_NEAREST,[yn]:i.LINEAR_MIPMAP_LINEAR},rt={[Jd]:i.NEVER,[yc]:i.ALWAYS,[Qd]:i.LESS,[Mc]:i.LEQUAL,[jd]:i.EQUAL,[Sc]:i.GEQUAL,[tf]:i.GREATER,[ef]:i.NOTEQUAL};function ft(I,A){if(A.type===bn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ye||A.magFilter===Jo||A.magFilter===Mr||A.magFilter===yn||A.minFilter===Ye||A.minFilter===Jo||A.minFilter===Mr||A.minFilter===yn)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ht[A.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ht[A.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ht[A.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Nt[A.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Nt[A.minFilter]),A.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,rt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ne||A.minFilter!==Mr&&A.minFilter!==yn||A.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Dt(I,A){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",C),w(A));const ut=A.source;let ct=f.get(ut);ct===void 0&&(ct={},f.set(ut,ct));const mt=Y(A);if(mt!==I.__cacheKey){ct[mt]===void 0&&(ct[mt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),ct[mt].usedTimes++;const Mt=ct[I.__cacheKey];Mt!==void 0&&(ct[I.__cacheKey].usedTimes--,Mt.usedTimes===0&&k(A)),I.__cacheKey=mt,I.__webglTexture=ct[mt].texture}return Q}function Tt(I,A,Q){return Math.floor(Math.floor(I/Q)/A)}function Vt(I,A,Q,ut){const mt=I.updateRanges;if(mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,Q,ut,A.data);else{mt.sort((B,lt)=>B.start-lt.start);let Mt=0;for(let B=1;B<mt.length;B++){const lt=mt[Mt],st=mt[B],_t=lt.start+lt.count,pt=Tt(st.start,A.width,4),gt=Tt(lt.start,A.width,4);st.start<=_t+1&&pt===gt&&Tt(st.start+st.count-1,A.width,4)===pt?lt.count=Math.max(lt.count,st.start+st.count-lt.start):(++Mt,mt[Mt]=st)}mt.length=Mt+1;const ot=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let B=0,lt=mt.length;B<lt;B++){const st=mt[B],_t=Math.floor(st.start/4),pt=Math.ceil(st.count/4),gt=_t%A.width,Ut=Math.floor(_t/A.width),Zt=pt,dt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ut),e.texSubImage2D(i.TEXTURE_2D,0,gt,Ut,Zt,dt,Q,ut,A.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ot),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function Ft(I,A,Q){let ut=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ut=i.TEXTURE_3D);const ct=Dt(I,A),mt=A.source;e.bindTexture(ut,I.__webglTexture,i.TEXTURE0+Q);const Mt=n.get(mt);if(mt.version!==Mt.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+Q),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const dt=ee.getPrimaries(ee.workingColorSpace),Ot=A.colorSpace===gi?null:ee.getPrimaries(A.colorSpace),Yt=A.colorSpace===gi||dt===Ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let at=M(A.image,!1,s.maxTextureSize);at=zt(A,at);const xt=r.convert(A.format,A.colorSpace),B=r.convert(A.type);let lt=E(A.internalFormat,xt,B,A.normalized,A.colorSpace,A.isVideoTexture);ft(ut,A);let st;const _t=A.mipmaps,pt=A.isVideoTexture!==!0,gt=Mt.__version===void 0||ct===!0,Ut=mt.dataReady,Zt=y(A,at);if(A.isDepthTexture)lt=_(A.format===pi,A.type),gt&&(pt?e.texStorage2D(i.TEXTURE_2D,1,lt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,lt,at.width,at.height,0,xt,B,null));else if(A.isDataTexture)if(_t.length>0){pt&&gt&&e.texStorage2D(i.TEXTURE_2D,Zt,lt,_t[0].width,_t[0].height);for(let dt=0,Ot=_t.length;dt<Ot;dt++)st=_t[dt],pt?Ut&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,st.width,st.height,xt,B,st.data):e.texImage2D(i.TEXTURE_2D,dt,lt,st.width,st.height,0,xt,B,st.data);A.generateMipmaps=!1}else pt?(gt&&e.texStorage2D(i.TEXTURE_2D,Zt,lt,at.width,at.height),Ut&&Vt(A,at,xt,B)):e.texImage2D(i.TEXTURE_2D,0,lt,at.width,at.height,0,xt,B,at.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){pt&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,lt,_t[0].width,_t[0].height,at.depth);for(let dt=0,Ot=_t.length;dt<Ot;dt++)if(st=_t[dt],A.format!==Bn)if(xt!==null)if(pt){if(Ut)if(A.layerUpdates.size>0){const Yt=Ph(st.width,st.height,A.format,A.type);for(const Et of A.layerUpdates){const pe=st.data.subarray(Et*Yt/st.data.BYTES_PER_ELEMENT,(Et+1)*Yt/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,Et,st.width,st.height,1,xt,pe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,st.width,st.height,at.depth,xt,st.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,lt,st.width,st.height,at.depth,0,st.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?Ut&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,st.width,st.height,at.depth,xt,B,st.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,lt,st.width,st.height,at.depth,0,xt,B,st.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{pt&&gt&&e.texStorage2D(i.TEXTURE_2D,Zt,lt,_t[0].width,_t[0].height);for(let dt=0,Ot=_t.length;dt<Ot;dt++)st=_t[dt],A.format!==Bn?xt!==null?pt?Ut&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,st.width,st.height,xt,st.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,lt,st.width,st.height,0,st.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?Ut&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,st.width,st.height,xt,B,st.data):e.texImage2D(i.TEXTURE_2D,dt,lt,st.width,st.height,0,xt,B,st.data)}else if(A.isDataArrayTexture)if(pt){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,lt,at.width,at.height,at.depth),Ut)if(A.layerUpdates.size>0){const dt=Ph(at.width,at.height,A.format,A.type);for(const Ot of A.layerUpdates){const Yt=at.data.subarray(Ot*dt/at.data.BYTES_PER_ELEMENT,(Ot+1)*dt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ot,at.width,at.height,1,xt,B,Yt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,xt,B,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,at.width,at.height,at.depth,0,xt,B,at.data);else if(A.isData3DTexture)pt?(gt&&e.texStorage3D(i.TEXTURE_3D,Zt,lt,at.width,at.height,at.depth),Ut&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,xt,B,at.data)):e.texImage3D(i.TEXTURE_3D,0,lt,at.width,at.height,at.depth,0,xt,B,at.data);else if(A.isFramebufferTexture){if(gt)if(pt)e.texStorage2D(i.TEXTURE_2D,Zt,lt,at.width,at.height);else{let dt=at.width,Ot=at.height;for(let Yt=0;Yt<Zt;Yt++)e.texImage2D(i.TEXTURE_2D,Yt,lt,dt,Ot,0,xt,B,null),dt>>=1,Ot>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const dt=i.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),at.parentNode!==dt){dt.appendChild(at),u.add(A),dt.onpaint=Ot=>{const Yt=Ot.changedElements;for(const Et of u)Yt.includes(Et.image)&&(Et.needsUpdate=!0)},dt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{const Yt=i.RGBA,Et=i.RGBA,pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Yt,Et,pe,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(_t.length>0){if(pt&&gt){const dt=Ht(_t[0]);e.texStorage2D(i.TEXTURE_2D,Zt,lt,dt.width,dt.height)}for(let dt=0,Ot=_t.length;dt<Ot;dt++)st=_t[dt],pt?Ut&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,xt,B,st):e.texImage2D(i.TEXTURE_2D,dt,lt,xt,B,st);A.generateMipmaps=!1}else if(pt){if(gt){const dt=Ht(at);e.texStorage2D(i.TEXTURE_2D,Zt,lt,dt.width,dt.height)}Ut&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,B,at)}else e.texImage2D(i.TEXTURE_2D,0,lt,xt,B,at);v(A)&&A.mipmapsAutoUpdate===!0&&S(ut),Mt.__version=mt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function oe(I,A,Q){if(A.image.length!==6)return;const ut=Dt(I,A),ct=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Q);const mt=n.get(ct);if(ct.version!==mt.__version||ut===!0){e.activeTexture(i.TEXTURE0+Q);const Mt=ee.getPrimaries(ee.workingColorSpace),ot=A.colorSpace===gi?null:ee.getPrimaries(A.colorSpace),at=A.colorSpace===gi||Mt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const xt=A.isCompressedTexture||A.image[0].isCompressedTexture,B=A.image[0]&&A.image[0].isDataTexture,lt=[];for(let Et=0;Et<6;Et++)!xt&&!B?lt[Et]=M(A.image[Et],!0,s.maxCubemapSize):lt[Et]=B?A.image[Et].image:A.image[Et],lt[Et]=zt(A,lt[Et]);const st=lt[0],_t=r.convert(A.format,A.colorSpace),pt=r.convert(A.type);let gt=E(A.internalFormat,_t,pt,A.normalized,A.colorSpace);const Ut=A.isVideoTexture!==!0,Zt=mt.__version===void 0||ut===!0,dt=ct.dataReady;let Ot=y(A,st);ft(i.TEXTURE_CUBE_MAP,A);let Yt;if(A.isDepthTexture){if(gt=_(A.format===pi,A.type),Zt)if(Ut)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,gt,st.width,st.height);else for(let Et=0;Et<6;Et++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,gt,st.width,st.height,0,_t,pt,null)}else if(xt){Ut&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,gt,st.width,st.height);for(let Et=0;Et<6;Et++){Yt=lt[Et].mipmaps;for(let pe=0;pe<Yt.length;pe++){const He=Yt[pe];A.format!==Bn?_t!==null?Ut?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe,0,0,He.width,He.height,_t,He.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe,gt,He.width,He.height,0,He.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe,0,0,He.width,He.height,_t,pt,He.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe,gt,He.width,He.height,0,_t,pt,He.data)}}}else{if(Yt=A.mipmaps,Ut&&Zt){Yt.length>0&&Ot++;const Et=Ht(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,gt,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(B){Ut?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,lt[Et].width,lt[Et].height,_t,pt,lt[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,gt,lt[Et].width,lt[Et].height,0,_t,pt,lt[Et].data);for(let pe=0;pe<Yt.length;pe++){const Li=Yt[pe].image[Et].image;Ut?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe+1,0,0,Li.width,Li.height,_t,pt,Li.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe+1,gt,Li.width,Li.height,0,_t,pt,Li.data)}}else{Ut?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,_t,pt,lt[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,gt,_t,pt,lt[Et]);for(let pe=0;pe<Yt.length;pe++){const He=Yt[pe];Ut?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe+1,0,0,_t,pt,He.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,pe+1,gt,_t,pt,He.image[Et])}}}v(A)&&A.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),mt.__version=ct.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Xt(I,A,Q,ut,ct,mt){const Mt=r.convert(Q.format,Q.colorSpace),ot=r.convert(Q.type),at=E(Q.internalFormat,Mt,ot,Q.normalized,Q.colorSpace),xt=n.get(A),B=n.get(Q);if(B.__renderTarget=A,!xt.__hasExternalTextures){const lt=Math.max(1,A.width>>mt),st=Math.max(1,A.height>>mt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,mt,at,lt,st,A.depth,0,Mt,ot,null):e.texImage2D(ct,mt,at,lt,st,0,Mt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),yt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,ct,B.__webglTexture,0,de(A)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,ct,B.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function we(I,A,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,I),A.depthBuffer){const ut=A.depthTexture,ct=ut&&ut.isDepthTexture?ut.type:null,mt=_(A.stencilBuffer,ct),Mt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;yt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(A),mt,A.width,A.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(A),mt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,I)}else{const ut=A.textures;for(let ct=0;ct<ut.length;ct++){const mt=ut[ct],Mt=r.convert(mt.format,mt.colorSpace),ot=r.convert(mt.type),at=E(mt.internalFormat,Mt,ot,mt.normalized,mt.colorSpace);yt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(A),at,A.width,A.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(A),at,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,at,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(I,A,Q){const ut=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ct=n.get(A.depthTexture);ct.__renderTarget=A;const mt=ut?A.depthTexture.image[0]:A.depthTexture.image;(!ct.__webglTexture||mt.width!==A.width||mt.height!==A.height)&&(mt.width=A.width,mt.height=A.height,A.depthTexture.needsUpdate=!0),ut?nt(A.depthTexture,0):X(A.depthTexture,0);const Mt=ct.__webglTexture,ot=de(A),at=ut?i.TEXTURE_CUBE_MAP_POSITIVE_X+Q:i.TEXTURE_2D,xt=A.depthTexture.format===pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===fi)yt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,at,Mt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,xt,at,Mt,0);else if(A.depthTexture.format===pi)yt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,at,Mt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,xt,at,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ge(I){const A=n.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const ut=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ut){const ct=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ut.removeEventListener("dispose",ct)};ut.addEventListener("dispose",ct),A.__depthDisposeCallback=ct}A.__boundDepthTexture=ut}if(I.depthTexture&&!A.__autoAllocateDepthBuffer)if(Q)for(let ut=0;ut<6;ut++)ce(A.__webglFramebuffer[ut],I,ut);else I.texture.mipmaps.length>0?ce(A.__webglFramebuffer[0],I,0):ce(A.__webglFramebuffer,I,0);else if(Q){A.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ut]),A.__webglDepthbuffer[ut]===void 0)A.__webglDepthbuffer[ut]=i.createRenderbuffer(),we(A.__webglDepthbuffer[ut],I,!1);else{const ct=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=A.__webglDepthbuffer[ut];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,mt)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),we(A.__webglDepthbuffer,I,!1);else{const ct=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(I,A,Q){const ut=n.get(I);A!==void 0&&Xt(ut.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&ge(I)}function ue(I){const A=I.texture,Q=n.get(I),ut=n.get(A);I.addEventListener("dispose",D),w(I);const ct=I.textures,mt=I.isWebGLCubeRenderTarget===!0,Mt=ct.length>1;if(Mt||(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=A.version,o.memory.textures++),mt){Q.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(A.mipmaps.length>0){Q.__webglFramebuffer[ot]=[];for(let at=0;at<A.mipmaps.length;at++)Q.__webglFramebuffer[ot][at]=i.createFramebuffer()}else Q.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ot=0;ot<A.mipmaps.length;ot++)Q.__webglFramebuffer[ot]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let ot=0,at=ct.length;ot<at;ot++){const xt=n.get(ct[ot]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&yt(I)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ot=0;ot<ct.length;ot++){const at=ct[ot];Q.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[ot]);const xt=r.convert(at.format,at.colorSpace),B=r.convert(at.type),lt=E(at.internalFormat,xt,B,at.normalized,at.colorSpace,I.isXRRenderTarget===!0),st=de(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,st,lt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),we(Q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),ft(i.TEXTURE_CUBE_MAP,A);for(let ot=0;ot<6;ot++)if(A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)Xt(Q.__webglFramebuffer[ot][at],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,at);else Xt(Q.__webglFramebuffer[ot],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);v(A)?S(i.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}else if(Mt){for(let ot=0,at=ct.length;ot<at;ot++){const xt=ct[ot],B=n.get(xt);let lt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(lt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,B.__webglTexture),ft(lt,xt),Xt(Q.__webglFramebuffer,I,xt,i.COLOR_ATTACHMENT0+ot,lt,0),v(xt)&&S(lt)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ot=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,ut.__webglTexture),ft(ot,A),A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)Xt(Q.__webglFramebuffer[at],I,A,i.COLOR_ATTACHMENT0,ot,at);else Xt(Q.__webglFramebuffer,I,A,i.COLOR_ATTACHMENT0,ot,0);v(A)?S(ot):A.mipmaps.length>0&&i.texParameteri(ot,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&ge(I)}function H(I){const A=I.textures;for(let Q=0,ut=A.length;Q<ut;Q++){const ct=A[Q];if(v(ct)&&ct.mipmapsAutoUpdate===!0){const mt=b(I),Mt=n.get(ct).__webglTexture;e.bindTexture(mt,Mt),S(mt),e.unbindTexture()}}}const xe=[];function $t(I){if(I.samples>0){if(yt(I)===!1){const A=I.textures,Q=I.width,ut=I.height;let ct=i.COLOR_BUFFER_BIT;const mt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(I),ot=A.length>1;if(ot)for(let xt=0;xt<A.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let xt=0;xt<A.length;xt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);const B=n.get(A[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,B,0)}i.blitFramebuffer(0,0,Q,ut,0,0,Q,ut,ct,i.NEAREST),l===!0&&(xe.length=0,xe.push(i.COLOR_ATTACHMENT0+xt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&xe.push(mt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let xt=0;xt<A.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);const B=n.get(A[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,B,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){const A=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function de(I){return Math.min(s.maxSamples,I.samples)}function yt(I){const A=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Be(I){const A=o.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function zt(I,A){const Q=I.colorSpace,ut=I.format,ct=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==Rr&&Q!==gi&&(ee.getTransfer(Q)===fe?(ut!==Bn||ct!==cn)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",Q)),A}function Ht(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=it,this.resetTextureUnits=L,this.getTextureUnits=U,this.setTextureUnits=$,this.setTexture2D=X,this.setTexture2DArray=K,this.setTexture3D=tt,this.setTextureCube=nt,this.rebindTextures=ae,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Xt,this.useMultisampledRTT=yt,this.dispose=G}function Fx(i,t){function e(n,s=gi){let r;const o=ee.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ta)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pc)return i.BYTE;if(n===mc)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===Qo)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===_c)return i.ALPHA;if(n===vc)return i.RGB;if(n===Bn)return i.RGBA;if(n===fi)return i.DEPTH_COMPONENT;if(n===pi)return i.DEPTH_STENCIL;if(n===Sr)return i.RED;if(n===ea)return i.RED_INTEGER;if(n===mi)return i.RG;if(n===na)return i.RG_INTEGER;if(n===ia)return i.RGBA_INTEGER;if(n===yr||n===br||n===Er||n===wr)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sa||n===ra||n===oa||n===aa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===la||n===ca||n===ha||n===ua||n===da||n===Tr||n===fa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===la||n===ca)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ha)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ua)return r.COMPRESSED_R11_EAC;if(n===da)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Tr)return r.COMPRESSED_RG11_EAC;if(n===fa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pa||n===ma||n===ga||n===xa||n===_a||n===va||n===Ma||n===Sa||n===ya||n===ba||n===Ea||n===wa||n===Ta||n===Aa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ma)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ga)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_a)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===va)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ma)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ya)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ba)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ea)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ta)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Aa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ra||n===Ca||n===Pa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ra)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ca)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===La||n===Da||n===Ar||n===Ia)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===La)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ar)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zx=`
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

}`;class Bx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new hh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new on({vertexShader:Ox,fragmentShader:zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gx extends xi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",m=new Bx,g={},M=e.getContextAttributes();let v=null,S=null;const b=[],E=[],_=new Lt;let y=null,w=null;const T=new In;T.viewport=new ve;const C=new In;C.viewport=new ve;const D=[T,C],O=new Pp;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let X=b[Y];return X===void 0&&(X=new Va,b[Y]=X),X.getTargetRaySpace()},this.getControllerGrip=function(Y){let X=b[Y];return X===void 0&&(X=new Va,b[Y]=X),X.getGripSpace()},this.getHand=function(Y){let X=b[Y];return X===void 0&&(X=new Va,b[Y]=X),X.getHandSpace()};function F(Y){const X=E.indexOf(Y.inputSource);if(X===-1)return;const K=b[X];K!==void 0&&(K.update(Y.inputSource,Y.frame,c||o),K.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",V);for(let Y=0;Y<b.length;Y++){const X=E[Y];X!==null&&(E[Y]=null,b[Y].disconnect(X))}P=null,G=null,m.reset();for(const Y in g)delete g[Y];if(t.setRenderTarget(v),f=null,d=null,u=null,s=null,S=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(_.width,_.height,!1),w!==null){const Y=w.camera;Y.fov=w.fov,Y.zoom=w.zoom,Y.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",k),s.addEventListener("inputsourceschange",V),M.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,tt=null,nt=null;M.depth&&(nt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=M.stencil?pi:fi,tt=M.stencil?Qi:zn);const ht={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ht),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Gn(d.textureWidth,d.textureHeight,{format:Bn,type:cn,depthTexture:new fs(d.textureWidth,d.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const K={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Gn(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(Y){for(let X=0;X<Y.removed.length;X++){const K=Y.removed[X],tt=E.indexOf(K);tt>=0&&(E[tt]=null,b[tt].disconnect(K))}for(let X=0;X<Y.added.length;X++){const K=Y.added[X];let tt=E.indexOf(K);if(tt===-1){for(let ht=0;ht<b.length;ht++)if(ht>=E.length){E.push(K),tt=ht;break}else if(E[ht]===null){E[ht]=K,tt=ht;break}if(tt===-1)break}const nt=b[tt];nt&&nt.connect(K)}}function N(Y,X){X===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(X.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let X=Y.near,K=Y.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(K=m.depthFar)),O.near=C.near=T.near=X,O.far=C.far=T.far=K,(P!==O.near||G!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),P=O.near,G=O.far),O.layers.mask=Y.layers.mask|6,T.layers.mask=O.layers.mask&-5,C.layers.mask=O.layers.mask&-3;const tt=Y.parent,nt=O.cameras;N(O,tt);for(let ht=0;ht<nt.length;ht++)N(nt[ht],tt);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&Y.isPerspectiveCamera&&(w={camera:Y,fov:Y.fov,zoom:Y.zoom}),L(Y,O,tt)};function L(Y,X,K){K===null?Y.matrix.copy(X.matrixWorld):(Y.matrix.copy(K.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(X.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(X.projectionMatrix),Y.projectionMatrixInverse.copy(X.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ws*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Y){return g[Y]};let U=null;function $(Y,X){if(h=X.getViewerPose(c||o),p=X,h!==null){const K=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let tt=!1;K.length!==O.cameras.length&&(O.cameras.length=0,tt=!0);for(let rt=0;rt<K.length;rt++){const ft=K[rt];let Dt=null;if(f!==null)Dt=f.getViewport(ft);else{const Vt=u.getViewSubImage(d,ft);Dt=Vt.viewport,rt===0&&(t.setRenderTargetTextures(S,Vt.colorTexture,Vt.depthStencilTexture),t.setRenderTarget(S))}let Tt=D[rt];Tt===void 0&&(Tt=new In,Tt.layers.enable(rt),Tt.viewport=new ve,D[rt]=Tt),Tt.matrix.fromArray(ft.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(ft.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),rt===0&&(O.matrix.copy(Tt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),tt===!0&&O.cameras.push(Tt)}const nt=s.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const rt=u.getDepthInformation(K[0]);rt&&rt.isValid&&rt.texture&&m.init(rt,s.renderState)}if(nt&&nt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let rt=0;rt<K.length;rt++){const ft=K[rt].camera;if(ft){let Dt=g[ft];Dt||(Dt=new hh,g[ft]=Dt);const Tt=u.getCameraImage(ft);Dt.sourceTexture=Tt}}}}for(let K=0;K<b.length;K++){const tt=E[K],nt=b[K];tt!==null&&nt!==void 0&&nt.update(tt,X,c||o)}U&&U(Y,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),p=null}const it=new Lh;it.setAnimationLoop($),this.setAnimationLoop=function(Y){U=Y},this.dispose=function(){}}}const kx=new ie,lu=new kt;lu.set(-1,0,0,0,1,0,0,0,1);function Hx(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,vh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,M,v,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,S)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,M,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Qe&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Qe&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const M=t.get(g),v=M.envMap,S=M.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(S)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(lu),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=v*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qe&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const M=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vx(i,t,e,n){let s={},r={};function o(M,v){const S=v.program;n.uniformBlockBinding(M,S,s[M.id])}function a(M,v){let S=s[M.id];S===void 0&&(p(M),S=l(M),s[M.id]=S,M.addEventListener("dispose",m));const b=v.program;n.updateUBOMapping(M,b);const E=t.render.frame;r[M.id]!==E&&(c(M),r[M.id]=E)}function l(M){const v=i.createBuffer(),S=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,S,b),i.bindBuffer(i.UNIFORM_BUFFER,null),v}function c(M){const v=s[M.id],S=M.uniforms,b=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,_=S.length;E<_;E++){const y=S[E];if(Array.isArray(y))for(let w=0,T=y.length;w<T;w++)h(y[w],E,w,b);else h(y,E,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,v,S,b){if(d(M,v,S,b)===!0){const E=M.__offset,_=M.value;if(Array.isArray(_)){let y=0;for(let w=0;w<_.length;w++){const T=_[w],C=x(T,!0);u(T,M.__data,y),y+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,M.__data)}}function u(M,v,S){typeof M=="number"||typeof M=="boolean"?v[S]=M:M.isMatrix3?(v[S]=M.elements[0],v[S+1]=M.elements[1],v[S+2]=M.elements[2],v[S+3]=0,v[S+4]=M.elements[3],v[S+5]=M.elements[4],v[S+6]=M.elements[5],v[S+7]=0,v[S+8]=M.elements[6],v[S+9]=M.elements[7],v[S+10]=M.elements[8],v[S+11]=0):ArrayBuffer.isView(M)?v.set(M.subarray(0,v.length-S),S):M.toArray(v,S)}function d(M,v,S,b){const E=M.value,_=v+"_"+S;if(Array.isArray(E)){b[_]===void 0&&(b[_]=[]);const y=b[_];let w=!1;for(let T=0;T<E.length;T++)f(E[T],y,T)===!0&&(w=!0);return w}return f(E,b,_)}function f(M,v,S){if(v[S]===void 0)return typeof M=="number"||typeof M=="boolean"?v[S]=M:ArrayBuffer.isView(M)?v[S]=M.slice():v[S]=M.clone(),!0;{const b=v[S];if(typeof M=="number"||typeof M=="boolean"){if(b!==M)return v[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(b.equals(M)===!1)return b.copy(M),!0}}return!1}function p(M){const v=M.uniforms;let S=0;const b=16;for(let _=0,y=v.length;_<y;_++){const w=Array.isArray(v[_])?v[_]:[v[_]];for(let T=0,C=w.length;T<C;T++){const D=w[T],O=Array.isArray(D.value)?D.value:[D.value],P=Array.isArray(v[_])||Array.isArray(D.value);let G=S;for(let k=0,V=O.length;k<V;k++){const N=O[k],L=x(N,P),U=S%b,$=U%L.boundary,it=U+$;S+=$,it!==0&&b-it<L.storage&&(S+=b-it),k===0&&(G=S),S+=L.storage}const F=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new F((S-G)/Float32Array.BYTES_PER_ELEMENT),D.__offset=G}}const E=S%b;return E>0&&(S+=b-E),M.__size=S,M.__cache={},this}function x(M,v){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",M),v===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(M){const v=M.target;v.removeEventListener("dispose",m),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(const M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:g}}const Wx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xn=null;function Xx(){return Xn===null&&(Xn=new $s(Wx,16,16,mi,En),Xn.name="DFG_LUT",Xn.minFilter=Ye,Xn.magFilter=Ye,Xn.wrapS=On,Xn.wrapT=On,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}class qx{constructor(t={}){const{canvas:e=rf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=cn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=f,m=new Set([ia,na,ea]),g=new Set([cn,zn,Bs,Qi,jo,ta]),M=new Uint32Array(4),v=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let b=null,E=null;const _=[],y=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let C=!1,D=null,O=null,P=null,G=null;this._outputColorSpace=Ue;let F=0,k=0,V=null,N=-1,L=null;const U=new ve,$=new ve;let it=null;const Y=new At(0);let X=0,K=e.width,tt=e.height,nt=1,ht=null,Nt=null;const rt=new ve(0,0,K,tt),ft=new ve(0,0,K,tt);let Dt=!1;const Tt=new js,Vt=new sl;let Ft=!1,oe=!1;const Xt=new ie,we=new q,ce=new ve,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function ue(){return V===null?nt:1}let H=n;function xe(R,W){return e.getContext(R,W)}let $t,de,yt,Be,zt,Ht,I,A,Q,ut,ct,mt,Mt,ot,at,xt,B,lt,st,_t,pt,gt,Ut;try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hi}`),e.addEventListener("webglcontextlost",Ot,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),H===null){const W="webgl2";if(H=xe(W,R),H===null)throw xe(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(R){throw e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),re("WebGLRenderer: "+R.message),R}function Zt(){$t=new Km(H),$t.init(),pt=new Fx(H,$t),de=new zm(H,$t,t,pt),yt=new Nx(H,$t),de.reversedDepthBuffer&&d&&yt.buffers.depth.setReversed(!0),O=H.createFramebuffer(),P=H.createFramebuffer(),G=H.createFramebuffer(),Be=new Qm(H),zt=new Mx,Ht=new Ux(H,$t,yt,zt,de,pt,Be),I=new Zm(T),A=new Np(H),gt=new Fm(H,A),Q=new $m(H,A,Be,gt),ut=new tg(H,Q,A,gt,Be),lt=new jm(H,de,Ht),at=new Bm(zt),ct=new vx(T,I,$t,de,gt,at),mt=new Hx(T,zt),Mt=new yx,ot=new Rx($t),B=new Um(T,I,yt,ut,p,l),xt=new Ix(T,ut,de),Ut=new Vx(H,Be,de,yt),st=new Om(H,$t,Be),_t=new Jm(H,$t,Be),Be.programs=ct.programs,T.capabilities=de,T.extensions=$t,T.properties=zt,T.renderLists=Mt,T.shadowMap=xt,T.state=yt,T.info=Be}x!==cn&&(w=new ng(x,e.width,e.height,a,s,r));const dt=new Gx(T,H);this.xr=dt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=$t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(R){R!==void 0&&(nt=R,this.setSize(K,tt,!1))},this.getSize=function(R){return R.set(K,tt)},this.setSize=function(R,W,et=!0){if(dt.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,tt=W,e.width=Math.floor(R*nt),e.height=Math.floor(W*nt),et===!0&&(e.style.width=R+"px",e.style.height=W+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(K*nt,tt*nt).floor()},this.setDrawingBufferSize=function(R,W,et){K=R,tt=W,nt=et,e.width=Math.floor(R*et),e.height=Math.floor(W*et),this.setViewport(0,0,R,W)},this.setEffects=function(R){if(x===cn){re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let W=0;W<R.length;W++)if(R[W].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(rt)},this.setViewport=function(R,W,et,J){R.isVector4?rt.set(R.x,R.y,R.z,R.w):rt.set(R,W,et,J),yt.viewport(U.copy(rt).multiplyScalar(ue()).round())},this.getScissor=function(R){return R.copy(ft)},this.setScissor=function(R,W,et,J){R.isVector4?ft.set(R.x,R.y,R.z,R.w):ft.set(R,W,et,J),yt.scissor($.copy(ft).multiplyScalar(ue()).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(R){yt.setScissorTest(Dt=R)},this.setOpaqueSort=function(R){ht=R},this.setTransparentSort=function(R){Nt=R},this.getClearColor=function(R){return R.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,et=!0){let J=0;if(R){let j=!1;if(V!==null){const St=V.texture.format;j=m.has(St)}if(j){const St=V.texture.type,Rt=g.has(St),vt=B.getClearColor(),wt=B.getClearAlpha(),It=vt.r,Wt=vt.g,jt=vt.b;Rt?(M[0]=It,M[1]=Wt,M[2]=jt,M[3]=wt,H.clearBufferuiv(H.COLOR,0,M)):(v[0]=It,v[1]=Wt,v[2]=jt,v[3]=wt,H.clearBufferiv(H.COLOR,0,v))}else J|=H.COLOR_BUFFER_BIT}W&&(J|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(J|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&H.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),D=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),B.dispose(),Mt.dispose(),ot.dispose(),Ht.dispose(),zt.dispose(),I.dispose(),ut.dispose(),Q.dispose(),gt.dispose(),Ut.dispose(),ct.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",pd),dt.removeEventListener("sessionend",md),qi.stop()};function Ot(R){R.preventDefault(),wc("WebGLRenderer: Context Lost."),C=!0}function Yt(){wc("WebGLRenderer: Context Restored."),C=!1;const R=Be.autoReset,W=xt.enabled,et=xt.autoUpdate,J=xt.needsUpdate,j=xt.type;Zt(),Be.autoReset=R,xt.enabled=W,xt.autoUpdate=et,xt.needsUpdate=J,xt.type=j}function Et(R){re("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){const W=R.target;W.removeEventListener("dispose",pe),He(W)}function He(R){Li(R),zt.remove(R)}function Li(R){const W=zt.get(R).programs;W!==void 0&&(W.forEach(function(et){ct.releaseProgram(et)}),R.isShaderMaterial&&ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,et,J,j,St){W===null&&(W=ge);const Rt=j.isMesh&&j.matrixWorld.determinantAffine()<0,vt=Vv(R,W,et,J,j);yt.setMaterial(J,Rt);let wt=et.index,It=1;if(J.wireframe===!0){if(wt=Q.getWireframeAttribute(et),wt===void 0)return;It=2}const Wt=et.drawRange,jt=et.attributes.position;let Ct=Wt.start*It,te=(Wt.start+Wt.count)*It;St!==null&&(Ct=Math.max(Ct,St.start*It),te=Math.min(te,(St.start+St.count)*It)),wt!==null?(Ct=Math.max(Ct,0),te=Math.min(te,wt.count)):jt!=null&&(Ct=Math.max(Ct,0),te=Math.min(te,jt.count));const De=te-Ct;if(De<0||De===1/0)return;gt.setup(j,J,vt,et,wt);let _e,me=st;if(wt!==null&&(_e=A.get(wt),me=_t,me.setIndex(_e)),j.isMesh)J.wireframe===!0?(yt.setLineWidth(J.wireframeLinewidth*ue()),me.setMode(H.LINES)):me.setMode(H.TRIANGLES);else if(j.isLine){let $e=J.linewidth;$e===void 0&&($e=1),yt.setLineWidth($e*ue()),j.isLineSegments?me.setMode(H.LINES):j.isLineLoop?me.setMode(H.LINE_LOOP):me.setMode(H.LINE_STRIP)}else j.isPoints?me.setMode(H.POINTS):j.isSprite&&me.setMode(H.TRIANGLES);if(j.isBatchedMesh)if($t.get("WEBGL_multi_draw"))me.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const $e=j._multiDrawStarts,Pt=j._multiDrawCounts,sn=j._multiDrawCount,he=wt?A.get(wt).bytesPerElement:1,Yi=zt.get(J).currentProgram.getUniforms();for(let Je=0;Je<sn;Je++)Yi.setValue(H,"_gl_DrawID",Je),me.render($e[Je]/he,Pt[Je])}else if(j.isInstancedMesh)me.renderInstances(Ct,De,j.count);else if(et.isInstancedBufferGeometry){const $e=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Pt=Math.min(et.instanceCount,$e);me.renderInstances(Ct,De,Pt)}else me.render(Ct,De)};function fd(R,W,et,J){D!==null&&R.isNodeMaterial&&D.setObject(J,R),Ft===!0&&at.setState(R,et,!1),R.transparent===!0&&R.side===Ie&&R.forceSinglePass===!1?(R.side=Qe,R.needsUpdate=!0,_r(R,W,J),R.side=di,R.needsUpdate=!0,_r(R,W,J),R.side=Ie):_r(R,W,J)}this.compile=function(R,W,et=null){et===null&&(et=R),D!==null&&D.renderStart(R,W,et),E=ot.get(et),E.init(W),y.push(E),et.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),R!==et&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),oe=this.localClippingEnabled,Ft=at.init(this.clippingPlanes,oe),Ft===!0&&at.setGlobalState(this.clippingPlanes,W),D!==null&&xt.render(E.state.shadowsArray,et,W);const J=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const St=j.material;if(St)if(Array.isArray(St))for(let Rt=0;Rt<St.length;Rt++){const vt=St[Rt];fd(vt,et,W,j),J.add(vt)}else fd(St,et,W,j),J.add(St)}),E=y.pop(),D!==null&&D.renderEnd(),J},this.compileAsync=function(R,W,et=null){const J=this.compile(R,W,et);return new Promise(j=>{function St(){if(J.forEach(function(Rt){const wt=zt.get(Rt).currentProgram;(wt===void 0||wt.isReady())&&J.delete(Rt)}),J.size===0){j(R);return}setTimeout(St,10)}$t.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let tc=null;function kv(R){tc&&tc(R)}function pd(){qi.stop()}function md(){qi.start()}const qi=new Lh;qi.setAnimationLoop(kv),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(R){tc=R,dt.setAnimationLoop(R),R===null?qi.stop():qi.start()},dt.addEventListener("sessionstart",pd),dt.addEventListener("sessionend",md),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(R,W);const et=dt.enabled===!0&&dt.isPresenting===!0,J=w!==null&&(V===null||et)&&w.begin(T,V);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(W),W=dt.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,W,V),E=ot.get(R,y.length),E.init(W),E.state.textureUnits=Ht.getTextureUnits(),y.push(E),Xt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?Vt.setFromArrayCamera(W):Tt.setFromProjectionMatrix(Xt,wn,W.reversedDepth),oe=this.localClippingEnabled,Ft=at.init(this.clippingPlanes,oe),b=Mt.get(R,_.length),b.init(),_.push(b),this.info.render.frame++,dt.enabled===!0&&dt.isPresenting===!0){const Rt=T.xr.getDepthSensingMesh();Rt!==null&&ec(Rt,W,-1/0,T.sortObjects)}ec(R,W,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(E.state.lightsArray),T.sortObjects===!0&&b.sort(ht,Nt),ae=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,ae&&B.addToRenderList(b,R),this.info.autoReset===!0&&this.info.reset(),Ft===!0&&at.beginShadows();const j=E.state.shadowsArray;if(xt.render(j,R,W),Ft===!0&&at.endShadows(),(J&&w.hasRenderPass())===!1){const Rt=b.opaque,vt=b.transmissive;if(E.setupLights(),W.isArrayCamera){const wt=W.cameras;if(vt.length>0)for(let It=0,Wt=wt.length;It<Wt;It++){const jt=wt[It];xd(Rt,vt,R,jt)}ae&&B.render(R);for(let It=0,Wt=wt.length;It<Wt;It++){const jt=wt[It];gd(b,R,jt,jt.viewport)}}else vt.length>0&&xd(Rt,vt,R,W),ae&&B.render(R),gd(b,R,W)}V!==null&&k===0&&(Ht.updateMultisampleRenderTarget(V),Ht.updateRenderTargetMipmap(V)),J&&w.end(T),R.isScene===!0&&R.onAfterRender(T,R,W),gt.resetDefaultState(),N=-1,L=null,y.pop(),y.length>0?(E=y[y.length-1],Ht.setTextureUnits(E.state.textureUnits),Ft===!0&&at.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,D!==null&&D.renderEnd()};function ec(R,W,et,J){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)E.pushLight(R),R.castShadow&&E.pushShadow(R);else if(R.isSprite){const Rt=W.isArrayCamera?Vt:Tt;if(!R.frustumCulled||R.intersectsFrustum(Rt)){J&&ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Xt);const vt=ut.update(R),wt=R.material;wt.visible&&b.push(R,vt,wt,et,ce.z,null,W)}}else if(R.isMesh||R.isLine||R.isPoints){const Rt=W.isArrayCamera?Vt:Tt;if(!R.frustumCulled||R.intersectsFrustum(Rt)){const vt=ut.update(R),wt=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ce.copy(R.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),ce.copy(vt.boundingSphere.center)),ce.applyMatrix4(R.matrixWorld).applyMatrix4(Xt)),Array.isArray(wt)){const It=vt.groups;for(let Wt=0,jt=It.length;Wt<jt;Wt++){const Ct=It[Wt],te=wt[Ct.materialIndex];te&&te.visible&&b.push(R,vt,te,et,ce.z,Ct,W)}}else wt.visible&&b.push(R,vt,wt,et,ce.z,null,W)}}}const St=R.children;for(let Rt=0,vt=St.length;Rt<vt;Rt++)ec(St[Rt],W,et,J)}function gd(R,W,et,J){const{opaque:j,transmissive:St,transparent:Rt}=R;E.setupLightsView(et),Ft===!0&&at.setGlobalState(T.clippingPlanes,et),J&&yt.viewport(U.copy(J)),j.length>0&&Oo(j,W,et),St.length>0&&Oo(St,W,et),Rt.length>0&&Oo(Rt,W,et),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function xd(R,W,et,J){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[J.id]===void 0){const Ct=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[J.id]=new Gn(1,1,{generateMipmaps:!0,type:Ct?En:cn,minFilter:yn,samples:Math.max(4,de.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}const St=E.state.transmissionRenderTarget[J.id],Rt=J.viewport||U;St.setSize(Rt.z*T.transmissionResolutionScale,Rt.w*T.transmissionResolutionScale);const vt=T.getRenderTarget(),wt=T.getActiveCubeFace(),It=T.getActiveMipmapLevel();T.setRenderTarget(St),T.getClearColor(Y),X=T.getClearAlpha(),X<1&&T.setClearColor(16777215,.5),T.clear(),ae&&B.render(et);const Wt=T.toneMapping;T.toneMapping=Kn;const jt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),E.setupLightsView(J),Ft===!0&&at.setGlobalState(T.clippingPlanes,J),Oo(R,et,J),Ht.updateMultisampleRenderTarget(St),Ht.updateRenderTargetMipmap(St),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let te=0,De=W.length;te<De;te++){const _e=W[te],{object:me,geometry:$e,material:Pt,group:sn}=_e;if(Pt.side===Ie&&me.layers.test(J.layers)){const he=Pt.side;Pt.side=Qe,Pt.needsUpdate=!0,_d(me,et,J,$e,Pt,sn),Pt.side=he,Pt.needsUpdate=!0,Ct=!0}}Ct===!0&&(Ht.updateMultisampleRenderTarget(St),Ht.updateRenderTargetMipmap(St))}T.setRenderTarget(vt,wt,It),T.setClearColor(Y,X),jt!==void 0&&(J.viewport=jt),T.toneMapping=Wt}function Oo(R,W,et){const J=W.isScene===!0?W.overrideMaterial:null;for(let j=0,St=R.length;j<St;j++){const Rt=R[j],{object:vt,geometry:wt,group:It}=Rt;let Wt=Rt.material;Wt.allowOverride===!0&&J!==null&&(Wt=J),vt.layers.test(et.layers)&&_d(vt,W,et,wt,Wt,It)}}function _d(R,W,et,J,j,St){D!==null&&j.isNodeMaterial&&D.setObject(R,j),R.onBeforeRender(T,W,et,J,j,St),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(T,W,et,J,R,St),j.transparent===!0&&j.side===Ie&&j.forceSinglePass===!1?(j.side=Qe,j.needsUpdate=!0,T.renderBufferDirect(et,W,J,j,R,St),j.side=di,j.needsUpdate=!0,T.renderBufferDirect(et,W,J,j,R,St),j.side=Ie):T.renderBufferDirect(et,W,J,j,R,St),R.onAfterRender(T,W,et,J,j,St)}function vd(R){let W=0;for(const et of R)et.texture!==null&&W++;return W}function _r(R,W,et){W.isScene!==!0&&(W=ge);const J=zt.get(R),j=E.state.lights,St=E.state.shadowsArray,Rt=j.state.version,vt=ct.getParameters(R,j.state,St,W,et,E.state.lightProbeGridArray),wt=ct.getProgramCacheKey(vt);let It=J.programs;J.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?W.environment:null,J.fog=W.fog;const Wt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;J.envMap=I.get(R.envMap||J.environment,Wt),J.envMapRotation=J.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,It===void 0&&(R.addEventListener("dispose",pe),It=new Map,J.programs=It,J.programVariants=new Map);let jt=It.get(wt);if(jt!==void 0){if(J.currentProgram===jt&&J.lightsStateVersion===Rt)return Sd(R,vt),jt}else vt.uniforms=ct.getUniforms(R),D!==null&&R.isNodeMaterial&&D.build(R,et,vt),R.onBeforeCompile(vt,T),jt=ct.acquireProgram(vt,wt),It.set(wt,jt),J.uniforms=vt.uniforms;const Ct=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ct.clippingPlanes=at.uniform),Sd(R,vt),J.needsLights=Xv(R),J.lightsStateVersion=Rt,J.needsLights&&(Ct.ambientLightColor.value=j.state.ambient,Ct.lightProbe.value=j.state.probe,Ct.sunLights.value=j.state.sun,Ct.sunLightShadows.value=j.state.sunShadow,Ct.directionalLights.value=j.state.directional,Ct.directionalLightShadows.value=j.state.directionalShadow,Ct.spotLights.value=j.state.spot,Ct.spotLightShadows.value=j.state.spotShadow,Ct.rectAreaLights.value=j.state.rectArea,Ct.ltc_1.value=j.state.rectAreaLTC1,Ct.ltc_2.value=j.state.rectAreaLTC2,Ct.pointLights.value=j.state.point,Ct.pointLightShadows.value=j.state.pointShadow,Ct.hemisphereLights.value=j.state.hemi,Ct.sunShadowMatrix.value=j.state.sunShadowMatrix,Ct.sunShadowCascade.value=j.state.sunShadowCascade,Ct.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ct.spotLightMatrix.value=j.state.spotLightMatrix,Ct.spotLightMap.value=j.state.spotLightMap,Ct.pointShadowMatrix.value=j.state.pointShadowMatrix),J.numLightProbeGrids=vd(E.state.lightProbeGridArray),J.currentProgram=jt,J.uniformsList=null,jt}function Hv(R,W,et,J,j){const St=zt.get(R),Rt=St.currentProgram.id+","+J+","+j;let vt=St.programVariants.get(Rt);return vt===void 0?(vt=_r(R,W,et),St.programVariants.set(Rt,vt)):(St.currentProgram=vt,St.uniformsList=null,St.outputColorSpace=J,St.toneMapping=j),vt}function Md(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=fo.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Sd(R,W){const et=zt.get(R);et.outputColorSpace=W.outputColorSpace,et.batching=W.batching,et.batchingColor=W.batchingColor,et.instancing=W.instancing,et.instancingColor=W.instancingColor,et.instancingMorph=W.instancingMorph,et.skinning=W.skinning,et.morphTargets=W.morphTargets,et.morphNormals=W.morphNormals,et.morphColors=W.morphColors,et.morphTargetsCount=W.morphTargetsCount,et.numClippingPlanes=W.numClippingPlanes,et.numIntersection=W.numClipIntersection,et.vertexAlphas=W.vertexAlphas,et.vertexTangents=W.vertexTangents,et.toneMapping=W.toneMapping}function Vv(R,W,et,J,j){W.isScene!==!0&&(W=ge),Ht.resetTextureUnits();const St=W.fog,Rt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?W.environment:null,vt=V===null?T.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ee.workingColorSpace,wt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,It=I.get(J.envMap||Rt,wt),Wt=J.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,jt=!!et.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ct=!!et.morphAttributes.position,te=!!et.morphAttributes.normal,De=!!et.morphAttributes.color;let _e=Kn;J.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(_e=T.toneMapping);const me=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,$e=me!==void 0?me.length:0,Pt=zt.get(J),sn=E.state.lights;if(Ft===!0&&(oe===!0||R!==L)){const be=R===L&&J.id===N;at.setState(J,R,be)}let he=!1,Yi=!1;J.version===Pt.__version?Pt.needsLights&&Pt.lightsStateVersion!==sn.state.version||j.isBatchedMesh&&Pt.batching===!1||!j.isBatchedMesh&&Pt.batching===!0||j.isBatchedMesh&&Pt.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Pt.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Pt.instancing===!1||!j.isInstancedMesh&&Pt.instancing===!0||j.isSkinnedMesh&&Pt.skinning===!1||!j.isSkinnedMesh&&Pt.skinning===!0||j.isInstancedMesh&&Pt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Pt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Pt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Pt.instancingMorph===!1&&j.morphTexture!==null||Pt.envMap!==It||J.fog===!0&&Pt.fog!==St||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==at.numPlanes||Pt.numIntersection!==at.numIntersection)||Pt.vertexAlphas!==Wt||Pt.vertexTangents!==jt||Pt.morphTargets!==Ct||Pt.morphNormals!==te||Pt.morphColors!==De||Pt.morphTargetsCount!==$e||Pt.numLightProbeGrids!==vd(E.state.lightProbeGridArray)?he=!0:(Pt.outputColorSpace!==vt||Pt.toneMapping!==_e)&&(Yi=!0):(he=!0,Pt.__version=J.version);let Je=Pt.currentProgram;(he===!0||Yi===!0)&&(Je=Yi===!0?Hv(J,W,j,vt,_e):_r(J,W,j),D&&J.isNodeMaterial&&D.onUpdateProgram(J,Je,Pt));let zo=!1,Di=!1,Zi=!1;const se=Je.getUniforms(),qe=Pt.uniforms;if(yt.useProgram(Je.program)&&(zo=!0,Di=!0,Zi=!0),J.id!==N&&(N=J.id,Di=!0),zo||L!==R){yt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),se.setValue(H,"projectionMatrix",R.projectionMatrix),se.setValue(H,"viewMatrix",R.matrixWorldInverse);const Ve=se.map.cameraPosition;Ve!==void 0&&Ve.setValue(H,we.setFromMatrixPosition(R.matrixWorld)),de.logarithmicDepthBuffer&&se.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&se.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),L!==R&&(L=R,Di=!0,Zi=!0)}if(Pt.needsLights&&(sn.state.sunShadowMap.length>0&&se.setValue(H,"sunShadowMap",sn.state.sunShadowMap,Ht),sn.state.directionalShadowMap.length>0&&se.setValue(H,"directionalShadowMap",sn.state.directionalShadowMap,Ht),sn.state.spotShadowMap.length>0&&se.setValue(H,"spotShadowMap",sn.state.spotShadowMap,Ht),sn.state.pointShadowMap.length>0&&se.setValue(H,"pointShadowMap",sn.state.pointShadowMap,Ht)),j.isSkinnedMesh){se.setOptional(H,j,"bindMatrix"),se.setOptional(H,j,"bindMatrixInverse");const be=j.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),se.setValue(H,"boneTexture",be.boneTexture,Ht))}j.isBatchedMesh&&(se.setOptional(H,j,"batchingTexture"),se.setValue(H,"batchingTexture",j._matricesTexture,Ht),se.setOptional(H,j,"batchingIdTexture"),se.setValue(H,"batchingIdTexture",j._indirectTexture,Ht),se.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&se.setValue(H,"batchingColorTexture",j._colorsTexture,Ht));const Fn=et.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&lt.update(j,et,Je),(Di||Pt.receiveShadow!==j.receiveShadow)&&(Pt.receiveShadow=j.receiveShadow,se.setValue(H,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&W.environment!==null&&(qe.envMapIntensity.value=W.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=Xx()),Di){if(se.setValue(H,"toneMappingExposure",T.toneMappingExposure),Pt.needsLights&&Wv(qe,Zi),St&&J.fog===!0&&mt.refreshFogUniforms(qe,St),mt.refreshMaterialUniforms(qe,J,nt,tt,E.state.transmissionRenderTarget[R.id]),Pt.needsLights&&Pt.numLightProbeGrids>0){const be=S;let Ve=0;for(const ci of E.state.lightProbeGridArray)ci.texture!==null&&(be.textures[Ve]=ci.texture,be.min[Ve]=ci.boundingBox.min,be.max[Ve]=ci.boundingBox.max,be.resolution[Ve]=ci.resolution,Ve++);for(const ci in be)be[ci].length=Ve;qe.probesSH.value=be.textures,qe.probesMin.value=be.min,qe.probesMax.value=be.max,qe.probesResolution.value=be.resolution}fo.upload(H,Md(Pt),qe,Ht)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(fo.upload(H,Md(Pt),qe,Ht),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&se.setValue(H,"center",j.center),se.setValue(H,"modelViewMatrix",j.modelViewMatrix),se.setValue(H,"normalMatrix",j.normalMatrix),se.setValue(H,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){const be=J.uniformsGroups;for(let Ve=0,ci=be.length;Ve<ci;Ve++){const bd=be[Ve];Ut.update(bd,Je),Ut.bind(bd,Je)}}return Je}function Wv(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.sunLights.needsUpdate=W,R.sunLightShadows.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Xv(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,W,et){const J=zt.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),zt.get(R.texture).__webglTexture=W,zt.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:et,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const et=zt.get(R);et.__webglFramebuffer=W,et.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,et=0){V=R,F=W,k=et;let J=null,j=!1,St=!1;if(R){const vt=zt.get(R);if(vt.__useDefaultFramebuffer!==void 0){yt.bindFramebuffer(H.FRAMEBUFFER,vt.__webglFramebuffer),U.copy(R.viewport),$.copy(R.scissor),it=R.scissorTest,yt.viewport(U),yt.scissor($),yt.setScissorTest(it),N=-1;return}else if(vt.__webglFramebuffer===void 0)Ht.setupRenderTarget(R);else if(vt.__hasExternalTextures)Ht.rebindTextures(R,zt.get(R.texture).__webglTexture,zt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Wt=R.depthTexture;if(vt.__boundDepthTexture!==Wt){if(Wt!==null&&zt.has(Wt)&&(R.width!==Wt.image.width||R.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(R)}}const wt=R.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(St=!0);const It=zt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(It[W])?J=It[W][et]:J=It[W],j=!0):R.samples>0&&Ht.useMultisampledRTT(R)===!1?J=zt.get(R).__webglMultisampledFramebuffer:Array.isArray(It)?J=It[et]:J=It,U.copy(R.viewport),$.copy(R.scissor),it=R.scissorTest}else U.copy(rt).multiplyScalar(nt).floor(),$.copy(ft).multiplyScalar(nt).floor(),it=Dt;if(et!==0&&(J=O),yt.bindFramebuffer(H.FRAMEBUFFER,J)&&yt.drawBuffers(R,J),yt.viewport(U),yt.scissor($),yt.setScissorTest(it),j){const vt=zt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,vt.__webglTexture,et)}else if(St){const vt=W;for(let wt=0;wt<R.textures.length;wt++){const It=zt.get(R.textures[wt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+wt,It.__webglTexture,et,vt)}}else if(R!==null&&et!==0){const vt=zt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,vt.__webglTexture,et)}N=-1};function yd(R){const W=zt.get(R);return(W.__readFormat!==R.format||W.__readType!==R.type)&&(W.__readFormat=R.format,W.__readType=R.type,W.__formatReadable=de.textureFormatReadable(R.format),W.__typeReadable=de.textureTypeReadable(R.type)),W}this.readRenderTargetPixels=function(R,W,et,J,j,St,Rt,vt=0){if(!(R&&R.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt],Array.isArray(wt)&&(wt=wt[0])),wt){yt.bindFramebuffer(H.FRAMEBUFFER,wt);try{const It=R.textures[vt],Wt=It.format,jt=It.type;R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+vt);const Ct=yd(It);if(Ct.__formatReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-J&&et>=0&&et<=R.height-j&&H.readPixels(W,et,J,j,pt.convert(Wt),pt.convert(jt),St)}finally{const It=V!==null?zt.get(V).__webglFramebuffer:null;yt.bindFramebuffer(H.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(R,W,et,J,j,St,Rt,vt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Rt!==void 0&&(wt=wt[Rt],Array.isArray(wt)&&(wt=wt[0])),wt)if(W>=0&&W<=R.width-J&&et>=0&&et<=R.height-j){yt.bindFramebuffer(H.FRAMEBUFFER,wt);const It=R.textures[vt],Wt=It.format,jt=It.type;R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+vt);const Ct=yd(It);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,te),H.bufferData(H.PIXEL_PACK_BUFFER,St.byteLength,H.STREAM_READ),H.readPixels(W,et,J,j,pt.convert(Wt),pt.convert(jt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);const De=V!==null?zt.get(V).__webglFramebuffer:null;yt.bindFramebuffer(H.FRAMEBUFFER,De);const _e=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await of(H,_e,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,te),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,St),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(te),H.deleteSync(_e),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,et=0){const J=Math.pow(2,-et),j=Math.floor(R.image.width*J),St=Math.floor(R.image.height*J),Rt=W!==null?W.x:0,vt=W!==null?W.y:0;Ht.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,et,0,0,Rt,vt,j,St),yt.unbindTexture()},this.copyTextureToTexture=function(R,W,et=null,J=null,j=0,St=0){let Rt,vt,wt,It,Wt,jt,Ct,te,De;const _e=R.isCompressedTexture?R.mipmaps[St]:R.image;if(et!==null)Rt=et.max.x-et.min.x,vt=et.max.y-et.min.y,wt=et.isBox3?et.max.z-et.min.z:1,It=et.min.x,Wt=et.min.y,jt=et.isBox3?et.min.z:0;else{const se=Math.pow(2,-j);Rt=Math.floor(_e.width*se),vt=Math.floor(_e.height*se),R.isDataArrayTexture?wt=_e.depth:R.isData3DTexture?wt=Math.floor(_e.depth*se):wt=1,It=0,Wt=0,jt=0}J!==null?(Ct=J.x,te=J.y,De=J.z):(Ct=0,te=0,De=0);const me=pt.convert(W.format),$e=pt.convert(W.type);let Pt;W.isData3DTexture?(Ht.setTexture3D(W,0),Pt=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Ht.setTexture2DArray(W,0),Pt=H.TEXTURE_2D_ARRAY):(Ht.setTexture2D(W,0),Pt=H.TEXTURE_2D),yt.activeTexture(H.TEXTURE0),yt.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),yt.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),yt.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const sn=yt.getParameter(H.UNPACK_ROW_LENGTH),he=yt.getParameter(H.UNPACK_IMAGE_HEIGHT),Yi=yt.getParameter(H.UNPACK_SKIP_PIXELS),Je=yt.getParameter(H.UNPACK_SKIP_ROWS),zo=yt.getParameter(H.UNPACK_SKIP_IMAGES);yt.pixelStorei(H.UNPACK_ROW_LENGTH,_e.width),yt.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_e.height),yt.pixelStorei(H.UNPACK_SKIP_PIXELS,It),yt.pixelStorei(H.UNPACK_SKIP_ROWS,Wt),yt.pixelStorei(H.UNPACK_SKIP_IMAGES,jt);const Di=R.isDataArrayTexture||R.isData3DTexture,Zi=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const se=zt.get(R),qe=zt.get(W),Fn=zt.get(se.__renderTarget),be=zt.get(qe.__renderTarget);yt.bindFramebuffer(H.READ_FRAMEBUFFER,Fn.__webglFramebuffer),yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ve=0;Ve<wt;Ve++)Di&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,zt.get(R).__webglTexture,j,jt+Ve),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,zt.get(W).__webglTexture,St,De+Ve)),H.blitFramebuffer(It,Wt,It+Rt,Wt+vt,Ct,te,Ct+Rt,te+vt,H.DEPTH_BUFFER_BIT,H.NEAREST);yt.bindFramebuffer(H.READ_FRAMEBUFFER,null),yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||zt.has(R)){const se=zt.get(R),qe=zt.get(W);yt.bindFramebuffer(H.READ_FRAMEBUFFER,P),yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,G);for(let Fn=0;Fn<wt;Fn++)Di?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,se.__webglTexture,j,jt+Fn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,se.__webglTexture,j),Zi?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.__webglTexture,St,De+Fn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,qe.__webglTexture,St),j!==0?H.blitFramebuffer(It,Wt,It+Rt,Wt+vt,Ct,te,Ct+Rt,te+vt,H.COLOR_BUFFER_BIT,H.NEAREST):Zi?H.copyTexSubImage3D(Pt,St,Ct,te,De+Fn,It,Wt,Rt,vt):H.copyTexSubImage2D(Pt,St,Ct,te,It,Wt,Rt,vt);yt.bindFramebuffer(H.READ_FRAMEBUFFER,null),yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Zi?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Pt,St,Ct,te,De,Rt,vt,wt,me,$e,_e.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(Pt,St,Ct,te,De,Rt,vt,wt,me,_e.data):H.texSubImage3D(Pt,St,Ct,te,De,Rt,vt,wt,me,$e,_e):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,St,Ct,te,Rt,vt,me,$e,_e.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,St,Ct,te,_e.width,_e.height,me,_e.data):H.texSubImage2D(H.TEXTURE_2D,St,Ct,te,Rt,vt,me,$e,_e);yt.pixelStorei(H.UNPACK_ROW_LENGTH,sn),yt.pixelStorei(H.UNPACK_IMAGE_HEIGHT,he),yt.pixelStorei(H.UNPACK_SKIP_PIXELS,Yi),yt.pixelStorei(H.UNPACK_SKIP_ROWS,Je),yt.pixelStorei(H.UNPACK_SKIP_IMAGES,zo),St===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&H.generateMipmap(Pt),yt.unbindTexture()},this.initRenderTarget=function(R){zt.get(R).__webglFramebuffer===void 0&&Ht.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ht.setTextureCube(R,0):R.isData3DTexture?Ht.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ht.setTexture2DArray(R,0):Ht.setTexture2D(R,0),yt.unbindTexture()},this.resetState=function(){F=0,k=0,V=null,yt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const cu={type:"change"},bl={type:"start"},hu={type:"end"},mo=new kr,uu=new kn,Yx=Math.cos(70*Qt.DEG2RAD),ze=new q,an=2*Math.PI,le={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},El=1e-6;class Zx extends Dp{constructor(t,e=null){super(t,e),this.state=le.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zn.ROTATE,MIDDLE:Zn.DOLLY,RIGHT:Zn.PAN},this.touches={ONE:ui.ROTATE,TWO:ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Tn,this._lastTargetPosition=new q,this._quat=new Tn().setFromUnitVectors(t.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ao,this._sphericalDelta=new ao,this._scale=1,this._panOffset=new q,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new q,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$x.bind(this),this._onPointerDown=Kx.bind(this),this._onPointerUp=Jx.bind(this),this._onContextMenu=s_.bind(this),this._onMouseWheel=t_.bind(this),this._onKeyDown=e_.bind(this),this._onTouchStart=n_.bind(this),this._onTouchMove=i_.bind(this),this._onMouseDown=Qx.bind(this),this._onMouseMove=jx.bind(this),this._interceptControlDown=r_.bind(this),this._interceptControlUp=o_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=le.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cu),this.update(),this.state=le.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;ze.copy(e).sub(this.target),ze.applyQuaternion(this._quat),this._spherical.setFromVector3(ze),this.autoRotate&&this.state===le.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ze.setFromSpherical(this._spherical),ze.applyQuaternion(this._quatInverse),e.copy(this.target).add(ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ze.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new q(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(mo.origin.copy(this.object.position),mo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(mo.direction))<Yx?this.object.lookAt(this.target):(uu.setFromNormalAndCoplanarPoint(this.object.up,this.target),mo.intersectPlane(uu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>El||8*(1-this._lastQuaternion.dot(this.object.quaternion))>El||this._lastTargetPosition.distanceToSquared(this.target)>El?(this.dispatchEvent(cu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?an/60*this.autoRotateSpeed*t:an/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ze.setFromMatrixColumn(e,0),ze.multiplyScalar(-t),this._panOffset.add(ze)}_panUp(t,e){this.screenSpacePanning===!0?ze.setFromMatrixColumn(e,1):(ze.setFromMatrixColumn(e,0),ze.crossVectors(this.object.up,ze)),ze.multiplyScalar(t),this._panOffset.add(ze)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ze.copy(s).sub(this.target);let r=ze.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Kx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function $x(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Jx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hu),this.state=le.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Qx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=le.DOLLY;break;case Zn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}break;case Zn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(bl)}function jx(i){switch(this.state){case le.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case le.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case le.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function t_(i){this.enabled===!1||this.enableZoom===!1||this.state!==le.NONE||(i.preventDefault(),this.dispatchEvent(bl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(hu))}function e_(i){this.enabled!==!1&&this._handleKeyDown(i)}function n_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ui.ROTATE:if(this.enableRotate===!1){this.state=le.NONE;break}this._handleTouchStartRotate(i),this.state=le.TOUCH_ROTATE;break;case ui.PAN:if(this.enablePan===!1){this.state=le.NONE;break}this._handleTouchStartPan(i),this.state=le.TOUCH_PAN;break;default:this.state=le.NONE}break;case 2:switch(this.touches.TWO){case ui.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=le.TOUCH_DOLLY_PAN;break;case ui.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=le.TOUCH_DOLLY_ROTATE;break;default:this.state=le.NONE}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(bl)}function i_(i){switch(this._trackPointer(i),this.state){case le.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case le.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case le.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case le.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=le.NONE}}function s_(i){this.enabled!==!1&&i.preventDefault()}function r_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function o_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const wl=new kn,go=new Lp,Ms=new Lt,Tl=new q;class a_ extends Zx{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Zn.PAN,MIDDLE:Zn.DOLLY,RIGHT:Zn.ROTATE},this.touches={ONE:ui.PAN,TWO:ui.DOLLY_ROTATE},this._panWorldStart=new q}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;wl.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();Ms.x=(t.clientX-n.left)/n.width*2-1,Ms.y=-((t.clientY-n.top)/n.height)*2+1,go.setFromCamera(Ms,this.object),go.ray.intersectPlane(wl,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();Ms.x=(t.clientX-n.left)/n.width*2-1,Ms.y=-((t.clientY-n.top)/n.height)*2+1,go.setFromCamera(Ms,this.object),go.ray.intersectPlane(wl,Tl)&&(Tl.sub(this._panWorldStart),this._panOffset.copy(Tl).negate(),this.update())}}const xo=new At;function z(i){return xo.set(i),[xo.r,xo.g,xo.b]}function Gt(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function lr(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function Pe(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class ne{constructor(){Z(this,"pos",[]);Z(this,"nor",[]);Z(this,"col",[]);Z(this,"glo",[]);Z(this,"ox",0);Z(this,"oy",0);Z(this,"oz",0);Z(this,"c",1);Z(this,"s",0)}get vertexCount(){return this.pos.length/3}gradientY(t,e,n,s,r){for(let o=t*3;o<this.pos.length;o+=3){const a=Qt.clamp((this.pos[o+1]-e)/(n-e),0,1);for(let l=0;l<3;l++)this.col[o+l]=s[l]+(r[l]-s[l])*a}}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,o,a,l,c,h,u=0){const d=this.wx(t,n),f=this.wz(t,n),p=this.oy+e,x=this.wx(s,o),m=this.wz(s,o),g=this.oy+r,M=this.wx(a,c),v=this.wz(a,c),S=this.oy+l,b=x-d,E=g-p,_=m-f,y=M-d,w=S-p,T=v-f;let C=E*T-_*w,D=_*y-b*T,O=b*w-E*y;const P=Math.hypot(C,D,O)||1;C/=P,D/=P,O/=P,this.pos.push(d,p,f,x,g,m,M,S,v),this.nor.push(C,D,O,C,D,O,C,D,O),this.col.push(h[0],h[1],h[2],h[0],h[1],h[2],h[0],h[1],h[2]),this.glo.push(u,u,u)}quad(t,e,n,s,r,o,a,l,c,h,u,d,f,p=0){this.tri(t,e,n,s,r,o,a,l,c,f,p),this.tri(t,e,n,a,l,c,h,u,d,f,p)}box(t,e,n,s,r,o,a,l=void 0,c=null,h=0){this.quad(t,e,o,s,e,o,s,r,o,t,r,o,a,h),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,a,h),this.quad(s,e,o,s,e,n,s,r,n,s,r,o,a,h),this.quad(t,e,n,t,e,o,t,r,o,t,r,n,a,h),l!==null&&this.quad(t,r,o,s,r,o,s,r,n,t,r,n,l??a,h),c&&this.quad(t,e,n,s,e,n,s,e,o,t,e,o,c,h)}cyl(t,e,n,s,r,o,a,l,c=null,h=0){const u=e+o;for(let d=0;d<a;d++){const f=d/a*Math.PI*2,p=(d+1)/a*Math.PI*2,x=Math.cos(f),m=Math.sin(f),g=Math.cos(p),M=Math.sin(p);r>1e-4?(this.quad(t+x*s,e,n+m*s,t+x*r,u,n+m*r,t+g*r,u,n+M*r,t+g*s,e,n+M*s,l,h),c&&this.tri(t,u,n,t+g*r,u,n+M*r,t+x*r,u,n+m*r,c,h)):this.tri(t+x*s,e,n+m*s,t,u,n,t+g*s,e,n+M*s,l,h)}}blob(t,e,n,s,r,o,a,l,c,h,u=0){const d=h??c;for(let f=0;f<l;f++){const p=f/l*Math.PI,x=(f+1)/l*Math.PI,m=Math.cos(p),g=Math.cos(x),M=Math.sin(p),v=Math.sin(x),S=lr(c,d,1-(f+.5)/l);for(let b=0;b<a;b++){const E=b/a*Math.PI*2,_=(b+1)/a*Math.PI*2,y=Math.cos(E),w=Math.sin(E),T=Math.cos(_),C=Math.sin(_),D=t+y*M*s,O=e+m*r,P=n+w*M*o,G=t+T*M*s,F=n+C*M*o,k=t+y*v*s,V=e+g*r,N=n+w*v*o,L=t+T*v*s,U=n+C*v*o;f>0&&this.tri(D,O,P,G,O,F,L,V,U,S,u),f<l-1&&this.tri(D,O,P,L,V,U,k,V,N,S,u)}}}walls(t,e,n,s,r=0){const o=t.length/2,a=cr(t)>0;for(let l=0;l<o;l++){const c=(l+1)%o,h=t[l*2],u=t[l*2+1],d=t[c*2],f=t[c*2+1];a?this.quad(d,e,f,h,e,u,h,n,u,d,n,f,s,r):this.quad(h,e,u,d,e,f,d,n,f,h,n,u,s,r)}}cap(t,e,n,s=0){const r=t.length/2,o=[];for(let l=0;l<r;l++)o.push(new Lt(t[l*2],t[l*2+1]));const a=io.triangulateShape(o,[]);for(const l of a){const c=o[l[0]],h=o[l[1]],u=o[l[2]];(h.x-c.x)*(u.y-c.y)-(h.y-c.y)*(u.x-c.x)>0?this.tri(c.x,e,c.y,u.x,e,u.y,h.x,e,h.y,n,s):this.tri(c.x,e,c.y,h.x,e,h.y,u.x,e,u.y,n,s)}}build(){const t=new Ae;return t.setAttribute("position",new Ee(new Float32Array(this.pos),3)),t.setAttribute("normal",new Ee(new Float32Array(this.nor),3)),t.setAttribute("color",new Ee(new Float32Array(this.col),3)),t.setAttribute("glow",new Ee(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function cr(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const _o={value:0};function Ss(i={}){const t=new Dn({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??Ie}),e=new At(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=_o,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>"inverloch-model",t}function vo(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=_o,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.82 * uNight;`)},i.customProgramCacheKey=()=>"inverloch-unlit",i}const l_=8192,si=256,c_=420,du=2048,fu=[-1,1],pu=`
uniform sampler2D uCloudMap;
uniform vec2 uCloudOffset;
uniform float uCloudCover;
uniform float uCloudFlash;
const float cloudHeight = ${c_.toFixed(1)};

float cloudDensity(vec2 position) {
  float density = texture2D(uCloudMap, position / ${l_.toFixed(1)} - uCloudOffset).r;
  float edge = mix(0.78, 0.29, uCloudCover);
  return smoothstep(edge, edge + 0.13, density) * smoothstep(0.0, 0.08, uCloudCover);
}
`,h_=`
uniform vec3 uCloudSunDir;
uniform float uCloudShadowStrength;

float cloudSunlight(vec3 position) {
  float layerDistance = cloudHeight - position.y;
  if (layerDistance <= 0.0 || uCloudShadowStrength <= 0.0 || uCloudCover <= 0.0) return 1.0;
  vec2 projection = position.xz + layerDistance * uCloudSunDir.xz / max(uCloudSunDir.y, 0.06);
  return 1.0 - uCloudShadowStrength * cloudDensity(projection) * smoothstep(0.0, 70.0, layerDistance);
}
`;function Mo(i,t,e){const n=Math.imul(i%e,374761393)^Math.imul(t%e,668265263)^Math.imul(e,1442695041),s=Math.imul(n^n>>>13,1274126177);return((s^s>>>16)>>>0)/4294967295}function Al(i,t,e){const n=Math.floor(i*e),s=Math.floor(t*e),r=i*e-n,o=t*e-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=Qt.lerp(Mo(n,s,e),Mo(n+1,s,e),a),h=Qt.lerp(Mo(n,s+1,e),Mo(n+1,s+1,e),a);return Qt.lerp(c,h,l)}function u_(){const i=new Uint8Array(si*si);for(let e=0;e<si;e++)for(let n=0;n<si;n++){const s=(n+.5)/si,r=(e+.5)/si,o=.67*Al(s,r,24)+.23*Al(s,r,48)+.1*Al(s,r,96);i[e*si+n]=Math.round(255*o)}const t=new $s(i,si,si,Sr);return t.wrapS=t.wrapT=zs,t.magFilter=Ye,t.minFilter=yn,t.generateMipmaps=!0,t.needsUpdate=!0,t}class d_{constructor(){Z(this,"uniforms",{uCloudMap:{value:u_()},uCloudOffset:{value:new Lt},uCloudCover:{value:.38},uCloudFlash:{value:0},uFlashCenter:{value:new Lt}})}update(t){const e=Qt.euclideanModulo(t,du)/du;this.uniforms.uCloudOffset.value.set(fu[0]*e,fu[1]*e)}setCover(t){this.uniforms.uCloudCover.value=Qt.clamp(t,0,1)}setFlash(t){this.uniforms.uCloudFlash.value=Qt.clamp(t,0,1)}dispose(){this.uniforms.uCloudMap.value.dispose()}}const ri={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},f_=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
  gl_Position = p.xyww;
}`,p_=`
${pu}
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
}`;class m_{constructor(t,e,n,s){Z(this,"sun",new Cp(16777215,3));Z(this,"hemi",new Tp(16777215,8947848,1));Z(this,"sky");Z(this,"horizon",{value:new At});Z(this,"sunDir",new q);Z(this,"cloudShadowStrength",{value:0});Z(this,"skyUniforms");Z(this,"from");Z(this,"to");Z(this,"t",1);Z(this,"mode","day");this.renderer=t,this.water=e,this.from=this.to=ri.day,this.skyUniforms={...s.uniforms,uZenith:{value:new At},uHorizon:this.horizon,uBelow:{value:new At},uSunDir:{value:new q},uSunColor:{value:new At},uSunGlow:{value:1},uNight:{value:0}},this.sky=new Jt(new dl(1,32,16),new on({uniforms:this.skyUniforms,vertexShader:f_,fragmentShader:p_,side:Qe,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,n>0&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n),this.sun.shadow.radius=1.5),this.apply(1)}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=ri[t],this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=Qt.clamp(e*.7,90,2400),s=this.sun.shadow,r=s.camera,o=n*2/s.mapSize.x,a=Math.round(t.x/o)*o,l=Math.round(t.z/o)*o,c=n*2.4+300;this.sun.target.position.set(a,0,l),this.sun.position.set(a,0,l).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=Qt.clamp(o*1.6,.06,1.2))}setSolar(t){const e=(t%1440+1440)%1440,n=6*60,s=20.5*60;let r,o;if(e>=n&&e<=s)o=(e-n)/(s-n),r=Math.sin(Math.PI*o)*70;else{const p=((e<n?e+1440:e)-s)/(1440-(s-n));o=p<.5?1:0,r=-Math.sin(Math.PI*p)*40}const a=Qt.degToRad(110*(1-2*o)),l=Qt.degToRad(Math.max(r,5)),c=[Math.sin(a)*Math.cos(l),Math.sin(l),-Math.cos(a)*Math.cos(l)];let h;r>=25?h=ri.day:r>=6?h=Rl(ri.golden,ri.day,(r-6)/19):r>=-6?h=Rl(ri.night,ri.golden,(r+6)/12):h=ri.night;const u=Qt.clamp((2-r)/6,0,1),d=ri.night.sunDir,f=[c[0]+(d[0]-c[0])*u,c[1]+(d[1]-c[1])*u,c[2]+(d[2]-c[2])*u];this.from=this.to={...h,sunDir:f},this.mode=r>=25?"day":r>=-6?"golden":"night",this.apply(1)}snapshot(){return Rl(this.from,this.to,g_(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.castShadow||this.sun.position.copy(this.sunDir),this.cloudShadowStrength.value=.64*(1-Qt.smoothstep(e.night,.25,.95)),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night;const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new At(e.shallow),.35),_o.value=e.night,this.renderer.toneMappingExposure=e.exposure}}function g_(i){return i*i*(3-2*i)}function Rl(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,o)=>new At(r).lerp(new At(o),e).getHex(),s=(r,o)=>r+(o-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}const qn=1.5;class mu{constructor(t,e,n,s,r,o,a,l){Z(this,"nx");Z(this,"nz");Z(this,"y");Z(this,"xMin");Z(this,"zMin");Z(this,"xMax");Z(this,"zMax");Z(this,"dx");Z(this,"dz");Z(this,"cellX");Z(this,"cellZ");if(this.raw=t,this.exposure=e,this.w=n,this.h=s,this.sizeX=r,this.sizeZ=o,this.cellX=r/n,this.cellZ=o/s,this.nx=Math.floor((n-1)/a)+1,this.nz=Math.floor((s-1)/a)+1,this.dx=this.cellX*a,this.dz=this.cellZ*a,this.xMin=-r/2+this.cellX/2,this.zMin=-o/2+this.cellZ/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=l??new Float32Array(this.nx*this.nz),!l)for(let c=0;c<this.nz;c++)for(let h=0;h<this.nx;h++)this.y[c*this.nx+h]=t[c*a*n+h*a]*qn}yAt(t,e){let n=(t-this.xMin)/this.dx,s=(e-this.zMin)/this.dz;n<0?n=0:n>this.nx-1.0001&&(n=this.nx-1.0001),s<0?s=0:s>this.nz-1.0001&&(s=this.nz-1.0001);const r=n|0,o=s|0,a=n-r,l=s-o,c=o*this.nx+r,h=this.y[c],u=this.y[c+1],d=this.y[c+this.nx],f=this.y[c+this.nx+1];return a+l<=1?h+(u-h)*a+(d-h)*l:f+(d-f)*(1-a)+(u-f)*(1-l)}bilinear(t,e,n){let s=(e+this.sizeX/2)/this.cellX-.5,r=(n+this.sizeZ/2)/this.cellZ-.5;s<0?s=0:s>this.w-1.0001&&(s=this.w-1.0001),r<0?r=0:r>this.h-1.0001&&(r=this.h-1.0001);const o=s|0,a=r|0,l=s-o,c=r-a,h=a*this.w+o;return(t[h]*(1-l)+t[h+1]*l)*(1-c)+(t[h+this.w]*(1-l)+t[h+this.w+1]*l)*c}metresAt(t,e){return this.bilinear(this.raw,t,e)}exposureAt(t,e){return this.bilinear(this.exposure,t,e)}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}}const So=128;function x_(i,t,e){const{nx:n,nz:s}=i,r=Math.min(So+1,n-t),o=Math.min(So+1,s-e),a=new Float32Array(r*o*3),l=new Float32Array(r*o*3),c=new Float32Array(r*o*2);for(let d=e;d<e+o;d++)for(let f=t;f<t+r;f++){const p=(d-e)*r+f-t,x=i.xMin+f*i.dx,m=i.zMin+d*i.dz;a[p*3]=x,a[p*3+1]=i.y[d*n+f],a[p*3+2]=m,c[p*2]=(x+i.sizeX/2)/i.sizeX,c[p*2+1]=1-(m+i.sizeZ/2)/i.sizeZ;const g=i.y[d*n+Math.max(f-1,0)],M=i.y[d*n+Math.min(f+1,n-1)],v=i.y[Math.max(d-1,0)*n+f],S=i.y[Math.min(d+1,s-1)*n+f],b=(M-g)/(2*i.dx),E=(S-v)/(2*i.dz),_=Math.hypot(b,1,E);l[p*3]=-b/_,l[p*3+1]=1/_,l[p*3+2]=-E/_}const h=new Uint16Array((r-1)*(o-1)*6);let u=0;for(let d=0;d<o-1;d++)for(let f=0;f<r-1;f++){const p=d*r+f,x=p+1,m=p+r,g=m+1;h[u++]=p,h[u++]=m,h[u++]=x,h[u++]=x,h[u++]=m,h[u++]=g}return{pos:a,nor:l,uv:c,idx:h}}function __(i){const t=[];for(let e=0;e<i.nz-1;e+=So)for(let n=0;n<i.nx-1;n+=So)t.push(x_(i,n,e));return t}const Cl=10,v_=5,ys=4,M_=3;function yo(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Int16Array(e.buffer,0,e.length>>1)}async function S_(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,o=0,a=0,l=0;const c=[];for(;n<t.length;){const x=e.getUint32(n),m=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(m==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),o=t[n+16],a=t[n+17],l=t[n+20];else if(m==="IDAT")c.push(t.subarray(n+8,n+8+x));else if(m==="IEND")break;n+=12+x}if(o!==8||a!==2&&a!==6||l)throw new Error("Unsupported terrain image format");const h=a===2?3:4,u=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),d=new Uint8Array(await new Response(u).arrayBuffer()),f=s*h,p=new Uint8Array(f*r);for(let x=0;x<r;x++){const m=d[x*(f+1)],g=x*(f+1)+1,M=x*f;for(let v=0;v<f;v++){const S=v>=h?p[M+v-h]:0,b=x>0?p[M-f+v]:0,E=v>=h&&x>0?p[M-f+v-h]:0;let _=d[g+v];if(m===1)_+=S;else if(m===2)_+=b;else if(m===3)_+=S+b>>1;else if(m===4){const y=Math.abs(b-E),w=Math.abs(S-E),T=Math.abs(S+b-2*E);_+=y<=w&&y<=T?S:w<=T?b:E}p[M+v]=_&255}}return{width:s,height:r,channels:h,data:p}}async function y_(i,t,e){const[n,s]=await Promise.all([fetch(i.town,{signal:e}).then(u=>{if(!u.ok)throw new Error("Could not load the town data");return u.json()}).then(u=>(t("Streets and buildings"),u)),fetch(i.height,{signal:e}).then(u=>{if(!u.ok)throw new Error("Could not load the terrain");return u.arrayBuffer()}).then(S_).then(u=>(t("Terrain"),u))]);if(e.aborted)throw e.reason;const{meta:r}=n,o=s.width*s.height,a=new Float32Array(o),l=new Float32Array(o),c=s.channels;for(let u=0;u<o;u++)a[u]=(s.data[u*c]<<8|s.data[u*c+1])/r.heightScale-r.heightOffset,l[u]=s.data[u*c+2]/255;const h=new mu(a,l,r.grid[0],r.grid[1],r.size[0],r.size[1],i.terrainStep);return{town:{...n,houses:yo(n.houses),cabins:yo(n.cabins),cars:yo(n.cars),trees:yo(n.trees)},heights:a,exposure:l,surface:h.y,terrainTiles:__(h)}}async function b_(i,t,e,n,s){const r=new Set,o=h=>{s.aborted||r.has(h)||(r.add(h),e(r.size/4,h))};e(0,"Fetching map data");const a={town:new URL(i.town,document.baseURI).href,height:new URL(i.height,document.baseURI).href,terrainStep:t},l=n.run({kind:"world",source:a},()=>y_(a,o,s),s,o),c=new wp().loadAsync(i.ground).then(h=>(o("Ground texture"),h));try{const[h,u]=await Promise.all([l,c]);if(s.aborted)throw s.reason;return u.colorSpace=Ue,u.anisotropy=8,u.generateMipmaps=!0,u.minFilter=yn,o("Building the model"),{...h,ground:u}}catch(h){throw c.then(u=>u.dispose(),()=>{}),h}}const hr=-1617.09,ur=414.46,Ei=2.6721,Re=-4.38,ln=1.66,en=-11.13,nn=-10.87,Nn=-1.98,dn=10.93,bo=2.72,Pl=4.16,wi=.24,E_=4.615,dr=[Re,dn,ln,dn,ln,nn,en,nn,en,Nn,Re,Nn],gu=Math.cos(Ei),xu=Math.sin(Ei),Gi=(i,t)=>hr+i*gu+t*xu,ki=(i,t)=>ur-i*xu+t*gu;function _u(i,t,e,n){const s=(i+e)/2,r=(t+n)/2;return[Gi(s,r),ki(s,r),e-i,n-t,Ei]}const Eo=[..._u(Re,nn,ln,dn),..._u(en,nn,Re,Nn)],bs=z(13222830),w_=z(10262404),Ti=z(14144967),Ai=z(6712936),vu=z(3884352),Mu=z(3887959),T_=z(8217937);function wo(i,t,e,n,s,r){for(let o=e+.32;o<n-.18;o+=.64){const a=o+.036,l=bo+.024,c=Pl+.024,h=Gt(Ai,.74);if(t){const[u,d]=s>r?[o,a]:[a,o];i.quad(s,l,d,s,l,u,r,c,u,r,c,d,h)}else{const[u,d]=s>r?[o,a]:[a,o];i.quad(u,l,s,d,l,s,d,c,r,u,c,r,h)}}}function A_(i){const t=Re-wi,e=ln+wi,n=en-wi,s=dn+wi,r=nn-wi,o=Nn+wi,a=(t+e)/2,l=(r+o)/2,c=bo,h=Pl;i.quad(e,c,s,e,c,r,a,h,r,a,h,s,Ai),i.quad(t,c,o,t,c,s,a,h,s,a,h,l,Gt(Ai,1.07)),i.tri(t,c,r,a,h,l,a,h,r,Gt(Ai,1.07)),i.quad(n,c,o,t,c,o,a,h,l,n,h,l,Gt(Ai,1.02)),i.quad(t,c,r,n,c,r,n,h,l,a,h,l,Gt(Ai,.92)),wo(i,!0,r,s,e,a),wo(i,!0,o,s,t,a),wo(i,!1,n,t,o,l),wo(i,!1,n,t,r,l);for(const[m,g,M,v,S,b]of[[t,c,s,a,h,s],[a,h,s,e,c,s],[e,c,r,a,h,r],[a,h,r,t,c,r],[n,c,r,n,h,l],[n,h,l,n,c,o]])i.quad(m,g-.16,M,v,S-.16,b,v,S,b,m,g,M,Ti);i.box(e-.09,c-.12,r,e+.035,c-.025,s,Ti),i.box(t-.035,c-.12,o,t+.09,c-.025,s,Ti),i.box(n,c-.12,o-.09,t,c-.025,o+.035,Ti),i.box(n,c-.12,r-.035,t,c-.025,r+.09,Ti),i.box(a-.075,h-.037,r,a+.075,h+.028,s,Gt(Ai,.78)),i.box(n,h-.037,l-.075,a,h+.028,l+.075,Gt(Ai,.78));const u=h-c,d=h-u*wi/((e-t)/2),f=h-u*wi/((o-r)/2),p=[Re,c,ln,c,ln,c+h-d,a,h,Re,c+h-d],x=(m,g)=>{const M=g?p:[Re,c+h-d,a,h,ln,c+h-d,ln,c,Re,c];for(let v=2;v<M.length/2;v++)i.tri(M[0],M[1],m,M[(v-1)*2],M[(v-1)*2+1],m,M[v*2],M[v*2+1],m,bs)};x(dn,!0),x(nn,!1),i.quad(en,c,nn,en,c,Nn,en,c+h-f,Nn,en,c+h-f,nn,bs),i.tri(en,c+h-f,nn,en,c+h-f,Nn,en,h,l,bs);for(let m=Re+.1;m<ln-.09;m+=.19){const g=h-Math.abs(m-a)*u/((e-t)/2)-.04;i.quad(m,c,dn+.02,m+.034,c,dn+.02,m+.034,g,dn+.02,m,g,dn+.02,Gt(bs,.75))}}function Ll(i,t,e,n,s,r,o=!1){for(let u=.24;u<r;u+=.17)i.quad(t,u,s+.014,e,u,s+.014,e,u+.019,s+.014,t,u+.019,s+.014,Gt(bs,.67));const a=t+n/2,l=Math.min(n*.29,1.17),c=a-l,h=a+l;i.box(c,.87,s,h,2.17,s+.085,vu);for(let u=0;u<3;u++){const d=(h-c-.14)/3,f=c+.07+u*d,p=f+d-.034,x=s+.087;i.quad(f,.94,x,p,.94,x,p,2.1,x,f,2.1,x,Gt(Mu,.78+u*.11),.3),i.tri(f,2.03,x+.002,p,1.59,x+.002,p,2.04,x+.002,Gt(Mu,1.14))}if(i.box(c-.045,.84,s,h+.045,.92,s+.15,Ti),i.box(c-.045,2.17,s,h+.045,2.245,s+.12,Ti),o){const u=e-1.42;i.box(u,.04,s,u+1.04,2.22,s+.09,vu),i.box(u+.065,.1,s+.087,u+.975,2.14,s+.115,T_),i.box(u+.77,.98,s+.11,u+.88,1.035,s+.16,Ti)}}function R_(i,t){const e=(f,p)=>t.yAt(Gi(f,p),ki(f,p)),n=[];for(let f=0;f<dr.length;f+=2)n.push(e(dr[f],dr[f+1]));const s=Math.max(...n)+.12,r=(ln-Re)*(dn-nn),o=(Re-en)*(Nn-nn),a=e((Re+ln)/2,(nn+dn)/2),l=e((en+Re)/2,(nn+Nn)/2),c=(r*a+o*l)/(r+o),h=Math.max(-.18,Math.min(.45,E_-(bo+Pl)/2-(s-c))),u=bo+h;i.frame(hr,s,ur,Ei),i.walls(dr,Math.min(...n)-s-.2,.13,w_),i.walls(dr,.13,u,bs),i.frame(hr,s+h,ur,Ei),A_(i),i.frame(hr,s,ur,Ei),Ll(i,Re,ln,ln-Re,dn,u),Ll(i,en,Re,4.2,Nn,u,!0);for(const f of[1.3,5.1,8.4])i.frame(Gi(Re,f),s,ki(Re,f),Ei-Math.PI/2),Ll(i,-1.32,1.32,2.64,0,u);const d=Pe(13);for(const[f,p]of[[-2.94,13.1],[.39,15.7],[-.65,21.4]])for(let x=0;x<5;x++){const m=f+(d()-.5)*.96,g=p+(d()-.5)*1.68,M=.15+d()*.23;i.frame(hr,e(m,g),ur,Ei),i.blob(m,M*.64,g,M*1.18,M,M*.84,7,4,z(5134386),z(x%3===0?9671258:7241808));for(let v=0;v<4;v++){const S=(d()-.5)*M,b=(d()-.5)*M;i.tri(m+S-.028,.02,g+b,m+S+.028,.02,g+b,m+S*3.2,M*2.4,g+b*2.7,z(8686162))}}return i.frame(),[[Re,nn,ln,dn],[en,nn,Re,Nn]].map(([f,p,x,m])=>[Gi(f,p),ki(f,p),Gi(x,p),ki(x,p),Gi(x,m),ki(x,m),Gi(f,m),ki(f,m)])}const Hi=[-1744.02,317.57,-1733.46,317.97,-1503.52,434.33,-1494.98,439.14,-1405.07,484.77],Dl=[{address:"24",centre:[-1701.99,305.1],roof:[-1694.2,305.76,-1703.13,297.4,-1709.77,304.44,-1700.85,312.79],height:5.56,kind:"house"},{address:"22",centre:[-1686.63,316.01],roof:[-1682.95,322.15,-1679.69,314.17,-1690.31,309.86,-1693.57,317.84],height:4.38,kind:"house"},{address:"22",centre:[-1663.52,295.86],roof:[-1662.91,301.89,-1659.09,291.69,-1664.12,289.82,-1667.95,300.03],height:5.18,kind:"secondary"},{address:"20",centre:[-1668.03,323.5],roof:[-1672.26,328.93,-1664.85,329.6,-1663.8,318.06,-1671.21,317.39],height:4,kind:"house"},{address:"18",centre:[-1645.6,335.06],roof:[-1641.76,340.86,-1638.92,333.05,-1649.45,329.25,-1652.29,337.07],height:4.81,kind:"house"},{address:"16",centre:[-1616,330.48],roof:[-1607.06,329.27,-1620.01,322.43,-1624.94,331.69,-1611.99,338.53],height:5.25,kind:"house"},{address:"14",centre:[-1610.04,351.3],roof:[-1606.74,360.93,-1603.37,352.49,-1608.82,350.34,-1605.21,341.3,-1610.26,339.3,-1617.23,356.78],height:4.26,kind:"house"},{address:"12",centre:[-1594.09,360.99],roof:[-1588.05,358.59,-1595.81,354.74,-1600.13,363.38,-1592.37,367.23],height:4.54,kind:"house"},{address:"10",centre:[-1572.46,363.34],roof:[-1570.76,376.84,-1561.58,355.11,-1574.17,349.83,-1583.35,371.57],height:4.45,kind:"house"},{address:"8",centre:[-1556.72,363.65],roof:[-1551.65,367.39,-1553.74,366.39,-1549.17,356.96,-1557.12,353.13,-1564.8,368.98,-1554.76,373.8],height:4.1,kind:"house"},{address:"8",centre:[-1563.95,372.88],roof:[-1559.23,371.36,-1565.87,368.32,-1568.67,374.4,-1562.03,377.44],height:4.12,kind:"secondary"},{address:"6",centre:[-1542.14,379.99],roof:[-1551.03,382.31,-1537.6,387.31,-1533.69,376.91,-1543.52,373.25,-1544.41,375.62,-1548.01,374.28],height:3.72,kind:"house"},{address:"4",centre:[-1529.85,390.46],roof:[-1531.13,388.55,-1536.03,388.7,-1535.85,394.36,-1524.65,394.02,-1524.91,385.65,-1531.21,385.85],height:6.74,kind:"house"},{address:"2",centre:[-1509.94,392.08],roof:[-1508.19,389.1,-1507.02,386.34,-1512.57,384,-1517.08,394.67,-1505.98,399.33,-1502.64,391.43],height:4.92,kind:"house",levels:2},{address:"2B",centre:[-1425.23,448.85],roof:[-1421.59,460.6,-1412.87,448.89,-1428.87,437.1,-1437.58,448.82],height:4.57,kind:"house"},{address:"29",centre:[-1729.27,353.36],roof:[-1736.21,359.75,-1727.91,362.68,-1722.32,346.97,-1730.63,344.05],height:4.65,kind:"house"},{address:"27",centre:[-1712.78,354.08],roof:[-1705.12,350.56,-1718.27,346.57,-1720.66,354.36,-1716.17,355.72,-1717.37,359.63,-1708.71,362.27],height:4.32,kind:"house"},{address:"25",centre:[-1703.96,376.46],roof:[-1701.67,386.2,-1696.78,369.48,-1706.25,366.73,-1711.14,383.45],height:4.21,kind:"house"},{address:"21",centre:[-1665.11,377.39],roof:[-1672.48,381.63,-1662.53,385.48,-1657.73,373.15,-1667.68,369.3],height:3.36,kind:"house"},{address:"17",centre:[-1639.76,395.04],roof:[-1633.19,393.09,-1642.49,388.78,-1646.33,397,-1637.04,401.31],height:4.86,kind:"house"},{address:"15",centre:[-1626.67,406.68],roof:[-1624.06,415.42,-1618.76,400.01,-1622.61,398.7,-1623.4,400.99,-1630,398.74,-1634.51,411.85],height:4.88,kind:"house",rearGlazing:!0},{address:"15",centre:[-1629.65,418.37],roof:[-1626.59,415.38,-1631.01,414.32,-1632.71,421.36,-1628.29,422.41],height:4.69,kind:"secondary"},{address:"7-9",centre:[-1574.55,442.33],roof:[-1566.73,436.97,-1577.92,433.49,-1582.37,447.69,-1571.18,451.17],height:5.03,kind:"house",rearGlazing:!0},{address:"5",centre:[-1559.58,439.93],roof:[-1565.44,444.23,-1557.3,446.82,-1553.71,435.63,-1561.86,433.04],height:5.7,kind:"house",levels:2,rearEntry:!0},{address:"1B",centre:[-1439.22,491.94],roof:[-1448.73,495.12,-1433.72,500.3,-1429.71,488.76,-1444.72,483.58],height:4.63,kind:"house"},{address:"1A",centre:[-1447.24,505.79],roof:[-1441.04,510.74,-1439.57,503.75,-1453.43,500.84,-1454.91,507.83],height:4.5,kind:"house"}],C_=[[-1671.48,279.2,-1694.63,323.85,-1732.03,304.61,-1732.02,304.47,-1677.56,276.05],[-1676.05,333.48,-1694.63,323.85,-1671.48,279.2,-1652.91,288.83],[-1634.33,298.46,-1657.48,343.11,-1676.05,333.48,-1652.91,288.83],[-1638.9,352.74,-1657.48,343.11,-1634.33,298.46,-1615.75,308.1],[-1620.32,362.39,-1638.9,352.74,-1615.75,308.1,-1597.17,317.73,-1608.51,339.6],[-1608.94,368.28,-1620.32,362.39,-1608.51,339.6,-1597.17,317.73,-1581.39,325.91,-1604.53,370.57],[-1598.06,347.27,-1598.91,344.58,-1608.51,339.6,-1597.17,317.73,-1581.39,325.91,-1604.53,370.57,-1608.94,368.28],[-1565.96,333.91,-1589.12,378.55,-1604.53,370.57,-1581.39,325.91],[-1573.84,386.48,-1589.12,378.55,-1565.96,333.91,-1550.68,341.84],[-1535.11,349.91,-1558.27,394.55,-1573.21,386.8,-1573.84,386.48,-1550.68,341.84,-1550.2,342.09],[-1519.68,357.91,-1542.85,402.55,-1558.27,394.55,-1535.11,349.91],[-1527.42,410.56,-1542.85,402.55,-1519.68,357.91,-1504.26,365.92],[-1478.83,379.11,-1510.34,419.41,-1527.42,410.56,-1504.26,365.92],[-1401.78,446.35,-1415.18,468.77,-1442.29,454.72,-1422.86,429.87],[-1714.99,335.99,-1725.28,382.16,-1741.12,373.95,-1735.19,328.74,-1732.09,327.12],[-1713.88,388.08,-1725.28,382.16,-1714.99,335.99,-1697.74,344.94],[-1675.21,356.62,-1696.27,397.21,-1713.88,388.08,-1697.74,344.94],[-1661.66,363.65,-1648.12,370.68,-1669.17,411.27,-1682.72,404.25],[-1648.12,370.68,-1634.59,377.7,-1655.65,418.29,-1669.17,411.27],[-1621.06,384.71,-1642.12,425.3,-1655.65,418.29,-1634.59,377.7],[-1628.59,432.32,-1642.12,425.3,-1621.06,384.71,-1607.54,391.73],[-1594.01,398.75,-1615.07,439.34,-1628.59,432.32,-1607.54,391.73],[-1588.01,453.37,-1601.54,446.36,-1580.48,405.76,-1566.96,412.78,-1553.43,419.79,-1574.48,460.39],[-1574.48,460.39,-1553.43,419.79,-1539.9,426.81,-1546.92,440.34,-1553.93,453.87,-1560.95,467.4],[-1424.09,490.19,-1427.85,502.63,-1464.32,491.61,-1457.62,469.43,-1425.92,485.87],[-1427.85,502.63,-1432.34,517.51,-1468.82,506.5,-1464.32,491.61]],Es=[["23",[-1683.5,379.63,11,25,2.6798],1,2,15789800,15000798,"","t"],["2 Ebor (outbuilding)",[-1540.1,440.05,7.53,5.25,2.5613],1,0,14078146,11313563,"","s"],["2 Ebor",[-1526.07,445.23,16.31,7.93,2.7377],1,0,13617336,9211790,"","o"]],P_=[...Dl.filter(i=>i.kind==="house").map(i=>i.centre),[Eo[0],Eo[1]],[Es[0][1][0],Es[0][1][1]],[Es[2][1][0],Es[2][1][1]]],Su=[-1592.2,410.8],L_=-1744,D_=-1495;function yu(i,t,[e,n,s,r]){const o=s-e,a=r-n,l=Math.max(0,Math.min(1,((i-e)*o+(t-n)*a)/(o*o+a*a||1)));return[e+o*l,n+a*l]}function Il(i,t,e){const[n,s]=yu(i,t,e);return Math.hypot(i-n,t-s)}function I_(i,t){let e=[Hi[0],Hi[1]];for(let n=0;n+3<Hi.length;n+=2){const s=yu(i,t,[Hi[n],Hi[n+1],Hi[n+2],Hi[n+3]]);Math.hypot(i-s[0],t-s[1])<Math.hypot(i-e[0],t-e[1])&&(e=s)}return e}function bu(i){const t=i.filter((n,s)=>s%2===0),e=i.filter((n,s)=>s%2===1);return{poly:i,minX:Math.min(...t),maxX:Math.max(...t),minZ:Math.min(...e),maxZ:Math.max(...e)}}function Eu({poly:i,minX:t,maxX:e,minZ:n,maxZ:s},r,o,a){if(r<t-a||r>e+a||o<n-a||o>s+a)return!1;let l=!1;for(let c=0,h=i.length-2;c<i.length;h=c,c+=2){const u=i[c],d=i[c+1],f=i[h],p=i[h+1];if(a>0&&Il(r,o,[u,d,f,p])<a)return!0;d>o!=p>o&&r<u+(f-u)*(o-d)/(p-d)&&(l=!l)}return l}const N_=C_.map(bu),U_=Dl.map(i=>bu(i.roof));function wu(i,t,e=0){return U_.some(n=>Eu(n,i,t,e))}const Tu=new WeakMap;function Au(i){const t=Tu.get(i);if(t)return t;const e=[],n=[];for(const[r,,,,o,a]of i.roads)if(!(r>4))for(let l=0;l+3<a.length;l+=2){const c=[a[l]/10,a[l+1]/10,a[l+2]/10,a[l+3]/10];if(Math.max(c[0],c[2])<-1864||Math.min(c[0],c[2])>-1375||Math.max(c[1],c[3])<197.6||Math.min(c[1],c[3])>559.1)continue;const h=(c[0]+c[2])/2;(i.names[o]==="Norman Road"&&h>=L_-1&&h<=D_+1?e:n).push(c)}const s=(r,o)=>{if(r<-1790||r>-1355||o<270||o>535)return!1;if(N_.some(l=>Eu(l,r,o,0)))return!0;if(Math.hypot(r-Su[0],o-Su[1])<24)return!1;const a=Math.min(...e.map(l=>Il(r,o,l)));return a<=45&&n.every(l=>a<Il(r,o,l))};return Tu.set(i,s),s}const F_=[Eo,...Es.map(i=>i[1])];function O_(i,t,e=1.5){if(wu(i,t,e))return!0;for(const n of F_)for(let s=0;s<n.length;s+=5){const[r,o,a,l,c]=n.slice(s,s+5),h=i-r,u=t-o;if(h*h+u*u>400)continue;const d=Math.cos(c),f=Math.sin(c),p=h*d-u*f,x=h*f+u*d;if(Math.abs(p)<a/2+e&&Math.abs(x)<l/2+e)return!0}return!1}const Ru=[{wall:13223346,roof:5660254,trim:15724260,boards:"horizontal"},{wall:10319973,roof:11908007,trim:15130317,boards:"horizontal"},{wall:12830396,roof:5330260,trim:15789797,boards:"vertical"},{wall:10849655,roof:7761508,trim:15656920,boards:"horizontal"},{wall:14866372,roof:5593957,trim:5988437,boards:"vertical"},{wall:11450284,roof:12040624,trim:15855074,boards:"horizontal"}],Cu=z(4278855),Pu=z(3427669),z_=z(7561807),B_=z(9538691),G_=z(11183254);function oi([i,t],[e,n,s]){return i*e+t*n+s}function Nl(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],r=i[(n+1)%i.length],o=oi(s,t),a=oi(r,t);if(o<=0&&e.push(s),o<0&&a>0||o>0&&a<0){const l=o/(o-a);e.push([s[0]+(r[0]-s[0])*l,s[1]+(r[1]-s[1])*l])}}return e}function Lu(i,t,e,n,s=0){for(let r=1;r+1<t.length;r++){const o=t[0],a=t[r],l=t[r+1],c=(a[0]-o[0])*(l[1]-o[1])-(a[1]-o[1])*(l[0]-o[0]);if(Math.abs(c)<5e-5)continue;const[h,u]=c>0?[l,a]:[a,l];i.tri(o[0],oi(o,e)+s,o[1],h[0],oi(h,e)+s,h[1],u[0],oi(u,e)+s,u[1],n)}}function k_(i,t){const e=i.map(([r,o])=>new Lt(r,o)),n=io.triangulateShape(e,[]),s=[];for(const[r,o]of t.entries())for(const a of n){let l=a.map(c=>i[c]);for(const c of t)c!==o&&(l=Nl(l,[o[0]-c[0],o[1]-c[1],o[2]-c[2]]));l.length>=3&&s.push({points:l,plane:o,slope:r})}return s}function H_(i,t,e){let n=0,s=0;for(const{points:[r,...o],plane:a}of i)for(let l=1;l<o.length;l++){const c=o[l-1],h=o[l],u=Math.abs((c[0]-r[0])*(h[1]-r[1])-(c[1]-r[1])*(h[0]-r[0])),d=(r[0]+c[0]+h[0])/3,f=(r[1]+c[1]+h[1])/3;n+=u,s+=u*(e+oi([d,f],a)-t(d,f))}return n>0?s/n:0}function V_(i,t,e,n,s){for(const{points:r,plane:o,slope:a}of t){const l=Gt(n,1-a*.042);if(Lu(i,r,o,l,e),!s)continue;const c=Math.abs(o[0])>Math.abs(o[1])?1:0,h=Math.min(...r.map(d=>d[c])),u=Math.max(...r.map(d=>d[c]));for(let d=Math.ceil(h/.74)*.74;d<u;d+=.74){const f=c===0?[-1,0,d]:[0,-1,d],p=c===0?[1,0,-d-.035]:[0,1,-d-.035];Lu(i,Nl(Nl(r,f),p),o,Gt(l,.76),e+.021)}}}function W_(i,t,e,n,s,r){i.box(t,n,.015,e,s,.11,r),i.box(t+.045,n+.045,.09,e-.045,s-.045,.145,Cu);const o=(t+e)/2;for(const[a,l,c]of[[t+.092,o-.025,1],[o+.025,e-.092,.79]]){const h=n+.09,u=s-.09;i.quad(a,h,.148,l,h,.148,l,u,.148,a,u,.148,Gt(Pu,c),.28),i.tri(a,u-.035,.15,l,u-.4,.15,l,u-.035,.15,Gt(Pu,c*1.2))}i.box(t-.06,n-.045,.01,e+.06,n+.02,.2,r)}function X_(i,t){const a=l=>[t(i-.65,l),t(i,l),t(i+.65,l)];for(let l=1;l<=3;l++){const c=.4+(l-1)*.28,h=Math.max(0,.05-Math.min(...a(c)))/l;if(h>.18)continue;const u=[];for(let d=0;d<l;d++){const f=d===0?.01:.4+(d-1)*.28,p=.4+d*.28,x=.05-h*d,m=[...a(f),...a((f+p)/2),...a(p)],g=Math.min(...m);if(Math.max(...m)>x+.015||x-g>.54)break;u.push({back:f,front:p,top:x,bottom:g-.06})}if(u.length===l)return u}}function q_(i,t,e,n,s,r,o,a,l,c){if(t<1.5)return;if(a){const d=Gt(s,.72);if(o==="vertical")for(let f=.19;f<t-.08;f+=.23)i.quad(f,.17,.017,f+.023,.17,.017,f+.023,e-.1,.017,f,e-.1,.017,d);else for(let f=.26;f<e-.05;f+=.18)i.quad(.035,f,.017,t-.035,f,.017,t-.035,f+.018,.017,.035,f+.018,.017,d);i.box(0,-.02,.005,.1,e-.08,.072,r),i.box(t-.1,-.02,.005,t,e-.08,.072,r)}const h=Math.max(1,Math.min(4,Math.floor(t/2.75))),u=c&&t>2.65?X_(t*(h-.5)/h,c):void 0;for(let d=0;d<n;d++)for(let f=0;f<h;f++){const p=t*(f+.5)/h,x=2.65*d;if(u&&d===0&&f===h-1){i.box(p-.55,.02,.015,p+.55,2.18,.14,r),i.box(p-.46,.05,.13,p+.46,2.1,.17,z_),i.box(p+.27,.97,.16,p+.38,1.03,.208,Cu);for(const m of u)i.box(p-.65,m.bottom,m.back,p+.65,m.top,m.front,G_);i.box(p-.68,2.21,0,p+.68,2.29,.48,r)}else{const m=l?Math.min(1.45,t/h*.42):Math.min(.89,t/h*.3);W_(i,p-m,p+m,x+(l?.34:.86),Math.min(e-.18,x+2.1),r)}}}function Y_(i,t,e,n,s,r){const o=[];for(let rt=0;rt<e.roof.length;rt+=2)o.push([e.roof[rt],e.roof[rt+1]]);const a=e.centre[0],l=e.centre[1],c=Math.round(a*337+l*191)>>>0,h=Pe(c),u=Ru[Math.floor(h()*Ru.length)],d=z(u.wall),f=z(u.trim),p=z(u.roof),x=e.kind==="house",m=o.map(([rt,ft])=>t.yAt(rt,ft)),g=Math.max(t.yAt(a,l),...m)+.08,M=cr(n)>0,v=o.map((rt,ft)=>{const Dt=(ft+1)%o.length,Tt=M?Dt:ft,Vt=M?ft:Dt,Ft=n[Tt*2],oe=n[Tt*2+1],Xt=n[Vt*2]-Ft,we=n[Vt*2+1]-oe,ce=Math.hypot(Xt,we),ge=Math.atan2(-we,Xt),ae=s-(Ft+Xt/2),ue=r-(oe+we/2),H=(ae*Math.sin(ge)+ue*Math.cos(ge))/Math.max(1,Math.hypot(ae,ue));return{x:Ft,z:oe,dx:Xt,dz:we,heading:ge,length:ce,facing:H,i:ft}}),S=v.reduce((rt,ft)=>{const Dt=Tt=>Tt.facing*Math.min(5,Tt.length);return Dt(ft)>Dt(rt)?ft:rt}),E=v.reduce((rt,ft)=>ft.length>rt.length?ft:rt).heading,_=Math.cos(E),y=Math.sin(E),w=o.map(([rt,ft])=>[(rt-a)*_-(ft-l)*y,(rt-a)*y+(ft-l)*_]),T=Math.min(...w.map(rt=>rt[1])),C=Math.max(...w.map(rt=>rt[1])),D=Math.min(...w.map(rt=>rt[0])),O=Math.max(...w.map(rt=>rt[0])),P=Math.max(1,Math.min(O-D,C-T)),G=x?.78+h()*.75:.38,F=G*2/P,k=[[0,F,-F*T],[0,-F,F*C]],V=h(),N=!x||V<.22?[[0,G/(C-T||1),-G*T/(C-T||1)]]:V<.67?k:[...k,[F,0,-F*D],[-F,0,F*O]],L=k_(w,N),U=H_(L,(rt,ft)=>t.yAt(a+rt*_+ft*y,l-rt*y+ft*_),g),$=e.height===null?x?2.72:2.38:e.height-U-.16,it=e.levels??(x&&$>=4.55?2:1),K=Math.max(x?it===2?4.6:2.45:2.2,Math.min(x?it===2?5.9:4.45:4.3,$)),tt=K+.16;i.frame(0,g,0),i.walls(n,Math.min(...m)-g-.28,.13,B_),i.walls(n,.13,K,d),i.frame(a,g,l,E),V_(i,L,tt,p,x);const nt=rt=>tt+Math.min(...N.map(ft=>oi(rt,ft))),ht=(rt,ft)=>[(rt-a)*_-(ft-l)*y,(rt-a)*y+(ft-l)*_];for(const rt of v){if(rt.length<.06)continue;const{x:ft,z:Dt,dx:Tt,dz:Vt,length:Ft,heading:oe}=rt,Xt=ht(ft,Dt),we=ht(ft+Tt,Dt+Vt),ce=N.map(H=>oi(Xt,H)),ge=N.map(H=>oi(we,H)),ae=[0,1];for(let H=0;H<N.length;H++)for(let xe=H+1;xe<N.length;xe++){const $t=ce[H]-ce[xe],de=ge[H]-ge[xe];$t*de<0&&ae.push($t/($t-de))}ae.sort((H,xe)=>H-xe),i.frame(ft,g,Dt,oe);const ue=H=>tt+Math.min(...N.map((xe,$t)=>ce[$t]+(ge[$t]-ce[$t])*H));for(let H=1;H<ae.length;H++){const xe=ae[H-1],$t=ae[H];i.quad(xe*Ft,K-.006,0,$t*Ft,K-.006,0,$t*Ft,ue($t),0,xe*Ft,ue(xe),0,d)}if(x&&(rt.facing>.25||rt.length>4.5)){const H=rt.i===S.i&&!e.rearEntry?($t,de)=>t.yAt(i.wx($t,de),i.wz($t,de))-g:void 0,xe=!!e.rearGlazing&&rt.facing<-.65;q_(i,Ft,K,it,d,f,u.boards,rt.facing>.2,xe,H)}}i.frame(a,g,l,E);const Nt=cr(e.roof)<0;for(let rt=0;rt<w.length;rt++){const ft=(rt+1)%w.length,Dt=w[Nt?rt:ft],Tt=w[Nt?ft:rt],Vt=nt(Dt),Ft=nt(Tt);i.quad(Dt[0],Vt-.145,Dt[1],Tt[0],Ft-.145,Tt[1],Tt[0],Ft,Tt[1],Dt[0],Vt,Dt[1],f)}i.frame()}const To=[15921126,15261640,13619920,11120043,12110550,11845800,14272936,5988452,11036494,14205088,15327150,16448250].map(z),Ri=[15000277,12435386,8948618,4934726,3487290,6957594,8160360,3555666,11888447,11644323].map(z),We=z(3163994),fr=[7031348,3098712,9056042,15658730,4151878].map(z),ws=z(9138002),fn=z(16053230),Ao=z(12171184),Ro=z(1846090),Du=[15327951,3099196,2504783,8007210,3816770,13214282,5209226].map(z);function Ul(i,t,e,n,s,r){const o=Gt(r,.9);if(t>=e){const a=t-e;i.quad(-t,n,e,t,n,e,a,n+s,0,-a,n+s,0,r),i.quad(t,n,-e,-t,n,-e,-a,n+s,0,a,n+s,0,r),i.tri(t,n,e,t,n,-e,a,n+s,0,o),i.tri(-t,n,-e,-t,n,e,-a,n+s,0,o)}else{const a=e-t;i.quad(t,n,e,t,n,-e,0,n+s,-a,0,n+s,a,r),i.quad(-t,n,-e,-t,n,e,0,n+s,a,0,n+s,-a,r),i.tri(-t,n,e,t,n,e,0,n+s,a,o),i.tri(t,n,-e,-t,n,-e,0,n+s,-a,o)}}function Vi(i,t,e,n,s,r,o,a){const l=t/2,c=e/2;if(t>=e){const u=c*s;return i.quad(-l-r,n-r*s,c+r,l+r,n-r*s,c+r,l+r,n+u,0,-l-r,n+u,0,o),i.quad(l+r,n-r*s,-c-r,-l-r,n-r*s,-c-r,-l-r,n+u,0,l+r,n+u,0,o),i.tri(l,n,c,l,n,-c,l,n+u,0,a),i.tri(-l,n,-c,-l,n,c,-l,n+u,0,a),u}const h=l*s;return i.quad(l+r,n-r*s,c+r,l+r,n-r*s,-c-r,0,n+h,-c-r,0,n+h,c+r,o),i.quad(-l-r,n-r*s,-c-r,-l-r,n-r*s,c+r,0,n+h,c+r,0,n+h,-c-r,o),i.tri(-l,n,c,l,n,c,0,n+h,c,a),i.tri(l,n,-c,-l,n,-c,0,n+h,-c,a),h}function pr(i,t,e,n,s,r,o,a,l){const c=t/2,h=e/2,u=n+s,d=n+r,f=(u-d)/e;i.quad(-c-o,u+o*f,h+o,c+o,u+o*f,h+o,c+o,d-o*f,-h-o,-c-o,d-o*f,-h-o,a),i.quad(-c,n,h,c,n,h,c,u,h,-c,u,h,l),i.quad(c,n,h,c,n,-h,c,d,-h,c,u,h,l),i.quad(-c,n,-h,-c,n,h,-c,u,h,-c,d,-h,l),i.quad(c,n,-h,-c,n,-h,-c,d,-h,c,d,-h,l)}const xn=.05;function _n(i,t,e,n,s,r,o,a=0){const l=t/2+xn;i.quad(e,s,l,n,s,l,n,r,l,e,r,l,o,a)}function Iu(i,t,e,n,s,r,o,a=0){const l=-t/2-xn;i.quad(n,s,l,e,s,l,e,r,l,n,r,l,o,a)}function Fl(i,t,e,n,s,r,o,a=0){const l=t/2+xn;i.quad(l,s,n,l,s,e,l,r,e,l,r,n,o,a)}function Ol(i,t,e,n,s,r,o,a=0){const l=-t/2-xn;i.quad(l,s,e,l,s,n,l,r,n,l,r,e,o,a)}function Co(i,t,e,n){let s=1/0,r=-1/0;for(const[o,a]of[[-e,-n],[e,-n],[e,n],[-e,n],[0,0]]){const l=i.yAt(t.wx(o,a),t.wz(o,a));l<s&&(s=l),l>r&&(r=l)}return{lo:s,hi:r}}function Z_(i,t,e,n,s,r,o,a,l,c,h,u){i.frame(e,0,n,o);const d=Co(t,i,s/2,r/2),f=d.hi+.18;i.frame(e,f,n,o);const p=To[c%To.length],x=Ri[h%Ri.length],m=a===2?5.5:2.85,g=s/2,M=r/2,v=Gt(p,.7);i.box(-g,d.lo-f-.3,-M,g,0,M,v,null),i.box(-g,0,-M,g,m,M,p,l===3?Gt(x,1):null);let S=m;if(l===0){const y=Math.min(g,M)+.5;Ul(i,g+.5,M+.5,m,y*.44,x),S=m+y*.44}else l===1?S=m+Vi(i,s,r,m,.5,.4,x,p):l===2?(pr(i,s,r,m,1.35,.25,.5,x,p),_n(i,r,-g+.5,g-.5,m+.25,m+1.05,We,u()<.5?1:0),S=m+1.4):(i.box(-g-.15,m,-M-.15,g+.15,m+.3,M+.15,Gt(p,.92),x),S=m+.3);const b=fr[Math.floor(u()*fr.length)];for(let _=0;_<a;_++){const y=_*2.75+.85,w=y+1.3,T=Math.max(2,Math.floor(s/3.2)),C=_===0?Math.floor(u()*T):-1;for(let P=0;P<T;P++){const G=-g+(P+.5)/T*s;P===C?_n(i,r,G-.5,G+.5,0,2.1,b):_n(i,r,G-.85,G+.85,y,w,We,u()<.55?1:0)}const D=Math.max(1,Math.floor(s/3.8));for(let P=0;P<D;P++){const G=-g+(P+.5)/D*s;Iu(i,r,G-.75,G+.75,y,w,We,u()<.5?1:0)}const O=Math.max(1,Math.floor(r/4.2));for(let P=0;P<O;P++){const G=-M+(P+.5)/O*r;Fl(i,s,G-.7,G+.7,y,w,We,u()<.45?1:0),Ol(i,s,G-.7,G+.7,y,w,We,u()<.45?1:0)}}const E=u();if(a===1&&E<.36){const _=g*(.6+u()*.4),y=1.9;i.box(-_,-.12,M,_,.02,M+y,ws),i.quad(-_-.2,2.3,M+y+.2,_+.2,2.3,M+y+.2,_+.2,2.7,M,-_-.2,2.7,M,Gt(x,.93));const w=Math.max(2,Math.round(_*2/3));for(let T=0;T<=w;T++){const C=-_+T/w*_*2;i.box(C-.06,0,M+y-.12,C+.06,2.32,M+y,fn,null)}}else if(a===2&&E<.5){const _=g*(.55+u()*.45),y=2;i.box(-_,2.62,M,_,2.78,M+y,Ao,ws,Gt(Ao,.8));const w=u()<.5?z(10469580):fn;i.box(-_,2.78,M+y-.05,_,3.75,M+y,w,null),i.box(-_,2.78,M,-_+.05,3.75,M+y,w,null),i.box(_-.05,2.78,M,_,3.75,M+y,w,null);for(const T of[-_+.1,_-.1])i.box(T-.08,0,M+y-.2,T+.08,2.62,M+y-.04,fn,null);u()<.5&&i.quad(-_-.2,5.05,M+y+.2,_+.2,5.05,M+y+.2,_+.2,5.4,M,-_-.2,5.4,M,Gt(x,.93))}if(u()<.1&&l<=1){const _=(u()-.5)*g,y=(u()-.5)*M*.6;i.box(_-.32,m,y-.32,_+.32,S+.55,y+.32,z(10116936))}if(u()<.24&&l<=1&&K_(i,s,r,m,o,l,u),u()<.15){const _=(u()<.5?-1:1)*(g+1.25),y=-M+1.3;i.cyl(_,d.hi-f,y,1.05,1.05,2.1,8,u()<.5?z(9347975):z(12370625),z(11120814))}}function K_(i,t,e,n,s,r,o){const a=t/2,l=e/2,c=r===0?.5:.4,h=.22,u=.74,d=.09;if(t>=e){const f=l+c,p=r===0?f*.44:l*.5*(1+c/l),x=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?a-l:a)*.7)*(.6+o()*.4),g=Math.cos(s)<0,M=g?1:-1,v=M*f*(1-h),S=M*f*(1-u),b=x+p*h+d,E=x+p*u+d;g?i.quad(-m,b,v,m,b,v,m,E,S,-m,E,S,Ro):i.quad(m,b,v,-m,b,v,-m,E,S,m,E,S,Ro)}else{const f=a+c,p=r===0?f*.44:a*.5*(1+c/a),x=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?l-a:l)*.7)*(.6+o()*.4),g=Math.sin(s)>0,M=g?1:-1,v=M*f*(1-h),S=M*f*(1-u),b=x+p*h+d,E=x+p*u+d;g?i.quad(v,b,m,v,b,-m,S,E,-m,S,E,m,Ro):i.quad(v,b,-m,v,b,m,S,E,m,S,E,-m,Ro)}}const $_=z(9075302);function J_(i,t,e,n){const[,s,r,o,a,l,c]=e;let h=-1/0,u=1/0;for(let f=0;f<s.length;f+=5){const[p,x,m,g,M]=s.slice(f,f+5);i.frame(p,0,x,M);const v=[];for(const[b,E]of[[-m/2,-g/2],[m/2,-g/2],[m/2,g/2],[-m/2,g/2]])v.push(i.wx(b,E),i.wz(b,E));n.push(v);const S=Co(t,i,m/2,g/2);h=Math.max(h,S.hi),u=Math.min(u,S.lo)}const d=h+.18;for(let f=0;f<s.length;f+=5)Q_(i,d,u,s.slice(f,f+5),r,o,a,l,f===0?c:"",f===0)}function Q_(i,t,e,[n,s,r,o,a],l,c,h,u,d,f){const p=Pe(Math.round(n*31+s*17)>>>0);i.frame(n,t,s,a);const x=z(h),m=z(u),g=l===2?5.5:2.85,M=r/2,v=o/2;if(i.box(-M,e-t-.3,-v,M,0,v,Gt(x,.7),null),i.box(-M,0,-v,M,g,v,x,c===3?m:null),c===0){const y=Math.min(M,v)+.5;Ul(i,M+.5,v+.5,g,y*.44,m)}else c===1?Vi(i,r,o,g,.5,.4,m,x):c===2?pr(i,r,o,g,1.1,.2,.5,m,x):i.box(-M-.15,g,-v-.15,M+.15,g+.3,v+.15,Gt(x,.92),m);if(r<5||o<3)return;const S=d.includes("g")?Math.min(4.8,r*.42):0;S&&_n(i,o,M-.4-S,M-.4,0,2.2,$_);const b=-M,E=M-(S?S+.8:0);for(let _=0;_<l;_++){const y=_*2.75+.85,w=y+1.3,T=Math.max(2,Math.floor((E-b)/3.2));for(let O=0;O<T;O++){const P=b+(O+.5)/T*(E-b);f&&_===0&&O===T-1?_n(i,o,P-.5,P+.5,0,2.1,fr[0]):_n(i,o,P-.85,P+.85,y,w,We,p()<.5?1:0)}const C=Math.max(1,Math.floor(r/3.8));for(let O=0;O<C;O++){const P=-M+(O+.5)/C*r;Iu(i,o,P-.75,P+.75,y,w,We,p()<.5?1:0)}const D=Math.max(1,Math.floor(o/4.2));for(let O=0;O<D;O++){const P=-v+(O+.5)/D*o;Fl(i,r,P-.7,P+.7,y,w,We,p()<.45?1:0),Ol(i,r,P-.7,P+.7,y,w,We,p()<.45?1:0)}}if(d.includes("v")){const _=Math.min(M-.3,(E-b)/2),y=(b+E)/2,w=2.2;i.box(y-_,-.12,v,y+_,.02,v+w,ws),i.quad(y-_-.2,2.3,v+w+.2,y+_+.2,2.3,v+w+.2,y+_+.2,2.7,v,y-_-.2,2.7,v,Gt(m,.93));const T=Math.max(2,Math.round(_*2/3));for(let C=0;C<=T;C++){const D=y-_+C/T*_*2;i.box(D-.06,0,v+w-.12,D+.06,2.32,v+w,fn,null)}}if(d.includes("b")&&l===2){const _=M*.8,y=1.8;i.box(-_,2.62,v,_,2.78,v+y,Ao,ws,Gt(Ao,.8)),i.box(-_,2.78,v+y-.05,_,3.75,v+y,fn,null),i.box(-_,2.78,v,-_+.05,3.75,v+y,fn,null),i.box(_-.05,2.78,v,_,3.75,v+y,fn,null);for(const w of[-_+.1,_-.1])i.box(w-.08,0,v+y-.2,w+.08,2.62,v+y-.04,fn,null)}}function j_(i,t,e,n,s,r,o,a,l,c){i.frame(e,0,n,o);const h=Co(t,i,s/2,r/2);i.frame(e,h.hi+.05,n,o);const u=[z(14275778),z(9083526),z(12041145),z(7305842)][l%4],d=Ri[c%Ri.length],f=2.4,p=s/2,x=r/2;i.box(-p,h.lo-h.hi-.3,-x,p,f,x,u,null),a===1?Vi(i,s,r,f,.32,.2,d,u):pr(i,s,r,f,.6,.1,.2,d,u),_n(i,r,-p*.72,p*.72,0,2.05,Gt(u,1.12))}const Po=[14243375,3112880,6266970,14725690,9134e3,4170656,14252591,4878261].map(z);function t1(i,t,e,n,s,r,o,a){const l={0:[8,4.2],1:[6.4,4.8],2:[3.6,3.6],3:[10.5,7.5]},[c,h]=l[r];i.frame(e,0,n,s);const u=Co(t,i,c/2,h/2);i.frame(e,u.hi+.05,n,s);const d=u.lo-u.hi-.3;if(r===0){const f=[z(15129798),z(12175305),z(13219994),z(10465434)][o%4],p=Ri[(o*3+1)%Ri.length];i.box(-4,d,-2.1,4,.35,2.1,Gt(f,.6),null),i.box(-4,.35,-2.1,4,2.75,2.1,f,null),Vi(i,8,4.2,2.75,.42,.35,p,f),i.box(-3.2,.2,2.1,1.2,.35,3.7,ws),i.box(-3.2,.35,3.62,1.2,1.25,3.7,fn,null),_n(i,4.2,-2.8,-1.2,1.2,2.3,We,a()<.5?1:0),_n(i,4.2,-.4,.5,.35,2.4,fr[o%fr.length]),_n(i,4.2,1.4,3.2,1.2,2.3,We,a()<.5?1:0)}else if(r===1){const f=Po[o%Po.length];i.box(-2.9,.45,-2.3,2.9,2.55,-.1,fn,z(15263972),z(9079432)),i.box(-2.92,1.05,-2.32,2.92,1.3,-.08,f,null),i.box(-1.4,0,-2.2,-.8,.5,-.2,z(2763308)),i.box(.8,0,-2.2,1.4,.5,-.2,z(2763308)),_n(i,-.2,-2.2,-1,1.45,2.15,We,a()<.4?1:0),i.box(-2.6,0,-.1,2.6,2,2.3,lr(f,fn,.72),null),i.quad(-2.7,2,2.4,2.7,2,2.4,2.7,2.5,-.1,-2.7,2.5,-.1,lr(f,fn,.55))}else if(r===2){const f=Po[o%Po.length];i.blob(0,0,0,1.75,1.55,1.75,6,4,Gt(f,.85),f)}else{const f=z(14209732),p=z(5922659);i.box(-5.25,d,-3.75,5.25,3,3.75,f,null),pr(i,10.5,7.5,3,1.5,.2,.7,p,z(9072466)),_n(i,7.5,-4.4,4.4,.3,2.6,We,a()<.6?1:0),i.box(-5.25,.05,3.75,5.25,.25,6.2,ws),Fl(i,10.5,-2,2,.9,2.3,We,a()<.5?1:0),Ol(i,10.5,-2,2,.9,2.3,We,a()<.5?1:0)}}function e1(i){const t=i.length/2;let e={cx:0,cz:0,w:0,d:0,heading:0,area:1/0};for(let n=0;n<t;n++){const s=(n+1)%t;let r=i[s*2]-i[n*2],o=i[s*2+1]-i[n*2+1];const a=Math.hypot(r,o);if(a<.5)continue;r/=a,o/=a;let l=1/0,c=-1/0,h=1/0,u=-1/0;for(let f=0;f<t;f++){const p=i[f*2],x=i[f*2+1],m=p*r+x*o,g=-p*o+x*r;m<l&&(l=m),m>c&&(c=m),g<h&&(h=g),g>u&&(u=g)}const d=(c-l)*(u-h);if(d<e.area){const f=(l+c)/2,p=(h+u)/2;e={cx:f*r-p*o,cz:f*o+p*r,w:c-l,d:u-h,heading:Math.atan2(-o,r),area:d}}}return e}function Nu(i,t){const e=i.length/2,n=cr(i)>0?1:-1,s=[];for(let r=0;r<e;r++){const o=(r+e-1)%e,a=(r+1)%e;let l=i[r*2]-i[o*2],c=i[r*2+1]-i[o*2+1],h=i[a*2]-i[r*2],u=i[a*2+1]-i[r*2+1];const d=Math.hypot(l,c)||1,f=Math.hypot(h,u)||1;l/=d,c/=d,h/=f,u/=f;const p=-c*n,x=l*n,m=-u*n,g=h*n;let M=p+m,v=x+g;const S=Math.hypot(M,v)||1;M/=S,v/=S;const b=t/Math.max(.4,M*p+v*x);s.push(i[r*2]+M*b,i[r*2+1]+v*b)}return s}const n1=new Set(["house","detached","residential","terrace","yes;house","semidetached_house","bungalow"]),i1=new Set(["shed","garage","garages","toilets","hut"]);function Uu(i,t,e,n,s,r){const o=e.p.map(w=>w/10),a=o.length/2;let l=0,c=0,h=1/0,u=-1/0;for(let w=0;w<a;w++){l+=o[w*2],c+=o[w*2+1];const T=t.yAt(o[w*2],o[w*2+1]);T<h&&(h=T),T>u&&(u=T)}l/=a,c/=a;const d=Math.abs(cr(o)),f=e1(o),p=d/(f.w*f.d||1),x=u+.15,m=Math.hypot(l-r[0],c-r[1])<420,g=e.k==="retail"||e.k==="commercial"||!!e.u||!!e.n||e.k==="yes"&&(d>300||m&&d>110),M=!g&&(n1.has(e.k)||e.k==="yes"&&d<=300),v=i1.has(e.k)||d<28;let S;e.l?S=e.l*3.1:e.k==="roof"?S=3:e.k==="hangar"?S=6.5:e.k==="church"?S=5:v?S=2.5:M?S=s()<.2?5.5:2.9:S=d>1200?7:d>500?5.6:4.3+s()*.8;const b={name:e.n,use:e.u,kind:e.k,poly:o,cx:l,cz:c,area:d,obb:f,floorY:x,wallH:S,topY:x+S};let E=26;for(let w=0;w<a;w++){const T=(w+1)%a,C=o[w*2],D=o[w*2+1],O=o[T*2],P=o[T*2+1],G=Math.hypot(O-C,P-D);if(G<4.5)continue;const F=(C+O)/2,k=(D+P)/2,V=n.nearest(F,k,E);if(!V)continue;let N=-(P-D)/G,L=(O-C)/G;if(N*(F-l)+L*(k-c)<0&&(N=-N,L=-L),(V.px-F)*N+(V.pz-k)*L<V.dist*.5)continue;E=V.dist;const U=Math.atan2(N,L),$=(O-C)*Math.cos(U)-(P-D)*Math.sin(U);b.street={x:$>0?C:O,z:$>0?D:P,heading:U,length:G}}if(i.frame(0,x,0,0),e.k==="roof"){const w=z(12172728);i.walls(o,S-.25,S,w),i.cap(o,S,w);for(let T=0;T<a;T++)i.box(o[T*2]-.12,h-x,o[T*2+1]-.12,o[T*2]+.12,S-.25,o[T*2+1]+.12,z(6974832),null);return b}const _=g?[z(15328470),z(14275266),z(13620178),z(15128768),z(12568777),z(15789540),z(13220258)][Math.floor(s()*7)]:To[Math.floor(s()*To.length)],y=g&&d>300?[z(13225160),z(11777972),z(14211280),z(10133405)][Math.floor(s()*4)]:Ri[Math.floor(s()*Ri.length)];if(i.walls(o,h-x-.3,S,_),e.k==="church"){i.frame(f.cx,x,f.cz,f.heading);const w=Vi(i,f.w,f.d,S,1.15,.3,z(5922659),_);b.topY=x+S+w}else if((M||v||e.k==="hangar")&&p>.8&&a<=8)if(i.frame(f.cx,x,f.cz,f.heading),e.k==="hangar")b.topY=x+S+Vi(i,f.w,f.d,S,.3,.3,z(12172728),_);else if(v)pr(i,f.w,f.d,S,.5,.1,.2,y,_);else if(s()<.55){const w=Math.min(f.w,f.d)/2+.45;Ul(i,f.w/2+.45,f.d/2+.45,S,w*.44,y),b.topY=x+S+w*.44}else b.topY=x+S+Vi(i,f.w,f.d,S,.5,.4,y,_);else if(d<420&&!g){const w=Nu(o,Math.min(2.2,Math.sqrt(d)*.18)),T=1.15;for(let C=0;C<a;C++){const D=(C+1)%a;i.quad(o[C*2],S,o[C*2+1],o[D*2],S,o[D*2+1],w[D*2],S+T,w[D*2+1],w[C*2],S+T,w[C*2+1],y)}i.cap(w,S+T,Gt(y,1.05)),b.topY=x+S+T}else{i.cap(o,S-.05,y),i.walls(o,S,S+.45,Gt(_,.96)),b.topY=x+S+.45;const w=Math.min(6,Math.floor(d/220));for(let T=0;T<w;T++){const C=(s()-.5)*f.w*.5,D=(s()-.5)*f.d*.5,O=Math.cos(f.heading),P=Math.sin(f.heading),G=f.cx+C*O+D*P,F=f.cz-C*P+D*O;i.box(G-1.1,S,F-.8,G+1.1,S+.9,F+.8,z(11120304))}}if(!v&&e.k!=="hangar"){const w=Math.max(1,Math.round(S/3));for(let T=0;T<a;T++){const C=(T+1)%a,D=o[T*2],O=o[T*2+1],P=o[C*2],G=o[C*2+1],F=Math.hypot(P-D,G-O);if(F<3.2)continue;let k=-(G-O)/F,V=(P-D)/F;k*((D+P)/2-l)+V*((O+G)/2-c)<0&&(k=-k,V=-V);const N=Math.atan2(k,V),L=(P-D)*Math.cos(N)-(G-O)*Math.sin(N);i.frame(L>0?D:P,x,L>0?O:G,N);const U=Math.floor(F/(g?4.2:3.4));for(let $=0;$<w;$++){const it=$*3+.9;if(!(g&&$===0&&b.street&&Math.abs(N-b.street.heading)<.01))for(let Y=0;Y<U;Y++){const X=(Y+.5)/U*F;i.quad(X-.8,it,xn,X+.8,it,xn,X+.8,it+1.3,xn,X-.8,it+1.3,xn,We,s()<.5?1:0)}}}}if(g&&b.street&&!e.k.includes("church")&&d>60){const w=b.street;i.frame(w.x,x,w.z,w.heading);const T=Du[Math.floor(s()*Du.length)];if(i.quad(.5,.35,xn,w.length-.5,.35,xn,w.length-.5,2.7,xn,.5,2.7,xn,We,.9),m&&w.length>6&&S<9){i.box(.2,3,0,w.length-.2,3.16,2.7,T,Gt(T,.9),Gt(T,.75)),i.box(.2,2.75,2.62,w.length-.2,3.3,2.7,lr(T,fn,.25),null);const C=Math.max(1,Math.round(w.length/4.5));for(let D=0;D<=C;D++){const O=.35+D/C*(w.length-.7);i.box(O-.06,0,2.5,O+.06,3,2.62,z(4869456),null)}}}return i.frame(),b}function s1(i,t,e,n,s=()=>!1){const r=new rn;r.name="buildings";const o=Ss(),a=900,l=new Map,c=(b,E)=>{const _=`${Math.floor(b/a)}:${Math.floor(E/a)}`;let y=l.get(_);return y||l.set(_,y=new ne),y},h=i.meta,u=[(145.7285-h.origin[0])*h.metresPerDegree[0],-(-38.63385-h.origin[1])*h.metresPerDegree[1]],d=Pe(3996),f=[];for(const b of i.buildings){let E=0,_=0;for(let y=0;y<b.p.length;y+=2)E+=b.p[y],_+=b.p[y+1];if(E/=b.p.length*5,_/=b.p.length*5,!(s(E,_)||wu(E,_))){if(n.has(b.n)){const y=new ne,w=Uu(y,t,b,e,Pe(1),u);w.custom=!0,f.push(w);continue}f.push(Uu(c(E,_),t,b,e,d,u))}}const p=i.houses,x=Au(i);for(let b=0;b<p.length;b+=Cl){const E=p[b]/4,_=p[b+1]/4,y=p[b+2]/10,w=p[b+3]/10,T=p[b+4]/10*(Math.PI/180),C=Pe(b*7919+17);s(E,_)||x(E,_)||(p[b+5]===1?j_(c(E,_),t,E,_,y,w,T,p[b+7],p[b+8],p[b+9]):Z_(c(E,_),t,E,_,y,w,T,p[b+6],p[b+7],p[b+8],p[b+9],C))}const m=i.cabins;for(let b=0;b<m.length;b+=v_){const E=m[b]/4,_=m[b+1]/4;s(E,_)||t1(c(E,_),t,E,_,m[b+2]/10*(Math.PI/180),m[b+3],m[b+4],Pe(b*31+5))}const g=[];for(const b of Es){const[E,_]=b[1];s(E,_)||J_(c(E,_),t,b,g)}const[M,v]=Eo;if(!s(M,v)){const b=R_(c(M,v),t);g.push(...b)}for(const b of Dl){const[E,_]=b.centre;if(s(E,_))continue;const[y,w]=I_(E,_),T=Nu(b.roof,.18);Y_(c(E,_),t,b,T,y,w),g.push(T)}let S=0;for(const b of l.values()){b.frame(),S+=b.vertexCount/3;const E=new Jt(b.build(),o);E.castShadow=!0,E.receiveShadow=!0,r.add(E)}return{group:r,footprints:f,designedWalls:g,triangles:S}}class r1{constructor(t){Z(this,"targetFps");Z(this,"deadline",-1/0);Z(this,"lastDraw");this.targetFps=t===30?30:60}get target(){return this.targetFps}setTarget(t){const e=t===30?30:60;return e===this.targetFps?!1:(this.targetFps=e,this.reset(),!0)}reset(){this.deadline=-1/0,this.lastDraw=void 0}takeFrame(t){if(t+1<this.deadline)return;const e=1e3/this.targetFps,n=this.deadline+e;this.deadline=n<=t?t+e:n;const s=this.lastDraw===void 0?0:(t-this.lastDraw)/1e3;return this.lastDraw=t,s}}const o1=.1,a1=180,l1=425,c1=650,h1=360,u1=480,d1=1.8,f1=450;function Fu(i,t,e){const n=Math.max(i.x-t,0,t-i.x-i.size),s=Math.max(i.z-e,0,e-i.z-i.size);return Math.hypot(n,s)}function Ou(i){"close"in i&&i.close()}function zl(i){i.texture.dispose(),Ou(i.image)}function p1(i,t){return new Promise((e,n)=>{if(t.aborted){n(t.reason);return}const s=new Image;s.crossOrigin="anonymous";const r=()=>{s.onload=s.onerror=null,t.removeEventListener("abort",o)},o=()=>{r(),s.removeAttribute("src"),n(t.reason)};s.onload=()=>{r(),e(s)},s.onerror=()=>{r(),n(new Error("Could not load ground detail"))},t.addEventListener("abort",o,{once:!0}),s.src=i})}class m1{constructor(t,e,n,s,r,o){Z(this,"patches");Z(this,"manifest");Z(this,"manifestRetryAt",0);Z(this,"load");Z(this,"ready");Z(this,"residents");Z(this,"previous");Z(this,"vx",0);Z(this,"vz",0);Z(this,"closed",!1);this.urls=t,this.small=e,this.detail=n,this.anisotropy=s,this.worker=r,this.markDirty=o,this.residents=n.maps.map(()=>{})}update(t,e,n,s,r){if(!this.urls.detail||this.closed)return;const o=this.previous,a=o?t-o.time:0,l=o&&Math.hypot(e-o.x,n-o.y,s-o.z)>a1;if(o&&!l&&a<o1)return;if(this.previous={time:t,x:e,y:n,z:s},!o||l||a>1)this.vx=this.vz=0;else{const u=Math.min(1,a*4);this.vx+=((e-o.x)/a-this.vx)*u,this.vz+=((s-o.z)/a-this.vz)*u}if(!this.patches){!this.manifest&&t>=this.manifestRetryAt&&this.loadManifest(this.urls.detail);return}const c=Math.min(d1,f1/Math.max(1,Math.hypot(this.vx,this.vz))),h=this.patches.map(u=>{const d=u.slot!==-1,f=Math.min(Fu(u,e,s),Fu(u,e+this.vx*c,s+this.vz*c)+70);return{patch:u,score:f,present:d}}).filter(({score:u,present:d})=>r<=(d?u1:h1)&&u<=(d?c1:l1)).sort((u,d)=>u.score-d.score).slice(0,this.residents.length).map(({patch:u})=>u);for(const u of this.residents)u&&!h.includes(u.patch)&&this.evict(u);if(this.load&&!h.includes(this.load.patch)&&this.cancelLoad(),this.ready&&!h.includes(this.ready.patch)&&(zl(this.ready),this.ready=void 0),!this.load&&!this.ready){const u=h.find(d=>d.slot===-1&&t>=d.retryAt);u&&this.start(u)}}applyReady(){if(!this.ready)return;const t=this.residents.indexOf(void 0);if(t<0)return;const e=this.ready;this.ready=void 0,this.residents[t]=e;const{patch:n,texture:s}=e;n.slot=t,this.detail.maps[t].value=s,this.detail.rects[t].value.set(n.x,n.z,1/n.size,1)}dispose(){var t;if(!this.closed){this.closed=!0,(t=this.manifest)==null||t.abort(),this.cancelLoad(),this.ready&&zl(this.ready),this.ready=void 0;for(const e of this.residents)e&&this.evict(e);this.detail.fallback.dispose()}}async loadManifest(t){var n;const e=this.manifest=new AbortController;try{const s=new URL(t,document.baseURI),r=await fetch(s,{signal:e.signal});if(r.status===404){this.patches=[];return}if(!r.ok)throw new Error("Could not load the ground detail list");const{patches:o}=await r.json();if(e.signal.aborted)return;this.patches=(Array.isArray(o)?o:[]).flatMap(a=>{var h;if(!a||!Number.isFinite(a.x)||!Number.isFinite(a.z)||!(a.size>0)||!Number.isFinite(a.size))return[];const l=this.small&&a.lo?a.lo:a.file;if(typeof l!="string"||!l)return[];const c=(h=this.urls.detailFiles)==null?void 0:h[l];try{return[{x:a.x,z:a.z,size:a.size,url:c?new URL(c,document.baseURI).href:new URL(l,s).href,slot:-1,failures:0,retryAt:0}]}catch{return[]}})}catch{e.signal.aborted||(this.manifestRetryAt=(((n=this.previous)==null?void 0:n.time)??0)+20)}finally{this.manifest=void 0}}start(t){const e=new AbortController,n=this.load={patch:t,controller:e},{signal:s}=e;this.worker.run({kind:"detail",url:t.url},()=>p1(t.url,s),s).then(r=>{if(this.load!==n){Ou(r);return}this.load=void 0,t.failures=0,t.retryAt=0;const o=new Te(r);o.flipY=!("close"in r),o.colorSpace=Ue,o.anisotropy=this.anisotropy,o.generateMipmaps=!0,o.minFilter=yn,o.needsUpdate=!0,this.ready={patch:t,texture:o,image:r},this.markDirty()},()=>{var r;this.load===n&&(this.load=void 0,t.failures++,t.retryAt=(((r=this.previous)==null?void 0:r.time)??0)+Math.min(30,2**t.failures))})}cancelLoad(){const t=this.load;this.load=void 0,t==null||t.controller.abort()}evict(t){const e=t.patch.slot;this.detail.maps[e].value=this.detail.fallback,this.detail.rects[e].value.w=0,this.residents[e]=void 0,t.patch.slot=-1,zl(t),this.markDirty()}}class g1{constructor(t,e,n){Z(this,"items",[]);Z(this,"v",new q);Z(this,"visible",!0);Z(this,"obstacles",[]);this.layer=t;for(const s of[...e].sort((r,o)=>r.priority-o.priority)){const r=document.createElement("button");r.type="button",r.tabIndex=-1,r.className=`inv-label inv-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",r.addEventListener("click",()=>n(s.id)),t.appendChild(r),this.items.push({place:s,el:r,w:0,h:0,shown:!1})}}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const o of this.items){o.w||(o.w=o.el.offsetWidth,o.h=o.el.offsetHeight);const a=o.place;this.v.set(a.x,a.y,a.z);const l=this.v.distanceTo(t.position);this.v.project(t);let c=this.v.z<1&&this.v.z>-1&&l<(a.maxDist??1/0)&&l<s;const h=(this.v.x*.5+.5)*e,u=(-this.v.y*.5+.5)*n,d=h-o.w/2,f=u-o.h,p=h+o.w/2,x=u;if(c&&(p<0||d>e||x<0||f>n)&&(c=!1),c){for(const m of r)if(d<m[2]+6&&p>m[0]-6&&f<m[3]+4&&x>m[1]-4){c=!1;break}}c&&(r.push([d,f,p,x]),o.el.style.transform=`translate3d(${Math.round(d)}px, ${Math.round(f)}px, 0)`),c!==o.shown&&(o.el.style.visibility=c?"visible":"hidden",o.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}const x1=[{id:"town",name:"A'Beckett Street",kind:"landmark",lat:-38.63372,lon:145.7283,blurb:"Inverloch's main street: bakeries, fish and chips, cafes and shops, a short walk from the inlet.",view:[380,58,-28],priority:1,lift:26},{id:"jetty",name:"Inverloch Jetty",kind:"landmark",lat:-38.63591,lon:145.73413,blurb:"Timber jetty reaching into Anderson Inlet, with the boat ramp alongside. A favourite for fishing and an evening walk.",view:[190,63,32],priority:1,lift:16},{id:"surf",name:"Surf Beach & Life Saving Club",kind:"landmark",lat:-38.64634,lon:145.70199,blurb:"Ocean beach facing Bass Strait, watched over by the Inverloch Surf Life Saving Club on the dune.",view:[330,62,-32],priority:1,lift:20},{id:"inlet",name:"Anderson Inlet",kind:"water",lat:-38.6412,lon:145.7445,blurb:"A shallow tidal estuary where the Tarwin River meets the sea. The sandbars here come from LiDAR survey data: slide the tide to cover and uncover them.",view:[3e3,50,8],priority:2},{id:"hub",name:"The Hub",kind:"landmark",lat:-38.63332,lon:145.72762,blurb:"Inverloch Community Hub on A'Beckett Street, home to the library and visitor information.",view:[300,60,20],priority:3,maxDist:2600,lift:18},{id:"espy",name:"Esplanade Hotel",kind:"landmark",lat:-38.63419,lon:145.72889,blurb:"The pub at the foreshore end of the main street.",view:[280,62,-40],priority:3,maxDist:2200,lift:18},{id:"rainbow",name:"Rainbow Park",kind:"landmark",lat:-38.63529,lon:145.72876,blurb:"Foreshore playground with picnic lawns and barbecues beside the inlet beach.",view:[150,60,14],priority:3,maxDist:2200,lift:14},{id:"bunurong",name:"Bunurong Environment Centre",kind:"landmark",lat:-38.63465,lon:145.72917,blurb:"Environment centre and shell museum on The Esplanade.",view:[260,60,-15],priority:5,maxDist:1100,lift:15},{id:"glade",name:"The Glade",kind:"landmark",lat:-38.63539,lon:145.7302,blurb:"Foreshore reserve and picnic shelter between the town centre and the jetty.",view:[300,62,5],priority:5,maxDist:1300,lift:13},{id:"oval",name:"Recreation Reserve",kind:"landmark",lat:-38.63194,lon:145.72681,blurb:"The town's football oval, a block back from the main street.",view:[460,58,15],priority:4,maxDist:2600,lift:16},{id:"school",name:"Primary School",kind:"landmark",lat:-38.63062,lon:145.72813,blurb:"Inverloch Primary School.",view:[380,58,0],priority:6,maxDist:1500,lift:14},{id:"bowls",name:"Bowls Club",kind:"landmark",lat:-38.63556,lon:145.73245,blurb:"Inverloch Bowls Club, two greens beside the foreshore.",view:[260,60,0],priority:6,maxDist:1300,lift:12},{id:"tennis",name:"Tennis Club & Oval",kind:"landmark",lat:-38.62722,lon:145.7372,blurb:"Tennis courts and a second football oval on the north-east side of town.",view:[520,58,10],priority:6,maxDist:2e3,lift:14},{id:"camping",name:"Foreshore Holiday Parks",kind:"landmark",lat:-38.63425,lon:145.7442,blurb:"Cabins, caravans and tents under the trees along The Esplanade, steps from the inlet.",view:[560,60,15],priority:4,maxDist:2800,lift:16},{id:"screw",name:"Screw Creek & Townsend Bluff",kind:"nature",lat:-38.6338,lon:145.7546,blurb:"A tidal creek in a nature conservation reserve, with a walking circuit up to the lookout on Townsend Bluff.",view:[900,60,-20],priority:3,lift:24},{id:"norman",name:"Point Norman",kind:"nature",lat:-38.648,lon:145.7118,blurb:"The corner where the surf beach turns into the inlet.",view:[900,60,-35],priority:4,maxDist:4200,lift:14},{id:"smythe",name:"Point Smythe",kind:"nature",lat:-38.6466,lon:145.7366,blurb:"The tip of the Venus Bay peninsula, across the entrance from town: coastal scrub, dunes and walking tracks.",view:[1300,58,150],priority:3,lift:22},{id:"racv",name:"RACV Inverloch Resort",kind:"landmark",lat:-38.6487,lon:145.6876,blurb:"Resort and villas on the Cape Paterson road, on the hill above the coast.",view:[520,60,40],priority:5,maxDist:3200,lift:18},{id:"strait",name:"Bass Strait",kind:"water",lat:-38.6565,lon:145.7075,blurb:"Open ocean. Swell rolls in to the surf beach from here.",view:[2300,50,-12],priority:4}];function _1(i,t){return x1.map(e=>{const n=(e.lon-i.origin[0])*i.metresPerDegree[0],s=-(e.lat-i.origin[1])*i.metresPerDegree[1],r=Math.max(t.yAt(n,s),0);return{...e,x:n,z:s,y:r+(e.lift??6)}})}function vn(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}const v1=new Set(["Inverloch Surf Life Saving Club","The Hub"]),Xe=z(10126440),Le=z(6113848),Mn=z(16053230),Ts=z(11842219),ye=z(7304312),mr=z(3163994),As=z(13644844),Rs=z(15909424),M1=z(16119022),Bl=2.05*qn;function zu(i,t,e,n=35){let s=1/0,r=0,o=1;for(let a=0;a<24;a++){const l=a/24*Math.PI*2,c=i.metresAt(t+Math.cos(l)*n,e+Math.sin(l)*n)+i.metresAt(t+Math.cos(l)*n*2,e+Math.sin(l)*n*2);c<s&&(s=c,r=Math.cos(l),o=Math.sin(l))}return[r,o]}function Lo(i){let t=0,e=0;for(let n=0;n<i.length;n+=2)t+=i[n],e+=i[n+1];return[t/(i.length/2)/10,e/(i.length/2)/10]}function S1(i,t,e){const n=[];for(let v=0;v<e.length;v+=2)n.push([e[v]/10,e[v+1]/10]);t.metresAt(n[0][0],n[0][1])<t.metresAt(n[n.length-1][0],n[n.length-1][1])&&n.reverse();const s=1.7,r=Bl,[o,a]=n[0];let l=o-n[1][0],c=a-n[1][1];const h=Math.hypot(l,c)||1;l/=h,c/=h;let u=0;for(;u<30&&t.yAt(o+l*u,a+c*u)<r-.25;)u+=1.5;const d=Math.max(t.yAt(o+l*u,a+c*u),r-1.2),f=Math.atan2(-l,-c);i.frame(o+l*u,0,a+c*u,f),i.quad(-s,d+.05,0,s,d+.05,0,s,r,u,-s,r,u,Xe),i.quad(-s,d-1.2,0,-s,r-.4,u,-s,r,u,-s,d+.05,0,Le),i.quad(s,d-1.2,0,s,d+.05,0,s,r,u,s,r-.4,u,Le);for(let v=0;v<n.length-1;v++){const[S,b]=n[v],[E,_]=n[v+1],y=Math.hypot(E-S,_-b),w=Math.atan2(E-S,_-b);i.frame(S,r,b,w);const T=Math.ceil(y/1.2);for(let D=0;D<T;D++){const O=D/T*y,P=(D+1)/T*y;i.box(-s,-.14,O,s,0,P,Gt(Xe,.9+D*7%5*.04),void 0,Le)}i.box(-s+.25,-.5,0,-s+.5,-.14,y,Le,null),i.box(s-.5,-.5,0,s-.25,-.14,y,Le,null);const C=Math.max(1,Math.round(y/3.6));for(let D=0;D<=C;D++){const O=D/C*y;for(const P of[-1,1]){const G=P*(s-.12),F=t.yAt(i.wx(G,O),i.wz(G,O));i.cyl(G,F-r-.6,O,.17,.15,r-F+.6+1.1,6,Le,Gt(Xe,.8))}i.box(-s,-.78,O-.12,s,-.5,O+.12,Le),i.quad(-s+.1,-2.6,O,s-.1,-.8,O,s-.1,-.6,O,-s+.1,-2.4,O,Gt(Le,.9))}for(const D of[-1,1]){const O=D*(s-.12);i.box(O-.05,1.02,0,O+.05,1.1,y,Xe,void 0,Le),i.box(O-.03,.52,0,O+.03,.58,y,Xe,void 0,Le)}i.box(-s,-.14,-s,s,0,.01,Xe,void 0,Le)}const[p,x]=n[n.length-1],[m,g]=n[n.length-2],M=Math.atan2(p-m,x-g);i.frame(p,r,x,M),i.box(-3.2,-.14,0,3.2,0,5.2,Gt(Xe,.96),void 0,Le);for(const[v,S]of[[-3.05,.2],[3.05,.2],[-3.05,5],[3.05,5],[0,5]]){const b=t.yAt(i.wx(v,S),i.wz(v,S));i.cyl(v,b-r-.6,S,.19,.17,r-b+.6+(v===0?0:1.1),6,Le,Gt(Xe,.8))}i.box(-3.1,1.02,4.9,3.1,1.1,5,Xe,void 0,Le),i.box(-3.1,1.02,0,-3,1.1,5,Xe,void 0,Le),i.box(3,1.02,0,3.1,1.1,5,Xe,void 0,Le),i.cyl(2.6,0,4.5,.07,.05,4.6,5,ye),i.blob(2.6,4.75,4.5,.28,.2,.28,6,3,z(16773320),void 0,1.6),i.box(-.35,-3.6,5.22,-.3,.9,5.28,ye,null),i.box(.3,-3.6,5.22,.35,.9,5.28,ye,null);for(let v=-3.3;v<.6;v+=.42)i.box(-.3,v,5.22,.3,v+.05,5.28,ye);return i.frame(),{head:new q(p,r,x),points:n}}function y1(i,t,e,n){const[s,r]=zu(t,e,n,25),o=Math.atan2(s,r);i.frame(e,0,n,o);const a=4.2,l=-8,c=[];for(let p=l;p<=46;p+=3){const x=t.yAt(i.wx(0,p),i.wz(0,p));if(c.push([p,x]),x<-1.6*qn)break}const h=c[0][1]+.12,u=Math.min(c[c.length-1][1]+.25,-.9*qn),d=c[c.length-1][0],f=c.length-1;for(let p=0;p<f;p++){const x=l+(d-l)*p/f,m=l+(d-l)*(p+1)/f,g=h+(u-h)*p/f,M=h+(u-h)*(p+1)/f;i.quad(-a,g,x,-a,M,m,a,M,m,a,g,x,p%2?Ts:Gt(Ts,.94));for(const v of[-1,1])i.quad(v*a,g-1.5,x,v*a,M-1.5,m,v*a,M+.15,m,v*a,g+.15,x,Gt(Ts,.8))}i.frame()}function b1(i,t,e){const[n,s]=zu(t,e.cx,e.cz,60),r=e.obb;let o=r.heading,a=r.w,l=r.d,c=-1/0;for(let E=0;E<4;E++){const _=r.heading+E*Math.PI/2,y=Math.sin(_)*n+Math.cos(_)*s;y>c&&(c=y,o=_,a=E%2?r.d:r.w,l=E%2?r.w:r.d)}const h=a/2,u=l/2;i.frame(r.cx,e.floorY,r.cz,o);const d=z(13223611),f=z(15394522),p=z(6975604);i.box(-h,-4,-u,h,3.1,u,d,null),i.box(-h,3.1,-u,h,6.1,u,f,null);const x=Math.max(2,Math.floor(a/5));for(let E=0;E<x;E++){const _=-h+(E+.5)/x*a;i.quad(_-1.7,.05,u+.05,_+1.7,.05,u+.05,_+1.7,2.7,u+.05,_-1.7,2.7,u+.05,E%2?As:Rs)}i.quad(-h+.6,3.6,u+.05,h-.6,3.6,u+.05,h-.6,5.7,u+.05,-h+.6,5.7,u+.05,mr,.9),i.box(-h-.6,2.95,u,h+.6,3.12,u+3.4,Ts,Xe,Gt(Ts,.8)),i.box(-h-.6,3.12,u+3.32,h+.6,4.15,u+3.4,z(10469580),null);for(const E of[-h-.4,-h/3,h/3,h+.4])i.box(E-.12,-4,u+3,E+.12,2.95,u+3.24,ye,null);i.quad(-h-.8,7.5,u+3.8,h+.8,7.5,u+3.8,h+.8,6.2,-u-.6,-h-.8,6.2,-u-.6,p),i.quad(-h,6.1,u,h,6.1,u,h,7.1,u,-h,7.1,u,f),i.quad(h,6.1,u,h,6.1,-u,h,6.3,-u,h,7.1,u,f),i.quad(-h,6.1,-u,-h,6.1,u,-h,7.1,u,-h,6.3,-u,f);const m=h-2.2,g=u-1.8;i.box(m-1.8,6.1,g-1.8,m+1.8,9.2,g+1.8,f,null),i.box(m-1.85,9.2,g-1.85,m+1.85,10.5,g+1.85,mr,null,null,.7),i.box(m-2.3,10.5,g-2.3,m+2.3,10.72,g+2.3,p),i.cyl(m,10.72,g,.06,.04,5.2,5,Mn),i.quad(m,15.6,g,m+1.9,15.6,g,m+1.9,14.5,g,m,14.5,g,As),i.quad(m,14.5,g,m+1.9,14.5,g,m+1.9,13.4,g,m,13.4,g,Rs);for(let E=0;E<4;E++){const _=-h+(E+.5)/4*a;i.quad(_+.9,3.9,-u-.05,_-.9,3.9,-u-.05,_-.9,5.3,-u-.05,_+.9,5.3,-u-.05,mr,E%2)}let M=u+14;for(;M<160&&t.metresAt(r.cx+n*M,r.cz+s*M)>1.75;)M+=3;const v=r.cx+n*M,S=r.cz+s*M,b=Math.atan2(n,s);i.frame(v,t.yAt(v,S),S,b);for(const E of[-1,1]){const _=E*32,y=t.yAt(i.wx(_,0),i.wz(_,0))-t.yAt(v,S);i.cyl(_,y,0,.05,.04,4.4,5,Mn),i.quad(_,y+4.4,0,_+.95,y+4.4,0,_+.95,y+3.1,0,_,y+3.1,0,As),i.quad(_,y+3.1,0,_+.95,y+3.1,0,_+.95,y+1.8,0,_,y+1.8,0,Rs)}for(const[E,_]of[[-1.5,-5.5],[1.5,-5.5],[-1.5,-8.5],[1.5,-8.5]])i.cyl(E,0,_,.04,.04,2.2,4,ye);i.tri(-1.7,2.2,-5.3,1.7,2.2,-5.3,0,3,-7,As),i.tri(1.7,2.2,-8.7,-1.7,2.2,-8.7,0,3,-7,As),i.tri(1.7,2.2,-5.3,1.7,2.2,-8.7,0,3,-7,Rs),i.tri(-1.7,2.2,-8.7,-1.7,2.2,-5.3,0,3,-7,Rs),i.blob(6,.35,-6,.95,.4,2.1,8,3,z(14238751),z(15755818)),i.box(5.6,.3,-7.9,6.4,.95,-7.5,z(2763308));for(let E=0;E<4;E++)i.box(-7+E*.5,.2,-7.2,-6.85+E*.5,.75,-4.6,E%2?Rs:z(3116992));return i.frame(),{beach:new q(v,t.yAt(v,S),S),seaward:[n,s]}}function Bu(i,t){const e=i.length/2;let n=0;for(let o=0;o<e;o++){const a=(o+1)%e;n+=i[o*2]*i[a*2+1]-i[a*2]*i[o*2+1]}const s=n>0?1:-1,r=[];for(let o=0;o<e;o++){const a=(o+e-1)%e,l=(o+1)%e;let c=i[o*2]-i[a*2],h=i[o*2+1]-i[a*2+1],u=i[l*2]-i[o*2],d=i[l*2+1]-i[o*2+1];const f=Math.hypot(c,h)||1,p=Math.hypot(u,d)||1;c/=f,h/=f,u/=p,d/=p;const x=-h*s,m=c*s;let g=x-d*s,M=m+u*s;const v=Math.hypot(g,M)||1;g/=v,M/=v;const S=t/Math.max(.45,g*x+M*m);r.push(i[o*2]+g*S,i[o*2+1]+M*S)}return r}function E1(i,t,e){i.frame(0,e.floorY,0,0);const n=z(11111014),s=z(15328470),r=z(9410458);let o=1/0;for(let h=0;h<e.poly.length;h+=2)o=Math.min(o,t.yAt(e.poly[h],e.poly[h+1]));const a=e.poly.length/2;i.walls(e.poly,o-e.floorY-.3,3.2,n),i.walls(e.poly,3.2,6.2,s);const l=Bu(e.poly,3.2),c=Bu(e.poly,4.4);for(let h=0;h<a;h++){const u=(h+1)%a;i.quad(e.poly[h*2],6.6,e.poly[h*2+1],e.poly[u*2],6.6,e.poly[u*2+1],l[u*2],6.05,l[u*2+1],l[h*2],6.05,l[h*2+1],r)}if(i.walls(e.poly,6.2,6.6,Gt(s,.92)),i.walls(l,6.05,7.9,mr,.8),i.cap(l,7.9,Gt(r,1.08)),i.walls(c,7.9,8.3,Gt(r,.9)),i.cap(c,8.3,r),e.street){const h=e.street;i.frame(h.x,e.floorY,h.z,h.heading),i.quad(.6,.3,.06,h.length-.6,.3,.06,h.length-.6,5.6,.06,.6,5.6,.06,mr,.9),i.box(h.length*.3,3.3,0,h.length*.7,3.5,3.4,z(14263361),void 0,Gt(z(14263361),.8)),i.box(h.length*.3+.2,0,3.1,h.length*.3+.4,3.3,3.3,ye,null),i.box(h.length*.7-.4,0,3.1,h.length*.7-.2,3.3,3.3,ye,null)}i.frame()}function pn(i,t,e,n,s,r=M1){const o=e.length,a=.22,l=s?o:o-1;for(let c=0;c<l;c++){const[h,u]=e[c],[d,f]=e[(c+1)%o];let p=-(f-u),x=d-h;const m=Math.hypot(p,x)||1;p=p/m*n*.5,x=x/m*n*.5;const g=t.yAt(h,u)+a,M=t.yAt(d,f)+a;i.quad(h+p,g,u+x,d+p,M,f+x,d-p,M,f-x,h-p,g,u-x,r)}}function w1(i,t,e,n,s){const r=[];for(let v=0;v<n.length;v+=2)r.push([n[v]/10,n[v+1]/10]);const[o,a]=Lo(n);let l=0,c=0,h=0;for(const[v,S]of r)l+=(v-o)**2,c+=(S-a)**2,h+=(v-o)*(S-a);const u=.5*Math.atan2(2*h,l-c),d=Math.cos(u),f=Math.sin(u);let p=0,x=0;for(const[v,S]of r)p=Math.max(p,Math.abs((v-o)*d+(S-a)*f)),x=Math.max(x,Math.abs(-(v-o)*f+(S-a)*d));p-=5,x-=5;const m=(v,S)=>[o+v*d-S*f,a+v*f+S*d],g=[];for(let v=0;v<72;v++){const S=v/72*Math.PI*2;g.push(m(Math.cos(S)*p,Math.sin(S)*x))}pn(t,e,g,.35,!0),pn(t,e,[m(-25,-25),m(25,-25),m(25,25),m(-25,25)],.3,!0);const M=v=>Array.from({length:24},(S,b)=>m(Math.cos(b/24*Math.PI*2)*v,Math.sin(b/24*Math.PI*2)*v));pn(t,e,M(5),.3,!0),pn(t,e,M(1.5),.3,!0);for(const v of[-1,1]){pn(t,e,[m(v*p,-3.2),m(v*(p-9),-3.2),m(v*(p-9),3.2),m(v*p,3.2)],.3,!1);const S=[];for(let b=-8;b<=8;b++){const E=b/8*1.05,_=v*(p-50*Math.cos(E)),y=50*Math.sin(E);(_/p)**2+(y/x)**2<1&&S.push(m(_,y))}S.length>2&&pn(t,e,S,.3,!1);for(const[b,E]of[[-3.2,9.5],[3.2,9.5],[-9.6,6.2],[9.6,6.2]]){const[_,y]=m(v*p,b);i.frame(_,e.yAt(_,y),y,0),i.cyl(0,0,0,.11,.09,E,6,Mn),i.cyl(0,0,0,.2,.2,1.6,6,b*b<12?z(2973608):z(12597806))}}if(s)for(const[v,S]of[[-.62,-1],[.62,-1],[-.62,1],[.62,1]]){const[b,E]=m(v*(p+6),S*(x+9));i.frame(b,e.yAt(b,E),E,Math.atan2(o-b,a-E)),i.cyl(0,0,0,.28,.16,24,6,ye),i.box(-1.7,24,-.2,1.7,25.3,.2,z(4869972)),i.quad(-1.6,24.1,.22,1.6,24.1,.22,1.6,25.2,.22,-1.6,25.2,.22,z(16774876),2.2)}i.frame()}function T1(i,t,e,n,s){const r=[];for(let S=0;S<n.length;S+=2)r.push([n[S]/10,n[S+1]/10]);if(r.length<4)return;if(s==="bowls"){pn(t,e,r,.5,!0,z(15328986));return}const[o,a,l,c]=r,h=Math.hypot(a[0]-o[0],a[1]-o[1])>Math.hypot(l[0]-a[0],l[1]-a[1]),u=h?o:a,d=h?a:l,f=h?l:c,p=h?c:o,x=(S,b)=>{const E=u[0]+(d[0]-u[0])*S,_=u[1]+(d[1]-u[1])*S,y=p[0]+(f[0]-p[0])*S,w=p[1]+(f[1]-p[1])*S;return[E+(y-E)*b,_+(w-_)*b]},m=.14;pn(t,e,[x(0,0),x(1,0),x(1,1),x(0,1)],m,!0),pn(t,e,[x(0,.125),x(1,.125)],m,!1),pn(t,e,[x(0,.875),x(1,.875)],m,!1),pn(t,e,[x(.23,.125),x(.23,.875)],m,!1),pn(t,e,[x(.77,.125),x(.77,.875)],m,!1),pn(t,e,[x(.23,.5),x(.77,.5)],m,!1);const g=x(.5,-.04),M=x(.5,1.04),v=e.yAt(g[0],g[1])+.2;i.frame(0,v,0,0),i.quad(g[0],0,g[1],M[0],0,M[1],M[0],.95,M[1],g[0],.95,g[1],z(2830131)),i.quad(g[0],.95,g[1],M[0],.95,M[1],M[0],1.05,M[1],g[0],1.05,g[1],Mn);for(const S of[g,M])i.cyl(S[0],0,S[1],.06,.06,1.1,5,ye);i.frame()}const ai=[14826299,15764004,15909424,5025616,3117008,8280002].map(z);function A1(i,t,e,n,s){const[r,o]=Lo(e),a=t.yAt(r,o)+.05,l=s()*Math.PI;i.frame(r,a,o,l);const c=(d,f,p,x)=>{for(const[m,g]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.cyl(d+m,0,f+g,.07,.07,p+2,5,z(8018492));i.box(d-1,p-.1,f-1,d+1,p,f+1,Xe,void 0,Le),i.cyl(d,p+2,f,1.5,0,1,4,x)};c(-2.2,0,1.5,ai[0]),c(2.2,0,2.1,ai[4]),i.box(-1.2,1.4,-.35,1.2,1.5,.35,Xe),i.quad(3.2,2.1,-.4,6.4,.15,-.4,6.4,.15,.4,3.2,2.1,.4,ai[2]),i.quad(-3.2,1.5,.4,-5.6,.15,.4,-5.6,.15,-.4,-3.2,1.5,-.4,ai[1]);const h=0,u=5.2;for(const d of[-2.2,2.2])i.quad(h+d,0,u-1.1,h+d+.08,0,u-1.1,h+d+.08,2.6,u,h+d,2.6,u,ye),i.quad(h+d,0,u+1.1,h+d+.08,0,u+1.1,h+d+.08,2.6,u,h+d,2.6,u,ye);i.box(h-2.25,2.55,u-.05,h+2.25,2.65,u+.05,ai[3]);for(const d of[-1.1,0,1.1])i.box(h+d-.25,.5,u-.1,h+d+.25,.56,u+.1,z(2763308)),i.box(h+d-.24,.56,u-.01,h+d-.22,2.55,u+.01,ye,null),i.box(h+d+.22,.56,u-.01,h+d+.24,2.55,u+.01,ye,null);if(n){i.cyl(-6.5,0,-5.5,.09,.07,5.2,5,ye);for(let d=0;d<6;d++){const f=d/6*Math.PI*2,p=-6.5+Math.cos(f)*3.2,x=-5.5+Math.sin(f)*3.2;i.quad(p-.04,0,x,p+.04,0,x,-6.46,5.1,-5.5,-6.54,5.1,-5.5,z(3104672))}for(let d=0;d<6;d++){const f=-9+d*3.4,p=ai[d],x=4.6,m=3.3;i.cyl(f,0,-11,.08,.07,x,5,ye),i.cyl(f+1.7,0,-7.2,.08,.07,m,5,ye),i.tri(f,x,-11,f+3.4,x,-11,f+1.7,m,-7.2,p)}i.cyl(11.399999999999999,0,-11,.08,.07,4.6,5,ye),i.cyl(6.5,.3,5.5,1.3,1.3,.12,10,ai[5],ai[2]),i.cyl(6.5,0,5.5,.1,.1,1.1,5,ye);for(let d=0;d<3;d++)i.blob(9.5+d*1.6,.55,-1.5,.3,.3,.55,5,3,ai[(d*2+1)%6])}i.frame()}function R1(i,t,e){const n=[];for(let u=0;u<e.length;u+=2)n.push([e[u]/10,e[u+1]/10]);const[s,r]=Lo(e),o=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1])>Math.hypot(n[2][0]-n[1][0],n[2][1]-n[1][1])?[n[0],n[1]]:[n[1],n[2]],a=Math.atan2(o[1][0]-o[0][0],o[1][1]-o[0][1]),l=Math.hypot(o[1][0]-o[0][0],o[1][1]-o[0][1])/2-1;i.frame(s,t.yAt(s,r)+.1,r,a);const c=z(13092286),h=Gt(c,.88);for(const u of[-1,1]){const d=u*l,f=[[0,0],[1.4,.35],[2.4,1.1],[3,2]];for(let p=0;p<3;p++){const[x,m]=f[p],[g,M]=f[p+1],v=d-u*(3-x),S=d-u*(3-g);u>0?i.quad(-4,m,v,4,m,v,4,M,S,-4,M,S,p%2?c:h):i.quad(4,m,v,-4,m,v,-4,M,S,4,M,S,p%2?c:h)}i.box(-4,0,Math.min(d,d+u*1.2),4,2,Math.max(d,d+u*1.2),h,c)}i.box(-1.5,0,-1.2,1.5,.45,1.2,h,c),i.quad(-1.5,.45,1.2,1.5,.45,1.2,1.5,0,3,-1.5,0,3,c),i.quad(1.5,.45,-1.2,-1.5,.45,-1.2,-1.5,0,-3,1.5,0,-3,c),i.box(3.2,.45,-2.5,3.28,.5,2.5,ye),i.frame()}function C1(i,t){const e=t.obb,n=e.w>=e.d,s=(n?e.w:e.d)/2;i.frame(e.cx,t.floorY,e.cz,e.heading);const r=n?s+1.2:0,o=n?0:s+1.2,a=z(15262418);i.box(r-1.4,-1,o-1.4,r+1.4,t.wallH+4.6,o+1.4,a,null),i.cyl(r,t.wallH+4.6,o,2.1,0,4.2,4,z(5922659)),i.box(r-.07,t.wallH+8.8,o-.07,r+.07,t.wallH+10.6,o+.07,Mn),i.box(r-.5,t.wallH+9.8,o-.07,r+.5,t.wallH+9.95,o+.07,Mn),i.frame()}function P1(i,t,e,n){i.frame(e,t.yAt(e,n),n,.4);const s=46;for(let r=0;r<6;r++){const o=r/6*s,a=1.5-r/6*1.1,l=1.5-(r+1)/6*1.1;i.cyl(0,o,0,a,l,s/6,3,r%2?Mn:As)}i.cyl(0,s,0,.08,.05,5,4,ye),i.blob(0,s+5.1,0,.3,.3,.3,5,3,z(16726832),void 0,2.5);for(const[r,o]of[[.3,38],[2.4,35],[4.4,40]])i.cyl(Math.cos(r)*.9,o,Math.sin(r)*.9,.55,.55,.35,8,Mn,Mn);i.box(2.5,0,-1.5,5.5,2.6,1.5,z(13619919),z(9080716)),i.frame()}function L1(i,t,e,n,s){const r=s.nearest(e,n,60),o=r?Math.atan2(r.px-e,r.pz-n):0;i.frame(e,t.yAt(e,n)+.1,n,o);const a=z(3116874);for(const[l,c]of[[-6,3.5],[6,3.5],[-6,9.5],[6,9.5]])i.box(l-.2,0,c-.2,l+.2,5,c+.2,Mn,null);i.box(-8,5,2,8,5.25,11,Mn,z(14277590),z(15921902),.5),i.box(-8.05,5.25,1.95,8.05,5.9,11.05,a,z(14277590));for(const l of[-4,0,4])i.box(l-1.3,0,6.2,l+1.3,.2,6.8,Ts),i.box(l-.4,.2,6.25,l+.4,1.7,6.75,Mn,a);i.frame()}function D1(i,t,e,n,s){for(let r=0;r<3;r++){const o=e+(s()-.5)*16,a=n+(s()-.5)*16;i.frame(o,t.yAt(o,a)+.05,a,s()*Math.PI),i.box(-1,.7,-.4,1,.78,.4,Xe,void 0,Le),i.box(-1,.4,-.85,1,.46,-.6,Xe,void 0,Le),i.box(-1,.4,.6,1,.46,.85,Xe,void 0,Le),i.box(-.75,0,-.7,-.65,.7,.7,ye,null),i.box(.65,0,-.7,.75,.7,.7,ye,null)}i.frame()}function I1(i){if(!i.hasDetail)return null;const{town:t,hf:e,roads:n,paths:s}=i,r=new ne,o=Pe(4411),a=[12597547,3108687,15921902,3426654,9268810,14266938,10134443].map(z),l=z(7301730),c=z(3103290),h=[z(13115434),z(15254046)],u=t.houses,d=Au(t),f=[];for(let E=0;E<u.length;E+=Cl)u[E+5]!==1&&f.push(u[E]/4,u[E+1]/4);const p=f.length;for(const[E,_]of P_)f.push(E,_);for(let E=0;E<f.length;E+=2){const _=f[E],y=f[E+1];if(!i.isDetail(_,y)||i.isClear(_,y))continue;const w=n.nearest(_,y,45),T=o()<.5?-1:1,C=T*(2.5+o()*2.5),D=Math.floor(o()*a.length),O=o()<.7;if(!w||E<p&&d(_,y))continue;const P=w.cls<=3?6.4:3.6;if(w.dist<P+3)continue;const G=(_-w.px)/w.dist,F=(y-w.pz)/w.dist,k=-F,V=G,N=Math.atan2(G,F),L=w.px+G*P+k*C,U=w.pz+F*P+V*C;if(!i.isClear(L,U)&&(r.frame(L,e.yAt(L,U),U,N),r.box(-.05,0,-.05,.05,.95,.05,l),r.box(-.17,.95,-.22,.17,1.22,.22,a[D],Gt(a[D],.8)),O)){const $=w.px+G*(P-1.1)+k*(C+T*1.5),it=w.pz+F*(P-1.1)+V*(C+T*1.5);r.frame($,e.yAt($,it),it,N),h.forEach((Y,X)=>{r.box(X*.72-.28,0,-.33,X*.72+.28,.96,.33,c),r.box(X*.72-.3,.96,-.36,X*.72+.3,1.04,.36,Y)})}}const x=z(7034692),m=z(5917242),g=z(2829102),M=z(14276303),v=42,S=new ne;for(const E of s){if(E.cls>3||E.flags)continue;const _=E.pts.length/3;let y=v*.4,w=null;for(let T=1;T<_;T++){const C=E.pts[T*3-3],D=E.pts[T*3-1],O=E.pts[T*3],P=E.pts[T*3+2],G=Math.hypot(O-C,P-D);if(y+=G,y<v)continue;y=0;const F=(O-C)/(G||1),k=(P-D)/(G||1),V=E.width/2+2.5,N=O+k*V,L=P-F*V;if(!i.isDetail(N,L)||i.isClear(N,L)||!e.inside(N,L,20)){w=null;continue}const U=e.yAt(N,L);S.frame(N,U,L,Math.atan2(F,k)),S.cyl(0,0,0,.15,.1,9.2,6,x),S.box(-1.15,8.45,-.06,1.15,8.58,.06,m);for(const it of[-.95,0,.95])S.box(it-.04,8.58,-.04,it+.04,8.72,.04,M);const $={x:N,y:U+8.72,z:L,nx:k,nz:-F};if(w&&Math.hypot($.x-w.x,$.z-w.z)<v*1.8){S.frame();for(const it of[-.95,0,.95]){const Y=w.x+w.nx*it,X=w.z+w.nz*it,K=$.x+$.nx*it,tt=$.z+$.nz*it,nt=(Y+K)/2,ht=(X+tt)/2,Nt=(w.y+$.y)/2-.5;for(const[rt,ft,Dt,Tt,Vt,Ft]of[[Y,w.y,X,nt,Nt,ht],[nt,Nt,ht,K,$.y,tt]])S.quad(rt,ft,Dt,Tt,Vt,Ft,Tt,Vt+.035,Ft,rt,ft+.035,Dt,g),S.quad(rt,ft,Dt,Tt,Vt,Ft,Tt+$.nx*.035,Vt,Ft+$.nz*.035,rt+$.nx*.035,ft,Dt+$.nz*.035,g)}}w=$}}if(!r.vertexCount&&!S.vertexCount)return null;const b=new Jt(r.build(),Ss());if(b.castShadow=!0,b.receiveShadow=!0,b.name="street-detail",S.vertexCount){const E=new Jt(S.build(),Ss());E.castShadow=!1,E.receiveShadow=!0,E.name="power-poles",b.add(E)}return b}function N1(i){const{town:t,hf:e,paths:n}=i,s=120,r=new Map,o=t.houses;for(let C=0;C<o.length;C+=Cl){const D=Math.floor(o[C]/4/s)*4096+Math.floor(o[C+1]/4/s)+8390656;r.set(D,(r.get(D)??0)+1)}const[a,l]=vn(t.meta,-38.63385,145.7285),c=(C,D)=>(r.get(Math.floor(C/s)*4096+Math.floor(D/s)+2048*4097)??0)>=4||Math.hypot(C-a,D-l)<380,h=[];for(const C of n){if(C.cls>2||C.flags)continue;const D=C.cls===0?48:58,O=C.pts.length/3;let P=D*.5,G=1;for(let F=1;F<O;F++){const k=C.pts[F*3-3],V=C.pts[F*3-1],N=C.pts[F*3],L=C.pts[F*3+2],U=Math.hypot(N-k,L-V);if(P+=U,P<D)continue;P=0,G=-G;const $=(N-k)/(U||1),it=(L-V)/(U||1),Y=C.width/2+1.6,X=N-it*Y*G,K=L+$*Y*G;!c(X,K)||!e.inside(X,K,20)||i.isClear(X,K)||h.push(X,e.yAt(X,K),K,Math.atan2(it*G,-$*G))}}const u=new ne,d=z(9278358);u.cyl(0,0,0,.11,.07,8.2,5,d),u.box(-.05,8.1,0,.05,8.22,2.2,d),u.box(-.22,8,1.7,.22,8.14,2.5,z(5922659)),u.quad(-.2,7.99,2.48,.2,7.99,2.48,.2,7.99,1.72,-.2,7.99,1.72,z(16773320),3);const f=h.length/4,p=new je(u.build(),Ss(),f),x=document.createElement("canvas");x.width=x.height=64;const m=x.getContext("2d"),g=m.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,"rgba(255,214,150,0.85)"),g.addColorStop(.45,"rgba(255,196,120,0.32)"),g.addColorStop(1,"rgba(255,180,100,0)"),m.fillStyle=g,m.fillRect(0,0,64,64);const M=new ol(x);M.colorSpace=Ue;const v=new Hn(34,34);v.rotateX(-Math.PI/2);const S=new Ln({map:M,transparent:!0,opacity:0,blending:Bo,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),b=new je(v,S,f);b.renderOrder=3;const E=new ie,_=new Tn,y=new q(0,1,0),w=new q(1,1,1),T=new q;for(let C=0;C<f;C++){const D=h[C*4],O=h[C*4+1],P=h[C*4+2],G=h[C*4+3];_.setFromAxisAngle(y,G),p.setMatrixAt(C,E.compose(T.set(D,O,P),_,w));const F=D+Math.sin(G)*2.1,k=P+Math.cos(G)*2.1;b.setMatrixAt(C,E.compose(T.set(F,e.yAt(F,k)+.5,k),_.identity(),w))}return p.castShadow=!1,p.computeBoundingSphere(),b.computeBoundingSphere(),b.onBeforeRender=()=>{S.opacity=_o.value*.9},b.visible=!0,{lights:p,pools:b,poolMat:S}}function U1(i){const{town:t,hf:e,footprints:n,roads:s}=i,r=new rn;r.name="landmarks";const o=new ne,a=new ne,l=Pe(20261111),c={group:r,nightMaterials:[]};t.piers[0]&&(c.jetty=S1(o,e,t.piers[0]));for(const[y,w]of[[-38.63578,145.73393],[-38.63595,145.73085]]){const[T,C]=vn(t.meta,y,w);y1(o,e,T,C)}const h=n.find(y=>y.name==="Inverloch Surf Life Saving Club");h&&(c.surf=b1(o,e,h));const u=n.find(y=>y.name==="The Hub");u&&E1(o,e,u);for(const y of n)y.kind==="church"&&C1(o,y);let d=0;for(const y of t.pitches)y.s==="australian_football"?w1(o,a,e,y.p,d++===0):y.s==="tennis"||y.s==="bowls"?T1(o,a,e,y.p,y.s):y.s==="skateboard"&&R1(o,e,y.p);const[f,p]=vn(t.meta,-38.63529,145.72876);for(const y of t.playgrounds){const[w,T]=Lo(y);A1(o,e,y,Math.hypot(w-f,T-p)<60,l)}const[x,m]=vn(t.meta,-38.62462,145.71011);P1(o,e,x,m);const[g,M]=vn(t.meta,-38.63161,145.72943);L1(o,e,g,M,s);for(const[y,w]of[[-38.6358,145.72885],[-38.63447,145.72923],[-38.63545,145.72875]]){const[T,C]=vn(t.meta,y,w);D1(o,e,T,C,l)}const v=new Jt(o.build(),Ss());v.castShadow=!0,v.receiveShadow=!0,r.add(v);const S=a.build();S.deleteAttribute("glow");const b=new Jt(S,vo(new Ln({vertexColors:!0,side:Ie,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})));r.add(b);const E=I1(i);E&&r.add(E);const _=N1(i);return r.add(_.lights,_.pools),c.nightMaterials.push(_.poolMat),c}const F1=qt.lights_fragment_begin.replace("getDirectionalLightInfo( directionalLight, directLight );",`getDirectionalLightInfo( directionalLight, directLight );
    // The atmosphere owns the scene's only directional light.
    directLight.color *= cloudSunlight(vCoastalWorld);`),O1=`
  vec4 coastalPosition = vec4(transformed, 1.0);
  #ifdef USE_BATCHING
    coastalPosition = batchingMatrix * coastalPosition;
  #endif
  #ifdef USE_INSTANCING
    coastalPosition = instanceMatrix * coastalPosition;
  #endif
  vCoastalWorld = (modelMatrix * coastalPosition).xyz;
`,z1=`
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
`;class B1{constructor(t,e,n,s,r,o,a){Z(this,"prepared",new WeakSet);Z(this,"inlet",{value:new q});Z(this,"mist");this.color=n,this.clouds=r,this.sunDir=o,this.cloudShadowStrength=a,this.inlet.value.set(t,0,e),this.mist={value:Number(s)}}setMist(t){this.mist.value=Number(t)}setWaterLevel(t){this.inlet.value.y=t}add(t){t.traverse(e=>{const{material:n}=e;if(n)for(const s of Array.isArray(n)?n:[n])this.prepare(s)})}addWater(t){this.prepare(t.material,!0)}prepare(t,e=!1){if(!t.toneMapped||this.prepared.has(t)||t instanceof on&&!e)return;this.prepared.add(t);const n=t.onBeforeCompile,s=t.customProgramCacheKey();t.customProgramCacheKey=()=>s+(e?":coastal-water-cloud":":coastal-haze-cloud"),t.onBeforeCompile=(r,o)=>{n.call(t,r,o),r.uniforms.uCoastalColor=this.color,r.uniforms.uInletCenter=this.inlet,r.uniforms.uCoastalMist=this.mist;const a=e||t instanceof Dn||t instanceof so||t instanceof _p||t instanceof vp;a&&Object.assign(r.uniforms,this.clouds.uniforms,{uCloudSunDir:this.sunDir,uCloudShadowStrength:this.cloudShadowStrength});const l=(a?pu+h_:"")+z1;e||(r.vertexShader=`varying vec3 vCoastalWorld;
`+r.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
`+O1));const c=e?r.fragmentShader.replace("varying vec3 vW;","").replace("col += uSunColor *",`float sunlight = cloudSunlight(vW);
          col *= mix(1.0, sunlight, 0.22);
          col += uSunColor * sunlight *`):a?r.fragmentShader.replace("#include <lights_fragment_begin>",F1):r.fragmentShader;r.fragmentShader=(e?l.replace(/vCoastalWorld/g,"vW"):l)+c.replace("#include <tonemapping_fragment>",`gl_FragColor.rgb = coastalLight(gl_FragColor.rgb);
#include <tonemapping_fragment>`)},t.needsUpdate=!0}}const Gu=330;function Wi(i,t){let e=Math.imul(i^t,73244475);return e=Math.imul(e^e>>>16,73244475),((e^e>>>16)>>>0)/4294967296}function Cs(i,t){const e=Math.min(1,Math.max(0,i/t));return e*e*(3-2*e)}class G1{constructor(){Z(this,"window",0);Z(this,"age",0);Z(this,"duration",0);Z(this,"rain",0);Z(this,"wetness",0);Z(this,"cover",.38);Z(this,"storm",!1)}update(t){this.window=Math.floor(t/Gu);const e=90+48*Wi(this.window,17);this.duration=60+22*Wi(this.window,29),this.age=t-this.window*Gu-e;const n=this.age-this.duration,s=Cs(this.age+42,42)*(1-Cs(n,36));this.storm=this.window%4===0,this.cover=.38+(this.storm?.6:.4)*s;const r=this.storm?.97:.55+.15*Wi(this.window,41);this.rain=r*Cs(this.age,9)*(1-Cs(n+14,14)),this.wetness=Cs(this.age,23)*(1-Cs(n,68))}}const Gl=[18,45],Do=8;class k1{constructor(t,e,n){Z(this,"line");Z(this,"vertices",new Float32Array((Do+1)*2*3));Z(this,"center",new Lt);Z(this,"key");Z(this,"previousTime");Z(this,"arrival");this.inletX=e,this.inletZ=n;const s=new Ae;s.setAttribute("position",new Ee(this.vertices,3).setUsage(Gs));const r=[];for(let o=0;o<Do;o++){const a=2*o;r.push(a,a+1,a+2,a+1,a+3,a+2)}s.setIndex(r),this.line=new Jt(s,new Ln({color:15002367,transparent:!0,depthWrite:!1,side:Ie})),this.line.material.forceSinglePass=!0,this.line.name="inlet lightning",this.line.visible=!1,t.add(this.line)}shape(t,e){const n=this.inletX+640*(Wi(t,3)-.5),s=this.inletZ+490*(Wi(t,13)-.5);this.center.set(n,s);const r=Math.atan2(e.x-n,e.z-s),o=Math.cos(r),a=-Math.sin(r);for(let l=0;l<=Do;l++){const c=l/Do,h=n+34*c+33*(Wi(t,60+l)-.5),u=s+18*(Wi(t,30+l)-.5),d=422-400*c;for(let f=0;f<2;f++){const p=(f?1:-1)*(1.9-c*1.1),x=3*(2*l+f);this.vertices[x]=h+p*o,this.vertices[x+1]=d,this.vertices[x+2]=u+p*a}}this.line.geometry.attributes.position.needsUpdate=!0,this.line.geometry.computeBoundingSphere()}update(t,e,n,s){const r=this.previousTime;this.previousTime=t,this.line.visible=!1;const o=r!==void 0&&t>=r&&t-r<1.5&&!document.hidden;if(o||(this.arrival=void 0),!e.storm||e.age<Gl[0])return 0;const a=e.age>=Gl[1]?1:0,l=e.age-Gl[a],c=e.window*2+a;if(c!==this.key&&(this.key=c,this.shape(c,n),o&&l<.45)){const u=Math.hypot(this.center.x-n.x,110-n.y,this.center.y-n.z);u<6500&&(this.arrival=t-l+Math.max(.35,u/343))}if(this.arrival!==void 0&&t>=this.arrival){this.arrival=void 0;const u=Math.hypot(this.center.x-n.x,this.center.y-n.z);s==null||s(Qt.clamp(1-u/7e3,.1,1))}const h=Math.max(0,1-l/.32);return this.line.visible=h>0,this.line.material.opacity=h,h}dispose(){this.line.removeFromParent(),this.line.geometry.dispose(),this.line.material.dispose()}}const ku="dmFyIFY9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBIPShULHAseik9PnAgaW4gVD9WKFQscCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6en0pOlRbcF09ejt2YXIgTT0oVCxwLHopPT5IKFQsdHlwZW9mIHAhPSJzeW1ib2wiP3ArIiI6cCx6KTsoZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgcHtjb25zdHJ1Y3RvcihlLG4sdCxyLHMsaCxvLGEpe00odGhpcywibngiKTtNKHRoaXMsIm56Iik7TSh0aGlzLCJ5Iik7TSh0aGlzLCJ4TWluIik7TSh0aGlzLCJ6TWluIik7TSh0aGlzLCJ4TWF4Iik7TSh0aGlzLCJ6TWF4Iik7TSh0aGlzLCJkeCIpO00odGhpcywiZHoiKTtNKHRoaXMsImNlbGxYIik7TSh0aGlzLCJjZWxsWiIpO2lmKHRoaXMucmF3PWUsdGhpcy5leHBvc3VyZT1uLHRoaXMudz10LHRoaXMuaD1yLHRoaXMuc2l6ZVg9cyx0aGlzLnNpemVaPWgsdGhpcy5jZWxsWD1zL3QsdGhpcy5jZWxsWj1oL3IsdGhpcy5ueD1NYXRoLmZsb29yKCh0LTEpL28pKzEsdGhpcy5uej1NYXRoLmZsb29yKChyLTEpL28pKzEsdGhpcy5keD10aGlzLmNlbGxYKm8sdGhpcy5kej10aGlzLmNlbGxaKm8sdGhpcy54TWluPS1zLzIrdGhpcy5jZWxsWC8yLHRoaXMuek1pbj0taC8yK3RoaXMuY2VsbFovMix0aGlzLnhNYXg9dGhpcy54TWluKyh0aGlzLm54LTEpKnRoaXMuZHgsdGhpcy56TWF4PXRoaXMuek1pbisodGhpcy5uei0xKSp0aGlzLmR6LHRoaXMueT1hPz9uZXcgRmxvYXQzMkFycmF5KHRoaXMubngqdGhpcy5ueiksIWEpZm9yKGxldCBkPTA7ZDx0aGlzLm56O2QrKylmb3IobGV0IGM9MDtjPHRoaXMubng7YysrKXRoaXMueVtkKnRoaXMubngrY109ZVtkKm8qdCtjKm9dKjEuNX15QXQoZSxuKXtsZXQgdD0oZS10aGlzLnhNaW4pL3RoaXMuZHgscj0obi10aGlzLnpNaW4pL3RoaXMuZHo7dDwwP3Q9MDp0PnRoaXMubngtMS4wMDAxJiYodD10aGlzLm54LTEuMDAwMSkscjwwP3I9MDpyPnRoaXMubnotMS4wMDAxJiYocj10aGlzLm56LTEuMDAwMSk7Y29uc3Qgcz10fDAsaD1yfDAsbz10LXMsYT1yLWgsZD1oKnRoaXMubngrcyxjPXRoaXMueVtkXSxsPXRoaXMueVtkKzFdLGY9dGhpcy55W2QrdGhpcy5ueF0sdT10aGlzLnlbZCt0aGlzLm54KzFdO3JldHVybiBvK2E8PTE/YysobC1jKSpvKyhmLWMpKmE6dSsoZi11KSooMS1vKSsobC11KSooMS1hKX1iaWxpbmVhcihlLG4sdCl7bGV0IHI9KG4rdGhpcy5zaXplWC8yKS90aGlzLmNlbGxYLS41LHM9KHQrdGhpcy5zaXplWi8yKS90aGlzLmNlbGxaLS41O3I8MD9yPTA6cj50aGlzLnctMS4wMDAxJiYocj10aGlzLnctMS4wMDAxKSxzPDA/cz0wOnM+dGhpcy5oLTEuMDAwMSYmKHM9dGhpcy5oLTEuMDAwMSk7Y29uc3QgaD1yfDAsbz1zfDAsYT1yLWgsZD1zLW8sYz1vKnRoaXMudytoO3JldHVybihlW2NdKigxLWEpK2VbYysxXSphKSooMS1kKSsoZVtjK3RoaXMud10qKDEtYSkrZVtjK3RoaXMudysxXSphKSpkfW1ldHJlc0F0KGUsbil7cmV0dXJuIHRoaXMuYmlsaW5lYXIodGhpcy5yYXcsZSxuKX1leHBvc3VyZUF0KGUsbil7cmV0dXJuIHRoaXMuYmlsaW5lYXIodGhpcy5leHBvc3VyZSxlLG4pfWluc2lkZShlLG4sdD0wKXtyZXR1cm4gZT50aGlzLnhNaW4rdCYmZTx0aGlzLnhNYXgtdCYmbj50aGlzLnpNaW4rdCYmbjx0aGlzLnpNYXgtdH19Y29uc3Qgej0xMjg7ZnVuY3Rpb24gRChpLGUsbil7Y29uc3R7bng6dCxuejpyfT1pLHM9TWF0aC5taW4oeisxLHQtZSksaD1NYXRoLm1pbih6KzEsci1uKSxvPW5ldyBGbG9hdDMyQXJyYXkocypoKjMpLGE9bmV3IEZsb2F0MzJBcnJheShzKmgqMyksZD1uZXcgRmxvYXQzMkFycmF5KHMqaCoyKTtmb3IobGV0IGY9bjtmPG4raDtmKyspZm9yKGxldCB1PWU7dTxlK3M7dSsrKXtjb25zdCB3PShmLW4pKnMrdS1lLHg9aS54TWluK3UqaS5keCx5PWkuek1pbitmKmkuZHo7b1t3KjNdPXgsb1t3KjMrMV09aS55W2YqdCt1XSxvW3cqMysyXT15LGRbdyoyXT0oeCtpLnNpemVYLzIpL2kuc2l6ZVgsZFt3KjIrMV09MS0oeStpLnNpemVaLzIpL2kuc2l6ZVo7Y29uc3Qgdj1pLnlbZip0K01hdGgubWF4KHUtMSwwKV0sRT1pLnlbZip0K01hdGgubWluKHUrMSx0LTEpXSxiPWkueVtNYXRoLm1heChmLTEsMCkqdCt1XSxBPWkueVtNYXRoLm1pbihmKzEsci0xKSp0K3VdLG09KEUtdikvKDIqaS5keCksaz0oQS1iKS8oMippLmR6KSxnPU1hdGguaHlwb3QobSwxLGspO2FbdyozXT0tbS9nLGFbdyozKzFdPTEvZyxhW3cqMysyXT0tay9nfWNvbnN0IGM9bmV3IFVpbnQxNkFycmF5KChzLTEpKihoLTEpKjYpO2xldCBsPTA7Zm9yKGxldCBmPTA7ZjxoLTE7ZisrKWZvcihsZXQgdT0wO3U8cy0xO3UrKyl7Y29uc3Qgdz1mKnMrdSx4PXcrMSx5PXcrcyx2PXkrMTtjW2wrK109dyxjW2wrK109eSxjW2wrK109eCxjW2wrK109eCxjW2wrK109eSxjW2wrK109dn1yZXR1cm57cG9zOm8sbm9yOmEsdXY6ZCxpZHg6Y319ZnVuY3Rpb24gUyhpKXtjb25zdCBlPVtdO2ZvcihsZXQgbj0wO248aS5uei0xO24rPXopZm9yKGxldCB0PTA7dDxpLm54LTE7dCs9eillLnB1c2goRChpLHQsbikpO3JldHVybiBlfWZ1bmN0aW9uIFUoaSl7Y29uc3QgZT1hdG9iKGkpLG49bmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpO2ZvcihsZXQgdD0wO3Q8ZS5sZW5ndGg7dCsrKW5bdF09ZS5jaGFyQ29kZUF0KHQpO3JldHVybiBuZXcgSW50MTZBcnJheShuLmJ1ZmZlciwwLG4ubGVuZ3RoPj4xKX1hc3luYyBmdW5jdGlvbiBCKGkpe2NvbnN0IGU9bmV3IFVpbnQ4QXJyYXkoaSksbj1uZXcgRGF0YVZpZXcoaSk7bGV0IHQ9OCxyPTAscz0wLGg9MCxvPTAsYT0wO2NvbnN0IGQ9W107Zm9yKDt0PGUubGVuZ3RoOyl7Y29uc3QgeD1uLmdldFVpbnQzMih0KSx5PVN0cmluZy5mcm9tQ2hhckNvZGUoZVt0KzRdLGVbdCs1XSxlW3QrNl0sZVt0KzddKTtpZih5PT09IklIRFIiKXI9bi5nZXRVaW50MzIodCs4KSxzPW4uZ2V0VWludDMyKHQrMTIpLGg9ZVt0KzE2XSxvPWVbdCsxN10sYT1lW3QrMjBdO2Vsc2UgaWYoeT09PSJJREFUIilkLnB1c2goZS5zdWJhcnJheSh0KzgsdCs4K3gpKTtlbHNlIGlmKHk9PT0iSUVORCIpYnJlYWs7dCs9MTIreH1pZihoIT09OHx8byE9PTImJm8hPT02fHxhKXRocm93IG5ldyBFcnJvcigiVW5zdXBwb3J0ZWQgdGVycmFpbiBpbWFnZSBmb3JtYXQiKTtjb25zdCBjPW89PT0yPzM6NCxsPW5ldyBCbG9iKGQpLnN0cmVhbSgpLnBpcGVUaHJvdWdoKG5ldyBEZWNvbXByZXNzaW9uU3RyZWFtKCJkZWZsYXRlIikpLGY9bmV3IFVpbnQ4QXJyYXkoYXdhaXQgbmV3IFJlc3BvbnNlKGwpLmFycmF5QnVmZmVyKCkpLHU9cipjLHc9bmV3IFVpbnQ4QXJyYXkodSpzKTtmb3IobGV0IHg9MDt4PHM7eCsrKXtjb25zdCB5PWZbeCoodSsxKV0sdj14Kih1KzEpKzEsRT14KnU7Zm9yKGxldCBiPTA7Yjx1O2IrKyl7Y29uc3QgQT1iPj1jP3dbRStiLWNdOjAsbT14PjA/d1tFLXUrYl06MCxrPWI+PWMmJng+MD93W0UtdStiLWNdOjA7bGV0IGc9Zlt2K2JdO2lmKHk9PT0xKWcrPUE7ZWxzZSBpZih5PT09MilnKz1tO2Vsc2UgaWYoeT09PTMpZys9QSttPj4xO2Vsc2UgaWYoeT09PTQpe2NvbnN0IEY9TWF0aC5hYnMobS1rKSxJPU1hdGguYWJzKEEtayksWj1NYXRoLmFicyhBK20tMiprKTtnKz1GPD1JJiZGPD1aP0E6STw9Wj9tOmt9d1tFK2JdPWcmMjU1fX1yZXR1cm57d2lkdGg6cixoZWlnaHQ6cyxjaGFubmVsczpjLGRhdGE6d319YXN5bmMgZnVuY3Rpb24gcShpLGUsbil7Y29uc3RbdCxyXT1hd2FpdCBQcm9taXNlLmFsbChbZmV0Y2goaS50b3duLHtzaWduYWw6bn0pLnRoZW4obD0+e2lmKCFsLm9rKXRocm93IG5ldyBFcnJvcigiQ291bGQgbm90IGxvYWQgdGhlIHRvd24gZGF0YSIpO3JldHVybiBsLmpzb24oKX0pLnRoZW4obD0+KGUoIlN0cmVldHMgYW5kIGJ1aWxkaW5ncyIpLGwpKSxmZXRjaChpLmhlaWdodCx7c2lnbmFsOm59KS50aGVuKGw9PntpZighbC5vayl0aHJvdyBuZXcgRXJyb3IoIkNvdWxkIG5vdCBsb2FkIHRoZSB0ZXJyYWluIik7cmV0dXJuIGwuYXJyYXlCdWZmZXIoKX0pLnRoZW4oQikudGhlbihsPT4oZSgiVGVycmFpbiIpLGwpKV0pO2lmKG4uYWJvcnRlZCl0aHJvdyBuLnJlYXNvbjtjb25zdHttZXRhOnN9PXQsaD1yLndpZHRoKnIuaGVpZ2h0LG89bmV3IEZsb2F0MzJBcnJheShoKSxhPW5ldyBGbG9hdDMyQXJyYXkoaCksZD1yLmNoYW5uZWxzO2ZvcihsZXQgbD0wO2w8aDtsKyspb1tsXT0oci5kYXRhW2wqZF08PDh8ci5kYXRhW2wqZCsxXSkvcy5oZWlnaHRTY2FsZS1zLmhlaWdodE9mZnNldCxhW2xdPXIuZGF0YVtsKmQrMl0vMjU1O2NvbnN0IGM9bmV3IHAobyxhLHMuZ3JpZFswXSxzLmdyaWRbMV0scy5zaXplWzBdLHMuc2l6ZVsxXSxpLnRlcnJhaW5TdGVwKTtyZXR1cm57dG93bjp7Li4udCxob3VzZXM6VSh0LmhvdXNlcyksY2FiaW5zOlUodC5jYWJpbnMpLGNhcnM6VSh0LmNhcnMpLHRyZWVzOlUodC50cmVlcyl9LGhlaWdodHM6byxleHBvc3VyZTphLHN1cmZhY2U6Yy55LHRlcnJhaW5UaWxlczpTKGMpfX1jb25zdCBqPXNlbGYsQz1uZXcgTWFwO2Z1bmN0aW9uIFgoaSxlPVtdKXtqLnBvc3RNZXNzYWdlKGksZSl9ZnVuY3Rpb24gTChpKXtyZXR1cm4gaS5tYXAoZT0+ZS5idWZmZXIpfWoub25tZXNzYWdlPWFzeW5jIGk9Pnt2YXIgcztjb25zdCBlPWkuZGF0YSx7aWQ6bn09ZTtpZigiY2FuY2VsImluIGUpeyhzPUMuZ2V0KG4pKT09bnVsbHx8cy5hYm9ydCgpO3JldHVybn1jb25zdCB0PW5ldyBBYm9ydENvbnRyb2xsZXIse3NpZ25hbDpyfT10O0Muc2V0KG4sdCk7dHJ5e2NvbnN0e2pvYjpofT1lO2lmKGgua2luZD09PSJ3b3JsZCIpe2NvbnN0IG89YXdhaXQgcShoLnNvdXJjZSx1PT5YKHtpZDpuLHByb2dyZXNzOnV9KSxyKSx7dG93bjphLGhlaWdodHM6ZCxleHBvc3VyZTpjLHN1cmZhY2U6bCx0ZXJyYWluVGlsZXM6Zn09bztYKHtpZDpuLHZhbHVlOm99LEwoW2QsYyxsLGEuaG91c2VzLGEuY2FiaW5zLGEuY2FycyxhLnRyZWVzLC4uLmYuZmxhdE1hcCgoe3Bvczp1LG5vcjp3LHV2OngsaWR4Onl9KT0+W3Usdyx4LHldKV0pKX1lbHNle2NvbnN0IG89YXdhaXQgZmV0Y2goaC51cmwse3NpZ25hbDpyfSk7aWYoIW8ub2spdGhyb3cgbmV3IEVycm9yKCJDb3VsZCBub3QgbG9hZCBncm91bmQgZGV0YWlsIik7Y29uc3QgYT1hd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChhd2FpdCBvLmJsb2IoKSx7aW1hZ2VPcmllbnRhdGlvbjoiZmxpcFkiLHByZW11bHRpcGx5QWxwaGE6Im5vbmUifSk7aWYoci5hYm9ydGVkKWEuY2xvc2UoKTtlbHNlIHRyeXtYKHtpZDpuLHZhbHVlOmF9LFthXSl9Y2F0Y2goZCl7dGhyb3cgYS5jbG9zZSgpLGR9fX1jYXRjaChoKXtyLmFib3J0ZWR8fFgoe2lkOm4sZXJyb3I6aCBpbnN0YW5jZW9mIEVycm9yP2gubWVzc2FnZTpTdHJpbmcoaCl9KX1maW5hbGx5e0MuZGVsZXRlKG4pfX19KSgpOwo=",H1=i=>Uint8Array.from(atob(i),t=>t.charCodeAt(0)),Hu=typeof self<"u"&&self.Blob&&new Blob([H1(ku)],{type:"text/javascript;charset=utf-8"});function V1(i){let t;try{if(t=Hu&&(self.URL||self.webkitURL).createObjectURL(Hu),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;base64,"+ku,{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}class W1{constructor(){Z(this,"worker");Z(this,"pending",new Map);Z(this,"nextId",0);try{const t=new V1;this.worker=t,t.onmessage=e=>{const n=e.data,s=this.pending.get(n.id);s?s.receive(n):"value"in n&&"close"in n.value&&n.value.close()},t.onerror=e=>{e.preventDefault(),this.close(new Error("Could not start the model worker"))},t.onmessageerror=()=>this.close(new Error("Could not receive data from the model worker"))}catch{}}async run(t,e,n,s){if(n.aborted)throw n.reason;if(this.worker)try{return await this.request(this.worker,t,n,s)}catch{if(n.aborted)throw n.reason}return e()}close(t=new DOMException("Model closed","AbortError")){var e;(e=this.worker)==null||e.terminate(),this.worker=void 0;for(const n of this.pending.values())n.reject(t)}request(t,e,n,s){return new Promise((r,o)=>{const a=++this.nextId,l=()=>{this.pending.delete(a),n.removeEventListener("abort",c)},c=()=>{l(),t.postMessage({id:a,cancel:!0}),o(n.reason)},h=u=>{l(),o(u)};this.pending.set(a,{receive:u=>{if("progress"in u){s==null||s(u.progress);return}l(),"error"in u?o(new Error(u.error)):r(u.value)},reject:h}),n.addEventListener("abort",c,{once:!0});try{t.postMessage({id:a,job:e})}catch(u){h(u)}})}}class Vu{constructor(t,e){Z(this,"bounds",new Mi);Z(this,"level",-1);this.levels=t;for(const s of t)for(const r of s)r.computeBoundingBox(),this.bounds.union(r.boundingBox),r.castShadow=!0,e.add(r);const n=this.bounds.getBoundingSphere(new Ui);for(const s of t.flat())s.boundingSphere=n,s.visible=!1}update(t,e,n){const s=this.bounds.distanceToPoint(t),[r,o,a]=n,l=a+e*8,c=u=>this.level<0?1:this.level<=u?1.1:.9,h=s<=r*c(0)?0:s<=o*c(1)?1:s<=l*c(2)?2:3;if(h!==this.level){for(const u of this.levels[this.level]??[])u.visible=!1;for(const u of this.levels[h]??[])u.visible=!0;this.level=h}}}const Wu=.25,Ps=[16053490,16053490,16053490,13225168,10725291,5593438,2040100,2838410,11020586,2054728,14266938,8368595],Xu=[15223869,3113154,15909424,3843690,16777215,9329589,15764004,2042422,15231654,4899008],li=[14826299,15764004,15909424,3715691,3117008,13651872,3720896,16053490].map(z);function qu(){const i=new ne,t=z(16777215),e=z(1713198),n=z(1381655);i.box(-.88,.3,-2.1,.88,.95,2.1,t,void 0,n),i.box(-.8,.95,-1.35,.8,1.48,.7,e,t);for(const s of[-.9,.68])for(const r of[-1.55,1])i.box(s,0,r,s+.22,.62,r+.62,n);for(const s of[-.75,.45])i.quad(s,.6,2.11,s+.3,.6,2.11,s+.3,.8,2.11,s,.8,2.11,z(16776166),2.2);return i.build()}function kl(i){const t=new ne,e=new ne;return Qu(i,t,e,z(16777215)),{body:t.build(),trim:e.build()}}function Hl(i){const t=i===1,e=i===2,n=e?-2.3:-2.18,s=e?2.22:2.18,r=e?1.035:t?.99:.93;return{wagon:t,ute:e,tail:n,nose:s,sill:r,belt:a=>{const l=Math.max(0,(n+.58-a)/.58,(a-s+.55)/.55),c=a<0?t||e?.045:.095:.14,h=r-l*c;return{width:.88-.13*l,shoulder:h-.105,top:h}}}}function Yu(i,t){const e=new ne,{wagon:n,ute:s,tail:r,nose:o,sill:a}=Hl(i),l=z(16777215),c=z(6584713),h=z(2236966),u=s?1.63:n?1.6:1.49,d=s?-.37:n?-1.72:-.74,f=s?.64:.42,p=(x,m,g,M,v,S,b,E)=>{e.quad(-x,m,M,x,m,M,.65,v,b,-.65,v,b,E),e.quad(x,m,g,-x,m,g,-.65,v,S,.65,v,S,E),e.quad(x,m,M,x,m,g,.65,v,S,.65,v,b,E),e.quad(-x,m,g,-x,m,M,-.65,v,b,-.65,v,S,E),e.quad(-.65,v,b,.65,v,b,.65,v,S,-.65,v,S,l)};if(t)p(.88,.3,r,o,u,d,f,l);else{e.box(-.88,.3,r,.88,a,o,l),p(.77,a,s?-.52:n?-1.95:-1.47,1.02,u,d,f,c);for(const x of[-1.35,1.38])e.quad(.9,.02,x+.32,.9,.02,x-.32,.9,.57,x-.32,.9,.57,x+.32,h),e.quad(-.9,.02,x-.32,-.9,.02,x+.32,-.9,.57,x+.32,-.9,.57,x-.32,h)}return e.build()}function Zu(i,t,e,n,s,r,o){const a=t>0?r-.025:r-.1,l=t<0&&(i===1||i===2);return[[e*.42,a,n],[e*(s-.022),a-(l?.13:0),n],[e*(s-.064),o-.025,n],[e*(t>0?.31:.43),o-.052,n]]}const Ku=12;function $u(i){const t=new ne,e=Hl(i);for(const s of[1,-1])for(const r of[1,-1]){const o=i<0?r*2.1:r>0?e.nose:e.tail,a=o+r*.02;let l;if(i<0){const c=r>0?.755:.59,h=.865;l=[[s*c,.62,a],[s*h,.62,a],[s*h,.77,a],[s*c,.77,a]]}else{const{width:c,shoulder:h,top:u}=e.belt(o),[d,f,p,x]=Zu(i,r,s,a,c,h,u),m=(g,M,v)=>[g[0]+(M[0]-g[0])*v,g[1]+(M[1]-g[1])*v,a];l=[m(d,f,.59),m(d,f,.99),m(x,p,.99),m(x,p,.59)]}s!==r&&l.reverse(),t.quad(...l[0],...l[1],...l[2],...l[3],z(16777215))}const n=new Jt(t.build(),new Ln({color:16752666,toneMapped:!1}));return n.visible=!1,n}function Ju(i,t){i.visible=t===-1||t===1,i.visible&&(i.name=t<0?"left-turn-indicator":"right-turn-indicator",i.geometry.setDrawRange(t<0?0:Ku,Ku))}function Qu(i,t,e,n){const s=z(4413799),r=z(3425876),o=z(2635588),a=z(8624550),l=z(6651533),c=z(2105636),h=z(2566960),u=z(11252924),d=z(5793135),f=(L,U,$,it,Y,X,K=!1,tt=0)=>{K?L.quad(...Y,...it,...$,...U,X,tt):L.quad(...U,...$,...it,...Y,X,tt)},{wagon:p,ute:x,tail:m,nose:g,sill:M,belt:v}=Hl(i),S=x||p?1.55:1.42,b=x?1.63:p?1.6:1.49,E=x?-.52:p?-1.95:-1.47,_=x?-.37:p?-1.72:-.74,y=1.02,w=x?.64:.42,T=-1.35,C=1.38,D=.34,O=.387,P=[m,m+.58,g-.55,g];for(const L of[T,C])for(let U=0;U<=5;U++)P.push(L-O*Math.cos(Math.PI*U/5));P.sort((L,U)=>L-U);const G=L=>{const U=Math.min(Math.abs(L-T),Math.abs(L-C));return U<O+1e-5?D+Math.sqrt(Math.max(0,O*O-U*U)):.3};for(const L of[-1,1])for(let U=1;U<P.length;U++){const $=P[U-1],it=P[U],Y=v($),X=v(it);f(t,[L*Y.width,G($),$],[L*Y.width,Y.shoulder,$],[L*X.width,X.shoulder,it],[L*X.width,G(it),it],n,L<0)}const F=[m,m+.15,m+.58,E,y,g-.55,g].sort((L,U)=>L-U);for(let L=1;L<F.length;L++){const U=F[L-1],$=F[L],it=v(U),Y=v($);for(const nt of[-1,1])f(t,[nt*it.width,it.shoulder,U],[nt*(it.width-.08),it.top,U],[nt*(Y.width-.08),Y.top,$],[nt*Y.width,Y.shoulder,$],n,nt<0);if(U>=E&&$<=y)continue;const X=x&&U>=m+.15&&$<=E,K=it.width-.08,tt=Y.width-.08;if(X)for(const nt of[-1,1])f(t,[nt*K,it.top,U],[nt*.665,it.top,U],[nt*.665,Y.top,$],[nt*tt,Y.top,$],n,nt<0),f(e,[nt*.665,it.top,U],[nt*.665,.7,U],[nt*.665,.7,$],[nt*.665,Y.top,$],h,nt<0);else f(t,[-K,it.top,U],[-tt,Y.top,$],[tt,Y.top,$],[K,it.top,U],n)}if(x){const L=m+.15,U=E;f(e,[-.665,.7,L],[-.665,.7,U],[.665,.7,U],[.665,.7,L],z(4343627));for(const[$,it]of[[L,1],[U,0]])f(e,[-.665,.7,$],[.665,.7,$],[.665,v($).top,$],[-.665,v($).top,$],h,!it)}const k=(L,U,$)=>{const it=E+(_-E)*$,Y=y+(w-y)*$;return[L*(.8-.145*$),M+(S-M)*$,it+(Y-it)*U]},V=p?[0,.07,.275,.32,.56,.6,.935,1]:x?[0,.12,.33,.395,.925,1]:[0,.09,.47,.525,.925,1];for(const L of[-1,1]){const U=($,it,Y,X,K,tt)=>f(K,k(L,$,Y),k(L,$,X),k(L,it,X),k(L,it,Y),tt,L<0);U(0,1,0,.07,t,n),U(0,1,.93,1,t,n);for(let $=1;$<V.length;$++){const it=$%2===0,Y=$!==1&&$!==V.length-1,X=e.vertexCount;U(V[$-1],V[$],.07,.93,it||Y?e:t,it?$===2?o:r:Y?h:n),it&&e.gradientY(X,M,S,$===2?o:r,$===2?l:a)}}for(const L of[-1,1])f(t,k(L,0,1),[L*.58,b,_+.045],[L*.58,b,w-.045],k(L,1,1),n,L<0);f(t,[-.58,b,_+.045],[-.58,b,w-.045],[.58,b,w-.045],[.58,b,_+.045],n);for(const L of[0,1]){const U=L?w-.045:_+.045;f(t,k(-1,L,1),k(1,L,1),[.58,b,U],[-.58,b,U],n,!L);const $=e.vertexCount;f(e,k(-1,L,0),k(1,L,0),k(1,L,1),k(-1,L,1),L?s:o,!L),e.gradientY($,M,S,L?s:o,L?a:l)}if(p)for(const L of[-1,1]){const U=L*.56;e.box(U-.032,b,_+.17,U+.032,1.67,w-.21,h)}for(const L of[-1,1]){const U=L>0?g:m,{width:$,shoulder:it,top:Y}=v(U);if(x&&L<0){const tt=[[-$,.3,U],[$,.3,U],[$,it,U],[-$,it,U]],nt=[[-.41,.59,U],[.41,.59,U],[.46,.74,U],[-.46,.74,U]],ht=[[-.39,.612,U+.024],[.39,.612,U+.024],[.43,.716,U+.024],[-.43,.716,U+.024]];for(let Nt=0;Nt<4;Nt++){const rt=(Nt+1)%4;f(t,tt[Nt],tt[rt],nt[rt],nt[Nt],n,!0),f(t,nt[Nt],nt[rt],ht[rt],ht[Nt],n,!0)}f(t,ht[0],ht[1],ht[2],ht[3],Gt(n,.88),!0)}else f(t,[-$,.3,U],[$,.3,U],[$,it,U],[-$,it,U],n,L<0);f(t,[-$,it,U],[$,it,U],[$-.08,Y,U],[-$+.08,Y,U],n,L<0);const X=U+L*.008;for(const tt of[-1,1])f(e,...Zu(i,L,tt,X,$,it,Y),L>0?z(14477800):z(12003881),tt!==L,L>0?1.1:.6);L>0?f(e,[-.48,.39,X],[.48,.39,X],[.53,.54,X],[-.53,.54,X],h):x&&f(e,[-.12,.76,X],[.12,.76,X],[.12,.8,X],[-.12,.8,X],h,!0);const K=U+L*.012;f(e,[-.2,.44,K],[.2,.44,K],[.2,.55,K],[-.2,.55,K],z(14014927),L<0)}e.box(-.7,.23,m+.22,.7,.69,g-.22,h,null);const N=(L,U,$,it)=>[L,D+it*Math.sin($)*Math.sin(.4*Math.PI),U+it*Math.cos($)];for(const L of[-1,1])for(const U of[T,C]){const $=L*.69,it=L*.9,Y=L*.912;for(let X=0;X<8;X++){const K=X*Math.PI/4,tt=(X+1)*Math.PI/4,nt=N(it,U,K,.34),ht=N(it,U,tt,.34);f(e,N($,U,K,.34),nt,ht,N($,U,tt,.34),c,L<0),L>0?e.tri(it,D,U,...ht,...nt,c):e.tri(it,D,U,...nt,...ht,c)}for(let X=0;X<6;X++){const K=N(Y,U,X*Math.PI/3,.188),tt=N(Y,U,(X+1)*Math.PI/3,.188),nt=X%2?u:d;L>0?e.tri(L*.905,D,U,...tt,...K,nt):e.tri(L*.905,D,U,...K,...tt,nt)}}}function Io(i,t,e,n,s,r){const o=-t/2,a=t*.12,l=t/2,c=e/2,h=c*.5,u=Gt(s,.72);for(const f of[-1,1])f>0?(i.quad(h,0,o,c*.88,n,o,c,n,a,h,0,a,s),i.quad(h,0,a,c,n,a,0,n*1.12,l,0,.1,l*.86,s)):(i.quad(-h,0,a,-c,n,a,-c*.88,n,o,-h,0,o,s),i.quad(0,.1,l*.86,0,n*1.12,l,-c,n,a,-h,0,a,s));i.quad(-h,0,o,-c*.88,n,o,c*.88,n,o,h,0,o,u),i.quad(-h,0,o,h,0,o,h,0,a,-h,0,a,u),i.tri(-h,0,a,h,0,a,0,.1,l*.86,u);const d=n*.8;i.quad(-c*.84,d,o+.05,c*.84,d,o+.05,c*.95,d,a,-c*.95,d,a,r),i.tri(-c*.95,d,a,c*.95,d,a,0,d,l*.95,r)}function X1(i,t){const e=new ne,n=z(16119280);if(i===0)Io(e,4.6,1.9,.75,t()<.5?z(12962767):li[Math.floor(t()*6)],z(10133668)),e.box(-.2,.55,-2.65,.2,1.25,-2.25,z(1974822)),e.box(-.75,.6,-.9,.75,.72,-.5,z(9138002)),e.box(-.75,.6,.4,.75,.72,.8,z(9138002));else if(i===1){const s=li[Math.floor(t()*li.length)];Io(e,7.4,2.7,1.25,n,z(15131350)),e.box(-1.37,.72,-3.7,1.37,.9,3,s,null),e.box(-1.05,1,-1.2,1.05,2.25,1.9,n,z(15329248)),e.quad(-1,1.45,1.92,1,1.45,1.92,.9,2.2,1.92,-.9,2.2,1.92,z(2240572),.4),e.box(-1.06,1.5,-.9,-1.05,2.1,1.6,z(2240572),null),e.box(1.05,1.5,-.9,1.06,2.1,1.6,z(2240572),null),e.box(-.9,2.25,-1,.9,2.33,1.2,n),e.cyl(0,2.33,-.6,.03,.02,1.6,4,z(9278358))}else Io(e,9,2.8,1.3,t()<.6?n:z(2377070),z(14208952)),e.box(-.85,1.05,-1.6,.85,1.55,1.6,n,z(15329248)),e.cyl(0,1.05,.9,.08,.05,11.5,5,z(14014682)),e.box(-.06,2.45,-3,.06,2.57,.9,z(14014682)),e.blob(0,2.72,-1.05,.17,.17,1.9,5,3,z(3104666)),e.quad(-.01,12.4,.9,.01,12.4,.9,.01,1.4,4.4,-.01,1.4,4.4,z(10133154));return e.build()}function q1(i){const t=new ne;return Io(t,4.2,1.5,.55,z(16119280),z(14736588)),t.cyl(0,.45,.5,.04,.03,6,4,z(14014682)),t.tri(.02,6.3,.5,.02,1.1,.45,.6,1.2,-2,i),t.tri(.02,4.6,.6,.3,1,1.9,.02,1,.6,z(16250866)),t.blob(.35,.95,-.9,.22,.4,.22,5,3,z(14238767)),t.build()}function Y1(i,t){const e=new ne,n=8,s=9,r=2.6;for(let o=0;o<n;o++){const a=-1.15+o/n*2.3,l=-1.15+(o+1)/n*2.3,c=Math.sin(a)*s*.5,h=Math.cos(a)*s*.42,u=Math.sin(l)*s*.5,d=Math.cos(l)*s*.42,f=o===0||o===n-1||o===3||o===4?t:i;e.quad(c,h,-r/2,u,d,-r/2,u,d,r/2,c,h,r/2,f)}return e.build()}function Z1(i,t){const e=new ne;return e.box(-.22,0,-.75,.22,.06,.75,i),e.blob(-.25,.75,0,.2,.62,.22,5,3,t),e.blob(-.42,1.48,0,.13,.14,.13,5,3,z(14264711)),e.build()}function K1(i){const t=new ne;return t.blob(0,.02,0,.27,.05,1.05,6,2,i),t.blob(0,.42,-.1,.2,.4,.18,5,3,z(1976112)),t.blob(0,.9,-.1,.12,.13,.12,5,3,z(14264711)),t.build()}function $1(i){const t=new Map;for(const r of i){if(r.cls>1||!r.name||r.flags)continue;const o=t.get(r.name)??[];o.push(r),t.set(r.name,o)}const e=[],n=(r,o)=>o?[r[r.length-3],r[r.length-1]]:[r[0],r[2]],s=r=>{const o=new Float32Array(r.length);for(let a=0;a<r.length/3;a++)o.set(r.subarray(a*3,a*3+3),r.length-3-a*3);return o};for(const r of t.values()){const o=r.map(l=>l.pts),a=r[0].width;for(;o.length;){let l=Array.from(o.pop()),c=!0;for(;c;){c=!1;for(let f=0;f<o.length;f++){const p=o[f],x=[l[l.length-3],l[l.length-1]],m=[l[0],l[2]],g=(S,b)=>Math.hypot(S[0]-b[0],S[1]-b[1])<2.5;let M=null,v=!0;if(g(x,n(p,!1))?M=p:g(x,n(p,!0))?M=s(p):g(m,n(p,!0))?(M=p,v=!1):g(m,n(p,!1))&&(M=s(p),v=!1),!!M){l=v?l.concat(Array.from(M.subarray(3))):Array.from(M.subarray(0,M.length-3)).concat(l),o.splice(f,1),c=!0;break}}}const h=new Float32Array(l),u=h.length/3,d=new Float32Array(u);for(let f=1;f<u;f++)d[f]=d[f-1]+Math.hypot(h[f*3]-h[f*3-3],h[f*3+2]-h[f*3-1]);d[u-1]>380&&e.push({pts:h,cum:d,length:d[u-1],width:a})}}return e}function Vl(i,t=2,e=320){if(i.length<=(e<320?24:96)||t===0)return[i];let n=1/0,s=-1/0,r=1/0,o=-1/0;for(const u of i)n=Math.min(n,u.x),s=Math.max(s,u.x),r=Math.min(r,u.z),o=Math.max(o,u.z);const a=s-n,l=o-r;if(Math.max(a,l)<e)return[i];const c=a>l?"x":"z";i.sort((u,d)=>u[c]-d[c]);const h=Math.floor(i.length/2);return[...Vl(i.slice(0,h),t-1,e),...Vl(i.slice(h),t-1,e)]}class J1{constructor(t,e,n=!1){Z(this,"group",new rn);Z(this,"afloat",new rn);Z(this,"boats",[]);Z(this,"dinghies",[]);Z(this,"kites",[]);Z(this,"kiteLines");Z(this,"surfers",[]);Z(this,"traffic");Z(this,"trafficTrim");Z(this,"cars",[]);Z(this,"parkedAt",new Map);Z(this,"parkedSets",[]);Z(this,"drivenAt",new Map);Z(this,"drivenSets",[]);Z(this,"carMat",Ss());Z(this,"tmpE",new mn);Z(this,"nothing",new ie().makeScale(0,0,0));Z(this,"gulls");Z(this,"gullState",[]);Z(this,"tmpM",new ie);Z(this,"tmpQ",new Tn);Z(this,"tmpP",new q);Z(this,"up",new q(0,1,0));Z(this,"one",new q(1,1,1));Z(this,"contact");this.ctx=t,this.closeCarShadows=n,this.group.name="life",this.group.add(this.afloat);const s=this.carMat;this.addParkedCars(),this.addTraffic(s),this.addBoats(s,e),this.addKites(s),this.addSurfers(s,e),this.addPeople(e),this.addGulls(e),this.update(0,0)}setTide(t){this.afloat.position.y=t}sit(t,e,n,s){const r=this.ctx.hf,o=Math.sin(n),a=Math.cos(n),l=r.yAt(t+o*1.3,e+a*1.3),c=r.yAt(t-o*1.3,e-a*1.3),h=r.yAt(t-a*.8,e+o*.8),u=r.yAt(t+a*.8,e-o*.8);return this.tmpQ.setFromEuler(this.tmpE.set(-Math.atan2(l-c,2.6),n,Math.atan2(u-h,1.6),"YXZ")),this.tmpM.compose(this.tmpP.set(t,(l+c+h+u)/4+s,e),this.tmpQ,this.one)}carShapes(t){return t?kl(t-1):{body:qu(),trim:void 0}}makeTrafficCar(t,e,n,s,r){const o=new ne;Qu(t,o,o,z(e));const a=o.build(),l=a.boundingBox,c=(d,f)=>Math.min(1,d/f),h=new q(c(n,Math.max(-l.min.x,l.max.x)),c(r,l.max.y),c(s,Math.max(-l.min.z,l.max.z)));a.scale(h.x,h.y,h.z);const u=new Jt(a,this.carMat);return u.name=["traffic-sedan","traffic-wagon","traffic-ute"][t],u.castShadow=u.receiveShadow=!0,u.matrixAutoUpdate=!1,u.visible=!1,this.group.add(u),{mesh:u,scale:h}}addParkedCars(){const{town:t,hf:e,paths:n}=this.ctx,s=t.cars,r=s.length/ys,o=[[],[],[],[]],a=new Set,l=(u,d)=>`${Math.round(u/7)}_${Math.round(d/7)}`;for(let u=0;u<r;u++){const d=s[u*ys]/4,f=s[u*ys+1]/4;if(this.ctx.isClear(d,f)||!this.ctx.isDetail(d,f)&&this.ctx.roads.nearest(d,f,5.5))continue;const p=1+(s[u*ys+3]+u)%3;o[p].push({x:d,z:f,heading:s[u*ys+2]/10*(Math.PI/180),colour:Ps[(s[u*ys+3]*7+u)%Ps.length]}),a.add(l(d,f))}const c=Pe(911);let h=0;for(const u of n){if(h>=1100||u.width<3.4||u.width>12)continue;const d=u.pts.length/3;let f=20+c()*60;for(let p=1;p<d;p++){const x=u.pts[(p-1)*3],m=u.pts[(p-1)*3+2],g=u.pts[p*3],M=u.pts[p*3+2],v=Math.hypot(g-x,M-m);if(f-=v,f>0||v<.01)continue;f=28+c()*70;const S=c()<.5?1:-1,b=(g-x)/v,E=(M-m)/v,_=Math.max(u.width/2-.55,1.5),y=g+E*_*S,w=M-b*_*S,T=Math.floor(c()*Ps.length),C=Math.floor(c()*3);if(e.metresAt(y,w)<.6||!e.inside(y,w,30)||this.ctx.isClear(y,w))continue;let D=!0;for(let O=-1;O<=1&&D;O++)for(let P=-1;P<=1;P++)if(a.has(`${Math.round(y/7)+O}_${Math.round(w/7)+P}`)){D=!1;break}D&&(a.add(l(y,w)),o[1+C].push({x:y,z:w,heading:Math.atan2(b*S,E*S),colour:Ps[T]}),h++)}}o.forEach((u,d)=>this.addParkedShape(u,d))}addParkedShape(t,e){if(!t.length)return;const n=kl(e-1),s=Yu(e-1,!1),r=Yu(e-1,!0);for(const o of Vl(t,5,140)){const a=this.parkedSets.length,l=new je(n.body,this.carMat,o.length),c=new je(n.trim,this.carMat,o.length),h=new je(s,this.carMat,o.length),u=new je(r,this.carMat,o.length);l.name="parked-car-near-body",c.name="parked-car-near-trim",h.name="parked-car-mid",u.name="parked-car-far";const d=[l,c,h,u],f=[l,h,u],p=new At;o.forEach((m,g)=>{const{x:M,z:v,heading:S,colour:b}=m,E=this.sit(M,v,S,.3);for(const _ of d)_.setMatrixAt(g,E);p.set(b);for(const _ of f)_.setColorAt(g,p);this.parkedAt.set(`${Math.round(M*4)}_${Math.round(v*4)}`,{set:a,k:g,x:M,z:v,heading:S})});const x=new Vu([[l,c],[h],[u]],this.group);this.closeCarShadows&&this.addContactShadow(l),this.parkedSets.push({body:l,meshes:d,lod:x,shape:e})}}addContactShadow(t){this.contact??(this.contact={geometry:new Hn(2.5,5.1).rotateX(-Math.PI/2).translate(0,.027,0),material:new on({transparent:!0,depthWrite:!1,vertexShader:`varying vec2 patchUV;
          void main(){patchUV=2.*uv-1.;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 patchUV;
          void main(){float edge=length(max(abs(patchUV)-vec2(.49,.57),0.)/vec2(.50,.42));
            gl_FragColor=vec4(.012,.015,.016,.32*(1.-smoothstep(.05,1.,edge)));
            #include <colorspace_fragment>
          }`})});const e=new je(this.contact.geometry,this.contact.material,t.count);e.name="parked-car-contact",e.instanceMatrix=t.instanceMatrix,e.boundingSphere=t.boundingSphere,t.add(e)}addCars(t){const e=[[],[],[],[]];for(const n of t)e[1+(n.kind??0)%3].push(n);e.forEach((n,s)=>this.addParkedShape(n,s))}nearestCar(t,e,n){let s=null;for(const[r,o]of this.parkedAt){const a=this.drivenAt.get(r)??o,l=Math.hypot(a.x-t,a.z-e);l<(s?s.distance:n)&&(s={id:[o.x,o.z],x:a.x,z:a.z,heading:a.heading,distance:l})}return this.cars.forEach((r,o)=>{const a=this.drivenAt.get(`t${o}`)??r,l=Math.hypot(a.x-t,a.z-e);l<(s?s.distance:n)&&(s={id:[9e5+o,0],x:a.x,z:a.z,heading:a.heading,distance:l})}),s}driveCar(t,e,n,s,r,o,a=0,l=0,c=0){const h=t>=9e5?this.cars[t-9e5]:void 0,u=h?`t${t-9e5}`:`${Math.round(t*4)}_${Math.round(e*4)}`,d=h?void 0:this.parkedAt.get(u);if(!d&&!h)return!1;let f=this.drivenAt.get(u);if(!f){if(this.drivenAt.size>=12)return!1;const x=d?this.parkedSets[d.set].shape:this.trafficTrim?1:0;let m=this.drivenSets[x];if(!m){const M=this.carShapes(x);m=this.drivenSets[x]={body:new je(M.body,this.carMat,12),trim:M.trim?new je(M.trim,this.carMat,12):void 0,n:0};for(const v of[m.body,m.trim])v&&(v.count=0,v.frustumCulled=!1,v.castShadow=!0,this.group.add(v))}f={set:x,k:m.n++,x:n,y:s,z:r,heading:o},this.drivenAt.set(u,f),m.body.count=m.n,m.trim&&(m.trim.count=m.n);const g=new At;if(d){const M=this.parkedSets[d.set];M.body.getColorAt(d.k,g);for(const v of M.meshes)v.setMatrixAt(d.k,this.nothing),v.instanceMatrix.needsUpdate=!0}else this.traffic.getColorAt(t-9e5,g),h.gone=!0;m.body.setColorAt(f.k,g),m.body.instanceColor.needsUpdate=!0}f.x=n,f.y=s,f.z=r,f.heading=o;const p=this.drivenSets[f.set];return this.tmpQ.setFromEuler(this.tmpE.set(-a,o,l,"YXZ")),this.tmpM.compose(this.tmpP.set(n,s+Wu,r),this.tmpQ,this.one),p.body.setMatrixAt(f.k,this.tmpM),p.body.instanceMatrix.needsUpdate=!0,p.trim&&(p.trim.setMatrixAt(f.k,this.tmpM),p.trim.instanceMatrix.needsUpdate=!0),c&&!f.indicator&&(f.indicator=$u(f.set-1),f.indicator.matrixAutoUpdate=!1,this.group.add(f.indicator)),f.indicator&&(Ju(f.indicator,c),f.indicator.visible&&(f.indicator.matrix.copy(this.tmpM),f.indicator.matrixWorldNeedsUpdate=!0)),!0}addTraffic(t){const e=$1(this.ctx.paths);if(!e.length)return;const n=e.reduce((c,h)=>c+h.length,0),s=0,r=Pe(77),o=this.ctx.hasDetail?kl(0):null,a=this.traffic=new je(o?o.body:qu(),t,s);if(a.instanceMatrix.setUsage(Gs),a.frustumCulled=!1,o){const c=this.trafficTrim=new je(o.trim,t,s);c.instanceMatrix.setUsage(Gs),c.frustumCulled=!1,c.castShadow=!0,this.group.add(c)}const l=new At;for(let c=0;c<s;c++){let h=r()*n,u=e[0];for(const d of e)if((h-=d.length)<=0){u=d;break}this.cars.push({route:u,s:r()*u.length,dir:r()<.5?1:-1,speed:9+r()*6,x:0,z:0,heading:0}),a.setColorAt(c,l.set(Ps[Math.floor(r()*Ps.length)]))}a.castShadow=!0,this.group.add(a)}addBoats(t,e){var c;const{hf:n}=this.ctx,s=Pe(451),r=((c=e.jetty)==null?void 0:c.head)??new q(380,0,-117),o=[];for(let h=0;h<4e3&&o.length<16;h++){const u=s()*Math.PI*2,d=55+s()*420,f=r.x+Math.cos(u)*d,p=r.z+Math.sin(u)*d;n.metresAt(f,p)>-1.9||!n.inside(f,p,40)||o.some(([x,m])=>Math.hypot(x-f,m-p)<26)||o.push([f,p])}const a=2.2+s()*.4;o.forEach(([h,u],d)=>{const f=d%5===0?2:d%2?0:1,p=new Jt(X1(f,s),t);p.position.set(h,0,u),p.rotation.y=a+(s()-.5)*.5,p.castShadow=!0,this.afloat.add(p),this.boats.push({obj:p,phase:s()*6.28,y:f===0?-.22:-.42})});const l=[z(16250866),z(15222589),z(3117008),z(15909424)];for(let h=0;h<600&&this.dinghies.length<4;h++){const u=s()*Math.PI*2,d=150+s()*900,f=r.x+Math.cos(u)*d,p=r.z+160+Math.sin(u)*d*.5,x=45+s()*70,m=30+s()*40;let g=n.inside(f,p,160);for(let v=0;v<12&&g;v++){const S=v/12*Math.PI*2;n.metresAt(f+Math.cos(S)*x,p+Math.sin(S)*m)>-1.5&&(g=!1)}if(!g||this.dinghies.some(v=>Math.hypot(v.cx-f,v.cz-p)<170))continue;const M=new Jt(q1(l[this.dinghies.length%l.length]),t);M.castShadow=!0,this.afloat.add(M),this.dinghies.push({obj:M,cx:f,cz:p,rx:x,rz:m,phase:s()*6.28,speed:(2.2+s())/Math.max(x,m)})}}addKites(t){const{hf:e,town:n}=this.ctx,s=Pe(990),[r,o]=vn(n.meta,-38.6385,145.714),[a,l]=vn(n.meta,-38.645,145.731),c=[];for(let d=0;d<3e3&&c.length<6;d++){const f=r+s()*(a-r),p=o+s()*(l-o);e.metresAt(f,p)>-1.6||c.some(x=>Math.hypot(x.x-f,x.z-p)<110)||c.push(new q(f,0,p))}const h=new Float32Array(c.length*12);c.forEach((d,f)=>{let p=85;for(;p>15&&(e.metresAt(d.x+.65*p,d.z+.76*p)>-1.2||e.metresAt(d.x-.65*p,d.z-.76*p)>-1.2);)p-=10;const x=li[Math.floor(s()*7)],m=li[Math.floor(s()*7)],g=new Jt(Y1(x,m===x?li[7]:m),t),M=new Jt(Z1(li[Math.floor(s()*7)],z(1976112)),t);g.castShadow=!0,this.afloat.add(g,M),this.kites.push({base:d,reach:p,phase:s()*6.28,speed:.12+s()*.06,kite:g,rider:M})});const u=new Ae;u.setAttribute("position",new Ee(h,3).setUsage(Gs)),this.kiteLines=new oh(u,vo(new eh({color:15921906,transparent:!0,opacity:.7}))),this.kiteLines.frustumCulled=!1,this.afloat.add(this.kiteLines)}addSurfers(t,e){if(!e.surf)return;const{hf:n}=this.ctx,s=Pe(31),[r,o]=e.surf.seaward,a=e.surf.beach;let l=20;for(;l<420&&n.metresAt(a.x+r*l,a.z+o*l)>-2;)l+=5;for(let c=0;c<9;c++){const h=(c-4)*13+(s()-.5)*8,u=l+(s()-.5)*30,d=a.x+r*u-o*h,f=a.z+o*u+r*h,p=new Jt(K1(li[Math.floor(s()*li.length)]),t);p.position.set(d,0,f),p.rotation.y=Math.atan2(r,o)+(s()-.5)*.8,this.afloat.add(p),this.surfers.push({obj:p,phase:s()*6.28})}}addPeople(t){const{hf:e,town:n,paths:s,roads:r,footprints:o}=this.ctx,a=Pe(2026),l=[],c=[],h=(F,k)=>o.some(V=>{if(Math.hypot(F-V.cx,k-V.cz)>Math.max(V.obb.w,V.obb.d))return!1;let N=!1;for(let L=0,U=V.poly.length-2;L<V.poly.length;U=L,L+=2){const $=V.poly[L],it=V.poly[L+1],Y=V.poly[U],X=V.poly[U+1];it>k!=X>k&&F<(Y-$)*(k-it)/(X-it)+$&&(N=!N)}return N}),u=(F,k)=>!r.nearest(F,k,6.4)&&!h(F,k),d=(F,k,V,N,L,U,$=0)=>{for(let it=0,Y=0;it<N*40&&Y<N;it++){const X=a()*Math.PI*2,K=Math.sqrt(a())*V,tt=F+Math.cos(X)*K,nt=k+Math.sin(X)*K,ht=e.metresAt(tt,nt);ht<L||ht>U||!u(tt,nt)||(l.push(tt,e.yAt(tt,nt),nt),a()<$&&c.push(tt+1.2,e.yAt(tt+1.2,nt),nt+.6),Y++)}};t.surf&&d(t.surf.beach.x,t.surf.beach.z,130,60,1.5,3,.32);const[f,p]=vn(n.meta,-38.63575,145.729);d(f,p,120,34,1.5,2.4,.3);const[x,m]=vn(n.meta,-38.6356,145.7337);d(x,m,110,26,1.5,2.6,.2);const[g,M]=vn(n.meta,-38.63194,145.72681);d(g,M,55,14,0,99);const[v,S]=vn(n.meta,-38.63385,145.7285);for(const F of s){if(F.cls>3||F.flags)continue;const k=F.pts.length/3;for(let V=1;V<k;V++){const N=F.pts[V*3],L=F.pts[V*3+2];if(Math.hypot(N-v,L-S)>300||a()>.42||this.ctx.isClear(N,L))continue;const U=N-F.pts[V*3-3],$=L-F.pts[V*3-1],it=Math.hypot(U,$)||1,Y=a()<.5?1:-1,X=F.width/2+2.3+a()*1,K=N-$/it*X*Y,tt=L+U/it*X*Y;u(K,tt)&&l.push(K,e.yAt(K,tt),tt)}}if(t.jetty){const F=t.jetty.points;for(let k=0;k<F.length-1;k++)for(let V=0;V<3;V++){const N=a();l.push(F[k][0]+(F[k+1][0]-F[k][0])*N+(a()-.5)*2,Bl,F[k][1]+(F[k+1][1]-F[k][1])*N+(a()-.5)*2)}}const b=l.length/3,E=new ne;E.cyl(0,0,0,.17,.22,.85,5,z(2765632)),E.cyl(0,.85,0,.24,.2,.6,5,z(16777215),z(16777215));const _=new ne;_.blob(0,1.6,0,.14,.15,.14,5,3,z(14264711));const y=new so({vertexColors:!0}),w=F=>(F.deleteAttribute("glow"),F),T=new je(w(E.build()),y,b),C=new je(w(_.build()),y,b),D=new At,O=[16777215,15255976,12159590,9068354];for(let F=0;F<b;F++){const k=.92+a()*.2;this.tmpQ.setFromAxisAngle(this.up,a()*6.28),this.tmpM.compose(this.tmpP.set(l[F*3],l[F*3+1],l[F*3+2]),this.tmpQ,new q(k,k,k)),T.setMatrixAt(F,this.tmpM),C.setMatrixAt(F,this.tmpM),T.setColorAt(F,D.set(Xu[Math.floor(a()*Xu.length)])),C.setColorAt(F,D.set(O[Math.floor(a()*O.length)]))}T.computeBoundingSphere(),C.computeBoundingSphere(),this.group.add(T,C);const P=new ne;P.cyl(0,0,0,.03,.03,2,4,z(14277081)),P.cyl(0,1.75,0,1.25,0,.5,8,z(16777215));const G=new je(w(P.build()),y,c.length/3);for(let F=0;F<c.length/3;F++)this.tmpQ.setFromAxisAngle(new q(1,0,0),(a()-.5)*.3),G.setMatrixAt(F,this.tmpM.compose(this.tmpP.set(c[F*3],c[F*3+1],c[F*3+2]),this.tmpQ,this.one)),G.setColorAt(F,D.set([14826299,3117008,15909424,3715691,15764004,16053490][Math.floor(a()*6)]));G.castShadow=!0,G.computeBoundingSphere(),this.group.add(G)}addGulls(t){if(!t.jetty)return;const e=Pe(8),n=16;for(let r=0;r<n;r++)this.gullState.push({cx:t.jetty.head.x+(e()-.5)*90,cz:t.jetty.head.z+(e()-.5)*90,r:18+e()*55,h:Bl+6+e()*16,w:(.25+e()*.3)*(e()<.5?1:-1),phase:e()*6.28});const s=new Ae;s.setAttribute("position",new Ee(new Float32Array(n*18),3).setUsage(Gs)),this.gulls=new Jt(s,vo(new Ln({color:16185074,side:Ie}))),this.gulls.frustumCulled=!1,this.group.add(this.gulls)}updateParkedLod(t,e,n){for(const s of this.parkedSets)s.lod.update(t,e,n)}update(t,e){for(const n of this.boats)n.obj.rotation.z=Math.sin(e*.9+n.phase)*.04,n.obj.rotation.x=Math.sin(e*.7+n.phase*1.7)*.025,n.obj.position.y=n.y+Math.sin(e*1.1+n.phase)*.06;for(const n of this.dinghies){const s=n.phase+e*n.speed;n.obj.position.set(n.cx+Math.cos(s)*n.rx,-.15,n.cz+Math.sin(s)*n.rz),n.obj.rotation.y=Math.atan2(-Math.sin(s)*n.rx,Math.cos(s)*n.rz),n.obj.rotation.z=.12+Math.sin(e*.8+n.phase)*.04}for(const n of this.surfers)n.obj.position.y=-.05+Math.sin(e*.9+n.phase)*.22;if(this.kiteLines){const n=this.kiteLines.geometry.getAttribute("position");this.kites.forEach((s,r)=>{const o=Math.sin(e*s.speed*6.28+s.phase),a=Math.cos(e*s.speed*6.28+s.phase)>=0?1:-1,l=s.base.x+.65*s.reach*o,c=s.base.z+.76*s.reach*o;s.rider.position.set(l,.05,c),s.rider.rotation.y=Math.atan2(.65*a,.76*a),s.rider.rotation.z=.28;const h=e*1.3+s.phase,u=l+12+a*5+Math.sin(h)*4.5,d=c-10+Math.cos(h)*1.5,f=17+Math.sin(h*2)*2.4;s.kite.position.set(u,f,d),s.kite.lookAt(l,1.2,c),s.kite.rotateX(-Math.PI/2),n.setXYZ(r*4,l-.3,1.25,c),n.setXYZ(r*4+1,u-2.6,f-1,d),n.setXYZ(r*4+2,l-.3,1.25,c),n.setXYZ(r*4+3,u+2.6,f-1,d)}),n.needsUpdate=!0}if(this.traffic&&(this.cars.forEach((n,s)=>{var v,S;if(n.gone){this.traffic.setMatrixAt(s,this.nothing),(v=this.trafficTrim)==null||v.setMatrixAt(s,this.nothing);return}const r=n.route;n.s+=n.dir*n.speed*t,n.s>r.length&&(n.s=r.length,n.dir=-1),n.s<0&&(n.s=0,n.dir=1);let o=0,a=r.cum.length-1;for(;a-o>1;){const b=o+a>>1;r.cum[b]<=n.s?o=b:a=b}const l=(n.s-r.cum[o])/(r.cum[a]-r.cum[o]||1),c=r.pts[o*3],h=r.pts[o*3+2],u=r.pts[a*3],d=r.pts[a*3+2];let f=u-c,p=d-h;const x=Math.hypot(f,p)||1;f=f/x*n.dir,p=p/x*n.dir;const m=Math.min(r.width*.24,2),g=c+(u-c)*l+p*m,M=h+(d-h)*l-f*m;n.x=g,n.z=M,n.heading=Math.atan2(f,p),this.traffic.setMatrixAt(s,this.sit(g,M,n.heading,.36)),(S=this.trafficTrim)==null||S.setMatrixAt(s,this.tmpM)}),this.traffic.instanceMatrix.needsUpdate=!0,this.trafficTrim&&(this.trafficTrim.instanceMatrix.needsUpdate=!0)),this.gulls){const n=this.gulls.geometry.getAttribute("position");this.gullState.forEach((s,r)=>{const o=s.phase+e*s.w,a=s.cx+Math.cos(o)*s.r,l=s.cz+Math.sin(o)*s.r,c=s.h+Math.sin(o*2.3)*1.5,h=s.w>0?1:-1,u=-Math.sin(o)*h,d=Math.cos(o)*h,f=d,p=-u,x=Math.sin(e*7+s.phase*3)*.45,m=r*6;n.setXYZ(m,a+u*.35,c,l+d*.35),n.setXYZ(m+1,a-u*.3,c,l-d*.3),n.setXYZ(m+2,a+f*.85,c+x,l+p*.85),n.setXYZ(m+3,a+u*.35,c,l+d*.35),n.setXYZ(m+4,a-f*.85,c+x,l-p*.85),n.setXYZ(m+5,a-u*.3,c,l-d*.3)}),n.needsUpdate=!0}}}const Q1={low:320,medium:640,high:1040,ultra:1520},Xi=new q(31,18,31),j1=`
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
}`,tv=`
varying float vOpacity;
void main() {
  gl_FragColor = vec4(0.54, 0.65, 0.76, vOpacity);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;class ev{constructor(t,e,n){Z(this,"eye",new q);Z(this,"material");Z(this,"streaks");Z(this,"wetness",{value:0});Z(this,"ultra");Z(this,"disposed",!1);Z(this,"inletRain",{value:0});this.camera=e,this.ultra=n==="ultra";const s=Q1[n],r=Pe(1229870668),o=new Float32Array(s*6),a=new Float32Array(s*8);for(let c=0;c<s;c++){const h=r()*Xi.x,u=r()*Xi.y,d=r()*Xi.z,f=.25+r()*.54,p=.55+r()*.45,x=r();o.set([h,u,d,h,u,d],c*6),a.set([f,0,p,x,f,1,p,x],c*8)}const l=new Ae;l.setAttribute("position",new Ee(o,3)),l.setAttribute("aDrop",new Ee(a,4)),this.material=new on({uniforms:{uEye:{value:this.eye},uVolume:{value:Xi},uDrift:{value:new Lt},uSlant:{value:new Lt},uFall:{value:0},uRain:{value:0},uShelter:{value:0}},vertexShader:j1,fragmentShader:tv,transparent:!0,depthWrite:!1}),this.streaks=new oh(l,this.material),this.streaks.name="local rain streaks",this.streaks.frustumCulled=!1,this.streaks.renderOrder=4,this.streaks.visible=!1,t.add(this.streaks)}shadeAsphalt(t,e=!1){const n=t.onBeforeCompile,s=t.customProgramCacheKey();t.customProgramCacheKey=()=>s+(e?":rain-asphalt-mask":":rain-asphalt"),t.onBeforeCompile=(r,o)=>{n.call(t,r,o),r.uniforms.uRoadWetness=this.wetness,e&&(r.vertexShader=`attribute float aAsphalt;
varying float vAsphalt;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vAsphalt = aAsphalt;`));const a=e?"(uRoadWetness * vAsphalt)":"uRoadWetness";r.fragmentShader=`uniform float uRoadWetness;
`+(e?`varying float vAsphalt;
`:"")+r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= mix(1.0, 0.66, `+a+");").replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.56, `+a+");")},t.needsUpdate=!0}update(t,e,n,s=2.9,r=-1,o=!1){if(this.disposed)return;const a=Qt.clamp(t,0,1);if(this.wetness.value=Qt.clamp(e,0,1),this.inletRain.value=this.ultra?a:0,this.streaks.visible=a>.015,!this.streaks.visible)return;this.camera.getWorldPosition(this.eye);const l=this.material.uniforms,c=12.5;l.uRain.value=a,l.uShelter.value=o?1:0,l.uFall.value=n*c%Xi.y,l.uDrift.value.set(n*s%Xi.x,n*r%Xi.z),l.uSlant.value.set(s/c,r/c)}dispose(){this.disposed||(this.disposed=!0,this.wetness.value=this.inletRain.value=0,this.streaks.removeFromParent(),this.streaks.geometry.dispose(),this.material.dispose())}}const gr=(i,t,e)=>{const n=[],s=[];for(let r=0;r<i.length;r++){const o=i[r],a=i[(r+1)%i.length],l=t(o)-e,c=t(a)-e;if(l<=1e-9&&n.push(o),l>=-1e-9&&s.push(o),l<-1e-9&&c>1e-9||l>1e-9&&c<-1e-9){const h=l/(l-c),u=new Float64Array(o.length);for(let d=0;d<u.length;d++)u[d]=o[d]+(a[d]-o[d])*h;n.push(u),s.push(u)}}return[n,s]},Wl=(i,t)=>{const e=[];for(let n of i){let s=1/0,r=-1/0;for(const o of n){const a=t(o);a<s&&(s=a),a>r&&(r=a)}for(let o=Math.floor(s+1e-9)+1;o<r-1e-9&&n.length>=3;o++){const[a,l]=gr(n,t,o);a.length>=3&&e.push(a),n=l}n.length>=3&&e.push(n)}return e};function ju(i,t,e,n,s){const r=p=>(p[0]-i.xMin)/i.dx,o=p=>(p[2]-i.zMin)/i.dz,a=p=>r(p)+o(p),l=Math.min(r(t),r(e),r(n)),c=Math.max(r(t),r(e),r(n)),h=Math.min(o(t),o(e),o(n)),u=Math.max(o(t),o(e),o(n)),d=Math.min(a(t),a(e),a(n)),f=Math.max(a(t),a(e),a(n));if(Math.floor(l)===Math.floor(c-1e-9)&&Math.floor(h)===Math.floor(u-1e-9)&&Math.floor(d)===Math.floor(f-1e-9)){s(t,e,n);return}for(const p of Wl(Wl(Wl([[t,e,n]],r),o),a))for(let x=1;x+1<p.length;x++)s(p[0],p[x],p[x+1])}class nv{constructor(t,e,n){this.hf=t,this.mesh=e,this.clearance=n}quad(t,e,n,s,r,o,a,l,c,h,u,d,f,p=0){this.tri(t,e,n,s,r,o,a,l,c,f,p),this.tri(t,e,n,a,l,c,h,u,d,f,p)}edgeCrosses(t,e,n,s,r,o){const a=this.hf;for(let l=0;l<3;l++){const c=l===0?t:l===1?e:t+e,h=l===0?s:l===1?r:s+r,u=Math.max(c,h);for(let d=Math.floor(Math.min(c,h))+1;d<u;d++){const f=(d-c)/(h-c),p=a.xMin+(t+(s-t)*f)*a.dx,x=a.zMin+(e+(r-e)*f)*a.dz;if(n+(o-n)*f<a.yAt(p,x)+this.clearance)return!0}}return!1}needsFitting(t,e,n,s,r,o,a,l,c){const h=this.hf;if(e<h.yAt(t,n)+this.clearance||r<h.yAt(s,o)+this.clearance||l<h.yAt(a,c)+this.clearance)return!0;const u=(t-h.xMin)/h.dx,d=(n-h.zMin)/h.dz,f=(s-h.xMin)/h.dx,p=(o-h.zMin)/h.dz,x=(a-h.xMin)/h.dx,m=(c-h.zMin)/h.dz;if(this.edgeCrosses(u,d,e,f,p,r)||this.edgeCrosses(f,p,r,x,m,l)||this.edgeCrosses(x,m,l,u,d,e))return!0;const g=(f-u)*(m-d)-(p-d)*(x-u);if(Math.abs(g)<1e-12)return!1;const M=Math.min(h.nx-1,Math.floor(Math.max(u,f,x))),v=Math.min(h.nz-1,Math.floor(Math.max(d,p,m)));for(let S=Math.max(0,Math.ceil(Math.min(d,p,m)));S<=v;S++)for(let b=Math.max(0,Math.ceil(Math.min(u,f,x)));b<=M;b++){const E=((b-u)*(m-d)-(S-d)*(x-u))/g,_=((f-u)*(S-d)-(p-d)*(b-u))/g;if(E>=0&&_>=0&&E+_<=1&&e+E*(r-e)+_*(l-e)<h.y[S*h.nx+b]+this.clearance)return!0}return!1}tri(t,e,n,s,r,o,a,l,c,h,u=0){if(!this.needsFitting(t,e,n,s,r,o,a,l,c)){this.mesh.tri(t,e,n,s,r,o,a,l,c,h,u);return}const d=f=>Math.max(f[1],this.hf.yAt(f[0],f[2])+this.clearance);ju(this.hf,new Float64Array([t,e,n]),new Float64Array([s,r,o]),new Float64Array([a,l,c]),(f,p,x)=>{this.mesh.tri(f[0],d(f),f[2],p[0],d(p),p[2],x[0],d(x),x[2],h,u)})}}const td=i=>i[0],ed=i=>i[2],Un=1.5,Ci=.16,No=Math.hypot(Un,Ci),Ls=12,nd=(i,t)=>(i+2048)*8192+t+2048;class iv{constructor(t,e,n){Z(this,"bins",new Map);this.asphalt=t,this.marks=e,this.color=n}addDash(t,e,n,s,r,o){const a={x:t+Un*s,z:n+Un*r,dx:s,dz:r,y:e+Un*o,grade:o,flat:!0,area:0,pieces:[]},l=nd(Math.floor(a.x/Ls),Math.floor(a.z/Ls));let c=this.bins.get(l);c||this.bins.set(l,c=[]),c.push(a)}tri(t,e,n,s,r,o,a,l,c,h){this.asphalt.tri(t,e,n,s,r,o,a,l,c,h);const u=Math.min(t,s,a)-No,d=Math.max(t,s,a)+No,f=Math.min(n,o,c)-No,p=Math.max(n,o,c)+No;for(let x=Math.floor(f/Ls);x<=Math.floor(p/Ls);x++)for(let m=Math.floor(u/Ls);m<=Math.floor(d/Ls);m++){const g=this.bins.get(nd(m,x));if(g)for(const M of g){if(M.x<u||M.x>d||M.z<f||M.z>p)continue;const v=(b,E,_)=>new Float64Array([(b-M.x)*M.dx+(_-M.z)*M.dz,E,-(b-M.x)*M.dz+(_-M.z)*M.dx]);let S=[v(t,e,n),v(s,r,o),v(a,l,c)];if(S=gr(S,td,-Un)[1],S=gr(S,td,Un)[0],S=gr(S,ed,-Ci)[1],S=gr(S,ed,Ci)[0],!(S.length<3)){M.pieces.push(S);for(let b=0;b<S.length;b++){const E=S[b],_=S[(b+1)%S.length];M.area+=(_[0]*E[2]-_[2]*E[0])/2,Math.abs(M.y+E[0]*M.grade-E[1])>.03&&(M.flat=!1)}}}}}finish(){for(const t of this.bins.values())for(const e of t){const n=s=>[e.x+s[0]*e.dx-s[2]*e.dz,s[1]+.05,e.z+s[0]*e.dz+s[2]*e.dx];if(e.flat&&Math.abs(e.area-4*Un*Ci)<1e-4){const s=(r,o)=>n(new Float64Array([r,e.y+r*e.grade,o]));this.marks.quad(...s(-Un,Ci),...s(Un,Ci),...s(Un,-Ci),...s(-Un,-Ci),this.color)}else for(const s of e.pieces)for(let r=1;r+1<s.length;r++)this.marks.tri(...n(s[0]),...n(s[r]),...n(s[r+1]),this.color)}}}const sv=1,id=2,rv=[z(5198680),z(11575168),z(9072466),z(12434356)],ov=z(4474957),sd=z(15921382),av=[.34,.3,.26,.22,.16,.15,.13,.11],rd=new Float32Array(9);function lv(i,t){const e=[i[0]/10,i[1]/10];for(let n=2;n<i.length;n+=2){const s=i[n-2]/10,r=i[n-1]/10,o=i[n]/10,a=i[n+1]/10,l=Math.max(1,Math.ceil(Math.hypot(o-s,a-r)/t));for(let c=1;c<=l;c++)e.push(s+(o-s)*c/l,r+(a-r)*c/l)}return e}class cv{constructor(){Z(this,"cells",new Map);Z(this,"segs",[]);Z(this,"size",40)}add(t,e,n,s,r,o){const a=this.segs.length/6;this.segs.push(t,e,n,s,r,o);const l=Math.floor(Math.min(t,n)/this.size),c=Math.floor(Math.max(t,n)/this.size),h=Math.floor(Math.min(e,s)/this.size),u=Math.floor(Math.max(e,s)/this.size);for(let d=l;d<=c;d++)for(let f=h;f<=u;f++){const p=(d+512)*4096+(f+512);let x=this.cells.get(p);x||this.cells.set(p,x=[]),x.push(a)}}nearest(t,e,n){let s=null;const r=Math.ceil(n/this.size),o=Math.floor(t/this.size),a=Math.floor(e/this.size);for(let l=o-r;l<=o+r;l++)for(let c=a-r;c<=a+r;c++){const h=this.cells.get((l+512)*4096+(c+512));if(h)for(const u of h){const d=this.segs[u*6],f=this.segs[u*6+1],p=this.segs[u*6+2],x=this.segs[u*6+3],m=p-d,g=x-f,M=Math.max(0,Math.min(1,((t-d)*m+(e-f)*g)/(m*m+g*g||1))),v=d+m*M,S=f+g*M,b=Math.hypot(t-v,e-S);b<=n&&(!s||b<s.dist)&&(s={dist:b,px:v,pz:S,cls:this.segs[u*6+4],name:this.segs[u*6+5]})}}return s}}function hv(i,t,e,n){const s=new ne,r=new ne,o=new cv,a=[],l=[];for(const[M,v,S,b,E,_]of i.roads){const y=b/10,w=lv(_,M<=3?6:5),T=w.length/2;if(T<2)continue;const C=v===0&&M<=1?ov:rv[v],D=v===0?1:0,O=av[M],P=(S&sv)!==0,G=t.yAt(w[0],w[1]),F=t.yAt(w[T*2-2],w[T*2-1]),k=new Float32Array(T);for(let X=1;X<T;X++)k[X]=k[X-1]+Math.hypot(w[X*2]-w[X*2-2],w[X*2+1]-w[X*2-1]);const V=k[T-1]||1,N=new Float32Array(T*3),L=new Float32Array(T*3),U=new Float32Array(T*3);for(let X=0;X<T;X++){const K=w[X*2],tt=w[X*2+1],nt=Math.max(X-1,0),ht=Math.min(X+1,T-1);let Nt=w[ht*2]-w[nt*2],rt=w[ht*2+1]-w[nt*2+1];const ft=Math.hypot(Nt,rt)||1;Nt/=ft,rt/=ft;let Dt=1;if(X>0&&X<T-1){const ce=w[X*2]-w[X*2-2],ge=w[X*2+1]-w[X*2-1],ae=Math.hypot(ce,ge)||1;Dt=1/Math.max(.6,(ce*Nt+ge*rt)/ae)}const Tt=-rt*(y/2)*Dt,Vt=Nt*(y/2)*Dt,Ft=P?G+(F-G)*(k[X]/V)+.6+1*Math.sin(Math.PI*k[X]/V):NaN,oe=P?Ft:t.yAt(K,tt)+O,Xt=P?Ft:t.yAt(K+Tt,tt+Vt)+O,we=P?Ft:t.yAt(K-Tt,tt-Vt)+O;N.set([K+Tt,Xt,tt+Vt],X*3),L.set([K,oe,tt],X*3),U.set([K-Tt,we,tt-Vt],X*3),X>0&&M<=3&&o.add(w[X*2-2],w[X*2-1],K,tt,M,E)}const $=M<=1&&!(S&id)&&V>20,it=$&&!P?new iv(s,r,sd):void 0;if($){let X=0;for(let K=4;K<V-4;K+=12){for(;X<T-2&&k[X+1]<K;)X++;const tt=(K-k[X])/(k[X+1]-k[X]||1),nt=L[X*3]+(L[X*3+3]-L[X*3])*tt,ht=L[X*3+1]+(L[X*3+4]-L[X*3+1])*tt,Nt=L[X*3+2]+(L[X*3+5]-L[X*3+2])*tt;if(e!=null&&e(nt,Nt))continue;let rt=L[X*3+3]-L[X*3],ft=L[X*3+5]-L[X*3+2];const Dt=Math.hypot(rt,ft)||1;rt/=Dt,ft/=Dt;const Tt=(L[X*3+4]-L[X*3+1])/Dt;if(it){it.addDash(nt,ht,Nt,rt,ft,Tt);continue}const Vt=Tt*3,Ft=-ft*.16,oe=rt*.16,Xt=.05;r.quad(nt+Ft,ht+Xt,Nt+oe,nt+rt*3+Ft,ht+Vt+Xt,Nt+ft*3+oe,nt+rt*3-Ft,ht+Vt+Xt,Nt+ft*3-oe,nt-Ft,ht+Xt,Nt-oe,sd)}}const Y=P?s:new nv(t,it??s,.04);for(let X=0;X<T-1;X++){const K=X*3,tt=K+3;if(e){const nt=e(L[K],L[K+2]),ht=e(L[tt],L[tt+2]);if(nt&&ht)continue;if(nt!==ht){let Nt=0,rt=1;for(let ae=0;ae<12;ae++){const ue=(Nt+rt)/2;e(L[K]+(L[tt]-L[K])*ue,L[K+2]+(L[tt+2]-L[K+2])*ue)===nt?Nt=ue:rt=ue}const ft=(Nt+rt)/2;for(const ae of[N,L,U])for(let ue=0;ue<3;ue++)rd[(ae===N?0:ae===L?3:6)+ue]=ae[K+ue]+(ae[tt+ue]-ae[K+ue])*ft;const[Dt,Tt,Vt,Ft,oe,Xt,we,ce,ge]=rd;nt?(Y.quad(Dt,Tt,Vt,N[tt],N[tt+1],N[tt+2],L[tt],L[tt+1],L[tt+2],Ft,oe,Xt,C,D),Y.quad(Ft,oe,Xt,L[tt],L[tt+1],L[tt+2],U[tt],U[tt+1],U[tt+2],we,ce,ge,C,D)):(Y.quad(N[K],N[K+1],N[K+2],Dt,Tt,Vt,Ft,oe,Xt,L[K],L[K+1],L[K+2],C,D),Y.quad(L[K],L[K+1],L[K+2],Ft,oe,Xt,we,ce,ge,U[K],U[K+1],U[K+2],C,D));continue}}if(Y.quad(N[K],N[K+1],N[K+2],N[tt],N[tt+1],N[tt+2],L[tt],L[tt+1],L[tt+2],L[K],L[K+1],L[K+2],C,D),Y.quad(L[K],L[K+1],L[K+2],L[tt],L[tt+1],L[tt+2],U[tt],U[tt+1],U[tt+2],U[K],U[K+1],U[K+2],C,D),P){const nt=z(v===2?7297604:13225162);for(const ht of[N,U])s.quad(ht[K],ht[K+1],ht[K+2],ht[tt],ht[tt+1],ht[tt+2],ht[tt],ht[tt+1]+1.05,ht[tt+2],ht[K],ht[K+1]+1.05,ht[K+2],nt),s.quad(ht[K],ht[K+1]-.7,ht[K+2],ht[tt],ht[tt+1]-.7,ht[tt+2],ht[tt],ht[tt+1],ht[tt+2],ht[K],ht[K+1],ht[K+2],z(9276036))}}if(M<=5&&!P)for(const X of[0,T-1]){const K=L[X*3],tt=L[X*3+1],nt=L[X*3+2];if(e!=null&&e(K,nt))continue;const ht=16;for(let Nt=0;Nt<ht;Nt++){const rt=Nt/ht*Math.PI*2,ft=(Nt+1)/ht*Math.PI*2,Dt=K+Math.cos(ft)*y/2,Tt=nt+Math.sin(ft)*y/2,Vt=K+Math.cos(rt)*y/2,Ft=nt+Math.sin(rt)*y/2;Y.tri(K,tt,nt,Dt,t.yAt(Dt,Tt)+O,Tt,Vt,t.yAt(Vt,Ft)+O,Ft,C,D)}}if(it==null||it.finish(),S&id){let X=0,K=0;for(let ft=0;ft<T;ft++)X+=w[ft*2],K+=w[ft*2+1];X/=T,K/=T;const tt=T>>1,nt=uv(w[0],w[1],w[tt*2],w[tt*2+1],w[T*2-2],w[T*2-1]),ht=nt?nt.x:X,Nt=nt?nt.z:K,rt=nt?nt.r:Math.hypot(w[0]-X,w[1]-K);rt>3&&rt<40&&!(e!=null&&e(ht,Nt))&&!l.some(ft=>Math.hypot(ft.x-ht,ft.z-Nt)<12)&&l.push({x:ht,z:Nt,r:rt,w:y})}M<=3&&a.push({cls:M,name:E>=0?i.names[E]:"",width:y,flags:S,pts:L,length:V})}const c=z(13158078),h=z(7314002),u=z(4943936);for(const M of l){const v=M.r-M.w/2-.3;if(v<1.2)continue;const S=t.yAt(M.x,M.z)+.2;s.frame(M.x,S,M.z,0),s.cyl(0,0,0,v,v,.4,14,c,h),s.blob(0,.9,0,v*.45,.8,v*.45,6,3,u,z(7181400)),s.frame()}const d=new Dn({vertexColors:!0,roughness:.92,metalness:0,side:Ie,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),f=s.build();n&&(f.setAttribute("aAsphalt",f.getAttribute("glow")),n(d,!0));const p=new Jt(od(f),d);p.receiveShadow=!0,p.name="roads";const x=vo(new Ln({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})),m=new Jt(od(r.build()),x);m.name="road-markings";const g=new rn;return g.add(p,m),{group:g,index:o,paths:a}}function od(i){return i.deleteAttribute("glow"),i}function uv(i,t,e,n,s,r){const o=2*(i*(n-r)+e*(r-t)+s*(t-n));if(Math.abs(o)<.001)return null;const a=i*i+t*t,l=e*e+n*n,c=s*s+r*r,h=(a*(n-r)+l*(r-t)+c*(t-n))/o,u=(a*(s-e)+l*(i-s)+c*(e-i))/o;return{x:h,z:u,r:Math.hypot(i-h,t-u)}}class dv{constructor(t,e=1){Z(this,"ratio");Z(this,"floor");Z(this,"sampleSeconds",0);Z(this,"sampleFrames",0);Z(this,"slowSeconds",0);Z(this,"smoothSeconds",0);Z(this,"retryAfter",0);Z(this,"lastRaise",-1/0);this.ceiling=t,this.ratio=t,this.floor=Math.min(t,e)}resetSampling(){this.sampleSeconds=this.sampleFrames=this.slowSeconds=this.smoothSeconds=0}update(t,e,n){if(e<=0||e>=.25)return this.resetSampling(),!1;if(this.sampleSeconds+=e,this.sampleFrames+=1,this.sampleSeconds<1)return!1;const s=this.sampleSeconds,r=this.sampleFrames/s;return this.sampleSeconds=this.sampleFrames=0,this.slowSeconds=r<n*.9?this.slowSeconds+s:0,this.slowSeconds>=2&&this.ratio>this.floor?(this.ratio=Math.max(this.floor,this.ratio*.75),this.retryAfter=t+(t-this.lastRaise<15?90:20),this.resetSampling(),!0):this.ratio>=this.ceiling||t<this.retryAfter||(this.smoothSeconds=r>=n*.97?this.smoothSeconds+s:0,this.smoothSeconds<8)?!1:(this.ratio=Math.min(this.ceiling,this.ratio/.75),this.lastRaise=t,this.resetSampling(),!0)}}const xr=-36,Xl=170,fv=`
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
`,ql=2;function pv(){const i=new $s(new Uint8Array([128,128,128,255]),1,1);return i.needsUpdate=!0,{fallback:i,maps:Array.from({length:ql},()=>({value:i})),rects:Array.from({length:ql},()=>({value:new ve(0,0,1,0)}))}}function mv({pos:i,nor:t,uv:e,idx:n}){const s=new Ae;return s.setAttribute("position",new Ee(i,3)),s.setAttribute("normal",new Ee(t,3)),s.setAttribute("uv",new Ee(e,2)),s.setIndex(new Ee(n,1)),s.computeBoundingSphere(),s}function gv(i,t,e,n,s){const r=new Dn({map:e,roughness:.96,metalness:0});r.onBeforeCompile=a=>{a.uniforms.uTide=n;for(let l=0;l<ql;l++)a.uniforms["uDetail"+l]=s.maps[l],a.uniforms["uDetailRect"+l]=s.rects[l];a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform float uTide;
uniform sampler2D uDetail0;
uniform vec4 uDetailRect0;
uniform sampler2D uDetail1;
uniform vec4 uDetailRect1;
${fv}`).replace("#include <map_fragment>",`#include <map_fragment>
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
          float above = vWPos.y / ${qn.toFixed(2)} - uTide;
          float wet = smoothstep(0.45, 0.03, above);
          diffuseColor.rgb *= mix(1.0, 0.76, wet);
        }`)},r.customProgramCacheKey=()=>"inverloch-terrain-3";const o=new rn;for(const a of t){const l=new Jt(mv(a),r);l.receiveShadow=!0,l.name="terrain",o.add(l)}return o.add(_v(i),vv(i)),o}function xv(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function _v(i){const t=xv(i),e=t.length,n=[],s=[],r=[],o=new At(9074780),a=new At(6180669),l=new At(3813673),c=[[0,o,a],[1,a,l]];for(let d=0;d<e;d++){const[f,p]=t[d],[x,m]=t[(d+1)%e],g=i.yAt(f,p),M=i.yAt(x,m),v=x-f,S=m-p,b=Math.hypot(v,S)||1,E=-S/b*-1,_=v/b*-1;for(const[y,w,T]of c){const D=y===0?g:g-6,O=y===0?g-6:xr,P=y===0?M:M-6,G=y===0?M-6:xr;n.push(f,D,p,x,P,m,x,G,m,f,D,p,x,G,m,f,O,p);for(const F of[w,w,T,w,T,T])s.push(F.r,F.g,F.b);for(let F=0;F<6;F++)r.push(E,0,_)}}const h=new Ae;h.setAttribute("position",new Me(n,3)),h.setAttribute("normal",new Me(r,3)),h.setAttribute("color",new Me(s,3));const u=new Jt(h,new Dn({vertexColors:!0,roughness:1,side:Ie}));return u.name="skirt",u}function vv(i){const t=new rn,e=i.xMax-i.xMin+Xl*2,n=i.zMax-i.zMin+Xl*2,s=190,r=(i.xMin+i.xMax)/2,o=(i.zMin+i.zMax)/2,a=new Jt(new zi(e,s,n),new Dn({color:1779245,roughness:.75,metalness:.1}));a.position.set(r,xr-s/2,o),a.receiveShadow=!0,t.add(a);const l=document.createElement("canvas");l.width=2048,l.height=160;const c=l.getContext("2d");c.fillStyle="#1b262d",c.fillRect(0,0,l.width,l.height),c.fillStyle="#e9d9a6",c.textBaseline="middle",c.font="600 78px 'Space Grotesk', system-ui, sans-serif",c.fillText("INVERLOCH",40,84);const h=c.measureText("INVERLOCH").width;c.fillStyle="#9fb4bd",c.font="400 42px 'Space Grotesk', system-ui, sans-serif",c.fillText("Bass Coast, Victoria   ·   38.63° S  145.73° E   ·   Anderson Inlet & Bass Strait",40+h+46,88);const u=new ol(l);u.colorSpace=Ue,u.anisotropy=8;const d=1700,f=new Jt(new Hn(d,d*(l.height/l.width)),new Ln({map:u,toneMapped:!1}));f.position.set(r-e/2+d/2+110,xr-s/2,o+n/2+.6),t.add(f);const p=document.createElement("canvas");p.width=p.height=256;const x=p.getContext("2d");x.fillStyle="#e9d9a6",x.beginPath(),x.moveTo(128,18),x.lineTo(176,150),x.lineTo(128,122),x.lineTo(80,150),x.closePath(),x.fill(),x.font="700 86px 'Space Grotesk', system-ui, sans-serif",x.textAlign="center",x.fillText("N",128,240);const m=new ol(p);m.colorSpace=Ue;const g=new Jt(new Hn(130,130),new Ln({map:m,transparent:!0,toneMapped:!1}));return g.rotation.x=-Math.PI/2,g.position.set(i.xMax+Xl/2,xr+.6,i.zMin+120),t.add(g),t}const ad=[[-.375,-.125],[.125,-.375],[.375,.125],[-.125,.375]],Mv=4e3,Sv=12e3;class yv{constructor(t,e){Z(this,"size",new Lt);Z(this,"screen",new Vc);Z(this,"screenCamera",new gl);Z(this,"blend",new on({depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{previous:{value:null},currentFrame:{value:null},weight:{value:1}},vertexShader:`
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
    `}));Z(this,"quad",new Jt(new Hn(2,2),this.blend));Z(this,"history");Z(this,"sample");Z(this,"capture");this.renderer=t,this.onFinish=e,this.quad.frustumCulled=!1,this.screen.add(this.quad)}get pending(){return!!this.capture&&!this.capture.encoding}start(){return this.capture?Promise.reject(new Error("An antialiased photo is already being captured.")):new Promise((t,e)=>{const n=this.capture={resolve:t,reject:e,deadline:performance.now()+Sv,samples:0,bestSamples:0,encoding:!1};this.armTimeout(n)})}draw(t,e,n){var a,l;const s=this.capture;if(!s||s.encoding)return!1;this.renderer.getDrawingBufferSize(this.size);const{x:r,y:o}=this.size;(((a=this.history)==null?void 0:a.image.width)!==r||((l=this.history)==null?void 0:l.image.height)!==o)&&(this.releaseTextures(),this.history=new ah(r,o),this.sample=new ah(r,o),this.blend.uniforms.previous.value=this.history,this.blend.uniforms.currentFrame.value=this.sample,n=!0),n&&(s.samples=0);try{return this.drawSample(t,e,s.samples),s.samples++,s.samples===ad.length?this.encode(s):(this.renderer.copyFramebufferToTexture(this.history),s.samples>s.bestSamples&&(s.bestSamples=s.samples,this.armTimeout(s))),!0}catch{return this.cancel("The browser could not capture an antialiased photo."),!1}}drawSample(t,e,n){const[s,r]=ad[n],o=e.projectionMatrix.elements,a=o[8],l=o[9];o[8]+=2*s/this.size.x,o[9]+=2*r/this.size.y,e.projectionMatrixInverse.copy(e.projectionMatrix).invert();const c=this.renderer.shadowMap.autoUpdate;n>0&&(this.renderer.shadowMap.autoUpdate=!1);try{this.renderer.render(t,e)}finally{o[8]=a,o[9]=l,e.projectionMatrixInverse.copy(e.projectionMatrix).invert(),this.renderer.shadowMap.autoUpdate=c}n>0&&(this.renderer.copyFramebufferToTexture(this.sample),this.blend.uniforms.weight.value=1/(n+1),this.renderer.render(this.screen,this.screenCamera))}encode(t){t.encoding=!0,this.armTimeout(t),this.releaseTextures(),this.onFinish(),this.renderer.domElement.toBlob(e=>{this.finish(t)&&(e?t.resolve(e):t.reject(new Error("The browser did not write the antialiased PNG.")))},"image/png")}armTimeout(t){window.clearTimeout(t.timeout);const e=Math.min(Mv,Math.max(0,t.deadline-performance.now())),n=t.encoding?"The browser did not finish writing the antialiased PNG.":"The view did not stay still long enough to save an antialiased photo.";t.timeout=window.setTimeout(()=>this.cancel(n),e)}cancel(t){const e=this.capture;!e||!this.finish(e)||e.reject(new Error(t))}finish(t){return this.capture!==t?!1:(window.clearTimeout(t.timeout),this.capture=void 0,t.encoding||(this.releaseTextures(),this.onFinish()),!0)}releaseTextures(){var t,e;(t=this.history)==null||t.dispose(),(e=this.sample)==null||e.dispose(),this.history=this.sample=void 0,this.blend.uniforms.previous.value=null,this.blend.uniforms.currentFrame.value=null}dispose(){this.cancel("The Inverloch view was closed before saving the photo."),this.quad.geometry.dispose(),this.blend.dispose()}}function Uo(i,t,e,n,s,r,o,a,l,c){const h=new ul(1,0),u=h.getAttribute("position"),d=[];for(let f=0;f<u.count;f++){const p=u.getX(f),x=u.getY(f),m=u.getZ(f),g=Math.sin(p*12.9898+x*78.233+m*37.719+a*4.1)*43758.5453,M=.8+(g-Math.floor(g))*.42;d.push([t+p*s*M,e+x*r*(x<0?.75:M),n+m*o*M])}for(let f=0;f<d.length;f+=3){const[p,x,m]=[d[f],d[f+1],d[f+2]],g=Qt.clamp(((p[1]+x[1]+m[1])/3-(e-r))/(2*r),0,1);i.tri(p[0],p[1],p[2],x[0],x[1],x[2],m[0],m[1],m[2],lr(l,c,g))}h.dispose()}function Pi(i){const t=i.build();return t.deleteAttribute("glow"),t}function bv(){const i=[];let t=new ne;return Uo(t,0,.44,0,.82,.56,.82,1,z(3098152),z(7507285)),i.push(Pi(t)),t=new ne,t.cyl(0,0,0,.04,.026,.56,4,z(11905429)),Uo(t,0,.72,0,.36,.3,.36,2,z(4151352),z(9349240)),Uo(t,.17,.52,.1,.24,.19,.24,3,z(3887925),z(8362603)),i.push(Pi(t)),t=new ne,t.cyl(0,0,0,.055,.04,.4,4,z(7297608)),Uo(t,0,.64,0,.46,.38,.46,4,z(3695150),z(9091170)),i.push(Pi(t)),t=new ne,t.cyl(0,0,0,.035,.03,.16,4,z(5916728)),t.cyl(0,.12,0,.23,.11,.42,6,z(2506539)),t.cyl(0,.5,0,.15,0,.5,6,z(4020796)),i.push(Pi(t)),i}function ld(i){const t=[],e=i?5:7;let n=new ne;return n.blob(0,.48,0,.81,.52,.81,e,2,z(4018735),z(7507285)),t.push(Pi(n)),n=new ne,i||(n.cyl(0,0,0,.04,.026,.56,3,z(11905429)),n.blob(.17,.52,.1,.24,.19,.24,4,2,z(3887925),z(8362603))),n.blob(i?.05:0,.72,0,i?.39:.36,.3,.36,e,2,z(4546110),z(9349240)),t.push(Pi(n)),n=new ne,i||n.cyl(0,0,0,.055,.04,.4,3,z(7297608)),n.blob(0,.64,0,.46,.38,.46,e,2,z(3695150),z(9091170)),t.push(Pi(n)),n=new ne,i?n.cyl(0,.15,0,.23,0,.85,e,z(4020796)):(n.cyl(0,.12,0,.23,.11,.42,4,z(2506539)),n.cyl(0,.5,0,.15,0,.5,5,z(4020796))),t.push(Pi(n)),t}function Ev(i,t,e,n=()=>!1){const s=new rn;s.name="trees";const r=[bv(),ld(!1),ld(!0)],o=[],a=new so({vertexColors:!0}),l=650,c=new Map,h=i.trees,u=Pe(88);for(let v=0;v<h.length;v+=M_){if(e<1&&u()>e||n(h[v]/4,h[v+1]/4))continue;const b=`${h[v+2]>>8}:${Math.floor(h[v]/4/l)}:${Math.floor(h[v+1]/4/l)}`;let E=c.get(b);E||c.set(b,E=[]),E.push(v)}const d=new ie,f=new Tn,p=new q,x=new q,m=new q(0,1,0),g=new At;let M=0;for(const[v,S]of c){const b=Number(v.split(":")[0]),E=r.map((_,y)=>{const w=new je(_[b],a,S.length);return w.name=["tree-near","tree-mid","tree-far"][y],w});S.forEach((_,y)=>{const w=h[_]/4,T=h[_+1]/4,C=(h[_+2]&255)/10,D=Pe(_*2654435761+11);x.set(w,t.yAt(w,T)-.15,T),f.setFromAxisAngle(m,D()*Math.PI*2);const O=.85+D()*.35;p.set(C*O,C,C*(.85+D()*.35)),d.compose(x,f,p);const P=.8+D()*.34;g.setRGB(P*(.94+D()*.14),P,P*(.9+D()*.12));for(const G of E)G.setMatrixAt(y,d),G.setColorAt(y,g)}),o.push(new Vu(E.map(_=>[_]),s)),M+=S.length}return{group:s,count:M,updateLod(v,S,b){for(const E of o)E.update(v,S,b)}}}const wv=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Tv=`
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
}`;function Av(i,t,e){const n=i.w*i.h,s=new Uint16Array(n*2);for(let p=0;p<n;p++)s[p*2]=Xc.toHalfFloat(i.raw[p]),s[p*2+1]=Xc.toHalfFloat(i.exposure[p]);const r=new $s(s,i.w,i.h,mi,En);r.minFilter=r.magFilter=Ye,r.wrapS=r.wrapT=On,r.needsUpdate=!0;const o={tField:{value:r},uSize:{value:new Lt(i.sizeX,i.sizeZ)},uTide:t,uTime:{value:0},uSunDir:{value:new q(.4,.8,.3).normalize()},uSunColor:{value:new At(16773848)},uShallow:{value:new At(7129789)},uDeep:{value:new At(937848)},uSky:{value:new At(12573938)},uFoam:{value:1}};e&&(o.uInletRain=e);const a=new on({uniforms:o,vertexShader:wv,fragmentShader:Tv,transparent:!0,depthWrite:!1,defines:e?{RAIN_RIPPLES:1}:{}}),l=new Hn(i.xMax-i.xMin,i.zMax-i.zMin);l.rotateX(-Math.PI/2);const c=new Jt(l,a);c.position.set((i.xMin+i.xMax)/2,t.value*qn,(i.zMin+i.zMax)/2),c.renderOrder=2,c.name="water";const h=new Jt(new Ae,new Ln({color:1929103,transparent:!0,opacity:.8,side:Ie,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));h.renderOrder=1,h.name="water-edge";const u=[];for(let p=0;p<i.nx;p++)u.push([i.xMin+p*i.dx,i.zMin]);for(let p=1;p<i.nz;p++)u.push([i.xMax,i.zMin+p*i.dz]);for(let p=i.nx-2;p>=0;p--)u.push([i.xMin+p*i.dx,i.zMax]);for(let p=i.nz-2;p>=1;p--)u.push([i.xMin,i.zMin+p*i.dz]);const d=u.map(([p,x])=>i.yAt(p,x)),f=p=>{t.value=p;const x=p*qn;c.position.y=x;const m=[],g=u.length;for(let v=0;v<g;v++){const S=(v+1)%g,b=d[v],E=d[S];if(b>=x&&E>=x)continue;const[_,y]=u[v],[w,T]=u[S],C=Math.min(b,x),D=Math.min(E,x);m.push(_,x,y,w,x,T,w,D,T,_,x,y,w,D,T,_,C,y)}h.geometry.dispose();const M=new Ae;M.setAttribute("position",new Me(m,3)),h.geometry=M};return f(t.value),{mesh:c,skirt:h,uniforms:o,setTide:f}}const Rv="detail-abeckett-ultra-v1.json",Yl=-38.63351,cd=145.72774,Cv=111320*Math.cos(Yl*Math.PI/180);class Pv{constructor(t,e,n,s,r){Z(this,"group");Z(this,"daylight",{value:1});Z(this,"request");Z(this,"retryAt",0);Z(this,"origin");Z(this,"sx");Z(this,"sz");this.scene=t,this.manifest=e,this.ground=s,this.redraw=r,this.origin=n(Yl,cd);const o=n(Yl-100/110540,cd+100/Cv);this.sx=(o[0]-this.origin[0])/100,this.sz=(o[1]-this.origin[1])/100}update(t,e){this.daylight.value=Math.min(1,.08+e*.3);const n=this.origin[0]+22*this.sx,s=this.origin[1]+37*this.sz,r=Math.hypot(t.x-n,t.y-this.ground(n,s),t.z-s);if(this.group)this.group.visible=r<(this.group.visible?155:130);else if(r>220&&this.request)this.request.abort(),this.request=void 0;else if(r<155&&!this.request&&performance.now()>=this.retryAt){const o=this.request=new AbortController;this.load(o)}}async load(t){try{const e=new URL(Rv,new URL(this.manifest,document.baseURI)),n=await fetch(e,{signal:t.signal});if(!n.ok)throw new Error(String(n.status));const s=await n.json();if(t.signal.aborted)return;const r=this.build(s);this.group=r,this.scene.add(r),this.redraw()}catch{t.signal.aborted||(this.retryAt=performance.now()+3e4)}finally{this.request===t&&(this.request=void 0)}}build(t){const e=new ne,n=new ne,s=new ne,r=z(6842465),o=z(10196618),a=z(3883588),l=z(12039851),c=z(16777215);for(const[d,f,p,x,m,g,M]of t.fronts){const v=Math.hypot(p-d,x-f),S=Math.atan2(m,g);e.frame(d,0,f,S),n.frame(d,0,f,S);const b=T=>3.15+(M?.24*(1-T/3.2):0);for(const T of[.32,1.58,2.97]){const C=b(T);e.box(.05,C-.09,T-.045,v-.05,C,T+.045,r)}const E=Math.max(2,Math.round(v/1.25));for(let T=0;T<=E;T++){const C=.095+T*(v-.19)/E;e.quad(C,b(.22)-.06,.22,C,b(3.05)-.06,3.05,C+.07,b(3.05)-.06,3.05,C+.07,b(.22)-.06,.22,o)}e.box(.055,3.045,3.14,v-.055,3.105,3.3,r);const _=v-1.7,y=Math.max(2,Math.round((v-1.4)/2.1)),w=M?.22:.34;for(let T=0;T<y;T++){const C=.18+_*T/y+.055,D=.18+_*(T+1)/y-.055;n.quad(C,.57,w,D,.57,w,D,2.72,w,C,2.72,w,c),e.box(C-.035,.51,w-.045,D+.035,.56,w+.04,a),e.box(C-.035,2.25,w-.025,D+.035,2.28,w+.02,l)}e.box(v-1.17,.93,w+.05,v-1.135,1.35,w+.085,l),e.box(v-1.28,.13,.15,v-.2,.17,.42,o)}for(const[d,f,p,x]of t.trees){const m=Pe(x+431),g=[5466952,7701590,8819806,6781777].map(z);s.frame(d,0,f);for(let M=0;M<90;M++){const v=m()*Math.PI*2,S=(1.05+m()*2.25)*p,b=S*Math.sin(v),E=S*Math.cos(v),_=(6.55+1.6*m()-.35*S)*p,y=(.11+.22*m())*p,w=(.16+.28*m())*p,T=g[M%4];s.tri(b-y,_+w,E,b+y,_+.42*w,E+.1,b,_-w,E+.18,T)}}const h=new rn;h.name="A'Beckett Street close detail";const u=(d,f,p)=>{const x=d.build(),m=x.getAttribute("position");for(let M=0;M<m.count;M++){const v=this.origin[0]+m.getX(M)*this.sx,S=this.origin[1]+m.getZ(M)*this.sz;m.setXYZ(M,v,this.ground(v,S)+.08+m.getY(M),S)}x.deleteAttribute("glow"),x.computeBoundingSphere();const g=new Jt(x,f);g.castShadow=p,g.receiveShadow=p,h.add(g)};return u(e,new Dn({vertexColors:!0,roughness:.73,metalness:.1,side:Ie}),!0),u(s,new so({vertexColors:!0,side:Ie}),!0),u(n,new on({uniforms:{daylight:this.daylight},transparent:!0,depthWrite:!1,vertexShader:`varying vec3 world, facing;
        void main(){vec4 p=modelMatrix*vec4(position,1.);world=p.xyz;facing=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*p;}`,fragmentShader:`varying vec3 world, facing; uniform float daylight;
        void main(){vec3 eye=normalize(cameraPosition-world),n=normalize(facing),r=reflect(-eye,n);
          float sky=smoothstep(-.09,.27,r.y),f=pow(1.-clamp(dot(eye,n),0.,1.),3.);
          gl_FragColor=vec4(daylight*mix(vec3(.13,.18,.15),vec3(.54,.68,.78),sky),.045+.19*f+.085*sky);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),!1),h}dispose(){var t;(t=this.request)==null||t.abort()}}const hd=-.9,ud=1.3,dd=.2,Ds={x:260,z:150,dist:3900,polar:55,azimuth:16},Lv={ultra:{step:1,trees:1,shadow:4096,pixelRatio:2},high:{step:1,trees:1,shadow:4096,pixelRatio:2},medium:{step:2,trees:.6,shadow:2048,pixelRatio:1.3},low:{step:2,trees:.35,shadow:0,pixelRatio:1}},Dv={ultra:{cars:[200,400,1100],trees:[260,770,4e3]},high:{cars:[170,340,1050],trees:[235,710,3800]},medium:{cars:[120,270,820],trees:[160,530,2850]},low:{cars:[85,190,600],trees:[100,380,2200]}},Iv=()=>new Promise(i=>requestAnimationFrame(()=>i()));function Nv(i,t){const n=t.positions,s=t.normals,r=t.colors,o=t.uvs,a=t.indices,l=a?a.length:n.length/3,c=new ie().fromArray(Array.from(t.matrix)),h=new kt().getNormalMatrix(c),u=new q,d=v=>{const S=a?a[v]:v,b=new Float64Array(11);return u.set(n[S*3],n[S*3+1],n[S*3+2]).applyMatrix4(c),b[0]=u.x,b[1]=u.y,b[2]=u.z,s&&(u.set(s[S*3],s[S*3+1],s[S*3+2]).applyMatrix3(h).normalize(),b[3]=u.x,b[4]=u.y,b[5]=u.z),r&&(b[6]=r[S*3],b[7]=r[S*3+1],b[8]=r[S*3+2]),o&&(b[9]=o[S*2],b[10]=o[S*2+1]),b},f=[],p=[],x=[],m=[],g=v=>{f.push(v[0],v[1]+i.yAt(v[0],v[2]),v[2]),s&&p.push(v[3],v[4],v[5]),r&&x.push(v[6],v[7],v[8]),o&&m.push(v[9],v[10])},M=(v,S,b)=>{g(v),g(S),g(b)};for(let v=0;v+2<l;v+=3){const S=d(v),b=d(v+1),E=d(v+2);ju(i,S,b,E,M)}return{positions:new Float32Array(f),normals:s?new Float32Array(p):void 0,colors:r?new Float32Array(x):void 0,uvs:o?new Float32Array(m):void 0}}function Uv(i,t,e){let n=0;for(let s=0;s<i.length;s++){const r=i[s],o=i[(s+1)%i.length],a=(o[0]-r[0])*(e-r[1])-(o[1]-r[1])*(t-r[0]);if(a!==0){if(n===0)n=Math.sign(a);else if(Math.sign(a)!==n)return!1}}return!0}const Fv=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class Ov{constructor(t,e,n,s){Z(this,"renderer");Z(this,"scene",new Vc);Z(this,"camera",new In(38,1,5,9e4));Z(this,"controls");Z(this,"atmosphere");Z(this,"clouds");Z(this,"hasWeatherTime",!1);Z(this,"weather",new G1);Z(this,"showers");Z(this,"storm");Z(this,"water");Z(this,"coastalHaze");Z(this,"stillPhoto");Z(this,"onPhotoVisibilityChange",()=>{var t;document.hidden&&((t=this.stillPhoto)==null||t.cancel("Keep the Inverloch view visible while saving the photo."))});Z(this,"hf");Z(this,"life");Z(this,"trees");Z(this,"solid");Z(this,"designedWalls",[]);Z(this,"labels");Z(this,"places",[]);Z(this,"tide",{value:dd});Z(this,"raf",0);Z(this,"last",0);Z(this,"time",0);Z(this,"dirty",!0);Z(this,"ultraStreet");Z(this,"animating",!0);Z(this,"disposed",!1);Z(this,"abort",new AbortController);Z(this,"worker");Z(this,"detailStreaming");Z(this,"resizeObserver");Z(this,"flight");Z(this,"lastCompass",NaN);Z(this,"width",1);Z(this,"height",1);Z(this,"quality","high");Z(this,"resolution");Z(this,"pacing");Z(this,"solarMinutes",NaN);Z(this,"roadPaths",[]);Z(this,"external");Z(this,"meta");Z(this,"shadowAim",new q);Z(this,"lookDir",new q);Z(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=Qt.degToRad(e.azimuth),r=-Math.sin(s),o=-Math.cos(s),a=Math.cos(s),l=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+o*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-o*n};break;case"ArrowLeft":c={...e,x:e.x-a*n,z:e.z-l*n};break;case"ArrowRight":c={...e,x:e.x+a*n,z:e.z+l*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=Ds;break;default:return}t.preventDefault(),this.fly(c,.3)});Z(this,"frame",t=>{var p,x,m,g,M,v,S,b,E,_;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,document.hidden){this.pacing.reset(),this.resolution.resetSampling();return}if(this.flight){const y=this.flight;y.t=Math.min(1,y.t+e/y.duration);const w=Fv(y.t),T=(C,D)=>C+(D-C)*w;this.applyView({x:T(y.from.x,y.to.x),z:T(y.from.z,y.to.z),dist:Math.exp(T(Math.log(y.from.dist),Math.log(y.to.dist))),polar:T(y.from.polar,y.to.polar),azimuth:T(y.from.azimuth,y.to.azimuth)}),y.t>=1&&(this.flight=void 0)}this.controls&&!this.external&&this.controls.update()&&(this.dirty=!0);const n=(p=this.stillPhoto)!=null&&p.pending?this.stillPhoto:void 0;if(!n&&this.atmosphere.update(e)&&(this.dirty=!0),!n&&this.animating&&(this.time+=e,this.water.uniforms.uTime.value=this.time,(x=this.life)==null||x.update(e,this.time),this.dirty=!0),!n&&this.opts.assets.detail){const{x:y,y:w,z:T}=this.camera.position;(m=this.detailStreaming)==null||m.update(t/1e3,y,w,T,w-this.hf.yAt(y,T))}if(!this.dirty&&!n)return;const s=this.pacing.takeFrame(t);if(s===void 0)return;const r=this.dirty;this.dirty=!1,!n&&this.animating&&this.resolution.update(t/1e3,s,this.pacing.target)&&this.renderer.setPixelRatio(this.resolution.ratio);const o=this.camera;(g=this.ultraStreet)==null||g.update(o.position,this.atmosphere.sun.intensity);let a,l=1/0;const c=!!this.controls&&!this.external,h=this.hf.yAt(o.position.x,o.position.z);if(c&&(o.position.y=Math.max(o.position.y,h+12)),!n||!this.hasWeatherTime){const y=this.weatherTime(),w=this.weather;w.update(y),this.clouds.update(y),this.clouds.setCover(w.cover),this.clouds.setFlash(((M=this.storm)==null?void 0:M.update(y,w,o.position,this.opts.onThunder))??0);const T=w.rain>.015&&o.position.y-h<4&&this.solidAt(o.position.x,o.position.z);(v=this.showers)==null||v.update(w.rain,w.wetness,this.time,void 0,void 0,T),this.hasWeatherTime=!0}const u=Math.max(1,o.position.y-Math.max(h,this.waterLevel));if(this.controls&&c)a=o.position.distanceTo(this.controls.target),this.shadowAim.copy(this.controls.target);else{o.getWorldDirection(this.lookDir);const y=Math.min(this.lookDir.y<-.05?u/-this.lookDir.y:1e9,40+u*3,3e3);this.shadowAim.copy(o.position).addScaledVector(this.lookDir,y),a=Math.max(y,u)*1.3,l=Math.max(350,u*10)}const d=c?Qt.clamp(a*.02,2,80):Qt.clamp(a*.012,.4,60);Math.abs(d-o.near)>o.near*.05&&(o.near=d,o.updateProjectionMatrix());const f=Dv[this.quality];if((S=this.life)==null||S.updateParkedLod(o.position,u,f.cars),(b=this.trees)==null||b.updateLod(o.position,u,f.trees),this.atmosphere.aimShadow(this.shadowAim,a),n||(E=this.detailStreaming)==null||E.applyReady(),n!=null&&n.draw(this.scene,o,r)||this.renderer.render(this.scene,o),(_=this.labels)==null||_.update(o,this.width,this.height,l),c){const y=Math.round(this.currentView().azimuth);y!==this.lastCompass&&(this.lastCompass=y,this.cb.onCompass(y))}});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.external=!!s.external,this.pacing=new r1(s.frameTarget)}async init(){var k;try{this.renderer=new qx({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D model needs.");return}const t=this.renderer;this.quality=this.pickQuality();let e=Lv[this.quality];const n=(navigator.deviceMemory??8)>4;this.quality==="medium"&&n&&!this.opts.quality&&(e={...e,pixelRatio:2,trees:.8}),this.resolution=new dv(Math.min(window.devicePixelRatio||1,e.pixelRatio),this.quality==="low"?.6:1),t.setPixelRatio(this.resolution.ratio),t.outputColorSpace=Ue,t.toneMapping=Yo,t.shadowMap.enabled=e.shadow>0,t.shadowMap.type=Is;const s=t.domElement;this.opts.external?(s.setAttribute("role","img"),s.setAttribute("aria-label","3D model of Inverloch")):(s.tabIndex=0,s.setAttribute("role","application"),s.setAttribute("aria-label","3D model of Inverloch. Drag to pan, right-drag to rotate, scroll to zoom. Arrow keys pan, plus and minus zoom, Q and E rotate.")),s.style.display="block",s.style.outlineOffset="-3px",this.container.appendChild(s),s.addEventListener("webglcontextlost",V=>{var N;V.preventDefault(),(N=this.stillPhoto)==null||N.cancel("The browser lost the graphics context during the photo."),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this model was using.")});const r=this.worker=new W1;let o;try{o=await b_(this.opts.assets,e.step,(V,N)=>this.cb.onProgress(V*.6,N),r,this.abort.signal)}catch(V){r.close(),this.disposed||this.cb.onError(V instanceof Error?V.message:"The model data could not be loaded.");return}if(this.disposed){o.ground.dispose();return}const{town:a,heights:l,exposure:c,surface:h,terrainTiles:u,ground:d}=o;this.meta=a.meta,this.quality==="ultra"&&this.opts.external&&((k=this.opts.clearPolygons)!=null&&k.length)&&this.opts.assets.detail&&(this.ultraStreet=new Pv(this.scene,this.opts.assets.detail,this.fromLatLon.bind(this),(V,N)=>this.hf.yAt(V,N),()=>{this.dirty=!0}));const f=[...this.opts.clear??[],...(this.opts.clearLatLon??[]).map(V=>{const[N,L]=this.fromLatLon(V.lat,V.lon);return{x:N,z:L,r:V.r}})],p=(this.opts.clearPolygons??[]).map(V=>({pts:V.latLon.map(([N,L])=>this.fromLatLon(N,L)),roads:!!V.roads})),x=(V,N,L)=>p.some(U=>(!L||U.roads)&&Uv(U.pts,V,N)),m=(V,N)=>f.some(L=>(V-L.x)**2+(N-L.z)**2<L.r*L.r)||x(V,N,!1),g=(this.opts.detailLatLon??[]).map(V=>{const[N,L]=this.fromLatLon(V.lat,V.lon);return{x:N,z:L,r:V.r}}),M=(V,N)=>g.some(L=>(V-L.x)**2+(N-L.z)**2<L.r*L.r);d.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());const v=async(V,N)=>{this.cb.onProgress(V,N),await Iv()};if(await v(.62,"Shaping the terrain"),this.disposed){d.dispose();return}const S=this.hf=new mu(l,c,a.meta.grid[0],a.meta.grid[1],a.meta.size[0],a.meta.size[1],e.step,h),b=pv();this.scene.add(gv(S,u,d,this.tide,b));const E=navigator.deviceMemory??8;this.detailStreaming=new m1(this.opts.assets,this.quality==="low"||E<=4,b,d.anisotropy,r,()=>{this.dirty=!0});const _=this.showers=new ev(this.scene,this.camera,this.quality);this.water=Av(S,this.tide,this.quality==="ultra"?_.inletRain:void 0),this.scene.add(this.water.skirt,this.water.mesh),await v(.7,"Laying out the streets");const y=p.some(V=>V.roads)?(V,N)=>x(V,N,!0):void 0,w=hv(a,S,y,(V,N)=>_.shadeAsphalt(V,N));this.scene.add(w.group),this.roadPaths=w.paths,await v(.78,"Raising the buildings");const T=s1(a,S,w.index,v1,m);this.scene.add(T.group),await v(.86,"Planting trees");const C=this.trees=Ev(a,S,e.trees,(V,N)=>m(V,N)||O_(V,N));this.scene.add(C.group),await v(.92,"Adding landmarks");const D={town:a,hf:S,footprints:T.footprints,roads:w.index,paths:w.paths,isClear:m,isDetail:M,hasDetail:g.length>0},O=U1(D);this.scene.add(O.group),this.solid=new Map,this.designedWalls=T.designedWalls;for(const V of[...T.footprints.map(N=>N.poly),...this.designedWalls]){if(V.length<6)continue;let N=1/0,L=-1/0,U=1/0,$=-1/0;for(let it=0;it<V.length;it+=2)N=Math.min(N,V[it]),L=Math.max(L,V[it]),U=Math.min(U,V[it+1]),$=Math.max($,V[it+1]);for(let it=Math.floor(N/16);it<=Math.floor(L/16);it++)for(let Y=Math.floor(U/16);Y<=Math.floor($/16);Y++){const X=`${it}_${Y}`,K=this.solid.get(X);K?K.push(V):this.solid.set(X,[V])}}if(this.life=new J1(D,O,this.quality==="ultra"),this.life.setTide(this.tide.value*qn),this.scene.add(this.life.group),this.disposed)return;this.clouds=new d_,this.atmosphere=new m_(t,this.water,e.shadow,this.clouds),this.places=_1(a.meta,S);const P=this.places.find(V=>V.id==="inlet");this.storm=new k1(this.scene,P.x,P.z),this.clouds.uniforms.uFlashCenter.value=this.storm.center;const G=this.coastalHaze=new B1(P.x,P.z,this.atmosphere.horizon,this.quality==="ultra"&&this.opts.coastalMist!==!1,this.clouds,{value:this.atmosphere.sunDir},this.atmosphere.cloudShadowStrength);G.setWaterLevel(this.waterLevel),G.addWater(this.water.mesh),G.add(this.scene),this.scene.addEventListener("childadded",V=>G.add(V.child)),this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.labels=new g1(this.labelLayer,this.places,V=>this.flyToPlace(V)),this.external||this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const F=window.matchMedia("(prefers-reduced-motion: reduce)").matches;F&&(this.animating=!1),this.external?this.setExternalCamera(300,900,2600,0,-.42):F?this.applyView(Ds):(this.applyView({...Ds,dist:9500,polar:24,azimuth:-20}),this.fly(Ds,3.4)),this.cb.onProgress(1,"Ready"),this.cb.onReady({quality:this.quality,houses:a.counts.houses,mappedBuildings:a.counts.buildings,trees:C.count,roadPieces:a.counts.roads,sources:a.meta.sources,places:this.places}),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)}get isAnimating(){return this.animating}setAnimating(t){var e;t!==this.animating&&((e=this.resolution)==null||e.resetSampling()),this.animating=t,this.dirty=!0}setFrameTarget(t){var e;this.pacing.setTarget(t)&&((e=this.resolution)==null||e.resetSampling())}weatherTime(){return Date.now()/1e3}setExternalCamera(t,e,n,s,r){if(!this.external)return;const o=this.camera.position,a=this.camera.rotation,l=o.x===t&&o.y===e&&o.z===n,c=a.order==="YXZ"&&a.x===r&&a.y===s&&a.z===0;l&&c||(this.camera.position.set(t,e,n),this.camera.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}setExternal(t){if(!(t===this.external||!this.hf)){if(this.external=t,t)this.flight=void 0,this.controls&&(this.controls.enabled=!1);else{this.controls||this.setupControls(),this.controls.enabled=!0;const e=this.camera;e.getWorldDirection(this.lookDir);const n=Math.max(1,e.position.y),s=this.lookDir.y<-.05?Math.min(n/-this.lookDir.y,6e3):900,r=this.controls.target.copy(e.position).addScaledVector(this.lookDir,s);r.x=Qt.clamp(r.x,this.hf.xMin,this.hf.xMax),r.z=Qt.clamp(r.z,this.hf.zMin,this.hf.zMax),r.y=0,this.controls.update(),this.fly(Ds,1.6)}this.resize()}}getCamera(){const t=new mn().setFromQuaternion(this.camera.quaternion,"YXZ"),e=this.camera.position;return{x:e.x,y:e.y,z:e.z,yaw:t.y,pitch:t.x}}fromLatLon(t,e){const n=this.meta;return n?[(e-n.origin[0])*n.metresPerDegree[0],-(t-n.origin[1])*n.metresPerDegree[1]]:[0,0]}addParts(t){const e=new rn;e.name="guest";const n=t.map(s=>{var f;const r=s.onGround?{...s,...Nv(this.hf,s),indices:void 0}:s,o=new Ae,a=(p,x)=>new Ee(p instanceof Float32Array?p:Float32Array.from(p),x);o.setAttribute("position",a(r.positions,3)),r.colors&&o.setAttribute("color",a(r.colors,3)),r.uvs&&o.setAttribute("uv",a(r.uvs,2)),r.indices&&o.setIndex(Array.from(r.indices)),r.normals?o.setAttribute("normal",a(r.normals,3)):o.computeVertexNormals();let l=null;r.map&&(l=new Te(r.map),l.colorSpace=Ue,l.wrapS=l.wrapT=zs,r.mapRepeat&&l.repeat.set(r.mapRepeat[0],r.mapRepeat[1]),l.anisotropy=4,l.needsUpdate=!0);const c=r.opacity??1,h={color:new At().setRGB(...r.color??[1,1,1]),map:l,vertexColors:!!r.colors,transparent:c<1,opacity:c,side:r.doubleSide?Ie:di},u=r.unlit?new Ln(h):new Dn({...h,roughness:r.roughness??.9,metalness:r.metalness??0,emissive:new At().setRGB(...r.emissive??[0,0,0]),emissiveIntensity:r.emissiveIntensity??1,emissiveMap:r.glowMap?l:null,flatShading:!!r.flatShading}),d=new Jt(o,u);return d.matrixAutoUpdate=!1,r.onGround||d.matrix.fromArray(Array.from(r.matrix)),r.wetAsphalt&&u instanceof Dn&&((f=this.showers)==null||f.shadeAsphalt(u)),d.userData.fixed=!!r.onGround,d.castShadow=c>=1,d.receiveShadow=!0,e.add(d),d});return this.scene.add(e),this.dirty=!0,{setMatrix:(s,r)=>{const o=n[s];!o||o.userData.fixed||(o.matrix.fromArray(Array.from(r)),o.matrixWorldNeedsUpdate=!0,this.dirty=!0)},setEmissive:(s,r,o,a,l)=>{var h;const c=(h=n[s])==null?void 0:h.material;c instanceof Dn&&(c.emissive.setRGB(r,o,a),c.emissiveIntensity=l,this.dirty=!0)},remove:()=>{var s;this.scene.remove(e);for(const r of n){r.geometry.dispose();const o=r.material;(s=o.map)==null||s.dispose(),o.dispose()}this.dirty=!0}}}addTrafficCar(t,e,n,s,r){if(!this.life)throw new Error("Wait for the Inverloch model before adding traffic");const{mesh:o,scale:a}=this.life.makeTrafficCar(t,e,n,s,r);let l;return{setMatrix:(c,h)=>{c===0&&(o.matrix.fromArray(h),o.matrix.elements[13]+=Wu,o.matrixWorldNeedsUpdate=!0,o.visible=!!(h[0]||h[1]||h[2]),this.dirty=!0)},setSignal:c=>{!l&&c&&(l=$u(t),l.scale.copy(a),o.add(l)),l&&(Ju(l,c),this.dirty=!0)},remove:()=>{o.removeFromParent(),o.geometry.dispose(),l==null||l.geometry.dispose(),l==null||l.material.dispose(),this.dirty=!0}}}addPad(t){const e=t.radius??t.halfWidth??5,n=t.radius??t.halfDepth??5,s=t.heading??0,r=Math.cos(s),o=Math.sin(s);let a=1/0,l=-1/0;for(const[f,p]of[[0,0],[-e,-n],[e,-n],[e,n],[-e,n],[0,-n],[0,n],[-e,0],[e,0]]){const x=this.hf.yAt(t.x+f*r+p*o,t.z-f*o+p*r);a=Math.min(a,x),l=Math.max(l,x)}const c=l+(t.lift??.25),h=c-a+1,u=t.radius?new al(t.radius,t.radius,h,24):new zi(e*2,h,n*2),d=new Jt(u,new Dn({color:new At().setRGB(...t.color),roughness:1}));return d.position.set(t.x,c-h/2,t.z),d.rotation.y=s,d.receiveShadow=!0,d.name="guest-pad",this.scene.add(d),this.dirty=!0,c}setSolarMinutes(t){!this.atmosphere||t===this.solarMinutes||(this.solarMinutes=t,this.atmosphere.setSolar(t),this.dirty=!0)}roadSpot(t){const e=t.trim().toLowerCase();let n=null;for(const p of this.roadPaths)p.name.toLowerCase()===e&&(!n||p.length>n.length)&&(n=p);if(!n)return null;const s=n.pts.length/3,r=0,o=s-1,a=s>>1;let l=n.pts[o*3]-n.pts[r*3],c=n.pts[o*3+2]-n.pts[r*3+2];const h=Math.hypot(l,c)||1;l/=h,c/=h;const u=Math.min(70,h*.5),d=n.pts[a*3]-l*u,f=n.pts[a*3+2]-c*u;return{x:d,y:this.hf.yAt(d,f)+38,z:f,yaw:Math.atan2(-l,-c),pitch:-.42}}groundAt(t,e){return this.hf?this.hf.yAt(t,e):0}nearestCar(t,e,n){var s;return((s=this.life)==null?void 0:s.nearestCar(t,e,n))??null}addCars(t){var e;(e=this.life)==null||e.addCars(t),this.dirty=!0}driveCar(t,e,n,s,r,o,a=0,l=0,c=0){var u;const h=((u=this.life)==null?void 0:u.driveCar(t,e,n,s,r,o,a,l,c))??!1;return this.dirty=!0,h}designedWallFootprints(){return this.designedWalls.map(t=>t.slice())}solidAt(t,e){var s;const n=(s=this.solid)==null?void 0:s.get(`${Math.floor(t/16)}_${Math.floor(e/16)}`);if(!n)return!1;for(const r of n){let o=!1;for(let a=0,l=r.length/2-1;a<r.length/2;l=a++){const c=r[a*2],h=r[a*2+1],u=r[l*2],d=r[l*2+1];h>e!=d>e&&t<(u-c)*(e-h)/(d-h)+c&&(o=!o)}if(o)return!0}return!1}get waterLevel(){return this.tide.value*qn}get bounds(){return this.hf?[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]:[-4e3,4e3,-3440,3440]}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}setTide(t){var e,n;this.water&&(this.water.setTide(Qt.clamp(t,hd,ud)),(e=this.life)==null||e.setTide(this.tide.value*qn),(n=this.coastalHaze)==null||n.setWaterLevel(this.waterLevel),this.dirty=!0)}captureStill(){return this.disposed||!this.atmosphere||this.quality!=="ultra"?Promise.reject(new Error("Antialiased photos are available after the Ultra view loads.")):document.hidden?Promise.reject(new Error("Open the Inverloch view to save a photo.")):(this.stillPhoto||(this.stillPhoto=new yv(this.renderer,()=>{this.dirty=!0,this.resolution.resetSampling()}),document.addEventListener("visibilitychange",this.onPhotoVisibilityChange)),this.resolution.resetSampling(),this.stillPhoto.start())}setCoastalMist(t){var e;this.opts.coastalMist=t,(e=this.coastalHaze)==null||e.setMist(this.quality==="ultra"&&t),this.dirty=!0}setLabelsVisible(t){var e;(e=this.labels)==null||e.setVisible(t),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.2)}resetView(){this.fly(Ds,1.8)}setView(t,e,n,s,r,o=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},o)}faceNorth(){const t=this.currentView();this.fly({...t,azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:Qt.clamp(e.dist*t,this.controls.minDistance,this.controls.maxDistance)},.35)}dispose(){var t,e,n,s,r,o,a,l,c,h;this.disposed=!0,this.abort.abort(),(t=this.ultraStreet)==null||t.dispose(),(e=this.detailStreaming)==null||e.dispose(),(n=this.worker)==null||n.close(),cancelAnimationFrame(this.raf),(s=this.resizeObserver)==null||s.disconnect(),(r=this.labels)==null||r.dispose(),(o=this.stillPhoto)==null||o.dispose(),(a=this.clouds)==null||a.dispose(),(l=this.showers)==null||l.dispose(),(c=this.storm)==null||c.dispose(),document.removeEventListener("visibilitychange",this.onPhotoVisibilityChange),(h=this.controls)==null||h.dispose(),this.renderer&&(this.renderer.domElement.removeEventListener("keydown",this.onKey),this.scene.traverse(u=>{var p,x;const d=u;(x=(p=d.geometry)==null?void 0:p.dispose)==null||x.call(p);const f=Array.isArray(d.material)?d.material:d.material?[d.material]:[];for(const m of f){for(const g of Object.values(m))g instanceof Te&&g.dispose();m.dispose()}}),this.renderer.dispose(),this.renderer.domElement.remove())}pickQuality(){if(this.opts.quality)return this.opts.quality;const t=new URLSearchParams(window.location.search).get("quality");if(t==="ultra"||t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new a_(this.camera,this.renderer.domElement);t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=70,t.maxDistance=12e3,t.maxPolarAngle=Qt.degToRad(84),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const e=t.target,n=this.hf;e.x=Qt.clamp(e.x,n.xMin,n.xMax),e.z=Qt.clamp(e.z,n.zMin,n.zMax),e.y=0,this.dirty=!0}),this.renderer.domElement.addEventListener("keydown",this.onKey)}clampView(t){var e,n;return{x:Qt.clamp(t.x,this.hf.xMin,this.hf.xMax),z:Qt.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:Qt.clamp(t.dist,((e=this.controls)==null?void 0:e.minDistance)??70,((n=this.controls)==null?void 0:n.maxDistance)??12e3),polar:Qt.clamp(t.polar,2,84),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=this.camera.position.clone().sub(t),n=new ao().setFromVector3(e);return{x:t.x,z:t.z,dist:n.radius,polar:Qt.radToDeg(n.phi),azimuth:Qt.radToDeg(n.theta)}}applyView(t){const e=new ao(t.dist,Qt.degToRad(t.polar),Qt.degToRad(t.azimuth)),n=this.controls.target.set(t.x,0,t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(!this.controls||this.external)return;if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.fov=this.external?60:t/e<.8?52:38,this.camera.updateProjectionMatrix(),this.dirty=!0}}const Zl="Map data © OpenStreetMap contributors · Elevation © Geoscience Australia (CC BY 4.0)",zv=`
.inv-embed, .inv-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the model but never take a touch: drags and pinches must reach the canvas underneath */
.inv-embed-labels, .inv-embed .inv-label { pointer-events: none; }
.inv-embed-credit { position: absolute; left: 50%; bottom: var(--inv-credit-bottom, 6px); transform: translateX(-50%); margin: 0; max-width: calc(100% - 24px);
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; pointer-events: none; }
`,Bv=["low","medium","high","ultra"];function Gv(i,t){if(!document.querySelector("style[data-inverloch-model]")){const d=document.createElement("style");d.setAttribute("data-inverloch-model",""),d.textContent=Yn+zv,document.head.appendChild(d)}const e=document.createElement("div");e.className="inv-embed";const n=document.createElement("div");n.className="inv-embed-layer";const s=document.createElement("div");s.className="inv-embed-layer inv-embed-labels";const r=document.createElement("p");r.className="inv-embed-credit",r.textContent=Zl,e.append(n,s,r),i.appendChild(e);const o=typeof t.assets=="string"?{height:t.assets+"height.png",ground:t.assets+(typeof window<"u"&&window.anSmallGround?"ground-2k.webp":"ground.webp"),town:t.assets+"town.json",detail:t.assets+"detail.json"}:t.assets;let a=[],l=!1,c;const h=new Promise((d,f)=>c={ok:d,fail:f}),u=new Ov(n,s,{onProgress:(d,f)=>{var p;return(p=t.onProgress)==null?void 0:p.call(t,d,f)},onReady:d=>{a=d.places.map(f=>{const p=Math.min(Math.max(f.view[0]*.55,90),1500),x=f.view[1]*Math.PI/180,m=f.view[2]*Math.PI/180,g=f.x+p*Math.sin(x)*Math.sin(m),M=f.z+p*Math.sin(x)*Math.cos(m),v=Math.max(u.groundAt(g,M),u.waterLevel)+Math.max(p*Math.cos(x),20),S=f.x-g,b=f.y-10-v,E=f.z-M;return{id:f.id,name:f.name,kind:f.kind,x:g,y:v,z:M,yaw:Math.atan2(-S,-E),pitch:Math.atan2(b,Math.hypot(S,E)),tx:f.x,tz:f.z}}),t.labels===!1&&u.setLabelsVisible(!1),l=!0,c.ok()},onError:d=>{var f;return l?(f=t.onError)==null?void 0:f.call(t,d):c.fail(new Error(d))},onCompass:()=>{}},{assets:o,external:!0,quality:t.quality,frameTarget:t.frameTarget,coastalMist:t.coastalMist,onThunder:t.onThunder,clear:t.clear,clearLatLon:t.clearLatLon,clearPolygons:t.clearPolygons,detailLatLon:t.detailLatLon});return u.init(),{ready:h,setCamera:(d,f,p,x,m)=>u.setExternalCamera(d,f,p,x,m),setMinutes:d=>u.setSolarMinutes(d),setTide:d=>u.setTide(d),setAnimating:d=>u.setAnimating(d),setFrameTarget:d=>u.setFrameTarget(d),captureStill:()=>u.captureStill(),setCoastalMist:d=>u.setCoastalMist(d),setLabelsVisible:d=>u.setLabelsVisible(d),groundAt:(d,f)=>u.groundAt(d,f),waterLevel:()=>u.waterLevel,bounds:()=>u.bounds,fromLatLon:(d,f)=>u.fromLatLon(d,f),setMode:d=>u.setExternal(d!=="bird"),getCamera:()=>u.getCamera(),flyToPlace:d=>u.flyToPlace(d),lookAt:(d,f,p,x,m)=>u.setView(d,f,p,x,m),addParts:d=>u.addParts(d),addTrafficCar:(d,f,p,x,m)=>u.addTrafficCar(d,f,p,x,m),addPad:d=>u.addPad(d),spots:()=>a,nearestCar:(d,f,p)=>u.nearestCar(d,f,p),driveCar:(d,f,p,x,m,g,M,v,S)=>u.driveCar(d,f,p,x,m,g,M,v,S),solidAt:(d,f)=>u.solidAt(d,f),designedWallFootprints:()=>u.designedWallFootprints(),addCars:d=>u.addCars(d),roadSpot:d=>{const f=u.roadSpot(d);return f?{id:"road:"+d,name:d,kind:"landmark",...f,tx:f.x-Math.sin(f.yaw)*70,tz:f.z-Math.cos(f.yaw)*70}:null},tide:{min:hd,max:ud,initial:dd},credit:Zl,dispose:()=>{u.dispose(),e.remove()}}}return Sn.CREDIT=Zl,Sn.create=Gv,Sn.qualityPresets=Bv,Object.defineProperty(Sn,Symbol.toStringTag,{value:"Module"}),Sn}({});

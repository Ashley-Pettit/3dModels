var InverlochModel=function(Sn){"use strict";var Rv=Object.defineProperty;var Cv=(Sn,$n,gi)=>$n in Sn?Rv(Sn,$n,{enumerable:!0,configurable:!0,writable:!0,value:gi}):Sn[$n]=gi;var X=(Sn,$n,gi)=>Cv(Sn,typeof $n!="symbol"?$n+"":$n,gi);const $n='.inv-label{position:absolute;left:0;top:0;pointer-events:auto;font:600 12px/1 Space Grotesk,system-ui,sans-serif;padding:6px 10px;border-radius:999px;background:#0c1c24e6;color:#fff;border:1px solid rgba(255,255,255,.2);white-space:nowrap;cursor:pointer;will-change:transform}.inv-label:after{content:"";position:absolute;left:50%;bottom:-8px;width:1px;height:8px;background:#ffffffbf}.inv-label:hover{background:#0b7d9c}.inv-label--nature{background:#183826eb}.inv-label--nature:hover{background:#2c7a4b}.inv-label--water{background:none;border-color:transparent;color:#f1fbff;font-style:italic;font-weight:500;font-size:13px;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,35,60,.95),0 0 8px rgba(0,35,60,.7)}.inv-label--water:after{display:none}.inv-label--water:hover{background:#0c1c2499}.inv-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.inv-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}';/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gi="187",jn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kd=0,_c=1,qd=2,Vs=1,Jd=2,Ws=3,_i=0,tn=1,Ce=2,ns=0,Xs=1,Yo=2,Mc=3,vc=4,$d=5,is=100,jd=101,Qd=102,tf=103,ef=104,nf=200,sf=201,rf=202,of=203,Sc=204,yc=205,af=206,lf=207,cf=208,hf=209,uf=210,df=211,ff=212,pf=213,mf=214,Zo=0,Ko=1,qo=2,Ys=3,Jo=4,$o=5,jo=6,Qo=7,Cr=0,gf=1,xf=2,Qn=0,bc=1,Ec=2,wc=3,Tc=4,Ac=5,Rc=6,ta=7,Cc=300,ss=301,Zs=302,ea=303,na=304,Ks=1e3,On=1001,ia=1002,Ne=1003,_f=1004,Lr=1005,Ke=1006,sa=1007,yn=1008,on=1009,Lc=1010,Pc=1011,qs=1012,ra=1013,zn=1014,bn=1015,En=1016,oa=1017,aa=1018,rs=1020,Dc=35902,Ic=35899,Nc=1021,Uc=1022,Bn=1023,Mi=1026,vi=1027,Pr=1028,la=1029,Si=1030,ca=1031,ha=1033,Dr=33776,Ir=33777,Nr=33778,Ur=33779,ua=35840,da=35841,fa=35842,pa=35843,ma=36196,ga=37492,xa=37496,_a=37488,Ma=37489,Fr=37490,va=37491,Sa=37808,ya=37809,ba=37810,Ea=37811,wa=37812,Ta=37813,Aa=37814,Ra=37815,Ca=37816,La=37817,Pa=37818,Da=37819,Ia=37820,Na=37821,Ua=36492,Fa=36494,Oa=36495,za=36283,Ba=36284,Or=36285,Ga=36286,Mf=3200,os=0,vf=1,yi="",Ue="srgb",zr="srgb-linear",Br="linear",fe="srgb",ka=7680,Sf=519,yf=512,bf=513,Ef=514,Fc=515,wf=516,Tf=517,Oc=518,zc=519,Af=35044,Bi=35048,Bc="300 es",wn=2e3,Js=2001;function Rf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cf(){const i=$s("canvas");return i.style.display="block",i}const Gc={};function kc(...i){const t="THREE."+i.shift();console.log(t,...i)}function Hc(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=Hc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=Hc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Gr(...i){const t=i.join(" ");t in Gc||(Gc[t]=!0,Vt(...i))}function Lf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Pf={[Zo]:Zo,[qo]:jo,[Jo]:Jo,[Ys]:$o,[Ko]:Ko,[jo]:qo,[Qo]:Qo,[$o]:Ys};class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vc=1234567;const js=Math.PI/180,Qs=180/Math.PI;function as(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function Ha(i,t){return(i%t+t)%t}function Df(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function If(i,t,e){return i!==t?(e-i)/(t-i):0}function tr(i,t,e){return(1-e)*i+e*t}function Nf(i,t,e,n){return tr(i,t,1-Math.exp(-e*n))}function Uf(i,t=1){return t-Math.abs(Ha(i,t*2)-t)}function Ff(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Of(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function zf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Bf(i,t){return i+Math.random()*(t-i)}function Gf(i){return i*(.5-Math.random())}function kf(i){i!==void 0&&(Vc=i);let t=Vc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hf(i){return i*js}function Vf(i){return i*Qs}function Wf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Xf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yf(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*u,a*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Va(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Xc(i,t){if(t.constructor===Float32Array)return i;const e=Va(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Yc(i,t){if(t.constructor===Float32Array)return i;const e=Va(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const ne={DEG2RAD:js,RAD2DEG:Qs,generateUUID:as,clamp:Qt,euclideanModulo:Ha,mapLinear:Df,inverseLerp:If,lerp:tr,damp:Nf,pingpong:Uf,smoothstep:Ff,smootherstep:Of,randInt:zf,randFloat:Bf,randFloatSpread:Gf,seededRandom:kf,degToRad:Hf,radToDeg:Vf,isPowerOfTwo:Wf,ceilPowerOfTwo:Xf,floorPowerOfTwo:Wc,setQuaternionFromProperEuler:Yf,normalize:Yc,denormalize:Xc},uc=class uc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uc.prototype.isVector2=!0;let Nt=uc;class Tn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(h!==x||l!==d||c!==f||u!==p){let m=l*d+c*f+u*p+h*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){const _=Math.acos(m),M=Math.sin(_);g=Math.sin(g*_)/M,a=Math.sin(a*_)/M,l=l*g+d*a,c=c*g+f*a,u=u*g+p*a,h=h*g+x*a}else{l=l*g+d*a,c=c*g+f*a,u=u*g+p*a,h=h*g+x*a;const _=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=_,c*=_,u*=_,h*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+u*h+l*f-c*d,t[e+1]=l*p+u*d+c*h-a*f,t[e+2]=c*p+u*f+a*d-l*h,t[e+3]=u*p-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const dc=class dc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wa.copy(this).projectOnVector(t),this.sub(Wa)}reflect(t){return this.sub(Wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dc.prototype.isVector3=!0;let V=dc;const Wa=new V,Zc=new Tn,fc=class fc{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],_=s[1],M=s[4],v=s[7],b=s[2],E=s[5],S=s[8];return r[0]=o*x+a*_+l*b,r[3]=o*m+a*M+l*E,r[6]=o*g+a*v+l*S,r[1]=c*x+u*_+h*b,r[4]=c*m+u*M+h*E,r[7]=c*g+u*v+h*S,r[2]=d*x+f*_+p*b,r[5]=d*m+f*M+p*E,r[8]=d*g+f*v+p*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,p=e*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=h*x,t[1]=(s*c-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xa.makeScale(t,e)),this}rotate(t){return Gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xa.makeRotation(-t)),this}translate(t,e){return Gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fc.prototype.isMatrix3=!0;let Zt=fc;const Xa=new Zt,Kc=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qc=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zf(){const i={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fe&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?Br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zr]:{primaries:t,whitePoint:n,transfer:Br,toXYZ:Kc,fromXYZ:qc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:Kc,fromXYZ:qc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}const ae=Zf();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let cs;class Kf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{cs===void 0&&(cs=$s("canvas")),cs.width=t.width,cs.height=t.height;const s=cs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=cs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$s("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qf=0;class kr{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ya(s[o].image)):r.push(Ya(s[o]))}else r=Ya(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}let Jf=0;const Za=new V;class Ae extends bi{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=On,s=On,r=Ke,o=yn,a=Bn,l=on,c=Ae.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=as(),this.name="",this.source=new kr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Za).x}get height(){return this.source.getSize(Za).y}get depth(){return this.source.getSize(Za).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ks:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ks:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null,Ae.DEFAULT_MAPPING=Cc,Ae.DEFAULT_ANISOTROPY=1;const pc=class pc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(f+1)/2,b=(g+1)/2,E=(u+d)/4,S=(h+x)/4,y=(p+m)/4;return M>v&&M>b?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=S/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=S/r,s=y/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-p)*(m-p)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(h-x)/_,this.z=(d-u)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pc.prototype.isVector4=!0;let Se=pc;class $f extends bi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ae({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new kr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends $f{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jc extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jf extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Vo=class Vo{constructor(t,e,n,s,r,o,a,l,c,u,h,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,f,p,x,m)}set(t,e,n,s,r,o,a,l,c,u,h,d,f,p,x,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vo().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,p=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,p=c*u,x=c*h;e[0]=d+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,p=c*u,x=c*h;e[0]=d-x*a,e[4]=-o*h,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,f=o*h,p=a*u,x=a*h;e[0]=l*u,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*h,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*u,e[4]=x-d*h,e[8]=p*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+p,e[10]=d-x*h}else if(t.order==="XZY"){const d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+x,e[5]=o*u,e[9]=f*h-p,e[2]=p*h-f,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qf,t,tp)}lookAt(t,e,n){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),Ei.crossVectors(n,an),Ei.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ei.crossVectors(n,an)),Ei.normalize(),Hr.crossVectors(an,Ei),s[0]=Ei.x,s[4]=Hr.x,s[8]=an.x,s[1]=Ei.y,s[5]=Hr.y,s[9]=an.y,s[2]=Ei.z,s[6]=Hr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],_=n[3],M=n[7],v=n[11],b=n[15],E=s[0],S=s[4],y=s[8],w=s[12],T=s[1],R=s[5],P=s[9],U=s[13],L=s[2],z=s[6],I=s[10],B=s[14],$=s[3],N=s[7],H=s[11],K=s[15];return r[0]=o*E+a*T+l*L+c*$,r[4]=o*S+a*R+l*z+c*N,r[8]=o*y+a*P+l*I+c*H,r[12]=o*w+a*U+l*B+c*K,r[1]=u*E+h*T+d*L+f*$,r[5]=u*S+h*R+d*z+f*N,r[9]=u*y+h*P+d*I+f*H,r[13]=u*w+h*U+d*B+f*K,r[2]=p*E+x*T+m*L+g*$,r[6]=p*S+x*R+m*z+g*N,r[10]=p*y+x*P+m*I+g*H,r[14]=p*w+x*U+m*B+g*K,r[3]=_*E+M*T+v*L+b*$,r[7]=_*S+M*R+v*z+b*N,r[11]=_*y+M*P+v*I+b*H,r[15]=_*w+M*U+v*B+b*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],_=l*f-c*d,M=a*f-c*h,v=a*d-l*h,b=o*f-c*u,E=o*d-l*u,S=o*h-a*u;return e*(x*_-m*M+g*v)-n*(p*_-m*b+g*E)+s*(p*M-x*b+g*S)-r*(p*v-x*E+m*S)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],_=e*a-n*o,M=e*l-s*o,v=e*c-r*o,b=n*l-s*a,E=n*c-r*a,S=s*c-r*l,y=u*x-h*p,w=u*m-d*p,T=u*g-f*p,R=h*m-d*x,P=h*g-f*x,U=d*g-f*m,L=_*U-M*P+v*R+b*T-E*w+S*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/L;return t[0]=(a*U-l*P+c*R)*z,t[1]=(s*P-n*U-r*R)*z,t[2]=(x*S-m*E+g*b)*z,t[3]=(d*E-h*S-f*b)*z,t[4]=(l*T-o*U-c*w)*z,t[5]=(e*U-s*T+r*w)*z,t[6]=(m*v-p*S-g*M)*z,t[7]=(u*S-d*v+f*M)*z,t[8]=(o*P-a*T+c*y)*z,t[9]=(n*T-e*P-r*y)*z,t[10]=(p*E-x*v+g*_)*z,t[11]=(h*v-u*E-f*_)*z,t[12]=(a*w-o*R-l*y)*z,t[13]=(e*R-n*w+s*y)*z,t[14]=(x*M-p*b-m*_)*z,t[15]=(u*b-h*M+d*_)*z,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,p=r*h,x=o*u,m=o*h,g=a*h,_=l*c,M=l*u,v=l*h,b=n.x,E=n.y,S=n.z;return s[0]=(1-(x+g))*b,s[1]=(f+v)*b,s[2]=(p-M)*b,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(d+g))*E,s[6]=(m+_)*E,s[7]=0,s[8]=(p+M)*S,s[9]=(m-_)*S,s[10]=(1-(d+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=hs.set(s[0],s[1],s[2]).length();const a=hs.set(s[4],s[5],s[6]).length(),l=hs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),An.copy(this);const c=1/o,u=1/a,h=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,e.setFromRotationMatrix(An),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=wn,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===wn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Js)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=wn,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===wn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Js)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Vo.prototype.isMatrix4=!0;let ie=Vo;const hs=new V,An=new ie,Qf=new V(0,0,0),tp=new V(1,1,1),Ei=new V,Hr=new V,an=new V,$c=new ie,jc=new Tn;class dn{constructor(t=0,e=0,n=0,s=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $c.makeRotationFromQuaternion(t),this.setFromRotationMatrix($c,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jc.setFromEuler(this),this.setFromQuaternion(jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class Ka{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ep=0;const Qc=new V,us=new Tn,ei=new ie,Vr=new V,er=new V,np=new V,ip=new Tn,th=new V(1,0,0),eh=new V(0,1,0),nh=new V(0,0,1),ih={type:"added"},sp={type:"removed"},ds={type:"childadded",child:null},qa={type:"childremoved",child:null};class Be extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new V,e=new dn,n=new Tn,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Zt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(th,t)}rotateY(t){return this.rotateOnAxis(eh,t)}rotateZ(t){return this.rotateOnAxis(nh,t)}translateOnAxis(t,e){return Qc.copy(t).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(th,t)}translateY(t){return this.translateOnAxis(eh,t)}translateZ(t){return this.translateOnAxis(nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vr.copy(t):Vr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(er,Vr,this.up):ei.lookAt(Vr,er,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),us.setFromRotationMatrix(ei),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ih),ds.child=t,this.dispatchEvent(ds),ds.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sp),qa.child=t,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ih),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,np),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Be.DEFAULT_UP=new V(0,1,0),Be.DEFAULT_MATRIX_AUTO_UPDATE=!0,Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Je extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rp={type:"move"};class Ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function $a(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Ha(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=$a(o,r,t+.3333333333333333),this.g=$a(o,r,t),this.b=$a(o,r,t-.3333333333333333)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=sh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return ae.workingToColorSpace($e.copy(this),t),Math.round(Qt($e.r*255,0,255))*65536+Math.round(Qt($e.g*255,0,255))*256+Math.round(Qt($e.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace($e.copy(this),e);const n=$e.r,s=$e.g,r=$e.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Ue){ae.workingToColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,s=$e.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(Wr);const n=tr(wi.h,Wr.h,e),s=tr(wi.s,Wr.s,e),r=tr(wi.l,Wr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new Lt;Lt.NAMES=sh;class rh extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Rn=new V,ni=new V,ja=new V,ii=new V,fs=new V,ps=new V,oh=new V,Qa=new V,tl=new V,el=new V,nl=new Se,il=new Se,sl=new Se;class Cn{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),ni.subVectors(n,e),ja.subVectors(t,e);const o=Rn.dot(Rn),a=Rn.dot(ni),l=Rn.dot(ja),c=ni.dot(ni),u=ni.dot(ja),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return nl.setScalar(0),il.setScalar(0),sl.setScalar(0),nl.fromBufferAttribute(t,e),il.fromBufferAttribute(t,n),sl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(nl,r.x),o.addScaledVector(il,r.y),o.addScaledVector(sl,r.z),o}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),ni.subVectors(t,e),Rn.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Rn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;fs.subVectors(s,n),ps.subVectors(r,n),Qa.subVectors(t,n);const l=fs.dot(Qa),c=ps.dot(Qa);if(l<=0&&c<=0)return e.copy(n);tl.subVectors(t,s);const u=fs.dot(tl),h=ps.dot(tl);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),e.copy(n).addScaledVector(fs,o);el.subVectors(t,r);const f=fs.dot(el),p=ps.dot(el);if(p>=0&&f<=p)return e.copy(r);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(ps,a);const m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return oh.subVectors(r,s),a=(h-u)/(h-u+(f-p)),e.copy(s).addScaledVector(oh,a);const g=1/(m+x+d);return o=x*g,a=d*g,e.copy(n).addScaledVector(fs,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ti{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(t.matrixWorld),this.union(Xr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nr),Yr.subVectors(this.max,nr),ms.subVectors(t.a,nr),gs.subVectors(t.b,nr),xs.subVectors(t.c,nr),Ai.subVectors(gs,ms),Ri.subVectors(xs,gs),Gi.subVectors(ms,xs);let e=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-Gi.z,Gi.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,Gi.z,0,-Gi.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-Gi.y,Gi.x,0];return!rl(e,ms,gs,xs,Yr)||(e=[1,0,0,0,1,0,0,0,1],!rl(e,ms,gs,xs,Yr))?!1:(Zr.crossVectors(Ai,Ri),e=[Zr.x,Zr.y,Zr.z],rl(e,ms,gs,xs,Yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const si=[new V,new V,new V,new V,new V,new V,new V,new V],Ln=new V,Xr=new Ti,ms=new V,gs=new V,xs=new V,Ai=new V,Ri=new V,Gi=new V,nr=new V,Yr=new V,Zr=new V,ki=new V;function rl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ki.fromArray(i,r);const a=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),u=n.dot(ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ri=op();function op(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function ap(i){Math.abs(i)>65504&&Vt("DataUtils.toHalfFloat(): Value out of range."),i=Qt(i,-65504,65504),ri.floatView[0]=i;const t=ri.uint32View[0],e=t>>23&511;return ri.baseTable[e]+((t&8388607)>>ri.shiftTable[e])}function lp(i){const t=i>>10;return ri.uint32View[0]=ri.mantissaTable[ri.offsetTable[t]+(i&1023)]+ri.exponentTable[t],ri.floatView[0]}class ah{static toHalfFloat(t){return ap(t)}static fromHalfFloat(t){return lp(t)}}const Le=new V,Kr=new Nt;let cp=0;class Te extends bi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Af,this.updateRanges=[],this.gpuType=bn,this.version=0,this._normalizationScale=t!==void 0?Va(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Kr.fromBufferAttribute(this,e),Kr.applyMatrix3(t),this.setXY(e,Kr.x,Kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Xc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Yc(t,this.array)}}class lh extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ch extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}}const hp=new Ti,ir=new V,ol=new V;class Hi{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):hp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);const e=ir.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ir,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ol.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(ol)),this.expandByPoint(ir.copy(t.center).sub(ol))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let up=0;const fn=new ie,al=new Be,_s=new V,ln=new Ti,sr=new Ti,Ge=new V;class Re extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rf(t)?ch:lh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return al.lookAt(t),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ye(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(ln.min,sr.min),ln.expandByPoint(Ge),Ge.addVectors(ln.max,sr.max),ln.expandByPoint(Ge)):(ln.expandByPoint(sr.min),ln.expandByPoint(sr.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ge.fromBufferAttribute(a,c),l&&(_s.fromBufferAttribute(t,c),Ge.add(_s)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Te(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let w=0;w<n.count;w++)a[w]=new V,l[w]=new V;const u=new V,h=new V,d=new V,f=new Nt,p=new Nt,x=new Nt,m=new V,g=new V;function _(w,T,R){c[w]=c[T]=c[R]=1,u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,T),x.fromBufferAttribute(r,R),h.sub(u),d.sub(u),p.sub(f),x.sub(f);const P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(m.copy(h).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(P),a[w].add(m),a[T].add(m),a[R].add(m),l[w].add(g),l[T].add(g),l[R].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let w=0,T=M.length;w<T;++w){const R=M[w],P=R.start,U=R.count;for(let L=P,z=P+U;L<z;L+=3)_(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const v=new V,b=new V,E=new V,S=new V;function y(w){E.fromBufferAttribute(s,w),S.copy(E);const T=a[w];v.copy(T),v.sub(E.multiplyScalar(E.dot(T))).normalize(),b.crossVectors(S,T);const P=b.dot(l[w])<0?-1:1;o.setXYZW(w,v.x,v.y,v.z,P)}for(let w=0,T=n.count;w<T;++w)c[w]&&y(w);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,h=new V;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let g=0;g<u;g++)d[p++]=c[f++]}return new Te(d,u,h)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ll=new V,dp=new V,fp=new Zt;class kn{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ll.subVectors(n,e).cross(dp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(ll),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fp.getNormalMatrix(t),s=this.coplanarPoint(ll).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let pp=0;class oi extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Xs,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=yc,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ka,this.stencilZFail=ka,this.stencilZPass=ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ai=new V,cl=new V,qr=new V,Jr=new V;class $r{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){cl.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),Jr.copy(this.origin).sub(cl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(qr),a=Jr.dot(this.direction),l=-Jr.dot(qr),c=Jr.lengthSq(),u=Math.abs(1-o*o);let h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=r*u,h>=0)if(d>=-p)if(d<=p){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(cl).addScaledVector(qr,d),f}intersectSphere(t,e){if(t.radius<0)return null;ai.subVectors(t.center,this.origin);const n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,_=n.y-o.y,M=n.z-o.z,v=Math.abs(l),b=Math.abs(c),E=Math.abs(u);let S,y,w,T,R,P,U,L,z,I,B,$;if(v>=b&&v>=E?(w=l,P=h,z=p,$=g,l>=0?(S=c,y=u,T=d,R=f,U=x,L=m,I=_,B=M):(S=u,y=c,T=f,R=d,U=m,L=x,I=M,B=_)):b>=E?(w=c,P=d,z=x,$=_,c>=0?(S=u,y=l,T=f,R=h,U=m,L=p,I=M,B=g):(S=l,y=u,T=h,R=f,U=p,L=m,I=g,B=M)):(w=u,P=f,z=m,$=M,u>=0?(S=l,y=c,T=h,R=d,U=p,L=x,I=g,B=_):(S=c,y=l,T=d,R=h,U=x,L=p,I=_,B=g)),w===0)return null;const N=S/w,H=y/w,K=1/w,Y=T-N*P,Z=R-H*P,F=U-N*z,J=L-H*z,q=I-N*$,nt=B-H*$,et=q*J-nt*F,st=Y*nt-Z*q,wt=F*Z-J*Y;if(s){if(et<0||st<0||wt<0)return null}else if((et<0||st<0||wt<0)&&(et>0||st>0||wt>0))return null;const xt=et+st+wt;if(xt===0)return null;const Ft=K*(et*P+st*z+wt*$);return(xt>0?Ft<0:Ft>0)?null:this.at(Ft/xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hh=new ie,Vi=new $r,jr=new Hi,uh=new V,Qr=new V,to=new V,eo=new V,hl=new V,no=new V,dh=new V,io=new V;class te extends Be{constructor(t=new Re,e=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){no.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(hl.fromBufferAttribute(h,t),o?no.addScaledVector(hl,u):no.addScaledVector(hl.sub(e),u))}e.add(no)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(jr.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(jr,uh)===null||Vi.origin.distanceToSquared(uh)>(t.far-t.near)**2))&&(hh.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(hh),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){const m=d[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,b=M;v<b;v+=3){const E=a.getX(v),S=a.getX(v+1),y=a.getX(v+2);s=so(this,g,t,n,c,u,h,E,S,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const _=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=so(this,o,t,n,c,u,h,_,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){const m=d[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,b=M;v<b;v+=3){const E=v,S=v+1,y=v+2;s=so(this,g,t,n,c,u,h,E,S,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const _=m,M=m+1,v=m+2;s=so(this,o,t,n,c,u,h,_,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function mp(i,t,e,n,s,r,o,a){let l;if(t.side===tn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===_i,a),l===null)return null;io.copy(a),io.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(io);return c<e.near||c>e.far?null:{distance:c,point:io.clone(),object:i}}function so(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Qr),i.getVertexPosition(l,to),i.getVertexPosition(c,eo);const u=mp(i,t,e,n,Qr,to,eo,dh);if(u){const h=new V;Cn.getBarycoord(dh,Qr,to,eo,h),s&&(u.uv=Cn.getInterpolatedAttribute(s,a,l,c,h,new Nt)),r&&(u.uv1=Cn.getInterpolatedAttribute(r,a,l,c,h,new Nt)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,l,c,h,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new V,materialIndex:0};Cn.getNormal(Qr,to,eo,d.normal),u.face=d,u.barycoord=h}return u}class rr extends Ae{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ne,u=Ne,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fh extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ms=new ie,ph=new ie,ro=[],mh=new Ti,gp=new ie,or=new te,ar=new Hi;class Ve extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),mh.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(mh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),ar.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),t.ray.intersectsSphere(ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ms),ph.multiplyMatrices(n,Ms),or.matrixWorld=ph,or.raycast(t,ro);for(let o=0,a=ro.length;o<a;o++){const l=ro[o];l.instanceId=r,l.object=this,e.push(l)}ro.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new fh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new rr(new Float32Array(s*this.count),s,this.count,Pr,bn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wi=new Hi,xp=new Nt(.5,.5),oo=new V;class lr{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,o=new kn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],_=r[12],M=r[13],v=r[14],b=r[15];if(s[0].setComponents(c-o,f-u,g-p,b-_).normalize(),s[1].setComponents(c+o,f+u,g+p,b+_).normalize(),s[2].setComponents(c+a,f+h,g+x,b+M).normalize(),s[3].setComponents(c-a,f-h,g-x,b-M).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,g-m,b-v).normalize();else if(s[4].setComponents(c-l,f-d,g-m,b-v).normalize(),e===wn)s[5].setComponents(c+l,f+d,g+m,b+v).normalize();else if(e===Js)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){Wi.center.set(0,0,0);const e=xp.distanceTo(t.center);return Wi.radius=.7071067811865476+e,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(oo.x=s.normal.x>0?t.max.x:t.min.x,oo.y=s.normal.y>0?t.max.y:t.min.y,oo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const gh=new ie;class ul{constructor(){this.coordinateSystem=wn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];gh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new lr),n[s].setFromProjectionMatrix(gh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new lr),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new ul().copy(this)}}class xh extends oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ao=new V,lo=new V,_h=new ie,cr=new $r,co=new Hi,dl=new V,Mh=new V;class _p extends Be{constructor(t=new Re,e=new xh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ao.fromBufferAttribute(e,s-1),lo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ao.distanceTo(lo);t.setAttribute("lineDistance",new ye(n,1))}else Vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),co.radius+=r,t.ray.intersectsSphere(co)===!1)return;_h.copy(s).invert(),cr.copy(t.ray).applyMatrix4(_h);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){const g=u.getX(x),_=u.getX(x+1),M=ho(this,t,cr,l,g,_,x);M&&e.push(M)}if(this.isLineLoop){const x=u.getX(p-1),m=u.getX(f),g=ho(this,t,cr,l,x,m,p-1);g&&e.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){const g=ho(this,t,cr,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){const x=ho(this,t,cr,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ho(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(ao.fromBufferAttribute(a,s),lo.fromBufferAttribute(a,r),e.distanceSqToSegment(ao,lo,dl,Mh)>n)return;dl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(dl);if(!(c<t.near||c>t.far))return{distance:c,point:Mh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const vh=new V,Sh=new V;class yh extends _p{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)vh.fromBufferAttribute(e,s),Sh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vh.distanceTo(Sh);t.setAttribute("lineDistance",new ye(n,1))}else Vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bh extends Ae{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Ne,this.minFilter=Ne,this.generateMipmaps=!1,this.needsUpdate=!0}copy(t){return super.copy(t),this.source=new kr(Object.assign({},t.image)),this}}class Eh extends Ae{constructor(t=[],e=ss,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fl extends Ae{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vs extends Ae{constructor(t,e,n=zn,s,r,o,a=Ne,l=Ne,c,u=Mi,h=1){if(u!==Mi&&u!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class wh extends vs{constructor(t,e=zn,n=ss,s,r,o=Ne,a=Ne,l,c=Mi){const u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Th extends Ae{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Xi extends Re{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(h,2));function p(x,m,g,_,M,v,b,E,S,y,w){const T=v/S,R=b/y,P=v/2,U=b/2,L=E/2,z=S+1,I=y+1;let B=0,$=0;const N=new V;for(let H=0;H<I;H++){const K=H*R-U;for(let Y=0;Y<z;Y++){const Z=Y*T-P;N[x]=Z*_,N[m]=K*M,N[g]=L,c.push(N.x,N.y,N.z),N[x]=0,N[m]=0,N[g]=E>0?1:-1,u.push(N.x,N.y,N.z),h.push(Y/S),h.push(1-H/y),B+=1}}for(let H=0;H<y;H++)for(let K=0;K<S;K++){const Y=d+K+z*H,Z=d+K+z*(H+1),F=d+(K+1)+z*(H+1),J=d+(K+1)+z*H;l.push(Y,Z,J),l.push(Z,F,J),$+=6}a.addGroup(f,$,w),f+=$,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class pl extends Re{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let p=0;const x=[],m=n/2;let g=0;_(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(f,2));function _(){const v=new V,b=new V;let E=0;const S=(e-t)/n;for(let y=0;y<=r;y++){const w=[],T=y/r,R=T*(e-t)+t;for(let P=0;P<=s;P++){const U=P/s,L=U*l+a,z=Math.sin(L),I=Math.cos(L);b.x=R*z,b.y=-T*n+m,b.z=R*I,h.push(b.x,b.y,b.z),v.set(z,S,I).normalize(),d.push(v.x,v.y,v.z),f.push(U,1-T),w.push(p++)}x.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){const T=x[w][y],R=x[w+1][y],P=x[w+1][y+1],U=x[w][y+1];(t>0||w!==0)&&(u.push(T,R,U),E+=3),(e>0||w!==r-1)&&(u.push(R,P,U),E+=3)}c.addGroup(g,E,0),g+=E}function M(v){const b=p,E=new Nt,S=new V;let y=0;const w=v===!0?t:e,T=v===!0?1:-1;for(let P=1;P<=s;P++)h.push(0,m*T,0),d.push(0,T,0),f.push(.5,.5),p++;const R=p;for(let P=0;P<=s;P++){const L=P/s*l+a,z=Math.cos(L),I=Math.sin(L);S.x=w*I,S.y=m*T,S.z=w*z,h.push(S.x,S.y,S.z),d.push(0,T,0),E.x=z*.5+.5,E.y=I*.5*T+.5,f.push(E.x,E.y),p++}for(let P=0;P<s;P++){const U=b+P,L=R+P;v===!0?u.push(L,L+1,U):u.push(L+1,L,U),y+=3}c.addGroup(g,y,v===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ml extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new ye(r,3)),this.setAttribute("normal",new ye(r.slice(),3)),this.setAttribute("uv",new ye(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const M=new V,v=new V,b=new V;for(let E=0;E<e.length;E+=3)f(e[E+0],M),f(e[E+1],v),f(e[E+2],b),l(M,v,b,_)}function l(_,M,v,b){const E=b+1,S=[];for(let y=0;y<=E;y++){S[y]=[];const w=_.clone().lerp(v,y/E),T=M.clone().lerp(v,y/E),R=E-y;for(let P=0;P<=R;P++)P===0&&y===E?S[y][P]=w:S[y][P]=w.clone().lerp(T,P/R)}for(let y=0;y<E;y++)for(let w=0;w<2*(E-y)-1;w++){const T=Math.floor(w/2);w%2===0?(d(S[y][T+1]),d(S[y+1][T]),d(S[y][T])):(d(S[y][T+1]),d(S[y+1][T+1]),d(S[y+1][T]))}}function c(_){const M=new V;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(_),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function u(){const _=new V;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];const v=m(_)/2/Math.PI+.5,b=g(_)/Math.PI+.5;o.push(v,1-b)}p(),h()}function h(){for(let _=0;_<o.length;_+=6){const M=o[_+0],v=o[_+2],b=o[_+4],E=Math.max(M,v,b),S=Math.min(M,v,b);E>.9&&S<.1&&(M<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,M){const v=_*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function p(){const _=new V,M=new V,v=new V,b=new V,E=new Nt,S=new Nt,y=new Nt;for(let w=0,T=0;w<r.length;w+=9,T+=6){_.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),E.set(o[T+0],o[T+1]),S.set(o[T+2],o[T+3]),y.set(o[T+4],o[T+5]),b.copy(_).add(M).add(v).divideScalar(3);const R=m(b);x(E,T+0,_,R),x(S,T+2,M,R),x(y,T+4,v,R)}}function x(_,M,v,b){b<0&&_.x===1&&(o[M]=_.x-1),v.x===0&&v.z===0&&(o[M]=b/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ml(t.vertices,t.indices,t.radius,t.detail)}}function Mp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Ah(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Ep(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let u=a,h=l;for(let d=e;d<s;d+=e){const f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return hr(r,o,e,a,l,c,0),o}function Ah(i,t,e,n,s){let r;if(s===Up(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Ph(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Ph(o/n|0,i[o],i[o+1],r);return r&&Ss(r,r.next)&&(fr(r),r=r.next),r}function Yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ss(e,e.next)||be(e.prev,e,e.next)===0)){if(fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function hr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Cp(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Sp(i,n,s,r):vp(i)){t.push(l.i,i.i,c.i),fr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=yp(Yi(i),t),hr(i,t,e,n,s,r,2)):o===2&&bp(i,t,e,n,s,r):hr(Yi(i),t,e,n,s,r,1);break}}}function vp(i){const t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&ur(s,a,r,l,o,c,p.x,p.y)&&be(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Sp(i,t,e,n){const s=i.prev,r=i,o=i.next;if(be(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(u,h,d),x=Math.max(a,l,c),m=Math.max(u,h,d),g=gl(f,p,t,e,n),_=gl(x,m,t,e,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=g&&v&&v.z<=_;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&ur(a,u,l,h,c,d,M.x,M.y)&&be(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&ur(a,u,l,h,c,d,v.x,v.y)&&be(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&ur(a,u,l,h,c,d,M.x,M.y)&&be(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&ur(a,u,l,h,c,d,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function yp(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Ss(n,s)&&Ch(n,e,e.next,s)&&dr(n,s)&&dr(s,n)&&(t.push(n.i,e.i,s.i),fr(e),fr(e.next),e=i=s),e=e.next}while(e!==i);return Yi(e)}function bp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Dp(o,a)){let l=Lh(o,a);o=Yi(o,o.next),l=Yi(l,l.next),hr(o,t,e,n,s,r,0),hr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ep(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Ah(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Pp(c))}s.sort(wp);for(let r=0;r<s.length;r++)e=Tp(s[r],e);return e}function wp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Tp(i,t){const e=Ap(i,t);if(!e)return t;const n=Lh(e,i);return Yi(n,n.next),Yi(e,e.next)}function Ap(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Ss(i,e))return e;do{if(Ss(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Rh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const h=Math.abs(s-e.y)/(n-e.x);dr(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&Rp(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function Rp(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function Cp(i,t,e,n){let s=i;do s.z===0&&(s.z=gl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Lp(s)}function Lp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function gl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Pp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Rh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ur(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Rh(i,t,e,n,s,r,o,a)}function Dp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ip(i,t)&&(dr(i,t)&&dr(t,i)&&Np(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||Ss(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ss(i,t){return i.x===t.x&&i.y===t.y}function Ch(i,t,e,n){const s=fo(be(i,t,e)),r=fo(be(i,t,n)),o=fo(be(e,n,i)),a=fo(be(e,n,t));return!!(s!==r&&o!==a||s===0&&uo(i,e,t)||r===0&&uo(i,n,t)||o===0&&uo(e,i,n)||a===0&&uo(e,t,n))}function uo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function fo(i){return i>0?1:i<0?-1:0}function Ip(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ch(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function dr(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function Np(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Lh(i,t){const e=xl(i.i,i.x,i.y),n=xl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ph(i,t,e,n){const s=xl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Up(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Fp{static triangulate(t,e,n=2){return Mp(t,e,n)}}class po{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return po.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Dh(t),Ih(n,t);let o=t.length;e.forEach(Dh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ih(n,e[l]);const a=Fp.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Dh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ih(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class _l extends ml{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _l(t.radius,t.detail)}}class Hn extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<u;g++){const _=g*d-o;for(let M=0;M<c;M++){const v=M*h-r;p.push(v,-_,0),x.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const M=_+c*g,v=_+c*(g+1),b=_+1+c*(g+1),E=_+1+c*g;f.push(M,v,E),f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ml extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new V,d=new V,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const _=[],M=g/n,v=o+M*a,b=t*Math.cos(v),E=Math.sqrt(t*t-b*b);let S=0;g===0&&o===0?S=.5/e:g===n&&l===Math.PI&&(S=-.5/e);for(let y=0;y<=e;y++){const w=y/e,T=s+w*r;h.x=-E*Math.cos(T),h.y=b,h.z=E*Math.sin(T),p.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(w+S,1-M),_.push(c++)}u.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){const M=u[g][_+1],v=u[g][_],b=u[g+1][_],E=u[g+1][_+1];(g!==0||o>0)&&f.push(M,v,E),(g!==n-1||l<Math.PI)&&f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ml(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function ys(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Nh(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Nh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function en(i){const t={};for(let e=0;e<i.length;e++){const n=ys(i[e]);for(const s in n)t[s]=n[s]}return t}function Nh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Op(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const zp={clone:ys,merge:en};var Bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bp,this.fragmentShader=Gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=Op(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Lt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ie().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class kp extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Pn extends oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hp extends oi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Lt(16777215),this.specular=new Lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Cr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vp extends oi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Lt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class mo extends oi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Cr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wp extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xp extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Fh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Fh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Fh(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Yp{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Zp=new Yp;class Sl{constructor(t){this.manager=t!==void 0?t:Zp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Sl.DEFAULT_MATERIAL_NAME="__DEFAULT";const bs=new WeakMap;class Kp extends Sl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=vl.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let h=bs.get(o);h===void 0&&(h=[],bs.set(o,h)),h.push({onLoad:e,onError:s})}return o}const a=$s("img");function l(){u(),e&&e(this);const h=bs.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}bs.delete(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),vl.remove(`image:${t}`);const d=bs.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(h)}bs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),vl.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class qp extends Sl{constructor(t){super(t)}load(t,e,n,s){const r=new Ae,o=new Kp(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Oh extends Be{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Jp extends Oh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const yl=new ie,zh=new V,Bh=new V;class $p{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;zh.setFromMatrixPosition(t.matrixWorld),e.position.copy(zh),Bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){yl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(yl,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Js||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(yl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const go=new V,xo=new Tn,Vn=new V;class bl extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(go,xo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,xo,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(go,xo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,xo,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new V,Gh=new Nt,kh=new Nt;class Dn extends bl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,Gh,kh),e.subVectors(kh,Gh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Hh extends bl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class jp extends $p{constructor(){super(new Hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qp extends Oh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new jp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Es=-90,ws=1;class El extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dn(Es,ws,t,e);s.layers=this.layers,this.add(s);const r=new Dn(Es,ws,t,e);r.layers=this.layers,this.add(r);const o=new Dn(Es,ws,t,e);o.layers=this.layers,this.add(o);const a=new Dn(Es,ws,t,e);a.layers=this.layers,this.add(a);const l=new Dn(Es,ws,t,e);l.layers=this.layers,this.add(l);const c=new Dn(Es,ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class t0 extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const Vh=new ie;class e0{constructor(t,e,n=0,s=1/0){this.ray=new $r(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vh),this}intersectObject(t,e=!0,n=[]){return wl(t,this,n,e),n.sort(Wh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)wl(t[s],this,n,e);return n.sort(Wh),n}}function Wh(i,t){return i.distance-t.distance}function wl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)wl(r[o],t,e,!0)}}class _o{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const mc=class mc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};mc.prototype.isMatrix2=!0;let Xh=mc;class n0 extends bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Yh(i,t,e,n){const s=i0(n);switch(e){case Nc:return i*t;case Pr:return i*t/s.components*s.byteLength;case la:return i*t/s.components*s.byteLength;case Si:return i*t*2/s.components*s.byteLength;case ca:return i*t*2/s.components*s.byteLength;case Uc:return i*t*3/s.components*s.byteLength;case Bn:return i*t*4/s.components*s.byteLength;case ha:return i*t*4/s.components*s.byteLength;case Dr:case Ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nr:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:case pa:return Math.max(i,16)*Math.max(t,8)/4;case ua:case fa:return Math.max(i,8)*Math.max(t,8)/2;case ma:case ga:case _a:case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xa:case Fr:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ua:case Fa:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case za:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Or:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function i0(i){switch(i){case on:case Lc:return{byteLength:1,components:1};case qs:case Pc:case En:return{byteLength:2,components:1};case oa:case aa:return{byteLength:2,components:4};case zn:case ra:case bn:return{byteLength:4,components:1};case Dc:case Ic:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gi}})),typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gi);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zh(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function s0(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var r0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o0=`#ifdef USE_ALPHAHASH
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
#endif`,a0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u0=`#ifdef USE_AOMAP
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
#endif`,d0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f0=`#ifdef USE_BATCHING
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
#endif`,p0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_0=`#ifdef USE_IRIDESCENCE
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
#endif`,M0=`#ifdef USE_BUMPMAP
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,T0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,A0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,R0=`#define PI 3.141592653589793
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
} // validated`,C0=`vec3 transformedNormal = objectNormal;
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
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N0="gl_FragColor = linearToOutputTexel( gl_FragColor );",U0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X0=`#ifdef USE_GRADIENTMAP
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
}`,Y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,J0=`#ifdef USE_ENVMAP
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
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q0=`BlinnPhongMaterial material;
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
#endif`,om=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
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
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`#ifdef USE_MORPHTARGETS
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
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pm=`#ifdef USE_IRIDESCENCEMAP
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
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#ifdef USE_TRANSMISSION
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jt={alphahash_fragment:r0,alphahash_pars_fragment:o0,alphamap_fragment:a0,alphamap_pars_fragment:l0,alphatest_fragment:c0,alphatest_pars_fragment:h0,aomap_fragment:u0,aomap_pars_fragment:d0,batching_pars_vertex:f0,batching_vertex:p0,begin_vertex:m0,beginnormal_vertex:g0,bsdfs:x0,iridescence_fragment:_0,bumpmap_pars_fragment:M0,clipping_planes_fragment:v0,clipping_planes_pars_fragment:S0,clipping_planes_pars_vertex:y0,clipping_planes_vertex:b0,color_fragment:E0,color_pars_fragment:w0,color_pars_vertex:T0,color_vertex:A0,common:R0,defaultnormal_vertex:C0,displacementmap_pars_vertex:L0,displacementmap_vertex:P0,emissivemap_fragment:D0,emissivemap_pars_fragment:I0,colorspace_fragment:N0,colorspace_pars_fragment:U0,envmap_fragment:F0,envmap_common_pars_fragment:O0,envmap_pars_fragment:z0,envmap_pars_vertex:B0,envmap_physical_pars_fragment:J0,envmap_vertex:G0,fog_vertex:k0,fog_pars_vertex:H0,fog_fragment:V0,fog_pars_fragment:W0,gradientmap_pars_fragment:X0,lightmap_pars_fragment:Y0,lights_lambert_fragment:Z0,lights_lambert_pars_fragment:K0,lights_pars_begin:q0,lights_toon_fragment:$0,lights_toon_pars_fragment:j0,lights_phong_fragment:Q0,lights_phong_pars_fragment:tm,lights_physical_fragment:em,lights_physical_pars_fragment:nm,lights_fragment_begin:im,lights_fragment_maps:sm,lights_fragment_end:rm,lightprobes_pars_fragment:om,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:hm,map_fragment:um,map_pars_fragment:dm,map_particle_fragment:fm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphinstance_vertex:xm,morphcolor_vertex:_m,morphnormal_vertex:Mm,morphtarget_pars_vertex:vm,morphtarget_vertex:Sm,normal_fragment_begin:ym,normal_fragment_maps:bm,normal_pars_fragment:Em,normal_pars_vertex:wm,normal_vertex:Tm,normalmap_pars_fragment:Am,clearcoat_normal_fragment_begin:Rm,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Pm,opaque_fragment:Dm,packing:Im,premultiplied_alpha_fragment:Nm,project_vertex:Um,dithering_fragment:Fm,dithering_pars_fragment:Om,roughnessmap_fragment:zm,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:km,shadowmap_vertex:Hm,shadowmask_pars_fragment:Vm,skinbase_vertex:Wm,skinning_pars_vertex:Xm,skinning_vertex:Ym,skinnormal_vertex:Zm,specularmap_fragment:Km,specularmap_pars_fragment:qm,tonemapping_fragment:Jm,tonemapping_pars_fragment:$m,transmission_fragment:jm,transmission_pars_fragment:Qm,uv_pars_fragment:tg,uv_pars_vertex:eg,uv_vertex:ng,worldpos_vertex:ig,background_vert:`varying vec2 vUv;
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
}`},Tt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Wn={basic:{uniforms:en([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:en([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:en([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:en([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:en([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:en([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:en([Tt.points,Tt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:en([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:en([Tt.common,Tt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:en([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:en([Tt.sprite,Tt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:en([Tt.common,Tt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:en([Tt.lights,Tt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Wn.physical={uniforms:en([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Mo={r:0,b:0,g:0},sg=new ie,Kh=new Zt;Kh.set(-1,0,0,0,1,0,0,0,1);function rg(i,t,e,n,s,r){const o=new Lt(0);let a=s===!0?0:1,l,c,u=null,h=0,d=null;function f(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){const v=_.backgroundBlurriness>0;M=t.get(M,v)}return M}function p(_){let M=!1;const v=f(_);v===null?m(o,a):v&&v.isColor&&(m(v,1),M=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,M){const v=f(M);v&&v.isCubeTexture?(c===void 0&&(c=new te(new Xi(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:ys(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sg.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Kh),c.material.toneMapped=ae.getTransfer(v.colorSpace)!==fe,(u!==v||h!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new te(new Hn(2,2),new sn({name:"BackgroundMaterial",uniforms:ys(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ae.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(Mo,Uh(i)),e.buffers.color.setClear(Mo.r,Mo.g,Mo.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:x,dispose:g}}function og(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(R,P,U,L,z){let I=!1;const B=h(R,L,U,P);r!==B&&(r=B,c(r.object)),I=f(R,L,U,z),I&&p(R,L,U,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,v(R,P,U,L),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function h(R,P,U,L){const z=L.wireframe===!0;let I=n[P.id];I===void 0&&(I={},n[P.id]=I);const B=R.isInstancedMesh===!0?R.id:0;let $=I[B];$===void 0&&($={},I[B]=$);let N=$[U.id];N===void 0&&(N={},$[U.id]=N);let H=N[z];return H===void 0&&(H=d(l()),N[z]=H),H}function d(R){const P=[],U=[],L=[];for(let z=0;z<e;z++)P[z]=0,U[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:L,object:R,attributes:{},index:null}}function f(R,P,U,L){const z=r.attributes,I=P.attributes;let B=0;const $=U.getAttributes();for(const N in $)if($[N].location>=0){const K=z[N];let Y=I[N];if(Y===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(Y=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(Y=R.instanceColor)),K===void 0||K.attribute!==Y||Y&&K.data!==Y.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function p(R,P,U,L){const z={},I=P.attributes;let B=0;const $=U.getAttributes();for(const N in $)if($[N].location>=0){let K=I[N];K===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(K=R.instanceColor));const Y={};Y.attribute=K,K&&K.data&&(Y.data=K.data),z[N]=Y,B++}r.attributes=z,r.attributesNum=B,r.index=L}function x(){const R=r.newAttributes;for(let P=0,U=R.length;P<U;P++)R[P]=0}function m(R){g(R,0)}function g(R,P){const U=r.newAttributes,L=r.enabledAttributes,z=r.attributeDivisors;U[R]=1,L[R]===0&&(i.enableVertexAttribArray(R),L[R]=1),z[R]!==P&&(i.vertexAttribDivisor(R,P),z[R]=P)}function _(){const R=r.newAttributes,P=r.enabledAttributes;for(let U=0,L=P.length;U<L;U++)P[U]!==R[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function M(R,P,U,L,z,I,B){B===!0?i.vertexAttribIPointer(R,P,U,z,I):i.vertexAttribPointer(R,P,U,L,z,I)}function v(R,P,U,L){x();const z=L.attributes,I=U.getAttributes(),B=P.defaultAttributeValues;for(const $ in I){const N=I[$];if(N.location>=0){let H=z[$];if(H===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(H=R.instanceColor)),H!==void 0){const K=H.normalized,Y=H.itemSize,Z=t.get(H);if(Z===void 0)continue;const F=Z.buffer,J=Z.type,q=Z.bytesPerElement,nt=J===i.INT||J===i.UNSIGNED_INT||H.gpuType===ra;if(H.isInterleavedBufferAttribute){const et=H.data,st=et.isInterleavedBuffer===!0?et.stride:et.itemSize,wt=H.offset;if(et.isInstancedInterleavedBuffer||et.isInstancedBufferAttribute){for(let xt=0;xt<N.locationSize;xt++)g(N.location+xt,et.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let xt=0;xt<N.locationSize;xt++)m(N.location+xt);i.bindBuffer(i.ARRAY_BUFFER,F);for(let xt=0;xt<N.locationSize;xt++)M(N.location+xt,Y/N.locationSize,J,K,st*q,(wt+Y/N.locationSize*xt)*q,nt)}else{if(H.isInstancedBufferAttribute){for(let et=0;et<N.locationSize;et++)g(N.location+et,H.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let et=0;et<N.locationSize;et++)m(N.location+et);i.bindBuffer(i.ARRAY_BUFFER,F);for(let et=0;et<N.locationSize;et++)M(N.location+et,Y/N.locationSize,J,K,Y*q,Y/N.locationSize*et*q,nt)}}else if(B!==void 0){const K=B[$];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(N.location,K);break;case 3:i.vertexAttrib3fv(N.location,K);break;case 4:i.vertexAttrib4fv(N.location,K);break;default:i.vertexAttrib1fv(N.location,K)}}}}_()}function b(){w();for(const R in n){const P=n[R];for(const U in P){const L=P[U];for(const z in L){const I=L[z];for(const B in I)u(I[B].object),delete I[B];delete L[z]}}delete n[R]}}function E(R){if(n[R.id]===void 0)return;const P=n[R.id];for(const U in P){const L=P[U];for(const z in L){const I=L[z];for(const B in I)u(I[B].object),delete I[B];delete L[z]}}delete n[R.id]}function S(R){for(const P in n){const U=n[P];for(const L in U){const z=U[L];if(z[R.id]===void 0)continue;const I=z[R.id];for(const B in I)u(I[B].object),delete I[B];delete z[R.id]}}}function y(R){for(const P in n){const U=n[P],L=R.isInstancedMesh===!0?R.id:0,z=U[L];if(z!==void 0){for(const I in z){const B=z[I];for(const $ in B)u(B[$].object),delete B[$];delete z[I]}delete U[L],Object.keys(U).length===0&&delete n[P]}}}function w(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function ag(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function lg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==Bn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const y=S===En&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==on&&S!==bn&&!y&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Vt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&h===!1;e.reversedDepthBuffer===!0&&h===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&h===!0&&Vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:b,samples:E}}function cg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new kn,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{const _=r?0:n,M=_*4;let v=g.clippingState||null;l.value=v,v=u(p,d,M,f);for(let b=0;b!==M;++b)v[b]=e[b];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,p){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const g=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,v=f;M!==x;++M,v+=4)o.copy(h[M]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}class Tl extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Eh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xi(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:ns});r.uniforms.tEquirect.value=e;const o=new te(s,r),a=e.minFilter;return e.minFilter===yn&&(e.minFilter=Ke),new El(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const qh=256,hg=3,ug=20,Jh=256,$h=16,dg=3,fg=new V,pg=new Lt;class vo{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new El(1,10,null),this._boxMesh=new te(new Xi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=fg}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);const h=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(pg));const m=new El(n,s,u);return m.position.copy(a),m.update(l,t),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(qh,Wc(t))}_fromTexture(t,e){t.mapping===ss||t.mapping===Zs?this._setSize(t.image.length===0?qh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=jh(t,!1,!1),n=Math.log2(t)-hg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=jh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ss||t.mapping===Zs?(this._cubemapMaterial===null&&(this._cubemapMaterial=tu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Qh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=mg(),this._integrationMaterial=gg());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/$h);for(let o=0;o<=n;o++){const a=vo.lodToRoughness(o,n);if(o>n-dg)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(Jh*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=xg());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function jh(i,t,e){return new Tl(i,{minFilter:yn,generateMipmaps:t,type:En,colorSpace:zr,depthBuffer:e})}function pr(i,t,e){return new sn({name:i,uniforms:t,vertexShader:Jt.cube_vert,fragmentShader:e,side:tn,blending:ns,depthTest:!1,depthWrite:!1})}function mg(){return pr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Jh}u

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
	`)}function gg(){return pr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$h}},`

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
	`)}function xg(){return pr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ug}
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
	`)}function Qh(){return pr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function tu(){return pr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function _g(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===ea||f===na)if(t.has(d)){const p=t.get(d).texture;return a(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const x=new Tl(p.height);return x.fromEquirectangularTexture(i,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,p=f===ea||f===na,x=f===ss||f===Zs;if(p||x){let m=e.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new vo(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const _=d.image;return p&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new vo(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,f){return f===ea?d.mapping=ss:f===na&&(d.mapping=Zs),d}function l(d){let f=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Mg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Gr("WebGLRenderer: "+n+" extension not supported."),s}}}function vg(i,t,e,n){const s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);const x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function u(p){const x=p.attributes;for(const m in x)t.update(x[m],i.ARRAY_BUFFER)}function h(p){const x=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const _=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?ch:lh,v=new M(Math.ceil(_/3)*6,1),b=v.array;if(x!==null){const S=x.array;g=x.version;for(let y=0,w=0;y<_;y+=3){const T=S[y+0],R=S[y+1],P=S[y+2];b[w++]=T,b[w++]=R,b[w++]=R,b[w++]=P,b[w++]=P,b[w++]=T}}else{g=m.version;for(let S=0,y=0;S<_;S+=3){const w=S+0,T=S+1,R=S+2;b[y++]=w,b[y++]=T,b[y++]=T,b[y++]=R,b[y++]=R,b[y++]=w}}v.version=g;const E=r.get(p);E&&t.remove(E),r.set(p,v)}function d(p){const x=r.get(p);if(x){const m=p.index;m!==null&&x.version<m.version&&h(p)}else h(p);return r.get(p)}function f(){for(const p in s){const x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function Sg(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*o,f),e.update(d,n,f))}function u(h,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function yg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ce("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function bg(i,t,e){const n=new WeakMap,s=new Se;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let w=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const E=new Float32Array(v*b*4*h),S=new Jc(E,v,b,h);S.type=bn,S.needsUpdate=!0;const y=M*4;for(let T=0;T<h;T++){const R=m[T],P=g[T],U=_[T],L=v*b*4*T;for(let z=0;z<R.count;z++){const I=z*y;f===!0&&(s.fromBufferAttribute(R,z),E[L+I+0]=s.x,E[L+I+1]=s.y,E[L+I+2]=s.z,E[L+I+3]=0),p===!0&&(s.fromBufferAttribute(P,z),E[L+I+4]=s.x,E[L+I+5]=s.y,E[L+I+6]=s.z,E[L+I+7]=0),x===!0&&(s.fromBufferAttribute(U,z),E[L+I+8]=s.x,E[L+I+9]=s.y,E[L+I+10]=s.z,E[L+I+11]=U.itemSize===4?s.w:1)}}d={count:h,texture:S,size:new Nt(v,b)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Eg(i,t,e,n,s){let r=new WeakMap;function o(c){const u=s.render.frame,h=c.geometry,d=t.get(c,h);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const wg={[bc]:"LINEAR_TONE_MAPPING",[Ec]:"REINHARD_TONE_MAPPING",[wc]:"CINEON_TONE_MAPPING",[Tc]:"ACES_FILMIC_TONE_MAPPING",[Rc]:"AGX_TONE_MAPPING",[ta]:"NEUTRAL_TONE_MAPPING",[Ac]:"CUSTOM_TONE_MAPPING"};function Tg(i,t,e,n,s,r){const o=new Gn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const u=new Re;u.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ye([0,2,0,0,2,0],2));const h=new kp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new te(u,h),f=new Hh(-1,1,1,-1,0,1);let p=null,x=null,m=!1,g,_=null,M=[],v=!1;this.setSize=function(b,E){o.setSize(b,E),a!==null&&a.setSize(b,E),l!==null&&l.setSize(b,E);for(let S=0;S<M.length;S++){const y=M[S];y.setSize&&y.setSize(b,E)}},this.setEffects=function(b){M=b,v=M.length>0&&M[0].isRenderPass===!0;const E=o.width,S=o.height;M.length>0&&a===null&&(a=new Gn(E,S,{type:En,depthBuffer:!1,stencilBuffer:!1}),l=new Gn(E,S,{type:En,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&M.some(w=>w.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&c===null&&(c=new vs(E,S),r===!0&&(c.format=vi,c.type=rs)),o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let w=0;w<M.length;w++){const T=M[w];T.setSize&&T.setSize(E,S),y&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(c)}},this.begin=function(b,E){if(m||b.toneMapping===Qn&&M.length===0)return!1;if(_=E,E!==null){const S=E.width,y=E.height;(o.width!==S||o.height!==y)&&this.setSize(S,y)}return v===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Qn,!0},this.hasRenderPass=function(){return v},this.end=function(b,E){b.toneMapping=g,m=!0;let S=o,y=a;for(let w=0;w<M.length;w++){const T=M[w];T.enabled!==!1&&(T.render(b,y,S,E),T.needsSwap!==!1&&(S=y,y=y===a?l:a))}if(p!==b.outputColorSpace||x!==b.toneMapping){p=b.outputColorSpace,x=b.toneMapping,h.defines={},ae.getTransfer(p)===fe&&(h.defines.SRGB_TRANSFER="");const w=wg[x];w&&(h.defines[w]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(_),b.render(d,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}const eu=new Ae,nu=new vs(1,1),iu=new wh(1),su=new Jc,ru=new jf,ou=new Eh,au=[],lu=[],cu=new Float32Array(16),hu=new Float32Array(9),uu=new Float32Array(4);function Ts(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=au[s];if(r===void 0&&(r=new Float32Array(s),au[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function So(i,t){let e=lu[t];e===void 0&&(e=new Int32Array(t),lu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ag(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function Cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function Lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function Pg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;uu.set(n),i.uniformMatrix2fv(this.addr,!1,uu),Oe(e,n)}}function Dg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;hu.set(n),i.uniformMatrix3fv(this.addr,!1,hu),Oe(e,n)}}function Ig(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;cu.set(n),i.uniformMatrix4fv(this.addr,!1,cu),Oe(e,n)}}function Ng(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function Fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function Og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function zg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function Gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function yo(i){return i.version===0&&(i.compareFunction=zc,i.needsUpdate=!0),i}function Hg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=yo(nu):r=eu,e.setTexture2D(t||r,s)}function Vg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ru,s)}function Wg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=yo(iu):r=ou,e.setTextureCube(t||r,s)}function Xg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||su,s)}function Yg(i){switch(i){case 5126:return Ag;case 35664:return Rg;case 35665:return Cg;case 35666:return Lg;case 35674:return Pg;case 35675:return Dg;case 35676:return Ig;case 5124:case 35670:return Ng;case 35667:case 35671:return Ug;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return zg;case 36294:return Bg;case 36295:return Gg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}function Zg(i,t){i.uniform1fv(this.addr,t)}function Kg(i,t){const e=Ts(t,this.size,2);i.uniform2fv(this.addr,e)}function qg(i,t){const e=Ts(t,this.size,3);i.uniform3fv(this.addr,e)}function Jg(i,t){const e=Ts(t,this.size,4);i.uniform4fv(this.addr,e)}function $g(i,t){const e=Ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jg(i,t){const e=Ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Qg(i,t){const e=Ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function tx(i,t){i.uniform1iv(this.addr,t)}function ex(i,t){i.uniform2iv(this.addr,t)}function nx(i,t){i.uniform3iv(this.addr,t)}function ix(i,t){i.uniform4iv(this.addr,t)}function sx(i,t){i.uniform1uiv(this.addr,t)}function rx(i,t){i.uniform2uiv(this.addr,t)}function ox(i,t){i.uniform3uiv(this.addr,t)}function ax(i,t){i.uniform4uiv(this.addr,t)}function lx(i,t,e){const n=this.cache,s=t.length,r=So(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=yo(nu):o=eu;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function cx(i,t,e){const n=this.cache,s=t.length,r=So(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ru,r[o])}function hx(i,t,e){const n=this.cache,s=t.length,r=So(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=yo(iu):o=ou;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function ux(i,t,e){const n=this.cache,s=t.length,r=So(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||su,r[o])}function dx(i){switch(i){case 5126:return Zg;case 35664:return Kg;case 35665:return qg;case 35666:return Jg;case 35674:return $g;case 35675:return jg;case 35676:return Qg;case 5124:case 35670:return tx;case 35667:case 35671:return ex;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return sx;case 36294:return rx;case 36295:return ox;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return ux}}class fx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yg(e.type)}}class px{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dx(e.type)}}class mx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Al=/(\w+)(\])?(\[|\.)?/g;function du(i,t){i.seq.push(t),i.map[t.id]=t}function gx(i,t,e){const n=i.name,s=n.length;for(Al.lastIndex=0;;){const r=Al.exec(n),o=Al.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){du(e,c===void 0?new fx(a,i,t):new px(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new mx(a),du(e,h)),e=h}}}class bo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);gx(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function fu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const xx=37297;let _x=0;function Mx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const pu=new Zt;function vx(i){ae._getMatrix(pu,ae.workingColorSpace,i);const t=`mat3( ${pu.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case Br:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function mu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Mx(i.getShaderSource(t),a)}else return r}function Sx(i,t){const e=vx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const yx={[bc]:"Linear",[Ec]:"Reinhard",[wc]:"Cineon",[Tc]:"ACESFilmic",[Rc]:"AgX",[ta]:"Neutral",[Ac]:"Custom"};function bx(i,t){const e=yx[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Eo=new V;function Ex(){ae.getLuminanceCoefficients(Eo);const i=Eo.x.toFixed(4),t=Eo.y.toFixed(4),e=Eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function Tx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ax(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function mr(i){return i!==""}function gu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function xu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(i){return i.replace(Rx,Cx)}function Cx(i,t){const e=Jt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Rl(e)}const Lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(i){return i.replace(Lx,Px)}function Px(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const Dx={[Vs]:"SHADOWMAP_TYPE_PCF",[Ws]:"SHADOWMAP_TYPE_VSM"};function Ix(i){return Dx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Nx={[Zs]:"ENVMAP_MODE_REFRACTION"};function Ux(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Nx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Fx={[Cr]:"ENVMAP_BLENDING_MULTIPLY",[gf]:"ENVMAP_BLENDING_MIX",[xf]:"ENVMAP_BLENDING_ADD"};function Ox(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Fx[i.combine]||"ENVMAP_BLENDING_NONE"}function zx(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Ix(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Ux(e),h=Ox(e),d=wx(e),f=Tx(r),p=s.createProgram();let x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(mr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(mr).join(`
`),m.length>0&&(m+=`
`)):(x=[Mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),m=[Mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?bx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Sx("linearToOutputTexel",e.outputColorSpace),Ex(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mr).join(`
`)),o=Rl(o),o=gu(o,e),o=xu(o,e),a=Rl(a),a=gu(a,e),a=xu(a,e),o=_u(o),a=_u(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=g+x+o,M=g+m+a,v=fu(s,s.VERTEX_SHADER,_),b=fu(s,s.FRAGMENT_SHADER,M);s.attachShader(p,v),s.attachShader(p,b),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(T){if(i.debug.checkShaderErrors){const R=s.getProgramInfoLog(p)||"",P=s.getShaderInfoLog(v)||"",U=s.getShaderInfoLog(b)||"",L=R.trim(),z=P.trim(),I=U.trim();let B=!0,$=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,v,b);else{const N=mu(s,v,"vertex"),H=mu(s,b,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+L+`
`+N+`
`+H)}else L!==""?Vt("WebGLProgram: Program Info Log:",L):(z===""||I==="")&&($=!1);$&&(T.diagnostics={runnable:B,programLog:L,vertexShader:{log:z,prefix:x},fragmentShader:{log:I,prefix:m}})}s.deleteShader(v),s.deleteShader(b),S=new bo(s,p),y=Ax(s,p)}let S;this.getUniforms=function(){return S===void 0&&E(this),S};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(p,xx)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_x++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=b,this}let Bx=0;class Gx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new kx(t),e.set(t,n)),n}}class kx{constructor(t){this.id=Bx++,this.code=t,this.usedTimes=0}}function Hx(i){return i===Si||i===Fr||i===Or}function Vx(i,t,e,n,s,r){const o=new Ka,a=new Gx,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,y,w,T,R,P){const U=T.fog,L=R.geometry,z=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?T.environment:null,I=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,B=t.get(S.envMap||z,I),$=d[S.type];let N=n.precision;S.precision!==null&&(N=n.getMaxPrecision(S.precision),N!==S.precision&&Vt("WebGLProgram.getParameters:",S.precision,"not supported, using",N,"instead."));const H=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,K=H!==void 0?H.length:0;let Y=0;L.morphAttributes.position!==void 0&&(Y=1),L.morphAttributes.normal!==void 0&&(Y=2),L.morphAttributes.color!==void 0&&(Y=3);let Z,F,J,q;if($){const At=Wn[$];Z=At.vertexShader,F=At.fragmentShader}else{Z=S.vertexShader,F=S.fragmentShader;const At=a.getVertexShaderStage(S),me=a.getFragmentShaderStage(S);a.update(S,At,me),J=At.id,q=me.id}const nt=i.getRenderTarget(),et=i.state.buffers.depth.getReversed(),st=R.isInstancedMesh===!0,wt=R.isBatchedMesh===!0,xt=!!S.map,Ft=!!S.matcap,kt=!!B,ht=kt&&B.isPMREMTexture===!0,dt=!!S.aoMap,pt=!!S.lightMap,Yt=!!S.bumpMap&&S.wireframe===!1,Ct=!!S.normalMap,Ht=!!S.displacementMap,Xt=!!S.emissiveMap,Kt=!!S.metalnessMap,pe=!!S.roughnessMap,ge=S.anisotropy>0,W=S.clearcoat>0,ve=S.diffuseRoughness>0,ee=S.dispersion>0,he=S.retroreflectivity>0,Mt=S.iridescence>0,_e=S.sheen>0,Bt=S.transmission>0,Ot=ge&&!!S.anisotropyMap,D=W&&!!S.clearcoatMap,A=W&&!!S.clearcoatNormalMap,j=W&&!!S.clearcoatRoughnessMap,ut=ve&&!!S.diffuseRoughnessMap,lt=Mt&&!!S.iridescenceMap,mt=Mt&&!!S.iridescenceThicknessMap,bt=_e&&!!S.sheenColorMap,ot=_e&&!!S.sheenRoughnessMap,at=!!S.specularMap,vt=!!S.specularColorMap,G=!!S.specularIntensityMap,ct=Bt&&!!S.transmissionMap,rt=Bt&&!!S.thicknessMap,St=!!S.gradientMap,gt=!!S.alphaMap,_t=S.alphaTest>0,zt=!!S.alphaHash,jt=!!S.extensions;let ft=Qn;S.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ft=i.toneMapping);const Gt=ht?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,$t={shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:F,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:N,batching:wt,batchingColor:wt&&R._colorsTexture!==null,instancing:st,instancingColor:st&&R.instanceColor!==null,instancingMorph:st&&R.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:xt,matcap:Ft,envMap:kt,envMapMode:kt&&B.mapping,envMapPMREM:ht,envMapMaxLod:ht?Gt.length-1:null,envMapSize:ht?Gt[0].width:null,aoMap:dt,lightMap:pt,bumpMap:Yt,normalMap:Ct,displacementMap:Ht,emissiveMap:Xt,normalMapObjectSpace:Ct&&S.normalMapType===vf,normalMapTangentSpace:Ct&&S.normalMapType===os,packedNormalMap:Ct&&S.normalMapType===os&&Hx(S.normalMap.format),metalnessMap:Kt,roughnessMap:pe,anisotropy:ge,anisotropyMap:Ot,clearcoat:W,clearcoatMap:D,clearcoatNormalMap:A,clearcoatRoughnessMap:j,diffuseRoughness:ve,diffuseRoughnessMap:ut,dispersion:ee,retroreflection:he,iridescence:Mt,iridescenceMap:lt,iridescenceThicknessMap:mt,sheen:_e,sheenColorMap:bt,sheenRoughnessMap:ot,specularMap:at,specularColorMap:vt,specularIntensityMap:G,transmission:Bt,transmissionMap:ct,thicknessMap:rt,gradientMap:St,opaque:S.transparent===!1&&S.blending===Xs&&S.alphaToCoverage===!1,alphaMap:gt,alphaTest:_t,alphaHash:zt,combine:S.combine,mapUv:xt&&f(S.map.channel),aoMapUv:dt&&f(S.aoMap.channel),lightMapUv:pt&&f(S.lightMap.channel),bumpMapUv:Yt&&f(S.bumpMap.channel),normalMapUv:Ct&&f(S.normalMap.channel),displacementMapUv:Ht&&f(S.displacementMap.channel),emissiveMapUv:Xt&&f(S.emissiveMap.channel),metalnessMapUv:Kt&&f(S.metalnessMap.channel),roughnessMapUv:pe&&f(S.roughnessMap.channel),anisotropyMapUv:Ot&&f(S.anisotropyMap.channel),clearcoatMapUv:D&&f(S.clearcoatMap.channel),clearcoatNormalMapUv:A&&f(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&f(S.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ut&&f(S.diffuseRoughnessMap.channel),iridescenceMapUv:lt&&f(S.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&f(S.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&f(S.sheenColorMap.channel),sheenRoughnessMapUv:ot&&f(S.sheenRoughnessMap.channel),specularMapUv:at&&f(S.specularMap.channel),specularColorMapUv:vt&&f(S.specularColorMap.channel),specularIntensityMapUv:G&&f(S.specularIntensityMap.channel),transmissionMapUv:ct&&f(S.transmissionMap.channel),thicknessMapUv:rt&&f(S.thicknessMap.channel),alphaMapUv:gt&&f(S.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Ct||ge),vertexNormals:!!L.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!L.attributes.uv&&(xt||gt),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||L.attributes.normal===void 0&&Ct===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:et,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Y,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:P.filter(At=>At.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:xt&&S.map.isVideoTexture===!0&&ae.getTransfer(S.map.colorSpace)===fe,decodeVideoTextureEmissive:Xt&&S.emissiveMap.isVideoTexture===!0&&ae.getTransfer(S.emissiveMap.colorSpace)===fe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ce,flipSided:S.side===tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:jt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&S.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return $t.vertexUv1s=l.has(1),$t.vertexUv2s=l.has(2),$t.vertexUv3s=l.has(3),l.clear(),$t}function x(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)y.push(w),y.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(m(y,S),g(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function m(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapPMREM),S.push(y.envMapMaxLod),S.push(y.envMapSize),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.diffuseRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.numSunLights),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numSunLightShadows),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.numLightProbeGrids),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function g(S,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function _(S){const y=d[S.type];let w;if(y){const T=Wn[y];w=zp.clone(T.uniforms)}else w=S.uniforms;return w}function M(S,y){let w=u.get(y);return w!==void 0?++w.usedTimes:(w=new zx(i,y,S,s),c.push(w),u.set(y,w)),w}function v(S){if(--S.usedTimes===0){const y=c.indexOf(S);c[y]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function b(S){a.remove(S)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:_,acquireProgram:M,releaseProgram:v,releaseShaderCache:b,programs:c,dispose:E}}function Wx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Xx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function vu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Su(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,g){let _=i[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},i[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=p,_.materialVariant=o(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=m,_.group=g),t++,_}function l(d,f,p,x,m,g,_){_.reversedDepth===!0&&(m=-m);const M=a(d,f,p,x,m,g);p.transmission>0?n.push(M):p.transparent===!0?s.push(M):e.push(M)}function c(d,f,p,x,m,g){const _=a(d,f,p,x,m,g);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):e.unshift(_)}function u(d,f){e.length>1&&e.sort(d||Xx),n.length>1&&n.sort(f||vu),s.length>1&&s.sort(f||vu)}function h(){for(let d=t,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function Yx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Su,i.set(n,[o])):s>=r.length?(o=new Su,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Zx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new Lt};break;case"SpotLight":e={position:new V,direction:new V,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function Kx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let qx=0;function Jx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $x(i){const t=new Zx,e=Kx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const s=new V,r=new ie,o=new ie;function a(c){let u=0,h=0,d=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,_=0,M=0,v=0,b=0,E=0,S=0,y=0,w=0,T=0;c.sort(Jx);for(let P=0,U=c.length;P<U;P++){const L=c[P],z=L.color,I=L.intensity,B=L.distance;let $=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Si?$=L.shadow.map.texture:$=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=z.r*I,h+=z.g*I,d+=z.b*I;else if(L.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(L.sh.coefficients[N],I);T++}else if(L.isSunLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,K=e.get(L);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[p]=K,n.sunShadowMap[p]=$;const Y=H.getViewportCount();for(let Z=0;Z<Y;Z++)n.sunShadowMatrix[x+Z]=H.getMatrix(Z),n.sunShadowCascade[x+Z]=H._cascadeData[Z];x+=Y,p++}n.sun[f]=N,f++}else if(L.isDirectionalLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,K=e.get(L);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=N,m++}else if(L.isSpotLight){const N=t.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(z).multiplyScalar(I),N.distance=B,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,n.spot[_]=N;const H=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,H.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=H.matrix,L.castShadow){const K=e.get(L);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=$,S++}_++}else if(L.isRectAreaLight){const N=t.get(L);N.color.copy(z).multiplyScalar(I),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),n.rectArea[M]=N,M++}else if(L.isPointLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),N.distance=L.distance,N.decay=L.decay,L.castShadow){const H=L.shadow,K=e.get(L);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,K.shadowCameraNear=H.camera.near,K.shadowCameraFar=H.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=N,g++}else if(L.isHemisphereLight){const N=t.get(L);N.skyColor.copy(L.color).multiplyScalar(I),N.groundColor.copy(L.groundColor).multiplyScalar(I),n.hemi[v]=N,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const R=n.hash;(R.sunLength!==f||R.directionalLength!==m||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==M||R.hemiLength!==v||R.numSunShadows!==p||R.numDirectionalShadows!==b||R.numPointShadows!==E||R.numSpotShadows!==S||R.numSpotMaps!==y||R.numLightProbes!==T)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=M,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.spotLightMatrix.length=S+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,R.sunLength=f,R.directionalLength=m,R.pointLength=g,R.spotLength=_,R.rectAreaLength=M,R.hemiLength=v,R.numSunShadows=p,R.numDirectionalShadows=b,R.numPointShadows=E,R.numSpotShadows=S,R.numSpotMaps=y,R.numLightProbes=T,n.version=qx++)}function l(c,u){let h=0,d=0,f=0,p=0,x=0,m=0;const g=u.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){const v=c[_];if(v.isSunLight){const b=n.sun[h];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),h++}else if(v.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),d++}else if(v.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function yu(i){const t=new $x(i),e=[],n=[],s=[];function r(h){u.camera=h,e.length=0,n.length=0,s.length=0}function o(h){h.isLightProbeGrid?s.push(h):e.push(h)}function a(h){n.push(h)}function l(){t.setup(e),s.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function jx(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new yu(i),t.set(s,[a])):r>=o.length?(a=new yu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t1=`uniform sampler2D shadow_pass;
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
}`,e1=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],n1=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],bu=new ie,gr=new V,Cl=new V;function i1(i,t,e){let n=new lr;const s=new Nt,r=new Nt,o=new Se,a=new Wp,l=new Xp,c={},u=e.maxTextureSize,h={[_i]:tn,[tn]:_i,[Ce]:Ce},d=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Qx,fragmentShader:t1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Re;p.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new te(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vs;let g=this.type;this.render=function(E,S,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Jd&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vs);const w=i.getRenderTarget(),T=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(ns),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const U=g!==this.type;U&&S.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=E.length;L<z;L++){const I=E[L],B=I.shadow;if(B===void 0){Vt("WebGLShadowMap:",I,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const $=B.getFrameExtents();s.multiply($),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,B.mapSize.y=r.y));const N=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=N,B.map===null||U===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ws){if(I.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Gn(s.x,s.y,{format:Si,type:En,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),B.map.texture.name=I.name+".shadowMap",B.map.depthTexture=new vs(s.x,s.y,bn),B.map.depthTexture.name=I.name+".shadowMapDepth",B.map.depthTexture.format=Mi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ne,B.map.depthTexture.magFilter=Ne}else I.isPointLight?(B.map=new Tl(s.x),B.map.depthTexture=new wh(s.x,zn)):(B.map=new Gn(s.x,s.y),B.map.depthTexture=new vs(s.x,s.y,zn)),B.map.depthTexture.name=I.name+".shadowMap",B.map.depthTexture.format=Mi,this.type===Vs?(B.map.depthTexture.compareFunction=N?Oc:Fc,B.map.depthTexture.minFilter=Ke,B.map.depthTexture.magFilter=Ke):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ne,B.map.depthTexture.magFilter=Ne);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);const H=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();I.isPointLight!==!0&&B.updateMatrices(I,y);const K=B.camera.layers.mask&4294967294?B.camera.layers:y.layers;for(let Y=0;Y<H;Y++){const Z=B.getCamera(Y);if(I.isPointLight){const F=B.camera,J=B.matrix,q=I.distance||F.far;q!==F.far&&(F.far=q,F.updateProjectionMatrix()),gr.setFromMatrixPosition(I.matrixWorld),F.position.copy(gr),Cl.copy(F.position),Cl.add(e1[Y]),F.up.copy(n1[Y]),F.lookAt(Cl),F.updateMatrixWorld(),J.makeTranslation(-gr.x,-gr.y,-gr.z),bu.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),B._frustum.setFromProjectionMatrix(bu,F.coordinateSystem,F.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,Y),i.clear();else{Y===0&&(i.setRenderTarget(B.map),i.clear());const F=B.getViewport(Y);o.set(r.x*F.x,r.y*F.y,r.x*F.z,r.y*F.w),P.viewport(o)}n=B.getFrustum(Y),v(S,y,Z,I,K,this.type)}B.isPointLightShadow!==!0&&this.type===Ws&&_(B,y),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(w,T,R)};function _(E,S){const y=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Gn(s.x,s.y,{format:Si,type:En}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(S,null,y,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(S,null,y,f,x,null)}function M(E,S,y,w){let T=null;const R=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)T=R;else if(T=y.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){const P=T.uuid,U=S.uuid;let L=c[P];L===void 0&&(L={},c[P]=L);let z=L[U];z===void 0&&(z=T.clone(),L[U]=z,S.addEventListener("dispose",b)),T=z}if(T.visible=S.visible,T.wireframe=S.wireframe,w===Ws?T.side=S.shadowSide!==null?S.shadowSide:S.side:T.side=S.shadowSide!==null?S.shadowSide:h[S.side],T.alphaMap=S.alphaMap,T.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,T.map=S.map,T.clipShadows=S.clipShadows,T.clippingPlanes=S.clippingPlanes,T.clipIntersection=S.clipIntersection,T.displacementMap=S.displacementMap,T.displacementScale=S.displacementScale,T.displacementBias=S.displacementBias,T.wireframeLinewidth=S.wireframeLinewidth,T.linewidth=S.linewidth,y.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const P=i.properties.get(T);P.light=y}return T}function v(E,S,y,w,T,R){if(E.visible===!1)return;if(E.layers.test(T)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Ws)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const L=t.update(E),z=E.material;if(Array.isArray(z)){const I=L.groups;for(let B=0,$=I.length;B<$;B++){const N=I[B],H=z[N.materialIndex];if(H&&H.visible){const K=M(E,H,w,R);E.onBeforeShadow(i,E,S,y,L,K,N),i.renderBufferDirect(y,null,L,K,E,N),E.onAfterShadow(i,E,S,y,L,K,N)}}}else if(z.visible){const I=M(E,z,w,R);E.onBeforeShadow(i,E,S,y,L,I,null),i.renderBufferDirect(y,null,L,I,E,null),E.onAfterShadow(i,E,S,y,L,I,null)}}const U=E.children;for(let L=0,z=U.length;L<z;L++)v(U[L],S,y,w,T,R)}function b(E){E.target.removeEventListener("dispose",b);for(const y in c){const w=c[y],T=E.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}function s1(i,t){function e(){let G=!1;const ct=new Se;let rt=null;const St=new Se(0,0,0,0);return{setMask:function(gt){rt!==gt&&!G&&(i.colorMask(gt,gt,gt,gt),rt=gt)},setLocked:function(gt){G=gt},setClear:function(gt,_t,zt,jt,ft){ft===!0&&(gt*=jt,_t*=jt,zt*=jt),ct.set(gt,_t,zt,jt),St.equals(ct)===!1&&(i.clearColor(gt,_t,zt,jt),St.copy(ct))},reset:function(){G=!1,rt=null,St.set(-1,0,0,0)}}}function n(){let G=!1,ct=!1,rt=null,St=null,gt=null;return{setReversed:function(_t){if(ct!==_t){const zt=t.get("EXT_clip_control");_t?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),ct=_t;const jt=gt;gt=null,this.setClear(jt)}},getReversed:function(){return ct},setTest:function(_t){_t?et(i.DEPTH_TEST):st(i.DEPTH_TEST)},setMask:function(_t){rt!==_t&&!G&&(i.depthMask(_t),rt=_t)},setFunc:function(_t){if(ct&&(_t=Pf[_t]),St!==_t){switch(_t){case Zo:i.depthFunc(i.NEVER);break;case Ko:i.depthFunc(i.ALWAYS);break;case qo:i.depthFunc(i.LESS);break;case Ys:i.depthFunc(i.LEQUAL);break;case Jo:i.depthFunc(i.EQUAL);break;case $o:i.depthFunc(i.GEQUAL);break;case jo:i.depthFunc(i.GREATER);break;case Qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=_t}},setLocked:function(_t){G=_t},setClear:function(_t){gt!==_t&&(gt=_t,ct&&(_t=1-_t),i.clearDepth(_t))},reset:function(){G=!1,rt=null,St=null,gt=null,ct=!1}}}function s(){let G=!1,ct=null,rt=null,St=null,gt=null,_t=null,zt=null,jt=null,ft=null;return{setTest:function(Gt){G||(Gt?et(i.STENCIL_TEST):st(i.STENCIL_TEST))},setMask:function(Gt){ct!==Gt&&!G&&(i.stencilMask(Gt),ct=Gt)},setFunc:function(Gt,$t,At){(rt!==Gt||St!==$t||gt!==At)&&(i.stencilFunc(Gt,$t,At),rt=Gt,St=$t,gt=At)},setOp:function(Gt,$t,At){(_t!==Gt||zt!==$t||jt!==At)&&(i.stencilOp(Gt,$t,At),_t=Gt,zt=$t,jt=At)},setLocked:function(Gt){G=Gt},setClear:function(Gt){ft!==Gt&&(i.clearStencil(Gt),ft=Gt)},reset:function(){G=!1,ct=null,rt=null,St=null,gt=null,_t=null,zt=null,jt=null,ft=null}}}const r=new e,o=new n,a=new s;let l={};const c=new WeakMap;let u={},h={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,M=null,v=null,b=null,E=null,S=null,y=new Lt(0,0,0),w=0,T=!1,R=null,P=null,U=null,L=null,z=null;const I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(N)[1]),B=$>=1):N.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),B=$>=2);let H=null,K={};const Y=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),F=new Se().fromArray(Y),J=new Se().fromArray(Z);function q(G,ct,rt,St){const gt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(G,_t),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<rt;zt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(ct+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return _t}const nt={};nt[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(Ys),Yt(!1),Ct(_c),et(i.CULL_FACE),dt(ns);function et(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function st(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function wt(G,ct){return d[G]!==ct?(i.bindFramebuffer(G,ct),d[G]=ct,G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ct),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function xt(G,ct){let rt=p,St=!1;if(G){rt=f.get(ct),rt===void 0&&(rt=[],f.set(ct,rt));const gt=G.textures;if(rt.length!==gt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,zt=gt.length;_t<zt;_t++)rt[_t]=i.COLOR_ATTACHMENT0+_t;rt.length=gt.length,St=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,St=!0);St&&i.drawBuffers(rt)}function Ft(G){return x!==G?(i.useProgram(G),x=G,!0):!1}const kt={[is]:i.FUNC_ADD,[jd]:i.FUNC_SUBTRACT,[Qd]:i.FUNC_REVERSE_SUBTRACT};kt[tf]=i.MIN,kt[ef]=i.MAX;const ht={[nf]:i.ZERO,[sf]:i.ONE,[rf]:i.SRC_COLOR,[Sc]:i.SRC_ALPHA,[uf]:i.SRC_ALPHA_SATURATE,[cf]:i.DST_COLOR,[af]:i.DST_ALPHA,[of]:i.ONE_MINUS_SRC_COLOR,[yc]:i.ONE_MINUS_SRC_ALPHA,[hf]:i.ONE_MINUS_DST_COLOR,[lf]:i.ONE_MINUS_DST_ALPHA,[df]:i.CONSTANT_COLOR,[ff]:i.ONE_MINUS_CONSTANT_COLOR,[pf]:i.CONSTANT_ALPHA,[mf]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(G,ct,rt,St,gt,_t,zt,jt,ft,Gt){if(G===ns){m===!0&&(st(i.BLEND),m=!1);return}if(m===!1&&(et(i.BLEND),m=!0),G!==$d){if(G!==g||Gt!==T){if((_!==is||b!==is)&&(i.blendEquation(i.FUNC_ADD),_=is,b=is),Gt)switch(G){case Xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yo:i.blendFunc(i.ONE,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",G);break}else switch(G){case Xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Mc:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vc:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",G);break}M=null,v=null,E=null,S=null,y.set(0,0,0),w=0,g=G,T=Gt}return}gt=gt||ct,_t=_t||rt,zt=zt||St,(ct!==_||gt!==b)&&(i.blendEquationSeparate(kt[ct],kt[gt]),_=ct,b=gt),(rt!==M||St!==v||_t!==E||zt!==S)&&(i.blendFuncSeparate(ht[rt],ht[St],ht[_t],ht[zt]),M=rt,v=St,E=_t,S=zt),(jt.equals(y)===!1||ft!==w)&&(i.blendColor(jt.r,jt.g,jt.b,ft),y.copy(jt),w=ft),g=G,T=!1}function pt(G,ct){G.side===Ce?st(i.CULL_FACE):et(i.CULL_FACE);let rt=G.side===tn;ct&&(rt=!rt),Yt(rt),G.blending===Xs&&G.transparent===!1?dt(ns):dt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const St=G.stencilWrite;a.setTest(St),St&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Xt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):st(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(G){R!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),R=G)}function Ct(G){G!==Kd?(et(i.CULL_FACE),G!==P&&(G===_c?i.cullFace(i.BACK):G===qd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):st(i.CULL_FACE),P=G}function Ht(G){G!==U&&(B&&i.lineWidth(G),U=G)}function Xt(G,ct,rt){G?(et(i.POLYGON_OFFSET_FILL),(L!==ct||z!==rt)&&(L=ct,z=rt,o.getReversed()&&(ct=-ct,rt=-rt),i.polygonOffset(ct,rt))):st(i.POLYGON_OFFSET_FILL)}function Kt(G){G?et(i.SCISSOR_TEST):st(i.SCISSOR_TEST)}function pe(G){G===void 0&&(G=i.TEXTURE0+I-1),H!==G&&(i.activeTexture(G),H=G)}function ge(G,ct,rt){rt===void 0&&(H===null?rt=i.TEXTURE0+I-1:rt=H);let St=K[rt];St===void 0&&(St={type:void 0,texture:void 0},K[rt]=St),(St.type!==G||St.texture!==ct)&&(H!==rt&&(i.activeTexture(rt),H=rt),i.bindTexture(G,ct||nt[G]),St.type=G,St.texture=ct)}function W(){const G=K[H];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ve(){try{i.compressedTexImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function ee(){try{i.compressedTexImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function he(){try{i.texSubImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function Mt(){try{i.texSubImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function _e(){try{i.compressedTexSubImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function Bt(){try{i.compressedTexSubImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function Ot(){try{i.texStorage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function D(){try{i.texStorage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function A(){try{i.texImage2D(...arguments)}catch(G){ce("WebGLState:",G)}}function j(){try{i.texImage3D(...arguments)}catch(G){ce("WebGLState:",G)}}function ut(G){return h[G]!==void 0?h[G]:i.getParameter(G)}function lt(G,ct){h[G]!==ct&&(i.pixelStorei(G,ct),h[G]=ct)}function mt(G){F.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),F.copy(G))}function bt(G){J.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),J.copy(G))}function ot(G,ct){let rt=c.get(ct);rt===void 0&&(rt=new WeakMap,c.set(ct,rt));let St=rt.get(G);St===void 0&&(St=i.getUniformBlockIndex(ct,G.name),i.uniformBlockBinding(ct,St,St),rt.set(G,St))}function at(G,ct,rt){const gt=c.get(ct).get(G);l[gt]!==rt&&(i.bindBufferBase(i.UNIFORM_BUFFER,gt,rt),l[gt]=rt)}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},H=null,K={},d={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,M=null,v=null,b=null,E=null,S=null,y=new Lt(0,0,0),w=0,T=!1,R=null,P=null,U=null,L=null,z=null,F.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:st,bindFramebuffer:wt,drawBuffers:xt,useProgram:Ft,setBlending:dt,setMaterial:pt,setFlipSided:Yt,setCullFace:Ct,setLineWidth:Ht,setPolygonOffset:Xt,setScissorTest:Kt,activeTexture:pe,bindTexture:ge,unbindTexture:W,compressedTexImage2D:ve,compressedTexImage3D:ee,texImage2D:A,texImage3D:j,pixelStorei:lt,getParameter:ut,updateUBOMapping:ot,uniformBlockBinding:at,texStorage2D:Ot,texStorage3D:D,texSubImage2D:he,texSubImage3D:Mt,compressedTexSubImage2D:_e,compressedTexSubImage3D:Bt,scissor:mt,viewport:bt,reset:vt}}function r1(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,u=new WeakMap,h=new Set;let d;const f=new WeakMap,p=new Set,x=new FinalizationRegistry(D=>p.delete(D));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,A){return m?new OffscreenCanvas(D,A):$s("canvas")}function _(D,A,j){let ut=1;const lt=Ot(D);if((lt.width>j||lt.height>j)&&(ut=j/Math.max(lt.width,lt.height)),ut<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const mt=Math.floor(ut*lt.width),bt=Math.floor(ut*lt.height);d===void 0&&(d=g(mt,bt));const ot=A?g(mt,bt):d;return ot.width=mt,ot.height=bt,ot.getContext("2d").drawImage(D,0,0,mt,bt),Vt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+mt+"x"+bt+")."),ot}else return"data"in D&&Vt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),D;return D}function M(D){return D.generateMipmaps}function v(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(D,A,j,ut,lt,mt=!1){if(D!==null){if(i[D]!==void 0)return i[D];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let bt;ut&&(bt=t.get("EXT_texture_norm16"),bt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=A;if(A===i.RED&&(j===i.FLOAT&&(ot=i.R32F),j===i.HALF_FLOAT&&(ot=i.R16F),j===i.UNSIGNED_BYTE&&(ot=i.R8),j===i.UNSIGNED_SHORT&&bt&&(ot=bt.R16_EXT),j===i.SHORT&&bt&&(ot=bt.R16_SNORM_EXT)),A===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ot=i.R8UI),j===i.UNSIGNED_SHORT&&(ot=i.R16UI),j===i.UNSIGNED_INT&&(ot=i.R32UI),j===i.BYTE&&(ot=i.R8I),j===i.SHORT&&(ot=i.R16I),j===i.INT&&(ot=i.R32I)),A===i.RG&&(j===i.FLOAT&&(ot=i.RG32F),j===i.HALF_FLOAT&&(ot=i.RG16F),j===i.UNSIGNED_BYTE&&(ot=i.RG8),j===i.UNSIGNED_SHORT&&bt&&(ot=bt.RG16_EXT),j===i.SHORT&&bt&&(ot=bt.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ot=i.RG8UI),j===i.UNSIGNED_SHORT&&(ot=i.RG16UI),j===i.UNSIGNED_INT&&(ot=i.RG32UI),j===i.BYTE&&(ot=i.RG8I),j===i.SHORT&&(ot=i.RG16I),j===i.INT&&(ot=i.RG32I)),A===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),j===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),j===i.UNSIGNED_INT&&(ot=i.RGB32UI),j===i.BYTE&&(ot=i.RGB8I),j===i.SHORT&&(ot=i.RGB16I),j===i.INT&&(ot=i.RGB32I)),A===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),j===i.UNSIGNED_INT&&(ot=i.RGBA32UI),j===i.BYTE&&(ot=i.RGBA8I),j===i.SHORT&&(ot=i.RGBA16I),j===i.INT&&(ot=i.RGBA32I)),A===i.RGB&&(j===i.UNSIGNED_SHORT&&bt&&(ot=bt.RGB16_EXT),j===i.SHORT&&bt&&(ot=bt.RGB16_SNORM_EXT),j===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(ot=i.R11F_G11F_B10F)),A===i.RGBA){const at=mt?Br:ae.getTransfer(lt);j===i.FLOAT&&(ot=i.RGBA32F),j===i.HALF_FLOAT&&(ot=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ot=at===fe?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT&&bt&&(ot=bt.RGBA16_EXT),j===i.SHORT&&bt&&(ot=bt.RGBA16_SNORM_EXT),j===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function S(D,A){let j;return D?A===null||A===zn||A===rs?j=i.DEPTH24_STENCIL8:A===bn?j=i.DEPTH32F_STENCIL8:A===qs&&(j=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===zn||A===rs?j=i.DEPTH_COMPONENT24:A===bn?j=i.DEPTH_COMPONENT32F:A===qs&&(j=i.DEPTH_COMPONENT16),j}function y(D,A){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ne&&D.minFilter!==Ke?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function w(D){const A=new WeakRef(D);n.get(D).__ref=A,p.add(A),x.register(D,A,A)}function T(D){const A=n.get(D).__ref;A!==void 0&&(p.delete(A),x.unregister(A))}function R(D){U(D.target)}function P(D){L(D.target)}function U(D){D.removeEventListener("dispose",R),T(D),I(D),D.isVideoTexture&&u.delete(D),D.isHTMLTexture&&h.delete(D)}function L(D){D.removeEventListener("dispose",P),T(D),$(D)}function z(){for(const D of p){const A=D.deref();A!==void 0&&(A.isRenderTarget===!0?L(A):U(A))}p.clear(),h.clear()}function I(D){const A=n.get(D);if(A.__webglInit===void 0)return;const j=D.source,ut=f.get(j);if(ut){const lt=ut[A.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&B(D),Object.keys(ut).length===0&&f.delete(j)}n.remove(D)}function B(D){const A=n.get(D);i.deleteTexture(A.__webglTexture);const j=D.source,ut=f.get(j);delete ut[A.__cacheKey],o.memory.textures--}function $(D){const A=n.get(D);A.__depthDisposeCallback&&A.__depthDisposeCallback();const j=D.depthTexture;if(j&&j.renderTarget===D&&U(j),D.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(A.__webglFramebuffer[lt]))for(let mt=0;mt<A.__webglFramebuffer[lt].length;mt++)i.deleteFramebuffer(A.__webglFramebuffer[lt][mt]);else i.deleteFramebuffer(A.__webglFramebuffer[lt]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[lt])}else{if(Array.isArray(A.__webglFramebuffer))for(let lt=0;lt<A.__webglFramebuffer.length;lt++)i.deleteFramebuffer(A.__webglFramebuffer[lt]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let lt=0;lt<A.__webglColorRenderbuffer.length;lt++)A.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[lt]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ut=D.textures;for(let lt=0,mt=ut.length;lt<mt;lt++){const bt=n.get(ut[lt]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(ut[lt])}n.remove(D)}let N=0;function H(){N=0}function K(){return N}function Y(D){N=D}function Z(){const D=N;return D>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,D}function F(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.mipmapsAutoUpdate),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function J(D,A){const j=n.get(D);if(D.isVideoTexture&&_e(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&j.__version!==D.version){const ut=D.image;if(ut===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(j,D,A);return}}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+A)}function q(D,A){const j=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){pt(j,D,A);return}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+A)}function nt(D,A){const j=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){pt(j,D,A);return}e.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+A)}function et(D,A){const j=n.get(D);if(D.version>0&&j.__version!==D.version){Yt(j,D,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+A)}const st={[Ks]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[ia]:i.MIRRORED_REPEAT},wt={[Ne]:i.NEAREST,[_f]:i.NEAREST_MIPMAP_NEAREST,[Lr]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[yn]:i.LINEAR_MIPMAP_LINEAR},xt={[yf]:i.NEVER,[zc]:i.ALWAYS,[bf]:i.LESS,[Fc]:i.LEQUAL,[Ef]:i.EQUAL,[Oc]:i.GEQUAL,[wf]:i.GREATER,[Tf]:i.NOTEQUAL};function Ft(D,A){if(A.type===bn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ke||A.magFilter===sa||A.magFilter===Lr||A.magFilter===yn||A.minFilter===Ke||A.minFilter===sa||A.minFilter===Lr||A.minFilter===yn)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,st[A.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,st[A.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,st[A.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,wt[A.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,wt[A.minFilter]),A.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,xt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ne||A.minFilter!==Lr&&A.minFilter!==yn||A.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function kt(D,A){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",R),w(A));const ut=A.source;let lt=f.get(ut);lt===void 0&&(lt={},f.set(ut,lt));const mt=F(A);if(mt!==D.__cacheKey){lt[mt]===void 0&&(lt[mt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,j=!0),lt[mt].usedTimes++;const bt=lt[D.__cacheKey];bt!==void 0&&(lt[D.__cacheKey].usedTimes--,bt.usedTimes===0&&B(A)),D.__cacheKey=mt,D.__webglTexture=lt[mt].texture}return j}function ht(D,A,j){return Math.floor(Math.floor(D/j)/A)}function dt(D,A,j,ut){const mt=D.updateRanges;if(mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,j,ut,A.data);else{mt.sort((G,ct)=>G.start-ct.start);let bt=0;for(let G=1;G<mt.length;G++){const ct=mt[bt],rt=mt[G],St=ct.start+ct.count,gt=ht(rt.start,A.width,4),_t=ht(ct.start,A.width,4);rt.start<=St+1&&gt===_t&&ht(rt.start+rt.count-1,A.width,4)===gt?ct.count=Math.max(ct.count,rt.start+rt.count-ct.start):(++bt,mt[bt]=rt)}mt.length=bt+1;const ot=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),vt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let G=0,ct=mt.length;G<ct;G++){const rt=mt[G],St=Math.floor(rt.start/4),gt=Math.ceil(rt.count/4),_t=St%A.width,zt=Math.floor(St/A.width),jt=gt,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(i.UNPACK_SKIP_ROWS,zt),e.texSubImage2D(i.TEXTURE_2D,0,_t,zt,jt,ft,j,ut,A.data)}D.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ot),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function pt(D,A,j){let ut=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ut=i.TEXTURE_3D);const lt=kt(D,A),mt=A.source;e.bindTexture(ut,D.__webglTexture,i.TEXTURE0+j);const bt=n.get(mt);if(mt.version!==bt.__version||lt===!0){if(e.activeTexture(i.TEXTURE0+j),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const ft=ae.getPrimaries(ae.workingColorSpace),Gt=A.colorSpace===yi?null:ae.getPrimaries(A.colorSpace),$t=A.colorSpace===yi||ft===Gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let at=_(A.image,!1,s.maxTextureSize);at=Bt(A,at);const vt=r.convert(A.format,A.colorSpace),G=r.convert(A.type);let ct=E(A.internalFormat,vt,G,A.normalized,A.colorSpace,A.isVideoTexture);Ft(ut,A);let rt;const St=A.mipmaps,gt=A.isVideoTexture!==!0,_t=bt.__version===void 0||lt===!0,zt=mt.dataReady,jt=y(A,at);if(A.isDepthTexture)ct=S(A.format===vi,A.type),_t&&(gt?e.texStorage2D(i.TEXTURE_2D,1,ct,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,ct,at.width,at.height,0,vt,G,null));else if(A.isDataTexture)if(St.length>0){gt&&_t&&e.texStorage2D(i.TEXTURE_2D,jt,ct,St[0].width,St[0].height);for(let ft=0,Gt=St.length;ft<Gt;ft++)rt=St[ft],gt?zt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,rt.width,rt.height,vt,G,rt.data):e.texImage2D(i.TEXTURE_2D,ft,ct,rt.width,rt.height,0,vt,G,rt.data);A.generateMipmaps=!1}else gt?(_t&&e.texStorage2D(i.TEXTURE_2D,jt,ct,at.width,at.height),zt&&dt(A,at,vt,G)):e.texImage2D(i.TEXTURE_2D,0,ct,at.width,at.height,0,vt,G,at.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){gt&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,jt,ct,St[0].width,St[0].height,at.depth);for(let ft=0,Gt=St.length;ft<Gt;ft++)if(rt=St[ft],A.format!==Bn)if(vt!==null)if(gt){if(zt)if(A.layerUpdates.size>0){const $t=Yh(rt.width,rt.height,A.format,A.type);for(const At of A.layerUpdates){const me=rt.data.subarray(At*$t/rt.data.BYTES_PER_ELEMENT,(At+1)*$t/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,At,rt.width,rt.height,1,vt,me)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,rt.width,rt.height,at.depth,vt,rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,ct,rt.width,rt.height,at.depth,0,rt.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?zt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,rt.width,rt.height,at.depth,vt,G,rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,ct,rt.width,rt.height,at.depth,0,vt,G,rt.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{gt&&_t&&e.texStorage2D(i.TEXTURE_2D,jt,ct,St[0].width,St[0].height);for(let ft=0,Gt=St.length;ft<Gt;ft++)rt=St[ft],A.format!==Bn?vt!==null?gt?zt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,rt.width,rt.height,vt,rt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,ct,rt.width,rt.height,0,rt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?zt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,rt.width,rt.height,vt,G,rt.data):e.texImage2D(i.TEXTURE_2D,ft,ct,rt.width,rt.height,0,vt,G,rt.data)}else if(A.isDataArrayTexture)if(gt){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,jt,ct,at.width,at.height,at.depth),zt)if(A.layerUpdates.size>0){const ft=Yh(at.width,at.height,A.format,A.type);for(const Gt of A.layerUpdates){const $t=at.data.subarray(Gt*ft/at.data.BYTES_PER_ELEMENT,(Gt+1)*ft/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Gt,at.width,at.height,1,vt,G,$t)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,vt,G,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,at.width,at.height,at.depth,0,vt,G,at.data);else if(A.isData3DTexture)gt?(_t&&e.texStorage3D(i.TEXTURE_3D,jt,ct,at.width,at.height,at.depth),zt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,vt,G,at.data)):e.texImage3D(i.TEXTURE_3D,0,ct,at.width,at.height,at.depth,0,vt,G,at.data);else if(A.isFramebufferTexture){if(_t)if(gt)e.texStorage2D(i.TEXTURE_2D,jt,ct,at.width,at.height);else{let ft=at.width,Gt=at.height;for(let $t=0;$t<jt;$t++)e.texImage2D(i.TEXTURE_2D,$t,ct,ft,Gt,0,vt,G,null),ft>>=1,Gt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),at.parentNode!==ft){ft.appendChild(at),h.add(A),ft.onpaint=Gt=>{const $t=Gt.changedElements;for(const At of h)$t.includes(At.image)&&(At.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{const $t=i.RGBA,At=i.RGBA,me=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,$t,At,me,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(St.length>0){if(gt&&_t){const ft=Ot(St[0]);e.texStorage2D(i.TEXTURE_2D,jt,ct,ft.width,ft.height)}for(let ft=0,Gt=St.length;ft<Gt;ft++)rt=St[ft],gt?zt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,vt,G,rt):e.texImage2D(i.TEXTURE_2D,ft,ct,vt,G,rt);A.generateMipmaps=!1}else if(gt){if(_t){const ft=Ot(at);e.texStorage2D(i.TEXTURE_2D,jt,ct,ft.width,ft.height)}zt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,G,at)}else e.texImage2D(i.TEXTURE_2D,0,ct,vt,G,at);M(A)&&A.mipmapsAutoUpdate===!0&&v(ut),bt.__version=mt.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Yt(D,A,j){if(A.image.length!==6)return;const ut=kt(D,A),lt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+j);const mt=n.get(lt);if(lt.version!==mt.__version||ut===!0){e.activeTexture(i.TEXTURE0+j);const bt=ae.getPrimaries(ae.workingColorSpace),ot=A.colorSpace===yi?null:ae.getPrimaries(A.colorSpace),at=A.colorSpace===yi||bt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const vt=A.isCompressedTexture||A.image[0].isCompressedTexture,G=A.image[0]&&A.image[0].isDataTexture,ct=[];for(let At=0;At<6;At++)!vt&&!G?ct[At]=_(A.image[At],!0,s.maxCubemapSize):ct[At]=G?A.image[At].image:A.image[At],ct[At]=Bt(A,ct[At]);const rt=ct[0],St=r.convert(A.format,A.colorSpace),gt=r.convert(A.type);let _t=E(A.internalFormat,St,gt,A.normalized,A.colorSpace);const zt=A.isVideoTexture!==!0,jt=mt.__version===void 0||ut===!0,ft=lt.dataReady;let Gt=y(A,rt);Ft(i.TEXTURE_CUBE_MAP,A);let $t;if(A.isDepthTexture){if(_t=S(A.format===vi,A.type),jt)if(zt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,_t,rt.width,rt.height);else for(let At=0;At<6;At++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,_t,rt.width,rt.height,0,St,gt,null)}else if(vt){zt&&jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,_t,rt.width,rt.height);for(let At=0;At<6;At++){$t=ct[At].mipmaps;for(let me=0;me<$t.length;me++){const ke=$t[me];A.format!==Bn?St!==null?zt?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,me,0,0,ke.width,ke.height,St,ke.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,me,_t,ke.width,ke.height,0,ke.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,me,0,0,ke.width,ke.height,St,gt,ke.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,me,_t,ke.width,ke.height,0,St,gt,ke.data)}}}else{if($t=A.mipmaps,zt&&jt){$t.length>0&&Gt++;const At=Ot(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,_t,At.width,At.height)}for(let At=0;At<6;At++)if(G){zt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,ct[At].width,ct[At].height,St,gt,ct[At].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,_t,ct[At].width,ct[At].height,0,St,gt,ct[At].data);for(let me=0;me<$t.length;me++){const Oi=$t[me].image[At].image;zt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,me+1,0,0,Oi.width,Oi.height,St,gt,Oi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,me+1,_t,Oi.width,Oi.height,0,St,gt,Oi.data)}}else{zt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,St,gt,ct[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,_t,St,gt,ct[At]);for(let me=0;me<$t.length;me++){const ke=$t[me];zt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,me+1,0,0,St,gt,ke.image[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,me+1,_t,St,gt,ke.image[At])}}}M(A)&&A.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),mt.__version=lt.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Ct(D,A,j,ut,lt,mt){const bt=r.convert(j.format,j.colorSpace),ot=r.convert(j.type),at=E(j.internalFormat,bt,ot,j.normalized,j.colorSpace),vt=n.get(A),G=n.get(j);if(G.__renderTarget=A,!vt.__hasExternalTextures){const ct=Math.max(1,A.width>>mt),rt=Math.max(1,A.height>>mt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,mt,at,ct,rt,A.depth,0,bt,ot,null):e.texImage2D(lt,mt,at,ct,rt,0,bt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Mt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,lt,G.__webglTexture,0,he(A)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,lt,G.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(D,A,j){if(i.bindRenderbuffer(i.RENDERBUFFER,D),A.depthBuffer){const ut=A.depthTexture,lt=ut&&ut.isDepthTexture?ut.type:null,mt=S(A.stencilBuffer,lt),bt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Mt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(A),mt,A.width,A.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(A),mt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,D)}else{const ut=A.textures;for(let lt=0;lt<ut.length;lt++){const mt=ut[lt],bt=r.convert(mt.format,mt.colorSpace),ot=r.convert(mt.type),at=E(mt.internalFormat,bt,ot,mt.normalized,mt.colorSpace);Mt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(A),at,A.width,A.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(A),at,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,at,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Xt(D,A,j){const ut=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const lt=n.get(A.depthTexture);lt.__renderTarget=A;const mt=ut?A.depthTexture.image[0]:A.depthTexture.image;(!lt.__webglTexture||mt.width!==A.width||mt.height!==A.height)&&(mt.width=A.width,mt.height=A.height,A.depthTexture.needsUpdate=!0),ut?et(A.depthTexture,0):J(A.depthTexture,0);const bt=lt.__webglTexture,ot=he(A),at=ut?i.TEXTURE_CUBE_MAP_POSITIVE_X+j:i.TEXTURE_2D,vt=A.depthTexture.format===vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===Mi)Mt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,at,bt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,vt,at,bt,0);else if(A.depthTexture.format===vi)Mt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,at,bt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,vt,at,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(D){const A=n.get(D),j=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const ut=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ut){const lt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ut.removeEventListener("dispose",lt)};ut.addEventListener("dispose",lt),A.__depthDisposeCallback=lt}A.__boundDepthTexture=ut}if(D.depthTexture&&!A.__autoAllocateDepthBuffer)if(j)for(let ut=0;ut<6;ut++)Xt(A.__webglFramebuffer[ut],D,ut);else D.texture.mipmaps.length>0?Xt(A.__webglFramebuffer[0],D,0):Xt(A.__webglFramebuffer,D,0);else if(j){A.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ut]),A.__webglDepthbuffer[ut]===void 0)A.__webglDepthbuffer[ut]=i.createRenderbuffer(),Ht(A.__webglDepthbuffer[ut],D,!1);else{const lt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=A.__webglDepthbuffer[ut];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,mt)}}else if(D.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Ht(A.__webglDepthbuffer,D,!1);else{const lt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(D,A,j){const ut=n.get(D);A!==void 0&&Ct(ut.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Kt(D)}function ge(D){const A=D.texture,j=n.get(D),ut=n.get(A);D.addEventListener("dispose",P),w(D);const lt=D.textures,mt=D.isWebGLCubeRenderTarget===!0,bt=lt.length>1;if(bt||(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=A.version,o.memory.textures++),mt){j.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(A.mipmaps.length>0){j.__webglFramebuffer[ot]=[];for(let at=0;at<A.mipmaps.length;at++)j.__webglFramebuffer[ot][at]=i.createFramebuffer()}else j.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(A.mipmaps.length>0){j.__webglFramebuffer=[];for(let ot=0;ot<A.mipmaps.length;ot++)j.__webglFramebuffer[ot]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ot=0,at=lt.length;ot<at;ot++){const vt=n.get(lt[ot]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&Mt(D)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ot=0;ot<lt.length;ot++){const at=lt[ot];j.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[ot]);const vt=r.convert(at.format,at.colorSpace),G=r.convert(at.type),ct=E(at.internalFormat,vt,G,at.normalized,at.colorSpace,D.isXRRenderTarget===!0),rt=he(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,ct,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,j.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht(j.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,A);for(let ot=0;ot<6;ot++)if(A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)Ct(j.__webglFramebuffer[ot][at],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,at);else Ct(j.__webglFramebuffer[ot],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);M(A)?v(i.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}else if(bt){for(let ot=0,at=lt.length;ot<at;ot++){const vt=lt[ot],G=n.get(vt);let ct=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ct=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,G.__webglTexture),Ft(ct,vt),Ct(j.__webglFramebuffer,D,vt,i.COLOR_ATTACHMENT0+ot,ct,0),M(vt)&&v(ct)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ot=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,ut.__webglTexture),Ft(ot,A),A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)Ct(j.__webglFramebuffer[at],D,A,i.COLOR_ATTACHMENT0,ot,at);else Ct(j.__webglFramebuffer,D,A,i.COLOR_ATTACHMENT0,ot,0);M(A)?v(ot):A.mipmaps.length>0&&i.texParameteri(ot,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}D.depthBuffer&&Kt(D)}function W(D){const A=D.textures;for(let j=0,ut=A.length;j<ut;j++){const lt=A[j];if(M(lt)&&lt.mipmapsAutoUpdate===!0){const mt=b(D),bt=n.get(lt).__webglTexture;e.bindTexture(mt,bt),v(mt),e.unbindTexture()}}}const ve=[];function ee(D){if(D.samples>0){if(Mt(D)===!1){const A=D.textures,j=D.width,ut=D.height;let lt=i.COLOR_BUFFER_BIT;const mt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(D),ot=A.length>1;if(ot)for(let vt=0;vt<A.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let vt=0;vt<A.length;vt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[vt]);const G=n.get(A[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,G,0)}i.blitFramebuffer(0,0,j,ut,0,0,j,ut,lt,i.NEAREST),l===!0&&(ve.length=0,ve.push(i.COLOR_ATTACHMENT0+vt),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&ve.push(mt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let vt=0;vt<A.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[vt]);const G=n.get(A[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,G,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){const A=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function he(D){return Math.min(s.maxSamples,D.samples)}function Mt(D){const A=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function _e(D){const A=o.render.frame;u.get(D)!==A&&(u.set(D,A),D.update())}function Bt(D,A){const j=D.colorSpace,ut=D.format,lt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==zr&&j!==yi&&(ae.getTransfer(j)===fe?(ut!==Bn||lt!==on)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",j)),A}function Ot(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=H,this.getTextureUnits=K,this.setTextureUnits=Y,this.setTexture2D=J,this.setTexture2DArray=q,this.setTexture3D=nt,this.setTextureCube=et,this.rebindTextures=pe,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Mt,this.dispose=z}function o1(i,t){function e(n,s=yi){let r;const o=ae.getTransfer(s);if(n===on)return i.UNSIGNED_BYTE;if(n===oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===aa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ic)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lc)return i.BYTE;if(n===Pc)return i.SHORT;if(n===qs)return i.UNSIGNED_SHORT;if(n===ra)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===Nc)return i.ALPHA;if(n===Uc)return i.RGB;if(n===Bn)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===vi)return i.DEPTH_STENCIL;if(n===Pr)return i.RED;if(n===la)return i.RED_INTEGER;if(n===Si)return i.RG;if(n===ca)return i.RG_INTEGER;if(n===ha)return i.RGBA_INTEGER;if(n===Dr||n===Ir||n===Nr||n===Ur)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ua||n===da||n===fa||n===pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ga||n===xa||n===_a||n===Ma||n===Fr||n===va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ma||n===ga)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===_a)return r.COMPRESSED_R11_EAC;if(n===Ma)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fr)return r.COMPRESSED_RG11_EAC;if(n===va)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Sa||n===ya||n===ba||n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===La||n===Pa||n===Da||n===Ia||n===Na)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ya)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ta)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Aa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===La)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ia)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ua||n===Fa||n===Oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ua)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===za||n===Ba||n===Or||n===Ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const a1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l1=`
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

}`;class c1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Th(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new sn({vertexShader:a1,fragmentShader:l1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h1 extends bi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",m=new c1,g={},_=e.getContextAttributes();let M=null,v=null;const b=[],E=[],S=new Nt;let y=null,w=null;const T=new Dn;T.viewport=new Se;const R=new Dn;R.viewport=new Se;const P=[T,R],U=new t0;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let J=b[F];return J===void 0&&(J=new Ja,b[F]=J),J.getTargetRaySpace()},this.getControllerGrip=function(F){let J=b[F];return J===void 0&&(J=new Ja,b[F]=J),J.getGripSpace()},this.getHand=function(F){let J=b[F];return J===void 0&&(J=new Ja,b[F]=J),J.getHandSpace()};function I(F){const J=E.indexOf(F.inputSource);if(J===-1)return;const q=b[J];q!==void 0&&(q.update(F.inputSource,F.frame,c||o),q.dispatchEvent({type:F.type,data:F.inputSource}))}function B(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",$);for(let F=0;F<b.length;F++){const J=E[F];J!==null&&(E[F]=null,b[F].disconnect(J))}L=null,z=null,m.reset();for(const F in g)delete g[F];if(t.setRenderTarget(M),f=null,d=null,h=null,s=null,v=null,Z.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(S.width,S.height,!1),w!==null){const F=w.camera;F.fov=w.fov,F.zoom=w.zoom,F.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",B),s.addEventListener("inputsourceschange",$),_.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(S),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,nt=null,et=null;_.depth&&(et=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=_.stencil?vi:Mi,nt=_.stencil?rs:zn);const st={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(st),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Gn(d.textureWidth,d.textureHeight,{format:Bn,type:on,depthTexture:new vs(d.textureWidth,d.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const q={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Gn(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:on,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Z.setContext(s),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(F){for(let J=0;J<F.removed.length;J++){const q=F.removed[J],nt=E.indexOf(q);nt>=0&&(E[nt]=null,b[nt].disconnect(q))}for(let J=0;J<F.added.length;J++){const q=F.added[J];let nt=E.indexOf(q);if(nt===-1){for(let st=0;st<b.length;st++)if(st>=E.length){E.push(q),nt=st;break}else if(E[st]===null){E[st]=q,nt=st;break}if(nt===-1)break}const et=b[nt];et&&et.connect(q)}}function N(F,J){J===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(J.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let J=F.near,q=F.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(q=m.depthFar)),U.near=R.near=T.near=J,U.far=R.far=T.far=q,(L!==U.near||z!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),L=U.near,z=U.far),U.layers.mask=F.layers.mask|6,T.layers.mask=U.layers.mask&-5,R.layers.mask=U.layers.mask&-3;const nt=F.parent,et=U.cameras;N(U,nt);for(let st=0;st<et.length;st++)N(et[st],nt);U.projectionMatrix.copy(T.projectionMatrix),U.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&F.isPerspectiveCamera&&(w={camera:F,fov:F.fov,zoom:F.zoom}),H(F,U,nt)};function H(F,J,q){q===null?F.matrix.copy(J.matrixWorld):(F.matrix.copy(q.matrixWorld),F.matrix.invert(),F.matrix.multiply(J.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(J.projectionMatrix),F.projectionMatrixInverse.copy(J.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Qs*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(F){return g[F]};let K=null;function Y(F,J){if(u=J.getViewerPose(c||o),p=J,u!==null){const q=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let nt=!1;q.length!==U.cameras.length&&(U.cameras.length=0,nt=!0);for(let xt=0;xt<q.length;xt++){const Ft=q[xt];let kt=null;if(f!==null)kt=f.getViewport(Ft);else{const dt=h.getViewSubImage(d,Ft);kt=dt.viewport,xt===0&&(t.setRenderTargetTextures(v,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(v))}let ht=P[xt];ht===void 0&&(ht=new Dn,ht.layers.enable(xt),ht.viewport=new Se,P[xt]=ht),ht.matrix.fromArray(Ft.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ft.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(kt.x,kt.y,kt.width,kt.height),xt===0&&(U.matrix.copy(ht.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),nt===!0&&U.cameras.push(ht)}const et=s.enabledFeatures;if(et&&et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const xt=h.getDepthInformation(q[0]);xt&&xt.isValid&&xt.texture&&m.init(xt,s.renderState)}if(et&&et.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let xt=0;xt<q.length;xt++){const Ft=q[xt].camera;if(Ft){let kt=g[Ft];kt||(kt=new Th,g[Ft]=kt);const ht=h.getCameraImage(Ft);kt.sourceTexture=ht}}}}for(let q=0;q<b.length;q++){const nt=E[q],et=b[q];nt!==null&&et!==void 0&&et.update(nt,J,c||o)}K&&K(F,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),p=null}const Z=new Zh;Z.setAnimationLoop(Y),this.setAnimationLoop=function(F){K=F},this.dispose=function(){}}}const u1=new ie,Eu=new Zt;Eu.set(-1,0,0,0,1,0,0,0,1);function d1(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Uh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===tn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===tn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const _=t.get(g),M=_.envMap,v=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(u1.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Eu),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=M*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===tn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const _=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function f1(i,t,e,n){let s={},r={};function o(_,M){const v=M.program;n.uniformBlockBinding(_,v,s[_.id])}function a(_,M){let v=s[_.id];v===void 0&&(p(_),v=l(_),s[_.id]=v,_.addEventListener("dispose",m));const b=M.program;n.updateUBOMapping(_,b);const E=t.render.frame;r[_.id]!==E&&(c(_),r[_.id]=E)}function l(_){const M=i.createBuffer(),v=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,v,b),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(_){const M=s[_.id],v=_.uniforms,b=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,S=v.length;E<S;E++){const y=v[E];if(Array.isArray(y))for(let w=0,T=y.length;w<T;w++)u(y[w],E,w,b);else u(y,E,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(_,M,v,b){if(d(_,M,v,b)===!0){const E=_.__offset,S=_.value;if(Array.isArray(S)){let y=0;for(let w=0;w<S.length;w++){const T=S[w],R=x(T,!0);h(T,_.__data,y),y+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else h(S,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,_.__data)}}function h(_,M,v){typeof _=="number"||typeof _=="boolean"?M[v]=_:_.isMatrix3?(M[v]=_.elements[0],M[v+1]=_.elements[1],M[v+2]=_.elements[2],M[v+3]=0,M[v+4]=_.elements[3],M[v+5]=_.elements[4],M[v+6]=_.elements[5],M[v+7]=0,M[v+8]=_.elements[6],M[v+9]=_.elements[7],M[v+10]=_.elements[8],M[v+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-v),v):_.toArray(M,v)}function d(_,M,v,b){const E=_.value,S=M+"_"+v;if(Array.isArray(E)){b[S]===void 0&&(b[S]=[]);const y=b[S];let w=!1;for(let T=0;T<E.length;T++)f(E[T],y,T)===!0&&(w=!0);return w}return f(E,b,S)}function f(_,M,v){if(M[v]===void 0)return typeof _=="number"||typeof _=="boolean"?M[v]=_:ArrayBuffer.isView(_)?M[v]=_.slice():M[v]=_.clone(),!0;{const b=M[v];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return M[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function p(_){const M=_.uniforms;let v=0;const b=16;for(let S=0,y=M.length;S<y;S++){const w=Array.isArray(M[S])?M[S]:[M[S]];for(let T=0,R=w.length;T<R;T++){const P=w[T],U=Array.isArray(P.value)?P.value:[P.value],L=Array.isArray(M[S])||Array.isArray(P.value);let z=v;for(let B=0,$=U.length;B<$;B++){const N=U[B],H=x(N,L),K=v%b,Y=K%H.boundary,Z=K+Y;v+=Y,Z!==0&&b-Z<H.storage&&(v+=b-Z),B===0&&(z=v),v+=H.storage}const I=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new I((v-z)/Float32Array.BYTES_PER_ELEMENT),P.__offset=z}}const E=v%b;return E>0&&(v+=b-E),_.__size=v,_.__cache={},this}function x(_,M){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(_){const M=_.target;M.removeEventListener("dispose",m),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(const _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:g}}const p1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xn=null;function m1(){return Xn===null&&(Xn=new rr(p1,16,16,Si,En),Xn.name="DFG_LUT",Xn.minFilter=Ke,Xn.magFilter=Ke,Xn.wrapS=On,Xn.wrapT=On,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}class g1{constructor(t={}){const{canvas:e=Cf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=on}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=f,m=new Set([ha,ca,la]),g=new Set([on,zn,qs,rs,oa,aa]),_=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]};let b=null,E=null;const S=[],y=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let R=!1,P=null,U=null,L=null,z=null;this._outputColorSpace=Ue;let I=0,B=0,$=null,N=-1,H=null;const K=new Se,Y=new Se;let Z=null;const F=new Lt(0);let J=0,q=e.width,nt=e.height,et=1,st=null,wt=null;const xt=new Se(0,0,q,nt),Ft=new Se(0,0,q,nt);let kt=!1;const ht=new lr,dt=new ul;let pt=!1,Yt=!1;const Ct=new ie,Ht=new V,Xt=new Se,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function ge(){return $===null?et:1}let W=n;function ve(C,k){return e.getContext(C,k)}let ee,he,Mt,_e,Bt,Ot,D,A,j,ut,lt,mt,bt,ot,at,vt,G,ct,rt,St,gt,_t,zt;try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gi}`),e.addEventListener("webglcontextlost",Gt,!1),e.addEventListener("webglcontextrestored",$t,!1),e.addEventListener("webglcontextcreationerror",At,!1),W===null){const k="webgl2";if(W=ve(k,C),W===null)throw ve(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}jt()}catch(C){throw e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",At,!1),ce("WebGLRenderer: "+C.message),C}function jt(){ee=new Mg(W),ee.init(),gt=new o1(W,ee),he=new lg(W,ee,t,gt),Mt=new s1(W,ee),he.reversedDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),U=W.createFramebuffer(),L=W.createFramebuffer(),z=W.createFramebuffer(),_e=new yg(W),Bt=new Wx,Ot=new r1(W,ee,Mt,Bt,he,gt,_e),D=new _g(T),A=new s0(W),_t=new og(W,A),j=new vg(W,A,_e,_t),ut=new Eg(W,j,A,_t,_e),ct=new bg(W,he,Ot),at=new cg(Bt),lt=new Vx(T,D,ee,he,_t,at),mt=new d1(T,Bt),bt=new Yx,ot=new jx(ee),G=new rg(T,D,Mt,ut,p,l),vt=new i1(T,ut,he),zt=new f1(W,_e,he,Mt),rt=new ag(W,ee,_e),St=new Sg(W,ee,_e),_e.programs=lt.programs,T.capabilities=he,T.extensions=ee,T.properties=Bt,T.renderLists=bt,T.shadowMap=vt,T.state=Mt,T.info=_e}x!==on&&(w=new Tg(x,e.width,e.height,a,s,r));const ft=new h1(T,W);this.xr=ft,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const C=ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(C){C!==void 0&&(et=C,this.setSize(q,nt,!1))},this.getSize=function(C){return C.set(q,nt)},this.setSize=function(C,k,it=!0){if(ft.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}q=C,nt=k,e.width=Math.floor(C*et),e.height=Math.floor(k*et),it===!0&&(e.style.width=C+"px",e.style.height=k+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(q*et,nt*et).floor()},this.setDrawingBufferSize=function(C,k,it){q=C,nt=k,et=it,e.width=Math.floor(C*it),e.height=Math.floor(k*it),this.setViewport(0,0,C,k)},this.setEffects=function(C){if(x===on){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let k=0;k<C.length;k++)if(C[k].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(K)},this.getViewport=function(C){return C.copy(xt)},this.setViewport=function(C,k,it,Q){C.isVector4?xt.set(C.x,C.y,C.z,C.w):xt.set(C,k,it,Q),Mt.viewport(K.copy(xt).multiplyScalar(ge()).round())},this.getScissor=function(C){return C.copy(Ft)},this.setScissor=function(C,k,it,Q){C.isVector4?Ft.set(C.x,C.y,C.z,C.w):Ft.set(C,k,it,Q),Mt.scissor(Y.copy(Ft).multiplyScalar(ge()).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(C){Mt.setScissorTest(kt=C)},this.setOpaqueSort=function(C){st=C},this.setTransparentSort=function(C){wt=C},this.getClearColor=function(C){return C.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,it=!0){let Q=0;if(C){let tt=!1;if($!==null){const Et=$.texture.format;tt=m.has(Et)}if(tt){const Et=$.texture.type,Pt=g.has(Et),yt=G.getClearColor(),Rt=G.getClearAlpha(),Ut=yt.r,qt=yt.g,re=yt.b;Pt?(_[0]=Ut,_[1]=qt,_[2]=re,_[3]=Rt,W.clearBufferuiv(W.COLOR,0,_)):(M[0]=Ut,M[1]=qt,M[2]=re,M[3]=Rt,W.clearBufferiv(W.COLOR,0,M))}else Q|=W.COLOR_BUFFER_BIT}k&&(Q|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(Q|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&W.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),P=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",At,!1),G.dispose(),bt.dispose(),ot.dispose(),Ot.dispose(),Bt.dispose(),D.dispose(),ut.dispose(),j.dispose(),_t.dispose(),zt.dispose(),lt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",zd),ft.removeEventListener("sessionend",Bd),Qi.stop()};function Gt(C){C.preventDefault(),kc("WebGLRenderer: Context Lost."),R=!0}function $t(){kc("WebGLRenderer: Context Restored."),R=!1;const C=_e.autoReset,k=vt.enabled,it=vt.autoUpdate,Q=vt.needsUpdate,tt=vt.type;jt(),_e.autoReset=C,vt.enabled=k,vt.autoUpdate=it,vt.needsUpdate=Q,vt.type=tt}function At(C){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function me(C){const k=C.target;k.removeEventListener("dispose",me),ke(k)}function ke(C){Oi(C),Bt.remove(C)}function Oi(C){const k=Bt.get(C).programs;k!==void 0&&(k.forEach(function(it){lt.releaseProgram(it)}),C.isShaderMaterial&&lt.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,it,Q,tt,Et){k===null&&(k=Kt);const Pt=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,yt=wv(C,k,it,Q,tt);Mt.setMaterial(Q,Pt);let Rt=it.index,Ut=1;if(Q.wireframe===!0){if(Rt=j.getWireframeAttribute(it),Rt===void 0)return;Ut=2}const qt=it.drawRange,re=it.attributes.position;let Dt=qt.start*Ut,oe=(qt.start+qt.count)*Ut;Et!==null&&(Dt=Math.max(Dt,Et.start*Ut),oe=Math.min(oe,(Et.start+Et.count)*Ut)),Rt!==null?(Dt=Math.max(Dt,0),oe=Math.min(oe,Rt.count)):re!=null&&(Dt=Math.max(Dt,0),oe=Math.min(oe,re.count));const Ie=oe-Dt;if(Ie<0||Ie===1/0)return;_t.setup(tt,Q,yt,it,Rt);let Me,xe=rt;if(Rt!==null&&(Me=A.get(Rt),xe=St,xe.setIndex(Me)),tt.isMesh)Q.wireframe===!0?(Mt.setLineWidth(Q.wireframeLinewidth*ge()),xe.setMode(W.LINES)):xe.setMode(W.TRIANGLES);else if(tt.isLine){let je=Q.linewidth;je===void 0&&(je=1),Mt.setLineWidth(je*ge()),tt.isLineSegments?xe.setMode(W.LINES):tt.isLineLoop?xe.setMode(W.LINE_LOOP):xe.setMode(W.LINE_STRIP)}else tt.isPoints?xe.setMode(W.POINTS):tt.isSprite&&xe.setMode(W.TRIANGLES);if(tt.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))xe.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const je=tt._multiDrawStarts,It=tt._multiDrawCounts,nn=tt._multiDrawCount,de=Rt?A.get(Rt).bytesPerElement:1,ts=Bt.get(Q).currentProgram.getUniforms();for(let Qe=0;Qe<nn;Qe++)ts.setValue(W,"_gl_DrawID",Qe),xe.render(je[Qe]/de,It[Qe])}else if(tt.isInstancedMesh)xe.renderInstances(Dt,Ie,tt.count);else if(it.isInstancedBufferGeometry){const je=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,It=Math.min(it.instanceCount,je);xe.renderInstances(Dt,Ie,It)}else xe.render(Dt,Ie)};function Od(C,k,it,Q){P!==null&&C.isNodeMaterial&&P.setObject(Q,C),pt===!0&&at.setState(C,it,!1),C.transparent===!0&&C.side===Ce&&C.forceSinglePass===!1?(C.side=tn,C.needsUpdate=!0,Rr(C,k,Q),C.side=_i,C.needsUpdate=!0,Rr(C,k,Q),C.side=Ce):Rr(C,k,Q)}this.compile=function(C,k,it=null){it===null&&(it=C),P!==null&&P.renderStart(C,k,it),E=ot.get(it),E.init(k),y.push(E),it.traverseVisible(function(tt){tt.isLight&&tt.layers.test(k.layers)&&(E.pushLight(tt),tt.castShadow&&E.pushShadow(tt))}),C!==it&&C.traverseVisible(function(tt){tt.isLight&&tt.layers.test(k.layers)&&(E.pushLight(tt),tt.castShadow&&E.pushShadow(tt))}),E.setupLights(),P!==null&&P.updateLights(E.state.lightsArray),Yt=this.localClippingEnabled,pt=at.init(this.clippingPlanes,Yt),pt===!0&&at.setGlobalState(this.clippingPlanes,k),P!==null&&vt.render(E.state.shadowsArray,it,k);const Q=new Set;return C.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Et=tt.material;if(Et)if(Array.isArray(Et))for(let Pt=0;Pt<Et.length;Pt++){const yt=Et[Pt];Od(yt,it,k,tt),Q.add(yt)}else Od(Et,it,k,tt),Q.add(Et)}),E=y.pop(),P!==null&&P.renderEnd(),Q},this.compileAsync=function(C,k,it=null){const Q=this.compile(C,k,it);return new Promise(tt=>{function Et(){if(Q.forEach(function(Pt){const Rt=Bt.get(Pt).currentProgram;(Rt===void 0||Rt.isReady())&&Q.delete(Pt)}),Q.size===0){tt(C);return}setTimeout(Et,10)}ee.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let gc=null;function bv(C){gc&&gc(C)}function zd(){Qi.stop()}function Bd(){Qi.start()}const Qi=new Zh;Qi.setAnimationLoop(bv),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(C){gc=C,ft.setAnimationLoop(C),C===null?Qi.stop():Qi.start()},ft.addEventListener("sessionstart",zd),ft.addEventListener("sessionend",Bd),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P!==null&&P.renderStart(C,k);const it=ft.enabled===!0&&ft.isPresenting===!0,Q=w!==null&&($===null||it)&&w.begin(T,$);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(k),k=ft.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,k,$),E=ot.get(C,y.length),E.init(k),E.state.textureUnits=Ot.getTextureUnits(),y.push(E),Ct.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?dt.setFromArrayCamera(k):ht.setFromProjectionMatrix(Ct,wn,k.reversedDepth),Yt=this.localClippingEnabled,pt=at.init(this.clippingPlanes,Yt),b=bt.get(C,S.length),b.init(),S.push(b),this.info.render.frame++,ft.enabled===!0&&ft.isPresenting===!0){const Pt=T.xr.getDepthSensingMesh();Pt!==null&&xc(Pt,k,-1/0,T.sortObjects)}xc(C,k,0,T.sortObjects),b.finish(),P!==null&&P.updateLights(E.state.lightsArray),T.sortObjects===!0&&b.sort(st,wt),pe=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,pe&&G.addToRenderList(b,C),this.info.autoReset===!0&&this.info.reset(),pt===!0&&at.beginShadows();const tt=E.state.shadowsArray;if(vt.render(tt,C,k),pt===!0&&at.endShadows(),(Q&&w.hasRenderPass())===!1){const Pt=b.opaque,yt=b.transmissive;if(E.setupLights(),k.isArrayCamera){const Rt=k.cameras;if(yt.length>0)for(let Ut=0,qt=Rt.length;Ut<qt;Ut++){const re=Rt[Ut];kd(Pt,yt,C,re)}pe&&G.render(C);for(let Ut=0,qt=Rt.length;Ut<qt;Ut++){const re=Rt[Ut];Gd(b,C,re,re.viewport)}}else yt.length>0&&kd(Pt,yt,C,k),pe&&G.render(C),Gd(b,C,k)}$!==null&&B===0&&(Ot.updateMultisampleRenderTarget($),Ot.updateRenderTargetMipmap($)),Q&&w.end(T),C.isScene===!0&&C.onAfterRender(T,C,k),_t.resetDefaultState(),N=-1,H=null,y.pop(),y.length>0?(E=y[y.length-1],Ot.setTextureUnits(E.state.textureUnits),pt===!0&&at.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,S.pop(),S.length>0?b=S[S.length-1]:b=null,P!==null&&P.renderEnd()};function xc(C,k,it,Q){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)it=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){const Pt=k.isArrayCamera?dt:ht;if(!C.frustumCulled||C.intersectsFrustum(Pt)){Q&&Xt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ct);const yt=ut.update(C),Rt=C.material;Rt.visible&&b.push(C,yt,Rt,it,Xt.z,null,k)}}else if(C.isMesh||C.isLine||C.isPoints){const Pt=k.isArrayCamera?dt:ht;if(!C.frustumCulled||C.intersectsFrustum(Pt)){const yt=ut.update(C),Rt=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Xt.copy(C.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Xt.copy(yt.boundingSphere.center)),Xt.applyMatrix4(C.matrixWorld).applyMatrix4(Ct)),Array.isArray(Rt)){const Ut=yt.groups;for(let qt=0,re=Ut.length;qt<re;qt++){const Dt=Ut[qt],oe=Rt[Dt.materialIndex];oe&&oe.visible&&b.push(C,yt,oe,it,Xt.z,Dt,k)}}else Rt.visible&&b.push(C,yt,Rt,it,Xt.z,null,k)}}}const Et=C.children;for(let Pt=0,yt=Et.length;Pt<yt;Pt++)xc(Et[Pt],k,it,Q)}function Gd(C,k,it,Q){const{opaque:tt,transmissive:Et,transparent:Pt}=C;E.setupLightsView(it),pt===!0&&at.setGlobalState(T.clippingPlanes,it),Q&&Mt.viewport(K.copy(Q)),tt.length>0&&Wo(tt,k,it),Et.length>0&&Wo(Et,k,it),Pt.length>0&&Wo(Pt,k,it),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function kd(C,k,it,Q){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Q.id]===void 0){const Dt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Q.id]=new Gn(1,1,{generateMipmaps:!0,type:Dt?En:on,minFilter:yn,samples:Math.max(4,he.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}const Et=E.state.transmissionRenderTarget[Q.id],Pt=Q.viewport||K;Et.setSize(Pt.z*T.transmissionResolutionScale,Pt.w*T.transmissionResolutionScale);const yt=T.getRenderTarget(),Rt=T.getActiveCubeFace(),Ut=T.getActiveMipmapLevel();T.setRenderTarget(Et),T.getClearColor(F),J=T.getClearAlpha(),J<1&&T.setClearColor(16777215,.5),T.clear(),pe&&G.render(it);const qt=T.toneMapping;T.toneMapping=Qn;const re=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),E.setupLightsView(Q),pt===!0&&at.setGlobalState(T.clippingPlanes,Q),Wo(C,it,Q),Ot.updateMultisampleRenderTarget(Et),Ot.updateRenderTargetMipmap(Et),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let oe=0,Ie=k.length;oe<Ie;oe++){const Me=k[oe],{object:xe,geometry:je,material:It,group:nn}=Me;if(It.side===Ce&&xe.layers.test(Q.layers)){const de=It.side;It.side=tn,It.needsUpdate=!0,Hd(xe,it,Q,je,It,nn),It.side=de,It.needsUpdate=!0,Dt=!0}}Dt===!0&&(Ot.updateMultisampleRenderTarget(Et),Ot.updateRenderTargetMipmap(Et))}T.setRenderTarget(yt,Rt,Ut),T.setClearColor(F,J),re!==void 0&&(Q.viewport=re),T.toneMapping=qt}function Wo(C,k,it){const Q=k.isScene===!0?k.overrideMaterial:null;for(let tt=0,Et=C.length;tt<Et;tt++){const Pt=C[tt],{object:yt,geometry:Rt,group:Ut}=Pt;let qt=Pt.material;qt.allowOverride===!0&&Q!==null&&(qt=Q),yt.layers.test(it.layers)&&Hd(yt,k,it,Rt,qt,Ut)}}function Hd(C,k,it,Q,tt,Et){P!==null&&tt.isNodeMaterial&&P.setObject(C,tt),C.onBeforeRender(T,k,it,Q,tt,Et),C.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),tt.onBeforeRender(T,k,it,Q,C,Et),tt.transparent===!0&&tt.side===Ce&&tt.forceSinglePass===!1?(tt.side=tn,tt.needsUpdate=!0,T.renderBufferDirect(it,k,Q,tt,C,Et),tt.side=_i,tt.needsUpdate=!0,T.renderBufferDirect(it,k,Q,tt,C,Et),tt.side=Ce):T.renderBufferDirect(it,k,Q,tt,C,Et),C.onAfterRender(T,k,it,Q,tt,Et)}function Vd(C){let k=0;for(const it of C)it.texture!==null&&k++;return k}function Rr(C,k,it){k.isScene!==!0&&(k=Kt);const Q=Bt.get(C),tt=E.state.lights,Et=E.state.shadowsArray,Pt=tt.state.version,yt=lt.getParameters(C,tt.state,Et,k,it,E.state.lightProbeGridArray),Rt=lt.getProgramCacheKey(yt);let Ut=Q.programs;Q.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?k.environment:null,Q.fog=k.fog;const qt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Q.envMap=D.get(C.envMap||Q.environment,qt),Q.envMapRotation=Q.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Ut===void 0&&(C.addEventListener("dispose",me),Ut=new Map,Q.programs=Ut,Q.programVariants=new Map);let re=Ut.get(Rt);if(re!==void 0){if(Q.currentProgram===re&&Q.lightsStateVersion===Pt)return Xd(C,yt),re}else yt.uniforms=lt.getUniforms(C),P!==null&&C.isNodeMaterial&&P.build(C,it,yt),C.onBeforeCompile(yt,T),re=lt.acquireProgram(yt,Rt),Ut.set(Rt,re),Q.uniforms=yt.uniforms;const Dt=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Dt.clippingPlanes=at.uniform),Xd(C,yt),Q.needsLights=Av(C),Q.lightsStateVersion=Pt,Q.needsLights&&(Dt.ambientLightColor.value=tt.state.ambient,Dt.lightProbe.value=tt.state.probe,Dt.sunLights.value=tt.state.sun,Dt.sunLightShadows.value=tt.state.sunShadow,Dt.directionalLights.value=tt.state.directional,Dt.directionalLightShadows.value=tt.state.directionalShadow,Dt.spotLights.value=tt.state.spot,Dt.spotLightShadows.value=tt.state.spotShadow,Dt.rectAreaLights.value=tt.state.rectArea,Dt.ltc_1.value=tt.state.rectAreaLTC1,Dt.ltc_2.value=tt.state.rectAreaLTC2,Dt.pointLights.value=tt.state.point,Dt.pointLightShadows.value=tt.state.pointShadow,Dt.hemisphereLights.value=tt.state.hemi,Dt.sunShadowMatrix.value=tt.state.sunShadowMatrix,Dt.sunShadowCascade.value=tt.state.sunShadowCascade,Dt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Dt.spotLightMatrix.value=tt.state.spotLightMatrix,Dt.spotLightMap.value=tt.state.spotLightMap,Dt.pointShadowMatrix.value=tt.state.pointShadowMatrix),Q.numLightProbeGrids=Vd(E.state.lightProbeGridArray),Q.currentProgram=re,Q.uniformsList=null,re}function Ev(C,k,it,Q,tt){const Et=Bt.get(C),Pt=Et.currentProgram.id+","+Q+","+tt;let yt=Et.programVariants.get(Pt);return yt===void 0?(yt=Rr(C,k,it),Et.programVariants.set(Pt,yt)):(Et.currentProgram=yt,Et.uniformsList=null,Et.outputColorSpace=Q,Et.toneMapping=tt),yt}function Wd(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=bo.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Xd(C,k){const it=Bt.get(C);it.outputColorSpace=k.outputColorSpace,it.batching=k.batching,it.batchingColor=k.batchingColor,it.instancing=k.instancing,it.instancingColor=k.instancingColor,it.instancingMorph=k.instancingMorph,it.skinning=k.skinning,it.morphTargets=k.morphTargets,it.morphNormals=k.morphNormals,it.morphColors=k.morphColors,it.morphTargetsCount=k.morphTargetsCount,it.numClippingPlanes=k.numClippingPlanes,it.numIntersection=k.numClipIntersection,it.vertexAlphas=k.vertexAlphas,it.vertexTangents=k.vertexTangents,it.toneMapping=k.toneMapping}function wv(C,k,it,Q,tt){k.isScene!==!0&&(k=Kt),Ot.resetTextureUnits();const Et=k.fog,Pt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?k.environment:null,yt=$===null?T.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ae.workingColorSpace,Rt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Ut=D.get(Q.envMap||Pt,Rt),qt=Q.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,re=!!it.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Dt=!!it.morphAttributes.position,oe=!!it.morphAttributes.normal,Ie=!!it.morphAttributes.color;let Me=Qn;Q.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Me=T.toneMapping);const xe=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,je=xe!==void 0?xe.length:0,It=Bt.get(Q),nn=E.state.lights;if(pt===!0&&(Yt===!0||C!==H)){const we=C===H&&Q.id===N;at.setState(Q,C,we)}let de=!1,ts=!1;Q.version===It.__version?It.needsLights&&It.lightsStateVersion!==nn.state.version||tt.isBatchedMesh&&It.batching===!1||!tt.isBatchedMesh&&It.batching===!0||tt.isBatchedMesh&&It.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&It.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&It.instancing===!1||!tt.isInstancedMesh&&It.instancing===!0||tt.isSkinnedMesh&&It.skinning===!1||!tt.isSkinnedMesh&&It.skinning===!0||tt.isInstancedMesh&&It.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&It.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&It.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&It.instancingMorph===!1&&tt.morphTexture!==null||It.envMap!==Ut||Q.fog===!0&&It.fog!==Et||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==at.numPlanes||It.numIntersection!==at.numIntersection)||It.vertexAlphas!==qt||It.vertexTangents!==re||It.morphTargets!==Dt||It.morphNormals!==oe||It.morphColors!==Ie||It.morphTargetsCount!==je||It.numLightProbeGrids!==Vd(E.state.lightProbeGridArray)?de=!0:(It.outputColorSpace!==yt||It.toneMapping!==Me)&&(ts=!0):(de=!0,It.__version=Q.version);let Qe=It.currentProgram;(de===!0||ts===!0)&&(Qe=ts===!0?Ev(Q,k,tt,yt,Me):Rr(Q,k,tt),P&&Q.isNodeMaterial&&P.onUpdateProgram(Q,Qe,It));let Xo=!1,zi=!1,es=!1;const le=Qe.getUniforms(),Ze=It.uniforms;if(Mt.useProgram(Qe.program)&&(Xo=!0,zi=!0,es=!0),Q.id!==N&&(N=Q.id,zi=!0),Xo||H!==C){Mt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),le.setValue(W,"projectionMatrix",C.projectionMatrix),le.setValue(W,"viewMatrix",C.matrixWorldInverse);const He=le.map.cameraPosition;He!==void 0&&He.setValue(W,Ht.setFromMatrixPosition(C.matrixWorld)),he.logarithmicDepthBuffer&&le.setValue(W,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&le.setValue(W,"isOrthographic",C.isOrthographicCamera===!0),H!==C&&(H=C,zi=!0,es=!0)}if(It.needsLights&&(nn.state.sunShadowMap.length>0&&le.setValue(W,"sunShadowMap",nn.state.sunShadowMap,Ot),nn.state.directionalShadowMap.length>0&&le.setValue(W,"directionalShadowMap",nn.state.directionalShadowMap,Ot),nn.state.spotShadowMap.length>0&&le.setValue(W,"spotShadowMap",nn.state.spotShadowMap,Ot),nn.state.pointShadowMap.length>0&&le.setValue(W,"pointShadowMap",nn.state.pointShadowMap,Ot)),tt.isSkinnedMesh){le.setOptional(W,tt,"bindMatrix"),le.setOptional(W,tt,"bindMatrixInverse");const we=tt.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),le.setValue(W,"boneTexture",we.boneTexture,Ot))}tt.isBatchedMesh&&(le.setOptional(W,tt,"batchingTexture"),le.setValue(W,"batchingTexture",tt._matricesTexture,Ot),le.setOptional(W,tt,"batchingIdTexture"),le.setValue(W,"batchingIdTexture",tt._indirectTexture,Ot),le.setOptional(W,tt,"batchingColorTexture"),tt._colorsTexture!==null&&le.setValue(W,"batchingColorTexture",tt._colorsTexture,Ot));const Fn=it.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&ct.update(tt,it,Qe),(zi||It.receiveShadow!==tt.receiveShadow)&&(It.receiveShadow=tt.receiveShadow,le.setValue(W,"receiveShadow",tt.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&k.environment!==null&&(Ze.envMapIntensity.value=k.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=m1()),zi){if(le.setValue(W,"toneMappingExposure",T.toneMappingExposure),It.needsLights&&Tv(Ze,es),Et&&Q.fog===!0&&mt.refreshFogUniforms(Ze,Et),mt.refreshMaterialUniforms(Ze,Q,et,nt,E.state.transmissionRenderTarget[C.id]),It.needsLights&&It.numLightProbeGrids>0){const we=v;let He=0;for(const mi of E.state.lightProbeGridArray)mi.texture!==null&&(we.textures[He]=mi.texture,we.min[He]=mi.boundingBox.min,we.max[He]=mi.boundingBox.max,we.resolution[He]=mi.resolution,He++);for(const mi in we)we[mi].length=He;Ze.probesSH.value=we.textures,Ze.probesMin.value=we.min,Ze.probesMax.value=we.max,Ze.probesResolution.value=we.resolution}bo.upload(W,Wd(It),Ze,Ot)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(bo.upload(W,Wd(It),Ze,Ot),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&le.setValue(W,"center",tt.center),le.setValue(W,"modelViewMatrix",tt.modelViewMatrix),le.setValue(W,"normalMatrix",tt.normalMatrix),le.setValue(W,"modelMatrix",tt.matrixWorld),Q.uniformsGroups!==void 0){const we=Q.uniformsGroups;for(let He=0,mi=we.length;He<mi;He++){const Zd=we[He];zt.update(Zd,Qe),zt.bind(Zd,Qe)}}return Qe}function Tv(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.sunLights.needsUpdate=k,C.sunLightShadows.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Av(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,k,it){const Q=Bt.get(C);Q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Bt.get(C.texture).__webglTexture=k,Bt.get(C.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:it,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){const it=Bt.get(C);it.__webglFramebuffer=k,it.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,it=0){$=C,I=k,B=it;let Q=null,tt=!1,Et=!1;if(C){const yt=Bt.get(C);if(yt.__useDefaultFramebuffer!==void 0){Mt.bindFramebuffer(W.FRAMEBUFFER,yt.__webglFramebuffer),K.copy(C.viewport),Y.copy(C.scissor),Z=C.scissorTest,Mt.viewport(K),Mt.scissor(Y),Mt.setScissorTest(Z),N=-1;return}else if(yt.__webglFramebuffer===void 0)Ot.setupRenderTarget(C);else if(yt.__hasExternalTextures)Ot.rebindTextures(C,Bt.get(C.texture).__webglTexture,Bt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const qt=C.depthTexture;if(yt.__boundDepthTexture!==qt){if(qt!==null&&Bt.has(qt)&&(C.width!==qt.image.width||C.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(C)}}const Rt=C.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(Et=!0);const Ut=Bt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ut[k])?Q=Ut[k][it]:Q=Ut[k],tt=!0):C.samples>0&&Ot.useMultisampledRTT(C)===!1?Q=Bt.get(C).__webglMultisampledFramebuffer:Array.isArray(Ut)?Q=Ut[it]:Q=Ut,K.copy(C.viewport),Y.copy(C.scissor),Z=C.scissorTest}else K.copy(xt).multiplyScalar(et).floor(),Y.copy(Ft).multiplyScalar(et).floor(),Z=kt;if(it!==0&&(Q=U),Mt.bindFramebuffer(W.FRAMEBUFFER,Q)&&Mt.drawBuffers(C,Q),Mt.viewport(K),Mt.scissor(Y),Mt.setScissorTest(Z),tt){const yt=Bt.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+k,yt.__webglTexture,it)}else if(Et){const yt=k;for(let Rt=0;Rt<C.textures.length;Rt++){const Ut=Bt.get(C.textures[Rt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Rt,Ut.__webglTexture,it,yt)}}else if(C!==null&&it!==0){const yt=Bt.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,yt.__webglTexture,it)}N=-1};function Yd(C){const k=Bt.get(C);return(k.__readFormat!==C.format||k.__readType!==C.type)&&(k.__readFormat=C.format,k.__readType=C.type,k.__formatReadable=he.textureFormatReadable(C.format),k.__typeReadable=he.textureTypeReadable(C.type)),k}this.readRenderTargetPixels=function(C,k,it,Q,tt,Et,Pt,yt=0){if(!(C&&C.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Bt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pt!==void 0&&(Rt=Rt[Pt],Array.isArray(Rt)&&(Rt=Rt[0])),Rt){Mt.bindFramebuffer(W.FRAMEBUFFER,Rt);try{const Ut=C.textures[yt],qt=Ut.format,re=Ut.type;C.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+yt);const Dt=Yd(Ut);if(Dt.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-Q&&it>=0&&it<=C.height-tt&&W.readPixels(k,it,Q,tt,gt.convert(qt),gt.convert(re),Et)}finally{const Ut=$!==null?Bt.get($).__webglFramebuffer:null;Mt.bindFramebuffer(W.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(C,k,it,Q,tt,Et,Pt,yt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Bt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pt!==void 0&&(Rt=Rt[Pt],Array.isArray(Rt)&&(Rt=Rt[0])),Rt)if(k>=0&&k<=C.width-Q&&it>=0&&it<=C.height-tt){Mt.bindFramebuffer(W.FRAMEBUFFER,Rt);const Ut=C.textures[yt],qt=Ut.format,re=Ut.type;C.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+yt);const Dt=Yd(Ut);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const oe=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,oe),W.bufferData(W.PIXEL_PACK_BUFFER,Et.byteLength,W.STREAM_READ),W.readPixels(k,it,Q,tt,gt.convert(qt),gt.convert(re),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const Ie=$!==null?Bt.get($).__webglFramebuffer:null;Mt.bindFramebuffer(W.FRAMEBUFFER,Ie);const Me=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Lf(W,Me,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,oe),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Et),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(oe),W.deleteSync(Me),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,it=0){const Q=Math.pow(2,-it),tt=Math.floor(C.image.width*Q),Et=Math.floor(C.image.height*Q),Pt=k!==null?k.x:0,yt=k!==null?k.y:0;Ot.setTexture2D(C,0),W.copyTexSubImage2D(W.TEXTURE_2D,it,0,0,Pt,yt,tt,Et),Mt.unbindTexture()},this.copyTextureToTexture=function(C,k,it=null,Q=null,tt=0,Et=0){let Pt,yt,Rt,Ut,qt,re,Dt,oe,Ie;const Me=C.isCompressedTexture?C.mipmaps[Et]:C.image;if(it!==null)Pt=it.max.x-it.min.x,yt=it.max.y-it.min.y,Rt=it.isBox3?it.max.z-it.min.z:1,Ut=it.min.x,qt=it.min.y,re=it.isBox3?it.min.z:0;else{const le=Math.pow(2,-tt);Pt=Math.floor(Me.width*le),yt=Math.floor(Me.height*le),C.isDataArrayTexture?Rt=Me.depth:C.isData3DTexture?Rt=Math.floor(Me.depth*le):Rt=1,Ut=0,qt=0,re=0}Q!==null?(Dt=Q.x,oe=Q.y,Ie=Q.z):(Dt=0,oe=0,Ie=0);const xe=gt.convert(k.format),je=gt.convert(k.type);let It;k.isData3DTexture?(Ot.setTexture3D(k,0),It=W.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Ot.setTexture2DArray(k,0),It=W.TEXTURE_2D_ARRAY):(Ot.setTexture2D(k,0),It=W.TEXTURE_2D),Mt.activeTexture(W.TEXTURE0),Mt.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,k.flipY),Mt.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),Mt.pixelStorei(W.UNPACK_ALIGNMENT,k.unpackAlignment);const nn=Mt.getParameter(W.UNPACK_ROW_LENGTH),de=Mt.getParameter(W.UNPACK_IMAGE_HEIGHT),ts=Mt.getParameter(W.UNPACK_SKIP_PIXELS),Qe=Mt.getParameter(W.UNPACK_SKIP_ROWS),Xo=Mt.getParameter(W.UNPACK_SKIP_IMAGES);Mt.pixelStorei(W.UNPACK_ROW_LENGTH,Me.width),Mt.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Me.height),Mt.pixelStorei(W.UNPACK_SKIP_PIXELS,Ut),Mt.pixelStorei(W.UNPACK_SKIP_ROWS,qt),Mt.pixelStorei(W.UNPACK_SKIP_IMAGES,re);const zi=C.isDataArrayTexture||C.isData3DTexture,es=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const le=Bt.get(C),Ze=Bt.get(k),Fn=Bt.get(le.__renderTarget),we=Bt.get(Ze.__renderTarget);Mt.bindFramebuffer(W.READ_FRAMEBUFFER,Fn.__webglFramebuffer),Mt.bindFramebuffer(W.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let He=0;He<Rt;He++)zi&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Bt.get(C).__webglTexture,tt,re+He),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Bt.get(k).__webglTexture,Et,Ie+He)),W.blitFramebuffer(Ut,qt,Ut+Pt,qt+yt,Dt,oe,Dt+Pt,oe+yt,W.DEPTH_BUFFER_BIT,W.NEAREST);Mt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(tt!==0||C.isRenderTargetTexture||Bt.has(C)){const le=Bt.get(C),Ze=Bt.get(k);Mt.bindFramebuffer(W.READ_FRAMEBUFFER,L),Mt.bindFramebuffer(W.DRAW_FRAMEBUFFER,z);for(let Fn=0;Fn<Rt;Fn++)zi?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,le.__webglTexture,tt,re+Fn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,le.__webglTexture,tt),es?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ze.__webglTexture,Et,Ie+Fn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ze.__webglTexture,Et),tt!==0?W.blitFramebuffer(Ut,qt,Ut+Pt,qt+yt,Dt,oe,Dt+Pt,oe+yt,W.COLOR_BUFFER_BIT,W.NEAREST):es?W.copyTexSubImage3D(It,Et,Dt,oe,Ie+Fn,Ut,qt,Pt,yt):W.copyTexSubImage2D(It,Et,Dt,oe,Ut,qt,Pt,yt);Mt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else es?C.isDataTexture||C.isData3DTexture?W.texSubImage3D(It,Et,Dt,oe,Ie,Pt,yt,Rt,xe,je,Me.data):k.isCompressedArrayTexture?W.compressedTexSubImage3D(It,Et,Dt,oe,Ie,Pt,yt,Rt,xe,Me.data):W.texSubImage3D(It,Et,Dt,oe,Ie,Pt,yt,Rt,xe,je,Me):C.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Et,Dt,oe,Pt,yt,xe,je,Me.data):C.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Et,Dt,oe,Me.width,Me.height,xe,Me.data):W.texSubImage2D(W.TEXTURE_2D,Et,Dt,oe,Pt,yt,xe,je,Me);Mt.pixelStorei(W.UNPACK_ROW_LENGTH,nn),Mt.pixelStorei(W.UNPACK_IMAGE_HEIGHT,de),Mt.pixelStorei(W.UNPACK_SKIP_PIXELS,ts),Mt.pixelStorei(W.UNPACK_SKIP_ROWS,Qe),Mt.pixelStorei(W.UNPACK_SKIP_IMAGES,Xo),Et===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&W.generateMipmap(It),Mt.unbindTexture()},this.initRenderTarget=function(C){Bt.get(C).__webglFramebuffer===void 0&&Ot.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ot.setTextureCube(C,0):C.isData3DTexture?Ot.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ot.setTexture2DArray(C,0):Ot.setTexture2D(C,0),Mt.unbindTexture()},this.resetState=function(){I=0,B=0,$=null,Mt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}const wu={type:"change"},Ll={type:"start"},Tu={type:"end"},wo=new $r,Au=new kn,x1=Math.cos(70*ne.DEG2RAD),ze=new V,rn=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pl=1e-6;class _1 extends n0{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jn.ROTATE,MIDDLE:jn.DOLLY,RIGHT:jn.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new Tn,this._lastTargetPosition=new V,this._quat=new Tn().setFromUnitVectors(t.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _o,this._sphericalDelta=new _o,this._scale=1,this._panOffset=new V,this._rotateStart=new Nt,this._rotateEnd=new Nt,this._rotateDelta=new Nt,this._panStart=new Nt,this._panEnd=new Nt,this._panDelta=new Nt,this._dollyStart=new Nt,this._dollyEnd=new Nt,this._dollyDelta=new Nt,this._dollyDirection=new V,this._mouse=new Nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=v1.bind(this),this._onPointerDown=M1.bind(this),this._onPointerUp=S1.bind(this),this._onContextMenu=R1.bind(this),this._onMouseWheel=E1.bind(this),this._onKeyDown=w1.bind(this),this._onTouchStart=T1.bind(this),this._onTouchMove=A1.bind(this),this._onMouseDown=y1.bind(this),this._onMouseMove=b1.bind(this),this._interceptControlDown=C1.bind(this),this._interceptControlUp=L1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ue.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wu),this.update(),this.state=ue.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;ze.copy(e).sub(this.target),ze.applyQuaternion(this._quat),this._spherical.setFromVector3(ze),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=rn:n>Math.PI&&(n-=rn),s<-Math.PI?s+=rn:s>Math.PI&&(s-=rn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ze.setFromSpherical(this._spherical),ze.applyQuaternion(this._quatInverse),e.copy(this.target).add(ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ze.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new V(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(wo.origin.copy(this.object.position),wo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wo.direction))<x1?this.object.lookAt(this.target):(Au.setFromNormalAndCoplanarPoint(this.object.up,this.target),wo.intersectPlane(Au,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Pl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pl||this._lastTargetPosition.distanceToSquared(this.target)>Pl?(this.dispatchEvent(wu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?rn/60*this.autoRotateSpeed*t:rn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ze.setFromMatrixColumn(e,0),ze.multiplyScalar(-t),this._panOffset.add(ze)}_panUp(t,e){this.screenSpacePanning===!0?ze.setFromMatrixColumn(e,1):(ze.setFromMatrixColumn(e,0),ze.crossVectors(this.object.up,ze)),ze.multiplyScalar(t),this._panOffset.add(ze)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ze.copy(s).sub(this.target);let r=ze.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Nt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function M1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function v1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function S1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tu),this.state=ue.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function y1(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case jn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ue.DOLLY;break;case jn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}break;case jn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Ll)}function b1(i){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function E1(i){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(i.preventDefault(),this.dispatchEvent(Ll),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Tu))}function w1(i){this.enabled!==!1&&this._handleKeyDown(i)}function T1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case xi.ROTATE:if(this.enableRotate===!1){this.state=ue.NONE;break}this._handleTouchStartRotate(i),this.state=ue.TOUCH_ROTATE;break;case xi.PAN:if(this.enablePan===!1){this.state=ue.NONE;break}this._handleTouchStartPan(i),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ue.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Ll)}function A1(i){switch(this._trackPointer(i),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ue.NONE}}function R1(i){this.enabled!==!1&&i.preventDefault()}function C1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function L1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Dl=new kn,To=new e0,As=new Nt,Il=new V;class P1 extends _1{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:jn.PAN,MIDDLE:jn.DOLLY,RIGHT:jn.ROTATE},this.touches={ONE:xi.PAN,TWO:xi.DOLLY_ROTATE},this._panWorldStart=new V}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;Dl.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();As.x=(t.clientX-n.left)/n.width*2-1,As.y=-((t.clientY-n.top)/n.height)*2+1,To.setFromCamera(As,this.object),To.ray.intersectPlane(Dl,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();As.x=(t.clientX-n.left)/n.width*2-1,As.y=-((t.clientY-n.top)/n.height)*2+1,To.setFromCamera(As,this.object),To.ray.intersectPlane(Dl,Il)&&(Il.sub(this._panWorldStart),this._panOffset.copy(Il).negate(),this.update())}}const Ao=new Lt;function O(i){return Ao.set(i),[Ao.r,Ao.g,Ao.b]}function Wt(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function xr(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function Pe(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class se{constructor(){X(this,"pos",[]);X(this,"nor",[]);X(this,"col",[]);X(this,"glo",[]);X(this,"ox",0);X(this,"oy",0);X(this,"oz",0);X(this,"c",1);X(this,"s",0)}get vertexCount(){return this.pos.length/3}gradientY(t,e,n,s,r){for(let o=t*3;o<this.pos.length;o+=3){const a=ne.clamp((this.pos[o+1]-e)/(n-e),0,1);for(let l=0;l<3;l++)this.col[o+l]=s[l]+(r[l]-s[l])*a}}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,o,a,l,c,u,h=0){const d=this.wx(t,n),f=this.wz(t,n),p=this.oy+e,x=this.wx(s,o),m=this.wz(s,o),g=this.oy+r,_=this.wx(a,c),M=this.wz(a,c),v=this.oy+l,b=x-d,E=g-p,S=m-f,y=_-d,w=v-p,T=M-f;let R=E*T-S*w,P=S*y-b*T,U=b*w-E*y;const L=Math.hypot(R,P,U)||1;R/=L,P/=L,U/=L,this.pos.push(d,p,f,x,g,m,_,v,M),this.nor.push(R,P,U,R,P,U,R,P,U),this.col.push(u[0],u[1],u[2],u[0],u[1],u[2],u[0],u[1],u[2]),this.glo.push(h,h,h)}quad(t,e,n,s,r,o,a,l,c,u,h,d,f,p=0){this.tri(t,e,n,s,r,o,a,l,c,f,p),this.tri(t,e,n,a,l,c,u,h,d,f,p)}box(t,e,n,s,r,o,a,l=void 0,c=null,u=0){this.quad(t,e,o,s,e,o,s,r,o,t,r,o,a,u),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,a,u),this.quad(s,e,o,s,e,n,s,r,n,s,r,o,a,u),this.quad(t,e,n,t,e,o,t,r,o,t,r,n,a,u),l!==null&&this.quad(t,r,o,s,r,o,s,r,n,t,r,n,l??a,u),c&&this.quad(t,e,n,s,e,n,s,e,o,t,e,o,c,u)}cyl(t,e,n,s,r,o,a,l,c=null,u=0){const h=e+o;for(let d=0;d<a;d++){const f=d/a*Math.PI*2,p=(d+1)/a*Math.PI*2,x=Math.cos(f),m=Math.sin(f),g=Math.cos(p),_=Math.sin(p);r>1e-4?(this.quad(t+x*s,e,n+m*s,t+x*r,h,n+m*r,t+g*r,h,n+_*r,t+g*s,e,n+_*s,l,u),c&&this.tri(t,h,n,t+g*r,h,n+_*r,t+x*r,h,n+m*r,c,u)):this.tri(t+x*s,e,n+m*s,t,h,n,t+g*s,e,n+_*s,l,u)}}blob(t,e,n,s,r,o,a,l,c,u,h=0){const d=u??c;for(let f=0;f<l;f++){const p=f/l*Math.PI,x=(f+1)/l*Math.PI,m=Math.cos(p),g=Math.cos(x),_=Math.sin(p),M=Math.sin(x),v=xr(c,d,1-(f+.5)/l);for(let b=0;b<a;b++){const E=b/a*Math.PI*2,S=(b+1)/a*Math.PI*2,y=Math.cos(E),w=Math.sin(E),T=Math.cos(S),R=Math.sin(S),P=t+y*_*s,U=e+m*r,L=n+w*_*o,z=t+T*_*s,I=n+R*_*o,B=t+y*M*s,$=e+g*r,N=n+w*M*o,H=t+T*M*s,K=n+R*M*o;f>0&&this.tri(P,U,L,z,U,I,H,$,K,v,h),f<l-1&&this.tri(P,U,L,H,$,K,B,$,N,v,h)}}}walls(t,e,n,s,r=0){const o=t.length/2,a=_r(t)>0;for(let l=0;l<o;l++){const c=(l+1)%o,u=t[l*2],h=t[l*2+1],d=t[c*2],f=t[c*2+1];a?this.quad(d,e,f,u,e,h,u,n,h,d,n,f,s,r):this.quad(u,e,h,d,e,f,d,n,f,u,n,h,s,r)}}cap(t,e,n,s=0){const r=t.length/2,o=[];for(let l=0;l<r;l++)o.push(new Nt(t[l*2],t[l*2+1]));const a=po.triangulateShape(o,[]);for(const l of a){const c=o[l[0]],u=o[l[1]],h=o[l[2]];(u.x-c.x)*(h.y-c.y)-(u.y-c.y)*(h.x-c.x)>0?this.tri(c.x,e,c.y,h.x,e,h.y,u.x,e,u.y,n,s):this.tri(c.x,e,c.y,u.x,e,u.y,h.x,e,h.y,n,s)}}build(){const t=new Re;return t.setAttribute("position",new Te(new Float32Array(this.pos),3)),t.setAttribute("normal",new Te(new Float32Array(this.nor),3)),t.setAttribute("color",new Te(new Float32Array(this.col),3)),t.setAttribute("glow",new Te(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function _r(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const Ro={value:0};function Rs(i={}){const t=new Pn({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??Ce}),e=new Lt(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=Ro,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>"inverloch-model",t}function Mr(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=Ro,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.82 * uNight;`)},i.customProgramCacheKey=()=>"inverloch-unlit",i}const D1=8192,li=256,I1=420,Ru=2048,Cu=[-1,1],Lu=`
uniform sampler2D uCloudMap;
uniform vec2 uCloudOffset;
uniform float uCloudCover;
uniform float uCloudFlash;
const float cloudHeight = ${I1.toFixed(1)};

float cloudDensity(vec2 position) {
  float density = texture2D(uCloudMap, position / ${D1.toFixed(1)} - uCloudOffset).r;
  float edge = mix(0.78, 0.29, uCloudCover);
  return smoothstep(edge, edge + 0.13, density) * smoothstep(0.0, 0.08, uCloudCover);
}
`,N1=`
uniform vec3 uCloudSunDir;
uniform float uCloudShadowStrength;

float cloudSunlight(vec3 position) {
  float layerDistance = cloudHeight - position.y;
  if (layerDistance <= 0.0 || uCloudShadowStrength <= 0.0 || uCloudCover <= 0.0) return 1.0;
  vec2 projection = position.xz + layerDistance * uCloudSunDir.xz / max(uCloudSunDir.y, 0.06);
  return 1.0 - uCloudShadowStrength * cloudDensity(projection) * smoothstep(0.0, 70.0, layerDistance);
}
`;function Co(i,t,e){const n=Math.imul(i%e,374761393)^Math.imul(t%e,668265263)^Math.imul(e,1442695041),s=Math.imul(n^n>>>13,1274126177);return((s^s>>>16)>>>0)/4294967295}function Nl(i,t,e){const n=Math.floor(i*e),s=Math.floor(t*e),r=i*e-n,o=t*e-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=ne.lerp(Co(n,s,e),Co(n+1,s,e),a),u=ne.lerp(Co(n,s+1,e),Co(n+1,s+1,e),a);return ne.lerp(c,u,l)}function U1(){const i=new Uint8Array(li*li);for(let e=0;e<li;e++)for(let n=0;n<li;n++){const s=(n+.5)/li,r=(e+.5)/li,o=.67*Nl(s,r,24)+.23*Nl(s,r,48)+.1*Nl(s,r,96);i[e*li+n]=Math.round(255*o)}const t=new rr(i,li,li,Pr);return t.wrapS=t.wrapT=Ks,t.magFilter=Ke,t.minFilter=yn,t.generateMipmaps=!0,t.needsUpdate=!0,t}class F1{constructor(){X(this,"uniforms",{uCloudMap:{value:U1()},uCloudOffset:{value:new Nt},uCloudCover:{value:.38},uCloudFlash:{value:0},uFlashCenter:{value:new Nt}})}update(t){const e=ne.euclideanModulo(t,Ru)/Ru;this.uniforms.uCloudOffset.value.set(Cu[0]*e,Cu[1]*e)}setCover(t){this.uniforms.uCloudCover.value=ne.clamp(t,0,1)}setFlash(t){this.uniforms.uCloudFlash.value=ne.clamp(t,0,1)}dispose(){this.uniforms.uCloudMap.value.dispose()}}const ci={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},O1=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
  gl_Position = p.xyww;
}`,z1=`
${Lu}
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
}`;class B1{constructor(t,e,n,s){X(this,"sun",new Qp(16777215,3));X(this,"hemi",new Jp(16777215,8947848,1));X(this,"sky");X(this,"horizon",{value:new Lt});X(this,"sunDir",new V);X(this,"cloudShadowStrength",{value:0});X(this,"skyUniforms");X(this,"from");X(this,"to");X(this,"t",1);X(this,"mode","day");this.renderer=t,this.water=e,this.from=this.to=ci.day,this.skyUniforms={...s.uniforms,uZenith:{value:new Lt},uHorizon:this.horizon,uBelow:{value:new Lt},uSunDir:{value:new V},uSunColor:{value:new Lt},uSunGlow:{value:1},uNight:{value:0}},this.sky=new te(new Ml(1,32,16),new sn({uniforms:this.skyUniforms,vertexShader:O1,fragmentShader:z1,side:tn,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,n>0&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n),this.sun.shadow.radius=1.5),this.apply(1)}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=ci[t],this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=ne.clamp(e*.7,90,2400),s=this.sun.shadow,r=s.camera,o=n*2/s.mapSize.x,a=Math.round(t.x/o)*o,l=Math.round(t.z/o)*o,c=n*2.4+300;this.sun.target.position.set(a,0,l),this.sun.position.set(a,0,l).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=ne.clamp(o*1.6,.06,1.2))}setSolar(t){const e=(t%1440+1440)%1440,n=6*60,s=20.5*60;let r,o;if(e>=n&&e<=s)o=(e-n)/(s-n),r=Math.sin(Math.PI*o)*70;else{const p=((e<n?e+1440:e)-s)/(1440-(s-n));o=p<.5?1:0,r=-Math.sin(Math.PI*p)*40}const a=ne.degToRad(110*(1-2*o)),l=ne.degToRad(Math.max(r,5)),c=[Math.sin(a)*Math.cos(l),Math.sin(l),-Math.cos(a)*Math.cos(l)];let u;r>=25?u=ci.day:r>=6?u=Ul(ci.golden,ci.day,(r-6)/19):r>=-6?u=Ul(ci.night,ci.golden,(r+6)/12):u=ci.night;const h=ne.clamp((2-r)/6,0,1),d=ci.night.sunDir,f=[c[0]+(d[0]-c[0])*h,c[1]+(d[1]-c[1])*h,c[2]+(d[2]-c[2])*h];this.from=this.to={...u,sunDir:f},this.mode=r>=25?"day":r>=-6?"golden":"night",this.apply(1)}snapshot(){return Ul(this.from,this.to,G1(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.castShadow||this.sun.position.copy(this.sunDir),this.cloudShadowStrength.value=.64*(1-ne.smoothstep(e.night,.25,.95)),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night;const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new Lt(e.shallow),.35),Ro.value=e.night,this.renderer.toneMappingExposure=e.exposure}}function G1(i){return i*i*(3-2*i)}function Ul(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,o)=>new Lt(r).lerp(new Lt(o),e).getHex(),s=(r,o)=>r+(o-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}const Yn=1.5;class Pu{constructor(t,e,n,s,r,o,a,l,c=[]){X(this,"nx");X(this,"nz");X(this,"y");X(this,"xMin");X(this,"zMin");X(this,"xMax");X(this,"zMax");X(this,"dx");X(this,"dz");X(this,"cellX");X(this,"cellZ");if(this.raw=t,this.exposure=e,this.w=n,this.h=s,this.sizeX=r,this.sizeZ=o,this.patches=c,this.cellX=r/n,this.cellZ=o/s,this.nx=Math.floor((n-1)/a)+1,this.nz=Math.floor((s-1)/a)+1,this.dx=this.cellX*a,this.dz=this.cellZ*a,this.xMin=-r/2+this.cellX/2,this.zMin=-o/2+this.cellZ/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=l??new Float32Array(this.nx*this.nz),!l)for(let u=0;u<this.nz;u++)for(let h=0;h<this.nx;h++)this.y[u*this.nx+h]=t[u*a*n+h*a]*Yn}yAt(t,e){for(const n of this.patches)if(t>=n.xMin&&t<=n.xMax&&e>=n.zMin&&e<=n.zMax)return Du(n,t,e);return this.baseYAt(t,e)}baseYAt(t,e){return Du(this,t,e)}patchOverlaps(t,e,n,s){return this.patches.some(r=>t<r.xMax&&n>r.xMin&&e<r.zMax&&s>r.zMin)}bilinear(t,e,n){let s=(e+this.sizeX/2)/this.cellX-.5,r=(n+this.sizeZ/2)/this.cellZ-.5;s<0?s=0:s>this.w-1.0001&&(s=this.w-1.0001),r<0?r=0:r>this.h-1.0001&&(r=this.h-1.0001);const o=s|0,a=r|0,l=s-o,c=r-a,u=a*this.w+o;return(t[u]*(1-l)+t[u+1]*l)*(1-c)+(t[u+this.w]*(1-l)+t[u+this.w+1]*l)*c}metresAt(t,e){return this.bilinear(this.raw,t,e)}exposureAt(t,e){return this.bilinear(this.exposure,t,e)}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}}function Du(i,t,e){let n=(t-i.xMin)/i.dx,s=(e-i.zMin)/i.dz;n<0?n=0:n>i.nx-1&&(n=i.nx-1),s<0?s=0:s>i.nz-1&&(s=i.nz-1);const r=Math.min(n|0,i.nx-2),o=Math.min(s|0,i.nz-2),a=n-r,l=s-o,c=o*i.nx+r,u=i.y[c],h=i.y[c+1],d=i.y[c+i.nx],f=i.y[c+i.nx+1];return a+l<=1?u+(h-u)*a+(d-u)*l:f+(d-f)*(1-a)+(h-f)*(1-l)}const k1=[{ends:[40013,27439,27602,20489],tie:24,anchors:[[1280,11.8],[1300,10.8],[1320,9.98],[1330,9.81],[1340,9.67],[1350,9.93],[1365,10.17],[1380,10.55],[1400,10.77]]},{ends:[-4743,-403,-2772,-122],tie:12,anchors:[[59,24.62],[74,22.63],[89,19.69],[100,17.7],[110,15.95],[120,14.19],[132,12.07],[144,10.23]]},{ends:[-30214,11968,-40013,21095],tie:25,anchors:[[1080,5.14],[1100,5.2],[1120,5.57],[1135,6.65],[1150,8.61],[1155,9.24],[1165,10.35],[1175,11.65],[1192,15],[1210,18.4],[1235,20.68],[1255,21.63]]},{ends:[-17855,6215,-16707,-2373],tie:8,anchors:[[180,13.65],[192,16],[204,18.6],[220,21.02],[244,23.53]]},{ends:[-28032,6727,-24278,8117],tie:7,anchors:[[8,11.72],[14,11.51],[23,10.28],[33,8.42],[43,6.69],[52,5.53]]},{ends:[-30103,11645,-35027,11244],tie:13,anchors:[[428,5.87],[442,7.08],[457,10.26],[475,14.18],[495,17.64],[510,19.05],[529,20.38]]}],H1=.015,Iu=1.5;function Fl(i){const t=Math.max(0,Math.min(1,i));return t*t*(3-2*t)}function V1(i){const t=i[5];return k1.find(({ends:e})=>e[0]===t[0]&&e[1]===t[1]&&e[2]===t[t.length-2]&&e[3]===t[t.length-1])}class W1{constructor(t,e){X(this,"start");X(this,"end");X(this,"outer");X(this,"points",[]);X(this,"slopes");X(this,"halfWidth");this.profile=e,this.halfWidth=t[3]/20,this.outer=this.halfWidth+Iu+(t[0]<3?20:12);const{anchors:n,tie:s}=e;this.start=n[0][0]-s,this.end=n[n.length-1][0]+s;const r=n.slice(1).map(([l,c],u)=>(c-n[u][1])/(l-n[u][0]));this.slopes=[r[0]];for(let l=1;l<r.length;l++){const c=r[l-1],u=r[l];this.slopes.push(c*u>0?2*c*u/(c+u):0)}this.slopes.push(r[r.length-1]);const o=t[5];let a=0;for(let l=2;l<o.length;l+=2){const c=o[l-2]/10,u=o[l-1]/10,h=o[l]/10-c,d=o[l+1]/10-u,f=Math.hypot(h,d);if(f&&a+f>=this.start&&a<=this.end){const p=Math.max(this.start,a),x=Math.min(this.end,a+f);for(const m of this.points.length?[x]:[p,x])this.points.push({x:c+h*(m-a)/f,z:u+d*(m-a)/f,s:m})}a+=f}}weight(t){return Fl(Math.min(t-this.start,this.end-t)/this.profile.tie)}deckLift(t,e){return e+(.11-e)*this.weight(t)}elevation(t,e){const{anchors:n}=this.profile;let s=0;for(;s+2<n.length&&t>n[s+1][0];)s++;const[r,o]=n[s],[a,l]=n[s+1],c=a-r,u=(t-r)/c;return(u<0?o+(t-r)*this.slopes[s]:u>1?l+(t-a)*this.slopes[s+1]:o+(l-o)*Fl(u)+c*u*(1-u)*((1-u)*this.slopes[s]-u*this.slopes[s+1]))-Math.abs(e)*H1}ground(t,e,n,s,r=0){const o=t.baseYAt(e,n),a=this.weight(s);return o+(this.elevation(s,r)-o)*a}shoulder(t,e,n){let s=this.outer**2,r=0;for(let c=1;c<this.points.length;c++){const u=this.points[c-1],h=this.points[c],d=h.x-u.x,f=h.z-u.z,p=Math.max(0,Math.min(1,((t-u.x)*d+(e-u.z)*f)/(d*d+f*f||1))),x=(t-u.x-p*d)**2+(e-u.z-p*f)**2;x<s&&(s=x,r=u.s+(h.s-u.s)*p)}const o=this.weight(r);if(!o)return n;const a=Math.sqrt(s),l=Fl((this.outer-a)/(this.outer-this.halfWidth-Iu));return n+(this.elevation(r,a)-n)*o*l}}function Nu(i){const t=V1(i);return t&&new W1(i,t)}function X1(i,t){const e=[];for(const s of t){const r=Nu(s);if(!r||r.points.length<2)continue;const o=r.points.map(u=>u.x),a=r.points.map(u=>u.z),l=r.outer,c={i0:Math.max(0,Math.floor((Math.min(...o)-l-i.xMin)/i.dx)),i1:Math.min(i.nx-1,Math.ceil((Math.max(...o)+l-i.xMin)/i.dx)),j0:Math.max(0,Math.floor((Math.min(...a)-l-i.zMin)/i.dz)),j1:Math.min(i.nz-1,Math.ceil((Math.max(...a)+l-i.zMin)/i.dz)),grades:[r]};for(let u=0;u<e.length;){const h=e[u];if(c.i0>=h.i1||h.i0>=c.i1||c.j0>=h.j1||h.j0>=c.j1){u++;continue}c.i0=Math.min(c.i0,h.i0),c.i1=Math.max(c.i1,h.i1),c.j0=Math.min(c.j0,h.j0),c.j1=Math.max(c.j1,h.j1),c.grades.push(...h.grades),e.splice(u,1),u=0}e.push(c)}const n=Math.ceil(Math.max(i.dx,i.dz)/3);return e.map(({i0:s,i1:r,j0:o,j1:a,grades:l})=>{const c=i.xMin+s*i.dx,u=i.zMin+o*i.dz,h=i.xMin+r*i.dx,d=i.zMin+a*i.dz,f=(r-s)*n+1,p=(a-o)*n+1,x=i.dx/n,m=i.dz/n,g=new Float32Array(f*p);for(let _=0;_<p;_++)for(let M=0;M<f;M++){const v=c+M*x,b=u+_*m,E=i.baseYAt(v,b);let S=E;if(M>0&&M<f-1&&_>0&&_<p-1)for(const y of l)S+=y.shoulder(v,b,E)-E;g[_*f+M]=S}return{i0:s,i1:r,j0:o,j1:a,xMin:c,zMin:u,xMax:h,zMax:d,nx:f,nz:p,dx:x,dz:m,y:g}})}const Cs=128;function Y1(i,t,e,n,s){const{nx:r,nz:o}=i,a=Math.min(Cs+1,r-t),l=Math.min(Cs+1,o-e),c=new Float32Array(a*l*3),u=new Float32Array(a*l*3),h=new Float32Array(a*l*2);for(let p=e;p<e+l;p++)for(let x=t;x<t+a;x++){const m=(p-e)*a+x-t,g=i.xMin+x*i.dx,_=i.zMin+p*i.dz;c[m*3]=g,c[m*3+1]=i.y[p*r+x],c[m*3+2]=_,h[m*2]=(g+n.sizeX/2)/n.sizeX,h[m*2+1]=1-(_+n.sizeZ/2)/n.sizeZ;const M=i!==n&&(x===0||p===0||x===r-1||p===o-1),v=M?(n.baseYAt(g+n.dx,_)-n.baseYAt(g-n.dx,_))/(2*n.dx):(i.y[p*r+Math.min(x+1,r-1)]-i.y[p*r+Math.max(x-1,0)])/(2*i.dx),b=M?(n.baseYAt(g,_+n.dz)-n.baseYAt(g,_-n.dz))/(2*n.dz):(i.y[Math.min(p+1,o-1)*r+x]-i.y[Math.max(p-1,0)*r+x])/(2*i.dz),E=Math.hypot(v,1,b);u[m*3]=-v/E,u[m*3+1]=1/E,u[m*3+2]=-b/E}const d=new Uint16Array((a-1)*(l-1)*6);let f=0;for(let p=0;p<l-1;p++)for(let x=0;x<a-1;x++){if(s.some(v=>t+x>=v.i0&&t+x<v.i1&&e+p>=v.j0&&e+p<v.j1))continue;const m=p*a+x,g=m+1,_=m+a,M=_+1;d[f++]=m,d[f++]=_,d[f++]=g,d[f++]=g,d[f++]=_,d[f++]=M}return{pos:c,nor:u,uv:h,idx:f===d.length?d:d.slice(0,f)}}function Z1(i){const t=[];for(const e of[i,...i.patches])for(let n=0;n<e.nz-1;n+=Cs)for(let s=0;s<e.nx-1;s+=Cs){const r=e===i?i.patches.filter(o=>s<o.i1&&s+Cs>o.i0&&n<o.j1&&n+Cs>o.j0):[];t.push(Y1(e,s,n,i,r))}return t}const Ol=10,K1=5,Ls=4,q1=3;function Lo(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Int16Array(e.buffer,0,e.length>>1)}async function J1(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,o=0,a=0,l=0;const c=[];for(;n<t.length;){const x=e.getUint32(n),m=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(m==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),o=t[n+16],a=t[n+17],l=t[n+20];else if(m==="IDAT")c.push(t.subarray(n+8,n+8+x));else if(m==="IEND")break;n+=12+x}if(o!==8||a!==2&&a!==6||l)throw new Error("Unsupported terrain image format");const u=a===2?3:4,h=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),d=new Uint8Array(await new Response(h).arrayBuffer()),f=s*u,p=new Uint8Array(f*r);for(let x=0;x<r;x++){const m=d[x*(f+1)],g=x*(f+1)+1,_=x*f;for(let M=0;M<f;M++){const v=M>=u?p[_+M-u]:0,b=x>0?p[_-f+M]:0,E=M>=u&&x>0?p[_-f+M-u]:0;let S=d[g+M];if(m===1)S+=v;else if(m===2)S+=b;else if(m===3)S+=v+b>>1;else if(m===4){const y=Math.abs(b-E),w=Math.abs(v-E),T=Math.abs(v+b-2*E);S+=y<=w&&y<=T?v:w<=T?b:E}p[_+M]=S&255}}return{width:s,height:r,channels:u,data:p}}async function $1(i,t,e){const[n,s]=await Promise.all([fetch(i.town,{signal:e}).then(d=>{if(!d.ok)throw new Error("Could not load the town data");return d.json()}).then(d=>(t("Streets and buildings"),d)),fetch(i.height,{signal:e}).then(d=>{if(!d.ok)throw new Error("Could not load the terrain");return d.arrayBuffer()}).then(J1).then(d=>(t("Terrain"),d))]);if(e.aborted)throw e.reason;const{meta:r}=n,o=s.width*s.height,a=new Float32Array(o),l=new Float32Array(o),c=s.channels;for(let d=0;d<o;d++)a[d]=(s.data[d*c]<<8|s.data[d*c+1])/r.heightScale-r.heightOffset,l[d]=s.data[d*c+2]/255;const u=new Pu(a,l,r.grid[0],r.grid[1],r.size[0],r.size[1],i.terrainStep),h=X1(u,n.roads);return u.patches.push(...h),{town:{...n,houses:Lo(n.houses),cabins:Lo(n.cabins),cars:Lo(n.cars),trees:Lo(n.trees)},heights:a,exposure:l,surface:u.y,terrainPatches:h,terrainTiles:Z1(u)}}async function j1(i,t,e,n,s){const r=new Set,o=u=>{s.aborted||r.has(u)||(r.add(u),e(r.size/4,u))};e(0,"Fetching map data");const a={town:new URL(i.town,document.baseURI).href,height:new URL(i.height,document.baseURI).href,terrainStep:t},l=n.run({kind:"world",source:a},()=>$1(a,o,s),s,o),c=new qp().loadAsync(i.ground).then(u=>(o("Ground texture"),u));try{const[u,h]=await Promise.all([l,c]);if(s.aborted)throw s.reason;return h.colorSpace=Ue,h.anisotropy=8,h.generateMipmaps=!0,h.minFilter=yn,o("Building the model"),{...u,ground:h}}catch(u){throw c.then(h=>h.dispose(),()=>{}),u}}const zl=-1617.09,Bl=414.46,Ps=2.6721,We=-4.38,mn=1.66,cn=-11.13,In=-10.87,hi=-1.98,Nn=10.93,Po=2.72,Uu=4.16,Li=.24,vr=[We,Nn,mn,Nn,mn,In,cn,In,cn,hi,We,hi],Fu=Math.cos(Ps),Ou=Math.sin(Ps),Zi=(i,t)=>zl+i*Fu+t*Ou,Ki=(i,t)=>Bl-i*Ou+t*Fu;function zu(i,t,e,n){const s=(i+e)/2,r=(t+n)/2;return[Zi(s,r),Ki(s,r),e-i,n-t,Ps]}const Do=[...zu(We,In,mn,Nn),...zu(cn,In,We,hi)],Ds=O(13222830),Q1=O(10262404),Pi=O(14144967),Di=O(6712936),Bu=O(3884352),Gu=O(3887959),t_=O(8217937);function Io(i,t,e,n,s,r){for(let o=e+.32;o<n-.18;o+=.64){const a=o+.036,l=Po+.024,c=Uu+.024,u=Wt(Di,.74);if(t){const[h,d]=s>r?[o,a]:[a,o];i.quad(s,l,d,s,l,h,r,c,h,r,c,d,u)}else{const[h,d]=s>r?[o,a]:[a,o];i.quad(h,l,s,d,l,s,d,c,r,h,c,r,u)}}}function e_(i){const t=We-Li,e=mn+Li,n=cn-Li,s=Nn+Li,r=In-Li,o=hi+Li,a=(t+e)/2,l=(r+o)/2,c=Po,u=Uu;i.quad(e,c,s,e,c,r,a,u,r,a,u,s,Di),i.quad(t,c,o,t,c,s,a,u,s,a,u,l,Wt(Di,1.07)),i.tri(t,c,r,a,u,l,a,u,r,Wt(Di,1.07)),i.quad(n,c,o,t,c,o,a,u,l,n,u,l,Wt(Di,1.02)),i.quad(t,c,r,n,c,r,n,u,l,a,u,l,Wt(Di,.92)),Io(i,!0,r,s,e,a),Io(i,!0,o,s,t,a),Io(i,!1,n,t,o,l),Io(i,!1,n,t,r,l);for(const[m,g,_,M,v,b]of[[t,c,s,a,u,s],[a,u,s,e,c,s],[e,c,r,a,u,r],[a,u,r,t,c,r],[n,c,r,n,u,l],[n,u,l,n,c,o]])i.quad(m,g-.16,_,M,v-.16,b,M,v,b,m,g,_,Pi);i.box(e-.09,c-.12,r,e+.035,c-.025,s,Pi),i.box(t-.035,c-.12,o,t+.09,c-.025,s,Pi),i.box(n,c-.12,o-.09,t,c-.025,o+.035,Pi),i.box(n,c-.12,r-.035,t,c-.025,r+.09,Pi),i.box(a-.075,u-.037,r,a+.075,u+.028,s,Wt(Di,.78)),i.box(n,u-.037,l-.075,a,u+.028,l+.075,Wt(Di,.78));const h=u-c,d=u-h*Li/((e-t)/2),f=u-h*Li/((o-r)/2),p=[We,c,mn,c,mn,c+u-d,a,u,We,c+u-d],x=(m,g)=>{const _=g?p:[We,c+u-d,a,u,mn,c+u-d,mn,c,We,c];for(let M=2;M<_.length/2;M++)i.tri(_[0],_[1],m,_[(M-1)*2],_[(M-1)*2+1],m,_[M*2],_[M*2+1],m,Ds)};x(Nn,!0),x(In,!1),i.quad(cn,c,In,cn,c,hi,cn,c+u-f,hi,cn,c+u-f,In,Ds),i.tri(cn,c+u-f,In,cn,c+u-f,hi,cn,u,l,Ds);for(let m=We+.1;m<mn-.09;m+=.19){const g=u-Math.abs(m-a)*h/((e-t)/2)-.04;i.quad(m,c,Nn+.02,m+.034,c,Nn+.02,m+.034,g,Nn+.02,m,g,Nn+.02,Wt(Ds,.75))}}function Gl(i,t,e,n,s,r=!1){for(let u=.24;u<Po;u+=.17)i.quad(t,u,s+.014,e,u,s+.014,e,u+.019,s+.014,t,u+.019,s+.014,Wt(Ds,.67));const o=t+n/2,a=Math.min(n*.29,1.17),l=o-a,c=o+a;i.box(l,.87,s,c,2.17,s+.085,Bu);for(let u=0;u<3;u++){const h=(c-l-.14)/3,d=l+.07+u*h,f=d+h-.034,p=s+.087;i.quad(d,.94,p,f,.94,p,f,2.1,p,d,2.1,p,Wt(Gu,.78+u*.11),.3),i.tri(d,2.03,p+.002,f,1.59,p+.002,f,2.04,p+.002,Wt(Gu,1.14))}if(i.box(l-.045,.84,s,c+.045,.92,s+.15,Pi),i.box(l-.045,2.17,s,c+.045,2.245,s+.12,Pi),r){const u=e-1.42;i.box(u,.04,s,u+1.04,2.22,s+.09,Bu),i.box(u+.065,.1,s+.087,u+.975,2.14,s+.115,t_),i.box(u+.77,.98,s+.11,u+.88,1.035,s+.16,Pi)}}function n_(i,t){const e=(o,a)=>t.yAt(Zi(o,a),Ki(o,a)),n=[];for(let o=0;o<vr.length;o+=2)n.push(e(vr[o],vr[o+1]));const s=Math.max(...n)+.12;i.frame(zl,s,Bl,Ps),i.walls(vr,Math.min(...n)-s-.2,.13,Q1),i.walls(vr,.13,Po,Ds),e_(i),Gl(i,We,mn,mn-We,Nn),Gl(i,cn,We,4.2,hi,!0);for(const o of[1.3,5.1,8.4])i.frame(Zi(We,o),s,Ki(We,o),Ps-Math.PI/2),Gl(i,-1.32,1.32,2.64,0);const r=Pe(13);for(const[o,a]of[[-2.94,13.1],[.39,15.7],[-.65,21.4]])for(let l=0;l<5;l++){const c=o+(r()-.5)*.96,u=a+(r()-.5)*1.68,h=.15+r()*.23;i.frame(zl,e(c,u),Bl,Ps),i.blob(c,h*.64,u,h*1.18,h,h*.84,7,4,O(5134386),O(l%3===0?9671258:7241808));for(let d=0;d<4;d++){const f=(r()-.5)*h,p=(r()-.5)*h;i.tri(c+f-.028,.02,u+p,c+f+.028,.02,u+p,c+f*3.2,h*2.4,u+p*2.7,O(8686162))}}return i.frame(),[[We,In,mn,Nn],[cn,In,We,hi]].map(([o,a,l,c])=>[Zi(o,a),Ki(o,a),Zi(l,a),Ki(l,a),Zi(l,c),Ki(l,c),Zi(o,c),Ki(o,c)])}const qi=[-1744.02,317.57,-1733.46,317.97,-1503.52,434.33,-1494.98,439.14,-1405.07,484.77],kl=[{address:"24",centre:[-1701.99,305.1],roof:[-1694.2,305.76,-1703.13,297.4,-1709.77,304.44,-1700.85,312.79],height:5.56,kind:"house"},{address:"22",centre:[-1686.63,316.01],roof:[-1682.95,322.15,-1679.69,314.17,-1690.31,309.86,-1693.57,317.84],height:4.38,kind:"house"},{address:"22",centre:[-1663.52,295.86],roof:[-1662.91,301.89,-1659.09,291.69,-1664.12,289.82,-1667.95,300.03],height:5.18,kind:"secondary"},{address:"20",centre:[-1668.03,323.5],roof:[-1672.26,328.93,-1664.85,329.6,-1663.8,318.06,-1671.21,317.39],height:4,kind:"house"},{address:"18",centre:[-1645.6,335.06],roof:[-1641.76,340.86,-1638.92,333.05,-1649.45,329.25,-1652.29,337.07],height:4.81,kind:"house"},{address:"16",centre:[-1616,330.48],roof:[-1607.06,329.27,-1620.01,322.43,-1624.94,331.69,-1611.99,338.53],height:5.25,kind:"house"},{address:"14",centre:[-1610.04,351.3],roof:[-1606.74,360.93,-1603.37,352.49,-1608.82,350.34,-1605.21,341.3,-1610.26,339.3,-1617.23,356.78],height:4.26,kind:"house"},{address:"12",centre:[-1594.09,360.99],roof:[-1588.05,358.59,-1595.81,354.74,-1600.13,363.38,-1592.37,367.23],height:4.54,kind:"house"},{address:"10",centre:[-1572.46,363.34],roof:[-1570.76,376.84,-1561.58,355.11,-1574.17,349.83,-1583.35,371.57],height:4.45,kind:"house"},{address:"8",centre:[-1556.72,363.65],roof:[-1551.65,367.39,-1553.74,366.39,-1549.17,356.96,-1557.12,353.13,-1564.8,368.98,-1554.76,373.8],height:4.1,kind:"house"},{address:"8",centre:[-1563.95,372.88],roof:[-1559.23,371.36,-1565.87,368.32,-1568.67,374.4,-1562.03,377.44],height:4.12,kind:"secondary"},{address:"6",centre:[-1542.14,379.99],roof:[-1551.03,382.31,-1537.6,387.31,-1533.69,376.91,-1543.52,373.25,-1544.41,375.62,-1548.01,374.28],height:3.72,kind:"house"},{address:"4",centre:[-1529.85,390.46],roof:[-1531.13,388.55,-1536.03,388.7,-1535.85,394.36,-1524.65,394.02,-1524.91,385.65,-1531.21,385.85],height:6.74,kind:"house"},{address:"2",centre:[-1509.94,392.08],roof:[-1508.19,389.1,-1507.02,386.34,-1512.57,384,-1517.08,394.67,-1505.98,399.33,-1502.64,391.43],height:4.92,kind:"house"},{address:"2B",centre:[-1425.23,448.85],roof:[-1421.59,460.6,-1412.87,448.89,-1428.87,437.1,-1437.58,448.82],height:4.57,kind:"house"},{address:"29",centre:[-1729.27,353.36],roof:[-1736.21,359.75,-1727.91,362.68,-1722.32,346.97,-1730.63,344.05],height:4.65,kind:"house"},{address:"27",centre:[-1712.78,354.08],roof:[-1705.12,350.56,-1718.27,346.57,-1720.66,354.36,-1716.17,355.72,-1717.37,359.63,-1708.71,362.27],height:4.32,kind:"house"},{address:"25",centre:[-1703.96,376.46],roof:[-1701.67,386.2,-1696.78,369.48,-1706.25,366.73,-1711.14,383.45],height:4.21,kind:"house"},{address:"21",centre:[-1665.11,377.39],roof:[-1672.48,381.63,-1662.53,385.48,-1657.73,373.15,-1667.68,369.3],height:3.36,kind:"house"},{address:"17",centre:[-1639.76,395.04],roof:[-1633.19,393.09,-1642.49,388.78,-1646.33,397,-1637.04,401.31],height:4.86,kind:"house"},{address:"15",centre:[-1626.67,406.68],roof:[-1624.06,415.42,-1618.76,400.01,-1622.61,398.7,-1623.4,400.99,-1630,398.74,-1634.51,411.85],height:4.88,kind:"house"},{address:"15",centre:[-1629.65,418.37],roof:[-1626.59,415.38,-1631.01,414.32,-1632.71,421.36,-1628.29,422.41],height:4.69,kind:"secondary"},{address:"7-9",centre:[-1574.55,442.33],roof:[-1566.73,436.97,-1577.92,433.49,-1582.37,447.69,-1571.18,451.17],height:5.03,kind:"house"},{address:"5",centre:[-1559.58,439.93],roof:[-1565.44,444.23,-1557.3,446.82,-1553.71,435.63,-1561.86,433.04],height:5.7,kind:"house"},{address:"1B",centre:[-1439.22,491.94],roof:[-1448.73,495.12,-1433.72,500.3,-1429.71,488.76,-1444.72,483.58],height:4.63,kind:"house"},{address:"1A",centre:[-1447.24,505.79],roof:[-1441.04,510.74,-1439.57,503.75,-1453.43,500.84,-1454.91,507.83],height:4.5,kind:"house"}],i_=[[-1671.48,279.2,-1694.63,323.85,-1732.03,304.61,-1732.02,304.47,-1677.56,276.05],[-1676.05,333.48,-1694.63,323.85,-1671.48,279.2,-1652.91,288.83],[-1634.33,298.46,-1657.48,343.11,-1676.05,333.48,-1652.91,288.83],[-1638.9,352.74,-1657.48,343.11,-1634.33,298.46,-1615.75,308.1],[-1620.32,362.39,-1638.9,352.74,-1615.75,308.1,-1597.17,317.73,-1608.51,339.6],[-1608.94,368.28,-1620.32,362.39,-1608.51,339.6,-1597.17,317.73,-1581.39,325.91,-1604.53,370.57],[-1565.96,333.91,-1589.12,378.55,-1604.53,370.57,-1581.39,325.91],[-1573.84,386.48,-1589.12,378.55,-1565.96,333.91,-1550.68,341.84],[-1535.11,349.91,-1558.27,394.55,-1573.21,386.8,-1573.84,386.48,-1550.68,341.84,-1550.2,342.09],[-1519.68,357.91,-1542.85,402.55,-1558.27,394.55,-1535.11,349.91],[-1527.42,410.56,-1542.85,402.55,-1519.68,357.91,-1504.26,365.92],[-1478.83,379.11,-1510.34,419.41,-1527.42,410.56,-1504.26,365.92],[-1401.78,446.35,-1415.18,468.77,-1442.29,454.72,-1422.86,429.87],[-1714.99,335.99,-1725.28,382.16,-1741.12,373.95,-1735.19,328.74,-1732.09,327.12],[-1713.88,388.08,-1725.28,382.16,-1714.99,335.99,-1697.74,344.94],[-1675.21,356.62,-1696.27,397.21,-1713.88,388.08,-1697.74,344.94],[-1661.66,363.65,-1648.12,370.68,-1669.17,411.27,-1682.72,404.25],[-1621.06,384.71,-1642.12,425.3,-1655.65,418.29,-1634.59,377.7],[-1628.59,432.32,-1642.12,425.3,-1621.06,384.71,-1607.54,391.73],[-1594.01,398.75,-1615.07,439.34,-1628.59,432.32,-1607.54,391.73],[-1588.01,453.37,-1601.54,446.36,-1580.48,405.76,-1566.96,412.78,-1553.43,419.79,-1574.48,460.39],[-1574.48,460.39,-1553.43,419.79,-1539.9,426.81,-1546.92,440.34,-1553.93,453.87,-1560.95,467.4],[-1424.09,490.19,-1427.85,502.63,-1464.32,491.61,-1457.62,469.43,-1425.92,485.87],[-1427.85,502.63,-1432.34,517.51,-1468.82,506.5,-1464.32,491.61]],Is=[["23",[-1683.5,379.63,11,25,2.6798],1,2,15789800,15000798,"","t"],["2 Ebor (outbuilding)",[-1540.1,440.05,7.53,5.25,2.5613],1,0,14078146,11313563,"","s"],["2 Ebor",[-1526.07,445.23,16.31,7.93,2.7377],1,0,13617336,9211790,"","o"]],s_=[...kl.filter(i=>i.kind==="house").map(i=>i.centre),[Do[0],Do[1]],[Is[0][1][0],Is[0][1][1]],[Is[2][1][0],Is[2][1][1]]],ku=[-1592.2,410.8],r_=-1744,o_=-1495;function Hu(i,t,[e,n,s,r]){const o=s-e,a=r-n,l=Math.max(0,Math.min(1,((i-e)*o+(t-n)*a)/(o*o+a*a||1)));return[e+o*l,n+a*l]}function Hl(i,t,e){const[n,s]=Hu(i,t,e);return Math.hypot(i-n,t-s)}function a_(i,t){let e=[qi[0],qi[1]];for(let n=0;n+3<qi.length;n+=2){const s=Hu(i,t,[qi[n],qi[n+1],qi[n+2],qi[n+3]]);Math.hypot(i-s[0],t-s[1])<Math.hypot(i-e[0],t-e[1])&&(e=s)}return e}function Vu(i){const t=i.filter((n,s)=>s%2===0),e=i.filter((n,s)=>s%2===1);return{poly:i,minX:Math.min(...t),maxX:Math.max(...t),minZ:Math.min(...e),maxZ:Math.max(...e)}}function Wu({poly:i,minX:t,maxX:e,minZ:n,maxZ:s},r,o,a){if(r<t-a||r>e+a||o<n-a||o>s+a)return!1;let l=!1;for(let c=0,u=i.length-2;c<i.length;u=c,c+=2){const h=i[c],d=i[c+1],f=i[u],p=i[u+1];if(a>0&&Hl(r,o,[h,d,f,p])<a)return!0;d>o!=p>o&&r<h+(f-h)*(o-d)/(p-d)&&(l=!l)}return l}const l_=i_.map(Vu),c_=kl.map(i=>Vu(i.roof));function Xu(i,t,e=0){return c_.some(n=>Wu(n,i,t,e))}const Yu=new WeakMap;function Zu(i){const t=Yu.get(i);if(t)return t;const e=[],n=[];for(const[r,,,,o,a]of i.roads)if(!(r>4))for(let l=0;l+3<a.length;l+=2){const c=[a[l]/10,a[l+1]/10,a[l+2]/10,a[l+3]/10];if(Math.max(c[0],c[2])<-1864||Math.min(c[0],c[2])>-1375||Math.max(c[1],c[3])<197.6||Math.min(c[1],c[3])>559.1)continue;const u=(c[0]+c[2])/2;(i.names[o]==="Norman Road"&&u>=r_-1&&u<=o_+1?e:n).push(c)}const s=(r,o)=>{if(r<-1790||r>-1355||o<270||o>535)return!1;if(l_.some(l=>Wu(l,r,o,0)))return!0;if(Math.hypot(r-ku[0],o-ku[1])<24)return!1;const a=Math.min(...e.map(l=>Hl(r,o,l)));return a<=45&&n.every(l=>a<Hl(r,o,l))};return Yu.set(i,s),s}const h_=[Do,...Is.map(i=>i[1])];function u_(i,t,e=1.5){if(Xu(i,t,e))return!0;for(const n of h_)for(let s=0;s<n.length;s+=5){const[r,o,a,l,c]=n.slice(s,s+5),u=i-r,h=t-o;if(u*u+h*h>400)continue;const d=Math.cos(c),f=Math.sin(c),p=u*d-h*f,x=u*f+h*d;if(Math.abs(p)<a/2+e&&Math.abs(x)<l/2+e)return!0}return!1}const Ku=[{wall:13223346,roof:5660254,trim:15724260,boards:"horizontal"},{wall:10319973,roof:11908007,trim:15130317,boards:"horizontal"},{wall:12830396,roof:5330260,trim:15789797,boards:"vertical"},{wall:10849655,roof:7761508,trim:15656920,boards:"horizontal"},{wall:14866372,roof:5593957,trim:5988437,boards:"vertical"},{wall:11450284,roof:12040624,trim:15855074,boards:"horizontal"}],qu=O(4278855),Ju=O(3427669),d_=O(7561807),f_=O(9538691),p_=O(11183254);function Ii([i,t],[e,n,s]){return i*e+t*n+s}function Vl(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],r=i[(n+1)%i.length],o=Ii(s,t),a=Ii(r,t);if(o<=0&&e.push(s),o<0&&a>0||o>0&&a<0){const l=o/(o-a);e.push([s[0]+(r[0]-s[0])*l,s[1]+(r[1]-s[1])*l])}}return e}function $u(i,t,e,n,s=0){for(let r=1;r+1<t.length;r++){const o=t[0],a=t[r],l=t[r+1],c=(a[0]-o[0])*(l[1]-o[1])-(a[1]-o[1])*(l[0]-o[0]);if(Math.abs(c)<5e-5)continue;const[u,h]=c>0?[l,a]:[a,l];i.tri(o[0],Ii(o,e)+s,o[1],u[0],Ii(u,e)+s,u[1],h[0],Ii(h,e)+s,h[1],n)}}function m_(i,t,e,n,s){const r=t.map(([a,l])=>new Nt(a,l)),o=po.triangulateShape(r,[]);for(const[a,l]of e.entries()){const c=Wt(n,1-a*.042);for(const u of o){let h=u.map(x=>t[x]);for(const x of e)x!==l&&(h=Vl(h,[l[0]-x[0],l[1]-x[1],l[2]-x[2]]));if(h.length<3||($u(i,h,l,c),!s))continue;const d=Math.abs(l[0])>Math.abs(l[1])?1:0,f=Math.min(...h.map(x=>x[d])),p=Math.max(...h.map(x=>x[d]));for(let x=Math.ceil(f/.74)*.74;x<p;x+=.74){const m=d===0?[-1,0,x]:[0,-1,x],g=d===0?[1,0,-x-.035]:[0,1,-x-.035];$u(i,Vl(Vl(h,m),g),l,Wt(c,.76),.021)}}}}function g_(i,t,e,n,s,r){i.box(t,n,.015,e,s,.11,r),i.box(t+.045,n+.045,.09,e-.045,s-.045,.145,qu);const o=(t+e)/2;for(const[a,l,c]of[[t+.092,o-.025,1],[o+.025,e-.092,.79]]){const u=n+.09,h=s-.09;i.quad(a,u,.148,l,u,.148,l,h,.148,a,h,.148,Wt(Ju,c),.28),i.tri(a,h-.035,.15,l,h-.4,.15,l,h-.035,.15,Wt(Ju,c*1.2))}i.box(t-.06,n-.045,.01,e+.06,n+.02,.2,r)}function x_(i,t,e,n,s,r,o,a,l){if(t<1.5)return;if(l){const h=Wt(s,.72);if(o==="vertical")for(let d=.19;d<t-.08;d+=.23)i.quad(d,.17,.017,d+.023,.17,.017,d+.023,e-.1,.017,d,e-.1,.017,h);else for(let d=.26;d<e-.05;d+=.18)i.quad(.035,d,.017,t-.035,d,.017,t-.035,d+.018,.017,.035,d+.018,.017,h);i.box(0,-.02,.005,.1,e-.08,.072,r),i.box(t-.1,-.02,.005,t,e-.08,.072,r)}const c=Math.max(1,Math.min(4,Math.floor(t/2.75))),u=a&&t>2.65?c-1:-1;for(let h=0;h<n;h++)for(let d=0;d<c;d++){const f=t*(d+.5)/c,p=2.65*h;if(h===0&&d===u)i.box(f-.55,.02,.015,f+.55,2.18,.14,r),i.box(f-.46,.05,.13,f+.46,2.1,.17,d_),i.box(f+.27,.97,.16,f+.38,1.03,.208,qu),i.box(f-.65,-.06,.01,f+.65,.05,.4,p_),i.box(f-.68,2.21,0,f+.68,2.29,.48,r);else{const x=Math.min(.89,t/c*.3);g_(i,f-x,f+x,p+.86,Math.min(e-.18,p+2.1),r)}}}function __(i,t,e,n,s,r){const o=[];for(let q=0;q<e.roof.length;q+=2)o.push([e.roof[q],e.roof[q+1]]);const a=e.centre[0],l=e.centre[1],c=Math.round(a*337+l*191)>>>0,u=Pe(c),h=Ku[Math.floor(u()*Ku.length)],d=O(h.wall),f=O(h.trim),p=O(h.roof),x=e.kind==="house",m=x&&(e.height??0)>=5.45?2:1,g=x?m===2?5.2:Math.min(3.22,Math.max(2.55,(e.height??4.1)-1.38)):2.38,_=o.map(([q,nt])=>t.yAt(q,nt)),M=Math.max(t.yAt(a,l),..._)+.08,v=_r(n)>0,b=o.map((q,nt)=>{const et=(nt+1)%o.length,st=v?et:nt,wt=v?nt:et,xt=n[st*2],Ft=n[st*2+1],kt=n[wt*2]-xt,ht=n[wt*2+1]-Ft,dt=Math.hypot(kt,ht),pt=Math.atan2(-ht,kt),Yt=s-(xt+kt/2),Ct=r-(Ft+ht/2),Ht=(Yt*Math.sin(pt)+Ct*Math.cos(pt))/Math.max(1,Math.hypot(Yt,Ct));return{x:xt,z:Ft,dx:kt,dz:ht,heading:pt,length:dt,facing:Ht,i:nt}}),E=b.reduce((q,nt)=>{const et=st=>st.facing*Math.min(5,st.length);return et(nt)>et(q)?nt:q}),y=b.reduce((q,nt)=>nt.length>q.length?nt:q).heading,w=Math.cos(y),T=Math.sin(y),R=o.map(([q,nt])=>[(q-a)*w-(nt-l)*T,(q-a)*T+(nt-l)*w]),P=Math.min(...R.map(q=>q[1])),U=Math.max(...R.map(q=>q[1])),L=Math.min(...R.map(q=>q[0])),z=Math.max(...R.map(q=>q[0])),I=Math.max(1,Math.min(z-L,U-P)),B=x?.78+u()*.75:.38,$=B*2/I,N=g+.16,H=[[0,$,N-$*P],[0,-$,N+$*U]],K=u(),Y=!x||K<.22?[[0,B/(U-P||1),N-B*P/(U-P||1)]]:K<.67?H:[...H,[$,0,N-$*L],[-$,0,N+$*z]];i.frame(0,M,0),i.walls(n,Math.min(..._)-M-.28,.13,f_),i.walls(n,.13,g,d),i.frame(a,M,l,y),m_(i,R,Y,p,x);const Z=q=>Math.min(...Y.map(nt=>Ii(q,nt))),F=(q,nt)=>[(q-a)*w-(nt-l)*T,(q-a)*T+(nt-l)*w];for(const q of b){if(q.length<.06)continue;const{x:nt,z:et,dx:st,dz:wt,length:xt,heading:Ft}=q,kt=F(nt,et),ht=F(nt+st,et+wt),dt=Y.map(Ht=>Ii(kt,Ht)),pt=Y.map(Ht=>Ii(ht,Ht)),Yt=[0,1];for(let Ht=0;Ht<Y.length;Ht++)for(let Xt=Ht+1;Xt<Y.length;Xt++){const Kt=dt[Ht]-dt[Xt],pe=pt[Ht]-pt[Xt];Kt*pe<0&&Yt.push(Kt/(Kt-pe))}Yt.sort((Ht,Xt)=>Ht-Xt),i.frame(nt,M,et,Ft);const Ct=Ht=>Math.min(...Y.map((Xt,Kt)=>dt[Kt]+(pt[Kt]-dt[Kt])*Ht));for(let Ht=1;Ht<Yt.length;Ht++){const Xt=Yt[Ht-1],Kt=Yt[Ht];i.quad(Xt*xt,g-.006,0,Kt*xt,g-.006,0,Kt*xt,Ct(Kt),0,Xt*xt,Ct(Xt),0,d)}x&&(q.facing>.25||q.length>4.5)&&x_(i,xt,g,m,d,f,h.boards,q.i===E.i,q.facing>.2)}i.frame(a,M,l,y);const J=_r(e.roof)<0;for(let q=0;q<R.length;q++){const nt=(q+1)%R.length,et=R[J?q:nt],st=R[J?nt:q],wt=Z(et),xt=Z(st);i.quad(et[0],wt-.145,et[1],st[0],xt-.145,st[1],st[0],xt,st[1],et[0],wt,et[1],f)}i.frame()}function Zn(i,t,e,n,s){return[i.wx(t,e),i.wz(t,e),i.wx(n,e),i.wz(n,e),i.wx(n,s),i.wz(n,s),i.wx(t,s),i.wz(t,s)]}function Kn(i,t,e,n,s,r,o,a){i.box(e-s,r,n-s,e+s,o,n+s,a,null),t==null||t.circles.push([i.wx(e,n),i.wz(e,n),s*Math.SQRT2])}const No=[15921126,15261640,13619920,11120043,12110550,11845800,14272936,5988452,11036494,14205088,15327150,16448250].map(O),Ni=[15000277,12435386,8948618,4934726,3487290,6957594,8160360,3555666,11888447,11644323].map(O),Xe=O(3163994),Sr=[7031348,3098712,9056042,15658730,4151878].map(O),Ns=O(9138002),hn=O(16053230),Uo=O(12171184),Fo=O(1846090),ju=[15327951,3099196,2504783,8007210,3816770,13214282,5209226].map(O);function Wl(i,t,e,n,s,r){const o=Wt(r,.9);if(t>=e){const a=t-e;i.quad(-t,n,e,t,n,e,a,n+s,0,-a,n+s,0,r),i.quad(t,n,-e,-t,n,-e,-a,n+s,0,a,n+s,0,r),i.tri(t,n,e,t,n,-e,a,n+s,0,o),i.tri(-t,n,-e,-t,n,e,-a,n+s,0,o)}else{const a=e-t;i.quad(t,n,e,t,n,-e,0,n+s,-a,0,n+s,a,r),i.quad(-t,n,-e,-t,n,e,0,n+s,a,0,n+s,-a,r),i.tri(-t,n,e,t,n,e,0,n+s,a,o),i.tri(t,n,-e,-t,n,-e,0,n+s,-a,o)}}function Ji(i,t,e,n,s,r,o,a){const l=t/2,c=e/2;if(t>=e){const h=c*s;return i.quad(-l-r,n-r*s,c+r,l+r,n-r*s,c+r,l+r,n+h,0,-l-r,n+h,0,o),i.quad(l+r,n-r*s,-c-r,-l-r,n-r*s,-c-r,-l-r,n+h,0,l+r,n+h,0,o),i.tri(l,n,c,l,n,-c,l,n+h,0,a),i.tri(-l,n,-c,-l,n,c,-l,n+h,0,a),h}const u=l*s;return i.quad(l+r,n-r*s,c+r,l+r,n-r*s,-c-r,0,n+u,-c-r,0,n+u,c+r,o),i.quad(-l-r,n-r*s,-c-r,-l-r,n-r*s,c+r,0,n+u,c+r,0,n+u,-c-r,o),i.tri(-l,n,c,l,n,c,0,n+u,c,a),i.tri(l,n,-c,-l,n,-c,0,n+u,-c,a),u}function yr(i,t,e,n,s,r,o,a,l){const c=t/2,u=e/2,h=n+s,d=n+r,f=(h-d)/e;i.quad(-c-o,h+o*f,u+o,c+o,h+o*f,u+o,c+o,d-o*f,-u-o,-c-o,d-o*f,-u-o,a),i.quad(-c,n,u,c,n,u,c,h,u,-c,h,u,l),i.quad(c,n,u,c,n,-u,c,d,-u,c,h,u,l),i.quad(-c,n,-u,-c,n,u,-c,h,u,-c,d,-u,l),i.quad(c,n,-u,-c,n,-u,-c,d,-u,c,d,-u,l)}const gn=.05;function xn(i,t,e,n,s,r,o,a=0){const l=t/2+gn;i.quad(e,s,l,n,s,l,n,r,l,e,r,l,o,a)}function Qu(i,t,e,n,s,r,o,a=0){const l=-t/2-gn;i.quad(n,s,l,e,s,l,e,r,l,n,r,l,o,a)}function Xl(i,t,e,n,s,r,o,a=0){const l=t/2+gn;i.quad(l,s,n,l,s,e,l,r,e,l,r,n,o,a)}function Yl(i,t,e,n,s,r,o,a=0){const l=-t/2-gn;i.quad(l,s,e,l,s,n,l,r,n,l,r,e,o,a)}function Oo(i,t,e,n){let s=1/0,r=-1/0;for(const[o,a]of[[-e,-n],[e,-n],[e,n],[-e,n],[0,0]]){const l=i.yAt(t.wx(o,a),t.wz(o,a));l<s&&(s=l),l>r&&(r=l)}return{lo:s,hi:r}}function M_(i,t,e,n,s,r,o,a,l,c,u,h,d){i.frame(e,0,n,o);const f=Oo(t,i,s/2,r/2),p=f.hi+.18;i.frame(e,p,n,o);const x=No[c%No.length],m=Ni[u%Ni.length],g=a===2?5.5:2.85,_=s/2,M=r/2,v=Wt(x,.7);i.box(-_,f.lo-p-.3,-M,_,0,M,v,null),i.box(-_,0,-M,_,g,M,x,l===3?Wt(m,1):null),d.polygons.push(Zn(i,-_,-M,_,M));let b=g;if(l===0){const w=Math.min(_,M)+.5;Wl(i,_+.5,M+.5,g,w*.44,m),b=g+w*.44}else l===1?b=g+Ji(i,s,r,g,.5,.4,m,x):l===2?(yr(i,s,r,g,1.35,.25,.5,m,x),xn(i,r,-_+.5,_-.5,g+.25,g+1.05,Xe,h()<.5?1:0),b=g+1.4):(i.box(-_-.15,g,-M-.15,_+.15,g+.3,M+.15,Wt(x,.92),m),b=g+.3);const E=Sr[Math.floor(h()*Sr.length)];for(let y=0;y<a;y++){const w=y*2.75+.85,T=w+1.3,R=Math.max(2,Math.floor(s/3.2)),P=y===0?Math.floor(h()*R):-1;for(let z=0;z<R;z++){const I=-_+(z+.5)/R*s;z===P?xn(i,r,I-.5,I+.5,0,2.1,E):xn(i,r,I-.85,I+.85,w,T,Xe,h()<.55?1:0)}const U=Math.max(1,Math.floor(s/3.8));for(let z=0;z<U;z++){const I=-_+(z+.5)/U*s;Qu(i,r,I-.75,I+.75,w,T,Xe,h()<.5?1:0)}const L=Math.max(1,Math.floor(r/4.2));for(let z=0;z<L;z++){const I=-M+(z+.5)/L*r;Xl(i,s,I-.7,I+.7,w,T,Xe,h()<.45?1:0),Yl(i,s,I-.7,I+.7,w,T,Xe,h()<.45?1:0)}}const S=h();if(a===1&&S<.36){const y=_*(.6+h()*.4),w=1.9;i.box(-y,-.12,M,y,.02,M+w,Ns),i.quad(-y-.2,2.3,M+w+.2,y+.2,2.3,M+w+.2,y+.2,2.7,M,-y-.2,2.7,M,Wt(m,.93));const T=Math.max(2,Math.round(y*2/3));for(let R=0;R<=T;R++){const P=-y+R/T*y*2;Kn(i,d,P,M+w-.06,.06,0,2.32,hn)}}else if(a===2&&S<.5){const y=_*(.55+h()*.45),w=2;i.box(-y,2.62,M,y,2.78,M+w,Uo,Ns,Wt(Uo,.8));const T=h()<.5?O(10469580):hn;i.box(-y,2.78,M+w-.05,y,3.75,M+w,T,null),i.box(-y,2.78,M,-y+.05,3.75,M+w,T,null),i.box(y-.05,2.78,M,y,3.75,M+w,T,null);for(const R of[-y+.1,y-.1])Kn(i,d,R,M+w-.12,.08,0,2.62,hn);h()<.5&&i.quad(-y-.2,5.05,M+w+.2,y+.2,5.05,M+w+.2,y+.2,5.4,M,-y-.2,5.4,M,Wt(m,.93))}if(h()<.1&&l<=1){const y=(h()-.5)*_,w=(h()-.5)*M*.6;i.box(y-.32,g,w-.32,y+.32,b+.55,w+.32,O(10116936))}if(h()<.24&&l<=1&&v_(i,s,r,g,o,l,h),h()<.15){const y=(h()<.5?-1:1)*(_+1.25),w=-M+1.3;i.cyl(y,f.hi-p,w,1.05,1.05,2.1,8,h()<.5?O(9347975):O(12370625),O(11120814)),d.circles.push([i.wx(y,w),i.wz(y,w),1.05])}}function v_(i,t,e,n,s,r,o){const a=t/2,l=e/2,c=r===0?.5:.4,u=.22,h=.74,d=.09;if(t>=e){const f=l+c,p=r===0?f*.44:l*.5*(1+c/l),x=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?a-l:a)*.7)*(.6+o()*.4),g=Math.cos(s)<0,_=g?1:-1,M=_*f*(1-u),v=_*f*(1-h),b=x+p*u+d,E=x+p*h+d;g?i.quad(-m,b,M,m,b,M,m,E,v,-m,E,v,Fo):i.quad(m,b,M,-m,b,M,-m,E,v,m,E,v,Fo)}else{const f=a+c,p=r===0?f*.44:a*.5*(1+c/a),x=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?l-a:l)*.7)*(.6+o()*.4),g=Math.sin(s)>0,_=g?1:-1,M=_*f*(1-u),v=_*f*(1-h),b=x+p*u+d,E=x+p*h+d;g?i.quad(M,b,m,M,b,-m,v,E,-m,v,E,m,Fo):i.quad(M,b,-m,M,b,m,v,E,m,v,E,-m,Fo)}}const S_=O(9075302);function y_(i,t,e,n,s){const[,r,o,a,l,c,u]=e;let h=-1/0,d=1/0;for(let p=0;p<r.length;p+=5){const[x,m,g,_,M]=r.slice(p,p+5);i.frame(x,0,m,M);const v=Zn(i,-g/2,-_/2,g/2,_/2);n.push(v),s.polygons.push(v);const b=Oo(t,i,g/2,_/2);h=Math.max(h,b.hi),d=Math.min(d,b.lo)}const f=h+.18;for(let p=0;p<r.length;p+=5)b_(i,f,d,r.slice(p,p+5),o,a,l,c,p===0?u:"",p===0,s)}function b_(i,t,e,[n,s,r,o,a],l,c,u,h,d,f,p){const x=Pe(Math.round(n*31+s*17)>>>0);i.frame(n,t,s,a);const m=O(u),g=O(h),_=l===2?5.5:2.85,M=r/2,v=o/2;if(i.box(-M,e-t-.3,-v,M,0,v,Wt(m,.7),null),i.box(-M,0,-v,M,_,v,m,c===3?g:null),c===0){const w=Math.min(M,v)+.5;Wl(i,M+.5,v+.5,_,w*.44,g)}else c===1?Ji(i,r,o,_,.5,.4,g,m):c===2?yr(i,r,o,_,1.1,.2,.5,g,m):i.box(-M-.15,_,-v-.15,M+.15,_+.3,v+.15,Wt(m,.92),g);if(r<5||o<3)return;const b=d.includes("g")?Math.min(4.8,r*.42):0;b&&xn(i,o,M-.4-b,M-.4,0,2.2,S_);const E=-M,S=M-(b?b+.8:0);for(let y=0;y<l;y++){const w=y*2.75+.85,T=w+1.3,R=Math.max(2,Math.floor((S-E)/3.2));for(let L=0;L<R;L++){const z=E+(L+.5)/R*(S-E);f&&y===0&&L===R-1?xn(i,o,z-.5,z+.5,0,2.1,Sr[0]):xn(i,o,z-.85,z+.85,w,T,Xe,x()<.5?1:0)}const P=Math.max(1,Math.floor(r/3.8));for(let L=0;L<P;L++){const z=-M+(L+.5)/P*r;Qu(i,o,z-.75,z+.75,w,T,Xe,x()<.5?1:0)}const U=Math.max(1,Math.floor(o/4.2));for(let L=0;L<U;L++){const z=-v+(L+.5)/U*o;Xl(i,r,z-.7,z+.7,w,T,Xe,x()<.45?1:0),Yl(i,r,z-.7,z+.7,w,T,Xe,x()<.45?1:0)}}if(d.includes("v")){const y=Math.min(M-.3,(S-E)/2),w=(E+S)/2,T=2.2;i.box(w-y,-.12,v,w+y,.02,v+T,Ns),i.quad(w-y-.2,2.3,v+T+.2,w+y+.2,2.3,v+T+.2,w+y+.2,2.7,v,w-y-.2,2.7,v,Wt(g,.93));const R=Math.max(2,Math.round(y*2/3));for(let P=0;P<=R;P++){const U=w-y+P/R*y*2;Kn(i,p,U,v+T-.06,.06,0,2.32,hn)}}if(d.includes("b")&&l===2){const y=M*.8,w=1.8;i.box(-y,2.62,v,y,2.78,v+w,Uo,Ns,Wt(Uo,.8)),i.box(-y,2.78,v+w-.05,y,3.75,v+w,hn,null),i.box(-y,2.78,v,-y+.05,3.75,v+w,hn,null),i.box(y-.05,2.78,v,y,3.75,v+w,hn,null);for(const T of[-y+.1,y-.1])Kn(i,p,T,v+w-.12,.08,0,2.62,hn)}}function E_(i,t,e,n,s,r,o,a,l,c,u){i.frame(e,0,n,o);const h=Oo(t,i,s/2,r/2);i.frame(e,h.hi+.05,n,o);const d=[O(14275778),O(9083526),O(12041145),O(7305842)][l%4],f=Ni[c%Ni.length],p=2.4,x=s/2,m=r/2;i.box(-x,h.lo-h.hi-.3,-m,x,p,m,d,null),u.polygons.push(Zn(i,-x,-m,x,m)),a===1?Ji(i,s,r,p,.32,.2,f,d):yr(i,s,r,p,.6,.1,.2,f,d),xn(i,r,-x*.72,x*.72,0,2.05,Wt(d,1.12))}const zo=[14243375,3112880,6266970,14725690,9134e3,4170656,14252591,4878261].map(O);function w_(i,t,e,n,s,r,o,a,l){const c={0:[8,4.2],1:[6.4,4.8],2:[3.6,3.6],3:[10.5,7.5]},[u,h]=c[r];i.frame(e,0,n,s);const d=Oo(t,i,u/2,h/2);i.frame(e,d.hi+.05,n,s);const f=d.lo-d.hi-.3;if(r===0){const p=[O(15129798),O(12175305),O(13219994),O(10465434)][o%4],x=Ni[(o*3+1)%Ni.length];i.box(-4,f,-2.1,4,.35,2.1,Wt(p,.6),null),i.box(-4,.35,-2.1,4,2.75,2.1,p,null),l.polygons.push(Zn(i,-4,-2.1,4,2.1)),Ji(i,8,4.2,2.75,.42,.35,x,p),i.box(-3.2,.2,2.1,1.2,.35,3.7,Ns),i.box(-3.2,.35,3.62,1.2,1.25,3.7,hn,null),l.polygons.push(Zn(i,-3.2,3.62,1.2,3.7)),xn(i,4.2,-2.8,-1.2,1.2,2.3,Xe,a()<.5?1:0),xn(i,4.2,-.4,.5,.35,2.4,Sr[o%Sr.length]),xn(i,4.2,1.4,3.2,1.2,2.3,Xe,a()<.5?1:0)}else if(r===1){const p=zo[o%zo.length];i.box(-2.9,.45,-2.3,2.9,2.55,-.1,hn,O(15263972),O(9079432)),i.box(-2.92,1.05,-2.32,2.92,1.3,-.08,p,null),i.box(-1.4,0,-2.2,-.8,.5,-.2,O(2763308)),i.box(.8,0,-2.2,1.4,.5,-.2,O(2763308)),xn(i,-.2,-2.2,-1,1.45,2.15,Xe,a()<.4?1:0),i.box(-2.6,0,-.1,2.6,2,2.3,xr(p,hn,.72),null),l.polygons.push(Zn(i,-2.9,-2.3,2.9,-.1),Zn(i,-2.6,-.1,2.6,2.3)),i.quad(-2.7,2,2.4,2.7,2,2.4,2.7,2.5,-.1,-2.7,2.5,-.1,xr(p,hn,.55))}else if(r===2){const p=zo[o%zo.length],x=1.75,m=6,g=[];i.blob(0,0,0,x,1.55,x,m,4,Wt(p,.85),p);for(let _=0;_<m;_++){const M=_/m*Math.PI*2,v=x*Math.cos(M),b=x*Math.sin(M);g.push(i.wx(v,b),i.wz(v,b))}l.polygons.push(g)}else{const p=O(14209732),x=O(5922659);i.box(-5.25,f,-3.75,5.25,3,3.75,p,null),l.polygons.push(Zn(i,-5.25,-3.75,5.25,3.75)),yr(i,10.5,7.5,3,1.5,.2,.7,x,O(9072466)),xn(i,7.5,-4.4,4.4,.3,2.6,Xe,a()<.6?1:0),i.box(-5.25,.05,3.75,5.25,.25,6.2,Ns),Xl(i,10.5,-2,2,.9,2.3,Xe,a()<.5?1:0),Yl(i,10.5,-2,2,.9,2.3,Xe,a()<.5?1:0)}}function T_(i){const t=i.length/2;let e={cx:0,cz:0,w:0,d:0,heading:0,area:1/0};for(let n=0;n<t;n++){const s=(n+1)%t;let r=i[s*2]-i[n*2],o=i[s*2+1]-i[n*2+1];const a=Math.hypot(r,o);if(a<.5)continue;r/=a,o/=a;let l=1/0,c=-1/0,u=1/0,h=-1/0;for(let f=0;f<t;f++){const p=i[f*2],x=i[f*2+1],m=p*r+x*o,g=-p*o+x*r;m<l&&(l=m),m>c&&(c=m),g<u&&(u=g),g>h&&(h=g)}const d=(c-l)*(h-u);if(d<e.area){const f=(l+c)/2,p=(u+h)/2;e={cx:f*r-p*o,cz:f*o+p*r,w:c-l,d:h-u,heading:Math.atan2(-o,r),area:d}}}return e}function td(i,t){const e=i.length/2,n=_r(i)>0?1:-1,s=[];for(let r=0;r<e;r++){const o=(r+e-1)%e,a=(r+1)%e;let l=i[r*2]-i[o*2],c=i[r*2+1]-i[o*2+1],u=i[a*2]-i[r*2],h=i[a*2+1]-i[r*2+1];const d=Math.hypot(l,c)||1,f=Math.hypot(u,h)||1;l/=d,c/=d,u/=f,h/=f;const p=-c*n,x=l*n,m=-h*n,g=u*n;let _=p+m,M=x+g;const v=Math.hypot(_,M)||1;_/=v,M/=v;const b=t/Math.max(.4,_*p+M*x);s.push(i[r*2]+_*b,i[r*2+1]+M*b)}return s}const A_=new Set(["house","detached","residential","terrace","yes;house","semidetached_house","bungalow"]),R_=new Set(["shed","garage","garages","toilets","hut"]);function ed(i,t,e,n,s,r,o){const a=e.p.map(T=>T/10),l=a.length/2;let c=0,u=0,h=1/0,d=-1/0;for(let T=0;T<l;T++){c+=a[T*2],u+=a[T*2+1];const R=t.yAt(a[T*2],a[T*2+1]);R<h&&(h=R),R>d&&(d=R)}c/=l,u/=l;const f=Math.abs(_r(a)),p=T_(a),x=f/(p.w*p.d||1),m=d+.15,g=Math.hypot(c-r[0],u-r[1])<420,_=e.k==="retail"||e.k==="commercial"||!!e.u||!!e.n||e.k==="yes"&&(f>300||g&&f>110),M=!_&&(A_.has(e.k)||e.k==="yes"&&f<=300),v=R_.has(e.k)||f<28;let b;e.l?b=e.l*3.1:e.k==="roof"?b=3:e.k==="hangar"?b=6.5:e.k==="church"?b=5:v?b=2.5:M?b=s()<.2?5.5:2.9:b=f>1200?7:f>500?5.6:4.3+s()*.8;const E={name:e.n,use:e.u,kind:e.k,poly:a,cx:c,cz:u,area:f,obb:p,floorY:m,wallH:b,topY:m+b};let S=26;for(let T=0;T<l;T++){const R=(T+1)%l,P=a[T*2],U=a[T*2+1],L=a[R*2],z=a[R*2+1],I=Math.hypot(L-P,z-U);if(I<4.5)continue;const B=(P+L)/2,$=(U+z)/2,N=n.nearest(B,$,S);if(!N)continue;let H=-(z-U)/I,K=(L-P)/I;if(H*(B-c)+K*($-u)<0&&(H=-H,K=-K),(N.px-B)*H+(N.pz-$)*K<N.dist*.5)continue;S=N.dist;const Y=Math.atan2(H,K),Z=(L-P)*Math.cos(Y)-(z-U)*Math.sin(Y);E.street={x:Z>0?P:L,z:Z>0?U:z,heading:Y,length:I}}if(i.frame(0,m,0,0),e.k==="roof"){const T=O(12172728);i.walls(a,b-.25,b,T),i.cap(a,b,T);for(let R=0;R<l;R++)Kn(i,o,a[R*2],a[R*2+1],.12,h-m,b-.25,O(6974832));return E}const y=_?[O(15328470),O(14275266),O(13620178),O(15128768),O(12568777),O(15789540),O(13220258)][Math.floor(s()*7)]:No[Math.floor(s()*No.length)],w=_&&f>300?[O(13225160),O(11777972),O(14211280),O(10133405)][Math.floor(s()*4)]:Ni[Math.floor(s()*Ni.length)];if(i.walls(a,h-m-.3,b,y),o==null||o.polygons.push(a),e.k==="church"){i.frame(p.cx,m,p.cz,p.heading);const T=Ji(i,p.w,p.d,b,1.15,.3,O(5922659),y);E.topY=m+b+T}else if((M||v||e.k==="hangar")&&x>.8&&l<=8)if(i.frame(p.cx,m,p.cz,p.heading),e.k==="hangar")E.topY=m+b+Ji(i,p.w,p.d,b,.3,.3,O(12172728),y);else if(v)yr(i,p.w,p.d,b,.5,.1,.2,w,y);else if(s()<.55){const T=Math.min(p.w,p.d)/2+.45;Wl(i,p.w/2+.45,p.d/2+.45,b,T*.44,w),E.topY=m+b+T*.44}else E.topY=m+b+Ji(i,p.w,p.d,b,.5,.4,w,y);else if(f<420&&!_){const T=td(a,Math.min(2.2,Math.sqrt(f)*.18)),R=1.15;for(let P=0;P<l;P++){const U=(P+1)%l;i.quad(a[P*2],b,a[P*2+1],a[U*2],b,a[U*2+1],T[U*2],b+R,T[U*2+1],T[P*2],b+R,T[P*2+1],w)}i.cap(T,b+R,Wt(w,1.05)),E.topY=m+b+R}else{i.cap(a,b-.05,w),i.walls(a,b,b+.45,Wt(y,.96)),E.topY=m+b+.45;const T=Math.min(6,Math.floor(f/220));for(let R=0;R<T;R++){const P=(s()-.5)*p.w*.5,U=(s()-.5)*p.d*.5,L=Math.cos(p.heading),z=Math.sin(p.heading),I=p.cx+P*L+U*z,B=p.cz-P*z+U*L;i.box(I-1.1,b,B-.8,I+1.1,b+.9,B+.8,O(11120304))}}if(!v&&e.k!=="hangar"){const T=Math.max(1,Math.round(b/3));for(let R=0;R<l;R++){const P=(R+1)%l,U=a[R*2],L=a[R*2+1],z=a[P*2],I=a[P*2+1],B=Math.hypot(z-U,I-L);if(B<3.2)continue;let $=-(I-L)/B,N=(z-U)/B;$*((U+z)/2-c)+N*((L+I)/2-u)<0&&($=-$,N=-N);const H=Math.atan2($,N),K=(z-U)*Math.cos(H)-(I-L)*Math.sin(H);i.frame(K>0?U:z,m,K>0?L:I,H);const Y=Math.floor(B/(_?4.2:3.4));for(let Z=0;Z<T;Z++){const F=Z*3+.9;if(!(_&&Z===0&&E.street&&Math.abs(H-E.street.heading)<.01))for(let J=0;J<Y;J++){const q=(J+.5)/Y*B;i.quad(q-.8,F,gn,q+.8,F,gn,q+.8,F+1.3,gn,q-.8,F+1.3,gn,Xe,s()<.5?1:0)}}}}if(_&&E.street&&!e.k.includes("church")&&f>60){const T=E.street;i.frame(T.x,m,T.z,T.heading);const R=ju[Math.floor(s()*ju.length)];if(i.quad(.5,.35,gn,T.length-.5,.35,gn,T.length-.5,2.7,gn,.5,2.7,gn,Xe,.9),g&&T.length>6&&b<9){i.box(.2,3,0,T.length-.2,3.16,2.7,R,Wt(R,.9),Wt(R,.75)),i.box(.2,2.75,2.62,T.length-.2,3.3,2.7,xr(R,hn,.25),null);const P=Math.max(1,Math.round(T.length/4.5));for(let U=0;U<=P;U++){const L=.35+U/P*(T.length-.7);Kn(i,o,L,2.56,.06,0,3,O(4869456))}}}return i.frame(),E}function C_(i,t,e,n,s=()=>!1){const r=new Je;r.name="buildings";const o=Rs(),a=900,l=new Map,c=(E,S)=>{const y=`${Math.floor(E/a)}:${Math.floor(S/a)}`;let w=l.get(y);return w||l.set(y,w=new se),w},u=i.meta,h=[(145.7285-u.origin[0])*u.metresPerDegree[0],-(-38.63385-u.origin[1])*u.metresPerDegree[1]],d=Pe(3996),f=[],p={polygons:[],circles:[]};for(const E of i.buildings){let S=0,y=0;for(let w=0;w<E.p.length;w+=2)S+=E.p[w],y+=E.p[w+1];if(S/=E.p.length*5,y/=E.p.length*5,!(s(S,y)||Xu(S,y))){if(n.has(E.n)){const w=new se,T=ed(w,t,E,e,Pe(1),h);T.custom=!0,f.push(T);continue}f.push(ed(c(S,y),t,E,e,d,h,p))}}const x=i.houses,m=Zu(i);for(let E=0;E<x.length;E+=Ol){const S=x[E]/4,y=x[E+1]/4,w=x[E+2]/10,T=x[E+3]/10,R=x[E+4]/10*(Math.PI/180),P=Pe(E*7919+17);s(S,y)||m(S,y)||(x[E+5]===1?E_(c(S,y),t,S,y,w,T,R,x[E+7],x[E+8],x[E+9],p):M_(c(S,y),t,S,y,w,T,R,x[E+6],x[E+7],x[E+8],x[E+9],P,p))}const g=i.cabins;for(let E=0;E<g.length;E+=K1){const S=g[E]/4,y=g[E+1]/4;s(S,y)||w_(c(S,y),t,S,y,g[E+2]/10*(Math.PI/180),g[E+3],g[E+4],Pe(E*31+5),p)}const _=[];for(const E of Is){const[S,y]=E[1];s(S,y)||y_(c(S,y),t,E,_,p)}const[M,v]=Do;if(!s(M,v)){const E=n_(c(M,v),t);_.push(...E),p.polygons.push(...E)}for(const E of kl){const[S,y]=E.centre;if(s(S,y))continue;const[w,T]=a_(S,y),R=td(E.roof,.18);__(c(S,y),t,E,R,w,T),_.push(R),p.polygons.push(R)}let b=0;for(const E of l.values()){E.frame(),b+=E.vertexCount/3;const S=new te(E.build(),o);S.castShadow=!0,S.receiveShadow=!0,r.add(S)}return{group:r,footprints:f,designedWalls:_,blockers:p,triangles:b}}class L_{constructor(t){X(this,"targetFps");X(this,"deadline",-1/0);X(this,"lastDraw");this.targetFps=t===30?30:60}get target(){return this.targetFps}setTarget(t){const e=t===30?30:60;return e===this.targetFps?!1:(this.targetFps=e,this.reset(),!0)}reset(){this.deadline=-1/0,this.lastDraw=void 0}takeFrame(t){if(t+1<this.deadline)return;const e=1e3/this.targetFps,n=this.deadline+e;this.deadline=n<=t?t+e:n;const s=this.lastDraw===void 0?0:(t-this.lastDraw)/1e3;return this.lastDraw=t,s}}const P_=.1,D_=180,I_=425,N_=650,U_=360,F_=480,O_=1.8,z_=450;function nd(i,t,e){const n=Math.max(i.x-t,0,t-i.x-i.size),s=Math.max(i.z-e,0,e-i.z-i.size);return Math.hypot(n,s)}function id(i){"close"in i&&i.close()}function Zl(i){i.texture.dispose(),id(i.image)}function B_(i,t){return new Promise((e,n)=>{if(t.aborted){n(t.reason);return}const s=new Image;s.crossOrigin="anonymous";const r=()=>{s.onload=s.onerror=null,t.removeEventListener("abort",o)},o=()=>{r(),s.removeAttribute("src"),n(t.reason)};s.onload=()=>{r(),e(s)},s.onerror=()=>{r(),n(new Error("Could not load ground detail"))},t.addEventListener("abort",o,{once:!0}),s.src=i})}class G_{constructor(t,e,n,s,r,o){X(this,"patches");X(this,"manifest");X(this,"manifestRetryAt",0);X(this,"load");X(this,"ready");X(this,"residents");X(this,"previous");X(this,"vx",0);X(this,"vz",0);X(this,"closed",!1);this.urls=t,this.small=e,this.detail=n,this.anisotropy=s,this.worker=r,this.markDirty=o,this.residents=n.maps.map(()=>{})}update(t,e,n,s,r){if(!this.urls.detail||this.closed)return;const o=this.previous,a=o?t-o.time:0,l=o&&Math.hypot(e-o.x,n-o.y,s-o.z)>D_;if(o&&!l&&a<P_)return;if(this.previous={time:t,x:e,y:n,z:s},!o||l||a>1)this.vx=this.vz=0;else{const h=Math.min(1,a*4);this.vx+=((e-o.x)/a-this.vx)*h,this.vz+=((s-o.z)/a-this.vz)*h}if(!this.patches){!this.manifest&&t>=this.manifestRetryAt&&this.loadManifest(this.urls.detail);return}const c=Math.min(O_,z_/Math.max(1,Math.hypot(this.vx,this.vz))),u=this.patches.map(h=>{const d=h.slot!==-1,f=Math.min(nd(h,e,s),nd(h,e+this.vx*c,s+this.vz*c)+70);return{patch:h,score:f,present:d}}).filter(({score:h,present:d})=>r<=(d?F_:U_)&&h<=(d?N_:I_)).sort((h,d)=>h.score-d.score).slice(0,this.residents.length).map(({patch:h})=>h);for(const h of this.residents)h&&!u.includes(h.patch)&&this.evict(h);if(this.load&&!u.includes(this.load.patch)&&this.cancelLoad(),this.ready&&!u.includes(this.ready.patch)&&(Zl(this.ready),this.ready=void 0),!this.load&&!this.ready){const h=u.find(d=>d.slot===-1&&t>=d.retryAt);h&&this.start(h)}}applyReady(){if(!this.ready)return;const t=this.residents.indexOf(void 0);if(t<0)return;const e=this.ready;this.ready=void 0,this.residents[t]=e;const{patch:n,texture:s}=e;n.slot=t,this.detail.maps[t].value=s,this.detail.rects[t].value.set(n.x,n.z,1/n.size,1)}dispose(){var t;if(!this.closed){this.closed=!0,(t=this.manifest)==null||t.abort(),this.cancelLoad(),this.ready&&Zl(this.ready),this.ready=void 0;for(const e of this.residents)e&&this.evict(e);this.detail.fallback.dispose()}}async loadManifest(t){var n;const e=this.manifest=new AbortController;try{const s=new URL(t,document.baseURI),r=await fetch(s,{signal:e.signal});if(r.status===404){this.patches=[];return}if(!r.ok)throw new Error("Could not load the ground detail list");const{patches:o}=await r.json();if(e.signal.aborted)return;this.patches=(Array.isArray(o)?o:[]).flatMap(a=>{var u;if(!a||!Number.isFinite(a.x)||!Number.isFinite(a.z)||!(a.size>0)||!Number.isFinite(a.size))return[];const l=this.small&&a.lo?a.lo:a.file;if(typeof l!="string"||!l)return[];const c=(u=this.urls.detailFiles)==null?void 0:u[l];try{return[{x:a.x,z:a.z,size:a.size,url:c?new URL(c,document.baseURI).href:new URL(l,s).href,slot:-1,failures:0,retryAt:0}]}catch{return[]}})}catch{e.signal.aborted||(this.manifestRetryAt=(((n=this.previous)==null?void 0:n.time)??0)+20)}finally{this.manifest=void 0}}start(t){const e=new AbortController,n=this.load={patch:t,controller:e},{signal:s}=e;this.worker.run({kind:"detail",url:t.url},()=>B_(t.url,s),s).then(r=>{if(this.load!==n){id(r);return}this.load=void 0,t.failures=0,t.retryAt=0;const o=new Ae(r);o.flipY=!("close"in r),o.colorSpace=Ue,o.anisotropy=this.anisotropy,o.generateMipmaps=!0,o.minFilter=yn,o.needsUpdate=!0,this.ready={patch:t,texture:o,image:r},this.markDirty()},()=>{var r;this.load===n&&(this.load=void 0,t.failures++,t.retryAt=(((r=this.previous)==null?void 0:r.time)??0)+Math.min(30,2**t.failures))})}cancelLoad(){const t=this.load;this.load=void 0,t==null||t.controller.abort()}evict(t){const e=t.patch.slot;this.detail.maps[e].value=this.detail.fallback,this.detail.rects[e].value.w=0,this.residents[e]=void 0,t.patch.slot=-1,Zl(t),this.markDirty()}}class k_{constructor(t,e,n){X(this,"items",[]);X(this,"v",new V);X(this,"visible",!0);X(this,"obstacles",[]);this.layer=t;for(const s of[...e].sort((r,o)=>r.priority-o.priority)){const r=document.createElement("button");r.type="button",r.tabIndex=-1,r.className=`inv-label inv-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",r.addEventListener("click",()=>n(s.id)),t.appendChild(r),this.items.push({place:s,el:r,w:0,h:0,shown:!1})}}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const o of this.items){o.w||(o.w=o.el.offsetWidth,o.h=o.el.offsetHeight);const a=o.place;this.v.set(a.x,a.y,a.z);const l=this.v.distanceTo(t.position);this.v.project(t);let c=this.v.z<1&&this.v.z>-1&&l<(a.maxDist??1/0)&&l<s;const u=(this.v.x*.5+.5)*e,h=(-this.v.y*.5+.5)*n,d=u-o.w/2,f=h-o.h,p=u+o.w/2,x=h;if(c&&(p<0||d>e||x<0||f>n)&&(c=!1),c){for(const m of r)if(d<m[2]+6&&p>m[0]-6&&f<m[3]+4&&x>m[1]-4){c=!1;break}}c&&(r.push([d,f,p,x]),o.el.style.transform=`translate3d(${Math.round(d)}px, ${Math.round(f)}px, 0)`),c!==o.shown&&(o.el.style.visibility=c?"visible":"hidden",o.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}const H_=[{id:"town",name:"A'Beckett Street",kind:"landmark",lat:-38.63372,lon:145.7283,blurb:"Inverloch's main street: bakeries, fish and chips, cafes and shops, a short walk from the inlet.",view:[380,58,-28],priority:1,lift:26},{id:"jetty",name:"Inverloch Jetty",kind:"landmark",lat:-38.63591,lon:145.73413,blurb:"Timber jetty reaching into Anderson Inlet, with the boat ramp alongside. A favourite for fishing and an evening walk.",view:[190,63,32],priority:1,lift:16},{id:"surf",name:"Surf Beach & Life Saving Club",kind:"landmark",lat:-38.64634,lon:145.70199,blurb:"Ocean beach facing Bass Strait, watched over by the Inverloch Surf Life Saving Club on the dune.",view:[330,62,-32],priority:1,lift:20},{id:"inlet",name:"Anderson Inlet",kind:"water",lat:-38.6412,lon:145.7445,blurb:"A shallow tidal estuary where the Tarwin River meets the sea. The sandbars here come from LiDAR survey data: slide the tide to cover and uncover them.",view:[3e3,50,8],priority:2},{id:"hub",name:"The Hub",kind:"landmark",lat:-38.63332,lon:145.72762,blurb:"Inverloch Community Hub on A'Beckett Street, home to the library and visitor information.",view:[300,60,20],priority:3,maxDist:2600,lift:18},{id:"espy",name:"Esplanade Hotel",kind:"landmark",lat:-38.63419,lon:145.72889,blurb:"The pub at the foreshore end of the main street.",view:[280,62,-40],priority:3,maxDist:2200,lift:18},{id:"rainbow",name:"Rainbow Park",kind:"landmark",lat:-38.63529,lon:145.72876,blurb:"Foreshore playground with picnic lawns and barbecues beside the inlet beach.",view:[150,60,14],priority:3,maxDist:2200,lift:14},{id:"bunurong",name:"Bunurong Environment Centre",kind:"landmark",lat:-38.63465,lon:145.72917,blurb:"Environment centre and shell museum on The Esplanade.",view:[260,60,-15],priority:5,maxDist:1100,lift:15},{id:"glade",name:"The Glade",kind:"landmark",lat:-38.63539,lon:145.7302,blurb:"Foreshore reserve and picnic shelter between the town centre and the jetty.",view:[300,62,5],priority:5,maxDist:1300,lift:13},{id:"oval",name:"Recreation Reserve",kind:"landmark",lat:-38.63194,lon:145.72681,blurb:"The town's football oval, a block back from the main street.",view:[460,58,15],priority:4,maxDist:2600,lift:16},{id:"school",name:"Primary School",kind:"landmark",lat:-38.63062,lon:145.72813,blurb:"Inverloch Primary School.",view:[380,58,0],priority:6,maxDist:1500,lift:14},{id:"bowls",name:"Bowls Club",kind:"landmark",lat:-38.63556,lon:145.73245,blurb:"Inverloch Bowls Club, two greens beside the foreshore.",view:[260,60,0],priority:6,maxDist:1300,lift:12},{id:"tennis",name:"Tennis Club & Oval",kind:"landmark",lat:-38.62722,lon:145.7372,blurb:"Tennis courts and a second football oval on the north-east side of town.",view:[520,58,10],priority:6,maxDist:2e3,lift:14},{id:"camping",name:"Foreshore Holiday Parks",kind:"landmark",lat:-38.63425,lon:145.7442,blurb:"Cabins, caravans and tents under the trees along The Esplanade, steps from the inlet.",view:[560,60,15],priority:4,maxDist:2800,lift:16},{id:"screw",name:"Screw Creek & Townsend Bluff",kind:"nature",lat:-38.6338,lon:145.7546,blurb:"A tidal creek in a nature conservation reserve, with a walking circuit up to the lookout on Townsend Bluff.",view:[900,60,-20],priority:3,lift:24},{id:"norman",name:"Point Norman",kind:"nature",lat:-38.648,lon:145.7118,blurb:"The corner where the surf beach turns into the inlet.",view:[900,60,-35],priority:4,maxDist:4200,lift:14},{id:"smythe",name:"Point Smythe",kind:"nature",lat:-38.6466,lon:145.7366,blurb:"The tip of the Venus Bay peninsula, across the entrance from town: coastal scrub, dunes and walking tracks.",view:[1300,58,150],priority:3,lift:22},{id:"racv",name:"RACV Inverloch Resort",kind:"landmark",lat:-38.6487,lon:145.6876,blurb:"Resort and villas on the Cape Paterson road, on the hill above the coast.",view:[520,60,40],priority:5,maxDist:3200,lift:18},{id:"strait",name:"Bass Strait",kind:"water",lat:-38.6565,lon:145.7075,blurb:"Open ocean. Swell rolls in to the surf beach from here.",view:[2300,50,-12],priority:4}];function V_(i,t){return H_.map(e=>{const n=(e.lon-i.origin[0])*i.metresPerDegree[0],s=-(e.lat-i.origin[1])*i.metresPerDegree[1],r=Math.max(t.yAt(n,s),0);return{...e,x:n,z:s,y:r+(e.lift??6)}})}function _n(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}const W_=new Set(["Inverloch Surf Life Saving Club","The Hub"]),Ye=O(10126440),De=O(6113848),Mn=O(16053230),Us=O(11842219),Ee=O(7304312),br=O(3163994),Fs=O(13644844),Os=O(15909424),X_=O(16119022),Kl=2.05*Yn;function sd(i,t,e,n=35){let s=1/0,r=0,o=1;for(let a=0;a<24;a++){const l=a/24*Math.PI*2,c=i.metresAt(t+Math.cos(l)*n,e+Math.sin(l)*n)+i.metresAt(t+Math.cos(l)*n*2,e+Math.sin(l)*n*2);c<s&&(s=c,r=Math.cos(l),o=Math.sin(l))}return[r,o]}function Bo(i){let t=0,e=0;for(let n=0;n<i.length;n+=2)t+=i[n],e+=i[n+1];return[t/(i.length/2)/10,e/(i.length/2)/10]}function Y_(i,t,e){const n=[];for(let M=0;M<e.length;M+=2)n.push([e[M]/10,e[M+1]/10]);t.metresAt(n[0][0],n[0][1])<t.metresAt(n[n.length-1][0],n[n.length-1][1])&&n.reverse();const s=1.7,r=Kl,[o,a]=n[0];let l=o-n[1][0],c=a-n[1][1];const u=Math.hypot(l,c)||1;l/=u,c/=u;let h=0;for(;h<30&&t.yAt(o+l*h,a+c*h)<r-.25;)h+=1.5;const d=Math.max(t.yAt(o+l*h,a+c*h),r-1.2),f=Math.atan2(-l,-c);i.frame(o+l*h,0,a+c*h,f),i.quad(-s,d+.05,0,s,d+.05,0,s,r,h,-s,r,h,Ye),i.quad(-s,d-1.2,0,-s,r-.4,h,-s,r,h,-s,d+.05,0,De),i.quad(s,d-1.2,0,s,d+.05,0,s,r,h,s,r-.4,h,De);for(let M=0;M<n.length-1;M++){const[v,b]=n[M],[E,S]=n[M+1],y=Math.hypot(E-v,S-b),w=Math.atan2(E-v,S-b);i.frame(v,r,b,w);const T=Math.ceil(y/1.2);for(let P=0;P<T;P++){const U=P/T*y,L=(P+1)/T*y;i.box(-s,-.14,U,s,0,L,Wt(Ye,.9+P*7%5*.04),void 0,De)}i.box(-s+.25,-.5,0,-s+.5,-.14,y,De,null),i.box(s-.5,-.5,0,s-.25,-.14,y,De,null);const R=Math.max(1,Math.round(y/3.6));for(let P=0;P<=R;P++){const U=P/R*y;for(const L of[-1,1]){const z=L*(s-.12),I=t.yAt(i.wx(z,U),i.wz(z,U));i.cyl(z,I-r-.6,U,.17,.15,r-I+.6+1.1,6,De,Wt(Ye,.8))}i.box(-s,-.78,U-.12,s,-.5,U+.12,De),i.quad(-s+.1,-2.6,U,s-.1,-.8,U,s-.1,-.6,U,-s+.1,-2.4,U,Wt(De,.9))}for(const P of[-1,1]){const U=P*(s-.12);i.box(U-.05,1.02,0,U+.05,1.1,y,Ye,void 0,De),i.box(U-.03,.52,0,U+.03,.58,y,Ye,void 0,De)}i.box(-s,-.14,-s,s,0,.01,Ye,void 0,De)}const[p,x]=n[n.length-1],[m,g]=n[n.length-2],_=Math.atan2(p-m,x-g);i.frame(p,r,x,_),i.box(-3.2,-.14,0,3.2,0,5.2,Wt(Ye,.96),void 0,De);for(const[M,v]of[[-3.05,.2],[3.05,.2],[-3.05,5],[3.05,5],[0,5]]){const b=t.yAt(i.wx(M,v),i.wz(M,v));i.cyl(M,b-r-.6,v,.19,.17,r-b+.6+(M===0?0:1.1),6,De,Wt(Ye,.8))}i.box(-3.1,1.02,4.9,3.1,1.1,5,Ye,void 0,De),i.box(-3.1,1.02,0,-3,1.1,5,Ye,void 0,De),i.box(3,1.02,0,3.1,1.1,5,Ye,void 0,De),i.cyl(2.6,0,4.5,.07,.05,4.6,5,Ee),i.blob(2.6,4.75,4.5,.28,.2,.28,6,3,O(16773320),void 0,1.6),i.box(-.35,-3.6,5.22,-.3,.9,5.28,Ee,null),i.box(.3,-3.6,5.22,.35,.9,5.28,Ee,null);for(let M=-3.3;M<.6;M+=.42)i.box(-.3,M,5.22,.3,M+.05,5.28,Ee);return i.frame(),{head:new V(p,r,x),points:n}}function Z_(i,t,e,n){const[s,r]=sd(t,e,n,25),o=Math.atan2(s,r);i.frame(e,0,n,o);const a=4.2,l=-8,c=[];for(let p=l;p<=46;p+=3){const x=t.yAt(i.wx(0,p),i.wz(0,p));if(c.push([p,x]),x<-1.6*Yn)break}const u=c[0][1]+.12,h=Math.min(c[c.length-1][1]+.25,-.9*Yn),d=c[c.length-1][0],f=c.length-1;for(let p=0;p<f;p++){const x=l+(d-l)*p/f,m=l+(d-l)*(p+1)/f,g=u+(h-u)*p/f,_=u+(h-u)*(p+1)/f;i.quad(-a,g,x,-a,_,m,a,_,m,a,g,x,p%2?Us:Wt(Us,.94));for(const M of[-1,1])i.quad(M*a,g-1.5,x,M*a,_-1.5,m,M*a,_+.15,m,M*a,g+.15,x,Wt(Us,.8))}i.frame()}function K_(i,t,e,n){const[s,r]=sd(t,e.cx,e.cz,60),o=e.obb;let a=o.heading,l=o.w,c=o.d,u=-1/0;for(let S=0;S<4;S++){const y=o.heading+S*Math.PI/2,w=Math.sin(y)*s+Math.cos(y)*r;w>u&&(u=w,a=y,l=S%2?o.d:o.w,c=S%2?o.w:o.d)}const h=l/2,d=c/2;i.frame(o.cx,e.floorY,o.cz,a);const f=O(13223611),p=O(15394522),x=O(6975604);i.box(-h,-4,-d,h,3.1,d,f,null),i.box(-h,3.1,-d,h,6.1,d,p,null),n.polygons.push(Zn(i,-h,-d,h,d));const m=Math.max(2,Math.floor(l/5));for(let S=0;S<m;S++){const y=-h+(S+.5)/m*l;i.quad(y-1.7,.05,d+.05,y+1.7,.05,d+.05,y+1.7,2.7,d+.05,y-1.7,2.7,d+.05,S%2?Fs:Os)}i.quad(-h+.6,3.6,d+.05,h-.6,3.6,d+.05,h-.6,5.7,d+.05,-h+.6,5.7,d+.05,br,.9),i.box(-h-.6,2.95,d,h+.6,3.12,d+3.4,Us,Ye,Wt(Us,.8)),i.box(-h-.6,3.12,d+3.32,h+.6,4.15,d+3.4,O(10469580),null);for(const S of[-h-.4,-h/3,h/3,h+.4])Kn(i,n,S,d+3.12,.12,-4,2.95,Ee);i.quad(-h-.8,7.5,d+3.8,h+.8,7.5,d+3.8,h+.8,6.2,-d-.6,-h-.8,6.2,-d-.6,x),i.quad(-h,6.1,d,h,6.1,d,h,7.1,d,-h,7.1,d,p),i.quad(h,6.1,d,h,6.1,-d,h,6.3,-d,h,7.1,d,p),i.quad(-h,6.1,-d,-h,6.1,d,-h,7.1,d,-h,6.3,-d,p);const g=h-2.2,_=d-1.8;i.box(g-1.8,6.1,_-1.8,g+1.8,9.2,_+1.8,p,null),i.box(g-1.85,9.2,_-1.85,g+1.85,10.5,_+1.85,br,null,null,.7),i.box(g-2.3,10.5,_-2.3,g+2.3,10.72,_+2.3,x),i.cyl(g,10.72,_,.06,.04,5.2,5,Mn),i.quad(g,15.6,_,g+1.9,15.6,_,g+1.9,14.5,_,g,14.5,_,Fs),i.quad(g,14.5,_,g+1.9,14.5,_,g+1.9,13.4,_,g,13.4,_,Os);for(let S=0;S<4;S++){const y=-h+(S+.5)/4*l;i.quad(y+.9,3.9,-d-.05,y-.9,3.9,-d-.05,y-.9,5.3,-d-.05,y+.9,5.3,-d-.05,br,S%2)}let M=d+14;for(;M<160&&t.metresAt(o.cx+s*M,o.cz+r*M)>1.75;)M+=3;const v=o.cx+s*M,b=o.cz+r*M,E=Math.atan2(s,r);i.frame(v,t.yAt(v,b),b,E);for(const S of[-1,1]){const y=S*32,w=t.yAt(i.wx(y,0),i.wz(y,0))-t.yAt(v,b);i.cyl(y,w,0,.05,.04,4.4,5,Mn),i.quad(y,w+4.4,0,y+.95,w+4.4,0,y+.95,w+3.1,0,y,w+3.1,0,Fs),i.quad(y,w+3.1,0,y+.95,w+3.1,0,y+.95,w+1.8,0,y,w+1.8,0,Os)}for(const[S,y]of[[-1.5,-5.5],[1.5,-5.5],[-1.5,-8.5],[1.5,-8.5]])i.cyl(S,0,y,.04,.04,2.2,4,Ee);i.tri(-1.7,2.2,-5.3,1.7,2.2,-5.3,0,3,-7,Fs),i.tri(1.7,2.2,-8.7,-1.7,2.2,-8.7,0,3,-7,Fs),i.tri(1.7,2.2,-5.3,1.7,2.2,-8.7,0,3,-7,Os),i.tri(-1.7,2.2,-8.7,-1.7,2.2,-5.3,0,3,-7,Os),i.blob(6,.35,-6,.95,.4,2.1,8,3,O(14238751),O(15755818)),i.box(5.6,.3,-7.9,6.4,.95,-7.5,O(2763308));for(let S=0;S<4;S++)i.box(-7+S*.5,.2,-7.2,-6.85+S*.5,.75,-4.6,S%2?Os:O(3116992));return i.frame(),{beach:new V(v,t.yAt(v,b),b),seaward:[s,r]}}function rd(i,t){const e=i.length/2;let n=0;for(let o=0;o<e;o++){const a=(o+1)%e;n+=i[o*2]*i[a*2+1]-i[a*2]*i[o*2+1]}const s=n>0?1:-1,r=[];for(let o=0;o<e;o++){const a=(o+e-1)%e,l=(o+1)%e;let c=i[o*2]-i[a*2],u=i[o*2+1]-i[a*2+1],h=i[l*2]-i[o*2],d=i[l*2+1]-i[o*2+1];const f=Math.hypot(c,u)||1,p=Math.hypot(h,d)||1;c/=f,u/=f,h/=p,d/=p;const x=-u*s,m=c*s;let g=x-d*s,_=m+h*s;const M=Math.hypot(g,_)||1;g/=M,_/=M;const v=t/Math.max(.45,g*x+_*m);r.push(i[o*2]+g*v,i[o*2+1]+_*v)}return r}function q_(i,t,e,n){i.frame(0,e.floorY,0,0);const s=O(11111014),r=O(15328470),o=O(9410458);let a=1/0;for(let h=0;h<e.poly.length;h+=2)a=Math.min(a,t.yAt(e.poly[h],e.poly[h+1]));const l=e.poly.length/2;i.walls(e.poly,a-e.floorY-.3,3.2,s),i.walls(e.poly,3.2,6.2,r),n.polygons.push(e.poly);const c=rd(e.poly,3.2),u=rd(e.poly,4.4);for(let h=0;h<l;h++){const d=(h+1)%l;i.quad(e.poly[h*2],6.6,e.poly[h*2+1],e.poly[d*2],6.6,e.poly[d*2+1],c[d*2],6.05,c[d*2+1],c[h*2],6.05,c[h*2+1],o)}if(i.walls(e.poly,6.2,6.6,Wt(r,.92)),i.walls(c,6.05,7.9,br,.8),i.cap(c,7.9,Wt(o,1.08)),i.walls(u,7.9,8.3,Wt(o,.9)),i.cap(u,8.3,o),e.street){const h=e.street;i.frame(h.x,e.floorY,h.z,h.heading),i.quad(.6,.3,.06,h.length-.6,.3,.06,h.length-.6,5.6,.06,.6,5.6,.06,br,.9),i.box(h.length*.3,3.3,0,h.length*.7,3.5,3.4,O(14263361),void 0,Wt(O(14263361),.8)),Kn(i,n,h.length*.3+.3,3.2,.1,0,3.3,Ee),Kn(i,n,h.length*.7-.3,3.2,.1,0,3.3,Ee)}i.frame()}function un(i,t,e,n,s,r=X_){const o=e.length,a=.22,l=s?o:o-1;for(let c=0;c<l;c++){const[u,h]=e[c],[d,f]=e[(c+1)%o];let p=-(f-h),x=d-u;const m=Math.hypot(p,x)||1;p=p/m*n*.5,x=x/m*n*.5;const g=t.yAt(u,h)+a,_=t.yAt(d,f)+a;i.quad(u+p,g,h+x,d+p,_,f+x,d-p,_,f-x,u-p,g,h-x,r)}}function J_(i,t,e,n,s){const r=[];for(let M=0;M<n.length;M+=2)r.push([n[M]/10,n[M+1]/10]);const[o,a]=Bo(n);let l=0,c=0,u=0;for(const[M,v]of r)l+=(M-o)**2,c+=(v-a)**2,u+=(M-o)*(v-a);const h=.5*Math.atan2(2*u,l-c),d=Math.cos(h),f=Math.sin(h);let p=0,x=0;for(const[M,v]of r)p=Math.max(p,Math.abs((M-o)*d+(v-a)*f)),x=Math.max(x,Math.abs(-(M-o)*f+(v-a)*d));p-=5,x-=5;const m=(M,v)=>[o+M*d-v*f,a+M*f+v*d],g=[];for(let M=0;M<72;M++){const v=M/72*Math.PI*2;g.push(m(Math.cos(v)*p,Math.sin(v)*x))}un(t,e,g,.35,!0),un(t,e,[m(-25,-25),m(25,-25),m(25,25),m(-25,25)],.3,!0);const _=M=>Array.from({length:24},(v,b)=>m(Math.cos(b/24*Math.PI*2)*M,Math.sin(b/24*Math.PI*2)*M));un(t,e,_(5),.3,!0),un(t,e,_(1.5),.3,!0);for(const M of[-1,1]){un(t,e,[m(M*p,-3.2),m(M*(p-9),-3.2),m(M*(p-9),3.2),m(M*p,3.2)],.3,!1);const v=[];for(let b=-8;b<=8;b++){const E=b/8*1.05,S=M*(p-50*Math.cos(E)),y=50*Math.sin(E);(S/p)**2+(y/x)**2<1&&v.push(m(S,y))}v.length>2&&un(t,e,v,.3,!1);for(const[b,E]of[[-3.2,9.5],[3.2,9.5],[-9.6,6.2],[9.6,6.2]]){const[S,y]=m(M*p,b);i.frame(S,e.yAt(S,y),y,0),i.cyl(0,0,0,.11,.09,E,6,Mn),i.cyl(0,0,0,.2,.2,1.6,6,b*b<12?O(2973608):O(12597806))}}if(s)for(const[M,v]of[[-.62,-1],[.62,-1],[-.62,1],[.62,1]]){const[b,E]=m(M*(p+6),v*(x+9));i.frame(b,e.yAt(b,E),E,Math.atan2(o-b,a-E)),i.cyl(0,0,0,.28,.16,24,6,Ee),i.box(-1.7,24,-.2,1.7,25.3,.2,O(4869972)),i.quad(-1.6,24.1,.22,1.6,24.1,.22,1.6,25.2,.22,-1.6,25.2,.22,O(16774876),2.2)}i.frame()}function $_(i,t,e,n,s){const r=[];for(let v=0;v<n.length;v+=2)r.push([n[v]/10,n[v+1]/10]);if(r.length<4)return;if(s==="bowls"){un(t,e,r,.5,!0,O(15328986));return}const[o,a,l,c]=r,u=Math.hypot(a[0]-o[0],a[1]-o[1])>Math.hypot(l[0]-a[0],l[1]-a[1]),h=u?o:a,d=u?a:l,f=u?l:c,p=u?c:o,x=(v,b)=>{const E=h[0]+(d[0]-h[0])*v,S=h[1]+(d[1]-h[1])*v,y=p[0]+(f[0]-p[0])*v,w=p[1]+(f[1]-p[1])*v;return[E+(y-E)*b,S+(w-S)*b]},m=.14;un(t,e,[x(0,0),x(1,0),x(1,1),x(0,1)],m,!0),un(t,e,[x(0,.125),x(1,.125)],m,!1),un(t,e,[x(0,.875),x(1,.875)],m,!1),un(t,e,[x(.23,.125),x(.23,.875)],m,!1),un(t,e,[x(.77,.125),x(.77,.875)],m,!1),un(t,e,[x(.23,.5),x(.77,.5)],m,!1);const g=x(.5,-.04),_=x(.5,1.04),M=e.yAt(g[0],g[1])+.2;i.frame(0,M,0,0),i.quad(g[0],0,g[1],_[0],0,_[1],_[0],.95,_[1],g[0],.95,g[1],O(2830131)),i.quad(g[0],.95,g[1],_[0],.95,_[1],_[0],1.05,_[1],g[0],1.05,g[1],Mn);for(const v of[g,_])i.cyl(v[0],0,v[1],.06,.06,1.1,5,Ee);i.frame()}const ui=[14826299,15764004,15909424,5025616,3117008,8280002].map(O);function j_(i,t,e,n,s){const[r,o]=Bo(e),a=t.yAt(r,o)+.05,l=s()*Math.PI;i.frame(r,a,o,l);const c=(d,f,p,x)=>{for(const[m,g]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.cyl(d+m,0,f+g,.07,.07,p+2,5,O(8018492));i.box(d-1,p-.1,f-1,d+1,p,f+1,Ye,void 0,De),i.cyl(d,p+2,f,1.5,0,1,4,x)};c(-2.2,0,1.5,ui[0]),c(2.2,0,2.1,ui[4]),i.box(-1.2,1.4,-.35,1.2,1.5,.35,Ye),i.quad(3.2,2.1,-.4,6.4,.15,-.4,6.4,.15,.4,3.2,2.1,.4,ui[2]),i.quad(-3.2,1.5,.4,-5.6,.15,.4,-5.6,.15,-.4,-3.2,1.5,-.4,ui[1]);const u=0,h=5.2;for(const d of[-2.2,2.2])i.quad(u+d,0,h-1.1,u+d+.08,0,h-1.1,u+d+.08,2.6,h,u+d,2.6,h,Ee),i.quad(u+d,0,h+1.1,u+d+.08,0,h+1.1,u+d+.08,2.6,h,u+d,2.6,h,Ee);i.box(u-2.25,2.55,h-.05,u+2.25,2.65,h+.05,ui[3]);for(const d of[-1.1,0,1.1])i.box(u+d-.25,.5,h-.1,u+d+.25,.56,h+.1,O(2763308)),i.box(u+d-.24,.56,h-.01,u+d-.22,2.55,h+.01,Ee,null),i.box(u+d+.22,.56,h-.01,u+d+.24,2.55,h+.01,Ee,null);if(n){i.cyl(-6.5,0,-5.5,.09,.07,5.2,5,Ee);for(let d=0;d<6;d++){const f=d/6*Math.PI*2,p=-6.5+Math.cos(f)*3.2,x=-5.5+Math.sin(f)*3.2;i.quad(p-.04,0,x,p+.04,0,x,-6.46,5.1,-5.5,-6.54,5.1,-5.5,O(3104672))}for(let d=0;d<6;d++){const f=-9+d*3.4,p=ui[d],x=4.6,m=3.3;i.cyl(f,0,-11,.08,.07,x,5,Ee),i.cyl(f+1.7,0,-7.2,.08,.07,m,5,Ee),i.tri(f,x,-11,f+3.4,x,-11,f+1.7,m,-7.2,p)}i.cyl(11.399999999999999,0,-11,.08,.07,4.6,5,Ee),i.cyl(6.5,.3,5.5,1.3,1.3,.12,10,ui[5],ui[2]),i.cyl(6.5,0,5.5,.1,.1,1.1,5,Ee);for(let d=0;d<3;d++)i.blob(9.5+d*1.6,.55,-1.5,.3,.3,.55,5,3,ui[(d*2+1)%6])}i.frame()}function Q_(i,t,e){const n=[];for(let h=0;h<e.length;h+=2)n.push([e[h]/10,e[h+1]/10]);const[s,r]=Bo(e),o=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1])>Math.hypot(n[2][0]-n[1][0],n[2][1]-n[1][1])?[n[0],n[1]]:[n[1],n[2]],a=Math.atan2(o[1][0]-o[0][0],o[1][1]-o[0][1]),l=Math.hypot(o[1][0]-o[0][0],o[1][1]-o[0][1])/2-1;i.frame(s,t.yAt(s,r)+.1,r,a);const c=O(13092286),u=Wt(c,.88);for(const h of[-1,1]){const d=h*l,f=[[0,0],[1.4,.35],[2.4,1.1],[3,2]];for(let p=0;p<3;p++){const[x,m]=f[p],[g,_]=f[p+1],M=d-h*(3-x),v=d-h*(3-g);h>0?i.quad(-4,m,M,4,m,M,4,_,v,-4,_,v,p%2?c:u):i.quad(4,m,M,-4,m,M,-4,_,v,4,_,v,p%2?c:u)}i.box(-4,0,Math.min(d,d+h*1.2),4,2,Math.max(d,d+h*1.2),u,c)}i.box(-1.5,0,-1.2,1.5,.45,1.2,u,c),i.quad(-1.5,.45,1.2,1.5,.45,1.2,1.5,0,3,-1.5,0,3,c),i.quad(1.5,.45,-1.2,-1.5,.45,-1.2,-1.5,0,-3,1.5,0,-3,c),i.box(3.2,.45,-2.5,3.28,.5,2.5,Ee),i.frame()}function tM(i,t){const e=t.obb,n=e.w>=e.d,s=(n?e.w:e.d)/2;i.frame(e.cx,t.floorY,e.cz,e.heading);const r=n?s+1.2:0,o=n?0:s+1.2,a=O(15262418);i.box(r-1.4,-1,o-1.4,r+1.4,t.wallH+4.6,o+1.4,a,null),i.cyl(r,t.wallH+4.6,o,2.1,0,4.2,4,O(5922659)),i.box(r-.07,t.wallH+8.8,o-.07,r+.07,t.wallH+10.6,o+.07,Mn),i.box(r-.5,t.wallH+9.8,o-.07,r+.5,t.wallH+9.95,o+.07,Mn),i.frame()}function eM(i,t,e,n){i.frame(e,t.yAt(e,n),n,.4);const s=46;for(let r=0;r<6;r++){const o=r/6*s,a=1.5-r/6*1.1,l=1.5-(r+1)/6*1.1;i.cyl(0,o,0,a,l,s/6,3,r%2?Mn:Fs)}i.cyl(0,s,0,.08,.05,5,4,Ee),i.blob(0,s+5.1,0,.3,.3,.3,5,3,O(16726832),void 0,2.5);for(const[r,o]of[[.3,38],[2.4,35],[4.4,40]])i.cyl(Math.cos(r)*.9,o,Math.sin(r)*.9,.55,.55,.35,8,Mn,Mn);i.box(2.5,0,-1.5,5.5,2.6,1.5,O(13619919),O(9080716)),i.frame()}function nM(i,t,e,n,s,r){const o=s.nearest(e,n,60),a=o?Math.atan2(o.px-e,o.pz-n):0;i.frame(e,t.yAt(e,n)+.1,n,a);const l=O(3116874);for(const[c,u]of[[-6,3.5],[6,3.5],[-6,9.5],[6,9.5]])Kn(i,r,c,u,.2,0,5,Mn);i.box(-8,5,2,8,5.25,11,Mn,O(14277590),O(15921902),.5),i.box(-8.05,5.25,1.95,8.05,5.9,11.05,l,O(14277590));for(const c of[-4,0,4])i.box(c-1.3,0,6.2,c+1.3,.2,6.8,Us),i.box(c-.4,.2,6.25,c+.4,1.7,6.75,Mn,l),r.polygons.push(Zn(i,c-.4,6.25,c+.4,6.75));i.frame()}function iM(i,t,e,n,s){for(let r=0;r<3;r++){const o=e+(s()-.5)*16,a=n+(s()-.5)*16;i.frame(o,t.yAt(o,a)+.05,a,s()*Math.PI),i.box(-1,.7,-.4,1,.78,.4,Ye,void 0,De),i.box(-1,.4,-.85,1,.46,-.6,Ye,void 0,De),i.box(-1,.4,.6,1,.46,.85,Ye,void 0,De),i.box(-.75,0,-.7,-.65,.7,.7,Ee,null),i.box(.65,0,-.7,.75,.7,.7,Ee,null)}i.frame()}function sM(i){if(!i.hasDetail)return null;const{town:t,hf:e,roads:n,paths:s}=i,r=new se,o=Pe(4411),a=[12597547,3108687,15921902,3426654,9268810,14266938,10134443].map(O),l=O(7301730),c=O(3103290),u=[O(13115434),O(15254046)],h=t.houses,d=Zu(t),f=[];for(let E=0;E<h.length;E+=Ol)h[E+5]!==1&&f.push(h[E]/4,h[E+1]/4);const p=f.length;for(const[E,S]of s_)f.push(E,S);for(let E=0;E<f.length;E+=2){const S=f[E],y=f[E+1];if(!i.isDetail(S,y)||i.isClear(S,y))continue;const w=n.nearest(S,y,45),T=o()<.5?-1:1,R=T*(2.5+o()*2.5),P=Math.floor(o()*a.length),U=o()<.7;if(!w||E<p&&d(S,y))continue;const L=w.cls<=3?6.4:3.6;if(w.dist<L+3)continue;const z=(S-w.px)/w.dist,I=(y-w.pz)/w.dist,B=-I,$=z,N=Math.atan2(z,I),H=w.px+z*L+B*R,K=w.pz+I*L+$*R;if(!i.isClear(H,K)&&(r.frame(H,e.yAt(H,K),K,N),r.box(-.05,0,-.05,.05,.95,.05,l),r.box(-.17,.95,-.22,.17,1.22,.22,a[P],Wt(a[P],.8)),U)){const Y=w.px+z*(L-1.1)+B*(R+T*1.5),Z=w.pz+I*(L-1.1)+$*(R+T*1.5);r.frame(Y,e.yAt(Y,Z),Z,N),u.forEach((F,J)=>{r.box(J*.72-.28,0,-.33,J*.72+.28,.96,.33,c),r.box(J*.72-.3,.96,-.36,J*.72+.3,1.04,.36,F)})}}const x=O(7034692),m=O(5917242),g=O(2829102),_=O(14276303),M=42,v=new se;for(const E of s){if(E.cls>3||E.flags)continue;const S=E.pts.length/3;let y=M*.4,w=null;for(let T=1;T<S;T++){const R=E.pts[T*3-3],P=E.pts[T*3-1],U=E.pts[T*3],L=E.pts[T*3+2],z=Math.hypot(U-R,L-P);if(y+=z,y<M)continue;y=0;const I=(U-R)/(z||1),B=(L-P)/(z||1),$=E.width/2+2.5,N=U+B*$,H=L-I*$;if(!i.isDetail(N,H)||i.isClear(N,H)||!e.inside(N,H,20)){w=null;continue}const K=e.yAt(N,H);v.frame(N,K,H,Math.atan2(I,B)),v.cyl(0,0,0,.15,.1,9.2,6,x),v.box(-1.15,8.45,-.06,1.15,8.58,.06,m);for(const Z of[-.95,0,.95])v.box(Z-.04,8.58,-.04,Z+.04,8.72,.04,_);const Y={x:N,y:K+8.72,z:H,nx:B,nz:-I};if(w&&Math.hypot(Y.x-w.x,Y.z-w.z)<M*1.8){v.frame();for(const Z of[-.95,0,.95]){const F=w.x+w.nx*Z,J=w.z+w.nz*Z,q=Y.x+Y.nx*Z,nt=Y.z+Y.nz*Z,et=(F+q)/2,st=(J+nt)/2,wt=(w.y+Y.y)/2-.5;for(const[xt,Ft,kt,ht,dt,pt]of[[F,w.y,J,et,wt,st],[et,wt,st,q,Y.y,nt]])v.quad(xt,Ft,kt,ht,dt,pt,ht,dt+.035,pt,xt,Ft+.035,kt,g),v.quad(xt,Ft,kt,ht,dt,pt,ht+Y.nx*.035,dt,pt+Y.nz*.035,xt+Y.nx*.035,Ft,kt+Y.nz*.035,g)}}w=Y}}if(!r.vertexCount&&!v.vertexCount)return null;const b=new te(r.build(),Rs());if(b.castShadow=!0,b.receiveShadow=!0,b.name="street-detail",v.vertexCount){const E=new te(v.build(),Rs());E.castShadow=!1,E.receiveShadow=!0,E.name="power-poles",b.add(E)}return b}function rM(i){const{town:t,hf:e,paths:n}=i,s=120,r=new Map,o=t.houses;for(let R=0;R<o.length;R+=Ol){const P=Math.floor(o[R]/4/s)*4096+Math.floor(o[R+1]/4/s)+8390656;r.set(P,(r.get(P)??0)+1)}const[a,l]=_n(t.meta,-38.63385,145.7285),c=(R,P)=>(r.get(Math.floor(R/s)*4096+Math.floor(P/s)+2048*4097)??0)>=4||Math.hypot(R-a,P-l)<380,u=[];for(const R of n){if(R.cls>2||R.flags)continue;const P=R.cls===0?48:58,U=R.pts.length/3;let L=P*.5,z=1;for(let I=1;I<U;I++){const B=R.pts[I*3-3],$=R.pts[I*3-1],N=R.pts[I*3],H=R.pts[I*3+2],K=Math.hypot(N-B,H-$);if(L+=K,L<P)continue;L=0,z=-z;const Y=(N-B)/(K||1),Z=(H-$)/(K||1),F=R.width/2+1.6,J=N-Z*F*z,q=H+Y*F*z;!c(J,q)||!e.inside(J,q,20)||i.isClear(J,q)||u.push(J,e.yAt(J,q),q,Math.atan2(Z*z,-Y*z))}}const h=new se,d=O(9278358);h.cyl(0,0,0,.11,.07,8.2,5,d),h.box(-.05,8.1,0,.05,8.22,2.2,d),h.box(-.22,8,1.7,.22,8.14,2.5,O(5922659)),h.quad(-.2,7.99,2.48,.2,7.99,2.48,.2,7.99,1.72,-.2,7.99,1.72,O(16773320),3);const f=u.length/4,p=new Ve(h.build(),Rs(),f),x=document.createElement("canvas");x.width=x.height=64;const m=x.getContext("2d"),g=m.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,"rgba(255,214,150,0.85)"),g.addColorStop(.45,"rgba(255,196,120,0.32)"),g.addColorStop(1,"rgba(255,180,100,0)"),m.fillStyle=g,m.fillRect(0,0,64,64);const _=new fl(x);_.colorSpace=Ue;const M=new Hn(34,34);M.rotateX(-Math.PI/2);const v=new pn({map:_,transparent:!0,opacity:0,blending:Yo,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),b=new Ve(M,v,f);b.renderOrder=3;const E=new ie,S=new Tn,y=new V(0,1,0),w=new V(1,1,1),T=new V;for(let R=0;R<f;R++){const P=u[R*4],U=u[R*4+1],L=u[R*4+2],z=u[R*4+3];S.setFromAxisAngle(y,z),p.setMatrixAt(R,E.compose(T.set(P,U,L),S,w));const I=P+Math.sin(z)*2.1,B=L+Math.cos(z)*2.1;b.setMatrixAt(R,E.compose(T.set(I,e.yAt(I,B)+.5,B),S.identity(),w))}return p.castShadow=!1,p.computeBoundingSphere(),b.computeBoundingSphere(),b.onBeforeRender=()=>{v.opacity=Ro.value*.9},b.visible=!0,{lights:p,pools:b,poolMat:v}}function oM(i){const{town:t,hf:e,footprints:n,roads:s}=i,r=new Je;r.name="landmarks";const o=new se,a=new se,l=Pe(20261111),c={polygons:[],circles:[]},u={group:r,nightMaterials:[],blockers:c};t.piers[0]&&(u.jetty=Y_(o,e,t.piers[0]));for(const[w,T]of[[-38.63578,145.73393],[-38.63595,145.73085]]){const[R,P]=_n(t.meta,w,T);Z_(o,e,R,P)}const h=n.find(w=>w.name==="Inverloch Surf Life Saving Club");h&&(u.surf=K_(o,e,h,c));const d=n.find(w=>w.name==="The Hub");d&&q_(o,e,d,c);for(const w of n)w.kind==="church"&&tM(o,w);let f=0;for(const w of t.pitches)w.s==="australian_football"?J_(o,a,e,w.p,f++===0):w.s==="tennis"||w.s==="bowls"?$_(o,a,e,w.p,w.s):w.s==="skateboard"&&Q_(o,e,w.p);const[p,x]=_n(t.meta,-38.63529,145.72876);for(const w of t.playgrounds){const[T,R]=Bo(w);j_(o,e,w,Math.hypot(T-p,R-x)<60,l)}const[m,g]=_n(t.meta,-38.62462,145.71011);eM(o,e,m,g);const[_,M]=_n(t.meta,-38.63161,145.72943);nM(o,e,_,M,s,c);for(const[w,T]of[[-38.6358,145.72885],[-38.63447,145.72923],[-38.63545,145.72875]]){const[R,P]=_n(t.meta,w,T);iM(o,e,R,P,l)}const v=new te(o.build(),Rs());v.castShadow=!0,v.receiveShadow=!0,r.add(v);const b=a.build();b.deleteAttribute("glow");const E=new te(b,Mr(new pn({vertexColors:!0,side:Ce,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})));r.add(E);const S=sM(i);S&&r.add(S);const y=rM(i);return r.add(y.lights,y.pools),u.nightMaterials.push(y.poolMat),u}const aM=Jt.lights_fragment_begin.replace("getDirectionalLightInfo( directionalLight, directLight );",`getDirectionalLightInfo( directionalLight, directLight );
    // The atmosphere owns the scene's only directional light.
    directLight.color *= cloudSunlight(vCoastalWorld);`),lM=`
  vec4 coastalPosition = vec4(transformed, 1.0);
  #ifdef USE_BATCHING
    coastalPosition = batchingMatrix * coastalPosition;
  #endif
  #ifdef USE_INSTANCING
    coastalPosition = instanceMatrix * coastalPosition;
  #endif
  vCoastalWorld = (modelMatrix * coastalPosition).xyz;
`,cM=`
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
`;class hM{constructor(t,e,n,s,r,o,a){X(this,"prepared",new WeakSet);X(this,"inlet",{value:new V});X(this,"mist");this.color=n,this.clouds=r,this.sunDir=o,this.cloudShadowStrength=a,this.inlet.value.set(t,0,e),this.mist={value:Number(s)}}setMist(t){this.mist.value=Number(t)}setWaterLevel(t){this.inlet.value.y=t}add(t){t.traverse(e=>{const{material:n}=e;if(n)for(const s of Array.isArray(n)?n:[n])this.prepare(s)})}addWater(t){this.prepare(t.material,!0)}prepare(t,e=!1){if(!t.toneMapped||this.prepared.has(t)||t instanceof sn&&!e)return;this.prepared.add(t);const n=t.onBeforeCompile,s=t.customProgramCacheKey();t.customProgramCacheKey=()=>s+(e?":coastal-water-cloud":":coastal-haze-cloud"),t.onBeforeCompile=(r,o)=>{n.call(t,r,o),r.uniforms.uCoastalColor=this.color,r.uniforms.uInletCenter=this.inlet,r.uniforms.uCoastalMist=this.mist;const a=e||t instanceof Pn||t instanceof mo||t instanceof Hp||t instanceof Vp;a&&Object.assign(r.uniforms,this.clouds.uniforms,{uCloudSunDir:this.sunDir,uCloudShadowStrength:this.cloudShadowStrength});const l=(a?Lu+N1:"")+cM;e||(r.vertexShader=`varying vec3 vCoastalWorld;
`+r.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
`+lM));const c=e?r.fragmentShader.replace("varying vec3 vW;","").replace("col += uSunColor *",`float sunlight = cloudSunlight(vW);
          col *= mix(1.0, sunlight, 0.22);
          col += uSunColor * sunlight *`):a?r.fragmentShader.replace("#include <lights_fragment_begin>",aM):r.fragmentShader;r.fragmentShader=(e?l.replace(/vCoastalWorld/g,"vW"):l)+c.replace("#include <tonemapping_fragment>",`gl_FragColor.rgb = coastalLight(gl_FragColor.rgb);
#include <tonemapping_fragment>`)},t.needsUpdate=!0}}const od=330;function $i(i,t){let e=Math.imul(i^t,73244475);return e=Math.imul(e^e>>>16,73244475),((e^e>>>16)>>>0)/4294967296}function zs(i,t){const e=Math.min(1,Math.max(0,i/t));return e*e*(3-2*e)}class uM{constructor(){X(this,"window",0);X(this,"age",0);X(this,"duration",0);X(this,"rain",0);X(this,"wetness",0);X(this,"cover",.38);X(this,"storm",!1)}update(t){this.window=Math.floor(t/od);const e=90+48*$i(this.window,17);this.duration=60+22*$i(this.window,29),this.age=t-this.window*od-e;const n=this.age-this.duration,s=zs(this.age+42,42)*(1-zs(n,36));this.storm=this.window%4===0,this.cover=.38+(this.storm?.6:.4)*s;const r=this.storm?.97:.55+.15*$i(this.window,41);this.rain=r*zs(this.age,9)*(1-zs(n+14,14)),this.wetness=zs(this.age,23)*(1-zs(n,68))}}const ql=[18,45],Go=8;class dM{constructor(t,e,n){X(this,"line");X(this,"vertices",new Float32Array((Go+1)*2*3));X(this,"center",new Nt);X(this,"key");X(this,"previousTime");X(this,"arrival");this.inletX=e,this.inletZ=n;const s=new Re;s.setAttribute("position",new Te(this.vertices,3).setUsage(Bi));const r=[];for(let o=0;o<Go;o++){const a=2*o;r.push(a,a+1,a+2,a+1,a+3,a+2)}s.setIndex(r),this.line=new te(s,new pn({color:15002367,transparent:!0,depthWrite:!1,side:Ce})),this.line.material.forceSinglePass=!0,this.line.name="inlet lightning",this.line.visible=!1,t.add(this.line)}shape(t,e){const n=this.inletX+640*($i(t,3)-.5),s=this.inletZ+490*($i(t,13)-.5);this.center.set(n,s);const r=Math.atan2(e.x-n,e.z-s),o=Math.cos(r),a=-Math.sin(r);for(let l=0;l<=Go;l++){const c=l/Go,u=n+34*c+33*($i(t,60+l)-.5),h=s+18*($i(t,30+l)-.5),d=422-400*c;for(let f=0;f<2;f++){const p=(f?1:-1)*(1.9-c*1.1),x=3*(2*l+f);this.vertices[x]=u+p*o,this.vertices[x+1]=d,this.vertices[x+2]=h+p*a}}this.line.geometry.attributes.position.needsUpdate=!0,this.line.geometry.computeBoundingSphere()}update(t,e,n,s){const r=this.previousTime;this.previousTime=t,this.line.visible=!1;const o=r!==void 0&&t>=r&&t-r<1.5&&!document.hidden;if(o||(this.arrival=void 0),!e.storm||e.age<ql[0])return 0;const a=e.age>=ql[1]?1:0,l=e.age-ql[a],c=e.window*2+a;if(c!==this.key&&(this.key=c,this.shape(c,n),o&&l<.45)){const h=Math.hypot(this.center.x-n.x,110-n.y,this.center.y-n.z);h<6500&&(this.arrival=t-l+Math.max(.35,h/343))}if(this.arrival!==void 0&&t>=this.arrival){this.arrival=void 0;const h=Math.hypot(this.center.x-n.x,this.center.y-n.z);s==null||s(ne.clamp(1-h/7e3,.1,1))}const u=Math.max(0,1-l/.32);return this.line.visible=u>0,this.line.material.opacity=u,u}dispose(){this.line.removeFromParent(),this.line.geometry.dispose(),this.line.material.dispose()}}const ad="dmFyIF89T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBKPShrLGosRSk9PmogaW4gaz9fKGssaix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6RX0pOmtbal09RTt2YXIgdz0oayxqLEUpPT5KKGssdHlwZW9mIGohPSJzeW1ib2wiP2orIiI6aixFKTsoZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3Mgantjb25zdHJ1Y3RvcihuLHMsdCxhLGksbCxyLGgsYz1bXSl7dyh0aGlzLCJueCIpO3codGhpcywibnoiKTt3KHRoaXMsInkiKTt3KHRoaXMsInhNaW4iKTt3KHRoaXMsInpNaW4iKTt3KHRoaXMsInhNYXgiKTt3KHRoaXMsInpNYXgiKTt3KHRoaXMsImR4Iik7dyh0aGlzLCJkeiIpO3codGhpcywiY2VsbFgiKTt3KHRoaXMsImNlbGxaIik7aWYodGhpcy5yYXc9bix0aGlzLmV4cG9zdXJlPXMsdGhpcy53PXQsdGhpcy5oPWEsdGhpcy5zaXplWD1pLHRoaXMuc2l6ZVo9bCx0aGlzLnBhdGNoZXM9Yyx0aGlzLmNlbGxYPWkvdCx0aGlzLmNlbGxaPWwvYSx0aGlzLm54PU1hdGguZmxvb3IoKHQtMSkvcikrMSx0aGlzLm56PU1hdGguZmxvb3IoKGEtMSkvcikrMSx0aGlzLmR4PXRoaXMuY2VsbFgqcix0aGlzLmR6PXRoaXMuY2VsbFoqcix0aGlzLnhNaW49LWkvMit0aGlzLmNlbGxYLzIsdGhpcy56TWluPS1sLzIrdGhpcy5jZWxsWi8yLHRoaXMueE1heD10aGlzLnhNaW4rKHRoaXMubngtMSkqdGhpcy5keCx0aGlzLnpNYXg9dGhpcy56TWluKyh0aGlzLm56LTEpKnRoaXMuZHosdGhpcy55PWg/P25ldyBGbG9hdDMyQXJyYXkodGhpcy5ueCp0aGlzLm56KSwhaClmb3IobGV0IG89MDtvPHRoaXMubno7bysrKWZvcihsZXQgcD0wO3A8dGhpcy5ueDtwKyspdGhpcy55W28qdGhpcy5ueCtwXT1uW28qcip0K3Aqcl0qMS41fXlBdChuLHMpe2Zvcihjb25zdCB0IG9mIHRoaXMucGF0Y2hlcylpZihuPj10LnhNaW4mJm48PXQueE1heCYmcz49dC56TWluJiZzPD10LnpNYXgpcmV0dXJuIEUodCxuLHMpO3JldHVybiB0aGlzLmJhc2VZQXQobixzKX1iYXNlWUF0KG4scyl7cmV0dXJuIEUodGhpcyxuLHMpfXBhdGNoT3ZlcmxhcHMobixzLHQsYSl7cmV0dXJuIHRoaXMucGF0Y2hlcy5zb21lKGk9Pm48aS54TWF4JiZ0PmkueE1pbiYmczxpLnpNYXgmJmE+aS56TWluKX1iaWxpbmVhcihuLHMsdCl7bGV0IGE9KHMrdGhpcy5zaXplWC8yKS90aGlzLmNlbGxYLS41LGk9KHQrdGhpcy5zaXplWi8yKS90aGlzLmNlbGxaLS41O2E8MD9hPTA6YT50aGlzLnctMS4wMDAxJiYoYT10aGlzLnctMS4wMDAxKSxpPDA/aT0wOmk+dGhpcy5oLTEuMDAwMSYmKGk9dGhpcy5oLTEuMDAwMSk7Y29uc3QgbD1hfDAscj1pfDAsaD1hLWwsYz1pLXIsbz1yKnRoaXMudytsO3JldHVybihuW29dKigxLWgpK25bbysxXSpoKSooMS1jKSsobltvK3RoaXMud10qKDEtaCkrbltvK3RoaXMudysxXSpoKSpjfW1ldHJlc0F0KG4scyl7cmV0dXJuIHRoaXMuYmlsaW5lYXIodGhpcy5yYXcsbixzKX1leHBvc3VyZUF0KG4scyl7cmV0dXJuIHRoaXMuYmlsaW5lYXIodGhpcy5leHBvc3VyZSxuLHMpfWluc2lkZShuLHMsdD0wKXtyZXR1cm4gbj50aGlzLnhNaW4rdCYmbjx0aGlzLnhNYXgtdCYmcz50aGlzLnpNaW4rdCYmczx0aGlzLnpNYXgtdH19ZnVuY3Rpb24gRShlLG4scyl7bGV0IHQ9KG4tZS54TWluKS9lLmR4LGE9KHMtZS56TWluKS9lLmR6O3Q8MD90PTA6dD5lLm54LTEmJih0PWUubngtMSksYTwwP2E9MDphPmUubnotMSYmKGE9ZS5uei0xKTtjb25zdCBpPU1hdGgubWluKHR8MCxlLm54LTIpLGw9TWF0aC5taW4oYXwwLGUubnotMikscj10LWksaD1hLWwsYz1sKmUubngraSxvPWUueVtjXSxwPWUueVtjKzFdLHU9ZS55W2MrZS5ueF0sZj1lLnlbYytlLm54KzFdO3JldHVybiByK2g8PTE/bysocC1vKSpyKyh1LW8pKmg6ZisodS1mKSooMS1yKSsocC1mKSooMS1oKX1jb25zdCBaPVt7ZW5kczpbNDAwMTMsMjc0MzksMjc2MDIsMjA0ODldLHRpZToyNCxhbmNob3JzOltbMTI4MCwxMS44XSxbMTMwMCwxMC44XSxbMTMyMCw5Ljk4XSxbMTMzMCw5LjgxXSxbMTM0MCw5LjY3XSxbMTM1MCw5LjkzXSxbMTM2NSwxMC4xN10sWzEzODAsMTAuNTVdLFsxNDAwLDEwLjc3XV19LHtlbmRzOlstNDc0MywtNDAzLC0yNzcyLC0xMjJdLHRpZToxMixhbmNob3JzOltbNTksMjQuNjJdLFs3NCwyMi42M10sWzg5LDE5LjY5XSxbMTAwLDE3LjddLFsxMTAsMTUuOTVdLFsxMjAsMTQuMTldLFsxMzIsMTIuMDddLFsxNDQsMTAuMjNdXX0se2VuZHM6Wy0zMDIxNCwxMTk2OCwtNDAwMTMsMjEwOTVdLHRpZToyNSxhbmNob3JzOltbMTA4MCw1LjE0XSxbMTEwMCw1LjJdLFsxMTIwLDUuNTddLFsxMTM1LDYuNjVdLFsxMTUwLDguNjFdLFsxMTU1LDkuMjRdLFsxMTY1LDEwLjM1XSxbMTE3NSwxMS42NV0sWzExOTIsMTVdLFsxMjEwLDE4LjRdLFsxMjM1LDIwLjY4XSxbMTI1NSwyMS42M11dfSx7ZW5kczpbLTE3ODU1LDYyMTUsLTE2NzA3LC0yMzczXSx0aWU6OCxhbmNob3JzOltbMTgwLDEzLjY1XSxbMTkyLDE2XSxbMjA0LDE4LjZdLFsyMjAsMjEuMDJdLFsyNDQsMjMuNTNdXX0se2VuZHM6Wy0yODAzMiw2NzI3LC0yNDI3OCw4MTE3XSx0aWU6NyxhbmNob3JzOltbOCwxMS43Ml0sWzE0LDExLjUxXSxbMjMsMTAuMjhdLFszMyw4LjQyXSxbNDMsNi42OV0sWzUyLDUuNTNdXX0se2VuZHM6Wy0zMDEwMywxMTY0NSwtMzUwMjcsMTEyNDRdLHRpZToxMyxhbmNob3JzOltbNDI4LDUuODddLFs0NDIsNy4wOF0sWzQ1NywxMC4yNl0sWzQ3NSwxNC4xOF0sWzQ5NSwxNy42NF0sWzUxMCwxOS4wNV0sWzUyOSwyMC4zOF1dfV0sTD0uMDE1LFk9MS41O2Z1bmN0aW9uIFMoZSl7Y29uc3Qgbj1NYXRoLm1heCgwLE1hdGgubWluKDEsZSkpO3JldHVybiBuKm4qKDMtMipuKX1mdW5jdGlvbiBPKGUpe2NvbnN0IG49ZVs1XTtyZXR1cm4gWi5maW5kKCh7ZW5kczpzfSk9PnNbMF09PT1uWzBdJiZzWzFdPT09blsxXSYmc1syXT09PW5bbi5sZW5ndGgtMl0mJnNbM109PT1uW24ubGVuZ3RoLTFdKX1jbGFzcyBQe2NvbnN0cnVjdG9yKG4scyl7dyh0aGlzLCJzdGFydCIpO3codGhpcywiZW5kIik7dyh0aGlzLCJvdXRlciIpO3codGhpcywicG9pbnRzIixbXSk7dyh0aGlzLCJzbG9wZXMiKTt3KHRoaXMsImhhbGZXaWR0aCIpO3RoaXMucHJvZmlsZT1zLHRoaXMuaGFsZldpZHRoPW5bM10vMjAsdGhpcy5vdXRlcj10aGlzLmhhbGZXaWR0aCtZKyhuWzBdPDM/MjA6MTIpO2NvbnN0e2FuY2hvcnM6dCx0aWU6YX09czt0aGlzLnN0YXJ0PXRbMF1bMF0tYSx0aGlzLmVuZD10W3QubGVuZ3RoLTFdWzBdK2E7Y29uc3QgaT10LnNsaWNlKDEpLm1hcCgoW2gsY10sbyk9PihjLXRbb11bMV0pLyhoLXRbb11bMF0pKTt0aGlzLnNsb3Blcz1baVswXV07Zm9yKGxldCBoPTE7aDxpLmxlbmd0aDtoKyspe2NvbnN0IGM9aVtoLTFdLG89aVtoXTt0aGlzLnNsb3Blcy5wdXNoKGMqbz4wPzIqYypvLyhjK28pOjApfXRoaXMuc2xvcGVzLnB1c2goaVtpLmxlbmd0aC0xXSk7Y29uc3QgbD1uWzVdO2xldCByPTA7Zm9yKGxldCBoPTI7aDxsLmxlbmd0aDtoKz0yKXtjb25zdCBjPWxbaC0yXS8xMCxvPWxbaC0xXS8xMCxwPWxbaF0vMTAtYyx1PWxbaCsxXS8xMC1vLGY9TWF0aC5oeXBvdChwLHUpO2lmKGYmJnIrZj49dGhpcy5zdGFydCYmcjw9dGhpcy5lbmQpe2NvbnN0IHg9TWF0aC5tYXgodGhpcy5zdGFydCxyKSxNPU1hdGgubWluKHRoaXMuZW5kLHIrZik7Zm9yKGNvbnN0IGQgb2YgdGhpcy5wb2ludHMubGVuZ3RoP1tNXTpbeCxNXSl0aGlzLnBvaW50cy5wdXNoKHt4OmMrcCooZC1yKS9mLHo6byt1KihkLXIpL2YsczpkfSl9cis9Zn19d2VpZ2h0KG4pe3JldHVybiBTKE1hdGgubWluKG4tdGhpcy5zdGFydCx0aGlzLmVuZC1uKS90aGlzLnByb2ZpbGUudGllKX1kZWNrTGlmdChuLHMpe3JldHVybiBzKyguMTEtcykqdGhpcy53ZWlnaHQobil9ZWxldmF0aW9uKG4scyl7Y29uc3R7YW5jaG9yczp0fT10aGlzLnByb2ZpbGU7bGV0IGE9MDtmb3IoO2ErMjx0Lmxlbmd0aCYmbj50W2ErMV1bMF07KWErKztjb25zdFtpLGxdPXRbYV0sW3IsaF09dFthKzFdLGM9ci1pLG89KG4taSkvYztyZXR1cm4obzwwP2wrKG4taSkqdGhpcy5zbG9wZXNbYV06bz4xP2grKG4tcikqdGhpcy5zbG9wZXNbYSsxXTpsKyhoLWwpKlMobykrYypvKigxLW8pKigoMS1vKSp0aGlzLnNsb3Blc1thXS1vKnRoaXMuc2xvcGVzW2ErMV0pKS1NYXRoLmFicyhzKSpMfWdyb3VuZChuLHMsdCxhLGk9MCl7Y29uc3QgbD1uLmJhc2VZQXQocyx0KSxyPXRoaXMud2VpZ2h0KGEpO3JldHVybiBsKyh0aGlzLmVsZXZhdGlvbihhLGkpLWwpKnJ9c2hvdWxkZXIobixzLHQpe2xldCBhPXRoaXMub3V0ZXIqKjIsaT0wO2ZvcihsZXQgYz0xO2M8dGhpcy5wb2ludHMubGVuZ3RoO2MrKyl7Y29uc3Qgbz10aGlzLnBvaW50c1tjLTFdLHA9dGhpcy5wb2ludHNbY10sdT1wLngtby54LGY9cC56LW8ueix4PU1hdGgubWF4KDAsTWF0aC5taW4oMSwoKG4tby54KSp1KyhzLW8ueikqZikvKHUqdStmKmZ8fDEpKSksTT0obi1vLngteCp1KSoqMisocy1vLnoteCpmKSoqMjtNPGEmJihhPU0saT1vLnMrKHAucy1vLnMpKngpfWNvbnN0IGw9dGhpcy53ZWlnaHQoaSk7aWYoIWwpcmV0dXJuIHQ7Y29uc3Qgcj1NYXRoLnNxcnQoYSksaD1TKCh0aGlzLm91dGVyLXIpLyh0aGlzLm91dGVyLXRoaXMuaGFsZldpZHRoLVkpKTtyZXR1cm4gdCsodGhpcy5lbGV2YXRpb24oaSxyKS10KSpsKmh9fWZ1bmN0aW9uIFcoZSl7Y29uc3Qgbj1PKGUpO3JldHVybiBuJiZuZXcgUChlLG4pfWZ1bmN0aW9uIEgoZSxuKXtjb25zdCBzPVtdO2Zvcihjb25zdCBhIG9mIG4pe2NvbnN0IGk9VyhhKTtpZighaXx8aS5wb2ludHMubGVuZ3RoPDIpY29udGludWU7Y29uc3QgbD1pLnBvaW50cy5tYXAobz0+by54KSxyPWkucG9pbnRzLm1hcChvPT5vLnopLGg9aS5vdXRlcixjPXtpMDpNYXRoLm1heCgwLE1hdGguZmxvb3IoKE1hdGgubWluKC4uLmwpLWgtZS54TWluKS9lLmR4KSksaTE6TWF0aC5taW4oZS5ueC0xLE1hdGguY2VpbCgoTWF0aC5tYXgoLi4ubCkraC1lLnhNaW4pL2UuZHgpKSxqMDpNYXRoLm1heCgwLE1hdGguZmxvb3IoKE1hdGgubWluKC4uLnIpLWgtZS56TWluKS9lLmR6KSksajE6TWF0aC5taW4oZS5uei0xLE1hdGguY2VpbCgoTWF0aC5tYXgoLi4ucikraC1lLnpNaW4pL2UuZHopKSxncmFkZXM6W2ldfTtmb3IobGV0IG89MDtvPHMubGVuZ3RoOyl7Y29uc3QgcD1zW29dO2lmKGMuaTA+PXAuaTF8fHAuaTA+PWMuaTF8fGMuajA+PXAuajF8fHAuajA+PWMuajEpe28rKztjb250aW51ZX1jLmkwPU1hdGgubWluKGMuaTAscC5pMCksYy5pMT1NYXRoLm1heChjLmkxLHAuaTEpLGMuajA9TWF0aC5taW4oYy5qMCxwLmowKSxjLmoxPU1hdGgubWF4KGMuajEscC5qMSksYy5ncmFkZXMucHVzaCguLi5wLmdyYWRlcykscy5zcGxpY2UobywxKSxvPTB9cy5wdXNoKGMpfWNvbnN0IHQ9TWF0aC5jZWlsKE1hdGgubWF4KGUuZHgsZS5keikvMyk7cmV0dXJuIHMubWFwKCh7aTA6YSxpMTppLGowOmwsajE6cixncmFkZXM6aH0pPT57Y29uc3QgYz1lLnhNaW4rYSplLmR4LG89ZS56TWluK2wqZS5keixwPWUueE1pbitpKmUuZHgsdT1lLnpNaW4rciplLmR6LGY9KGktYSkqdCsxLHg9KHItbCkqdCsxLE09ZS5keC90LGQ9ZS5kei90LGI9bmV3IEZsb2F0MzJBcnJheShmKngpO2ZvcihsZXQgej0wO3o8eDt6KyspZm9yKGxldCBtPTA7bTxmO20rKyl7Y29uc3QgeT1jK20qTSxBPW8reipkLGc9ZS5iYXNlWUF0KHksQSk7bGV0IHY9ZztpZihtPjAmJm08Zi0xJiZ6PjAmJno8eC0xKWZvcihjb25zdCBDIG9mIGgpdis9Qy5zaG91bGRlcih5LEEsZyktZztiW3oqZittXT12fXJldHVybntpMDphLGkxOmksajA6bCxqMTpyLHhNaW46Yyx6TWluOm8seE1heDpwLHpNYXg6dSxueDpmLG56OngsZHg6TSxkejpkLHk6Yn19KX1jb25zdCBUPTEyODtmdW5jdGlvbiBxKGUsbixzLHQsYSl7Y29uc3R7bng6aSxuejpsfT1lLHI9TWF0aC5taW4oVCsxLGktbiksaD1NYXRoLm1pbihUKzEsbC1zKSxjPW5ldyBGbG9hdDMyQXJyYXkocipoKjMpLG89bmV3IEZsb2F0MzJBcnJheShyKmgqMykscD1uZXcgRmxvYXQzMkFycmF5KHIqaCoyKTtmb3IobGV0IHg9czt4PHMraDt4KyspZm9yKGxldCBNPW47TTxuK3I7TSsrKXtjb25zdCBkPSh4LXMpKnIrTS1uLGI9ZS54TWluK00qZS5keCx6PWUuek1pbit4KmUuZHo7Y1tkKjNdPWIsY1tkKjMrMV09ZS55W3gqaStNXSxjW2QqMysyXT16LHBbZCoyXT0oYit0LnNpemVYLzIpL3Quc2l6ZVgscFtkKjIrMV09MS0oeit0LnNpemVaLzIpL3Quc2l6ZVo7Y29uc3QgbT1lIT09dCYmKE09PT0wfHx4PT09MHx8TT09PWktMXx8eD09PWwtMSkseT1tPyh0LmJhc2VZQXQoYit0LmR4LHopLXQuYmFzZVlBdChiLXQuZHgseikpLygyKnQuZHgpOihlLnlbeCppK01hdGgubWluKE0rMSxpLTEpXS1lLnlbeCppK01hdGgubWF4KE0tMSwwKV0pLygyKmUuZHgpLEE9bT8odC5iYXNlWUF0KGIseit0LmR6KS10LmJhc2VZQXQoYix6LXQuZHopKS8oMip0LmR6KTooZS55W01hdGgubWluKHgrMSxsLTEpKmkrTV0tZS55W01hdGgubWF4KHgtMSwwKSppK01dKS8oMiplLmR6KSxnPU1hdGguaHlwb3QoeSwxLEEpO29bZCozXT0teS9nLG9bZCozKzFdPTEvZyxvW2QqMysyXT0tQS9nfWNvbnN0IHU9bmV3IFVpbnQxNkFycmF5KChyLTEpKihoLTEpKjYpO2xldCBmPTA7Zm9yKGxldCB4PTA7eDxoLTE7eCsrKWZvcihsZXQgTT0wO008ci0xO00rKyl7aWYoYS5zb21lKHk9Pm4rTT49eS5pMCYmbitNPHkuaTEmJnMreD49eS5qMCYmcyt4PHkuajEpKWNvbnRpbnVlO2NvbnN0IGQ9eCpyK00sYj1kKzEsej1kK3IsbT16KzE7dVtmKytdPWQsdVtmKytdPXosdVtmKytdPWIsdVtmKytdPWIsdVtmKytdPXosdVtmKytdPW19cmV0dXJue3BvczpjLG5vcjpvLHV2OnAsaWR4OmY9PT11Lmxlbmd0aD91OnUuc2xpY2UoMCxmKX19ZnVuY3Rpb24gQihlKXtjb25zdCBuPVtdO2Zvcihjb25zdCBzIG9mW2UsLi4uZS5wYXRjaGVzXSlmb3IobGV0IHQ9MDt0PHMubnotMTt0Kz1UKWZvcihsZXQgYT0wO2E8cy5ueC0xO2ErPVQpe2NvbnN0IGk9cz09PWU/ZS5wYXRjaGVzLmZpbHRlcihsPT5hPGwuaTEmJmErVD5sLmkwJiZ0PGwuajEmJnQrVD5sLmowKTpbXTtuLnB1c2gocShzLGEsdCxlLGkpKX1yZXR1cm4gbn1mdW5jdGlvbiBGKGUpe2NvbnN0IG49YXRvYihlKSxzPW5ldyBVaW50OEFycmF5KG4ubGVuZ3RoKTtmb3IobGV0IHQ9MDt0PG4ubGVuZ3RoO3QrKylzW3RdPW4uY2hhckNvZGVBdCh0KTtyZXR1cm4gbmV3IEludDE2QXJyYXkocy5idWZmZXIsMCxzLmxlbmd0aD4+MSl9YXN5bmMgZnVuY3Rpb24gVihlKXtjb25zdCBuPW5ldyBVaW50OEFycmF5KGUpLHM9bmV3IERhdGFWaWV3KGUpO2xldCB0PTgsYT0wLGk9MCxsPTAscj0wLGg9MDtjb25zdCBjPVtdO2Zvcig7dDxuLmxlbmd0aDspe2NvbnN0IE09cy5nZXRVaW50MzIodCksZD1TdHJpbmcuZnJvbUNoYXJDb2RlKG5bdCs0XSxuW3QrNV0sblt0KzZdLG5bdCs3XSk7aWYoZD09PSJJSERSIilhPXMuZ2V0VWludDMyKHQrOCksaT1zLmdldFVpbnQzMih0KzEyKSxsPW5bdCsxNl0scj1uW3QrMTddLGg9blt0KzIwXTtlbHNlIGlmKGQ9PT0iSURBVCIpYy5wdXNoKG4uc3ViYXJyYXkodCs4LHQrOCtNKSk7ZWxzZSBpZihkPT09IklFTkQiKWJyZWFrO3QrPTEyK019aWYobCE9PTh8fHIhPT0yJiZyIT09Nnx8aCl0aHJvdyBuZXcgRXJyb3IoIlVuc3VwcG9ydGVkIHRlcnJhaW4gaW1hZ2UgZm9ybWF0Iik7Y29uc3Qgbz1yPT09Mj8zOjQscD1uZXcgQmxvYihjKS5zdHJlYW0oKS5waXBlVGhyb3VnaChuZXcgRGVjb21wcmVzc2lvblN0cmVhbSgiZGVmbGF0ZSIpKSx1PW5ldyBVaW50OEFycmF5KGF3YWl0IG5ldyBSZXNwb25zZShwKS5hcnJheUJ1ZmZlcigpKSxmPWEqbyx4PW5ldyBVaW50OEFycmF5KGYqaSk7Zm9yKGxldCBNPTA7TTxpO00rKyl7Y29uc3QgZD11W00qKGYrMSldLGI9TSooZisxKSsxLHo9TSpmO2ZvcihsZXQgbT0wO208ZjttKyspe2NvbnN0IHk9bT49bz94W3orbS1vXTowLEE9TT4wP3hbei1mK21dOjAsZz1tPj1vJiZNPjA/eFt6LWYrbS1vXTowO2xldCB2PXVbYittXTtpZihkPT09MSl2Kz15O2Vsc2UgaWYoZD09PTIpdis9QTtlbHNlIGlmKGQ9PT0zKXYrPXkrQT4+MTtlbHNlIGlmKGQ9PT00KXtjb25zdCBDPU1hdGguYWJzKEEtZyksST1NYXRoLmFicyh5LWcpLFI9TWF0aC5hYnMoeStBLTIqZyk7dis9Qzw9SSYmQzw9Uj95Okk8PVI/QTpnfXhbeittXT12JjI1NX19cmV0dXJue3dpZHRoOmEsaGVpZ2h0OmksY2hhbm5lbHM6byxkYXRhOnh9fWFzeW5jIGZ1bmN0aW9uIEcoZSxuLHMpe2NvbnN0W3QsYV09YXdhaXQgUHJvbWlzZS5hbGwoW2ZldGNoKGUudG93bix7c2lnbmFsOnN9KS50aGVuKHU9PntpZighdS5vayl0aHJvdyBuZXcgRXJyb3IoIkNvdWxkIG5vdCBsb2FkIHRoZSB0b3duIGRhdGEiKTtyZXR1cm4gdS5qc29uKCl9KS50aGVuKHU9PihuKCJTdHJlZXRzIGFuZCBidWlsZGluZ3MiKSx1KSksZmV0Y2goZS5oZWlnaHQse3NpZ25hbDpzfSkudGhlbih1PT57aWYoIXUub2spdGhyb3cgbmV3IEVycm9yKCJDb3VsZCBub3QgbG9hZCB0aGUgdGVycmFpbiIpO3JldHVybiB1LmFycmF5QnVmZmVyKCl9KS50aGVuKFYpLnRoZW4odT0+KG4oIlRlcnJhaW4iKSx1KSldKTtpZihzLmFib3J0ZWQpdGhyb3cgcy5yZWFzb247Y29uc3R7bWV0YTppfT10LGw9YS53aWR0aCphLmhlaWdodCxyPW5ldyBGbG9hdDMyQXJyYXkobCksaD1uZXcgRmxvYXQzMkFycmF5KGwpLGM9YS5jaGFubmVscztmb3IobGV0IHU9MDt1PGw7dSsrKXJbdV09KGEuZGF0YVt1KmNdPDw4fGEuZGF0YVt1KmMrMV0pL2kuaGVpZ2h0U2NhbGUtaS5oZWlnaHRPZmZzZXQsaFt1XT1hLmRhdGFbdSpjKzJdLzI1NTtjb25zdCBvPW5ldyBqKHIsaCxpLmdyaWRbMF0saS5ncmlkWzFdLGkuc2l6ZVswXSxpLnNpemVbMV0sZS50ZXJyYWluU3RlcCkscD1IKG8sdC5yb2Fkcyk7cmV0dXJuIG8ucGF0Y2hlcy5wdXNoKC4uLnApLHt0b3duOnsuLi50LGhvdXNlczpGKHQuaG91c2VzKSxjYWJpbnM6Rih0LmNhYmlucyksY2FyczpGKHQuY2FycyksdHJlZXM6Rih0LnRyZWVzKX0saGVpZ2h0czpyLGV4cG9zdXJlOmgsc3VyZmFjZTpvLnksdGVycmFpblBhdGNoZXM6cCx0ZXJyYWluVGlsZXM6QihvKX19Y29uc3QgRD1zZWxmLFg9bmV3IE1hcDtmdW5jdGlvbiBVKGUsbj1bXSl7RC5wb3N0TWVzc2FnZShlLG4pfWZ1bmN0aW9uIE4oZSl7cmV0dXJuIGUubWFwKG49Pm4uYnVmZmVyKX1ELm9ubWVzc2FnZT1hc3luYyBlPT57dmFyIGk7Y29uc3Qgbj1lLmRhdGEse2lkOnN9PW47aWYoImNhbmNlbCJpbiBuKXsoaT1YLmdldChzKSk9PW51bGx8fGkuYWJvcnQoKTtyZXR1cm59Y29uc3QgdD1uZXcgQWJvcnRDb250cm9sbGVyLHtzaWduYWw6YX09dDtYLnNldChzLHQpO3RyeXtjb25zdHtqb2I6bH09bjtpZihsLmtpbmQ9PT0id29ybGQiKXtjb25zdCByPWF3YWl0IEcobC5zb3VyY2UseD0+VSh7aWQ6cyxwcm9ncmVzczp4fSksYSkse3Rvd246aCxoZWlnaHRzOmMsZXhwb3N1cmU6byxzdXJmYWNlOnAsdGVycmFpblBhdGNoZXM6dSx0ZXJyYWluVGlsZXM6Zn09cjtVKHtpZDpzLHZhbHVlOnJ9LE4oW2MsbyxwLGguaG91c2VzLGguY2FiaW5zLGguY2FycyxoLnRyZWVzLC4uLnUubWFwKCh7eTp4fSk9PngpLC4uLmYuZmxhdE1hcCgoe3Bvczp4LG5vcjpNLHV2OmQsaWR4OmJ9KT0+W3gsTSxkLGJdKV0pKX1lbHNle2NvbnN0IHI9YXdhaXQgZmV0Y2gobC51cmwse3NpZ25hbDphfSk7aWYoIXIub2spdGhyb3cgbmV3IEVycm9yKCJDb3VsZCBub3QgbG9hZCBncm91bmQgZGV0YWlsIik7Y29uc3QgaD1hd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChhd2FpdCByLmJsb2IoKSx7aW1hZ2VPcmllbnRhdGlvbjoiZmxpcFkiLHByZW11bHRpcGx5QWxwaGE6Im5vbmUifSk7aWYoYS5hYm9ydGVkKWguY2xvc2UoKTtlbHNlIHRyeXtVKHtpZDpzLHZhbHVlOmh9LFtoXSl9Y2F0Y2goYyl7dGhyb3cgaC5jbG9zZSgpLGN9fX1jYXRjaChsKXthLmFib3J0ZWR8fFUoe2lkOnMsZXJyb3I6bCBpbnN0YW5jZW9mIEVycm9yP2wubWVzc2FnZTpTdHJpbmcobCl9KX1maW5hbGx5e1guZGVsZXRlKHMpfX19KSgpOwo=",fM=i=>Uint8Array.from(atob(i),t=>t.charCodeAt(0)),ld=typeof self<"u"&&self.Blob&&new Blob([fM(ad)],{type:"text/javascript;charset=utf-8"});function pM(i){let t;try{if(t=ld&&(self.URL||self.webkitURL).createObjectURL(ld),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;base64,"+ad,{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}class mM{constructor(){X(this,"worker");X(this,"pending",new Map);X(this,"nextId",0);try{const t=new pM;this.worker=t,t.onmessage=e=>{const n=e.data,s=this.pending.get(n.id);s?s.receive(n):"value"in n&&"close"in n.value&&n.value.close()},t.onerror=e=>{e.preventDefault(),this.close(new Error("Could not start the model worker"))},t.onmessageerror=()=>this.close(new Error("Could not receive data from the model worker"))}catch{}}async run(t,e,n,s){if(n.aborted)throw n.reason;if(this.worker)try{return await this.request(this.worker,t,n,s)}catch{if(n.aborted)throw n.reason}return e()}close(t=new DOMException("Model closed","AbortError")){var e;(e=this.worker)==null||e.terminate(),this.worker=void 0;for(const n of this.pending.values())n.reject(t)}request(t,e,n,s){return new Promise((r,o)=>{const a=++this.nextId,l=()=>{this.pending.delete(a),n.removeEventListener("abort",c)},c=()=>{l(),t.postMessage({id:a,cancel:!0}),o(n.reason)},u=h=>{l(),o(h)};this.pending.set(a,{receive:h=>{if("progress"in h){s==null||s(h.progress);return}l(),"error"in h?o(new Error(h.error)):r(h.value)},reject:u}),n.addEventListener("abort",c,{once:!0});try{t.postMessage({id:a,job:e})}catch(h){u(h)}})}}class cd{constructor(t,e){X(this,"bounds",new Ti);X(this,"level",-1);this.levels=t;for(const s of t)for(const r of s)r.computeBoundingBox(),this.bounds.union(r.boundingBox),r.castShadow=!0,e.add(r);const n=this.bounds.getBoundingSphere(new Hi);for(const s of t.flat())s.boundingSphere=n,s.visible=!1}update(t,e,n){const s=this.bounds.distanceToPoint(t),[r,o,a]=n,l=a+e*8,c=h=>this.level<0?1:this.level<=h?1.1:.9,u=s<=r*c(0)?0:s<=o*c(1)?1:s<=l*c(2)?2:3;if(u!==this.level){for(const h of this.levels[this.level]??[])h.visible=!1;for(const h of this.levels[u]??[])h.visible=!0;this.level=u}}}const hd=.25,Bs=[16053490,16053490,16053490,13225168,10725291,5593438,2040100,2838410,11020586,2054728,14266938,8368595],ud=[15223869,3113154,15909424,3843690,16777215,9329589,15764004,2042422,15231654,4899008],di=[14826299,15764004,15909424,3715691,3117008,13651872,3720896,16053490].map(O);function dd(){return jl(0,!1)}function Jl(i){const t=new se,e=new se;return Ql(i,t,e,O(16777215)),{body:t.build(),trim:e.build()}}function $l(i){const t=i===1,e=i===2,n=e?-2.3:-2.18,s=e?2.22:2.18,r=e?1.035:t?.99:.93;return{wagon:t,ute:e,tail:n,nose:s,sill:r,belt:a=>{const l=Math.max(0,(n+.58-a)/.58,(a-s+.55)/.55),c=a<0?t||e?.045:.095:.14,u=r-l*c;return{width:.88-.13*l,shoulder:u-.105,top:u}}}}function jl(i,t){const e=new se,{wagon:n,ute:s,tail:r,nose:o,sill:a}=$l(i),l=O(16777215),c=O(6584713),u=O(2236966),h=s?1.63:n?1.6:1.49,d=s?-.37:n?-1.72:-.74,f=s?.64:.42,p=(x,m,g,_,M,v,b,E)=>{e.quad(-x,m,_,x,m,_,.65,M,b,-.65,M,b,E),e.quad(x,m,g,-x,m,g,-.65,M,v,.65,M,v,E),e.quad(x,m,_,x,m,g,.65,M,v,.65,M,b,E),e.quad(-x,m,g,-x,m,_,-.65,M,b,-.65,M,v,E),e.quad(-.65,M,b,.65,M,b,.65,M,v,-.65,M,v,l)};if(t)p(.88,.3,r,o,h,d,f,l);else{e.box(-.88,.3,r,.88,a,o,l),p(.77,a,s?-.52:n?-1.95:-1.47,1.02,h,d,f,c);for(const x of[-1.35,1.38])e.quad(.9,.02,x+.32,.9,.02,x-.32,.9,.57,x-.32,.9,.57,x+.32,u),e.quad(-.9,.02,x-.32,-.9,.02,x+.32,-.9,.57,x+.32,-.9,.57,x-.32,u)}return e.build()}function fd(i,t,e,n,s,r,o){const a=t>0?r-.025:r-.1,l=t<0&&(i===1||i===2);return[[e*.42,a,n],[e*(s-.022),a-(l?.13:0),n],[e*(s-.064),o-.025,n],[e*(t>0?.31:.43),o-.052,n]]}const pd=12;function md(i){const t=new se,e=$l(i);for(const s of[1,-1])for(const r of[1,-1]){const o=i<0?r*2.1:r>0?e.nose:e.tail,a=o+r*.02;let l;if(i<0){const c=r>0?.755:.59,u=.865;l=[[s*c,.62,a],[s*u,.62,a],[s*u,.77,a],[s*c,.77,a]]}else{const{width:c,shoulder:u,top:h}=e.belt(o),[d,f,p,x]=fd(i,r,s,a,c,u,h),m=(g,_,M)=>[g[0]+(_[0]-g[0])*M,g[1]+(_[1]-g[1])*M,a];l=[m(d,f,.59),m(d,f,.99),m(x,p,.99),m(x,p,.59)]}s!==r&&l.reverse(),t.quad(...l[0],...l[1],...l[2],...l[3],O(16777215))}const n=new te(t.build(),new pn({color:16752666,toneMapped:!1}));return n.visible=!1,n}function gd(i,t){i.visible=t===-1||t===1,i.visible&&(i.name=t<0?"left-turn-indicator":"right-turn-indicator",i.geometry.setDrawRange(t<0?0:pd,pd))}function Ql(i,t,e,n,s){const r=O(4413799),o=O(3425876),a=O(2635588),l=O(8624550),c=O(6651533),u=s??e,h=O(2105636),d=O(2566960),f=O(11252924),p=O(5793135),x=(Y,Z,F,J,q,nt,et=!1,st=0)=>{et?Y.quad(...q,...J,...F,...Z,nt,st):Y.quad(...Z,...F,...J,...q,nt,st)},{wagon:m,ute:g,tail:_,nose:M,sill:v,belt:b}=$l(i),E=g||m?1.55:1.42,S=g?1.63:m?1.6:1.49,y=g?-.52:m?-1.95:-1.47,w=g?-.37:m?-1.72:-.74,T=1.02,R=g?.64:.42,P=-1.35,U=1.38,L=.34,z=.387,I=[_,_+.58,M-.55,M];for(const Y of[P,U])for(let Z=0;Z<=5;Z++)I.push(Y-z*Math.cos(Math.PI*Z/5));I.sort((Y,Z)=>Y-Z);const B=Y=>{const Z=Math.min(Math.abs(Y-P),Math.abs(Y-U));return Z<z+1e-5?L+Math.sqrt(Math.max(0,z*z-Z*Z)):.3};for(const Y of[-1,1])for(let Z=1;Z<I.length;Z++){const F=I[Z-1],J=I[Z],q=b(F),nt=b(J);x(t,[Y*q.width,B(F),F],[Y*q.width,q.shoulder,F],[Y*nt.width,nt.shoulder,J],[Y*nt.width,B(J),J],n,Y<0)}const $=[_,_+.15,_+.58,y,T,M-.55,M].sort((Y,Z)=>Y-Z);for(let Y=1;Y<$.length;Y++){const Z=$[Y-1],F=$[Y],J=b(Z),q=b(F);for(const wt of[-1,1])x(t,[wt*J.width,J.shoulder,Z],[wt*(J.width-.08),J.top,Z],[wt*(q.width-.08),q.top,F],[wt*q.width,q.shoulder,F],n,wt<0);if(Z>=y&&F<=T)continue;const nt=g&&Z>=_+.15&&F<=y,et=J.width-.08,st=q.width-.08;if(nt)for(const wt of[-1,1])x(t,[wt*et,J.top,Z],[wt*.665,J.top,Z],[wt*.665,q.top,F],[wt*st,q.top,F],n,wt<0),x(e,[wt*.665,J.top,Z],[wt*.665,.7,Z],[wt*.665,.7,F],[wt*.665,q.top,F],d,wt<0);else x(t,[-et,J.top,Z],[-st,q.top,F],[st,q.top,F],[et,J.top,Z],n)}if(g){const Y=_+.15,Z=y;x(e,[-.665,.7,Y],[-.665,.7,Z],[.665,.7,Z],[.665,.7,Y],O(4343627));for(const[F,J]of[[Y,1],[Z,0]])x(e,[-.665,.7,F],[.665,.7,F],[.665,b(F).top,F],[-.665,b(F).top,F],d,!J)}const N=(Y,Z,F)=>{const J=y+(w-y)*F,q=T+(R-T)*F;return[Y*(.8-.145*F),v+(E-v)*F,J+(q-J)*Z]},H=m?[0,.07,.275,.32,.56,.6,.935,1]:g?[0,.12,.33,.395,.925,1]:[0,.09,.47,.525,.925,1];for(const Y of[-1,1]){const Z=(F,J,q,nt,et,st)=>x(et,N(Y,F,q),N(Y,F,nt),N(Y,J,nt),N(Y,J,q),st,Y<0);Z(0,1,0,.07,t,n),Z(0,1,.93,1,t,n);for(let F=1;F<H.length;F++){const J=F%2===0,q=F!==1&&F!==H.length-1,nt=u.vertexCount;Z(H[F-1],H[F],.07,.93,J?u:q?e:t,J?F===2?a:o:q?d:n),J&&u.gradientY(nt,v,E,F===2?a:o,F===2?c:l)}}for(const Y of[-1,1])x(t,N(Y,0,1),[Y*.58,S,w+.045],[Y*.58,S,R-.045],N(Y,1,1),n,Y<0);x(t,[-.58,S,w+.045],[-.58,S,R-.045],[.58,S,R-.045],[.58,S,w+.045],n);for(const Y of[0,1]){const Z=Y?R-.045:w+.045;x(t,N(-1,Y,1),N(1,Y,1),[.58,S,Z],[-.58,S,Z],n,!Y);const F=(nt,et)=>[(nt*2-1)*(.8-.145*et),v+(E-v)*et,N(1,Y,et)[2]],J=(nt,et,st,wt,xt,Ft)=>x(nt,F(et,wt),F(st,wt),F(st,xt),F(et,xt),Ft,!Y),q=u.vertexCount;s?(J(t,0,.055,0,1,n),J(t,.945,1,0,1,n),J(e,.055,.945,0,.06,d),J(e,.055,.945,.94,1,d),J(u,.055,.945,.06,.94,Y?r:a)):J(u,0,1,0,1,Y?r:a),u.gradientY(q,v,E,Y?r:a,Y?l:c)}if(s){const Z=O(3620678),F=O(4935251),J=O(3685700),q=nt=>{for(const et of[-.38,.38])e.box(et-.23,.695,nt-.22,et+.23,v-.06,nt+.27,F),e.box(et-.23,v-.085,nt-.21,et+.23,v+.24,nt-.075,F),e.box(et-.103,v+.235,nt-.185,et+.103,v+.36,nt-.08,J)};e.box(-.7,.6829999999999999,y+.05,.7,.695,T-.05,O(2698545)),e.box(-.71,v-.23,T-.4,.71,v+.022,T-.14,Z),e.box(-.6,v,T-.43,-.22,v+.105,T-.26,d),q((y+T)/2+.17),g||q(y+.62)}if(m)for(const Y of[-1,1]){const Z=Y*.56;e.box(Z-.032,S,w+.17,Z+.032,1.67,R-.21,d)}for(const Y of[-1,1]){const Z=Y>0?M:_,{width:F,shoulder:J,top:q}=b(Z);if(g&&Y<0){const st=[[-F,.3,Z],[F,.3,Z],[F,J,Z],[-F,J,Z]],wt=[[-.41,.59,Z],[.41,.59,Z],[.46,.74,Z],[-.46,.74,Z]],xt=[[-.39,.612,Z+.024],[.39,.612,Z+.024],[.43,.716,Z+.024],[-.43,.716,Z+.024]];for(let Ft=0;Ft<4;Ft++){const kt=(Ft+1)%4;x(t,st[Ft],st[kt],wt[kt],wt[Ft],n,!0),x(t,wt[Ft],wt[kt],xt[kt],xt[Ft],n,!0)}x(t,xt[0],xt[1],xt[2],xt[3],Wt(n,.88),!0)}else x(t,[-F,.3,Z],[F,.3,Z],[F,J,Z],[-F,J,Z],n,Y<0);x(t,[-F,J,Z],[F,J,Z],[F-.08,q,Z],[-F+.08,q,Z],n,Y<0);const nt=Z+Y*.008;for(const st of[-1,1])x(e,...fd(i,Y,st,nt,F,J,q),Y>0?O(14477800):O(12003881),st!==Y,Y>0?1.1:.6);Y>0?x(e,[-.48,.39,nt],[.48,.39,nt],[.53,.54,nt],[-.53,.54,nt],d):g&&x(e,[-.12,.76,nt],[.12,.76,nt],[.12,.8,nt],[-.12,.8,nt],d,!0);const et=Z+Y*.012;x(e,[-.2,.44,et],[.2,.44,et],[.2,.55,et],[-.2,.55,et],O(14014927),Y<0)}e.box(-.7,.23,_+.22,.7,.69,M-.22,d,null);const K=(Y,Z,F,J)=>[Y,L+J*Math.sin(F)*Math.sin(.4*Math.PI),Z+J*Math.cos(F)];for(const Y of[-1,1])for(const Z of[P,U]){const F=Y*.69,J=Y*.9,q=Y*.912;for(let nt=0;nt<8;nt++){const et=nt*Math.PI/4,st=(nt+1)*Math.PI/4,wt=K(J,Z,et,.34),xt=K(J,Z,st,.34);x(e,K(F,Z,et,.34),wt,xt,K(F,Z,st,.34),h,Y<0),Y>0?e.tri(J,L,Z,...xt,...wt,h):e.tri(J,L,Z,...wt,...xt,h)}for(let nt=0;nt<6;nt++){const et=K(q,Z,nt*Math.PI/3,.188),st=K(q,Z,(nt+1)*Math.PI/3,.188),wt=nt%2?f:p;Y>0?e.tri(Y*.905,L,Z,...st,...et,wt):e.tri(Y*.905,L,Z,...et,...st,wt)}}}function ko(i,t,e,n,s,r){const o=-t/2,a=t*.12,l=t/2,c=e/2,u=c*.5,h=Wt(s,.72);for(const f of[-1,1])f>0?(i.quad(u,0,o,c*.88,n,o,c,n,a,u,0,a,s),i.quad(u,0,a,c,n,a,0,n*1.12,l,0,.1,l*.86,s)):(i.quad(-u,0,a,-c,n,a,-c*.88,n,o,-u,0,o,s),i.quad(0,.1,l*.86,0,n*1.12,l,-c,n,a,-u,0,a,s));i.quad(-u,0,o,-c*.88,n,o,c*.88,n,o,u,0,o,h),i.quad(-u,0,o,u,0,o,u,0,a,-u,0,a,h),i.tri(-u,0,a,u,0,a,0,.1,l*.86,h);const d=n*.8;i.quad(-c*.84,d,o+.05,c*.84,d,o+.05,c*.95,d,a,-c*.95,d,a,r),i.tri(-c*.95,d,a,c*.95,d,a,0,d,l*.95,r)}function gM(i,t){const e=new se,n=O(16119280);if(i===0)ko(e,4.6,1.9,.75,t()<.5?O(12962767):di[Math.floor(t()*6)],O(10133668)),e.box(-.2,.55,-2.65,.2,1.25,-2.25,O(1974822)),e.box(-.75,.6,-.9,.75,.72,-.5,O(9138002)),e.box(-.75,.6,.4,.75,.72,.8,O(9138002));else if(i===1){const s=di[Math.floor(t()*di.length)];ko(e,7.4,2.7,1.25,n,O(15131350)),e.box(-1.37,.72,-3.7,1.37,.9,3,s,null),e.box(-1.05,1,-1.2,1.05,2.25,1.9,n,O(15329248)),e.quad(-1,1.45,1.92,1,1.45,1.92,.9,2.2,1.92,-.9,2.2,1.92,O(2240572),.4),e.box(-1.06,1.5,-.9,-1.05,2.1,1.6,O(2240572),null),e.box(1.05,1.5,-.9,1.06,2.1,1.6,O(2240572),null),e.box(-.9,2.25,-1,.9,2.33,1.2,n),e.cyl(0,2.33,-.6,.03,.02,1.6,4,O(9278358))}else ko(e,9,2.8,1.3,t()<.6?n:O(2377070),O(14208952)),e.box(-.85,1.05,-1.6,.85,1.55,1.6,n,O(15329248)),e.cyl(0,1.05,.9,.08,.05,11.5,5,O(14014682)),e.box(-.06,2.45,-3,.06,2.57,.9,O(14014682)),e.blob(0,2.72,-1.05,.17,.17,1.9,5,3,O(3104666)),e.quad(-.01,12.4,.9,.01,12.4,.9,.01,1.4,4.4,-.01,1.4,4.4,O(10133154));return e.build()}function xM(i){const t=new se;return ko(t,4.2,1.5,.55,O(16119280),O(14736588)),t.cyl(0,.45,.5,.04,.03,6,4,O(14014682)),t.tri(.02,6.3,.5,.02,1.1,.45,.6,1.2,-2,i),t.tri(.02,4.6,.6,.3,1,1.9,.02,1,.6,O(16250866)),t.blob(.35,.95,-.9,.22,.4,.22,5,3,O(14238767)),t.build()}function _M(i,t){const e=new se,n=8,s=9,r=2.6;for(let o=0;o<n;o++){const a=-1.15+o/n*2.3,l=-1.15+(o+1)/n*2.3,c=Math.sin(a)*s*.5,u=Math.cos(a)*s*.42,h=Math.sin(l)*s*.5,d=Math.cos(l)*s*.42,f=o===0||o===n-1||o===3||o===4?t:i;e.quad(c,u,-r/2,h,d,-r/2,h,d,r/2,c,u,r/2,f)}return e.build()}function MM(i,t){const e=new se;return e.box(-.22,0,-.75,.22,.06,.75,i),e.blob(-.25,.75,0,.2,.62,.22,5,3,t),e.blob(-.42,1.48,0,.13,.14,.13,5,3,O(14264711)),e.build()}function vM(i){const t=new se;return t.blob(0,.02,0,.27,.05,1.05,6,2,i),t.blob(0,.42,-.1,.2,.4,.18,5,3,O(1976112)),t.blob(0,.9,-.1,.12,.13,.12,5,3,O(14264711)),t.build()}function SM(i){const t=new Map;for(const r of i){if(r.cls>1||!r.name||r.flags)continue;const o=t.get(r.name)??[];o.push(r),t.set(r.name,o)}const e=[],n=(r,o)=>o?[r[r.length-3],r[r.length-1]]:[r[0],r[2]],s=r=>{const o=new Float32Array(r.length);for(let a=0;a<r.length/3;a++)o.set(r.subarray(a*3,a*3+3),r.length-3-a*3);return o};for(const r of t.values()){const o=r.map(l=>l.pts),a=r[0].width;for(;o.length;){let l=Array.from(o.pop()),c=!0;for(;c;){c=!1;for(let f=0;f<o.length;f++){const p=o[f],x=[l[l.length-3],l[l.length-1]],m=[l[0],l[2]],g=(v,b)=>Math.hypot(v[0]-b[0],v[1]-b[1])<2.5;let _=null,M=!0;if(g(x,n(p,!1))?_=p:g(x,n(p,!0))?_=s(p):g(m,n(p,!0))?(_=p,M=!1):g(m,n(p,!1))&&(_=s(p),M=!1),!!_){l=M?l.concat(Array.from(_.subarray(3))):Array.from(_.subarray(0,_.length-3)).concat(l),o.splice(f,1),c=!0;break}}}const u=new Float32Array(l),h=u.length/3,d=new Float32Array(h);for(let f=1;f<h;f++)d[f]=d[f-1]+Math.hypot(u[f*3]-u[f*3-3],u[f*3+2]-u[f*3-1]);d[h-1]>380&&e.push({pts:u,cum:d,length:d[h-1],width:a})}}return e}const Ui=(i,t)=>`${Math.round(i*4)}_${Math.round(t*4)}`;function tc(i,t=2,e=320){if(i.length<=(e<320?24:96)||t===0)return[i];let n=1/0,s=-1/0,r=1/0,o=-1/0;for(const h of i)n=Math.min(n,h.x),s=Math.max(s,h.x),r=Math.min(r,h.z),o=Math.max(o,h.z);const a=s-n,l=o-r;if(Math.max(a,l)<e)return[i];const c=a>l?"x":"z";i.sort((h,d)=>h[c]-d[c]);const u=Math.floor(i.length/2);return[...tc(i.slice(0,u),t-1,e),...tc(i.slice(u),t-1,e)]}class yM{constructor(t,e,n,s,r){X(this,"group",new Je);X(this,"afloat",new Je);X(this,"boats",[]);X(this,"dinghies",[]);X(this,"kites",[]);X(this,"kiteLines");X(this,"surfers",[]);X(this,"traffic");X(this,"trafficTrim");X(this,"cars",[]);X(this,"parkedAt",new Map);X(this,"parkedSets",[]);X(this,"hiddenCars",new Set);X(this,"cabinCar");X(this,"drivenAt",new Map);X(this,"drivenSets",[]);X(this,"carMat",Rs());X(this,"tmpE",new dn);X(this,"nothing",new ie().makeScale(0,0,0));X(this,"gulls");X(this,"gullState",[]);X(this,"tmpM",new ie);X(this,"tmpQ",new Tn);X(this,"tmpP",new V);X(this,"up",new V(0,1,0));X(this,"one",new V(1,1,1));X(this,"contact");this.ctx=t,this.closeCarShadows=n,this.roadSurfaceAt=s,this.hostCarLift=r,this.group.name="life",this.group.add(this.afloat);const o=this.carMat;this.addParkedCars(),this.addTraffic(o),this.addBoats(o,e),this.addKites(o),this.addSurfers(o,e),this.addPeople(e),this.addGulls(e),this.update(0,0)}setTide(t){this.afloat.position.y=t}sit(t,e,n,s){const r=this.ctx.hf,o=Math.sin(n),a=Math.cos(n),l=(f,p)=>this.roadSurfaceAt(f,p)??r.yAt(f,p),c=l(t+o*1.3,e+a*1.3),u=l(t-o*1.3,e-a*1.3),h=l(t-a*.8,e+o*.8),d=l(t+a*.8,e-o*.8);return this.tmpQ.setFromEuler(this.tmpE.set(-Math.atan2(c-u,2.6),n,Math.atan2(d-h,1.6),"YXZ")),this.tmpM.compose(this.tmpP.set(t,(c+u+h+d)/4+s,e),this.tmpQ,this.one)}carShapes(t){return t?Jl(t-1):{body:dd(),trim:void 0}}makeCabinCar(t,e){const n=new se,s=new se;Ql(t,n,n,e,s);const r=new Je,o=new te(n.build(),this.carMat);o.name="vehicle-cabin-shell",o.castShadow=o.receiveShadow=!0;const a=new te(s.build(),Mr(new pn({vertexColors:!0,transparent:!0,opacity:.34,depthTest:!0,depthWrite:!1,side:Ce,forceSinglePass:!0})));return a.name="vehicle-window-panes",r.add(o,a),{group:r,shell:o,panes:a,remove(){r.removeFromParent(),o.geometry.dispose(),a.geometry.dispose(),a.material.dispose()}}}makeTrafficCar(t,e,n,s,r){const o=new se,a=O(e);Ql(t,o,o,a);const l=o.build(),c=l.boundingBox,u=(x,m)=>Math.min(1,x/m),h=new V(u(n,Math.max(-c.min.x,c.max.x)),u(r,c.max.y),u(s,Math.max(-c.min.z,c.max.z))),d=new te(l,this.carMat);d.name="traffic-stock-shell",d.castShadow=d.receiveShadow=!0,d.scale.copy(h);const f=new Je;f.name=["traffic-sedan","traffic-wagon","traffic-ute"][t],f.matrixAutoUpdate=!1,f.visible=!1,f.add(d),this.group.add(f);let p;return{mesh:f,scale:h,setCabin:x=>{x&&!p&&(p=this.makeCabinCar(t,a),p.group.scale.copy(h),f.add(p.group)),p&&(p.group.visible=x),d.visible=!x},remove:()=>{f.removeFromParent(),l.dispose(),p==null||p.remove()}}}addParkedCars(){const{town:t,hf:e,paths:n}=this.ctx,s=t.cars,r=s.length/Ls,o=[[],[],[],[]],a=new Set,l=(h,d)=>`${Math.round(h/7)}_${Math.round(d/7)}`;for(let h=0;h<r;h++){const d=s[h*Ls]/4,f=s[h*Ls+1]/4;if(this.ctx.isClear(d,f)||!this.ctx.isDetail(d,f)&&this.ctx.roads.nearest(d,f,5.5))continue;const p=1+(s[h*Ls+3]+h)%3;o[p].push({x:d,z:f,heading:s[h*Ls+2]/10*(Math.PI/180),colour:Bs[(s[h*Ls+3]*7+h)%Bs.length]}),a.add(l(d,f))}const c=Pe(911);let u=0;for(const h of n){if(u>=1100||h.width<3.4||h.width>12)continue;const d=h.pts.length/3;let f=20+c()*60;for(let p=1;p<d;p++){const x=h.pts[(p-1)*3],m=h.pts[(p-1)*3+2],g=h.pts[p*3],_=h.pts[p*3+2],M=Math.hypot(g-x,_-m);if(f-=M,f>0||M<.01)continue;f=28+c()*70;const v=c()<.5?1:-1,b=(g-x)/M,E=(_-m)/M,S=Math.max(h.width/2-.55,1.5),y=g+E*S*v,w=_-b*S*v,T=Math.floor(c()*Bs.length),R=Math.floor(c()*3);if(e.metresAt(y,w)<.6||!e.inside(y,w,30)||this.ctx.isClear(y,w))continue;let P=!0;for(let U=-1;U<=1&&P;U++)for(let L=-1;L<=1;L++)if(a.has(`${Math.round(y/7)+U}_${Math.round(w/7)+L}`)){P=!1;break}P&&(a.add(l(y,w)),o[1+R].push({x:y,z:w,heading:Math.atan2(b*v,E*v),colour:Bs[T]}),u++)}}o.forEach((h,d)=>this.addParkedShape(h,d))}addParkedShape(t,e){if(!t.length)return;const n=Jl(e-1),s=n.body.boundingBox.clone().union(n.trim.boundingBox),r={halfWidth:Math.max(-s.min.x,s.max.x),halfLength:Math.max(-s.min.z,s.max.z),height:s.max.y},o=jl(e-1,!1),a=jl(e-1,!0);for(const l of tc(t,5,140)){const c=this.parkedSets.length,u=new Ve(n.body,this.carMat,l.length),h=new Ve(n.trim,this.carMat,l.length),d=new Ve(o,this.carMat,l.length),f=new Ve(a,this.carMat,l.length);u.name="parked-car-near-body",h.name="parked-car-near-trim",d.name="parked-car-mid",f.name="parked-car-far";const p=[u,h,d,f],x=[u,d,f],m=new Lt;l.forEach((_,M)=>{const{x:v,z:b,heading:E,colour:S}=_,y=this.sit(v,b,E,.02);for(const w of p)w.setMatrixAt(M,y);m.set(S);for(const w of x)w.setColorAt(M,m);this.parkedAt.set(Ui(v,b),{set:c,k:M,x:v,y:y.elements[13],z:b,heading:E})});const g=new cd([[u,h],[d],[f]],this.group);this.closeCarShadows&&this.addContactShadow(u),this.parkedSets.push({body:u,meshes:p,homeMatrices:Float32Array.from(u.instanceMatrix.array),lod:g,shape:e,envelope:r}),l.forEach(({x:_,z:M})=>{const v=Ui(_,M);this.hiddenCars.has(v)&&this.showParkedCar(this.parkedAt.get(v),!1)})}}addContactShadow(t){this.contact??(this.contact={geometry:new Hn(2.5,5.1).rotateX(-Math.PI/2).translate(0,.027,0),material:new sn({transparent:!0,depthWrite:!1,vertexShader:`varying vec2 patchUV;
          void main(){patchUV=2.*uv-1.;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 patchUV;
          void main(){float edge=length(max(abs(patchUV)-vec2(.49,.57),0.)/vec2(.50,.42));
            gl_FragColor=vec4(.012,.015,.016,.32*(1.-smoothstep(.05,1.,edge)));
            #include <colorspace_fragment>
          }`})});const e=new Ve(this.contact.geometry,this.contact.material,t.count);e.name="parked-car-contact",e.instanceMatrix=t.instanceMatrix,e.boundingSphere=t.boundingSphere,t.add(e)}addCars(t){const e=[[],[],[],[]];for(const n of t)e[1+(n.kind??0)%3].push(n);e.forEach((n,s)=>this.addParkedShape(n,s))}setControlledCar(t,e=0){var r,o,a;const n=t===null?void 0:t>=9e5?`t${t-9e5}`:Ui(t,e);if(n&&!this.parkedAt.has(n)&&!this.drivenAt.has(n))return!1;const s=(r=this.cabinCar)==null?void 0:r.key;if(s===n)return!0;(a=(o=this.cabinCar)==null?void 0:o.view)==null||a.remove(),this.cabinCar=n?{key:n}:void 0;for(const l of[s,n]){if(l===void 0)continue;const c=!this.hiddenCars.has(l),u=this.drivenAt.get(l),h=this.parkedAt.get(l);u?this.showDrivenCar(l,u,c):h&&this.showParkedCar(h,c)}return!0}showCabinCar(t,e,n,s){const r=this.cabinCar;if((r==null?void 0:r.key)!==t)return!1;if(n&&!r.view){const o=this.parkedAt.get(t),a=this.drivenAt.get(t),l=o&&this.parkedSets[o.set],c=new Lt;o&&l?l.body.getColorAt(o.k,c):a&&this.drivenSets[a.set].body.getColorAt(a.k,c);const u=(l==null?void 0:l.shape)??(a==null?void 0:a.set)??1,h=r.view=this.makeCabinCar(Math.max(0,u-1),[c.r,c.g,c.b]);h.group.name="native-close-car",h.group.matrixAutoUpdate=!1,this.contact&&(h.contact=new Ve(this.contact.geometry,this.contact.material,1),h.contact.name="parked-car-contact",h.group.add(h.contact)),this.group.add(h.group)}return r.view&&(r.view.group.visible=n,r.view.group.matrix.copy(e),r.view.group.matrixWorldNeedsUpdate=!0,r.view.contact&&(r.view.contact.visible=s)),!0}showParkedCar(t,e){const n=this.parkedSets[t.set],s=Ui(t.x,t.z),r=this.tmpM.fromArray(n.homeMatrices,t.k*16),o=!this.drivenAt.has(s)&&this.showCabinCar(s,r,e,!0),a=e&&!o?r:this.nothing;for(const l of n.meshes)l.setMatrixAt(t.k,a),l.instanceMatrix.needsUpdate=!0}setHiddenCars(t){const e=new Set(t.map(([n,s])=>Ui(n,s)));for(const[n,s]of this.parkedAt){const r=!e.has(n);if(r===!this.hiddenCars.has(n))continue;const o=this.drivenAt.get(n);o?this.showDrivenCar(n,o,r):this.showParkedCar(s,r)}this.hiddenCars=e}carBlocker(t,e){const n=this.drivenAt.get(t),s=n??e;return{id:[e.x,e.z],x:s.x,y:n?n.y+this.hostCarLift:e.y,z:s.z,heading:s.heading,...this.parkedSets[e.set].envelope}}parkedCarBlockers(){const t=[];for(const[e,n]of this.parkedAt)this.hiddenCars.has(e)||t.push(this.carBlocker(e,n));return t}parkedCarBlocker(t,e){const n=Ui(t,e),s=this.parkedAt.get(n);return s&&!this.hiddenCars.has(n)?this.carBlocker(n,s):null}nearestCar(t,e,n){let s=null;for(const[r,o]of this.parkedAt){if(this.hiddenCars.has(r))continue;const a=this.drivenAt.get(r)??o,l=Math.hypot(a.x-t,a.z-e);l<(s?s.distance:n)&&(s={id:[o.x,o.z],x:a.x,z:a.z,heading:a.heading,distance:l})}return this.cars.forEach((r,o)=>{const a=this.drivenAt.get(`t${o}`)??r,l=Math.hypot(a.x-t,a.z-e);l<(s?s.distance:n)&&(s={id:[9e5+o,0],x:a.x,z:a.z,heading:a.heading,distance:l})}),s}resetCar(t,e){var c,u;const n=t>=9e5?this.cars[t-9e5]:void 0,s=n?`t${t-9e5}`:Ui(t,e),r=this.drivenAt.get(s);if(!r)return!1;this.drivenAt.delete(s),((c=this.cabinCar)==null?void 0:c.key)===s&&((u=this.cabinCar.view)==null||u.remove(),this.cabinCar=void 0);const o=this.drivenSets[r.set],a=--o.n;if(r.k!==a)for(const[h,d]of this.drivenAt){if(d.set!==r.set||d.k!==a)continue;const f=new Lt;o.body.getColorAt(a,f),d.k=r.k,o.body.setColorAt(d.k,f),o.body.instanceColor.needsUpdate=!0,this.showDrivenCar(h,d,!this.hiddenCars.has(h));break}o.body.count=a,o.trim&&(o.trim.count=a),r.indicator&&(r.indicator.removeFromParent(),r.indicator.geometry.dispose(),r.indicator.material.dispose()),n&&(n.gone=!1);const l=this.parkedAt.get(s);return l&&!this.hiddenCars.has(s)&&this.showParkedCar(l,!0),!0}showDrivenCar(t,e,n){const s=this.drivenSets[e.set],r=this.showCabinCar(t,e.matrix,n,!1),o=n&&!r?e.matrix:this.nothing;s.body.setMatrixAt(e.k,o),s.body.instanceMatrix.needsUpdate=!0,s.trim&&(s.trim.setMatrixAt(e.k,o),s.trim.instanceMatrix.needsUpdate=!0),e.indicator&&(gd(e.indicator,n?e.signal:0),e.indicator.visible&&(e.indicator.matrix.copy(e.matrix),e.indicator.matrixWorldNeedsUpdate=!0))}driveCar(t,e,n,s,r,o,a=0,l=0,c=0){const u=t>=9e5?this.cars[t-9e5]:void 0,h=u?`t${t-9e5}`:Ui(t,e),d=u?void 0:this.parkedAt.get(h);if(!d&&!u)return!1;let f=this.drivenAt.get(h);if(!f){if(this.drivenAt.size>=12||this.hiddenCars.has(h))return!1;const p=d?this.parkedSets[d.set].shape:this.trafficTrim?1:0;let x=this.drivenSets[p];if(!x){const g=this.carShapes(p);x=this.drivenSets[p]={body:new Ve(g.body,this.carMat,12),trim:g.trim?new Ve(g.trim,this.carMat,12):void 0,n:0};for(const _ of[x.body,x.trim])_&&(_.count=0,_.frustumCulled=!1,_.castShadow=!0,this.group.add(_))}f={set:p,k:x.n++,x:n,y:s,z:r,heading:o,matrix:new ie,signal:c},this.drivenAt.set(h,f),x.body.count=x.n,x.trim&&(x.trim.count=x.n);const m=new Lt;d?(this.parkedSets[d.set].body.getColorAt(d.k,m),this.showParkedCar(d,!1)):(this.traffic.getColorAt(t-9e5,m),u.gone=!0),x.body.setColorAt(f.k,m),x.body.instanceColor.needsUpdate=!0}return f.x=n,f.y=s,f.z=r,f.heading=o,f.signal=c,this.tmpQ.setFromEuler(this.tmpE.set(-a,o,l,"YXZ")),f.matrix.compose(this.tmpP.set(n,s+this.hostCarLift,r),this.tmpQ,this.one),c&&!f.indicator&&(f.indicator=md(f.set-1),f.indicator.matrixAutoUpdate=!1,this.group.add(f.indicator)),this.showDrivenCar(h,f,!this.hiddenCars.has(h)),!0}addTraffic(t){const e=SM(this.ctx.paths);if(!e.length)return;const n=e.reduce((c,u)=>c+u.length,0),s=0,r=Pe(77),o=this.ctx.hasDetail?Jl(0):null,a=this.traffic=new Ve(o?o.body:dd(),t,s);if(a.instanceMatrix.setUsage(Bi),a.frustumCulled=!1,o){const c=this.trafficTrim=new Ve(o.trim,t,s);c.instanceMatrix.setUsage(Bi),c.frustumCulled=!1,c.castShadow=!0,this.group.add(c)}const l=new Lt;for(let c=0;c<s;c++){let u=r()*n,h=e[0];for(const d of e)if((u-=d.length)<=0){h=d;break}this.cars.push({route:h,s:r()*h.length,dir:r()<.5?1:-1,speed:9+r()*6,x:0,z:0,heading:0}),a.setColorAt(c,l.set(Bs[Math.floor(r()*Bs.length)]))}a.castShadow=!0,this.group.add(a)}addBoats(t,e){var c;const{hf:n}=this.ctx,s=Pe(451),r=((c=e.jetty)==null?void 0:c.head)??new V(380,0,-117),o=[];for(let u=0;u<4e3&&o.length<16;u++){const h=s()*Math.PI*2,d=55+s()*420,f=r.x+Math.cos(h)*d,p=r.z+Math.sin(h)*d;n.metresAt(f,p)>-1.9||!n.inside(f,p,40)||o.some(([x,m])=>Math.hypot(x-f,m-p)<26)||o.push([f,p])}const a=2.2+s()*.4;o.forEach(([u,h],d)=>{const f=d%5===0?2:d%2?0:1,p=new te(gM(f,s),t);p.position.set(u,0,h),p.rotation.y=a+(s()-.5)*.5,p.castShadow=!0,this.afloat.add(p),this.boats.push({obj:p,phase:s()*6.28,y:f===0?-.22:-.42})});const l=[O(16250866),O(15222589),O(3117008),O(15909424)];for(let u=0;u<600&&this.dinghies.length<4;u++){const h=s()*Math.PI*2,d=150+s()*900,f=r.x+Math.cos(h)*d,p=r.z+160+Math.sin(h)*d*.5,x=45+s()*70,m=30+s()*40;let g=n.inside(f,p,160);for(let M=0;M<12&&g;M++){const v=M/12*Math.PI*2;n.metresAt(f+Math.cos(v)*x,p+Math.sin(v)*m)>-1.5&&(g=!1)}if(!g||this.dinghies.some(M=>Math.hypot(M.cx-f,M.cz-p)<170))continue;const _=new te(xM(l[this.dinghies.length%l.length]),t);_.castShadow=!0,this.afloat.add(_),this.dinghies.push({obj:_,cx:f,cz:p,rx:x,rz:m,phase:s()*6.28,speed:(2.2+s())/Math.max(x,m)})}}addKites(t){const{hf:e,town:n}=this.ctx,s=Pe(990),[r,o]=_n(n.meta,-38.6385,145.714),[a,l]=_n(n.meta,-38.645,145.731),c=[];for(let d=0;d<3e3&&c.length<6;d++){const f=r+s()*(a-r),p=o+s()*(l-o);e.metresAt(f,p)>-1.6||c.some(x=>Math.hypot(x.x-f,x.z-p)<110)||c.push(new V(f,0,p))}const u=new Float32Array(c.length*12);c.forEach((d,f)=>{let p=85;for(;p>15&&(e.metresAt(d.x+.65*p,d.z+.76*p)>-1.2||e.metresAt(d.x-.65*p,d.z-.76*p)>-1.2);)p-=10;const x=di[Math.floor(s()*7)],m=di[Math.floor(s()*7)],g=new te(_M(x,m===x?di[7]:m),t),_=new te(MM(di[Math.floor(s()*7)],O(1976112)),t);g.castShadow=!0,this.afloat.add(g,_),this.kites.push({base:d,reach:p,phase:s()*6.28,speed:.12+s()*.06,kite:g,rider:_})});const h=new Re;h.setAttribute("position",new Te(u,3).setUsage(Bi)),this.kiteLines=new yh(h,Mr(new xh({color:15921906,transparent:!0,opacity:.7}))),this.kiteLines.frustumCulled=!1,this.afloat.add(this.kiteLines)}addSurfers(t,e){if(!e.surf)return;const{hf:n}=this.ctx,s=Pe(31),[r,o]=e.surf.seaward,a=e.surf.beach;let l=20;for(;l<420&&n.metresAt(a.x+r*l,a.z+o*l)>-2;)l+=5;for(let c=0;c<9;c++){const u=(c-4)*13+(s()-.5)*8,h=l+(s()-.5)*30,d=a.x+r*h-o*u,f=a.z+o*h+r*u,p=new te(vM(di[Math.floor(s()*di.length)]),t);p.position.set(d,0,f),p.rotation.y=Math.atan2(r,o)+(s()-.5)*.8,this.afloat.add(p),this.surfers.push({obj:p,phase:s()*6.28})}}addPeople(t){const{hf:e,town:n,paths:s,roads:r,footprints:o}=this.ctx,a=Pe(2026),l=[],c=[],u=(I,B)=>o.some($=>{if(Math.hypot(I-$.cx,B-$.cz)>Math.max($.obb.w,$.obb.d))return!1;let N=!1;for(let H=0,K=$.poly.length-2;H<$.poly.length;K=H,H+=2){const Y=$.poly[H],Z=$.poly[H+1],F=$.poly[K],J=$.poly[K+1];Z>B!=J>B&&I<(F-Y)*(B-Z)/(J-Z)+Y&&(N=!N)}return N}),h=(I,B)=>!r.nearest(I,B,6.4)&&!u(I,B),d=(I,B,$,N,H,K,Y=0)=>{for(let Z=0,F=0;Z<N*40&&F<N;Z++){const J=a()*Math.PI*2,q=Math.sqrt(a())*$,nt=I+Math.cos(J)*q,et=B+Math.sin(J)*q,st=e.metresAt(nt,et);st<H||st>K||!h(nt,et)||(l.push(nt,e.yAt(nt,et),et),a()<Y&&c.push(nt+1.2,e.yAt(nt+1.2,et),et+.6),F++)}};t.surf&&d(t.surf.beach.x,t.surf.beach.z,130,60,1.5,3,.32);const[f,p]=_n(n.meta,-38.63575,145.729);d(f,p,120,34,1.5,2.4,.3);const[x,m]=_n(n.meta,-38.6356,145.7337);d(x,m,110,26,1.5,2.6,.2);const[g,_]=_n(n.meta,-38.63194,145.72681);d(g,_,55,14,0,99);const[M,v]=_n(n.meta,-38.63385,145.7285);for(const I of s){if(I.cls>3||I.flags)continue;const B=I.pts.length/3;for(let $=1;$<B;$++){const N=I.pts[$*3],H=I.pts[$*3+2];if(Math.hypot(N-M,H-v)>300||a()>.42||this.ctx.isClear(N,H))continue;const K=N-I.pts[$*3-3],Y=H-I.pts[$*3-1],Z=Math.hypot(K,Y)||1,F=a()<.5?1:-1,J=I.width/2+2.3+a()*1,q=N-Y/Z*J*F,nt=H+K/Z*J*F;h(q,nt)&&l.push(q,e.yAt(q,nt),nt)}}if(t.jetty){const I=t.jetty.points;for(let B=0;B<I.length-1;B++)for(let $=0;$<3;$++){const N=a();l.push(I[B][0]+(I[B+1][0]-I[B][0])*N+(a()-.5)*2,Kl,I[B][1]+(I[B+1][1]-I[B][1])*N+(a()-.5)*2)}}const b=l.length/3,E=new se;E.cyl(0,0,0,.17,.22,.85,5,O(2765632)),E.cyl(0,.85,0,.24,.2,.6,5,O(16777215),O(16777215));const S=new se;S.blob(0,1.6,0,.14,.15,.14,5,3,O(14264711));const y=new mo({vertexColors:!0}),w=I=>(I.deleteAttribute("glow"),I),T=new Ve(w(E.build()),y,b),R=new Ve(w(S.build()),y,b),P=new Lt,U=[16777215,15255976,12159590,9068354];for(let I=0;I<b;I++){const B=.92+a()*.2;this.tmpQ.setFromAxisAngle(this.up,a()*6.28),this.tmpM.compose(this.tmpP.set(l[I*3],l[I*3+1],l[I*3+2]),this.tmpQ,new V(B,B,B)),T.setMatrixAt(I,this.tmpM),R.setMatrixAt(I,this.tmpM),T.setColorAt(I,P.set(ud[Math.floor(a()*ud.length)])),R.setColorAt(I,P.set(U[Math.floor(a()*U.length)]))}T.computeBoundingSphere(),R.computeBoundingSphere(),this.group.add(T,R);const L=new se;L.cyl(0,0,0,.03,.03,2,4,O(14277081)),L.cyl(0,1.75,0,1.25,0,.5,8,O(16777215));const z=new Ve(w(L.build()),y,c.length/3);for(let I=0;I<c.length/3;I++)this.tmpQ.setFromAxisAngle(new V(1,0,0),(a()-.5)*.3),z.setMatrixAt(I,this.tmpM.compose(this.tmpP.set(c[I*3],c[I*3+1],c[I*3+2]),this.tmpQ,this.one)),z.setColorAt(I,P.set([14826299,3117008,15909424,3715691,15764004,16053490][Math.floor(a()*6)]));z.castShadow=!0,z.computeBoundingSphere(),this.group.add(z)}addGulls(t){if(!t.jetty)return;const e=Pe(8),n=16;for(let r=0;r<n;r++)this.gullState.push({cx:t.jetty.head.x+(e()-.5)*90,cz:t.jetty.head.z+(e()-.5)*90,r:18+e()*55,h:Kl+6+e()*16,w:(.25+e()*.3)*(e()<.5?1:-1),phase:e()*6.28});const s=new Re;s.setAttribute("position",new Te(new Float32Array(n*18),3).setUsage(Bi)),this.gulls=new te(s,Mr(new pn({color:16185074,side:Ce}))),this.gulls.frustumCulled=!1,this.group.add(this.gulls)}updateParkedLod(t,e,n){for(const s of this.parkedSets)s.lod.update(t,e,n)}update(t,e){for(const n of this.boats)n.obj.rotation.z=Math.sin(e*.9+n.phase)*.04,n.obj.rotation.x=Math.sin(e*.7+n.phase*1.7)*.025,n.obj.position.y=n.y+Math.sin(e*1.1+n.phase)*.06;for(const n of this.dinghies){const s=n.phase+e*n.speed;n.obj.position.set(n.cx+Math.cos(s)*n.rx,-.15,n.cz+Math.sin(s)*n.rz),n.obj.rotation.y=Math.atan2(-Math.sin(s)*n.rx,Math.cos(s)*n.rz),n.obj.rotation.z=.12+Math.sin(e*.8+n.phase)*.04}for(const n of this.surfers)n.obj.position.y=-.05+Math.sin(e*.9+n.phase)*.22;if(this.kiteLines){const n=this.kiteLines.geometry.getAttribute("position");this.kites.forEach((s,r)=>{const o=Math.sin(e*s.speed*6.28+s.phase),a=Math.cos(e*s.speed*6.28+s.phase)>=0?1:-1,l=s.base.x+.65*s.reach*o,c=s.base.z+.76*s.reach*o;s.rider.position.set(l,.05,c),s.rider.rotation.y=Math.atan2(.65*a,.76*a),s.rider.rotation.z=.28;const u=e*1.3+s.phase,h=l+12+a*5+Math.sin(u)*4.5,d=c-10+Math.cos(u)*1.5,f=17+Math.sin(u*2)*2.4;s.kite.position.set(h,f,d),s.kite.lookAt(l,1.2,c),s.kite.rotateX(-Math.PI/2),n.setXYZ(r*4,l-.3,1.25,c),n.setXYZ(r*4+1,h-2.6,f-1,d),n.setXYZ(r*4+2,l-.3,1.25,c),n.setXYZ(r*4+3,h+2.6,f-1,d)}),n.needsUpdate=!0}if(this.traffic&&(this.cars.forEach((n,s)=>{var M,v;if(n.gone){this.traffic.setMatrixAt(s,this.nothing),(M=this.trafficTrim)==null||M.setMatrixAt(s,this.nothing);return}const r=n.route;n.s+=n.dir*n.speed*t,n.s>r.length&&(n.s=r.length,n.dir=-1),n.s<0&&(n.s=0,n.dir=1);let o=0,a=r.cum.length-1;for(;a-o>1;){const b=o+a>>1;r.cum[b]<=n.s?o=b:a=b}const l=(n.s-r.cum[o])/(r.cum[a]-r.cum[o]||1),c=r.pts[o*3],u=r.pts[o*3+2],h=r.pts[a*3],d=r.pts[a*3+2];let f=h-c,p=d-u;const x=Math.hypot(f,p)||1;f=f/x*n.dir,p=p/x*n.dir;const m=Math.min(r.width*.24,2),g=c+(h-c)*l+p*m,_=u+(d-u)*l-f*m;n.x=g,n.z=_,n.heading=Math.atan2(f,p),this.traffic.setMatrixAt(s,this.sit(g,_,n.heading,.02)),(v=this.trafficTrim)==null||v.setMatrixAt(s,this.tmpM)}),this.traffic.instanceMatrix.needsUpdate=!0,this.trafficTrim&&(this.trafficTrim.instanceMatrix.needsUpdate=!0)),this.gulls){const n=this.gulls.geometry.getAttribute("position");this.gullState.forEach((s,r)=>{const o=s.phase+e*s.w,a=s.cx+Math.cos(o)*s.r,l=s.cz+Math.sin(o)*s.r,c=s.h+Math.sin(o*2.3)*1.5,u=s.w>0?1:-1,h=-Math.sin(o)*u,d=Math.cos(o)*u,f=d,p=-h,x=Math.sin(e*7+s.phase*3)*.45,m=r*6;n.setXYZ(m,a+h*.35,c,l+d*.35),n.setXYZ(m+1,a-h*.3,c,l-d*.3),n.setXYZ(m+2,a+f*.85,c+x,l+p*.85),n.setXYZ(m+3,a+h*.35,c,l+d*.35),n.setXYZ(m+4,a-f*.85,c+x,l-p*.85),n.setXYZ(m+5,a-h*.3,c,l-d*.3)}),n.needsUpdate=!0}}}const bM={low:320,medium:640,high:1040,ultra:1520},ji=new V(31,18,31),EM=`
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
}`,wM=`
varying float vOpacity;
void main() {
  gl_FragColor = vec4(0.54, 0.65, 0.76, vOpacity);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;class TM{constructor(t,e,n){X(this,"eye",new V);X(this,"material");X(this,"streaks");X(this,"wetness",{value:0});X(this,"ultra");X(this,"disposed",!1);X(this,"inletRain",{value:0});this.camera=e,this.ultra=n==="ultra";const s=bM[n],r=Pe(1229870668),o=new Float32Array(s*6),a=new Float32Array(s*8);for(let c=0;c<s;c++){const u=r()*ji.x,h=r()*ji.y,d=r()*ji.z,f=.25+r()*.54,p=.55+r()*.45,x=r();o.set([u,h,d,u,h,d],c*6),a.set([f,0,p,x,f,1,p,x],c*8)}const l=new Re;l.setAttribute("position",new Te(o,3)),l.setAttribute("aDrop",new Te(a,4)),this.material=new sn({uniforms:{uEye:{value:this.eye},uVolume:{value:ji},uDrift:{value:new Nt},uSlant:{value:new Nt},uFall:{value:0},uRain:{value:0},uShelter:{value:0}},vertexShader:EM,fragmentShader:wM,transparent:!0,depthWrite:!1}),this.streaks=new yh(l,this.material),this.streaks.name="local rain streaks",this.streaks.frustumCulled=!1,this.streaks.renderOrder=4,this.streaks.visible=!1,t.add(this.streaks)}shadeAsphalt(t,e=!1){const n=t.onBeforeCompile,s=t.customProgramCacheKey();t.customProgramCacheKey=()=>s+(e?":rain-asphalt-mask":":rain-asphalt"),t.onBeforeCompile=(r,o)=>{n.call(t,r,o),r.uniforms.uRoadWetness=this.wetness,e&&(r.vertexShader=`attribute float aAsphalt;
varying float vAsphalt;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vAsphalt = aAsphalt;`));const a=e?"(uRoadWetness * vAsphalt)":"uRoadWetness";r.fragmentShader=`uniform float uRoadWetness;
`+(e?`varying float vAsphalt;
`:"")+r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= mix(1.0, 0.66, `+a+");").replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.56, `+a+");")},t.needsUpdate=!0}update(t,e,n,s=2.9,r=-1,o=!1){if(this.disposed)return;const a=ne.clamp(t,0,1);if(this.wetness.value=ne.clamp(e,0,1),this.inletRain.value=this.ultra?a:0,this.streaks.visible=a>.015,!this.streaks.visible)return;this.camera.getWorldPosition(this.eye);const l=this.material.uniforms,c=12.5;l.uRain.value=a,l.uShelter.value=o?1:0,l.uFall.value=n*c%ji.y,l.uDrift.value.set(n*s%ji.x,n*r%ji.z),l.uSlant.value.set(s/c,r/c)}dispose(){this.disposed||(this.disposed=!0,this.wetness.value=this.inletRain.value=0,this.streaks.removeFromParent(),this.streaks.geometry.dispose(),this.material.dispose())}}const vn=(i,t,e)=>{const n=[],s=[];for(let r=0;r<i.length;r++){const o=i[r],a=i[(r+1)%i.length],l=t(o)-e,c=t(a)-e;if(l<=1e-9&&n.push(o),l>=-1e-9&&s.push(o),l<-1e-9&&c>1e-9||l>1e-9&&c<-1e-9){const u=l/(l-c),h=new Float64Array(o.length);for(let d=0;d<h.length;d++)h[d]=o[d]+(a[d]-o[d])*u;n.push(h),s.push(h)}}return[n,s]},ec=(i,t)=>{const e=[];for(let n of i){let s=1/0,r=-1/0;for(const o of n){const a=t(o);a<s&&(s=a),a>r&&(r=a)}for(let o=Math.floor(s+1e-9)+1;o<r-1e-9&&n.length>=3;o++){const[a,l]=vn(n,t,o);a.length>=3&&e.push(a),n=l}n.length>=3&&e.push(n)}return e};function nc(i,t,e,n,s){const r=[Math.min(t[0],e[0],n[0]),Math.min(t[2],e[2],n[2]),Math.max(t[0],e[0],n[0]),Math.max(t[2],e[2],n[2])];let o=[[t,e,n]];for(const a of i.patches){if(r[0]>=a.xMax||r[2]<=a.xMin||r[1]>=a.zMax||r[3]<=a.zMin)continue;const l=[];for(const c of o){const[u,h]=vn(c,_=>_[0],a.xMin),[d,f]=vn(h,_=>_[0],a.xMax),[p,x]=vn(d,_=>_[2],a.zMin),[m,g]=vn(x,_=>_[2],a.zMax);for(const _ of[u,f,p,g])_.length>=3&&l.push(_);m.length>=3&&xd(a,m,s)}o=l}for(const a of o)xd(i,a,s)}function xd(i,t,e){const n=o=>(o[0]-i.xMin)/i.dx,s=o=>(o[2]-i.zMin)/i.dz,r=o=>n(o)+s(o);if(t.length===3){const[o,a,l]=t,c=Math.min(n(o),n(a),n(l)),u=Math.max(n(o),n(a),n(l)),h=Math.min(s(o),s(a),s(l)),d=Math.max(s(o),s(a),s(l)),f=Math.min(r(o),r(a),r(l)),p=Math.max(r(o),r(a),r(l));if(Math.floor(c)===Math.floor(u-1e-9)&&Math.floor(h)===Math.floor(d-1e-9)&&Math.floor(f)===Math.floor(p-1e-9)){e(o,a,l);return}}for(const o of ec(ec(ec([t],n),s),r))for(let a=1;a+1<o.length;a++)e(o[0],o[a],o[a+1])}const qn=24,_d=.08,Er=.07,AM=.35,wr=1e-8,Tr=.001,ic=(i,t)=>i*65536+t;class RM{constructor(){X(this,"surfaces",new Map);X(this,"index")}add(t,e=t.length){const n=this.surfaces.get(t);e!==n&&(this.surfaces.set(t,e),n!==void 0?this.index=void 0:this.index&&Md(this.index,t,e))}remove(t){this.surfaces.delete(t)&&(this.index=void 0)}buildIndex(){const t={buffers:[],faces:[],cells:new Map};for(const[e,n]of this.surfaces)Md(t,e,n);return t}heightAt(t,e){const{buffers:n,faces:s,cells:r}=this.index??(this.index=this.buildIndex()),o=r.get(ic(Math.floor(t/qn),Math.floor(e/qn)));let a=-1/0;if(o)for(const l of o)a=Math.max(a,vd(n[s[l]],s[l+1],t,e,!0));return Number.isFinite(a)?a:null}project(t,e,n){const{buffers:s,faces:r,cells:o}=this.index??(this.index=this.buildIndex()),a=[],l=new Set,c=(n==null?void 0:n.length)??e.length/3,u=f=>{const p=(n?n[f]:f)*3;return new Float64Array([e[p],0,e[p+2]])},h=(f,p,x,m,g,_)=>{const M=(p[2]-f[2])*(x[0]-f[0])-(p[0]-f[0])*(x[2]-f[2]);Math.abs(M)<=wr||a.push(f[0],m,f[2],p[0],g,p[2],x[0],_,x[2])},d=(f,p)=>{const[x,,m]=f,g=this.heightAt(x,m);return g===null?Er:Math.max(Er,g-p+_d-.01)};for(let f=0;f+2<c;f+=3){const p=u(f),x=u(f+1),m=u(f+2);nc(t,p,x,m,(b,E,S)=>{const y=t.yAt(b[0],b[2]),w=t.yAt(E[0],E[2]),T=t.yAt(S[0],S[2]),R=d(b,y),P=d(E,w),U=d(S,T);Math.max(R,P,U)-Math.min(R,P,U)>AM?h(b,E,S,y+Er,w+Er,T+Er):h(b,E,S,y+R,w+P,T+U)});const g=Math.min(p[0],x[0],m[0]),_=Math.max(p[0],x[0],m[0]),M=Math.min(p[2],x[2],m[2]),v=Math.max(p[2],x[2],m[2]);l.clear();for(let b=Math.floor(g/qn);b<=Math.floor(_/qn);b++)for(let E=Math.floor(M/qn);E<=Math.floor(v/qn);E++){const S=o.get(ic(b,E));if(S)for(const y of S){if(l.has(y))continue;l.add(y);const w=s[r[y]],T=r[y+1],R=w[T],P=w[T+2],U=w[T+3],L=w[T+5],z=w[T+6],I=w[T+8];if(Math.max(R,U,z)<g||Math.min(R,U,z)>_||Math.max(P,L,I)<M||Math.min(P,L,I)>v)continue;const B=CM([p,x,m],R,P,U,L,z,I);if(B.length<3)continue;const $=K=>vd(w,T,K[0],K[2],!1)+_d,N=B[0],H=$(N);for(let K=1;K+1<B.length;K++){const Y=B[K],Z=B[K+1];h(N,Y,Z,H,$(Y),$(Z))}}}}return Float32Array.from(a)}}function Md({buffers:i,faces:t,cells:e},n,s){const r=i.length;i.push(n);for(let o=0;o+8<s;o+=9){const a=n[o],l=n[o+2],c=n[o+3],u=n[o+5],h=n[o+6],d=n[o+8];if((u-l)*(h-a)-(c-a)*(d-l)<=wr)continue;const f=t.length;t.push(r,o);const p=Math.floor((Math.min(a,c,h)-Tr)/qn),x=Math.floor((Math.max(a,c,h)+Tr)/qn),m=Math.floor((Math.min(l,u,d)-Tr)/qn),g=Math.floor((Math.max(l,u,d)+Tr)/qn);for(let _=p;_<=x;_++)for(let M=m;M<=g;M++){const v=ic(_,M);let b=e.get(v);b||e.set(v,b=[]),b.push(f)}}}function vd(i,t,e,n,s){const r=i[t],o=i[t+1],a=i[t+2],l=i[t+3]-r,c=i[t+5]-a,u=i[t+6]-r,h=i[t+8]-a,d=e-r,f=n-a,p=c*u-l*h,x=(f*u-d*h)/p,m=(c*d-l*f)/p;if(s&&(x<-wr||m<-wr||x+m>1+wr)){const g=i[t+4],_=i[t+7];let M=-1/0;return x<0&&(M=sc(d,f,u,h,o,_)),m<0&&(M=Math.max(M,sc(d,f,l,c,o,g))),x+m>1&&(M=Math.max(M,sc(d-l,f-c,u-l,h-c,g,_))),M}return o+x*(i[t+4]-o)+m*(i[t+7]-o)}function sc(i,t,e,n,s,r){const o=Math.max(0,Math.min(1,(i*e+t*n)/(e*e+n*n)));return(i-o*e)**2+(t-o*n)**2<=Tr**2?s+o*(r-s):-1/0}function CM(i,t,e,n,s,r,o){const a=(c,u,h,d,f)=>(c[0]-u)*(f-h)-(c[2]-h)*(d-u);let l=vn(i,c=>a(c,t,e,n,s),0)[1];return l.length>=3&&(l=vn(l,c=>a(c,n,s,r,o),0)[1]),l.length>=3&&(l=vn(l,c=>a(c,r,o,t,e),0)[1]),l}class LM{constructor(t,e,n,s=!0){this.hf=t,this.mesh=e,this.clearance=n,this.fitTerrain=s}quad(t,e,n,s,r,o,a,l,c,u,h,d,f,p=0){this.tri(t,e,n,s,r,o,a,l,c,f,p),this.tri(t,e,n,a,l,c,u,h,d,f,p)}edgeCrosses(t,e,n,s,r,o){const a=this.hf;for(let l=0;l<3;l++){const c=l===0?t:l===1?e:t+e,u=l===0?s:l===1?r:s+r,h=Math.max(c,u);for(let d=Math.floor(Math.min(c,u))+1;d<h;d++){const f=(d-c)/(u-c),p=a.xMin+(t+(s-t)*f)*a.dx,x=a.zMin+(e+(r-e)*f)*a.dz;if(n+(o-n)*f<a.yAt(p,x)+this.clearance)return!0}}return!1}needsFitting(t,e,n,s,r,o,a,l,c){const u=this.hf;if(e<u.yAt(t,n)+this.clearance||r<u.yAt(s,o)+this.clearance||l<u.yAt(a,c)+this.clearance)return!0;const h=(t-u.xMin)/u.dx,d=(n-u.zMin)/u.dz,f=(s-u.xMin)/u.dx,p=(o-u.zMin)/u.dz,x=(a-u.xMin)/u.dx,m=(c-u.zMin)/u.dz;if(this.edgeCrosses(h,d,e,f,p,r)||this.edgeCrosses(f,p,r,x,m,l)||this.edgeCrosses(x,m,l,h,d,e))return!0;const g=(f-h)*(m-d)-(p-d)*(x-h);if(Math.abs(g)<1e-12)return!1;const _=Math.min(u.nx-1,Math.floor(Math.max(h,f,x))),M=Math.min(u.nz-1,Math.floor(Math.max(d,p,m)));for(let v=Math.max(0,Math.ceil(Math.min(d,p,m)));v<=M;v++)for(let b=Math.max(0,Math.ceil(Math.min(h,f,x)));b<=_;b++){const E=((b-h)*(m-d)-(v-d)*(x-h))/g,S=((f-h)*(v-d)-(p-d)*(b-h))/g;if(E>=0&&S>=0&&E+S<=1&&e+E*(r-e)+S*(l-e)<u.y[v*u.nx+b]+this.clearance)return!0}return!1}tri(t,e,n,s,r,o,a,l,c,u,h=0){if(!this.fitTerrain){this.mesh.tri(t,e,n,s,r,o,a,l,c,u,h);return}if(!this.hf.patchOverlaps(Math.min(t,s,a),Math.min(n,o,c),Math.max(t,s,a),Math.max(n,o,c))&&!this.needsFitting(t,e,n,s,r,o,a,l,c)){this.mesh.tri(t,e,n,s,r,o,a,l,c,u,h);return}const f=m=>Math.max(m[1],this.hf.yAt(m[0],m[2])+this.clearance),p=[];let x=!1;if(nc(this.hf,new Float64Array([t,e,n]),new Float64Array([s,r,o]),new Float64Array([a,l,c]),(m,g,_)=>{p.push([m,g,_]),x||(x=f(m)>m[1]||f(g)>g[1]||f(_)>_[1])}),!x){this.mesh.tri(t,e,n,s,r,o,a,l,c,u,h);return}for(const[m,g,_]of p)this.mesh.tri(m[0],f(m),m[2],g[0],f(g),g[2],_[0],f(_),_[2],u,h)}}const Sd=i=>i[0],yd=i=>i[2],Un=1.5,Fi=.16,Ho=Math.hypot(Un,Fi),Gs=12,bd=(i,t)=>(i+2048)*8192+t+2048;class PM{constructor(t,e,n){X(this,"bins",new Map);this.asphalt=t,this.marks=e,this.color=n}addDash(t,e,n,s,r,o){const a={x:t+Un*s,z:n+Un*r,dx:s,dz:r,y:e+Un*o,grade:o,flat:!0,area:0,pieces:[]},l=bd(Math.floor(a.x/Gs),Math.floor(a.z/Gs));let c=this.bins.get(l);c||this.bins.set(l,c=[]),c.push(a)}tri(t,e,n,s,r,o,a,l,c,u){this.asphalt.tri(t,e,n,s,r,o,a,l,c,u);const h=Math.min(t,s,a)-Ho,d=Math.max(t,s,a)+Ho,f=Math.min(n,o,c)-Ho,p=Math.max(n,o,c)+Ho;for(let x=Math.floor(f/Gs);x<=Math.floor(p/Gs);x++)for(let m=Math.floor(h/Gs);m<=Math.floor(d/Gs);m++){const g=this.bins.get(bd(m,x));if(g)for(const _ of g){if(_.x<h||_.x>d||_.z<f||_.z>p)continue;const M=(b,E,S)=>new Float64Array([(b-_.x)*_.dx+(S-_.z)*_.dz,E,-(b-_.x)*_.dz+(S-_.z)*_.dx]);let v=[M(t,e,n),M(s,r,o),M(a,l,c)];if(v=vn(v,Sd,-Un)[1],v=vn(v,Sd,Un)[0],v=vn(v,yd,-Fi)[1],v=vn(v,yd,Fi)[0],!(v.length<3)){_.pieces.push(v);for(let b=0;b<v.length;b++){const E=v[b],S=v[(b+1)%v.length];_.area+=(S[0]*E[2]-S[2]*E[0])/2,Math.abs(_.y+E[0]*_.grade-E[1])>.03&&(_.flat=!1)}}}}}finish(){for(const t of this.bins.values())for(const e of t){const n=s=>[e.x+s[0]*e.dx-s[2]*e.dz,s[1]+.05,e.z+s[0]*e.dz+s[2]*e.dx];if(e.flat&&Math.abs(e.area-4*Un*Fi)<1e-4){const s=(r,o)=>n(new Float64Array([r,e.y+r*e.grade,o]));this.marks.quad(...s(-Un,Fi),...s(Un,Fi),...s(Un,-Fi),...s(-Un,-Fi),this.color)}else for(const s of e.pieces)for(let r=1;r+1<s.length;r++)this.marks.tri(...n(s[0]),...n(s[r]),...n(s[r+1]),this.color)}}}const rc=1,Ed=2,DM=[O(5198680),O(11575168),O(9072466),O(12434356)],IM=O(4474957),NM=O(15921382),wd={polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8},UM=[.34,.3,.26,.22,.16,.15,.13,.11],Td=new Float32Array(9);function FM(i,t,e){const n=[i[0]/10,i[1]/10];let s=0;for(let r=2;r<i.length;r+=2){const o=i[r-2]/10,a=i[r-1]/10,l=i[r]/10,c=i[r+1]/10,u=Math.hypot(l-o,c-a);if(!u)continue;const h=e&&s+u>=e.start&&s<=e.end?3:t,d=Math.ceil(u/h);s+=u;for(let f=1;f<=d;f++)n.push(o+(l-o)*f/d,a+(c-a)*f/d)}return n}class OM{constructor(){X(this,"cells",new Map);X(this,"segs",[]);X(this,"size",40)}add(t,e,n,s,r,o){const a=this.segs.length/6;this.segs.push(t,e,n,s,r,o);const l=Math.floor(Math.min(t,n)/this.size),c=Math.floor(Math.max(t,n)/this.size),u=Math.floor(Math.min(e,s)/this.size),h=Math.floor(Math.max(e,s)/this.size);for(let d=l;d<=c;d++)for(let f=u;f<=h;f++){const p=(d+512)*4096+(f+512);let x=this.cells.get(p);x||this.cells.set(p,x=[]),x.push(a)}}nearest(t,e,n){let s=null;const r=Math.ceil(n/this.size),o=Math.floor(t/this.size),a=Math.floor(e/this.size);for(let l=o-r;l<=o+r;l++)for(let c=a-r;c<=a+r;c++){const u=this.cells.get((l+512)*4096+(c+512));if(u)for(const h of u){const d=this.segs[h*6],f=this.segs[h*6+1],p=this.segs[h*6+2],x=this.segs[h*6+3],m=p-d,g=x-f,_=Math.max(0,Math.min(1,((t-d)*m+(e-f)*g)/(m*m+g*g||1))),M=d+m*_,v=f+g*_,b=Math.hypot(t-M,e-v);b<=n&&(!s||b<s.dist)&&(s={dist:b,px:M,pz:v,cls:this.segs[h*6+4],name:this.segs[h*6+5]})}}return s}}function zM(i,t){const e=new Map,n=(r,o)=>r+","+o;for(const r of i){if(r[0]>3)continue;const o=r[5];if(!(o.length<4))for(const a of[0,1]){const l=a?o.length-2:0,c=l+(a?-2:2),u=(o[c]-o[l])/10,h=(o[c+1]-o[l+1])/10,d=Math.hypot(u,h);if(!d)continue;const f=n(o[l],o[l+1]),p=e.get(f)??[];p.push({road:r,end:a,x:o[l]/10,z:o[l+1]/10,dx:u/d,dz:h/d,length:d}),e.set(f,p)}}const s=new Map;for(const r of e.values()){if(r.length!==2)continue;const o=r.find(T=>T.road[2]&rc),a=r.find(T=>!(T.road[2]&rc));if(!o||!a||o.road[0]!==a.road[0]||o.road[3]!==a.road[3]||o.road[4]!==a.road[4]||a.dx*o.dx+a.dz*o.dz>-.75)continue;const l=o.end?-1:1,c=o.road[3]/20,u=(o.dx-a.dx)*l,h=(o.dz-a.dz)*l,d=c/((o.dx*u+o.dz*h)*l),f=-h*d,p=u*d,{x,z:m}=o,g=Math.min(4,a.length),_=t.yAt(x,m),M=[t.yAt(x+f,m+p),_,t.yAt(x-f,m-p)],v=(T,R)=>{const P=x+a.dx*g-T*a.dz*l*c,U=m+a.dz*g+T*a.dx*l*c;return(R-t.yAt(P,U))*l/g},b=[v(-1,M[0]),v(0,_),v(1,M[2])],E={hx:f,hz:p,offset:[M[0]-_,0,M[2]-_],slope:b},S=s.get(o.road)??[];S[o.end]=E,s.set(o.road,S);const y=s.get(a.road)??[],w=a.end===o.end;y[a.end]={...E,hx:w?-f:f,hz:w?-p:p},s.set(a.road,y)}return s}function Ad(i,t,e,n,s,r){if(!i||t>=e)return 0;const o=t/e;return((1+2*o)*i.offset[r]+t*(i.slope[r]-n)*s)*(1-o)**2}function BM(i,t,e,n){const s=new se,r=new se,o=new OM,a=zM(i.roads,t),l=[],c=[];for(const v of i.roads){const[b,E,S,y,w,T]=v,R=y/10,P=Nu(v),U=(S&rc)!==0,[L,z]=a.get(v)??[],I=FM(T,U&&(L||z)?1.8:b<=3?6:5,P),B=I.length/2;if(B<2)continue;const $=E===0&&b<=1?IM:DM[E],N=E===0?1:0,H=UM[b],K=t.yAt(I[0],I[1]),Y=t.yAt(I[B*2-2],I[B*2-1]),Z=new Float32Array(B);for(let ht=1;ht<B;ht++)Z[ht]=Z[ht-1]+Math.hypot(I[ht*2]-I[ht*2-2],I[ht*2+1]-I[ht*2-1]);const F=Z[B-1]||1,J=(Y-K)/F,q=Math.PI/F,nt=Math.min(9,F/2),et=new Float32Array(B*3),st=new Float32Array(B*3),wt=new Float32Array(B*3);for(let ht=0;ht<B;ht++){const dt=I[ht*2],pt=I[ht*2+1],Yt=Math.max(ht-1,0),Ct=Math.min(ht+1,B-1);let Ht=I[Ct*2]-I[Yt*2],Xt=I[Ct*2+1]-I[Yt*2+1];const Kt=Math.hypot(Ht,Xt)||1;Ht/=Kt,Xt/=Kt;let pe=1;if(ht>0&&ht<B-1){const ut=I[ht*2]-I[ht*2-2],lt=I[ht*2+1]-I[ht*2-1],mt=Math.hypot(ut,lt)||1;pe=1/Math.max(.6,(ut*Ht+lt*Xt)/mt)}const ge=ht===0?L:ht===B-1?z:void 0,W=(ge==null?void 0:ge.hx)??-Xt*(R/2)*pe,ve=(ge==null?void 0:ge.hz)??Ht*(R/2)*pe,ee=Z[ht],he=R/2,Mt=U?K+J*ee+H+Math.sin(q*ee):0,_e=ut=>Mt+Ad(L,ee,nt,J+q,1,ut)+Ad(z,F-ee,nt,J-q,-1,ut),Bt=(P==null?void 0:P.deckLift(ee,H))??H,Ot=(ut,lt,mt)=>(P!=null&&P.weight(ee)?P.ground(t,ut,lt,ee,mt):t.yAt(ut,lt))+Bt,D=U?_e(1):Ot(dt,pt,0),A=U?_e(0):Ot(dt+W,pt+ve,he),j=U?_e(2):Ot(dt-W,pt-ve,he);et.set([dt+W,A,pt+ve],ht*3),st.set([dt,D,pt],ht*3),wt.set([dt-W,j,pt-ve],ht*3),ht>0&&b<=3&&o.add(I[ht*2-2],I[ht*2-1],dt,pt,b,w)}const xt=b<=1&&!(S&Ed)&&F>20,Ft=xt?new PM(s,r,NM):void 0;if(xt){let ht=0;for(let dt=4;dt<F-4;dt+=12){for(;ht<B-2&&Z[ht+1]<dt;)ht++;const pt=(dt-Z[ht])/(Z[ht+1]-Z[ht]||1),Yt=st[ht*3]+(st[ht*3+3]-st[ht*3])*pt,Ct=st[ht*3+1]+(st[ht*3+4]-st[ht*3+1])*pt,Ht=st[ht*3+2]+(st[ht*3+5]-st[ht*3+2])*pt;if(e!=null&&e(Yt,Ht))continue;let Xt=st[ht*3+3]-st[ht*3],Kt=st[ht*3+5]-st[ht*3+2];const pe=Math.hypot(Xt,Kt)||1;Xt/=pe,Kt/=pe;const ge=(st[ht*3+4]-st[ht*3+1])/pe;Ft==null||Ft.addDash(Yt,Ct,Ht,Xt,Kt,ge)}}const kt=new LM(t,Ft??s,.04,!U);for(let ht=0;ht<B-1;ht++){const dt=ht*3,pt=dt+3;if(e){const Yt=e(st[dt],st[dt+2]),Ct=e(st[pt],st[pt+2]);if(Yt&&Ct)continue;if(Yt!==Ct){let Ht=0,Xt=1;for(let Ot=0;Ot<12;Ot++){const D=(Ht+Xt)/2;e(st[dt]+(st[pt]-st[dt])*D,st[dt+2]+(st[pt+2]-st[dt+2])*D)===Yt?Ht=D:Xt=D}const Kt=(Ht+Xt)/2;for(const Ot of[et,st,wt])for(let D=0;D<3;D++)Td[(Ot===et?0:Ot===st?3:6)+D]=Ot[dt+D]+(Ot[pt+D]-Ot[dt+D])*Kt;const[pe,ge,W,ve,ee,he,Mt,_e,Bt]=Td;Yt?(kt.quad(pe,ge,W,et[pt],et[pt+1],et[pt+2],st[pt],st[pt+1],st[pt+2],ve,ee,he,$,N),kt.quad(ve,ee,he,st[pt],st[pt+1],st[pt+2],wt[pt],wt[pt+1],wt[pt+2],Mt,_e,Bt,$,N)):(kt.quad(et[dt],et[dt+1],et[dt+2],pe,ge,W,ve,ee,he,st[dt],st[dt+1],st[dt+2],$,N),kt.quad(st[dt],st[dt+1],st[dt+2],ve,ee,he,Mt,_e,Bt,wt[dt],wt[dt+1],wt[dt+2],$,N));continue}}if(kt.quad(et[dt],et[dt+1],et[dt+2],et[pt],et[pt+1],et[pt+2],st[pt],st[pt+1],st[pt+2],st[dt],st[dt+1],st[dt+2],$,N),kt.quad(st[dt],st[dt+1],st[dt+2],st[pt],st[pt+1],st[pt+2],wt[pt],wt[pt+1],wt[pt+2],wt[dt],wt[dt+1],wt[dt+2],$,N),U){const Yt=O(E===2?7297604:13225162);for(const Ct of[et,wt])s.quad(Ct[dt],Ct[dt+1],Ct[dt+2],Ct[pt],Ct[pt+1],Ct[pt+2],Ct[pt],Ct[pt+1]+1.05,Ct[pt+2],Ct[dt],Ct[dt+1]+1.05,Ct[dt+2],Yt),s.quad(Ct[dt],Ct[dt+1]-.7,Ct[dt+2],Ct[pt],Ct[pt+1]-.7,Ct[pt+2],Ct[pt],Ct[pt+1],Ct[pt+2],Ct[dt],Ct[dt+1],Ct[dt+2],O(9276036))}}if(b<=5&&!U)for(const ht of[0,B-1]){if(ht===0?L:z)continue;const dt=st[ht*3],pt=st[ht*3+1],Yt=st[ht*3+2];if(e!=null&&e(dt,Yt))continue;const Ct=16;for(let Ht=0;Ht<Ct;Ht++){const Xt=Ht/Ct*Math.PI*2,Kt=(Ht+1)/Ct*Math.PI*2,pe=dt+Math.cos(Kt)*R/2,ge=Yt+Math.sin(Kt)*R/2,W=dt+Math.cos(Xt)*R/2,ve=Yt+Math.sin(Xt)*R/2;kt.tri(dt,pt,Yt,pe,t.yAt(pe,ge)+H,ge,W,t.yAt(W,ve)+H,ve,$,N)}}if(Ft==null||Ft.finish(),S&Ed){let ht=0,dt=0;for(let Kt=0;Kt<B;Kt++)ht+=I[Kt*2],dt+=I[Kt*2+1];ht/=B,dt/=B;const pt=B>>1,Yt=GM(I[0],I[1],I[pt*2],I[pt*2+1],I[B*2-2],I[B*2-1]),Ct=Yt?Yt.x:ht,Ht=Yt?Yt.z:dt,Xt=Yt?Yt.r:Math.hypot(I[0]-ht,I[1]-dt);Xt>3&&Xt<40&&!(e!=null&&e(Ct,Ht))&&!c.some(Kt=>Math.hypot(Kt.x-Ct,Kt.z-Ht)<12)&&c.push({x:Ct,z:Ht,r:Xt,w:R})}b<=3&&l.push({cls:b,name:w>=0?i.names[w]:"",width:R,flags:S,pts:st,length:F})}const u=s.vertexCount*3,h=O(13158078),d=O(7314002),f=O(4943936);for(const v of c){const b=v.r-v.w/2-.3;if(b<1.2)continue;const E=t.yAt(v.x,v.z)+.2;s.frame(v.x,E,v.z,0),s.cyl(0,0,0,b,b,.4,14,h,d),s.blob(0,.9,0,b*.45,.8,b*.45,6,3,f,O(7181400)),s.frame()}const p=new Pn({vertexColors:!0,roughness:.92,metalness:0,side:Ce,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),x=s.build();n&&(x.setAttribute("aAsphalt",x.getAttribute("glow")),n(p,!0));const m=new te(Rd(x),p);m.receiveShadow=!0,m.name="roads";const g=Mr(new pn({vertexColors:!0,...wd})),_=new te(Rd(r.build()),g);_.name="road-markings";const M=new Je;return M.add(m,_),{group:M,index:o,paths:l,pavement:x.getAttribute("position").array,pavementEnd:u}}function Rd(i){return i.deleteAttribute("glow"),i}function GM(i,t,e,n,s,r){const o=2*(i*(n-r)+e*(r-t)+s*(t-n));if(Math.abs(o)<.001)return null;const a=i*i+t*t,l=e*e+n*n,c=s*s+r*r,u=(a*(n-r)+l*(r-t)+c*(t-n))/o,h=(a*(s-e)+l*(i-s)+c*(e-i))/o;return{x:u,z:h,r:Math.hypot(i-u,t-h)}}class kM{constructor(t,e=1){X(this,"ratio");X(this,"floor");X(this,"sampleSeconds",0);X(this,"sampleFrames",0);X(this,"slowSeconds",0);X(this,"smoothSeconds",0);X(this,"retryAfter",0);X(this,"lastRaise",-1/0);this.ceiling=t,this.ratio=t,this.floor=Math.min(t,e)}resetSampling(){this.sampleSeconds=this.sampleFrames=this.slowSeconds=this.smoothSeconds=0}update(t,e,n){if(e<=0||e>=.25)return this.resetSampling(),!1;if(this.sampleSeconds+=e,this.sampleFrames+=1,this.sampleSeconds<1)return!1;const s=this.sampleSeconds,r=this.sampleFrames/s;return this.sampleSeconds=this.sampleFrames=0,this.slowSeconds=r<n*.9?this.slowSeconds+s:0,this.slowSeconds>=2&&this.ratio>this.floor?(this.ratio=Math.max(this.floor,this.ratio*.75),this.retryAfter=t+(t-this.lastRaise<15?90:20),this.resetSampling(),!0):this.ratio>=this.ceiling||t<this.retryAfter||(this.smoothSeconds=r>=n*.97?this.smoothSeconds+s:0,this.smoothSeconds<8)?!1:(this.ratio=Math.min(this.ceiling,this.ratio/.75),this.lastRaise=t,this.resetSampling(),!0)}}const Ar=-36,oc=170,HM=`
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
`,ac=2;function VM(){const i=new rr(new Uint8Array([128,128,128,255]),1,1);return i.needsUpdate=!0,{fallback:i,maps:Array.from({length:ac},()=>({value:i})),rects:Array.from({length:ac},()=>({value:new Se(0,0,1,0)}))}}function WM({pos:i,nor:t,uv:e,idx:n}){const s=new Re;return s.setAttribute("position",new Te(i,3)),s.setAttribute("normal",new Te(t,3)),s.setAttribute("uv",new Te(e,2)),s.setIndex(new Te(n,1)),s.computeBoundingSphere(),s}function XM(i,t,e,n,s){const r=new Pn({map:e,roughness:.96,metalness:0});r.onBeforeCompile=a=>{a.uniforms.uTide=n;for(let l=0;l<ac;l++)a.uniforms["uDetail"+l]=s.maps[l],a.uniforms["uDetailRect"+l]=s.rects[l];a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform float uTide;
uniform sampler2D uDetail0;
uniform vec4 uDetailRect0;
uniform sampler2D uDetail1;
uniform vec4 uDetailRect1;
${HM}`).replace("#include <map_fragment>",`#include <map_fragment>
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
          float above = vWPos.y / ${Yn.toFixed(2)} - uTide;
          float wet = smoothstep(0.45, 0.03, above);
          diffuseColor.rgb *= mix(1.0, 0.76, wet);
        }`)},r.customProgramCacheKey=()=>"inverloch-terrain-3";const o=new Je;for(const a of t){const l=new te(WM(a),r);l.receiveShadow=!0,l.name="terrain",o.add(l)}return o.add(ZM(i),KM(i)),o}function YM(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function ZM(i){const t=YM(i),e=t.length,n=[],s=[],r=[],o=new Lt(9074780),a=new Lt(6180669),l=new Lt(3813673),c=[[0,o,a],[1,a,l]];for(let d=0;d<e;d++){const[f,p]=t[d],[x,m]=t[(d+1)%e],g=i.yAt(f,p),_=i.yAt(x,m),M=x-f,v=m-p,b=Math.hypot(M,v)||1,E=-v/b*-1,S=M/b*-1;for(const[y,w,T]of c){const P=y===0?g:g-6,U=y===0?g-6:Ar,L=y===0?_:_-6,z=y===0?_-6:Ar;n.push(f,P,p,x,L,m,x,z,m,f,P,p,x,z,m,f,U,p);for(const I of[w,w,T,w,T,T])s.push(I.r,I.g,I.b);for(let I=0;I<6;I++)r.push(E,0,S)}}const u=new Re;u.setAttribute("position",new ye(n,3)),u.setAttribute("normal",new ye(r,3)),u.setAttribute("color",new ye(s,3));const h=new te(u,new Pn({vertexColors:!0,roughness:1,side:Ce}));return h.name="skirt",h}function KM(i){const t=new Je,e=i.xMax-i.xMin+oc*2,n=i.zMax-i.zMin+oc*2,s=190,r=(i.xMin+i.xMax)/2,o=(i.zMin+i.zMax)/2,a=new te(new Xi(e,s,n),new Pn({color:1779245,roughness:.75,metalness:.1}));a.position.set(r,Ar-s/2,o),a.receiveShadow=!0,t.add(a);const l=document.createElement("canvas");l.width=2048,l.height=160;const c=l.getContext("2d");c.fillStyle="#1b262d",c.fillRect(0,0,l.width,l.height),c.fillStyle="#e9d9a6",c.textBaseline="middle",c.font="600 78px 'Space Grotesk', system-ui, sans-serif",c.fillText("INVERLOCH",40,84);const u=c.measureText("INVERLOCH").width;c.fillStyle="#9fb4bd",c.font="400 42px 'Space Grotesk', system-ui, sans-serif",c.fillText("Bass Coast, Victoria   ·   38.63° S  145.73° E   ·   Anderson Inlet & Bass Strait",40+u+46,88);const h=new fl(l);h.colorSpace=Ue,h.anisotropy=8;const d=1700,f=new te(new Hn(d,d*(l.height/l.width)),new pn({map:h,toneMapped:!1}));f.position.set(r-e/2+d/2+110,Ar-s/2,o+n/2+.6),t.add(f);const p=document.createElement("canvas");p.width=p.height=256;const x=p.getContext("2d");x.fillStyle="#e9d9a6",x.beginPath(),x.moveTo(128,18),x.lineTo(176,150),x.lineTo(128,122),x.lineTo(80,150),x.closePath(),x.fill(),x.font="700 86px 'Space Grotesk', system-ui, sans-serif",x.textAlign="center",x.fillText("N",128,240);const m=new fl(p);m.colorSpace=Ue;const g=new te(new Hn(130,130),new pn({map:m,transparent:!0,toneMapped:!1}));return g.rotation.x=-Math.PI/2,g.position.set(i.xMax+oc/2,Ar+.6,i.zMin+120),t.add(g),t}const Cd=[[-.375,-.125],[.125,-.375],[.375,.125],[-.125,.375]],qM=4e3,JM=12e3;class $M{constructor(t,e){X(this,"size",new Nt);X(this,"screen",new rh);X(this,"screenCamera",new bl);X(this,"blend",new sn({depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{previous:{value:null},currentFrame:{value:null},weight:{value:1}},vertexShader:`
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
    `}));X(this,"quad",new te(new Hn(2,2),this.blend));X(this,"history");X(this,"sample");X(this,"capture");this.renderer=t,this.onFinish=e,this.quad.frustumCulled=!1,this.screen.add(this.quad)}get pending(){return!!this.capture&&!this.capture.encoding}start(){return this.capture?Promise.reject(new Error("An antialiased photo is already being captured.")):new Promise((t,e)=>{const n=this.capture={resolve:t,reject:e,deadline:performance.now()+JM,samples:0,bestSamples:0,encoding:!1};this.armTimeout(n)})}draw(t,e,n){var a,l;const s=this.capture;if(!s||s.encoding)return!1;this.renderer.getDrawingBufferSize(this.size);const{x:r,y:o}=this.size;(((a=this.history)==null?void 0:a.image.width)!==r||((l=this.history)==null?void 0:l.image.height)!==o)&&(this.releaseTextures(),this.history=new bh(r,o),this.sample=new bh(r,o),this.blend.uniforms.previous.value=this.history,this.blend.uniforms.currentFrame.value=this.sample,n=!0),n&&(s.samples=0);try{return this.drawSample(t,e,s.samples),s.samples++,s.samples===Cd.length?this.encode(s):(this.renderer.copyFramebufferToTexture(this.history),s.samples>s.bestSamples&&(s.bestSamples=s.samples,this.armTimeout(s))),!0}catch{return this.cancel("The browser could not capture an antialiased photo."),!1}}drawSample(t,e,n){const[s,r]=Cd[n],o=e.projectionMatrix.elements,a=o[8],l=o[9];o[8]+=2*s/this.size.x,o[9]+=2*r/this.size.y,e.projectionMatrixInverse.copy(e.projectionMatrix).invert();const c=this.renderer.shadowMap.autoUpdate;n>0&&(this.renderer.shadowMap.autoUpdate=!1);try{this.renderer.render(t,e)}finally{o[8]=a,o[9]=l,e.projectionMatrixInverse.copy(e.projectionMatrix).invert(),this.renderer.shadowMap.autoUpdate=c}n>0&&(this.renderer.copyFramebufferToTexture(this.sample),this.blend.uniforms.weight.value=1/(n+1),this.renderer.render(this.screen,this.screenCamera))}encode(t){t.encoding=!0,this.armTimeout(t),this.releaseTextures(),this.onFinish(),this.renderer.domElement.toBlob(e=>{this.finish(t)&&(e?t.resolve(e):t.reject(new Error("The browser did not write the antialiased PNG.")))},"image/png")}armTimeout(t){window.clearTimeout(t.timeout);const e=Math.min(qM,Math.max(0,t.deadline-performance.now())),n=t.encoding?"The browser did not finish writing the antialiased PNG.":"The view did not stay still long enough to save an antialiased photo.";t.timeout=window.setTimeout(()=>this.cancel(n),e)}cancel(t){const e=this.capture;!e||!this.finish(e)||e.reject(new Error(t))}finish(t){return this.capture!==t?!1:(window.clearTimeout(t.timeout),this.capture=void 0,t.encoding||(this.releaseTextures(),this.onFinish()),!0)}releaseTextures(){var t,e;(t=this.history)==null||t.dispose(),(e=this.sample)==null||e.dispose(),this.history=this.sample=void 0,this.blend.uniforms.previous.value=null,this.blend.uniforms.currentFrame.value=null}dispose(){this.cancel("The Inverloch view was closed before saving the photo."),this.quad.geometry.dispose(),this.blend.dispose()}}function Jn(i,t,e,n,s,r,o,a,l,c){const u=new _l(1,0),h=u.getAttribute("position"),d=[];for(let f=0;f<h.count;f++){const p=h.getX(f),x=h.getY(f),m=h.getZ(f),g=Math.sin(p*12.9898+x*78.233+m*37.719+a*4.1)*43758.5453,_=.8+(g-Math.floor(g))*.42;d.push([t+p*s*_,e+x*r*(x<0?.75:_),n+m*o*_])}for(let f=0;f<d.length;f+=3){const[p,x,m]=[d[f],d[f+1],d[f+2]],g=ne.clamp(((p[1]+x[1]+m[1])/3-(e-r))/(2*r),0,1);i.tri(p[0],p[1],p[2],x[0],x[1],x[2],m[0],m[1],m[2],xr(l,c,g))}u.dispose()}function fi(i){const t=i.build();return t.deleteAttribute("glow"),t}function jM(){const i=[];let t=new se;return Jn(t,0,.44,0,.82,.56,.82,1,O(3098152),O(7507285)),i.push(fi(t)),t=new se,t.cyl(0,0,0,.04,.026,.56,4,O(11905429)),Jn(t,0,.72,0,.36,.3,.36,2,O(4151352),O(9349240)),Jn(t,.17,.52,.1,.24,.19,.24,3,O(3887925),O(8362603)),i.push(fi(t)),t=new se,t.cyl(0,0,0,.055,.04,.4,4,O(7297608)),Jn(t,0,.64,0,.46,.38,.46,4,O(3695150),O(9091170)),i.push(fi(t)),t=new se,t.cyl(0,0,0,.035,.03,.16,4,O(5916728)),t.cyl(0,.12,0,.23,.11,.42,6,O(2506539)),t.cyl(0,.5,0,.15,0,.5,6,O(4020796)),i.push(fi(t)),i}function Ld(i){const t=[],e=i?5:7;let n=new se;return n.blob(0,.48,0,.81,.52,.81,e,2,O(4018735),O(7507285)),t.push(fi(n)),n=new se,i||(n.cyl(0,0,0,.04,.026,.56,3,O(11905429)),n.blob(.17,.52,.1,.24,.19,.24,4,2,O(3887925),O(8362603))),n.blob(i?.05:0,.72,0,i?.39:.36,.3,.36,e,2,O(4546110),O(9349240)),t.push(fi(n)),n=new se,i||n.cyl(0,0,0,.055,.04,.4,3,O(7297608)),n.blob(0,.64,0,.46,.38,.46,e,2,O(3695150),O(9091170)),t.push(fi(n)),n=new se,i?n.cyl(0,.15,0,.23,0,.85,e,O(4020796)):(n.cyl(0,.12,0,.23,.11,.42,4,O(2506539)),n.cyl(0,.5,0,.15,0,.5,5,O(4020796))),t.push(fi(n)),t}function pi(i,t,e,n,s,r,o){const a=new V(...t),l=new V(...e),c=l.clone().sub(a).normalize(),u=new V(c.z,0,-c.x);u.lengthSq()<1e-6&&u.set(1,0,0),u.normalize();const h=c.clone().cross(u),d=(f,p,x)=>{const m=x*2*Math.PI/5,g=f.clone().addScaledVector(u,p*Math.cos(m)).addScaledVector(h,p*Math.sin(m));return[g.x,g.y,g.z]};for(let f=0;f<5;f++)i.quad(...d(a,n,f),...d(a,n,f+1),...d(l,s,f+1),...d(l,s,f),f%3===0?r:o)}function QM(i,t){const e=new se,n=t?1:-1,s=31+i*17+t*41;if(i===1){const r=O(9537397),o=O(13682093),a=O(3887925),l=O(9349240),c=[.025*n,.39,.015],u=[-.09*n,.67,-.025],h=[-.2*n,t?.91:.87,-.09],d=[.225*n,t?.61:.7,.1],f=[.06*n,.8,t?.2:.16];pi(e,[0,-.015,0],c,.054,.037,r,o),pi(e,[c[0],c[1]-.018,c[2]],u,.038,.023,r,o),pi(e,[u[0],u[1]-.018,u[2]],h,.024,.007,r,o),pi(e,[c[0],c[1]-.035,c[2]],d,.025,.007,r,o),pi(e,[u[0],u[1]-.055,u[2]],f,.02,.006,r,o),Jn(e,...h,.25,.15,.24,s,a,l),Jn(e,...d,.2,.15,.215,s+1,a,l),Jn(e,...f,t?.17:.205,.13,.2,s+2,a,l)}else{const r=O(5326391),o=O(8681061),a=O(3098152),l=O(7507285),c=[-.04*n,.23,-.03],u=[-.25*n,t?.57:.62,-.1],h=[.405*n,t?.44:.41,.13],d=[-.08*n,.4,t?.34:.36];pi(e,[0,-.015,0],c,.073,.042,r,o),pi(e,[c[0],c[1]-.06,c[2]],u,.044,.01,r,o),pi(e,[c[0],c[1]-.09,c[2]],h,.039,.009,r,o),pi(e,[c[0],c[1]-.07,c[2]],d,.033,.009,r,o),Jn(e,...u,.57,.39,t?.45:.54,s,a,l),Jn(e,...h,.45,.29,.45,s+1,a,l),Jn(e,...d,.38,.27,.42,s+2,a,l)}return fi(e)}const tv=32,lc=6,Pd=48,ev=64,nv=32,iv=4,sv=30,ks=i=>Math.floor(i/tv),Dd=(i,t)=>i*65536+t;class rv{constructor(t,e,n){X(this,"cells",new Map);X(this,"meshes");X(this,"active",new Map);X(this,"previous",new V(1/0,1/0,1/0));X(this,"hidden",new ie().makeScale(0,0,0));X(this,"tint",new Lt);X(this,"range",0);this.roads=n,this.meshes=Array.from({length:4},(s,r)=>{const o=new Ve(QM(r>>1,r&1),e,Pd);return o.name=["roadside-scrub","roadside-gum"][r>>1],o.instanceMatrix.setUsage(Bi),o.count=0,o.visible=!1,o.castShadow=!0,t.add(o),o})}consider(t,e,n,s,r,o){if(s>1)return;let a=Math.imul(Math.round(t*4),73244475)^Math.imul(Math.round(n*4),668265261)^s;a=Math.imul(a^a>>>16,73244475)>>>0;const l=Dd(ks(t),ks(n)),c=this.cells.get(l);if((c==null?void 0:c.length)===lc&&a>=c[lc-1].rank)return;const u=this.roads.nearest(t,n,sv);if(!u||u.cls>3)return;r.instanceMatrix.setUsage(Bi);const h={x:t,y:e,z:n,style:s*2+(a>>>8&1),rank:a,fallback:r,slot:o};c?(c.push(h),c.sort((d,f)=>d.rank-f.rank),c.length>lc&&c.pop()):this.cells.set(l,[h])}setFallback(t,e){var s;const n=t.fallback.instanceMatrix;t.fallback.setMatrixAt(t.slot,e),((s=n.updateRanges[0])==null?void 0:s.count)!==n.array.length&&(n.updateRanges.length>=48?(n.clearUpdateRanges(),n.addUpdateRange(0,n.array.length)):n.addUpdateRange(t.slot*16,16)),n.needsUpdate=!0}show(t){if(t.length===this.active.size&&t.every(n=>this.active.has(n)))return;const e=new Set(t);for(const[n,s]of this.active)e.has(n)||(this.setFallback(n,s),this.active.delete(n));for(const n of this.meshes)n.count=0;for(const n of t){let s=this.active.get(n);s||(s=new ie,n.fallback.getMatrixAt(n.slot,s),this.active.set(n,s),this.setFallback(n,this.hidden));const r=this.meshes[n.style],o=r.count++;r.setMatrixAt(o,s),n.fallback.getColorAt(n.slot,this.tint),r.setColorAt(o,this.tint)}for(const n of this.meshes)n.visible=n.count>0,n.visible&&(n.instanceMatrix.needsUpdate=!0,n.instanceColor.needsUpdate=!0,n.computeBoundingSphere())}update(t,e,n){const s=e<=nv?Math.min(ev,n*.65):0;if(s===this.range&&this.previous.distanceToSquared(t)<iv**2){let o=!0;for(const a of this.active.keys())if(!a.fallback.visible){o=!1;break}if(o)return}if(this.range=s,this.previous.copy(t),!s){this.show([]);return}const r=[];for(let o=ks(t.x-s);o<=ks(t.x+s);o++)for(let a=ks(t.z-s);a<=ks(t.z+s);a++)for(const l of this.cells.get(Dd(o,a))??[]){if(!l.fallback.visible)continue;const c=(t.x-l.x)**2+(t.y-l.y)**2+(t.z-l.z)**2;c<s**2&&r.push({tree:l,distance:c})}r.sort((o,a)=>o.distance-a.distance||o.tree.rank-a.tree.rank),this.show(r.slice(0,Pd).map(({tree:o})=>o))}}function ov(i,t,e,n=()=>!1,s){const r=new Je;r.name="trees";const o=[jM(),Ld(!1),Ld(!0)],a=[],l=new mo({vertexColors:!0}),c=s&&e>.35?new rv(r,l,s):void 0,u=650,h=new Map,d=i.trees,f=Pe(88);for(let b=0;b<d.length;b+=q1){if(e<1&&f()>e||n(d[b]/4,d[b+1]/4))continue;const S=`${d[b+2]>>8}:${Math.floor(d[b]/4/u)}:${Math.floor(d[b+1]/4/u)}`;let y=h.get(S);y||h.set(S,y=[]),y.push(b)}const p=new ie,x=new Tn,m=new V,g=new V,_=new V(0,1,0),M=new Lt;let v=0;for(const[b,E]of h){const S=Number(b.split(":")[0]),y=o.map((w,T)=>{const R=new Ve(w[S],l,E.length);return R.name=["tree-near","tree-mid","tree-far"][T],R});E.forEach((w,T)=>{const R=d[w]/4,P=d[w+1]/4,U=(d[w+2]&255)/10,L=Pe(w*2654435761+11);g.set(R,t.yAt(R,P)-.15,P),x.setFromAxisAngle(_,L()*Math.PI*2);const z=.85+L()*.35;m.set(U*z,U,U*(.85+L()*.35)),p.compose(g,x,m);const I=.8+L()*.34;M.setRGB(I*(.94+L()*.14),I,I*(.9+L()*.12));for(const B of y)B.setMatrixAt(T,p),B.setColorAt(T,M);c==null||c.consider(R,g.y,P,S,y[0],T)}),a.push(new cd(y.map(w=>[w]),r)),v+=E.length}return{group:r,count:v,updateLod(b,E,S){for(const y of a)y.update(b,E,S);c==null||c.update(b,E,S[0])}}}const av=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,lv=`
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
}`;function cv(i,t,e){const n=i.w*i.h,s=new Uint16Array(n*2);for(let p=0;p<n;p++)s[p*2]=ah.toHalfFloat(i.raw[p]),s[p*2+1]=ah.toHalfFloat(i.exposure[p]);const r=new rr(s,i.w,i.h,Si,En);r.minFilter=r.magFilter=Ke,r.wrapS=r.wrapT=On,r.needsUpdate=!0;const o={tField:{value:r},uSize:{value:new Nt(i.sizeX,i.sizeZ)},uTide:t,uTime:{value:0},uSunDir:{value:new V(.4,.8,.3).normalize()},uSunColor:{value:new Lt(16773848)},uShallow:{value:new Lt(7129789)},uDeep:{value:new Lt(937848)},uSky:{value:new Lt(12573938)},uFoam:{value:1}};e&&(o.uInletRain=e);const a=new sn({uniforms:o,vertexShader:av,fragmentShader:lv,transparent:!0,depthWrite:!1,defines:e?{RAIN_RIPPLES:1}:{}}),l=new Hn(i.xMax-i.xMin,i.zMax-i.zMin);l.rotateX(-Math.PI/2);const c=new te(l,a);c.position.set((i.xMin+i.xMax)/2,t.value*Yn,(i.zMin+i.zMax)/2),c.renderOrder=2,c.name="water";const u=new te(new Re,new pn({color:1929103,transparent:!0,opacity:.8,side:Ce,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));u.renderOrder=1,u.name="water-edge";const h=[];for(let p=0;p<i.nx;p++)h.push([i.xMin+p*i.dx,i.zMin]);for(let p=1;p<i.nz;p++)h.push([i.xMax,i.zMin+p*i.dz]);for(let p=i.nx-2;p>=0;p--)h.push([i.xMin+p*i.dx,i.zMax]);for(let p=i.nz-2;p>=1;p--)h.push([i.xMin,i.zMin+p*i.dz]);const d=h.map(([p,x])=>i.yAt(p,x)),f=p=>{t.value=p;const x=p*Yn;c.position.y=x;const m=[],g=h.length;for(let M=0;M<g;M++){const v=(M+1)%g,b=d[M],E=d[v];if(b>=x&&E>=x)continue;const[S,y]=h[M],[w,T]=h[v],R=Math.min(b,x),P=Math.min(E,x);m.push(S,x,y,w,x,T,w,P,T,S,x,y,w,P,T,S,R,y)}u.geometry.dispose();const _=new Re;_.setAttribute("position",new ye(m,3)),u.geometry=_};return f(t.value),{mesh:c,skirt:u,uniforms:o,setTide:f}}const hv="detail-abeckett-ultra-v1.json",cc=-38.63351,Id=145.72774,uv=111320*Math.cos(cc*Math.PI/180);class dv{constructor(t,e,n,s,r){X(this,"group");X(this,"daylight",{value:1});X(this,"request");X(this,"retryAt",0);X(this,"origin");X(this,"sx");X(this,"sz");this.scene=t,this.manifest=e,this.ground=s,this.redraw=r,this.origin=n(cc,Id);const o=n(cc-100/110540,Id+100/uv);this.sx=(o[0]-this.origin[0])/100,this.sz=(o[1]-this.origin[1])/100}update(t,e){this.daylight.value=Math.min(1,.08+e*.3);const n=this.origin[0]+22*this.sx,s=this.origin[1]+37*this.sz,r=Math.hypot(t.x-n,t.y-this.ground(n,s),t.z-s);if(this.group)this.group.visible=r<(this.group.visible?155:130);else if(r>220&&this.request)this.request.abort(),this.request=void 0;else if(r<155&&!this.request&&performance.now()>=this.retryAt){const o=this.request=new AbortController;this.load(o)}}async load(t){try{const e=new URL(hv,new URL(this.manifest,document.baseURI)),n=await fetch(e,{signal:t.signal});if(!n.ok)throw new Error(String(n.status));const s=await n.json();if(t.signal.aborted)return;const r=this.build(s);this.group=r,this.scene.add(r),this.redraw()}catch{t.signal.aborted||(this.retryAt=performance.now()+3e4)}finally{this.request===t&&(this.request=void 0)}}build(t){const e=new se,n=new se,s=new se,r=O(6842465),o=O(10196618),a=O(3883588),l=O(12039851),c=O(16777215);for(const[d,f,p,x,m,g,_]of t.fronts){const M=Math.hypot(p-d,x-f),v=Math.atan2(m,g);e.frame(d,0,f,v),n.frame(d,0,f,v);const b=T=>3.15+(_?.24*(1-T/3.2):0);for(const T of[.32,1.58,2.97]){const R=b(T);e.box(.05,R-.09,T-.045,M-.05,R,T+.045,r)}const E=Math.max(2,Math.round(M/1.25));for(let T=0;T<=E;T++){const R=.095+T*(M-.19)/E;e.quad(R,b(.22)-.06,.22,R,b(3.05)-.06,3.05,R+.07,b(3.05)-.06,3.05,R+.07,b(.22)-.06,.22,o)}e.box(.055,3.045,3.14,M-.055,3.105,3.3,r);const S=M-1.7,y=Math.max(2,Math.round((M-1.4)/2.1)),w=_?.22:.34;for(let T=0;T<y;T++){const R=.18+S*T/y+.055,P=.18+S*(T+1)/y-.055;n.quad(R,.57,w,P,.57,w,P,2.72,w,R,2.72,w,c),e.box(R-.035,.51,w-.045,P+.035,.56,w+.04,a),e.box(R-.035,2.25,w-.025,P+.035,2.28,w+.02,l)}e.box(M-1.17,.93,w+.05,M-1.135,1.35,w+.085,l),e.box(M-1.28,.13,.15,M-.2,.17,.42,o)}for(const[d,f,p,x]of t.trees){const m=Pe(x+431),g=[5466952,7701590,8819806,6781777].map(O);s.frame(d,0,f);for(let _=0;_<90;_++){const M=m()*Math.PI*2,v=(1.05+m()*2.25)*p,b=v*Math.sin(M),E=v*Math.cos(M),S=(6.55+1.6*m()-.35*v)*p,y=(.11+.22*m())*p,w=(.16+.28*m())*p,T=g[_%4];s.tri(b-y,S+w,E,b+y,S+.42*w,E+.1,b,S-w,E+.18,T)}}const u=new Je;u.name="A'Beckett Street close detail";const h=(d,f,p)=>{const x=d.build(),m=x.getAttribute("position");for(let _=0;_<m.count;_++){const M=this.origin[0]+m.getX(_)*this.sx,v=this.origin[1]+m.getZ(_)*this.sz;m.setXYZ(_,M,this.ground(M,v)+.08+m.getY(_),v)}x.deleteAttribute("glow"),x.computeBoundingSphere();const g=new te(x,f);g.castShadow=p,g.receiveShadow=p,u.add(g)};return h(e,new Pn({vertexColors:!0,roughness:.73,metalness:.1,side:Ce}),!0),h(s,new mo({vertexColors:!0,side:Ce}),!0),h(n,new sn({uniforms:{daylight:this.daylight},transparent:!0,depthWrite:!1,vertexShader:`varying vec3 world, facing;
        void main(){vec4 p=modelMatrix*vec4(position,1.);world=p.xyz;facing=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*p;}`,fragmentShader:`varying vec3 world, facing; uniform float daylight;
        void main(){vec3 eye=normalize(cameraPosition-world),n=normalize(facing),r=reflect(-eye,n);
          float sky=smoothstep(-.09,.27,r.y),f=pow(1.-clamp(dot(eye,n),0.,1.),3.);
          gl_FragColor=vec4(daylight*mix(vec3(.13,.18,.15),vec3(.54,.68,.78),sky),.045+.19*f+.085*sky);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),!1),u}dispose(){var t;(t=this.request)==null||t.abort()}}const Nd=-.9,Ud=1.3,Fd=.2,Hs={x:260,z:150,dist:3900,polar:55,azimuth:16},fv={ultra:{step:1,trees:1,shadow:4096,pixelRatio:2},high:{step:1,trees:1,shadow:4096,pixelRatio:2},medium:{step:2,trees:.6,shadow:2048,pixelRatio:1.3},low:{step:2,trees:.35,shadow:0,pixelRatio:1}},pv={ultra:{cars:[200,400,1100],trees:[260,770,4e3]},high:{cars:[170,340,1050],trees:[235,710,3800]},medium:{cars:[120,270,820],trees:[160,530,2850]},low:{cars:[85,190,600],trees:[100,380,2200]}},mv=()=>new Promise(i=>requestAnimationFrame(()=>i()));function gv(i,t){const n=t.positions,s=t.normals,r=t.colors,o=t.uvs,a=t.indices,l=a?a.length:n.length/3,c=new ie().fromArray(Array.from(t.matrix)),u=new Zt().getNormalMatrix(c),h=new V,d=M=>{const v=a?a[M]:M,b=new Float64Array(11);return h.set(n[v*3],n[v*3+1],n[v*3+2]).applyMatrix4(c),b[0]=h.x,b[1]=h.y,b[2]=h.z,s&&(h.set(s[v*3],s[v*3+1],s[v*3+2]).applyMatrix3(u).normalize(),b[3]=h.x,b[4]=h.y,b[5]=h.z),r&&(b[6]=r[v*3],b[7]=r[v*3+1],b[8]=r[v*3+2]),o&&(b[9]=o[v*2],b[10]=o[v*2+1]),b},f=[],p=[],x=[],m=[],g=M=>{f.push(M[0],M[1]+i.yAt(M[0],M[2]),M[2]),s&&p.push(M[3],M[4],M[5]),r&&x.push(M[6],M[7],M[8]),o&&m.push(M[9],M[10])},_=(M,v,b)=>{g(M),g(v),g(b)};for(let M=0;M+2<l;M+=3){const v=d(M),b=d(M+1),E=d(M+2);nc(i,v,b,E,_)}return{positions:new Float32Array(f),normals:s?new Float32Array(p):void 0,colors:r?new Float32Array(x):void 0,uvs:o?new Float32Array(m):void 0}}function xv(i,t,e){let n=0;for(let s=0;s<i.length;s++){const r=i[s],o=i[(s+1)%i.length],a=(o[0]-r[0])*(e-r[1])-(o[1]-r[1])*(t-r[0]);if(a!==0){if(n===0)n=Math.sign(a);else if(Math.sign(a)!==n)return!1}}return!0}const _v=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class Mv{constructor(t,e,n,s){X(this,"renderer");X(this,"scene",new rh);X(this,"camera",new Dn(38,1,5,9e4));X(this,"controls");X(this,"atmosphere");X(this,"clouds");X(this,"hasWeatherTime",!1);X(this,"weather",new uM);X(this,"showers");X(this,"storm");X(this,"water");X(this,"coastalHaze");X(this,"stillPhoto");X(this,"onPhotoVisibilityChange",()=>{var t;document.hidden&&((t=this.stillPhoto)==null||t.cancel("Keep the Inverloch view visible while saving the photo."))});X(this,"hf");X(this,"life");X(this,"trees");X(this,"solid");X(this,"designedWalls",[]);X(this,"blockers",{polygons:[],circles:[]});X(this,"labels");X(this,"places",[]);X(this,"tide",{value:Fd});X(this,"raf",0);X(this,"last",0);X(this,"time",0);X(this,"dirty",!0);X(this,"ultraStreet");X(this,"animating",!0);X(this,"disposed",!1);X(this,"abort",new AbortController);X(this,"worker");X(this,"detailStreaming");X(this,"resizeObserver");X(this,"flight");X(this,"lastCompass",NaN);X(this,"width",1);X(this,"height",1);X(this,"quality","high");X(this,"resolution");X(this,"pacing");X(this,"solarMinutes",NaN);X(this,"roadPaths",[]);X(this,"roadOverlay",new RM);X(this,"external");X(this,"meta");X(this,"shadowAim",new V);X(this,"lookDir",new V);X(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=ne.degToRad(e.azimuth),r=-Math.sin(s),o=-Math.cos(s),a=Math.cos(s),l=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+o*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-o*n};break;case"ArrowLeft":c={...e,x:e.x-a*n,z:e.z-l*n};break;case"ArrowRight":c={...e,x:e.x+a*n,z:e.z+l*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=Hs;break;default:return}t.preventDefault(),this.fly(c,.3)});X(this,"frame",t=>{var p,x,m,g,_,M,v,b,E,S;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,document.hidden){this.pacing.reset(),this.resolution.resetSampling();return}if(this.flight){const y=this.flight;y.t=Math.min(1,y.t+e/y.duration);const w=_v(y.t),T=(R,P)=>R+(P-R)*w;this.applyView({x:T(y.from.x,y.to.x),z:T(y.from.z,y.to.z),dist:Math.exp(T(Math.log(y.from.dist),Math.log(y.to.dist))),polar:T(y.from.polar,y.to.polar),azimuth:T(y.from.azimuth,y.to.azimuth)}),y.t>=1&&(this.flight=void 0)}this.controls&&!this.external&&this.controls.update()&&(this.dirty=!0);const n=(p=this.stillPhoto)!=null&&p.pending?this.stillPhoto:void 0;if(!n&&this.atmosphere.update(e)&&(this.dirty=!0),!n&&this.animating&&(this.time+=e,this.water.uniforms.uTime.value=this.time,(x=this.life)==null||x.update(e,this.time),this.dirty=!0),!n&&this.opts.assets.detail){const{x:y,y:w,z:T}=this.camera.position;(m=this.detailStreaming)==null||m.update(t/1e3,y,w,T,w-this.hf.yAt(y,T))}if(!this.dirty&&!n)return;const s=this.pacing.takeFrame(t);if(s===void 0)return;const r=this.dirty;this.dirty=!1,!n&&this.animating&&this.resolution.update(t/1e3,s,this.pacing.target)&&this.renderer.setPixelRatio(this.resolution.ratio);const o=this.camera;(g=this.ultraStreet)==null||g.update(o.position,this.atmosphere.sun.intensity);let a,l=1/0;const c=!!this.controls&&!this.external,u=this.hf.yAt(o.position.x,o.position.z);if(c&&(o.position.y=Math.max(o.position.y,u+12)),!n||!this.hasWeatherTime){const y=this.weatherTime(),w=this.weather;w.update(y),this.clouds.update(y),this.clouds.setCover(w.cover),this.clouds.setFlash(((_=this.storm)==null?void 0:_.update(y,w,o.position,this.opts.onThunder))??0);const T=w.rain>.015&&o.position.y-u<4&&this.solidAt(o.position.x,o.position.z);(M=this.showers)==null||M.update(w.rain,w.wetness,this.time,void 0,void 0,T),this.hasWeatherTime=!0}const h=Math.max(1,o.position.y-Math.max(u,this.waterLevel));if(this.controls&&c)a=o.position.distanceTo(this.controls.target),this.shadowAim.copy(this.controls.target);else{o.getWorldDirection(this.lookDir);const y=Math.min(this.lookDir.y<-.05?h/-this.lookDir.y:1e9,40+h*3,3e3);this.shadowAim.copy(o.position).addScaledVector(this.lookDir,y),a=Math.max(y,h)*1.3,l=Math.max(350,h*10)}const d=c?ne.clamp(a*.02,2,80):ne.clamp(a*.012,.4,60);Math.abs(d-o.near)>o.near*.05&&(o.near=d,o.updateProjectionMatrix());const f=pv[this.quality];if((v=this.life)==null||v.updateParkedLod(o.position,h,f.cars),(b=this.trees)==null||b.updateLod(o.position,h,f.trees),this.atmosphere.aimShadow(this.shadowAim,a),n||(E=this.detailStreaming)==null||E.applyReady(),n!=null&&n.draw(this.scene,o,r)||this.renderer.render(this.scene,o),(S=this.labels)==null||S.update(o,this.width,this.height,l),c){const y=Math.round(this.currentView().azimuth);y!==this.lastCompass&&(this.lastCompass=y,this.cb.onCompass(y))}});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.external=!!s.external,this.pacing=new L_(s.frameTarget)}async init(){var $;try{this.renderer=new g1({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D model needs.");return}const t=this.renderer;this.quality=this.pickQuality();let e=fv[this.quality];const n=(navigator.deviceMemory??8)>4;this.quality==="medium"&&n&&!this.opts.quality&&(e={...e,pixelRatio:2,trees:.8}),this.resolution=new kM(Math.min(window.devicePixelRatio||1,e.pixelRatio),this.quality==="low"?.6:1),t.setPixelRatio(this.resolution.ratio),t.outputColorSpace=Ue,t.toneMapping=ta,t.shadowMap.enabled=e.shadow>0,t.shadowMap.type=Vs;const s=t.domElement;this.opts.external?(s.setAttribute("role","img"),s.setAttribute("aria-label","3D model of Inverloch")):(s.tabIndex=0,s.setAttribute("role","application"),s.setAttribute("aria-label","3D model of Inverloch. Drag to pan, right-drag to rotate, scroll to zoom. Arrow keys pan, plus and minus zoom, Q and E rotate.")),s.style.display="block",s.style.outlineOffset="-3px",this.container.appendChild(s),s.addEventListener("webglcontextlost",N=>{var H;N.preventDefault(),(H=this.stillPhoto)==null||H.cancel("The browser lost the graphics context during the photo."),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this model was using.")});const r=this.worker=new mM;let o;try{o=await j1(this.opts.assets,e.step,(N,H)=>this.cb.onProgress(N*.6,H),r,this.abort.signal)}catch(N){r.close(),this.disposed||this.cb.onError(N instanceof Error?N.message:"The model data could not be loaded.");return}if(this.disposed){o.ground.dispose();return}const{town:a,heights:l,exposure:c,surface:u,terrainPatches:h,terrainTiles:d,ground:f}=o;this.meta=a.meta,this.quality==="ultra"&&this.opts.external&&(($=this.opts.clearPolygons)!=null&&$.length)&&this.opts.assets.detail&&(this.ultraStreet=new dv(this.scene,this.opts.assets.detail,this.fromLatLon.bind(this),(N,H)=>this.hf.yAt(N,H),()=>{this.dirty=!0}));const p=[...this.opts.clear??[],...(this.opts.clearLatLon??[]).map(N=>{const[H,K]=this.fromLatLon(N.lat,N.lon);return{x:H,z:K,r:N.r}})],x=(this.opts.clearPolygons??[]).map(N=>({pts:N.latLon.map(([H,K])=>this.fromLatLon(H,K)),roads:!!N.roads})),m=(N,H,K)=>x.some(Y=>(!K||Y.roads)&&xv(Y.pts,N,H)),g=(N,H)=>p.some(K=>(N-K.x)**2+(H-K.z)**2<K.r*K.r)||m(N,H,!1),_=(this.opts.detailLatLon??[]).map(N=>{const[H,K]=this.fromLatLon(N.lat,N.lon);return{x:H,z:K,r:N.r}}),M=(N,H)=>_.some(K=>(N-K.x)**2+(H-K.z)**2<K.r*K.r);f.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());const v=async(N,H)=>{this.cb.onProgress(N,H),await mv()};if(await v(.62,"Shaping the terrain"),this.disposed){f.dispose();return}const b=this.hf=new Pu(l,c,a.meta.grid[0],a.meta.grid[1],a.meta.size[0],a.meta.size[1],e.step,u,h),E=VM();this.scene.add(XM(b,d,f,this.tide,E));const S=navigator.deviceMemory??8;this.detailStreaming=new G_(this.opts.assets,this.quality==="low"||S<=4,E,f.anisotropy,r,()=>{this.dirty=!0});const y=this.showers=new TM(this.scene,this.camera,this.quality);this.water=cv(b,this.tide,this.quality==="ultra"?y.inletRain:void 0),this.scene.add(this.water.skirt,this.water.mesh),await v(.7,"Laying out the streets");const w=x.some(N=>N.roads)?(N,H)=>m(N,H,!0):void 0,T=BM(a,b,w,(N,H)=>y.shadeAsphalt(N,H));this.scene.add(T.group),this.roadPaths=T.paths,this.roadOverlay.add(T.pavement,T.pavementEnd),await v(.78,"Raising the buildings");const R=C_(a,b,T.index,W_,g);this.scene.add(R.group),await v(.86,"Planting trees");const P=this.trees=ov(a,b,e.trees,(N,H)=>g(N,H)||u_(N,H),T.index);this.scene.add(P.group),await v(.92,"Adding landmarks");const U={town:a,hf:b,footprints:R.footprints,roads:T.index,paths:T.paths,isClear:g,isDetail:M,hasDetail:_.length>0},L=oM(U);this.scene.add(L.group),this.blockers=R.blockers,this.blockers.polygons.push(...L.blockers.polygons),this.blockers.circles.push(...L.blockers.circles),this.solid=new Map,this.designedWalls=R.designedWalls;for(const N of[...R.footprints.map(H=>H.poly),...this.designedWalls]){if(N.length<6)continue;let H=1/0,K=-1/0,Y=1/0,Z=-1/0;for(let F=0;F<N.length;F+=2)H=Math.min(H,N[F]),K=Math.max(K,N[F]),Y=Math.min(Y,N[F+1]),Z=Math.max(Z,N[F+1]);for(let F=Math.floor(H/16);F<=Math.floor(K/16);F++)for(let J=Math.floor(Y/16);J<=Math.floor(Z/16);J++){const q=`${F}_${J}`,nt=this.solid.get(q);nt?nt.push(N):this.solid.set(q,[N])}}if(this.life=new yM(U,L,this.quality==="ultra",(N,H)=>this.roadSurfaceAt(N,H),this.opts.roadGrounding?0:hd),this.life.setTide(this.tide.value*Yn),this.scene.add(this.life.group),this.disposed)return;this.clouds=new F1,this.atmosphere=new B1(t,this.water,e.shadow,this.clouds),this.places=V_(a.meta,b);const z=this.places.find(N=>N.id==="inlet");this.storm=new dM(this.scene,z.x,z.z),this.clouds.uniforms.uFlashCenter.value=this.storm.center;const I=this.coastalHaze=new hM(z.x,z.z,this.atmosphere.horizon,this.quality==="ultra"&&this.opts.coastalMist!==!1,this.clouds,{value:this.atmosphere.sunDir},this.atmosphere.cloudShadowStrength);I.setWaterLevel(this.waterLevel),I.addWater(this.water.mesh),I.add(this.scene),this.scene.addEventListener("childadded",N=>I.add(N.child)),this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.labels=new k_(this.labelLayer,this.places,N=>this.flyToPlace(N)),this.external||this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const B=window.matchMedia("(prefers-reduced-motion: reduce)").matches;B&&(this.animating=!1),this.external?this.setExternalCamera(300,900,2600,0,-.42):B?this.applyView(Hs):(this.applyView({...Hs,dist:9500,polar:24,azimuth:-20}),this.fly(Hs,3.4)),this.cb.onProgress(1,"Ready"),this.cb.onReady({quality:this.quality,houses:a.counts.houses,mappedBuildings:a.counts.buildings,trees:P.count,roadPieces:a.counts.roads,sources:a.meta.sources,places:this.places}),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)}get isAnimating(){return this.animating}setAnimating(t){var e;t!==this.animating&&((e=this.resolution)==null||e.resetSampling()),this.animating=t,this.dirty=!0}setFrameTarget(t){var e;this.pacing.setTarget(t)&&((e=this.resolution)==null||e.resetSampling())}weatherTime(){return Date.now()/1e3}setExternalCamera(t,e,n,s,r){if(!this.external)return;const o=this.camera.position,a=this.camera.rotation,l=o.x===t&&o.y===e&&o.z===n,c=a.order==="YXZ"&&a.x===r&&a.y===s&&a.z===0;l&&c||(this.camera.position.set(t,e,n),this.camera.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}setExternal(t){if(!(t===this.external||!this.hf)){if(this.external=t,t)this.flight=void 0,this.controls&&(this.controls.enabled=!1);else{this.controls||this.setupControls(),this.controls.enabled=!0;const e=this.camera;e.getWorldDirection(this.lookDir);const n=Math.max(1,e.position.y),s=this.lookDir.y<-.05?Math.min(n/-this.lookDir.y,6e3):900,r=this.controls.target.copy(e.position).addScaledVector(this.lookDir,s);r.x=ne.clamp(r.x,this.hf.xMin,this.hf.xMax),r.z=ne.clamp(r.z,this.hf.zMin,this.hf.zMax),r.y=0,this.controls.update(),this.fly(Hs,1.6)}this.resize()}}getCamera(){const t=new dn().setFromQuaternion(this.camera.quaternion,"YXZ"),e=this.camera.position;return{x:e.x,y:e.y,z:e.z,yaw:t.y,pitch:t.x}}fromLatLon(t,e){const n=this.meta;return n?[(e-n.origin[0])*n.metresPerDegree[0],-(t-n.origin[1])*n.metresPerDegree[1]]:[0,0]}addParts(t){const e=new Je;e.name="guest";const n=t.map(s=>{var f;const r=s.roadOverlay?{...s,positions:this.roadOverlay.project(this.hf,s.positions,s.indices),indices:void 0,normals:void 0,colors:void 0,uvs:void 0,onGround:!0}:s.onGround?{...s,...gv(this.hf,s),indices:void 0}:s,o=new Re,a=(p,x)=>new Te(p instanceof Float32Array?p:Float32Array.from(p),x);o.setAttribute("position",a(r.positions,3)),r.colors&&o.setAttribute("color",a(r.colors,3)),r.uvs&&o.setAttribute("uv",a(r.uvs,2)),r.indices&&o.setIndex(Array.from(r.indices)),r.normals?o.setAttribute("normal",a(r.normals,3)):r.roadOverlay||o.computeVertexNormals();let l=null;r.map&&(l=new Ae(r.map),l.colorSpace=Ue,l.wrapS=l.wrapT=Ks,r.mapRepeat&&l.repeat.set(r.mapRepeat[0],r.mapRepeat[1]),l.anisotropy=4,l.needsUpdate=!0);const c=r.opacity??1,u={color:new Lt().setRGB(...r.color??[1,1,1]),map:l,vertexColors:!!r.colors,transparent:c<1,opacity:c,side:r.doubleSide?Ce:_i,...r.roadOverlay?wd:{}},h=r.unlit?new pn(u):new Pn({...u,roughness:r.roughness??.9,metalness:r.metalness??0,emissive:new Lt().setRGB(...r.emissive??[0,0,0]),emissiveIntensity:r.emissiveIntensity??1,emissiveMap:r.glowMap?l:null,flatShading:!!r.flatShading}),d=new te(o,h);return d.matrixAutoUpdate=!1,r.onGround||d.matrix.fromArray(Array.from(r.matrix)),r.wetAsphalt&&h instanceof Pn&&((f=this.showers)==null||f.shadeAsphalt(h)),r.wetAsphalt&&r.onGround&&!r.roadOverlay&&this.roadOverlay.add(o.getAttribute("position").array),d.userData.fixed=!!r.onGround,d.castShadow=!r.roadOverlay&&c>=1,d.receiveShadow=!r.roadOverlay,e.add(d),d});return this.scene.add(e),this.dirty=!0,{setMatrix:(s,r)=>{const o=n[s];!o||o.userData.fixed||(o.matrix.fromArray(Array.from(r)),o.matrixWorldNeedsUpdate=!0,this.dirty=!0)},setEmissive:(s,r,o,a,l)=>{var u;const c=(u=n[s])==null?void 0:u.material;c instanceof Pn&&(c.emissive.setRGB(r,o,a),c.emissiveIntensity=l,this.dirty=!0)},remove:()=>{var s;this.scene.remove(e);for(const r of n){this.roadOverlay.remove(r.geometry.getAttribute("position").array),r.geometry.dispose();const o=r.material;(s=o.map)==null||s.dispose(),o.dispose()}this.dirty=!0}}}addTrafficCar(t,e,n,s,r){if(!this.life)throw new Error("Wait for the Inverloch model before adding traffic");const o=this.life.makeTrafficCar(t,e,n,s,r),{mesh:a,scale:l}=o;let c;return{setMatrix:(u,h)=>{u===0&&(a.matrix.fromArray(h),this.opts.roadGrounding||(a.matrix.elements[13]+=hd),a.matrixWorldNeedsUpdate=!0,a.visible=!!(h[0]||h[1]||h[2]),this.dirty=!0)},setSignal:u=>{!c&&u&&(c=md(t),c.scale.copy(l),a.add(c)),c&&(gd(c,u),this.dirty=!0)},setCabin:u=>{o.setCabin(u),this.dirty=!0},remove:()=>{o.remove(),c==null||c.geometry.dispose(),c==null||c.material.dispose(),this.dirty=!0}}}addPad(t){const e=t.radius??t.halfWidth??5,n=t.radius??t.halfDepth??5,s=t.heading??0,r=Math.cos(s),o=Math.sin(s);let a=1/0,l=-1/0;for(const[f,p]of[[0,0],[-e,-n],[e,-n],[e,n],[-e,n],[0,-n],[0,n],[-e,0],[e,0]]){const x=this.hf.yAt(t.x+f*r+p*o,t.z-f*o+p*r);a=Math.min(a,x),l=Math.max(l,x)}const c=l+(t.lift??.25),u=c-a+1,h=t.radius?new pl(t.radius,t.radius,u,24):new Xi(e*2,u,n*2),d=new te(h,new Pn({color:new Lt().setRGB(...t.color),roughness:1}));return d.position.set(t.x,c-u/2,t.z),d.rotation.y=s,d.receiveShadow=!0,d.name="guest-pad",this.scene.add(d),this.dirty=!0,c}setSolarMinutes(t){!this.atmosphere||t===this.solarMinutes||(this.solarMinutes=t,this.atmosphere.setSolar(t),this.dirty=!0)}roadSpot(t){const e=t.trim().toLowerCase();let n=null;for(const p of this.roadPaths)p.name.toLowerCase()===e&&(!n||p.length>n.length)&&(n=p);if(!n)return null;const s=n.pts.length/3,r=0,o=s-1,a=s>>1;let l=n.pts[o*3]-n.pts[r*3],c=n.pts[o*3+2]-n.pts[r*3+2];const u=Math.hypot(l,c)||1;l/=u,c/=u;const h=Math.min(70,u*.5),d=n.pts[a*3]-l*h,f=n.pts[a*3+2]-c*h;return{x:d,y:this.hf.yAt(d,f)+38,z:f,yaw:Math.atan2(-l,-c),pitch:-.42}}groundAt(t,e){return this.hf?this.hf.yAt(t,e):0}roadSurfaceAt(t,e){if(!this.hf||!Number.isFinite(t)||!Number.isFinite(e))return null;const n=this.roadOverlay.heightAt(t,e);return n!==null&&n>=this.hf.yAt(t,e)-.01?n:null}nearestCar(t,e,n){var s;return((s=this.life)==null?void 0:s.nearestCar(t,e,n))??null}addCars(t){var e;(e=this.life)==null||e.addCars(t),this.dirty=!0}driveCar(t,e,n,s,r,o,a=0,l=0,c=0){var h;const u=((h=this.life)==null?void 0:h.driveCar(t,e,n,s,r,o,a,l,c))??!1;return this.dirty=!0,u}setControlledCar(t,e){var s;const n=((s=this.life)==null?void 0:s.setControlledCar(t,e))??!1;return n&&(this.dirty=!0),n}resetCar(t,e){var s;const n=((s=this.life)==null?void 0:s.resetCar(t,e))??!1;return n&&(this.dirty=!0),n}setRemoved({cars:t=[]}){var e;(e=this.life)==null||e.setHiddenCars(t),this.dirty=!0}designedWallFootprints(){return this.designedWalls.map(t=>t.slice())}buildingBlockers(){return this.blockers}parkedCarBlockers(){var t;return((t=this.life)==null?void 0:t.parkedCarBlockers())??[]}parkedCarBlocker(t,e){var n;return((n=this.life)==null?void 0:n.parkedCarBlocker(t,e))??null}solidAt(t,e){var s;const n=(s=this.solid)==null?void 0:s.get(`${Math.floor(t/16)}_${Math.floor(e/16)}`);if(!n)return!1;for(const r of n){let o=!1;for(let a=0,l=r.length/2-1;a<r.length/2;l=a++){const c=r[a*2],u=r[a*2+1],h=r[l*2],d=r[l*2+1];u>e!=d>e&&t<(h-c)*(e-u)/(d-u)+c&&(o=!o)}if(o)return!0}return!1}get waterLevel(){return this.tide.value*Yn}get bounds(){return this.hf?[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]:[-4e3,4e3,-3440,3440]}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}setTide(t){var e,n;this.water&&(this.water.setTide(ne.clamp(t,Nd,Ud)),(e=this.life)==null||e.setTide(this.tide.value*Yn),(n=this.coastalHaze)==null||n.setWaterLevel(this.waterLevel),this.dirty=!0)}captureStill(){return this.disposed||!this.atmosphere||this.quality!=="ultra"?Promise.reject(new Error("Antialiased photos are available after the Ultra view loads.")):document.hidden?Promise.reject(new Error("Open the Inverloch view to save a photo.")):(this.stillPhoto||(this.stillPhoto=new $M(this.renderer,()=>{this.dirty=!0,this.resolution.resetSampling()}),document.addEventListener("visibilitychange",this.onPhotoVisibilityChange)),this.resolution.resetSampling(),this.stillPhoto.start())}setCoastalMist(t){var e;this.opts.coastalMist=t,(e=this.coastalHaze)==null||e.setMist(this.quality==="ultra"&&t),this.dirty=!0}setLabelsVisible(t){var e;(e=this.labels)==null||e.setVisible(t),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.2)}resetView(){this.fly(Hs,1.8)}setView(t,e,n,s,r,o=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},o)}faceNorth(){const t=this.currentView();this.fly({...t,azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:ne.clamp(e.dist*t,this.controls.minDistance,this.controls.maxDistance)},.35)}dispose(){var t,e,n,s,r,o,a,l,c,u;this.disposed=!0,this.abort.abort(),(t=this.ultraStreet)==null||t.dispose(),(e=this.detailStreaming)==null||e.dispose(),(n=this.worker)==null||n.close(),cancelAnimationFrame(this.raf),(s=this.resizeObserver)==null||s.disconnect(),(r=this.labels)==null||r.dispose(),(o=this.stillPhoto)==null||o.dispose(),(a=this.clouds)==null||a.dispose(),(l=this.showers)==null||l.dispose(),(c=this.storm)==null||c.dispose(),document.removeEventListener("visibilitychange",this.onPhotoVisibilityChange),(u=this.controls)==null||u.dispose(),this.renderer&&(this.renderer.domElement.removeEventListener("keydown",this.onKey),this.scene.traverse(h=>{var p,x;const d=h;(x=(p=d.geometry)==null?void 0:p.dispose)==null||x.call(p);const f=Array.isArray(d.material)?d.material:d.material?[d.material]:[];for(const m of f){for(const g of Object.values(m))g instanceof Ae&&g.dispose();m.dispose()}}),this.renderer.dispose(),this.renderer.domElement.remove())}pickQuality(){if(this.opts.quality)return this.opts.quality;const t=new URLSearchParams(window.location.search).get("quality");if(t==="ultra"||t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new P1(this.camera,this.renderer.domElement);t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=70,t.maxDistance=12e3,t.maxPolarAngle=ne.degToRad(84),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const e=t.target,n=this.hf;e.x=ne.clamp(e.x,n.xMin,n.xMax),e.z=ne.clamp(e.z,n.zMin,n.zMax),e.y=0,this.dirty=!0}),this.renderer.domElement.addEventListener("keydown",this.onKey)}clampView(t){var e,n;return{x:ne.clamp(t.x,this.hf.xMin,this.hf.xMax),z:ne.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:ne.clamp(t.dist,((e=this.controls)==null?void 0:e.minDistance)??70,((n=this.controls)==null?void 0:n.maxDistance)??12e3),polar:ne.clamp(t.polar,2,84),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=this.camera.position.clone().sub(t),n=new _o().setFromVector3(e);return{x:t.x,z:t.z,dist:n.radius,polar:ne.radToDeg(n.phi),azimuth:ne.radToDeg(n.theta)}}applyView(t){const e=new _o(t.dist,ne.degToRad(t.polar),ne.degToRad(t.azimuth)),n=this.controls.target.set(t.x,0,t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(!this.controls||this.external)return;if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.fov=this.external?60:t/e<.8?52:38,this.camera.updateProjectionMatrix(),this.dirty=!0}}const hc="Map data © OpenStreetMap contributors · Elevation © Geoscience Australia (CC BY 4.0)",vv=`
.inv-embed, .inv-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the model but never take a touch: drags and pinches must reach the canvas underneath */
.inv-embed-labels, .inv-embed .inv-label { pointer-events: none; }
.inv-embed-credit { position: absolute; left: 50%; bottom: var(--inv-credit-bottom, 6px); transform: translateX(-50%); margin: 0; max-width: calc(100% - 24px);
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; pointer-events: none; }
`,Sv=["low","medium","high","ultra"];function yv(i,t){if(!document.querySelector("style[data-inverloch-model]")){const d=document.createElement("style");d.setAttribute("data-inverloch-model",""),d.textContent=$n+vv,document.head.appendChild(d)}const e=document.createElement("div");e.className="inv-embed";const n=document.createElement("div");n.className="inv-embed-layer";const s=document.createElement("div");s.className="inv-embed-layer inv-embed-labels";const r=document.createElement("p");r.className="inv-embed-credit",r.textContent=hc,e.append(n,s,r),i.appendChild(e);const o=typeof t.assets=="string"?{height:t.assets+"height.png",ground:t.assets+(typeof window<"u"&&window.anSmallGround?"ground-2k.webp":"ground.webp"),town:t.assets+"town-v45.json",detail:t.assets+"detail.json"}:t.assets;let a=[],l=!1,c;const u=new Promise((d,f)=>c={ok:d,fail:f}),h=new Mv(n,s,{onProgress:(d,f)=>{var p;return(p=t.onProgress)==null?void 0:p.call(t,d,f)},onReady:d=>{a=d.places.map(f=>{const p=Math.min(Math.max(f.view[0]*.55,90),1500),x=f.view[1]*Math.PI/180,m=f.view[2]*Math.PI/180,g=f.x+p*Math.sin(x)*Math.sin(m),_=f.z+p*Math.sin(x)*Math.cos(m),M=Math.max(h.groundAt(g,_),h.waterLevel)+Math.max(p*Math.cos(x),20),v=f.x-g,b=f.y-10-M,E=f.z-_;return{id:f.id,name:f.name,kind:f.kind,x:g,y:M,z:_,yaw:Math.atan2(-v,-E),pitch:Math.atan2(b,Math.hypot(v,E)),tx:f.x,tz:f.z}}),t.labels===!1&&h.setLabelsVisible(!1),l=!0,c.ok()},onError:d=>{var f;return l?(f=t.onError)==null?void 0:f.call(t,d):c.fail(new Error(d))},onCompass:()=>{}},{assets:o,external:!0,quality:t.quality,frameTarget:t.frameTarget,coastalMist:t.coastalMist,onThunder:t.onThunder,clear:t.clear,clearLatLon:t.clearLatLon,clearPolygons:t.clearPolygons,roadGrounding:t.roadGrounding,detailLatLon:t.detailLatLon});return h.init(),{ready:u,setCamera:(d,f,p,x,m)=>h.setExternalCamera(d,f,p,x,m),setMinutes:d=>h.setSolarMinutes(d),setTide:d=>h.setTide(d),setAnimating:d=>h.setAnimating(d),setFrameTarget:d=>h.setFrameTarget(d),captureStill:()=>h.captureStill(),setCoastalMist:d=>h.setCoastalMist(d),setLabelsVisible:d=>h.setLabelsVisible(d),groundAt:(d,f)=>h.groundAt(d,f),roadSurfaceAt:(d,f)=>h.roadSurfaceAt(d,f),waterLevel:()=>h.waterLevel,bounds:()=>h.bounds,fromLatLon:(d,f)=>h.fromLatLon(d,f),setMode:d=>h.setExternal(d!=="bird"),getCamera:()=>h.getCamera(),flyToPlace:d=>h.flyToPlace(d),lookAt:(d,f,p,x,m)=>h.setView(d,f,p,x,m),addParts:d=>h.addParts(d),addTrafficCar:(d,f,p,x,m)=>h.addTrafficCar(d,f,p,x,m),addPad:d=>h.addPad(d),spots:()=>a,nearestCar:(d,f,p)=>h.nearestCar(d,f,p),driveCar:(d,f,p,x,m,g,_,M,v)=>h.driveCar(d,f,p,x,m,g,_,M,v),setControlledCar:(d,f)=>h.setControlledCar(d,f),resetCar:(d,f)=>h.resetCar(d,f),setRemoved:d=>h.setRemoved(d),solidAt:(d,f)=>h.solidAt(d,f),designedWallFootprints:()=>h.designedWallFootprints(),buildingBlockers:()=>h.buildingBlockers(),parkedCarBlockers:()=>h.parkedCarBlockers(),parkedCarBlocker:(d,f)=>h.parkedCarBlocker(d,f),addCars:d=>h.addCars(d),roadSpot:d=>{const f=h.roadSpot(d);return f?{id:"road:"+d,name:d,kind:"landmark",...f,tx:f.x-Math.sin(f.yaw)*70,tz:f.z-Math.cos(f.yaw)*70}:null},tide:{min:Nd,max:Ud,initial:Fd},credit:hc,dispose:()=>{h.dispose(),e.remove()}}}return Sn.CREDIT=hc,Sn.create=yv,Sn.qualityPresets=Sv,Object.defineProperty(Sn,Symbol.toStringTag,{value:"Module"}),Sn}({});

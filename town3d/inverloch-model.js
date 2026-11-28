var InverlochModel=function(_n){"use strict";var RM=Object.defineProperty;var CM=(_n,Yn,hi)=>Yn in _n?RM(_n,Yn,{enumerable:!0,configurable:!0,writable:!0,value:hi}):_n[Yn]=hi;var X=(_n,Yn,hi)=>CM(_n,typeof Yn!="symbol"?Yn+"":Yn,hi);const Yn='.inv-label{position:absolute;left:0;top:0;pointer-events:auto;font:600 12px/1 Space Grotesk,system-ui,sans-serif;padding:6px 10px;border-radius:999px;background:#0c1c24e6;color:#fff;border:1px solid rgba(255,255,255,.2);white-space:nowrap;cursor:pointer;will-change:transform}.inv-label:after{content:"";position:absolute;left:50%;bottom:-8px;width:1px;height:8px;background:#ffffffbf}.inv-label:hover{background:#0b7d9c}.inv-label--nature{background:#183826eb}.inv-label--nature:hover{background:#2c7a4b}.inv-label--water{background:none;border-color:transparent;color:#f1fbff;font-style:italic;font-weight:500;font-size:13px;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,35,60,.95),0 0 8px rgba(0,35,60,.7)}.inv-label--water:after{display:none}.inv-label--water:hover{background:#0c1c2499}.inv-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.inv-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}';/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hi="187",Zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ud=0,ql=1,dd=2,As=1,fd=2,Rs=3,di=0,Qe=1,Ce=2,Vi=0,Cs=1,wa=2,Jl=3,$l=4,pd=5,Wi=100,md=101,gd=102,xd=103,_d=104,Md=200,vd=201,Sd=202,yd=203,jl=204,Ql=205,bd=206,Ed=207,wd=208,Td=209,Ad=210,Rd=211,Cd=212,Ld=213,Pd=214,Ta=0,Aa=1,Ra=2,Ls=3,Ca=4,La=5,Pa=6,Da=7,fr=0,Dd=1,Id=2,Kn=0,tc=1,ec=2,nc=3,ic=4,sc=5,rc=6,Ia=7,ac=300,Xi=301,Ps=302,Na=303,Ua=304,Ds=1e3,Dn=1001,Fa=1002,Ie=1003,Nd=1004,pr=1005,Ze=1006,Oa=1007,Mn=1008,rn=1009,oc=1010,lc=1011,Is=1012,za=1013,In=1014,vn=1015,Sn=1016,Ba=1017,Ga=1018,Yi=1020,cc=35902,hc=35899,uc=1021,dc=1022,Nn=1023,fi=1026,pi=1027,mr=1028,ka=1029,mi=1030,Ha=1031,Va=1033,gr=33776,xr=33777,_r=33778,Mr=33779,Wa=35840,Xa=35841,Ya=35842,Za=35843,Ka=36196,qa=37492,Ja=37496,$a=37488,ja=37489,vr=37490,Qa=37491,to=37808,eo=37809,no=37810,io=37811,so=37812,ro=37813,ao=37814,oo=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,mo=36492,go=36494,xo=36495,_o=36283,Mo=36284,Sr=36285,vo=36286,Ud=3200,Zi=0,Fd=1,gi="",Ne="srgb",yr="srgb-linear",br="linear",fe="srgb",So=7680,Od=519,zd=512,Bd=513,Gd=514,fc=515,kd=516,Hd=517,pc=518,mc=519,Vd=35044,Ci=35048,gc="300 es",yn=2e3,Ns=2001;function Wd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xd(){const i=Us("canvas");return i.style.display="block",i}const xc={};function _c(...i){const t="THREE."+i.shift();console.log(t,...i)}function Mc(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function kt(...i){i=Mc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function oe(...i){i=Mc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Er(...i){const t=i.join(" ");t in xc||(xc[t]=!0,kt(...i))}function Yd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Zd={[Ta]:Ta,[Ra]:Pa,[Ca]:Ca,[Ls]:La,[Aa]:Aa,[Pa]:Ra,[Da]:Da,[La]:Ls};class xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vc=1234567;const Fs=Math.PI/180,Os=180/Math.PI;function Ki(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function yo(i,t){return(i%t+t)%t}function Kd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function qd(i,t,e){return i!==t?(e-i)/(t-i):0}function zs(i,t,e){return(1-e)*i+e*t}function Jd(i,t,e,n){return zs(i,t,1-Math.exp(-e*n))}function $d(i,t=1){return t-Math.abs(yo(i,t*2)-t)}function jd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Qd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function tf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ef(i,t){return i+Math.random()*(t-i)}function nf(i){return i*(.5-Math.random())}function sf(i){i!==void 0&&(vc=i);let t=vc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rf(i){return i*Fs}function af(i){return i*Os}function of(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function lf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cf(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),d=a((t+n)/2),h=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":i.set(o*d,l*h,l*u,o*c);break;case"YZY":i.set(l*u,o*d,l*h,o*c);break;case"ZXZ":i.set(l*h,l*u,o*d,o*c);break;case"XZX":i.set(o*d,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*d,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*d,o*c);break;default:kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function yc(i,t){if(t.constructor===Float32Array)return i;const e=bo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function bc(i,t){if(t.constructor===Float32Array)return i;const e=bo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const Qt={DEG2RAD:Fs,RAD2DEG:Os,generateUUID:Ki,clamp:Kt,euclideanModulo:yo,mapLinear:Kd,inverseLerp:qd,lerp:zs,damp:Jd,pingpong:$d,smoothstep:jd,smootherstep:Qd,randInt:tf,randFloat:ef,randFloatSpread:nf,seededRandom:sf,degToRad:rf,radToDeg:af,isPowerOfTwo:of,ceilPowerOfTwo:lf,floorPowerOfTwo:Sc,setQuaternionFromProperEuler:cf,normalize:bc,denormalize:yc},Hl=class Hl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hl.prototype.isVector2=!0;let Nt=Hl;class bn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(h!==x||l!==u||c!==f||d!==p){let m=l*u+c*f+d*p+h*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-o;if(m<.9995){const M=Math.acos(m),v=Math.sin(M);g=Math.sin(g*M)/v,o=Math.sin(o*M)/v,l=l*g+u*o,c=c*g+f*o,d=d*g+p*o,h=h*g+x*o}else{l=l*g+u*o,c=c*g+f*o,d=d*g+p*o,h=h*g+x*o;const M=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=M,c*=M,d*=M,h*=M}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+d*h+l*f-c*u,t[e+1]=l*p+d*u+c*h-o*f,t[e+2]=c*p+d*f+o*u-l*h,t[e+3]=d*p-o*h-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),h=o(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*d*h+c*f*p,this._y=c*f*h-u*d*p,this._z=c*d*p+u*f*h,this._w=c*d*h-u*f*p;break;case"YXZ":this._x=u*d*h+c*f*p,this._y=c*f*h-u*d*p,this._z=c*d*p-u*f*h,this._w=c*d*h+u*f*p;break;case"ZXY":this._x=u*d*h-c*f*p,this._y=c*f*h+u*d*p,this._z=c*d*p+u*f*h,this._w=c*d*h-u*f*p;break;case"ZYX":this._x=u*d*h-c*f*p,this._y=c*f*h+u*d*p,this._z=c*d*p-u*f*h,this._w=c*d*h+u*f*p;break;case"YZX":this._x=u*d*h+c*f*p,this._y=c*f*h+u*d*p,this._z=c*d*p-u*f*h,this._w=c*d*h-u*f*p;break;case"XZY":this._x=u*d*h-c*f*p,this._y=c*f*h-u*d*p,this._z=c*d*p+u*f*h,this._w=c*d*h+u*f*p;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],h=e[10],u=n+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vl=class Vl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ec.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),d=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=s+l*h+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Eo.copy(this).projectOnVector(t),this.sub(Eo)}reflect(t){return this.sub(Eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vl.prototype.isVector3=!0;let H=Vl;const Eo=new H,Ec=new bn,Wl=class Wl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],M=s[1],v=s[4],_=s[7],b=s[2],E=s[5],S=s[8];return r[0]=a*x+o*M+l*b,r[3]=a*m+o*v+l*E,r[6]=a*g+o*_+l*S,r[1]=c*x+d*M+h*b,r[4]=c*m+d*v+h*E,r[7]=c*g+d*_+h*S,r[2]=u*x+f*M+p*b,r[5]=u*m+f*v+p*E,r[8]=u*g+f*_+p*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*a-o*c,u=o*l-d*r,f=c*r-a*l,p=e*h+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=h*x,t[1]=(s*c-d*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(d*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wo.makeScale(t,e)),this}rotate(t){return Er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wo.makeRotation(-t)),this}translate(t,e){return Er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Wl.prototype.isMatrix3=!0;let Ht=Wl;const wo=new Ht,wc=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hf(){const i={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===fe&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yr]:{primaries:t,whitePoint:n,transfer:br,toXYZ:wc,fromXYZ:Tc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:wc,fromXYZ:Tc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),i}const se=hf();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ji;class uf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ji===void 0&&(Ji=Us("canvas")),Ji.width=t.width,Ji.height=t.height;const s=Ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Us("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let df=0;class wr{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(To(s[a].image)):r.push(To(s[a]))}else r=To(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function To(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}let ff=0;const Ao=new H;class Ae extends xi{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=Dn,s=Dn,r=Ze,a=Mn,o=Nn,l=rn,c=Ae.DEFAULT_ANISOTROPY,d=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Ki(),this.name="",this.source=new wr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ao).x}get height(){return this.source.getSize(Ao).y}get depth(){return this.source.getSize(Ao).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ac)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ds:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case Fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ds:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case Fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null,Ae.DEFAULT_MAPPING=ac,Ae.DEFAULT_ANISOTROPY=1;const Xl=class Xl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,_=(f+1)/2,b=(g+1)/2,E=(d+u)/4,S=(h+x)/4,y=(p+m)/4;return v>_&&v>b?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=S/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=S/r,s=y/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-p)*(m-p)+(h-x)*(h-x)+(u-d)*(u-d));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(h-x)/M,this.z=(u-d)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xl.prototype.isVector4=!0;let Se=Xl;class pf extends xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ae({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new wr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends pf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ac extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mf extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ya=class ya{constructor(t,e,n,s,r,a,o,l,c,d,h,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,d,h,u,f,p,x,m)}set(t,e,n,s,r,a,o,l,c,d,h,u,f,p,x,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=d,g[10]=h,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ya().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),a=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const u=a*d,f=a*h,p=o*d,x=o*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*d,f=l*h,p=c*d,x=c*h;e[0]=u+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*d,e[9]=-o,e[2]=f*o-p,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*d,f=l*h,p=c*d,x=c*h;e[0]=u-x*o,e[4]=-a*h,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*d,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*d,f=a*h,p=o*d,x=o*h;e[0]=l*d,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*h,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*d,e[4]=x-u*h,e[8]=p*h+f,e[1]=h,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=f*h+p,e[10]=u-x*h}else if(t.order==="XZY"){const u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=u*h+x,e[5]=a*d,e[9]=f*h-p,e[2]=p*h-f,e[6]=o*d,e[10]=x*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gf,t,xf)}lookAt(t,e,n){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),_i.crossVectors(n,an),_i.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),_i.crossVectors(n,an)),_i.normalize(),Tr.crossVectors(an,_i),s[0]=_i.x,s[4]=Tr.x,s[8]=an.x,s[1]=_i.y,s[5]=Tr.y,s[9]=an.y,s[2]=_i.z,s[6]=Tr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],M=n[3],v=n[7],_=n[11],b=n[15],E=s[0],S=s[4],y=s[8],w=s[12],T=s[1],C=s[5],P=s[9],U=s[13],L=s[2],O=s[6],I=s[10],z=s[14],Q=s[3],N=s[7],V=s[11],K=s[15];return r[0]=a*E+o*T+l*L+c*Q,r[4]=a*S+o*C+l*O+c*N,r[8]=a*y+o*P+l*I+c*V,r[12]=a*w+o*U+l*z+c*K,r[1]=d*E+h*T+u*L+f*Q,r[5]=d*S+h*C+u*O+f*N,r[9]=d*y+h*P+u*I+f*V,r[13]=d*w+h*U+u*z+f*K,r[2]=p*E+x*T+m*L+g*Q,r[6]=p*S+x*C+m*O+g*N,r[10]=p*y+x*P+m*I+g*V,r[14]=p*w+x*U+m*z+g*K,r[3]=M*E+v*T+_*L+b*Q,r[7]=M*S+v*C+_*O+b*N,r[11]=M*y+v*P+_*I+b*V,r[15]=M*w+v*U+_*z+b*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],u=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],M=l*f-c*u,v=o*f-c*h,_=o*u-l*h,b=a*f-c*d,E=a*u-l*d,S=a*h-o*d;return e*(x*M-m*v+g*_)-n*(p*M-m*b+g*E)+s*(p*v-x*b+g*S)-r*(p*_-x*E+m*S)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],d=t[10];return e*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],u=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],M=e*o-n*a,v=e*l-s*a,_=e*c-r*a,b=n*l-s*o,E=n*c-r*o,S=s*c-r*l,y=d*x-h*p,w=d*m-u*p,T=d*g-f*p,C=h*m-u*x,P=h*g-f*x,U=u*g-f*m,L=M*U-v*P+_*C+b*T-E*w+S*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return t[0]=(o*U-l*P+c*C)*O,t[1]=(s*P-n*U-r*C)*O,t[2]=(x*S-m*E+g*b)*O,t[3]=(u*E-h*S-f*b)*O,t[4]=(l*T-a*U-c*w)*O,t[5]=(e*U-s*T+r*w)*O,t[6]=(m*_-p*S-g*v)*O,t[7]=(d*S-u*_+f*v)*O,t[8]=(a*P-o*T+c*y)*O,t[9]=(n*T-e*P-r*y)*O,t[10]=(p*E-x*_+g*M)*O,t[11]=(h*_-d*E-f*M)*O,t[12]=(o*w-a*C-l*y)*O,t[13]=(e*C-n*w+s*y)*O,t[14]=(x*v-p*b-m*M)*O,t[15]=(d*b-h*v+u*M)*O,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,h=o+o,u=r*c,f=r*d,p=r*h,x=a*d,m=a*h,g=o*h,M=l*c,v=l*d,_=l*h,b=n.x,E=n.y,S=n.z;return s[0]=(1-(x+g))*b,s[1]=(f+_)*b,s[2]=(p-v)*b,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(u+g))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(p+v)*S,s[9]=(m-M)*S,s[10]=(1-(u+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=$i.set(s[0],s[1],s[2]).length();const o=$i.set(s[4],s[5],s[6]).length(),l=$i.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);const c=1/a,d=1/o,h=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=d,En.elements[5]*=d,En.elements[6]*=d,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,e.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=yn,l=!1){const c=this.elements,d=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===yn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ns)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=yn,l=!1){const c=this.elements,d=2/(e-t),h=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s);let p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===yn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ns)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ya.prototype.isMatrix4=!0;let te=ya;const $i=new H,En=new te,gf=new H(0,0,0),xf=new H(1,1,1),_i=new H,Tr=new H,an=new H,Rc=new te,Cc=new bn;class hn{constructor(t=0,e=0,n=0,s=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],h=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Ro{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _f=0;const Lc=new H,ji=new bn,Jn=new te,Ar=new H,Bs=new H,Mf=new H,vf=new bn,Pc=new H(1,0,0),Dc=new H(0,1,0),Ic=new H(0,0,1),Nc={type:"added"},Sf={type:"removed"},Qi={type:"childadded",child:null},Co={type:"childremoved",child:null};class ze extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DEFAULT_UP.clone();const t=new H,e=new hn,n=new bn,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Ht}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(Pc,t)}rotateY(t){return this.rotateOnAxis(Dc,t)}rotateZ(t){return this.rotateOnAxis(Ic,t)}translateOnAxis(t,e){return Lc.copy(t).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pc,t)}translateY(t){return this.translateOnAxis(Dc,t)}translateZ(t){return this.translateOnAxis(Ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ar.copy(t):Ar.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Bs,Ar,this.up):Jn.lookAt(Ar,Bs,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Jn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sf),Co.child=t,this.dispatchEvent(Co),Co.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,Mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),h=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ze.DEFAULT_UP=new H(0,1,0),ze.DEFAULT_MATRIX_AUTO_UPDATE=!0,ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qe extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yf={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function Po(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class Ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=yo(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Po(a,r,t+.3333333333333333),this.g=Po(a,r,t),this.b=Po(a,r,t-.3333333333333333)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=Uc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return se.workingToColorSpace(Je.copy(this),t),Math.round(Kt(Je.r*255,0,255))*65536+Math.round(Kt(Je.g*255,0,255))*256+Math.round(Kt(Je.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(Je.copy(this),e);const n=Je.r,s=Je.g,r=Je.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Ne){se.workingToColorSpace(Je.copy(this),t);const e=Je.r,n=Je.g,s=Je.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(Rr);const n=zs(Mi.h,Rr.h,e),s=zs(Mi.s,Rr.s,e),r=zs(Mi.l,Rr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new Ct;Ct.NAMES=Uc;class Fc extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const wn=new H,$n=new H,Do=new H,jn=new H,ts=new H,es=new H,Oc=new H,Io=new H,No=new H,Uo=new H,Fo=new Se,Oo=new Se,zo=new Se;class Tn{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),$n.subVectors(n,e),Do.subVectors(t,e);const a=wn.dot(wn),o=wn.dot($n),l=wn.dot(Do),c=$n.dot($n),d=$n.dot(Do),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,f=(c*l-o*d)*u,p=(a*d-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Fo.setScalar(0),Oo.setScalar(0),zo.setScalar(0),Fo.fromBufferAttribute(t,e),Oo.fromBufferAttribute(t,n),zo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Fo,r.x),a.addScaledVector(Oo,r.y),a.addScaledVector(zo,r.z),a}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),$n.subVectors(t,e),wn.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),wn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ts.subVectors(s,n),es.subVectors(r,n),Io.subVectors(t,n);const l=ts.dot(Io),c=es.dot(Io);if(l<=0&&c<=0)return e.copy(n);No.subVectors(t,s);const d=ts.dot(No),h=es.dot(No);if(d>=0&&h<=d)return e.copy(s);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0&&l-d>0)return a=l/(l-d),e.copy(n).addScaledVector(ts,a);Uo.subVectors(t,r);const f=ts.dot(Uo),p=es.dot(Uo);if(p>=0&&f<=p)return e.copy(r);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(es,o);const m=d*p-f*h;if(m<=0&&h-d>=0&&f-p>=0)return Oc.subVectors(r,s),o=(h-d)/(h-d+(f-p)),e.copy(s).addScaledVector(Oc,o);const g=1/(m+x+u);return a=x*g,o=u*g,e.copy(n).addScaledVector(ts,a).addScaledVector(es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class vi{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Lr.subVectors(this.max,Gs),ns.subVectors(t.a,Gs),is.subVectors(t.b,Gs),ss.subVectors(t.c,Gs),Si.subVectors(is,ns),yi.subVectors(ss,is),Li.subVectors(ns,ss);let e=[0,-Si.z,Si.y,0,-yi.z,yi.y,0,-Li.z,Li.y,Si.z,0,-Si.x,yi.z,0,-yi.x,Li.z,0,-Li.x,-Si.y,Si.x,0,-yi.y,yi.x,0,-Li.y,Li.x,0];return!Bo(e,ns,is,ss,Lr)||(e=[1,0,0,0,1,0,0,0,1],!Bo(e,ns,is,ss,Lr))?!1:(Pr.crossVectors(Si,yi),e=[Pr.x,Pr.y,Pr.z],Bo(e,ns,is,ss,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Qn=[new H,new H,new H,new H,new H,new H,new H,new H],An=new H,Cr=new vi,ns=new H,is=new H,ss=new H,Si=new H,yi=new H,Li=new H,Gs=new H,Lr=new H,Pr=new H,Pi=new H;function Bo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Pi.fromArray(i,r);const o=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=t.dot(Pi),c=e.dot(Pi),d=n.dot(Pi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const ti=bf();function bf(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;!(c&8388608);)c<<=1,d-=8388608;c&=-8388609,d+=947912704,r[l]=c|d}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Ef(i){Math.abs(i)>65504&&kt("DataUtils.toHalfFloat(): Value out of range."),i=Kt(i,-65504,65504),ti.floatView[0]=i;const t=ti.uint32View[0],e=t>>23&511;return ti.baseTable[e]+((t&8388607)>>ti.shiftTable[e])}function wf(i){const t=i>>10;return ti.uint32View[0]=ti.mantissaTable[ti.offsetTable[t]+(i&1023)]+ti.exponentTable[t],ti.floatView[0]}class zc{static toHalfFloat(t){return Ef(t)}static fromHalfFloat(t){return wf(t)}}const Le=new H,Dr=new Nt;let Tf=0;class Te extends xi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vd,this.updateRanges=[],this.gpuType=vn,this.version=0,this._normalizationScale=t!==void 0?bo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(t),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):yc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):bc(t,this.array)}}class Bc extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gc extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Af=new vi,ks=new H,Go=new H;class Di{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Af.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ks.subVectors(t,this.center);const e=ks.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Go.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ks.copy(t.center).add(Go)),this.expandByPoint(ks.copy(t.center).sub(Go))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Rf=0;const un=new te,ko=new ze,rs=new H,on=new vi,Hs=new vi,Be=new H;class Re extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wd(t)?Gc:Bc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return ko.lookAt(t),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(on.min,Hs.min),on.expandByPoint(Be),Be.addVectors(on.max,Hs.max),on.expandByPoint(Be)):(on.expandByPoint(Hs.min),on.expandByPoint(Hs.max))}on.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Be.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(t,c),Be.add(rs)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Te(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let w=0;w<n.count;w++)o[w]=new H,l[w]=new H;const d=new H,h=new H,u=new H,f=new Nt,p=new Nt,x=new Nt,m=new H,g=new H;function M(w,T,C){c[w]=c[T]=c[C]=1,d.fromBufferAttribute(n,w),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,C),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,T),x.fromBufferAttribute(r,C),h.sub(d),u.sub(d),p.sub(f),x.sub(f);const P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(m.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(P),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(P),o[w].add(m),o[T].add(m),o[C].add(m),l[w].add(g),l[T].add(g),l[C].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let w=0,T=v.length;w<T;++w){const C=v[w],P=C.start,U=C.count;for(let L=P,O=P+U;L<O;L+=3)M(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const _=new H,b=new H,E=new H,S=new H;function y(w){E.fromBufferAttribute(s,w),S.copy(E);const T=o[w];_.copy(T),_.sub(E.multiplyScalar(E.dot(T))).normalize(),b.crossVectors(S,T);const P=b.dot(l[w])<0?-1:1;a.setXYZW(w,_.x,_.y,_.z,P)}for(let w=0,T=n.count;w<T;++w)c[w]&&y(w);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,d=new H,h=new H;if(t)for(let u=0,f=t.count;u<f;u+=3){const p=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let f=0,p=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*d;for(let g=0;g<d;g++)u[p++]=c[f++]}return new Te(u,d,h)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const f=c[h];d.push(f.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ho=new H,Cf=new H,Lf=new Ht;class Fn{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ho.subVectors(n,e).cross(Cf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Ho),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Lf.getNormalMatrix(t),s=this.coplanarPoint(Ho).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Pf=0;class ei extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Cs,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jl,this.blendDst=Ql,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=So,this.stencilZFail=So,this.stencilZPass=So,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Fn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ni=new H,Vo=new H,Ir=new H,Nr=new H;class Ur{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Vo.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),Nr.copy(this.origin).sub(Vo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ir),o=Nr.dot(this.direction),l=-Nr.dot(Ir),c=Nr.lengthSq(),d=Math.abs(1-a*a);let h,u,f,p;if(d>0)if(h=a*l-o,u=a*o-l,p=r*d,h>=0)if(u>=-p)if(u<=p){const x=1/d;h*=x,u*=x,f=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u<=-p?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c):u<=p?(h=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Vo).addScaledVector(Ir,u),f}intersectSphere(t,e){if(t.radius<0)return null;ni.subVectors(t.center,this.origin);const n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),d>=0?(r=(t.min.y-u.y)*d,a=(t.max.y-u.y)*d):(r=(t.max.y-u.y)*d,a=(t.min.y-u.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,h=t.x-a.x,u=t.y-a.y,f=t.z-a.z,p=e.x-a.x,x=e.y-a.y,m=e.z-a.z,g=n.x-a.x,M=n.y-a.y,v=n.z-a.z,_=Math.abs(l),b=Math.abs(c),E=Math.abs(d);let S,y,w,T,C,P,U,L,O,I,z,Q;if(_>=b&&_>=E?(w=l,P=h,O=p,Q=g,l>=0?(S=c,y=d,T=u,C=f,U=x,L=m,I=M,z=v):(S=d,y=c,T=f,C=u,U=m,L=x,I=v,z=M)):b>=E?(w=c,P=u,O=x,Q=M,c>=0?(S=d,y=l,T=f,C=h,U=m,L=p,I=v,z=g):(S=l,y=d,T=h,C=f,U=p,L=m,I=g,z=v)):(w=d,P=f,O=m,Q=v,d>=0?(S=l,y=c,T=h,C=u,U=p,L=x,I=g,z=M):(S=c,y=l,T=u,C=h,U=x,L=p,I=M,z=g)),w===0)return null;const N=S/w,V=y/w,K=1/w,Y=T-N*P,Z=C-V*P,F=U-N*O,q=L-V*O,st=I-N*Q,ct=z-V*Q,et=st*q-ct*F,it=Y*ct-Z*st,At=F*Z-q*Y;if(s){if(et<0||it<0||At<0)return null}else if((et<0||it<0||At<0)&&(et>0||it>0||At>0))return null;const Rt=et+it+At;if(Rt===0)return null;const Gt=K*(et*P+it*O+At*Q);return(Rt>0?Gt<0:Gt>0)?null:this.at(Gt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=fr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const kc=new te,Ii=new Ur,Fr=new Di,Hc=new H,Or=new H,zr=new H,Br=new H,Wo=new H,Gr=new H,Vc=new H,kr=new H;class qt extends ze{constructor(t=new Re,e=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(Wo.fromBufferAttribute(h,t),a?Gr.addScaledVector(Wo,d):Gr.addScaledVector(Wo.sub(e),d))}e.add(Gr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(Fr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Fr,Hc)===null||Ii.origin.distanceToSquared(Hc)>(t.far-t.near)**2))&&(kc.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(kc),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){const m=u[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,b=v;_<b;_+=3){const E=o.getX(_),S=o.getX(_+1),y=o.getX(_+2);s=Hr(this,g,t,n,c,d,h,E,S,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const M=o.getX(m),v=o.getX(m+1),_=o.getX(m+2);s=Hr(this,a,t,n,c,d,h,M,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){const m=u[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,b=v;_<b;_+=3){const E=_,S=_+1,y=_+2;s=Hr(this,g,t,n,c,d,h,E,S,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const M=m,v=m+1,_=m+2;s=Hr(this,a,t,n,c,d,h,M,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Df(i,t,e,n,s,r,a,o){let l;if(t.side===Qe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===di,o),l===null)return null;kr.copy(o),kr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(kr);return c<e.near||c>e.far?null:{distance:c,point:kr.clone(),object:i}}function Hr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Or),i.getVertexPosition(l,zr),i.getVertexPosition(c,Br);const d=Df(i,t,e,n,Or,zr,Br,Vc);if(d){const h=new H;Tn.getBarycoord(Vc,Or,zr,Br,h),s&&(d.uv=Tn.getInterpolatedAttribute(s,o,l,c,h,new Nt)),r&&(d.uv1=Tn.getInterpolatedAttribute(r,o,l,c,h,new Nt)),a&&(d.normal=Tn.getInterpolatedAttribute(a,o,l,c,h,new H),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new H,materialIndex:0};Tn.getNormal(Or,zr,Br,u.normal),d.face=u,d.barycoord=h}return d}class Vs extends Ae{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ie,d=Ie,h,u){super(null,a,o,l,c,d,s,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wc extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const as=new te,Xc=new te,Vr=[],Yc=new vi,If=new te,Ws=new qt,Xs=new Di;class Ve extends qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,If)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),Yc.copy(t.boundingBox).applyMatrix4(as),this.boundingBox.union(Yc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),Xs.copy(t.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(n),t.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),Xc.multiplyMatrices(n,as),Ws.matrixWorld=Xc,Ws.raycast(t,Vr);for(let a=0,o=Vr.length;a<o;a++){const l=Vr[a];l.instanceId=r,l.object=this,e.push(l)}Vr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Wc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vs(new Float32Array(s*this.count),s,this.count,mr,vn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ni=new Di,Nf=new Nt(.5,.5),Wr=new H;class Ys{constructor(t=new Fn,e=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],h=r[5],u=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],M=r[12],v=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-a,f-d,g-p,b-M).normalize(),s[1].setComponents(c+a,f+d,g+p,b+M).normalize(),s[2].setComponents(c+o,f+h,g+x,b+v).normalize(),s[3].setComponents(c-o,f-h,g-x,b-v).normalize(),n)s[4].setComponents(l,u,m,_).normalize(),s[5].setComponents(c-l,f-u,g-m,b-_).normalize();else if(s[4].setComponents(c-l,f-u,g-m,b-_).normalize(),e===yn)s[5].setComponents(c+l,f+u,g+m,b+_).normalize();else if(e===Ns)s[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){Ni.center.set(0,0,0);const e=Nf.distanceTo(t.center);return Ni.radius=.7071067811865476+e,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Wr.x=s.normal.x>0?t.max.x:t.min.x,Wr.y=s.normal.y>0?t.max.y:t.min.y,Wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Zc=new te;class Xo{constructor(){this.coordinateSystem=yn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];Zc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ys),n[s].setFromProjectionMatrix(Zc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ys),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Xo().copy(this)}}class Kc extends ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Xr=new H,Yr=new H,qc=new te,Zs=new Ur,Zr=new Di,Yo=new H,Jc=new H;class Uf extends ze{constructor(t=new Re,e=new Kc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Xr.fromBufferAttribute(e,s-1),Yr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Xr.distanceTo(Yr);t.setAttribute("lineDistance",new ye(n,1))}else kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,t.ray.intersectsSphere(Zr)===!1)return;qc.copy(s).invert(),Zs.copy(t.ray).applyMatrix4(qc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){const g=d.getX(x),M=d.getX(x+1),v=Kr(this,t,Zs,l,g,M,x);v&&e.push(v)}if(this.isLineLoop){const x=d.getX(p-1),m=d.getX(f),g=Kr(this,t,Zs,l,x,m,p-1);g&&e.push(g)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){const g=Kr(this,t,Zs,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){const x=Kr(this,t,Zs,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Kr(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(Xr.fromBufferAttribute(o,s),Yr.fromBufferAttribute(o,r),e.distanceSqToSegment(Xr,Yr,Yo,Jc)>n)return;Yo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Yo);if(!(c<t.near||c>t.far))return{distance:c,point:Jc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const $c=new H,jc=new H;class Qc extends Uf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)$c.fromBufferAttribute(e,s),jc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$c.distanceTo(jc);t.setAttribute("lineDistance",new ye(n,1))}else kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class th extends Ae{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Ie,this.minFilter=Ie,this.generateMipmaps=!1,this.needsUpdate=!0}copy(t){return super.copy(t),this.source=new wr(Object.assign({},t.image)),this}}class eh extends Ae{constructor(t=[],e=Xi,n,s,r,a,o,l,c,d){super(t,e,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zo extends Ae{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class os extends Ae{constructor(t,e,n=In,s,r,a,o=Ie,l=Ie,c,d=fi,h=1){if(d!==fi&&d!==pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:h};super(u,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class nh extends os{constructor(t,e=In,n=Xi,s,r,a=Ie,o=Ie,l,c=fi){const d={width:t,height:t,depth:1},h=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ih extends Ae{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ui extends Re{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(h,2));function p(x,m,g,M,v,_,b,E,S,y,w){const T=_/S,C=b/y,P=_/2,U=b/2,L=E/2,O=S+1,I=y+1;let z=0,Q=0;const N=new H;for(let V=0;V<I;V++){const K=V*C-U;for(let Y=0;Y<O;Y++){const Z=Y*T-P;N[x]=Z*M,N[m]=K*v,N[g]=L,c.push(N.x,N.y,N.z),N[x]=0,N[m]=0,N[g]=E>0?1:-1,d.push(N.x,N.y,N.z),h.push(Y/S),h.push(1-V/y),z+=1}}for(let V=0;V<y;V++)for(let K=0;K<S;K++){const Y=u+K+O*V,Z=u+K+O*(V+1),F=u+(K+1)+O*(V+1),q=u+(K+1)+O*V;l.push(Y,Z,q),l.push(Z,F,q),Q+=6}o.addGroup(f,Q,w),f+=Q,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ko extends Re{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],h=[],u=[],f=[];let p=0;const x=[],m=n/2;let g=0;M(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new ye(h,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(f,2));function M(){const _=new H,b=new H;let E=0;const S=(e-t)/n;for(let y=0;y<=r;y++){const w=[],T=y/r,C=T*(e-t)+t;for(let P=0;P<=s;P++){const U=P/s,L=U*l+o,O=Math.sin(L),I=Math.cos(L);b.x=C*O,b.y=-T*n+m,b.z=C*I,h.push(b.x,b.y,b.z),_.set(O,S,I).normalize(),u.push(_.x,_.y,_.z),f.push(U,1-T),w.push(p++)}x.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){const T=x[w][y],C=x[w+1][y],P=x[w+1][y+1],U=x[w][y+1];(t>0||w!==0)&&(d.push(T,C,U),E+=3),(e>0||w!==r-1)&&(d.push(C,P,U),E+=3)}c.addGroup(g,E,0),g+=E}function v(_){const b=p,E=new Nt,S=new H;let y=0;const w=_===!0?t:e,T=_===!0?1:-1;for(let P=1;P<=s;P++)h.push(0,m*T,0),u.push(0,T,0),f.push(.5,.5),p++;const C=p;for(let P=0;P<=s;P++){const L=P/s*l+o,O=Math.cos(L),I=Math.sin(L);S.x=w*I,S.y=m*T,S.z=w*O,h.push(S.x,S.y,S.z),u.push(0,T,0),E.x=O*.5+.5,E.y=I*.5*T+.5,f.push(E.x,E.y),p++}for(let P=0;P<s;P++){const U=b+P,L=C+P;_===!0?d.push(L,L+1,U):d.push(L+1,L,U),y+=3}c.addGroup(g,y,_===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qo extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),d(),this.setAttribute("position",new ye(r,3)),this.setAttribute("normal",new ye(r.slice(),3)),this.setAttribute("uv",new ye(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const v=new H,_=new H,b=new H;for(let E=0;E<e.length;E+=3)f(e[E+0],v),f(e[E+1],_),f(e[E+2],b),l(v,_,b,M)}function l(M,v,_,b){const E=b+1,S=[];for(let y=0;y<=E;y++){S[y]=[];const w=M.clone().lerp(_,y/E),T=v.clone().lerp(_,y/E),C=E-y;for(let P=0;P<=C;P++)P===0&&y===E?S[y][P]=w:S[y][P]=w.clone().lerp(T,P/C)}for(let y=0;y<E;y++)for(let w=0;w<2*(E-y)-1;w++){const T=Math.floor(w/2);w%2===0?(u(S[y][T+1]),u(S[y+1][T]),u(S[y][T])):(u(S[y][T+1]),u(S[y+1][T+1]),u(S[y+1][T]))}}function c(M){const v=new H;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(M),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function d(){const M=new H;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const _=m(M)/2/Math.PI+.5,b=g(M)/Math.PI+.5;a.push(_,1-b)}p(),h()}function h(){for(let M=0;M<a.length;M+=6){const v=a[M+0],_=a[M+2],b=a[M+4],E=Math.max(v,_,b),S=Math.min(v,_,b);E>.9&&S<.1&&(v<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,v){const _=M*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function p(){const M=new H,v=new H,_=new H,b=new H,E=new Nt,S=new Nt,y=new Nt;for(let w=0,T=0;w<r.length;w+=9,T+=6){M.set(r[w+0],r[w+1],r[w+2]),v.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),E.set(a[T+0],a[T+1]),S.set(a[T+2],a[T+3]),y.set(a[T+4],a[T+5]),b.copy(M).add(v).add(_).divideScalar(3);const C=m(b);x(E,T+0,M,C),x(S,T+2,v,C),x(y,T+4,_,C)}}function x(M,v,_,b){b<0&&M.x===1&&(a[v]=M.x-1),_.x===0&&_.z===0&&(a[v]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.vertices,t.indices,t.radius,t.detail)}}function Ff(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=sh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=kf(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let d=o,h=l;for(let u=e;u<s;u+=e){const f=i[u],p=i[u+1];f<o&&(o=f),p<l&&(l=p),f>d&&(d=f),p>h&&(h=p)}c=Math.max(d-o,h-l),c=c!==0?32767/c:0}return Ks(r,a,e,o,l,c,0),a}function sh(i,t,e,n,s){let r;if(s===jf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=lh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=lh(a/n|0,i[a],i[a+1],r);return r&&ls(r,r.next)&&($s(r),r=r.next),r}function Fi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ls(e,e.next)||be(e.prev,e,e.next)===0)){if($s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ks(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Yf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?zf(i,n,s,r):Of(i)){t.push(l.i,i.i,c.i),$s(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Bf(Fi(i),t),Ks(i,t,e,n,s,r,2)):a===2&&Gf(i,t,e,n,s,r):Ks(Fi(i),t,e,n,s,r,1);break}}}function Of(i){const t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,d=Math.min(s,r,a),h=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c);let p=n.next;for(;p!==t;){if(p.x>=d&&p.x<=u&&p.y>=h&&p.y<=f&&qs(s,o,r,l,a,c,p.x,p.y)&&be(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function zf(i,t,e,n){const s=i.prev,r=i,a=i.next;if(be(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,d=s.y,h=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(d,h,u),x=Math.max(o,l,c),m=Math.max(d,h,u),g=Jo(f,p,t,e,n),M=Jo(x,m,t,e,n);let v=i.prevZ,_=i.nextZ;for(;v&&v.z>=g&&_&&_.z<=M;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&qs(o,d,l,h,c,u,v.x,v.y)&&be(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==a&&qs(o,d,l,h,c,u,_.x,_.y)&&be(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&qs(o,d,l,h,c,u,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==a&&qs(o,d,l,h,c,u,_.x,_.y)&&be(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Bf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ls(n,s)&&ah(n,e,e.next,s)&&Js(n,s)&&Js(s,n)&&(t.push(n.i,e.i,s.i),$s(e),$s(e.next),e=i=s),e=e.next}while(e!==i);return Fi(e)}function Gf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qf(a,o)){let l=oh(a,o);a=Fi(a,a.next),l=Fi(l,l.next),Ks(a,t,e,n,s,r,0),Ks(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function kf(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=sh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Kf(c))}s.sort(Hf);for(let r=0;r<s.length;r++)e=Vf(s[r],e);return e}function Hf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Vf(i,t){const e=Wf(i,t);if(!e)return t;const n=oh(e,i);return Fi(n,n.next),Fi(e,e.next)}function Wf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(ls(i,e))return e;do{if(ls(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,a=e.x<e.next.x?e:e.next,h===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let d=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&rh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const h=Math.abs(s-e.y)/(n-e.x);Js(e,i)&&(h<d||h===d&&(e.x>a.x||e.x===a.x&&Xf(a,e)))&&(a=e,d=h)}e=e.next}while(e!==o);return a}function Xf(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function Yf(i,t,e,n){let s=i;do s.z===0&&(s.z=Jo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zf(s)}function Zf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Jo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Kf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function rh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function qs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&rh(i,t,e,n,s,r,a,o)}function qf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Jf(i,t)&&(Js(i,t)&&Js(t,i)&&$f(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||ls(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ls(i,t){return i.x===t.x&&i.y===t.y}function ah(i,t,e,n){const s=Jr(be(i,t,e)),r=Jr(be(i,t,n)),a=Jr(be(e,n,i)),o=Jr(be(e,n,t));return!!(s!==r&&a!==o||s===0&&qr(i,e,t)||r===0&&qr(i,n,t)||a===0&&qr(e,i,n)||o===0&&qr(e,t,n))}function qr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Jr(i){return i>0?1:i<0?-1:0}function Jf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ah(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Js(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function $f(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function oh(i,t){const e=$o(i.i,i.x,i.y),n=$o(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function lh(i,t,e,n){const s=$o(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $o(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Qf{static triangulate(t,e,n=2){return Ff(t,e,n)}}class jo{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return jo.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ch(t),hh(n,t);let a=t.length;e.forEach(ch);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,hh(n,e[l]);const o=Qf.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function ch(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function hh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Qo extends qo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qo(t.radius,t.detail)}}class On extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,h=t/o,u=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<d;g++){const M=g*u-a;for(let v=0;v<c;v++){const _=v*h-r;p.push(_,-M,0),x.push(0,0,1),m.push(v/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){const v=M+c*g,_=M+c*(g+1),b=M+1+c*(g+1),E=M+1+c*g;f.push(v,_,E),f.push(_,b,E)}this.setIndex(f),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.width,t.height,t.widthSegments,t.heightSegments)}}class tl extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new H,u=new H,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const M=[],v=g/n,_=a+v*o,b=t*Math.cos(_),E=Math.sqrt(t*t-b*b);let S=0;g===0&&a===0?S=.5/e:g===n&&l===Math.PI&&(S=-.5/e);for(let y=0;y<=e;y++){const w=y/e,T=s+w*r;h.x=-E*Math.cos(T),h.y=b,h.z=E*Math.sin(T),p.push(h.x,h.y,h.z),u.copy(h).normalize(),x.push(u.x,u.y,u.z),m.push(w+S,1-v),M.push(c++)}d.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){const v=d[g][M+1],_=d[g][M],b=d[g+1][M],E=d[g+1][M+1];(g!==0||a>0)&&f.push(v,_,E),(g!==n-1||l<Math.PI)&&f.push(_,b,E)}this.setIndex(f),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(x,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function cs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(uh(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(uh(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function tn(i){const t={};for(let e=0;e<i.length;e++){const n=cs(i[e]);for(const s in n)t[s]=n[s]}return t}function uh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const ep={clone:cs,merge:tn};var np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=np,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=tp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ct().setHex(s.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new te().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class sp extends nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rn extends ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rp extends ei{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ct(16777215),this.specular=new Ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=fr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ap extends ei{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class $r extends ei{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=fr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class op extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lp extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const el={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(fh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!fh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function fh(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class cp{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const hp=new cp;class nl{constructor(t){this.manager=t!==void 0?t:hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}nl.DEFAULT_MATERIAL_NAME="__DEFAULT";const hs=new WeakMap;class up extends nl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=el.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let h=hs.get(a);h===void 0&&(h=[],hs.set(a,h)),h.push({onLoad:e,onError:s})}return a}const o=Us("img");function l(){d(),e&&e(this);const h=hs.get(this)||[];for(let u=0;u<h.length;u++){const f=h[u];f.onLoad&&f.onLoad(this)}hs.delete(this),r.manager.itemEnd(t)}function c(h){d(),s&&s(h),el.remove(`image:${t}`);const u=hs.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onError&&p.onError(h)}hs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),el.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class dp extends nl{constructor(t){super(t)}load(t,e,n,s){const r=new Ae,a=new up(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class ph extends ze{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class fp extends ph{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const il=new te,mh=new H,gh=new H;class pp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(mh),gh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(il,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ns||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(il)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const jr=new H,Qr=new bn,zn=new H;class sl extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(jr,Qr,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jr,Qr,zn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(jr,Qr,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jr,Qr,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const bi=new H,xh=new Nt,_h=new Nt;class Cn extends sl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,xh,_h),e.subVectors(_h,xh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Mh extends sl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class mp extends pp{constructor(){super(new Mh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gp extends ph{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new mp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const us=-90,ds=1;class rl extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Cn(us,ds,t,e);s.layers=this.layers,this.add(s);const r=new Cn(us,ds,t,e);r.layers=this.layers,this.add(r);const a=new Cn(us,ds,t,e);a.layers=this.layers,this.add(a);const o=new Cn(us,ds,t,e);o.layers=this.layers,this.add(o);const l=new Cn(us,ds,t,e);l.layers=this.layers,this.add(l);const c=new Cn(us,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(h,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class xp extends Cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const vh=new te;class _p{constructor(t,e,n=0,s=1/0){this.ray=new Ur(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ro,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):oe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vh),this}intersectObject(t,e=!0,n=[]){return al(t,this,n,e),n.sort(Sh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)al(t[s],this,n,e);return n.sort(Sh),n}}function Sh(i,t){return i.distance-t.distance}function al(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)al(r[a],t,e,!0)}}class ta{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Yl=class Yl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Yl.prototype.isMatrix2=!0;let yh=Yl;class Mp extends xi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function bh(i,t,e,n){const s=vp(n);switch(e){case uc:return i*t;case mr:return i*t/s.components*s.byteLength;case ka:return i*t/s.components*s.byteLength;case mi:return i*t*2/s.components*s.byteLength;case Ha:return i*t*2/s.components*s.byteLength;case dc:return i*t*3/s.components*s.byteLength;case Nn:return i*t*4/s.components*s.byteLength;case Va:return i*t*4/s.components*s.byteLength;case gr:case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _r:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:case Za:return Math.max(i,16)*Math.max(t,8)/4;case Wa:case Ya:return Math.max(i,8)*Math.max(t,8)/2;case Ka:case qa:case $a:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ja:case vr:case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case mo:case go:case xo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _o:case Mo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Sr:case vo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vp(i){switch(i){case rn:case oc:return{byteLength:1,components:1};case Is:case lc:case Sn:return{byteLength:2,components:1};case Ba:case Ga:return{byteLength:2,components:4};case In:case za:case vn:return{byteLength:4,components:1};case cc:case hc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hi}})),typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hi);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Eh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Sp(i){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,d);else{h.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<h.length;f++){const p=h[u],x=h[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,h[u]=x)}h.length=u+1;for(let f=0,p=h.length;f<p;f++){const x=h[f];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
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
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
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
#endif`,Cp=`#ifdef USE_AOMAP
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
#endif`,Pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Up=`#ifdef USE_IRIDESCENCE
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
#endif`,Fp=`#ifdef USE_BUMPMAP
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Xp=`#define PI 3.141592653589793
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
} // validated`,Yp=`vec3 transformedNormal = objectNormal;
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
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$p="gl_FragColor = linearToOutputTexel( gl_FragColor );",jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qp=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l0=`#ifdef USE_GRADIENTMAP
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
}`,c0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_0=`PhysicalMaterial material;
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
}`,v0=`
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
#endif`,S0=`#if defined( RE_IndirectDiffuse )
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
#endif`,y0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,E0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C0=`#ifdef USE_MAP
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
#endif`,P0=`#if defined( USE_POINTS_UV )
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
#endif`,D0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U0=`#if defined( USE_MORPHCOLORS )
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
#endif`,F0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`#ifdef USE_MORPHTARGETS
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
#endif`,z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,G0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,W0=`#ifdef USE_NORMALMAP
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
#endif`,X0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y0=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,q0=`#ifdef OPAQUE
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
}`,$0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,am=`float getShadowMask() {
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
}`,om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mm=`#ifdef USE_TRANSMISSION
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
#endif`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xt={alphahash_fragment:yp,alphahash_pars_fragment:bp,alphamap_fragment:Ep,alphamap_pars_fragment:wp,alphatest_fragment:Tp,alphatest_pars_fragment:Ap,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Lp,batching_vertex:Pp,begin_vertex:Dp,beginnormal_vertex:Ip,bsdfs:Np,iridescence_fragment:Up,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:zp,clipping_planes_pars_vertex:Bp,clipping_planes_vertex:Gp,color_fragment:kp,color_pars_fragment:Hp,color_pars_vertex:Vp,color_vertex:Wp,common:Xp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:Zp,displacementmap_vertex:Kp,emissivemap_fragment:qp,emissivemap_pars_fragment:Jp,colorspace_fragment:$p,colorspace_pars_fragment:jp,envmap_fragment:Qp,envmap_common_pars_fragment:t0,envmap_pars_fragment:e0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:f0,envmap_vertex:i0,fog_vertex:s0,fog_pars_vertex:r0,fog_fragment:a0,fog_pars_fragment:o0,gradientmap_pars_fragment:l0,lightmap_pars_fragment:c0,lights_lambert_fragment:h0,lights_lambert_pars_fragment:u0,lights_pars_begin:d0,lights_toon_fragment:p0,lights_toon_pars_fragment:m0,lights_phong_fragment:g0,lights_phong_pars_fragment:x0,lights_physical_fragment:_0,lights_physical_pars_fragment:M0,lights_fragment_begin:v0,lights_fragment_maps:S0,lights_fragment_end:y0,lightprobes_pars_fragment:b0,logdepthbuf_fragment:E0,logdepthbuf_pars_fragment:w0,logdepthbuf_pars_vertex:T0,logdepthbuf_vertex:A0,map_fragment:R0,map_pars_fragment:C0,map_particle_fragment:L0,map_particle_pars_fragment:P0,metalnessmap_fragment:D0,metalnessmap_pars_fragment:I0,morphinstance_vertex:N0,morphcolor_vertex:U0,morphnormal_vertex:F0,morphtarget_pars_vertex:O0,morphtarget_vertex:z0,normal_fragment_begin:B0,normal_fragment_maps:G0,normal_pars_fragment:k0,normal_pars_vertex:H0,normal_vertex:V0,normalmap_pars_fragment:W0,clearcoat_normal_fragment_begin:X0,clearcoat_normal_fragment_maps:Y0,clearcoat_pars_fragment:Z0,iridescence_pars_fragment:K0,opaque_fragment:q0,packing:J0,premultiplied_alpha_fragment:$0,project_vertex:j0,dithering_fragment:Q0,dithering_pars_fragment:tm,roughnessmap_fragment:em,roughnessmap_pars_fragment:nm,shadowmap_pars_fragment:im,shadowmap_pars_vertex:sm,shadowmap_vertex:rm,shadowmask_pars_fragment:am,skinbase_vertex:om,skinning_pars_vertex:lm,skinning_vertex:cm,skinnormal_vertex:hm,specularmap_fragment:um,specularmap_pars_fragment:dm,tonemapping_fragment:fm,tonemapping_pars_fragment:pm,transmission_fragment:mm,transmission_pars_fragment:gm,uv_pars_fragment:xm,uv_pars_vertex:_m,uv_vertex:Mm,worldpos_vertex:vm,background_vert:`varying vec2 vUv;
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
}`},Et={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Bn={basic:{uniforms:tn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:tn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:tn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:tn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:tn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:tn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:tn([Et.points,Et.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:tn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:tn([Et.common,Et.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:tn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:tn([Et.sprite,Et.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:tn([Et.common,Et.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:tn([Et.lights,Et.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Bn.physical={uniforms:tn([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const ea={r:0,b:0,g:0},Sm=new te,wh=new Ht;wh.set(-1,0,0,0,1,0,0,0,1);function ym(i,t,e,n,s,r){const a=new Ct(0);let o=s===!0?0:1,l,c,d=null,h=0,u=null;function f(M){let v=M.isScene===!0?M.background:null;if(v&&v.isTexture){const _=M.backgroundBlurriness>0;v=t.get(v,_)}return v}function p(M){let v=!1;const _=f(M);_===null?m(a,o):_&&_.isColor&&(m(_,1),v=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,v){const _=f(v);_&&_.isCubeTexture?(c===void 0&&(c=new qt(new Ui(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:cs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sm.makeRotationFromEuler(v.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wh),c.material.toneMapped=se.getTransfer(_.colorSpace)!==fe,(d!==_||h!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,h=_.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new qt(new On(2,2),new nn({name:"BackgroundMaterial",uniforms:cs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=se.getTransfer(_.colorSpace)!==fe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=_,h=_.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,v){M.getRGB(ea,dh(i)),e.buffers.color.setClear(ea.r,ea.g,ea.b,v,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),o=v,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:p,addToRenderList:x,dispose:g}}function bm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(C,P,U,L,O){let I=!1;const z=h(C,L,U,P);r!==z&&(r=z,c(r.object)),I=f(C,L,U,O),I&&p(C,L,U,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(I||a)&&(a=!1,_(C,P,U,L),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function d(C){return i.deleteVertexArray(C)}function h(C,P,U,L){const O=L.wireframe===!0;let I=n[P.id];I===void 0&&(I={},n[P.id]=I);const z=C.isInstancedMesh===!0?C.id:0;let Q=I[z];Q===void 0&&(Q={},I[z]=Q);let N=Q[U.id];N===void 0&&(N={},Q[U.id]=N);let V=N[O];return V===void 0&&(V=u(l()),N[O]=V),V}function u(C){const P=[],U=[],L=[];for(let O=0;O<e;O++)P[O]=0,U[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:L,object:C,attributes:{},index:null}}function f(C,P,U,L){const O=r.attributes,I=P.attributes;let z=0;const Q=U.getAttributes();for(const N in Q)if(Q[N].location>=0){const K=O[N];let Y=I[N];if(Y===void 0&&(N==="instanceMatrix"&&C.instanceMatrix&&(Y=C.instanceMatrix),N==="instanceColor"&&C.instanceColor&&(Y=C.instanceColor)),K===void 0||K.attribute!==Y||Y&&K.data!==Y.data)return!0;z++}return r.attributesNum!==z||r.index!==L}function p(C,P,U,L){const O={},I=P.attributes;let z=0;const Q=U.getAttributes();for(const N in Q)if(Q[N].location>=0){let K=I[N];K===void 0&&(N==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),N==="instanceColor"&&C.instanceColor&&(K=C.instanceColor));const Y={};Y.attribute=K,K&&K.data&&(Y.data=K.data),O[N]=Y,z++}r.attributes=O,r.attributesNum=z,r.index=L}function x(){const C=r.newAttributes;for(let P=0,U=C.length;P<U;P++)C[P]=0}function m(C){g(C,0)}function g(C,P){const U=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;U[C]=1,L[C]===0&&(i.enableVertexAttribArray(C),L[C]=1),O[C]!==P&&(i.vertexAttribDivisor(C,P),O[C]=P)}function M(){const C=r.newAttributes,P=r.enabledAttributes;for(let U=0,L=P.length;U<L;U++)P[U]!==C[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function v(C,P,U,L,O,I,z){z===!0?i.vertexAttribIPointer(C,P,U,O,I):i.vertexAttribPointer(C,P,U,L,O,I)}function _(C,P,U,L){x();const O=L.attributes,I=U.getAttributes(),z=P.defaultAttributeValues;for(const Q in I){const N=I[Q];if(N.location>=0){let V=O[Q];if(V===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(V=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(V=C.instanceColor)),V!==void 0){const K=V.normalized,Y=V.itemSize,Z=t.get(V);if(Z===void 0)continue;const F=Z.buffer,q=Z.type,st=Z.bytesPerElement,ct=q===i.INT||q===i.UNSIGNED_INT||V.gpuType===za;if(V.isInterleavedBufferAttribute){const et=V.data,it=et.isInterleavedBuffer===!0?et.stride:et.itemSize,At=V.offset;if(et.isInstancedInterleavedBuffer||et.isInstancedBufferAttribute){for(let Rt=0;Rt<N.locationSize;Rt++)g(N.location+Rt,et.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Rt=0;Rt<N.locationSize;Rt++)m(N.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,F);for(let Rt=0;Rt<N.locationSize;Rt++)v(N.location+Rt,Y/N.locationSize,q,K,it*st,(At+Y/N.locationSize*Rt)*st,ct)}else{if(V.isInstancedBufferAttribute){for(let et=0;et<N.locationSize;et++)g(N.location+et,V.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let et=0;et<N.locationSize;et++)m(N.location+et);i.bindBuffer(i.ARRAY_BUFFER,F);for(let et=0;et<N.locationSize;et++)v(N.location+et,Y/N.locationSize,q,K,Y*st,Y/N.locationSize*et*st,ct)}}else if(z!==void 0){const K=z[Q];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(N.location,K);break;case 3:i.vertexAttrib3fv(N.location,K);break;case 4:i.vertexAttrib4fv(N.location,K);break;default:i.vertexAttrib1fv(N.location,K)}}}}M()}function b(){w();for(const C in n){const P=n[C];for(const U in P){const L=P[U];for(const O in L){const I=L[O];for(const z in I)d(I[z].object),delete I[z];delete L[O]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;const P=n[C.id];for(const U in P){const L=P[U];for(const O in L){const I=L[O];for(const z in I)d(I[z].object),delete I[z];delete L[O]}}delete n[C.id]}function S(C){for(const P in n){const U=n[P];for(const L in U){const O=U[L];if(O[C.id]===void 0)continue;const I=O[C.id];for(const z in I)d(I[z].object),delete I[z];delete O[C.id]}}}function y(C){for(const P in n){const U=n[P],L=C.isInstancedMesh===!0?C.id:0,O=U[L];if(O!==void 0){for(const I in O){const z=O[I];for(const Q in z)d(z[Q].object),delete z[Q];delete O[I]}delete U[L],Object.keys(U).length===0&&delete n[P]}}}function w(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Em(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),e.update(c,n,d))}function o(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let u=0;for(let f=0;f<d;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function wm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(S){return!(S!==Nn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const y=S===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==rn&&S!==vn&&!y&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(kt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&h===!1;e.reversedDepthBuffer===!0&&h===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&h===!0&&kt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:_,maxSamples:b,samples:E}}function Tm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Fn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||s;return s=u,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=d(h,u,0)},this.setState=function(h,u,f){const p=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!s||p===null||p.length===0||r&&!m)r?d(null):c();else{const M=r?0:n,v=M*4;let _=g.clippingState||null;l.value=_,_=d(p,u,v,f);for(let b=0;b!==v;++b)_[b]=e[b];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,u,f,p){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const g=f+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,_=f;v!==x;++v,_+=4)a.copy(h[v]).applyMatrix4(M,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}class ol extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new eh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ui(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:Vi});r.uniforms.tEquirect.value=e;const a=new qt(s,r),o=e.minFilter;return e.minFilter===Mn&&(e.minFilter=Ze),new rl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Th=256,Am=3,Rm=20,Ah=256,Rh=16,Cm=3,Lm=new H,Pm=new Ct;class na{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new rl(1,10,null),this._boxMesh=new qt(new Ui(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Lm}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),d=this._getSourceTarget(!0);e>0&&(d.texture.mipmapsAutoUpdate=!1);const h=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Pm));const m=new rl(n,s,d);return m.position.copy(o),m.update(l,t),l.autoClear=h,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Th,Sc(t))}_fromTexture(t,e){t.mapping===Xi||t.mapping===Ps?this._setSize(t.image.length===0?Th:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Ch(t,!1,!1),n=Math.log2(t)-Am;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ch(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Xi||t.mapping===Ps?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Lh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Dm(),this._integrationMaterial=Im());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Rh);for(let a=0;a<=n;a++){const o=na.lodToRoughness(a,n);if(a>n-Cm)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Ah*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Nm());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function Ch(i,t,e){return new ol(i,{minFilter:Mn,generateMipmaps:t,type:Sn,colorSpace:yr,depthBuffer:e})}function js(i,t,e){return new nn({name:i,uniforms:t,vertexShader:Xt.cube_vert,fragmentShader:e,side:Qe,blending:Vi,depthTest:!1,depthWrite:!1})}function Dm(){return js("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ah}u

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
	`)}function Im(){return js("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Rh}},`

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
	`)}function Nm(){return js("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Rm}
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
	`)}function Lh(){return js("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ph(){return js("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Um(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Na||f===Ua)if(t.has(u)){const p=t.get(u).texture;return o(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const x=new ol(p.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const f=u.mapping,p=f===Na||f===Ua,x=f===Xi||f===Ps;if(p||x){let m=e.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new na(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return p&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new na(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,f){return f===Na?u.mapping=Xi:f===Ua&&(u.mapping=Ps),u}function l(u){let f=0;const p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){const f=u.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(u){const f=u.target;f.removeEventListener("dispose",d);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Fm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Er("WebGLRenderer: "+n+" extension not supported."),s}}}function Om(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);const x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function d(p){const x=p.attributes;for(const m in x)t.update(x[m],i.ARRAY_BUFFER)}function h(p){const x=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const M=x!==null?x.array.length:m.array.length/3-1,v=m.count>=65535?Gc:Bc,_=new v(Math.ceil(M/3)*6,1),b=_.array;if(x!==null){const S=x.array;g=x.version;for(let y=0,w=0;y<M;y+=3){const T=S[y+0],C=S[y+1],P=S[y+2];b[w++]=T,b[w++]=C,b[w++]=C,b[w++]=P,b[w++]=P,b[w++]=T}}else{g=m.version;for(let S=0,y=0;S<M;S+=3){const w=S+0,T=S+1,C=S+2;b[y++]=w,b[y++]=T,b[y++]=T,b[y++]=C,b[y++]=C,b[y++]=w}}_.version=g;const E=r.get(p);E&&t.remove(E),r.set(p,_)}function u(p){const x=r.get(p);if(x){const m=p.index;m!==null&&x.version<m.version&&h(p)}else h(p);return r.get(p)}function f(){for(const p in s){const x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:d,getWireframeAttribute:u,dispose:f}}function zm(i,t,e){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,u){i.drawElements(n,u,r,h*a),e.update(u,n,1)}function c(h,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,h*a,f),e.update(u,n,f))}function d(h,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Bm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:oe("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gm(i,t,e){const n=new WeakMap,s=new Se;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let w=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;f===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let _=o.attributes.position.count*v,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const E=new Float32Array(_*b*4*h),S=new Ac(E,_,b,h);S.type=vn,S.needsUpdate=!0;const y=v*4;for(let T=0;T<h;T++){const C=m[T],P=g[T],U=M[T],L=_*b*4*T;for(let O=0;O<C.count;O++){const I=O*y;f===!0&&(s.fromBufferAttribute(C,O),E[L+I+0]=s.x,E[L+I+1]=s.y,E[L+I+2]=s.z,E[L+I+3]=0),p===!0&&(s.fromBufferAttribute(P,O),E[L+I+4]=s.x,E[L+I+5]=s.y,E[L+I+6]=s.z,E[L+I+7]=0),x===!0&&(s.fromBufferAttribute(U,O),E[L+I+8]=s.x,E[L+I+9]=s.y,E[L+I+10]=s.z,E[L+I+11]=U.itemSize===4?s.w:1)}}u={count:h,texture:S,size:new Nt(_,b)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function km(i,t,e,n,s){let r=new WeakMap;function a(c){const d=s.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==d&&(t.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return u}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}const Hm={[tc]:"LINEAR_TONE_MAPPING",[ec]:"REINHARD_TONE_MAPPING",[nc]:"CINEON_TONE_MAPPING",[ic]:"ACES_FILMIC_TONE_MAPPING",[rc]:"AGX_TONE_MAPPING",[Ia]:"NEUTRAL_TONE_MAPPING",[sc]:"CUSTOM_TONE_MAPPING"};function Vm(i,t,e,n,s,r){const a=new Un(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const d=new Re;d.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ye([0,2,0,0,2,0],2));const h=new sp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new qt(d,h),f=new Mh(-1,1,1,-1,0,1);let p=null,x=null,m=!1,g,M=null,v=[],_=!1;this.setSize=function(b,E){a.setSize(b,E),o!==null&&o.setSize(b,E),l!==null&&l.setSize(b,E);for(let S=0;S<v.length;S++){const y=v[S];y.setSize&&y.setSize(b,E)}},this.setEffects=function(b){v=b,_=v.length>0&&v[0].isRenderPass===!0;const E=a.width,S=a.height;v.length>0&&o===null&&(o=new Un(E,S,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),l=new Un(E,S,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&v.some(w=>w.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new os(E,S),r===!0&&(c.format=pi,c.type=Yi)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let w=0;w<v.length;w++){const T=v[w];T.setSize&&T.setSize(E,S),y&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(c)}},this.begin=function(b,E){if(m||b.toneMapping===Kn&&v.length===0)return!1;if(M=E,E!==null){const S=E.width,y=E.height;(a.width!==S||a.height!==y)&&this.setSize(S,y)}return _===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=Kn,!0},this.hasRenderPass=function(){return _},this.end=function(b,E){b.toneMapping=g,m=!0;let S=a,y=o;for(let w=0;w<v.length;w++){const T=v[w];T.enabled!==!1&&(T.render(b,y,S,E),T.needsSwap!==!1&&(S=y,y=y===o?l:o))}if(p!==b.outputColorSpace||x!==b.toneMapping){p=b.outputColorSpace,x=b.toneMapping,h.defines={},se.getTransfer(p)===fe&&(h.defines.SRGB_TRANSFER="");const w=Hm[x];w&&(h.defines[w]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(M),b.render(u,f),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),h.dispose()}}const Dh=new Ae,Ih=new os(1,1),Nh=new nh(1),Uh=new Ac,Fh=new mf,Oh=new eh,zh=[],Bh=[],Gh=new Float32Array(16),kh=new Float32Array(9),Hh=new Float32Array(4);function fs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=zh[s];if(r===void 0&&(r=new Float32Array(s),zh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ia(i,t){let e=Bh[t];e===void 0&&(e=new Int32Array(t),Bh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function Ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function Km(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Hh.set(n),i.uniformMatrix2fv(this.addr,!1,Hh),Fe(e,n)}}function qm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;kh.set(n),i.uniformMatrix3fv(this.addr,!1,kh),Fe(e,n)}}function Jm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Gh.set(n),i.uniformMatrix4fv(this.addr,!1,Gh),Fe(e,n)}}function $m(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function eg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function sa(i){return i.version===0&&(i.compareFunction=mc,i.needsUpdate=!0),i}function rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=sa(Ih):r=Dh,e.setTexture2D(t||r,s)}function ag(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Fh,s)}function og(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=sa(Nh):r=Oh,e.setTextureCube(t||r,s)}function lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Uh,s)}function cg(i){switch(i){case 5126:return Wm;case 35664:return Xm;case 35665:return Ym;case 35666:return Zm;case 35674:return Km;case 35675:return qm;case 35676:return Jm;case 5124:case 35670:return $m;case 35667:case 35671:return jm;case 35668:case 35672:return Qm;case 35669:case 35673:return tg;case 5125:return eg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return lg}}function hg(i,t){i.uniform1fv(this.addr,t)}function ug(i,t){const e=fs(t,this.size,2);i.uniform2fv(this.addr,e)}function dg(i,t){const e=fs(t,this.size,3);i.uniform3fv(this.addr,e)}function fg(i,t){const e=fs(t,this.size,4);i.uniform4fv(this.addr,e)}function pg(i,t){const e=fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mg(i,t){const e=fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gg(i,t){const e=fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xg(i,t){i.uniform1iv(this.addr,t)}function _g(i,t){i.uniform2iv(this.addr,t)}function Mg(i,t){i.uniform3iv(this.addr,t)}function vg(i,t){i.uniform4iv(this.addr,t)}function Sg(i,t){i.uniform1uiv(this.addr,t)}function yg(i,t){i.uniform2uiv(this.addr,t)}function bg(i,t){i.uniform3uiv(this.addr,t)}function Eg(i,t){i.uniform4uiv(this.addr,t)}function wg(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=sa(Ih):a=Dh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Tg(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Fh,r[a])}function Ag(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=sa(Nh):a=Oh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Rg(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Uh,r[a])}function Cg(i){switch(i){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return xg;case 35667:case 35671:return _g;case 35668:case 35672:return Mg;case 35669:case 35673:return vg;case 5125:return Sg;case 36294:return yg;case 36295:return bg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Rg}}class Lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cg(e.type)}}class Pg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cg(e.type)}}class Dg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ll=/(\w+)(\])?(\[|\.)?/g;function Vh(i,t){i.seq.push(t),i.map[t.id]=t}function Ig(i,t,e){const n=i.name,s=n.length;for(ll.lastIndex=0;;){const r=ll.exec(n),a=ll.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Vh(e,c===void 0?new Lg(o,i,t):new Pg(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Dg(o),Vh(e,h)),e=h}}}class ra{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ig(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Wh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ng=37297;let Ug=0;function Fg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Xh=new Ht;function Og(i){se._getMatrix(Xh,se.workingColorSpace,i);const t=`mat3( ${Xh.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case br:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Fg(i.getShaderSource(t),o)}else return r}function zg(i,t){const e=Og(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Bg={[tc]:"Linear",[ec]:"Reinhard",[nc]:"Cineon",[ic]:"ACESFilmic",[rc]:"AgX",[Ia]:"Neutral",[sc]:"Custom"};function Gg(i,t){const e=Bg[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const aa=new H;function kg(){se.getLuminanceCoefficients(aa);const i=aa.x.toFixed(4),t=aa.y.toFixed(4),e=aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function Vg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Qs(i){return i!==""}function Zh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Kh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(i){return i.replace(Xg,Yg)}function Yg(i,t){const e=Xt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return cl(e)}const Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(i){return i.replace(Zg,Kg)}function Kg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const qg={[As]:"SHADOWMAP_TYPE_PCF",[Rs]:"SHADOWMAP_TYPE_VSM"};function Jg(i){return qg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $g={[Ps]:"ENVMAP_MODE_REFRACTION"};function jg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$g[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Qg={[fr]:"ENVMAP_BLENDING_MULTIPLY",[Dd]:"ENVMAP_BLENDING_MIX",[Id]:"ENVMAP_BLENDING_ADD"};function tx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Qg[i.combine]||"ENVMAP_BLENDING_NONE"}function ex(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Jg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=jg(e),h=tx(e),u=Hg(e),f=Vg(r),p=s.createProgram();let x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Qs).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Qs).join(`
`),m.length>0&&(m+=`
`)):(x=[Jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),m=[Jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?Gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,zg("linearToOutputTexel",e.outputColorSpace),kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),a=cl(a),a=Zh(a,e),a=Kh(a,e),o=cl(o),o=Zh(o,e),o=Kh(o,e),a=qh(a),o=qh(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=g+x+a,v=g+m+o,_=Wh(s,s.VERTEX_SHADER,M),b=Wh(s,s.FRAGMENT_SHADER,v);s.attachShader(p,_),s.attachShader(p,b),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(T){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(p)||"",P=s.getShaderInfoLog(_)||"",U=s.getShaderInfoLog(b)||"",L=C.trim(),O=P.trim(),I=U.trim();let z=!0,Q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,_,b);else{const N=Yh(s,_,"vertex"),V=Yh(s,b,"fragment");oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+L+`
`+N+`
`+V)}else L!==""?kt("WebGLProgram: Program Info Log:",L):(O===""||I==="")&&(Q=!1);Q&&(T.diagnostics={runnable:z,programLog:L,vertexShader:{log:O,prefix:x},fragmentShader:{log:I,prefix:m}})}s.deleteShader(_),s.deleteShader(b),S=new ra(s,p),y=Wg(s,p)}let S;this.getUniforms=function(){return S===void 0&&E(this),S};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(p,Ng)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ug++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=b,this}let nx=0;class ix{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new sx(t),e.set(t,n)),n}}class sx{constructor(t){this.id=nx++,this.code=t,this.usedTimes=0}}function rx(i){return i===mi||i===vr||i===Sr}function ax(i,t,e,n,s,r){const a=new Ro,o=new ix,l=new Set,c=[],d=new Map,h=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,y,w,T,C,P){const U=T.fog,L=C.geometry,O=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?T.environment:null,I=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,z=t.get(S.envMap||O,I),Q=u[S.type];let N=n.precision;S.precision!==null&&(N=n.getMaxPrecision(S.precision),N!==S.precision&&kt("WebGLProgram.getParameters:",S.precision,"not supported, using",N,"instead."));const V=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,K=V!==void 0?V.length:0;let Y=0;L.morphAttributes.position!==void 0&&(Y=1),L.morphAttributes.normal!==void 0&&(Y=2),L.morphAttributes.color!==void 0&&(Y=3);let Z,F,q,st;if(Q){const wt=Bn[Q];Z=wt.vertexShader,F=wt.fragmentShader}else{Z=S.vertexShader,F=S.fragmentShader;const wt=o.getVertexShaderStage(S),pe=o.getFragmentShaderStage(S);o.update(S,wt,pe),q=wt.id,st=pe.id}const ct=i.getRenderTarget(),et=i.state.buffers.depth.getReversed(),it=C.isInstancedMesh===!0,At=C.isBatchedMesh===!0,Rt=!!S.map,Gt=!!S.matcap,Vt=!!z,ht=Vt&&z.isPMREMTexture===!0,ft=!!S.aoMap,xt=!!S.lightMap,Jt=!!S.bumpMap&&S.wireframe===!1,Lt=!!S.normalMap,ue=!!S.displacementMap,$t=!!S.emissiveMap,le=!!S.metalnessMap,xe=!!S.roughnessMap,me=S.anisotropy>0,W=S.clearcoat>0,ve=S.diffuseRoughness>0,jt=S.dispersion>0,ce=S.retroreflectivity>0,_t=S.iridescence>0,_e=S.sheen>0,zt=S.transmission>0,Ft=me&&!!S.anisotropyMap,D=W&&!!S.clearcoatMap,A=W&&!!S.clearcoatNormalMap,J=W&&!!S.clearcoatRoughnessMap,ut=ve&&!!S.diffuseRoughnessMap,ot=_t&&!!S.iridescenceMap,pt=_t&&!!S.iridescenceThicknessMap,yt=_e&&!!S.sheenColorMap,rt=_e&&!!S.sheenRoughnessMap,at=!!S.specularMap,Mt=!!S.specularColorMap,B=!!S.specularIntensityMap,lt=zt&&!!S.transmissionMap,nt=zt&&!!S.thicknessMap,vt=!!S.gradientMap,mt=!!S.alphaMap,gt=S.alphaTest>0,Ot=!!S.alphaHash,Zt=!!S.extensions;let dt=Kn;S.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(dt=i.toneMapping);const Bt=ht?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Yt={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:F,defines:S.defines,customVertexShaderID:q,customFragmentShaderID:st,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:N,batching:At,batchingColor:At&&C._colorsTexture!==null,instancing:it,instancingColor:it&&C.instanceColor!==null,instancingMorph:it&&C.morphTexture!==null,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Rt,matcap:Gt,envMap:Vt,envMapMode:Vt&&z.mapping,envMapPMREM:ht,envMapMaxLod:ht?Bt.length-1:null,envMapSize:ht?Bt[0].width:null,aoMap:ft,lightMap:xt,bumpMap:Jt,normalMap:Lt,displacementMap:ue,emissiveMap:$t,normalMapObjectSpace:Lt&&S.normalMapType===Fd,normalMapTangentSpace:Lt&&S.normalMapType===Zi,packedNormalMap:Lt&&S.normalMapType===Zi&&rx(S.normalMap.format),metalnessMap:le,roughnessMap:xe,anisotropy:me,anisotropyMap:Ft,clearcoat:W,clearcoatMap:D,clearcoatNormalMap:A,clearcoatRoughnessMap:J,diffuseRoughness:ve,diffuseRoughnessMap:ut,dispersion:jt,retroreflection:ce,iridescence:_t,iridescenceMap:ot,iridescenceThicknessMap:pt,sheen:_e,sheenColorMap:yt,sheenRoughnessMap:rt,specularMap:at,specularColorMap:Mt,specularIntensityMap:B,transmission:zt,transmissionMap:lt,thicknessMap:nt,gradientMap:vt,opaque:S.transparent===!1&&S.blending===Cs&&S.alphaToCoverage===!1,alphaMap:mt,alphaTest:gt,alphaHash:Ot,combine:S.combine,mapUv:Rt&&f(S.map.channel),aoMapUv:ft&&f(S.aoMap.channel),lightMapUv:xt&&f(S.lightMap.channel),bumpMapUv:Jt&&f(S.bumpMap.channel),normalMapUv:Lt&&f(S.normalMap.channel),displacementMapUv:ue&&f(S.displacementMap.channel),emissiveMapUv:$t&&f(S.emissiveMap.channel),metalnessMapUv:le&&f(S.metalnessMap.channel),roughnessMapUv:xe&&f(S.roughnessMap.channel),anisotropyMapUv:Ft&&f(S.anisotropyMap.channel),clearcoatMapUv:D&&f(S.clearcoatMap.channel),clearcoatNormalMapUv:A&&f(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&f(S.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ut&&f(S.diffuseRoughnessMap.channel),iridescenceMapUv:ot&&f(S.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&f(S.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&f(S.sheenColorMap.channel),sheenRoughnessMapUv:rt&&f(S.sheenRoughnessMap.channel),specularMapUv:at&&f(S.specularMap.channel),specularColorMapUv:Mt&&f(S.specularColorMap.channel),specularIntensityMapUv:B&&f(S.specularIntensityMap.channel),transmissionMapUv:lt&&f(S.transmissionMap.channel),thicknessMapUv:nt&&f(S.thicknessMap.channel),alphaMapUv:mt&&f(S.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Lt||me),vertexNormals:!!L.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!L.attributes.uv&&(Rt||mt),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||L.attributes.normal===void 0&&Lt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:et,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Y,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:P.filter(wt=>wt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:Rt&&S.map.isVideoTexture===!0&&se.getTransfer(S.map.colorSpace)===fe,decodeVideoTextureEmissive:$t&&S.emissiveMap.isVideoTexture===!0&&se.getTransfer(S.emissiveMap.colorSpace)===fe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ce,flipSided:S.side===Qe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Zt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&S.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function x(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)y.push(w),y.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(m(y,S),g(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function m(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapPMREM),S.push(y.envMapMaxLod),S.push(y.envMapSize),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.diffuseRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.numSunLights),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numSunLightShadows),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.numLightProbeGrids),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function g(S,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function M(S){const y=u[S.type];let w;if(y){const T=Bn[y];w=ep.clone(T.uniforms)}else w=S.uniforms;return w}function v(S,y){let w=d.get(y);return w!==void 0?++w.usedTimes:(w=new ex(i,y,S,s),c.push(w),d.set(y,w)),w}function _(S){if(--S.usedTimes===0){const y=c.indexOf(S);c[y]=c[c.length-1],c.pop(),d.delete(S.cacheKey),S.destroy()}}function b(S){o.remove(S)}function E(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:M,acquireProgram:v,releaseProgram:_,releaseShaderCache:b,programs:c,dispose:E}}function ox(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function lx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function $h(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,m,g){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=p,M.materialVariant=a(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=m,M.group=g),t++,M}function l(u,f,p,x,m,g,M){M.reversedDepth===!0&&(m=-m);const v=o(u,f,p,x,m,g);p.transmission>0?n.push(v):p.transparent===!0?s.push(v):e.push(v)}function c(u,f,p,x,m,g){const M=o(u,f,p,x,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?s.unshift(M):e.unshift(M)}function d(u,f){e.length>1&&e.sort(u||lx),n.length>1&&n.sort(f||$h),s.length>1&&s.sort(f||$h)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:d}}function cx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new jh,i.set(n,[a])):s>=r.length?(a=new jh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function hx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new Ct};break;case"SpotLight":e={position:new H,direction:new H,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function ux(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let dx=0;function fx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function px(i){const t=new hx,e=ux(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const s=new H,r=new te,a=new te;function o(c){let d=0,h=0,u=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,M=0,v=0,_=0,b=0,E=0,S=0,y=0,w=0,T=0;c.sort(fx);for(let P=0,U=c.length;P<U;P++){const L=c[P],O=L.color,I=L.intensity,z=L.distance;let Q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===mi?Q=L.shadow.map.texture:Q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=O.r*I,h+=O.g*I,u+=O.b*I;else if(L.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(L.sh.coefficients[N],I);T++}else if(L.isSunLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const V=L.shadow,K=e.get(L);K.shadowIntensity=V.intensity,K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[p]=K,n.sunShadowMap[p]=Q;const Y=V.getViewportCount();for(let Z=0;Z<Y;Z++)n.sunShadowMatrix[x+Z]=V.getMatrix(Z),n.sunShadowCascade[x+Z]=V._cascadeData[Z];x+=Y,p++}n.sun[f]=N,f++}else if(L.isDirectionalLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const V=L.shadow,K=e.get(L);K.shadowIntensity=V.intensity,K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=N,m++}else if(L.isSpotLight){const N=t.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(O).multiplyScalar(I),N.distance=z,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,n.spot[M]=N;const V=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,V.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[M]=V.matrix,L.castShadow){const K=e.get(L);K.shadowIntensity=V.intensity,K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,n.spotShadow[M]=K,n.spotShadowMap[M]=Q,S++}M++}else if(L.isRectAreaLight){const N=t.get(L);N.color.copy(O).multiplyScalar(I),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),n.rectArea[v]=N,v++}else if(L.isPointLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),N.distance=L.distance,N.decay=L.decay,L.castShadow){const V=L.shadow,K=e.get(L);K.shadowIntensity=V.intensity,K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,K.shadowCameraNear=V.camera.near,K.shadowCameraFar=V.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=N,g++}else if(L.isHemisphereLight){const N=t.get(L);N.skyColor.copy(L.color).multiplyScalar(I),N.groundColor.copy(L.groundColor).multiplyScalar(I),n.hemi[_]=N,_++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const C=n.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==g||C.spotLength!==M||C.rectAreaLength!==v||C.hemiLength!==_||C.numSunShadows!==p||C.numDirectionalShadows!==b||C.numPointShadows!==E||C.numSpotShadows!==S||C.numSpotMaps!==y||C.numLightProbes!==T)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=v,n.point.length=g,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.spotLightMatrix.length=S+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,C.sunLength=f,C.directionalLength=m,C.pointLength=g,C.spotLength=M,C.rectAreaLength=v,C.hemiLength=_,C.numSunShadows=p,C.numDirectionalShadows=b,C.numPointShadows=E,C.numSpotShadows=S,C.numSpotMaps=y,C.numLightProbes=T,n.version=dx++)}function l(c,d){let h=0,u=0,f=0,p=0,x=0,m=0;const g=d.matrixWorldInverse;for(let M=0,v=c.length;M<v;M++){const _=c[M];if(_.isSunLight){const b=n.sun[h];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),h++}else if(_.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),u++}else if(_.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function Qh(i){const t=new px(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){h.isLightProbeGrid?s.push(h):e.push(h)}function o(h){n.push(h)}function l(){t.setup(e),s.sort((h,u)=>h.priority-u.priority||h.id-u.id)}function c(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function mx(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Qh(i),t.set(s,[o])):r>=a.length?(o=new Qh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const gx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xx=`uniform sampler2D shadow_pass;
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
}`,_x=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Mx=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],tu=new te,tr=new H,hl=new H;function vx(i,t,e){let n=new Ys;const s=new Nt,r=new Nt,a=new Se,o=new op,l=new lp,c={},d=e.maxTextureSize,h={[di]:Qe,[Qe]:di,[Ce]:Ce},u=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:gx,fragmentShader:xx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new Re;p.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new qt(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=As;let g=this.type;this.render=function(E,S,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===fd&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=As);const w=i.getRenderTarget(),T=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Vi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const U=g!==this.type;U&&S.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=E.length;L<O;L++){const I=E[L],z=I.shadow;if(z===void 0){kt("WebGLShadowMap:",I,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const Q=z.getFrameExtents();s.multiply(Q),r.copy(z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Q.x),s.x=r.x*Q.x,z.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Q.y),s.y=r.y*Q.y,z.mapSize.y=r.y));const N=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=N,z.map===null||U===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Rs){if(I.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Un(s.x,s.y,{format:mi,type:Sn,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),z.map.texture.name=I.name+".shadowMap",z.map.depthTexture=new os(s.x,s.y,vn),z.map.depthTexture.name=I.name+".shadowMapDepth",z.map.depthTexture.format=fi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ie,z.map.depthTexture.magFilter=Ie}else I.isPointLight?(z.map=new ol(s.x),z.map.depthTexture=new nh(s.x,In)):(z.map=new Un(s.x,s.y),z.map.depthTexture=new os(s.x,s.y,In)),z.map.depthTexture.name=I.name+".shadowMap",z.map.depthTexture.format=fi,this.type===As?(z.map.depthTexture.compareFunction=N?pc:fc,z.map.depthTexture.minFilter=Ze,z.map.depthTexture.magFilter=Ze):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ie,z.map.depthTexture.magFilter=Ie);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const V=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();I.isPointLight!==!0&&z.updateMatrices(I,y);const K=z.camera.layers.mask&4294967294?z.camera.layers:y.layers;for(let Y=0;Y<V;Y++){const Z=z.getCamera(Y);if(I.isPointLight){const F=z.camera,q=z.matrix,st=I.distance||F.far;st!==F.far&&(F.far=st,F.updateProjectionMatrix()),tr.setFromMatrixPosition(I.matrixWorld),F.position.copy(tr),hl.copy(F.position),hl.add(_x[Y]),F.up.copy(Mx[Y]),F.lookAt(hl),F.updateMatrixWorld(),q.makeTranslation(-tr.x,-tr.y,-tr.z),tu.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),z._frustum.setFromProjectionMatrix(tu,F.coordinateSystem,F.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,Y),i.clear();else{Y===0&&(i.setRenderTarget(z.map),i.clear());const F=z.getViewport(Y);a.set(r.x*F.x,r.y*F.y,r.x*F.z,r.y*F.w),P.viewport(a)}n=z.getFrustum(Y),_(S,y,Z,I,K,this.type)}z.isPointLightShadow!==!0&&this.type===Rs&&M(z,y),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(w,T,C)};function M(E,S){const y=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Un(s.x,s.y,{format:mi,type:Sn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(S,null,y,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(S,null,y,f,x,null)}function v(E,S,y,w){let T=null;const C=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)T=C;else if(T=y.isPointLight===!0?l:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){const P=T.uuid,U=S.uuid;let L=c[P];L===void 0&&(L={},c[P]=L);let O=L[U];O===void 0&&(O=T.clone(),L[U]=O,S.addEventListener("dispose",b)),T=O}if(T.visible=S.visible,T.wireframe=S.wireframe,w===Rs?T.side=S.shadowSide!==null?S.shadowSide:S.side:T.side=S.shadowSide!==null?S.shadowSide:h[S.side],T.alphaMap=S.alphaMap,T.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,T.map=S.map,T.clipShadows=S.clipShadows,T.clippingPlanes=S.clippingPlanes,T.clipIntersection=S.clipIntersection,T.displacementMap=S.displacementMap,T.displacementScale=S.displacementScale,T.displacementBias=S.displacementBias,T.wireframeLinewidth=S.wireframeLinewidth,T.linewidth=S.linewidth,y.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const P=i.properties.get(T);P.light=y}return T}function _(E,S,y,w,T,C){if(E.visible===!1)return;if(E.layers.test(T)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Rs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const L=t.update(E),O=E.material;if(Array.isArray(O)){const I=L.groups;for(let z=0,Q=I.length;z<Q;z++){const N=I[z],V=O[N.materialIndex];if(V&&V.visible){const K=v(E,V,w,C);E.onBeforeShadow(i,E,S,y,L,K,N),i.renderBufferDirect(y,null,L,K,E,N),E.onAfterShadow(i,E,S,y,L,K,N)}}}else if(O.visible){const I=v(E,O,w,C);E.onBeforeShadow(i,E,S,y,L,I,null),i.renderBufferDirect(y,null,L,I,E,null),E.onAfterShadow(i,E,S,y,L,I,null)}}const U=E.children;for(let L=0,O=U.length;L<O;L++)_(U[L],S,y,w,T,C)}function b(E){E.target.removeEventListener("dispose",b);for(const y in c){const w=c[y],T=E.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}function Sx(i,t){function e(){let B=!1;const lt=new Se;let nt=null;const vt=new Se(0,0,0,0);return{setMask:function(mt){nt!==mt&&!B&&(i.colorMask(mt,mt,mt,mt),nt=mt)},setLocked:function(mt){B=mt},setClear:function(mt,gt,Ot,Zt,dt){dt===!0&&(mt*=Zt,gt*=Zt,Ot*=Zt),lt.set(mt,gt,Ot,Zt),vt.equals(lt)===!1&&(i.clearColor(mt,gt,Ot,Zt),vt.copy(lt))},reset:function(){B=!1,nt=null,vt.set(-1,0,0,0)}}}function n(){let B=!1,lt=!1,nt=null,vt=null,mt=null;return{setReversed:function(gt){if(lt!==gt){const Ot=t.get("EXT_clip_control");gt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),lt=gt;const Zt=mt;mt=null,this.setClear(Zt)}},getReversed:function(){return lt},setTest:function(gt){gt?et(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(gt){nt!==gt&&!B&&(i.depthMask(gt),nt=gt)},setFunc:function(gt){if(lt&&(gt=Zd[gt]),vt!==gt){switch(gt){case Ta:i.depthFunc(i.NEVER);break;case Aa:i.depthFunc(i.ALWAYS);break;case Ra:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case Ca:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case Pa:i.depthFunc(i.GREATER);break;case Da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=gt}},setLocked:function(gt){B=gt},setClear:function(gt){mt!==gt&&(mt=gt,lt&&(gt=1-gt),i.clearDepth(gt))},reset:function(){B=!1,nt=null,vt=null,mt=null,lt=!1}}}function s(){let B=!1,lt=null,nt=null,vt=null,mt=null,gt=null,Ot=null,Zt=null,dt=null;return{setTest:function(Bt){B||(Bt?et(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(Bt){lt!==Bt&&!B&&(i.stencilMask(Bt),lt=Bt)},setFunc:function(Bt,Yt,wt){(nt!==Bt||vt!==Yt||mt!==wt)&&(i.stencilFunc(Bt,Yt,wt),nt=Bt,vt=Yt,mt=wt)},setOp:function(Bt,Yt,wt){(gt!==Bt||Ot!==Yt||Zt!==wt)&&(i.stencilOp(Bt,Yt,wt),gt=Bt,Ot=Yt,Zt=wt)},setLocked:function(Bt){B=Bt},setClear:function(Bt){dt!==Bt&&(i.clearStencil(Bt),dt=Bt)},reset:function(){B=!1,lt=null,nt=null,vt=null,mt=null,gt=null,Ot=null,Zt=null,dt=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let d={},h={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,M=null,v=null,_=null,b=null,E=null,S=null,y=new Ct(0,0,0),w=0,T=!1,C=null,P=null,U=null,L=null,O=null;const I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Q=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(N)[1]),z=Q>=1):N.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),z=Q>=2);let V=null,K={};const Y=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),F=new Se().fromArray(Y),q=new Se().fromArray(Z);function st(B,lt,nt,vt){const mt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(B,gt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<nt;Ot++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(lt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return gt}const ct={};ct[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(Ls),Jt(!1),Lt(ql),et(i.CULL_FACE),ft(Vi);function et(B){d[B]!==!0&&(i.enable(B),d[B]=!0)}function it(B){d[B]!==!1&&(i.disable(B),d[B]=!1)}function At(B,lt){return u[B]!==lt?(i.bindFramebuffer(B,lt),u[B]=lt,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=lt),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Rt(B,lt){let nt=p,vt=!1;if(B){nt=f.get(lt),nt===void 0&&(nt=[],f.set(lt,nt));const mt=B.textures;if(nt.length!==mt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Ot=mt.length;gt<Ot;gt++)nt[gt]=i.COLOR_ATTACHMENT0+gt;nt.length=mt.length,vt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,vt=!0);vt&&i.drawBuffers(nt)}function Gt(B){return x!==B?(i.useProgram(B),x=B,!0):!1}const Vt={[Wi]:i.FUNC_ADD,[md]:i.FUNC_SUBTRACT,[gd]:i.FUNC_REVERSE_SUBTRACT};Vt[xd]=i.MIN,Vt[_d]=i.MAX;const ht={[Md]:i.ZERO,[vd]:i.ONE,[Sd]:i.SRC_COLOR,[jl]:i.SRC_ALPHA,[Ad]:i.SRC_ALPHA_SATURATE,[wd]:i.DST_COLOR,[bd]:i.DST_ALPHA,[yd]:i.ONE_MINUS_SRC_COLOR,[Ql]:i.ONE_MINUS_SRC_ALPHA,[Td]:i.ONE_MINUS_DST_COLOR,[Ed]:i.ONE_MINUS_DST_ALPHA,[Rd]:i.CONSTANT_COLOR,[Cd]:i.ONE_MINUS_CONSTANT_COLOR,[Ld]:i.CONSTANT_ALPHA,[Pd]:i.ONE_MINUS_CONSTANT_ALPHA};function ft(B,lt,nt,vt,mt,gt,Ot,Zt,dt,Bt){if(B===Vi){m===!0&&(it(i.BLEND),m=!1);return}if(m===!1&&(et(i.BLEND),m=!0),B!==pd){if(B!==g||Bt!==T){if((M!==Wi||b!==Wi)&&(i.blendEquation(i.FUNC_ADD),M=Wi,b=Wi),Bt)switch(B){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.ONE,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:oe("WebGLState: Invalid blending: ",B);break}else switch(B){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jl:oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $l:oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:oe("WebGLState: Invalid blending: ",B);break}v=null,_=null,E=null,S=null,y.set(0,0,0),w=0,g=B,T=Bt}return}mt=mt||lt,gt=gt||nt,Ot=Ot||vt,(lt!==M||mt!==b)&&(i.blendEquationSeparate(Vt[lt],Vt[mt]),M=lt,b=mt),(nt!==v||vt!==_||gt!==E||Ot!==S)&&(i.blendFuncSeparate(ht[nt],ht[vt],ht[gt],ht[Ot]),v=nt,_=vt,E=gt,S=Ot),(Zt.equals(y)===!1||dt!==w)&&(i.blendColor(Zt.r,Zt.g,Zt.b,dt),y.copy(Zt),w=dt),g=B,T=!1}function xt(B,lt){B.side===Ce?it(i.CULL_FACE):et(i.CULL_FACE);let nt=B.side===Qe;lt&&(nt=!nt),Jt(nt),B.blending===Cs&&B.transparent===!1?ft(Vi):ft(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const vt=B.stencilWrite;o.setTest(vt),vt&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),$t(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(B){C!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),C=B)}function Lt(B){B!==ud?(et(i.CULL_FACE),B!==P&&(B===ql?i.cullFace(i.BACK):B===dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),P=B}function ue(B){B!==U&&(z&&i.lineWidth(B),U=B)}function $t(B,lt,nt){B?(et(i.POLYGON_OFFSET_FILL),(L!==lt||O!==nt)&&(L=lt,O=nt,a.getReversed()&&(lt=-lt,nt=-nt),i.polygonOffset(lt,nt))):it(i.POLYGON_OFFSET_FILL)}function le(B){B?et(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function xe(B){B===void 0&&(B=i.TEXTURE0+I-1),V!==B&&(i.activeTexture(B),V=B)}function me(B,lt,nt){nt===void 0&&(V===null?nt=i.TEXTURE0+I-1:nt=V);let vt=K[nt];vt===void 0&&(vt={type:void 0,texture:void 0},K[nt]=vt),(vt.type!==B||vt.texture!==lt)&&(V!==nt&&(i.activeTexture(nt),V=nt),i.bindTexture(B,lt||ct[B]),vt.type=B,vt.texture=lt)}function W(){const B=K[V];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ve(){try{i.compressedTexImage2D(...arguments)}catch(B){oe("WebGLState:",B)}}function jt(){try{i.compressedTexImage3D(...arguments)}catch(B){oe("WebGLState:",B)}}function ce(){try{i.texSubImage2D(...arguments)}catch(B){oe("WebGLState:",B)}}function _t(){try{i.texSubImage3D(...arguments)}catch(B){oe("WebGLState:",B)}}function _e(){try{i.compressedTexSubImage2D(...arguments)}catch(B){oe("WebGLState:",B)}}function zt(){try{i.compressedTexSubImage3D(...arguments)}catch(B){oe("WebGLState:",B)}}function Ft(){try{i.texStorage2D(...arguments)}catch(B){oe("WebGLState:",B)}}function D(){try{i.texStorage3D(...arguments)}catch(B){oe("WebGLState:",B)}}function A(){try{i.texImage2D(...arguments)}catch(B){oe("WebGLState:",B)}}function J(){try{i.texImage3D(...arguments)}catch(B){oe("WebGLState:",B)}}function ut(B){return h[B]!==void 0?h[B]:i.getParameter(B)}function ot(B,lt){h[B]!==lt&&(i.pixelStorei(B,lt),h[B]=lt)}function pt(B){F.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),F.copy(B))}function yt(B){q.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),q.copy(B))}function rt(B,lt){let nt=c.get(lt);nt===void 0&&(nt=new WeakMap,c.set(lt,nt));let vt=nt.get(B);vt===void 0&&(vt=i.getUniformBlockIndex(lt,B.name),i.uniformBlockBinding(lt,vt,vt),nt.set(B,vt))}function at(B,lt,nt){const mt=c.get(lt).get(B);l[mt]!==nt&&(i.bindBufferBase(i.UNIFORM_BUFFER,mt,nt),l[mt]=nt)}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},h={},V=null,K={},u={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,M=null,v=null,_=null,b=null,E=null,S=null,y=new Ct(0,0,0),w=0,T=!1,C=null,P=null,U=null,L=null,O=null,F.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:it,bindFramebuffer:At,drawBuffers:Rt,useProgram:Gt,setBlending:ft,setMaterial:xt,setFlipSided:Jt,setCullFace:Lt,setLineWidth:ue,setPolygonOffset:$t,setScissorTest:le,activeTexture:xe,bindTexture:me,unbindTexture:W,compressedTexImage2D:ve,compressedTexImage3D:jt,texImage2D:A,texImage3D:J,pixelStorei:ot,getParameter:ut,updateUBOMapping:rt,uniformBlockBinding:at,texStorage2D:Ft,texStorage3D:D,texSubImage2D:ce,texSubImage3D:_t,compressedTexSubImage2D:_e,compressedTexSubImage3D:zt,scissor:pt,viewport:yt,reset:Mt}}function yx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,d=new WeakMap,h=new Set;let u;const f=new WeakMap,p=new Set,x=new FinalizationRegistry(D=>p.delete(D));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,A){return m?new OffscreenCanvas(D,A):Us("canvas")}function M(D,A,J){let ut=1;const ot=Ft(D);if((ot.width>J||ot.height>J)&&(ut=J/Math.max(ot.width,ot.height)),ut<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const pt=Math.floor(ut*ot.width),yt=Math.floor(ut*ot.height);u===void 0&&(u=g(pt,yt));const rt=A?g(pt,yt):u;return rt.width=pt,rt.height=yt,rt.getContext("2d").drawImage(D,0,0,pt,yt),kt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+pt+"x"+yt+")."),rt}else return"data"in D&&kt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),D;return D}function v(D){return D.generateMipmaps}function _(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(D,A,J,ut,ot,pt=!1){if(D!==null){if(i[D]!==void 0)return i[D];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let yt;ut&&(yt=t.get("EXT_texture_norm16"),yt||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=A;if(A===i.RED&&(J===i.FLOAT&&(rt=i.R32F),J===i.HALF_FLOAT&&(rt=i.R16F),J===i.UNSIGNED_BYTE&&(rt=i.R8),J===i.UNSIGNED_SHORT&&yt&&(rt=yt.R16_EXT),J===i.SHORT&&yt&&(rt=yt.R16_SNORM_EXT)),A===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(rt=i.R8UI),J===i.UNSIGNED_SHORT&&(rt=i.R16UI),J===i.UNSIGNED_INT&&(rt=i.R32UI),J===i.BYTE&&(rt=i.R8I),J===i.SHORT&&(rt=i.R16I),J===i.INT&&(rt=i.R32I)),A===i.RG&&(J===i.FLOAT&&(rt=i.RG32F),J===i.HALF_FLOAT&&(rt=i.RG16F),J===i.UNSIGNED_BYTE&&(rt=i.RG8),J===i.UNSIGNED_SHORT&&yt&&(rt=yt.RG16_EXT),J===i.SHORT&&yt&&(rt=yt.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(rt=i.RG8UI),J===i.UNSIGNED_SHORT&&(rt=i.RG16UI),J===i.UNSIGNED_INT&&(rt=i.RG32UI),J===i.BYTE&&(rt=i.RG8I),J===i.SHORT&&(rt=i.RG16I),J===i.INT&&(rt=i.RG32I)),A===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),J===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),J===i.UNSIGNED_INT&&(rt=i.RGB32UI),J===i.BYTE&&(rt=i.RGB8I),J===i.SHORT&&(rt=i.RGB16I),J===i.INT&&(rt=i.RGB32I)),A===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),J===i.UNSIGNED_INT&&(rt=i.RGBA32UI),J===i.BYTE&&(rt=i.RGBA8I),J===i.SHORT&&(rt=i.RGBA16I),J===i.INT&&(rt=i.RGBA32I)),A===i.RGB&&(J===i.UNSIGNED_SHORT&&yt&&(rt=yt.RGB16_EXT),J===i.SHORT&&yt&&(rt=yt.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),A===i.RGBA){const at=pt?br:se.getTransfer(ot);J===i.FLOAT&&(rt=i.RGBA32F),J===i.HALF_FLOAT&&(rt=i.RGBA16F),J===i.UNSIGNED_BYTE&&(rt=at===fe?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&yt&&(rt=yt.RGBA16_EXT),J===i.SHORT&&yt&&(rt=yt.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function S(D,A){let J;return D?A===null||A===In||A===Yi?J=i.DEPTH24_STENCIL8:A===vn?J=i.DEPTH32F_STENCIL8:A===Is&&(J=i.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===In||A===Yi?J=i.DEPTH_COMPONENT24:A===vn?J=i.DEPTH_COMPONENT32F:A===Is&&(J=i.DEPTH_COMPONENT16),J}function y(D,A){return v(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ie&&D.minFilter!==Ze?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function w(D){const A=new WeakRef(D);n.get(D).__ref=A,p.add(A),x.register(D,A,A)}function T(D){const A=n.get(D).__ref;A!==void 0&&(p.delete(A),x.unregister(A))}function C(D){U(D.target)}function P(D){L(D.target)}function U(D){D.removeEventListener("dispose",C),T(D),I(D),D.isVideoTexture&&d.delete(D),D.isHTMLTexture&&h.delete(D)}function L(D){D.removeEventListener("dispose",P),T(D),Q(D)}function O(){for(const D of p){const A=D.deref();A!==void 0&&(A.isRenderTarget===!0?L(A):U(A))}p.clear(),h.clear()}function I(D){const A=n.get(D);if(A.__webglInit===void 0)return;const J=D.source,ut=f.get(J);if(ut){const ot=ut[A.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&z(D),Object.keys(ut).length===0&&f.delete(J)}n.remove(D)}function z(D){const A=n.get(D);i.deleteTexture(A.__webglTexture);const J=D.source,ut=f.get(J);delete ut[A.__cacheKey],a.memory.textures--}function Q(D){const A=n.get(D);A.__depthDisposeCallback&&A.__depthDisposeCallback();const J=D.depthTexture;if(J&&J.renderTarget===D&&U(J),D.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(A.__webglFramebuffer[ot]))for(let pt=0;pt<A.__webglFramebuffer[ot].length;pt++)i.deleteFramebuffer(A.__webglFramebuffer[ot][pt]);else i.deleteFramebuffer(A.__webglFramebuffer[ot]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[ot])}else{if(Array.isArray(A.__webglFramebuffer))for(let ot=0;ot<A.__webglFramebuffer.length;ot++)i.deleteFramebuffer(A.__webglFramebuffer[ot]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ot=0;ot<A.__webglColorRenderbuffer.length;ot++)A.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[ot]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ut=D.textures;for(let ot=0,pt=ut.length;ot<pt;ot++){const yt=n.get(ut[ot]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(ut[ot])}n.remove(D)}let N=0;function V(){N=0}function K(){return N}function Y(D){N=D}function Z(){const D=N;return D>=s.maxTextures&&kt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,D}function F(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.mipmapsAutoUpdate),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function q(D,A){const J=n.get(D);if(D.isVideoTexture&&_e(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){const ut=D.image;if(ut===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(J,D,A);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+A)}function st(D,A){const J=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){xt(J,D,A);return}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+A)}function ct(D,A){const J=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){xt(J,D,A);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+A)}function et(D,A){const J=n.get(D);if(D.version>0&&J.__version!==D.version){Jt(J,D,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+A)}const it={[Ds]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},At={[Ie]:i.NEAREST,[Nd]:i.NEAREST_MIPMAP_NEAREST,[pr]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[Oa]:i.LINEAR_MIPMAP_NEAREST,[Mn]:i.LINEAR_MIPMAP_LINEAR},Rt={[zd]:i.NEVER,[mc]:i.ALWAYS,[Bd]:i.LESS,[fc]:i.LEQUAL,[Gd]:i.EQUAL,[pc]:i.GEQUAL,[kd]:i.GREATER,[Hd]:i.NOTEQUAL};function Gt(D,A){if(A.type===vn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ze||A.magFilter===Oa||A.magFilter===pr||A.magFilter===Mn||A.minFilter===Ze||A.minFilter===Oa||A.minFilter===pr||A.minFilter===Mn)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,it[A.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,it[A.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,it[A.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,At[A.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,At[A.minFilter]),A.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Rt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ie||A.minFilter!==pr&&A.minFilter!==Mn||A.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Vt(D,A){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",C),w(A));const ut=A.source;let ot=f.get(ut);ot===void 0&&(ot={},f.set(ut,ot));const pt=F(A);if(pt!==D.__cacheKey){ot[pt]===void 0&&(ot[pt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),ot[pt].usedTimes++;const yt=ot[D.__cacheKey];yt!==void 0&&(ot[D.__cacheKey].usedTimes--,yt.usedTimes===0&&z(A)),D.__cacheKey=pt,D.__webglTexture=ot[pt].texture}return J}function ht(D,A,J){return Math.floor(Math.floor(D/J)/A)}function ft(D,A,J,ut){const pt=D.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,J,ut,A.data);else{pt.sort((B,lt)=>B.start-lt.start);let yt=0;for(let B=1;B<pt.length;B++){const lt=pt[yt],nt=pt[B],vt=lt.start+lt.count,mt=ht(nt.start,A.width,4),gt=ht(lt.start,A.width,4);nt.start<=vt+1&&mt===gt&&ht(nt.start+nt.count-1,A.width,4)===mt?lt.count=Math.max(lt.count,nt.start+nt.count-lt.start):(++yt,pt[yt]=nt)}pt.length=yt+1;const rt=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let B=0,lt=pt.length;B<lt;B++){const nt=pt[B],vt=Math.floor(nt.start/4),mt=Math.ceil(nt.count/4),gt=vt%A.width,Ot=Math.floor(vt/A.width),Zt=mt,dt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ot),e.texSubImage2D(i.TEXTURE_2D,0,gt,Ot,Zt,dt,J,ut,A.data)}D.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,rt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function xt(D,A,J){let ut=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ut=i.TEXTURE_3D);const ot=Vt(D,A),pt=A.source;e.bindTexture(ut,D.__webglTexture,i.TEXTURE0+J);const yt=n.get(pt);if(pt.version!==yt.__version||ot===!0){if(e.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const dt=se.getPrimaries(se.workingColorSpace),Bt=A.colorSpace===gi?null:se.getPrimaries(A.colorSpace),Yt=A.colorSpace===gi||dt===Bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let at=M(A.image,!1,s.maxTextureSize);at=zt(A,at);const Mt=r.convert(A.format,A.colorSpace),B=r.convert(A.type);let lt=E(A.internalFormat,Mt,B,A.normalized,A.colorSpace,A.isVideoTexture);Gt(ut,A);let nt;const vt=A.mipmaps,mt=A.isVideoTexture!==!0,gt=yt.__version===void 0||ot===!0,Ot=pt.dataReady,Zt=y(A,at);if(A.isDepthTexture)lt=S(A.format===pi,A.type),gt&&(mt?e.texStorage2D(i.TEXTURE_2D,1,lt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,lt,at.width,at.height,0,Mt,B,null));else if(A.isDataTexture)if(vt.length>0){mt&&gt&&e.texStorage2D(i.TEXTURE_2D,Zt,lt,vt[0].width,vt[0].height);for(let dt=0,Bt=vt.length;dt<Bt;dt++)nt=vt[dt],mt?Ot&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,nt.width,nt.height,Mt,B,nt.data):e.texImage2D(i.TEXTURE_2D,dt,lt,nt.width,nt.height,0,Mt,B,nt.data);A.generateMipmaps=!1}else mt?(gt&&e.texStorage2D(i.TEXTURE_2D,Zt,lt,at.width,at.height),Ot&&ft(A,at,Mt,B)):e.texImage2D(i.TEXTURE_2D,0,lt,at.width,at.height,0,Mt,B,at.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){mt&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,lt,vt[0].width,vt[0].height,at.depth);for(let dt=0,Bt=vt.length;dt<Bt;dt++)if(nt=vt[dt],A.format!==Nn)if(Mt!==null)if(mt){if(Ot)if(A.layerUpdates.size>0){const Yt=bh(nt.width,nt.height,A.format,A.type);for(const wt of A.layerUpdates){const pe=nt.data.subarray(wt*Yt/nt.data.BYTES_PER_ELEMENT,(wt+1)*Yt/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,wt,nt.width,nt.height,1,Mt,pe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,nt.width,nt.height,at.depth,Mt,nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,lt,nt.width,nt.height,at.depth,0,nt.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?Ot&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,nt.width,nt.height,at.depth,Mt,B,nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,lt,nt.width,nt.height,at.depth,0,Mt,B,nt.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{mt&&gt&&e.texStorage2D(i.TEXTURE_2D,Zt,lt,vt[0].width,vt[0].height);for(let dt=0,Bt=vt.length;dt<Bt;dt++)nt=vt[dt],A.format!==Nn?Mt!==null?mt?Ot&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,nt.width,nt.height,Mt,nt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,lt,nt.width,nt.height,0,nt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?Ot&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,nt.width,nt.height,Mt,B,nt.data):e.texImage2D(i.TEXTURE_2D,dt,lt,nt.width,nt.height,0,Mt,B,nt.data)}else if(A.isDataArrayTexture)if(mt){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,lt,at.width,at.height,at.depth),Ot)if(A.layerUpdates.size>0){const dt=bh(at.width,at.height,A.format,A.type);for(const Bt of A.layerUpdates){const Yt=at.data.subarray(Bt*dt/at.data.BYTES_PER_ELEMENT,(Bt+1)*dt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Bt,at.width,at.height,1,Mt,B,Yt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Mt,B,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,at.width,at.height,at.depth,0,Mt,B,at.data);else if(A.isData3DTexture)mt?(gt&&e.texStorage3D(i.TEXTURE_3D,Zt,lt,at.width,at.height,at.depth),Ot&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Mt,B,at.data)):e.texImage3D(i.TEXTURE_3D,0,lt,at.width,at.height,at.depth,0,Mt,B,at.data);else if(A.isFramebufferTexture){if(gt)if(mt)e.texStorage2D(i.TEXTURE_2D,Zt,lt,at.width,at.height);else{let dt=at.width,Bt=at.height;for(let Yt=0;Yt<Zt;Yt++)e.texImage2D(i.TEXTURE_2D,Yt,lt,dt,Bt,0,Mt,B,null),dt>>=1,Bt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const dt=i.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),at.parentNode!==dt){dt.appendChild(at),h.add(A),dt.onpaint=Bt=>{const Yt=Bt.changedElements;for(const wt of h)Yt.includes(wt.image)&&(wt.needsUpdate=!0)},dt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{const Yt=i.RGBA,wt=i.RGBA,pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Yt,wt,pe,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(vt.length>0){if(mt&&gt){const dt=Ft(vt[0]);e.texStorage2D(i.TEXTURE_2D,Zt,lt,dt.width,dt.height)}for(let dt=0,Bt=vt.length;dt<Bt;dt++)nt=vt[dt],mt?Ot&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Mt,B,nt):e.texImage2D(i.TEXTURE_2D,dt,lt,Mt,B,nt);A.generateMipmaps=!1}else if(mt){if(gt){const dt=Ft(at);e.texStorage2D(i.TEXTURE_2D,Zt,lt,dt.width,dt.height)}Ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,B,at)}else e.texImage2D(i.TEXTURE_2D,0,lt,Mt,B,at);v(A)&&A.mipmapsAutoUpdate===!0&&_(ut),yt.__version=pt.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Jt(D,A,J){if(A.image.length!==6)return;const ut=Vt(D,A),ot=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+J);const pt=n.get(ot);if(ot.version!==pt.__version||ut===!0){e.activeTexture(i.TEXTURE0+J);const yt=se.getPrimaries(se.workingColorSpace),rt=A.colorSpace===gi?null:se.getPrimaries(A.colorSpace),at=A.colorSpace===gi||yt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const Mt=A.isCompressedTexture||A.image[0].isCompressedTexture,B=A.image[0]&&A.image[0].isDataTexture,lt=[];for(let wt=0;wt<6;wt++)!Mt&&!B?lt[wt]=M(A.image[wt],!0,s.maxCubemapSize):lt[wt]=B?A.image[wt].image:A.image[wt],lt[wt]=zt(A,lt[wt]);const nt=lt[0],vt=r.convert(A.format,A.colorSpace),mt=r.convert(A.type);let gt=E(A.internalFormat,vt,mt,A.normalized,A.colorSpace);const Ot=A.isVideoTexture!==!0,Zt=pt.__version===void 0||ut===!0,dt=ot.dataReady;let Bt=y(A,nt);Gt(i.TEXTURE_CUBE_MAP,A);let Yt;if(A.isDepthTexture){if(gt=S(A.format===pi,A.type),Zt)if(Ot)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,gt,nt.width,nt.height);else for(let wt=0;wt<6;wt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,gt,nt.width,nt.height,0,vt,mt,null)}else if(Mt){Ot&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,gt,nt.width,nt.height);for(let wt=0;wt<6;wt++){Yt=lt[wt].mipmaps;for(let pe=0;pe<Yt.length;pe++){const ke=Yt[pe];A.format!==Nn?vt!==null?Ot?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe,0,0,ke.width,ke.height,vt,ke.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe,gt,ke.width,ke.height,0,ke.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe,0,0,ke.width,ke.height,vt,mt,ke.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe,gt,ke.width,ke.height,0,vt,mt,ke.data)}}}else{if(Yt=A.mipmaps,Ot&&Zt){Yt.length>0&&Bt++;const wt=Ft(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,gt,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(B){Ot?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,lt[wt].width,lt[wt].height,vt,mt,lt[wt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,gt,lt[wt].width,lt[wt].height,0,vt,mt,lt[wt].data);for(let pe=0;pe<Yt.length;pe++){const Ai=Yt[pe].image[wt].image;Ot?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe+1,0,0,Ai.width,Ai.height,vt,mt,Ai.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe+1,gt,Ai.width,Ai.height,0,vt,mt,Ai.data)}}else{Ot?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,vt,mt,lt[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,gt,vt,mt,lt[wt]);for(let pe=0;pe<Yt.length;pe++){const ke=Yt[pe];Ot?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe+1,0,0,vt,mt,ke.image[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,pe+1,gt,vt,mt,ke.image[wt])}}}v(A)&&A.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),pt.__version=ot.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Lt(D,A,J,ut,ot,pt){const yt=r.convert(J.format,J.colorSpace),rt=r.convert(J.type),at=E(J.internalFormat,yt,rt,J.normalized,J.colorSpace),Mt=n.get(A),B=n.get(J);if(B.__renderTarget=A,!Mt.__hasExternalTextures){const lt=Math.max(1,A.width>>pt),nt=Math.max(1,A.height>>pt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,pt,at,lt,nt,A.depth,0,yt,rt,null):e.texImage2D(ot,pt,at,lt,nt,0,yt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),_t(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,ot,B.__webglTexture,0,ce(A)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,ot,B.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(D,A,J){if(i.bindRenderbuffer(i.RENDERBUFFER,D),A.depthBuffer){const ut=A.depthTexture,ot=ut&&ut.isDepthTexture?ut.type:null,pt=S(A.stencilBuffer,ot),yt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(A),pt,A.width,A.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(A),pt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,pt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,D)}else{const ut=A.textures;for(let ot=0;ot<ut.length;ot++){const pt=ut[ot],yt=r.convert(pt.format,pt.colorSpace),rt=r.convert(pt.type),at=E(pt.internalFormat,yt,rt,pt.normalized,pt.colorSpace);_t(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(A),at,A.width,A.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(A),at,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,at,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $t(D,A,J){const ut=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ot=n.get(A.depthTexture);ot.__renderTarget=A;const pt=ut?A.depthTexture.image[0]:A.depthTexture.image;(!ot.__webglTexture||pt.width!==A.width||pt.height!==A.height)&&(pt.width=A.width,pt.height=A.height,A.depthTexture.needsUpdate=!0),ut?et(A.depthTexture,0):q(A.depthTexture,0);const yt=ot.__webglTexture,rt=ce(A),at=ut?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,Mt=A.depthTexture.format===pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===fi)_t(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,at,yt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,at,yt,0);else if(A.depthTexture.format===pi)_t(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,at,yt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,at,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(D){const A=n.get(D),J=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const ut=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ut){const ot=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ut.removeEventListener("dispose",ot)};ut.addEventListener("dispose",ot),A.__depthDisposeCallback=ot}A.__boundDepthTexture=ut}if(D.depthTexture&&!A.__autoAllocateDepthBuffer)if(J)for(let ut=0;ut<6;ut++)$t(A.__webglFramebuffer[ut],D,ut);else D.texture.mipmaps.length>0?$t(A.__webglFramebuffer[0],D,0):$t(A.__webglFramebuffer,D,0);else if(J){A.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ut]),A.__webglDepthbuffer[ut]===void 0)A.__webglDepthbuffer[ut]=i.createRenderbuffer(),ue(A.__webglDepthbuffer[ut],D,!1);else{const ot=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=A.__webglDepthbuffer[ut];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,pt)}}else if(D.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ue(A.__webglDepthbuffer,D,!1);else{const ot=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,pt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(D,A,J){const ut=n.get(D);A!==void 0&&Lt(ut.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&le(D)}function me(D){const A=D.texture,J=n.get(D),ut=n.get(A);D.addEventListener("dispose",P),w(D);const ot=D.textures,pt=D.isWebGLCubeRenderTarget===!0,yt=ot.length>1;if(yt||(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=A.version,a.memory.textures++),pt){J.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(A.mipmaps.length>0){J.__webglFramebuffer[rt]=[];for(let at=0;at<A.mipmaps.length;at++)J.__webglFramebuffer[rt][at]=i.createFramebuffer()}else J.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(A.mipmaps.length>0){J.__webglFramebuffer=[];for(let rt=0;rt<A.mipmaps.length;rt++)J.__webglFramebuffer[rt]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(yt)for(let rt=0,at=ot.length;rt<at;rt++){const Mt=n.get(ot[rt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&_t(D)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let rt=0;rt<ot.length;rt++){const at=ot[rt];J.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[rt]);const Mt=r.convert(at.format,at.colorSpace),B=r.convert(at.type),lt=E(at.internalFormat,Mt,B,at.normalized,at.colorSpace,D.isXRRenderTarget===!0),nt=ce(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,lt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,J.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(J.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,A);for(let rt=0;rt<6;rt++)if(A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)Lt(J.__webglFramebuffer[rt][at],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,at);else Lt(J.__webglFramebuffer[rt],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);v(A)?_(i.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}else if(yt){for(let rt=0,at=ot.length;rt<at;rt++){const Mt=ot[rt],B=n.get(Mt);let lt=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(lt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,B.__webglTexture),Gt(lt,Mt),Lt(J.__webglFramebuffer,D,Mt,i.COLOR_ATTACHMENT0+rt,lt,0),v(Mt)&&_(lt)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(rt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,ut.__webglTexture),Gt(rt,A),A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)Lt(J.__webglFramebuffer[at],D,A,i.COLOR_ATTACHMENT0,rt,at);else Lt(J.__webglFramebuffer,D,A,i.COLOR_ATTACHMENT0,rt,0);v(A)?_(rt):A.mipmaps.length>0&&i.texParameteri(rt,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}D.depthBuffer&&le(D)}function W(D){const A=D.textures;for(let J=0,ut=A.length;J<ut;J++){const ot=A[J];if(v(ot)&&ot.mipmapsAutoUpdate===!0){const pt=b(D),yt=n.get(ot).__webglTexture;e.bindTexture(pt,yt),_(pt),e.unbindTexture()}}}const ve=[];function jt(D){if(D.samples>0){if(_t(D)===!1){const A=D.textures,J=D.width,ut=D.height;let ot=i.COLOR_BUFFER_BIT;const pt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(D),rt=A.length>1;if(rt)for(let Mt=0;Mt<A.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Mt=0;Mt<A.length;Mt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);const B=n.get(A[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,B,0)}i.blitFramebuffer(0,0,J,ut,0,0,J,ut,ot,i.NEAREST),l===!0&&(ve.length=0,ve.push(i.COLOR_ATTACHMENT0+Mt),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&ve.push(pt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let Mt=0;Mt<A.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);const B=n.get(A[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,B,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){const A=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function ce(D){return Math.min(s.maxSamples,D.samples)}function _t(D){const A=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function _e(D){const A=a.render.frame;d.get(D)!==A&&(d.set(D,A),D.update())}function zt(D,A){const J=D.colorSpace,ut=D.format,ot=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==yr&&J!==gi&&(se.getTransfer(J)===fe?(ut!==Nn||ot!==rn)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):oe("WebGLTextures: Unsupported texture color space:",J)),A}function Ft(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=V,this.getTextureUnits=K,this.setTextureUnits=Y,this.setTexture2D=q,this.setTexture2DArray=st,this.setTexture3D=ct,this.setTextureCube=et,this.rebindTextures=xe,this.setupRenderTarget=me,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=_t,this.dispose=O}function bx(i,t){function e(n,s=gi){let r;const a=se.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===Ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===cc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===oc)return i.BYTE;if(n===lc)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===za)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===uc)return i.ALPHA;if(n===dc)return i.RGB;if(n===Nn)return i.RGBA;if(n===fi)return i.DEPTH_COMPONENT;if(n===pi)return i.DEPTH_STENCIL;if(n===mr)return i.RED;if(n===ka)return i.RED_INTEGER;if(n===mi)return i.RG;if(n===Ha)return i.RG_INTEGER;if(n===Va)return i.RGBA_INTEGER;if(n===gr||n===xr||n===_r||n===Mr)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===Ya||n===Za)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ka||n===qa||n===Ja||n===$a||n===ja||n===vr||n===Qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ka||n===qa)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ja)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===$a)return r.COMPRESSED_R11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===vr)return r.COMPRESSED_RG11_EAC;if(n===Qa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===to)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===no)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===io)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===so)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ro)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ao)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ho)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===po)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===go||n===xo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mo)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_o||n===Mo||n===Sr||n===vo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wx=`
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

}`;class Tx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ih(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new nn({vertexShader:Ex,fragmentShader:wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new On(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ax extends xi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",m=new Tx,g={},M=e.getContextAttributes();let v=null,_=null;const b=[],E=[],S=new Nt;let y=null,w=null;const T=new Cn;T.viewport=new Se;const C=new Cn;C.viewport=new Se;const P=[T,C],U=new xp;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let q=b[F];return q===void 0&&(q=new Lo,b[F]=q),q.getTargetRaySpace()},this.getControllerGrip=function(F){let q=b[F];return q===void 0&&(q=new Lo,b[F]=q),q.getGripSpace()},this.getHand=function(F){let q=b[F];return q===void 0&&(q=new Lo,b[F]=q),q.getHandSpace()};function I(F){const q=E.indexOf(F.inputSource);if(q===-1)return;const st=b[q];st!==void 0&&(st.update(F.inputSource,F.frame,c||a),st.dispatchEvent({type:F.type,data:F.inputSource}))}function z(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",Q);for(let F=0;F<b.length;F++){const q=E[F];q!==null&&(E[F]=null,b[F].disconnect(q))}L=null,O=null,m.reset();for(const F in g)delete g[F];if(t.setRenderTarget(v),f=null,u=null,h=null,s=null,_=null,Z.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(S.width,S.height,!1),w!==null){const F=w.camera;F.fov=w.fov,F.zoom=w.zoom,F.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",z),s.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(S),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,ct=null,et=null;M.depth&&(et=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=M.stencil?pi:fi,ct=M.stencil?Yi:In);const it={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(it),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Un(u.textureWidth,u.textureHeight,{format:Nn,type:rn,depthTexture:new os(u.textureWidth,u.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const st={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Un(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:rn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Z.setContext(s),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(F){for(let q=0;q<F.removed.length;q++){const st=F.removed[q],ct=E.indexOf(st);ct>=0&&(E[ct]=null,b[ct].disconnect(st))}for(let q=0;q<F.added.length;q++){const st=F.added[q];let ct=E.indexOf(st);if(ct===-1){for(let it=0;it<b.length;it++)if(it>=E.length){E.push(st),ct=it;break}else if(E[it]===null){E[it]=st,ct=it;break}if(ct===-1)break}const et=b[ct];et&&et.connect(st)}}function N(F,q){q===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(q.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let q=F.near,st=F.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(st=m.depthFar)),U.near=C.near=T.near=q,U.far=C.far=T.far=st,(L!==U.near||O!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),L=U.near,O=U.far),U.layers.mask=F.layers.mask|6,T.layers.mask=U.layers.mask&-5,C.layers.mask=U.layers.mask&-3;const ct=F.parent,et=U.cameras;N(U,ct);for(let it=0;it<et.length;it++)N(et[it],ct);U.projectionMatrix.copy(T.projectionMatrix),U.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&F.isPerspectiveCamera&&(w={camera:F,fov:F.fov,zoom:F.zoom}),V(F,U,ct)};function V(F,q,st){st===null?F.matrix.copy(q.matrixWorld):(F.matrix.copy(st.matrixWorld),F.matrix.invert(),F.matrix.multiply(q.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(q.projectionMatrix),F.projectionMatrixInverse.copy(q.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Os*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(F){l=F,u!==null&&(u.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(F){return g[F]};let K=null;function Y(F,q){if(d=q.getViewerPose(c||a),p=q,d!==null){const st=d.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let ct=!1;st.length!==U.cameras.length&&(U.cameras.length=0,ct=!0);for(let Rt=0;Rt<st.length;Rt++){const Gt=st[Rt];let Vt=null;if(f!==null)Vt=f.getViewport(Gt);else{const ft=h.getViewSubImage(u,Gt);Vt=ft.viewport,Rt===0&&(t.setRenderTargetTextures(_,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(_))}let ht=P[Rt];ht===void 0&&(ht=new Cn,ht.layers.enable(Rt),ht.viewport=new Se,P[Rt]=ht),ht.matrix.fromArray(Gt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Gt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),Rt===0&&(U.matrix.copy(ht.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ct===!0&&U.cameras.push(ht)}const et=s.enabledFeatures;if(et&&et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const Rt=h.getDepthInformation(st[0]);Rt&&Rt.isValid&&Rt.texture&&m.init(Rt,s.renderState)}if(et&&et.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let Rt=0;Rt<st.length;Rt++){const Gt=st[Rt].camera;if(Gt){let Vt=g[Gt];Vt||(Vt=new ih,g[Gt]=Vt);const ht=h.getCameraImage(Gt);Vt.sourceTexture=ht}}}}for(let st=0;st<b.length;st++){const ct=E[st],et=b[st];ct!==null&&et!==void 0&&et.update(ct,q,c||a)}K&&K(F,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),p=null}const Z=new Eh;Z.setAnimationLoop(Y),this.setAnimationLoop=function(F){K=F},this.dispose=function(){}}}const Rx=new te,eu=new Ht;eu.set(-1,0,0,0,1,0,0,0,1);function Cx(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,dh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,M,v,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),d(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,M,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Qe&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Qe&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const M=t.get(g),v=M.envMap,_=M.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(Rx.makeRotationFromEuler(_)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(eu),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=v*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function d(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qe&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const M=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lx(i,t,e,n){let s={},r={};function a(M,v){const _=v.program;n.uniformBlockBinding(M,_,s[M.id])}function o(M,v){let _=s[M.id];_===void 0&&(p(M),_=l(M),s[M.id]=_,M.addEventListener("dispose",m));const b=v.program;n.updateUBOMapping(M,b);const E=t.render.frame;r[M.id]!==E&&(c(M),r[M.id]=E)}function l(M){const v=i.createBuffer(),_=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,_,b),i.bindBuffer(i.UNIFORM_BUFFER,null),v}function c(M){const v=s[M.id],_=M.uniforms,b=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,S=_.length;E<S;E++){const y=_[E];if(Array.isArray(y))for(let w=0,T=y.length;w<T;w++)d(y[w],E,w,b);else d(y,E,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,v,_,b){if(u(M,v,_,b)===!0){const E=M.__offset,S=M.value;if(Array.isArray(S)){let y=0;for(let w=0;w<S.length;w++){const T=S[w],C=x(T,!0);h(T,M.__data,y),y+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else h(S,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,M.__data)}}function h(M,v,_){typeof M=="number"||typeof M=="boolean"?v[_]=M:M.isMatrix3?(v[_]=M.elements[0],v[_+1]=M.elements[1],v[_+2]=M.elements[2],v[_+3]=0,v[_+4]=M.elements[3],v[_+5]=M.elements[4],v[_+6]=M.elements[5],v[_+7]=0,v[_+8]=M.elements[6],v[_+9]=M.elements[7],v[_+10]=M.elements[8],v[_+11]=0):ArrayBuffer.isView(M)?v.set(M.subarray(0,v.length-_),_):M.toArray(v,_)}function u(M,v,_,b){const E=M.value,S=v+"_"+_;if(Array.isArray(E)){b[S]===void 0&&(b[S]=[]);const y=b[S];let w=!1;for(let T=0;T<E.length;T++)f(E[T],y,T)===!0&&(w=!0);return w}return f(E,b,S)}function f(M,v,_){if(v[_]===void 0)return typeof M=="number"||typeof M=="boolean"?v[_]=M:ArrayBuffer.isView(M)?v[_]=M.slice():v[_]=M.clone(),!0;{const b=v[_];if(typeof M=="number"||typeof M=="boolean"){if(b!==M)return v[_]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(b.equals(M)===!1)return b.copy(M),!0}}return!1}function p(M){const v=M.uniforms;let _=0;const b=16;for(let S=0,y=v.length;S<y;S++){const w=Array.isArray(v[S])?v[S]:[v[S]];for(let T=0,C=w.length;T<C;T++){const P=w[T],U=Array.isArray(P.value)?P.value:[P.value],L=Array.isArray(v[S])||Array.isArray(P.value);let O=_;for(let z=0,Q=U.length;z<Q;z++){const N=U[z],V=x(N,L),K=_%b,Y=K%V.boundary,Z=K+Y;_+=Y,Z!==0&&b-Z<V.storage&&(_+=b-Z),z===0&&(O=_),_+=V.storage}const I=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new I((_-O)/Float32Array.BYTES_PER_ELEMENT),P.__offset=O}}const E=_%b;return E>0&&(_+=b-E),M.__size=_,M.__cache={},this}function x(M,v){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=16,_.storage=48):M.isMatrix4?(_.boundary=16,_.storage=64):M.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(_.boundary=16,_.storage=M.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",M),v===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function m(M){const v=M.target;v.removeEventListener("dispose",m),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(const M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:g}}const Px=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gn=null;function Dx(){return Gn===null&&(Gn=new Vs(Px,16,16,mi,Sn),Gn.name="DFG_LUT",Gn.minFilter=Ze,Gn.magFilter=Ze,Gn.wrapS=Dn,Gn.wrapT=Dn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}class Ix{constructor(t={}){const{canvas:e=Xd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:f=rn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const x=f,m=new Set([Va,Ha,ka]),g=new Set([rn,In,Is,Yi,Ba,Ga]),M=new Uint32Array(4),v=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]};let b=null,E=null;const S=[],y=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let C=!1,P=null,U=null,L=null,O=null;this._outputColorSpace=Ne;let I=0,z=0,Q=null,N=-1,V=null;const K=new Se,Y=new Se;let Z=null;const F=new Ct(0);let q=0,st=e.width,ct=e.height,et=1,it=null,At=null;const Rt=new Se(0,0,st,ct),Gt=new Se(0,0,st,ct);let Vt=!1;const ht=new Ys,ft=new Xo;let xt=!1,Jt=!1;const Lt=new te,ue=new H,$t=new Se,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function me(){return Q===null?et:1}let W=n;function ve(R,k){return e.getContext(R,k)}let jt,ce,_t,_e,zt,Ft,D,A,J,ut,ot,pt,yt,rt,at,Mt,B,lt,nt,vt,mt,gt,Ot;try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hi}`),e.addEventListener("webglcontextlost",Bt,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),W===null){const k="webgl2";if(W=ve(k,R),W===null)throw ve(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(R){throw e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),oe("WebGLRenderer: "+R.message),R}function Zt(){jt=new Fm(W),jt.init(),mt=new bx(W,jt),ce=new wm(W,jt,t,mt),_t=new Sx(W,jt),ce.reversedDepthBuffer&&u&&_t.buffers.depth.setReversed(!0),U=W.createFramebuffer(),L=W.createFramebuffer(),O=W.createFramebuffer(),_e=new Bm(W),zt=new ox,Ft=new yx(W,jt,_t,zt,ce,mt,_e),D=new Um(T),A=new Sp(W),gt=new bm(W,A),J=new Om(W,A,_e,gt),ut=new km(W,J,A,gt,_e),lt=new Gm(W,ce,Ft),at=new Tm(zt),ot=new ax(T,D,jt,ce,gt,at),pt=new Cx(T,zt),yt=new cx,rt=new mx(jt),B=new ym(T,D,_t,ut,p,l),Mt=new vx(T,ut,ce),Ot=new Lx(W,_e,ce,_t),nt=new Em(W,jt,_e),vt=new zm(W,jt,_e),_e.programs=ot.programs,T.capabilities=ce,T.extensions=jt,T.properties=zt,T.renderLists=yt,T.shadowMap=Mt,T.state=_t,T.info=_e}x!==rn&&(w=new Vm(x,e.width,e.height,o,s,r));const dt=new Ax(T,W);this.xr=dt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=jt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=jt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(R){R!==void 0&&(et=R,this.setSize(st,ct,!1))},this.getSize=function(R){return R.set(st,ct)},this.setSize=function(R,k,tt=!0){if(dt.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}st=R,ct=k,e.width=Math.floor(R*et),e.height=Math.floor(k*et),tt===!0&&(e.style.width=R+"px",e.style.height=k+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(st*et,ct*et).floor()},this.setDrawingBufferSize=function(R,k,tt){st=R,ct=k,et=tt,e.width=Math.floor(R*tt),e.height=Math.floor(k*tt),this.setViewport(0,0,R,k)},this.setEffects=function(R){if(x===rn){oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let k=0;k<R.length;k++)if(R[k].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(K)},this.getViewport=function(R){return R.copy(Rt)},this.setViewport=function(R,k,tt,$){R.isVector4?Rt.set(R.x,R.y,R.z,R.w):Rt.set(R,k,tt,$),_t.viewport(K.copy(Rt).multiplyScalar(me()).round())},this.getScissor=function(R){return R.copy(Gt)},this.setScissor=function(R,k,tt,$){R.isVector4?Gt.set(R.x,R.y,R.z,R.w):Gt.set(R,k,tt,$),_t.scissor(Y.copy(Gt).multiplyScalar(me()).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(R){_t.setScissorTest(Vt=R)},this.setOpaqueSort=function(R){it=R},this.setTransparentSort=function(R){At=R},this.getClearColor=function(R){return R.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,tt=!0){let $=0;if(R){let j=!1;if(Q!==null){const bt=Q.texture.format;j=m.has(bt)}if(j){const bt=Q.texture.type,Pt=g.has(bt),St=B.getClearColor(),Tt=B.getClearAlpha(),Ut=St.r,Wt=St.g,ne=St.b;Pt?(M[0]=Ut,M[1]=Wt,M[2]=ne,M[3]=Tt,W.clearBufferuiv(W.COLOR,0,M)):(v[0]=Ut,v[1]=Wt,v[2]=ne,v[3]=Tt,W.clearBufferiv(W.COLOR,0,v))}else $|=W.COLOR_BUFFER_BIT}k&&($|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&($|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&W.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),P=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),B.dispose(),yt.dispose(),rt.dispose(),Ft.dispose(),zt.dispose(),D.dispose(),ut.dispose(),J.dispose(),gt.dispose(),Ot.dispose(),ot.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",ed),dt.removeEventListener("sessionend",nd),Gi.stop()};function Bt(R){R.preventDefault(),_c("WebGLRenderer: Context Lost."),C=!0}function Yt(){_c("WebGLRenderer: Context Restored."),C=!1;const R=_e.autoReset,k=Mt.enabled,tt=Mt.autoUpdate,$=Mt.needsUpdate,j=Mt.type;Zt(),_e.autoReset=R,Mt.enabled=k,Mt.autoUpdate=tt,Mt.needsUpdate=$,Mt.type=j}function wt(R){oe("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){const k=R.target;k.removeEventListener("dispose",pe),ke(k)}function ke(R){Ai(R),zt.remove(R)}function Ai(R){const k=zt.get(R).programs;k!==void 0&&(k.forEach(function(tt){ot.releaseProgram(tt)}),R.isShaderMaterial&&ot.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,tt,$,j,bt){k===null&&(k=le);const Pt=j.isMesh&&j.matrixWorld.determinantAffine()<0,St=wM(R,k,tt,$,j);_t.setMaterial($,Pt);let Tt=tt.index,Ut=1;if($.wireframe===!0){if(Tt=J.getWireframeAttribute(tt),Tt===void 0)return;Ut=2}const Wt=tt.drawRange,ne=tt.attributes.position;let Dt=Wt.start*Ut,ie=(Wt.start+Wt.count)*Ut;bt!==null&&(Dt=Math.max(Dt,bt.start*Ut),ie=Math.min(ie,(bt.start+bt.count)*Ut)),Tt!==null?(Dt=Math.max(Dt,0),ie=Math.min(ie,Tt.count)):ne!=null&&(Dt=Math.max(Dt,0),ie=Math.min(ie,ne.count));const De=ie-Dt;if(De<0||De===1/0)return;gt.setup(j,$,St,tt,Tt);let Me,ge=nt;if(Tt!==null&&(Me=A.get(Tt),ge=vt,ge.setIndex(Me)),j.isMesh)$.wireframe===!0?(_t.setLineWidth($.wireframeLinewidth*me()),ge.setMode(W.LINES)):ge.setMode(W.TRIANGLES);else if(j.isLine){let $e=$.linewidth;$e===void 0&&($e=1),_t.setLineWidth($e*me()),j.isLineSegments?ge.setMode(W.LINES):j.isLineLoop?ge.setMode(W.LINE_LOOP):ge.setMode(W.LINE_STRIP)}else j.isPoints?ge.setMode(W.POINTS):j.isSprite&&ge.setMode(W.TRIANGLES);if(j.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))ge.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const $e=j._multiDrawStarts,It=j._multiDrawCounts,en=j._multiDrawCount,de=Tt?A.get(Tt).bytesPerElement:1,ki=zt.get($).currentProgram.getUniforms();for(let je=0;je<en;je++)ki.setValue(W,"_gl_DrawID",je),ge.render($e[je]/de,It[je])}else if(j.isInstancedMesh)ge.renderInstances(Dt,De,j.count);else if(tt.isInstancedBufferGeometry){const $e=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,It=Math.min(tt.instanceCount,$e);ge.renderInstances(Dt,De,It)}else ge.render(Dt,De)};function td(R,k,tt,$){P!==null&&R.isNodeMaterial&&P.setObject($,R),xt===!0&&at.setState(R,tt,!1),R.transparent===!0&&R.side===Ce&&R.forceSinglePass===!1?(R.side=Qe,R.needsUpdate=!0,dr(R,k,$),R.side=di,R.needsUpdate=!0,dr(R,k,$),R.side=Ce):dr(R,k,$)}this.compile=function(R,k,tt=null){tt===null&&(tt=R),P!==null&&P.renderStart(R,k,tt),E=rt.get(tt),E.init(k),y.push(E),tt.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),R!==tt&&R.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(E.pushLight(j),j.castShadow&&E.pushShadow(j))}),E.setupLights(),P!==null&&P.updateLights(E.state.lightsArray),Jt=this.localClippingEnabled,xt=at.init(this.clippingPlanes,Jt),xt===!0&&at.setGlobalState(this.clippingPlanes,k),P!==null&&Mt.render(E.state.shadowsArray,tt,k);const $=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const bt=j.material;if(bt)if(Array.isArray(bt))for(let Pt=0;Pt<bt.length;Pt++){const St=bt[Pt];td(St,tt,k,j),$.add(St)}else td(bt,tt,k,j),$.add(bt)}),E=y.pop(),P!==null&&P.renderEnd(),$},this.compileAsync=function(R,k,tt=null){const $=this.compile(R,k,tt);return new Promise(j=>{function bt(){if($.forEach(function(Pt){const Tt=zt.get(Pt).currentProgram;(Tt===void 0||Tt.isReady())&&$.delete(Pt)}),$.size===0){j(R);return}setTimeout(bt,10)}jt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Zl=null;function bM(R){Zl&&Zl(R)}function ed(){Gi.stop()}function nd(){Gi.start()}const Gi=new Eh;Gi.setAnimationLoop(bM),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(R){Zl=R,dt.setAnimationLoop(R),R===null?Gi.stop():Gi.start()},dt.addEventListener("sessionstart",ed),dt.addEventListener("sessionend",nd),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(R,k);const tt=dt.enabled===!0&&dt.isPresenting===!0,$=w!==null&&(Q===null||tt)&&w.begin(T,Q);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(k),k=dt.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,k,Q),E=rt.get(R,y.length),E.init(k),E.state.textureUnits=Ft.getTextureUnits(),y.push(E),Lt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?ft.setFromArrayCamera(k):ht.setFromProjectionMatrix(Lt,yn,k.reversedDepth),Jt=this.localClippingEnabled,xt=at.init(this.clippingPlanes,Jt),b=yt.get(R,S.length),b.init(),S.push(b),this.info.render.frame++,dt.enabled===!0&&dt.isPresenting===!0){const Pt=T.xr.getDepthSensingMesh();Pt!==null&&Kl(Pt,k,-1/0,T.sortObjects)}Kl(R,k,0,T.sortObjects),b.finish(),P!==null&&P.updateLights(E.state.lightsArray),T.sortObjects===!0&&b.sort(it,At),xe=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,xe&&B.addToRenderList(b,R),this.info.autoReset===!0&&this.info.reset(),xt===!0&&at.beginShadows();const j=E.state.shadowsArray;if(Mt.render(j,R,k),xt===!0&&at.endShadows(),($&&w.hasRenderPass())===!1){const Pt=b.opaque,St=b.transmissive;if(E.setupLights(),k.isArrayCamera){const Tt=k.cameras;if(St.length>0)for(let Ut=0,Wt=Tt.length;Ut<Wt;Ut++){const ne=Tt[Ut];sd(Pt,St,R,ne)}xe&&B.render(R);for(let Ut=0,Wt=Tt.length;Ut<Wt;Ut++){const ne=Tt[Ut];id(b,R,ne,ne.viewport)}}else St.length>0&&sd(Pt,St,R,k),xe&&B.render(R),id(b,R,k)}Q!==null&&z===0&&(Ft.updateMultisampleRenderTarget(Q),Ft.updateRenderTargetMipmap(Q)),$&&w.end(T),R.isScene===!0&&R.onAfterRender(T,R,k),gt.resetDefaultState(),N=-1,V=null,y.pop(),y.length>0?(E=y[y.length-1],Ft.setTextureUnits(E.state.textureUnits),xt===!0&&at.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,S.pop(),S.length>0?b=S[S.length-1]:b=null,P!==null&&P.renderEnd()};function Kl(R,k,tt,$){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)tt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)E.pushLight(R),R.castShadow&&E.pushShadow(R);else if(R.isSprite){const Pt=k.isArrayCamera?ft:ht;if(!R.frustumCulled||R.intersectsFrustum(Pt)){$&&$t.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Lt);const St=ut.update(R),Tt=R.material;Tt.visible&&b.push(R,St,Tt,tt,$t.z,null,k)}}else if(R.isMesh||R.isLine||R.isPoints){const Pt=k.isArrayCamera?ft:ht;if(!R.frustumCulled||R.intersectsFrustum(Pt)){const St=ut.update(R),Tt=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),$t.copy(R.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),$t.copy(St.boundingSphere.center)),$t.applyMatrix4(R.matrixWorld).applyMatrix4(Lt)),Array.isArray(Tt)){const Ut=St.groups;for(let Wt=0,ne=Ut.length;Wt<ne;Wt++){const Dt=Ut[Wt],ie=Tt[Dt.materialIndex];ie&&ie.visible&&b.push(R,St,ie,tt,$t.z,Dt,k)}}else Tt.visible&&b.push(R,St,Tt,tt,$t.z,null,k)}}}const bt=R.children;for(let Pt=0,St=bt.length;Pt<St;Pt++)Kl(bt[Pt],k,tt,$)}function id(R,k,tt,$){const{opaque:j,transmissive:bt,transparent:Pt}=R;E.setupLightsView(tt),xt===!0&&at.setGlobalState(T.clippingPlanes,tt),$&&_t.viewport(K.copy($)),j.length>0&&ba(j,k,tt),bt.length>0&&ba(bt,k,tt),Pt.length>0&&ba(Pt,k,tt),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function sd(R,k,tt,$){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[$.id]===void 0){const Dt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[$.id]=new Un(1,1,{generateMipmaps:!0,type:Dt?Sn:rn,minFilter:Mn,samples:Math.max(4,ce.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}const bt=E.state.transmissionRenderTarget[$.id],Pt=$.viewport||K;bt.setSize(Pt.z*T.transmissionResolutionScale,Pt.w*T.transmissionResolutionScale);const St=T.getRenderTarget(),Tt=T.getActiveCubeFace(),Ut=T.getActiveMipmapLevel();T.setRenderTarget(bt),T.getClearColor(F),q=T.getClearAlpha(),q<1&&T.setClearColor(16777215,.5),T.clear(),xe&&B.render(tt);const Wt=T.toneMapping;T.toneMapping=Kn;const ne=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),E.setupLightsView($),xt===!0&&at.setGlobalState(T.clippingPlanes,$),ba(R,tt,$),Ft.updateMultisampleRenderTarget(bt),Ft.updateRenderTargetMipmap(bt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let ie=0,De=k.length;ie<De;ie++){const Me=k[ie],{object:ge,geometry:$e,material:It,group:en}=Me;if(It.side===Ce&&ge.layers.test($.layers)){const de=It.side;It.side=Qe,It.needsUpdate=!0,rd(ge,tt,$,$e,It,en),It.side=de,It.needsUpdate=!0,Dt=!0}}Dt===!0&&(Ft.updateMultisampleRenderTarget(bt),Ft.updateRenderTargetMipmap(bt))}T.setRenderTarget(St,Tt,Ut),T.setClearColor(F,q),ne!==void 0&&($.viewport=ne),T.toneMapping=Wt}function ba(R,k,tt){const $=k.isScene===!0?k.overrideMaterial:null;for(let j=0,bt=R.length;j<bt;j++){const Pt=R[j],{object:St,geometry:Tt,group:Ut}=Pt;let Wt=Pt.material;Wt.allowOverride===!0&&$!==null&&(Wt=$),St.layers.test(tt.layers)&&rd(St,k,tt,Tt,Wt,Ut)}}function rd(R,k,tt,$,j,bt){P!==null&&j.isNodeMaterial&&P.setObject(R,j),R.onBeforeRender(T,k,tt,$,j,bt),R.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(T,k,tt,$,R,bt),j.transparent===!0&&j.side===Ce&&j.forceSinglePass===!1?(j.side=Qe,j.needsUpdate=!0,T.renderBufferDirect(tt,k,$,j,R,bt),j.side=di,j.needsUpdate=!0,T.renderBufferDirect(tt,k,$,j,R,bt),j.side=Ce):T.renderBufferDirect(tt,k,$,j,R,bt),R.onAfterRender(T,k,tt,$,j,bt)}function ad(R){let k=0;for(const tt of R)tt.texture!==null&&k++;return k}function dr(R,k,tt){k.isScene!==!0&&(k=le);const $=zt.get(R),j=E.state.lights,bt=E.state.shadowsArray,Pt=j.state.version,St=ot.getParameters(R,j.state,bt,k,tt,E.state.lightProbeGridArray),Tt=ot.getProgramCacheKey(St);let Ut=$.programs;$.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?k.environment:null,$.fog=k.fog;const Wt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;$.envMap=D.get(R.envMap||$.environment,Wt),$.envMapRotation=$.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Ut===void 0&&(R.addEventListener("dispose",pe),Ut=new Map,$.programs=Ut,$.programVariants=new Map);let ne=Ut.get(Tt);if(ne!==void 0){if($.currentProgram===ne&&$.lightsStateVersion===Pt)return ld(R,St),ne}else St.uniforms=ot.getUniforms(R),P!==null&&R.isNodeMaterial&&P.build(R,tt,St),R.onBeforeCompile(St,T),ne=ot.acquireProgram(St,Tt),Ut.set(Tt,ne),$.uniforms=St.uniforms;const Dt=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Dt.clippingPlanes=at.uniform),ld(R,St),$.needsLights=AM(R),$.lightsStateVersion=Pt,$.needsLights&&(Dt.ambientLightColor.value=j.state.ambient,Dt.lightProbe.value=j.state.probe,Dt.sunLights.value=j.state.sun,Dt.sunLightShadows.value=j.state.sunShadow,Dt.directionalLights.value=j.state.directional,Dt.directionalLightShadows.value=j.state.directionalShadow,Dt.spotLights.value=j.state.spot,Dt.spotLightShadows.value=j.state.spotShadow,Dt.rectAreaLights.value=j.state.rectArea,Dt.ltc_1.value=j.state.rectAreaLTC1,Dt.ltc_2.value=j.state.rectAreaLTC2,Dt.pointLights.value=j.state.point,Dt.pointLightShadows.value=j.state.pointShadow,Dt.hemisphereLights.value=j.state.hemi,Dt.sunShadowMatrix.value=j.state.sunShadowMatrix,Dt.sunShadowCascade.value=j.state.sunShadowCascade,Dt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Dt.spotLightMatrix.value=j.state.spotLightMatrix,Dt.spotLightMap.value=j.state.spotLightMap,Dt.pointShadowMatrix.value=j.state.pointShadowMatrix),$.numLightProbeGrids=ad(E.state.lightProbeGridArray),$.currentProgram=ne,$.uniformsList=null,ne}function EM(R,k,tt,$,j){const bt=zt.get(R),Pt=bt.currentProgram.id+","+$+","+j;let St=bt.programVariants.get(Pt);return St===void 0?(St=dr(R,k,tt),bt.programVariants.set(Pt,St)):(bt.currentProgram=St,bt.uniformsList=null,bt.outputColorSpace=$,bt.toneMapping=j),St}function od(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=ra.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function ld(R,k){const tt=zt.get(R);tt.outputColorSpace=k.outputColorSpace,tt.batching=k.batching,tt.batchingColor=k.batchingColor,tt.instancing=k.instancing,tt.instancingColor=k.instancingColor,tt.instancingMorph=k.instancingMorph,tt.skinning=k.skinning,tt.morphTargets=k.morphTargets,tt.morphNormals=k.morphNormals,tt.morphColors=k.morphColors,tt.morphTargetsCount=k.morphTargetsCount,tt.numClippingPlanes=k.numClippingPlanes,tt.numIntersection=k.numClipIntersection,tt.vertexAlphas=k.vertexAlphas,tt.vertexTangents=k.vertexTangents,tt.toneMapping=k.toneMapping}function wM(R,k,tt,$,j){k.isScene!==!0&&(k=le),Ft.resetTextureUnits();const bt=k.fog,Pt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?k.environment:null,St=Q===null?T.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:se.workingColorSpace,Tt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ut=D.get($.envMap||Pt,Tt),Wt=$.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ne=!!tt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Dt=!!tt.morphAttributes.position,ie=!!tt.morphAttributes.normal,De=!!tt.morphAttributes.color;let Me=Kn;$.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Me=T.toneMapping);const ge=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,$e=ge!==void 0?ge.length:0,It=zt.get($),en=E.state.lights;if(xt===!0&&(Jt===!0||R!==V)){const we=R===V&&$.id===N;at.setState($,R,we)}let de=!1,ki=!1;$.version===It.__version?It.needsLights&&It.lightsStateVersion!==en.state.version||j.isBatchedMesh&&It.batching===!1||!j.isBatchedMesh&&It.batching===!0||j.isBatchedMesh&&It.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&It.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&It.instancing===!1||!j.isInstancedMesh&&It.instancing===!0||j.isSkinnedMesh&&It.skinning===!1||!j.isSkinnedMesh&&It.skinning===!0||j.isInstancedMesh&&It.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&It.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&It.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&It.instancingMorph===!1&&j.morphTexture!==null||It.envMap!==Ut||$.fog===!0&&It.fog!==bt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==at.numPlanes||It.numIntersection!==at.numIntersection)||It.vertexAlphas!==Wt||It.vertexTangents!==ne||It.morphTargets!==Dt||It.morphNormals!==ie||It.morphColors!==De||It.morphTargetsCount!==$e||It.numLightProbeGrids!==ad(E.state.lightProbeGridArray)?de=!0:(It.outputColorSpace!==St||It.toneMapping!==Me)&&(ki=!0):(de=!0,It.__version=$.version);let je=It.currentProgram;(de===!0||ki===!0)&&(je=ki===!0?EM($,k,j,St,Me):dr($,k,j),P&&$.isNodeMaterial&&P.onUpdateProgram($,je,It));let Ea=!1,Ri=!1,Hi=!1;const ae=je.getUniforms(),Ye=It.uniforms;if(_t.useProgram(je.program)&&(Ea=!0,Ri=!0,Hi=!0),$.id!==N&&(N=$.id,Ri=!0),Ea||V!==R){_t.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ae.setValue(W,"projectionMatrix",R.projectionMatrix),ae.setValue(W,"viewMatrix",R.matrixWorldInverse);const He=ae.map.cameraPosition;He!==void 0&&He.setValue(W,ue.setFromMatrixPosition(R.matrixWorld)),ce.logarithmicDepthBuffer&&ae.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ae.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),V!==R&&(V=R,Ri=!0,Hi=!0)}if(It.needsLights&&(en.state.sunShadowMap.length>0&&ae.setValue(W,"sunShadowMap",en.state.sunShadowMap,Ft),en.state.directionalShadowMap.length>0&&ae.setValue(W,"directionalShadowMap",en.state.directionalShadowMap,Ft),en.state.spotShadowMap.length>0&&ae.setValue(W,"spotShadowMap",en.state.spotShadowMap,Ft),en.state.pointShadowMap.length>0&&ae.setValue(W,"pointShadowMap",en.state.pointShadowMap,Ft)),j.isSkinnedMesh){ae.setOptional(W,j,"bindMatrix"),ae.setOptional(W,j,"bindMatrixInverse");const we=j.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),ae.setValue(W,"boneTexture",we.boneTexture,Ft))}j.isBatchedMesh&&(ae.setOptional(W,j,"batchingTexture"),ae.setValue(W,"batchingTexture",j._matricesTexture,Ft),ae.setOptional(W,j,"batchingIdTexture"),ae.setValue(W,"batchingIdTexture",j._indirectTexture,Ft),ae.setOptional(W,j,"batchingColorTexture"),j._colorsTexture!==null&&ae.setValue(W,"batchingColorTexture",j._colorsTexture,Ft));const Pn=tt.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&lt.update(j,tt,je),(Ri||It.receiveShadow!==j.receiveShadow)&&(It.receiveShadow=j.receiveShadow,ae.setValue(W,"receiveShadow",j.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&k.environment!==null&&(Ye.envMapIntensity.value=k.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=Dx()),Ri){if(ae.setValue(W,"toneMappingExposure",T.toneMappingExposure),It.needsLights&&TM(Ye,Hi),bt&&$.fog===!0&&pt.refreshFogUniforms(Ye,bt),pt.refreshMaterialUniforms(Ye,$,et,ct,E.state.transmissionRenderTarget[R.id]),It.needsLights&&It.numLightProbeGrids>0){const we=_;let He=0;for(const ci of E.state.lightProbeGridArray)ci.texture!==null&&(we.textures[He]=ci.texture,we.min[He]=ci.boundingBox.min,we.max[He]=ci.boundingBox.max,we.resolution[He]=ci.resolution,He++);for(const ci in we)we[ci].length=He;Ye.probesSH.value=we.textures,Ye.probesMin.value=we.min,Ye.probesMax.value=we.max,Ye.probesResolution.value=we.resolution}ra.upload(W,od(It),Ye,Ft)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ra.upload(W,od(It),Ye,Ft),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ae.setValue(W,"center",j.center),ae.setValue(W,"modelViewMatrix",j.modelViewMatrix),ae.setValue(W,"normalMatrix",j.normalMatrix),ae.setValue(W,"modelMatrix",j.matrixWorld),$.uniformsGroups!==void 0){const we=$.uniformsGroups;for(let He=0,ci=we.length;He<ci;He++){const hd=we[He];Ot.update(hd,je),Ot.bind(hd,je)}}return je}function TM(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.sunLights.needsUpdate=k,R.sunLightShadows.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function AM(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(R,k,tt){const $=zt.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),zt.get(R.texture).__webglTexture=k,zt.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:tt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){const tt=zt.get(R);tt.__webglFramebuffer=k,tt.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,tt=0){Q=R,I=k,z=tt;let $=null,j=!1,bt=!1;if(R){const St=zt.get(R);if(St.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(W.FRAMEBUFFER,St.__webglFramebuffer),K.copy(R.viewport),Y.copy(R.scissor),Z=R.scissorTest,_t.viewport(K),_t.scissor(Y),_t.setScissorTest(Z),N=-1;return}else if(St.__webglFramebuffer===void 0)Ft.setupRenderTarget(R);else if(St.__hasExternalTextures)Ft.rebindTextures(R,zt.get(R.texture).__webglTexture,zt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Wt=R.depthTexture;if(St.__boundDepthTexture!==Wt){if(Wt!==null&&zt.has(Wt)&&(R.width!==Wt.image.width||R.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(R)}}const Tt=R.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(bt=!0);const Ut=zt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ut[k])?$=Ut[k][tt]:$=Ut[k],j=!0):R.samples>0&&Ft.useMultisampledRTT(R)===!1?$=zt.get(R).__webglMultisampledFramebuffer:Array.isArray(Ut)?$=Ut[tt]:$=Ut,K.copy(R.viewport),Y.copy(R.scissor),Z=R.scissorTest}else K.copy(Rt).multiplyScalar(et).floor(),Y.copy(Gt).multiplyScalar(et).floor(),Z=Vt;if(tt!==0&&($=U),_t.bindFramebuffer(W.FRAMEBUFFER,$)&&_t.drawBuffers(R,$),_t.viewport(K),_t.scissor(Y),_t.setScissorTest(Z),j){const St=zt.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+k,St.__webglTexture,tt)}else if(bt){const St=k;for(let Tt=0;Tt<R.textures.length;Tt++){const Ut=zt.get(R.textures[Tt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Tt,Ut.__webglTexture,tt,St)}}else if(R!==null&&tt!==0){const St=zt.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,St.__webglTexture,tt)}N=-1};function cd(R){const k=zt.get(R);return(k.__readFormat!==R.format||k.__readType!==R.type)&&(k.__readFormat=R.format,k.__readType=R.type,k.__formatReadable=ce.textureFormatReadable(R.format),k.__typeReadable=ce.textureTypeReadable(R.type)),k}this.readRenderTargetPixels=function(R,k,tt,$,j,bt,Pt,St=0){if(!(R&&R.isWebGLRenderTarget)){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pt!==void 0&&(Tt=Tt[Pt],Array.isArray(Tt)&&(Tt=Tt[0])),Tt){_t.bindFramebuffer(W.FRAMEBUFFER,Tt);try{const Ut=R.textures[St],Wt=Ut.format,ne=Ut.type;R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+St);const Dt=cd(Ut);if(Dt.__formatReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-$&&tt>=0&&tt<=R.height-j&&W.readPixels(k,tt,$,j,mt.convert(Wt),mt.convert(ne),bt)}finally{const Ut=Q!==null?zt.get(Q).__webglFramebuffer:null;_t.bindFramebuffer(W.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(R,k,tt,$,j,bt,Pt,St=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pt!==void 0&&(Tt=Tt[Pt],Array.isArray(Tt)&&(Tt=Tt[0])),Tt)if(k>=0&&k<=R.width-$&&tt>=0&&tt<=R.height-j){_t.bindFramebuffer(W.FRAMEBUFFER,Tt);const Ut=R.textures[St],Wt=Ut.format,ne=Ut.type;R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+St);const Dt=cd(Ut);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,ie),W.bufferData(W.PIXEL_PACK_BUFFER,bt.byteLength,W.STREAM_READ),W.readPixels(k,tt,$,j,mt.convert(Wt),mt.convert(ne),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const De=Q!==null?zt.get(Q).__webglFramebuffer:null;_t.bindFramebuffer(W.FRAMEBUFFER,De);const Me=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Yd(W,Me,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,ie),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,bt),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(ie),W.deleteSync(Me),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,tt=0){const $=Math.pow(2,-tt),j=Math.floor(R.image.width*$),bt=Math.floor(R.image.height*$),Pt=k!==null?k.x:0,St=k!==null?k.y:0;Ft.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,tt,0,0,Pt,St,j,bt),_t.unbindTexture()},this.copyTextureToTexture=function(R,k,tt=null,$=null,j=0,bt=0){let Pt,St,Tt,Ut,Wt,ne,Dt,ie,De;const Me=R.isCompressedTexture?R.mipmaps[bt]:R.image;if(tt!==null)Pt=tt.max.x-tt.min.x,St=tt.max.y-tt.min.y,Tt=tt.isBox3?tt.max.z-tt.min.z:1,Ut=tt.min.x,Wt=tt.min.y,ne=tt.isBox3?tt.min.z:0;else{const ae=Math.pow(2,-j);Pt=Math.floor(Me.width*ae),St=Math.floor(Me.height*ae),R.isDataArrayTexture?Tt=Me.depth:R.isData3DTexture?Tt=Math.floor(Me.depth*ae):Tt=1,Ut=0,Wt=0,ne=0}$!==null?(Dt=$.x,ie=$.y,De=$.z):(Dt=0,ie=0,De=0);const ge=mt.convert(k.format),$e=mt.convert(k.type);let It;k.isData3DTexture?(Ft.setTexture3D(k,0),It=W.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Ft.setTexture2DArray(k,0),It=W.TEXTURE_2D_ARRAY):(Ft.setTexture2D(k,0),It=W.TEXTURE_2D),_t.activeTexture(W.TEXTURE0),_t.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,k.flipY),_t.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),_t.pixelStorei(W.UNPACK_ALIGNMENT,k.unpackAlignment);const en=_t.getParameter(W.UNPACK_ROW_LENGTH),de=_t.getParameter(W.UNPACK_IMAGE_HEIGHT),ki=_t.getParameter(W.UNPACK_SKIP_PIXELS),je=_t.getParameter(W.UNPACK_SKIP_ROWS),Ea=_t.getParameter(W.UNPACK_SKIP_IMAGES);_t.pixelStorei(W.UNPACK_ROW_LENGTH,Me.width),_t.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Me.height),_t.pixelStorei(W.UNPACK_SKIP_PIXELS,Ut),_t.pixelStorei(W.UNPACK_SKIP_ROWS,Wt),_t.pixelStorei(W.UNPACK_SKIP_IMAGES,ne);const Ri=R.isDataArrayTexture||R.isData3DTexture,Hi=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){const ae=zt.get(R),Ye=zt.get(k),Pn=zt.get(ae.__renderTarget),we=zt.get(Ye.__renderTarget);_t.bindFramebuffer(W.READ_FRAMEBUFFER,Pn.__webglFramebuffer),_t.bindFramebuffer(W.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let He=0;He<Tt;He++)Ri&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,zt.get(R).__webglTexture,j,ne+He),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,zt.get(k).__webglTexture,bt,De+He)),W.blitFramebuffer(Ut,Wt,Ut+Pt,Wt+St,Dt,ie,Dt+Pt,ie+St,W.DEPTH_BUFFER_BIT,W.NEAREST);_t.bindFramebuffer(W.READ_FRAMEBUFFER,null),_t.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||zt.has(R)){const ae=zt.get(R),Ye=zt.get(k);_t.bindFramebuffer(W.READ_FRAMEBUFFER,L),_t.bindFramebuffer(W.DRAW_FRAMEBUFFER,O);for(let Pn=0;Pn<Tt;Pn++)Ri?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ae.__webglTexture,j,ne+Pn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ae.__webglTexture,j),Hi?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ye.__webglTexture,bt,De+Pn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ye.__webglTexture,bt),j!==0?W.blitFramebuffer(Ut,Wt,Ut+Pt,Wt+St,Dt,ie,Dt+Pt,ie+St,W.COLOR_BUFFER_BIT,W.NEAREST):Hi?W.copyTexSubImage3D(It,bt,Dt,ie,De+Pn,Ut,Wt,Pt,St):W.copyTexSubImage2D(It,bt,Dt,ie,Ut,Wt,Pt,St);_t.bindFramebuffer(W.READ_FRAMEBUFFER,null),_t.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Hi?R.isDataTexture||R.isData3DTexture?W.texSubImage3D(It,bt,Dt,ie,De,Pt,St,Tt,ge,$e,Me.data):k.isCompressedArrayTexture?W.compressedTexSubImage3D(It,bt,Dt,ie,De,Pt,St,Tt,ge,Me.data):W.texSubImage3D(It,bt,Dt,ie,De,Pt,St,Tt,ge,$e,Me):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,bt,Dt,ie,Pt,St,ge,$e,Me.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,bt,Dt,ie,Me.width,Me.height,ge,Me.data):W.texSubImage2D(W.TEXTURE_2D,bt,Dt,ie,Pt,St,ge,$e,Me);_t.pixelStorei(W.UNPACK_ROW_LENGTH,en),_t.pixelStorei(W.UNPACK_IMAGE_HEIGHT,de),_t.pixelStorei(W.UNPACK_SKIP_PIXELS,ki),_t.pixelStorei(W.UNPACK_SKIP_ROWS,je),_t.pixelStorei(W.UNPACK_SKIP_IMAGES,Ea),bt===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&W.generateMipmap(It),_t.unbindTexture()},this.initRenderTarget=function(R){zt.get(R).__webglFramebuffer===void 0&&Ft.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ft.setTextureCube(R,0):R.isData3DTexture?Ft.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ft.setTexture2DArray(R,0):Ft.setTexture2D(R,0),_t.unbindTexture()},this.resetState=function(){I=0,z=0,Q=null,_t.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}const nu={type:"change"},ul={type:"start"},iu={type:"end"},oa=new Ur,su=new Fn,Nx=Math.cos(70*Qt.DEG2RAD),Oe=new H,sn=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dl=1e-6;class Ux extends Mp{constructor(t,e=null){super(t,e),this.state=he.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zn.ROTATE,MIDDLE:Zn.DOLLY,RIGHT:Zn.PAN},this.touches={ONE:ui.ROTATE,TWO:ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new bn,this._lastTargetPosition=new H,this._quat=new bn().setFromUnitVectors(t.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ta,this._sphericalDelta=new ta,this._scale=1,this._panOffset=new H,this._rotateStart=new Nt,this._rotateEnd=new Nt,this._rotateDelta=new Nt,this._panStart=new Nt,this._panEnd=new Nt,this._panDelta=new Nt,this._dollyStart=new Nt,this._dollyEnd=new Nt,this._dollyDelta=new Nt,this._dollyDirection=new H,this._mouse=new Nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ox.bind(this),this._onPointerDown=Fx.bind(this),this._onPointerUp=zx.bind(this),this._onContextMenu=Xx.bind(this),this._onMouseWheel=kx.bind(this),this._onKeyDown=Hx.bind(this),this._onTouchStart=Vx.bind(this),this._onTouchMove=Wx.bind(this),this._onMouseDown=Bx.bind(this),this._onMouseMove=Gx.bind(this),this._interceptControlDown=Yx.bind(this),this._interceptControlUp=Zx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=he.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nu),this.update(),this.state=he.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Oe.copy(e).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=sn:n>Math.PI&&(n-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Oe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new H(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(oa.origin.copy(this.object.position),oa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oa.direction))<Nx?this.object.lookAt(this.target):(su.setFromNormalAndCoplanarPoint(this.object.up,this.target),oa.intersectPlane(su,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>dl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dl||this._lastTargetPosition.distanceToSquared(this.target)>dl?(this.dispatchEvent(nu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?sn/60*this.autoRotateSpeed*t:sn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Oe.setFromMatrixColumn(e,0),Oe.multiplyScalar(-t),this._panOffset.add(Oe)}_panUp(t,e){this.screenSpacePanning===!0?Oe.setFromMatrixColumn(e,1):(Oe.setFromMatrixColumn(e,0),Oe.crossVectors(this.object.up,Oe)),Oe.multiplyScalar(t),this._panOffset.add(Oe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Oe.copy(s).sub(this.target);let r=Oe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Nt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Fx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Ox(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function zx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(iu),this.state=he.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Bx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=he.DOLLY;break;case Zn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=he.ROTATE}break;case Zn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(ul)}function Gx(i){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function kx(i){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(i.preventDefault(),this.dispatchEvent(ul),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(iu))}function Hx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Vx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ui.ROTATE:if(this.enableRotate===!1){this.state=he.NONE;break}this._handleTouchStartRotate(i),this.state=he.TOUCH_ROTATE;break;case ui.PAN:if(this.enablePan===!1){this.state=he.NONE;break}this._handleTouchStartPan(i),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case ui.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=he.TOUCH_DOLLY_PAN;break;case ui.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(ul)}function Wx(i){switch(this._trackPointer(i),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=he.NONE}}function Xx(i){this.enabled!==!1&&i.preventDefault()}function Yx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const fl=new Fn,la=new _p,ps=new Nt,pl=new H;class Kx extends Ux{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Zn.PAN,MIDDLE:Zn.DOLLY,RIGHT:Zn.ROTATE},this.touches={ONE:ui.PAN,TWO:ui.DOLLY_ROTATE},this._panWorldStart=new H}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;fl.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();ps.x=(t.clientX-n.left)/n.width*2-1,ps.y=-((t.clientY-n.top)/n.height)*2+1,la.setFromCamera(ps,this.object),la.ray.intersectPlane(fl,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();ps.x=(t.clientX-n.left)/n.width*2-1,ps.y=-((t.clientY-n.top)/n.height)*2+1,la.setFromCamera(ps,this.object),la.ray.intersectPlane(fl,pl)&&(pl.sub(this._panWorldStart),this._panOffset.copy(pl).negate(),this.update())}}const ca=new Ct;function G(i){return ca.set(i),[ca.r,ca.g,ca.b]}function re(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function er(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function Ge(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class ee{constructor(){X(this,"pos",[]);X(this,"nor",[]);X(this,"col",[]);X(this,"glo",[]);X(this,"ox",0);X(this,"oy",0);X(this,"oz",0);X(this,"c",1);X(this,"s",0)}get vertexCount(){return this.pos.length/3}gradientY(t,e,n,s,r){for(let a=t*3;a<this.pos.length;a+=3){const o=Qt.clamp((this.pos[a+1]-e)/(n-e),0,1);for(let l=0;l<3;l++)this.col[a+l]=s[l]+(r[l]-s[l])*o}}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,a,o,l,c,d,h=0){const u=this.wx(t,n),f=this.wz(t,n),p=this.oy+e,x=this.wx(s,a),m=this.wz(s,a),g=this.oy+r,M=this.wx(o,c),v=this.wz(o,c),_=this.oy+l,b=x-u,E=g-p,S=m-f,y=M-u,w=_-p,T=v-f;let C=E*T-S*w,P=S*y-b*T,U=b*w-E*y;const L=Math.hypot(C,P,U)||1;C/=L,P/=L,U/=L,this.pos.push(u,p,f,x,g,m,M,_,v),this.nor.push(C,P,U,C,P,U,C,P,U),this.col.push(d[0],d[1],d[2],d[0],d[1],d[2],d[0],d[1],d[2]),this.glo.push(h,h,h)}quad(t,e,n,s,r,a,o,l,c,d,h,u,f,p=0){this.tri(t,e,n,s,r,a,o,l,c,f,p),this.tri(t,e,n,o,l,c,d,h,u,f,p)}box(t,e,n,s,r,a,o,l=void 0,c=null,d=0){this.quad(t,e,a,s,e,a,s,r,a,t,r,a,o,d),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,o,d),this.quad(s,e,a,s,e,n,s,r,n,s,r,a,o,d),this.quad(t,e,n,t,e,a,t,r,a,t,r,n,o,d),l!==null&&this.quad(t,r,a,s,r,a,s,r,n,t,r,n,l??o,d),c&&this.quad(t,e,n,s,e,n,s,e,a,t,e,a,c,d)}cyl(t,e,n,s,r,a,o,l,c=null,d=0){const h=e+a;for(let u=0;u<o;u++){const f=u/o*Math.PI*2,p=(u+1)/o*Math.PI*2,x=Math.cos(f),m=Math.sin(f),g=Math.cos(p),M=Math.sin(p);r>1e-4?(this.quad(t+x*s,e,n+m*s,t+x*r,h,n+m*r,t+g*r,h,n+M*r,t+g*s,e,n+M*s,l,d),c&&this.tri(t,h,n,t+g*r,h,n+M*r,t+x*r,h,n+m*r,c,d)):this.tri(t+x*s,e,n+m*s,t,h,n,t+g*s,e,n+M*s,l,d)}}blob(t,e,n,s,r,a,o,l,c,d,h=0){const u=d??c;for(let f=0;f<l;f++){const p=f/l*Math.PI,x=(f+1)/l*Math.PI,m=Math.cos(p),g=Math.cos(x),M=Math.sin(p),v=Math.sin(x),_=er(c,u,1-(f+.5)/l);for(let b=0;b<o;b++){const E=b/o*Math.PI*2,S=(b+1)/o*Math.PI*2,y=Math.cos(E),w=Math.sin(E),T=Math.cos(S),C=Math.sin(S),P=t+y*M*s,U=e+m*r,L=n+w*M*a,O=t+T*M*s,I=n+C*M*a,z=t+y*v*s,Q=e+g*r,N=n+w*v*a,V=t+T*v*s,K=n+C*v*a;f>0&&this.tri(P,U,L,O,U,I,V,Q,K,_,h),f<l-1&&this.tri(P,U,L,V,Q,K,z,Q,N,_,h)}}}walls(t,e,n,s,r=0){const a=t.length/2,o=ml(t)>0;for(let l=0;l<a;l++){const c=(l+1)%a,d=t[l*2],h=t[l*2+1],u=t[c*2],f=t[c*2+1];o?this.quad(u,e,f,d,e,h,d,n,h,u,n,f,s,r):this.quad(d,e,h,u,e,f,u,n,f,d,n,h,s,r)}}cap(t,e,n,s=0){const r=t.length/2,a=[];for(let l=0;l<r;l++)a.push(new Nt(t[l*2],t[l*2+1]));const o=jo.triangulateShape(a,[]);for(const l of o){const c=a[l[0]],d=a[l[1]],h=a[l[2]];(d.x-c.x)*(h.y-c.y)-(d.y-c.y)*(h.x-c.x)>0?this.tri(c.x,e,c.y,h.x,e,h.y,d.x,e,d.y,n,s):this.tri(c.x,e,c.y,d.x,e,d.y,h.x,e,h.y,n,s)}}build(){const t=new Re;return t.setAttribute("position",new Te(new Float32Array(this.pos),3)),t.setAttribute("normal",new Te(new Float32Array(this.nor),3)),t.setAttribute("color",new Te(new Float32Array(this.col),3)),t.setAttribute("glow",new Te(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function ml(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const ha={value:0};function ms(i={}){const t=new Rn({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??Ce}),e=new Ct(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=ha,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>"inverloch-model",t}function nr(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=ha,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.82 * uNight;`)},i.customProgramCacheKey=()=>"inverloch-unlit",i}const qx=8192,ii=256,Jx=420,ru=2048,au=[-1,1],ou=`
uniform sampler2D uCloudMap;
uniform vec2 uCloudOffset;
uniform float uCloudCover;
uniform float uCloudFlash;
const float cloudHeight = ${Jx.toFixed(1)};

float cloudDensity(vec2 position) {
  float density = texture2D(uCloudMap, position / ${qx.toFixed(1)} - uCloudOffset).r;
  float edge = mix(0.78, 0.29, uCloudCover);
  return smoothstep(edge, edge + 0.13, density) * smoothstep(0.0, 0.08, uCloudCover);
}
`,$x=`
uniform vec3 uCloudSunDir;
uniform float uCloudShadowStrength;

float cloudSunlight(vec3 position) {
  float layerDistance = cloudHeight - position.y;
  if (layerDistance <= 0.0 || uCloudShadowStrength <= 0.0 || uCloudCover <= 0.0) return 1.0;
  vec2 projection = position.xz + layerDistance * uCloudSunDir.xz / max(uCloudSunDir.y, 0.06);
  return 1.0 - uCloudShadowStrength * cloudDensity(projection) * smoothstep(0.0, 70.0, layerDistance);
}
`;function ua(i,t,e){const n=Math.imul(i%e,374761393)^Math.imul(t%e,668265263)^Math.imul(e,1442695041),s=Math.imul(n^n>>>13,1274126177);return((s^s>>>16)>>>0)/4294967295}function gl(i,t,e){const n=Math.floor(i*e),s=Math.floor(t*e),r=i*e-n,a=t*e-s,o=r*r*(3-2*r),l=a*a*(3-2*a),c=Qt.lerp(ua(n,s,e),ua(n+1,s,e),o),d=Qt.lerp(ua(n,s+1,e),ua(n+1,s+1,e),o);return Qt.lerp(c,d,l)}function jx(){const i=new Uint8Array(ii*ii);for(let e=0;e<ii;e++)for(let n=0;n<ii;n++){const s=(n+.5)/ii,r=(e+.5)/ii,a=.67*gl(s,r,24)+.23*gl(s,r,48)+.1*gl(s,r,96);i[e*ii+n]=Math.round(255*a)}const t=new Vs(i,ii,ii,mr);return t.wrapS=t.wrapT=Ds,t.magFilter=Ze,t.minFilter=Mn,t.generateMipmaps=!0,t.needsUpdate=!0,t}class Qx{constructor(){X(this,"uniforms",{uCloudMap:{value:jx()},uCloudOffset:{value:new Nt},uCloudCover:{value:.38},uCloudFlash:{value:0},uFlashCenter:{value:new Nt}})}update(t){const e=Qt.euclideanModulo(t,ru)/ru;this.uniforms.uCloudOffset.value.set(au[0]*e,au[1]*e)}setCover(t){this.uniforms.uCloudCover.value=Qt.clamp(t,0,1)}setFlash(t){this.uniforms.uCloudFlash.value=Qt.clamp(t,0,1)}dispose(){this.uniforms.uCloudMap.value.dispose()}}const si={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},t_=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
  gl_Position = p.xyww;
}`,e_=`
${ou}
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
}`;class n_{constructor(t,e,n,s){X(this,"sun",new gp(16777215,3));X(this,"hemi",new fp(16777215,8947848,1));X(this,"sky");X(this,"horizon",{value:new Ct});X(this,"sunDir",new H);X(this,"cloudShadowStrength",{value:0});X(this,"skyUniforms");X(this,"from");X(this,"to");X(this,"t",1);X(this,"mode","day");this.renderer=t,this.water=e,this.from=this.to=si.day,this.skyUniforms={...s.uniforms,uZenith:{value:new Ct},uHorizon:this.horizon,uBelow:{value:new Ct},uSunDir:{value:new H},uSunColor:{value:new Ct},uSunGlow:{value:1},uNight:{value:0}},this.sky=new qt(new tl(1,32,16),new nn({uniforms:this.skyUniforms,vertexShader:t_,fragmentShader:e_,side:Qe,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,n>0&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n),this.sun.shadow.radius=1.5),this.apply(1)}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=si[t],this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=Qt.clamp(e*.7,90,2400),s=this.sun.shadow,r=s.camera,a=n*2/s.mapSize.x,o=Math.round(t.x/a)*a,l=Math.round(t.z/a)*a,c=n*2.4+300;this.sun.target.position.set(o,0,l),this.sun.position.set(o,0,l).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=Qt.clamp(a*1.6,.06,1.2))}setSolar(t){const e=(t%1440+1440)%1440,n=6*60,s=20.5*60;let r,a;if(e>=n&&e<=s)a=(e-n)/(s-n),r=Math.sin(Math.PI*a)*70;else{const p=((e<n?e+1440:e)-s)/(1440-(s-n));a=p<.5?1:0,r=-Math.sin(Math.PI*p)*40}const o=Qt.degToRad(110*(1-2*a)),l=Qt.degToRad(Math.max(r,5)),c=[Math.sin(o)*Math.cos(l),Math.sin(l),-Math.cos(o)*Math.cos(l)];let d;r>=25?d=si.day:r>=6?d=xl(si.golden,si.day,(r-6)/19):r>=-6?d=xl(si.night,si.golden,(r+6)/12):d=si.night;const h=Qt.clamp((2-r)/6,0,1),u=si.night.sunDir,f=[c[0]+(u[0]-c[0])*h,c[1]+(u[1]-c[1])*h,c[2]+(u[2]-c[2])*h];this.from=this.to={...d,sunDir:f},this.mode=r>=25?"day":r>=-6?"golden":"night",this.apply(1)}snapshot(){return xl(this.from,this.to,i_(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.castShadow||this.sun.position.copy(this.sunDir),this.cloudShadowStrength.value=.64*(1-Qt.smoothstep(e.night,.25,.95)),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night;const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new Ct(e.shallow),.35),ha.value=e.night,this.renderer.toneMappingExposure=e.exposure}}function i_(i){return i*i*(3-2*i)}function xl(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,a)=>new Ct(r).lerp(new Ct(a),e).getHex(),s=(r,a)=>r+(a-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}const kn=1.5;class lu{constructor(t,e,n,s,r,a,o,l,c=[]){X(this,"nx");X(this,"nz");X(this,"y");X(this,"xMin");X(this,"zMin");X(this,"xMax");X(this,"zMax");X(this,"dx");X(this,"dz");X(this,"cellX");X(this,"cellZ");if(this.raw=t,this.exposure=e,this.w=n,this.h=s,this.sizeX=r,this.sizeZ=a,this.patches=c,this.cellX=r/n,this.cellZ=a/s,this.nx=Math.floor((n-1)/o)+1,this.nz=Math.floor((s-1)/o)+1,this.dx=this.cellX*o,this.dz=this.cellZ*o,this.xMin=-r/2+this.cellX/2,this.zMin=-a/2+this.cellZ/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=l??new Float32Array(this.nx*this.nz),!l)for(let d=0;d<this.nz;d++)for(let h=0;h<this.nx;h++)this.y[d*this.nx+h]=t[d*o*n+h*o]*kn}yAt(t,e){for(const n of this.patches)if(t>=n.xMin&&t<=n.xMax&&e>=n.zMin&&e<=n.zMax)return cu(n,t,e);return this.baseYAt(t,e)}baseYAt(t,e){return cu(this,t,e)}patchOverlaps(t,e,n,s){return this.patches.some(r=>t<r.xMax&&n>r.xMin&&e<r.zMax&&s>r.zMin)}bilinear(t,e,n){let s=(e+this.sizeX/2)/this.cellX-.5,r=(n+this.sizeZ/2)/this.cellZ-.5;s<0?s=0:s>this.w-1.0001&&(s=this.w-1.0001),r<0?r=0:r>this.h-1.0001&&(r=this.h-1.0001);const a=s|0,o=r|0,l=s-a,c=r-o,d=o*this.w+a;return(t[d]*(1-l)+t[d+1]*l)*(1-c)+(t[d+this.w]*(1-l)+t[d+this.w+1]*l)*c}metresAt(t,e){return this.bilinear(this.raw,t,e)}exposureAt(t,e){return this.bilinear(this.exposure,t,e)}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}}function cu(i,t,e){let n=(t-i.xMin)/i.dx,s=(e-i.zMin)/i.dz;n<0?n=0:n>i.nx-1&&(n=i.nx-1),s<0?s=0:s>i.nz-1&&(s=i.nz-1);const r=Math.min(n|0,i.nx-2),a=Math.min(s|0,i.nz-2),o=n-r,l=s-a,c=a*i.nx+r,d=i.y[c],h=i.y[c+1],u=i.y[c+i.nx],f=i.y[c+i.nx+1];return o+l<=1?d+(h-d)*o+(u-d)*l:f+(u-f)*(1-o)+(h-f)*(1-l)}const s_=[{ends:[40013,27439,27602,20489],tie:24,anchors:[[1280,11.8],[1300,10.8],[1320,9.98],[1330,9.81],[1340,9.67],[1350,9.93],[1365,10.17],[1380,10.55],[1400,10.77]]},{ends:[-4743,-403,-2772,-122],tie:12,anchors:[[59,24.62],[74,22.63],[89,19.69],[100,17.7],[110,15.95],[120,14.19],[132,12.07],[144,10.23]]},{ends:[-30214,11968,-40013,21095],tie:25,anchors:[[1080,5.14],[1100,5.2],[1120,5.57],[1135,6.65],[1150,8.61],[1155,9.24],[1165,10.35],[1175,11.65],[1192,15],[1210,18.4],[1235,20.68],[1255,21.63]]},{ends:[-17855,6215,-16707,-2373],tie:8,anchors:[[180,13.65],[192,16],[204,18.6],[220,21.02],[244,23.53]]},{ends:[-28032,6727,-24278,8117],tie:7,anchors:[[8,11.72],[14,11.51],[23,10.28],[33,8.42],[43,6.69],[52,5.53]]},{ends:[-30103,11645,-35027,11244],tie:13,anchors:[[428,5.87],[442,7.08],[457,10.26],[475,14.18],[495,17.64],[510,19.05],[529,20.38]]}],r_=.015,hu=1.5;function _l(i){const t=Math.max(0,Math.min(1,i));return t*t*(3-2*t)}function a_(i){const t=i[5];return s_.find(({ends:e})=>e[0]===t[0]&&e[1]===t[1]&&e[2]===t[t.length-2]&&e[3]===t[t.length-1])}class o_{constructor(t,e){X(this,"start");X(this,"end");X(this,"outer");X(this,"points",[]);X(this,"slopes");X(this,"halfWidth");this.profile=e,this.halfWidth=t[3]/20,this.outer=this.halfWidth+hu+(t[0]<3?20:12);const{anchors:n,tie:s}=e;this.start=n[0][0]-s,this.end=n[n.length-1][0]+s;const r=n.slice(1).map(([l,c],d)=>(c-n[d][1])/(l-n[d][0]));this.slopes=[r[0]];for(let l=1;l<r.length;l++){const c=r[l-1],d=r[l];this.slopes.push(c*d>0?2*c*d/(c+d):0)}this.slopes.push(r[r.length-1]);const a=t[5];let o=0;for(let l=2;l<a.length;l+=2){const c=a[l-2]/10,d=a[l-1]/10,h=a[l]/10-c,u=a[l+1]/10-d,f=Math.hypot(h,u);if(f&&o+f>=this.start&&o<=this.end){const p=Math.max(this.start,o),x=Math.min(this.end,o+f);for(const m of this.points.length?[x]:[p,x])this.points.push({x:c+h*(m-o)/f,z:d+u*(m-o)/f,s:m})}o+=f}}weight(t){return _l(Math.min(t-this.start,this.end-t)/this.profile.tie)}deckLift(t,e){return e+(.11-e)*this.weight(t)}elevation(t,e){const{anchors:n}=this.profile;let s=0;for(;s+2<n.length&&t>n[s+1][0];)s++;const[r,a]=n[s],[o,l]=n[s+1],c=o-r,d=(t-r)/c;return(d<0?a+(t-r)*this.slopes[s]:d>1?l+(t-o)*this.slopes[s+1]:a+(l-a)*_l(d)+c*d*(1-d)*((1-d)*this.slopes[s]-d*this.slopes[s+1]))-Math.abs(e)*r_}ground(t,e,n,s,r=0){const a=t.baseYAt(e,n),o=this.weight(s);return a+(this.elevation(s,r)-a)*o}shoulder(t,e,n){let s=this.outer**2,r=0;for(let c=1;c<this.points.length;c++){const d=this.points[c-1],h=this.points[c],u=h.x-d.x,f=h.z-d.z,p=Math.max(0,Math.min(1,((t-d.x)*u+(e-d.z)*f)/(u*u+f*f||1))),x=(t-d.x-p*u)**2+(e-d.z-p*f)**2;x<s&&(s=x,r=d.s+(h.s-d.s)*p)}const a=this.weight(r);if(!a)return n;const o=Math.sqrt(s),l=_l((this.outer-o)/(this.outer-this.halfWidth-hu));return n+(this.elevation(r,o)-n)*a*l}}function uu(i){const t=a_(i);return t&&new o_(i,t)}function l_(i,t){const e=[];for(const s of t){const r=uu(s);if(!r||r.points.length<2)continue;const a=r.points.map(d=>d.x),o=r.points.map(d=>d.z),l=r.outer,c={i0:Math.max(0,Math.floor((Math.min(...a)-l-i.xMin)/i.dx)),i1:Math.min(i.nx-1,Math.ceil((Math.max(...a)+l-i.xMin)/i.dx)),j0:Math.max(0,Math.floor((Math.min(...o)-l-i.zMin)/i.dz)),j1:Math.min(i.nz-1,Math.ceil((Math.max(...o)+l-i.zMin)/i.dz)),grades:[r]};for(let d=0;d<e.length;){const h=e[d];if(c.i0>=h.i1||h.i0>=c.i1||c.j0>=h.j1||h.j0>=c.j1){d++;continue}c.i0=Math.min(c.i0,h.i0),c.i1=Math.max(c.i1,h.i1),c.j0=Math.min(c.j0,h.j0),c.j1=Math.max(c.j1,h.j1),c.grades.push(...h.grades),e.splice(d,1),d=0}e.push(c)}const n=Math.ceil(Math.max(i.dx,i.dz)/3);return e.map(({i0:s,i1:r,j0:a,j1:o,grades:l})=>{const c=i.xMin+s*i.dx,d=i.zMin+a*i.dz,h=i.xMin+r*i.dx,u=i.zMin+o*i.dz,f=(r-s)*n+1,p=(o-a)*n+1,x=i.dx/n,m=i.dz/n,g=new Float32Array(f*p);for(let M=0;M<p;M++)for(let v=0;v<f;v++){const _=c+v*x,b=d+M*m,E=i.baseYAt(_,b);let S=E;if(v>0&&v<f-1&&M>0&&M<p-1)for(const y of l)S+=y.shoulder(_,b,E)-E;g[M*f+v]=S}return{i0:s,i1:r,j0:a,j1:o,xMin:c,zMin:d,xMax:h,zMax:u,nx:f,nz:p,dx:x,dz:m,y:g}})}const gs=128;function c_(i,t,e,n,s){const{nx:r,nz:a}=i,o=Math.min(gs+1,r-t),l=Math.min(gs+1,a-e),c=new Float32Array(o*l*3),d=new Float32Array(o*l*3),h=new Float32Array(o*l*2);for(let p=e;p<e+l;p++)for(let x=t;x<t+o;x++){const m=(p-e)*o+x-t,g=i.xMin+x*i.dx,M=i.zMin+p*i.dz;c[m*3]=g,c[m*3+1]=i.y[p*r+x],c[m*3+2]=M,h[m*2]=(g+n.sizeX/2)/n.sizeX,h[m*2+1]=1-(M+n.sizeZ/2)/n.sizeZ;const v=i!==n&&(x===0||p===0||x===r-1||p===a-1),_=v?(n.baseYAt(g+n.dx,M)-n.baseYAt(g-n.dx,M))/(2*n.dx):(i.y[p*r+Math.min(x+1,r-1)]-i.y[p*r+Math.max(x-1,0)])/(2*i.dx),b=v?(n.baseYAt(g,M+n.dz)-n.baseYAt(g,M-n.dz))/(2*n.dz):(i.y[Math.min(p+1,a-1)*r+x]-i.y[Math.max(p-1,0)*r+x])/(2*i.dz),E=Math.hypot(_,1,b);d[m*3]=-_/E,d[m*3+1]=1/E,d[m*3+2]=-b/E}const u=new Uint16Array((o-1)*(l-1)*6);let f=0;for(let p=0;p<l-1;p++)for(let x=0;x<o-1;x++){if(s.some(_=>t+x>=_.i0&&t+x<_.i1&&e+p>=_.j0&&e+p<_.j1))continue;const m=p*o+x,g=m+1,M=m+o,v=M+1;u[f++]=m,u[f++]=M,u[f++]=g,u[f++]=g,u[f++]=M,u[f++]=v}return{pos:c,nor:d,uv:h,idx:f===u.length?u:u.slice(0,f)}}function h_(i){const t=[];for(const e of[i,...i.patches])for(let n=0;n<e.nz-1;n+=gs)for(let s=0;s<e.nx-1;s+=gs){const r=e===i?i.patches.filter(a=>s<a.i1&&s+gs>a.i0&&n<a.j1&&n+gs>a.j0):[];t.push(c_(e,s,n,i,r))}return t}const Ml=10,u_=5,xs=4,d_=3;function da(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Int16Array(e.buffer,0,e.length>>1)}async function f_(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,a=0,o=0,l=0;const c=[];for(;n<t.length;){const x=e.getUint32(n),m=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(m==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),a=t[n+16],o=t[n+17],l=t[n+20];else if(m==="IDAT")c.push(t.subarray(n+8,n+8+x));else if(m==="IEND")break;n+=12+x}if(a!==8||o!==2&&o!==6||l)throw new Error("Unsupported terrain image format");const d=o===2?3:4,h=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),u=new Uint8Array(await new Response(h).arrayBuffer()),f=s*d,p=new Uint8Array(f*r);for(let x=0;x<r;x++){const m=u[x*(f+1)],g=x*(f+1)+1,M=x*f;for(let v=0;v<f;v++){const _=v>=d?p[M+v-d]:0,b=x>0?p[M-f+v]:0,E=v>=d&&x>0?p[M-f+v-d]:0;let S=u[g+v];if(m===1)S+=_;else if(m===2)S+=b;else if(m===3)S+=_+b>>1;else if(m===4){const y=Math.abs(b-E),w=Math.abs(_-E),T=Math.abs(_+b-2*E);S+=y<=w&&y<=T?_:w<=T?b:E}p[M+v]=S&255}}return{width:s,height:r,channels:d,data:p}}async function p_(i,t,e){const[n,s]=await Promise.all([fetch(i.town,{signal:e}).then(u=>{if(!u.ok)throw new Error("Could not load the town data");return u.json()}).then(u=>(t("Streets and buildings"),u)),fetch(i.height,{signal:e}).then(u=>{if(!u.ok)throw new Error("Could not load the terrain");return u.arrayBuffer()}).then(f_).then(u=>(t("Terrain"),u))]);if(e.aborted)throw e.reason;const{meta:r}=n,a=s.width*s.height,o=new Float32Array(a),l=new Float32Array(a),c=s.channels;for(let u=0;u<a;u++)o[u]=(s.data[u*c]<<8|s.data[u*c+1])/r.heightScale-r.heightOffset,l[u]=s.data[u*c+2]/255;const d=new lu(o,l,r.grid[0],r.grid[1],r.size[0],r.size[1],i.terrainStep),h=l_(d,n.roads);return d.patches.push(...h),{town:{...n,houses:da(n.houses),cabins:da(n.cabins),cars:da(n.cars),trees:da(n.trees)},heights:o,exposure:l,surface:d.y,terrainPatches:h,terrainTiles:h_(d)}}async function m_(i,t,e,n,s){const r=new Set,a=d=>{s.aborted||r.has(d)||(r.add(d),e(r.size/4,d))};e(0,"Fetching map data");const o={town:new URL(i.town,document.baseURI).href,height:new URL(i.height,document.baseURI).href,terrainStep:t},l=n.run({kind:"world",source:o},()=>p_(o,a,s),s,a),c=new dp().loadAsync(i.ground).then(d=>(a("Ground texture"),d));try{const[d,h]=await Promise.all([l,c]);if(s.aborted)throw s.reason;return h.colorSpace=Ne,h.anisotropy=8,h.generateMipmaps=!0,h.minFilter=Mn,a("Building the model"),{...d,ground:h}}catch(d){throw c.then(h=>h.dispose(),()=>{}),d}}const vl=[["24",[-1702,305.08,12.22,9.68,-.7524],1,2,7232070,12103050,"v","o"],["22",[-1686.64,316,11.46,8.62,-.3855],2,1,9344923,13224902,"b","o"],["22 (garage)",[-1679.45,321.49,4.21,3.67,-.4978],1,3,9344923,13224902,"","t"],["20",[-1668.03,323.49,7.44,11.59,-.0907],1,0,13018492,10722704,"g","o"],["18",[-1645.61,335.05,11.19,8.31,-.346],1,0,14206627,9145997,"","o"],["16",[-1616.02,330.47,14.65,10.49,-.4859],1,2,13485749,11971464,"","o"],["14",[-1610.3,354.63,11.28,9.08,-.3794,-1609.54,344.81,5.42,9.72,-.3794],1,1,15328729,8079926,"","o"],["14A",[-1594.08,360.97,8.66,9.66,-.4636],1,2,14275006,12365706,"","o"],["10",[-1572.46,363.32,13.65,23.59,-.3996],1,0,14865590,9409683,"g","o"],["outbuilding at 8",[-1563.96,372.87,7.3,6.68,-.4275],1,0,14078146,13947340,"","s"],["8",[-1556.98,362.95,8.83,17.59,-.4512,-1554.25,370.09,2.32,7.12,-.4512],1,3,15526108,15000798,"","o"],["6",[-1542.81,380.79,14.34,8.58,-.3577,-1539.06,376.26,10.48,2.55,-.3577],1,2,15328470,14869212,"","o"],["4",[-1530.34,391.35,11.21,5.66,.0312,-1528.02,387.1,6.31,2.71,.0312],1,1,10134438,14014161,"","o"],["2",[-1509.87,393.04,12.04,8.58,-.3975,-1510.39,386.54,6.05,3,-.3975],1,1,15262678,14474454,"","o"],["29",[-1729.27,353.38,8.8,16.67,2.8003],1,1,14209989,14803419,"","o"],["27",[-1712.88,352.46,13.74,8.15,2.847,-1712.42,359,9.08,4.1,2.847],1,0,13222836,9277840,"v","o"],["25",[-1703.96,376.48,9.87,17.42,2.8565],1,0,15129535,10135434,"v","o"],["23",[-1683.5,379.63,11,25,2.6798],1,2,15789800,15000798,"","t"],["21",[-1665.11,377.41,10.66,13.24,2.7699],1,0,12240814,9409425,"v","o"],["17",[-1639.74,395.06,10.25,9.08,2.7085],2,3,15921644,15263970,"","o"],["outbuilding at 13",[-1629.65,418.37,4.54,7.23,2.9043],1,0,14078146,9342090,"","s"],["15",[-1627.03,407.09,11.04,13.86,2.8101,-1621.08,400.52,4.06,2.45,2.8101],1,3,15724006,14869212,"","o"],["13",[-1617.09,414.46,6.19,22.3,2.6721,-1614.57,423.97,6.93,7.63,2.6721],1,0,14209730,8358524,"","o"],["9",[-1574.55,442.34,11.72,14.88,2.8379],1,0,14932676,12628620,"","o"],["7",[-1559.58,439.94,8.54,11.74,2.8311],1,3,14275520,9412735,"","o"],["outbuilding",[-1540.1,440.05,7.53,5.25,2.5613],1,0,14078146,11313563,"","s"],["5",[-1526.07,445.23,16.31,7.93,2.7377],1,0,13617336,9211790,"","o"]],du=[-1592.2,410.8],ir=[-1744,317.6],sr=[-1495,439.1],g_=45;function fu(i,t,[e,n,s,r]){const a=s-e,o=r-n,l=a*a+o*o||1,c=Math.max(0,Math.min(1,((i-e)*a+(t-n)*o)/l));return Math.hypot(i-e-a*c,t-n-o*c)}const pu=new WeakMap;function mu(i){let t=pu.get(i);if(t)return t;const e=[],n=[],s=[Math.min(ir[0],sr[0])-120,Math.min(ir[1],sr[1])-120],r=[Math.max(ir[0],sr[0])+120,Math.max(ir[1],sr[1])+120];for(const a of i.roads){if(a[0]>4)continue;const o=i.names[a[4]]??"",l=a[5];for(let c=0;c+3<l.length;c+=2){const d=[l[c]/10,l[c+1]/10,l[c+2]/10,l[c+3]/10];if(Math.max(d[0],d[2])<s[0]||Math.min(d[0],d[2])>r[0]||Math.max(d[1],d[3])<s[1]||Math.min(d[1],d[3])>r[1])continue;const h=(d[0]+d[2])/2;(o==="Norman Road"&&h>=ir[0]-1&&h<=sr[0]+1?e:n).push(d)}}return t=(a,o)=>{if(a<s[0]||a>r[0]||o<s[1]||o>r[1]||!e.length||Math.hypot(a-du[0],o-du[1])<24)return!1;let l=1/0,c=1/0;for(const d of e)l=Math.min(l,fu(a,o,d));if(l>g_)return!1;for(const d of n)c=Math.min(c,fu(a,o,d));return l<c},pu.set(i,t),t}function x_(i,t,e=1.5){for(const[,n]of vl)for(let s=0;s<n.length;s+=5){const[r,a,o,l,c]=n.slice(s,s+5),d=i-r,h=t-a;if(d*d+h*h>400)continue;const u=Math.cos(c),f=Math.sin(c),p=d*u-h*f,x=d*f+h*u;if(Math.abs(p)<o/2+e&&Math.abs(x)<l/2+e)return!0}return!1}function Hn(i,t,e,n,s){return[i.wx(t,e),i.wz(t,e),i.wx(n,e),i.wz(n,e),i.wx(n,s),i.wz(n,s),i.wx(t,s),i.wz(t,s)]}function Vn(i,t,e,n,s,r,a,o){i.box(e-s,r,n-s,e+s,a,n+s,o,null),t==null||t.circles.push([i.wx(e,n),i.wz(e,n),s*Math.SQRT2])}const fa=[15921126,15261640,13619920,11120043,12110550,11845800,14272936,5988452,11036494,14205088,15327150,16448250].map(G),Ei=[15000277,12435386,8948618,4934726,3487290,6957594,8160360,3555666,11888447,11644323].map(G),We=G(3163994),rr=[7031348,3098712,9056042,15658730,4151878].map(G),_s=G(9138002),ln=G(16053230),pa=G(12171184),ma=G(1846090),gu=[15327951,3099196,2504783,8007210,3816770,13214282,5209226].map(G);function Sl(i,t,e,n,s,r){const a=re(r,.9);if(t>=e){const o=t-e;i.quad(-t,n,e,t,n,e,o,n+s,0,-o,n+s,0,r),i.quad(t,n,-e,-t,n,-e,-o,n+s,0,o,n+s,0,r),i.tri(t,n,e,t,n,-e,o,n+s,0,a),i.tri(-t,n,-e,-t,n,e,-o,n+s,0,a)}else{const o=e-t;i.quad(t,n,e,t,n,-e,0,n+s,-o,0,n+s,o,r),i.quad(-t,n,-e,-t,n,e,0,n+s,o,0,n+s,-o,r),i.tri(-t,n,e,t,n,e,0,n+s,o,a),i.tri(t,n,-e,-t,n,-e,0,n+s,-o,a)}}function Oi(i,t,e,n,s,r,a,o){const l=t/2,c=e/2;if(t>=e){const h=c*s;return i.quad(-l-r,n-r*s,c+r,l+r,n-r*s,c+r,l+r,n+h,0,-l-r,n+h,0,a),i.quad(l+r,n-r*s,-c-r,-l-r,n-r*s,-c-r,-l-r,n+h,0,l+r,n+h,0,a),i.tri(l,n,c,l,n,-c,l,n+h,0,o),i.tri(-l,n,-c,-l,n,c,-l,n+h,0,o),h}const d=l*s;return i.quad(l+r,n-r*s,c+r,l+r,n-r*s,-c-r,0,n+d,-c-r,0,n+d,c+r,a),i.quad(-l-r,n-r*s,-c-r,-l-r,n-r*s,c+r,0,n+d,c+r,0,n+d,-c-r,a),i.tri(-l,n,c,l,n,c,0,n+d,c,o),i.tri(l,n,-c,-l,n,-c,0,n+d,-c,o),d}function ar(i,t,e,n,s,r,a,o,l){const c=t/2,d=e/2,h=n+s,u=n+r,f=(h-u)/e;i.quad(-c-a,h+a*f,d+a,c+a,h+a*f,d+a,c+a,u-a*f,-d-a,-c-a,u-a*f,-d-a,o),i.quad(-c,n,d,c,n,d,c,h,d,-c,h,d,l),i.quad(c,n,d,c,n,-d,c,u,-d,c,h,d,l),i.quad(-c,n,-d,-c,n,d,-c,h,d,-c,u,-d,l),i.quad(c,n,-d,-c,n,-d,-c,u,-d,c,u,-d,l)}const fn=.05;function pn(i,t,e,n,s,r,a,o=0){const l=t/2+fn;i.quad(e,s,l,n,s,l,n,r,l,e,r,l,a,o)}function xu(i,t,e,n,s,r,a,o=0){const l=-t/2-fn;i.quad(n,s,l,e,s,l,e,r,l,n,r,l,a,o)}function yl(i,t,e,n,s,r,a,o=0){const l=t/2+fn;i.quad(l,s,n,l,s,e,l,r,e,l,r,n,a,o)}function bl(i,t,e,n,s,r,a,o=0){const l=-t/2-fn;i.quad(l,s,e,l,s,n,l,r,n,l,r,e,a,o)}function ga(i,t,e,n){let s=1/0,r=-1/0;for(const[a,o]of[[-e,-n],[e,-n],[e,n],[-e,n],[0,0]]){const l=i.yAt(t.wx(a,o),t.wz(a,o));l<s&&(s=l),l>r&&(r=l)}return{lo:s,hi:r}}function __(i,t,e,n,s,r,a,o,l,c,d,h,u){i.frame(e,0,n,a);const f=ga(t,i,s/2,r/2),p=f.hi+.18;i.frame(e,p,n,a);const x=fa[c%fa.length],m=Ei[d%Ei.length],g=o===2?5.5:2.85,M=s/2,v=r/2,_=re(x,.7);i.box(-M,f.lo-p-.3,-v,M,0,v,_,null),i.box(-M,0,-v,M,g,v,x,l===3?re(m,1):null),u.polygons.push(Hn(i,-M,-v,M,v));let b=g;if(l===0){const w=Math.min(M,v)+.5;Sl(i,M+.5,v+.5,g,w*.44,m),b=g+w*.44}else l===1?b=g+Oi(i,s,r,g,.5,.4,m,x):l===2?(ar(i,s,r,g,1.35,.25,.5,m,x),pn(i,r,-M+.5,M-.5,g+.25,g+1.05,We,h()<.5?1:0),b=g+1.4):(i.box(-M-.15,g,-v-.15,M+.15,g+.3,v+.15,re(x,.92),m),b=g+.3);const E=rr[Math.floor(h()*rr.length)];for(let y=0;y<o;y++){const w=y*2.75+.85,T=w+1.3,C=Math.max(2,Math.floor(s/3.2)),P=y===0?Math.floor(h()*C):-1;for(let O=0;O<C;O++){const I=-M+(O+.5)/C*s;O===P?pn(i,r,I-.5,I+.5,0,2.1,E):pn(i,r,I-.85,I+.85,w,T,We,h()<.55?1:0)}const U=Math.max(1,Math.floor(s/3.8));for(let O=0;O<U;O++){const I=-M+(O+.5)/U*s;xu(i,r,I-.75,I+.75,w,T,We,h()<.5?1:0)}const L=Math.max(1,Math.floor(r/4.2));for(let O=0;O<L;O++){const I=-v+(O+.5)/L*r;yl(i,s,I-.7,I+.7,w,T,We,h()<.45?1:0),bl(i,s,I-.7,I+.7,w,T,We,h()<.45?1:0)}}const S=h();if(o===1&&S<.36){const y=M*(.6+h()*.4),w=1.9;i.box(-y,-.12,v,y,.02,v+w,_s),i.quad(-y-.2,2.3,v+w+.2,y+.2,2.3,v+w+.2,y+.2,2.7,v,-y-.2,2.7,v,re(m,.93));const T=Math.max(2,Math.round(y*2/3));for(let C=0;C<=T;C++){const P=-y+C/T*y*2;Vn(i,u,P,v+w-.06,.06,0,2.32,ln)}}else if(o===2&&S<.5){const y=M*(.55+h()*.45),w=2;i.box(-y,2.62,v,y,2.78,v+w,pa,_s,re(pa,.8));const T=h()<.5?G(10469580):ln;i.box(-y,2.78,v+w-.05,y,3.75,v+w,T,null),i.box(-y,2.78,v,-y+.05,3.75,v+w,T,null),i.box(y-.05,2.78,v,y,3.75,v+w,T,null);for(const C of[-y+.1,y-.1])Vn(i,u,C,v+w-.12,.08,0,2.62,ln);h()<.5&&i.quad(-y-.2,5.05,v+w+.2,y+.2,5.05,v+w+.2,y+.2,5.4,v,-y-.2,5.4,v,re(m,.93))}if(h()<.1&&l<=1){const y=(h()-.5)*M,w=(h()-.5)*v*.6;i.box(y-.32,g,w-.32,y+.32,b+.55,w+.32,G(10116936))}if(h()<.24&&l<=1&&M_(i,s,r,g,a,l,h),h()<.15){const y=(h()<.5?-1:1)*(M+1.25),w=-v+1.3;i.cyl(y,f.hi-p,w,1.05,1.05,2.1,8,h()<.5?G(9347975):G(12370625),G(11120814)),u.circles.push([i.wx(y,w),i.wz(y,w),1.05])}}function M_(i,t,e,n,s,r,a){const o=t/2,l=e/2,c=r===0?.5:.4,d=.22,h=.74,u=.09;if(t>=e){const f=l+c,p=r===0?f*.44:l*.5*(1+c/l),x=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?o-l:o)*.7)*(.6+a()*.4),g=Math.cos(s)<0,M=g?1:-1,v=M*f*(1-d),_=M*f*(1-h),b=x+p*d+u,E=x+p*h+u;g?i.quad(-m,b,v,m,b,v,m,E,_,-m,E,_,ma):i.quad(m,b,v,-m,b,v,-m,E,_,m,E,_,ma)}else{const f=o+c,p=r===0?f*.44:o*.5*(1+c/o),x=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?l-o:l)*.7)*(.6+a()*.4),g=Math.sin(s)>0,M=g?1:-1,v=M*f*(1-d),_=M*f*(1-h),b=x+p*d+u,E=x+p*h+u;g?i.quad(v,b,m,v,b,-m,_,E,-m,_,E,m,ma):i.quad(v,b,-m,v,b,m,_,E,m,_,E,-m,ma)}}const v_=G(9075302);function S_(i,t,e,n,s){const[,r,a,o,l,c,d]=e;let h=-1/0,u=1/0;for(let p=0;p<r.length;p+=5){const[x,m,g,M,v]=r.slice(p,p+5);i.frame(x,0,m,v);const _=Hn(i,-g/2,-M/2,g/2,M/2);n.push(_),s.polygons.push(_);const b=ga(t,i,g/2,M/2);h=Math.max(h,b.hi),u=Math.min(u,b.lo)}const f=h+.18;for(let p=0;p<r.length;p+=5)y_(i,f,u,r.slice(p,p+5),a,o,l,c,p===0?d:"",p===0,s)}function y_(i,t,e,[n,s,r,a,o],l,c,d,h,u,f,p){const x=Ge(Math.round(n*31+s*17)>>>0);i.frame(n,t,s,o);const m=G(d),g=G(h),M=l===2?5.5:2.85,v=r/2,_=a/2;if(i.box(-v,e-t-.3,-_,v,0,_,re(m,.7),null),i.box(-v,0,-_,v,M,_,m,c===3?g:null),c===0){const w=Math.min(v,_)+.5;Sl(i,v+.5,_+.5,M,w*.44,g)}else c===1?Oi(i,r,a,M,.5,.4,g,m):c===2?ar(i,r,a,M,1.1,.2,.5,g,m):i.box(-v-.15,M,-_-.15,v+.15,M+.3,_+.15,re(m,.92),g);if(r<5||a<3)return;const b=u.includes("g")?Math.min(4.8,r*.42):0;b&&pn(i,a,v-.4-b,v-.4,0,2.2,v_);const E=-v,S=v-(b?b+.8:0);for(let y=0;y<l;y++){const w=y*2.75+.85,T=w+1.3,C=Math.max(2,Math.floor((S-E)/3.2));for(let L=0;L<C;L++){const O=E+(L+.5)/C*(S-E);f&&y===0&&L===C-1?pn(i,a,O-.5,O+.5,0,2.1,rr[0]):pn(i,a,O-.85,O+.85,w,T,We,x()<.5?1:0)}const P=Math.max(1,Math.floor(r/3.8));for(let L=0;L<P;L++){const O=-v+(L+.5)/P*r;xu(i,a,O-.75,O+.75,w,T,We,x()<.5?1:0)}const U=Math.max(1,Math.floor(a/4.2));for(let L=0;L<U;L++){const O=-_+(L+.5)/U*a;yl(i,r,O-.7,O+.7,w,T,We,x()<.45?1:0),bl(i,r,O-.7,O+.7,w,T,We,x()<.45?1:0)}}if(u.includes("v")){const y=Math.min(v-.3,(S-E)/2),w=(E+S)/2,T=2.2;i.box(w-y,-.12,_,w+y,.02,_+T,_s),i.quad(w-y-.2,2.3,_+T+.2,w+y+.2,2.3,_+T+.2,w+y+.2,2.7,_,w-y-.2,2.7,_,re(g,.93));const C=Math.max(2,Math.round(y*2/3));for(let P=0;P<=C;P++){const U=w-y+P/C*y*2;Vn(i,p,U,_+T-.06,.06,0,2.32,ln)}}if(u.includes("b")&&l===2){const y=v*.8,w=1.8;i.box(-y,2.62,_,y,2.78,_+w,pa,_s,re(pa,.8)),i.box(-y,2.78,_+w-.05,y,3.75,_+w,ln,null),i.box(-y,2.78,_,-y+.05,3.75,_+w,ln,null),i.box(y-.05,2.78,_,y,3.75,_+w,ln,null);for(const T of[-y+.1,y-.1])Vn(i,p,T,_+w-.12,.08,0,2.62,ln)}}function b_(i,t,e,n,s,r,a,o,l,c,d){i.frame(e,0,n,a);const h=ga(t,i,s/2,r/2);i.frame(e,h.hi+.05,n,a);const u=[G(14275778),G(9083526),G(12041145),G(7305842)][l%4],f=Ei[c%Ei.length],p=2.4,x=s/2,m=r/2;i.box(-x,h.lo-h.hi-.3,-m,x,p,m,u,null),d.polygons.push(Hn(i,-x,-m,x,m)),o===1?Oi(i,s,r,p,.32,.2,f,u):ar(i,s,r,p,.6,.1,.2,f,u),pn(i,r,-x*.72,x*.72,0,2.05,re(u,1.12))}const xa=[14243375,3112880,6266970,14725690,9134e3,4170656,14252591,4878261].map(G);function E_(i,t,e,n,s,r,a,o,l){const c={0:[8,4.2],1:[6.4,4.8],2:[3.6,3.6],3:[10.5,7.5]},[d,h]=c[r];i.frame(e,0,n,s);const u=ga(t,i,d/2,h/2);i.frame(e,u.hi+.05,n,s);const f=u.lo-u.hi-.3;if(r===0){const p=[G(15129798),G(12175305),G(13219994),G(10465434)][a%4],x=Ei[(a*3+1)%Ei.length];i.box(-4,f,-2.1,4,.35,2.1,re(p,.6),null),i.box(-4,.35,-2.1,4,2.75,2.1,p,null),l.polygons.push(Hn(i,-4,-2.1,4,2.1)),Oi(i,8,4.2,2.75,.42,.35,x,p),i.box(-3.2,.2,2.1,1.2,.35,3.7,_s),i.box(-3.2,.35,3.62,1.2,1.25,3.7,ln,null),l.polygons.push(Hn(i,-3.2,3.62,1.2,3.7)),pn(i,4.2,-2.8,-1.2,1.2,2.3,We,o()<.5?1:0),pn(i,4.2,-.4,.5,.35,2.4,rr[a%rr.length]),pn(i,4.2,1.4,3.2,1.2,2.3,We,o()<.5?1:0)}else if(r===1){const p=xa[a%xa.length];i.box(-2.9,.45,-2.3,2.9,2.55,-.1,ln,G(15263972),G(9079432)),i.box(-2.92,1.05,-2.32,2.92,1.3,-.08,p,null),i.box(-1.4,0,-2.2,-.8,.5,-.2,G(2763308)),i.box(.8,0,-2.2,1.4,.5,-.2,G(2763308)),pn(i,-.2,-2.2,-1,1.45,2.15,We,o()<.4?1:0),i.box(-2.6,0,-.1,2.6,2,2.3,er(p,ln,.72),null),l.polygons.push(Hn(i,-2.9,-2.3,2.9,-.1),Hn(i,-2.6,-.1,2.6,2.3)),i.quad(-2.7,2,2.4,2.7,2,2.4,2.7,2.5,-.1,-2.7,2.5,-.1,er(p,ln,.55))}else if(r===2){const p=xa[a%xa.length],x=1.75,m=6,g=[];i.blob(0,0,0,x,1.55,x,m,4,re(p,.85),p);for(let M=0;M<m;M++){const v=M/m*Math.PI*2,_=x*Math.cos(v),b=x*Math.sin(v);g.push(i.wx(_,b),i.wz(_,b))}l.polygons.push(g)}else{const p=G(14209732),x=G(5922659);i.box(-5.25,f,-3.75,5.25,3,3.75,p,null),l.polygons.push(Hn(i,-5.25,-3.75,5.25,3.75)),ar(i,10.5,7.5,3,1.5,.2,.7,x,G(9072466)),pn(i,7.5,-4.4,4.4,.3,2.6,We,o()<.6?1:0),i.box(-5.25,.05,3.75,5.25,.25,6.2,_s),yl(i,10.5,-2,2,.9,2.3,We,o()<.5?1:0),bl(i,10.5,-2,2,.9,2.3,We,o()<.5?1:0)}}function w_(i){const t=i.length/2;let e={cx:0,cz:0,w:0,d:0,heading:0,area:1/0};for(let n=0;n<t;n++){const s=(n+1)%t;let r=i[s*2]-i[n*2],a=i[s*2+1]-i[n*2+1];const o=Math.hypot(r,a);if(o<.5)continue;r/=o,a/=o;let l=1/0,c=-1/0,d=1/0,h=-1/0;for(let f=0;f<t;f++){const p=i[f*2],x=i[f*2+1],m=p*r+x*a,g=-p*a+x*r;m<l&&(l=m),m>c&&(c=m),g<d&&(d=g),g>h&&(h=g)}const u=(c-l)*(h-d);if(u<e.area){const f=(l+c)/2,p=(d+h)/2;e={cx:f*r-p*a,cz:f*a+p*r,w:c-l,d:h-d,heading:Math.atan2(-a,r),area:u}}}return e}function T_(i,t){const e=i.length/2,n=ml(i)>0?1:-1,s=[];for(let r=0;r<e;r++){const a=(r+e-1)%e,o=(r+1)%e;let l=i[r*2]-i[a*2],c=i[r*2+1]-i[a*2+1],d=i[o*2]-i[r*2],h=i[o*2+1]-i[r*2+1];const u=Math.hypot(l,c)||1,f=Math.hypot(d,h)||1;l/=u,c/=u,d/=f,h/=f;const p=-c*n,x=l*n,m=-h*n,g=d*n;let M=p+m,v=x+g;const _=Math.hypot(M,v)||1;M/=_,v/=_;const b=t/Math.max(.4,M*p+v*x);s.push(i[r*2]+M*b,i[r*2+1]+v*b)}return s}const A_=new Set(["house","detached","residential","terrace","yes;house","semidetached_house","bungalow"]),R_=new Set(["shed","garage","garages","toilets","hut"]);function _u(i,t,e,n,s,r,a){const o=e.p.map(T=>T/10),l=o.length/2;let c=0,d=0,h=1/0,u=-1/0;for(let T=0;T<l;T++){c+=o[T*2],d+=o[T*2+1];const C=t.yAt(o[T*2],o[T*2+1]);C<h&&(h=C),C>u&&(u=C)}c/=l,d/=l;const f=Math.abs(ml(o)),p=w_(o),x=f/(p.w*p.d||1),m=u+.15,g=Math.hypot(c-r[0],d-r[1])<420,M=e.k==="retail"||e.k==="commercial"||!!e.u||!!e.n||e.k==="yes"&&(f>300||g&&f>110),v=!M&&(A_.has(e.k)||e.k==="yes"&&f<=300),_=R_.has(e.k)||f<28;let b;e.l?b=e.l*3.1:e.k==="roof"?b=3:e.k==="hangar"?b=6.5:e.k==="church"?b=5:_?b=2.5:v?b=s()<.2?5.5:2.9:b=f>1200?7:f>500?5.6:4.3+s()*.8;const E={name:e.n,use:e.u,kind:e.k,poly:o,cx:c,cz:d,area:f,obb:p,floorY:m,wallH:b,topY:m+b};let S=26;for(let T=0;T<l;T++){const C=(T+1)%l,P=o[T*2],U=o[T*2+1],L=o[C*2],O=o[C*2+1],I=Math.hypot(L-P,O-U);if(I<4.5)continue;const z=(P+L)/2,Q=(U+O)/2,N=n.nearest(z,Q,S);if(!N)continue;let V=-(O-U)/I,K=(L-P)/I;if(V*(z-c)+K*(Q-d)<0&&(V=-V,K=-K),(N.px-z)*V+(N.pz-Q)*K<N.dist*.5)continue;S=N.dist;const Y=Math.atan2(V,K),Z=(L-P)*Math.cos(Y)-(O-U)*Math.sin(Y);E.street={x:Z>0?P:L,z:Z>0?U:O,heading:Y,length:I}}if(i.frame(0,m,0,0),e.k==="roof"){const T=G(12172728);i.walls(o,b-.25,b,T),i.cap(o,b,T);for(let C=0;C<l;C++)Vn(i,a,o[C*2],o[C*2+1],.12,h-m,b-.25,G(6974832));return E}const y=M?[G(15328470),G(14275266),G(13620178),G(15128768),G(12568777),G(15789540),G(13220258)][Math.floor(s()*7)]:fa[Math.floor(s()*fa.length)],w=M&&f>300?[G(13225160),G(11777972),G(14211280),G(10133405)][Math.floor(s()*4)]:Ei[Math.floor(s()*Ei.length)];if(i.walls(o,h-m-.3,b,y),a==null||a.polygons.push(o),e.k==="church"){i.frame(p.cx,m,p.cz,p.heading);const T=Oi(i,p.w,p.d,b,1.15,.3,G(5922659),y);E.topY=m+b+T}else if((v||_||e.k==="hangar")&&x>.8&&l<=8)if(i.frame(p.cx,m,p.cz,p.heading),e.k==="hangar")E.topY=m+b+Oi(i,p.w,p.d,b,.3,.3,G(12172728),y);else if(_)ar(i,p.w,p.d,b,.5,.1,.2,w,y);else if(s()<.55){const T=Math.min(p.w,p.d)/2+.45;Sl(i,p.w/2+.45,p.d/2+.45,b,T*.44,w),E.topY=m+b+T*.44}else E.topY=m+b+Oi(i,p.w,p.d,b,.5,.4,w,y);else if(f<420&&!M){const T=T_(o,Math.min(2.2,Math.sqrt(f)*.18)),C=1.15;for(let P=0;P<l;P++){const U=(P+1)%l;i.quad(o[P*2],b,o[P*2+1],o[U*2],b,o[U*2+1],T[U*2],b+C,T[U*2+1],T[P*2],b+C,T[P*2+1],w)}i.cap(T,b+C,re(w,1.05)),E.topY=m+b+C}else{i.cap(o,b-.05,w),i.walls(o,b,b+.45,re(y,.96)),E.topY=m+b+.45;const T=Math.min(6,Math.floor(f/220));for(let C=0;C<T;C++){const P=(s()-.5)*p.w*.5,U=(s()-.5)*p.d*.5,L=Math.cos(p.heading),O=Math.sin(p.heading),I=p.cx+P*L+U*O,z=p.cz-P*O+U*L;i.box(I-1.1,b,z-.8,I+1.1,b+.9,z+.8,G(11120304))}}if(!_&&e.k!=="hangar"){const T=Math.max(1,Math.round(b/3));for(let C=0;C<l;C++){const P=(C+1)%l,U=o[C*2],L=o[C*2+1],O=o[P*2],I=o[P*2+1],z=Math.hypot(O-U,I-L);if(z<3.2)continue;let Q=-(I-L)/z,N=(O-U)/z;Q*((U+O)/2-c)+N*((L+I)/2-d)<0&&(Q=-Q,N=-N);const V=Math.atan2(Q,N),K=(O-U)*Math.cos(V)-(I-L)*Math.sin(V);i.frame(K>0?U:O,m,K>0?L:I,V);const Y=Math.floor(z/(M?4.2:3.4));for(let Z=0;Z<T;Z++){const F=Z*3+.9;if(!(M&&Z===0&&E.street&&Math.abs(V-E.street.heading)<.01))for(let q=0;q<Y;q++){const st=(q+.5)/Y*z;i.quad(st-.8,F,fn,st+.8,F,fn,st+.8,F+1.3,fn,st-.8,F+1.3,fn,We,s()<.5?1:0)}}}}if(M&&E.street&&!e.k.includes("church")&&f>60){const T=E.street;i.frame(T.x,m,T.z,T.heading);const C=gu[Math.floor(s()*gu.length)];if(i.quad(.5,.35,fn,T.length-.5,.35,fn,T.length-.5,2.7,fn,.5,2.7,fn,We,.9),g&&T.length>6&&b<9){i.box(.2,3,0,T.length-.2,3.16,2.7,C,re(C,.9),re(C,.75)),i.box(.2,2.75,2.62,T.length-.2,3.3,2.7,er(C,ln,.25),null);const P=Math.max(1,Math.round(T.length/4.5));for(let U=0;U<=P;U++){const L=.35+U/P*(T.length-.7);Vn(i,a,L,2.56,.06,0,3,G(4869456))}}}return i.frame(),E}function C_(i,t,e,n,s=()=>!1){const r=new qe;r.name="buildings";const a=ms(),o=900,l=new Map,c=(_,b)=>{const E=`${Math.floor(_/o)}:${Math.floor(b/o)}`;let S=l.get(E);return S||l.set(E,S=new ee),S},d=i.meta,h=[(145.7285-d.origin[0])*d.metresPerDegree[0],-(-38.63385-d.origin[1])*d.metresPerDegree[1]],u=Ge(3996),f=[],p={polygons:[],circles:[]};for(const _ of i.buildings){let b=0,E=0;for(let S=0;S<_.p.length;S+=2)b+=_.p[S],E+=_.p[S+1];if(b/=_.p.length*5,E/=_.p.length*5,!s(b,E)){if(n.has(_.n)){const S=new ee,y=_u(S,t,_,e,Ge(1),h);y.custom=!0,f.push(y);continue}f.push(_u(c(b,E),t,_,e,u,h,p))}}const x=i.houses,m=mu(i);for(let _=0;_<x.length;_+=Ml){const b=x[_]/4,E=x[_+1]/4,S=x[_+2]/10,y=x[_+3]/10,w=x[_+4]/10*(Math.PI/180),T=Ge(_*7919+17);s(b,E)||m(b,E)||(x[_+5]===1?b_(c(b,E),t,b,E,S,y,w,x[_+7],x[_+8],x[_+9],p):__(c(b,E),t,b,E,S,y,w,x[_+6],x[_+7],x[_+8],x[_+9],T,p))}const g=i.cabins;for(let _=0;_<g.length;_+=u_){const b=g[_]/4,E=g[_+1]/4;s(b,E)||E_(c(b,E),t,b,E,g[_+2]/10*(Math.PI/180),g[_+3],g[_+4],Ge(_*31+5),p)}const M=[];for(const _ of vl)s(_[1][0],_[1][1])||S_(c(_[1][0],_[1][1]),t,_,M,p);let v=0;for(const _ of l.values()){_.frame(),v+=_.vertexCount/3;const b=new qt(_.build(),a);b.castShadow=!0,b.receiveShadow=!0,r.add(b)}return{group:r,footprints:f,designedWalls:M,blockers:p,triangles:v}}class L_{constructor(t){X(this,"targetFps");X(this,"deadline",-1/0);X(this,"lastDraw");this.targetFps=t===30?30:60}get target(){return this.targetFps}setTarget(t){const e=t===30?30:60;return e===this.targetFps?!1:(this.targetFps=e,this.reset(),!0)}reset(){this.deadline=-1/0,this.lastDraw=void 0}takeFrame(t){if(t+1<this.deadline)return;const e=1e3/this.targetFps,n=this.deadline+e;this.deadline=n<=t?t+e:n;const s=this.lastDraw===void 0?0:(t-this.lastDraw)/1e3;return this.lastDraw=t,s}}const P_=.1,D_=180,I_=425,N_=650,U_=360,F_=480,O_=1.8,z_=450;function Mu(i,t,e){const n=Math.max(i.x-t,0,t-i.x-i.size),s=Math.max(i.z-e,0,e-i.z-i.size);return Math.hypot(n,s)}function vu(i){"close"in i&&i.close()}function El(i){i.texture.dispose(),vu(i.image)}function B_(i,t){return new Promise((e,n)=>{if(t.aborted){n(t.reason);return}const s=new Image;s.crossOrigin="anonymous";const r=()=>{s.onload=s.onerror=null,t.removeEventListener("abort",a)},a=()=>{r(),s.removeAttribute("src"),n(t.reason)};s.onload=()=>{r(),e(s)},s.onerror=()=>{r(),n(new Error("Could not load ground detail"))},t.addEventListener("abort",a,{once:!0}),s.src=i})}class G_{constructor(t,e,n,s,r,a){X(this,"patches");X(this,"manifest");X(this,"manifestRetryAt",0);X(this,"load");X(this,"ready");X(this,"residents");X(this,"previous");X(this,"vx",0);X(this,"vz",0);X(this,"closed",!1);this.urls=t,this.small=e,this.detail=n,this.anisotropy=s,this.worker=r,this.markDirty=a,this.residents=n.maps.map(()=>{})}update(t,e,n,s,r){if(!this.urls.detail||this.closed)return;const a=this.previous,o=a?t-a.time:0,l=a&&Math.hypot(e-a.x,n-a.y,s-a.z)>D_;if(a&&!l&&o<P_)return;if(this.previous={time:t,x:e,y:n,z:s},!a||l||o>1)this.vx=this.vz=0;else{const h=Math.min(1,o*4);this.vx+=((e-a.x)/o-this.vx)*h,this.vz+=((s-a.z)/o-this.vz)*h}if(!this.patches){!this.manifest&&t>=this.manifestRetryAt&&this.loadManifest(this.urls.detail);return}const c=Math.min(O_,z_/Math.max(1,Math.hypot(this.vx,this.vz))),d=this.patches.map(h=>{const u=h.slot!==-1,f=Math.min(Mu(h,e,s),Mu(h,e+this.vx*c,s+this.vz*c)+70);return{patch:h,score:f,present:u}}).filter(({score:h,present:u})=>r<=(u?F_:U_)&&h<=(u?N_:I_)).sort((h,u)=>h.score-u.score).slice(0,this.residents.length).map(({patch:h})=>h);for(const h of this.residents)h&&!d.includes(h.patch)&&this.evict(h);if(this.load&&!d.includes(this.load.patch)&&this.cancelLoad(),this.ready&&!d.includes(this.ready.patch)&&(El(this.ready),this.ready=void 0),!this.load&&!this.ready){const h=d.find(u=>u.slot===-1&&t>=u.retryAt);h&&this.start(h)}}applyReady(){if(!this.ready)return;const t=this.residents.indexOf(void 0);if(t<0)return;const e=this.ready;this.ready=void 0,this.residents[t]=e;const{patch:n,texture:s}=e;n.slot=t,this.detail.maps[t].value=s,this.detail.rects[t].value.set(n.x,n.z,1/n.size,1)}dispose(){var t;if(!this.closed){this.closed=!0,(t=this.manifest)==null||t.abort(),this.cancelLoad(),this.ready&&El(this.ready),this.ready=void 0;for(const e of this.residents)e&&this.evict(e);this.detail.fallback.dispose()}}async loadManifest(t){var n;const e=this.manifest=new AbortController;try{const s=new URL(t,document.baseURI),r=await fetch(s,{signal:e.signal});if(r.status===404){this.patches=[];return}if(!r.ok)throw new Error("Could not load the ground detail list");const{patches:a}=await r.json();if(e.signal.aborted)return;this.patches=(Array.isArray(a)?a:[]).flatMap(o=>{var d;if(!o||!Number.isFinite(o.x)||!Number.isFinite(o.z)||!(o.size>0)||!Number.isFinite(o.size))return[];const l=this.small&&o.lo?o.lo:o.file;if(typeof l!="string"||!l)return[];const c=(d=this.urls.detailFiles)==null?void 0:d[l];try{return[{x:o.x,z:o.z,size:o.size,url:c?new URL(c,document.baseURI).href:new URL(l,s).href,slot:-1,failures:0,retryAt:0}]}catch{return[]}})}catch{e.signal.aborted||(this.manifestRetryAt=(((n=this.previous)==null?void 0:n.time)??0)+20)}finally{this.manifest=void 0}}start(t){const e=new AbortController,n=this.load={patch:t,controller:e},{signal:s}=e;this.worker.run({kind:"detail",url:t.url},()=>B_(t.url,s),s).then(r=>{if(this.load!==n){vu(r);return}this.load=void 0,t.failures=0,t.retryAt=0;const a=new Ae(r);a.flipY=!("close"in r),a.colorSpace=Ne,a.anisotropy=this.anisotropy,a.generateMipmaps=!0,a.minFilter=Mn,a.needsUpdate=!0,this.ready={patch:t,texture:a,image:r},this.markDirty()},()=>{var r;this.load===n&&(this.load=void 0,t.failures++,t.retryAt=(((r=this.previous)==null?void 0:r.time)??0)+Math.min(30,2**t.failures))})}cancelLoad(){const t=this.load;this.load=void 0,t==null||t.controller.abort()}evict(t){const e=t.patch.slot;this.detail.maps[e].value=this.detail.fallback,this.detail.rects[e].value.w=0,this.residents[e]=void 0,t.patch.slot=-1,El(t),this.markDirty()}}class k_{constructor(t,e,n){X(this,"items",[]);X(this,"v",new H);X(this,"visible",!0);X(this,"obstacles",[]);this.layer=t;for(const s of[...e].sort((r,a)=>r.priority-a.priority)){const r=document.createElement("button");r.type="button",r.tabIndex=-1,r.className=`inv-label inv-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",r.addEventListener("click",()=>n(s.id)),t.appendChild(r),this.items.push({place:s,el:r,w:0,h:0,shown:!1})}}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const a of this.items){a.w||(a.w=a.el.offsetWidth,a.h=a.el.offsetHeight);const o=a.place;this.v.set(o.x,o.y,o.z);const l=this.v.distanceTo(t.position);this.v.project(t);let c=this.v.z<1&&this.v.z>-1&&l<(o.maxDist??1/0)&&l<s;const d=(this.v.x*.5+.5)*e,h=(-this.v.y*.5+.5)*n,u=d-a.w/2,f=h-a.h,p=d+a.w/2,x=h;if(c&&(p<0||u>e||x<0||f>n)&&(c=!1),c){for(const m of r)if(u<m[2]+6&&p>m[0]-6&&f<m[3]+4&&x>m[1]-4){c=!1;break}}c&&(r.push([u,f,p,x]),a.el.style.transform=`translate3d(${Math.round(u)}px, ${Math.round(f)}px, 0)`),c!==a.shown&&(a.el.style.visibility=c?"visible":"hidden",a.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}const H_=[{id:"town",name:"A'Beckett Street",kind:"landmark",lat:-38.63372,lon:145.7283,blurb:"Inverloch's main street: bakeries, fish and chips, cafes and shops, a short walk from the inlet.",view:[380,58,-28],priority:1,lift:26},{id:"jetty",name:"Inverloch Jetty",kind:"landmark",lat:-38.63591,lon:145.73413,blurb:"Timber jetty reaching into Anderson Inlet, with the boat ramp alongside. A favourite for fishing and an evening walk.",view:[190,63,32],priority:1,lift:16},{id:"surf",name:"Surf Beach & Life Saving Club",kind:"landmark",lat:-38.64634,lon:145.70199,blurb:"Ocean beach facing Bass Strait, watched over by the Inverloch Surf Life Saving Club on the dune.",view:[330,62,-32],priority:1,lift:20},{id:"inlet",name:"Anderson Inlet",kind:"water",lat:-38.6412,lon:145.7445,blurb:"A shallow tidal estuary where the Tarwin River meets the sea. The sandbars here come from LiDAR survey data: slide the tide to cover and uncover them.",view:[3e3,50,8],priority:2},{id:"hub",name:"The Hub",kind:"landmark",lat:-38.63332,lon:145.72762,blurb:"Inverloch Community Hub on A'Beckett Street, home to the library and visitor information.",view:[300,60,20],priority:3,maxDist:2600,lift:18},{id:"espy",name:"Esplanade Hotel",kind:"landmark",lat:-38.63419,lon:145.72889,blurb:"The pub at the foreshore end of the main street.",view:[280,62,-40],priority:3,maxDist:2200,lift:18},{id:"rainbow",name:"Rainbow Park",kind:"landmark",lat:-38.63529,lon:145.72876,blurb:"Foreshore playground with picnic lawns and barbecues beside the inlet beach.",view:[150,60,14],priority:3,maxDist:2200,lift:14},{id:"bunurong",name:"Bunurong Environment Centre",kind:"landmark",lat:-38.63465,lon:145.72917,blurb:"Environment centre and shell museum on The Esplanade.",view:[260,60,-15],priority:5,maxDist:1100,lift:15},{id:"glade",name:"The Glade",kind:"landmark",lat:-38.63539,lon:145.7302,blurb:"Foreshore reserve and picnic shelter between the town centre and the jetty.",view:[300,62,5],priority:5,maxDist:1300,lift:13},{id:"oval",name:"Recreation Reserve",kind:"landmark",lat:-38.63194,lon:145.72681,blurb:"The town's football oval, a block back from the main street.",view:[460,58,15],priority:4,maxDist:2600,lift:16},{id:"school",name:"Primary School",kind:"landmark",lat:-38.63062,lon:145.72813,blurb:"Inverloch Primary School.",view:[380,58,0],priority:6,maxDist:1500,lift:14},{id:"bowls",name:"Bowls Club",kind:"landmark",lat:-38.63556,lon:145.73245,blurb:"Inverloch Bowls Club, two greens beside the foreshore.",view:[260,60,0],priority:6,maxDist:1300,lift:12},{id:"tennis",name:"Tennis Club & Oval",kind:"landmark",lat:-38.62722,lon:145.7372,blurb:"Tennis courts and a second football oval on the north-east side of town.",view:[520,58,10],priority:6,maxDist:2e3,lift:14},{id:"camping",name:"Foreshore Holiday Parks",kind:"landmark",lat:-38.63425,lon:145.7442,blurb:"Cabins, caravans and tents under the trees along The Esplanade, steps from the inlet.",view:[560,60,15],priority:4,maxDist:2800,lift:16},{id:"screw",name:"Screw Creek & Townsend Bluff",kind:"nature",lat:-38.6338,lon:145.7546,blurb:"A tidal creek in a nature conservation reserve, with a walking circuit up to the lookout on Townsend Bluff.",view:[900,60,-20],priority:3,lift:24},{id:"norman",name:"Point Norman",kind:"nature",lat:-38.648,lon:145.7118,blurb:"The corner where the surf beach turns into the inlet.",view:[900,60,-35],priority:4,maxDist:4200,lift:14},{id:"smythe",name:"Point Smythe",kind:"nature",lat:-38.6466,lon:145.7366,blurb:"The tip of the Venus Bay peninsula, across the entrance from town: coastal scrub, dunes and walking tracks.",view:[1300,58,150],priority:3,lift:22},{id:"racv",name:"RACV Inverloch Resort",kind:"landmark",lat:-38.6487,lon:145.6876,blurb:"Resort and villas on the Cape Paterson road, on the hill above the coast.",view:[520,60,40],priority:5,maxDist:3200,lift:18},{id:"strait",name:"Bass Strait",kind:"water",lat:-38.6565,lon:145.7075,blurb:"Open ocean. Swell rolls in to the surf beach from here.",view:[2300,50,-12],priority:4}];function V_(i,t){return H_.map(e=>{const n=(e.lon-i.origin[0])*i.metresPerDegree[0],s=-(e.lat-i.origin[1])*i.metresPerDegree[1],r=Math.max(t.yAt(n,s),0);return{...e,x:n,z:s,y:r+(e.lift??6)}})}function mn(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}const W_=new Set(["Inverloch Surf Life Saving Club","The Hub"]),Xe=G(10126440),Pe=G(6113848),gn=G(16053230),Ms=G(11842219),Ee=G(7304312),or=G(3163994),vs=G(13644844),Ss=G(15909424),X_=G(16119022),wl=2.05*kn;function Su(i,t,e,n=35){let s=1/0,r=0,a=1;for(let o=0;o<24;o++){const l=o/24*Math.PI*2,c=i.metresAt(t+Math.cos(l)*n,e+Math.sin(l)*n)+i.metresAt(t+Math.cos(l)*n*2,e+Math.sin(l)*n*2);c<s&&(s=c,r=Math.cos(l),a=Math.sin(l))}return[r,a]}function _a(i){let t=0,e=0;for(let n=0;n<i.length;n+=2)t+=i[n],e+=i[n+1];return[t/(i.length/2)/10,e/(i.length/2)/10]}function Y_(i,t,e){const n=[];for(let v=0;v<e.length;v+=2)n.push([e[v]/10,e[v+1]/10]);t.metresAt(n[0][0],n[0][1])<t.metresAt(n[n.length-1][0],n[n.length-1][1])&&n.reverse();const s=1.7,r=wl,[a,o]=n[0];let l=a-n[1][0],c=o-n[1][1];const d=Math.hypot(l,c)||1;l/=d,c/=d;let h=0;for(;h<30&&t.yAt(a+l*h,o+c*h)<r-.25;)h+=1.5;const u=Math.max(t.yAt(a+l*h,o+c*h),r-1.2),f=Math.atan2(-l,-c);i.frame(a+l*h,0,o+c*h,f),i.quad(-s,u+.05,0,s,u+.05,0,s,r,h,-s,r,h,Xe),i.quad(-s,u-1.2,0,-s,r-.4,h,-s,r,h,-s,u+.05,0,Pe),i.quad(s,u-1.2,0,s,u+.05,0,s,r,h,s,r-.4,h,Pe);for(let v=0;v<n.length-1;v++){const[_,b]=n[v],[E,S]=n[v+1],y=Math.hypot(E-_,S-b),w=Math.atan2(E-_,S-b);i.frame(_,r,b,w);const T=Math.ceil(y/1.2);for(let P=0;P<T;P++){const U=P/T*y,L=(P+1)/T*y;i.box(-s,-.14,U,s,0,L,re(Xe,.9+P*7%5*.04),void 0,Pe)}i.box(-s+.25,-.5,0,-s+.5,-.14,y,Pe,null),i.box(s-.5,-.5,0,s-.25,-.14,y,Pe,null);const C=Math.max(1,Math.round(y/3.6));for(let P=0;P<=C;P++){const U=P/C*y;for(const L of[-1,1]){const O=L*(s-.12),I=t.yAt(i.wx(O,U),i.wz(O,U));i.cyl(O,I-r-.6,U,.17,.15,r-I+.6+1.1,6,Pe,re(Xe,.8))}i.box(-s,-.78,U-.12,s,-.5,U+.12,Pe),i.quad(-s+.1,-2.6,U,s-.1,-.8,U,s-.1,-.6,U,-s+.1,-2.4,U,re(Pe,.9))}for(const P of[-1,1]){const U=P*(s-.12);i.box(U-.05,1.02,0,U+.05,1.1,y,Xe,void 0,Pe),i.box(U-.03,.52,0,U+.03,.58,y,Xe,void 0,Pe)}i.box(-s,-.14,-s,s,0,.01,Xe,void 0,Pe)}const[p,x]=n[n.length-1],[m,g]=n[n.length-2],M=Math.atan2(p-m,x-g);i.frame(p,r,x,M),i.box(-3.2,-.14,0,3.2,0,5.2,re(Xe,.96),void 0,Pe);for(const[v,_]of[[-3.05,.2],[3.05,.2],[-3.05,5],[3.05,5],[0,5]]){const b=t.yAt(i.wx(v,_),i.wz(v,_));i.cyl(v,b-r-.6,_,.19,.17,r-b+.6+(v===0?0:1.1),6,Pe,re(Xe,.8))}i.box(-3.1,1.02,4.9,3.1,1.1,5,Xe,void 0,Pe),i.box(-3.1,1.02,0,-3,1.1,5,Xe,void 0,Pe),i.box(3,1.02,0,3.1,1.1,5,Xe,void 0,Pe),i.cyl(2.6,0,4.5,.07,.05,4.6,5,Ee),i.blob(2.6,4.75,4.5,.28,.2,.28,6,3,G(16773320),void 0,1.6),i.box(-.35,-3.6,5.22,-.3,.9,5.28,Ee,null),i.box(.3,-3.6,5.22,.35,.9,5.28,Ee,null);for(let v=-3.3;v<.6;v+=.42)i.box(-.3,v,5.22,.3,v+.05,5.28,Ee);return i.frame(),{head:new H(p,r,x),points:n}}function Z_(i,t,e,n){const[s,r]=Su(t,e,n,25),a=Math.atan2(s,r);i.frame(e,0,n,a);const o=4.2,l=-8,c=[];for(let p=l;p<=46;p+=3){const x=t.yAt(i.wx(0,p),i.wz(0,p));if(c.push([p,x]),x<-1.6*kn)break}const d=c[0][1]+.12,h=Math.min(c[c.length-1][1]+.25,-.9*kn),u=c[c.length-1][0],f=c.length-1;for(let p=0;p<f;p++){const x=l+(u-l)*p/f,m=l+(u-l)*(p+1)/f,g=d+(h-d)*p/f,M=d+(h-d)*(p+1)/f;i.quad(-o,g,x,-o,M,m,o,M,m,o,g,x,p%2?Ms:re(Ms,.94));for(const v of[-1,1])i.quad(v*o,g-1.5,x,v*o,M-1.5,m,v*o,M+.15,m,v*o,g+.15,x,re(Ms,.8))}i.frame()}function K_(i,t,e,n){const[s,r]=Su(t,e.cx,e.cz,60),a=e.obb;let o=a.heading,l=a.w,c=a.d,d=-1/0;for(let S=0;S<4;S++){const y=a.heading+S*Math.PI/2,w=Math.sin(y)*s+Math.cos(y)*r;w>d&&(d=w,o=y,l=S%2?a.d:a.w,c=S%2?a.w:a.d)}const h=l/2,u=c/2;i.frame(a.cx,e.floorY,a.cz,o);const f=G(13223611),p=G(15394522),x=G(6975604);i.box(-h,-4,-u,h,3.1,u,f,null),i.box(-h,3.1,-u,h,6.1,u,p,null),n.polygons.push(Hn(i,-h,-u,h,u));const m=Math.max(2,Math.floor(l/5));for(let S=0;S<m;S++){const y=-h+(S+.5)/m*l;i.quad(y-1.7,.05,u+.05,y+1.7,.05,u+.05,y+1.7,2.7,u+.05,y-1.7,2.7,u+.05,S%2?vs:Ss)}i.quad(-h+.6,3.6,u+.05,h-.6,3.6,u+.05,h-.6,5.7,u+.05,-h+.6,5.7,u+.05,or,.9),i.box(-h-.6,2.95,u,h+.6,3.12,u+3.4,Ms,Xe,re(Ms,.8)),i.box(-h-.6,3.12,u+3.32,h+.6,4.15,u+3.4,G(10469580),null);for(const S of[-h-.4,-h/3,h/3,h+.4])Vn(i,n,S,u+3.12,.12,-4,2.95,Ee);i.quad(-h-.8,7.5,u+3.8,h+.8,7.5,u+3.8,h+.8,6.2,-u-.6,-h-.8,6.2,-u-.6,x),i.quad(-h,6.1,u,h,6.1,u,h,7.1,u,-h,7.1,u,p),i.quad(h,6.1,u,h,6.1,-u,h,6.3,-u,h,7.1,u,p),i.quad(-h,6.1,-u,-h,6.1,u,-h,7.1,u,-h,6.3,-u,p);const g=h-2.2,M=u-1.8;i.box(g-1.8,6.1,M-1.8,g+1.8,9.2,M+1.8,p,null),i.box(g-1.85,9.2,M-1.85,g+1.85,10.5,M+1.85,or,null,null,.7),i.box(g-2.3,10.5,M-2.3,g+2.3,10.72,M+2.3,x),i.cyl(g,10.72,M,.06,.04,5.2,5,gn),i.quad(g,15.6,M,g+1.9,15.6,M,g+1.9,14.5,M,g,14.5,M,vs),i.quad(g,14.5,M,g+1.9,14.5,M,g+1.9,13.4,M,g,13.4,M,Ss);for(let S=0;S<4;S++){const y=-h+(S+.5)/4*l;i.quad(y+.9,3.9,-u-.05,y-.9,3.9,-u-.05,y-.9,5.3,-u-.05,y+.9,5.3,-u-.05,or,S%2)}let v=u+14;for(;v<160&&t.metresAt(a.cx+s*v,a.cz+r*v)>1.75;)v+=3;const _=a.cx+s*v,b=a.cz+r*v,E=Math.atan2(s,r);i.frame(_,t.yAt(_,b),b,E);for(const S of[-1,1]){const y=S*32,w=t.yAt(i.wx(y,0),i.wz(y,0))-t.yAt(_,b);i.cyl(y,w,0,.05,.04,4.4,5,gn),i.quad(y,w+4.4,0,y+.95,w+4.4,0,y+.95,w+3.1,0,y,w+3.1,0,vs),i.quad(y,w+3.1,0,y+.95,w+3.1,0,y+.95,w+1.8,0,y,w+1.8,0,Ss)}for(const[S,y]of[[-1.5,-5.5],[1.5,-5.5],[-1.5,-8.5],[1.5,-8.5]])i.cyl(S,0,y,.04,.04,2.2,4,Ee);i.tri(-1.7,2.2,-5.3,1.7,2.2,-5.3,0,3,-7,vs),i.tri(1.7,2.2,-8.7,-1.7,2.2,-8.7,0,3,-7,vs),i.tri(1.7,2.2,-5.3,1.7,2.2,-8.7,0,3,-7,Ss),i.tri(-1.7,2.2,-8.7,-1.7,2.2,-5.3,0,3,-7,Ss),i.blob(6,.35,-6,.95,.4,2.1,8,3,G(14238751),G(15755818)),i.box(5.6,.3,-7.9,6.4,.95,-7.5,G(2763308));for(let S=0;S<4;S++)i.box(-7+S*.5,.2,-7.2,-6.85+S*.5,.75,-4.6,S%2?Ss:G(3116992));return i.frame(),{beach:new H(_,t.yAt(_,b),b),seaward:[s,r]}}function yu(i,t){const e=i.length/2;let n=0;for(let a=0;a<e;a++){const o=(a+1)%e;n+=i[a*2]*i[o*2+1]-i[o*2]*i[a*2+1]}const s=n>0?1:-1,r=[];for(let a=0;a<e;a++){const o=(a+e-1)%e,l=(a+1)%e;let c=i[a*2]-i[o*2],d=i[a*2+1]-i[o*2+1],h=i[l*2]-i[a*2],u=i[l*2+1]-i[a*2+1];const f=Math.hypot(c,d)||1,p=Math.hypot(h,u)||1;c/=f,d/=f,h/=p,u/=p;const x=-d*s,m=c*s;let g=x-u*s,M=m+h*s;const v=Math.hypot(g,M)||1;g/=v,M/=v;const _=t/Math.max(.45,g*x+M*m);r.push(i[a*2]+g*_,i[a*2+1]+M*_)}return r}function q_(i,t,e,n){i.frame(0,e.floorY,0,0);const s=G(11111014),r=G(15328470),a=G(9410458);let o=1/0;for(let h=0;h<e.poly.length;h+=2)o=Math.min(o,t.yAt(e.poly[h],e.poly[h+1]));const l=e.poly.length/2;i.walls(e.poly,o-e.floorY-.3,3.2,s),i.walls(e.poly,3.2,6.2,r),n.polygons.push(e.poly);const c=yu(e.poly,3.2),d=yu(e.poly,4.4);for(let h=0;h<l;h++){const u=(h+1)%l;i.quad(e.poly[h*2],6.6,e.poly[h*2+1],e.poly[u*2],6.6,e.poly[u*2+1],c[u*2],6.05,c[u*2+1],c[h*2],6.05,c[h*2+1],a)}if(i.walls(e.poly,6.2,6.6,re(r,.92)),i.walls(c,6.05,7.9,or,.8),i.cap(c,7.9,re(a,1.08)),i.walls(d,7.9,8.3,re(a,.9)),i.cap(d,8.3,a),e.street){const h=e.street;i.frame(h.x,e.floorY,h.z,h.heading),i.quad(.6,.3,.06,h.length-.6,.3,.06,h.length-.6,5.6,.06,.6,5.6,.06,or,.9),i.box(h.length*.3,3.3,0,h.length*.7,3.5,3.4,G(14263361),void 0,re(G(14263361),.8)),Vn(i,n,h.length*.3+.3,3.2,.1,0,3.3,Ee),Vn(i,n,h.length*.7-.3,3.2,.1,0,3.3,Ee)}i.frame()}function cn(i,t,e,n,s,r=X_){const a=e.length,o=.22,l=s?a:a-1;for(let c=0;c<l;c++){const[d,h]=e[c],[u,f]=e[(c+1)%a];let p=-(f-h),x=u-d;const m=Math.hypot(p,x)||1;p=p/m*n*.5,x=x/m*n*.5;const g=t.yAt(d,h)+o,M=t.yAt(u,f)+o;i.quad(d+p,g,h+x,u+p,M,f+x,u-p,M,f-x,d-p,g,h-x,r)}}function J_(i,t,e,n,s){const r=[];for(let v=0;v<n.length;v+=2)r.push([n[v]/10,n[v+1]/10]);const[a,o]=_a(n);let l=0,c=0,d=0;for(const[v,_]of r)l+=(v-a)**2,c+=(_-o)**2,d+=(v-a)*(_-o);const h=.5*Math.atan2(2*d,l-c),u=Math.cos(h),f=Math.sin(h);let p=0,x=0;for(const[v,_]of r)p=Math.max(p,Math.abs((v-a)*u+(_-o)*f)),x=Math.max(x,Math.abs(-(v-a)*f+(_-o)*u));p-=5,x-=5;const m=(v,_)=>[a+v*u-_*f,o+v*f+_*u],g=[];for(let v=0;v<72;v++){const _=v/72*Math.PI*2;g.push(m(Math.cos(_)*p,Math.sin(_)*x))}cn(t,e,g,.35,!0),cn(t,e,[m(-25,-25),m(25,-25),m(25,25),m(-25,25)],.3,!0);const M=v=>Array.from({length:24},(_,b)=>m(Math.cos(b/24*Math.PI*2)*v,Math.sin(b/24*Math.PI*2)*v));cn(t,e,M(5),.3,!0),cn(t,e,M(1.5),.3,!0);for(const v of[-1,1]){cn(t,e,[m(v*p,-3.2),m(v*(p-9),-3.2),m(v*(p-9),3.2),m(v*p,3.2)],.3,!1);const _=[];for(let b=-8;b<=8;b++){const E=b/8*1.05,S=v*(p-50*Math.cos(E)),y=50*Math.sin(E);(S/p)**2+(y/x)**2<1&&_.push(m(S,y))}_.length>2&&cn(t,e,_,.3,!1);for(const[b,E]of[[-3.2,9.5],[3.2,9.5],[-9.6,6.2],[9.6,6.2]]){const[S,y]=m(v*p,b);i.frame(S,e.yAt(S,y),y,0),i.cyl(0,0,0,.11,.09,E,6,gn),i.cyl(0,0,0,.2,.2,1.6,6,b*b<12?G(2973608):G(12597806))}}if(s)for(const[v,_]of[[-.62,-1],[.62,-1],[-.62,1],[.62,1]]){const[b,E]=m(v*(p+6),_*(x+9));i.frame(b,e.yAt(b,E),E,Math.atan2(a-b,o-E)),i.cyl(0,0,0,.28,.16,24,6,Ee),i.box(-1.7,24,-.2,1.7,25.3,.2,G(4869972)),i.quad(-1.6,24.1,.22,1.6,24.1,.22,1.6,25.2,.22,-1.6,25.2,.22,G(16774876),2.2)}i.frame()}function $_(i,t,e,n,s){const r=[];for(let _=0;_<n.length;_+=2)r.push([n[_]/10,n[_+1]/10]);if(r.length<4)return;if(s==="bowls"){cn(t,e,r,.5,!0,G(15328986));return}const[a,o,l,c]=r,d=Math.hypot(o[0]-a[0],o[1]-a[1])>Math.hypot(l[0]-o[0],l[1]-o[1]),h=d?a:o,u=d?o:l,f=d?l:c,p=d?c:a,x=(_,b)=>{const E=h[0]+(u[0]-h[0])*_,S=h[1]+(u[1]-h[1])*_,y=p[0]+(f[0]-p[0])*_,w=p[1]+(f[1]-p[1])*_;return[E+(y-E)*b,S+(w-S)*b]},m=.14;cn(t,e,[x(0,0),x(1,0),x(1,1),x(0,1)],m,!0),cn(t,e,[x(0,.125),x(1,.125)],m,!1),cn(t,e,[x(0,.875),x(1,.875)],m,!1),cn(t,e,[x(.23,.125),x(.23,.875)],m,!1),cn(t,e,[x(.77,.125),x(.77,.875)],m,!1),cn(t,e,[x(.23,.5),x(.77,.5)],m,!1);const g=x(.5,-.04),M=x(.5,1.04),v=e.yAt(g[0],g[1])+.2;i.frame(0,v,0,0),i.quad(g[0],0,g[1],M[0],0,M[1],M[0],.95,M[1],g[0],.95,g[1],G(2830131)),i.quad(g[0],.95,g[1],M[0],.95,M[1],M[0],1.05,M[1],g[0],1.05,g[1],gn);for(const _ of[g,M])i.cyl(_[0],0,_[1],.06,.06,1.1,5,Ee);i.frame()}const ri=[14826299,15764004,15909424,5025616,3117008,8280002].map(G);function j_(i,t,e,n,s){const[r,a]=_a(e),o=t.yAt(r,a)+.05,l=s()*Math.PI;i.frame(r,o,a,l);const c=(u,f,p,x)=>{for(const[m,g]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.cyl(u+m,0,f+g,.07,.07,p+2,5,G(8018492));i.box(u-1,p-.1,f-1,u+1,p,f+1,Xe,void 0,Pe),i.cyl(u,p+2,f,1.5,0,1,4,x)};c(-2.2,0,1.5,ri[0]),c(2.2,0,2.1,ri[4]),i.box(-1.2,1.4,-.35,1.2,1.5,.35,Xe),i.quad(3.2,2.1,-.4,6.4,.15,-.4,6.4,.15,.4,3.2,2.1,.4,ri[2]),i.quad(-3.2,1.5,.4,-5.6,.15,.4,-5.6,.15,-.4,-3.2,1.5,-.4,ri[1]);const d=0,h=5.2;for(const u of[-2.2,2.2])i.quad(d+u,0,h-1.1,d+u+.08,0,h-1.1,d+u+.08,2.6,h,d+u,2.6,h,Ee),i.quad(d+u,0,h+1.1,d+u+.08,0,h+1.1,d+u+.08,2.6,h,d+u,2.6,h,Ee);i.box(d-2.25,2.55,h-.05,d+2.25,2.65,h+.05,ri[3]);for(const u of[-1.1,0,1.1])i.box(d+u-.25,.5,h-.1,d+u+.25,.56,h+.1,G(2763308)),i.box(d+u-.24,.56,h-.01,d+u-.22,2.55,h+.01,Ee,null),i.box(d+u+.22,.56,h-.01,d+u+.24,2.55,h+.01,Ee,null);if(n){i.cyl(-6.5,0,-5.5,.09,.07,5.2,5,Ee);for(let u=0;u<6;u++){const f=u/6*Math.PI*2,p=-6.5+Math.cos(f)*3.2,x=-5.5+Math.sin(f)*3.2;i.quad(p-.04,0,x,p+.04,0,x,-6.46,5.1,-5.5,-6.54,5.1,-5.5,G(3104672))}for(let u=0;u<6;u++){const f=-9+u*3.4,p=ri[u],x=4.6,m=3.3;i.cyl(f,0,-11,.08,.07,x,5,Ee),i.cyl(f+1.7,0,-7.2,.08,.07,m,5,Ee),i.tri(f,x,-11,f+3.4,x,-11,f+1.7,m,-7.2,p)}i.cyl(11.399999999999999,0,-11,.08,.07,4.6,5,Ee),i.cyl(6.5,.3,5.5,1.3,1.3,.12,10,ri[5],ri[2]),i.cyl(6.5,0,5.5,.1,.1,1.1,5,Ee);for(let u=0;u<3;u++)i.blob(9.5+u*1.6,.55,-1.5,.3,.3,.55,5,3,ri[(u*2+1)%6])}i.frame()}function Q_(i,t,e){const n=[];for(let h=0;h<e.length;h+=2)n.push([e[h]/10,e[h+1]/10]);const[s,r]=_a(e),a=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1])>Math.hypot(n[2][0]-n[1][0],n[2][1]-n[1][1])?[n[0],n[1]]:[n[1],n[2]],o=Math.atan2(a[1][0]-a[0][0],a[1][1]-a[0][1]),l=Math.hypot(a[1][0]-a[0][0],a[1][1]-a[0][1])/2-1;i.frame(s,t.yAt(s,r)+.1,r,o);const c=G(13092286),d=re(c,.88);for(const h of[-1,1]){const u=h*l,f=[[0,0],[1.4,.35],[2.4,1.1],[3,2]];for(let p=0;p<3;p++){const[x,m]=f[p],[g,M]=f[p+1],v=u-h*(3-x),_=u-h*(3-g);h>0?i.quad(-4,m,v,4,m,v,4,M,_,-4,M,_,p%2?c:d):i.quad(4,m,v,-4,m,v,-4,M,_,4,M,_,p%2?c:d)}i.box(-4,0,Math.min(u,u+h*1.2),4,2,Math.max(u,u+h*1.2),d,c)}i.box(-1.5,0,-1.2,1.5,.45,1.2,d,c),i.quad(-1.5,.45,1.2,1.5,.45,1.2,1.5,0,3,-1.5,0,3,c),i.quad(1.5,.45,-1.2,-1.5,.45,-1.2,-1.5,0,-3,1.5,0,-3,c),i.box(3.2,.45,-2.5,3.28,.5,2.5,Ee),i.frame()}function t1(i,t){const e=t.obb,n=e.w>=e.d,s=(n?e.w:e.d)/2;i.frame(e.cx,t.floorY,e.cz,e.heading);const r=n?s+1.2:0,a=n?0:s+1.2,o=G(15262418);i.box(r-1.4,-1,a-1.4,r+1.4,t.wallH+4.6,a+1.4,o,null),i.cyl(r,t.wallH+4.6,a,2.1,0,4.2,4,G(5922659)),i.box(r-.07,t.wallH+8.8,a-.07,r+.07,t.wallH+10.6,a+.07,gn),i.box(r-.5,t.wallH+9.8,a-.07,r+.5,t.wallH+9.95,a+.07,gn),i.frame()}function e1(i,t,e,n){i.frame(e,t.yAt(e,n),n,.4);const s=46;for(let r=0;r<6;r++){const a=r/6*s,o=1.5-r/6*1.1,l=1.5-(r+1)/6*1.1;i.cyl(0,a,0,o,l,s/6,3,r%2?gn:vs)}i.cyl(0,s,0,.08,.05,5,4,Ee),i.blob(0,s+5.1,0,.3,.3,.3,5,3,G(16726832),void 0,2.5);for(const[r,a]of[[.3,38],[2.4,35],[4.4,40]])i.cyl(Math.cos(r)*.9,a,Math.sin(r)*.9,.55,.55,.35,8,gn,gn);i.box(2.5,0,-1.5,5.5,2.6,1.5,G(13619919),G(9080716)),i.frame()}function n1(i,t,e,n,s,r){const a=s.nearest(e,n,60),o=a?Math.atan2(a.px-e,a.pz-n):0;i.frame(e,t.yAt(e,n)+.1,n,o);const l=G(3116874);for(const[c,d]of[[-6,3.5],[6,3.5],[-6,9.5],[6,9.5]])Vn(i,r,c,d,.2,0,5,gn);i.box(-8,5,2,8,5.25,11,gn,G(14277590),G(15921902),.5),i.box(-8.05,5.25,1.95,8.05,5.9,11.05,l,G(14277590));for(const c of[-4,0,4])i.box(c-1.3,0,6.2,c+1.3,.2,6.8,Ms),i.box(c-.4,.2,6.25,c+.4,1.7,6.75,gn,l),r.polygons.push(Hn(i,c-.4,6.25,c+.4,6.75));i.frame()}function i1(i,t,e,n,s){for(let r=0;r<3;r++){const a=e+(s()-.5)*16,o=n+(s()-.5)*16;i.frame(a,t.yAt(a,o)+.05,o,s()*Math.PI),i.box(-1,.7,-.4,1,.78,.4,Xe,void 0,Pe),i.box(-1,.4,-.85,1,.46,-.6,Xe,void 0,Pe),i.box(-1,.4,.6,1,.46,.85,Xe,void 0,Pe),i.box(-.75,0,-.7,-.65,.7,.7,Ee,null),i.box(.65,0,-.7,.75,.7,.7,Ee,null)}i.frame()}function s1(i){if(!i.hasDetail)return null;const{town:t,hf:e,roads:n,paths:s}=i,r=new ee,a=Ge(4411),o=[12597547,3108687,15921902,3426654,9268810,14266938,10134443].map(G),l=G(7301730),c=G(3103290),d=[G(13115434),G(15254046)],h=t.houses,u=mu(t),f=[];for(let E=0;E<h.length;E+=Ml)h[E+5]!==1&&f.push(h[E]/4,h[E+1]/4);const p=f.length;for(const[,E,,,,,,S]of vl)S!=="s"&&E[2]>=5&&f.push(E[0],E[1]);for(let E=0;E<f.length;E+=2){const S=f[E],y=f[E+1];if(!i.isDetail(S,y)||i.isClear(S,y))continue;const w=n.nearest(S,y,45),T=a()<.5?-1:1,C=T*(2.5+a()*2.5),P=Math.floor(a()*o.length),U=a()<.7;if(!w||E<p&&u(S,y))continue;const L=w.cls<=3?6.4:3.6;if(w.dist<L+3)continue;const O=(S-w.px)/w.dist,I=(y-w.pz)/w.dist,z=-I,Q=O,N=Math.atan2(O,I),V=w.px+O*L+z*C,K=w.pz+I*L+Q*C;if(!i.isClear(V,K)&&(r.frame(V,e.yAt(V,K),K,N),r.box(-.05,0,-.05,.05,.95,.05,l),r.box(-.17,.95,-.22,.17,1.22,.22,o[P],re(o[P],.8)),U)){const Y=w.px+O*(L-1.1)+z*(C+T*1.5),Z=w.pz+I*(L-1.1)+Q*(C+T*1.5);r.frame(Y,e.yAt(Y,Z),Z,N),d.forEach((F,q)=>{r.box(q*.72-.28,0,-.33,q*.72+.28,.96,.33,c),r.box(q*.72-.3,.96,-.36,q*.72+.3,1.04,.36,F)})}}const x=G(7034692),m=G(5917242),g=G(2829102),M=G(14276303),v=42,_=new ee;for(const E of s){if(E.cls>3||E.flags)continue;const S=E.pts.length/3;let y=v*.4,w=null;for(let T=1;T<S;T++){const C=E.pts[T*3-3],P=E.pts[T*3-1],U=E.pts[T*3],L=E.pts[T*3+2],O=Math.hypot(U-C,L-P);if(y+=O,y<v)continue;y=0;const I=(U-C)/(O||1),z=(L-P)/(O||1),Q=E.width/2+2.5,N=U+z*Q,V=L-I*Q;if(!i.isDetail(N,V)||i.isClear(N,V)||!e.inside(N,V,20)){w=null;continue}const K=e.yAt(N,V);_.frame(N,K,V,Math.atan2(I,z)),_.cyl(0,0,0,.15,.1,9.2,6,x),_.box(-1.15,8.45,-.06,1.15,8.58,.06,m);for(const Z of[-.95,0,.95])_.box(Z-.04,8.58,-.04,Z+.04,8.72,.04,M);const Y={x:N,y:K+8.72,z:V,nx:z,nz:-I};if(w&&Math.hypot(Y.x-w.x,Y.z-w.z)<v*1.8){_.frame();for(const Z of[-.95,0,.95]){const F=w.x+w.nx*Z,q=w.z+w.nz*Z,st=Y.x+Y.nx*Z,ct=Y.z+Y.nz*Z,et=(F+st)/2,it=(q+ct)/2,At=(w.y+Y.y)/2-.5;for(const[Rt,Gt,Vt,ht,ft,xt]of[[F,w.y,q,et,At,it],[et,At,it,st,Y.y,ct]])_.quad(Rt,Gt,Vt,ht,ft,xt,ht,ft+.035,xt,Rt,Gt+.035,Vt,g),_.quad(Rt,Gt,Vt,ht,ft,xt,ht+Y.nx*.035,ft,xt+Y.nz*.035,Rt+Y.nx*.035,Gt,Vt+Y.nz*.035,g)}}w=Y}}if(!r.vertexCount&&!_.vertexCount)return null;const b=new qt(r.build(),ms());if(b.castShadow=!0,b.receiveShadow=!0,b.name="street-detail",_.vertexCount){const E=new qt(_.build(),ms());E.castShadow=!1,E.receiveShadow=!0,E.name="power-poles",b.add(E)}return b}function r1(i){const{town:t,hf:e,paths:n}=i,s=120,r=new Map,a=t.houses;for(let C=0;C<a.length;C+=Ml){const P=Math.floor(a[C]/4/s)*4096+Math.floor(a[C+1]/4/s)+8390656;r.set(P,(r.get(P)??0)+1)}const[o,l]=mn(t.meta,-38.63385,145.7285),c=(C,P)=>(r.get(Math.floor(C/s)*4096+Math.floor(P/s)+2048*4097)??0)>=4||Math.hypot(C-o,P-l)<380,d=[];for(const C of n){if(C.cls>2||C.flags)continue;const P=C.cls===0?48:58,U=C.pts.length/3;let L=P*.5,O=1;for(let I=1;I<U;I++){const z=C.pts[I*3-3],Q=C.pts[I*3-1],N=C.pts[I*3],V=C.pts[I*3+2],K=Math.hypot(N-z,V-Q);if(L+=K,L<P)continue;L=0,O=-O;const Y=(N-z)/(K||1),Z=(V-Q)/(K||1),F=C.width/2+1.6,q=N-Z*F*O,st=V+Y*F*O;!c(q,st)||!e.inside(q,st,20)||i.isClear(q,st)||d.push(q,e.yAt(q,st),st,Math.atan2(Z*O,-Y*O))}}const h=new ee,u=G(9278358);h.cyl(0,0,0,.11,.07,8.2,5,u),h.box(-.05,8.1,0,.05,8.22,2.2,u),h.box(-.22,8,1.7,.22,8.14,2.5,G(5922659)),h.quad(-.2,7.99,2.48,.2,7.99,2.48,.2,7.99,1.72,-.2,7.99,1.72,G(16773320),3);const f=d.length/4,p=new Ve(h.build(),ms(),f),x=document.createElement("canvas");x.width=x.height=64;const m=x.getContext("2d"),g=m.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,"rgba(255,214,150,0.85)"),g.addColorStop(.45,"rgba(255,196,120,0.32)"),g.addColorStop(1,"rgba(255,180,100,0)"),m.fillStyle=g,m.fillRect(0,0,64,64);const M=new Zo(x);M.colorSpace=Ne;const v=new On(34,34);v.rotateX(-Math.PI/2);const _=new dn({map:M,transparent:!0,opacity:0,blending:wa,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),b=new Ve(v,_,f);b.renderOrder=3;const E=new te,S=new bn,y=new H(0,1,0),w=new H(1,1,1),T=new H;for(let C=0;C<f;C++){const P=d[C*4],U=d[C*4+1],L=d[C*4+2],O=d[C*4+3];S.setFromAxisAngle(y,O),p.setMatrixAt(C,E.compose(T.set(P,U,L),S,w));const I=P+Math.sin(O)*2.1,z=L+Math.cos(O)*2.1;b.setMatrixAt(C,E.compose(T.set(I,e.yAt(I,z)+.5,z),S.identity(),w))}return p.castShadow=!1,p.computeBoundingSphere(),b.computeBoundingSphere(),b.onBeforeRender=()=>{_.opacity=ha.value*.9},b.visible=!0,{lights:p,pools:b,poolMat:_}}function a1(i){const{town:t,hf:e,footprints:n,roads:s}=i,r=new qe;r.name="landmarks";const a=new ee,o=new ee,l=Ge(20261111),c={polygons:[],circles:[]},d={group:r,nightMaterials:[],blockers:c};t.piers[0]&&(d.jetty=Y_(a,e,t.piers[0]));for(const[w,T]of[[-38.63578,145.73393],[-38.63595,145.73085]]){const[C,P]=mn(t.meta,w,T);Z_(a,e,C,P)}const h=n.find(w=>w.name==="Inverloch Surf Life Saving Club");h&&(d.surf=K_(a,e,h,c));const u=n.find(w=>w.name==="The Hub");u&&q_(a,e,u,c);for(const w of n)w.kind==="church"&&t1(a,w);let f=0;for(const w of t.pitches)w.s==="australian_football"?J_(a,o,e,w.p,f++===0):w.s==="tennis"||w.s==="bowls"?$_(a,o,e,w.p,w.s):w.s==="skateboard"&&Q_(a,e,w.p);const[p,x]=mn(t.meta,-38.63529,145.72876);for(const w of t.playgrounds){const[T,C]=_a(w);j_(a,e,w,Math.hypot(T-p,C-x)<60,l)}const[m,g]=mn(t.meta,-38.62462,145.71011);e1(a,e,m,g);const[M,v]=mn(t.meta,-38.63161,145.72943);n1(a,e,M,v,s,c);for(const[w,T]of[[-38.6358,145.72885],[-38.63447,145.72923],[-38.63545,145.72875]]){const[C,P]=mn(t.meta,w,T);i1(a,e,C,P,l)}const _=new qt(a.build(),ms());_.castShadow=!0,_.receiveShadow=!0,r.add(_);const b=o.build();b.deleteAttribute("glow");const E=new qt(b,nr(new dn({vertexColors:!0,side:Ce,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})));r.add(E);const S=s1(i);S&&r.add(S);const y=r1(i);return r.add(y.lights,y.pools),d.nightMaterials.push(y.poolMat),d}const o1=Xt.lights_fragment_begin.replace("getDirectionalLightInfo( directionalLight, directLight );",`getDirectionalLightInfo( directionalLight, directLight );
    // The atmosphere owns the scene's only directional light.
    directLight.color *= cloudSunlight(vCoastalWorld);`),l1=`
  vec4 coastalPosition = vec4(transformed, 1.0);
  #ifdef USE_BATCHING
    coastalPosition = batchingMatrix * coastalPosition;
  #endif
  #ifdef USE_INSTANCING
    coastalPosition = instanceMatrix * coastalPosition;
  #endif
  vCoastalWorld = (modelMatrix * coastalPosition).xyz;
`,c1=`
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
`;class h1{constructor(t,e,n,s,r,a,o){X(this,"prepared",new WeakSet);X(this,"inlet",{value:new H});X(this,"mist");this.color=n,this.clouds=r,this.sunDir=a,this.cloudShadowStrength=o,this.inlet.value.set(t,0,e),this.mist={value:Number(s)}}setMist(t){this.mist.value=Number(t)}setWaterLevel(t){this.inlet.value.y=t}add(t){t.traverse(e=>{const{material:n}=e;if(n)for(const s of Array.isArray(n)?n:[n])this.prepare(s)})}addWater(t){this.prepare(t.material,!0)}prepare(t,e=!1){if(!t.toneMapped||this.prepared.has(t)||t instanceof nn&&!e)return;this.prepared.add(t);const n=t.onBeforeCompile,s=t.customProgramCacheKey();t.customProgramCacheKey=()=>s+(e?":coastal-water-cloud":":coastal-haze-cloud"),t.onBeforeCompile=(r,a)=>{n.call(t,r,a),r.uniforms.uCoastalColor=this.color,r.uniforms.uInletCenter=this.inlet,r.uniforms.uCoastalMist=this.mist;const o=e||t instanceof Rn||t instanceof $r||t instanceof rp||t instanceof ap;o&&Object.assign(r.uniforms,this.clouds.uniforms,{uCloudSunDir:this.sunDir,uCloudShadowStrength:this.cloudShadowStrength});const l=(o?ou+$x:"")+c1;e||(r.vertexShader=`varying vec3 vCoastalWorld;
`+r.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
`+l1));const c=e?r.fragmentShader.replace("varying vec3 vW;","").replace("col += uSunColor *",`float sunlight = cloudSunlight(vW);
          col *= mix(1.0, sunlight, 0.22);
          col += uSunColor * sunlight *`):o?r.fragmentShader.replace("#include <lights_fragment_begin>",o1):r.fragmentShader;r.fragmentShader=(e?l.replace(/vCoastalWorld/g,"vW"):l)+c.replace("#include <tonemapping_fragment>",`gl_FragColor.rgb = coastalLight(gl_FragColor.rgb);
#include <tonemapping_fragment>`)},t.needsUpdate=!0}}const bu=330;function zi(i,t){let e=Math.imul(i^t,73244475);return e=Math.imul(e^e>>>16,73244475),((e^e>>>16)>>>0)/4294967296}function ys(i,t){const e=Math.min(1,Math.max(0,i/t));return e*e*(3-2*e)}class u1{constructor(){X(this,"window",0);X(this,"age",0);X(this,"duration",0);X(this,"rain",0);X(this,"wetness",0);X(this,"cover",.38);X(this,"storm",!1)}update(t){this.window=Math.floor(t/bu);const e=90+48*zi(this.window,17);this.duration=60+22*zi(this.window,29),this.age=t-this.window*bu-e;const n=this.age-this.duration,s=ys(this.age+42,42)*(1-ys(n,36));this.storm=this.window%4===0,this.cover=.38+(this.storm?.6:.4)*s;const r=this.storm?.97:.55+.15*zi(this.window,41);this.rain=r*ys(this.age,9)*(1-ys(n+14,14)),this.wetness=ys(this.age,23)*(1-ys(n,68))}}const Tl=[18,45],Ma=8;class d1{constructor(t,e,n){X(this,"line");X(this,"vertices",new Float32Array((Ma+1)*2*3));X(this,"center",new Nt);X(this,"key");X(this,"previousTime");X(this,"arrival");this.inletX=e,this.inletZ=n;const s=new Re;s.setAttribute("position",new Te(this.vertices,3).setUsage(Ci));const r=[];for(let a=0;a<Ma;a++){const o=2*a;r.push(o,o+1,o+2,o+1,o+3,o+2)}s.setIndex(r),this.line=new qt(s,new dn({color:15002367,transparent:!0,depthWrite:!1,side:Ce})),this.line.material.forceSinglePass=!0,this.line.name="inlet lightning",this.line.visible=!1,t.add(this.line)}shape(t,e){const n=this.inletX+640*(zi(t,3)-.5),s=this.inletZ+490*(zi(t,13)-.5);this.center.set(n,s);const r=Math.atan2(e.x-n,e.z-s),a=Math.cos(r),o=-Math.sin(r);for(let l=0;l<=Ma;l++){const c=l/Ma,d=n+34*c+33*(zi(t,60+l)-.5),h=s+18*(zi(t,30+l)-.5),u=422-400*c;for(let f=0;f<2;f++){const p=(f?1:-1)*(1.9-c*1.1),x=3*(2*l+f);this.vertices[x]=d+p*a,this.vertices[x+1]=u,this.vertices[x+2]=h+p*o}}this.line.geometry.attributes.position.needsUpdate=!0,this.line.geometry.computeBoundingSphere()}update(t,e,n,s){const r=this.previousTime;this.previousTime=t,this.line.visible=!1;const a=r!==void 0&&t>=r&&t-r<1.5&&!document.hidden;if(a||(this.arrival=void 0),!e.storm||e.age<Tl[0])return 0;const o=e.age>=Tl[1]?1:0,l=e.age-Tl[o],c=e.window*2+o;if(c!==this.key&&(this.key=c,this.shape(c,n),a&&l<.45)){const h=Math.hypot(this.center.x-n.x,110-n.y,this.center.y-n.z);h<6500&&(this.arrival=t-l+Math.max(.35,h/343))}if(this.arrival!==void 0&&t>=this.arrival){this.arrival=void 0;const h=Math.hypot(this.center.x-n.x,this.center.y-n.z);s==null||s(Qt.clamp(1-h/7e3,.1,1))}const d=Math.max(0,1-l/.32);return this.line.visible=d>0,this.line.material.opacity=d,d}dispose(){this.line.removeFromParent(),this.line.geometry.dispose(),this.line.material.dispose()}}const Eu="dmFyIF89T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBKPShrLGosRSk9PmogaW4gaz9fKGssaix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6RX0pOmtbal09RTt2YXIgdz0oayxqLEUpPT5KKGssdHlwZW9mIGohPSJzeW1ib2wiP2orIiI6aixFKTsoZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3Mgantjb25zdHJ1Y3RvcihuLHMsdCxhLGksbCxyLGgsYz1bXSl7dyh0aGlzLCJueCIpO3codGhpcywibnoiKTt3KHRoaXMsInkiKTt3KHRoaXMsInhNaW4iKTt3KHRoaXMsInpNaW4iKTt3KHRoaXMsInhNYXgiKTt3KHRoaXMsInpNYXgiKTt3KHRoaXMsImR4Iik7dyh0aGlzLCJkeiIpO3codGhpcywiY2VsbFgiKTt3KHRoaXMsImNlbGxaIik7aWYodGhpcy5yYXc9bix0aGlzLmV4cG9zdXJlPXMsdGhpcy53PXQsdGhpcy5oPWEsdGhpcy5zaXplWD1pLHRoaXMuc2l6ZVo9bCx0aGlzLnBhdGNoZXM9Yyx0aGlzLmNlbGxYPWkvdCx0aGlzLmNlbGxaPWwvYSx0aGlzLm54PU1hdGguZmxvb3IoKHQtMSkvcikrMSx0aGlzLm56PU1hdGguZmxvb3IoKGEtMSkvcikrMSx0aGlzLmR4PXRoaXMuY2VsbFgqcix0aGlzLmR6PXRoaXMuY2VsbFoqcix0aGlzLnhNaW49LWkvMit0aGlzLmNlbGxYLzIsdGhpcy56TWluPS1sLzIrdGhpcy5jZWxsWi8yLHRoaXMueE1heD10aGlzLnhNaW4rKHRoaXMubngtMSkqdGhpcy5keCx0aGlzLnpNYXg9dGhpcy56TWluKyh0aGlzLm56LTEpKnRoaXMuZHosdGhpcy55PWg/P25ldyBGbG9hdDMyQXJyYXkodGhpcy5ueCp0aGlzLm56KSwhaClmb3IobGV0IG89MDtvPHRoaXMubno7bysrKWZvcihsZXQgcD0wO3A8dGhpcy5ueDtwKyspdGhpcy55W28qdGhpcy5ueCtwXT1uW28qcip0K3Aqcl0qMS41fXlBdChuLHMpe2Zvcihjb25zdCB0IG9mIHRoaXMucGF0Y2hlcylpZihuPj10LnhNaW4mJm48PXQueE1heCYmcz49dC56TWluJiZzPD10LnpNYXgpcmV0dXJuIEUodCxuLHMpO3JldHVybiB0aGlzLmJhc2VZQXQobixzKX1iYXNlWUF0KG4scyl7cmV0dXJuIEUodGhpcyxuLHMpfXBhdGNoT3ZlcmxhcHMobixzLHQsYSl7cmV0dXJuIHRoaXMucGF0Y2hlcy5zb21lKGk9Pm48aS54TWF4JiZ0PmkueE1pbiYmczxpLnpNYXgmJmE+aS56TWluKX1iaWxpbmVhcihuLHMsdCl7bGV0IGE9KHMrdGhpcy5zaXplWC8yKS90aGlzLmNlbGxYLS41LGk9KHQrdGhpcy5zaXplWi8yKS90aGlzLmNlbGxaLS41O2E8MD9hPTA6YT50aGlzLnctMS4wMDAxJiYoYT10aGlzLnctMS4wMDAxKSxpPDA/aT0wOmk+dGhpcy5oLTEuMDAwMSYmKGk9dGhpcy5oLTEuMDAwMSk7Y29uc3QgbD1hfDAscj1pfDAsaD1hLWwsYz1pLXIsbz1yKnRoaXMudytsO3JldHVybihuW29dKigxLWgpK25bbysxXSpoKSooMS1jKSsobltvK3RoaXMud10qKDEtaCkrbltvK3RoaXMudysxXSpoKSpjfW1ldHJlc0F0KG4scyl7cmV0dXJuIHRoaXMuYmlsaW5lYXIodGhpcy5yYXcsbixzKX1leHBvc3VyZUF0KG4scyl7cmV0dXJuIHRoaXMuYmlsaW5lYXIodGhpcy5leHBvc3VyZSxuLHMpfWluc2lkZShuLHMsdD0wKXtyZXR1cm4gbj50aGlzLnhNaW4rdCYmbjx0aGlzLnhNYXgtdCYmcz50aGlzLnpNaW4rdCYmczx0aGlzLnpNYXgtdH19ZnVuY3Rpb24gRShlLG4scyl7bGV0IHQ9KG4tZS54TWluKS9lLmR4LGE9KHMtZS56TWluKS9lLmR6O3Q8MD90PTA6dD5lLm54LTEmJih0PWUubngtMSksYTwwP2E9MDphPmUubnotMSYmKGE9ZS5uei0xKTtjb25zdCBpPU1hdGgubWluKHR8MCxlLm54LTIpLGw9TWF0aC5taW4oYXwwLGUubnotMikscj10LWksaD1hLWwsYz1sKmUubngraSxvPWUueVtjXSxwPWUueVtjKzFdLHU9ZS55W2MrZS5ueF0sZj1lLnlbYytlLm54KzFdO3JldHVybiByK2g8PTE/bysocC1vKSpyKyh1LW8pKmg6ZisodS1mKSooMS1yKSsocC1mKSooMS1oKX1jb25zdCBaPVt7ZW5kczpbNDAwMTMsMjc0MzksMjc2MDIsMjA0ODldLHRpZToyNCxhbmNob3JzOltbMTI4MCwxMS44XSxbMTMwMCwxMC44XSxbMTMyMCw5Ljk4XSxbMTMzMCw5LjgxXSxbMTM0MCw5LjY3XSxbMTM1MCw5LjkzXSxbMTM2NSwxMC4xN10sWzEzODAsMTAuNTVdLFsxNDAwLDEwLjc3XV19LHtlbmRzOlstNDc0MywtNDAzLC0yNzcyLC0xMjJdLHRpZToxMixhbmNob3JzOltbNTksMjQuNjJdLFs3NCwyMi42M10sWzg5LDE5LjY5XSxbMTAwLDE3LjddLFsxMTAsMTUuOTVdLFsxMjAsMTQuMTldLFsxMzIsMTIuMDddLFsxNDQsMTAuMjNdXX0se2VuZHM6Wy0zMDIxNCwxMTk2OCwtNDAwMTMsMjEwOTVdLHRpZToyNSxhbmNob3JzOltbMTA4MCw1LjE0XSxbMTEwMCw1LjJdLFsxMTIwLDUuNTddLFsxMTM1LDYuNjVdLFsxMTUwLDguNjFdLFsxMTU1LDkuMjRdLFsxMTY1LDEwLjM1XSxbMTE3NSwxMS42NV0sWzExOTIsMTVdLFsxMjEwLDE4LjRdLFsxMjM1LDIwLjY4XSxbMTI1NSwyMS42M11dfSx7ZW5kczpbLTE3ODU1LDYyMTUsLTE2NzA3LC0yMzczXSx0aWU6OCxhbmNob3JzOltbMTgwLDEzLjY1XSxbMTkyLDE2XSxbMjA0LDE4LjZdLFsyMjAsMjEuMDJdLFsyNDQsMjMuNTNdXX0se2VuZHM6Wy0yODAzMiw2NzI3LC0yNDI3OCw4MTE3XSx0aWU6NyxhbmNob3JzOltbOCwxMS43Ml0sWzE0LDExLjUxXSxbMjMsMTAuMjhdLFszMyw4LjQyXSxbNDMsNi42OV0sWzUyLDUuNTNdXX0se2VuZHM6Wy0zMDEwMywxMTY0NSwtMzUwMjcsMTEyNDRdLHRpZToxMyxhbmNob3JzOltbNDI4LDUuODddLFs0NDIsNy4wOF0sWzQ1NywxMC4yNl0sWzQ3NSwxNC4xOF0sWzQ5NSwxNy42NF0sWzUxMCwxOS4wNV0sWzUyOSwyMC4zOF1dfV0sTD0uMDE1LFk9MS41O2Z1bmN0aW9uIFMoZSl7Y29uc3Qgbj1NYXRoLm1heCgwLE1hdGgubWluKDEsZSkpO3JldHVybiBuKm4qKDMtMipuKX1mdW5jdGlvbiBPKGUpe2NvbnN0IG49ZVs1XTtyZXR1cm4gWi5maW5kKCh7ZW5kczpzfSk9PnNbMF09PT1uWzBdJiZzWzFdPT09blsxXSYmc1syXT09PW5bbi5sZW5ndGgtMl0mJnNbM109PT1uW24ubGVuZ3RoLTFdKX1jbGFzcyBQe2NvbnN0cnVjdG9yKG4scyl7dyh0aGlzLCJzdGFydCIpO3codGhpcywiZW5kIik7dyh0aGlzLCJvdXRlciIpO3codGhpcywicG9pbnRzIixbXSk7dyh0aGlzLCJzbG9wZXMiKTt3KHRoaXMsImhhbGZXaWR0aCIpO3RoaXMucHJvZmlsZT1zLHRoaXMuaGFsZldpZHRoPW5bM10vMjAsdGhpcy5vdXRlcj10aGlzLmhhbGZXaWR0aCtZKyhuWzBdPDM/MjA6MTIpO2NvbnN0e2FuY2hvcnM6dCx0aWU6YX09czt0aGlzLnN0YXJ0PXRbMF1bMF0tYSx0aGlzLmVuZD10W3QubGVuZ3RoLTFdWzBdK2E7Y29uc3QgaT10LnNsaWNlKDEpLm1hcCgoW2gsY10sbyk9PihjLXRbb11bMV0pLyhoLXRbb11bMF0pKTt0aGlzLnNsb3Blcz1baVswXV07Zm9yKGxldCBoPTE7aDxpLmxlbmd0aDtoKyspe2NvbnN0IGM9aVtoLTFdLG89aVtoXTt0aGlzLnNsb3Blcy5wdXNoKGMqbz4wPzIqYypvLyhjK28pOjApfXRoaXMuc2xvcGVzLnB1c2goaVtpLmxlbmd0aC0xXSk7Y29uc3QgbD1uWzVdO2xldCByPTA7Zm9yKGxldCBoPTI7aDxsLmxlbmd0aDtoKz0yKXtjb25zdCBjPWxbaC0yXS8xMCxvPWxbaC0xXS8xMCxwPWxbaF0vMTAtYyx1PWxbaCsxXS8xMC1vLGY9TWF0aC5oeXBvdChwLHUpO2lmKGYmJnIrZj49dGhpcy5zdGFydCYmcjw9dGhpcy5lbmQpe2NvbnN0IHg9TWF0aC5tYXgodGhpcy5zdGFydCxyKSxNPU1hdGgubWluKHRoaXMuZW5kLHIrZik7Zm9yKGNvbnN0IGQgb2YgdGhpcy5wb2ludHMubGVuZ3RoP1tNXTpbeCxNXSl0aGlzLnBvaW50cy5wdXNoKHt4OmMrcCooZC1yKS9mLHo6byt1KihkLXIpL2YsczpkfSl9cis9Zn19d2VpZ2h0KG4pe3JldHVybiBTKE1hdGgubWluKG4tdGhpcy5zdGFydCx0aGlzLmVuZC1uKS90aGlzLnByb2ZpbGUudGllKX1kZWNrTGlmdChuLHMpe3JldHVybiBzKyguMTEtcykqdGhpcy53ZWlnaHQobil9ZWxldmF0aW9uKG4scyl7Y29uc3R7YW5jaG9yczp0fT10aGlzLnByb2ZpbGU7bGV0IGE9MDtmb3IoO2ErMjx0Lmxlbmd0aCYmbj50W2ErMV1bMF07KWErKztjb25zdFtpLGxdPXRbYV0sW3IsaF09dFthKzFdLGM9ci1pLG89KG4taSkvYztyZXR1cm4obzwwP2wrKG4taSkqdGhpcy5zbG9wZXNbYV06bz4xP2grKG4tcikqdGhpcy5zbG9wZXNbYSsxXTpsKyhoLWwpKlMobykrYypvKigxLW8pKigoMS1vKSp0aGlzLnNsb3Blc1thXS1vKnRoaXMuc2xvcGVzW2ErMV0pKS1NYXRoLmFicyhzKSpMfWdyb3VuZChuLHMsdCxhLGk9MCl7Y29uc3QgbD1uLmJhc2VZQXQocyx0KSxyPXRoaXMud2VpZ2h0KGEpO3JldHVybiBsKyh0aGlzLmVsZXZhdGlvbihhLGkpLWwpKnJ9c2hvdWxkZXIobixzLHQpe2xldCBhPXRoaXMub3V0ZXIqKjIsaT0wO2ZvcihsZXQgYz0xO2M8dGhpcy5wb2ludHMubGVuZ3RoO2MrKyl7Y29uc3Qgbz10aGlzLnBvaW50c1tjLTFdLHA9dGhpcy5wb2ludHNbY10sdT1wLngtby54LGY9cC56LW8ueix4PU1hdGgubWF4KDAsTWF0aC5taW4oMSwoKG4tby54KSp1KyhzLW8ueikqZikvKHUqdStmKmZ8fDEpKSksTT0obi1vLngteCp1KSoqMisocy1vLnoteCpmKSoqMjtNPGEmJihhPU0saT1vLnMrKHAucy1vLnMpKngpfWNvbnN0IGw9dGhpcy53ZWlnaHQoaSk7aWYoIWwpcmV0dXJuIHQ7Y29uc3Qgcj1NYXRoLnNxcnQoYSksaD1TKCh0aGlzLm91dGVyLXIpLyh0aGlzLm91dGVyLXRoaXMuaGFsZldpZHRoLVkpKTtyZXR1cm4gdCsodGhpcy5lbGV2YXRpb24oaSxyKS10KSpsKmh9fWZ1bmN0aW9uIFcoZSl7Y29uc3Qgbj1PKGUpO3JldHVybiBuJiZuZXcgUChlLG4pfWZ1bmN0aW9uIEgoZSxuKXtjb25zdCBzPVtdO2Zvcihjb25zdCBhIG9mIG4pe2NvbnN0IGk9VyhhKTtpZighaXx8aS5wb2ludHMubGVuZ3RoPDIpY29udGludWU7Y29uc3QgbD1pLnBvaW50cy5tYXAobz0+by54KSxyPWkucG9pbnRzLm1hcChvPT5vLnopLGg9aS5vdXRlcixjPXtpMDpNYXRoLm1heCgwLE1hdGguZmxvb3IoKE1hdGgubWluKC4uLmwpLWgtZS54TWluKS9lLmR4KSksaTE6TWF0aC5taW4oZS5ueC0xLE1hdGguY2VpbCgoTWF0aC5tYXgoLi4ubCkraC1lLnhNaW4pL2UuZHgpKSxqMDpNYXRoLm1heCgwLE1hdGguZmxvb3IoKE1hdGgubWluKC4uLnIpLWgtZS56TWluKS9lLmR6KSksajE6TWF0aC5taW4oZS5uei0xLE1hdGguY2VpbCgoTWF0aC5tYXgoLi4ucikraC1lLnpNaW4pL2UuZHopKSxncmFkZXM6W2ldfTtmb3IobGV0IG89MDtvPHMubGVuZ3RoOyl7Y29uc3QgcD1zW29dO2lmKGMuaTA+PXAuaTF8fHAuaTA+PWMuaTF8fGMuajA+PXAuajF8fHAuajA+PWMuajEpe28rKztjb250aW51ZX1jLmkwPU1hdGgubWluKGMuaTAscC5pMCksYy5pMT1NYXRoLm1heChjLmkxLHAuaTEpLGMuajA9TWF0aC5taW4oYy5qMCxwLmowKSxjLmoxPU1hdGgubWF4KGMuajEscC5qMSksYy5ncmFkZXMucHVzaCguLi5wLmdyYWRlcykscy5zcGxpY2UobywxKSxvPTB9cy5wdXNoKGMpfWNvbnN0IHQ9TWF0aC5jZWlsKE1hdGgubWF4KGUuZHgsZS5keikvMyk7cmV0dXJuIHMubWFwKCh7aTA6YSxpMTppLGowOmwsajE6cixncmFkZXM6aH0pPT57Y29uc3QgYz1lLnhNaW4rYSplLmR4LG89ZS56TWluK2wqZS5keixwPWUueE1pbitpKmUuZHgsdT1lLnpNaW4rciplLmR6LGY9KGktYSkqdCsxLHg9KHItbCkqdCsxLE09ZS5keC90LGQ9ZS5kei90LGI9bmV3IEZsb2F0MzJBcnJheShmKngpO2ZvcihsZXQgej0wO3o8eDt6KyspZm9yKGxldCBtPTA7bTxmO20rKyl7Y29uc3QgeT1jK20qTSxBPW8reipkLGc9ZS5iYXNlWUF0KHksQSk7bGV0IHY9ZztpZihtPjAmJm08Zi0xJiZ6PjAmJno8eC0xKWZvcihjb25zdCBDIG9mIGgpdis9Qy5zaG91bGRlcih5LEEsZyktZztiW3oqZittXT12fXJldHVybntpMDphLGkxOmksajA6bCxqMTpyLHhNaW46Yyx6TWluOm8seE1heDpwLHpNYXg6dSxueDpmLG56OngsZHg6TSxkejpkLHk6Yn19KX1jb25zdCBUPTEyODtmdW5jdGlvbiBxKGUsbixzLHQsYSl7Y29uc3R7bng6aSxuejpsfT1lLHI9TWF0aC5taW4oVCsxLGktbiksaD1NYXRoLm1pbihUKzEsbC1zKSxjPW5ldyBGbG9hdDMyQXJyYXkocipoKjMpLG89bmV3IEZsb2F0MzJBcnJheShyKmgqMykscD1uZXcgRmxvYXQzMkFycmF5KHIqaCoyKTtmb3IobGV0IHg9czt4PHMraDt4KyspZm9yKGxldCBNPW47TTxuK3I7TSsrKXtjb25zdCBkPSh4LXMpKnIrTS1uLGI9ZS54TWluK00qZS5keCx6PWUuek1pbit4KmUuZHo7Y1tkKjNdPWIsY1tkKjMrMV09ZS55W3gqaStNXSxjW2QqMysyXT16LHBbZCoyXT0oYit0LnNpemVYLzIpL3Quc2l6ZVgscFtkKjIrMV09MS0oeit0LnNpemVaLzIpL3Quc2l6ZVo7Y29uc3QgbT1lIT09dCYmKE09PT0wfHx4PT09MHx8TT09PWktMXx8eD09PWwtMSkseT1tPyh0LmJhc2VZQXQoYit0LmR4LHopLXQuYmFzZVlBdChiLXQuZHgseikpLygyKnQuZHgpOihlLnlbeCppK01hdGgubWluKE0rMSxpLTEpXS1lLnlbeCppK01hdGgubWF4KE0tMSwwKV0pLygyKmUuZHgpLEE9bT8odC5iYXNlWUF0KGIseit0LmR6KS10LmJhc2VZQXQoYix6LXQuZHopKS8oMip0LmR6KTooZS55W01hdGgubWluKHgrMSxsLTEpKmkrTV0tZS55W01hdGgubWF4KHgtMSwwKSppK01dKS8oMiplLmR6KSxnPU1hdGguaHlwb3QoeSwxLEEpO29bZCozXT0teS9nLG9bZCozKzFdPTEvZyxvW2QqMysyXT0tQS9nfWNvbnN0IHU9bmV3IFVpbnQxNkFycmF5KChyLTEpKihoLTEpKjYpO2xldCBmPTA7Zm9yKGxldCB4PTA7eDxoLTE7eCsrKWZvcihsZXQgTT0wO008ci0xO00rKyl7aWYoYS5zb21lKHk9Pm4rTT49eS5pMCYmbitNPHkuaTEmJnMreD49eS5qMCYmcyt4PHkuajEpKWNvbnRpbnVlO2NvbnN0IGQ9eCpyK00sYj1kKzEsej1kK3IsbT16KzE7dVtmKytdPWQsdVtmKytdPXosdVtmKytdPWIsdVtmKytdPWIsdVtmKytdPXosdVtmKytdPW19cmV0dXJue3BvczpjLG5vcjpvLHV2OnAsaWR4OmY9PT11Lmxlbmd0aD91OnUuc2xpY2UoMCxmKX19ZnVuY3Rpb24gQihlKXtjb25zdCBuPVtdO2Zvcihjb25zdCBzIG9mW2UsLi4uZS5wYXRjaGVzXSlmb3IobGV0IHQ9MDt0PHMubnotMTt0Kz1UKWZvcihsZXQgYT0wO2E8cy5ueC0xO2ErPVQpe2NvbnN0IGk9cz09PWU/ZS5wYXRjaGVzLmZpbHRlcihsPT5hPGwuaTEmJmErVD5sLmkwJiZ0PGwuajEmJnQrVD5sLmowKTpbXTtuLnB1c2gocShzLGEsdCxlLGkpKX1yZXR1cm4gbn1mdW5jdGlvbiBGKGUpe2NvbnN0IG49YXRvYihlKSxzPW5ldyBVaW50OEFycmF5KG4ubGVuZ3RoKTtmb3IobGV0IHQ9MDt0PG4ubGVuZ3RoO3QrKylzW3RdPW4uY2hhckNvZGVBdCh0KTtyZXR1cm4gbmV3IEludDE2QXJyYXkocy5idWZmZXIsMCxzLmxlbmd0aD4+MSl9YXN5bmMgZnVuY3Rpb24gVihlKXtjb25zdCBuPW5ldyBVaW50OEFycmF5KGUpLHM9bmV3IERhdGFWaWV3KGUpO2xldCB0PTgsYT0wLGk9MCxsPTAscj0wLGg9MDtjb25zdCBjPVtdO2Zvcig7dDxuLmxlbmd0aDspe2NvbnN0IE09cy5nZXRVaW50MzIodCksZD1TdHJpbmcuZnJvbUNoYXJDb2RlKG5bdCs0XSxuW3QrNV0sblt0KzZdLG5bdCs3XSk7aWYoZD09PSJJSERSIilhPXMuZ2V0VWludDMyKHQrOCksaT1zLmdldFVpbnQzMih0KzEyKSxsPW5bdCsxNl0scj1uW3QrMTddLGg9blt0KzIwXTtlbHNlIGlmKGQ9PT0iSURBVCIpYy5wdXNoKG4uc3ViYXJyYXkodCs4LHQrOCtNKSk7ZWxzZSBpZihkPT09IklFTkQiKWJyZWFrO3QrPTEyK019aWYobCE9PTh8fHIhPT0yJiZyIT09Nnx8aCl0aHJvdyBuZXcgRXJyb3IoIlVuc3VwcG9ydGVkIHRlcnJhaW4gaW1hZ2UgZm9ybWF0Iik7Y29uc3Qgbz1yPT09Mj8zOjQscD1uZXcgQmxvYihjKS5zdHJlYW0oKS5waXBlVGhyb3VnaChuZXcgRGVjb21wcmVzc2lvblN0cmVhbSgiZGVmbGF0ZSIpKSx1PW5ldyBVaW50OEFycmF5KGF3YWl0IG5ldyBSZXNwb25zZShwKS5hcnJheUJ1ZmZlcigpKSxmPWEqbyx4PW5ldyBVaW50OEFycmF5KGYqaSk7Zm9yKGxldCBNPTA7TTxpO00rKyl7Y29uc3QgZD11W00qKGYrMSldLGI9TSooZisxKSsxLHo9TSpmO2ZvcihsZXQgbT0wO208ZjttKyspe2NvbnN0IHk9bT49bz94W3orbS1vXTowLEE9TT4wP3hbei1mK21dOjAsZz1tPj1vJiZNPjA/eFt6LWYrbS1vXTowO2xldCB2PXVbYittXTtpZihkPT09MSl2Kz15O2Vsc2UgaWYoZD09PTIpdis9QTtlbHNlIGlmKGQ9PT0zKXYrPXkrQT4+MTtlbHNlIGlmKGQ9PT00KXtjb25zdCBDPU1hdGguYWJzKEEtZyksST1NYXRoLmFicyh5LWcpLFI9TWF0aC5hYnMoeStBLTIqZyk7dis9Qzw9SSYmQzw9Uj95Okk8PVI/QTpnfXhbeittXT12JjI1NX19cmV0dXJue3dpZHRoOmEsaGVpZ2h0OmksY2hhbm5lbHM6byxkYXRhOnh9fWFzeW5jIGZ1bmN0aW9uIEcoZSxuLHMpe2NvbnN0W3QsYV09YXdhaXQgUHJvbWlzZS5hbGwoW2ZldGNoKGUudG93bix7c2lnbmFsOnN9KS50aGVuKHU9PntpZighdS5vayl0aHJvdyBuZXcgRXJyb3IoIkNvdWxkIG5vdCBsb2FkIHRoZSB0b3duIGRhdGEiKTtyZXR1cm4gdS5qc29uKCl9KS50aGVuKHU9PihuKCJTdHJlZXRzIGFuZCBidWlsZGluZ3MiKSx1KSksZmV0Y2goZS5oZWlnaHQse3NpZ25hbDpzfSkudGhlbih1PT57aWYoIXUub2spdGhyb3cgbmV3IEVycm9yKCJDb3VsZCBub3QgbG9hZCB0aGUgdGVycmFpbiIpO3JldHVybiB1LmFycmF5QnVmZmVyKCl9KS50aGVuKFYpLnRoZW4odT0+KG4oIlRlcnJhaW4iKSx1KSldKTtpZihzLmFib3J0ZWQpdGhyb3cgcy5yZWFzb247Y29uc3R7bWV0YTppfT10LGw9YS53aWR0aCphLmhlaWdodCxyPW5ldyBGbG9hdDMyQXJyYXkobCksaD1uZXcgRmxvYXQzMkFycmF5KGwpLGM9YS5jaGFubmVscztmb3IobGV0IHU9MDt1PGw7dSsrKXJbdV09KGEuZGF0YVt1KmNdPDw4fGEuZGF0YVt1KmMrMV0pL2kuaGVpZ2h0U2NhbGUtaS5oZWlnaHRPZmZzZXQsaFt1XT1hLmRhdGFbdSpjKzJdLzI1NTtjb25zdCBvPW5ldyBqKHIsaCxpLmdyaWRbMF0saS5ncmlkWzFdLGkuc2l6ZVswXSxpLnNpemVbMV0sZS50ZXJyYWluU3RlcCkscD1IKG8sdC5yb2Fkcyk7cmV0dXJuIG8ucGF0Y2hlcy5wdXNoKC4uLnApLHt0b3duOnsuLi50LGhvdXNlczpGKHQuaG91c2VzKSxjYWJpbnM6Rih0LmNhYmlucyksY2FyczpGKHQuY2FycyksdHJlZXM6Rih0LnRyZWVzKX0saGVpZ2h0czpyLGV4cG9zdXJlOmgsc3VyZmFjZTpvLnksdGVycmFpblBhdGNoZXM6cCx0ZXJyYWluVGlsZXM6QihvKX19Y29uc3QgRD1zZWxmLFg9bmV3IE1hcDtmdW5jdGlvbiBVKGUsbj1bXSl7RC5wb3N0TWVzc2FnZShlLG4pfWZ1bmN0aW9uIE4oZSl7cmV0dXJuIGUubWFwKG49Pm4uYnVmZmVyKX1ELm9ubWVzc2FnZT1hc3luYyBlPT57dmFyIGk7Y29uc3Qgbj1lLmRhdGEse2lkOnN9PW47aWYoImNhbmNlbCJpbiBuKXsoaT1YLmdldChzKSk9PW51bGx8fGkuYWJvcnQoKTtyZXR1cm59Y29uc3QgdD1uZXcgQWJvcnRDb250cm9sbGVyLHtzaWduYWw6YX09dDtYLnNldChzLHQpO3RyeXtjb25zdHtqb2I6bH09bjtpZihsLmtpbmQ9PT0id29ybGQiKXtjb25zdCByPWF3YWl0IEcobC5zb3VyY2UseD0+VSh7aWQ6cyxwcm9ncmVzczp4fSksYSkse3Rvd246aCxoZWlnaHRzOmMsZXhwb3N1cmU6byxzdXJmYWNlOnAsdGVycmFpblBhdGNoZXM6dSx0ZXJyYWluVGlsZXM6Zn09cjtVKHtpZDpzLHZhbHVlOnJ9LE4oW2MsbyxwLGguaG91c2VzLGguY2FiaW5zLGguY2FycyxoLnRyZWVzLC4uLnUubWFwKCh7eTp4fSk9PngpLC4uLmYuZmxhdE1hcCgoe3Bvczp4LG5vcjpNLHV2OmQsaWR4OmJ9KT0+W3gsTSxkLGJdKV0pKX1lbHNle2NvbnN0IHI9YXdhaXQgZmV0Y2gobC51cmwse3NpZ25hbDphfSk7aWYoIXIub2spdGhyb3cgbmV3IEVycm9yKCJDb3VsZCBub3QgbG9hZCBncm91bmQgZGV0YWlsIik7Y29uc3QgaD1hd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChhd2FpdCByLmJsb2IoKSx7aW1hZ2VPcmllbnRhdGlvbjoiZmxpcFkiLHByZW11bHRpcGx5QWxwaGE6Im5vbmUifSk7aWYoYS5hYm9ydGVkKWguY2xvc2UoKTtlbHNlIHRyeXtVKHtpZDpzLHZhbHVlOmh9LFtoXSl9Y2F0Y2goYyl7dGhyb3cgaC5jbG9zZSgpLGN9fX1jYXRjaChsKXthLmFib3J0ZWR8fFUoe2lkOnMsZXJyb3I6bCBpbnN0YW5jZW9mIEVycm9yP2wubWVzc2FnZTpTdHJpbmcobCl9KX1maW5hbGx5e1guZGVsZXRlKHMpfX19KSgpOwo=",f1=i=>Uint8Array.from(atob(i),t=>t.charCodeAt(0)),wu=typeof self<"u"&&self.Blob&&new Blob([f1(Eu)],{type:"text/javascript;charset=utf-8"});function p1(i){let t;try{if(t=wu&&(self.URL||self.webkitURL).createObjectURL(wu),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;base64,"+Eu,{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}class m1{constructor(){X(this,"worker");X(this,"pending",new Map);X(this,"nextId",0);try{const t=new p1;this.worker=t,t.onmessage=e=>{const n=e.data,s=this.pending.get(n.id);s?s.receive(n):"value"in n&&"close"in n.value&&n.value.close()},t.onerror=e=>{e.preventDefault(),this.close(new Error("Could not start the model worker"))},t.onmessageerror=()=>this.close(new Error("Could not receive data from the model worker"))}catch{}}async run(t,e,n,s){if(n.aborted)throw n.reason;if(this.worker)try{return await this.request(this.worker,t,n,s)}catch{if(n.aborted)throw n.reason}return e()}close(t=new DOMException("Model closed","AbortError")){var e;(e=this.worker)==null||e.terminate(),this.worker=void 0;for(const n of this.pending.values())n.reject(t)}request(t,e,n,s){return new Promise((r,a)=>{const o=++this.nextId,l=()=>{this.pending.delete(o),n.removeEventListener("abort",c)},c=()=>{l(),t.postMessage({id:o,cancel:!0}),a(n.reason)},d=h=>{l(),a(h)};this.pending.set(o,{receive:h=>{if("progress"in h){s==null||s(h.progress);return}l(),"error"in h?a(new Error(h.error)):r(h.value)},reject:d}),n.addEventListener("abort",c,{once:!0});try{t.postMessage({id:o,job:e})}catch(h){d(h)}})}}class Tu{constructor(t,e){X(this,"bounds",new vi);X(this,"level",-1);this.levels=t;for(const s of t)for(const r of s)r.computeBoundingBox(),this.bounds.union(r.boundingBox),r.castShadow=!0,e.add(r);const n=this.bounds.getBoundingSphere(new Di);for(const s of t.flat())s.boundingSphere=n,s.visible=!1}update(t,e,n){const s=this.bounds.distanceToPoint(t),[r,a,o]=n,l=o+e*8,c=h=>this.level<0?1:this.level<=h?1.1:.9,d=s<=r*c(0)?0:s<=a*c(1)?1:s<=l*c(2)?2:3;if(d!==this.level){for(const h of this.levels[this.level]??[])h.visible=!1;for(const h of this.levels[d]??[])h.visible=!0;this.level=d}}}const Au=.25,bs=[16053490,16053490,16053490,13225168,10725291,5593438,2040100,2838410,11020586,2054728,14266938,8368595],Ru=[15223869,3113154,15909424,3843690,16777215,9329589,15764004,2042422,15231654,4899008],ai=[14826299,15764004,15909424,3715691,3117008,13651872,3720896,16053490].map(G);function Cu(){return Cl(0,!1)}function Al(i){const t=new ee,e=new ee;return Ll(i,t,e,G(16777215)),{body:t.build(),trim:e.build()}}function Rl(i){const t=i===1,e=i===2,n=e?-2.3:-2.18,s=e?2.22:2.18,r=e?1.035:t?.99:.93;return{wagon:t,ute:e,tail:n,nose:s,sill:r,belt:o=>{const l=Math.max(0,(n+.58-o)/.58,(o-s+.55)/.55),c=o<0?t||e?.045:.095:.14,d=r-l*c;return{width:.88-.13*l,shoulder:d-.105,top:d}}}}function Cl(i,t){const e=new ee,{wagon:n,ute:s,tail:r,nose:a,sill:o}=Rl(i),l=G(16777215),c=G(6584713),d=G(2236966),h=s?1.63:n?1.6:1.49,u=s?-.37:n?-1.72:-.74,f=s?.64:.42,p=(x,m,g,M,v,_,b,E)=>{e.quad(-x,m,M,x,m,M,.65,v,b,-.65,v,b,E),e.quad(x,m,g,-x,m,g,-.65,v,_,.65,v,_,E),e.quad(x,m,M,x,m,g,.65,v,_,.65,v,b,E),e.quad(-x,m,g,-x,m,M,-.65,v,b,-.65,v,_,E),e.quad(-.65,v,b,.65,v,b,.65,v,_,-.65,v,_,l)};if(t)p(.88,.3,r,a,h,u,f,l);else{e.box(-.88,.3,r,.88,o,a,l),p(.77,o,s?-.52:n?-1.95:-1.47,1.02,h,u,f,c);for(const x of[-1.35,1.38])e.quad(.9,.02,x+.32,.9,.02,x-.32,.9,.57,x-.32,.9,.57,x+.32,d),e.quad(-.9,.02,x-.32,-.9,.02,x+.32,-.9,.57,x+.32,-.9,.57,x-.32,d)}return e.build()}function Lu(i,t,e,n,s,r,a){const o=t>0?r-.025:r-.1,l=t<0&&(i===1||i===2);return[[e*.42,o,n],[e*(s-.022),o-(l?.13:0),n],[e*(s-.064),a-.025,n],[e*(t>0?.31:.43),a-.052,n]]}const Pu=12;function Du(i){const t=new ee,e=Rl(i);for(const s of[1,-1])for(const r of[1,-1]){const a=i<0?r*2.1:r>0?e.nose:e.tail,o=a+r*.02;let l;if(i<0){const c=r>0?.755:.59,d=.865;l=[[s*c,.62,o],[s*d,.62,o],[s*d,.77,o],[s*c,.77,o]]}else{const{width:c,shoulder:d,top:h}=e.belt(a),[u,f,p,x]=Lu(i,r,s,o,c,d,h),m=(g,M,v)=>[g[0]+(M[0]-g[0])*v,g[1]+(M[1]-g[1])*v,o];l=[m(u,f,.59),m(u,f,.99),m(x,p,.99),m(x,p,.59)]}s!==r&&l.reverse(),t.quad(...l[0],...l[1],...l[2],...l[3],G(16777215))}const n=new qt(t.build(),new dn({color:16752666,toneMapped:!1}));return n.visible=!1,n}function Iu(i,t){i.visible=t===-1||t===1,i.visible&&(i.name=t<0?"left-turn-indicator":"right-turn-indicator",i.geometry.setDrawRange(t<0?0:Pu,Pu))}function Ll(i,t,e,n,s){const r=G(4413799),a=G(3425876),o=G(2635588),l=G(8624550),c=G(6651533),d=s??e,h=G(2105636),u=G(2566960),f=G(11252924),p=G(5793135),x=(Y,Z,F,q,st,ct,et=!1,it=0)=>{et?Y.quad(...st,...q,...F,...Z,ct,it):Y.quad(...Z,...F,...q,...st,ct,it)},{wagon:m,ute:g,tail:M,nose:v,sill:_,belt:b}=Rl(i),E=g||m?1.55:1.42,S=g?1.63:m?1.6:1.49,y=g?-.52:m?-1.95:-1.47,w=g?-.37:m?-1.72:-.74,T=1.02,C=g?.64:.42,P=-1.35,U=1.38,L=.34,O=.387,I=[M,M+.58,v-.55,v];for(const Y of[P,U])for(let Z=0;Z<=5;Z++)I.push(Y-O*Math.cos(Math.PI*Z/5));I.sort((Y,Z)=>Y-Z);const z=Y=>{const Z=Math.min(Math.abs(Y-P),Math.abs(Y-U));return Z<O+1e-5?L+Math.sqrt(Math.max(0,O*O-Z*Z)):.3};for(const Y of[-1,1])for(let Z=1;Z<I.length;Z++){const F=I[Z-1],q=I[Z],st=b(F),ct=b(q);x(t,[Y*st.width,z(F),F],[Y*st.width,st.shoulder,F],[Y*ct.width,ct.shoulder,q],[Y*ct.width,z(q),q],n,Y<0)}const Q=[M,M+.15,M+.58,y,T,v-.55,v].sort((Y,Z)=>Y-Z);for(let Y=1;Y<Q.length;Y++){const Z=Q[Y-1],F=Q[Y],q=b(Z),st=b(F);for(const At of[-1,1])x(t,[At*q.width,q.shoulder,Z],[At*(q.width-.08),q.top,Z],[At*(st.width-.08),st.top,F],[At*st.width,st.shoulder,F],n,At<0);if(Z>=y&&F<=T)continue;const ct=g&&Z>=M+.15&&F<=y,et=q.width-.08,it=st.width-.08;if(ct)for(const At of[-1,1])x(t,[At*et,q.top,Z],[At*.665,q.top,Z],[At*.665,st.top,F],[At*it,st.top,F],n,At<0),x(e,[At*.665,q.top,Z],[At*.665,.7,Z],[At*.665,.7,F],[At*.665,st.top,F],u,At<0);else x(t,[-et,q.top,Z],[-it,st.top,F],[it,st.top,F],[et,q.top,Z],n)}if(g){const Y=M+.15,Z=y;x(e,[-.665,.7,Y],[-.665,.7,Z],[.665,.7,Z],[.665,.7,Y],G(4343627));for(const[F,q]of[[Y,1],[Z,0]])x(e,[-.665,.7,F],[.665,.7,F],[.665,b(F).top,F],[-.665,b(F).top,F],u,!q)}const N=(Y,Z,F)=>{const q=y+(w-y)*F,st=T+(C-T)*F;return[Y*(.8-.145*F),_+(E-_)*F,q+(st-q)*Z]},V=m?[0,.07,.275,.32,.56,.6,.935,1]:g?[0,.12,.33,.395,.925,1]:[0,.09,.47,.525,.925,1];for(const Y of[-1,1]){const Z=(F,q,st,ct,et,it)=>x(et,N(Y,F,st),N(Y,F,ct),N(Y,q,ct),N(Y,q,st),it,Y<0);Z(0,1,0,.07,t,n),Z(0,1,.93,1,t,n);for(let F=1;F<V.length;F++){const q=F%2===0,st=F!==1&&F!==V.length-1,ct=d.vertexCount;Z(V[F-1],V[F],.07,.93,q?d:st?e:t,q?F===2?o:a:st?u:n),q&&d.gradientY(ct,_,E,F===2?o:a,F===2?c:l)}}for(const Y of[-1,1])x(t,N(Y,0,1),[Y*.58,S,w+.045],[Y*.58,S,C-.045],N(Y,1,1),n,Y<0);x(t,[-.58,S,w+.045],[-.58,S,C-.045],[.58,S,C-.045],[.58,S,w+.045],n);for(const Y of[0,1]){const Z=Y?C-.045:w+.045;x(t,N(-1,Y,1),N(1,Y,1),[.58,S,Z],[-.58,S,Z],n,!Y);const F=(ct,et)=>[(ct*2-1)*(.8-.145*et),_+(E-_)*et,N(1,Y,et)[2]],q=(ct,et,it,At,Rt,Gt)=>x(ct,F(et,At),F(it,At),F(it,Rt),F(et,Rt),Gt,!Y),st=d.vertexCount;s?(q(t,0,.055,0,1,n),q(t,.945,1,0,1,n),q(e,.055,.945,0,.06,u),q(e,.055,.945,.94,1,u),q(d,.055,.945,.06,.94,Y?r:o)):q(d,0,1,0,1,Y?r:o),d.gradientY(st,_,E,Y?r:o,Y?l:c)}if(s){const Z=G(3620678),F=G(4935251),q=G(3685700),st=ct=>{for(const et of[-.38,.38])e.box(et-.23,.695,ct-.22,et+.23,_-.06,ct+.27,F),e.box(et-.23,_-.085,ct-.21,et+.23,_+.24,ct-.075,F),e.box(et-.103,_+.235,ct-.185,et+.103,_+.36,ct-.08,q)};e.box(-.7,.6829999999999999,y+.05,.7,.695,T-.05,G(2698545)),e.box(-.71,_-.23,T-.4,.71,_+.022,T-.14,Z),e.box(-.6,_,T-.43,-.22,_+.105,T-.26,u),st((y+T)/2+.17),g||st(y+.62)}if(m)for(const Y of[-1,1]){const Z=Y*.56;e.box(Z-.032,S,w+.17,Z+.032,1.67,C-.21,u)}for(const Y of[-1,1]){const Z=Y>0?v:M,{width:F,shoulder:q,top:st}=b(Z);if(g&&Y<0){const it=[[-F,.3,Z],[F,.3,Z],[F,q,Z],[-F,q,Z]],At=[[-.41,.59,Z],[.41,.59,Z],[.46,.74,Z],[-.46,.74,Z]],Rt=[[-.39,.612,Z+.024],[.39,.612,Z+.024],[.43,.716,Z+.024],[-.43,.716,Z+.024]];for(let Gt=0;Gt<4;Gt++){const Vt=(Gt+1)%4;x(t,it[Gt],it[Vt],At[Vt],At[Gt],n,!0),x(t,At[Gt],At[Vt],Rt[Vt],Rt[Gt],n,!0)}x(t,Rt[0],Rt[1],Rt[2],Rt[3],re(n,.88),!0)}else x(t,[-F,.3,Z],[F,.3,Z],[F,q,Z],[-F,q,Z],n,Y<0);x(t,[-F,q,Z],[F,q,Z],[F-.08,st,Z],[-F+.08,st,Z],n,Y<0);const ct=Z+Y*.008;for(const it of[-1,1])x(e,...Lu(i,Y,it,ct,F,q,st),Y>0?G(14477800):G(12003881),it!==Y,Y>0?1.1:.6);Y>0?x(e,[-.48,.39,ct],[.48,.39,ct],[.53,.54,ct],[-.53,.54,ct],u):g&&x(e,[-.12,.76,ct],[.12,.76,ct],[.12,.8,ct],[-.12,.8,ct],u,!0);const et=Z+Y*.012;x(e,[-.2,.44,et],[.2,.44,et],[.2,.55,et],[-.2,.55,et],G(14014927),Y<0)}e.box(-.7,.23,M+.22,.7,.69,v-.22,u,null);const K=(Y,Z,F,q)=>[Y,L+q*Math.sin(F)*Math.sin(.4*Math.PI),Z+q*Math.cos(F)];for(const Y of[-1,1])for(const Z of[P,U]){const F=Y*.69,q=Y*.9,st=Y*.912;for(let ct=0;ct<8;ct++){const et=ct*Math.PI/4,it=(ct+1)*Math.PI/4,At=K(q,Z,et,.34),Rt=K(q,Z,it,.34);x(e,K(F,Z,et,.34),At,Rt,K(F,Z,it,.34),h,Y<0),Y>0?e.tri(q,L,Z,...Rt,...At,h):e.tri(q,L,Z,...At,...Rt,h)}for(let ct=0;ct<6;ct++){const et=K(st,Z,ct*Math.PI/3,.188),it=K(st,Z,(ct+1)*Math.PI/3,.188),At=ct%2?f:p;Y>0?e.tri(Y*.905,L,Z,...it,...et,At):e.tri(Y*.905,L,Z,...et,...it,At)}}}function va(i,t,e,n,s,r){const a=-t/2,o=t*.12,l=t/2,c=e/2,d=c*.5,h=re(s,.72);for(const f of[-1,1])f>0?(i.quad(d,0,a,c*.88,n,a,c,n,o,d,0,o,s),i.quad(d,0,o,c,n,o,0,n*1.12,l,0,.1,l*.86,s)):(i.quad(-d,0,o,-c,n,o,-c*.88,n,a,-d,0,a,s),i.quad(0,.1,l*.86,0,n*1.12,l,-c,n,o,-d,0,o,s));i.quad(-d,0,a,-c*.88,n,a,c*.88,n,a,d,0,a,h),i.quad(-d,0,a,d,0,a,d,0,o,-d,0,o,h),i.tri(-d,0,o,d,0,o,0,.1,l*.86,h);const u=n*.8;i.quad(-c*.84,u,a+.05,c*.84,u,a+.05,c*.95,u,o,-c*.95,u,o,r),i.tri(-c*.95,u,o,c*.95,u,o,0,u,l*.95,r)}function g1(i,t){const e=new ee,n=G(16119280);if(i===0)va(e,4.6,1.9,.75,t()<.5?G(12962767):ai[Math.floor(t()*6)],G(10133668)),e.box(-.2,.55,-2.65,.2,1.25,-2.25,G(1974822)),e.box(-.75,.6,-.9,.75,.72,-.5,G(9138002)),e.box(-.75,.6,.4,.75,.72,.8,G(9138002));else if(i===1){const s=ai[Math.floor(t()*ai.length)];va(e,7.4,2.7,1.25,n,G(15131350)),e.box(-1.37,.72,-3.7,1.37,.9,3,s,null),e.box(-1.05,1,-1.2,1.05,2.25,1.9,n,G(15329248)),e.quad(-1,1.45,1.92,1,1.45,1.92,.9,2.2,1.92,-.9,2.2,1.92,G(2240572),.4),e.box(-1.06,1.5,-.9,-1.05,2.1,1.6,G(2240572),null),e.box(1.05,1.5,-.9,1.06,2.1,1.6,G(2240572),null),e.box(-.9,2.25,-1,.9,2.33,1.2,n),e.cyl(0,2.33,-.6,.03,.02,1.6,4,G(9278358))}else va(e,9,2.8,1.3,t()<.6?n:G(2377070),G(14208952)),e.box(-.85,1.05,-1.6,.85,1.55,1.6,n,G(15329248)),e.cyl(0,1.05,.9,.08,.05,11.5,5,G(14014682)),e.box(-.06,2.45,-3,.06,2.57,.9,G(14014682)),e.blob(0,2.72,-1.05,.17,.17,1.9,5,3,G(3104666)),e.quad(-.01,12.4,.9,.01,12.4,.9,.01,1.4,4.4,-.01,1.4,4.4,G(10133154));return e.build()}function x1(i){const t=new ee;return va(t,4.2,1.5,.55,G(16119280),G(14736588)),t.cyl(0,.45,.5,.04,.03,6,4,G(14014682)),t.tri(.02,6.3,.5,.02,1.1,.45,.6,1.2,-2,i),t.tri(.02,4.6,.6,.3,1,1.9,.02,1,.6,G(16250866)),t.blob(.35,.95,-.9,.22,.4,.22,5,3,G(14238767)),t.build()}function _1(i,t){const e=new ee,n=8,s=9,r=2.6;for(let a=0;a<n;a++){const o=-1.15+a/n*2.3,l=-1.15+(a+1)/n*2.3,c=Math.sin(o)*s*.5,d=Math.cos(o)*s*.42,h=Math.sin(l)*s*.5,u=Math.cos(l)*s*.42,f=a===0||a===n-1||a===3||a===4?t:i;e.quad(c,d,-r/2,h,u,-r/2,h,u,r/2,c,d,r/2,f)}return e.build()}function M1(i,t){const e=new ee;return e.box(-.22,0,-.75,.22,.06,.75,i),e.blob(-.25,.75,0,.2,.62,.22,5,3,t),e.blob(-.42,1.48,0,.13,.14,.13,5,3,G(14264711)),e.build()}function v1(i){const t=new ee;return t.blob(0,.02,0,.27,.05,1.05,6,2,i),t.blob(0,.42,-.1,.2,.4,.18,5,3,G(1976112)),t.blob(0,.9,-.1,.12,.13,.12,5,3,G(14264711)),t.build()}function S1(i){const t=new Map;for(const r of i){if(r.cls>1||!r.name||r.flags)continue;const a=t.get(r.name)??[];a.push(r),t.set(r.name,a)}const e=[],n=(r,a)=>a?[r[r.length-3],r[r.length-1]]:[r[0],r[2]],s=r=>{const a=new Float32Array(r.length);for(let o=0;o<r.length/3;o++)a.set(r.subarray(o*3,o*3+3),r.length-3-o*3);return a};for(const r of t.values()){const a=r.map(l=>l.pts),o=r[0].width;for(;a.length;){let l=Array.from(a.pop()),c=!0;for(;c;){c=!1;for(let f=0;f<a.length;f++){const p=a[f],x=[l[l.length-3],l[l.length-1]],m=[l[0],l[2]],g=(_,b)=>Math.hypot(_[0]-b[0],_[1]-b[1])<2.5;let M=null,v=!0;if(g(x,n(p,!1))?M=p:g(x,n(p,!0))?M=s(p):g(m,n(p,!0))?(M=p,v=!1):g(m,n(p,!1))&&(M=s(p),v=!1),!!M){l=v?l.concat(Array.from(M.subarray(3))):Array.from(M.subarray(0,M.length-3)).concat(l),a.splice(f,1),c=!0;break}}}const d=new Float32Array(l),h=d.length/3,u=new Float32Array(h);for(let f=1;f<h;f++)u[f]=u[f-1]+Math.hypot(d[f*3]-d[f*3-3],d[f*3+2]-d[f*3-1]);u[h-1]>380&&e.push({pts:d,cum:u,length:u[h-1],width:o})}}return e}const wi=(i,t)=>`${Math.round(i*4)}_${Math.round(t*4)}`;function Pl(i,t=2,e=320){if(i.length<=(e<320?24:96)||t===0)return[i];let n=1/0,s=-1/0,r=1/0,a=-1/0;for(const h of i)n=Math.min(n,h.x),s=Math.max(s,h.x),r=Math.min(r,h.z),a=Math.max(a,h.z);const o=s-n,l=a-r;if(Math.max(o,l)<e)return[i];const c=o>l?"x":"z";i.sort((h,u)=>h[c]-u[c]);const d=Math.floor(i.length/2);return[...Pl(i.slice(0,d),t-1,e),...Pl(i.slice(d),t-1,e)]}class y1{constructor(t,e,n,s,r){X(this,"group",new qe);X(this,"afloat",new qe);X(this,"boats",[]);X(this,"dinghies",[]);X(this,"kites",[]);X(this,"kiteLines");X(this,"surfers",[]);X(this,"traffic");X(this,"trafficTrim");X(this,"cars",[]);X(this,"parkedAt",new Map);X(this,"parkedSets",[]);X(this,"hiddenCars",new Set);X(this,"cabinCar");X(this,"drivenAt",new Map);X(this,"drivenSets",[]);X(this,"carMat",ms());X(this,"tmpE",new hn);X(this,"nothing",new te().makeScale(0,0,0));X(this,"gulls");X(this,"gullState",[]);X(this,"tmpM",new te);X(this,"tmpQ",new bn);X(this,"tmpP",new H);X(this,"up",new H(0,1,0));X(this,"one",new H(1,1,1));X(this,"contact");this.ctx=t,this.closeCarShadows=n,this.roadSurfaceAt=s,this.hostCarLift=r,this.group.name="life",this.group.add(this.afloat);const a=this.carMat;this.addParkedCars(),this.addTraffic(a),this.addBoats(a,e),this.addKites(a),this.addSurfers(a,e),this.addPeople(e),this.addGulls(e),this.update(0,0)}setTide(t){this.afloat.position.y=t}sit(t,e,n,s){const r=this.ctx.hf,a=Math.sin(n),o=Math.cos(n),l=(f,p)=>this.roadSurfaceAt(f,p)??r.yAt(f,p),c=l(t+a*1.3,e+o*1.3),d=l(t-a*1.3,e-o*1.3),h=l(t-o*.8,e+a*.8),u=l(t+o*.8,e-a*.8);return this.tmpQ.setFromEuler(this.tmpE.set(-Math.atan2(c-d,2.6),n,Math.atan2(u-h,1.6),"YXZ")),this.tmpM.compose(this.tmpP.set(t,(c+d+h+u)/4+s,e),this.tmpQ,this.one)}carShapes(t){return t?Al(t-1):{body:Cu(),trim:void 0}}makeCabinCar(t,e){const n=new ee,s=new ee;Ll(t,n,n,e,s);const r=new qe,a=new qt(n.build(),this.carMat);a.name="vehicle-cabin-shell",a.castShadow=a.receiveShadow=!0;const o=new qt(s.build(),nr(new dn({vertexColors:!0,transparent:!0,opacity:.34,depthTest:!0,depthWrite:!1,side:Ce,forceSinglePass:!0})));return o.name="vehicle-window-panes",r.add(a,o),{group:r,shell:a,panes:o,remove(){r.removeFromParent(),a.geometry.dispose(),o.geometry.dispose(),o.material.dispose()}}}makeTrafficCar(t,e,n,s,r){const a=new ee,o=G(e);Ll(t,a,a,o);const l=a.build(),c=l.boundingBox,d=(x,m)=>Math.min(1,x/m),h=new H(d(n,Math.max(-c.min.x,c.max.x)),d(r,c.max.y),d(s,Math.max(-c.min.z,c.max.z))),u=new qt(l,this.carMat);u.name="traffic-stock-shell",u.castShadow=u.receiveShadow=!0,u.scale.copy(h);const f=new qe;f.name=["traffic-sedan","traffic-wagon","traffic-ute"][t],f.matrixAutoUpdate=!1,f.visible=!1,f.add(u),this.group.add(f);let p;return{mesh:f,scale:h,setCabin:x=>{x&&!p&&(p=this.makeCabinCar(t,o),p.group.scale.copy(h),f.add(p.group)),p&&(p.group.visible=x),u.visible=!x},remove:()=>{f.removeFromParent(),l.dispose(),p==null||p.remove()}}}addParkedCars(){const{town:t,hf:e,paths:n}=this.ctx,s=t.cars,r=s.length/xs,a=[[],[],[],[]],o=new Set,l=(h,u)=>`${Math.round(h/7)}_${Math.round(u/7)}`;for(let h=0;h<r;h++){const u=s[h*xs]/4,f=s[h*xs+1]/4;if(this.ctx.isClear(u,f)||!this.ctx.isDetail(u,f)&&this.ctx.roads.nearest(u,f,5.5))continue;const p=1+(s[h*xs+3]+h)%3;a[p].push({x:u,z:f,heading:s[h*xs+2]/10*(Math.PI/180),colour:bs[(s[h*xs+3]*7+h)%bs.length]}),o.add(l(u,f))}const c=Ge(911);let d=0;for(const h of n){if(d>=1100||h.width<3.4||h.width>12)continue;const u=h.pts.length/3;let f=20+c()*60;for(let p=1;p<u;p++){const x=h.pts[(p-1)*3],m=h.pts[(p-1)*3+2],g=h.pts[p*3],M=h.pts[p*3+2],v=Math.hypot(g-x,M-m);if(f-=v,f>0||v<.01)continue;f=28+c()*70;const _=c()<.5?1:-1,b=(g-x)/v,E=(M-m)/v,S=Math.max(h.width/2-.55,1.5),y=g+E*S*_,w=M-b*S*_,T=Math.floor(c()*bs.length),C=Math.floor(c()*3);if(e.metresAt(y,w)<.6||!e.inside(y,w,30)||this.ctx.isClear(y,w))continue;let P=!0;for(let U=-1;U<=1&&P;U++)for(let L=-1;L<=1;L++)if(o.has(`${Math.round(y/7)+U}_${Math.round(w/7)+L}`)){P=!1;break}P&&(o.add(l(y,w)),a[1+C].push({x:y,z:w,heading:Math.atan2(b*_,E*_),colour:bs[T]}),d++)}}a.forEach((h,u)=>this.addParkedShape(h,u))}addParkedShape(t,e){if(!t.length)return;const n=Al(e-1),s=n.body.boundingBox.clone().union(n.trim.boundingBox),r={halfWidth:Math.max(-s.min.x,s.max.x),halfLength:Math.max(-s.min.z,s.max.z),height:s.max.y},a=Cl(e-1,!1),o=Cl(e-1,!0);for(const l of Pl(t,5,140)){const c=this.parkedSets.length,d=new Ve(n.body,this.carMat,l.length),h=new Ve(n.trim,this.carMat,l.length),u=new Ve(a,this.carMat,l.length),f=new Ve(o,this.carMat,l.length);d.name="parked-car-near-body",h.name="parked-car-near-trim",u.name="parked-car-mid",f.name="parked-car-far";const p=[d,h,u,f],x=[d,u,f],m=new Ct;l.forEach((M,v)=>{const{x:_,z:b,heading:E,colour:S}=M,y=this.sit(_,b,E,.02);for(const w of p)w.setMatrixAt(v,y);m.set(S);for(const w of x)w.setColorAt(v,m);this.parkedAt.set(wi(_,b),{set:c,k:v,x:_,y:y.elements[13],z:b,heading:E})});const g=new Tu([[d,h],[u],[f]],this.group);this.closeCarShadows&&this.addContactShadow(d),this.parkedSets.push({body:d,meshes:p,homeMatrices:Float32Array.from(d.instanceMatrix.array),lod:g,shape:e,envelope:r}),l.forEach(({x:M,z:v})=>{const _=wi(M,v);this.hiddenCars.has(_)&&this.showParkedCar(this.parkedAt.get(_),!1)})}}addContactShadow(t){this.contact??(this.contact={geometry:new On(2.5,5.1).rotateX(-Math.PI/2).translate(0,.027,0),material:new nn({transparent:!0,depthWrite:!1,vertexShader:`varying vec2 patchUV;
          void main(){patchUV=2.*uv-1.;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 patchUV;
          void main(){float edge=length(max(abs(patchUV)-vec2(.49,.57),0.)/vec2(.50,.42));
            gl_FragColor=vec4(.012,.015,.016,.32*(1.-smoothstep(.05,1.,edge)));
            #include <colorspace_fragment>
          }`})});const e=new Ve(this.contact.geometry,this.contact.material,t.count);e.name="parked-car-contact",e.instanceMatrix=t.instanceMatrix,e.boundingSphere=t.boundingSphere,t.add(e)}addCars(t){const e=[[],[],[],[]];for(const n of t)e[1+(n.kind??0)%3].push(n);e.forEach((n,s)=>this.addParkedShape(n,s))}setControlledCar(t,e=0){var r,a,o;const n=t===null?void 0:t>=9e5?`t${t-9e5}`:wi(t,e);if(n&&!this.parkedAt.has(n)&&!this.drivenAt.has(n))return!1;const s=(r=this.cabinCar)==null?void 0:r.key;if(s===n)return!0;(o=(a=this.cabinCar)==null?void 0:a.view)==null||o.remove(),this.cabinCar=n?{key:n}:void 0;for(const l of[s,n]){if(l===void 0)continue;const c=!this.hiddenCars.has(l),d=this.drivenAt.get(l),h=this.parkedAt.get(l);d?this.showDrivenCar(l,d,c):h&&this.showParkedCar(h,c)}return!0}showCabinCar(t,e,n,s){const r=this.cabinCar;if((r==null?void 0:r.key)!==t)return!1;if(n&&!r.view){const a=this.parkedAt.get(t),o=this.drivenAt.get(t),l=a&&this.parkedSets[a.set],c=new Ct;a&&l?l.body.getColorAt(a.k,c):o&&this.drivenSets[o.set].body.getColorAt(o.k,c);const d=(l==null?void 0:l.shape)??(o==null?void 0:o.set)??1,h=r.view=this.makeCabinCar(Math.max(0,d-1),[c.r,c.g,c.b]);h.group.name="native-close-car",h.group.matrixAutoUpdate=!1,this.contact&&(h.contact=new Ve(this.contact.geometry,this.contact.material,1),h.contact.name="parked-car-contact",h.group.add(h.contact)),this.group.add(h.group)}return r.view&&(r.view.group.visible=n,r.view.group.matrix.copy(e),r.view.group.matrixWorldNeedsUpdate=!0,r.view.contact&&(r.view.contact.visible=s)),!0}showParkedCar(t,e){const n=this.parkedSets[t.set],s=wi(t.x,t.z),r=this.tmpM.fromArray(n.homeMatrices,t.k*16),a=!this.drivenAt.has(s)&&this.showCabinCar(s,r,e,!0),o=e&&!a?r:this.nothing;for(const l of n.meshes)l.setMatrixAt(t.k,o),l.instanceMatrix.needsUpdate=!0}setHiddenCars(t){const e=new Set(t.map(([n,s])=>wi(n,s)));for(const[n,s]of this.parkedAt){const r=!e.has(n);if(r===!this.hiddenCars.has(n))continue;const a=this.drivenAt.get(n);a?this.showDrivenCar(n,a,r):this.showParkedCar(s,r)}this.hiddenCars=e}carBlocker(t,e){const n=this.drivenAt.get(t),s=n??e;return{id:[e.x,e.z],x:s.x,y:n?n.y+this.hostCarLift:e.y,z:s.z,heading:s.heading,...this.parkedSets[e.set].envelope}}parkedCarBlockers(){const t=[];for(const[e,n]of this.parkedAt)this.hiddenCars.has(e)||t.push(this.carBlocker(e,n));return t}parkedCarBlocker(t,e){const n=wi(t,e),s=this.parkedAt.get(n);return s&&!this.hiddenCars.has(n)?this.carBlocker(n,s):null}nearestCar(t,e,n){let s=null;for(const[r,a]of this.parkedAt){if(this.hiddenCars.has(r))continue;const o=this.drivenAt.get(r)??a,l=Math.hypot(o.x-t,o.z-e);l<(s?s.distance:n)&&(s={id:[a.x,a.z],x:o.x,z:o.z,heading:o.heading,distance:l})}return this.cars.forEach((r,a)=>{const o=this.drivenAt.get(`t${a}`)??r,l=Math.hypot(o.x-t,o.z-e);l<(s?s.distance:n)&&(s={id:[9e5+a,0],x:o.x,z:o.z,heading:o.heading,distance:l})}),s}resetCar(t,e){var c,d;const n=t>=9e5?this.cars[t-9e5]:void 0,s=n?`t${t-9e5}`:wi(t,e),r=this.drivenAt.get(s);if(!r)return!1;this.drivenAt.delete(s),((c=this.cabinCar)==null?void 0:c.key)===s&&((d=this.cabinCar.view)==null||d.remove(),this.cabinCar=void 0);const a=this.drivenSets[r.set],o=--a.n;if(r.k!==o)for(const[h,u]of this.drivenAt){if(u.set!==r.set||u.k!==o)continue;const f=new Ct;a.body.getColorAt(o,f),u.k=r.k,a.body.setColorAt(u.k,f),a.body.instanceColor.needsUpdate=!0,this.showDrivenCar(h,u,!this.hiddenCars.has(h));break}a.body.count=o,a.trim&&(a.trim.count=o),r.indicator&&(r.indicator.removeFromParent(),r.indicator.geometry.dispose(),r.indicator.material.dispose()),n&&(n.gone=!1);const l=this.parkedAt.get(s);return l&&!this.hiddenCars.has(s)&&this.showParkedCar(l,!0),!0}showDrivenCar(t,e,n){const s=this.drivenSets[e.set],r=this.showCabinCar(t,e.matrix,n,!1),a=n&&!r?e.matrix:this.nothing;s.body.setMatrixAt(e.k,a),s.body.instanceMatrix.needsUpdate=!0,s.trim&&(s.trim.setMatrixAt(e.k,a),s.trim.instanceMatrix.needsUpdate=!0),e.indicator&&(Iu(e.indicator,n?e.signal:0),e.indicator.visible&&(e.indicator.matrix.copy(e.matrix),e.indicator.matrixWorldNeedsUpdate=!0))}driveCar(t,e,n,s,r,a,o=0,l=0,c=0){const d=t>=9e5?this.cars[t-9e5]:void 0,h=d?`t${t-9e5}`:wi(t,e),u=d?void 0:this.parkedAt.get(h);if(!u&&!d)return!1;let f=this.drivenAt.get(h);if(!f){if(this.drivenAt.size>=12||this.hiddenCars.has(h))return!1;const p=u?this.parkedSets[u.set].shape:this.trafficTrim?1:0;let x=this.drivenSets[p];if(!x){const g=this.carShapes(p);x=this.drivenSets[p]={body:new Ve(g.body,this.carMat,12),trim:g.trim?new Ve(g.trim,this.carMat,12):void 0,n:0};for(const M of[x.body,x.trim])M&&(M.count=0,M.frustumCulled=!1,M.castShadow=!0,this.group.add(M))}f={set:p,k:x.n++,x:n,y:s,z:r,heading:a,matrix:new te,signal:c},this.drivenAt.set(h,f),x.body.count=x.n,x.trim&&(x.trim.count=x.n);const m=new Ct;u?(this.parkedSets[u.set].body.getColorAt(u.k,m),this.showParkedCar(u,!1)):(this.traffic.getColorAt(t-9e5,m),d.gone=!0),x.body.setColorAt(f.k,m),x.body.instanceColor.needsUpdate=!0}return f.x=n,f.y=s,f.z=r,f.heading=a,f.signal=c,this.tmpQ.setFromEuler(this.tmpE.set(-o,a,l,"YXZ")),f.matrix.compose(this.tmpP.set(n,s+this.hostCarLift,r),this.tmpQ,this.one),c&&!f.indicator&&(f.indicator=Du(f.set-1),f.indicator.matrixAutoUpdate=!1,this.group.add(f.indicator)),this.showDrivenCar(h,f,!this.hiddenCars.has(h)),!0}addTraffic(t){const e=S1(this.ctx.paths);if(!e.length)return;const n=e.reduce((c,d)=>c+d.length,0),s=0,r=Ge(77),a=this.ctx.hasDetail?Al(0):null,o=this.traffic=new Ve(a?a.body:Cu(),t,s);if(o.instanceMatrix.setUsage(Ci),o.frustumCulled=!1,a){const c=this.trafficTrim=new Ve(a.trim,t,s);c.instanceMatrix.setUsage(Ci),c.frustumCulled=!1,c.castShadow=!0,this.group.add(c)}const l=new Ct;for(let c=0;c<s;c++){let d=r()*n,h=e[0];for(const u of e)if((d-=u.length)<=0){h=u;break}this.cars.push({route:h,s:r()*h.length,dir:r()<.5?1:-1,speed:9+r()*6,x:0,z:0,heading:0}),o.setColorAt(c,l.set(bs[Math.floor(r()*bs.length)]))}o.castShadow=!0,this.group.add(o)}addBoats(t,e){var c;const{hf:n}=this.ctx,s=Ge(451),r=((c=e.jetty)==null?void 0:c.head)??new H(380,0,-117),a=[];for(let d=0;d<4e3&&a.length<16;d++){const h=s()*Math.PI*2,u=55+s()*420,f=r.x+Math.cos(h)*u,p=r.z+Math.sin(h)*u;n.metresAt(f,p)>-1.9||!n.inside(f,p,40)||a.some(([x,m])=>Math.hypot(x-f,m-p)<26)||a.push([f,p])}const o=2.2+s()*.4;a.forEach(([d,h],u)=>{const f=u%5===0?2:u%2?0:1,p=new qt(g1(f,s),t);p.position.set(d,0,h),p.rotation.y=o+(s()-.5)*.5,p.castShadow=!0,this.afloat.add(p),this.boats.push({obj:p,phase:s()*6.28,y:f===0?-.22:-.42})});const l=[G(16250866),G(15222589),G(3117008),G(15909424)];for(let d=0;d<600&&this.dinghies.length<4;d++){const h=s()*Math.PI*2,u=150+s()*900,f=r.x+Math.cos(h)*u,p=r.z+160+Math.sin(h)*u*.5,x=45+s()*70,m=30+s()*40;let g=n.inside(f,p,160);for(let v=0;v<12&&g;v++){const _=v/12*Math.PI*2;n.metresAt(f+Math.cos(_)*x,p+Math.sin(_)*m)>-1.5&&(g=!1)}if(!g||this.dinghies.some(v=>Math.hypot(v.cx-f,v.cz-p)<170))continue;const M=new qt(x1(l[this.dinghies.length%l.length]),t);M.castShadow=!0,this.afloat.add(M),this.dinghies.push({obj:M,cx:f,cz:p,rx:x,rz:m,phase:s()*6.28,speed:(2.2+s())/Math.max(x,m)})}}addKites(t){const{hf:e,town:n}=this.ctx,s=Ge(990),[r,a]=mn(n.meta,-38.6385,145.714),[o,l]=mn(n.meta,-38.645,145.731),c=[];for(let u=0;u<3e3&&c.length<6;u++){const f=r+s()*(o-r),p=a+s()*(l-a);e.metresAt(f,p)>-1.6||c.some(x=>Math.hypot(x.x-f,x.z-p)<110)||c.push(new H(f,0,p))}const d=new Float32Array(c.length*12);c.forEach((u,f)=>{let p=85;for(;p>15&&(e.metresAt(u.x+.65*p,u.z+.76*p)>-1.2||e.metresAt(u.x-.65*p,u.z-.76*p)>-1.2);)p-=10;const x=ai[Math.floor(s()*7)],m=ai[Math.floor(s()*7)],g=new qt(_1(x,m===x?ai[7]:m),t),M=new qt(M1(ai[Math.floor(s()*7)],G(1976112)),t);g.castShadow=!0,this.afloat.add(g,M),this.kites.push({base:u,reach:p,phase:s()*6.28,speed:.12+s()*.06,kite:g,rider:M})});const h=new Re;h.setAttribute("position",new Te(d,3).setUsage(Ci)),this.kiteLines=new Qc(h,nr(new Kc({color:15921906,transparent:!0,opacity:.7}))),this.kiteLines.frustumCulled=!1,this.afloat.add(this.kiteLines)}addSurfers(t,e){if(!e.surf)return;const{hf:n}=this.ctx,s=Ge(31),[r,a]=e.surf.seaward,o=e.surf.beach;let l=20;for(;l<420&&n.metresAt(o.x+r*l,o.z+a*l)>-2;)l+=5;for(let c=0;c<9;c++){const d=(c-4)*13+(s()-.5)*8,h=l+(s()-.5)*30,u=o.x+r*h-a*d,f=o.z+a*h+r*d,p=new qt(v1(ai[Math.floor(s()*ai.length)]),t);p.position.set(u,0,f),p.rotation.y=Math.atan2(r,a)+(s()-.5)*.8,this.afloat.add(p),this.surfers.push({obj:p,phase:s()*6.28})}}addPeople(t){const{hf:e,town:n,paths:s,roads:r,footprints:a}=this.ctx,o=Ge(2026),l=[],c=[],d=(I,z)=>a.some(Q=>{if(Math.hypot(I-Q.cx,z-Q.cz)>Math.max(Q.obb.w,Q.obb.d))return!1;let N=!1;for(let V=0,K=Q.poly.length-2;V<Q.poly.length;K=V,V+=2){const Y=Q.poly[V],Z=Q.poly[V+1],F=Q.poly[K],q=Q.poly[K+1];Z>z!=q>z&&I<(F-Y)*(z-Z)/(q-Z)+Y&&(N=!N)}return N}),h=(I,z)=>!r.nearest(I,z,6.4)&&!d(I,z),u=(I,z,Q,N,V,K,Y=0)=>{for(let Z=0,F=0;Z<N*40&&F<N;Z++){const q=o()*Math.PI*2,st=Math.sqrt(o())*Q,ct=I+Math.cos(q)*st,et=z+Math.sin(q)*st,it=e.metresAt(ct,et);it<V||it>K||!h(ct,et)||(l.push(ct,e.yAt(ct,et),et),o()<Y&&c.push(ct+1.2,e.yAt(ct+1.2,et),et+.6),F++)}};t.surf&&u(t.surf.beach.x,t.surf.beach.z,130,60,1.5,3,.32);const[f,p]=mn(n.meta,-38.63575,145.729);u(f,p,120,34,1.5,2.4,.3);const[x,m]=mn(n.meta,-38.6356,145.7337);u(x,m,110,26,1.5,2.6,.2);const[g,M]=mn(n.meta,-38.63194,145.72681);u(g,M,55,14,0,99);const[v,_]=mn(n.meta,-38.63385,145.7285);for(const I of s){if(I.cls>3||I.flags)continue;const z=I.pts.length/3;for(let Q=1;Q<z;Q++){const N=I.pts[Q*3],V=I.pts[Q*3+2];if(Math.hypot(N-v,V-_)>300||o()>.42||this.ctx.isClear(N,V))continue;const K=N-I.pts[Q*3-3],Y=V-I.pts[Q*3-1],Z=Math.hypot(K,Y)||1,F=o()<.5?1:-1,q=I.width/2+2.3+o()*1,st=N-Y/Z*q*F,ct=V+K/Z*q*F;h(st,ct)&&l.push(st,e.yAt(st,ct),ct)}}if(t.jetty){const I=t.jetty.points;for(let z=0;z<I.length-1;z++)for(let Q=0;Q<3;Q++){const N=o();l.push(I[z][0]+(I[z+1][0]-I[z][0])*N+(o()-.5)*2,wl,I[z][1]+(I[z+1][1]-I[z][1])*N+(o()-.5)*2)}}const b=l.length/3,E=new ee;E.cyl(0,0,0,.17,.22,.85,5,G(2765632)),E.cyl(0,.85,0,.24,.2,.6,5,G(16777215),G(16777215));const S=new ee;S.blob(0,1.6,0,.14,.15,.14,5,3,G(14264711));const y=new $r({vertexColors:!0}),w=I=>(I.deleteAttribute("glow"),I),T=new Ve(w(E.build()),y,b),C=new Ve(w(S.build()),y,b),P=new Ct,U=[16777215,15255976,12159590,9068354];for(let I=0;I<b;I++){const z=.92+o()*.2;this.tmpQ.setFromAxisAngle(this.up,o()*6.28),this.tmpM.compose(this.tmpP.set(l[I*3],l[I*3+1],l[I*3+2]),this.tmpQ,new H(z,z,z)),T.setMatrixAt(I,this.tmpM),C.setMatrixAt(I,this.tmpM),T.setColorAt(I,P.set(Ru[Math.floor(o()*Ru.length)])),C.setColorAt(I,P.set(U[Math.floor(o()*U.length)]))}T.computeBoundingSphere(),C.computeBoundingSphere(),this.group.add(T,C);const L=new ee;L.cyl(0,0,0,.03,.03,2,4,G(14277081)),L.cyl(0,1.75,0,1.25,0,.5,8,G(16777215));const O=new Ve(w(L.build()),y,c.length/3);for(let I=0;I<c.length/3;I++)this.tmpQ.setFromAxisAngle(new H(1,0,0),(o()-.5)*.3),O.setMatrixAt(I,this.tmpM.compose(this.tmpP.set(c[I*3],c[I*3+1],c[I*3+2]),this.tmpQ,this.one)),O.setColorAt(I,P.set([14826299,3117008,15909424,3715691,15764004,16053490][Math.floor(o()*6)]));O.castShadow=!0,O.computeBoundingSphere(),this.group.add(O)}addGulls(t){if(!t.jetty)return;const e=Ge(8),n=16;for(let r=0;r<n;r++)this.gullState.push({cx:t.jetty.head.x+(e()-.5)*90,cz:t.jetty.head.z+(e()-.5)*90,r:18+e()*55,h:wl+6+e()*16,w:(.25+e()*.3)*(e()<.5?1:-1),phase:e()*6.28});const s=new Re;s.setAttribute("position",new Te(new Float32Array(n*18),3).setUsage(Ci)),this.gulls=new qt(s,nr(new dn({color:16185074,side:Ce}))),this.gulls.frustumCulled=!1,this.group.add(this.gulls)}updateParkedLod(t,e,n){for(const s of this.parkedSets)s.lod.update(t,e,n)}update(t,e){for(const n of this.boats)n.obj.rotation.z=Math.sin(e*.9+n.phase)*.04,n.obj.rotation.x=Math.sin(e*.7+n.phase*1.7)*.025,n.obj.position.y=n.y+Math.sin(e*1.1+n.phase)*.06;for(const n of this.dinghies){const s=n.phase+e*n.speed;n.obj.position.set(n.cx+Math.cos(s)*n.rx,-.15,n.cz+Math.sin(s)*n.rz),n.obj.rotation.y=Math.atan2(-Math.sin(s)*n.rx,Math.cos(s)*n.rz),n.obj.rotation.z=.12+Math.sin(e*.8+n.phase)*.04}for(const n of this.surfers)n.obj.position.y=-.05+Math.sin(e*.9+n.phase)*.22;if(this.kiteLines){const n=this.kiteLines.geometry.getAttribute("position");this.kites.forEach((s,r)=>{const a=Math.sin(e*s.speed*6.28+s.phase),o=Math.cos(e*s.speed*6.28+s.phase)>=0?1:-1,l=s.base.x+.65*s.reach*a,c=s.base.z+.76*s.reach*a;s.rider.position.set(l,.05,c),s.rider.rotation.y=Math.atan2(.65*o,.76*o),s.rider.rotation.z=.28;const d=e*1.3+s.phase,h=l+12+o*5+Math.sin(d)*4.5,u=c-10+Math.cos(d)*1.5,f=17+Math.sin(d*2)*2.4;s.kite.position.set(h,f,u),s.kite.lookAt(l,1.2,c),s.kite.rotateX(-Math.PI/2),n.setXYZ(r*4,l-.3,1.25,c),n.setXYZ(r*4+1,h-2.6,f-1,u),n.setXYZ(r*4+2,l-.3,1.25,c),n.setXYZ(r*4+3,h+2.6,f-1,u)}),n.needsUpdate=!0}if(this.traffic&&(this.cars.forEach((n,s)=>{var v,_;if(n.gone){this.traffic.setMatrixAt(s,this.nothing),(v=this.trafficTrim)==null||v.setMatrixAt(s,this.nothing);return}const r=n.route;n.s+=n.dir*n.speed*t,n.s>r.length&&(n.s=r.length,n.dir=-1),n.s<0&&(n.s=0,n.dir=1);let a=0,o=r.cum.length-1;for(;o-a>1;){const b=a+o>>1;r.cum[b]<=n.s?a=b:o=b}const l=(n.s-r.cum[a])/(r.cum[o]-r.cum[a]||1),c=r.pts[a*3],d=r.pts[a*3+2],h=r.pts[o*3],u=r.pts[o*3+2];let f=h-c,p=u-d;const x=Math.hypot(f,p)||1;f=f/x*n.dir,p=p/x*n.dir;const m=Math.min(r.width*.24,2),g=c+(h-c)*l+p*m,M=d+(u-d)*l-f*m;n.x=g,n.z=M,n.heading=Math.atan2(f,p),this.traffic.setMatrixAt(s,this.sit(g,M,n.heading,.02)),(_=this.trafficTrim)==null||_.setMatrixAt(s,this.tmpM)}),this.traffic.instanceMatrix.needsUpdate=!0,this.trafficTrim&&(this.trafficTrim.instanceMatrix.needsUpdate=!0)),this.gulls){const n=this.gulls.geometry.getAttribute("position");this.gullState.forEach((s,r)=>{const a=s.phase+e*s.w,o=s.cx+Math.cos(a)*s.r,l=s.cz+Math.sin(a)*s.r,c=s.h+Math.sin(a*2.3)*1.5,d=s.w>0?1:-1,h=-Math.sin(a)*d,u=Math.cos(a)*d,f=u,p=-h,x=Math.sin(e*7+s.phase*3)*.45,m=r*6;n.setXYZ(m,o+h*.35,c,l+u*.35),n.setXYZ(m+1,o-h*.3,c,l-u*.3),n.setXYZ(m+2,o+f*.85,c+x,l+p*.85),n.setXYZ(m+3,o+h*.35,c,l+u*.35),n.setXYZ(m+4,o-f*.85,c+x,l-p*.85),n.setXYZ(m+5,o-h*.3,c,l-u*.3)}),n.needsUpdate=!0}}}const b1={low:320,medium:640,high:1040,ultra:1520},Bi=new H(31,18,31),E1=`
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
}`,w1=`
varying float vOpacity;
void main() {
  gl_FragColor = vec4(0.54, 0.65, 0.76, vOpacity);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;class T1{constructor(t,e,n){X(this,"eye",new H);X(this,"material");X(this,"streaks");X(this,"wetness",{value:0});X(this,"ultra");X(this,"disposed",!1);X(this,"inletRain",{value:0});this.camera=e,this.ultra=n==="ultra";const s=b1[n],r=Ge(1229870668),a=new Float32Array(s*6),o=new Float32Array(s*8);for(let c=0;c<s;c++){const d=r()*Bi.x,h=r()*Bi.y,u=r()*Bi.z,f=.25+r()*.54,p=.55+r()*.45,x=r();a.set([d,h,u,d,h,u],c*6),o.set([f,0,p,x,f,1,p,x],c*8)}const l=new Re;l.setAttribute("position",new Te(a,3)),l.setAttribute("aDrop",new Te(o,4)),this.material=new nn({uniforms:{uEye:{value:this.eye},uVolume:{value:Bi},uDrift:{value:new Nt},uSlant:{value:new Nt},uFall:{value:0},uRain:{value:0},uShelter:{value:0}},vertexShader:E1,fragmentShader:w1,transparent:!0,depthWrite:!1}),this.streaks=new Qc(l,this.material),this.streaks.name="local rain streaks",this.streaks.frustumCulled=!1,this.streaks.renderOrder=4,this.streaks.visible=!1,t.add(this.streaks)}shadeAsphalt(t,e=!1){const n=t.onBeforeCompile,s=t.customProgramCacheKey();t.customProgramCacheKey=()=>s+(e?":rain-asphalt-mask":":rain-asphalt"),t.onBeforeCompile=(r,a)=>{n.call(t,r,a),r.uniforms.uRoadWetness=this.wetness,e&&(r.vertexShader=`attribute float aAsphalt;
varying float vAsphalt;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vAsphalt = aAsphalt;`));const o=e?"(uRoadWetness * vAsphalt)":"uRoadWetness";r.fragmentShader=`uniform float uRoadWetness;
`+(e?`varying float vAsphalt;
`:"")+r.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= mix(1.0, 0.66, `+o+");").replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.56, `+o+");")},t.needsUpdate=!0}update(t,e,n,s=2.9,r=-1,a=!1){if(this.disposed)return;const o=Qt.clamp(t,0,1);if(this.wetness.value=Qt.clamp(e,0,1),this.inletRain.value=this.ultra?o:0,this.streaks.visible=o>.015,!this.streaks.visible)return;this.camera.getWorldPosition(this.eye);const l=this.material.uniforms,c=12.5;l.uRain.value=o,l.uShelter.value=a?1:0,l.uFall.value=n*c%Bi.y,l.uDrift.value.set(n*s%Bi.x,n*r%Bi.z),l.uSlant.value.set(s/c,r/c)}dispose(){this.disposed||(this.disposed=!0,this.wetness.value=this.inletRain.value=0,this.streaks.removeFromParent(),this.streaks.geometry.dispose(),this.material.dispose())}}const xn=(i,t,e)=>{const n=[],s=[];for(let r=0;r<i.length;r++){const a=i[r],o=i[(r+1)%i.length],l=t(a)-e,c=t(o)-e;if(l<=1e-9&&n.push(a),l>=-1e-9&&s.push(a),l<-1e-9&&c>1e-9||l>1e-9&&c<-1e-9){const d=l/(l-c),h=new Float64Array(a.length);for(let u=0;u<h.length;u++)h[u]=a[u]+(o[u]-a[u])*d;n.push(h),s.push(h)}}return[n,s]},Dl=(i,t)=>{const e=[];for(let n of i){let s=1/0,r=-1/0;for(const a of n){const o=t(a);o<s&&(s=o),o>r&&(r=o)}for(let a=Math.floor(s+1e-9)+1;a<r-1e-9&&n.length>=3;a++){const[o,l]=xn(n,t,a);o.length>=3&&e.push(o),n=l}n.length>=3&&e.push(n)}return e};function Il(i,t,e,n,s){const r=[Math.min(t[0],e[0],n[0]),Math.min(t[2],e[2],n[2]),Math.max(t[0],e[0],n[0]),Math.max(t[2],e[2],n[2])];let a=[[t,e,n]];for(const o of i.patches){if(r[0]>=o.xMax||r[2]<=o.xMin||r[1]>=o.zMax||r[3]<=o.zMin)continue;const l=[];for(const c of a){const[d,h]=xn(c,M=>M[0],o.xMin),[u,f]=xn(h,M=>M[0],o.xMax),[p,x]=xn(u,M=>M[2],o.zMin),[m,g]=xn(x,M=>M[2],o.zMax);for(const M of[d,f,p,g])M.length>=3&&l.push(M);m.length>=3&&Nu(o,m,s)}a=l}for(const o of a)Nu(i,o,s)}function Nu(i,t,e){const n=a=>(a[0]-i.xMin)/i.dx,s=a=>(a[2]-i.zMin)/i.dz,r=a=>n(a)+s(a);if(t.length===3){const[a,o,l]=t,c=Math.min(n(a),n(o),n(l)),d=Math.max(n(a),n(o),n(l)),h=Math.min(s(a),s(o),s(l)),u=Math.max(s(a),s(o),s(l)),f=Math.min(r(a),r(o),r(l)),p=Math.max(r(a),r(o),r(l));if(Math.floor(c)===Math.floor(d-1e-9)&&Math.floor(h)===Math.floor(u-1e-9)&&Math.floor(f)===Math.floor(p-1e-9)){e(a,o,l);return}}for(const a of Dl(Dl(Dl([t],n),s),r))for(let o=1;o+1<a.length;o++)e(a[0],a[o],a[o+1])}const Wn=24,Uu=.08,lr=.07,A1=.35,cr=1e-8,hr=.001,Nl=(i,t)=>i*65536+t;class R1{constructor(){X(this,"surfaces",new Map);X(this,"index")}add(t,e=t.length){const n=this.surfaces.get(t);e!==n&&(this.surfaces.set(t,e),n!==void 0?this.index=void 0:this.index&&Fu(this.index,t,e))}remove(t){this.surfaces.delete(t)&&(this.index=void 0)}buildIndex(){const t={buffers:[],faces:[],cells:new Map};for(const[e,n]of this.surfaces)Fu(t,e,n);return t}heightAt(t,e){const{buffers:n,faces:s,cells:r}=this.index??(this.index=this.buildIndex()),a=r.get(Nl(Math.floor(t/Wn),Math.floor(e/Wn)));let o=-1/0;if(a)for(const l of a)o=Math.max(o,Ou(n[s[l]],s[l+1],t,e,!0));return Number.isFinite(o)?o:null}project(t,e,n){const{buffers:s,faces:r,cells:a}=this.index??(this.index=this.buildIndex()),o=[],l=new Set,c=(n==null?void 0:n.length)??e.length/3,d=f=>{const p=(n?n[f]:f)*3;return new Float64Array([e[p],0,e[p+2]])},h=(f,p,x,m,g,M)=>{const v=(p[2]-f[2])*(x[0]-f[0])-(p[0]-f[0])*(x[2]-f[2]);Math.abs(v)<=cr||o.push(f[0],m,f[2],p[0],g,p[2],x[0],M,x[2])},u=(f,p)=>{const[x,,m]=f,g=this.heightAt(x,m);return g===null?lr:Math.max(lr,g-p+Uu-.01)};for(let f=0;f+2<c;f+=3){const p=d(f),x=d(f+1),m=d(f+2);Il(t,p,x,m,(b,E,S)=>{const y=t.yAt(b[0],b[2]),w=t.yAt(E[0],E[2]),T=t.yAt(S[0],S[2]),C=u(b,y),P=u(E,w),U=u(S,T);Math.max(C,P,U)-Math.min(C,P,U)>A1?h(b,E,S,y+lr,w+lr,T+lr):h(b,E,S,y+C,w+P,T+U)});const g=Math.min(p[0],x[0],m[0]),M=Math.max(p[0],x[0],m[0]),v=Math.min(p[2],x[2],m[2]),_=Math.max(p[2],x[2],m[2]);l.clear();for(let b=Math.floor(g/Wn);b<=Math.floor(M/Wn);b++)for(let E=Math.floor(v/Wn);E<=Math.floor(_/Wn);E++){const S=a.get(Nl(b,E));if(S)for(const y of S){if(l.has(y))continue;l.add(y);const w=s[r[y]],T=r[y+1],C=w[T],P=w[T+2],U=w[T+3],L=w[T+5],O=w[T+6],I=w[T+8];if(Math.max(C,U,O)<g||Math.min(C,U,O)>M||Math.max(P,L,I)<v||Math.min(P,L,I)>_)continue;const z=C1([p,x,m],C,P,U,L,O,I);if(z.length<3)continue;const Q=K=>Ou(w,T,K[0],K[2],!1)+Uu,N=z[0],V=Q(N);for(let K=1;K+1<z.length;K++){const Y=z[K],Z=z[K+1];h(N,Y,Z,V,Q(Y),Q(Z))}}}}return Float32Array.from(o)}}function Fu({buffers:i,faces:t,cells:e},n,s){const r=i.length;i.push(n);for(let a=0;a+8<s;a+=9){const o=n[a],l=n[a+2],c=n[a+3],d=n[a+5],h=n[a+6],u=n[a+8];if((d-l)*(h-o)-(c-o)*(u-l)<=cr)continue;const f=t.length;t.push(r,a);const p=Math.floor((Math.min(o,c,h)-hr)/Wn),x=Math.floor((Math.max(o,c,h)+hr)/Wn),m=Math.floor((Math.min(l,d,u)-hr)/Wn),g=Math.floor((Math.max(l,d,u)+hr)/Wn);for(let M=p;M<=x;M++)for(let v=m;v<=g;v++){const _=Nl(M,v);let b=e.get(_);b||e.set(_,b=[]),b.push(f)}}}function Ou(i,t,e,n,s){const r=i[t],a=i[t+1],o=i[t+2],l=i[t+3]-r,c=i[t+5]-o,d=i[t+6]-r,h=i[t+8]-o,u=e-r,f=n-o,p=c*d-l*h,x=(f*d-u*h)/p,m=(c*u-l*f)/p;if(s&&(x<-cr||m<-cr||x+m>1+cr)){const g=i[t+4],M=i[t+7];let v=-1/0;return x<0&&(v=Ul(u,f,d,h,a,M)),m<0&&(v=Math.max(v,Ul(u,f,l,c,a,g))),x+m>1&&(v=Math.max(v,Ul(u-l,f-c,d-l,h-c,g,M))),v}return a+x*(i[t+4]-a)+m*(i[t+7]-a)}function Ul(i,t,e,n,s,r){const a=Math.max(0,Math.min(1,(i*e+t*n)/(e*e+n*n)));return(i-a*e)**2+(t-a*n)**2<=hr**2?s+a*(r-s):-1/0}function C1(i,t,e,n,s,r,a){const o=(c,d,h,u,f)=>(c[0]-d)*(f-h)-(c[2]-h)*(u-d);let l=xn(i,c=>o(c,t,e,n,s),0)[1];return l.length>=3&&(l=xn(l,c=>o(c,n,s,r,a),0)[1]),l.length>=3&&(l=xn(l,c=>o(c,r,a,t,e),0)[1]),l}class L1{constructor(t,e,n,s=!0){this.hf=t,this.mesh=e,this.clearance=n,this.fitTerrain=s}quad(t,e,n,s,r,a,o,l,c,d,h,u,f,p=0){this.tri(t,e,n,s,r,a,o,l,c,f,p),this.tri(t,e,n,o,l,c,d,h,u,f,p)}edgeCrosses(t,e,n,s,r,a){const o=this.hf;for(let l=0;l<3;l++){const c=l===0?t:l===1?e:t+e,d=l===0?s:l===1?r:s+r,h=Math.max(c,d);for(let u=Math.floor(Math.min(c,d))+1;u<h;u++){const f=(u-c)/(d-c),p=o.xMin+(t+(s-t)*f)*o.dx,x=o.zMin+(e+(r-e)*f)*o.dz;if(n+(a-n)*f<o.yAt(p,x)+this.clearance)return!0}}return!1}needsFitting(t,e,n,s,r,a,o,l,c){const d=this.hf;if(e<d.yAt(t,n)+this.clearance||r<d.yAt(s,a)+this.clearance||l<d.yAt(o,c)+this.clearance)return!0;const h=(t-d.xMin)/d.dx,u=(n-d.zMin)/d.dz,f=(s-d.xMin)/d.dx,p=(a-d.zMin)/d.dz,x=(o-d.xMin)/d.dx,m=(c-d.zMin)/d.dz;if(this.edgeCrosses(h,u,e,f,p,r)||this.edgeCrosses(f,p,r,x,m,l)||this.edgeCrosses(x,m,l,h,u,e))return!0;const g=(f-h)*(m-u)-(p-u)*(x-h);if(Math.abs(g)<1e-12)return!1;const M=Math.min(d.nx-1,Math.floor(Math.max(h,f,x))),v=Math.min(d.nz-1,Math.floor(Math.max(u,p,m)));for(let _=Math.max(0,Math.ceil(Math.min(u,p,m)));_<=v;_++)for(let b=Math.max(0,Math.ceil(Math.min(h,f,x)));b<=M;b++){const E=((b-h)*(m-u)-(_-u)*(x-h))/g,S=((f-h)*(_-u)-(p-u)*(b-h))/g;if(E>=0&&S>=0&&E+S<=1&&e+E*(r-e)+S*(l-e)<d.y[_*d.nx+b]+this.clearance)return!0}return!1}tri(t,e,n,s,r,a,o,l,c,d,h=0){if(!this.fitTerrain){this.mesh.tri(t,e,n,s,r,a,o,l,c,d,h);return}if(!this.hf.patchOverlaps(Math.min(t,s,o),Math.min(n,a,c),Math.max(t,s,o),Math.max(n,a,c))&&!this.needsFitting(t,e,n,s,r,a,o,l,c)){this.mesh.tri(t,e,n,s,r,a,o,l,c,d,h);return}const f=m=>Math.max(m[1],this.hf.yAt(m[0],m[2])+this.clearance),p=[];let x=!1;if(Il(this.hf,new Float64Array([t,e,n]),new Float64Array([s,r,a]),new Float64Array([o,l,c]),(m,g,M)=>{p.push([m,g,M]),x||(x=f(m)>m[1]||f(g)>g[1]||f(M)>M[1])}),!x){this.mesh.tri(t,e,n,s,r,a,o,l,c,d,h);return}for(const[m,g,M]of p)this.mesh.tri(m[0],f(m),m[2],g[0],f(g),g[2],M[0],f(M),M[2],d,h)}}const zu=i=>i[0],Bu=i=>i[2],Ln=1.5,Ti=.16,Sa=Math.hypot(Ln,Ti),Es=12,Gu=(i,t)=>(i+2048)*8192+t+2048;class P1{constructor(t,e,n){X(this,"bins",new Map);this.asphalt=t,this.marks=e,this.color=n}addDash(t,e,n,s,r,a){const o={x:t+Ln*s,z:n+Ln*r,dx:s,dz:r,y:e+Ln*a,grade:a,flat:!0,area:0,pieces:[]},l=Gu(Math.floor(o.x/Es),Math.floor(o.z/Es));let c=this.bins.get(l);c||this.bins.set(l,c=[]),c.push(o)}tri(t,e,n,s,r,a,o,l,c,d){this.asphalt.tri(t,e,n,s,r,a,o,l,c,d);const h=Math.min(t,s,o)-Sa,u=Math.max(t,s,o)+Sa,f=Math.min(n,a,c)-Sa,p=Math.max(n,a,c)+Sa;for(let x=Math.floor(f/Es);x<=Math.floor(p/Es);x++)for(let m=Math.floor(h/Es);m<=Math.floor(u/Es);m++){const g=this.bins.get(Gu(m,x));if(g)for(const M of g){if(M.x<h||M.x>u||M.z<f||M.z>p)continue;const v=(b,E,S)=>new Float64Array([(b-M.x)*M.dx+(S-M.z)*M.dz,E,-(b-M.x)*M.dz+(S-M.z)*M.dx]);let _=[v(t,e,n),v(s,r,a),v(o,l,c)];if(_=xn(_,zu,-Ln)[1],_=xn(_,zu,Ln)[0],_=xn(_,Bu,-Ti)[1],_=xn(_,Bu,Ti)[0],!(_.length<3)){M.pieces.push(_);for(let b=0;b<_.length;b++){const E=_[b],S=_[(b+1)%_.length];M.area+=(S[0]*E[2]-S[2]*E[0])/2,Math.abs(M.y+E[0]*M.grade-E[1])>.03&&(M.flat=!1)}}}}}finish(){for(const t of this.bins.values())for(const e of t){const n=s=>[e.x+s[0]*e.dx-s[2]*e.dz,s[1]+.05,e.z+s[0]*e.dz+s[2]*e.dx];if(e.flat&&Math.abs(e.area-4*Ln*Ti)<1e-4){const s=(r,a)=>n(new Float64Array([r,e.y+r*e.grade,a]));this.marks.quad(...s(-Ln,Ti),...s(Ln,Ti),...s(Ln,-Ti),...s(-Ln,-Ti),this.color)}else for(const s of e.pieces)for(let r=1;r+1<s.length;r++)this.marks.tri(...n(s[0]),...n(s[r]),...n(s[r+1]),this.color)}}}const Fl=1,ku=2,D1=[G(5198680),G(11575168),G(9072466),G(12434356)],I1=G(4474957),N1=G(15921382),Hu={polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8},U1=[.34,.3,.26,.22,.16,.15,.13,.11],Vu=new Float32Array(9);function F1(i,t,e){const n=[i[0]/10,i[1]/10];let s=0;for(let r=2;r<i.length;r+=2){const a=i[r-2]/10,o=i[r-1]/10,l=i[r]/10,c=i[r+1]/10,d=Math.hypot(l-a,c-o);if(!d)continue;const h=e&&s+d>=e.start&&s<=e.end?3:t,u=Math.ceil(d/h);s+=d;for(let f=1;f<=u;f++)n.push(a+(l-a)*f/u,o+(c-o)*f/u)}return n}class O1{constructor(){X(this,"cells",new Map);X(this,"segs",[]);X(this,"size",40)}add(t,e,n,s,r,a){const o=this.segs.length/6;this.segs.push(t,e,n,s,r,a);const l=Math.floor(Math.min(t,n)/this.size),c=Math.floor(Math.max(t,n)/this.size),d=Math.floor(Math.min(e,s)/this.size),h=Math.floor(Math.max(e,s)/this.size);for(let u=l;u<=c;u++)for(let f=d;f<=h;f++){const p=(u+512)*4096+(f+512);let x=this.cells.get(p);x||this.cells.set(p,x=[]),x.push(o)}}nearest(t,e,n){let s=null;const r=Math.ceil(n/this.size),a=Math.floor(t/this.size),o=Math.floor(e/this.size);for(let l=a-r;l<=a+r;l++)for(let c=o-r;c<=o+r;c++){const d=this.cells.get((l+512)*4096+(c+512));if(d)for(const h of d){const u=this.segs[h*6],f=this.segs[h*6+1],p=this.segs[h*6+2],x=this.segs[h*6+3],m=p-u,g=x-f,M=Math.max(0,Math.min(1,((t-u)*m+(e-f)*g)/(m*m+g*g||1))),v=u+m*M,_=f+g*M,b=Math.hypot(t-v,e-_);b<=n&&(!s||b<s.dist)&&(s={dist:b,px:v,pz:_,cls:this.segs[h*6+4],name:this.segs[h*6+5]})}}return s}}function z1(i,t){const e=new Map,n=(r,a)=>r+","+a;for(const r of i){if(r[0]>3)continue;const a=r[5];if(!(a.length<4))for(const o of[0,1]){const l=o?a.length-2:0,c=l+(o?-2:2),d=(a[c]-a[l])/10,h=(a[c+1]-a[l+1])/10,u=Math.hypot(d,h);if(!u)continue;const f=n(a[l],a[l+1]),p=e.get(f)??[];p.push({road:r,end:o,x:a[l]/10,z:a[l+1]/10,dx:d/u,dz:h/u,length:u}),e.set(f,p)}}const s=new Map;for(const r of e.values()){if(r.length!==2)continue;const a=r.find(T=>T.road[2]&Fl),o=r.find(T=>!(T.road[2]&Fl));if(!a||!o||a.road[0]!==o.road[0]||a.road[3]!==o.road[3]||a.road[4]!==o.road[4]||o.dx*a.dx+o.dz*a.dz>-.75)continue;const l=a.end?-1:1,c=a.road[3]/20,d=(a.dx-o.dx)*l,h=(a.dz-o.dz)*l,u=c/((a.dx*d+a.dz*h)*l),f=-h*u,p=d*u,{x,z:m}=a,g=Math.min(4,o.length),M=t.yAt(x,m),v=[t.yAt(x+f,m+p),M,t.yAt(x-f,m-p)],_=(T,C)=>{const P=x+o.dx*g-T*o.dz*l*c,U=m+o.dz*g+T*o.dx*l*c;return(C-t.yAt(P,U))*l/g},b=[_(-1,v[0]),_(0,M),_(1,v[2])],E={hx:f,hz:p,offset:[v[0]-M,0,v[2]-M],slope:b},S=s.get(a.road)??[];S[a.end]=E,s.set(a.road,S);const y=s.get(o.road)??[],w=o.end===a.end;y[o.end]={...E,hx:w?-f:f,hz:w?-p:p},s.set(o.road,y)}return s}function Wu(i,t,e,n,s,r){if(!i||t>=e)return 0;const a=t/e;return((1+2*a)*i.offset[r]+t*(i.slope[r]-n)*s)*(1-a)**2}function B1(i,t,e,n){const s=new ee,r=new ee,a=new O1,o=z1(i.roads,t),l=[],c=[];for(const _ of i.roads){const[b,E,S,y,w,T]=_,C=y/10,P=uu(_),U=(S&Fl)!==0,[L,O]=o.get(_)??[],I=F1(T,U&&(L||O)?1.8:b<=3?6:5,P),z=I.length/2;if(z<2)continue;const Q=E===0&&b<=1?I1:D1[E],N=E===0?1:0,V=U1[b],K=t.yAt(I[0],I[1]),Y=t.yAt(I[z*2-2],I[z*2-1]),Z=new Float32Array(z);for(let ht=1;ht<z;ht++)Z[ht]=Z[ht-1]+Math.hypot(I[ht*2]-I[ht*2-2],I[ht*2+1]-I[ht*2-1]);const F=Z[z-1]||1,q=(Y-K)/F,st=Math.PI/F,ct=Math.min(9,F/2),et=new Float32Array(z*3),it=new Float32Array(z*3),At=new Float32Array(z*3);for(let ht=0;ht<z;ht++){const ft=I[ht*2],xt=I[ht*2+1],Jt=Math.max(ht-1,0),Lt=Math.min(ht+1,z-1);let ue=I[Lt*2]-I[Jt*2],$t=I[Lt*2+1]-I[Jt*2+1];const le=Math.hypot(ue,$t)||1;ue/=le,$t/=le;let xe=1;if(ht>0&&ht<z-1){const ut=I[ht*2]-I[ht*2-2],ot=I[ht*2+1]-I[ht*2-1],pt=Math.hypot(ut,ot)||1;xe=1/Math.max(.6,(ut*ue+ot*$t)/pt)}const me=ht===0?L:ht===z-1?O:void 0,W=(me==null?void 0:me.hx)??-$t*(C/2)*xe,ve=(me==null?void 0:me.hz)??ue*(C/2)*xe,jt=Z[ht],ce=C/2,_t=U?K+q*jt+V+Math.sin(st*jt):0,_e=ut=>_t+Wu(L,jt,ct,q+st,1,ut)+Wu(O,F-jt,ct,q-st,-1,ut),zt=(P==null?void 0:P.deckLift(jt,V))??V,Ft=(ut,ot,pt)=>(P!=null&&P.weight(jt)?P.ground(t,ut,ot,jt,pt):t.yAt(ut,ot))+zt,D=U?_e(1):Ft(ft,xt,0),A=U?_e(0):Ft(ft+W,xt+ve,ce),J=U?_e(2):Ft(ft-W,xt-ve,ce);et.set([ft+W,A,xt+ve],ht*3),it.set([ft,D,xt],ht*3),At.set([ft-W,J,xt-ve],ht*3),ht>0&&b<=3&&a.add(I[ht*2-2],I[ht*2-1],ft,xt,b,w)}const Rt=b<=1&&!(S&ku)&&F>20,Gt=Rt?new P1(s,r,N1):void 0;if(Rt){let ht=0;for(let ft=4;ft<F-4;ft+=12){for(;ht<z-2&&Z[ht+1]<ft;)ht++;const xt=(ft-Z[ht])/(Z[ht+1]-Z[ht]||1),Jt=it[ht*3]+(it[ht*3+3]-it[ht*3])*xt,Lt=it[ht*3+1]+(it[ht*3+4]-it[ht*3+1])*xt,ue=it[ht*3+2]+(it[ht*3+5]-it[ht*3+2])*xt;if(e!=null&&e(Jt,ue))continue;let $t=it[ht*3+3]-it[ht*3],le=it[ht*3+5]-it[ht*3+2];const xe=Math.hypot($t,le)||1;$t/=xe,le/=xe;const me=(it[ht*3+4]-it[ht*3+1])/xe;Gt==null||Gt.addDash(Jt,Lt,ue,$t,le,me)}}const Vt=new L1(t,Gt??s,.04,!U);for(let ht=0;ht<z-1;ht++){const ft=ht*3,xt=ft+3;if(e){const Jt=e(it[ft],it[ft+2]),Lt=e(it[xt],it[xt+2]);if(Jt&&Lt)continue;if(Jt!==Lt){let ue=0,$t=1;for(let Ft=0;Ft<12;Ft++){const D=(ue+$t)/2;e(it[ft]+(it[xt]-it[ft])*D,it[ft+2]+(it[xt+2]-it[ft+2])*D)===Jt?ue=D:$t=D}const le=(ue+$t)/2;for(const Ft of[et,it,At])for(let D=0;D<3;D++)Vu[(Ft===et?0:Ft===it?3:6)+D]=Ft[ft+D]+(Ft[xt+D]-Ft[ft+D])*le;const[xe,me,W,ve,jt,ce,_t,_e,zt]=Vu;Jt?(Vt.quad(xe,me,W,et[xt],et[xt+1],et[xt+2],it[xt],it[xt+1],it[xt+2],ve,jt,ce,Q,N),Vt.quad(ve,jt,ce,it[xt],it[xt+1],it[xt+2],At[xt],At[xt+1],At[xt+2],_t,_e,zt,Q,N)):(Vt.quad(et[ft],et[ft+1],et[ft+2],xe,me,W,ve,jt,ce,it[ft],it[ft+1],it[ft+2],Q,N),Vt.quad(it[ft],it[ft+1],it[ft+2],ve,jt,ce,_t,_e,zt,At[ft],At[ft+1],At[ft+2],Q,N));continue}}if(Vt.quad(et[ft],et[ft+1],et[ft+2],et[xt],et[xt+1],et[xt+2],it[xt],it[xt+1],it[xt+2],it[ft],it[ft+1],it[ft+2],Q,N),Vt.quad(it[ft],it[ft+1],it[ft+2],it[xt],it[xt+1],it[xt+2],At[xt],At[xt+1],At[xt+2],At[ft],At[ft+1],At[ft+2],Q,N),U){const Jt=G(E===2?7297604:13225162);for(const Lt of[et,At])s.quad(Lt[ft],Lt[ft+1],Lt[ft+2],Lt[xt],Lt[xt+1],Lt[xt+2],Lt[xt],Lt[xt+1]+1.05,Lt[xt+2],Lt[ft],Lt[ft+1]+1.05,Lt[ft+2],Jt),s.quad(Lt[ft],Lt[ft+1]-.7,Lt[ft+2],Lt[xt],Lt[xt+1]-.7,Lt[xt+2],Lt[xt],Lt[xt+1],Lt[xt+2],Lt[ft],Lt[ft+1],Lt[ft+2],G(9276036))}}if(b<=5&&!U)for(const ht of[0,z-1]){if(ht===0?L:O)continue;const ft=it[ht*3],xt=it[ht*3+1],Jt=it[ht*3+2];if(e!=null&&e(ft,Jt))continue;const Lt=16;for(let ue=0;ue<Lt;ue++){const $t=ue/Lt*Math.PI*2,le=(ue+1)/Lt*Math.PI*2,xe=ft+Math.cos(le)*C/2,me=Jt+Math.sin(le)*C/2,W=ft+Math.cos($t)*C/2,ve=Jt+Math.sin($t)*C/2;Vt.tri(ft,xt,Jt,xe,t.yAt(xe,me)+V,me,W,t.yAt(W,ve)+V,ve,Q,N)}}if(Gt==null||Gt.finish(),S&ku){let ht=0,ft=0;for(let le=0;le<z;le++)ht+=I[le*2],ft+=I[le*2+1];ht/=z,ft/=z;const xt=z>>1,Jt=G1(I[0],I[1],I[xt*2],I[xt*2+1],I[z*2-2],I[z*2-1]),Lt=Jt?Jt.x:ht,ue=Jt?Jt.z:ft,$t=Jt?Jt.r:Math.hypot(I[0]-ht,I[1]-ft);$t>3&&$t<40&&!(e!=null&&e(Lt,ue))&&!c.some(le=>Math.hypot(le.x-Lt,le.z-ue)<12)&&c.push({x:Lt,z:ue,r:$t,w:C})}b<=3&&l.push({cls:b,name:w>=0?i.names[w]:"",width:C,flags:S,pts:it,length:F})}const d=s.vertexCount*3,h=G(13158078),u=G(7314002),f=G(4943936);for(const _ of c){const b=_.r-_.w/2-.3;if(b<1.2)continue;const E=t.yAt(_.x,_.z)+.2;s.frame(_.x,E,_.z,0),s.cyl(0,0,0,b,b,.4,14,h,u),s.blob(0,.9,0,b*.45,.8,b*.45,6,3,f,G(7181400)),s.frame()}const p=new Rn({vertexColors:!0,roughness:.92,metalness:0,side:Ce,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),x=s.build();n&&(x.setAttribute("aAsphalt",x.getAttribute("glow")),n(p,!0));const m=new qt(Xu(x),p);m.receiveShadow=!0,m.name="roads";const g=nr(new dn({vertexColors:!0,...Hu})),M=new qt(Xu(r.build()),g);M.name="road-markings";const v=new qe;return v.add(m,M),{group:v,index:a,paths:l,pavement:x.getAttribute("position").array,pavementEnd:d}}function Xu(i){return i.deleteAttribute("glow"),i}function G1(i,t,e,n,s,r){const a=2*(i*(n-r)+e*(r-t)+s*(t-n));if(Math.abs(a)<.001)return null;const o=i*i+t*t,l=e*e+n*n,c=s*s+r*r,d=(o*(n-r)+l*(r-t)+c*(t-n))/a,h=(o*(s-e)+l*(i-s)+c*(e-i))/a;return{x:d,z:h,r:Math.hypot(i-d,t-h)}}class k1{constructor(t,e=1){X(this,"ratio");X(this,"floor");X(this,"sampleSeconds",0);X(this,"sampleFrames",0);X(this,"slowSeconds",0);X(this,"smoothSeconds",0);X(this,"retryAfter",0);X(this,"lastRaise",-1/0);this.ceiling=t,this.ratio=t,this.floor=Math.min(t,e)}resetSampling(){this.sampleSeconds=this.sampleFrames=this.slowSeconds=this.smoothSeconds=0}update(t,e,n){if(e<=0||e>=.25)return this.resetSampling(),!1;if(this.sampleSeconds+=e,this.sampleFrames+=1,this.sampleSeconds<1)return!1;const s=this.sampleSeconds,r=this.sampleFrames/s;return this.sampleSeconds=this.sampleFrames=0,this.slowSeconds=r<n*.9?this.slowSeconds+s:0,this.slowSeconds>=2&&this.ratio>this.floor?(this.ratio=Math.max(this.floor,this.ratio*.75),this.retryAfter=t+(t-this.lastRaise<15?90:20),this.resetSampling(),!0):this.ratio>=this.ceiling||t<this.retryAfter||(this.smoothSeconds=r>=n*.97?this.smoothSeconds+s:0,this.smoothSeconds<8)?!1:(this.ratio=Math.min(this.ceiling,this.ratio/.75),this.lastRaise=t,this.resetSampling(),!0)}}const ur=-36,Ol=170,H1=`
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
`,zl=2;function V1(){const i=new Vs(new Uint8Array([128,128,128,255]),1,1);return i.needsUpdate=!0,{fallback:i,maps:Array.from({length:zl},()=>({value:i})),rects:Array.from({length:zl},()=>({value:new Se(0,0,1,0)}))}}function W1({pos:i,nor:t,uv:e,idx:n}){const s=new Re;return s.setAttribute("position",new Te(i,3)),s.setAttribute("normal",new Te(t,3)),s.setAttribute("uv",new Te(e,2)),s.setIndex(new Te(n,1)),s.computeBoundingSphere(),s}function X1(i,t,e,n,s){const r=new Rn({map:e,roughness:.96,metalness:0});r.onBeforeCompile=o=>{o.uniforms.uTide=n;for(let l=0;l<zl;l++)o.uniforms["uDetail"+l]=s.maps[l],o.uniforms["uDetailRect"+l]=s.rects[l];o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform float uTide;
uniform sampler2D uDetail0;
uniform vec4 uDetailRect0;
uniform sampler2D uDetail1;
uniform vec4 uDetailRect1;
${H1}`).replace("#include <map_fragment>",`#include <map_fragment>
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
          float above = vWPos.y / ${kn.toFixed(2)} - uTide;
          float wet = smoothstep(0.45, 0.03, above);
          diffuseColor.rgb *= mix(1.0, 0.76, wet);
        }`)},r.customProgramCacheKey=()=>"inverloch-terrain-3";const a=new qe;for(const o of t){const l=new qt(W1(o),r);l.receiveShadow=!0,l.name="terrain",a.add(l)}return a.add(Z1(i),K1(i)),a}function Y1(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function Z1(i){const t=Y1(i),e=t.length,n=[],s=[],r=[],a=new Ct(9074780),o=new Ct(6180669),l=new Ct(3813673),c=[[0,a,o],[1,o,l]];for(let u=0;u<e;u++){const[f,p]=t[u],[x,m]=t[(u+1)%e],g=i.yAt(f,p),M=i.yAt(x,m),v=x-f,_=m-p,b=Math.hypot(v,_)||1,E=-_/b*-1,S=v/b*-1;for(const[y,w,T]of c){const P=y===0?g:g-6,U=y===0?g-6:ur,L=y===0?M:M-6,O=y===0?M-6:ur;n.push(f,P,p,x,L,m,x,O,m,f,P,p,x,O,m,f,U,p);for(const I of[w,w,T,w,T,T])s.push(I.r,I.g,I.b);for(let I=0;I<6;I++)r.push(E,0,S)}}const d=new Re;d.setAttribute("position",new ye(n,3)),d.setAttribute("normal",new ye(r,3)),d.setAttribute("color",new ye(s,3));const h=new qt(d,new Rn({vertexColors:!0,roughness:1,side:Ce}));return h.name="skirt",h}function K1(i){const t=new qe,e=i.xMax-i.xMin+Ol*2,n=i.zMax-i.zMin+Ol*2,s=190,r=(i.xMin+i.xMax)/2,a=(i.zMin+i.zMax)/2,o=new qt(new Ui(e,s,n),new Rn({color:1779245,roughness:.75,metalness:.1}));o.position.set(r,ur-s/2,a),o.receiveShadow=!0,t.add(o);const l=document.createElement("canvas");l.width=2048,l.height=160;const c=l.getContext("2d");c.fillStyle="#1b262d",c.fillRect(0,0,l.width,l.height),c.fillStyle="#e9d9a6",c.textBaseline="middle",c.font="600 78px 'Space Grotesk', system-ui, sans-serif",c.fillText("INVERLOCH",40,84);const d=c.measureText("INVERLOCH").width;c.fillStyle="#9fb4bd",c.font="400 42px 'Space Grotesk', system-ui, sans-serif",c.fillText("Bass Coast, Victoria   ·   38.63° S  145.73° E   ·   Anderson Inlet & Bass Strait",40+d+46,88);const h=new Zo(l);h.colorSpace=Ne,h.anisotropy=8;const u=1700,f=new qt(new On(u,u*(l.height/l.width)),new dn({map:h,toneMapped:!1}));f.position.set(r-e/2+u/2+110,ur-s/2,a+n/2+.6),t.add(f);const p=document.createElement("canvas");p.width=p.height=256;const x=p.getContext("2d");x.fillStyle="#e9d9a6",x.beginPath(),x.moveTo(128,18),x.lineTo(176,150),x.lineTo(128,122),x.lineTo(80,150),x.closePath(),x.fill(),x.font="700 86px 'Space Grotesk', system-ui, sans-serif",x.textAlign="center",x.fillText("N",128,240);const m=new Zo(p);m.colorSpace=Ne;const g=new qt(new On(130,130),new dn({map:m,transparent:!0,toneMapped:!1}));return g.rotation.x=-Math.PI/2,g.position.set(i.xMax+Ol/2,ur+.6,i.zMin+120),t.add(g),t}const Yu=[[-.375,-.125],[.125,-.375],[.375,.125],[-.125,.375]],q1=4e3,J1=12e3;class $1{constructor(t,e){X(this,"size",new Nt);X(this,"screen",new Fc);X(this,"screenCamera",new sl);X(this,"blend",new nn({depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{previous:{value:null},currentFrame:{value:null},weight:{value:1}},vertexShader:`
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
    `}));X(this,"quad",new qt(new On(2,2),this.blend));X(this,"history");X(this,"sample");X(this,"capture");this.renderer=t,this.onFinish=e,this.quad.frustumCulled=!1,this.screen.add(this.quad)}get pending(){return!!this.capture&&!this.capture.encoding}start(){return this.capture?Promise.reject(new Error("An antialiased photo is already being captured.")):new Promise((t,e)=>{const n=this.capture={resolve:t,reject:e,deadline:performance.now()+J1,samples:0,bestSamples:0,encoding:!1};this.armTimeout(n)})}draw(t,e,n){var o,l;const s=this.capture;if(!s||s.encoding)return!1;this.renderer.getDrawingBufferSize(this.size);const{x:r,y:a}=this.size;(((o=this.history)==null?void 0:o.image.width)!==r||((l=this.history)==null?void 0:l.image.height)!==a)&&(this.releaseTextures(),this.history=new th(r,a),this.sample=new th(r,a),this.blend.uniforms.previous.value=this.history,this.blend.uniforms.currentFrame.value=this.sample,n=!0),n&&(s.samples=0);try{return this.drawSample(t,e,s.samples),s.samples++,s.samples===Yu.length?this.encode(s):(this.renderer.copyFramebufferToTexture(this.history),s.samples>s.bestSamples&&(s.bestSamples=s.samples,this.armTimeout(s))),!0}catch{return this.cancel("The browser could not capture an antialiased photo."),!1}}drawSample(t,e,n){const[s,r]=Yu[n],a=e.projectionMatrix.elements,o=a[8],l=a[9];a[8]+=2*s/this.size.x,a[9]+=2*r/this.size.y,e.projectionMatrixInverse.copy(e.projectionMatrix).invert();const c=this.renderer.shadowMap.autoUpdate;n>0&&(this.renderer.shadowMap.autoUpdate=!1);try{this.renderer.render(t,e)}finally{a[8]=o,a[9]=l,e.projectionMatrixInverse.copy(e.projectionMatrix).invert(),this.renderer.shadowMap.autoUpdate=c}n>0&&(this.renderer.copyFramebufferToTexture(this.sample),this.blend.uniforms.weight.value=1/(n+1),this.renderer.render(this.screen,this.screenCamera))}encode(t){t.encoding=!0,this.armTimeout(t),this.releaseTextures(),this.onFinish(),this.renderer.domElement.toBlob(e=>{this.finish(t)&&(e?t.resolve(e):t.reject(new Error("The browser did not write the antialiased PNG.")))},"image/png")}armTimeout(t){window.clearTimeout(t.timeout);const e=Math.min(q1,Math.max(0,t.deadline-performance.now())),n=t.encoding?"The browser did not finish writing the antialiased PNG.":"The view did not stay still long enough to save an antialiased photo.";t.timeout=window.setTimeout(()=>this.cancel(n),e)}cancel(t){const e=this.capture;!e||!this.finish(e)||e.reject(new Error(t))}finish(t){return this.capture!==t?!1:(window.clearTimeout(t.timeout),this.capture=void 0,t.encoding||(this.releaseTextures(),this.onFinish()),!0)}releaseTextures(){var t,e;(t=this.history)==null||t.dispose(),(e=this.sample)==null||e.dispose(),this.history=this.sample=void 0,this.blend.uniforms.previous.value=null,this.blend.uniforms.currentFrame.value=null}dispose(){this.cancel("The Inverloch view was closed before saving the photo."),this.quad.geometry.dispose(),this.blend.dispose()}}function Xn(i,t,e,n,s,r,a,o,l,c){const d=new Qo(1,0),h=d.getAttribute("position"),u=[];for(let f=0;f<h.count;f++){const p=h.getX(f),x=h.getY(f),m=h.getZ(f),g=Math.sin(p*12.9898+x*78.233+m*37.719+o*4.1)*43758.5453,M=.8+(g-Math.floor(g))*.42;u.push([t+p*s*M,e+x*r*(x<0?.75:M),n+m*a*M])}for(let f=0;f<u.length;f+=3){const[p,x,m]=[u[f],u[f+1],u[f+2]],g=Qt.clamp(((p[1]+x[1]+m[1])/3-(e-r))/(2*r),0,1);i.tri(p[0],p[1],p[2],x[0],x[1],x[2],m[0],m[1],m[2],er(l,c,g))}d.dispose()}function oi(i){const t=i.build();return t.deleteAttribute("glow"),t}function j1(){const i=[];let t=new ee;return Xn(t,0,.44,0,.82,.56,.82,1,G(3098152),G(7507285)),i.push(oi(t)),t=new ee,t.cyl(0,0,0,.04,.026,.56,4,G(11905429)),Xn(t,0,.72,0,.36,.3,.36,2,G(4151352),G(9349240)),Xn(t,.17,.52,.1,.24,.19,.24,3,G(3887925),G(8362603)),i.push(oi(t)),t=new ee,t.cyl(0,0,0,.055,.04,.4,4,G(7297608)),Xn(t,0,.64,0,.46,.38,.46,4,G(3695150),G(9091170)),i.push(oi(t)),t=new ee,t.cyl(0,0,0,.035,.03,.16,4,G(5916728)),t.cyl(0,.12,0,.23,.11,.42,6,G(2506539)),t.cyl(0,.5,0,.15,0,.5,6,G(4020796)),i.push(oi(t)),i}function Zu(i){const t=[],e=i?5:7;let n=new ee;return n.blob(0,.48,0,.81,.52,.81,e,2,G(4018735),G(7507285)),t.push(oi(n)),n=new ee,i||(n.cyl(0,0,0,.04,.026,.56,3,G(11905429)),n.blob(.17,.52,.1,.24,.19,.24,4,2,G(3887925),G(8362603))),n.blob(i?.05:0,.72,0,i?.39:.36,.3,.36,e,2,G(4546110),G(9349240)),t.push(oi(n)),n=new ee,i||n.cyl(0,0,0,.055,.04,.4,3,G(7297608)),n.blob(0,.64,0,.46,.38,.46,e,2,G(3695150),G(9091170)),t.push(oi(n)),n=new ee,i?n.cyl(0,.15,0,.23,0,.85,e,G(4020796)):(n.cyl(0,.12,0,.23,.11,.42,4,G(2506539)),n.cyl(0,.5,0,.15,0,.5,5,G(4020796))),t.push(oi(n)),t}function li(i,t,e,n,s,r,a){const o=new H(...t),l=new H(...e),c=l.clone().sub(o).normalize(),d=new H(c.z,0,-c.x);d.lengthSq()<1e-6&&d.set(1,0,0),d.normalize();const h=c.clone().cross(d),u=(f,p,x)=>{const m=x*2*Math.PI/5,g=f.clone().addScaledVector(d,p*Math.cos(m)).addScaledVector(h,p*Math.sin(m));return[g.x,g.y,g.z]};for(let f=0;f<5;f++)i.quad(...u(o,n,f),...u(o,n,f+1),...u(l,s,f+1),...u(l,s,f),f%3===0?r:a)}function Q1(i,t){const e=new ee,n=t?1:-1,s=31+i*17+t*41;if(i===1){const r=G(9537397),a=G(13682093),o=G(3887925),l=G(9349240),c=[.025*n,.39,.015],d=[-.09*n,.67,-.025],h=[-.2*n,t?.91:.87,-.09],u=[.225*n,t?.61:.7,.1],f=[.06*n,.8,t?.2:.16];li(e,[0,-.015,0],c,.054,.037,r,a),li(e,[c[0],c[1]-.018,c[2]],d,.038,.023,r,a),li(e,[d[0],d[1]-.018,d[2]],h,.024,.007,r,a),li(e,[c[0],c[1]-.035,c[2]],u,.025,.007,r,a),li(e,[d[0],d[1]-.055,d[2]],f,.02,.006,r,a),Xn(e,...h,.25,.15,.24,s,o,l),Xn(e,...u,.2,.15,.215,s+1,o,l),Xn(e,...f,t?.17:.205,.13,.2,s+2,o,l)}else{const r=G(5326391),a=G(8681061),o=G(3098152),l=G(7507285),c=[-.04*n,.23,-.03],d=[-.25*n,t?.57:.62,-.1],h=[.405*n,t?.44:.41,.13],u=[-.08*n,.4,t?.34:.36];li(e,[0,-.015,0],c,.073,.042,r,a),li(e,[c[0],c[1]-.06,c[2]],d,.044,.01,r,a),li(e,[c[0],c[1]-.09,c[2]],h,.039,.009,r,a),li(e,[c[0],c[1]-.07,c[2]],u,.033,.009,r,a),Xn(e,...d,.57,.39,t?.45:.54,s,o,l),Xn(e,...h,.45,.29,.45,s+1,o,l),Xn(e,...u,.38,.27,.42,s+2,o,l)}return oi(e)}const tM=32,Bl=6,Ku=48,eM=64,nM=32,iM=4,sM=30,ws=i=>Math.floor(i/tM),qu=(i,t)=>i*65536+t;class rM{constructor(t,e,n){X(this,"cells",new Map);X(this,"meshes");X(this,"active",new Map);X(this,"previous",new H(1/0,1/0,1/0));X(this,"hidden",new te().makeScale(0,0,0));X(this,"tint",new Ct);X(this,"range",0);this.roads=n,this.meshes=Array.from({length:4},(s,r)=>{const a=new Ve(Q1(r>>1,r&1),e,Ku);return a.name=["roadside-scrub","roadside-gum"][r>>1],a.instanceMatrix.setUsage(Ci),a.count=0,a.visible=!1,a.castShadow=!0,t.add(a),a})}consider(t,e,n,s,r,a){if(s>1)return;let o=Math.imul(Math.round(t*4),73244475)^Math.imul(Math.round(n*4),668265261)^s;o=Math.imul(o^o>>>16,73244475)>>>0;const l=qu(ws(t),ws(n)),c=this.cells.get(l);if((c==null?void 0:c.length)===Bl&&o>=c[Bl-1].rank)return;const d=this.roads.nearest(t,n,sM);if(!d||d.cls>3)return;r.instanceMatrix.setUsage(Ci);const h={x:t,y:e,z:n,style:s*2+(o>>>8&1),rank:o,fallback:r,slot:a};c?(c.push(h),c.sort((u,f)=>u.rank-f.rank),c.length>Bl&&c.pop()):this.cells.set(l,[h])}setFallback(t,e){var s;const n=t.fallback.instanceMatrix;t.fallback.setMatrixAt(t.slot,e),((s=n.updateRanges[0])==null?void 0:s.count)!==n.array.length&&(n.updateRanges.length>=48?(n.clearUpdateRanges(),n.addUpdateRange(0,n.array.length)):n.addUpdateRange(t.slot*16,16)),n.needsUpdate=!0}show(t){if(t.length===this.active.size&&t.every(n=>this.active.has(n)))return;const e=new Set(t);for(const[n,s]of this.active)e.has(n)||(this.setFallback(n,s),this.active.delete(n));for(const n of this.meshes)n.count=0;for(const n of t){let s=this.active.get(n);s||(s=new te,n.fallback.getMatrixAt(n.slot,s),this.active.set(n,s),this.setFallback(n,this.hidden));const r=this.meshes[n.style],a=r.count++;r.setMatrixAt(a,s),n.fallback.getColorAt(n.slot,this.tint),r.setColorAt(a,this.tint)}for(const n of this.meshes)n.visible=n.count>0,n.visible&&(n.instanceMatrix.needsUpdate=!0,n.instanceColor.needsUpdate=!0,n.computeBoundingSphere())}update(t,e,n){const s=e<=nM?Math.min(eM,n*.65):0;if(s===this.range&&this.previous.distanceToSquared(t)<iM**2){let a=!0;for(const o of this.active.keys())if(!o.fallback.visible){a=!1;break}if(a)return}if(this.range=s,this.previous.copy(t),!s){this.show([]);return}const r=[];for(let a=ws(t.x-s);a<=ws(t.x+s);a++)for(let o=ws(t.z-s);o<=ws(t.z+s);o++)for(const l of this.cells.get(qu(a,o))??[]){if(!l.fallback.visible)continue;const c=(t.x-l.x)**2+(t.y-l.y)**2+(t.z-l.z)**2;c<s**2&&r.push({tree:l,distance:c})}r.sort((a,o)=>a.distance-o.distance||a.tree.rank-o.tree.rank),this.show(r.slice(0,Ku).map(({tree:a})=>a))}}function aM(i,t,e,n=()=>!1,s){const r=new qe;r.name="trees";const a=[j1(),Zu(!1),Zu(!0)],o=[],l=new $r({vertexColors:!0}),c=s&&e>.35?new rM(r,l,s):void 0,d=650,h=new Map,u=i.trees,f=Ge(88);for(let b=0;b<u.length;b+=d_){if(e<1&&f()>e||n(u[b]/4,u[b+1]/4))continue;const S=`${u[b+2]>>8}:${Math.floor(u[b]/4/d)}:${Math.floor(u[b+1]/4/d)}`;let y=h.get(S);y||h.set(S,y=[]),y.push(b)}const p=new te,x=new bn,m=new H,g=new H,M=new H(0,1,0),v=new Ct;let _=0;for(const[b,E]of h){const S=Number(b.split(":")[0]),y=a.map((w,T)=>{const C=new Ve(w[S],l,E.length);return C.name=["tree-near","tree-mid","tree-far"][T],C});E.forEach((w,T)=>{const C=u[w]/4,P=u[w+1]/4,U=(u[w+2]&255)/10,L=Ge(w*2654435761+11);g.set(C,t.yAt(C,P)-.15,P),x.setFromAxisAngle(M,L()*Math.PI*2);const O=.85+L()*.35;m.set(U*O,U,U*(.85+L()*.35)),p.compose(g,x,m);const I=.8+L()*.34;v.setRGB(I*(.94+L()*.14),I,I*(.9+L()*.12));for(const z of y)z.setMatrixAt(T,p),z.setColorAt(T,v);c==null||c.consider(C,g.y,P,S,y[0],T)}),o.push(new Tu(y.map(w=>[w]),r)),_+=E.length}return{group:r,count:_,updateLod(b,E,S){for(const y of o)y.update(b,E,S);c==null||c.update(b,E,S[0])}}}const oM=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,lM=`
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
}`;function cM(i,t,e){const n=i.w*i.h,s=new Uint16Array(n*2);for(let p=0;p<n;p++)s[p*2]=zc.toHalfFloat(i.raw[p]),s[p*2+1]=zc.toHalfFloat(i.exposure[p]);const r=new Vs(s,i.w,i.h,mi,Sn);r.minFilter=r.magFilter=Ze,r.wrapS=r.wrapT=Dn,r.needsUpdate=!0;const a={tField:{value:r},uSize:{value:new Nt(i.sizeX,i.sizeZ)},uTide:t,uTime:{value:0},uSunDir:{value:new H(.4,.8,.3).normalize()},uSunColor:{value:new Ct(16773848)},uShallow:{value:new Ct(7129789)},uDeep:{value:new Ct(937848)},uSky:{value:new Ct(12573938)},uFoam:{value:1}};e&&(a.uInletRain=e);const o=new nn({uniforms:a,vertexShader:oM,fragmentShader:lM,transparent:!0,depthWrite:!1,defines:e?{RAIN_RIPPLES:1}:{}}),l=new On(i.xMax-i.xMin,i.zMax-i.zMin);l.rotateX(-Math.PI/2);const c=new qt(l,o);c.position.set((i.xMin+i.xMax)/2,t.value*kn,(i.zMin+i.zMax)/2),c.renderOrder=2,c.name="water";const d=new qt(new Re,new dn({color:1929103,transparent:!0,opacity:.8,side:Ce,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));d.renderOrder=1,d.name="water-edge";const h=[];for(let p=0;p<i.nx;p++)h.push([i.xMin+p*i.dx,i.zMin]);for(let p=1;p<i.nz;p++)h.push([i.xMax,i.zMin+p*i.dz]);for(let p=i.nx-2;p>=0;p--)h.push([i.xMin+p*i.dx,i.zMax]);for(let p=i.nz-2;p>=1;p--)h.push([i.xMin,i.zMin+p*i.dz]);const u=h.map(([p,x])=>i.yAt(p,x)),f=p=>{t.value=p;const x=p*kn;c.position.y=x;const m=[],g=h.length;for(let v=0;v<g;v++){const _=(v+1)%g,b=u[v],E=u[_];if(b>=x&&E>=x)continue;const[S,y]=h[v],[w,T]=h[_],C=Math.min(b,x),P=Math.min(E,x);m.push(S,x,y,w,x,T,w,P,T,S,x,y,w,P,T,S,C,y)}d.geometry.dispose();const M=new Re;M.setAttribute("position",new ye(m,3)),d.geometry=M};return f(t.value),{mesh:c,skirt:d,uniforms:a,setTide:f}}const hM="detail-abeckett-ultra-v1.json",Gl=-38.63351,Ju=145.72774,uM=111320*Math.cos(Gl*Math.PI/180);class dM{constructor(t,e,n,s,r){X(this,"group");X(this,"daylight",{value:1});X(this,"request");X(this,"retryAt",0);X(this,"origin");X(this,"sx");X(this,"sz");this.scene=t,this.manifest=e,this.ground=s,this.redraw=r,this.origin=n(Gl,Ju);const a=n(Gl-100/110540,Ju+100/uM);this.sx=(a[0]-this.origin[0])/100,this.sz=(a[1]-this.origin[1])/100}update(t,e){this.daylight.value=Math.min(1,.08+e*.3);const n=this.origin[0]+22*this.sx,s=this.origin[1]+37*this.sz,r=Math.hypot(t.x-n,t.y-this.ground(n,s),t.z-s);if(this.group)this.group.visible=r<(this.group.visible?155:130);else if(r>220&&this.request)this.request.abort(),this.request=void 0;else if(r<155&&!this.request&&performance.now()>=this.retryAt){const a=this.request=new AbortController;this.load(a)}}async load(t){try{const e=new URL(hM,new URL(this.manifest,document.baseURI)),n=await fetch(e,{signal:t.signal});if(!n.ok)throw new Error(String(n.status));const s=await n.json();if(t.signal.aborted)return;const r=this.build(s);this.group=r,this.scene.add(r),this.redraw()}catch{t.signal.aborted||(this.retryAt=performance.now()+3e4)}finally{this.request===t&&(this.request=void 0)}}build(t){const e=new ee,n=new ee,s=new ee,r=G(6842465),a=G(10196618),o=G(3883588),l=G(12039851),c=G(16777215);for(const[u,f,p,x,m,g,M]of t.fronts){const v=Math.hypot(p-u,x-f),_=Math.atan2(m,g);e.frame(u,0,f,_),n.frame(u,0,f,_);const b=T=>3.15+(M?.24*(1-T/3.2):0);for(const T of[.32,1.58,2.97]){const C=b(T);e.box(.05,C-.09,T-.045,v-.05,C,T+.045,r)}const E=Math.max(2,Math.round(v/1.25));for(let T=0;T<=E;T++){const C=.095+T*(v-.19)/E;e.quad(C,b(.22)-.06,.22,C,b(3.05)-.06,3.05,C+.07,b(3.05)-.06,3.05,C+.07,b(.22)-.06,.22,a)}e.box(.055,3.045,3.14,v-.055,3.105,3.3,r);const S=v-1.7,y=Math.max(2,Math.round((v-1.4)/2.1)),w=M?.22:.34;for(let T=0;T<y;T++){const C=.18+S*T/y+.055,P=.18+S*(T+1)/y-.055;n.quad(C,.57,w,P,.57,w,P,2.72,w,C,2.72,w,c),e.box(C-.035,.51,w-.045,P+.035,.56,w+.04,o),e.box(C-.035,2.25,w-.025,P+.035,2.28,w+.02,l)}e.box(v-1.17,.93,w+.05,v-1.135,1.35,w+.085,l),e.box(v-1.28,.13,.15,v-.2,.17,.42,a)}for(const[u,f,p,x]of t.trees){const m=Ge(x+431),g=[5466952,7701590,8819806,6781777].map(G);s.frame(u,0,f);for(let M=0;M<90;M++){const v=m()*Math.PI*2,_=(1.05+m()*2.25)*p,b=_*Math.sin(v),E=_*Math.cos(v),S=(6.55+1.6*m()-.35*_)*p,y=(.11+.22*m())*p,w=(.16+.28*m())*p,T=g[M%4];s.tri(b-y,S+w,E,b+y,S+.42*w,E+.1,b,S-w,E+.18,T)}}const d=new qe;d.name="A'Beckett Street close detail";const h=(u,f,p)=>{const x=u.build(),m=x.getAttribute("position");for(let M=0;M<m.count;M++){const v=this.origin[0]+m.getX(M)*this.sx,_=this.origin[1]+m.getZ(M)*this.sz;m.setXYZ(M,v,this.ground(v,_)+.08+m.getY(M),_)}x.deleteAttribute("glow"),x.computeBoundingSphere();const g=new qt(x,f);g.castShadow=p,g.receiveShadow=p,d.add(g)};return h(e,new Rn({vertexColors:!0,roughness:.73,metalness:.1,side:Ce}),!0),h(s,new $r({vertexColors:!0,side:Ce}),!0),h(n,new nn({uniforms:{daylight:this.daylight},transparent:!0,depthWrite:!1,vertexShader:`varying vec3 world, facing;
        void main(){vec4 p=modelMatrix*vec4(position,1.);world=p.xyz;facing=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*p;}`,fragmentShader:`varying vec3 world, facing; uniform float daylight;
        void main(){vec3 eye=normalize(cameraPosition-world),n=normalize(facing),r=reflect(-eye,n);
          float sky=smoothstep(-.09,.27,r.y),f=pow(1.-clamp(dot(eye,n),0.,1.),3.);
          gl_FragColor=vec4(daylight*mix(vec3(.13,.18,.15),vec3(.54,.68,.78),sky),.045+.19*f+.085*sky);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),!1),d}dispose(){var t;(t=this.request)==null||t.abort()}}const $u=-.9,ju=1.3,Qu=.2,Ts={x:260,z:150,dist:3900,polar:55,azimuth:16},fM={ultra:{step:1,trees:1,shadow:4096,pixelRatio:2},high:{step:1,trees:1,shadow:4096,pixelRatio:2},medium:{step:2,trees:.6,shadow:2048,pixelRatio:1.3},low:{step:2,trees:.35,shadow:0,pixelRatio:1}},pM={ultra:{cars:[200,400,1100],trees:[260,770,4e3]},high:{cars:[170,340,1050],trees:[235,710,3800]},medium:{cars:[120,270,820],trees:[160,530,2850]},low:{cars:[85,190,600],trees:[100,380,2200]}},mM=()=>new Promise(i=>requestAnimationFrame(()=>i()));function gM(i,t){const n=t.positions,s=t.normals,r=t.colors,a=t.uvs,o=t.indices,l=o?o.length:n.length/3,c=new te().fromArray(Array.from(t.matrix)),d=new Ht().getNormalMatrix(c),h=new H,u=v=>{const _=o?o[v]:v,b=new Float64Array(11);return h.set(n[_*3],n[_*3+1],n[_*3+2]).applyMatrix4(c),b[0]=h.x,b[1]=h.y,b[2]=h.z,s&&(h.set(s[_*3],s[_*3+1],s[_*3+2]).applyMatrix3(d).normalize(),b[3]=h.x,b[4]=h.y,b[5]=h.z),r&&(b[6]=r[_*3],b[7]=r[_*3+1],b[8]=r[_*3+2]),a&&(b[9]=a[_*2],b[10]=a[_*2+1]),b},f=[],p=[],x=[],m=[],g=v=>{f.push(v[0],v[1]+i.yAt(v[0],v[2]),v[2]),s&&p.push(v[3],v[4],v[5]),r&&x.push(v[6],v[7],v[8]),a&&m.push(v[9],v[10])},M=(v,_,b)=>{g(v),g(_),g(b)};for(let v=0;v+2<l;v+=3){const _=u(v),b=u(v+1),E=u(v+2);Il(i,_,b,E,M)}return{positions:new Float32Array(f),normals:s?new Float32Array(p):void 0,colors:r?new Float32Array(x):void 0,uvs:a?new Float32Array(m):void 0}}function xM(i,t,e){let n=0;for(let s=0;s<i.length;s++){const r=i[s],a=i[(s+1)%i.length],o=(a[0]-r[0])*(e-r[1])-(a[1]-r[1])*(t-r[0]);if(o!==0){if(n===0)n=Math.sign(o);else if(Math.sign(o)!==n)return!1}}return!0}const _M=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class MM{constructor(t,e,n,s){X(this,"renderer");X(this,"scene",new Fc);X(this,"camera",new Cn(38,1,5,9e4));X(this,"controls");X(this,"atmosphere");X(this,"clouds");X(this,"hasWeatherTime",!1);X(this,"weather",new u1);X(this,"showers");X(this,"storm");X(this,"water");X(this,"coastalHaze");X(this,"stillPhoto");X(this,"onPhotoVisibilityChange",()=>{var t;document.hidden&&((t=this.stillPhoto)==null||t.cancel("Keep the Inverloch view visible while saving the photo."))});X(this,"hf");X(this,"life");X(this,"trees");X(this,"solid");X(this,"designedWalls",[]);X(this,"blockers",{polygons:[],circles:[]});X(this,"labels");X(this,"places",[]);X(this,"tide",{value:Qu});X(this,"raf",0);X(this,"last",0);X(this,"time",0);X(this,"dirty",!0);X(this,"ultraStreet");X(this,"animating",!0);X(this,"disposed",!1);X(this,"abort",new AbortController);X(this,"worker");X(this,"detailStreaming");X(this,"resizeObserver");X(this,"flight");X(this,"lastCompass",NaN);X(this,"width",1);X(this,"height",1);X(this,"quality","high");X(this,"resolution");X(this,"pacing");X(this,"solarMinutes",NaN);X(this,"roadPaths",[]);X(this,"roadOverlay",new R1);X(this,"external");X(this,"meta");X(this,"shadowAim",new H);X(this,"lookDir",new H);X(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=Qt.degToRad(e.azimuth),r=-Math.sin(s),a=-Math.cos(s),o=Math.cos(s),l=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+a*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-a*n};break;case"ArrowLeft":c={...e,x:e.x-o*n,z:e.z-l*n};break;case"ArrowRight":c={...e,x:e.x+o*n,z:e.z+l*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=Ts;break;default:return}t.preventDefault(),this.fly(c,.3)});X(this,"frame",t=>{var p,x,m,g,M,v,_,b,E,S;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,document.hidden){this.pacing.reset(),this.resolution.resetSampling();return}if(this.flight){const y=this.flight;y.t=Math.min(1,y.t+e/y.duration);const w=_M(y.t),T=(C,P)=>C+(P-C)*w;this.applyView({x:T(y.from.x,y.to.x),z:T(y.from.z,y.to.z),dist:Math.exp(T(Math.log(y.from.dist),Math.log(y.to.dist))),polar:T(y.from.polar,y.to.polar),azimuth:T(y.from.azimuth,y.to.azimuth)}),y.t>=1&&(this.flight=void 0)}this.controls&&!this.external&&this.controls.update()&&(this.dirty=!0);const n=(p=this.stillPhoto)!=null&&p.pending?this.stillPhoto:void 0;if(!n&&this.atmosphere.update(e)&&(this.dirty=!0),!n&&this.animating&&(this.time+=e,this.water.uniforms.uTime.value=this.time,(x=this.life)==null||x.update(e,this.time),this.dirty=!0),!n&&this.opts.assets.detail){const{x:y,y:w,z:T}=this.camera.position;(m=this.detailStreaming)==null||m.update(t/1e3,y,w,T,w-this.hf.yAt(y,T))}if(!this.dirty&&!n)return;const s=this.pacing.takeFrame(t);if(s===void 0)return;const r=this.dirty;this.dirty=!1,!n&&this.animating&&this.resolution.update(t/1e3,s,this.pacing.target)&&this.renderer.setPixelRatio(this.resolution.ratio);const a=this.camera;(g=this.ultraStreet)==null||g.update(a.position,this.atmosphere.sun.intensity);let o,l=1/0;const c=!!this.controls&&!this.external,d=this.hf.yAt(a.position.x,a.position.z);if(c&&(a.position.y=Math.max(a.position.y,d+12)),!n||!this.hasWeatherTime){const y=this.weatherTime(),w=this.weather;w.update(y),this.clouds.update(y),this.clouds.setCover(w.cover),this.clouds.setFlash(((M=this.storm)==null?void 0:M.update(y,w,a.position,this.opts.onThunder))??0);const T=w.rain>.015&&a.position.y-d<4&&this.solidAt(a.position.x,a.position.z);(v=this.showers)==null||v.update(w.rain,w.wetness,this.time,void 0,void 0,T),this.hasWeatherTime=!0}const h=Math.max(1,a.position.y-Math.max(d,this.waterLevel));if(this.controls&&c)o=a.position.distanceTo(this.controls.target),this.shadowAim.copy(this.controls.target);else{a.getWorldDirection(this.lookDir);const y=Math.min(this.lookDir.y<-.05?h/-this.lookDir.y:1e9,40+h*3,3e3);this.shadowAim.copy(a.position).addScaledVector(this.lookDir,y),o=Math.max(y,h)*1.3,l=Math.max(350,h*10)}const u=c?Qt.clamp(o*.02,2,80):Qt.clamp(o*.012,.4,60);Math.abs(u-a.near)>a.near*.05&&(a.near=u,a.updateProjectionMatrix());const f=pM[this.quality];if((_=this.life)==null||_.updateParkedLod(a.position,h,f.cars),(b=this.trees)==null||b.updateLod(a.position,h,f.trees),this.atmosphere.aimShadow(this.shadowAim,o),n||(E=this.detailStreaming)==null||E.applyReady(),n!=null&&n.draw(this.scene,a,r)||this.renderer.render(this.scene,a),(S=this.labels)==null||S.update(a,this.width,this.height,l),c){const y=Math.round(this.currentView().azimuth);y!==this.lastCompass&&(this.lastCompass=y,this.cb.onCompass(y))}});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.external=!!s.external,this.pacing=new L_(s.frameTarget)}async init(){var Q;try{this.renderer=new Ix({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D model needs.");return}const t=this.renderer;this.quality=this.pickQuality();let e=fM[this.quality];const n=(navigator.deviceMemory??8)>4;this.quality==="medium"&&n&&!this.opts.quality&&(e={...e,pixelRatio:2,trees:.8}),this.resolution=new k1(Math.min(window.devicePixelRatio||1,e.pixelRatio),this.quality==="low"?.6:1),t.setPixelRatio(this.resolution.ratio),t.outputColorSpace=Ne,t.toneMapping=Ia,t.shadowMap.enabled=e.shadow>0,t.shadowMap.type=As;const s=t.domElement;this.opts.external?(s.setAttribute("role","img"),s.setAttribute("aria-label","3D model of Inverloch")):(s.tabIndex=0,s.setAttribute("role","application"),s.setAttribute("aria-label","3D model of Inverloch. Drag to pan, right-drag to rotate, scroll to zoom. Arrow keys pan, plus and minus zoom, Q and E rotate.")),s.style.display="block",s.style.outlineOffset="-3px",this.container.appendChild(s),s.addEventListener("webglcontextlost",N=>{var V;N.preventDefault(),(V=this.stillPhoto)==null||V.cancel("The browser lost the graphics context during the photo."),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this model was using.")});const r=this.worker=new m1;let a;try{a=await m_(this.opts.assets,e.step,(N,V)=>this.cb.onProgress(N*.6,V),r,this.abort.signal)}catch(N){r.close(),this.disposed||this.cb.onError(N instanceof Error?N.message:"The model data could not be loaded.");return}if(this.disposed){a.ground.dispose();return}const{town:o,heights:l,exposure:c,surface:d,terrainPatches:h,terrainTiles:u,ground:f}=a;this.meta=o.meta,this.quality==="ultra"&&this.opts.external&&((Q=this.opts.clearPolygons)!=null&&Q.length)&&this.opts.assets.detail&&(this.ultraStreet=new dM(this.scene,this.opts.assets.detail,this.fromLatLon.bind(this),(N,V)=>this.hf.yAt(N,V),()=>{this.dirty=!0}));const p=[...this.opts.clear??[],...(this.opts.clearLatLon??[]).map(N=>{const[V,K]=this.fromLatLon(N.lat,N.lon);return{x:V,z:K,r:N.r}})],x=(this.opts.clearPolygons??[]).map(N=>({pts:N.latLon.map(([V,K])=>this.fromLatLon(V,K)),roads:!!N.roads})),m=(N,V,K)=>x.some(Y=>(!K||Y.roads)&&xM(Y.pts,N,V)),g=(N,V)=>p.some(K=>(N-K.x)**2+(V-K.z)**2<K.r*K.r)||m(N,V,!1),M=(this.opts.detailLatLon??[]).map(N=>{const[V,K]=this.fromLatLon(N.lat,N.lon);return{x:V,z:K,r:N.r}}),v=(N,V)=>M.some(K=>(N-K.x)**2+(V-K.z)**2<K.r*K.r);f.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());const _=async(N,V)=>{this.cb.onProgress(N,V),await mM()};if(await _(.62,"Shaping the terrain"),this.disposed){f.dispose();return}const b=this.hf=new lu(l,c,o.meta.grid[0],o.meta.grid[1],o.meta.size[0],o.meta.size[1],e.step,d,h),E=V1();this.scene.add(X1(b,u,f,this.tide,E));const S=navigator.deviceMemory??8;this.detailStreaming=new G_(this.opts.assets,this.quality==="low"||S<=4,E,f.anisotropy,r,()=>{this.dirty=!0});const y=this.showers=new T1(this.scene,this.camera,this.quality);this.water=cM(b,this.tide,this.quality==="ultra"?y.inletRain:void 0),this.scene.add(this.water.skirt,this.water.mesh),await _(.7,"Laying out the streets");const w=x.some(N=>N.roads)?(N,V)=>m(N,V,!0):void 0,T=B1(o,b,w,(N,V)=>y.shadeAsphalt(N,V));this.scene.add(T.group),this.roadPaths=T.paths,this.roadOverlay.add(T.pavement,T.pavementEnd),await _(.78,"Raising the buildings");const C=C_(o,b,T.index,W_,g);this.scene.add(C.group),await _(.86,"Planting trees");const P=this.trees=aM(o,b,e.trees,(N,V)=>g(N,V)||x_(N,V),T.index);this.scene.add(P.group),await _(.92,"Adding landmarks");const U={town:o,hf:b,footprints:C.footprints,roads:T.index,paths:T.paths,isClear:g,isDetail:v,hasDetail:M.length>0},L=a1(U);this.scene.add(L.group),this.blockers=C.blockers,this.blockers.polygons.push(...L.blockers.polygons),this.blockers.circles.push(...L.blockers.circles),this.solid=new Map,this.designedWalls=C.designedWalls;for(const N of[...C.footprints.map(V=>V.poly),...this.designedWalls]){if(N.length<6)continue;let V=1/0,K=-1/0,Y=1/0,Z=-1/0;for(let F=0;F<N.length;F+=2)V=Math.min(V,N[F]),K=Math.max(K,N[F]),Y=Math.min(Y,N[F+1]),Z=Math.max(Z,N[F+1]);for(let F=Math.floor(V/16);F<=Math.floor(K/16);F++)for(let q=Math.floor(Y/16);q<=Math.floor(Z/16);q++){const st=`${F}_${q}`,ct=this.solid.get(st);ct?ct.push(N):this.solid.set(st,[N])}}if(this.life=new y1(U,L,this.quality==="ultra",(N,V)=>this.roadSurfaceAt(N,V),this.opts.roadGrounding?0:Au),this.life.setTide(this.tide.value*kn),this.scene.add(this.life.group),this.disposed)return;this.clouds=new Qx,this.atmosphere=new n_(t,this.water,e.shadow,this.clouds),this.places=V_(o.meta,b);const O=this.places.find(N=>N.id==="inlet");this.storm=new d1(this.scene,O.x,O.z),this.clouds.uniforms.uFlashCenter.value=this.storm.center;const I=this.coastalHaze=new h1(O.x,O.z,this.atmosphere.horizon,this.quality==="ultra"&&this.opts.coastalMist!==!1,this.clouds,{value:this.atmosphere.sunDir},this.atmosphere.cloudShadowStrength);I.setWaterLevel(this.waterLevel),I.addWater(this.water.mesh),I.add(this.scene),this.scene.addEventListener("childadded",N=>I.add(N.child)),this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.labels=new k_(this.labelLayer,this.places,N=>this.flyToPlace(N)),this.external||this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const z=window.matchMedia("(prefers-reduced-motion: reduce)").matches;z&&(this.animating=!1),this.external?this.setExternalCamera(300,900,2600,0,-.42):z?this.applyView(Ts):(this.applyView({...Ts,dist:9500,polar:24,azimuth:-20}),this.fly(Ts,3.4)),this.cb.onProgress(1,"Ready"),this.cb.onReady({quality:this.quality,houses:o.counts.houses,mappedBuildings:o.counts.buildings,trees:P.count,roadPieces:o.counts.roads,sources:o.meta.sources,places:this.places}),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)}get isAnimating(){return this.animating}setAnimating(t){var e;t!==this.animating&&((e=this.resolution)==null||e.resetSampling()),this.animating=t,this.dirty=!0}setFrameTarget(t){var e;this.pacing.setTarget(t)&&((e=this.resolution)==null||e.resetSampling())}weatherTime(){return Date.now()/1e3}setExternalCamera(t,e,n,s,r){if(!this.external)return;const a=this.camera.position,o=this.camera.rotation,l=a.x===t&&a.y===e&&a.z===n,c=o.order==="YXZ"&&o.x===r&&o.y===s&&o.z===0;l&&c||(this.camera.position.set(t,e,n),this.camera.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}setExternal(t){if(!(t===this.external||!this.hf)){if(this.external=t,t)this.flight=void 0,this.controls&&(this.controls.enabled=!1);else{this.controls||this.setupControls(),this.controls.enabled=!0;const e=this.camera;e.getWorldDirection(this.lookDir);const n=Math.max(1,e.position.y),s=this.lookDir.y<-.05?Math.min(n/-this.lookDir.y,6e3):900,r=this.controls.target.copy(e.position).addScaledVector(this.lookDir,s);r.x=Qt.clamp(r.x,this.hf.xMin,this.hf.xMax),r.z=Qt.clamp(r.z,this.hf.zMin,this.hf.zMax),r.y=0,this.controls.update(),this.fly(Ts,1.6)}this.resize()}}getCamera(){const t=new hn().setFromQuaternion(this.camera.quaternion,"YXZ"),e=this.camera.position;return{x:e.x,y:e.y,z:e.z,yaw:t.y,pitch:t.x}}fromLatLon(t,e){const n=this.meta;return n?[(e-n.origin[0])*n.metresPerDegree[0],-(t-n.origin[1])*n.metresPerDegree[1]]:[0,0]}addParts(t){const e=new qe;e.name="guest";const n=t.map(s=>{var f;const r=s.roadOverlay?{...s,positions:this.roadOverlay.project(this.hf,s.positions,s.indices),indices:void 0,normals:void 0,colors:void 0,uvs:void 0,onGround:!0}:s.onGround?{...s,...gM(this.hf,s),indices:void 0}:s,a=new Re,o=(p,x)=>new Te(p instanceof Float32Array?p:Float32Array.from(p),x);a.setAttribute("position",o(r.positions,3)),r.colors&&a.setAttribute("color",o(r.colors,3)),r.uvs&&a.setAttribute("uv",o(r.uvs,2)),r.indices&&a.setIndex(Array.from(r.indices)),r.normals?a.setAttribute("normal",o(r.normals,3)):r.roadOverlay||a.computeVertexNormals();let l=null;r.map&&(l=new Ae(r.map),l.colorSpace=Ne,l.wrapS=l.wrapT=Ds,r.mapRepeat&&l.repeat.set(r.mapRepeat[0],r.mapRepeat[1]),l.anisotropy=4,l.needsUpdate=!0);const c=r.opacity??1,d={color:new Ct().setRGB(...r.color??[1,1,1]),map:l,vertexColors:!!r.colors,transparent:c<1,opacity:c,side:r.doubleSide?Ce:di,...r.roadOverlay?Hu:{}},h=r.unlit?new dn(d):new Rn({...d,roughness:r.roughness??.9,metalness:r.metalness??0,emissive:new Ct().setRGB(...r.emissive??[0,0,0]),emissiveIntensity:r.emissiveIntensity??1,emissiveMap:r.glowMap?l:null,flatShading:!!r.flatShading}),u=new qt(a,h);return u.matrixAutoUpdate=!1,r.onGround||u.matrix.fromArray(Array.from(r.matrix)),r.wetAsphalt&&h instanceof Rn&&((f=this.showers)==null||f.shadeAsphalt(h)),r.wetAsphalt&&r.onGround&&!r.roadOverlay&&this.roadOverlay.add(a.getAttribute("position").array),u.userData.fixed=!!r.onGround,u.castShadow=!r.roadOverlay&&c>=1,u.receiveShadow=!r.roadOverlay,e.add(u),u});return this.scene.add(e),this.dirty=!0,{setMatrix:(s,r)=>{const a=n[s];!a||a.userData.fixed||(a.matrix.fromArray(Array.from(r)),a.matrixWorldNeedsUpdate=!0,this.dirty=!0)},setEmissive:(s,r,a,o,l)=>{var d;const c=(d=n[s])==null?void 0:d.material;c instanceof Rn&&(c.emissive.setRGB(r,a,o),c.emissiveIntensity=l,this.dirty=!0)},remove:()=>{var s;this.scene.remove(e);for(const r of n){this.roadOverlay.remove(r.geometry.getAttribute("position").array),r.geometry.dispose();const a=r.material;(s=a.map)==null||s.dispose(),a.dispose()}this.dirty=!0}}}addTrafficCar(t,e,n,s,r){if(!this.life)throw new Error("Wait for the Inverloch model before adding traffic");const a=this.life.makeTrafficCar(t,e,n,s,r),{mesh:o,scale:l}=a;let c;return{setMatrix:(d,h)=>{d===0&&(o.matrix.fromArray(h),this.opts.roadGrounding||(o.matrix.elements[13]+=Au),o.matrixWorldNeedsUpdate=!0,o.visible=!!(h[0]||h[1]||h[2]),this.dirty=!0)},setSignal:d=>{!c&&d&&(c=Du(t),c.scale.copy(l),o.add(c)),c&&(Iu(c,d),this.dirty=!0)},setCabin:d=>{a.setCabin(d),this.dirty=!0},remove:()=>{a.remove(),c==null||c.geometry.dispose(),c==null||c.material.dispose(),this.dirty=!0}}}addPad(t){const e=t.radius??t.halfWidth??5,n=t.radius??t.halfDepth??5,s=t.heading??0,r=Math.cos(s),a=Math.sin(s);let o=1/0,l=-1/0;for(const[f,p]of[[0,0],[-e,-n],[e,-n],[e,n],[-e,n],[0,-n],[0,n],[-e,0],[e,0]]){const x=this.hf.yAt(t.x+f*r+p*a,t.z-f*a+p*r);o=Math.min(o,x),l=Math.max(l,x)}const c=l+(t.lift??.25),d=c-o+1,h=t.radius?new Ko(t.radius,t.radius,d,24):new Ui(e*2,d,n*2),u=new qt(h,new Rn({color:new Ct().setRGB(...t.color),roughness:1}));return u.position.set(t.x,c-d/2,t.z),u.rotation.y=s,u.receiveShadow=!0,u.name="guest-pad",this.scene.add(u),this.dirty=!0,c}setSolarMinutes(t){!this.atmosphere||t===this.solarMinutes||(this.solarMinutes=t,this.atmosphere.setSolar(t),this.dirty=!0)}roadSpot(t){const e=t.trim().toLowerCase();let n=null;for(const p of this.roadPaths)p.name.toLowerCase()===e&&(!n||p.length>n.length)&&(n=p);if(!n)return null;const s=n.pts.length/3,r=0,a=s-1,o=s>>1;let l=n.pts[a*3]-n.pts[r*3],c=n.pts[a*3+2]-n.pts[r*3+2];const d=Math.hypot(l,c)||1;l/=d,c/=d;const h=Math.min(70,d*.5),u=n.pts[o*3]-l*h,f=n.pts[o*3+2]-c*h;return{x:u,y:this.hf.yAt(u,f)+38,z:f,yaw:Math.atan2(-l,-c),pitch:-.42}}groundAt(t,e){return this.hf?this.hf.yAt(t,e):0}roadSurfaceAt(t,e){if(!this.hf||!Number.isFinite(t)||!Number.isFinite(e))return null;const n=this.roadOverlay.heightAt(t,e);return n!==null&&n>=this.hf.yAt(t,e)-.01?n:null}nearestCar(t,e,n){var s;return((s=this.life)==null?void 0:s.nearestCar(t,e,n))??null}addCars(t){var e;(e=this.life)==null||e.addCars(t),this.dirty=!0}driveCar(t,e,n,s,r,a,o=0,l=0,c=0){var h;const d=((h=this.life)==null?void 0:h.driveCar(t,e,n,s,r,a,o,l,c))??!1;return this.dirty=!0,d}setControlledCar(t,e){var s;const n=((s=this.life)==null?void 0:s.setControlledCar(t,e))??!1;return n&&(this.dirty=!0),n}resetCar(t,e){var s;const n=((s=this.life)==null?void 0:s.resetCar(t,e))??!1;return n&&(this.dirty=!0),n}setRemoved({cars:t=[]}){var e;(e=this.life)==null||e.setHiddenCars(t),this.dirty=!0}designedWallFootprints(){return this.designedWalls.map(t=>t.slice())}buildingBlockers(){return this.blockers}parkedCarBlockers(){var t;return((t=this.life)==null?void 0:t.parkedCarBlockers())??[]}parkedCarBlocker(t,e){var n;return((n=this.life)==null?void 0:n.parkedCarBlocker(t,e))??null}solidAt(t,e){var s;const n=(s=this.solid)==null?void 0:s.get(`${Math.floor(t/16)}_${Math.floor(e/16)}`);if(!n)return!1;for(const r of n){let a=!1;for(let o=0,l=r.length/2-1;o<r.length/2;l=o++){const c=r[o*2],d=r[o*2+1],h=r[l*2],u=r[l*2+1];d>e!=u>e&&t<(h-c)*(e-d)/(u-d)+c&&(a=!a)}if(a)return!0}return!1}get waterLevel(){return this.tide.value*kn}get bounds(){return this.hf?[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]:[-4e3,4e3,-3440,3440]}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}setTide(t){var e,n;this.water&&(this.water.setTide(Qt.clamp(t,$u,ju)),(e=this.life)==null||e.setTide(this.tide.value*kn),(n=this.coastalHaze)==null||n.setWaterLevel(this.waterLevel),this.dirty=!0)}captureStill(){return this.disposed||!this.atmosphere||this.quality!=="ultra"?Promise.reject(new Error("Antialiased photos are available after the Ultra view loads.")):document.hidden?Promise.reject(new Error("Open the Inverloch view to save a photo.")):(this.stillPhoto||(this.stillPhoto=new $1(this.renderer,()=>{this.dirty=!0,this.resolution.resetSampling()}),document.addEventListener("visibilitychange",this.onPhotoVisibilityChange)),this.resolution.resetSampling(),this.stillPhoto.start())}setCoastalMist(t){var e;this.opts.coastalMist=t,(e=this.coastalHaze)==null||e.setMist(this.quality==="ultra"&&t),this.dirty=!0}setLabelsVisible(t){var e;(e=this.labels)==null||e.setVisible(t),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.2)}resetView(){this.fly(Ts,1.8)}setView(t,e,n,s,r,a=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},a)}faceNorth(){const t=this.currentView();this.fly({...t,azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:Qt.clamp(e.dist*t,this.controls.minDistance,this.controls.maxDistance)},.35)}dispose(){var t,e,n,s,r,a,o,l,c,d;this.disposed=!0,this.abort.abort(),(t=this.ultraStreet)==null||t.dispose(),(e=this.detailStreaming)==null||e.dispose(),(n=this.worker)==null||n.close(),cancelAnimationFrame(this.raf),(s=this.resizeObserver)==null||s.disconnect(),(r=this.labels)==null||r.dispose(),(a=this.stillPhoto)==null||a.dispose(),(o=this.clouds)==null||o.dispose(),(l=this.showers)==null||l.dispose(),(c=this.storm)==null||c.dispose(),document.removeEventListener("visibilitychange",this.onPhotoVisibilityChange),(d=this.controls)==null||d.dispose(),this.renderer&&(this.renderer.domElement.removeEventListener("keydown",this.onKey),this.scene.traverse(h=>{var p,x;const u=h;(x=(p=u.geometry)==null?void 0:p.dispose)==null||x.call(p);const f=Array.isArray(u.material)?u.material:u.material?[u.material]:[];for(const m of f){for(const g of Object.values(m))g instanceof Ae&&g.dispose();m.dispose()}}),this.renderer.dispose(),this.renderer.domElement.remove())}pickQuality(){if(this.opts.quality)return this.opts.quality;const t=new URLSearchParams(window.location.search).get("quality");if(t==="ultra"||t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new Kx(this.camera,this.renderer.domElement);t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=70,t.maxDistance=12e3,t.maxPolarAngle=Qt.degToRad(84),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const e=t.target,n=this.hf;e.x=Qt.clamp(e.x,n.xMin,n.xMax),e.z=Qt.clamp(e.z,n.zMin,n.zMax),e.y=0,this.dirty=!0}),this.renderer.domElement.addEventListener("keydown",this.onKey)}clampView(t){var e,n;return{x:Qt.clamp(t.x,this.hf.xMin,this.hf.xMax),z:Qt.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:Qt.clamp(t.dist,((e=this.controls)==null?void 0:e.minDistance)??70,((n=this.controls)==null?void 0:n.maxDistance)??12e3),polar:Qt.clamp(t.polar,2,84),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=this.camera.position.clone().sub(t),n=new ta().setFromVector3(e);return{x:t.x,z:t.z,dist:n.radius,polar:Qt.radToDeg(n.phi),azimuth:Qt.radToDeg(n.theta)}}applyView(t){const e=new ta(t.dist,Qt.degToRad(t.polar),Qt.degToRad(t.azimuth)),n=this.controls.target.set(t.x,0,t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(!this.controls||this.external)return;if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.fov=this.external?60:t/e<.8?52:38,this.camera.updateProjectionMatrix(),this.dirty=!0}}const kl="Map data © OpenStreetMap contributors · Elevation © Geoscience Australia (CC BY 4.0)",vM=`
.inv-embed, .inv-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the model but never take a touch: drags and pinches must reach the canvas underneath */
.inv-embed-labels, .inv-embed .inv-label { pointer-events: none; }
.inv-embed-credit { position: absolute; left: 50%; bottom: var(--inv-credit-bottom, 6px); transform: translateX(-50%); margin: 0; max-width: calc(100% - 24px);
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; pointer-events: none; }
`,SM=["low","medium","high","ultra"];function yM(i,t){if(!document.querySelector("style[data-inverloch-model]")){const u=document.createElement("style");u.setAttribute("data-inverloch-model",""),u.textContent=Yn+vM,document.head.appendChild(u)}const e=document.createElement("div");e.className="inv-embed";const n=document.createElement("div");n.className="inv-embed-layer";const s=document.createElement("div");s.className="inv-embed-layer inv-embed-labels";const r=document.createElement("p");r.className="inv-embed-credit",r.textContent=kl,e.append(n,s,r),i.appendChild(e);const a=typeof t.assets=="string"?{height:t.assets+"height.png",ground:t.assets+(typeof window<"u"&&window.anSmallGround?"ground-2k.webp":"ground.webp"),town:t.assets+"town.json",detail:t.assets+"detail.json"}:t.assets;let o=[],l=!1,c;const d=new Promise((u,f)=>c={ok:u,fail:f}),h=new MM(n,s,{onProgress:(u,f)=>{var p;return(p=t.onProgress)==null?void 0:p.call(t,u,f)},onReady:u=>{o=u.places.map(f=>{const p=Math.min(Math.max(f.view[0]*.55,90),1500),x=f.view[1]*Math.PI/180,m=f.view[2]*Math.PI/180,g=f.x+p*Math.sin(x)*Math.sin(m),M=f.z+p*Math.sin(x)*Math.cos(m),v=Math.max(h.groundAt(g,M),h.waterLevel)+Math.max(p*Math.cos(x),20),_=f.x-g,b=f.y-10-v,E=f.z-M;return{id:f.id,name:f.name,kind:f.kind,x:g,y:v,z:M,yaw:Math.atan2(-_,-E),pitch:Math.atan2(b,Math.hypot(_,E)),tx:f.x,tz:f.z}}),t.labels===!1&&h.setLabelsVisible(!1),l=!0,c.ok()},onError:u=>{var f;return l?(f=t.onError)==null?void 0:f.call(t,u):c.fail(new Error(u))},onCompass:()=>{}},{assets:a,external:!0,quality:t.quality,frameTarget:t.frameTarget,coastalMist:t.coastalMist,onThunder:t.onThunder,clear:t.clear,clearLatLon:t.clearLatLon,clearPolygons:t.clearPolygons,roadGrounding:t.roadGrounding,detailLatLon:t.detailLatLon});return h.init(),{ready:d,setCamera:(u,f,p,x,m)=>h.setExternalCamera(u,f,p,x,m),setMinutes:u=>h.setSolarMinutes(u),setTide:u=>h.setTide(u),setAnimating:u=>h.setAnimating(u),setFrameTarget:u=>h.setFrameTarget(u),captureStill:()=>h.captureStill(),setCoastalMist:u=>h.setCoastalMist(u),setLabelsVisible:u=>h.setLabelsVisible(u),groundAt:(u,f)=>h.groundAt(u,f),roadSurfaceAt:(u,f)=>h.roadSurfaceAt(u,f),waterLevel:()=>h.waterLevel,bounds:()=>h.bounds,fromLatLon:(u,f)=>h.fromLatLon(u,f),setMode:u=>h.setExternal(u!=="bird"),getCamera:()=>h.getCamera(),flyToPlace:u=>h.flyToPlace(u),lookAt:(u,f,p,x,m)=>h.setView(u,f,p,x,m),addParts:u=>h.addParts(u),addTrafficCar:(u,f,p,x,m)=>h.addTrafficCar(u,f,p,x,m),addPad:u=>h.addPad(u),spots:()=>o,nearestCar:(u,f,p)=>h.nearestCar(u,f,p),driveCar:(u,f,p,x,m,g,M,v,_)=>h.driveCar(u,f,p,x,m,g,M,v,_),setControlledCar:(u,f)=>h.setControlledCar(u,f),resetCar:(u,f)=>h.resetCar(u,f),setRemoved:u=>h.setRemoved(u),solidAt:(u,f)=>h.solidAt(u,f),designedWallFootprints:()=>h.designedWallFootprints(),buildingBlockers:()=>h.buildingBlockers(),parkedCarBlockers:()=>h.parkedCarBlockers(),parkedCarBlocker:(u,f)=>h.parkedCarBlocker(u,f),addCars:u=>h.addCars(u),roadSpot:u=>{const f=h.roadSpot(u);return f?{id:"road:"+u,name:u,kind:"landmark",...f,tx:f.x-Math.sin(f.yaw)*70,tz:f.z-Math.cos(f.yaw)*70}:null},tide:{min:$u,max:ju,initial:Qu},credit:kl,dispose:()=>{h.dispose(),e.remove()}}}return _n.CREDIT=kl,_n.create=yM,_n.qualityPresets=SM,Object.defineProperty(_n,Symbol.toStringTag,{value:"Module"}),_n}({});

var InverlochModel=function(mn){"use strict";var gv=Object.defineProperty;var xv=(mn,Gn,ei)=>Gn in mn?gv(mn,Gn,{enumerable:!0,configurable:!0,writable:!0,value:ei}):mn[Gn]=ei;var j=(mn,Gn,ei)=>xv(mn,typeof Gn!="symbol"?Gn+"":Gn,ei);const Gn='.inv-label{position:absolute;left:0;top:0;pointer-events:auto;font:600 12px/1 Space Grotesk,system-ui,sans-serif;padding:6px 10px;border-radius:999px;background:#0c1c24e6;color:#fff;border:1px solid rgba(255,255,255,.2);white-space:nowrap;cursor:pointer;will-change:transform}.inv-label:after{content:"";position:absolute;left:50%;bottom:-8px;width:1px;height:8px;background:#ffffffbf}.inv-label:hover{background:#0b7d9c}.inv-label--nature{background:#183826eb}.inv-label--nature:hover{background:#2c7a4b}.inv-label--water{background:none;border-color:transparent;color:#f1fbff;font-style:italic;font-weight:500;font-size:13px;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,35,60,.95),0 0 8px rgba(0,35,60,.7)}.inv-label--water:after{display:none}.inv-label--water:hover{background:#0c1c2499}.inv-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.inv-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}';/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ei="187",kn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cu=0,El=1,Pu=2,ds=1,Lu=2,fs=3,ii=0,Ye=1,Ie=2,Di=0,ps=1,oa=2,wl=3,Tl=4,Du=5,Ii=100,Iu=101,Nu=102,Uu=103,Fu=104,Ou=200,zu=201,Bu=202,Gu=203,Al=204,Rl=205,ku=206,Hu=207,Vu=208,Wu=209,Xu=210,Yu=211,qu=212,Zu=213,Ku=214,la=0,ca=1,ha=2,ms=3,ua=4,da=5,fa=6,pa=7,ma=0,$u=1,Ju=2,Hn=0,Cl=1,Pl=2,Ll=3,Dl=4,Il=5,Nl=6,ga=7,Ul=300,Ni=301,gs=302,xa=303,_a=304,qs=1e3,Rn=1001,va=1002,we=1003,Qu=1004,Zs=1005,qe=1006,Ma=1007,Cn=1008,je=1009,Fl=1010,Ol=1011,xs=1012,Sa=1013,Pn=1014,gn=1015,xn=1016,ya=1017,ba=1018,Ui=1020,zl=35902,Bl=35899,Gl=1021,kl=1022,Ln=1023,si=1026,ri=1027,Ea=1028,wa=1029,ai=1030,Ta=1031,Aa=1033,Ks=33776,$s=33777,Js=33778,Qs=33779,Ra=35840,Ca=35841,Pa=35842,La=35843,Da=36196,Ia=37492,Na=37496,Ua=37488,Fa=37489,js=37490,Oa=37491,za=37808,Ba=37809,Ga=37810,ka=37811,Ha=37812,Va=37813,Wa=37814,Xa=37815,Ya=37816,qa=37817,Za=37818,Ka=37819,$a=37820,Ja=37821,Qa=36492,ja=36494,to=36495,eo=36283,no=36284,tr=36285,io=36286,ju=3200,er=0,td=1,oi="",Te="srgb",nr="srgb-linear",ir="linear",re="srgb",so=7680,ed=519,nd=512,id=513,sd=514,Hl=515,rd=516,ad=517,Vl=518,Wl=519,od=35044,sr=35048,Xl="300 es",_n=2e3,_s=2001;function ld(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cd(){const i=vs("canvas");return i.style.display="block",i}const Yl={};function ql(...i){const t="THREE."+i.shift();console.log(t,...i)}function Zl(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ut(...i){i=Zl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=Zl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function rr(...i){const t=i.join(" ");t in Yl||(Yl[t]=!0,Ut(...i))}function hd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ud={[la]:la,[ha]:fa,[ua]:ua,[ms]:da,[ca]:ca,[fa]:ha,[pa]:pa,[da]:ms};class li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kl=1234567;const Ms=Math.PI/180,Ss=180/Math.PI;function Fi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Xt(i,t,e){return Math.max(t,Math.min(e,i))}function ro(i,t){return(i%t+t)%t}function dd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function fd(i,t,e){return i!==t?(e-i)/(t-i):0}function ys(i,t,e){return(1-e)*i+e*t}function pd(i,t,e,n){return ys(i,t,1-Math.exp(-e*n))}function md(i,t=1){return t-Math.abs(ro(i,t*2)-t)}function gd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function xd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function _d(i,t){return i+Math.floor(Math.random()*(t-i+1))}function vd(i,t){return i+Math.random()*(t-i)}function Md(i){return i*(.5-Math.random())}function Sd(i){i!==void 0&&(Kl=i);let t=Kl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yd(i){return i*Ms}function bd(i){return i*Ss}function Ed(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function wd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $l(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Td(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*d,o*h,o*c);break;default:Ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ao(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Jl(i,t){if(t.constructor===Float32Array)return i;const e=ao(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Ql(i,t){if(t.constructor===Float32Array)return i;const e=ao(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const he={DEG2RAD:Ms,RAD2DEG:Ss,generateUUID:Fi,clamp:Xt,euclideanModulo:ro,mapLinear:dd,inverseLerp:fd,lerp:ys,damp:pd,pingpong:md,smoothstep:gd,smootherstep:xd,randInt:_d,randFloat:vd,randFloatSpread:Md,seededRandom:Sd,degToRad:yd,radToDeg:bd,isPowerOfTwo:Ed,ceilPowerOfTwo:wd,floorPowerOfTwo:$l,setQuaternionFromProperEuler:Td,normalize:Ql,denormalize:Jl},xl=class xl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xl.prototype.isVector2=!0;let Lt=xl;class vn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],p=r[a+2],M=r[a+3];if(u!==M||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*M;m<0&&(f=-f,d=-d,p=-p,M=-M,m=-m);let g=1-o;if(m<.9995){const S=Math.acos(m),_=Math.sin(S);g=Math.sin(g*S)/_,o=Math.sin(o*S)/_,l=l*g+f*o,c=c*g+d*o,h=h*g+p*o,u=u*g+M*o}else{l=l*g+f*o,c=c*g+d*o,h=h*g+p*o,u=u*g+M*o;const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return t[e]=o*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-o*d,t[e+2]=c*p+h*d+o*f-l*u,t[e+3]=h*p-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _l=class _l{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oo.copy(this).projectOnVector(t),this.sub(oo)}reflect(t){return this.sub(oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_l.prototype.isVector3=!0;let W=_l;const oo=new W,jl=new vn,vl=class vl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],M=s[0],m=s[3],g=s[6],S=s[1],_=s[4],v=s[7],E=s[2],b=s[5],x=s[8];return r[0]=a*M+o*S+l*E,r[3]=a*m+o*_+l*b,r[6]=a*g+o*v+l*x,r[1]=c*M+h*S+u*E,r[4]=c*m+h*_+u*b,r[7]=c*g+h*v+u*x,r[2]=f*M+d*S+p*E,r[5]=f*m+d*_+p*b,r[8]=f*g+d*v+p*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,p=e*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/p;return t[0]=u*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=f*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=d*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lo.makeScale(t,e)),this}rotate(t){return rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lo.makeRotation(-t)),this}translate(t,e){return rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};vl.prototype.isMatrix3=!0;let zt=vl;const lo=new zt,tc=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ec=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ad(){const i={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[nr]:{primaries:t,whitePoint:n,transfer:ir,toXYZ:tc,fromXYZ:ec,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:n,transfer:re,toXYZ:tc,fromXYZ:ec,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),i}const Kt=Ad();function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zi;class Rd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zi===void 0&&(zi=vs("canvas")),zi.width=t.width,zi.height=t.height;const s=zi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cd=0;class ar{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Fi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(co(s[a].image)):r.push(co(s[a]))}else r=co(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}let Pd=0;const ho=new W;class ve extends li{constructor(t=ve.DEFAULT_IMAGE,e=ve.DEFAULT_MAPPING,n=Rn,s=Rn,r=qe,a=Cn,o=Ln,l=je,c=ve.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Fi(),this.name="",this.source=new ar(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ho).x}get height(){return this.source.getSize(ho).y}get depth(){return this.source.getSize(ho).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ul)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qs:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qs:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ve.DEFAULT_IMAGE=null,ve.DEFAULT_MAPPING=Ul,ve.DEFAULT_ANISOTROPY=1;const Ml=class Ml{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],M=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,v=(d+1)/2,E=(g+1)/2,b=(h+f)/4,x=(u+M)/4,y=(p+m)/4;return _>v&&_>E?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=b/n,r=x/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=y/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=x/r,s=y/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-p)*(m-p)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(u-M)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ml.prototype.isVector4=!0;let de=Ml;class Ld extends li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new ve({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ar(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends Ld{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nc extends ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dd extends ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const sa=class sa{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,p,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,p,M,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,p,M,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=M,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sa().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),a=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,p=o*h,M=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-M*c,e[9]=-o*l,e[2]=M-f*c,e[6]=p+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,p=c*h,M=c*u;e[0]=f+M*o,e[4]=p*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-p,e[6]=M+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,p=c*h,M=c*u;e[0]=f-M*o,e[4]=-a*u,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*h,e[9]=M-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,p=o*h,M=o*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+M,e[1]=l*u,e[5]=M*c+f,e[9]=d*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,p=o*l,M=o*c;e[0]=l*h,e[4]=M-f*u,e[8]=p*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-M*u}else if(t.order==="XZY"){const f=a*l,d=a*c,p=o*l,M=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+M,e[5]=a*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=o*h,e[10]=M*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Id,t,Nd)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ci.crossVectors(n,tn),ci.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ci.crossVectors(n,tn)),ci.normalize(),or.crossVectors(tn,ci),s[0]=ci.x,s[4]=or.x,s[8]=tn.x,s[1]=ci.y,s[5]=or.y,s[9]=tn.y,s[2]=ci.z,s[6]=or.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],M=n[6],m=n[10],g=n[14],S=n[3],_=n[7],v=n[11],E=n[15],b=s[0],x=s[4],y=s[8],T=s[12],R=s[1],C=s[5],N=s[9],B=s[13],P=s[2],k=s[6],D=s[10],L=s[14],Z=s[3],Y=s[7],U=s[11],O=s[15];return r[0]=a*b+o*R+l*P+c*Z,r[4]=a*x+o*C+l*k+c*Y,r[8]=a*y+o*N+l*D+c*U,r[12]=a*T+o*B+l*L+c*O,r[1]=h*b+u*R+f*P+d*Z,r[5]=h*x+u*C+f*k+d*Y,r[9]=h*y+u*N+f*D+d*U,r[13]=h*T+u*B+f*L+d*O,r[2]=p*b+M*R+m*P+g*Z,r[6]=p*x+M*C+m*k+g*Y,r[10]=p*y+M*N+m*D+g*U,r[14]=p*T+M*B+m*L+g*O,r[3]=S*b+_*R+v*P+E*Z,r[7]=S*x+_*C+v*k+E*Y,r[11]=S*y+_*N+v*D+E*U,r[15]=S*T+_*B+v*L+E*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],M=t[7],m=t[11],g=t[15],S=l*d-c*f,_=o*d-c*u,v=o*f-l*u,E=a*d-c*h,b=a*f-l*h,x=a*u-o*h;return e*(M*S-m*_+g*v)-n*(p*S-m*E+g*b)+s*(p*_-M*E+g*x)-r*(p*v-M*b+m*x)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],M=t[13],m=t[14],g=t[15],S=e*o-n*a,_=e*l-s*a,v=e*c-r*a,E=n*l-s*o,b=n*c-r*o,x=s*c-r*l,y=h*M-u*p,T=h*m-f*p,R=h*g-d*p,C=u*m-f*M,N=u*g-d*M,B=f*g-d*m,P=S*B-_*N+v*C+E*R-b*T+x*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/P;return t[0]=(o*B-l*N+c*C)*k,t[1]=(s*N-n*B-r*C)*k,t[2]=(M*x-m*b+g*E)*k,t[3]=(f*b-u*x-d*E)*k,t[4]=(l*R-a*B-c*T)*k,t[5]=(e*B-s*R+r*T)*k,t[6]=(m*v-p*x-g*_)*k,t[7]=(h*x-f*v+d*_)*k,t[8]=(a*N-o*R+c*y)*k,t[9]=(n*R-e*N-r*y)*k,t[10]=(p*b-M*v+g*S)*k,t[11]=(u*v-h*b-d*S)*k,t[12]=(o*T-a*C-l*y)*k,t[13]=(e*C-n*T+s*y)*k,t[14]=(M*_-p*E-m*S)*k,t[15]=(h*E-u*_+f*S)*k,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,p=r*u,M=a*h,m=a*u,g=o*u,S=l*c,_=l*h,v=l*u,E=n.x,b=n.y,x=n.z;return s[0]=(1-(M+g))*E,s[1]=(d+v)*E,s[2]=(p-_)*E,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(f+g))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(p+_)*x,s[9]=(m-S)*x,s[10]=(1-(f+M))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Bi.set(s[0],s[1],s[2]).length();const o=Bi.set(s[4],s[5],s[6]).length(),l=Bi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Mn.copy(this);const c=1/a,h=1/o,u=1/l;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=_n,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let p,M;if(l)p=r/(a-r),M=a*r/(a-r);else if(o===_n)p=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===_s)p=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=_n,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s);let p,M;if(l)p=1/(a-r),M=a/(a-r);else if(o===_n)p=-2/(a-r),M=-(a+r)/(a-r);else if(o===_s)p=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};sa.prototype.isMatrix4=!0;let jt=sa;const Bi=new W,Mn=new jt,Id=new W(0,0,0),Nd=new W(1,1,1),ci=new W,or=new W,tn=new W,ic=new jt,sc=new vn;class Sn{constructor(t=0,e=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ic.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ic,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sc.setFromEuler(this),this.setFromQuaternion(sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class uo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ud=0;const rc=new W,Gi=new vn,Wn=new jt,lr=new W,bs=new W,Fd=new W,Od=new vn,ac=new W(1,0,0),oc=new W(0,1,0),lc=new W(0,0,1),cc={type:"added"},zd={type:"removed"},ki={type:"childadded",child:null},fo={type:"childremoved",child:null};class Ne extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new W,e=new Sn,n=new vn,s=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new zt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(ac,t)}rotateY(t){return this.rotateOnAxis(oc,t)}rotateZ(t){return this.rotateOnAxis(lc,t)}translateOnAxis(t,e){return rc.copy(t).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ac,t)}translateY(t){return this.translateOnAxis(oc,t)}translateZ(t){return this.translateOnAxis(lc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(bs,lr,this.up):Wn.lookAt(lr,bs,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cc),ki.child=t,this.dispatchEvent(ki),ki.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zd),fo.child=t,this.dispatchEvent(fo),fo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cc),ki.child=t,this.dispatchEvent(ki),ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,Fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ne.DEFAULT_UP=new W(0,1,0),Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Je extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bd={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),g=this._getHandJoint(c,M);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},cr={h:0,s:0,l:0};function mo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=ro(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=mo(a,r,t+.3333333333333333),this.g=mo(a,r,t),this.b=mo(a,r,t-.3333333333333333)}return Kt.colorSpaceToWorking(this,s),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const n=hc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return Kt.workingToColorSpace(Ve.copy(this),t),Math.round(Xt(Ve.r*255,0,255))*65536+Math.round(Xt(Ve.g*255,0,255))*256+Math.round(Xt(Ve.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,r=Ve.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Te){Kt.workingToColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(cr);const n=ys(hi.h,cr.h,e),s=ys(hi.s,cr.s,e),r=ys(hi.l,cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Rt;Rt.NAMES=hc;class uc extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const yn=new W,Xn=new W,go=new W,Yn=new W,Hi=new W,Vi=new W,dc=new W,xo=new W,_o=new W,vo=new W,Mo=new de,So=new de,yo=new de;class bn{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),Xn.subVectors(n,e),go.subVectors(t,e);const a=yn.dot(yn),o=yn.dot(Xn),l=yn.dot(go),c=Xn.dot(Xn),h=Xn.dot(go),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,p=(a*h-o*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Mo.setScalar(0),So.setScalar(0),yo.setScalar(0),Mo.fromBufferAttribute(t,e),So.fromBufferAttribute(t,n),yo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Mo,r.x),a.addScaledVector(So,r.y),a.addScaledVector(yo,r.z),a}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),Xn.subVectors(t,e),yn.cross(Xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),yn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return bn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Hi.subVectors(s,n),Vi.subVectors(r,n),xo.subVectors(t,n);const l=Hi.dot(xo),c=Vi.dot(xo);if(l<=0&&c<=0)return e.copy(n);_o.subVectors(t,s);const h=Hi.dot(_o),u=Vi.dot(_o);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Hi,a);vo.subVectors(t,r);const d=Hi.dot(vo),p=Vi.dot(vo);if(p>=0&&d<=p)return e.copy(r);const M=d*c-l*p;if(M<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(Vi,o);const m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return dc.subVectors(r,s),o=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(dc,o);const g=1/(m+M+f);return a=M*g,o=f*g,e.copy(n).addScaledVector(Hi,a).addScaledVector(Vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ui{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Es),ur.subVectors(this.max,Es),Wi.subVectors(t.a,Es),Xi.subVectors(t.b,Es),Yi.subVectors(t.c,Es),di.subVectors(Xi,Wi),fi.subVectors(Yi,Xi),Mi.subVectors(Wi,Yi);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Mi.z,Mi.y,di.z,0,-di.x,fi.z,0,-fi.x,Mi.z,0,-Mi.x,-di.y,di.x,0,-fi.y,fi.x,0,-Mi.y,Mi.x,0];return!bo(e,Wi,Xi,Yi,ur)||(e=[1,0,0,0,1,0,0,0,1],!bo(e,Wi,Xi,Yi,ur))?!1:(dr.crossVectors(di,fi),e=[dr.x,dr.y,dr.z],bo(e,Wi,Xi,Yi,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const qn=[new W,new W,new W,new W,new W,new W,new W,new W],En=new W,hr=new ui,Wi=new W,Xi=new W,Yi=new W,di=new W,fi=new W,Mi=new W,Es=new W,ur=new W,dr=new W,Si=new W;function bo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Si.fromArray(i,r);const o=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=t.dot(Si),c=e.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Zn=Gd();function Gd(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function kd(i){Math.abs(i)>65504&&Ut("DataUtils.toHalfFloat(): Value out of range."),i=Xt(i,-65504,65504),Zn.floatView[0]=i;const t=Zn.uint32View[0],e=t>>23&511;return Zn.baseTable[e]+((t&8388607)>>Zn.shiftTable[e])}function Hd(i){const t=i>>10;return Zn.uint32View[0]=Zn.mantissaTable[Zn.offsetTable[t]+(i&1023)]+Zn.exponentTable[t],Zn.floatView[0]}class fc{static toHalfFloat(t){return kd(t)}static fromHalfFloat(t){return Hd(t)}}const Se=new W,fr=new Lt;let Vd=0;class Ae extends li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=od,this.updateRanges=[],this.gpuType=gn,this.version=0,this._normalizationScale=t!==void 0?ao(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Jl(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ql(t,this.array)}}class pc extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mc extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Wd=new ui,ws=new W,Eo=new W;class yi{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);const e=ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Eo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(Eo)),this.expandByPoint(ws.copy(t.center).sub(Eo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Xd=0;const an=new jt,wo=new Ne,qi=new W,en=new ui,Ts=new ui,Ue=new W;class Re extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ld(t)?mc:pc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return wo.lookAt(t),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(en.min,Ts.min),en.expandByPoint(Ue),Ue.addVectors(en.max,Ts.max),en.expandByPoint(Ue)):(en.expandByPoint(Ts.min),en.expandByPoint(Ts.max))}en.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ue.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(t,c),Ue.add(qi)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ae(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let T=0;T<n.count;T++)o[T]=new W,l[T]=new W;const h=new W,u=new W,f=new W,d=new Lt,p=new Lt,M=new Lt,m=new W,g=new W;function S(T,R,C){c[T]=c[R]=c[C]=1,h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,C),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),M.fromBufferAttribute(r,C),u.sub(h),f.sub(h),p.sub(d),M.sub(d);const N=1/(p.x*M.y-M.x*p.y);isFinite(N)&&(m.copy(u).multiplyScalar(M.y).addScaledVector(f,-p.y).multiplyScalar(N),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-M.x).multiplyScalar(N),o[T].add(m),o[R].add(m),o[C].add(m),l[T].add(g),l[R].add(g),l[C].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let T=0,R=_.length;T<R;++T){const C=_[T],N=C.start,B=C.count;for(let P=N,k=N+B;P<k;P+=3)S(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const v=new W,E=new W,b=new W,x=new W;function y(T){b.fromBufferAttribute(s,T),x.copy(b);const R=o[T];v.copy(R),v.sub(b.multiplyScalar(b.dot(R))).normalize(),E.crossVectors(x,R);const N=E.dot(l[T])<0?-1:1;a.setXYZW(T,v.x,v.y,v.z,N)}for(let T=0,R=n.count;T<R;++T)c[T]&&y(T);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,h=new W,u=new W;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),M=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,p=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new Ae(f,h,u)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const To=new W,Yd=new W,qd=new zt;class In{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=To.subVectors(n,e).cross(Yd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(To),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qd.getNormalMatrix(t),s=this.coplanarPoint(To).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Zd=0;class bi extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=ps,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Rl,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=so,this.stencilZFail=so,this.stencilZPass=so,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new In().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Kn=new W,Ao=new W,pr=new W,mr=new W;class gr{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ao.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),mr.copy(this.origin).sub(Ao);const r=t.distanceTo(e)*.5,a=-this.direction.dot(pr),o=mr.dot(this.direction),l=-mr.dot(pr),c=mr.lengthSq(),h=Math.abs(1-a*a);let u,f,d,p;if(h>0)if(u=a*l-o,f=a*o-l,p=r*h,u>=0)if(f>=-p)if(f<=p){const M=1/h;u*=M,f*=M,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ao).addScaledVector(pr,f),d}intersectSphere(t,e){if(t.radius<0)return null;Kn.subVectors(t.center,this.origin);const n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,f=t.y-a.y,d=t.z-a.z,p=e.x-a.x,M=e.y-a.y,m=e.z-a.z,g=n.x-a.x,S=n.y-a.y,_=n.z-a.z,v=Math.abs(l),E=Math.abs(c),b=Math.abs(h);let x,y,T,R,C,N,B,P,k,D,L,Z;if(v>=E&&v>=b?(T=l,N=u,k=p,Z=g,l>=0?(x=c,y=h,R=f,C=d,B=M,P=m,D=S,L=_):(x=h,y=c,R=d,C=f,B=m,P=M,D=_,L=S)):E>=b?(T=c,N=f,k=M,Z=S,c>=0?(x=h,y=l,R=d,C=u,B=m,P=p,D=_,L=g):(x=l,y=h,R=u,C=d,B=p,P=m,D=g,L=_)):(T=h,N=d,k=m,Z=_,h>=0?(x=l,y=c,R=u,C=f,B=p,P=M,D=g,L=S):(x=c,y=l,R=f,C=u,B=M,P=p,D=S,L=g)),T===0)return null;const Y=x/T,U=y/T,O=1/T,z=R-Y*N,X=C-U*N,F=B-Y*k,K=P-U*k,et=D-Y*Z,lt=L-U*Z,nt=et*K-lt*F,pt=z*lt-X*et,Bt=F*X-K*z;if(s){if(nt<0||pt<0||Bt<0)return null}else if((nt<0||pt<0||Bt<0)&&(nt>0||pt>0||Bt>0))return null;const bt=nt+pt+Bt;if(bt===0)return null;const Ot=O*(nt*N+pt*k+Bt*Z);return(bt>0?Ot<0:Ot>0)?null:this.at(Ot/bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nn extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const gc=new jt,Ei=new gr,xr=new yi,xc=new W,_r=new W,vr=new W,Mr=new W,Ro=new W,Sr=new W,_c=new W,yr=new W;class Yt extends Ne{constructor(t=new Re,e=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Ro.fromBufferAttribute(u,t),a?Sr.addScaledVector(Ro,h):Sr.addScaledVector(Ro.sub(e),h))}e.add(Sr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(xr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(xr,xc)===null||Ei.origin.distanceToSquared(xc)>(t.far-t.near)**2))&&(gc.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(gc),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,M=f.length;p<M;p++){const m=f[p],g=a[m.materialIndex],S=Math.max(m.start,d.start),_=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,E=_;v<E;v+=3){const b=o.getX(v),x=o.getX(v+1),y=o.getX(v+2);s=br(this,g,t,n,c,h,u,b,x,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let m=p,g=M;m<g;m+=3){const S=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);s=br(this,a,t,n,c,h,u,S,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,M=f.length;p<M;p++){const m=f[p],g=a[m.materialIndex],S=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,E=_;v<E;v+=3){const b=v,x=v+1,y=v+2;s=br(this,g,t,n,c,h,u,b,x,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=p,g=M;m<g;m+=3){const S=m,_=m+1,v=m+2;s=br(this,a,t,n,c,h,u,S,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Kd(i,t,e,n,s,r,a,o){let l;if(t.side===Ye?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ii,o),l===null)return null;yr.copy(o),yr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(yr);return c<e.near||c>e.far?null:{distance:c,point:yr.clone(),object:i}}function br(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,_r),i.getVertexPosition(l,vr),i.getVertexPosition(c,Mr);const h=Kd(i,t,e,n,_r,vr,Mr,_c);if(h){const u=new W;bn.getBarycoord(_c,_r,vr,Mr,u),s&&(h.uv=bn.getInterpolatedAttribute(s,o,l,c,u,new Lt)),r&&(h.uv1=bn.getInterpolatedAttribute(r,o,l,c,u,new Lt)),a&&(h.normal=bn.getInterpolatedAttribute(a,o,l,c,u,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new W,materialIndex:0};bn.getNormal(_r,vr,Mr,f.normal),h.face=f,h.barycoord=u}return h}class Er extends ve{constructor(t=null,e=1,n=1,s,r,a,o,l,c=we,h=we,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vc extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Zi=new jt,Mc=new jt,wr=[],Sc=new ui,$d=new jt,As=new Yt,Rs=new yi;class Ze extends Yt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$d)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),Sc.copy(t.boundingBox).applyMatrix4(Zi),this.boundingBox.union(Sc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),Rs.copy(t.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(Rs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(n),t.ray.intersectsSphere(Rs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zi),Mc.multiplyMatrices(n,Zi),As.matrixWorld=Mc,As.raycast(t,wr);for(let a=0,o=wr.length;a<o;a++){const l=wr[a];l.instanceId=r,l.object=this,e.push(l)}wr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Er(new Float32Array(s*this.count),s,this.count,Ea,gn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wi=new yi,Jd=new Lt(.5,.5),Tr=new W;class Cs{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,a=new In){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],M=r[9],m=r[10],g=r[11],S=r[12],_=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-a,d-h,g-p,E-S).normalize(),s[1].setComponents(c+a,d+h,g+p,E+S).normalize(),s[2].setComponents(c+o,d+u,g+M,E+_).normalize(),s[3].setComponents(c-o,d-u,g-M,E-_).normalize(),n)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,d-f,g-m,E-v).normalize();else if(s[4].setComponents(c-l,d-f,g-m,E-v).normalize(),e===_n)s[5].setComponents(c+l,d+f,g+m,E+v).normalize();else if(e===_s)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){wi.center.set(0,0,0);const e=Jd.distanceTo(t.center);return wi.radius=.7071067811865476+e,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Tr.x=s.normal.x>0?t.max.x:t.min.x,Tr.y=s.normal.y>0?t.max.y:t.min.y,Tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const yc=new jt;class Co{constructor(){this.coordinateSystem=_n,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];yc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Cs),n[s].setFromProjectionMatrix(yc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Cs),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Co().copy(this)}}class bc extends bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ar=new W,Rr=new W,Ec=new jt,Ps=new gr,Cr=new yi,Po=new W,wc=new W;class Qd extends Ne{constructor(t=new Re,e=new bc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ar.fromBufferAttribute(e,s-1),Rr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ar.distanceTo(Rr);t.setAttribute("lineDistance",new fe(n,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=r,t.ray.intersectsSphere(Cr)===!1)return;Ec.copy(s).invert(),Ps.copy(t.ray).applyMatrix4(Ec);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let M=d,m=p-1;M<m;M+=c){const g=h.getX(M),S=h.getX(M+1),_=Pr(this,t,Ps,l,g,S,M);_&&e.push(_)}if(this.isLineLoop){const M=h.getX(p-1),m=h.getX(d),g=Pr(this,t,Ps,l,M,m,p-1);g&&e.push(g)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let M=d,m=p-1;M<m;M+=c){const g=Pr(this,t,Ps,l,M,M+1,M);g&&e.push(g)}if(this.isLineLoop){const M=Pr(this,t,Ps,l,p-1,d,p-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Pr(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(Ar.fromBufferAttribute(o,s),Rr.fromBufferAttribute(o,r),e.distanceSqToSegment(Ar,Rr,Po,wc)>n)return;Po.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Po);if(!(c<t.near||c>t.far))return{distance:c,point:wc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Tc=new W,Ac=new W;class jd extends Qd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Tc.fromBufferAttribute(e,s),Ac.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Tc.distanceTo(Ac);t.setAttribute("lineDistance",new fe(n,1))}else Ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rc extends ve{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=we,this.minFilter=we,this.generateMipmaps=!1,this.needsUpdate=!0}copy(t){return super.copy(t),this.source=new ar(Object.assign({},t.image)),this}}class Cc extends ve{constructor(t=[],e=Ni,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lo extends ve{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ki extends ve{constructor(t,e,n=Pn,s,r,a,o=we,l=we,c,h=si,u=1){if(h!==si&&h!==ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ar(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Pc extends Ki{constructor(t,e=Pn,n=Ni,s,r,a=we,o=we,l,c=si){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Lc extends ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ti extends Re{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function p(M,m,g,S,_,v,E,b,x,y,T){const R=v/x,C=E/y,N=v/2,B=E/2,P=b/2,k=x+1,D=y+1;let L=0,Z=0;const Y=new W;for(let U=0;U<D;U++){const O=U*C-B;for(let z=0;z<k;z++){const X=z*R-N;Y[M]=X*S,Y[m]=O*_,Y[g]=P,c.push(Y.x,Y.y,Y.z),Y[M]=0,Y[m]=0,Y[g]=b>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(z/x),u.push(1-U/y),L+=1}}for(let U=0;U<y;U++)for(let O=0;O<x;O++){const z=f+O+k*U,X=f+O+k*(U+1),F=f+(O+1)+k*(U+1),K=f+(O+1)+k*U;l.push(z,X,K),l.push(X,F,K),Z+=6}o.addGroup(d,Z,T),d+=Z,f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Do extends Re{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let p=0;const M=[],m=n/2;let g=0;S(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(d,2));function S(){const v=new W,E=new W;let b=0;const x=(e-t)/n;for(let y=0;y<=r;y++){const T=[],R=y/r,C=R*(e-t)+t;for(let N=0;N<=s;N++){const B=N/s,P=B*l+o,k=Math.sin(P),D=Math.cos(P);E.x=C*k,E.y=-R*n+m,E.z=C*D,u.push(E.x,E.y,E.z),v.set(k,x,D).normalize(),f.push(v.x,v.y,v.z),d.push(B,1-R),T.push(p++)}M.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){const R=M[T][y],C=M[T+1][y],N=M[T+1][y+1],B=M[T][y+1];(t>0||T!==0)&&(h.push(R,C,B),b+=3),(e>0||T!==r-1)&&(h.push(C,N,B),b+=3)}c.addGroup(g,b,0),g+=b}function _(v){const E=p,b=new Lt,x=new W;let y=0;const T=v===!0?t:e,R=v===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*R,0),f.push(0,R,0),d.push(.5,.5),p++;const C=p;for(let N=0;N<=s;N++){const P=N/s*l+o,k=Math.cos(P),D=Math.sin(P);x.x=T*D,x.y=m*R,x.z=T*k,u.push(x.x,x.y,x.z),f.push(0,R,0),b.x=k*.5+.5,b.y=D*.5*R+.5,d.push(b.x,b.y),p++}for(let N=0;N<s;N++){const B=E+N,P=C+N;v===!0?h.push(P,P+1,B):h.push(P+1,P,B),y+=3}c.addGroup(g,y,v===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Io extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const _=new W,v=new W,E=new W;for(let b=0;b<e.length;b+=3)d(e[b+0],_),d(e[b+1],v),d(e[b+2],E),l(_,v,E,S)}function l(S,_,v,E){const b=E+1,x=[];for(let y=0;y<=b;y++){x[y]=[];const T=S.clone().lerp(v,y/b),R=_.clone().lerp(v,y/b),C=b-y;for(let N=0;N<=C;N++)N===0&&y===b?x[y][N]=T:x[y][N]=T.clone().lerp(R,N/C)}for(let y=0;y<b;y++)for(let T=0;T<2*(b-y)-1;T++){const R=Math.floor(T/2);T%2===0?(f(x[y][R+1]),f(x[y+1][R]),f(x[y][R])):(f(x[y][R+1]),f(x[y+1][R+1]),f(x[y+1][R]))}}function c(S){const _=new W;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(S),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){const S=new W;for(let _=0;_<r.length;_+=3){S.x=r[_+0],S.y=r[_+1],S.z=r[_+2];const v=m(S)/2/Math.PI+.5,E=g(S)/Math.PI+.5;a.push(v,1-E)}p(),u()}function u(){for(let S=0;S<a.length;S+=6){const _=a[S+0],v=a[S+2],E=a[S+4],b=Math.max(_,v,E),x=Math.min(_,v,E);b>.9&&x<.1&&(_<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),E<.2&&(a[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,_){const v=S*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function p(){const S=new W,_=new W,v=new W,E=new W,b=new Lt,x=new Lt,y=new Lt;for(let T=0,R=0;T<r.length;T+=9,R+=6){S.set(r[T+0],r[T+1],r[T+2]),_.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),b.set(a[R+0],a[R+1]),x.set(a[R+2],a[R+3]),y.set(a[R+4],a[R+5]),E.copy(S).add(_).add(v).divideScalar(3);const C=m(E);M(b,R+0,S,C),M(x,R+2,_,C),M(y,R+4,v,C)}}function M(S,_,v,E){E<0&&S.x===1&&(a[_]=S.x-1),v.x===0&&v.z===0&&(a[_]=E/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.vertices,t.indices,t.radius,t.detail)}}function tf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Dc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=af(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let f=e;f<s;f+=e){const d=i[f],p=i[f+1];d<o&&(o=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ls(r,a,e,o,l,c,0),a}function Dc(i,t,e,n,s){let r;if(s===xf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Fc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Fc(a/n|0,i[a],i[a+1],r);return r&&$i(r,r.next)&&(Ns(r),r=r.next),r}function Ai(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($i(e,e.next)||ge(e.prev,e,e.next)===0)){if(Ns(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ls(i,t,e,n,s,r,a){if(!i)return;!a&&r&&uf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?nf(i,n,s,r):ef(i)){t.push(l.i,i.i,c.i),Ns(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=sf(Ai(i),t),Ls(i,t,e,n,s,r,2)):a===2&&rf(i,t,e,n,s,r):Ls(Ai(i),t,e,n,s,r,1);break}}}function ef(i){const t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Ds(s,o,r,l,a,c,p.x,p.y)&&ge(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function nf(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ge(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,l,c),p=Math.min(h,u,f),M=Math.max(o,l,c),m=Math.max(h,u,f),g=No(d,p,t,e,n),S=No(M,m,t,e,n);let _=i.prevZ,v=i.nextZ;for(;_&&_.z>=g&&v&&v.z<=S;){if(_.x>=d&&_.x<=M&&_.y>=p&&_.y<=m&&_!==s&&_!==a&&Ds(o,h,l,u,c,f,_.x,_.y)&&ge(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=M&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&Ds(o,h,l,u,c,f,v.x,v.y)&&ge(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=g;){if(_.x>=d&&_.x<=M&&_.y>=p&&_.y<=m&&_!==s&&_!==a&&Ds(o,h,l,u,c,f,_.x,_.y)&&ge(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=S;){if(v.x>=d&&v.x<=M&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&Ds(o,h,l,u,c,f,v.x,v.y)&&ge(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function sf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!$i(n,s)&&Nc(n,e,e.next,s)&&Is(n,s)&&Is(s,n)&&(t.push(n.i,e.i,s.i),Ns(e),Ns(e.next),e=i=s),e=e.next}while(e!==i);return Ai(e)}function rf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&pf(a,o)){let l=Uc(a,o);a=Ai(a,a.next),l=Ai(l,l.next),Ls(a,t,e,n,s,r,0),Ls(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function af(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Dc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ff(c))}s.sort(of);for(let r=0;r<s.length;r++)e=lf(s[r],e);return e}function of(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function lf(i,t){const e=cf(i,t);if(!e)return t;const n=Uc(e,i);return Ai(n,n.next),Ai(e,e.next)}function cf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if($i(i,e))return e;do{if($i(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Ic(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Is(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&hf(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function hf(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function uf(i,t,e,n){let s=i;do s.z===0&&(s.z=No(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,df(s)}function df(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function No(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ff(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ic(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ds(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Ic(i,t,e,n,s,r,a,o)}function pf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!mf(i,t)&&(Is(i,t)&&Is(t,i)&&gf(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||$i(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $i(i,t){return i.x===t.x&&i.y===t.y}function Nc(i,t,e,n){const s=Dr(ge(i,t,e)),r=Dr(ge(i,t,n)),a=Dr(ge(e,n,i)),o=Dr(ge(e,n,t));return!!(s!==r&&a!==o||s===0&&Lr(i,e,t)||r===0&&Lr(i,n,t)||a===0&&Lr(e,i,n)||o===0&&Lr(e,t,n))}function Lr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Dr(i){return i>0?1:i<0?-1:0}function mf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Nc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Is(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function gf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Uc(i,t){const e=Uo(i.i,i.x,i.y),n=Uo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Fc(i,t,e,n){const s=Uo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ns(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Uo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class _f{static triangulate(t,e,n=2){return tf(t,e,n)}}class Fo{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Fo.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Oc(t),zc(n,t);let a=t.length;e.forEach(Oc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,zc(n,e[l]);const o=_f.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Oc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function zc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Oo extends Io{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oo(t.radius,t.detail)}}class Un extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],p=[],M=[],m=[];for(let g=0;g<h;g++){const S=g*f-a;for(let _=0;_<c;_++){const v=_*u-r;p.push(v,-S,0),M.push(0,0,1),m.push(_/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){const _=S+c*g,v=S+c*(g+1),E=S+1+c*(g+1),b=S+1+c*g;d.push(_,v,b),d.push(v,E,b)}this.setIndex(d),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(M,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.width,t.height,t.widthSegments,t.heightSegments)}}class zo extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new W,f=new W,d=[],p=[],M=[],m=[];for(let g=0;g<=n;g++){const S=[],_=g/n,v=a+_*o,E=t*Math.cos(v),b=Math.sqrt(t*t-E*E);let x=0;g===0&&a===0?x=.5/e:g===n&&l===Math.PI&&(x=-.5/e);for(let y=0;y<=e;y++){const T=y/e,R=s+T*r;u.x=-b*Math.cos(R),u.y=E,u.z=b*Math.sin(R),p.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),m.push(T+x,1-_),S.push(c++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<e;S++){const _=h[g][S+1],v=h[g][S],E=h[g+1][S],b=h[g+1][S+1];(g!==0||a>0)&&d.push(_,v,b),(g!==n-1||l<Math.PI)&&d.push(v,E,b)}this.setIndex(d),this.setAttribute("position",new fe(p,3)),this.setAttribute("normal",new fe(M,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Ji(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Bc(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Bc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ke(i){const t={};for(let e=0;e<i.length;e++){const n=Ji(i[e]);for(const s in n)t[s]=n[s]}return t}function Bc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function vf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Mf={clone:Ji,merge:Ke};var Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Rt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new W().fromArray(s.value);break;case"v4":this.uniforms[n].value=new de().fromArray(s.value);break;case"m3":this.uniforms[n].value=new zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new jt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class bf extends nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $n extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=er,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bo extends bi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=er,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=ma,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ef extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wf extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Go={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(kc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!kc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function kc(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Tf{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Af=new Tf;class ko{constructor(t){this.manager=t!==void 0?t:Af,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}ko.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qi=new WeakMap;class Rf extends ko{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Go.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=Qi.get(a);u===void 0&&(u=[],Qi.set(a,u)),u.push({onLoad:e,onError:s})}return a}const o=vs("img");function l(){h(),e&&e(this);const u=Qi.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}Qi.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),Go.remove(`image:${t}`);const f=Qi.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onError&&p.onError(u)}Qi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Go.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class Cf extends ko{constructor(t){super(t)}load(t,e,n,s){const r=new ve,a=new Rf(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Hc extends Ne{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Pf extends Hc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ho=new jt,Vc=new W,Wc=new W;class Lf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cs,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Vc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vc),Wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ho,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===_s||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Ho)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ir=new W,Nr=new vn,Fn=new W;class Vo extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ir,Nr,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ir,Nr,Fn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ir,Nr,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ir,Nr,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pi=new W,Xc=new Lt,Yc=new Lt;class wn extends Vo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,Xc,Yc),e.subVectors(Yc,Xc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class qc extends Vo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Df extends Lf{constructor(){super(new qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class If extends Hc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Df}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ji=-90,ts=1;class Wo extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(ji,ts,t,e);s.layers=this.layers,this.add(s);const r=new wn(ji,ts,t,e);r.layers=this.layers,this.add(r);const a=new wn(ji,ts,t,e);a.layers=this.layers,this.add(a);const o=new wn(ji,ts,t,e);o.layers=this.layers,this.add(o);const l=new wn(ji,ts,t,e);l.layers=this.layers,this.add(l);const c=new wn(ji,ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Nf extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const Zc=new jt;class Uf{constructor(t,e,n=0,s=1/0){this.ray=new gr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Zc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zc),this}intersectObject(t,e=!0,n=[]){return Xo(t,this,n,e),n.sort(Kc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Xo(t[s],this,n,e);return n.sort(Kc),n}}function Kc(i,t){return i.distance-t.distance}function Xo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Xo(r[a],t,e,!0)}}class Ur{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Xt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Sl=class Sl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Sl.prototype.isMatrix2=!0;let $c=Sl;class Ff extends li{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Jc(i,t,e,n){const s=Of(n);switch(e){case Gl:return i*t;case Ea:return i*t/s.components*s.byteLength;case wa:return i*t/s.components*s.byteLength;case ai:return i*t*2/s.components*s.byteLength;case Ta:return i*t*2/s.components*s.byteLength;case kl:return i*t*3/s.components*s.byteLength;case Ln:return i*t*4/s.components*s.byteLength;case Aa:return i*t*4/s.components*s.byteLength;case Ks:case $s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:case La:return Math.max(i,16)*Math.max(t,8)/4;case Ra:case Pa:return Math.max(i,8)*Math.max(t,8)/2;case Da:case Ia:case Ua:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Na:case js:case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case $a:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qa:case ja:case to:return Math.ceil(i/4)*Math.ceil(t/4)*16;case eo:case no:return Math.ceil(i/4)*Math.ceil(t/4)*8;case tr:case io:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Of(i){switch(i){case je:case Fl:return{byteLength:1,components:1};case xs:case Ol:case xn:return{byteLength:2,components:1};case ya:case ba:return{byteLength:2,components:4};case Pn:case Sa:case gn:return{byteLength:4,components:1};case zl:case Bl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ei}})),typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ei);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qc(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zf(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],M=u[d];M.start<=p.start+p.count+1?p.count=Math.max(p.count,M.start+M.count-p.start):(++f,u[f]=M)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const M=u[d];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gf=`#ifdef USE_ALPHAHASH
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
#endif`,kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xf=`#ifdef USE_AOMAP
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
#endif`,Yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qf=`#ifdef USE_BATCHING
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
#endif`,Zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qf=`#ifdef USE_IRIDESCENCE
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
#endif`,jf=`#ifdef USE_BUMPMAP
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lp=`#define PI 3.141592653589793
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
} // validated`,cp=`vec3 transformedNormal = objectNormal;
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
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gp=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wp=`#ifdef USE_GRADIENTMAP
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
}`,Tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Up=`PhysicalMaterial material;
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
#endif`,Fp=`uniform sampler2D dfgLUT;
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
}`,Op=`
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zp=`#if defined( USE_POINTS_UV )
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
#endif`,Kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qp=`#if defined( USE_MORPHCOLORS )
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
#endif`,jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`#ifdef USE_MORPHTARGETS
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
#endif`,em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,om=`#ifdef USE_NORMALMAP
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
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ym=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bm=`float getShadowMask() {
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
}`,Em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vt={alphahash_fragment:Bf,alphahash_pars_fragment:Gf,alphamap_fragment:kf,alphamap_pars_fragment:Hf,alphatest_fragment:Vf,alphatest_pars_fragment:Wf,aomap_fragment:Xf,aomap_pars_fragment:Yf,batching_pars_vertex:qf,batching_vertex:Zf,begin_vertex:Kf,beginnormal_vertex:$f,bsdfs:Jf,iridescence_fragment:Qf,bumpmap_pars_fragment:jf,clipping_planes_fragment:tp,clipping_planes_pars_fragment:ep,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:sp,color_pars_fragment:rp,color_pars_vertex:ap,color_vertex:op,common:lp,defaultnormal_vertex:cp,displacementmap_pars_vertex:hp,displacementmap_vertex:up,emissivemap_fragment:dp,emissivemap_pars_fragment:fp,colorspace_fragment:pp,colorspace_pars_fragment:mp,envmap_fragment:gp,envmap_common_pars_fragment:xp,envmap_pars_fragment:_p,envmap_pars_vertex:vp,envmap_physical_pars_fragment:Pp,envmap_vertex:Mp,fog_vertex:Sp,fog_pars_vertex:yp,fog_fragment:bp,fog_pars_fragment:Ep,gradientmap_pars_fragment:wp,lightmap_pars_fragment:Tp,lights_lambert_fragment:Ap,lights_lambert_pars_fragment:Rp,lights_pars_begin:Cp,lights_toon_fragment:Lp,lights_toon_pars_fragment:Dp,lights_phong_fragment:Ip,lights_phong_pars_fragment:Np,lights_physical_fragment:Up,lights_physical_pars_fragment:Fp,lights_fragment_begin:Op,lights_fragment_maps:zp,lights_fragment_end:Bp,lightprobes_pars_fragment:Gp,logdepthbuf_fragment:kp,logdepthbuf_pars_fragment:Hp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:Wp,map_fragment:Xp,map_pars_fragment:Yp,map_particle_fragment:qp,map_particle_pars_fragment:Zp,metalnessmap_fragment:Kp,metalnessmap_pars_fragment:$p,morphinstance_vertex:Jp,morphcolor_vertex:Qp,morphnormal_vertex:jp,morphtarget_pars_vertex:tm,morphtarget_vertex:em,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:sm,normal_pars_vertex:rm,normal_vertex:am,normalmap_pars_fragment:om,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:cm,clearcoat_pars_fragment:hm,iridescence_pars_fragment:um,opaque_fragment:dm,packing:fm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:gm,dithering_pars_fragment:xm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:vm,shadowmap_pars_fragment:Mm,shadowmap_pars_vertex:Sm,shadowmap_vertex:ym,shadowmask_pars_fragment:bm,skinbase_vertex:Em,skinning_pars_vertex:wm,skinning_vertex:Tm,skinnormal_vertex:Am,specularmap_fragment:Rm,specularmap_pars_fragment:Cm,tonemapping_fragment:Pm,tonemapping_pars_fragment:Lm,transmission_fragment:Dm,transmission_pars_fragment:Im,uv_pars_fragment:Nm,uv_pars_vertex:Um,uv_vertex:Fm,worldpos_vertex:Om,background_vert:`varying vec2 vUv;
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
}`},St={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},On={basic:{uniforms:Ke([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ke([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ke([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ke([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ke([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ke([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ke([St.points,St.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ke([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ke([St.common,St.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ke([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ke([St.sprite,St.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:Ke([St.common,St.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:Ke([St.lights,St.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};On.physical={uniforms:Ke([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Fr={r:0,b:0,g:0},zm=new jt,jc=new zt;jc.set(-1,0,0,0,1,0,0,0,1);function Bm(i,t,e,n,s,r){const a=new Rt(0);let o=s===!0?0:1,l,c,h=null,u=0,f=null;function d(S){let _=S.isScene===!0?S.background:null;if(_&&_.isTexture){const v=S.backgroundBlurriness>0;_=t.get(_,v)}return _}function p(S){let _=!1;const v=d(S);v===null?m(a,o):v&&v.isColor&&(m(v,1),_=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,_){const v=d(_);v&&v.isCubeTexture?(c===void 0&&(c=new Yt(new Ti(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Ji(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zm.makeRotationFromEuler(_.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(jc),c.material.toneMapped=Kt.getTransfer(v.colorSpace)!==re,(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Yt(new Un(2,2),new nn({name:"BackgroundMaterial",uniforms:Ji(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(v.colorSpace)!==re,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,_){S.getRGB(Fr,Gc(i)),e.buffers.color.setClear(Fr.r,Fr.g,Fr.b,_,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,_=1){a.set(S),o=_,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:p,addToRenderList:M,dispose:g}}function Gm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(C,N,B,P,k){let D=!1;const L=u(C,P,B,N);r!==L&&(r=L,c(r.object)),D=d(C,P,B,k),D&&p(C,P,B,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,v(C,N,B,P),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,N,B,P){const k=P.wireframe===!0;let D=n[N.id];D===void 0&&(D={},n[N.id]=D);const L=C.isInstancedMesh===!0?C.id:0;let Z=D[L];Z===void 0&&(Z={},D[L]=Z);let Y=Z[B.id];Y===void 0&&(Y={},Z[B.id]=Y);let U=Y[k];return U===void 0&&(U=f(l()),Y[k]=U),U}function f(C){const N=[],B=[],P=[];for(let k=0;k<e;k++)N[k]=0,B[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:P,object:C,attributes:{},index:null}}function d(C,N,B,P){const k=r.attributes,D=N.attributes;let L=0;const Z=B.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const O=k[Y];let z=D[Y];if(z===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(z=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(z=C.instanceColor)),O===void 0||O.attribute!==z||z&&O.data!==z.data)return!0;L++}return r.attributesNum!==L||r.index!==P}function p(C,N,B,P){const k={},D=N.attributes;let L=0;const Z=B.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let O=D[Y];O===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(O=C.instanceColor));const z={};z.attribute=O,O&&O.data&&(z.data=O.data),k[Y]=z,L++}r.attributes=k,r.attributesNum=L,r.index=P}function M(){const C=r.newAttributes;for(let N=0,B=C.length;N<B;N++)C[N]=0}function m(C){g(C,0)}function g(C,N){const B=r.newAttributes,P=r.enabledAttributes,k=r.attributeDivisors;B[C]=1,P[C]===0&&(i.enableVertexAttribArray(C),P[C]=1),k[C]!==N&&(i.vertexAttribDivisor(C,N),k[C]=N)}function S(){const C=r.newAttributes,N=r.enabledAttributes;for(let B=0,P=N.length;B<P;B++)N[B]!==C[B]&&(i.disableVertexAttribArray(B),N[B]=0)}function _(C,N,B,P,k,D,L){L===!0?i.vertexAttribIPointer(C,N,B,k,D):i.vertexAttribPointer(C,N,B,P,k,D)}function v(C,N,B,P){M();const k=P.attributes,D=B.getAttributes(),L=N.defaultAttributeValues;for(const Z in D){const Y=D[Z];if(Y.location>=0){let U=k[Z];if(U===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),U!==void 0){const O=U.normalized,z=U.itemSize,X=t.get(U);if(X===void 0)continue;const F=X.buffer,K=X.type,et=X.bytesPerElement,lt=K===i.INT||K===i.UNSIGNED_INT||U.gpuType===Sa;if(U.isInterleavedBufferAttribute){const nt=U.data,pt=nt.isInterleavedBuffer===!0?nt.stride:nt.itemSize,Bt=U.offset;if(nt.isInstancedInterleavedBuffer||nt.isInstancedBufferAttribute){for(let bt=0;bt<Y.locationSize;bt++)g(Y.location+bt,nt.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let bt=0;bt<Y.locationSize;bt++)m(Y.location+bt);i.bindBuffer(i.ARRAY_BUFFER,F);for(let bt=0;bt<Y.locationSize;bt++)_(Y.location+bt,z/Y.locationSize,K,O,pt*et,(Bt+z/Y.locationSize*bt)*et,lt)}else{if(U.isInstancedBufferAttribute){for(let nt=0;nt<Y.locationSize;nt++)g(Y.location+nt,U.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let nt=0;nt<Y.locationSize;nt++)m(Y.location+nt);i.bindBuffer(i.ARRAY_BUFFER,F);for(let nt=0;nt<Y.locationSize;nt++)_(Y.location+nt,z/Y.locationSize,K,O,z*et,z/Y.locationSize*nt*et,lt)}}else if(L!==void 0){const O=L[Z];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(Y.location,O);break;case 3:i.vertexAttrib3fv(Y.location,O);break;case 4:i.vertexAttrib4fv(Y.location,O);break;default:i.vertexAttrib1fv(Y.location,O)}}}}S()}function E(){T();for(const C in n){const N=n[C];for(const B in N){const P=N[B];for(const k in P){const D=P[k];for(const L in D)h(D[L].object),delete D[L];delete P[k]}}delete n[C]}}function b(C){if(n[C.id]===void 0)return;const N=n[C.id];for(const B in N){const P=N[B];for(const k in P){const D=P[k];for(const L in D)h(D[L].object),delete D[L];delete P[k]}}delete n[C.id]}function x(C){for(const N in n){const B=n[N];for(const P in B){const k=B[P];if(k[C.id]===void 0)continue;const D=k[C.id];for(const L in D)h(D[L].object),delete D[L];delete k[C.id]}}}function y(C){for(const N in n){const B=n[N],P=C.isInstancedMesh===!0?C.id:0,k=B[P];if(k!==void 0){for(const D in k){const L=k[D];for(const Z in L)h(L[Z].object),delete L[Z];delete k[D]}delete B[P],Object.keys(B).length===0&&delete n[N]}}}function T(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function km(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Hm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Ln&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const y=x===xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==je&&x!==gn&&!y&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ut("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Ut("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:M,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:v,maxSamples:E,samples:b}}function Vm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new In,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,_=S*4;let v=g.clippingState||null;l.value=v,v=h(p,f,_,d);for(let E=0;E!==_;++E)v[E]=e[E];g.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){const M=u!==null?u.length:0;let m=null;if(M!==0){if(m=l.value,p!==!0||m===null){const g=d+M*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let _=0,v=d;_!==M;++_,v+=4)a.copy(u[_]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}class Yo extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ti(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Di});r.uniforms.tEquirect.value=e;const a=new Yt(s,r),o=e.minFilter;return e.minFilter===Cn&&(e.minFilter=qe),new Wo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const th=256,Wm=3,Xm=20,eh=256,nh=16,Ym=3,qm=new W,Zm=new Rt;class Or{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Wo(1,10,null),this._boxMesh=new Yt(new Ti(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=qm}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(Zm));const m=new Wo(n,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(th,$l(t))}_fromTexture(t,e){t.mapping===Ni||t.mapping===gs?this._setSize(t.image.length===0?th:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=ih(t,!1,!1),n=Math.log2(t)-Wm;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ih(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ni||t.mapping===gs?(this._cubemapMaterial===null&&(this._cubemapMaterial=rh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=sh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Km(),this._integrationMaterial=$m());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/nh);for(let a=0;a<=n;a++){const o=Or.lodToRoughness(a,n);if(a>n-Ym)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(eh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Jm());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function ih(i,t,e){return new Yo(i,{minFilter:Cn,generateMipmaps:t,type:xn,colorSpace:nr,depthBuffer:e})}function Us(i,t,e){return new nn({name:i,uniforms:t,vertexShader:Vt.cube_vert,fragmentShader:e,side:Ye,blending:Di,depthTest:!1,depthWrite:!1})}function Km(){return Us("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${eh}u

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
	`)}function $m(){return Us("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:nh}},`

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
	`)}function Jm(){return Us("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Xm}
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
	`)}function sh(){return Us("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function rh(){return Us("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Qm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===xa||d===_a)if(t.has(f)){const p=t.get(f).texture;return o(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const M=new Yo(p.height);return M.fromEquirectangularTexture(i,f),t.set(f,M),f.addEventListener("dispose",c),o(M.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const d=f.mapping,p=d===xa||d===_a,M=d===Ni||d===gs;if(p||M){let m=e.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Or(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const S=f.image;return p&&S&&S.height>0||M&&S&&l(S)?(n===null&&(n=new Or(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,d){return d===xa?f.mapping=Ni:d===_a&&(f.mapping=gs),f}function l(f){let d=0;const p=6;for(let M=0;M<p;M++)f[M]!==void 0&&d++;return d===p}function c(f){const d=f.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function jm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&rr("WebGLRenderer: "+n+" extension not supported."),s}}}function t0(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);const M=r.get(p);M&&(t.remove(M),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),e.memory.geometries++),M}function h(p){const M=p.attributes;for(const m in M)t.update(M[m],i.ARRAY_BUFFER)}function u(p){const M=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const S=M!==null?M.array.length:m.array.length/3-1,_=m.count>=65535?mc:pc,v=new _(Math.ceil(S/3)*6,1),E=v.array;if(M!==null){const x=M.array;g=M.version;for(let y=0,T=0;y<S;y+=3){const R=x[y+0],C=x[y+1],N=x[y+2];E[T++]=R,E[T++]=C,E[T++]=C,E[T++]=N,E[T++]=N,E[T++]=R}}else{g=m.version;for(let x=0,y=0;x<S;x+=3){const T=x+0,R=x+1,C=x+2;E[y++]=T,E[y++]=R,E[y++]=R,E[y++]=C,E[y++]=C,E[y++]=T}}v.version=g;const b=r.get(p);b&&t.remove(b),r.set(p,v)}function f(p){const M=r.get(p);if(M){const m=p.index;m!==null&&M.version<m.version&&u(p)}else u(p);return r.get(p)}function d(){for(const p in s){const M=s[p].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function e0(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*a,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let M=0;for(let m=0;m<d;m++)M+=f[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function n0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ee("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function i0(i,t,e){const n=new WeakMap,s=new de;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let T=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let _=0;d===!0&&(_=1),p===!0&&(_=2),M===!0&&(_=3);let v=o.attributes.position.count*_,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const b=new Float32Array(v*E*4*u),x=new nc(b,v,E,u);x.type=gn,x.needsUpdate=!0;const y=_*4;for(let R=0;R<u;R++){const C=m[R],N=g[R],B=S[R],P=v*E*4*R;for(let k=0;k<C.count;k++){const D=k*y;d===!0&&(s.fromBufferAttribute(C,k),b[P+D+0]=s.x,b[P+D+1]=s.y,b[P+D+2]=s.z,b[P+D+3]=0),p===!0&&(s.fromBufferAttribute(N,k),b[P+D+4]=s.x,b[P+D+5]=s.y,b[P+D+6]=s.z,b[P+D+7]=0),M===!0&&(s.fromBufferAttribute(B,k),b[P+D+8]=s.x,b[P+D+9]=s.y,b[P+D+10]=s.z,b[P+D+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:x,size:new Lt(v,E)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];const p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function s0(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const r0={[Cl]:"LINEAR_TONE_MAPPING",[Pl]:"REINHARD_TONE_MAPPING",[Ll]:"CINEON_TONE_MAPPING",[Dl]:"ACES_FILMIC_TONE_MAPPING",[Nl]:"AGX_TONE_MAPPING",[ga]:"NEUTRAL_TONE_MAPPING",[Il]:"CUSTOM_TONE_MAPPING"};function a0(i,t,e,n,s,r){const a=new Dn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Re;h.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new fe([0,2,0,0,2,0],2));const u=new bf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Yt(h,u),d=new qc(-1,1,1,-1,0,1);let p=null,M=null,m=!1,g,S=null,_=[],v=!1;this.setSize=function(E,b){a.setSize(E,b),o!==null&&o.setSize(E,b),l!==null&&l.setSize(E,b);for(let x=0;x<_.length;x++){const y=_[x];y.setSize&&y.setSize(E,b)}},this.setEffects=function(E){_=E,v=_.length>0&&_[0].isRenderPass===!0;const b=a.width,x=a.height;_.length>0&&o===null&&(o=new Dn(b,x,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new Dn(b,x,{type:xn,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&_.some(T=>T.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new Ki(b,x),r===!0&&(c.format=ri,c.type=Ui)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let T=0;T<_.length;T++){const R=_[T];R.setSize&&R.setSize(b,x),y&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(E,b){if(m||E.toneMapping===Hn&&_.length===0)return!1;if(S=b,b!==null){const x=b.width,y=b.height;(a.width!==x||a.height!==y)&&this.setSize(x,y)}return v===!1&&E.setRenderTarget(a),g=E.toneMapping,E.toneMapping=Hn,!0},this.hasRenderPass=function(){return v},this.end=function(E,b){E.toneMapping=g,m=!0;let x=a,y=o;for(let T=0;T<_.length;T++){const R=_[T];R.enabled!==!1&&(R.render(E,y,x,b),R.needsSwap!==!1&&(x=y,y=y===o?l:o))}if(p!==E.outputColorSpace||M!==E.toneMapping){p=E.outputColorSpace,M=E.toneMapping,u.defines={},Kt.getTransfer(p)===re&&(u.defines.SRGB_TRANSFER="");const T=r0[M];T&&(u.defines[T]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(S),E.render(f,d),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const ah=new ve,oh=new Ki(1,1),lh=new Pc(1),ch=new nc,hh=new Dd,uh=new Cc,dh=[],fh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function es(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=dh[s];if(r===void 0&&(r=new Float32Array(s),dh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zr(i,t){let e=fh[t];e===void 0&&(e=new Int32Array(t),fh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function o0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function u0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;gh.set(n),i.uniformMatrix2fv(this.addr,!1,gh),Pe(e,n)}}function d0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;mh.set(n),i.uniformMatrix3fv(this.addr,!1,mh),Pe(e,n)}}function f0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;ph.set(n),i.uniformMatrix4fv(this.addr,!1,ph),Pe(e,n)}}function p0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function x0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function _0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function v0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function M0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function S0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function Br(i){return i.version===0&&(i.compareFunction=Wl,i.needsUpdate=!0),i}function y0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Br(oh):r=ah,e.setTexture2D(t||r,s)}function b0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hh,s)}function E0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Br(lh):r=uh,e.setTextureCube(t||r,s)}function w0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ch,s)}function T0(i){switch(i){case 5126:return o0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return u0;case 35675:return d0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return x0;case 5125:return _0;case 36294:return v0;case 36295:return M0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return w0}}function A0(i,t){i.uniform1fv(this.addr,t)}function R0(i,t){const e=es(t,this.size,2);i.uniform2fv(this.addr,e)}function C0(i,t){const e=es(t,this.size,3);i.uniform3fv(this.addr,e)}function P0(i,t){const e=es(t,this.size,4);i.uniform4fv(this.addr,e)}function L0(i,t){const e=es(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function D0(i,t){const e=es(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function I0(i,t){const e=es(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function N0(i,t){i.uniform1iv(this.addr,t)}function U0(i,t){i.uniform2iv(this.addr,t)}function F0(i,t){i.uniform3iv(this.addr,t)}function O0(i,t){i.uniform4iv(this.addr,t)}function z0(i,t){i.uniform1uiv(this.addr,t)}function B0(i,t){i.uniform2uiv(this.addr,t)}function G0(i,t){i.uniform3uiv(this.addr,t)}function k0(i,t){i.uniform4uiv(this.addr,t)}function H0(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Br(oh):a=ah;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function V0(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hh,r[a])}function W0(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Br(lh):a=uh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function X0(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ch,r[a])}function Y0(i){switch(i){case 5126:return A0;case 35664:return R0;case 35665:return C0;case 35666:return P0;case 35674:return L0;case 35675:return D0;case 35676:return I0;case 5124:case 35670:return N0;case 35667:case 35671:return U0;case 35668:case 35672:return F0;case 35669:case 35673:return O0;case 5125:return z0;case 36294:return B0;case 36295:return G0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}class q0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=T0(e.type)}}class Z0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Y0(e.type)}}class K0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const qo=/(\w+)(\])?(\[|\.)?/g;function xh(i,t){i.seq.push(t),i.map[t.id]=t}function $0(i,t,e){const n=i.name,s=n.length;for(qo.lastIndex=0;;){const r=qo.exec(n),a=qo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){xh(e,c===void 0?new q0(o,i,t):new Z0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new K0(o),xh(e,u)),e=u}}}class Gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);$0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function _h(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const J0=37297;let Q0=0;function j0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const vh=new zt;function tg(i){Kt._getMatrix(vh,Kt.workingColorSpace,i);const t=`mat3( ${vh.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case ir:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Mh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+j0(i.getShaderSource(t),o)}else return r}function eg(i,t){const e=tg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const ng={[Cl]:"Linear",[Pl]:"Reinhard",[Ll]:"Cineon",[Dl]:"ACESFilmic",[Nl]:"AgX",[ga]:"Neutral",[Il]:"Custom"};function ig(i,t){const e=ng[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const kr=new W;function sg(){Kt.getLuminanceCoefficients(kr);const i=kr.x.toFixed(4),t=kr.y.toFixed(4),e=kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function ag(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function og(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Fs(i){return i!==""}function Sh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function yh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zo(i){return i.replace(lg,cg)}function cg(i,t){const e=Vt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Zo(e)}const hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(i){return i.replace(hg,ug)}function ug(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const dg={[ds]:"SHADOWMAP_TYPE_PCF",[fs]:"SHADOWMAP_TYPE_VSM"};function fg(i){return dg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pg={[gs]:"ENVMAP_MODE_REFRACTION"};function mg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":pg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gg={[ma]:"ENVMAP_BLENDING_MULTIPLY",[$u]:"ENVMAP_BLENDING_MIX",[Ju]:"ENVMAP_BLENDING_ADD"};function xg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":gg[i.combine]||"ENVMAP_BLENDING_NONE"}function _g(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=fg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=mg(e),u=xg(e),f=rg(e),d=ag(r),p=s.createProgram();let M,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Fs).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Fs).join(`
`),m.length>0&&(m+=`
`)):(M=[Eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),m=[Eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Hn?ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,eg("linearToOutputTexel",e.outputColorSpace),sg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),a=Zo(a),a=Sh(a,e),a=yh(a,e),o=Zo(o),o=Sh(o,e),o=yh(o,e),a=bh(a),o=bh(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,M=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",e.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=g+M+a,_=g+m+o,v=_h(s,s.VERTEX_SHADER,S),E=_h(s,s.FRAGMENT_SHADER,_);s.attachShader(p,v),s.attachShader(p,E),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function b(R){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(p)||"",N=s.getShaderInfoLog(v)||"",B=s.getShaderInfoLog(E)||"",P=C.trim(),k=N.trim(),D=B.trim();let L=!0,Z=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(L=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,v,E);else{const Y=Mh(s,v,"vertex"),U=Mh(s,E,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+Y+`
`+U)}else P!==""?Ut("WebGLProgram: Program Info Log:",P):(k===""||D==="")&&(Z=!1);Z&&(R.diagnostics={runnable:L,programLog:P,vertexShader:{log:k,prefix:M},fragmentShader:{log:D,prefix:m}})}s.deleteShader(v),s.deleteShader(E),x=new Gr(s,p),y=og(s,p)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(p,J0)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Q0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=E,this}let vg=0;class Mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sg(t),e.set(t,n)),n}}class Sg{constructor(t){this.id=vg++,this.code=t,this.usedTimes=0}}function yg(i){return i===ai||i===js||i===tr}function bg(i,t,e,n,s,r){const a=new uo,o=new Mg,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,y,T,R,C,N){const B=R.fog,P=C.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,D=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,L=t.get(x.envMap||k,D),Z=f[x.type];let Y=n.precision;x.precision!==null&&(Y=n.getMaxPrecision(x.precision),Y!==x.precision&&Ut("WebGLProgram.getParameters:",x.precision,"not supported, using",Y,"instead."));const U=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,O=U!==void 0?U.length:0;let z=0;P.morphAttributes.position!==void 0&&(z=1),P.morphAttributes.normal!==void 0&&(z=2),P.morphAttributes.color!==void 0&&(z=3);let X,F,K,et;if(Z){const yt=On[Z];X=yt.vertexShader,F=yt.fragmentShader}else{X=x.vertexShader,F=x.fragmentShader;const yt=o.getVertexShaderStage(x),le=o.getFragmentShaderStage(x);o.update(x,yt,le),K=yt.id,et=le.id}const lt=i.getRenderTarget(),nt=i.state.buffers.depth.getReversed(),pt=C.isInstancedMesh===!0,Bt=C.isBatchedMesh===!0,bt=!!x.map,Ot=!!x.matcap,Ft=!!L,It=Ft&&L.isPMREMTexture===!0,Qt=!!x.aoMap,ae=!!x.lightMap,be=!!x.bumpMap&&x.wireframe===!1,oe=!!x.normalMap,Me=!!x.displacementMap,se=!!x.emissiveMap,un=!!x.metalnessMap,dn=!!x.roughnessMap,fn=x.anisotropy>0,q=x.clearcoat>0,pn=x.diffuseRoughness>0,pe=x.dispersion>0,me=x.retroreflectivity>0,Mt=x.iridescence>0,De=x.sheen>0,Nt=x.transmission>0,Gt=fn&&!!x.anisotropyMap,I=q&&!!x.clearcoatMap,w=q&&!!x.clearcoatNormalMap,J=q&&!!x.clearcoatRoughnessMap,ct=pn&&!!x.diffuseRoughnessMap,ot=Mt&&!!x.iridescenceMap,dt=Mt&&!!x.iridescenceThicknessMap,_t=De&&!!x.sheenColorMap,st=De&&!!x.sheenRoughnessMap,rt=!!x.specularMap,mt=!!x.specularColorMap,G=!!x.specularIntensityMap,at=Nt&&!!x.transmissionMap,it=Nt&&!!x.thicknessMap,gt=!!x.gradientMap,ut=!!x.alphaMap,ft=x.alphaTest>0,Pt=!!x.alphaHash,Wt=!!x.extensions;let ht=Hn;x.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ht=i.toneMapping);const Dt=It?L.isCompressedCubeTexture?L.image[0].mipmaps:L.mipmaps:null,Ht={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:F,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:et,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Y,batching:Bt,batchingColor:Bt&&C._colorsTexture!==null,instancing:pt,instancingColor:pt&&C.instanceColor!==null,instancingMorph:pt&&C.morphTexture!==null,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:bt,matcap:Ot,envMap:Ft,envMapMode:Ft&&L.mapping,envMapPMREM:It,envMapMaxLod:It?Dt.length-1:null,envMapSize:It?Dt[0].width:null,aoMap:Qt,lightMap:ae,bumpMap:be,normalMap:oe,displacementMap:Me,emissiveMap:se,normalMapObjectSpace:oe&&x.normalMapType===td,normalMapTangentSpace:oe&&x.normalMapType===er,packedNormalMap:oe&&x.normalMapType===er&&yg(x.normalMap.format),metalnessMap:un,roughnessMap:dn,anisotropy:fn,anisotropyMap:Gt,clearcoat:q,clearcoatMap:I,clearcoatNormalMap:w,clearcoatRoughnessMap:J,diffuseRoughness:pn,diffuseRoughnessMap:ct,dispersion:pe,retroreflection:me,iridescence:Mt,iridescenceMap:ot,iridescenceThicknessMap:dt,sheen:De,sheenColorMap:_t,sheenRoughnessMap:st,specularMap:rt,specularColorMap:mt,specularIntensityMap:G,transmission:Nt,transmissionMap:at,thicknessMap:it,gradientMap:gt,opaque:x.transparent===!1&&x.blending===ps&&x.alphaToCoverage===!1,alphaMap:ut,alphaTest:ft,alphaHash:Pt,combine:x.combine,mapUv:bt&&d(x.map.channel),aoMapUv:Qt&&d(x.aoMap.channel),lightMapUv:ae&&d(x.lightMap.channel),bumpMapUv:be&&d(x.bumpMap.channel),normalMapUv:oe&&d(x.normalMap.channel),displacementMapUv:Me&&d(x.displacementMap.channel),emissiveMapUv:se&&d(x.emissiveMap.channel),metalnessMapUv:un&&d(x.metalnessMap.channel),roughnessMapUv:dn&&d(x.roughnessMap.channel),anisotropyMapUv:Gt&&d(x.anisotropyMap.channel),clearcoatMapUv:I&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ct&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:ot&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:st&&d(x.sheenRoughnessMap.channel),specularMapUv:rt&&d(x.specularMap.channel),specularColorMapUv:mt&&d(x.specularColorMap.channel),specularIntensityMapUv:G&&d(x.specularIntensityMap.channel),transmissionMapUv:at&&d(x.transmissionMap.channel),thicknessMapUv:it&&d(x.thicknessMap.channel),alphaMapUv:ut&&d(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(oe||fn),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!P.attributes.uv&&(bt||ut),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&oe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:nt,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:z,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:N.filter(yt=>yt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:bt&&x.map.isVideoTexture===!0&&Kt.getTransfer(x.map.colorSpace)===re,decodeVideoTextureEmissive:se&&x.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(x.emissiveMap.colorSpace)===re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ie,flipSided:x.side===Ye,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Wt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&x.extensions.multiDraw===!0||Bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function M(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const T in x.defines)y.push(T),y.push(x.defines[T]);return x.isRawShaderMaterial===!1&&(m(y,x),g(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function m(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapPMREM),x.push(y.envMapMaxLod),x.push(y.envMapSize),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.diffuseRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.numLightProbeGrids),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function g(x,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function S(x){const y=f[x.type];let T;if(y){const R=On[y];T=Mf.clone(R.uniforms)}else T=x.uniforms;return T}function _(x,y){let T=h.get(y);return T!==void 0?++T.usedTimes:(T=new _g(i,y,x,s),c.push(T),h.set(y,T)),T}function v(x){if(--x.usedTimes===0){const y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function b(){o.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:S,acquireProgram:_,releaseProgram:v,releaseShaderCache:E,programs:c,dispose:b}}function Eg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function wg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function wh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Th(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,p,M,m,g){let S=i[t];return S===void 0?(S={id:f.id,object:f,geometry:d,material:p,materialVariant:a(f),groupOrder:M,renderOrder:f.renderOrder,z:m,group:g},i[t]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=p,S.materialVariant=a(f),S.groupOrder=M,S.renderOrder=f.renderOrder,S.z=m,S.group=g),t++,S}function l(f,d,p,M,m,g,S){S.reversedDepth===!0&&(m=-m);const _=o(f,d,p,M,m,g);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):e.push(_)}function c(f,d,p,M,m,g){const S=o(f,d,p,M,m,g);p.transmission>0?n.unshift(S):p.transparent===!0?s.unshift(S):e.unshift(S)}function h(f,d){e.length>1&&e.sort(f||wg),n.length>1&&n.sort(d||wh),s.length>1&&s.sort(d||wh)}function u(){for(let f=t,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Tg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Th,i.set(n,[a])):s>=r.length?(a=new Th,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ag(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new Rt};break;case"SpotLight":e={position:new W,direction:new W,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function Rg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Cg=0;function Pg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Lg(i){const t=new Ag,e=Rg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const s=new W,r=new jt,a=new jt;function o(c){let h=0,u=0,f=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let d=0,p=0,M=0,m=0,g=0,S=0,_=0,v=0,E=0,b=0,x=0,y=0,T=0,R=0;c.sort(Pg);for(let N=0,B=c.length;N<B;N++){const P=c[N],k=P.color,D=P.intensity,L=P.distance;let Z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ai?Z=P.shadow.map.texture:Z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=k.r*D,u+=k.g*D,f+=k.b*D;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],D);R++}else if(P.isSunLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const U=P.shadow,O=e.get(P);O.shadowIntensity=U.intensity,O.shadowBias=U.bias,O.shadowNormalBias=U.normalBias,O.shadowRadius=U.radius,O.shadowMapSize.copy(U.mapSize).multiply(U.getFrameExtents()),n.sunShadow[p]=O,n.sunShadowMap[p]=Z;const z=U.getViewportCount();for(let X=0;X<z;X++)n.sunShadowMatrix[M+X]=U.getMatrix(X),n.sunShadowCascade[M+X]=U._cascadeData[X];M+=z,p++}n.sun[d]=Y,d++}else if(P.isDirectionalLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const U=P.shadow,O=e.get(P);O.shadowIntensity=U.intensity,O.shadowBias=U.bias,O.shadowNormalBias=U.normalBias,O.shadowRadius=U.radius,O.shadowMapSize=U.mapSize,n.directionalShadow[m]=O,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=P.shadow.matrix,E++}n.directional[m]=Y,m++}else if(P.isSpotLight){const Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(k).multiplyScalar(D),Y.distance=L,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[S]=Y;const U=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,U.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[S]=U.matrix,P.castShadow){const O=e.get(P);O.shadowIntensity=U.intensity,O.shadowBias=U.bias,O.shadowNormalBias=U.normalBias,O.shadowRadius=U.radius,O.shadowMapSize=U.mapSize,n.spotShadow[S]=O,n.spotShadowMap[S]=Z,x++}S++}else if(P.isRectAreaLight){const Y=t.get(P);Y.color.copy(k).multiplyScalar(D),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[_]=Y,_++}else if(P.isPointLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const U=P.shadow,O=e.get(P);O.shadowIntensity=U.intensity,O.shadowBias=U.bias,O.shadowNormalBias=U.normalBias,O.shadowRadius=U.radius,O.shadowMapSize=U.mapSize,O.shadowCameraNear=U.camera.near,O.shadowCameraFar=U.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=Y,g++}else if(P.isHemisphereLight){const Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(D),Y.groundColor.copy(P.groundColor).multiplyScalar(D),n.hemi[v]=Y,v++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.sunLength!==d||C.directionalLength!==m||C.pointLength!==g||C.spotLength!==S||C.rectAreaLength!==_||C.hemiLength!==v||C.numSunShadows!==p||C.numDirectionalShadows!==E||C.numPointShadows!==b||C.numSpotShadows!==x||C.numSpotMaps!==y||C.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=_,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,C.sunLength=d,C.directionalLength=m,C.pointLength=g,C.spotLength=S,C.rectAreaLength=_,C.hemiLength=v,C.numSunShadows=p,C.numDirectionalShadows=E,C.numPointShadows=b,C.numSpotShadows=x,C.numSpotMaps=y,C.numLightProbes=R,n.version=Cg++)}function l(c,h){let u=0,f=0,d=0,p=0,M=0,m=0;const g=h.matrixWorldInverse;for(let S=0,_=c.length;S<_;S++){const v=c[S];if(v.isSunLight){const E=n.sun[u];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(g),u++}else if(v.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),f++}else if(v.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const E=n.rectArea[M];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(v.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function Ah(i){const t=new Lg(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){n.push(u)}function l(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Dg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ah(i),t.set(s,[o])):r>=a.length?(o=new Ah(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Ig=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ng=`uniform sampler2D shadow_pass;
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
}`,Ug=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],Fg=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Rh=new jt,Os=new W,Ko=new W;function Og(i,t,e){let n=new Cs;const s=new Lt,r=new Lt,a=new de,o=new Ef,l=new wf,c={},h=e.maxTextureSize,u={[ii]:Ye,[Ye]:ii,[Ie]:Ie},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Ig,fragmentShader:Ng}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Re;p.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Yt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ds;let g=this.type;this.render=function(b,x,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Lu&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ds);const T=i.getRenderTarget(),R=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Di),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=g!==this.type;B&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(k=>k.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,k=b.length;P<k;P++){const D=b[P],L=D.shadow;if(L===void 0){Ut("WebGLShadowMap:",D,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const Z=L.getFrameExtents();s.multiply(Z),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,L.mapSize.y=r.y));const Y=i.state.buffers.depth.getReversed();if(L.camera._reversedDepth=Y,L.map===null||B===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===fs){if(D.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new Dn(s.x,s.y,{format:ai,type:xn,minFilter:qe,magFilter:qe,generateMipmaps:!1}),L.map.texture.name=D.name+".shadowMap",L.map.depthTexture=new Ki(s.x,s.y,gn),L.map.depthTexture.name=D.name+".shadowMapDepth",L.map.depthTexture.format=si,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=we,L.map.depthTexture.magFilter=we}else D.isPointLight?(L.map=new Yo(s.x),L.map.depthTexture=new Pc(s.x,Pn)):(L.map=new Dn(s.x,s.y),L.map.depthTexture=new Ki(s.x,s.y,Pn)),L.map.depthTexture.name=D.name+".shadowMap",L.map.depthTexture.format=si,this.type===ds?(L.map.depthTexture.compareFunction=Y?Vl:Hl,L.map.depthTexture.minFilter=qe,L.map.depthTexture.magFilter=qe):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=we,L.map.depthTexture.magFilter=we);L.camera.updateProjectionMatrix()}L.map.isWebGLCubeRenderTarget!==!0&&(L.map.width!==s.x||L.map.height!==s.y)&&L.map.setSize(s.x,s.y);const U=L.map.isWebGLCubeRenderTarget?6:L.getViewportCount();D.isPointLight!==!0&&L.updateMatrices(D,y);const O=L.camera.layers.mask&4294967294?L.camera.layers:y.layers;for(let z=0;z<U;z++){const X=L.getCamera(z);if(D.isPointLight){const F=L.camera,K=L.matrix,et=D.distance||F.far;et!==F.far&&(F.far=et,F.updateProjectionMatrix()),Os.setFromMatrixPosition(D.matrixWorld),F.position.copy(Os),Ko.copy(F.position),Ko.add(Ug[z]),F.up.copy(Fg[z]),F.lookAt(Ko),F.updateMatrixWorld(),K.makeTranslation(-Os.x,-Os.y,-Os.z),Rh.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),L._frustum.setFromProjectionMatrix(Rh,F.coordinateSystem,F.reversedDepth)}if(L.map.isWebGLCubeRenderTarget)i.setRenderTarget(L.map,z),i.clear();else{z===0&&(i.setRenderTarget(L.map),i.clear());const F=L.getViewport(z);a.set(r.x*F.x,r.y*F.y,r.x*F.z,r.y*F.w),N.viewport(a)}n=L.getFrustum(z),v(x,y,X,D,O,this.type)}L.isPointLightShadow!==!0&&this.type===fs&&S(L,y),L.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,C)};function S(b,x){const y=t.update(M);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Dn(s.x,s.y,{format:ai,type:xn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(x,null,y,f,M,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(x,null,y,d,M,null)}function _(b,x,y,T){let R=null;const C=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)R=C;else if(R=y.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const N=R.uuid,B=x.uuid;let P=c[N];P===void 0&&(P={},c[N]=P);let k=P[B];k===void 0&&(k=R.clone(),P[B]=k,x.addEventListener("dispose",E)),R=k}if(R.visible=x.visible,R.wireframe=x.wireframe,T===fs?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:u[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const N=i.properties.get(R);N.light=y}return R}function v(b,x,y,T,R,C){if(b.visible===!1)return;if(b.layers.test(R)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===fs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const P=t.update(b),k=b.material;if(Array.isArray(k)){const D=P.groups;for(let L=0,Z=D.length;L<Z;L++){const Y=D[L],U=k[Y.materialIndex];if(U&&U.visible){const O=_(b,U,T,C);b.onBeforeShadow(i,b,x,y,P,O,Y),i.renderBufferDirect(y,null,P,O,b,Y),b.onAfterShadow(i,b,x,y,P,O,Y)}}}else if(k.visible){const D=_(b,k,T,C);b.onBeforeShadow(i,b,x,y,P,D,null),i.renderBufferDirect(y,null,P,D,b,null),b.onAfterShadow(i,b,x,y,P,D,null)}}const B=b.children;for(let P=0,k=B.length;P<k;P++)v(B[P],x,y,T,R,C)}function E(b){b.target.removeEventListener("dispose",E);for(const y in c){const T=c[y],R=b.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function zg(i,t){function e(){let G=!1;const at=new de;let it=null;const gt=new de(0,0,0,0);return{setMask:function(ut){it!==ut&&!G&&(i.colorMask(ut,ut,ut,ut),it=ut)},setLocked:function(ut){G=ut},setClear:function(ut,ft,Pt,Wt,ht){ht===!0&&(ut*=Wt,ft*=Wt,Pt*=Wt),at.set(ut,ft,Pt,Wt),gt.equals(at)===!1&&(i.clearColor(ut,ft,Pt,Wt),gt.copy(at))},reset:function(){G=!1,it=null,gt.set(-1,0,0,0)}}}function n(){let G=!1,at=!1,it=null,gt=null,ut=null;return{setReversed:function(ft){if(at!==ft){const Pt=t.get("EXT_clip_control");ft?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),at=ft;const Wt=ut;ut=null,this.setClear(Wt)}},getReversed:function(){return at},setTest:function(ft){ft?nt(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(ft){it!==ft&&!G&&(i.depthMask(ft),it=ft)},setFunc:function(ft){if(at&&(ft=ud[ft]),gt!==ft){switch(ft){case la:i.depthFunc(i.NEVER);break;case ca:i.depthFunc(i.ALWAYS);break;case ha:i.depthFunc(i.LESS);break;case ms:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case da:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=ft}},setLocked:function(ft){G=ft},setClear:function(ft){ut!==ft&&(ut=ft,at&&(ft=1-ft),i.clearDepth(ft))},reset:function(){G=!1,it=null,gt=null,ut=null,at=!1}}}function s(){let G=!1,at=null,it=null,gt=null,ut=null,ft=null,Pt=null,Wt=null,ht=null;return{setTest:function(Dt){G||(Dt?nt(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(Dt){at!==Dt&&!G&&(i.stencilMask(Dt),at=Dt)},setFunc:function(Dt,Ht,yt){(it!==Dt||gt!==Ht||ut!==yt)&&(i.stencilFunc(Dt,Ht,yt),it=Dt,gt=Ht,ut=yt)},setOp:function(Dt,Ht,yt){(ft!==Dt||Pt!==Ht||Wt!==yt)&&(i.stencilOp(Dt,Ht,yt),ft=Dt,Pt=Ht,Wt=yt)},setLocked:function(Dt){G=Dt},setClear:function(Dt){ht!==Dt&&(i.clearStencil(Dt),ht=Dt)},reset:function(){G=!1,at=null,it=null,gt=null,ut=null,ft=null,Pt=null,Wt=null,ht=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let h={},u={},f={},d=new WeakMap,p=[],M=null,m=!1,g=null,S=null,_=null,v=null,E=null,b=null,x=null,y=new Rt(0,0,0),T=0,R=!1,C=null,N=null,B=null,P=null,k=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,Z=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),L=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),L=Z>=2);let U=null,O={};const z=i.getParameter(i.SCISSOR_BOX),X=i.getParameter(i.VIEWPORT),F=new de().fromArray(z),K=new de().fromArray(X);function et(G,at,it,gt){const ut=new Uint8Array(4),ft=i.createTexture();i.bindTexture(G,ft),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<it;Pt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(at+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return ft}const lt={};lt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(ms),be(!1),oe(El),nt(i.CULL_FACE),Qt(Di);function nt(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function pt(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function Bt(G,at){return f[G]!==at?(i.bindFramebuffer(G,at),f[G]=at,G===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=at),G===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=at),!0):!1}function bt(G,at){let it=p,gt=!1;if(G){it=d.get(at),it===void 0&&(it=[],d.set(at,it));const ut=G.textures;if(it.length!==ut.length||it[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Pt=ut.length;ft<Pt;ft++)it[ft]=i.COLOR_ATTACHMENT0+ft;it.length=ut.length,gt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,gt=!0);gt&&i.drawBuffers(it)}function Ot(G){return M!==G?(i.useProgram(G),M=G,!0):!1}const Ft={[Ii]:i.FUNC_ADD,[Iu]:i.FUNC_SUBTRACT,[Nu]:i.FUNC_REVERSE_SUBTRACT};Ft[Uu]=i.MIN,Ft[Fu]=i.MAX;const It={[Ou]:i.ZERO,[zu]:i.ONE,[Bu]:i.SRC_COLOR,[Al]:i.SRC_ALPHA,[Xu]:i.SRC_ALPHA_SATURATE,[Vu]:i.DST_COLOR,[ku]:i.DST_ALPHA,[Gu]:i.ONE_MINUS_SRC_COLOR,[Rl]:i.ONE_MINUS_SRC_ALPHA,[Wu]:i.ONE_MINUS_DST_COLOR,[Hu]:i.ONE_MINUS_DST_ALPHA,[Yu]:i.CONSTANT_COLOR,[qu]:i.ONE_MINUS_CONSTANT_COLOR,[Zu]:i.CONSTANT_ALPHA,[Ku]:i.ONE_MINUS_CONSTANT_ALPHA};function Qt(G,at,it,gt,ut,ft,Pt,Wt,ht,Dt){if(G===Di){m===!0&&(pt(i.BLEND),m=!1);return}if(m===!1&&(nt(i.BLEND),m=!0),G!==Du){if(G!==g||Dt!==R){if((S!==Ii||E!==Ii)&&(i.blendEquation(i.FUNC_ADD),S=Ii,E=Ii),Dt)switch(G){case ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oa:i.blendFunc(i.ONE,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",G);break}else switch(G){case ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wl:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tl:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",G);break}_=null,v=null,b=null,x=null,y.set(0,0,0),T=0,g=G,R=Dt}return}ut=ut||at,ft=ft||it,Pt=Pt||gt,(at!==S||ut!==E)&&(i.blendEquationSeparate(Ft[at],Ft[ut]),S=at,E=ut),(it!==_||gt!==v||ft!==b||Pt!==x)&&(i.blendFuncSeparate(It[it],It[gt],It[ft],It[Pt]),_=it,v=gt,b=ft,x=Pt),(Wt.equals(y)===!1||ht!==T)&&(i.blendColor(Wt.r,Wt.g,Wt.b,ht),y.copy(Wt),T=ht),g=G,R=!1}function ae(G,at){G.side===Ie?pt(i.CULL_FACE):nt(i.CULL_FACE);let it=G.side===Ye;at&&(it=!it),be(it),G.blending===ps&&G.transparent===!1?Qt(Di):Qt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const gt=G.stencilWrite;o.setTest(gt),gt&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),se(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(G){C!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),C=G)}function oe(G){G!==Cu?(nt(i.CULL_FACE),G!==N&&(G===El?i.cullFace(i.BACK):G===Pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),N=G}function Me(G){G!==B&&(L&&i.lineWidth(G),B=G)}function se(G,at,it){G?(nt(i.POLYGON_OFFSET_FILL),(P!==at||k!==it)&&(P=at,k=it,a.getReversed()&&(at=-at,it=-it),i.polygonOffset(at,it))):pt(i.POLYGON_OFFSET_FILL)}function un(G){G?nt(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function dn(G){G===void 0&&(G=i.TEXTURE0+D-1),U!==G&&(i.activeTexture(G),U=G)}function fn(G,at,it){it===void 0&&(U===null?it=i.TEXTURE0+D-1:it=U);let gt=O[it];gt===void 0&&(gt={type:void 0,texture:void 0},O[it]=gt),(gt.type!==G||gt.texture!==at)&&(U!==it&&(i.activeTexture(it),U=it),i.bindTexture(G,at||lt[G]),gt.type=G,gt.texture=at)}function q(){const G=O[U];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pn(){try{i.compressedTexImage2D(...arguments)}catch(G){ee("WebGLState:",G)}}function pe(){try{i.compressedTexImage3D(...arguments)}catch(G){ee("WebGLState:",G)}}function me(){try{i.texSubImage2D(...arguments)}catch(G){ee("WebGLState:",G)}}function Mt(){try{i.texSubImage3D(...arguments)}catch(G){ee("WebGLState:",G)}}function De(){try{i.compressedTexSubImage2D(...arguments)}catch(G){ee("WebGLState:",G)}}function Nt(){try{i.compressedTexSubImage3D(...arguments)}catch(G){ee("WebGLState:",G)}}function Gt(){try{i.texStorage2D(...arguments)}catch(G){ee("WebGLState:",G)}}function I(){try{i.texStorage3D(...arguments)}catch(G){ee("WebGLState:",G)}}function w(){try{i.texImage2D(...arguments)}catch(G){ee("WebGLState:",G)}}function J(){try{i.texImage3D(...arguments)}catch(G){ee("WebGLState:",G)}}function ct(G){return u[G]!==void 0?u[G]:i.getParameter(G)}function ot(G,at){u[G]!==at&&(i.pixelStorei(G,at),u[G]=at)}function dt(G){F.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),F.copy(G))}function _t(G){K.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),K.copy(G))}function st(G,at){let it=c.get(at);it===void 0&&(it=new WeakMap,c.set(at,it));let gt=it.get(G);gt===void 0&&(gt=i.getUniformBlockIndex(at,G.name),i.uniformBlockBinding(at,gt,gt),it.set(G,gt))}function rt(G,at,it){const ut=c.get(at).get(G);l[ut]!==it&&(i.bindBufferBase(i.UNIFORM_BUFFER,ut,it),l[ut]=it)}function mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},U=null,O={},f={},l={},d=new WeakMap,p=[],M=null,m=!1,g=null,S=null,_=null,v=null,E=null,b=null,x=null,y=new Rt(0,0,0),T=0,R=!1,C=null,N=null,B=null,P=null,k=null,F.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:pt,bindFramebuffer:Bt,drawBuffers:bt,useProgram:Ot,setBlending:Qt,setMaterial:ae,setFlipSided:be,setCullFace:oe,setLineWidth:Me,setPolygonOffset:se,setScissorTest:un,activeTexture:dn,bindTexture:fn,unbindTexture:q,compressedTexImage2D:pn,compressedTexImage3D:pe,texImage2D:w,texImage3D:J,pixelStorei:ot,getParameter:ct,updateUBOMapping:st,uniformBlockBinding:rt,texStorage2D:Gt,texStorage3D:I,texSubImage2D:me,texSubImage3D:Mt,compressedTexSubImage2D:De,compressedTexSubImage3D:Nt,scissor:dt,viewport:_t,reset:mt}}function Bg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,u=new Set;let f;const d=new WeakMap,p=new Set,M=new FinalizationRegistry(I=>p.delete(I));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return m?new OffscreenCanvas(I,w):vs("canvas")}function S(I,w,J){let ct=1;const ot=Gt(I);if((ot.width>J||ot.height>J)&&(ct=J/Math.max(ot.width,ot.height)),ct<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const dt=Math.floor(ct*ot.width),_t=Math.floor(ct*ot.height);f===void 0&&(f=g(dt,_t));const st=w?g(dt,_t):f;return st.width=dt,st.height=_t,st.getContext("2d").drawImage(I,0,0,dt,_t),Ut("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+dt+"x"+_t+")."),st}else return"data"in I&&Ut("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),I;return I}function _(I){return I.generateMipmaps}function v(I){i.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(I,w,J,ct,ot,dt=!1){if(I!==null){if(i[I]!==void 0)return i[I];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let _t;ct&&(_t=t.get("EXT_texture_norm16"),_t||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=w;if(w===i.RED&&(J===i.FLOAT&&(st=i.R32F),J===i.HALF_FLOAT&&(st=i.R16F),J===i.UNSIGNED_BYTE&&(st=i.R8),J===i.UNSIGNED_SHORT&&_t&&(st=_t.R16_EXT),J===i.SHORT&&_t&&(st=_t.R16_SNORM_EXT)),w===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(st=i.R8UI),J===i.UNSIGNED_SHORT&&(st=i.R16UI),J===i.UNSIGNED_INT&&(st=i.R32UI),J===i.BYTE&&(st=i.R8I),J===i.SHORT&&(st=i.R16I),J===i.INT&&(st=i.R32I)),w===i.RG&&(J===i.FLOAT&&(st=i.RG32F),J===i.HALF_FLOAT&&(st=i.RG16F),J===i.UNSIGNED_BYTE&&(st=i.RG8),J===i.UNSIGNED_SHORT&&_t&&(st=_t.RG16_EXT),J===i.SHORT&&_t&&(st=_t.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(st=i.RG8UI),J===i.UNSIGNED_SHORT&&(st=i.RG16UI),J===i.UNSIGNED_INT&&(st=i.RG32UI),J===i.BYTE&&(st=i.RG8I),J===i.SHORT&&(st=i.RG16I),J===i.INT&&(st=i.RG32I)),w===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(st=i.RGB8UI),J===i.UNSIGNED_SHORT&&(st=i.RGB16UI),J===i.UNSIGNED_INT&&(st=i.RGB32UI),J===i.BYTE&&(st=i.RGB8I),J===i.SHORT&&(st=i.RGB16I),J===i.INT&&(st=i.RGB32I)),w===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),J===i.UNSIGNED_INT&&(st=i.RGBA32UI),J===i.BYTE&&(st=i.RGBA8I),J===i.SHORT&&(st=i.RGBA16I),J===i.INT&&(st=i.RGBA32I)),w===i.RGB&&(J===i.UNSIGNED_SHORT&&_t&&(st=_t.RGB16_EXT),J===i.SHORT&&_t&&(st=_t.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),w===i.RGBA){const rt=dt?ir:Kt.getTransfer(ot);J===i.FLOAT&&(st=i.RGBA32F),J===i.HALF_FLOAT&&(st=i.RGBA16F),J===i.UNSIGNED_BYTE&&(st=rt===re?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&_t&&(st=_t.RGBA16_EXT),J===i.SHORT&&_t&&(st=_t.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function x(I,w){let J;return I?w===null||w===Pn||w===Ui?J=i.DEPTH24_STENCIL8:w===gn?J=i.DEPTH32F_STENCIL8:w===xs&&(J=i.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Pn||w===Ui?J=i.DEPTH_COMPONENT24:w===gn?J=i.DEPTH_COMPONENT32F:w===xs&&(J=i.DEPTH_COMPONENT16),J}function y(I,w){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==we&&I.minFilter!==qe?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function T(I){const w=new WeakRef(I);n.get(I).__ref=w,p.add(w),M.register(I,w,w)}function R(I){const w=n.get(I).__ref;w!==void 0&&(p.delete(w),M.unregister(w))}function C(I){B(I.target)}function N(I){P(I.target)}function B(I){I.removeEventListener("dispose",C),R(I),D(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function P(I){I.removeEventListener("dispose",N),R(I),Z(I)}function k(){for(const I of p){const w=I.deref();w!==void 0&&(w.isRenderTarget===!0?P(w):B(w))}p.clear(),u.clear()}function D(I){const w=n.get(I);if(w.__webglInit===void 0)return;const J=I.source,ct=d.get(J);if(ct){const ot=ct[w.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&L(I),Object.keys(ct).length===0&&d.delete(J)}n.remove(I)}function L(I){const w=n.get(I);i.deleteTexture(w.__webglTexture);const J=I.source,ct=d.get(J);delete ct[w.__cacheKey],a.memory.textures--}function Z(I){const w=n.get(I);w.__depthDisposeCallback&&w.__depthDisposeCallback();const J=I.depthTexture;if(J&&J.renderTarget===I&&B(J),I.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(w.__webglFramebuffer[ot]))for(let dt=0;dt<w.__webglFramebuffer[ot].length;dt++)i.deleteFramebuffer(w.__webglFramebuffer[ot][dt]);else i.deleteFramebuffer(w.__webglFramebuffer[ot]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ot])}else{if(Array.isArray(w.__webglFramebuffer))for(let ot=0;ot<w.__webglFramebuffer.length;ot++)i.deleteFramebuffer(w.__webglFramebuffer[ot]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ot=0;ot<w.__webglColorRenderbuffer.length;ot++)w.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ot]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ct=I.textures;for(let ot=0,dt=ct.length;ot<dt;ot++){const _t=n.get(ct[ot]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(ct[ot])}n.remove(I)}let Y=0;function U(){Y=0}function O(){return Y}function z(I){Y=I}function X(){const I=Y;return I>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,I}function F(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.mipmapsAutoUpdate),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function K(I,w){const J=n.get(I);if(I.isVideoTexture&&De(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&J.__version!==I.version){const ct=I.image;if(ct===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(J,I,w);return}}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+w)}function et(I,w){const J=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){ae(J,I,w);return}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+w)}function lt(I,w){const J=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){ae(J,I,w);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+w)}function nt(I,w){const J=n.get(I);if(I.version>0&&J.__version!==I.version){be(J,I,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+w)}const pt={[qs]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},Bt={[we]:i.NEAREST,[Qu]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[Ma]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},bt={[nd]:i.NEVER,[Wl]:i.ALWAYS,[id]:i.LESS,[Hl]:i.LEQUAL,[sd]:i.EQUAL,[Vl]:i.GEQUAL,[rd]:i.GREATER,[ad]:i.NOTEQUAL};function Ot(I,w){if(w.type===gn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===qe||w.magFilter===Ma||w.magFilter===Zs||w.magFilter===Cn||w.minFilter===qe||w.minFilter===Ma||w.minFilter===Zs||w.minFilter===Cn)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,pt[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,pt[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,pt[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Bt[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Bt[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,bt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===we||w.minFilter!==Zs&&w.minFilter!==Cn||w.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ft(I,w){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",C),T(w));const ct=w.source;let ot=d.get(ct);ot===void 0&&(ot={},d.set(ct,ot));const dt=F(w);if(dt!==I.__cacheKey){ot[dt]===void 0&&(ot[dt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),ot[dt].usedTimes++;const _t=ot[I.__cacheKey];_t!==void 0&&(ot[I.__cacheKey].usedTimes--,_t.usedTimes===0&&L(w)),I.__cacheKey=dt,I.__webglTexture=ot[dt].texture}return J}function It(I,w,J){return Math.floor(Math.floor(I/J)/w)}function Qt(I,w,J,ct){const dt=I.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,J,ct,w.data);else{dt.sort((G,at)=>G.start-at.start);let _t=0;for(let G=1;G<dt.length;G++){const at=dt[_t],it=dt[G],gt=at.start+at.count,ut=It(it.start,w.width,4),ft=It(at.start,w.width,4);it.start<=gt+1&&ut===ft&&It(it.start+it.count-1,w.width,4)===ut?at.count=Math.max(at.count,it.start+it.count-at.start):(++_t,dt[_t]=it)}dt.length=_t+1;const st=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let G=0,at=dt.length;G<at;G++){const it=dt[G],gt=Math.floor(it.start/4),ut=Math.ceil(it.count/4),ft=gt%w.width,Pt=Math.floor(gt/w.width),Wt=ut,ht=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,Pt),e.texSubImage2D(i.TEXTURE_2D,0,ft,Pt,Wt,ht,J,ct,w.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,st),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function ae(I,w,J){let ct=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ct=i.TEXTURE_3D);const ot=Ft(I,w),dt=w.source;e.bindTexture(ct,I.__webglTexture,i.TEXTURE0+J);const _t=n.get(dt);if(dt.version!==_t.__version||ot===!0){if(e.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ht=Kt.getPrimaries(Kt.workingColorSpace),Dt=w.colorSpace===oi?null:Kt.getPrimaries(w.colorSpace),Ht=w.colorSpace===oi||ht===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let rt=S(w.image,!1,s.maxTextureSize);rt=Nt(w,rt);const mt=r.convert(w.format,w.colorSpace),G=r.convert(w.type);let at=b(w.internalFormat,mt,G,w.normalized,w.colorSpace,w.isVideoTexture);Ot(ct,w);let it;const gt=w.mipmaps,ut=w.isVideoTexture!==!0,ft=_t.__version===void 0||ot===!0,Pt=dt.dataReady,Wt=y(w,rt);if(w.isDepthTexture)at=x(w.format===ri,w.type),ft&&(ut?e.texStorage2D(i.TEXTURE_2D,1,at,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,at,rt.width,rt.height,0,mt,G,null));else if(w.isDataTexture)if(gt.length>0){ut&&ft&&e.texStorage2D(i.TEXTURE_2D,Wt,at,gt[0].width,gt[0].height);for(let ht=0,Dt=gt.length;ht<Dt;ht++)it=gt[ht],ut?Pt&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,it.width,it.height,mt,G,it.data):e.texImage2D(i.TEXTURE_2D,ht,at,it.width,it.height,0,mt,G,it.data);w.generateMipmaps=!1}else ut?(ft&&e.texStorage2D(i.TEXTURE_2D,Wt,at,rt.width,rt.height),Pt&&Qt(w,rt,mt,G)):e.texImage2D(i.TEXTURE_2D,0,at,rt.width,rt.height,0,mt,G,rt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ut&&ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,at,gt[0].width,gt[0].height,rt.depth);for(let ht=0,Dt=gt.length;ht<Dt;ht++)if(it=gt[ht],w.format!==Ln)if(mt!==null)if(ut){if(Pt)if(w.layerUpdates.size>0){const Ht=Jc(it.width,it.height,w.format,w.type);for(const yt of w.layerUpdates){const le=it.data.subarray(yt*Ht/it.data.BYTES_PER_ELEMENT,(yt+1)*Ht/it.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,yt,it.width,it.height,1,mt,le)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,it.width,it.height,rt.depth,mt,it.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,at,it.width,it.height,rt.depth,0,it.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?Pt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,it.width,it.height,rt.depth,mt,G,it.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,at,it.width,it.height,rt.depth,0,mt,G,it.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ut&&ft&&e.texStorage2D(i.TEXTURE_2D,Wt,at,gt[0].width,gt[0].height);for(let ht=0,Dt=gt.length;ht<Dt;ht++)it=gt[ht],w.format!==Ln?mt!==null?ut?Pt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,it.width,it.height,mt,it.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,at,it.width,it.height,0,it.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?Pt&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,it.width,it.height,mt,G,it.data):e.texImage2D(i.TEXTURE_2D,ht,at,it.width,it.height,0,mt,G,it.data)}else if(w.isDataArrayTexture)if(ut){if(ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,at,rt.width,rt.height,rt.depth),Pt)if(w.layerUpdates.size>0){const ht=Jc(rt.width,rt.height,w.format,w.type);for(const Dt of w.layerUpdates){const Ht=rt.data.subarray(Dt*ht/rt.data.BYTES_PER_ELEMENT,(Dt+1)*ht/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Dt,rt.width,rt.height,1,mt,G,Ht)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,mt,G,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,at,rt.width,rt.height,rt.depth,0,mt,G,rt.data);else if(w.isData3DTexture)ut?(ft&&e.texStorage3D(i.TEXTURE_3D,Wt,at,rt.width,rt.height,rt.depth),Pt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,mt,G,rt.data)):e.texImage3D(i.TEXTURE_3D,0,at,rt.width,rt.height,rt.depth,0,mt,G,rt.data);else if(w.isFramebufferTexture){if(ft)if(ut)e.texStorage2D(i.TEXTURE_2D,Wt,at,rt.width,rt.height);else{let ht=rt.width,Dt=rt.height;for(let Ht=0;Ht<Wt;Ht++)e.texImage2D(i.TEXTURE_2D,Ht,at,ht,Dt,0,mt,G,null),ht>>=1,Dt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){const ht=i.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),rt.parentNode!==ht){ht.appendChild(rt),u.add(w),ht.onpaint=Dt=>{const Ht=Dt.changedElements;for(const yt of u)Ht.includes(yt.image)&&(yt.needsUpdate=!0)},ht.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{const Ht=i.RGBA,yt=i.RGBA,le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ht,yt,le,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(gt.length>0){if(ut&&ft){const ht=Gt(gt[0]);e.texStorage2D(i.TEXTURE_2D,Wt,at,ht.width,ht.height)}for(let ht=0,Dt=gt.length;ht<Dt;ht++)it=gt[ht],ut?Pt&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,mt,G,it):e.texImage2D(i.TEXTURE_2D,ht,at,mt,G,it);w.generateMipmaps=!1}else if(ut){if(ft){const ht=Gt(rt);e.texStorage2D(i.TEXTURE_2D,Wt,at,ht.width,ht.height)}Pt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,G,rt)}else e.texImage2D(i.TEXTURE_2D,0,at,mt,G,rt);_(w)&&w.mipmapsAutoUpdate===!0&&v(ct),_t.__version=dt.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function be(I,w,J){if(w.image.length!==6)return;const ct=Ft(I,w),ot=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+J);const dt=n.get(ot);if(ot.version!==dt.__version||ct===!0){e.activeTexture(i.TEXTURE0+J);const _t=Kt.getPrimaries(Kt.workingColorSpace),st=w.colorSpace===oi?null:Kt.getPrimaries(w.colorSpace),rt=w.colorSpace===oi||_t===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const mt=w.isCompressedTexture||w.image[0].isCompressedTexture,G=w.image[0]&&w.image[0].isDataTexture,at=[];for(let yt=0;yt<6;yt++)!mt&&!G?at[yt]=S(w.image[yt],!0,s.maxCubemapSize):at[yt]=G?w.image[yt].image:w.image[yt],at[yt]=Nt(w,at[yt]);const it=at[0],gt=r.convert(w.format,w.colorSpace),ut=r.convert(w.type);let ft=b(w.internalFormat,gt,ut,w.normalized,w.colorSpace);const Pt=w.isVideoTexture!==!0,Wt=dt.__version===void 0||ct===!0,ht=ot.dataReady;let Dt=y(w,it);Ot(i.TEXTURE_CUBE_MAP,w);let Ht;if(w.isDepthTexture){if(ft=x(w.format===ri,w.type),Wt)if(Pt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ft,it.width,it.height);else for(let yt=0;yt<6;yt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ft,it.width,it.height,0,gt,ut,null)}else if(mt){Pt&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,ft,it.width,it.height);for(let yt=0;yt<6;yt++){Ht=at[yt].mipmaps;for(let le=0;le<Ht.length;le++){const Fe=Ht[le];w.format!==Ln?gt!==null?Pt?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le,0,0,Fe.width,Fe.height,gt,Fe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le,ft,Fe.width,Fe.height,0,Fe.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le,0,0,Fe.width,Fe.height,gt,ut,Fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le,ft,Fe.width,Fe.height,0,gt,ut,Fe.data)}}}else{if(Ht=w.mipmaps,Pt&&Wt){Ht.length>0&&Dt++;const yt=Gt(at[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,ft,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(G){Pt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,at[yt].width,at[yt].height,gt,ut,at[yt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ft,at[yt].width,at[yt].height,0,gt,ut,at[yt].data);for(let le=0;le<Ht.length;le++){const _i=Ht[le].image[yt].image;Pt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le+1,0,0,_i.width,_i.height,gt,ut,_i.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le+1,ft,_i.width,_i.height,0,gt,ut,_i.data)}}else{Pt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,gt,ut,at[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ft,gt,ut,at[yt]);for(let le=0;le<Ht.length;le++){const Fe=Ht[le];Pt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le+1,0,0,gt,ut,Fe.image[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le+1,ft,gt,ut,Fe.image[yt])}}}_(w)&&w.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),dt.__version=ot.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function oe(I,w,J,ct,ot,dt){const _t=r.convert(J.format,J.colorSpace),st=r.convert(J.type),rt=b(J.internalFormat,_t,st,J.normalized,J.colorSpace),mt=n.get(w),G=n.get(J);if(G.__renderTarget=w,!mt.__hasExternalTextures){const at=Math.max(1,w.width>>dt),it=Math.max(1,w.height>>dt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,dt,rt,at,it,w.depth,0,_t,st,null):e.texImage2D(ot,dt,rt,at,it,0,_t,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Mt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,ot,G.__webglTexture,0,me(w)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,ot,G.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(I,w,J){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){const ct=w.depthTexture,ot=ct&&ct.isDepthTexture?ct.type:null,dt=x(w.stencilBuffer,ot),_t=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Mt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(w),dt,w.width,w.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(w),dt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,dt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,I)}else{const ct=w.textures;for(let ot=0;ot<ct.length;ot++){const dt=ct[ot],_t=r.convert(dt.format,dt.colorSpace),st=r.convert(dt.type),rt=b(dt.internalFormat,_t,st,dt.normalized,dt.colorSpace);Mt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(w),rt,w.width,w.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(w),rt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,rt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(I,w,J){const ct=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ot=n.get(w.depthTexture);ot.__renderTarget=w;const dt=ct?w.depthTexture.image[0]:w.depthTexture.image;(!ot.__webglTexture||dt.width!==w.width||dt.height!==w.height)&&(dt.width=w.width,dt.height=w.height,w.depthTexture.needsUpdate=!0),ct?nt(w.depthTexture,0):K(w.depthTexture,0);const _t=ot.__webglTexture,st=me(w),rt=ct?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,mt=w.depthTexture.format===ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===si)Mt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,rt,_t,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,mt,rt,_t,0);else if(w.depthTexture.format===ri)Mt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,rt,_t,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,mt,rt,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function un(I){const w=n.get(I),J=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const ct=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ct){const ot=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ct.removeEventListener("dispose",ot)};ct.addEventListener("dispose",ot),w.__depthDisposeCallback=ot}w.__boundDepthTexture=ct}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(J)for(let ct=0;ct<6;ct++)se(w.__webglFramebuffer[ct],I,ct);else I.texture.mipmaps.length>0?se(w.__webglFramebuffer[0],I,0):se(w.__webglFramebuffer,I,0);else if(J){w.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ct]),w.__webglDepthbuffer[ct]===void 0)w.__webglDepthbuffer[ct]=i.createRenderbuffer(),Me(w.__webglDepthbuffer[ct],I,!1);else{const ot=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=w.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,dt)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Me(w.__webglDepthbuffer,I,!1);else{const ot=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,dt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function dn(I,w,J){const ct=n.get(I);w!==void 0&&oe(ct.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&un(I)}function fn(I){const w=I.texture,J=n.get(I),ct=n.get(w);I.addEventListener("dispose",N),T(I);const ot=I.textures,dt=I.isWebGLCubeRenderTarget===!0,_t=ot.length>1;if(_t||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=w.version,a.memory.textures++),dt){J.__webglFramebuffer=[];for(let st=0;st<6;st++)if(w.mipmaps.length>0){J.__webglFramebuffer[st]=[];for(let rt=0;rt<w.mipmaps.length;rt++)J.__webglFramebuffer[st][rt]=i.createFramebuffer()}else J.__webglFramebuffer[st]=i.createFramebuffer()}else{if(w.mipmaps.length>0){J.__webglFramebuffer=[];for(let st=0;st<w.mipmaps.length;st++)J.__webglFramebuffer[st]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(_t)for(let st=0,rt=ot.length;st<rt;st++){const mt=n.get(ot[st]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Mt(I)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let st=0;st<ot.length;st++){const rt=ot[st];J.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[st]);const mt=r.convert(rt.format,rt.colorSpace),G=r.convert(rt.type),at=b(rt.internalFormat,mt,G,rt.normalized,rt.colorSpace,I.isXRRenderTarget===!0),it=me(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,it,at,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,J.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(J.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,w);for(let st=0;st<6;st++)if(w.mipmaps.length>0)for(let rt=0;rt<w.mipmaps.length;rt++)oe(J.__webglFramebuffer[st][rt],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,rt);else oe(J.__webglFramebuffer[st],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);_(w)?v(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(_t){for(let st=0,rt=ot.length;st<rt;st++){const mt=ot[st],G=n.get(mt);let at=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(at=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,G.__webglTexture),Ot(at,mt),oe(J.__webglFramebuffer,I,mt,i.COLOR_ATTACHMENT0+st,at,0),_(mt)&&v(at)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(st=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,ct.__webglTexture),Ot(st,w),w.mipmaps.length>0)for(let rt=0;rt<w.mipmaps.length;rt++)oe(J.__webglFramebuffer[rt],I,w,i.COLOR_ATTACHMENT0,st,rt);else oe(J.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,st,0);_(w)?v(st):w.mipmaps.length>0&&i.texParameteri(st,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&un(I)}function q(I){const w=I.textures;for(let J=0,ct=w.length;J<ct;J++){const ot=w[J];if(_(ot)&&ot.mipmapsAutoUpdate===!0){const dt=E(I),_t=n.get(ot).__webglTexture;e.bindTexture(dt,_t),v(dt),e.unbindTexture()}}}const pn=[];function pe(I){if(I.samples>0){if(Mt(I)===!1){const w=I.textures,J=I.width,ct=I.height;let ot=i.COLOR_BUFFER_BIT;const dt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(I),st=w.length>1;if(st)for(let mt=0;mt<w.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let mt=0;mt<w.length;mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[mt]);const G=n.get(w[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,G,0)}i.blitFramebuffer(0,0,J,ct,0,0,J,ct,ot,i.NEAREST),l===!0&&(pn.length=0,pn.push(i.COLOR_ATTACHMENT0+mt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&pn.push(dt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let mt=0;mt<w.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[mt]);const G=n.get(w[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,G,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){const w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function me(I){return Math.min(s.maxSamples,I.samples)}function Mt(I){const w=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function De(I){const w=a.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function Nt(I,w){const J=I.colorSpace,ct=I.format,ot=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||J!==nr&&J!==oi&&(Kt.getTransfer(J)===re?(ct!==Ln||ot!==je)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",J)),w}function Gt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=U,this.getTextureUnits=O,this.setTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=et,this.setTexture3D=lt,this.setTextureCube=nt,this.rebindTextures=dn,this.setupRenderTarget=fn,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=un,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Mt,this.dispose=k}function Gg(i,t){function e(n,s=oi){let r;const a=Kt.getTransfer(s);if(n===je)return i.UNSIGNED_BYTE;if(n===ya)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ba)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fl)return i.BYTE;if(n===Ol)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===Sa)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===xn)return i.HALF_FLOAT;if(n===Gl)return i.ALPHA;if(n===kl)return i.RGB;if(n===Ln)return i.RGBA;if(n===si)return i.DEPTH_COMPONENT;if(n===ri)return i.DEPTH_STENCIL;if(n===Ea)return i.RED;if(n===wa)return i.RED_INTEGER;if(n===ai)return i.RG;if(n===Ta)return i.RG_INTEGER;if(n===Aa)return i.RGBA_INTEGER;if(n===Ks||n===$s||n===Js||n===Qs)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Ca||n===Pa||n===La)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Da||n===Ia||n===Na||n===Ua||n===Fa||n===js||n===Oa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Da||n===Ia)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Na)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ua)return r.COMPRESSED_R11_EAC;if(n===Fa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===js)return r.COMPRESSED_RG11_EAC;if(n===Oa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===za||n===Ba||n===Ga||n===ka||n===Ha||n===Va||n===Wa||n===Xa||n===Ya||n===qa||n===Za||n===Ka||n===$a||n===Ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===za)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ba)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ga)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ka)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ha)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Va)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ya)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Za)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ka)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$a)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ja)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qa||n===ja||n===to)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qa)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===to)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eo||n===no||n===tr||n===io)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===eo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ui?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hg=`
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

}`;class Vg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Lc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new nn({vertexShader:kg,fragmentShader:Hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new Un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wg extends li{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null;const M=typeof XRWebGLBinding<"u",m=new Vg,g={},S=e.getContextAttributes();let _=null,v=null;const E=[],b=[],x=new Lt;let y=null,T=null;const R=new wn;R.viewport=new de;const C=new wn;C.viewport=new de;const N=[R,C],B=new Nf;let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let K=E[F];return K===void 0&&(K=new po,E[F]=K),K.getTargetRaySpace()},this.getControllerGrip=function(F){let K=E[F];return K===void 0&&(K=new po,E[F]=K),K.getGripSpace()},this.getHand=function(F){let K=E[F];return K===void 0&&(K=new po,E[F]=K),K.getHandSpace()};function D(F){const K=b.indexOf(F.inputSource);if(K===-1)return;const et=E[K];et!==void 0&&(et.update(F.inputSource,F.frame,c||a),et.dispatchEvent({type:F.type,data:F.inputSource}))}function L(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",Z);for(let F=0;F<E.length;F++){const K=b[F];K!==null&&(b[F]=null,E[F].disconnect(K))}P=null,k=null,m.reset();for(const F in g)delete g[F];if(t.setRenderTarget(_),d=null,f=null,u=null,s=null,v=null,X.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(x.width,x.height,!1),T!==null){const F=T.camera;F.fov=T.fov,F.zoom=T.zoom,F.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",L),s.addEventListener("inputsourceschange",Z),S.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,lt=null,nt=null;S.depth&&(nt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=S.stencil?ri:si,lt=S.stencil?Ui:Pn);const pt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(pt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Dn(f.textureWidth,f.textureHeight,{format:Ln,type:je,depthTexture:new Ki(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const et={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Dn(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:je,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),X.setContext(s),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(F){for(let K=0;K<F.removed.length;K++){const et=F.removed[K],lt=b.indexOf(et);lt>=0&&(b[lt]=null,E[lt].disconnect(et))}for(let K=0;K<F.added.length;K++){const et=F.added[K];let lt=b.indexOf(et);if(lt===-1){for(let pt=0;pt<E.length;pt++)if(pt>=b.length){b.push(et),lt=pt;break}else if(b[pt]===null){b[pt]=et,lt=pt;break}if(lt===-1)break}const nt=E[lt];nt&&nt.connect(et)}}function Y(F,K){K===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(K.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let K=F.near,et=F.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(et=m.depthFar)),B.near=C.near=R.near=K,B.far=C.far=R.far=et,(P!==B.near||k!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),P=B.near,k=B.far),B.layers.mask=F.layers.mask|6,R.layers.mask=B.layers.mask&-5,C.layers.mask=B.layers.mask&-3;const lt=F.parent,nt=B.cameras;Y(B,lt);for(let pt=0;pt<nt.length;pt++)Y(nt[pt],lt);B.projectionMatrix.copy(R.projectionMatrix),B.projectionMatrixInverse.copy(R.projectionMatrixInverse),T===null&&F.isPerspectiveCamera&&(T={camera:F,fov:F.fov,zoom:F.zoom}),U(F,B,lt)};function U(F,K,et){et===null?F.matrix.copy(K.matrixWorld):(F.matrix.copy(et.matrixWorld),F.matrix.invert(),F.matrix.multiply(K.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(K.projectionMatrix),F.projectionMatrixInverse.copy(K.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Ss*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(F){return g[F]};let O=null;function z(F,K){if(h=K.getViewerPose(c||a),p=K,h!==null){const et=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let lt=!1;et.length!==B.cameras.length&&(B.cameras.length=0,lt=!0);for(let bt=0;bt<et.length;bt++){const Ot=et[bt];let Ft=null;if(d!==null)Ft=d.getViewport(Ot);else{const Qt=u.getViewSubImage(f,Ot);Ft=Qt.viewport,bt===0&&(t.setRenderTargetTextures(v,Qt.colorTexture,Qt.depthStencilTexture),t.setRenderTarget(v))}let It=N[bt];It===void 0&&(It=new wn,It.layers.enable(bt),It.viewport=new de,N[bt]=It),It.matrix.fromArray(Ot.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(Ot.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),bt===0&&(B.matrix.copy(It.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),lt===!0&&B.cameras.push(It)}const nt=s.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=n.getBinding();const bt=u.getDepthInformation(et[0]);bt&&bt.isValid&&bt.texture&&m.init(bt,s.renderState)}if(nt&&nt.includes("camera-access")&&M){t.state.unbindTexture(),u=n.getBinding();for(let bt=0;bt<et.length;bt++){const Ot=et[bt].camera;if(Ot){let Ft=g[Ot];Ft||(Ft=new Lc,g[Ot]=Ft);const It=u.getCameraImage(Ot);Ft.sourceTexture=It}}}}for(let et=0;et<E.length;et++){const lt=b[et],nt=E[et];lt!==null&&nt!==void 0&&nt.update(lt,K,c||a)}O&&O(F,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),p=null}const X=new Qc;X.setAnimationLoop(z),this.setAnimationLoop=function(F){O=F},this.dispose=function(){}}}const Xg=new jt,Ch=new zt;Ch.set(-1,0,0,0,1,0,0,0,1);function Yg(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Gc(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,S,_,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),M(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,S,_):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ye&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ye&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const S=t.get(g),_=S.envMap,v=S.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(v)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ch),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,_){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=_*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,S){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ye&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function M(m,g){const S=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qg(i,t,e,n){let s={},r={};function a(S,_){const v=_.program;n.uniformBlockBinding(S,v,s[S.id])}function o(S,_){let v=s[S.id];v===void 0&&(p(S),v=l(S),s[S.id]=v,S.addEventListener("dispose",m));const E=_.program;n.updateUBOMapping(S,E);const b=t.render.frame;r[S.id]!==b&&(c(S),r[S.id]=b)}function l(S){const _=i.createBuffer(),v=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,v,E),i.bindBuffer(i.UNIFORM_BUFFER,null),_}function c(S){const _=s[S.id],v=S.uniforms,E=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,x=v.length;b<x;b++){const y=v[b];if(Array.isArray(y))for(let T=0,R=y.length;T<R;T++)h(y[T],b,T,E);else h(y,b,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,_,v,E){if(f(S,_,v,E)===!0){const b=S.__offset,x=S.value;if(Array.isArray(x)){let y=0;for(let T=0;T<x.length;T++){const R=x[T],C=M(R,!0);u(R,S.__data,y),y+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,S.__data)}}function u(S,_,v){typeof S=="number"||typeof S=="boolean"?_[v]=S:S.isMatrix3?(_[v]=S.elements[0],_[v+1]=S.elements[1],_[v+2]=S.elements[2],_[v+3]=0,_[v+4]=S.elements[3],_[v+5]=S.elements[4],_[v+6]=S.elements[5],_[v+7]=0,_[v+8]=S.elements[6],_[v+9]=S.elements[7],_[v+10]=S.elements[8],_[v+11]=0):ArrayBuffer.isView(S)?_.set(S.subarray(0,_.length-v),v):S.toArray(_,v)}function f(S,_,v,E){const b=S.value,x=_+"_"+v;if(Array.isArray(b)){E[x]===void 0&&(E[x]=[]);const y=E[x];let T=!1;for(let R=0;R<b.length;R++)d(b[R],y,R)===!0&&(T=!0);return T}return d(b,E,x)}function d(S,_,v){if(_[v]===void 0)return typeof S=="number"||typeof S=="boolean"?_[v]=S:ArrayBuffer.isView(S)?_[v]=S.slice():_[v]=S.clone(),!0;{const E=_[v];if(typeof S=="number"||typeof S=="boolean"){if(E!==S)return _[v]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(E.equals(S)===!1)return E.copy(S),!0}}return!1}function p(S){const _=S.uniforms;let v=0;const E=16;for(let x=0,y=_.length;x<y;x++){const T=Array.isArray(_[x])?_[x]:[_[x]];for(let R=0,C=T.length;R<C;R++){const N=T[R],B=Array.isArray(N.value)?N.value:[N.value],P=Array.isArray(_[x])||Array.isArray(N.value);let k=v;for(let L=0,Z=B.length;L<Z;L++){const Y=B[L],U=M(Y,P),O=v%E,z=O%U.boundary,X=O+z;v+=z,X!==0&&E-X<U.storage&&(v+=E-X),L===0&&(k=v),v+=U.storage}const D=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new D((v-k)/Float32Array.BYTES_PER_ELEMENT),N.__offset=k}}const b=v%E;return b>0&&(v+=E-b),S.__size=v,S.__cache={},this}function M(S,_){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=16,v.storage=48):S.isMatrix4?(v.boundary=16,v.storage=64):S.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(v.boundary=16,v.storage=S.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",S),_===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(S){const _=S.target;_.removeEventListener("dispose",m),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function g(){for(const S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:g}}const Zg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zn=null;function Kg(){return zn===null&&(zn=new Er(Zg,16,16,ai,xn),zn.name="DFG_LUT",zn.minFilter=qe,zn.magFilter=qe,zn.wrapS=Rn,zn.wrapT=Rn,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}class $g{constructor(t={}){const{canvas:e=cd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=je}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const M=d,m=new Set([Aa,Ta,wa]),g=new Set([je,Pn,xs,Ui,ya,ba]),S=new Uint32Array(4),_=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]};let E=null,b=null;const x=[],y=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let C=!1,N=null,B=null,P=null,k=null;this._outputColorSpace=Te;let D=0,L=0,Z=null,Y=-1,U=null;const O=new de,z=new de;let X=null;const F=new Rt(0);let K=0,et=e.width,lt=e.height,nt=1,pt=null,Bt=null;const bt=new de(0,0,et,lt),Ot=new de(0,0,et,lt);let Ft=!1;const It=new Cs,Qt=new Co;let ae=!1,be=!1;const oe=new jt,Me=new W,se=new de,un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dn=!1;function fn(){return Z===null?nt:1}let q=n;function pn(A,V){return e.getContext(A,V)}let pe,me,Mt,De,Nt,Gt,I,w,J,ct,ot,dt,_t,st,rt,mt,G,at,it,gt,ut,ft,Pt;try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ei}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",yt,!1),q===null){const V="webgl2";if(q=pn(V,A),q===null)throw pn(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(A){throw e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),ee("WebGLRenderer: "+A.message),A}function Wt(){pe=new jm(q),pe.init(),ut=new Gg(q,pe),me=new Hm(q,pe,t,ut),Mt=new zg(q,pe),me.reversedDepthBuffer&&f&&Mt.buffers.depth.setReversed(!0),B=q.createFramebuffer(),P=q.createFramebuffer(),k=q.createFramebuffer(),De=new n0(q),Nt=new Eg,Gt=new Bg(q,pe,Mt,Nt,me,ut,De),I=new Qm(R),w=new zf(q),ft=new Gm(q,w),J=new t0(q,w,De,ft),ct=new s0(q,J,w,ft,De),at=new i0(q,me,Gt),rt=new Vm(Nt),ot=new bg(R,I,pe,me,ft,rt),dt=new Yg(R,Nt),_t=new Tg,st=new Dg(pe),G=new Bm(R,I,Mt,ct,p,l),mt=new Og(R,ct,me),Pt=new qg(q,De,me,Mt),it=new km(q,pe,De),gt=new e0(q,pe,De),De.programs=ot.programs,R.capabilities=me,R.extensions=pe,R.properties=Nt,R.renderLists=_t,R.shadowMap=mt,R.state=Mt,R.info=De}M!==je&&(T=new a0(M,e.width,e.height,o,s,r));const ht=new Wg(R,q);this.xr=ht,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=pe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(A){A!==void 0&&(nt=A,this.setSize(et,lt,!1))},this.getSize=function(A){return A.set(et,lt)},this.setSize=function(A,V,tt=!0){if(ht.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}et=A,lt=V,e.width=Math.floor(A*nt),e.height=Math.floor(V*nt),tt===!0&&(e.style.width=A+"px",e.style.height=V+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(et*nt,lt*nt).floor()},this.setDrawingBufferSize=function(A,V,tt){et=A,lt=V,nt=tt,e.width=Math.floor(A*tt),e.height=Math.floor(V*tt),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(M===je){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(bt)},this.setViewport=function(A,V,tt,$){A.isVector4?bt.set(A.x,A.y,A.z,A.w):bt.set(A,V,tt,$),Mt.viewport(O.copy(bt).multiplyScalar(fn()).round())},this.getScissor=function(A){return A.copy(Ot)},this.setScissor=function(A,V,tt,$){A.isVector4?Ot.set(A.x,A.y,A.z,A.w):Ot.set(A,V,tt,$),Mt.scissor(z.copy(Ot).multiplyScalar(fn()).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(A){Mt.setScissorTest(Ft=A)},this.setOpaqueSort=function(A){pt=A},this.setTransparentSort=function(A){Bt=A},this.getClearColor=function(A){return A.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,tt=!0){let $=0;if(A){let Q=!1;if(Z!==null){const vt=Z.texture.format;Q=m.has(vt)}if(Q){const vt=Z.texture.type,wt=g.has(vt),xt=G.getClearColor(),Et=G.getClearAlpha(),Ct=xt.r,kt=xt.g,qt=xt.b;wt?(S[0]=Ct,S[1]=kt,S[2]=qt,S[3]=Et,q.clearBufferuiv(q.COLOR,0,S)):(_[0]=Ct,_[1]=kt,_[2]=qt,_[3]=Et,q.clearBufferiv(q.COLOR,0,_))}else $|=q.COLOR_BUFFER_BIT}V&&($|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&($|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&q.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),G.dispose(),_t.dispose(),st.dispose(),Gt.dispose(),Nt.dispose(),I.dispose(),ct.dispose(),J.dispose(),ft.dispose(),Pt.dispose(),ot.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",vu),ht.removeEventListener("sessionend",Mu),Ci.stop()};function Dt(A){A.preventDefault(),ql("WebGLRenderer: Context Lost."),C=!0}function Ht(){ql("WebGLRenderer: Context Restored."),C=!1;const A=De.autoReset,V=mt.enabled,tt=mt.autoUpdate,$=mt.needsUpdate,Q=mt.type;Wt(),De.autoReset=A,mt.enabled=V,mt.autoUpdate=tt,mt.needsUpdate=$,mt.type=Q}function yt(A){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function le(A){const V=A.target;V.removeEventListener("dispose",le),Fe(V)}function Fe(A){_i(A),Nt.remove(A)}function _i(A){const V=Nt.get(A).programs;V!==void 0&&(V.forEach(function(tt){ot.releaseProgram(tt)}),A.isShaderMaterial&&ot.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,tt,$,Q,vt){V===null&&(V=un);const wt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,xt=fv(A,V,tt,$,Q);Mt.setMaterial($,wt);let Et=tt.index,Ct=1;if($.wireframe===!0){if(Et=J.getWireframeAttribute(tt),Et===void 0)return;Ct=2}const kt=tt.drawRange,qt=tt.attributes.position;let Tt=kt.start*Ct,Zt=(kt.start+kt.count)*Ct;vt!==null&&(Tt=Math.max(Tt,vt.start*Ct),Zt=Math.min(Zt,(vt.start+vt.count)*Ct)),Et!==null?(Tt=Math.max(Tt,0),Zt=Math.min(Zt,Et.count)):qt!=null&&(Tt=Math.max(Tt,0),Zt=Math.min(Zt,qt.count));const Ee=Zt-Tt;if(Ee<0||Ee===1/0)return;ft.setup(Q,$,xt,tt,Et);let ue,ce=it;if(Et!==null&&(ue=w.get(Et),ce=gt,ce.setIndex(ue)),Q.isMesh)$.wireframe===!0?(Mt.setLineWidth($.wireframeLinewidth*fn()),ce.setMode(q.LINES)):ce.setMode(q.TRIANGLES);else if(Q.isLine){let We=$.linewidth;We===void 0&&(We=1),Mt.setLineWidth(We*fn()),Q.isLineSegments?ce.setMode(q.LINES):Q.isLineLoop?ce.setMode(q.LINE_LOOP):ce.setMode(q.LINE_STRIP)}else Q.isPoints?ce.setMode(q.POINTS):Q.isSprite&&ce.setMode(q.TRIANGLES);if(Q.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))ce.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const We=Q._multiDrawStarts,At=Q._multiDrawCounts,$e=Q._multiDrawCount,ie=Et?w.get(Et).bytesPerElement:1,Pi=Nt.get($).currentProgram.getUniforms();for(let Xe=0;Xe<$e;Xe++)Pi.setValue(q,"_gl_DrawID",Xe),ce.render(We[Xe]/ie,At[Xe])}else if(Q.isInstancedMesh)ce.renderInstances(Tt,Ee,Q.count);else if(tt.isInstancedBufferGeometry){const We=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,At=Math.min(tt.instanceCount,We);ce.renderInstances(Tt,Ee,At)}else ce.render(Tt,Ee)};function _u(A,V,tt,$){N!==null&&A.isNodeMaterial&&N.setObject($,A),ae===!0&&rt.setState(A,tt,!1),A.transparent===!0&&A.side===Ie&&A.forceSinglePass===!1?(A.side=Ye,A.needsUpdate=!0,Ys(A,V,$),A.side=ii,A.needsUpdate=!0,Ys(A,V,$),A.side=Ie):Ys(A,V,$)}this.compile=function(A,V,tt=null){tt===null&&(tt=A),N!==null&&N.renderStart(A,V,tt),b=st.get(tt),b.init(V),y.push(b),tt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(b.pushLight(Q),Q.castShadow&&b.pushShadow(Q))}),A!==tt&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(b.pushLight(Q),Q.castShadow&&b.pushShadow(Q))}),b.setupLights(),N!==null&&N.updateLights(b.state.lightsArray),be=this.localClippingEnabled,ae=rt.init(this.clippingPlanes,be),ae===!0&&rt.setGlobalState(this.clippingPlanes,V),N!==null&&mt.render(b.state.shadowsArray,tt,V);const $=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const vt=Q.material;if(vt)if(Array.isArray(vt))for(let wt=0;wt<vt.length;wt++){const xt=vt[wt];_u(xt,tt,V,Q),$.add(xt)}else _u(vt,tt,V,Q),$.add(vt)}),b=y.pop(),N!==null&&N.renderEnd(),$},this.compileAsync=function(A,V,tt=null){const $=this.compile(A,V,tt);return new Promise(Q=>{function vt(){if($.forEach(function(wt){const Et=Nt.get(wt).currentProgram;(Et===void 0||Et.isReady())&&$.delete(wt)}),$.size===0){Q(A);return}setTimeout(vt,10)}pe.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let yl=null;function uv(A){yl&&yl(A)}function vu(){Ci.stop()}function Mu(){Ci.start()}const Ci=new Qc;Ci.setAnimationLoop(uv),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(A){yl=A,ht.setAnimationLoop(A),A===null?Ci.stop():Ci.start()},ht.addEventListener("sessionstart",vu),ht.addEventListener("sessionend",Mu),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;N!==null&&N.renderStart(A,V);const tt=ht.enabled===!0&&ht.isPresenting===!0,$=T!==null&&(Z===null||tt)&&T.begin(R,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(V),V=ht.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,V,Z),b=st.get(A,y.length),b.init(V),b.state.textureUnits=Gt.getTextureUnits(),y.push(b),oe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?Qt.setFromArrayCamera(V):It.setFromProjectionMatrix(oe,_n,V.reversedDepth),be=this.localClippingEnabled,ae=rt.init(this.clippingPlanes,be),E=_t.get(A,x.length),E.init(),x.push(E),this.info.render.frame++,ht.enabled===!0&&ht.isPresenting===!0){const wt=R.xr.getDepthSensingMesh();wt!==null&&bl(wt,V,-1/0,R.sortObjects)}bl(A,V,0,R.sortObjects),E.finish(),N!==null&&N.updateLights(b.state.lightsArray),R.sortObjects===!0&&E.sort(pt,Bt),dn=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,dn&&G.addToRenderList(E,A),this.info.autoReset===!0&&this.info.reset(),ae===!0&&rt.beginShadows();const Q=b.state.shadowsArray;if(mt.render(Q,A,V),ae===!0&&rt.endShadows(),($&&T.hasRenderPass())===!1){const wt=E.opaque,xt=E.transmissive;if(b.setupLights(),V.isArrayCamera){const Et=V.cameras;if(xt.length>0)for(let Ct=0,kt=Et.length;Ct<kt;Ct++){const qt=Et[Ct];yu(wt,xt,A,qt)}dn&&G.render(A);for(let Ct=0,kt=Et.length;Ct<kt;Ct++){const qt=Et[Ct];Su(E,A,qt,qt.viewport)}}else xt.length>0&&yu(wt,xt,A,V),dn&&G.render(A),Su(E,A,V)}Z!==null&&L===0&&(Gt.updateMultisampleRenderTarget(Z),Gt.updateRenderTargetMipmap(Z)),$&&T.end(R),A.isScene===!0&&A.onAfterRender(R,A,V),ft.resetDefaultState(),Y=-1,U=null,y.pop(),y.length>0?(b=y[y.length-1],Gt.setTextureUnits(b.state.textureUnits),ae===!0&&rt.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,N!==null&&N.renderEnd()};function bl(A,V,tt,$){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)tt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){const wt=V.isArrayCamera?Qt:It;if(!A.frustumCulled||A.intersectsFrustum(wt)){$&&se.setFromMatrixPosition(A.matrixWorld).applyMatrix4(oe);const xt=ct.update(A),Et=A.material;Et.visible&&E.push(A,xt,Et,tt,se.z,null,V)}}else if(A.isMesh||A.isLine||A.isPoints){const wt=V.isArrayCamera?Qt:It;if(!A.frustumCulled||A.intersectsFrustum(wt)){const xt=ct.update(A),Et=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),se.copy(A.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),se.copy(xt.boundingSphere.center)),se.applyMatrix4(A.matrixWorld).applyMatrix4(oe)),Array.isArray(Et)){const Ct=xt.groups;for(let kt=0,qt=Ct.length;kt<qt;kt++){const Tt=Ct[kt],Zt=Et[Tt.materialIndex];Zt&&Zt.visible&&E.push(A,xt,Zt,tt,se.z,Tt,V)}}else Et.visible&&E.push(A,xt,Et,tt,se.z,null,V)}}}const vt=A.children;for(let wt=0,xt=vt.length;wt<xt;wt++)bl(vt[wt],V,tt,$)}function Su(A,V,tt,$){const{opaque:Q,transmissive:vt,transparent:wt}=A;b.setupLightsView(tt),ae===!0&&rt.setGlobalState(R.clippingPlanes,tt),$&&Mt.viewport(O.copy($)),Q.length>0&&ra(Q,V,tt),vt.length>0&&ra(vt,V,tt),wt.length>0&&ra(wt,V,tt),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function yu(A,V,tt,$){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[$.id]===void 0){const Tt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[$.id]=new Dn(1,1,{generateMipmaps:!0,type:Tt?xn:je,minFilter:Cn,samples:Math.max(4,me.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}const vt=b.state.transmissionRenderTarget[$.id],wt=$.viewport||O;vt.setSize(wt.z*R.transmissionResolutionScale,wt.w*R.transmissionResolutionScale);const xt=R.getRenderTarget(),Et=R.getActiveCubeFace(),Ct=R.getActiveMipmapLevel();R.setRenderTarget(vt),R.getClearColor(F),K=R.getClearAlpha(),K<1&&R.setClearColor(16777215,.5),R.clear(),dn&&G.render(tt);const kt=R.toneMapping;R.toneMapping=Hn;const qt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),b.setupLightsView($),ae===!0&&rt.setGlobalState(R.clippingPlanes,$),ra(A,tt,$),Gt.updateMultisampleRenderTarget(vt),Gt.updateRenderTargetMipmap(vt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let Zt=0,Ee=V.length;Zt<Ee;Zt++){const ue=V[Zt],{object:ce,geometry:We,material:At,group:$e}=ue;if(At.side===Ie&&ce.layers.test($.layers)){const ie=At.side;At.side=Ye,At.needsUpdate=!0,bu(ce,tt,$,We,At,$e),At.side=ie,At.needsUpdate=!0,Tt=!0}}Tt===!0&&(Gt.updateMultisampleRenderTarget(vt),Gt.updateRenderTargetMipmap(vt))}R.setRenderTarget(xt,Et,Ct),R.setClearColor(F,K),qt!==void 0&&($.viewport=qt),R.toneMapping=kt}function ra(A,V,tt){const $=V.isScene===!0?V.overrideMaterial:null;for(let Q=0,vt=A.length;Q<vt;Q++){const wt=A[Q],{object:xt,geometry:Et,group:Ct}=wt;let kt=wt.material;kt.allowOverride===!0&&$!==null&&(kt=$),xt.layers.test(tt.layers)&&bu(xt,V,tt,Et,kt,Ct)}}function bu(A,V,tt,$,Q,vt){N!==null&&Q.isNodeMaterial&&N.setObject(A,Q),A.onBeforeRender(R,V,tt,$,Q,vt),A.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(R,V,tt,$,A,vt),Q.transparent===!0&&Q.side===Ie&&Q.forceSinglePass===!1?(Q.side=Ye,Q.needsUpdate=!0,R.renderBufferDirect(tt,V,$,Q,A,vt),Q.side=ii,Q.needsUpdate=!0,R.renderBufferDirect(tt,V,$,Q,A,vt),Q.side=Ie):R.renderBufferDirect(tt,V,$,Q,A,vt),A.onAfterRender(R,V,tt,$,Q,vt)}function Eu(A){let V=0;for(const tt of A)tt.texture!==null&&V++;return V}function Ys(A,V,tt){V.isScene!==!0&&(V=un);const $=Nt.get(A),Q=b.state.lights,vt=b.state.shadowsArray,wt=Q.state.version,xt=ot.getParameters(A,Q.state,vt,V,tt,b.state.lightProbeGridArray),Et=ot.getProgramCacheKey(xt);let Ct=$.programs;$.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,$.fog=V.fog;const kt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;$.envMap=I.get(A.envMap||$.environment,kt),$.envMapRotation=$.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Ct===void 0&&(A.addEventListener("dispose",le),Ct=new Map,$.programs=Ct,$.programVariants=new Map);let qt=Ct.get(Et);if(qt!==void 0){if($.currentProgram===qt&&$.lightsStateVersion===wt)return Tu(A,xt),qt}else xt.uniforms=ot.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,tt,xt),A.onBeforeCompile(xt,R),qt=ot.acquireProgram(xt,Et),Ct.set(Et,qt),$.uniforms=xt.uniforms;const Tt=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Tt.clippingPlanes=rt.uniform),Tu(A,xt),$.needsLights=mv(A),$.lightsStateVersion=wt,$.needsLights&&(Tt.ambientLightColor.value=Q.state.ambient,Tt.lightProbe.value=Q.state.probe,Tt.sunLights.value=Q.state.sun,Tt.sunLightShadows.value=Q.state.sunShadow,Tt.directionalLights.value=Q.state.directional,Tt.directionalLightShadows.value=Q.state.directionalShadow,Tt.spotLights.value=Q.state.spot,Tt.spotLightShadows.value=Q.state.spotShadow,Tt.rectAreaLights.value=Q.state.rectArea,Tt.ltc_1.value=Q.state.rectAreaLTC1,Tt.ltc_2.value=Q.state.rectAreaLTC2,Tt.pointLights.value=Q.state.point,Tt.pointLightShadows.value=Q.state.pointShadow,Tt.hemisphereLights.value=Q.state.hemi,Tt.sunShadowMatrix.value=Q.state.sunShadowMatrix,Tt.sunShadowCascade.value=Q.state.sunShadowCascade,Tt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Tt.spotLightMatrix.value=Q.state.spotLightMatrix,Tt.spotLightMap.value=Q.state.spotLightMap,Tt.pointShadowMatrix.value=Q.state.pointShadowMatrix),$.numLightProbeGrids=Eu(b.state.lightProbeGridArray),$.currentProgram=qt,$.uniformsList=null,qt}function dv(A,V,tt,$,Q){const vt=Nt.get(A),wt=vt.currentProgram.id+","+$+","+Q;let xt=vt.programVariants.get(wt);return xt===void 0?(xt=Ys(A,V,tt),vt.programVariants.set(wt,xt)):(vt.currentProgram=xt,vt.uniformsList=null,vt.outputColorSpace=$,vt.toneMapping=Q),xt}function wu(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Gr.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Tu(A,V){const tt=Nt.get(A);tt.outputColorSpace=V.outputColorSpace,tt.batching=V.batching,tt.batchingColor=V.batchingColor,tt.instancing=V.instancing,tt.instancingColor=V.instancingColor,tt.instancingMorph=V.instancingMorph,tt.skinning=V.skinning,tt.morphTargets=V.morphTargets,tt.morphNormals=V.morphNormals,tt.morphColors=V.morphColors,tt.morphTargetsCount=V.morphTargetsCount,tt.numClippingPlanes=V.numClippingPlanes,tt.numIntersection=V.numClipIntersection,tt.vertexAlphas=V.vertexAlphas,tt.vertexTangents=V.vertexTangents,tt.toneMapping=V.toneMapping}function fv(A,V,tt,$,Q){V.isScene!==!0&&(V=un),Gt.resetTextureUnits();const vt=V.fog,wt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?V.environment:null,xt=Z===null?R.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Kt.workingColorSpace,Et=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ct=I.get($.envMap||wt,Et),kt=$.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,qt=!!tt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Tt=!!tt.morphAttributes.position,Zt=!!tt.morphAttributes.normal,Ee=!!tt.morphAttributes.color;let ue=Hn;$.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ue=R.toneMapping);const ce=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,We=ce!==void 0?ce.length:0,At=Nt.get($),$e=b.state.lights;if(ae===!0&&(be===!0||A!==U)){const _e=A===U&&$.id===Y;rt.setState($,A,_e)}let ie=!1,Pi=!1;$.version===At.__version?At.needsLights&&At.lightsStateVersion!==$e.state.version||Q.isBatchedMesh&&At.batching===!1||!Q.isBatchedMesh&&At.batching===!0||Q.isBatchedMesh&&At.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&At.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&At.instancing===!1||!Q.isInstancedMesh&&At.instancing===!0||Q.isSkinnedMesh&&At.skinning===!1||!Q.isSkinnedMesh&&At.skinning===!0||Q.isInstancedMesh&&At.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&At.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&At.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&At.instancingMorph===!1&&Q.morphTexture!==null||At.envMap!==Ct||$.fog===!0&&At.fog!==vt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==rt.numPlanes||At.numIntersection!==rt.numIntersection)||At.vertexAlphas!==kt||At.vertexTangents!==qt||At.morphTargets!==Tt||At.morphNormals!==Zt||At.morphColors!==Ee||At.morphTargetsCount!==We||At.numLightProbeGrids!==Eu(b.state.lightProbeGridArray)?ie=!0:(At.outputColorSpace!==xt||At.toneMapping!==ue)&&(Pi=!0):(ie=!0,At.__version=$.version);let Xe=At.currentProgram;(ie===!0||Pi===!0)&&(Xe=Pi===!0?dv($,V,Q,xt,ue):Ys($,V,Q),N&&$.isNodeMaterial&&N.onUpdateProgram($,Xe,At));let aa=!1,vi=!1,Li=!1;const te=Xe.getUniforms(),ke=At.uniforms;if(Mt.useProgram(Xe.program)&&(aa=!0,vi=!0,Li=!0),$.id!==Y&&(Y=$.id,vi=!0),aa||U!==A){Mt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),te.setValue(q,"projectionMatrix",A.projectionMatrix),te.setValue(q,"viewMatrix",A.matrixWorldInverse);const Oe=te.map.cameraPosition;Oe!==void 0&&Oe.setValue(q,Me.setFromMatrixPosition(A.matrixWorld)),me.logarithmicDepthBuffer&&te.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&te.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,vi=!0,Li=!0)}if(At.needsLights&&($e.state.sunShadowMap.length>0&&te.setValue(q,"sunShadowMap",$e.state.sunShadowMap,Gt),$e.state.directionalShadowMap.length>0&&te.setValue(q,"directionalShadowMap",$e.state.directionalShadowMap,Gt),$e.state.spotShadowMap.length>0&&te.setValue(q,"spotShadowMap",$e.state.spotShadowMap,Gt),$e.state.pointShadowMap.length>0&&te.setValue(q,"pointShadowMap",$e.state.pointShadowMap,Gt)),Q.isSkinnedMesh){te.setOptional(q,Q,"bindMatrix"),te.setOptional(q,Q,"bindMatrixInverse");const _e=Q.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),te.setValue(q,"boneTexture",_e.boneTexture,Gt))}Q.isBatchedMesh&&(te.setOptional(q,Q,"batchingTexture"),te.setValue(q,"batchingTexture",Q._matricesTexture,Gt),te.setOptional(q,Q,"batchingIdTexture"),te.setValue(q,"batchingIdTexture",Q._indirectTexture,Gt),te.setOptional(q,Q,"batchingColorTexture"),Q._colorsTexture!==null&&te.setValue(q,"batchingColorTexture",Q._colorsTexture,Gt));const An=tt.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&at.update(Q,tt,Xe),(vi||At.receiveShadow!==Q.receiveShadow)&&(At.receiveShadow=Q.receiveShadow,te.setValue(q,"receiveShadow",Q.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&V.environment!==null&&(ke.envMapIntensity.value=V.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=Kg()),vi){if(te.setValue(q,"toneMappingExposure",R.toneMappingExposure),At.needsLights&&pv(ke,Li),vt&&$.fog===!0&&dt.refreshFogUniforms(ke,vt),dt.refreshMaterialUniforms(ke,$,nt,lt,b.state.transmissionRenderTarget[A.id]),At.needsLights&&At.numLightProbeGrids>0){const _e=v;let Oe=0;for(const ti of b.state.lightProbeGridArray)ti.texture!==null&&(_e.textures[Oe]=ti.texture,_e.min[Oe]=ti.boundingBox.min,_e.max[Oe]=ti.boundingBox.max,_e.resolution[Oe]=ti.resolution,Oe++);for(const ti in _e)_e[ti].length=Oe;ke.probesSH.value=_e.textures,ke.probesMin.value=_e.min,ke.probesMax.value=_e.max,ke.probesResolution.value=_e.resolution}Gr.upload(q,wu(At),ke,Gt)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Gr.upload(q,wu(At),ke,Gt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&te.setValue(q,"center",Q.center),te.setValue(q,"modelViewMatrix",Q.modelViewMatrix),te.setValue(q,"normalMatrix",Q.normalMatrix),te.setValue(q,"modelMatrix",Q.matrixWorld),$.uniformsGroups!==void 0){const _e=$.uniformsGroups;for(let Oe=0,ti=_e.length;Oe<ti;Oe++){const Ru=_e[Oe];Pt.update(Ru,Xe),Pt.bind(Ru,Xe)}}return Xe}function pv(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.sunLights.needsUpdate=V,A.sunLightShadows.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function mv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,V,tt){const $=Nt.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Nt.get(A.texture).__webglTexture=V,Nt.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:tt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){const tt=Nt.get(A);tt.__webglFramebuffer=V,tt.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,tt=0){Z=A,D=V,L=tt;let $=null,Q=!1,vt=!1;if(A){const xt=Nt.get(A);if(xt.__useDefaultFramebuffer!==void 0){Mt.bindFramebuffer(q.FRAMEBUFFER,xt.__webglFramebuffer),O.copy(A.viewport),z.copy(A.scissor),X=A.scissorTest,Mt.viewport(O),Mt.scissor(z),Mt.setScissorTest(X),Y=-1;return}else if(xt.__webglFramebuffer===void 0)Gt.setupRenderTarget(A);else if(xt.__hasExternalTextures)Gt.rebindTextures(A,Nt.get(A.texture).__webglTexture,Nt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const kt=A.depthTexture;if(xt.__boundDepthTexture!==kt){if(kt!==null&&Nt.has(kt)&&(A.width!==kt.image.width||A.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(A)}}const Et=A.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(vt=!0);const Ct=Nt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ct[V])?$=Ct[V][tt]:$=Ct[V],Q=!0):A.samples>0&&Gt.useMultisampledRTT(A)===!1?$=Nt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ct)?$=Ct[tt]:$=Ct,O.copy(A.viewport),z.copy(A.scissor),X=A.scissorTest}else O.copy(bt).multiplyScalar(nt).floor(),z.copy(Ot).multiplyScalar(nt).floor(),X=Ft;if(tt!==0&&($=B),Mt.bindFramebuffer(q.FRAMEBUFFER,$)&&Mt.drawBuffers(A,$),Mt.viewport(O),Mt.scissor(z),Mt.setScissorTest(X),Q){const xt=Nt.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+V,xt.__webglTexture,tt)}else if(vt){const xt=V;for(let Et=0;Et<A.textures.length;Et++){const Ct=Nt.get(A.textures[Et]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Et,Ct.__webglTexture,tt,xt)}}else if(A!==null&&tt!==0){const xt=Nt.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,xt.__webglTexture,tt)}Y=-1};function Au(A){const V=Nt.get(A);return(V.__readFormat!==A.format||V.__readType!==A.type)&&(V.__readFormat=A.format,V.__readType=A.type,V.__formatReadable=me.textureFormatReadable(A.format),V.__typeReadable=me.textureTypeReadable(A.type)),V}this.readRenderTargetPixels=function(A,V,tt,$,Q,vt,wt,xt=0){if(!(A&&A.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Nt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Et=Et[wt],Array.isArray(Et)&&(Et=Et[0])),Et){Mt.bindFramebuffer(q.FRAMEBUFFER,Et);try{const Ct=A.textures[xt],kt=Ct.format,qt=Ct.type;A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+xt);const Tt=Au(Ct);if(Tt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-$&&tt>=0&&tt<=A.height-Q&&q.readPixels(V,tt,$,Q,ut.convert(kt),ut.convert(qt),vt)}finally{const Ct=Z!==null?Nt.get(Z).__webglFramebuffer:null;Mt.bindFramebuffer(q.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(A,V,tt,$,Q,vt,wt,xt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Nt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Et=Et[wt],Array.isArray(Et)&&(Et=Et[0])),Et)if(V>=0&&V<=A.width-$&&tt>=0&&tt<=A.height-Q){Mt.bindFramebuffer(q.FRAMEBUFFER,Et);const Ct=A.textures[xt],kt=Ct.format,qt=Ct.type;A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+xt);const Tt=Au(Ct);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Zt),q.bufferData(q.PIXEL_PACK_BUFFER,vt.byteLength,q.STREAM_READ),q.readPixels(V,tt,$,Q,ut.convert(kt),ut.convert(qt),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const Ee=Z!==null?Nt.get(Z).__webglFramebuffer:null;Mt.bindFramebuffer(q.FRAMEBUFFER,Ee);const ue=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await hd(q,ue,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Zt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,vt),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Zt),q.deleteSync(ue),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,tt=0){const $=Math.pow(2,-tt),Q=Math.floor(A.image.width*$),vt=Math.floor(A.image.height*$),wt=V!==null?V.x:0,xt=V!==null?V.y:0;Gt.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,tt,0,0,wt,xt,Q,vt),Mt.unbindTexture()},this.copyTextureToTexture=function(A,V,tt=null,$=null,Q=0,vt=0){let wt,xt,Et,Ct,kt,qt,Tt,Zt,Ee;const ue=A.isCompressedTexture?A.mipmaps[vt]:A.image;if(tt!==null)wt=tt.max.x-tt.min.x,xt=tt.max.y-tt.min.y,Et=tt.isBox3?tt.max.z-tt.min.z:1,Ct=tt.min.x,kt=tt.min.y,qt=tt.isBox3?tt.min.z:0;else{const te=Math.pow(2,-Q);wt=Math.floor(ue.width*te),xt=Math.floor(ue.height*te),A.isDataArrayTexture?Et=ue.depth:A.isData3DTexture?Et=Math.floor(ue.depth*te):Et=1,Ct=0,kt=0,qt=0}$!==null?(Tt=$.x,Zt=$.y,Ee=$.z):(Tt=0,Zt=0,Ee=0);const ce=ut.convert(V.format),We=ut.convert(V.type);let At;V.isData3DTexture?(Gt.setTexture3D(V,0),At=q.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Gt.setTexture2DArray(V,0),At=q.TEXTURE_2D_ARRAY):(Gt.setTexture2D(V,0),At=q.TEXTURE_2D),Mt.activeTexture(q.TEXTURE0),Mt.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,V.flipY),Mt.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),Mt.pixelStorei(q.UNPACK_ALIGNMENT,V.unpackAlignment);const $e=Mt.getParameter(q.UNPACK_ROW_LENGTH),ie=Mt.getParameter(q.UNPACK_IMAGE_HEIGHT),Pi=Mt.getParameter(q.UNPACK_SKIP_PIXELS),Xe=Mt.getParameter(q.UNPACK_SKIP_ROWS),aa=Mt.getParameter(q.UNPACK_SKIP_IMAGES);Mt.pixelStorei(q.UNPACK_ROW_LENGTH,ue.width),Mt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ue.height),Mt.pixelStorei(q.UNPACK_SKIP_PIXELS,Ct),Mt.pixelStorei(q.UNPACK_SKIP_ROWS,kt),Mt.pixelStorei(q.UNPACK_SKIP_IMAGES,qt);const vi=A.isDataArrayTexture||A.isData3DTexture,Li=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){const te=Nt.get(A),ke=Nt.get(V),An=Nt.get(te.__renderTarget),_e=Nt.get(ke.__renderTarget);Mt.bindFramebuffer(q.READ_FRAMEBUFFER,An.__webglFramebuffer),Mt.bindFramebuffer(q.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Oe=0;Oe<Et;Oe++)vi&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Nt.get(A).__webglTexture,Q,qt+Oe),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Nt.get(V).__webglTexture,vt,Ee+Oe)),q.blitFramebuffer(Ct,kt,Ct+wt,kt+xt,Tt,Zt,Tt+wt,Zt+xt,q.DEPTH_BUFFER_BIT,q.NEAREST);Mt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||Nt.has(A)){const te=Nt.get(A),ke=Nt.get(V);Mt.bindFramebuffer(q.READ_FRAMEBUFFER,P),Mt.bindFramebuffer(q.DRAW_FRAMEBUFFER,k);for(let An=0;An<Et;An++)vi?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,te.__webglTexture,Q,qt+An):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,te.__webglTexture,Q),Li?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ke.__webglTexture,vt,Ee+An):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ke.__webglTexture,vt),Q!==0?q.blitFramebuffer(Ct,kt,Ct+wt,kt+xt,Tt,Zt,Tt+wt,Zt+xt,q.COLOR_BUFFER_BIT,q.NEAREST):Li?q.copyTexSubImage3D(At,vt,Tt,Zt,Ee+An,Ct,kt,wt,xt):q.copyTexSubImage2D(At,vt,Tt,Zt,Ct,kt,wt,xt);Mt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Li?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(At,vt,Tt,Zt,Ee,wt,xt,Et,ce,We,ue.data):V.isCompressedArrayTexture?q.compressedTexSubImage3D(At,vt,Tt,Zt,Ee,wt,xt,Et,ce,ue.data):q.texSubImage3D(At,vt,Tt,Zt,Ee,wt,xt,Et,ce,We,ue):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,vt,Tt,Zt,wt,xt,ce,We,ue.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,vt,Tt,Zt,ue.width,ue.height,ce,ue.data):q.texSubImage2D(q.TEXTURE_2D,vt,Tt,Zt,wt,xt,ce,We,ue);Mt.pixelStorei(q.UNPACK_ROW_LENGTH,$e),Mt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ie),Mt.pixelStorei(q.UNPACK_SKIP_PIXELS,Pi),Mt.pixelStorei(q.UNPACK_SKIP_ROWS,Xe),Mt.pixelStorei(q.UNPACK_SKIP_IMAGES,aa),vt===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&q.generateMipmap(At),Mt.unbindTexture()},this.initRenderTarget=function(A){Nt.get(A).__webglFramebuffer===void 0&&Gt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Gt.setTextureCube(A,0):A.isData3DTexture?Gt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Gt.setTexture2DArray(A,0):Gt.setTexture2D(A,0),Mt.unbindTexture()},this.resetState=function(){D=0,L=0,Z=null,Mt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}const Ph={type:"change"},$o={type:"start"},Lh={type:"end"},Hr=new gr,Dh=new In,Jg=Math.cos(70*he.DEG2RAD),Le=new W,Qe=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jo=1e-6;class Qg extends Ff{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kn.ROTATE,MIDDLE:kn.DOLLY,RIGHT:kn.PAN},this.touches={ONE:ni.ROTATE,TWO:ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new vn,this._lastTargetPosition=new W,this._quat=new vn().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ur,this._sphericalDelta=new Ur,this._scale=1,this._panOffset=new W,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new W,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tx.bind(this),this._onPointerDown=jg.bind(this),this._onPointerUp=ex.bind(this),this._onContextMenu=lx.bind(this),this._onMouseWheel=sx.bind(this),this._onKeyDown=rx.bind(this),this._onTouchStart=ax.bind(this),this._onTouchMove=ox.bind(this),this._onMouseDown=nx.bind(this),this._onMouseMove=ix.bind(this),this._interceptControlDown=cx.bind(this),this._interceptControlUp=hx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ne.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ph),this.update(),this.state=ne.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Le.copy(e).sub(this.target),Le.applyQuaternion(this._quat),this._spherical.setFromVector3(Le),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Qe:n>Math.PI&&(n-=Qe),s<-Math.PI?s+=Qe:s>Math.PI&&(s-=Qe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Le.setFromSpherical(this._spherical),Le.applyQuaternion(this._quatInverse),e.copy(this.target).add(Le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Le.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new W(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Hr.origin.copy(this.object.position),Hr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hr.direction))<Jg?this.object.lookAt(this.target):(Dh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hr.intersectPlane(Dh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Jo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jo||this._lastTargetPosition.distanceToSquared(this.target)>Jo?(this.dispatchEvent(Ph),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Qe/60*this.autoRotateSpeed*t:Qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Le.setFromMatrixColumn(e,0),Le.multiplyScalar(-t),this._panOffset.add(Le)}_panUp(t,e){this.screenSpacePanning===!0?Le.setFromMatrixColumn(e,1):(Le.setFromMatrixColumn(e,0),Le.crossVectors(this.object.up,Le)),Le.multiplyScalar(t),this._panOffset.add(Le)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Le.copy(s).sub(this.target);let r=Le.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function jg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function tx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ex(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lh),this.state=ne.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function nx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case kn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ne.DOLLY;break;case kn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}break;case kn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent($o)}function ix(i){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function sx(i){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(i.preventDefault(),this.dispatchEvent($o),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Lh))}function rx(i){this.enabled!==!1&&this._handleKeyDown(i)}function ax(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ni.ROTATE:if(this.enableRotate===!1){this.state=ne.NONE;break}this._handleTouchStartRotate(i),this.state=ne.TOUCH_ROTATE;break;case ni.PAN:if(this.enablePan===!1){this.state=ne.NONE;break}this._handleTouchStartPan(i),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case ni.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ne.TOUCH_DOLLY_PAN;break;case ni.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent($o)}function ox(i){switch(this._trackPointer(i),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ne.NONE}}function lx(i){this.enabled!==!1&&i.preventDefault()}function cx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Qo=new In,Vr=new Uf,ns=new Lt,jo=new W;class ux extends Qg{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:kn.PAN,MIDDLE:kn.DOLLY,RIGHT:kn.ROTATE},this.touches={ONE:ni.PAN,TWO:ni.DOLLY_ROTATE},this._panWorldStart=new W}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;Qo.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();ns.x=(t.clientX-n.left)/n.width*2-1,ns.y=-((t.clientY-n.top)/n.height)*2+1,Vr.setFromCamera(ns,this.object),Vr.ray.intersectPlane(Qo,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();ns.x=(t.clientX-n.left)/n.width*2-1,ns.y=-((t.clientY-n.top)/n.height)*2+1,Vr.setFromCamera(ns,this.object),Vr.ray.intersectPlane(Qo,jo)&&(jo.sub(this._panWorldStart),this._panOffset.copy(jo).negate(),this.update())}}const Wr=new Rt;function H(i){return Wr.set(i),[Wr.r,Wr.g,Wr.b]}function $t(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function zs(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function ze(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class Jt{constructor(){j(this,"pos",[]);j(this,"nor",[]);j(this,"col",[]);j(this,"glo",[]);j(this,"ox",0);j(this,"oy",0);j(this,"oz",0);j(this,"c",1);j(this,"s",0)}get vertexCount(){return this.pos.length/3}gradientY(t,e,n,s,r){for(let a=t*3;a<this.pos.length;a+=3){const o=he.clamp((this.pos[a+1]-e)/(n-e),0,1);for(let l=0;l<3;l++)this.col[a+l]=s[l]+(r[l]-s[l])*o}}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,a,o,l,c,h,u=0){const f=this.wx(t,n),d=this.wz(t,n),p=this.oy+e,M=this.wx(s,a),m=this.wz(s,a),g=this.oy+r,S=this.wx(o,c),_=this.wz(o,c),v=this.oy+l,E=M-f,b=g-p,x=m-d,y=S-f,T=v-p,R=_-d;let C=b*R-x*T,N=x*y-E*R,B=E*T-b*y;const P=Math.hypot(C,N,B)||1;C/=P,N/=P,B/=P,this.pos.push(f,p,d,M,g,m,S,v,_),this.nor.push(C,N,B,C,N,B,C,N,B),this.col.push(h[0],h[1],h[2],h[0],h[1],h[2],h[0],h[1],h[2]),this.glo.push(u,u,u)}quad(t,e,n,s,r,a,o,l,c,h,u,f,d,p=0){this.tri(t,e,n,s,r,a,o,l,c,d,p),this.tri(t,e,n,o,l,c,h,u,f,d,p)}box(t,e,n,s,r,a,o,l=void 0,c=null,h=0){this.quad(t,e,a,s,e,a,s,r,a,t,r,a,o,h),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,o,h),this.quad(s,e,a,s,e,n,s,r,n,s,r,a,o,h),this.quad(t,e,n,t,e,a,t,r,a,t,r,n,o,h),l!==null&&this.quad(t,r,a,s,r,a,s,r,n,t,r,n,l??o,h),c&&this.quad(t,e,n,s,e,n,s,e,a,t,e,a,c,h)}cyl(t,e,n,s,r,a,o,l,c=null,h=0){const u=e+a;for(let f=0;f<o;f++){const d=f/o*Math.PI*2,p=(f+1)/o*Math.PI*2,M=Math.cos(d),m=Math.sin(d),g=Math.cos(p),S=Math.sin(p);r>1e-4?(this.quad(t+M*s,e,n+m*s,t+M*r,u,n+m*r,t+g*r,u,n+S*r,t+g*s,e,n+S*s,l,h),c&&this.tri(t,u,n,t+g*r,u,n+S*r,t+M*r,u,n+m*r,c,h)):this.tri(t+M*s,e,n+m*s,t,u,n,t+g*s,e,n+S*s,l,h)}}blob(t,e,n,s,r,a,o,l,c,h,u=0){const f=h??c;for(let d=0;d<l;d++){const p=d/l*Math.PI,M=(d+1)/l*Math.PI,m=Math.cos(p),g=Math.cos(M),S=Math.sin(p),_=Math.sin(M),v=zs(c,f,1-(d+.5)/l);for(let E=0;E<o;E++){const b=E/o*Math.PI*2,x=(E+1)/o*Math.PI*2,y=Math.cos(b),T=Math.sin(b),R=Math.cos(x),C=Math.sin(x),N=t+y*S*s,B=e+m*r,P=n+T*S*a,k=t+R*S*s,D=n+C*S*a,L=t+y*_*s,Z=e+g*r,Y=n+T*_*a,U=t+R*_*s,O=n+C*_*a;d>0&&this.tri(N,B,P,k,B,D,U,Z,O,v,u),d<l-1&&this.tri(N,B,P,U,Z,O,L,Z,Y,v,u)}}}walls(t,e,n,s,r=0){const a=t.length/2,o=tl(t)>0;for(let l=0;l<a;l++){const c=(l+1)%a,h=t[l*2],u=t[l*2+1],f=t[c*2],d=t[c*2+1];o?this.quad(f,e,d,h,e,u,h,n,u,f,n,d,s,r):this.quad(h,e,u,f,e,d,f,n,d,h,n,u,s,r)}}cap(t,e,n,s=0){const r=t.length/2,a=[];for(let l=0;l<r;l++)a.push(new Lt(t[l*2],t[l*2+1]));const o=Fo.triangulateShape(a,[]);for(const l of o){const c=a[l[0]],h=a[l[1]],u=a[l[2]];(h.x-c.x)*(u.y-c.y)-(h.y-c.y)*(u.x-c.x)>0?this.tri(c.x,e,c.y,u.x,e,u.y,h.x,e,h.y,n,s):this.tri(c.x,e,c.y,h.x,e,h.y,u.x,e,u.y,n,s)}}build(){const t=new Re;return t.setAttribute("position",new Ae(new Float32Array(this.pos),3)),t.setAttribute("normal",new Ae(new Float32Array(this.nor),3)),t.setAttribute("color",new Ae(new Float32Array(this.col),3)),t.setAttribute("glow",new Ae(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function tl(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const Xr={value:0};function is(i={}){const t=new $n({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??Ie}),e=new Rt(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=Xr,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>"inverloch-model",t}function Yr(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=Xr,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.82 * uNight;`)},i.customProgramCacheKey=()=>"inverloch-unlit",i}const Jn={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},dx=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
  gl_Position = p.xyww;
}`,fx=`
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
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;class px{constructor(t,e,n){j(this,"sun",new If(16777215,3));j(this,"hemi",new Pf(16777215,8947848,1));j(this,"sky");j(this,"horizon",{value:new Rt});j(this,"sunDir",new W);j(this,"skyUniforms");j(this,"from");j(this,"to");j(this,"t",1);j(this,"mode","day");this.renderer=t,this.water=e,this.from=this.to=Jn.day,this.skyUniforms={uZenith:{value:new Rt},uHorizon:this.horizon,uBelow:{value:new Rt},uSunDir:{value:new W},uSunColor:{value:new Rt},uSunGlow:{value:1},uNight:{value:0}},this.sky=new Yt(new zo(1,32,16),new nn({uniforms:this.skyUniforms,vertexShader:dx,fragmentShader:fx,side:Ye,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,n>0&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n),this.sun.shadow.radius=1.5),this.apply(1)}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=Jn[t],this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=he.clamp(e*.7,90,2400),s=this.sun.shadow,r=s.camera,a=n*2/s.mapSize.x,o=Math.round(t.x/a)*a,l=Math.round(t.z/a)*a,c=n*2.4+300;this.sun.target.position.set(o,0,l),this.sun.position.set(o,0,l).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=he.clamp(a*1.6,.06,1.2))}setSolar(t){const e=(t%1440+1440)%1440,n=6*60,s=20.5*60;let r,a;if(e>=n&&e<=s)a=(e-n)/(s-n),r=Math.sin(Math.PI*a)*70;else{const p=((e<n?e+1440:e)-s)/(1440-(s-n));a=p<.5?1:0,r=-Math.sin(Math.PI*p)*40}const o=he.degToRad(110*(1-2*a)),l=he.degToRad(Math.max(r,5)),c=[Math.sin(o)*Math.cos(l),Math.sin(l),-Math.cos(o)*Math.cos(l)];let h;r>=25?h=Jn.day:r>=6?h=el(Jn.golden,Jn.day,(r-6)/19):r>=-6?h=el(Jn.night,Jn.golden,(r+6)/12):h=Jn.night;const u=he.clamp((2-r)/6,0,1),f=Jn.night.sunDir,d=[c[0]+(f[0]-c[0])*u,c[1]+(f[1]-c[1])*u,c[2]+(f[2]-c[2])*u];this.from=this.to={...h,sunDir:d},this.mode=r>=25?"day":r>=-6?"golden":"night",this.apply(1)}snapshot(){return el(this.from,this.to,mx(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night;const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new Rt(e.shallow),.35),Xr.value=e.night,this.renderer.toneMappingExposure=e.exposure}}function mx(i){return i*i*(3-2*i)}function el(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,a)=>new Rt(r).lerp(new Rt(a),e).getHex(),s=(r,a)=>r+(a-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}const Bn=1.5;class Ih{constructor(t,e,n,s,r,a,o,l){j(this,"nx");j(this,"nz");j(this,"y");j(this,"xMin");j(this,"zMin");j(this,"xMax");j(this,"zMax");j(this,"dx");j(this,"dz");j(this,"cellX");j(this,"cellZ");if(this.raw=t,this.exposure=e,this.w=n,this.h=s,this.sizeX=r,this.sizeZ=a,this.cellX=r/n,this.cellZ=a/s,this.nx=Math.floor((n-1)/o)+1,this.nz=Math.floor((s-1)/o)+1,this.dx=this.cellX*o,this.dz=this.cellZ*o,this.xMin=-r/2+this.cellX/2,this.zMin=-a/2+this.cellZ/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=l??new Float32Array(this.nx*this.nz),!l)for(let c=0;c<this.nz;c++)for(let h=0;h<this.nx;h++)this.y[c*this.nx+h]=t[c*o*n+h*o]*Bn}yAt(t,e){let n=(t-this.xMin)/this.dx,s=(e-this.zMin)/this.dz;n<0?n=0:n>this.nx-1.0001&&(n=this.nx-1.0001),s<0?s=0:s>this.nz-1.0001&&(s=this.nz-1.0001);const r=n|0,a=s|0,o=n-r,l=s-a,c=a*this.nx+r,h=this.y[c],u=this.y[c+1],f=this.y[c+this.nx],d=this.y[c+this.nx+1];return o+l<=1?h+(u-h)*o+(f-h)*l:d+(f-d)*(1-o)+(u-d)*(1-l)}bilinear(t,e,n){let s=(e+this.sizeX/2)/this.cellX-.5,r=(n+this.sizeZ/2)/this.cellZ-.5;s<0?s=0:s>this.w-1.0001&&(s=this.w-1.0001),r<0?r=0:r>this.h-1.0001&&(r=this.h-1.0001);const a=s|0,o=r|0,l=s-a,c=r-o,h=o*this.w+a;return(t[h]*(1-l)+t[h+1]*l)*(1-c)+(t[h+this.w]*(1-l)+t[h+this.w+1]*l)*c}metresAt(t,e){return this.bilinear(this.raw,t,e)}exposureAt(t,e){return this.bilinear(this.exposure,t,e)}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}}const qr=128;function gx(i,t,e){const{nx:n,nz:s}=i,r=Math.min(qr+1,n-t),a=Math.min(qr+1,s-e),o=new Float32Array(r*a*3),l=new Float32Array(r*a*3),c=new Float32Array(r*a*2);for(let f=e;f<e+a;f++)for(let d=t;d<t+r;d++){const p=(f-e)*r+d-t,M=i.xMin+d*i.dx,m=i.zMin+f*i.dz;o[p*3]=M,o[p*3+1]=i.y[f*n+d],o[p*3+2]=m,c[p*2]=(M+i.sizeX/2)/i.sizeX,c[p*2+1]=1-(m+i.sizeZ/2)/i.sizeZ;const g=i.y[f*n+Math.max(d-1,0)],S=i.y[f*n+Math.min(d+1,n-1)],_=i.y[Math.max(f-1,0)*n+d],v=i.y[Math.min(f+1,s-1)*n+d],E=(S-g)/(2*i.dx),b=(v-_)/(2*i.dz),x=Math.hypot(E,1,b);l[p*3]=-E/x,l[p*3+1]=1/x,l[p*3+2]=-b/x}const h=new Uint16Array((r-1)*(a-1)*6);let u=0;for(let f=0;f<a-1;f++)for(let d=0;d<r-1;d++){const p=f*r+d,M=p+1,m=p+r,g=m+1;h[u++]=p,h[u++]=m,h[u++]=M,h[u++]=M,h[u++]=m,h[u++]=g}return{pos:o,nor:l,uv:c,idx:h}}function xx(i){const t=[];for(let e=0;e<i.nz-1;e+=qr)for(let n=0;n<i.nx-1;n+=qr)t.push(gx(i,n,e));return t}const nl=10,_x=5,ss=4,vx=3;function Zr(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Int16Array(e.buffer,0,e.length>>1)}async function Mx(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,a=0,o=0,l=0;const c=[];for(;n<t.length;){const M=e.getUint32(n),m=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(m==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),a=t[n+16],o=t[n+17],l=t[n+20];else if(m==="IDAT")c.push(t.subarray(n+8,n+8+M));else if(m==="IEND")break;n+=12+M}if(a!==8||o!==2&&o!==6||l)throw new Error("Unsupported terrain image format");const h=o===2?3:4,u=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),f=new Uint8Array(await new Response(u).arrayBuffer()),d=s*h,p=new Uint8Array(d*r);for(let M=0;M<r;M++){const m=f[M*(d+1)],g=M*(d+1)+1,S=M*d;for(let _=0;_<d;_++){const v=_>=h?p[S+_-h]:0,E=M>0?p[S-d+_]:0,b=_>=h&&M>0?p[S-d+_-h]:0;let x=f[g+_];if(m===1)x+=v;else if(m===2)x+=E;else if(m===3)x+=v+E>>1;else if(m===4){const y=Math.abs(E-b),T=Math.abs(v-b),R=Math.abs(v+E-2*b);x+=y<=T&&y<=R?v:T<=R?E:b}p[S+_]=x&255}}return{width:s,height:r,channels:h,data:p}}async function Sx(i,t,e){const[n,s]=await Promise.all([fetch(i.town,{signal:e}).then(u=>{if(!u.ok)throw new Error("Could not load the town data");return u.json()}).then(u=>(t("Streets and buildings"),u)),fetch(i.height,{signal:e}).then(u=>{if(!u.ok)throw new Error("Could not load the terrain");return u.arrayBuffer()}).then(Mx).then(u=>(t("Terrain"),u))]);if(e.aborted)throw e.reason;const{meta:r}=n,a=s.width*s.height,o=new Float32Array(a),l=new Float32Array(a),c=s.channels;for(let u=0;u<a;u++)o[u]=(s.data[u*c]<<8|s.data[u*c+1])/r.heightScale-r.heightOffset,l[u]=s.data[u*c+2]/255;const h=new Ih(o,l,r.grid[0],r.grid[1],r.size[0],r.size[1],i.terrainStep);return{town:{...n,houses:Zr(n.houses),cabins:Zr(n.cabins),cars:Zr(n.cars),trees:Zr(n.trees)},heights:o,exposure:l,surface:h.y,terrainTiles:xx(h)}}async function yx(i,t,e,n,s){const r=new Set,a=h=>{s.aborted||r.has(h)||(r.add(h),e(r.size/4,h))};e(0,"Fetching map data");const o={town:new URL(i.town,document.baseURI).href,height:new URL(i.height,document.baseURI).href,terrainStep:t},l=n.run({kind:"world",source:o},()=>Sx(o,a,s),s,a),c=new Cf().loadAsync(i.ground).then(h=>(a("Ground texture"),h));try{const[h,u]=await Promise.all([l,c]);if(s.aborted)throw s.reason;return u.colorSpace=Te,u.anisotropy=8,u.generateMipmaps=!0,u.minFilter=Cn,a("Building the model"),{...h,ground:u}}catch(h){throw c.then(u=>u.dispose(),()=>{}),h}}const il=[["24",[-1702,305.08,12.22,9.68,-.7524],1,2,7232070,12103050,"v","o"],["22",[-1686.64,316,11.46,8.62,-.3855],2,1,9344923,13224902,"b","o"],["22 (garage)",[-1679.45,321.49,4.21,3.67,-.4978],1,3,9344923,13224902,"","t"],["20",[-1668.03,323.49,7.44,11.59,-.0907],1,0,13018492,10722704,"g","o"],["18",[-1645.61,335.05,11.19,8.31,-.346],1,0,14206627,9145997,"","o"],["16",[-1616.02,330.47,14.65,10.49,-.4859],1,2,13485749,11971464,"","o"],["14",[-1610.3,354.63,11.28,9.08,-.3794,-1609.54,344.81,5.42,9.72,-.3794],1,1,15328729,8079926,"","o"],["14A",[-1594.08,360.97,8.66,9.66,-.4636],1,2,14275006,12365706,"","o"],["10",[-1572.46,363.32,13.65,23.59,-.3996],1,0,14865590,9409683,"g","o"],["outbuilding at 8",[-1563.96,372.87,7.3,6.68,-.4275],1,0,14078146,13947340,"","s"],["8",[-1556.98,362.95,8.83,17.59,-.4512,-1554.25,370.09,2.32,7.12,-.4512],1,3,15526108,15000798,"","o"],["6",[-1542.81,380.79,14.34,8.58,-.3577,-1539.06,376.26,10.48,2.55,-.3577],1,2,15328470,14869212,"","o"],["4",[-1530.34,391.35,11.21,5.66,.0312,-1528.02,387.1,6.31,2.71,.0312],1,1,10134438,14014161,"","o"],["2",[-1509.87,393.04,12.04,8.58,-.3975,-1510.39,386.54,6.05,3,-.3975],1,1,15262678,14474454,"","o"],["29",[-1729.27,353.38,8.8,16.67,2.8003],1,1,14209989,14803419,"","o"],["27",[-1712.88,352.46,13.74,8.15,2.847,-1712.42,359,9.08,4.1,2.847],1,0,13222836,9277840,"v","o"],["25",[-1703.96,376.48,9.87,17.42,2.8565],1,0,15129535,10135434,"v","o"],["23",[-1683.5,379.63,11,25,2.6798],1,2,15789800,15000798,"","t"],["21",[-1665.11,377.41,10.66,13.24,2.7699],1,0,12240814,9409425,"v","o"],["17",[-1639.74,395.06,10.25,9.08,2.7085],2,3,15921644,15263970,"","o"],["outbuilding at 13",[-1629.65,418.37,4.54,7.23,2.9043],1,0,14078146,9342090,"","s"],["15",[-1627.03,407.09,11.04,13.86,2.8101,-1621.08,400.52,4.06,2.45,2.8101],1,3,15724006,14869212,"","o"],["13",[-1617.09,414.46,6.19,22.3,2.6721,-1614.57,423.97,6.93,7.63,2.6721],1,0,14209730,8358524,"","o"],["9",[-1574.55,442.34,11.72,14.88,2.8379],1,0,14932676,12628620,"","o"],["7",[-1559.58,439.94,8.54,11.74,2.8311],1,3,14275520,9412735,"","o"],["outbuilding",[-1540.1,440.05,7.53,5.25,2.5613],1,0,14078146,11313563,"","s"],["5",[-1526.07,445.23,16.31,7.93,2.7377],1,0,13617336,9211790,"","o"]],Nh=[-1592.2,410.8],Bs=[-1744,317.6],Gs=[-1495,439.1],bx=45;function Uh(i,t,[e,n,s,r]){const a=s-e,o=r-n,l=a*a+o*o||1,c=Math.max(0,Math.min(1,((i-e)*a+(t-n)*o)/l));return Math.hypot(i-e-a*c,t-n-o*c)}const Fh=new WeakMap;function Oh(i){let t=Fh.get(i);if(t)return t;const e=[],n=[],s=[Math.min(Bs[0],Gs[0])-120,Math.min(Bs[1],Gs[1])-120],r=[Math.max(Bs[0],Gs[0])+120,Math.max(Bs[1],Gs[1])+120];for(const a of i.roads){if(a[0]>4)continue;const o=i.names[a[4]]??"",l=a[5];for(let c=0;c+3<l.length;c+=2){const h=[l[c]/10,l[c+1]/10,l[c+2]/10,l[c+3]/10];if(Math.max(h[0],h[2])<s[0]||Math.min(h[0],h[2])>r[0]||Math.max(h[1],h[3])<s[1]||Math.min(h[1],h[3])>r[1])continue;const u=(h[0]+h[2])/2;(o==="Norman Road"&&u>=Bs[0]-1&&u<=Gs[0]+1?e:n).push(h)}}return t=(a,o)=>{if(a<s[0]||a>r[0]||o<s[1]||o>r[1]||!e.length||Math.hypot(a-Nh[0],o-Nh[1])<24)return!1;let l=1/0,c=1/0;for(const h of e)l=Math.min(l,Uh(a,o,h));if(l>bx)return!1;for(const h of n)c=Math.min(c,Uh(a,o,h));return l<c},Fh.set(i,t),t}function Ex(i,t,e=1.5){for(const[,n]of il)for(let s=0;s<n.length;s+=5){const[r,a,o,l,c]=n.slice(s,s+5),h=i-r,u=t-a;if(h*h+u*u>400)continue;const f=Math.cos(c),d=Math.sin(c),p=h*f-u*d,M=h*d+u*f;if(Math.abs(p)<o/2+e&&Math.abs(M)<l/2+e)return!0}return!1}const Kr=[15921126,15261640,13619920,11120043,12110550,11845800,14272936,5988452,11036494,14205088,15327150,16448250].map(H),mi=[15000277,12435386,8948618,4934726,3487290,6957594,8160360,3555666,11888447,11644323].map(H),Be=H(3163994),ks=[7031348,3098712,9056042,15658730,4151878].map(H),rs=H(9138002),sn=H(16053230),$r=H(12171184),Jr=H(1846090),zh=[15327951,3099196,2504783,8007210,3816770,13214282,5209226].map(H);function sl(i,t,e,n,s,r){const a=$t(r,.9);if(t>=e){const o=t-e;i.quad(-t,n,e,t,n,e,o,n+s,0,-o,n+s,0,r),i.quad(t,n,-e,-t,n,-e,-o,n+s,0,o,n+s,0,r),i.tri(t,n,e,t,n,-e,o,n+s,0,a),i.tri(-t,n,-e,-t,n,e,-o,n+s,0,a)}else{const o=e-t;i.quad(t,n,e,t,n,-e,0,n+s,-o,0,n+s,o,r),i.quad(-t,n,-e,-t,n,e,0,n+s,o,0,n+s,-o,r),i.tri(-t,n,e,t,n,e,0,n+s,o,a),i.tri(t,n,-e,-t,n,-e,0,n+s,-o,a)}}function Ri(i,t,e,n,s,r,a,o){const l=t/2,c=e/2;if(t>=e){const u=c*s;return i.quad(-l-r,n-r*s,c+r,l+r,n-r*s,c+r,l+r,n+u,0,-l-r,n+u,0,a),i.quad(l+r,n-r*s,-c-r,-l-r,n-r*s,-c-r,-l-r,n+u,0,l+r,n+u,0,a),i.tri(l,n,c,l,n,-c,l,n+u,0,o),i.tri(-l,n,-c,-l,n,c,-l,n+u,0,o),u}const h=l*s;return i.quad(l+r,n-r*s,c+r,l+r,n-r*s,-c-r,0,n+h,-c-r,0,n+h,c+r,a),i.quad(-l-r,n-r*s,-c-r,-l-r,n-r*s,c+r,0,n+h,c+r,0,n+h,-c-r,a),i.tri(-l,n,c,l,n,c,0,n+h,c,o),i.tri(l,n,-c,-l,n,-c,0,n+h,-c,o),h}function Hs(i,t,e,n,s,r,a,o,l){const c=t/2,h=e/2,u=n+s,f=n+r,d=(u-f)/e;i.quad(-c-a,u+a*d,h+a,c+a,u+a*d,h+a,c+a,f-a*d,-h-a,-c-a,f-a*d,-h-a,o),i.quad(-c,n,h,c,n,h,c,u,h,-c,u,h,l),i.quad(c,n,h,c,n,-h,c,f,-h,c,u,h,l),i.quad(-c,n,-h,-c,n,h,-c,u,h,-c,f,-h,l),i.quad(c,n,-h,-c,n,-h,-c,f,-h,c,f,-h,l)}const on=.05;function ln(i,t,e,n,s,r,a,o=0){const l=t/2+on;i.quad(e,s,l,n,s,l,n,r,l,e,r,l,a,o)}function Bh(i,t,e,n,s,r,a,o=0){const l=-t/2-on;i.quad(n,s,l,e,s,l,e,r,l,n,r,l,a,o)}function rl(i,t,e,n,s,r,a,o=0){const l=t/2+on;i.quad(l,s,n,l,s,e,l,r,e,l,r,n,a,o)}function al(i,t,e,n,s,r,a,o=0){const l=-t/2-on;i.quad(l,s,e,l,s,n,l,r,n,l,r,e,a,o)}function Qr(i,t,e,n){let s=1/0,r=-1/0;for(const[a,o]of[[-e,-n],[e,-n],[e,n],[-e,n],[0,0]]){const l=i.yAt(t.wx(a,o),t.wz(a,o));l<s&&(s=l),l>r&&(r=l)}return{lo:s,hi:r}}function wx(i,t,e,n,s,r,a,o,l,c,h,u){i.frame(e,0,n,a);const f=Qr(t,i,s/2,r/2),d=f.hi+.18;i.frame(e,d,n,a);const p=Kr[c%Kr.length],M=mi[h%mi.length],m=o===2?5.5:2.85,g=s/2,S=r/2,_=$t(p,.7);i.box(-g,f.lo-d-.3,-S,g,0,S,_,null),i.box(-g,0,-S,g,m,S,p,l===3?$t(M,1):null);let v=m;if(l===0){const y=Math.min(g,S)+.5;sl(i,g+.5,S+.5,m,y*.44,M),v=m+y*.44}else l===1?v=m+Ri(i,s,r,m,.5,.4,M,p):l===2?(Hs(i,s,r,m,1.35,.25,.5,M,p),ln(i,r,-g+.5,g-.5,m+.25,m+1.05,Be,u()<.5?1:0),v=m+1.4):(i.box(-g-.15,m,-S-.15,g+.15,m+.3,S+.15,$t(p,.92),M),v=m+.3);const E=ks[Math.floor(u()*ks.length)];for(let x=0;x<o;x++){const y=x*2.75+.85,T=y+1.3,R=Math.max(2,Math.floor(s/3.2)),C=x===0?Math.floor(u()*R):-1;for(let P=0;P<R;P++){const k=-g+(P+.5)/R*s;P===C?ln(i,r,k-.5,k+.5,0,2.1,E):ln(i,r,k-.85,k+.85,y,T,Be,u()<.55?1:0)}const N=Math.max(1,Math.floor(s/3.8));for(let P=0;P<N;P++){const k=-g+(P+.5)/N*s;Bh(i,r,k-.75,k+.75,y,T,Be,u()<.5?1:0)}const B=Math.max(1,Math.floor(r/4.2));for(let P=0;P<B;P++){const k=-S+(P+.5)/B*r;rl(i,s,k-.7,k+.7,y,T,Be,u()<.45?1:0),al(i,s,k-.7,k+.7,y,T,Be,u()<.45?1:0)}}const b=u();if(o===1&&b<.36){const x=g*(.6+u()*.4),y=1.9;i.box(-x,-.12,S,x,.02,S+y,rs),i.quad(-x-.2,2.3,S+y+.2,x+.2,2.3,S+y+.2,x+.2,2.7,S,-x-.2,2.7,S,$t(M,.93));const T=Math.max(2,Math.round(x*2/3));for(let R=0;R<=T;R++){const C=-x+R/T*x*2;i.box(C-.06,0,S+y-.12,C+.06,2.32,S+y,sn,null)}}else if(o===2&&b<.5){const x=g*(.55+u()*.45),y=2;i.box(-x,2.62,S,x,2.78,S+y,$r,rs,$t($r,.8));const T=u()<.5?H(10469580):sn;i.box(-x,2.78,S+y-.05,x,3.75,S+y,T,null),i.box(-x,2.78,S,-x+.05,3.75,S+y,T,null),i.box(x-.05,2.78,S,x,3.75,S+y,T,null);for(const R of[-x+.1,x-.1])i.box(R-.08,0,S+y-.2,R+.08,2.62,S+y-.04,sn,null);u()<.5&&i.quad(-x-.2,5.05,S+y+.2,x+.2,5.05,S+y+.2,x+.2,5.4,S,-x-.2,5.4,S,$t(M,.93))}if(u()<.1&&l<=1){const x=(u()-.5)*g,y=(u()-.5)*S*.6;i.box(x-.32,m,y-.32,x+.32,v+.55,y+.32,H(10116936))}if(u()<.24&&l<=1&&Tx(i,s,r,m,a,l,u),u()<.15){const x=(u()<.5?-1:1)*(g+1.25),y=-S+1.3;i.cyl(x,f.hi-d,y,1.05,1.05,2.1,8,u()<.5?H(9347975):H(12370625),H(11120814))}}function Tx(i,t,e,n,s,r,a){const o=t/2,l=e/2,c=r===0?.5:.4,h=.22,u=.74,f=.09;if(t>=e){const d=l+c,p=r===0?d*.44:l*.5*(1+c/l),M=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?o-l:o)*.7)*(.6+a()*.4),g=Math.cos(s)<0,S=g?1:-1,_=S*d*(1-h),v=S*d*(1-u),E=M+p*h+f,b=M+p*u+f;g?i.quad(-m,E,_,m,E,_,m,b,v,-m,b,v,Jr):i.quad(m,E,_,-m,E,_,-m,b,v,m,b,v,Jr)}else{const d=o+c,p=r===0?d*.44:o*.5*(1+c/o),M=r===0?n:n-c*.5,m=Math.max(1.4,(r===0?l-o:l)*.7)*(.6+a()*.4),g=Math.sin(s)>0,S=g?1:-1,_=S*d*(1-h),v=S*d*(1-u),E=M+p*h+f,b=M+p*u+f;g?i.quad(_,E,m,_,E,-m,v,b,-m,v,b,m,Jr):i.quad(_,E,-m,_,E,m,v,b,m,v,b,-m,Jr)}}const Ax=H(9075302);function Rx(i,t,e,n){const[,s,r,a,o,l,c]=e;let h=-1/0,u=1/0;for(let d=0;d<s.length;d+=5){const[p,M,m,g,S]=s.slice(d,d+5);i.frame(p,0,M,S);const _=[];for(const[E,b]of[[-m/2,-g/2],[m/2,-g/2],[m/2,g/2],[-m/2,g/2]])_.push(i.wx(E,b),i.wz(E,b));n.push(_);const v=Qr(t,i,m/2,g/2);h=Math.max(h,v.hi),u=Math.min(u,v.lo)}const f=h+.18;for(let d=0;d<s.length;d+=5)Cx(i,f,u,s.slice(d,d+5),r,a,o,l,d===0?c:"",d===0)}function Cx(i,t,e,[n,s,r,a,o],l,c,h,u,f,d){const p=ze(Math.round(n*31+s*17)>>>0);i.frame(n,t,s,o);const M=H(h),m=H(u),g=l===2?5.5:2.85,S=r/2,_=a/2;if(i.box(-S,e-t-.3,-_,S,0,_,$t(M,.7),null),i.box(-S,0,-_,S,g,_,M,c===3?m:null),c===0){const y=Math.min(S,_)+.5;sl(i,S+.5,_+.5,g,y*.44,m)}else c===1?Ri(i,r,a,g,.5,.4,m,M):c===2?Hs(i,r,a,g,1.1,.2,.5,m,M):i.box(-S-.15,g,-_-.15,S+.15,g+.3,_+.15,$t(M,.92),m);if(r<5||a<3)return;const v=f.includes("g")?Math.min(4.8,r*.42):0;v&&ln(i,a,S-.4-v,S-.4,0,2.2,Ax);const E=-S,b=S-(v?v+.8:0);for(let x=0;x<l;x++){const y=x*2.75+.85,T=y+1.3,R=Math.max(2,Math.floor((b-E)/3.2));for(let B=0;B<R;B++){const P=E+(B+.5)/R*(b-E);d&&x===0&&B===R-1?ln(i,a,P-.5,P+.5,0,2.1,ks[0]):ln(i,a,P-.85,P+.85,y,T,Be,p()<.5?1:0)}const C=Math.max(1,Math.floor(r/3.8));for(let B=0;B<C;B++){const P=-S+(B+.5)/C*r;Bh(i,a,P-.75,P+.75,y,T,Be,p()<.5?1:0)}const N=Math.max(1,Math.floor(a/4.2));for(let B=0;B<N;B++){const P=-_+(B+.5)/N*a;rl(i,r,P-.7,P+.7,y,T,Be,p()<.45?1:0),al(i,r,P-.7,P+.7,y,T,Be,p()<.45?1:0)}}if(f.includes("v")){const x=Math.min(S-.3,(b-E)/2),y=(E+b)/2,T=2.2;i.box(y-x,-.12,_,y+x,.02,_+T,rs),i.quad(y-x-.2,2.3,_+T+.2,y+x+.2,2.3,_+T+.2,y+x+.2,2.7,_,y-x-.2,2.7,_,$t(m,.93));const R=Math.max(2,Math.round(x*2/3));for(let C=0;C<=R;C++){const N=y-x+C/R*x*2;i.box(N-.06,0,_+T-.12,N+.06,2.32,_+T,sn,null)}}if(f.includes("b")&&l===2){const x=S*.8,y=1.8;i.box(-x,2.62,_,x,2.78,_+y,$r,rs,$t($r,.8)),i.box(-x,2.78,_+y-.05,x,3.75,_+y,sn,null),i.box(-x,2.78,_,-x+.05,3.75,_+y,sn,null),i.box(x-.05,2.78,_,x,3.75,_+y,sn,null);for(const T of[-x+.1,x-.1])i.box(T-.08,0,_+y-.2,T+.08,2.62,_+y-.04,sn,null)}}function Px(i,t,e,n,s,r,a,o,l,c){i.frame(e,0,n,a);const h=Qr(t,i,s/2,r/2);i.frame(e,h.hi+.05,n,a);const u=[H(14275778),H(9083526),H(12041145),H(7305842)][l%4],f=mi[c%mi.length],d=2.4,p=s/2,M=r/2;i.box(-p,h.lo-h.hi-.3,-M,p,d,M,u,null),o===1?Ri(i,s,r,d,.32,.2,f,u):Hs(i,s,r,d,.6,.1,.2,f,u),ln(i,r,-p*.72,p*.72,0,2.05,$t(u,1.12))}const jr=[14243375,3112880,6266970,14725690,9134e3,4170656,14252591,4878261].map(H);function Lx(i,t,e,n,s,r,a,o){const l={0:[8,4.2],1:[6.4,4.8],2:[3.6,3.6],3:[10.5,7.5]},[c,h]=l[r];i.frame(e,0,n,s);const u=Qr(t,i,c/2,h/2);i.frame(e,u.hi+.05,n,s);const f=u.lo-u.hi-.3;if(r===0){const d=[H(15129798),H(12175305),H(13219994),H(10465434)][a%4],p=mi[(a*3+1)%mi.length];i.box(-4,f,-2.1,4,.35,2.1,$t(d,.6),null),i.box(-4,.35,-2.1,4,2.75,2.1,d,null),Ri(i,8,4.2,2.75,.42,.35,p,d),i.box(-3.2,.2,2.1,1.2,.35,3.7,rs),i.box(-3.2,.35,3.62,1.2,1.25,3.7,sn,null),ln(i,4.2,-2.8,-1.2,1.2,2.3,Be,o()<.5?1:0),ln(i,4.2,-.4,.5,.35,2.4,ks[a%ks.length]),ln(i,4.2,1.4,3.2,1.2,2.3,Be,o()<.5?1:0)}else if(r===1){const d=jr[a%jr.length];i.box(-2.9,.45,-2.3,2.9,2.55,-.1,sn,H(15263972),H(9079432)),i.box(-2.92,1.05,-2.32,2.92,1.3,-.08,d,null),i.box(-1.4,0,-2.2,-.8,.5,-.2,H(2763308)),i.box(.8,0,-2.2,1.4,.5,-.2,H(2763308)),ln(i,-.2,-2.2,-1,1.45,2.15,Be,o()<.4?1:0),i.box(-2.6,0,-.1,2.6,2,2.3,zs(d,sn,.72),null),i.quad(-2.7,2,2.4,2.7,2,2.4,2.7,2.5,-.1,-2.7,2.5,-.1,zs(d,sn,.55))}else if(r===2){const d=jr[a%jr.length];i.blob(0,0,0,1.75,1.55,1.75,6,4,$t(d,.85),d)}else{const d=H(14209732),p=H(5922659);i.box(-5.25,f,-3.75,5.25,3,3.75,d,null),Hs(i,10.5,7.5,3,1.5,.2,.7,p,H(9072466)),ln(i,7.5,-4.4,4.4,.3,2.6,Be,o()<.6?1:0),i.box(-5.25,.05,3.75,5.25,.25,6.2,rs),rl(i,10.5,-2,2,.9,2.3,Be,o()<.5?1:0),al(i,10.5,-2,2,.9,2.3,Be,o()<.5?1:0)}}function Dx(i){const t=i.length/2;let e={cx:0,cz:0,w:0,d:0,heading:0,area:1/0};for(let n=0;n<t;n++){const s=(n+1)%t;let r=i[s*2]-i[n*2],a=i[s*2+1]-i[n*2+1];const o=Math.hypot(r,a);if(o<.5)continue;r/=o,a/=o;let l=1/0,c=-1/0,h=1/0,u=-1/0;for(let d=0;d<t;d++){const p=i[d*2],M=i[d*2+1],m=p*r+M*a,g=-p*a+M*r;m<l&&(l=m),m>c&&(c=m),g<h&&(h=g),g>u&&(u=g)}const f=(c-l)*(u-h);if(f<e.area){const d=(l+c)/2,p=(h+u)/2;e={cx:d*r-p*a,cz:d*a+p*r,w:c-l,d:u-h,heading:Math.atan2(-a,r),area:f}}}return e}function Ix(i,t){const e=i.length/2,n=tl(i)>0?1:-1,s=[];for(let r=0;r<e;r++){const a=(r+e-1)%e,o=(r+1)%e;let l=i[r*2]-i[a*2],c=i[r*2+1]-i[a*2+1],h=i[o*2]-i[r*2],u=i[o*2+1]-i[r*2+1];const f=Math.hypot(l,c)||1,d=Math.hypot(h,u)||1;l/=f,c/=f,h/=d,u/=d;const p=-c*n,M=l*n,m=-u*n,g=h*n;let S=p+m,_=M+g;const v=Math.hypot(S,_)||1;S/=v,_/=v;const E=t/Math.max(.4,S*p+_*M);s.push(i[r*2]+S*E,i[r*2+1]+_*E)}return s}const Nx=new Set(["house","detached","residential","terrace","yes;house","semidetached_house","bungalow"]),Ux=new Set(["shed","garage","garages","toilets","hut"]);function Gh(i,t,e,n,s,r){const a=e.p.map(T=>T/10),o=a.length/2;let l=0,c=0,h=1/0,u=-1/0;for(let T=0;T<o;T++){l+=a[T*2],c+=a[T*2+1];const R=t.yAt(a[T*2],a[T*2+1]);R<h&&(h=R),R>u&&(u=R)}l/=o,c/=o;const f=Math.abs(tl(a)),d=Dx(a),p=f/(d.w*d.d||1),M=u+.15,m=Math.hypot(l-r[0],c-r[1])<420,g=e.k==="retail"||e.k==="commercial"||!!e.u||!!e.n||e.k==="yes"&&(f>300||m&&f>110),S=!g&&(Nx.has(e.k)||e.k==="yes"&&f<=300),_=Ux.has(e.k)||f<28;let v;e.l?v=e.l*3.1:e.k==="roof"?v=3:e.k==="hangar"?v=6.5:e.k==="church"?v=5:_?v=2.5:S?v=s()<.2?5.5:2.9:v=f>1200?7:f>500?5.6:4.3+s()*.8;const E={name:e.n,use:e.u,kind:e.k,poly:a,cx:l,cz:c,area:f,obb:d,floorY:M,wallH:v,topY:M+v};let b=26;for(let T=0;T<o;T++){const R=(T+1)%o,C=a[T*2],N=a[T*2+1],B=a[R*2],P=a[R*2+1],k=Math.hypot(B-C,P-N);if(k<4.5)continue;const D=(C+B)/2,L=(N+P)/2,Z=n.nearest(D,L,b);if(!Z)continue;let Y=-(P-N)/k,U=(B-C)/k;if(Y*(D-l)+U*(L-c)<0&&(Y=-Y,U=-U),(Z.px-D)*Y+(Z.pz-L)*U<Z.dist*.5)continue;b=Z.dist;const O=Math.atan2(Y,U),z=(B-C)*Math.cos(O)-(P-N)*Math.sin(O);E.street={x:z>0?C:B,z:z>0?N:P,heading:O,length:k}}if(i.frame(0,M,0,0),e.k==="roof"){const T=H(12172728);i.walls(a,v-.25,v,T),i.cap(a,v,T);for(let R=0;R<o;R++)i.box(a[R*2]-.12,h-M,a[R*2+1]-.12,a[R*2]+.12,v-.25,a[R*2+1]+.12,H(6974832),null);return E}const x=g?[H(15328470),H(14275266),H(13620178),H(15128768),H(12568777),H(15789540),H(13220258)][Math.floor(s()*7)]:Kr[Math.floor(s()*Kr.length)],y=g&&f>300?[H(13225160),H(11777972),H(14211280),H(10133405)][Math.floor(s()*4)]:mi[Math.floor(s()*mi.length)];if(i.walls(a,h-M-.3,v,x),e.k==="church"){i.frame(d.cx,M,d.cz,d.heading);const T=Ri(i,d.w,d.d,v,1.15,.3,H(5922659),x);E.topY=M+v+T}else if((S||_||e.k==="hangar")&&p>.8&&o<=8)if(i.frame(d.cx,M,d.cz,d.heading),e.k==="hangar")E.topY=M+v+Ri(i,d.w,d.d,v,.3,.3,H(12172728),x);else if(_)Hs(i,d.w,d.d,v,.5,.1,.2,y,x);else if(s()<.55){const T=Math.min(d.w,d.d)/2+.45;sl(i,d.w/2+.45,d.d/2+.45,v,T*.44,y),E.topY=M+v+T*.44}else E.topY=M+v+Ri(i,d.w,d.d,v,.5,.4,y,x);else if(f<420&&!g){const T=Ix(a,Math.min(2.2,Math.sqrt(f)*.18)),R=1.15;for(let C=0;C<o;C++){const N=(C+1)%o;i.quad(a[C*2],v,a[C*2+1],a[N*2],v,a[N*2+1],T[N*2],v+R,T[N*2+1],T[C*2],v+R,T[C*2+1],y)}i.cap(T,v+R,$t(y,1.05)),E.topY=M+v+R}else{i.cap(a,v-.05,y),i.walls(a,v,v+.45,$t(x,.96)),E.topY=M+v+.45;const T=Math.min(6,Math.floor(f/220));for(let R=0;R<T;R++){const C=(s()-.5)*d.w*.5,N=(s()-.5)*d.d*.5,B=Math.cos(d.heading),P=Math.sin(d.heading),k=d.cx+C*B+N*P,D=d.cz-C*P+N*B;i.box(k-1.1,v,D-.8,k+1.1,v+.9,D+.8,H(11120304))}}if(!_&&e.k!=="hangar"){const T=Math.max(1,Math.round(v/3));for(let R=0;R<o;R++){const C=(R+1)%o,N=a[R*2],B=a[R*2+1],P=a[C*2],k=a[C*2+1],D=Math.hypot(P-N,k-B);if(D<3.2)continue;let L=-(k-B)/D,Z=(P-N)/D;L*((N+P)/2-l)+Z*((B+k)/2-c)<0&&(L=-L,Z=-Z);const Y=Math.atan2(L,Z),U=(P-N)*Math.cos(Y)-(k-B)*Math.sin(Y);i.frame(U>0?N:P,M,U>0?B:k,Y);const O=Math.floor(D/(g?4.2:3.4));for(let z=0;z<T;z++){const X=z*3+.9;if(!(g&&z===0&&E.street&&Math.abs(Y-E.street.heading)<.01))for(let F=0;F<O;F++){const K=(F+.5)/O*D;i.quad(K-.8,X,on,K+.8,X,on,K+.8,X+1.3,on,K-.8,X+1.3,on,Be,s()<.5?1:0)}}}}if(g&&E.street&&!e.k.includes("church")&&f>60){const T=E.street;i.frame(T.x,M,T.z,T.heading);const R=zh[Math.floor(s()*zh.length)];if(i.quad(.5,.35,on,T.length-.5,.35,on,T.length-.5,2.7,on,.5,2.7,on,Be,.9),m&&T.length>6&&v<9){i.box(.2,3,0,T.length-.2,3.16,2.7,R,$t(R,.9),$t(R,.75)),i.box(.2,2.75,2.62,T.length-.2,3.3,2.7,zs(R,sn,.25),null);const C=Math.max(1,Math.round(T.length/4.5));for(let N=0;N<=C;N++){const B=.35+N/C*(T.length-.7);i.box(B-.06,0,2.5,B+.06,3,2.62,H(4869456),null)}}}return i.frame(),E}function Fx(i,t,e,n,s=()=>!1){const r=new Je;r.name="buildings";const a=is(),o=900,l=new Map,c=(_,v)=>{const E=`${Math.floor(_/o)}:${Math.floor(v/o)}`;let b=l.get(E);return b||l.set(E,b=new Jt),b},h=i.meta,u=[(145.7285-h.origin[0])*h.metresPerDegree[0],-(-38.63385-h.origin[1])*h.metresPerDegree[1]],f=ze(3996),d=[];for(const _ of i.buildings){let v=0,E=0;for(let b=0;b<_.p.length;b+=2)v+=_.p[b],E+=_.p[b+1];if(v/=_.p.length*5,E/=_.p.length*5,!s(v,E)){if(n.has(_.n)){const b=new Jt,x=Gh(b,t,_,e,ze(1),u);x.custom=!0,d.push(x);continue}d.push(Gh(c(v,E),t,_,e,f,u))}}const p=i.houses,M=Oh(i);for(let _=0;_<p.length;_+=nl){const v=p[_]/4,E=p[_+1]/4,b=p[_+2]/10,x=p[_+3]/10,y=p[_+4]/10*(Math.PI/180),T=ze(_*7919+17);s(v,E)||M(v,E)||(p[_+5]===1?Px(c(v,E),t,v,E,b,x,y,p[_+7],p[_+8],p[_+9]):wx(c(v,E),t,v,E,b,x,y,p[_+6],p[_+7],p[_+8],p[_+9],T))}const m=i.cabins;for(let _=0;_<m.length;_+=_x){const v=m[_]/4,E=m[_+1]/4;s(v,E)||Lx(c(v,E),t,v,E,m[_+2]/10*(Math.PI/180),m[_+3],m[_+4],ze(_*31+5))}const g=[];for(const _ of il)s(_[1][0],_[1][1])||Rx(c(_[1][0],_[1][1]),t,_,g);let S=0;for(const _ of l.values()){_.frame(),S+=_.vertexCount/3;const v=new Yt(_.build(),a);v.castShadow=!0,v.receiveShadow=!0,r.add(v)}return{group:r,footprints:d,designedWalls:g,triangles:S}}class Ox{constructor(t){j(this,"targetFps");j(this,"deadline",-1/0);j(this,"lastDraw");this.targetFps=t===30?30:60}get target(){return this.targetFps}setTarget(t){const e=t===30?30:60;return e===this.targetFps?!1:(this.targetFps=e,this.reset(),!0)}reset(){this.deadline=-1/0,this.lastDraw=void 0}takeFrame(t){if(t+1<this.deadline)return;const e=1e3/this.targetFps,n=this.deadline+e;this.deadline=n<=t?t+e:n;const s=this.lastDraw===void 0?0:(t-this.lastDraw)/1e3;return this.lastDraw=t,s}}const zx=.1,Bx=180,Gx=425,kx=650,Hx=360,Vx=480,Wx=1.8,Xx=450;function kh(i,t,e){const n=Math.max(i.x-t,0,t-i.x-i.size),s=Math.max(i.z-e,0,e-i.z-i.size);return Math.hypot(n,s)}function Hh(i){"close"in i&&i.close()}function ol(i){i.texture.dispose(),Hh(i.image)}function Yx(i,t){return new Promise((e,n)=>{if(t.aborted){n(t.reason);return}const s=new Image;s.crossOrigin="anonymous";const r=()=>{s.onload=s.onerror=null,t.removeEventListener("abort",a)},a=()=>{r(),s.removeAttribute("src"),n(t.reason)};s.onload=()=>{r(),e(s)},s.onerror=()=>{r(),n(new Error("Could not load ground detail"))},t.addEventListener("abort",a,{once:!0}),s.src=i})}class qx{constructor(t,e,n,s,r,a){j(this,"patches");j(this,"manifest");j(this,"manifestRetryAt",0);j(this,"load");j(this,"ready");j(this,"residents");j(this,"previous");j(this,"vx",0);j(this,"vz",0);j(this,"closed",!1);this.urls=t,this.small=e,this.detail=n,this.anisotropy=s,this.worker=r,this.markDirty=a,this.residents=n.maps.map(()=>{})}update(t,e,n,s,r){if(!this.urls.detail||this.closed)return;const a=this.previous,o=a?t-a.time:0,l=a&&Math.hypot(e-a.x,n-a.y,s-a.z)>Bx;if(a&&!l&&o<zx)return;if(this.previous={time:t,x:e,y:n,z:s},!a||l||o>1)this.vx=this.vz=0;else{const u=Math.min(1,o*4);this.vx+=((e-a.x)/o-this.vx)*u,this.vz+=((s-a.z)/o-this.vz)*u}if(!this.patches){!this.manifest&&t>=this.manifestRetryAt&&this.loadManifest(this.urls.detail);return}const c=Math.min(Wx,Xx/Math.max(1,Math.hypot(this.vx,this.vz))),h=this.patches.map(u=>{const f=u.slot!==-1,d=Math.min(kh(u,e,s),kh(u,e+this.vx*c,s+this.vz*c)+70);return{patch:u,score:d,present:f}}).filter(({score:u,present:f})=>r<=(f?Vx:Hx)&&u<=(f?kx:Gx)).sort((u,f)=>u.score-f.score).slice(0,this.residents.length).map(({patch:u})=>u);for(const u of this.residents)u&&!h.includes(u.patch)&&this.evict(u);if(this.load&&!h.includes(this.load.patch)&&this.cancelLoad(),this.ready&&!h.includes(this.ready.patch)&&(ol(this.ready),this.ready=void 0),!this.load&&!this.ready){const u=h.find(f=>f.slot===-1&&t>=f.retryAt);u&&this.start(u)}}applyReady(){if(!this.ready)return;const t=this.residents.indexOf(void 0);if(t<0)return;const e=this.ready;this.ready=void 0,this.residents[t]=e;const{patch:n,texture:s}=e;n.slot=t,this.detail.maps[t].value=s,this.detail.rects[t].value.set(n.x,n.z,1/n.size,1)}dispose(){var t;if(!this.closed){this.closed=!0,(t=this.manifest)==null||t.abort(),this.cancelLoad(),this.ready&&ol(this.ready),this.ready=void 0;for(const e of this.residents)e&&this.evict(e);this.detail.fallback.dispose()}}async loadManifest(t){var n;const e=this.manifest=new AbortController;try{const s=new URL(t,document.baseURI),r=await fetch(s,{signal:e.signal});if(r.status===404){this.patches=[];return}if(!r.ok)throw new Error("Could not load the ground detail list");const{patches:a}=await r.json();if(e.signal.aborted)return;this.patches=(Array.isArray(a)?a:[]).flatMap(o=>{var h;if(!o||!Number.isFinite(o.x)||!Number.isFinite(o.z)||!(o.size>0)||!Number.isFinite(o.size))return[];const l=this.small&&o.lo?o.lo:o.file;if(typeof l!="string"||!l)return[];const c=(h=this.urls.detailFiles)==null?void 0:h[l];try{return[{x:o.x,z:o.z,size:o.size,url:c?new URL(c,document.baseURI).href:new URL(l,s).href,slot:-1,failures:0,retryAt:0}]}catch{return[]}})}catch{e.signal.aborted||(this.manifestRetryAt=(((n=this.previous)==null?void 0:n.time)??0)+20)}finally{this.manifest=void 0}}start(t){const e=new AbortController,n=this.load={patch:t,controller:e},{signal:s}=e;this.worker.run({kind:"detail",url:t.url},()=>Yx(t.url,s),s).then(r=>{if(this.load!==n){Hh(r);return}this.load=void 0,t.failures=0,t.retryAt=0;const a=new ve(r);a.flipY=!("close"in r),a.colorSpace=Te,a.anisotropy=this.anisotropy,a.generateMipmaps=!0,a.minFilter=Cn,a.needsUpdate=!0,this.ready={patch:t,texture:a,image:r},this.markDirty()},()=>{var r;this.load===n&&(this.load=void 0,t.failures++,t.retryAt=(((r=this.previous)==null?void 0:r.time)??0)+Math.min(30,2**t.failures))})}cancelLoad(){const t=this.load;this.load=void 0,t==null||t.controller.abort()}evict(t){const e=t.patch.slot;this.detail.maps[e].value=this.detail.fallback,this.detail.rects[e].value.w=0,this.residents[e]=void 0,t.patch.slot=-1,ol(t),this.markDirty()}}class Zx{constructor(t,e,n){j(this,"items",[]);j(this,"v",new W);j(this,"visible",!0);j(this,"obstacles",[]);this.layer=t;for(const s of[...e].sort((r,a)=>r.priority-a.priority)){const r=document.createElement("button");r.type="button",r.tabIndex=-1,r.className=`inv-label inv-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",r.addEventListener("click",()=>n(s.id)),t.appendChild(r),this.items.push({place:s,el:r,w:0,h:0,shown:!1})}}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const a of this.items){a.w||(a.w=a.el.offsetWidth,a.h=a.el.offsetHeight);const o=a.place;this.v.set(o.x,o.y,o.z);const l=this.v.distanceTo(t.position);this.v.project(t);let c=this.v.z<1&&this.v.z>-1&&l<(o.maxDist??1/0)&&l<s;const h=(this.v.x*.5+.5)*e,u=(-this.v.y*.5+.5)*n,f=h-a.w/2,d=u-a.h,p=h+a.w/2,M=u;if(c&&(p<0||f>e||M<0||d>n)&&(c=!1),c){for(const m of r)if(f<m[2]+6&&p>m[0]-6&&d<m[3]+4&&M>m[1]-4){c=!1;break}}c&&(r.push([f,d,p,M]),a.el.style.transform=`translate3d(${Math.round(f)}px, ${Math.round(d)}px, 0)`),c!==a.shown&&(a.el.style.visibility=c?"visible":"hidden",a.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}const Kx=[{id:"town",name:"A'Beckett Street",kind:"landmark",lat:-38.63372,lon:145.7283,blurb:"Inverloch's main street: bakeries, fish and chips, cafes and shops, a short walk from the inlet.",view:[380,58,-28],priority:1,lift:26},{id:"jetty",name:"Inverloch Jetty",kind:"landmark",lat:-38.63591,lon:145.73413,blurb:"Timber jetty reaching into Anderson Inlet, with the boat ramp alongside. A favourite for fishing and an evening walk.",view:[190,63,32],priority:1,lift:16},{id:"surf",name:"Surf Beach & Life Saving Club",kind:"landmark",lat:-38.64634,lon:145.70199,blurb:"Ocean beach facing Bass Strait, watched over by the Inverloch Surf Life Saving Club on the dune.",view:[330,62,-32],priority:1,lift:20},{id:"inlet",name:"Anderson Inlet",kind:"water",lat:-38.6412,lon:145.7445,blurb:"A shallow tidal estuary where the Tarwin River meets the sea. The sandbars here come from LiDAR survey data: slide the tide to cover and uncover them.",view:[3e3,50,8],priority:2},{id:"hub",name:"The Hub",kind:"landmark",lat:-38.63332,lon:145.72762,blurb:"Inverloch Community Hub on A'Beckett Street, home to the library and visitor information.",view:[300,60,20],priority:3,maxDist:2600,lift:18},{id:"espy",name:"Esplanade Hotel",kind:"landmark",lat:-38.63419,lon:145.72889,blurb:"The pub at the foreshore end of the main street.",view:[280,62,-40],priority:3,maxDist:2200,lift:18},{id:"rainbow",name:"Rainbow Park",kind:"landmark",lat:-38.63529,lon:145.72876,blurb:"Foreshore playground with picnic lawns and barbecues beside the inlet beach.",view:[150,60,14],priority:3,maxDist:2200,lift:14},{id:"bunurong",name:"Bunurong Environment Centre",kind:"landmark",lat:-38.63465,lon:145.72917,blurb:"Environment centre and shell museum on The Esplanade.",view:[260,60,-15],priority:5,maxDist:1100,lift:15},{id:"glade",name:"The Glade",kind:"landmark",lat:-38.63539,lon:145.7302,blurb:"Foreshore reserve and picnic shelter between the town centre and the jetty.",view:[300,62,5],priority:5,maxDist:1300,lift:13},{id:"oval",name:"Recreation Reserve",kind:"landmark",lat:-38.63194,lon:145.72681,blurb:"The town's football oval, a block back from the main street.",view:[460,58,15],priority:4,maxDist:2600,lift:16},{id:"school",name:"Primary School",kind:"landmark",lat:-38.63062,lon:145.72813,blurb:"Inverloch Primary School.",view:[380,58,0],priority:6,maxDist:1500,lift:14},{id:"bowls",name:"Bowls Club",kind:"landmark",lat:-38.63556,lon:145.73245,blurb:"Inverloch Bowls Club, two greens beside the foreshore.",view:[260,60,0],priority:6,maxDist:1300,lift:12},{id:"tennis",name:"Tennis Club & Oval",kind:"landmark",lat:-38.62722,lon:145.7372,blurb:"Tennis courts and a second football oval on the north-east side of town.",view:[520,58,10],priority:6,maxDist:2e3,lift:14},{id:"camping",name:"Foreshore Holiday Parks",kind:"landmark",lat:-38.63425,lon:145.7442,blurb:"Cabins, caravans and tents under the trees along The Esplanade, steps from the inlet.",view:[560,60,15],priority:4,maxDist:2800,lift:16},{id:"screw",name:"Screw Creek & Townsend Bluff",kind:"nature",lat:-38.6338,lon:145.7546,blurb:"A tidal creek in a nature conservation reserve, with a walking circuit up to the lookout on Townsend Bluff.",view:[900,60,-20],priority:3,lift:24},{id:"norman",name:"Point Norman",kind:"nature",lat:-38.648,lon:145.7118,blurb:"The corner where the surf beach turns into the inlet.",view:[900,60,-35],priority:4,maxDist:4200,lift:14},{id:"smythe",name:"Point Smythe",kind:"nature",lat:-38.6466,lon:145.7366,blurb:"The tip of the Venus Bay peninsula, across the entrance from town: coastal scrub, dunes and walking tracks.",view:[1300,58,150],priority:3,lift:22},{id:"racv",name:"RACV Inverloch Resort",kind:"landmark",lat:-38.6487,lon:145.6876,blurb:"Resort and villas on the Cape Paterson road, on the hill above the coast.",view:[520,60,40],priority:5,maxDist:3200,lift:18},{id:"strait",name:"Bass Strait",kind:"water",lat:-38.6565,lon:145.7075,blurb:"Open ocean. Swell rolls in to the surf beach from here.",view:[2300,50,-12],priority:4}];function $x(i,t){return Kx.map(e=>{const n=(e.lon-i.origin[0])*i.metresPerDegree[0],s=-(e.lat-i.origin[1])*i.metresPerDegree[1],r=Math.max(t.yAt(n,s),0);return{...e,x:n,z:s,y:r+(e.lift??6)}})}function cn(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}const Jx=new Set(["Inverloch Surf Life Saving Club","The Hub"]),Ge=H(10126440),ye=H(6113848),hn=H(16053230),as=H(11842219),xe=H(7304312),Vs=H(3163994),os=H(13644844),ls=H(15909424),Qx=H(16119022),ll=2.05*Bn;function Vh(i,t,e,n=35){let s=1/0,r=0,a=1;for(let o=0;o<24;o++){const l=o/24*Math.PI*2,c=i.metresAt(t+Math.cos(l)*n,e+Math.sin(l)*n)+i.metresAt(t+Math.cos(l)*n*2,e+Math.sin(l)*n*2);c<s&&(s=c,r=Math.cos(l),a=Math.sin(l))}return[r,a]}function ta(i){let t=0,e=0;for(let n=0;n<i.length;n+=2)t+=i[n],e+=i[n+1];return[t/(i.length/2)/10,e/(i.length/2)/10]}function jx(i,t,e){const n=[];for(let _=0;_<e.length;_+=2)n.push([e[_]/10,e[_+1]/10]);t.metresAt(n[0][0],n[0][1])<t.metresAt(n[n.length-1][0],n[n.length-1][1])&&n.reverse();const s=1.7,r=ll,[a,o]=n[0];let l=a-n[1][0],c=o-n[1][1];const h=Math.hypot(l,c)||1;l/=h,c/=h;let u=0;for(;u<30&&t.yAt(a+l*u,o+c*u)<r-.25;)u+=1.5;const f=Math.max(t.yAt(a+l*u,o+c*u),r-1.2),d=Math.atan2(-l,-c);i.frame(a+l*u,0,o+c*u,d),i.quad(-s,f+.05,0,s,f+.05,0,s,r,u,-s,r,u,Ge),i.quad(-s,f-1.2,0,-s,r-.4,u,-s,r,u,-s,f+.05,0,ye),i.quad(s,f-1.2,0,s,f+.05,0,s,r,u,s,r-.4,u,ye);for(let _=0;_<n.length-1;_++){const[v,E]=n[_],[b,x]=n[_+1],y=Math.hypot(b-v,x-E),T=Math.atan2(b-v,x-E);i.frame(v,r,E,T);const R=Math.ceil(y/1.2);for(let N=0;N<R;N++){const B=N/R*y,P=(N+1)/R*y;i.box(-s,-.14,B,s,0,P,$t(Ge,.9+N*7%5*.04),void 0,ye)}i.box(-s+.25,-.5,0,-s+.5,-.14,y,ye,null),i.box(s-.5,-.5,0,s-.25,-.14,y,ye,null);const C=Math.max(1,Math.round(y/3.6));for(let N=0;N<=C;N++){const B=N/C*y;for(const P of[-1,1]){const k=P*(s-.12),D=t.yAt(i.wx(k,B),i.wz(k,B));i.cyl(k,D-r-.6,B,.17,.15,r-D+.6+1.1,6,ye,$t(Ge,.8))}i.box(-s,-.78,B-.12,s,-.5,B+.12,ye),i.quad(-s+.1,-2.6,B,s-.1,-.8,B,s-.1,-.6,B,-s+.1,-2.4,B,$t(ye,.9))}for(const N of[-1,1]){const B=N*(s-.12);i.box(B-.05,1.02,0,B+.05,1.1,y,Ge,void 0,ye),i.box(B-.03,.52,0,B+.03,.58,y,Ge,void 0,ye)}i.box(-s,-.14,-s,s,0,.01,Ge,void 0,ye)}const[p,M]=n[n.length-1],[m,g]=n[n.length-2],S=Math.atan2(p-m,M-g);i.frame(p,r,M,S),i.box(-3.2,-.14,0,3.2,0,5.2,$t(Ge,.96),void 0,ye);for(const[_,v]of[[-3.05,.2],[3.05,.2],[-3.05,5],[3.05,5],[0,5]]){const E=t.yAt(i.wx(_,v),i.wz(_,v));i.cyl(_,E-r-.6,v,.19,.17,r-E+.6+(_===0?0:1.1),6,ye,$t(Ge,.8))}i.box(-3.1,1.02,4.9,3.1,1.1,5,Ge,void 0,ye),i.box(-3.1,1.02,0,-3,1.1,5,Ge,void 0,ye),i.box(3,1.02,0,3.1,1.1,5,Ge,void 0,ye),i.cyl(2.6,0,4.5,.07,.05,4.6,5,xe),i.blob(2.6,4.75,4.5,.28,.2,.28,6,3,H(16773320),void 0,1.6),i.box(-.35,-3.6,5.22,-.3,.9,5.28,xe,null),i.box(.3,-3.6,5.22,.35,.9,5.28,xe,null);for(let _=-3.3;_<.6;_+=.42)i.box(-.3,_,5.22,.3,_+.05,5.28,xe);return i.frame(),{head:new W(p,r,M),points:n}}function t_(i,t,e,n){const[s,r]=Vh(t,e,n,25),a=Math.atan2(s,r);i.frame(e,0,n,a);const o=4.2,l=-8,c=[];for(let p=l;p<=46;p+=3){const M=t.yAt(i.wx(0,p),i.wz(0,p));if(c.push([p,M]),M<-1.6*Bn)break}const h=c[0][1]+.12,u=Math.min(c[c.length-1][1]+.25,-.9*Bn),f=c[c.length-1][0],d=c.length-1;for(let p=0;p<d;p++){const M=l+(f-l)*p/d,m=l+(f-l)*(p+1)/d,g=h+(u-h)*p/d,S=h+(u-h)*(p+1)/d;i.quad(-o,g,M,-o,S,m,o,S,m,o,g,M,p%2?as:$t(as,.94));for(const _ of[-1,1])i.quad(_*o,g-1.5,M,_*o,S-1.5,m,_*o,S+.15,m,_*o,g+.15,M,$t(as,.8))}i.frame()}function e_(i,t,e){const[n,s]=Vh(t,e.cx,e.cz,60),r=e.obb;let a=r.heading,o=r.w,l=r.d,c=-1/0;for(let b=0;b<4;b++){const x=r.heading+b*Math.PI/2,y=Math.sin(x)*n+Math.cos(x)*s;y>c&&(c=y,a=x,o=b%2?r.d:r.w,l=b%2?r.w:r.d)}const h=o/2,u=l/2;i.frame(r.cx,e.floorY,r.cz,a);const f=H(13223611),d=H(15394522),p=H(6975604);i.box(-h,-4,-u,h,3.1,u,f,null),i.box(-h,3.1,-u,h,6.1,u,d,null);const M=Math.max(2,Math.floor(o/5));for(let b=0;b<M;b++){const x=-h+(b+.5)/M*o;i.quad(x-1.7,.05,u+.05,x+1.7,.05,u+.05,x+1.7,2.7,u+.05,x-1.7,2.7,u+.05,b%2?os:ls)}i.quad(-h+.6,3.6,u+.05,h-.6,3.6,u+.05,h-.6,5.7,u+.05,-h+.6,5.7,u+.05,Vs,.9),i.box(-h-.6,2.95,u,h+.6,3.12,u+3.4,as,Ge,$t(as,.8)),i.box(-h-.6,3.12,u+3.32,h+.6,4.15,u+3.4,H(10469580),null);for(const b of[-h-.4,-h/3,h/3,h+.4])i.box(b-.12,-4,u+3,b+.12,2.95,u+3.24,xe,null);i.quad(-h-.8,7.5,u+3.8,h+.8,7.5,u+3.8,h+.8,6.2,-u-.6,-h-.8,6.2,-u-.6,p),i.quad(-h,6.1,u,h,6.1,u,h,7.1,u,-h,7.1,u,d),i.quad(h,6.1,u,h,6.1,-u,h,6.3,-u,h,7.1,u,d),i.quad(-h,6.1,-u,-h,6.1,u,-h,7.1,u,-h,6.3,-u,d);const m=h-2.2,g=u-1.8;i.box(m-1.8,6.1,g-1.8,m+1.8,9.2,g+1.8,d,null),i.box(m-1.85,9.2,g-1.85,m+1.85,10.5,g+1.85,Vs,null,null,.7),i.box(m-2.3,10.5,g-2.3,m+2.3,10.72,g+2.3,p),i.cyl(m,10.72,g,.06,.04,5.2,5,hn),i.quad(m,15.6,g,m+1.9,15.6,g,m+1.9,14.5,g,m,14.5,g,os),i.quad(m,14.5,g,m+1.9,14.5,g,m+1.9,13.4,g,m,13.4,g,ls);for(let b=0;b<4;b++){const x=-h+(b+.5)/4*o;i.quad(x+.9,3.9,-u-.05,x-.9,3.9,-u-.05,x-.9,5.3,-u-.05,x+.9,5.3,-u-.05,Vs,b%2)}let S=u+14;for(;S<160&&t.metresAt(r.cx+n*S,r.cz+s*S)>1.75;)S+=3;const _=r.cx+n*S,v=r.cz+s*S,E=Math.atan2(n,s);i.frame(_,t.yAt(_,v),v,E);for(const b of[-1,1]){const x=b*32,y=t.yAt(i.wx(x,0),i.wz(x,0))-t.yAt(_,v);i.cyl(x,y,0,.05,.04,4.4,5,hn),i.quad(x,y+4.4,0,x+.95,y+4.4,0,x+.95,y+3.1,0,x,y+3.1,0,os),i.quad(x,y+3.1,0,x+.95,y+3.1,0,x+.95,y+1.8,0,x,y+1.8,0,ls)}for(const[b,x]of[[-1.5,-5.5],[1.5,-5.5],[-1.5,-8.5],[1.5,-8.5]])i.cyl(b,0,x,.04,.04,2.2,4,xe);i.tri(-1.7,2.2,-5.3,1.7,2.2,-5.3,0,3,-7,os),i.tri(1.7,2.2,-8.7,-1.7,2.2,-8.7,0,3,-7,os),i.tri(1.7,2.2,-5.3,1.7,2.2,-8.7,0,3,-7,ls),i.tri(-1.7,2.2,-8.7,-1.7,2.2,-5.3,0,3,-7,ls),i.blob(6,.35,-6,.95,.4,2.1,8,3,H(14238751),H(15755818)),i.box(5.6,.3,-7.9,6.4,.95,-7.5,H(2763308));for(let b=0;b<4;b++)i.box(-7+b*.5,.2,-7.2,-6.85+b*.5,.75,-4.6,b%2?ls:H(3116992));return i.frame(),{beach:new W(_,t.yAt(_,v),v),seaward:[n,s]}}function Wh(i,t){const e=i.length/2;let n=0;for(let a=0;a<e;a++){const o=(a+1)%e;n+=i[a*2]*i[o*2+1]-i[o*2]*i[a*2+1]}const s=n>0?1:-1,r=[];for(let a=0;a<e;a++){const o=(a+e-1)%e,l=(a+1)%e;let c=i[a*2]-i[o*2],h=i[a*2+1]-i[o*2+1],u=i[l*2]-i[a*2],f=i[l*2+1]-i[a*2+1];const d=Math.hypot(c,h)||1,p=Math.hypot(u,f)||1;c/=d,h/=d,u/=p,f/=p;const M=-h*s,m=c*s;let g=M-f*s,S=m+u*s;const _=Math.hypot(g,S)||1;g/=_,S/=_;const v=t/Math.max(.45,g*M+S*m);r.push(i[a*2]+g*v,i[a*2+1]+S*v)}return r}function n_(i,t,e){i.frame(0,e.floorY,0,0);const n=H(11111014),s=H(15328470),r=H(9410458);let a=1/0;for(let h=0;h<e.poly.length;h+=2)a=Math.min(a,t.yAt(e.poly[h],e.poly[h+1]));const o=e.poly.length/2;i.walls(e.poly,a-e.floorY-.3,3.2,n),i.walls(e.poly,3.2,6.2,s);const l=Wh(e.poly,3.2),c=Wh(e.poly,4.4);for(let h=0;h<o;h++){const u=(h+1)%o;i.quad(e.poly[h*2],6.6,e.poly[h*2+1],e.poly[u*2],6.6,e.poly[u*2+1],l[u*2],6.05,l[u*2+1],l[h*2],6.05,l[h*2+1],r)}if(i.walls(e.poly,6.2,6.6,$t(s,.92)),i.walls(l,6.05,7.9,Vs,.8),i.cap(l,7.9,$t(r,1.08)),i.walls(c,7.9,8.3,$t(r,.9)),i.cap(c,8.3,r),e.street){const h=e.street;i.frame(h.x,e.floorY,h.z,h.heading),i.quad(.6,.3,.06,h.length-.6,.3,.06,h.length-.6,5.6,.06,.6,5.6,.06,Vs,.9),i.box(h.length*.3,3.3,0,h.length*.7,3.5,3.4,H(14263361),void 0,$t(H(14263361),.8)),i.box(h.length*.3+.2,0,3.1,h.length*.3+.4,3.3,3.3,xe,null),i.box(h.length*.7-.4,0,3.1,h.length*.7-.2,3.3,3.3,xe,null)}i.frame()}function rn(i,t,e,n,s,r=Qx){const a=e.length,o=.22,l=s?a:a-1;for(let c=0;c<l;c++){const[h,u]=e[c],[f,d]=e[(c+1)%a];let p=-(d-u),M=f-h;const m=Math.hypot(p,M)||1;p=p/m*n*.5,M=M/m*n*.5;const g=t.yAt(h,u)+o,S=t.yAt(f,d)+o;i.quad(h+p,g,u+M,f+p,S,d+M,f-p,S,d-M,h-p,g,u-M,r)}}function i_(i,t,e,n,s){const r=[];for(let _=0;_<n.length;_+=2)r.push([n[_]/10,n[_+1]/10]);const[a,o]=ta(n);let l=0,c=0,h=0;for(const[_,v]of r)l+=(_-a)**2,c+=(v-o)**2,h+=(_-a)*(v-o);const u=.5*Math.atan2(2*h,l-c),f=Math.cos(u),d=Math.sin(u);let p=0,M=0;for(const[_,v]of r)p=Math.max(p,Math.abs((_-a)*f+(v-o)*d)),M=Math.max(M,Math.abs(-(_-a)*d+(v-o)*f));p-=5,M-=5;const m=(_,v)=>[a+_*f-v*d,o+_*d+v*f],g=[];for(let _=0;_<72;_++){const v=_/72*Math.PI*2;g.push(m(Math.cos(v)*p,Math.sin(v)*M))}rn(t,e,g,.35,!0),rn(t,e,[m(-25,-25),m(25,-25),m(25,25),m(-25,25)],.3,!0);const S=_=>Array.from({length:24},(v,E)=>m(Math.cos(E/24*Math.PI*2)*_,Math.sin(E/24*Math.PI*2)*_));rn(t,e,S(5),.3,!0),rn(t,e,S(1.5),.3,!0);for(const _ of[-1,1]){rn(t,e,[m(_*p,-3.2),m(_*(p-9),-3.2),m(_*(p-9),3.2),m(_*p,3.2)],.3,!1);const v=[];for(let E=-8;E<=8;E++){const b=E/8*1.05,x=_*(p-50*Math.cos(b)),y=50*Math.sin(b);(x/p)**2+(y/M)**2<1&&v.push(m(x,y))}v.length>2&&rn(t,e,v,.3,!1);for(const[E,b]of[[-3.2,9.5],[3.2,9.5],[-9.6,6.2],[9.6,6.2]]){const[x,y]=m(_*p,E);i.frame(x,e.yAt(x,y),y,0),i.cyl(0,0,0,.11,.09,b,6,hn),i.cyl(0,0,0,.2,.2,1.6,6,E*E<12?H(2973608):H(12597806))}}if(s)for(const[_,v]of[[-.62,-1],[.62,-1],[-.62,1],[.62,1]]){const[E,b]=m(_*(p+6),v*(M+9));i.frame(E,e.yAt(E,b),b,Math.atan2(a-E,o-b)),i.cyl(0,0,0,.28,.16,24,6,xe),i.box(-1.7,24,-.2,1.7,25.3,.2,H(4869972)),i.quad(-1.6,24.1,.22,1.6,24.1,.22,1.6,25.2,.22,-1.6,25.2,.22,H(16774876),2.2)}i.frame()}function s_(i,t,e,n,s){const r=[];for(let v=0;v<n.length;v+=2)r.push([n[v]/10,n[v+1]/10]);if(r.length<4)return;if(s==="bowls"){rn(t,e,r,.5,!0,H(15328986));return}const[a,o,l,c]=r,h=Math.hypot(o[0]-a[0],o[1]-a[1])>Math.hypot(l[0]-o[0],l[1]-o[1]),u=h?a:o,f=h?o:l,d=h?l:c,p=h?c:a,M=(v,E)=>{const b=u[0]+(f[0]-u[0])*v,x=u[1]+(f[1]-u[1])*v,y=p[0]+(d[0]-p[0])*v,T=p[1]+(d[1]-p[1])*v;return[b+(y-b)*E,x+(T-x)*E]},m=.14;rn(t,e,[M(0,0),M(1,0),M(1,1),M(0,1)],m,!0),rn(t,e,[M(0,.125),M(1,.125)],m,!1),rn(t,e,[M(0,.875),M(1,.875)],m,!1),rn(t,e,[M(.23,.125),M(.23,.875)],m,!1),rn(t,e,[M(.77,.125),M(.77,.875)],m,!1),rn(t,e,[M(.23,.5),M(.77,.5)],m,!1);const g=M(.5,-.04),S=M(.5,1.04),_=e.yAt(g[0],g[1])+.2;i.frame(0,_,0,0),i.quad(g[0],0,g[1],S[0],0,S[1],S[0],.95,S[1],g[0],.95,g[1],H(2830131)),i.quad(g[0],.95,g[1],S[0],.95,S[1],S[0],1.05,S[1],g[0],1.05,g[1],hn);for(const v of[g,S])i.cyl(v[0],0,v[1],.06,.06,1.1,5,xe);i.frame()}const Qn=[14826299,15764004,15909424,5025616,3117008,8280002].map(H);function r_(i,t,e,n,s){const[r,a]=ta(e),o=t.yAt(r,a)+.05,l=s()*Math.PI;i.frame(r,o,a,l);const c=(f,d,p,M)=>{for(const[m,g]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.cyl(f+m,0,d+g,.07,.07,p+2,5,H(8018492));i.box(f-1,p-.1,d-1,f+1,p,d+1,Ge,void 0,ye),i.cyl(f,p+2,d,1.5,0,1,4,M)};c(-2.2,0,1.5,Qn[0]),c(2.2,0,2.1,Qn[4]),i.box(-1.2,1.4,-.35,1.2,1.5,.35,Ge),i.quad(3.2,2.1,-.4,6.4,.15,-.4,6.4,.15,.4,3.2,2.1,.4,Qn[2]),i.quad(-3.2,1.5,.4,-5.6,.15,.4,-5.6,.15,-.4,-3.2,1.5,-.4,Qn[1]);const h=0,u=5.2;for(const f of[-2.2,2.2])i.quad(h+f,0,u-1.1,h+f+.08,0,u-1.1,h+f+.08,2.6,u,h+f,2.6,u,xe),i.quad(h+f,0,u+1.1,h+f+.08,0,u+1.1,h+f+.08,2.6,u,h+f,2.6,u,xe);i.box(h-2.25,2.55,u-.05,h+2.25,2.65,u+.05,Qn[3]);for(const f of[-1.1,0,1.1])i.box(h+f-.25,.5,u-.1,h+f+.25,.56,u+.1,H(2763308)),i.box(h+f-.24,.56,u-.01,h+f-.22,2.55,u+.01,xe,null),i.box(h+f+.22,.56,u-.01,h+f+.24,2.55,u+.01,xe,null);if(n){i.cyl(-6.5,0,-5.5,.09,.07,5.2,5,xe);for(let f=0;f<6;f++){const d=f/6*Math.PI*2,p=-6.5+Math.cos(d)*3.2,M=-5.5+Math.sin(d)*3.2;i.quad(p-.04,0,M,p+.04,0,M,-6.46,5.1,-5.5,-6.54,5.1,-5.5,H(3104672))}for(let f=0;f<6;f++){const d=-9+f*3.4,p=Qn[f],M=4.6,m=3.3;i.cyl(d,0,-11,.08,.07,M,5,xe),i.cyl(d+1.7,0,-7.2,.08,.07,m,5,xe),i.tri(d,M,-11,d+3.4,M,-11,d+1.7,m,-7.2,p)}i.cyl(11.399999999999999,0,-11,.08,.07,4.6,5,xe),i.cyl(6.5,.3,5.5,1.3,1.3,.12,10,Qn[5],Qn[2]),i.cyl(6.5,0,5.5,.1,.1,1.1,5,xe);for(let f=0;f<3;f++)i.blob(9.5+f*1.6,.55,-1.5,.3,.3,.55,5,3,Qn[(f*2+1)%6])}i.frame()}function a_(i,t,e){const n=[];for(let u=0;u<e.length;u+=2)n.push([e[u]/10,e[u+1]/10]);const[s,r]=ta(e),a=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1])>Math.hypot(n[2][0]-n[1][0],n[2][1]-n[1][1])?[n[0],n[1]]:[n[1],n[2]],o=Math.atan2(a[1][0]-a[0][0],a[1][1]-a[0][1]),l=Math.hypot(a[1][0]-a[0][0],a[1][1]-a[0][1])/2-1;i.frame(s,t.yAt(s,r)+.1,r,o);const c=H(13092286),h=$t(c,.88);for(const u of[-1,1]){const f=u*l,d=[[0,0],[1.4,.35],[2.4,1.1],[3,2]];for(let p=0;p<3;p++){const[M,m]=d[p],[g,S]=d[p+1],_=f-u*(3-M),v=f-u*(3-g);u>0?i.quad(-4,m,_,4,m,_,4,S,v,-4,S,v,p%2?c:h):i.quad(4,m,_,-4,m,_,-4,S,v,4,S,v,p%2?c:h)}i.box(-4,0,Math.min(f,f+u*1.2),4,2,Math.max(f,f+u*1.2),h,c)}i.box(-1.5,0,-1.2,1.5,.45,1.2,h,c),i.quad(-1.5,.45,1.2,1.5,.45,1.2,1.5,0,3,-1.5,0,3,c),i.quad(1.5,.45,-1.2,-1.5,.45,-1.2,-1.5,0,-3,1.5,0,-3,c),i.box(3.2,.45,-2.5,3.28,.5,2.5,xe),i.frame()}function o_(i,t){const e=t.obb,n=e.w>=e.d,s=(n?e.w:e.d)/2;i.frame(e.cx,t.floorY,e.cz,e.heading);const r=n?s+1.2:0,a=n?0:s+1.2,o=H(15262418);i.box(r-1.4,-1,a-1.4,r+1.4,t.wallH+4.6,a+1.4,o,null),i.cyl(r,t.wallH+4.6,a,2.1,0,4.2,4,H(5922659)),i.box(r-.07,t.wallH+8.8,a-.07,r+.07,t.wallH+10.6,a+.07,hn),i.box(r-.5,t.wallH+9.8,a-.07,r+.5,t.wallH+9.95,a+.07,hn),i.frame()}function l_(i,t,e,n){i.frame(e,t.yAt(e,n),n,.4);const s=46;for(let r=0;r<6;r++){const a=r/6*s,o=1.5-r/6*1.1,l=1.5-(r+1)/6*1.1;i.cyl(0,a,0,o,l,s/6,3,r%2?hn:os)}i.cyl(0,s,0,.08,.05,5,4,xe),i.blob(0,s+5.1,0,.3,.3,.3,5,3,H(16726832),void 0,2.5);for(const[r,a]of[[.3,38],[2.4,35],[4.4,40]])i.cyl(Math.cos(r)*.9,a,Math.sin(r)*.9,.55,.55,.35,8,hn,hn);i.box(2.5,0,-1.5,5.5,2.6,1.5,H(13619919),H(9080716)),i.frame()}function c_(i,t,e,n,s){const r=s.nearest(e,n,60),a=r?Math.atan2(r.px-e,r.pz-n):0;i.frame(e,t.yAt(e,n)+.1,n,a);const o=H(3116874);for(const[l,c]of[[-6,3.5],[6,3.5],[-6,9.5],[6,9.5]])i.box(l-.2,0,c-.2,l+.2,5,c+.2,hn,null);i.box(-8,5,2,8,5.25,11,hn,H(14277590),H(15921902),.5),i.box(-8.05,5.25,1.95,8.05,5.9,11.05,o,H(14277590));for(const l of[-4,0,4])i.box(l-1.3,0,6.2,l+1.3,.2,6.8,as),i.box(l-.4,.2,6.25,l+.4,1.7,6.75,hn,o);i.frame()}function h_(i,t,e,n,s){for(let r=0;r<3;r++){const a=e+(s()-.5)*16,o=n+(s()-.5)*16;i.frame(a,t.yAt(a,o)+.05,o,s()*Math.PI),i.box(-1,.7,-.4,1,.78,.4,Ge,void 0,ye),i.box(-1,.4,-.85,1,.46,-.6,Ge,void 0,ye),i.box(-1,.4,.6,1,.46,.85,Ge,void 0,ye),i.box(-.75,0,-.7,-.65,.7,.7,xe,null),i.box(.65,0,-.7,.75,.7,.7,xe,null)}i.frame()}function u_(i){if(!i.hasDetail)return null;const{town:t,hf:e,roads:n,paths:s}=i,r=new Jt,a=ze(4411),o=[12597547,3108687,15921902,3426654,9268810,14266938,10134443].map(H),l=H(7301730),c=H(3103290),h=[H(13115434),H(15254046)],u=t.houses,f=Oh(t),d=[];for(let b=0;b<u.length;b+=nl)u[b+5]!==1&&d.push(u[b]/4,u[b+1]/4);const p=d.length;for(const[,b,,,,,,x]of il)x!=="s"&&b[2]>=5&&d.push(b[0],b[1]);for(let b=0;b<d.length;b+=2){const x=d[b],y=d[b+1];if(!i.isDetail(x,y)||i.isClear(x,y))continue;const T=n.nearest(x,y,45),R=a()<.5?-1:1,C=R*(2.5+a()*2.5),N=Math.floor(a()*o.length),B=a()<.7;if(!T||b<p&&f(x,y))continue;const P=T.cls<=3?6.4:3.6;if(T.dist<P+3)continue;const k=(x-T.px)/T.dist,D=(y-T.pz)/T.dist,L=-D,Z=k,Y=Math.atan2(k,D),U=T.px+k*P+L*C,O=T.pz+D*P+Z*C;if(!i.isClear(U,O)&&(r.frame(U,e.yAt(U,O),O,Y),r.box(-.05,0,-.05,.05,.95,.05,l),r.box(-.17,.95,-.22,.17,1.22,.22,o[N],$t(o[N],.8)),B)){const z=T.px+k*(P-1.1)+L*(C+R*1.5),X=T.pz+D*(P-1.1)+Z*(C+R*1.5);r.frame(z,e.yAt(z,X),X,Y),h.forEach((F,K)=>{r.box(K*.72-.28,0,-.33,K*.72+.28,.96,.33,c),r.box(K*.72-.3,.96,-.36,K*.72+.3,1.04,.36,F)})}}const M=H(7034692),m=H(5917242),g=H(2829102),S=H(14276303),_=42,v=new Jt;for(const b of s){if(b.cls>3||b.flags)continue;const x=b.pts.length/3;let y=_*.4,T=null;for(let R=1;R<x;R++){const C=b.pts[R*3-3],N=b.pts[R*3-1],B=b.pts[R*3],P=b.pts[R*3+2],k=Math.hypot(B-C,P-N);if(y+=k,y<_)continue;y=0;const D=(B-C)/(k||1),L=(P-N)/(k||1),Z=b.width/2+2.5,Y=B+L*Z,U=P-D*Z;if(!i.isDetail(Y,U)||i.isClear(Y,U)||!e.inside(Y,U,20)){T=null;continue}const O=e.yAt(Y,U);v.frame(Y,O,U,Math.atan2(D,L)),v.cyl(0,0,0,.15,.1,9.2,6,M),v.box(-1.15,8.45,-.06,1.15,8.58,.06,m);for(const X of[-.95,0,.95])v.box(X-.04,8.58,-.04,X+.04,8.72,.04,S);const z={x:Y,y:O+8.72,z:U,nx:L,nz:-D};if(T&&Math.hypot(z.x-T.x,z.z-T.z)<_*1.8){v.frame();for(const X of[-.95,0,.95]){const F=T.x+T.nx*X,K=T.z+T.nz*X,et=z.x+z.nx*X,lt=z.z+z.nz*X,nt=(F+et)/2,pt=(K+lt)/2,Bt=(T.y+z.y)/2-.5;for(const[bt,Ot,Ft,It,Qt,ae]of[[F,T.y,K,nt,Bt,pt],[nt,Bt,pt,et,z.y,lt]])v.quad(bt,Ot,Ft,It,Qt,ae,It,Qt+.035,ae,bt,Ot+.035,Ft,g),v.quad(bt,Ot,Ft,It,Qt,ae,It+z.nx*.035,Qt,ae+z.nz*.035,bt+z.nx*.035,Ot,Ft+z.nz*.035,g)}}T=z}}if(!r.vertexCount&&!v.vertexCount)return null;const E=new Yt(r.build(),is());if(E.castShadow=!0,E.receiveShadow=!0,E.name="street-detail",v.vertexCount){const b=new Yt(v.build(),is());b.castShadow=!1,b.receiveShadow=!0,b.name="power-poles",E.add(b)}return E}function d_(i){const{town:t,hf:e,paths:n}=i,s=120,r=new Map,a=t.houses;for(let C=0;C<a.length;C+=nl){const N=Math.floor(a[C]/4/s)*4096+Math.floor(a[C+1]/4/s)+8390656;r.set(N,(r.get(N)??0)+1)}const[o,l]=cn(t.meta,-38.63385,145.7285),c=(C,N)=>(r.get(Math.floor(C/s)*4096+Math.floor(N/s)+2048*4097)??0)>=4||Math.hypot(C-o,N-l)<380,h=[];for(const C of n){if(C.cls>2||C.flags)continue;const N=C.cls===0?48:58,B=C.pts.length/3;let P=N*.5,k=1;for(let D=1;D<B;D++){const L=C.pts[D*3-3],Z=C.pts[D*3-1],Y=C.pts[D*3],U=C.pts[D*3+2],O=Math.hypot(Y-L,U-Z);if(P+=O,P<N)continue;P=0,k=-k;const z=(Y-L)/(O||1),X=(U-Z)/(O||1),F=C.width/2+1.6,K=Y-X*F*k,et=U+z*F*k;!c(K,et)||!e.inside(K,et,20)||i.isClear(K,et)||h.push(K,e.yAt(K,et),et,Math.atan2(X*k,-z*k))}}const u=new Jt,f=H(9278358);u.cyl(0,0,0,.11,.07,8.2,5,f),u.box(-.05,8.1,0,.05,8.22,2.2,f),u.box(-.22,8,1.7,.22,8.14,2.5,H(5922659)),u.quad(-.2,7.99,2.48,.2,7.99,2.48,.2,7.99,1.72,-.2,7.99,1.72,H(16773320),3);const d=h.length/4,p=new Ze(u.build(),is(),d),M=document.createElement("canvas");M.width=M.height=64;const m=M.getContext("2d"),g=m.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,"rgba(255,214,150,0.85)"),g.addColorStop(.45,"rgba(255,196,120,0.32)"),g.addColorStop(1,"rgba(255,180,100,0)"),m.fillStyle=g,m.fillRect(0,0,64,64);const S=new Lo(M);S.colorSpace=Te;const _=new Un(34,34);_.rotateX(-Math.PI/2);const v=new Nn({map:S,transparent:!0,opacity:0,blending:oa,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),E=new Ze(_,v,d);E.renderOrder=3;const b=new jt,x=new vn,y=new W(0,1,0),T=new W(1,1,1),R=new W;for(let C=0;C<d;C++){const N=h[C*4],B=h[C*4+1],P=h[C*4+2],k=h[C*4+3];x.setFromAxisAngle(y,k),p.setMatrixAt(C,b.compose(R.set(N,B,P),x,T));const D=N+Math.sin(k)*2.1,L=P+Math.cos(k)*2.1;E.setMatrixAt(C,b.compose(R.set(D,e.yAt(D,L)+.5,L),x.identity(),T))}return p.castShadow=!1,p.computeBoundingSphere(),E.computeBoundingSphere(),E.onBeforeRender=()=>{v.opacity=Xr.value*.9},E.visible=!0,{lights:p,pools:E,poolMat:v}}function f_(i){const{town:t,hf:e,footprints:n,roads:s}=i,r=new Je;r.name="landmarks";const a=new Jt,o=new Jt,l=ze(20261111),c={group:r,nightMaterials:[]};t.piers[0]&&(c.jetty=jx(a,e,t.piers[0]));for(const[y,T]of[[-38.63578,145.73393],[-38.63595,145.73085]]){const[R,C]=cn(t.meta,y,T);t_(a,e,R,C)}const h=n.find(y=>y.name==="Inverloch Surf Life Saving Club");h&&(c.surf=e_(a,e,h));const u=n.find(y=>y.name==="The Hub");u&&n_(a,e,u);for(const y of n)y.kind==="church"&&o_(a,y);let f=0;for(const y of t.pitches)y.s==="australian_football"?i_(a,o,e,y.p,f++===0):y.s==="tennis"||y.s==="bowls"?s_(a,o,e,y.p,y.s):y.s==="skateboard"&&a_(a,e,y.p);const[d,p]=cn(t.meta,-38.63529,145.72876);for(const y of t.playgrounds){const[T,R]=ta(y);r_(a,e,y,Math.hypot(T-d,R-p)<60,l)}const[M,m]=cn(t.meta,-38.62462,145.71011);l_(a,e,M,m);const[g,S]=cn(t.meta,-38.63161,145.72943);c_(a,e,g,S,s);for(const[y,T]of[[-38.6358,145.72885],[-38.63447,145.72923],[-38.63545,145.72875]]){const[R,C]=cn(t.meta,y,T);h_(a,e,R,C,l)}const _=new Yt(a.build(),is());_.castShadow=!0,_.receiveShadow=!0,r.add(_);const v=o.build();v.deleteAttribute("glow");const E=new Yt(v,Yr(new Nn({vertexColors:!0,side:Ie,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})));r.add(E);const b=u_(i);b&&r.add(b);const x=d_(i);return r.add(x.lights,x.pools),c.nightMaterials.push(x.poolMat),c}const p_=`
  vec4 coastalPosition = vec4(transformed, 1.0);
  #ifdef USE_BATCHING
    coastalPosition = batchingMatrix * coastalPosition;
  #endif
  #ifdef USE_INSTANCING
    coastalPosition = instanceMatrix * coastalPosition;
  #endif
  vCoastalWorld = (modelMatrix * coastalPosition).xyz;
`,Xh=`
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
`;class m_{constructor(t,e,n,s){j(this,"prepared",new WeakSet);j(this,"inlet",{value:new W});j(this,"mist");this.color=n,this.inlet.value.set(t,0,e),this.mist={value:Number(s)}}setMist(t){this.mist.value=Number(t)}setWaterLevel(t){this.inlet.value.y=t}add(t){t.traverse(e=>{const{material:n}=e;if(n)for(const s of Array.isArray(n)?n:[n])this.prepare(s)})}addWater(t){this.prepare(t.material,!0)}prepare(t,e=!1){if(!t.toneMapped||this.prepared.has(t)||t instanceof nn&&!e)return;this.prepared.add(t);const n=t.onBeforeCompile,s=t.customProgramCacheKey();t.customProgramCacheKey=()=>s+":coastal-haze",t.onBeforeCompile=(r,a)=>{n.call(t,r,a),r.uniforms.uCoastalColor=this.color,r.uniforms.uInletCenter=this.inlet,r.uniforms.uCoastalMist=this.mist;const o=e?Xh.replace(/vCoastalWorld/g,"vW"):Xh;e||(r.vertexShader=`varying vec3 vCoastalWorld;
`+r.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
`+p_));const l=e?r.fragmentShader.replace("varying vec3 vW;",""):r.fragmentShader;r.fragmentShader=o+l.replace("#include <tonemapping_fragment>",`gl_FragColor.rgb = coastalLight(gl_FragColor.rgb);
#include <tonemapping_fragment>`)},t.needsUpdate=!0}}const Yh="dmFyIFY9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBIPShULHAseik9PnAgaW4gVD9WKFQscCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6en0pOlRbcF09ejt2YXIgTT0oVCxwLHopPT5IKFQsdHlwZW9mIHAhPSJzeW1ib2wiP3ArIiI6cCx6KTsoZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgcHtjb25zdHJ1Y3RvcihlLG4sdCxyLHMsaCxvLGEpe00odGhpcywibngiKTtNKHRoaXMsIm56Iik7TSh0aGlzLCJ5Iik7TSh0aGlzLCJ4TWluIik7TSh0aGlzLCJ6TWluIik7TSh0aGlzLCJ4TWF4Iik7TSh0aGlzLCJ6TWF4Iik7TSh0aGlzLCJkeCIpO00odGhpcywiZHoiKTtNKHRoaXMsImNlbGxYIik7TSh0aGlzLCJjZWxsWiIpO2lmKHRoaXMucmF3PWUsdGhpcy5leHBvc3VyZT1uLHRoaXMudz10LHRoaXMuaD1yLHRoaXMuc2l6ZVg9cyx0aGlzLnNpemVaPWgsdGhpcy5jZWxsWD1zL3QsdGhpcy5jZWxsWj1oL3IsdGhpcy5ueD1NYXRoLmZsb29yKCh0LTEpL28pKzEsdGhpcy5uej1NYXRoLmZsb29yKChyLTEpL28pKzEsdGhpcy5keD10aGlzLmNlbGxYKm8sdGhpcy5kej10aGlzLmNlbGxaKm8sdGhpcy54TWluPS1zLzIrdGhpcy5jZWxsWC8yLHRoaXMuek1pbj0taC8yK3RoaXMuY2VsbFovMix0aGlzLnhNYXg9dGhpcy54TWluKyh0aGlzLm54LTEpKnRoaXMuZHgsdGhpcy56TWF4PXRoaXMuek1pbisodGhpcy5uei0xKSp0aGlzLmR6LHRoaXMueT1hPz9uZXcgRmxvYXQzMkFycmF5KHRoaXMubngqdGhpcy5ueiksIWEpZm9yKGxldCBkPTA7ZDx0aGlzLm56O2QrKylmb3IobGV0IGM9MDtjPHRoaXMubng7YysrKXRoaXMueVtkKnRoaXMubngrY109ZVtkKm8qdCtjKm9dKjEuNX15QXQoZSxuKXtsZXQgdD0oZS10aGlzLnhNaW4pL3RoaXMuZHgscj0obi10aGlzLnpNaW4pL3RoaXMuZHo7dDwwP3Q9MDp0PnRoaXMubngtMS4wMDAxJiYodD10aGlzLm54LTEuMDAwMSkscjwwP3I9MDpyPnRoaXMubnotMS4wMDAxJiYocj10aGlzLm56LTEuMDAwMSk7Y29uc3Qgcz10fDAsaD1yfDAsbz10LXMsYT1yLWgsZD1oKnRoaXMubngrcyxjPXRoaXMueVtkXSxsPXRoaXMueVtkKzFdLGY9dGhpcy55W2QrdGhpcy5ueF0sdT10aGlzLnlbZCt0aGlzLm54KzFdO3JldHVybiBvK2E8PTE/YysobC1jKSpvKyhmLWMpKmE6dSsoZi11KSooMS1vKSsobC11KSooMS1hKX1iaWxpbmVhcihlLG4sdCl7bGV0IHI9KG4rdGhpcy5zaXplWC8yKS90aGlzLmNlbGxYLS41LHM9KHQrdGhpcy5zaXplWi8yKS90aGlzLmNlbGxaLS41O3I8MD9yPTA6cj50aGlzLnctMS4wMDAxJiYocj10aGlzLnctMS4wMDAxKSxzPDA/cz0wOnM+dGhpcy5oLTEuMDAwMSYmKHM9dGhpcy5oLTEuMDAwMSk7Y29uc3QgaD1yfDAsbz1zfDAsYT1yLWgsZD1zLW8sYz1vKnRoaXMudytoO3JldHVybihlW2NdKigxLWEpK2VbYysxXSphKSooMS1kKSsoZVtjK3RoaXMud10qKDEtYSkrZVtjK3RoaXMudysxXSphKSpkfW1ldHJlc0F0KGUsbil7cmV0dXJuIHRoaXMuYmlsaW5lYXIodGhpcy5yYXcsZSxuKX1leHBvc3VyZUF0KGUsbil7cmV0dXJuIHRoaXMuYmlsaW5lYXIodGhpcy5leHBvc3VyZSxlLG4pfWluc2lkZShlLG4sdD0wKXtyZXR1cm4gZT50aGlzLnhNaW4rdCYmZTx0aGlzLnhNYXgtdCYmbj50aGlzLnpNaW4rdCYmbjx0aGlzLnpNYXgtdH19Y29uc3Qgej0xMjg7ZnVuY3Rpb24gRChpLGUsbil7Y29uc3R7bng6dCxuejpyfT1pLHM9TWF0aC5taW4oeisxLHQtZSksaD1NYXRoLm1pbih6KzEsci1uKSxvPW5ldyBGbG9hdDMyQXJyYXkocypoKjMpLGE9bmV3IEZsb2F0MzJBcnJheShzKmgqMyksZD1uZXcgRmxvYXQzMkFycmF5KHMqaCoyKTtmb3IobGV0IGY9bjtmPG4raDtmKyspZm9yKGxldCB1PWU7dTxlK3M7dSsrKXtjb25zdCB3PShmLW4pKnMrdS1lLHg9aS54TWluK3UqaS5keCx5PWkuek1pbitmKmkuZHo7b1t3KjNdPXgsb1t3KjMrMV09aS55W2YqdCt1XSxvW3cqMysyXT15LGRbdyoyXT0oeCtpLnNpemVYLzIpL2kuc2l6ZVgsZFt3KjIrMV09MS0oeStpLnNpemVaLzIpL2kuc2l6ZVo7Y29uc3Qgdj1pLnlbZip0K01hdGgubWF4KHUtMSwwKV0sRT1pLnlbZip0K01hdGgubWluKHUrMSx0LTEpXSxiPWkueVtNYXRoLm1heChmLTEsMCkqdCt1XSxBPWkueVtNYXRoLm1pbihmKzEsci0xKSp0K3VdLG09KEUtdikvKDIqaS5keCksaz0oQS1iKS8oMippLmR6KSxnPU1hdGguaHlwb3QobSwxLGspO2FbdyozXT0tbS9nLGFbdyozKzFdPTEvZyxhW3cqMysyXT0tay9nfWNvbnN0IGM9bmV3IFVpbnQxNkFycmF5KChzLTEpKihoLTEpKjYpO2xldCBsPTA7Zm9yKGxldCBmPTA7ZjxoLTE7ZisrKWZvcihsZXQgdT0wO3U8cy0xO3UrKyl7Y29uc3Qgdz1mKnMrdSx4PXcrMSx5PXcrcyx2PXkrMTtjW2wrK109dyxjW2wrK109eSxjW2wrK109eCxjW2wrK109eCxjW2wrK109eSxjW2wrK109dn1yZXR1cm57cG9zOm8sbm9yOmEsdXY6ZCxpZHg6Y319ZnVuY3Rpb24gUyhpKXtjb25zdCBlPVtdO2ZvcihsZXQgbj0wO248aS5uei0xO24rPXopZm9yKGxldCB0PTA7dDxpLm54LTE7dCs9eillLnB1c2goRChpLHQsbikpO3JldHVybiBlfWZ1bmN0aW9uIFUoaSl7Y29uc3QgZT1hdG9iKGkpLG49bmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpO2ZvcihsZXQgdD0wO3Q8ZS5sZW5ndGg7dCsrKW5bdF09ZS5jaGFyQ29kZUF0KHQpO3JldHVybiBuZXcgSW50MTZBcnJheShuLmJ1ZmZlciwwLG4ubGVuZ3RoPj4xKX1hc3luYyBmdW5jdGlvbiBCKGkpe2NvbnN0IGU9bmV3IFVpbnQ4QXJyYXkoaSksbj1uZXcgRGF0YVZpZXcoaSk7bGV0IHQ9OCxyPTAscz0wLGg9MCxvPTAsYT0wO2NvbnN0IGQ9W107Zm9yKDt0PGUubGVuZ3RoOyl7Y29uc3QgeD1uLmdldFVpbnQzMih0KSx5PVN0cmluZy5mcm9tQ2hhckNvZGUoZVt0KzRdLGVbdCs1XSxlW3QrNl0sZVt0KzddKTtpZih5PT09IklIRFIiKXI9bi5nZXRVaW50MzIodCs4KSxzPW4uZ2V0VWludDMyKHQrMTIpLGg9ZVt0KzE2XSxvPWVbdCsxN10sYT1lW3QrMjBdO2Vsc2UgaWYoeT09PSJJREFUIilkLnB1c2goZS5zdWJhcnJheSh0KzgsdCs4K3gpKTtlbHNlIGlmKHk9PT0iSUVORCIpYnJlYWs7dCs9MTIreH1pZihoIT09OHx8byE9PTImJm8hPT02fHxhKXRocm93IG5ldyBFcnJvcigiVW5zdXBwb3J0ZWQgdGVycmFpbiBpbWFnZSBmb3JtYXQiKTtjb25zdCBjPW89PT0yPzM6NCxsPW5ldyBCbG9iKGQpLnN0cmVhbSgpLnBpcGVUaHJvdWdoKG5ldyBEZWNvbXByZXNzaW9uU3RyZWFtKCJkZWZsYXRlIikpLGY9bmV3IFVpbnQ4QXJyYXkoYXdhaXQgbmV3IFJlc3BvbnNlKGwpLmFycmF5QnVmZmVyKCkpLHU9cipjLHc9bmV3IFVpbnQ4QXJyYXkodSpzKTtmb3IobGV0IHg9MDt4PHM7eCsrKXtjb25zdCB5PWZbeCoodSsxKV0sdj14Kih1KzEpKzEsRT14KnU7Zm9yKGxldCBiPTA7Yjx1O2IrKyl7Y29uc3QgQT1iPj1jP3dbRStiLWNdOjAsbT14PjA/d1tFLXUrYl06MCxrPWI+PWMmJng+MD93W0UtdStiLWNdOjA7bGV0IGc9Zlt2K2JdO2lmKHk9PT0xKWcrPUE7ZWxzZSBpZih5PT09MilnKz1tO2Vsc2UgaWYoeT09PTMpZys9QSttPj4xO2Vsc2UgaWYoeT09PTQpe2NvbnN0IEY9TWF0aC5hYnMobS1rKSxJPU1hdGguYWJzKEEtayksWj1NYXRoLmFicyhBK20tMiprKTtnKz1GPD1JJiZGPD1aP0E6STw9Wj9tOmt9d1tFK2JdPWcmMjU1fX1yZXR1cm57d2lkdGg6cixoZWlnaHQ6cyxjaGFubmVsczpjLGRhdGE6d319YXN5bmMgZnVuY3Rpb24gcShpLGUsbil7Y29uc3RbdCxyXT1hd2FpdCBQcm9taXNlLmFsbChbZmV0Y2goaS50b3duLHtzaWduYWw6bn0pLnRoZW4obD0+e2lmKCFsLm9rKXRocm93IG5ldyBFcnJvcigiQ291bGQgbm90IGxvYWQgdGhlIHRvd24gZGF0YSIpO3JldHVybiBsLmpzb24oKX0pLnRoZW4obD0+KGUoIlN0cmVldHMgYW5kIGJ1aWxkaW5ncyIpLGwpKSxmZXRjaChpLmhlaWdodCx7c2lnbmFsOm59KS50aGVuKGw9PntpZighbC5vayl0aHJvdyBuZXcgRXJyb3IoIkNvdWxkIG5vdCBsb2FkIHRoZSB0ZXJyYWluIik7cmV0dXJuIGwuYXJyYXlCdWZmZXIoKX0pLnRoZW4oQikudGhlbihsPT4oZSgiVGVycmFpbiIpLGwpKV0pO2lmKG4uYWJvcnRlZCl0aHJvdyBuLnJlYXNvbjtjb25zdHttZXRhOnN9PXQsaD1yLndpZHRoKnIuaGVpZ2h0LG89bmV3IEZsb2F0MzJBcnJheShoKSxhPW5ldyBGbG9hdDMyQXJyYXkoaCksZD1yLmNoYW5uZWxzO2ZvcihsZXQgbD0wO2w8aDtsKyspb1tsXT0oci5kYXRhW2wqZF08PDh8ci5kYXRhW2wqZCsxXSkvcy5oZWlnaHRTY2FsZS1zLmhlaWdodE9mZnNldCxhW2xdPXIuZGF0YVtsKmQrMl0vMjU1O2NvbnN0IGM9bmV3IHAobyxhLHMuZ3JpZFswXSxzLmdyaWRbMV0scy5zaXplWzBdLHMuc2l6ZVsxXSxpLnRlcnJhaW5TdGVwKTtyZXR1cm57dG93bjp7Li4udCxob3VzZXM6VSh0LmhvdXNlcyksY2FiaW5zOlUodC5jYWJpbnMpLGNhcnM6VSh0LmNhcnMpLHRyZWVzOlUodC50cmVlcyl9LGhlaWdodHM6byxleHBvc3VyZTphLHN1cmZhY2U6Yy55LHRlcnJhaW5UaWxlczpTKGMpfX1jb25zdCBqPXNlbGYsQz1uZXcgTWFwO2Z1bmN0aW9uIFgoaSxlPVtdKXtqLnBvc3RNZXNzYWdlKGksZSl9ZnVuY3Rpb24gTChpKXtyZXR1cm4gaS5tYXAoZT0+ZS5idWZmZXIpfWoub25tZXNzYWdlPWFzeW5jIGk9Pnt2YXIgcztjb25zdCBlPWkuZGF0YSx7aWQ6bn09ZTtpZigiY2FuY2VsImluIGUpeyhzPUMuZ2V0KG4pKT09bnVsbHx8cy5hYm9ydCgpO3JldHVybn1jb25zdCB0PW5ldyBBYm9ydENvbnRyb2xsZXIse3NpZ25hbDpyfT10O0Muc2V0KG4sdCk7dHJ5e2NvbnN0e2pvYjpofT1lO2lmKGgua2luZD09PSJ3b3JsZCIpe2NvbnN0IG89YXdhaXQgcShoLnNvdXJjZSx1PT5YKHtpZDpuLHByb2dyZXNzOnV9KSxyKSx7dG93bjphLGhlaWdodHM6ZCxleHBvc3VyZTpjLHN1cmZhY2U6bCx0ZXJyYWluVGlsZXM6Zn09bztYKHtpZDpuLHZhbHVlOm99LEwoW2QsYyxsLGEuaG91c2VzLGEuY2FiaW5zLGEuY2FycyxhLnRyZWVzLC4uLmYuZmxhdE1hcCgoe3Bvczp1LG5vcjp3LHV2OngsaWR4Onl9KT0+W3Usdyx4LHldKV0pKX1lbHNle2NvbnN0IG89YXdhaXQgZmV0Y2goaC51cmwse3NpZ25hbDpyfSk7aWYoIW8ub2spdGhyb3cgbmV3IEVycm9yKCJDb3VsZCBub3QgbG9hZCBncm91bmQgZGV0YWlsIik7Y29uc3QgYT1hd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChhd2FpdCBvLmJsb2IoKSx7aW1hZ2VPcmllbnRhdGlvbjoiZmxpcFkiLHByZW11bHRpcGx5QWxwaGE6Im5vbmUifSk7aWYoci5hYm9ydGVkKWEuY2xvc2UoKTtlbHNlIHRyeXtYKHtpZDpuLHZhbHVlOmF9LFthXSl9Y2F0Y2goZCl7dGhyb3cgYS5jbG9zZSgpLGR9fX1jYXRjaChoKXtyLmFib3J0ZWR8fFgoe2lkOm4sZXJyb3I6aCBpbnN0YW5jZW9mIEVycm9yP2gubWVzc2FnZTpTdHJpbmcoaCl9KX1maW5hbGx5e0MuZGVsZXRlKG4pfX19KSgpOwo=",g_=i=>Uint8Array.from(atob(i),t=>t.charCodeAt(0)),qh=typeof self<"u"&&self.Blob&&new Blob([g_(Yh)],{type:"text/javascript;charset=utf-8"});function x_(i){let t;try{if(t=qh&&(self.URL||self.webkitURL).createObjectURL(qh),!t)throw"";const e=new Worker(t,{name:i==null?void 0:i.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;base64,"+Yh,{name:i==null?void 0:i.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}class __{constructor(){j(this,"worker");j(this,"pending",new Map);j(this,"nextId",0);try{const t=new x_;this.worker=t,t.onmessage=e=>{const n=e.data,s=this.pending.get(n.id);s?s.receive(n):"value"in n&&"close"in n.value&&n.value.close()},t.onerror=e=>{e.preventDefault(),this.close(new Error("Could not start the model worker"))},t.onmessageerror=()=>this.close(new Error("Could not receive data from the model worker"))}catch{}}async run(t,e,n,s){if(n.aborted)throw n.reason;if(this.worker)try{return await this.request(this.worker,t,n,s)}catch{if(n.aborted)throw n.reason}return e()}close(t=new DOMException("Model closed","AbortError")){var e;(e=this.worker)==null||e.terminate(),this.worker=void 0;for(const n of this.pending.values())n.reject(t)}request(t,e,n,s){return new Promise((r,a)=>{const o=++this.nextId,l=()=>{this.pending.delete(o),n.removeEventListener("abort",c)},c=()=>{l(),t.postMessage({id:o,cancel:!0}),a(n.reason)},h=u=>{l(),a(u)};this.pending.set(o,{receive:u=>{if("progress"in u){s==null||s(u.progress);return}l(),"error"in u?a(new Error(u.error)):r(u.value)},reject:h}),n.addEventListener("abort",c,{once:!0});try{t.postMessage({id:o,job:e})}catch(u){h(u)}})}}class Zh{constructor(t,e){j(this,"bounds",new ui);j(this,"level",-1);this.levels=t;for(const s of t)for(const r of s)r.computeBoundingBox(),this.bounds.union(r.boundingBox),r.castShadow=!0,e.add(r);const n=this.bounds.getBoundingSphere(new yi);for(const s of t.flat())s.boundingSphere=n,s.visible=!1}update(t,e,n){const s=this.bounds.distanceToPoint(t),[r,a,o]=n,l=o+e*8,c=u=>this.level<0?1:this.level<=u?1.1:.9,h=s<=r*c(0)?0:s<=a*c(1)?1:s<=l*c(2)?2:3;if(h!==this.level){for(const u of this.levels[this.level]??[])u.visible=!1;for(const u of this.levels[h]??[])u.visible=!0;this.level=h}}}const Kh=.25,cs=[16053490,16053490,16053490,13225168,10725291,5593438,2040100,2838410,11020586,2054728,14266938,8368595],$h=[15223869,3113154,15909424,3843690,16777215,9329589,15764004,2042422,15231654,4899008],jn=[14826299,15764004,15909424,3715691,3117008,13651872,3720896,16053490].map(H);function Jh(){const i=new Jt,t=H(16777215),e=H(1713198),n=H(1381655);i.box(-.88,.3,-2.1,.88,.95,2.1,t,void 0,n),i.box(-.8,.95,-1.35,.8,1.48,.7,e,t);for(const s of[-.9,.68])for(const r of[-1.55,1])i.box(s,0,r,s+.22,.62,r+.62,n);for(const s of[-.75,.45])i.quad(s,.6,2.11,s+.3,.6,2.11,s+.3,.8,2.11,s,.8,2.11,H(16776166),2.2);return i.build()}function cl(i){const t=new Jt,e=new Jt;return iu(i,t,e,H(16777215)),{body:t.build(),trim:e.build()}}function hl(i){const t=i===1,e=i===2,n=e?-2.3:-2.18,s=e?2.22:2.18,r=e?1.035:t?.99:.93;return{wagon:t,ute:e,tail:n,nose:s,sill:r,belt:o=>{const l=Math.max(0,(n+.58-o)/.58,(o-s+.55)/.55),c=o<0?t||e?.045:.095:.14,h=r-l*c;return{width:.88-.13*l,shoulder:h-.105,top:h}}}}function Qh(i,t){const e=new Jt,{wagon:n,ute:s,tail:r,nose:a,sill:o}=hl(i),l=H(16777215),c=H(6584713),h=H(2236966),u=s?1.63:n?1.6:1.49,f=s?-.37:n?-1.72:-.74,d=s?.64:.42,p=(M,m,g,S,_,v,E,b)=>{e.quad(-M,m,S,M,m,S,.65,_,E,-.65,_,E,b),e.quad(M,m,g,-M,m,g,-.65,_,v,.65,_,v,b),e.quad(M,m,S,M,m,g,.65,_,v,.65,_,E,b),e.quad(-M,m,g,-M,m,S,-.65,_,E,-.65,_,v,b),e.quad(-.65,_,E,.65,_,E,.65,_,v,-.65,_,v,l)};if(t)p(.88,.3,r,a,u,f,d,l);else{e.box(-.88,.3,r,.88,o,a,l),p(.77,o,s?-.52:n?-1.95:-1.47,1.02,u,f,d,c);for(const M of[-1.35,1.38])e.quad(.9,.02,M+.32,.9,.02,M-.32,.9,.57,M-.32,.9,.57,M+.32,h),e.quad(-.9,.02,M-.32,-.9,.02,M+.32,-.9,.57,M+.32,-.9,.57,M-.32,h)}return e.build()}function jh(i,t,e,n,s,r,a){const o=t>0?r-.025:r-.1,l=t<0&&(i===1||i===2);return[[e*.42,o,n],[e*(s-.022),o-(l?.13:0),n],[e*(s-.064),a-.025,n],[e*(t>0?.31:.43),a-.052,n]]}const tu=12;function eu(i){const t=new Jt,e=hl(i);for(const s of[1,-1])for(const r of[1,-1]){const a=i<0?r*2.1:r>0?e.nose:e.tail,o=a+r*.02;let l;if(i<0){const c=r>0?.755:.59,h=.865;l=[[s*c,.62,o],[s*h,.62,o],[s*h,.77,o],[s*c,.77,o]]}else{const{width:c,shoulder:h,top:u}=e.belt(a),[f,d,p,M]=jh(i,r,s,o,c,h,u),m=(g,S,_)=>[g[0]+(S[0]-g[0])*_,g[1]+(S[1]-g[1])*_,o];l=[m(f,d,.59),m(f,d,.99),m(M,p,.99),m(M,p,.59)]}s!==r&&l.reverse(),t.quad(...l[0],...l[1],...l[2],...l[3],H(16777215))}const n=new Yt(t.build(),new Nn({color:16752666,toneMapped:!1}));return n.visible=!1,n}function nu(i,t){i.visible=t===-1||t===1,i.visible&&(i.name=t<0?"left-turn-indicator":"right-turn-indicator",i.geometry.setDrawRange(t<0?0:tu,tu))}function iu(i,t,e,n){const s=H(4413799),r=H(3425876),a=H(2635588),o=H(8624550),l=H(6651533),c=H(2105636),h=H(2566960),u=H(11252924),f=H(5793135),d=(U,O,z,X,F,K,et=!1,lt=0)=>{et?U.quad(...F,...X,...z,...O,K,lt):U.quad(...O,...z,...X,...F,K,lt)},{wagon:p,ute:M,tail:m,nose:g,sill:S,belt:_}=hl(i),v=M||p?1.55:1.42,E=M?1.63:p?1.6:1.49,b=M?-.52:p?-1.95:-1.47,x=M?-.37:p?-1.72:-.74,y=1.02,T=M?.64:.42,R=-1.35,C=1.38,N=.34,B=.387,P=[m,m+.58,g-.55,g];for(const U of[R,C])for(let O=0;O<=5;O++)P.push(U-B*Math.cos(Math.PI*O/5));P.sort((U,O)=>U-O);const k=U=>{const O=Math.min(Math.abs(U-R),Math.abs(U-C));return O<B+1e-5?N+Math.sqrt(Math.max(0,B*B-O*O)):.3};for(const U of[-1,1])for(let O=1;O<P.length;O++){const z=P[O-1],X=P[O],F=_(z),K=_(X);d(t,[U*F.width,k(z),z],[U*F.width,F.shoulder,z],[U*K.width,K.shoulder,X],[U*K.width,k(X),X],n,U<0)}const D=[m,m+.15,m+.58,b,y,g-.55,g].sort((U,O)=>U-O);for(let U=1;U<D.length;U++){const O=D[U-1],z=D[U],X=_(O),F=_(z);for(const nt of[-1,1])d(t,[nt*X.width,X.shoulder,O],[nt*(X.width-.08),X.top,O],[nt*(F.width-.08),F.top,z],[nt*F.width,F.shoulder,z],n,nt<0);if(O>=b&&z<=y)continue;const K=M&&O>=m+.15&&z<=b,et=X.width-.08,lt=F.width-.08;if(K)for(const nt of[-1,1])d(t,[nt*et,X.top,O],[nt*.665,X.top,O],[nt*.665,F.top,z],[nt*lt,F.top,z],n,nt<0),d(e,[nt*.665,X.top,O],[nt*.665,.7,O],[nt*.665,.7,z],[nt*.665,F.top,z],h,nt<0);else d(t,[-et,X.top,O],[-lt,F.top,z],[lt,F.top,z],[et,X.top,O],n)}if(M){const U=m+.15,O=b;d(e,[-.665,.7,U],[-.665,.7,O],[.665,.7,O],[.665,.7,U],H(4343627));for(const[z,X]of[[U,1],[O,0]])d(e,[-.665,.7,z],[.665,.7,z],[.665,_(z).top,z],[-.665,_(z).top,z],h,!X)}const L=(U,O,z)=>{const X=b+(x-b)*z,F=y+(T-y)*z;return[U*(.8-.145*z),S+(v-S)*z,X+(F-X)*O]},Z=p?[0,.07,.275,.32,.56,.6,.935,1]:M?[0,.12,.33,.395,.925,1]:[0,.09,.47,.525,.925,1];for(const U of[-1,1]){const O=(z,X,F,K,et,lt)=>d(et,L(U,z,F),L(U,z,K),L(U,X,K),L(U,X,F),lt,U<0);O(0,1,0,.07,t,n),O(0,1,.93,1,t,n);for(let z=1;z<Z.length;z++){const X=z%2===0,F=z!==1&&z!==Z.length-1,K=e.vertexCount;O(Z[z-1],Z[z],.07,.93,X||F?e:t,X?z===2?a:r:F?h:n),X&&e.gradientY(K,S,v,z===2?a:r,z===2?l:o)}}for(const U of[-1,1])d(t,L(U,0,1),[U*.58,E,x+.045],[U*.58,E,T-.045],L(U,1,1),n,U<0);d(t,[-.58,E,x+.045],[-.58,E,T-.045],[.58,E,T-.045],[.58,E,x+.045],n);for(const U of[0,1]){const O=U?T-.045:x+.045;d(t,L(-1,U,1),L(1,U,1),[.58,E,O],[-.58,E,O],n,!U);const z=e.vertexCount;d(e,L(-1,U,0),L(1,U,0),L(1,U,1),L(-1,U,1),U?s:a,!U),e.gradientY(z,S,v,U?s:a,U?o:l)}if(p)for(const U of[-1,1]){const O=U*.56;e.box(O-.032,E,x+.17,O+.032,1.67,T-.21,h)}for(const U of[-1,1]){const O=U>0?g:m,{width:z,shoulder:X,top:F}=_(O);if(M&&U<0){const lt=[[-z,.3,O],[z,.3,O],[z,X,O],[-z,X,O]],nt=[[-.41,.59,O],[.41,.59,O],[.46,.74,O],[-.46,.74,O]],pt=[[-.39,.612,O+.024],[.39,.612,O+.024],[.43,.716,O+.024],[-.43,.716,O+.024]];for(let Bt=0;Bt<4;Bt++){const bt=(Bt+1)%4;d(t,lt[Bt],lt[bt],nt[bt],nt[Bt],n,!0),d(t,nt[Bt],nt[bt],pt[bt],pt[Bt],n,!0)}d(t,pt[0],pt[1],pt[2],pt[3],$t(n,.88),!0)}else d(t,[-z,.3,O],[z,.3,O],[z,X,O],[-z,X,O],n,U<0);d(t,[-z,X,O],[z,X,O],[z-.08,F,O],[-z+.08,F,O],n,U<0);const K=O+U*.008;for(const lt of[-1,1])d(e,...jh(i,U,lt,K,z,X,F),U>0?H(14477800):H(12003881),lt!==U,U>0?1.1:.6);U>0?d(e,[-.48,.39,K],[.48,.39,K],[.53,.54,K],[-.53,.54,K],h):M&&d(e,[-.12,.76,K],[.12,.76,K],[.12,.8,K],[-.12,.8,K],h,!0);const et=O+U*.012;d(e,[-.2,.44,et],[.2,.44,et],[.2,.55,et],[-.2,.55,et],H(14014927),U<0)}e.box(-.7,.23,m+.22,.7,.69,g-.22,h,null);const Y=(U,O,z,X)=>[U,N+X*Math.sin(z)*Math.sin(.4*Math.PI),O+X*Math.cos(z)];for(const U of[-1,1])for(const O of[R,C]){const z=U*.69,X=U*.9,F=U*.912;for(let K=0;K<8;K++){const et=K*Math.PI/4,lt=(K+1)*Math.PI/4,nt=Y(X,O,et,.34),pt=Y(X,O,lt,.34);d(e,Y(z,O,et,.34),nt,pt,Y(z,O,lt,.34),c,U<0),U>0?e.tri(X,N,O,...pt,...nt,c):e.tri(X,N,O,...nt,...pt,c)}for(let K=0;K<6;K++){const et=Y(F,O,K*Math.PI/3,.188),lt=Y(F,O,(K+1)*Math.PI/3,.188),nt=K%2?u:f;U>0?e.tri(U*.905,N,O,...lt,...et,nt):e.tri(U*.905,N,O,...et,...lt,nt)}}}function ea(i,t,e,n,s,r){const a=-t/2,o=t*.12,l=t/2,c=e/2,h=c*.5,u=$t(s,.72);for(const d of[-1,1])d>0?(i.quad(h,0,a,c*.88,n,a,c,n,o,h,0,o,s),i.quad(h,0,o,c,n,o,0,n*1.12,l,0,.1,l*.86,s)):(i.quad(-h,0,o,-c,n,o,-c*.88,n,a,-h,0,a,s),i.quad(0,.1,l*.86,0,n*1.12,l,-c,n,o,-h,0,o,s));i.quad(-h,0,a,-c*.88,n,a,c*.88,n,a,h,0,a,u),i.quad(-h,0,a,h,0,a,h,0,o,-h,0,o,u),i.tri(-h,0,o,h,0,o,0,.1,l*.86,u);const f=n*.8;i.quad(-c*.84,f,a+.05,c*.84,f,a+.05,c*.95,f,o,-c*.95,f,o,r),i.tri(-c*.95,f,o,c*.95,f,o,0,f,l*.95,r)}function v_(i,t){const e=new Jt,n=H(16119280);if(i===0)ea(e,4.6,1.9,.75,t()<.5?H(12962767):jn[Math.floor(t()*6)],H(10133668)),e.box(-.2,.55,-2.65,.2,1.25,-2.25,H(1974822)),e.box(-.75,.6,-.9,.75,.72,-.5,H(9138002)),e.box(-.75,.6,.4,.75,.72,.8,H(9138002));else if(i===1){const s=jn[Math.floor(t()*jn.length)];ea(e,7.4,2.7,1.25,n,H(15131350)),e.box(-1.37,.72,-3.7,1.37,.9,3,s,null),e.box(-1.05,1,-1.2,1.05,2.25,1.9,n,H(15329248)),e.quad(-1,1.45,1.92,1,1.45,1.92,.9,2.2,1.92,-.9,2.2,1.92,H(2240572),.4),e.box(-1.06,1.5,-.9,-1.05,2.1,1.6,H(2240572),null),e.box(1.05,1.5,-.9,1.06,2.1,1.6,H(2240572),null),e.box(-.9,2.25,-1,.9,2.33,1.2,n),e.cyl(0,2.33,-.6,.03,.02,1.6,4,H(9278358))}else ea(e,9,2.8,1.3,t()<.6?n:H(2377070),H(14208952)),e.box(-.85,1.05,-1.6,.85,1.55,1.6,n,H(15329248)),e.cyl(0,1.05,.9,.08,.05,11.5,5,H(14014682)),e.box(-.06,2.45,-3,.06,2.57,.9,H(14014682)),e.blob(0,2.72,-1.05,.17,.17,1.9,5,3,H(3104666)),e.quad(-.01,12.4,.9,.01,12.4,.9,.01,1.4,4.4,-.01,1.4,4.4,H(10133154));return e.build()}function M_(i){const t=new Jt;return ea(t,4.2,1.5,.55,H(16119280),H(14736588)),t.cyl(0,.45,.5,.04,.03,6,4,H(14014682)),t.tri(.02,6.3,.5,.02,1.1,.45,.6,1.2,-2,i),t.tri(.02,4.6,.6,.3,1,1.9,.02,1,.6,H(16250866)),t.blob(.35,.95,-.9,.22,.4,.22,5,3,H(14238767)),t.build()}function S_(i,t){const e=new Jt,n=8,s=9,r=2.6;for(let a=0;a<n;a++){const o=-1.15+a/n*2.3,l=-1.15+(a+1)/n*2.3,c=Math.sin(o)*s*.5,h=Math.cos(o)*s*.42,u=Math.sin(l)*s*.5,f=Math.cos(l)*s*.42,d=a===0||a===n-1||a===3||a===4?t:i;e.quad(c,h,-r/2,u,f,-r/2,u,f,r/2,c,h,r/2,d)}return e.build()}function y_(i,t){const e=new Jt;return e.box(-.22,0,-.75,.22,.06,.75,i),e.blob(-.25,.75,0,.2,.62,.22,5,3,t),e.blob(-.42,1.48,0,.13,.14,.13,5,3,H(14264711)),e.build()}function b_(i){const t=new Jt;return t.blob(0,.02,0,.27,.05,1.05,6,2,i),t.blob(0,.42,-.1,.2,.4,.18,5,3,H(1976112)),t.blob(0,.9,-.1,.12,.13,.12,5,3,H(14264711)),t.build()}function E_(i){const t=new Map;for(const r of i){if(r.cls>1||!r.name||r.flags)continue;const a=t.get(r.name)??[];a.push(r),t.set(r.name,a)}const e=[],n=(r,a)=>a?[r[r.length-3],r[r.length-1]]:[r[0],r[2]],s=r=>{const a=new Float32Array(r.length);for(let o=0;o<r.length/3;o++)a.set(r.subarray(o*3,o*3+3),r.length-3-o*3);return a};for(const r of t.values()){const a=r.map(l=>l.pts),o=r[0].width;for(;a.length;){let l=Array.from(a.pop()),c=!0;for(;c;){c=!1;for(let d=0;d<a.length;d++){const p=a[d],M=[l[l.length-3],l[l.length-1]],m=[l[0],l[2]],g=(v,E)=>Math.hypot(v[0]-E[0],v[1]-E[1])<2.5;let S=null,_=!0;if(g(M,n(p,!1))?S=p:g(M,n(p,!0))?S=s(p):g(m,n(p,!0))?(S=p,_=!1):g(m,n(p,!1))&&(S=s(p),_=!1),!!S){l=_?l.concat(Array.from(S.subarray(3))):Array.from(S.subarray(0,S.length-3)).concat(l),a.splice(d,1),c=!0;break}}}const h=new Float32Array(l),u=h.length/3,f=new Float32Array(u);for(let d=1;d<u;d++)f[d]=f[d-1]+Math.hypot(h[d*3]-h[d*3-3],h[d*3+2]-h[d*3-1]);f[u-1]>380&&e.push({pts:h,cum:f,length:f[u-1],width:o})}}return e}function ul(i,t=2,e=320){if(i.length<=(e<320?24:96)||t===0)return[i];let n=1/0,s=-1/0,r=1/0,a=-1/0;for(const u of i)n=Math.min(n,u.x),s=Math.max(s,u.x),r=Math.min(r,u.z),a=Math.max(a,u.z);const o=s-n,l=a-r;if(Math.max(o,l)<e)return[i];const c=o>l?"x":"z";i.sort((u,f)=>u[c]-f[c]);const h=Math.floor(i.length/2);return[...ul(i.slice(0,h),t-1,e),...ul(i.slice(h),t-1,e)]}class w_{constructor(t,e,n=!1){j(this,"group",new Je);j(this,"afloat",new Je);j(this,"boats",[]);j(this,"dinghies",[]);j(this,"kites",[]);j(this,"kiteLines");j(this,"surfers",[]);j(this,"traffic");j(this,"trafficTrim");j(this,"cars",[]);j(this,"parkedAt",new Map);j(this,"parkedSets",[]);j(this,"drivenAt",new Map);j(this,"drivenSets",[]);j(this,"carMat",is());j(this,"tmpE",new Sn);j(this,"nothing",new jt().makeScale(0,0,0));j(this,"gulls");j(this,"gullState",[]);j(this,"tmpM",new jt);j(this,"tmpQ",new vn);j(this,"tmpP",new W);j(this,"up",new W(0,1,0));j(this,"one",new W(1,1,1));j(this,"contact");this.ctx=t,this.closeCarShadows=n,this.group.name="life",this.group.add(this.afloat);const s=this.carMat;this.addParkedCars(),this.addTraffic(s),this.addBoats(s,e),this.addKites(s),this.addSurfers(s,e),this.addPeople(e),this.addGulls(e),this.update(0,0)}setTide(t){this.afloat.position.y=t}sit(t,e,n,s){const r=this.ctx.hf,a=Math.sin(n),o=Math.cos(n),l=r.yAt(t+a*1.3,e+o*1.3),c=r.yAt(t-a*1.3,e-o*1.3),h=r.yAt(t-o*.8,e+a*.8),u=r.yAt(t+o*.8,e-a*.8);return this.tmpQ.setFromEuler(this.tmpE.set(-Math.atan2(l-c,2.6),n,Math.atan2(u-h,1.6),"YXZ")),this.tmpM.compose(this.tmpP.set(t,(l+c+h+u)/4+s,e),this.tmpQ,this.one)}carShapes(t){return t?cl(t-1):{body:Jh(),trim:void 0}}makeTrafficCar(t,e,n,s,r){const a=new Jt;iu(t,a,a,H(e));const o=a.build(),l=o.boundingBox,c=(f,d)=>Math.min(1,f/d),h=new W(c(n,Math.max(-l.min.x,l.max.x)),c(r,l.max.y),c(s,Math.max(-l.min.z,l.max.z)));o.scale(h.x,h.y,h.z);const u=new Yt(o,this.carMat);return u.name=["traffic-sedan","traffic-wagon","traffic-ute"][t],u.castShadow=u.receiveShadow=!0,u.matrixAutoUpdate=!1,u.visible=!1,this.group.add(u),{mesh:u,scale:h}}addParkedCars(){const{town:t,hf:e,paths:n}=this.ctx,s=t.cars,r=s.length/ss,a=[[],[],[],[]],o=new Set,l=(u,f)=>`${Math.round(u/7)}_${Math.round(f/7)}`;for(let u=0;u<r;u++){const f=s[u*ss]/4,d=s[u*ss+1]/4;if(this.ctx.isClear(f,d)||!this.ctx.isDetail(f,d)&&this.ctx.roads.nearest(f,d,5.5))continue;const p=1+(s[u*ss+3]+u)%3;a[p].push({x:f,z:d,heading:s[u*ss+2]/10*(Math.PI/180),colour:cs[(s[u*ss+3]*7+u)%cs.length]}),o.add(l(f,d))}const c=ze(911);let h=0;for(const u of n){if(h>=1100||u.width<3.4||u.width>12)continue;const f=u.pts.length/3;let d=20+c()*60;for(let p=1;p<f;p++){const M=u.pts[(p-1)*3],m=u.pts[(p-1)*3+2],g=u.pts[p*3],S=u.pts[p*3+2],_=Math.hypot(g-M,S-m);if(d-=_,d>0||_<.01)continue;d=28+c()*70;const v=c()<.5?1:-1,E=(g-M)/_,b=(S-m)/_,x=Math.max(u.width/2-.55,1.5),y=g+b*x*v,T=S-E*x*v,R=Math.floor(c()*cs.length),C=Math.floor(c()*3);if(e.metresAt(y,T)<.6||!e.inside(y,T,30)||this.ctx.isClear(y,T))continue;let N=!0;for(let B=-1;B<=1&&N;B++)for(let P=-1;P<=1;P++)if(o.has(`${Math.round(y/7)+B}_${Math.round(T/7)+P}`)){N=!1;break}N&&(o.add(l(y,T)),a[1+C].push({x:y,z:T,heading:Math.atan2(E*v,b*v),colour:cs[R]}),h++)}}a.forEach((u,f)=>this.addParkedShape(u,f))}addParkedShape(t,e){if(!t.length)return;const n=cl(e-1),s=Qh(e-1,!1),r=Qh(e-1,!0);for(const a of ul(t,5,140)){const o=this.parkedSets.length,l=new Ze(n.body,this.carMat,a.length),c=new Ze(n.trim,this.carMat,a.length),h=new Ze(s,this.carMat,a.length),u=new Ze(r,this.carMat,a.length);l.name="parked-car-near-body",c.name="parked-car-near-trim",h.name="parked-car-mid",u.name="parked-car-far";const f=[l,c,h,u],d=[l,h,u],p=new Rt;a.forEach((m,g)=>{const{x:S,z:_,heading:v,colour:E}=m,b=this.sit(S,_,v,.3);for(const x of f)x.setMatrixAt(g,b);p.set(E);for(const x of d)x.setColorAt(g,p);this.parkedAt.set(`${Math.round(S*4)}_${Math.round(_*4)}`,{set:o,k:g,x:S,z:_,heading:v})});const M=new Zh([[l,c],[h],[u]],this.group);this.closeCarShadows&&this.addContactShadow(l),this.parkedSets.push({body:l,meshes:f,lod:M,shape:e})}}addContactShadow(t){this.contact??(this.contact={geometry:new Un(2.5,5.1).rotateX(-Math.PI/2).translate(0,.027,0),material:new nn({transparent:!0,depthWrite:!1,vertexShader:`varying vec2 patchUV;
          void main(){patchUV=2.*uv-1.;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 patchUV;
          void main(){float edge=length(max(abs(patchUV)-vec2(.49,.57),0.)/vec2(.50,.42));
            gl_FragColor=vec4(.012,.015,.016,.32*(1.-smoothstep(.05,1.,edge)));
            #include <colorspace_fragment>
          }`})});const e=new Ze(this.contact.geometry,this.contact.material,t.count);e.name="parked-car-contact",e.instanceMatrix=t.instanceMatrix,e.boundingSphere=t.boundingSphere,t.add(e)}addCars(t){const e=[[],[],[],[]];for(const n of t)e[1+(n.kind??0)%3].push(n);e.forEach((n,s)=>this.addParkedShape(n,s))}nearestCar(t,e,n){let s=null;for(const[r,a]of this.parkedAt){const o=this.drivenAt.get(r)??a,l=Math.hypot(o.x-t,o.z-e);l<(s?s.distance:n)&&(s={id:[a.x,a.z],x:o.x,z:o.z,heading:o.heading,distance:l})}return this.cars.forEach((r,a)=>{const o=this.drivenAt.get(`t${a}`)??r,l=Math.hypot(o.x-t,o.z-e);l<(s?s.distance:n)&&(s={id:[9e5+a,0],x:o.x,z:o.z,heading:o.heading,distance:l})}),s}driveCar(t,e,n,s,r,a,o=0,l=0,c=0){const h=t>=9e5?this.cars[t-9e5]:void 0,u=h?`t${t-9e5}`:`${Math.round(t*4)}_${Math.round(e*4)}`,f=h?void 0:this.parkedAt.get(u);if(!f&&!h)return!1;let d=this.drivenAt.get(u);if(!d){if(this.drivenAt.size>=12)return!1;const M=f?this.parkedSets[f.set].shape:this.trafficTrim?1:0;let m=this.drivenSets[M];if(!m){const S=this.carShapes(M);m=this.drivenSets[M]={body:new Ze(S.body,this.carMat,12),trim:S.trim?new Ze(S.trim,this.carMat,12):void 0,n:0};for(const _ of[m.body,m.trim])_&&(_.count=0,_.frustumCulled=!1,_.castShadow=!0,this.group.add(_))}d={set:M,k:m.n++,x:n,y:s,z:r,heading:a},this.drivenAt.set(u,d),m.body.count=m.n,m.trim&&(m.trim.count=m.n);const g=new Rt;if(f){const S=this.parkedSets[f.set];S.body.getColorAt(f.k,g);for(const _ of S.meshes)_.setMatrixAt(f.k,this.nothing),_.instanceMatrix.needsUpdate=!0}else this.traffic.getColorAt(t-9e5,g),h.gone=!0;m.body.setColorAt(d.k,g),m.body.instanceColor.needsUpdate=!0}d.x=n,d.y=s,d.z=r,d.heading=a;const p=this.drivenSets[d.set];return this.tmpQ.setFromEuler(this.tmpE.set(-o,a,l,"YXZ")),this.tmpM.compose(this.tmpP.set(n,s+Kh,r),this.tmpQ,this.one),p.body.setMatrixAt(d.k,this.tmpM),p.body.instanceMatrix.needsUpdate=!0,p.trim&&(p.trim.setMatrixAt(d.k,this.tmpM),p.trim.instanceMatrix.needsUpdate=!0),c&&!d.indicator&&(d.indicator=eu(d.set-1),d.indicator.matrixAutoUpdate=!1,this.group.add(d.indicator)),d.indicator&&(nu(d.indicator,c),d.indicator.visible&&(d.indicator.matrix.copy(this.tmpM),d.indicator.matrixWorldNeedsUpdate=!0)),!0}addTraffic(t){const e=E_(this.ctx.paths);if(!e.length)return;const n=e.reduce((c,h)=>c+h.length,0),s=0,r=ze(77),a=this.ctx.hasDetail?cl(0):null,o=this.traffic=new Ze(a?a.body:Jh(),t,s);if(o.instanceMatrix.setUsage(sr),o.frustumCulled=!1,a){const c=this.trafficTrim=new Ze(a.trim,t,s);c.instanceMatrix.setUsage(sr),c.frustumCulled=!1,c.castShadow=!0,this.group.add(c)}const l=new Rt;for(let c=0;c<s;c++){let h=r()*n,u=e[0];for(const f of e)if((h-=f.length)<=0){u=f;break}this.cars.push({route:u,s:r()*u.length,dir:r()<.5?1:-1,speed:9+r()*6,x:0,z:0,heading:0}),o.setColorAt(c,l.set(cs[Math.floor(r()*cs.length)]))}o.castShadow=!0,this.group.add(o)}addBoats(t,e){var c;const{hf:n}=this.ctx,s=ze(451),r=((c=e.jetty)==null?void 0:c.head)??new W(380,0,-117),a=[];for(let h=0;h<4e3&&a.length<16;h++){const u=s()*Math.PI*2,f=55+s()*420,d=r.x+Math.cos(u)*f,p=r.z+Math.sin(u)*f;n.metresAt(d,p)>-1.9||!n.inside(d,p,40)||a.some(([M,m])=>Math.hypot(M-d,m-p)<26)||a.push([d,p])}const o=2.2+s()*.4;a.forEach(([h,u],f)=>{const d=f%5===0?2:f%2?0:1,p=new Yt(v_(d,s),t);p.position.set(h,0,u),p.rotation.y=o+(s()-.5)*.5,p.castShadow=!0,this.afloat.add(p),this.boats.push({obj:p,phase:s()*6.28,y:d===0?-.22:-.42})});const l=[H(16250866),H(15222589),H(3117008),H(15909424)];for(let h=0;h<600&&this.dinghies.length<4;h++){const u=s()*Math.PI*2,f=150+s()*900,d=r.x+Math.cos(u)*f,p=r.z+160+Math.sin(u)*f*.5,M=45+s()*70,m=30+s()*40;let g=n.inside(d,p,160);for(let _=0;_<12&&g;_++){const v=_/12*Math.PI*2;n.metresAt(d+Math.cos(v)*M,p+Math.sin(v)*m)>-1.5&&(g=!1)}if(!g||this.dinghies.some(_=>Math.hypot(_.cx-d,_.cz-p)<170))continue;const S=new Yt(M_(l[this.dinghies.length%l.length]),t);S.castShadow=!0,this.afloat.add(S),this.dinghies.push({obj:S,cx:d,cz:p,rx:M,rz:m,phase:s()*6.28,speed:(2.2+s())/Math.max(M,m)})}}addKites(t){const{hf:e,town:n}=this.ctx,s=ze(990),[r,a]=cn(n.meta,-38.6385,145.714),[o,l]=cn(n.meta,-38.645,145.731),c=[];for(let f=0;f<3e3&&c.length<6;f++){const d=r+s()*(o-r),p=a+s()*(l-a);e.metresAt(d,p)>-1.6||c.some(M=>Math.hypot(M.x-d,M.z-p)<110)||c.push(new W(d,0,p))}const h=new Float32Array(c.length*12);c.forEach((f,d)=>{let p=85;for(;p>15&&(e.metresAt(f.x+.65*p,f.z+.76*p)>-1.2||e.metresAt(f.x-.65*p,f.z-.76*p)>-1.2);)p-=10;const M=jn[Math.floor(s()*7)],m=jn[Math.floor(s()*7)],g=new Yt(S_(M,m===M?jn[7]:m),t),S=new Yt(y_(jn[Math.floor(s()*7)],H(1976112)),t);g.castShadow=!0,this.afloat.add(g,S),this.kites.push({base:f,reach:p,phase:s()*6.28,speed:.12+s()*.06,kite:g,rider:S})});const u=new Re;u.setAttribute("position",new Ae(h,3).setUsage(sr)),this.kiteLines=new jd(u,Yr(new bc({color:15921906,transparent:!0,opacity:.7}))),this.kiteLines.frustumCulled=!1,this.afloat.add(this.kiteLines)}addSurfers(t,e){if(!e.surf)return;const{hf:n}=this.ctx,s=ze(31),[r,a]=e.surf.seaward,o=e.surf.beach;let l=20;for(;l<420&&n.metresAt(o.x+r*l,o.z+a*l)>-2;)l+=5;for(let c=0;c<9;c++){const h=(c-4)*13+(s()-.5)*8,u=l+(s()-.5)*30,f=o.x+r*u-a*h,d=o.z+a*u+r*h,p=new Yt(b_(jn[Math.floor(s()*jn.length)]),t);p.position.set(f,0,d),p.rotation.y=Math.atan2(r,a)+(s()-.5)*.8,this.afloat.add(p),this.surfers.push({obj:p,phase:s()*6.28})}}addPeople(t){const{hf:e,town:n,paths:s,roads:r,footprints:a}=this.ctx,o=ze(2026),l=[],c=[],h=(D,L)=>a.some(Z=>{if(Math.hypot(D-Z.cx,L-Z.cz)>Math.max(Z.obb.w,Z.obb.d))return!1;let Y=!1;for(let U=0,O=Z.poly.length-2;U<Z.poly.length;O=U,U+=2){const z=Z.poly[U],X=Z.poly[U+1],F=Z.poly[O],K=Z.poly[O+1];X>L!=K>L&&D<(F-z)*(L-X)/(K-X)+z&&(Y=!Y)}return Y}),u=(D,L)=>!r.nearest(D,L,6.4)&&!h(D,L),f=(D,L,Z,Y,U,O,z=0)=>{for(let X=0,F=0;X<Y*40&&F<Y;X++){const K=o()*Math.PI*2,et=Math.sqrt(o())*Z,lt=D+Math.cos(K)*et,nt=L+Math.sin(K)*et,pt=e.metresAt(lt,nt);pt<U||pt>O||!u(lt,nt)||(l.push(lt,e.yAt(lt,nt),nt),o()<z&&c.push(lt+1.2,e.yAt(lt+1.2,nt),nt+.6),F++)}};t.surf&&f(t.surf.beach.x,t.surf.beach.z,130,60,1.5,3,.32);const[d,p]=cn(n.meta,-38.63575,145.729);f(d,p,120,34,1.5,2.4,.3);const[M,m]=cn(n.meta,-38.6356,145.7337);f(M,m,110,26,1.5,2.6,.2);const[g,S]=cn(n.meta,-38.63194,145.72681);f(g,S,55,14,0,99);const[_,v]=cn(n.meta,-38.63385,145.7285);for(const D of s){if(D.cls>3||D.flags)continue;const L=D.pts.length/3;for(let Z=1;Z<L;Z++){const Y=D.pts[Z*3],U=D.pts[Z*3+2];if(Math.hypot(Y-_,U-v)>300||o()>.42||this.ctx.isClear(Y,U))continue;const O=Y-D.pts[Z*3-3],z=U-D.pts[Z*3-1],X=Math.hypot(O,z)||1,F=o()<.5?1:-1,K=D.width/2+2.3+o()*1,et=Y-z/X*K*F,lt=U+O/X*K*F;u(et,lt)&&l.push(et,e.yAt(et,lt),lt)}}if(t.jetty){const D=t.jetty.points;for(let L=0;L<D.length-1;L++)for(let Z=0;Z<3;Z++){const Y=o();l.push(D[L][0]+(D[L+1][0]-D[L][0])*Y+(o()-.5)*2,ll,D[L][1]+(D[L+1][1]-D[L][1])*Y+(o()-.5)*2)}}const E=l.length/3,b=new Jt;b.cyl(0,0,0,.17,.22,.85,5,H(2765632)),b.cyl(0,.85,0,.24,.2,.6,5,H(16777215),H(16777215));const x=new Jt;x.blob(0,1.6,0,.14,.15,.14,5,3,H(14264711));const y=new Bo({vertexColors:!0}),T=D=>(D.deleteAttribute("glow"),D),R=new Ze(T(b.build()),y,E),C=new Ze(T(x.build()),y,E),N=new Rt,B=[16777215,15255976,12159590,9068354];for(let D=0;D<E;D++){const L=.92+o()*.2;this.tmpQ.setFromAxisAngle(this.up,o()*6.28),this.tmpM.compose(this.tmpP.set(l[D*3],l[D*3+1],l[D*3+2]),this.tmpQ,new W(L,L,L)),R.setMatrixAt(D,this.tmpM),C.setMatrixAt(D,this.tmpM),R.setColorAt(D,N.set($h[Math.floor(o()*$h.length)])),C.setColorAt(D,N.set(B[Math.floor(o()*B.length)]))}R.computeBoundingSphere(),C.computeBoundingSphere(),this.group.add(R,C);const P=new Jt;P.cyl(0,0,0,.03,.03,2,4,H(14277081)),P.cyl(0,1.75,0,1.25,0,.5,8,H(16777215));const k=new Ze(T(P.build()),y,c.length/3);for(let D=0;D<c.length/3;D++)this.tmpQ.setFromAxisAngle(new W(1,0,0),(o()-.5)*.3),k.setMatrixAt(D,this.tmpM.compose(this.tmpP.set(c[D*3],c[D*3+1],c[D*3+2]),this.tmpQ,this.one)),k.setColorAt(D,N.set([14826299,3117008,15909424,3715691,15764004,16053490][Math.floor(o()*6)]));k.castShadow=!0,k.computeBoundingSphere(),this.group.add(k)}addGulls(t){if(!t.jetty)return;const e=ze(8),n=16;for(let r=0;r<n;r++)this.gullState.push({cx:t.jetty.head.x+(e()-.5)*90,cz:t.jetty.head.z+(e()-.5)*90,r:18+e()*55,h:ll+6+e()*16,w:(.25+e()*.3)*(e()<.5?1:-1),phase:e()*6.28});const s=new Re;s.setAttribute("position",new Ae(new Float32Array(n*18),3).setUsage(sr)),this.gulls=new Yt(s,Yr(new Nn({color:16185074,side:Ie}))),this.gulls.frustumCulled=!1,this.group.add(this.gulls)}updateParkedLod(t,e,n){for(const s of this.parkedSets)s.lod.update(t,e,n)}update(t,e){for(const n of this.boats)n.obj.rotation.z=Math.sin(e*.9+n.phase)*.04,n.obj.rotation.x=Math.sin(e*.7+n.phase*1.7)*.025,n.obj.position.y=n.y+Math.sin(e*1.1+n.phase)*.06;for(const n of this.dinghies){const s=n.phase+e*n.speed;n.obj.position.set(n.cx+Math.cos(s)*n.rx,-.15,n.cz+Math.sin(s)*n.rz),n.obj.rotation.y=Math.atan2(-Math.sin(s)*n.rx,Math.cos(s)*n.rz),n.obj.rotation.z=.12+Math.sin(e*.8+n.phase)*.04}for(const n of this.surfers)n.obj.position.y=-.05+Math.sin(e*.9+n.phase)*.22;if(this.kiteLines){const n=this.kiteLines.geometry.getAttribute("position");this.kites.forEach((s,r)=>{const a=Math.sin(e*s.speed*6.28+s.phase),o=Math.cos(e*s.speed*6.28+s.phase)>=0?1:-1,l=s.base.x+.65*s.reach*a,c=s.base.z+.76*s.reach*a;s.rider.position.set(l,.05,c),s.rider.rotation.y=Math.atan2(.65*o,.76*o),s.rider.rotation.z=.28;const h=e*1.3+s.phase,u=l+12+o*5+Math.sin(h)*4.5,f=c-10+Math.cos(h)*1.5,d=17+Math.sin(h*2)*2.4;s.kite.position.set(u,d,f),s.kite.lookAt(l,1.2,c),s.kite.rotateX(-Math.PI/2),n.setXYZ(r*4,l-.3,1.25,c),n.setXYZ(r*4+1,u-2.6,d-1,f),n.setXYZ(r*4+2,l-.3,1.25,c),n.setXYZ(r*4+3,u+2.6,d-1,f)}),n.needsUpdate=!0}if(this.traffic&&(this.cars.forEach((n,s)=>{var _,v;if(n.gone){this.traffic.setMatrixAt(s,this.nothing),(_=this.trafficTrim)==null||_.setMatrixAt(s,this.nothing);return}const r=n.route;n.s+=n.dir*n.speed*t,n.s>r.length&&(n.s=r.length,n.dir=-1),n.s<0&&(n.s=0,n.dir=1);let a=0,o=r.cum.length-1;for(;o-a>1;){const E=a+o>>1;r.cum[E]<=n.s?a=E:o=E}const l=(n.s-r.cum[a])/(r.cum[o]-r.cum[a]||1),c=r.pts[a*3],h=r.pts[a*3+2],u=r.pts[o*3],f=r.pts[o*3+2];let d=u-c,p=f-h;const M=Math.hypot(d,p)||1;d=d/M*n.dir,p=p/M*n.dir;const m=Math.min(r.width*.24,2),g=c+(u-c)*l+p*m,S=h+(f-h)*l-d*m;n.x=g,n.z=S,n.heading=Math.atan2(d,p),this.traffic.setMatrixAt(s,this.sit(g,S,n.heading,.36)),(v=this.trafficTrim)==null||v.setMatrixAt(s,this.tmpM)}),this.traffic.instanceMatrix.needsUpdate=!0,this.trafficTrim&&(this.trafficTrim.instanceMatrix.needsUpdate=!0)),this.gulls){const n=this.gulls.geometry.getAttribute("position");this.gullState.forEach((s,r)=>{const a=s.phase+e*s.w,o=s.cx+Math.cos(a)*s.r,l=s.cz+Math.sin(a)*s.r,c=s.h+Math.sin(a*2.3)*1.5,h=s.w>0?1:-1,u=-Math.sin(a)*h,f=Math.cos(a)*h,d=f,p=-u,M=Math.sin(e*7+s.phase*3)*.45,m=r*6;n.setXYZ(m,o+u*.35,c,l+f*.35),n.setXYZ(m+1,o-u*.3,c,l-f*.3),n.setXYZ(m+2,o+d*.85,c+M,l+p*.85),n.setXYZ(m+3,o+u*.35,c,l+f*.35),n.setXYZ(m+4,o-d*.85,c+M,l-p*.85),n.setXYZ(m+5,o-u*.3,c,l-f*.3)}),n.needsUpdate=!0}}}const Ws=(i,t,e)=>{const n=[],s=[];for(let r=0;r<i.length;r++){const a=i[r],o=i[(r+1)%i.length],l=t(a)-e,c=t(o)-e;if(l<=1e-9&&n.push(a),l>=-1e-9&&s.push(a),l<-1e-9&&c>1e-9||l>1e-9&&c<-1e-9){const h=l/(l-c),u=new Float64Array(a.length);for(let f=0;f<u.length;f++)u[f]=a[f]+(o[f]-a[f])*h;n.push(u),s.push(u)}}return[n,s]},dl=(i,t)=>{const e=[];for(let n of i){let s=1/0,r=-1/0;for(const a of n){const o=t(a);o<s&&(s=o),o>r&&(r=o)}for(let a=Math.floor(s+1e-9)+1;a<r-1e-9&&n.length>=3;a++){const[o,l]=Ws(n,t,a);o.length>=3&&e.push(o),n=l}n.length>=3&&e.push(n)}return e};function su(i,t,e,n,s){const r=p=>(p[0]-i.xMin)/i.dx,a=p=>(p[2]-i.zMin)/i.dz,o=p=>r(p)+a(p),l=Math.min(r(t),r(e),r(n)),c=Math.max(r(t),r(e),r(n)),h=Math.min(a(t),a(e),a(n)),u=Math.max(a(t),a(e),a(n)),f=Math.min(o(t),o(e),o(n)),d=Math.max(o(t),o(e),o(n));if(Math.floor(l)===Math.floor(c-1e-9)&&Math.floor(h)===Math.floor(u-1e-9)&&Math.floor(f)===Math.floor(d-1e-9)){s(t,e,n);return}for(const p of dl(dl(dl([[t,e,n]],r),a),o))for(let M=1;M+1<p.length;M++)s(p[0],p[M],p[M+1])}class T_{constructor(t,e,n){this.hf=t,this.mesh=e,this.clearance=n}quad(t,e,n,s,r,a,o,l,c,h,u,f,d){this.tri(t,e,n,s,r,a,o,l,c,d),this.tri(t,e,n,o,l,c,h,u,f,d)}edgeCrosses(t,e,n,s,r,a){const o=this.hf;for(let l=0;l<3;l++){const c=l===0?t:l===1?e:t+e,h=l===0?s:l===1?r:s+r,u=Math.max(c,h);for(let f=Math.floor(Math.min(c,h))+1;f<u;f++){const d=(f-c)/(h-c),p=o.xMin+(t+(s-t)*d)*o.dx,M=o.zMin+(e+(r-e)*d)*o.dz;if(n+(a-n)*d<o.yAt(p,M)+this.clearance)return!0}}return!1}needsFitting(t,e,n,s,r,a,o,l,c){const h=this.hf;if(e<h.yAt(t,n)+this.clearance||r<h.yAt(s,a)+this.clearance||l<h.yAt(o,c)+this.clearance)return!0;const u=(t-h.xMin)/h.dx,f=(n-h.zMin)/h.dz,d=(s-h.xMin)/h.dx,p=(a-h.zMin)/h.dz,M=(o-h.xMin)/h.dx,m=(c-h.zMin)/h.dz;if(this.edgeCrosses(u,f,e,d,p,r)||this.edgeCrosses(d,p,r,M,m,l)||this.edgeCrosses(M,m,l,u,f,e))return!0;const g=(d-u)*(m-f)-(p-f)*(M-u);if(Math.abs(g)<1e-12)return!1;const S=Math.min(h.nx-1,Math.floor(Math.max(u,d,M))),_=Math.min(h.nz-1,Math.floor(Math.max(f,p,m)));for(let v=Math.max(0,Math.ceil(Math.min(f,p,m)));v<=_;v++)for(let E=Math.max(0,Math.ceil(Math.min(u,d,M)));E<=S;E++){const b=((E-u)*(m-f)-(v-f)*(M-u))/g,x=((d-u)*(v-f)-(p-f)*(E-u))/g;if(b>=0&&x>=0&&b+x<=1&&e+b*(r-e)+x*(l-e)<h.y[v*h.nx+E]+this.clearance)return!0}return!1}tri(t,e,n,s,r,a,o,l,c,h){if(!this.needsFitting(t,e,n,s,r,a,o,l,c)){this.mesh.tri(t,e,n,s,r,a,o,l,c,h);return}const u=f=>Math.max(f[1],this.hf.yAt(f[0],f[2])+this.clearance);su(this.hf,new Float64Array([t,e,n]),new Float64Array([s,r,a]),new Float64Array([o,l,c]),(f,d,p)=>{this.mesh.tri(f[0],u(f),f[2],d[0],u(d),d[2],p[0],u(p),p[2],h)})}}const ru=i=>i[0],au=i=>i[2],Tn=1.5,gi=.16,na=Math.hypot(Tn,gi),hs=12,ou=(i,t)=>(i+2048)*8192+t+2048;class A_{constructor(t,e,n){j(this,"bins",new Map);this.asphalt=t,this.marks=e,this.color=n}addDash(t,e,n,s,r,a){const o={x:t+Tn*s,z:n+Tn*r,dx:s,dz:r,y:e+Tn*a,grade:a,flat:!0,area:0,pieces:[]},l=ou(Math.floor(o.x/hs),Math.floor(o.z/hs));let c=this.bins.get(l);c||this.bins.set(l,c=[]),c.push(o)}tri(t,e,n,s,r,a,o,l,c,h){this.asphalt.tri(t,e,n,s,r,a,o,l,c,h);const u=Math.min(t,s,o)-na,f=Math.max(t,s,o)+na,d=Math.min(n,a,c)-na,p=Math.max(n,a,c)+na;for(let M=Math.floor(d/hs);M<=Math.floor(p/hs);M++)for(let m=Math.floor(u/hs);m<=Math.floor(f/hs);m++){const g=this.bins.get(ou(m,M));if(g)for(const S of g){if(S.x<u||S.x>f||S.z<d||S.z>p)continue;const _=(E,b,x)=>new Float64Array([(E-S.x)*S.dx+(x-S.z)*S.dz,b,-(E-S.x)*S.dz+(x-S.z)*S.dx]);let v=[_(t,e,n),_(s,r,a),_(o,l,c)];if(v=Ws(v,ru,-Tn)[1],v=Ws(v,ru,Tn)[0],v=Ws(v,au,-gi)[1],v=Ws(v,au,gi)[0],!(v.length<3)){S.pieces.push(v);for(let E=0;E<v.length;E++){const b=v[E],x=v[(E+1)%v.length];S.area+=(x[0]*b[2]-x[2]*b[0])/2,Math.abs(S.y+b[0]*S.grade-b[1])>.03&&(S.flat=!1)}}}}}finish(){for(const t of this.bins.values())for(const e of t){const n=s=>[e.x+s[0]*e.dx-s[2]*e.dz,s[1]+.05,e.z+s[0]*e.dz+s[2]*e.dx];if(e.flat&&Math.abs(e.area-4*Tn*gi)<1e-4){const s=(r,a)=>n(new Float64Array([r,e.y+r*e.grade,a]));this.marks.quad(...s(-Tn,gi),...s(Tn,gi),...s(Tn,-gi),...s(-Tn,-gi),this.color)}else for(const s of e.pieces)for(let r=1;r+1<s.length;r++)this.marks.tri(...n(s[0]),...n(s[r]),...n(s[r+1]),this.color)}}}const R_=1,lu=2,C_=[H(5198680),H(11575168),H(9072466),H(12434356)],P_=H(4474957),cu=H(15921382),L_=[.34,.3,.26,.22,.16,.15,.13,.11],hu=new Float32Array(9);function D_(i,t){const e=[i[0]/10,i[1]/10];for(let n=2;n<i.length;n+=2){const s=i[n-2]/10,r=i[n-1]/10,a=i[n]/10,o=i[n+1]/10,l=Math.max(1,Math.ceil(Math.hypot(a-s,o-r)/t));for(let c=1;c<=l;c++)e.push(s+(a-s)*c/l,r+(o-r)*c/l)}return e}class I_{constructor(){j(this,"cells",new Map);j(this,"segs",[]);j(this,"size",40)}add(t,e,n,s,r,a){const o=this.segs.length/6;this.segs.push(t,e,n,s,r,a);const l=Math.floor(Math.min(t,n)/this.size),c=Math.floor(Math.max(t,n)/this.size),h=Math.floor(Math.min(e,s)/this.size),u=Math.floor(Math.max(e,s)/this.size);for(let f=l;f<=c;f++)for(let d=h;d<=u;d++){const p=(f+512)*4096+(d+512);let M=this.cells.get(p);M||this.cells.set(p,M=[]),M.push(o)}}nearest(t,e,n){let s=null;const r=Math.ceil(n/this.size),a=Math.floor(t/this.size),o=Math.floor(e/this.size);for(let l=a-r;l<=a+r;l++)for(let c=o-r;c<=o+r;c++){const h=this.cells.get((l+512)*4096+(c+512));if(h)for(const u of h){const f=this.segs[u*6],d=this.segs[u*6+1],p=this.segs[u*6+2],M=this.segs[u*6+3],m=p-f,g=M-d,S=Math.max(0,Math.min(1,((t-f)*m+(e-d)*g)/(m*m+g*g||1))),_=f+m*S,v=d+g*S,E=Math.hypot(t-_,e-v);E<=n&&(!s||E<s.dist)&&(s={dist:E,px:_,pz:v,cls:this.segs[u*6+4],name:this.segs[u*6+5]})}}return s}}function N_(i,t,e){const n=new Jt,s=new Jt,r=new I_,a=[],o=[];for(const[m,g,S,_,v,E]of i.roads){const b=_/10,x=D_(E,m<=3?6:5),y=x.length/2;if(y<2)continue;const T=g===0&&m<=1?P_:C_[g],R=L_[m],C=(S&R_)!==0,N=t.yAt(x[0],x[1]),B=t.yAt(x[y*2-2],x[y*2-1]),P=new Float32Array(y);for(let z=1;z<y;z++)P[z]=P[z-1]+Math.hypot(x[z*2]-x[z*2-2],x[z*2+1]-x[z*2-1]);const k=P[y-1]||1,D=new Float32Array(y*3),L=new Float32Array(y*3),Z=new Float32Array(y*3);for(let z=0;z<y;z++){const X=x[z*2],F=x[z*2+1],K=Math.max(z-1,0),et=Math.min(z+1,y-1);let lt=x[et*2]-x[K*2],nt=x[et*2+1]-x[K*2+1];const pt=Math.hypot(lt,nt)||1;lt/=pt,nt/=pt;let Bt=1;if(z>0&&z<y-1){const be=x[z*2]-x[z*2-2],oe=x[z*2+1]-x[z*2-1],Me=Math.hypot(be,oe)||1;Bt=1/Math.max(.6,(be*lt+oe*nt)/Me)}const bt=-nt*(b/2)*Bt,Ot=lt*(b/2)*Bt,Ft=C?N+(B-N)*(P[z]/k)+.6+1*Math.sin(Math.PI*P[z]/k):NaN,It=C?Ft:t.yAt(X,F)+R,Qt=C?Ft:t.yAt(X+bt,F+Ot)+R,ae=C?Ft:t.yAt(X-bt,F-Ot)+R;D.set([X+bt,Qt,F+Ot],z*3),L.set([X,It,F],z*3),Z.set([X-bt,ae,F-Ot],z*3),z>0&&m<=3&&r.add(x[z*2-2],x[z*2-1],X,F,m,v)}const Y=m<=1&&!(S&lu)&&k>20,U=Y&&!C?new A_(n,s,cu):void 0;if(Y){let z=0;for(let X=4;X<k-4;X+=12){for(;z<y-2&&P[z+1]<X;)z++;const F=(X-P[z])/(P[z+1]-P[z]||1),K=L[z*3]+(L[z*3+3]-L[z*3])*F,et=L[z*3+1]+(L[z*3+4]-L[z*3+1])*F,lt=L[z*3+2]+(L[z*3+5]-L[z*3+2])*F;if(e!=null&&e(K,lt))continue;let nt=L[z*3+3]-L[z*3],pt=L[z*3+5]-L[z*3+2];const Bt=Math.hypot(nt,pt)||1;nt/=Bt,pt/=Bt;const bt=(L[z*3+4]-L[z*3+1])/Bt;if(U){U.addDash(K,et,lt,nt,pt,bt);continue}const Ot=bt*3,Ft=-pt*.16,It=nt*.16,Qt=.05;s.quad(K+Ft,et+Qt,lt+It,K+nt*3+Ft,et+Ot+Qt,lt+pt*3+It,K+nt*3-Ft,et+Ot+Qt,lt+pt*3-It,K-Ft,et+Qt,lt-It,cu)}}const O=C?n:new T_(t,U??n,.04);for(let z=0;z<y-1;z++){const X=z*3,F=X+3;if(e){const K=e(L[X],L[X+2]),et=e(L[F],L[F+2]);if(K&&et)continue;if(K!==et){let lt=0,nt=1;for(let Me=0;Me<12;Me++){const se=(lt+nt)/2;e(L[X]+(L[F]-L[X])*se,L[X+2]+(L[F+2]-L[X+2])*se)===K?lt=se:nt=se}const pt=(lt+nt)/2;for(const Me of[D,L,Z])for(let se=0;se<3;se++)hu[(Me===D?0:Me===L?3:6)+se]=Me[X+se]+(Me[F+se]-Me[X+se])*pt;const[Bt,bt,Ot,Ft,It,Qt,ae,be,oe]=hu;K?(O.quad(Bt,bt,Ot,D[F],D[F+1],D[F+2],L[F],L[F+1],L[F+2],Ft,It,Qt,T),O.quad(Ft,It,Qt,L[F],L[F+1],L[F+2],Z[F],Z[F+1],Z[F+2],ae,be,oe,T)):(O.quad(D[X],D[X+1],D[X+2],Bt,bt,Ot,Ft,It,Qt,L[X],L[X+1],L[X+2],T),O.quad(L[X],L[X+1],L[X+2],Ft,It,Qt,ae,be,oe,Z[X],Z[X+1],Z[X+2],T));continue}}if(O.quad(D[X],D[X+1],D[X+2],D[F],D[F+1],D[F+2],L[F],L[F+1],L[F+2],L[X],L[X+1],L[X+2],T),O.quad(L[X],L[X+1],L[X+2],L[F],L[F+1],L[F+2],Z[F],Z[F+1],Z[F+2],Z[X],Z[X+1],Z[X+2],T),C){const K=H(g===2?7297604:13225162);for(const et of[D,Z])n.quad(et[X],et[X+1],et[X+2],et[F],et[F+1],et[F+2],et[F],et[F+1]+1.05,et[F+2],et[X],et[X+1]+1.05,et[X+2],K),n.quad(et[X],et[X+1]-.7,et[X+2],et[F],et[F+1]-.7,et[F+2],et[F],et[F+1],et[F+2],et[X],et[X+1],et[X+2],H(9276036))}}if(m<=5&&!C)for(const z of[0,y-1]){const X=L[z*3],F=L[z*3+1],K=L[z*3+2];if(e!=null&&e(X,K))continue;const et=16;for(let lt=0;lt<et;lt++){const nt=lt/et*Math.PI*2,pt=(lt+1)/et*Math.PI*2,Bt=X+Math.cos(pt)*b/2,bt=K+Math.sin(pt)*b/2,Ot=X+Math.cos(nt)*b/2,Ft=K+Math.sin(nt)*b/2;O.tri(X,F,K,Bt,t.yAt(Bt,bt)+R,bt,Ot,t.yAt(Ot,Ft)+R,Ft,T)}}if(U==null||U.finish(),S&lu){let z=0,X=0;for(let pt=0;pt<y;pt++)z+=x[pt*2],X+=x[pt*2+1];z/=y,X/=y;const F=y>>1,K=U_(x[0],x[1],x[F*2],x[F*2+1],x[y*2-2],x[y*2-1]),et=K?K.x:z,lt=K?K.z:X,nt=K?K.r:Math.hypot(x[0]-z,x[1]-X);nt>3&&nt<40&&!(e!=null&&e(et,lt))&&!o.some(pt=>Math.hypot(pt.x-et,pt.z-lt)<12)&&o.push({x:et,z:lt,r:nt,w:b})}m<=3&&a.push({cls:m,name:v>=0?i.names[v]:"",width:b,flags:S,pts:L,length:k})}const l=H(13158078),c=H(7314002),h=H(4943936);for(const m of o){const g=m.r-m.w/2-.3;if(g<1.2)continue;const S=t.yAt(m.x,m.z)+.2;n.frame(m.x,S,m.z,0),n.cyl(0,0,0,g,g,.4,14,l,c),n.blob(0,.9,0,g*.45,.8,g*.45,6,3,h,H(7181400)),n.frame()}const u=new $n({vertexColors:!0,roughness:.92,metalness:0,side:Ie,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),f=new Yt(uu(n.build()),u);f.receiveShadow=!0,f.name="roads";const d=Yr(new Nn({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})),p=new Yt(uu(s.build()),d);p.name="road-markings";const M=new Je;return M.add(f,p),{group:M,index:r,paths:a}}function uu(i){return i.deleteAttribute("glow"),i}function U_(i,t,e,n,s,r){const a=2*(i*(n-r)+e*(r-t)+s*(t-n));if(Math.abs(a)<.001)return null;const o=i*i+t*t,l=e*e+n*n,c=s*s+r*r,h=(o*(n-r)+l*(r-t)+c*(t-n))/a,u=(o*(s-e)+l*(i-s)+c*(e-i))/a;return{x:h,z:u,r:Math.hypot(i-h,t-u)}}class F_{constructor(t,e=1){j(this,"ratio");j(this,"floor");j(this,"sampleSeconds",0);j(this,"sampleFrames",0);j(this,"slowSeconds",0);j(this,"smoothSeconds",0);j(this,"retryAfter",0);j(this,"lastRaise",-1/0);this.ceiling=t,this.ratio=t,this.floor=Math.min(t,e)}resetSampling(){this.sampleSeconds=this.sampleFrames=this.slowSeconds=this.smoothSeconds=0}update(t,e,n){if(e<=0||e>=.25)return this.resetSampling(),!1;if(this.sampleSeconds+=e,this.sampleFrames+=1,this.sampleSeconds<1)return!1;const s=this.sampleSeconds,r=this.sampleFrames/s;return this.sampleSeconds=this.sampleFrames=0,this.slowSeconds=r<n*.9?this.slowSeconds+s:0,this.slowSeconds>=2&&this.ratio>this.floor?(this.ratio=Math.max(this.floor,this.ratio*.75),this.retryAfter=t+(t-this.lastRaise<15?90:20),this.resetSampling(),!0):this.ratio>=this.ceiling||t<this.retryAfter||(this.smoothSeconds=r>=n*.97?this.smoothSeconds+s:0,this.smoothSeconds<8)?!1:(this.ratio=Math.min(this.ceiling,this.ratio/.75),this.lastRaise=t,this.resetSampling(),!0)}}const Xs=-36,fl=170,O_=`
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
`,pl=2;function z_(){const i=new Er(new Uint8Array([128,128,128,255]),1,1);return i.needsUpdate=!0,{fallback:i,maps:Array.from({length:pl},()=>({value:i})),rects:Array.from({length:pl},()=>({value:new de(0,0,1,0)}))}}function B_({pos:i,nor:t,uv:e,idx:n}){const s=new Re;return s.setAttribute("position",new Ae(i,3)),s.setAttribute("normal",new Ae(t,3)),s.setAttribute("uv",new Ae(e,2)),s.setIndex(new Ae(n,1)),s.computeBoundingSphere(),s}function G_(i,t,e,n,s){const r=new $n({map:e,roughness:.96,metalness:0});r.onBeforeCompile=o=>{o.uniforms.uTide=n;for(let l=0;l<pl;l++)o.uniforms["uDetail"+l]=s.maps[l],o.uniforms["uDetailRect"+l]=s.rects[l];o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform float uTide;
uniform sampler2D uDetail0;
uniform vec4 uDetailRect0;
uniform sampler2D uDetail1;
uniform vec4 uDetailRect1;
${O_}`).replace("#include <map_fragment>",`#include <map_fragment>
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
          float above = vWPos.y / ${Bn.toFixed(2)} - uTide;
          float wet = smoothstep(0.45, 0.03, above);
          diffuseColor.rgb *= mix(1.0, 0.76, wet);
        }`)},r.customProgramCacheKey=()=>"inverloch-terrain-3";const a=new Je;for(const o of t){const l=new Yt(B_(o),r);l.receiveShadow=!0,l.name="terrain",a.add(l)}return a.add(H_(i),V_(i)),a}function k_(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function H_(i){const t=k_(i),e=t.length,n=[],s=[],r=[],a=new Rt(9074780),o=new Rt(6180669),l=new Rt(3813673),c=[[0,a,o],[1,o,l]];for(let f=0;f<e;f++){const[d,p]=t[f],[M,m]=t[(f+1)%e],g=i.yAt(d,p),S=i.yAt(M,m),_=M-d,v=m-p,E=Math.hypot(_,v)||1,b=-v/E*-1,x=_/E*-1;for(const[y,T,R]of c){const N=y===0?g:g-6,B=y===0?g-6:Xs,P=y===0?S:S-6,k=y===0?S-6:Xs;n.push(d,N,p,M,P,m,M,k,m,d,N,p,M,k,m,d,B,p);for(const D of[T,T,R,T,R,R])s.push(D.r,D.g,D.b);for(let D=0;D<6;D++)r.push(b,0,x)}}const h=new Re;h.setAttribute("position",new fe(n,3)),h.setAttribute("normal",new fe(r,3)),h.setAttribute("color",new fe(s,3));const u=new Yt(h,new $n({vertexColors:!0,roughness:1,side:Ie}));return u.name="skirt",u}function V_(i){const t=new Je,e=i.xMax-i.xMin+fl*2,n=i.zMax-i.zMin+fl*2,s=190,r=(i.xMin+i.xMax)/2,a=(i.zMin+i.zMax)/2,o=new Yt(new Ti(e,s,n),new $n({color:1779245,roughness:.75,metalness:.1}));o.position.set(r,Xs-s/2,a),o.receiveShadow=!0,t.add(o);const l=document.createElement("canvas");l.width=2048,l.height=160;const c=l.getContext("2d");c.fillStyle="#1b262d",c.fillRect(0,0,l.width,l.height),c.fillStyle="#e9d9a6",c.textBaseline="middle",c.font="600 78px 'Space Grotesk', system-ui, sans-serif",c.fillText("INVERLOCH",40,84);const h=c.measureText("INVERLOCH").width;c.fillStyle="#9fb4bd",c.font="400 42px 'Space Grotesk', system-ui, sans-serif",c.fillText("Bass Coast, Victoria   ·   38.63° S  145.73° E   ·   Anderson Inlet & Bass Strait",40+h+46,88);const u=new Lo(l);u.colorSpace=Te,u.anisotropy=8;const f=1700,d=new Yt(new Un(f,f*(l.height/l.width)),new Nn({map:u,toneMapped:!1}));d.position.set(r-e/2+f/2+110,Xs-s/2,a+n/2+.6),t.add(d);const p=document.createElement("canvas");p.width=p.height=256;const M=p.getContext("2d");M.fillStyle="#e9d9a6",M.beginPath(),M.moveTo(128,18),M.lineTo(176,150),M.lineTo(128,122),M.lineTo(80,150),M.closePath(),M.fill(),M.font="700 86px 'Space Grotesk', system-ui, sans-serif",M.textAlign="center",M.fillText("N",128,240);const m=new Lo(p);m.colorSpace=Te;const g=new Yt(new Un(130,130),new Nn({map:m,transparent:!0,toneMapped:!1}));return g.rotation.x=-Math.PI/2,g.position.set(i.xMax+fl/2,Xs+.6,i.zMin+120),t.add(g),t}const du=[[-.375,-.125],[.125,-.375],[.375,.125],[-.125,.375]],W_=4e3,X_=12e3;class Y_{constructor(t,e){j(this,"size",new Lt);j(this,"screen",new uc);j(this,"screenCamera",new Vo);j(this,"blend",new nn({depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{previous:{value:null},currentFrame:{value:null},weight:{value:1}},vertexShader:`
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
    `}));j(this,"quad",new Yt(new Un(2,2),this.blend));j(this,"history");j(this,"sample");j(this,"capture");this.renderer=t,this.onFinish=e,this.quad.frustumCulled=!1,this.screen.add(this.quad)}get pending(){return!!this.capture&&!this.capture.encoding}start(){return this.capture?Promise.reject(new Error("An antialiased photo is already being captured.")):new Promise((t,e)=>{const n=this.capture={resolve:t,reject:e,deadline:performance.now()+X_,samples:0,bestSamples:0,encoding:!1};this.armTimeout(n)})}draw(t,e,n){var o,l;const s=this.capture;if(!s||s.encoding)return!1;this.renderer.getDrawingBufferSize(this.size);const{x:r,y:a}=this.size;(((o=this.history)==null?void 0:o.image.width)!==r||((l=this.history)==null?void 0:l.image.height)!==a)&&(this.releaseTextures(),this.history=new Rc(r,a),this.sample=new Rc(r,a),this.blend.uniforms.previous.value=this.history,this.blend.uniforms.currentFrame.value=this.sample,n=!0),n&&(s.samples=0);try{return this.drawSample(t,e,s.samples),s.samples++,s.samples===du.length?this.encode(s):(this.renderer.copyFramebufferToTexture(this.history),s.samples>s.bestSamples&&(s.bestSamples=s.samples,this.armTimeout(s))),!0}catch{return this.cancel("The browser could not capture an antialiased photo."),!1}}drawSample(t,e,n){const[s,r]=du[n],a=e.projectionMatrix.elements,o=a[8],l=a[9];a[8]+=2*s/this.size.x,a[9]+=2*r/this.size.y,e.projectionMatrixInverse.copy(e.projectionMatrix).invert();const c=this.renderer.shadowMap.autoUpdate;n>0&&(this.renderer.shadowMap.autoUpdate=!1);try{this.renderer.render(t,e)}finally{a[8]=o,a[9]=l,e.projectionMatrixInverse.copy(e.projectionMatrix).invert(),this.renderer.shadowMap.autoUpdate=c}n>0&&(this.renderer.copyFramebufferToTexture(this.sample),this.blend.uniforms.weight.value=1/(n+1),this.renderer.render(this.screen,this.screenCamera))}encode(t){t.encoding=!0,this.armTimeout(t),this.releaseTextures(),this.onFinish(),this.renderer.domElement.toBlob(e=>{this.finish(t)&&(e?t.resolve(e):t.reject(new Error("The browser did not write the antialiased PNG.")))},"image/png")}armTimeout(t){window.clearTimeout(t.timeout);const e=Math.min(W_,Math.max(0,t.deadline-performance.now())),n=t.encoding?"The browser did not finish writing the antialiased PNG.":"The view did not stay still long enough to save an antialiased photo.";t.timeout=window.setTimeout(()=>this.cancel(n),e)}cancel(t){const e=this.capture;!e||!this.finish(e)||e.reject(new Error(t))}finish(t){return this.capture!==t?!1:(window.clearTimeout(t.timeout),this.capture=void 0,t.encoding||(this.releaseTextures(),this.onFinish()),!0)}releaseTextures(){var t,e;(t=this.history)==null||t.dispose(),(e=this.sample)==null||e.dispose(),this.history=this.sample=void 0,this.blend.uniforms.previous.value=null,this.blend.uniforms.currentFrame.value=null}dispose(){this.cancel("The Inverloch view was closed before saving the photo."),this.quad.geometry.dispose(),this.blend.dispose()}}function ia(i,t,e,n,s,r,a,o,l,c){const h=new Oo(1,0),u=h.getAttribute("position"),f=[];for(let d=0;d<u.count;d++){const p=u.getX(d),M=u.getY(d),m=u.getZ(d),g=Math.sin(p*12.9898+M*78.233+m*37.719+o*4.1)*43758.5453,S=.8+(g-Math.floor(g))*.42;f.push([t+p*s*S,e+M*r*(M<0?.75:S),n+m*a*S])}for(let d=0;d<f.length;d+=3){const[p,M,m]=[f[d],f[d+1],f[d+2]],g=he.clamp(((p[1]+M[1]+m[1])/3-(e-r))/(2*r),0,1);i.tri(p[0],p[1],p[2],M[0],M[1],M[2],m[0],m[1],m[2],zs(l,c,g))}h.dispose()}function xi(i){const t=i.build();return t.deleteAttribute("glow"),t}function q_(){const i=[];let t=new Jt;return ia(t,0,.44,0,.82,.56,.82,1,H(3098152),H(7507285)),i.push(xi(t)),t=new Jt,t.cyl(0,0,0,.04,.026,.56,4,H(11905429)),ia(t,0,.72,0,.36,.3,.36,2,H(4151352),H(9349240)),ia(t,.17,.52,.1,.24,.19,.24,3,H(3887925),H(8362603)),i.push(xi(t)),t=new Jt,t.cyl(0,0,0,.055,.04,.4,4,H(7297608)),ia(t,0,.64,0,.46,.38,.46,4,H(3695150),H(9091170)),i.push(xi(t)),t=new Jt,t.cyl(0,0,0,.035,.03,.16,4,H(5916728)),t.cyl(0,.12,0,.23,.11,.42,6,H(2506539)),t.cyl(0,.5,0,.15,0,.5,6,H(4020796)),i.push(xi(t)),i}function fu(i){const t=[],e=i?5:7;let n=new Jt;return n.blob(0,.48,0,.81,.52,.81,e,2,H(4018735),H(7507285)),t.push(xi(n)),n=new Jt,i||(n.cyl(0,0,0,.04,.026,.56,3,H(11905429)),n.blob(.17,.52,.1,.24,.19,.24,4,2,H(3887925),H(8362603))),n.blob(i?.05:0,.72,0,i?.39:.36,.3,.36,e,2,H(4546110),H(9349240)),t.push(xi(n)),n=new Jt,i||n.cyl(0,0,0,.055,.04,.4,3,H(7297608)),n.blob(0,.64,0,.46,.38,.46,e,2,H(3695150),H(9091170)),t.push(xi(n)),n=new Jt,i?n.cyl(0,.15,0,.23,0,.85,e,H(4020796)):(n.cyl(0,.12,0,.23,.11,.42,4,H(2506539)),n.cyl(0,.5,0,.15,0,.5,5,H(4020796))),t.push(xi(n)),t}function Z_(i,t,e,n=()=>!1){const s=new Je;s.name="trees";const r=[q_(),fu(!1),fu(!0)],a=[],o=new Bo({vertexColors:!0}),l=650,c=new Map,h=i.trees,u=ze(88);for(let _=0;_<h.length;_+=vx){if(e<1&&u()>e||n(h[_]/4,h[_+1]/4))continue;const E=`${h[_+2]>>8}:${Math.floor(h[_]/4/l)}:${Math.floor(h[_+1]/4/l)}`;let b=c.get(E);b||c.set(E,b=[]),b.push(_)}const f=new jt,d=new vn,p=new W,M=new W,m=new W(0,1,0),g=new Rt;let S=0;for(const[_,v]of c){const E=Number(_.split(":")[0]),b=r.map((x,y)=>{const T=new Ze(x[E],o,v.length);return T.name=["tree-near","tree-mid","tree-far"][y],T});v.forEach((x,y)=>{const T=h[x]/4,R=h[x+1]/4,C=(h[x+2]&255)/10,N=ze(x*2654435761+11);M.set(T,t.yAt(T,R)-.15,R),d.setFromAxisAngle(m,N()*Math.PI*2);const B=.85+N()*.35;p.set(C*B,C,C*(.85+N()*.35)),f.compose(M,d,p);const P=.8+N()*.34;g.setRGB(P*(.94+N()*.14),P,P*(.9+N()*.12));for(const k of b)k.setMatrixAt(y,f),k.setColorAt(y,g)}),a.push(new Zh(b.map(x=>[x]),s)),S+=v.length}return{group:s,count:S,updateLod(_,v,E){for(const b of a)b.update(_,v,E)}}}const K_=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,$_=`
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
}`;function J_(i,t){const e=i.w*i.h,n=new Uint16Array(e*2);for(let d=0;d<e;d++)n[d*2]=fc.toHalfFloat(i.raw[d]),n[d*2+1]=fc.toHalfFloat(i.exposure[d]);const s=new Er(n,i.w,i.h,ai,xn);s.minFilter=s.magFilter=qe,s.wrapS=s.wrapT=Rn,s.needsUpdate=!0;const r={tField:{value:s},uSize:{value:new Lt(i.sizeX,i.sizeZ)},uTide:t,uTime:{value:0},uSunDir:{value:new W(.4,.8,.3).normalize()},uSunColor:{value:new Rt(16773848)},uShallow:{value:new Rt(7129789)},uDeep:{value:new Rt(937848)},uSky:{value:new Rt(12573938)},uFoam:{value:1}},a=new nn({uniforms:r,vertexShader:K_,fragmentShader:$_,transparent:!0,depthWrite:!1}),o=new Un(i.xMax-i.xMin,i.zMax-i.zMin);o.rotateX(-Math.PI/2);const l=new Yt(o,a);l.position.set((i.xMin+i.xMax)/2,t.value*Bn,(i.zMin+i.zMax)/2),l.renderOrder=2,l.name="water";const c=new Yt(new Re,new Nn({color:1929103,transparent:!0,opacity:.8,side:Ie,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));c.renderOrder=1,c.name="water-edge";const h=[];for(let d=0;d<i.nx;d++)h.push([i.xMin+d*i.dx,i.zMin]);for(let d=1;d<i.nz;d++)h.push([i.xMax,i.zMin+d*i.dz]);for(let d=i.nx-2;d>=0;d--)h.push([i.xMin+d*i.dx,i.zMax]);for(let d=i.nz-2;d>=1;d--)h.push([i.xMin,i.zMin+d*i.dz]);const u=h.map(([d,p])=>i.yAt(d,p)),f=d=>{t.value=d;const p=d*Bn;l.position.y=p;const M=[],m=h.length;for(let S=0;S<m;S++){const _=(S+1)%m,v=u[S],E=u[_];if(v>=p&&E>=p)continue;const[b,x]=h[S],[y,T]=h[_],R=Math.min(v,p),C=Math.min(E,p);M.push(b,p,x,y,p,T,y,C,T,b,p,x,y,C,T,b,R,x)}c.geometry.dispose();const g=new Re;g.setAttribute("position",new fe(M,3)),c.geometry=g};return f(t.value),{mesh:l,skirt:c,uniforms:r,setTide:f}}const Q_="detail-abeckett-ultra-v1.json",ml=-38.63351,pu=145.72774,j_=111320*Math.cos(ml*Math.PI/180);class tv{constructor(t,e,n,s,r){j(this,"group");j(this,"daylight",{value:1});j(this,"request");j(this,"retryAt",0);j(this,"origin");j(this,"sx");j(this,"sz");this.scene=t,this.manifest=e,this.ground=s,this.redraw=r,this.origin=n(ml,pu);const a=n(ml-100/110540,pu+100/j_);this.sx=(a[0]-this.origin[0])/100,this.sz=(a[1]-this.origin[1])/100}update(t,e){this.daylight.value=Math.min(1,.08+e*.3);const n=this.origin[0]+22*this.sx,s=this.origin[1]+37*this.sz,r=Math.hypot(t.x-n,t.y-this.ground(n,s),t.z-s);if(this.group)this.group.visible=r<(this.group.visible?155:130);else if(r>220&&this.request)this.request.abort(),this.request=void 0;else if(r<155&&!this.request&&performance.now()>=this.retryAt){const a=this.request=new AbortController;this.load(a)}}async load(t){try{const e=new URL(Q_,new URL(this.manifest,document.baseURI)),n=await fetch(e,{signal:t.signal});if(!n.ok)throw new Error(String(n.status));const s=await n.json();if(t.signal.aborted)return;const r=this.build(s);this.group=r,this.scene.add(r),this.redraw()}catch{t.signal.aborted||(this.retryAt=performance.now()+3e4)}finally{this.request===t&&(this.request=void 0)}}build(t){const e=new Jt,n=new Jt,s=new Jt,r=H(6842465),a=H(10196618),o=H(3883588),l=H(12039851),c=H(16777215);for(const[f,d,p,M,m,g,S]of t.fronts){const _=Math.hypot(p-f,M-d),v=Math.atan2(m,g);e.frame(f,0,d,v),n.frame(f,0,d,v);const E=R=>3.15+(S?.24*(1-R/3.2):0);for(const R of[.32,1.58,2.97]){const C=E(R);e.box(.05,C-.09,R-.045,_-.05,C,R+.045,r)}const b=Math.max(2,Math.round(_/1.25));for(let R=0;R<=b;R++){const C=.095+R*(_-.19)/b;e.quad(C,E(.22)-.06,.22,C,E(3.05)-.06,3.05,C+.07,E(3.05)-.06,3.05,C+.07,E(.22)-.06,.22,a)}e.box(.055,3.045,3.14,_-.055,3.105,3.3,r);const x=_-1.7,y=Math.max(2,Math.round((_-1.4)/2.1)),T=S?.22:.34;for(let R=0;R<y;R++){const C=.18+x*R/y+.055,N=.18+x*(R+1)/y-.055;n.quad(C,.57,T,N,.57,T,N,2.72,T,C,2.72,T,c),e.box(C-.035,.51,T-.045,N+.035,.56,T+.04,o),e.box(C-.035,2.25,T-.025,N+.035,2.28,T+.02,l)}e.box(_-1.17,.93,T+.05,_-1.135,1.35,T+.085,l),e.box(_-1.28,.13,.15,_-.2,.17,.42,a)}for(const[f,d,p,M]of t.trees){const m=ze(M+431),g=[5466952,7701590,8819806,6781777].map(H);s.frame(f,0,d);for(let S=0;S<90;S++){const _=m()*Math.PI*2,v=(1.05+m()*2.25)*p,E=v*Math.sin(_),b=v*Math.cos(_),x=(6.55+1.6*m()-.35*v)*p,y=(.11+.22*m())*p,T=(.16+.28*m())*p,R=g[S%4];s.tri(E-y,x+T,b,E+y,x+.42*T,b+.1,E,x-T,b+.18,R)}}const h=new Je;h.name="A'Beckett Street close detail";const u=(f,d,p)=>{const M=f.build(),m=M.getAttribute("position");for(let S=0;S<m.count;S++){const _=this.origin[0]+m.getX(S)*this.sx,v=this.origin[1]+m.getZ(S)*this.sz;m.setXYZ(S,_,this.ground(_,v)+.08+m.getY(S),v)}M.deleteAttribute("glow"),M.computeBoundingSphere();const g=new Yt(M,d);g.castShadow=p,g.receiveShadow=p,h.add(g)};return u(e,new $n({vertexColors:!0,roughness:.73,metalness:.1,side:Ie}),!0),u(s,new Bo({vertexColors:!0,side:Ie}),!0),u(n,new nn({uniforms:{daylight:this.daylight},transparent:!0,depthWrite:!1,vertexShader:`varying vec3 world, facing;
        void main(){vec4 p=modelMatrix*vec4(position,1.);world=p.xyz;facing=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*viewMatrix*p;}`,fragmentShader:`varying vec3 world, facing; uniform float daylight;
        void main(){vec3 eye=normalize(cameraPosition-world),n=normalize(facing),r=reflect(-eye,n);
          float sky=smoothstep(-.09,.27,r.y),f=pow(1.-clamp(dot(eye,n),0.,1.),3.);
          gl_FragColor=vec4(daylight*mix(vec3(.13,.18,.15),vec3(.54,.68,.78),sky),.045+.19*f+.085*sky);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),!1),h}dispose(){var t;(t=this.request)==null||t.abort()}}const mu=-.9,gu=1.3,xu=.2,us={x:260,z:150,dist:3900,polar:55,azimuth:16},ev={ultra:{step:1,trees:1,shadow:4096,pixelRatio:2},high:{step:1,trees:1,shadow:4096,pixelRatio:2},medium:{step:2,trees:.6,shadow:2048,pixelRatio:1.3},low:{step:2,trees:.35,shadow:0,pixelRatio:1}},nv={ultra:{cars:[200,400,1100],trees:[260,770,4e3]},high:{cars:[170,340,1050],trees:[235,710,3800]},medium:{cars:[120,270,820],trees:[160,530,2850]},low:{cars:[85,190,600],trees:[100,380,2200]}},iv=()=>new Promise(i=>requestAnimationFrame(()=>i()));function sv(i,t){const n=t.positions,s=t.normals,r=t.colors,a=t.uvs,o=t.indices,l=o?o.length:n.length/3,c=new jt().fromArray(Array.from(t.matrix)),h=new zt().getNormalMatrix(c),u=new W,f=_=>{const v=o?o[_]:_,E=new Float64Array(11);return u.set(n[v*3],n[v*3+1],n[v*3+2]).applyMatrix4(c),E[0]=u.x,E[1]=u.y,E[2]=u.z,s&&(u.set(s[v*3],s[v*3+1],s[v*3+2]).applyMatrix3(h).normalize(),E[3]=u.x,E[4]=u.y,E[5]=u.z),r&&(E[6]=r[v*3],E[7]=r[v*3+1],E[8]=r[v*3+2]),a&&(E[9]=a[v*2],E[10]=a[v*2+1]),E},d=[],p=[],M=[],m=[],g=_=>{d.push(_[0],_[1]+i.yAt(_[0],_[2]),_[2]),s&&p.push(_[3],_[4],_[5]),r&&M.push(_[6],_[7],_[8]),a&&m.push(_[9],_[10])},S=(_,v,E)=>{g(_),g(v),g(E)};for(let _=0;_+2<l;_+=3){const v=f(_),E=f(_+1),b=f(_+2);su(i,v,E,b,S)}return{positions:new Float32Array(d),normals:s?new Float32Array(p):void 0,colors:r?new Float32Array(M):void 0,uvs:a?new Float32Array(m):void 0}}function rv(i,t,e){let n=0;for(let s=0;s<i.length;s++){const r=i[s],a=i[(s+1)%i.length],o=(a[0]-r[0])*(e-r[1])-(a[1]-r[1])*(t-r[0]);if(o!==0){if(n===0)n=Math.sign(o);else if(Math.sign(o)!==n)return!1}}return!0}const av=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class ov{constructor(t,e,n,s){j(this,"renderer");j(this,"scene",new uc);j(this,"camera",new wn(38,1,5,9e4));j(this,"controls");j(this,"atmosphere");j(this,"water");j(this,"coastalHaze");j(this,"stillPhoto");j(this,"onPhotoVisibilityChange",()=>{var t;document.hidden&&((t=this.stillPhoto)==null||t.cancel("Keep the Inverloch view visible while saving the photo."))});j(this,"hf");j(this,"life");j(this,"trees");j(this,"solid");j(this,"designedWalls",[]);j(this,"labels");j(this,"places",[]);j(this,"tide",{value:xu});j(this,"raf",0);j(this,"last",0);j(this,"time",0);j(this,"dirty",!0);j(this,"ultraStreet");j(this,"animating",!0);j(this,"disposed",!1);j(this,"abort",new AbortController);j(this,"worker");j(this,"detailStreaming");j(this,"resizeObserver");j(this,"flight");j(this,"lastCompass",NaN);j(this,"width",1);j(this,"height",1);j(this,"quality","high");j(this,"resolution");j(this,"pacing");j(this,"solarMinutes",NaN);j(this,"roadPaths",[]);j(this,"external");j(this,"meta");j(this,"shadowAim",new W);j(this,"lookDir",new W);j(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=he.degToRad(e.azimuth),r=-Math.sin(s),a=-Math.cos(s),o=Math.cos(s),l=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+a*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-a*n};break;case"ArrowLeft":c={...e,x:e.x-o*n,z:e.z-l*n};break;case"ArrowRight":c={...e,x:e.x+o*n,z:e.z+l*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=us;break;default:return}t.preventDefault(),this.fly(c,.3)});j(this,"frame",t=>{var p,M,m,g,S,_,v,E;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,document.hidden){this.pacing.reset(),this.resolution.resetSampling();return}if(this.flight){const b=this.flight;b.t=Math.min(1,b.t+e/b.duration);const x=av(b.t),y=(T,R)=>T+(R-T)*x;this.applyView({x:y(b.from.x,b.to.x),z:y(b.from.z,b.to.z),dist:Math.exp(y(Math.log(b.from.dist),Math.log(b.to.dist))),polar:y(b.from.polar,b.to.polar),azimuth:y(b.from.azimuth,b.to.azimuth)}),b.t>=1&&(this.flight=void 0)}this.controls&&!this.external&&this.controls.update()&&(this.dirty=!0);const n=(p=this.stillPhoto)!=null&&p.pending?this.stillPhoto:void 0;if(!n&&this.atmosphere.update(e)&&(this.dirty=!0),!n&&this.animating&&(this.time+=e,this.water.uniforms.uTime.value=this.time,(M=this.life)==null||M.update(e,this.time),this.dirty=!0),!n&&this.opts.assets.detail){const{x:b,y:x,z:y}=this.camera.position;(m=this.detailStreaming)==null||m.update(t/1e3,b,x,y,x-this.hf.yAt(b,y))}if(!this.dirty&&!n)return;const s=this.pacing.takeFrame(t);if(s===void 0)return;const r=this.dirty;this.dirty=!1,!n&&this.animating&&this.resolution.update(t/1e3,s,this.pacing.target)&&this.renderer.setPixelRatio(this.resolution.ratio);const a=this.camera;(g=this.ultraStreet)==null||g.update(a.position,this.atmosphere.sun.intensity);let o,l=1/0;const c=!!this.controls&&!this.external,h=this.hf.yAt(a.position.x,a.position.z);c&&(a.position.y=Math.max(a.position.y,h+12));const u=Math.max(1,a.position.y-Math.max(h,this.waterLevel));if(this.controls&&c)o=a.position.distanceTo(this.controls.target),this.shadowAim.copy(this.controls.target);else{a.getWorldDirection(this.lookDir);const b=Math.min(this.lookDir.y<-.05?u/-this.lookDir.y:1e9,40+u*3,3e3);this.shadowAim.copy(a.position).addScaledVector(this.lookDir,b),o=Math.max(b,u)*1.3,l=Math.max(350,u*10)}const f=c?he.clamp(o*.02,2,80):he.clamp(o*.012,.4,60);Math.abs(f-a.near)>a.near*.05&&(a.near=f,a.updateProjectionMatrix());const d=nv[this.quality];if((S=this.life)==null||S.updateParkedLod(a.position,u,d.cars),(_=this.trees)==null||_.updateLod(a.position,u,d.trees),this.atmosphere.aimShadow(this.shadowAim,o),n||(v=this.detailStreaming)==null||v.applyReady(),n!=null&&n.draw(this.scene,a,r)||this.renderer.render(this.scene,a),(E=this.labels)==null||E.update(a,this.width,this.height,l),c){const b=Math.round(this.currentView().azimuth);b!==this.lastCompass&&(this.lastCompass=b,this.cb.onCompass(b))}});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.external=!!s.external,this.pacing=new Ox(s.frameTarget)}async init(){var k;try{this.renderer=new $g({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D model needs.");return}const t=this.renderer;this.quality=this.pickQuality();let e=ev[this.quality];const n=(navigator.deviceMemory??8)>4;this.quality==="medium"&&n&&!this.opts.quality&&(e={...e,pixelRatio:2,trees:.8}),this.resolution=new F_(Math.min(window.devicePixelRatio||1,e.pixelRatio),this.quality==="low"?.6:1),t.setPixelRatio(this.resolution.ratio),t.outputColorSpace=Te,t.toneMapping=ga,t.shadowMap.enabled=e.shadow>0,t.shadowMap.type=ds;const s=t.domElement;this.opts.external?(s.setAttribute("role","img"),s.setAttribute("aria-label","3D model of Inverloch")):(s.tabIndex=0,s.setAttribute("role","application"),s.setAttribute("aria-label","3D model of Inverloch. Drag to pan, right-drag to rotate, scroll to zoom. Arrow keys pan, plus and minus zoom, Q and E rotate.")),s.style.display="block",s.style.outlineOffset="-3px",this.container.appendChild(s),s.addEventListener("webglcontextlost",D=>{var L;D.preventDefault(),(L=this.stillPhoto)==null||L.cancel("The browser lost the graphics context during the photo."),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this model was using.")});const r=this.worker=new __;let a;try{a=await yx(this.opts.assets,e.step,(D,L)=>this.cb.onProgress(D*.6,L),r,this.abort.signal)}catch(D){r.close(),this.disposed||this.cb.onError(D instanceof Error?D.message:"The model data could not be loaded.");return}if(this.disposed){a.ground.dispose();return}const{town:o,heights:l,exposure:c,surface:h,terrainTiles:u,ground:f}=a;this.meta=o.meta,this.quality==="ultra"&&this.opts.external&&((k=this.opts.clearPolygons)!=null&&k.length)&&this.opts.assets.detail&&(this.ultraStreet=new tv(this.scene,this.opts.assets.detail,this.fromLatLon.bind(this),(D,L)=>this.hf.yAt(D,L),()=>{this.dirty=!0}));const d=[...this.opts.clear??[],...(this.opts.clearLatLon??[]).map(D=>{const[L,Z]=this.fromLatLon(D.lat,D.lon);return{x:L,z:Z,r:D.r}})],p=(this.opts.clearPolygons??[]).map(D=>({pts:D.latLon.map(([L,Z])=>this.fromLatLon(L,Z)),roads:!!D.roads})),M=(D,L,Z)=>p.some(Y=>(!Z||Y.roads)&&rv(Y.pts,D,L)),m=(D,L)=>d.some(Z=>(D-Z.x)**2+(L-Z.z)**2<Z.r*Z.r)||M(D,L,!1),g=(this.opts.detailLatLon??[]).map(D=>{const[L,Z]=this.fromLatLon(D.lat,D.lon);return{x:L,z:Z,r:D.r}}),S=(D,L)=>g.some(Z=>(D-Z.x)**2+(L-Z.z)**2<Z.r*Z.r);f.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());const _=async(D,L)=>{this.cb.onProgress(D,L),await iv()};if(await _(.62,"Shaping the terrain"),this.disposed){f.dispose();return}const v=this.hf=new Ih(l,c,o.meta.grid[0],o.meta.grid[1],o.meta.size[0],o.meta.size[1],e.step,h),E=z_();this.scene.add(G_(v,u,f,this.tide,E));const b=navigator.deviceMemory??8;this.detailStreaming=new qx(this.opts.assets,this.quality==="low"||b<=4,E,f.anisotropy,r,()=>{this.dirty=!0}),this.water=J_(v,this.tide),this.scene.add(this.water.skirt,this.water.mesh),await _(.7,"Laying out the streets");const x=N_(o,v,p.some(D=>D.roads)?(D,L)=>M(D,L,!0):void 0);this.scene.add(x.group),this.roadPaths=x.paths,await _(.78,"Raising the buildings");const y=Fx(o,v,x.index,Jx,m);this.scene.add(y.group),await _(.86,"Planting trees");const T=this.trees=Z_(o,v,e.trees,(D,L)=>m(D,L)||Ex(D,L));this.scene.add(T.group),await _(.92,"Adding landmarks");const R={town:o,hf:v,footprints:y.footprints,roads:x.index,paths:x.paths,isClear:m,isDetail:S,hasDetail:g.length>0},C=f_(R);this.scene.add(C.group),this.solid=new Map,this.designedWalls=y.designedWalls;for(const D of[...y.footprints.map(L=>L.poly),...this.designedWalls]){if(D.length<6)continue;let L=1/0,Z=-1/0,Y=1/0,U=-1/0;for(let O=0;O<D.length;O+=2)L=Math.min(L,D[O]),Z=Math.max(Z,D[O]),Y=Math.min(Y,D[O+1]),U=Math.max(U,D[O+1]);for(let O=Math.floor(L/16);O<=Math.floor(Z/16);O++)for(let z=Math.floor(Y/16);z<=Math.floor(U/16);z++){const X=`${O}_${z}`,F=this.solid.get(X);F?F.push(D):this.solid.set(X,[D])}}if(this.life=new w_(R,C,this.quality==="ultra"),this.life.setTide(this.tide.value*Bn),this.scene.add(this.life.group),this.disposed)return;this.atmosphere=new px(t,this.water,e.shadow),this.places=$x(o.meta,v);const N=this.places.find(D=>D.id==="inlet"),B=this.coastalHaze=new m_(N.x,N.z,this.atmosphere.horizon,this.quality==="ultra"&&this.opts.coastalMist!==!1);B.setWaterLevel(this.waterLevel),B.addWater(this.water.mesh),B.add(this.scene),this.scene.addEventListener("childadded",D=>B.add(D.child)),this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.labels=new Zx(this.labelLayer,this.places,D=>this.flyToPlace(D)),this.external||this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const P=window.matchMedia("(prefers-reduced-motion: reduce)").matches;P&&(this.animating=!1),this.external?this.setExternalCamera(300,900,2600,0,-.42):P?this.applyView(us):(this.applyView({...us,dist:9500,polar:24,azimuth:-20}),this.fly(us,3.4)),this.cb.onProgress(1,"Ready"),this.cb.onReady({quality:this.quality,houses:o.counts.houses,mappedBuildings:o.counts.buildings,trees:T.count,roadPieces:o.counts.roads,sources:o.meta.sources,places:this.places}),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)}get isAnimating(){return this.animating}setAnimating(t){var e;t!==this.animating&&((e=this.resolution)==null||e.resetSampling()),this.animating=t,this.dirty=!0}setFrameTarget(t){var e;this.pacing.setTarget(t)&&((e=this.resolution)==null||e.resetSampling())}setExternalCamera(t,e,n,s,r){if(!this.external)return;const a=this.camera.position,o=this.camera.rotation,l=a.x===t&&a.y===e&&a.z===n,c=o.order==="YXZ"&&o.x===r&&o.y===s&&o.z===0;l&&c||(this.camera.position.set(t,e,n),this.camera.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}setExternal(t){if(!(t===this.external||!this.hf)){if(this.external=t,t)this.flight=void 0,this.controls&&(this.controls.enabled=!1);else{this.controls||this.setupControls(),this.controls.enabled=!0;const e=this.camera;e.getWorldDirection(this.lookDir);const n=Math.max(1,e.position.y),s=this.lookDir.y<-.05?Math.min(n/-this.lookDir.y,6e3):900,r=this.controls.target.copy(e.position).addScaledVector(this.lookDir,s);r.x=he.clamp(r.x,this.hf.xMin,this.hf.xMax),r.z=he.clamp(r.z,this.hf.zMin,this.hf.zMax),r.y=0,this.controls.update(),this.fly(us,1.6)}this.resize()}}getCamera(){const t=new Sn().setFromQuaternion(this.camera.quaternion,"YXZ"),e=this.camera.position;return{x:e.x,y:e.y,z:e.z,yaw:t.y,pitch:t.x}}fromLatLon(t,e){const n=this.meta;return n?[(e-n.origin[0])*n.metresPerDegree[0],-(t-n.origin[1])*n.metresPerDegree[1]]:[0,0]}addParts(t){const e=new Je;e.name="guest";const n=t.map(s=>{const r=s.onGround?{...s,...sv(this.hf,s),indices:void 0}:s,a=new Re,o=(d,p)=>new Ae(d instanceof Float32Array?d:Float32Array.from(d),p);a.setAttribute("position",o(r.positions,3)),r.colors&&a.setAttribute("color",o(r.colors,3)),r.uvs&&a.setAttribute("uv",o(r.uvs,2)),r.indices&&a.setIndex(Array.from(r.indices)),r.normals?a.setAttribute("normal",o(r.normals,3)):a.computeVertexNormals();let l=null;r.map&&(l=new ve(r.map),l.colorSpace=Te,l.wrapS=l.wrapT=qs,r.mapRepeat&&l.repeat.set(r.mapRepeat[0],r.mapRepeat[1]),l.anisotropy=4,l.needsUpdate=!0);const c=r.opacity??1,h={color:new Rt().setRGB(...r.color??[1,1,1]),map:l,vertexColors:!!r.colors,transparent:c<1,opacity:c,side:r.doubleSide?Ie:ii},u=r.unlit?new Nn(h):new $n({...h,roughness:r.roughness??.9,metalness:r.metalness??0,emissive:new Rt().setRGB(...r.emissive??[0,0,0]),emissiveIntensity:r.emissiveIntensity??1,emissiveMap:r.glowMap?l:null,flatShading:!!r.flatShading}),f=new Yt(a,u);return f.matrixAutoUpdate=!1,r.onGround||f.matrix.fromArray(Array.from(r.matrix)),f.userData.fixed=!!r.onGround,f.castShadow=c>=1,f.receiveShadow=!0,e.add(f),f});return this.scene.add(e),this.dirty=!0,{setMatrix:(s,r)=>{const a=n[s];!a||a.userData.fixed||(a.matrix.fromArray(Array.from(r)),a.matrixWorldNeedsUpdate=!0,this.dirty=!0)},setEmissive:(s,r,a,o,l)=>{var h;const c=(h=n[s])==null?void 0:h.material;c instanceof $n&&(c.emissive.setRGB(r,a,o),c.emissiveIntensity=l,this.dirty=!0)},remove:()=>{var s;this.scene.remove(e);for(const r of n){r.geometry.dispose();const a=r.material;(s=a.map)==null||s.dispose(),a.dispose()}this.dirty=!0}}}addTrafficCar(t,e,n,s,r){if(!this.life)throw new Error("Wait for the Inverloch model before adding traffic");const{mesh:a,scale:o}=this.life.makeTrafficCar(t,e,n,s,r);let l;return{setMatrix:(c,h)=>{c===0&&(a.matrix.fromArray(h),a.matrix.elements[13]+=Kh,a.matrixWorldNeedsUpdate=!0,a.visible=!!(h[0]||h[1]||h[2]),this.dirty=!0)},setSignal:c=>{!l&&c&&(l=eu(t),l.scale.copy(o),a.add(l)),l&&(nu(l,c),this.dirty=!0)},remove:()=>{a.removeFromParent(),a.geometry.dispose(),l==null||l.geometry.dispose(),l==null||l.material.dispose(),this.dirty=!0}}}addPad(t){const e=t.radius??t.halfWidth??5,n=t.radius??t.halfDepth??5,s=t.heading??0,r=Math.cos(s),a=Math.sin(s);let o=1/0,l=-1/0;for(const[d,p]of[[0,0],[-e,-n],[e,-n],[e,n],[-e,n],[0,-n],[0,n],[-e,0],[e,0]]){const M=this.hf.yAt(t.x+d*r+p*a,t.z-d*a+p*r);o=Math.min(o,M),l=Math.max(l,M)}const c=l+(t.lift??.25),h=c-o+1,u=t.radius?new Do(t.radius,t.radius,h,24):new Ti(e*2,h,n*2),f=new Yt(u,new $n({color:new Rt().setRGB(...t.color),roughness:1}));return f.position.set(t.x,c-h/2,t.z),f.rotation.y=s,f.receiveShadow=!0,f.name="guest-pad",this.scene.add(f),this.dirty=!0,c}setSolarMinutes(t){!this.atmosphere||t===this.solarMinutes||(this.solarMinutes=t,this.atmosphere.setSolar(t),this.dirty=!0)}roadSpot(t){const e=t.trim().toLowerCase();let n=null;for(const p of this.roadPaths)p.name.toLowerCase()===e&&(!n||p.length>n.length)&&(n=p);if(!n)return null;const s=n.pts.length/3,r=0,a=s-1,o=s>>1;let l=n.pts[a*3]-n.pts[r*3],c=n.pts[a*3+2]-n.pts[r*3+2];const h=Math.hypot(l,c)||1;l/=h,c/=h;const u=Math.min(70,h*.5),f=n.pts[o*3]-l*u,d=n.pts[o*3+2]-c*u;return{x:f,y:this.hf.yAt(f,d)+38,z:d,yaw:Math.atan2(-l,-c),pitch:-.42}}groundAt(t,e){return this.hf?this.hf.yAt(t,e):0}nearestCar(t,e,n){var s;return((s=this.life)==null?void 0:s.nearestCar(t,e,n))??null}addCars(t){var e;(e=this.life)==null||e.addCars(t),this.dirty=!0}driveCar(t,e,n,s,r,a,o=0,l=0,c=0){var u;const h=((u=this.life)==null?void 0:u.driveCar(t,e,n,s,r,a,o,l,c))??!1;return this.dirty=!0,h}designedWallFootprints(){return this.designedWalls.map(t=>t.slice())}solidAt(t,e){var s;const n=(s=this.solid)==null?void 0:s.get(`${Math.floor(t/16)}_${Math.floor(e/16)}`);if(!n)return!1;for(const r of n){let a=!1;for(let o=0,l=r.length/2-1;o<r.length/2;l=o++){const c=r[o*2],h=r[o*2+1],u=r[l*2],f=r[l*2+1];h>e!=f>e&&t<(u-c)*(e-h)/(f-h)+c&&(a=!a)}if(a)return!0}return!1}get waterLevel(){return this.tide.value*Bn}get bounds(){return this.hf?[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]:[-4e3,4e3,-3440,3440]}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}setTide(t){var e,n;this.water&&(this.water.setTide(he.clamp(t,mu,gu)),(e=this.life)==null||e.setTide(this.tide.value*Bn),(n=this.coastalHaze)==null||n.setWaterLevel(this.waterLevel),this.dirty=!0)}captureStill(){return this.disposed||!this.atmosphere||this.quality!=="ultra"?Promise.reject(new Error("Antialiased photos are available after the Ultra view loads.")):document.hidden?Promise.reject(new Error("Open the Inverloch view to save a photo.")):(this.stillPhoto||(this.stillPhoto=new Y_(this.renderer,()=>{this.dirty=!0,this.resolution.resetSampling()}),document.addEventListener("visibilitychange",this.onPhotoVisibilityChange)),this.resolution.resetSampling(),this.stillPhoto.start())}setCoastalMist(t){var e;this.opts.coastalMist=t,(e=this.coastalHaze)==null||e.setMist(this.quality==="ultra"&&t),this.dirty=!0}setLabelsVisible(t){var e;(e=this.labels)==null||e.setVisible(t),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.2)}resetView(){this.fly(us,1.8)}setView(t,e,n,s,r,a=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},a)}faceNorth(){const t=this.currentView();this.fly({...t,azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:he.clamp(e.dist*t,this.controls.minDistance,this.controls.maxDistance)},.35)}dispose(){var t,e,n,s,r,a,o;this.disposed=!0,this.abort.abort(),(t=this.ultraStreet)==null||t.dispose(),(e=this.detailStreaming)==null||e.dispose(),(n=this.worker)==null||n.close(),cancelAnimationFrame(this.raf),(s=this.resizeObserver)==null||s.disconnect(),(r=this.labels)==null||r.dispose(),(a=this.stillPhoto)==null||a.dispose(),document.removeEventListener("visibilitychange",this.onPhotoVisibilityChange),(o=this.controls)==null||o.dispose(),this.renderer&&(this.renderer.domElement.removeEventListener("keydown",this.onKey),this.scene.traverse(l=>{var u,f;const c=l;(f=(u=c.geometry)==null?void 0:u.dispose)==null||f.call(u);const h=Array.isArray(c.material)?c.material:c.material?[c.material]:[];for(const d of h){for(const p of Object.values(d))p instanceof ve&&p.dispose();d.dispose()}}),this.renderer.dispose(),this.renderer.domElement.remove())}pickQuality(){if(this.opts.quality)return this.opts.quality;const t=new URLSearchParams(window.location.search).get("quality");if(t==="ultra"||t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new ux(this.camera,this.renderer.domElement);t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=70,t.maxDistance=12e3,t.maxPolarAngle=he.degToRad(84),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const e=t.target,n=this.hf;e.x=he.clamp(e.x,n.xMin,n.xMax),e.z=he.clamp(e.z,n.zMin,n.zMax),e.y=0,this.dirty=!0}),this.renderer.domElement.addEventListener("keydown",this.onKey)}clampView(t){var e,n;return{x:he.clamp(t.x,this.hf.xMin,this.hf.xMax),z:he.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:he.clamp(t.dist,((e=this.controls)==null?void 0:e.minDistance)??70,((n=this.controls)==null?void 0:n.maxDistance)??12e3),polar:he.clamp(t.polar,2,84),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=this.camera.position.clone().sub(t),n=new Ur().setFromVector3(e);return{x:t.x,z:t.z,dist:n.radius,polar:he.radToDeg(n.phi),azimuth:he.radToDeg(n.theta)}}applyView(t){const e=new Ur(t.dist,he.degToRad(t.polar),he.degToRad(t.azimuth)),n=this.controls.target.set(t.x,0,t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(!this.controls||this.external)return;if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.fov=this.external?60:t/e<.8?52:38,this.camera.updateProjectionMatrix(),this.dirty=!0}}const gl="Map data © OpenStreetMap contributors · Elevation © Geoscience Australia (CC BY 4.0)",lv=`
.inv-embed, .inv-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the model but never take a touch: drags and pinches must reach the canvas underneath */
.inv-embed-labels, .inv-embed .inv-label { pointer-events: none; }
.inv-embed-credit { position: absolute; left: 50%; bottom: var(--inv-credit-bottom, 6px); transform: translateX(-50%); margin: 0; max-width: calc(100% - 24px);
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; pointer-events: none; }
`,cv=["low","medium","high","ultra"];function hv(i,t){if(!document.querySelector("style[data-inverloch-model]")){const f=document.createElement("style");f.setAttribute("data-inverloch-model",""),f.textContent=Gn+lv,document.head.appendChild(f)}const e=document.createElement("div");e.className="inv-embed";const n=document.createElement("div");n.className="inv-embed-layer";const s=document.createElement("div");s.className="inv-embed-layer inv-embed-labels";const r=document.createElement("p");r.className="inv-embed-credit",r.textContent=gl,e.append(n,s,r),i.appendChild(e);const a=typeof t.assets=="string"?{height:t.assets+"height.png",ground:t.assets+(typeof window<"u"&&window.anSmallGround?"ground-2k.webp":"ground.webp"),town:t.assets+"town.json",detail:t.assets+"detail.json"}:t.assets;let o=[],l=!1,c;const h=new Promise((f,d)=>c={ok:f,fail:d}),u=new ov(n,s,{onProgress:(f,d)=>{var p;return(p=t.onProgress)==null?void 0:p.call(t,f,d)},onReady:f=>{o=f.places.map(d=>{const p=Math.min(Math.max(d.view[0]*.55,90),1500),M=d.view[1]*Math.PI/180,m=d.view[2]*Math.PI/180,g=d.x+p*Math.sin(M)*Math.sin(m),S=d.z+p*Math.sin(M)*Math.cos(m),_=Math.max(u.groundAt(g,S),u.waterLevel)+Math.max(p*Math.cos(M),20),v=d.x-g,E=d.y-10-_,b=d.z-S;return{id:d.id,name:d.name,kind:d.kind,x:g,y:_,z:S,yaw:Math.atan2(-v,-b),pitch:Math.atan2(E,Math.hypot(v,b)),tx:d.x,tz:d.z}}),t.labels===!1&&u.setLabelsVisible(!1),l=!0,c.ok()},onError:f=>{var d;return l?(d=t.onError)==null?void 0:d.call(t,f):c.fail(new Error(f))},onCompass:()=>{}},{assets:a,external:!0,quality:t.quality,frameTarget:t.frameTarget,coastalMist:t.coastalMist,clear:t.clear,clearLatLon:t.clearLatLon,clearPolygons:t.clearPolygons,detailLatLon:t.detailLatLon});return u.init(),{ready:h,setCamera:(f,d,p,M,m)=>u.setExternalCamera(f,d,p,M,m),setMinutes:f=>u.setSolarMinutes(f),setTide:f=>u.setTide(f),setAnimating:f=>u.setAnimating(f),setFrameTarget:f=>u.setFrameTarget(f),captureStill:()=>u.captureStill(),setCoastalMist:f=>u.setCoastalMist(f),setLabelsVisible:f=>u.setLabelsVisible(f),groundAt:(f,d)=>u.groundAt(f,d),waterLevel:()=>u.waterLevel,bounds:()=>u.bounds,fromLatLon:(f,d)=>u.fromLatLon(f,d),setMode:f=>u.setExternal(f!=="bird"),getCamera:()=>u.getCamera(),flyToPlace:f=>u.flyToPlace(f),lookAt:(f,d,p,M,m)=>u.setView(f,d,p,M,m),addParts:f=>u.addParts(f),addTrafficCar:(f,d,p,M,m)=>u.addTrafficCar(f,d,p,M,m),addPad:f=>u.addPad(f),spots:()=>o,nearestCar:(f,d,p)=>u.nearestCar(f,d,p),driveCar:(f,d,p,M,m,g,S,_,v)=>u.driveCar(f,d,p,M,m,g,S,_,v),solidAt:(f,d)=>u.solidAt(f,d),designedWallFootprints:()=>u.designedWallFootprints(),addCars:f=>u.addCars(f),roadSpot:f=>{const d=u.roadSpot(f);return d?{id:"road:"+f,name:f,kind:"landmark",...d,tx:d.x-Math.sin(d.yaw)*70,tz:d.z-Math.cos(d.yaw)*70}:null},tide:{min:mu,max:gu,initial:xu},credit:gl,dispose:()=>{u.dispose(),e.remove()}}}return mn.CREDIT=gl,mn.create=hv,mn.qualityPresets=cv,Object.defineProperty(mn,Symbol.toStringTag,{value:"Module"}),mn}({});

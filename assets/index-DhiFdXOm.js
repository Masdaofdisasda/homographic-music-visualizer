(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const La="169",dd=0,gl=1,hd=2,wc=1,fd=2,Vn=3,di=0,nn=1,Un=2,Xn=0,Qi=1,No=2,_l=3,vl=4,pd=5,Ti=100,md=101,gd=102,_d=103,vd=104,xd=200,yd=201,Sd=202,Md=203,Oo=204,Fo=205,bd=206,Ed=207,Td=208,wd=209,Ad=210,Cd=211,Rd=212,Pd=213,Dd=214,Bo=0,zo=1,ko=2,nr=3,Ho=4,Vo=5,Go=6,Wo=7,Ac=0,Ld=1,Id=2,ui=0,Ud=1,Nd=2,Od=3,Cc=4,Fd=5,Bd=6,zd=7,Rc=300,ir=301,rr=302,Xo=303,qo=304,Bs=306,Yo=1e3,Ci=1001,jo=1002,pn=1003,kd=1004,Kr=1005,yn=1006,eo=1007,Ri=1008,jn=1009,Pc=1010,Dc=1011,Pr=1012,Ia=1013,Pi=1014,Gn=1015,qn=1016,Ua=1017,Na=1018,sr=1020,Lc=35902,Ic=1021,Uc=1022,Mn=1023,Nc=1024,Oc=1025,er=1026,or=1027,Fc=1028,Oa=1029,Bc=1030,Fa=1031,Ba=1033,ys=33776,Ss=33777,Ms=33778,bs=33779,Ko=35840,$o=35841,Zo=35842,Jo=35843,Qo=36196,ea=37492,ta=37496,na=37808,ia=37809,ra=37810,sa=37811,oa=37812,aa=37813,la=37814,ca=37815,ua=37816,da=37817,ha=37818,fa=37819,pa=37820,ma=37821,Es=36492,ga=36494,_a=36495,zc=36283,va=36284,xa=36285,ya=36286,Hd=3200,Vd=3201,Gd=0,Wd=1,ci="",Ln="srgb",fi="srgb-linear",za="display-p3",zs="display-p3-linear",Cs="linear",wt="srgb",Rs="rec709",Ps="p3",Ni=7680,xl=519,Xd=512,qd=513,Yd=514,kc=515,jd=516,Kd=517,$d=518,Zd=519,yl=35044,Sl="300 es",Wn=2e3,Ds=2001;class cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,c=r.length;s<c;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],to=Math.PI/180,Sa=180/Math.PI;function Ur(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function en(i,e,t){return Math.max(e,Math.min(t,i))}function Jd(i,e){return(i%e+e)%e}function no(i,e,t){return(1-t)*i+t*e}function vr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,c=this.y-e.y;return this.x=s*n-c*r+e.x,this.y=s*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,n,r,s,c,u,h,p){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,c,u,h,p)}set(e,t,n,r,s,c,u,h,p){const m=this.elements;return m[0]=e,m[1]=r,m[2]=u,m[3]=t,m[4]=s,m[5]=h,m[6]=n,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,c=n[0],u=n[3],h=n[6],p=n[1],m=n[4],g=n[7],x=n[2],S=n[5],w=n[8],R=r[0],_=r[3],v=r[6],O=r[1],I=r[4],N=r[7],$=r[2],V=r[5],A=r[8];return s[0]=c*R+u*O+h*$,s[3]=c*_+u*I+h*V,s[6]=c*v+u*N+h*A,s[1]=p*R+m*O+g*$,s[4]=p*_+m*I+g*V,s[7]=p*v+m*N+g*A,s[2]=x*R+S*O+w*$,s[5]=x*_+S*I+w*V,s[8]=x*v+S*N+w*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],u=e[5],h=e[6],p=e[7],m=e[8];return t*c*m-t*u*p-n*s*m+n*u*h+r*s*p-r*c*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],u=e[5],h=e[6],p=e[7],m=e[8],g=m*c-u*p,x=u*h-m*s,S=p*s-c*h,w=t*g+n*x+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=g*R,e[1]=(r*p-m*n)*R,e[2]=(u*n-r*c)*R,e[3]=x*R,e[4]=(m*t-r*h)*R,e[5]=(r*s-u*t)*R,e[6]=S*R,e[7]=(n*h-p*t)*R,e[8]=(c*t-n*s)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,c,u){const h=Math.cos(s),p=Math.sin(s);return this.set(n*h,n*p,-n*(h*c+p*u)+c+e,-r*p,r*h,-r*(-p*c+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(io.makeScale(e,t)),this}rotate(e){return this.premultiply(io.makeRotation(-e)),this}translate(e,t){return this.premultiply(io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const io=new rt;function Hc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qd(){const i=Ls("canvas");return i.style.display="block",i}const Ml={};function Ts(i){i in Ml||(Ml[i]=!0,console.warn(i))}function eh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function th(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function nh(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bl=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),El=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xr={[fi]:{transfer:Cs,primaries:Rs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ln]:{transfer:wt,primaries:Rs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[zs]:{transfer:Cs,primaries:Ps,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(El),fromReference:i=>i.applyMatrix3(bl)},[za]:{transfer:wt,primaries:Ps,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(El),fromReference:i=>i.applyMatrix3(bl).convertLinearToSRGB()}},ih=new Set([fi,zs]),St={enabled:!0,_workingColorSpace:fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ih.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=xr[e].toReference,r=xr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return xr[i].primaries},getTransfer:function(i){return i===ci?Cs:xr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(xr[e].luminanceCoefficients)}};function tr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ro(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Oi;class rh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Oi===void 0&&(Oi=Ls("canvas")),Oi.width=e.width,Oi.height=e.height;const n=Oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let c=0;c<s.length;c++)s[c]=tr(s[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(tr(t[n]/255)*255):t[n]=tr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sh=0;class Vc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Ur(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let c=0,u=r.length;c<u;c++)r[c].isDataTexture?s.push(so(r[c].image)):s.push(so(r[c]))}else s=so(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function so(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oh=0;class rn extends cr{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=Ci,r=Ci,s=yn,c=Ri,u=Mn,h=jn,p=rn.DEFAULT_ANISOTROPY,m=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=Ur(),this.name="",this.source=new Vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=c,this.anisotropy=p,this.format=u,this.internalFormat=null,this.type=h,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yo:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yo:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Rc;rn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,n=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*s,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*s,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*s,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const h=e.elements,p=h[0],m=h[4],g=h[8],x=h[1],S=h[5],w=h[9],R=h[2],_=h[6],v=h[10];if(Math.abs(m-x)<.01&&Math.abs(g-R)<.01&&Math.abs(w-_)<.01){if(Math.abs(m+x)<.1&&Math.abs(g+R)<.1&&Math.abs(w+_)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(p+1)/2,N=(S+1)/2,$=(v+1)/2,V=(m+x)/4,A=(g+R)/4,K=(w+_)/4;return I>N&&I>$?I<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(I),r=V/n,s=A/n):N>$?N<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(N),n=V/r,s=K/r):$<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt($),n=A/s,r=K/s),this.set(n,r,s,t),this}let O=Math.sqrt((_-w)*(_-w)+(g-R)*(g-R)+(x-m)*(x-m));return Math.abs(O)<.001&&(O=1),this.x=(_-w)/O,this.y=(g-R)/O,this.z=(x-m)/O,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ah extends cr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new rn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let u=0;u<c;u++)this.textures[u]=s.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends ah{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gc extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lh extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,c,u){let h=n[r+0],p=n[r+1],m=n[r+2],g=n[r+3];const x=s[c+0],S=s[c+1],w=s[c+2],R=s[c+3];if(u===0){e[t+0]=h,e[t+1]=p,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=x,e[t+1]=S,e[t+2]=w,e[t+3]=R;return}if(g!==R||h!==x||p!==S||m!==w){let _=1-u;const v=h*x+p*S+m*w+g*R,O=v>=0?1:-1,I=1-v*v;if(I>Number.EPSILON){const $=Math.sqrt(I),V=Math.atan2($,v*O);_=Math.sin(_*V)/$,u=Math.sin(u*V)/$}const N=u*O;if(h=h*_+x*N,p=p*_+S*N,m=m*_+w*N,g=g*_+R*N,_===1-u){const $=1/Math.sqrt(h*h+p*p+m*m+g*g);h*=$,p*=$,m*=$,g*=$}}e[t]=h,e[t+1]=p,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,s,c){const u=n[r],h=n[r+1],p=n[r+2],m=n[r+3],g=s[c],x=s[c+1],S=s[c+2],w=s[c+3];return e[t]=u*w+m*g+h*S-p*x,e[t+1]=h*w+m*x+p*g-u*S,e[t+2]=p*w+m*S+u*x-h*g,e[t+3]=m*w-u*g-h*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,c=e._order,u=Math.cos,h=Math.sin,p=u(n/2),m=u(r/2),g=u(s/2),x=h(n/2),S=h(r/2),w=h(s/2);switch(c){case"XYZ":this._x=x*m*g+p*S*w,this._y=p*S*g-x*m*w,this._z=p*m*w+x*S*g,this._w=p*m*g-x*S*w;break;case"YXZ":this._x=x*m*g+p*S*w,this._y=p*S*g-x*m*w,this._z=p*m*w-x*S*g,this._w=p*m*g+x*S*w;break;case"ZXY":this._x=x*m*g-p*S*w,this._y=p*S*g+x*m*w,this._z=p*m*w+x*S*g,this._w=p*m*g-x*S*w;break;case"ZYX":this._x=x*m*g-p*S*w,this._y=p*S*g+x*m*w,this._z=p*m*w-x*S*g,this._w=p*m*g+x*S*w;break;case"YZX":this._x=x*m*g+p*S*w,this._y=p*S*g+x*m*w,this._z=p*m*w-x*S*g,this._w=p*m*g-x*S*w;break;case"XZY":this._x=x*m*g-p*S*w,this._y=p*S*g-x*m*w,this._z=p*m*w+x*S*g,this._w=p*m*g+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],c=t[1],u=t[5],h=t[9],p=t[2],m=t[6],g=t[10],x=n+u+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(m-h)*S,this._y=(s-p)*S,this._z=(c-r)*S}else if(n>u&&n>g){const S=2*Math.sqrt(1+n-u-g);this._w=(m-h)/S,this._x=.25*S,this._y=(r+c)/S,this._z=(s+p)/S}else if(u>g){const S=2*Math.sqrt(1+u-n-g);this._w=(s-p)/S,this._x=(r+c)/S,this._y=.25*S,this._z=(h+m)/S}else{const S=2*Math.sqrt(1+g-n-u);this._w=(c-r)/S,this._x=(s+p)/S,this._y=(h+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,c=e._w,u=t._x,h=t._y,p=t._z,m=t._w;return this._x=n*m+c*u+r*p-s*h,this._y=r*m+c*h+s*u-n*p,this._z=s*m+c*p+n*h-r*u,this._w=c*m-n*u-r*h-s*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,c=this._w;let u=c*e._w+n*e._x+r*e._y+s*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=n,this._y=r,this._z=s,this;const h=1-u*u;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*n+t*this._x,this._y=S*r+t*this._y,this._z=S*s+t*this._z,this.normalize(),this}const p=Math.sqrt(h),m=Math.atan2(p,u),g=Math.sin((1-t)*m)/p,x=Math.sin(t*m)/p;return this._w=c*g+this._w*x,this._x=n*g+this._x*x,this._y=r*g+this._y*x,this._z=s*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,c=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*c,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*c,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,c=e.y,u=e.z,h=e.w,p=2*(c*r-u*n),m=2*(u*t-s*r),g=2*(s*n-c*t);return this.x=t+h*p+c*g-u*m,this.y=n+h*m+u*p-s*g,this.z=r+h*g+s*m-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,c=t.x,u=t.y,h=t.z;return this.x=r*h-s*u,this.y=s*c-n*h,this.z=n*u-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oo.copy(this).projectOnVector(e),this.sub(oo)}reflect(e){return this.sub(oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new j,Tl=new Nr;class Or{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=s.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,_n):_n.fromBufferAttribute(s,c),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const r=e.children;for(let s=0,c=r.length;s<c;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),Zr.subVectors(this.max,yr),Fi.subVectors(e.a,yr),Bi.subVectors(e.b,yr),zi.subVectors(e.c,yr),ni.subVectors(Bi,Fi),ii.subVectors(zi,Bi),_i.subVectors(Fi,zi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-_i.z,_i.y,ni.z,0,-ni.x,ii.z,0,-ii.x,_i.z,0,-_i.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-_i.y,_i.x,0];return!ao(t,Fi,Bi,zi,Zr)||(t=[1,0,0,0,1,0,0,0,1],!ao(t,Fi,Bi,zi,Zr))?!1:(Jr.crossVectors(ni,ii),t=[Jr.x,Jr.y,Jr.z],ao(t,Fi,Bi,zi,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new j,new j,new j,new j,new j,new j,new j,new j],_n=new j,$r=new Or,Fi=new j,Bi=new j,zi=new j,ni=new j,ii=new j,_i=new j,yr=new j,Zr=new j,Jr=new j,vi=new j;function ao(i,e,t,n,r){for(let s=0,c=i.length-3;s<=c;s+=3){vi.fromArray(i,s);const u=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),h=e.dot(vi),p=t.dot(vi),m=n.dot(vi);if(Math.max(-Math.max(h,p,m),Math.min(h,p,m))>u)return!1}return!0}const ch=new Or,Sr=new j,lo=new j;class ka{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ch.setFromPoints(e).getCenter(n);let r=0;for(let s=0,c=e.length;s<c;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Sr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(lo)),this.expandByPoint(Sr.copy(e.center).sub(lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new j,co=new j,Qr=new j,ri=new j,uo=new j,es=new j,ho=new j;class uh{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){co.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(co);const s=e.distanceTo(t)*.5,c=-this.direction.dot(Qr),u=ri.dot(this.direction),h=-ri.dot(Qr),p=ri.lengthSq(),m=Math.abs(1-c*c);let g,x,S,w;if(m>0)if(g=c*h-u,x=c*u-h,w=s*m,g>=0)if(x>=-w)if(x<=w){const R=1/m;g*=R,x*=R,S=g*(g+c*x+2*u)+x*(c*g+x+2*h)+p}else x=s,g=Math.max(0,-(c*x+u)),S=-g*g+x*(x+2*h)+p;else x=-s,g=Math.max(0,-(c*x+u)),S=-g*g+x*(x+2*h)+p;else x<=-w?(g=Math.max(0,-(-c*s+u)),x=g>0?-s:Math.min(Math.max(-s,-h),s),S=-g*g+x*(x+2*h)+p):x<=w?(g=0,x=Math.min(Math.max(-s,-h),s),S=x*(x+2*h)+p):(g=Math.max(0,-(c*s+u)),x=g>0?s:Math.min(Math.max(-s,-h),s),S=-g*g+x*(x+2*h)+p);else x=c>0?-s:s,g=Math.max(0,-(c*x+u)),S=-g*g+x*(x+2*h)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(co).addScaledVector(Qr,x),S}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),r=Bn.dot(Bn)-n*n,s=e.radius*e.radius;if(r>s)return null;const c=Math.sqrt(s-r),u=n-c,h=n+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,c,u,h;const p=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(n=(e.min.x-x.x)*p,r=(e.max.x-x.x)*p):(n=(e.max.x-x.x)*p,r=(e.min.x-x.x)*p),m>=0?(s=(e.min.y-x.y)*m,c=(e.max.y-x.y)*m):(s=(e.max.y-x.y)*m,c=(e.min.y-x.y)*m),n>c||s>r||((s>n||isNaN(n))&&(n=s),(c<r||isNaN(r))&&(r=c),g>=0?(u=(e.min.z-x.z)*g,h=(e.max.z-x.z)*g):(u=(e.max.z-x.z)*g,h=(e.min.z-x.z)*g),n>h||u>r)||((u>n||n!==n)&&(n=u),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,r,s){uo.subVectors(t,e),es.subVectors(n,e),ho.crossVectors(uo,es);let c=this.direction.dot(ho),u;if(c>0){if(r)return null;u=1}else if(c<0)u=-1,c=-c;else return null;ri.subVectors(this.origin,e);const h=u*this.direction.dot(es.crossVectors(ri,es));if(h<0)return null;const p=u*this.direction.dot(uo.cross(ri));if(p<0||h+p>c)return null;const m=-u*ri.dot(ho);return m<0?null:this.at(m/c,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,n,r,s,c,u,h,p,m,g,x,S,w,R,_){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,c,u,h,p,m,g,x,S,w,R,_)}set(e,t,n,r,s,c,u,h,p,m,g,x,S,w,R,_){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=s,v[5]=c,v[9]=u,v[13]=h,v[2]=p,v[6]=m,v[10]=g,v[14]=x,v[3]=S,v[7]=w,v[11]=R,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ki.setFromMatrixColumn(e,0).length(),s=1/ki.setFromMatrixColumn(e,1).length(),c=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,c=Math.cos(n),u=Math.sin(n),h=Math.cos(r),p=Math.sin(r),m=Math.cos(s),g=Math.sin(s);if(e.order==="XYZ"){const x=c*m,S=c*g,w=u*m,R=u*g;t[0]=h*m,t[4]=-h*g,t[8]=p,t[1]=S+w*p,t[5]=x-R*p,t[9]=-u*h,t[2]=R-x*p,t[6]=w+S*p,t[10]=c*h}else if(e.order==="YXZ"){const x=h*m,S=h*g,w=p*m,R=p*g;t[0]=x+R*u,t[4]=w*u-S,t[8]=c*p,t[1]=c*g,t[5]=c*m,t[9]=-u,t[2]=S*u-w,t[6]=R+x*u,t[10]=c*h}else if(e.order==="ZXY"){const x=h*m,S=h*g,w=p*m,R=p*g;t[0]=x-R*u,t[4]=-c*g,t[8]=w+S*u,t[1]=S+w*u,t[5]=c*m,t[9]=R-x*u,t[2]=-c*p,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const x=c*m,S=c*g,w=u*m,R=u*g;t[0]=h*m,t[4]=w*p-S,t[8]=x*p+R,t[1]=h*g,t[5]=R*p+x,t[9]=S*p-w,t[2]=-p,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,S=c*p,w=u*h,R=u*p;t[0]=h*m,t[4]=R-x*g,t[8]=w*g+S,t[1]=g,t[5]=c*m,t[9]=-u*m,t[2]=-p*m,t[6]=S*g+w,t[10]=x-R*g}else if(e.order==="XZY"){const x=c*h,S=c*p,w=u*h,R=u*p;t[0]=h*m,t[4]=-g,t[8]=p*m,t[1]=x*g+R,t[5]=c*m,t[9]=S*g-w,t[2]=w*g-S,t[6]=u*m,t[10]=R*g+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dh,e,hh)}lookAt(e,t,n){const r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),si.crossVectors(n,cn),si.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),si.crossVectors(n,cn)),si.normalize(),ts.crossVectors(cn,si),r[0]=si.x,r[4]=ts.x,r[8]=cn.x,r[1]=si.y,r[5]=ts.y,r[9]=cn.y,r[2]=si.z,r[6]=ts.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,c=n[0],u=n[4],h=n[8],p=n[12],m=n[1],g=n[5],x=n[9],S=n[13],w=n[2],R=n[6],_=n[10],v=n[14],O=n[3],I=n[7],N=n[11],$=n[15],V=r[0],A=r[4],K=r[8],xe=r[12],b=r[1],P=r[5],te=r[9],Q=r[13],ie=r[2],ae=r[6],Z=r[10],ue=r[14],ne=r[3],Se=r[7],be=r[11],Oe=r[15];return s[0]=c*V+u*b+h*ie+p*ne,s[4]=c*A+u*P+h*ae+p*Se,s[8]=c*K+u*te+h*Z+p*be,s[12]=c*xe+u*Q+h*ue+p*Oe,s[1]=m*V+g*b+x*ie+S*ne,s[5]=m*A+g*P+x*ae+S*Se,s[9]=m*K+g*te+x*Z+S*be,s[13]=m*xe+g*Q+x*ue+S*Oe,s[2]=w*V+R*b+_*ie+v*ne,s[6]=w*A+R*P+_*ae+v*Se,s[10]=w*K+R*te+_*Z+v*be,s[14]=w*xe+R*Q+_*ue+v*Oe,s[3]=O*V+I*b+N*ie+$*ne,s[7]=O*A+I*P+N*ae+$*Se,s[11]=O*K+I*te+N*Z+$*be,s[15]=O*xe+I*Q+N*ue+$*Oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],c=e[1],u=e[5],h=e[9],p=e[13],m=e[2],g=e[6],x=e[10],S=e[14],w=e[3],R=e[7],_=e[11],v=e[15];return w*(+s*h*g-r*p*g-s*u*x+n*p*x+r*u*S-n*h*S)+R*(+t*h*S-t*p*x+s*c*x-r*c*S+r*p*m-s*h*m)+_*(+t*p*g-t*u*S-s*c*g+n*c*S+s*u*m-n*p*m)+v*(-r*u*m-t*h*g+t*u*x+r*c*g-n*c*x+n*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],u=e[5],h=e[6],p=e[7],m=e[8],g=e[9],x=e[10],S=e[11],w=e[12],R=e[13],_=e[14],v=e[15],O=g*_*p-R*x*p+R*h*S-u*_*S-g*h*v+u*x*v,I=w*x*p-m*_*p-w*h*S+c*_*S+m*h*v-c*x*v,N=m*R*p-w*g*p+w*u*S-c*R*S-m*u*v+c*g*v,$=w*g*h-m*R*h-w*u*x+c*R*x+m*u*_-c*g*_,V=t*O+n*I+r*N+s*$;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/V;return e[0]=O*A,e[1]=(R*x*s-g*_*s-R*r*S+n*_*S+g*r*v-n*x*v)*A,e[2]=(u*_*s-R*h*s+R*r*p-n*_*p-u*r*v+n*h*v)*A,e[3]=(g*h*s-u*x*s-g*r*p+n*x*p+u*r*S-n*h*S)*A,e[4]=I*A,e[5]=(m*_*s-w*x*s+w*r*S-t*_*S-m*r*v+t*x*v)*A,e[6]=(w*h*s-c*_*s-w*r*p+t*_*p+c*r*v-t*h*v)*A,e[7]=(c*x*s-m*h*s+m*r*p-t*x*p-c*r*S+t*h*S)*A,e[8]=N*A,e[9]=(w*g*s-m*R*s-w*n*S+t*R*S+m*n*v-t*g*v)*A,e[10]=(c*R*s-w*u*s+w*n*p-t*R*p-c*n*v+t*u*v)*A,e[11]=(m*u*s-c*g*s-m*n*p+t*g*p+c*n*S-t*u*S)*A,e[12]=$*A,e[13]=(m*R*r-w*g*r+w*n*x-t*R*x-m*n*_+t*g*_)*A,e[14]=(w*u*r-c*R*r-w*n*h+t*R*h+c*n*_-t*u*_)*A,e[15]=(c*g*r-m*u*r+m*n*h-t*g*h-c*n*x+t*u*x)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,c=e.x,u=e.y,h=e.z,p=s*c,m=s*u;return this.set(p*c+n,p*u-r*h,p*h+r*u,0,p*u+r*h,m*u+n,m*h-r*c,0,p*h-r*u,m*h+r*c,s*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,c){return this.set(1,n,s,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,c=t._y,u=t._z,h=t._w,p=s+s,m=c+c,g=u+u,x=s*p,S=s*m,w=s*g,R=c*m,_=c*g,v=u*g,O=h*p,I=h*m,N=h*g,$=n.x,V=n.y,A=n.z;return r[0]=(1-(R+v))*$,r[1]=(S+N)*$,r[2]=(w-I)*$,r[3]=0,r[4]=(S-N)*V,r[5]=(1-(x+v))*V,r[6]=(_+O)*V,r[7]=0,r[8]=(w+I)*A,r[9]=(_-O)*A,r[10]=(1-(x+R))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ki.set(r[0],r[1],r[2]).length();const c=ki.set(r[4],r[5],r[6]).length(),u=ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],vn.copy(this);const p=1/s,m=1/c,g=1/u;return vn.elements[0]*=p,vn.elements[1]*=p,vn.elements[2]*=p,vn.elements[4]*=m,vn.elements[5]*=m,vn.elements[6]*=m,vn.elements[8]*=g,vn.elements[9]*=g,vn.elements[10]*=g,t.setFromRotationMatrix(vn),n.x=s,n.y=c,n.z=u,this}makePerspective(e,t,n,r,s,c,u=Wn){const h=this.elements,p=2*s/(t-e),m=2*s/(n-r),g=(t+e)/(t-e),x=(n+r)/(n-r);let S,w;if(u===Wn)S=-(c+s)/(c-s),w=-2*c*s/(c-s);else if(u===Ds)S=-c/(c-s),w=-c*s/(c-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=m,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,s,c,u=Wn){const h=this.elements,p=1/(t-e),m=1/(n-r),g=1/(c-s),x=(t+e)*p,S=(n+r)*m;let w,R;if(u===Wn)w=(c+s)*g,R=-2*g;else if(u===Ds)w=s*g,R=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=R,h[14]=-w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ki=new j,vn=new Dt,dh=new j(0,0,0),hh=new j(1,1,1),si=new j,ts=new j,cn=new j,wl=new Dt,Al=new Nr;class Kn{constructor(e=0,t=0,n=0,r=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],c=r[4],u=r[8],h=r[1],p=r[5],m=r[9],g=r[2],x=r[6],S=r[10];switch(t){case"XYZ":this._y=Math.asin(en(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-en(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-en(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(en(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-g,s)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-en(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(u,s)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Al.setFromEuler(this),this.setFromQuaternion(Al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class Wc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fh=0;const Cl=new j,Hi=new Nr,zn=new Dt,ns=new j,Mr=new j,ph=new j,mh=new Nr,Rl=new j(1,0,0),Pl=new j(0,1,0),Dl=new j(0,0,1),Ll={type:"added"},gh={type:"removed"},Vi={type:"childadded",child:null},fo={type:"childremoved",child:null};class Wt extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new j,t=new Kn,n=new Nr,r=new j(1,1,1);function s(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new rt}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(Pl,e)}rotateZ(e){return this.rotateOnAxis(Dl,e)}translateOnAxis(e,t){return Cl.copy(e).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(Pl,e)}translateZ(e){return this.translateOnAxis(Dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ns.copy(e):ns.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Mr,ns,this.up):zn.lookAt(ns,Mr,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),Hi.setFromRotationMatrix(zn),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ll),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gh),fo.child=e,this.dispatchEvent(fo),fo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ll),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,c=r.length;s<c;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,ph),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,mh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,c=r.length;s<c;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let p=0,m=h.length;p<m;p++){const g=h[p];s(e.shapes,g)}else s(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,p=this.material.length;h<p;h++)u.push(s(e.materials,this.material[h]));r.material=u}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];r.animations.push(s(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),p=c(e.textures),m=c(e.images),g=c(e.shapes),x=c(e.skeletons),S=c(e.animations),w=c(e.nodes);u.length>0&&(n.geometries=u),h.length>0&&(n.materials=h),p.length>0&&(n.textures=p),m.length>0&&(n.images=m),g.length>0&&(n.shapes=g),x.length>0&&(n.skeletons=x),S.length>0&&(n.animations=S),w.length>0&&(n.nodes=w)}return n.object=r,n;function c(u){const h=[];for(const p in u){const m=u[p];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new j(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new j,kn=new j,po=new j,Hn=new j,Gi=new j,Wi=new j,Il=new j,mo=new j,go=new j,_o=new j,vo=new Pt,xo=new Pt,yo=new Pt;class Sn{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xn.subVectors(e,t),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){xn.subVectors(r,t),kn.subVectors(n,t),po.subVectors(e,t);const c=xn.dot(xn),u=xn.dot(kn),h=xn.dot(po),p=kn.dot(kn),m=kn.dot(po),g=c*p-u*u;if(g===0)return s.set(0,0,0),null;const x=1/g,S=(p*h-u*m)*x,w=(c*m-u*h)*x;return s.set(1-S-w,w,S)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,r,s,c,u,h){return this.getBarycoord(e,t,n,r,Hn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,Hn.x),h.addScaledVector(c,Hn.y),h.addScaledVector(u,Hn.z),h)}static getInterpolatedAttribute(e,t,n,r,s,c){return vo.setScalar(0),xo.setScalar(0),yo.setScalar(0),vo.fromBufferAttribute(e,t),xo.fromBufferAttribute(e,n),yo.fromBufferAttribute(e,r),c.setScalar(0),c.addScaledVector(vo,s.x),c.addScaledVector(xo,s.y),c.addScaledVector(yo,s.z),c}static isFrontFacing(e,t,n,r){return xn.subVectors(n,t),kn.subVectors(e,t),xn.cross(kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),xn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Sn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let c,u;Gi.subVectors(r,n),Wi.subVectors(s,n),mo.subVectors(e,n);const h=Gi.dot(mo),p=Wi.dot(mo);if(h<=0&&p<=0)return t.copy(n);go.subVectors(e,r);const m=Gi.dot(go),g=Wi.dot(go);if(m>=0&&g<=m)return t.copy(r);const x=h*g-m*p;if(x<=0&&h>=0&&m<=0)return c=h/(h-m),t.copy(n).addScaledVector(Gi,c);_o.subVectors(e,s);const S=Gi.dot(_o),w=Wi.dot(_o);if(w>=0&&S<=w)return t.copy(s);const R=S*p-h*w;if(R<=0&&p>=0&&w<=0)return u=p/(p-w),t.copy(n).addScaledVector(Wi,u);const _=m*w-S*g;if(_<=0&&g-m>=0&&S-w>=0)return Il.subVectors(s,r),u=(g-m)/(g-m+(S-w)),t.copy(r).addScaledVector(Il,u);const v=1/(_+R+x);return c=R*v,u=x*v,t.copy(n).addScaledVector(Gi,c).addScaledVector(Wi,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},is={h:0,s:0,l:0};function So(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}let dt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=St.workingColorSpace){if(e=Jd(e,1),t=en(t,0,1),n=en(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,c=2*n-s;this.r=So(c,s,e+1/3),this.g=So(c,s,e),this.b=So(c,s,e-1/3)}return St.toWorkingColorSpace(this,r),this}setStyle(e,t=Ln){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const c=r[1],u=r[2];switch(c){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],c=s.length;if(c===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ln){const n=Xc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return St.fromWorkingColorSpace(Gt.copy(this),e),Math.round(en(Gt.r*255,0,255))*65536+Math.round(en(Gt.g*255,0,255))*256+Math.round(en(Gt.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(Gt.copy(this),t);const n=Gt.r,r=Gt.g,s=Gt.b,c=Math.max(n,r,s),u=Math.min(n,r,s);let h,p;const m=(u+c)/2;if(u===c)h=0,p=0;else{const g=c-u;switch(p=m<=.5?g/(c+u):g/(2-c-u),c){case n:h=(r-s)/g+(r<s?6:0);break;case r:h=(s-n)/g+2;break;case s:h=(n-r)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=m,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Ln){St.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,r=Gt.b;return e!==Ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(is);const n=no(oi.h,is.h,t),r=no(oi.s,is.s,t),s=no(oi.l,is.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Gt=new dt;dt.NAMES=Xc;let _h=0;class ks extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=Qi,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=Fo,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oo&&(n.blendSrc=this.blendSrc),this.blendDst!==Fo&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const c=[];for(const u in s){const h=s[u];delete h.metadata,c.push(h)}return c}if(t){const s=r(e.textures),c=r(e.images);s.length>0&&(n.textures=s),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hs extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new j,rs=new st;class Tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yl,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rs.fromBufferAttribute(this,t),rs.applyMatrix3(e),this.setXY(t,rs.x,rs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yl&&(e.usage=this.usage),e}}class qc extends Tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yc extends Tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yn extends Tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vh=0;const hn=new Dt,Mo=new Wt,Xi=new j,un=new Or,br=new Or,Ft=new j;class $n extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hc(e)?Yc:qc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Mo.lookAt(e),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Yn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,c=t.length;s<c;s++){const u=t[s];br.setFromBufferAttribute(u),this.morphTargetsRelative?(Ft.addVectors(un.min,br.min),un.expandByPoint(Ft),Ft.addVectors(un.max,br.max),un.expandByPoint(Ft)):(un.expandByPoint(br.min),un.expandByPoint(br.max))}un.getCenter(n);let r=0;for(let s=0,c=e.count;s<c;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ft));if(t)for(let s=0,c=t.length;s<c;s++){const u=t[s],h=this.morphTargetsRelative;for(let p=0,m=u.count;p<m;p++)Ft.fromBufferAttribute(u,p),h&&(Xi.fromBufferAttribute(e,p),Ft.add(Xi)),r=Math.max(r,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),u=[],h=[];for(let K=0;K<n.count;K++)u[K]=new j,h[K]=new j;const p=new j,m=new j,g=new j,x=new st,S=new st,w=new st,R=new j,_=new j;function v(K,xe,b){p.fromBufferAttribute(n,K),m.fromBufferAttribute(n,xe),g.fromBufferAttribute(n,b),x.fromBufferAttribute(s,K),S.fromBufferAttribute(s,xe),w.fromBufferAttribute(s,b),m.sub(p),g.sub(p),S.sub(x),w.sub(x);const P=1/(S.x*w.y-w.x*S.y);isFinite(P)&&(R.copy(m).multiplyScalar(w.y).addScaledVector(g,-S.y).multiplyScalar(P),_.copy(g).multiplyScalar(S.x).addScaledVector(m,-w.x).multiplyScalar(P),u[K].add(R),u[xe].add(R),u[b].add(R),h[K].add(_),h[xe].add(_),h[b].add(_))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let K=0,xe=O.length;K<xe;++K){const b=O[K],P=b.start,te=b.count;for(let Q=P,ie=P+te;Q<ie;Q+=3)v(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const I=new j,N=new j,$=new j,V=new j;function A(K){$.fromBufferAttribute(r,K),V.copy($);const xe=u[K];I.copy(xe),I.sub($.multiplyScalar($.dot(xe))).normalize(),N.crossVectors(V,xe);const P=N.dot(h[K])<0?-1:1;c.setXYZW(K,I.x,I.y,I.z,P)}for(let K=0,xe=O.length;K<xe;++K){const b=O[K],P=b.start,te=b.count;for(let Q=P,ie=P+te;Q<ie;Q+=3)A(e.getX(Q+0)),A(e.getX(Q+1)),A(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,S=n.count;x<S;x++)n.setXYZ(x,0,0,0);const r=new j,s=new j,c=new j,u=new j,h=new j,p=new j,m=new j,g=new j;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),R=e.getX(x+1),_=e.getX(x+2);r.fromBufferAttribute(t,w),s.fromBufferAttribute(t,R),c.fromBufferAttribute(t,_),m.subVectors(c,s),g.subVectors(r,s),m.cross(g),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,R),p.fromBufferAttribute(n,_),u.add(m),h.add(m),p.add(m),n.setXYZ(w,u.x,u.y,u.z),n.setXYZ(R,h.x,h.y,h.z),n.setXYZ(_,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)r.fromBufferAttribute(t,x+0),s.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),m.subVectors(c,s),g.subVectors(r,s),m.cross(g),n.setXYZ(x+0,m.x,m.y,m.z),n.setXYZ(x+1,m.x,m.y,m.z),n.setXYZ(x+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(u,h){const p=u.array,m=u.itemSize,g=u.normalized,x=new p.constructor(h.length*m);let S=0,w=0;for(let R=0,_=h.length;R<_;R++){u.isInterleavedBufferAttribute?S=h[R]*u.data.stride+u.offset:S=h[R]*m;for(let v=0;v<m;v++)x[w++]=p[S++]}return new Tn(x,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $n,n=this.index.array,r=this.attributes;for(const u in r){const h=r[u],p=e(h,n);t.setAttribute(u,p)}const s=this.morphAttributes;for(const u in s){const h=[],p=s[u];for(let m=0,g=p.length;m<g;m++){const x=p[m],S=e(x,n);h.push(S)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const p=c[u];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const p=n[h];e.data.attributes[h]=p.toJSON(e.data)}const r={};let s=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],m=[];for(let g=0,x=p.length;g<x;g++){const S=p[g];m.push(S.toJSON(e.data))}m.length>0&&(r[h]=m,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const p in r){const m=r[p];this.setAttribute(p,m.clone(t))}const s=e.morphAttributes;for(const p in s){const m=[],g=s[p];for(let x=0,S=g.length;x<S;x++)m.push(g[x].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,m=c.length;p<m;p++){const g=c[p];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ul=new Dt,xi=new uh,ss=new ka,Nl=new j,os=new j,as=new j,ls=new j,bo=new j,cs=new j,Ol=new j,us=new j;class bn extends Wt{constructor(e=new $n,t=new Hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=r.length;s<c;s++){const u=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const u=this.morphTargetInfluences;if(s&&u){cs.set(0,0,0);for(let h=0,p=s.length;h<p;h++){const m=u[h],g=s[h];m!==0&&(bo.fromBufferAttribute(g,e),c?cs.addScaledVector(bo,m):cs.addScaledVector(bo.sub(t),m))}t.add(cs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(s),xi.copy(e.ray).recast(e.near),!(ss.containsPoint(xi.origin)===!1&&(xi.intersectSphere(ss,Nl)===null||xi.origin.distanceToSquared(Nl)>(e.far-e.near)**2))&&(Ul.copy(s).invert(),xi.copy(e.ray).applyMatrix4(Ul),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,c=this.material,u=s.index,h=s.attributes.position,p=s.attributes.uv,m=s.attributes.uv1,g=s.attributes.normal,x=s.groups,S=s.drawRange;if(u!==null)if(Array.isArray(c))for(let w=0,R=x.length;w<R;w++){const _=x[w],v=c[_.materialIndex],O=Math.max(_.start,S.start),I=Math.min(u.count,Math.min(_.start+_.count,S.start+S.count));for(let N=O,$=I;N<$;N+=3){const V=u.getX(N),A=u.getX(N+1),K=u.getX(N+2);r=ds(this,v,e,n,p,m,g,V,A,K),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const w=Math.max(0,S.start),R=Math.min(u.count,S.start+S.count);for(let _=w,v=R;_<v;_+=3){const O=u.getX(_),I=u.getX(_+1),N=u.getX(_+2);r=ds(this,c,e,n,p,m,g,O,I,N),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(c))for(let w=0,R=x.length;w<R;w++){const _=x[w],v=c[_.materialIndex],O=Math.max(_.start,S.start),I=Math.min(h.count,Math.min(_.start+_.count,S.start+S.count));for(let N=O,$=I;N<$;N+=3){const V=N,A=N+1,K=N+2;r=ds(this,v,e,n,p,m,g,V,A,K),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const w=Math.max(0,S.start),R=Math.min(h.count,S.start+S.count);for(let _=w,v=R;_<v;_+=3){const O=_,I=_+1,N=_+2;r=ds(this,c,e,n,p,m,g,O,I,N),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function xh(i,e,t,n,r,s,c,u){let h;if(e.side===nn?h=n.intersectTriangle(c,s,r,!0,u):h=n.intersectTriangle(r,s,c,e.side===di,u),h===null)return null;us.copy(u),us.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(us);return p<t.near||p>t.far?null:{distance:p,point:us.clone(),object:i}}function ds(i,e,t,n,r,s,c,u,h,p){i.getVertexPosition(u,os),i.getVertexPosition(h,as),i.getVertexPosition(p,ls);const m=xh(i,e,t,n,os,as,ls,Ol);if(m){const g=new j;Sn.getBarycoord(Ol,os,as,ls,g),r&&(m.uv=Sn.getInterpolatedAttribute(r,u,h,p,g,new st)),s&&(m.uv1=Sn.getInterpolatedAttribute(s,u,h,p,g,new st)),c&&(m.normal=Sn.getInterpolatedAttribute(c,u,h,p,g,new j),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const x={a:u,b:h,c:p,normal:new j,materialIndex:0};Sn.getNormal(os,as,ls,x.normal),m.face=x,m.barycoord=g}return m}class Fr extends $n{constructor(e=1,t=1,n=1,r=1,s=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:c};const u=this;r=Math.floor(r),s=Math.floor(s),c=Math.floor(c);const h=[],p=[],m=[],g=[];let x=0,S=0;w("z","y","x",-1,-1,n,t,e,c,s,0),w("z","y","x",1,-1,n,t,-e,c,s,1),w("x","z","y",1,1,e,n,t,r,c,2),w("x","z","y",1,-1,e,n,-t,r,c,3),w("x","y","z",1,-1,e,t,n,r,s,4),w("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(h),this.setAttribute("position",new Yn(p,3)),this.setAttribute("normal",new Yn(m,3)),this.setAttribute("uv",new Yn(g,2));function w(R,_,v,O,I,N,$,V,A,K,xe){const b=N/A,P=$/K,te=N/2,Q=$/2,ie=V/2,ae=A+1,Z=K+1;let ue=0,ne=0;const Se=new j;for(let be=0;be<Z;be++){const Oe=be*P-Q;for(let ft=0;ft<ae;ft++){const _t=ft*b-te;Se[R]=_t*O,Se[_]=Oe*I,Se[v]=ie,p.push(Se.x,Se.y,Se.z),Se[R]=0,Se[_]=0,Se[v]=V>0?1:-1,m.push(Se.x,Se.y,Se.z),g.push(ft/A),g.push(1-be/K),ue+=1}}for(let be=0;be<K;be++)for(let Oe=0;Oe<A;Oe++){const ft=x+Oe+ae*be,_t=x+Oe+ae*(be+1),re=x+(Oe+1)+ae*(be+1),me=x+(Oe+1)+ae*be;h.push(ft,_t,me),h.push(_t,re,me),ne+=6}u.addGroup(S,ne,xe),S+=ne,x+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ar(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function $t(i){const e={};for(let t=0;t<i.length;t++){const n=ar(i[t]);for(const r in n)e[r]=n[r]}return e}function yh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const Is={clone:ar,merge:$t};var Sh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sh,this.fragmentShader=Mh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=yh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Kc extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new j,Fl=new st,Bl=new st;class fn extends Kc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,Fl,Bl),t.subVectors(Bl,Fl)}setViewOffset(e,t,n,r,s,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(to*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;s+=c.offsetX*r/h,t-=c.offsetY*n/p,r*=c.width/h,n*=c.height/p}const u=this.filmOffset;u!==0&&(s+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=-90,Yi=1;class bh extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(qi,Yi,e,t);r.layers=this.layers,this.add(r);const s=new fn(qi,Yi,e,t);s.layers=this.layers,this.add(s);const c=new fn(qi,Yi,e,t);c.layers=this.layers,this.add(c);const u=new fn(qi,Yi,e,t);u.layers=this.layers,this.add(u);const h=new fn(qi,Yi,e,t);h.layers=this.layers,this.add(h);const p=new fn(qi,Yi,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,c,u,h]=t;for(const p of t)this.remove(p);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,c,u,h,p,m]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,c),e.setRenderTarget(n,2,r),e.render(t,u),e.setRenderTarget(n,3,r),e.render(t,h),e.setRenderTarget(n,4,r),e.render(t,p),n.texture.generateMipmaps=R,e.setRenderTarget(n,5,r),e.render(t,m),e.setRenderTarget(g,x,S),e.xr.enabled=w,n.texture.needsPMREMUpdate=!0}}class $c extends rn{constructor(e,t,n,r,s,c,u,h,p,m){e=e!==void 0?e:[],t=t!==void 0?t:ir,super(e,t,n,r,s,c,u,h,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Eh extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new $c(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fr(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Xn});s.uniforms.tEquirect.value=t;const c=new bn(r,s),u=t.minFilter;return t.minFilter===Ri&&(t.minFilter=yn),new bh(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(s)}}const Eo=new j,Th=new j,wh=new rt;class bi{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Eo.subVectors(n,t).cross(Th.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Eo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wh.getNormalMatrix(e),r=this.coplanarPoint(Eo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new ka,hs=new j;class Ha{constructor(e=new bi,t=new bi,n=new bi,r=new bi,s=new bi,c=new bi){this.planes=[e,t,n,r,s,c]}set(e,t,n,r,s,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(r),u[4].copy(s),u[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn){const n=this.planes,r=e.elements,s=r[0],c=r[1],u=r[2],h=r[3],p=r[4],m=r[5],g=r[6],x=r[7],S=r[8],w=r[9],R=r[10],_=r[11],v=r[12],O=r[13],I=r[14],N=r[15];if(n[0].setComponents(h-s,x-p,_-S,N-v).normalize(),n[1].setComponents(h+s,x+p,_+S,N+v).normalize(),n[2].setComponents(h+c,x+m,_+w,N+O).normalize(),n[3].setComponents(h-c,x-m,_-w,N-O).normalize(),n[4].setComponents(h-u,x-g,_-R,N-I).normalize(),t===Wn)n[5].setComponents(h+u,x+g,_+R,N+I).normalize();else if(t===Ds)n[5].setComponents(u,g,R,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(hs.x=r.normal.x>0?e.max.x:e.min.x,hs.y=r.normal.y>0?e.max.y:e.min.y,hs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zc(){let i=null,e=!1,t=null,n=null;function r(s,c){t(s,c),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ah(i){const e=new WeakMap;function t(u,h){const p=u.array,m=u.usage,g=p.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,p,m),u.onUploadCallback();let S;if(p instanceof Float32Array)S=i.FLOAT;else if(p instanceof Uint16Array)u.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=i.SHORT;else if(p instanceof Uint32Array)S=i.UNSIGNED_INT;else if(p instanceof Int32Array)S=i.INT;else if(p instanceof Int8Array)S=i.BYTE;else if(p instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version,size:g}}function n(u,h,p){const m=h.array,g=h.updateRanges;if(i.bindBuffer(p,u),g.length===0)i.bufferSubData(p,0,m);else{g.sort((S,w)=>S.start-w.start);let x=0;for(let S=1;S<g.length;S++){const w=g[x],R=g[S];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++x,g[x]=R)}g.length=x+1;for(let S=0,w=g.length;S<w;S++){const R=g[S];i.bufferSubData(p,R.start*m.BYTES_PER_ELEMENT,m,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(i.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const p=e.get(u);if(p===void 0)e.set(u,t(u,h));else if(p.version<u.version){if(p.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(p.buffer,u,h),p.version=u.version}}return{get:r,remove:s,update:c}}class Vs extends $n{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,c=t/2,u=Math.floor(n),h=Math.floor(r),p=u+1,m=h+1,g=e/u,x=t/h,S=[],w=[],R=[],_=[];for(let v=0;v<m;v++){const O=v*x-c;for(let I=0;I<p;I++){const N=I*g-s;w.push(N,-O,0),R.push(0,0,1),_.push(I/u),_.push(1-v/h)}}for(let v=0;v<h;v++)for(let O=0;O<u;O++){const I=O+p*v,N=O+p*(v+1),$=O+1+p*(v+1),V=O+1+p*v;S.push(I,N,V),S.push(N,$,V)}this.setIndex(S),this.setAttribute("position",new Yn(w,3)),this.setAttribute("normal",new Yn(R,3)),this.setAttribute("uv",new Yn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ch=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rh=`#ifdef USE_ALPHAHASH
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
#endif`,Ph=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ih=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uh=`#ifdef USE_AOMAP
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
#endif`,Nh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Oh=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hh=`#ifdef USE_IRIDESCENCE
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
#endif`,Vh=`#ifdef USE_BUMPMAP
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
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zh=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Jh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qh=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",of=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,af=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gf=`#ifdef USE_GRADIENTMAP
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
}`,_f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yf=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Sf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Af=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cf=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Df=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bf=`#if defined( USE_POINTS_UV )
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
#endif`,zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wf=`#ifdef USE_MORPHTARGETS
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
#endif`,Xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zf=`#ifdef USE_NORMALMAP
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
#endif`,Jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ip=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,fp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mp=`#ifdef USE_SKINNING
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
#endif`,gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mp=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rp=`uniform sampler2D t2D;
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`#include <common>
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
}`,Np=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Op=`#define DISTANCE
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
}`,Fp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`uniform float scale;
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
}`,Hp=`uniform vec3 diffuse;
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
}`,Vp=`#include <common>
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Wp=`#define LAMBERT
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
}`,Xp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,qp=`#define MATCAP
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
}`,Yp=`#define MATCAP
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
}`,jp=`#define NORMAL
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
}`,Kp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$p=`#define PHONG
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
}`,Zp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Jp=`#define STANDARD
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
}`,Qp=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,em=`#define TOON
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
}`,tm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,nm=`uniform float size;
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
}`,im=`uniform vec3 diffuse;
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
}`,rm=`#include <common>
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
}`,sm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,om=`uniform float rotation;
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
}`,am=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Ch,alphahash_pars_fragment:Rh,alphamap_fragment:Ph,alphamap_pars_fragment:Dh,alphatest_fragment:Lh,alphatest_pars_fragment:Ih,aomap_fragment:Uh,aomap_pars_fragment:Nh,batching_pars_vertex:Oh,batching_vertex:Fh,begin_vertex:Bh,beginnormal_vertex:zh,bsdfs:kh,iridescence_fragment:Hh,bumpmap_pars_fragment:Vh,clipping_planes_fragment:Gh,clipping_planes_pars_fragment:Wh,clipping_planes_pars_vertex:Xh,clipping_planes_vertex:qh,color_fragment:Yh,color_pars_fragment:jh,color_pars_vertex:Kh,color_vertex:$h,common:Zh,cube_uv_reflection_fragment:Jh,defaultnormal_vertex:Qh,displacementmap_pars_vertex:ef,displacementmap_vertex:tf,emissivemap_fragment:nf,emissivemap_pars_fragment:rf,colorspace_fragment:sf,colorspace_pars_fragment:of,envmap_fragment:af,envmap_common_pars_fragment:lf,envmap_pars_fragment:cf,envmap_pars_vertex:uf,envmap_physical_pars_fragment:Sf,envmap_vertex:df,fog_vertex:hf,fog_pars_vertex:ff,fog_fragment:pf,fog_pars_fragment:mf,gradientmap_pars_fragment:gf,lightmap_pars_fragment:_f,lights_lambert_fragment:vf,lights_lambert_pars_fragment:xf,lights_pars_begin:yf,lights_toon_fragment:Mf,lights_toon_pars_fragment:bf,lights_phong_fragment:Ef,lights_phong_pars_fragment:Tf,lights_physical_fragment:wf,lights_physical_pars_fragment:Af,lights_fragment_begin:Cf,lights_fragment_maps:Rf,lights_fragment_end:Pf,logdepthbuf_fragment:Df,logdepthbuf_pars_fragment:Lf,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Uf,map_fragment:Nf,map_pars_fragment:Of,map_particle_fragment:Ff,map_particle_pars_fragment:Bf,metalnessmap_fragment:zf,metalnessmap_pars_fragment:kf,morphinstance_vertex:Hf,morphcolor_vertex:Vf,morphnormal_vertex:Gf,morphtarget_pars_vertex:Wf,morphtarget_vertex:Xf,normal_fragment_begin:qf,normal_fragment_maps:Yf,normal_pars_fragment:jf,normal_pars_vertex:Kf,normal_vertex:$f,normalmap_pars_fragment:Zf,clearcoat_normal_fragment_begin:Jf,clearcoat_normal_fragment_maps:Qf,clearcoat_pars_fragment:ep,iridescence_pars_fragment:tp,opaque_fragment:np,packing:ip,premultiplied_alpha_fragment:rp,project_vertex:sp,dithering_fragment:op,dithering_pars_fragment:ap,roughnessmap_fragment:lp,roughnessmap_pars_fragment:cp,shadowmap_pars_fragment:up,shadowmap_pars_vertex:dp,shadowmap_vertex:hp,shadowmask_pars_fragment:fp,skinbase_vertex:pp,skinning_pars_vertex:mp,skinning_vertex:gp,skinnormal_vertex:_p,specularmap_fragment:vp,specularmap_pars_fragment:xp,tonemapping_fragment:yp,tonemapping_pars_fragment:Sp,transmission_fragment:Mp,transmission_pars_fragment:bp,uv_pars_fragment:Ep,uv_pars_vertex:Tp,uv_vertex:wp,worldpos_vertex:Ap,background_vert:Cp,background_frag:Rp,backgroundCube_vert:Pp,backgroundCube_frag:Dp,cube_vert:Lp,cube_frag:Ip,depth_vert:Up,depth_frag:Np,distanceRGBA_vert:Op,distanceRGBA_frag:Fp,equirect_vert:Bp,equirect_frag:zp,linedashed_vert:kp,linedashed_frag:Hp,meshbasic_vert:Vp,meshbasic_frag:Gp,meshlambert_vert:Wp,meshlambert_frag:Xp,meshmatcap_vert:qp,meshmatcap_frag:Yp,meshnormal_vert:jp,meshnormal_frag:Kp,meshphong_vert:$p,meshphong_frag:Zp,meshphysical_vert:Jp,meshphysical_frag:Qp,meshtoon_vert:em,meshtoon_frag:tm,points_vert:nm,points_frag:im,shadow_vert:rm,shadow_frag:sm,sprite_vert:om,sprite_frag:am},ye={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},In={basic:{uniforms:$t([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:$t([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new dt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:$t([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:$t([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:$t([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new dt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:$t([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:$t([ye.points,ye.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:$t([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:$t([ye.common,ye.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:$t([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:$t([ye.sprite,ye.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:$t([ye.common,ye.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:$t([ye.lights,ye.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};In.physical={uniforms:$t([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const fs={r:0,b:0,g:0},Si=new Kn,lm=new Dt;function cm(i,e,t,n,r,s,c){const u=new dt(0);let h=s===!0?0:1,p,m,g=null,x=0,S=null;function w(O){let I=O.isScene===!0?O.background:null;return I&&I.isTexture&&(I=(O.backgroundBlurriness>0?t:e).get(I)),I}function R(O){let I=!1;const N=w(O);N===null?v(u,h):N&&N.isColor&&(v(N,1),I=!0);const $=i.xr.getEnvironmentBlendMode();$==="additive"?n.buffers.color.setClear(0,0,0,1,c):$==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(O,I){const N=w(I);N&&(N.isCubeTexture||N.mapping===Bs)?(m===void 0&&(m=new bn(new Fr(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:ar(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function($,V,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),Si.copy(I.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.material.uniforms.envMap.value=N,m.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(lm.makeRotationFromEuler(Si)),m.material.toneMapped=St.getTransfer(N.colorSpace)!==wt,(g!==N||x!==N.version||S!==i.toneMapping)&&(m.material.needsUpdate=!0,g=N,x=N.version,S=i.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new bn(new Vs(2,2),new tn({name:"BackgroundMaterial",uniforms:ar(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=St.getTransfer(N.colorSpace)!==wt,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||x!==N.version||S!==i.toneMapping)&&(p.material.needsUpdate=!0,g=N,x=N.version,S=i.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function v(O,I){O.getRGB(fs,jc(i)),n.buffers.color.setClear(fs.r,fs.g,fs.b,I,c)}return{getClearColor:function(){return u},setClearColor:function(O,I=1){u.set(O),h=I,v(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(O){h=O,v(u,h)},render:R,addToRenderList:_}}function um(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=x(null);let s=r,c=!1;function u(b,P,te,Q,ie){let ae=!1;const Z=g(Q,te,P);s!==Z&&(s=Z,p(s.object)),ae=S(b,Q,te,ie),ae&&w(b,Q,te,ie),ie!==null&&e.update(ie,i.ELEMENT_ARRAY_BUFFER),(ae||c)&&(c=!1,N(b,P,te,Q),ie!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function h(){return i.createVertexArray()}function p(b){return i.bindVertexArray(b)}function m(b){return i.deleteVertexArray(b)}function g(b,P,te){const Q=te.wireframe===!0;let ie=n[b.id];ie===void 0&&(ie={},n[b.id]=ie);let ae=ie[P.id];ae===void 0&&(ae={},ie[P.id]=ae);let Z=ae[Q];return Z===void 0&&(Z=x(h()),ae[Q]=Z),Z}function x(b){const P=[],te=[],Q=[];for(let ie=0;ie<t;ie++)P[ie]=0,te[ie]=0,Q[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:te,attributeDivisors:Q,object:b,attributes:{},index:null}}function S(b,P,te,Q){const ie=s.attributes,ae=P.attributes;let Z=0;const ue=te.getAttributes();for(const ne in ue)if(ue[ne].location>=0){const be=ie[ne];let Oe=ae[ne];if(Oe===void 0&&(ne==="instanceMatrix"&&b.instanceMatrix&&(Oe=b.instanceMatrix),ne==="instanceColor"&&b.instanceColor&&(Oe=b.instanceColor)),be===void 0||be.attribute!==Oe||Oe&&be.data!==Oe.data)return!0;Z++}return s.attributesNum!==Z||s.index!==Q}function w(b,P,te,Q){const ie={},ae=P.attributes;let Z=0;const ue=te.getAttributes();for(const ne in ue)if(ue[ne].location>=0){let be=ae[ne];be===void 0&&(ne==="instanceMatrix"&&b.instanceMatrix&&(be=b.instanceMatrix),ne==="instanceColor"&&b.instanceColor&&(be=b.instanceColor));const Oe={};Oe.attribute=be,be&&be.data&&(Oe.data=be.data),ie[ne]=Oe,Z++}s.attributes=ie,s.attributesNum=Z,s.index=Q}function R(){const b=s.newAttributes;for(let P=0,te=b.length;P<te;P++)b[P]=0}function _(b){v(b,0)}function v(b,P){const te=s.newAttributes,Q=s.enabledAttributes,ie=s.attributeDivisors;te[b]=1,Q[b]===0&&(i.enableVertexAttribArray(b),Q[b]=1),ie[b]!==P&&(i.vertexAttribDivisor(b,P),ie[b]=P)}function O(){const b=s.newAttributes,P=s.enabledAttributes;for(let te=0,Q=P.length;te<Q;te++)P[te]!==b[te]&&(i.disableVertexAttribArray(te),P[te]=0)}function I(b,P,te,Q,ie,ae,Z){Z===!0?i.vertexAttribIPointer(b,P,te,ie,ae):i.vertexAttribPointer(b,P,te,Q,ie,ae)}function N(b,P,te,Q){R();const ie=Q.attributes,ae=te.getAttributes(),Z=P.defaultAttributeValues;for(const ue in ae){const ne=ae[ue];if(ne.location>=0){let Se=ie[ue];if(Se===void 0&&(ue==="instanceMatrix"&&b.instanceMatrix&&(Se=b.instanceMatrix),ue==="instanceColor"&&b.instanceColor&&(Se=b.instanceColor)),Se!==void 0){const be=Se.normalized,Oe=Se.itemSize,ft=e.get(Se);if(ft===void 0)continue;const _t=ft.buffer,re=ft.type,me=ft.bytesPerElement,Ue=re===i.INT||re===i.UNSIGNED_INT||Se.gpuType===Ia;if(Se.isInterleavedBufferAttribute){const Pe=Se.data,Ze=Pe.stride,de=Se.offset;if(Pe.isInstancedInterleavedBuffer){for(let ct=0;ct<ne.locationSize;ct++)v(ne.location+ct,Pe.meshPerAttribute);b.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let ct=0;ct<ne.locationSize;ct++)_(ne.location+ct);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let ct=0;ct<ne.locationSize;ct++)I(ne.location+ct,Oe/ne.locationSize,re,be,Ze*me,(de+Oe/ne.locationSize*ct)*me,Ue)}else{if(Se.isInstancedBufferAttribute){for(let Pe=0;Pe<ne.locationSize;Pe++)v(ne.location+Pe,Se.meshPerAttribute);b.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Pe=0;Pe<ne.locationSize;Pe++)_(ne.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Pe=0;Pe<ne.locationSize;Pe++)I(ne.location+Pe,Oe/ne.locationSize,re,be,Oe*me,Oe/ne.locationSize*Pe*me,Ue)}}else if(Z!==void 0){const be=Z[ue];if(be!==void 0)switch(be.length){case 2:i.vertexAttrib2fv(ne.location,be);break;case 3:i.vertexAttrib3fv(ne.location,be);break;case 4:i.vertexAttrib4fv(ne.location,be);break;default:i.vertexAttrib1fv(ne.location,be)}}}}O()}function $(){K();for(const b in n){const P=n[b];for(const te in P){const Q=P[te];for(const ie in Q)m(Q[ie].object),delete Q[ie];delete P[te]}delete n[b]}}function V(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const te in P){const Q=P[te];for(const ie in Q)m(Q[ie].object),delete Q[ie];delete P[te]}delete n[b.id]}function A(b){for(const P in n){const te=n[P];if(te[b.id]===void 0)continue;const Q=te[b.id];for(const ie in Q)m(Q[ie].object),delete Q[ie];delete te[b.id]}}function K(){xe(),c=!0,s!==r&&(s=r,p(s.object))}function xe(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:K,resetDefaultState:xe,dispose:$,releaseStatesOfGeometry:V,releaseStatesOfProgram:A,initAttributes:R,enableAttribute:_,disableUnusedAttributes:O}}function dm(i,e,t){let n;function r(p){n=p}function s(p,m){i.drawArrays(n,p,m),t.update(m,n,1)}function c(p,m,g){g!==0&&(i.drawArraysInstanced(n,p,m,g),t.update(m,n,g))}function u(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,p,0,m,0,g);let S=0;for(let w=0;w<g;w++)S+=m[w];t.update(S,n,1)}function h(p,m,g,x){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<p.length;w++)c(p[w],m[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(n,p,0,m,0,x,0,g);let w=0;for(let R=0;R<g;R++)w+=m[R];for(let R=0;R<x.length;R++)t.update(w,n,x[R])}}this.setMode=r,this.render=s,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function hm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(A){return!(A!==Mn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(A){const K=A===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==jn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Gn&&!K)}function h(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=h(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const g=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(x===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),O=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),N=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),$=w>0,V=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:O,maxVaryings:I,maxFragmentUniforms:N,vertexTextures:$,maxSamples:V}}function fm(i){const e=this;let t=null,n=0,r=!1,s=!1;const c=new bi,u=new rt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||n!==0||r;return r=x,n=g.length,S},this.beginShadows=function(){s=!0,m(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(g,x){t=m(g,x,0)},this.setState=function(g,x,S){const w=g.clippingPlanes,R=g.clipIntersection,_=g.clipShadows,v=i.get(g);if(!r||w===null||w.length===0||s&&!_)s?m(null):p();else{const O=s?0:n,I=O*4;let N=v.clippingState||null;h.value=N,N=m(w,x,I,S);for(let $=0;$!==I;++$)N[$]=t[$];v.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(g,x,S,w){const R=g!==null?g.length:0;let _=null;if(R!==0){if(_=h.value,w!==!0||_===null){const v=S+R*4,O=x.matrixWorldInverse;u.getNormalMatrix(O),(_===null||_.length<v)&&(_=new Float32Array(v));for(let I=0,N=S;I!==R;++I,N+=4)c.copy(g[I]).applyMatrix4(O,u),c.normal.toArray(_,N),_[N+3]=c.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,_}}function pm(i){let e=new WeakMap;function t(c,u){return u===Xo?c.mapping=ir:u===qo&&(c.mapping=rr),c}function n(c){if(c&&c.isTexture){const u=c.mapping;if(u===Xo||u===qo)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new Eh(h.height);return p.fromEquirectangularTexture(i,c),e.set(c,p),c.addEventListener("dispose",r),t(p.texture,c.mapping)}else return null}}return c}function r(c){const u=c.target;u.removeEventListener("dispose",r);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Va extends Kc{constructor(e=-1,t=1,n=1,r=-1,s=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,c=n+e,u=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=p*this.view.offsetX,c=s+p*this.view.width,u-=m*this.view.offsetY,h=u-m*this.view.height}this.projectionMatrix.makeOrthographic(s,c,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zi=4,zl=[.125,.215,.35,.446,.526,.582],wi=20,To=new Va,kl=new dt;let wo=null,Ao=0,Co=0,Ro=!1;const Ei=(1+Math.sqrt(5))/2,ji=1/Ei,Hl=[new j(-Ei,ji,0),new j(Ei,ji,0),new j(-ji,0,Ei),new j(ji,0,Ei),new j(0,Ei,-ji),new j(0,Ei,ji),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class Vl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){wo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wo,Ao,Co),this._renderer.xr.enabled=Ro,e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:qn,format:Mn,colorSpace:fi,depthBuffer:!1},r=Gl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mm(s)),this._blurMaterial=gm(s,e,t)}return r}_compileMaterial(e){const t=new bn(this._lodPlanes[0],e);this._renderer.compile(t,To)}_sceneToCubeUV(e,t,n,r){const u=new fn(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,x=m.toneMapping;m.getClearColor(kl),m.toneMapping=ui,m.autoClear=!1;const S=new Hs({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),w=new bn(new Fr,S);let R=!1;const _=e.background;_?_.isColor&&(S.color.copy(_),e.background=null,R=!0):(S.color.copy(kl),R=!0);for(let v=0;v<6;v++){const O=v%3;O===0?(u.up.set(0,h[v],0),u.lookAt(p[v],0,0)):O===1?(u.up.set(0,0,h[v]),u.lookAt(0,p[v],0)):(u.up.set(0,h[v],0),u.lookAt(0,0,p[v]));const I=this._cubeSize;ps(r,O*I,v>2?I:0,I,I),m.setRenderTarget(r),R&&m.render(w,u),m.render(e,u)}w.geometry.dispose(),w.material.dispose(),m.toneMapping=x,m.autoClear=g,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ir||e.mapping===rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wl());const s=r?this._cubemapMaterial:this._equirectMaterial,c=new bn(this._lodPlanes[0],s),u=s.uniforms;u.envMap.value=e;const h=this._cubeSize;ps(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(c,To)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const c=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),u=Hl[(r-s-1)%Hl.length];this._blur(e,s-1,s,c,u)}t.autoClear=n}_blur(e,t,n,r,s){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",s),this._halfBlur(c,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,c,u){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new bn(this._lodPlanes[r],p),x=p.uniforms,S=this._sizeLods[n]-1,w=isFinite(s)?Math.PI/(2*S):2*Math.PI/(2*wi-1),R=s/w,_=isFinite(s)?1+Math.floor(m*R):wi;_>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${wi}`);const v=[];let O=0;for(let A=0;A<wi;++A){const K=A/R,xe=Math.exp(-K*K/2);v.push(xe),A===0?O+=xe:A<_&&(O+=2*xe)}for(let A=0;A<v.length;A++)v[A]=v[A]/O;x.envMap.value=e.texture,x.samples.value=_,x.weights.value=v,x.latitudinal.value=c==="latitudinal",u&&(x.poleAxis.value=u);const{_lodMax:I}=this;x.dTheta.value=w,x.mipInt.value=I-n;const N=this._sizeLods[r],$=3*N*(r>I-Zi?r-I+Zi:0),V=4*(this._cubeSize-N);ps(t,$,V,3*N,2*N),h.setRenderTarget(t),h.render(g,To)}}function mm(i){const e=[],t=[],n=[];let r=i;const s=i-Zi+1+zl.length;for(let c=0;c<s;c++){const u=Math.pow(2,r);t.push(u);let h=1/u;c>i-Zi?h=zl[c-i+Zi-1]:c===0&&(h=0),n.push(h);const p=1/(u-2),m=-p,g=1+p,x=[m,m,g,m,g,g,m,m,g,g,m,g],S=6,w=6,R=3,_=2,v=1,O=new Float32Array(R*w*S),I=new Float32Array(_*w*S),N=new Float32Array(v*w*S);for(let V=0;V<S;V++){const A=V%3*2/3-1,K=V>2?0:-1,xe=[A,K,0,A+2/3,K,0,A+2/3,K+1,0,A,K,0,A+2/3,K+1,0,A,K+1,0];O.set(xe,R*w*V),I.set(x,_*w*V);const b=[V,V,V,V,V,V];N.set(b,v*w*V)}const $=new $n;$.setAttribute("position",new Tn(O,R)),$.setAttribute("uv",new Tn(I,_)),$.setAttribute("faceIndex",new Tn(N,v)),e.push($),r>Zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gl(i,e,t){const n=new En(i,e,t);return n.texture.mapping=Bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function gm(i,e,t){const n=new Float32Array(wi),r=new j(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Wl(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Xl(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ga(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _m(i){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){const h=u.mapping,p=h===Xo||h===qo,m=h===ir||h===rr;if(p||m){let g=e.get(u);const x=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==x)return t===null&&(t=new Vl(i)),g=p?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const S=u.image;return p&&S&&S.height>0||m&&S&&r(S)?(t===null&&(t=new Vl(i)),g=p?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",s),g.texture):null}}}return u}function r(u){let h=0;const p=6;for(let m=0;m<p;m++)u[m]!==void 0&&h++;return h===p}function s(u){const h=u.target;h.removeEventListener("dispose",s);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function vm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ts("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function xm(i,e,t,n){const r={},s=new WeakMap;function c(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const R=x.morphAttributes[w];for(let _=0,v=R.length;_<v;_++)e.remove(R[_])}x.removeEventListener("dispose",c),delete r[x.id];const S=s.get(x);S&&(e.remove(S),s.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function u(g,x){return r[x.id]===!0||(x.addEventListener("dispose",c),r[x.id]=!0,t.memory.geometries++),x}function h(g){const x=g.attributes;for(const w in x)e.update(x[w],i.ARRAY_BUFFER);const S=g.morphAttributes;for(const w in S){const R=S[w];for(let _=0,v=R.length;_<v;_++)e.update(R[_],i.ARRAY_BUFFER)}}function p(g){const x=[],S=g.index,w=g.attributes.position;let R=0;if(S!==null){const O=S.array;R=S.version;for(let I=0,N=O.length;I<N;I+=3){const $=O[I+0],V=O[I+1],A=O[I+2];x.push($,V,V,A,A,$)}}else if(w!==void 0){const O=w.array;R=w.version;for(let I=0,N=O.length/3-1;I<N;I+=3){const $=I+0,V=I+1,A=I+2;x.push($,V,V,A,A,$)}}else return;const _=new(Hc(x)?Yc:qc)(x,1);_.version=R;const v=s.get(g);v&&e.remove(v),s.set(g,_)}function m(g){const x=s.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&p(g)}else p(g);return s.get(g)}return{get:u,update:h,getWireframeAttribute:m}}function ym(i,e,t){let n;function r(x){n=x}let s,c;function u(x){s=x.type,c=x.bytesPerElement}function h(x,S){i.drawElements(n,S,s,x*c),t.update(S,n,1)}function p(x,S,w){w!==0&&(i.drawElementsInstanced(n,S,s,x*c,w),t.update(S,n,w))}function m(x,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,S,0,s,x,0,w);let _=0;for(let v=0;v<w;v++)_+=S[v];t.update(_,n,1)}function g(x,S,w,R){if(w===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<x.length;v++)p(x[v]/c,S[v],R[v]);else{_.multiDrawElementsInstancedWEBGL(n,S,0,s,x,0,R,0,w);let v=0;for(let O=0;O<w;O++)v+=S[O];for(let O=0;O<R.length;O++)t.update(v,n,R[O])}}this.setMode=r,this.setIndex=u,this.render=h,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function Sm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,c,u){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=u*(s/3);break;case i.LINES:t.lines+=u*(s/2);break;case i.LINE_STRIP:t.lines+=u*(s-1);break;case i.LINE_LOOP:t.lines+=u*s;break;case i.POINTS:t.points+=u*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Mm(i,e,t){const n=new WeakMap,r=new Pt;function s(c,u,h){const p=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let x=n.get(u);if(x===void 0||x.count!==g){let b=function(){K.dispose(),n.delete(u),u.removeEventListener("dispose",b)};var S=b;x!==void 0&&x.texture.dispose();const w=u.morphAttributes.position!==void 0,R=u.morphAttributes.normal!==void 0,_=u.morphAttributes.color!==void 0,v=u.morphAttributes.position||[],O=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let N=0;w===!0&&(N=1),R===!0&&(N=2),_===!0&&(N=3);let $=u.attributes.position.count*N,V=1;$>e.maxTextureSize&&(V=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const A=new Float32Array($*V*4*g),K=new Gc(A,$,V,g);K.type=Gn,K.needsUpdate=!0;const xe=N*4;for(let P=0;P<g;P++){const te=v[P],Q=O[P],ie=I[P],ae=$*V*4*P;for(let Z=0;Z<te.count;Z++){const ue=Z*xe;w===!0&&(r.fromBufferAttribute(te,Z),A[ae+ue+0]=r.x,A[ae+ue+1]=r.y,A[ae+ue+2]=r.z,A[ae+ue+3]=0),R===!0&&(r.fromBufferAttribute(Q,Z),A[ae+ue+4]=r.x,A[ae+ue+5]=r.y,A[ae+ue+6]=r.z,A[ae+ue+7]=0),_===!0&&(r.fromBufferAttribute(ie,Z),A[ae+ue+8]=r.x,A[ae+ue+9]=r.y,A[ae+ue+10]=r.z,A[ae+ue+11]=ie.itemSize===4?r.w:1)}}x={count:g,texture:K,size:new st($,V)},n.set(u,x),u.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let w=0;for(let _=0;_<p.length;_++)w+=p[_];const R=u.morphTargetsRelative?1:1-w;h.getUniforms().setValue(i,"morphTargetBaseInfluence",R),h.getUniforms().setValue(i,"morphTargetInfluences",p)}h.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:s}}function bm(i,e,t,n){let r=new WeakMap;function s(h){const p=n.render.frame,m=h.geometry,g=e.get(h,m);if(r.get(g)!==p&&(e.update(g),r.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),r.get(h)!==p&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;r.get(x)!==p&&(x.update(),r.set(x,p))}return g}function c(){r=new WeakMap}function u(h){const p=h.target;p.removeEventListener("dispose",u),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:s,dispose:c}}class Jc extends rn{constructor(e,t,n,r,s,c,u,h,p,m=er){if(m!==er&&m!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===er&&(n=Pi),n===void 0&&m===or&&(n=sr),super(null,r,s,c,u,h,m,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:pn,this.minFilter=h!==void 0?h:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qc=new rn,ql=new Jc(1,1),eu=new Gc,tu=new lh,nu=new $c,Yl=[],jl=[],Kl=new Float32Array(16),$l=new Float32Array(9),Zl=new Float32Array(4);function ur(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Yl[r];if(s===void 0&&(s=new Float32Array(r),Yl[r]=s),e!==0){n.toArray(s,0);for(let c=1,u=0;c!==e;++c)u+=t,i[c].toArray(s,u)}return s}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gs(i,e){let t=jl[e];t===void 0&&(t=new Int32Array(e),jl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Em(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function Am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function Cm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Zl.set(n),i.uniformMatrix2fv(this.addr,!1,Zl),Nt(t,n)}}function Rm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;$l.set(n),i.uniformMatrix3fv(this.addr,!1,$l),Nt(t,n)}}function Pm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Kl.set(n),i.uniformMatrix4fv(this.addr,!1,Kl),Nt(t,n)}}function Dm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function Nm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function zm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ql.compareFunction=kc,s=ql):s=Qc,t.setTexture2D(e||s,r)}function km(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||tu,r)}function Hm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||nu,r)}function Vm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||eu,r)}function Gm(i){switch(i){case 5126:return Em;case 35664:return Tm;case 35665:return wm;case 35666:return Am;case 35674:return Cm;case 35675:return Rm;case 35676:return Pm;case 5124:case 35670:return Dm;case 35667:case 35671:return Lm;case 35668:case 35672:return Im;case 35669:case 35673:return Um;case 5125:return Nm;case 36294:return Om;case 36295:return Fm;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return km;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return Vm}}function Wm(i,e){i.uniform1fv(this.addr,e)}function Xm(i,e){const t=ur(e,this.size,2);i.uniform2fv(this.addr,t)}function qm(i,e){const t=ur(e,this.size,3);i.uniform3fv(this.addr,t)}function Ym(i,e){const t=ur(e,this.size,4);i.uniform4fv(this.addr,t)}function jm(i,e){const t=ur(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Km(i,e){const t=ur(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $m(i,e){const t=ur(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zm(i,e){i.uniform1iv(this.addr,e)}function Jm(i,e){i.uniform2iv(this.addr,e)}function Qm(i,e){i.uniform3iv(this.addr,e)}function eg(i,e){i.uniform4iv(this.addr,e)}function tg(i,e){i.uniform1uiv(this.addr,e)}function ng(i,e){i.uniform2uiv(this.addr,e)}function ig(i,e){i.uniform3uiv(this.addr,e)}function rg(i,e){i.uniform4uiv(this.addr,e)}function sg(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||Qc,s[c])}function og(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||tu,s[c])}function ag(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||nu,s[c])}function lg(i,e,t){const n=this.cache,r=e.length,s=Gs(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||eu,s[c])}function cg(i){switch(i){case 5126:return Wm;case 35664:return Xm;case 35665:return qm;case 35666:return Ym;case 35674:return jm;case 35675:return Km;case 35676:return $m;case 5124:case 35670:return Zm;case 35667:case 35671:return Jm;case 35668:case 35672:return Qm;case 35669:case 35673:return eg;case 5125:return tg;case 36294:return ng;case 36295:return ig;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return lg}}class ug{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gm(t.type)}}class dg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cg(t.type)}}class hg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,c=r.length;s!==c;++s){const u=r[s];u.setValue(e,t[u.id],n)}}}const Po=/(\w+)(\])?(\[|\.)?/g;function Jl(i,e){i.seq.push(e),i.map[e.id]=e}function fg(i,e,t){const n=i.name,r=n.length;for(Po.lastIndex=0;;){const s=Po.exec(n),c=Po.lastIndex;let u=s[1];const h=s[2]==="]",p=s[3];if(h&&(u=u|0),p===void 0||p==="["&&c+2===r){Jl(t,p===void 0?new ug(u,i,e):new dg(u,i,e));break}else{let g=t.map[u];g===void 0&&(g=new hg(u),Jl(t,g)),t=g}}}class ws{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),c=e.getUniformLocation(t,s.name);fg(s,c,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,c=t.length;s!==c;++s){const u=t[s],h=n[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const c=e[r];c.id in t&&n.push(c)}return n}}function Ql(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const pg=37297;let mg=0;function gg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let c=r;c<s;c++){const u=c+1;n.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return n.join(`
`)}function _g(i){const e=St.getPrimaries(St.workingColorSpace),t=St.getPrimaries(i);let n;switch(e===t?n="":e===Ps&&t===Rs?n="LinearDisplayP3ToLinearSRGB":e===Rs&&t===Ps&&(n="LinearSRGBToLinearDisplayP3"),i){case fi:case zs:return[n,"LinearTransferOETF"];case Ln:case za:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ec(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const c=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+gg(i.getShaderSource(e),c)}else return r}function vg(i,e){const t=_g(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function xg(i,e){let t;switch(e){case Ud:t="Linear";break;case Nd:t="Reinhard";break;case Od:t="Cineon";break;case Cc:t="ACESFilmic";break;case Bd:t="AgX";break;case zd:t="Neutral";break;case Fd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ms=new j;function yg(){St.getLuminanceCoefficients(ms);const i=ms.x.toFixed(4),e=ms.y.toFixed(4),t=ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function Mg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),c=s.name;let u=1;s.type===i.FLOAT_MAT2&&(u=2),s.type===i.FLOAT_MAT3&&(u=3),s.type===i.FLOAT_MAT4&&(u=4),t[c]={type:s.type,location:i.getAttribLocation(e,c),locationSize:u}}return t}function wr(i){return i!==""}function tc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(i){return i.replace(Eg,wg)}const Tg=new Map;function wg(i,e){let t=it[e];if(t===void 0){const n=Tg.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ma(t)}const Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(i){return i.replace(Ag,Cg)}function Cg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rc(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===fd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function Pg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ir:case rr:e="ENVMAP_TYPE_CUBE";break;case Bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rr:e="ENVMAP_MODE_REFRACTION";break}return e}function Lg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ac:e="ENVMAP_BLENDING_MULTIPLY";break;case Ld:e="ENVMAP_BLENDING_MIX";break;case Id:e="ENVMAP_BLENDING_ADD";break}return e}function Ig(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ug(i,e,t,n){const r=i.getContext(),s=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=Rg(t),p=Pg(t),m=Dg(t),g=Lg(t),x=Ig(t),S=Sg(t),w=Mg(s),R=r.createProgram();let _,v,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(wr).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(wr).join(`
`),v.length>0&&(v+=`
`)):(_=[rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),v=[rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?it.tonemapping_pars_fragment:"",t.toneMapping!==ui?xg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,vg("linearToOutputTexel",t.outputColorSpace),yg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),c=Ma(c),c=tc(c,t),c=nc(c,t),u=Ma(u),u=tc(u,t),u=nc(u,t),c=ic(c),u=ic(u),t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",t.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const I=O+_+c,N=O+v+u,$=Ql(r,r.VERTEX_SHADER,I),V=Ql(r,r.FRAGMENT_SHADER,N);r.attachShader(R,$),r.attachShader(R,V),t.index0AttributeName!==void 0?r.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(R,0,"position"),r.linkProgram(R);function A(P){if(i.debug.checkShaderErrors){const te=r.getProgramInfoLog(R).trim(),Q=r.getShaderInfoLog($).trim(),ie=r.getShaderInfoLog(V).trim();let ae=!0,Z=!0;if(r.getProgramParameter(R,r.LINK_STATUS)===!1)if(ae=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,R,$,V);else{const ue=ec(r,$,"vertex"),ne=ec(r,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(R,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+te+`
`+ue+`
`+ne)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(Q===""||ie==="")&&(Z=!1);Z&&(P.diagnostics={runnable:ae,programLog:te,vertexShader:{log:Q,prefix:_},fragmentShader:{log:ie,prefix:v}})}r.deleteShader($),r.deleteShader(V),K=new ws(r,R),xe=bg(r,R)}let K;this.getUniforms=function(){return K===void 0&&A(this),K};let xe;this.getAttributes=function(){return xe===void 0&&A(this),xe};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(R,pg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mg++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=$,this.fragmentShader=V,this}let Ng=0;class Og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Fg(e),t.set(e,n)),n}}class Fg{constructor(e){this.id=Ng++,this.code=e,this.usedTimes=0}}function Bg(i,e,t,n,r,s,c){const u=new Wc,h=new Og,p=new Set,m=[],g=r.logarithmicDepthBuffer,x=r.reverseDepthBuffer,S=r.vertexTextures;let w=r.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return p.add(b),b===0?"uv":`uv${b}`}function v(b,P,te,Q,ie){const ae=Q.fog,Z=ie.geometry,ue=b.isMeshStandardMaterial?Q.environment:null,ne=(b.isMeshStandardMaterial?t:e).get(b.envMap||ue),Se=ne&&ne.mapping===Bs?ne.image.height:null,be=R[b.type];b.precision!==null&&(w=r.getMaxPrecision(b.precision),w!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",w,"instead."));const Oe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ft=Oe!==void 0?Oe.length:0;let _t=0;Z.morphAttributes.position!==void 0&&(_t=1),Z.morphAttributes.normal!==void 0&&(_t=2),Z.morphAttributes.color!==void 0&&(_t=3);let re,me,Ue,Pe;if(be){const kt=In[be];re=kt.vertexShader,me=kt.fragmentShader}else re=b.vertexShader,me=b.fragmentShader,h.update(b),Ue=h.getVertexShaderID(b),Pe=h.getFragmentShaderID(b);const Ze=i.getRenderTarget(),de=ie.isInstancedMesh===!0,ct=ie.isBatchedMesh===!0,pt=!!b.map,at=!!b.matcap,B=!!ne,Ot=!!b.aoMap,tt=!!b.lightMap,nt=!!b.bumpMap,qe=!!b.normalMap,yt=!!b.displacementMap,$e=!!b.emissiveMap,U=!!b.metalnessMap,E=!!b.roughnessMap,W=b.anisotropy>0,oe=b.clearcoat>0,fe=b.dispersion>0,se=b.iridescence>0,Fe=b.sheen>0,Me=b.transmission>0,Re=W&&!!b.anisotropyMap,ht=oe&&!!b.clearcoatMap,_e=oe&&!!b.clearcoatNormalMap,De=oe&&!!b.clearcoatRoughnessMap,Ge=se&&!!b.iridescenceMap,Ye=se&&!!b.iridescenceThicknessMap,Ie=Fe&&!!b.sheenColorMap,ot=Fe&&!!b.sheenRoughnessMap,Je=!!b.specularMap,Mt=!!b.specularColorMap,z=!!b.specularIntensityMap,Ee=Me&&!!b.transmissionMap,J=Me&&!!b.thicknessMap,ce=!!b.gradientMap,Te=!!b.alphaMap,Ce=b.alphaTest>0,lt=!!b.alphaHash,At=!!b.extensions;let zt=ui;b.toneMapped&&(Ze===null||Ze.isXRRenderTarget===!0)&&(zt=i.toneMapping);const mt={shaderID:be,shaderType:b.type,shaderName:b.name,vertexShader:re,fragmentShader:me,defines:b.defines,customVertexShaderID:Ue,customFragmentShaderID:Pe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:w,batching:ct,batchingColor:ct&&ie._colorsTexture!==null,instancing:de,instancingColor:de&&ie.instanceColor!==null,instancingMorph:de&&ie.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Ze===null?i.outputColorSpace:Ze.isXRRenderTarget===!0?Ze.texture.colorSpace:fi,alphaToCoverage:!!b.alphaToCoverage,map:pt,matcap:at,envMap:B,envMapMode:B&&ne.mapping,envMapCubeUVHeight:Se,aoMap:Ot,lightMap:tt,bumpMap:nt,normalMap:qe,displacementMap:S&&yt,emissiveMap:$e,normalMapObjectSpace:qe&&b.normalMapType===Wd,normalMapTangentSpace:qe&&b.normalMapType===Gd,metalnessMap:U,roughnessMap:E,anisotropy:W,anisotropyMap:Re,clearcoat:oe,clearcoatMap:ht,clearcoatNormalMap:_e,clearcoatRoughnessMap:De,dispersion:fe,iridescence:se,iridescenceMap:Ge,iridescenceThicknessMap:Ye,sheen:Fe,sheenColorMap:Ie,sheenRoughnessMap:ot,specularMap:Je,specularColorMap:Mt,specularIntensityMap:z,transmission:Me,transmissionMap:Ee,thicknessMap:J,gradientMap:ce,opaque:b.transparent===!1&&b.blending===Qi&&b.alphaToCoverage===!1,alphaMap:Te,alphaTest:Ce,alphaHash:lt,combine:b.combine,mapUv:pt&&_(b.map.channel),aoMapUv:Ot&&_(b.aoMap.channel),lightMapUv:tt&&_(b.lightMap.channel),bumpMapUv:nt&&_(b.bumpMap.channel),normalMapUv:qe&&_(b.normalMap.channel),displacementMapUv:yt&&_(b.displacementMap.channel),emissiveMapUv:$e&&_(b.emissiveMap.channel),metalnessMapUv:U&&_(b.metalnessMap.channel),roughnessMapUv:E&&_(b.roughnessMap.channel),anisotropyMapUv:Re&&_(b.anisotropyMap.channel),clearcoatMapUv:ht&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:_e&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:ot&&_(b.sheenRoughnessMap.channel),specularMapUv:Je&&_(b.specularMap.channel),specularColorMapUv:Mt&&_(b.specularColorMap.channel),specularIntensityMapUv:z&&_(b.specularIntensityMap.channel),transmissionMapUv:Ee&&_(b.transmissionMap.channel),thicknessMapUv:J&&_(b.thicknessMap.channel),alphaMapUv:Te&&_(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(qe||W),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!Z.attributes.uv&&(pt||Te),fog:!!ae,useFog:b.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:x,skinning:ie.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:_t,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&te.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:pt&&b.map.isVideoTexture===!0&&St.getTransfer(b.map.colorSpace)===wt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Un,flipSided:b.side===nn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:At&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&b.extensions.multiDraw===!0||ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return mt.vertexUv1s=p.has(1),mt.vertexUv2s=p.has(2),mt.vertexUv3s=p.has(3),p.clear(),mt}function O(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const te in b.defines)P.push(te),P.push(b.defines[te]);return b.isRawShaderMaterial===!1&&(I(P,b),N(P,b),P.push(i.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function I(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function N(b,P){u.disableAll(),P.supportsVertexTextures&&u.enable(0),P.instancing&&u.enable(1),P.instancingColor&&u.enable(2),P.instancingMorph&&u.enable(3),P.matcap&&u.enable(4),P.envMap&&u.enable(5),P.normalMapObjectSpace&&u.enable(6),P.normalMapTangentSpace&&u.enable(7),P.clearcoat&&u.enable(8),P.iridescence&&u.enable(9),P.alphaTest&&u.enable(10),P.vertexColors&&u.enable(11),P.vertexAlphas&&u.enable(12),P.vertexUv1s&&u.enable(13),P.vertexUv2s&&u.enable(14),P.vertexUv3s&&u.enable(15),P.vertexTangents&&u.enable(16),P.anisotropy&&u.enable(17),P.alphaHash&&u.enable(18),P.batching&&u.enable(19),P.dispersion&&u.enable(20),P.batchingColor&&u.enable(21),b.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reverseDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.alphaToCoverage&&u.enable(20),b.push(u.mask)}function $(b){const P=R[b.type];let te;if(P){const Q=In[P];te=Is.clone(Q.uniforms)}else te=b.uniforms;return te}function V(b,P){let te;for(let Q=0,ie=m.length;Q<ie;Q++){const ae=m[Q];if(ae.cacheKey===P){te=ae,++te.usedTimes;break}}return te===void 0&&(te=new Ug(i,P,b,s),m.push(te)),te}function A(b){if(--b.usedTimes===0){const P=m.indexOf(b);m[P]=m[m.length-1],m.pop(),b.destroy()}}function K(b){h.remove(b)}function xe(){h.dispose()}return{getParameters:v,getProgramCacheKey:O,getUniforms:$,acquireProgram:V,releaseProgram:A,releaseShaderCache:K,programs:m,dispose:xe}}function zg(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let u=i.get(c);return u===void 0&&(u={},i.set(c,u)),u}function n(c){i.delete(c)}function r(c,u,h){i.get(c)[u]=h}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function kg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function sc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function oc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function c(g,x,S,w,R,_){let v=i[e];return v===void 0?(v={id:g.id,object:g,geometry:x,material:S,groupOrder:w,renderOrder:g.renderOrder,z:R,group:_},i[e]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=S,v.groupOrder=w,v.renderOrder=g.renderOrder,v.z=R,v.group=_),e++,v}function u(g,x,S,w,R,_){const v=c(g,x,S,w,R,_);S.transmission>0?n.push(v):S.transparent===!0?r.push(v):t.push(v)}function h(g,x,S,w,R,_){const v=c(g,x,S,w,R,_);S.transmission>0?n.unshift(v):S.transparent===!0?r.unshift(v):t.unshift(v)}function p(g,x){t.length>1&&t.sort(g||kg),n.length>1&&n.sort(x||sc),r.length>1&&r.sort(x||sc)}function m(){for(let g=e,x=i.length;g<x;g++){const S=i[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:u,unshift:h,finish:m,sort:p}}function Hg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let c;return s===void 0?(c=new oc,i.set(n,[c])):r>=s.length?(c=new oc,s.push(c)):c=s[r],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function Vg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new dt};break;case"SpotLight":t={position:new j,direction:new j,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new j,halfWidth:new j,halfHeight:new j};break}return i[e.id]=t,t}}}function Gg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Wg=0;function Xg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qg(i){const e=new Vg,t=Gg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)n.probe.push(new j);const r=new j,s=new Dt,c=new Dt;function u(p){let m=0,g=0,x=0;for(let xe=0;xe<9;xe++)n.probe[xe].set(0,0,0);let S=0,w=0,R=0,_=0,v=0,O=0,I=0,N=0,$=0,V=0,A=0;p.sort(Xg);for(let xe=0,b=p.length;xe<b;xe++){const P=p[xe],te=P.color,Q=P.intensity,ie=P.distance,ae=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)m+=te.r*Q,g+=te.g*Q,x+=te.b*Q;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(P.sh.coefficients[Z],Q);A++}else if(P.isDirectionalLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ue=P.shadow,ne=t.get(P);ne.shadowIntensity=ue.intensity,ne.shadowBias=ue.bias,ne.shadowNormalBias=ue.normalBias,ne.shadowRadius=ue.radius,ne.shadowMapSize=ue.mapSize,n.directionalShadow[S]=ne,n.directionalShadowMap[S]=ae,n.directionalShadowMatrix[S]=P.shadow.matrix,O++}n.directional[S]=Z,S++}else if(P.isSpotLight){const Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(te).multiplyScalar(Q),Z.distance=ie,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,n.spot[R]=Z;const ue=P.shadow;if(P.map&&(n.spotLightMap[$]=P.map,$++,ue.updateMatrices(P),P.castShadow&&V++),n.spotLightMatrix[R]=ue.matrix,P.castShadow){const ne=t.get(P);ne.shadowIntensity=ue.intensity,ne.shadowBias=ue.bias,ne.shadowNormalBias=ue.normalBias,ne.shadowRadius=ue.radius,ne.shadowMapSize=ue.mapSize,n.spotShadow[R]=ne,n.spotShadowMap[R]=ae,N++}R++}else if(P.isRectAreaLight){const Z=e.get(P);Z.color.copy(te).multiplyScalar(Q),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),n.rectArea[_]=Z,_++}else if(P.isPointLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const ue=P.shadow,ne=t.get(P);ne.shadowIntensity=ue.intensity,ne.shadowBias=ue.bias,ne.shadowNormalBias=ue.normalBias,ne.shadowRadius=ue.radius,ne.shadowMapSize=ue.mapSize,ne.shadowCameraNear=ue.camera.near,ne.shadowCameraFar=ue.camera.far,n.pointShadow[w]=ne,n.pointShadowMap[w]=ae,n.pointShadowMatrix[w]=P.shadow.matrix,I++}n.point[w]=Z,w++}else if(P.isHemisphereLight){const Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(Q),Z.groundColor.copy(P.groundColor).multiplyScalar(Q),n.hemi[v]=Z,v++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=g,n.ambient[2]=x;const K=n.hash;(K.directionalLength!==S||K.pointLength!==w||K.spotLength!==R||K.rectAreaLength!==_||K.hemiLength!==v||K.numDirectionalShadows!==O||K.numPointShadows!==I||K.numSpotShadows!==N||K.numSpotMaps!==$||K.numLightProbes!==A)&&(n.directional.length=S,n.spot.length=R,n.rectArea.length=_,n.point.length=w,n.hemi.length=v,n.directionalShadow.length=O,n.directionalShadowMap.length=O,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=O,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=N+$-V,n.spotLightMap.length=$,n.numSpotLightShadowsWithMaps=V,n.numLightProbes=A,K.directionalLength=S,K.pointLength=w,K.spotLength=R,K.rectAreaLength=_,K.hemiLength=v,K.numDirectionalShadows=O,K.numPointShadows=I,K.numSpotShadows=N,K.numSpotMaps=$,K.numLightProbes=A,n.version=Wg++)}function h(p,m){let g=0,x=0,S=0,w=0,R=0;const _=m.matrixWorldInverse;for(let v=0,O=p.length;v<O;v++){const I=p[v];if(I.isDirectionalLight){const N=n.directional[g];N.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(_),g++}else if(I.isSpotLight){const N=n.spot[S];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(_),N.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(_),S++}else if(I.isRectAreaLight){const N=n.rectArea[w];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(_),c.identity(),s.copy(I.matrixWorld),s.premultiply(_),c.extractRotation(s),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),N.halfWidth.applyMatrix4(c),N.halfHeight.applyMatrix4(c),w++}else if(I.isPointLight){const N=n.point[x];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(_),x++}else if(I.isHemisphereLight){const N=n.hemi[R];N.direction.setFromMatrixPosition(I.matrixWorld),N.direction.transformDirection(_),R++}}}return{setup:u,setupView:h,state:n}}function ac(i){const e=new qg(i),t=[],n=[];function r(m){p.camera=m,t.length=0,n.length=0}function s(m){t.push(m)}function c(m){n.push(m)}function u(){e.setup(t)}function h(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:u,setupLightsView:h,pushLight:s,pushShadow:c}}function Yg(i){let e=new WeakMap;function t(r,s=0){const c=e.get(r);let u;return c===void 0?(u=new ac(i),e.set(r,[u])):s>=c.length?(u=new ac(i),c.push(u)):u=c[s],u}function n(){e=new WeakMap}return{get:t,dispose:n}}class jg extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kg extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jg(i,e,t){let n=new Ha;const r=new st,s=new st,c=new Pt,u=new jg({depthPacking:Vd}),h=new Kg,p={},m=t.maxTextureSize,g={[di]:nn,[nn]:di,[Un]:Un},x=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:$g,fragmentShader:Zg}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new $n;w.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new bn(w,x),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let v=this.type;this.render=function(V,A,K){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||V.length===0)return;const xe=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),te=i.state;te.setBlending(Xn),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const Q=v!==Vn&&this.type===Vn,ie=v===Vn&&this.type!==Vn;for(let ae=0,Z=V.length;ae<Z;ae++){const ue=V[ae],ne=ue.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;r.copy(ne.mapSize);const Se=ne.getFrameExtents();if(r.multiply(Se),s.copy(ne.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(s.x=Math.floor(m/Se.x),r.x=s.x*Se.x,ne.mapSize.x=s.x),r.y>m&&(s.y=Math.floor(m/Se.y),r.y=s.y*Se.y,ne.mapSize.y=s.y)),ne.map===null||Q===!0||ie===!0){const Oe=this.type!==Vn?{minFilter:pn,magFilter:pn}:{};ne.map!==null&&ne.map.dispose(),ne.map=new En(r.x,r.y,Oe),ne.map.texture.name=ue.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();const be=ne.getViewportCount();for(let Oe=0;Oe<be;Oe++){const ft=ne.getViewport(Oe);c.set(s.x*ft.x,s.y*ft.y,s.x*ft.z,s.y*ft.w),te.viewport(c),ne.updateMatrices(ue,Oe),n=ne.getFrustum(),N(A,K,ne.camera,ue,this.type)}ne.isPointLightShadow!==!0&&this.type===Vn&&O(ne,K),ne.needsUpdate=!1}v=this.type,_.needsUpdate=!1,i.setRenderTarget(xe,b,P)};function O(V,A){const K=e.update(R);x.defines.VSM_SAMPLES!==V.blurSamples&&(x.defines.VSM_SAMPLES=V.blurSamples,S.defines.VSM_SAMPLES=V.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new En(r.x,r.y)),x.uniforms.shadow_pass.value=V.map.texture,x.uniforms.resolution.value=V.mapSize,x.uniforms.radius.value=V.radius,i.setRenderTarget(V.mapPass),i.clear(),i.renderBufferDirect(A,null,K,x,R,null),S.uniforms.shadow_pass.value=V.mapPass.texture,S.uniforms.resolution.value=V.mapSize,S.uniforms.radius.value=V.radius,i.setRenderTarget(V.map),i.clear(),i.renderBufferDirect(A,null,K,S,R,null)}function I(V,A,K,xe){let b=null;const P=K.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(P!==void 0)b=P;else if(b=K.isPointLight===!0?h:u,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const te=b.uuid,Q=A.uuid;let ie=p[te];ie===void 0&&(ie={},p[te]=ie);let ae=ie[Q];ae===void 0&&(ae=b.clone(),ie[Q]=ae,A.addEventListener("dispose",$)),b=ae}if(b.visible=A.visible,b.wireframe=A.wireframe,xe===Vn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:g[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,K.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const te=i.properties.get(b);te.light=K}return b}function N(V,A,K,xe,b){if(V.visible===!1)return;if(V.layers.test(A.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&b===Vn)&&(!V.frustumCulled||n.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,V.matrixWorld);const Q=e.update(V),ie=V.material;if(Array.isArray(ie)){const ae=Q.groups;for(let Z=0,ue=ae.length;Z<ue;Z++){const ne=ae[Z],Se=ie[ne.materialIndex];if(Se&&Se.visible){const be=I(V,Se,xe,b);V.onBeforeShadow(i,V,A,K,Q,be,ne),i.renderBufferDirect(K,null,Q,be,V,ne),V.onAfterShadow(i,V,A,K,Q,be,ne)}}}else if(ie.visible){const ae=I(V,ie,xe,b);V.onBeforeShadow(i,V,A,K,Q,ae,null),i.renderBufferDirect(K,null,Q,ae,V,null),V.onAfterShadow(i,V,A,K,Q,ae,null)}}const te=V.children;for(let Q=0,ie=te.length;Q<ie;Q++)N(te[Q],A,K,xe,b)}function $(V){V.target.removeEventListener("dispose",$);for(const K in p){const xe=p[K],b=V.target.uuid;b in xe&&(xe[b].dispose(),delete xe[b])}}}const Qg={[Bo]:zo,[ko]:Go,[Ho]:Wo,[nr]:Vo,[zo]:Bo,[Go]:ko,[Wo]:Ho,[Vo]:nr};function e_(i){function e(){let z=!1;const Ee=new Pt;let J=null;const ce=new Pt(0,0,0,0);return{setMask:function(Te){J!==Te&&!z&&(i.colorMask(Te,Te,Te,Te),J=Te)},setLocked:function(Te){z=Te},setClear:function(Te,Ce,lt,At,zt){zt===!0&&(Te*=At,Ce*=At,lt*=At),Ee.set(Te,Ce,lt,At),ce.equals(Ee)===!1&&(i.clearColor(Te,Ce,lt,At),ce.copy(Ee))},reset:function(){z=!1,J=null,ce.set(-1,0,0,0)}}}function t(){let z=!1,Ee=!1,J=null,ce=null,Te=null;return{setReversed:function(Ce){Ee=Ce},setTest:function(Ce){Ce?Ue(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(Ce){J!==Ce&&!z&&(i.depthMask(Ce),J=Ce)},setFunc:function(Ce){if(Ee&&(Ce=Qg[Ce]),ce!==Ce){switch(Ce){case Bo:i.depthFunc(i.NEVER);break;case zo:i.depthFunc(i.ALWAYS);break;case ko:i.depthFunc(i.LESS);break;case nr:i.depthFunc(i.LEQUAL);break;case Ho:i.depthFunc(i.EQUAL);break;case Vo:i.depthFunc(i.GEQUAL);break;case Go:i.depthFunc(i.GREATER);break;case Wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=Ce}},setLocked:function(Ce){z=Ce},setClear:function(Ce){Te!==Ce&&(i.clearDepth(Ce),Te=Ce)},reset:function(){z=!1,J=null,ce=null,Te=null}}}function n(){let z=!1,Ee=null,J=null,ce=null,Te=null,Ce=null,lt=null,At=null,zt=null;return{setTest:function(mt){z||(mt?Ue(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(mt){Ee!==mt&&!z&&(i.stencilMask(mt),Ee=mt)},setFunc:function(mt,kt,sn){(J!==mt||ce!==kt||Te!==sn)&&(i.stencilFunc(mt,kt,sn),J=mt,ce=kt,Te=sn)},setOp:function(mt,kt,sn){(Ce!==mt||lt!==kt||At!==sn)&&(i.stencilOp(mt,kt,sn),Ce=mt,lt=kt,At=sn)},setLocked:function(mt){z=mt},setClear:function(mt){zt!==mt&&(i.clearStencil(mt),zt=mt)},reset:function(){z=!1,Ee=null,J=null,ce=null,Te=null,Ce=null,lt=null,At=null,zt=null}}}const r=new e,s=new t,c=new n,u=new WeakMap,h=new WeakMap;let p={},m={},g=new WeakMap,x=[],S=null,w=!1,R=null,_=null,v=null,O=null,I=null,N=null,$=null,V=new dt(0,0,0),A=0,K=!1,xe=null,b=null,P=null,te=null,Q=null;const ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,Z=0;const ue=i.getParameter(i.VERSION);ue.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ue)[1]),ae=Z>=1):ue.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),ae=Z>=2);let ne=null,Se={};const be=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),ft=new Pt().fromArray(be),_t=new Pt().fromArray(Oe);function re(z,Ee,J,ce){const Te=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(z,Ce),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let lt=0;lt<J;lt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(Ee+lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return Ce}const me={};me[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),c.setClear(0),Ue(i.DEPTH_TEST),s.setFunc(nr),tt(!1),nt(gl),Ue(i.CULL_FACE),B(Xn);function Ue(z){p[z]!==!0&&(i.enable(z),p[z]=!0)}function Pe(z){p[z]!==!1&&(i.disable(z),p[z]=!1)}function Ze(z,Ee){return m[z]!==Ee?(i.bindFramebuffer(z,Ee),m[z]=Ee,z===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ee),z===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function de(z,Ee){let J=x,ce=!1;if(z){J=g.get(Ee),J===void 0&&(J=[],g.set(Ee,J));const Te=z.textures;if(J.length!==Te.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,lt=Te.length;Ce<lt;Ce++)J[Ce]=i.COLOR_ATTACHMENT0+Ce;J.length=Te.length,ce=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ce=!0);ce&&i.drawBuffers(J)}function ct(z){return S!==z?(i.useProgram(z),S=z,!0):!1}const pt={[Ti]:i.FUNC_ADD,[md]:i.FUNC_SUBTRACT,[gd]:i.FUNC_REVERSE_SUBTRACT};pt[_d]=i.MIN,pt[vd]=i.MAX;const at={[xd]:i.ZERO,[yd]:i.ONE,[Sd]:i.SRC_COLOR,[Oo]:i.SRC_ALPHA,[Ad]:i.SRC_ALPHA_SATURATE,[Td]:i.DST_COLOR,[bd]:i.DST_ALPHA,[Md]:i.ONE_MINUS_SRC_COLOR,[Fo]:i.ONE_MINUS_SRC_ALPHA,[wd]:i.ONE_MINUS_DST_COLOR,[Ed]:i.ONE_MINUS_DST_ALPHA,[Cd]:i.CONSTANT_COLOR,[Rd]:i.ONE_MINUS_CONSTANT_COLOR,[Pd]:i.CONSTANT_ALPHA,[Dd]:i.ONE_MINUS_CONSTANT_ALPHA};function B(z,Ee,J,ce,Te,Ce,lt,At,zt,mt){if(z===Xn){w===!0&&(Pe(i.BLEND),w=!1);return}if(w===!1&&(Ue(i.BLEND),w=!0),z!==pd){if(z!==R||mt!==K){if((_!==Ti||I!==Ti)&&(i.blendEquation(i.FUNC_ADD),_=Ti,I=Ti),mt)switch(z){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case No:i.blendFunc(i.ONE,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case No:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}v=null,O=null,N=null,$=null,V.set(0,0,0),A=0,R=z,K=mt}return}Te=Te||Ee,Ce=Ce||J,lt=lt||ce,(Ee!==_||Te!==I)&&(i.blendEquationSeparate(pt[Ee],pt[Te]),_=Ee,I=Te),(J!==v||ce!==O||Ce!==N||lt!==$)&&(i.blendFuncSeparate(at[J],at[ce],at[Ce],at[lt]),v=J,O=ce,N=Ce,$=lt),(At.equals(V)===!1||zt!==A)&&(i.blendColor(At.r,At.g,At.b,zt),V.copy(At),A=zt),R=z,K=!1}function Ot(z,Ee){z.side===Un?Pe(i.CULL_FACE):Ue(i.CULL_FACE);let J=z.side===nn;Ee&&(J=!J),tt(J),z.blending===Qi&&z.transparent===!1?B(Xn):B(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),r.setMask(z.colorWrite);const ce=z.stencilWrite;c.setTest(ce),ce&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),yt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Ue(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(z){xe!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),xe=z)}function nt(z){z!==dd?(Ue(i.CULL_FACE),z!==b&&(z===gl?i.cullFace(i.BACK):z===hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),b=z}function qe(z){z!==P&&(ae&&i.lineWidth(z),P=z)}function yt(z,Ee,J){z?(Ue(i.POLYGON_OFFSET_FILL),(te!==Ee||Q!==J)&&(i.polygonOffset(Ee,J),te=Ee,Q=J)):Pe(i.POLYGON_OFFSET_FILL)}function $e(z){z?Ue(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function U(z){z===void 0&&(z=i.TEXTURE0+ie-1),ne!==z&&(i.activeTexture(z),ne=z)}function E(z,Ee,J){J===void 0&&(ne===null?J=i.TEXTURE0+ie-1:J=ne);let ce=Se[J];ce===void 0&&(ce={type:void 0,texture:void 0},Se[J]=ce),(ce.type!==z||ce.texture!==Ee)&&(ne!==J&&(i.activeTexture(J),ne=J),i.bindTexture(z,Ee||me[z]),ce.type=z,ce.texture=Ee)}function W(){const z=Se[ne];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Fe(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function De(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ge(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ye(z){ft.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ft.copy(z))}function Ie(z){_t.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),_t.copy(z))}function ot(z,Ee){let J=h.get(Ee);J===void 0&&(J=new WeakMap,h.set(Ee,J));let ce=J.get(z);ce===void 0&&(ce=i.getUniformBlockIndex(Ee,z.name),J.set(z,ce))}function Je(z,Ee){const ce=h.get(Ee).get(z);u.get(Ee)!==ce&&(i.uniformBlockBinding(Ee,ce,z.__bindingPointIndex),u.set(Ee,ce))}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ne=null,Se={},m={},g=new WeakMap,x=[],S=null,w=!1,R=null,_=null,v=null,O=null,I=null,N=null,$=null,V=new dt(0,0,0),A=0,K=!1,xe=null,b=null,P=null,te=null,Q=null,ft.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),c.reset()}return{buffers:{color:r,depth:s,stencil:c},enable:Ue,disable:Pe,bindFramebuffer:Ze,drawBuffers:de,useProgram:ct,setBlending:B,setMaterial:Ot,setFlipSided:tt,setCullFace:nt,setLineWidth:qe,setPolygonOffset:yt,setScissorTest:$e,activeTexture:U,bindTexture:E,unbindTexture:W,compressedTexImage2D:oe,compressedTexImage3D:fe,texImage2D:De,texImage3D:Ge,updateUBOMapping:ot,uniformBlockBinding:Je,texStorage2D:ht,texStorage3D:_e,texSubImage2D:se,texSubImage3D:Fe,compressedTexSubImage2D:Me,compressedTexSubImage3D:Re,scissor:Ye,viewport:Ie,reset:Mt}}function lc(i,e,t,n){const r=t_(n);switch(t){case Ic:return i*e;case Nc:return i*e;case Oc:return i*e*2;case Fc:return i*e/r.components*r.byteLength;case Oa:return i*e/r.components*r.byteLength;case Bc:return i*e*2/r.components*r.byteLength;case Fa:return i*e*2/r.components*r.byteLength;case Uc:return i*e*3/r.components*r.byteLength;case Mn:return i*e*4/r.components*r.byteLength;case Ba:return i*e*4/r.components*r.byteLength;case ys:case Ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ms:case bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $o:case Jo:return Math.max(i,16)*Math.max(e,8)/4;case Ko:case Zo:return Math.max(i,8)*Math.max(e,8)/2;case Qo:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ia:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ra:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case oa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case aa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case la:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ca:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ua:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case da:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ha:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case pa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Es:case ga:case _a:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zc:case va:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xa:case ya:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t_(i){switch(i){case jn:case Pc:return{byteLength:1,components:1};case Pr:case Dc:case qn:return{byteLength:2,components:1};case Ua:case Na:return{byteLength:2,components:4};case Pi:case Ia:case Gn:return{byteLength:4,components:1};case Lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function n_(i,e,t,n,r,s,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new st,m=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(U,E){return S?new OffscreenCanvas(U,E):Ls("canvas")}function R(U,E,W){let oe=1;const fe=$e(U);if((fe.width>W||fe.height>W)&&(oe=W/Math.max(fe.width,fe.height)),oe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const se=Math.floor(oe*fe.width),Fe=Math.floor(oe*fe.height);g===void 0&&(g=w(se,Fe));const Me=E?w(se,Fe):g;return Me.width=se,Me.height=Fe,Me.getContext("2d").drawImage(U,0,0,se,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+se+"x"+Fe+")."),Me}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),U;return U}function _(U){return U.generateMipmaps&&U.minFilter!==pn&&U.minFilter!==yn}function v(U){i.generateMipmap(U)}function O(U,E,W,oe,fe=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let se=E;if(E===i.RED&&(W===i.FLOAT&&(se=i.R32F),W===i.HALF_FLOAT&&(se=i.R16F),W===i.UNSIGNED_BYTE&&(se=i.R8)),E===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(se=i.R8UI),W===i.UNSIGNED_SHORT&&(se=i.R16UI),W===i.UNSIGNED_INT&&(se=i.R32UI),W===i.BYTE&&(se=i.R8I),W===i.SHORT&&(se=i.R16I),W===i.INT&&(se=i.R32I)),E===i.RG&&(W===i.FLOAT&&(se=i.RG32F),W===i.HALF_FLOAT&&(se=i.RG16F),W===i.UNSIGNED_BYTE&&(se=i.RG8)),E===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(se=i.RG8UI),W===i.UNSIGNED_SHORT&&(se=i.RG16UI),W===i.UNSIGNED_INT&&(se=i.RG32UI),W===i.BYTE&&(se=i.RG8I),W===i.SHORT&&(se=i.RG16I),W===i.INT&&(se=i.RG32I)),E===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(se=i.RGB8UI),W===i.UNSIGNED_SHORT&&(se=i.RGB16UI),W===i.UNSIGNED_INT&&(se=i.RGB32UI),W===i.BYTE&&(se=i.RGB8I),W===i.SHORT&&(se=i.RGB16I),W===i.INT&&(se=i.RGB32I)),E===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),W===i.UNSIGNED_INT&&(se=i.RGBA32UI),W===i.BYTE&&(se=i.RGBA8I),W===i.SHORT&&(se=i.RGBA16I),W===i.INT&&(se=i.RGBA32I)),E===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),E===i.RGBA){const Fe=fe?Cs:St.getTransfer(oe);W===i.FLOAT&&(se=i.RGBA32F),W===i.HALF_FLOAT&&(se=i.RGBA16F),W===i.UNSIGNED_BYTE&&(se=Fe===wt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function I(U,E){let W;return U?E===null||E===Pi||E===sr?W=i.DEPTH24_STENCIL8:E===Gn?W=i.DEPTH32F_STENCIL8:E===Pr&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Pi||E===sr?W=i.DEPTH_COMPONENT24:E===Gn?W=i.DEPTH_COMPONENT32F:E===Pr&&(W=i.DEPTH_COMPONENT16),W}function N(U,E){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==pn&&U.minFilter!==yn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function $(U){const E=U.target;E.removeEventListener("dispose",$),A(E),E.isVideoTexture&&m.delete(E)}function V(U){const E=U.target;E.removeEventListener("dispose",V),xe(E)}function A(U){const E=n.get(U);if(E.__webglInit===void 0)return;const W=U.source,oe=x.get(W);if(oe){const fe=oe[E.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&K(U),Object.keys(oe).length===0&&x.delete(W)}n.remove(U)}function K(U){const E=n.get(U);i.deleteTexture(E.__webglTexture);const W=U.source,oe=x.get(W);delete oe[E.__cacheKey],c.memory.textures--}function xe(U){const E=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(E.__webglFramebuffer[oe]))for(let fe=0;fe<E.__webglFramebuffer[oe].length;fe++)i.deleteFramebuffer(E.__webglFramebuffer[oe][fe]);else i.deleteFramebuffer(E.__webglFramebuffer[oe]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[oe])}else{if(Array.isArray(E.__webglFramebuffer))for(let oe=0;oe<E.__webglFramebuffer.length;oe++)i.deleteFramebuffer(E.__webglFramebuffer[oe]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let oe=0;oe<E.__webglColorRenderbuffer.length;oe++)E.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[oe]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=U.textures;for(let oe=0,fe=W.length;oe<fe;oe++){const se=n.get(W[oe]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),c.memory.textures--),n.remove(W[oe])}n.remove(U)}let b=0;function P(){b=0}function te(){const U=b;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),b+=1,U}function Q(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ie(U,E){const W=n.get(U);if(U.isVideoTexture&&qe(U),U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){const oe=U.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(W,U,E);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+E)}function ae(U,E){const W=n.get(U);if(U.version>0&&W.__version!==U.version){_t(W,U,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+E)}function Z(U,E){const W=n.get(U);if(U.version>0&&W.__version!==U.version){_t(W,U,E);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+E)}function ue(U,E){const W=n.get(U);if(U.version>0&&W.__version!==U.version){re(W,U,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+E)}const ne={[Yo]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[jo]:i.MIRRORED_REPEAT},Se={[pn]:i.NEAREST,[kd]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[eo]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},be={[Xd]:i.NEVER,[Zd]:i.ALWAYS,[qd]:i.LESS,[kc]:i.LEQUAL,[Yd]:i.EQUAL,[$d]:i.GEQUAL,[jd]:i.GREATER,[Kd]:i.NOTEQUAL};function Oe(U,E){if(E.type===Gn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===yn||E.magFilter===eo||E.magFilter===Kr||E.magFilter===Ri||E.minFilter===yn||E.minFilter===eo||E.minFilter===Kr||E.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,ne[E.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,ne[E.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,ne[E.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Se[E.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Se[E.minFilter]),E.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===pn||E.minFilter!==Kr&&E.minFilter!==Ri||E.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ft(U,E){let W=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",$));const oe=E.source;let fe=x.get(oe);fe===void 0&&(fe={},x.set(oe,fe));const se=Q(E);if(se!==U.__cacheKey){fe[se]===void 0&&(fe[se]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,W=!0),fe[se].usedTimes++;const Fe=fe[U.__cacheKey];Fe!==void 0&&(fe[U.__cacheKey].usedTimes--,Fe.usedTimes===0&&K(E)),U.__cacheKey=se,U.__webglTexture=fe[se].texture}return W}function _t(U,E,W){let oe=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(oe=i.TEXTURE_3D);const fe=ft(U,E),se=E.source;t.bindTexture(oe,U.__webglTexture,i.TEXTURE0+W);const Fe=n.get(se);if(se.version!==Fe.__version||fe===!0){t.activeTexture(i.TEXTURE0+W);const Me=St.getPrimaries(St.workingColorSpace),Re=E.colorSpace===ci?null:St.getPrimaries(E.colorSpace),ht=E.colorSpace===ci||Me===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let _e=R(E.image,!1,r.maxTextureSize);_e=yt(E,_e);const De=s.convert(E.format,E.colorSpace),Ge=s.convert(E.type);let Ye=O(E.internalFormat,De,Ge,E.colorSpace,E.isVideoTexture);Oe(oe,E);let Ie;const ot=E.mipmaps,Je=E.isVideoTexture!==!0,Mt=Fe.__version===void 0||fe===!0,z=se.dataReady,Ee=N(E,_e);if(E.isDepthTexture)Ye=I(E.format===or,E.type),Mt&&(Je?t.texStorage2D(i.TEXTURE_2D,1,Ye,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,Ye,_e.width,_e.height,0,De,Ge,null));else if(E.isDataTexture)if(ot.length>0){Je&&Mt&&t.texStorage2D(i.TEXTURE_2D,Ee,Ye,ot[0].width,ot[0].height);for(let J=0,ce=ot.length;J<ce;J++)Ie=ot[J],Je?z&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Ie.width,Ie.height,De,Ge,Ie.data):t.texImage2D(i.TEXTURE_2D,J,Ye,Ie.width,Ie.height,0,De,Ge,Ie.data);E.generateMipmaps=!1}else Je?(Mt&&t.texStorage2D(i.TEXTURE_2D,Ee,Ye,_e.width,_e.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,De,Ge,_e.data)):t.texImage2D(i.TEXTURE_2D,0,Ye,_e.width,_e.height,0,De,Ge,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Je&&Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ye,ot[0].width,ot[0].height,_e.depth);for(let J=0,ce=ot.length;J<ce;J++)if(Ie=ot[J],E.format!==Mn)if(De!==null)if(Je){if(z)if(E.layerUpdates.size>0){const Te=lc(Ie.width,Ie.height,E.format,E.type);for(const Ce of E.layerUpdates){const lt=Ie.data.subarray(Ce*Te/Ie.data.BYTES_PER_ELEMENT,(Ce+1)*Te/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Ce,Ie.width,Ie.height,1,De,lt,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Ie.width,Ie.height,_e.depth,De,Ie.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Ye,Ie.width,Ie.height,_e.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Ie.width,Ie.height,_e.depth,De,Ge,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,Ye,Ie.width,Ie.height,_e.depth,0,De,Ge,Ie.data)}else{Je&&Mt&&t.texStorage2D(i.TEXTURE_2D,Ee,Ye,ot[0].width,ot[0].height);for(let J=0,ce=ot.length;J<ce;J++)Ie=ot[J],E.format!==Mn?De!==null?Je?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Ie.width,Ie.height,De,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,J,Ye,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?z&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Ie.width,Ie.height,De,Ge,Ie.data):t.texImage2D(i.TEXTURE_2D,J,Ye,Ie.width,Ie.height,0,De,Ge,Ie.data)}else if(E.isDataArrayTexture)if(Je){if(Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ye,_e.width,_e.height,_e.depth),z)if(E.layerUpdates.size>0){const J=lc(_e.width,_e.height,E.format,E.type);for(const ce of E.layerUpdates){const Te=_e.data.subarray(ce*J/_e.data.BYTES_PER_ELEMENT,(ce+1)*J/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,_e.width,_e.height,1,De,Ge,Te)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,De,Ge,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ye,_e.width,_e.height,_e.depth,0,De,Ge,_e.data);else if(E.isData3DTexture)Je?(Mt&&t.texStorage3D(i.TEXTURE_3D,Ee,Ye,_e.width,_e.height,_e.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,De,Ge,_e.data)):t.texImage3D(i.TEXTURE_3D,0,Ye,_e.width,_e.height,_e.depth,0,De,Ge,_e.data);else if(E.isFramebufferTexture){if(Mt)if(Je)t.texStorage2D(i.TEXTURE_2D,Ee,Ye,_e.width,_e.height);else{let J=_e.width,ce=_e.height;for(let Te=0;Te<Ee;Te++)t.texImage2D(i.TEXTURE_2D,Te,Ye,J,ce,0,De,Ge,null),J>>=1,ce>>=1}}else if(ot.length>0){if(Je&&Mt){const J=$e(ot[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Ye,J.width,J.height)}for(let J=0,ce=ot.length;J<ce;J++)Ie=ot[J],Je?z&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,De,Ge,Ie):t.texImage2D(i.TEXTURE_2D,J,Ye,De,Ge,Ie);E.generateMipmaps=!1}else if(Je){if(Mt){const J=$e(_e);t.texStorage2D(i.TEXTURE_2D,Ee,Ye,J.width,J.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De,Ge,_e)}else t.texImage2D(i.TEXTURE_2D,0,Ye,De,Ge,_e);_(E)&&v(oe),Fe.__version=se.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function re(U,E,W){if(E.image.length!==6)return;const oe=ft(U,E),fe=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+W);const se=n.get(fe);if(fe.version!==se.__version||oe===!0){t.activeTexture(i.TEXTURE0+W);const Fe=St.getPrimaries(St.workingColorSpace),Me=E.colorSpace===ci?null:St.getPrimaries(E.colorSpace),Re=E.colorSpace===ci||Fe===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const ht=E.isCompressedTexture||E.image[0].isCompressedTexture,_e=E.image[0]&&E.image[0].isDataTexture,De=[];for(let ce=0;ce<6;ce++)!ht&&!_e?De[ce]=R(E.image[ce],!0,r.maxCubemapSize):De[ce]=_e?E.image[ce].image:E.image[ce],De[ce]=yt(E,De[ce]);const Ge=De[0],Ye=s.convert(E.format,E.colorSpace),Ie=s.convert(E.type),ot=O(E.internalFormat,Ye,Ie,E.colorSpace),Je=E.isVideoTexture!==!0,Mt=se.__version===void 0||oe===!0,z=fe.dataReady;let Ee=N(E,Ge);Oe(i.TEXTURE_CUBE_MAP,E);let J;if(ht){Je&&Mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,ot,Ge.width,Ge.height);for(let ce=0;ce<6;ce++){J=De[ce].mipmaps;for(let Te=0;Te<J.length;Te++){const Ce=J[Te];E.format!==Mn?Ye!==null?Je?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te,0,0,Ce.width,Ce.height,Ye,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te,ot,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te,0,0,Ce.width,Ce.height,Ye,Ie,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te,ot,Ce.width,Ce.height,0,Ye,Ie,Ce.data)}}}else{if(J=E.mipmaps,Je&&Mt){J.length>0&&Ee++;const ce=$e(De[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,ot,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(_e){Je?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,De[ce].width,De[ce].height,Ye,Ie,De[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ot,De[ce].width,De[ce].height,0,Ye,Ie,De[ce].data);for(let Te=0;Te<J.length;Te++){const lt=J[Te].image[ce].image;Je?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te+1,0,0,lt.width,lt.height,Ye,Ie,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te+1,ot,lt.width,lt.height,0,Ye,Ie,lt.data)}}else{Je?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ye,Ie,De[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ot,Ye,Ie,De[ce]);for(let Te=0;Te<J.length;Te++){const Ce=J[Te];Je?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te+1,0,0,Ye,Ie,Ce.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te+1,ot,Ye,Ie,Ce.image[ce])}}}_(E)&&v(i.TEXTURE_CUBE_MAP),se.__version=fe.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function me(U,E,W,oe,fe,se){const Fe=s.convert(W.format,W.colorSpace),Me=s.convert(W.type),Re=O(W.internalFormat,Fe,Me,W.colorSpace);if(!n.get(E).__hasExternalTextures){const _e=Math.max(1,E.width>>se),De=Math.max(1,E.height>>se);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,se,Re,_e,De,E.depth,0,Fe,Me,null):t.texImage2D(fe,se,Re,_e,De,0,Fe,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),nt(E)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,fe,n.get(W).__webglTexture,0,tt(E)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,fe,n.get(W).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(U,E,W){if(i.bindRenderbuffer(i.RENDERBUFFER,U),E.depthBuffer){const oe=E.depthTexture,fe=oe&&oe.isDepthTexture?oe.type:null,se=I(E.stencilBuffer,fe),Fe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=tt(E);nt(E)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,se,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,se,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,se,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Fe,i.RENDERBUFFER,U)}else{const oe=E.textures;for(let fe=0;fe<oe.length;fe++){const se=oe[fe],Fe=s.convert(se.format,se.colorSpace),Me=s.convert(se.type),Re=O(se.internalFormat,Fe,Me,se.colorSpace),ht=tt(E);W&&nt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Re,E.width,E.height):nt(E)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Re,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Re,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ie(E.depthTexture,0);const oe=n.get(E.depthTexture).__webglTexture,fe=tt(E);if(E.depthTexture.format===er)nt(E)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(E.depthTexture.format===or)nt(E)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ze(U){const E=n.get(U),W=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const oe=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),oe){const fe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,oe.removeEventListener("dispose",fe)};oe.addEventListener("dispose",fe),E.__depthDisposeCallback=fe}E.__boundDepthTexture=oe}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Pe(E.__webglFramebuffer,U)}else if(W){E.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[oe]),E.__webglDepthbuffer[oe]===void 0)E.__webglDepthbuffer[oe]=i.createRenderbuffer(),Ue(E.__webglDepthbuffer[oe],U,!1);else{const fe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,se)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Ue(E.__webglDepthbuffer,U,!1);else{const oe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,fe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(U,E,W){const oe=n.get(U);E!==void 0&&me(oe.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Ze(U)}function ct(U){const E=U.texture,W=n.get(U),oe=n.get(E);U.addEventListener("dispose",V);const fe=U.textures,se=U.isWebGLCubeRenderTarget===!0,Fe=fe.length>1;if(Fe||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=E.version,c.memory.textures++),se){W.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Me]=[];for(let Re=0;Re<E.mipmaps.length;Re++)W.__webglFramebuffer[Me][Re]=i.createFramebuffer()}else W.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Me=0;Me<E.mipmaps.length;Me++)W.__webglFramebuffer[Me]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Fe)for(let Me=0,Re=fe.length;Me<Re;Me++){const ht=n.get(fe[Me]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),c.memory.textures++)}if(U.samples>0&&nt(U)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Me=0;Me<fe.length;Me++){const Re=fe[Me];W.__webglColorRenderbuffer[Me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[Me]);const ht=s.convert(Re.format,Re.colorSpace),_e=s.convert(Re.type),De=O(Re.internalFormat,ht,_e,Re.colorSpace,U.isXRRenderTarget===!0),Ge=tt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,De,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,W.__webglColorRenderbuffer[Me])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(W.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,E);for(let Me=0;Me<6;Me++)if(E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)me(W.__webglFramebuffer[Me][Re],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Re);else me(W.__webglFramebuffer[Me],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);_(E)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let Me=0,Re=fe.length;Me<Re;Me++){const ht=fe[Me],_e=n.get(ht);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),Oe(i.TEXTURE_2D,ht),me(W.__webglFramebuffer,U,ht,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,0),_(ht)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Me=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,oe.__webglTexture),Oe(Me,E),E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)me(W.__webglFramebuffer[Re],U,E,i.COLOR_ATTACHMENT0,Me,Re);else me(W.__webglFramebuffer,U,E,i.COLOR_ATTACHMENT0,Me,0);_(E)&&v(Me),t.unbindTexture()}U.depthBuffer&&Ze(U)}function pt(U){const E=U.textures;for(let W=0,oe=E.length;W<oe;W++){const fe=E[W];if(_(fe)){const se=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Fe=n.get(fe).__webglTexture;t.bindTexture(se,Fe),v(se),t.unbindTexture()}}}const at=[],B=[];function Ot(U){if(U.samples>0){if(nt(U)===!1){const E=U.textures,W=U.width,oe=U.height;let fe=i.COLOR_BUFFER_BIT;const se=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(U),Me=E.length>1;if(Me)for(let Re=0;Re<E.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),Me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Re]);const ht=n.get(E[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ht,0)}i.blitFramebuffer(0,0,W,oe,0,0,W,oe,fe,i.NEAREST),h===!0&&(at.length=0,B.length=0,at.push(i.COLOR_ATTACHMENT0+Re),U.depthBuffer&&U.resolveDepthBuffer===!1&&(at.push(se),B.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Me)for(let Re=0;Re<E.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Re]);const ht=n.get(E[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,ht,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const E=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function tt(U){return Math.min(r.maxSamples,U.samples)}function nt(U){const E=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function qe(U){const E=c.render.frame;m.get(U)!==E&&(m.set(U,E),U.update())}function yt(U,E){const W=U.colorSpace,oe=U.format,fe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||W!==fi&&W!==ci&&(St.getTransfer(W)===wt?(oe!==Mn||fe!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function $e(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=te,this.resetTextureUnits=P,this.setTexture2D=ie,this.setTexture2DArray=ae,this.setTexture3D=Z,this.setTextureCube=ue,this.rebindTextures=de,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=me,this.useMultisampledRTT=nt}function i_(i,e){function t(n,r=ci){let s;const c=St.getTransfer(r);if(n===jn)return i.UNSIGNED_BYTE;if(n===Ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.BYTE;if(n===Dc)return i.SHORT;if(n===Pr)return i.UNSIGNED_SHORT;if(n===Ia)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===qn)return i.HALF_FLOAT;if(n===Ic)return i.ALPHA;if(n===Uc)return i.RGB;if(n===Mn)return i.RGBA;if(n===Nc)return i.LUMINANCE;if(n===Oc)return i.LUMINANCE_ALPHA;if(n===er)return i.DEPTH_COMPONENT;if(n===or)return i.DEPTH_STENCIL;if(n===Fc)return i.RED;if(n===Oa)return i.RED_INTEGER;if(n===Bc)return i.RG;if(n===Fa)return i.RG_INTEGER;if(n===Ba)return i.RGBA_INTEGER;if(n===ys||n===Ss||n===Ms||n===bs)if(c===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ys)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ys)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ms)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ko||n===$o||n===Zo||n===Jo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ko)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$o)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qo||n===ea||n===ta)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Qo||n===ea)return c===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ta)return c===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===na||n===ia||n===ra||n===sa||n===oa||n===aa||n===la||n===ca||n===ua||n===da||n===ha||n===fa||n===pa||n===ma)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===na)return c===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ia)return c===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ra)return c===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sa)return c===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oa)return c===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===aa)return c===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===la)return c===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ca)return c===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ua)return c===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return c===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ha)return c===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fa)return c===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pa)return c===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ma)return c===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Es||n===ga||n===_a)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Es)return c===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ga)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_a)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zc||n===va||n===xa||n===ya)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Es)return s.COMPRESSED_RED_RGTC1_EXT;if(n===va)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ya)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class r_ extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gs extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s_={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,c=null;const u=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const R of e.hand.values()){const _=t.getJointPose(R,n),v=this._getHandJoint(p,R);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const m=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=m.position.distanceTo(g.position),S=.02,w=.005;p.inputState.pinching&&x>S+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(s_)))}return u!==null&&(u.visible=r!==null),h!==null&&(h.visible=s!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const o_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a_=`
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

}`;class l_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new rn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new tn({vertexShader:o_,fragmentShader:a_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bn(new Vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c_ extends cr{constructor(e,t){super();const n=this;let r=null,s=1,c=null,u="local-floor",h=1,p=null,m=null,g=null,x=null,S=null,w=null;const R=new l_,_=t.getContextAttributes();let v=null,O=null;const I=[],N=[],$=new st;let V=null;const A=new fn;A.layers.enable(1),A.viewport=new Pt;const K=new fn;K.layers.enable(2),K.viewport=new Pt;const xe=[A,K],b=new r_;b.layers.enable(1),b.layers.enable(2);let P=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let me=I[re];return me===void 0&&(me=new Do,I[re]=me),me.getTargetRaySpace()},this.getControllerGrip=function(re){let me=I[re];return me===void 0&&(me=new Do,I[re]=me),me.getGripSpace()},this.getHand=function(re){let me=I[re];return me===void 0&&(me=new Do,I[re]=me),me.getHandSpace()};function Q(re){const me=N.indexOf(re.inputSource);if(me===-1)return;const Ue=I[me];Ue!==void 0&&(Ue.update(re.inputSource,re.frame,p||c),Ue.dispatchEvent({type:re.type,data:re.inputSource}))}function ie(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",ae);for(let re=0;re<I.length;re++){const me=N[re];me!==null&&(N[re]=null,I[re].disconnect(me))}P=null,te=null,R.reset(),e.setRenderTarget(v),S=null,x=null,g=null,r=null,O=null,_t.stop(),n.isPresenting=!1,e.setPixelRatio(V),e.setSize($.width,$.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){u=re,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",ae),_.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize($),r.renderState.layers===void 0){const me={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};S=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new En(S.framebufferWidth,S.framebufferHeight,{format:Mn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let me=null,Ue=null,Pe=null;_.depth&&(Pe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=_.stencil?or:er,Ue=_.stencil?sr:Pi);const Ze={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};g=new XRWebGLBinding(r,t),x=g.createProjectionLayer(Ze),r.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new En(x.textureWidth,x.textureHeight,{format:Mn,type:jn,depthTexture:new Jc(x.textureWidth,x.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await r.requestReferenceSpace(u),_t.setContext(r),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ae(re){for(let me=0;me<re.removed.length;me++){const Ue=re.removed[me],Pe=N.indexOf(Ue);Pe>=0&&(N[Pe]=null,I[Pe].disconnect(Ue))}for(let me=0;me<re.added.length;me++){const Ue=re.added[me];let Pe=N.indexOf(Ue);if(Pe===-1){for(let de=0;de<I.length;de++)if(de>=N.length){N.push(Ue),Pe=de;break}else if(N[de]===null){N[de]=Ue,Pe=de;break}if(Pe===-1)break}const Ze=I[Pe];Ze&&Ze.connect(Ue)}}const Z=new j,ue=new j;function ne(re,me,Ue){Z.setFromMatrixPosition(me.matrixWorld),ue.setFromMatrixPosition(Ue.matrixWorld);const Pe=Z.distanceTo(ue),Ze=me.projectionMatrix.elements,de=Ue.projectionMatrix.elements,ct=Ze[14]/(Ze[10]-1),pt=Ze[14]/(Ze[10]+1),at=(Ze[9]+1)/Ze[5],B=(Ze[9]-1)/Ze[5],Ot=(Ze[8]-1)/Ze[0],tt=(de[8]+1)/de[0],nt=ct*Ot,qe=ct*tt,yt=Pe/(-Ot+tt),$e=yt*-Ot;if(me.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX($e),re.translateZ(yt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ze[10]===-1)re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const U=ct+yt,E=pt+yt,W=nt-$e,oe=qe+(Pe-$e),fe=at*pt/E*U,se=B*pt/E*U;re.projectionMatrix.makePerspective(W,oe,fe,se,U,E),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function Se(re,me){me===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(me.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let me=re.near,Ue=re.far;R.texture!==null&&(R.depthNear>0&&(me=R.depthNear),R.depthFar>0&&(Ue=R.depthFar)),b.near=K.near=A.near=me,b.far=K.far=A.far=Ue,(P!==b.near||te!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,te=b.far);const Pe=re.parent,Ze=b.cameras;Se(b,Pe);for(let de=0;de<Ze.length;de++)Se(Ze[de],Pe);Ze.length===2?ne(b,A,K):b.projectionMatrix.copy(A.projectionMatrix),be(re,b,Pe)};function be(re,me,Ue){Ue===null?re.matrix.copy(me.matrixWorld):(re.matrix.copy(Ue.matrixWorld),re.matrix.invert(),re.matrix.multiply(me.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Sa*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(re){h=re,x!==null&&(x.fixedFoveation=re),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=re)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(b)};let Oe=null;function ft(re,me){if(m=me.getViewerPose(p||c),w=me,m!==null){const Ue=m.views;S!==null&&(e.setRenderTargetFramebuffer(O,S.framebuffer),e.setRenderTarget(O));let Pe=!1;Ue.length!==b.cameras.length&&(b.cameras.length=0,Pe=!0);for(let de=0;de<Ue.length;de++){const ct=Ue[de];let pt=null;if(S!==null)pt=S.getViewport(ct);else{const B=g.getViewSubImage(x,ct);pt=B.viewport,de===0&&(e.setRenderTargetTextures(O,B.colorTexture,x.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(O))}let at=xe[de];at===void 0&&(at=new fn,at.layers.enable(de),at.viewport=new Pt,xe[de]=at),at.matrix.fromArray(ct.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(ct.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(pt.x,pt.y,pt.width,pt.height),de===0&&(b.matrix.copy(at.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Pe===!0&&b.cameras.push(at)}const Ze=r.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")){const de=g.getDepthInformation(Ue[0]);de&&de.isValid&&de.texture&&R.init(e,de,r.renderState)}}for(let Ue=0;Ue<I.length;Ue++){const Pe=N[Ue],Ze=I[Ue];Pe!==null&&Ze!==void 0&&Ze.update(Pe,me,p||c)}Oe&&Oe(re,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),w=null}const _t=new Zc;_t.setAnimationLoop(ft),this.setAnimationLoop=function(re){Oe=re},this.dispose=function(){}}}const Mi=new Kn,u_=new Dt;function d_(i,e){function t(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function n(_,v){v.color.getRGB(_.fogColor.value,jc(i)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function r(_,v,O,I,N){v.isMeshBasicMaterial||v.isMeshLambertMaterial?s(_,v):v.isMeshToonMaterial?(s(_,v),g(_,v)):v.isMeshPhongMaterial?(s(_,v),m(_,v)):v.isMeshStandardMaterial?(s(_,v),x(_,v),v.isMeshPhysicalMaterial&&S(_,v,N)):v.isMeshMatcapMaterial?(s(_,v),w(_,v)):v.isMeshDepthMaterial?s(_,v):v.isMeshDistanceMaterial?(s(_,v),R(_,v)):v.isMeshNormalMaterial?s(_,v):v.isLineBasicMaterial?(c(_,v),v.isLineDashedMaterial&&u(_,v)):v.isPointsMaterial?h(_,v,O,I):v.isSpriteMaterial?p(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,t(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===nn&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,t(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===nn&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,t(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,t(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const O=e.get(v),I=O.envMap,N=O.envMapRotation;I&&(_.envMap.value=I,Mi.copy(N),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),_.envMapRotation.value.setFromMatrix4(u_.makeRotationFromEuler(Mi)),_.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,_.aoMapTransform))}function c(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform))}function u(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function h(_,v,O,I){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*O,_.scale.value=I*.5,v.map&&(_.map.value=v.map,t(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function p(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function m(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function g(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function x(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function S(_,v,O){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===nn&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=O.texture,_.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,_.specularIntensityMapTransform))}function w(_,v){v.matcap&&(_.matcap.value=v.matcap)}function R(_,v){const O=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(O.matrixWorld),_.nearDistance.value=O.shadow.camera.near,_.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function h_(i,e,t,n){let r={},s={},c=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(O,I){const N=I.program;n.uniformBlockBinding(O,N)}function p(O,I){let N=r[O.id];N===void 0&&(w(O),N=m(O),r[O.id]=N,O.addEventListener("dispose",_));const $=I.program;n.updateUBOMapping(O,$);const V=e.render.frame;s[O.id]!==V&&(x(O),s[O.id]=V)}function m(O){const I=g();O.__bindingPointIndex=I;const N=i.createBuffer(),$=O.__size,V=O.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,$,V),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,N),N}function g(){for(let O=0;O<u;O++)if(c.indexOf(O)===-1)return c.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const I=r[O.id],N=O.uniforms,$=O.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let V=0,A=N.length;V<A;V++){const K=Array.isArray(N[V])?N[V]:[N[V]];for(let xe=0,b=K.length;xe<b;xe++){const P=K[xe];if(S(P,V,xe,$)===!0){const te=P.__offset,Q=Array.isArray(P.value)?P.value:[P.value];let ie=0;for(let ae=0;ae<Q.length;ae++){const Z=Q[ae],ue=R(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,te+ie,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,ie),ie+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,te,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(O,I,N,$){const V=O.value,A=I+"_"+N;if($[A]===void 0)return typeof V=="number"||typeof V=="boolean"?$[A]=V:$[A]=V.clone(),!0;{const K=$[A];if(typeof V=="number"||typeof V=="boolean"){if(K!==V)return $[A]=V,!0}else if(K.equals(V)===!1)return K.copy(V),!0}return!1}function w(O){const I=O.uniforms;let N=0;const $=16;for(let A=0,K=I.length;A<K;A++){const xe=Array.isArray(I[A])?I[A]:[I[A]];for(let b=0,P=xe.length;b<P;b++){const te=xe[b],Q=Array.isArray(te.value)?te.value:[te.value];for(let ie=0,ae=Q.length;ie<ae;ie++){const Z=Q[ie],ue=R(Z),ne=N%$,Se=ne%ue.boundary,be=ne+Se;N+=Se,be!==0&&$-be<ue.storage&&(N+=$-be),te.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=N,N+=ue.storage}}}const V=N%$;return V>0&&(N+=$-V),O.__size=N,O.__cache={},this}function R(O){const I={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(I.boundary=4,I.storage=4):O.isVector2?(I.boundary=8,I.storage=8):O.isVector3||O.isColor?(I.boundary=16,I.storage=12):O.isVector4?(I.boundary=16,I.storage=16):O.isMatrix3?(I.boundary=48,I.storage=48):O.isMatrix4?(I.boundary=64,I.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),I}function _(O){const I=O.target;I.removeEventListener("dispose",_);const N=c.indexOf(I.__bindingPointIndex);c.splice(N,1),i.deleteBuffer(r[I.id]),delete r[I.id],delete s[I.id]}function v(){for(const O in r)i.deleteBuffer(r[O]);c=[],r={},s={}}return{bind:h,update:p,dispose:v}}class f_{constructor(e={}){const{canvas:t=Qd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=c;const S=new Uint32Array(4),w=new Int32Array(4);let R=null,_=null;const v=[],O=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ln,this.toneMapping=ui,this.toneMappingExposure=1;const I=this;let N=!1,$=0,V=0,A=null,K=-1,xe=null;const b=new Pt,P=new Pt;let te=null;const Q=new dt(0);let ie=0,ae=t.width,Z=t.height,ue=1,ne=null,Se=null;const be=new Pt(0,0,ae,Z),Oe=new Pt(0,0,ae,Z);let ft=!1;const _t=new Ha;let re=!1,me=!1;const Ue=new Dt,Pe=new Dt,Ze=new j,de=new Pt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function at(){return A===null?ue:1}let B=n;function Ot(C,k){return t.getContext(C,k)}try{const C={alpha:!0,depth:r,stencil:s,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${La}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),B===null){const k="webgl2";if(B=Ot(k,C),B===null)throw Ot(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let tt,nt,qe,yt,$e,U,E,W,oe,fe,se,Fe,Me,Re,ht,_e,De,Ge,Ye,Ie,ot,Je,Mt,z;function Ee(){tt=new vm(B),tt.init(),Je=new i_(B,tt),nt=new hm(B,tt,e,Je),qe=new e_(B),nt.reverseDepthBuffer&&qe.buffers.depth.setReversed(!0),yt=new Sm(B),$e=new zg,U=new n_(B,tt,qe,$e,nt,Je,yt),E=new pm(I),W=new _m(I),oe=new Ah(B),Mt=new um(B,oe),fe=new xm(B,oe,yt,Mt),se=new bm(B,fe,oe,yt),Ye=new Mm(B,nt,U),_e=new fm($e),Fe=new Bg(I,E,W,tt,nt,Mt,_e),Me=new d_(I,$e),Re=new Hg,ht=new Yg(tt),Ge=new cm(I,E,W,qe,se,x,h),De=new Jg(I,se,nt),z=new h_(B,yt,nt,qe),Ie=new dm(B,tt,yt),ot=new ym(B,tt,yt),yt.programs=Fe.programs,I.capabilities=nt,I.extensions=tt,I.properties=$e,I.renderLists=Re,I.shadowMap=De,I.state=qe,I.info=yt}Ee();const J=new c_(I,B);this.xr=J,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=tt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=tt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(C){C!==void 0&&(ue=C,this.setSize(ae,Z,!1))},this.getSize=function(C){return C.set(ae,Z)},this.setSize=function(C,k,X=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=C,Z=k,t.width=Math.floor(C*ue),t.height=Math.floor(k*ue),X===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(ae*ue,Z*ue).floor()},this.setDrawingBufferSize=function(C,k,X){ae=C,Z=k,ue=X,t.width=Math.floor(C*X),t.height=Math.floor(k*X),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(be)},this.setViewport=function(C,k,X,q){C.isVector4?be.set(C.x,C.y,C.z,C.w):be.set(C,k,X,q),qe.viewport(b.copy(be).multiplyScalar(ue).round())},this.getScissor=function(C){return C.copy(Oe)},this.setScissor=function(C,k,X,q){C.isVector4?Oe.set(C.x,C.y,C.z,C.w):Oe.set(C,k,X,q),qe.scissor(P.copy(Oe).multiplyScalar(ue).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(C){qe.setScissorTest(ft=C)},this.setOpaqueSort=function(C){ne=C},this.setTransparentSort=function(C){Se=C},this.getClearColor=function(C){return C.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(C=!0,k=!0,X=!0){let q=0;if(C){let G=!1;if(A!==null){const ve=A.texture.format;G=ve===Ba||ve===Fa||ve===Oa}if(G){const ve=A.texture.type,we=ve===jn||ve===Pi||ve===Pr||ve===sr||ve===Ua||ve===Na,Ne=Ge.getClearColor(),Be=Ge.getClearAlpha(),Ve=Ne.r,Xe=Ne.g,ze=Ne.b;we?(S[0]=Ve,S[1]=Xe,S[2]=ze,S[3]=Be,B.clearBufferuiv(B.COLOR,0,S)):(w[0]=Ve,w[1]=Xe,w[2]=ze,w[3]=Be,B.clearBufferiv(B.COLOR,0,w))}else q|=B.COLOR_BUFFER_BIT}k&&(q|=B.DEPTH_BUFFER_BIT,B.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Re.dispose(),ht.dispose(),$e.dispose(),E.dispose(),W.dispose(),se.dispose(),Mt.dispose(),z.dispose(),Fe.dispose(),J.dispose(),J.removeEventListener("sessionstart",Li),J.removeEventListener("sessionend",zr),Nn.stop()};function ce(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=yt.autoReset,k=De.enabled,X=De.autoUpdate,q=De.needsUpdate,G=De.type;Ee(),yt.autoReset=C,De.enabled=k,De.autoUpdate=X,De.needsUpdate=q,De.type=G}function Ce(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function lt(C){const k=C.target;k.removeEventListener("dispose",lt),At(k)}function At(C){zt(C),$e.remove(C)}function zt(C){const k=$e.get(C).programs;k!==void 0&&(k.forEach(function(X){Fe.releaseProgram(X)}),C.isShaderMaterial&&Fe.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,X,q,G,ve){k===null&&(k=ct);const we=G.isMesh&&G.matrixWorld.determinant()<0,Ne=We(C,k,X,q,G);qe.setMaterial(q,we);let Be=X.index,Ve=1;if(q.wireframe===!0){if(Be=fe.getWireframeAttribute(X),Be===void 0)return;Ve=2}const Xe=X.drawRange,ze=X.attributes.position;let vt=Xe.start*Ve,bt=(Xe.start+Xe.count)*Ve;ve!==null&&(vt=Math.max(vt,ve.start*Ve),bt=Math.min(bt,(ve.start+ve.count)*Ve)),Be!==null?(vt=Math.max(vt,0),bt=Math.min(bt,Be.count)):ze!=null&&(vt=Math.max(vt,0),bt=Math.min(bt,ze.count));const Tt=bt-vt;if(Tt<0||Tt===1/0)return;Mt.setup(G,q,Ne,X,Be);let Xt,gt=Ie;if(Be!==null&&(Xt=oe.get(Be),gt=ot,gt.setIndex(Xt)),G.isMesh)q.wireframe===!0?(qe.setLineWidth(q.wireframeLinewidth*at()),gt.setMode(B.LINES)):gt.setMode(B.TRIANGLES);else if(G.isLine){let ke=q.linewidth;ke===void 0&&(ke=1),qe.setLineWidth(ke*at()),G.isLineSegments?gt.setMode(B.LINES):G.isLineLoop?gt.setMode(B.LINE_LOOP):gt.setMode(B.LINE_STRIP)}else G.isPoints?gt.setMode(B.POINTS):G.isSprite&&gt.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)gt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))gt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const ke=G._multiDrawStarts,Lt=G._multiDrawCounts,xt=G._multiDrawCount,on=Be?oe.get(Be).bytesPerElement:1,Zn=$e.get(q).currentProgram.getUniforms();for(let qt=0;qt<xt;qt++)Zn.setValue(B,"_gl_DrawID",qt),gt.render(ke[qt]/on,Lt[qt])}else if(G.isInstancedMesh)gt.renderInstances(vt,Tt,G.count);else if(X.isInstancedBufferGeometry){const ke=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Lt=Math.min(X.instanceCount,ke);gt.renderInstances(vt,Tt,Lt)}else gt.render(vt,Tt)};function mt(C,k,X){C.transparent===!0&&C.side===Un&&C.forceSinglePass===!1?(C.side=nn,C.needsUpdate=!0,Ui(C,k,X),C.side=di,C.needsUpdate=!0,Ui(C,k,X),C.side=Un):Ui(C,k,X)}this.compile=function(C,k,X=null){X===null&&(X=C),_=ht.get(X),_.init(k),O.push(_),X.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),C!==X&&C.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),_.setupLights();const q=new Set;return C.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let we=0;we<ve.length;we++){const Ne=ve[we];mt(Ne,X,G),q.add(Ne)}else mt(ve,X,G),q.add(ve)}),O.pop(),_=null,q},this.compileAsync=function(C,k,X=null){const q=this.compile(C,k,X);return new Promise(G=>{function ve(){if(q.forEach(function(we){$e.get(we).currentProgram.isReady()&&q.delete(we)}),q.size===0){G(C);return}setTimeout(ve,10)}tt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let kt=null;function sn(C){kt&&kt(C)}function Li(){Nn.stop()}function zr(){Nn.start()}const Nn=new Zc;Nn.setAnimationLoop(sn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(C){kt=C,J.setAnimationLoop(C),C===null?Nn.stop():Nn.start()},J.addEventListener("sessionstart",Li),J.addEventListener("sessionend",zr),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(k),k=J.getCamera()),C.isScene===!0&&C.onBeforeRender(I,C,k,A),_=ht.get(C,O.length),_.init(k),O.push(_),Pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),_t.setFromProjectionMatrix(Pe),me=this.localClippingEnabled,re=_e.init(this.clippingPlanes,me),R=Re.get(C,v.length),R.init(),v.push(R),J.enabled===!0&&J.isPresenting===!0){const ve=I.xr.getDepthSensingMesh();ve!==null&&Ii(ve,k,-1/0,I.sortObjects)}Ii(C,k,0,I.sortObjects),R.finish(),I.sortObjects===!0&&R.sort(ne,Se),pt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,pt&&Ge.addToRenderList(R,C),this.info.render.frame++,re===!0&&_e.beginShadows();const X=_.state.shadowsArray;De.render(X,C,k),re===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=R.opaque,G=R.transmissive;if(_.setupLights(),k.isArrayCamera){const ve=k.cameras;if(G.length>0)for(let we=0,Ne=ve.length;we<Ne;we++){const Be=ve[we];Cn(q,G,C,Be)}pt&&Ge.render(C);for(let we=0,Ne=ve.length;we<Ne;we++){const Be=ve[we];dn(R,C,Be,Be.viewport)}}else G.length>0&&Cn(q,G,C,k),pt&&Ge.render(C),dn(R,C,k);A!==null&&(U.updateMultisampleRenderTarget(A),U.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(I,C,k),Mt.resetDefaultState(),K=-1,xe=null,O.pop(),O.length>0?(_=O[O.length-1],re===!0&&_e.setGlobalState(I.clippingPlanes,_.state.camera)):_=null,v.pop(),v.length>0?R=v[v.length-1]:R=null};function Ii(C,k,X,q){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||_t.intersectsSprite(C)){q&&de.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Pe);const we=se.update(C),Ne=C.material;Ne.visible&&R.push(C,we,Ne,X,de.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||_t.intersectsObject(C))){const we=se.update(C),Ne=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),de.copy(C.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),de.copy(we.boundingSphere.center)),de.applyMatrix4(C.matrixWorld).applyMatrix4(Pe)),Array.isArray(Ne)){const Be=we.groups;for(let Ve=0,Xe=Be.length;Ve<Xe;Ve++){const ze=Be[Ve],vt=Ne[ze.materialIndex];vt&&vt.visible&&R.push(C,we,vt,X,de.z,ze)}}else Ne.visible&&R.push(C,we,Ne,X,de.z,null)}}const ve=C.children;for(let we=0,Ne=ve.length;we<Ne;we++)Ii(ve[we],k,X,q)}function dn(C,k,X,q){const G=C.opaque,ve=C.transmissive,we=C.transparent;_.setupLightsView(X),re===!0&&_e.setGlobalState(I.clippingPlanes,X),q&&qe.viewport(b.copy(q)),G.length>0&&Jt(G,k,X),ve.length>0&&Jt(ve,k,X),we.length>0&&Jt(we,k,X),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Cn(C,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[q.id]===void 0&&(_.state.transmissionRenderTarget[q.id]=new En(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?qn:jn,minFilter:Ri,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const ve=_.state.transmissionRenderTarget[q.id],we=q.viewport||b;ve.setSize(we.z,we.w);const Ne=I.getRenderTarget();I.setRenderTarget(ve),I.getClearColor(Q),ie=I.getClearAlpha(),ie<1&&I.setClearColor(16777215,.5),I.clear(),pt&&Ge.render(X);const Be=I.toneMapping;I.toneMapping=ui;const Ve=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),_.setupLightsView(q),re===!0&&_e.setGlobalState(I.clippingPlanes,q),Jt(C,X,q),U.updateMultisampleRenderTarget(ve),U.updateRenderTargetMipmap(ve),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let ze=0,vt=k.length;ze<vt;ze++){const bt=k[ze],Tt=bt.object,Xt=bt.geometry,gt=bt.material,ke=bt.group;if(gt.side===Un&&Tt.layers.test(q.layers)){const Lt=gt.side;gt.side=nn,gt.needsUpdate=!0,kr(Tt,X,q,Xt,gt,ke),gt.side=Lt,gt.needsUpdate=!0,Xe=!0}}Xe===!0&&(U.updateMultisampleRenderTarget(ve),U.updateRenderTargetMipmap(ve))}I.setRenderTarget(Ne),I.setClearColor(Q,ie),Ve!==void 0&&(q.viewport=Ve),I.toneMapping=Be}function Jt(C,k,X){const q=k.isScene===!0?k.overrideMaterial:null;for(let G=0,ve=C.length;G<ve;G++){const we=C[G],Ne=we.object,Be=we.geometry,Ve=q===null?we.material:q,Xe=we.group;Ne.layers.test(X.layers)&&kr(Ne,k,X,Be,Ve,Xe)}}function kr(C,k,X,q,G,ve){C.onBeforeRender(I,k,X,q,G,ve),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(I,k,X,q,C,ve),G.transparent===!0&&G.side===Un&&G.forceSinglePass===!1?(G.side=nn,G.needsUpdate=!0,I.renderBufferDirect(X,k,q,G,C,ve),G.side=di,G.needsUpdate=!0,I.renderBufferDirect(X,k,q,G,C,ve),G.side=Un):I.renderBufferDirect(X,k,q,G,C,ve),C.onAfterRender(I,k,X,q,G,ve)}function Ui(C,k,X){k.isScene!==!0&&(k=ct);const q=$e.get(C),G=_.state.lights,ve=_.state.shadowsArray,we=G.state.version,Ne=Fe.getParameters(C,G.state,ve,k,X),Be=Fe.getProgramCacheKey(Ne);let Ve=q.programs;q.environment=C.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(C.isMeshStandardMaterial?W:E).get(C.envMap||q.environment),q.envMapRotation=q.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Ve===void 0&&(C.addEventListener("dispose",lt),Ve=new Map,q.programs=Ve);let Xe=Ve.get(Be);if(Xe!==void 0){if(q.currentProgram===Xe&&q.lightsStateVersion===we)return mn(C,Ne),Xe}else Ne.uniforms=Fe.getUniforms(C),C.onBeforeCompile(Ne,I),Xe=Fe.acquireProgram(Ne,Be),Ve.set(Be,Xe),q.uniforms=Ne.uniforms;const ze=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ze.clippingPlanes=_e.uniform),mn(C,Ne),q.needsLights=Vr(C),q.lightsStateVersion=we,q.needsLights&&(ze.ambientLightColor.value=G.state.ambient,ze.lightProbe.value=G.state.probe,ze.directionalLights.value=G.state.directional,ze.directionalLightShadows.value=G.state.directionalShadow,ze.spotLights.value=G.state.spot,ze.spotLightShadows.value=G.state.spotShadow,ze.rectAreaLights.value=G.state.rectArea,ze.ltc_1.value=G.state.rectAreaLTC1,ze.ltc_2.value=G.state.rectAreaLTC2,ze.pointLights.value=G.state.point,ze.pointLightShadows.value=G.state.pointShadow,ze.hemisphereLights.value=G.state.hemi,ze.directionalShadowMap.value=G.state.directionalShadowMap,ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ze.spotShadowMap.value=G.state.spotShadowMap,ze.spotLightMatrix.value=G.state.spotLightMatrix,ze.spotLightMap.value=G.state.spotLightMap,ze.pointShadowMap.value=G.state.pointShadowMap,ze.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=Xe,q.uniformsList=null,Xe}function hr(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=ws.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function mn(C,k){const X=$e.get(C);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function We(C,k,X,q,G){k.isScene!==!0&&(k=ct),U.resetTextureUnits();const ve=k.fog,we=q.isMeshStandardMaterial?k.environment:null,Ne=A===null?I.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:fi,Be=(q.isMeshStandardMaterial?W:E).get(q.envMap||we),Ve=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xe=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ze=!!X.morphAttributes.position,vt=!!X.morphAttributes.normal,bt=!!X.morphAttributes.color;let Tt=ui;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Tt=I.toneMapping);const Xt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,gt=Xt!==void 0?Xt.length:0,ke=$e.get(q),Lt=_.state.lights;if(re===!0&&(me===!0||C!==xe)){const Ht=C===xe&&q.id===K;_e.setState(q,C,Ht)}let xt=!1;q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Lt.state.version||ke.outputColorSpace!==Ne||G.isBatchedMesh&&ke.batching===!1||!G.isBatchedMesh&&ke.batching===!0||G.isBatchedMesh&&ke.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ke.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ke.instancing===!1||!G.isInstancedMesh&&ke.instancing===!0||G.isSkinnedMesh&&ke.skinning===!1||!G.isSkinnedMesh&&ke.skinning===!0||G.isInstancedMesh&&ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ke.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ke.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ke.instancingMorph===!1&&G.morphTexture!==null||ke.envMap!==Be||q.fog===!0&&ke.fog!==ve||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==_e.numPlanes||ke.numIntersection!==_e.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==Xe||ke.morphTargets!==ze||ke.morphNormals!==vt||ke.morphColors!==bt||ke.toneMapping!==Tt||ke.morphTargetsCount!==gt)&&(xt=!0):(xt=!0,ke.__version=q.version);let on=ke.currentProgram;xt===!0&&(on=Ui(q,k,G));let Zn=!1,qt=!1,fr=!1;const Ct=on.getUniforms(),an=ke.uniforms;if(qe.useProgram(on.program)&&(Zn=!0,qt=!0,fr=!0),q.id!==K&&(K=q.id,qt=!0),Zn||xe!==C){nt.reverseDepthBuffer?(Ue.copy(C.projectionMatrix),th(Ue),nh(Ue),Ct.setValue(B,"projectionMatrix",Ue)):Ct.setValue(B,"projectionMatrix",C.projectionMatrix),Ct.setValue(B,"viewMatrix",C.matrixWorldInverse);const Ht=Ct.map.cameraPosition;Ht!==void 0&&Ht.setValue(B,Ze.setFromMatrixPosition(C.matrixWorld)),nt.logarithmicDepthBuffer&&Ct.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ct.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),xe!==C&&(xe=C,qt=!0,fr=!0)}if(G.isSkinnedMesh){Ct.setOptional(B,G,"bindMatrix"),Ct.setOptional(B,G,"bindMatrixInverse");const Ht=G.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Ct.setValue(B,"boneTexture",Ht.boneTexture,U))}G.isBatchedMesh&&(Ct.setOptional(B,G,"batchingTexture"),Ct.setValue(B,"batchingTexture",G._matricesTexture,U),Ct.setOptional(B,G,"batchingIdTexture"),Ct.setValue(B,"batchingIdTexture",G._indirectTexture,U),Ct.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&Ct.setValue(B,"batchingColorTexture",G._colorsTexture,U));const Rn=X.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Ye.update(G,X,on),(qt||ke.receiveShadow!==G.receiveShadow)&&(ke.receiveShadow=G.receiveShadow,Ct.setValue(B,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(an.envMap.value=Be,an.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(an.envMapIntensity.value=k.environmentIntensity),qt&&(Ct.setValue(B,"toneMappingExposure",I.toneMappingExposure),ke.needsLights&&Hr(an,fr),ve&&q.fog===!0&&Me.refreshFogUniforms(an,ve),Me.refreshMaterialUniforms(an,q,ue,Z,_.state.transmissionRenderTarget[C.id]),ws.upload(B,hr(ke),an,U)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ws.upload(B,hr(ke),an,U),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ct.setValue(B,"center",G.center),Ct.setValue(B,"modelViewMatrix",G.modelViewMatrix),Ct.setValue(B,"normalMatrix",G.normalMatrix),Ct.setValue(B,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ht=q.uniformsGroups;for(let Jn=0,Pn=Ht.length;Jn<Pn;Jn++){const Qn=Ht[Jn];z.update(Qn,on),z.bind(Qn,on)}}return on}function Hr(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Vr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,k,X){$e.get(C.texture).__webglTexture=k,$e.get(C.depthTexture).__webglTexture=X;const q=$e.get(C);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const X=$e.get(C);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,X=0){A=C,$=k,V=X;let q=!0,G=null,ve=!1,we=!1;if(C){const Be=$e.get(C);if(Be.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(B.FRAMEBUFFER,null),q=!1;else if(Be.__webglFramebuffer===void 0)U.setupRenderTarget(C);else if(Be.__hasExternalTextures)U.rebindTextures(C,$e.get(C.texture).__webglTexture,$e.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ze=C.depthTexture;if(Be.__boundDepthTexture!==ze){if(ze!==null&&$e.has(ze)&&(C.width!==ze.image.width||C.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(C)}}const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(we=!0);const Xe=$e.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xe[k])?G=Xe[k][X]:G=Xe[k],ve=!0):C.samples>0&&U.useMultisampledRTT(C)===!1?G=$e.get(C).__webglMultisampledFramebuffer:Array.isArray(Xe)?G=Xe[X]:G=Xe,b.copy(C.viewport),P.copy(C.scissor),te=C.scissorTest}else b.copy(be).multiplyScalar(ue).floor(),P.copy(Oe).multiplyScalar(ue).floor(),te=ft;if(qe.bindFramebuffer(B.FRAMEBUFFER,G)&&q&&qe.drawBuffers(C,G),qe.viewport(b),qe.scissor(P),qe.setScissorTest(te),ve){const Be=$e.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Be.__webglTexture,X)}else if(we){const Be=$e.get(C.texture),Ve=k||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.__webglTexture,X||0,Ve)}K=-1},this.readRenderTargetPixels=function(C,k,X,q,G,ve,we){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=$e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Ne=Ne[we]),Ne){qe.bindFramebuffer(B.FRAMEBUFFER,Ne);try{const Be=C.texture,Ve=Be.format,Xe=Be.type;if(!nt.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-q&&X>=0&&X<=C.height-G&&B.readPixels(k,X,q,G,Je.convert(Ve),Je.convert(Xe),ve)}finally{const Be=A!==null?$e.get(A).__webglFramebuffer:null;qe.bindFramebuffer(B.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(C,k,X,q,G,ve,we){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=$e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Ne=Ne[we]),Ne){const Be=C.texture,Ve=Be.format,Xe=Be.type;if(!nt.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-q&&X>=0&&X<=C.height-G){qe.bindFramebuffer(B.FRAMEBUFFER,Ne);const ze=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ze),B.bufferData(B.PIXEL_PACK_BUFFER,ve.byteLength,B.STREAM_READ),B.readPixels(k,X,q,G,Je.convert(Ve),Je.convert(Xe),0);const vt=A!==null?$e.get(A).__webglFramebuffer:null;qe.bindFramebuffer(B.FRAMEBUFFER,vt);const bt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await eh(B,bt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ze),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ve),B.deleteBuffer(ze),B.deleteSync(bt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,k=null,X=0){C.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);const q=Math.pow(2,-X),G=Math.floor(C.image.width*q),ve=Math.floor(C.image.height*q),we=k!==null?k.x:0,Ne=k!==null?k.y:0;U.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,we,Ne,G,ve),qe.unbindTexture()},this.copyTextureToTexture=function(C,k,X=null,q=null,G=0){C.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,C=arguments[1],k=arguments[2],G=arguments[3]||0,X=null);let ve,we,Ne,Be,Ve,Xe;X!==null?(ve=X.max.x-X.min.x,we=X.max.y-X.min.y,Ne=X.min.x,Be=X.min.y):(ve=C.image.width,we=C.image.height,Ne=0,Be=0),q!==null?(Ve=q.x,Xe=q.y):(Ve=0,Xe=0);const ze=Je.convert(k.format),vt=Je.convert(k.type);U.setTexture2D(k,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const bt=B.getParameter(B.UNPACK_ROW_LENGTH),Tt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Xt=B.getParameter(B.UNPACK_SKIP_PIXELS),gt=B.getParameter(B.UNPACK_SKIP_ROWS),ke=B.getParameter(B.UNPACK_SKIP_IMAGES),Lt=C.isCompressedTexture?C.mipmaps[G]:C.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Lt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Lt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ne),B.pixelStorei(B.UNPACK_SKIP_ROWS,Be),C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,G,Ve,Xe,ve,we,ze,vt,Lt.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,G,Ve,Xe,Lt.width,Lt.height,ze,Lt.data):B.texSubImage2D(B.TEXTURE_2D,G,Ve,Xe,ve,we,ze,vt,Lt),B.pixelStorei(B.UNPACK_ROW_LENGTH,bt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Tt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Xt),B.pixelStorei(B.UNPACK_SKIP_ROWS,gt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ke),G===0&&k.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),qe.unbindTexture()},this.copyTextureToTexture3D=function(C,k,X=null,q=null,G=0){C.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,C=arguments[2],k=arguments[3],G=arguments[4]||0);let ve,we,Ne,Be,Ve,Xe,ze,vt,bt;const Tt=C.isCompressedTexture?C.mipmaps[G]:C.image;X!==null?(ve=X.max.x-X.min.x,we=X.max.y-X.min.y,Ne=X.max.z-X.min.z,Be=X.min.x,Ve=X.min.y,Xe=X.min.z):(ve=Tt.width,we=Tt.height,Ne=Tt.depth,Be=0,Ve=0,Xe=0),q!==null?(ze=q.x,vt=q.y,bt=q.z):(ze=0,vt=0,bt=0);const Xt=Je.convert(k.format),gt=Je.convert(k.type);let ke;if(k.isData3DTexture)U.setTexture3D(k,0),ke=B.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)U.setTexture2DArray(k,0),ke=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const Lt=B.getParameter(B.UNPACK_ROW_LENGTH),xt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),on=B.getParameter(B.UNPACK_SKIP_PIXELS),Zn=B.getParameter(B.UNPACK_SKIP_ROWS),qt=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Tt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Tt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Be),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ve),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xe),C.isDataTexture||C.isData3DTexture?B.texSubImage3D(ke,G,ze,vt,bt,ve,we,Ne,Xt,gt,Tt.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(ke,G,ze,vt,bt,ve,we,Ne,Xt,Tt.data):B.texSubImage3D(ke,G,ze,vt,bt,ve,we,Ne,Xt,gt,Tt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Lt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,on),B.pixelStorei(B.UNPACK_SKIP_ROWS,Zn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,qt),G===0&&k.generateMipmaps&&B.generateMipmap(ke),qe.unbindTexture()},this.initRenderTarget=function(C){$e.get(C).__webglFramebuffer===void 0&&U.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?U.setTextureCube(C,0):C.isData3DTexture?U.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?U.setTexture2DArray(C,0):U.setTexture2D(C,0),qe.unbindTexture()},this.resetState=function(){$=0,V=0,A=null,qe.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===za?"display-p3":"srgb",t.unpackColorSpace=St.workingColorSpace===zs?"display-p3":"srgb"}}class p_ extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class m_ extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Lo=new Dt,cc=new j,uc=new j;class g_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ha,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cc.setFromMatrixPosition(e.matrixWorld),t.position.copy(cc),uc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uc),t.updateMatrixWorld(),Lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class __ extends g_{constructor(){super(new Va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class v_ extends m_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new __}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class x_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=dc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function dc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:La}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=La);function y_(i){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=i,document.head.appendChild(e),i}}function Ji(i,e){var t=i.__state.conversionName.toString(),n=Math.round(i.r),r=Math.round(i.g),s=Math.round(i.b),c=i.a,u=Math.round(i.h),h=i.s.toFixed(1),p=i.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var m=i.hex.toString(16);m.length<6;)m="0"+m;return"#"+m}else{if(t==="CSS_RGB")return"rgb("+n+","+r+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+r+","+s+","+c+")";if(t==="HEX")return"0x"+i.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+r+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+r+","+s+","+c+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+r+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+r+",b:"+s+",a:"+c+"}";if(t==="HSV_OBJ")return"{h:"+u+",s:"+h+",v:"+p+"}";if(t==="HSVA_OBJ")return"{h:"+u+",s:"+h+",v:"+p+",a:"+c+"}"}return"unknown format"}var hc=Array.prototype.forEach,Er=Array.prototype.slice,le={BREAK:{},extend:function(e){return this.each(Er.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(r){this.isUndefined(t[r])||(e[r]=t[r])}).bind(this))},this),e},defaults:function(e){return this.each(Er.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(r){this.isUndefined(e[r])&&(e[r]=t[r])}).bind(this))},this),e},compose:function(){var e=Er.call(arguments);return function(){for(var t=Er.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(hc&&e.forEach&&e.forEach===hc)e.forEach(t,n);else if(e.length===e.length+0){var r=void 0,s=void 0;for(r=0,s=e.length;r<s;r++)if(r in e&&t.call(n,e[r],r)===this.BREAK)return}else for(var c in e)if(t.call(n,e[c],c)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var r=void 0;return function(){var s=this,c=arguments;function u(){r=null,n||e.apply(s,c)}var h=n||!r;clearTimeout(r),r=setTimeout(u,t),h&&e.apply(s,c)}},toArray:function(e){return e.toArray?e.toArray():Er.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(i){function e(t){return i.apply(this,arguments)}return e.toString=function(){return i.toString()},e}(function(i){return isNaN(i)}),isArray:Array.isArray||function(i){return i.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},S_=[{litmus:le.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:Ji},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:Ji},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:Ji},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:Ji}}},{litmus:le.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:le.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:le.isObject,conversions:{RGBA_OBJ:{read:function(e){return le.isNumber(e.r)&&le.isNumber(e.g)&&le.isNumber(e.b)&&le.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return le.isNumber(e.r)&&le.isNumber(e.g)&&le.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return le.isNumber(e.h)&&le.isNumber(e.s)&&le.isNumber(e.v)&&le.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return le.isNumber(e.h)&&le.isNumber(e.s)&&le.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Tr=void 0,_s=void 0,ba=function(){_s=!1;var e=arguments.length>1?le.toArray(arguments):arguments[0];return le.each(S_,function(t){if(t.litmus(e))return le.each(t.conversions,function(n,r){if(Tr=n.read(e),_s===!1&&Tr!==!1)return _s=Tr,Tr.conversionName=r,Tr.conversion=n,le.BREAK}),le.BREAK}),_s},fc=void 0,Us={hsv_to_rgb:function(e,t,n){var r=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),c=n*(1-t),u=n*(1-s*t),h=n*(1-(1-s)*t),p=[[n,h,c],[u,n,c],[c,n,h],[c,u,n],[h,c,n],[n,c,u]][r];return{r:p[0]*255,g:p[1]*255,b:p[2]*255}},rgb_to_hsv:function(e,t,n){var r=Math.min(e,t,n),s=Math.max(e,t,n),c=s-r,u=void 0,h=void 0;if(s!==0)h=c/s;else return{h:NaN,s:0,v:0};return e===s?u=(t-n)/c:t===s?u=2+(n-e)/c:u=4+(e-t)/c,u/=6,u<0&&(u+=1),{h:u*360,s:h,v:s/255}},rgb_to_hex:function(e,t,n){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,t),r=this.hex_with_component(r,0,n),r},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(fc=t*8)|e&~(255<<fc)}},M_=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},wn=function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")},An=function(){function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),hi=function i(e,t,n){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(r===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:i(s,t,n)}else{if("value"in r)return r.value;var c=r.get;return c===void 0?void 0:c.call(n)}},pi=function(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)},mi=function(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:i},Bt=function(){function i(){if(wn(this,i),this.__state=ba.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return An(i,[{key:"toString",value:function(){return Ji(this)}},{key:"toHexString",value:function(){return Ji(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),i}();function Wa(i,e,t){Object.defineProperty(i,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Bt.recalculateRGB(this,e,t),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(Bt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=r}})}function Xa(i,e){Object.defineProperty(i,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Bt.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(Bt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}Bt.recalculateRGB=function(i,e,t){if(i.__state.space==="HEX")i.__state[e]=Us.component_from_hex(i.__state.hex,t);else if(i.__state.space==="HSV")le.extend(i.__state,Us.hsv_to_rgb(i.__state.h,i.__state.s,i.__state.v));else throw new Error("Corrupted color state")};Bt.recalculateHSV=function(i){var e=Us.rgb_to_hsv(i.r,i.g,i.b);le.extend(i.__state,{s:e.s,v:e.v}),le.isNaN(e.h)?le.isUndefined(i.__state.h)&&(i.__state.h=0):i.__state.h=e.h};Bt.COMPONENTS=["r","g","b","h","s","v","hex","a"];Wa(Bt.prototype,"r",2);Wa(Bt.prototype,"g",1);Wa(Bt.prototype,"b",0);Xa(Bt.prototype,"h");Xa(Bt.prototype,"s");Xa(Bt.prototype,"v");Object.defineProperty(Bt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Bt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Us.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Di=function(){function i(e,t){wn(this,i),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return An(i,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),i}(),b_={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},iu={};le.each(b_,function(i,e){le.each(i,function(t){iu[t]=e})});var E_=/(\d+(\.\d+)?)px/;function Dn(i){if(i==="0"||le.isUndefined(i))return 0;var e=i.match(E_);return le.isNull(e)?0:parseFloat(e[1])}var Y={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var r=n,s=t;le.isUndefined(s)&&(s=!0),le.isUndefined(r)&&(r=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,r){var s=n||{},c=iu[t];if(!c)throw new Error("Event type "+t+" not supported.");var u=document.createEvent(c);switch(c){case"MouseEvents":{var h=s.x||s.clientX||0,p=s.y||s.clientY||0;u.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,h,p,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var m=u.initKeyboardEvent||u.initKeyEvent;le.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),m(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{u.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}le.defaults(u,r),e.dispatchEvent(u)},bind:function(e,t,n,r){var s=r||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),Y},unbind:function(e,t,n,r){var s=r||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),Y},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return Y},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),r=n.indexOf(t);r!==-1&&(n.splice(r,1),e.className=n.join(" "))}else e.className=void 0;return Y},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Dn(t["border-left-width"])+Dn(t["border-right-width"])+Dn(t["padding-left"])+Dn(t["padding-right"])+Dn(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Dn(t["border-top-width"])+Dn(t["border-bottom-width"])+Dn(t["padding-top"])+Dn(t["padding-bottom"])+Dn(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},ru=function(i){pi(e,i);function e(t,n){wn(this,e);var r=mi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function c(){s.setValue(!s.__prev)}return Y.bind(r.__checkbox,"change",c,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return An(e,[{key:"setValue",value:function(n){var r=hi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),hi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Di),T_=function(i){pi(e,i);function e(t,n,r){wn(this,e);var s=mi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),c=r,u=s;if(s.__select=document.createElement("select"),le.isArray(c)){var h={};le.each(c,function(p){h[p]=p}),c=h}return le.each(c,function(p,m){var g=document.createElement("option");g.innerHTML=m,g.setAttribute("value",p),u.__select.appendChild(g)}),s.updateDisplay(),Y.bind(s.__select,"change",function(){var p=this.options[this.selectedIndex].value;u.setValue(p)}),s.domElement.appendChild(s.__select),s}return An(e,[{key:"setValue",value:function(n){var r=hi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return Y.isActive(this.__select)?this:(this.__select.value=this.getValue(),hi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Di),w_=function(i){pi(e,i);function e(t,n){wn(this,e);var r=mi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=r;function c(){s.setValue(s.__input.value)}function u(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),Y.bind(r.__input,"keyup",c),Y.bind(r.__input,"change",c),Y.bind(r.__input,"blur",u),Y.bind(r.__input,"keydown",function(h){h.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return An(e,[{key:"updateDisplay",value:function(){return Y.isActive(this.__input)||(this.__input.value=this.getValue()),hi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Di);function pc(i){var e=i.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var su=function(i){pi(e,i);function e(t,n,r){wn(this,e);var s=mi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),c=r||{};return s.__min=c.min,s.__max=c.max,s.__step=c.step,le.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=pc(s.__impliedStep),s}return An(e,[{key:"setValue",value:function(n){var r=n;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),hi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=pc(n),this}}]),e}(Di);function A_(i,e){var t=Math.pow(10,e);return Math.round(i*t)/t}var Ns=function(i){pi(e,i);function e(t,n,r){wn(this,e);var s=mi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,r));s.__truncationSuspended=!1;var c=s,u=void 0;function h(){var w=parseFloat(c.__input.value);le.isNaN(w)||c.setValue(w)}function p(){c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}function m(){p()}function g(w){var R=u-w.clientY;c.setValue(c.getValue()+R*c.__impliedStep),u=w.clientY}function x(){Y.unbind(window,"mousemove",g),Y.unbind(window,"mouseup",x),p()}function S(w){Y.bind(window,"mousemove",g),Y.bind(window,"mouseup",x),u=w.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),Y.bind(s.__input,"change",h),Y.bind(s.__input,"blur",m),Y.bind(s.__input,"mousedown",S),Y.bind(s.__input,"keydown",function(w){w.keyCode===13&&(c.__truncationSuspended=!0,this.blur(),c.__truncationSuspended=!1,p())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return An(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():A_(this.getValue(),this.__precision),hi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(su);function mc(i,e,t,n,r){return n+(r-n)*((i-e)/(t-e))}var Ea=function(i){pi(e,i);function e(t,n,r,s,c){wn(this,e);var u=mi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:r,max:s,step:c})),h=u;u.__background=document.createElement("div"),u.__foreground=document.createElement("div"),Y.bind(u.__background,"mousedown",p),Y.bind(u.__background,"touchstart",x),Y.addClass(u.__background,"slider"),Y.addClass(u.__foreground,"slider-fg");function p(R){document.activeElement.blur(),Y.bind(window,"mousemove",m),Y.bind(window,"mouseup",g),m(R)}function m(R){R.preventDefault();var _=h.__background.getBoundingClientRect();return h.setValue(mc(R.clientX,_.left,_.right,h.__min,h.__max)),!1}function g(){Y.unbind(window,"mousemove",m),Y.unbind(window,"mouseup",g),h.__onFinishChange&&h.__onFinishChange.call(h,h.getValue())}function x(R){R.touches.length===1&&(Y.bind(window,"touchmove",S),Y.bind(window,"touchend",w),S(R))}function S(R){var _=R.touches[0].clientX,v=h.__background.getBoundingClientRect();h.setValue(mc(_,v.left,v.right,h.__min,h.__max))}function w(){Y.unbind(window,"touchmove",S),Y.unbind(window,"touchend",w),h.__onFinishChange&&h.__onFinishChange.call(h,h.getValue())}return u.updateDisplay(),u.__background.appendChild(u.__foreground),u.domElement.appendChild(u.__background),u}return An(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",hi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(su),ou=function(i){pi(e,i);function e(t,n,r){wn(this,e);var s=mi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),c=s;return s.__button=document.createElement("div"),s.__button.innerHTML=r===void 0?"Fire":r,Y.bind(s.__button,"click",function(u){return u.preventDefault(),c.fire(),!1}),Y.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return An(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Di),Ta=function(i){pi(e,i);function e(t,n){wn(this,e);var r=mi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));r.__color=new Bt(r.getValue()),r.__temp=new Bt(0);var s=r;r.domElement=document.createElement("div"),Y.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",Y.bind(r.__input,"keydown",function(R){R.keyCode===13&&g.call(this)}),Y.bind(r.__input,"blur",g),Y.bind(r.__selector,"mousedown",function(){Y.addClass(this,"drag").bind(window,"mouseup",function(){Y.removeClass(s.__selector,"drag")})}),Y.bind(r.__selector,"touchstart",function(){Y.addClass(this,"drag").bind(window,"touchend",function(){Y.removeClass(s.__selector,"drag")})});var c=document.createElement("div");le.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),le.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),le.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),le.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),le.extend(c.style,{width:"100%",height:"100%",background:"none"}),gc(c,"top","rgba(0,0,0,0)","#000"),le.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),R_(r.__hue_field),le.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),Y.bind(r.__saturation_field,"mousedown",u),Y.bind(r.__saturation_field,"touchstart",u),Y.bind(r.__field_knob,"mousedown",u),Y.bind(r.__field_knob,"touchstart",u),Y.bind(r.__hue_field,"mousedown",h),Y.bind(r.__hue_field,"touchstart",h);function u(R){S(R),Y.bind(window,"mousemove",S),Y.bind(window,"touchmove",S),Y.bind(window,"mouseup",p),Y.bind(window,"touchend",p)}function h(R){w(R),Y.bind(window,"mousemove",w),Y.bind(window,"touchmove",w),Y.bind(window,"mouseup",m),Y.bind(window,"touchend",m)}function p(){Y.unbind(window,"mousemove",S),Y.unbind(window,"touchmove",S),Y.unbind(window,"mouseup",p),Y.unbind(window,"touchend",p),x()}function m(){Y.unbind(window,"mousemove",w),Y.unbind(window,"touchmove",w),Y.unbind(window,"mouseup",m),Y.unbind(window,"touchend",m),x()}function g(){var R=ba(this.value);R!==!1?(s.__color.__state=R,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function x(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}r.__saturation_field.appendChild(c),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function S(R){R.type.indexOf("touch")===-1&&R.preventDefault();var _=s.__saturation_field.getBoundingClientRect(),v=R.touches&&R.touches[0]||R,O=v.clientX,I=v.clientY,N=(O-_.left)/(_.right-_.left),$=1-(I-_.top)/(_.bottom-_.top);return $>1?$=1:$<0&&($=0),N>1?N=1:N<0&&(N=0),s.__color.v=$,s.__color.s=N,s.setValue(s.__color.toOriginal()),!1}function w(R){R.type.indexOf("touch")===-1&&R.preventDefault();var _=s.__hue_field.getBoundingClientRect(),v=R.touches&&R.touches[0]||R,O=v.clientY,I=1-(O-_.top)/(_.bottom-_.top);return I>1?I=1:I<0&&(I=0),s.__color.h=I*360,s.setValue(s.__color.toOriginal()),!1}return r}return An(e,[{key:"updateDisplay",value:function(){var n=ba(this.getValue());if(n!==!1){var r=!1;le.each(Bt.COMPONENTS,function(u){if(!le.isUndefined(n[u])&&!le.isUndefined(this.__color.__state[u])&&n[u]!==this.__color.__state[u])return r=!0,{}},this),r&&le.extend(this.__color.__state,n)}le.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,c=255-s;le.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,gc(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),le.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+c+","+c+","+c+",.7)"})}}]),e}(Di),C_=["-moz-","-o-","-webkit-","-ms-",""];function gc(i,e,t,n){i.style.background="",le.each(C_,function(r){i.style.cssText+="background: "+r+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function R_(i){i.style.background="",i.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",i.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var P_={load:function(e,t){var n=t||document,r=n.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,n.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,t){var n=t||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(r)}catch{}}},D_=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,L_=function(e,t){var n=e[t];return le.isArray(arguments[2])||le.isObject(arguments[2])?new T_(e,t,arguments[2]):le.isNumber(n)?le.isNumber(arguments[2])&&le.isNumber(arguments[3])?le.isNumber(arguments[4])?new Ea(e,t,arguments[2],arguments[3],arguments[4]):new Ea(e,t,arguments[2],arguments[3]):le.isNumber(arguments[4])?new Ns(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Ns(e,t,{min:arguments[2],max:arguments[3]}):le.isString(n)?new w_(e,t):le.isFunction(n)?new ou(e,t,""):le.isBoolean(n)?new ru(e,t):null};function I_(i){setTimeout(i,1e3/60)}var U_=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||I_,N_=function(){function i(){wn(this,i),this.backgroundElement=document.createElement("div"),le.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),Y.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),le.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;Y.bind(this.backgroundElement,"click",function(){e.hide()})}return An(i,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),le.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function r(){t.domElement.style.display="none",t.backgroundElement.style.display="none",Y.unbind(t.domElement,"webkitTransitionEnd",r),Y.unbind(t.domElement,"transitionend",r),Y.unbind(t.domElement,"oTransitionEnd",r)};Y.bind(this.domElement,"webkitTransitionEnd",n),Y.bind(this.domElement,"transitionend",n),Y.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-Y.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-Y.getHeight(this.domElement)/2+"px"}}]),i}(),O_=y_(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);P_.inject(O_);var _c="dg",vc=72,xc=20,Dr="Default",Ar=function(){try{return!!window.localStorage}catch{return!1}}(),Cr=void 0,yc=!0,Ki=void 0,Io=!1,au=[],Et=function i(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),Y.addClass(this.domElement,_c),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=le.defaults(n,{closeOnTop:!1,autoPlace:!0,width:i.DEFAULT_WIDTH}),n=le.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),le.isUndefined(n.load)?n.load={preset:Dr}:n.preset&&(n.load.preset=n.preset),le.isUndefined(n.parent)&&n.hideable&&au.push(this),n.resizable=le.isUndefined(n.parent)&&n.resizable,n.autoPlace&&le.isUndefined(n.scrollable)&&(n.scrollable=!0);var r=Ar&&localStorage.getItem($i(this,"isLocal"))==="true",s=void 0,c=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(x){t.parent?t.getRoot().preset=x:n.load.preset=x,k_(this),t.revert()}},width:{get:function(){return n.width},set:function(x){n.width=x,Ca(t,x)}},name:{get:function(){return n.name},set:function(x){n.name=x,c&&(c.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(x){n.closed=x,n.closed?Y.addClass(t.__ul,i.CLASS_CLOSED):Y.removeClass(t.__ul,i.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=x?i.TEXT_OPEN:i.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return r},set:function(x){Ar&&(r=x,x?Y.bind(window,"unload",s):Y.unbind(window,"unload",s),localStorage.setItem($i(t,"isLocal"),x))}}}),le.isUndefined(n.parent)){if(this.closed=n.closed||!1,Y.addClass(this.domElement,i.CLASS_MAIN),Y.makeSelectable(this.domElement,!1),Ar&&r){t.useLocalStorage=!0;var u=localStorage.getItem($i(this,"gui"));u&&(n.load=JSON.parse(u))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=i.TEXT_CLOSED,Y.addClass(this.__closeButton,i.CLASS_CLOSE_BUTTON),n.closeOnTop?(Y.addClass(this.__closeButton,i.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(Y.addClass(this.__closeButton,i.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),Y.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var h=document.createTextNode(n.name);Y.addClass(h,"controller-name"),c=qa(t,h);var p=function(x){return x.preventDefault(),t.closed=!t.closed,!1};Y.addClass(this.__ul,i.CLASS_CLOSED),Y.addClass(c,"title"),Y.bind(c,"click",p),n.closed||(this.closed=!1)}n.autoPlace&&(le.isUndefined(n.parent)&&(yc&&(Ki=document.createElement("div"),Y.addClass(Ki,_c),Y.addClass(Ki,i.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Ki),yc=!1),Ki.appendChild(this.domElement),Y.addClass(this.domElement,i.CLASS_AUTO_PLACE)),this.parent||Ca(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},Y.bind(window,"resize",this.__resizeHandler),Y.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),Y.bind(this.__ul,"transitionend",this.__resizeHandler),Y.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&z_(this),s=function(){Ar&&localStorage.getItem($i(t,"isLocal"))==="true"&&localStorage.setItem($i(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function m(){var g=t.getRoot();g.width+=1,le.defer(function(){g.width-=1})}n.parent||m()};Et.toggleHide=function(){Io=!Io,le.each(au,function(i){i.domElement.style.display=Io?"none":""})};Et.CLASS_AUTO_PLACE="a";Et.CLASS_AUTO_PLACE_CONTAINER="ac";Et.CLASS_MAIN="main";Et.CLASS_CONTROLLER_ROW="cr";Et.CLASS_TOO_TALL="taller-than-window";Et.CLASS_CLOSED="closed";Et.CLASS_CLOSE_BUTTON="close-button";Et.CLASS_CLOSE_TOP="close-top";Et.CLASS_CLOSE_BOTTOM="close-bottom";Et.CLASS_DRAG="drag";Et.DEFAULT_WIDTH=245;Et.TEXT_CLOSED="Close Controls";Et.TEXT_OPEN="Open Controls";Et._keydownHandler=function(i){document.activeElement.type!=="text"&&(i.which===vc||i.keyCode===vc)&&Et.toggleHide()};Y.bind(window,"keydown",Et._keydownHandler,!1);le.extend(Et.prototype,{add:function(e,t){return Rr(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Rr(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;le.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Ki.removeChild(this.domElement);var e=this;le.each(this.__folders,function(t){e.removeFolder(t)}),Y.unbind(window,"keydown",Et._keydownHandler,!1),Sc(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new Et(t);this.__folders[e]=n;var r=qa(this,n.domElement);return Y.addClass(r,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Sc(e);var t=this;le.each(e.__folders,function(n){e.removeFolder(n)}),le.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=Y.getOffset(e.__ul).top,n=0;le.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(n+=Y.getHeight(r))}),window.innerHeight-t-xc<n?(Y.addClass(e.domElement,Et.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-xc+"px"):(Y.removeClass(e.domElement,Et.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&le.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:le.debounce(function(){this.onResize()},50),remember:function(){if(le.isUndefined(Cr)&&(Cr=new N_,Cr.domElement.innerHTML=D_),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;le.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&B_(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Ca(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=vs(this)),e.folders={},le.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=vs(this),wa(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Dr]=vs(this,!0)),this.load.remembered[e]=vs(this),this.preset=e,Aa(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){le.each(this.__controllers,function(t){this.getRoot().load.remembered?lu(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),le.each(this.__folders,function(t){t.revert(t)}),e||wa(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&cu(this.__listening)},updateDisplay:function(){le.each(this.__controllers,function(e){e.updateDisplay()}),le.each(this.__folders,function(e){e.updateDisplay()})}});function qa(i,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?i.__ul.insertBefore(n,t):i.__ul.appendChild(n),i.onResize(),n}function Sc(i){Y.unbind(window,"resize",i.__resizeHandler),i.saveToLocalStorageIfPossible&&Y.unbind(window,"unload",i.saveToLocalStorageIfPossible)}function wa(i,e){var t=i.__preset_select[i.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function F_(i,e,t){if(t.__li=e,t.__gui=i,le.extend(t,{options:function(c){if(arguments.length>1){var u=t.__li.nextElementSibling;return t.remove(),Rr(i,t.object,t.property,{before:u,factoryArgs:[le.toArray(arguments)]})}if(le.isArray(c)||le.isObject(c)){var h=t.__li.nextElementSibling;return t.remove(),Rr(i,t.object,t.property,{before:h,factoryArgs:[c]})}},name:function(c){return t.__li.firstElementChild.firstElementChild.innerHTML=c,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Ea){var n=new Ns(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});le.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var c=t[s],u=n[s];t[s]=n[s]=function(){var h=Array.prototype.slice.call(arguments);return u.apply(n,h),c.apply(t,h)}}),Y.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Ns){var r=function(c){if(le.isNumber(t.__min)&&le.isNumber(t.__max)){var u=t.__li.firstElementChild.firstElementChild.innerHTML,h=t.__gui.__listening.indexOf(t)>-1;t.remove();var p=Rr(i,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return p.name(u),h&&p.listen(),p}return c};t.min=le.compose(r,t.min),t.max=le.compose(r,t.max)}else t instanceof ru?(Y.bind(e,"click",function(){Y.fakeEvent(t.__checkbox,"click")}),Y.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof ou?(Y.bind(e,"click",function(){Y.fakeEvent(t.__button,"click")}),Y.bind(e,"mouseover",function(){Y.addClass(t.__button,"hover")}),Y.bind(e,"mouseout",function(){Y.removeClass(t.__button,"hover")})):t instanceof Ta&&(Y.addClass(e,"color"),t.updateDisplay=le.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=le.compose(function(s){return i.getRoot().__preset_select&&t.isModified()&&wa(i.getRoot(),!0),s},t.setValue)}function lu(i,e){var t=i.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var r=t.__rememberedObjectIndecesToControllers[n];if(r===void 0&&(r={},t.__rememberedObjectIndecesToControllers[n]=r),r[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,c=void 0;if(s[i.preset])c=s[i.preset];else if(s[Dr])c=s[Dr];else return;if(c[n]&&c[n][e.property]!==void 0){var u=c[n][e.property];e.initialValue=u,e.setValue(u)}}}}function Rr(i,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var r=void 0;if(n.color)r=new Ta(e,t);else{var s=[e,t].concat(n.factoryArgs);r=L_.apply(i,s)}n.before instanceof Di&&(n.before=n.before.__li),lu(i,r),Y.addClass(r.domElement,"c");var c=document.createElement("span");Y.addClass(c,"property-name"),c.innerHTML=r.property;var u=document.createElement("div");u.appendChild(c),u.appendChild(r.domElement);var h=qa(i,u,n.before);return Y.addClass(h,Et.CLASS_CONTROLLER_ROW),r instanceof Ta?Y.addClass(h,"color"):Y.addClass(h,M_(r.getValue())),F_(i,h,r),i.__controllers.push(r),r}function $i(i,e){return document.location.href+"."+e}function Aa(i,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,i.__preset_select.appendChild(n),t&&(i.__preset_select.selectedIndex=i.__preset_select.length-1)}function Mc(i,e){e.style.display=i.useLocalStorage?"block":"none"}function B_(i){var e=i.__save_row=document.createElement("li");Y.addClass(i.domElement,"has-save"),i.__ul.insertBefore(e,i.__ul.firstChild),Y.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",Y.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",Y.addClass(n,"button"),Y.addClass(n,"save");var r=document.createElement("span");r.innerHTML="New",Y.addClass(r,"button"),Y.addClass(r,"save-as");var s=document.createElement("span");s.innerHTML="Revert",Y.addClass(s,"button"),Y.addClass(s,"revert");var c=i.__preset_select=document.createElement("select");if(i.load&&i.load.remembered?le.each(i.load.remembered,function(g,x){Aa(i,x,x===i.preset)}):Aa(i,Dr,!1),Y.bind(c,"change",function(){for(var g=0;g<i.__preset_select.length;g++)i.__preset_select[g].innerHTML=i.__preset_select[g].value;i.preset=this.value}),e.appendChild(c),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(s),Ar){var u=document.getElementById("dg-local-explain"),h=document.getElementById("dg-local-storage"),p=document.getElementById("dg-save-locally");p.style.display="block",localStorage.getItem($i(i,"isLocal"))==="true"&&h.setAttribute("checked","checked"),Mc(i,u),Y.bind(h,"change",function(){i.useLocalStorage=!i.useLocalStorage,Mc(i,u)})}var m=document.getElementById("dg-new-constructor");Y.bind(m,"keydown",function(g){g.metaKey&&(g.which===67||g.keyCode===67)&&Cr.hide()}),Y.bind(t,"click",function(){m.innerHTML=JSON.stringify(i.getSaveObject(),void 0,2),Cr.show(),m.focus(),m.select()}),Y.bind(n,"click",function(){i.save()}),Y.bind(r,"click",function(){var g=prompt("Enter a new preset name.");g&&i.saveAs(g)}),Y.bind(s,"click",function(){i.revert()})}function z_(i){var e=void 0;i.__resize_handle=document.createElement("div"),le.extend(i.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),i.width+=e-s.clientX,i.onResize(),e=s.clientX,!1}function n(){Y.removeClass(i.__closeButton,Et.CLASS_DRAG),Y.unbind(window,"mousemove",t),Y.unbind(window,"mouseup",n)}function r(s){return s.preventDefault(),e=s.clientX,Y.addClass(i.__closeButton,Et.CLASS_DRAG),Y.bind(window,"mousemove",t),Y.bind(window,"mouseup",n),!1}Y.bind(i.__resize_handle,"mousedown",r),Y.bind(i.__closeButton,"mousedown",r),i.domElement.insertBefore(i.__resize_handle,i.domElement.firstElementChild)}function Ca(i,e){i.domElement.style.width=e+"px",i.__save_row&&i.autoPlace&&(i.__save_row.style.width=e+"px"),i.__closeButton&&(i.__closeButton.style.width=e+"px")}function vs(i,e){var t={};return le.each(i.__rememberedObjects,function(n,r){var s={},c=i.__rememberedObjectIndecesToControllers[r];le.each(c,function(u,h){s[h]=e?u.initialValue:u.getValue()}),t[r]=s}),t}function k_(i){for(var e=0;e<i.__preset_select.length;e++)i.__preset_select[e].value===i.preset&&(i.__preset_select.selectedIndex=e)}function cu(i){i.length!==0&&U_.call(window,function(){cu(i)}),le.each(i,function(e){e.updateDisplay()})}var H_=Et,V_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function G_(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Os={exports:{}};Os.exports;(function(i,e){(function(t,n){i.exports=n()})(V_,function(){function t(a,o){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);o&&(d=d.filter(function(f){return Object.getOwnPropertyDescriptor(a,f).enumerable})),l.push.apply(l,d)}return l}function n(a){for(var o=1;o<arguments.length;o++){var l=arguments[o]!=null?arguments[o]:{};o%2?t(Object(l),!0).forEach(function(d){h(a,d,l[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):t(Object(l)).forEach(function(d){Object.defineProperty(a,d,Object.getOwnPropertyDescriptor(l,d))})}return a}function r(a){return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},r(a)}function s(a,o){if(!(a instanceof o))throw new TypeError("Cannot call a class as a function")}function c(a,o){for(var l=0;l<o.length;l++){var d=o[l];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,R(d.key),d)}}function u(a,o,l){return o&&c(a.prototype,o),Object.defineProperty(a,"prototype",{writable:!1}),a}function h(a,o,l){return(o=R(o))in a?Object.defineProperty(a,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[o]=l,a}function p(a,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(o&&o.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),o&&g(a,o)}function m(a){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},m(a)}function g(a,o){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,d){return l.__proto__=d,l},g(a,o)}function x(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function S(a){var o=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}();return function(){var l,d=m(a);if(o){var f=m(this).constructor;l=Reflect.construct(d,arguments,f)}else l=d.apply(this,arguments);return function(y,M){if(M&&(typeof M=="object"||typeof M=="function"))return M;if(M!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return x(y)}(this,l)}}function w(){return w=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(a,o,l){var d=function(y,M){for(;!Object.prototype.hasOwnProperty.call(y,M)&&(y=m(y))!==null;);return y}(a,o);if(d){var f=Object.getOwnPropertyDescriptor(d,o);return f.get?f.get.call(arguments.length<3?a:l):f.value}},w.apply(this,arguments)}function R(a){var o=function(l,d){if(typeof l!="object"||l===null)return l;var f=l[Symbol.toPrimitive];if(f!==void 0){var y=f.call(l,d);if(typeof y!="object")return y;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(l)}(a,"string");return typeof o=="symbol"?o:o+""}var _=function(a){return!(!a||!a.Window)&&a instanceof a.Window},v=void 0,O=void 0;function I(a){v=a;var o=a.document.createTextNode("");o.ownerDocument!==a.document&&typeof a.wrap=="function"&&a.wrap(o)===o&&(a=a.wrap(a)),O=a}function N(a){return _(a)?a:(a.ownerDocument||a).defaultView||O.window}typeof window<"u"&&window&&I(window);var $=function(a){return!!a&&r(a)==="object"},V=function(a){return typeof a=="function"},A={window:function(a){return a===O||_(a)},docFrag:function(a){return $(a)&&a.nodeType===11},object:$,func:V,number:function(a){return typeof a=="number"},bool:function(a){return typeof a=="boolean"},string:function(a){return typeof a=="string"},element:function(a){if(!a||r(a)!=="object")return!1;var o=N(a)||O;return/object|function/.test(typeof Element>"u"?"undefined":r(Element))?a instanceof Element||a instanceof o.Element:a.nodeType===1&&typeof a.nodeName=="string"},plainObject:function(a){return $(a)&&!!a.constructor&&/function Object\b/.test(a.constructor.toString())},array:function(a){return $(a)&&a.length!==void 0&&V(a.splice)}};function K(a){var o=a.interaction;if(o.prepared.name==="drag"){var l=o.prepared.axis;l==="x"?(o.coords.cur.page.y=o.coords.start.page.y,o.coords.cur.client.y=o.coords.start.client.y,o.coords.velocity.client.y=0,o.coords.velocity.page.y=0):l==="y"&&(o.coords.cur.page.x=o.coords.start.page.x,o.coords.cur.client.x=o.coords.start.client.x,o.coords.velocity.client.x=0,o.coords.velocity.page.x=0)}}function xe(a){var o=a.iEvent,l=a.interaction;if(l.prepared.name==="drag"){var d=l.prepared.axis;if(d==="x"||d==="y"){var f=d==="x"?"y":"x";o.page[f]=l.coords.start.page[f],o.client[f]=l.coords.start.client[f],o.delta[f]=0}}}var b={id:"actions/drag",install:function(a){var o=a.actions,l=a.Interactable,d=a.defaults;l.prototype.draggable=b.draggable,o.map.drag=b,o.methodDict.drag="draggable",d.actions.drag=b.defaults},listeners:{"interactions:before-action-move":K,"interactions:action-resume":K,"interactions:action-move":xe,"auto-start:check":function(a){var o=a.interaction,l=a.interactable,d=a.buttons,f=l.options.drag;if(f&&f.enabled&&(!o.pointerIsDown||!/mouse|pointer/.test(o.pointerType)||d&l.options.drag.mouseButtons))return a.action={name:"drag",axis:f.lockAxis==="start"?f.startAxis:f.lockAxis},!1}},draggable:function(a){return A.object(a)?(this.options.drag.enabled=a.enabled!==!1,this.setPerAction("drag",a),this.setOnEvents("drag",a),/^(xy|x|y|start)$/.test(a.lockAxis)&&(this.options.drag.lockAxis=a.lockAxis),/^(xy|x|y)$/.test(a.startAxis)&&(this.options.drag.startAxis=a.startAxis),this):A.bool(a)?(this.options.drag.enabled=a,this):this.options.drag},beforeMove:K,move:xe,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"},filterEventType:function(a){return a.search("drag")===0}},P=b,te={init:function(a){var o=a;te.document=o.document,te.DocumentFragment=o.DocumentFragment||Q,te.SVGElement=o.SVGElement||Q,te.SVGSVGElement=o.SVGSVGElement||Q,te.SVGElementInstance=o.SVGElementInstance||Q,te.Element=o.Element||Q,te.HTMLElement=o.HTMLElement||te.Element,te.Event=o.Event,te.Touch=o.Touch||Q,te.PointerEvent=o.PointerEvent||o.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function Q(){}var ie=te,ae={init:function(a){var o=ie.Element,l=a.navigator||{};ae.supportsTouch="ontouchstart"in a||A.func(a.DocumentTouch)&&ie.document instanceof a.DocumentTouch,ae.supportsPointerEvent=l.pointerEnabled!==!1&&!!ie.PointerEvent,ae.isIOS=/iP(hone|od|ad)/.test(l.platform),ae.isIOS7=/iP(hone|od|ad)/.test(l.platform)&&/OS 7[^\d]/.test(l.appVersion),ae.isIe9=/MSIE 9/.test(l.userAgent),ae.isOperaMobile=l.appName==="Opera"&&ae.supportsTouch&&/Presto/.test(l.userAgent),ae.prefixedMatchesSelector="matches"in o.prototype?"matches":"webkitMatchesSelector"in o.prototype?"webkitMatchesSelector":"mozMatchesSelector"in o.prototype?"mozMatchesSelector":"oMatchesSelector"in o.prototype?"oMatchesSelector":"msMatchesSelector",ae.pEventTypes=ae.supportsPointerEvent?ie.PointerEvent===a.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,ae.wheelEvent=ie.document&&"onmousewheel"in ie.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},Z=ae;function ue(a,o){if(a.contains)return a.contains(o);for(;o;){if(o===a)return!0;o=o.parentNode}return!1}function ne(a,o){for(;A.element(a);){if(be(a,o))return a;a=Se(a)}return null}function Se(a){var o=a.parentNode;if(A.docFrag(o)){for(;(o=o.host)&&A.docFrag(o););return o}return o}function be(a,o){return O!==v&&(o=o.replace(/\/deep\//g," ")),a[Z.prefixedMatchesSelector](o)}var Oe=function(a){return a.parentNode||a.host};function ft(a,o){for(var l,d=[],f=a;(l=Oe(f))&&f!==o&&l!==f.ownerDocument;)d.unshift(f),f=l;return d}function _t(a,o,l){for(;A.element(a);){if(be(a,o))return!0;if((a=Se(a))===l)return be(a,o)}return!1}function re(a){return a.correspondingUseElement||a}function me(a){var o=a instanceof ie.SVGElement?a.getBoundingClientRect():a.getClientRects()[0];return o&&{left:o.left,right:o.right,top:o.top,bottom:o.bottom,width:o.width||o.right-o.left,height:o.height||o.bottom-o.top}}function Ue(a){var o,l=me(a);if(!Z.isIOS7&&l){var d={x:(o=(o=N(a))||O).scrollX||o.document.documentElement.scrollLeft,y:o.scrollY||o.document.documentElement.scrollTop};l.left+=d.x,l.right+=d.x,l.top+=d.y,l.bottom+=d.y}return l}function Pe(a){for(var o=[];a;)o.push(a),a=Se(a);return o}function Ze(a){return!!A.string(a)&&(ie.document.querySelector(a),!0)}function de(a,o){for(var l in o)a[l]=o[l];return a}function ct(a,o,l){return a==="parent"?Se(l):a==="self"?o.getRect(l):ne(l,a)}function pt(a,o,l,d){var f=a;return A.string(f)?f=ct(f,o,l):A.func(f)&&(f=f.apply(void 0,d)),A.element(f)&&(f=Ue(f)),f}function at(a){return a&&{x:"x"in a?a.x:a.left,y:"y"in a?a.y:a.top}}function B(a){return!a||"x"in a&&"y"in a||((a=de({},a)).x=a.left||0,a.y=a.top||0,a.width=a.width||(a.right||0)-a.x,a.height=a.height||(a.bottom||0)-a.y),a}function Ot(a,o,l){a.left&&(o.left+=l.x),a.right&&(o.right+=l.x),a.top&&(o.top+=l.y),a.bottom&&(o.bottom+=l.y),o.width=o.right-o.left,o.height=o.bottom-o.top}function tt(a,o,l){var d=l&&a.options[l];return at(pt(d&&d.origin||a.options.origin,a,o,[a&&o]))||{x:0,y:0}}function nt(a,o){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(D){return!0},d=arguments.length>3?arguments[3]:void 0;if(d=d||{},A.string(a)&&a.search(" ")!==-1&&(a=qe(a)),A.array(a))return a.forEach(function(D){return nt(D,o,l,d)}),d;if(A.object(a)&&(o=a,a=""),A.func(o)&&l(a))d[a]=d[a]||[],d[a].push(o);else if(A.array(o))for(var f=0,y=o;f<y.length;f++){var M=y[f];nt(a,M,l,d)}else if(A.object(o))for(var T in o)nt(qe(T).map(function(D){return"".concat(a).concat(D)}),o[T],l,d);return d}function qe(a){return a.trim().split(/ +/)}var yt=function(a,o){return Math.sqrt(a*a+o*o)},$e=["webkit","moz"];function U(a,o){a.__set||(a.__set={});var l=function(f){if($e.some(function(y){return f.indexOf(y)===0}))return 1;typeof a[f]!="function"&&f!=="__set"&&Object.defineProperty(a,f,{get:function(){return f in a.__set?a.__set[f]:a.__set[f]=o[f]},set:function(y){a.__set[f]=y},configurable:!0})};for(var d in o)l(d);return a}function E(a,o){a.page=a.page||{},a.page.x=o.page.x,a.page.y=o.page.y,a.client=a.client||{},a.client.x=o.client.x,a.client.y=o.client.y,a.timeStamp=o.timeStamp}function W(a){a.page.x=0,a.page.y=0,a.client.x=0,a.client.y=0}function oe(a){return a instanceof ie.Event||a instanceof ie.Touch}function fe(a,o,l){return a=a||"page",(l=l||{}).x=o[a+"X"],l.y=o[a+"Y"],l}function se(a,o){return o=o||{x:0,y:0},Z.isOperaMobile&&oe(a)?(fe("screen",a,o),o.x+=window.scrollX,o.y+=window.scrollY):fe("page",a,o),o}function Fe(a){return A.number(a.pointerId)?a.pointerId:a.identifier}function Me(a,o,l){var d=o.length>1?ht(o):o[0];se(d,a.page),function(f,y){y=y||{},Z.isOperaMobile&&oe(f)?fe("screen",f,y):fe("client",f,y)}(d,a.client),a.timeStamp=l}function Re(a){var o=[];return A.array(a)?(o[0]=a[0],o[1]=a[1]):a.type==="touchend"?a.touches.length===1?(o[0]=a.touches[0],o[1]=a.changedTouches[0]):a.touches.length===0&&(o[0]=a.changedTouches[0],o[1]=a.changedTouches[1]):(o[0]=a.touches[0],o[1]=a.touches[1]),o}function ht(a){for(var o={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},l=0;l<a.length;l++){var d=a[l];for(var f in o)o[f]+=d[f]}for(var y in o)o[y]/=a.length;return o}function _e(a){if(!a.length)return null;var o=Re(a),l=Math.min(o[0].pageX,o[1].pageX),d=Math.min(o[0].pageY,o[1].pageY),f=Math.max(o[0].pageX,o[1].pageX),y=Math.max(o[0].pageY,o[1].pageY);return{x:l,y:d,left:l,top:d,right:f,bottom:y,width:f-l,height:y-d}}function De(a,o){var l=o+"X",d=o+"Y",f=Re(a),y=f[0][l]-f[1][l],M=f[0][d]-f[1][d];return yt(y,M)}function Ge(a,o){var l=o+"X",d=o+"Y",f=Re(a),y=f[1][l]-f[0][l],M=f[1][d]-f[0][d];return 180*Math.atan2(M,y)/Math.PI}function Ye(a){return A.string(a.pointerType)?a.pointerType:A.number(a.pointerType)?[void 0,void 0,"touch","pen","mouse"][a.pointerType]:/touch/.test(a.type||"")||a instanceof ie.Touch?"touch":"mouse"}function Ie(a){var o=A.func(a.composedPath)?a.composedPath():a.path;return[re(o?o[0]:a.target),re(a.currentTarget)]}var ot=function(){function a(o){s(this,a),this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=o}return u(a,[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),a}();Object.defineProperty(ot.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var Je=function(a,o){for(var l=0;l<o.length;l++){var d=o[l];a.push(d)}return a},Mt=function(a){return Je([],a)},z=function(a,o){for(var l=0;l<a.length;l++)if(o(a[l],l,a))return l;return-1},Ee=function(a,o){return a[z(a,o)]},J=function(a){p(l,a);var o=S(l);function l(d,f,y){var M;s(this,l),(M=o.call(this,f._interaction)).dropzone=void 0,M.dragEvent=void 0,M.relatedTarget=void 0,M.draggable=void 0,M.propagationStopped=!1,M.immediatePropagationStopped=!1;var T=y==="dragleave"?d.prev:d.cur,D=T.element,F=T.dropzone;return M.type=y,M.target=D,M.currentTarget=D,M.dropzone=F,M.dragEvent=f,M.relatedTarget=f.target,M.draggable=f.interactable,M.timeStamp=f.timeStamp,M}return u(l,[{key:"reject",value:function(){var d=this,f=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&f.cur.dropzone===this.dropzone&&f.cur.element===this.target)if(f.prev.dropzone=this.dropzone,f.prev.element=this.target,f.rejected=!0,f.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var y=f.activeDrops,M=z(y,function(D){var F=D.dropzone,L=D.element;return F===d.dropzone&&L===d.target});f.activeDrops.splice(M,1);var T=new l(f,this.dragEvent,"dropdeactivate");T.dropzone=this.dropzone,T.target=this.target,this.dropzone.fire(T)}else this.dropzone.fire(new l(f,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),l}(ot);function ce(a,o){for(var l=0,d=a.slice();l<d.length;l++){var f=d[l],y=f.dropzone,M=f.element;o.dropzone=y,o.target=M,y.fire(o),o.propagationStopped=o.immediatePropagationStopped=!1}}function Te(a,o){for(var l=function(y,M){for(var T=[],D=0,F=y.interactables.list;D<F.length;D++){var L=F[D];if(L.options.drop.enabled){var H=L.options.drop.accept;if(!(A.element(H)&&H!==M||A.string(H)&&!be(M,H)||A.func(H)&&!H({dropzone:L,draggableElement:M})))for(var ee=0,pe=L.getAllElements();ee<pe.length;ee++){var he=pe[ee];he!==M&&T.push({dropzone:L,element:he,rect:L.getRect(he)})}}}return T}(a,o),d=0;d<l.length;d++){var f=l[d];f.rect=f.dropzone.getRect(f.element)}return l}function Ce(a,o,l){for(var d=a.dropState,f=a.interactable,y=a.element,M=[],T=0,D=d.activeDrops;T<D.length;T++){var F=D[T],L=F.dropzone,H=F.element,ee=F.rect,pe=L.dropCheck(o,l,f,y,H,ee);M.push(pe?H:null)}var he=function(ge){for(var Le,Ae,He,Qe=[],ut=0;ut<ge.length;ut++){var je=ge[ut],et=ge[Le];if(je&&ut!==Le)if(et){var jt=Oe(je),Rt=Oe(et);if(jt!==je.ownerDocument)if(Rt!==je.ownerDocument)if(jt!==Rt){Qe=Qe.length?Qe:ft(et);var ln=void 0;if(et instanceof ie.HTMLElement&&je instanceof ie.SVGElement&&!(je instanceof ie.SVGSVGElement)){if(je===Rt)continue;ln=je.ownerSVGElement}else ln=je;for(var gn=ft(ln,et.ownerDocument),On=0;gn[On]&&gn[On]===Qe[On];)On++;var jr=[gn[On-1],gn[On],Qe[On]];if(jr[0])for(var _r=jr[0].lastChild;_r;){if(_r===jr[1]){Le=ut,Qe=gn;break}if(_r===jr[2])break;_r=_r.previousSibling}}else He=et,(parseInt(N(Ae=je).getComputedStyle(Ae).zIndex,10)||0)>=(parseInt(N(He).getComputedStyle(He).zIndex,10)||0)&&(Le=ut);else Le=ut}else Le=ut}return Le}(M);return d.activeDrops[he]||null}function lt(a,o,l){var d=a.dropState,f={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return l.type==="dragstart"&&(f.activate=new J(d,l,"dropactivate"),f.activate.target=null,f.activate.dropzone=null),l.type==="dragend"&&(f.deactivate=new J(d,l,"dropdeactivate"),f.deactivate.target=null,f.deactivate.dropzone=null),d.rejected||(d.cur.element!==d.prev.element&&(d.prev.dropzone&&(f.leave=new J(d,l,"dragleave"),l.dragLeave=f.leave.target=d.prev.element,l.prevDropzone=f.leave.dropzone=d.prev.dropzone),d.cur.dropzone&&(f.enter=new J(d,l,"dragenter"),l.dragEnter=d.cur.element,l.dropzone=d.cur.dropzone)),l.type==="dragend"&&d.cur.dropzone&&(f.drop=new J(d,l,"drop"),l.dropzone=d.cur.dropzone,l.relatedTarget=d.cur.element),l.type==="dragmove"&&d.cur.dropzone&&(f.move=new J(d,l,"dropmove"),l.dropzone=d.cur.dropzone)),f}function At(a,o){var l=a.dropState,d=l.activeDrops,f=l.cur,y=l.prev;o.leave&&y.dropzone.fire(o.leave),o.enter&&f.dropzone.fire(o.enter),o.move&&f.dropzone.fire(o.move),o.drop&&f.dropzone.fire(o.drop),o.deactivate&&ce(d,o.deactivate),l.prev.dropzone=f.dropzone,l.prev.element=f.element}function zt(a,o){var l=a.interaction,d=a.iEvent,f=a.event;if(d.type==="dragmove"||d.type==="dragend"){var y=l.dropState;o.dynamicDrop&&(y.activeDrops=Te(o,l.element));var M=d,T=Ce(l,M,f);y.rejected=y.rejected&&!!T&&T.dropzone===y.cur.dropzone&&T.element===y.cur.element,y.cur.dropzone=T&&T.dropzone,y.cur.element=T&&T.element,y.events=lt(l,0,M)}}var mt={id:"actions/drop",install:function(a){var o=a.actions,l=a.interactStatic,d=a.Interactable,f=a.defaults;a.usePlugin(P),d.prototype.dropzone=function(y){return function(M,T){if(A.object(T)){if(M.options.drop.enabled=T.enabled!==!1,T.listeners){var D=nt(T.listeners),F=Object.keys(D).reduce(function(H,ee){return H[/^(enter|leave)/.test(ee)?"drag".concat(ee):/^(activate|deactivate|move)/.test(ee)?"drop".concat(ee):ee]=D[ee],H},{}),L=M.options.drop.listeners;L&&M.off(L),M.on(F),M.options.drop.listeners=F}return A.func(T.ondrop)&&M.on("drop",T.ondrop),A.func(T.ondropactivate)&&M.on("dropactivate",T.ondropactivate),A.func(T.ondropdeactivate)&&M.on("dropdeactivate",T.ondropdeactivate),A.func(T.ondragenter)&&M.on("dragenter",T.ondragenter),A.func(T.ondragleave)&&M.on("dragleave",T.ondragleave),A.func(T.ondropmove)&&M.on("dropmove",T.ondropmove),/^(pointer|center)$/.test(T.overlap)?M.options.drop.overlap=T.overlap:A.number(T.overlap)&&(M.options.drop.overlap=Math.max(Math.min(1,T.overlap),0)),"accept"in T&&(M.options.drop.accept=T.accept),"checker"in T&&(M.options.drop.checker=T.checker),M}return A.bool(T)?(M.options.drop.enabled=T,M):M.options.drop}(this,y)},d.prototype.dropCheck=function(y,M,T,D,F,L){return function(H,ee,pe,he,ge,Le,Ae){var He=!1;if(!(Ae=Ae||H.getRect(Le)))return!!H.options.drop.checker&&H.options.drop.checker(ee,pe,He,H,Le,he,ge);var Qe=H.options.drop.overlap;if(Qe==="pointer"){var ut=tt(he,ge,"drag"),je=se(ee);je.x+=ut.x,je.y+=ut.y;var et=je.x>Ae.left&&je.x<Ae.right,jt=je.y>Ae.top&&je.y<Ae.bottom;He=et&&jt}var Rt=he.getRect(ge);if(Rt&&Qe==="center"){var ln=Rt.left+Rt.width/2,gn=Rt.top+Rt.height/2;He=ln>=Ae.left&&ln<=Ae.right&&gn>=Ae.top&&gn<=Ae.bottom}return Rt&&A.number(Qe)&&(He=Math.max(0,Math.min(Ae.right,Rt.right)-Math.max(Ae.left,Rt.left))*Math.max(0,Math.min(Ae.bottom,Rt.bottom)-Math.max(Ae.top,Rt.top))/(Rt.width*Rt.height)>=Qe),H.options.drop.checker&&(He=H.options.drop.checker(ee,pe,He,H,Le,he,ge)),He}(this,y,M,T,D,F,L)},l.dynamicDrop=function(y){return A.bool(y)?(a.dynamicDrop=y,l):a.dynamicDrop},de(o.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),o.methodDict.drop="dropzone",a.dynamicDrop=!1,f.actions.drop=mt.defaults},listeners:{"interactions:before-action-start":function(a){var o=a.interaction;o.prepared.name==="drag"&&(o.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(a,o){var l=a.interaction,d=(a.event,a.iEvent);if(l.prepared.name==="drag"){var f=l.dropState;f.activeDrops=[],f.events={},f.activeDrops=Te(o,l.element),f.events=lt(l,0,d),f.events.activate&&(ce(f.activeDrops,f.events.activate),o.fire("actions/drop:start",{interaction:l,dragEvent:d}))}},"interactions:action-move":zt,"interactions:after-action-move":function(a,o){var l=a.interaction,d=a.iEvent;if(l.prepared.name==="drag"){var f=l.dropState;At(l,f.events),o.fire("actions/drop:move",{interaction:l,dragEvent:d}),f.events={}}},"interactions:action-end":function(a,o){if(a.interaction.prepared.name==="drag"){var l=a.interaction,d=a.iEvent;zt(a,o),At(l,l.dropState.events),o.fire("actions/drop:end",{interaction:l,dragEvent:d})}},"interactions:stop":function(a){var o=a.interaction;if(o.prepared.name==="drag"){var l=o.dropState;l&&(l.activeDrops=null,l.events=null,l.cur.dropzone=null,l.cur.element=null,l.prev.dropzone=null,l.prev.element=null,l.rejected=!1)}}},getActiveDrops:Te,getDrop:Ce,getDropEvents:lt,fireDropEvents:At,filterEventType:function(a){return a.search("drag")===0||a.search("drop")===0},defaults:{enabled:!1,accept:null,overlap:"pointer"}},kt=mt;function sn(a){var o=a.interaction,l=a.iEvent,d=a.phase;if(o.prepared.name==="gesture"){var f=o.pointers.map(function(F){return F.pointer}),y=d==="start",M=d==="end",T=o.interactable.options.deltaSource;if(l.touches=[f[0],f[1]],y)l.distance=De(f,T),l.box=_e(f),l.scale=1,l.ds=0,l.angle=Ge(f,T),l.da=0,o.gesture.startDistance=l.distance,o.gesture.startAngle=l.angle;else if(M||o.pointers.length<2){var D=o.prevEvent;l.distance=D.distance,l.box=D.box,l.scale=D.scale,l.ds=0,l.angle=D.angle,l.da=0}else l.distance=De(f,T),l.box=_e(f),l.scale=l.distance/o.gesture.startDistance,l.angle=Ge(f,T),l.ds=l.scale-o.gesture.scale,l.da=l.angle-o.gesture.angle;o.gesture.distance=l.distance,o.gesture.angle=l.angle,A.number(l.scale)&&l.scale!==1/0&&!isNaN(l.scale)&&(o.gesture.scale=l.scale)}}var Li={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(a){var o=a.actions,l=a.Interactable,d=a.defaults;l.prototype.gesturable=function(f){return A.object(f)?(this.options.gesture.enabled=f.enabled!==!1,this.setPerAction("gesture",f),this.setOnEvents("gesture",f),this):A.bool(f)?(this.options.gesture.enabled=f,this):this.options.gesture},o.map.gesture=Li,o.methodDict.gesture="gesturable",d.actions.gesture=Li.defaults},listeners:{"interactions:action-start":sn,"interactions:action-move":sn,"interactions:action-end":sn,"interactions:new":function(a){a.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(a){if(!(a.interaction.pointers.length<2)){var o=a.interactable.options.gesture;if(o&&o.enabled)return a.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""},filterEventType:function(a){return a.search("gesture")===0}},zr=Li;function Nn(a,o,l,d,f,y,M){if(!o)return!1;if(o===!0){var T=A.number(y.width)?y.width:y.right-y.left,D=A.number(y.height)?y.height:y.bottom-y.top;if(M=Math.min(M,Math.abs((a==="left"||a==="right"?T:D)/2)),T<0&&(a==="left"?a="right":a==="right"&&(a="left")),D<0&&(a==="top"?a="bottom":a==="bottom"&&(a="top")),a==="left"){var F=T>=0?y.left:y.right;return l.x<F+M}if(a==="top"){var L=D>=0?y.top:y.bottom;return l.y<L+M}if(a==="right")return l.x>(T>=0?y.right:y.left)-M;if(a==="bottom")return l.y>(D>=0?y.bottom:y.top)-M}return!!A.element(d)&&(A.element(o)?o===d:_t(d,o,f))}function Ii(a){var o=a.iEvent,l=a.interaction;if(l.prepared.name==="resize"&&l.resizeAxes){var d=o;l.interactable.options.resize.square?(l.resizeAxes==="y"?d.delta.x=d.delta.y:d.delta.y=d.delta.x,d.axes="xy"):(d.axes=l.resizeAxes,l.resizeAxes==="x"?d.delta.y=0:l.resizeAxes==="y"&&(d.delta.x=0))}}var dn,Cn,Jt={id:"actions/resize",before:["actions/drag"],install:function(a){var o=a.actions,l=a.browser,d=a.Interactable,f=a.defaults;Jt.cursors=function(y){return y.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(l),Jt.defaultMargin=l.supportsTouch||l.supportsPointerEvent?20:10,d.prototype.resizable=function(y){return function(M,T,D){return A.object(T)?(M.options.resize.enabled=T.enabled!==!1,M.setPerAction("resize",T),M.setOnEvents("resize",T),A.string(T.axis)&&/^x$|^y$|^xy$/.test(T.axis)?M.options.resize.axis=T.axis:T.axis===null&&(M.options.resize.axis=D.defaults.actions.resize.axis),A.bool(T.preserveAspectRatio)?M.options.resize.preserveAspectRatio=T.preserveAspectRatio:A.bool(T.square)&&(M.options.resize.square=T.square),M):A.bool(T)?(M.options.resize.enabled=T,M):M.options.resize}(this,y,a)},o.map.resize=Jt,o.methodDict.resize="resizable",f.actions.resize=Jt.defaults},listeners:{"interactions:new":function(a){a.interaction.resizeAxes="xy"},"interactions:action-start":function(a){(function(o){var l=o.iEvent,d=o.interaction;if(d.prepared.name==="resize"&&d.prepared.edges){var f=l,y=d.rect;d._rects={start:de({},y),corrected:de({},y),previous:de({},y),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},f.edges=d.prepared.edges,f.rect=d._rects.corrected,f.deltaRect=d._rects.delta}})(a),Ii(a)},"interactions:action-move":function(a){(function(o){var l=o.iEvent,d=o.interaction;if(d.prepared.name==="resize"&&d.prepared.edges){var f=l,y=d.interactable.options.resize.invert,M=y==="reposition"||y==="negate",T=d.rect,D=d._rects,F=D.start,L=D.corrected,H=D.delta,ee=D.previous;if(de(ee,L),M){if(de(L,T),y==="reposition"){if(L.top>L.bottom){var pe=L.top;L.top=L.bottom,L.bottom=pe}if(L.left>L.right){var he=L.left;L.left=L.right,L.right=he}}}else L.top=Math.min(T.top,F.bottom),L.bottom=Math.max(T.bottom,F.top),L.left=Math.min(T.left,F.right),L.right=Math.max(T.right,F.left);for(var ge in L.width=L.right-L.left,L.height=L.bottom-L.top,L)H[ge]=L[ge]-ee[ge];f.edges=d.prepared.edges,f.rect=L,f.deltaRect=H}})(a),Ii(a)},"interactions:action-end":function(a){var o=a.iEvent,l=a.interaction;if(l.prepared.name==="resize"&&l.prepared.edges){var d=o;d.edges=l.prepared.edges,d.rect=l._rects.corrected,d.deltaRect=l._rects.delta}},"auto-start:check":function(a){var o=a.interaction,l=a.interactable,d=a.element,f=a.rect,y=a.buttons;if(f){var M=de({},o.coords.cur.page),T=l.options.resize;if(T&&T.enabled&&(!o.pointerIsDown||!/mouse|pointer/.test(o.pointerType)||y&T.mouseButtons)){if(A.object(T.edges)){var D={left:!1,right:!1,top:!1,bottom:!1};for(var F in D)D[F]=Nn(F,T.edges[F],M,o._latestPointer.eventTarget,d,f,T.margin||Jt.defaultMargin);D.left=D.left&&!D.right,D.top=D.top&&!D.bottom,(D.left||D.right||D.top||D.bottom)&&(a.action={name:"resize",edges:D})}else{var L=T.axis!=="y"&&M.x>f.right-Jt.defaultMargin,H=T.axis!=="x"&&M.y>f.bottom-Jt.defaultMargin;(L||H)&&(a.action={name:"resize",axes:(L?"x":"")+(H?"y":"")})}return!a.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(a){var o=a.edges,l=a.axis,d=a.name,f=Jt.cursors,y=null;if(l)y=f[d+l];else if(o){for(var M="",T=0,D=["top","bottom","left","right"];T<D.length;T++){var F=D[T];o[F]&&(M+=F)}y=f[M]}return y},filterEventType:function(a){return a.search("resize")===0},defaultMargin:null},kr=Jt,Ui={id:"actions",install:function(a){a.usePlugin(zr),a.usePlugin(kr),a.usePlugin(P),a.usePlugin(kt)}},hr=0,mn={request:function(a){return dn(a)},cancel:function(a){return Cn(a)},init:function(a){if(dn=a.requestAnimationFrame,Cn=a.cancelAnimationFrame,!dn)for(var o=["ms","moz","webkit","o"],l=0;l<o.length;l++){var d=o[l];dn=a["".concat(d,"RequestAnimationFrame")],Cn=a["".concat(d,"CancelAnimationFrame")]||a["".concat(d,"CancelRequestAnimationFrame")]}dn=dn&&dn.bind(a),Cn=Cn&&Cn.bind(a),dn||(dn=function(f){var y=Date.now(),M=Math.max(0,16-(y-hr)),T=a.setTimeout(function(){f(y+M)},M);return hr=y+M,T},Cn=function(f){return clearTimeout(f)})}},We={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(a){We.isScrolling=!0,mn.cancel(We.i),a.autoScroll=We,We.interaction=a,We.prevTime=We.now(),We.i=mn.request(We.scroll)},stop:function(){We.isScrolling=!1,We.interaction&&(We.interaction.autoScroll=null),mn.cancel(We.i)},scroll:function(){var a=We.interaction,o=a.interactable,l=a.element,d=a.prepared.name,f=o.options[d].autoScroll,y=Hr(f.container,o,l),M=We.now(),T=(M-We.prevTime)/1e3,D=f.speed*T;if(D>=1){var F={x:We.x*D,y:We.y*D};if(F.x||F.y){var L=Vr(y);A.window(y)?y.scrollBy(F.x,F.y):y&&(y.scrollLeft+=F.x,y.scrollTop+=F.y);var H=Vr(y),ee={x:H.x-L.x,y:H.y-L.y};(ee.x||ee.y)&&o.fire({type:"autoscroll",target:l,interactable:o,delta:ee,interaction:a,container:y})}We.prevTime=M}We.isScrolling&&(mn.cancel(We.i),We.i=mn.request(We.scroll))},check:function(a,o){var l;return(l=a.options[o].autoScroll)==null?void 0:l.enabled},onInteractionMove:function(a){var o=a.interaction,l=a.pointer;if(o.interacting()&&We.check(o.interactable,o.prepared.name))if(o.simulation)We.x=We.y=0;else{var d,f,y,M,T=o.interactable,D=o.element,F=o.prepared.name,L=T.options[F].autoScroll,H=Hr(L.container,T,D);if(A.window(H))M=l.clientX<We.margin,d=l.clientY<We.margin,f=l.clientX>H.innerWidth-We.margin,y=l.clientY>H.innerHeight-We.margin;else{var ee=me(H);M=l.clientX<ee.left+We.margin,d=l.clientY<ee.top+We.margin,f=l.clientX>ee.right-We.margin,y=l.clientY>ee.bottom-We.margin}We.x=f?1:M?-1:0,We.y=y?1:d?-1:0,We.isScrolling||(We.margin=L.margin,We.speed=L.speed,We.start(o))}}};function Hr(a,o,l){return(A.string(a)?ct(a,o,l):a)||N(l)}function Vr(a){return A.window(a)&&(a=window.document.body),{x:a.scrollLeft,y:a.scrollTop}}var C={id:"auto-scroll",install:function(a){var o=a.defaults,l=a.actions;a.autoScroll=We,We.now=function(){return a.now()},l.phaselessTypes.autoscroll=!0,o.perAction.autoScroll=We.defaults},listeners:{"interactions:new":function(a){a.interaction.autoScroll=null},"interactions:destroy":function(a){a.interaction.autoScroll=null,We.stop(),We.interaction&&(We.interaction=null)},"interactions:stop":We.stop,"interactions:action-move":function(a){return We.onInteractionMove(a)}}},k=C;function X(a,o){var l=!1;return function(){return l||(O.console.warn(o),l=!0),a.apply(this,arguments)}}function q(a,o){return a.name=o.name,a.axis=o.axis,a.edges=o.edges,a}function G(a){return A.bool(a)?(this.options.styleCursor=a,this):a===null?(delete this.options.styleCursor,this):this.options.styleCursor}function ve(a){return A.func(a)?(this.options.actionChecker=a,this):a===null?(delete this.options.actionChecker,this):this.options.actionChecker}var we={id:"auto-start/interactableMethods",install:function(a){var o=a.Interactable;o.prototype.getAction=function(l,d,f,y){var M=function(T,D,F,L,H){var ee=T.getRect(L),pe=D.buttons||{0:1,1:4,3:8,4:16}[D.button],he={action:null,interactable:T,interaction:F,element:L,rect:ee,buttons:pe};return H.fire("auto-start:check",he),he.action}(this,d,f,y,a);return this.options.actionChecker?this.options.actionChecker(l,d,M,this,y,f):M},o.prototype.ignoreFrom=X(function(l){return this._backCompatOption("ignoreFrom",l)},"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),o.prototype.allowFrom=X(function(l){return this._backCompatOption("allowFrom",l)},"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),o.prototype.actionChecker=ve,o.prototype.styleCursor=G}};function Ne(a,o,l,d,f){return o.testIgnoreAllow(o.options[a.name],l,d)&&o.options[a.name].enabled&&ze(o,l,a,f)?a:null}function Be(a,o,l,d,f,y,M){for(var T=0,D=d.length;T<D;T++){var F=d[T],L=f[T],H=F.getAction(o,l,a,L);if(H){var ee=Ne(H,F,L,y,M);if(ee)return{action:ee,interactable:F,element:L}}}return{action:null,interactable:null,element:null}}function Ve(a,o,l,d,f){var y=[],M=[],T=d;function D(L){y.push(L),M.push(T)}for(;A.element(T);){y=[],M=[],f.interactables.forEachMatch(T,D);var F=Be(a,o,l,y,M,d,f);if(F.action&&!F.interactable.options[F.action.name].manualStart)return F;T=Se(T)}return{action:null,interactable:null,element:null}}function Xe(a,o,l){var d=o.action,f=o.interactable,y=o.element;d=d||{name:null},a.interactable=f,a.element=y,q(a.prepared,d),a.rect=f&&d.name?f.getRect(y):null,Tt(a,l),l.fire("autoStart:prepared",{interaction:a})}function ze(a,o,l,d){var f=a.options,y=f[l.name].max,M=f[l.name].maxPerElement,T=d.autoStart.maxInteractions,D=0,F=0,L=0;if(!(y&&M&&T))return!1;for(var H=0,ee=d.interactions.list;H<ee.length;H++){var pe=ee[H],he=pe.prepared.name;if(pe.interacting()&&(++D>=T||pe.interactable===a&&((F+=he===l.name?1:0)>=y||pe.element===o&&(L++,he===l.name&&L>=M))))return!1}return T>0}function vt(a,o){return A.number(a)?(o.autoStart.maxInteractions=a,this):o.autoStart.maxInteractions}function bt(a,o,l){var d=l.autoStart.cursorElement;d&&d!==a&&(d.style.cursor=""),a.ownerDocument.documentElement.style.cursor=o,a.style.cursor=o,l.autoStart.cursorElement=o?a:null}function Tt(a,o){var l=a.interactable,d=a.element,f=a.prepared;if(a.pointerType==="mouse"&&l&&l.options.styleCursor){var y="";if(f.name){var M=l.options[f.name].cursorChecker;y=A.func(M)?M(f,l,d,a._interacting):o.actions.map[f.name].getCursor(f)}bt(a.element,y||"",o)}else o.autoStart.cursorElement&&bt(o.autoStart.cursorElement,"",o)}var Xt={id:"auto-start/base",before:["actions"],install:function(a){var o=a.interactStatic,l=a.defaults;a.usePlugin(we),l.base.actionChecker=null,l.base.styleCursor=!0,de(l.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),o.maxInteractions=function(d){return vt(d,a)},a.autoStart={maxInteractions:1/0,withinInteractionLimit:ze,cursorElement:null}},listeners:{"interactions:down":function(a,o){var l=a.interaction,d=a.pointer,f=a.event,y=a.eventTarget;l.interacting()||Xe(l,Ve(l,d,f,y,o),o)},"interactions:move":function(a,o){(function(l,d){var f=l.interaction,y=l.pointer,M=l.event,T=l.eventTarget;f.pointerType!=="mouse"||f.pointerIsDown||f.interacting()||Xe(f,Ve(f,y,M,T,d),d)})(a,o),function(l,d){var f=l.interaction;if(f.pointerIsDown&&!f.interacting()&&f.pointerWasMoved&&f.prepared.name){d.fire("autoStart:before-start",l);var y=f.interactable,M=f.prepared.name;M&&y&&(y.options[M].manualStart||!ze(y,f.element,f.prepared,d)?f.stop():(f.start(f.prepared,y,f.element),Tt(f,d)))}}(a,o)},"interactions:stop":function(a,o){var l=a.interaction,d=l.interactable;d&&d.options.styleCursor&&bt(l.element,"",o)}},maxInteractions:vt,withinInteractionLimit:ze,validateAction:Ne},gt=Xt,ke={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(a,o){var l=a.interaction,d=a.eventTarget,f=a.dx,y=a.dy;if(l.prepared.name==="drag"){var M=Math.abs(f),T=Math.abs(y),D=l.interactable.options.drag,F=D.startAxis,L=M>T?"x":M<T?"y":"xy";if(l.prepared.axis=D.lockAxis==="start"?L[0]:D.lockAxis,L!=="xy"&&F!=="xy"&&F!==L){l.prepared.name=null;for(var H=d,ee=function(he){if(he!==l.interactable){var ge=l.interactable.options.drag;if(!ge.manualStart&&he.testIgnoreAllow(ge,H,d)){var Le=he.getAction(l.downPointer,l.downEvent,l,H);if(Le&&Le.name==="drag"&&function(Ae,He){if(!He)return!1;var Qe=He.options.drag.startAxis;return Ae==="xy"||Qe==="xy"||Qe===Ae}(L,he)&&gt.validateAction(Le,he,H,d,o))return he}}};A.element(H);){var pe=o.interactables.forEachMatch(H,ee);if(pe){l.prepared.name="drag",l.interactable=pe,l.element=H;break}H=Se(H)}}}}}};function Lt(a){var o=a.prepared&&a.prepared.name;if(!o)return null;var l=a.interactable.options;return l[o].hold||l[o].delay}var xt={id:"auto-start/hold",install:function(a){var o=a.defaults;a.usePlugin(gt),o.perAction.hold=0,o.perAction.delay=0},listeners:{"interactions:new":function(a){a.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(a){var o=a.interaction,l=Lt(o);l>0&&(o.autoStartHoldTimer=setTimeout(function(){o.start(o.prepared,o.interactable,o.element)},l))},"interactions:move":function(a){var o=a.interaction,l=a.duplicate;o.autoStartHoldTimer&&o.pointerWasMoved&&!l&&(clearTimeout(o.autoStartHoldTimer),o.autoStartHoldTimer=null)},"autoStart:before-start":function(a){var o=a.interaction;Lt(o)>0&&(o.prepared.name=null)}},getHoldDuration:Lt},on=xt,Zn={id:"auto-start",install:function(a){a.usePlugin(gt),a.usePlugin(on),a.usePlugin(ke)}},qt=function(a){return/^(always|never|auto)$/.test(a)?(this.options.preventDefault=a,this):A.bool(a)?(this.options.preventDefault=a?"always":"never",this):this.options.preventDefault};function fr(a){var o=a.interaction,l=a.event;o.interactable&&o.interactable.checkAndPreventDefault(l)}var Ct={id:"core/interactablePreventDefault",install:function(a){var o=a.Interactable;o.prototype.preventDefault=qt,o.prototype.checkAndPreventDefault=function(l){return function(d,f,y){var M=d.options.preventDefault;if(M!=="never")if(M!=="always"){if(f.events.supportsPassive&&/^touch(start|move)$/.test(y.type)){var T=N(y.target).document,D=f.getDocOptions(T);if(!D||!D.events||D.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(y.type)||A.element(y.target)&&be(y.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||y.preventDefault()}else y.preventDefault()}(this,a,l)},a.interactions.docEvents.push({type:"dragstart",listener:function(l){for(var d=0,f=a.interactions.list;d<f.length;d++){var y=f[d];if(y.element&&(y.element===l.target||ue(y.element,l.target)))return void y.interactable.checkAndPreventDefault(l)}}})},listeners:["down","move","up","cancel"].reduce(function(a,o){return a["interactions:".concat(o)]=fr,a},{})};function an(a,o){if(o.phaselessTypes[a])return!0;for(var l in o.map)if(a.indexOf(l)===0&&a.substr(l.length)in o.phases)return!0;return!1}function Rn(a){var o={};for(var l in a){var d=a[l];A.plainObject(d)?o[l]=Rn(d):A.array(d)?o[l]=Mt(d):o[l]=d}return o}var Ht=function(){function a(o){s(this,a),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=void 0,this.result=void 0,this.endResult=void 0,this.startEdges=void 0,this.edges=void 0,this.interaction=void 0,this.interaction=o,this.result=Jn(),this.edges={left:!1,right:!1,top:!1,bottom:!1}}return u(a,[{key:"start",value:function(o,l){var d,f,y=o.phase,M=this.interaction,T=function(F){var L=F.interactable.options[F.prepared.name],H=L.modifiers;return H&&H.length?H:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map(function(ee){var pe=L[ee];return pe&&pe.enabled&&{options:pe,methods:pe._methods}}).filter(function(ee){return!!ee})}(M);this.prepareStates(T),this.startEdges=de({},M.edges),this.edges=de({},this.startEdges),this.startOffset=(d=M.rect,f=l,d?{left:f.x-d.left,top:f.y-d.top,right:d.right-f.x,bottom:d.bottom-f.y}:{left:0,top:0,right:0,bottom:0}),this.startDelta={x:0,y:0};var D=this.fillArg({phase:y,pageCoords:l,preEnd:!1});return this.result=Jn(),this.startAll(D),this.result=this.setAll(D)}},{key:"fillArg",value:function(o){var l=this.interaction;return o.interaction=l,o.interactable=l.interactable,o.element=l.element,o.rect||(o.rect=l.rect),o.edges||(o.edges=this.startEdges),o.startOffset=this.startOffset,o}},{key:"startAll",value:function(o){for(var l=0,d=this.states;l<d.length;l++){var f=d[l];f.methods.start&&(o.state=f,f.methods.start(o))}}},{key:"setAll",value:function(o){var l=o.phase,d=o.preEnd,f=o.skipModifiers,y=o.rect,M=o.edges;o.coords=de({},o.pageCoords),o.rect=de({},y),o.edges=de({},M);for(var T=f?this.states.slice(f):this.states,D=Jn(o.coords,o.rect),F=0;F<T.length;F++){var L,H=T[F],ee=H.options,pe=de({},o.coords),he=null;(L=H.methods)!=null&&L.set&&this.shouldDo(ee,d,l)&&(o.state=H,he=H.methods.set(o),Ot(o.edges,o.rect,{x:o.coords.x-pe.x,y:o.coords.y-pe.y})),D.eventProps.push(he)}de(this.edges,o.edges),D.delta.x=o.coords.x-o.pageCoords.x,D.delta.y=o.coords.y-o.pageCoords.y,D.rectDelta.left=o.rect.left-y.left,D.rectDelta.right=o.rect.right-y.right,D.rectDelta.top=o.rect.top-y.top,D.rectDelta.bottom=o.rect.bottom-y.bottom;var ge=this.result.coords,Le=this.result.rect;if(ge&&Le){var Ae=D.rect.left!==Le.left||D.rect.right!==Le.right||D.rect.top!==Le.top||D.rect.bottom!==Le.bottom;D.changed=Ae||ge.x!==D.coords.x||ge.y!==D.coords.y}return D}},{key:"applyToInteraction",value:function(o){var l=this.interaction,d=o.phase,f=l.coords.cur,y=l.coords.start,M=this.result,T=this.startDelta,D=M.delta;d==="start"&&de(this.startDelta,M.delta);for(var F=0,L=[[y,T],[f,D]];F<L.length;F++){var H=L[F],ee=H[0],pe=H[1];ee.page.x+=pe.x,ee.page.y+=pe.y,ee.client.x+=pe.x,ee.client.y+=pe.y}var he=this.result.rectDelta,ge=o.rect||l.rect;ge.left+=he.left,ge.right+=he.right,ge.top+=he.top,ge.bottom+=he.bottom,ge.width=ge.right-ge.left,ge.height=ge.bottom-ge.top}},{key:"setAndApply",value:function(o){var l=this.interaction,d=o.phase,f=o.preEnd,y=o.skipModifiers,M=this.setAll(this.fillArg({preEnd:f,phase:d,pageCoords:o.modifiedCoords||l.coords.cur.page}));if(this.result=M,!M.changed&&(!y||y<this.states.length)&&l.interacting())return!1;if(o.modifiedCoords){var T=l.coords.cur.page,D={x:o.modifiedCoords.x-T.x,y:o.modifiedCoords.y-T.y};M.coords.x+=D.x,M.coords.y+=D.y,M.delta.x+=D.x,M.delta.y+=D.y}this.applyToInteraction(o)}},{key:"beforeEnd",value:function(o){var l=o.interaction,d=o.event,f=this.states;if(f&&f.length){for(var y=!1,M=0;M<f.length;M++){var T=f[M];o.state=T;var D=T.options,F=T.methods,L=F.beforeEnd&&F.beforeEnd(o);if(L)return this.endResult=L,!1;y=y||!y&&this.shouldDo(D,!0,o.phase,!0)}y&&l.move({event:d,preEnd:!0})}}},{key:"stop",value:function(o){var l=o.interaction;if(this.states&&this.states.length){var d=de({states:this.states,interactable:l.interactable,element:l.element,rect:null},o);this.fillArg(d);for(var f=0,y=this.states;f<y.length;f++){var M=y[f];d.state=M,M.methods.stop&&M.methods.stop(d)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(o){this.states=[];for(var l=0;l<o.length;l++){var d=o[l],f=d.options,y=d.methods,M=d.name;this.states.push({options:f,methods:y,index:l,name:M})}return this.states}},{key:"restoreInteractionCoords",value:function(o){var l=o.interaction,d=l.coords,f=l.rect,y=l.modification;if(y.result){for(var M=y.startDelta,T=y.result,D=T.delta,F=T.rectDelta,L=0,H=[[d.start,M],[d.cur,D]];L<H.length;L++){var ee=H[L],pe=ee[0],he=ee[1];pe.page.x-=he.x,pe.page.y-=he.y,pe.client.x-=he.x,pe.client.y-=he.y}f.left-=F.left,f.right-=F.right,f.top-=F.top,f.bottom-=F.bottom}}},{key:"shouldDo",value:function(o,l,d,f){return!(!o||o.enabled===!1||f&&!o.endOnly||o.endOnly&&!l||d==="start"&&!o.setStart)}},{key:"copyFrom",value:function(o){this.startOffset=o.startOffset,this.startDelta=o.startDelta,this.startEdges=o.startEdges,this.edges=o.edges,this.states=o.states.map(function(l){return Rn(l)}),this.result=Jn(de({},o.result.coords),de({},o.result.rect))}},{key:"destroy",value:function(){for(var o in this)this[o]=null}}]),a}();function Jn(a,o){return{rect:o,coords:a,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function Pn(a,o){var l=a.defaults,d={start:a.start,set:a.set,beforeEnd:a.beforeEnd,stop:a.stop},f=function(y){var M=y||{};for(var T in M.enabled=M.enabled!==!1,l)T in M||(M[T]=l[T]);var D={options:M,methods:d,name:o,enable:function(){return M.enabled=!0,D},disable:function(){return M.enabled=!1,D}};return D};return o&&typeof o=="string"&&(f._defaults=l,f._methods=d),f}function Qn(a){var o=a.iEvent,l=a.interaction.modification.result;l&&(o.modifiers=l.eventProps)}var vu={id:"modifiers/base",before:["actions"],install:function(a){a.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(a){var o=a.interaction;o.modification=new Ht(o)},"interactions:before-action-start":function(a){var o=a.interaction,l=a.interaction.modification;l.start(a,o.coords.start.page),o.edges=l.edges,l.applyToInteraction(a)},"interactions:before-action-move":function(a){var o=a.interaction,l=o.modification,d=l.setAndApply(a);return o.edges=l.edges,d},"interactions:before-action-end":function(a){var o=a.interaction,l=o.modification,d=l.beforeEnd(a);return o.edges=l.startEdges,d},"interactions:action-start":Qn,"interactions:action-move":Qn,"interactions:action-end":Qn,"interactions:after-action-start":function(a){return a.interaction.modification.restoreInteractionCoords(a)},"interactions:after-action-move":function(a){return a.interaction.modification.restoreInteractionCoords(a)},"interactions:stop":function(a){return a.interaction.modification.stop(a)}}},Ka=vu,$a={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}},qs=function(a){p(l,a);var o=S(l);function l(d,f,y,M,T,D,F){var L;s(this,l),(L=o.call(this,d)).relatedTarget=null,L.screenX=void 0,L.screenY=void 0,L.button=void 0,L.buttons=void 0,L.ctrlKey=void 0,L.shiftKey=void 0,L.altKey=void 0,L.metaKey=void 0,L.page=void 0,L.client=void 0,L.delta=void 0,L.rect=void 0,L.x0=void 0,L.y0=void 0,L.t0=void 0,L.dt=void 0,L.duration=void 0,L.clientX0=void 0,L.clientY0=void 0,L.velocity=void 0,L.speed=void 0,L.swipe=void 0,L.axes=void 0,L.preEnd=void 0,T=T||d.element;var H=d.interactable,ee=(H&&H.options||$a).deltaSource,pe=tt(H,T,y),he=M==="start",ge=M==="end",Le=he?x(L):d.prevEvent,Ae=he?d.coords.start:ge?{page:Le.page,client:Le.client,timeStamp:d.coords.cur.timeStamp}:d.coords.cur;return L.page=de({},Ae.page),L.client=de({},Ae.client),L.rect=de({},d.rect),L.timeStamp=Ae.timeStamp,ge||(L.page.x-=pe.x,L.page.y-=pe.y,L.client.x-=pe.x,L.client.y-=pe.y),L.ctrlKey=f.ctrlKey,L.altKey=f.altKey,L.shiftKey=f.shiftKey,L.metaKey=f.metaKey,L.button=f.button,L.buttons=f.buttons,L.target=T,L.currentTarget=T,L.preEnd=D,L.type=F||y+(M||""),L.interactable=H,L.t0=he?d.pointers[d.pointers.length-1].downTime:Le.t0,L.x0=d.coords.start.page.x-pe.x,L.y0=d.coords.start.page.y-pe.y,L.clientX0=d.coords.start.client.x-pe.x,L.clientY0=d.coords.start.client.y-pe.y,L.delta=he||ge?{x:0,y:0}:{x:L[ee].x-Le[ee].x,y:L[ee].y-Le[ee].y},L.dt=d.coords.delta.timeStamp,L.duration=L.timeStamp-L.t0,L.velocity=de({},d.coords.velocity[ee]),L.speed=yt(L.velocity.x,L.velocity.y),L.swipe=ge||M==="inertiastart"?L.getSwipe():null,L}return u(l,[{key:"getSwipe",value:function(){var d=this._interaction;if(d.prevEvent.speed<600||this.timeStamp-d.prevEvent.timeStamp>150)return null;var f=180*Math.atan2(d.prevEvent.velocityY,d.prevEvent.velocityX)/Math.PI;f<0&&(f+=360);var y=112.5<=f&&f<247.5,M=202.5<=f&&f<337.5;return{up:M,down:!M&&22.5<=f&&f<157.5,left:y,right:!y&&(292.5<=f||f<67.5),angle:f,speed:d.prevEvent.speed,velocity:{x:d.prevEvent.velocityX,y:d.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}]),l}(ot);Object.defineProperties(qs.prototype,{pageX:{get:function(){return this.page.x},set:function(a){this.page.x=a}},pageY:{get:function(){return this.page.y},set:function(a){this.page.y=a}},clientX:{get:function(){return this.client.x},set:function(a){this.client.x=a}},clientY:{get:function(){return this.client.y},set:function(a){this.client.y=a}},dx:{get:function(){return this.delta.x},set:function(a){this.delta.x=a}},dy:{get:function(){return this.delta.y},set:function(a){this.delta.y=a}},velocityX:{get:function(){return this.velocity.x},set:function(a){this.velocity.x=a}},velocityY:{get:function(){return this.velocity.y},set:function(a){this.velocity.y=a}}});var xu=u(function a(o,l,d,f,y){s(this,a),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=o,this.pointer=l,this.event=d,this.downTime=f,this.downTarget=y}),yu=function(a){return a.interactable="",a.element="",a.prepared="",a.pointerIsDown="",a.pointerWasMoved="",a._proxy="",a}({}),Za=function(a){return a.start="",a.move="",a.end="",a.stop="",a.interacting="",a}({}),Su=0,Mu=function(){function a(o){var l=this,d=o.pointerType,f=o.scopeFire;s(this,a),this.interactable=null,this.element=null,this.rect=null,this._rects=void 0,this.edges=null,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=void 0,this.simulation=null,this.doMove=X(function(L){this.move(L)},"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},prev:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},cur:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},delta:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},velocity:{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},this._id=Su++,this._scopeFire=f,this.pointerType=d;var y=this;this._proxy={};var M=function(L){Object.defineProperty(l._proxy,L,{get:function(){return y[L]}})};for(var T in yu)M(T);var D=function(L){Object.defineProperty(l._proxy,L,{value:function(){return y[L].apply(y,arguments)}})};for(var F in Za)D(F);this._scopeFire("interactions:new",{interaction:this})}return u(a,[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(o,l,d){var f=this.updatePointer(o,l,d,!0),y=this.pointers[f];this._scopeFire("interactions:down",{pointer:o,event:l,eventTarget:d,pointerIndex:f,pointerInfo:y,type:"down",interaction:this})}},{key:"start",value:function(o,l,d){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(o.name==="gesture"?2:1)||!l.options[o.name].enabled)&&(q(this.prepared,o),this.interactable=l,this.element=d,this.rect=l.getRect(d),this.edges=this.prepared.edges?de({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(o,l,d){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(o,l,d,!1);var f,y,M=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(f=this.coords.cur.client.x-this.coords.start.client.x,y=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=yt(f,y)>this.pointerMoveTolerance);var T,D,F,L=this.getPointerIndex(o),H={pointer:o,pointerIndex:L,pointerInfo:this.pointers[L],event:l,type:"move",eventTarget:d,dx:f,dy:y,duplicate:M,interaction:this};M||(T=this.coords.velocity,D=this.coords.delta,F=Math.max(D.timeStamp/1e3,.001),T.page.x=D.page.x/F,T.page.y=D.page.y/F,T.client.x=D.client.x/F,T.client.y=D.client.y/F,T.timeStamp=F),this._scopeFire("interactions:move",H),M||this.simulation||(this.interacting()&&(H.type=null,this.move(H)),this.pointerWasMoved&&E(this.coords.prev,this.coords.cur))}},{key:"move",value:function(o){o&&o.event||W(this.coords.delta),(o=de({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},o||{})).phase="move",this._doPhase(o)}},{key:"pointerUp",value:function(o,l,d,f){var y=this.getPointerIndex(o);y===-1&&(y=this.updatePointer(o,l,d,!1));var M=/cancel$/i.test(l.type)?"cancel":"up";this._scopeFire("interactions:".concat(M),{pointer:o,pointerIndex:y,pointerInfo:this.pointers[y],event:l,eventTarget:d,type:M,curEventTarget:f,interaction:this}),this.simulation||this.end(l),this.removePointer(o,l)}},{key:"documentBlur",value:function(o){this.end(o),this._scopeFire("interactions:blur",{event:o,type:"blur",interaction:this})}},{key:"end",value:function(o){var l;this._ending=!0,o=o||this._latestPointer.event,this.interacting()&&(l=this._doPhase({event:o,interaction:this,phase:"end"})),this._ending=!1,l===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(o){var l=Fe(o);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:z(this.pointers,function(d){return d.id===l})}},{key:"getPointerInfo",value:function(o){return this.pointers[this.getPointerIndex(o)]}},{key:"updatePointer",value:function(o,l,d,f){var y,M,T,D=Fe(o),F=this.getPointerIndex(o),L=this.pointers[F];return f=f!==!1&&(f||/(down|start)$/i.test(l.type)),L?L.pointer=o:(L=new xu(D,o,l,null,null),F=this.pointers.length,this.pointers.push(L)),Me(this.coords.cur,this.pointers.map(function(H){return H.pointer}),this._now()),y=this.coords.delta,M=this.coords.prev,T=this.coords.cur,y.page.x=T.page.x-M.page.x,y.page.y=T.page.y-M.page.y,y.client.x=T.client.x-M.client.x,y.client.y=T.client.y-M.client.y,y.timeStamp=T.timeStamp-M.timeStamp,f&&(this.pointerIsDown=!0,L.downTime=this.coords.cur.timeStamp,L.downTarget=d,U(this.downPointer,o),this.interacting()||(E(this.coords.start,this.coords.cur),E(this.coords.prev,this.coords.cur),this.downEvent=l,this.pointerWasMoved=!1)),this._updateLatestPointer(o,l,d),this._scopeFire("interactions:update-pointer",{pointer:o,event:l,eventTarget:d,down:f,pointerInfo:L,pointerIndex:F,interaction:this}),F}},{key:"removePointer",value:function(o,l){var d=this.getPointerIndex(o);if(d!==-1){var f=this.pointers[d];this._scopeFire("interactions:remove-pointer",{pointer:o,event:l,eventTarget:null,pointerIndex:d,pointerInfo:f,interaction:this}),this.pointers.splice(d,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(o,l,d){this._latestPointer.pointer=o,this._latestPointer.event=l,this._latestPointer.eventTarget=d}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(o,l,d,f){return new qs(this,o,this.prepared.name,l,this.element,d,f)}},{key:"_fireEvent",value:function(o){var l;(l=this.interactable)==null||l.fire(o),(!this.prevEvent||o.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=o)}},{key:"_doPhase",value:function(o){var l=o.event,d=o.phase,f=o.preEnd,y=o.type,M=this.rect;if(M&&d==="move"&&(Ot(this.edges,M,this.coords.delta[this.interactable.options.deltaSource]),M.width=M.right-M.left,M.height=M.bottom-M.top),this._scopeFire("interactions:before-action-".concat(d),o)===!1)return!1;var T=o.iEvent=this._createPreparedEvent(l,d,f,y);return this._scopeFire("interactions:action-".concat(d),o),d==="start"&&(this.prevEvent=T),this._fireEvent(T),this._scopeFire("interactions:after-action-".concat(d),o),!0}},{key:"_now",value:function(){return Date.now()}}]),a}();function Ja(a){Qa(a.interaction)}function Qa(a){if(!function(l){return!(!l.offset.pending.x&&!l.offset.pending.y)}(a))return!1;var o=a.offset.pending;return Ys(a.coords.cur,o),Ys(a.coords.delta,o),Ot(a.edges,a.rect,o),o.x=0,o.y=0,!0}function bu(a){var o=a.x,l=a.y;this.offset.pending.x+=o,this.offset.pending.y+=l,this.offset.total.x+=o,this.offset.total.y+=l}function Ys(a,o){var l=a.page,d=a.client,f=o.x,y=o.y;l.x+=f,l.y+=y,d.x+=f,d.y+=y}Za.offsetBy="";var Eu={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(a){a.Interaction.prototype.offsetBy=bu},listeners:{"interactions:new":function(a){a.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(a){return function(o){o.pointerIsDown&&(Ys(o.coords.cur,o.offset.total),o.offset.pending.x=0,o.offset.pending.y=0)}(a.interaction)},"interactions:before-action-start":Ja,"interactions:before-action-move":Ja,"interactions:before-action-end":function(a){var o=a.interaction;if(Qa(o))return o.move({offset:!0}),o.end(),!1},"interactions:stop":function(a){var o=a.interaction;o.offset.total.x=0,o.offset.total.y=0,o.offset.pending.x=0,o.offset.pending.y=0}}},el=Eu,Tu=function(){function a(o){s(this,a),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=void 0,this.modifierCount=0,this.modifierArg=void 0,this.startCoords=void 0,this.t0=0,this.v0=0,this.te=0,this.targetOffset=void 0,this.modifiedOffset=void 0,this.currentOffset=void 0,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=void 0,this.interaction=void 0,this.interaction=o}return u(a,[{key:"start",value:function(o){var l=this.interaction,d=Gr(l);if(!d||!d.enabled)return!1;var f=l.coords.velocity.client,y=yt(f.x,f.y),M=this.modification||(this.modification=new Ht(l));if(M.copyFrom(l.modification),this.t0=l._now(),this.allowResume=d.allowResume,this.v0=y,this.currentOffset={x:0,y:0},this.startCoords=l.coords.cur.page,this.modifierArg=M.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-l.coords.cur.timeStamp<50&&y>d.minSpeed&&y>d.endSpeed)this.startInertia();else{if(M.result=M.setAll(this.modifierArg),!M.result.changed)return!1;this.startSmoothEnd()}return l.modification.result.rect=null,l.offsetBy(this.targetOffset),l._doPhase({interaction:l,event:o,phase:"inertiastart"}),l.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),l.modification.result.rect=null,this.active=!0,l.simulation=this,!0}},{key:"startInertia",value:function(){var o=this,l=this.interaction.coords.velocity.client,d=Gr(this.interaction),f=d.resistance,y=-Math.log(d.endSpeed/this.v0)/f;this.targetOffset={x:(l.x-y)/f,y:(l.y-y)/f},this.te=y,this.lambda_v0=f/this.v0,this.one_ve_v0=1-d.endSpeed/this.v0;var M=this.modification,T=this.modifierArg;T.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},M.result=M.setAll(T),M.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+M.result.delta.x,y:this.targetOffset.y+M.result.delta.y}),this.onNextFrame(function(){return o.inertiaTick()})}},{key:"startSmoothEnd",value:function(){var o=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame(function(){return o.smoothEndTick()})}},{key:"onNextFrame",value:function(o){var l=this;this.timeout=mn.request(function(){l.active&&o()})}},{key:"inertiaTick",value:function(){var o,l,d,f,y,M,T,D=this,F=this.interaction,L=Gr(F).resistance,H=(F._now()-this.t0)/1e3;if(H<this.te){var ee,pe=1-(Math.exp(-L*H)-this.lambda_v0)/this.one_ve_v0;this.isModified?(o=0,l=0,d=this.targetOffset.x,f=this.targetOffset.y,y=this.modifiedOffset.x,M=this.modifiedOffset.y,ee={x:tl(T=pe,o,d,y),y:tl(T,l,f,M)}):ee={x:this.targetOffset.x*pe,y:this.targetOffset.y*pe};var he={x:ee.x-this.currentOffset.x,y:ee.y-this.currentOffset.y};this.currentOffset.x+=he.x,this.currentOffset.y+=he.y,F.offsetBy(he),F.move(),this.onNextFrame(function(){return D.inertiaTick()})}else F.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var o=this,l=this.interaction,d=l._now()-this.t0,f=Gr(l).smoothEndDuration;if(d<f){var y={x:nl(d,0,this.targetOffset.x,f),y:nl(d,0,this.targetOffset.y,f)},M={x:y.x-this.currentOffset.x,y:y.y-this.currentOffset.y};this.currentOffset.x+=M.x,this.currentOffset.y+=M.y,l.offsetBy(M),l.move({skipModifiers:this.modifierCount}),this.onNextFrame(function(){return o.smoothEndTick()})}else l.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(o){var l=o.pointer,d=o.event,f=o.eventTarget,y=this.interaction;y.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),y.updatePointer(l,d,f,!0),y._doPhase({interaction:y,event:d,phase:"resume"}),E(y.coords.prev,y.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,mn.cancel(this.timeout)}}]),a}();function Gr(a){var o=a.interactable,l=a.prepared;return o&&o.options&&l.name&&o.options[l.name].inertia}var wu={id:"inertia",before:["modifiers","actions"],install:function(a){var o=a.defaults;a.usePlugin(el),a.usePlugin(Ka),a.actions.phases.inertiastart=!0,a.actions.phases.resume=!0,o.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(a){var o=a.interaction;o.inertia=new Tu(o)},"interactions:before-action-end":function(a){var o=a.interaction,l=a.event;return(!o._interacting||o.simulation||!o.inertia.start(l))&&null},"interactions:down":function(a){var o=a.interaction,l=a.eventTarget,d=o.inertia;if(d.active)for(var f=l;A.element(f);){if(f===o.element){d.resume(a);break}f=Se(f)}},"interactions:stop":function(a){var o=a.interaction.inertia;o.active&&o.stop()},"interactions:before-action-resume":function(a){var o=a.interaction.modification;o.stop(a),o.start(a,a.interaction.coords.cur.page),o.applyToInteraction(a)},"interactions:before-action-inertiastart":function(a){return a.interaction.modification.setAndApply(a)},"interactions:action-resume":Qn,"interactions:action-inertiastart":Qn,"interactions:after-action-inertiastart":function(a){return a.interaction.modification.restoreInteractionCoords(a)},"interactions:after-action-resume":function(a){return a.interaction.modification.restoreInteractionCoords(a)}}};function tl(a,o,l,d){var f=1-a;return f*f*o+2*f*a*l+a*a*d}function nl(a,o,l,d){return-l*(a/=d)*(a-2)+o}var Au=wu;function il(a,o){for(var l=0;l<o.length;l++){var d=o[l];if(a.immediatePropagationStopped)break;d(a)}}var rl=function(){function a(o){s(this,a),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=de({},o||{})}return u(a,[{key:"fire",value:function(o){var l,d=this.global;(l=this.types[o.type])&&il(o,l),!o.propagationStopped&&d&&(l=d[o.type])&&il(o,l)}},{key:"on",value:function(o,l){var d=nt(o,l);for(o in d)this.types[o]=Je(this.types[o]||[],d[o])}},{key:"off",value:function(o,l){var d=nt(o,l);for(o in d){var f=this.types[o];if(f&&f.length)for(var y=0,M=d[o];y<M.length;y++){var T=M[y],D=f.indexOf(T);D!==-1&&f.splice(D,1)}}}},{key:"getRect",value:function(o){return null}}]),a}(),Cu=function(){function a(o){s(this,a),this.currentTarget=void 0,this.originalEvent=void 0,this.type=void 0,this.originalEvent=o,U(this,o)}return u(a,[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}]),a}();function pr(a){return A.object(a)?{capture:!!a.capture,passive:!!a.passive}:{capture:!!a,passive:!1}}function Wr(a,o){return a===o||(typeof a=="boolean"?!!o.capture===a&&!o.passive:!!a.capture==!!o.capture&&!!a.passive==!!o.passive)}var Ru={id:"events",install:function(a){var o,l=[],d={},f=[],y={add:M,remove:T,addDelegate:function(L,H,ee,pe,he){var ge=pr(he);if(!d[ee]){d[ee]=[];for(var Le=0;Le<f.length;Le++){var Ae=f[Le];M(Ae,ee,D),M(Ae,ee,F,!0)}}var He=d[ee],Qe=Ee(He,function(ut){return ut.selector===L&&ut.context===H});Qe||(Qe={selector:L,context:H,listeners:[]},He.push(Qe)),Qe.listeners.push({func:pe,options:ge})},removeDelegate:function(L,H,ee,pe,he){var ge,Le=pr(he),Ae=d[ee],He=!1;if(Ae)for(ge=Ae.length-1;ge>=0;ge--){var Qe=Ae[ge];if(Qe.selector===L&&Qe.context===H){for(var ut=Qe.listeners,je=ut.length-1;je>=0;je--){var et=ut[je];if(et.func===pe&&Wr(et.options,Le)){ut.splice(je,1),ut.length||(Ae.splice(ge,1),T(H,ee,D),T(H,ee,F,!0)),He=!0;break}}if(He)break}}},delegateListener:D,delegateUseCapture:F,delegatedEvents:d,documents:f,targets:l,supportsOptions:!1,supportsPassive:!1};function M(L,H,ee,pe){if(L.addEventListener){var he=pr(pe),ge=Ee(l,function(Le){return Le.eventTarget===L});ge||(ge={eventTarget:L,events:{}},l.push(ge)),ge.events[H]||(ge.events[H]=[]),Ee(ge.events[H],function(Le){return Le.func===ee&&Wr(Le.options,he)})||(L.addEventListener(H,ee,y.supportsOptions?he:he.capture),ge.events[H].push({func:ee,options:he}))}}function T(L,H,ee,pe){if(L.addEventListener&&L.removeEventListener){var he=z(l,function(jt){return jt.eventTarget===L}),ge=l[he];if(ge&&ge.events)if(H!=="all"){var Le=!1,Ae=ge.events[H];if(Ae){if(ee==="all"){for(var He=Ae.length-1;He>=0;He--){var Qe=Ae[He];T(L,H,Qe.func,Qe.options)}return}for(var ut=pr(pe),je=0;je<Ae.length;je++){var et=Ae[je];if(et.func===ee&&Wr(et.options,ut)){L.removeEventListener(H,ee,y.supportsOptions?ut:ut.capture),Ae.splice(je,1),Ae.length===0&&(delete ge.events[H],Le=!0);break}}}Le&&!Object.keys(ge.events).length&&l.splice(he,1)}else for(H in ge.events)ge.events.hasOwnProperty(H)&&T(L,H,"all")}}function D(L,H){for(var ee=pr(H),pe=new Cu(L),he=d[L.type],ge=Ie(L)[0],Le=ge;A.element(Le);){for(var Ae=0;Ae<he.length;Ae++){var He=he[Ae],Qe=He.selector,ut=He.context;if(be(Le,Qe)&&ue(ut,ge)&&ue(ut,Le)){var je=He.listeners;pe.currentTarget=Le;for(var et=0;et<je.length;et++){var jt=je[et];Wr(jt.options,ee)&&jt.func(pe)}}}Le=Se(Le)}}function F(L){return D(L,!0)}return(o=a.document)==null||o.createElement("div").addEventListener("test",null,{get capture(){return y.supportsOptions=!0},get passive(){return y.supportsPassive=!0}}),a.events=y,y}},js={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(a){for(var o=0,l=js.methodOrder;o<l.length;o++){var d=l[o],f=js[d](a);if(f)return f}return null},simulationResume:function(a){var o=a.pointerType,l=a.eventType,d=a.eventTarget,f=a.scope;if(!/down|start/i.test(l))return null;for(var y=0,M=f.interactions.list;y<M.length;y++){var T=M[y],D=d;if(T.simulation&&T.simulation.allowResume&&T.pointerType===o)for(;D;){if(D===T.element)return T;D=Se(D)}}return null},mouseOrPen:function(a){var o,l=a.pointerId,d=a.pointerType,f=a.eventType,y=a.scope;if(d!=="mouse"&&d!=="pen")return null;for(var M=0,T=y.interactions.list;M<T.length;M++){var D=T[M];if(D.pointerType===d){if(D.simulation&&!sl(D,l))continue;if(D.interacting())return D;o||(o=D)}}if(o)return o;for(var F=0,L=y.interactions.list;F<L.length;F++){var H=L[F];if(!(H.pointerType!==d||/down/i.test(f)&&H.simulation))return H}return null},hasPointer:function(a){for(var o=a.pointerId,l=0,d=a.scope.interactions.list;l<d.length;l++){var f=d[l];if(sl(f,o))return f}return null},idle:function(a){for(var o=a.pointerType,l=0,d=a.scope.interactions.list;l<d.length;l++){var f=d[l];if(f.pointers.length===1){var y=f.interactable;if(y&&(!y.options.gesture||!y.options.gesture.enabled))continue}else if(f.pointers.length>=2)continue;if(!f.interacting()&&o===f.pointerType)return f}return null}};function sl(a,o){return a.pointers.some(function(l){return l.id===o})}var Pu=js,Ks=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function ol(a,o){return function(l){var d=o.interactions.list,f=Ye(l),y=Ie(l),M=y[0],T=y[1],D=[];if(/^touch/.test(l.type)){o.prevTouchTime=o.now();for(var F=0,L=l.changedTouches;F<L.length;F++){var H=L[F],ee={pointer:H,pointerId:Fe(H),pointerType:f,eventType:l.type,eventTarget:M,curEventTarget:T,scope:o},pe=al(ee);D.push([ee.pointer,ee.eventTarget,ee.curEventTarget,pe])}}else{var he=!1;if(!Z.supportsPointerEvent&&/mouse/.test(l.type)){for(var ge=0;ge<d.length&&!he;ge++)he=d[ge].pointerType!=="mouse"&&d[ge].pointerIsDown;he=he||o.now()-o.prevTouchTime<500||l.timeStamp===0}if(!he){var Le={pointer:l,pointerId:Fe(l),pointerType:f,eventType:l.type,curEventTarget:T,eventTarget:M,scope:o},Ae=al(Le);D.push([Le.pointer,Le.eventTarget,Le.curEventTarget,Ae])}}for(var He=0;He<D.length;He++){var Qe=D[He],ut=Qe[0],je=Qe[1],et=Qe[2];Qe[3][a](ut,l,je,et)}}}function al(a){var o=a.pointerType,l=a.scope,d={interaction:Pu.search(a),searchDetails:a};return l.fire("interactions:find",d),d.interaction||l.interactions.new({pointerType:o})}function $s(a,o){var l=a.doc,d=a.scope,f=a.options,y=d.interactions.docEvents,M=d.events,T=M[o];for(var D in d.browser.isIOS&&!f.events&&(f.events={passive:!1}),M.delegatedEvents)T(l,D,M.delegateListener),T(l,D,M.delegateUseCapture,!0);for(var F=f&&f.events,L=0;L<y.length;L++){var H=y[L];T(l,H.type,H.listener,F)}}var Du={id:"core/interactions",install:function(a){for(var o={},l=0;l<Ks.length;l++){var d=Ks[l];o[d]=ol(d,a)}var f,y=Z.pEventTypes;function M(){for(var T=0,D=a.interactions.list;T<D.length;T++){var F=D[T];if(F.pointerIsDown&&F.pointerType==="touch"&&!F._interacting)for(var L=function(){var pe=ee[H];a.documents.some(function(he){return ue(he.doc,pe.downTarget)})||F.removePointer(pe.pointer,pe.event)},H=0,ee=F.pointers;H<ee.length;H++)L()}}(f=ie.PointerEvent?[{type:y.down,listener:M},{type:y.down,listener:o.pointerDown},{type:y.move,listener:o.pointerMove},{type:y.up,listener:o.pointerUp},{type:y.cancel,listener:o.pointerUp}]:[{type:"mousedown",listener:o.pointerDown},{type:"mousemove",listener:o.pointerMove},{type:"mouseup",listener:o.pointerUp},{type:"touchstart",listener:M},{type:"touchstart",listener:o.pointerDown},{type:"touchmove",listener:o.pointerMove},{type:"touchend",listener:o.pointerUp},{type:"touchcancel",listener:o.pointerUp}]).push({type:"blur",listener:function(T){for(var D=0,F=a.interactions.list;D<F.length;D++)F[D].documentBlur(T)}}),a.prevTouchTime=0,a.Interaction=function(T){p(F,T);var D=S(F);function F(){return s(this,F),D.apply(this,arguments)}return u(F,[{key:"pointerMoveTolerance",get:function(){return a.interactions.pointerMoveTolerance},set:function(L){a.interactions.pointerMoveTolerance=L}},{key:"_now",value:function(){return a.now()}}]),F}(Mu),a.interactions={list:[],new:function(T){T.scopeFire=function(F,L){return a.fire(F,L)};var D=new a.Interaction(T);return a.interactions.list.push(D),D},listeners:o,docEvents:f,pointerMoveTolerance:1},a.usePlugin(Ct)},listeners:{"scope:add-document":function(a){return $s(a,"add")},"scope:remove-document":function(a){return $s(a,"remove")},"interactable:unset":function(a,o){for(var l=a.interactable,d=o.interactions.list.length-1;d>=0;d--){var f=o.interactions.list[d];f.interactable===l&&(f.stop(),o.fire("interactions:destroy",{interaction:f}),f.destroy(),o.interactions.list.length>2&&o.interactions.list.splice(d,1))}}},onDocSignal:$s,doOnInteractions:ol,methodNames:Ks},Lu=Du,ei=function(a){return a[a.On=0]="On",a[a.Off=1]="Off",a}(ei||{}),Iu=function(){function a(o,l,d,f){s(this,a),this.target=void 0,this.options=void 0,this._actions=void 0,this.events=new rl,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._actions=l.actions,this.target=o,this._context=l.context||d,this._win=N(Ze(o)?this._context:o),this._doc=this._win.document,this._scopeEvents=f,this.set(l)}return u(a,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(o,l){return A.func(l.onstart)&&this.on("".concat(o,"start"),l.onstart),A.func(l.onmove)&&this.on("".concat(o,"move"),l.onmove),A.func(l.onend)&&this.on("".concat(o,"end"),l.onend),A.func(l.oninertiastart)&&this.on("".concat(o,"inertiastart"),l.oninertiastart),this}},{key:"updatePerActionListeners",value:function(o,l,d){var f,y=this,M=(f=this._actions.map[o])==null?void 0:f.filterEventType,T=function(D){return(M==null||M(D))&&an(D,y._actions)};(A.array(l)||A.object(l))&&this._onOff(ei.Off,o,l,void 0,T),(A.array(d)||A.object(d))&&this._onOff(ei.On,o,d,void 0,T)}},{key:"setPerAction",value:function(o,l){var d=this._defaults;for(var f in l){var y=f,M=this.options[o],T=l[y];y==="listeners"&&this.updatePerActionListeners(o,M.listeners,T),A.array(T)?M[y]=Mt(T):A.plainObject(T)?(M[y]=de(M[y]||{},Rn(T)),A.object(d.perAction[y])&&"enabled"in d.perAction[y]&&(M[y].enabled=T.enabled!==!1)):A.bool(T)&&A.object(d.perAction[y])?M[y].enabled=T:M[y]=T}}},{key:"getRect",value:function(o){return o=o||(A.element(this.target)?this.target:null),A.string(this.target)&&(o=o||this._context.querySelector(this.target)),Ue(o)}},{key:"rectChecker",value:function(o){var l=this;return A.func(o)?(this.getRect=function(d){var f=de({},o.apply(l,d));return"width"in f||(f.width=f.right-f.left,f.height=f.bottom-f.top),f},this):o===null?(delete this.getRect,this):this.getRect}},{key:"_backCompatOption",value:function(o,l){if(Ze(l)||A.object(l)){for(var d in this.options[o]=l,this._actions.map)this.options[d][o]=l;return this}return this.options[o]}},{key:"origin",value:function(o){return this._backCompatOption("origin",o)}},{key:"deltaSource",value:function(o){return o==="page"||o==="client"?(this.options.deltaSource=o,this):this.options.deltaSource}},{key:"getAllElements",value:function(){var o=this.target;return A.string(o)?Array.from(this._context.querySelectorAll(o)):A.func(o)&&o.getAllElements?o.getAllElements():A.element(o)?[o]:[]}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(o){return this._context===o.ownerDocument||ue(this._context,o)}},{key:"testIgnoreAllow",value:function(o,l,d){return!this.testIgnore(o.ignoreFrom,l,d)&&this.testAllow(o.allowFrom,l,d)}},{key:"testAllow",value:function(o,l,d){return!o||!!A.element(d)&&(A.string(o)?_t(d,o,l):!!A.element(o)&&ue(o,d))}},{key:"testIgnore",value:function(o,l,d){return!(!o||!A.element(d))&&(A.string(o)?_t(d,o,l):!!A.element(o)&&ue(o,d))}},{key:"fire",value:function(o){return this.events.fire(o),this}},{key:"_onOff",value:function(o,l,d,f,y){A.object(l)&&!A.array(l)&&(f=d,d=null);var M=nt(l,d,y);for(var T in M){T==="wheel"&&(T=Z.wheelEvent);for(var D=0,F=M[T];D<F.length;D++){var L=F[D];an(T,this._actions)?this.events[o===ei.On?"on":"off"](T,L):A.string(this.target)?this._scopeEvents[o===ei.On?"addDelegate":"removeDelegate"](this.target,this._context,T,L,f):this._scopeEvents[o===ei.On?"add":"remove"](this.target,T,L,f)}}return this}},{key:"on",value:function(o,l,d){return this._onOff(ei.On,o,l,d)}},{key:"off",value:function(o,l,d){return this._onOff(ei.Off,o,l,d)}},{key:"set",value:function(o){var l=this._defaults;for(var d in A.object(o)||(o={}),this.options=Rn(l.base),this._actions.methodDict){var f=d,y=this._actions.methodDict[f];this.options[f]={},this.setPerAction(f,de(de({},l.perAction),l.actions[f])),this[y](o[f])}for(var M in o)M!=="getRect"?A.func(this[M])&&this[M](o[M]):this.rectChecker(o.getRect);return this}},{key:"unset",value:function(){if(A.string(this.target))for(var o in this._scopeEvents.delegatedEvents)for(var l=this._scopeEvents.delegatedEvents[o],d=l.length-1;d>=0;d--){var f=l[d],y=f.selector,M=f.context,T=f.listeners;y===this.target&&M===this._context&&l.splice(d,1);for(var D=T.length-1;D>=0;D--)this._scopeEvents.removeDelegate(this.target,this._context,o,T[D][0],T[D][1])}else this._scopeEvents.remove(this.target,"all")}}]),a}(),Uu=function(){function a(o){var l=this;s(this,a),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=o,o.addListeners({"interactable:unset":function(d){var f=d.interactable,y=f.target,M=A.string(y)?l.selectorMap[y]:y[l.scope.id],T=z(M,function(D){return D===f});M.splice(T,1)}})}return u(a,[{key:"new",value:function(o,l){l=de(l||{},{actions:this.scope.actions});var d=new this.scope.Interactable(o,l,this.scope.document,this.scope.events);return this.scope.addDocument(d._doc),this.list.push(d),A.string(o)?(this.selectorMap[o]||(this.selectorMap[o]=[]),this.selectorMap[o].push(d)):(d.target[this.scope.id]||Object.defineProperty(o,this.scope.id,{value:[],configurable:!0}),o[this.scope.id].push(d)),this.scope.fire("interactable:new",{target:o,options:l,interactable:d,win:this.scope._win}),d}},{key:"getExisting",value:function(o,l){var d=l&&l.context||this.scope.document,f=A.string(o),y=f?this.selectorMap[o]:o[this.scope.id];if(y)return Ee(y,function(M){return M._context===d&&(f||M.inContext(o))})}},{key:"forEachMatch",value:function(o,l){for(var d=0,f=this.list;d<f.length;d++){var y=f[d],M=void 0;if((A.string(y.target)?A.element(o)&&be(o,y.target):o===y.target)&&y.inContext(o)&&(M=l(y)),M!==void 0)return M}}}]),a}(),Nu=function(){function a(){var o=this;s(this,a),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=Z,this.defaults=Rn($a),this.Eventable=rl,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=function(d){var f=function y(M,T){var D=d.interactables.getExisting(M,T);return D||((D=d.interactables.new(M,T)).events.global=y.globalEvents),D};return f.getPointerAverage=ht,f.getTouchBBox=_e,f.getTouchDistance=De,f.getTouchAngle=Ge,f.getElementRect=Ue,f.getElementClientRect=me,f.matchesSelector=be,f.closest=ne,f.globalEvents={},f.version="1.10.27",f.scope=d,f.use=function(y,M){return this.scope.usePlugin(y,M),this},f.isSet=function(y,M){return!!this.scope.interactables.get(y,M&&M.context)},f.on=X(function(y,M,T){if(A.string(y)&&y.search(" ")!==-1&&(y=y.trim().split(/ +/)),A.array(y)){for(var D=0,F=y;D<F.length;D++){var L=F[D];this.on(L,M,T)}return this}if(A.object(y)){for(var H in y)this.on(H,y[H],M);return this}return an(y,this.scope.actions)?this.globalEvents[y]?this.globalEvents[y].push(M):this.globalEvents[y]=[M]:this.scope.events.add(this.scope.document,y,M,{options:T}),this},"The interact.on() method is being deprecated"),f.off=X(function(y,M,T){if(A.string(y)&&y.search(" ")!==-1&&(y=y.trim().split(/ +/)),A.array(y)){for(var D=0,F=y;D<F.length;D++){var L=F[D];this.off(L,M,T)}return this}if(A.object(y)){for(var H in y)this.off(H,y[H],M);return this}var ee;return an(y,this.scope.actions)?y in this.globalEvents&&(ee=this.globalEvents[y].indexOf(M))!==-1&&this.globalEvents[y].splice(ee,1):this.scope.events.remove(this.scope.document,y,M,T),this},"The interact.off() method is being deprecated"),f.debug=function(){return this.scope},f.supportsTouch=function(){return Z.supportsTouch},f.supportsPointerEvent=function(){return Z.supportsPointerEvent},f.stop=function(){for(var y=0,M=this.scope.interactions.list;y<M.length;y++)M[y].stop();return this},f.pointerMoveTolerance=function(y){return A.number(y)?(this.scope.interactions.pointerMoveTolerance=y,this):this.scope.interactions.pointerMoveTolerance},f.addDocument=function(y,M){this.scope.addDocument(y,M)},f.removeDocument=function(y){this.scope.removeDocument(y)},f}(this),this.InteractEvent=qs,this.Interactable=void 0,this.interactables=new Uu(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(d){return o.removeDocument(d.target)};var l=this;this.Interactable=function(d){p(y,d);var f=S(y);function y(){return s(this,y),f.apply(this,arguments)}return u(y,[{key:"_defaults",get:function(){return l.defaults}},{key:"set",value:function(M){return w(m(y.prototype),"set",this).call(this,M),l.fire("interactable:set",{options:M,interactable:this}),this}},{key:"unset",value:function(){w(m(y.prototype),"unset",this).call(this);var M=l.interactables.list.indexOf(this);M<0||(l.interactables.list.splice(M,1),l.fire("interactable:unset",{interactable:this}))}}]),y}(Iu)}return u(a,[{key:"addListeners",value:function(o,l){this.listenerMaps.push({id:l,map:o})}},{key:"fire",value:function(o,l){for(var d=0,f=this.listenerMaps;d<f.length;d++){var y=f[d].map[o];if(y&&y(l,this,o)===!1)return!1}}},{key:"init",value:function(o){return this.isInitialized?this:function(l,d){return l.isInitialized=!0,A.window(d)&&I(d),ie.init(d),Z.init(d),mn.init(d),l.window=d,l.document=d.document,l.usePlugin(Lu),l.usePlugin(Ru),l}(this,o)}},{key:"pluginIsInstalled",value:function(o){var l=o.id;return l?!!this._plugins.map[l]:this._plugins.list.indexOf(o)!==-1}},{key:"usePlugin",value:function(o,l){if(!this.isInitialized)return this;if(this.pluginIsInstalled(o))return this;if(o.id&&(this._plugins.map[o.id]=o),this._plugins.list.push(o),o.install&&o.install(this,l),o.listeners&&o.before){for(var d=0,f=this.listenerMaps.length,y=o.before.reduce(function(T,D){return T[D]=!0,T[ll(D)]=!0,T},{});d<f;d++){var M=this.listenerMaps[d].id;if(M&&(y[M]||y[ll(M)]))break}this.listenerMaps.splice(d,0,{id:o.id,map:o.listeners})}else o.listeners&&this.listenerMaps.push({id:o.id,map:o.listeners});return this}},{key:"addDocument",value:function(o,l){if(this.getDocIndex(o)!==-1)return!1;var d=N(o);l=l?de({},l):{},this.documents.push({doc:o,options:l}),this.events.documents.push(o),o!==this.document&&this.events.add(d,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:o,window:d,scope:this,options:l})}},{key:"removeDocument",value:function(o){var l=this.getDocIndex(o),d=N(o),f=this.documents[l].options;this.events.remove(d,"unload",this.onWindowUnload),this.documents.splice(l,1),this.events.documents.splice(l,1),this.fire("scope:remove-document",{doc:o,window:d,scope:this,options:f})}},{key:"getDocIndex",value:function(o){for(var l=0;l<this.documents.length;l++)if(this.documents[l].doc===o)return l;return-1}},{key:"getDocOptions",value:function(o){var l=this.getDocIndex(o);return l===-1?null:this.documents[l].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),a}();function ll(a){return a&&a.replace(/\/.*$/,"")}var cl=new Nu,Yt=cl.interactStatic,Ou=typeof globalThis<"u"?globalThis:window;cl.init(Ou);var Fu=Object.freeze({__proto__:null,edgeTarget:function(){},elements:function(){},grid:function(a){var o=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter(function(d){var f=d[0],y=d[1];return f in a||y in a}),l=function(d,f){for(var y=a.range,M=a.limits,T=M===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:M,D=a.offset,F=D===void 0?{x:0,y:0}:D,L={range:y,grid:a,x:null,y:null},H=0;H<o.length;H++){var ee=o[H],pe=ee[0],he=ee[1],ge=Math.round((d-F.x)/a[pe]),Le=Math.round((f-F.y)/a[he]);L[pe]=Math.max(T.left,Math.min(T.right,ge*a[pe]+F.x)),L[he]=Math.max(T.top,Math.min(T.bottom,Le*a[he]+F.y))}return L};return l.grid=a,l.coordFields=o,l}}),Bu={id:"snappers",install:function(a){var o=a.interactStatic;o.snappers=de(o.snappers||{},Fu),o.createSnapGrid=o.snappers.grid}},zu=Bu,ku={start:function(a){var o=a.state,l=a.rect,d=a.edges,f=a.pageCoords,y=o.options,M=y.ratio,T=y.enabled,D=o.options,F=D.equalDelta,L=D.modifiers;M==="preserve"&&(M=l.width/l.height),o.startCoords=de({},f),o.startRect=de({},l),o.ratio=M,o.equalDelta=F;var H=o.linkedEdges={top:d.top||d.left&&!d.bottom,left:d.left||d.top&&!d.right,bottom:d.bottom||d.right&&!d.top,right:d.right||d.bottom&&!d.left};if(o.xIsPrimaryAxis=!(!d.left&&!d.right),o.equalDelta){var ee=(H.left?1:-1)*(H.top?1:-1);o.edgeSign={x:ee,y:ee}}else o.edgeSign={x:H.left?-1:1,y:H.top?-1:1};if(T!==!1&&de(d,H),L!=null&&L.length){var pe=new Ht(a.interaction);pe.copyFrom(a.interaction.modification),pe.prepareStates(L),o.subModification=pe,pe.startAll(n({},a))}},set:function(a){var o=a.state,l=a.rect,d=a.coords,f=o.linkedEdges,y=de({},d),M=o.equalDelta?Hu:Vu;if(de(a.edges,f),M(o,o.xIsPrimaryAxis,d,l),!o.subModification)return null;var T=de({},l);Ot(f,T,{x:d.x-y.x,y:d.y-y.y});var D=o.subModification.setAll(n(n({},a),{},{rect:T,edges:f,pageCoords:d,prevCoords:d,prevRect:T})),F=D.delta;return D.changed&&(M(o,Math.abs(F.x)>Math.abs(F.y),D.coords,D.rect),de(d,D.coords)),D.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function Hu(a,o,l){var d=a.startCoords,f=a.edgeSign;o?l.y=d.y+(l.x-d.x)*f.y:l.x=d.x+(l.y-d.y)*f.x}function Vu(a,o,l,d){var f=a.startRect,y=a.startCoords,M=a.ratio,T=a.edgeSign;if(o){var D=d.width/M;l.y=y.y+(D-f.height)*T.y}else{var F=d.height*M;l.x=y.x+(F-f.width)*T.x}}var Gu=Pn(ku,"aspectRatio"),ul=function(){};ul._defaults={};var Xr=ul;function gi(a,o,l){return A.func(a)?pt(a,o.interactable,o.element,[l.x,l.y,o]):pt(a,o.interactable,o.element)}var qr={start:function(a){var o=a.rect,l=a.startOffset,d=a.state,f=a.interaction,y=a.pageCoords,M=d.options,T=M.elementRect,D=de({left:0,top:0,right:0,bottom:0},M.offset||{});if(o&&T){var F=gi(M.restriction,f,y);if(F){var L=F.right-F.left-o.width,H=F.bottom-F.top-o.height;L<0&&(D.left+=L,D.right+=L),H<0&&(D.top+=H,D.bottom+=H)}D.left+=l.left-o.width*T.left,D.top+=l.top-o.height*T.top,D.right+=l.right-o.width*(1-T.right),D.bottom+=l.bottom-o.height*(1-T.bottom)}d.offset=D},set:function(a){var o=a.coords,l=a.interaction,d=a.state,f=d.options,y=d.offset,M=gi(f.restriction,l,o);if(M){var T=function(D){return!D||"left"in D&&"top"in D||((D=de({},D)).left=D.x||0,D.top=D.y||0,D.right=D.right||D.left+D.width,D.bottom=D.bottom||D.top+D.height),D}(M);o.x=Math.max(Math.min(T.right-y.right,o.x),T.left+y.left),o.y=Math.max(Math.min(T.bottom-y.bottom,o.y),T.top+y.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}},Wu=Pn(qr,"restrict"),dl={top:1/0,left:1/0,bottom:-1/0,right:-1/0},hl={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function fl(a,o){for(var l=0,d=["top","left","bottom","right"];l<d.length;l++){var f=d[l];f in a||(a[f]=o[f])}return a}var mr={noInner:dl,noOuter:hl,start:function(a){var o,l=a.interaction,d=a.startOffset,f=a.state,y=f.options;y&&(o=at(gi(y.offset,l,l.coords.start.page))),o=o||{x:0,y:0},f.offset={top:o.y+d.top,left:o.x+d.left,bottom:o.y-d.bottom,right:o.x-d.right}},set:function(a){var o=a.coords,l=a.edges,d=a.interaction,f=a.state,y=f.offset,M=f.options;if(l){var T=de({},o),D=gi(M.inner,d,T)||{},F=gi(M.outer,d,T)||{};fl(D,dl),fl(F,hl),l.top?o.y=Math.min(Math.max(F.top+y.top,T.y),D.top+y.top):l.bottom&&(o.y=Math.max(Math.min(F.bottom+y.bottom,T.y),D.bottom+y.bottom)),l.left?o.x=Math.min(Math.max(F.left+y.left,T.x),D.left+y.left):l.right&&(o.x=Math.max(Math.min(F.right+y.right,T.x),D.right+y.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}},Xu=Pn(mr,"restrictEdges"),qu=de({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(a){}},qr.defaults),Yu=Pn({start:qr.start,set:qr.set,defaults:qu},"restrictRect"),ju={width:-1/0,height:-1/0},Ku={width:1/0,height:1/0},$u=Pn({start:function(a){return mr.start(a)},set:function(a){var o=a.interaction,l=a.state,d=a.rect,f=a.edges,y=l.options;if(f){var M=B(gi(y.min,o,a.coords))||ju,T=B(gi(y.max,o,a.coords))||Ku;l.options={endOnly:y.endOnly,inner:de({},mr.noInner),outer:de({},mr.noOuter)},f.top?(l.options.inner.top=d.bottom-M.height,l.options.outer.top=d.bottom-T.height):f.bottom&&(l.options.inner.bottom=d.top+M.height,l.options.outer.bottom=d.top+T.height),f.left?(l.options.inner.left=d.right-M.width,l.options.outer.left=d.right-T.width):f.right&&(l.options.inner.right=d.left+M.width,l.options.outer.right=d.left+T.width),mr.set(a),l.options=y}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}},"restrictSize"),Zs={start:function(a){var o,l=a.interaction,d=a.interactable,f=a.element,y=a.rect,M=a.state,T=a.startOffset,D=M.options,F=D.offsetWithOrigin?function(ee){var pe=ee.interaction.element,he=at(pt(ee.state.options.origin,null,null,[pe])),ge=he||tt(ee.interactable,pe,ee.interaction.prepared.name);return ge}(a):{x:0,y:0};if(D.offset==="startCoords")o={x:l.coords.start.page.x,y:l.coords.start.page.y};else{var L=pt(D.offset,d,f,[l]);(o=at(L)||{x:0,y:0}).x+=F.x,o.y+=F.y}var H=D.relativePoints;M.offsets=y&&H&&H.length?H.map(function(ee,pe){return{index:pe,relativePoint:ee,x:T.left-y.width*ee.x+o.x,y:T.top-y.height*ee.y+o.y}}):[{index:0,relativePoint:null,x:o.x,y:o.y}]},set:function(a){var o=a.interaction,l=a.coords,d=a.state,f=d.options,y=d.offsets,M=tt(o.interactable,o.element,o.prepared.name),T=de({},l),D=[];f.offsetWithOrigin||(T.x-=M.x,T.y-=M.y);for(var F=0,L=y;F<L.length;F++)for(var H=L[F],ee=T.x-H.x,pe=T.y-H.y,he=0,ge=f.targets.length;he<ge;he++){var Le=f.targets[he],Ae=void 0;(Ae=A.func(Le)?Le(ee,pe,o._proxy,H,he):Le)&&D.push({x:(A.number(Ae.x)?Ae.x:ee)+H.x,y:(A.number(Ae.y)?Ae.y:pe)+H.y,range:A.number(Ae.range)?Ae.range:f.range,source:Le,index:he,offset:H})}for(var He={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},Qe=0;Qe<D.length;Qe++){var ut=D[Qe],je=ut.range,et=ut.x-T.x,jt=ut.y-T.y,Rt=yt(et,jt),ln=Rt<=je;je===1/0&&He.inRange&&He.range!==1/0&&(ln=!1),He.target&&!(ln?He.inRange&&je!==1/0?Rt/je<He.distance/He.range:je===1/0&&He.range!==1/0||Rt<He.distance:!He.inRange&&Rt<He.distance)||(He.target=ut,He.distance=Rt,He.range=je,He.inRange=ln,He.delta.x=et,He.delta.y=jt)}return He.inRange&&(l.x=He.target.x,l.y=He.target.y),d.closest=He,He},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}},Zu=Pn(Zs,"snap"),Yr={start:function(a){var o=a.state,l=a.edges,d=o.options;if(!l)return null;a.state={options:{targets:null,relativePoints:[{x:l.left?0:1,y:l.top?0:1}],offset:d.offset||"self",origin:{x:0,y:0},range:d.range}},o.targetFields=o.targetFields||[["width","height"],["x","y"]],Zs.start(a),o.offsets=a.state.offsets,a.state=o},set:function(a){var o=a.interaction,l=a.state,d=a.coords,f=l.options,y=l.offsets,M={x:d.x-y[0].x,y:d.y-y[0].y};l.options=de({},f),l.options.targets=[];for(var T=0,D=f.targets||[];T<D.length;T++){var F=D[T],L=void 0;if(L=A.func(F)?F(M.x,M.y,o):F){for(var H=0,ee=l.targetFields;H<ee.length;H++){var pe=ee[H],he=pe[0],ge=pe[1];if(he in L||ge in L){L.x=L[he],L.y=L[ge];break}}l.options.targets.push(L)}}var Le=Zs.set(a);return l.options=f,Le},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}},Ju=Pn(Yr,"snapSize"),Js={aspectRatio:Gu,restrictEdges:Xu,restrict:Wu,restrictRect:Yu,restrictSize:$u,snapEdges:Pn({start:function(a){var o=a.edges;return o?(a.state.targetFields=a.state.targetFields||[[o.left?"left":"right",o.top?"top":"bottom"]],Yr.start(a)):null},set:Yr.set,defaults:de(Rn(Yr.defaults),{targets:void 0,range:void 0,offset:{x:0,y:0}})},"snapEdges"),snap:Zu,snapSize:Ju,spring:Xr,avoid:Xr,transform:Xr,rubberband:Xr},Qu={id:"modifiers",install:function(a){var o=a.interactStatic;for(var l in a.usePlugin(Ka),a.usePlugin(zu),o.modifiers=Js,Js){var d=Js[l],f=d._defaults,y=d._methods;f._methods=y,a.defaults.perAction[l]=f}}},ed=Qu,pl=function(a){p(l,a);var o=S(l);function l(d,f,y,M,T,D){var F;if(s(this,l),U(x(F=o.call(this,T)),y),y!==f&&U(x(F),f),F.timeStamp=D,F.originalEvent=y,F.type=d,F.pointerId=Fe(f),F.pointerType=Ye(f),F.target=M,F.currentTarget=null,d==="tap"){var L=T.getPointerIndex(f);F.dt=F.timeStamp-T.pointers[L].downTime;var H=F.timeStamp-T.tapTime;F.double=!!T.prevTap&&T.prevTap.type!=="doubletap"&&T.prevTap.target===F.target&&H<500}else d==="doubletap"&&(F.dt=f.timeStamp-T.tapTime,F.double=!0);return F}return u(l,[{key:"_subtractOrigin",value:function(d){var f=d.x,y=d.y;return this.pageX-=f,this.pageY-=y,this.clientX-=f,this.clientY-=y,this}},{key:"_addOrigin",value:function(d){var f=d.x,y=d.y;return this.pageX+=f,this.pageY+=y,this.clientX+=f,this.clientY+=y,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}]),l}(ot),gr={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(a){a.pointerEvents=gr,a.defaults.actions.pointerEvents=gr.defaults,de(a.actions.phaselessTypes,gr.types)},listeners:{"interactions:new":function(a){var o=a.interaction;o.prevTap=null,o.tapTime=0},"interactions:update-pointer":function(a){var o=a.down,l=a.pointerInfo;!o&&l.hold||(l.hold={duration:1/0,timeout:null})},"interactions:move":function(a,o){var l=a.interaction,d=a.pointer,f=a.event,y=a.eventTarget;a.duplicate||l.pointerIsDown&&!l.pointerWasMoved||(l.pointerIsDown&&Qs(a),ti({interaction:l,pointer:d,event:f,eventTarget:y,type:"move"},o))},"interactions:down":function(a,o){(function(l,d){for(var f=l.interaction,y=l.pointer,M=l.event,T=l.eventTarget,D=l.pointerIndex,F=f.pointers[D].hold,L=Pe(T),H={interaction:f,pointer:y,event:M,eventTarget:T,type:"hold",targets:[],path:L,node:null},ee=0;ee<L.length;ee++){var pe=L[ee];H.node=pe,d.fire("pointerEvents:collect-targets",H)}if(H.targets.length){for(var he=1/0,ge=0,Le=H.targets;ge<Le.length;ge++){var Ae=Le[ge].eventable.options.holdDuration;Ae<he&&(he=Ae)}F.duration=he,F.timeout=setTimeout(function(){ti({interaction:f,eventTarget:T,pointer:y,event:M,type:"hold"},d)},he)}})(a,o),ti(a,o)},"interactions:up":function(a,o){Qs(a),ti(a,o),function(l,d){var f=l.interaction,y=l.pointer,M=l.event,T=l.eventTarget;f.pointerWasMoved||ti({interaction:f,eventTarget:T,pointer:y,event:M,type:"tap"},d)}(a,o)},"interactions:cancel":function(a,o){Qs(a),ti(a,o)}},PointerEvent:pl,fire:ti,collectEventTargets:ml,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function ti(a,o){var l=a.interaction,d=a.pointer,f=a.event,y=a.eventTarget,M=a.type,T=a.targets,D=T===void 0?ml(a,o):T,F=new pl(M,d,f,y,l,o.now());o.fire("pointerEvents:new",{pointerEvent:F});for(var L={interaction:l,pointer:d,event:f,eventTarget:y,targets:D,type:M,pointerEvent:F},H=0;H<D.length;H++){var ee=D[H];for(var pe in ee.props||{})F[pe]=ee.props[pe];var he=tt(ee.eventable,ee.node);if(F._subtractOrigin(he),F.eventable=ee.eventable,F.currentTarget=ee.node,ee.eventable.fire(F),F._addOrigin(he),F.immediatePropagationStopped||F.propagationStopped&&H+1<D.length&&D[H+1].node!==F.currentTarget)break}if(o.fire("pointerEvents:fired",L),M==="tap"){var ge=F.double?ti({interaction:l,pointer:d,event:f,eventTarget:y,type:"doubletap"},o):F;l.prevTap=ge,l.tapTime=ge.timeStamp}return F}function ml(a,o){var l=a.interaction,d=a.pointer,f=a.event,y=a.eventTarget,M=a.type,T=l.getPointerIndex(d),D=l.pointers[T];if(M==="tap"&&(l.pointerWasMoved||!D||D.downTarget!==y))return[];for(var F=Pe(y),L={interaction:l,pointer:d,event:f,eventTarget:y,type:M,path:F,targets:[],node:null},H=0;H<F.length;H++){var ee=F[H];L.node=ee,o.fire("pointerEvents:collect-targets",L)}return M==="hold"&&(L.targets=L.targets.filter(function(pe){var he,ge;return pe.eventable.options.holdDuration===((he=l.pointers[T])==null||(ge=he.hold)==null?void 0:ge.duration)})),L.targets}function Qs(a){var o=a.interaction,l=a.pointerIndex,d=o.pointers[l].hold;d&&d.timeout&&(clearTimeout(d.timeout),d.timeout=null)}var td=Object.freeze({__proto__:null,default:gr});function nd(a){var o=a.interaction;o.holdIntervalHandle&&(clearInterval(o.holdIntervalHandle),o.holdIntervalHandle=null)}var id={id:"pointer-events/holdRepeat",install:function(a){a.usePlugin(gr);var o=a.pointerEvents;o.defaults.holdRepeatInterval=0,o.types.holdrepeat=a.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce(function(a,o){return a["pointerEvents:".concat(o)]=nd,a},{"pointerEvents:new":function(a){var o=a.pointerEvent;o.type==="hold"&&(o.count=(o.count||0)+1)},"pointerEvents:fired":function(a,o){var l=a.interaction,d=a.pointerEvent,f=a.eventTarget,y=a.targets;if(d.type==="hold"&&y.length){var M=y[0].eventable.options.holdRepeatInterval;M<=0||(l.holdIntervalHandle=setTimeout(function(){o.pointerEvents.fire({interaction:l,eventTarget:f,type:"hold",pointer:d,event:d},o)},M))}}})},rd=id,sd={id:"pointer-events/interactableTargets",install:function(a){var o=a.Interactable;o.prototype.pointerEvents=function(d){return de(this.events.options,d),this};var l=o.prototype._backCompatOption;o.prototype._backCompatOption=function(d,f){var y=l.call(this,d,f);return y===this&&(this.events.options[d]=f),y}},listeners:{"pointerEvents:collect-targets":function(a,o){var l=a.targets,d=a.node,f=a.type,y=a.eventTarget;o.interactables.forEachMatch(d,function(M){var T=M.events,D=T.options;T.types[f]&&T.types[f].length&&M.testIgnoreAllow(D,d,y)&&l.push({node:d,eventable:T,props:{interactable:M}})})},"interactable:new":function(a){var o=a.interactable;o.events.getRect=function(l){return o.getRect(l)}},"interactable:set":function(a,o){var l=a.interactable,d=a.options;de(l.events.options,o.pointerEvents.defaults),de(l.events.options,d.pointerEvents||{})}}},od=sd,ad={id:"pointer-events",install:function(a){a.usePlugin(td),a.usePlugin(rd),a.usePlugin(od)}},ld=ad,cd={id:"reflow",install:function(a){var o=a.Interactable;a.actions.phases.reflow=!0,o.prototype.reflow=function(l){return function(d,f,y){for(var M=d.getAllElements(),T=y.window.Promise,D=T?[]:null,F=function(){var H=M[L],ee=d.getRect(H);if(!ee)return 1;var pe,he=Ee(y.interactions.list,function(Ae){return Ae.interacting()&&Ae.interactable===d&&Ae.element===H&&Ae.prepared.name===f.name});if(he)he.move(),D&&(pe=he._reflowPromise||new T(function(Ae){he._reflowResolve=Ae}));else{var ge=B(ee),Le=function(Ae){return{coords:Ae,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}}({page:{x:ge.x,y:ge.y},client:{x:ge.x,y:ge.y},timeStamp:y.now()});pe=function(Ae,He,Qe,ut,je){var et=Ae.interactions.new({pointerType:"reflow"}),jt={interaction:et,event:je,pointer:je,eventTarget:Qe,phase:"reflow"};et.interactable=He,et.element=Qe,et.prevEvent=je,et.updatePointer(je,je,Qe,!0),W(et.coords.delta),q(et.prepared,ut),et._doPhase(jt);var Rt=Ae.window,ln=Rt.Promise,gn=ln?new ln(function(On){et._reflowResolve=On}):void 0;return et._reflowPromise=gn,et.start(ut,He,Qe),et._interacting?(et.move(jt),et.end(je)):(et.stop(),et._reflowResolve()),et.removePointer(je,je),gn}(y,d,H,f,Le)}D&&D.push(pe)},L=0;L<M.length&&!F();L++);return D&&T.all(D).then(function(){return d})}(this,l,a)}},listeners:{"interactions:stop":function(a,o){var l=a.interaction;l.pointerType==="reflow"&&(l._reflowResolve&&l._reflowResolve(),function(d,f){d.splice(d.indexOf(f),1)}(o.interactions.list,l))}}},ud=cd;if(Yt.use(Ct),Yt.use(el),Yt.use(ld),Yt.use(Au),Yt.use(ed),Yt.use(Zn),Yt.use(Ui),Yt.use(k),Yt.use(ud),Yt.default=Yt,r(i)==="object"&&i)try{i.exports=Yt}catch{}return Yt.default=Yt,Yt})})(Os,Os.exports);var W_=Os.exports;const X_=G_(W_);class Ws{constructor(e,t=16777215){this.id=e,this.originalColor=t,this.color=t,this.geometry=new $n,this.material=new Hs({color:this.color,side:Un}),this.mesh=new bn(this.geometry,this.material),this.corners=[{x:-.5,y:.5},{x:.5,y:.5},{x:.5,y:-.5},{x:-.5,y:-.5}],this.updateGeometry()}updateGeometry(){const e=new Float32Array([this.corners[0].x,this.corners[0].y,0,this.corners[1].x,this.corners[1].y,0,this.corners[2].x,this.corners[2].y,0,this.corners[3].x,this.corners[3].y,0]),t=[0,1,2,2,3,0];this.geometry.setAttribute("position",new Tn(e,3)),this.geometry.setIndex(t),this.geometry.computeVertexNormals(),this.geometry.attributes.position.needsUpdate=!0}toObject(){return{id:this.id,color:this.color,corners:this.corners.map(e=>({x:e.x,y:e.y})),position:{x:this.mesh.position.x,y:this.mesh.position.y,z:this.mesh.position.z}}}static fromObject(e){const t=new Ws(e.id,e.color);return t.corners=e.corners,t.mesh.position.set(e.position.x,e.position.y,e.position.z),t.updateGeometry(),t}setColor(e){this.color=e,this.material.color.set(e)}}class Br{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const q_=new Va(-1,1,1,-1,0,1);class Y_ extends $n{constructor(){super(),this.setAttribute("position",new Yn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yn([0,2,0,0,2,0],2))}}const j_=new Y_;class uu{constructor(e){this._mesh=new bn(j_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,q_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const du={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class K_ extends Br{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof tn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Is.clone(e.uniforms),this.material=new tn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new uu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class bc extends Br{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let c,u;this.inverse?(c=0,u=1):(c=1,u=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,c,4294967295),s.buffers.stencil.setClear(u),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class $_ extends Br{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Z_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new st);this._width=n.width,this._height=n.height,t=new En(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new K_(du),this.copyPass.material.blending=Xn,this.clock=new x_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const c=this.passes[r];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),c.needsSwap){if(n){const u=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}bc!==void 0&&(c instanceof bc?n=!0:c instanceof $_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class J_ extends Br{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new dt}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=r}}const Q_={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new dt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class lr extends Br{constructor(e,t,n,r){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new st(e.x,e.y):new st(256,256),this.clearColor=new dt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new En(s,c,{type:qn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const x=new En(s,c,{type:qn});x.texture.name="UnrealBloomPass.h"+g,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const S=new En(s,c,{type:qn});S.texture.name="UnrealBloomPass.v"+g,S.texture.generateMipmaps=!1,this.renderTargetsVertical.push(S),s=Math.round(s/2),c=Math.round(c/2)}const u=Q_;this.highPassUniforms=Is.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tn({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.separableBlurMaterials=[];const h=[3,5,7,9,11];s=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(h[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new st(1/s,1/c),s=Math.round(s/2),c=Math.round(c/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const m=du;this.copyUniforms=Is.clone(m.uniforms),this.blendMaterial=new tn({uniforms:this.copyUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,blending:No,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new dt,this.oldClearAlpha=1,this.basic=new Hs,this.fsQuad=new uu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new st(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let u=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this.fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=u.texture,this.separableBlurMaterials[h].uniforms.direction.value=lr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=lr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this.fsQuad.render(e),u=this.renderTargetsVertical[h];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=c}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new tn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new tn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}lr.BlurDirectionX=new st(1,0);lr.BlurDirectionY=new st(0,1);let xs,Ai,li,hu,fu;navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(i=>{xs=new(window.AudioContext||window.webkitAudioContext);const e=xs.createMediaStreamSource(i);Ai=xs.createAnalyser(),Ai.fftSize=256,hu=xs.sampleRate,fu=Ai.fftSize;const t=Ai.frequencyBinCount;li=new Uint8Array(t),e.connect(Ai),ev()}).catch(i=>{console.error("Error accessing microphone:",i)});function Uo(i){const[e,t]=i,n=hu/fu,r=Math.floor(e/n),s=Math.ceil(t/n);return{startIndex:r,endIndex:s}}let Ra,Pa,Da;function ev(){Ra=Uo([20,250]),Pa=Uo([250,4e3]),Da=Uo([4e3,2e4])}let Zt=[],Fs=0;function tv(){const i=Zt.map(e=>e.toObject());localStorage.setItem("tiles",JSON.stringify(i))}function nv(){Zt=[],localStorage.removeItem("tiles")}function pu(){const i=JSON.parse(localStorage.getItem("tiles"));i&&(Zt=i.map(e=>Ws.fromObject(e)),Zt.forEach(e=>{Xs.add(e.mesh)}),Fs=Zt.length)}const Ke={audioSensitivityLow:0,audioSensitivityMid:0,audioSensitivityHigh:0,normLowFreq:0,normMidFreq:0,normHighFreq:0,changeColor:!0,changeSaturation:!0,changeLightness:!0,useBloom:!0,bpm:120,changeLightsUpTo:1,selectedTileId:null,tileSelector:null,colorController:null,cornerFolders:[],tileColor:16777215,tileFolder:null},dr=new f_({antialias:!0});dr.toneMapping=Cc;dr.toneMappingExposure=1;dr.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(dr.domElement);const Xs=new p_,Ya=new v_(16777215,1);Ya.position.set(0,0,1);Ya.set;Xs.add(Ya);const Lr=new fn(45,window.innerWidth/window.innerHeight,.1,1e3);Lr.position.z=5;const ja=new Z_(dr);ja.addPass(new J_(Xs,Lr));const As=new lr(new st(window.innerWidth,window.innerHeight),.1,.1,.5);ja.addPass(As);window.addEventListener("resize",iv,!1);function iv(){Lr.aspect=window.innerWidth/window.innerHeight,Lr.updateProjectionMatrix(),dr.setSize(window.innerWidth,window.innerHeight);const i=Zt.find(e=>e.id===parseInt(Ke.selectedTileId));i&&i.corners.forEach((e,t)=>{const n=document.getElementById(`corner-handle-${t}`);n&&Ir(n,e)})}function mu(){if(requestAnimationFrame(mu),Ai){let u=function(h,p){if(p===0)return h;const m=Math.exp(p);return(Math.exp(p*h)-1)/(m-1)};var i=u;Ai.getByteFrequencyData(li);const e=li.slice(Ra.startIndex,Ra.endIndex),t=li.slice(Pa.startIndex,Pa.endIndex),n=li.slice(Da.startIndex,Da.endIndex),r=e.reduce((h,p)=>h+p,0)/e.length,s=t.reduce((h,p)=>h+p,0)/t.length,c=n.reduce((h,p)=>h+p,0)/n.length;Ke.lowFreqData=u(r/li.length,Ke.audioSensitivityLow),Ke.midFreqData=u(s/li.length,Ke.audioSensitivityMid),Ke.highFreqData=u(c/li.length,Ke.audioSensitivityHigh),sv(Ke.lowFreqData,Ke.midFreqData,Ke.highFreqData)}ja.render()}let Ec=0;const rv=60/Ke.bpm*1e3;function sv(i,e,t){const n=performance.now();if(Ke.changeColor&&n-Ec>rv&&i>.9){Ec=n;const r=Ke.changeLightsUpTo;for(let s=0;s<r;s++){const c=Zt[Math.floor(Math.random()*Zt.length)],u=new dt;u.setHSL(Math.random(),.9,.5),c.setColor(u)}}Ke.changeSaturation&&Zt.forEach(r=>{const s=new dt(r.color),c={};s.getHSL(c),c.s=.3+t*.6,s.setHSL(c.h,c.s,c.l),r.material.color.set(s)}),Ke.changeLightness&&(As.strength=.1+i*.2,As.radius=e*.2),Ke.useBloom||(As.strength=0)}mu();function gu(){const i=new dt(Math.random(),Math.random(),Math.random()),e=new Ws(Fs,i.getHex());Xs.add(e.mesh),Zt.push(e),Fs++,Ke.selectedTileId=e.id,_u()}const Kt=new H_;ov();pu();Zt.length===0?gu():Fs=Zt.length;_u();function ov(){Kt.add({addTile:gu},"addTile").name("Add Tile"),Kt.add({save:tv},"save").name("Save Tiles"),Kt.add({load:pu},"load").name("Load Tiles"),Kt.add({reset:nv},"reset").name("Reset Tiles"),Kt.add(Ke,"audioSensitivityLow",-10,10).name("Sensitivity Low (color change)"),Kt.add(Ke,"audioSensitivityMid",-10,10).name("Sensitivity Mid (bloom radius)"),Kt.add(Ke,"audioSensitivityHigh",-10,10).name("Sensitivity High (saturation)"),Kt.add(Ke,"changeColor").name("Change Color"),Kt.add(Ke,"changeSaturation").name("Change Saturation"),Kt.add(Ke,"changeLightness").name("Change Lightness"),Kt.add(Ke,"useBloom").name("Use Bloom"),Kt.add(Ke,"bpm",60,200).name("BPM"),Kt.add(Ke,"changeLightsUpTo",0,20).name("Change Lights Up To"),Kt.addColor(Ke,"tileColor").name("Global Tile Color").onChange(i=>{Zt.forEach(e=>e.setColor(i))}),Ke.tileFolder=Kt.addFolder("Tile Settings"),Ke.tileFolder.open()}function _u(){Ke.tileSelector&&Ke.tileFolder.remove(Ke.tileSelector);const i=Zt.map(e=>e.id.toString());Ke.selectedTileId=i[0]||null,Ke.tileSelector=Ke.tileFolder.add(Ke,"selectedTileId",i).name("Select Tile").onChange(Tc),Ke.selectedTileId!==null&&Tc()}function Tc(){const i=Zt.find(e=>e.id.toString()===Ke.selectedTileId);i&&(Ke.colorController&&Ke.tileFolder.remove(Ke.colorController),Ke.colorController=Ke.tileFolder.addColor(i,"color").name("Tile Color").onChange(e=>i.setColor(e)),av(i),lv(i))}function av(i){Ke.cornerFolders.forEach(e=>Ke.tileFolder.removeFolder(e)),Ke.cornerFolders=[],i.corners.forEach((e,t)=>{const n=Ke.tileFolder.addFolder(`Corner ${t+1}`);n.add(e,"x",-5,5).onChange(()=>{i.updateGeometry(),Ir(document.getElementById(`corner-handle-${t}`),e)}),n.add(e,"y",-5,5).onChange(()=>{i.updateGeometry(),Ir(document.getElementById(`corner-handle-${t}`),e)}),Ke.cornerFolders.push(n)})}function lv(i){const e=document.getElementById("corner-handles");e.innerHTML="",i.corners.forEach((t,n)=>{const r=document.createElement("div");r.className="corner-handle",r.id=`corner-handle-${n}`,e.appendChild(r),Ir(r,t),X_(r).draggable({onmove:s=>{const c=s.dx/(window.innerWidth/2),u=-s.dy/(window.innerHeight/2);t.x+=c*5,t.y+=u*5,Ir(r,t),i.updateGeometry()}})})}function Ir(i,e){const t=new j(e.x,e.y,0);t.project(Lr);const n=(t.x*.5+.5)*window.innerWidth,r=(t.y*-.5+.5)*window.innerHeight;i.style.left=`${n}px`,i.style.top=`${r}px`}
